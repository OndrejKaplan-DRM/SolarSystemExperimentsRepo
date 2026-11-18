import * as THREE from 'three';
import { BODIES, TYPE_NAME, RANKS, MISSIONS, QUIZ, CREDITS } from './data.js';

/* ================= základ ================= */
const AU = 149597870.7, D2R = Math.PI / 180, TAU = Math.PI * 2, EPS = 23.4392911 * D2R;
const $ = (s, r = document) => r.querySelector(s);
const B = Object.fromEntries(BODIES.map(b => [b.id, b]));
const SUNORB = BODIES.filter(b => b.orbit && b.orbit.t);
const PLANETS = BODIES.filter(b => b.type === 'planet');
const nf = (x, d = 0) => x.toLocaleString('cs-CZ', { maximumFractionDigits: d });
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

const store = { mode: null, visited: [], done: [], xp: 0, sound: true, mission: {} };
try { Object.assign(store, JSON.parse(localStorage.getItem('kosmicka-vyprava') || '{}')); } catch (e) { /* bez úložiště */ }
const save = () => { try { localStorage.setItem('kosmicka-vyprava', JSON.stringify(store)); } catch (e) { /* nevadí */ } };
const kid = () => store.mode !== 'pro';

const ICON = {
  atlas: '<circle cx="12" cy="12" r="5"/><ellipse cx="12" cy="12" rx="10.5" ry="3.6" transform="rotate(-20 12 12)" fill="none" stroke="currentColor" stroke-width="1.6"/>',
  mission: '<path d="M5 21V4m0 1h11l-2.5 4L16 13H5" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>',
  pass: '<rect x="5" y="3" width="14" height="18" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="10.5" r="3.2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M8.5 17h7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  quiz: '<path d="M9 9.2a3 3 0 1 1 4.6 2.5c-1 .7-1.6 1.2-1.6 2.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="18" r="1.3"/><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="1.6"/>',
  lab: '<path d="M9.5 3v6.2L4.6 18a2 2 0 0 0 1.8 3h11.2a2 2 0 0 0 1.8-3l-4.9-8.8V3M8 3h8M7.4 15h9.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
  play: '<path d="M7 4.5v15l12.5-7.5z"/>', pause: '<path d="M6.5 4.5h4v15h-4zM13.5 4.5h4v15h-4z"/>',
  ff: '<path d="M3.5 5.5v13l8.5-6.5zM12.5 5.5v13L21 12z"/>', rw: '<path d="M20.5 5.5v13L12 12zM11.5 5.5v13L3 12z"/>',
  home: '<path d="M4 11.5 12 4.5l8 7M6.5 10v9.5h11V10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  layers: '<path d="m12 3.5 9 5-9 5-9-5zM3.5 13l8.5 4.7 8.5-4.7M3.5 17l8.5 4.5 8.5-4.5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>',
  sound: '<path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M15 9a4.2 4.2 0 0 1 0 6M17.5 6.5a8 8 0 0 1 0 11" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  mute: '<path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="m15.5 9.5 5 5m0-5-5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  info: '<circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M12 11v6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><circle cx="12" cy="7.6" r="1.3"/>',
  close: '<path d="m6 6 12 12M18 6 6 18" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>',
  speak: '<path d="M4 5.5h16v10.5H10l-4.5 3.5V16H4z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M8 9.5h8M8 12.5h5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
  swap: '<path d="M4 8h14l-3.5-3.5M20 16H6l3.5 3.5" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>',
  check: '<path d="m5 12.5 4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>',
};
const ico = n => `<svg class="ico" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">${ICON[n]}</svg>`;

/* ================= zvuk ================= */
let actx;
function beep(freqs, dur = 0.11) {
  if (!store.sound) return;
  try {
    actx = actx || new (window.AudioContext || window.webkitAudioContext)();
    const t = actx.currentTime;
    freqs.forEach((f, i) => {
      const o = actx.createOscillator(), g = actx.createGain(), s = t + i * dur;
      o.type = 'triangle'; o.frequency.value = f;
      g.gain.setValueAtTime(0.0001, s); g.gain.linearRampToValueAtTime(0.1, s + 0.015); g.gain.exponentialRampToValueAtTime(0.0001, s + dur * 2.2);
      o.connect(g).connect(actx.destination); o.start(s); o.stop(s + dur * 2.4);
    });
  } catch (e) { /* zvuk není k dispozici */ }
}

/* ================= nebeská mechanika ================= */
const e2t = v => [v[0], v[2], -v[1]]; // ekliptika (z = sever) -> three (y = sever)
function elems(b, jd) {
  const o = b.orbit, T = (jd - 2451545) / 36525;
  if (o.t === 'jpl') { const v = o.el.map((x, i) => x + o.rate[i] * T); return { a: v[0], e: v[1], i: v[2] * D2R, O: v[5] * D2R, w: (v[4] - v[5]) * D2R, M: (v[3] - v[4]) * D2R }; }
  const n = 0.9856076686 / Math.pow(o.a, 1.5);
  const M = o.t === 'ep' ? o.M0 + n * (jd - o.ep) : n * (jd - o.Tp);
  return { a: o.a, e: o.e, i: o.i * D2R, O: o.O * D2R, w: o.w * D2R, M: M * D2R };
}
function kepler(M, e) {
  M = ((M + Math.PI) % TAU + TAU) % TAU - Math.PI;
  let E = e < 0.8 ? M : (M > 0 ? Math.PI : -Math.PI);
  for (let k = 0; k < 80; k++) { const d = (E - e * Math.sin(E) - M) / (1 - e * Math.cos(E)); E -= d; if (Math.abs(d) < 1e-12) break; }
  return E;
}
function pq(el) {
  const cO = Math.cos(el.O), sO = Math.sin(el.O), cw = Math.cos(el.w), sw = Math.sin(el.w), ci = Math.cos(el.i), si = Math.sin(el.i);
  return [e2t([cO * cw - sO * sw * ci, sO * cw + cO * sw * ci, sw * si]), e2t([-cO * sw - sO * cw * ci, -sO * sw + cO * cw * ci, cw * si])];
}
function poleVec(ra, dec) {
  const a = ra * D2R, d = dec * D2R, xe = Math.cos(d) * Math.cos(a), ye = Math.cos(d) * Math.sin(a), ze = Math.sin(d);
  return new THREE.Vector3(xe, -ye * Math.sin(EPS) + ze * Math.cos(EPS), -(ye * Math.cos(EPS) + ze * Math.sin(EPS))).normalize();
}
function basisFromPole(p) {
  const X = new THREE.Vector3().crossVectors(p, new THREE.Vector3(0, 1, 0));
  if (X.lengthSq() < 1e-8) X.set(1, 0, 0);
  X.normalize();
  const Z = new THREE.Vector3().crossVectors(X, p).normalize();
  return { X, Y: p.clone(), Z, q: new THREE.Quaternion().setFromRotationMatrix(new THREE.Matrix4().makeBasis(X, p, Z)) };
}
const ECL = basisFromPole(new THREE.Vector3(0, 1, 0));
BODIES.forEach((b, i) => {
  const par = b.parent && B[b.parent];
  if (b.pole) b.basis = basisFromPole(poleVec(...b.pole));
  else if (par) b.basis = b.ecl ? ECL : par.basis;
  else { const t = (b.tilt || 0) * D2R; b.basis = basisFromPole(new THREE.Vector3(0, Math.cos(t), Math.sin(t)).normalize()); }
  if (par) { b.dir = (b.retro ? -1 : 1) * Math.sign(par.rot || 1); b.th0 = (i * 2.399963) % TAU; }
  b.p = [0, 0, 0]; b.h = [0, 0, 0]; b.r = 0; b.Rs = 1;
});

/* ================= měřítko ================= */
let S = 0, Sgoal = 0; // 0 = přehledné, 1 = skutečné
const K_TRUE = 2000; // scénických jednotek na 1 AU ve skutečném měřítku
const mix = (a, b) => Math.exp((1 - S) * Math.log(a) + S * Math.log(b));
const scaleR = r => mix(60 * Math.pow(r, 0.55), K_TRUE * r);
const viewRad = R => Math.pow(R / 6371, 0.45);
const radius = R => mix(viewRad(R), R / AU * K_TRUE);
const moonDist = (a, Rp) => mix(viewRad(Rp) * (1 + 0.9 * Math.sqrt(a / Rp)), a / AU * K_TRUE);

/* ================= čas ================= */
const jdNow = () => Date.now() / 86400000 + 2440587.5;
const jdDate = jd => new Date((jd - 2440587.5) * 86400000);
const SPEEDS = [[1, 'skutečný čas', 'Opravdový čas'], [60, '1 min/s', null], [3600, '1 h/s', 'Hodina za vteřinu'], [86400, '1 den/s', 'Den za vteřinu'], [604800, '1 týden/s', null], [2592000, '1 měsíc/s', 'Měsíc za vteřinu'], [31557600, '1 rok/s', 'Rok za vteřinu'], [315576000, '10 let/s', null]];
const time = { jd: jdNow(), sp: 3, dir: 1, paused: false };
const speedList = () => SPEEDS.map((s, i) => i).filter(i => !kid() || SPEEDS[i][2]);

function computePositions(jd) {
  const d = jd - 2451545;
  for (const b of SUNORB) {
    const el = elems(b, jd), E = kepler(el.M, el.e), [P, Q] = pq(el);
    const x = el.a * (Math.cos(E) - el.e), y = el.a * Math.sqrt(1 - el.e * el.e) * Math.sin(E);
    b.el = el; b.E = E; b.P = P; b.Q = Q;
    for (let k = 0; k < 3; k++) b.h[k] = x * P[k] + y * Q[k];
    b.r = Math.hypot(b.h[0], b.h[1], b.h[2]);
    const f = scaleR(b.r) / b.r;
    for (let k = 0; k < 3; k++) b.p[k] = b.h[k] * f;
  }
  for (const b of BODIES) {
    b.Rs = radius(b.R);
    if (b.type !== 'moon') continue;
    const par = B[b.parent], ob = b.basis;
    b.th = b.id === 'moon' ? (218.316 + 13.176396 * d) * D2R : b.th0 + b.dir * TAU * d / b.orbit.P;
    b.md = moonDist(b.orbit.a, par.R);
    const c = Math.cos(b.th), s = Math.sin(b.th);
    b.p[0] = par.p[0] + (c * ob.X.x - s * ob.Z.x) * b.md; b.p[1] = par.p[1] + (c * ob.X.y - s * ob.Z.y) * b.md; b.p[2] = par.p[2] + (c * ob.X.z - s * ob.Z.z) * b.md;
    const k = b.orbit.a / AU / b.md;
    for (let j = 0; j < 3; j++) b.h[j] = par.h[j] + (b.p[j] - par.p[j]) * k;
    b.r = Math.hypot(b.h[0], b.h[1], b.h[2]);
  }
}

