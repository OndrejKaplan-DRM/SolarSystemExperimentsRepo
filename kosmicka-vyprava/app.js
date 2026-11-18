(()=>{var qh=0,$l=1,$h=2;var Er=1,jh=2,Fs=3,Mi=0,zt=1,un=2,Bi=0,Os=1,ei=2,jl=3,Yl=4,Yh=5;var zi=100,Zh=101,Jh=102,Kh=103,Qh=104,eu=200,tu=201,nu=202,iu=203,Zl=204,Jl=205,su=206,ru=207,au=208,ou=209,lu=210,cu=211,hu=212,uu=213,du=214,wa=0,Aa=1,Ra=2,vs=3,Ca=4,Pa=5,Ia=6,La=7,so=0,fu=1,pu=2,Bn=0,Kl=1,Ql=2,ec=3,tc=4,nc=5,ic=6,sc=7;var rc=300,Vi=301,ks=302,ro=303,ao=304,Na=1e3,Fn=1001,Da=1002,Lt=1003,mu=1004;var wr=1005;var en=1006,oo=1007;var ti=1008;var rn=1009,ac=1010,oc=1011,Bs=1012,lo=1013,Pn=1014,In=1015,Ln=1016,co=1017,ho=1018,Hi=1020,lc=35902,cc=35899,hc=1021,uc=1022,Nn=1023,Kn=1026,ni=1027,dc=1028,uo=1029,Si=1030,fo=1031;var po=1033,Ar=33776,Rr=33777,Cr=33778,Pr=33779,mo=35840,go=35841,_o=35842,vo=35843,xo=36196,yo=37492,Mo=37496,So=37488,bo=37489,Ir=37490,To=37491,Eo=37808,wo=37809,Ao=37810,Ro=37811,Co=37812,Po=37813,Io=37814,Lo=37815,No=37816,Do=37817,Uo=37818,Fo=37819,Oo=37820,ko=37821,Bo=36492,zo=36494,Vo=36495,Ho=36283,Go=36284,Lr=36285,Wo=36286;var sr=2300,Ua=2301,ba=2302,kl=2303,Bl=2400,zl=2401,Vl=2402;var gu=3200;var Xo=0,_u=1,ii="",Xt="srgb",rr="srgb-linear",ar="linear",Ke="srgb";var Ta=7680;var vu=519,xu=512,yu=513,Mu=514,fc=515,Su=516,bu=517,pc=518,mc=519,gc=35044;var _c="300 es",xn=2e3,xs=2001;function cf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function hf(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ys(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Tu(){let n=ys("canvas");return n.style.display="block",n}var mh={},Ms=null;function or(...n){let e="THREE."+n.shift();Ms?Ms("log",e,...n):console.log(e,...n)}function Eu(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ae(...n){n=Eu(n);let e="THREE."+n.shift();if(Ms)Ms("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ce(...n){n=Eu(n);let e="THREE."+n.shift();if(Ms)Ms("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ir(...n){let e=n.join(" ");e in mh||(mh[e]=!0,Ae(...n))}function wu(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Au={[wa]:wa,[Ra]:Ia,[Ca]:Ca,[vs]:Pa,[Aa]:Aa,[Ia]:Ra,[La]:La,[Pa]:vs},kn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var pl=Math.PI/180,Fa=180/Math.PI;function Gi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function Ye(n,e,t){return Math.max(e,Math.min(t,n))}function uf(n,e){return(n%e+e)%e}function ml(n,e,t){return(1-t)*n+t*e}function Ru(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function qo(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Cu(n,e){if(e.constructor===Float32Array)return n;let t=qo(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function Pu(n,e){if(e.constructor===Float32Array)return n;let t=qo(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var Be=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},nn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[a+0],p=r[a+1],_=r[a+2],y=r[a+3];if(d!==y||l!==u||c!==p||h!==_){let m=l*u+c*p+h*_+d*y;m<0&&(u=-u,p=-p,_=-_,y=-y,m=-m);let f=1-o;if(m<.9995){let M=Math.acos(m),A=Math.sin(M);f=Math.sin(f*M)/A,o=Math.sin(o*M)/A,l=l*f+u*o,c=c*f+p*o,h=h*f+_*o,d=d*f+y*o}else{l=l*f+u*o,c=c*f+p*o,h=h*f+_*o,d=d*f+y*o;let M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[a],u=r[a+1],p=r[a+2],_=r[a+3];return e[t]=o*_+h*d+l*p-c*u,e[t+1]=l*_+h*u+c*d-o*p,e[t+2]=c*_+h*p+o*u-l*d,e[t+3]=h*_-o*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(r/2),u=l(i/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*p*_,this._y=c*p*d-u*h*_,this._z=c*h*_+u*p*d,this._w=c*h*d-u*p*_;break;case"YXZ":this._x=u*h*d+c*p*_,this._y=c*p*d-u*h*_,this._z=c*h*_-u*p*d,this._w=c*h*d+u*p*_;break;case"ZXY":this._x=u*h*d-c*p*_,this._y=c*p*d+u*h*_,this._z=c*h*_+u*p*d,this._w=c*h*d-u*p*_;break;case"ZYX":this._x=u*h*d-c*p*_,this._y=c*p*d+u*h*_,this._z=c*h*_-u*p*d,this._w=c*h*d+u*p*_;break;case"YZX":this._x=u*h*d+c*p*_,this._y=c*p*d+u*h*_,this._z=c*h*_-u*p*d,this._w=c*h*d-u*p*_;break;case"XZY":this._x=u*h*d-c*p*_,this._y=c*p*d-u*h*_,this._z=c*h*_+u*p*d,this._w=c*h*d+u*p*_;break;default:Ae("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+o+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),d=2*(r*i-a*t);return this.x=t+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return gl.copy(this).projectOnVector(e),this.sub(gl)}reflect(e){return this.sub(gl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},gl=new N,gh=new nn,Ie=class{static{this.prototype.isMatrix3=!0}constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],p=i[5],_=i[8],y=s[0],m=s[3],f=s[6],M=s[1],A=s[4],T=s[7],w=s[2],E=s[5],g=s[8];return r[0]=a*y+o*M+l*w,r[3]=a*m+o*A+l*E,r[6]=a*f+o*T+l*g,r[1]=c*y+h*M+d*w,r[4]=c*m+h*A+d*E,r[7]=c*f+h*T+d*g,r[2]=u*y+p*M+_*w,r[5]=u*m+p*A+_*E,r[8]=u*f+p*T+_*g,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,p=c*r-a*l,_=t*d+i*u+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/_;return e[0]=d*y,e[1]=(s*c-h*i)*y,e[2]=(o*i-s*a)*y,e[3]=u*y,e[4]=(h*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=p*y,e[7]=(i*l-c*t)*y,e[8]=(a*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return ir("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(_l.makeScale(e,t)),this}rotate(e){return ir("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(_l.makeRotation(-e)),this}translate(e,t){return ir("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(_l.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},_l=new Ie,_h=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vh=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function df(){let n={enabled:!0,workingColorSpace:rr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ke&&(s.r=Jn(s.r),s.g=Jn(s.g),s.b=Jn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ke&&(s.r=_s(s.r),s.g=_s(s.g),s.b=_s(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ii?ar:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[rr]:{primaries:e,whitePoint:i,transfer:ar,toXYZ:_h,fromXYZ:vh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:e,whitePoint:i,transfer:Ke,toXYZ:_h,fromXYZ:vh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}}),n}var je=df();function Jn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function _s(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Qi,Oa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Qi===void 0&&(Qi=ys("canvas")),Qi.width=e.width,Qi.height=e.height;let s=Qi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Qi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ys("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Jn(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Jn(t[i]/255)*255):t[i]=Jn(t[i]);return{data:t,width:e.width,height:e.height}}else return Ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ff=0,Ss=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=Gi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(vl(s[a].image)):r.push(vl(s[a]))}else r=vl(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function vl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Oa.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ae("Texture: Unable to serialize Texture."),{})}var pf=0,xl=new N,$t=class n extends kn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Fn,s=Fn,r=en,a=ti,o=Nn,l=rn,c=n.DEFAULT_ANISOTROPY,h=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=Gi(),this.name="",this.source=new Ss(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(xl).x}get height(){return this.source.getSize(xl).y}get depth(){return this.source.getSize(xl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ae(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ae(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Na:e.x=e.x-Math.floor(e.x);break;case Fn:e.x=e.x<0?0:1;break;case Da:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Na:e.y=e.y-Math.floor(e.y);break;case Fn:e.y=e.y<0?0:1;break;case Da:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=rc;$t.DEFAULT_ANISOTROPY=1;var ut=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],_=l[9],y=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(c+1)/2,T=(p+1)/2,w=(f+1)/2,E=(h+u)/4,g=(d+y)/4,S=(_+m)/4;return A>T&&A>w?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=E/i,r=g/i):T>w?T<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),i=E/s,r=S/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=g/r,s=S/r),this.set(i,s,r,t),this}let M=Math.sqrt((m-_)*(m-_)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-_)/M,this.y=(d-y)/M,this.z=(u-h)/M,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ka=class extends kn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new $t({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ss(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},cn=class extends ka{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},lr=class extends $t{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ba=class extends $t{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Qe=class n{static{this.prototype.isMatrix4=!0}constructor(e,t,i,s,r,a,o,l,c,h,d,u,p,_,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,d,u,p,_,y,m)}set(e,t,i,s,r,a,o,l,c,h,d,u,p,_,y,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=_,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/es.setFromMatrixColumn(e,0).length(),r=1/es.setFromMatrixColumn(e,1).length(),a=1/es.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,p=a*d,_=o*h,y=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+_*c,t[5]=u-y*c,t[9]=-o*l,t[2]=y-u*c,t[6]=_+p*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,p=l*d,_=c*h,y=c*d;t[0]=u+y*o,t[4]=_*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-_,t[6]=y+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,p=l*d,_=c*h,y=c*d;t[0]=u-y*o,t[4]=-a*d,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*h,t[9]=y-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,p=a*d,_=o*h,y=o*d;t[0]=l*h,t[4]=_*c-p,t[8]=u*c+y,t[1]=l*d,t[5]=y*c+u,t[9]=p*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,p=a*c,_=o*l,y=o*c;t[0]=l*h,t[4]=y-u*d,t[8]=_*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*d+_,t[10]=u-y*d}else if(e.order==="XZY"){let u=a*l,p=a*c,_=o*l,y=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+y,t[5]=a*h,t[9]=p*d-_,t[2]=_*d-p,t[6]=o*h,t[10]=y*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mf,e,gf)}lookAt(e,t,i){let s=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),ci.crossVectors(i,on),ci.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),ci.crossVectors(i,on)),ci.normalize(),Zr.crossVectors(on,ci),s[0]=ci.x,s[4]=Zr.x,s[8]=on.x,s[1]=ci.y,s[5]=Zr.y,s[9]=on.y,s[2]=ci.z,s[6]=Zr.z,s[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],p=i[13],_=i[2],y=i[6],m=i[10],f=i[14],M=i[3],A=i[7],T=i[11],w=i[15],E=s[0],g=s[4],S=s[8],k=s[12],I=s[1],D=s[5],z=s[9],q=s[13],P=s[2],W=s[6],Z=s[10],V=s[14],te=s[3],G=s[7],K=s[11],Q=s[15];return r[0]=a*E+o*I+l*P+c*te,r[4]=a*g+o*D+l*W+c*G,r[8]=a*S+o*z+l*Z+c*K,r[12]=a*k+o*q+l*V+c*Q,r[1]=h*E+d*I+u*P+p*te,r[5]=h*g+d*D+u*W+p*G,r[9]=h*S+d*z+u*Z+p*K,r[13]=h*k+d*q+u*V+p*Q,r[2]=_*E+y*I+m*P+f*te,r[6]=_*g+y*D+m*W+f*G,r[10]=_*S+y*z+m*Z+f*K,r[14]=_*k+y*q+m*V+f*Q,r[3]=M*E+A*I+T*P+w*te,r[7]=M*g+A*D+T*W+w*G,r[11]=M*S+A*z+T*Z+w*K,r[15]=M*k+A*q+T*V+w*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14],_=e[3],y=e[7],m=e[11],f=e[15],M=l*p-c*u,A=o*p-c*d,T=o*u-l*d,w=a*p-c*h,E=a*u-l*h,g=a*d-o*h;return t*(y*M-m*A+f*T)-i*(_*M-m*w+f*E)+s*(_*A-y*w+f*g)-r*(_*T-y*E+m*g)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],_=e[12],y=e[13],m=e[14],f=e[15],M=t*o-i*a,A=t*l-s*a,T=t*c-r*a,w=i*l-s*o,E=i*c-r*o,g=s*c-r*l,S=h*y-d*_,k=h*m-u*_,I=h*f-p*_,D=d*m-u*y,z=d*f-p*y,q=u*f-p*m,P=M*q-A*z+T*D+w*I-E*k+g*S;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/P;return e[0]=(o*q-l*z+c*D)*W,e[1]=(s*z-i*q-r*D)*W,e[2]=(y*g-m*E+f*w)*W,e[3]=(u*E-d*g-p*w)*W,e[4]=(l*I-a*q-c*k)*W,e[5]=(t*q-s*I+r*k)*W,e[6]=(m*T-_*g-f*A)*W,e[7]=(h*g-u*T+p*A)*W,e[8]=(a*z-o*I+c*S)*W,e[9]=(i*I-t*z-r*S)*W,e[10]=(_*E-y*T+f*M)*W,e[11]=(d*T-h*E-p*M)*W,e[12]=(o*k-a*D-l*S)*W,e[13]=(t*D-i*k+s*S)*W,e[14]=(y*A-_*w-m*M)*W,e[15]=(h*w-d*A+u*M)*W,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,p=r*h,_=r*d,y=a*h,m=a*d,f=o*d,M=l*c,A=l*h,T=l*d,w=i.x,E=i.y,g=i.z;return s[0]=(1-(y+f))*w,s[1]=(p+T)*w,s[2]=(_-A)*w,s[3]=0,s[4]=(p-T)*E,s[5]=(1-(u+f))*E,s[6]=(m+M)*E,s[7]=0,s[8]=(_+A)*g,s[9]=(m-M)*g,s[10]=(1-(u+y))*g,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=es.set(s[0],s[1],s[2]).length(),o=es.set(s[4],s[5],s[6]).length(),l=es.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Tn.copy(this);let c=1/a,h=1/o,d=1/l;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=h,Tn.elements[5]*=h,Tn.elements[6]*=h,Tn.elements[8]*=d,Tn.elements[9]*=d,Tn.elements[10]*=d,t.setFromRotationMatrix(Tn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=xn,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(i-s),u=(t+e)/(t-e),p=(i+s)/(i-s),_,y;if(l)_=r/(a-r),y=a*r/(a-r);else if(o===xn)_=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===xs)_=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=xn,l=!1){let c=this.elements,h=2/(t-e),d=2/(i-s),u=-(t+e)/(t-e),p=-(i+s)/(i-s),_,y;if(l)_=1/(a-r),y=a/(a-r);else if(o===xn)_=-2/(a-r),y=-(a+r)/(a-r);else if(o===xs)_=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},es=new N,Tn=new Qe,mf=new N(0,0,0),gf=new N(1,1,1),ci=new N,Zr=new N,on=new N,xh=new Qe,yh=new nn,Rn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return xh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yh.setFromEuler(this),this.setFromQuaternion(yh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Rn.DEFAULT_ORDER="XYZ";var cr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},_f=0,Mh=new N,ts=new nn,Xn=new Qe,Jr=new N,Ys=new N,vf=new N,xf=new nn,Sh=new N(1,0,0),bh=new N(0,1,0),Th=new N(0,0,1),Eh={type:"added"},yf={type:"removed"},ns={type:"childadded",child:null},yl={type:"childremoved",child:null},Nt=class n extends kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=Gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new N,t=new Rn,i=new nn,s=new N(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Qe},normalMatrix:{value:new Ie}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ts.setFromAxisAngle(e,t),this.quaternion.multiply(ts),this}rotateOnWorldAxis(e,t){return ts.setFromAxisAngle(e,t),this.quaternion.premultiply(ts),this}rotateX(e){return this.rotateOnAxis(Sh,e)}rotateY(e){return this.rotateOnAxis(bh,e)}rotateZ(e){return this.rotateOnAxis(Th,e)}translateOnAxis(e,t){return Mh.copy(e).applyQuaternion(this.quaternion),this.position.add(Mh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sh,e)}translateY(e){return this.translateOnAxis(bh,e)}translateZ(e){return this.translateOnAxis(Th,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Jr.copy(e):Jr.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(Ys,Jr,this.up):Xn.lookAt(Jr,Ys,this.up),this.quaternion.setFromRotationMatrix(Xn),s&&(Xn.extractRotation(s.matrixWorld),ts.setFromRotationMatrix(Xn),this.quaternion.premultiply(ts.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ce("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Eh),ns.child=e,this.dispatchEvent(ns),ns.child=null):Ce("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yf),yl.child=e,this.dispatchEvent(yl),yl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Eh),ns.child=e,this.dispatchEvent(ns),ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,e,vf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,xf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Nt.DEFAULT_UP=new N(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var On=class extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Mf={type:"move"},bs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new On,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new On,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new On,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,i),f=this._getHandJoint(c,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&u>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new On;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Iu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},Kr={h:0,s:0,l:0};function Ml(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Fe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=je.workingColorSpace){return this.r=e,this.g=t,this.b=i,je.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=je.workingColorSpace){if(e=uf(e,1),t=Ye(t,0,1),i=Ye(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Ml(a,r,e+1/3),this.g=Ml(a,r,e),this.b=Ml(a,r,e-1/3)}return je.colorSpaceToWorking(this,s),this}setStyle(e,t=Xt){function i(r){r!==void 0&&parseFloat(r)<1&&Ae("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ae("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ae("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){let i=Iu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ae("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jn(e.r),this.g=Jn(e.g),this.b=Jn(e.b),this}copyLinearToSRGB(e){return this.r=_s(e.r),this.g=_s(e.g),this.b=_s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return je.workingToColorSpace(Wt.copy(this),e),Math.round(Ye(Wt.r*255,0,255))*65536+Math.round(Ye(Wt.g*255,0,255))*256+Math.round(Ye(Wt.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(Wt.copy(this),t);let i=Wt.r,s=Wt.g,r=Wt.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=Xt){je.workingToColorSpace(Wt.copy(this),e);let t=Wt.r,i=Wt.g,s=Wt.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(hi),this.setHSL(hi.h+e,hi.s+t,hi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(hi),e.getHSL(Kr);let i=ml(hi.h,Kr.h,t),s=ml(hi.s,Kr.s,t),r=ml(hi.l,Kr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Wt=new Fe;Fe.NAMES=Iu;var Ts=class extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},En=new N,qn=new N,Sl=new N,$n=new N,is=new N,ss=new N,wh=new N,bl=new N,Tl=new N,El=new N,wl=new ut,Al=new ut,Rl=new ut,Zn=class n{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),En.subVectors(e,t),s.cross(En);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){En.subVectors(s,t),qn.subVectors(i,t),Sl.subVectors(e,t);let a=En.dot(En),o=En.dot(qn),l=En.dot(Sl),c=qn.dot(qn),h=qn.dot(Sl),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,p=(c*l-o*h)*u,_=(a*h-o*l)*u;return r.set(1-p-_,_,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,$n.x),l.addScaledVector(a,$n.y),l.addScaledVector(o,$n.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return wl.setScalar(0),Al.setScalar(0),Rl.setScalar(0),wl.fromBufferAttribute(e,t),Al.fromBufferAttribute(e,i),Rl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(wl,r.x),a.addScaledVector(Al,r.y),a.addScaledVector(Rl,r.z),a}static isFrontFacing(e,t,i,s){return En.subVectors(i,t),qn.subVectors(e,t),En.cross(qn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),En.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;is.subVectors(s,i),ss.subVectors(r,i),bl.subVectors(e,i);let l=is.dot(bl),c=ss.dot(bl);if(l<=0&&c<=0)return t.copy(i);Tl.subVectors(e,s);let h=is.dot(Tl),d=ss.dot(Tl);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(i).addScaledVector(is,a);El.subVectors(e,r);let p=is.dot(El),_=ss.dot(El);if(_>=0&&p<=_)return t.copy(r);let y=p*c-l*_;if(y<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(ss,o);let m=h*_-p*d;if(m<=0&&d-h>=0&&p-_>=0)return wh.subVectors(r,s),o=(d-h)/(d-h+(p-_)),t.copy(s).addScaledVector(wh,o);let f=1/(m+y+u);return a=y*f,o=u*f,t.copy(i).addScaledVector(is,a).addScaledVector(ss,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},pi=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,wn):wn.fromBufferAttribute(r,a),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qr.copy(i.boundingBox)),Qr.applyMatrix4(e.matrixWorld),this.union(Qr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zs),ea.subVectors(this.max,Zs),rs.subVectors(e.a,Zs),as.subVectors(e.b,Zs),os.subVectors(e.c,Zs),ui.subVectors(as,rs),di.subVectors(os,as),Pi.subVectors(rs,os);let t=[0,-ui.z,ui.y,0,-di.z,di.y,0,-Pi.z,Pi.y,ui.z,0,-ui.x,di.z,0,-di.x,Pi.z,0,-Pi.x,-ui.y,ui.x,0,-di.y,di.x,0,-Pi.y,Pi.x,0];return!Cl(t,rs,as,os,ea)||(t=[1,0,0,0,1,0,0,0,1],!Cl(t,rs,as,os,ea))?!1:(ta.crossVectors(ui,di),t=[ta.x,ta.y,ta.z],Cl(t,rs,as,os,ea))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},jn=[new N,new N,new N,new N,new N,new N,new N,new N],wn=new N,Qr=new pi,rs=new N,as=new N,os=new N,ui=new N,di=new N,Pi=new N,Zs=new N,ea=new N,ta=new N,Ii=new N;function Cl(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ii.fromArray(n,r);let o=s.x*Math.abs(Ii.x)+s.y*Math.abs(Ii.y)+s.z*Math.abs(Ii.z),l=e.dot(Ii),c=t.dot(Ii),h=i.dot(Ii);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var yt=new N,na=new Be,Sf=0,Ot=class extends kn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=gc,this.updateRanges=[],this.gpuType=In,this.version=0,this._normalizationScale=e!==void 0?qo(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)na.fromBufferAttribute(this,t),na.applyMatrix3(e),this.setXY(t,na.x,na.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Cu(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Pu(e,this.array)}};var hr=class extends Ot{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ur=class extends Ot{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Et=class extends Ot{constructor(e,t,i){super(new Float32Array(e),t,i)}},bf=new pi,Js=new N,Pl=new N,mi=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):bf.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Js.subVectors(e,this.center);let t=Js.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Js,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Js.copy(e.center).add(Pl)),this.expandByPoint(Js.copy(e.center).sub(Pl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Tf=0,vn=new Qe,Il=new Nt,ls=new N,ln=new pi,Ks=new pi,It=new N,kt=class n extends kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=Gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cf(e)?ur:hr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ie().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,i){return vn.makeTranslation(e,t,i),this.applyMatrix4(vn),this}scale(e,t,i){return vn.makeScale(e,t,i),this.applyMatrix4(vn),this}lookAt(e){return Il.lookAt(e),Il.updateMatrix(),this.applyMatrix4(Il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Et(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){let i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ks.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(ln.min,Ks.min),ln.expandByPoint(It),It.addVectors(ln.max,Ks.max),ln.expandByPoint(It)):(ln.expandByPoint(Ks.min),ln.expandByPoint(Ks.max))}ln.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)It.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(It));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)It.fromBufferAttribute(o,c),l&&(ls.fromBufferAttribute(e,c),It.add(ls)),s=Math.max(s,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Ot(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let k=0;k<i.count;k++)o[k]=new N,l[k]=new N;let h=new N,d=new N,u=new N,p=new Be,_=new Be,y=new Be,m=new N,f=new N;function M(k,I,D){c[k]=c[I]=c[D]=1,h.fromBufferAttribute(i,k),d.fromBufferAttribute(i,I),u.fromBufferAttribute(i,D),p.fromBufferAttribute(r,k),_.fromBufferAttribute(r,I),y.fromBufferAttribute(r,D),d.sub(h),u.sub(h),_.sub(p),y.sub(p);let z=1/(_.x*y.y-y.x*_.y);isFinite(z)&&(m.copy(d).multiplyScalar(y.y).addScaledVector(u,-_.y).multiplyScalar(z),f.copy(u).multiplyScalar(_.x).addScaledVector(d,-y.x).multiplyScalar(z),o[k].add(m),o[I].add(m),o[D].add(m),l[k].add(f),l[I].add(f),l[D].add(f))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let k=0,I=A.length;k<I;++k){let D=A[k],z=D.start,q=D.count;for(let P=z,W=z+q;P<W;P+=3)M(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let T=new N,w=new N,E=new N,g=new N;function S(k){E.fromBufferAttribute(s,k),g.copy(E);let I=o[k];T.copy(I),T.sub(E.multiplyScalar(E.dot(I))).normalize(),w.crossVectors(g,I);let z=w.dot(l[k])<0?-1:1;a.setXYZW(k,T.x,T.y,T.z,z)}for(let k=0,I=i.count;k<I;++k)c[k]&&S(k);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);let s=new N,r=new N,a=new N,o=new N,l=new N,c=new N,h=new N,d=new N;if(e)for(let u=0,p=e.count;u<p;u+=3){let _=e.getX(u+0),y=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),p=0,_=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*h;for(let f=0;f<h;f++)u[_++]=c[p++]}return new Ot(u,h,d)}if(this.index===null)return Ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],p=e(u,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},za=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=gc,this.updateRanges=[],this.version=0,this.uuid=Gi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Ah(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Ah(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function Ah(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=Gi()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var Qt=new N,dr=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s,this._normalizationScale=e!==void 0?qo(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){or("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){or("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Cu(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Pu(e,this.data.array)}},Ll=new N,Ef=new N,wf=new Ie,An=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Ll.subVectors(i,t).cross(Ef.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Ll),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||wf.getNormalMatrix(e),s=this.coplanarPoint(Ll).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Af=0,Cn=class extends kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=Gi(),this.name="",this.type="Material",this.blending=Os,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zl,this.blendDst=Jl,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ta,this.stencilZFail=Ta,this.stencilZPass=Ta,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ae(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ae(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Fe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new An().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Be().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Be().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Di=class extends Cn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},cs,Qs=new N,hs=new N,us=new N,ds=new Be,er=new Be,Lu=new Qe,ia=new N,tr=new N,sa=new N,Rh=new Be,Nl=new Be,Ch=new Be,Es=class extends Nt{constructor(e=new Di){if(super(),this.isSprite=!0,this.type="Sprite",cs===void 0){cs=new kt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new za(t,5);cs.setIndex([0,1,2,0,2,3]),cs.setAttribute("position",new dr(i,3,0,!1)),cs.setAttribute("uv",new dr(i,2,3,!1))}this.geometry=cs,this.material=e,this.center=new Be(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ce('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),hs.setFromMatrixScale(this.matrixWorld),Lu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),us.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&hs.multiplyScalar(-us.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;ra(ia.set(-.5,-.5,0),us,a,hs,s,r),ra(tr.set(.5,-.5,0),us,a,hs,s,r),ra(sa.set(.5,.5,0),us,a,hs,s,r),Rh.set(0,0),Nl.set(1,0),Ch.set(1,1);let o=e.ray.intersectTriangle(ia,tr,sa,!1,Qs);if(o===null&&(ra(tr.set(-.5,.5,0),us,a,hs,s,r),Nl.set(0,1),o=e.ray.intersectTriangle(ia,sa,tr,!1,Qs),o===null))return;let l=e.ray.origin.distanceTo(Qs);l<e.near||l>e.far||t.push({distance:l,point:Qs.clone(),uv:Zn.getInterpolation(Qs,ia,tr,sa,Rh,Nl,Ch,new Be),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function ra(n,e,t,i,s,r){ds.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(er.x=r*ds.x-s*ds.y,er.y=s*ds.x+r*ds.y):er.copy(ds),n.copy(e),n.x+=er.x,n.y+=er.y,n.applyMatrix4(Lu)}var Yn=new N,Dl=new N,aa=new N,oa=new N,ws=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Dl.copy(e).add(t).multiplyScalar(.5),aa.copy(t).sub(e).normalize(),oa.copy(this.origin).sub(Dl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(aa),o=oa.dot(this.direction),l=-oa.dot(aa),c=oa.lengthSq(),h=Math.abs(1-a*a),d,u,p,_;if(h>0)if(d=a*l-o,u=a*o-l,_=r*h,d>=0)if(u>=-_)if(u<=_){let y=1/h;d*=y,u*=y,p=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-_?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c):u<=_?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Dl).addScaledVector(aa,u),p}intersectSphere(e,t){if(e.radius<0)return null;Yn.subVectors(e.center,this.origin);let i=Yn.dot(this.direction),s=Yn.dot(Yn)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,p=e.z-a.z,_=t.x-a.x,y=t.y-a.y,m=t.z-a.z,f=i.x-a.x,M=i.y-a.y,A=i.z-a.z,T=Math.abs(l),w=Math.abs(c),E=Math.abs(h),g,S,k,I,D,z,q,P,W,Z,V,te;if(T>=w&&T>=E?(k=l,z=d,W=_,te=f,l>=0?(g=c,S=h,I=u,D=p,q=y,P=m,Z=M,V=A):(g=h,S=c,I=p,D=u,q=m,P=y,Z=A,V=M)):w>=E?(k=c,z=u,W=y,te=M,c>=0?(g=h,S=l,I=p,D=d,q=m,P=_,Z=A,V=f):(g=l,S=h,I=d,D=p,q=_,P=m,Z=f,V=A)):(k=h,z=p,W=m,te=A,h>=0?(g=l,S=c,I=d,D=u,q=_,P=y,Z=f,V=M):(g=c,S=l,I=u,D=d,q=y,P=_,Z=M,V=f)),k===0)return null;let G=g/k,K=S/k,Q=1/k,Me=I-G*z,De=D-K*z,j=q-G*W,pe=P-K*W,ve=Z-G*te,Ee=V-K*te,me=ve*pe-Ee*j,ke=Me*Ee-De*ve,vt=j*De-pe*Me;if(s){if(me<0||ke<0||vt<0)return null}else if((me<0||ke<0||vt<0)&&(me>0||ke>0||vt>0))return null;let Re=me+ke+vt;if(Re===0)return null;let et=Q*(me*z+ke*W+vt*te);return(Re>0?et<0:et>0)?null:this.at(et/Re,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},gi=class extends Cn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=so,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ph=new Qe,Li=new ws,la=new mi,Ih=new N,ca=new N,ha=new N,ua=new N,Ul=new N,da=new N,Lh=new N,fa=new N,Bt=class extends Nt{constructor(e=new kt,t=new gi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){da.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Ul.fromBufferAttribute(d,e),a?da.addScaledVector(Ul,h):da.addScaledVector(Ul.sub(t),h))}t.add(da)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),la.copy(i.boundingSphere),la.applyMatrix4(r),Li.copy(e.ray).recast(e.near),!(la.containsPoint(Li.origin)===!1&&(Li.intersectSphere(la,Ih)===null||Li.origin.distanceToSquared(Ih)>(e.far-e.near)**2))&&(Ph.copy(r).invert(),Li.copy(e.ray).applyMatrix4(Ph),!(i.boundingBox!==null&&Li.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Li)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=u.length;_<y;_++){let m=u[_],f=a[m.materialIndex],M=Math.max(m.start,p.start),A=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let T=M,w=A;T<w;T+=3){let E=o.getX(T),g=o.getX(T+1),S=o.getX(T+2);s=pa(this,f,e,i,c,h,d,E,g,S),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let _=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=_,f=y;m<f;m+=3){let M=o.getX(m),A=o.getX(m+1),T=o.getX(m+2);s=pa(this,a,e,i,c,h,d,M,A,T),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,y=u.length;_<y;_++){let m=u[_],f=a[m.materialIndex],M=Math.max(m.start,p.start),A=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let T=M,w=A;T<w;T+=3){let E=T,g=T+1,S=T+2;s=pa(this,f,e,i,c,h,d,E,g,S),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let _=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=_,f=y;m<f;m+=3){let M=m,A=m+1,T=m+2;s=pa(this,a,e,i,c,h,d,M,A,T),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Rf(n,e,t,i,s,r,a,o){let l;if(e.side===zt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Mi,o),l===null)return null;fa.copy(o),fa.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(fa);return c<t.near||c>t.far?null:{distance:c,point:fa.clone(),object:n}}function pa(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,ca),n.getVertexPosition(l,ha),n.getVertexPosition(c,ua);let h=Rf(n,e,t,i,ca,ha,ua,Lh);if(h){let d=new N;Zn.getBarycoord(Lh,ca,ha,ua,d),s&&(h.uv=Zn.getInterpolatedAttribute(s,o,l,c,d,new Be)),r&&(h.uv1=Zn.getInterpolatedAttribute(r,o,l,c,d,new Be)),a&&(h.normal=Zn.getInterpolatedAttribute(a,o,l,c,d,new N),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new N,materialIndex:0};Zn.getNormal(ca,ha,ua,u.normal),h.face=u,h.barycoord=d}return h}var Va=class extends $t{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Lt,h=Lt,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ni=new mi,Cf=new Be(.5,.5),ma=new N,_i=class{constructor(e=new An,t=new An,i=new An,s=new An,r=new An,a=new An){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=xn,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],p=r[7],_=r[8],y=r[9],m=r[10],f=r[11],M=r[12],A=r[13],T=r[14],w=r[15];if(s[0].setComponents(c-a,p-h,f-_,w-M).normalize(),s[1].setComponents(c+a,p+h,f+_,w+M).normalize(),s[2].setComponents(c+o,p+d,f+y,w+A).normalize(),s[3].setComponents(c-o,p-d,f-y,w-A).normalize(),i)s[4].setComponents(l,u,m,T).normalize(),s[5].setComponents(c-l,p-u,f-m,w-T).normalize();else if(s[4].setComponents(c-l,p-u,f-m,w-T).normalize(),t===xn)s[5].setComponents(c+l,p+u,f+m,w+T).normalize();else if(t===xs)s[5].setComponents(l,u,m,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(e){Ni.center.set(0,0,0);let t=Cf.distanceTo(e.center);return Ni.radius=.7071067811865476+t,Ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(ma.x=s.normal.x>0?e.max.x:e.min.x,ma.y=s.normal.y>0?e.max.y:e.min.y,ma.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ma)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Nh=new Qe,Ha=class n{constructor(){this.coordinateSystem=xn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Nh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new _i),i[s].setFromProjectionMatrix(Nh,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new _i),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var As=class extends Cn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ga=new N,Wa=new N,Dh=new Qe,nr=new ws,ga=new mi,Fl=new N,Uh=new N,fr=class extends Nt{constructor(e=new kt,t=new As){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Ga.fromBufferAttribute(t,s-1),Wa.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Ga.distanceTo(Wa);e.setAttribute("lineDistance",new Et(i,1))}else Ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ga.copy(i.boundingSphere),ga.applyMatrix4(s),ga.radius+=r,e.ray.intersectsSphere(ga)===!1)return;Dh.copy(s).invert(),nr.copy(e.ray).applyMatrix4(Dh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let p=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let y=p,m=_-1;y<m;y+=c){let f=h.getX(y),M=h.getX(y+1),A=_a(this,e,nr,l,f,M,y);A&&t.push(A)}if(this.isLineLoop){let y=h.getX(_-1),m=h.getX(p),f=_a(this,e,nr,l,y,m,_-1);f&&t.push(f)}}else{let p=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let y=p,m=_-1;y<m;y+=c){let f=_a(this,e,nr,l,y,y+1,y);f&&t.push(f)}if(this.isLineLoop){let y=_a(this,e,nr,l,_-1,p,_-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function _a(n,e,t,i,s,r,a){let o=n.geometry.attributes.position;if(Ga.fromBufferAttribute(o,s),Wa.fromBufferAttribute(o,r),t.distanceSqToSegment(Ga,Wa,Fl,Uh)>i)return;Fl.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Fl);if(!(c<e.near||c>e.far))return{distance:c,point:Uh.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var Ui=class extends Cn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Fh=new Qe,Hl=new ws,va=new mi,xa=new N,Rs=class extends Nt{constructor(e=new kt,t=new Ui){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),va.copy(i.boundingSphere),va.applyMatrix4(s),va.radius+=r,e.ray.intersectsSphere(va)===!1)return;Fh.copy(s).invert(),Hl.copy(e.ray).applyMatrix4(Fh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=u,y=p;_<y;_++){let m=c.getX(_);xa.fromBufferAttribute(d,m),Oh(xa,m,l,s,e,t,this)}}else{let u=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let _=u,y=p;_<y;_++)xa.fromBufferAttribute(d,_),Oh(xa,_,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Oh(n,e,t,i,s,r,a){let o=Hl.distanceSqToPoint(n);if(o<t){let l=new N;Hl.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var pr=class extends $t{constructor(e=[],t=Vi,i,s,r,a,o,l,c,h){super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},mr=class extends $t{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Qn=class extends $t{constructor(e,t,i=Pn,s,r,a,o=Lt,l=Lt,c,h=Kn,d=1){if(h!==Kn&&h!==ni)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ss(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},gr=class extends Qn{constructor(e,t=Pn,i=Vi,s,r,a=Lt,o=Lt,l,c=Kn){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,i,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},_r=class extends $t{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Cs=class n extends kt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,p=0;_("z","y","x",-1,-1,i,t,e,a,r,0),_("z","y","x",1,-1,i,t,-e,a,r,1),_("x","z","y",1,1,e,i,t,s,a,2),_("x","z","y",1,-1,e,i,-t,s,a,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Et(c,3)),this.setAttribute("normal",new Et(h,3)),this.setAttribute("uv",new Et(d,2));function _(y,m,f,M,A,T,w,E,g,S,k){let I=T/g,D=w/S,z=T/2,q=w/2,P=E/2,W=g+1,Z=S+1,V=0,te=0,G=new N;for(let K=0;K<Z;K++){let Q=K*D-q;for(let Me=0;Me<W;Me++){let De=Me*I-z;G[y]=De*M,G[m]=Q*A,G[f]=P,c.push(G.x,G.y,G.z),G[y]=0,G[m]=0,G[f]=E>0?1:-1,h.push(G.x,G.y,G.z),d.push(Me/g),d.push(1-K/S),V+=1}}for(let K=0;K<S;K++)for(let Q=0;Q<g;Q++){let Me=u+Q+W*K,De=u+Q+W*(K+1),j=u+(Q+1)+W*(K+1),pe=u+(Q+1)+W*K;l.push(Me,De,pe),l.push(De,j,pe),te+=6}o.addGroup(p,te,k),p+=te,u+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Fi=class n extends kt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=e/o,u=t/l,p=[],_=[],y=[],m=[];for(let f=0;f<h;f++){let M=f*u-a;for(let A=0;A<c;A++){let T=A*d-r;_.push(T,-M,0),y.push(0,0,1),m.push(A/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<o;M++){let A=M+c*f,T=M+c*(f+1),w=M+1+c*(f+1),E=M+1+c*f;p.push(A,T,E),p.push(T,w,E)}this.setIndex(p),this.setAttribute("position",new Et(_,3)),this.setAttribute("normal",new Et(y,3)),this.setAttribute("uv",new Et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},vr=class n extends kt{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],h=[],d=e,u=(t-e)/s,p=new N,_=new Be;for(let y=0;y<=s;y++){for(let m=0;m<=i;m++){let f=r+m/i*a;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),_.x=(p.x/t+1)/2,_.y=(p.y/t+1)/2,h.push(_.x,_.y)}d+=u}for(let y=0;y<s;y++){let m=y*(i+1);for(let f=0;f<i;f++){let M=f+m,A=M,T=M+i+1,w=M+i+2,E=M+1;o.push(A,T,E),o.push(T,w,E)}}this.setIndex(o),this.setAttribute("position",new Et(l,3)),this.setAttribute("normal",new Et(c,3)),this.setAttribute("uv",new Et(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Oi=class n extends kt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new N,u=new N,p=[],_=[],y=[],m=[];for(let f=0;f<=i;f++){let M=[],A=f/i,T=a+A*o,w=e*Math.cos(T),E=Math.sqrt(e*e-w*w),g=0;f===0&&a===0?g=.5/t:f===i&&l===Math.PI&&(g=-.5/t);for(let S=0;S<=t;S++){let k=S/t,I=s+k*r;d.x=-E*Math.cos(I),d.y=w,d.z=E*Math.sin(I),_.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),m.push(k+g,1-A),M.push(c++)}h.push(M)}for(let f=0;f<i;f++)for(let M=0;M<t;M++){let A=h[f][M+1],T=h[f][M],w=h[f+1][M],E=h[f+1][M+1];(f!==0||a>0)&&p.push(A,T,E),(f!==i-1||l<Math.PI)&&p.push(T,w,E)}this.setIndex(p),this.setAttribute("position",new Et(_,3)),this.setAttribute("normal",new Et(y,3)),this.setAttribute("uv",new Et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Wi(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(kh(s))s.isRenderTargetTexture?(Ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(kh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function jt(n){let e={};for(let t=0;t<n.length;t++){let i=Wi(n[t]);for(let s in i)e[s]=i[s]}return e}function kh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Pf(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function vc(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}var Nu={clone:Wi,merge:jt},If=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,sn=class extends Cn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=If,this.fragmentShader=Lf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wi(e.uniforms),this.uniformsGroups=Pf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Fe().setHex(s.value);break;case"v2":this.uniforms[i].value=new Be().fromArray(s.value);break;case"v3":this.uniforms[i].value=new N().fromArray(s.value);break;case"v4":this.uniforms[i].value=new ut().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ie().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Qe().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Xa=class extends sn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Ps=class extends Cn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xo,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=so,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},qa=class extends Cn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},$a=class extends Cn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function fs(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function ya(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var vi=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ja=class extends vi{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bl,endingEnd:Bl}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case zl:r=e,o=2*t-i;break;case Vl:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case zl:a=e,l=2*i-t;break;case Vl:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,_=(i-t)/(s-t),y=_*_,m=y*_,f=-u*m+2*u*y-u*_,M=(1+u)*m+(-1.5-2*u)*y+(-.5+u)*_+1,A=(-1-p)*m+(1.5+p)*y+.5*_,T=p*m-p*y;for(let w=0;w!==o;++w)r[w]=f*a[h+w]+M*a[c+w]+A*a[l+w]+T*a[d+w];return r}},Ya=class extends vi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},Za=class extends vi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ja=class extends vi{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let _=(i-t)/(s-t),y=1-_;for(let m=0;m!==o;++m)r[m]=a[c+m]*y+a[l+m]*_;return r}let u=o*2,p=e-1;for(let _=0;_!==o;++_){let y=a[c+_],m=a[l+_],f=p*u+_*2,M=d[f],A=d[f+1],T=e*u+_*2,w=h[T],E=h[T+1],g=Df(i,t,M,w,s);r[_]=Du(g,y,A,E,m)}return r}};function Du(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function Nf(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function Df(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=Du(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let l=Nf(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var hn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=fs(t,this.TimeBufferType),this.values=fs(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:fs(e.times,Array),values:fs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),ya(e.settings)&&(i.settings={inTangents:fs(e.settings.inTangents,Array),outTangents:fs(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Za(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ya(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ja(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ja(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case sr:t=this.InterpolantFactoryMethodDiscrete;break;case Ua:t=this.InterpolantFactoryMethodLinear;break;case ba:t=this.InterpolantFactoryMethodSmooth;break;case kl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ae("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return sr;case this.InterpolantFactoryMethodLinear:return Ua;case this.InterpolantFactoryMethodSmooth:return ba;case this.InterpolantFactoryMethodBezier:return kl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;ya(this.settings)&&(Bh(this.settings.inTangents,e),Bh(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;ya(this.settings)&&(zh(this.settings.inTangents,e),zh(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ce("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Ce("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Ce("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ce("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&hf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ce("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ba,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*i,u=d-i,p=d+i;for(let _=0;_!==i;++_){let y=t[d+_];if(y!==t[u+_]||y!==t[p+_]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*i,u=a*i;for(let p=0;p!==i;++p)t[u+p]=t[d+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,ya(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Bh(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function zh(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}hn.prototype.ValueTypeName="";hn.prototype.TimeBufferType=Float32Array;hn.prototype.ValueBufferType=Float32Array;hn.prototype.DefaultInterpolation=Ua;var xi=class extends hn{constructor(e,t,i){super(e,t,i)}};xi.prototype.ValueTypeName="bool";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=sr;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ka=class extends hn{constructor(e,t,i,s){super(e,t,i,s)}};Ka.prototype.ValueTypeName="color";var Qa=class extends hn{constructor(e,t,i,s){super(e,t,i,s)}};Qa.prototype.ValueTypeName="number";var eo=class extends vi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)nn.slerpFlat(r,0,a,c-o,a,c,l);return r}},xr=class extends hn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new eo(this.times,this.values,this.getValueSize(),e)}};xr.prototype.ValueTypeName="quaternion";xr.prototype.InterpolantFactoryMethodSmooth=void 0;var yi=class extends hn{constructor(e,t,i){super(e,t,i)}};yi.prototype.ValueTypeName="string";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=sr;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;var to=class extends hn{constructor(e,t,i,s){super(e,t,i,s)}};to.prototype.ValueTypeName="vector";var Ea={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Vh(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Vh(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Vh(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Is=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let p=c[d],_=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Uu=new Is,Ls=class{constructor(e){this.manager=e!==void 0?e:Uu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Ls.DEFAULT_MATERIAL_NAME="__DEFAULT";var ps=new WeakMap,no=class extends Ls{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ea.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=ps.get(a);d===void 0&&(d=[],ps.set(a,d)),d.push({onLoad:t,onError:s})}return a}let o=ys("img");function l(){h(),t&&t(this);let d=ps.get(this)||[];for(let u=0;u<d.length;u++){let p=d[u];p.onLoad&&p.onLoad(this)}ps.delete(this),r.manager.itemEnd(e)}function c(d){h(),s&&s(d),Ea.remove(`image:${e}`);let u=ps.get(this)||[];for(let p=0;p<u.length;p++){let _=u[p];_.onError&&_.onError(d)}ps.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ea.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var yr=class extends Ls{constructor(e){super(e)}load(e,t,i,s){let r=new $t,a=new no(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},Ns=class extends Nt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var Ol=new Qe,Hh=new N,Gh=new N,Mr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.mapType=rn,this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _i,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Hh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hh),Gh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Ol.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Ol,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===xs||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Ol)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ma=new N,Sa=new nn,Un=new N,Sr=class extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ma,Sa,Un),Un.x===1&&Un.y===1&&Un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ma,Sa,Un.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Ma,Sa,Un),Un.x===1&&Un.y===1&&Un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ma,Sa,Un.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},fi=new N,Wh=new Be,Xh=new Be,qt=class extends Sr{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Fa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(pl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fa*2*Math.atan(Math.tan(pl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fi.x,fi.y).multiplyScalar(-e/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fi.x,fi.y).multiplyScalar(-e/fi.z)}getViewSize(e,t){return this.getViewBounds(e,Wh,Xh),t.subVectors(Xh,Wh)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(pl*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Gl=class extends Mr{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0}},br=class extends Ns{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Gl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ki=class extends Sr{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Wl=class extends Mr{constructor(){super(new ki(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Tr=class extends Ns{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new Wl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Ds=class extends Ns{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var ms=-90,gs=1,Us=class extends Nt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new qt(ms,gs,e,t);s.layers=this.layers,this.add(s);let r=new qt(ms,gs,e,t);r.layers=this.layers,this.add(r);let a=new qt(ms,gs,e,t);a.layers=this.layers,this.add(a);let o=new qt(ms,gs,e,t);o.layers=this.layers,this.add(o);let l=new qt(ms,gs,e,t);l.layers=this.layers,this.add(l);let c=new qt(ms,gs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===xn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=y,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},io=class extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var xc="\\[\\]\\.:\\/",Uf=new RegExp("["+xc+"]","g"),yc="[^"+xc+"]",Ff="[^"+xc.replace("\\.","")+"]",Of=/((?:WC+[\/:])*)/.source.replace("WC",yc),kf=/(WCOD+)?/.source.replace("WCOD",Ff),Bf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yc),zf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yc),Vf=new RegExp("^"+Of+kf+Bf+zf+"$"),Hf=["material","materials","bones","map"],Xl=class{constructor(e,t,i){let s=i||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},lt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Uf,"")}static parseTrackName(e){let t=Vf.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Hf.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ae("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ce("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ce("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ce("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ce("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Ce("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ce("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};lt.Composite=Xl;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Tv=new Float32Array(1);var ql=class{static{this.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};function Mc(n,e,t,i){let s=Gf(i);switch(t){case hc:return n*e;case dc:return n*e/s.components*s.byteLength;case uo:return n*e/s.components*s.byteLength;case Si:return n*e*2/s.components*s.byteLength;case fo:return n*e*2/s.components*s.byteLength;case uc:return n*e*3/s.components*s.byteLength;case Nn:return n*e*4/s.components*s.byteLength;case po:return n*e*4/s.components*s.byteLength;case Ar:case Rr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Cr:case Pr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case go:case vo:return Math.max(n,16)*Math.max(e,8)/4;case mo:case _o:return Math.max(n,8)*Math.max(e,8)/2;case xo:case yo:case So:case bo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Mo:case Ir:case To:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Eo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case wo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ao:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ro:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Co:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Po:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Io:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Lo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case No:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Do:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Uo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Fo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Oo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ko:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Bo:case zo:case Vo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ho:case Go:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Lr:case Wo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Gf(n){switch(n){case rn:case ac:return{byteLength:1,components:1};case Bs:case oc:case Ln:return{byteLength:2,components:1};case co:case ho:return{byteLength:2,components:4};case Pn:case lo:case In:return{byteLength:4,components:1};case lc:case cc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function id(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Xf(n){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,h);else{d.sort((p,_)=>p.start-_.start);let u=0;for(let p=1;p<d.length;p++){let _=d[u],y=d[p];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++u,d[u]=y)}d.length=u+1;for(let p=0,_=d.length;p<_;p++){let y=d[p];n.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var qf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$f=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ep=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,tp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,np=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ip=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,rp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ap=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,up=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,dp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,fp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,pp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,mp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,_p=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Tp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Ep=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ap=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Rp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ip=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Np=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Up=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Op=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,kp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Gp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Wp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$p=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,jp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,em=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,im=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rm=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,am=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,om=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,lm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,pm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,mm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_m=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ym=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Mm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Em=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Am=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Rm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Cm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Pm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Im=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Nm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Um=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Om=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,km=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Wm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Xm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jm=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Km=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Qm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,eg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ng=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ig=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ag=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,og=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ug=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_g=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:qf,alphahash_pars_fragment:$f,alphamap_fragment:jf,alphamap_pars_fragment:Yf,alphatest_fragment:Zf,alphatest_pars_fragment:Jf,aomap_fragment:Kf,aomap_pars_fragment:Qf,batching_pars_vertex:ep,batching_vertex:tp,begin_vertex:np,beginnormal_vertex:ip,bsdfs:sp,iridescence_fragment:rp,bumpmap_pars_fragment:ap,clipping_planes_fragment:op,clipping_planes_pars_fragment:lp,clipping_planes_pars_vertex:cp,clipping_planes_vertex:hp,color_fragment:up,color_pars_fragment:dp,color_pars_vertex:fp,color_vertex:pp,common:mp,defaultnormal_vertex:gp,displacementmap_pars_vertex:_p,displacementmap_vertex:vp,emissivemap_fragment:xp,emissivemap_pars_fragment:yp,colorspace_fragment:Mp,colorspace_pars_fragment:Sp,envmap_fragment:bp,envmap_common_pars_fragment:Tp,envmap_pars_fragment:Ep,envmap_pars_vertex:wp,envmap_physical_pars_fragment:Op,envmap_vertex:Ap,fog_vertex:Rp,fog_pars_vertex:Cp,fog_fragment:Pp,fog_pars_fragment:Ip,gradientmap_pars_fragment:Lp,lightmap_pars_fragment:Np,lights_lambert_fragment:Dp,lights_lambert_pars_fragment:Up,lights_pars_begin:Fp,lights_toon_fragment:kp,lights_toon_pars_fragment:Bp,lights_phong_fragment:zp,lights_phong_pars_fragment:Vp,lights_physical_fragment:Hp,lights_physical_pars_fragment:Gp,lights_fragment_begin:Wp,lights_fragment_maps:Xp,lights_fragment_end:qp,lightprobes_pars_fragment:$p,logdepthbuf_fragment:jp,logdepthbuf_pars_fragment:Yp,logdepthbuf_pars_vertex:Zp,logdepthbuf_vertex:Jp,map_fragment:Kp,map_pars_fragment:Qp,map_particle_fragment:em,map_particle_pars_fragment:tm,metalnessmap_fragment:nm,metalnessmap_pars_fragment:im,morphinstance_vertex:sm,morphcolor_vertex:rm,morphnormal_vertex:am,morphtarget_pars_vertex:om,morphtarget_vertex:lm,normal_fragment_begin:cm,normal_fragment_maps:hm,normal_pars_fragment:um,normal_pars_vertex:dm,normal_vertex:fm,normalmap_pars_fragment:pm,clearcoat_normal_fragment_begin:mm,clearcoat_normal_fragment_maps:gm,clearcoat_pars_fragment:_m,iridescence_pars_fragment:vm,opaque_fragment:xm,packing:ym,premultiplied_alpha_fragment:Mm,project_vertex:Sm,dithering_fragment:bm,dithering_pars_fragment:Tm,roughnessmap_fragment:Em,roughnessmap_pars_fragment:wm,shadowmap_pars_fragment:Am,shadowmap_pars_vertex:Rm,shadowmap_vertex:Cm,shadowmask_pars_fragment:Pm,skinbase_vertex:Im,skinning_pars_vertex:Lm,skinning_vertex:Nm,skinnormal_vertex:Dm,specularmap_fragment:Um,specularmap_pars_fragment:Fm,tonemapping_fragment:Om,tonemapping_pars_fragment:km,transmission_fragment:Bm,transmission_pars_fragment:zm,uv_pars_fragment:Vm,uv_pars_vertex:Hm,uv_vertex:Gm,worldpos_vertex:Wm,background_vert:Xm,background_frag:qm,backgroundCube_vert:$m,backgroundCube_frag:jm,cube_vert:Ym,cube_frag:Zm,depth_vert:Jm,depth_frag:Km,distance_vert:Qm,distance_frag:eg,equirect_vert:tg,equirect_frag:ng,linedashed_vert:ig,linedashed_frag:sg,meshbasic_vert:rg,meshbasic_frag:ag,meshlambert_vert:og,meshlambert_frag:lg,meshmatcap_vert:cg,meshmatcap_frag:hg,meshnormal_vert:ug,meshnormal_frag:dg,meshphong_vert:fg,meshphong_frag:pg,meshphysical_vert:mg,meshphysical_frag:gg,meshtoon_vert:_g,meshtoon_frag:vg,points_vert:xg,points_frag:yg,shadow_vert:Mg,shadow_frag:Sg,sprite_vert:bg,sprite_frag:Tg},fe={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},Vn={basic:{uniforms:jt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:jt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Fe(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:jt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:jt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:jt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:jt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:jt([fe.points,fe.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:jt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:jt([fe.common,fe.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:jt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:jt([fe.sprite,fe.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:jt([fe.common,fe.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:jt([fe.lights,fe.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Vn.physical={uniforms:jt([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ie},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};var $o={r:0,b:0,g:0},Eg=new Qe,sd=new Ie;sd.set(-1,0,0,0,1,0,0,0,1);function wg(n,e,t,i,s,r){let a=new Fe(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function p(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){let T=M.backgroundBlurriness>0;A=e.get(A,T)}return A}function _(M){let A=!1,T=p(M);T===null?m(a,o):T&&T.isColor&&(m(T,1),A=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(M,A){let T=p(A);T&&T.isCubeTexture?(c===void 0&&(c=new Bt(new Cs(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:Wi(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,E,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=T,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Eg.makeRotationFromEuler(A.backgroundRotation)).transpose(),T.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(sd),c.material.toneMapped=je.getTransfer(T.colorSpace)!==Ke,(h!==T||d!==T.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=T,d=T.version,u=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new Bt(new Fi(2,2),new sn({name:"BackgroundMaterial",uniforms:Wi(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=je.getTransfer(T.colorSpace)!==Ke,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||d!==T.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=T,d=T.version,u=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,A){M.getRGB($o,vc(n)),t.buffers.color.setClear($o.r,$o.g,$o.b,A,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,A=1){a.set(M),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:_,addToRenderList:y,dispose:f}}function Ag(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(D,z,q,P,W){let Z=!1,V=d(D,P,q,z);r!==V&&(r=V,c(r.object)),Z=p(D,P,q,W),Z&&_(D,P,q,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,T(D,z,q,P),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function c(D){return n.bindVertexArray(D)}function h(D){return n.deleteVertexArray(D)}function d(D,z,q,P){let W=P.wireframe===!0,Z=i[z.id];Z===void 0&&(Z={},i[z.id]=Z);let V=D.isInstancedMesh===!0?D.id:0,te=Z[V];te===void 0&&(te={},Z[V]=te);let G=te[q.id];G===void 0&&(G={},te[q.id]=G);let K=G[W];return K===void 0&&(K=u(l()),G[W]=K),K}function u(D){let z=[],q=[],P=[];for(let W=0;W<t;W++)z[W]=0,q[W]=0,P[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:q,attributeDivisors:P,object:D,attributes:{},index:null}}function p(D,z,q,P){let W=r.attributes,Z=z.attributes,V=0,te=q.getAttributes();for(let G in te)if(te[G].location>=0){let Q=W[G],Me=Z[G];if(Me===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(Me=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(Me=D.instanceColor)),Q===void 0||Q.attribute!==Me||Me&&Q.data!==Me.data)return!0;V++}return r.attributesNum!==V||r.index!==P}function _(D,z,q,P){let W={},Z=z.attributes,V=0,te=q.getAttributes();for(let G in te)if(te[G].location>=0){let Q=Z[G];Q===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor));let Me={};Me.attribute=Q,Q&&Q.data&&(Me.data=Q.data),W[G]=Me,V++}r.attributes=W,r.attributesNum=V,r.index=P}function y(){let D=r.newAttributes;for(let z=0,q=D.length;z<q;z++)D[z]=0}function m(D){f(D,0)}function f(D,z){let q=r.newAttributes,P=r.enabledAttributes,W=r.attributeDivisors;q[D]=1,P[D]===0&&(n.enableVertexAttribArray(D),P[D]=1),W[D]!==z&&(n.vertexAttribDivisor(D,z),W[D]=z)}function M(){let D=r.newAttributes,z=r.enabledAttributes;for(let q=0,P=z.length;q<P;q++)z[q]!==D[q]&&(n.disableVertexAttribArray(q),z[q]=0)}function A(D,z,q,P,W,Z,V){V===!0?n.vertexAttribIPointer(D,z,q,W,Z):n.vertexAttribPointer(D,z,q,P,W,Z)}function T(D,z,q,P){y();let W=P.attributes,Z=q.getAttributes(),V=z.defaultAttributeValues;for(let te in Z){let G=Z[te];if(G.location>=0){let K=W[te];if(K===void 0&&(te==="instanceMatrix"&&D.instanceMatrix&&(K=D.instanceMatrix),te==="instanceColor"&&D.instanceColor&&(K=D.instanceColor)),K!==void 0){let Q=K.normalized,Me=K.itemSize,De=e.get(K);if(De===void 0)continue;let j=De.buffer,pe=De.type,ve=De.bytesPerElement,Ee=pe===n.INT||pe===n.UNSIGNED_INT||K.gpuType===lo;if(K.isInterleavedBufferAttribute){let me=K.data,ke=me.isInterleavedBuffer===!0?me.stride:me.itemSize,vt=K.offset;if(me.isInstancedInterleavedBuffer||me.isInstancedBufferAttribute){for(let Re=0;Re<G.locationSize;Re++)f(G.location+Re,me.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Re=0;Re<G.locationSize;Re++)m(G.location+Re);n.bindBuffer(n.ARRAY_BUFFER,j);for(let Re=0;Re<G.locationSize;Re++)A(G.location+Re,Me/G.locationSize,pe,Q,ke*ve,(vt+Me/G.locationSize*Re)*ve,Ee)}else{if(K.isInstancedBufferAttribute){for(let me=0;me<G.locationSize;me++)f(G.location+me,K.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let me=0;me<G.locationSize;me++)m(G.location+me);n.bindBuffer(n.ARRAY_BUFFER,j);for(let me=0;me<G.locationSize;me++)A(G.location+me,Me/G.locationSize,pe,Q,Me*ve,Me/G.locationSize*me*ve,Ee)}}else if(V!==void 0){let Q=V[te];if(Q!==void 0)switch(Q.length){case 2:n.vertexAttrib2fv(G.location,Q);break;case 3:n.vertexAttrib3fv(G.location,Q);break;case 4:n.vertexAttrib4fv(G.location,Q);break;default:n.vertexAttrib1fv(G.location,Q)}}}}M()}function w(){k();for(let D in i){let z=i[D];for(let q in z){let P=z[q];for(let W in P){let Z=P[W];for(let V in Z)h(Z[V].object),delete Z[V];delete P[W]}}delete i[D]}}function E(D){if(i[D.id]===void 0)return;let z=i[D.id];for(let q in z){let P=z[q];for(let W in P){let Z=P[W];for(let V in Z)h(Z[V].object),delete Z[V];delete P[W]}}delete i[D.id]}function g(D){for(let z in i){let q=i[z];for(let P in q){let W=q[P];if(W[D.id]===void 0)continue;let Z=W[D.id];for(let V in Z)h(Z[V].object),delete Z[V];delete W[D.id]}}}function S(D){for(let z in i){let q=i[z],P=D.isInstancedMesh===!0?D.id:0,W=q[P];if(W!==void 0){for(let Z in W){let V=W[Z];for(let te in V)h(V[te].object),delete V[te];delete W[Z]}delete q[P],Object.keys(q).length===0&&delete i[z]}}}function k(){I(),a=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:k,resetDefaultState:I,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfObject:S,releaseStatesOfProgram:g,initAttributes:y,enableAttribute:m,disableUnusedAttributes:M}}function Rg(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Cg(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let g=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(g){return!(g!==Nn&&i.convert(g)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){let S=g===Ln&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==rn&&g!==In&&!S&&i.convert(g)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ae("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&Ae("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&Ae("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:T,maxSamples:w,samples:E}}function Pg(n){let e=this,t=null,i=0,s=!1,r=!1,a=new An,o=new Ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||i!==0||s;return s=u,i=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,p){let _=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!s||_===null||_.length===0||r&&!m)r?h(null):c();else{let M=r?0:i,A=M*4,T=f.clippingState||null;l.value=T,T=h(_,u,A,p);for(let w=0;w!==A;++w)T[w]=t[w];f.clippingState=T,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,p,_){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=l.value,_!==!0||m===null){let f=p+y*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let A=0,T=p;A!==y;++A,T+=4)a.copy(d[A]).applyMatrix4(M,o),a.normal.toArray(m,T),m[T+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}var Ur=class extends cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new pr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Cs(5,5,5),r=new sn({name:"CubemapFromEquirect",uniforms:Wi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:zt,blending:Bi});r.uniforms.tEquirect.value=t;let a=new Bt(s,r),o=t.minFilter;return t.minFilter===ti&&(t.minFilter=en),new Us(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},Fu=256,Ig=3,Lg=20,rd=256,ad=16,Ng=3,Dg=new N,Ug=new Fe,Yo=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Us(1,10,null),this._boxMesh=new Bt(new Cs(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=Dg}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,p=l.autoClearDepth,_=l.autoClearStencil,y=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(e.background=l.getClearColor(Ug));let m=new Us(i,s,h);return m.position.copy(o),m.update(l,e),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=p,l.autoClearStencil=_,e.background=y,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ku(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Fu,Ru(e))}_fromTexture(e,t){e.mapping===Vi||e.mapping===ks?this._setSize(e.image.length===0?Fu:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=Ou(e,!1,!1),i=Math.log2(e)-Ig;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Ou(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Vi||e.mapping===ks?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bu()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=ku()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Fg(),this._integrationMaterial=Og());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/ad);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-Ng)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(rd*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=kg());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function Ou(n,e,t){return new Ur(n,{minFilter:ti,generateMipmaps:e,type:Ln,colorSpace:rr,depthBuffer:t})}function Fr(n,e,t){return new sn({name:n,uniforms:e,vertexShader:Ge.cube_vert,fragmentShader:t,side:zt,blending:Bi,depthTest:!1,depthWrite:!1})}function Fg(){return Fr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${rd}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Og(){return Fr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:ad}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function kg(){return Fr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Lg}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function ku(){return Fr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Bu(){return Fr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Bg(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,p=!1){return u==null?null:p?a(u):r(u)}function r(u){if(u&&u.isTexture){let p=u.mapping;if(p===ro||p===ao)if(e.has(u)){let _=e.get(u).texture;return o(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let y=new Ur(_.height);return y.fromEquirectangularTexture(n,u),e.set(u,y),u.addEventListener("dispose",c),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let p=u.mapping,_=p===ro||p===ao,y=p===Vi||p===ks;if(_||y){let m=t.get(u),f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new Yo(n)),m=_?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let M=u.image;return _&&M&&M.height>0||y&&M&&l(M)?(i===null&&(i=new Yo(n)),m=_?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,p){return p===ro?u.mapping=Vi:p===ao&&(u.mapping=ks),u}function l(u){let p=0,_=6;for(let y=0;y<_;y++)u[y]!==void 0&&p++;return p===_}function c(u){let p=u.target;p.removeEventListener("dispose",c);let _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function h(u){let p=u.target;p.removeEventListener("dispose",h);let _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function zg(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&ir("WebGLRenderer: "+i+" extension not supported."),s}}}function Vg(n,e,t,i){let s={},r=new WeakMap,a=new FinalizationRegistry(_=>delete s[_]);function o(_){l(_.target)}function l(_){_.index!==null&&e.remove(_.index);for(let m in _.attributes)e.remove(_.attributes[m]);_.removeEventListener("dispose",o),delete s[_.id],a.unregister(_);let y=r.get(_);y&&(e.remove(y),r.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function c(_,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),t.memory.geometries++),y}function h(_){let y=_.attributes;for(let m in y)e.update(y[m],n.ARRAY_BUFFER)}function d(_){let y=_.index,m=_.attributes.position,f=0;if(m===void 0)return;let M=y!==null?y.array.length:m.array.length/3-1,A=m.count>=65535?ur:hr,T=new A(Math.ceil(M/3)*6,1),w=T.array;if(y!==null){let g=y.array;f=y.version;for(let S=0,k=0;S<M;S+=3){let I=g[S+0],D=g[S+1],z=g[S+2];w[k++]=I,w[k++]=D,w[k++]=D,w[k++]=z,w[k++]=z,w[k++]=I}}else{f=m.version;for(let g=0,S=0;g<M;g+=3){let k=g+0,I=g+1,D=g+2;w[S++]=k,w[S++]=I,w[S++]=I,w[S++]=D,w[S++]=D,w[S++]=k}}T.version=f;let E=r.get(_);E&&e.remove(E),r.set(_,T)}function u(_){let y=r.get(_);if(y){let m=_.index;m!==null&&y.version<m.version&&d(_)}else d(_);return r.get(_)}function p(){for(let _ in s){let y=s[_].deref();y!==void 0&&l(y)}}return{get:c,update:h,getWireframeAttribute:u,dispose:p}}function Hg(n,e,t){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){n.drawElements(i,u,r,d*a),t.update(u,i,1)}function c(d,u,p){p!==0&&(n.drawElementsInstanced(i,u,r,d*a,p),t.update(u,i,p))}function h(d,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,p);let y=0;for(let m=0;m<p;m++)y+=u[m];t.update(y,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Gg(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Ce("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Wg(n,e,t){let i=new WeakMap,s=new ut;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==d){let k=function(){g.dispose(),i.delete(o),o.removeEventListener("dispose",k)};u!==void 0&&u.texture.dispose();let p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],A=0;p===!0&&(A=1),_===!0&&(A=2),y===!0&&(A=3);let T=o.attributes.position.count*A,w=1;T>e.maxTextureSize&&(w=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);let E=new Float32Array(T*w*4*d),g=new lr(E,T,w,d);g.type=In,g.needsUpdate=!0;let S=A*4;for(let I=0;I<d;I++){let D=m[I],z=f[I],q=M[I],P=T*w*4*I;for(let W=0;W<D.count;W++){let Z=W*S;p===!0&&(s.fromBufferAttribute(D,W),E[P+Z+0]=s.x,E[P+Z+1]=s.y,E[P+Z+2]=s.z,E[P+Z+3]=0),_===!0&&(s.fromBufferAttribute(z,W),E[P+Z+4]=s.x,E[P+Z+5]=s.y,E[P+Z+6]=s.z,E[P+Z+7]=0),y===!0&&(s.fromBufferAttribute(q,W),E[P+Z+8]=s.x,E[P+Z+9]=s.y,E[P+Z+10]=s.z,E[P+Z+11]=q.itemSize===4?s.w:1)}}u={count:d,texture:g,size:new Be(T,w)},i.set(o,u),o.addEventListener("dispose",k)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let p=0;for(let y=0;y<c.length;y++)p+=c[y];let _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Xg(n,e,t,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var qg={[Kl]:"LINEAR_TONE_MAPPING",[Ql]:"REINHARD_TONE_MAPPING",[ec]:"CINEON_TONE_MAPPING",[tc]:"ACES_FILMIC_TONE_MAPPING",[ic]:"AGX_TONE_MAPPING",[sc]:"NEUTRAL_TONE_MAPPING",[nc]:"CUSTOM_TONE_MAPPING"};function $g(n,e,t,i,s,r){let a=new cn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new kt;h.setAttribute("position",new Et([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Et([0,2,0,0,2,0],2));let d=new Xa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Bt(h,d),p=new ki(-1,1,1,-1,0,1),_=null,y=null,m=!1,f,M=null,A=[],T=!1;this.setSize=function(w,E){a.setSize(w,E),o!==null&&o.setSize(w,E),l!==null&&l.setSize(w,E);for(let g=0;g<A.length;g++){let S=A[g];S.setSize&&S.setSize(w,E)}},this.setEffects=function(w){A=w,T=A.length>0&&A[0].isRenderPass===!0;let E=a.width,g=a.height;A.length>0&&o===null&&(o=new cn(E,g,{type:Ln,depthBuffer:!1,stencilBuffer:!1}),l=new cn(E,g,{type:Ln,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&A.some(k=>k.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&c===null&&(c=new Qn(E,g),r===!0&&(c.format=ni,c.type=Hi)),a.dispose(),a.depthTexture=S?c:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let k=0;k<A.length;k++){let I=A[k];I.setSize&&I.setSize(E,g),S&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(c)}},this.begin=function(w,E){if(m||w.toneMapping===Bn&&A.length===0)return!1;if(M=E,E!==null){let g=E.width,S=E.height;(a.width!==g||a.height!==S)&&this.setSize(g,S)}return T===!1&&w.setRenderTarget(a),f=w.toneMapping,w.toneMapping=Bn,!0},this.hasRenderPass=function(){return T},this.end=function(w,E){w.toneMapping=f,m=!0;let g=a,S=o;for(let k=0;k<A.length;k++){let I=A[k];I.enabled!==!1&&(I.render(w,S,g,E),I.needsSwap!==!1&&(g=S,S=S===o?l:o))}if(_!==w.outputColorSpace||y!==w.toneMapping){_=w.outputColorSpace,y=w.toneMapping,d.defines={},je.getTransfer(_)===Ke&&(d.defines.SRGB_TRANSFER="");let k=qg[y];k&&(d.defines[k]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=g.texture,w.setRenderTarget(M),w.render(u,p),M=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var od=new $t,ld=new Qn(1,1),cd=new gr(1),hd=new lr,ud=new Ba,dd=new pr,zu=[],Vu=[],Hu=new Float32Array(16),Gu=new Float32Array(9),Wu=new Float32Array(4);function Vs(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=zu[s];if(r===void 0&&(r=new Float32Array(s),zu[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function wt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function At(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Jo(n,e){let t=Vu[e];t===void 0&&(t=new Int32Array(e),Vu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function jg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Yg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2fv(this.addr,e),At(t,e)}}function Zg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;n.uniform3fv(this.addr,e),At(t,e)}}function Jg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4fv(this.addr,e),At(t,e)}}function Kg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(wt(t,i))return;Wu.set(i),n.uniformMatrix2fv(this.addr,!1,Wu),At(t,i)}}function Qg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(wt(t,i))return;Gu.set(i),n.uniformMatrix3fv(this.addr,!1,Gu),At(t,i)}}function e0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(wt(t,i))return;Hu.set(i),n.uniformMatrix4fv(this.addr,!1,Hu),At(t,i)}}function t0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function n0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2iv(this.addr,e),At(t,e)}}function i0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;n.uniform3iv(this.addr,e),At(t,e)}}function s0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4iv(this.addr,e),At(t,e)}}function r0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function a0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2uiv(this.addr,e),At(t,e)}}function o0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;n.uniform3uiv(this.addr,e),At(t,e)}}function l0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4uiv(this.addr,e),At(t,e)}}function Ko(n){return n.version===0&&(n.compareFunction=mc,n.needsUpdate=!0),n}function c0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Ko(ld):r=od,t.setTexture2D(e||r,s)}function h0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||ud,s)}function u0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Ko(cd):r=dd,t.setTextureCube(e||r,s)}function d0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||hd,s)}function f0(n){switch(n){case 5126:return jg;case 35664:return Yg;case 35665:return Zg;case 35666:return Jg;case 35674:return Kg;case 35675:return Qg;case 35676:return e0;case 5124:case 35670:return t0;case 35667:case 35671:return n0;case 35668:case 35672:return i0;case 35669:case 35673:return s0;case 5125:return r0;case 36294:return a0;case 36295:return o0;case 36296:return l0;case 35678:case 36198:case 36298:case 36306:case 35682:return c0;case 35679:case 36299:case 36307:return h0;case 35680:case 36300:case 36308:case 36293:return u0;case 36289:case 36303:case 36311:case 36292:return d0}}function p0(n,e){n.uniform1fv(this.addr,e)}function m0(n,e){let t=Vs(e,this.size,2);n.uniform2fv(this.addr,t)}function g0(n,e){let t=Vs(e,this.size,3);n.uniform3fv(this.addr,t)}function _0(n,e){let t=Vs(e,this.size,4);n.uniform4fv(this.addr,t)}function v0(n,e){let t=Vs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function x0(n,e){let t=Vs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function y0(n,e){let t=Vs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function M0(n,e){n.uniform1iv(this.addr,e)}function S0(n,e){n.uniform2iv(this.addr,e)}function b0(n,e){n.uniform3iv(this.addr,e)}function T0(n,e){n.uniform4iv(this.addr,e)}function E0(n,e){n.uniform1uiv(this.addr,e)}function w0(n,e){n.uniform2uiv(this.addr,e)}function A0(n,e){n.uniform3uiv(this.addr,e)}function R0(n,e){n.uniform4uiv(this.addr,e)}function C0(n,e,t){let i=this.cache,s=e.length,r=Jo(t,s);wt(i,r)||(n.uniform1iv(this.addr,r),At(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Ko(ld):a=od;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function P0(n,e,t){let i=this.cache,s=e.length,r=Jo(t,s);wt(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||ud,r[a])}function I0(n,e,t){let i=this.cache,s=e.length,r=Jo(t,s);wt(i,r)||(n.uniform1iv(this.addr,r),At(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=Ko(cd):a=dd;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function L0(n,e,t){let i=this.cache,s=e.length,r=Jo(t,s);wt(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||hd,r[a])}function N0(n){switch(n){case 5126:return p0;case 35664:return m0;case 35665:return g0;case 35666:return _0;case 35674:return v0;case 35675:return x0;case 35676:return y0;case 5124:case 35670:return M0;case 35667:case 35671:return S0;case 35668:case 35672:return b0;case 35669:case 35673:return T0;case 5125:return E0;case 36294:return w0;case 36295:return A0;case 36296:return R0;case 35678:case 36198:case 36298:case 36306:case 35682:return C0;case 35679:case 36299:case 36307:return P0;case 35680:case 36300:case 36308:case 36293:return I0;case 36289:case 36303:case 36311:case 36292:return L0}}var Tc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=f0(t.type)}},Ec=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=N0(t.type)}},wc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},Sc=/(\w+)(\])?(\[|\.)?/g;function Xu(n,e){n.seq.push(e),n.map[e.id]=e}function D0(n,e,t){let i=n.name,s=i.length;for(Sc.lastIndex=0;;){let r=Sc.exec(i),a=Sc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Xu(t,c===void 0?new Tc(o,n,e):new Ec(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new wc(o),Xu(t,d)),t=d}}}var zs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);D0(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function qu(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var U0=37297,F0=0;function O0(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var $u=new Ie;function k0(n){je._getMatrix($u,je.workingColorSpace,n);let e=`mat3( ${$u.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(n)){case ar:return[e,"LinearTransferOETF"];case Ke:return[e,"sRGBTransferOETF"];default:return Ae("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function ju(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+O0(n.getShaderSource(e),o)}else return r}function B0(n,e){let t=k0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var z0={[Kl]:"Linear",[Ql]:"Reinhard",[ec]:"Cineon",[tc]:"ACESFilmic",[ic]:"AgX",[sc]:"Neutral",[nc]:"Custom"};function V0(n,e){let t=z0[e];return t===void 0?(Ae("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var jo=new N;function H0(){je.getLuminanceCoefficients(jo);let n=jo.x.toFixed(4),e=jo.y.toFixed(4),t=jo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function G0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Dr).join(`
`)}function W0(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function X0(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Dr(n){return n!==""}function Yu(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Zu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var q0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ac(n){return n.replace(q0,$0)}function $0(n,e){let t=Ge[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Ac(t)}var j0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ju(n){return n.replace(j0,Y0)}function Y0(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ku(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Z0={[Er]:"SHADOWMAP_TYPE_PCF",[Fs]:"SHADOWMAP_TYPE_VSM"};function J0(n){return Z0[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var K0={[ks]:"ENVMAP_MODE_REFRACTION"};function Q0(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":K0[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var e_={[so]:"ENVMAP_BLENDING_MULTIPLY",[fu]:"ENVMAP_BLENDING_MIX",[pu]:"ENVMAP_BLENDING_ADD"};function t_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":e_[n.combine]||"ENVMAP_BLENDING_NONE"}function n_(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=J0(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Q0(t),d=t_(t),u=G0(t),p=W0(r),_=s.createProgram(),y,m,f=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Dr).join(`
`),y.length>0&&(y+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Dr).join(`
`),m.length>0&&(m+=`
`)):(y=[Ku(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dr).join(`
`),m=[Ku(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bn?"#define TONE_MAPPING":"",t.toneMapping!==Bn?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Bn?V0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,B0("linearToOutputTexel",t.outputColorSpace),H0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Dr).join(`
`)),a=Ac(a),a=Yu(a,t),a=Zu(a,t),o=Ac(o),o=Yu(o,t),o=Zu(o,t),a=Ju(a),o=Ju(o),t.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,y=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",t.glslVersion===_c?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_c?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=f+y+a,A=f+m+o,T=qu(s,s.VERTEX_SHADER,M),w=qu(s,s.FRAGMENT_SHADER,A);s.attachShader(_,T),s.attachShader(_,w),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function E(I){if(n.debug.checkShaderErrors){let D=s.getProgramInfoLog(_)||"",z=s.getShaderInfoLog(T)||"",q=s.getShaderInfoLog(w)||"",P=D.trim(),W=z.trim(),Z=q.trim(),V=!0,te=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,T,w);else{let G=ju(s,T,"vertex"),K=ju(s,w,"fragment");Ce("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+P+`
`+G+`
`+K)}else P!==""?Ae("WebGLProgram: Program Info Log:",P):(W===""||Z==="")&&(te=!1);te&&(I.diagnostics={runnable:V,programLog:P,vertexShader:{log:W,prefix:y},fragmentShader:{log:Z,prefix:m}})}s.deleteShader(T),s.deleteShader(w),g=new zs(s,_),S=X0(s,_)}let g;this.getUniforms=function(){return g===void 0&&E(this),g};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=s.getProgramParameter(_,U0)),k},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=F0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=w,this}var i_=0,Rc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Cc(e),t.set(e,i)),i}},Cc=class{constructor(e){this.id=i_++,this.code=e,this.usedTimes=0}};function s_(n){return n===Si||n===Ir||n===Lr}function r_(n,e,t,i,s,r){let a=new cr,o=new Rc,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(g){return l.add(g),g===0?"uv":`uv${g}`}function _(g,S,k,I,D,z){let q=I.fog,P=D.geometry,W=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?I.environment:null,Z=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,V=e.get(g.envMap||W,Z),te=u[g.type],G=i.precision;g.precision!==null&&(G=i.getMaxPrecision(g.precision),G!==g.precision&&Ae("WebGLProgram.getParameters:",g.precision,"not supported, using",G,"instead."));let K=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,Q=K!==void 0?K.length:0,Me=0;P.morphAttributes.position!==void 0&&(Me=1),P.morphAttributes.normal!==void 0&&(Me=2),P.morphAttributes.color!==void 0&&(Me=3);let De,j,pe,ve;if(te){let de=Vn[te];De=de.vertexShader,j=de.fragmentShader}else{De=g.vertexShader,j=g.fragmentShader;let de=o.getVertexShaderStage(g),tt=o.getFragmentShaderStage(g);o.update(g,de,tt),pe=de.id,ve=tt.id}let Ee=n.getRenderTarget(),me=n.state.buffers.depth.getReversed(),ke=D.isInstancedMesh===!0,vt=D.isBatchedMesh===!0,Re=!!g.map,et=!!g.matcap,it=!!V,Xe=it&&V.isPMREMTexture===!0,Ut=!!g.aoMap,bt=!!g.lightMap,tn=!!g.bumpMap&&g.wireframe===!1,dt=!!g.normalMap,Dn=!!g.displacementMap,Rt=!!g.emissiveMap,pn=!!g.metalnessMap,mn=!!g.roughnessMap,gn=g.anisotropy>0,L=g.clearcoat>0,_n=g.diffuseRoughness>0,ct=g.dispersion>0,ht=g.retroreflectivity>0,ue=g.iridescence>0,Tt=g.sheen>0,we=g.transmission>0,Ne=gn&&!!g.anisotropyMap,b=L&&!!g.clearcoatMap,v=L&&!!g.clearcoatNormalMap,F=L&&!!g.clearcoatRoughnessMap,ee=_n&&!!g.diffuseRoughnessMap,J=ue&&!!g.iridescenceMap,se=ue&&!!g.iridescenceThicknessMap,ce=Tt&&!!g.sheenColorMap,X=Tt&&!!g.sheenRoughnessMap,$=!!g.specularMap,ae=!!g.specularColorMap,R=!!g.specularIntensityMap,Y=we&&!!g.transmissionMap,H=we&&!!g.thicknessMap,oe=!!g.gradientMap,ie=!!g.alphaMap,re=g.alphaTest>0,be=!!g.alphaHash,He=!!g.extensions,ne=Bn;g.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(ne=n.toneMapping);let Te=Xe?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,Ve={shaderID:te,shaderType:g.type,shaderName:g.name,vertexShader:De,fragmentShader:j,defines:g.defines,customVertexShaderID:pe,customFragmentShaderID:ve,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:G,batching:vt,batchingColor:vt&&D._colorsTexture!==null,instancing:ke,instancingColor:ke&&D.instanceColor!==null,instancingMorph:ke&&D.morphTexture!==null,outputColorSpace:Ee===null?n.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:je.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Re,matcap:et,envMap:it,envMapMode:it&&V.mapping,envMapPMREM:Xe,envMapMaxLod:Xe?Te.length-1:null,envMapSize:Xe?Te[0].width:null,aoMap:Ut,lightMap:bt,bumpMap:tn,normalMap:dt,displacementMap:Dn,emissiveMap:Rt,normalMapObjectSpace:dt&&g.normalMapType===_u,normalMapTangentSpace:dt&&g.normalMapType===Xo,packedNormalMap:dt&&g.normalMapType===Xo&&s_(g.normalMap.format),metalnessMap:pn,roughnessMap:mn,anisotropy:gn,anisotropyMap:Ne,clearcoat:L,clearcoatMap:b,clearcoatNormalMap:v,clearcoatRoughnessMap:F,diffuseRoughness:_n,diffuseRoughnessMap:ee,dispersion:ct,retroreflection:ht,iridescence:ue,iridescenceMap:J,iridescenceThicknessMap:se,sheen:Tt,sheenColorMap:ce,sheenRoughnessMap:X,specularMap:$,specularColorMap:ae,specularIntensityMap:R,transmission:we,transmissionMap:Y,thicknessMap:H,gradientMap:oe,opaque:g.transparent===!1&&g.blending===Os&&g.alphaToCoverage===!1,alphaMap:ie,alphaTest:re,alphaHash:be,combine:g.combine,mapUv:Re&&p(g.map.channel),aoMapUv:Ut&&p(g.aoMap.channel),lightMapUv:bt&&p(g.lightMap.channel),bumpMapUv:tn&&p(g.bumpMap.channel),normalMapUv:dt&&p(g.normalMap.channel),displacementMapUv:Dn&&p(g.displacementMap.channel),emissiveMapUv:Rt&&p(g.emissiveMap.channel),metalnessMapUv:pn&&p(g.metalnessMap.channel),roughnessMapUv:mn&&p(g.roughnessMap.channel),anisotropyMapUv:Ne&&p(g.anisotropyMap.channel),clearcoatMapUv:b&&p(g.clearcoatMap.channel),clearcoatNormalMapUv:v&&p(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:F&&p(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ee&&p(g.diffuseRoughnessMap.channel),iridescenceMapUv:J&&p(g.iridescenceMap.channel),iridescenceThicknessMapUv:se&&p(g.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&p(g.sheenColorMap.channel),sheenRoughnessMapUv:X&&p(g.sheenRoughnessMap.channel),specularMapUv:$&&p(g.specularMap.channel),specularColorMapUv:ae&&p(g.specularColorMap.channel),specularIntensityMapUv:R&&p(g.specularIntensityMap.channel),transmissionMapUv:Y&&p(g.transmissionMap.channel),thicknessMapUv:H&&p(g.thicknessMap.channel),alphaMapUv:ie&&p(g.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(dt||gn),vertexNormals:!!P.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!P.attributes.uv&&(Re||ie),fog:!!q,useFog:g.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||P.attributes.normal===void 0&&dt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:me,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:Me,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:z.filter(de=>de.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:ne,decodeVideoTexture:Re&&g.map.isVideoTexture===!0&&je.getTransfer(g.map.colorSpace)===Ke,decodeVideoTextureEmissive:Rt&&g.emissiveMap.isVideoTexture===!0&&je.getTransfer(g.emissiveMap.colorSpace)===Ke,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===un,flipSided:g.side===zt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:He&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&g.extensions.multiDraw===!0||vt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Ve.vertexUv1s=l.has(1),Ve.vertexUv2s=l.has(2),Ve.vertexUv3s=l.has(3),l.clear(),Ve}function y(g){let S=[];if(g.shaderID?S.push(g.shaderID):(S.push(g.customVertexShaderID),S.push(g.customFragmentShaderID)),g.defines!==void 0)for(let k in g.defines)S.push(k),S.push(g.defines[k]);return g.isRawShaderMaterial===!1&&(m(S,g),f(S,g),S.push(n.outputColorSpace)),S.push(g.customProgramCacheKey),S.join()}function m(g,S){g.push(S.precision),g.push(S.outputColorSpace),g.push(S.envMapMode),g.push(S.envMapPMREM),g.push(S.envMapMaxLod),g.push(S.envMapSize),g.push(S.mapUv),g.push(S.alphaMapUv),g.push(S.lightMapUv),g.push(S.aoMapUv),g.push(S.bumpMapUv),g.push(S.normalMapUv),g.push(S.displacementMapUv),g.push(S.emissiveMapUv),g.push(S.metalnessMapUv),g.push(S.roughnessMapUv),g.push(S.anisotropyMapUv),g.push(S.clearcoatMapUv),g.push(S.clearcoatNormalMapUv),g.push(S.clearcoatRoughnessMapUv),g.push(S.diffuseRoughnessMapUv),g.push(S.iridescenceMapUv),g.push(S.iridescenceThicknessMapUv),g.push(S.sheenColorMapUv),g.push(S.sheenRoughnessMapUv),g.push(S.specularMapUv),g.push(S.specularColorMapUv),g.push(S.specularIntensityMapUv),g.push(S.transmissionMapUv),g.push(S.thicknessMapUv),g.push(S.combine),g.push(S.fogExp2),g.push(S.sizeAttenuation),g.push(S.morphTargetsCount),g.push(S.numSunLights),g.push(S.numDirLights),g.push(S.numPointLights),g.push(S.numSpotLights),g.push(S.numSpotLightMaps),g.push(S.numHemiLights),g.push(S.numRectAreaLights),g.push(S.numSunLightShadows),g.push(S.numDirLightShadows),g.push(S.numPointLightShadows),g.push(S.numSpotLightShadows),g.push(S.numSpotLightShadowsWithMaps),g.push(S.numLightProbes),g.push(S.numLightProbeGrids),g.push(S.shadowMapType),g.push(S.toneMapping),g.push(S.numClippingPlanes),g.push(S.numClipIntersection),g.push(S.depthPacking)}function f(g,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function M(g){let S=u[g.type],k;if(S){let I=Vn[S];k=Nu.clone(I.uniforms)}else k=g.uniforms;return k}function A(g,S){let k=h.get(S);return k!==void 0?++k.usedTimes:(k=new n_(n,S,g,s),c.push(k),h.set(S,k)),k}function T(g){if(--g.usedTimes===0){let S=c.indexOf(g);c[S]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function w(g){o.remove(g)}function E(){o.dispose()}return{getParameters:_,getProgramCacheKey:y,getUniforms:M,acquireProgram:A,releaseProgram:T,releaseShaderCache:w,programs:c,dispose:E}}function a_(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function o_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Qu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ed(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,_,y,m,f){let M=n[e];return M===void 0?(M={id:u.id,object:u,geometry:p,material:_,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:m,group:f},n[e]=M):(M.id=u.id,M.object=u,M.geometry=p,M.material=_,M.materialVariant=a(u),M.groupOrder=y,M.renderOrder=u.renderOrder,M.z=m,M.group=f),e++,M}function l(u,p,_,y,m,f,M){M.reversedDepth===!0&&(m=-m);let A=o(u,p,_,y,m,f);_.transmission>0?i.push(A):_.transparent===!0?s.push(A):t.push(A)}function c(u,p,_,y,m,f){let M=o(u,p,_,y,m,f);_.transmission>0?i.unshift(M):_.transparent===!0?s.unshift(M):t.unshift(M)}function h(u,p){t.length>1&&t.sort(u||o_),i.length>1&&i.sort(p||Qu),s.length>1&&s.sort(p||Qu)}function d(){for(let u=e,p=n.length;u<p;u++){let _=n[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function l_(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new ed,n.set(i,[a])):s>=r.length?(a=new ed,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function c_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new N,color:new Fe};break;case"SpotLight":t={position:new N,direction:new N,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function h_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var u_=0;function d_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function f_(n){let e=new c_,t=h_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);let s=new N,r=new Qe,a=new Qe;function o(c){let h=0,d=0,u=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let p=0,_=0,y=0,m=0,f=0,M=0,A=0,T=0,w=0,E=0,g=0,S=0,k=0,I=0;c.sort(d_);for(let z=0,q=c.length;z<q;z++){let P=c[z],W=P.color,Z=P.intensity,V=P.distance,te=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Si?te=P.shadow.map.texture:te=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=W.r*Z,d+=W.g*Z,u+=W.b*Z;else if(P.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(P.sh.coefficients[G],Z);I++}else if(P.isSunLight){let G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let K=P.shadow,Q=t.get(P);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),i.sunShadow[_]=Q,i.sunShadowMap[_]=te;let Me=K.getViewportCount();for(let De=0;De<Me;De++)i.sunShadowMatrix[y+De]=K.getMatrix(De),i.sunShadowCascade[y+De]=K._cascadeData[De];y+=Me,_++}i.sun[p]=G,p++}else if(P.isDirectionalLight){let G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let K=P.shadow,Q=t.get(P);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,i.directionalShadow[m]=Q,i.directionalShadowMap[m]=te,i.directionalShadowMatrix[m]=P.shadow.matrix,w++}i.directional[m]=G,m++}else if(P.isSpotLight){let G=e.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(W).multiplyScalar(Z),G.distance=V,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,i.spot[M]=G;let K=P.shadow;if(P.map&&(i.spotLightMap[S]=P.map,S++,K.updateMatrices(P),P.castShadow&&k++),i.spotLightMatrix[M]=K.matrix,P.castShadow){let Q=t.get(P);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,i.spotShadow[M]=Q,i.spotShadowMap[M]=te,g++}M++}else if(P.isRectAreaLight){let G=e.get(P);G.color.copy(W).multiplyScalar(Z),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),i.rectArea[A]=G,A++}else if(P.isPointLight){let G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){let K=P.shadow,Q=t.get(P);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,Q.shadowCameraNear=K.camera.near,Q.shadowCameraFar=K.camera.far,i.pointShadow[f]=Q,i.pointShadowMap[f]=te,i.pointShadowMatrix[f]=P.shadow.matrix,E++}i.point[f]=G,f++}else if(P.isHemisphereLight){let G=e.get(P);G.skyColor.copy(P.color).multiplyScalar(Z),G.groundColor.copy(P.groundColor).multiplyScalar(Z),i.hemi[T]=G,T++}}A>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let D=i.hash;(D.sunLength!==p||D.directionalLength!==m||D.pointLength!==f||D.spotLength!==M||D.rectAreaLength!==A||D.hemiLength!==T||D.numSunShadows!==_||D.numDirectionalShadows!==w||D.numPointShadows!==E||D.numSpotShadows!==g||D.numSpotMaps!==S||D.numLightProbes!==I)&&(i.sun.length=p,i.directional.length=m,i.spot.length=M,i.rectArea.length=A,i.point.length=f,i.hemi.length=T,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=g,i.spotShadowMap.length=g,i.spotLightMatrix.length=g+S-k,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=k,i.numLightProbes=I,D.sunLength=p,D.directionalLength=m,D.pointLength=f,D.spotLength=M,D.rectAreaLength=A,D.hemiLength=T,D.numSunShadows=_,D.numDirectionalShadows=w,D.numPointShadows=E,D.numSpotShadows=g,D.numSpotMaps=S,D.numLightProbes=I,i.version=u_++)}function l(c,h){let d=0,u=0,p=0,_=0,y=0,m=0,f=h.matrixWorldInverse;for(let M=0,A=c.length;M<A;M++){let T=c[M];if(T.isSunLight){let w=i.sun[d];w.direction.setFromMatrixPosition(T.matrixWorld),w.direction.transformDirection(f),d++}else if(T.isDirectionalLight){let w=i.directional[u];w.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),u++}else if(T.isSpotLight){let w=i.spot[_];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(f),w.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),_++}else if(T.isRectAreaLight){let w=i.rectArea[y];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(f),a.identity(),r.copy(T.matrixWorld),r.premultiply(f),a.extractRotation(r),w.halfWidth.set(T.width*.5,0,0),w.halfHeight.set(0,T.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),y++}else if(T.isPointLight){let w=i.point[p];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(f),p++}else if(T.isHemisphereLight){let w=i.hemi[m];w.direction.setFromMatrixPosition(T.matrixWorld),w.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:i}}function td(n){let e=new f_(n),t=[],i=[],s=[];function r(d){h.camera=d,t.length=0,i.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):t.push(d)}function o(d){i.push(d)}function l(){e.setup(t),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function p_(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new td(n),e.set(s,[o])):r>=a.length?(o=new td(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var m_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,g_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,__=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],v_=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],nd=new Qe,Nr=new N,bc=new N;function x_(n,e,t){let i=new _i,s=new Be,r=new Be,a=new ut,o=new qa,l=new $a,c={},h=t.maxTextureSize,d={[Mi]:zt,[zt]:Mi,[un]:un},u=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:m_,fragmentShader:g_}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let _=new kt;_.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Bt(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Er;let f=this.type;this.render=function(E,g,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===jh&&(Ae("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Er);let k=n.getRenderTarget(),I=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Bi),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let q=f!==this.type;q&&g.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(W=>W.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,W=E.length;P<W;P++){let Z=E[P],V=Z.shadow;if(V===void 0){Ae("WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let te=V.getFrameExtents();s.multiply(te),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/te.x),s.x=r.x*te.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/te.y),s.y=r.y*te.y,V.mapSize.y=r.y));let G=n.state.buffers.depth.getReversed();if(V.camera._reversedDepth=G,V.map===null||q===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Fs){if(Z.isPointLight){Ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new cn(s.x,s.y,{format:Si,type:Ln,minFilter:en,magFilter:en,generateMipmaps:!1}),V.map.texture.name=Z.name+".shadowMap",V.map.depthTexture=new Qn(s.x,s.y,In),V.map.depthTexture.name=Z.name+".shadowMapDepth",V.map.depthTexture.format=Kn,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Lt,V.map.depthTexture.magFilter=Lt}else Z.isPointLight?(V.map=new Ur(s.x),V.map.depthTexture=new gr(s.x,Pn)):(V.map=new cn(s.x,s.y),V.map.depthTexture=new Qn(s.x,s.y,Pn)),V.map.depthTexture.name=Z.name+".shadowMap",V.map.depthTexture.format=Kn,this.type===Er?(V.map.depthTexture.compareFunction=G?pc:fc,V.map.depthTexture.minFilter=en,V.map.depthTexture.magFilter=en):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Lt,V.map.depthTexture.magFilter=Lt);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let K=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();Z.isPointLight!==!0&&V.updateMatrices(Z,S);let Q=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:S.layers;for(let Me=0;Me<K;Me++){let De=V.getCamera(Me);if(Z.isPointLight){let j=V.camera,pe=V.matrix,ve=Z.distance||j.far;ve!==j.far&&(j.far=ve,j.updateProjectionMatrix()),Nr.setFromMatrixPosition(Z.matrixWorld),j.position.copy(Nr),bc.copy(j.position),bc.add(__[Me]),j.up.copy(v_[Me]),j.lookAt(bc),j.updateMatrixWorld(),pe.makeTranslation(-Nr.x,-Nr.y,-Nr.z),nd.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),V._frustum.setFromProjectionMatrix(nd,j.coordinateSystem,j.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)n.setRenderTarget(V.map,Me),n.clear();else{Me===0&&(n.setRenderTarget(V.map),n.clear());let j=V.getViewport(Me);a.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),z.viewport(a)}i=V.getFrustum(Me),T(g,S,De,Z,Q,this.type)}V.isPointLightShadow!==!0&&this.type===Fs&&M(V,S),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(k,I,D)};function M(E,g){let S=e.update(y);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null?E.mapPass=new cn(s.x,s.y,{format:Si,type:Ln}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(g,null,S,u,y,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value.set(E.map.width,E.map.height),p.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(g,null,S,p,y,null)}function A(E,g,S,k){let I=null,D=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)I=D;else if(I=S.isPointLight===!0?l:o,n.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let z=I.uuid,q=g.uuid,P=c[z];P===void 0&&(P={},c[z]=P);let W=P[q];W===void 0&&(W=I.clone(),P[q]=W,g.addEventListener("dispose",w)),I=W}if(I.visible=g.visible,I.wireframe=g.wireframe,k===Fs?I.side=g.shadowSide!==null?g.shadowSide:g.side:I.side=g.shadowSide!==null?g.shadowSide:d[g.side],I.alphaMap=g.alphaMap,I.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,I.map=g.map,I.clipShadows=g.clipShadows,I.clippingPlanes=g.clippingPlanes,I.clipIntersection=g.clipIntersection,I.displacementMap=g.displacementMap,I.displacementScale=g.displacementScale,I.displacementBias=g.displacementBias,I.wireframeLinewidth=g.wireframeLinewidth,I.linewidth=g.linewidth,S.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let z=n.properties.get(I);z.light=S}return I}function T(E,g,S,k,I,D){if(E.visible===!1)return;if(E.layers.test(I)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&D===Fs)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);let P=e.update(E),W=E.material;if(Array.isArray(W)){let Z=P.groups;for(let V=0,te=Z.length;V<te;V++){let G=Z[V],K=W[G.materialIndex];if(K&&K.visible){let Q=A(E,K,k,D);E.onBeforeShadow(n,E,g,S,P,Q,G),n.renderBufferDirect(S,null,P,Q,E,G),E.onAfterShadow(n,E,g,S,P,Q,G)}}}else if(W.visible){let Z=A(E,W,k,D);E.onBeforeShadow(n,E,g,S,P,Z,null),n.renderBufferDirect(S,null,P,Z,E,null),E.onAfterShadow(n,E,g,S,P,Z,null)}}let q=E.children;for(let P=0,W=q.length;P<W;P++)T(q[P],g,S,k,I,D)}function w(E){E.target.removeEventListener("dispose",w);for(let S in c){let k=c[S],I=E.target.uuid;I in k&&(k[I].dispose(),delete k[I])}}}function y_(n,e){function t(){let R=!1,Y=new ut,H=null,oe=new ut(0,0,0,0);return{setMask:function(ie){H!==ie&&!R&&(n.colorMask(ie,ie,ie,ie),H=ie)},setLocked:function(ie){R=ie},setClear:function(ie,re,be,He,ne){ne===!0&&(ie*=He,re*=He,be*=He),Y.set(ie,re,be,He),oe.equals(Y)===!1&&(n.clearColor(ie,re,be,He),oe.copy(Y))},reset:function(){R=!1,H=null,oe.set(-1,0,0,0)}}}function i(){let R=!1,Y=!1,H=null,oe=null,ie=null;return{setReversed:function(re){if(Y!==re){let be=e.get("EXT_clip_control");re?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),Y=re;let He=ie;ie=null,this.setClear(He)}},getReversed:function(){return Y},setTest:function(re){re?me(n.DEPTH_TEST):ke(n.DEPTH_TEST)},setMask:function(re){H!==re&&!R&&(n.depthMask(re),H=re)},setFunc:function(re){if(Y&&(re=Au[re]),oe!==re){switch(re){case wa:n.depthFunc(n.NEVER);break;case Aa:n.depthFunc(n.ALWAYS);break;case Ra:n.depthFunc(n.LESS);break;case vs:n.depthFunc(n.LEQUAL);break;case Ca:n.depthFunc(n.EQUAL);break;case Pa:n.depthFunc(n.GEQUAL);break;case Ia:n.depthFunc(n.GREATER);break;case La:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}oe=re}},setLocked:function(re){R=re},setClear:function(re){ie!==re&&(ie=re,Y&&(re=1-re),n.clearDepth(re))},reset:function(){R=!1,H=null,oe=null,ie=null,Y=!1}}}function s(){let R=!1,Y=null,H=null,oe=null,ie=null,re=null,be=null,He=null,ne=null;return{setTest:function(Te){R||(Te?me(n.STENCIL_TEST):ke(n.STENCIL_TEST))},setMask:function(Te){Y!==Te&&!R&&(n.stencilMask(Te),Y=Te)},setFunc:function(Te,Ve,de){(H!==Te||oe!==Ve||ie!==de)&&(n.stencilFunc(Te,Ve,de),H=Te,oe=Ve,ie=de)},setOp:function(Te,Ve,de){(re!==Te||be!==Ve||He!==de)&&(n.stencilOp(Te,Ve,de),re=Te,be=Ve,He=de)},setLocked:function(Te){R=Te},setClear:function(Te){ne!==Te&&(n.clearStencil(Te),ne=Te)},reset:function(){R=!1,Y=null,H=null,oe=null,ie=null,re=null,be=null,He=null,ne=null}}}let r=new t,a=new i,o=new s,l={},c=new WeakMap,h={},d={},u={},p=new WeakMap,_=[],y=null,m=!1,f=null,M=null,A=null,T=null,w=null,E=null,g=null,S=new Fe(0,0,0),k=0,I=!1,D=null,z=null,q=null,P=null,W=null,Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,te=0,G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(G)[1]),V=te>=1):G.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),V=te>=2);let K=null,Q={},Me=n.getParameter(n.SCISSOR_BOX),De=n.getParameter(n.VIEWPORT),j=new ut().fromArray(Me),pe=new ut().fromArray(De);function ve(R,Y,H,oe){let ie=new Uint8Array(4),re=n.createTexture();n.bindTexture(R,re),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let be=0;be<H;be++)R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY?n.texImage3D(Y,0,n.RGBA,1,1,oe,0,n.RGBA,n.UNSIGNED_BYTE,ie):n.texImage2D(Y+be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ie);return re}let Ee={};Ee[n.TEXTURE_2D]=ve(n.TEXTURE_2D,n.TEXTURE_2D,1),Ee[n.TEXTURE_CUBE_MAP]=ve(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[n.TEXTURE_2D_ARRAY]=ve(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ee[n.TEXTURE_3D]=ve(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),me(n.DEPTH_TEST),a.setFunc(vs),tn(!1),dt($l),me(n.CULL_FACE),Ut(Bi);function me(R){h[R]!==!0&&(n.enable(R),h[R]=!0)}function ke(R){h[R]!==!1&&(n.disable(R),h[R]=!1)}function vt(R,Y){return u[R]!==Y?(n.bindFramebuffer(R,Y),u[R]=Y,R===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Y),R===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Y),!0):!1}function Re(R,Y){let H=_,oe=!1;if(R){H=p.get(Y),H===void 0&&(H=[],p.set(Y,H));let ie=R.textures;if(H.length!==ie.length||H[0]!==n.COLOR_ATTACHMENT0){for(let re=0,be=ie.length;re<be;re++)H[re]=n.COLOR_ATTACHMENT0+re;H.length=ie.length,oe=!0}}else H[0]!==n.BACK&&(H[0]=n.BACK,oe=!0);oe&&n.drawBuffers(H)}function et(R){return y!==R?(n.useProgram(R),y=R,!0):!1}let it={[zi]:n.FUNC_ADD,[Zh]:n.FUNC_SUBTRACT,[Jh]:n.FUNC_REVERSE_SUBTRACT};it[Kh]=n.MIN,it[Qh]=n.MAX;let Xe={[eu]:n.ZERO,[tu]:n.ONE,[nu]:n.SRC_COLOR,[Zl]:n.SRC_ALPHA,[lu]:n.SRC_ALPHA_SATURATE,[au]:n.DST_COLOR,[su]:n.DST_ALPHA,[iu]:n.ONE_MINUS_SRC_COLOR,[Jl]:n.ONE_MINUS_SRC_ALPHA,[ou]:n.ONE_MINUS_DST_COLOR,[ru]:n.ONE_MINUS_DST_ALPHA,[cu]:n.CONSTANT_COLOR,[hu]:n.ONE_MINUS_CONSTANT_COLOR,[uu]:n.CONSTANT_ALPHA,[du]:n.ONE_MINUS_CONSTANT_ALPHA};function Ut(R,Y,H,oe,ie,re,be,He,ne,Te){if(R===Bi){m===!0&&(ke(n.BLEND),m=!1);return}if(m===!1&&(me(n.BLEND),m=!0),R!==Yh){if(R!==f||Te!==I){if((M!==zi||w!==zi)&&(n.blendEquation(n.FUNC_ADD),M=zi,w=zi),Te)switch(R){case Os:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ei:n.blendFunc(n.ONE,n.ONE);break;case jl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Yl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ce("WebGLState: Invalid blending: ",R);break}else switch(R){case Os:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ei:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case jl:Ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yl:Ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ce("WebGLState: Invalid blending: ",R);break}A=null,T=null,E=null,g=null,S.set(0,0,0),k=0,f=R,I=Te}return}ie=ie||Y,re=re||H,be=be||oe,(Y!==M||ie!==w)&&(n.blendEquationSeparate(it[Y],it[ie]),M=Y,w=ie),(H!==A||oe!==T||re!==E||be!==g)&&(n.blendFuncSeparate(Xe[H],Xe[oe],Xe[re],Xe[be]),A=H,T=oe,E=re,g=be),(He.equals(S)===!1||ne!==k)&&(n.blendColor(He.r,He.g,He.b,ne),S.copy(He),k=ne),f=R,I=!1}function bt(R,Y){R.side===un?ke(n.CULL_FACE):me(n.CULL_FACE);let H=R.side===zt;Y&&(H=!H),tn(H),R.blending===Os&&R.transparent===!1?Ut(Bi):Ut(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);let oe=R.stencilWrite;o.setTest(oe),oe&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Rt(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?me(n.SAMPLE_ALPHA_TO_COVERAGE):ke(n.SAMPLE_ALPHA_TO_COVERAGE)}function tn(R){D!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),D=R)}function dt(R){R!==qh?(me(n.CULL_FACE),R!==z&&(R===$l?n.cullFace(n.BACK):R===$h?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ke(n.CULL_FACE),z=R}function Dn(R){R!==q&&(V&&n.lineWidth(R),q=R)}function Rt(R,Y,H){R?(me(n.POLYGON_OFFSET_FILL),(P!==Y||W!==H)&&(P=Y,W=H,a.getReversed()&&(Y=-Y,H=-H),n.polygonOffset(Y,H))):ke(n.POLYGON_OFFSET_FILL)}function pn(R){R?me(n.SCISSOR_TEST):ke(n.SCISSOR_TEST)}function mn(R){R===void 0&&(R=n.TEXTURE0+Z-1),K!==R&&(n.activeTexture(R),K=R)}function gn(R,Y,H){H===void 0&&(K===null?H=n.TEXTURE0+Z-1:H=K);let oe=Q[H];oe===void 0&&(oe={type:void 0,texture:void 0},Q[H]=oe),(oe.type!==R||oe.texture!==Y)&&(K!==H&&(n.activeTexture(H),K=H),n.bindTexture(R,Y||Ee[R]),oe.type=R,oe.texture=Y)}function L(){let R=Q[K];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function _n(){try{n.compressedTexImage2D(...arguments)}catch(R){Ce("WebGLState:",R)}}function ct(){try{n.compressedTexImage3D(...arguments)}catch(R){Ce("WebGLState:",R)}}function ht(){try{n.texSubImage2D(...arguments)}catch(R){Ce("WebGLState:",R)}}function ue(){try{n.texSubImage3D(...arguments)}catch(R){Ce("WebGLState:",R)}}function Tt(){try{n.compressedTexSubImage2D(...arguments)}catch(R){Ce("WebGLState:",R)}}function we(){try{n.compressedTexSubImage3D(...arguments)}catch(R){Ce("WebGLState:",R)}}function Ne(){try{n.texStorage2D(...arguments)}catch(R){Ce("WebGLState:",R)}}function b(){try{n.texStorage3D(...arguments)}catch(R){Ce("WebGLState:",R)}}function v(){try{n.texImage2D(...arguments)}catch(R){Ce("WebGLState:",R)}}function F(){try{n.texImage3D(...arguments)}catch(R){Ce("WebGLState:",R)}}function ee(R){return d[R]!==void 0?d[R]:n.getParameter(R)}function J(R,Y){d[R]!==Y&&(n.pixelStorei(R,Y),d[R]=Y)}function se(R){j.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),j.copy(R))}function ce(R){pe.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),pe.copy(R))}function X(R,Y){let H=c.get(Y);H===void 0&&(H=new WeakMap,c.set(Y,H));let oe=H.get(R);oe===void 0&&(oe=n.getUniformBlockIndex(Y,R.name),n.uniformBlockBinding(Y,oe,oe),H.set(R,oe))}function $(R,Y,H){let ie=c.get(Y).get(R);l[ie]!==H&&(n.bindBufferBase(n.UNIFORM_BUFFER,ie,H),l[ie]=H)}function ae(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},K=null,Q={},u={},l={},p=new WeakMap,_=[],y=null,m=!1,f=null,M=null,A=null,T=null,w=null,E=null,g=null,S=new Fe(0,0,0),k=0,I=!1,D=null,z=null,q=null,P=null,W=null,j.set(0,0,n.canvas.width,n.canvas.height),pe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:me,disable:ke,bindFramebuffer:vt,drawBuffers:Re,useProgram:et,setBlending:Ut,setMaterial:bt,setFlipSided:tn,setCullFace:dt,setLineWidth:Dn,setPolygonOffset:Rt,setScissorTest:pn,activeTexture:mn,bindTexture:gn,unbindTexture:L,compressedTexImage2D:_n,compressedTexImage3D:ct,texImage2D:v,texImage3D:F,pixelStorei:J,getParameter:ee,updateUBOMapping:X,uniformBlockBinding:$,texStorage2D:Ne,texStorage3D:b,texSubImage2D:ht,texSubImage3D:ue,compressedTexSubImage2D:Tt,compressedTexSubImage3D:we,scissor:se,viewport:ce,reset:ae}}function M_(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Be,h=new WeakMap,d=new Set,u,p=new WeakMap,_=new Set,y=new FinalizationRegistry(b=>_.delete(b)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(b,v){return m?new OffscreenCanvas(b,v):ys("canvas")}function M(b,v,F){let ee=1,J=Ne(b);if((J.width>F||J.height>F)&&(ee=F/Math.max(J.width,J.height)),ee<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let se=Math.floor(ee*J.width),ce=Math.floor(ee*J.height);u===void 0&&(u=f(se,ce));let X=v?f(se,ce):u;return X.width=se,X.height=ce,X.getContext("2d").drawImage(b,0,0,se,ce),Ae("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+se+"x"+ce+")."),X}else return"data"in b&&Ae("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),b;return b}function A(b){return b.generateMipmaps}function T(b){n.generateMipmap(b)}function w(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(b,v,F,ee,J,se=!1){if(b!==null){if(n[b]!==void 0)return n[b];Ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ce;ee&&(ce=e.get("EXT_texture_norm16"),ce||Ae("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=v;if(v===n.RED&&(F===n.FLOAT&&(X=n.R32F),F===n.HALF_FLOAT&&(X=n.R16F),F===n.UNSIGNED_BYTE&&(X=n.R8),F===n.UNSIGNED_SHORT&&ce&&(X=ce.R16_EXT),F===n.SHORT&&ce&&(X=ce.R16_SNORM_EXT)),v===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(X=n.R8UI),F===n.UNSIGNED_SHORT&&(X=n.R16UI),F===n.UNSIGNED_INT&&(X=n.R32UI),F===n.BYTE&&(X=n.R8I),F===n.SHORT&&(X=n.R16I),F===n.INT&&(X=n.R32I)),v===n.RG&&(F===n.FLOAT&&(X=n.RG32F),F===n.HALF_FLOAT&&(X=n.RG16F),F===n.UNSIGNED_BYTE&&(X=n.RG8),F===n.UNSIGNED_SHORT&&ce&&(X=ce.RG16_EXT),F===n.SHORT&&ce&&(X=ce.RG16_SNORM_EXT)),v===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(X=n.RG8UI),F===n.UNSIGNED_SHORT&&(X=n.RG16UI),F===n.UNSIGNED_INT&&(X=n.RG32UI),F===n.BYTE&&(X=n.RG8I),F===n.SHORT&&(X=n.RG16I),F===n.INT&&(X=n.RG32I)),v===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(X=n.RGB8UI),F===n.UNSIGNED_SHORT&&(X=n.RGB16UI),F===n.UNSIGNED_INT&&(X=n.RGB32UI),F===n.BYTE&&(X=n.RGB8I),F===n.SHORT&&(X=n.RGB16I),F===n.INT&&(X=n.RGB32I)),v===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),F===n.UNSIGNED_INT&&(X=n.RGBA32UI),F===n.BYTE&&(X=n.RGBA8I),F===n.SHORT&&(X=n.RGBA16I),F===n.INT&&(X=n.RGBA32I)),v===n.RGB&&(F===n.UNSIGNED_SHORT&&ce&&(X=ce.RGB16_EXT),F===n.SHORT&&ce&&(X=ce.RGB16_SNORM_EXT),F===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(X=n.R11F_G11F_B10F)),v===n.RGBA){let $=se?ar:je.getTransfer(J);F===n.FLOAT&&(X=n.RGBA32F),F===n.HALF_FLOAT&&(X=n.RGBA16F),F===n.UNSIGNED_BYTE&&(X=$===Ke?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT&&ce&&(X=ce.RGBA16_EXT),F===n.SHORT&&ce&&(X=ce.RGBA16_SNORM_EXT),F===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function g(b,v){let F;return b?v===null||v===Pn||v===Hi?F=n.DEPTH24_STENCIL8:v===In?F=n.DEPTH32F_STENCIL8:v===Bs&&(F=n.DEPTH24_STENCIL8,Ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Pn||v===Hi?F=n.DEPTH_COMPONENT24:v===In?F=n.DEPTH_COMPONENT32F:v===Bs&&(F=n.DEPTH_COMPONENT16),F}function S(b,v){return A(b)===!0||b.isFramebufferTexture&&b.minFilter!==Lt&&b.minFilter!==en?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function k(b){let v=new WeakRef(b);i.get(b).__ref=v,_.add(v),y.register(b,v,v)}function I(b){let v=i.get(b).__ref;v!==void 0&&(_.delete(v),y.unregister(v))}function D(b){q(b.target)}function z(b){P(b.target)}function q(b){b.removeEventListener("dispose",D),I(b),Z(b),b.isVideoTexture&&h.delete(b),b.isHTMLTexture&&d.delete(b)}function P(b){b.removeEventListener("dispose",z),I(b),te(b)}function W(){for(let b of _){let v=b.deref();v!==void 0&&(v.isRenderTarget===!0?P(v):q(v))}_.clear(),d.clear()}function Z(b){let v=i.get(b);if(v.__webglInit===void 0)return;let F=b.source,ee=p.get(F);if(ee){let J=ee[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&V(b),Object.keys(ee).length===0&&p.delete(F)}i.remove(b)}function V(b){let v=i.get(b);n.deleteTexture(v.__webglTexture);let F=b.source,ee=p.get(F);delete ee[v.__cacheKey],a.memory.textures--}function te(b){let v=i.get(b);v.__depthDisposeCallback&&v.__depthDisposeCallback();let F=b.depthTexture;if(F&&F.renderTarget===b&&q(F),b.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(v.__webglFramebuffer[J]))for(let se=0;se<v.__webglFramebuffer[J].length;se++)n.deleteFramebuffer(v.__webglFramebuffer[J][se]);else n.deleteFramebuffer(v.__webglFramebuffer[J]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[J])}else{if(Array.isArray(v.__webglFramebuffer))for(let J=0;J<v.__webglFramebuffer.length;J++)n.deleteFramebuffer(v.__webglFramebuffer[J]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let J=0;J<v.__webglColorRenderbuffer.length;J++)v.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[J]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let ee=b.textures;for(let J=0,se=ee.length;J<se;J++){let ce=i.get(ee[J]);ce.__webglTexture&&(n.deleteTexture(ce.__webglTexture),a.memory.textures--),i.remove(ee[J])}i.remove(b)}let G=0;function K(){G=0}function Q(){return G}function Me(b){G=b}function De(){let b=G;return b>=s.maxTextures&&Ae("WebGLTextures: Trying to use "+(b+1)+" texture units while this GPU supports only "+s.maxTextures),G+=1,b}function j(b){let v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.mipmapsAutoUpdate),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function pe(b,v){let F=i.get(b);if(b.isVideoTexture&&Tt(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&F.__version!==b.version){let ee=b.image;if(ee===null)Ae("WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)Ae("WebGLRenderer: Texture marked for update but image is incomplete");else{bt(F,b,v);return}}else b.isExternalTexture&&(F.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+v)}function ve(b,v){let F=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){bt(F,b,v);return}else b.isExternalTexture&&(F.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+v)}function Ee(b,v){let F=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){bt(F,b,v);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+v)}function me(b,v){let F=i.get(b);if(b.version>0&&F.__version!==b.version){tn(F,b,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+v)}let ke={[Na]:n.REPEAT,[Fn]:n.CLAMP_TO_EDGE,[Da]:n.MIRRORED_REPEAT},vt={[Lt]:n.NEAREST,[mu]:n.NEAREST_MIPMAP_NEAREST,[wr]:n.NEAREST_MIPMAP_LINEAR,[en]:n.LINEAR,[oo]:n.LINEAR_MIPMAP_NEAREST,[ti]:n.LINEAR_MIPMAP_LINEAR},Re={[xu]:n.NEVER,[mc]:n.ALWAYS,[yu]:n.LESS,[fc]:n.LEQUAL,[Mu]:n.EQUAL,[pc]:n.GEQUAL,[Su]:n.GREATER,[bu]:n.NOTEQUAL};function et(b,v){if(v.type===In&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===en||v.magFilter===oo||v.magFilter===wr||v.magFilter===ti||v.minFilter===en||v.minFilter===oo||v.minFilter===wr||v.minFilter===ti)&&Ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,ke[v.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,ke[v.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,ke[v.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,vt[v.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,vt[v.minFilter]),v.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,Re[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Lt||v.minFilter!==wr&&v.minFilter!==ti||v.type===In&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function it(b,v){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",D),k(v));let ee=v.source,J=p.get(ee);J===void 0&&(J={},p.set(ee,J));let se=j(v);if(se!==b.__cacheKey){J[se]===void 0&&(J[se]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),J[se].usedTimes++;let ce=J[b.__cacheKey];ce!==void 0&&(J[b.__cacheKey].usedTimes--,ce.usedTimes===0&&V(v)),b.__cacheKey=se,b.__webglTexture=J[se].texture}return F}function Xe(b,v,F){return Math.floor(Math.floor(b/F)/v)}function Ut(b,v,F,ee){let se=b.updateRanges;if(se.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,F,ee,v.data);else{se.sort((R,Y)=>R.start-Y.start);let ce=0;for(let R=1;R<se.length;R++){let Y=se[ce],H=se[R],oe=Y.start+Y.count,ie=Xe(H.start,v.width,4),re=Xe(Y.start,v.width,4);H.start<=oe+1&&ie===re&&Xe(H.start+H.count-1,v.width,4)===ie?Y.count=Math.max(Y.count,H.start+H.count-Y.start):(++ce,se[ce]=H)}se.length=ce+1;let X=t.getParameter(n.UNPACK_ROW_LENGTH),$=t.getParameter(n.UNPACK_SKIP_PIXELS),ae=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let R=0,Y=se.length;R<Y;R++){let H=se[R],oe=Math.floor(H.start/4),ie=Math.ceil(H.count/4),re=oe%v.width,be=Math.floor(oe/v.width),He=ie,ne=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,re),t.pixelStorei(n.UNPACK_SKIP_ROWS,be),t.texSubImage2D(n.TEXTURE_2D,0,re,be,He,ne,F,ee,v.data)}b.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,X),t.pixelStorei(n.UNPACK_SKIP_PIXELS,$),t.pixelStorei(n.UNPACK_SKIP_ROWS,ae)}}function bt(b,v,F){let ee=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ee=n.TEXTURE_3D);let J=it(b,v),se=v.source;t.bindTexture(ee,b.__webglTexture,n.TEXTURE0+F);let ce=i.get(se);if(se.version!==ce.__version||J===!0){if(t.activeTexture(n.TEXTURE0+F),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let ne=je.getPrimaries(je.workingColorSpace),Te=v.colorSpace===ii?null:je.getPrimaries(v.colorSpace),Ve=v.colorSpace===ii||ne===Te?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve)}t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let $=M(v.image,!1,s.maxTextureSize);$=we(v,$);let ae=r.convert(v.format,v.colorSpace),R=r.convert(v.type),Y=E(v.internalFormat,ae,R,v.normalized,v.colorSpace,v.isVideoTexture);et(ee,v);let H,oe=v.mipmaps,ie=v.isVideoTexture!==!0,re=ce.__version===void 0||J===!0,be=se.dataReady,He=S(v,$);if(v.isDepthTexture)Y=g(v.format===ni,v.type),re&&(ie?t.texStorage2D(n.TEXTURE_2D,1,Y,$.width,$.height):t.texImage2D(n.TEXTURE_2D,0,Y,$.width,$.height,0,ae,R,null));else if(v.isDataTexture)if(oe.length>0){ie&&re&&t.texStorage2D(n.TEXTURE_2D,He,Y,oe[0].width,oe[0].height);for(let ne=0,Te=oe.length;ne<Te;ne++)H=oe[ne],ie?be&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,H.width,H.height,ae,R,H.data):t.texImage2D(n.TEXTURE_2D,ne,Y,H.width,H.height,0,ae,R,H.data);v.generateMipmaps=!1}else ie?(re&&t.texStorage2D(n.TEXTURE_2D,He,Y,$.width,$.height),be&&Ut(v,$,ae,R)):t.texImage2D(n.TEXTURE_2D,0,Y,$.width,$.height,0,ae,R,$.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ie&&re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,He,Y,oe[0].width,oe[0].height,$.depth);for(let ne=0,Te=oe.length;ne<Te;ne++)if(H=oe[ne],v.format!==Nn)if(ae!==null)if(ie){if(be)if(v.layerUpdates.size>0){let Ve=Mc(H.width,H.height,v.format,v.type);for(let de of v.layerUpdates){let tt=H.data.subarray(de*Ve/H.data.BYTES_PER_ELEMENT,(de+1)*Ve/H.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,de,H.width,H.height,1,ae,tt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,H.width,H.height,$.depth,ae,H.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ne,Y,H.width,H.height,$.depth,0,H.data,0,0);else Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?be&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,H.width,H.height,$.depth,ae,R,H.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ne,Y,H.width,H.height,$.depth,0,ae,R,H.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{ie&&re&&t.texStorage2D(n.TEXTURE_2D,He,Y,oe[0].width,oe[0].height);for(let ne=0,Te=oe.length;ne<Te;ne++)H=oe[ne],v.format!==Nn?ae!==null?ie?be&&t.compressedTexSubImage2D(n.TEXTURE_2D,ne,0,0,H.width,H.height,ae,H.data):t.compressedTexImage2D(n.TEXTURE_2D,ne,Y,H.width,H.height,0,H.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?be&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,H.width,H.height,ae,R,H.data):t.texImage2D(n.TEXTURE_2D,ne,Y,H.width,H.height,0,ae,R,H.data)}else if(v.isDataArrayTexture)if(ie){if(re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,He,Y,$.width,$.height,$.depth),be)if(v.layerUpdates.size>0){let ne=Mc($.width,$.height,v.format,v.type);for(let Te of v.layerUpdates){let Ve=$.data.subarray(Te*ne/$.data.BYTES_PER_ELEMENT,(Te+1)*ne/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Te,$.width,$.height,1,ae,R,Ve)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ae,R,$.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Y,$.width,$.height,$.depth,0,ae,R,$.data);else if(v.isData3DTexture)ie?(re&&t.texStorage3D(n.TEXTURE_3D,He,Y,$.width,$.height,$.depth),be&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ae,R,$.data)):t.texImage3D(n.TEXTURE_3D,0,Y,$.width,$.height,$.depth,0,ae,R,$.data);else if(v.isFramebufferTexture){if(re)if(ie)t.texStorage2D(n.TEXTURE_2D,He,Y,$.width,$.height);else{let ne=$.width,Te=$.height;for(let Ve=0;Ve<He;Ve++)t.texImage2D(n.TEXTURE_2D,Ve,Y,ne,Te,0,ae,R,null),ne>>=1,Te>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){let ne=n.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),$.parentNode!==ne){ne.appendChild($),d.add(v),ne.onpaint=Te=>{let Ve=Te.changedElements;for(let de of d)Ve.includes(de.image)&&(de.needsUpdate=!0)},ne.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,$);else{let Ve=n.RGBA,de=n.RGBA,tt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ve,de,tt,$)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(oe.length>0){if(ie&&re){let ne=Ne(oe[0]);t.texStorage2D(n.TEXTURE_2D,He,Y,ne.width,ne.height)}for(let ne=0,Te=oe.length;ne<Te;ne++)H=oe[ne],ie?be&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,ae,R,H):t.texImage2D(n.TEXTURE_2D,ne,Y,ae,R,H);v.generateMipmaps=!1}else if(ie){if(re){let ne=Ne($);t.texStorage2D(n.TEXTURE_2D,He,Y,ne.width,ne.height)}be&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae,R,$)}else t.texImage2D(n.TEXTURE_2D,0,Y,ae,R,$);A(v)&&v.mipmapsAutoUpdate===!0&&T(ee),ce.__version=se.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function tn(b,v,F){if(v.image.length!==6)return;let ee=it(b,v),J=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+F);let se=i.get(J);if(J.version!==se.__version||ee===!0){t.activeTexture(n.TEXTURE0+F);let ce=je.getPrimaries(je.workingColorSpace),X=v.colorSpace===ii?null:je.getPrimaries(v.colorSpace),$=v.colorSpace===ii||ce===X?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let ae=v.isCompressedTexture||v.image[0].isCompressedTexture,R=v.image[0]&&v.image[0].isDataTexture,Y=[];for(let de=0;de<6;de++)!ae&&!R?Y[de]=M(v.image[de],!0,s.maxCubemapSize):Y[de]=R?v.image[de].image:v.image[de],Y[de]=we(v,Y[de]);let H=Y[0],oe=r.convert(v.format,v.colorSpace),ie=r.convert(v.type),re=E(v.internalFormat,oe,ie,v.normalized,v.colorSpace),be=v.isVideoTexture!==!0,He=se.__version===void 0||ee===!0,ne=J.dataReady,Te=S(v,H);et(n.TEXTURE_CUBE_MAP,v);let Ve;if(v.isDepthTexture){if(re=g(v.format===ni,v.type),He)if(be)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,re,H.width,H.height);else for(let de=0;de<6;de++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,re,H.width,H.height,0,oe,ie,null)}else if(ae){be&&He&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,re,H.width,H.height);for(let de=0;de<6;de++){Ve=Y[de].mipmaps;for(let tt=0;tt<Ve.length;tt++){let Ct=Ve[tt];v.format!==Nn?oe!==null?be?ne&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,tt,0,0,Ct.width,Ct.height,oe,Ct.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,tt,re,Ct.width,Ct.height,0,Ct.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):be?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,tt,0,0,Ct.width,Ct.height,oe,ie,Ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,tt,re,Ct.width,Ct.height,0,oe,ie,Ct.data)}}}else{if(Ve=v.mipmaps,be&&He){Ve.length>0&&Te++;let de=Ne(Y[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,re,de.width,de.height)}for(let de=0;de<6;de++)if(R){be?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Y[de].width,Y[de].height,oe,ie,Y[de].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,re,Y[de].width,Y[de].height,0,oe,ie,Y[de].data);for(let tt=0;tt<Ve.length;tt++){let oi=Ve[tt].image[de].image;be?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,tt+1,0,0,oi.width,oi.height,oe,ie,oi.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,tt+1,re,oi.width,oi.height,0,oe,ie,oi.data)}}else{be?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,oe,ie,Y[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,re,oe,ie,Y[de]);for(let tt=0;tt<Ve.length;tt++){let Ct=Ve[tt];be?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,tt+1,0,0,oe,ie,Ct.image[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,tt+1,re,oe,ie,Ct.image[de])}}}A(v)&&v.mipmapsAutoUpdate===!0&&T(n.TEXTURE_CUBE_MAP),se.__version=J.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function dt(b,v,F,ee,J,se){let ce=r.convert(F.format,F.colorSpace),X=r.convert(F.type),$=E(F.internalFormat,ce,X,F.normalized,F.colorSpace),ae=i.get(v),R=i.get(F);if(R.__renderTarget=v,!ae.__hasExternalTextures){let Y=Math.max(1,v.width>>se),H=Math.max(1,v.height>>se);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,se,$,Y,H,v.depth,0,ce,X,null):t.texImage2D(J,se,$,Y,H,0,ce,X,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),ue(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,J,R.__webglTexture,0,ht(v)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,J,R.__webglTexture,se),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Dn(b,v,F){if(n.bindRenderbuffer(n.RENDERBUFFER,b),v.depthBuffer){let ee=v.depthTexture,J=ee&&ee.isDepthTexture?ee.type:null,se=g(v.stencilBuffer,J),ce=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ue(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ht(v),se,v.width,v.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,ht(v),se,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,se,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,b)}else{let ee=v.textures;for(let J=0;J<ee.length;J++){let se=ee[J],ce=r.convert(se.format,se.colorSpace),X=r.convert(se.type),$=E(se.internalFormat,ce,X,se.normalized,se.colorSpace);ue(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ht(v),$,v.width,v.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,ht(v),$,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,$,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Rt(b,v,F){let ee=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=i.get(v.depthTexture);J.__renderTarget=v;let se=ee?v.depthTexture.image[0]:v.depthTexture.image;(!J.__webglTexture||se.width!==v.width||se.height!==v.height)&&(se.width=v.width,se.height=v.height,v.depthTexture.needsUpdate=!0),ee?me(v.depthTexture,0):pe(v.depthTexture,0);let ce=J.__webglTexture,X=ht(v),$=ee?n.TEXTURE_CUBE_MAP_POSITIVE_X+F:n.TEXTURE_2D,ae=v.depthTexture.format===ni?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===Kn)ue(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,$,ce,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,ae,$,ce,0);else if(v.depthTexture.format===ni)ue(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,$,ce,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,ae,$,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function pn(b){let v=i.get(b),F=b.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==b.depthTexture){let ee=b.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),ee){let J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,ee.removeEventListener("dispose",J)};ee.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=ee}if(b.depthTexture&&!v.__autoAllocateDepthBuffer)if(F)for(let ee=0;ee<6;ee++)Rt(v.__webglFramebuffer[ee],b,ee);else b.texture.mipmaps.length>0?Rt(v.__webglFramebuffer[0],b,0):Rt(v.__webglFramebuffer,b,0);else if(F){v.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[ee]),v.__webglDepthbuffer[ee]===void 0)v.__webglDepthbuffer[ee]=n.createRenderbuffer(),Dn(v.__webglDepthbuffer[ee],b,!1);else{let J=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=v.__webglDepthbuffer[ee];n.bindRenderbuffer(n.RENDERBUFFER,se),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,se)}}else if(b.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Dn(v.__webglDepthbuffer,b,!1);else{let J=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,se),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,se)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function mn(b,v,F){let ee=i.get(b);v!==void 0&&dt(ee.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&pn(b)}function gn(b){let v=b.texture,F=i.get(b),ee=i.get(v);b.addEventListener("dispose",z),k(b);let J=b.textures,se=b.isWebGLCubeRenderTarget===!0,ce=J.length>1;if(ce||(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=v.version,a.memory.textures++),se){F.__webglFramebuffer=[];for(let X=0;X<6;X++)if(v.mipmaps.length>0){F.__webglFramebuffer[X]=[];for(let $=0;$<v.mipmaps.length;$++)F.__webglFramebuffer[X][$]=n.createFramebuffer()}else F.__webglFramebuffer[X]=n.createFramebuffer()}else{if(v.mipmaps.length>0){F.__webglFramebuffer=[];for(let X=0;X<v.mipmaps.length;X++)F.__webglFramebuffer[X]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(ce)for(let X=0,$=J.length;X<$;X++){let ae=i.get(J[X]);ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture(),a.memory.textures++)}if(b.samples>0&&ue(b)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let X=0;X<J.length;X++){let $=J[X];F.__webglColorRenderbuffer[X]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[X]);let ae=r.convert($.format,$.colorSpace),R=r.convert($.type),Y=E($.internalFormat,ae,R,$.normalized,$.colorSpace,b.isXRRenderTarget===!0),H=ht(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,H,Y,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+X,n.RENDERBUFFER,F.__webglColorRenderbuffer[X])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Dn(F.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(se){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),et(n.TEXTURE_CUBE_MAP,v);for(let X=0;X<6;X++)if(v.mipmaps.length>0)for(let $=0;$<v.mipmaps.length;$++)dt(F.__webglFramebuffer[X][$],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+X,$);else dt(F.__webglFramebuffer[X],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);A(v)?T(n.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}else if(ce){for(let X=0,$=J.length;X<$;X++){let ae=J[X],R=i.get(ae),Y=n.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Y=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Y,R.__webglTexture),et(Y,ae),dt(F.__webglFramebuffer,b,ae,n.COLOR_ATTACHMENT0+X,Y,0),A(ae)&&T(Y)}t.unbindTexture()}else{let X=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(X=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(X,ee.__webglTexture),et(X,v),v.mipmaps.length>0)for(let $=0;$<v.mipmaps.length;$++)dt(F.__webglFramebuffer[$],b,v,n.COLOR_ATTACHMENT0,X,$);else dt(F.__webglFramebuffer,b,v,n.COLOR_ATTACHMENT0,X,0);A(v)?T(X):v.mipmaps.length>0&&n.texParameteri(X,n.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}b.depthBuffer&&pn(b)}function L(b){let v=b.textures;for(let F=0,ee=v.length;F<ee;F++){let J=v[F];if(A(J)&&J.mipmapsAutoUpdate===!0){let se=w(b),ce=i.get(J).__webglTexture;t.bindTexture(se,ce),T(se),t.unbindTexture()}}}let _n=[];function ct(b){if(b.samples>0){if(ue(b)===!1){let v=b.textures,F=b.width,ee=b.height,J=n.COLOR_BUFFER_BIT,se=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=i.get(b),X=v.length>1;if(X)for(let ae=0;ae<v.length;ae++)t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),b.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ae=0;ae<v.length;ae++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),X){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ce.__webglColorRenderbuffer[ae]);let R=i.get(v[ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,R,0)}n.blitFramebuffer(0,0,F,ee,0,0,F,ee,J,n.NEAREST),l===!0&&(_n.length=0,_n.push(n.COLOR_ATTACHMENT0+ae),b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&_n.push(se),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,_n))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),X)for(let ae=0;ae<v.length;ae++){t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,ce.__webglColorRenderbuffer[ae]);let R=i.get(v[ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,R,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&l){let v=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function ht(b){return Math.min(s.maxSamples,b.samples)}function ue(b){let v=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Tt(b){let v=a.render.frame;h.get(b)!==v&&(h.set(b,v),b.update())}function we(b,v){let F=b.colorSpace,ee=b.format,J=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||F!==rr&&F!==ii&&(je.getTransfer(F)===Ke?(ee!==Nn||J!==rn)&&Ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ce("WebGLTextures: Unsupported texture color space:",F)),v}function Ne(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=De,this.resetTextureUnits=K,this.getTextureUnits=Q,this.setTextureUnits=Me,this.setTexture2D=pe,this.setTexture2DArray=ve,this.setTexture3D=Ee,this.setTextureCube=me,this.rebindTextures=mn,this.setupRenderTarget=gn,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=pn,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=ue,this.dispose=W}function S_(n,e){function t(i,s=ii){let r,a=je.getTransfer(s);if(i===rn)return n.UNSIGNED_BYTE;if(i===co)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ho)return n.UNSIGNED_SHORT_5_5_5_1;if(i===lc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===cc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ac)return n.BYTE;if(i===oc)return n.SHORT;if(i===Bs)return n.UNSIGNED_SHORT;if(i===lo)return n.INT;if(i===Pn)return n.UNSIGNED_INT;if(i===In)return n.FLOAT;if(i===Ln)return n.HALF_FLOAT;if(i===hc)return n.ALPHA;if(i===uc)return n.RGB;if(i===Nn)return n.RGBA;if(i===Kn)return n.DEPTH_COMPONENT;if(i===ni)return n.DEPTH_STENCIL;if(i===dc)return n.RED;if(i===uo)return n.RED_INTEGER;if(i===Si)return n.RG;if(i===fo)return n.RG_INTEGER;if(i===po)return n.RGBA_INTEGER;if(i===Ar||i===Rr||i===Cr||i===Pr)if(a===Ke)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ar)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ar)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Rr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Cr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Pr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===mo||i===go||i===_o||i===vo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===mo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===go)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_o)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xo||i===yo||i===Mo||i===So||i===bo||i===Ir||i===To)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===xo||i===yo)return a===Ke?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Mo)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===So)return r.COMPRESSED_R11_EAC;if(i===bo)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ir)return r.COMPRESSED_RG11_EAC;if(i===To)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Eo||i===wo||i===Ao||i===Ro||i===Co||i===Po||i===Io||i===Lo||i===No||i===Do||i===Uo||i===Fo||i===Oo||i===ko)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Eo)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wo)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ao)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ro)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Co)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Po)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Io)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Lo)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===No)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Do)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Uo)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Fo)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Oo)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ko)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Bo||i===zo||i===Vo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Bo)return a===Ke?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Vo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ho||i===Go||i===Lr||i===Wo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ho)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Go)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Lr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Wo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Hi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var b_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,T_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Pc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new _r(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new sn({vertexShader:b_,fragmentShader:T_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Bt(new Fi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ic=class extends kn{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,_=null,y=typeof XRWebGLBinding<"u",m=new Pc,f={},M=t.getContextAttributes(),A=null,T=null,w=[],E=[],g=new Be,S=null,k=null,I=new qt;I.viewport=new ut;let D=new qt;D.viewport=new ut;let z=[I,D],q=new io,P=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let pe=w[j];return pe===void 0&&(pe=new bs,w[j]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(j){let pe=w[j];return pe===void 0&&(pe=new bs,w[j]=pe),pe.getGripSpace()},this.getHand=function(j){let pe=w[j];return pe===void 0&&(pe=new bs,w[j]=pe),pe.getHandSpace()};function Z(j){let pe=E.indexOf(j.inputSource);if(pe===-1)return;let ve=w[pe];ve!==void 0&&(ve.update(j.inputSource,j.frame,c||a),ve.dispatchEvent({type:j.type,data:j.inputSource}))}function V(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",te);for(let j=0;j<w.length;j++){let pe=E[j];pe!==null&&(E[j]=null,w[j].disconnect(pe))}P=null,W=null,m.reset();for(let j in f)delete f[j];if(e.setRenderTarget(A),p=null,u=null,d=null,s=null,T=null,De.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(g.width,g.height,!1),k!==null){let j=k.camera;j.fov=k.fov,j.zoom=k.zoom,j.updateProjectionMatrix(),k=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&Ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&Ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",V),s.addEventListener("inputsourceschange",te),M.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(g),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Ee=null,me=null;M.depth&&(me=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=M.stencil?ni:Kn,Ee=M.stencil?Hi:Pn);let ke={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(ke),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),T=new cn(u.textureWidth,u.textureHeight,{format:Nn,type:rn,depthTexture:new Qn(u.textureWidth,u.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ve={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ve),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new cn(p.framebufferWidth,p.framebufferHeight,{format:Nn,type:rn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),De.setContext(s),De.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function te(j){for(let pe=0;pe<j.removed.length;pe++){let ve=j.removed[pe],Ee=E.indexOf(ve);Ee>=0&&(E[Ee]=null,w[Ee].disconnect(ve))}for(let pe=0;pe<j.added.length;pe++){let ve=j.added[pe],Ee=E.indexOf(ve);if(Ee===-1){for(let ke=0;ke<w.length;ke++)if(ke>=E.length){E.push(ve),Ee=ke;break}else if(E[ke]===null){E[ke]=ve,Ee=ke;break}if(Ee===-1)break}let me=w[Ee];me&&me.connect(ve)}}function G(j,pe){pe===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(pe.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let pe=j.near,ve=j.far;m.texture!==null&&(m.depthNear>0&&(pe=m.depthNear),m.depthFar>0&&(ve=m.depthFar)),q.near=D.near=I.near=pe,q.far=D.far=I.far=ve,(P!==q.near||W!==q.far)&&(s.updateRenderState({depthNear:q.near,depthFar:q.far}),P=q.near,W=q.far),q.layers.mask=j.layers.mask|6,I.layers.mask=q.layers.mask&-5,D.layers.mask=q.layers.mask&-3;let Ee=j.parent,me=q.cameras;G(q,Ee);for(let ke=0;ke<me.length;ke++)G(me[ke],Ee);q.projectionMatrix.copy(I.projectionMatrix),q.projectionMatrixInverse.copy(I.projectionMatrixInverse),k===null&&j.isPerspectiveCamera&&(k={camera:j,fov:j.fov,zoom:j.zoom}),K(j,q,Ee)};function K(j,pe,ve){ve===null?j.matrix.copy(pe.matrixWorld):(j.matrix.copy(ve.matrixWorld),j.matrix.invert(),j.matrix.multiply(pe.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(pe.projectionMatrix),j.projectionMatrixInverse.copy(pe.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Fa*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(j){l=j,u!==null&&(u.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(q)},this.getCameraTexture=function(j){return f[j]};let Q=null;function Me(j,pe){if(h=pe.getViewerPose(c||a),_=pe,h!==null){let ve=h.views;p!==null&&(e.setRenderTargetFramebuffer(T,p.framebuffer),e.setRenderTarget(T));let Ee=!1;ve.length!==q.cameras.length&&(q.cameras.length=0,Ee=!0);for(let Re=0;Re<ve.length;Re++){let et=ve[Re],it=null;if(p!==null)it=p.getViewport(et);else{let Ut=d.getViewSubImage(u,et);it=Ut.viewport,Re===0&&(e.setRenderTargetTextures(T,Ut.colorTexture,Ut.depthStencilTexture),e.setRenderTarget(T))}let Xe=z[Re];Xe===void 0&&(Xe=new qt,Xe.layers.enable(Re),Xe.viewport=new ut,z[Re]=Xe),Xe.matrix.fromArray(et.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(et.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(it.x,it.y,it.width,it.height),Re===0&&(q.matrix.copy(Xe.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Ee===!0&&q.cameras.push(Xe)}let me=s.enabledFeatures;if(me&&me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=i.getBinding();let Re=d.getDepthInformation(ve[0]);Re&&Re.isValid&&Re.texture&&m.init(Re,s.renderState)}if(me&&me.includes("camera-access")&&y){e.state.unbindTexture(),d=i.getBinding();for(let Re=0;Re<ve.length;Re++){let et=ve[Re].camera;if(et){let it=f[et];it||(it=new _r,f[et]=it);let Xe=d.getCameraImage(et);it.sourceTexture=Xe}}}}for(let ve=0;ve<w.length;ve++){let Ee=E[ve],me=w[ve];Ee!==null&&me!==void 0&&me.update(Ee,pe,c||a)}Q&&Q(j,pe),pe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pe}),_=null}let De=new id;De.setAnimationLoop(Me),this.setAnimationLoop=function(j){Q=j},this.dispose=function(){}}},E_=new Qe,fd=new Ie;fd.set(-1,0,0,0,1,0,0,0,1);function w_(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,vc(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,M,A,T){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,T)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),y(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,M,A):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===zt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===zt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let M=e.get(f),A=M.envMap,T=M.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(E_.makeRotationFromEuler(T)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(fd),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,M,A){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=A*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.diffuseRoughness>0&&(m.diffuseRoughness.value=f.diffuseRoughness,f.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=f.diffuseRoughnessMap,t(f.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===zt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=f.iridescenceThicknessMaximum,f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){let M=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function A_(n,e,t,i){let s={},r={};function a(M,A){let T=A.program;i.uniformBlockBinding(M,T,s[M.id])}function o(M,A){let T=s[M.id];T===void 0&&(_(M),T=l(M),s[M.id]=T,M.addEventListener("dispose",m));let w=A.program;i.updateUBOMapping(M,w);let E=e.render.frame;r[M.id]!==E&&(c(M),r[M.id]=E)}function l(M){let A=n.createBuffer(),T=M.__size,w=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,T,w),n.bindBuffer(n.UNIFORM_BUFFER,null),A}function c(M){let A=s[M.id],T=M.uniforms,w=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let E=0,g=T.length;E<g;E++){let S=T[E];if(Array.isArray(S))for(let k=0,I=S.length;k<I;k++)h(S[k],E,k,w);else h(S,E,0,w)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(M,A,T,w){if(u(M,A,T,w)===!0){let E=M.__offset,g=M.value;if(Array.isArray(g)){let S=0;for(let k=0;k<g.length;k++){let I=g[k],D=y(I,!0);d(I,M.__data,S),S+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else d(g,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,E,M.__data)}}function d(M,A,T){typeof M=="number"||typeof M=="boolean"?A[T]=M:M.isMatrix3?(A[T]=M.elements[0],A[T+1]=M.elements[1],A[T+2]=M.elements[2],A[T+3]=0,A[T+4]=M.elements[3],A[T+5]=M.elements[4],A[T+6]=M.elements[5],A[T+7]=0,A[T+8]=M.elements[6],A[T+9]=M.elements[7],A[T+10]=M.elements[8],A[T+11]=0):ArrayBuffer.isView(M)?A.set(M.subarray(0,A.length-T),T):M.toArray(A,T)}function u(M,A,T,w){let E=M.value,g=A+"_"+T;if(Array.isArray(E)){w[g]===void 0&&(w[g]=[]);let S=w[g],k=!1;for(let I=0;I<E.length;I++)p(E[I],S,I)===!0&&(k=!0);return k}return p(E,w,g)}function p(M,A,T){if(A[T]===void 0)return typeof M=="number"||typeof M=="boolean"?A[T]=M:ArrayBuffer.isView(M)?A[T]=M.slice():A[T]=M.clone(),!0;{let w=A[T];if(typeof M=="number"||typeof M=="boolean"){if(w!==M)return A[T]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(w.equals(M)===!1)return w.copy(M),!0}}return!1}function _(M){let A=M.uniforms,T=0,w=16;for(let g=0,S=A.length;g<S;g++){let k=Array.isArray(A[g])?A[g]:[A[g]];for(let I=0,D=k.length;I<D;I++){let z=k[I],q=Array.isArray(z.value)?z.value:[z.value],P=Array.isArray(A[g])||Array.isArray(z.value),W=T;for(let V=0,te=q.length;V<te;V++){let G=q[V],K=y(G,P),Q=T%w,Me=Q%K.boundary,De=Q+Me;T+=Me,De!==0&&w-De<K.storage&&(T+=w-De),V===0&&(W=T),T+=K.storage}let Z=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new Z((T-W)/Float32Array.BYTES_PER_ELEMENT),z.__offset=W}}let E=T%w;return E>0&&(T+=w-E),M.__size=T,M.__cache={},this}function y(M,A){let T={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(T.boundary=4,T.storage=4):M.isVector2?(T.boundary=8,T.storage=8):M.isVector3||M.isColor?(T.boundary=16,T.storage=12):M.isVector4?(T.boundary=16,T.storage=16):M.isMatrix3?(T.boundary=16,T.storage=48):M.isMatrix4?(T.boundary=16,T.storage=64):M.isTexture?Ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(T.boundary=16,T.storage=M.byteLength):Ae("WebGLRenderer: Unsupported uniform value type.",M),A===!0&&(T.boundary=16,T.storage=Math.ceil(T.storage/16)*16),T}function m(M){let A=M.target;A.removeEventListener("dispose",m),n.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function f(){for(let M in s)n.deleteBuffer(s[M]);s={},r={}}return{bind:a,update:o,dispose:f}}var R_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),zn=null;function C_(){return zn===null&&(zn=new Va(R_,16,16,Si,Ln),zn.name="DFG_LUT",zn.minFilter=en,zn.magFilter=en,zn.wrapS=Fn,zn.wrapT=Fn,zn.generateMipmaps=!1,zn.needsUpdate=!0),zn}var Zo=class{constructor(e={}){let{canvas:t=Tu(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:p=rn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;let y=p,m=new Set([po,fo,uo]),f=new Set([rn,Pn,Bs,Hi,co,ho]),M=new Uint32Array(4),A=new Int32Array(4),T={textures:[],min:[],max:[],resolution:[]},w=null,E=null,g=[],S=[],k=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,D=!1,z=null,q=null,P=null,W=null;this._outputColorSpace=Xt;let Z=0,V=0,te=null,G=-1,K=null,Q=new ut,Me=new ut,De=null,j=new Fe(0),pe=0,ve=t.width,Ee=t.height,me=1,ke=null,vt=null,Re=new ut(0,0,ve,Ee),et=new ut(0,0,ve,Ee),it=!1,Xe=new _i,Ut=new Ha,bt=!1,tn=!1,dt=new Qe,Dn=new N,Rt=new ut,pn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},mn=!1;function gn(){return te===null?me:1}let L=i;function _n(x,C){return t.getContext(x,C)}let ct,ht,ue,Tt,we,Ne,b,v,F,ee,J,se,ce,X,$,ae,R,Y,H,oe,ie,re,be;try{let x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",Ve,!1),t.addEventListener("webglcontextcreationerror",de,!1),L===null){let C="webgl2";if(L=_n(C,x),L===null)throw _n(C)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}He()}catch(x){throw t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",Ve,!1),t.removeEventListener("webglcontextcreationerror",de,!1),Ce("WebGLRenderer: "+x.message),x}function He(){ct=new zg(L),ct.init(),ie=new S_(L,ct),ht=new Cg(L,ct,e,ie),ue=new y_(L,ct),ht.reversedDepthBuffer&&u&&ue.buffers.depth.setReversed(!0),q=L.createFramebuffer(),P=L.createFramebuffer(),W=L.createFramebuffer(),Tt=new Gg(L),we=new a_,Ne=new M_(L,ct,ue,we,ht,ie,Tt),b=new Bg(I),v=new Xf(L),re=new Ag(L,v),F=new Vg(L,v,Tt,re),ee=new Xg(L,F,v,re,Tt),Y=new Wg(L,ht,Ne),$=new Pg(we),J=new r_(I,b,ct,ht,re,$),se=new w_(I,we),ce=new l_,X=new p_(ct),R=new wg(I,b,ue,ee,_,l),ae=new x_(I,ee,ht),be=new A_(L,Tt,ht,ue),H=new Rg(L,ct,Tt),oe=new Hg(L,ct,Tt),Tt.programs=J.programs,I.capabilities=ht,I.extensions=ct,I.properties=we,I.renderLists=ce,I.shadowMap=ae,I.state=ue,I.info=Tt}y!==rn&&(k=new $g(y,t.width,t.height,o,s,r));let ne=new Ic(I,L);this.xr=ne,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let x=ct.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=ct.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(x){x!==void 0&&(me=x,this.setSize(ve,Ee,!1))},this.getSize=function(x){return x.set(ve,Ee)},this.setSize=function(x,C,B=!0){if(ne.isPresenting){Ae("WebGLRenderer: Can't change size while VR device is presenting.");return}ve=x,Ee=C,t.width=Math.floor(x*me),t.height=Math.floor(C*me),B===!0&&(t.style.width=x+"px",t.style.height=C+"px"),k!==null&&k.setSize(t.width,t.height),this.setViewport(0,0,x,C)},this.getDrawingBufferSize=function(x){return x.set(ve*me,Ee*me).floor()},this.setDrawingBufferSize=function(x,C,B){ve=x,Ee=C,me=B,t.width=Math.floor(x*B),t.height=Math.floor(C*B),this.setViewport(0,0,x,C)},this.setEffects=function(x){if(y===rn){Ce("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let C=0;C<x.length;C++)if(x[C].isOutputPass===!0){Ae("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(Q)},this.getViewport=function(x){return x.copy(Re)},this.setViewport=function(x,C,B,U){x.isVector4?Re.set(x.x,x.y,x.z,x.w):Re.set(x,C,B,U),ue.viewport(Q.copy(Re).multiplyScalar(gn()).round())},this.getScissor=function(x){return x.copy(et)},this.setScissor=function(x,C,B,U){x.isVector4?et.set(x.x,x.y,x.z,x.w):et.set(x,C,B,U),ue.scissor(Me.copy(et).multiplyScalar(gn()).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(x){ue.setScissorTest(it=x)},this.setOpaqueSort=function(x){ke=x},this.setTransparentSort=function(x){vt=x},this.getClearColor=function(x){return x.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(x=!0,C=!0,B=!0){let U=0;if(x){let O=!1;if(te!==null){let he=te.texture.format;O=m.has(he)}if(O){let he=te.texture.type,_e=f.has(he),le=R.getClearColor(),ge=R.getClearAlpha(),Se=le.r,Ue=le.g,qe=le.b;_e?(M[0]=Se,M[1]=Ue,M[2]=qe,M[3]=ge,L.clearBufferuiv(L.COLOR,0,M)):(A[0]=Se,A[1]=Ue,A[2]=qe,A[3]=ge,L.clearBufferiv(L.COLOR,0,A))}else U|=L.COLOR_BUFFER_BIT}C&&(U|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),B&&(U|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U!==0&&L.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),z=x},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",Ve,!1),t.removeEventListener("webglcontextcreationerror",de,!1),R.dispose(),ce.dispose(),X.dispose(),Ne.dispose(),we.dispose(),b.dispose(),ee.dispose(),F.dispose(),re.dispose(),be.dispose(),J.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",rh),ne.removeEventListener("sessionend",ah),Ai.stop()};function Te(x){x.preventDefault(),or("WebGLRenderer: Context Lost."),D=!0}function Ve(){or("WebGLRenderer: Context Restored."),D=!1;let x=Tt.autoReset,C=ae.enabled,B=ae.autoUpdate,U=ae.needsUpdate,O=ae.type;He(),Tt.autoReset=x,ae.enabled=C,ae.autoUpdate=B,ae.needsUpdate=U,ae.type=O}function de(x){Ce("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function tt(x){let C=x.target;C.removeEventListener("dispose",tt),Ct(C)}function Ct(x){oi(x),we.remove(x)}function oi(x){let C=we.get(x).programs;C!==void 0&&(C.forEach(function(B){J.releaseProgram(B)}),x.isShaderMaterial&&J.releaseShaderCache(x))}this.renderBufferDirect=function(x,C,B,U,O,he){C===null&&(C=pn);let _e=O.isMesh&&O.matrixWorld.determinantAffine()<0,le=af(x,C,B,U,O);ue.setMaterial(U,_e);let ge=B.index,Se=1;if(U.wireframe===!0){if(ge=F.getWireframeAttribute(B),ge===void 0)return;Se=2}let Ue=B.drawRange,qe=B.attributes.position,xe=Ue.start*Se,$e=(Ue.start+Ue.count)*Se;he!==null&&(xe=Math.max(xe,he.start*Se),$e=Math.min($e,(he.start+he.count)*Se)),ge!==null?(xe=Math.max(xe,0),$e=Math.min($e,ge.count)):qe!=null&&(xe=Math.max(xe,0),$e=Math.min($e,qe.count));let xt=$e-xe;if(xt<0||xt===1/0)return;re.setup(O,U,le,B,ge);let at,st=H;if(ge!==null&&(at=v.get(ge),st=oe,st.setIndex(at)),O.isMesh)U.wireframe===!0?(ue.setLineWidth(U.wireframeLinewidth*gn()),st.setMode(L.LINES)):st.setMode(L.TRIANGLES);else if(O.isLine){let Vt=U.linewidth;Vt===void 0&&(Vt=1),ue.setLineWidth(Vt*gn()),O.isLineSegments?st.setMode(L.LINES):O.isLineLoop?st.setMode(L.LINE_LOOP):st.setMode(L.LINE_STRIP)}else O.isPoints?st.setMode(L.POINTS):O.isSprite&&st.setMode(L.TRIANGLES);if(O.isBatchedMesh)if(ct.get("WEBGL_multi_draw"))st.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Vt=O._multiDrawStarts,ye=O._multiDrawCounts,Kt=O._multiDrawCount,Je=ge?v.get(ge).bytesPerElement:1,Ri=we.get(U).currentProgram.getUniforms();for(let Ht=0;Ht<Kt;Ht++)Ri.setValue(L,"_gl_DrawID",Ht),st.render(Vt[Ht]/Je,ye[Ht])}else if(O.isInstancedMesh)st.renderInstances(xe,xt,O.count);else if(B.isInstancedBufferGeometry){let Vt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,ye=Math.min(B.instanceCount,Vt);st.renderInstances(xe,xt,ye)}else st.render(xe,xt)};function sh(x,C,B,U){z!==null&&x.isNodeMaterial&&z.setObject(U,x),bt===!0&&$.setState(x,B,!1),x.transparent===!0&&x.side===un&&x.forceSinglePass===!1?(x.side=zt,x.needsUpdate=!0,js(x,C,U),x.side=Mi,x.needsUpdate=!0,js(x,C,U),x.side=un):js(x,C,U)}this.compile=function(x,C,B=null){B===null&&(B=x),z!==null&&z.renderStart(x,C,B),E=X.get(B),E.init(C),S.push(E),B.traverseVisible(function(O){O.isLight&&O.layers.test(C.layers)&&(E.pushLight(O),O.castShadow&&E.pushShadow(O))}),x!==B&&x.traverseVisible(function(O){O.isLight&&O.layers.test(C.layers)&&(E.pushLight(O),O.castShadow&&E.pushShadow(O))}),E.setupLights(),z!==null&&z.updateLights(E.state.lightsArray),tn=this.localClippingEnabled,bt=$.init(this.clippingPlanes,tn),bt===!0&&$.setGlobalState(this.clippingPlanes,C),z!==null&&ae.render(E.state.shadowsArray,B,C);let U=new Set;return x.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let he=O.material;if(he)if(Array.isArray(he))for(let _e=0;_e<he.length;_e++){let le=he[_e];sh(le,B,C,O),U.add(le)}else sh(he,B,C,O),U.add(he)}),E=S.pop(),z!==null&&z.renderEnd(),U},this.compileAsync=function(x,C,B=null){let U=this.compile(x,C,B);return new Promise(O=>{function he(){if(U.forEach(function(_e){let ge=we.get(_e).currentProgram;(ge===void 0||ge.isReady())&&U.delete(_e)}),U.size===0){O(x);return}setTimeout(he,10)}ct.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let dl=null;function sf(x){dl&&dl(x)}function rh(){Ai.stop()}function ah(){Ai.start()}let Ai=new id;Ai.setAnimationLoop(sf),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(x){dl=x,ne.setAnimationLoop(x),x===null?Ai.stop():Ai.start()},ne.addEventListener("sessionstart",rh),ne.addEventListener("sessionend",ah),this.render=function(x,C){if(C!==void 0&&C.isCamera!==!0){Ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;z!==null&&z.renderStart(x,C);let B=ne.enabled===!0&&ne.isPresenting===!0,U=k!==null&&(te===null||B)&&k.begin(I,te);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(k===null||k.isCompositing()===!1)&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(C),C=ne.getCamera()),x.isScene===!0&&x.onBeforeRender(I,x,C,te),E=X.get(x,S.length),E.init(C),E.state.textureUnits=Ne.getTextureUnits(),S.push(E),dt.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),C.isArrayCamera?Ut.setFromArrayCamera(C):Xe.setFromProjectionMatrix(dt,xn,C.reversedDepth),tn=this.localClippingEnabled,bt=$.init(this.clippingPlanes,tn),w=ce.get(x,g.length),w.init(),g.push(w),this.info.render.frame++,ne.enabled===!0&&ne.isPresenting===!0){let _e=I.xr.getDepthSensingMesh();_e!==null&&fl(_e,C,-1/0,I.sortObjects)}fl(x,C,0,I.sortObjects),w.finish(),z!==null&&z.updateLights(E.state.lightsArray),I.sortObjects===!0&&w.sort(ke,vt),mn=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,mn&&R.addToRenderList(w,x),this.info.autoReset===!0&&this.info.reset(),bt===!0&&$.beginShadows();let O=E.state.shadowsArray;if(ae.render(O,x,C),bt===!0&&$.endShadows(),(U&&k.hasRenderPass())===!1){let _e=w.opaque,le=w.transmissive;if(E.setupLights(),C.isArrayCamera){let ge=C.cameras;if(le.length>0)for(let Se=0,Ue=ge.length;Se<Ue;Se++){let qe=ge[Se];lh(_e,le,x,qe)}mn&&R.render(x);for(let Se=0,Ue=ge.length;Se<Ue;Se++){let qe=ge[Se];oh(w,x,qe,qe.viewport)}}else le.length>0&&lh(_e,le,x,C),mn&&R.render(x),oh(w,x,C)}te!==null&&V===0&&(Ne.updateMultisampleRenderTarget(te),Ne.updateRenderTargetMipmap(te)),U&&k.end(I),x.isScene===!0&&x.onAfterRender(I,x,C),re.resetDefaultState(),G=-1,K=null,S.pop(),S.length>0?(E=S[S.length-1],Ne.setTextureUnits(E.state.textureUnits),bt===!0&&$.setGlobalState(I.clippingPlanes,E.state.camera)):E=null,g.pop(),g.length>0?w=g[g.length-1]:w=null,z!==null&&z.renderEnd()};function fl(x,C,B,U){if(x.visible===!1)return;if(x.layers.test(C.layers)){if(x.isGroup)B=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(C);else if(x.isLight)E.pushLight(x),x.castShadow&&E.pushShadow(x);else if(x.isSprite){let _e=C.isArrayCamera?Ut:Xe;if(!x.frustumCulled||x.intersectsFrustum(_e)){U&&Rt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(dt);let le=ee.update(x),ge=x.material;ge.visible&&w.push(x,le,ge,B,Rt.z,null,C)}}else if(x.isMesh||x.isLine||x.isPoints){let _e=C.isArrayCamera?Ut:Xe;if(!x.frustumCulled||x.intersectsFrustum(_e)){let le=ee.update(x),ge=x.material;if(U&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Rt.copy(x.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Rt.copy(le.boundingSphere.center)),Rt.applyMatrix4(x.matrixWorld).applyMatrix4(dt)),Array.isArray(ge)){let Se=le.groups;for(let Ue=0,qe=Se.length;Ue<qe;Ue++){let xe=Se[Ue],$e=ge[xe.materialIndex];$e&&$e.visible&&w.push(x,le,$e,B,Rt.z,xe,C)}}else ge.visible&&w.push(x,le,ge,B,Rt.z,null,C)}}}let he=x.children;for(let _e=0,le=he.length;_e<le;_e++)fl(he[_e],C,B,U)}function oh(x,C,B,U){let{opaque:O,transmissive:he,transparent:_e}=x;E.setupLightsView(B),bt===!0&&$.setGlobalState(I.clippingPlanes,B),U&&ue.viewport(Q.copy(U)),O.length>0&&jr(O,C,B),he.length>0&&jr(he,C,B),_e.length>0&&jr(_e,C,B),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function lh(x,C,B,U){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[U.id]===void 0){let xe=ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[U.id]=new cn(1,1,{generateMipmaps:!0,type:xe?Ln:rn,minFilter:ti,samples:Math.max(4,ht.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:je.workingColorSpace})}let he=E.state.transmissionRenderTarget[U.id],_e=U.viewport||Q;he.setSize(_e.z*I.transmissionResolutionScale,_e.w*I.transmissionResolutionScale);let le=I.getRenderTarget(),ge=I.getActiveCubeFace(),Se=I.getActiveMipmapLevel();I.setRenderTarget(he),I.getClearColor(j),pe=I.getClearAlpha(),pe<1&&I.setClearColor(16777215,.5),I.clear(),mn&&R.render(B);let Ue=I.toneMapping;I.toneMapping=Bn;let qe=U.viewport;if(U.viewport!==void 0&&(U.viewport=void 0),E.setupLightsView(U),bt===!0&&$.setGlobalState(I.clippingPlanes,U),jr(x,B,U),Ne.updateMultisampleRenderTarget(he),Ne.updateRenderTargetMipmap(he),ct.has("WEBGL_multisampled_render_to_texture")===!1){let xe=!1;for(let $e=0,xt=C.length;$e<xt;$e++){let at=C[$e],{object:st,geometry:Vt,material:ye,group:Kt}=at;if(ye.side===un&&st.layers.test(U.layers)){let Je=ye.side;ye.side=zt,ye.needsUpdate=!0,ch(st,B,U,Vt,ye,Kt),ye.side=Je,ye.needsUpdate=!0,xe=!0}}xe===!0&&(Ne.updateMultisampleRenderTarget(he),Ne.updateRenderTargetMipmap(he))}I.setRenderTarget(le,ge,Se),I.setClearColor(j,pe),qe!==void 0&&(U.viewport=qe),I.toneMapping=Ue}function jr(x,C,B){let U=C.isScene===!0?C.overrideMaterial:null;for(let O=0,he=x.length;O<he;O++){let _e=x[O],{object:le,geometry:ge,group:Se}=_e,Ue=_e.material;Ue.allowOverride===!0&&U!==null&&(Ue=U),le.layers.test(B.layers)&&ch(le,C,B,ge,Ue,Se)}}function ch(x,C,B,U,O,he){z!==null&&O.isNodeMaterial&&z.setObject(x,O),x.onBeforeRender(I,C,B,U,O,he),x.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),O.onBeforeRender(I,C,B,U,x,he),O.transparent===!0&&O.side===un&&O.forceSinglePass===!1?(O.side=zt,O.needsUpdate=!0,I.renderBufferDirect(B,C,U,O,x,he),O.side=Mi,O.needsUpdate=!0,I.renderBufferDirect(B,C,U,O,x,he),O.side=un):I.renderBufferDirect(B,C,U,O,x,he),x.onAfterRender(I,C,B,U,O,he)}function hh(x){let C=0;for(let B of x)B.texture!==null&&C++;return C}function js(x,C,B){C.isScene!==!0&&(C=pn);let U=we.get(x),O=E.state.lights,he=E.state.shadowsArray,_e=O.state.version,le=J.getParameters(x,O.state,he,C,B,E.state.lightProbeGridArray),ge=J.getProgramCacheKey(le),Se=U.programs;U.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,U.fog=C.fog;let Ue=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;U.envMap=b.get(x.envMap||U.environment,Ue),U.envMapRotation=U.environment!==null&&x.envMap===null?C.environmentRotation:x.envMapRotation,Se===void 0&&(x.addEventListener("dispose",tt),Se=new Map,U.programs=Se,U.programVariants=new Map);let qe=Se.get(ge);if(qe!==void 0){if(U.currentProgram===qe&&U.lightsStateVersion===_e)return dh(x,le),qe}else le.uniforms=J.getUniforms(x),z!==null&&x.isNodeMaterial&&z.build(x,B,le),x.onBeforeCompile(le,I),qe=J.acquireProgram(le,ge),Se.set(ge,qe),U.uniforms=le.uniforms;let xe=U.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(xe.clippingPlanes=$.uniform),dh(x,le),U.needsLights=lf(x),U.lightsStateVersion=_e,U.needsLights&&(xe.ambientLightColor.value=O.state.ambient,xe.lightProbe.value=O.state.probe,xe.sunLights.value=O.state.sun,xe.sunLightShadows.value=O.state.sunShadow,xe.directionalLights.value=O.state.directional,xe.directionalLightShadows.value=O.state.directionalShadow,xe.spotLights.value=O.state.spot,xe.spotLightShadows.value=O.state.spotShadow,xe.rectAreaLights.value=O.state.rectArea,xe.ltc_1.value=O.state.rectAreaLTC1,xe.ltc_2.value=O.state.rectAreaLTC2,xe.pointLights.value=O.state.point,xe.pointLightShadows.value=O.state.pointShadow,xe.hemisphereLights.value=O.state.hemi,xe.sunShadowMatrix.value=O.state.sunShadowMatrix,xe.sunShadowCascade.value=O.state.sunShadowCascade,xe.directionalShadowMatrix.value=O.state.directionalShadowMatrix,xe.spotLightMatrix.value=O.state.spotLightMatrix,xe.spotLightMap.value=O.state.spotLightMap,xe.pointShadowMatrix.value=O.state.pointShadowMatrix),U.numLightProbeGrids=hh(E.state.lightProbeGridArray),U.currentProgram=qe,U.uniformsList=null,qe}function rf(x,C,B,U,O){let he=we.get(x),_e=he.currentProgram.id+","+U+","+O,le=he.programVariants.get(_e);return le===void 0?(le=js(x,C,B),he.programVariants.set(_e,le)):(he.currentProgram=le,he.uniformsList=null,he.outputColorSpace=U,he.toneMapping=O),le}function uh(x){if(x.uniformsList===null){let C=x.currentProgram.getUniforms();x.uniformsList=zs.seqWithValue(C.seq,x.uniforms)}return x.uniformsList}function dh(x,C){let B=we.get(x);B.outputColorSpace=C.outputColorSpace,B.batching=C.batching,B.batchingColor=C.batchingColor,B.instancing=C.instancing,B.instancingColor=C.instancingColor,B.instancingMorph=C.instancingMorph,B.skinning=C.skinning,B.morphTargets=C.morphTargets,B.morphNormals=C.morphNormals,B.morphColors=C.morphColors,B.morphTargetsCount=C.morphTargetsCount,B.numClippingPlanes=C.numClippingPlanes,B.numIntersection=C.numClipIntersection,B.vertexAlphas=C.vertexAlphas,B.vertexTangents=C.vertexTangents,B.toneMapping=C.toneMapping}function af(x,C,B,U,O){C.isScene!==!0&&(C=pn),Ne.resetTextureUnits();let he=C.fog,_e=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?C.environment:null,le=te===null?I.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:je.workingColorSpace,ge=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap,Se=b.get(U.envMap||_e,ge),Ue=U.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,qe=!!B.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),xe=!!B.morphAttributes.position,$e=!!B.morphAttributes.normal,xt=!!B.morphAttributes.color,at=Bn;U.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(at=I.toneMapping);let st=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Vt=st!==void 0?st.length:0,ye=we.get(U),Kt=E.state.lights;if(bt===!0&&(tn===!0||x!==K)){let ft=x===K&&U.id===G;$.setState(U,x,ft)}let Je=!1,Ri=!1;U.version===ye.__version?ye.needsLights&&ye.lightsStateVersion!==Kt.state.version||O.isBatchedMesh&&ye.batching===!1||!O.isBatchedMesh&&ye.batching===!0||O.isBatchedMesh&&ye.batchingColor===!0&&O._colorsTexture===null||O.isBatchedMesh&&ye.batchingColor===!1&&O._colorsTexture!==null||O.isInstancedMesh&&ye.instancing===!1||!O.isInstancedMesh&&ye.instancing===!0||O.isSkinnedMesh&&ye.skinning===!1||!O.isSkinnedMesh&&ye.skinning===!0||O.isInstancedMesh&&ye.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&ye.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&ye.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&ye.instancingMorph===!1&&O.morphTexture!==null||ye.envMap!==Se||U.fog===!0&&ye.fog!==he||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==$.numPlanes||ye.numIntersection!==$.numIntersection)||ye.vertexAlphas!==Ue||ye.vertexTangents!==qe||ye.morphTargets!==xe||ye.morphNormals!==$e||ye.morphColors!==xt||ye.morphTargetsCount!==Vt||ye.numLightProbeGrids!==hh(E.state.lightProbeGridArray)?Je=!0:(ye.outputColorSpace!==le||ye.toneMapping!==at)&&(Ri=!0):(Je=!0,ye.__version=U.version);let Ht=ye.currentProgram;(Je===!0||Ri===!0)&&(Ht=Ri===!0?rf(U,C,O,le,at):js(U,C,O),z&&U.isNodeMaterial&&z.onUpdateProgram(U,Ht,ye));let Yr=!1,li=!1,Ci=!1,Ze=Ht.getUniforms(),Ft=ye.uniforms;if(ue.useProgram(Ht.program)&&(Yr=!0,li=!0,Ci=!0),U.id!==G&&(G=U.id,li=!0),Yr||K!==x){ue.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),Ze.setValue(L,"projectionMatrix",x.projectionMatrix),Ze.setValue(L,"viewMatrix",x.matrixWorldInverse);let Pt=Ze.map.cameraPosition;Pt!==void 0&&Pt.setValue(L,Dn.setFromMatrixPosition(x.matrixWorld)),ht.logarithmicDepthBuffer&&Ze.setValue(L,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Ze.setValue(L,"isOrthographic",x.isOrthographicCamera===!0),K!==x&&(K=x,li=!0,Ci=!0)}if(ye.needsLights&&(Kt.state.sunShadowMap.length>0&&Ze.setValue(L,"sunShadowMap",Kt.state.sunShadowMap,Ne),Kt.state.directionalShadowMap.length>0&&Ze.setValue(L,"directionalShadowMap",Kt.state.directionalShadowMap,Ne),Kt.state.spotShadowMap.length>0&&Ze.setValue(L,"spotShadowMap",Kt.state.spotShadowMap,Ne),Kt.state.pointShadowMap.length>0&&Ze.setValue(L,"pointShadowMap",Kt.state.pointShadowMap,Ne)),O.isSkinnedMesh){Ze.setOptional(L,O,"bindMatrix"),Ze.setOptional(L,O,"bindMatrixInverse");let ft=O.skeleton;ft&&(ft.boneTexture===null&&ft.computeBoneTexture(),Ze.setValue(L,"boneTexture",ft.boneTexture,Ne))}O.isBatchedMesh&&(Ze.setOptional(L,O,"batchingTexture"),Ze.setValue(L,"batchingTexture",O._matricesTexture,Ne),Ze.setOptional(L,O,"batchingIdTexture"),Ze.setValue(L,"batchingIdTexture",O._indirectTexture,Ne),Ze.setOptional(L,O,"batchingColorTexture"),O._colorsTexture!==null&&Ze.setValue(L,"batchingColorTexture",O._colorsTexture,Ne));let bn=B.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&Y.update(O,B,Ht),(li||ye.receiveShadow!==O.receiveShadow)&&(ye.receiveShadow=O.receiveShadow,Ze.setValue(L,"receiveShadow",O.receiveShadow)),(U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial)&&U.envMap===null&&C.environment!==null&&(Ft.envMapIntensity.value=C.environmentIntensity),Ft.dfgLUT!==void 0&&(Ft.dfgLUT.value=C_()),li){if(Ze.setValue(L,"toneMappingExposure",I.toneMappingExposure),ye.needsLights&&of(Ft,Ci),he&&U.fog===!0&&se.refreshFogUniforms(Ft,he),se.refreshMaterialUniforms(Ft,U,me,Ee,E.state.transmissionRenderTarget[x.id]),ye.needsLights&&ye.numLightProbeGrids>0){let ft=T,Pt=0;for(let Wn of E.state.lightProbeGridArray)Wn.texture!==null&&(ft.textures[Pt]=Wn.texture,ft.min[Pt]=Wn.boundingBox.min,ft.max[Pt]=Wn.boundingBox.max,ft.resolution[Pt]=Wn.resolution,Pt++);for(let Wn in ft)ft[Wn].length=Pt;Ft.probesSH.value=ft.textures,Ft.probesMin.value=ft.min,Ft.probesMax.value=ft.max,Ft.probesResolution.value=ft.resolution}zs.upload(L,uh(ye),Ft,Ne)}if(U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(zs.upload(L,uh(ye),Ft,Ne),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Ze.setValue(L,"center",O.center),Ze.setValue(L,"modelViewMatrix",O.modelViewMatrix),Ze.setValue(L,"normalMatrix",O.normalMatrix),Ze.setValue(L,"modelMatrix",O.matrixWorld),U.uniformsGroups!==void 0){let ft=U.uniformsGroups;for(let Pt=0,Wn=ft.length;Pt<Wn;Pt++){let ph=ft[Pt];be.update(ph,Ht),be.bind(ph,Ht)}}return Ht}function of(x,C){x.ambientLightColor.needsUpdate=C,x.lightProbe.needsUpdate=C,x.sunLights.needsUpdate=C,x.sunLightShadows.needsUpdate=C,x.directionalLights.needsUpdate=C,x.directionalLightShadows.needsUpdate=C,x.pointLights.needsUpdate=C,x.pointLightShadows.needsUpdate=C,x.spotLights.needsUpdate=C,x.spotLightShadows.needsUpdate=C,x.rectAreaLights.needsUpdate=C,x.hemisphereLights.needsUpdate=C}function lf(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(x,C,B){let U=we.get(x);U.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,U.__autoAllocateDepthBuffer===!1&&(U.__useRenderToTexture=!1),we.get(x.texture).__webglTexture=C,we.get(x.depthTexture).__webglTexture=U.__autoAllocateDepthBuffer?void 0:B,U.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,C){let B=we.get(x);B.__webglFramebuffer=C,B.__useDefaultFramebuffer=C===void 0},this.setRenderTarget=function(x,C=0,B=0){te=x,Z=C,V=B;let U=null,O=!1,he=!1;if(x){let le=we.get(x);if(le.__useDefaultFramebuffer!==void 0){ue.bindFramebuffer(L.FRAMEBUFFER,le.__webglFramebuffer),Q.copy(x.viewport),Me.copy(x.scissor),De=x.scissorTest,ue.viewport(Q),ue.scissor(Me),ue.setScissorTest(De),G=-1;return}else if(le.__webglFramebuffer===void 0)Ne.setupRenderTarget(x);else if(le.__hasExternalTextures)Ne.rebindTextures(x,we.get(x.texture).__webglTexture,we.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let Ue=x.depthTexture;if(le.__boundDepthTexture!==Ue){if(Ue!==null&&we.has(Ue)&&(x.width!==Ue.image.width||x.height!==Ue.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ne.setupDepthRenderbuffer(x)}}let ge=x.texture;(ge.isData3DTexture||ge.isDataArrayTexture||ge.isCompressedArrayTexture)&&(he=!0);let Se=we.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Se[C])?U=Se[C][B]:U=Se[C],O=!0):x.samples>0&&Ne.useMultisampledRTT(x)===!1?U=we.get(x).__webglMultisampledFramebuffer:Array.isArray(Se)?U=Se[B]:U=Se,Q.copy(x.viewport),Me.copy(x.scissor),De=x.scissorTest}else Q.copy(Re).multiplyScalar(me).floor(),Me.copy(et).multiplyScalar(me).floor(),De=it;if(B!==0&&(U=q),ue.bindFramebuffer(L.FRAMEBUFFER,U)&&ue.drawBuffers(x,U),ue.viewport(Q),ue.scissor(Me),ue.setScissorTest(De),O){let le=we.get(x.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+C,le.__webglTexture,B)}else if(he){let le=C;for(let ge=0;ge<x.textures.length;ge++){let Se=we.get(x.textures[ge]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+ge,Se.__webglTexture,B,le)}}else if(x!==null&&B!==0){let le=we.get(x.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,le.__webglTexture,B)}G=-1};function fh(x){let C=we.get(x);return(C.__readFormat!==x.format||C.__readType!==x.type)&&(C.__readFormat=x.format,C.__readType=x.type,C.__formatReadable=ht.textureFormatReadable(x.format),C.__typeReadable=ht.textureTypeReadable(x.type)),C}this.readRenderTargetPixels=function(x,C,B,U,O,he,_e,le=0){if(!(x&&x.isWebGLRenderTarget)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=we.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&_e!==void 0&&(ge=ge[_e],Array.isArray(ge)&&(ge=ge[0])),ge){ue.bindFramebuffer(L.FRAMEBUFFER,ge);try{let Se=x.textures[le],Ue=Se.format,qe=Se.type;x.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+le);let xe=fh(Se);if(xe.__formatReadable===!1){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(xe.__typeReadable===!1){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=x.width-U&&B>=0&&B<=x.height-O&&L.readPixels(C,B,U,O,ie.convert(Ue),ie.convert(qe),he)}finally{let Se=te!==null?we.get(te).__webglFramebuffer:null;ue.bindFramebuffer(L.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(x,C,B,U,O,he,_e,le=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=we.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&_e!==void 0&&(ge=ge[_e],Array.isArray(ge)&&(ge=ge[0])),ge)if(C>=0&&C<=x.width-U&&B>=0&&B<=x.height-O){ue.bindFramebuffer(L.FRAMEBUFFER,ge);let Se=x.textures[le],Ue=Se.format,qe=Se.type;x.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+le);let xe=fh(Se);if(xe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(xe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $e=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,$e),L.bufferData(L.PIXEL_PACK_BUFFER,he.byteLength,L.STREAM_READ),L.readPixels(C,B,U,O,ie.convert(Ue),ie.convert(qe),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let xt=te!==null?we.get(te).__webglFramebuffer:null;ue.bindFramebuffer(L.FRAMEBUFFER,xt);let at=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await wu(L,at,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,$e),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,he),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer($e),L.deleteSync(at),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,C=null,B=0){let U=Math.pow(2,-B),O=Math.floor(x.image.width*U),he=Math.floor(x.image.height*U),_e=C!==null?C.x:0,le=C!==null?C.y:0;Ne.setTexture2D(x,0),L.copyTexSubImage2D(L.TEXTURE_2D,B,0,0,_e,le,O,he),ue.unbindTexture()},this.copyTextureToTexture=function(x,C,B=null,U=null,O=0,he=0){let _e,le,ge,Se,Ue,qe,xe,$e,xt,at=x.isCompressedTexture?x.mipmaps[he]:x.image;if(B!==null)_e=B.max.x-B.min.x,le=B.max.y-B.min.y,ge=B.isBox3?B.max.z-B.min.z:1,Se=B.min.x,Ue=B.min.y,qe=B.isBox3?B.min.z:0;else{let Ze=Math.pow(2,-O);_e=Math.floor(at.width*Ze),le=Math.floor(at.height*Ze),x.isDataArrayTexture?ge=at.depth:x.isData3DTexture?ge=Math.floor(at.depth*Ze):ge=1,Se=0,Ue=0,qe=0}U!==null?(xe=U.x,$e=U.y,xt=U.z):(xe=0,$e=0,xt=0);let st=ie.convert(C.format),Vt=ie.convert(C.type),ye;C.isData3DTexture?(Ne.setTexture3D(C,0),ye=L.TEXTURE_3D):C.isDataArrayTexture||C.isCompressedArrayTexture?(Ne.setTexture2DArray(C,0),ye=L.TEXTURE_2D_ARRAY):(Ne.setTexture2D(C,0),ye=L.TEXTURE_2D),ue.activeTexture(L.TEXTURE0),ue.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,C.flipY),ue.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),ue.pixelStorei(L.UNPACK_ALIGNMENT,C.unpackAlignment);let Kt=ue.getParameter(L.UNPACK_ROW_LENGTH),Je=ue.getParameter(L.UNPACK_IMAGE_HEIGHT),Ri=ue.getParameter(L.UNPACK_SKIP_PIXELS),Ht=ue.getParameter(L.UNPACK_SKIP_ROWS),Yr=ue.getParameter(L.UNPACK_SKIP_IMAGES);ue.pixelStorei(L.UNPACK_ROW_LENGTH,at.width),ue.pixelStorei(L.UNPACK_IMAGE_HEIGHT,at.height),ue.pixelStorei(L.UNPACK_SKIP_PIXELS,Se),ue.pixelStorei(L.UNPACK_SKIP_ROWS,Ue),ue.pixelStorei(L.UNPACK_SKIP_IMAGES,qe);let li=x.isDataArrayTexture||x.isData3DTexture,Ci=C.isDataArrayTexture||C.isData3DTexture;if(x.isDepthTexture){let Ze=we.get(x),Ft=we.get(C),bn=we.get(Ze.__renderTarget),ft=we.get(Ft.__renderTarget);ue.bindFramebuffer(L.READ_FRAMEBUFFER,bn.__webglFramebuffer),ue.bindFramebuffer(L.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let Pt=0;Pt<ge;Pt++)li&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,we.get(x).__webglTexture,O,qe+Pt),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,we.get(C).__webglTexture,he,xt+Pt)),L.blitFramebuffer(Se,Ue,Se+_e,Ue+le,xe,$e,xe+_e,$e+le,L.DEPTH_BUFFER_BIT,L.NEAREST);ue.bindFramebuffer(L.READ_FRAMEBUFFER,null),ue.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(O!==0||x.isRenderTargetTexture||we.has(x)){let Ze=we.get(x),Ft=we.get(C);ue.bindFramebuffer(L.READ_FRAMEBUFFER,P),ue.bindFramebuffer(L.DRAW_FRAMEBUFFER,W);for(let bn=0;bn<ge;bn++)li?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ze.__webglTexture,O,qe+bn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ze.__webglTexture,O),Ci?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ft.__webglTexture,he,xt+bn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ft.__webglTexture,he),O!==0?L.blitFramebuffer(Se,Ue,Se+_e,Ue+le,xe,$e,xe+_e,$e+le,L.COLOR_BUFFER_BIT,L.NEAREST):Ci?L.copyTexSubImage3D(ye,he,xe,$e,xt+bn,Se,Ue,_e,le):L.copyTexSubImage2D(ye,he,xe,$e,Se,Ue,_e,le);ue.bindFramebuffer(L.READ_FRAMEBUFFER,null),ue.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Ci?x.isDataTexture||x.isData3DTexture?L.texSubImage3D(ye,he,xe,$e,xt,_e,le,ge,st,Vt,at.data):C.isCompressedArrayTexture?L.compressedTexSubImage3D(ye,he,xe,$e,xt,_e,le,ge,st,at.data):L.texSubImage3D(ye,he,xe,$e,xt,_e,le,ge,st,Vt,at):x.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,he,xe,$e,_e,le,st,Vt,at.data):x.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,he,xe,$e,at.width,at.height,st,at.data):L.texSubImage2D(L.TEXTURE_2D,he,xe,$e,_e,le,st,Vt,at);ue.pixelStorei(L.UNPACK_ROW_LENGTH,Kt),ue.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Je),ue.pixelStorei(L.UNPACK_SKIP_PIXELS,Ri),ue.pixelStorei(L.UNPACK_SKIP_ROWS,Ht),ue.pixelStorei(L.UNPACK_SKIP_IMAGES,Yr),he===0&&C.generateMipmaps===!0&&C.mipmapsAutoUpdate===!0&&L.generateMipmap(ye),ue.unbindTexture()},this.initRenderTarget=function(x){we.get(x).__webglFramebuffer===void 0&&Ne.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Ne.setTextureCube(x,0):x.isData3DTexture?Ne.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Ne.setTexture2DArray(x,0):Ne.setTexture2D(x,0),ue.unbindTexture()},this.resetState=function(){Z=0,V=0,te=null,ue.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}};var bi=(n,e,t,i,s,r,a)=>({id:n,name:e,type:"planet",R:t,color:i,tex:n,orbit:{t:"jpl",el:s,rate:r},...a}),Mt=(n,e,t,i,s,r,a)=>({id:n,name:e,type:"moon",parent:t,R:i,tex:n,color:"#c9c4bb",orbit:{a:s,P:r},...a}),gt=[{id:"sun",name:"Slunce",type:"star",R:695700,color:"#ffd76a",tex:"sun",rot:609.12,pole:[286.13,63.87],g:274,mass:333e3,temp:"5 500 \xB0C na povrchu",moons:null,tag:"Na\u0161e hv\u011Bzda",k:["Slunce je hv\u011Bzda. Je tak velk\xE9, \u017Ee by se do n\u011Bj ve\u0161lo 1 300 000 Zem\xED.","Sv\u011Btlo ze Slunce k n\xE1m let\xED 8 minut a 20 vte\u0159in.","Uvnit\u0159 m\xE1 15 milion\u016F stup\u0148\u016F. Vyr\xE1b\xED tam z vod\xEDku helium, a proto sv\xEDt\xED."],a:"Hv\u011Bzda spektr\xE1ln\xED t\u0159\xEDdy G2V. Obsahuje 99,86 % hmotnosti cel\xE9 soustavy. V j\xE1dru p\u0159i 15 milionech K prob\xEDh\xE1 f\xFAze vod\xEDku na helium; ka\u017Edou sekundu se asi 4 miliony tun hmoty p\u0159em\u011Bn\xED na energii."},bi("mercury","Merkur",2439.7,"#b9a48c",[.38709927,.20563593,7.00497902,252.2503235,77.45779628,48.33076593],[37e-8,1906e-8,-.00594749,149472.67411175,.16047689,-.12534081],{rot:1407.6,pole:[281.01,61.41],g:3.7,mass:.0553,temp:"\u2212180 a\u017E 430 \xB0C",moons:0,tilt:.03,tag:"Mal\xFD sprinter u Slunce",k:["Nejmen\u0161\xED planeta a nejbl\xED\u017E Slunci.","Rok tu trv\xE1 jen 88 dn\xED. Zato od jednoho v\xFDchodu Slunce k druh\xE9mu uplyne 176 dn\xED.","Ve dne je tu 430 \xB0C, v noci \u2212180 \xB0C. Nem\xE1 vzduch, kter\xFD by teplo udr\u017Eel."],a:"Rotace a ob\u011Bh jsou v rezonanci 3:2, t\u0159i oto\u010Dky p\u0159ipadaj\xED na dva ob\u011Bhy. \u017Delezn\xE9 j\xE1dro zab\xEDr\xE1 asi 85 % polom\u011Bru planety. V trvale zast\xEDn\u011Bn\xFDch kr\xE1terech u p\xF3l\u016F le\u017E\xED vodn\xED led."}),bi("venus","Venu\u0161e",6051.8,"#e8c98a",[.72333566,.00677672,3.39467605,181.9790995,131.60246718,76.67984255],[39e-7,-4107e-8,-7889e-7,58517.81538729,.00268329,-.27769418],{rot:-5832.5,pole:[272.76,67.16],g:8.87,mass:.815,temp:"464 \xB0C",moons:0,tilt:177.4,atm:["#ffe2a0",.9],tag:"\u017Dhav\xE9 dvoj\u010De Zem\u011B",k:["Nej\u017Ehav\u011Bj\u0161\xED planeta: 464 \xB0C. Roztavilo by se tu olovo.","To\u010D\xED se obr\xE1cen\u011B ne\u017E ostatn\xED planety. Slunce tu vych\xE1z\xED na z\xE1pad\u011B.","Den je tu del\u0161\xED ne\u017E rok!"],a:"Atmosf\xE9ra z CO\u2082 s tlakem 92 bar dr\u017E\xED sklen\xEDkov\xFDm efektem na povrchu 464 \xB0C. Rotace je retrogr\xE1dn\xED a trv\xE1 243 dn\xED, tedy d\xE9le ne\u017E ob\u011Bh (225 dn\xED). Oblaka tvo\u0159\xED kapi\u010Dky kyseliny s\xEDrov\xE9."}),bi("earth","Zem\u011B",6371,"#5fb4ff",[1.00000261,.01671123,-1531e-8,100.46457166,102.93768193,0],[562e-8,-4392e-8,-.01294668,35999.37244981,.32327364,0],{rot:23.9345,pole:[0,90],g:9.81,mass:1,temp:"15 \xB0C",moons:1,tilt:23.44,atm:["#6fb7ff",1],tag:"N\xE1\u0161 domov",k:["Jedin\xE9 m\xEDsto, o kter\xE9m v\xEDme, \u017Ee na n\u011Bm je \u017Eivot.","V\xEDc ne\u017E dv\u011B t\u0159etiny povrchu pokr\xFDv\xE1 oce\xE1n.","Osa Zem\u011B je naklon\u011Bn\xE1. Proto m\xE1me l\xE9to a zimu."],a:"Nejv\u011Bt\u0161\xED z kamenn\xFDch planet a nejhust\u0161\xED planeta soustavy (5,51 g/cm\xB3). Sklon osy 23,4\xB0 zp\u016Fsobuje ro\u010Dn\xED obdob\xED. Magnetick\xE9 pole chr\xE1n\xED atmosf\xE9ru p\u0159ed slune\u010Dn\xEDm v\u011Btrem."}),bi("mars","Mars",3389.5,"#e0714a",[1.52371034,.0933941,1.84969142,-4.55343205,-23.94362959,49.55953891],[1847e-8,7882e-8,-.00813131,19140.30268499,.44441088,-.29257343],{rot:24.6229,pole:[317.68,52.89],g:3.71,mass:.107,temp:"\u221263 \xB0C",moons:2,tilt:25.19,atm:["#ffb38a",.35],tag:"Rud\xE1 planeta",k:["Je \u010Derven\xFD, proto\u017Ee m\xE1 v prachu rez.","Olympus Mons je nejvy\u0161\u0161\xED sopka soustavy. M\u011B\u0159\xED 22 km, skoro t\u0159ikr\xE1t v\xEDc ne\u017E Mount Everest.","Den tu trv\xE1 skoro stejn\u011B jako u n\xE1s: 24 hodin a 37 minut."],a:"\u0158\xEDdk\xE1 atmosf\xE9ra z CO\u2082 m\xE1 0,6 % tlaku zemsk\xE9. Ka\u0148on Valles Marineris m\u011B\u0159\xED p\u0159es 4 000 km. Pol\xE1rn\xED \u010Depi\u010Dky jsou z vodn\xEDho a such\xE9ho ledu; koryta a miner\xE1ly dokl\xE1daj\xED d\xE1vnou kapalnou vodu."}),bi("jupiter","Jupiter",69911,"#e3b78a",[5.202887,.04838624,1.30439695,34.39644051,14.72847983,100.47390909],[-11607e-8,-13253e-8,-.00183714,3034.74612775,.21252668,.20469106],{rot:9.925,pole:[268.06,64.5],g:24.79,mass:317.8,temp:"\u2212110 \xB0C (vrcholky oblak\u016F)",moons:115,tilt:3.13,squash:[1.022,.956],tag:"Kr\xE1l planet",k:["Nejv\u011Bt\u0161\xED planeta. Ve\u0161lo by se do n\u011Bj 1 300 Zem\xED.","Velk\xE1 rud\xE1 skvrna je bou\u0159e v\u011Bt\u0161\xED ne\u017E Zem\u011B. Zu\u0159\xED u\u017E stovky let.","Nem\xE1 pevn\xFD povrch, na kter\xE9m by se dalo st\xE1t. Je hlavn\u011B z plynu."],a:"Plynn\xFD obr z vod\xEDku a helia, 2,5\xD7 hmotn\u011Bj\u0161\xED ne\u017E v\u0161echny ostatn\xED planety dohromady. Oto\u010D\xED se za necel\xFDch 10 hodin, tak\u017Ee je viditeln\u011B zplo\u0161t\u011Bl\xFD. M\xE1 siln\xE9 magnetick\xE9 pole a 115 zn\xE1m\xFDch m\u011Bs\xEDc\u016F (jaro 2026)."}),bi("saturn","Saturn",58232,"#e8d29a",[9.53667594,.05386179,2.48599187,49.95424423,92.59887831,113.66242448],[-.0012506,-50991e-8,.00193609,1222.49362201,-.41897216,-.28867794],{rot:10.656,pole:[40.59,83.54],g:10.44,mass:95.16,temp:"\u2212140 \xB0C (vrcholky oblak\u016F)",moons:292,tilt:26.73,squash:[1.035,.934],ring:"saturn",tag:"P\xE1n prstenc\u016F",k:["Prstence jsou z miliard kousk\u016F ledu. N\u011Bkter\xE9 jsou jako zrnko p\xEDsku, jin\xE9 jako d\u016Fm.","Je tak lehk\xFD, \u017Ee by plaval na vod\u011B. Jen by to cht\u011Blo opravdu velk\xFD baz\xE9n.","M\xE1 nejv\xEDc m\u011Bs\xEDc\u016F ze v\u0161ech planet: skoro 300."],a:"Pr\u016Fm\u011Brn\xE1 hustota 0,69 g/cm\xB3 je ni\u017E\u0161\xED ne\u017E u vody. Hlavn\xED prstence sahaj\xED 140 000 km od st\u0159edu planety, tlust\xE9 jsou ale jen des\xEDtky metr\u016F. 292 zn\xE1m\xFDch m\u011Bs\xEDc\u016F (jaro 2026)."}),bi("uranus","Uran",25362,"#9fe3e8",[19.18916464,.04725744,.77263783,313.23810451,170.9542763,74.01692503],[-.00196176,-4397e-8,-.00242939,428.48202785,.40805281,.04240589],{rot:-17.24,pole:[257.31,-15.18],g:8.87,mass:14.54,temp:"\u2212195 \xB0C",moons:29,tilt:97.77,ring:"uranus",tag:"Planeta, kter\xE1 le\u017E\xED na boku",k:["Le\u017E\xED na boku a kolem Slunce se kut\xE1l\xED jako m\xED\u010D.","Jedno ro\u010Dn\xED obdob\xED tu trv\xE1 21 let.","Je to ledov\xFD obr. Mrzne tu a\u017E \u2212195 \xB0C."],a:"Osa je sklon\u011Bn\xE1 o 97,8\xB0, z\u0159ejm\u011B po d\xE1vn\xE9 sr\xE1\u017Ece. Ledov\xFD obr s pl\xE1\u0161t\u011Bm z vody, \u010Dpavku a methanu; methan v atmosf\xE9\u0159e pohlcuje \u010Derven\xE9 sv\u011Btlo. M\xE1 13 \xFAzk\xFDch tmav\xFDch prstenc\u016F."}),bi("neptune","Neptun",24622,"#5b7dff",[30.06992276,.00859048,1.77004347,-55.12002969,44.96476227,131.78422574],[26291e-8,5105e-8,35372e-8,218.45945325,-.32241464,-.00508664],{rot:16.11,pole:[299.36,43.46],g:11.15,mass:17.15,temp:"\u2212200 \xB0C",moons:16,tilt:28.32,tag:"Modr\xFD obr na konci cesty",k:["Nejvzd\xE1len\u011Bj\u0161\xED planeta. Jeden ob\u011Bh kolem Slunce trv\xE1 165 let.","Fouk\xE1 tu nejsiln\u011Bj\u0161\xED v\xEDtr v soustav\u011B: a\u017E 2 000 km za hodinu.","Lid\xE9 ho nejd\u0159\xEDv vypo\u010D\xEDtali a teprve potom na\u0161li dalekohledem."],a:"Polohu p\u0159edpov\u011Bd\u011Bl Le Verrier z poruch dr\xE1hy Uranu, planeta byla nalezena roku 1846. V\u011Btry dosahuj\xED 2 100 km/h. Neptun vyza\u0159uje 2,6\xD7 v\xEDc energie, ne\u017E p\u0159ij\xEDm\xE1 od Slunce."}),Mt("moon","M\u011Bs\xEDc","earth",1737.4,384400,27.3217,{g:1.62,mass:.0123,temp:"\u2212170 a\u017E 120 \xB0C",ecl:!0,tag:"Soused Zem\u011B",k:["Po M\u011Bs\xEDci u\u017E chodilo 12 lid\xED.","Ukazuje n\xE1m po\u0159\xE1d stejnou tv\xE1\u0159.","V\u0161echno tu v\xE1\u017E\xED \u0161estkr\xE1t m\xE9n\u011B. Vysko\u010D\xED\u0161 \u0161estkr\xE1t v\xFD\u0161."],a:"Vznikl nejsp\xED\u0161 po sr\xE1\u017Ece Zem\u011B s t\u011Blesem velikosti Marsu p\u0159ed 4,5 miliardy let. M\xE1 v\xE1zanou rotaci a vzdaluje se o 3,8 cm ro\u010Dn\u011B. Slapy, kter\xE9 p\u016Fsob\xED, brzd\xED rotaci Zem\u011B."}),Mt("phobos","Phobos","mars",11.3,9376,.31891,{g:.0057,temp:"\u221240 \xB0C",tag:"M\u011Bs\xEDc jako brambora",k:["Vypad\xE1 jako brambora.","Ob\xEDh\xE1 tak n\xEDzko a rychle, \u017Ee na Marsu vych\xE1z\xED na z\xE1pad\u011B, dvakr\xE1t za den."],a:"Ob\xEDh\xE1 jen 6 000 km nad povrchem, rychleji, ne\u017E Mars rotuje. Slapy ho stahuj\xED n\xED\u017E; za des\xEDtky milion\u016F let se rozpadne."}),Mt("deimos","Deimos","mars",6.2,23463,1.26244,{g:.003,temp:"\u221240 \xB0C",tag:"Mali\u010Dk\xFD m\u011Bs\xEDc Marsu",k:["Je \u0161irok\xFD jen 12 km. Obe\u0161el(a) bys ho za jeden den.","M\xE1 tak slabou p\u0159ita\u017Elivost, \u017Ee by se z n\u011Bj dalo s rozb\u011Bhem odsko\u010Dit do vesm\xEDru."],a:"Pr\u016Fm\u011Br asi 12 km, \xFAnikov\xE1 rychlost 5,6 m/s. Zda jsou Phobos a Deimos zachycen\xE9 planetky, nebo trosky po impaktu, nen\xED rozhodnuto."}),Mt("io","Io","jupiter",1821.6,421700,1.769138,{g:1.796,mass:.015,temp:"\u2212130 \xB0C",tag:"Sope\u010Dn\xFD m\u011Bs\xEDc",k:["M\xE1 p\u0159es 400 \u010Dinn\xFDch sopek. Je to nejsope\u010Dn\u011Bj\u0161\xED m\xEDsto v cel\xE9 soustav\u011B.","Je \u017Elut\xFD a oran\u017Eov\xFD od s\xEDry."],a:"Slapov\xE9 hn\u011Bten\xED v rezonanci 4:2:1 s Europou a Ganymedem poh\xE1n\xED p\u0159es 400 aktivn\xEDch vulk\xE1n\u016F. V\xFDtrysky sahaj\xED stovky kilometr\u016F vysoko."}),Mt("europa","Europa","jupiter",1560.8,671100,3.551181,{g:1.314,mass:.008,temp:"\u2212160 \xB0C",tag:"Oce\xE1n pod ledem",k:["Pod ledovou k\u016Frou m\xE1 oce\xE1n. Je v n\u011Bm v\xEDc vody ne\u017E ve v\u0161ech mo\u0159\xEDch Zem\u011B.","V\u011Bdci tu hledaj\xED podm\xEDnky pro \u017Eivot."],a:"Pod 15\u201325 km ledu le\u017E\xED slan\xFD oce\xE1n hlubok\xFD kolem 100 km. M\xED\u0159\xED sem sonda Europa Clipper, p\u0159\xEDlet 2030."}),Mt("ganymede","Ganymed","jupiter",2634.1,1070400,7.154553,{g:1.428,mass:.0248,temp:"\u2212160 \xB0C",tag:"Nejv\u011Bt\u0161\xED m\u011Bs\xEDc",k:["Nejv\u011Bt\u0161\xED m\u011Bs\xEDc v soustav\u011B. Je v\u011Bt\u0161\xED ne\u017E planeta Merkur.","Jako jedin\xFD m\u011Bs\xEDc m\xE1 vlastn\xED magnetick\xE9 pole."],a:"Pr\u016Fm\u011Br 5 268 km. Jedin\xFD m\u011Bs\xEDc s vlastn\xEDm magnetick\xFDm polem; pod povrchem m\xE1 vrstven\xFD slan\xFD oce\xE1n. C\xEDl evropsk\xE9 sondy JUICE."}),Mt("callisto","Callisto","jupiter",2410.3,1882700,16.689018,{g:1.235,mass:.018,temp:"\u2212140 \xB0C",tag:"Sv\u011Bt kr\xE1ter\u016F",k:["M\xE1 nejv\xEDc kr\xE1ter\u016F ze v\u0161ech t\u011Bles v soustav\u011B.","Jeho povrch se 4 miliardy let skoro nezm\u011Bnil."],a:"Nejhust\u011Bji kr\xE1tery pokryt\xFD povrch v soustav\u011B, geologicky mrtv\xFD. Ob\xEDh\xE1 mimo hlavn\xED radia\u010Dn\xED p\xE1sy Jupiteru."}),Mt("mimas","Mimas","saturn",198.2,185540,.942422,{g:.064,temp:"\u2212200 \xB0C",tag:"M\u011Bs\xEDc s ob\u0159\xEDm kr\xE1terem",k:["M\xE1 kr\xE1ter p\u0159es t\u0159etinu sv\xE9ho pr\u016Fm\u011Bru.","Kdyby byl n\xE1raz o trochu siln\u011Bj\u0161\xED, m\u011Bs\xEDc by se rozpadl."],a:"Kr\xE1ter Herschel m\xE1 t\u0159etinu pr\u016Fm\u011Bru m\u011Bs\xEDce. Librace nazna\u010Duj\xED mlad\xFD podpovrchov\xFD oce\xE1n."}),Mt("enceladus","Enceladus","saturn",252.1,238040,1.370218,{g:.113,temp:"\u2212200 \xB0C",tag:"M\u011Bs\xEDc s gejz\xEDry",k:["Z ji\u017En\xEDho p\xF3lu mu st\u0159\xEDkaj\xED do vesm\xEDru gejz\xEDry vody.","Je b\xEDl\xFD jako \u010Derstv\xFD sn\xEDh a odr\xE1\u017E\xED skoro v\u0161echno sv\u011Btlo."],a:"Gejz\xEDry z \u201Etyg\u0159\xEDch pruh\u016F\u201C u ji\u017En\xEDho p\xF3lu syt\xED Saturn\u016Fv prstenec E. Sonda Cassini v nich na\u0161la soli, organick\xE9 l\xE1tky a vod\xEDk z hydroterm\xE1ln\xEDch zdroj\u016F."}),Mt("tethys","Tethys","saturn",531.1,294670,1.887802,{g:.146,temp:"\u2212187 \xB0C",tag:"Koule z ledu",k:["Je skoro cel\xFD z vodn\xEDho ledu.","M\xE1 ka\u0148on, kter\xFD se t\xE1hne p\u0159es t\u0159i \u010Dtvrtiny m\u011Bs\xEDce."],a:"Hustota 0,98 g/cm\xB3, tedy t\xE9m\u011B\u0159 \u010Dist\xFD vodn\xED led. Ka\u0148on Ithaca Chasma m\u011B\u0159\xED 2 000 km."}),Mt("dione","Dione","saturn",561.4,377420,2.736915,{g:.232,temp:"\u2212186 \xB0C",tag:"Ledov\xE9 \xFAtesy",k:["Ledov\xFD m\u011Bs\xEDc s dlouh\xFDmi sv\u011Btl\xFDmi \xFAtesy.","Kolem Saturnu ob\u011Bhne za necel\xE9 t\u0159i dny."],a:"Sv\u011Btl\xE9 pruhy jsou ledov\xE9 \xFAtesy tektonick\xE9ho p\u016Fvodu. Na dr\xE1ze ji doprov\xE1zej\xED troj\xE1nsk\xE9 m\u011Bs\xEDce Helene a Polydeuces."}),Mt("rhea","Rhea","saturn",763.8,527070,4.518212,{g:.264,temp:"\u2212175 \xB0C",tag:"Druh\xFD nejv\u011Bt\u0161\xED m\u011Bs\xEDc Saturnu",k:["Druh\xFD nejv\u011Bt\u0161\xED m\u011Bs\xEDc Saturnu.","Je to koule z ledu a kamen\xED pln\xE1 kr\xE1ter\u016F."],a:"Pr\u016Fm\u011Br 1 528 km, ze t\u0159\xED \u010Dtvrtin led. M\xE1 velmi \u0159\xEDdkou exosf\xE9ru z kysl\xEDku a CO\u2082."}),Mt("titan","Titan","saturn",2574.7,1221870,15.945421,{g:1.352,mass:.0225,temp:"\u2212179 \xB0C",atm:["#ffb060",1],tag:"M\u011Bs\xEDc s oran\u017Eovou oblohou",k:["M\xE1 hust\xFD oran\u017Eov\xFD vzduch a jezera. M\xEDsto vody je v nich kapaln\xFD methan.","V roce 2005 tu p\u0159ist\xE1la sonda Huygens."],a:"Dus\xEDkov\xE1 atmosf\xE9ra m\xE1 tlak 1,5 bar a methanov\xFD kolob\u011Bh: mraky, d\xE9\u0161\u0165, \u0159eky i jezera. Start mise Dragonfly je pl\xE1nov\xE1n na rok 2028."}),Mt("miranda","Miranda","uranus",235.8,129900,1.413479,{g:.079,temp:"\u2212200 \xB0C",tag:"Poskl\xE1dan\xFD m\u011Bs\xEDc",k:["Vypad\xE1, jako by ji n\u011Bkdo rozbil a slepil zp\xE1tky.","M\xE1 \xFAtes vysok\xFD 20 km. P\xE1d z n\u011Bj by trval p\u0159es 10 minut."],a:"Povrch je mozaikou r\u016Fzn\u011B star\xFDch ter\xE9n\u016F (coronae). \xDAtes Verona Rupes je s v\xFD\u0161kou a\u017E 20 km nejvy\u0161\u0161\xED zn\xE1m\xFD v soustav\u011B."}),Mt("ariel","Ariel","uranus",578.9,190900,2.520379,{g:.269,temp:"\u2212200 \xB0C",tag:"Nejsv\u011Btlej\u0161\xED m\u011Bs\xEDc Uranu",k:["Nejsv\u011Btlej\u0161\xED m\u011Bs\xEDc Uranu.","M\xE1 dlouh\xE1 \xFAdol\xED zalit\xE1 ledem."],a:"Nejjasn\u011Bj\u0161\xED a geologicky nejmlad\u0161\xED z velk\xFDch m\u011Bs\xEDc\u016F Uranu, s rozs\xE1hl\xFDmi ka\u0148ony a stopami kryovulkanismu."}),Mt("umbriel","Umbriel","uranus",584.7,266e3,4.144177,{g:.2,temp:"\u2212200 \xB0C",tag:"Tmav\xFD m\u011Bs\xEDc",k:["Nejtmav\u0161\xED z velk\xFDch m\u011Bs\xEDc\u016F Uranu.","Na vr\u0161ku m\xE1 z\xE1hadn\xFD sv\u011Btl\xFD krou\u017Eek."],a:"Nejtmav\u0161\xED z velk\xFDch m\u011Bs\xEDc\u016F Uranu (albedo 0,2). Sv\u011Btl\xFD prstenec na dn\u011B kr\xE1teru Wunda zat\xEDm nem\xE1 vysv\u011Btlen\xED."}),Mt("titania","Titania","uranus",788.4,436300,8.705872,{g:.379,temp:"\u2212200 \xB0C",tag:"Nejv\u011Bt\u0161\xED m\u011Bs\xEDc Uranu",k:["Nejv\u011Bt\u0161\xED m\u011Bs\xEDc Uranu.","M\u011Bs\xEDce Uranu se jmenuj\xED podle postav z divadeln\xEDch her."],a:"Pr\u016Fm\u011Br 1 577 km. Ka\u0148ony dlouh\xE9 a\u017E 1 500 km vznikly rozp\xEDn\xE1n\xEDm nitra p\u0159i tuhnut\xED."}),Mt("oberon","Oberon","uranus",761.4,583500,13.463239,{g:.346,temp:"\u2212200 \xB0C",tag:"Vzd\xE1len\xFD m\u011Bs\xEDc Uranu",k:["Nejvzd\xE1len\u011Bj\u0161\xED z velk\xFDch m\u011Bs\xEDc\u016F Uranu.","M\xE1 horu vysokou 11 km."],a:"Star\xFD povrch pokryt\xFD kr\xE1tery, jejich\u017E dna vypl\u0148uje tmav\xFD materi\xE1l. Objevil ho William Herschel roku 1787, stejn\u011B jako Titanii."}),Mt("triton","Triton","neptune",1353.4,354760,5.876854,{g:.779,mass:.00358,temp:"\u2212235 \xB0C",retro:!0,tag:"M\u011Bs\xEDc, kter\xFD ob\xEDh\xE1 pozp\xE1tku",k:["Ob\xEDh\xE1 kolem Neptunu pozp\xE1tku.","M\xE1 gejz\xEDry, kter\xE9 st\u0159\xEDkaj\xED dus\xEDk 8 km vysoko."],a:"Retrogr\xE1dn\xED dr\xE1ha ukazuje na zachycen\xE9 t\u011Bleso z Kuiperova p\xE1su. Povrch z dus\xEDkov\xE9ho ledu m\xE1 \u2212235 \xB0C; Voyager 2 tu pozoroval aktivn\xED gejz\xEDry."}),{id:"ceres",name:"Ceres",type:"dwarf",R:469.7,color:"#b8b0a6",tex:"ceres",orbit:{t:"ep",a:2.7675,e:.0758,i:10.593,O:80.33,w:73.6,M0:95.99,ep:24570005e-1},rot:9.074,pole:[291.42,66.76],g:.28,mass:16e-5,temp:"\u2212105 \xB0C",moons:0,tilt:4,tag:"Kr\xE1lovna p\xE1su planetek",k:["Nejv\u011Bt\u0161\xED t\u011Bleso v p\xE1su planetek mezi Marsem a Jupiterem.","M\xE1 z\xE1\u0159iv\u011B b\xEDl\xE9 skvrny ze soli."],a:"Obsahuje asi t\u0159etinu hmotnosti hlavn\xEDho p\xE1su. Sv\u011Btl\xE9 skvrny v kr\xE1teru Occator jsou uhli\u010Ditan sodn\xFD ze solanek. Zkoumala ji sonda Dawn (2015\u20132018)."},{id:"pluto",name:"Pluto",type:"dwarf",R:1188.3,color:"#d9c3a6",tex:"pluto",orbit:{t:"jpl",el:[39.48211675,.2488273,17.14001206,238.92903833,224.06891629,110.30393684],rate:[-31596e-8,517e-7,4818e-8,145.20780515,-.04062942,-.01183482]},rot:153.29,pole:[132.99,-6.16],g:.62,mass:.00218,temp:"\u2212229 \xB0C",moons:5,tilt:122.5,tag:"Trpasli\u010D\xED planeta se srdcem",k:["M\xE1 na povrchu obrovsk\xE9 ledov\xE9 srdce.","Do roku 2006 se po\u010D\xEDtal mezi planety.","Je men\u0161\xED ne\u017E n\xE1\u0161 M\u011Bs\xEDc."],a:"Sputnik Planitia je p\xE1nev vypln\u011Bn\xE1 dus\xEDkov\xFDm ledem s konvektivn\xEDmi bu\u0148kami. \u0158\xEDdk\xE1 dus\xEDkov\xE1 atmosf\xE9ra p\u0159i vzdalov\xE1n\xED od Slunce z\u010D\xE1sti vymrz\xE1. Sonda New Horizons tudy prolet\u011Bla 14. 7. 2015."},Mt("charon","Charon","pluto",606,19591,6.38723,{g:.288,temp:"\u2212220 \xB0C",tag:"Par\u0165\xE1k Pluta",k:["Je skoro polovi\u010Dn\xED ne\u017E Pluto. Tan\u010D\xED spolu jako dvojplaneta.","Oba si po\u0159\xE1d ukazuj\xED stejnou tv\xE1\u0159."],a:"M\xE1 polovi\u010Dn\xED pr\u016Fm\u011Br Pluta, t\u011B\u017Ei\u0161t\u011B soustavy le\u017E\xED mimo Pluto. Rotace obou t\u011Bles je v\xE1zan\xE1 s periodou 6,39 dne. Tmav\xE1 pol\xE1rn\xED oblast Mordor Macula je z tholin\u016F."}),{id:"haumea",name:"Haumea",type:"dwarf",R:780,color:"#d8dde6",tex:"haumea",orbit:{t:"ep",a:43.18,e:.195,i:28.21,O:122.16,w:238.8,M0:217.8,ep:24590005e-1},rot:3.915,g:.4,temp:"\u2212240 \xB0C",moons:2,tilt:126,squash:[1.3,.62],tag:"Vesm\xEDrn\xE9 vejce",k:["To\u010D\xED se tak rychle, \u017Ee m\xE1 tvar vejce. Den tu trv\xE1 jen 4 hodiny.","M\xE1 dva m\u011Bs\xEDce a prstenec."],a:"Rotace za 3,9 h ji prot\xE1hla do trojos\xE9ho elipsoidu. M\xE1 prstenec a m\u011Bs\xEDce Hi\u02BBiaka a Namaka. Textura je um\u011Bleck\xE1 p\u0159edstava, zbl\xEDzka ji \u017E\xE1dn\xE1 sonda nevid\u011Bla."},{id:"makemake",name:"Makemake",type:"dwarf",R:715,color:"#d6a98c",tex:"makemake",orbit:{t:"ep",a:45.43,e:.161,i:28.98,O:79.62,w:294.8,M0:165.5,ep:24590005e-1},rot:22.83,g:.5,temp:"\u2212240 \xB0C",moons:1,tilt:20,tag:"Zmrzl\xFD sv\u011Bt za Neptunem",k:["Jmenuje se podle boha z Velikono\u010Dn\xEDho ostrova.","Je na\u010Dervenal\xE1 a cel\xE1 zamrzl\xE1."],a:"Povrch pokr\xFDv\xE1 methanov\xFD led. Mal\xFD m\u011Bs\xEDc objevil Hubble\u016Fv dalekohled roku 2015. Textura je um\u011Bleck\xE1 p\u0159edstava."},{id:"eris",name:"Eris",type:"dwarf",R:1163,color:"#e6e6ee",tex:"eris",orbit:{t:"ep",a:67.86,e:.4361,i:44.04,O:35.95,w:151.6,M0:205.99,ep:24590005e-1},rot:378.9,g:.82,mass:.0028,temp:"\u2212240 \xB0C",moons:1,tilt:78,tag:"Ta, kv\u016Fli kter\xE9 Pluto p\u0159estal b\xFDt planetou",k:["Je skoro stejn\u011B velk\xE1 jako Pluto, ale ob\xEDh\xE1 mnohem d\xE1l.","Po jej\xEDm objevu se astronomov\xE9 dohodli, co je planeta. Pluto to nesplnil."],a:"O 27 % hmotn\u011Bj\u0161\xED ne\u017E Pluto. Objev (2005) vedl k definici planety IAU z roku 2006. Dr\xE1ha m\xE1 v\xFDst\u0159ednost 0,44 a sklon 44\xB0, ob\u011Bh trv\xE1 559 let. Textura je um\u011Bleck\xE1 p\u0159edstava."},{id:"halley",name:"Halleyova kometa",type:"comet",R:5.5,color:"#9fe8ff",tex:"deimos",orbit:{t:"comet",a:17.834,e:.96714,i:162.26,O:58.42,w:111.33,Tp:24464705e-1},rot:52.8,g:3e-4,temp:"podle vzd\xE1lenosti od Slunce",moons:0,tilt:30,tag:"Slavn\xE1 vlasatice",k:["Ke Slunci se vrac\xED jednou za 76 let. P\u0159\xED\u0161t\u011B v roce 2061.","Te\u010F je daleko za Neptunem a je z n\xED tmav\xE1 zmrzl\xE1 hrouda.","Ohon j\xED naroste, a\u017E ji Slunce zah\u0159eje. Zkus zrychlit \u010Das!"],a:"Periodick\xE1 kometa 1P s retrogr\xE1dn\xED dr\xE1hou (sklon 162\xB0). Af\xE9liem ve vzd\xE1lenosti 35 AU pro\u0161la v prosinci 2023, perih\xE9lium nastane 28. 7. 2061. J\xE1dro m\u011B\u0159\xED 15 \xD7 8 km. Ohon m\xED\u0159\xED v\u017Edy od Slunce."}],Or={star:"hv\u011Bzda",planet:"planeta",dwarf:"trpasli\u010D\xED planeta",moon:"m\u011Bs\xEDc",comet:"kometa"},Hs=[[0,"Kadet"],[100,"Pilot"],[250,"Navig\xE1tor"],[450,"Kapit\xE1n"],[700,"Admir\xE1l"],[1e3,"Legenda soustavy"]],pd={kid:[{id:"k1",text:"Za\u010Dni u na\u0161\xED hv\u011Bzdy. Dole\u0165 ke Slunci.",hint:"Klepni na \u017Elutou kouli uprost\u0159ed nebo na Slunce v doln\xED li\u0161t\u011B.",target:"sun"},{id:"k2",text:"Najdi planetu, na kter\xE9 bydl\xEDme.",hint:"Je modr\xE1 a je t\u0159et\xED od Slunce.",target:"earth"},{id:"k3",text:"Kter\xE1 planeta je nejv\u011Bt\u0161\xED ze v\u0161ech?",hint:"M\xE1 pruhy a velkou rudou skvrnu.",target:"jupiter"},{id:"k4",text:"Najdi planetu s nejkr\xE1sn\u011Bj\u0161\xEDmi prstenci.",hint:"Je \u0161est\xE1 od Slunce.",target:"saturn"},{id:"k5",text:"Najdi rudou planetu, po kter\xE9 jezd\xED robotick\xE1 voz\xEDtka.",hint:"Je hned za Zem\xED.",target:"mars"},{id:"k6",text:"Najdi m\u011Bs\xEDc, na kter\xE9m po\u0159\xE1d vybuchuj\xED sopky.",hint:"Ob\xEDh\xE1 kolem Jupiteru a je \u017Elut\xFD.",target:"io"},{id:"k7",text:"Nej\u017Ehav\u011Bj\u0161\xED planeta nen\xED ta nejbl\xED\u017E Slunci. Kter\xE1 to je?",hint:"Je druh\xE1 od Slunce a zahaluje ji hust\xE1 obla\u010Dnost.",target:"venus"},{id:"k8",text:"Kter\xE1 planeta le\u017E\xED na boku a kut\xE1l\xED se jako m\xED\u010D?",hint:"Je sv\u011Btle modrozelen\xE1 a sedm\xE1 od Slunce.",target:"uranus"},{id:"k9",text:"Najdi trpasli\u010D\xED planetu s ledov\xFDm srdcem.",hint:"D\u0159\xEDv to byla dev\xE1t\xE1 planeta.",target:"pluto"},{id:"k10",text:"Zjisti v Laborato\u0159i, kolik bys v\xE1\u017Eil(a) na jin\xFDch sv\u011Btech.",hint:"Otev\u0159i Laborato\u0159 a napi\u0161 svou v\xE1hu.",cond:"weigh"},{id:"k11",text:"P\u0159epni na skute\u010Dn\xE9 m\u011B\u0159\xEDtko a pod\xEDvej se, jak je vesm\xEDr pr\xE1zdn\xFD.",hint:"P\u0159ep\xEDna\u010D M\u011B\u0159\xEDtko najde\u0161 dole u \u010Dasu.",cond:"scaleTrue"},{id:"k12",text:"Zrychli \u010Das a nech Zemi ob\u011Bhnout cel\xE9 kolo kolem Slunce.",hint:"Dole p\u0159idej rychlost na m\u011Bs\xEDc za vte\u0159inu a po\u010Dkej.",cond:"year"},{id:"k13",text:"Porovnej v Laborato\u0159i dv\u011B t\u011Blesa. T\u0159eba Zemi a Slunce.",hint:"Otev\u0159i Laborato\u0159 a zm\xE1\u010Dkni Porovnat.",cond:"compare"},{id:"k14",text:"Sta\u0148 se cestovatelem: nav\u0161tiv v\u0161ech osm planet.",hint:"Merkur, Venu\u0161e, Zem\u011B, Mars, Jupiter, Saturn, Uran, Neptun.",cond:"allPlanets"}],pro:[{id:"p1",text:"Najdi t\u011Bleso s retrogr\xE1dn\xED rotac\xED, na kter\xE9m den trv\xE1 d\xE9le ne\u017E rok.",hint:"Druh\xE1 planeta od Slunce.",target:"venus"},{id:"p2",text:"Najdi jedin\xFD m\u011Bs\xEDc s hustou atmosf\xE9rou a jezery kapaln\xFDch uhlovod\xEDk\u016F.",hint:"Nejv\u011Bt\u0161\xED m\u011Bs\xEDc Saturnu.",target:"titan"},{id:"p3",text:"Najdi velk\xFD m\u011Bs\xEDc, kter\xFD ob\xEDh\xE1 proti sm\u011Bru rotace sv\xE9 planety. Nejsp\xED\u0161 jde o zajatce z Kuiperova p\xE1su.",hint:"Hledej u Neptunu.",target:"triton"},{id:"p4",text:"Najdi planetu s nejni\u017E\u0161\xED pr\u016Fm\u011Brnou hustotou. V dostate\u010Dn\u011B velk\xE9m oce\xE1nu by plavala.",hint:"0,69 g/cm\xB3 a prstence.",target:"saturn"},{id:"p5",text:"Najdi vulkanicky nejaktivn\u011Bj\u0161\xED t\u011Bleso soustavy, kter\xE9 hn\u011Btou slapy.",hint:"Nejvnit\u0159n\u011Bj\u0161\xED z Galileov\xFDch m\u011Bs\xEDc\u016F.",target:"io"},{id:"p6",text:"Najdi nejv\u011Bt\u0161\xED m\u011Bs\xEDc soustavy. Je v\u011Bt\u0161\xED ne\u017E Merkur.",hint:"T\u0159et\xED Galile\u016Fv m\u011Bs\xEDc.",target:"ganymede"},{id:"p7",text:"Najdi ledov\xFD m\u011Bs\xEDc o pr\u016Fm\u011Bru 500 km, jeho\u017E gejz\xEDry syt\xED prstenec E.",hint:"Ob\xEDh\xE1 Saturn mezi Mimasem a Tethys.",target:"enceladus"},{id:"p8",text:"Najdi jedinou trpasli\u010D\xED planetu v hlavn\xEDm p\xE1su planetek.",hint:"Zapni vrstvu trpasli\u010D\xEDch planet a hledej mezi Marsem a Jupiterem.",target:"ceres"},{id:"p9",text:"Najdi planetu s osou sklon\u011Bnou o 98\xB0.",hint:"Sedm\xE1 planeta.",target:"uranus"},{id:"p10",text:"Najdi dvojici s oboustrann\u011B v\xE1zanou rotac\xED, jej\xED\u017E t\u011B\u017Ei\u0161t\u011B le\u017E\xED mimo v\u011Bt\u0161\xED t\u011Bleso.",hint:"Trpasli\u010D\xED planeta a jej\xED velk\xFD m\u011Bs\xEDc.",target:["pluto","charon"]},{id:"p11",text:"P\u0159epni na skute\u010Dn\xE9 m\u011B\u0159\xEDtko a prohl\xE9dni si pom\u011Br velikost\xED a vzd\xE1lenost\xED.",hint:"P\u0159ep\xEDna\u010D M\u011B\u0159\xEDtko v \u010Dasov\xE9 li\u0161t\u011B.",cond:"scaleTrue"},{id:"p12",text:"Halleyova kometa je te\u010F u af\xE9lia. Posu\u0148 \u010Das tak, aby byla bl\xED\u017E ne\u017E 2 AU od Slunce.",hint:"N\xE1vrat nastane v l\xE9t\u011B 2061. Klepni na datum a zadej ho, nebo zrychli \u010Das na 10 let za sekundu.",cond:"halley"},{id:"p13",text:"Porovnej v Laborato\u0159i velikost dvou t\u011Bles.",hint:"Laborato\u0159, n\xE1stroj Porovn\xE1n\xED velikost\xED.",cond:"compare"},{id:"p14",text:"Nav\u0161tiv v\u0161ech osm planet.",hint:"Atlas ukazuje, kde u\u017E m\xE1\u0161 raz\xEDtko.",cond:"allPlanets"}]},md={kid:[{q:"Kter\xE1 planeta je nejbl\xED\u017E Slunci?",a:["Venu\u0161e","Merkur","Mars"],c:1,e:"Merkur ob\u011Bhne Slunce za pouh\xFDch 88 dn\xED."},{q:"Pro\u010D je Mars \u010Derven\xFD?",a:["Je roz\u017Ehaven\xFD","M\xE1 v prachu rez","Roste na n\u011Bm \u010Derven\xE1 tr\xE1va"],c:1,e:"Prach na Marsu obsahuje oxidy \u017Eeleza, tedy rez."},{q:"Z \u010Deho jsou Saturnovy prstence?",a:["Z kousk\u016F ledu a kamen\xED","Z plynu","Z jednoho pevn\xE9ho kruhu"],c:0,e:"Jsou to miliardy kousk\u016F ledu, od zrnek po balvany."},{q:"Co je Slunce?",a:["Planeta","Hv\u011Bzda","Velk\xFD m\u011Bs\xEDc"],c:1,e:"Slunce je hv\u011Bzda. Ostatn\xED hv\u011Bzdy jsou jen mnohem d\xE1l."},{q:"Kolik planet m\xE1 Slune\u010Dn\xED soustava?",a:["7","8","9"],c:1,e:"Osm. Pluto se od roku 2006 po\u010D\xEDt\xE1 mezi trpasli\u010D\xED planety."},{q:"Kter\xE1 planeta je nej\u017Ehav\u011Bj\u0161\xED?",a:["Merkur","Venu\u0161e","Jupiter"],c:1,e:"Venu\u0161i zah\u0159\xEDv\xE1 hust\xFD vzduch, kter\xFD nepou\u0161t\xED teplo ven."},{q:"Jak dlouho let\xED sv\u011Btlo ze Slunce na Zemi?",a:["8 minut","8 hodin","8 dn\xED"],c:0,e:"P\u0159esn\u011B 8 minut a 20 vte\u0159in."},{q:"Na kter\xE9m m\u011Bs\xEDci je nejv\xEDc sopek?",a:["Na na\u0161em M\u011Bs\xEDci","Na Titanu","Na Io"],c:2,e:"Io m\xE1 p\u0159es 400 \u010Dinn\xFDch sopek."},{q:"Kter\xE1 planeta le\u017E\xED na boku?",a:["Uran","Neptun","Saturn"],c:0,e:"Uran m\xE1 osu sklon\u011Bnou skoro o 98 stup\u0148\u016F."},{q:"Kam m\xED\u0159\xED ohon komety?",a:["Za kometou","Ke Slunci","Od Slunce"],c:2,e:"Ohon odfukuje slune\u010Dn\xED v\xEDtr, tak\u017Ee m\xED\u0159\xED v\u017Edy od Slunce."},{q:"Kde bys vysko\u010Dil(a) nejv\xFD\u0161?",a:["Na Zemi","Na M\u011Bs\xEDci","Na Jupiteru"],c:1,e:"M\u011Bs\xEDc m\xE1 \u0161estkr\xE1t slab\u0161\xED p\u0159ita\u017Elivost ne\u017E Zem\u011B."},{q:"Co je Velk\xE1 rud\xE1 skvrna na Jupiteru?",a:["Sopka","Ob\u0159\xED bou\u0159e","Mo\u0159e"],c:1,e:"Je to bou\u0159e v\u011Bt\u0161\xED ne\u017E cel\xE1 Zem\u011B."},{q:"Kter\xFD m\u011Bs\xEDc je v\u011Bt\u0161\xED ne\u017E planeta Merkur?",a:["Ganymed","Phobos","Mimas"],c:0,e:"Ganymed je nejv\u011Bt\u0161\xED m\u011Bs\xEDc v soustav\u011B."},{q:"Pro\u010D m\xE1me na Zemi l\xE9to a zimu?",a:["Zem\u011B je v l\xE9t\u011B bl\xED\u017E Slunci","Osa Zem\u011B je naklon\u011Bn\xE1","Slunce v zim\u011B sv\xEDt\xED m\xE9n\u011B"],c:1,e:"Kv\u016Fli sklonu osy dopad\xE1 sv\u011Btlo v l\xE9t\u011B strm\u011Bji a den je del\u0161\xED."}],pro:[{q:"Kter\xE1 planeta m\xE1 nejvy\u0161\u0161\xED pr\u016Fm\u011Brnou hustotu?",a:["Merkur","Zem\u011B","Venu\u0161e"],c:1,e:"Zem\u011B m\xE1 5,51 g/cm\xB3, Merkur 5,43 g/cm\xB3."},{q:"V jak\xE9 rezonanci je rotace a ob\u011Bh Merkuru?",a:["1:1","3:2","2:1"],c:1,e:"T\u0159i oto\u010Dky kolem osy na dva ob\u011Bhy kolem Slunce."},{q:"Co poh\xE1n\xED vulkanismus na Io?",a:["Radioaktivn\xED rozpad","Slapov\xE9 t\u0159en\xED","Zbytkov\xE9 teplo z akrece"],c:1,e:"V\xFDst\u0159ednost dr\xE1hy udr\u017Euje rezonance s Europou a Ganymedem."},{q:"Kolik sv\u011Bteln\xFDch minut je 1 AU?",a:["Asi 8,3","Asi 4,2","Asi 12,5"],c:0,e:"149,6 milionu km d\u011Bleno 299 792 km/s je 499 s."},{q:"Pro\u010D je Uran modrozelen\xFD?",a:["Odr\xE1\u017E\xED oce\xE1ny","Methan pohlcuje \u010Derven\xE9 sv\u011Btlo","Rozptyl na ledov\xFDch krystalech vody"],c:1,e:"Methan ve svrchn\xED atmosf\xE9\u0159e absorbuje \u010Dervenou \u010D\xE1st spektra."},{q:"Kter\xE9 t\u011Bleso m\xE1 na povrchu nejv\u011Bt\u0161\xED atmosf\xE9rick\xFD tlak?",a:["Venu\u0161e","Titan","Zem\u011B"],c:0,e:"Venu\u0161e 92 bar, Titan 1,5 bar, Zem\u011B 1 bar."},{q:"Co \u0159\xEDk\xE1 t\u0159et\xED Kepler\u016Fv z\xE1kon?",a:["P\xB2 je \xFAm\u011Brn\xE9 a\xB3","P je \xFAm\u011Brn\xE9 a\xB2","P\xB3 je \xFAm\u011Brn\xE9 a\xB2"],c:0,e:"Druh\xE1 mocnina ob\u011B\u017En\xE9 doby je \xFAm\u011Brn\xE1 t\u0159et\xED mocnin\u011B velk\xE9 poloosy."},{q:"Kde le\u017E\xED t\u011B\u017Ei\u0161t\u011B soustavy Pluto\u2013Charon?",a:["Uvnit\u0159 Pluta","Mimo Pluto","Uvnit\u0159 Charonu"],c:1,e:"Charon m\xE1 12 % hmotnosti Pluta, t\u011B\u017Ei\u0161t\u011B je asi 960 km nad povrchem Pluta."},{q:"Kter\xFD m\u011Bs\xEDc ob\xEDh\xE1 retrogr\xE1dn\u011B?",a:["Titan","Triton","Callisto"],c:1,e:"Triton je nejsp\xED\u0161 zachycen\xE9 t\u011Bleso Kuiperova p\xE1su."},{q:"Jak tlust\xE9 jsou hlavn\xED Saturnovy prstence?",a:["Des\xEDtky metr\u016F","Des\xEDtky kilometr\u016F","Tis\xEDce kilometr\u016F"],c:0,e:"P\u0159i \u0161\xED\u0159ce p\u0159es 270 000 km jsou tlust\xE9 typicky 10 a\u017E 100 m."},{q:"Kdy projde Halleyova kometa p\u0159\xED\u0161t\u011B perih\xE9liem?",a:["2041","2061","2086"],c:1,e:"28. \u010Dervence 2061. Posledn\xED pr\u016Fchod byl v \xFAnoru 1986."},{q:"Kter\xE1 planeta vyza\u0159uje v\xFDrazn\u011B v\xEDc energie, ne\u017E p\u0159ij\xEDm\xE1 od Slunce?",a:["Uran","Neptun","Mars"],c:1,e:"Neptun 2,6\xD7. Uran m\xE1 vnit\u0159n\xED zdroj tepla n\xE1padn\u011B slab\xFD."},{q:"Co je rovina ekliptiky?",a:["Rovina zemsk\xE9ho rovn\xEDku","Rovina ob\u011B\u017En\xE9 dr\xE1hy Zem\u011B","Rovina Galaxie"],c:1,e:"Dr\xE1hy ostatn\xEDch planet jsou k n\xED sklon\u011Bn\xE9 nejv\xFD\u0161 o 7\xB0 (Merkur)."},{q:"Kolik hmotnosti soustavy p\u0159ipad\xE1 na Slunce?",a:["90 %","99 %","99,86 %"],c:2,e:"V\u011Bt\u0161inu zbytku tvo\u0159\xED Jupiter."}]},gd=[["Textury planet, M\u011Bs\xEDce, Slunce a Ml\xE9\u010Dn\xE9 dr\xE1hy","Solar System Scope, CC BY 4.0 (podle dat NASA)","https://www.solarsystemscope.com/textures/"],["Textury m\u011Bs\xEDc\u016F, Ceres, Pluta a Charonu","projekt Stellarium: Oleg Pluton (Helleformer), Kexitt, Snowfall, FarGetaNik, Magenta Meteorite, CC BY 4.0; Callisto John van Vliet a RVS, CC BY-SA; Dione a Enceladus NASA/CICLOPS; Triton a Phobos NASA/JPL","https://github.com/Stellarium/stellarium"],["Dr\xE1hov\xE9 elementy planet","JPL Solar System Dynamics, E. M. Standish: Keplerian Elements for Approximate Positions of the Major Planets","https://ssd.jpl.nasa.gov/planets/approx_pos.html"],["Vykreslov\xE1n\xED","three.js, licence MIT","https://threejs.org/"]];var si=1495978707e-1,rt=Math.PI/180,Sn=Math.PI*2,Qo=23.4392911*rt,Le=(n,e=document)=>e.querySelector(n),ot=Object.fromEntries(gt.map(n=>[n.id,n])),I_=gt.filter(n=>n.orbit&&n.orbit.t),L_=gt.filter(n=>n.type==="planet"),We=(n,e=0)=>n.toLocaleString("cs-CZ",{maximumFractionDigits:e}),ai=(n,e,t)=>Math.min(t,Math.max(e,n)),Fc=matchMedia("(prefers-reduced-motion: reduce)").matches,Oe={mode:null,visited:[],done:[],xp:0,sound:!0,mission:{}};try{Object.assign(Oe,JSON.parse(localStorage.getItem("kosmicka-vyprava")||"{}"))}catch{}var qs=()=>{try{localStorage.setItem("kosmicka-vyprava",JSON.stringify(Oe))}catch{}},Dt=()=>Oe.mode!=="pro",N_={atlas:'<circle cx="12" cy="12" r="5"/><ellipse cx="12" cy="12" rx="10.5" ry="3.6" transform="rotate(-20 12 12)" fill="none" stroke="currentColor" stroke-width="1.6"/>',mission:'<path d="M5 21V4m0 1h11l-2.5 4L16 13H5" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>',pass:'<rect x="5" y="3" width="14" height="18" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="10.5" r="3.2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M8.5 17h7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',quiz:'<path d="M9 9.2a3 3 0 1 1 4.6 2.5c-1 .7-1.6 1.2-1.6 2.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="18" r="1.3"/><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="1.6"/>',lab:'<path d="M9.5 3v6.2L4.6 18a2 2 0 0 0 1.8 3h11.2a2 2 0 0 0 1.8-3l-4.9-8.8V3M8 3h8M7.4 15h9.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',play:'<path d="M7 4.5v15l12.5-7.5z"/>',pause:'<path d="M6.5 4.5h4v15h-4zM13.5 4.5h4v15h-4z"/>',ff:'<path d="M3.5 5.5v13l8.5-6.5zM12.5 5.5v13L21 12z"/>',rw:'<path d="M20.5 5.5v13L12 12zM11.5 5.5v13L3 12z"/>',home:'<path d="M4 11.5 12 4.5l8 7M6.5 10v9.5h11V10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',layers:'<path d="m12 3.5 9 5-9 5-9-5zM3.5 13l8.5 4.7 8.5-4.7M3.5 17l8.5 4.5 8.5-4.5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>',sound:'<path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M15 9a4.2 4.2 0 0 1 0 6M17.5 6.5a8 8 0 0 1 0 11" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',mute:'<path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="m15.5 9.5 5 5m0-5-5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',info:'<circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M12 11v6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><circle cx="12" cy="7.6" r="1.3"/>',close:'<path d="m6 6 12 12M18 6 6 18" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>',speak:'<path d="M4 5.5h16v10.5H10l-4.5 3.5V16H4z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M8 9.5h8M8 12.5h5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',swap:'<path d="M4 8h14l-3.5-3.5M20 16H6l3.5 3.5" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>',check:'<path d="m5 12.5 4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>'},Zt=n=>`<svg class="ico" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">${N_[n]}</svg>`,Gs;function Hn(n,e=.11){if(Oe.sound)try{Gs=Gs||new(window.AudioContext||window.webkitAudioContext);let t=Gs.currentTime;n.forEach((i,s)=>{let r=Gs.createOscillator(),a=Gs.createGain(),o=t+s*e;r.type="triangle",r.frequency.value=i,a.gain.setValueAtTime(1e-4,o),a.gain.linearRampToValueAtTime(.1,o+.015),a.gain.exponentialRampToValueAtTime(1e-4,o+e*2.2),r.connect(a).connect(Gs.destination),r.start(o),r.stop(o+e*2.4)})}catch{}}var il=n=>[n[0],n[2],-n[1]];function D_(n,e){let t=n.orbit,i=(e-2451545)/36525;if(t.t==="jpl"){let a=t.el.map((o,l)=>o+t.rate[l]*i);return{a:a[0],e:a[1],i:a[2]*rt,O:a[5]*rt,w:(a[4]-a[5])*rt,M:(a[3]-a[4])*rt}}let s=.9856076686/Math.pow(t.a,1.5),r=t.t==="ep"?t.M0+s*(e-t.ep):s*(e-t.Tp);return{a:t.a,e:t.e,i:t.i*rt,O:t.O*rt,w:t.w*rt,M:r*rt}}function U_(n,e){n=((n+Math.PI)%Sn+Sn)%Sn-Math.PI;let t=e<.8?n:n>0?Math.PI:-Math.PI;for(let i=0;i<80;i++){let s=(t-e*Math.sin(t)-n)/(1-e*Math.cos(t));if(t-=s,Math.abs(s)<1e-12)break}return t}function F_(n){let e=Math.cos(n.O),t=Math.sin(n.O),i=Math.cos(n.w),s=Math.sin(n.w),r=Math.cos(n.i),a=Math.sin(n.i);return[il([e*i-t*s*r,t*i+e*s*r,s*a]),il([-e*s-t*i*r,-t*s+e*i*r,i*a])]}function O_(n,e){let t=n*rt,i=e*rt,s=Math.cos(i)*Math.cos(t),r=Math.cos(i)*Math.sin(t),a=Math.sin(i);return new N(s,-r*Math.sin(Qo)+a*Math.cos(Qo),-(r*Math.cos(Qo)+a*Math.sin(Qo))).normalize()}function Oc(n){let e=new N().crossVectors(n,new N(0,1,0));e.lengthSq()<1e-8&&e.set(1,0,0),e.normalize();let t=new N().crossVectors(e,n).normalize();return{X:e,Y:n.clone(),Z:t,q:new nn().setFromRotationMatrix(new Qe().makeBasis(e,n,t))}}var k_=Oc(new N(0,1,0));gt.forEach((n,e)=>{let t=n.parent&&ot[n.parent];if(n.pole)n.basis=Oc(O_(...n.pole));else if(t)n.basis=n.ecl?k_:t.basis;else{let i=(n.tilt||0)*rt;n.basis=Oc(new N(0,Math.cos(i),Math.sin(i)).normalize())}t&&(n.dir=(n.retro?-1:1)*Math.sign(t.rot||1),n.th0=e*2.399963%Sn),n.p=[0,0,0],n.h=[0,0,0],n.r=0,n.Rs=1});var kr=0,Gn=0,Wc=2e3,Wr=(n,e)=>Math.exp((1-kr)*Math.log(n)+kr*Math.log(e)),Ws=n=>Wr(60*Math.pow(n,.55),Wc*n),Id=n=>Math.pow(n/6371,.45),B_=n=>Wr(Id(n),n/si*Wc),z_=(n,e)=>Wr(Id(e)*(1+.9*Math.sqrt(n/e)),n/si*Wc),Xc=()=>Date.now()/864e5+24405875e-1,Ld=n=>new Date((n-24405875e-1)*864e5),Vr=[[1,"skute\u010Dn\xFD \u010Das","Opravdov\xFD \u010Das"],[60,"1 min/s",null],[3600,"1 h/s","Hodina za vte\u0159inu"],[86400,"1 den/s","Den za vte\u0159inu"],[604800,"1 t\xFDden/s",null],[2592e3,"1 m\u011Bs\xEDc/s","M\u011Bs\xEDc za vte\u0159inu"],[31557600,"1 rok/s","Rok za vte\u0159inu"],[315576e3,"10 let/s",null]],ze={jd:Xc(),sp:3,dir:1,paused:!1},Nd=()=>Vr.map((n,e)=>e).filter(n=>!Dt()||Vr[n][2]);function qc(n){let e=n-2451545;for(let t of I_){let i=D_(t,n),s=U_(i.M,i.e),[r,a]=F_(i),o=i.a*(Math.cos(s)-i.e),l=i.a*Math.sqrt(1-i.e*i.e)*Math.sin(s);t.el=i,t.E=s,t.P=r,t.Q=a;for(let h=0;h<3;h++)t.h[h]=o*r[h]+l*a[h];t.r=Math.hypot(t.h[0],t.h[1],t.h[2]);let c=Ws(t.r)/t.r;for(let h=0;h<3;h++)t.p[h]=t.h[h]*c}for(let t of gt){if(t.Rs=B_(t.R),t.type!=="moon")continue;let i=ot[t.parent],s=t.basis;t.th=t.id==="moon"?(218.316+13.176396*e)*rt:t.th0+t.dir*Sn*e/t.orbit.P,t.md=z_(t.orbit.a,i.R);let r=Math.cos(t.th),a=Math.sin(t.th);t.p[0]=i.p[0]+(r*s.X.x-a*s.Z.x)*t.md,t.p[1]=i.p[1]+(r*s.X.y-a*s.Z.y)*t.md,t.p[2]=i.p[2]+(r*s.X.z-a*s.Z.z)*t.md;let o=t.orbit.a/si/t.md;for(let l=0;l<3;l++)t.h[l]=i.h[l]+(t.p[l]-i.p[l])*o;t.r=Math.hypot(t.h[0],t.h[1],t.h[2])}}var Dd=Le("#c"),al=new Zo({canvas:Dd,antialias:!0,logarithmicDepthBuffer:!0,powerPreference:"high-performance"});al.setPixelRatio(Math.min(devicePixelRatio||1,2));var Ji=new Ts,Yt=new qt(45,1,.01,1e10),Ud=new br(16774888,Math.PI*1.08,0,0);Ji.add(Ud,new Ds(16777215,.045));var yn=1,Mn=1;function Fd(){yn=innerWidth,Mn=innerHeight,al.setSize(yn,Mn,!1),Yt.aspect=yn/Mn,Yt.updateProjectionMatrix()}addEventListener("resize",Fd);Fd();var $c=new Is,V_=new yr($c),Lc={};function Xi(n,e="jpg",t=!0){if(!Lc[n]){let i=V_.load(`tex/${n}.${e}`);t&&(i.colorSpace=Xt),i.anisotropy=8,Lc[n]=i}return Lc[n]}$c.onProgress=(n,e,t)=>{Le("#loadbar").style.width=Math.round(e/t*100)+"%"};function ol(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let s=new mr(i);return s.colorSpace=Xt,s}var H_=ol(256,256,(n,e)=>{let t=n.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);t.addColorStop(0,"rgba(255,250,230,1)"),t.addColorStop(.2,"rgba(255,225,150,.85)"),t.addColorStop(.42,"rgba(255,170,70,.28)"),t.addColorStop(1,"rgba(255,120,30,0)"),n.fillStyle=t,n.fillRect(0,0,e,e)}),G_=ol(128,128,(n,e)=>{let t=n.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);t.addColorStop(0,"rgba(230,250,255,1)"),t.addColorStop(.3,"rgba(150,220,255,.45)"),t.addColorStop(1,"rgba(120,200,255,0)"),n.fillStyle=t,n.fillRect(0,0,e,e)}),W_=ol(64,256,(n,e,t)=>{let i=n.createImageData(e,t);for(let s=0;s<t;s++)for(let r=0;r<e;r++){let a=1-s/t,o=Math.abs(r/(e-1)-.5)*2,l=.25+.75*(1-a),c=Math.max(0,1-o/l)**1.6*a**1.4,h=(s*e+r)*4;i.data[h]=170,i.data[h+1]=225,i.data[h+2]=255,i.data[h+3]=c*255}n.putImageData(i,0,0)}),X_=ol(256,4,(n,e,t)=>{n.clearRect(0,0,e,t),[[20,2,.25],[60,2,.3],[98,3,.3],[150,2,.35],[228,6,.7]].forEach(([i,s,r])=>{n.fillStyle=`rgba(190,210,215,${r})`,n.fillRect(i,0,s,t)})}),Nc=`#include <common>
#include <logdepthbuf_pars_vertex>
varying vec2 vUv; varying vec3 vN; varying vec3 vW;
void main(){ vUv=uv; vN=normalize(mat3(modelMatrix)*normal); vec4 w=modelMatrix*vec4(position,1.0); vW=w.xyz; gl_Position=projectionMatrix*viewMatrix*w;
#include <logdepthbuf_vertex>
}`,jc=`#include <common>
#include <logdepthbuf_pars_fragment>
varying vec2 vUv; varying vec3 vN; varying vec3 vW;`,q_=jc+`uniform sampler2D dayMap; uniform sampler2D nightMap; uniform vec3 uSun;
void main(){
#include <logdepthbuf_fragment>
 float d=dot(normalize(vN),uSun); vec3 day=texture2D(dayMap,vUv).rgb; vec3 night=texture2D(nightMap,vUv).rgb;
 vec3 col=day*(max(d,0.0)*1.08+0.025)+night*smoothstep(0.06,-0.2,d)*vec3(1.5,1.25,0.9);
 gl_FragColor=vec4(col,1.0);
#include <colorspace_fragment>
}`,$_=jc+`uniform vec3 uSun; uniform vec3 uColor; uniform float uK;
void main(){
#include <logdepthbuf_fragment>
 vec3 n=normalize(vN); float e=dot(normalize(vW-cameraPosition),n); float a=smoothstep(0.0,0.42,e)*uK; float day=smoothstep(-0.35,0.35,dot(n,uSun));
 gl_FragColor=vec4(uColor*a*day,1.0);
#include <colorspace_fragment>
}`,j_=jc+`uniform sampler2D map; uniform vec3 uSun; uniform vec3 uC; uniform float uR; uniform float uB;
void main(){
#include <logdepthbuf_fragment>
 vec4 t=texture2D(map,vUv); vec3 v=vW-uC; float tt=dot(v,uSun); float dp=length(v-tt*uSun);
 float sh=tt<0.0?smoothstep(uR*0.97,uR*1.03,dp):1.0;
 gl_FragColor=vec4(t.rgb*(0.1+0.9*sh)*uB,t.a);
#include <colorspace_fragment>
}`,_d=new Oi(1,96,64),vd=new Oi(1,48,32);function xd(n,e){let t=new vr(n,e,160,1);t.rotateX(-Math.PI/2);let i=t.attributes.position,s=t.attributes.uv;for(let r=0;r<i.count;r++)s.setXY(r,(Math.hypot(i.getX(r),i.getZ(r))-n)/(e-n),.5);return t}function kc(n){let e=new On,t=new On,i={uSun:{value:new N(1,0,0)}},s=[];e.add(t);let r;n.type==="star"?r=new gi({map:Xi(n.tex)}):n.id==="earth"?r=new sn({vertexShader:Nc,fragmentShader:q_,uniforms:{dayMap:{value:Xi("earth")},nightMap:{value:Xi("earth_night")},uSun:i.uSun}}):r=new Ps({map:Xi(n.tex),color:n.type==="comet"?10722450:16777215,emissive:n.type==="comet"?1381135:0});let a=new Bt(n.type==="moon"||n.type==="comet"?vd:_d,r);if(n.squash&&a.scale.set(n.squash[0],n.squash[1],n.id==="haumea"?.9:n.squash[0]),n.type==="comet"&&a.scale.set(1.3,.75,.8),t.add(a),s.push(r),n.id==="earth"){let o=new Ps({color:16777215,alphaMap:Xi("earth_clouds","jpg",!1),transparent:!0,depthWrite:!1}),l=new Bt(_d,o);l.scale.setScalar(1.008),l.renderOrder=1,t.add(l),s.push(o)}if(n.type==="star"){let o=new Di({map:H_,blending:ei,depthWrite:!1,transparent:!0}),l=new Es(o);l.scale.setScalar(4.6),l.renderOrder=2,e.add(l),e.userData.glow=l,s.push(o)}if(n.atm){let o=new sn({vertexShader:Nc,fragmentShader:$_,uniforms:{uSun:i.uSun,uColor:{value:new Fe(n.atm[0])},uK:{value:n.atm[1]}},side:zt,blending:ei,transparent:!0,depthWrite:!1}),l=new Bt(vd,o);l.scale.setScalar(1.05),e.add(l),s.push(o)}if(n.ring){let o=n.ring==="saturn";i.uC={value:new N},i.uR={value:1};let l=new sn({vertexShader:Nc,fragmentShader:j_,uniforms:{map:{value:o?Xi("saturn_ring","png"):X_},uSun:i.uSun,uC:i.uC,uR:i.uR,uB:{value:o?1:.8}},side:un,transparent:!0,depthWrite:!1}),c=new Bt(o?xd(1.26,2.36):xd(1.6,2.04),l);c.renderOrder=1,t.add(c),s.push(l)}return{group:e,spin:t,mats:s,update(o){i.uSun.value.copy(o),i.uC&&(i.uC.value.copy(e.position),i.uR.value=e.scale.x)},dispose(){s.forEach(o=>o.dispose())}}}var Y_=il([Math.cos(-5.54*rt)*Math.cos(266.84*rt),Math.cos(-5.54*rt)*Math.sin(266.84*rt),Math.sin(-5.54*rt)]),Z_=il([Math.cos(29.81*rt)*Math.cos(180.02*rt),Math.cos(29.81*rt)*Math.sin(180.02*rt),Math.sin(29.81*rt)]),Od=new Oi(1,48,32);Od.scale(-1,1,1);var Ki=new Bt(Od,new gi({map:Xi("sky"),color:9079434,depthWrite:!1,depthTest:!1}));{let n=new N(...Y_).negate().normalize(),e=new N(...Z_).normalize(),t=new N().crossVectors(n,e).normalize();Ki.quaternion.setFromRotationMatrix(new Qe().makeBasis(n,e,t))}Ki.scale.setScalar(5e8);Ki.renderOrder=-10;Ki.frustumCulled=!1;Ji.add(Ki);for(let n of gt)n.vis=kc(n),Ji.add(n.vis.group);var qi=ot.halley,el=new Es(new Di({map:G_,blending:ei,depthWrite:!1,transparent:!0})),kd=new Fi(1,1);kd.translate(0,.5,0);var Xs=new Bt(kd,new gi({map:W_,blending:ei,depthWrite:!1,transparent:!0,side:un}));Xs.matrixAutoUpdate=!1;Xs.frustumCulled=!1;Ji.add(el,Xs);var J_=()=>new As({vertexColors:!0,transparent:!0,depthWrite:!1,blending:ei});function K_(n,e,t){let i=new kt,s=new Float32Array((n+1)*3),r=new Float32Array((n+1)*3),a=new Fe(e);for(let l=0;l<=n;l++){let c=(.1+.9*Math.pow(l/n,1.6))*t;r[l*3]=a.r*c,r[l*3+1]=a.g*c,r[l*3+2]=a.b*c}i.setAttribute("position",new Ot(s,3)),i.setAttribute("color",new Ot(r,3));let o=new fr(i,J_());return o.frustumCulled=!1,Ji.add(o),o}var Bc=420,zc=128;for(let n of gt)n.type!=="star"&&(n.line=K_(n.type==="moon"?zc:Bc,n.color,n.type==="planet"?.95:n.type==="moon"?.6:.7));function yd(n,e,t,i,s,r){let a=new kt,o=new Float32Array(n*3),l=[],c=n*7+3,h=()=>(c=c*16807%2147483647)/2147483647;for(let u=0;u<n;u++){let p=e+(t-e)*(.5+(h()+h()+h()-1.5)/2.2);l.push([p,h()*Sn,Math.abs(h()+h()-1)*i*rt,h()*Sn,.9856076686*rt/Math.pow(p,1.5)])}a.setAttribute("position",new Ot(o,3));let d=new Rs(a,new Ui({color:s,size:r,sizeAttenuation:!1,transparent:!0,opacity:.75,depthWrite:!1}));return d.frustumCulled=!1,d.userData.par=l,Ji.add(d),d}var Q_=[yd(2600,2.1,3.35,14,11049864,1.5),yd(1800,38,49,16,9347768,1.5)];{let n=12345,e=()=>(n=n*16807%2147483647)/2147483647;for(let[t,i,s]of[[2600,1.3,.75],[260,2.3,.95]]){let r=new Float32Array(t*3),a=new Float32Array(t*3);for(let c=0;c<t;c++){let h=e()*2-1,d=e()*Sn,u=Math.sqrt(1-h*h),p=new Fe().setHSL(e()<.5?.6:.09,.5*e(),.65+.35*e());r.set([u*Math.cos(d),h,u*Math.sin(d)],c*3),a.set([p.r,p.g,p.b],c*3)}let o=new kt;o.setAttribute("position",new Ot(r,3)),o.setAttribute("color",new Ot(a,3));let l=new Rs(o,new Ui({size:i,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:s,depthWrite:!1}));l.renderOrder=-9,l.frustumCulled=!1,Ki.add(l)}}var Jt={orbits:!0,labels:!0,moons:!0,dwarf:!0,belts:!0,comet:!0},nt={yaw:.6,pitch:.62,dist:300,goal:300},mt=ot.sun,St=null,_t=[0,0,0],Yc=n=>n.type==="moon"?Jt.moons&&Yc(ot[n.parent]):n.type==="dwarf"?Jt.dwarf:n.type==="comet"?Jt.comet:!0,Bd=n=>n.type==="moon"?n.parent:n.id,zd=()=>Jt.comet?ai((4.5-qi.r)/3.6,0,1):0,ev=n=>n.type==="comet"?Math.max(n.Rs*9,zd()*Wr(22,900)*1.5):n.Rs*(n.id==="saturn"?6.5:n.type==="star"?6:n.type==="moon"?5:4.4),Vd=()=>Ws(10)*2;function Xr(n,e){n.type==="moon"&&(Jt.moons=!0,ot[n.parent].type==="dwarf"&&(Jt.dwarf=!0)),n.type==="dwarf"&&(Jt.dwarf=!0),n.type==="comet"&&(Jt.comet=!0),qc(ze.jd);let t=e||ev(n);if(n===mt&&!St){nt.goal=t,Ad(n),setTimeout(()=>$d(n),300);return}St={from:St?null:mt,fromP:[..._t],to:n,t:0,dur:Fc?.01:2,d0:nt.dist,d1:t,rel:t/n.Rs,home:!!e},mt=n,Ad(n),$r()}function tv(){nt.pitch=.62,Xr(ot.sun,Vd())}var Ti=new N,nv=new N,Md=new N,Hd=new nn,Gd=new N(0,1,0),Sd=performance.now(),Dc=0,sl=0,Pe={on:!1,a:"earth",b:"jupiter"};function Wd(n){requestAnimationFrame(Wd);let e=Math.min(.1,(n-Sd)/1e3);if(Sd=n,Pe.on){xv(n/1e3);return}if(!ze.paused){let l=e*Vr[ze.sp][0]*ze.dir/86400;ze.jd+=l;let c=qr();c&&c.cond==="year"&&(sl+=Math.abs(l),sl>=365.25&&Ei("year"))}let t=bd();if(kr!==Gn&&(kr+=ai(Gn-kr,-e/(Fc?.01:1.6),e/(Fc?.01:1.6))),qc(ze.jd),t>0){let l=bd()/t;l!==1&&(nt.dist*=l,nt.goal*=l,St&&(St.d0*=l,St.d1*=l))}if(St){St.t+=e/St.dur;let l=ai(St.t,0,1),c=l*l*(3-2*l),h=St.from?St.from.p:St.fromP,d=St.to.p;for(let m=0;m<3;m++)_t[m]=h[m]+(d[m]-h[m])*c;let u=Math.hypot(d[0]-h[0],d[1]-h[1],d[2]-h[2])*.55,p=Math.log(St.d0),_=Math.log(St.d1),y=u>0?Math.max(0,Math.log(u)-Math.max(p,_))*.7:0;if(nt.dist=nt.goal=Math.exp(p+(_-p)*c+Math.sin(Math.PI*c)*y),l>=1){let m=St.to;St=null,$d(m)}}else{for(let l=0;l<3;l++)_t[l]=mt.p[l];nt.goal=ai(nt.goal,mt.Rs*1.25,Ws(70)*4),nt.dist*=Math.exp((Math.log(nt.goal)-Math.log(nt.dist))*(1-Math.exp(-e*9)))}let i=Math.cos(nt.pitch);Yt.position.set(nt.dist*i*Math.sin(nt.yaw),nt.dist*Math.sin(nt.pitch),nt.dist*i*Math.cos(nt.yaw)),Yt.lookAt(0,0,0),Yt.near=nt.dist*.01,Yt.far=1e10,Yt.updateProjectionMatrix(),Yt.updateMatrixWorld(),Ki.position.copy(Yt.position);let s=ot.sun,r=ze.jd-2451545;Ud.position.set(s.p[0]-_t[0],s.p[1]-_t[1],s.p[2]-_t[2]);for(let l of gt){let c=l.vis.group,h=Yc(l);if(c.visible=h,l.line&&(l.line.visible=h&&Jt.orbits&&(l.type!=="moon"||l.parent===Bd(mt))),!h)continue;c.position.set(l.p[0]-_t[0],l.p[1]-_t[1],l.p[2]-_t[2]),c.scale.setScalar(l.Rs);let d;l.id==="earth"?d=(280.46061837+360.98564736629*r)*rt:l.type==="moon"?d=l.th+Math.PI:d=Sn*r*24/l.rot,l.vis.spin.quaternion.copy(l.basis.q).multiply(Hd.setFromAxisAngle(Gd,d%Sn)),Md.set(s.p[0]-l.p[0],s.p[1]-l.p[1],s.p[2]-l.p[2]).normalize(),l.vis.update(Md)}let a=s.vis.group;a.userData.glow.scale.setScalar(Math.max(4.6,.05*Ti.copy(a.position).distanceTo(Yt.position)/s.Rs));let o=zd();if(el.visible=Xs.visible=o>.001,o>.001){let l=o*Wr(22,900),c=qi.vis.group.position;el.position.copy(c),el.scale.setScalar(Math.max(qi.Rs*5,l*.07));let h=Ti.set(qi.p[0]-s.p[0],qi.p[1]-s.p[1],qi.p[2]-s.p[2]).normalize(),d=nv.copy(Yt.position).sub(c).cross(h).normalize(),u=new N().crossVectors(d,h);Xs.matrix.makeBasis(d.multiplyScalar(l*.2),h.multiplyScalar(l),u).setPosition(c),Xs.matrixWorldNeedsUpdate=!0}if(Jt.orbits)for(let l of gt){if(!l.line||!l.line.visible)continue;let c=l.line.geometry.attributes.position.array;if(l.type==="moon"){let h=ot[l.parent],d=l.basis,u=h.p[0]-_t[0],p=h.p[1]-_t[1],_=h.p[2]-_t[2];for(let y=0;y<=zc;y++){let m=l.th-l.dir*Sn*(1-y/zc),f=Math.cos(m)*l.md,M=Math.sin(m)*l.md;c[y*3]=u+f*d.X.x-M*d.Z.x,c[y*3+1]=p+f*d.X.y-M*d.Z.y,c[y*3+2]=_+f*d.X.z-M*d.Z.z}}else{let h=l.el,d=h.a*Math.sqrt(1-h.e*h.e),u=l.P,p=l.Q;for(let _=0;_<=Bc;_++){let y=l.E-Sn*(1-_/Bc),m=h.a*(Math.cos(y)-h.e),f=d*Math.sin(y),M=m*u[0]+f*p[0],A=m*u[1]+f*p[1],T=m*u[2]+f*p[2],w=Math.hypot(M,A,T),E=Ws(w)/w;c[_*3]=M*E-_t[0],c[_*3+1]=A*E-_t[1],c[_*3+2]=T*E-_t[2]}}l.line.geometry.attributes.position.needsUpdate=!0}for(let l of Q_){if(l.visible=Jt.belts,!Jt.belts)continue;let c=l.geometry.attributes.position.array,h=l.userData.par;for(let d=0;d<h.length;d++){let u=h[d],p=u[1]+u[4]*r,_=Ws(u[0]),y=Math.sin(u[2])*Math.sin(p-u[3]),m=Math.sqrt(1-y*y);c[d*3]=Math.cos(p)*m*_-_t[0],c[d*3+1]=y*_-_t[1],c[d*3+2]=-Math.sin(p)*m*_-_t[2]}l.geometry.attributes.position.needsUpdate=!0}al.render(Ji,Yt),sv(),Dc+=e,Dc>.2&&(Dc=0,Zd())}function bd(){return mt.type==="star"&&nt.dist>mt.Rs*20?Ws(1):mt.Rs}var iv=Le("#labels");for(let n of gt){let e=document.createElement("button");e.className="lbl t-"+n.type,e.type="button",e.innerHTML=`<i style="border-color:${n.color}"></i><span>${n.name}</span>`,e.addEventListener("click",t=>{t.stopPropagation(),Xr(n),Hn([520])}),iv.appendChild(e),n.lbl=e,n.lblSpan=e.lastChild,n.sx=-1e5,n.sy=-1e5,n.rpx=0,n.scr=!1}var Td={star:1,planet:2,dwarf:3,comet:3,moon:4};function sv(){let n=Mn/(2*Math.tan(Yt.fov*rt/2)),e=Bd(mt),t=[],i=[];for(let r of gt){if(r.scr=!1,!Yc(r)){r.lbl.style.display="none";continue}if(Ti.set(r.p[0]-_t[0],r.p[1]-_t[1],r.p[2]-_t[2]).applyMatrix4(Yt.matrixWorldInverse),Ti.z>-Yt.near){r.lbl.style.display="none";continue}let a=-Ti.z;Ti.applyMatrix4(Yt.projectionMatrix),r.sx=(Ti.x*.5+.5)*yn,r.sy=(-Ti.y*.5+.5)*Mn,r.rpx=r.Rs/a*n,r.scr=!0,r.dz=a;let o=Jt.labels&&r.sx>-40&&r.sx<yn+40&&r.sy>-20&&r.sy<Mn+20&&r.rpx<Math.min(yn,Mn)*.2;if(r.type==="moon"){let l=ot[r.parent],c=r.parent===e;c||(r.scr=r.rpx>3),o=o&&c&&(r===mt||Math.hypot(r.sx-l.sx,r.sy-l.sy)>Math.max(16,l.rpx*.5))}o&&r===mt&&r.rpx>30&&(o=!1),o?i.push(r):r.lbl.style.display="none"}i.sort((r,a)=>(r===mt?0:Td[r.type])-(a===mt?0:Td[a.type]));let s=Dt()?9.5:7.6;for(let r of i){if(r!==mt&&mt.scr&&r.dz>mt.dz&&Math.hypot(r.sx-mt.sx,r.sy-mt.sy)<mt.rpx){r.lbl.style.display="none";continue}let a=Math.min(r.rpx,60)*.72+9,o=r.sx+a,l=r.sy-a-10,c=o+r.name.length*s+8,h=l+20;if(t.some(u=>o<u[2]&&c>u[0]&&l<u[3]&&h>u[1])){r.lbl.style.display="none";continue}t.push([o,l,c,h]);let d=r.lbl.style;d.display="",d.transform=`translate(${r.sx.toFixed(1)}px,${r.sy.toFixed(1)}px)`,r.lblSpan.style.transform=`translate(${a.toFixed(1)}px,${(-a).toFixed(1)}px)`,r.lbl.classList.toggle("dot",r.rpx<5),r.lbl.classList.toggle("on",r===mt)}}function rv(n,e){let t=null,i=1e9;for(let s of gt)!s.scr||s===mt&&s.rpx>40||Math.hypot(s.sx-n,s.sy-e)<Math.max(s.rpx,14)&&s.rpx<i&&(t=s,i=s.rpx);return t}var Xd=Le("#stage"),ri=new Map,Zc=0,tl=0;Xd.addEventListener("pointerdown",n=>{if(ri.set(n.pointerId,[n.clientX,n.clientY]),Zc=0,ri.size===2){let e=[...ri.values()];tl=Math.hypot(e[0][0]-e[1][0],e[0][1]-e[1][1])}});addEventListener("pointermove",n=>{let e=ri.get(n.pointerId);if(!e)return;let t=n.clientX-e[0],i=n.clientY-e[1];if(e[0]=n.clientX,e[1]=n.clientY,Zc+=Math.abs(t)+Math.abs(i),ri.size===1)nt.yaw-=t*.0055,nt.pitch=ai(nt.pitch+i*.0055,-1.5,1.5);else if(ri.size===2){let s=[...ri.values()],r=Math.hypot(s[0][0]-s[1][0],s[0][1]-s[1][1]);tl>0&&!St&&(nt.goal*=tl/r),tl=r}});var qd=n=>{if(ri.has(n.pointerId)&&(ri.delete(n.pointerId),Zc<6&&n.type==="pointerup"&&n.target===Dd&&!Pe.on)){let e=rv(n.clientX,n.clientY);e&&(Xr(e),Hn([520]))}};addEventListener("pointerup",qd);addEventListener("pointercancel",qd);Xd.addEventListener("wheel",n=>{n.preventDefault(),St||(nt.goal*=Math.exp(ai(n.deltaY,-120,120)*.0022))},{passive:!1});addEventListener("keydown",n=>{/INPUT|SELECT|TEXTAREA/.test(n.target.tagName)||(n.code==="Space"&&(n.preventDefault(),ze.paused=!ze.paused,fn()),n.key==="Escape"&&(Pe.on?nh():Le("#modal").hidden?eh():ul()))});function rl(){let n=0;Hs.forEach((t,i)=>{Oe.xp>=t[0]&&(n=i)});let e=Hs[n+1];return{name:Hs[n][1],next:e,pct:e?(Oe.xp-Hs[n][0])/(e[0]-Hs[n][0])*100:100}}function Jc(n){let e=rl().name;Oe.xp+=n,qs(),ll();let t=rl();t.name!==e&&($s(`Nov\xE1 hodnost: <b>${t.name}</b>`,"t-rank"),Hn([523,659,784,1047],.13))}function $s(n,e=""){let t=document.createElement("div");t.className="toast "+e,t.innerHTML=n,Le("#toasts").appendChild(t),setTimeout(()=>t.classList.add("out"),3600),setTimeout(()=>t.remove(),4200)}function $d(n){Oe.visited.includes(n.id)||(Oe.visited.push(n.id),$s(`Nov\xE9 raz\xEDtko do pasu: <b>${n.name}</b> <em>+10</em>`,"t-stamp"),Hn([660,880]),Jc(10),(an==="pass"||an==="atlas")&&wi(),$r()),Ei("arrive",n.id)}var Kc=()=>pd[Dt()?"kid":"pro"];function qr(){let n=Kc(),e=Oe.mission[Oe.mode||"kid"];return n.find(t=>t.id===e&&!Oe.done.includes(t.id))||n.find(t=>!Oe.done.includes(t.id))||null}function Ei(n,e){let t=qr();if(!t)return;let i=!1;t.target&&n==="arrive"&&(i=[].concat(t.target).includes(e)),t.cond===n&&(i=!0),t.cond==="allPlanets"&&(i=L_.every(s=>Oe.visited.includes(s.id))),i&&(Oe.done.push(t.id),sl=0,qs(),$s("Mise spln\u011Bna! <em>+30</em>","t-mission"),Hn([523,659,784],.12),Jc(30),Yi=!1,ji(),an==="mission"&&wi(),setTimeout(()=>Ei("check"),50))}var Yi=!1,$i=!1;function ji(){let n=Le("#mission"),e=qr(),t=Kc(),i=t.filter(s=>Oe.done.includes(s.id)).length;if(!Oe.mode){n.hidden=!0;return}if(n.hidden=!1,n.classList.toggle("min",$i),!e){n.innerHTML=`<div class="m-head"><span class="eyebrow">Mise ${i}/${t.length}</span></div><p>V\u0161echny mise jsou spln\u011Bn\xE9. Zkus kv\xEDz nebo dosb\xEDrej raz\xEDtka do pasu.</p>`;return}n.innerHTML=`<div class="m-head"><span class="eyebrow">Mise ${i+1} z ${t.length}</span><button class="link" data-act="hint">${Yi?"Skr\xFDt n\xE1pov\u011Bdu":"N\xE1pov\u011Bda"}</button><button class="iconbtn sm" data-act="mission-min" aria-label="${$i?"Rozbalit misi":"Sbalit misi"}">${$i?"+":"\u2212"}</button></div><p>${e.text}</p>${Yi?`<p class="hint">${e.hint}</p>`:""}`}function ll(){let n=rl();Le("#rank").innerHTML=`<b>${n.name}</b><span class="xp">${Oe.xp} b.</span><span class="bar"><i style="width:${n.pct}%"></i></span>`,Le("#rank").title=n.next?`Do hodnosti ${n.next[1]} zb\xFDv\xE1 ${n.next[0]-Oe.xp} bod\u016F`:"Nejvy\u0161\u0161\xED hodnost"}var Hr=(n,e,t,i)=>{let s=We(n,e);return s+" "+(s.includes(",")?t:i)},av=n=>{if(n=Math.abs(n),n<72){let e=Math.floor(n),t=Math.round((n-e)*60);return`${e} h ${t} min`}return Hr(n/24,1,"dne","dn\xED")},Ed=n=>n<1?av(n*24):n<800?Hr(n,2,"dne","dn\xED"):Hr(n/365.25,2,"roku","let"),wd=n=>n<1.5?`${We(n*24)} hodin`:n<800?`${We(n)} dn\xED`:`${We(n/365.25,n<4e3?1:0)} ${n/365.25<5?"roku":"let"}`,ov=n=>{let e=n*499.004784;return e<60?`${We(e,1)} s`:e<3600?`${Math.floor(e/60)} min ${Math.round(e%60)} s`:`${Math.floor(e/3600)} h ${Math.round(e%3600/60)} min`};function lv(n){let e=n*3600;if(e<90)return`${We(e)} s`;if(e<5400)return`${We(e/60)} min`;if(n<48)return`${We(n,1)} h`;let t=n/24;if(t<700)return`${We(t)} dn\xED`;let i=t/365.25;return i<10?Hr(i,1,"roku","let"):i<1e4?`${We(i)} let`:i<1e6?`${We(i/1e3)} tis\xEDc let`:Hr(i/1e6,1,"milionu let","milion\u016F let")}var jd=n=>n.type==="moon"?n.orbit.P:n.orbit&&n.orbit.t?Math.pow(n.orbit.t==="jpl"?n.orbit.el[0]:n.orbit.a,1.5)*365.25:null,Yd=(n,e)=>Math.hypot(n.h[0]-e.h[0],n.h[1]-e.h[1],n.h[2]-e.h[2]),Gr=(n,e="")=>`<span class="thumb ${e} th-${n.type}" style="background-image:url(tex/${n.tex}.jpg)"></span>`,Zi=null;function Ad(n){Zi=n,Qc()}function cv(){Zi=null,Le("#card").hidden=!0,Jd()}function Qc(){let n=Zi,e=Le("#card");if(!n||!Oe.mode){e.hidden=!0;return}e.hidden=!1;let t=n.parent&&ot[n.parent],i=gt.filter(l=>l.parent===n.id),s=jd(n),r=n.R/6371,a=r>1.15?`${We(r,r<20?1:0)}\xD7 \u0161ir\u0161\xED ne\u017E Zem\u011B`:r<.87?`Zem\u011B je ${We(1/r,1/r<20?1:0)}\xD7 \u0161ir\u0161\xED`:"skoro jako Zem\u011B",o;if(Dt())o=`<ul class="facts">${n.k.map(l=>`<li>${l}</li>`).join("")}</ul>
    <div class="tiles">
      <div><span>Velikost</span><b>${n.id==="earth"?"pr\u016Fm\u011Br 12 742 km":a}</b></div>
      ${n.rot&&n.type!=="moon"?`<div><span>Jedna oto\u010Dka</span><b>${wd(Math.abs(n.rot)/24)}${n.rot<0?" (pozp\xE1tku)":""}</b></div>`:""}
      ${s?`<div><span>${t?"Ob\u011Bh kolem: "+t.name:"Ob\u011Bh kolem Slunce"}</span><b>${wd(s)}</b></div>`:""}
      <div><span>Teplota</span><b>${n.temp}</b></div>
      ${n.type!=="star"?'<div><span>Od Slunce te\u010F</span><b id="lv-sun">\u2013</b></div>':""}
      ${n.moons?`<div><span>M\u011Bs\xEDce</span><b>${n.moons}</b></div>`:""}
    </div>
    <button class="btn ghost" data-act="speak">${Zt("speak")} P\u0159e\u010Dti mi to</button>`;else{let l=n.orbit||{},c=l.t==="jpl"?l.el[0]:l.a,h=l.t==="jpl"?l.el[1]:l.e,d=l.t==="jpl"?l.el[2]:l.i,u=[["St\u0159edn\xED polom\u011Br",`${We(n.R,n.R<100?1:0)} km (${We(r,3)} R\u2295)`],n.mass?["Hmotnost",`${We(n.mass,4)} M\u2295`]:null,["Gravitace na povrchu",`${We(n.g,n.g<.1?4:2)} m/s\xB2 (${We(n.g/9.81,3)} g)`],n.type==="moon"?["Rotace","v\xE1zan\xE1"]:["Rotace (siderick\xE1)",Ed(Math.abs(n.rot)/24)+(n.rot<0?", retrogr\xE1dn\xED":"")],s?["Ob\u011B\u017En\xE1 doba",Ed(s)+(n.retro?", retrogr\xE1dn\xED":"")]:null,c?["Velk\xE1 poloosa",l.t?`${We(c,3)} AU`:`${We(c)} km`]:null,l.t?["V\xFDst\u0159ednost",We(h,4)]:null,l.t?["Sklon dr\xE1hy k ekliptice",`${We(Math.abs(d)<.005?0:d,2)}\xB0`]:null,n.tilt!=null?["Sklon osy",`${We(n.tilt,2)}\xB0`]:null,["Teplota",n.temp],n.moons!=null?["Zn\xE1m\xE9 m\u011Bs\xEDce",String(n.moons)]:null].filter(Boolean);o=`<p class="desc">${n.a}</p>
    <table class="data"><tbody>${u.map(p=>`<tr><th>${p[0]}</th><td>${p[1]}</td></tr>`).join("")}</tbody></table>
    ${n.type!=="star"?`<div class="eyebrow">Pr\xE1v\u011B te\u010F v modelu</div><table class="data now"><tbody>
      <tr><th>Od Slunce</th><td id="lv-sun">\u2013</td></tr>${n.id!=="earth"?'<tr><th>Od Zem\u011B</th><td id="lv-earth">\u2013</td></tr><tr><th>Sv\u011Btlo ze Zem\u011B dolet\xED za</th><td id="lv-light">\u2013</td></tr>':""}
      ${l.t?'<tr><th>Rychlost na dr\xE1ze</th><td id="lv-v">\u2013</td></tr>':""}</tbody></table>`:""}`}e.innerHTML=`<div class="card-head">${Gr(n,"lg")}<div><h2>${n.name}</h2><div class="chips"><span class="chip">${Or[n.type]}</span>${Oe.visited.includes(n.id)?`<span class="chip ok">${Zt("check")} raz\xEDtko</span>`:""}</div><p class="tag">${n.tag}</p></div><button class="iconbtn" data-act="card-close" aria-label="Zav\u0159\xEDt kartu">${Zt("close")}</button></div>
  ${o}
  ${i.length?`<div class="eyebrow">${Dt()?"M\u011Bs\xEDce, ke kter\xFDm m\u016F\u017Ee\u0161 let\u011Bt":"M\u011Bs\xEDce v modelu"}</div><div class="moonrow">${i.map(l=>`<button class="pill" data-go="${l.id}">${Gr(l)}${l.name}</button>`).join("")}</div>`:""}
  <div class="actions">${t?`<button class="btn ghost" data-go="${t.id}">${Dt()?"Zp\u011Bt k t\u011Blesu":"K t\u011Blesu"} ${t.name}</button>`:""}${n.id!=="earth"?`<button class="btn" data-act="cmp-earth">${Dt(),"Porovnat se Zem\xED"}</button>`:'<button class="btn" data-act="cmp-sun">Porovnat se Sluncem</button>'}</div>`,Zd()}function Zd(){ef();let n=Zi;if(!n||n.type==="star")return;let e=(s,r)=>{let a=Le("#"+s);a&&(a.textContent=r)};e("lv-sun",Dt()?`${We(n.r*si/1e6,n.r<2?1:0)} milionu km`:`${We(n.r,3)} AU = ${We(n.r*si/1e6,1)} mil. km`);let t=Yd(n,ot.earth);e("lv-earth",t*si<2e6?`${We(t*si)} km`:`${We(t,3)} AU = ${We(t*si/1e6,1)} mil. km`),e("lv-light",ov(t)),n.el&&e("lv-v",`${We(29.7847*Math.sqrt(Math.max(0,2/n.r-1/n.el.a)),2)} km/s`);let i=qr();i&&i.cond==="halley"&&qi.r<2&&Ei("halley")}var nl=!1;function Jd(){try{speechSynthesis.cancel()}catch{}nl=!1}function hv(){try{if(nl){Jd();return}let n=new SpeechSynthesisUtterance(`${Zi.name}. ${Zi.k.join(" ")}`);n.lang="cs-CZ",n.rate=.92;let e=speechSynthesis.getVoices().find(t=>t.lang&&t.lang.toLowerCase().startsWith("cs"));e&&(n.voice=e),n.onend=()=>{nl=!1},nl=!0,speechSynthesis.speak(n)}catch{$s("Tento prohl\xED\u017Ee\u010D neum\xED \u010D\xEDst nahlas.")}}var an=null,Vc="",uv=[["atlas","Atlas"],["mission","Mise"],["pass","Pas"],["quiz","Kv\xEDz"],["lab","Laborato\u0159"]];function cl(){Le("#rail").innerHTML=uv.map(n=>`<button data-tab="${n[0]}" class="${an===n[0]?"on":""}" aria-pressed="${an===n[0]}">${Zt(n[0])}<span>${n[1]}</span></button>`).join("")}function dv(n){an=an===n?null:n,cl(),wi()}function eh(){an=null,cl(),wi()}function fv(n){let e=Oe.visited.includes(n.id);return`<button class="item ${e?"seen":""}" data-go="${n.id}">${Gr(n)}<span class="nm">${n.name}</span><span class="ty">${Or[n.type]}${n.parent?" \xB7 "+ot[n.parent].name:""}</span>${e?`<span class="tick">${Zt("check")}</span>`:""}</button>`}function wi(){let n=Le("#panel");if(!an){n.hidden=!0;return}n.hidden=!1;let e=t=>`<div class="p-head"><h2>${t}</h2><button class="iconbtn" data-act="panel-close" aria-label="Zav\u0159\xEDt panel">${Zt("close")}</button></div>`;if(an==="atlas"){let t=Vc.trim().toLowerCase(),i=a=>!t||a.name.toLowerCase().includes(t)||Or[a.type].includes(t),s=(a,o)=>(o=o.filter(i),o.length?`<div class="eyebrow">${a}</div><div class="grid">${o.map(fv).join("")}</div>`:""),r=[...new Set(gt.filter(a=>a.parent).map(a=>a.parent))];n.innerHTML=e("Atlas")+(Dt()?'<p class="lead">Kam polet\xEDme? Klepni na t\u011Bleso.</p>':`<input id="atlas-q" class="field" type="search" placeholder="Hledat t\u011Bleso nebo typ" value="${Vc.replace(/"/g,"&quot;")}" aria-label="Hledat t\u011Bleso">`)+`<div id="atlas-list">${s("Hv\u011Bzda a planety",gt.filter(a=>a.type==="star"||a.type==="planet"))}${s("Trpasli\u010D\xED planety a kometa",gt.filter(a=>a.type==="dwarf"||a.type==="comet"))}${r.map(a=>s(`M\u011Bs\xEDce: ${ot[a].name}`,gt.filter(o=>o.parent===a))).join("")}</div>`}else if(an==="mission"){let t=Kc(),i=qr();n.innerHTML=e("Mise")+`<p class="lead">${Dt()?"Ka\u017Ed\xE1 mise je h\xE1danka. Vy\u0159e\u0161 ji a dole\u0165 na spr\xE1vn\xE9 m\xEDsto.":"Mise jsou zadan\xE9 jako h\xE1danky. Spln\xED\u0161 je p\u0159\xEDletem k hledan\xE9mu t\u011Blesu nebo proveden\xEDm \xFAkolu."}</p><ol class="missions">${t.map(s=>{let r=Oe.done.includes(s.id),a=i&&i.id===s.id;return`<li class="${r?"done":""} ${a?"act":""}"><span class="st">${r?Zt("check"):""}</span><span class="tx">${s.text}</span>${!r&&!a?`<button class="link" data-mission="${s.id}">Vybrat</button>`:a?'<span class="chip">aktivn\xED</span>':'<span class="chip ok">+30</span>'}</li>`}).join("")}</ol>`}else if(an==="pass"){let t=Oe.visited.length,i=rl();n.innerHTML=e("Vesm\xEDrn\xFD pas")+`<div class="passhead"><div><span class="eyebrow">Dr\u017Eitel pasu</span><b class="rk">${i.name}</b></div><div><span class="eyebrow">Raz\xEDtka</span><b class="rk">${t} / ${gt.length}</b></div><div><span class="eyebrow">Body</span><b class="rk">${Oe.xp}</b></div></div>
    <p class="lead">${Dt()?"Za ka\u017Ed\xE9 m\xEDsto, kam dolet\xED\u0161, dostane\u0161 raz\xEDtko.":"Raz\xEDtko z\xEDsk\xE1\u0161 p\u0159\xEDletem k t\u011Blesu. Za raz\xEDtko je 10 bod\u016F, za misi 30, za spr\xE1vnou odpov\u011B\u010F v kv\xEDzu 5."}</p>
    <div class="stamps">${gt.map((s,r)=>{let a=Oe.visited.includes(s.id);return`<button class="stamp ${a?"got":""}" data-go="${s.id}" style="--rot:${r*37%13-6}deg">${a?Gr(s):'<span class="thumb q">?</span>'}<span>${s.name}</span></button>`}).join("")}</div>
    <button class="link danger" data-act="reset">Vymazat postup a za\u010D\xEDt znovu</button>`}else an==="quiz"?(n.innerHTML=e("Kv\xEDz")+'<div id="quiz"></div>',hl()):an==="lab"&&(n.innerHTML=e("Laborato\u0159")+'<div id="lab"></div>',gv())}var pt={qs:null,i:0,score:0,picked:null};function pv(){let n=[...md[Dt()?"kid":"pro"]];for(let e=n.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[n[e],n[t]]=[n[t],n[e]]}Object.assign(pt,{qs:n.slice(0,5),i:0,score:0,picked:null}),hl()}function hl(){let n=Le("#quiz");if(!n)return;if(!pt.qs){n.innerHTML='<p class="lead">P\u011Bt ot\xE1zek. Za ka\u017Edou spr\xE1vnou odpov\u011B\u010F je 5 bod\u016F.</p><button class="btn" data-act="quiz-start">Spustit kv\xEDz</button>';return}if(pt.i>=pt.qs.length){n.innerHTML=`<div class="result"><b>${pt.score} z ${pt.qs.length}</b><span>${pt.score===5?"Bez jedin\xE9 chyby!":pt.score>=3?"Dobr\xE1 pr\xE1ce.":"Odpov\u011Bdi najde\u0161 v kart\xE1ch t\u011Bles. Zkus to znovu."}</span></div><button class="btn" data-act="quiz-start">Hr\xE1t znovu</button>`;return}let e=pt.qs[pt.i],t=pt.picked;n.innerHTML=`<span class="eyebrow">Ot\xE1zka ${pt.i+1} z ${pt.qs.length}</span><h3>${e.q}</h3><div class="answers">${e.a.map((i,s)=>`<button class="ans ${t!=null?s===e.c?"right":s===t?"wrong":"":""}" data-ans="${s}" ${t!=null?"disabled":""}>${i}</button>`).join("")}</div>${t!=null?`<p class="expl"><b>${t===e.c?"Spr\xE1vn\u011B.":"Tentokr\xE1t ne."}</b> ${e.e}</p><button class="btn" data-act="quiz-next">${pt.i===pt.qs.length-1?"Vyhodnotit":"Dal\u0161\xED ot\xE1zka"}</button>`:""}`}var dn={kg:null,age:null,dest:"mars"},mv=["sun","mercury","venus","earth","moon","mars","jupiter","saturn","titan","uranus","neptune","pluto"],Br=(n,e=()=>!0)=>gt.filter(e).map(t=>`<option value="${t.id}" ${t.id===n?"selected":""}>${t.name}</option>`).join("");function gv(){let n=Le("#lab");n&&(dn.kg==null&&(dn.kg=Dt()?30:75,dn.age=Dt()?9:40),n.innerHTML=`<section class="tool"><h3>Porovn\xE1n\xED velikost\xED</h3><p class="lead">Dv\u011B t\u011Blesa vedle sebe ve stejn\xE9m m\u011B\u0159\xEDtku.</p>
    <div class="row"><select id="cmp-a" class="field" aria-label="Prvn\xED t\u011Bleso">${Br(Pe.a)}</select><select id="cmp-b" class="field" aria-label="Druh\xE9 t\u011Bleso">${Br(Pe.b)}</select></div><button class="btn" data-act="cmp-open">Porovnat</button></section>
  <section class="tool"><h3>${Dt()?"J\xE1 na jin\xFDch sv\u011Btech":"V\xE1ha a v\u011Bk na jin\xFDch t\u011Blesech"}</h3>
    <div class="row"><label>V\xE1ha na Zemi (kg)<input id="lab-kg" class="field" type="number" min="1" max="300" value="${dn.kg}"></label><label>V\u011Bk (roky)<input id="lab-age" class="field" type="number" min="1" max="120" value="${dn.age}"></label></div><div id="weigh"></div></section>
  <section class="tool"><h3>${Dt()?"Jak dlouho bych tam let\u011Bl(a)?":"Doba cesty ze Zem\u011B"}</h3><p class="lead">Po\u010D\xEDt\xE1 se z aktu\xE1ln\xED vzd\xE1lenosti v modelu, p\u0159\xEDmou \u010Darou.</p>
    <select id="lab-dest" class="field" aria-label="C\xEDl cesty">${Br(dn.dest,e=>e.id!=="earth")}</select><div id="trip"></div></section>`,Kd(),Qd())}function Kd(){let n=Le("#weigh");n&&(n.innerHTML=`<div class="tw"><table class="data cols"><thead><tr><th>Kde</th><th>V\xE1ha uk\xE1\u017Ee</th><th>V\xFDskok</th><th>V\u011Bk</th></tr></thead><tbody>${mv.map(e=>{let t=ot[e],i=t.type==="moon"||t.type==="star"?null:jd(t)/365.25;return`<tr><th>${t.name}</th><td>${We(dn.kg*t.g/9.81,1)} kg</td><td>${t.type==="star"||t.mass>10?"\u2013":We(.4*9.81/t.g,1)+" m"}</td><td>${i?We(dn.age/i,i>20?2:1):"\u2013"}</td></tr>`}).join("")}</tbody></table></div><p class="note">V\xFDskok po\u010D\xEDt\xE1 se skokem 40 cm na Zemi. V\u011Bk je v m\xEDstn\xEDch roc\xEDch, tedy ob\u011Bz\xEDch kolem Slunce. Plynn\xED ob\u0159i nemaj\xED pevn\xFD povrch, v\xE1ha plat\xED pro vrcholky oblak\u016F.</p>`)}var _v=[["P\u011B\u0161ky",5],["Autem po d\xE1lnici",130],["Dopravn\xEDm letadlem",900],["Rychlou sondou (New Horizons)",58e3],["Rychlost\xED sv\u011Btla",10792528488e-1]];function Qd(){let n=Le("#trip");if(!n)return;let e=ot[dn.dest],t=Yd(e,ot.earth)*si;n.innerHTML=`<p class="big">${e.name} je te\u010F <b>${t<5e6?We(t)+" km":We(t/1e6,1)+" milionu km"}</b> od Zem\u011B.</p><table class="data"><tbody>${_v.map(i=>`<tr><th>${i[0]}<small>${i[1]>1e8?"299 792 km/s":We(i[1])+" km/h"}</small></th><td>${lv(t/i[1])}</td></tr>`).join("")}</tbody></table>`}function Uc(n,e){if(n&&(Pe.a=n),e&&(Pe.b=e),Pe.on=!0,document.body.classList.add("cmp"),!Pe.scene){Pe.scene=new Ts,Pe.cam=new ki(-1,1,1,-1,1,6e3),Pe.cam.position.z=3e3,Pe.L=new N(-.6,.38,.9).normalize();let t=new Tr(16774888,Math.PI*1.05);t.position.copy(Pe.L),Pe.scene.add(t,new Ds(16777215,.07)),Pe.scene.background=new Fe(460314)}th(),Ei("compare")}function th(){for(let a of["va","vb"])Pe[a]&&(Pe.scene.remove(Pe[a].group),Pe[a].dispose());Pe.va=kc(ot[Pe.a]),Pe.vb=kc(ot[Pe.b]),Pe.scene.add(Pe.va.group,Pe.vb.group);let n=ot[Pe.a],e=ot[Pe.b],t=n.R>=e.R?n:e,i=t===n?e:n,s=t.R/i.R,r=a=>`<div class="cap"><h2>${a.name}</h2><span>${Or[a.type]} \xB7 pr\u016Fm\u011Br ${We(a.R*2)} km</span></div>`;Le("#cmpbar").hidden=!1,Le("#cmpbar").innerHTML=`<div class="cmp-top"><span class="eyebrow">Porovn\xE1n\xED velikost\xED</span><button class="btn ghost" data-act="cmp-close">${Zt("close")} Zav\u0159\xEDt</button></div>
  <div class="cmp-caps">${r(n)}${r(e)}</div>
  <div class="cmp-ctl"><select id="cmp-a2" class="field" aria-label="Prvn\xED t\u011Bleso">${Br(Pe.a)}</select><button class="iconbtn" data-act="cmp-swap" aria-label="Prohodit t\u011Blesa">${Zt("swap")}</button><select id="cmp-b2" class="field" aria-label="Druh\xE9 t\u011Bleso">${Br(Pe.b)}</select></div>
  <p class="cmp-fact">${n===e?"Vyber dv\u011B r\u016Fzn\xE1 t\u011Blesa.":s<1.02?`${n.name} a ${e.name} jsou skoro stejn\u011B velk\xE9.`:`T\u011Bleso ${t.name} m\xE1 ${We(s,s<10?2:0)}\xD7 v\u011Bt\u0161\xED pr\u016Fm\u011Br ne\u017E ${i.name}. Objemem by se do n\u011Bj t\u011Bleso ${i.name} ve\u0161lo asi ${We(s**3,s**3<100?1:0)}\xD7.`}</p><i id="cmp-mark"></i>`}function nh(){Pe.on=!1,document.body.classList.remove("cmp"),Le("#cmpbar").hidden=!0}var vv=new nn().setFromEuler(new Rn(.32,0,.1));function xv(n){let e=ot[Pe.a],t=ot[Pe.b],i=Math.max(e.R,t.R),s=c=>c.ring==="saturn"?2.4:c.type==="star"?1.35:1.06,r=Math.min(yn*.25*.86,Mn*.27)/Math.max(e.R>=t.R?s(e):s(t),1),a=Pe.cam;a.left=-yn/2,a.right=yn/2,a.top=Mn/2,a.bottom=-Mn/2,a.updateProjectionMatrix(),[[Pe.va,e,-1],[Pe.vb,t,1]].forEach(([c,h,d])=>{let u=h.R/i*r;c.group.position.set(d*yn/4,Mn*.05,0),c.group.scale.setScalar(u),c.spin.quaternion.copy(vv).multiply(Hd.setFromAxisAngle(Gd,n*.12*(h.rot<0?-1:1))),c.update(Pe.L),c.group.userData.glow&&c.group.userData.glow.scale.setScalar(2.6),h._cr=u,h._cx=yn/2+d*yn/4});let o=e.R<t.R?e:t,l=Le("#cmp-mark");l&&(l.style.display=o._cr<3?"block":"none",l.style.left=o._cx+"px",l.style.top=Mn*.45+"px"),al.render(Pe.scene,a)}var yv=["ledna","\xFAnora","b\u0159ezna","dubna","kv\u011Btna","\u010Dervna","\u010Dervence","srpna","z\xE1\u0159\xED","\u0159\xEDjna","listopadu","prosince"],Hc="";function ef(){let n=Ld(ze.jd),e=!ze.paused&&ze.sp===0&&ze.dir===1&&Math.abs(ze.jd-Xc())<7e-4,t=Vr[ze.sp][0]<=3600||ze.paused,i=`<span class="d">${n.getDate()}. ${yv[n.getMonth()]} ${n.getFullYear()}</span>${t?`<span class="t">${String(n.getHours()).padStart(2,"0")}:${String(n.getMinutes()).padStart(2,"0")}</span>`:""}${e?'<span class="live">\u017Eiv\u011B</span>':""}`;i!==Hc&&Le("#date")&&(Le("#date").innerHTML=i,Hc=i)}var zr=!1;function fn(){let n=Vr[ze.sp],e=Dt(),t=[["orbits","Dr\xE1hy"],["labels","Popisky"],["moons","M\u011Bs\xEDce"],["dwarf","Trpasli\u010D\xED planety"],["belts","P\xE1sy planetek"],["comet","Halleyova kometa"]];Le("#time").innerHTML=`<button class="iconbtn" data-act="home" aria-label="Zp\u011Bt na p\u0159ehled soustavy" title="P\u0159ehled soustavy">${Zt("home")}</button>
  <button id="date" class="date" data-act="date" title="Nastavit datum"></button><input id="datein" type="date" class="field" hidden aria-label="Datum">
  <div class="tctl"><button class="iconbtn" data-act="slower" aria-label="Zpomalit \u010Das">${Zt("rw")}</button><button class="iconbtn main" data-act="pause" aria-label="${ze.paused?"Spustit \u010Das":"Zastavit \u010Das"}">${Zt(ze.paused?"play":"pause")}</button><button class="iconbtn" data-act="faster" aria-label="Zrychlit \u010Das">${Zt("ff")}</button></div>
  <span class="speed">${ze.paused?"stoj\xED":(ze.dir<0?"zp\u011Bt, ":"")+(e&&n[2]||n[1])}</span>
  ${e?"":`<button class="tbtn ${ze.dir<0?"on":""}" data-act="reverse" aria-pressed="${ze.dir<0}">Zp\u011Bt v \u010Dase</button>`}
  <button class="tbtn" data-act="now">Te\u010F</button>
  <div class="seg" role="group" aria-label="M\u011B\u0159\xEDtko"><button class="${Gn===0?"on":""}" data-act="scale0" aria-pressed="${Gn===0}">${e?"P\u0159ehledn\u011B":"P\u0159ehledn\xE9 m\u011B\u0159\xEDtko"}</button><button class="${Gn===1?"on":""}" data-act="scale1" aria-pressed="${Gn===1}">${e?"Doopravdy":"Skute\u010Dn\xE9 m\u011B\u0159\xEDtko"}</button></div>
  <div class="layers"><button class="iconbtn ${zr?"on":""}" data-act="layers" aria-label="Vrstvy" aria-expanded="${zr}" title="Vrstvy">${Zt("layers")}</button>${zr?`<div class="pop">${t.map(i=>`<label><input type="checkbox" data-layer="${i[0]}" ${Jt[i[0]]?"checked":""}>${i[1]}</label>`).join("")}</div>`:""}</div>`,Hc="",ef()}var Mv=["sun","mercury","venus","earth","moon","mars","jupiter","saturn","uranus","neptune","pluto"];function $r(){Le("#dock").innerHTML=Mv.map(n=>{let e=ot[n];return`<button data-go="${n}" class="${mt===e?"on":""} ${Oe.visited.includes(n)?"seen":""}">${Gr(e)}<span>${e.name}</span></button>`}).join("")}function Rd(n){let e=Nd(),t=e.indexOf(ze.sp);t<0&&(t=e.findIndex(i=>i>=ze.sp)),ze.sp=e[ai(t+n,0,e.length-1)],ze.paused=!1,fn()}function Gc(n){Oe.mode=n,qs(),document.body.dataset.mode=n,Nd().includes(ze.sp)||(ze.sp=3),tf(),dn.kg=null,pt.qs=null,Yi=!1,cl(),wi(),Qc(),fn(),$r(),ji(),ll(),ih()}function tf(){let n=Oe.mode||"kid";Le("#modeseg").innerHTML=`<button class="${n==="kid"?"on":""}" data-mode="kid" aria-pressed="${n==="kid"}">D\u011Bti</button><button class="${n==="pro"?"on":""}" data-mode="pro" aria-pressed="${n==="pro"}">Dosp\u011Bl\xED</button>`}function ih(){Le("#soundbtn").innerHTML=Zt(Oe.sound?"sound":"mute"),Le("#soundbtn").setAttribute("aria-pressed",Oe.sound)}function ul(){Le("#modal").hidden=!0}function Sv(){Le("#modal").hidden=!1,Le("#modal").innerHTML='<div class="sheet welcome"><span class="eyebrow">V\xEDtej na palub\u011B</span><h1>Kosmick\xE1 v\xFDprava</h1><p>Prole\u0165 se Slune\u010Dn\xED soustavou tak, jak vypad\xE1 pr\xE1v\u011B dnes. Sb\xEDrej raz\xEDtka do vesm\xEDrn\xE9ho pasu, \u0159e\u0161 mise a zkou\u0161ej, co se stane, kdy\u017E zrychl\xED\u0161 \u010Das.</p><p class="q">Kdo dnes \u0159\xEDd\xED lo\u010F?</p><div class="choose"><button data-start="kid"><b>Kadet</b><span>Pro d\u011Bti. Velk\xE1 tla\u010D\xEDtka, kr\xE1tk\xE9 texty, \u010Dten\xED nahlas.</span></button><button data-start="pro"><b>Navig\xE1tor</b><span>Pro dosp\u011Bl\xE9 a zku\u0161en\xE9. Data, dr\xE1hov\xE9 elementy, t\u011B\u017E\u0161\xED mise.</span></button></div><p class="note">Re\u017Eim jde kdykoli p\u0159epnout vpravo naho\u0159e.</p></div>'}function bv(){Le("#modal").hidden=!1,Le("#modal").innerHTML=`<div class="sheet"><div class="p-head"><h2>O aplikaci</h2><button class="iconbtn" data-act="modal-close" aria-label="Zav\u0159\xEDt">${Zt("close")}</button></div>
  <h3>Ovl\xE1d\xE1n\xED</h3><ul class="plain"><li>Ta\u017Een\xEDm ot\xE1\u010D\xED\u0161 pohled, kole\u010Dkem nebo dv\u011Bma prsty p\u0159ibli\u017Euje\u0161.</li><li>Klepnut\xEDm na t\u011Bleso nebo popisek k n\u011Bmu dolet\xED\u0161.</li><li>Mezern\xEDk zastav\xED a spust\xED \u010Das. Klepnut\xEDm na datum zad\xE1\u0161 vlastn\xED den.</li></ul>
  <h3>Co je p\u0159esn\xE9 a co ne</h3><ul class="plain"><li>Polohy planet a Pluta se po\u010D\xEDtaj\xED z Keplerov\xFDch element\u016F JPL. V letech 1800 a\u017E 2050 odpov\xEDdaj\xED skute\u010Dnosti na zlomky stupn\u011B.</li><li>Ceres, Haumea, Makemake, Eris a Halleyova kometa maj\xED p\u0159ibli\u017En\xE9 dr\xE1hy. F\xE1ze M\u011Bs\xEDce sed\xED na n\u011Bkolik stup\u0148\u016F.</li><li>M\u011Bs\xEDce ostatn\xEDch planet ob\xEDhaj\xED po kru\u017Enic\xEDch se spr\xE1vnou periodou a sm\u011Brem, jejich okam\u017Eit\xE1 poloha je jen ilustra\u010Dn\xED.</li><li>P\u0159ehledn\xE9 m\u011B\u0159\xEDtko zv\u011Bt\u0161uje t\u011Blesa a stla\u010Duje vzd\xE1lenosti. Skute\u010Dn\xE9 m\u011B\u0159\xEDtko zachov\xE1v\xE1 pom\u011Br velikost\xED a vzd\xE1lenost\xED.</li><li>Nato\u010Den\xED Zem\u011B a sklon os planet odpov\xEDdaj\xED zvolen\xE9mu datu. Textury Haumey, Makemake a Eris jsou um\u011Bleck\xE9 p\u0159edstavy.</li></ul>
  <h3>Pou\u017Eit\xE9 zdroje</h3><ul class="plain credits">${gd.map(n=>`<li><b>${n[0]}</b><br>${n[1]}<br><a href="${n[2]}" target="_blank" rel="noopener">${n[2].replace("https://","")}</a></li>`).join("")}</ul></div>`}var Cd={home:tv,"card-close":cv,"panel-close":eh,"modal-close":ul,speak:hv,hint(){Yi=!Yi,$i=!1,ji()},"mission-min"(){$i=!$i,ji()},pause(){ze.paused=!ze.paused,fn()},slower(){Rd(-1)},faster(){Rd(1)},reverse(){ze.dir*=-1,fn()},now(){ze.jd=Xc(),ze.dir=1,ze.sp=0,ze.paused=!1,fn()},scale0(){Gn=0,fn()},scale1(){Gn!==1&&$s(Dt()?"Takhle je to doopravdy. Planety jsou proti vzd\xE1lenostem tak mali\u010Dk\xE9, \u017Ee vid\xED\u0161 jen krou\u017Eky. P\u0159ibli\u017E si je.":"Skute\u010Dn\xFD pom\u011Br velikost\xED a vzd\xE1lenost\xED. T\u011Blesa jsou vid\u011Bt jako zna\u010Dky, dokud je nep\u0159ibl\xED\u017E\xED\u0161."),Gn=1,fn(),Ei("scaleTrue")},layers(){zr=!zr,fn()},date(){let n=Le("#datein");n.hidden=!1,Le("#date").hidden=!0,n.value=Ld(ze.jd).toISOString().slice(0,10),n.focus()},about:bv,sound(){Oe.sound=!Oe.sound,qs(),ih(),Hn([700])},"quiz-start":pv,"quiz-next"(){pt.i++,pt.picked=null,hl()},"cmp-open"(){Uc(Le("#cmp-a").value,Le("#cmp-b").value)},"cmp-close":nh,"cmp-swap"(){[Pe.a,Pe.b]=[Pe.b,Pe.a],th()},"cmp-earth"(){Uc("earth",Zi.id)},"cmp-sun"(){Uc("earth","sun")},reset(){let n=document.querySelector('[data-act="reset"]');n.dataset.sure?(Oe.visited=[],Oe.done=[],Oe.xp=0,Oe.mission={},qs(),ll(),ji(),wi(),$r(),Qc(),$s("Postup je vymazan\xFD.")):(n.dataset.sure=1,n.textContent="Opravdu vymazat? Klepni je\u0161t\u011B jednou.")}};document.addEventListener("click",n=>{let e=n.target.closest("[data-act],[data-go],[data-tab],[data-mode],[data-start],[data-ans],[data-mission]");if(!e)return;let t=e.dataset;if(t.act&&Cd[t.act])Cd[t.act](e);else if(t.go)Pe.on&&nh(),Xr(ot[t.go]),Hn([520]),innerWidth<760&&eh();else if(t.tab)dv(t.tab);else if(t.mode)Gc(t.mode);else if(t.start)ul(),Gc(t.start),t.start==="pro"&&(ze.sp=0,fn()),Hn([523,784]);else if(t.ans!=null){let i=pt.qs[pt.i];pt.picked=+t.ans,pt.picked===i.c?(pt.score++,Jc(5),Hn([784,1047])):Hn([220,196]),hl()}else t.mission&&(Oe.mission[Oe.mode]=t.mission,qs(),Yi=!1,$i=!1,sl=0,ji(),wi(),Ei("check"))});document.addEventListener("input",n=>{let e=n.target;if(e.id==="atlas-q"){Vc=e.value;let t=e.selectionStart;wi();let i=Le("#atlas-q");i.focus(),i.setSelectionRange(t,t)}(e.id==="lab-kg"||e.id==="lab-age")&&(dn.kg=ai(+Le("#lab-kg").value||0,0,500),dn.age=ai(+Le("#lab-age").value||0,0,150),Kd(),Ei("weigh"))});document.addEventListener("change",n=>{let e=n.target;if(e.dataset.layer&&(Jt[e.dataset.layer]=e.checked),e.id==="lab-dest"&&(dn.dest=e.value,Qd()),(e.id==="cmp-a2"||e.id==="cmp-b2")&&(Pe.a=Le("#cmp-a2").value,Pe.b=Le("#cmp-b2").value,th()),e.id==="cmp-a"&&(Pe.a=e.value),e.id==="cmp-b"&&(Pe.b=e.value),e.id==="datein"){let t=new Date(e.value+"T12:00:00");isNaN(t)||(ze.jd=t.getTime()/864e5+24405875e-1,ze.paused=!0),fn()}});document.addEventListener("focusout",n=>{n.target.id==="datein"&&setTimeout(fn,100)});Le("#modal").addEventListener("click",n=>{n.target.id==="modal"&&Oe.mode&&ul()});qc(ze.jd);nt.dist=nt.goal=Vd();document.body.dataset.mode=Oe.mode||"kid";cl();fn();$r();ll();ih();Oe.mode?Gc(Oe.mode):(tf(),ji(),Sv());var Pd=!1;function nf(){Pd||(Pd=!0,Le("#loader").classList.add("gone"),setTimeout(()=>Le("#loader").remove(),700))}$c.onLoad=nf;setTimeout(nf,9e3);requestAnimationFrame(Wd);window.__app={B:ot,time:ze,cam:nt,flyTo:Xr,store:Oe,layers:Jt,setScale:n=>{Gn=n}};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
