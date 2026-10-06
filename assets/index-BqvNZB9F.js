(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1e3,t=1001,n=1002,r=1003,i=1004,a=1005,o=1006,s=1007,c=1008,l=1009,u=1010,d=1011,f=1012,p=1013,m=1014,h=1015,g=1016,_=1017,v=1018,y=1020,b=35902,x=35899,S=1021,C=1022,w=1023,T=1026,E=1027,D=1028,O=1029,k=1030,A=1031,ee=1033,j=33776,te=33777,M=33778,ne=33779,N=35840,re=35841,ie=35842,ae=35843,oe=36196,se=37492,ce=37496,le=37488,P=37489,ue=37490,de=37491,fe=37808,pe=37809,me=37810,he=37811,ge=37812,_e=37813,ve=37814,ye=37815,be=37816,xe=37817,Se=37818,Ce=37819,we=37820,Te=37821,Ee=36492,De=36494,Oe=36495,ke=36283,Ae=36284,je=36285,Me=36286,Ne=2300,F=2301,Pe=2302,Fe=2303,Ie=2400,I=2401,Le=2402,L=3200,Re=`srgb`,ze=`srgb-linear`,Be=`linear`,Ve=`srgb`,He=7680,Ue=35044,We=35048,Ge=2e3;function Ke(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function qe(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Je(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Ye(){let e=Je(`canvas`);return e.style.display=`block`,e}var Xe={};function Ze(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Qe(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function R(...e){e=Qe(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function z(...e){e=Qe(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function $e(...e){let t=e.join(` `);t in Xe||(Xe[t]=!0,R(...e))}function et(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var tt={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},nt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},rt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),it=Math.PI/180,at=180/Math.PI;function ot(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(rt[e&255]+rt[e>>8&255]+rt[e>>16&255]+rt[e>>24&255]+`-`+rt[t&255]+rt[t>>8&255]+`-`+rt[t>>16&15|64]+rt[t>>24&255]+`-`+rt[n&63|128]+rt[n>>8&255]+`-`+rt[n>>16&255]+rt[n>>24&255]+rt[r&255]+rt[r>>8&255]+rt[r>>16&255]+rt[r>>24&255]).toLowerCase()}function st(e,t,n){return Math.max(t,Math.min(n,e))}function ct(e,t){return(e%t+t)%t}function lt(e,t,n){return(1-n)*e+n*t}function ut(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function dt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var B=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ft=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:R(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return pt.copy(this).projectOnVector(e),this.sub(pt)}reflect(e){return this.sub(pt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},pt=new V,mt=new ft,H=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return $e(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(ht.makeScale(e,t)),this}rotate(e){return $e(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(ht.makeRotation(-e)),this}translate(e,t){return $e(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(ht.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ht=new H,gt=new H().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_t=new H().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vt(){let e={enabled:!0,workingColorSpace:ze,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=bt(e.r),e.g=bt(e.g),e.b=bt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=xt(e.r),e.g=xt(e.g),e.b=xt(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Be:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return $e(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return $e(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[ze]:{primaries:t,whitePoint:r,transfer:Be,toXYZ:gt,fromXYZ:_t,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Re},outputColorSpaceConfig:{drawingBufferColorSpace:Re}},[Re]:{primaries:t,whitePoint:r,transfer:Ve,toXYZ:gt,fromXYZ:_t,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Re}}}),e}var yt=vt();function bt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function xt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var St,Ct=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{St===void 0&&(St=Je(`canvas`)),St.width=e.width,St.height=e.height;let t=St.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=St}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Je(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=bt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(bt(t[e]/255)*255):t[e]=bt(t[e]);return{data:t,width:e.width,height:e.height}}return R(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},wt=0,Tt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:wt++}),this.uuid=ot(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Et(r[t].image)):e.push(Et(r[t]))}else e=Et(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Et(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Ct.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(R(`Texture: Unable to serialize Texture.`),{})}var Dt=0,Ot=new V,kt=class r extends nt{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=t,a=t,s=o,u=c,d=w,f=l,p=r.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dt++}),this.uuid=ot(),this.name=``,this.source=new Tt(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new B(0,0),this.repeat=new B(1,1),this.center=new B(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new H,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ot).x}get height(){return this.source.getSize(Ot).y}get depth(){return this.source.getSize(Ot).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){R(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){R(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x)}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y)}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};kt.DEFAULT_IMAGE=null,kt.DEFAULT_MAPPING=300,kt.DEFAULT_ANISOTROPY=1;var At=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},jt=class extends nt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t),this.textures=[];let r=new kt({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:o,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Tt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Mt=class extends jt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Nt=class extends kt{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Pt=class extends kt{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Ft=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/It.setFromMatrixColumn(e,0).length(),i=1/It.setFromMatrixColumn(e,1).length(),a=1/It.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rt,e,zt)}lookAt(e,t,n){let r=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),Bt.crossVectors(n,Ht),Bt.lengthSq()===0&&(Math.abs(n.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),Bt.crossVectors(n,Ht)),Bt.normalize(),Vt.crossVectors(Ht,Bt),r[0]=Bt.x,r[4]=Vt.x,r[8]=Ht.x,r[1]=Bt.y,r[5]=Vt.y,r[9]=Ht.y,r[2]=Bt.z,r[6]=Vt.z,r[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],ee=r[10],j=r[14],te=r[3],M=r[7],ne=r[11],N=r[15];return i[0]=a*x+o*T+s*k+c*te,i[4]=a*S+o*E+s*A+c*M,i[8]=a*C+o*D+s*ee+c*ne,i[12]=a*w+o*O+s*j+c*N,i[1]=l*x+u*T+d*k+f*te,i[5]=l*S+u*E+d*A+f*M,i[9]=l*C+u*D+d*ee+f*ne,i[13]=l*w+u*O+d*j+f*N,i[2]=p*x+m*T+h*k+g*te,i[6]=p*S+m*E+h*A+g*M,i[10]=p*C+m*D+h*ee+g*ne,i[14]=p*w+m*O+h*j+g*N,i[3]=_*x+v*T+y*k+b*te,i[7]=_*S+v*E+y*A+b*M,i[11]=_*C+v*D+y*ee+b*ne,i[15]=_*w+v*O+y*j+b*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=It.set(r[0],r[1],r[2]).length(),o=It.set(r[4],r[5],r[6]).length(),s=It.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Lt.copy(this);let c=1/a,l=1/o,u=1/s;return Lt.elements[0]*=c,Lt.elements[1]*=c,Lt.elements[2]*=c,Lt.elements[4]*=l,Lt.elements[5]*=l,Lt.elements[6]*=l,Lt.elements[8]*=u,Lt.elements[9]*=u,Lt.elements[10]*=u,t.setFromRotationMatrix(Lt),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ge,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ge,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},It=new V,Lt=new Ft,Rt=new V(0,0,0),zt=new V(1,1,1),Bt=new V,Vt=new V,Ht=new V,Ut=new Ft,Wt=new ft,Gt=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-st(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(st(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(st(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:R(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ut.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ut,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wt.setFromEuler(this),this.setFromQuaternion(Wt,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Gt.DEFAULT_ORDER=`XYZ`;var Kt=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},qt=0,Jt=new V,Yt=new ft,Xt=new Ft,Zt=new V,Qt=new V,$t=new V,en=new ft,tn=new V(1,0,0),nn=new V(0,1,0),rn=new V(0,0,1),an={type:`added`},on={type:`removed`},sn={type:`childadded`,child:null},cn={type:`childremoved`,child:null},ln=class e extends nt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qt++}),this.uuid=ot(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new V,n=new Gt,r=new ft,i=new V(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ft},normalMatrix:{value:new H}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kt,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yt.setFromAxisAngle(e,t),this.quaternion.multiply(Yt),this}rotateOnWorldAxis(e,t){return Yt.setFromAxisAngle(e,t),this.quaternion.premultiply(Yt),this}rotateX(e){return this.rotateOnAxis(tn,e)}rotateY(e){return this.rotateOnAxis(nn,e)}rotateZ(e){return this.rotateOnAxis(rn,e)}translateOnAxis(e,t){return Jt.copy(e).applyQuaternion(this.quaternion),this.position.add(Jt.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tn,e)}translateY(e){return this.translateOnAxis(nn,e)}translateZ(e){return this.translateOnAxis(rn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Zt.copy(e):Zt.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Qt.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xt.lookAt(Qt,Zt,this.up):Xt.lookAt(Zt,Qt,this.up),this.quaternion.setFromRotationMatrix(Xt),r&&(Xt.extractRotation(r.matrixWorld),Yt.setFromRotationMatrix(Xt),this.quaternion.premultiply(Yt.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(z(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(an),sn.child=e,this.dispatchEvent(sn),sn.child=null):z(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(on),cn.child=e,this.dispatchEvent(cn),cn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(an),sn.child=e,this.dispatchEvent(sn),sn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qt,e,$t),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qt,en,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};ln.DEFAULT_UP=new V(0,1,0),ln.DEFAULT_MATRIX_AUTO_UPDATE=!0,ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var un=class extends ln{constructor(){super(),this.isGroup=!0,this.type=`Group`}},dn={type:`move`},fn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(dn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new un;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},pn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mn={h:0,s:0,l:0},hn={h:0,s:0,l:0};function gn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var U=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Re){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,yt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=yt.workingColorSpace){if(e=ct(e,1),t=st(t,0,1),n=st(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=gn(i,r,e+1/3),this.g=gn(i,r,e),this.b=gn(i,r,e-1/3)}return yt.colorSpaceToWorking(this,r),this}setStyle(e,t=Re){function n(t){t!==void 0&&parseFloat(t)<1&&R(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:R(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);R(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Re){let n=pn[e.toLowerCase()];return n===void 0?R(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bt(e.r),this.g=bt(e.g),this.b=bt(e.b),this}copyLinearToSRGB(e){return this.r=xt(e.r),this.g=xt(e.g),this.b=xt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Re){return yt.workingToColorSpace(_n.copy(this),e),Math.round(st(_n.r*255,0,255))*65536+Math.round(st(_n.g*255,0,255))*256+Math.round(st(_n.b*255,0,255))}getHexString(e=Re){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.workingToColorSpace(_n.copy(this),t);let n=_n.r,r=_n.g,i=_n.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=yt.workingColorSpace){return yt.workingToColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=Re){yt.workingToColorSpace(_n.copy(this),e);let t=_n.r,n=_n.g,r=_n.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(mn),this.setHSL(mn.h+e,mn.s+t,mn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(mn),e.getHSL(hn);let n=lt(mn.h,hn.h,t),r=lt(mn.s,hn.s,t),i=lt(mn.l,hn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_n=new U;U.NAMES=pn;var vn=class e{constructor(e,t=25e-5){this.isFogExp2=!0,this.name=``,this.color=new U(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}},yn=class extends ln{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gt,this.environmentIntensity=1,this.environmentRotation=new Gt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},bn=new V,xn=new V,Sn=new V,Cn=new V,wn=new V,Tn=new V,En=new V,Dn=new V,On=new V,kn=new V,An=new At,jn=new At,Mn=new At,Nn=class e{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),bn.subVectors(e,t),r.cross(bn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){bn.subVectors(r,t),xn.subVectors(n,t),Sn.subVectors(e,t);let a=bn.dot(bn),o=bn.dot(xn),s=bn.dot(Sn),c=xn.dot(xn),l=xn.dot(Sn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Cn)!==null&&Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Cn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Cn.x),s.addScaledVector(a,Cn.y),s.addScaledVector(o,Cn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return An.setScalar(0),jn.setScalar(0),Mn.setScalar(0),An.fromBufferAttribute(e,t),jn.fromBufferAttribute(e,n),Mn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(An,i.x),a.addScaledVector(jn,i.y),a.addScaledVector(Mn,i.z),a}static isFrontFacing(e,t,n,r){return bn.subVectors(n,t),xn.subVectors(e,t),bn.cross(xn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),bn.cross(xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;wn.subVectors(r,n),Tn.subVectors(i,n),Dn.subVectors(e,n);let s=wn.dot(Dn),c=Tn.dot(Dn);if(s<=0&&c<=0)return t.copy(n);On.subVectors(e,r);let l=wn.dot(On),u=Tn.dot(On);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(wn,a);kn.subVectors(e,i);let f=wn.dot(kn),p=Tn.dot(kn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Tn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return En.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(En,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(wn,a).addScaledVector(Tn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Pn=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(In.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(In.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=In.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,In):In.fromBufferAttribute(r,t),In.applyMatrix4(e.matrixWorld),this.expandByPoint(In);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Ln.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Ln.copy(e.boundingBox)),Ln.applyMatrix4(e.matrixWorld),this.union(Ln)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wn),Gn.subVectors(this.max,Wn),Rn.subVectors(e.a,Wn),zn.subVectors(e.b,Wn),Bn.subVectors(e.c,Wn),Vn.subVectors(zn,Rn),Hn.subVectors(Bn,zn),Un.subVectors(Rn,Bn);let t=[0,-Vn.z,Vn.y,0,-Hn.z,Hn.y,0,-Un.z,Un.y,Vn.z,0,-Vn.x,Hn.z,0,-Hn.x,Un.z,0,-Un.x,-Vn.y,Vn.x,0,-Hn.y,Hn.x,0,-Un.y,Un.x,0];return!Jn(t,Rn,zn,Bn,Gn)||(t=[1,0,0,0,1,0,0,0,1],!Jn(t,Rn,zn,Bn,Gn))?!1:(Kn.crossVectors(Vn,Hn),t=[Kn.x,Kn.y,Kn.z],Jn(t,Rn,zn,Bn,Gn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Fn=[new V,new V,new V,new V,new V,new V,new V,new V],In=new V,Ln=new Pn,Rn=new V,zn=new V,Bn=new V,Vn=new V,Hn=new V,Un=new V,Wn=new V,Gn=new V,Kn=new V,qn=new V;function Jn(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){qn.fromArray(e,a);let o=i.x*Math.abs(qn.x)+i.y*Math.abs(qn.y)+i.z*Math.abs(qn.z),s=t.dot(qn),c=n.dot(qn),l=r.dot(qn);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Yn=new V,Xn=new B,Zn=0,Qn=class extends nt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zn++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ue,this.updateRanges=[],this.gpuType=h,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.applyMatrix3(e),this.setXY(t,Xn.x,Xn.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Yn.fromBufferAttribute(this,t),Yn.applyMatrix3(e),this.setXYZ(t,Yn.x,Yn.y,Yn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Yn.fromBufferAttribute(this,t),Yn.applyMatrix4(e),this.setXYZ(t,Yn.x,Yn.y,Yn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yn.fromBufferAttribute(this,t),Yn.applyNormalMatrix(e),this.setXYZ(t,Yn.x,Yn.y,Yn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yn.fromBufferAttribute(this,t),Yn.transformDirection(e),this.setXYZ(t,Yn.x,Yn.y,Yn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ut(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ut(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ut(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ut(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ut(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),r=dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),r=dt(r,this.array),i=dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},$n=class extends Qn{constructor(e,t,n){super(new Uint16Array(e),t,n)}},er=class extends Qn{constructor(e,t,n){super(new Uint32Array(e),t,n)}},tr=class extends Qn{constructor(e,t,n){super(new Float32Array(e),t,n)}},nr=new Pn,rr=new V,ir=new V,ar=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?nr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rr.subVectors(e,this.center);let t=rr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(rr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ir.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(rr.copy(e.center).add(ir)),this.expandByPoint(rr.copy(e.center).sub(ir))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},or=0,sr=new Ft,cr=new ln,lr=new V,ur=new Pn,dr=new Pn,fr=new V,pr=class e extends nt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:or++}),this.uuid=ot(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Ke(e)?er:$n)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new H().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return sr.makeRotationFromQuaternion(e),this.applyMatrix4(sr),this}rotateX(e){return sr.makeRotationX(e),this.applyMatrix4(sr),this}rotateY(e){return sr.makeRotationY(e),this.applyMatrix4(sr),this}rotateZ(e){return sr.makeRotationZ(e),this.applyMatrix4(sr),this}translate(e,t,n){return sr.makeTranslation(e,t,n),this.applyMatrix4(sr),this}scale(e,t,n){return sr.makeScale(e,t,n),this.applyMatrix4(sr),this}lookAt(e){return cr.lookAt(e),cr.updateMatrix(),this.applyMatrix4(cr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lr).negate(),this.translate(lr.x,lr.y,lr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new tr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&R(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){z(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];ur.setFromBufferAttribute(n),this.morphTargetsRelative?(fr.addVectors(this.boundingBox.min,ur.min),this.boundingBox.expandByPoint(fr),fr.addVectors(this.boundingBox.max,ur.max),this.boundingBox.expandByPoint(fr)):(this.boundingBox.expandByPoint(ur.min),this.boundingBox.expandByPoint(ur.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&z(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ar);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){z(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new V,1/0);return}if(e){let n=this.boundingSphere.center;if(ur.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];dr.setFromBufferAttribute(n),this.morphTargetsRelative?(fr.addVectors(ur.min,dr.min),ur.expandByPoint(fr),fr.addVectors(ur.max,dr.max),ur.expandByPoint(fr)):(ur.expandByPoint(dr.min),ur.expandByPoint(dr.max))}ur.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)fr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(fr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)fr.fromBufferAttribute(a,t),o&&(lr.fromBufferAttribute(e,t),fr.add(lr)),r=Math.max(r,n.distanceToSquared(fr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&z(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){z(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Qn(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new V,s[e]=new V;let c=new V,l=new V,u=new V,d=new B,f=new B,p=new B,m=new V,h=new V;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new V,y=new V,b=new V,x=new V;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Qn(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new V,i=new V,a=new V,o=new V,s=new V,c=new V,l=new V,u=new V;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)fr.fromBufferAttribute(e,t),fr.normalize(),e.setXYZ(t,fr.x,fr.y,fr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Qn(a,r,i)}if(this.index===null)return R(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},mr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=Ue,this.updateRanges=[],this.version=0,this.uuid=ot()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ot()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ot()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},hr=new V,gr=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyMatrix4(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyNormalMatrix(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.transformDirection(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ut(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ut(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ut(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ut(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ut(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),r=dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),r=dt(r,this.array),i=dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){Ze(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new Qn(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ze(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},_r=new V,vr=new V,yr=new H,br=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=_r.subVectors(n,t).cross(vr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(_r),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||yr.getNormalMatrix(e),r=this.coplanarPoint(_r).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},xr=0,Sr=class extends nt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xr++}),this.uuid=ot(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new U(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=He,this.stencilZFail=He,this.stencilZPass=He,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){R(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){R(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new U().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new br().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new B().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new B().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Cr=class extends Sr{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new U(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},wr,Tr=new V,Er=new V,Dr=new V,Or=new B,kr=new B,Ar=new Ft,jr=new V,Mr=new V,Nr=new V,Pr=new B,Fr=new B,Ir=new B,Lr=class extends ln{constructor(e=new Cr){if(super(),this.isSprite=!0,this.type=`Sprite`,wr===void 0){wr=new pr;let e=new mr(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);wr.setIndex([0,1,2,0,2,3]),wr.setAttribute(`position`,new gr(e,3,0,!1)),wr.setAttribute(`uv`,new gr(e,2,3,!1))}this.geometry=wr,this.material=e,this.center=new B(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&z(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Er.setFromMatrixScale(this.matrixWorld),Ar.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Dr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Er.multiplyScalar(-Dr.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;Rr(jr.set(-.5,-.5,0),Dr,a,Er,r,i),Rr(Mr.set(.5,-.5,0),Dr,a,Er,r,i),Rr(Nr.set(.5,.5,0),Dr,a,Er,r,i),Pr.set(0,0),Fr.set(1,0),Ir.set(1,1);let o=e.ray.intersectTriangle(jr,Mr,Nr,!1,Tr);if(o===null&&(Rr(Mr.set(-.5,.5,0),Dr,a,Er,r,i),Fr.set(0,1),o=e.ray.intersectTriangle(jr,Nr,Mr,!1,Tr),o===null))return;let s=e.ray.origin.distanceTo(Tr);s<e.near||s>e.far||t.push({distance:s,point:Tr.clone(),uv:Nn.getInterpolation(Tr,jr,Mr,Nr,Pr,Fr,Ir,new B),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Rr(e,t,n,r,i,a){Or.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?kr.copy(Or):(kr.x=a*Or.x-i*Or.y,kr.y=i*Or.x+a*Or.y),e.copy(t),e.x+=kr.x,e.y+=kr.y,e.applyMatrix4(Ar)}var zr=new V,Br=new V,Vr=new V,Hr=new V,Ur=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=zr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zr.copy(this.origin).addScaledVector(this.direction,t),zr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Br.copy(e).add(t).multiplyScalar(.5),Vr.copy(t).sub(e).normalize(),Hr.copy(this.origin).sub(Br);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Vr),o=Hr.dot(this.direction),s=-Hr.dot(Vr),c=Hr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Br).addScaledVector(Vr,d),f}intersectSphere(e,t){if(e.radius<0)return null;zr.subVectors(e.center,this.origin);let n=zr.dot(this.direction),r=zr.dot(zr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,zr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,ee,j,te;if(y>=b&&y>=x?(w=s,D=u,A=p,te=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,ee=_,j=v):(S=l,C=c,T=f,E=d,O=h,k=m,ee=v,j=_)):b>=x?(w=c,D=d,A=m,te=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,ee=v,j=g):(S=s,C=l,T=u,E=f,O=p,k=h,ee=g,j=v)):(w=l,D=f,A=h,te=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,ee=g,j=_):(S=c,C=s,T=d,E=u,O=m,k=p,ee=_,j=g)),w===0)return null;let M=S/w,ne=C/w,N=1/w,re=T-M*D,ie=E-ne*D,ae=O-M*A,oe=k-ne*A,se=ee-M*te,ce=j-ne*te,le=se*oe-ce*ae,P=re*ce-ie*se,ue=ae*ie-oe*re;if(r){if(le<0||P<0||ue<0)return null}else if((le<0||P<0||ue<0)&&(le>0||P>0||ue>0))return null;let de=le+P+ue;if(de===0)return null;let fe=N*(le*D+P*A+ue*te);return(de>0?fe<0:fe>0)?null:this.at(fe/de,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Wr=class extends Sr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new U(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gt,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Gr=new Ft,Kr=new Ur,qr=new ar,Jr=new V,Yr=new V,Xr=new V,Zr=new V,Qr=new V,$r=new V,ei=new V,ti=new V,W=class extends ln{constructor(e=new pr,t=new Wr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){$r.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Qr.fromBufferAttribute(s,e),a?$r.addScaledVector(Qr,r):$r.addScaledVector(Qr.sub(t),r))}t.add($r)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(i),Kr.copy(e.ray).recast(e.near),!(qr.containsPoint(Kr.origin)===!1&&(Kr.intersectSphere(qr,Jr)===null||Kr.origin.distanceToSquared(Jr)>(e.far-e.near)**2))&&(Gr.copy(i).invert(),Kr.copy(e.ray).applyMatrix4(Gr),(n.boundingBox===null||Kr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Kr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=ri(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=ri(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=ri(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=ri(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function ni(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;ti.copy(s),ti.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(ti);return l<n.near||l>n.far?null:{distance:l,point:ti.clone(),object:e}}function ri(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Yr),e.getVertexPosition(c,Xr),e.getVertexPosition(l,Zr);let u=ni(e,t,n,r,Yr,Xr,Zr,ei);if(u){let e=new V;Nn.getBarycoord(ei,Yr,Xr,Zr,e),i&&(u.uv=Nn.getInterpolatedAttribute(i,s,c,l,e,new B)),a&&(u.uv1=Nn.getInterpolatedAttribute(a,s,c,l,e,new B)),o&&(u.normal=Nn.getInterpolatedAttribute(o,s,c,l,e,new V),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new V,materialIndex:0};Nn.getNormal(Yr,Xr,Zr,t.normal),u.face=t,u.barycoord=e}return u}var ii=class extends kt{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ai=class extends Qn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},oi=new Ft,si=new Ft,ci=[],li=new Pn,ui=new Ft,di=new W,fi=new ar,pi=class extends W{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ai(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,ui)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Pn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,oi),li.copy(e.boundingBox).applyMatrix4(oi),this.boundingBox.union(li)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ar),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,oi),fi.copy(e.boundingSphere).applyMatrix4(oi),this.boundingSphere.union(fi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(di.geometry=this.geometry,di.material=this.material,di.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fi.copy(this.boundingSphere),fi.applyMatrix4(n),e.ray.intersectsSphere(fi)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,oi),si.multiplyMatrices(n,oi),di.matrixWorld=si,di.raycast(e,ci);for(let e=0,n=ci.length;e<n;e++){let n=ci[e];n.instanceId=i,n.object=this,t.push(n)}ci.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ai(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new ii(new Float32Array(r*this.count),r,this.count,D,h));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},mi=new ar,hi=new B(.5,.5),gi=new V,_i=class{constructor(e=new br,t=new br,n=new br,r=new br,i=new br,a=new br){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ge,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(e){return mi.center.set(0,0,0),mi.radius=.7071067811865476+hi.distanceTo(e.center),mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(gi.x=r.normal.x>0?e.max.x:e.min.x,gi.y=r.normal.y>0?e.max.y:e.min.y,gi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(gi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},vi=class extends Sr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new U(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},yi=new Ft,bi=new Ur,xi=new ar,Si=new V,Ci=class extends ln{constructor(e=new pr,t=new vi){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xi.copy(n.boundingSphere),xi.applyMatrix4(r),xi.radius+=i,e.ray.intersectsSphere(xi)===!1)return;yi.copy(r).invert(),bi.copy(e.ray).applyMatrix4(yi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Si.fromBufferAttribute(l,n),wi(Si,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Si.fromBufferAttribute(l,a),wi(Si,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function wi(e,t,n,r,i,a,o){let s=bi.distanceSqToPoint(e);if(s<n){let n=new V;bi.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ti=class extends kt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ei=class extends kt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Di=class extends kt{constructor(e,t,n=m,i,a,o,s=r,c=r,l,u=T,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},i,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Tt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Oi=class extends Di{constructor(e,t=m,n=301,i,a,o=r,s=r,c,l=T){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ki=class extends kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ai=class e extends pr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new tr(c,3)),this.setAttribute(`normal`,new tr(l,3)),this.setAttribute(`uv`,new tr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new V;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ji=class e extends pr{constructor(e=1,t=1,n=4,r=8,i=1){super(),this.type=`CapsuleGeometry`,this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:i},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),i=Math.max(1,Math.floor(i));let a=[],o=[],s=[],c=[],l=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+i,m=r+1,h=new V,g=new V;for(let _=0;_<=p;_++){let v=0,y=0,b=0,x=0;if(_<=n){let t=_/n,r=t*Math.PI/2;y=-l-e*Math.cos(r),b=e*Math.sin(r),x=-e*Math.cos(r),v=t*u}else if(_<=n+i){let r=(_-n)/i;y=-l+r*t,b=e,x=0,v=u+r*d}else{let t=(_-n-i)/n,r=t*Math.PI/2;y=l+e*Math.sin(r),b=e*Math.cos(r),x=e*Math.sin(r),v=u+d+t*u}let S=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/r:_===p&&(C=-.5/r);for(let e=0;e<=r;e++){let t=e/r,n=t*Math.PI*2,i=Math.sin(n),a=Math.cos(n);g.x=-b*a,g.y=y,g.z=b*i,o.push(g.x,g.y,g.z),h.set(-b*a,x,b*i),h.normalize(),s.push(h.x,h.y,h.z),c.push(t+C,S)}if(_>0){let e=(_-1)*m;for(let t=0;t<r;t++){let n=e+t,r=e+t+1,i=_*m+t,o=_*m+t+1;a.push(n,r,i),a.push(r,o,i)}}}this.setIndex(a),this.setAttribute(`position`,new tr(o,3)),this.setAttribute(`normal`,new tr(s,3)),this.setAttribute(`uv`,new tr(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Mi=class e extends pr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new V,l=new B;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new tr(a,3)),this.setAttribute(`normal`,new tr(o,3)),this.setAttribute(`uv`,new tr(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ni=class e extends pr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new tr(u,3)),this.setAttribute(`normal`,new tr(d,3)),this.setAttribute(`uv`,new tr(f,2));function _(){let a=new V,_=new V,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new B,m=new V,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Pi=class e extends Ni{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Fi=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){R(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new B:new V);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new V,r=[],i=[],a=[],o=new V,s=new Ft;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new V)}i[0]=new V,a[0]=new V;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(st(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(st(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ii=class extends Fi{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new B){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Li=class extends Ii{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function Ri(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var zi=new V,Bi=new V,Vi=new Ri,Hi=new Ri,Ui=new Ri,Wi=class extends Fi{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new V){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Bi.subVectors(r[0],r[1]).add(r[0]),c=Bi);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(zi.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=zi),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Vi.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Hi.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Ui.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Vi.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Hi.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Ui.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Vi.calc(s),Hi.calc(s),Ui.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new V().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Gi(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function Ki(e,t){let n=1-e;return n*n*t}function qi(e,t){return 2*(1-e)*e*t}function Ji(e,t){return e*e*t}function Yi(e,t,n,r){return Ki(e,t)+qi(e,n)+Ji(e,r)}function Xi(e,t){let n=1-e;return n*n*n*t}function Zi(e,t){let n=1-e;return 3*n*n*e*t}function Qi(e,t){return 3*(1-e)*e*e*t}function $i(e,t){return e*e*e*t}function ea(e,t,n,r,i){return Xi(e,t)+Zi(e,n)+Qi(e,r)+$i(e,i)}var ta=class extends Fi{constructor(e=new B,t=new B,n=new B,r=new B){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new B){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(ea(e,r.x,i.x,a.x,o.x),ea(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},na=class extends Fi{constructor(e=new V,t=new V,n=new V,r=new V){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new V){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(ea(e,r.x,i.x,a.x,o.x),ea(e,r.y,i.y,a.y,o.y),ea(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ra=class extends Fi{constructor(e=new B,t=new B){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new B){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ia=class extends Fi{constructor(e=new V,t=new V){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new V){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},aa=class extends Fi{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Yi(e,r.x,i.x,a.x),Yi(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oa=class extends Fi{constructor(e=new V,t=new V,n=new V){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new V){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Yi(e,r.x,i.x,a.x),Yi(e,r.y,i.y,a.y),Yi(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sa=class extends Fi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new B){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Gi(o,s.x,c.x,l.x,u.x),Gi(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new B().fromArray(n))}return this}},ca=Object.freeze({__proto__:null,ArcCurve:Li,CatmullRomCurve3:Wi,CubicBezierCurve:ta,CubicBezierCurve3:na,EllipseCurve:Ii,LineCurve:ra,LineCurve3:ia,QuadraticBezierCurve:aa,QuadraticBezierCurve3:oa,SplineCurve:sa}),la=class extends Fi{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new ca[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new ca[n.type]().fromJSON(n))}return this}},ua=class extends la{constructor(e){super(),this.type=`Path`,this.currentPoint=new B,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ra(this.currentPoint.clone(),new B(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new aa(this.currentPoint.clone(),new B(e,t),new B(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new ta(this.currentPoint.clone(),new B(e,t),new B(n,r),new B(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new sa([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new Ii(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},da=class extends ua{constructor(e){super(e),this.uuid=ot(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new ua().fromJSON(n))}return this}};function fa(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=pa(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=ba(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return ha(a,o,n,s,c,l,0),o}function pa(e,t,n,r,i){let a;if(i===Wa(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=Va(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=Va(i/r|0,e[i],e[i+1],a);return a&&Na(a,a.next)&&(Ha(a),a=a.next),a}function ma(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(Na(n,n.next)||Ma(n.prev,n,n.next)===0)){if(Ha(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function ha(e,t,n,r,i,a,o){if(!e)return;!o&&a&&Ta(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?_a(e,r,i,a):ga(e)){t.push(c.i,e.i,l.i),Ha(e),e=l.next,s=l.next;continue}if(e=l,e===s){o?o===1?(e=va(ma(e),t),ha(e,t,n,r,i,a,2)):o===2&&ya(e,t,n,r,i,a):ha(ma(e),t,n,r,i,a,1);break}}}function ga(e){let t=e.prev,n=e,r=e.next;if(Ma(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&Aa(i,s,a,c,o,l,m.x,m.y)&&Ma(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function _a(e,t,n,r){let i=e.prev,a=e,o=e.next;if(Ma(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=Da(p,m,t,n,r),v=Da(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Aa(s,u,c,d,l,f,y.x,y.y)&&Ma(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Aa(s,u,c,d,l,f,b.x,b.y)&&Ma(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Aa(s,u,c,d,l,f,y.x,y.y)&&Ma(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Aa(s,u,c,d,l,f,b.x,b.y)&&Ma(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function va(e,t){let n=e;do{let r=n.prev,i=n.next.next;!Na(r,i)&&Pa(r,n,n.next,i)&&Ra(r,i)&&Ra(i,r)&&(t.push(r.i,n.i,i.i),Ha(n),Ha(n.next),n=e=i),n=n.next}while(n!==e);return ma(n)}function ya(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&ja(o,e)){let s=Ba(o,e);o=ma(o,o.next),s=ma(s,s.next),ha(o,t,n,r,i,a,0),ha(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function ba(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=pa(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(Oa(o))}i.sort(xa);for(let e=0;e<i.length;e++)n=Sa(i[e],n);return n}function xa(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function Sa(e,t){let n=Ca(e,t);if(!n)return t;let r=Ba(n,e);return ma(r,r.next),ma(n,n.next)}function Ca(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(Na(e,n))return n;do{if(Na(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&ka(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);Ra(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&wa(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function wa(e,t){return Ma(e.prev,e,t.prev)<0&&Ma(t.next,e,e.next)<0}function Ta(e,t,n,r){let i=e;do i.z===0&&(i.z=Da(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,Ea(i)}function Ea(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function Da(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Oa(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function ka(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function Aa(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&ka(e,t,n,r,i,a,o,s)}function ja(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!La(e,t)&&(Ra(e,t)&&Ra(t,e)&&za(e,t)&&(Ma(e.prev,e,t.prev)||Ma(e,t.prev,t))||Na(e,t)&&Ma(e.prev,e,e.next)>0&&Ma(t.prev,t,t.next)>0)}function Ma(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Na(e,t){return e.x===t.x&&e.y===t.y}function Pa(e,t,n,r){let i=Ia(Ma(e,t,n)),a=Ia(Ma(e,t,r)),o=Ia(Ma(n,r,e)),s=Ia(Ma(n,r,t));return!!(i!==a&&o!==s||i===0&&Fa(e,n,t)||a===0&&Fa(e,r,t)||o===0&&Fa(n,e,r)||s===0&&Fa(n,t,r))}function Fa(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Ia(e){return e>0?1:e<0?-1:0}function La(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Pa(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Ra(e,t){return Ma(e.prev,e,e.next)<0?Ma(e,t,e.next)>=0&&Ma(e,e.prev,t)>=0:Ma(e,t,e.prev)<0||Ma(e,e.next,t)<0}function za(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function Ba(e,t){let n=Ua(e.i,e.x,e.y),r=Ua(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function Va(e,t,n,r){let i=Ua(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Ha(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Ua(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Wa(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var Ga=class{static triangulate(e,t,n=2){return fa(e,t,n)}},Ka=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];qa(e),Ja(n,e);let a=e.length;t.forEach(qa);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,Ja(n,t[e]);let o=Ga.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function qa(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Ja(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var Ya=class e extends pr{constructor(e=new da([new B(.5,.5),new B(-.5,.5),new B(-.5,-.5),new B(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new tr(r,3)),this.setAttribute(`uv`,new tr(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?Xa:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new V,b=new V,x=new V}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!Ka.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];Ka.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));if(s<=10000000000000001e-36*c*c){e.splice(r,1),n--;continue}t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||z(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=C.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new B(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new B(r/a,i/a)}let ee=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),ee[e]=A(D[e],D[n],D[r]);let j=[],te,M=ee.concat();for(let e=0,t=E;e<t;e++){let t=w[e];te=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),te[e]=A(t[e],t[r],t[i]);j.push(te),M=M.concat(te)}let ne;if(p===0)ne=Ka.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],ee[t],a);se(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];te=j[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],te[e],a);se(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}ne=Ka.triangulateShape(e,t)}let N=ne.length,re=d+f;for(let e=0;e<k;e++){let t=l?O(C[e],M[e],re):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),se(x.x,x.y,x.z)):se(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<k;t++){let n=l?O(C[t],M[t],re):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),se(x.x,x.y,x.z)):se(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],ee[e],r);se(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];te=j[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],te[e],r);_?se(i.x,i.y+g[s-1].y,g[s-1].x+n):se(i.x,i.y,c+n)}}}ie(),ae();function ie(){let e=r.length/3;if(l){let e=0,t=k*e;for(let e=0;e<N;e++){let n=ne[e];ce(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=k*e;for(let e=0;e<N;e++){let n=ne[e];ce(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<N;e++){let t=ne[e];ce(t[2],t[1],t[0])}for(let e=0;e<N;e++){let t=ne[e];ce(t[0]+k*s,t[1]+k*s,t[2]+k*s)}}n.addGroup(e,r.length/3-e,0)}function ae(){let e=r.length/3,t=0;oe(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];oe(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function oe(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=k*e,a=k*(e+1);le(t+r+n,t+i+n,t+i+a,t+r+a)}}}function se(e,t,n){a.push(e),a.push(t),a.push(n)}function ce(e,t,i){P(e),P(t),P(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);ue(o[0]),ue(o[1]),ue(o[2])}function le(e,t,i,a){P(e),P(t),P(a),P(t),P(i),P(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);ue(s[0]),ue(s[1]),ue(s[3]),ue(s[1]),ue(s[2]),ue(s[3])}function P(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function ue(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Za(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new ca[i.type]().fromJSON(i)),new e(r,t.options)}},Xa={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new B(a,o),new B(s,c),new B(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new B(o,1-c),new B(l,1-d),new B(f,1-m),new B(h,1-_)]:[new B(s,1-c),new B(u,1-d),new B(p,1-m),new B(g,1-_)]}};function Za(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var Qa=class e extends pr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new tr(p,3)),this.setAttribute(`normal`,new tr(m,3)),this.setAttribute(`uv`,new tr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},$a=class e extends pr{constructor(e=new da([new B(0,.5),new B(-.5,-.5),new B(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new tr(r,3)),this.setAttribute(`normal`,new tr(i,3)),this.setAttribute(`uv`,new tr(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;Ka.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];Ka.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=Ka.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return eo(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}};function eo(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}var to=class e extends pr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new V,d=new V,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new tr(p,3)),this.setAttribute(`normal`,new tr(m,3)),this.setAttribute(`uv`,new tr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},no=class e extends pr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new V,f=new V,p=new V;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new tr(c,3)),this.setAttribute(`normal`,new tr(l,3)),this.setAttribute(`uv`,new tr(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function ro(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(ao(i))i.isRenderTargetTexture?(R(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(ao(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function io(e){let t={};for(let n=0;n<e.length;n++){let r=ro(e[n]);for(let e in r)t[e]=r[e]}return t}function ao(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function oo(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function so(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:yt.workingColorSpace}var co={clone:ro,merge:io},lo=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uo=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fo=class extends Sr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lo,this.fragmentShader=uo,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ro(e.uniforms),this.uniformsGroups=oo(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new U().setHex(r.value);break;case`v2`:this.uniforms[n].value=new B().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new V().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new At().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new H().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Ft().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},po=class extends fo{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},mo=class extends Sr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type=`MeshPhongMaterial`,this.color=new U(16777215),this.specular=new U(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new U(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new B(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gt,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ho=class extends Sr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new U(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new U(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new B(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gt,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},go=class extends Sr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=L,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},_o=class extends Sr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function vo(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function yo(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var bo=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},xo=class extends bo{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ie,endingEnd:Ie}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case I:i=e,o=2*t-n;break;case Le:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case I:a=e,s=2*n-t;break;case Le:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},So=class extends bo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Co=class extends bo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},wo=class extends bo{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Do(n,t,g,y,r);i[p]=To(x,o,_,b,m)}return i}};function To(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Eo(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Do(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=To(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Eo(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Oo=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=vo(t,this.TimeBufferType),this.values=vo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:vo(e.times,Array),values:vo(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),yo(e.settings)&&(n.settings={inTangents:vo(e.settings.inTangents,Array),outTangents:vo(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Co(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new So(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new xo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new wo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ne:t=this.InterpolantFactoryMethodDiscrete;break;case F:t=this.InterpolantFactoryMethodLinear;break;case Pe:t=this.InterpolantFactoryMethodSmooth;break;case Fe:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return R(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ne;case this.InterpolantFactoryMethodLinear:return F;case this.InterpolantFactoryMethodSmooth:return Pe;case this.InterpolantFactoryMethodBezier:return Fe}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;yo(this.settings)&&(ko(this.settings.inTangents,e),ko(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(z(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(z(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){z(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){z(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&qe(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){z(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Pe,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,yo(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function ko(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Oo.prototype.ValueTypeName=``,Oo.prototype.TimeBufferType=Float32Array,Oo.prototype.ValueBufferType=Float32Array,Oo.prototype.DefaultInterpolation=F;var Ao=class extends Oo{constructor(e,t,n){super(e,t,n)}};Ao.prototype.ValueTypeName=`bool`,Ao.prototype.ValueBufferType=Array,Ao.prototype.DefaultInterpolation=Ne,Ao.prototype.InterpolantFactoryMethodLinear=void 0,Ao.prototype.InterpolantFactoryMethodSmooth=void 0;var jo=class extends Oo{constructor(e,t,n,r){super(e,t,n,r)}};jo.prototype.ValueTypeName=`color`;var Mo=class extends Oo{constructor(e,t,n,r){super(e,t,n,r)}};Mo.prototype.ValueTypeName=`number`;var No=class extends bo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)ft.slerpFlat(i,0,a,c-o,a,c,s);return i}},Po=class extends Oo{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new No(this.times,this.values,this.getValueSize(),e)}};Po.prototype.ValueTypeName=`quaternion`,Po.prototype.InterpolantFactoryMethodSmooth=void 0;var Fo=class extends Oo{constructor(e,t,n){super(e,t,n)}};Fo.prototype.ValueTypeName=`string`,Fo.prototype.ValueBufferType=Array,Fo.prototype.DefaultInterpolation=Ne,Fo.prototype.InterpolantFactoryMethodLinear=void 0,Fo.prototype.InterpolantFactoryMethodSmooth=void 0;var Io=class extends Oo{constructor(e,t,n,r){super(e,t,n,r)}};Io.prototype.ValueTypeName=`vector`;var Lo=class extends ln{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new U(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ro=class extends Lo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.groundColor=new U(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},zo=new Ft,Bo=new V,Vo=new V,Ho=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new B(512,512),this.mapType=l,this.map=null,this.mapPass=null,this.matrix=new Ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _i,this._frameExtents=new B(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Bo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bo),Vo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vo),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){zo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(zo,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(zo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Uo=new V,Wo=new ft,Go=new V,Ko=class extends ln{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=Ge,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Uo,Wo,Go),Go.x===1&&Go.y===1&&Go.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Uo,Wo,Go.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Uo,Wo,Go),Go.x===1&&Go.y===1&&Go.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Uo,Wo,Go.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},qo=new V,Jo=new B,Yo=new B,Xo=class extends Ko{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=at*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(it*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return at*2*Math.atan(Math.tan(it*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){qo.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qo.x,qo.y).multiplyScalar(-e/qo.z),qo.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qo.x,qo.y).multiplyScalar(-e/qo.z)}getViewSize(e,t){return this.getViewBounds(e,Jo,Yo),t.subVectors(Yo,Jo)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(it*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Zo=class extends Ho{constructor(){super(new Xo(90,1,.5,500)),this.isPointLightShadow=!0}},Qo=class extends Lo{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new Zo}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},$o=class extends Ko{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},es=class extends Ho{constructor(){super(new $o(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ts=class extends Lo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.shadow=new es}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},ns=class extends Lo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type=`AmbientLight`}},rs=-90,is=1,as=class extends ln{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Xo(rs,is,e,t);r.layers=this.layers,this.add(r);let i=new Xo(rs,is,e,t);i.layers=this.layers,this.add(i);let a=new Xo(rs,is,e,t);a.layers=this.layers,this.add(a);let o=new Xo(rs,is,e,t);o.layers=this.layers,this.add(o);let s=new Xo(rs,is,e,t);s.layers=this.layers,this.add(s);let c=new Xo(rs,is,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},os=class extends Xo{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ss=`\\[\\]\\.:\\/`,cs=RegExp(`[\\[\\]\\.:\\/]`,`g`),ls=`[^\\[\\]\\.:\\/]`,us=`[^`+ss.replace(`\\.`,``)+`]`,ds=`((?:WC+[\\/:])*)`.replace(`WC`,ls),fs=`(WCOD+)?`.replace(`WCOD`,us),ps=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,ls),ms=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,ls),hs=RegExp(`^`+ds+fs+ps+ms+`$`),gs=[`material`,`materials`,`bones`,`map`],_s=class{constructor(e,t,n){let r=n||vs.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},vs=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(cs,``)}static parseTrackName(e){let t=hs.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);gs.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){R(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){z(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){z(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){z(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){z(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){z(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;z(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};vs.Composite=_s,vs.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},vs.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},vs.prototype.GetterByBindingType=[vs.prototype._getValue_direct,vs.prototype._getValue_array,vs.prototype._getValue_arrayElement,vs.prototype._getValue_toArray],vs.prototype.SetterByBindingTypeAndVersioning=[[vs.prototype._setValue_direct,vs.prototype._setValue_direct_setNeedsUpdate,vs.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vs.prototype._setValue_array,vs.prototype._setValue_array_setNeedsUpdate,vs.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vs.prototype._setValue_arrayElement,vs.prototype._setValue_arrayElement_setNeedsUpdate,vs.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vs.prototype._setValue_fromArray,vs.prototype._setValue_fromArray_setNeedsUpdate,vs.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function ys(e,t,n,r){let i=bs(r);switch(n){case S:return e*t;case D:return e*t/i.components*i.byteLength;case O:return e*t/i.components*i.byteLength;case k:return e*t*2/i.components*i.byteLength;case A:return e*t*2/i.components*i.byteLength;case C:return e*t*3/i.components*i.byteLength;case w:return e*t*4/i.components*i.byteLength;case ee:return e*t*4/i.components*i.byteLength;case j:case te:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case M:case ne:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case re:case ae:return Math.max(e,16)*Math.max(t,8)/4;case N:case ie:return Math.max(e,8)*Math.max(t,8)/2;case oe:case se:case le:case P:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ce:case ue:case de:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case fe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case pe:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case me:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case he:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ge:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case _e:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ve:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ye:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case be:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case xe:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Se:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ce:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case we:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Te:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ee:case De:case Oe:return Math.ceil(e/4)*Math.ceil(t/4)*16;case ke:case Ae:return Math.ceil(e/4)*Math.ceil(t/4)*8;case je:case Me:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function bs(e){switch(e){case l:case u:return{byteLength:1,components:1};case f:case d:case g:return{byteLength:2,components:1};case _:case v:return{byteLength:2,components:4};case m:case p:case h:return{byteLength:4,components:1};case b:case x:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?R(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function xs(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Ss(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Cs={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,common:`#define PI 3.141592653589793
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
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
				#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
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
		float roughness = material.clearcoatRoughness;
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
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
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
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
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
}`,lights_fragment_begin:`
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
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
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
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
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
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
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
#include <cube_uv_reflection_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
#include <cube_uv_reflection_fragment>
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
#include <cube_uv_reflection_fragment>
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},G={common:{diffuse:{value:new U(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new H}},envmap:{envMap:{value:null},envMapRotation:{value:new H},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new H}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new H}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new H},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new H},normalScale:{value:new B(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new H},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new H}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new H}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new H}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new U(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new U(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0},uvTransform:{value:new H}},sprite:{diffuse:{value:new U(16777215)},opacity:{value:1},center:{value:new B(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}}},ws={basic:{uniforms:io([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.fog]),vertexShader:Cs.meshbasic_vert,fragmentShader:Cs.meshbasic_frag},lambert:{uniforms:io([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.fog,G.lights,{emissive:{value:new U(0)},envMapIntensity:{value:1}}]),vertexShader:Cs.meshlambert_vert,fragmentShader:Cs.meshlambert_frag},phong:{uniforms:io([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.fog,G.lights,{emissive:{value:new U(0)},specular:{value:new U(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Cs.meshphong_vert,fragmentShader:Cs.meshphong_frag},standard:{uniforms:io([G.common,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.roughnessmap,G.metalnessmap,G.fog,G.lights,{emissive:{value:new U(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Cs.meshphysical_vert,fragmentShader:Cs.meshphysical_frag},toon:{uniforms:io([G.common,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.gradientmap,G.fog,G.lights,{emissive:{value:new U(0)}}]),vertexShader:Cs.meshtoon_vert,fragmentShader:Cs.meshtoon_frag},matcap:{uniforms:io([G.common,G.bumpmap,G.normalmap,G.displacementmap,G.fog,{matcap:{value:null}}]),vertexShader:Cs.meshmatcap_vert,fragmentShader:Cs.meshmatcap_frag},points:{uniforms:io([G.points,G.fog]),vertexShader:Cs.points_vert,fragmentShader:Cs.points_frag},dashed:{uniforms:io([G.common,G.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Cs.linedashed_vert,fragmentShader:Cs.linedashed_frag},depth:{uniforms:io([G.common,G.displacementmap]),vertexShader:Cs.depth_vert,fragmentShader:Cs.depth_frag},normal:{uniforms:io([G.common,G.bumpmap,G.normalmap,G.displacementmap,{opacity:{value:1}}]),vertexShader:Cs.meshnormal_vert,fragmentShader:Cs.meshnormal_frag},sprite:{uniforms:io([G.sprite,G.fog]),vertexShader:Cs.sprite_vert,fragmentShader:Cs.sprite_frag},background:{uniforms:{uvTransform:{value:new H},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Cs.background_vert,fragmentShader:Cs.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new H}},vertexShader:Cs.backgroundCube_vert,fragmentShader:Cs.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Cs.cube_vert,fragmentShader:Cs.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Cs.equirect_vert,fragmentShader:Cs.equirect_frag},distance:{uniforms:io([G.common,G.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Cs.distance_vert,fragmentShader:Cs.distance_frag},shadow:{uniforms:io([G.lights,G.fog,{color:{value:new U(0)},opacity:{value:1}}]),vertexShader:Cs.shadow_vert,fragmentShader:Cs.shadow_frag}};ws.physical={uniforms:io([ws.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new H},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new H},clearcoatNormalScale:{value:new B(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new H},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new H},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new H},sheen:{value:0},sheenColor:{value:new U(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new H},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new H},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new H},transmissionSamplerSize:{value:new B},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new H},attenuationDistance:{value:0},attenuationColor:{value:new U(0)},specularColor:{value:new U(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new H},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new H},anisotropyVector:{value:new B},anisotropyMap:{value:null},anisotropyMapTransform:{value:new H}}]),vertexShader:Cs.meshphysical_vert,fragmentShader:Cs.meshphysical_frag};var Ts={r:0,b:0,g:0},Es=new Ft,Ds=new H;Ds.set(-1,0,0,0,1,0,0,0,1);function Os(e,t,n,r,i,a){let o=new U(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new W(new Ai(1,1,1),new fo({name:`BackgroundCubeMaterial`,uniforms:ro(ws.backgroundCube.uniforms),vertexShader:ws.backgroundCube.vertexShader,fragmentShader:ws.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Es.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Ds),l.material.toneMapped=yt.getTransfer(i.colorSpace)!==Ve,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new W(new Qa(2,2),new fo({name:`BackgroundMaterial`,uniforms:ro(ws.background.uniforms),vertexShader:ws.background.vertexShader,fragmentShader:ws.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=yt.getTransfer(i.colorSpace)!==Ve,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Ts,so(e)),n.buffers.color.setClear(Ts.r,Ts.g,Ts.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function ks(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function As(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function js(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(R(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&R(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Ms(e){let t=this,n=null,r=0,i=!1,a=!1,o=new br,s=new H,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Ns=4,Ps=6,Fs=20,Is=256,Ls=new $o,Rs=new U,zs=null,Bs=0,Vs=0,Hs=!1,Us=new V,Ws=new V,Gs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Us}=i;zs=this._renderer.getRenderTarget(),Bs=this._renderer.getActiveCubeFace(),Vs=this._renderer.getActiveMipmapLevel(),Hs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qs(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zs(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(zs,Bs,Vs),this._renderer.xr.enabled=Hs,e.scissorTest=!1,Js(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zs=this._renderer.getRenderTarget(),Bs=this._renderer.getActiveCubeFace(),Vs=this._renderer.getActiveMipmapLevel(),Hs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:o,minFilter:o,generateMipmaps:!1,type:g,format:w,colorSpace:ze,depthBuffer:!1},r=qs(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qs(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ks(r)),this._blurMaterial=Xs(r,e,t),this._ggxMaterial=Ys(r,e,t)}return r}_compileMaterial(e){let t=new W(new pr,e);this._renderer.compile(t,Ls)}_sceneToCubeUV(e,t,n,r,i){let a=new Xo(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Rs),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new W(new Ai,new Wr({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Rs),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Js(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qs()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zs());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Js(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Ls)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Ns?n-d+Ns:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Js(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Ls),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Js(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Ls)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Js(t,3*l*(r>this._lodMax-Ns?r-this._lodMax+Ns:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,Ls)}};function Ks(e){let t=[],n=[],r=e,i=e-Ns+1+Ps;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?Ws.set(1,r,n):e===1?Ws.set(-n,1,-r):e===2?Ws.set(-n,r,1):e===3?Ws.set(-1,r,-n):e===4?Ws.set(-n,-1,r):Ws.set(n,r,-1),Ws.toArray(l,(e*6+t)*3)}}let u=new pr;u.setAttribute(`position`,new Qn(c,3)),u.setAttribute(`outputDirection`,new Qn(l,3)),n.push(new W(u,null)),r>Ns&&r--}return{lodMeshes:n,sizeLods:t}}function qs(e,t,n){let r=new Mt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Js(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Ys(e,t,n){return new fo({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Is,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$s(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Xs(e,t,n){return new fo({name:`SphericalGaussianBlur`,defines:{SAMPLES:Fs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:$s(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

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

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Zs(){return new fo({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:$s(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Qs(){return new fo({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$s(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function $s(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ec=class extends Mt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ti(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ai(5,5,5),i=new fo({name:`CubemapFromEquirect`,uniforms:ro(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new W(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=o),new as(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function tc(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new ec(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Gs(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Gs(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function nc(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&$e(`WebGLRenderer: `+e+` extension not supported.`),t}}}function rc(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?er:$n)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function ic(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function ac(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:z(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function oc(e,t,n){let r=new WeakMap,i=new At;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*m*4*u),_=new Nt(g,p,m,u);_.type=h,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new B(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function sc(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var cc={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function lc(e,t,n,r,i,a){let o=new Mt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new pr;l.setAttribute(`position`,new tr([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new tr([0,2,0,0,2,0],2));let u=new po({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new W(l,u),f=new $o(-1,1,1,-1,0,1),p=null,m=null,h=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new Mt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}),c=new Mt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<y.length;e++){let r=y[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,h=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},yt.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=cc[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(d,f),v=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var uc=new kt,dc=new Di(1,1),fc=new Nt,pc=new Pt,mc=new Ti,hc=[],gc=[],_c=new Float32Array(16),vc=new Float32Array(9),yc=new Float32Array(4);function bc(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=hc[i];if(a===void 0&&(a=new Float32Array(i),hc[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function xc(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Sc(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Cc(e,t){let n=gc[t];n===void 0&&(n=new Int32Array(t),gc[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function wc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Tc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(xc(n,t))return;e.uniform2fv(this.addr,t),Sc(n,t)}}function Ec(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(xc(n,t))return;e.uniform3fv(this.addr,t),Sc(n,t)}}function Dc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(xc(n,t))return;e.uniform4fv(this.addr,t),Sc(n,t)}}function Oc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(xc(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Sc(n,t)}else{if(xc(n,r))return;yc.set(r),e.uniformMatrix2fv(this.addr,!1,yc),Sc(n,r)}}function kc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(xc(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Sc(n,t)}else{if(xc(n,r))return;vc.set(r),e.uniformMatrix3fv(this.addr,!1,vc),Sc(n,r)}}function Ac(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(xc(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Sc(n,t)}else{if(xc(n,r))return;_c.set(r),e.uniformMatrix4fv(this.addr,!1,_c),Sc(n,r)}}function jc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Mc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(xc(n,t))return;e.uniform2iv(this.addr,t),Sc(n,t)}}function Nc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(xc(n,t))return;e.uniform3iv(this.addr,t),Sc(n,t)}}function Pc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(xc(n,t))return;e.uniform4iv(this.addr,t),Sc(n,t)}}function Fc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Ic(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(xc(n,t))return;e.uniform2uiv(this.addr,t),Sc(n,t)}}function Lc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(xc(n,t))return;e.uniform3uiv(this.addr,t),Sc(n,t)}}function Rc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(xc(n,t))return;e.uniform4uiv(this.addr,t),Sc(n,t)}}function zc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(dc.compareFunction=n.isReversedDepthBuffer()?518:515,a=dc):a=uc,n.setTexture2D(t||a,i)}function Bc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||pc,i)}function Vc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||mc,i)}function Hc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||fc,i)}function Uc(e){switch(e){case 5126:return wc;case 35664:return Tc;case 35665:return Ec;case 35666:return Dc;case 35674:return Oc;case 35675:return kc;case 35676:return Ac;case 5124:case 35670:return jc;case 35667:case 35671:return Mc;case 35668:case 35672:return Nc;case 35669:case 35673:return Pc;case 5125:return Fc;case 36294:return Ic;case 36295:return Lc;case 36296:return Rc;case 35678:case 36198:case 36298:case 36306:case 35682:return zc;case 35679:case 36299:case 36307:return Bc;case 35680:case 36300:case 36308:case 36293:return Vc;case 36289:case 36303:case 36311:case 36292:return Hc}}function Wc(e,t){e.uniform1fv(this.addr,t)}function Gc(e,t){let n=bc(t,this.size,2);e.uniform2fv(this.addr,n)}function Kc(e,t){let n=bc(t,this.size,3);e.uniform3fv(this.addr,n)}function qc(e,t){let n=bc(t,this.size,4);e.uniform4fv(this.addr,n)}function Jc(e,t){let n=bc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Yc(e,t){let n=bc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Xc(e,t){let n=bc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Zc(e,t){e.uniform1iv(this.addr,t)}function Qc(e,t){e.uniform2iv(this.addr,t)}function $c(e,t){e.uniform3iv(this.addr,t)}function el(e,t){e.uniform4iv(this.addr,t)}function tl(e,t){e.uniform1uiv(this.addr,t)}function nl(e,t){e.uniform2uiv(this.addr,t)}function rl(e,t){e.uniform3uiv(this.addr,t)}function il(e,t){e.uniform4uiv(this.addr,t)}function al(e,t,n){let r=this.cache,i=t.length,a=Cc(n,i);xc(r,a)||(e.uniform1iv(this.addr,a),Sc(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?dc:uc;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function ol(e,t,n){let r=this.cache,i=t.length,a=Cc(n,i);xc(r,a)||(e.uniform1iv(this.addr,a),Sc(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||pc,a[e])}function sl(e,t,n){let r=this.cache,i=t.length,a=Cc(n,i);xc(r,a)||(e.uniform1iv(this.addr,a),Sc(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||mc,a[e])}function cl(e,t,n){let r=this.cache,i=t.length,a=Cc(n,i);xc(r,a)||(e.uniform1iv(this.addr,a),Sc(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||fc,a[e])}function ll(e){switch(e){case 5126:return Wc;case 35664:return Gc;case 35665:return Kc;case 35666:return qc;case 35674:return Jc;case 35675:return Yc;case 35676:return Xc;case 5124:case 35670:return Zc;case 35667:case 35671:return Qc;case 35668:case 35672:return $c;case 35669:case 35673:return el;case 5125:return tl;case 36294:return nl;case 36295:return rl;case 36296:return il;case 35678:case 36198:case 36298:case 36306:case 35682:return al;case 35679:case 36299:case 36307:return ol;case 35680:case 36300:case 36308:case 36293:return sl;case 36289:case 36303:case 36311:case 36292:return cl}}var ul=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Uc(t.type)}},dl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ll(t.type)}},fl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},pl=/(\w+)(\])?(\[|\.)?/g;function ml(e,t){e.seq.push(t),e.map[t.id]=t}function hl(e,t,n){let r=e.name,i=r.length;for(pl.lastIndex=0;;){let a=pl.exec(r),o=pl.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){ml(n,l===void 0?new ul(s,e,t):new dl(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new fl(s),ml(n,e)),n=e}}}var gl=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);hl(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function _l(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var vl=37297,yl=0;function bl(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var xl=new H;function Sl(e){yt._getMatrix(xl,yt.workingColorSpace,e);let t=`mat3( ${xl.elements.map(e=>e.toFixed(4))} )`;switch(yt.getTransfer(e)){case Be:return[t,`LinearTransferOETF`];case Ve:return[t,`sRGBTransferOETF`];default:return R(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Cl(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+bl(e.getShaderSource(t),r)}return i}function wl(e,t){let n=Sl(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Tl={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function El(e,t){let n=Tl[t];return n===void 0?(R(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Dl=new V;function Ol(){return yt.getLuminanceCoefficients(Dl),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Dl.x.toFixed(4)}, ${Dl.y.toFixed(4)}, ${Dl.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function kl(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Ml).join(`
`)}function Al(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function jl(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Ml(e){return e!==``}function Nl(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Pl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Fl=/^[ \t]*#include +<([\w\d./]+)>/gm;function Il(e){return e.replace(Fl,Rl)}var Ll=new Map;function Rl(e,t){let n=Cs[t];if(n===void 0){let e=Ll.get(t);if(e!==void 0)n=Cs[e],R(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Il(n)}var zl=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bl(e){return e.replace(zl,Vl)}function Vl(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Hl(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Ul={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Wl(e){return Ul[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Gl={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Kl(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Gl[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var ql={302:`ENVMAP_MODE_REFRACTION`};function Jl(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:ql[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Yl={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Xl(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Yl[e.combine]||`ENVMAP_BLENDING_NONE`}function Zl(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Ql(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Wl(n),l=Kl(n),u=Jl(n),d=Xl(n),f=Zl(n),p=kl(n),m=Al(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Ml).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Ml).join(`
`),_.length>0&&(_+=`
`)):(g=[Hl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Ml).join(`
`),_=[Hl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Cs.tonemapping_pars_fragment,n.toneMapping===0?``:El(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Cs.colorspace_pars_fragment,wl(`linearToOutputTexel`,n.outputColorSpace),Ol(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Ml).join(`
`)),o=Il(o),o=Nl(o,n),o=Pl(o,n),s=Il(s),s=Nl(s,n),s=Pl(s,n),o=Bl(o),s=Bl(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=_l(i,i.VERTEX_SHADER,y),S=_l(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Cl(i,x,`vertex`),n=Cl(i,S,`fragment`);z(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):R(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new gl(i,h),T=jl(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,vl)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=yl++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var $l=0,eu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new tu(e),t.set(e,n)),n}},tu=class{constructor(e){this.id=$l++,this.code=e,this.usedTimes=0}};function nu(e){return e===1030||e===37490||e===36285}function ru(e,t,n,r,i,a){let o=new Kt,s=new eu,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&R(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=ws[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let ee=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),te=h.isInstancedMesh===!0,M=h.isBatchedMesh===!0,ne=!!i.map,N=!!i.matcap,re=!!x,ie=!!i.aoMap,ae=!!i.lightMap,oe=!!i.bumpMap&&i.wireframe===!1,se=!!i.normalMap,ce=!!i.displacementMap,le=!!i.emissiveMap,P=!!i.metalnessMap,ue=!!i.roughnessMap,de=i.anisotropy>0,fe=i.clearcoat>0,pe=i.dispersion>0,me=i.retroreflectivity>0,he=i.iridescence>0,ge=i.sheen>0,_e=i.transmission>0,ve=de&&!!i.anisotropyMap,ye=fe&&!!i.clearcoatMap,be=fe&&!!i.clearcoatNormalMap,xe=fe&&!!i.clearcoatRoughnessMap,Se=he&&!!i.iridescenceMap,Ce=he&&!!i.iridescenceThicknessMap,we=ge&&!!i.sheenColorMap,Te=ge&&!!i.sheenRoughnessMap,Ee=!!i.specularMap,De=!!i.specularColorMap,Oe=!!i.specularIntensityMap,ke=_e&&!!i.transmissionMap,Ae=_e&&!!i.thicknessMap,je=!!i.gradientMap,Me=!!i.alphaMap,Ne=i.alphaTest>0,F=!!i.alphaHash,Pe=!!i.extensions,Fe=0;i.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Fe=e.toneMapping);let Ie={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:M,batchingColor:M&&h._colorsTexture!==null,instancing:te,instancingColor:te&&h.instanceColor!==null,instancingMorph:te&&h.morphTexture!==null,outputColorSpace:ee===null?e.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:yt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ne,matcap:N,envMap:re,envMapMode:re&&x.mapping,envMapCubeUVHeight:S,aoMap:ie,lightMap:ae,bumpMap:oe,normalMap:se,displacementMap:ce,emissiveMap:le,normalMapObjectSpace:se&&i.normalMapType===1,normalMapTangentSpace:se&&i.normalMapType===0,packedNormalMap:se&&i.normalMapType===0&&nu(i.normalMap.format),metalnessMap:P,roughnessMap:ue,anisotropy:de,anisotropyMap:ve,clearcoat:fe,clearcoatMap:ye,clearcoatNormalMap:be,clearcoatRoughnessMap:xe,dispersion:pe,retroreflection:me,iridescence:he,iridescenceMap:Se,iridescenceThicknessMap:Ce,sheen:ge,sheenColorMap:we,sheenRoughnessMap:Te,specularMap:Ee,specularColorMap:De,specularIntensityMap:Oe,transmission:_e,transmissionMap:ke,thicknessMap:Ae,gradientMap:je,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Me,alphaTest:Ne,alphaHash:F,combine:i.combine,mapUv:ne&&m(i.map.channel),aoMapUv:ie&&m(i.aoMap.channel),lightMapUv:ae&&m(i.lightMap.channel),bumpMapUv:oe&&m(i.bumpMap.channel),normalMapUv:se&&m(i.normalMap.channel),displacementMapUv:ce&&m(i.displacementMap.channel),emissiveMapUv:le&&m(i.emissiveMap.channel),metalnessMapUv:P&&m(i.metalnessMap.channel),roughnessMapUv:ue&&m(i.roughnessMap.channel),anisotropyMapUv:ve&&m(i.anisotropyMap.channel),clearcoatMapUv:ye&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:be&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:we&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Te&&m(i.sheenRoughnessMap.channel),specularMapUv:Ee&&m(i.specularMap.channel),specularColorMapUv:De&&m(i.specularColorMap.channel),specularIntensityMapUv:Oe&&m(i.specularIntensityMap.channel),transmissionMapUv:ke&&m(i.transmissionMap.channel),thicknessMapUv:Ae&&m(i.thicknessMap.channel),alphaMapUv:Me&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(se||de),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(ne||Me),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&se===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Fe,decodeVideoTexture:ne&&i.map.isVideoTexture===!0&&yt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:le&&i.emissiveMap.isVideoTexture===!0&&yt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Pe&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Pe&&i.extensions.multiDraw===!0||M)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Ie.vertexUv1s=c.has(1),Ie.vertexUv2s=c.has(2),Ie.vertexUv3s=c.has(3),c.clear(),Ie}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=ws[t];n=co.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Ql(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function iu(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function au(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function ou(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function su(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||au),r.length>1&&r.sort(t||ou),i.length>1&&i.sort(t||ou)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function cu(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new su,e.set(t,[i])):n>=r.length?(i=new su,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function lu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new V,color:new U};break;case`SpotLight`:n={position:new V,direction:new V,color:new U,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new V,color:new U,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new V,skyColor:new U,groundColor:new U};break;case`RectAreaLight`:n={color:new U,position:new V,halfWidth:new V,halfHeight:new V}}return e[t.id]=n,n}}}function uu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var du=0;function fu(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function pu(e){let t=new lu,n=uu(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new V);let i=new V,a=new Ft,o=new Ft;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(fu);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=G.LTC_FLOAT_1,r.rectAreaLTC2=G.LTC_FLOAT_2):(r.rectAreaLTC1=G.LTC_HALF_1,r.rectAreaLTC2=G.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=du++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function mu(e){let t=new pu(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function hu(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new mu(e),t.set(n,[a])):r>=i.length?(a=new mu(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var gu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_u=`uniform sampler2D shadow_pass;
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
}`,vu=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],yu=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],bu=new Ft,xu=new V,Su=new V;function Cu(e,t,n){let i=new _i,a=new B,s=new B,c=new At,l=new go,u=new _o,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},_=new fo({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new B},radius:{value:4}},vertexShader:gu,fragmentShader:_u}),v=_.clone();v.defines.HORIZONTAL_PASS=1;let y=new pr;y.setAttribute(`position`,new Qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new W(y,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(R(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.state;_.setBlending(0),_.buffers.depth.getReversed()===!0?_.buffers.color.setClear(0,0,0,0):_.buffers.color.setClear(1,1,1,1),_.buffers.depth.setTest(!0),_.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){R(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),s.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(s.x=Math.floor(f/y.x),a.x=s.x*y.x,p.mapSize.x=s.x),a.y>f&&(s.y=Math.floor(f/y.y),a.y=s.y*y.y,p.mapSize.y=s.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){R(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new Mt(a.x,a.y,{format:k,type:g,minFilter:o,magFilter:o,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new Di(a.x,a.y,h),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=T,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r}else d.isPointLight?(p.map=new ec(a.x),p.map.depthTexture=new Oi(a.x,m)):(p.map=new Mt(a.x,a.y),p.map.depthTexture=new Di(a.x,a.y,m)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=T,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==a.x||p.map.height!==a.y)&&p.map.setSize(a.x,a.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);for(let t=0;t<x;t++){let r=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),xu.setFromMatrixPosition(d.matrixWorld),e.position.copy(xu),Su.copy(e.position),Su.add(vu[t]),e.up.copy(yu[t]),e.lookAt(Su),e.updateMatrixWorld(),n.makeTranslation(-xu.x,-xu.y,-xu.z),bu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(bu,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(s.x*n.x,s.y*n.y,s.x*n.z,s.y*n.w),_.viewport(c)}i=p.getFrustum(t),E(n,l,r,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);_.defines.VSM_SAMPLES!==n.blurSamples&&(_.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,_.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null?n.mapPass=new Mt(a.x,a.y,{format:k,type:g}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),_.uniforms.shadow_pass.value=n.map.depthTexture,_.uniforms.resolution.value.set(n.map.width,n.map.height),_.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,_,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value.set(n.map.width,n.map.height),v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function E(n,r,a,o,s){if(n.visible===!1)return;if(n.layers.test(r.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(i))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),c=n.material;if(Array.isArray(c)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)E(c[e],r,a,o,s)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function wu(e,t){function n(){let t=!1,n=new At,r=null,i=new At(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?P(e.DEPTH_TEST):ue(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=tt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?P(e.STENCIL_TEST):ue(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new U(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),te=!1,M=0,ne=e.getParameter(e.VERSION);ne.indexOf(`WebGL`)===-1?ne.indexOf(`OpenGL ES`)!==-1&&(M=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),te=M>=2):(M=parseFloat(/^WebGL (\d)/.exec(ne)[1]),te=M>=1);let N=null,re={},ie=e.getParameter(e.SCISSOR_BOX),ae=e.getParameter(e.VIEWPORT),oe=new At().fromArray(ie),se=new At().fromArray(ae);function ce(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let le={};le[e.TEXTURE_2D]=ce(e.TEXTURE_2D,e.TEXTURE_2D,1),le[e.TEXTURE_CUBE_MAP]=ce(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[e.TEXTURE_2D_ARRAY]=ce(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),le[e.TEXTURE_3D]=ce(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),P(e.DEPTH_TEST),o.setFunc(3),ve(!1),ye(1),P(e.CULL_FACE),ge(0);function P(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ue(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function de(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function fe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function pe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let me={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};me[103]=e.MIN,me[104]=e.MAX;let he={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ge(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(ue(e.BLEND),g=!1);return}if(g===!1&&(P(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:z(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:z(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:z(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:z(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(me[n],me[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(he[r],he[i],he[o],he[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function _e(t,n){t.side===2?ue(e.CULL_FACE):P(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ve(r),t.blending===1&&t.transparent===!1?ge(0):ge(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),xe(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?P(e.SAMPLE_ALPHA_TO_COVERAGE):ue(e.SAMPLE_ALPHA_TO_COVERAGE)}function ve(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ye(t){t===0?ue(e.CULL_FACE):(P(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function be(t){t!==k&&(te&&e.lineWidth(t),k=t)}function xe(t,n,r){t?(P(e.POLYGON_OFFSET_FILL),(A!==n||ee!==r)&&(A=n,ee=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):ue(e.POLYGON_OFFSET_FILL)}function Se(t){t?P(e.SCISSOR_TEST):ue(e.SCISSOR_TEST)}function Ce(t){t===void 0&&(t=e.TEXTURE0+j-1),N!==t&&(e.activeTexture(t),N=t)}function we(t,n,r){r===void 0&&(r=N===null?e.TEXTURE0+j-1:N);let i=re[r];i===void 0&&(i={type:void 0,texture:void 0},re[r]=i),(i.type!==t||i.texture!==n)&&(N!==r&&(e.activeTexture(r),N=r),e.bindTexture(t,n||le[t]),i.type=t,i.texture=n)}function Te(){let t=re[N];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ee(){try{e.compressedTexImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function De(){try{e.compressedTexImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Oe(){try{e.texSubImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function ke(){try{e.texSubImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ae(){try{e.compressedTexSubImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function je(){try{e.compressedTexSubImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Me(){try{e.texStorage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ne(){try{e.texStorage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function F(){try{e.texImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Pe(){try{e.texImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Fe(t){return d[t]===void 0?e.getParameter(t):d[t]}function Ie(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function I(t){oe.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),oe.copy(t))}function Le(t){se.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),se.copy(t))}function L(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Re(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function ze(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},N=null,re={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new U(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,oe.set(0,0,e.canvas.width,e.canvas.height),se.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:P,disable:ue,bindFramebuffer:de,drawBuffers:fe,useProgram:pe,setBlending:ge,setMaterial:_e,setFlipSided:ve,setCullFace:ye,setLineWidth:be,setPolygonOffset:xe,setScissorTest:Se,activeTexture:Ce,bindTexture:we,unbindTexture:Te,compressedTexImage2D:Ee,compressedTexImage3D:De,texImage2D:F,texImage3D:Pe,pixelStorei:Ie,getParameter:Fe,updateUBOMapping:L,uniformBlockBinding:Re,texStorage2D:Me,texStorage3D:Ne,texSubImage2D:Oe,texSubImage3D:ke,compressedTexSubImage2D:Ae,compressedTexSubImage3D:je,scissor:I,viewport:Le,reset:ze}}function Tu(l,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new B,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):Je(`canvas`)}function T(e,t,n){let r=1,i=Fe(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),R(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&R(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function D(e){return e.generateMipmaps}function O(e){l.generateMipmap(e)}function k(e){return e.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?l.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function A(e,t,n,r,i,a=!1){if(e!==null){if(l[e]!==void 0)return l[e];R(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let o;r&&(o=u.get(`EXT_texture_norm16`),o||R(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let s=t;if(t===l.RED&&(n===l.FLOAT&&(s=l.R32F),n===l.HALF_FLOAT&&(s=l.R16F),n===l.UNSIGNED_BYTE&&(s=l.R8),n===l.UNSIGNED_SHORT&&o&&(s=o.R16_EXT),n===l.SHORT&&o&&(s=o.R16_SNORM_EXT)),t===l.RED_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.R8UI),n===l.UNSIGNED_SHORT&&(s=l.R16UI),n===l.UNSIGNED_INT&&(s=l.R32UI),n===l.BYTE&&(s=l.R8I),n===l.SHORT&&(s=l.R16I),n===l.INT&&(s=l.R32I)),t===l.RG&&(n===l.FLOAT&&(s=l.RG32F),n===l.HALF_FLOAT&&(s=l.RG16F),n===l.UNSIGNED_BYTE&&(s=l.RG8),n===l.UNSIGNED_SHORT&&o&&(s=o.RG16_EXT),n===l.SHORT&&o&&(s=o.RG16_SNORM_EXT)),t===l.RG_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RG8UI),n===l.UNSIGNED_SHORT&&(s=l.RG16UI),n===l.UNSIGNED_INT&&(s=l.RG32UI),n===l.BYTE&&(s=l.RG8I),n===l.SHORT&&(s=l.RG16I),n===l.INT&&(s=l.RG32I)),t===l.RGB_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGB8UI),n===l.UNSIGNED_SHORT&&(s=l.RGB16UI),n===l.UNSIGNED_INT&&(s=l.RGB32UI),n===l.BYTE&&(s=l.RGB8I),n===l.SHORT&&(s=l.RGB16I),n===l.INT&&(s=l.RGB32I)),t===l.RGBA_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGBA8UI),n===l.UNSIGNED_SHORT&&(s=l.RGBA16UI),n===l.UNSIGNED_INT&&(s=l.RGBA32UI),n===l.BYTE&&(s=l.RGBA8I),n===l.SHORT&&(s=l.RGBA16I),n===l.INT&&(s=l.RGBA32I)),t===l.RGB&&(n===l.UNSIGNED_SHORT&&o&&(s=o.RGB16_EXT),n===l.SHORT&&o&&(s=o.RGB16_SNORM_EXT),n===l.UNSIGNED_INT_5_9_9_9_REV&&(s=l.RGB9_E5),n===l.UNSIGNED_INT_10F_11F_11F_REV&&(s=l.R11F_G11F_B10F)),t===l.RGBA){let e=a?Be:yt.getTransfer(i);n===l.FLOAT&&(s=l.RGBA32F),n===l.HALF_FLOAT&&(s=l.RGBA16F),n===l.UNSIGNED_BYTE&&(s=e===`srgb`?l.SRGB8_ALPHA8:l.RGBA8),n===l.UNSIGNED_SHORT&&o&&(s=o.RGBA16_EXT),n===l.SHORT&&o&&(s=o.RGBA16_SNORM_EXT),n===l.UNSIGNED_SHORT_4_4_4_4&&(s=l.RGBA4),n===l.UNSIGNED_SHORT_5_5_5_1&&(s=l.RGB5_A1)}return(s===l.R16F||s===l.R32F||s===l.RG16F||s===l.RG32F||s===l.RGBA16F||s===l.RGBA32F)&&u.get(`EXT_color_buffer_float`),s}function ee(e,t){let n;return e?t===null||t===1014||t===1020?n=l.DEPTH24_STENCIL8:t===1015?n=l.DEPTH32F_STENCIL8:t===1012&&(n=l.DEPTH24_STENCIL8,R(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=l.DEPTH_COMPONENT24:t===1015?n=l.DEPTH_COMPONENT32F:t===1012&&(n=l.DEPTH_COMPONENT16),n}function j(e,t){return D(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function te(e){let t=e.target;t.removeEventListener(`dispose`,te),ne(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function M(e){let t=e.target;t.removeEventListener(`dispose`,M),re(t)}function ne(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&N(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function N(e){let t=f.get(e);l.deleteTexture(t.__webglTexture);let n=e.source,r=S.get(n);delete r[t.__cacheKey],h.memory.textures--}function re(e){let t=f.get(e);if(e.depthTexture&&(e.depthTexture.dispose(),f.remove(e.depthTexture)),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)l.deleteFramebuffer(t.__webglFramebuffer[e][n]);else l.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)l.deleteFramebuffer(t.__webglFramebuffer[e]);else l.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&l.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&l.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&l.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let n=e.textures;for(let e=0,t=n.length;e<t;e++){let t=f.get(n[e]);t.__webglTexture&&(l.deleteTexture(t.__webglTexture),h.memory.textures--),f.remove(n[e])}f.remove(e)}let ie=0;function ae(){ie=0}function oe(){return ie}function se(e){ie=e}function ce(){let e=ie;return e>=p.maxTextures&&R(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),ie+=1,e}function le(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function P(e,t){let n=f.get(e);if(e.isVideoTexture&&F(e),e.isRenderTargetTexture===!1&&e.isExternalTexture!==!0&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)R(`WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)R(`WebGLRenderer: Texture marked for update but image is incomplete`);else{be(n,e,t);return}}else e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null);d.bindTexture(l.TEXTURE_2D,n.__webglTexture,l.TEXTURE0+t)}function ue(e,t){let n=f.get(e);if(e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version){be(n,e,t);return}e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null),d.bindTexture(l.TEXTURE_2D_ARRAY,n.__webglTexture,l.TEXTURE0+t)}function de(e,t){let n=f.get(e);if(e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version){be(n,e,t);return}d.bindTexture(l.TEXTURE_3D,n.__webglTexture,l.TEXTURE0+t)}function fe(e,t){let n=f.get(e);if(e.isCubeDepthTexture!==!0&&e.version>0&&n.__version!==e.version){xe(n,e,t);return}d.bindTexture(l.TEXTURE_CUBE_MAP,n.__webglTexture,l.TEXTURE0+t)}let pe={[e]:l.REPEAT,[t]:l.CLAMP_TO_EDGE,[n]:l.MIRRORED_REPEAT},me={[r]:l.NEAREST,[i]:l.NEAREST_MIPMAP_NEAREST,[a]:l.NEAREST_MIPMAP_LINEAR,[o]:l.LINEAR,[s]:l.LINEAR_MIPMAP_NEAREST,[c]:l.LINEAR_MIPMAP_LINEAR},he={512:l.NEVER,519:l.ALWAYS,513:l.LESS,515:l.LEQUAL,514:l.EQUAL,518:l.GEQUAL,516:l.GREATER,517:l.NOTEQUAL};function ge(e,t){if(t.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&R(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),l.texParameteri(e,l.TEXTURE_WRAP_S,pe[t.wrapS]),l.texParameteri(e,l.TEXTURE_WRAP_T,pe[t.wrapT]),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,pe[t.wrapR]),l.texParameteri(e,l.TEXTURE_MAG_FILTER,me[t.magFilter]),l.texParameteri(e,l.TEXTURE_MIN_FILTER,me[t.minFilter]),t.compareFunction&&(l.texParameteri(e,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(e,l.TEXTURE_COMPARE_FUNC,he[t.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||f.get(t).__currentAnisotropy){let n=u.get(`EXT_texture_filter_anisotropic`);l.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,p.getMaxAnisotropy())),f.get(t).__currentAnisotropy=t.anisotropy}}}function _e(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,te));let r=t.source,i=S.get(r);i===void 0&&(i={},S.set(r,i));let a=le(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&N(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function ve(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ye(e,t,n,r){let i=e.updateRanges;if(i.length===0)d.texSubImage2D(l.TEXTURE_2D,0,0,0,t.width,t.height,n,r,t.data);else{i.sort((e,t)=>e.start-t.start);let a=0;for(let e=1;e<i.length;e++){let n=i[a],r=i[e],o=n.start+n.count,s=ve(r.start,t.width,4),c=ve(n.start,t.width,4);r.start<=o+1&&s===c&&ve(r.start+r.count-1,t.width,4)===s?n.count=Math.max(n.count,r.start+r.count-n.start):(++a,i[a]=r)}i.length=a+1;let o=d.getParameter(l.UNPACK_ROW_LENGTH),s=d.getParameter(l.UNPACK_SKIP_PIXELS),c=d.getParameter(l.UNPACK_SKIP_ROWS);d.pixelStorei(l.UNPACK_ROW_LENGTH,t.width);for(let e=0,a=i.length;e<a;e++){let a=i[e],o=Math.floor(a.start/4),s=Math.ceil(a.count/4),c=o%t.width,u=Math.floor(o/t.width),f=s;d.pixelStorei(l.UNPACK_SKIP_PIXELS,c),d.pixelStorei(l.UNPACK_SKIP_ROWS,u),d.texSubImage2D(l.TEXTURE_2D,0,c,u,f,1,n,r,t.data)}e.clearUpdateRanges(),d.pixelStorei(l.UNPACK_ROW_LENGTH,o),d.pixelStorei(l.UNPACK_SKIP_PIXELS,s),d.pixelStorei(l.UNPACK_SKIP_ROWS,c)}}function be(e,t,n){let r=l.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=l.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=l.TEXTURE_3D);let i=_e(e,t),a=t.source;d.bindTexture(r,e.__webglTexture,l.TEXTURE0+n);let o=f.get(a);if(a.version!==o.__version||i===!0){if(d.activeTexture(l.TEXTURE0+n),!(typeof ImageBitmap<`u`&&t.image instanceof ImageBitmap)){let e=yt.getPrimaries(yt.workingColorSpace),n=t.colorSpace===``?null:yt.getPrimaries(t.colorSpace),r=t.colorSpace===``||e===n?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,r)}d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment);let e=T(t.image,!1,p.maxTextureSize);e=Pe(t,e);let s=m.convert(t.format,t.colorSpace),c=m.convert(t.type),u=A(t.internalFormat,s,c,t.normalized,t.colorSpace,t.isVideoTexture);ge(r,t);let f,h=t.mipmaps,g=t.isVideoTexture!==!0,_=o.__version===void 0||i===!0,v=a.dataReady,y=j(t,e);if(t.isDepthTexture)u=ee(t.format===E,t.type),_&&(g?d.texStorage2D(l.TEXTURE_2D,1,u,e.width,e.height):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,null));else if(t.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data);t.generateMipmaps=!1}else g?(_&&d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height),v&&ye(t,e,s,c)):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,e.data)}else if(t.isCompressedTexture){if(t.isCompressedArrayTexture){g&&_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,e.depth);for(let n=0,r=h.length;n<r;n++)if(f=h[n],t.format!==1023){if(s!==null){if(g){if(v){if(t.layerUpdates.size>0){let e=ys(f.width,f.height,t.format,t.type);for(let r of t.layerUpdates){let t=f.data.subarray(r*e/f.data.BYTES_PER_ELEMENT,(r+1)*e/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,r,f.width,f.height,1,s,t)}}else d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,f.data)}}else d.compressedTexImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,f.data,0,0)}else R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,c,f.data):d.texImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,s,c,f.data);t.layerUpdates.size>0&&t.clearLayerUpdates()}else{g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,n=h.length;e<n;e++)f=h[e],t.format===1023?g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data):s===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,f.data):d.compressedTexImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,f.data)}}else if(t.isDataArrayTexture){if(g){if(_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,e.width,e.height,e.depth),v){if(t.layerUpdates.size>0){let n=ys(e.width,e.height,t.format,t.type);for(let r of t.layerUpdates){let t=e.data.subarray(r*n/e.data.BYTES_PER_ELEMENT,(r+1)*n/e.data.BYTES_PER_ELEMENT);d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,r,e.width,e.height,1,s,c,t)}t.clearLayerUpdates()}else d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)}}else d.texImage3D(l.TEXTURE_2D_ARRAY,0,u,e.width,e.height,e.depth,0,s,c,e.data)}else if(t.isData3DTexture)g?(_&&d.texStorage3D(l.TEXTURE_3D,y,u,e.width,e.height,e.depth),v&&d.texSubImage3D(l.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)):d.texImage3D(l.TEXTURE_3D,0,u,e.width,e.height,e.depth,0,s,c,e.data);else if(t.isFramebufferTexture){if(_){if(g)d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height);else{let t=e.width,n=e.height;for(let e=0;e<y;e++)d.texImage2D(l.TEXTURE_2D,e,u,t,n,0,s,c,null),t>>=1,n>>=1}}}else if(t.isHTMLTexture){if(`texElementImage2D`in l){let n=l.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),e.parentNode!==n){n.appendChild(e),b.add(t),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(l.texElementImage2D.length===3)l.texElementImage2D(l.TEXTURE_2D,l.RGBA8,e);else{let t=l.RGBA,n=l.RGBA,r=l.UNSIGNED_BYTE;l.texElementImage2D(l.TEXTURE_2D,0,t,n,r,e)}l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let e=Fe(h[0]);d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height)}for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,s,c,f):d.texImage2D(l.TEXTURE_2D,e,u,s,c,f);t.generateMipmaps=!1}else if(g){if(_){let t=Fe(e);d.texStorage2D(l.TEXTURE_2D,y,u,t.width,t.height)}v&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,s,c,e)}else d.texImage2D(l.TEXTURE_2D,0,u,s,c,e);D(t)&&O(r),o.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function xe(e,t,n){if(t.image.length!==6)return;let r=_e(e,t),i=t.source;d.bindTexture(l.TEXTURE_CUBE_MAP,e.__webglTexture,l.TEXTURE0+n);let a=f.get(i);if(i.version!==a.__version||r===!0){d.activeTexture(l.TEXTURE0+n);let e=yt.getPrimaries(yt.workingColorSpace),o=t.colorSpace===``?null:yt.getPrimaries(t.colorSpace),s=t.colorSpace===``||e===o?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let c=t.isCompressedTexture||t.image[0].isCompressedTexture,u=t.image[0]&&t.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!c&&!u?f[e]=T(t.image[e],!0,p.maxCubemapSize):f[e]=u?t.image[e].image:t.image[e],f[e]=Pe(t,f[e]);let h=f[0],g=m.convert(t.format,t.colorSpace),_=m.convert(t.type),v=A(t.internalFormat,g,_,t.normalized,t.colorSpace),y=t.isVideoTexture!==!0,b=a.__version===void 0||r===!0,x=i.dataReady,S=j(t,h);ge(l.TEXTURE_CUBE_MAP,t);let C;if(c){y&&b&&d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let e=0;e<6;e++){C=f[e].mipmaps;for(let n=0;n<C.length;n++){let r=C[n];t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,_,r.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,g,_,r.data):g===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,r.data):d.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,r.data)}}}else{if(C=t.mipmaps,y&&b){C.length>0&&S++;let e=Fe(f[0]);d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,e.width,e.height)}for(let e=0;e<6;e++)if(u){y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,f[e].width,f[e].height,g,_,f[e].data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,f[e].width,f[e].height,0,g,_,f[e].data);for(let t=0;t<C.length;t++){let n=C[t].image[e].image;y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,g,_,n.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,n.width,n.height,0,g,_,n.data)}}else{y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,f[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,g,_,f[e]);for(let t=0;t<C.length;t++){let n=C[t];y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,g,_,n.image[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,g,_,n.image[e])}}}D(t)&&O(l.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function Se(e,t,n,r,i,a){let o=m.convert(n.format,n.colorSpace),s=m.convert(n.type),c=A(n.internalFormat,o,s,n.normalized,n.colorSpace),u=f.get(t),p=f.get(n);if(p.__renderTarget=t,!u.__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===l.TEXTURE_3D||i===l.TEXTURE_2D_ARRAY?d.texImage3D(i,a,c,e,n,t.depth,0,o,s,null):d.texImage2D(i,a,c,e,n,0,o,s,null)}d.bindFramebuffer(l.FRAMEBUFFER,e),Ne(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,r,i,p.__webglTexture,0,Me(t)):(i===l.TEXTURE_2D||i>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,r,i,p.__webglTexture,a),d.bindFramebuffer(l.FRAMEBUFFER,null)}function Ce(e,t,n){if(l.bindRenderbuffer(l.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=ee(t.stencilBuffer,i),o=t.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;Ne(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Me(t),a,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Me(t),a,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,a,t.width,t.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,o,l.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=m.convert(i.format,i.colorSpace),o=m.convert(i.type),s=A(i.internalFormat,a,o,i.normalized,i.colorSpace);Ne(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Me(t),s,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Me(t),s,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,s,t.width,t.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function we(e,t,n){let r=t.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(l.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let i=f.get(t.depthTexture);if(i.__renderTarget=t,(!i.__webglTexture||t.depthTexture.image.width!==t.width||t.depthTexture.image.height!==t.height)&&(t.depthTexture.image.width=t.width,t.depthTexture.image.height=t.height,t.depthTexture.needsUpdate=!0),r){if(i.__webglInit===void 0&&(i.__webglInit=!0,t.depthTexture.addEventListener(`dispose`,te)),i.__webglTexture===void 0){i.__webglTexture=l.createTexture(),d.bindTexture(l.TEXTURE_CUBE_MAP,i.__webglTexture),ge(l.TEXTURE_CUBE_MAP,t.depthTexture);let e=m.convert(t.depthTexture.format),n=m.convert(t.depthTexture.type),r;t.depthTexture.format===1026?r=l.DEPTH_COMPONENT24:t.depthTexture.format===1027&&(r=l.DEPTH24_STENCIL8);for(let i=0;i<6;i++)l.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,r,t.width,t.height,0,e,n,null)}}else P(t.depthTexture,0);let a=i.__webglTexture,o=Me(t),s=r?l.TEXTURE_CUBE_MAP_POSITIVE_X+n:l.TEXTURE_2D,c=t.depthTexture.format===1027?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;if(t.depthTexture.format===1026)Ne(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else if(t.depthTexture.format===1027)Ne(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Te(e){let t=f.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer){if(n)for(let n=0;n<6;n++)we(t.__webglFramebuffer[n],e,n);else{let n=e.texture.mipmaps;n&&n.length>0?we(t.__webglFramebuffer[0],e,0):we(t.__webglFramebuffer,e,0)}}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=l.createRenderbuffer(),Ce(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];l.bindRenderbuffer(l.RENDERBUFFER,i),l.framebufferRenderbuffer(l.FRAMEBUFFER,r,l.RENDERBUFFER,i)}}else{let n=e.texture.mipmaps;if(n&&n.length>0?d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[0]):d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=l.createRenderbuffer(),Ce(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,r),l.framebufferRenderbuffer(l.FRAMEBUFFER,n,l.RENDERBUFFER,r)}}d.bindFramebuffer(l.FRAMEBUFFER,null)}function Ee(e,t,n){let r=f.get(e);t!==void 0&&Se(r.__webglFramebuffer,e,e.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),n!==void 0&&Te(e)}function De(e){let t=e.texture,n=f.get(e),r=f.get(t);e.addEventListener(`dispose`,M);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,o=i.length>1;if(o||(r.__webglTexture===void 0&&(r.__webglTexture=l.createTexture()),r.__version=t.version,h.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=l.createFramebuffer()}else n.__webglFramebuffer[e]=l.createFramebuffer()}else{if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=l.createFramebuffer()}else n.__webglFramebuffer=l.createFramebuffer();if(o)for(let e=0,t=i.length;e<t;e++){let t=f.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=l.createTexture(),h.memory.textures++)}if(e.samples>0&&Ne(e)===!1){n.__webglMultisampledFramebuffer=l.createFramebuffer(),n.__webglColorRenderbuffer=[],d.bindFramebuffer(l.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=m.convert(r.format,r.colorSpace),o=m.convert(r.type),s=A(r.internalFormat,a,o,r.normalized,r.colorSpace,e.isXRRenderTarget===!0),c=Me(e);l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,e.width,e.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+t,l.RENDERBUFFER,n.__webglColorRenderbuffer[t])}l.bindRenderbuffer(l.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=l.createRenderbuffer(),Ce(n.__webglDepthRenderbuffer,e,!0)),d.bindFramebuffer(l.FRAMEBUFFER,null)}}if(a){d.bindTexture(l.TEXTURE_CUBE_MAP,r.__webglTexture),ge(l.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps&&t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)Se(n.__webglFramebuffer[r][i],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else Se(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);D(t)&&O(l.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(o){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=f.get(r),o=l.TEXTURE_2D;(e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(o=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(o,a.__webglTexture),ge(o,r),Se(n.__webglFramebuffer,e,r,l.COLOR_ATTACHMENT0+t,o,0),D(r)&&O(o)}d.unbindTexture()}else{let i=l.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(i,r.__webglTexture),ge(i,t),t.mipmaps&&t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)Se(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,i,r);else Se(n.__webglFramebuffer,e,t,l.COLOR_ATTACHMENT0,i,0);D(t)&&O(i),d.unbindTexture()}e.depthBuffer&&Te(e)}function Oe(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(D(r)){let t=k(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),O(t),d.unbindTexture()}}}let ke=[],Ae=[];function je(e){if(e.samples>0){if(Ne(e)===!1){let t=e.textures,n=e.width,r=e.height,i=l.COLOR_BUFFER_BIT,a=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,o=f.get(e),s=t.length>1;if(s)for(let e=0;e<t.length;e++)d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,null),d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,null,0);d.bindFramebuffer(l.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer);let c=e.texture.mipmaps;c&&c.length>0?d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer[0]):d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=l.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=l.STENCIL_BUFFER_BIT)),s){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,o.__webglColorRenderbuffer[c]);let e=f.get(t[c]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0)}l.blitFramebuffer(0,0,n,r,0,0,n,r,i,l.NEAREST),_===!0&&(ke.length=0,Ae.length=0,ke.push(l.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&(ke.push(a),Ae.push(a),l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,Ae)),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,ke))}if(d.bindFramebuffer(l.READ_FRAMEBUFFER,null),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),s)for(let e=0;e<t.length;e++){d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,o.__webglColorRenderbuffer[e]);let n=f.get(t[e]).__webglTexture;d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,n,0)}d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&_){let t=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[t])}}}function Me(e){return Math.min(p.maxSamples,e.samples)}function Ne(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function F(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Pe(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(yt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&R(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):z(`WebGLTextures: Unsupported texture color space:`,n)),t}function Fe(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=ce,this.resetTextureUnits=ae,this.getTextureUnits=oe,this.setTextureUnits=se,this.setTexture2D=P,this.setTexture2DArray=ue,this.setTexture3D=de,this.setTextureCube=fe,this.rebindTextures=Ee,this.setupRenderTarget=De,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Ne,this.isReversedDepthBuffer=function(){return d.buffers.depth.getReversed()}}function Eu(e,t){function n(n,r=``){let i,a=yt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Du=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ou=`
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

}`,ku=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ki(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new fo({vertexShader:Du,fragmentShader:Ou,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new W(new Qa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Au=class extends nt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,u=null,d=null,f=null,p=null,h=null,g=typeof XRWebGLBinding<`u`,_=new ku,v={},b=t.getContextAttributes(),x=null,S=null,C=[],D=[],O=new B,k=null,A=null,ee=new Xo;ee.viewport=new At;let j=new Xo;j.viewport=new At;let te=[ee,j],M=new os,ne=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new fn,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new fn,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new fn,C[e]=t),t.getHandSpace()};function re(e){let t=D.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ie(){r.removeEventListener(`select`,re),r.removeEventListener(`selectstart`,re),r.removeEventListener(`selectend`,re),r.removeEventListener(`squeeze`,re),r.removeEventListener(`squeezestart`,re),r.removeEventListener(`squeezeend`,re),r.removeEventListener(`end`,ie),r.removeEventListener(`inputsourceschange`,ae);for(let e=0;e<C.length;e++){let t=D[e];t!==null&&(D[e]=null,C[e].disconnect(t))}ne=null,N=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,fe.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(O.width,O.height,!1),A!==null){let e=A.camera;e.fov=A.fov,e.zoom=A.zoom,e.updateProjectionMatrix(),A=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,re),r.addEventListener(`selectstart`,re),r.addEventListener(`selectend`,re),r.addEventListener(`squeeze`,re),r.addEventListener(`squeezestart`,re),r.addEventListener(`squeezeend`,re),r.addEventListener(`end`,ie),r.addEventListener(`inputsourceschange`,ae),b.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(O),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;b.depth&&(o=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?E:T,a=b.stencil?y:m);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Mt(f.textureWidth,f.textureHeight,{format:w,type:l,depthTexture:new Di(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Mt(p.framebufferWidth,p.framebufferHeight,{format:w,type:l,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),fe.setContext(r),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ae(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=D.indexOf(n);r>=0&&(D[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=D.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=D.length){D.push(n),r=e;break}else if(D[e]===null){D[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let oe=new V,se=new V;function ce(e,t,n){oe.setFromMatrixPosition(t.matrixWorld),se.setFromMatrixPosition(n.matrixWorld);let r=oe.distanceTo(se),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function le(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),M.near=j.near=ee.near=t,M.far=j.far=ee.far=n,(ne!==M.near||N!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),ne=M.near,N=M.far),M.layers.mask=e.layers.mask|6,ee.layers.mask=M.layers.mask&-5,j.layers.mask=M.layers.mask&-3;let i=e.parent,a=M.cameras;le(M,i);for(let e=0;e<a.length;e++)le(a[e],i);a.length===2?ce(M,ee,j):M.projectionMatrix.copy(ee.projectionMatrix),A===null&&e.isPerspectiveCamera&&(A={camera:e,fov:e.fov,zoom:e.zoom}),P(e,M,i)};function P(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=at*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)},this.getCameraTexture=function(e){return v[e]};let ue=null;function de(t,i){if(u=i.getViewerPose(c||a),h=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==M.cameras.length&&(M.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=te[n];o===void 0&&(o=new Xo,o.layers.enable(n),o.viewport=new At,te[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(M.matrix.copy(o.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),i===!0&&M.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new ki,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=D[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ue&&ue(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let fe=new xs;fe.setAnimationLoop(de),this.setAnimationLoop=function(e){ue=e},this.dispose=function(){}}},ju=new Ft,Mu=new H;Mu.set(-1,0,0,0,1,0,0,0,1);function Nu(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,so(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(ju.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Mu),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Pu(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return z(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?R(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):R(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Fu=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Iu=null;function Lu(){return Iu===null&&(Iu=new ii(Fu,16,16,k,g),Iu.name=`DFG_LUT`,Iu.minFilter=o,Iu.magFilter=o,Iu.wrapS=t,Iu.wrapT=t,Iu.generateMipmaps=!1,Iu.needsUpdate=!0),Iu}var Ru=class{constructor(e={}){let{canvas:t=Ye(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:b=l}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=b,C=new Set([ee,A,O]),w=new Set([l,m,f,y,_,v]),T=new Uint32Array(4),E=new Int32Array(4),D=new V,k=null,j=null,te=[],M=[],ne=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,re=!1,ie=null,ae=null,oe=null,se=null;this._outputColorSpace=Re;let ce=0,le=0,P=null,ue=-1,de=null,fe=new At,pe=new At,me=null,he=new U(0),ge=0,_e=t.width,ve=t.height,ye=1,be=null,xe=null,Se=new At(0,0,_e,ve),Ce=new At(0,0,_e,ve),we=!1,Te=new _i,Ee=!1,De=!1,Oe=new Ft,ke=new V,Ae=new At,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Me=!1;function Ne(){return P===null?ye:1}let F=n;function Pe(e,n){return t.getContext(e,n)}let Fe,Ie,I,Le,L,ze,Be,Ve,He,Ue,We,Ke,qe,Je,Xe,Qe,$e,tt,nt,rt,it,at,ot;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,lt,!1),t.addEventListener(`webglcontextrestored`,ut,!1),t.addEventListener(`webglcontextcreationerror`,dt,!1),F===null){let t=`webgl2`;if(F=Pe(t,e),F===null)throw Pe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}st()}catch(e){throw t.removeEventListener(`webglcontextlost`,lt,!1),t.removeEventListener(`webglcontextrestored`,ut,!1),t.removeEventListener(`webglcontextcreationerror`,dt,!1),z(`WebGLRenderer: `+e.message),e}function st(){Fe=new nc(F),Fe.init(),it=new Eu(F,Fe),Ie=new js(F,Fe,e,it),I=new wu(F,Fe),Ie.reversedDepthBuffer&&h&&I.buffers.depth.setReversed(!0),ae=F.createFramebuffer(),oe=F.createFramebuffer(),se=F.createFramebuffer(),Le=new ac(F),L=new iu,ze=new Tu(F,Fe,I,L,Ie,it,Le),Be=new tc(N),Ve=new Ss(F),at=new ks(F,Ve),He=new rc(F,Ve,Le,at),Ue=new sc(F,He,Ve,at,Le),tt=new oc(F,Ie,ze),Xe=new Ms(L),We=new ru(N,Be,Fe,Ie,at,Xe),Ke=new Nu(N,L),qe=new cu,Je=new hu(Fe),$e=new Os(N,Be,I,Ue,x,s),Qe=new Cu(N,Ue,Ie),ot=new Pu(F,Le,Ie,I),nt=new As(F,Fe,Le),rt=new ic(F,Fe,Le),Le.programs=We.programs,N.capabilities=Ie,N.extensions=Fe,N.properties=L,N.renderLists=qe,N.shadowMap=Qe,N.state=I,N.info=Le}S!==1009&&(ne=new lc(S,t.width,t.height,o,r,i));let ct=new Au(N,F);this.xr=ct,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let e=Fe.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Fe.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(e){e!==void 0&&(ye=e,this.setSize(_e,ve,!1))},this.getSize=function(e){return e.set(_e,ve)},this.setSize=function(e,n,r=!0){if(ct.isPresenting){R(`WebGLRenderer: Can't change size while VR device is presenting.`);return}_e=e,ve=n,t.width=Math.floor(e*ye),t.height=Math.floor(n*ye),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),ne!==null&&ne.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(_e*ye,ve*ye).floor()},this.setDrawingBufferSize=function(e,n,r){_e=e,ve=n,ye=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009){z(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){R(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}ne.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(fe)},this.getViewport=function(e){return e.copy(Se)},this.setViewport=function(e,t,n,r){e.isVector4?Se.set(e.x,e.y,e.z,e.w):Se.set(e,t,n,r),I.viewport(fe.copy(Se).multiplyScalar(ye).round())},this.getScissor=function(e){return e.copy(Ce)},this.setScissor=function(e,t,n,r){e.isVector4?Ce.set(e.x,e.y,e.z,e.w):Ce.set(e,t,n,r),I.scissor(pe.copy(Ce).multiplyScalar(ye).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(e){I.setScissorTest(we=e)},this.setOpaqueSort=function(e){be=e},this.setTransparentSort=function(e){xe=e},this.getClearColor=function(e){return e.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor(...arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(P!==null){let t=P.texture.format;e=C.has(t)}if(e){let e=P.texture.type,t=w.has(e),n=$e.getClearColor(),r=$e.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,F.clearBufferuiv(F.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,F.clearBufferiv(F.COLOR,0,E))}else r|=F.COLOR_BUFFER_BIT}t&&(r|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&F.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),ie=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,lt,!1),t.removeEventListener(`webglcontextrestored`,ut,!1),t.removeEventListener(`webglcontextcreationerror`,dt,!1),$e.dispose(),qe.dispose(),Je.dispose(),L.dispose(),Be.dispose(),Ue.dispose(),at.dispose(),ot.dispose(),We.dispose(),ct.dispose(),ct.removeEventListener(`sessionstart`,gt),ct.removeEventListener(`sessionend`,_t),vt.stop()};function lt(e){e.preventDefault(),Ze(`WebGLRenderer: Context Lost.`),re=!0}function ut(){Ze(`WebGLRenderer: Context Restored.`),re=!1;let e=Le.autoReset,t=Qe.enabled,n=Qe.autoUpdate,r=Qe.needsUpdate,i=Qe.type;st(),Le.autoReset=e,Qe.enabled=t,Qe.autoUpdate=n,Qe.needsUpdate=r,Qe.type=i}function dt(e){z(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function B(e){let t=e.target;t.removeEventListener(`dispose`,B),ft(t)}function ft(e){pt(e),L.remove(e)}function pt(e){let t=L.get(e).programs;t!==void 0&&(t.forEach(function(e){We.releaseProgram(e)}),e.isShaderMaterial&&We.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=je);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=kt(e,t,n,r,i);I.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=He.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;at.setup(i,r,s,n,c);let h,g=nt;if(c!==null&&(h=Ve.get(c),g=rt,g.setIndex(h)),i.isMesh)r.wireframe===!0?(I.setLineWidth(r.wireframeLinewidth*Ne()),g.setMode(F.LINES)):g.setMode(F.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),I.setLineWidth(e*Ne()),i.isLineSegments?g.setMode(F.LINES):i.isLineLoop?g.setMode(F.LINE_LOOP):g.setMode(F.LINE_STRIP)}else i.isPoints?g.setMode(F.POINTS):i.isSprite&&g.setMode(F.TRIANGLES);if(i.isBatchedMesh){if(Fe.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ve.get(c).bytesPerElement:1,o=L.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(F,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function mt(e,t,n,r){ie!==null&&e.isNodeMaterial&&ie.setObject(r,e),Ee===!0&&Xe.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Tt(e,t,r),e.side=0,e.needsUpdate=!0,Tt(e,t,r),e.side=2):Tt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),ie!==null&&ie.renderStart(e,t,n),j=Je.get(n),j.init(t),M.push(j),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(j.pushLight(e),e.castShadow&&j.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(j.pushLight(e),e.castShadow&&j.pushShadow(e))}),j.setupLights(),ie!==null&&ie.updateLights(j.state.lightsArray),De=this.localClippingEnabled,Ee=Xe.init(this.clippingPlanes,De),Ee===!0&&Xe.setGlobalState(this.clippingPlanes,t),ie!==null&&Qe.render(j.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];mt(o,n,t,e),r.add(o)}else mt(i,n,t,e),r.add(i)}}),j=M.pop(),ie!==null&&ie.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){let t=L.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Fe.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let H=null;function ht(e){H&&H(e)}function gt(){vt.stop()}function _t(){vt.start()}let vt=new xs;vt.setAnimationLoop(ht),typeof self<`u`&&vt.setContext(self),this.setAnimationLoop=function(e){H=e,ct.setAnimationLoop(e),e===null?vt.stop():vt.start()},ct.addEventListener(`sessionstart`,gt),ct.addEventListener(`sessionend`,_t),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){z(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(re===!0)return;ie!==null&&ie.renderStart(e,t);let n=ct.enabled===!0&&ct.isPresenting===!0,r=ne!==null&&(P===null||n)&&ne.begin(N,P);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ne===null||ne.isCompositing()===!1)&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(t),t=ct.getCamera()),e.isScene===!0&&e.onBeforeRender(N,e,t,P),j=Je.get(e,M.length),j.init(t),j.state.textureUnits=ze.getTextureUnits(),M.push(j),Oe.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Te.setFromProjectionMatrix(Oe,Ge,t.reversedDepth),De=this.localClippingEnabled,Ee=Xe.init(this.clippingPlanes,De),k=qe.get(e,te.length),k.init(),te.push(k),ct.enabled===!0&&ct.isPresenting===!0){let e=N.xr.getDepthSensingMesh();e!==null&&bt(e,t,-1/0,N.sortObjects)}bt(e,t,0,N.sortObjects),k.finish(),ie!==null&&ie.updateLights(j.state.lightsArray),N.sortObjects===!0&&k.sort(be,xe),Me=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,Me&&$e.addToRenderList(k,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ee===!0&&Xe.beginShadows();let i=j.state.shadowsArray;if(Qe.render(i,e,t),Ee===!0&&Xe.endShadows(),(r&&ne.hasRenderPass())===!1){let n=k.opaque,r=k.transmissive;if(j.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];St(n,r,e,a)}Me&&$e.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];xt(k,e,n,n.viewport)}}else r.length>0&&St(n,r,e,t),Me&&$e.render(e),xt(k,e,t)}P!==null&&le===0&&(ze.updateMultisampleRenderTarget(P),ze.updateRenderTargetMipmap(P)),r&&ne.end(N),e.isScene===!0&&e.onAfterRender(N,e,t),at.resetDefaultState(),ue=-1,de=null,M.pop(),M.length>0?(j=M[M.length-1],ze.setTextureUnits(j.state.textureUnits),Ee===!0&&Xe.setGlobalState(N.clippingPlanes,j.state.camera)):j=null,te.pop(),k=te.length>0?te[te.length-1]:null,ie!==null&&ie.renderEnd()};function bt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)j.pushLightProbeGrid(e);else if(e.isLight)j.pushLight(e),e.castShadow&&j.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(Te)){r&&Ae.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Oe);let i=Ue.update(e),a=e.material;a.visible&&k.push(e,i,a,n,Ae.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(Te))){let i=Ue.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Ae.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Ae.copy(e.boundingSphere.center)),Ae.applyMatrix4(e.matrixWorld).applyMatrix4(Oe)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&k.push(e,i,c,n,Ae.z,s,t)}}else a.visible&&k.push(e,i,a,n,Ae.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)bt(i[e],t,n,r)}function xt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;j.setupLightsView(n),Ee===!0&&Xe.setGlobalState(N.clippingPlanes,n),r&&I.viewport(fe.copy(r)),i.length>0&&Ct(i,t,n),a.length>0&&Ct(a,t,n),o.length>0&&Ct(o,t,n),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function St(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(j.state.transmissionRenderTarget[r.id]===void 0){let e=Fe.has(`EXT_color_buffer_half_float`)||Fe.has(`EXT_color_buffer_float`);j.state.transmissionRenderTarget[r.id]=new Mt(1,1,{generateMipmaps:!0,type:e?g:l,minFilter:c,samples:Math.max(4,Ie.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:yt.workingColorSpace})}let a=j.state.transmissionRenderTarget[r.id],o=r.viewport||fe;a.setSize(o.z*N.transmissionResolutionScale,o.w*N.transmissionResolutionScale);let s=N.getRenderTarget(),u=N.getActiveCubeFace(),d=N.getActiveMipmapLevel();N.setRenderTarget(a),N.getClearColor(he),ge=N.getClearAlpha(),ge<1&&N.setClearColor(16777215,.5),N.clear(),Me&&$e.render(n);let f=N.toneMapping;N.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),j.setupLightsView(r),Ee===!0&&Xe.setGlobalState(N.clippingPlanes,r),Ct(e,n,r),ze.updateMultisampleRenderTarget(a),ze.updateRenderTargetMipmap(a),Fe.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,wt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(ze.updateMultisampleRenderTarget(a),ze.updateRenderTargetMipmap(a))}N.setRenderTarget(s,u,d),N.setClearColor(he,ge),p!==void 0&&(r.viewport=p),N.toneMapping=f}function Ct(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&wt(o,t,n,s,l,c)}}function wt(e,t,n,r,i,a){ie!==null&&i.isNodeMaterial&&ie.setObject(e,i),e.onBeforeRender(N,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(N,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,N.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,N.renderBufferDirect(n,t,r,i,e,a),i.side=2):N.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(N,t,n,r,i,a)}function Tt(e,t,n){t.isScene!==!0&&(t=je);let r=L.get(e),i=j.state.lights,a=j.state.shadowsArray,o=i.state.version,s=We.getParameters(e,i.state,a,t,n,j.state.lightProbeGridArray),c=We.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Be.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,B),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Dt(e,s),d}else s.uniforms=We.getUniforms(e),ie!==null&&e.isNodeMaterial&&ie.build(e,n,s),e.onBeforeCompile(s,N),d=We.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Xe.uniform),Dt(e,s),r.needsLights=Nt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=j.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Et(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=gl.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Dt(e,t){let n=L.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Ot(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function kt(e,t,n,r,i){t.isScene!==!0&&(t=je),ze.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=P===null?N.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:yt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Be.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(h=N.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=L.get(r),y=j.state.lights;if(Ee===!0&&(De===!0||e!==de)){let t=e===de&&r.id===ue;Xe.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Xe.numPlanes||v.numIntersection!==Xe.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=j.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=Tt(r,t,i),ie&&r.isNodeMaterial&&ie.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(I.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==ue&&(ue=r.id,C=!0),v.needsLights){let e=Ot(j.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||de!==e){I.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(F,`projectionMatrix`,e.projectionMatrix),T.setValue(F,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(F,ke.setFromMatrixPosition(e.matrixWorld)),Ie.logarithmicDepthBuffer&&T.setValue(F,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(F,`isOrthographic`,e.isOrthographicCamera===!0),de!==e&&(de=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(F,`sunShadowMap`,y.state.sunShadowMap,ze),y.state.directionalShadowMap.length>0&&T.setValue(F,`directionalShadowMap`,y.state.directionalShadowMap,ze),y.state.spotShadowMap.length>0&&T.setValue(F,`spotShadowMap`,y.state.spotShadowMap,ze),y.state.pointShadowMap.length>0&&T.setValue(F,`pointShadowMap`,y.state.pointShadowMap,ze)),i.isSkinnedMesh){T.setOptional(F,i,`bindMatrix`),T.setOptional(F,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(F,`boneTexture`,e.boneTexture,ze))}i.isBatchedMesh&&(T.setOptional(F,i,`batchingTexture`),T.setValue(F,`batchingTexture`,i._matricesTexture,ze),T.setOptional(F,i,`batchingIdTexture`),T.setValue(F,`batchingIdTexture`,i._indirectTexture,ze),T.setOptional(F,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(F,`batchingColorTexture`,i._colorsTexture,ze));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&tt.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(F,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=Lu()),C){if(T.setValue(F,`toneMappingExposure`,N.toneMappingExposure),v.needsLights&&jt(E,w),a&&r.fog===!0&&Ke.refreshFogUniforms(E,a),Ke.refreshMaterialUniforms(E,r,ye,ve,j.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}gl.upload(F,Et(v),E,ze)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(gl.upload(F,Et(v),E,ze),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(F,`center`,i.center),T.setValue(F,`modelViewMatrix`,i.modelViewMatrix),T.setValue(F,`normalMatrix`,i.normalMatrix),T.setValue(F,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];ot.update(n,x),ot.bind(n,x)}}return x}function jt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Nt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ce},this.getActiveMipmapLevel=function(){return le},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(e,t,n){let r=L.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),L.get(e.texture).__webglTexture=t,L.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=L.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){P=e,ce=t,le=n;let r=null,i=!1,a=!1;if(e){let o=L.get(e);if(o.__useDefaultFramebuffer!==void 0){I.bindFramebuffer(F.FRAMEBUFFER,o.__webglFramebuffer),fe.copy(e.viewport),pe.copy(e.scissor),me=e.scissorTest,I.viewport(fe),I.scissor(pe),I.setScissorTest(me),ue=-1;return}if(o.__webglFramebuffer===void 0)ze.setupRenderTarget(e);else if(o.__hasExternalTextures)ze.rebindTextures(e,L.get(e.texture).__webglTexture,L.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&L.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);ze.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=L.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&ze.useMultisampledRTT(e)===!1?L.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,fe.copy(e.viewport),pe.copy(e.scissor),me=e.scissorTest}else fe.copy(Se).multiplyScalar(ye).floor(),pe.copy(Ce).multiplyScalar(ye).floor(),me=we;if(n!==0&&(r=ae),I.bindFramebuffer(F.FRAMEBUFFER,r)&&I.drawBuffers(e,r),I.viewport(fe),I.scissor(pe),I.setScissorTest(me),i){let r=L.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=L.get(e.textures[t]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=L.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,t.__webglTexture,n)}ue=-1};function Pt(e){let t=L.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Ie.textureFormatReadable(e.format),t.__typeReadable=Ie.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=L.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){I.bindFramebuffer(F.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s);let u=Pt(o);if(u.__formatReadable===!1){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&F.readPixels(t,n,r,i,it.convert(c),it.convert(l),a)}finally{let e=P===null?null:L.get(P).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=L.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){I.bindFramebuffer(F.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s);let d=Pt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,f),F.bufferData(F.PIXEL_PACK_BUFFER,a.byteLength,F.STREAM_READ),F.readPixels(t,n,r,i,it.convert(l),it.convert(u),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let p=P===null?null:L.get(P).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,p);let m=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await et(F,m,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,f),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,a),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(f),F.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;ze.setTexture2D(e,0),F.copyTexSubImage2D(F.TEXTURE_2D,n,0,0,o,s,i,a),I.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=it.convert(t.format),_=it.convert(t.type),v;t.isData3DTexture?(ze.setTexture3D(t,0),v=F.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(ze.setTexture2DArray(t,0),v=F.TEXTURE_2D_ARRAY):(ze.setTexture2D(t,0),v=F.TEXTURE_2D),I.activeTexture(F.TEXTURE0),I.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,t.flipY),I.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),I.pixelStorei(F.UNPACK_ALIGNMENT,t.unpackAlignment);let y=I.getParameter(F.UNPACK_ROW_LENGTH),b=I.getParameter(F.UNPACK_IMAGE_HEIGHT),x=I.getParameter(F.UNPACK_SKIP_PIXELS),S=I.getParameter(F.UNPACK_SKIP_ROWS),C=I.getParameter(F.UNPACK_SKIP_IMAGES);I.pixelStorei(F.UNPACK_ROW_LENGTH,h.width),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,h.height),I.pixelStorei(F.UNPACK_SKIP_PIXELS,l),I.pixelStorei(F.UNPACK_SKIP_ROWS,u),I.pixelStorei(F.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=L.get(e),r=L.get(t),h=L.get(n.__renderTarget),g=L.get(r.__renderTarget);I.bindFramebuffer(F.READ_FRAMEBUFFER,h.__webglFramebuffer),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,L.get(e).__webglTexture,i,d+n),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,L.get(t).__webglTexture,a,m+n)),F.blitFramebuffer(l,u,o,s,f,p,o,s,F.DEPTH_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||L.has(e)){let n=L.get(e),r=L.get(t);I.bindFramebuffer(F.READ_FRAMEBUFFER,oe),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,se);for(let e=0;e<c;e++)w?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,n.__webglTexture,i),T?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,r.__webglTexture,a),i===0?T?F.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):F.copyTexSubImage2D(v,a,f,p,l,u,o,s):F.blitFramebuffer(l,u,o,s,f,p,o,s,F.COLOR_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?F.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h);I.pixelStorei(F.UNPACK_ROW_LENGTH,y),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,b),I.pixelStorei(F.UNPACK_SKIP_PIXELS,x),I.pixelStorei(F.UNPACK_SKIP_ROWS,S),I.pixelStorei(F.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&F.generateMipmap(v),I.unbindTexture()},this.initRenderTarget=function(e){L.get(e).__webglFramebuffer===void 0&&ze.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?ze.setTextureCube(e,0):e.isData3DTexture?ze.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?ze.setTexture2DArray(e,0):ze.setTexture2D(e,0),I.unbindTexture()},this.resetState=function(){ce=0,le=0,P=null,I.reset(),at.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ge}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}},zu=[];for(let e=0;e<44;e++)zu.push(Array(96).fill(` `));var Bu=(e,t,n,r,i)=>{for(let a=t;a<=r;a++)for(let t=e;t<=n;t++)zu[a][t]=i};Bu(0,0,63,25,`#`),Bu(1,1,8,7,`.`),Bu(10,1,17,7,`.`),Bu(19,1,21,7,`.`),Bu(23,1,28,7,`.`),Bu(30,1,32,7,`.`),Bu(34,1,42,7,`.`),Bu(44,1,53,7,`.`),Bu(55,1,62,7,`.`),Bu(1,9,62,12,`.`),Bu(1,14,20,24,`.`),Bu(22,14,42,24,`.`),Bu(44,14,51,24,`.`),Bu(53,14,62,19,`.`),Bu(53,21,57,24,`.`),Bu(59,21,62,24,`.`),Bu(0,26,63,43,`F`),Bu(1,26,62,28,`o`),Bu(1,31,62,42,`o`);for(let e=29;e<=30;e++)for(let t=27;t<=35;t++)zu[e][t]=`o`;var Vu=(e,t,n)=>{for(let r=t;r<=n;r++)zu[e][r]=`.`};Vu(8,4,5),Vu(8,13,14),Vu(8,20,20),Vu(8,23,24),Vu(8,31,31),Vu(8,35,36),Vu(8,46,47),Vu(8,58,59),Vu(13,4,17),Vu(13,28,31),Vu(13,47,48),Vu(13,57,58),Vu(20,55,55),Vu(20,60,60);for(let e of[22,33]){for(let t=2;t<=4;t++)zu[t][e]=`G`;zu[6][e]=`.`}Vu(25,8,12),Vu(25,30,33),Bu(65,0,95,14,`F`),Bu(66,1,94,13,`r`),Bu(65,16,95,29,`#`),Bu(66,17,77,19,`.`),Bu(79,17,94,19,`.`),Bu(66,21,94,23,`.`),Bu(66,25,80,28,`.`),Bu(82,25,94,28,`.`),Vu(20,71,72),Vu(20,86,87),Vu(24,72,73),Vu(24,88,89);var Hu=[[8,1,62],[13,1,62],[25,1,62],[20,53,62],[20,66,94],[24,66,94]],Uu=[{id:`reading`,name:`Radiology Reading Room`,x0:1,y0:1,x1:8,y1:7,floor:`#39424e`,fuel:.7},{id:`tea`,name:`Staff Tea Room`,x0:10,y0:1,x1:17,y1:7,floor:`#b9a47e`,fuel:.55},{id:`ctctl`,name:`CT Control Room`,x0:19,y0:1,x1:22,y1:7,floor:`#6f8ea3`,fuel:.4},{id:`ct`,name:`CT`,x0:23,y0:1,x1:28,y1:7,floor:`#a9c4d6`,fuel:.3},{id:`mrictl`,name:`MRI Control Room`,x0:30,y0:1,x1:33,y1:7,floor:`#7d7699`,fuel:.4},{id:`mri`,name:`MRI (Zone 4)`,x0:34,y0:1,x1:42,y1:7,floor:`#b8b0d0`,fuel:.3},{id:`xray`,name:`X-ray Room`,x0:44,y0:1,x1:53,y1:7,floor:`#b5c9b0`,fuel:.3},{id:`toilets`,name:`Staff Toilets`,x0:53,y0:21,x1:57,y1:24,floor:`#dfe6ea`,fuel:.2},{id:`supply`,name:`Supply Cupboard`,x0:59,y0:21,x1:62,y1:24,floor:`#a89f8a`,fuel:1.3},{id:`oncall`,name:`On-call Room`,x0:55,y0:1,x1:62,y1:7,floor:`#8c7b6b`,fuel:.7},{id:`corridor`,name:`Main Corridor`,x0:1,y0:8,x1:62,y1:13,floor:`#9fb89a`,fuel:.3},{id:`resus`,name:`Resus`,x0:1,y0:14,x1:20,y1:24,floor:`#9fc0cf`,fuel:.5},{id:`waiting`,name:`Waiting Room`,x0:22,y0:14,x1:42,y1:25,floor:`#8fbab3`,fuel:.6},{id:`chapel`,name:`Chapel`,x0:44,y0:14,x1:51,y1:24,floor:`#7d6a8c`,fuel:.9},{id:`cafe`,name:`Cafe (closed)`,x0:53,y0:14,x1:62,y1:20,floor:`#c9b27c`,fuel:.5},{id:`outside`,name:`Ambulance Bay`,x0:1,y0:25,x1:62,y1:28,floor:`#3d3f44`,fuel:0},{id:`carpark`,name:`Staff Car Park`,x0:1,y0:29,x1:62,y1:42,floor:`#44474d`,fuel:0,outdoor:!0},{id:`roof`,name:`Roof / Helipad`,x0:66,y0:1,x1:94,y1:13,floor:`#4a4d52`,fuel:0,outdoor:!0},{id:`morgue`,name:`Morgue`,x0:66,y0:17,x1:77,y1:19,floor:`#b8c4c8`,fuel:.2},{id:`archive`,name:`Film Archive`,x0:79,y0:17,x1:94,y1:19,floor:`#7a6848`,fuel:2},{id:`boiler`,name:`Boiler Room`,x0:66,y0:25,x1:80,y1:28,floor:`#5a5550`,fuel:.4},{id:`olddept`,name:`Old Radiology Dept (1972-1999)`,x0:82,y0:25,x1:94,y1:28,floor:`#4a3d3d`,fuel:.8},{id:`basement`,name:`Basement Corridor`,x0:66,y0:20,x1:94,y1:24,floor:`#6d6a5e`,fuel:.3}],Wu=Object.fromEntries(Uu.map(e=>[e.id,e])),Gu=[];for(let e=0;e<44;e++){Gu.push([]);for(let t=0;t<96;t++){let n=null;!Ku(zu[e][t])&&zu[e][t]!==` `&&(n=Uu.find(n=>t>=n.x0&&t<=n.x1&&e>=n.y0&&e<=n.y1)||Wu.corridor),Gu[e].push(n)}}function Ku(e){return e===`#`||e===`F`||e===`G`}function qu(e,t){return e>=0&&t>=0&&e<96&&t<44}function Ju(e,t){return!qu(e,t)||Ku(zu[t][e])}function Yu(e,t){return qu(e,t)&&zu[t][e]===` `}function Xu(e,t){return qu(e,t)?Gu[t][e]:null}function Zu(e,t){return Xu(Math.floor(e),Math.floor(t))}function Qu(e,t){return e<64.5?`main`:t<15?`roof`:`basement`}var $u=[],ed=new Uint8Array(4224);function td(e,t){for(let n=Math.floor(e.minZ);n<Math.ceil(e.maxZ);n++)for(let r=Math.floor(e.minX);r<Math.ceil(e.maxX);r++){if(!qu(r,n))continue;let i=.22;e.minX<r+1-i&&e.maxX>r+i&&e.minZ<n+1-i&&e.maxZ>n+i&&(ed[n*96+r]+=t)}}function nd(e,t,n,r,i,a){let o={minX:e,minZ:t,maxX:n,maxZ:r,h:i,tag:a};return $u.push(o),td(o,1),o}function rd(e){let t=$u.indexOf(e);t<0||($u.splice(t,1),td(e,-1))}function id(e,t){return!Ju(e,t)&&!Yu(e,t)&&!ed[t*96+e]}function ad(e,t,n=0){let r=Math.floor(e),i=Math.floor(t);if(!qu(r,i)||zu[i][r]===` `)return-100;let a=0;for(let r of $u)r.h>n+.05||r.h<=a||e>r.minX&&e<r.maxX&&t>r.minZ&&t<r.maxZ&&(a=r.h);return a}function od(e,t,n=0){let r=!1,i=Math.floor(e.x),a=Math.floor(e.z);for(let o=a-1;o<=a+1;o++)for(let a=i-1;a<=i+1;a++)Ju(a,o)&&(qu(a,o)&&zu[o][a]===`F`&&n>1.15||sd(e,t,a,o,a+1,o+1)&&(r=!0));for(let i of $u)i.h<=n+.05||e.x+t<i.minX||e.x-t>i.maxX||e.z+t<i.minZ||e.z-t>i.maxZ||sd(e,t,i.minX,i.minZ,i.maxX,i.maxZ)&&(r=!0);return r}function sd(e,t,n,r,i,a){let o=Math.max(n,Math.min(e.x,i)),s=Math.max(r,Math.min(e.z,a)),c=e.x-o,l=e.z-s,u=c*c+l*l;if(u>=t*t)return!1;if(u>1e-8){let n=Math.sqrt(u);e.x=o+c/n*t,e.z=s+l/n*t,e.nx=c/n,e.nz=l/n}else{let o=e.x-n,s=i-e.x,c=e.z-r,l=a-e.z,u=Math.min(o,s,c,l);u===o?(e.x=n-t,e.nx=-1,e.nz=0):u===s?(e.x=i+t,e.nx=1,e.nz=0):u===c?(e.z=r-t,e.nx=0,e.nz=-1):(e.z=a+t,e.nx=0,e.nz=1)}return!0}function cd(e,t,n,r){let i=Math.floor(e),a=Math.floor(t),o=Math.floor(n),s=Math.floor(r);if(!id(o,s)){let e=ld(o,s);if(!e)return null;o=e.x,s=e.y}if(!id(i,a)){let e=ld(i,a);if(!e)return null;i=e.x,a=e.y}let c=a*96+i,l=s*96+o,u=new Int32Array(4224).fill(-1);u[c]=c;let d=[c],f=0;for(;f<d.length;){let e=d[f++];if(e===l)break;let t=e%96,n=e/96|0;for(let r=-1;r<=1;r++)for(let i=-1;i<=1;i++){if(!i&&!r)continue;let a=t+i,o=n+r;if(!id(a,o)||i&&r&&(!id(t+i,n)||!id(t,n+r)))continue;let s=o*96+a;u[s]===-1&&(u[s]=e,d.push(s))}}if(u[l]===-1)return null;let p=[];for(let e=l;e!==c;e=u[e])p.push({x:e%96+.5,z:(e/96|0)+.5});return p.reverse(),p.length&&(p[p.length-1]={x:n,z:r}),p}function ld(e,t){for(let n=0;n<6;n++)for(let r=-n;r<=n;r++)for(let i=-n;i<=n;i++)if(Math.max(Math.abs(i),Math.abs(r))===n&&id(e+i,t+r))return{x:e+i,y:t+r};return null}function ud(e,t=Math.random){let n=Wu[e];for(let e=0;e<60;e++){let e=n.x0+Math.floor(t()*(n.x1-n.x0+1)),r=n.y0+Math.floor(t()*(n.y1-n.y0+1));if(id(e,r)&&Xu(e,r)===n)return{x:e+.5,z:r+.5}}return{x:(n.x0+n.x1)/2+.5,z:(n.y0+n.y1)/2+.5}}var dd=32,fd=new Map;function pd(e,t={}){let{unique:n,...r}=t,i=e+JSON.stringify(r);if(!n&&fd.has(i))return fd.get(i);let a=new ho({color:e,...r});return n||fd.set(i,a),a}function md(e,t,n,r,i,a,o,s,c){let l=new W(new Ai(t,n,r),c?.material||pd(i,c?.mat));return l.position.set(a,o,s),e.add(l),l}function hd(e,t,n,r,i,a,o,s){let c=md(e,r-t,a,i-n,o,(t+r)/2,a/2,(n+i)/2,{mat:{unique:!0}});return nd(t,n,r,i,a,s),c}function gd(e,t,n,{bg:r=`#0b3d6b`,fg:i=`#ffffff`,font:a=`bold 64px "Archivo Narrow", Arial, sans-serif`,pad:o=0}={}){let s=document.createElement(`canvas`);s.width=t,s.height=n;let c=s.getContext(`2d`);c.fillStyle=r,c.fillRect(0,0,t,n),c.fillStyle=i,c.font=a,c.textAlign=`center`,c.textBaseline=`middle`;let l=e.split(`
`),u=n/(l.length+o);return l.forEach((e,n)=>c.fillText(e,t/2,u*(n+.5+o/2))),s}function _d(e,t,n,r,i,a,o=2.4,s=.5,c){let l=new Ei(gd(t,512,Math.round(512*s/o),c));l.colorSpace=Re;let u=new W(new Qa(o,s),new Wr({map:l}));return u.position.set(n,r,i),u.rotation.y=a,e.add(u),u}function vd(e){let t={interactables:[],burnables:[],flammableStatics:[]},n=document.createElement(`canvas`);n.width=96*dd,n.height=44*dd;let r=n.getContext(`2d`);r.clearRect(0,0,n.width,n.height);for(let e=0;e<44;e++)for(let t=0;t<96;t++){let n=Xu(t,e);n&&(r.fillStyle=n.floor,r.fillRect(t*dd,e*dd,dd,dd),n.id!==`outside`&&n.id!==`roof`&&(r.fillStyle=`rgba(0,0,0,0.06)`,(t+e)%2&&r.fillRect(t*dd,e*dd,dd,dd),r.strokeStyle=`rgba(255,255,255,0.08)`,r.strokeRect(t*dd+.5,e*dd+.5,31,31)))}r.strokeStyle=`#e8c547`,r.lineWidth=4,r.strokeRect(64,25.8*dd,6.5*dd,2.6*dd),r.fillStyle=`#e8c547`,r.font=`bold 26px Arial`,r.save(),r.translate(352,27.2*dd),r.fillText(`AMBULANCE ONLY`,0,0),r.restore(),r.fillStyle=`#d64545`,r.fillRect(32,10.9*dd,1344,5),r.fillStyle=`#3d7bd6`,r.fillRect(32,11.1*dd,1344,5),r.fillStyle=`#e8c547`;for(let e=30;e<43;e++)r.fillRect(e*dd,7.8*dd,dd/2,6);r.strokeStyle=`rgba(230,230,210,0.5)`,r.lineWidth=3;for(let e of[31,37])for(let t=2;t<=60;t+=3)r.strokeRect(t*dd,e*dd,96,4.6*dd);r.fillStyle=`rgba(230,220,120,0.5)`,r.font=`bold ${Math.round(dd*1.4)}px Arial`,r.save(),r.translate(992,1152),r.textAlign=`center`,r.fillText(`P`,0,0),r.restore();let i=new Ei(n);i.colorSpace=Re,i.anisotropy=4;let a=new W(new Qa(96,44),new ho({map:i,transparent:!0,alphaTest:.5}));a.rotation.x=-Math.PI/2,a.position.set(48,0,22),e.add(a),t.floorTex=i,t.scorch=(e,t,n=.5)=>{let a=(e+.5)*dd,o=(t+.5)*dd,s=r.createRadialGradient(a,o,2,a,o,dd*.9);s.addColorStop(0,`rgba(15,10,8,${n})`),s.addColorStop(1,`rgba(15,10,8,0)`),r.fillStyle=s,r.fillRect(a-dd,o-dd,64,64),i.needsUpdate=!0},t.puddle=(e,t)=>{let n=(e+.5)*dd,a=(t+.5)*dd;r.fillStyle=`rgba(120,170,220,0.12)`,r.beginPath(),r.ellipse(n,a,dd*.5,dd*.35,Math.random()*3,0,Math.PI*2),r.fill(),i.needsUpdate=!0};let o=new W(new Qa(200,200),pd(`#1c1f22`));o.rotation.x=-Math.PI/2,o.position.set(-36,-.01,22),e.add(o);let s=new W(new Qa(64,150),pd(`#1c1f22`));s.rotation.x=-Math.PI/2,s.position.set(32,-.01,105),e.add(s);let c=new pr,l=[];for(let e=0;e<900;e++)l.push(70+Math.random()*160-40,-40-Math.random()*5,-80+Math.random()*110);c.setAttribute(`position`,new tr(l,3)),e.add(new Ci(c,new vi({color:`#ffcf7a`,size:.5,fog:!1})));let u=0,d=0;for(let e=0;e<44;e++)for(let t=0;t<96;t++)zu[e][t]===`#`?u++:zu[e][t]===`F`&&d++;let f=new pi(new Ai(1,3,1),pd(`#e9e6df`),u),p=new pi(new Ai(1,1.1,.25),pd(`#6b7178`),d),m=new ln,h=0,g=0;for(let e=0;e<44;e++)for(let t=0;t<96;t++)if(zu[e][t]===`#`)m.position.set(t+.5,1.5,e+.5),m.rotation.set(0,0,0),m.updateMatrix(),f.setMatrixAt(h++,m.matrix);else if(zu[e][t]===`F`){m.position.set(t+.5,.55,e+.5);let n=zu[e][t-1]===`F`||zu[e][t+1]===`F`;m.rotation.set(0,n?0:Math.PI/2,0),m.updateMatrix(),p.setMatrixAt(g++,m.matrix)}e.add(f,p);let _=new ho({color:`#9fd0e8`,transparent:!0,opacity:.28,depthWrite:!1});for(let t=0;t<44;t++)for(let n=0;n<96;n++){if(zu[t][n]!==`G`)continue;md(e,1,1,1,`#e9e6df`,n+.5,.5,t+.5),md(e,1,.8,1,`#e9e6df`,n+.5,2.6,t+.5);let r=new W(new Ai(.06,1.2,1),_);r.position.set(n+.5,1.6,t+.5),e.add(r)}let v=new pi(new Ai(1.02,.18,1.02),pd(`#5d7d8f`),u);h=0;for(let e=0;e<44;e++)for(let t=0;t<96;t++)zu[e][t]===`#`&&(m.position.set(t+.5,.09,e+.5),m.rotation.set(0,0,0),m.updateMatrix(),v.setMatrixAt(h++,m.matrix));e.add(v);for(let[t,n,r]of Hu)for(let i=n;i<=r;i++)zu[t][i]!==`#`&&md(e,1,.8,1,`#e9e6df`,i+.5,2.6,t+.5);for(let[t,n,r,i,a]of[[0,0,64,25,`#cfd3d6`],[65,16,96,30,`#8d8b84`]]){let o=new W(new Qa(r-t,i-n),pd(a));o.rotation.x=Math.PI/2,o.position.set((t+r)/2,3,(n+i)/2),e.add(o)}let y=new Wr({color:`#fbfbf2`});t.panelMat=y;for(let t=2.5;t<44;t+=4)for(let n=2.5;n<96;n+=4){let r=Xu(Math.floor(n),Math.floor(t));if(Ju(Math.floor(n),Math.floor(t))||!r||r.id===`outside`||r.outdoor)continue;let i=new W(new Qa(1.2,.6),y);i.rotation.x=Math.PI/2,i.position.set(n,2.99,t),e.add(i)}e.add(new Ro(16776694,5922920,1.15)),e.add(new ns(16777215,.3));let b=new ts(16774368,1.3);b.position.set(30,40,10),b.target.position.set(22,0,14),e.add(b,b.target);let x=new ts(14674175,.5);x.position.set(-20,25,40),e.add(x);let S=new Qo(16752714,18,16,1.6);S.position.set(20,4.5,27.5),e.add(S);for(let[t,n]of[[10,33],[31,33],[52,33],[10,40],[31,40],[52,40]]){md(e,.18,5,.18,`#2a2d31`,t,2.5,n);let r=md(e,.7,.25,.7,`#1a1c1f`,t,5,n),i=new W(new Qa(.62,.62),new Wr({color:`#ffe6a8`}));i.rotation.x=Math.PI/2,i.position.set(0,-.13,0),r.add(i);let a=new Qo(16769184,42,30,1.2);a.position.set(t,4.7,n),e.add(a)}let C=new Qo(8368895,3,5,1.5);C.position.set(3.2,1.3,2.2),e.add(C),t.alarmLight=new Qo(16719904,0,60,.6),t.alarmLight.position.set(20,2.8,11),e.add(t.alarmLight),hd(e,1.05,1.05,5.4,1.9,.75,`#6d5a47`);let w=[];for(let t of[2.35,3.95]){md(e,.08,.35,.08,`#222`,t,.95,1.4);let n=md(e,.98,.62,.06,`#15171a`,t,1.35,1.38),r=new W(new Qa(.9,.54),new Wr({color:`#000`}));r.position.set(t,1.35,1.415),e.add(r),w.push(r),n.rotation.y=0}t.pacsScreens=w,t.phone=md(e,.25,.1,.2,`#2b2b2b`,4.9,.8,1.5),md(e,.1,.06,.22,`#111`,4.82,.87,1.5),md(e,.5,.03,.18,`#1d1d1d`,3.2,.77,1.75),hd(e,6.4,1.05,8.9,1.8,.75,`#6d5a47`),md(e,.06,.3,.06,`#222`,7.6,.9,1.35),md(e,.72,.46,.05,`#15171a`,7.6,1.25,1.33),md(e,.45,.03,.15,`#1d1d1d`,7.6,.77,1.75);let T=document.createElement(`canvas`);T.width=256,T.height=160;{let e=T.getContext(`2d`),t=e.createRadialGradient(180,50,10,128,80,200);t.addColorStop(0,`#2f6f9a`),t.addColorStop(1,`#0c2036`),e.fillStyle=t,e.fillRect(0,0,256,160),[`#0f6e6e`,`#ffffff`,`#2b5797`,`#1e7145`,`#c4472b`,`#2b5797`,`#eceff1`,`#7b4fa0`].forEach((t,n)=>{e.fillStyle=t,e.fillRect(10+Math.floor(n/4)*34,8+n%4*34,20,20),e.fillStyle=`#cfd8e0`,e.fillRect(8+Math.floor(n/4)*34,31+n%4*34,24,3)}),e.fillStyle=`rgba(10,14,20,.92)`,e.fillRect(0,146,256,14),e.fillStyle=`#1f6fb2`,e.fillRect(0,146,28,14),e.fillStyle=`rgba(255,255,255,.3)`,e.font=`bold 18px Arial`,e.textAlign=`right`,e.fillText(`RadsSim General`,248,134)}let E=new W(new Qa(.66,.4),new Wr({map:new Ei(T)}));E.position.set(7.6,1.25,1.36),e.add(E),t.interactables.push({id:`riskman`,x:7.6,z:2.3,r:1.2,label:`Use the computer (RiskMann, Bidly, files)`}),hd(e,6.1,5.9,8.9,6.9,.45,`#7a3b3b`,`flammable`),md(e,2.8,.5,.25,`#6a3333`,7.5,.75,6.85);let D=new W(new Qa(1.6,.9),new Wr({color:`#dfe9f0`}));D.position.set(1.02,1.7,4.2),D.rotation.y=Math.PI/2,e.add(D),_d(e,`RADIOLOGY
ON CALL`,1.03,2.55,4.2,Math.PI/2,1.4,.45,{bg:`#1d2733`,fg:`#ffcf5a`,font:`bold 52px "Archivo Narrow", Arial`}),t.interactables.push({id:`pacs`,x:3.2,z:2.2,r:1.5,label:`Sit at PACS`},{id:`phone`,x:4.9,z:2.1,r:1.3,label:`Answer phone`},{id:`couch`,x:7.5,z:5.6,r:1.5,label:`Nap on the on-call couch`}),hd(e,10.05,1.05,15.6,1.75,.92,`#d8d2c4`),t.microwave={x:11.6,z:1.4},md(e,.62,.36,.42,`#e6e6e6`,11.6,1.1,1.4),t.microwaveGlow=new W(new Qa(.38,.24),new Wr({color:`#222`})),t.microwaveGlow.position.set(11.52,1.1,1.615),e.add(t.microwaveGlow),md(e,.32,.2,.2,`#b8b8b8`,13.2,1.02,1.4),md(e,.2,.28,.2,`#333`,14.5,1.06,1.4),hd(e,16.2,1.05,17.95,1.95,1.9,`#f0f0f0`),hd(e,12.6,4,14.8,5.2,.75,`#a67c52`,`flammable`),_d(e,`PLEASE CLEAN UP
AFTER YOURSELF`,13,2.1,1.02,0,1.6,.5,{bg:`#fff9c4`,fg:`#333`,font:`bold 40px "Caveat", cursive`}),_d(e,`NO FOIL IN
MICROWAVE!!!`,11.6,1.75,1.02,0,.9,.35,{bg:`#fff`,fg:`#c00`,font:`bold 40px "Caveat", cursive`}),t.interactables.push({id:`microwave`,x:11.6,z:2.1,r:1.2,label:`Use microwave`},{id:`toaster`,x:13.2,z:2.1,r:1,label:`Make toast`},{id:`fridge`,x:17,z:2.5,r:1.2,label:`Raid the staff fridge`},{id:`kettle`,x:14.5,z:2.1,r:1,label:`Make instant coffee`});let O=new W(new no(.85,.38,16,40),pd(`#f2f4f7`));O.position.set(25,1.25,3.5),O.rotation.y=Math.PI/2,e.add(O),md(e,.8,.5,2.2,`#dfe3e8`,25,.25,3.5),nd(24.5,2.2,25.5,4.8,2.2),hd(e,25.5,3.15,28.8,3.85,.82,`#cfd6de`),hd(e,19.05,3,19.9,5.4,.8,`#4a5663`),md(e,.05,.4,.7,`#0a0`,19.9,1.1,4.2).material=new Wr({color:`#1d3b52`}),hd(e,21.2,1.6,21.9,5,.8,`#4a5663`);let k=_d(e,`X-RAY ON`,25.5,2.55,1.03,0,1.2,.3,{bg:`#300`,fg:`#f33`,font:`bold 60px Arial`}),A=_d(e,`X-RAY ON`,23.5,2.2,9.03,0,.9,.22,{bg:`#300`,fg:`#f33`,font:`bold 60px Arial`});_d(e,`CT CONTROL`,20.5,2.6,9.02,0,1.4,.3),t.interactables.push({id:`ctconsole`,x:20.6,z:4.2,r:1.3,label:`CT console: scan whatever is on the table`}),t.ctTable={x:27,z:3.5},hd(e,36,1.6,39.2,5.4,2.5,`#eef0f4`);let ee=new W(new Mi(.75,32),pd(`#9aa3ad`));ee.position.set(39.21,1.2,3.5),ee.rotation.y=Math.PI/2,e.add(ee);let j=new W(new Mi(.55,32),pd(`#2a2f36`));j.position.set(39.22,1.2,3.5),j.rotation.y=Math.PI/2,e.add(j),hd(e,39.2,3.15,41.9,3.85,.8,`#d7dce2`),t.magnet={x:39.3,y:1.2,z:3.5};let te=md(e,.08,.25,.25,`#d00`,30.04,1.4,6.3);te.material=new Wr({color:`#e11`}),_d(e,`EMERGENCY
QUENCH`,30.03,1.8,6.3,Math.PI/2,.6,.3,{bg:`#fff`,fg:`#c00`,font:`bold 44px Arial`}),_d(e,`⚠ ZONE 4: MAGNET IS ALWAYS ON`,36.5,2.5,8.99,0,2.8,.4,{bg:`#e8c547`,fg:`#111`,font:`bold 38px Arial`}),t.interactables.push({id:`quench`,x:30.8,z:6.3,r:1.2,label:`Press EMERGENCY QUENCH`}),hd(e,30.1,2,30.9,4.8,.8,`#4a5663`),md(e,.05,.4,.7,`#0a0`,30.9,1.1,3.4).material=new Wr({color:`#2a2150`}),_d(e,`MRI CONTROL`,31.5,2.6,9.02,0,1.4,.3);let M=_d(e,`SCANNING`,38.5,2.5,1.03,0,1.2,.3,{bg:`#1a1030`,fg:`#b98cff`,font:`bold 60px Arial`});hd(e,44.4,1.05,45.6,1.45,1.9,`#d7dce2`),md(e,.9,.9,.05,`#aeb6bf`,45,1.4,1.48),hd(e,47.5,3.9,50.5,4.9,.8,`#cfd6de`),md(e,.15,3,.15,`#9aa3ad`,49,1.5,2.2),md(e,1.6,.12,.12,`#9aa3ad`,48.2,2.3,2.2);let ne=md(e,.5,.35,.45,`#eef0f4`,47.4,2.05,2.2);md(e,.35,.05,.35,`#333`,47.4,1.85,2.2),hd(e,51.4,1.05,51.55,3.4,2.1,`#8e99a3`);let N=new W(new Ai(.04,.6,1.2),_);N.position.set(51.47,1.55,2.2),e.add(N),hd(e,52.4,1.05,53.9,1.75,.85,`#4a5663`),md(e,.6,.4,.05,`#111`,53.1,1.25,1.5);let re=_d(e,`X-RAY ON`,46.5,2.2,9.03,0,.9,.22,{bg:`#300`,fg:`#f33`,font:`bold 60px Arial`});_d(e,`X-RAY`,47,2.6,9.02,0,1.2,.3),_d(e,`RADIATION
AREA`,52.6,2.4,1.03,0,.8,.45,{bg:`#e8c547`,fg:`#111`,font:`bold 44px Arial`}),t.interactables.push({id:`xrconsole`,x:53,z:2.4,r:1.2,label:`X-ray console: expose whoever is at the chest stand`}),t.xrStand={x:45,z:2.1},t.tube=ne,t.scanners={ct:{lights:[k,A],table:{x0:28.4,x1:25.2,y:1.05,z:3.5},zone:`ct`},mri:{lights:[M],table:{x0:41.5,x1:38.6,y:1.03,z:3.5},zone:`mri`},xr:{lights:[re],stand:{x:45,z:1.95},zone:`xray`}},t.consoleSpots={ct:{x:20.5,z:4.2},mri:{x:31.6,z:3.4},xr:{x:52.9,z:2.5}};let ie=document.createElement(`canvas`);ie.width=512,ie.height=288,t.tvCanvas=ie,t.tvTex=new Ei(ie),t.tvTex.colorSpace=Re,md(e,1.75,1,.08,`#111`,18.5,2.25,9.04);let ae=new W(new Qa(1.6,.9),new Wr({map:t.tvTex}));ae.position.set(18.5,2.25,9.09),e.add(ae),_d(e,`RADIOLOGY`,5,2.6,9.02,0,1.6,.35),_d(e,`STAFF ONLY`,13.5,2.6,9.02,0,1.6,.35,{bg:`#555`,fg:`#fff`,font:`bold 60px "Archivo Narrow", Arial`}),_d(e,`CT`,25,2.6,9.02,0,1,.35),_d(e,`MRI`,35.5,2.6,9.02,0,1,.35),_d(e,`RESUS`,11,2.6,12.96,Math.PI,2,.4,{bg:`#b01818`,fg:`#fff`,font:`bold 70px "Archivo Narrow", Arial`}),_d(e,`WAITING ROOM`,30,2.6,12.96,Math.PI,2.2,.4),_d(e,`EMERGENCY`,10.5,2.6,26.04,0,3.6,.6,{bg:`#b01818`,fg:`#fff`,font:`bold 90px "Archivo Narrow", Arial`}),_d(e,`EMERGENCY`,32,2.6,26.04,0,3.6,.6,{bg:`#b01818`,fg:`#fff`,font:`bold 90px "Archivo Narrow", Arial`}),t.queueSpots=[{x:5,z:9.8}];for(let e=0;e<14;e++)t.queueSpots.push({x:6.5+e*.85,z:9.6+e%2*.35});t.corridorBedSpots=[];for(let e=0;e<10;e++)t.corridorBedSpots.push({x:21+e*2.1,z:12.3});t.bays=[3,8,13,18].map(e=>({x:e,z:22.8}));for(let n of[5.5,10.5,15.5]){let r=new W(new Qa(4.6,2.2),new ho({color:`#7fb7c9`,side:2}));r.position.set(n,1.25,22.6),r.rotation.y=Math.PI/2,e.add(r);let i=[];for(let e=20;e<=24;e++)i.push(e*96+Math.floor(n));t.burnables.push({mesh:r,cells:i,kind:`curtain`,fuel:1.2,char:0})}for(let n of t.bays){let t=new W(new Qa(.5,.35),new Wr({color:`#0b2a1a`}));t.position.set(n.x+1.2,1.8,24.97),t.rotation.y=Math.PI,e.add(t)}t.ecgScreens=[],hd(e,7,15.4,13,16.5,1.05,`#c9d4dc`),md(e,.5,.35,.05,`#111`,9,1.3,15.9),md(e,.5,.35,.05,`#111`,11,1.3,15.9),_d(e,`NURSES STATION`,10,1.6,15.37,Math.PI,1.8,.3,{bg:`#fff`,fg:`#0b3d6b`,font:`bold 50px "Archivo Narrow", Arial`}),hd(e,1.1,17.4,1.9,18.4,1,`#c62828`);let oe=gd(`BED  PT        STATUS
1  ?appendix   waiting CT
2  chest pain  trop pending
3  ??????      radiology??
4  fall        CT brain??`,512,300,{bg:`#f7f7f7`,fg:`#1a3f9c`,font:`30px "Caveat", cursive`}),se=new W(new Qa(2.4,1.4),new Wr({map:new Ei(oe)}));se.position.set(1.03,1.6,15.8),se.rotation.y=Math.PI/2,e.add(se),t.seats=[];for(let n of[17.2,19.6,22])for(let[r,i]of[[25,31.5],[33,39.5]]){let a=hd(e,r,n-.3,i,n+.3,.46,`#3f6f8f`,`flammable`);md(e,i-r,.5,.08,`#35607c`,(r+i)/2,.7,n+.28);let o=[];for(let e=r;e<i;e++)o.push(Math.floor(n)*96+e);t.burnables.push({mesh:a,cells:o,kind:`bench`,fuel:1.4,char:0});for(let e=r+.4;e<i-.2;e+=.9)t.seats.push({x:e,z:n-.05})}hd(e,22.2,14.2,24.8,15.2,1.1,`#9aa7b1`),_d(e,`TRIAGE`,23.5,2.2,15.22,0,1.2,.3),hd(e,41.4,14.2,42.95,15.1,1.9,`#2b4a8b`);let ce=new W(new Qa(1.2,1.2),new Wr({color:`#8fd3ff`}));ce.position.set(42.1,1.2,15.11),e.add(ce),t.interactables.push({id:`vending`,x:42.1,z:15.9,r:1.2,label:`Shake the vending machine`});let le=document.createElement(`canvas`);le.width=512,le.height=256,t.waitCanvas=le,t.waitTex=new Ei(le),t.waitTex.colorSpace=Re,md(e,2.2,1.2,.08,`#111`,32,2.2,14.04);let P=new W(new Qa(2.05,1.05),new Wr({map:t.waitTex}));P.position.set(32,2.2,14.09),e.add(P),hd(e,2.5,26.1,7.5,28.1,2.5,`#f4f4f4`),md(e,5.02,.35,2.02,`#e8c547`,5,1.2,27.1);let ue=md(e,1.2,.15,1.2,`#f00`,3.2,2.6,27.1);ue.material=new Wr({color:`#ff2a2a`}),t.ambulanceBar=ue,hd(e,16,27.9,18.4,28.5,.45,`#6b4f36`,`flammable`),_d(e,`NO SMOKING
within 5 m`,17.2,1.4,28.93,Math.PI,1,.5,{bg:`#fff`,fg:`#c00`,font:`bold 50px Arial`}),md(e,.08,2.2,.08,`#666`,37,1.1,28.6),_d(e,`ASSEMBLY
AREA`,37,2.3,28.55,Math.PI,1,.6,{bg:`#1b8a3c`,fg:`#fff`,font:`bold 60px Arial`}),md(e,.15,4.5,.15,`#444`,20,2.25,28.7);let de=(n,r,i,a,o,s,c,l=`bench`)=>{let u=hd(e,n,r,i,a,o,s,`flammable`),d=[];for(let e=Math.floor(r);e<Math.ceil(a);e++)for(let t=Math.floor(n);t<Math.ceil(i);t++)d.push(e*96+t);return t.burnables.push({mesh:u,cells:d,kind:l,fuel:c,char:0}),u},fe=(t,n,r,i,a,o,s=0)=>{let c=new W(new Qa(t,n),new ho({color:r}));return c.position.set(i,a,o),c.rotation.y=s,e.add(c),c},pe=md(e,2,2.2,.12,`#8a6a4a`,5,1.1,8.5,{mat:{unique:!0}});md(e,.4,.3,.02,`#f4f4f4`,5.5,1.5,8.43).visible=!1,pe.visible=!1;let me=null;t.doorLocked=!1,t.setDoorLocked=e=>{t.doorLocked=e,pe.visible=e,e&&!me&&(me=nd(4,8.4,6,8.6,2.2,`door`)),!e&&me&&(rd(me),me=null)},t.interactables.push({id:`door`,x:5,z:8.5,r:1.5,label:`Lock the reading-room door`});for(let t of[54.45,55.95])hd(e,t-.04,22.7,t+.04,24.95,2,`#9aa9b5`);hd(e,55.8,21.05,57.9,21.7,.9,`#e8eef2`),fe(1.8,.8,`#b8d6e6`,56.85,1.7,21.03,0),_d(e,`TOILETS`,55.5,2.6,19.98,Math.PI,1.2,.3),_d(e,`OUT OF
ORDER`,55.2,1.3,22.68,Math.PI,.5,.3,{bg:`#fff`,fg:`#c00`,font:`bold 44px "Caveat", cursive`}),t.interactables.push({id:`mirror`,x:56.8,z:22.4,r:1,label:`Look in the mirror`}),de(62.3,21.05,62.95,24.95,2.2,`#7d7361`,1.5),de(59.05,23.4,61.3,24,2.2,`#7d7361`,1.5),_d(e,`SUPPLY`,60.5,2.6,19.98,Math.PI,1.2,.3,{bg:`#555`,fg:`#fff`,font:`bold 60px "Archivo Narrow", Arial`}),t.gelSpots=[{x:60,z:22},{x:61.5,z:22.6},{x:59.6,z:22.9}],hd(e,59,1.2,61.8,3.2,.5,`#5b6e8c`),md(e,.8,.12,.5,`#fff`,61.2,.56,2.2),hd(e,55.1,1.1,56.3,2.4,2,`#6b4f36`,`flammable`),hd(e,61.9,4.2,62.9,5,.6,`#6b4f36`);let he=new Qo(16762250,2.5,6,1.5);he.position.set(62.2,1.2,4.6),e.add(he),_d(e,`ON-CALL ROOM`,58.5,2.6,9.02,0,1.8,.3),_d(e,`DO NOT
DISTURB
(please)`,58.5,1.5,8.02,Math.PI,.6,.5,{bg:`#fff9c4`,fg:`#333`,font:`bold 36px "Caveat", cursive`}),t.interactables.push({id:`bed`,x:58.3,z:2.3,r:1.1,label:`Sleep in the on-call bed (90 min)`});for(let e of[15.6,17.1,18.6,20.1])de(44.5,e,47.05,e+.55,.5,`#6b4a2e`,1.2),de(48.95,e,51.5,e+.55,.5,`#6b4a2e`,1.2);de(46.2,23.2,49.8,24,1,`#e9e0c8`,1.4,`altar`),hd(e,44.4,23.3,45.2,24,1.1,`#3b2d24`),t.candles=[];for(let n=0;n<5;n++){let r=md(e,.05,.18,.05,`#f5f0e0`,44.55+n*.13,1.19,23.65),i=new W(new to(.03,6,4),new Wr({color:`#ffb347`}));i.position.set(44.55+n*.13,1.31,23.65),i.visible=!1,e.add(i),t.candles.push(i),r.visible=!0}let ge=new W(new Qa(1.4,2),new Wr({color:`#6a5acd`}));ge.position.set(48,1.8,24.97),ge.rotation.y=Math.PI,e.add(ge),_d(e,`CHAPEL`,47.5,2.6,12.96,Math.PI,1.4,.35,{bg:`#4b3a63`,fg:`#fff`,font:`bold 60px "Archivo Narrow", Arial`}),t.interactables.push({id:`candles`,x:45.1,z:22.5,r:1,label:`Light a candle`}),hd(e,53.1,18.3,58.8,19,1,`#8a5a3a`),hd(e,61.4,18.9,62.9,19.95,1.6,`#333`);for(let[t,n]of[[55,15.4],[58,15.4],[61,15.4],[60.5,17.2]])hd(e,t-.45,n-.45,t+.45,n+.45,.75,`#d9d2c3`,`flammable`);t.cafeChairs=[[55,16.5],[58,16.5],[61,16.5],[59.5,17.2],[54,15.4]],_d(e,`CAFE`,57.5,2.6,12.96,Math.PI,1.2,.35,{bg:`#7a4b2a`,fg:`#fff`,font:`bold 60px "Archivo Narrow", Arial`}),_d(e,`CLOSED
(opens 7:30)`,56,1.4,18.28,Math.PI,1,.45,{bg:`#fff`,fg:`#7a4b2a`,font:`bold 44px Arial`}),t.interactables.push({id:`espresso`,x:62.1,z:18.1,r:1.1,label:`Bash the cafe coffee machine`}),hd(e,53,11.95,54,12.95,1,`#4f7a8c`,`flammable`),md(e,1.02,.1,1.02,`#dcdcdc`,53.5,1.02,12.45);let _e=(t,n,r)=>{fe(1.4,2.2,`#9aa3ad`,t,1.1,n,r);let i=_d(e,`LIFT`,t,2.5,n,r,.8,.25,{bg:`#1d2733`,fg:`#ffcf5a`,font:`bold 70px Arial`});i.position.x+=Math.sin(r)*.01,i.position.z+=Math.cos(r)*.01};_e(62.97,10.5,-Math.PI/2),t.lifts={main:{x:61.8,z:10.5,yaw:Math.PI/2},roof:{x:69,z:7.5,yaw:-Math.PI/2},basement:{x:67.6,z:22.5,yaw:-Math.PI/2}},t.interactables.push({id:`lift`,x:62.2,z:10.5,r:1.3,label:`Call the lift`}),hd(e,66.1,6,67.9,9,2.6,`#8d9299`),_e(67.92,7.5,Math.PI/2),t.interactables.push({id:`lift`,x:68.5,z:7.5,r:1.3,label:`Call the lift`}),r.strokeStyle=`#f4f4f4`,r.lineWidth=6,r.beginPath(),r.arc(2592,224,4.2*dd,0,Math.PI*2),r.stroke(),r.fillStyle=`#f4f4f4`,r.font=`bold 128px Arial`,r.textAlign=`center`,r.textBaseline=`middle`,r.fillText(`H`,2592,7.2*dd),r.textAlign=`left`,r.textBaseline=`alphabetic`,i.needsUpdate=!0;let ve=new un,ye=new W(new Ai(3.4,1.5,1.6),pd(`#c62828`));ye.position.set(0,1.05,0),ve.add(ye);let be=new W(new to(.8,16,10),new ho({color:`#9fd3ff`,transparent:!0,opacity:.7}));be.position.set(-1.6,1.05,0),be.scale.set(1,.9,1),ve.add(be);let xe=new W(new Ai(3.2,.35,.3),pd(`#c62828`));xe.position.set(3.2,1.3,0),ve.add(xe);for(let e of[-1,1]){let t=new W(new Ai(3.6,.08,.1),pd(`#333`));t.position.set(0,.15,e*.8),ve.add(t)}let Se=new un;for(let e=0;e<2;e++){let t=new W(new Ai(8,.05,.25),pd(`#222`));t.rotation.y=e*Math.PI/2,Se.add(t)}Se.position.set(0,2,0),ve.add(Se),ve.position.set(81,0,7),e.add(ve),t.rotor=Se,nd(79.2,6.1,82.8,7.9,1.8),nd(82.8,6.8,84.8,7.2,1.5);for(let[t,n]of[[72,2.5],[74.5,2.5],[90,11],[90,3]])hd(e,t-.9,n-.7,t+.9,n+.7,1.4,`#a4aab0`);let Ce=new Qo(16724016,4,10,1.5);Ce.position.set(94,2,1),e.add(Ce),t.beacon=Ce;let we=new Qo(11454207,25,40,1.2);we.position.set(80,12,7),e.add(we),_d(e,`NO THROWING THINGS
OFF THE ROOF`,67.93,1.8,6.4,Math.PI/2,1.2,.5,{bg:`#fff`,fg:`#c00`,font:`bold 38px Arial`}),t.interactables.push({id:`heli`,x:80.5,z:8.9,r:1.3,label:`Press buttons in the helicopter`}),_e(66.03,22.5,Math.PI/2),t.interactables.push({id:`lift`,x:66.9,z:22.5,r:1.3,label:`Call the lift`});let Te=document.createElement(`canvas`);Te.width=512,Te.height=200;let Ee=Te.getContext(`2d`);Ee.fillStyle=`#b9c2c7`,Ee.fillRect(0,0,512,200);for(let e=0;e<8;e++)for(let t=0;t<3;t++)Ee.strokeStyle=`#6d777d`,Ee.lineWidth=3,Ee.strokeRect(e*64+4,t*66+4,56,58),Ee.fillStyle=`#8f999e`,Ee.fillRect(e*64+22,t*66+28,20,6);hd(e,66.05,17.05,77.9,17.7,2.2,`#b9c2c7`);let De=new W(new Qa(11.8,2.2),new ho({map:new Ei(Te)}));De.position.set(72,1.1,17.71),e.add(De),hd(e,73,18.3,75.2,19,.9,`#c7cfd4`);for(let e=80;e<94;e+=1.8)de(e,17.05,e+1.6,17.7,2.3,`#5c4a30`,2.5,`shelf`);hd(e,68,25.4,71,27.6,2.5,`#6e4b3a`);let Oe=new W(new Mi(.2,16),new Wr({color:`#f4f4f4`}));Oe.position.set(69.5,1.6,25.38),Oe.rotation.y=Math.PI,e.add(Oe),t.gauge=Oe,hd(e,84,26,86.5,27.4,1.6,`#6a6f5b`),fe(1.6,.9,`#e8f0e0`,86.5,1.6,25.03);let ke=new Qo(16719904,3,5,1.5);ke.position.set(93.5,2.4,27.5),e.add(ke);for(let[t,n]of[[72,22],[86,22]]){let r=new Qo(13625520,3,10,1.6);r.position.set(t,2.7,n),e.add(r)}_d(e,`MORGUE`,71.5,2.6,21.02,0,1.4,.3,{bg:`#2d3a40`,fg:`#fff`,font:`bold 60px "Archivo Narrow", Arial`}),_d(e,`FILM ARCHIVE`,86.5,2.6,21.02,0,2,.3,{bg:`#2d3a40`,fg:`#fff`,font:`bold 60px "Archivo Narrow", Arial`}),_d(e,`BOILER ROOM`,72.5,2.6,23.98,Math.PI,1.8,.3,{bg:`#2d3a40`,fg:`#ff9`,font:`bold 60px "Archivo Narrow", Arial`}),_d(e,`RADIOLOGY 1972-1999`,88.5,2.6,23.98,Math.PI,2.6,.3,{bg:`#5a4a2a`,fg:`#fff`,font:`bold 54px "Archivo Narrow", Arial`}),_d(e,`OLD FILMS
1974-1998
(highly flammable?)`,86,2.55,17.72,0,1.4,.55,{bg:`#fff9c4`,fg:`#333`,font:`bold 34px "Caveat", cursive`}),t.interactables.push({id:`boiler`,x:69.5,z:25.2,r:1.1,label:`Crank up the boiler`},{id:`oldbox`,x:86.5,z:25.6,r:1.2,label:`Switch on the old lightbox`});let Ae=t.seats[t.seats.length-1];t.hideSpots=[{id:`desk`,label:`under the reading-room desk`,ix:1.7,iz:2.4,x:1.6,z:1.45,camY:.5,exit:{x:1.8,z:2.6},overlay:`under`,chance:.35,note:`You curl up under the desk among 40 years of dust.`},{id:`fridge`,label:`in the staff fridge`,ix:16,iz:2.3,x:17.05,z:1.5,camY:1.2,exit:{x:16.8,z:2.8},overlay:`fridge`,chance:.08,maxTime:25,note:`It is 4°C in here. The milk expired in March.`},{id:`ct`,label:`inside the CT gantry`,ix:26.4,iz:4.7,x:25,z:3.5,camY:1,exit:{x:26.5,z:5.5},overlay:`gantry`,chance:.25,note:`You lie on the CT table inside the gantry. Nobody would look here.`},{id:`mri`,label:`inside the MRI bore`,ix:40.6,iz:4.7,x:39.9,z:3.5,camY:1.15,exit:{x:41,z:5.3},overlay:`gantry`,chance:.15,note:`The magnet hums. Your bank cards are now blank.`},{id:`blend`,label:`pretending to be a patient`,ix:Ae.x,iz:Ae.z+1.1,x:Ae.x,z:Ae.z,camY:1.15,exit:{x:Ae.x,z:Ae.z+1.1},overlay:`blend`,chance:.3,note:`You slump in a waiting-room chair and moan convincingly.`},{id:`stall`,label:`in a toilet stall`,ix:53.7,iz:22.3,x:53.7,z:24.2,camY:1.2,exit:{x:54.2,z:21.8},overlay:`stall`,chance:.05,note:`You lock the stall. Surely they wouldn't...`},{id:`supply`,label:`behind the supply shelves`,ix:60.2,iz:22.8,x:59.6,z:24.5,camY:1,exit:{x:60.3,z:22.2},overlay:`shelves`,chance:.15,note:`You squeeze behind a pallet of size-S gloves.`},{id:`underbed`,label:`under the on-call bed`,ix:60.2,iz:3.9,x:60.4,z:2.2,camY:.3,exit:{x:59.5,z:4.2},overlay:`under`,chance:.3,note:`Under the bed: a sock, a 2011 BNF and a pager that still beeps.`},{id:`wardrobe`,label:`in the wardrobe`,ix:56.1,iz:3.1,x:55.7,z:1.75,camY:1.55,exit:{x:56.2,z:3.4},overlay:`slats`,chance:.2,note:`You hide among abandoned scrubs. Narnia is not back here.`},{id:`altar`,label:`behind the altar`,ix:48,iz:22.4,x:48,z:24.5,camY:.9,exit:{x:48,z:22.2},overlay:`dark`,chance:.12,note:`You crouch behind the altar and consider your choices.`},{id:`counter`,label:`behind the cafe counter`,ix:56,iz:17.6,x:56,z:19.5,camY:.8,exit:{x:56,z:17.4},overlay:`dark`,chance:.25,note:`You hide behind the counter next to a sad tray of muffins.`},{id:`hamper`,label:`in the laundry hamper`,ix:53.5,iz:11.3,x:53.5,z:12.45,camY:.75,exit:{x:53.5,z:11.2},overlay:`laundry`,chance:.2,note:`You burrow into the laundry. Some of it is damp. Don't think about it.`},{id:`heli`,label:`in the helicopter`,ix:78.3,iz:7,x:80,z:7,camY:1.3,exit:{x:77.6,z:7},overlay:`heli`,chance:.1,note:`You sit in the pilot's seat. You do not know how to fly.`},{id:`drawer`,label:`in a morgue drawer`,ix:70.5,iz:18.7,x:70.5,z:17.35,camY:.9,exit:{x:70.5,z:19.2},overlay:`drawer`,chance:.02,note:`The drawer next to yours is labelled "RESERVED: NIGHT RADIOLOGIST".`},{id:`films`,label:`between the film shelves`,ix:93,iz:18.9,x:93.8,z:17.9,camY:1.2,exit:{x:92.5,z:19.2},overlay:`shelves`,chance:.3,note:`You hide among 30,000 unreported films. Some are yours.`},{id:`boiler`,label:`behind the boiler`,ix:72.2,iz:27,x:67,z:28.3,camY:1,exit:{x:72.4,z:27},overlay:`dark`,chance:.15,note:`It's warm and clanky back here.`},{id:`darkroom`,label:`in the old darkroom`,ix:92.3,iz:27.2,x:93.6,z:27.6,camY:1.4,exit:{x:91.6,z:26.6},overlay:`red`,chance:.1,note:`The red safelight still works. It smells of fixer and regret.`}];for(let e of t.hideSpots)t.interactables.push({id:`hide:`+e.id,x:e.ix,z:e.iz,r:1,label:`Hide `+e.label,hide:e});let je=new Float32Array(4224);for(let e=0;e<44;e++)for(let t=0;t<96;t++){let n=Xu(t,e);je[e*96+t]=n?n.fuel:0}for(let e of t.burnables)for(let t of e.cells)je[t]+=e.fuel;for(let e=1;e<=2;e++)for(let t=1;t<=5;t++)je[e*96+t]+=.8;return t.baseFuel=je,t}var yd=.2,bd=class{constructor(e){this.fuel=Float32Array.from(e),this.heat=new Float32Array(4224),this.int=new Float32Array(4224),this.wet=new Float32Array(4224),this.burnt=new Uint8Array(4224),this.acc=0,this.burning=[],this.total=0,this.onIgnite=null,this.onBurnout=null}idx(e,t){return t*96+e}at(e,t){let n=Math.floor(e),r=Math.floor(t);return n<0||r<0||n>=96||r>=44?0:this.int[r*96+n]}ignite(e,t,n=.35){let r=Math.floor(e),i=Math.floor(t);if(Ju(r,i))return!1;let a=i*96+r;return this.wet[a]>0?!1:(this.fuel[a]<.05&&(this.fuel[a]=.3),this.int[a]<=0&&this.onIgnite&&this.onIgnite(r,i),this.int[a]=Math.max(this.int[a],n),!0)}addFuel(e,t,n){let r=Math.floor(e),i=Math.floor(t);Ju(r,i)||(this.fuel[i*96+r]+=n)}suppressCone(e,t,n,r,i,a,o){let s=Math.max(0,Math.floor(e-i)),c=Math.min(95,Math.floor(e+i)),l=Math.max(0,Math.floor(t-i)),u=Math.min(43,Math.floor(t+i)),d=0;for(let f=l;f<=u;f++)for(let l=s;l<=c;l++){let s=l+.5-e,c=f+.5-t,u=Math.hypot(s,c);if(u>i||u>.7&&(s*n+c*r)/u<.75)continue;let p=f*96+l;this.int[p]>0&&d++,this.int[p]=Math.max(0,this.int[p]-a*o),this.heat[p]=0,this.wet[p]=Math.max(this.wet[p],4)}return d}soakZone(e,t){for(let n=e.y0;n<=e.y1;n++)for(let r=e.x0;r<=e.x1;r++){let e=n*96+r;this.int[e]=Math.max(0,this.int[e]-.22*t),this.heat[e]*=.7,this.wet[e]=8}}update(e){for(this.acc+=e;this.acc>=yd;)this.acc-=yd,this.tick(yd)}tick(e){let{fuel:t,heat:n,int:r,wet:i,burnt:a}=this,o=[],s=0;for(let t=0;t<4224;t++)i[t]>0&&(i[t]-=e),n[t]*=.94,r[t]>0&&o.push(t);for(let i of o){let o=i%96,c=i/96|0,l=r[i];if(t[i]>0?(l=Math.min(1,l+.3*e,.25+t[i]),t[i]=Math.max(0,t[i]-.06*l*e)):l-=.35*e,l<=.02){r[i]=0,a[i]=1,this.onBurnout&&this.onBurnout(o,c);continue}r[i]=l,s+=l;for(let e=-1;e<=1;e++)for(let t=-1;t<=1;t++){if(!t&&!e)continue;let r=o+t,i=c+e;Ju(r,i)||(n[i*96+r]+=l*(t&&e?.08:.13))}if(Math.random()<.012*l){let e=o+Math.round((Math.random()-.5)*5),t=c+Math.round((Math.random()-.5)*5);!Ju(e,t)&&Xu(e,t)===Xu(o,c)&&(n[t*96+e]+=1.2)}}for(let e=0;e<4224;e++)r[e]>0||n[e]<1||t[e]<.06||i[e]>0||(r[e]=.15,this.onIgnite&&this.onIgnite(e%96,e/96|0));this.burning=o.filter(e=>r[e]>0),this.total=s}},xd=class{constructor(e,{max:t=4e3,additive:n=!1}={}){this.max=t,this.n=0,this.d=new Float32Array(t*16),this.pos=new Float32Array(t*3),this.col=new Float32Array(t*4),this.size=new Float32Array(t);let r=new pr;r.setAttribute(`position`,new Qn(this.pos,3).setUsage(We)),r.setAttribute(`color`,new Qn(this.col,4).setUsage(We)),r.setAttribute(`size`,new Qn(this.size,1).setUsage(We)),this.uniforms={uScale:{value:400}};let i=new fo({uniforms:this.uniforms,vertexShader:`
        attribute float size; attribute vec4 color; varying vec4 vC; uniform float uScale;
        void main(){ vC = color; vec4 mv = modelViewMatrix * vec4(position,1.0);
          gl_PointSize = size * uScale / max(0.1, -mv.z); gl_Position = projectionMatrix * mv; }`,fragmentShader:`
        varying vec4 vC;
        void main(){ float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.05, d);
          if (a * vC.a < 0.01) discard; gl_FragColor = vec4(vC.rgb, a * vC.a); }`,transparent:!0,depthWrite:!1,blending:n?2:1});this.points=new Ci(r,i),this.points.frustumCulled=!1,this.points.renderOrder=n?3:2,e.add(this.points)}emit(e,t,n,r,i,a,o,s,c,l,u,d,f,p=0,m=0){if(this.n>=this.max)return;let h=this.n++*16,g=this.d;g[h]=e,g[h+1]=t,g[h+2]=n,g[h+3]=r,g[h+4]=i,g[h+5]=a,g[h+6]=0,g[h+7]=o,g[h+8]=s,g[h+9]=c,g[h+10]=l,g[h+11]=u,g[h+12]=d,g[h+13]=f,g[h+14]=p,g[h+15]=m}update(e,t=2.95){let n=this.d,r=0;for(;r<this.n;){let i=r*16;if(n[i+6]+=e,n[i+6]>=n[i+7]){let e=(this.n-1)*16;for(let t=0;t<16;t++)n[i+t]=n[e+t];this.n--;continue}let a=1-n[i+15]*e;n[i+3]*=a,n[i+4]=(n[i+4]-n[i+14]*e)*a,n[i+5]*=a,n[i]+=n[i+3]*e,n[i+1]+=n[i+4]*e,n[i+2]+=n[i+5]*e,n[i+1]>t&&(n[i+1]=t,n[i+4]=0),n[i+1]<.02&&(n[i+1]=.02,n[i+4]*=-.2);let o=n[i+6]/n[i+7];this.pos[r*3]=n[i],this.pos[r*3+1]=n[i+1],this.pos[r*3+2]=n[i+2],this.col[r*4]=n[i+10],this.col[r*4+1]=n[i+11],this.col[r*4+2]=n[i+12],this.col[r*4+3]=n[i+13]*(o<.15?o/.15:1-(o-.15)/.85),this.size[r]=n[i+8]+(n[i+9]-n[i+8])*o,r++}let i=this.points.geometry;i.setDrawRange(0,this.n),i.attributes.position.needsUpdate=!0,i.attributes.color.needsUpdate=!0,i.attributes.size.needsUpdate=!0}},Sd=null,Cd=null,wd=null;function Td(){if(Sd){Sd.state===`suspended`&&Sd.resume();return}try{Sd=new(window.AudioContext||window.webkitAudioContext)}catch{return}Cd=Sd.createGain(),Cd.gain.value=.5,Cd.connect(Sd.destination),wd=Sd.createBuffer(1,Sd.sampleRate*2,Sd.sampleRate);let e=wd.getChannelData(0);for(let t=0;t<e.length;t++)e[t]=Math.random()*2-1}function Ed(e,t,{type:n=`sine`,vol:r=.2,delay:i=0,slide:a=0}={}){if(!Sd)return;let o=Sd.currentTime+i,s=Sd.createOscillator(),c=Sd.createGain();s.type=n,s.frequency.setValueAtTime(e,o),a&&s.frequency.exponentialRampToValueAtTime(Math.max(20,e+a),o+t),c.gain.setValueAtTime(0,o),c.gain.linearRampToValueAtTime(r,o+.01),c.gain.exponentialRampToValueAtTime(1e-4,o+t),s.connect(c).connect(Cd),s.start(o),s.stop(o+t+.05)}function Dd(e,{vol:t=.2,freq:n=1e3,q:r=1,delay:i=0,type:a=`bandpass`,slide:o=0}={}){if(!Sd)return;let s=Sd.currentTime+i,c=Sd.createBufferSource();c.buffer=wd;let l=Sd.createBiquadFilter();l.type=a,l.frequency.setValueAtTime(n,s),o&&l.frequency.exponentialRampToValueAtTime(Math.max(40,n+o),s+e),l.Q.value=r;let u=Sd.createGain();u.gain.setValueAtTime(t,s),u.gain.exponentialRampToValueAtTime(1e-4,s+e),c.connect(l).connect(u).connect(Cd),c.start(s,Math.random()),c.stop(s+e+.05)}var K={pager(){for(let e=0;e<3;e++)Ed(2900,.09,{type:`square`,vol:.08,delay:e*.14})},ring(){for(let e=0;e<2;e++)Ed(440,.35,{type:`triangle`,vol:.07,delay:e*.45}),Ed(480,.35,{type:`triangle`,vol:.07,delay:e*.45})},thud(e=1){Ed(90,.18,{type:`sine`,vol:.25*Math.min(1,e),slide:-50}),Dd(.08,{vol:.12*Math.min(1,e),freq:400})},clang(){Ed(620,.6,{type:`triangle`,vol:.12}),Ed(1240,.4,{type:`sine`,vol:.06}),Ed(933,.5,{type:`sine`,vol:.05})},whoosh(){Dd(.25,{vol:.12,freq:600,slide:1600,q:.7})},ding(){Ed(1320,.8,{type:`sine`,vol:.12})},click(){Ed(1800,.03,{type:`square`,vol:.05})},sign(){Ed(660,.1,{vol:.1}),Ed(990,.15,{vol:.1,delay:.1})},wrong(){Ed(220,.25,{type:`sawtooth`,vol:.06}),Ed(180,.3,{type:`sawtooth`,vol:.06,delay:.15})},ow(){Ed(420+Math.random()*200,.25,{type:`sawtooth`,vol:.07,slide:-250})},scream(){let e=500+Math.random()*400;Ed(e,.7,{type:`sawtooth`,vol:.05,slide:300}),Ed(e*1.5,.7,{type:`square`,vol:.02,slide:400})},flick(){Dd(.05,{vol:.2,freq:3e3}),Ed(2400,.04,{type:`square`,vol:.03})},spray(){Dd(.18,{vol:.1,freq:2500,q:.4,type:`highpass`})},sparks(){for(let e=0;e<6;e++)Dd(.04,{vol:.15,freq:4e3,delay:e*.07+Math.random()*.05})},whoomph(){Dd(.8,{vol:.35,freq:200,slide:600,q:.5,type:`lowpass`})},hiss(){Dd(4,{vol:.35,freq:3e3,q:.3,type:`highpass`})},munch(){for(let e=0;e<3;e++)Dd(.07,{vol:.15,freq:900,delay:e*.18})},meow(){Ed(700,.35,{type:`triangle`,vol:.08,slide:400})},honk(){Ed(440,.5,{type:`sawtooth`,vol:.18}),Ed(554,.5,{type:`square`,vol:.12}),Ed(220,.5,{type:`sawtooth`,vol:.1})}},Od=null;function kd(e){if(e&&!Od){let e=()=>{Ed(960,.45,{type:`square`,vol:.05}),Ed(720,.45,{type:`square`,vol:.05,delay:.5})};e(),Od=setInterval(e,1e3)}else!e&&Od&&(clearInterval(Od),Od=null)}var Ad=0;function jd(e,t){!Sd||e<=0||(Ad-=t,Ad<=0&&(Ad=.03+Math.random()*.12/Math.min(4,e),Dd(.03+Math.random()*.04,{vol:Math.min(.25,.04*e),freq:800+Math.random()*2500,q:2}),Math.random()<.05&&Dd(.5,{vol:Math.min(.2,.03*e),freq:150,type:`lowpass`})))}var Md=0;function Nd(e,t){Sd&&e&&(Md-=t,Md<=0&&(Md=.25,Dd(.3,{vol:.05,freq:5e3,type:`highpass`,q:.3})))}function q(e,t,n,r=0,i=0,a=0,o=0,s=0,c=0,l){let u=new W(t,l||pd(n));return u.position.set(r,i,a),u.rotation.set(o,s,c),e.add(u),u}var Pd=(e,t,n)=>new Ai(e,t,n),Fd=(e,t,n=12)=>new Ni(e,e,t,n),Id={chair:{name:`Office chair`,r:.32,h:1,mass:8,metal:.5,fuel:.9,build(e){q(e,Pd(.5,.08,.5),`#25282c`,0,-.02),q(e,Pd(.5,.5,.07),`#25282c`,0,.25,.22),q(e,Fd(.03,.4),`#888`,0,-.25),q(e,Pd(.55,.04,.08),`#555`,0,-.47),q(e,Pd(.08,.04,.55),`#555`,0,-.47)}},bin:{name:`Clinical waste bin`,r:.22,h:.55,mass:3,fuel:1.2,build(e){q(e,Fd(.22,.55,14),`#d4b21f`),q(e,Fd(.23,.04,14),`#b89a18`,0,.28)}},paper:{name:`Stack of request forms`,r:.2,h:.06,mass:.3,fuel:.9,build(e){q(e,Pd(.3,.06,.22),`#f6f6f0`),q(e,Pd(.28,.005,.2),`#ffd6e0`,0,.032,0,0,.2)}},extinguisher:{name:`Fire extinguisher`,r:.13,h:.62,mass:6,metal:1,use:`spray`,build(e){q(e,Fd(.1,.5),`#c41e1e`,0,-.05),q(e,Fd(.03,.1),`#222`,0,.25),q(e,Pd(.16,.03,.04),`#222`,.05,.3),q(e,Fd(.015,.25),`#111`,-.09,.15,0,0,0,.4)}},o2:{name:`Oxygen cylinder`,r:.11,h:.95,mass:7,metal:1,explosive:!0,build(e){q(e,Fd(.09,.8),`#1f6b3a`,0,-.05),q(e,Fd(.09,.1),`#f2f2f2`,0,.39),q(e,Fd(.03,.08),`#999`,0,.46)}},ivpole:{name:`IV pole`,r:.22,h:1.9,mass:4,metal:1,build(e){q(e,Fd(.02,1.8),`#bbb`,0,0),q(e,Pd(.4,.02,.04),`#bbb`,0,.85),q(e,Pd(.12,.2,.05),`#e8f4ff`,.15,.7,0,0,0,0,new ho({color:`#e8f4ff`,transparent:!0,opacity:.8})),q(e,Pd(.45,.03,.06),`#999`,0,-.93),q(e,Pd(.06,.03,.45),`#999`,0,-.93)}},foil:{name:`Foil tray of leftover curry`,r:.13,h:.07,mass:.4,metal:1,build(e){q(e,Pd(.25,.06,.18),`#c9ccd1`,0,0,0,0,0,0,new ho({color:`#d4d8de`,emissive:`#222`})),q(e,Pd(.22,.01,.15),`#b8742a`,0,.03)}},golfclub:{name:`Golf club (7-iron)`,r:.08,h:1,mass:1,metal:.4,use:`golf`,build(e){q(e,Fd(.015,.95),`#c9ced4`,0,.02),q(e,Pd(.03,.09,.14),`#e8edf2`,.02,-.46,.03,0,0,.3),q(e,Fd(.022,.18),`#20242a`,0,.42)}},golfball:{name:`Golf ball`,r:.045,h:.09,mass:.05,light:!0,build(e){q(e,new to(.045,10,8),`#fbfbf5`)}},bat:{name:`Cricket bat`,r:.1,h:.95,mass:1.4,use:`bat`,build(e){q(e,Pd(.11,.55,.035),`#caa36a`,0,-.18),q(e,Fd(.022,.4),`#3a2a1a`,0,.28)}},cone:{name:`Traffic cone`,r:.18,h:.5,mass:1.2,build(e){q(e,new Pi(.16,.45,16),`#e8621f`,0,.02),q(e,Pd(.4,.03,.4),`#e8621f`,0,-.23),q(e,new Ni(.11,.14,.12,16),`#f4f4f4`,0,.02)}},airhorn:{name:`Air horn`,r:.08,h:.16,mass:.3,use:`honk`,build(e){q(e,Fd(.045,.11),`#d4111f`,0,-.02),q(e,new Pi(.07,.09,14),`#e8e8e8`,0,.08)}},kebab:{name:`Family-size kebab`,r:.1,h:.14,mass:.3,use:`eat`,build(e){q(e,Fd(.06,.13,10),`#e8c98f`),q(e,Fd(.065,.04,10),`#6fae4a`,0,.06)}},lighter:{name:`Lighter (confiscated)`,r:.06,h:.09,mass:.05,use:`ignite`,build(e){q(e,Pd(.03,.08,.015),`#e3342f`),q(e,Pd(.03,.015,.015),`#aaa`,0,.045)}},sandwich:{name:`Someone else's sandwich`,r:.1,h:.07,mass:.2,fuel:.4,use:`eat`,build(e){q(e,Pd(.18,.02,.12),`#e8c98f`,0,-.025),q(e,Pd(.19,.02,.13),`#6fae4a`,0,0),q(e,Pd(.18,.02,.12),`#e8c98f`,0,.025)}},gel:{name:`Hand sanitiser (70% alcohol)`,r:.08,h:.22,mass:.6,fuel:.5,build(e){q(e,Fd(.06,.18),`#dff3ff`,0,-.02,0,0,0,0,new ho({color:`#cfeeff`,transparent:!0,opacity:.8})),q(e,Fd(.02,.05),`#2a6fdb`,0,.09),q(e,Pd(.06,.015,.015),`#2a6fdb`,.03,.11)}},defib:{name:`Defibrillator paddles`,r:.16,h:.14,mass:2,metal:.6,use:`zap`,build(e){for(let t of[-.09,.09])q(e,Pd(.12,.04,.16),`#dfe3e8`,t,-.03),q(e,Fd(.025,.1),`#f28c28`,t,.04);q(e,Pd(.05,.02,.02),`#ffd400`,0,.06)}},bedpan:{name:`Bedpan (clean, probably)`,r:.18,h:.08,mass:.8,metal:1,bonk:!0,build(e){q(e,Fd(.16,.07,16),`#c9ced4`),q(e,Pd(.08,.05,.14),`#c9ced4`,0,0,.2)}},bucket:{name:`Mop bucket (full, grey water)`,r:.26,h:.5,mass:6,spill:!0,build(e){q(e,Fd(.24,.4,14),`#f2c21b`,0,-.05),q(e,Fd(.21,.02,14),`#6b7a7a`,0,.14),q(e,Pd(.3,.12,.2),`#555`,.05,.2),q(e,Fd(.015,1.1),`#ccc`,-.1,.55,0,.25,0,0)}},pager:{name:`Your pager`,r:.06,h:.05,mass:.15,metal:1,build(e){q(e,Pd(.09,.05,.04),`#1b1d20`),q(e,Pd(.06,.02,.005),`#9fb58a`,0,.005,.021)}},coffee:{name:`Cold coffee`,r:.06,h:.13,mass:.3,use:`drink`,build(e){q(e,Fd(.045,.12),`#f4efe6`),q(e,Fd(.047,.03),`#6b4a2e`,0,.045)}},box:{name:`Box of gloves (size S, again)`,r:.15,h:.12,mass:.4,fuel:.7,build(e){q(e,Pd(.25,.12,.13),`#8ab4f8`)}},wheelchair:{name:`Wheelchair`,r:.42,h:.95,mass:15,metal:1,fuel:.3,build(e){q(e,Pd(.5,.05,.45),`#333`,0,-.05),q(e,Pd(.5,.45,.05),`#333`,0,.2,.22);for(let t of[-1,1])q(e,new no(.28,.03,8,20),`#777`,t*.29,-.18,.05,0,Math.PI/2,0),q(e,Fd(.05,.03),`#222`,t*.2,-.42,-.25,0,0,Math.PI/2)}},bed:{name:`Hospital bed`,r:.75,h:1,mass:60,metal:.6,fuel:1.6,bed:!0,build(e){q(e,Pd(.92,.12,2),`#aeb6bf`,0,.02),q(e,Pd(.86,.14,1.9),`#e9f1f7`,0,.15),q(e,Pd(.6,.1,.35),`#ffffff`,0,.26,-.72),q(e,Pd(.92,.35,.05),`#aeb6bf`,0,.3,-1),q(e,Pd(.92,.25,.05),`#aeb6bf`,0,.25,1);for(let t of[-.4,.4])for(let n of[-.9,.9])q(e,Fd(.03,.4),`#888`,t,-.25,n),q(e,Fd(.06,.04),`#222`,t,-.45,n,0,0,Math.PI/2)}}},Ld=class{constructor(e){this.scene=e,this.list=[]}spawn(e,t,n,r,i={}){let a=Id[e],o=new un;a.build(o),o.traverse(e=>{e.isMesh&&(e.material=e.material.clone(),e.userData.baseColor=e.material.color.clone())}),this.scene.add(o);let s={type:e,T:a,mesh:o,pos:new V(t,n??a.h/2,r),vel:new V,yaw:i.yaw??Math.random()*Math.PI*2,tilt:0,spin:0,held:!1,pushed:!1,stuck:!1,fuel:a.fuel||0,char:0,rider:null,lastSpeed:0};return this.list.push(s),this.sync(s),s}remove(e){this.scene.remove(e.mesh);let t=this.list.indexOf(e);t>=0&&this.list.splice(t,1)}sync(e){e.mesh.position.copy(e.pos),e.mesh.rotation.set(e.tilt,e.yaw,e.tilt*.3,`YXZ`)}charTo(e,t){e.char=Math.min(1,t);let n=new U(`#1a1512`);e.mesh.traverse(t=>{t.isMesh&&t.userData.baseColor&&t.material.color.copy(t.userData.baseColor).lerp(n,e.char*.9)})}update(e,t){let n=this.list,r=t.world.magnet;for(let i of n){if(i.held||i.pushed||i.stuck){i.lastSpeed=0,i.held||this.sync(i);continue}let n=i.T;if(n.metal&&!t.quenched){let a=r.x-i.pos.x,o=r.y-i.pos.y,s=r.z-i.pos.z,c=a*a+o*o+s*s;if(c<81&&Zu(i.pos.x,i.pos.z)?.id===`mri`){i.pulled=!0;let l=Math.sqrt(c);if(l<.7){i.stuck=!0,i.vel.set(0,0,0),i.pos.set(r.x+.1,r.y+(Math.random()-.5)*.9,r.z+(Math.random()-.5)*.9),i.tilt=Math.random()*2,this.sync(i),K.clang(),t.onStuck?.(i);continue}let u=n.metal*450/Math.max(1,c)/(n.mass/5+.5);i.vel.x+=a/l*u*e,i.vel.y+=o/l*u*e+18*e*Math.min(1,u/8),i.vel.z+=s/l*u*e}else i.pulled=!1}i.vel.y-=18*e,i.pos.addScaledVector(i.vel,e);let a=n.h/2,o=ad(i.pos.x,i.pos.z,i.pos.y-a+.1)+a,s=i.pos.y<=o+.001;if(i.pos.y<o&&(i.vel.y<-3&&K.thud(-i.vel.y/10),i.pos.y=o,i.vel.y=i.vel.y<-1.5?-i.vel.y*.3:0),i.pos.y>2.98-a&&i.pos.z<25&&(i.pos.y=2.98-a,i.vel.y=Math.min(0,i.vel.y)),s){let t=i.pulled?.3:n.bed||i.type===`wheelchair`||i.type===`chair`?.9:6,r=Math.max(0,1-t*e);i.vel.x*=r,i.vel.z*=r,i.spin*=Math.max(0,1-8*e),i.tilt*=Math.max(0,1-6*e)}else i.tilt+=i.spin*e;let c={x:i.pos.x,z:i.pos.z};if(od(c,n.r,i.pos.y-a)){let e=i.vel.x*c.nx+i.vel.z*c.nz;e<0&&(e<-3&&(K.thud(-e/8),t.onImpact?.(i,-e)),i.vel.x-=1.4*e*c.nx,i.vel.z-=1.4*e*c.nz),i.pos.x=c.x,i.pos.z=c.z}i.lastSpeed=Math.hypot(i.vel.x,i.vel.z)}for(let e=0;e<n.length;e++){let t=n[e];if(!(t.held||t.stuck||t.T.r<.12))for(let r=e+1;r<n.length;r++){let e=n[r];if(e.held||e.stuck||e.T.r<.12)continue;let i=e.pos.x-t.pos.x,a=e.pos.z-t.pos.z,o=t.T.r+e.T.r,s=i*i+a*a;if(s>=o*o||s<1e-6||Math.abs(t.pos.y-e.pos.y)>(t.T.h+e.T.h)/2)continue;let c=Math.sqrt(s),l=i/c,u=a/c,d=o-c,f=t.pushed?1e3:t.T.mass,p=e.pushed?1e3:e.T.mass,m=p/(f+p),h=f/(f+p);t.pushed||(t.pos.x-=l*d*m,t.pos.z-=u*d*m),e.pushed||(e.pos.x+=l*d*h,e.pos.z+=u*d*h);let g=(e.vel.x-t.vel.x)*l+(e.vel.z-t.vel.z)*u;if(g<0){let n=-1.5*g;t.pushed||(t.vel.x-=l*n*m,t.vel.z-=u*n*m),e.pushed||(e.vel.x+=l*n*h,e.vel.z+=u*n*h)}}}for(let e of n)!e.held&&!e.stuck&&this.sync(e)}raycast(e,t,n,r){let i=null,a=n;for(let n of this.list){if(n.held||r&&!r(n))continue;let o=Math.max(.22,Math.max(n.T.r,n.T.h/2)*.95+.08),s=n.pos.x-e.x,c=n.pos.y-e.y,l=n.pos.z-e.z,u=s*t.x+c*t.y+l*t.z;if(u<0)continue;let d=s*s+c*c+l*l-u*u;if(d>o*o)continue;let f=u-Math.sqrt(o*o-d);f<a&&(a=f,i=n)}return i?{prop:i,dist:a}:null}},Rd=e=>e[Math.floor(Math.random()*e.length)],zd={patient:{body:`#a9cbe8`,title:`Patient`,speed:1.1},nurse:{body:`#1f3a68`,title:`ED Nurse`,speed:1.5},nic:{body:`#0d1b3a`,title:`Nurse in Charge`,speed:1.6},registrar:{body:`#7a1f3d`,title:`ED Registrar`,speed:1.7},surgreg:{body:`#2f6b4f`,title:`Surgical Registrar`,speed:1.9},consultant:{body:`#3b3b58`,title:`ED Consultant`,speed:1.3},security:{body:`#15161a`,title:`Security`,speed:1.4},firefighter:{body:`#b58a2c`,title:`Firefighter`,speed:2.4},dms:{body:`#5a5f66`,title:`Director of Medical Services`,speed:1.5},chaplain:{body:`#4b3a63`,title:`Hospital Chaplain`,speed:1},radiographer:{body:`#2a7f8f`,title:`Radiographer`,speed:1.3},cleaner:{body:`#5f7f6a`,title:`Night Cleaner`,speed:1.1},ghost:{body:`#e8f0ff`,title:`Ghost of a Patient (unreported since 1987)`,speed:.8},cat:{body:`#e08a2e`,title:`Hospital cat`,speed:1.6}},Bd=[`#f1c9a5`,`#e0ac69`,`#c68642`,`#8d5524`,`#ffdbac`,`#a0673c`],Vd=new Set([`registrar`,`surgreg`,`consultant`,`nurse`,`nic`,`security`,`firefighter`,`dms`,`cleaner`]),Hd={registrar:[`stethoscope`,`trauma shears`,`pen torch`],surgreg:[`stethoscope`,`scalpel collection`],consultant:[`stethoscope`,`fancy watch`],nurse:[`scissors`,`fob watch`],nic:[`keys`,`scissors`],security:[`keys`,`radio`,`handcuffs`],firefighter:[`helmet`,`axe`,`breathing apparatus`],dms:[`cufflinks`,`laptop`],cleaner:[`mop bucket`]},Ud={nag:[`Any chance you've looked at bed 4?`,`Is the CT reported yet?`,`The surgeons are asking...`,`Just a quick question!`,`I've paged you like six times`,`My consultant wants it NOW`,`Is it... bad?`,`Can you just have a quick look?`,`It's been four hours!`,`Bed block is insane, we need that report`],queue:[`Hey! Got a sec?`,`Oh! You're here!`,`Can I grab you for one?`,`*holding a form hopefully*`,`Quick one...`],panic:[`FIRE!!!`,`AAAAAAH`,`EVERYBODY OUT!`,`Not again!`,`WHO MICROWAVED FOIL?!`,`MY CANNULA!`,`Is this a drill?!`,`I'M TOO YOUNG TO DIE (I'm 84)`],miracle:[`I CAN WALK!`,`I'm cured!! RUN!`,`Forget my hip!`],ow:[`OW!`,`HEY!`,`What the—`,`Seriously?!`,`I'm writing an incident report`,`OOF`,`My back!`],patient:[`How long is the wait?`,`I've been here 9 hours`,`Can I get a sandwich?`,`Is the doctor coming?`,`Is that the radiologist? I thought they were a myth`,`My pain is 11/10`,`Can I have a warm blanket?`,`I googled my symptoms...`],nurse:[`Bed 7 needs a cannula`,`Who took my pen?!`,`Obs are due`,`Has anyone seen the bladder scanner?`,`Resus 2 is kicking off`],consultant:[`...`,`Just checking in on the CT from four hours ago.`,`I'll wait.`,`No rush. (There is a rush.)`,`I trained with your consultant, you know.`],dms:[`Let's circle back on turnaround times.`,`Have you considered a KPI?`,`We need to be more agile.`,`Per my last email...`,`I'm going to need a root cause analysis.`,`Let's take this offline.`],sandwich:[`*munch*`,`Mmm.`,`Mind your own business.`,`*continues eating*`],security:[`OI! STOP RIGHT THERE!`,`Come back here!`,`Radiologist! Freeze!`,`Not in my ED!`],firefighter:[`Stand back!`,`Who's the idiot with the microwave?`,`Knockdown!`,`Hose it!`],cat:[`mrrp`,`mrow?`,`*judges you*`,`mew`],search:[`Where did they go?`,`Doctor? Hellooo?`,`I KNOW you're in here`,`Their coffee is still warm...`,`Come out, it's just ONE scan!`,`Radiologist? Ollie ollie oxen free?`,`I can hear breathing...`],giveup:[`Guess they went home.`,`Fine. FINE.`,`I'll page them again.`,`Must be in the toilet. Again.`],found:[`FOUND YOU!`,`Aha! There you are!`,`Nice try.`,`Really? In THERE?`],lift:[`They took the lift!`,`The LIFT? Seriously?`,`I'm not chasing them to the roof.`],knock:[`*knock knock*`,`I can see the light under the door!`,`I can hear you scrolling!`,`Open up, it's urgent!`,`Is this door... locked?`,`I'll slide the form under.`],chaplain:[`Would you like to talk?`,`Rough night?`,`I won't tell them you're here.`,`Bless this worklist.`,`Even radiologists need rest.`],cleaner:[`Mind the wet floor.`,`Who microwaved foil AGAIN?`,`I've seen things in this hospital.`,`Don't step there. Just... don't.`],ghost:[`Did... you... report... my scan...?`,`It was... a pneumothorax...`,`Woooo. (unreported since 1987)`,`The lightbox... is still on...`,`Is it... morning yet...?`],thanks:[`Thanks!!`,`Legend!`,`You're the best`,`Finally!`],bounce:[`Ugh... fine.`,`My consultant said you'd say that`,`I'll be back.`,`Rude.`]};function Wd(){let e=document.createElement(`canvas`);e.width=512,e.height=160;let t=new Ei(e);t.colorSpace=Re;let n=new Lr(new Cr({map:t,depthTest:!1,transparent:!0}));return n.scale.set(1.8,.56,1),n.renderOrder=10,n.visible=!1,{sprite:n,canvas:e,tex:t}}function Gd(e,t,n){let r=e.canvas.getContext(`2d`);r.clearRect(0,0,512,160),r.font=`${n?`bold `:``}34px "Archivo Narrow", Arial, sans-serif`;let i=t.split(` `),a=[],o=``;for(let e of i){let t=o?o+` `+e:e;r.measureText(t).width>440&&o?(a.push(o),o=e):o=t}a.push(o);let s=a.length*38+24,c=Math.max(...a.map(e=>r.measureText(e).width))+40,l=256-c/2,u=130-s;r.fillStyle=n?`#ffe45c`:`#ffffff`,r.strokeStyle=`#111`,r.lineWidth=4,r.beginPath(),r.roundRect(l,u,c,s,18),r.moveTo(246,u+s),r.lineTo(256,156),r.lineTo(270,u+s),r.fill(),r.stroke(),r.fillStyle=`#111`,r.textAlign=`center`,r.textBaseline=`middle`,a.forEach((e,t)=>r.fillText(e,256,u+12+38*(t+.5))),e.tex.needsUpdate=!0}var Kd=0,qd=class{constructor(e,{role:t,name:n,x:r,z:i,home:a,special:o}){if(this.G=e,this.id=++Kd,this.role=t,this.R=zd[t],this.name=n,this.special=o||null,this.pos=new B(r,i),this.vel=new B,this.face=Math.random()*6,this.home=a||{zone:`corridor`},this.state=`idle`,this.stateT=Math.random()*3,this.path=null,this.pathT=0,this.sayT=0,this.nagT=Math.random()*5,this.anger=0,this.sooty=0,this.fireT=0,this.cooldown=0,this.bed=null,this.seat=null,this.walkT=Math.random()*10,this.returnDelay=0,this.buildMesh(),t===`ghost`)for(let e of this.mats)e.transparent=!0,e.opacity=.45,e.emissive=new U(`#8fb0ff`);this.bubble=Wd(),this.mesh.add(this.bubble.sprite),this.bubble.sprite.position.y=t===`cat`?1:2.3,e.scene.add(this.mesh)}get title(){return this.R.title}buildMesh(){let e=new un;this.mesh=e;let t=new un;e.add(t),this.body=t,this.mats=[];let n=e=>{let t=pd(e,{unique:!0});return this.mats.push(t),t.userData.base=new U(e),t};if(this.role===`cat`){let e=n(this.R.body),r=new W(new Ai(.22,.2,.5),e);r.position.y=.25,t.add(r);let i=new W(new Ai(.2,.18,.18),e);i.position.set(0,.38,.3),t.add(i);for(let n of[-1,1]){let r=new W(new Pi(.04,.08,4),e);r.position.set(n*.06,.5,.3),t.add(r);for(let r of[-.18,.18]){let i=new W(new Ai(.05,.16,.05),e);i.position.set(n*.08,.08,r),t.add(i)}}let a=new W(new Ai(.04,.04,.35),e);a.position.set(0,.4,-.35),a.rotation.x=-.7,t.add(a),this.hitH=.5;return}let r=n(this.R.body),i=n(Rd(Bd)),a=new W(new ji(.26,.55,4,10),r);a.position.y=.95,t.add(a);let o=new W(new Ni(.2,.17,.55,10),n(this.role===`patient`?`#e7eef4`:this.role===`dms`?`#2b2e33`:this.R.body));o.position.y=.3,t.add(o);let s=new W(new to(.24,16,12),i);s.position.y=1.62,t.add(s),this.head=s;for(let e of[-1,1]){let n=new W(new to(.035,8,6),pd(`#111`));n.position.set(e*.08,1.66,.21),t.add(n)}this.arms=[];for(let e of[-1,1]){let n=new un;n.position.set(e*.33,1.28,0);let a=new W(new ji(.07,.42,4,6),r);a.position.y=-.26,n.add(a);let o=new W(new to(.075,8,6),i);o.position.y=-.55,n.add(o),t.add(n),this.arms.push(n)}let c=Rd([`#2b1b10`,`#4a2f1b`,`#111`,`#8a6a3a`,`#c8c8c8`,`#6b2a12`]);if(this.hairColor=c,this.role!==`firefighter`&&this.role!==`security`){let e=new W(new to(.25,12,8,0,Math.PI*2,0,Math.PI/2),pd(c));e.position.y=1.65,e.rotation.x=-.25,t.add(e)}let l=(e,n,r,i,a,o=0)=>{let s=new W(e,pd(n));return s.position.set(r,i,a),s.rotation.x=o,t.add(s),s};if(this.role===`registrar`||this.role===`surgreg`||this.role===`consultant`){l(new no(.16,.015,6,16,Math.PI),`#222`,0,1.35,.1,Math.PI/2+.3);let e=new W(new Ai(.25,.32,.02),pd(`#8b5a2b`));e.position.set(0,-.55,.12);let t=new W(new Ai(.21,.26,.005),pd(`#fafafa`));t.position.z=.012,e.add(t),this.arms[1].add(e),this.arms[1].rotation.x=-.6}this.role===`consultant`&&l(new Ai(.16,.06,.03),`#b0122d`,0,1.38,.25),this.role===`dms`&&(l(new Ai(.07,.35,.02),`#b0122d`,0,1.15,.27),l(new Ai(.3,.05,.02),`#f0f0f0`,0,1.37,.24)),this.role===`security`&&(l(new Ni(.26,.26,.1,12),`#0b0b0e`,0,1.82,0),l(new Ai(.32,.03,.18),`#0b0b0e`,0,1.78,.18),l(new Ai(.2,.07,.02),`#ddd`,0,1.15,.27)),this.role===`firefighter`&&(l(new to(.29,12,8,0,Math.PI*2,0,Math.PI/2),`#f2c21b`,0,1.7,0),l(new Ai(.56,.05,.6),`#dcdcdc`,0,.95,0).visible=!0),this.role===`nic`&&l(new Ai(.12,.08,.02),`#ffd400`,.12,1.2,.27),this.role===`patient`&&l(new no(.075,.015,6,12),`#fff`,.33,.73,0,Math.PI/2),this.afro=new W(new to(.3,10,8),pd(`#111`)),this.afro.position.set(0,1.86,-.06),this.afro.scale.set(1,.75,1),this.afro.visible=!1,t.add(this.afro),this.hitH=1.9}say(e,t=3,n=!1){Gd(this.bubble,e,n),this.bubble.sprite.visible=!0,this.sayT=t}goTo(e,t){return this.path=cd(this.pos.x,this.pos.y,e,t),this.pathT=0,!!this.path}setState(e,t=0){this.state=e,this.stateT=t}knock(e,t,n=!0,r=0,i){if(this.state===`pinned`){this.say(`I'm STUCK TO A MAGNET, leave me alone`,2);return}if(this.kv||(this.kv=new B,this.air=0,this.vy=0),this.state===`knocked`){this.kv.x+=e*.5,this.kv.y+=t*.5,this.vy=Math.max(this.vy,r);return}this.detachBed(),this.prevState=this.state===`lie`?`return`:this.state,this.setState(`knocked`,2.6+r*.15),this.kv.set(e,t),this.vy=r,this.say(i||(this.role===`cat`?`MRRROW!`:Rd(Ud.ow)),2,!0),this.role===`cat`?K.meow():K.ow(),n&&(this.anger++,this.G.stats.hits++,this.G.onAssault?.(this))}ignite(){this.state===`onfire`||this.fireT>0||(this.detachBed(),this.fireT=5,this.setState(`onfire`,5),this.say(this.role===`cat`?`MREEEOW`:`AAAAH I'M ON FIRE`,2.5,!0),K.scream(),this.G.stats.npcsIgnited++)}pin(){this.detachBed(),this.path=null,this.pulledSaid=!1;let e=Math.max(36,Math.min(this.pos.x,39.2)),t=Math.max(1.6,Math.min(this.pos.y,5.4)),n=this.pos.x-e,r=this.pos.y-t,i=Math.hypot(n,r)||1;this.pinPos={x:e+n/i*.3,z:t+r/i*.3},this.setState(`pinned`),this.G.leaveQueue(this),this.G.stats.pinned++,K.clang(),this.say(Rd([`CLANG`,`I'M STUCK TO THE MRI`,`Well. This is happening.`]),3,!0),this.G.toast(`${this.name} has been pinned to the MRI magnet by their ${Rd(Hd[this.role]||[`keys`])}.`,`bad`)}release(){this.setState(`idle`,1),this.cooldown=20,this.knock(3,(Math.random()-.5)*2,!1,1.5,`FREEDOM!`)}zap(e,t){if(!this.frizz&&this.head){this.frizz=new un;let e=pd(this.hairColor||`#2b1b10`);for(let t=0;t<14;t++){let n=t/14*Math.PI*2,r=.35+t%3*.2,i=new W(new Pi(.035,.28,5),e);i.position.set(Math.cos(n)*.13,.12,Math.sin(n)*.13-.02),i.rotation.set(Math.sin(n)*r,0,-Math.cos(n)*r),this.frizz.add(i)}let t=new W(new Pi(.04,.32,5),e);t.position.set(0,.2,-.02),this.frizz.add(t),this.frizz.position.y=1.72,this.body.add(this.frizz)}this.knock(e*7,t*7,!0,5,this.role===`cat`?`MRRRZZZT`:Rd([`BZZZZT`,`AAAARGH`,`I DON'T HAVE A PULSE PROBLEM!`,`My fillings!`]))}soot(){this.sooty=1;let e=new U(`#1c1a18`);for(let t of this.mats)t.color.copy(t.userData.base).lerp(e,.7);this.afro&&(this.afro.visible=!0)}attachBed(e){this.bed=e,e.rider=this,this.setState(`lie`)}detachBed(){this.bed&&=(this.bed.rider=null,this.homeBed=this.bed,null)}distToPlayer(){let e=this.G.player.pos;return Math.hypot(e.x-this.pos.x,e.z-this.pos.y)}region(){return Qu(this.pos.x,this.pos.y)}canSee(){return this.G.playerVisible()&&this.G.playerRegion()===this.region()}startSearch(){let e=this.G;this.resumeState=this.state,this.searchT=14+Math.random()*10,this.checkT=1.5,this.pathT=0,e.lastSeen.region===this.region()?this.say(Rd(Ud.search),3):(this.goTo(61.2,10.5),this.say(e.lastSeen.lift?Rd(Ud.lift):Rd(Ud.search),3)),this.setState(`search`)}giveUp(){this.say(Rd(Ud.giveup),3),this.cooldown=35+Math.random()*20,this.G.stats.searchesEvaded++,this.setState(`idle`,1)}think(){let e=this.G;switch(this.role){case`patient`:if(this.homeBed){this.goTo(this.homeBed.pos.x,this.homeBed.pos.z),this.setState(`toBed`);return}if(this.seat){this.goTo(this.seat.x,this.seat.z),this.setState(`toSeat`);return}break;case`registrar`:case`surgreg`:{let t=e.pendingFor(this);if(this.cooldown<=0&&t.length){if(e.list()>=e.T.chase&&this.canSee()){this.setState(`chase`);return}if(e.list()>=e.T.queue){this.setState(`toQueue`);return}}break}case`consultant`:case`dms`:if(this.dismiss){this.goTo(10.5,27),this.setState(`leave`);return}if(this.canSee()&&this.cooldown<=0){this.setState(`stalk`);return}break;case`radiographer`:{let t=e.world.consoleSpots[this.scanner];if(e.scan?.busy[this.scanner]||Math.random()<.6){this.goTo(t.x+(Math.random()-.5)*.4,t.z+(Math.random()-.5)*.4),this.setState(`walk`);return}break}case`ghost`:{let e=ud(Math.random()<.5?`basement`:Rd([`morgue`,`archive`,`olddept`]));this.goTo(e.x,e.z),this.setState(`walk`);return}case`security`:if(e.wanted>0&&this.cooldown<=0){this.setState(`hunt`),this.say(Rd(Ud.security),2.5,!0);return}this.goTo(23.5+Math.random(),16+Math.random()),this.setState(`walk`,0);return;case`firefighter`:this.setState(`fight`);return}let t=this.home.zone||`corridor`,n=ud(Math.random()<.7?t:`corridor`);this.goTo(n.x,n.z),this.setState(`walk`)}follow(e,t,n=.25){if(!this.path||!this.path.length)return!0;let r=this.path[0],i=r.x-this.pos.x,a=r.z-this.pos.y,o=Math.hypot(i,a);if(o<n)return this.path.shift(),this.progT=0,!this.path.length;if(this.wpRef!==r||o<(this.bestD??1/0)-.05?(this.wpRef=r,this.bestD=o,this.progT=0):this.progT=(this.progT||0)+e,this.progT>.9){this.progT=0,this.bestD=1/0,this.stuckN=(this.stuckN||0)+1;let e=this.path[this.path.length-1];if(this.path.length===1&&o<1.4)return this.path.shift(),this.stuckN=0,!0;if(this.path=cd(this.pos.x,this.pos.y,e.x,e.z),this.stuckN>2){let t=ld(Math.floor(this.pos.x),Math.floor(this.pos.y));t&&(this.pos.set(t.x+.5,t.y+.5),this.path=cd(this.pos.x,this.pos.y,e.x,e.z)),this.stuckN=0}return!this.path||!this.path.length}return this.vel.set(i/o*t,a/o*t),this.face=Math.atan2(i,a),!1}update(e){let t=this.G;this.walkT+=e,this.stateT-=e,this.cooldown-=e,this.sayT>0&&(this.sayT-=e,this.sayT<=0&&(this.bubble.sprite.visible=!1)),this.vel.set(0,0);let n=t.player.pos,r=this.distToPlayer();if(this.state!==`pinned`&&!t.quenched&&Vd.has(this.role)&&Zu(this.pos.x,this.pos.y)?.id===`mri`){let t=Math.max(36,Math.min(this.pos.x,39.2)),n=Math.max(1.6,Math.min(this.pos.y,5.4)),r=37.6-this.pos.x,i=3.5-this.pos.y,a=Math.hypot(r,i)||1;Math.hypot(this.pos.x-t,this.pos.y-n)<.45?this.pin():this.state!==`knocked`&&(this.pos.x+=r/a*5*e,this.pos.y+=i/a*5*e,this.face=Math.atan2(r,i),this.pulledSaid||(this.pulledSaid=!0,this.say(Rd([`WHOA—`,`MY STETHOSCOPE!`,`I CAN'T STOP!`,`NOT AGAIN`]),1.5,!0)))}this.state!==`onfire`&&this.role!==`firefighter`&&this.role!==`ghost`&&t.fire.at(this.pos.x,this.pos.y)>.35&&this.ignite();let i=![`firefighter`,`security`,`dms`,`ghost`].includes(this.role)&&this.special!==`sandwich`&&this.region()===`main`;switch(t.alarm&&i&&![`panic`,`assembled`,`knocked`,`onfire`].includes(this.state)&&(this.state===`lie`&&Math.random()<.5&&this.say(Rd(Ud.miracle),2.5,!0),this.detachBed(),this.startPanic()),this.state){case`idle`:this.stateT<=0&&this.think();break;case`walk`:this.follow(e,this.R.speed)&&this.setState(`idle`,1+Math.random()*4),this.role===`patient`&&Math.random()<.002&&r<6&&this.say(Rd(Ud.patient)),this.role===`nurse`&&Math.random()<.0015&&r<8&&this.say(Rd(Ud.nurse)),(this.role===`chaplain`||this.role===`cleaner`||this.role===`ghost`)&&Math.random()<.004&&r<7&&this.say(Rd(Ud[this.role]),3);break;case`toBed`:if(!this.homeBed){this.setState(`idle`,1);break}this.pathT<=0&&(this.goTo(this.homeBed.pos.x,this.homeBed.pos.z),this.pathT=1.5),this.pathT-=e,this.follow(e,this.R.speed),Math.hypot(this.homeBed.pos.x-this.pos.x,this.homeBed.pos.z-this.pos.y)<1.1&&!this.homeBed.rider&&!this.homeBed.held&&!this.homeBed.pushed&&this.attachBed(this.homeBed);break;case`toSeat`:this.follow(e,this.R.speed)&&(this.setState(`sit`),this.pos.set(this.seat.x,this.seat.z),this.face=Math.PI);break;case`sit`:if(this.face=Math.PI,this.special!==`sandwich`&&Math.random()<8e-4){let e=ud(`waiting`);this.goTo(e.x,e.z),this.setState(`stroll`)}Math.random()<.0015&&r<7&&this.say(this.special===`sandwich`?Rd(Ud.sandwich):Rd(Ud.patient));break;case`stroll`:this.follow(e,this.R.speed)&&this.think();break;case`lie`:if(!this.bed){this.setState(`idle`,.5);break}this.pos.set(this.bed.pos.x,this.bed.pos.z),this.face=this.bed.yaw,Math.random()<.0012&&r<6&&this.say(Rd(Ud.patient));break;case`toQueue`:{let n=t.queueIndex(this);if(n<0){this.setState(`idle`,2);break}let r=t.world.queueSpots[n];this.pathT<=0&&(this.goTo(r.x,r.z),this.pathT=3),this.pathT-=e,this.follow(e,this.R.speed*1.2)&&this.setState(`queued`,25+Math.random()*20);break}case`queued`:if(this.face=Math.atan2(n.x-this.pos.x,n.z-this.pos.y),!t.pendingFor(this).length){t.leaveQueue(this),this.think();break}this.nagT-=e,r<3&&this.nagT<=0&&(this.say(Rd(Ud.queue)),this.nagT=6),this.stateT<=0&&t.list()>=t.T.chase&&(t.leaveQueue(this),this.setState(`chase`));break;case`chase`:if(!t.pendingFor(this).length||this.cooldown>0){this.think();break}if(!this.canSee()){this.startSearch();break}if(this.pathT-=e,r>1.4){if(this.pathT<=0&&(this.pathT=.7,!this.goTo(n.x,n.z))){this.startKnock();break}this.follow(e,this.R.speed*1.35)}else this.face=Math.atan2(n.x-this.pos.x,n.z-this.pos.y),this.nagT-=e,this.nagT<=0&&(this.say(Rd(Ud.nag),3),this.nagT=4+Math.random()*3,t.stats.nags++,this.nagCount=(this.nagCount||0)+1);break;case`stalk`:if(!this.dismiss&&!this.canSee()){this.startSearch();break}this.pathT-=e,r>(this.role===`dms`?2.2:1.8)?(this.pathT<=0&&(this.goTo(n.x,n.z),this.pathT=.8),this.follow(e,this.R.speed*1.4)):this.face=Math.atan2(n.x-this.pos.x,n.z-this.pos.y),this.nagT-=e,this.nagT<=0&&r<5&&(this.say(Rd(Ud[this.role]),3.5),this.nagT=7+Math.random()*5),this.dismiss&&(this.goTo(10.5,27),this.setState(`leave`));break;case`hunt`:if(t.wanted<=0){this.think();break}if(!this.canSee()){this.startSearch();break}if(this.pathT-=e,this.pathT<=0&&(this.pathT=.5,!this.goTo(n.x,n.z))){this.startKnock(),this.knockT=8;break}this.follow(e,4.3),Math.random()<.01&&this.say(Rd(Ud.security),2,!0),r<1&&t.caught(this);break;case`fight`:{let n=t.nearestFire(this.pos.x,this.pos.y);if(!n){t.alarm||(this.goTo(10.5,27.5),this.setState(`leave`));break}let r=n.x-this.pos.x,i=n.z-this.pos.y,a=Math.hypot(r,i);a>2.5?(this.pathT-=e,this.pathT<=0&&(this.goTo(n.x,n.z),this.pathT=1.2),this.follow(e,this.R.speed)):(this.face=Math.atan2(r,i),t.fire.suppressCone(this.pos.x,this.pos.y,r/a,i/a,4.5,2.2,e),t.spray(this.pos.x+Math.sin(this.face)*.5,1.2,this.pos.y+Math.cos(this.face)*.5,r/a,-.1,i/a,!0),Math.random()<.004&&this.say(Rd(Ud.firefighter),2,!0));break}case`pinned`:if(this.pos.set(this.pinPos.x,this.pinPos.z),this.face=Math.atan2(37.6-this.pos.x,3.5-this.pos.y),t.quenched){this.release();break}this.nagT-=e,this.nagT<=0&&r<12&&(this.say(Rd([`Help!`,`Can someone call the physicist?`,`I can't feel my stethoscope.`,`Is it always this... magnetic?`,`Press the red button! No, the OTHER red button!`,`I'll just... report from here?`]),3),this.nagT=6+Math.random()*5);break;case`meeting`:this.meetingT-=e,this.meetingSpot||(this.meetingSpot=ud(`cafe`),this.goTo(this.meetingSpot.x,this.meetingSpot.z)),this.follow(e,this.R.speed),Math.random()<.003&&r<6&&this.say(Rd([`I'm in a meeting.`,`Apparently I "page too much".`,`I'm reflecting. On my practice.`]),3),this.meetingT<=0&&(this.meetingSpot=null,this.cooldown=30,this.setState(`idle`,1));break;case`search`:{if(this.canSee()&&r<9){this.say(Rd([`THERE you are!`,`Gotcha!`,`Oh hi!`]),2,!0),this.setState(this.resumeState===`search`?`chase`:this.resumeState||`chase`);break}if(this.searchT-=e,this.searchT<=0){this.giveUp();break}if((!this.path||!this.path.length)&&(this.pathT-=e,this.pathT<=0)){this.pathT=1+Math.random()*2;let e=t.lastSeen;if(e.region===this.region())for(let t=0;t<6;t++){let t=e.x+(Math.random()-.5)*7,n=e.z+(Math.random()-.5)*7;if(id(Math.floor(t),Math.floor(n))&&this.goTo(t,n))break}Math.random()<.35&&this.say(Rd(Ud.search),2.5)}this.follow(e,this.R.speed);let n=t.player.hidden;this.checkT-=e,n&&this.checkT<=0&&(this.checkT=1.5,this.region()===t.playerRegion()&&Math.hypot(n.x-this.pos.x,n.z-this.pos.y)<2.2&&Math.random()<n.chance?t.foundPlayer(this):n.id===`stall`&&Math.hypot(n.x-this.pos.x,n.z-this.pos.y)<3&&Math.random()<.4&&this.say(`I can see your shoes under the door...`,3));break}case`knock`:if(!t.world.doorLocked){this.setState(`chase`);break}if(this.knockT-=e,this.follow(e,this.R.speed)&&(this.face=Math.PI),this.nagT-=e,this.nagT<=0&&(this.say(Rd(Ud.knock),2.5),this.nagT=4+Math.random()*3,t.onKnock(this)),this.knockT<=0){if(this.role===`security`){t.world.setDoorLocked(!1),this.say(`I have a key, doc.`,3),t.toast(`Security unlocked the reading-room door.`),this.setState(`hunt`);break}this.giveUp()}break;case`leave`:this.follow(e,this.R.speed)&&(this.remove=!0);break;case`panic`:this.follow(e,this.role===`cat`?5:4.2)&&this.setState(`assembled`,0),Math.random()<.012&&this.say(Rd(Ud.panic),1.6,!0),Math.random()<.003&&K.scream();break;case`assembled`:this.face+=e*.3,t.alarm?this.returnDelay=3+Math.random()*8:(this.returnDelay-=e,this.returnDelay<=0&&this.think());break;case`knocked`:this.air+=this.vy*e,this.vy-=18*e,this.air<=0&&(this.air=0,this.vy=0,this.kv.multiplyScalar(.08**e)),this.stateT<=0&&(this.anger>2&&this.role!==`cat`&&Math.random()<.6&&this.say(`That's it. I'm calling security.`,3),this.setState(`idle`,.5));break;case`onfire`:if(this.stateT<=0||t.fire.wet[Math.floor(this.pos.y)*96+Math.floor(this.pos.x)]>0){this.fireT=0,this.soot(),this.say(`*cough*`,2),this.startPanic();break}if(Math.random()<.05||!this.path||!this.path.length){let e={x:this.pos.x+(Math.random()-.5)*8,z:this.pos.y+(Math.random()-.5)*8};this.goTo(e.x,e.z)}this.follow(e,4.6),t.flames(this.pos.x,1,this.pos.y,.8)}if(this.state===`knocked`?(this.pos.x+=this.kv.x*e,this.pos.y+=this.kv.y*e):this.state!==`lie`&&this.state!==`sit`&&(this.pos.x+=this.vel.x*e,this.pos.y+=this.vel.y*e),this.state!==`lie`&&this.state!==`sit`&&this.state!==`pinned`){let e={x:this.pos.x,z:this.pos.y};od(e,.28),this.pos.set(e.x,e.z)}this.animate(e)}startKnock(){this.goTo(5+(Math.random()-.5)*1.5,9.4+Math.random()*.6),this.knockT=20+Math.random()*15,this.setState(`knock`)}startPanic(){let e=ud(`outside`);e.x=22+Math.random()*19,e.z=26.3+Math.random()*2.2,this.goTo(e.x,e.z),this.setState(`panic`),this.returnDelay=3+Math.random()*8}animate(e){let t=this.mesh,n=this.body;t.position.set(this.pos.x,0,this.pos.y);let r=this.vel.lengthSq()>.05;if(t.rotation.set(0,this.face,0),n.position.set(0,0,0),n.rotation.set(0,0,0),this.state===`lie`?(n.rotation.x=-Math.PI/2,n.position.set(0,.9,.85)):this.state===`knocked`?(n.rotation.x=-Math.PI/2,n.position.set(0,.25+(this.air||0),.3),this.air>.05&&(n.rotation.z=this.walkT*14)):this.state===`pinned`?(n.rotation.x=.35,n.position.set(0,.25,0)):this.state===`sit`?n.position.y=-.25:this.role===`ghost`?n.position.y=.25+Math.sin(this.walkT*2)*.12:r&&(n.position.y=Math.abs(Math.sin(this.walkT*9))*.06),this.arms){let e=this.state===`panic`||this.state===`onfire`||this.state===`pinned`,t=r?Math.sin(this.walkT*9)*.6:0;this.arms[0].rotation.x=e?-2.8+Math.sin(this.walkT*20)*.4:t;let n=this.role===`registrar`||this.role===`surgreg`||this.role===`consultant`;this.arms[1].rotation.x=e?-2.8+Math.cos(this.walkT*20)*.4:n?-.6:-t}}dispose(){this.G.scene.remove(this.mesh)}},Jd=class{constructor(e,t){this.camera=e,this.dom=t,this.pos={x:3.2,z:4.2},this.y=0,this.vy=0,this.yaw=Math.PI,this.pitch=-.05,this.vel={x:0,z:0},this.keys=new Set,this.held=null,this.pushing=null,this.locked=!1,this.mouse={left:!1,right:!1,leftPressed:!1},this.onFire=0,this.enabled=!0,this.freeLook=!1,this.dragMoved=0,document.addEventListener(`pointerlockchange`,()=>{this.locked=document.pointerLockElement===t,this.locked&&(this.everLocked=!0)}),document.addEventListener(`mousemove`,e=>{if(!this.enabled)return;let t=this.freeLook&&e.buttons&1;(this.locked||t)&&(t&&(this.dragMoved+=Math.abs(e.movementX)+Math.abs(e.movementY)),this.yaw-=e.movementX*(t?.004:.0022),this.pitch=Math.max(-1.45,Math.min(1.45,this.pitch-e.movementY*(t?.004:.0022))))}),window.addEventListener(`keydown`,e=>{this.keys.add(e.code)}),window.addEventListener(`keyup`,e=>{this.keys.delete(e.code)}),window.addEventListener(`blur`,()=>this.keys.clear()),t.addEventListener(`mousedown`,e=>{this.locked?e.button===0&&(this.mouse.left=!0,this.mouse.leftPressed=!0):this.freeLook&&e.button===0&&(this.dragMoved=0),(this.locked||this.freeLook)&&e.button===2&&(this.mouse.right=!0)}),window.addEventListener(`mouseup`,e=>{e.button===0&&(this.mouse.left=!1,this.freeLook&&!this.locked&&this.dragMoved<6&&e.target===t&&(this.mouse.leftPressed=!0)),e.button===2&&(this.mouse.right=!1)}),t.addEventListener(`contextmenu`,e=>e.preventDefault())}lock(){try{let e=this.dom.requestPointerLock();e&&e.catch&&e.catch(()=>{})}catch{}}unlock(){document.pointerLockElement&&document.exitPointerLock()}forward(){return{x:-Math.sin(this.yaw),z:-Math.cos(this.yaw)}}lookDir(){let e=Math.cos(this.pitch);return new V(-Math.sin(this.yaw)*e,Math.sin(this.pitch),-Math.cos(this.yaw)*e)}eye(){return new V(this.pos.x,this.y+1.65,this.pos.z)}update(e,t){let n=this.keys;if(this.hidden){let e=this.hidden;this.pos.x=e.x,this.pos.z=e.z,this.y=0,this.vy=0,this.vel.x=0,this.vel.z=0,this.camera.position.set(e.x,e.camY,e.z),this.camera.rotation.set(this.pitch,this.yaw,0,`YXZ`);return}if(this.inCar){this.y=0,this.camera.position.set(this.pos.x,this.inCar.seatY||1.4,this.pos.z),this.camera.rotation.set(this.pitch,this.yaw,0,`YXZ`);return}let r=0,i=0;this.enabled&&((n.has(`KeyW`)||n.has(`ArrowUp`))&&(i+=1),(n.has(`KeyS`)||n.has(`ArrowDown`))&&--i,(n.has(`KeyA`)||n.has(`ArrowLeft`))&&--r,(n.has(`KeyD`)||n.has(`ArrowRight`))&&(r+=1),this.touchMove&&(r+=this.touchMove.x,i+=this.touchMove.y));let a=this.forward(),o=-a.z,s=a.x,c=this.touchMove&&Math.hypot(this.touchMove.x,this.touchMove.y)>.92,l=n.has(`ShiftLeft`)||n.has(`ShiftRight`)||c?6.2:3.4;this.onFire>0&&(l*=1.35),this.pushing&&(l*=this.pushing.rider?.85:.95);let u=Math.max(1,Math.hypot(r,i)),d=(a.x*i+o*r)/u*l,f=(a.z*i+s*r)/u*l,p=this.y>ad(this.pos.x,this.pos.z,this.y)+.01?2:12;this.vel.x+=(d-this.vel.x)*Math.min(1,p*e),this.vel.z+=(f-this.vel.z)*Math.min(1,p*e),this.enabled&&n.has(`Space`)&&Math.abs(this.vy)<.01&&this.y<=ad(this.pos.x,this.pos.z,this.y)+.01&&(this.vy=5.2),this.vy-=15*e,t.jetpack&&(this.vy+=26*e),this.y+=this.vy*e;let m=ad(this.pos.x,this.pos.z,this.y);this.y<m&&(this.y=m,this.vy=0);let h=this.pos.z<25?1.2:6;if(this.y>h&&(this.y=h,this.vy=Math.min(0,this.vy)),this.pos.x+=this.vel.x*e,this.pos.z+=this.vel.z*e,od(this.pos,.3,this.y),this.pushing){let e=this.pushing,t=1.75;e.pos.x=this.pos.x+a.x*t,e.pos.z=this.pos.z+a.z*t,e.pos.y=e.T.h/2,e.yaw=this.yaw;let n={x:e.pos.x,z:e.pos.z};od(n,e.T.r)&&(e.pos.x=n.x,e.pos.z=n.z,this.pos.x=e.pos.x-a.x*t,this.pos.z=e.pos.z-a.z*t,od(this.pos,.3)),e.vel.set(this.vel.x,0,this.vel.z)}let g=this.camera;if(g.position.set(this.pos.x,this.y+1.65+(this.onFire>0?Math.sin(performance.now()/40)*.02:0),this.pos.z),g.rotation.set(this.pitch,this.yaw,0,`YXZ`),this.held){let e=this.lookDir(),t=this.held;t.pos.set(g.position.x+e.x*.75+o*.28,g.position.y+e.y*.75-.28,g.position.z+e.z*.75+s*.28),t.mesh.position.copy(t.pos),t.mesh.rotation.set(0,this.yaw,0)}}},Yd=128;function Xd(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Zd(e,t,n){let r=Math.imul(e|0,374761393)+Math.imul(t|0,668265263)+Math.imul(n|0,1442695041);return r=Math.imul(r^r>>>13,1274126177),r^=r>>>16,(r>>>0)/4294967296}var Qd=(e,t,n)=>{let r=Math.max(0,Math.min(1,(n-e)/(t-e)));return r*r*(3-2*r)},$d=(e,t,n)=>{if(e<t||e>n)return 0;let r=2*(e-t)/(n-t)-1;return Math.sqrt(1-r*r)},ef=(e,t,n)=>e>=t&&e<=n;function J(e,t,n,r,i,a,o,s){if(r<=.002||i<=.002)return;let c=Math.max(r,i),l=Math.max(0,Math.floor((t-c+1)*Yd)),u=Math.min(255,Math.ceil((t+c+1)*Yd)),d=Math.max(0,Math.floor((n-c+1)*Yd)),f=Math.min(255,Math.ceil((n+c+1)*Yd)),p=Math.cos(a),m=Math.sin(a),h=typeof o==`function`;for(let a=d;a<=f;a++){let c=(a+.5)/Yd-1;for(let d=l;d<=u;d++){let l=(d+.5)/Yd-1,u=l-t,f=c-n,g=(u*p+f*m)/r,_=(-u*m+f*p)/i,v=g*g+_*_;if(v>1)continue;if(s){let e=(l-s.cx)/s.rx,t=(c-s.cy)/s.ry;if(e*e+t*t>1)continue}let y=a*256+d;e[y]=h?o(e[y],l,c,g,_,Math.sqrt(v)):o}}}function tf(e,t,n,r,i,a,o=900,s=280,c=.25){J(e,t,n,r,i,a,(e,t,n,r,i,a)=>a>1-c?o:s)}function nf(e,t,n,r,i,a,o){let s=Math.hypot(r,i),c=Math.max(0,Math.floor((t-s+1)*Yd)),l=Math.min(255,Math.ceil((t+s+1)*Yd)),u=Math.max(0,Math.floor((n-s+1)*Yd)),d=Math.min(255,Math.ceil((n+s+1)*Yd)),f=Math.cos(a),p=Math.sin(a),m=typeof o==`function`;for(let a=u;a<=d;a++){let s=(a+.5)/Yd-1;for(let u=c;u<=l;u++){let c=(u+.5)/Yd-1,l=c-t,d=s-n,h=l*f+d*p,g=-l*p+d*f;if(Math.abs(h)>r||Math.abs(g)>i)continue;let _=a*256+u;e[_]=m?o(e[_],c,s,h/r,g/i):o}}}function rf(e,t,n,r,i){let a=i*6.28;for(let i=0;i<256;i++){let o=(i+.5)/Yd-1;for(let s=0;s<256;s++){let c=(s+.5)/Yd-1-t,l=o-n,u=Math.sqrt(c*c+l*l);if(u<.02||e[i*256+s]<-800)continue;let d=Math.atan2(l,c),f=Math.sin(d*9+a)*Math.sin(d*5-a*2);e[i*256+s]+=r*f*Math.exp(-u*6)}}}function af(e,t,n,r=22){let i=new Float32Array(65536);for(let a=0;a<256;a++)for(let o=0;o<256;o++){let s=0,c=0;for(let t=-1;t<=1;t++){let n=a+t;if(!(n<0||n>=256))for(let t=-1;t<=1;t++){let r=o+t;r<0||r>=256||(s+=e[n*256+r],c++)}}let l=s/c,u=l>-950?(Zd(o,a,t*7919+n)+Zd(a,o,t+n*3)-1)*r:0;i[a*256+o]=l+u}return i}var of=()=>new Float32Array(65536).fill(-1e3);function sf(e,t){e.loops=[];let n=e.path===`sbo`,r=n?11:24;for(let i=0;i<r;i++){let r=n?.1+t()*.045:.035+t()*.035;e.loops.push({x:-.4+t()*.8,y:-.33+t()*(n?.33:.45),r,z0:n?.26+t()*.28:.34+t()*.5,len:n?.16+t()*.16:.07+t()*.14,dx:(t()-.5)*.4,dy:(t()-.5)*.3,content:n?`level`:t()<.5?`fluid`:t()<.7?`level`:`air`})}if(n)for(let n=0;n<8;n++)e.loops.push({x:-.3+t()*.6,y:-.2+t()*.3,r:.025,z0:.72+t()*.12,len:.08,dx:0,dy:0,content:`collapsed`});e.liverVessels=[];for(let n=0;n<7;n++)e.liverVessels.push({x:-.45+t()*.3,y:-.2+t()*.3,r:.012+t()*.02,z0:t()*.3,len:.06+t()*.1});e.side=t()<.5?-1:1,e.metalSeed=t(),e.lesionN={freeair:{x:0,y:-.38,r:.12,z0:.08,z1:.5},collection:{x:-.32,y:0,r:.14,z0:.58,z1:.74},sbo:{x:.05,y:-.1,r:.3,z0:.3,z1:.68},aaa:{x:.04,y:.2,r:.18,z0:.36,z1:.68},appendicitis:{x:-.37,y:.05,r:.09,z0:.64,z1:.8},renal_stone:{x:.13*e.side,y:.25,r:.06,z0:.62,z1:.7},fork:{x:.24,y:-.12,r:.15,z0:.08,z1:.26},pager:{x:.24,y:-.12,r:.1,z0:.12,z1:.22},sandwich:{x:.24,y:-.12,r:.13,z0:.08,z1:.24},necfasc:{x:-.62,y:-.2,r:.25,z0:.62,z1:.98}}[e.path]||null}function cf(e,t){let n=of(),r=e.path,i=Qd(.6,.92,t),a=.8+.05*i,o=.58-.02*i,s=.06;J(n,0,s,a,o,0,40),J(n,0,s,a-.025,o-.025,0,-105),J(n,0,.06999999999999999,a-.1,o-.09,0,55);let c={cx:0,cy:.075,rx:a-.14,ry:o-.13};if(J(n,c.cx,c.cy,c.rx,c.ry,0,(e,t,n)=>-95+(Zd(t*90,n*90,3)<.04?60:0)),J(n,-.16,.5,.12,.1,.2,52),J(n,.16,.5,.12,.1,-.2,52),t>.38){let e=.03+.07*Qd(.38,.8,t),r=.13+.12*Qd(.75,1,t);J(n,-r,.3,e,.06+e*.3,0,55),J(n,r,.3,e,.06+e*.3,0,55)}if(t<.64){let e=t*11%1<.18;tf(n,0,.33,.1,.09,0,e?90:850,e?90:260,.22),J(n,0,.46,.045,.04,0,10),tf(n,-.06,.52,.04,.05,.6,850,300,.4),tf(n,.06,.52,.04,.05,-.6,850,300,.4),tf(n,0,.57,.02,.05,0,850,300,.5)}else tf(n,0,.4,.15-.05*i,.07,0,700,250,.3);if(ef(t,.58,.88)){let e=Qd(.58,.88,t),r=.5-.05*e,i=.26-.12*e;tf(n,-r,i,.2-.06*e,.045,.9-.4*e,800,250,.35),tf(n,r,i,.2-.06*e,.045,-.9+.4*e,800,250,.35)}if(t>.88&&(tf(n,-.46,.12,.11,.11,0,800,330,.18),tf(n,.46,.12,.11,.11,0,800,330,.18)),t<.72){if(r===`aaa`&&ef(t,.36,.68)){let e=.06+.12*$d(t,.36,.68);J(n,.04,.2,e,e*.95,0,45,c),J(n,.04-e*.25,.2-e*.15,Math.max(.05,e*.5),Math.max(.05,e*.45),0,190),J(n,.04,.2,e,e*.95,0,(e,t,n,r,i,a)=>a>.93?250:e)}else J(n,.04,.2,.055,.055,0,190);J(n,-.09,.19,.06,.045,.2,135)}else if(t<.93){let e=(t-.72)*1.3;J(n,-.06-e,.22-e*.2,.035,.035,0,190),J(n,.08+e,.22-e*.2,.035,.035,0,190),J(n,-.08-e,.28-e*.2,.04,.035,0,135),J(n,.12+e,.28-e*.2,.04,.035,0,135)}let l=$d(t,-.12,.44);if(l>0){J(n,-.3,-.02,.42*l,.38*l,.1,108,c),t<.22&&J(n,-.02,-.18,.24*l,.12*l,-.2,108,c);for(let r of e.liverVessels)ef(t,r.z0,r.z0+r.len)&&J(n,r.x,r.y,r.r,r.r,0,165,c);ef(t,.22,.37)&&J(n,-.22,-.1,.07*$d(t,.2,.39),.06*$d(t,.2,.39),.3,12,c)}let u=$d(t,-.05,.3);u>0&&J(n,.46,.18,.13*u,.22*u,-.5,112,c);let d=$d(t,0,.32);d>0&&(J(n,.24,-.12,.2*d,.15*d,-.3,50,c),J(n,.24,-.12,.17*d,.12*d,-.3,(e,t,n)=>n<-.13999999999999999?-950:18,c)),ef(t,.26,.37)&&J(n,.08,.1,.25*$d(t,.24,.39),.05,-.15,95,c);for(let i of[-1,1]){let a=i<0?.3:.27,o=$d(t,a,a+.27);if(o<=0)continue;let s=r===`renal_stone`&&e.side===i,c=.31*i;J(n,c,.24,.09*o,.13*o,.45*i,165),J(n,c-.03*i,.22999999999999998,(s?.06:.035)*o,(s?.08:.05)*o,.45*i,s?8:-60)}r===`renal_stone`&&(ef(t,.52,.67)&&J(n,.14*e.side,.26,.025,.025,0,(e,t,n,r,i,a)=>a>.6?60:8),ef(t,.665,.69)&&J(n,.14*e.side,.26,.022,.02,0,1100));let f=(e,t,n,r,i,a)=>a>.85?50:Zd(t*70,n*70,11)<.4?-750:25;ef(t,.38,.8)&&J(n,-.48,.02,.085,.08,0,f,c),ef(t,.28,.8)&&J(n,.5,.1,.07,.065,0,f,c),ef(t,.32,.42)&&J(n,0,-.3,.46,.07,0,f,c),ef(t,.78,.9)&&J(n,.2-(t-.78)*1.5,.12+(t-.78),.07,.06,.4,f,c),t>.88&&J(n,0,.34,.06,.05,0,f);for(let r of e.loops){if(!ef(t,r.z0,r.z0+r.len))continue;let i=(t-r.z0)/r.len,a=r.x+r.dx*i,o=r.y+r.dy*i,s=r.r*(.75+.25*Math.sin(i*Math.PI));if(r.content===`collapsed`){J(n,a,o,s,s,0,60,c);continue}J(n,a,o,s,s,0,60,c);let l=o-s*.35,u=s*(e.path===`sbo`?.9:.72);J(n,a,o,u,u,0,r.content===`fluid`?15:r.content===`air`?-900:(e,t,n)=>n<l?-920:15,c)}let p=$d(t,.78,1.08);if(p>0&&J(n,0,-.08,.2*p,.15*p,0,8,c),r===`freeair`&&ef(t,.05,.55)){let e=c.cy-c.ry,r=.05+.06*$d(t,.05,.55);J(n,c.cx,c.cy,c.rx,c.ry,0,(t,n,i)=>i<e+r*(1-n*n/(c.rx*c.rx)*.9)?-980:t),ef(t,.15,.3)&&J(n,-.12,-.28,.02,.015,0,-980,c)}if(r===`collection`&&ef(t,.56,.76)){let e=$d(t,.56,.76);J(n,-.32,0,.19*e,.17*e,.3,(e,t,n)=>e<-60?e+45+(Zd(t*80,n*80,5)-.5)*60:e,c),J(n,-.32,0,.11*e,.09*e,.3,(e,t,n,r,i,a)=>a>.82?130:i<-.55&&a<.7?-900:20,c)}if(r===`appendicitis`&&ef(t,.64,.8)){let e=(t-.64)/.16,r=-.37+.05*e,i=.05-.04*e;J(n,r,i,.11,.1,0,(e,t,n)=>e<-60?e+50+(Zd(t*80,n*80,9)-.5)*70:e,c),J(n,r,i,.045,.045,0,(e,t,n,r,i,a)=>a>.6?125:22),ef(t,.69,.71)&&J(n,r,i,.016,.016,0,950)}if(r===`necfasc`&&ef(t,.62,.98)){let e=$d(t,.62,.98);J(n,-.6,-.18,.32*e+.08,.36*e+.08,.5,(e,t,n)=>{if(((t-c.cx)/c.rx)**2+((n-c.cy)/c.ry)**2<=1||e<-500)return e;let r=Zd(t*110,n*110,31);return r<.09?-950:r<.13?-600:e<-50?-35+(Zd(t*60,n*60,32)-.5)*50:e+15})}if(r===`fork`&&ef(t,.08,.26)){let r=(t-.08)/.18,i=.14+.2*r,a=-.12;if(r<.6)nf(n,i,a,.013,.013,0,3e3);else for(let e=0;e<4;e++)nf(n,i+(e-1.5)*.02,a,.006,.006,0,3e3);rf(n,i,a,450,e.metalSeed)}return r===`pager`&&ef(t,.12,.22)&&(nf(n,.24,-.12,.07,.035,.3,(e,t,n,r,i)=>Math.abs(r)>.85||Math.abs(i)>.7?2500:400),rf(n,.24,-.12,380,e.metalSeed)),r===`sandwich`&&ef(t,.08,.24)&&nf(n,.24,-.12,.12,.07,-.25,(e,t,n,r,i)=>Math.abs(i)>.55?Zd(t*90,n*90,21)<.35?-600:-150:Math.abs(i)>.3?170:Zd(t*40,n*40,22)<.5?55:-80),n}function lf(e,t){e.sulci=[];for(let n=0;n<70;n++)e.sulci.push({a:t()*Math.PI*2,rr:.86+t()*.1,z0:t()*.75,len:.05+t()*.12});e.side=t()<.5?-1:1,e.lesionN={edh:{x:.5*e.side,y:-.15,r:.2,z0:.25,z1:.55},sdh:{x:.52*e.side,y:.05,r:.25,z0:.12,z1:.66},infarct:{x:.3*e.side,y:-.05,r:.28,z0:.3,z1:.62},sah:{x:0,y:-.05,r:.25,z0:.6,z1:.8}}[e.path]||null}function uf(e,t){let n=of(),r=e.path,i=t<.45?.45+.55*Math.sin(Math.min(1,(t+.03)/.48)*Math.PI/2):t<.78?1:1-(t-.78)*.5,a=.7*i,o=.86*i;J(n,0,0,a+.04,o+.04,0,35),J(n,0,0,a,o,0,1300);let s={cx:0,cy:0,rx:a-.06,ry:o-.06};J(n,0,0,s.rx,s.ry,0,38);let c=r===`edh`||r===`sdh`?-.07*e.side*$d(t,.05,.75):0;if(t<.74){J(n,c*.6,0,s.rx*.78,s.ry*.8,0,(e,t,n)=>28+(Zd(t*40,n*40,2)-.5)*4,s);for(let r of e.sulci)ef(t,r.z0,r.z0+r.len)&&J(n,Math.cos(r.a)*s.rx*r.rr,Math.sin(r.a)*s.ry*r.rr,.035,.012,r.a+Math.PI/2,8,s);nf(n,c,0,.006,s.ry*.95,0,65)}if(ef(t,.32,.62)){let e=$d(t,.3,.64);J(n,-.09+c,-.05,.055*e+.01,.3*e,.18,6),J(n,.09+c,-.05,.055*e+.01,.3*e,-.18,6)}if(ef(t,.56,.68)&&J(n,c,.05,.014,.09,0,6),t>.72&&(J(n,0,.36,.42*i,.3*i,0,40,s),J(n,0,.08,.1,.09,0,34),J(n,0,.22,.03,.025,0,6),t>.8&&(J(n,-.3,.12,.28,.05,.7,1500),J(n,.3,.12,.28,.05,-.7,1500)),ef(t,.76,.95))){for(let e of[-.3,.3])J(n,e,-.72,.15,.14,0,-85),J(n,e,-.74,.11,.11,0,12),J(n,e,-.84,.035,.015,0,70);J(n,0,-.35,.1,.09,0,-950)}if(ef(t,.6,.74)&&J(n,0,-o+.03,.08,.035,0,-950),r===`edh`&&ef(t,.25,.55)){let r=$d(t,.25,.55);J(n,s.rx*.92*e.side,-.15,.13*r,.32*r,0,72,s)}if(r===`sdh`&&ef(t,.12,.66)){let r=$d(t,.12,.66);J(n,0,0,s.rx,s.ry,0,(t,n,i,a,o,s)=>s>1-.13*r&&n*e.side>.05?66:t)}if(r===`infarct`&&ef(t,.3,.62)){let r=$d(t,.3,.62);J(n,.34*e.side,-.05,.26*r,.33*r,.3*e.side,e=>e>10&&e<50?17:e,s)}return r===`sah`&&ef(t,.6,.8)&&(J(n,0,-.05,.2,.2,0,(e,t,n,r,i,a)=>a>.55&&a<.8?68:e),nf(n,-.2,-.12,.16,.012,.35,68),nf(n,.2,-.12,.16,.012,-.35,68),nf(n,0,-.3,.012,.1,0,68)),n}function df(e,t){e.dots=[];for(let n=0;n<220;n++){let r=n%2?1:-1,i=t()*Math.PI*2,a=Math.sqrt(t())*.95;e.dots.push({side:r,ux:Math.cos(i)*a,uy:Math.sin(i)*a,z0:t()*1,len:.04+t()*.08,r:.008+.018*(1-a)})}e.side=t()<.5?-1:1,e.lesionN={ptx:{x:-.55,y:-.05,r:.2,z0:.05,z1:.8},pe:{x:-.12,y:.02,r:.12,z0:.35,z1:.47},mass:{x:.4,y:-.12,r:.1,z0:.24,z1:.38},consolidation:{x:-.36,y:.28,r:.2,z0:.6,z1:.92}}[e.path]||null}function ff(e,t){let n=of(),r=e.path;J(n,0,.05,.9,.58,0,35),J(n,0,.05,.87,.55,0,-100),J(n,0,.06,.8,.49,0,50),J(n,0,.07,.74,.44,0,-90);let i=t<.35?.4+.6*Math.sin(t/.35*Math.PI/2):t<.8?1:1-(t-.8)*2.2,a=[{side:-1,cx:-.36,cy:.07,rx:.33*i,ry:.4*Math.min(1,i+.2)},{side:1,cx:.36,cy:.07,rx:.31*i,ry:.4*Math.min(1,i+.2)}];for(let e of a)r===`ptx`&&e.side===-1&&(J(n,e.cx,e.cy,e.rx,e.ry,0,-1e3),e.cx+=.1,e.rx*=.62,e.ry*=.75),J(n,e.cx,e.cy,e.rx,e.ry,0,(e,t,n)=>-860+(Zd(t*120,n*120,4)-.5)*40);for(let r of e.dots){if(!ef(t,r.z0,r.z0+r.len))continue;let e=a[r.side<0?0:1];J(n,e.cx+r.ux*e.rx,e.cy+r.uy*e.ry,r.r,r.r,0,40,e)}t>.82&&J(n,-.32,.12,.36*Qd(.82,1,t),.3*Qd(.82,1,t),0,105,{cx:0,cy:.07,rx:.74,ry:.44});for(let e=0;e<18;e++){let r=e/18*Math.PI*2+t*.8;J(n,Math.cos(r)*.77,.07+Math.sin(r)*.47,.035,.02,r,(e,t,n,r,i,a)=>a>.6?800:250)}t<.45&&(tf(n,-.55,.38,.2,.025,.35,700,300,.5),tf(n,.55,.38,.2,.025,-.35,700,300,.5)),tf(n,0,.42,.085,.075,0,850,260,.22),J(n,0,.53,.04,.035,0,10),tf(n,0,.6,.02,.05,0,850,300,.5),J(n,.02,.02,.17,.3,0,-70),t<.33?J(n,0,-.08,.05,.045,0,-1e3):t<.46&&(J(n,-.1,.03,.03,.03,0,-1e3),J(n,.1,.03,.03,.03,0,-1e3)),ef(t,.12,.2)&&J(n,.05,.02,.17,.05,.5,170),ef(t,.2,.48)&&J(n,0,-.1,.07,.07,0,170),t>.15&&J(n,.14,.3,.055,.055,0,170),ef(t,.08,.42)&&J(n,-.11,-.08,.04,.04,0,320),ef(t,.3,.44)&&J(n,.08,-.12,.075,.075,0,330),ef(t,.36,.47)&&J(n,-.14,.02,.18,.042,.12,330),ef(t,.33,.42)&&J(n,.2,.02,.1,.045,-.2,330);let o=$d(t,.42,.95);if(o>0&&(J(n,.1,-.06,.31*o,.24*o,.4,48),J(n,.02,-.14,.12*o,.09*o,.4,300),J(n,.2,-.02,.1*o,.1*o,.4,150)),r===`pe`&&ef(t,.36,.47)&&(J(n,-.13,.02,.05,.028,.12,35),ef(t,.36,.42)&&J(n,.21,.02,.035,.025,-.2,35)),r===`mass`&&ef(t,.24,.38)){let e=$d(t,.24,.38);J(n,.4,-.12,.08*e,.07*e,.4,40);for(let t=0;t<7;t++){let r=t*.9;nf(n,.4+Math.cos(r)*.09*e,-.12+Math.sin(r)*.08*e,.04*e,.004,r,30)}}if(r===`consolidation`&&ef(t,.6,.92)){let e=$d(t,.6,.92);J(n,-.36,.26,.26*e,.18*e,0,(e,t,n)=>e<-500?32+(Zd(t*60,n*60,8)-.5)*20:e,a[0]),nf(n,-.33,.22,.12*e,.008,.5,e=>e>0&&e<60?-900:e),nf(n,-.4,.3,.1*e,.008,-.3,e=>e>0&&e<60?-900:e)}return n}function pf(e,t){e.lesionN=e.path===`effusion`?{x:0,y:.02,r:.3,z0:.12,z1:.88}:null,e.tilt=(t()-.5)*.2}function mf(e,t){let n=new Float32Array(65536).fill(0),r=e.path===`effusion`?$d(t,.1,.9):0,i=(t-.5)*.12;for(let a=0;a<256;a++){let o=(a+.5)/Yd-1;for(let s=0;s<256;s++){let c=(s+.5)/Yd-1,l=Math.atan2(c,o+1.05),u=Math.hypot(c,o+1.05);if(Math.abs(l)>.62||u<.1||u>1.95)continue;let d=.55+Zd(s*3,a*2,71+Math.floor(t*23))*.9,f=c+e.tilt*o,p=.12+.2*f*f+i,m=p-.05-.2*r*Math.exp(-f*f*5),h;h=o<-.9?150:o<-.8?45:o<m?62+12*Math.sin(o*95+f*9)+8*Math.sin(o*31-f*4):o<m+.025?170:o<p-.02?r>.05?6+(Zd(s,a,9)<.03?40:0):70:o<p+.03?235:8,n[a*256+s]=h*d*(1-u*.18)}}return n}function hf(e,t){e.rng=t,e.vessels=[];for(let n=0;n<90;n++){let r=n%2?1:-1;e.vessels.push({side:r,a:-.5+t()*2.4,len:.12+t()*.3,w:.004+t()*.006})}e.lesionN={ptx:{x:-.55,y:-.35,r:.28,z0:0,z1:1},consolidation:{x:.42,y:.2,r:.2,z0:0,z1:1},freeair:{x:-.35,y:.5,r:.2,z0:0,z1:1},pleural:{x:-.4,y:.5,r:.22,z0:0,z1:1}}[e.path]||null}function gf(e){let t=new Float32Array(65536).fill(12),n=e.path,r=e=>t=>t+e;nf(t,0,.1,.8,.95,0,105),J(t,0,-.78,.95,.3,0,105),J(t,0,.9,.85,.35,0,125);let i=[{side:-1,cx:-.34,cy:-.02,rx:.27,ry:.56},{side:1,cx:.34,cy:-.02,rx:.26,ry:.54}];n===`ptx`&&(J(t,i[0].cx,i[0].cy,i[0].rx,i[0].ry,0,20),i[0].cx+=.07,i[0].rx*=.62,i[0].ry*=.85,i[0].cy+=.05);for(let e of i)J(t,e.cx,e.cy,e.rx,e.ry,0,(t,n,r)=>34+30*Math.exp(-Math.hypot(n-e.side*.12,r+.05)*3.5)+(Zd(n*90,r*90,5)-.5)*10);n===`ptx`&&J(t,i[0].cx,i[0].cy,i[0].rx,i[0].ry,0,(e,t,n,r,i,a)=>a>.96?e+55:e);for(let n of e.vessels){let e=i[n.side<0?0:1],r=Math.cos(n.a)*n.side,a=Math.sin(n.a);nf(t,n.side*.14+r*n.len*.5,-.05+a*n.len*.5,n.len*.5,n.w,Math.atan2(a,r),(t,n,r)=>((n-e.cx)/e.rx)**2+((r-e.cy)/e.ry)**2<1?t+9:t)}J(t,.07,.28,.3,.24,-.2,150),nf(t,0,-.35,.09,.45,0,150),nf(t,0,.05,.055,1,0,(e,t,n)=>e+45+(Math.sin(n*38)>.75?25:0)),J(t,-.35,.72,.36,.2,0,135),J(t,.35,.74,.34,.18,0,128),n!==`freeair`&&J(t,.36,.64,.08,.05,0,40);for(let e=0;e<9;e++)for(let n of[-1,1]){let i=-.64+e*.12,a=.07,o=i;for(let e=1;e<=8;e++){let s=e/8,c=.07+s*.66,l=i-.07*Math.sin(Math.PI*s*.9)+.16*s*s;nf(t,n*(a+c)/2,(o+l)/2,Math.hypot(c-a,l-o)/2+.004,.011,Math.atan2(l-o,(c-a)*n),r(28)),a=c,o=l}}return nf(t,-.3,-.72,.26,.02,-.15,r(60)),nf(t,.3,-.72,.26,.02,.15,r(60)),n===`consolidation`&&J(t,.42,.2,.17,.16,.2,(e,t,n,r,i,a)=>e<110?e+95*(1-a*a*.6)+(Zd(t*40,n*40,8)-.5)*25:e),n===`pleural`&&J(t,-.36,.72,.34,.3,0,(e,t,n)=>n>.42+(t+.62)*-.25&&e<120?125:e),n===`freeair`&&J(t,-.35,.56,.3,.07,0,(e,t,n,r,i)=>i>-.2&&e>120?22:e),t}function _f(e){return e<-500?20:e>600?60:e<-50?700:e<12?950:e<22?820:e<33?430:e<45?560:e<90?180:300}function vf(e,t){let n=uf(e,t);for(let e=0;e<n.length;e++)n[e]=_f(n[e]);return n}var yf={abdo:{n:64,setup:sf,draw:cf,fov:420,window:`Soft tissue`,noise:22},head:{n:36,setup:lf,draw:uf,fov:230,window:`Brain`,noise:6},chest:{n:56,setup:df,draw:ff,fov:380,window:`Soft tissue`,noise:18},us:{n:24,setup:pf,draw:mf,fov:60,window:`US`,noise:6},xr:{n:1,setup:hf,draw:gf,fov:430,window:`X-ray`,noise:4},mr:{n:30,setup:lf,draw:vf,fov:230,window:`MR`,noise:18}},bf={"Soft tissue":{ww:400,wl:40},Lung:{ww:1500,wl:-600},Bone:{ww:2e3,wl:500},Brain:{ww:80,wl:40},US:{ww:256,wl:128},"X-ray":{ww:230,wl:115},MR:{ww:1e3,wl:480}};function xf({modality:e,path:t,seed:n}){let r=yf[e],i=Xd(n),a={modality:e,path:t,seed:n,n:r.n,fov:r.fov,defaultWindow:r.window,cache:new Map};if(r.setup(a,i),a.lesionN){let e=a.lesionN;a.lesion={x:e.x,y:e.y,r:e.r,s0:Math.floor(e.z0*(a.n-1)),s1:Math.ceil(e.z1*(a.n-1))}}return a.get=e=>{let t=a.cache.get(e);return t||(t=af(r.draw(a,e/(a.n-1)),e,n,r.noise),a.cache.set(e,t)),t},a}function Sf(e,t,n,r){let i=n-t/2,a=255/t,o=r.data;for(let t=0,n=0;t<e.length;t++,n+=4){let r=(e[t]-i)*a;r=r<0?0:r>255?255:r,o[n]=o[n+1]=o[n+2]=r,o[n+3]=255}return r}var Cf={abdo:`CT Abdomen/Pelvis`,head:`CT Brain (non-con)`,chest:`CT Pulmonary Angiogram`,us:`US-guided hip aspirate`,xr:`Chest X-ray (PA erect)`,mr:`MRI Brain (stroke protocol)`},wf={abdo:{normal:`No acute abnormality`,freeair:`Pneumoperitoneum (perforation)`,collection:`Intra-abdominal collection`,sbo:`Small bowel obstruction`,aaa:`Abdominal aortic aneurysm`,appendicitis:`Acute appendicitis`,renal_stone:`Obstructing ureteric calculus`,necfasc:`Soft-tissue gas (necrotising fasciitis)`,fork:`Ingested foreign body: fork`,pager:`Ingested foreign body: pager`,sandwich:`Intragastric sandwich`},head:{normal:`No acute intracranial abnormality`,edh:`Extradural haematoma`,sdh:`Subdural haematoma`,infarct:`Acute territorial infarct`,sah:`Subarachnoid haemorrhage`},chest:{normal:`No pulmonary embolism`,pe:`Pulmonary emboli`,ptx:`Pneumothorax`,mass:`Spiculated lung mass`,consolidation:`Consolidation / pneumonia`},xr:{normal:`No acute cardiopulmonary abnormality`,ptx:`Pneumothorax`,consolidation:`Consolidation`,freeair:`Free gas under the diaphragm`,pleural:`Pleural effusion`},mr:{normal:`No acute intracranial abnormality`,infarct:`Acute infarct (bright on T2/DWI)`},us:{normal:`No effusion: aspirate not indicated`,effusion:`Hip effusion: aspirated (it's pus)`}},Tf=new Set([`fork`,`pager`,`sandwich`]),Ef={abdo:{freeair:[`2/7 post colonoscopy, now rigid abdo + tachy`,`known PUD, sudden severe epigastric pain, board-like abdo`],collection:[`5/7 post lap chole, fevers, RUQ/RIF pain, CRP 240`,`post appendicectomy D6, swinging fevers`],sbo:[`vomiting x2/7, not passing flatus, distended. Multiple prev laparotomies`,`colicky pain + faeculent vomit (sorry)`],aaa:[`sudden back pain radiating to groin, BP 95/60, ?pulsatile mass`,`known 4.8cm AAA, now tearing back pain`],appendicitis:[`periumbilical pain migrating to RIF, anorexic, WCC 15`,`RIF pain, rebound, Rovsing +ve`],renal_stone:[`loin to groin pain, writhing, haematuria`,`colicky flank pain, can't sit still, microscopic haematuria`],necfasc:[`diabetic, R groin/flank pain out of proportion, crepitus?, HR 125`,`rapidly spreading erythema R flank, dusky skin, septic, pain >> signs`],normal:[`vague abdo pain x3 weeks, "just want a scan"`,`abdo pain, LFTs mildly deranged, ?anything`]},head:{edh:[`fell off e-scooter, lucid interval, now GCS 12`,`hit by cricket ball to temple, vomiting`],sdh:[`on apixaban, fall from standing, new confusion`,`recurrent falls, increasingly drowsy x3 days`],infarct:[`CODE STROKE: sudden R arm weakness + aphasia, onset 1h`,`facial droop + slurred speech, LKW 22:40`],sah:[`thunderclap headache, "worst of my life", neck stiffness`,`sudden headache during exertion (don't ask)`],normal:[`headache, wants a scan "just to be safe"`,`minor head knock, GCS 15, on no anticoags, family insisting`]},chest:{pe:[`post-op D4, tachycardic, SpO2 89% RA, D-dimer ++`,`long-haul flight, pleuritic pain, calf swelling`],ptx:[`tall thin male, sudden pleuritic pain + SOB`,`pleuritic CP after coughing fit, reduced AE R`],mass:[`smoker 40 pack yrs, haemoptysis, weight loss`,`incidental opacity on CXR, ?PE while we're at it`],consolidation:[`fever, productive cough, crackles R base`,`SOB + febrile, ?PE ?pneumonia ?both`],normal:[`chest pain, trop neg x2, "just rule it out"`,`pleuritic pain, Wells low, D-dimer 0.6 (age-adjusted fine?)`]},xr:{ptx:[`sudden pleuritic pain + SOB, tall and thin`,`pleuritic pain after coughing, reduced AE`],consolidation:[`fever, productive cough, crackles L base`,`febrile, SOB, CRP 180`],freeair:[`sudden epigastric pain, board-like abdo, ?perf`,`known PUD, now severe pain. Erect CXR please`],pleural:[`SOB, orthopnoea, known heart failure`,`dull to percussion R base, SOB`],normal:[`cough x2 weeks, afebrile, sats 98%`,`"pre-op" CXR. At 3am. For a toenail.`]},mr:{infarct:[`CT brain normal, persistent dysphasia, ?stroke`,`wake-up stroke, CT normal, R arm weakness`],normal:[`dizzy, CT brain normal, ?posterior circulation stroke`,`headache, CT normal, neuro "want an MRI tonight"`]},us:{effusion:[`hot swollen R hip, febrile 39.2, can't weight bear, CRP 180`,`R hip held flexed + ext rotated, rigors, CRP 220`],normal:[`R hip pain after gardening, afebrile, walked in, CRP 12`,`"hip feels funny", mobilising, bloods normal`]}},Df={abdo:[`Exclude perforation`,`Exclude collection`,`?SBO`,`Exclude AAA / rupture`,`?Appendicitis`,`?Renal colic`,`?Nec fasc`,`?Cause`],us:[`?Septic arthritis: aspirate please`,`US hip + aspirate ?effusion`],xr:[`?Pneumonia`,`?Pneumothorax`,`Erect CXR ?free gas`,`?Effusion`,`CXR please`],mr:[`?Stroke (CT negative)`,`MRI brain ?posterior circulation stroke`],head:[`Exclude bleed`,`Exclude haemorrhage`,`Code stroke: ?infarct ?bleed`,`?SAH`,`Exclude intracranial pathology`],chest:[`Exclude PE`,`?PE`,`Exclude PE ?other cause`,`CTPA please`]},Of={fork:[`swallowed a fork on a dare. "It was a small fork."`,`ate dinner "too enthusiastically", now 1 fork missing`],pager:[`swallowed the ED registrar's pager "to make it stop"`,`pt states pager "fell in". Pager still beeping.`],sandwich:[`states sandwich "went down wrong". Wants it back.`,`ate sandwich whole in 1 bite for TikTok`]},kf=[`Alex`,`Sam`,`Jordan`,`Robin`,`Casey`,`Morgan`,`Priya`,`Tomasz`,`Mei`,`Oluwaseun`,`Freya`,`Dmitri`,`Ana`,`Keanu`,`Niamh`,`Rahul`,`Zara`,`Bartholomew`,`Ingrid`,`Kofi`,`Luca`,`Yuki`,`Fatima`,`Declan`],Af=[`Pemberton`,`Nakamura`,`Okafor`,`Quill`,`Van Dyke`,`Ferreira`,`Kowalczyk`,`Abernathy`,`Lindqvist`,`Moreau`,`Tanaka`,`Haddad`,`Bishop`,`Crumble`,`Wibberley`,`Sprocket`,`Oyelaran`,`Thistlewood`,`Mbeki`,`Castellano`],jf=[`ED Bed 3`,`ED Bed 7`,`ED Bed 11`,`Resus 1`,`Resus 2`,`Resus 4`,`Fast Track 2`,`Corridor 6`,`Short Stay 9`,`Waiting Room (chair 14)`],Mf=(e,t=Math.random)=>e[Math.floor(t()*e.length)],Nf=1,Pf=1e3;function Ff(){return`${Mf(Af).toUpperCase()}, ${Mf(kf)}`}function If(e){let t=0;for(let[,n]of e)t+=n;let n=Math.random()*t;for(let[t,r]of e)if((n-=r)<=0)return t;return e[0][0]}function Lf({requester:e,gameMinutes:t,forced:n}={}){let r,i;if(n)({modality:r,path:i}=n);else{r=If([[`abdo`,40],[`head`,25],[`chest`,20],[`xr`,18],[`us`,7],[`mr`,5]]);let e=Object.keys(wf[r]).filter(e=>!Tf.has(e));i=Math.random()<.28?`normal`:Mf(e.filter(e=>e!==`normal`)),r===`abdo`&&Math.random()<.06&&(i=Mf([`fork`,`pager`,`sandwich`]))}let a=Math.random()<.5?`F`:`M`,o=i===`ptx`?19+Math.floor(Math.random()*12):18+Math.floor(Math.random()*72),s,c;if(Tf.has(i))s=Mf(Of[i]),c=`Exclude foreign body (please)`;else{let e=Math.random()<.65?i:Mf(Object.keys(Ef[r]));s=Mf(Ef[r][e]),c=Mf(Df[r]),e===`necfasc`?c=`?Nec fasc (urgent)`:e===`appendicitis`&&Math.random()<.7&&(c=`?Appendicitis`)}let l=[];a===`F`&&o<50&&Math.random()<.35&&l.push(`Pregnancy status not documented`),(r===`abdo`||r===`chest`)&&Math.random()<.12&&l.push(`eGFR 24, contrast not approved`),Math.random()<.12&&l.push(`Pager field blank (mandatory)`);let u={id:Nf++,patient:Ff(),age:o,sex:a,urn:`URN `+(1e6+Math.floor(Math.random()*8999999)),modality:r,path:i,study:Cf[r],clinical:`${o}${a} ${s}`,question:c,location:Mf(jf),requester:e||`Dr `+Mf(kf)+` `+Mf(Af),consultant:`Dr `+Mf(Af),pager:l.includes(`Pager field blank (mandatory)`)?``:String(4e3+Math.floor(Math.random()*999)),arrived:t||0,redFlags:l,pregnantTicked:a===`F`&&o<50&&!l.includes(`Pregnancy status not documented`),seed:Pf++*7919,reported:!1,study3d:null};return u.joke=Tf.has(i),u}function Rf(e){return e.study3d||=xf({modality:e.modality,path:e.path,seed:e.seed}),e.study3d}var zf=e=>String(e).replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]),Bf=e=>`<span class="cb${e?` on`:``}">${e?`✕`:``}</span>`;function Vf(e){let t=`M4 26`,n=4,r=e,i=()=>(r=r*16807%2147483647,r/2147483647);for(let e=0;e<9;e++)n+=10+i()*14,t+=` Q ${n-6} ${4+i()*30} ${n} ${10+i()*20}`;return`<svg viewBox="0 0 ${n+10} 40" class="sig"><path d="${t}" fill="none" stroke="#1a2a6b" stroke-width="2"/></svg>`}function Hf(e){let t=(1320+Math.floor(e))%1440;return`${String(Math.floor(t/60)).padStart(2,`0`)}:${String(t%60).padStart(2,`0`)}`}function Uf(e){let t=/exclude/i.test(e.question);return`
  <div class="paper">
    <div class="paper-head">
      <div><div class="paper-title">Medical Imaging Request</div><div class="paper-sub">RadsSim General Hospital · Emergency Department</div></div>
      <div class="barcode"></div>
    </div>
    <div class="paper-grid">
      <div class="label-sticker">
        <b>${zf(e.patient)}</b><br>${zf(e.urn)} · ${e.age}${e.sex}<br>${zf(e.location)}<br><span class="muted">Printed ${Hf(e.arrived)}</span>
      </div>
      <div class="field"><div class="flabel">Priority</div>${Bf(!1)} Routine ${Bf(!0)} Urgent</div>
    </div>
    <div class="field"><div class="flabel">Imaging requested</div><div class="hand big">${zf(e.study)}</div></div>
    <div class="field"><div class="flabel">Imaging is needed to <span class="muted">(tick one and explain)</span></div>
      ${Bf(!1)} Assess progress ${Bf(!1)} Confirm ${Bf(!1)} Define ${Bf(t)} Exclude
      <div class="hand">${zf(e.question)}</div></div>
    <div class="paper-grid">
      <div class="field"><div class="flabel">Mandatory</div>
        <div>Pregnant? ${Bf(e.sex===`M`||e.pregnantTicked)} No ${Bf(!1)} Yes</div>
        <div>Infectious? ${Bf(!0)} No ${Bf(!1)} Yes</div>
        <div>Allergies? ${Bf(e.seed%10<7)} No ${Bf(!1)} Yes</div>
      </div>
      <div class="field"><div class="flabel">Clinical details <span class="muted">(include relevant surgery, imaging, pathology)</span></div>
        <div class="hand">${zf(e.clinical)}</div></div>
    </div>
    <div class="field"><div class="flabel">Risk factors for CT / MRI</div>
      ${e.redFlags.includes(`eGFR 24, contrast not approved`)?`${Bf(!0)} Hx renal insufficiency · Creatinine <span class="hand">310</span> eGFR <span class="hand">24</span> · Approved by Dr ________`:`${Bf(!0)} Nil`}
    </div>
    <div class="paper-grid">
      <div class="field"><div class="flabel">Requested by</div><div class="hand">${zf(e.requester)}</div>${Vf(e.seed)}</div>
      <div class="field"><div class="flabel">Consultant</div><div class="hand">${zf(e.consultant)}</div>
        <div class="flabel" style="margin-top:6px">Pager / phone (mandatory)</div><div class="hand">${e.pager?zf(e.pager):`&nbsp;`}</div></div>
    </div>
    <div class="field protocol"><div class="flabel">Radiologist protocol / initial</div>
      ${e.accepted?`<div class="hand stamp">${Bf(!0)} Today · CT ${e.modality===`head`?`B`:e.modality===`chest`?`PA`:`AP PV`} · <b>ON-CALL</b></div>`:`<div class="muted">(awaiting you)</div>`}
    </div>
  </div>`}function Wf(e,{mode:t=`view`,onAccept:n,onBounce:r,onNod:i,onClose:a}={}){let o=document.getElementById(`form-modal`),s=document.getElementById(`form-body`),c=document.getElementById(`form-actions`);s.innerHTML=Uf(e),c.innerHTML=``;let l=(e,t,n)=>{let r=document.createElement(`button`);r.textContent=e,r.className=t,r.disabled=!0,r.onclick=()=>{r.disabled||(Gf(),n?.())},c.appendChild(r)};t===`registrar`?(l(`Accept: "I'll look at it now"`,`primary`,n),l(`Bounce: "What's the actual question?"`,``,r),l(`Nod and smile`,`ghost`,i)):l(`Close`,`ghost`,a),o.hidden=!1,setTimeout(()=>{for(let e of c.querySelectorAll(`button`))e.disabled=!1},450)}function Gf(){document.getElementById(`form-modal`).hidden=!0}var Kf=e=>document.getElementById(e),qf=class{constructor(e){this.G=e,this.el=Kf(`pacs`),this.view=Kf(`pacs-view`),this.vctx=this.view.getContext(`2d`),this.small=document.createElement(`canvas`),this.small.width=this.small.height=256,this.sctx=this.small.getContext(`2d`),this.img=this.sctx.createImageData(256,256),this.current=null,this.slice=0,this.ww=400,this.wl=40,this.tool=`scroll`,this.mark=null,this.choice=null,this.monA=document.createElement(`canvas`),this.monA.width=640,this.monA.height=384,this.monB=document.createElement(`canvas`),this.monB.width=640,this.monB.height=384,this.texA=new Ei(this.monA),this.texB=new Ei(this.monB),this.texA.colorSpace=this.texB.colorSpace=Re,e.world.pacsScreens[0].material=new Wr({map:this.texA}),e.world.pacsScreens[1].material=new Wr({map:this.texB}),this.bind()}bind(){let e=this.view,t=null;e.addEventListener(`wheel`,e=>{e.preventDefault(),this.scroll(Math.sign(e.deltaY))},{passive:!1}),e.addEventListener(`contextmenu`,e=>e.preventDefault()),e.addEventListener(`pointerdown`,n=>{if(!this.current)return;let r=e.getBoundingClientRect();if(this.tool===`mark`&&n.button===0){let e=(n.clientX-r.left)/r.width*2-1,t=(n.clientY-r.top)/r.height*2-1;this.mark={x:e,y:t,slice:this.slice},K.click(),this.draw(),this.updateMarkHint();return}t={x:n.clientY,y:n.clientY,sx:n.clientX,mode:n.button===2||this.tool===`wl`?`wl`:`scroll`,acc:0},e.setPointerCapture(n.pointerId)}),e.addEventListener(`pointermove`,e=>{if(!t)return;let n=e.clientY-t.y,r=e.clientX-t.sx;if(t.mode===`scroll`)for(t.acc+=n;Math.abs(t.acc)>6;)this.scroll(Math.sign(t.acc)),t.acc-=Math.sign(t.acc)*6;else this.ww=Math.max(20,this.ww+r*4),this.wl+=n*2,this.draw();t.y=e.clientY,t.sx=e.clientX}),e.addEventListener(`pointerup`,()=>{t=null}),Kf(`pacs-slider`).addEventListener(`input`,e=>{this.slice=+e.target.value,this.draw()});for(let e of document.querySelectorAll(`[data-tool]`))e.onclick=()=>this.setTool(e.dataset.tool);for(let e of document.querySelectorAll(`[data-win]`))e.onclick=()=>this.setWindow(e.dataset.win);Kf(`pacs-close`).onclick=()=>this.G.closePacs(),Kf(`pacs-sign`).onclick=()=>this.sign(),Kf(`pacs-nad`).onclick=()=>this.speedReport(),Kf(`pacs-form`).onclick=()=>{this.current&&Wf(this.current,{mode:`view`})},window.addEventListener(`keydown`,e=>{!this.el.hidden&&Kf(`form-modal`).hidden&&((e.code===`ArrowUp`||e.code===`PageUp`)&&(this.scroll(-1),e.preventDefault()),(e.code===`ArrowDown`||e.code===`PageDown`)&&(this.scroll(1),e.preventDefault()),e.code===`Digit1`&&this.setWindow(`Soft tissue`),e.code===`Digit2`&&this.setWindow(`Lung`),e.code===`Digit3`&&this.setWindow(`Bone`),e.code===`Digit4`&&this.setWindow(`Brain`),e.code===`KeyM`&&this.setTool(this.tool===`mark`?`scroll`:`mark`),(e.code===`Escape`||e.code===`KeyE`)&&performance.now()-this.openedAt>300&&this.G.closePacs())})}open(){this.openedAt=performance.now(),this.el.hidden=!1,Kf(`pacs-error`).hidden=!(this.G.pacsWet>0);let e=this.queue();(!this.current||this.current.reported)&&this.select(e[0]||null),this.renderList(),this.draw()}close(){this.el.hidden=!0}queue(){return this.G.openCases()}setTool(e){this.tool=e;for(let t of document.querySelectorAll(`[data-tool]`))t.classList.toggle(`on`,t.dataset.tool===e);this.view.style.cursor=e===`mark`?`crosshair`:e===`wl`?`move`:`ns-resize`}setWindow(e){let t=bf[e];this.ww=t.ww,this.wl=t.wl;for(let t of document.querySelectorAll(`[data-win]`))t.classList.toggle(`on`,t.dataset.win===e);this.draw()}select(e){if(this.current&&this.current!==e&&this.current.study3d&&this.current.study3d.cache.clear(),this.current=e,this.mark=null,this.choice=null,e){let t=Rf(e);this.slice=Math.floor(t.n*.3),Kf(`pacs-slider`).max=t.n-1,Kf(`pacs-slider`).value=this.slice,this.setWindow(t.defaultWindow)}this.setTool(`scroll`),this.renderReport(),this.renderList(),this.draw()}scroll(e){if(!this.current)return;let t=Rf(this.current),n=Math.max(0,Math.min(t.n-1,this.slice+e));n!==this.slice&&(this.slice=n,Kf(`pacs-slider`).value=n,this.draw())}renderList(){let e=Kf(`pacs-rows`),t=this.queue();Kf(`pacs-count`).textContent=t.length;let n=this.G.time;e.innerHTML=``,t.length||(e.innerHTML=`<div class="pacs-empty">Worklist clear. Enjoy it while it lasts.</div>`);for(let r of t){let t=Math.floor(n-r.arrived),i=document.createElement(`button`);i.className=`pacs-row`+(r===this.current?` sel`:``)+(t>120?` late`:t>60?` warn`:``),i.innerHTML=`<span class="pr-dot"></span><span class="pr-main"><b>${r.patient}</b><small>${r.study} · ${r.location}</small></span><span class="pr-wait">${Math.floor(t/60)}h${String(t%60).padStart(2,`0`)}</span>`,i.onclick=()=>this.select(r),e.appendChild(i)}}renderReport(){let e=this.current,t=Kf(`pacs-req`),n=Kf(`pacs-findings`);if(n.innerHTML=``,Kf(`pacs-feedback`).textContent=``,!e){t.innerHTML=`<p class="muted">No study selected.</p>`,Kf(`pacs-sign`).disabled=!0;return}t.innerHTML=`<p><b>${e.study}</b></p><p class="hand-sm">${e.clinical}</p><p><span class="muted">Q:</span> ${e.question}</p><p class="muted">From ${e.requester} · ${e.location}</p>`;let r=Object.entries(wf[e.modality]).filter(([t])=>e.modality!==`abdo`||![`fork`,`pager`,`sandwich`].includes(t)||e.joke);for(let[e,t]of r){let r=`f-`+e,i=document.createElement(`label`);i.className=`finding`,i.innerHTML=`<input type="radio" name="finding" id="${r}" value="${e}"> <span>${t}</span>`,i.querySelector(`input`).onchange=()=>{this.choice=e,Kf(`pacs-sign`).disabled=!1,this.updateMarkHint()},n.appendChild(i)}Kf(`pacs-sign`).disabled=!0,this.updateMarkHint()}updateMarkHint(){let e=Kf(`pacs-markhint`);if(!this.current){e.textContent=``;return}e.textContent=this.mark?`Lesion marked on image ${this.mark.slice+1}. Bonus if it's right.`:`Optional: press M (or Mark) and click the abnormality for bonus points.`}sign(){let e=this.current;if(!e||!this.choice)return;let t=Rf(e),n=this.choice===e.path,r=!1;if(n&&t.lesion&&this.mark){let e=t.lesion;r=this.mark.slice>=e.s0-2&&this.mark.slice<=e.s1+2&&Math.hypot(this.mark.x-e.x,this.mark.y-e.y)<e.r+.1}this.G.onReport(e,this.choice,n,r);let i=Kf(`pacs-feedback`);i.textContent=n?r?`Signed. Nailed it, lesion and all.`:`Signed. Diagnosis correct.`:`Signed. (Hmm. Hope that was right.)`;let a=this.queue()[0]||null;setTimeout(()=>{this.el.hidden||this.select(a)},700),this.renderList()}speedReport(){let e=this.queue();if(e.length){for(let t of e)this.G.onReport(t,`normal`,t.path===`normal`,!1,!0);this.G.toast(`Speed-reported ${e.length} studies as "No acute abnormality". Bold.`),this.select(null)}}draw(){let e=this.vctx,t=this.view.width;e.fillStyle=`#000`,e.fillRect(0,0,t,t);let n=this.current;if(n){let r=Rf(n);if(Sf(r.get(this.slice),this.ww,this.wl,this.img),this.sctx.putImageData(this.img,0,0),e.imageSmoothingEnabled=!0,e.drawImage(this.small,0,0,t,t),e.font=`15px "IBM Plex Mono", monospace`,e.fillStyle=`#f5b041`,e.textBaseline=`top`,e.fillText(n.patient,10,10),e.fillText(`${n.urn}  ${n.age}${n.sex}`,10,28),e.fillStyle=`#7fd3ff`,e.textAlign=`right`,e.fillText(`RadsSim General`,t-10,10),e.fillText(n.study,t-10,28),e.fillText(`Acq ${Hf(n.arrived)}`,t-10,46),e.textBaseline=`bottom`,e.fillText(n.modality===`us`?`Depth ${r.fov} mm`:`${r.fov} mm FOV`,t-10,t-10),e.textAlign=`left`,e.fillStyle=`#f5b041`,e.fillText(n.modality===`us`?`Frame ${this.slice+1}/${r.n}   R hip, long.   5 MHz`:n.modality===`xr`?`PA erect   120 kVp`:n.modality===`mr`?`Im: ${this.slice+1}/${r.n}   Ax T2 / DWI`:`Im: ${this.slice+1}/${r.n}   Ax 2.0mm`,10,t-28),e.fillText(`W: ${Math.round(this.ww)}  L: ${Math.round(this.wl)}`,10,t-10),e.fillStyle=`#ccc`,e.textAlign=`center`,e.textBaseline=`middle`,n.modality!==`us`&&n.modality!==`xr`&&(e.fillText(`A`,t/2,60),e.fillText(`R`,16,t/2),e.fillText(`L`,t-16,t/2)),e.textAlign=`left`,this.mark&&Math.abs(this.mark.slice-this.slice)<=2){let n=(this.mark.x+1)/2*t,r=(this.mark.y+1)/2*t;e.strokeStyle=`#ffe600`,e.lineWidth=2,e.beginPath(),e.arc(n,r,18,0,Math.PI*2),e.stroke(),e.beginPath(),e.moveTo(n-26,r),e.lineTo(n-12,r),e.moveTo(n+12,r),e.lineTo(n+26,r),e.stroke()}}else e.fillStyle=`#556`,e.font=`18px "IBM Plex Mono", monospace`,e.textAlign=`center`,e.fillText(`No study loaded`,t/2,t/2),e.textAlign=`left`;this.drawMonitors()}drawMonitors(){let e=this.monA.getContext(`2d`);e.fillStyle=`#000`,e.fillRect(0,0,640,384),this.G.pacsWet>0?(e.fillStyle=`#1537a8`,e.fillRect(0,0,640,384),e.fillStyle=`#fff`,e.font=`bold 28px monospace`,e.fillText(`:(`,40,80),e.font=`20px monospace`,e.fillText(`PACS has encountered water.`,40,140),e.fillText(`Please contact IT (they are asleep).`,40,175)):this.current?e.drawImage(this.view,128,0,384,384):(e.fillStyle=`#0b1622`,e.fillRect(0,0,640,384),e.fillStyle=`#7fd3ff`,e.font=`26px monospace`,e.fillText(`NightPACS`,30,50));let t=this.monB.getContext(`2d`);t.fillStyle=`#0b1622`,t.fillRect(0,0,640,384);let n=this.queue();t.font=`bold 26px monospace`,t.fillStyle=n.length>=20?`#ff4d4d`:n.length>=10?`#ffb347`:`#7fd3ff`,t.fillText(`WORKLIST: ${n.length} UNREPORTED`,20,40),t.font=`18px monospace`,n.slice(0,13).forEach((e,n)=>{let r=Math.floor(this.G.time-e.arrived);t.fillStyle=r>120?`#ff6b6b`:`#d6e6f2`,t.fillText(`${e.study.padEnd(24).slice(0,24)} ${e.location.padEnd(12).slice(0,12)} ${Math.floor(r/60)}h${String(r%60).padStart(2,`0`)}`,20,80+n*23)}),this.texA.needsUpdate=!0,this.texB.needsUpdate=!0}};function Jf(){return window.matchMedia?.(`(pointer: coarse)`).matches||`ontouchstart`in window||navigator.maxTouchPoints>0}var Yf=(e,t)=>window.dispatchEvent(new KeyboardEvent(t?`keydown`:`keyup`,{code:e}));function Xf(e){let t=e.player;document.body.classList.add(`touch`);let n=document.querySelector(`#start .fine`);n&&(n.textContent=`Touch controls: left stick moves (push it all the way to run), drag anywhere else to look, and the buttons do the rest. Landscape works best.`);let r=document.createElement(`div`);r.id=`touch`,r.hidden=!0,r.innerHTML=`
    <div id="t-look"></div>
    <div id="t-stick"><div id="t-knob"></div></div>
    <div id="t-buttons">
      <button id="t-grab" class="t-btn big">Grab</button>
      <button id="t-use" class="t-btn">E<small>Use</small></button>
      <button id="t-item" class="t-btn" hidden>Item</button>
      <button id="t-jump" class="t-btn">Jump</button>
      <button id="t-drop" class="t-btn" hidden>Drop</button>
      <button id="t-kick" class="t-btn">Kick</button>
    </div>
    <button id="t-help" class="t-btn small">?</button>`,document.body.appendChild(r);let i=e=>document.getElementById(e),a=i(`t-stick`),o=i(`t-knob`),s=null,c=0,l=0;a.addEventListener(`pointerdown`,e=>{s=e.pointerId,a.setPointerCapture(e.pointerId);let t=a.getBoundingClientRect();c=t.left+t.width/2,l=t.top+t.height/2,u(e)});let u=e=>{if(e.pointerId!==s)return;let n=e.clientX-c,r=e.clientY-l,i=Math.hypot(n,r);i>55&&(n=n/i*55,r=r/i*55),o.style.transform=`translate(${n}px, ${r}px)`,t.touchMove={x:n/55,y:-r/55}};a.addEventListener(`pointermove`,u);let d=e=>{e.pointerId===s&&(s=null,o.style.transform=``,t.touchMove=null)};a.addEventListener(`pointerup`,d),a.addEventListener(`pointercancel`,d);let f=i(`t-look`),p=new Map;f.addEventListener(`pointerdown`,e=>{f.setPointerCapture(e.pointerId),p.set(e.pointerId,{x:e.clientX,y:e.clientY})}),f.addEventListener(`pointermove`,n=>{let r=p.get(n.pointerId);if(!r||e.mode!==`play`)return;let i=.0055;t.yaw-=(n.clientX-r.x)*i,t.pitch=Math.max(-1.45,Math.min(1.45,t.pitch-(n.clientY-r.y)*i)),r.x=n.clientX,r.y=n.clientY});let m=e=>p.delete(e.pointerId);f.addEventListener(`pointerup`,m),f.addEventListener(`pointercancel`,m);let h=(e,t,n)=>{e.addEventListener(`pointerdown`,n=>{n.preventDefault(),e.setPointerCapture(n.pointerId),e.classList.add(`on`),t()});let r=()=>{e.classList.remove(`on`),n?.()};e.addEventListener(`pointerup`,r),e.addEventListener(`pointercancel`,r)};h(i(`t-grab`),()=>{t.mouse.leftPressed=!0}),h(i(`t-use`),()=>Yf(`KeyE`,!0),()=>Yf(`KeyE`,!1)),h(i(`t-item`),()=>{t.mouse.right=!0},()=>{t.mouse.right=!1}),h(i(`t-jump`),()=>t.keys.add(`Space`),()=>t.keys.delete(`Space`)),h(i(`t-kick`),()=>e.kick?.()),h(i(`t-drop`),()=>Yf(`KeyQ`,!0),()=>Yf(`KeyQ`,!1)),h(i(`t-help`),()=>{let e=document.getElementById(`help`);e.hidden=!e.hidden}),document.getElementById(`help`).addEventListener(`click`,e=>{e.currentTarget.hidden=!0});let g={spray:`Spray`,ignite:`Flick`,eat:`Eat`,drink:`Drink`,zap:`Clear!`},_=``;setInterval(()=>{if(r.hidden=e.mode!==`play`,r.hidden){t.touchMove=null,t.mouse.right=!1;return}let n=t.held,a=`${n?.type}|${!!t.pushing}`;if(a===_)return;_=a,i(`t-grab`).textContent=n?`Throw`:t.pushing?`Launch`:`Grab`;let o=n&&g[n.T.use];i(`t-item`).hidden=!o,o&&(i(`t-item`).textContent=o),i(`t-drop`).hidden=!n&&!t.pushing},150)}var Zf=e=>document.getElementById(e),Qf=e=>e[Math.floor(Math.random()*e.length)],$f=e=>String(e).replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]),ep=e=>new Promise(t=>setTimeout(t,e)),tp={freeair:`a perforation`,collection:`a collection`,sbo:`a bowel obstruction`,aaa:`a leaking aneurysm`,appendicitis:`appendicitis`,renal_stone:`an obstructing kidney stone`,edh:`a bleed`,sdh:`a bleed`,infarct:`a stroke`,sah:`a subarachnoid bleed`,pe:`a PE`,ptx:`a pneumothorax`,mass:`a tumour`,consolidation:`a pneumonia, or maybe a PE`,necfasc:`necrotising fasciitis`,effusion:`a septic joint`,pleural:`a pleural effusion`};function np(e){if(tp[e.path])return tp[e.path];let t=e.question.toLowerCase();return e.joke?`a swallowed foreign body`:e.modality===`us`||t.includes(`septic`)?`a septic joint`:t.includes(`nec fasc`)?`necrotising fasciitis`:t.includes(`perforation`)?`a perforation`:t.includes(`collection`)?`a collection`:t.includes(`sbo`)?`a bowel obstruction`:t.includes(`aaa`)?`a leaking aneurysm`:t.includes(`append`)?`appendicitis`:t.includes(`renal`)?`a kidney stone`:t.includes(`stroke`)?`a stroke`:t.includes(`sah`)?`a subarachnoid bleed`:t.includes(`bleed`)||t.includes(`haemorrhage`)?`a bleed`:t.includes(`pe`)?`a PE`:e.modality===`head`?`something intracranial`:`something serious`}var rp={freeair:[`They're rigid, febrile and their heart rate is 130.`,`They had a colonoscopy two days ago and now it hurts everywhere.`],collection:[`Swinging fevers and a CRP of 240.`,`They're five days post-op and getting worse, not better.`],sbo:[`They're vomiting and haven't passed wind for two days.`,`Their belly is like a drum and they've had three laparotomies.`],aaa:[`Their BP is 90 systolic and I can feel a pulsatile mass.`,`They're pale, sweaty, and the pain goes straight through to their back.`],appendicitis:[`Rebound tenderness in the right iliac fossa and a white count of 15.`,`The pain started around the belly button and moved to the right. Classic.`],renal_stone:[`They're writhing in pain with blood in their urine.`,`Their creatinine is climbing, so I'm worried it's obstructing.`],edh:[`Their GCS dropped from 15 to 12 in the last hour.`,`They were talking fine, then they weren't. Lucid interval.`],sdh:[`They're on apixaban and getting more confused by the minute.`,`Three falls this week and they're drowsier every time I check.`],infarct:[`New arm weakness and they can't get their words out. It's a code stroke.`,`Onset was 40 minutes ago. We're inside the window for treatment.`],sah:[`Worst headache of their life and a stiff neck.`,`It came on like a thunderclap, mid-sentence.`],pe:[`Sats are 89% and they're tachycardic, four days post-op.`,`Their calf is swollen and the D-dimer is sky high.`],ptx:[`Sudden pleuritic pain and reduced air entry on one side.`,`Tall, thin, young, and they can't catch their breath.`],mass:[`Forty pack-years and they're coughing up blood.`,`They've lost ten kilos without trying.`],consolidation:[`Febrile with crackles, and the X-ray is equivocal.`,`They're getting more short of breath despite antibiotics.`],fork:[`They swallowed a fork. A whole fork.`,`It was a dare. The fork is now inside them.`],pager:[`The pager is still beeping. From inside them.`,`It went off twice while I was examining them.`],sandwich:[`There is a sandwich somewhere a sandwich should not be.`,`They say it "went down wrong". They want it back.`],pleural:[`Dull to percussion at the right base and they're short of breath.`,`Their legs are swollen and they can't lie flat.`],necfasc:[`Pain way out of proportion, and I think I can feel crepitus.`,`The redness has spread past the line I drew an hour ago.`],effusion:[`Hot, swollen hip, a fever of 39 and a CRP of 180.`,`They won't let me move it at all. It's held flexed and externally rotated.`]},ip={abdo:`Their abdomen is soft, but they say it really hurts.`,head:`They bumped their head and the family is very worried.`,chest:`Some chest pain. Obs are normal, but I just want to be sure.`,us:`Their hip is sore. They did walk in, to be fair.`,xr:`They've had a bit of a cough. Obs are fine.`,mr:`They were dizzy earlier. The CT was normal and they seem fine now.`},ap=[{id:`question`,text:`"What's the actual clinical question?"`,weakPower:1.6,strongPower:.5,weak:(e,t)=>`Honestly? To rule out ${t}. They look... fine-ish.`,strong:(e,t)=>`Whether this is ${t}. If it is, they need treatment tonight.`},{id:`senior`,text:`"Has a senior actually examined them?"`,weakPower:1.3,strongPower:.4,weak:()=>`Not yet. The consultant is stuck in resus with a trauma.`,strong:()=>`Yes. My consultant examined them and wants the scan tonight.`},{id:`manage`,text:`"How will this scan change what you do tonight?"`,weakPower:1.6,strongPower:.5,weak:()=>`It would... reassure everyone? Mostly me.`,strong:e=>({abdo:`If it's positive they go to theatre tonight. If not, the surgeons won't even see them.`,head:`If there's a bleed, neurosurgery needs to know now.`,chest:`If it's a PE they need anticoagulation now. If it's not, we keep looking.`,us:`If there's pus, it needs washing out tonight.`,xr:`It decides whether they need a drain or antibiotics tonight.`,mr:`If it's a stroke, the stroke team change everything tonight.`})[e.modality]},{id:`previous`,text:`"Have you checked their previous imaging?"`,weakPower:1.8,strongPower:.3,weak:()=>`Oh. They had the same scan last month. It was normal.`,strong:()=>`Nothing recent. Their last scan was years ago.`},{id:`details`,text:`"The clinical details on this form are pretty thin."`,weakPower:1.2,strongPower:.4,weak:()=>`Fair. I wrote it in a hurry at handover. There isn't much more to add.`,strong:e=>`I wrote it fast. What I didn't write down: ${rp[e.path][1]}`}],op={abdo:{id:`alt`,text:`"Could we ultrasound first?"`,weakPower:1.5,strongPower:.4,weak:()=>`I suppose we could. The sonographer is in at 8.`,strong:(e,t)=>`Ultrasound won't rule out ${t}, and the sonographer went home at 5.`},chest:{id:`alt`,text:`"Would a chest X-ray answer this?"`,weakPower:1.5,strongPower:.4,weak:()=>`The X-ray was normal, actually. Maybe that's enough.`,strong:e=>e.path===`pe`?`The X-ray was clear. That's exactly why I'm worried about a PE.`:`The X-ray looks odd and we need to know what it is.`},us:{id:`alt`,text:`"Have they had an X-ray of the hip?"`,weakPower:1.4,strongPower:.4,weak:()=>`Yes. Normal. Bit of arthritis, that's all.`,strong:()=>`Normal. Which doesn't rule out a septic joint, as you know.`},xr:{id:`alt`,text:`"Does this chest X-ray really need doing at 3am?"`,weakPower:1.6,strongPower:.4,weak:()=>`Honestly? It could wait for the morning.`,strong:e=>`Yes. ${rp[e.path][1]}`},mr:{id:`alt`,text:`"Can the MRI wait until the morning list?"`,weakPower:1.5,strongPower:.4,weak:()=>`I mean... neuro just said "tonight would be nice".`,strong:()=>`The stroke team want it now. It changes their treatment.`},head:{id:`alt`,text:`"Does this even meet the CT head rules?"`,weakPower:1.6,strongPower:.4,weak:()=>`Um. Not strictly. They're GCS 15 and chatting away.`,strong:e=>`It does. ${rp[e.path][1]}`}},sp=[{id:`alvarado`,when:(e,t)=>t===`appendicitis`,text:`"What's the Alvarado?"`,weakPower:2,strongPower:.3,weak:()=>`Um... about a 3? Mild tenderness, no fever, normal white count.`,strong:()=>`Eight. Migratory pain, anorexia, RIF tenderness, rebound, a fever and a white count of 15.`},{id:`clinapp`,when:(e,t)=>t===`appendicitis`,after:`alvarado`,clinical:!0,text:`"So you've got clinically diagnosed appendicitis. Do they need a scan?"`,weak:()=>`Well... it's not really a clinical diagnosis. That's the whole point of the scan.`,strongWin:`...Huh. The surgeons did say they'd take a high Alvarado straight to theatre. I'll call them.`,strongNotYet:`It's not THAT clear-cut. It could be a collection or something else.`},{id:`effusion`,when:e=>e.modality===`us`,text:`"You want a joint aspirate. How do you know there's an effusion?"`,weakPower:2.2,strongPower:.3,weak:()=>`...I don't, really. I couldn't feel one. I just assumed.`,strong:()=>`Bedside ultrasound in ED showed a big effusion. I just can't get the needle in.`},{id:`ortho`,when:e=>e.modality===`us`,clinical:!0,text:`"If you're suspecting a septic joint, why aren't ortho taking them to theatre?"`,weak:()=>`Because... it's probably not septic. Their CRP is 12.`,weakPower:1.8,strongWin:`...Ortho did say they'd wash it out if it's pus. Fine. I'll push them to take it straight to theatre.`},{id:`necfasc`,when:(e,t)=>t===`necrotising fasciitis`,clinical:!0,text:`"Nec fasc is a clinical diagnosis."`,weak:()=>`Honestly, it's probably just cellulitis. I wanted to be sure.`,weakPower:1.8,strongWin:`...You're right. If I'm this worried, they need theatre, not CT. I'm calling the surgeons.`}];function cp(e){let t=[],n=t=>e.redFlags.includes(t);return e.sex===`F`&&e.age<55?t.push({id:`preg`,text:`"Pregnancy status isn't documented."`,valid:n(`Pregnancy status not documented`),yes:`Oh no. You're right, I didn't ask. I'll get a pregnancy test first.`,no:`It is. It's ticked "No" on the form. Right there.`}):t.push({id:`preg`,text:`"Is there any chance they're pregnant?"`,valid:!1,no:e.sex===`M`?`The patient is a man.`:`She's ${e.age}. It's not a concern.`}),t.push({id:`egfr`,text:`"Has anyone checked their kidney function for contrast?"`,valid:n(`eGFR 24, contrast not approved`),yes:`Oh. eGFR 24. I didn't see that. I'll speak to the renal team first.`,no:e.modality===`head`?`It's a non-contrast CT head. There's no contrast.`:e.modality===`us`?`It's an ultrasound. There's no contrast.`:e.modality===`xr`?`It's a chest X-ray. There's no contrast.`:e.modality===`mr`?`It's a non-contrast MRI.`:`Their eGFR is ${70+e.seed%25}. It's fine.`}),t.push({id:`pager`,text:`"There's no pager number. How would I call you with the result?"`,valid:n(`Pager field blank (mandatory)`),yes:`Oops. I left it blank. I'll fix the form and come back.`,no:`It's on the form. ${e.pager}. Bottom right.`}),t}var lp=[{id:`radiation`,text:`"We're out of radiation tonight."`,rumor:`Apparently we're out of radiation??`,win:`You can run OUT? Oh no. I'll tell the others.`,fail:`The scanner makes X-rays from electricity. You can't run out.`},{id:`odd`,text:`"After midnight the scanner only does patients with odd hospital numbers."`,rumor:`CT only does odd hospital numbers at night now?`,win:``,fail:``},{id:`mercury`,text:`"Mercury is in retrograde. The contrast won't flow."`,rumor:`Contrast doesn't flow during Mercury retrograde, did you know?`,skip:e=>[`head`,`us`,`xr`,`mr`].includes(e.modality),win:`Is THAT why the pump alarmed earlier? Okay. I'll wait.`,fail:`That's astrology. The contrast pump doesn't care.`},{id:`quota`,text:`"The physicist says we've used up this month's X-rays."`,rumor:`We've used up this month's X-rays apparently.`,win:`There's a monthly allowance? Nobody told ED. I'll let them know.`,fail:`There's no monthly quota. The physicist literally told us that at teaching.`},{id:`abdomen`,text:`"I'm legally not allowed to look at abdomens after 2am."`,rumor:`Radiology can't look at abdomens after 2am. Legal thing.`,skip:e=>e.modality!==`abdo`,win:`Is that a college rule? I don't want to get you in trouble.`,fail:`You reported an abdomen at 3am last week. I was there.`},{id:`haunted`,text:`"The CT is haunted. I'm not going in there."`,rumor:`The CT scanner is haunted. Radiology confirmed it.`,win:`The radiographers DID say the table moves on its own... Okay.`,fail:`It's not haunted. That noise is the cooling fan.`},{id:`aura`,text:`"I checked their aura from the corridor. It's fine."`,rumor:`Radiology is triaging by aura now.`,win:`Their aura did look calm, now you mention it. I'll observe them.`,fail:`You haven't even seen the patient.`},{id:`emotional`,text:`"I already reported it. Emotionally."`,rumor:`Radiology reported a scan... emotionally?`,win:`Is that the new reporting system? I'll check PACS later then.`,fail:`That's not how reporting works. There's nothing on PACS.`},{id:`union`,text:`"The scanner is on its union-mandated break."`,rumor:`The CT scanner is on a union break.`,win:`I'm not crossing a picket line. I'll wait.`,fail:`Scanners can't join unions.`},{id:`powers`,text:`"That much radiation could give them superpowers. Liability issue."`,rumor:`Too much CT gives you superpowers. Liability thing.`,win:`That's a lawsuit waiting to happen. Good point.`,fail:`If that were true, the radiographers could fly by now.`},{id:`helium`,text:`"We're low on helium tonight."`,rumor:`Radiology is out of helium, so no CTs tonight?`,win:`Oh no, the helium. Okay, I'll hold off.`,fail:`Helium is for the MRI. This isn't an MRI.`}];function up(e,t,n,{onWin:r,onLose:i,onAccept:a}){let o=Zf(`argue-modal`),s=Zf(`argue-log`),c=Zf(`argue-opts`),l=Zf(`argue-bar`);Zf(`argue-name`).textContent=n.name,Zf(`argue-title`).textContent=`${n.title} · ${t.study} for ${t.patient}`,s.innerHTML=``,c.innerHTML=``;let u=t.path!==`normal`,d=np(t),f=t.patient.split(`, `)[1]||t.patient,p=n.role===`registrar`?.12:-.1,m=(u?4:3)+ +(n.role===`surgreg`)+Math.min(2,n.anger*.5),h=m,g=0,_=new Set,v=!0,y=!1,b=(e,t)=>{let n=document.createElement(`div`);return n.className=`argue-line `+e,n.innerHTML=`<span>${$f(t)}</span>`,s.appendChild(n),s.scrollTop=s.scrollHeight,n},x=async(e,t)=>{let n=b(e+` typing`,``);n.firstChild.innerHTML=`<i></i><i></i><i></i>`,await ep(Math.min(2200,700+t.length*22)),n.remove(),v&&b(e,t),await ep(250)},S=()=>{l.style.width=`${Math.max(0,Math.min(1,h/m))*100}%`},C=(e,t,n)=>{e&&b(`sys `+t,e),c.innerHTML=``;let r=document.createElement(`button`);r.className=`primary`,r.textContent=`Continue`,r.onclick=()=>{v=!1,o.hidden=!0,n()},c.appendChild(r),w()},w=()=>{let e=[...c.querySelectorAll(`button`)];for(let t of e)t.disabled=!0;setTimeout(()=>{for(let t of e)t.disabled=!1;e[0]?.focus({preventScroll:!0})},450)},T=async t=>{if(c.innerHTML=``,await t(),!v||y)return;if(g++,S(),h<=0){await x(`reg`,Qf([`...Fine. You're right. I'll hold off.`,`Ugh. Okay. I'll re-think the plan.`,`Alright. I'll discuss it with my consultant and come back if it changes.`])),e.stats.argumentsWon++,C(`You won the argument. The request is withdrawn.`,`win`,()=>r(`argued`));return}if(g>=4){await x(`reg`,u?`I've answered everything. This patient needs a scan. I'm not leaving.`:`Look, I'm not going away. Can you just do it?`),e.stats.argumentsLost++,C(`You lost the argument. You're doing the scan.`,`lose`,i);return}let n=(u?[`So can you do it?`,`I really think this one needs scanning.`,`Please. I'm genuinely worried about them.`]:[`So... is that a no?`,`Can we meet halfway?`,`I just don't want to miss anything.`]).filter(e=>!_.has(e));if(n.length&&Math.random()<.35){let e=Qf(n);_.add(e),await x(`reg`,e)}E()},E=()=>{if(!v)return;c.innerHTML=``;let o=[];for(let n of sp.filter(e=>e.when(t,d)&&!_.has(e.id)).slice(0,2))o.push({id:n.id,text:n.text,fn:()=>T(async()=>{if(_.add(n.id),b(`you`,n.text),n.clinical&&u){!n.after||_.has(n.after)||Math.random()<.5?(await x(`reg`,n.strongWin),y=!0,e.stats.argumentsWon++,e.stats.clinicalCalls++,C(`Good call. The patient goes straight to theatre without a scan.`,`win`,()=>r(`clinical`))):(await x(`reg`,n.strongNotYet),h-=.5);return}if(n.clinical){await x(`reg`,n.weak(t,d)),h-=n.weakPower||-.5;return}await x(`reg`,u?n.strong(t,d):n.weak(t,d)),h-=u?n.strongPower:n.weakPower})});let s=ap.filter(e=>!_.has(e.id)).sort(()=>Math.random()-.5);for(let e of(o.length?[_.has(`alt`)?s[0]:op[t.modality]]:[s[0],_.has(`alt`)?s[1]:op[t.modality]]).filter(Boolean))o.push({id:e.id,text:e.text,fn:()=>T(async()=>{_.add(e.id),b(`you`,e.text),await x(`reg`,u?e.strong(t,d):e.weak(t,d)),h-=u?e.strongPower:e.weakPower})});let l=Qf(cp(t).filter(e=>!_.has(e.id)));l&&o.push({id:l.id,text:l.text,fn:()=>T(async()=>{_.add(l.id),b(`you`,l.text),l.valid?(await x(`reg`,l.yes),h-=4,e.stats.goodCatches++):(await x(`reg`,l.no),h+=1)})});let m=Qf(lp.filter(e=>!_.has(e.id)&&!(e.skip&&e.skip(t))));m&&o.push({id:m.id,text:m.text,wild:!0,fn:()=>T(async()=>{_.add(m.id),b(`you`,m.text);let i,a;if(m.id===`helium`&&t.modality===`mr`)i=!!e.quenched||Math.random()<.15,a=e.quenched?`Oh. Someone quenched the magnet tonight, didn't they. Fine. No MRI.`:i?`Is THAT why it was hissing? Okay, I'll hold off.`:`I walked past the MRI. It's humming away.`;else if(m.id===`odd`){let e=+t.urn.slice(-1);i=e%2==0&&Math.random()<.75,a=e%2==0?i?`Their number ends in ${e}. That's even... Okay. Tomorrow, then.`:`Their number ends in ${e}. Also, that rule isn't real.`:`Their hospital number ends in ${e}. That's odd. So you can scan them.`}else{let t=e.rumor&&e.rumor.id===m.id?.25:0;i=Math.random()<.28+p+t,a=i?t?`Everyone's been saying that tonight! ${m.win}`:m.win:m.fail}await x(`reg`,a),i?(e.stats.wildWins++,e.stats.wildUsed=e.stats.wildUsed||m.text,e.startRumor(m),K.sign(),y=!0,C(`It worked. Somehow. The rumour is spreading through the ED.`,`win`,()=>r(`wild`,m))):(h+=1,n.anger++,K.wrong())})}),o.push({id:`cons`,text:`"Call your consultant, then."`,fn:async()=>{c.innerHTML=``,b(`you`,`"Call your consultant, then."`),e.stats.consultantCalls++,await x(`reg`,`Fine. I'm putting them on speaker.`),b(`sys`,`*It rings for a long time. Someone answers, very asleep.*`),await ep(900),await x(`reg`,`Sorry to wake you. The radiologist wants to know why ${f} needs a ${t.study}.`),t.joke?(e.stats.argumentsLost++,await x(`cons`,`They swallowed a WHAT? Scan them. Obviously.`),C(`The consultant sided with the registrar.`,`lose`,i)):u?(e.stats.argumentsLost++,await x(`cons`,`${d[0].toUpperCase()+d.slice(1)}? With that history? Yes, scan them tonight. And who is this radiologist?`),C(`The consultant sided with the registrar. Awkward.`,`lose`,i)):Math.random()<.65?(e.stats.argumentsWon++,await x(`cons`,`Soft abdomen, normal obs? Yeah, fair enough. Review them in the morning.`.replace(`Soft abdomen`,t.modality===`head`?`GCS 15`:t.modality===`chest`?`Low risk`:t.modality===`us`?`Walked in with a CRP of 12`:t.modality===`xr`?`Normal sats, no fever`:t.modality===`mr`?`Symptoms resolved and a normal CT`:`Soft abdomen`)),C(`The consultant agreed with you. The request is withdrawn.`,`win`,()=>r(`consultant`))):(e.stats.argumentsLost++,await x(`cons`,`It's 3am. I don't care. Just do the scan, please.`),C(`The consultant just wants to go back to sleep. You're doing it.`,`lose`,i))}}),o.push({id:`fine`,text:`"Fine. I'll do it."`,ghost:!0,fn:async()=>{c.innerHTML=``,b(`you`,`"Fine. I'll do it."`),await x(`reg`,`Thank you!! I owe you a coffee.`),C(``,``,a)}});for(let e of o){let t=document.createElement(`button`);t.textContent=e.text,e.wild&&(t.className=`wild`),e.ghost&&(t.className=`ghost`),t.onclick=()=>{t.disabled||(K.click(),e.fn())},c.appendChild(t)}w()};o.hidden=!1,S(),(async()=>{b(`you`,`"Before I scan this: what's the indication?"`),await x(`reg`,`I need a ${t.study} on ${f}. I'm worried about ${d}.`),await x(`reg`,u?rp[t.path][0]:ip[t.modality]),E()})()}var dp=e=>e[Math.floor(Math.random()*e.length)],fp={ct:14,mri:28,xr:6},pp={ct:`CT`,mri:`MRI`,xr:`X-ray`},mp=e=>({abdo:`ct`,head:`ct`,chest:`ct`,mr:`mri`,xr:`xr`})[e.modality]||null;function hp(e,t){let n=new un,r=new ho({color:`#a9cbe8`}),i=new ho({color:dp([`#f1c9a5`,`#e0ac69`,`#c68642`,`#8d5524`])}),a=new W(new ji(.22,1,4,10),r),o=new W(new to(.2,12,10),i);if(t)a.rotation.z=Math.PI/2,a.position.set(.1,.2,0),o.position.set(-.75,.25,0);else{a.position.y=.95,o.position.y=1.72;for(let e of[-1,1]){let t=new W(new ji(.07,.45,4,6),r);t.position.set(e*.3,1.45,.05),t.rotation.z=e*2.6,n.add(t)}}return n.add(a,o),n.visible=!1,e.add(n),n}var gp=class{constructor(e){this.G=e,this.q={ct:[],mri:[],xr:[]},this.busy={ct:null,mri:null,xr:null},this.downSince={ct:0,mri:0,xr:0},this.lastReason={},this.meshes={ct:hp(e.scene,!0),mri:hp(e.scene,!0),xr:hp(e.scene,!1)},this.setLights(`ct`,!1),this.setLights(`mri`,!1),this.setLights(`xr`,!1)}enqueue(e,t=!1){let n=mp(e);return n?(e.status=`toScan`,e.scanner=n,t?this.q[n].unshift(e):this.q[n].push(e),!0):!1}onMetalInBore(e){let t=this.busy.mri;!t||t.t<t.dur*.2||(t.t=0,this.G.stats.scansRuined=(this.G.stats.scansRuined||0)+1,this.radiographer(`mri`)?.say(`A ${e.T.name.toLowerCase()} just flew into the bore! Starting again!`,3,!0),this.G.toast(`A ${e.T.name.toLowerCase()} flew into the MRI mid-scan. The patient screamed. The scan restarts.`,`bad`))}queued(e){return this.q[e].length+ +!!this.busy[e]}radiographer(e){return this.G.npcs.find(t=>t.role===`radiographer`&&t.scanner===e&&!t.remove)}downReason(e){let t=this.G,n=t.world.scanners[e];if(e===`mri`&&t.quenched)return`the magnet was quenched`;let r=t.zoneFire?.[n.zone];if(r&&r.sprinkle>0)return`the sprinklers are going off`;let i=n.table?{x:(n.table.x0+n.table.x1)/2,z:n.table.z}:n.stand;if(t.fire.at(i.x,i.z)>.05||r&&r.t>0)return`it's on fire`;let a=this.radiographer(e);return a?[`knocked`,`panic`,`assembled`,`onfire`,`meeting`,`leave`].includes(a.state)?a.state===`meeting`?`the radiographer is in a meeting`:`the radiographer is indisposed`:null:`there's no radiographer`}setLights(e,t){for(let n of this.G.world.scanners[e].lights)n.material.color.set(t?`#ffffff`:`#3a3a3a`)}update(e){let t=this.G;for(let n of[`ct`,`mri`,`xr`]){let r=t.world.scanners[n],i=this.meshes[n],a=this.downReason(n);a&&this.queued(n)?(this.downSince[n]+=e,this.lastReason[n]!==a&&(this.lastReason[n]=a,t.toast(`${pp[n]} is down: ${a}. ${this.queued(n)} waiting.`,`bad`)),this.downSince[n]>50&&(this.downSince[n]=0,t.page?.(`ED: "Why is ${pp[n]} down?! ${this.queued(n)} patients waiting!"`))):(this.downSince[n]=0,this.lastReason[n]=null);let o=this.busy[n];if(!o){if(a||!this.q[n].length){i.visible=!1,this.setLights(n,!1);continue}o=this.busy[n]={c:this.q[n].shift(),t:0,dur:fp[n]*(.8+Math.random()*.4)},this.radiographer(n)?.say(dp(n===`xr`?[`Next patient! Stand here for me.`,`Chin up, deep breath in...`]:n===`mri`?[`Any metal on you? No? Good.`,`It'll be loud. Very loud.`]:[`Arms up above your head for me.`,`Just a little scratch for the contrast.`]),3)}if(a){this.setLights(n,!1);continue}o.t+=e;let s=o.t/o.dur;i.visible=!0;let c=!1;if(n===`xr`)i.position.set(r.stand.x,0,r.stand.z+.35),i.rotation.y=Math.PI,c=s>.5&&s<.6,c&&!o.beeped&&(o.beeped=!0,K.ding());else{let t=r.table,a=s<.25?s/.25:s>.75?(1-s)/.25:1;i.position.set(t.x0+(t.x1-t.x0)*a,t.y-.22,t.z),c=s>.3&&s<.7,n===`mri`&&(o.snd=(o.snd||0)-e,c&&o.snd<=0&&(K.thud(.35),o.snd=.28))}if(this.setLights(n,c||n===`mri`&&s>.25&&s<.75),c&&n!==`mri`){let e=t.player;if(Zu(e.pos.x,e.pos.z)?.id===r.zone&&!(n===`xr`&&e.pos.x>51.4)&&!e.hidden){o.t=0,o.beeped=!1,t.stats.radiationDoses++;let e=this.radiographer(n);e?.say(`GET OUT OF THE ROOM! I'm restarting the scan!`,3,!0),t.toast(`You were standing in the ${pp[n]} room during an exposure. The radiographer is not impressed.`,`bad`),t.stats.radiationDoses===3&&t.reportAboutYou?.(e?.name||`Radiographer`,`Radiation safety breach`,`"Stood in the room. THREE TIMES."`)}}o.t>=o.dur&&(this.busy[n]=null,i.visible=!1,this.setLights(n,!1),t.onScanned(o.c))}}},_p=e=>e[Math.floor(Math.random()*e.length)],vp={hatch:{L:3.95,W:1.78,r:.33,wb:1.25,belt:.92,roof:1.46,wf:-.85,rf:-.15,rr:1.35,wr:1.78,nose:.78,tail:.98},sedan:{L:4.6,W:1.82,r:.34,wb:1.4,belt:.92,roof:1.42,wf:-.85,rf:-.15,rr:.95,wr:1.55,nose:.8,tail:.94},suv:{L:4.65,W:1.94,r:.42,wb:1.42,belt:1.12,roof:1.82,wf:-1.05,rf:-.45,rr:2,wr:2.2,nose:1.02,tail:1.18},ute:{L:5,W:1.9,r:.4,wb:1.6,belt:1.08,roof:1.78,wf:-1,rf:-.4,rr:.32,wr:.38,nose:1,tail:1.08,tray:!0},van:{L:5.4,W:2.02,r:.4,wb:1.75,belt:1.15,roof:2.45,wf:-1.75,rf:-1.25,rr:2.62,wr:2.66,nose:1,tail:2.38,box:!0}},yp,bp;function xp(){if(yp)return;yp=new mo({color:`#16222c`,specular:`#9fb6c8`,shininess:90,transparent:!0,opacity:.78,side:2});let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`);t.fillStyle=`rgba(190,205,215,0.3)`,t.fillRect(0,0,256,256),t.strokeStyle=`rgba(255,255,255,0.8)`,t.lineWidth=1.1;let n=110+Math.random()*40,r=110+Math.random()*40;for(let e=0;e<22;e++){let i=e/22*Math.PI*2+Math.random()*.2;t.beginPath(),t.moveTo(n,r);let a=n,o=r;for(let e=0;e<6;e++)a+=Math.cos(i+(Math.random()-.5)*.5)*30,o+=Math.sin(i+(Math.random()-.5)*.5)*30,t.lineTo(a,o);t.stroke()}for(let e=18;e<200;e+=22+Math.random()*14)t.beginPath(),t.arc(n,r,e,0,Math.PI*2),t.stroke();t.clearRect(n-40,r-30,80,64),bp=new ho({map:new Ei(e),transparent:!0,side:2,depthWrite:!1})}function Sp(e,t){let n=document.createElement(`canvas`);n.width=256,n.height=64;let r=n.getContext(`2d`);return r.fillStyle=t?`#fff`:`#f4f1e4`,r.fillRect(0,0,256,64),r.strokeStyle=`#222`,r.lineWidth=4,r.strokeRect(3,3,250,58),r.fillStyle=`#111`,r.font=`bold 42px "Archivo Narrow", Arial, sans-serif`,r.textAlign=`center`,r.textBaseline=`middle`,r.fillText(e,128,35),new Ei(n)}function Cp(){let t=document.createElement(`canvas`);t.width=256,t.height=32;let n=t.getContext(`2d`);for(let e=0;e<16;e++)for(let t=0;t<2;t++)n.fillStyle=(e+t)%2?`#f6d21b`:`#1f8f4a`,n.fillRect(e*16,t*16,16,16);let r=new Ei(t);return r.wrapS=e,r.repeat.set(2,1),r}function wp(e,t,n,r,i){let a=new da;a.moveTo(e[0][0],e[0][1]);for(let t=1;t<e.length;t++){let n=e[t];if(n===`arch`){let e=i.shift();a.lineTo(e.c-e.r,e.y0),a.lineTo(e.c-e.r,e.cy),a.absarc(e.c,e.cy,e.r,Math.PI,0,!0),a.lineTo(e.c+e.r,e.y0);continue}a.lineTo(n[0],n[1])}a.closePath();let o=new Ya(a,{depth:t-n*2,bevelEnabled:!0,bevelThickness:n,bevelSize:n,bevelSegments:3,curveSegments:14});return o.rotateY(-Math.PI/2),o.translate((t-n*2)/2,0,0),new W(o,r)}function Tp(e){xp();let t=vp[e.style]||vp.sedan,{L:n,W:r,r:i,wb:a,belt:o,roof:s,wf:c,rf:l,rr:u,wr:d,nose:f,tail:p}=t,m=new un,h=new mo({color:e.color,specular:`#6a6a6a`,shininess:55}),g=pd(`#1b1c1f`),_=new mo({color:`#c9ced3`,specular:`#ffffff`,shininess:100}),v=(e,t,n,r,i)=>{let a=new W(e,t);return a.position.set(n,r,i),m.add(a),a},y=n/2,b=i*.62,x=i+.07,S=[[-y,b+.18],[-y+.12,b],`arch`,`arch`,[y-.12,b],[y,b+.18],[y+.02,p-.14],[y-.1,p],t.box?[d,p]:[Math.min(d+.05,y-.15),o],[c,o],[-y+.3,f],[-y+.02,f-.16]];t.box&&S.splice(8,1,[y-.05,s],[l+.2,s]);let C=[{c:-a,cy:i,r:x,y0:b},{c:a,cy:i,r:x,y0:b}];m.add(wp(S,r,.06,h,C));let w=r-.2,T=t.box?l+.3:d;m.add(wp([[c,o-.03],[l,s],[t.box?l+.3:u,s],[T,o-.03]],w,.05,h,[]));let E=[],D=w/2+.006,O=new da,k=t.box?l+.3:d,A=t.box?l+.3:u;O.moveTo(c+.12,o+.04),O.lineTo(l+.06,s-.07),O.lineTo(A-.06,s-.07),O.lineTo(k-.12,o+.04),O.closePath();let ee=new $a(O);ee.rotateY(-Math.PI/2);for(let e of[-1,1]){let t=new W(ee,yp);t.position.x=e*D,m.add(t),E.push(t)}let j=(e,t,n,r,i)=>{let a=n-e,o=r-t,s=Math.hypot(a,o),c=a/s,l=-o/s;Math.sign(l)!==i&&(c=-c,l=-l);let u=new W(new Qa(w-.16,s-.08),yp);u.position.set(0,(t+r)/2+c*.058,(e+n)/2+l*.058),u.rotation.x=Math.atan2(a,o),m.add(u),E.push(u)};if(j(c,o,l,s,-1),!t.box&&d-u>.02&&j(d,o,u,s,1),!t.box)for(let e of[-1,1])v(new Ai(.03,s-o-.06,.09),g,e*(D+.004),(o+s)/2,(l+u)/2-.05);let te=new Ni(i,i,.26,22);te.rotateZ(Math.PI/2);let M=new Ni(i*.62,i*.62,.27,18);M.rotateZ(Math.PI/2);let ne=new Ai(.02,i*1.15,.06),N=pd(`#141416`),re=[];for(let e of[-1,1])for(let t of[-a,a]){let n=new un;n.position.set(e*(r/2-.16),i,t),n.add(new W(te,N)),n.add(new W(M,_));for(let t=0;t<5;t++){let r=new W(ne,g);r.position.x=e*.13,r.rotation.x=t/5*Math.PI,n.add(r)}m.add(n),re.push(n)}v(new Ai(r-.04,.2,.18),g,0,b+.16,-y-.02),v(new Ai(r-.04,.2,.18),g,0,b+.16,y+.02),v(new Ai(r*.5,.16,.04),g,0,f-.24,-y-.06);for(let e of[-1,1])v(new Ai(.04,.1,2*a-2*x-.1),g,e*(r/2+.005),b+.06,0);let ie=new Wr({color:`#fff6cf`}),ae=new Wr({color:`#b3121b`});for(let e of[-1,1])v(new Ai(.38,.13,.05),ie,e*(r/2-.28),f-.2,-y-.065),v(new Ai(.3,.16,.05),ae,e*(r/2-.22),Ep(t),y+.085);let oe=new Wr({map:Sp(e.plate,e.ambulance)}),se=v(new Qa(.52,.13),oe,0,b+.16,-y-.115);se.rotation.y=Math.PI,v(new Qa(.52,.13),oe,0,b+.38,y+.095);for(let e of[-1,1])v(new Ai(.14,.1,.07),h,e*(r/2+.06),o+.05,c+.18),v(new Ai(.02,.03,.14),_,e*(r/2+.01),o-.1,c+.55),!t.box&&!t.tray&&v(new Ai(.02,.03,.14),_,e*(r/2+.01),o-.1,(l+u)/2+.25);t.tray&&v(new Ai(r-.24,.04,y-u-.25),pd(`#222428`),0,o+.07,(u+y)/2+.05);let ce=null;if(t.box){let e=new Wr({map:Cp()});for(let t of[-1,1]){let n=v(new Qa(y-l-.25,.32),e,t*(r/2+.012),o-.05,(l+y)/2+.1);n.rotation.y=t*Math.PI/2}let t=new Wr({color:`#d0202a`}),n=new Wr({color:`#1f4fe0`});ce=[v(new Ai(.5,.12,.2),t,-.32,s+.1,l+.35),v(new Ai(.5,.12,.2),n,.32,s+.1,l+.35)];let i=new Wr({map:new Ei(gd(`AMBULANCE`,512,96,{bg:`#ffffff`,fg:`#c4141c`,font:`bold 72px Arial`}))});for(let e of[-1,1]){let t=v(new Qa(1.9,.36),i,e*(r/2+.012),o+.55,(l+y)/2+.25);t.rotation.y=e*Math.PI/2}}v(new Ai(w-.1,.12,.35),g,0,o+.02,c+.3);let le=v(new no(.17,.022,8,20),g,.36,o+.06,c+.62);le.rotation.x=-.45;let P=new W(new Qa(r+.3,n+.3),new Wr({color:`#000`,transparent:!0,opacity:.35,depthWrite:!1}));return P.rotation.x=-Math.PI/2,P.position.y=.012,m.add(P),{g:m,panes:E,head:ie,wheels:re,lightbar:ce,L:n,W:r,seatY:o+.36,seatU:c+1.12}}var Ep=e=>e.box?e.belt:e.tail-.14,Dp=class{constructor(e){this.G=e,this.list=[],this.driving=null;let t=[{x:7,z:33,style:`hatch`,color:`#8a1f2b`,owner:`a rusty hatchback`,plate:`RST 1`},{x:11,z:33,style:`suv`,color:`#1d1f24`,owner:`Dr Harrow's SUV`,plate:`ED CON`},{x:15,z:33,style:`hatch`,color:`#1f4fa8`,owner:`the surgical reg's hot hatch`,plate:`CUT 123`},{x:19,z:33,style:`hatch`,color:`#e8e2d4`,owner:`a nurse's little hatchback`,plate:`OBS 4U`},{x:9,z:39,style:`suv`,color:`#2a2d33`,yaw:Math.PI,owner:`the DMS's Range Rover`,plate:`KPI 1`},{x:13,z:39,style:`ute`,color:`#3b6b45`,yaw:Math.PI,owner:`Security's ute`,plate:`SEC 24`},{x:17,z:39,style:`sedan`,color:`#c9a21f`,yaw:Math.PI,owner:`a vintage sedan`,plate:`OLD 88`},{x:23,z:36,style:`van`,color:`#f4f4f0`,owner:`someone's ambulance (!)`,plate:`AMBO 9`,ambulance:!0}];for(let e of t)this.spawn(e)}spawn(e){let t=Tp(e);this.G.scene.add(t.g);let n={...t,pos:new V(e.x,0,e.z),yaw:e.yaw||0,speed:0,color:e.color,owner:e.owner,plate:e.plate,smashed:!1,alarm:0,static:null};return this.sync(n),this.park(n),this.list.push(n),n}park(e){if(e.static)return;e.speed=0;let t=Math.abs(Math.cos(e.yaw))>.5,n=e.W/2+.05,r=e.L/2+.05,i=t?n:r,a=t?r:n;e.static=nd(e.pos.x-i,e.pos.z-a,e.pos.x+i,e.pos.z+a,1.1,`car`)}unpark(e){e.static&&=(rd(e.static),null)}sync(e){e.g.position.set(e.pos.x,0,e.pos.z),e.g.rotation.y=e.yaw}nearest(e,t,n=3){let r=null,i=n;for(let n of this.list){let a=Math.hypot(n.pos.x-e,n.pos.z-t);a<i&&(i=a,r=n)}return r}smash(e,t=`Something`,n=!1){if(!e)return!1;e.smashed||(e.smashed=!0,this.G.stats.carsSmashed++);for(let t of n?[e.panes[1]]:e.panes)t.material=bp;return e.alarm=16,K.clang(),this.G.toast(`${t} ${t===`You`?`smash`:`smashes`} ${n?`the driver's window`:`the windows`} of ${e.owner}. The alarm starts WAILING.`,`bad`),this.G.onAssault?.(),!0}hitAt(e,t,n=.6){if(n>1.6)return!1;let r=null,i=1.6;for(let n of this.list){if(n.smashed)continue;let a=Math.hypot(n.pos.x-e,n.pos.z-t);a<i&&(i=a,r=n)}return r?(this.smash(r,`A stray projectile`),!0):!1}enter(e){let t=this.G;t.player.held&&(t.player.held.held=!1,t.player.held=null),t.player.pushing&&(t.player.pushing=null),this.smash(e,`You`,!0),this.driving=e,this.unpark(e),t.player.inCar=e,t.stats.carsJacked++,t.toast(`You hotwire it. The alarm is SCREAMING and you have no idea whose keys these are. Drive. WASD to steer, E to get out.`)}exit(){let e=this.driving;if(!e)return;this.driving=null,this.G.player.inCar=null;let t=-Math.cos(e.yaw),n=Math.sin(e.yaw),r={x:e.pos.x+t*1.6,z:e.pos.z+n*1.6};od(r,.3,0),this.G.player.pos.x=r.x,this.G.player.pos.z=r.z,this.G.player.y=0,this.G.player.vy=0,this.park(e),this.G.toast(`You abandon the car at a jaunty angle. Nobody will ever know.`)}update(e){let t=this.G;for(let t of this.list)if(t.alarm>0?(t.alarm-=e,t.head.color.set(Math.sin(performance.now()/120)>0?`#ff5a3c`:`#fff6cf`)):t.head.color.set(`#fff6cf`),t.lightbar){let e=t.alarm>0||t===this.driving,n=Math.sin(performance.now()/90)>0;t.lightbar[0].material.color.set(e&&n?`#ff2a2a`:`#6a1015`),t.lightbar[1].material.color.set(e&&!n?`#3a6bff`:`#132a6a`)}let n=this.driving;if(!n)return;let r=t.player.keys,i=t.player.touchMove,a=(r.has(`KeyW`)||r.has(`ArrowUp`)?1:0)-(r.has(`KeyS`)||r.has(`ArrowDown`)?1:0),o=(r.has(`KeyD`)||r.has(`ArrowRight`)?1:0)-(r.has(`KeyA`)||r.has(`ArrowLeft`)?1:0);i&&(a+=i.y,o+=i.x);let s=r.has(`ShiftLeft`)||r.has(`ShiftRight`)?1.5:1;n.speed+=a*11*e,n.speed*=1-1.1*e,n.speed=Math.max(-6,Math.min(16*s,n.speed)),Math.abs(n.speed)<.05&&(n.speed=0);let c=o*1.9*e*Math.max(-1,Math.min(1,n.speed/3));n.yaw+=c;let l=-Math.sin(n.yaw),u=-Math.cos(n.yaw),d=n.speed*e,f={x:n.pos.x+l*d,z:n.pos.z+u*d},p={x:f.x,z:f.z};if(od(p,1.25,.6)){let e=Math.abs(n.speed);f.x=p.x,f.z=p.z,e>4&&(K.thud(1),t.stats.carCrashes++,e>8&&!n.smashed&&this.smash(n,`The crash`)),n.speed*=-.25}n.pos.x=f.x,n.pos.z=f.z,this.sync(n);for(let t of n.wheels)t.rotation.x-=n.speed*e/.38;let m=Math.abs(n.speed);if(m>2.5){for(let e of t.npcs)e.state!==`knocked`&&e.state!==`pinned`&&Math.hypot(e.pos.x-n.pos.x,e.pos.y-n.pos.z)<1.9&&(e.knock(l*(m+4),u*(m+4),!0,3.5,_p([`AAAARGH`,`A CAR?! INSIDE?!`,`INCIDENT REPORT!`,`MY LEGS`,`NOT THE CAR AGAIN`])),t.stats.ranOver++);for(let e of t.props.list)e.held||e.stuck||Math.hypot(e.pos.x-n.pos.x,e.pos.z-n.pos.z)<2&&(e.vel.x+=l*(m+2),e.vel.z+=u*(m+2),e.vel.y+=2);for(let e of this.list)e!==n&&e.static&&Math.hypot(e.pos.x-n.pos.x,e.pos.z-n.pos.z)<3&&!e.smashed&&this.smash(e,`The ramming`)}let h=Math.cos(n.yaw),g=-Math.sin(n.yaw);t.player.pos.x=n.pos.x-l*n.seatU+h*.36,t.player.pos.z=n.pos.z-u*n.seatU+g*.36,t.player.yaw=n.yaw,t.player.vel.x=l*n.speed,t.player.vel.z=u*n.speed}},Op=e=>document.getElementById(e),kp=e=>e[Math.floor(Math.random()*e.length)],Ap=e=>String(e).replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]),jp=[{id:`paging`,label:`Excessive paging / nagging`,text:`Paged or approached me repeatedly while I was actively not reporting their scan.`,valid:e=>(e.nagCount||0)>=3,why:e=>`${e.nagCount||0} nags logged`},{id:`form`,label:`Incomplete or inaccurate request form`,text:`Request form missing mandatory information. Again.`,valid:(e,t)=>t.cases.some(t=>t.requester===e.name&&t.redFlags.length),why:()=>`form deficiencies on file`},{id:`indication`,label:`Inappropriate imaging request`,text:`Requested imaging with no clear indication.`,valid:(e,t)=>t.cases.some(t=>t.requester===e.name&&t.path===`normal`),why:()=>`a low-yield request on file`},{id:`rude`,label:`Rudeness / unprofessional behaviour`,text:`Was rude to me. I may have shoved them first; that is not relevant.`,valid:e=>(e.anger||0)>=2,why:e=>`witnesses confirm they were "quite cross" (anger ${e.anger})`},{id:`fish`,label:`Microwaved fish in the staff room`,text:`The tea room smells of fish. I know it was them.`,valid:()=>Math.random()<.35,why:()=>`fish odour confirmed by the cleaner`},{id:`security`,label:`Excessive force`,text:`Escorted me back to my room with unnecessary firmness.`,valid:(e,t)=>e.role===`security`&&t.stats.caught>0,why:(e,t)=>`${t.stats.caught} escort(s) on record`},{id:`breathing`,label:`Breathing too loudly`,text:`Breathing audibly near my workstation.`,valid:()=>!1},{id:`existing`,label:`Existing near me`,text:`Was near me. On purpose, probably.`,valid:()=>!1}],Mp=[`Negligible`,`Minor`,`Moderate`,`Major`,`Catastrophic`];function Np(e,{onClose:t}){let n=Op(`riskman`),r=e.npcs.filter(e=>e.role!==`ghost`&&!e.remove),i=r.filter(e=>e.role!==`patient`&&e.role!==`cat`),a=r.filter(e=>e.role===`patient`||e.role===`cat`),o=e=>`<option value="${e.id}">${Ap(e.name)} (${Ap(e.title)})${e.reportedCount?` · ${e.reportedCount} upheld`:``}</option>`;Op(`rm-person`).innerHTML=`<optgroup label="Staff">${i.map(o).join(``)}</optgroup><optgroup label="Patients and other">${a.map(o).join(``)}</optgroup>`,Op(`rm-category`).innerHTML=jp.map(e=>`<option value="${e.id}">${Ap(e.label)}</option>`).join(``),Op(`rm-sev`).innerHTML=Mp.map((e,t)=>`<label><input type="radio" name="rm-sev" value="${t}" ${t===1?`checked`:``}> ${e}</label>`).join(``);let s=()=>{Op(`rm-desc`).value=jp.find(e=>e.id===Op(`rm-category`).value).text};Op(`rm-category`).onchange=s,s(),Op(`rm-result`).innerHTML=``,Op(`rm-submit`).disabled=!1,Fp(e),Pp(`file`);for(let e of document.querySelectorAll(`[data-rmtab]`))e.onclick=()=>Pp(e.dataset.rmtab);Op(`rm-close`).onclick=()=>{n.hidden=!0,t()},Op(`rm-submit`).onclick=()=>Rp(e),n.hidden=!1,n.dataset.openedAt=performance.now()}function Pp(e){for(let t of document.querySelectorAll(`[data-rmtab]`))t.classList.toggle(`on`,t.dataset.rmtab===e);for(let t of document.querySelectorAll(`[data-rmpane]`))t.hidden=t.dataset.rmpane!==e}function Fp(e){let t=e.riskman.filed,n=e.riskman.aboutYou;Op(`rm-count-mine`).textContent=t.length,Op(`rm-count-about`).textContent=n.length,Op(`rm-mine`).innerHTML=t.length?t.map(e=>`<tr><td>${e.ref}</td><td>${Ap(e.person)}</td><td>${Ap(e.category)}</td><td>${Mp[e.sev]}</td><td class="st-${e.status.split(` `)[0].toLowerCase()}">${Ap(e.status)}</td></tr>`).join(``):`<tr><td colspan="5" class="rm-empty">No reports filed. Yet.</td></tr>`,Op(`rm-about`).innerHTML=n.length?n.map(e=>`<tr><td>${e.ref}</td><td>${Ap(e.from)}</td><td>${Ap(e.category)}</td><td>${Ap(e.note)}</td></tr>`).join(``):`<tr><td colspan="4" class="rm-empty">Nobody has reported you. That you know of.</td></tr>`}var Ip=40211;function Lp(e,t,n,r){e.riskman.aboutYou.push({ref:`RM-`+Ip++,from:t,category:n,note:r})}function Rp(e){if(performance.now()-(+Op(`riskman`).dataset.openedAt||0)<450)return;let t=e.npcs.find(e=>String(e.id)===Op(`rm-person`).value),n=jp.find(e=>e.id===Op(`rm-category`).value),r=+(document.querySelector(`input[name="rm-sev"]:checked`)?.value||1);if(!t)return;let i=Op(`rm-result`);Op(`rm-submit`).disabled=!0,i.innerHTML=`<div class="rm-busy">Submitting… Your report has been assigned to a Senior Risk Officer.</div>`;let a=`RM-`+Ip++;e.stats.riskmansFiled++,setTimeout(()=>{let o=n.valid(t,e),s=o?.8:.12;r>=4?s-=.3:r===3&&(s-=.12),s-=.08*e.stats.vexatious;let c=Math.random(),l={ref:a,person:t.name,category:n.label,sev:r,status:``},u;c<.12?(l.status=`Pending (14 months)`,u=`<b>${a} received.</b> Expected review date: fourteen months from now. Thank you for helping us keep patients safe.`):c<.12+s*.88?(l.status=`Upheld`,e.stats.riskmansUpheld++,u=`<b>${a} upheld</b>${o&&n.why?` (${Ap(n.why(t,e))})`:``}. ${Ap(e.riskmanUpheld(t))}`):(l.status=`Vexatious`,e.stats.vexatious++,Lp(e,`Clinical Governance`,`Vexatious reporting`,`Re: your report ${a} about ${t.name} ("${n.label}")`),e.onVexatious(),u=`<b>${a} reviewed and found to be vexatious.</b> ${r>=3?`Rating "${Ap(n.label.toLowerCase())}" as ${Mp[r]} did not help. `:``}A RiskMann has been filed about <i>you</i>.`),e.riskman.filed.push(l),i.innerHTML=`<div class="rm-${l.status.split(` `)[0].toLowerCase()}">${u}</div>`,Op(`rm-submit`).disabled=!1,Fp(e)},1400)}var zp={meeting:e=>kp([`${e.name} has been called into a meeting with the Director of Medical Services.`,`${e.name} has been asked to "pop into the office for a quick chat".`,`${e.name} has been sent to a mandatory reflective-practice session.`]),stoodDown:e=>`${e.name} has been stood down pending investigation and escorted from the building. Their requests have been reassigned.`,patient:e=>`${e.name} has been transferred to another hospital "for their own comfort".`,cat:()=>`The cat has been issued a formal written warning. It does not care.`,dms:()=>`Gary from Executive has been reported to himself. He has scheduled a meeting about it.`},Bp=e=>document.getElementById(e),Vp=e=>String(e).replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]),Hp=[{id:`golf`,name:`Executive golf set (7-iron + unlimited balls)`,price:189,give:[`golfclub`],seller:`fairway_frank`,rating:99.1,sold:412,tag:`Free postage`,blurb:`Hold it and right-click to tee up and swing. Barely used (lost my job).`},{id:`bat`,name:`Cricket bat, premium willow, knocked in`,price:119,give:[`bat`],seller:`silly_mid_off`,rating:98.4,sold:77,tag:`Top-rated seller`,blurb:`Signed by someone. Can't read it.`},{id:`airhorn`,name:`Marine air horn 120 dB — LOUD`,price:39,give:[`airhorn`],seller:`boatparts4u`,rating:97,sold:1890,tag:`Hot item`,blurb:`Not for use indoors. Ships same day.`},{id:`cones`,name:`Traffic cones × 3 (lightly stolen)`,price:29,give:[`cone`,`cone`,`cone`],seller:`roadworks_rob`,rating:82.3,sold:31,tag:`Only 3 left`,blurb:`Close a corridor. Become unaccountable.`},{id:`o2`,name:`Oxygen cylinders × 3, size E`,price:450,give:[`o2`,`o2`,`o2`],seller:`definitely_a_hospital`,rating:64,sold:3,tag:`Collection preferred`,blurb:`Full. Probably. Keep away from fire (or don't).`},{id:`kebab`,name:`Family-size mixed kebab, garlic + chilli`,price:24,give:[`kebab`],seller:`kebab_king_3am`,rating:99.9,sold:23110,tag:`Delivered hot`,blurb:`The only correct 3am meal.`},{id:`extinguisher`,name:`Fire extinguisher, reconditioned`,price:349,give:[`extinguisher`],seller:`fire_sale_fiona`,rating:95.5,sold:58,tag:``,blurb:`Look down and hold to fly. Not in the manual.`},{id:`defib`,name:`AED defibrillator (ex-gym, working)`,price:1299,give:[`defib`],seller:`gymclosed_everythingmustgo`,rating:91.2,sold:6,tag:`Best offer`,blurb:`Pads included. Moral compass not included.`},{id:`bucket`,name:`Mop bucket, pre-filled, no sign`,price:35,give:[`bucket`],seller:`cleanteam_dave`,rating:99,sold:140,tag:``,blurb:`A slip hazard, as nature intended.`},{id:`keys`,name:`Car keys (various) NO QUESTIONS`,price:999,give:[],seller:`n0t_a_sc4m`,rating:12,sold:0,tag:`Buyer beware`,blurb:`Genuine. 100% legit. Pay by gift card preferred.`}],Up=2500;function Wp(e,{onClose:t}){let n=Bp(`store`);e.card===void 0&&(e.card={spent:0,declined:0}),Gp(e),Bp(`store-msg`).innerHTML=``,Bp(`store-close`).onclick=()=>{n.hidden=!0,t()},Bp(`store-search`).value=``,Bp(`store-search`).oninput=()=>Gp(e),n.hidden=!1,n.dataset.openedAt=performance.now()}function Gp(e){let t=Up-e.card.spent;Bp(`store-card`).innerHTML=`💳 <b>CORP VISA ••••&nbsp;4417</b> <small>found in desk drawer · available $${Math.max(0,t).toLocaleString()}</small>`;let n=Bp(`store-search`).value.trim().toLowerCase(),r=Hp.filter(e=>!n||(e.name+e.blurb+e.seller).toLowerCase().includes(n)),i=Bp(`store-list`);i.innerHTML=r.length?r.map(e=>`<div class="st-item">
      <div class="st-pic" data-pic="${e.id}"></div>
      <div class="st-info">
        <div class="st-name">${Vp(e.name)}</div>
        <div class="st-seller">${Vp(e.seller)} (${e.sold}) <span class="${e.rating<90?`st-bad`:``}">${e.rating}% positive</span></div>
        <div class="st-blurb">${Vp(e.blurb)}</div>
        <div class="st-row"><span class="st-price">$${e.price}</span>${e.tag?`<span class="st-tag">${Vp(e.tag)}</span>`:``}<button data-buy="${e.id}">Buy It Now</button></div>
      </div></div>`).join(``):`<div class="st-none">No results for "${Vp(n)}". Did you mean: golf set?</div>`;for(let t of i.querySelectorAll(`[data-buy]`))t.onclick=()=>Kp(e,t.dataset.buy)}function Kp(e,t){if(performance.now()-(+Bp(`store`).dataset.openedAt||0)<450)return;let n=Hp.find(e=>e.id===t);if(!n)return;let r=Bp(`store-msg`);if(e.card.spent+n.price>Up){e.card.declined++,r.innerHTML=`<div class="st-declined"><b>Card declined.</b> ${e.card.declined>2?`The card has been reported stolen. By you, apparently, in 2019.`:`Insufficient funds. Whoever owns this card is having a bad month too.`}</div>`;return}e.card.spent+=n.price,e.stats.ordersPlaced++,e.stats.orderSpend+=n.price,e.orders.push({give:n.give,name:n.name,at:e.time+3+Math.random()*3}),Gp(e),r.innerHTML=`<div class="st-ok"><b>You won!</b> ${Vp(n.name)} — seller ${Vp(n.seller)} will dispatch by courier drone to the ambulance bay. Leave feedback?</div>`}function qp(e){for(let t of e.orders.slice())e.time<t.at||(e.orders.splice(e.orders.indexOf(t),1),e.onDelivery(t))}var Jp=e=>document.getElementById(e),Yp=e=>String(e).replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]),Xp={casereport:{name:`Case_report_DRAFT_v3.docx`,icon:`doc`,kind:`doc`,body:`[[Sure! Here's a draft case report based on your notes. Feel free to adjust it to fit the journal's requirements:]]

# [INSERT CATCHY TITLE — something with a pun about "appendix"?]

**An Unusual Presentation of a Common Condition: A Case Report and Review of the Literature**

Authors: Dr ____, Dr ____ (ask if the consultant wants to be first author again), [[As an AI language model, I cannot be listed as an author.]]

## Abstract
We present the case of a 34-year-old man who presented to the Emergency Department with right iliac fossa pain. [[Would you like me to make the abstract more concise?]] Computed tomography demonstrated a fascinating and rare finding that delves into the rich tapestry of abdominal pathology.

## Introduction
Appendicitis is the most common surgical emergency worldwide, affecting approximately 7% of the population [1]. In today's fast-paced clinical landscape, it is more important than ever to navigate the complex realm of diagnostic imaging. [[make this sound less like a LinkedIn post]]

## Case presentation
A 34-year-old man presented with 2 days of periumbilical pain migrating to the RIF. He was febrile (38.4°C). WCC 15.2. CRP 88. Alvarado score 8 — the surgical registrar described this as "clinically appendicitis, scan not needed", which, notably, did not stop them requesting one at 03:12.

CT abdomen/pelvis with contrast demonstrated a dilated (11 mm) fluid-filled appendix with periappendiceal fat stranding and a 6 mm appendicolith. [[I'm sorry, but I can't view images. Could you describe the CT findings?]] The appendix was located in a retrocaecal position, which is [TODO: find out if this is actually unusual, I think it's like 65% of people??]

## Discussion
Retrocaecal appendicitis is a rare and fascinating entity. [[Note: I couldn't verify that retrocaecal appendicitis is rare; it is actually the most common position. You may want to revise this claim.]] This case highlights the importance of a multidisciplinary approach and underscores the pivotal role that radiology plays in the tapestry of modern medicine.

Key learning points:
- Appendicitis exists.
- CT can show it.
- [[Here are three more learning points you could add:]]
-

## Conclusion
In conclusion, this case serves as a testament to [[Regenerate response]]

## References
1. Smith J, et al. Appendicitis: a comprehensive review. J Abdom Imaging Excell. 2019;14(3):221–9. [[Note: I couldn't find this reference — please verify it exists.]]
2. Jones A, Smith J. The appendix and you. Lancet Radiol Surg Today. 2021;8:1–1.
3. [reference that supports what I said in paragraph 2 — FIND ONE]

[[Is there anything else you'd like me to help with? I can also format this for a specific journal, such as the BMJ Case Reports, or translate it into French.]]

prompt: make this under 1500 words and sound like a real doctor wrote it. not too AI. remove the word tapestry

[[Certainly! Here's a revised version with the word "tapestry" removed:]]`},rota:{name:`Rota_FINAL_v7_ACTUALFINAL(2).xlsx`,icon:`xls`,kind:`sheet`,rows:[[``,`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`,`Sun`],[`Day`,`Lim`,`Okafor`,`Lim`,`LEAVE`,`Okafor`,`—`,`—`],[`Evening`,`Patel`,`Patel`,`Novak`,`Novak`,`Patel`,`Lim`,`Novak`],[`NIGHT`,`YOU`,`YOU`,`YOU`,`YOU`,`YOU`,`YOU`,`YOU`],[`Backup`,`YOU`,`YOU`,`#REF!`,`#REF!`,`YOU`,`YOU`,`YOU`],[`Leave req.`,`YOU (declined)`,``,``,``,``,``,`Okafor (approved, Bali)`]]},passwords:{name:`passwords.txt`,icon:`txt`,kind:`pre`,body:`PACS: Password1
PACS (after forced reset): Password2
PACS (after forced reset again): Password3!
RiskMann: same as PACS but with "Risk" in front
Rota system: ask Linda
Linda's password: ask Linda
Wi-Fi: Guest-NoAccess
Car park gate code: 1234 (it was 0000 but security said that was "too obvious")
Coffee machine admin: there is no admin. It is in control now.
DO NOT LEAVE THIS FILE ON THE DESKTOP — IT`},resignation:{name:`resignation_letter_DO_NOT_SEND.docx`,icon:`doc`,kind:`doc`,body:`Dear Director of Medical Services,

Please accept this letter as formal notice of my resignation from the position of [[Sure! Here's a professional and polite resignation letter:]] on-call radiologist, effective immediately / at 08:00 / when I find my car.

After 14 years, 31,000 CT brains and one memorable night involving a microwave, I have decided to pursue other opportunities, such as sleeping.

I would like to thank the surgical registrars for teaching me that every scan is urgent, and the ED for teaching me that "?anything" is a clinical question.

[[You might want to keep the tone more positive to maintain professional relationships.]]

no

Yours sincerely,
(the radiologist)

P.S. The fish in the tea room was me.`},teaching:{name:`Registrar_teaching_FINAL.pptx`,icon:`ppt`,kind:`doc`,body:`# Slide 1: How to request a CT

# Slide 2: Don't.

# Slide 3: (Just kidding.) Include:
- A clinical question
- The patient's renal function
- The correct patient

# Slide 4: Real request forms (anonymised)
- "?anything"
- "pain"
- "please scan, family very anxious, consultant very anxious, I am very anxious"
- "CT whole body ?why unwell"

# Slide 5: Questions?

# Slide 6: [[Here's a fun closing slide idea: a picture of a cute cat holding a stethoscope!]]`},cat:{name:`IMG_4471_cat_in_scanner.jpg`,icon:`img`,kind:`cat`},readme:{name:`README_IT.txt`,icon:`txt`,kind:`pre`,body:`This computer is scheduled for a Windows update.
It has been scheduled since 2017.
Do not turn off.
Do not turn on.
Do not install games.
If you can read this, IT would like their stapler back.`}},Zp=[{id:`riskman`,name:`RiskMann`,icon:`app-rm`},{id:`store`,name:`Bidly`,icon:`app-bid`},{id:`casereport`},{id:`rota`},{id:`teaching`},{id:`resignation`},{id:`passwords`},{id:`cat`},{id:`readme`},{id:`bin`,name:`Recycle Bin`,icon:`bin`}],Qp={doc:`W`,xls:`X`,ppt:`P`,txt:`≡`,img:`▣`,bin:`🗑`,"app-rm":`R`,"app-bid":`b`};function $p(e,{onClose:t}){let n=Jp(`desktop`),r=Jp(`dt-icons`);r.innerHTML=Zp.map(e=>{let t=Xp[e.id],n=e.name||t.name,r=e.icon||t.icon;return`<button class="dt-icon" data-open="${e.id}"><span class="dt-glyph dt-${r}">${Qp[r]}</span><span class="dt-name">${Yp(n)}</span></button>`}).join(``);let i=()=>performance.now()-(+n.dataset.openedAt||0)>450;for(let t of r.querySelectorAll(`[data-open]`))t.onclick=()=>{i()&&s(e,t.dataset.open)};Jp(`dt-shutdown`).onclick=()=>{i()&&(o(),t())},Jp(`dt-start`).onclick=()=>{i()&&a(`Start menu has been disabled by your administrator.`)},Jp(`fv-close`).onclick=()=>{Jp(`fileview`).hidden=!0},Jp(`dt-clock`).textContent=Jp(`clock`).textContent,n.hidden=!1,n.dataset.openedAt=performance.now();function a(e){let t=Jp(`dt-note`);t.textContent=e,t.hidden=!1,clearTimeout(t._t),t._t=setTimeout(()=>{t.hidden=!0},2600)}function o(){n.hidden=!0,Jp(`fileview`).hidden=!0,Jp(`riskman`).hidden=!0,Jp(`store`).hidden=!0}function s(e,t){if(t===`riskman`){Np(e,{onClose:()=>{}});return}if(t===`store`){Wp(e,{onClose:()=>{}});return}if(t===`bin`){em({name:`Recycle Bin`,kind:`pre`,body:`audit_data_REAL.xlsx
my_dignity.tmp
CPD_portfolio_2019-2024 (never started).docx
Letter_of_complaint_draft_47.docx`});return}Xp[t]&&em(Xp[t])}}function em(e){Jp(`fv-title`).textContent=e.name;let t=Jp(`fv-body`);t.className=`fv-body fv-`+e.kind,t.innerHTML=e.kind===`sheet`?`<table>${e.rows.map((e,t)=>`<tr>${e.map(e=>t===0?`<th>${Yp(e)}</th>`:`<td class="${e===`YOU`?`fv-you`:e===`#REF!`?`fv-err`:``}">${Yp(e)}</td>`).join(``)}</tr>`).join(``)}</table>`:e.kind===`cat`?`<div class="fv-cat"><div class="fv-catimg">=^..^=</div><p>The ward cat, mid-CT. The DLP was unremarkable. The cat was not.</p></div>`:e.kind===`pre`?`<pre>${Yp(e.body)}</pre>`:tm(e.body),Jp(`fileview`).hidden=!1,t.scrollTop=0}function tm(e){let t=e=>Yp(e).replace(/\[\[(.+?)\]\]/g,`<mark class="fv-ai">$1</mark>`).replace(/\*\*(.+?)\*\*/g,`<b>$1</b>`).replace(/(\[(?:INSERT|TODO|reference)[^\]]*\])/g,`<span class="fv-todo">$1</span>`),n=[],r=!1;for(let i of e.split(`
`)){if(/^- /.test(i)){r||=(n.push(`<ul>`),!0),n.push(`<li>${t(i.slice(2))||`&nbsp;`}</li>`);continue}r&&=(n.push(`</ul>`),!1),/^# /.test(i)?n.push(`<h1>${t(i.slice(2))}</h1>`):/^## /.test(i)?n.push(`<h2>${t(i.slice(3))}</h2>`):i.trim()&&n.push(`<p>${t(i)}</p>`)}return r&&n.push(`</ul>`),n.join(``)}var Y=e=>document.getElementById(e),X=e=>e[Math.floor(Math.random()*e.length)],Z=(e,t)=>e+Math.random()*(t-e),nm=Y(`game`),rm=new Ru({canvas:nm,antialias:!0,powerPreference:`high-performance`});rm.setPixelRatio(Math.min(2,window.devicePixelRatio)),rm.outputColorSpace=Re;var im=new yn;im.background=new U(`#0d1320`),im.fog=new vn(`#2a2522`,.004);var am=new Xo(72,1,.05,200),om=600,sm=.5,Q={scene:im,camera:am,mode:`start`,time:0,cases:[],npcs:[],alarm:!1,alarmT:0,noFireT:0,wanted:0,complaints:0,pacsWet:0,quenched:!1,jetpack:!1,playerCausedFire:!1,T:{queue:4,chase:10,flood:15,beds:18,phone:20,consultant:22,dms:32},stats:{reported:0,correct:0,nailed:0,wrong:[],speed:0,fires:0,alarms:0,hits:0,throws:0,bedsLaunched:0,bedCrashes:0,npcsIgnited:0,pages:0,nags:0,argumentsWon:0,clinicalCalls:0,kicks:0,tackles:0,zaps:0,slips:0,bonks:0,radiationDoses:0,scanned:0,pinned:0,pagesMissed:0,carsSmashed:0,carsJacked:0,carCrashes:0,ranOver:0,golfBalls:0,honks:0,batHits:0,ordersPlaced:0,orderSpend:0,riskmansFiled:0,riskmansUpheld:0,vexatious:0,standDowns:0,argumentsLost:0,wildWins:0,wildUsed:null,consultantCalls:0,rumors:0,hides:0,timesFound:0,searchesEvaded:0,knocks:0,liftRides:0,roofFalls:0,roofThrows:0,boilers:0,helis:0,ghostChats:0,ancient:0,foundIn:null,caught:0,sandwiches:0,catPets:0,quenches:0,mriStuck:0,rockets:0,peakList:0,formsBounced:0,goodCatches:0,naps:0,selfIgnitions:0,ctJokes:0}};window.RADSSIM=Q,Q.world=vd(im),Q.fire=new bd(Q.world.baseFuel),Q.fire.onIgnite=(e,t)=>Q.world.scorch(e,t,.3),Q.fire.onBurnout=(e,t)=>Q.world.scorch(e,t,.8),Q.flameFx=new xd(im,{max:7e3,additive:!0}),Q.smokeFx=new xd(im,{max:3500}),Q.sprayFx=new xd(im,{max:3e3}),Q.props=new Ld(im),Q.player=new Jd(am,nm),Q.pacs=new qf(Q),Q.scan=new gp(Q),Q.cars=new Dp(Q),Q.orders=[];var cm=[];for(let e=0;e<4;e++){let e=new Qo(16742938,0,9,1.4);im.add(e),cm.push(e)}Q.isOpen=e=>!e.reported&&!e.cancelled&&e.status!==`toScan`,Q.openCases=()=>Q.cases.filter(Q.isOpen),Q.list=()=>Q.cases.reduce((e,t)=>e+ +!!Q.isOpen(t),0),Q.pendingFor=e=>Q.cases.filter(t=>Q.isOpen(t)&&t.requester===e.name&&(!t.snoozeUntil||t.snoozeUntil<Q.time)),Q.lastSeen={x:3.2,z:4.2,region:`main`,lift:!1},Q.rerequests=[],Q.playerVisible=()=>!Q.player.hidden,Q.playerRegion=()=>Qu(Q.player.pos.x,Q.player.pos.z);var lm=[];Q.queueIndex=e=>{let t=lm.indexOf(e);return t>=0?t:(t=lm.indexOf(null),t<0?lm.length>=Q.world.queueSpots.length?-1:(lm.push(e),lm.length-1):(lm[t]=e,t))},Q.leaveQueue=e=>{let t=lm.indexOf(e);t>=0&&(lm[t]=null)},Q.nearestFire=(e,t)=>{let n=null,r=1e9;for(let i of Q.fire.burning){if(i%96>63)continue;let a=i%96+.5,o=Math.floor(i/96)+.5,s=(a-e)**2+(o-t)**2;s<r&&(r=s,n={x:a,z:o})}return n},Q.flames=(e,t,n,r=1)=>{Math.random()<.6&&Q.flameFx.emit(e+Z(-.2,.2),t+Z(-.3,.3),n+Z(-.2,.2),Z(-.3,.3),Z(1,2),Z(-.3,.3),Z(.4,.7),.5*r,.1,1,Z(.35,.7),.1,.9)},Q.spray=(e,t,n,r,i,a,o)=>{for(let s=0;s<(o?4:3);s++){let s=o?Z(7,10):Z(5,8);Q.sprayFx.emit(e,t,n,r*s+Z(-.8,.8),i*s+Z(-.5,.8),a*s+Z(-.8,.8),Z(.5,.9),.12,.9,.95,.97,1,.55,2,1.5)}},Q.caught=e=>{if(Q.mode!==`play`)return;Q.stats.caught++,Q.wanted=0,e.say(`Gotcha. Back to your room, doc.`,3);let t=Y(`fade`);Y(`fade-text`).textContent=`Security escorts you back to the reading room. Incident report #${1e3+Q.stats.caught*37} filed.`,t.hidden=!1,setTimeout(()=>{Q.player.held&&Mm(),Q.player.pushing&&jm(!1),Q.player.pos.x=3.2,Q.player.pos.z=4.5,Q.player.yaw=Math.PI,t.hidden=!0},1800)},Q.riskman={filed:[],aboutYou:[]},Q.spills=[],Q.onAssault=e=>{if(Q.complaints++,e&&e.role!==`cat`&&e.anger>=2&&!e.filedOnYou&&Math.random()<.6){e.filedOnYou=!0;let t=X([`Assault by a radiologist`,`Physical intimidation`,`Unprofessional conduct`,`Being kicked (again)`]);Lp(Q,e.name,t,X([`"I was just asking about my scan."`,`"They didn't even say sorry."`,`"There were witnesses."`,`"My scrubs are ruined."`])),$(`${e.name} has filed a RiskMann about you.`,`bad`)}Q.complaints>=4&&Q.wanted<=0&&(Q.wanted=40,Q.complaints=0,$(`Complaints are piling up. Security has been called.`,`bad`))},Q.onVexatious=()=>{Q.complaints+=2,Q.complaints>=4&&Q.wanted<=0&&(Q.wanted=40,Q.complaints=0,$(`Complaints are piling up. Security has been called.`,`bad`))},Q.riskmanUpheld=e=>{if(e.reportedCount=(e.reportedCount||0)+1,e.role===`cat`)return zp.cat();if(e.role===`dms`)return e.dismiss=!0,zp.dms();if(e.role===`patient`)return e.detachBed(),e.goTo(10.5,27.5),e.setState(`leave`),zp.patient(e);if(Q.leaveQueue(e),e.reportedCount>=2){Q.stats.standDowns++,e.goTo(10.5,27.5),e.setState(`leave`),e.say(`This is so unfair.`,3);let t=Q.npcs.filter(t=>(t.role===`registrar`||t.role===`surgreg`)&&t!==e&&t.state!==`leave`);for(let n of Q.cases)n.requester===e.name&&t.length&&(n.requester=X(t).name);return zp.stoodDown(e)}return e.meetingT=90,e.meetingSpot=null,e.say(`I've been called into a meeting?!`,3),e.setState(`meeting`),zp.meeting(e)},Q.onStuck=e=>{if(Q.stats.mriStuck++,Q.scan.onMetalInBore?.(e),e.type!==`pager`){if(e.rider){let t=e.rider;t.detachBed(),t.knock(-3,0,!0)}$(X([`The ${e.T.name.toLowerCase()} is now part of the MRI.`,`CLANG. The magnet claims another.`,`A ${e.T.name.toLowerCase()} achieved escape velocity.`]))}},Q.onImpact=(e,t)=>{if(e.rider&&t>3.5){let t=e.rider;t.detachBed(),t.knock(e.vel.x*.8+Z(-1,1),e.vel.z*.8+Z(-1,1),!0),t.say(`WHEEEE—OW`,2,!0),Q.stats.bedCrashes++}};function um(e){let t=Q.player;t.pushing&&jm(!1),t.hidden=e,t.held&&(t.held.mesh.visible=!1),Q.hideT=0,Q.sneezeT=Z(25,55),Q.stats.hides++,Y(`hide-overlay`).dataset.kind=e.overlay,Y(`hide-overlay`).hidden=!1,$(e.note)}function dm(e){let t=Q.player,n=t.hidden;n&&(t.hidden=null,t.pos.x=n.exit.x,t.pos.z=n.exit.z,t.held&&(t.held.mesh.visible=!0),Y(`hide-overlay`).hidden=!0,e&&$(e))}Q.foundPlayer=e=>{let t=Q.player.hidden;if(t){if(Q.stats.timesFound++,Q.stats.foundIn=t.label,dm(`${e.name} found you ${t.label}.`),e.say(X(Ud.found),3,!0),K.ow(),e.role===`security`){Q.caught(e);return}e.setState(e.role===`consultant`||e.role===`dms`?`stalk`:e.role===`registrar`||e.role===`surgreg`?`chase`:`idle`,1)}},Q.onKnock=e=>{Q.stats.knocks++,Math.hypot(Q.player.pos.x-e.pos.x,Q.player.pos.z-e.pos.y)<14&&K.thud(.5)},Q.startRumor=e=>{Q.rumor={id:e.id,text:e.rumor,t:150},Q.rumorT=3,Q.stats.rumors++};function fm(){Q.mode=`form`,Q.player.unlock(),Y(`lift-modal`).hidden=!1,Q.liftOpenedAt=performance.now()}function pm(e){if(performance.now()-(Q.liftOpenedAt||0)<450)return;Y(`lift-modal`).hidden=!0;let t=Q.player,n=Q.playerRegion();if(!e||e===n){rh(),e===n&&$(`The lift doors open. You are exactly where you started.`);return}t.pushing&&jm(!1);let r=Q.world.lifts[e];Q.stats.liftRides++,Q.lastSeen={x:61.2,z:10.5,region:`main`,lift:n===`main`};let i=Y(`fade`);Y(`fade-text`).textContent=X([`*lift music*`,`Ding. The lift smells faintly of hot chips.`,`The lift stops at every floor. Nobody gets on.`,`*a smooth jazz rendition of Wonderwall*`]),i.hidden=!1,setTimeout(()=>{t.pos.x=r.x,t.pos.z=r.z,t.yaw=r.yaw,t.y=0,t.vy=0,t.held&&t.held.pos.set(r.x,1.2,r.z),i.hidden=!0,K.ding(),$({roof:`Roof. The helipad. The wind. The city asleep below.`,basement:`Basement. It's cold and something is humming.`,main:`Ground floor. The ED noise washes back over you.`}[e]),rh()},1300)}for(let e of document.querySelectorAll(`[data-floor]`))e.onclick=()=>pm(e.dataset.floor);var mm=Y(`toasts`);function $(e,t=``){let n=document.createElement(`div`);for(n.className=`toast `+t,n.textContent=e,mm.prepend(n),setTimeout(()=>n.classList.add(`out`),5200),setTimeout(()=>n.remove(),5800);mm.children.length>5;)mm.lastChild.remove()}Q.toast=$,Q.page=e=>hm(e),Q.reportAboutYou=(e,t,n)=>{Lp(Q,e,t,n),$(`${e} has filed a RiskMann about you.`,`bad`)},Q.onDelivery=e=>{let t={x:10+Z(-2,2),z:27};if(!e.give.length){$(`A courier drone drops your "${e.name}" at the ambulance bay. The box is empty. Of course it is.`),K.ding();return}for(let n=0;n<e.give.length;n++)Q.props.spawn(e.give[n],t.x+n*.5,1.2,t.z).vel.set(Z(-1,1),1,Z(-1,1));K.ding(),$(`Delivery! Your ${e.name} has landed in the ambulance bay.`,`good`)};function hm(e){if(Q.pagerStuck){Q.stats.pagesMissed++;return}Q.stats.pages++,K.pager(),$(`PAGER · ${e}`,`pager`)}var gm={};function _m(e,t){gm[e]!==t&&(gm[e]=t,Y(e).textContent=t)}function vm(){_m(`clock`,Hf(Q.time));let e=Q.list();_m(`wl-count`,String(e));let t=Q.openCases().reduce((e,t)=>Math.max(e,Q.time-t.arrived),0),n=Q.scan.queued(`ct`)+Q.scan.queued(`mri`)+Q.scan.queued(`xr`);_m(`wl-oldest`,(e?`oldest ${Math.floor(t/60)}h ${String(Math.floor(t%60)).padStart(2,`0`)}m`:`list clear`)+(n?` · ${n} being scanned`:``));let r=e>=Q.T.dms?4:e>=Q.T.consultant?3:e>=Q.T.chase?2:+(e>=Q.T.queue);Y(`worklist`).dataset.level=r,_m(`wl-status`,[`Quiet. Suspiciously quiet.`,`Registrars are queuing at your door`,`Registrars are hunting you`,`The ED consultant is looking for you`,`The Director of Medical Services is here`][r]),_m(`held`,Q.player.held?Q.player.held.T.name:Q.player.pushing?`Pushing a hospital bed`:``);let i=``;if(Q.player.held){let e=Q.player.held.T.use;i=`LMB throw · Q drop`+(e===`spray`?` · RMB spray (look down to fly)`:e===`ignite`?` · RMB flick lighter`:e===`eat`?` · RMB eat`:e===`drink`?` · RMB drink`:e===`zap`?` · RMB "CLEAR!"`:e===`golf`?` · RMB swing a golf ball`:e===`bat`?` · RMB swing the bat`:e===`honk`?` · RMB honk`:``)}else Q.player.pushing&&(i=`LMB launch bed · E let go`);_m(`held-hint`,i),Y(`alarm-vignette`).hidden=!Q.alarm,Y(`fire-overlay`).hidden=!(Q.player.onFire>0),Y(`wanted`).hidden=!(Q.wanted>0),Q.wanted>0&&_m(`wanted`,`SECURITY IS LOOKING FOR YOU · ${Math.ceil(Q.wanted)}s`)}function ym(){let e=Q.list(),t=Q.openCases().reduce((e,t)=>Math.max(e,Q.time-t.arrived),0),n=Q.world.tvCanvas.getContext(`2d`);n.fillStyle=`#081018`,n.fillRect(0,0,512,288),n.fillStyle=`#7fd3ff`,n.font=`bold 28px monospace`,n.fillText(`RADIOLOGY WORKLIST`,24,44),n.fillStyle=e>=20?`#ff4040`:e>=10?`#ffb347`:`#8cff9a`,n.font=`bold 110px monospace`,n.fillText(String(e),24,170),n.font=`24px monospace`,n.fillStyle=`#d6e6f2`,n.fillText(`UNREPORTED`,24+String(e).length*66+20,150),n.fillText(`Oldest: ${Math.floor(t/60)}h ${Math.floor(t%60)}m   Queue CT ${Q.scan.queued(`ct`)} · MRI ${Q.scan.queued(`mri`)} · XR ${Q.scan.queued(`xr`)}`,24,220),n.fillText(`On-call radiologist: ${Q.player.pos.z<8&&Q.player.pos.x<9?`IN ROOM`:`WHEREABOUTS UNKNOWN`}`,24,258),Q.world.tvTex.needsUpdate=!0;let r=Q.world.waitCanvas.getContext(`2d`);r.fillStyle=`#10243a`,r.fillRect(0,0,512,256),r.fillStyle=`#fff`,r.font=`bold 30px Arial`,r.fillText(`Welcome to RadsSim General ED`,20,50),r.font=`26px Arial`,r.fillStyle=`#ffd35c`,r.fillText(`Estimated wait: ${(2+e*.45).toFixed(1)} hours`,20,110),r.fillStyle=`#cfe3ff`,r.font=`22px Arial`,r.fillText(Q.alarm?`PLEASE EVACUATE CALMLY. (Nobody is calm.)`:`Please be kind to our staff.`,20,160),r.fillText(`The radiologist has been notified.`,20,200),Q.world.waitTex.needsUpdate=!0}var bm=[`Dr Priya Nakamura`,`Dr Tomasz Okafor`,`Dr Freya Lindqvist`,`Dr Kofi Abernathy`,`Dr Mei Castellano`,`Dr Declan Haddad`,`Dr Zara Thistlewood`,`Dr Luca Wibberley`,`Dr Ingrid Moreau`,`Dr Rahul Bishop`],xm=[`Mr Crumble`,`Mrs Pemberton`,`Ms Quill`,`Mr Sprocket`,`Mrs Van Dyke`,`Mr Ferreira`,`Ms Oyelaran`,`Mr Kowalczyk`,`Mrs Tanaka`,`Mr Mbeki`,`Ms Haddad`,`Mr Abernathy`];function Sm(e){let t=new qd(Q,e);return Q.npcs.push(t),t}function Cm(){let e=Q.props;e.spawn(`chair`,3.2,null,2.7,{yaw:Math.PI});for(let t=0;t<7;t++)e.spawn(`paper`,Z(1.4,8.5),null,Z(2.3,7.5));e.spawn(`paper`,1.8,.8,1.5),e.spawn(`paper`,4.4,.8,1.6),e.spawn(`bin`,5.9,null,1.5),e.spawn(`coffee`,1.5,.82,1.4),e.spawn(`coffee`,5,.82,1.8),e.spawn(`extinguisher`,1.4,null,7.5);for(let[t,n]of[[12.2,4.6],[15.2,4.6],[13.7,3.5],[13.7,5.7]])e.spawn(`chair`,t,null,n);e.spawn(`foil`,13.3,.82,4.5),e.spawn(`coffee`,14.2,.82,4.8),e.spawn(`bin`,10.5,null,7.3),e.spawn(`box`,15.2,.95,1.4),e.spawn(`extinguisher`,17.5,null,7.4),e.spawn(`wheelchair`,27.5,null,6.6),e.spawn(`box`,20.2,null,7.3);for(let t of[8.5,27,40.5])e.spawn(`extinguisher`,t,null,t===40.5?12.6:9.35);e.spawn(`wheelchair`,15.5,null,12.4),e.spawn(`o2`,30.2,null,9.4),e.spawn(`bin`,19.6,null,9.35);for(let t of Q.world.bays){let n=e.spawn(`bed`,t.x,null,t.z,{yaw:0});e.spawn(`ivpole`,t.x+.9,null,t.z-1.2),Sm({role:`patient`,name:X(xm),x:t.x,z:t.z,home:{zone:`resus`}}).attachBed(n)}e.spawn(`o2`,1.6,null,20.2),e.spawn(`o2`,19.6,null,19.6),e.spawn(`defib`,1.5,1.1,17.9),e.spawn(`defib`,12.5,1.15,15.9),e.spawn(`bedpan`,4.5,null,20.5),e.spawn(`bedpan`,16.3,null,21),e.spawn(`bedpan`,46.6,null,5.5),e.spawn(`bucket`,49.2,null,11.9),e.spawn(`bucket`,54.8,null,21.6),e.spawn(`bucket`,20.5,null,23.8),e.spawn(`box`,9.5,1.1,15.9),e.spawn(`paper`,10.6,1.1,15.8),e.spawn(`paper`,12.1,1.1,16.1),e.spawn(`bin`,14.2,null,14.6),e.spawn(`bin`,24,null,23.8),e.spawn(`bin`,40.5,null,23.8),e.spawn(`coffee`,28.5,.5,19.6),e.spawn(`paper`,36.3,.5,22),e.spawn(`lighter`,17.3,.5,28.2),e.spawn(`coffee`,16.4,.5,28.2);let t=[...Q.world.seats].sort(()=>Math.random()-.5);for(let e=0;e<9;e++){let n=t[e],r=Sm({role:`patient`,name:X(xm),x:n.x,z:n.z,home:{zone:`waiting`},special:e===0?`sandwich`:null});r.seat=n,r.setState(`sit`),e===0&&(r.name=`Sandwich Guy`)}Sm({role:`patient`,name:`Confused Mr Pemberton`,x:12,z:11,home:{zone:`corridor`}});for(let e=0;e<3;e++)Sm({role:`nurse`,name:X([`Nurse Jo`,`Nurse Sipho`,`Nurse Aroha`,`Nurse Dev`,`Nurse Bel`]),x:Z(3,18),z:Z(14.5,19),home:{zone:`resus`}});Sm({role:`nic`,name:`Deb (Nurse in Charge)`,x:10,z:17,home:{zone:`resus`}});for(let e=0;e<4;e++)Sm({role:`registrar`,name:bm[e],x:Z(3,18),z:Z(14.5,19),home:{zone:e%2?`resus`:`corridor`}});Sm({role:`security`,name:`Big Steve`,x:23.5,z:16,home:{zone:`waiting`}}),Sm({role:`cat`,name:`Dr Whiskers`,x:20,z:11,home:{zone:`corridor`}}),Sm({role:`chaplain`,name:`Reverend Pat`,x:48,z:21.5,home:{zone:`chapel`}}),Sm({role:`cleaner`,name:`Marguerite (Cleaner)`,x:50,z:10.5,home:{zone:`corridor`}});for(let[e,t,n,r,i]of[[`ct`,`Radiographer Nikhil (CT)`,20.5,5.5,`ctctl`],[`mri`,`Radiographer Siobhan (MRI)`,31.5,5.2,`mrictl`],[`xr`,`Radiographer Tui (X-ray)`,52.8,3.4,`xray`]]){let a=Sm({role:`radiographer`,name:t,x:n,z:r,home:{zone:i}});a.scanner=e}for(let t of Q.world.gelSpots)e.spawn(`gel`,t.x,null,t.z);e.spawn(`box`,60.4,null,23),e.spawn(`box`,61.6,null,21.6),e.spawn(`paper`,59.6,null,21.6);for(let[t,n]of Q.world.cafeChairs)e.spawn(`chair`,t,null,n);e.spawn(`coffee`,58,.8,15.4),e.spawn(`bin`,62.3,null,16),e.spawn(`paper`,60.5,.55,2.2),e.spawn(`coffee`,62.4,.62,4.6),e.spawn(`paper`,46.5,null,16.3),e.spawn(`bin`,44.6,null,14.6),e.spawn(`chair`,76,null,4),e.spawn(`box`,88,null,10),e.spawn(`bin`,70,null,11);for(let t=0;t<6;t++)e.spawn(`paper`,Z(80,93),null,Z(18.2,19.6));e.spawn(`o2`,67.5,null,27.8),e.spawn(`box`,75,null,21.4),e.spawn(`chair`,90,null,27)}function wm(){return Q.npcs.filter(e=>e.role===`registrar`||e.role===`surgreg`)}function Tm(e={}){let t=wm(),n=Lf({requester:e.requester||X(t)?.name,gameMinutes:Q.time,forced:e.forced});return e.location&&(n.location=e.location),e.clinical&&(n.clinical=e.clinical),e.study&&(n.study=e.study),Q.cases.push(n),!e.prescanned&&Q.scan.enqueue(n,e.urgent)?n:(Q.stats.peakList=Math.max(Q.stats.peakList,Q.list()),e.silent||$(`New request: ${n.study} · ${n.location}`),Q.mode===`pacs`&&Q.pacs.renderList(),n)}Q.onScanned=e=>{e.status=`done`,e.arrived=Q.time,Q.stats.scanned++,Q.stats.peakList=Math.max(Q.stats.peakList,Q.list()),$(`On PACS: ${e.study} · ${e.location}`),Q.mode===`pacs`&&Q.pacs.renderList()},Q.onReport=(e,t,n,r,i=!1)=>{e.reported=!0,e.finding=t,Q.stats.reported++,i&&Q.stats.speed++,n?Q.stats.correct++:Q.stats.wrong.push(e),r&&Q.stats.nailed++,i||(n?K.sign:K.wrong)();let a=Q.npcs.find(t=>t.name===e.requester);a&&!Q.pendingFor(a).length&&[`chase`,`queued`,`toQueue`].includes(a.state)&&(Q.leaveQueue(a),a.say(X(Ud.thanks),2.5),a.cooldown=30,a.think())};function Em(){return Q.props.raycast(Q.player.eye(),Q.player.lookDir(),2.8,e=>e.T.bed&&!e.stuck)?.prop||null}function Dm(e=2.6){let t=Q.player.eye(),n=Q.player.lookDir(),r=null,i=e;for(let e of Q.npcs){let a=e.state===`lie`?.95:e.state===`knocked`?.3:e.role===`cat`?.35:1.2,o=e.pos.x-t.x,s=a-t.y,c=e.pos.y-t.z,l=o*n.x+s*n.y+c*n.z;if(l<0||l>i)continue;let u=o*o+s*s+c*c-l*l,d=e.role===`cat`?.4:.55;u<d*d&&(i=l,r={npc:e,dist:l})}let a=Q.props.raycast(t,n,e);return a&&a.dist<i&&(r={prop:a.prop,dist:a.dist}),r}function Om(){let e=Q.player.pos,t=Q.player.forward(),n=null,r=-1;for(let i of Q.world.interactables){let a=i.x-e.x,o=i.z-e.z,s=Math.hypot(a,o);if(s>i.r)continue;let c=s<.3?1:(a*t.x+o*t.z)/s;if(c<.2)continue;let l=c-s*.2;l>r&&(r=l,n=i)}return n}function km(){if(Q.player.hidden)return``;if(Q.player.inCar)return`Driving ${Q.player.inCar.owner}\nWASD drive · Shift floor it · E — get out`;if(Q.player.pushing)return`E — let go of the bed`;let e=Q.cars.nearest(Q.player.pos.x,Q.player.pos.z,2.6);if(e)return`${e.owner[0].toUpperCase()+e.owner.slice(1)} (${e.plate})\nE — break in and hotwire it${e.smashed?``:` · LMB/kick to smash a window`}`;let t=Dm();if(t?.npc){let e=t.npc,n=Q.pendingFor(e).length,r=(e.role===`registrar`||e.role===`surgreg`)&&n?`E — take their request form (${n} waiting)`:e.role===`cat`?`E — pet the cat`:`E — talk`;return`${e.name} · ${e.title}\n${r}${!Q.player.held&&e.state!==`lie`?` · LMB shove`:``}`}let n=Om();if(n)return`E — ${n.id===`door`?Q.world.doorLocked?`Unlock the reading-room door`:`Lock the reading-room door`:n.label}`;let r=Em();if(r&&!Q.player.held&&!(t?.prop&&!t.prop.T.bed&&t.dist<1.2))return`${r.T.name}${r.rider?` (${r.rider.name} aboard)`:``}\nE — push it${t?.prop&&!t.prop.T.bed?` · LMB pick up ${t.prop.T.name.toLowerCase()}`:``}`;if(t?.prop){let e=t.prop;return e.T.bed?`${e.T.name}${e.rider?` (occupied)`:``}\nE — push it`:!Q.player.held&&e.T.mass<=20&&!e.stuck?`${e.T.name}\nLMB — pick up`:e.T.name}return``}function Am(){let e=Q.player;if(e.hidden){dm(`You come out of hiding.`);return}if(e.inCar){Q.cars.exit();return}if(e.pushing){jm(!1);return}let t=Dm();if(t?.npc){Pm(t.npc);return}let n=Q.cars.nearest(e.pos.x,e.pos.z,2.6);if(n&&!(t?.prop&&t.dist<1.6)&&!Om()){Q.cars.enter(n);return}let r=Om();if(r?.hide){um(r.hide);return}if(r){Im(r.id);return}let i=Em();i&&(e.pushing=i,i.pushed=!0,e.held&&Mm())}function jm(e){let t=Q.player,n=t.pushing;if(!n)return;n.pushed=!1;let r=t.forward();e?(n.vel.set(t.vel.x*1.3+r.x*7,0,t.vel.z*1.3+r.z*7),Q.stats.bedsLaunched++,K.whoosh(),n.rider&&n.rider.say(X([`WHEEEE`,`NOT AGAIN`,`Is this... physio?`,`I SAID I NEEDED A WEE`]),2,!0)):n.vel.set(t.vel.x,0,t.vel.z),t.pushing=null}function Mm(){let e=Q.player.held;e&&(e.held=!1,e.vel.set(Q.player.vel.x,0,Q.player.vel.z),Q.player.held=null)}function Nm(e){Q.player.held&&Mm();let t=Q.props.spawn(e,Q.player.pos.x,1.2,Q.player.pos.z);return t.held=!0,Q.player.held=t,t}function Pm(e){let t=Q.player;if((e.role===`registrar`||e.role===`surgreg`)&&Q.pendingFor(e).length){let t=Q.pendingFor(e).sort((e,t)=>e.arrived-t.arrived)[0];Fm(t,e);return}switch(e.role){case`cat`:e.say(`purrrrr`,2),Q.stats.catPets++,K.meow();break;case`consultant`:e.say(`...`,3),$(`The consultant stares at you until you look away.`);break;case`dms`:e.say(`Let's schedule a meeting about this meeting.`,3);break;case`security`:e.say(Q.wanted>0?`Oh, it's YOU.`:`Keep your nose clean, doc.`,3),Q.wanted>0&&Q.caught(e);break;case`firefighter`:e.say(`Stand back, doc!`,2);break;case`radiographer`:{let t=Q.scan.queued(e.scanner);e.say(X([t?`${t} in my queue. Report faster, doc.`:`Quiet for once. Don't jinx it.`,`Please don't stand in the room during a scan.`,`Who keeps ordering scans on sandwiches?`,e.scanner===`mri`?`NO METAL past that line.`:`Lead aprons are on the hook if you're staying.`]),3);break}case`chaplain`:e.say(X(Ud.chaplain),3),Q.list()>10&&$(`The chaplain offers to pray for your worklist.`);break;case`cleaner`:e.say(X(Ud.cleaner),3);break;case`ghost`:e.say(X(Ud.ghost),3.5),Q.stats.ghostChats++,Q.stats.ghostChats===1&&$(`The ghost passes through you. You feel a sudden urge to report something.`);break;case`nic`:e.say(Q.playerCausedFire?`I KNOW it was you.`:X([`Can you please just report the scans?`,`Resus is full. Do your job.`,`Do NOT touch my whiteboard.`]),3);break;case`nurse`:e.say(X([`Can you not? I'm busy.`,`Are you... lost?`,`The radiologist! In the wild!`,`Your pager's going off, by the way.`]),3);break;case`registrar`:case`surgreg`:e.say(X([`All good for now!`,`Thanks for earlier!`,`Nothing pending, promise.`]),2.5);break;default:e.special===`sandwich`?e.say(t.held?.type===`sandwich`?`Is... is that MY sandwich?`:`No, you can't have my sandwich.`,3):e.say(X([`Are you my doctor?`,`I've been waiting SO long`,`Can I have some water?`,`Where's the toilet?`,`Is it bad, doc? Be honest.`,`Nice lanyard`]),3)}}function Fm(e,t){Q.mode=`form`,Q.player.unlock(),Wf(e,{mode:`registrar`,onAccept:()=>{e.accepted=!0,e.snoozeUntil=Q.time+40,t.say(X(Ud.thanks),2.5),t.cooldown=45,Q.leaveQueue(t),t.think(),$(`You promised to look at ${e.patient}'s ${e.study} "now". The clock is ticking.`),rh()},onBounce:()=>{Q.stats.formsBounced++,Q.mode=`form`;let n=n=>{e.accepted=!0,e.snoozeUntil=Q.time+40,t.say(X(n?[`Told you.`,`Thank you. Finally.`,`*smug face*`]:Ud.thanks),2.5),t.cooldown=45,Q.leaveQueue(t),t.think(),$(`You're doing ${e.patient}'s ${e.study}. It's on you now.`),rh()};up(Q,e,t,{onWin:n=>{if(e.cancelled=n,n===`clinical`){t.say(`Theatre it is. Thanks!`,3),t.cooldown=40,Q.leaveQueue(t),t.think(),$(`${e.patient} goes straight to theatre. No scan needed. Good call.`,`good`),rh();return}t.say(n===`wild`?`I need to go tell everyone.`:X(Ud.bounce),3),t.anger++,t.cooldown=40,Q.leaveQueue(t),t.think(),Math.random()<.4&&Q.rerequests.push({c:e,at:Q.time+Z(40,90)}),$(`${e.study} for ${e.patient} withdrawn. The list shrinks by one.`,`good`),rh()},onLose:()=>n(!0),onAccept:()=>n(!1)})},onNod:()=>{t.say(`...so is that a yes?`,2.5),t.cooldown=12,Q.leaveQueue(t),t.think(),rh()}})}function Im(e){let t=Q.player;switch(e){case`pacs`:if(Q.pacsWet>0){$(`PACS is soaked. It makes a sad fizzing noise.`);return}Q.mode=`pacs`,t.unlock(),Q.pacs.open(),Y(`hud`).classList.add(`dim`);break;case`phone`:Q.phoneRinging?(Q.phoneRinging=!1,Q.phoneQuiet=45,$(`"Hi, it's ${X(bm)}. Just wondering about ${X(Q.openCases())?.patient||`nothing`}..." You hang up.`)):$(`Dial tone. You consider calling your mum. You don't.`);break;case`couch`:{Q.stats.naps++;let e=Y(`fade`);Y(`fade-text`).textContent=`You nap for 45 minutes. The pager does not.`,e.hidden=!1,Q.time+=45;for(let e=0;e<4;e++)Tm({silent:!0});setTimeout(()=>{e.hidden=!0,$(`You wake up to 4 new requests and 7 pages.`),Q.stats.pages+=7},1600);break}case`microwave`:{let e=t.held;if(Q.microwaveBusy){$(`The microwave is busy. Something is sparking.`);return}if(e&&(e.T.metal||e.type===`paper`||e.type===`lighter`)){let n=e.T.name.toLowerCase();t.held=null,Q.props.remove(e),Q.microwaveBusy=3.5,Q.microwaveFire=!0,Q.world.microwaveGlow.material.color.set(`#ffb347`),$(`You microwave the ${n}. This is fine.`)}else e&&e.type===`sandwich`?($(`You warm the sandwich. 10/10 decision.`),Q.microwaveBusy=2,Q.microwaveFire=!1,Q.world.microwaveGlow.material.color.set(`#ffb347`)):($(`You microwave nothing for 30 seconds. The hum is soothing.`),Q.microwaveBusy=2,Q.microwaveFire=!1,Q.world.microwaveGlow.material.color.set(`#ffb347`));break}case`toaster`:Q.toast_n=(Q.toastT>0?Q.toast_n:0)+1,Q.toastT=20,Q.toast_n>=3?($(`The toast has become charcoal. The charcoal has become fire.`,`bad`),Lm(13.2,1.5,.6),Q.toast_n=0):$(Q.toast_n===1?`Toast: golden. Perfect.`:`Toast again? It's getting quite dark...`);break;case`fridge`:Nm(`sandwich`),$(`A sandwich labelled "DO NOT TOUCH — CT RADIOGRAPHER". You take it.`);break;case`kettle`:Nm(`coffee`),$(`Instant coffee. The taste of 3am.`);break;case`vending`:{K.thud(1);let e=Math.random();e<.45?(Q.props.spawn(Math.random()<.6?`sandwich`:`coffee`,42.1,.6,15.6).vel.set(Z(-1,1),2,2),$(`The machine drops something. Free food!`)):e<.6?($(`You shake it harder. Security is watching.`),Q.onAssault()):$(`The machine eats your coins. It is not sorry.`);break}case`ctconsole`:{let e=Q.world.ctTable,t=Q.npcs.find(t=>Math.hypot(t.pos.x-e.x,t.pos.y-e.z)<2.3),n=Q.props.list.find(t=>Math.hypot(t.pos.x-e.x,t.pos.z-e.z)<2&&!t.held);if(t||n){Q.stats.ctJokes++;let e=n?.type===`sandwich`?`sandwich`:X([`fork`,`pager`,`sandwich`,`normal`]),r=t?t.name:`a ${n.T.name.toLowerCase()}`;Tm({prescanned:!0,forced:{modality:`abdo`,path:e},location:`CT Room`,study:`CT Whole Body (unrequested)`,clinical:`Scanned ${r} because they were near the scanner. No clinical indication whatsoever.`}),t&&t.say(`Did... did you just scan me?`,3),$(`You CT'd ${r}. It's on the worklist now. You'll have to report it.`)}else $(`You scan an empty table. That's 1 mSv of nothing.`);break}case`door`:{let e=!Q.world.doorLocked;Q.world.setDoorLocked(e),K.click(),$(e?`You lock the reading-room door. Registrars will have to knock. (Forms still fit under it.)`:`You unlock the door. Brace yourself.`);break}case`lift`:fm();break;case`riskman`:Q.mode=`form`,t.unlock(),$p(Q,{onClose:()=>rh()});break;case`mirror`:$(Q.sootT>0?`You are covered in soot. Your eyebrows are gone.`:Q.list()>20?`You look like someone with `+Q.list()+` unreported scans.`:X([`You look like you've been awake for 19 hours. Because you have.`,`Lanyard: crooked. Soul: tired.`,`You practise saying "no acute abnormality" in the mirror.`]));break;case`bed`:{Q.stats.naps++;let e=Y(`fade`);Y(`fade-text`).textContent=`You sleep in the on-call bed for 90 glorious minutes.`,e.hidden=!1,Q.time+=90;for(let e=0;e<8;e++)Tm({silent:!0});setTimeout(()=>{e.hidden=!0,$(`You wake up to 8 new requests, 14 pages and a registrar asleep outside the door.`,`bad`),Q.stats.pages+=14},1800);break}case`candles`:{Q.candlesLit=(Q.candlesLit||0)+1;let e=Q.world.candles;if(Q.candlesLit<=e.length)e[Q.candlesLit-1].visible=!0,K.flick(),$(Q.candlesLit===1?`You light a candle for your worklist.`:Q.candlesLit===e.length?`All the candles are lit. It's very atmospheric.`:`Another candle. For the registrars.`);else{$(`You reach for another candle and knock the whole stand over.`,`bad`);for(let t of e)t.visible=!1;Q.candlesLit=0,Lm(45,23.4,.7)}break}case`espresso`:Nm(`coffee`),$(`You hit the closed coffee machine. It dispenses one perfect espresso. Nobody must know.`);break;case`heli`:if(Q.heliT>0){$(`The rotor is already going. You press more buttons. A light comes on that says "NO".`);return}Q.heliT=16,Q.stats.helis++,$(`You press buttons in the helicopter. The rotor starts spinning. You do not know how to stop it.`,`bad`);break;case`boiler`:if(Q.boilerN=(Q.boilerN||0)+1,Q.boilerT=30,K.clang(),Q.world.gauge.rotation.z=-Q.boilerN*.9,Q.boilerN<3)$(Q.boilerN===1?`You crank the boiler. The needle rises. It feels nice and warm.`:`The needle is in the red. The boiler is making a noise like a whale.`);else{Q.boilerN=0,Q.world.gauge.rotation.z=0,Q.stats.boilers++,K.whoomph(),K.hiss();for(let e=0;e<250;e++)Q.smokeFx.emit(69.5+Z(-1,1),Z(.5,2.5),26.5+Z(-1,1),Z(-3,3),Z(0,2),Z(-3,3),Z(2,4),.8,3,.9,.9,.92,.6);Lm(69.5,25.3,.9),Lm(72,26.5,.7),$(`The boiler bursts. Steam everywhere. Also fire. The morning maintenance team will be thrilled.`,`bad`)}break;case`oldbox`:if(Q.stats.ancient){$(`The old lightbox flickers. There's nothing else on it.`);return}Q.stats.ancient=1;{let e=Tm({silent:!0,prescanned:!0,forced:{modality:`chest`,path:X([`ptx`,`mass`,`consolidation`,`normal`])},study:`CT Chest (1987, never reported)`,location:`Basement (lost)`,clinical:`Handwritten in fountain pen: "?something. Pls report. Urgent." Dated 14/3/1987.`});e.arrived=Q.time-20498400,e.patient=`UNKNOWN, 1987`}$(`You switch on the old lightbox. A film from 1987 is still clipped to it. It was never reported. It's on your list now.`,`bad`);break;case`quench`:if(Q.quenched){$(`Already quenched. The physicist is still crying.`);return}Q.quenched=!0,Q.stats.quenches++,K.hiss();for(let e of Q.props.list)e.stuck&&(e.stuck=!1,e.vel.set(Z(-2,2),1,Z(-2,2)));for(let e of Q.npcs)e.state===`pinned`&&e.release();for(let e=0;e<400;e++)Q.smokeFx.emit(Z(31,42),Z(.5,2.8),Z(1.5,7.5),Z(-1,1),Z(-.2,.5),Z(-1,1),Z(3,6),1,3,.95,.97,1,.5);$(`You quenched the MRI. That was about $1.2 million of helium. Somewhere, a physicist wakes up screaming.`,`bad`)}}function Lm(e,t,n=.5){return Q.fire.ignite(e,t,n)?(Q.stats.fires++,Q.playerCausedFire=!0,Q.lastFireByPlayer=Q.time,K.whoomph(),!0):!1}window.addEventListener(`keydown`,e=>{if(e.code===`KeyH`&&(Q.mode===`play`||Q.mode===`paused`)&&(Y(`help`).hidden=!Y(`help`).hidden),Q.mode===`play`){if(e.code===`KeyE`&&Am(),e.code===`KeyF`&&Rm(),e.code===`KeyQ`&&(Q.player.held?Mm():Q.player.pushing&&jm(!1)),e.code===`KeyL`){for(let e=0;e<5;e++)Tm({silent:!0});$(`Cheat: +5 requests dumped on the list.`)}e.code===`KeyT`&&(Q.time=Math.min(599,Q.time+60),$(`Cheat: skipped an hour.`))}});function Rm(){let e=Q.player;if(e.hidden||Q.kickT>0)return;Q.kickT=.5,Q.kickAnim=.25;let t=e.forward(),n=Dm(2.2);if(K.whoosh(),n?.npc&&n.npc.state!==`lie`)Q.stats.kicks++,K.thud(1),n.npc.knock(t.x*9,t.z*9,!0,4.5,X([`OOF!`,`MY SPLEEN!`,`WHAT WAS THAT FOR?!`,`OW OW OW`]));else if(n?.prop&&!n.prop.stuck&&!n.prop.T.bed){let e=n.prop,r=12/Math.sqrt(Math.max(1,e.T.mass/2));e.vel.set(t.x*r,4,t.z*r),e.spin=Z(-15,15),K.thud(.7)}else if(n?.prop?.T.bed)n.prop.vel.set(t.x*6,0,t.z*6),K.thud(.8),n.prop.rider&&n.prop.rider.say(`HEY! I'm a patient!`,2,!0);else{let n=Q.cars.nearest(e.pos.x+t.x*1.6,e.pos.z+t.z*1.6,2);n&&Q.cars.smash(n,`You`)}}Q.kick=Rm;function zm(e){e.spilled=!0,Q.spills.push({x:e.pos.x,z:e.pos.z,r:1.7,t:120});for(let t=-1;t<=1;t++)for(let n=-1;n<=1;n++)Q.world.puddle(Math.floor(e.pos.x)+t,Math.floor(e.pos.z)+n);for(let t=0;t<60;t++)Q.sprayFx.emit(e.pos.x,.4,e.pos.z,Z(-3,3),Z(1,3),Z(-3,3),.6,.12,.05,.55,.6,.55,.8,9);$(`The mop bucket goes over. Grey water everywhere. Wet floor, no sign.`)}function Bm(e){let t=Q.player;if(t.hidden||t.inCar){t.mouse.leftPressed=!1,Q.jetpack=!1;return}if(t.mouse.leftPressed){if(t.mouse.leftPressed=!1,t.held){let e=t.held,n=t.lookDir(),r=15/Math.sqrt(Math.max(1,e.T.mass/1.5));e.held=!1,e.vel.set(n.x*r+t.vel.x,n.y*r+2,n.z*r+t.vel.z),e.spin=Z(-12,12),t.held=null,Q.stats.throws++,K.whoosh()}else if(t.pushing)jm(!0);else{let e=Dm();if(e?.prop?.type===`pager`&&!e.prop.stuck)Q.props.remove(e.prop),Q.pagerStuck=!1,K.pager(),$(`You clip your pager back on. It immediately goes off.`,`bad`);else if(e?.prop&&!e.prop.T.bed&&e.prop.T.mass<=20&&!e.prop.stuck)e.prop.held=!0,e.prop.vel.set(0,0,0),t.held=e.prop,K.click();else if(e?.npc&&e.dist<2&&e.npc.state!==`lie`){let n=t.forward();e.npc.knock(n.x*5,n.z*5,!0)}}}Q.jetpack=!1;let n=t.held;if(t.mouse.right&&n){let r=t.forward(),i=t.lookDir();if(n.T.use===`spray`){Q.sprayT=(Q.sprayT||0)-e,Q.sprayT<=0&&(K.spray(),Q.sprayT=.18),Q.fire.suppressCone(t.pos.x,t.pos.z,r.x,r.z,5,3,e);let n=t.eye();Q.spray(n.x+i.x*.6,n.y-.3+i.y*.6,n.z+i.z*.6,i.x,i.y,i.z),t.pitch<-.9?(Q.jetpack=!0,Q.flewOnce||(Q.flewOnce=!0,$(`You are flying on a fire extinguisher. This is not in the fire safety training.`))):(t.vel.x-=r.x*3*e,t.vel.z-=r.z*3*e);for(let e of Q.npcs){let n=e.pos.x-t.pos.x,i=e.pos.y-t.pos.z,a=Math.hypot(n,i);a<3&&(n*r.x+i*r.z)/a>.8&&(e.state===`onfire`?e.stateT=0:e.sayT<=0&&e.say(X([`HEY!`,`I'm not on fire!`,`Is this foam?!`,`*spluttering*`]),1.5,!0))}}else if(!Q.rightWas){if(n.T.use===`zap`){if(Q.defibT>0)$(`Charging… (the paddles whine ominously)`);else{Q.defibT=2.5;let e=Dm(2.4),n=t.eye();K.sparks(),K.clang();for(let e=0;e<25;e++)Q.flameFx.emit(n.x+i.x*.9,n.y-.2+i.y,n.z+i.z*.9,Z(-2,2),Z(-1,2),Z(-2,2),.3,.1,.02,.5,.8,1,1);e?.npc?(Q.stats.zaps++,$(e.npc.state===`lie`?`"CLEAR!" The patient was not in cardiac arrest. They are now very awake.`:`"CLEAR!"`),e.npc.zap(r.x,r.z)):$(`"CLEAR!" You shock the air. Everybody looks at you.`)}}else if(n.T.use===`ignite`){K.flick();let e=t.eye(),n=!1,r=Dm(3);if(r?.npc)r.npc.ignite(),Q.stats.fires++,Q.playerCausedFire=!0,n=!0;else if(r?.prop&&(r.prop.T.fuel||0)>0)n=Lm(r.prop.pos.x,r.prop.pos.z,.6);else if(i.y<-.05){let t=e.y/-i.y;t<3.5&&(n=Lm(e.x+i.x*t,e.z+i.z*t,.45))}for(let t=0;t<6;t++)Q.flameFx.emit(e.x+i.x*.7,e.y-.25,e.z+i.z*.7,Z(-.1,.1),.6,Z(-.1,.1),.3,.12,.04,1,.6,.15,1);!n&&Math.random()<.3&&$(`*flick* Nothing flammable there. Yet.`)}else if(n.T.use===`golf`){let e=t.eye();K.whoosh();let n=Q.props.spawn(`golfball`,e.x+i.x*.7,e.y-.05,e.z+i.z*.7);n.vel.set(i.x*36+t.vel.x,Math.max(5,i.y*36+8),i.z*36+t.vel.z),n.spin=Z(-20,20),Q.stats.golfBalls++,Q.stats.golfBalls===1&&$(`FORE! Each swing tees up a fresh ball. Try it off the roof.`);let r=Q.props.list.filter(e=>e.type===`golfball`);r.length>25&&Q.props.remove(r[0])}else if(n.T.use===`bat`){K.whoosh();let e=t.forward(),n=Dm(2.6);if(n?.npc&&n.npc.state!==`lie`)K.thud(1),Q.stats.batHits++,n.npc.knock(e.x*11,e.z*11,!0,4,X([`HOWZAT!`,`OOF`,`NOT CRICKET`,`MY RIBS`]));else if(n?.prop&&!n.prop.T.bed&&!n.prop.stuck){let t=15/Math.sqrt(Math.max(1,n.prop.T.mass/2));n.prop.vel.set(e.x*t,4,e.z*t),n.prop.spin=Z(-15,15),K.thud(.8),Q.stats.batHits++}else{let n=Q.cars.nearest(t.pos.x+e.x*1.8,t.pos.z+e.z*1.8,2.2);n&&(Q.cars.smash(n,`You`),Q.stats.batHits++)}}else if(n.T.use===`honk`){K.honk(),Q.stats.honks++;for(let e of Q.npcs){let n=e.pos.x-t.pos.x,r=e.pos.y-t.pos.z,i=Math.hypot(n,r);i<7&&i>.1&&![`knocked`,`lie`,`pinned`].includes(e.state)&&e.knock(n/i*2,r/i*2,!1,2.2,X([`AAH!`,`WHAT THE—`,`MY EARS`,`NOT FUNNY`]))}$(`You blast the air horn. Everyone within earshot leaves the ground.`)}else n.T.use===`eat`?(t.held=null,Q.props.remove(n),K.munch(),Q.stats.sandwiches++,$(X([`Delicious. Someone is going to be furious.`,`You eat the sandwich. Sandwich Guy saw that.`,`Best sandwich of your career.`]))):n.T.use===`drink`?(t.held=null,Q.props.remove(n),$(X([`Cold coffee. Tastes like 2019.`,`Caffeine level: critical.`,`That was someone's. Oh well.`]))):n.type===`paper`&&$(X([`It's a request for a CT brain for "headache x3 years".`,`"?PE ?pneumonia ?anything ?everything"`,`It just says "SCAN PLS" and a smiley face.`]))}}Q.rightWas=t.mouse.right}var Vm=8,Hm=30,Um=0,Wm=20,Gm=0,Km=0,qm=0,Jm=0,Ym=0,Xm=[90,250,420].map(e=>({t:e,done:!1})),Zm=Object.fromEntries(Uu.map(e=>[e.id,{t:0,sprinkle:0}]));Q.zoneFire=Zm;var Qm=0,$m=0,eh=null,th=null;function nh(e){let t=Q.list(),n=Q.player;if(n.hidden||(Q.lastSeen={x:n.pos.x,z:n.pos.z,region:Q.playerRegion(),lift:!1}),n.hidden){Q.hideT+=e;let t=n.hidden,r=Q.npcs.filter(e=>e.state===`search`||e.state===`knock`).length;if(_m(`hide-text`,`Hiding ${t.label} · ${r?`${r} searching for you`:`nobody nearby`} · E to come out`),t.maxTime&&Q.hideT>t.maxTime&&dm(`Too cold! You burst out of the fridge, covered in frost.`),Q.sneezeT-=e,n.hidden&&Q.sneezeT<=0){Q.sneezeT=Z(30,60),K.ow(),$(`*ACHOO*`,`bad`);let e=Q.npcs.find(e=>e.state===`search`&&e.region()===Q.playerRegion()&&Math.hypot(e.pos.x-t.x,e.pos.y-t.z)<8);e&&Math.random()<.6&&(e.say(`Bless you! ...wait.`,2),Q.foundPlayer(e))}}if(Q.rumor){if(Q.rumor.t-=e,Q.rumorT-=e,Q.rumorT<=0){Q.rumorT=Z(6,11);let e=X(Q.npcs.filter(e=>[`nurse`,`registrar`,`surgreg`,`nic`,`patient`,`cleaner`].includes(e.role)&&e.sayT<=0&&e.distToPlayer()<14));e&&e.say(`Did you hear? `+Q.rumor.text,3.5)}Q.rumor.t<=0&&(Q.rumor=null)}for(let e of Q.rerequests.slice()){if(Q.time<e.at)continue;Q.rerequests.splice(Q.rerequests.indexOf(e),1);let t=Tm({silent:!0,requester:e.c.requester,forced:{modality:e.c.modality,path:e.c.path},location:e.c.location});t.patient=e.c.patient,t.clinical=`RE-REQUEST. `+e.c.clinical+` Now "much worse".`,$(`${e.c.requester} is back with a re-request for ${e.c.patient}. Now "much worse".`,`bad`)}if(Q.time>=300&&!Q.ghost&&(Q.ghost=Sm({role:`ghost`,name:`Mr Nobody (1987)`,x:80,z:22.5,home:{zone:`basement`}})),Q.heliT>0){Q.heliT-=e;let t=Math.min(1,Q.heliT/3,(16-Q.heliT)/3+.2);Q.world.rotor.rotation.y+=e*30*t;for(let n of Q.props.list){if(n.held||n.stuck||n.pos.x<64.5||n.pos.z>15)continue;let r=n.pos.x-81,i=n.pos.z-7,a=Math.hypot(r,i)||1;if(a>12)continue;let o=40*t/Math.max(2,a)/Math.max(1,n.T.mass/3);n.vel.x+=r/a*o*e,n.vel.z+=i/a*o*e,n.vel.y+=o*.4*e}let n=Q.player;if(Q.playerRegion()===`roof`&&!n.hidden){let r=n.pos.x-81,i=n.pos.z-7,a=Math.hypot(r,i)||1;a<10&&(n.vel.x+=r/a*18*t*e/Math.max(1,a/3),n.vel.z+=i/a*18*t*e/Math.max(1,a/3))}Math.random()<.1&&K.whoosh()}if(Q.boilerT>0&&(Q.boilerT-=e,Q.boilerT<=0&&(Q.boilerN=0,Q.world.gauge.rotation.z=0)),Q.world.beacon.intensity=Math.sin(performance.now()/300)>.6?6:0,Q.player.y<-6){Q.stats.roofFalls++;let e=Q.player,t=Y(`fade`);Y(`fade-text`).textContent=`You fell off the roof. You wake up in Resus with a mild headache and a CT brain request with your name on it.`,t.hidden=!1,e.y=0,e.vy=0,e.pos.x=10,e.pos.z=18,e.yaw=0,Tm({silent:!0,urgent:!0,forced:{modality:`head`,path:`normal`},study:`CT Brain (you)`,location:`Resus 3`,clinical:`Radiologist fell off the roof. Somehow fine. Insists on reporting own scan.`}),setTimeout(()=>t.hidden=!0,2500)}Vm-=e,Vm<=0&&(Tm(),Vm=Z(16,30)*(Q.time>480?.8:1));for(let e of Xm)if(!e.done&&Q.time>=e.t){e.done=!0;let t={head:[`edh`,`sdh`,`normal`],chest:[`ptx`,`pe`,`normal`],abdo:[`freeair`,`collection`,`normal`]};for(let e of[`head`,`chest`,`abdo`])Tm({location:`Resus ${1+Math.floor(Math.random()*4)}`,silent:!0,forced:{modality:e,path:X(t[e])}});hm(`TRAUMA CALL: MBA x3, pan-scans incoming NOW`),$(`TRAUMA CALL: 3 pan-scans jump the CT queue.`,`bad`)}if(t>=6&&(Hm-=e,Hm<=0)){Hm=Z(22,45)*(t>=20?.6:1);let e=X(Q.openCases());hm(`${e.requester}: "Any update on ${e.patient.split(`,`)[0]}'s ${e.study.split(` `)[1]||`scan`}?"`)}Gm-=e;let r=Math.min(10,4+Math.floor(t/5));if(Gm<=0&&wm().length<r){Gm=8;let e=bm.find(e=>!Q.npcs.some(t=>t.name===e))||`Dr ${X([`Smith`,`Jones`])}`,t=Sm({role:`surgreg`,name:e,x:10.5,z:27,home:{zone:`resus`}});for(let t=0;t<2;t++)Tm({requester:e,silent:!0});$(`${e} (Surgical Registrar) has arrived with requests.`),t.think()}if(t>=Q.T.flood&&(Um-=e,Um<=0&&$m<70&&(Um=Z(3,7),$m++,Q.props.spawn(`paper`,Z(4.3,5.7),.05,8.3).vel.set(Z(-1.5,1.5),.5,Z(-5,-3)),$m===1&&$(`Request forms are being slid under your door.`,`bad`))),Q.phoneQuiet>0&&(Q.phoneQuiet-=e),t>=Q.T.phone&&!(Q.phoneQuiet>0)&&(Q.phoneRinging=!0),Q.phoneRinging&&(Jm-=e,Jm<=0&&(Jm=3,Q.player.pos.z<13&&K.ring(),Q.world.phone.position.y=.8+.03,setTimeout(()=>Q.world.phone.position.y=.8,150))),t>=Q.T.beds&&(Wm-=e,Wm<=0&&Qm<Q.world.corridorBedSpots.length)){Wm=22;let e=Q.world.corridorBedSpots[Qm++],t=Q.props.spawn(`bed`,e.x,null,e.z,{yaw:Math.PI/2});Sm({role:`patient`,name:X(xm),x:e.x,z:e.z,home:{zone:`corridor`}}).attachBed(t),Qm===1&&$(`Bed block. Patients are now lining the corridor, waiting on imaging.`,`bad`)}if(t>=Q.T.consultant&&!eh&&(eh=Sm({role:`consultant`,name:`Dr Harrow (ED Consultant)`,x:10,z:20,home:{zone:`resus`}}),eh.setState(`stalk`),$(`The ED consultant has started looking for you personally.`,`bad`)),eh&&t<Q.T.consultant-6&&(eh.dismiss=!0,eh=null),t>=Q.T.dms&&!th&&(th=Sm({role:`dms`,name:`Gary from Executive`,x:31.5,z:27,home:{zone:`waiting`}}),th.setState(`stalk`),$(`The Director of Medical Services has entered the building. At 3am. In a suit.`,`bad`)),th&&t<Q.T.dms-8&&(th.dismiss=!0,th=null),Q.toastT>0&&(Q.toastT-=e),Q.microwaveBusy>0){if(Q.microwaveBusy-=e,Q.microwaveFire&&Math.random()<.3){K.sparks();for(let e=0;e<3;e++)Q.flameFx.emit(11.55+Z(-.15,.15),1.1,1.62,Z(-1,1),Z(0,2),Z(.5,1.5),.25,.08,.02,1,.9,.5,1)}Q.microwaveBusy<=0&&(Q.world.microwaveGlow.material.color.set(`#222`),Q.microwaveFire?(Lm(11.6,1.6,.8),$(`The microwave is on fire. Classic.`,`bad`)):K.ding())}Q.scan.update(e),qp(Q),Q.fire.update(e);let i=Q.fire.burning.length>0;if(i?(Q.alarmT+=e,Q.noFireT=0):Q.noFireT+=e,!Q.alarm&&i&&Q.alarmT>2&&(Q.alarm=!0,Q.stats.alarms++,kd(!0),$(`CODE RED. FIRE ALARM. Everyone is evacuating (loudly).`,`bad`),Q.playerCausedFire&&(Q.wanted=55,Q.npcs.find(e=>e.role===`nic`)?.say(`WHO DID THIS?! SECURITY!`,3,!0))),Q.alarm&&Q.noFireT>8&&(Q.alarm=!1,Q.alarmT=0,Q.playerCausedFire=!1,kd(!1),$(`All clear. Everyone shuffles back inside, glaring at you.`)),Q.alarm&&Q.alarmT>25&&!Q.npcs.some(e=>e.role===`firefighter`)){for(let e=0;e<3;e++)Sm({role:`firefighter`,name:X([`Firefighter Kev`,`Firefighter Mo`,`Firefighter Tash`,`Firefighter Ange`]),x:9.5+e,z:27.5,home:{zone:`outside`}}).setState(`fight`);$(`The fire brigade has arrived. They look tired of this hospital.`)}let a=!1,o={};for(let e of Q.fire.burning){let t=Zu(e%96+.5,Math.floor(e/96)+.5);t&&(o[t.id]=!0)}for(let t of Uu){if(t.id===`outside`)continue;let n=Zm[t.id];if(n.t=o[t.id]?n.t+e:Math.max(0,n.t-e),n.t>22&&n.sprinkle<=0&&(n.sprinkle=20,$(`Sprinklers activated in ${t.name}.`),t.id===`reading`&&(Q.pacsWet=90,$(`Water is pouring onto PACS. That can't be good.`,`bad`))),n.sprinkle>0){n.sprinkle-=e,a=!0,Q.fire.soakZone(t,e);for(let e=0;e<6;e++)Q.sprayFx.emit(Z(t.x0,t.x1+1),2.9,Z(t.y0,t.y1+1),0,-6,0,.45,.05,.05,.6,.75,1,.5);Math.random()<.05&&Q.world.puddle(Math.floor(Z(t.x0,t.x1+1)),Math.floor(Z(t.y0,t.y1+1)))}}Nd(a,e),Q.pacsWet>0&&(Q.pacsWet-=e);let s=0,c=Q.fire.burning.slice().sort((e,t)=>Q.fire.int[t]-Q.fire.int[e]),l=[];for(let t of c){let n=Q.fire.int[t],r=t%96+.5,i=Math.floor(t/96)+.5,a=n*16*e,o=Math.min(6,Math.floor(a)+ +(Math.random()<a%1));for(let e=0;e<o;e++)Q.flameFx.emit(r+Z(-.45,.45),Z(.05,.4),i+Z(-.45,.45),Z(-.2,.2),Z(1.2,2.6)*(.5+n),Z(-.2,.2),Z(.5,.9),.7+n*.6,.15,1,Z(.3,.65),.08,.85);if(Math.random()<n*3*e&&Q.smokeFx.emit(r+Z(-.4,.4),1.2+n,i+Z(-.4,.4),Z(-.3,.3),Z(.4,.9),Z(-.3,.3),Z(4,7),.8,3.2,.13,.12,.12,.55,0,.3),s<cm.length&&!l.some(e=>Math.hypot(e.x-r,e.z-i)<4)){l.push({x:r,z:i});let e=cm[s++];e.position.set(r,1.3,i),e.intensity=(4+Math.random()*3)*n}}for(;s<cm.length;s++)cm[s].intensity=0;if(jd(Q.fire.total,e),qm-=e,qm<=0){qm=.25;for(let e of Q.world.burnables){if(e.gone)continue;let t=0;for(let n of e.cells)t=Math.max(t,Q.fire.int[n]);t>.3&&(e.char=Math.min(1.2,e.char+.06),e.mesh.material.color.lerp(new U(`#15110e`),.08),e.kind===`curtain`&&e.char>=1&&(e.mesh.visible=!1,e.gone=!0))}}for(let t of Q.props.list.slice()){if(t.pos.y<-8){Q.player.held===t&&(Q.player.held=null),Q.props.remove(t),t.T.light?$(X([`The golf ball sails off into the dark. A distant car alarm answers.`,`FORE! A faint tinkle of broken glass somewhere below.`,`The ball vanishes over the edge. A seagull files a complaint.`])):(Q.stats.roofThrows++,$(X([`The ${t.T.name.toLowerCase()} falls six storeys. A car alarm goes off.`,`The ${t.T.name.toLowerCase()} disappears into the night. Someone below shouts.`,`A distant crunch. You decide not to look.`])));continue}let n=Q.fire.at(t.pos.x,t.pos.z);if(t.type===`gel`&&n>.2&&!t.held){K.whoomph();for(let e=-1;e<=1;e++)for(let n=-1;n<=1;n++)Q.fire.addFuel(t.pos.x+e,t.pos.z+n,1.2),Q.fire.ignite(t.pos.x+e,t.pos.z+n,.9);$(`The hand sanitiser goes WHOOMPH. It is 70% alcohol, after all.`,`bad`),Q.props.remove(t);continue}if(t.fuel>0&&n>.3&&!t.held&&(t.fuel-=.12*e,Q.fire.addFuel(t.pos.x,t.pos.z,.3*e),Q.props.charTo(t,t.char+.25*e),Q.flames(t.pos.x,t.pos.y+.2,t.pos.z,.7),t.fuel<=0&&(t.type===`paper`||t.type===`box`||t.type===`sandwich`))){Q.props.remove(t);continue}if(t.T.explosive&&!t.spent&&(n>.3||(t.fuse||0)>0)&&(t.fuse=(t.fuse||0)+e,t.fuse>2.5)){t.spent=!0,t.stuck=!1,t.held=!1,Q.player.held===t&&(Q.player.held=null);let e=Math.random()*Math.PI*2;t.vel.set(Math.cos(e)*16,7,Math.sin(e)*16),t.spin=20,t.rocket=2.5,Q.stats.rockets++,K.whoomph(),$(`An oxygen cylinder has become a rocket.`,`bad`)}if(t.T.spill&&!t.spilled&&!t.held&&Math.hypot(t.vel.x,t.vel.z)>3.5&&zm(t),t.rocket>0){t.rocket-=e;for(let e=0;e<3;e++)Q.flames(t.pos.x,t.pos.y,t.pos.z,1.2);Math.random()<.2&&Q.fire.ignite(t.pos.x,t.pos.z,.3)}let r=t.pushed?Math.hypot(Q.player.vel.x,Q.player.vel.z):Math.hypot(t.vel.x,t.vel.z,t.vel.y*.5);if(r>5&&!t.held&&!t.pushed&&t.pos.y<1.6&&Q.cars.hitAt(t.pos.x,t.pos.z,t.pos.y)&&t.vel.multiplyScalar(-.3),r>3.2&&!t.held)for(let e of Q.npcs){if(e===t.rider||e.state===`knocked`||e.state===`lie`)continue;let n=e.pos.x-t.pos.x,r=e.pos.y-t.pos.z;if(n*n+r*r<(t.T.r+.4)**2&&t.pos.y<e.hitH){let n=t.pushed?Q.player.vel.x:t.vel.x,r=t.pushed?Q.player.vel.z:t.vel.z;t.T.light?(K.ow(),e.knock(n*.12,r*.12,!1,.4,X([`OW!`,`OI!`,`MY EYE!`,`FORE?!`])),t.vel.multiplyScalar(.4)):t.T.bonk?(K.clang(),Q.stats.bonks++,e.knock(n*.7,r*.7,!0,2,X([`BONK`,`*CLANG*`,`IS THAT A BEDPAN?!`]))):e.knock(n*.7,r*.7,!0),!t.pushed&&!t.T.bed&&!t.T.light&&t.vel.multiplyScalar(.3)}}}let u=Q.player;if(Q.fire.at(u.pos.x,u.pos.z)>.45&&u.y<1&&!(u.onFire>0)&&(u.onFire=4,Q.stats.selfIgnitions++,K.scream(),$(`YOU ARE ON FIRE. Stop, drop and... keep running, apparently.`,`bad`)),u.onFire>0){u.onFire-=e;let t=u.forward();Q.flames(u.pos.x+t.x*.4,1,u.pos.z+t.z*.4,.6),Q.fire.wet[Math.floor(u.pos.z)*96+Math.floor(u.pos.x)]>0&&(u.onFire=0),u.onFire<=0&&(Q.sootT=25,Y(`soot`).hidden=!1)}Q.sootT>0&&(Q.sootT-=e,Q.sootT<=0&&(Y(`soot`).hidden=!0));for(let e of Q.props.list){if(e.held||e.pushed||e.stuck||e.pos.y>e.T.h/2+.3)continue;let t=e.pos.x-u.pos.x,n=e.pos.z-u.pos.z,r=e.T.r+.3,i=t*t+n*n;if(i<r*r&&i>1e-6){let a=Math.sqrt(i),o=(r-a)*(e.T.mass>20?.5:1);e.pos.x+=t/a*o,e.pos.z+=n/a*o;let s=e.T.mass<3?1.4:e.T.mass<20?.9:.4;e.vel.x+=(u.vel.x*s-e.vel.x)*.3,e.vel.z+=(u.vel.z*s-e.vel.z)*.3}}let d=Zu(u.pos.x,u.pos.z)?.id===`mri`&&!u.hidden;if(d&&!Q.quenched){let e=Q.npcs.find(e=>e.role===`radiographer`&&e.scanner===`mri`);!Q.wasInMri&&e&&(u.held?.T.metal||u.pushing?.T.metal||!Q.pagerGone)&&e.say(X([`STOP! METAL!`,`Did you fill in the safety questionnaire?!`,`NOT WITH THAT! ZONE FOUR!`]),3,!0),!Q.pagerGone&&u.pos.x>35&&(Q.pagerGone=!0,Q.pagerStuck=!0,Q.props.spawn(`pager`,u.pos.x,1,u.pos.z).vel.set(3,1,0),$(`Your pager rips off your belt and flies into the magnet. The pages have stopped. This might be the best night of your life.`,`good`),Q.cardsWiped||(Q.cardsWiped=!0,setTimeout(()=>$(`Also, your bank cards have been wiped. And your hospital ID. The door readers no longer know you.`),3500)))}if(Q.wasInMri=d,!Q.quenched&&Zu(u.pos.x,u.pos.z)?.id===`mri`){let e=Q.world.magnet,t=Math.hypot(e.x-u.pos.x,e.z-u.pos.z),n=u.held||u.pushing;n&&n.T.metal&&t<6.5&&(u.pushing?jm(!1):Mm(),n.vel.set((e.x-n.pos.x)*2,1,(e.z-n.pos.z)*2),$(`The magnet yanks the ${n.T.name.toLowerCase()} out of your hands.`))}let f=Q.npcs;for(let e=0;e<f.length;e++){let t=f[e];if(t.state===`lie`||t.state===`sit`||t.state===`pinned`)continue;let n=t.pos.x-u.pos.x,r=t.pos.y-u.pos.z,i=Math.hypot(n,r),a=Math.hypot(u.vel.x,u.vel.z);if(i<.75&&a>5&&!u.hidden&&t.state!==`knocked`&&t.role!==`ghost`&&(Q.stats.tackles++,Q.stats.tackles===1&&$(`TACKLE. That is not in your job description.`),K.thud(1),t.knock(u.vel.x*1.2,u.vel.z*1.2,!0,2,X([`TACKLED!`,`OOOF`,`WHAT THE—`])),u.vel.x*=.4,u.vel.z*=.4),i<.6&&i>1e-4&&(t.pos.x+=n/i*(.6-i),t.pos.y+=r/i*(.6-i)),Q.spills.length&&t.state!==`knocked`&&t.role!==`ghost`&&t.vel.lengthSq()>.5){for(let e of Q.spills)if(Math.hypot(t.pos.x-e.x,t.pos.y-e.z)<e.r){Q.stats.slips++,t.knock(t.vel.x*2.5,t.vel.y*2.5,!1,2.5,X([`WHOA—`,`WET FLOOR!!`,`NO SIGN?!`,`AAAH—`]));break}}for(let n=e+1;n<f.length;n++){let e=f[n];if(e.state===`lie`||e.state===`sit`||e.state===`pinned`)continue;let r=e.pos.x-t.pos.x,i=e.pos.y-t.pos.y,a=Math.hypot(r,i);if(a<.55&&a>1e-4){let n=(.55-a)/2;t.pos.x-=r/a*n,t.pos.y-=i/a*n,e.pos.x+=r/a*n,e.pos.y+=i/a*n}}}Q.wanted>0&&(Q.wanted-=e),Q.kickT>0&&(Q.kickT-=e),Q.defibT>0&&(Q.defibT-=e);for(let t of Q.spills.slice())t.t-=e,t.t<=0&&Q.spills.splice(Q.spills.indexOf(t),1);Ym+=(Math.min(1,Q.fire.total/30)-Ym)*Math.min(1,e*.5),im.fog.density=.004+Ym*.07,Q.world.panelMat.color.setScalar(1-Ym*.6);let p=performance.now()/1e3;Q.world.alarmLight.intensity=Q.alarm&&Math.sin(p*8)>0?7:0,Q.world.ambulanceBar.material.color.set(Math.sin(p*6)>0?`#ff2a2a`:`#2a5bff`),Km-=e,Km<=0&&(Km=1,ym(),Q.mode===`pacs`?Q.pacs.renderList():Q.pacs.drawMonitors())}function rh(){Q.mode=`play`,Y(`hud`).classList.remove(`dim`),Q.touch||Q.player.lock()}Q.closePacs=()=>{Q.pacs.close(),Gf(),rh()},document.addEventListener(`pointerlockchange`,()=>{!document.pointerLockElement&&Q.mode===`play`&&!Q.player.freeLook&&!Q.touch&&(Q.mode=`paused`,Y(`paused`).hidden=!1)}),document.addEventListener(`pointerlockerror`,()=>{if(!Q.touch){if(Q.player.everLocked){Q.mode===`play`&&(Q.mode=`paused`,Y(`paused`).hidden=!1);return}(Q.mode===`play`||Q.mode===`paused`)&&(Q.player.freeLook=!0,Y(`paused`).hidden=!0,Q.mode=`play`,$(`Mouse capture is unavailable here: drag with the left button to look around, click to act.`))}}),Y(`paused`).addEventListener(`click`,()=>{Y(`paused`).hidden=!0,rh()}),Y(`start-btn`).addEventListener(`click`,()=>{Td(),Y(`start`).hidden=!0,Y(`hud`).hidden=!1,Q.player.pitch=-.05,rh(),$(`Your shift has started. 3 requests are already waiting. Your pager is at 100%.`)}),nm.addEventListener(`click`,()=>{Q.mode===`play`&&!Q.touch&&!Q.player.locked&&!Q.player.freeLook&&Q.player.lock()}),Q.touch=Jf(),Q.touch&&Xf(Q);function ih(){Q.mode=`morning`,Q.cars.driving&&Q.cars.exit(),Q.player.unlock(),kd(!1),Q.world.alarmLight.intensity=0;for(let e of[`alarm-vignette`,`fire-overlay`,`soot`,`help`,`paused`,`hide-overlay`,`lift-modal`,`argue-modal`,`riskman`,`desktop`,`store`,`fileview`])Y(e).hidden=!0;let e=Q.stats,t=Q.list(),n=Q.cases.filter(e=>e.cancelled&&e.cancelled!==`clinical`&&e.path!==`normal`),r=e.kicks*2+e.tackles*2+e.zaps*4+e.slips+e.bonks+e.standDowns*5+e.wildWins*4+e.roofFalls*5+e.boilers*6+e.helis*3+e.roofThrows+e.fires*3+e.hits+e.bedsLaunched*2+e.npcsIgnited*4+e.mriStuck*2+e.quenches*10+e.rockets*5+e.caught*3+e.ctJokes*2+e.sandwiches+e.carsJacked*4+e.carsSmashed*2+e.ranOver*3+e.golfBalls+e.honks,i=e.correct*10+e.nailed*5-e.wrong.length*8-t*5+e.goodCatches*4-n.length*6+e.clinicalCalls*8,a=[];e.standDowns?a.push(`${e.standDowns} DOCTOR${e.standDowns>1?`S`:``} STOOD DOWN AFTER NIGHT-LONG RISKMANN BLITZ BY RADIOLOGIST`):e.riskmansFiled>=5&&a.push(`RADIOLOGIST FILES ${e.riskmansFiled} INCIDENT REPORTS IN ONE NIGHT`),e.ranOver>=2?a.push(`CAR DRIVEN THROUGH ED; ${e.ranOver} "CARTOONISHLY" INJURED`):e.carsJacked&&a.push(`STAFF CAR PARK "NO LONGER SAFE", RADIOLOGIST SUSPECTED`),e.carsSmashed>=3&&a.push(`${e.carsSmashed} CARS VANDALISED IN ONE NIGHT; ALARMS "WENT ON FOR HOURS"`),e.golfBalls>=20&&a.push(`GOLF BALLS RAINING ON CAR PARK; "IS SOMEONE ON THE ROOF?"`),e.orderSpend>=2e3&&a.push(`RADIOLOGIST SPENDS $${e.orderSpend.toLocaleString()} ON A STRANGER'S CARD`),e.pinned&&a.push(`${e.pinned} STAFF PINNED TO MRI MAGNET; PHYSICIST "NOT SURPRISED"`),Q.pagerGone&&a.push(`RADIOLOGIST'S PAGER FOUND STUCK TO MRI; "FIRST QUIET NIGHT IN YEARS"`),e.radiationDoses>=3&&a.push(`RADIOLOGIST STANDS IN SCAN ROOM ${e.radiationDoses} TIMES; RADIOGRAPHERS UNION CONSULTED`),e.zaps&&a.push(`${e.zaps} PEOPLE DEFIBRILLATED "FOR NO CLINICAL REASON"`),e.kicks+e.tackles>=5&&a.push(`ED STAFF REQUEST SHIN GUARDS FOR NIGHT SHIFT`),e.wildWins&&a.push(`RADIOLOGIST TELLS ED: ${(e.wildUsed||``).replace(/\(.*?\)/g,``).replace(/"/g,``).trim().replace(/\.$/,``).toUpperCase()}`),e.roofFalls&&a.push(`RADIOLOGIST FLIES OFF ROOF ON FIRE EXTINGUISHER, REPORTS OWN CT`),e.timesFound?a.push(`RADIOLOGIST FOUND HIDING ${String(e.foundIn).toUpperCase()}`):e.hides>=3&&a.push(`ON-CALL RADIOLOGIST "IMPOSSIBLE TO FIND", SAY REGISTRARS`),e.boilers&&a.push(`BASEMENT BOILER EXPLODES; "SOMEONE CRANKED IT", SAYS MAINTENANCE`),e.ancient&&a.push(`1987 SCAN FINALLY ON A WORKLIST`),e.quenches&&a.push(`MRI QUENCHED AT 3AM: "$1.2 MILLION OF HELIUM, GONE"`),e.fires>=3?a.push(`${e.fires} FIRES IN ONE NIGHT: MICROWAVE NOW BANNED HOSPITAL-WIDE`):e.fires&&a.push(`FIRE IN ED. RADIOLOGIST "NOWHERE NEAR IT", SAYS RADIOLOGIST`),t>=20&&a.push(`${t} SCANS UNREPORTED AT HANDOVER: DAY TEAM WEEPS`),e.bedsLaunched>=3&&a.push(`PATIENTS REPORT "RIDES" DOWN ED CORRIDOR`),e.npcsIgnited&&a.push(`${e.npcsIgnited} STAFF/PATIENTS BRIEFLY ON FIRE ("FINE NOW, JUST SOOTY")`),e.rockets&&a.push(`OXYGEN CYLINDER REACHES LOW EARTH ORBIT`),e.ctJokes&&a.push(`VISITORS SCANNED "FOR NO REASON", CONFIRMS CT`),e.correct>=15&&!e.fires&&a.push(`RADIOLOGIST ACTUALLY DOES JOB; HOSPITAL STUNNED`),a.length||a.push(`QUIET NIGHT IN ED (NOBODY BELIEVES IT)`);let o=i>=80?r>=30?`Brilliant but Banned`:`Model Consultant`:i>=20?r>=30?`Chaotic Neutral`:`Solid Registrar Energy`:r>=30?`Deregistered (Legendary)`:`Asleep on the Couch`;Y(`m-headline`).textContent=a[0],Y(`m-sub`).innerHTML=a.slice(1,4).map(e=>`<li>${e}</li>`).join(``),Y(`m-grade`).textContent=o;let s=[[`Studies reported`,e.reported],[`Correct diagnoses`,e.correct],[`Lesions nailed`,e.nailed],[`Speed-reported "normal"`,e.speed],[`Unreported at handover`,t],[`Peak worklist`,e.peakList],[`Pages received`,e.pages],[`Nags endured`,e.nags],[`Forms bounced (good catches)`,`${e.formsBounced} (${e.goodCatches})`],[`Fires started`,e.fires],[`Fire alarms`,e.alarms],[`People knocked over`,e.hits],[`Beds launched`,e.bedsLaunched],[`People set on fire`,e.npcsIgnited],[`Items lost to the MRI`,e.mriStuck],[`O2 rockets`,e.rockets],[`Caught by security`,e.caught],[`Sandwiches stolen`,e.sandwiches],[`Cat pets`,e.catPets],[`Naps`,e.naps],[`Arguments won / lost`,`${e.argumentsWon} / ${e.argumentsLost}`],[`Wild arguments that worked`,e.wildWins],[`Times hidden`,e.hides],[`Times found hiding`,e.timesFound],[`Kicks / tackles`,`${e.kicks} / ${e.tackles}`],[`Defibrillated (not in arrest)`,e.zaps],[`Slipped on your spill`,e.slips],[`Bedpan bonks`,e.bonks],[`RiskManns filed / upheld`,`${e.riskmansFiled} / ${e.riskmansUpheld}`],[`Vexatious reports`,e.vexatious],[`Colleagues stood down`,e.standDowns],[`RiskManns about you`,Q.riskman.aboutYou.length],[`Patients scanned tonight`,e.scanned],[`People pinned to the MRI`,e.pinned],[`Pages missed (pager in magnet)`,e.pagesMissed],[`Times you stood in the room during a scan`,e.radiationDoses],[`Straight-to-theatre calls`,e.clinicalCalls],[`Searches evaded`,e.searchesEvaded],[`Knocks on your door`,e.knocks],[`Lift rides`,e.liftRides],[`Things thrown off the roof`,e.roofThrows],[`Cars broken into`,e.carsJacked],[`Car windows smashed`,e.carsSmashed],[`Car crashes`,e.carCrashes],[`People run over (cartoonishly)`,e.ranOver],[`Golf balls hit`,e.golfBalls],[`Air horn blasts`,e.honks],[`Bidly orders`,e.ordersPlaced],[`Spent on Bidly`,`$${e.orderSpend.toLocaleString()}`]];Y(`m-stats`).innerHTML=s.map(([e,t])=>`<div><span>${e}</span><b>${t}</b></div>`).join(``);let c=e.wrong.slice(0,8).map(e=>`<li><b>${e.patient}</b>, ${e.study}: you said "${wf[e.modality][e.finding]}". It was <b>${wf[e.modality][e.path]}</b>.</li>`);for(let e of n.slice(0,5))c.push(`<li><b>${e.patient}</b>, ${e.study}: you argued it out of existence${e.cancelled===`wild`?` with a completely made-up reason`:``}. It was <b>${wf[e.modality][e.path]}</b>.</li>`);Y(`m-mm`).innerHTML=c.length?c.join(``):`<li>No misses. Suspicious, but well done.</li>`,Y(`m-scores`).textContent=`Clinical ${i} · Chaos ${r}`,Y(`morning`).hidden=!1,Y(`hud`).hidden=!0,Q.pacs.close(),Gf()}Y(`again-btn`).addEventListener(`click`,()=>location.reload());function ah(){let e=window.innerWidth,t=window.innerHeight;rm.setSize(e,t,!1),am.aspect=e/t,am.updateProjectionMatrix();let n=t*rm.getPixelRatio()/2/Math.tan(am.fov*Math.PI/360);for(let e of[Q.flameFx,Q.smokeFx,Q.sprayFx])e.uniforms.uScale.value=n}window.addEventListener(`resize`,ah),ah(),Cm();for(let e=0;e<3;e++)Tm({silent:!0,prescanned:!0});Q.time=0,ym(),Q.pacs.drawMonitors();var oh=performance.now(),sh=0;function ch(e){requestAnimationFrame(ch);let t=Math.min(.05,(e-oh)/1e3);if(oh=e,Q.mode===`play`||Q.mode===`pacs`||Q.mode===`form`){Q.time+=t*sm,Q.time>=om&&ih(),Q.player.enabled=Q.mode===`play`,Q.mode===`play`&&Q.cars.update(t),Q.player.update(t,Q),Q.mode===`play`&&Bm(t),Q.props.update(t,Q);for(let e of Q.npcs)e.update(t);for(let e of Q.npcs.filter(e=>e.remove))e.dispose(),Q.npcs.splice(Q.npcs.indexOf(e),1),Q.leaveQueue(e);nh(t),sh-=t,sh<=0&&(sh=.1,_m(`prompt`,Q.mode===`play`?km():``)),vm()}else if(Q.mode===`start`){let n=e/1e3;am.position.set(22+Math.sin(n*.07)*14,9,13+Math.cos(n*.07)*10),am.lookAt(20,0,14);for(let e of Q.npcs)e.update(t*.5)}Q.flameFx.update(t),Q.smokeFx.update(t),Q.sprayFx.update(t,3.5),rm.render(im,am)}requestAnimationFrame(ch);