/* ================= scéna ================= */
const canvas = $('#c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, logarithmicDepthBuffer: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, 1, 0.01, 1e10);
const sunLight = new THREE.PointLight(0xfff6e8, Math.PI * 1.08, 0, 0);
scene.add(sunLight, new THREE.AmbientLight(0xffffff, 0.045));
let W = 1, H = 1;
function resize() { W = innerWidth; H = innerHeight; renderer.setSize(W, H, false); camera.aspect = W / H; camera.updateProjectionMatrix(); }
addEventListener('resize', resize); resize();

const manager = new THREE.LoadingManager();
const loader = new THREE.TextureLoader(manager);
const texCache = {};
function tex(name, ext = 'jpg', srgb = true) {
  if (!texCache[name]) { const t = loader.load(`tex/${name}.${ext}`); if (srgb) t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; texCache[name] = t; }
  return texCache[name];
}
manager.onProgress = (u, n, t) => { $('#loadbar').style.width = Math.round(n / t * 100) + '%'; };
function canvasTex(w, h, draw) { const c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d'), w, h); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; }
const glowTex = canvasTex(256, 256, (g, w) => { const r = g.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2); r.addColorStop(0, 'rgba(255,250,230,1)'); r.addColorStop(0.2, 'rgba(255,225,150,.85)'); r.addColorStop(0.42, 'rgba(255,170,70,.28)'); r.addColorStop(1, 'rgba(255,120,30,0)'); g.fillStyle = r; g.fillRect(0, 0, w, w); });
const comaTex = canvasTex(128, 128, (g, w) => { const r = g.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2); r.addColorStop(0, 'rgba(230,250,255,1)'); r.addColorStop(0.3, 'rgba(150,220,255,.45)'); r.addColorStop(1, 'rgba(120,200,255,0)'); g.fillStyle = r; g.fillRect(0, 0, w, w); });
const tailTex = canvasTex(64, 256, (g, w, h) => { const im = g.createImageData(w, h); for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) { const v = 1 - y / h, u = Math.abs(x / (w - 1) - 0.5) * 2, wd = 0.25 + 0.75 * (1 - v), a = Math.max(0, 1 - u / wd) ** 1.6 * v ** 1.4; const i = (y * w + x) * 4; im.data[i] = 170; im.data[i + 1] = 225; im.data[i + 2] = 255; im.data[i + 3] = a * 255; } g.putImageData(im, 0, 0); });
const uranusRingTex = canvasTex(256, 4, (g, w, h) => { g.clearRect(0, 0, w, h); [[20, 2, .25], [60, 2, .3], [98, 3, .3], [150, 2, .35], [228, 6, .7]].forEach(([x, ww, a]) => { g.fillStyle = `rgba(190,210,215,${a})`; g.fillRect(x, 0, ww, h); }); });

const VS = `#include <common>
#include <logdepthbuf_pars_vertex>
varying vec2 vUv; varying vec3 vN; varying vec3 vW;
void main(){ vUv=uv; vN=normalize(mat3(modelMatrix)*normal); vec4 w=modelMatrix*vec4(position,1.0); vW=w.xyz; gl_Position=projectionMatrix*viewMatrix*w;
#include <logdepthbuf_vertex>
}`;
const FS_HEAD = `#include <common>
#include <logdepthbuf_pars_fragment>
varying vec2 vUv; varying vec3 vN; varying vec3 vW;`;
const FS_EARTH = FS_HEAD + `uniform sampler2D dayMap; uniform sampler2D nightMap; uniform vec3 uSun;
void main(){
#include <logdepthbuf_fragment>
 float d=dot(normalize(vN),uSun); vec3 day=texture2D(dayMap,vUv).rgb; vec3 night=texture2D(nightMap,vUv).rgb;
 vec3 col=day*(max(d,0.0)*1.08+0.025)+night*smoothstep(0.06,-0.2,d)*vec3(1.5,1.25,0.9);
 gl_FragColor=vec4(col,1.0);
#include <colorspace_fragment>
}`;
const FS_ATM = FS_HEAD + `uniform vec3 uSun; uniform vec3 uColor; uniform float uK;
void main(){
#include <logdepthbuf_fragment>
 vec3 n=normalize(vN); float e=dot(normalize(vW-cameraPosition),n); float a=smoothstep(0.0,0.42,e)*uK; float day=smoothstep(-0.35,0.35,dot(n,uSun));
 gl_FragColor=vec4(uColor*a*day,1.0);
#include <colorspace_fragment>
}`;
const FS_RING = FS_HEAD + `uniform sampler2D map; uniform vec3 uSun; uniform vec3 uC; uniform float uR; uniform float uB;
void main(){
#include <logdepthbuf_fragment>
 vec4 t=texture2D(map,vUv); vec3 v=vW-uC; float tt=dot(v,uSun); float dp=length(v-tt*uSun);
 float sh=tt<0.0?smoothstep(uR*0.97,uR*1.03,dp):1.0;
 gl_FragColor=vec4(t.rgb*(0.1+0.9*sh)*uB,t.a);
#include <colorspace_fragment>
}`;

const GEO_HI = new THREE.SphereGeometry(1, 96, 64), GEO_LO = new THREE.SphereGeometry(1, 48, 32);
function ringGeo(r0, r1) {
  const g = new THREE.RingGeometry(r0, r1, 160, 1); g.rotateX(-Math.PI / 2);
  const p = g.attributes.position, uv = g.attributes.uv;
  for (let i = 0; i < p.count; i++) uv.setXY(i, (Math.hypot(p.getX(i), p.getZ(i)) - r0) / (r1 - r0), 0.5);
  return g;
}
function makeVisual(b) {
  const group = new THREE.Group(), spin = new THREE.Group(), U = { uSun: { value: new THREE.Vector3(1, 0, 0) } }, mats = [];
  group.add(spin);
  let mat;
  if (b.type === 'star') mat = new THREE.MeshBasicMaterial({ map: tex(b.tex) });
  else if (b.id === 'earth') mat = new THREE.ShaderMaterial({ vertexShader: VS, fragmentShader: FS_EARTH, uniforms: { dayMap: { value: tex('earth') }, nightMap: { value: tex('earth_night') }, uSun: U.uSun } });
  else mat = new THREE.MeshLambertMaterial({ map: tex(b.tex), color: b.type === 'comet' ? 0xa39c92 : 0xffffff, emissive: b.type === 'comet' ? 0x15130f : 0x000000 });
  const mesh = new THREE.Mesh(b.type === 'moon' || b.type === 'comet' ? GEO_LO : GEO_HI, mat);
  if (b.squash) mesh.scale.set(b.squash[0], b.squash[1], b.id === 'haumea' ? 0.9 : b.squash[0]);
  if (b.type === 'comet') mesh.scale.set(1.3, 0.75, 0.8);
  spin.add(mesh); mats.push(mat);
  if (b.id === 'earth') {
    const cm = new THREE.MeshLambertMaterial({ color: 0xffffff, alphaMap: tex('earth_clouds', 'jpg', false), transparent: true, depthWrite: false });
    const clouds = new THREE.Mesh(GEO_HI, cm); clouds.scale.setScalar(1.008); clouds.renderOrder = 1; spin.add(clouds); mats.push(cm);
  }
  if (b.type === 'star') {
    const sm = new THREE.SpriteMaterial({ map: glowTex, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true });
    const glow = new THREE.Sprite(sm); glow.scale.setScalar(4.6); glow.renderOrder = 2; group.add(glow); group.userData.glow = glow; mats.push(sm);
  }
  if (b.atm) {
    const am = new THREE.ShaderMaterial({ vertexShader: VS, fragmentShader: FS_ATM, uniforms: { uSun: U.uSun, uColor: { value: new THREE.Color(b.atm[0]) }, uK: { value: b.atm[1] } }, side: THREE.BackSide, blending: THREE.AdditiveBlending, transparent: true, depthWrite: false });
    const atm = new THREE.Mesh(GEO_LO, am); atm.scale.setScalar(1.05); group.add(atm); mats.push(am);
  }
  if (b.ring) {
    const sat = b.ring === 'saturn';
    U.uC = { value: new THREE.Vector3() }; U.uR = { value: 1 };
    const rm = new THREE.ShaderMaterial({ vertexShader: VS, fragmentShader: FS_RING, uniforms: { map: { value: sat ? tex('saturn_ring', 'png') : uranusRingTex }, uSun: U.uSun, uC: U.uC, uR: U.uR, uB: { value: sat ? 1.0 : 0.8 } }, side: THREE.DoubleSide, transparent: true, depthWrite: false });
    const ring = new THREE.Mesh(sat ? ringGeo(1.26, 2.36) : ringGeo(1.6, 2.04), rm); ring.renderOrder = 1; spin.add(ring); mats.push(rm);
  }
  return {
    group, spin, mats,
    update(sunDir) { U.uSun.value.copy(sunDir); if (U.uC) { U.uC.value.copy(group.position); U.uR.value = group.scale.x; } },
    dispose() { mats.forEach(m => m.dispose()); },
  };
}

// nebe
const GC = e2t([Math.cos(-5.54 * D2R) * Math.cos(266.84 * D2R), Math.cos(-5.54 * D2R) * Math.sin(266.84 * D2R), Math.sin(-5.54 * D2R)]);
const NGP = e2t([Math.cos(29.81 * D2R) * Math.cos(180.02 * D2R), Math.cos(29.81 * D2R) * Math.sin(180.02 * D2R), Math.sin(29.81 * D2R)]);
const skyGeo = new THREE.SphereGeometry(1, 48, 32); skyGeo.scale(-1, 1, 1);
const sky = new THREE.Mesh(skyGeo, new THREE.MeshBasicMaterial({ map: tex('sky'), color: 0x8a8a8a, depthWrite: false, depthTest: false }));
{ const X = new THREE.Vector3(...GC).negate().normalize(), Y = new THREE.Vector3(...NGP).normalize(), Z = new THREE.Vector3().crossVectors(X, Y).normalize(); sky.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(X, Y, Z)); }
sky.scale.setScalar(5e8); sky.renderOrder = -10; sky.frustumCulled = false; scene.add(sky);

// tělesa
for (const b of BODIES) { b.vis = makeVisual(b); scene.add(b.vis.group); }
const halley = B.halley;
const coma = new THREE.Sprite(new THREE.SpriteMaterial({ map: comaTex, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
const tailGeo = new THREE.PlaneGeometry(1, 1); tailGeo.translate(0, 0.5, 0);
const tail = new THREE.Mesh(tailGeo, new THREE.MeshBasicMaterial({ map: tailTex, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, side: THREE.DoubleSide }));
tail.matrixAutoUpdate = false; tail.frustumCulled = false; scene.add(coma, tail);

// dráhy
const lineMat = () => new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });
function makeLine(n, color, dim) {
  const g = new THREE.BufferGeometry(), pos = new Float32Array((n + 1) * 3), col = new Float32Array((n + 1) * 3), c = new THREE.Color(color);
  for (let k = 0; k <= n; k++) { const f = (0.1 + 0.9 * Math.pow(k / n, 1.6)) * dim; col[k * 3] = c.r * f; col[k * 3 + 1] = c.g * f; col[k * 3 + 2] = c.b * f; }
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const l = new THREE.Line(g, lineMat()); l.frustumCulled = false; scene.add(l); return l;
}
const NL = 420, NM = 128;
for (const b of BODIES) { if (b.type === 'star') continue; b.line = makeLine(b.type === 'moon' ? NM : NL, b.color, b.type === 'planet' ? 0.95 : b.type === 'moon' ? 0.6 : 0.7); }

// pásy planetek
function makeBelt(n, a0, a1, incl, color, size) {
  const g = new THREE.BufferGeometry(), pos = new Float32Array(n * 3), par = [];
  let seed = n * 7 + 3; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  for (let i = 0; i < n; i++) { const a = a0 + (a1 - a0) * (0.5 + (rnd() + rnd() + rnd() - 1.5) / 2.2); par.push([a, rnd() * TAU, Math.abs(rnd() + rnd() - 1) * incl * D2R, rnd() * TAU, 0.9856076686 * D2R / Math.pow(a, 1.5)]); }
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const pts = new THREE.Points(g, new THREE.PointsMaterial({ color, size, sizeAttenuation: false, transparent: true, opacity: 0.75, depthWrite: false }));
  pts.frustumCulled = false; pts.userData.par = par; scene.add(pts); return pts;
}
const belts = [makeBelt(2600, 2.1, 3.35, 14, 0xa89b88, 1.5), makeBelt(1800, 38, 49, 16, 0x8ea2b8, 1.5)];

// hvězdy navíc (ostré body)
{
  let seed = 12345; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  for (const [n, size, op] of [[2600, 1.3, 0.75], [260, 2.3, 0.95]]) {
    const pos = new Float32Array(n * 3), col = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { const z = rnd() * 2 - 1, t = rnd() * TAU, r = Math.sqrt(1 - z * z), c = new THREE.Color().setHSL(rnd() < 0.5 ? 0.6 : 0.09, 0.5 * rnd(), 0.65 + 0.35 * rnd()); pos.set([r * Math.cos(t), z, r * Math.sin(t)], i * 3); col.set([c.r, c.g, c.b], i * 3); }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    const p = new THREE.Points(g, new THREE.PointsMaterial({ size, sizeAttenuation: false, vertexColors: true, transparent: true, opacity: op, depthWrite: false }));
    p.renderOrder = -9; p.frustumCulled = false; sky.add(p);
  }
}

/* ================= kamera a let ================= */
const layers = { orbits: true, labels: true, moons: true, dwarf: true, belts: true, comet: true };
const cam = { yaw: 0.6, pitch: 0.62, dist: 300, goal: 300 };
let focus = B.sun, flight = null;
const O = [0, 0, 0];
const bodyVisible = b => b.type === 'moon' ? layers.moons && bodyVisible(B[b.parent]) : b.type === 'dwarf' ? layers.dwarf : b.type === 'comet' ? layers.comet : true;
const systemOf = b => b.type === 'moon' ? b.parent : b.id;
const cometAct = () => layers.comet ? clamp((4.5 - halley.r) / 3.6, 0, 1) : 0;
const defaultDist = b => b.type === 'comet' ? Math.max(b.Rs * 9, cometAct() * mix(22, 900) * 1.5) : b.Rs * (b.id === 'saturn' ? 6.5 : b.type === 'star' ? 6 : b.type === 'moon' ? 5 : 4.4);
const homeDist = () => scaleR(10) * 2.0;

function flyTo(b, dist) {
  if (b.type === 'moon') { layers.moons = true; if (B[b.parent].type === 'dwarf') layers.dwarf = true; }
  if (b.type === 'dwarf') layers.dwarf = true;
  if (b.type === 'comet') layers.comet = true;
  computePositions(time.jd);
  const d1 = dist || defaultDist(b);
  if (b === focus && !flight) { cam.goal = d1; openCard(b); setTimeout(() => arrive(b), 300); return; }
  flight = { from: flight ? null : focus, fromP: [...O], to: b, t: 0, dur: reduced ? 0.01 : 2.0, d0: cam.dist, d1, rel: d1 / b.Rs, home: !!dist };
  focus = b; openCard(b); renderDock();
}
function goHome() { cam.pitch = 0.62; flyTo(B.sun, homeDist()); }

/* ================= smyčka ================= */
const v3 = new THREE.Vector3(), v3b = new THREE.Vector3(), sunDir = new THREE.Vector3(), qY = new THREE.Quaternion(), YAX = new THREE.Vector3(0, 1, 0);
let last = performance.now(), uiT = 0, yearAcc = 0;
const cmp = { on: false, a: 'earth', b: 'jupiter' };

function frame(now) {
  requestAnimationFrame(frame);
  const dt = Math.min(0.1, (now - last) / 1000); last = now;
  if (cmp.on) { renderCompare(now / 1000); return; }

  // čas
  if (!time.paused) {
    const dj = dt * SPEEDS[time.sp][0] * time.dir / 86400; time.jd += dj;
    const m = activeMission(); if (m && m.cond === 'year') { yearAcc += Math.abs(dj); if (yearAcc >= 365.25) emit('year'); }
  }
  // měřítko
  const refOld = refLen();
  if (S !== Sgoal) { S += clamp(Sgoal - S, -dt / (reduced ? 0.01 : 1.6), dt / (reduced ? 0.01 : 1.6)); }
  computePositions(time.jd);
  if (refOld > 0) { const k = refLen() / refOld; if (k !== 1) { cam.dist *= k; cam.goal *= k; if (flight) { flight.d0 *= k; flight.d1 *= k; } } }

  // let a počátek
  if (flight) {
    flight.t += dt / flight.dur;
    const k = clamp(flight.t, 0, 1), e = k * k * (3 - 2 * k), A = flight.from ? flight.from.p : flight.fromP, Bp = flight.to.p;
    for (let j = 0; j < 3; j++) O[j] = A[j] + (Bp[j] - A[j]) * e;
    const sep = Math.hypot(Bp[0] - A[0], Bp[1] - A[1], Bp[2] - A[2]) * 0.55, l0 = Math.log(flight.d0), l1 = Math.log(flight.d1);
    const hump = sep > 0 ? Math.max(0, Math.log(sep) - Math.max(l0, l1)) * 0.7 : 0;
    cam.dist = cam.goal = Math.exp(l0 + (l1 - l0) * e + Math.sin(Math.PI * e) * hump);
    if (k >= 1) { const b = flight.to; flight = null; arrive(b); }
  } else {
    for (let j = 0; j < 3; j++) O[j] = focus.p[j];
    cam.goal = clamp(cam.goal, focus.Rs * 1.25, scaleR(70) * 4);
    cam.dist *= Math.exp((Math.log(cam.goal) - Math.log(cam.dist)) * (1 - Math.exp(-dt * 9)));
  }
  const cp = Math.cos(cam.pitch);
  camera.position.set(cam.dist * cp * Math.sin(cam.yaw), cam.dist * Math.sin(cam.pitch), cam.dist * cp * Math.cos(cam.yaw));
  camera.lookAt(0, 0, 0); camera.near = cam.dist * 0.01; camera.far = 1e10; camera.updateProjectionMatrix(); camera.updateMatrixWorld();
  sky.position.copy(camera.position);

  // tělesa
  const sun = B.sun, d = time.jd - 2451545;
  sunLight.position.set(sun.p[0] - O[0], sun.p[1] - O[1], sun.p[2] - O[2]);
  for (const b of BODIES) {
    const g = b.vis.group, on = bodyVisible(b);
    g.visible = on; if (b.line) b.line.visible = on && layers.orbits && (b.type !== 'moon' || b.parent === systemOf(focus));
    if (!on) continue;
    g.position.set(b.p[0] - O[0], b.p[1] - O[1], b.p[2] - O[2]); g.scale.setScalar(b.Rs);
    let Wr;
    if (b.id === 'earth') Wr = (280.46061837 + 360.98564736629 * d) * D2R;
    else if (b.type === 'moon') Wr = b.th + Math.PI;
    else Wr = TAU * d * 24 / b.rot;
    b.vis.spin.quaternion.copy(b.basis.q).multiply(qY.setFromAxisAngle(YAX, Wr % TAU));
    sunDir.set(sun.p[0] - b.p[0], sun.p[1] - b.p[1], sun.p[2] - b.p[2]).normalize();
    b.vis.update(sunDir);
  }
  const sg = sun.vis.group; sg.userData.glow.scale.setScalar(Math.max(4.6, 0.05 * v3.copy(sg.position).distanceTo(camera.position) / sun.Rs));

  // kometa
  const act = cometAct();
  coma.visible = tail.visible = act > 0.001;
  if (act > 0.001) {
    const L = act * mix(22, 900), hp = halley.vis.group.position;
    coma.position.copy(hp); coma.scale.setScalar(Math.max(halley.Rs * 5, L * 0.07));
    const Yv = v3.set(halley.p[0] - sun.p[0], halley.p[1] - sun.p[1], halley.p[2] - sun.p[2]).normalize();
    const Xv = v3b.copy(camera.position).sub(hp).cross(Yv).normalize(), Zv = new THREE.Vector3().crossVectors(Xv, Yv);
    tail.matrix.makeBasis(Xv.multiplyScalar(L * 0.2), Yv.multiplyScalar(L), Zv).setPosition(hp); tail.matrixWorldNeedsUpdate = true;
  }

  // dráhy
  if (layers.orbits) for (const b of BODIES) {
    if (!b.line || !b.line.visible) continue;
    const pos = b.line.geometry.attributes.position.array;
    if (b.type === 'moon') {
      const par = B[b.parent], ob = b.basis, px = par.p[0] - O[0], py = par.p[1] - O[1], pz = par.p[2] - O[2];
      for (let k = 0; k <= NM; k++) { const th = b.th - b.dir * TAU * (1 - k / NM), c = Math.cos(th) * b.md, s = Math.sin(th) * b.md; pos[k * 3] = px + c * ob.X.x - s * ob.Z.x; pos[k * 3 + 1] = py + c * ob.X.y - s * ob.Z.y; pos[k * 3 + 2] = pz + c * ob.X.z - s * ob.Z.z; }
    } else {
      const el = b.el, bb = el.a * Math.sqrt(1 - el.e * el.e), P = b.P, Q = b.Q;
      for (let k = 0; k <= NL; k++) {
        const E = b.E - TAU * (1 - k / NL), x = el.a * (Math.cos(E) - el.e), y = bb * Math.sin(E);
        const hx = x * P[0] + y * Q[0], hy = x * P[1] + y * Q[1], hz = x * P[2] + y * Q[2], r = Math.hypot(hx, hy, hz), f = scaleR(r) / r;
        pos[k * 3] = hx * f - O[0]; pos[k * 3 + 1] = hy * f - O[1]; pos[k * 3 + 2] = hz * f - O[2];
      }
    }
    b.line.geometry.attributes.position.needsUpdate = true;
  }
  // pásy
  for (const belt of belts) {
    belt.visible = layers.belts; if (!layers.belts) continue;
    const pos = belt.geometry.attributes.position.array, par = belt.userData.par;
    for (let i = 0; i < par.length; i++) { const q = par[i], th = q[1] + q[4] * d, f = scaleR(q[0]), sy = Math.sin(q[2]) * Math.sin(th - q[3]), cy = Math.sqrt(1 - sy * sy); pos[i * 3] = Math.cos(th) * cy * f - O[0]; pos[i * 3 + 1] = sy * f - O[1]; pos[i * 3 + 2] = -Math.sin(th) * cy * f - O[2]; }
    belt.geometry.attributes.position.needsUpdate = true;
  }

  renderer.render(scene, camera);
  updateLabels();
  uiT += dt; if (uiT > 0.2) { uiT = 0; tickUI(); }
}
function refLen() { return focus.type === 'star' && cam.dist > focus.Rs * 20 ? scaleR(1) : focus.Rs; }

/* ================= popisky a výběr ================= */
const labelsEl = $('#labels');
for (const b of BODIES) {
  const el = document.createElement('button'); el.className = 'lbl t-' + b.type; el.type = 'button';
  el.innerHTML = `<i style="border-color:${b.color}"></i><span>${b.name}</span>`;
  el.addEventListener('click', e => { e.stopPropagation(); flyTo(b); beep([520]); });
  labelsEl.appendChild(el); b.lbl = el; b.lblSpan = el.lastChild; b.sx = -1e5; b.sy = -1e5; b.rpx = 0; b.scr = false;
}
const PRIO = { star: 1, planet: 2, dwarf: 3, comet: 3, moon: 4 };
function updateLabels() {
  const pxk = H / (2 * Math.tan(camera.fov * D2R / 2)), sys = systemOf(focus), placed = [], list = [];
  for (const b of BODIES) {
    b.scr = false;
    if (!bodyVisible(b)) { b.lbl.style.display = 'none'; continue; }
    v3.set(b.p[0] - O[0], b.p[1] - O[1], b.p[2] - O[2]).applyMatrix4(camera.matrixWorldInverse);
    if (v3.z > -camera.near) { b.lbl.style.display = 'none'; continue; }
    const dz = -v3.z; v3.applyMatrix4(camera.projectionMatrix);
    b.sx = (v3.x * 0.5 + 0.5) * W; b.sy = (-v3.y * 0.5 + 0.5) * H; b.rpx = b.Rs / dz * pxk; b.scr = true; b.dz = dz;
    let show = layers.labels && b.sx > -40 && b.sx < W + 40 && b.sy > -20 && b.sy < H + 20 && b.rpx < Math.min(W, H) * 0.2;
    if (b.type === 'moon') { const par = B[b.parent], inSys = b.parent === sys; if (!inSys) b.scr = b.rpx > 3; show = show && inSys && (b === focus || Math.hypot(b.sx - par.sx, b.sy - par.sy) > Math.max(16, par.rpx * 0.5)); }
    if (show && b === focus && b.rpx > 30) show = false;
    if (show) list.push(b); else b.lbl.style.display = 'none';
  }
  list.sort((a, b2) => (a === focus ? 0 : PRIO[a.type]) - (b2 === focus ? 0 : PRIO[b2.type]));
  const fs = kid() ? 9.5 : 7.6;
  for (const b of list) {
    if (b !== focus && focus.scr && b.dz > focus.dz && Math.hypot(b.sx - focus.sx, b.sy - focus.sy) < focus.rpx) { b.lbl.style.display = 'none'; continue; }
    const o = Math.min(b.rpx, 60) * 0.72 + 9, x0 = b.sx + o, y0 = b.sy - o - 10, x1 = x0 + b.name.length * fs + 8, y1 = y0 + 20;
    if (placed.some(p => x0 < p[2] && x1 > p[0] && y0 < p[3] && y1 > p[1])) { b.lbl.style.display = 'none'; continue; }
    placed.push([x0, y0, x1, y1]);
    const st = b.lbl.style; st.display = ''; st.transform = `translate(${b.sx.toFixed(1)}px,${b.sy.toFixed(1)}px)`;
    b.lblSpan.style.transform = `translate(${o.toFixed(1)}px,${(-o).toFixed(1)}px)`;
    b.lbl.classList.toggle('dot', b.rpx < 5); b.lbl.classList.toggle('on', b === focus);
  }
}
function pick(x, y) {
  let best = null, bd = 1e9;
  for (const b of BODIES) { if (!b.scr || (b === focus && b.rpx > 40)) continue; if (Math.hypot(b.sx - x, b.sy - y) < Math.max(b.rpx, 14) && b.rpx < bd) { best = b; bd = b.rpx; } }
  return best;
}
// ovládání
const stage = $('#stage'), ptrs = new Map(); let moved = 0, pinch = 0;
stage.addEventListener('pointerdown', e => { ptrs.set(e.pointerId, [e.clientX, e.clientY]); moved = 0; if (ptrs.size === 2) { const a = [...ptrs.values()]; pinch = Math.hypot(a[0][0] - a[1][0], a[0][1] - a[1][1]); } });
addEventListener('pointermove', e => {
  const p = ptrs.get(e.pointerId); if (!p) return;
  const dx = e.clientX - p[0], dy = e.clientY - p[1]; p[0] = e.clientX; p[1] = e.clientY; moved += Math.abs(dx) + Math.abs(dy);
  if (ptrs.size === 1) { cam.yaw -= dx * 0.0055; cam.pitch = clamp(cam.pitch + dy * 0.0055, -1.5, 1.5); }
  else if (ptrs.size === 2) { const a = [...ptrs.values()], d = Math.hypot(a[0][0] - a[1][0], a[0][1] - a[1][1]); if (pinch > 0 && !flight) cam.goal *= pinch / d; pinch = d; }
});
const up = e => { if (!ptrs.has(e.pointerId)) return; ptrs.delete(e.pointerId); if (moved < 6 && e.type === 'pointerup' && e.target === canvas && !cmp.on) { const b = pick(e.clientX, e.clientY); if (b) { flyTo(b); beep([520]); } } };
addEventListener('pointerup', up); addEventListener('pointercancel', up);
stage.addEventListener('wheel', e => { e.preventDefault(); if (!flight) cam.goal *= Math.exp(clamp(e.deltaY, -120, 120) * 0.0022); }, { passive: false });
addEventListener('keydown', e => {
  if (/INPUT|SELECT|TEXTAREA/.test(e.target.tagName)) return;
  if (e.code === 'Space') { e.preventDefault(); time.paused = !time.paused; renderTime(); }
  if (e.key === 'Escape') { if (cmp.on) closeCompare(); else if (!$('#modal').hidden) closeModal(); else closePanel(); }
});

/* ================= hra: razítka, body, mise ================= */
function rank() { let i = 0; RANKS.forEach((r, k) => { if (store.xp >= r[0]) i = k; }); const next = RANKS[i + 1]; return { name: RANKS[i][1], next, pct: next ? (store.xp - RANKS[i][0]) / (next[0] - RANKS[i][0]) * 100 : 100 }; }
function addXp(n) { const before = rank().name; store.xp += n; save(); renderRank(); const r = rank(); if (r.name !== before) { toast(`Nová hodnost: <b>${r.name}</b>`, 't-rank'); beep([523, 659, 784, 1047], 0.13); } }
function toast(html, cls = '') { const t = document.createElement('div'); t.className = 'toast ' + cls; t.innerHTML = html; $('#toasts').appendChild(t); setTimeout(() => t.classList.add('out'), 3600); setTimeout(() => t.remove(), 4200); }
function arrive(b) {
  if (!store.visited.includes(b.id)) { store.visited.push(b.id); toast(`Nové razítko do pasu: <b>${b.name}</b> <em>+10</em>`, 't-stamp'); beep([660, 880]); addXp(10); if (panelTab === 'pass' || panelTab === 'atlas') renderPanel(); renderDock(); }
  emit('arrive', b.id);
}
const missionList = () => MISSIONS[kid() ? 'kid' : 'pro'];
function activeMission() { const l = missionList(), id = store.mission[store.mode || 'kid']; return l.find(m => m.id === id && !store.done.includes(m.id)) || l.find(m => !store.done.includes(m.id)) || null; }
function emit(ev, val) {
  const m = activeMission(); if (!m) return;
  let ok = false;
  if (m.target && ev === 'arrive') ok = [].concat(m.target).includes(val);
  if (m.cond === ev) ok = true;
  if (m.cond === 'allPlanets') ok = PLANETS.every(p => store.visited.includes(p.id));
  if (!ok) return;
  store.done.push(m.id); yearAcc = 0; save();
  toast(`Mise splněna! <em>+30</em>`, 't-mission'); beep([523, 659, 784], 0.12); addXp(30);
  showHint = false; renderMission(); if (panelTab === 'mission') renderPanel();
  setTimeout(() => emit('check'), 50);
}
let showHint = false, missionMin = false;
function renderMission() {
  const el = $('#mission'), m = activeMission(), l = missionList(), n = l.filter(x => store.done.includes(x.id)).length;
  if (!store.mode) { el.hidden = true; return; }
  el.hidden = false; el.classList.toggle('min', missionMin);
  if (!m) { el.innerHTML = `<div class="m-head"><span class="eyebrow">Mise ${n}/${l.length}</span></div><p>Všechny mise jsou splněné. Zkus kvíz nebo dosbírej razítka do pasu.</p>`; return; }
  el.innerHTML = `<div class="m-head"><span class="eyebrow">Mise ${n + 1} z ${l.length}</span><button class="link" data-act="hint">${showHint ? 'Skrýt nápovědu' : 'Nápověda'}</button><button class="iconbtn sm" data-act="mission-min" aria-label="${missionMin ? 'Rozbalit misi' : 'Sbalit misi'}">${missionMin ? '+' : '−'}</button></div><p>${m.text}</p>${showHint ? `<p class="hint">${m.hint}</p>` : ''}`;
}
function renderRank() { const r = rank(); $('#rank').innerHTML = `<b>${r.name}</b><span class="xp">${store.xp} b.</span><span class="bar"><i style="width:${r.pct}%"></i></span>`; $('#rank').title = r.next ? `Do hodnosti ${r.next[1]} zbývá ${r.next[0] - store.xp} bodů` : 'Nejvyšší hodnost'; }

/* ================= formátování ================= */
const un = (x, d, frac, whole) => { const s = nf(x, d); return s + ' ' + (s.includes(',') ? frac : whole); };
const fmtHours = h => { h = Math.abs(h); if (h < 72) { const hh = Math.floor(h), mm = Math.round((h - hh) * 60); return `${hh} h ${mm} min`; } return un(h / 24, 1, 'dne', 'dní'); };
const fmtDays = d => d < 1 ? fmtHours(d * 24) : d < 800 ? un(d, 2, 'dne', 'dní') : un(d / 365.25, 2, 'roku', 'let');
const fmtDaysKid = d => d < 1.5 ? `${nf(d * 24)} hodin` : d < 800 ? `${nf(d)} dní` : `${nf(d / 365.25, d < 4000 ? 1 : 0)} ${d / 365.25 < 5 ? 'roku' : 'let'}`;
const fmtLight = au => { const s = au * 499.004784; return s < 60 ? `${nf(s, 1)} s` : s < 3600 ? `${Math.floor(s / 60)} min ${Math.round(s % 60)} s` : `${Math.floor(s / 3600)} h ${Math.round(s % 3600 / 60)} min`; };
function fmtDur(hours) {
  const s = hours * 3600;
  if (s < 90) return `${nf(s)} s`; if (s < 5400) return `${nf(s / 60)} min`; if (hours < 48) return `${nf(hours, 1)} h`;
  const d = hours / 24; if (d < 700) return `${nf(d)} dní`;
  const y = d / 365.25; if (y < 10) return un(y, 1, 'roku', 'let'); if (y < 1e4) return `${nf(y)} let`; if (y < 1e6) return `${nf(y / 1000)} tisíc let`; return un(y / 1e6, 1, 'milionu let', 'milionů let');
}
const periodDays = b => b.type === 'moon' ? b.orbit.P : b.orbit && b.orbit.t ? Math.pow(b.orbit.t === 'jpl' ? b.orbit.el[0] : b.orbit.a, 1.5) * 365.25 : null;
const distTo = (a, b) => Math.hypot(a.h[0] - b.h[0], a.h[1] - b.h[1], a.h[2] - b.h[2]);
const thumb = (b, cls = '') => `<span class="thumb ${cls} th-${b.type}" style="background-image:url(tex/${b.tex}.jpg)"></span>`;

/* ================= karta tělesa ================= */
let cardBody = null;
function openCard(b) { cardBody = b; renderCard(); }
function closeCard() { cardBody = null; $('#card').hidden = true; stopSpeak(); }
function renderCard() {
  const b = cardBody, el = $('#card'); if (!b || !store.mode) { el.hidden = true; return; }
  el.hidden = false;
  const par = b.parent && B[b.parent], moons = BODIES.filter(m => m.parent === b.id), pd = periodDays(b), ratio = b.R / 6371;
  const sizeTxt = ratio > 1.15 ? `${nf(ratio, ratio < 20 ? 1 : 0)}× širší než Země` : ratio < 0.87 ? `Země je ${nf(1 / ratio, 1 / ratio < 20 ? 1 : 0)}× širší` : 'skoro jako Země';
  let body;
  if (kid()) {
    body = `<ul class="facts">${b.k.map(f => `<li>${f}</li>`).join('')}</ul>
    <div class="tiles">
      <div><span>Velikost</span><b>${b.id === 'earth' ? 'průměr 12 742 km' : sizeTxt}</b></div>
      ${b.rot && b.type !== 'moon' ? `<div><span>Jedna otočka</span><b>${fmtDaysKid(Math.abs(b.rot) / 24)}${b.rot < 0 ? ' (pozpátku)' : ''}</b></div>` : ''}
      ${pd ? `<div><span>${par ? 'Oběh kolem: ' + par.name : 'Oběh kolem Slunce'}</span><b>${fmtDaysKid(pd)}</b></div>` : ''}
      <div><span>Teplota</span><b>${b.temp}</b></div>
      ${b.type !== 'star' ? `<div><span>Od Slunce teď</span><b id="lv-sun">–</b></div>` : ''}
      ${b.moons ? `<div><span>Měsíce</span><b>${b.moons}</b></div>` : ''}
    </div>
    <button class="btn ghost" data-act="speak">${ico('speak')} Přečti mi to</button>`;
  } else {
    const o = b.orbit || {}, a = o.t === 'jpl' ? o.el[0] : o.a, ecc = o.t === 'jpl' ? o.el[1] : o.e, inc = o.t === 'jpl' ? o.el[2] : o.i;
    const rows = [
      ['Střední poloměr', `${nf(b.R, b.R < 100 ? 1 : 0)} km (${nf(ratio, 3)} R⊕)`],
      b.mass ? ['Hmotnost', `${nf(b.mass, 4)} M⊕`] : null,
      ['Gravitace na povrchu', `${nf(b.g, b.g < 0.1 ? 4 : 2)} m/s² (${nf(b.g / 9.81, 3)} g)`],
      b.type === 'moon' ? ['Rotace', 'vázaná'] : ['Rotace (siderická)', fmtDays(Math.abs(b.rot) / 24) + (b.rot < 0 ? ', retrográdní' : '')],
      pd ? ['Oběžná doba', fmtDays(pd) + (b.retro ? ', retrográdní' : '')] : null,
      a ? ['Velká poloosa', o.t ? `${nf(a, 3)} AU` : `${nf(a)} km`] : null,
      o.t ? ['Výstřednost', nf(ecc, 4)] : null,
      o.t ? ['Sklon dráhy k ekliptice', `${nf(Math.abs(inc) < 0.005 ? 0 : inc, 2)}°`] : null,
      b.tilt != null ? ['Sklon osy', `${nf(b.tilt, 2)}°`] : null,
      ['Teplota', b.temp],
      b.moons != null ? ['Známé měsíce', String(b.moons)] : null,
    ].filter(Boolean);
    body = `<p class="desc">${b.a}</p>
    <table class="data"><tbody>${rows.map(r => `<tr><th>${r[0]}</th><td>${r[1]}</td></tr>`).join('')}</tbody></table>
    ${b.type !== 'star' ? `<div class="eyebrow">Právě teď v modelu</div><table class="data now"><tbody>
      <tr><th>Od Slunce</th><td id="lv-sun">–</td></tr>${b.id !== 'earth' ? '<tr><th>Od Země</th><td id="lv-earth">–</td></tr><tr><th>Světlo ze Země doletí za</th><td id="lv-light">–</td></tr>' : ''}
      ${o.t ? '<tr><th>Rychlost na dráze</th><td id="lv-v">–</td></tr>' : ''}</tbody></table>` : ''}`;
  }
  el.innerHTML = `<div class="card-head">${thumb(b, 'lg')}<div><h2>${b.name}</h2><div class="chips"><span class="chip">${TYPE_NAME[b.type]}</span>${store.visited.includes(b.id) ? `<span class="chip ok">${ico('check')} razítko</span>` : ''}</div><p class="tag">${b.tag}</p></div><button class="iconbtn" data-act="card-close" aria-label="Zavřít kartu">${ico('close')}</button></div>
  ${body}
  ${moons.length ? `<div class="eyebrow">${kid() ? 'Měsíce, ke kterým můžeš letět' : 'Měsíce v modelu'}</div><div class="moonrow">${moons.map(m => `<button class="pill" data-go="${m.id}">${thumb(m)}${m.name}</button>`).join('')}</div>` : ''}
  <div class="actions">${par ? `<button class="btn ghost" data-go="${par.id}">${kid() ? 'Zpět k tělesu' : 'K tělesu'} ${par.name}</button>` : ''}${b.id !== 'earth' ? `<button class="btn" data-act="cmp-earth">${kid() ? 'Porovnat se Zemí' : 'Porovnat se Zemí'}</button>` : `<button class="btn" data-act="cmp-sun">Porovnat se Sluncem</button>`}</div>`;
  tickUI();
}
function tickUI() {
  renderDate();
  const b = cardBody; if (!b || b.type === 'star') return;
  const set = (id, t) => { const e = $('#' + id); if (e) e.textContent = t; };
  set('lv-sun', kid() ? `${nf(b.r * AU / 1e6, b.r < 2 ? 1 : 0)} milionu km` : `${nf(b.r, 3)} AU = ${nf(b.r * AU / 1e6, 1)} mil. km`);
  const de = distTo(b, B.earth);
  set('lv-earth', de * AU < 2e6 ? `${nf(de * AU)} km` : `${nf(de, 3)} AU = ${nf(de * AU / 1e6, 1)} mil. km`); set('lv-light', fmtLight(de));
  if (b.el) set('lv-v', `${nf(29.7847 * Math.sqrt(Math.max(0, 2 / b.r - 1 / b.el.a)), 2)} km/s`);
  const m = activeMission(); if (m && m.cond === 'halley' && halley.r < 2) emit('halley');
}
let speaking = false;
function stopSpeak() { try { speechSynthesis.cancel(); } catch (e) { /* nic */ } speaking = false; }
function speak() {
  try {
    if (speaking) { stopSpeak(); return; }
    const u = new SpeechSynthesisUtterance(`${cardBody.name}. ${cardBody.k.join(' ')}`); u.lang = 'cs-CZ'; u.rate = 0.92;
    const v = speechSynthesis.getVoices().find(x => x.lang && x.lang.toLowerCase().startsWith('cs')); if (v) u.voice = v;
    u.onend = () => { speaking = false; }; speaking = true; speechSynthesis.speak(u);
  } catch (e) { toast('Tento prohlížeč neumí číst nahlas.'); }
}

/* ================= panely ================= */
let panelTab = null, atlasQ = '';
const TABS = [['atlas', 'Atlas'], ['mission', 'Mise'], ['pass', 'Pas'], ['quiz', 'Kvíz'], ['lab', 'Laboratoř']];
function renderRail() { $('#rail').innerHTML = TABS.map(t => `<button data-tab="${t[0]}" class="${panelTab === t[0] ? 'on' : ''}" aria-pressed="${panelTab === t[0]}">${ico(t[0])}<span>${t[1]}</span></button>`).join(''); }
function openPanel(t) { panelTab = panelTab === t ? null : t; renderRail(); renderPanel(); }
function closePanel() { panelTab = null; renderRail(); renderPanel(); }
function item(b) { const v = store.visited.includes(b.id); return `<button class="item ${v ? 'seen' : ''}" data-go="${b.id}">${thumb(b)}<span class="nm">${b.name}</span><span class="ty">${TYPE_NAME[b.type]}${b.parent ? ' · ' + B[b.parent].name : ''}</span>${v ? `<span class="tick">${ico('check')}</span>` : ''}</button>`; }
function renderPanel() {
  const el = $('#panel'); if (!panelTab) { el.hidden = true; return; }
  el.hidden = false;
  const head = t => `<div class="p-head"><h2>${t}</h2><button class="iconbtn" data-act="panel-close" aria-label="Zavřít panel">${ico('close')}</button></div>`;
  if (panelTab === 'atlas') {
    const q = atlasQ.trim().toLowerCase(), f = b => !q || b.name.toLowerCase().includes(q) || TYPE_NAME[b.type].includes(q);
    const grp = (t, list) => { list = list.filter(f); return list.length ? `<div class="eyebrow">${t}</div><div class="grid">${list.map(item).join('')}</div>` : ''; };
    const parents = [...new Set(BODIES.filter(b => b.parent).map(b => b.parent))];
    el.innerHTML = head('Atlas') + (kid() ? '<p class="lead">Kam poletíme? Klepni na těleso.</p>' : `<input id="atlas-q" class="field" type="search" placeholder="Hledat těleso nebo typ" value="${atlasQ.replace(/"/g, '&quot;')}" aria-label="Hledat těleso">`) +
      `<div id="atlas-list">${grp('Hvězda a planety', BODIES.filter(b => b.type === 'star' || b.type === 'planet'))}${grp('Trpasličí planety a kometa', BODIES.filter(b => b.type === 'dwarf' || b.type === 'comet'))}${parents.map(p => grp(`Měsíce: ${B[p].name}`, BODIES.filter(b => b.parent === p))).join('')}</div>`;
  } else if (panelTab === 'mission') {
    const l = missionList(), act = activeMission();
    el.innerHTML = head('Mise') + `<p class="lead">${kid() ? 'Každá mise je hádanka. Vyřeš ji a doleť na správné místo.' : 'Mise jsou zadané jako hádanky. Splníš je příletem k hledanému tělesu nebo provedením úkolu.'}</p><ol class="missions">${l.map(m => { const d = store.done.includes(m.id), a = act && act.id === m.id; return `<li class="${d ? 'done' : ''} ${a ? 'act' : ''}"><span class="st">${d ? ico('check') : ''}</span><span class="tx">${m.text}</span>${!d && !a ? `<button class="link" data-mission="${m.id}">Vybrat</button>` : a ? '<span class="chip">aktivní</span>' : '<span class="chip ok">+30</span>'}</li>`; }).join('')}</ol>`;
  } else if (panelTab === 'pass') {
    const n = store.visited.length, r = rank();
    el.innerHTML = head('Vesmírný pas') + `<div class="passhead"><div><span class="eyebrow">Držitel pasu</span><b class="rk">${r.name}</b></div><div><span class="eyebrow">Razítka</span><b class="rk">${n} / ${BODIES.length}</b></div><div><span class="eyebrow">Body</span><b class="rk">${store.xp}</b></div></div>
    <p class="lead">${kid() ? 'Za každé místo, kam doletíš, dostaneš razítko.' : 'Razítko získáš příletem k tělesu. Za razítko je 10 bodů, za misi 30, za správnou odpověď v kvízu 5.'}</p>
    <div class="stamps">${BODIES.map((b, i) => { const v = store.visited.includes(b.id); return `<button class="stamp ${v ? 'got' : ''}" data-go="${b.id}" style="--rot:${((i * 37) % 13) - 6}deg">${v ? thumb(b) : '<span class="thumb q">?</span>'}<span>${b.name}</span></button>`; }).join('')}</div>
    <button class="link danger" data-act="reset">Vymazat postup a začít znovu</button>`;
  } else if (panelTab === 'quiz') { el.innerHTML = head('Kvíz') + '<div id="quiz"></div>'; renderQuiz(); }
  else if (panelTab === 'lab') { el.innerHTML = head('Laboratoř') + '<div id="lab"></div>'; renderLab(); }
}
// kvíz
const quiz = { qs: null, i: 0, score: 0, picked: null };
function startQuiz() { const pool = [...QUIZ[kid() ? 'kid' : 'pro']]; for (let i = pool.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [pool[i], pool[j]] = [pool[j], pool[i]]; } Object.assign(quiz, { qs: pool.slice(0, 5), i: 0, score: 0, picked: null }); renderQuiz(); }
function renderQuiz() {
  const el = $('#quiz'); if (!el) return;
  if (!quiz.qs) { el.innerHTML = `<p class="lead">Pět otázek. Za každou správnou odpověď je 5 bodů.</p><button class="btn" data-act="quiz-start">Spustit kvíz</button>`; return; }
  if (quiz.i >= quiz.qs.length) { el.innerHTML = `<div class="result"><b>${quiz.score} z ${quiz.qs.length}</b><span>${quiz.score === 5 ? 'Bez jediné chyby!' : quiz.score >= 3 ? 'Dobrá práce.' : 'Odpovědi najdeš v kartách těles. Zkus to znovu.'}</span></div><button class="btn" data-act="quiz-start">Hrát znovu</button>`; return; }
  const q = quiz.qs[quiz.i], p = quiz.picked;
  el.innerHTML = `<span class="eyebrow">Otázka ${quiz.i + 1} z ${quiz.qs.length}</span><h3>${q.q}</h3><div class="answers">${q.a.map((a, k) => `<button class="ans ${p != null ? (k === q.c ? 'right' : k === p ? 'wrong' : '') : ''}" data-ans="${k}" ${p != null ? 'disabled' : ''}>${a}</button>`).join('')}</div>${p != null ? `<p class="expl"><b>${p === q.c ? 'Správně.' : 'Tentokrát ne.'}</b> ${q.e}</p><button class="btn" data-act="quiz-next">${quiz.i === quiz.qs.length - 1 ? 'Vyhodnotit' : 'Další otázka'}</button>` : ''}`;
}
// laboratoř
const lab = { kg: null, age: null, dest: 'mars' };
const WEIGH = ['sun', 'mercury', 'venus', 'earth', 'moon', 'mars', 'jupiter', 'saturn', 'titan', 'uranus', 'neptune', 'pluto'];
const opts = (sel, f = () => true) => BODIES.filter(f).map(b => `<option value="${b.id}" ${b.id === sel ? 'selected' : ''}>${b.name}</option>`).join('');
function renderLab() {
  const el = $('#lab'); if (!el) return;
  if (lab.kg == null) { lab.kg = kid() ? 30 : 75; lab.age = kid() ? 9 : 40; }
  el.innerHTML = `<section class="tool"><h3>Porovnání velikostí</h3><p class="lead">Dvě tělesa vedle sebe ve stejném měřítku.</p>
    <div class="row"><select id="cmp-a" class="field" aria-label="První těleso">${opts(cmp.a)}</select><select id="cmp-b" class="field" aria-label="Druhé těleso">${opts(cmp.b)}</select></div><button class="btn" data-act="cmp-open">Porovnat</button></section>
  <section class="tool"><h3>${kid() ? 'Já na jiných světech' : 'Váha a věk na jiných tělesech'}</h3>
    <div class="row"><label>Váha na Zemi (kg)<input id="lab-kg" class="field" type="number" min="1" max="300" value="${lab.kg}"></label><label>Věk (roky)<input id="lab-age" class="field" type="number" min="1" max="120" value="${lab.age}"></label></div><div id="weigh"></div></section>
  <section class="tool"><h3>${kid() ? 'Jak dlouho bych tam letěl(a)?' : 'Doba cesty ze Země'}</h3><p class="lead">Počítá se z aktuální vzdálenosti v modelu, přímou čarou.</p>
    <select id="lab-dest" class="field" aria-label="Cíl cesty">${opts(lab.dest, b => b.id !== 'earth')}</select><div id="trip"></div></section>`;
  renderWeigh(); renderTrip();
}
function renderWeigh() {
  const el = $('#weigh'); if (!el) return;
  el.innerHTML = `<div class="tw"><table class="data cols"><thead><tr><th>Kde</th><th>Váha ukáže</th><th>Výskok</th><th>Věk</th></tr></thead><tbody>${WEIGH.map(id => { const b = B[id], pd = b.type === 'moon' || b.type === 'star' ? null : periodDays(b) / 365.25; return `<tr><th>${b.name}</th><td>${nf(lab.kg * b.g / 9.81, 1)} kg</td><td>${b.type === 'star' || b.mass > 10 ? '–' : nf(0.4 * 9.81 / b.g, 1) + ' m'}</td><td>${pd ? nf(lab.age / pd, pd > 20 ? 2 : 1) : '–'}</td></tr>`; }).join('')}</tbody></table></div><p class="note">Výskok počítá se skokem 40 cm na Zemi. Věk je v místních rocích, tedy obězích kolem Slunce. Plynní obři nemají pevný povrch, váha platí pro vrcholky oblaků.</p>`;
}
const SPEEDS_TRIP = [['Pěšky', 5], ['Autem po dálnici', 130], ['Dopravním letadlem', 900], ['Rychlou sondou (New Horizons)', 58000], ['Rychlostí světla', 1079252848.8]];
function renderTrip() {
  const el = $('#trip'); if (!el) return; const b = B[lab.dest], km = distTo(b, B.earth) * AU;
  el.innerHTML = `<p class="big">${b.name} je teď <b>${km < 5e6 ? nf(km) + ' km' : nf(km / 1e6, 1) + ' milionu km'}</b> od Země.</p><table class="data"><tbody>${SPEEDS_TRIP.map(s => `<tr><th>${s[0]}<small>${s[1] > 1e8 ? '299 792 km/s' : nf(s[1]) + ' km/h'}</small></th><td>${fmtDur(km / s[1])}</td></tr>`).join('')}</tbody></table>`;
}

/* ================= porovnání velikostí ================= */
function openCompare(a, b) {
  if (a) cmp.a = a; if (b) cmp.b = b; cmp.on = true; document.body.classList.add('cmp');
  if (!cmp.scene) { cmp.scene = new THREE.Scene(); cmp.cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 1, 6000); cmp.cam.position.z = 3000; cmp.L = new THREE.Vector3(-0.6, 0.38, 0.9).normalize(); const dl = new THREE.DirectionalLight(0xfff6e8, Math.PI * 1.05); dl.position.copy(cmp.L); cmp.scene.add(dl, new THREE.AmbientLight(0xffffff, 0.07)); cmp.scene.background = new THREE.Color(0x07061a); }
  buildCompare(); emit('compare');
}
function buildCompare() {
  for (const k of ['va', 'vb']) if (cmp[k]) { cmp.scene.remove(cmp[k].group); cmp[k].dispose(); }
  cmp.va = makeVisual(B[cmp.a]); cmp.vb = makeVisual(B[cmp.b]); cmp.scene.add(cmp.va.group, cmp.vb.group);
  const A = B[cmp.a], Bb = B[cmp.b], big = A.R >= Bb.R ? A : Bb, small = big === A ? Bb : A, k = big.R / small.R;
  const cap = b => `<div class="cap"><h2>${b.name}</h2><span>${TYPE_NAME[b.type]} · průměr ${nf(b.R * 2)} km</span></div>`;
  $('#cmpbar').hidden = false;
  $('#cmpbar').innerHTML = `<div class="cmp-top"><span class="eyebrow">Porovnání velikostí</span><button class="btn ghost" data-act="cmp-close">${ico('close')} Zavřít</button></div>
  <div class="cmp-caps">${cap(A)}${cap(Bb)}</div>
  <div class="cmp-ctl"><select id="cmp-a2" class="field" aria-label="První těleso">${opts(cmp.a)}</select><button class="iconbtn" data-act="cmp-swap" aria-label="Prohodit tělesa">${ico('swap')}</button><select id="cmp-b2" class="field" aria-label="Druhé těleso">${opts(cmp.b)}</select></div>
  <p class="cmp-fact">${A === Bb ? 'Vyber dvě různá tělesa.' : k < 1.02 ? `${A.name} a ${Bb.name} jsou skoro stejně velké.` : `Těleso ${big.name} má ${nf(k, k < 10 ? 2 : 0)}× větší průměr než ${small.name}. Objemem by se do něj těleso ${small.name} vešlo asi ${nf(k ** 3, k ** 3 < 100 ? 1 : 0)}×.`}</p><i id="cmp-mark"></i>`;
}
function closeCompare() { cmp.on = false; document.body.classList.remove('cmp'); $('#cmpbar').hidden = true; }
const qT = new THREE.Quaternion().setFromEuler(new THREE.Euler(0.32, 0, 0.1));
function renderCompare(t) {
  const A = B[cmp.a], Bb = B[cmp.b], big = Math.max(A.R, Bb.R), ring = x => x.ring === 'saturn' ? 2.4 : x.type === 'star' ? 1.35 : 1.06;
  const maxPx = Math.min(W * 0.25 * 0.86, H * 0.27) / Math.max(A.R >= Bb.R ? ring(A) : ring(Bb), 1);
  const c = cmp.cam; c.left = -W / 2; c.right = W / 2; c.top = H / 2; c.bottom = -H / 2; c.updateProjectionMatrix();
  [[cmp.va, A, -1], [cmp.vb, Bb, 1]].forEach(([v, b, sgn]) => {
    const r = b.R / big * maxPx; v.group.position.set(sgn * W / 4, H * 0.05, 0); v.group.scale.setScalar(r);
    v.spin.quaternion.copy(qT).multiply(qY.setFromAxisAngle(YAX, t * 0.12 * (b.rot < 0 ? -1 : 1))); v.update(cmp.L);
    if (v.group.userData.glow) v.group.userData.glow.scale.setScalar(2.6);
    b._cr = r; b._cx = W / 2 + sgn * W / 4;
  });
  const small = A.R < Bb.R ? A : Bb, mk = $('#cmp-mark');
  if (mk) { mk.style.display = small._cr < 3 ? 'block' : 'none'; mk.style.left = small._cx + 'px'; mk.style.top = H * 0.45 + 'px'; }
  renderer.render(cmp.scene, c);
}

/* ================= čas, lišta, dok ================= */
const MONTHS = ['ledna', 'února', 'března', 'dubna', 'května', 'června', 'července', 'srpna', 'září', 'října', 'listopadu', 'prosince'];
let lastDate = '';
function renderDate() {
  const d = jdDate(time.jd), live = !time.paused && time.sp === 0 && time.dir === 1 && Math.abs(time.jd - jdNow()) < 0.0007;
  const showT = SPEEDS[time.sp][0] <= 3600 || time.paused;
  const s = `<span class="d">${d.getDate()}. ${MONTHS[d.getMonth()]} ${d.getFullYear()}</span>${showT ? `<span class="t">${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}</span>` : ''}${live ? '<span class="live">živě</span>' : ''}`;
  if (s !== lastDate && $('#date')) { $('#date').innerHTML = s; lastDate = s; }
}
let layersOpen = false;
function renderTime() {
  const sp = SPEEDS[time.sp], k = kid();
  const L = [['orbits', 'Dráhy'], ['labels', 'Popisky'], ['moons', 'Měsíce'], ['dwarf', 'Trpasličí planety'], ['belts', 'Pásy planetek'], ['comet', 'Halleyova kometa']];
  $('#time').innerHTML = `<button class="iconbtn" data-act="home" aria-label="Zpět na přehled soustavy" title="Přehled soustavy">${ico('home')}</button>
  <button id="date" class="date" data-act="date" title="Nastavit datum"></button><input id="datein" type="date" class="field" hidden aria-label="Datum">
  <div class="tctl"><button class="iconbtn" data-act="slower" aria-label="Zpomalit čas">${ico('rw')}</button><button class="iconbtn main" data-act="pause" aria-label="${time.paused ? 'Spustit čas' : 'Zastavit čas'}">${ico(time.paused ? 'play' : 'pause')}</button><button class="iconbtn" data-act="faster" aria-label="Zrychlit čas">${ico('ff')}</button></div>
  <span class="speed">${time.paused ? 'stojí' : (time.dir < 0 ? 'zpět, ' : '') + (k ? sp[2] || sp[1] : sp[1])}</span>
  ${k ? '' : `<button class="tbtn ${time.dir < 0 ? 'on' : ''}" data-act="reverse" aria-pressed="${time.dir < 0}">Zpět v čase</button>`}
  <button class="tbtn" data-act="now">Teď</button>
  <div class="seg" role="group" aria-label="Měřítko"><button class="${Sgoal === 0 ? 'on' : ''}" data-act="scale0" aria-pressed="${Sgoal === 0}">${k ? 'Přehledně' : 'Přehledné měřítko'}</button><button class="${Sgoal === 1 ? 'on' : ''}" data-act="scale1" aria-pressed="${Sgoal === 1}">${k ? 'Doopravdy' : 'Skutečné měřítko'}</button></div>
  <div class="layers"><button class="iconbtn ${layersOpen ? 'on' : ''}" data-act="layers" aria-label="Vrstvy" aria-expanded="${layersOpen}" title="Vrstvy">${ico('layers')}</button>${layersOpen ? `<div class="pop">${L.map(l => `<label><input type="checkbox" data-layer="${l[0]}" ${layers[l[0]] ? 'checked' : ''}>${l[1]}</label>`).join('')}</div>` : ''}</div>`;
  lastDate = ''; renderDate();
}
const DOCK = ['sun', 'mercury', 'venus', 'earth', 'moon', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto'];
function renderDock() { $('#dock').innerHTML = DOCK.map(id => { const b = B[id]; return `<button data-go="${id}" class="${focus === b ? 'on' : ''} ${store.visited.includes(id) ? 'seen' : ''}">${thumb(b)}<span>${b.name}</span></button>`; }).join(''); }
function stepSpeed(dir) { const l = speedList(); let i = l.indexOf(time.sp); if (i < 0) i = l.findIndex(x => x >= time.sp); time.sp = l[clamp(i + dir, 0, l.length - 1)]; time.paused = false; renderTime(); }

/* ================= režimy, modál ================= */
function setMode(m) {
  store.mode = m; save(); document.body.dataset.mode = m;
  if (!speedList().includes(time.sp)) time.sp = 3;
  renderModeSeg();
  lab.kg = null; quiz.qs = null; showHint = false;
  renderRail(); renderPanel(); renderCard(); renderTime(); renderDock(); renderMission(); renderRank(); renderSound();
}
function renderModeSeg() {
  const m = store.mode || 'kid';
  $('#modeseg').innerHTML = `<button class="${m === 'kid' ? 'on' : ''}" data-mode="kid" aria-pressed="${m === 'kid'}">Děti</button><button class="${m === 'pro' ? 'on' : ''}" data-mode="pro" aria-pressed="${m === 'pro'}">Dospělí</button>`;
}
function renderSound() { $('#soundbtn').innerHTML = ico(store.sound ? 'sound' : 'mute'); $('#soundbtn').setAttribute('aria-pressed', store.sound); }
function closeModal() { $('#modal').hidden = true; }
function welcome() {
  $('#modal').hidden = false;
  $('#modal').innerHTML = `<div class="sheet welcome"><span class="eyebrow">Vítej na palubě</span><h1>Kosmická výprava</h1><p>Proleť se Sluneční soustavou tak, jak vypadá právě dnes. Sbírej razítka do vesmírného pasu, řeš mise a zkoušej, co se stane, když zrychlíš čas.</p><p class="q">Kdo dnes řídí loď?</p><div class="choose"><button data-start="kid"><b>Kadet</b><span>Pro děti. Velká tlačítka, krátké texty, čtení nahlas.</span></button><button data-start="pro"><b>Navigátor</b><span>Pro dospělé a zkušené. Data, dráhové elementy, těžší mise.</span></button></div><p class="note">Režim jde kdykoli přepnout vpravo nahoře.</p></div>`;
}
function about() {
  $('#modal').hidden = false;
  $('#modal').innerHTML = `<div class="sheet"><div class="p-head"><h2>O aplikaci</h2><button class="iconbtn" data-act="modal-close" aria-label="Zavřít">${ico('close')}</button></div>
  <h3>Ovládání</h3><ul class="plain"><li>Tažením otáčíš pohled, kolečkem nebo dvěma prsty přibližuješ.</li><li>Klepnutím na těleso nebo popisek k němu doletíš.</li><li>Mezerník zastaví a spustí čas. Klepnutím na datum zadáš vlastní den.</li></ul>
  <h3>Co je přesné a co ne</h3><ul class="plain"><li>Polohy planet a Pluta se počítají z Keplerových elementů JPL. V letech 1800 až 2050 odpovídají skutečnosti na zlomky stupně.</li><li>Ceres, Haumea, Makemake, Eris a Halleyova kometa mají přibližné dráhy. Fáze Měsíce sedí na několik stupňů.</li><li>Měsíce ostatních planet obíhají po kružnicích se správnou periodou a směrem, jejich okamžitá poloha je jen ilustrační.</li><li>Přehledné měřítko zvětšuje tělesa a stlačuje vzdálenosti. Skutečné měřítko zachovává poměr velikostí a vzdáleností.</li><li>Natočení Země a sklon os planet odpovídají zvolenému datu. Textury Haumey, Makemake a Eris jsou umělecké představy.</li></ul>
  <h3>Použité zdroje</h3><ul class="plain credits">${CREDITS.map(c => `<li><b>${c[0]}</b><br>${c[1]}<br><a href="${c[2]}" target="_blank" rel="noopener">${c[2].replace('https://', '')}</a></li>`).join('')}</ul></div>`;
}

/* ================= události UI ================= */
const ACT = {
  home: goHome, 'card-close': closeCard, 'panel-close': closePanel, 'modal-close': closeModal, speak,
  hint() { showHint = !showHint; missionMin = false; renderMission(); }, 'mission-min'() { missionMin = !missionMin; renderMission(); },
  pause() { time.paused = !time.paused; renderTime(); }, slower() { stepSpeed(-1); }, faster() { stepSpeed(1); },
  reverse() { time.dir *= -1; renderTime(); }, now() { time.jd = jdNow(); time.dir = 1; time.sp = 0; time.paused = false; renderTime(); },
  scale0() { Sgoal = 0; renderTime(); },
  scale1() { if (Sgoal !== 1) toast(kid() ? 'Takhle je to doopravdy. Planety jsou proti vzdálenostem tak maličké, že vidíš jen kroužky. Přibliž si je.' : 'Skutečný poměr velikostí a vzdáleností. Tělesa jsou vidět jako značky, dokud je nepřiblížíš.'); Sgoal = 1; renderTime(); emit('scaleTrue'); },
  layers() { layersOpen = !layersOpen; renderTime(); },
  date() { const i = $('#datein'); i.hidden = false; $('#date').hidden = true; i.value = jdDate(time.jd).toISOString().slice(0, 10); i.focus(); },
  about, sound() { store.sound = !store.sound; save(); renderSound(); beep([700]); },
  'quiz-start': startQuiz, 'quiz-next'() { quiz.i++; quiz.picked = null; renderQuiz(); },
  'cmp-open'() { openCompare($('#cmp-a').value, $('#cmp-b').value); }, 'cmp-close': closeCompare, 'cmp-swap'() { [cmp.a, cmp.b] = [cmp.b, cmp.a]; buildCompare(); },
  'cmp-earth'() { openCompare('earth', cardBody.id); }, 'cmp-sun'() { openCompare('earth', 'sun'); },
  reset() { const el = document.querySelector('[data-act="reset"]'); if (el.dataset.sure) { store.visited = []; store.done = []; store.xp = 0; store.mission = {}; save(); renderRank(); renderMission(); renderPanel(); renderDock(); renderCard(); toast('Postup je vymazaný.'); } else { el.dataset.sure = 1; el.textContent = 'Opravdu vymazat? Klepni ještě jednou.'; } },
};
document.addEventListener('click', e => {
  const t = e.target.closest('[data-act],[data-go],[data-tab],[data-mode],[data-start],[data-ans],[data-mission]'); if (!t) return;
  const d = t.dataset;
  if (d.act && ACT[d.act]) ACT[d.act](t);
  else if (d.go) { if (cmp.on) closeCompare(); flyTo(B[d.go]); beep([520]); if (innerWidth < 760) closePanel(); }
  else if (d.tab) openPanel(d.tab);
  else if (d.mode) setMode(d.mode);
  else if (d.start) { closeModal(); setMode(d.start); if (d.start === 'pro') { time.sp = 0; renderTime(); } beep([523, 784]); }
  else if (d.ans != null) { const q = quiz.qs[quiz.i]; quiz.picked = +d.ans; if (quiz.picked === q.c) { quiz.score++; addXp(5); beep([784, 1047]); } else beep([220, 196]); renderQuiz(); }
  else if (d.mission) { store.mission[store.mode] = d.mission; save(); showHint = false; missionMin = false; yearAcc = 0; renderMission(); renderPanel(); emit('check'); }
});
document.addEventListener('input', e => {
  const t = e.target;
  if (t.id === 'atlas-q') { atlasQ = t.value; const pos = t.selectionStart; renderPanel(); const n = $('#atlas-q'); n.focus(); n.setSelectionRange(pos, pos); }
  if (t.id === 'lab-kg' || t.id === 'lab-age') { lab.kg = clamp(+$('#lab-kg').value || 0, 0, 500); lab.age = clamp(+$('#lab-age').value || 0, 0, 150); renderWeigh(); emit('weigh'); }
});
document.addEventListener('change', e => {
  const t = e.target;
  if (t.dataset.layer) { layers[t.dataset.layer] = t.checked; }
  if (t.id === 'lab-dest') { lab.dest = t.value; renderTrip(); }
  if (t.id === 'cmp-a2' || t.id === 'cmp-b2') { cmp.a = $('#cmp-a2').value; cmp.b = $('#cmp-b2').value; buildCompare(); }
  if (t.id === 'cmp-a') cmp.a = t.value; if (t.id === 'cmp-b') cmp.b = t.value;
  if (t.id === 'datein') { const d = new Date(t.value + 'T12:00:00'); if (!isNaN(d)) { time.jd = d.getTime() / 86400000 + 2440587.5; time.paused = true; } renderTime(); }
});
document.addEventListener('focusout', e => { if (e.target.id === 'datein') setTimeout(renderTime, 100); });
$('#modal').addEventListener('click', e => { if (e.target.id === 'modal' && store.mode) closeModal(); });

/* ================= start ================= */
computePositions(time.jd);
cam.dist = cam.goal = homeDist();
document.body.dataset.mode = store.mode || 'kid';
renderRail(); renderTime(); renderDock(); renderRank(); renderSound();
if (store.mode) setMode(store.mode); else { renderModeSeg(); renderMission(); welcome(); }
let started = false;
function start() { if (started) return; started = true; $('#loader').classList.add('gone'); setTimeout(() => $('#loader').remove(), 700); }
manager.onLoad = start; setTimeout(start, 9000);
requestAnimationFrame(frame);
window.__app = { B, time, cam, flyTo, store, layers, setScale: v => { Sgoal = v; } };
