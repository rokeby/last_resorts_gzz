(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $r="180",$f=0,gu=1,Zf=2,nd=1,jf=2,ii=3,vi=0,Wt=1,_n=2,wn=0,Nr=1,vu=2,_u=3,Su=4,Kf=5,qi=100,Jf=101,Qf=102,ep=103,tp=104,np=200,ip=201,rp=202,ap=203,hc=204,dc=205,sp=206,op=207,cp=208,lp=209,up=210,hp=211,dp=212,fp=213,pp=214,fc=0,Us=1,pc=2,Fr=3,mc=4,gc=5,vc=6,_c=7,id=0,mp=1,gp=2,di=0,vp=1,_p=2,Sp=3,xp=4,Ep=5,Tp=6,yp=7,rd=300,Br=301,Hr=302,Sc=303,xc=304,Zs=306,an=1e3,li=1001,Ec=1002,Ot=1003,Mp=1004,ja=1005,pt=1006,go=1007,ui=1008,ad=1008,$t=1009,Rl=1010,Cl=1011,zr=1012,js=1013,Ni=1014,qt=1015,rn=1016,bl=1017,Dl=1018,Gr=1020,sd=35902,od=35899,cd=1021,ld=1022,Vt=1023,Ra=1026,kr=1027,hi=1028,Il=1029,$i=1030,Pl=1031,Ll=1033,Cs=33776,bs=33777,Ds=33778,Is=33779,Tc=35840,yc=35841,Mc=35842,wc=35843,Ac=36196,Rc=37492,Cc=37496,bc=37808,Dc=37809,Ic=37810,Pc=37811,Lc=37812,Nc=37813,Uc=37814,Oc=37815,Fc=37816,Bc=37817,Hc=37818,zc=37819,Gc=37820,kc=37821,Vc=36492,Wc=36494,Xc=36495,Yc=36283,qc=36284,$c=36285,Zc=36286,La=3200,wp=3201,ud=0,Ap=1,nn="",Dt="srgb",tn="srgb-linear",Os="linear",Tt="srgb",sr=7680,xu=519,Rp=512,Cp=513,bp=514,hd=515,Dp=516,Ip=517,Pp=518,Lp=519,Eu=35044,Ui="300 es",Vn=2e3,Fs=2001;class qn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Tu=1234567;const xa=Math.PI/180,Ca=180/Math.PI;function Zr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function lt(n,e,t){return Math.max(e,Math.min(t,n))}function Nl(n,e){return(n%e+e)%e}function Np(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Up(n,e,t){return n!==e?(t-n)/(e-n):0}function Ea(n,e,t){return(1-t)*n+t*e}function Op(n,e,t,i){return Ea(n,e,1-Math.exp(-t*i))}function Fp(n,e=1){return e-Math.abs(Nl(n,e*2)-e)}function Bp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Hp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function zp(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Gp(n,e){return n+Math.random()*(e-n)}function kp(n){return n*(.5-Math.random())}function Vp(n){n!==void 0&&(Tu=n);let e=Tu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Wp(n){return n*xa}function Xp(n){return n*Ca}function Yp(n){return(n&n-1)===0&&n!==0}function qp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function $p(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Zp(n,e,t,i,r){const a=Math.cos,s=Math.sin,o=a(t/2),c=s(t/2),l=a((e+i)/2),h=s((e+i)/2),d=a((e-i)/2),f=s((e-i)/2),g=a((i-e)/2),S=s((i-e)/2);switch(r){case"XYX":n.set(o*h,c*d,c*f,o*l);break;case"YZY":n.set(c*f,o*h,c*d,o*l);break;case"ZXZ":n.set(c*d,c*f,o*h,o*l);break;case"XZX":n.set(o*h,c*S,c*g,o*l);break;case"YXY":n.set(c*g,o*h,c*S,o*l);break;case"ZYZ":n.set(c*S,c*g,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Rr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Qt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ks={DEG2RAD:xa,RAD2DEG:Ca,generateUUID:Zr,clamp:lt,euclideanModulo:Nl,mapLinear:Np,inverseLerp:Up,lerp:Ea,damp:Op,pingpong:Fp,smoothstep:Bp,smootherstep:Hp,randInt:zp,randFloat:Gp,randFloatSpread:kp,seededRandom:Vp,degToRad:Wp,radToDeg:Xp,isPowerOfTwo:Yp,ceilPowerOfTwo:qp,floorPowerOfTwo:$p,setQuaternionFromProperEuler:Zp,normalize:Qt,denormalize:Rr};class Pe{constructor(e=0,t=0){Pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*r+e.x,this.y=a*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Na{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,s,o){let c=i[r+0],l=i[r+1],h=i[r+2],d=i[r+3];const f=a[s+0],g=a[s+1],S=a[s+2],E=a[s+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=g,e[t+2]=S,e[t+3]=E;return}if(d!==E||c!==f||l!==g||h!==S){let v=1-o;const p=c*f+l*g+h*S+d*E,I=p>=0?1:-1,R=1-p*p;if(R>Number.EPSILON){const L=Math.sqrt(R),N=Math.atan2(L,p*I);v=Math.sin(v*N)/L,o=Math.sin(o*N)/L}const w=o*I;if(c=c*v+f*w,l=l*v+g*w,h=h*v+S*w,d=d*v+E*w,v===1-o){const L=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=L,l*=L,h*=L,d*=L}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,a,s){const o=i[r],c=i[r+1],l=i[r+2],h=i[r+3],d=a[s],f=a[s+1],g=a[s+2],S=a[s+3];return e[t]=o*S+h*d+c*g-l*f,e[t+1]=c*S+h*f+l*d-o*g,e[t+2]=l*S+h*g+o*f-c*d,e[t+3]=h*S-o*d-c*f-l*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(r/2),d=o(a/2),f=c(i/2),g=c(r/2),S=c(a/2);switch(s){case"XYZ":this._x=f*h*d+l*g*S,this._y=l*g*d-f*h*S,this._z=l*h*S+f*g*d,this._w=l*h*d-f*g*S;break;case"YXZ":this._x=f*h*d+l*g*S,this._y=l*g*d-f*h*S,this._z=l*h*S-f*g*d,this._w=l*h*d+f*g*S;break;case"ZXY":this._x=f*h*d-l*g*S,this._y=l*g*d+f*h*S,this._z=l*h*S+f*g*d,this._w=l*h*d-f*g*S;break;case"ZYX":this._x=f*h*d-l*g*S,this._y=l*g*d+f*h*S,this._z=l*h*S-f*g*d,this._w=l*h*d+f*g*S;break;case"YZX":this._x=f*h*d+l*g*S,this._y=l*g*d+f*h*S,this._z=l*h*S-f*g*d,this._w=l*h*d-f*g*S;break;case"XZY":this._x=f*h*d-l*g*S,this._y=l*g*d-f*h*S,this._z=l*h*S+f*g*d,this._w=l*h*d+f*g*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],a=t[8],s=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],f=i+o+d;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(h-c)*g,this._y=(a-l)*g,this._z=(s-r)*g}else if(i>o&&i>d){const g=2*Math.sqrt(1+i-o-d);this._w=(h-c)/g,this._x=.25*g,this._y=(r+s)/g,this._z=(a+l)/g}else if(o>d){const g=2*Math.sqrt(1+o-i-d);this._w=(a-l)/g,this._x=(r+s)/g,this._y=.25*g,this._z=(c+h)/g}else{const g=2*Math.sqrt(1+d-i-o);this._w=(s-r)/g,this._x=(a+l)/g,this._y=(c+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,a=e._z,s=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+s*o+r*l-a*c,this._y=r*h+s*c+a*o-i*l,this._z=a*h+s*l+i*c-r*o,this._w=s*h-i*o-r*c-a*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,s=this._w;let o=s*e._w+i*e._x+r*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=i,this._y=r,this._z=a,this;const c=1-o*o;if(c<=Number.EPSILON){const g=1-t;return this._w=g*s+t*this._w,this._x=g*i+t*this._x,this._y=g*r+t*this._y,this._z=g*a+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=s*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=a*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,a=e.x,s=e.y,o=e.z,c=e.w,l=2*(s*r-o*i),h=2*(o*t-a*r),d=2*(a*i-s*t);return this.x=t+c*l+s*d-o*h,this.y=i+c*h+o*l-a*d,this.z=r+c*d+a*h-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,a=e.z,s=t.x,o=t.y,c=t.z;return this.x=r*c-a*o,this.y=a*s-i*c,this.z=i*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return vo.copy(this).projectOnVector(e),this.sub(vo)}reflect(e){return this.sub(vo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vo=new F,yu=new Na;class tt{constructor(e,t,i,r,a,s,o,c,l){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,c,l)}set(e,t,i,r,a,s,o,c,l){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=a,h[5]=c,h[6]=i,h[7]=s,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[3],c=i[6],l=i[1],h=i[4],d=i[7],f=i[2],g=i[5],S=i[8],E=r[0],v=r[3],p=r[6],I=r[1],R=r[4],w=r[7],L=r[2],N=r[5],O=r[8];return a[0]=s*E+o*I+c*L,a[3]=s*v+o*R+c*N,a[6]=s*p+o*w+c*O,a[1]=l*E+h*I+d*L,a[4]=l*v+h*R+d*N,a[7]=l*p+h*w+d*O,a[2]=f*E+g*I+S*L,a[5]=f*v+g*R+S*N,a[8]=f*p+g*w+S*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*s*h-t*o*l-i*a*h+i*o*c+r*a*l-r*s*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*s-o*l,f=o*c-h*a,g=l*a-s*c,S=t*d+i*f+r*g;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/S;return e[0]=d*E,e[1]=(r*l-h*i)*E,e[2]=(o*i-r*s)*E,e[3]=f*E,e[4]=(h*t-r*c)*E,e[5]=(r*a-o*t)*E,e[6]=g*E,e[7]=(i*c-l*t)*E,e[8]=(s*t-i*a)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,s,o){const c=Math.cos(a),l=Math.sin(a);return this.set(i*c,i*l,-i*(c*s+l*o)+s+e,-r*l,r*c,-r*(-l*s+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(_o.makeScale(e,t)),this}rotate(e){return this.premultiply(_o.makeRotation(-e)),this}translate(e,t){return this.premultiply(_o.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _o=new tt;function dd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ba(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function jp(){const n=ba("canvas");return n.style.display="block",n}const Mu={};function Da(n){n in Mu||(Mu[n]=!0,console.warn(n))}function Kp(n,e,t){return new Promise(function(i,r){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}const wu=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Au=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jp(){const n={enabled:!0,workingColorSpace:tn,spaces:{},convert:function(r,a,s){return this.enabled===!1||a===s||!a||!s||(this.spaces[a].transfer===Tt&&(r.r=fi(r.r),r.g=fi(r.g),r.b=fi(r.b)),this.spaces[a].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Tt&&(r.r=Ur(r.r),r.g=Ur(r.g),r.b=Ur(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===nn?Os:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,s){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return Da("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return Da("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[tn]:{primaries:e,whitePoint:i,transfer:Os,toXYZ:wu,fromXYZ:Au,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Dt},outputColorSpaceConfig:{drawingBufferColorSpace:Dt}},[Dt]:{primaries:e,whitePoint:i,transfer:Tt,toXYZ:wu,fromXYZ:Au,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Dt}}}),n}const gt=Jp();function fi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ur(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let or;class Qp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{or===void 0&&(or=ba("canvas")),or.width=e.width,or.height=e.height;const r=or.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=or}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ba("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=fi(a[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(fi(t[i]/255)*255):t[i]=fi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let em=0;class Ul{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=Zr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(So(r[s].image)):a.push(So(r[s]))}else a=So(r);i.url=a}return t||(e.images[this.uuid]=i),i}}function So(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Qp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tm=0;const xo=new F;class Pt extends qn{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,i=li,r=li,a=pt,s=ui,o=Vt,c=$t,l=Pt.DEFAULT_ANISOTROPY,h=nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=Zr(),this.name="",this.source=new Ul(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(xo).x}get height(){return this.source.getSize(xo).y}get depth(){return this.source.getSize(xo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case an:e.x=e.x-Math.floor(e.x);break;case li:e.x=e.x<0?0:1;break;case Ec:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case an:e.y=e.y-Math.floor(e.y);break;case li:e.y=e.y<0?0:1;break;case Ec:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=rd;Pt.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,i=0,r=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a;const c=e.elements,l=c[0],h=c[4],d=c[8],f=c[1],g=c[5],S=c[9],E=c[2],v=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-E)<.01&&Math.abs(S-v)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+E)<.1&&Math.abs(S+v)<.1&&Math.abs(l+g+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(l+1)/2,w=(g+1)/2,L=(p+1)/2,N=(h+f)/4,O=(d+E)/4,G=(S+v)/4;return R>w&&R>L?R<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(R),r=N/i,a=O/i):w>L?w<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(w),i=N/r,a=G/r):L<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(L),i=O/a,r=G/a),this.set(i,r,a,t),this}let I=Math.sqrt((v-S)*(v-S)+(d-E)*(d-E)+(f-h)*(f-h));return Math.abs(I)<.001&&(I=1),this.x=(v-S)/I,this.y=(d-E)/I,this.z=(f-h)/I,this.w=Math.acos((l+g+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nm extends qn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const r={width:e,height:t,depth:i.depth},a=new Pt(r);this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:pt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ul(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xt extends nm{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ol extends Pt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class im extends Xt{constructor(e=1,t=1,i=1,r={}){super(e,t,r),this.isWebGLArrayRenderTarget=!0,this.depth=i,this.texture=new Ol(null,e,t,i),this._setTextureOptions(r),this.texture.isRenderTargetTexture=!0}}class pi extends Pt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jr{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Cn):Cn.fromBufferAttribute(a,s),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ka.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ka.copy(i.boundingBox)),Ka.applyMatrix4(e.matrixWorld),this.union(Ka)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ra),Ja.subVectors(this.max,ra),cr.subVectors(e.a,ra),lr.subVectors(e.b,ra),ur.subVectors(e.c,ra),Ti.subVectors(lr,cr),yi.subVectors(ur,lr),Bi.subVectors(cr,ur);let t=[0,-Ti.z,Ti.y,0,-yi.z,yi.y,0,-Bi.z,Bi.y,Ti.z,0,-Ti.x,yi.z,0,-yi.x,Bi.z,0,-Bi.x,-Ti.y,Ti.x,0,-yi.y,yi.x,0,-Bi.y,Bi.x,0];return!Eo(t,cr,lr,ur,Ja)||(t=[1,0,0,0,1,0,0,0,1],!Eo(t,cr,lr,ur,Ja))?!1:(Qa.crossVectors(Ti,yi),t=[Qa.x,Qa.y,Qa.z],Eo(t,cr,lr,ur,Ja))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const jn=[new F,new F,new F,new F,new F,new F,new F,new F],Cn=new F,Ka=new jr,cr=new F,lr=new F,ur=new F,Ti=new F,yi=new F,Bi=new F,ra=new F,Ja=new F,Qa=new F,Hi=new F;function Eo(n,e,t,i,r){for(let a=0,s=n.length-3;a<=s;a+=3){Hi.fromArray(n,a);const o=r.x*Math.abs(Hi.x)+r.y*Math.abs(Hi.y)+r.z*Math.abs(Hi.z),c=e.dot(Hi),l=t.dot(Hi),h=i.dot(Hi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const rm=new jr,aa=new F,To=new F;class Fl{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):rm.setFromPoints(e).getCenter(i);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;aa.subVectors(e,this.center);const t=aa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(aa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(To.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(aa.copy(e.center).add(To)),this.expandByPoint(aa.copy(e.center).sub(To))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Kn=new F,yo=new F,es=new F,Mi=new F,Mo=new F,ts=new F,wo=new F;class am{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kn.copy(this.origin).addScaledVector(this.direction,t),Kn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){yo.copy(e).add(t).multiplyScalar(.5),es.copy(t).sub(e).normalize(),Mi.copy(this.origin).sub(yo);const a=e.distanceTo(t)*.5,s=-this.direction.dot(es),o=Mi.dot(this.direction),c=-Mi.dot(es),l=Mi.lengthSq(),h=Math.abs(1-s*s);let d,f,g,S;if(h>0)if(d=s*c-o,f=s*o-c,S=a*h,d>=0)if(f>=-S)if(f<=S){const E=1/h;d*=E,f*=E,g=d*(d+s*f+2*o)+f*(s*d+f+2*c)+l}else f=a,d=Math.max(0,-(s*f+o)),g=-d*d+f*(f+2*c)+l;else f=-a,d=Math.max(0,-(s*f+o)),g=-d*d+f*(f+2*c)+l;else f<=-S?(d=Math.max(0,-(-s*a+o)),f=d>0?-a:Math.min(Math.max(-a,-c),a),g=-d*d+f*(f+2*c)+l):f<=S?(d=0,f=Math.min(Math.max(-a,-c),a),g=f*(f+2*c)+l):(d=Math.max(0,-(s*a+o)),f=d>0?a:Math.min(Math.max(-a,-c),a),g=-d*d+f*(f+2*c)+l);else f=s>0?-a:a,d=Math.max(0,-(s*f+o)),g=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(yo).addScaledVector(es,f),g}intersectSphere(e,t){Kn.subVectors(e.center,this.origin);const i=Kn.dot(this.direction),r=Kn.dot(Kn)-i*i,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=i-s,c=i+s;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,s,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),h>=0?(a=(e.min.y-f.y)*h,s=(e.max.y-f.y)*h):(a=(e.max.y-f.y)*h,s=(e.min.y-f.y)*h),i>s||a>r||((a>i||isNaN(i))&&(i=a),(s<r||isNaN(r))&&(r=s),d>=0?(o=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,t,i,r,a){Mo.subVectors(t,e),ts.subVectors(i,e),wo.crossVectors(Mo,ts);let s=this.direction.dot(wo),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Mi.subVectors(this.origin,e);const c=o*this.direction.dot(ts.crossVectors(Mi,ts));if(c<0)return null;const l=o*this.direction.dot(Mo.cross(Mi));if(l<0||c+l>s)return null;const h=-o*Mi.dot(wo);return h<0?null:this.at(h/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class He{constructor(e,t,i,r,a,s,o,c,l,h,d,f,g,S,E,v){He.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,c,l,h,d,f,g,S,E,v)}set(e,t,i,r,a,s,o,c,l,h,d,f,g,S,E,v){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=a,p[5]=s,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=f,p[3]=g,p[7]=S,p[11]=E,p[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new He().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/hr.setFromMatrixColumn(e,0).length(),a=1/hr.setFromMatrixColumn(e,1).length(),s=1/hr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){const f=s*h,g=s*d,S=o*h,E=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=g+S*l,t[5]=f-E*l,t[9]=-o*c,t[2]=E-f*l,t[6]=S+g*l,t[10]=s*c}else if(e.order==="YXZ"){const f=c*h,g=c*d,S=l*h,E=l*d;t[0]=f+E*o,t[4]=S*o-g,t[8]=s*l,t[1]=s*d,t[5]=s*h,t[9]=-o,t[2]=g*o-S,t[6]=E+f*o,t[10]=s*c}else if(e.order==="ZXY"){const f=c*h,g=c*d,S=l*h,E=l*d;t[0]=f-E*o,t[4]=-s*d,t[8]=S+g*o,t[1]=g+S*o,t[5]=s*h,t[9]=E-f*o,t[2]=-s*l,t[6]=o,t[10]=s*c}else if(e.order==="ZYX"){const f=s*h,g=s*d,S=o*h,E=o*d;t[0]=c*h,t[4]=S*l-g,t[8]=f*l+E,t[1]=c*d,t[5]=E*l+f,t[9]=g*l-S,t[2]=-l,t[6]=o*c,t[10]=s*c}else if(e.order==="YZX"){const f=s*c,g=s*l,S=o*c,E=o*l;t[0]=c*h,t[4]=E-f*d,t[8]=S*d+g,t[1]=d,t[5]=s*h,t[9]=-o*h,t[2]=-l*h,t[6]=g*d+S,t[10]=f-E*d}else if(e.order==="XZY"){const f=s*c,g=s*l,S=o*c,E=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=f*d+E,t[5]=s*h,t[9]=g*d-S,t[2]=S*d-g,t[6]=o*h,t[10]=E*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sm,e,om)}lookAt(e,t,i){const r=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),wi.crossVectors(i,pn),wi.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),wi.crossVectors(i,pn)),wi.normalize(),ns.crossVectors(pn,wi),r[0]=wi.x,r[4]=ns.x,r[8]=pn.x,r[1]=wi.y,r[5]=ns.y,r[9]=pn.y,r[2]=wi.z,r[6]=ns.z,r[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[4],c=i[8],l=i[12],h=i[1],d=i[5],f=i[9],g=i[13],S=i[2],E=i[6],v=i[10],p=i[14],I=i[3],R=i[7],w=i[11],L=i[15],N=r[0],O=r[4],G=r[8],y=r[12],M=r[1],B=r[5],X=r[9],j=r[13],Q=r[2],ee=r[6],ie=r[10],ae=r[14],J=r[3],ge=r[7],ue=r[11],De=r[15];return a[0]=s*N+o*M+c*Q+l*J,a[4]=s*O+o*B+c*ee+l*ge,a[8]=s*G+o*X+c*ie+l*ue,a[12]=s*y+o*j+c*ae+l*De,a[1]=h*N+d*M+f*Q+g*J,a[5]=h*O+d*B+f*ee+g*ge,a[9]=h*G+d*X+f*ie+g*ue,a[13]=h*y+d*j+f*ae+g*De,a[2]=S*N+E*M+v*Q+p*J,a[6]=S*O+E*B+v*ee+p*ge,a[10]=S*G+E*X+v*ie+p*ue,a[14]=S*y+E*j+v*ae+p*De,a[3]=I*N+R*M+w*Q+L*J,a[7]=I*O+R*B+w*ee+L*ge,a[11]=I*G+R*X+w*ie+L*ue,a[15]=I*y+R*j+w*ae+L*De,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],s=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],f=e[10],g=e[14],S=e[3],E=e[7],v=e[11],p=e[15];return S*(+a*c*d-r*l*d-a*o*f+i*l*f+r*o*g-i*c*g)+E*(+t*c*g-t*l*f+a*s*f-r*s*g+r*l*h-a*c*h)+v*(+t*l*d-t*o*g-a*s*d+i*s*g+a*o*h-i*l*h)+p*(-r*o*h-t*c*d+t*o*f+r*s*d-i*s*f+i*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],f=e[10],g=e[11],S=e[12],E=e[13],v=e[14],p=e[15],I=d*v*l-E*f*l+E*c*g-o*v*g-d*c*p+o*f*p,R=S*f*l-h*v*l-S*c*g+s*v*g+h*c*p-s*f*p,w=h*E*l-S*d*l+S*o*g-s*E*g-h*o*p+s*d*p,L=S*d*c-h*E*c-S*o*f+s*E*f+h*o*v-s*d*v,N=t*I+i*R+r*w+a*L;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/N;return e[0]=I*O,e[1]=(E*f*a-d*v*a-E*r*g+i*v*g+d*r*p-i*f*p)*O,e[2]=(o*v*a-E*c*a+E*r*l-i*v*l-o*r*p+i*c*p)*O,e[3]=(d*c*a-o*f*a-d*r*l+i*f*l+o*r*g-i*c*g)*O,e[4]=R*O,e[5]=(h*v*a-S*f*a+S*r*g-t*v*g-h*r*p+t*f*p)*O,e[6]=(S*c*a-s*v*a-S*r*l+t*v*l+s*r*p-t*c*p)*O,e[7]=(s*f*a-h*c*a+h*r*l-t*f*l-s*r*g+t*c*g)*O,e[8]=w*O,e[9]=(S*d*a-h*E*a-S*i*g+t*E*g+h*i*p-t*d*p)*O,e[10]=(s*E*a-S*o*a+S*i*l-t*E*l-s*i*p+t*o*p)*O,e[11]=(h*o*a-s*d*a-h*i*l+t*d*l+s*i*g-t*o*g)*O,e[12]=L*O,e[13]=(h*E*r-S*d*r+S*i*f-t*E*f-h*i*v+t*d*v)*O,e[14]=(S*o*r-s*E*r-S*i*c+t*E*c+s*i*v-t*o*v)*O,e[15]=(s*d*r-h*o*r+h*i*c-t*d*c-s*i*f+t*o*f)*O,this}scale(e){const t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),a=1-i,s=e.x,o=e.y,c=e.z,l=a*s,h=a*o;return this.set(l*s+i,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+i,h*c-r*s,0,l*c-r*o,h*c+r*s,a*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,s){return this.set(1,i,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,a=t._x,s=t._y,o=t._z,c=t._w,l=a+a,h=s+s,d=o+o,f=a*l,g=a*h,S=a*d,E=s*h,v=s*d,p=o*d,I=c*l,R=c*h,w=c*d,L=i.x,N=i.y,O=i.z;return r[0]=(1-(E+p))*L,r[1]=(g+w)*L,r[2]=(S-R)*L,r[3]=0,r[4]=(g-w)*N,r[5]=(1-(f+p))*N,r[6]=(v+I)*N,r[7]=0,r[8]=(S+R)*O,r[9]=(v-I)*O,r[10]=(1-(f+E))*O,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let a=hr.set(r[0],r[1],r[2]).length();const s=hr.set(r[4],r[5],r[6]).length(),o=hr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],bn.copy(this);const l=1/a,h=1/s,d=1/o;return bn.elements[0]*=l,bn.elements[1]*=l,bn.elements[2]*=l,bn.elements[4]*=h,bn.elements[5]*=h,bn.elements[6]*=h,bn.elements[8]*=d,bn.elements[9]*=d,bn.elements[10]*=d,t.setFromRotationMatrix(bn),i.x=a,i.y=s,i.z=o,this}makePerspective(e,t,i,r,a,s,o=Vn,c=!1){const l=this.elements,h=2*a/(t-e),d=2*a/(i-r),f=(t+e)/(t-e),g=(i+r)/(i-r);let S,E;if(c)S=a/(s-a),E=s*a/(s-a);else if(o===Vn)S=-(s+a)/(s-a),E=-2*s*a/(s-a);else if(o===Fs)S=-s/(s-a),E=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=g,l[13]=0,l[2]=0,l[6]=0,l[10]=S,l[14]=E,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,a,s,o=Vn,c=!1){const l=this.elements,h=2/(t-e),d=2/(i-r),f=-(t+e)/(t-e),g=-(i+r)/(i-r);let S,E;if(c)S=1/(s-a),E=s/(s-a);else if(o===Vn)S=-2/(s-a),E=-(s+a)/(s-a);else if(o===Fs)S=-1/(s-a),E=-a/(s-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=g,l[2]=0,l[6]=0,l[10]=S,l[14]=E,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const hr=new F,bn=new He,sm=new F(0,0,0),om=new F(1,1,1),wi=new F,ns=new F,pn=new F,Ru=new He,Cu=new Na;class _i{constructor(e=0,t=0,i=0,r=_i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],c=r[1],l=r[5],h=r[9],d=r[2],f=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(lt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-lt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(lt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-lt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ru.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ru,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cu.setFromEuler(this),this.setFromQuaternion(Cu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_i.DEFAULT_ORDER="XYZ";class fd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cm=0;const bu=new F,dr=new Na,Jn=new He,is=new F,sa=new F,lm=new F,um=new Na,Du=new F(1,0,0),Iu=new F(0,1,0),Pu=new F(0,0,1),Lu={type:"added"},hm={type:"removed"},fr={type:"childadded",child:null},Ao={type:"childremoved",child:null};class sn extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cm++}),this.uuid=Zr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new F,t=new _i,i=new Na,r=new F(1,1,1);function a(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new He},normalMatrix:{value:new tt}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return dr.setFromAxisAngle(e,t),this.quaternion.multiply(dr),this}rotateOnWorldAxis(e,t){return dr.setFromAxisAngle(e,t),this.quaternion.premultiply(dr),this}rotateX(e){return this.rotateOnAxis(Du,e)}rotateY(e){return this.rotateOnAxis(Iu,e)}rotateZ(e){return this.rotateOnAxis(Pu,e)}translateOnAxis(e,t){return bu.copy(e).applyQuaternion(this.quaternion),this.position.add(bu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Du,e)}translateY(e){return this.translateOnAxis(Iu,e)}translateZ(e){return this.translateOnAxis(Pu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?is.copy(e):is.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(sa,is,this.up):Jn.lookAt(is,sa,this.up),this.quaternion.setFromRotationMatrix(Jn),r&&(Jn.extractRotation(r.matrixWorld),dr.setFromRotationMatrix(Jn),this.quaternion.premultiply(dr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lu),fr.child=e,this.dispatchEvent(fr),fr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hm),Ao.child=e,this.dispatchEvent(Ao),Ao.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lu),fr.child=e,this.dispatchEvent(fr),fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,e,lm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,um,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];a(e.shapes,d)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(a(e.materials,this.material[c]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(a(e.animations,c))}}if(t){const o=s(e.geometries),c=s(e.materials),l=s(e.textures),h=s(e.images),d=s(e.shapes),f=s(e.skeletons),g=s(e.animations),S=s(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),g.length>0&&(i.animations=g),S.length>0&&(i.nodes=S)}return i.object=r,i;function s(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}sn.DEFAULT_UP=new F(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new F,Qn=new F,Ro=new F,ei=new F,pr=new F,mr=new F,Nu=new F,Co=new F,bo=new F,Do=new F,Io=new ht,Po=new ht,Lo=new ht;class Un{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Dn.subVectors(e,t),r.cross(Dn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){Dn.subVectors(r,t),Qn.subVectors(i,t),Ro.subVectors(e,t);const s=Dn.dot(Dn),o=Dn.dot(Qn),c=Dn.dot(Ro),l=Qn.dot(Qn),h=Qn.dot(Ro),d=s*l-o*o;if(d===0)return a.set(0,0,0),null;const f=1/d,g=(l*c-o*h)*f,S=(s*h-o*c)*f;return a.set(1-g-S,S,g)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(e,t,i,r,a,s,o,c){return this.getBarycoord(e,t,i,r,ei)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,ei.x),c.addScaledVector(s,ei.y),c.addScaledVector(o,ei.z),c)}static getInterpolatedAttribute(e,t,i,r,a,s){return Io.setScalar(0),Po.setScalar(0),Lo.setScalar(0),Io.fromBufferAttribute(e,t),Po.fromBufferAttribute(e,i),Lo.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(Io,a.x),s.addScaledVector(Po,a.y),s.addScaledVector(Lo,a.z),s}static isFrontFacing(e,t,i,r){return Dn.subVectors(i,t),Qn.subVectors(e,t),Dn.cross(Qn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),Dn.cross(Qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Un.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,a){return Un.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return Un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,a=this.c;let s,o;pr.subVectors(r,i),mr.subVectors(a,i),Co.subVectors(e,i);const c=pr.dot(Co),l=mr.dot(Co);if(c<=0&&l<=0)return t.copy(i);bo.subVectors(e,r);const h=pr.dot(bo),d=mr.dot(bo);if(h>=0&&d<=h)return t.copy(r);const f=c*d-h*l;if(f<=0&&c>=0&&h<=0)return s=c/(c-h),t.copy(i).addScaledVector(pr,s);Do.subVectors(e,a);const g=pr.dot(Do),S=mr.dot(Do);if(S>=0&&g<=S)return t.copy(a);const E=g*l-c*S;if(E<=0&&l>=0&&S<=0)return o=l/(l-S),t.copy(i).addScaledVector(mr,o);const v=h*S-g*d;if(v<=0&&d-h>=0&&g-S>=0)return Nu.subVectors(a,r),o=(d-h)/(d-h+(g-S)),t.copy(r).addScaledVector(Nu,o);const p=1/(v+E+f);return s=E*p,o=f*p,t.copy(i).addScaledVector(pr,s).addScaledVector(mr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const pd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},rs={h:0,s:0,l:0};function No(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ft{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=gt.workingColorSpace){return this.r=e,this.g=t,this.b=i,gt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=gt.workingColorSpace){if(e=Nl(e,1),t=lt(t,0,1),i=lt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,s=2*i-a;this.r=No(s,a,e+1/3),this.g=No(s,a,e),this.b=No(s,a,e-1/3)}return gt.colorSpaceToWorking(this,r),this}setStyle(e,t=Dt){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){const i=pd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fi(e.r),this.g=fi(e.g),this.b=fi(e.b),this}copyLinearToSRGB(e){return this.r=Ur(e.r),this.g=Ur(e.g),this.b=Ur(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return gt.workingToColorSpace(jt.copy(this),e),Math.round(lt(jt.r*255,0,255))*65536+Math.round(lt(jt.g*255,0,255))*256+Math.round(lt(jt.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.workingToColorSpace(jt.copy(this),t);const i=jt.r,r=jt.g,a=jt.b,s=Math.max(i,r,a),o=Math.min(i,r,a);let c,l;const h=(o+s)/2;if(o===s)c=0,l=0;else{const d=s-o;switch(l=h<=.5?d/(s+o):d/(2-s-o),s){case i:c=(r-a)/d+(r<a?6:0);break;case r:c=(a-i)/d+2;break;case a:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=gt.workingColorSpace){return gt.workingToColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=Dt){gt.workingToColorSpace(jt.copy(this),e);const t=jt.r,i=jt.g,r=jt.b;return e!==Dt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ai),this.setHSL(Ai.h+e,Ai.s+t,Ai.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ai),e.getHSL(rs);const i=Ea(Ai.h,rs.h,t),r=Ea(Ai.s,rs.s,t),a=Ea(Ai.l,rs.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new ft;ft.NAMES=pd;let dm=0;class Bn extends qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dm++}),this.uuid=Zr(),this.name="",this.type="Material",this.blending=Nr,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hc,this.blendDst=dc,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=Fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sr,this.stencilZFail=sr,this.stencilZPass=sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Nr&&(i.blending=this.blending),this.side!==vi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==hc&&(i.blendSrc=this.blendSrc),this.blendDst!==dc&&(i.blendDst=this.blendDst),this.blendEquation!==qi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Fr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==sr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==sr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==sr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const s=[];for(const o in a){const c=a[o];delete c.metadata,s.push(c)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class md extends Bn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=id,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const oi=fm();function fm(){const n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),r=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(i[c]=0,i[c|256]=32768,r[c]=24,r[c|256]=24):l<-14?(i[c]=1024>>-l-14,i[c|256]=1024>>-l-14|32768,r[c]=-l-1,r[c|256]=-l-1):l<=15?(i[c]=l+15<<10,i[c|256]=l+15<<10|32768,r[c]=13,r[c|256]=13):l<128?(i[c]=31744,i[c|256]=64512,r[c]=24,r[c|256]=24):(i[c]=31744,i[c|256]=64512,r[c]=13,r[c|256]=13)}const a=new Uint32Array(2048),s=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(l&8388608);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,a[c]=l|h}for(let c=1024;c<2048;++c)a[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)s[c]=c<<23;s[31]=1199570944,s[32]=2147483648;for(let c=33;c<63;++c)s[c]=2147483648+(c-32<<23);s[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:r,mantissaTable:a,exponentTable:s,offsetTable:o}}function pm(n){Math.abs(n)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),n=lt(n,-65504,65504),oi.floatView[0]=n;const e=oi.uint32View[0],t=e>>23&511;return oi.baseTable[t]+((e&8388607)>>oi.shiftTable[t])}function mm(n){const e=n>>10;return oi.uint32View[0]=oi.mantissaTable[oi.offsetTable[e]+(n&1023)]+oi.exponentTable[e],oi.floatView[0]}class Uu{static toHalfFloat(e){return pm(e)}static fromHalfFloat(e){return mm(e)}}const Ut=new F,as=new Pe;let gm=0;class An{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Eu,this.updateRanges=[],this.gpuType=qt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)as.fromBufferAttribute(this,t),as.applyMatrix3(e),this.setXY(t,as.x,as.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Rr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Qt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),i=Qt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),i=Qt(i,this.array),r=Qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),i=Qt(i,this.array),r=Qt(r,this.array),a=Qt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Eu&&(e.usage=this.usage),e}}class gd extends An{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class vd extends An{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ji extends An{constructor(e,t,i){super(new Float32Array(e),t,i)}}let vm=0;const Tn=new He,Uo=new sn,gr=new F,mn=new jr,oa=new jr,Ht=new F;class Oi extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=Zr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dd(e)?vd:gd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new tt().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,i){return Tn.makeTranslation(e,t,i),this.applyMatrix4(Tn),this}scale(e,t,i){return Tn.makeScale(e,t,i),this.applyMatrix4(Tn),this}lookAt(e){return Uo.lookAt(e),Uo.updateMatrix(),this.applyMatrix4(Uo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gr).negate(),this.translate(gr.x,gr.y,gr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,a=e.length;r<a;r++){const s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Ji(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const a=e[r];t.setXYZ(r,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const a=t[i];mn.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];oa.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(mn.min,oa.min),mn.expandByPoint(Ht),Ht.addVectors(mn.max,oa.max),mn.expandByPoint(Ht)):(mn.expandByPoint(oa.min),mn.expandByPoint(oa.max))}mn.getCenter(i);let r=0;for(let a=0,s=e.count;a<s;a++)Ht.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(Ht));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ht.fromBufferAttribute(o,l),c&&(gr.fromBufferAttribute(e,l),Ht.add(gr)),r=Math.max(r,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new An(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],c=[];for(let G=0;G<i.count;G++)o[G]=new F,c[G]=new F;const l=new F,h=new F,d=new F,f=new Pe,g=new Pe,S=new Pe,E=new F,v=new F;function p(G,y,M){l.fromBufferAttribute(i,G),h.fromBufferAttribute(i,y),d.fromBufferAttribute(i,M),f.fromBufferAttribute(a,G),g.fromBufferAttribute(a,y),S.fromBufferAttribute(a,M),h.sub(l),d.sub(l),g.sub(f),S.sub(f);const B=1/(g.x*S.y-S.x*g.y);isFinite(B)&&(E.copy(h).multiplyScalar(S.y).addScaledVector(d,-g.y).multiplyScalar(B),v.copy(d).multiplyScalar(g.x).addScaledVector(h,-S.x).multiplyScalar(B),o[G].add(E),o[y].add(E),o[M].add(E),c[G].add(v),c[y].add(v),c[M].add(v))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let G=0,y=I.length;G<y;++G){const M=I[G],B=M.start,X=M.count;for(let j=B,Q=B+X;j<Q;j+=3)p(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const R=new F,w=new F,L=new F,N=new F;function O(G){L.fromBufferAttribute(r,G),N.copy(L);const y=o[G];R.copy(y),R.sub(L.multiplyScalar(L.dot(y))).normalize(),w.crossVectors(N,y);const B=w.dot(c[G])<0?-1:1;s.setXYZW(G,R.x,R.y,R.z,B)}for(let G=0,y=I.length;G<y;++G){const M=I[G],B=M.start,X=M.count;for(let j=B,Q=B+X;j<Q;j+=3)O(e.getX(j+0)),O(e.getX(j+1)),O(e.getX(j+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new An(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,g=i.count;f<g;f++)i.setXYZ(f,0,0,0);const r=new F,a=new F,s=new F,o=new F,c=new F,l=new F,h=new F,d=new F;if(e)for(let f=0,g=e.count;f<g;f+=3){const S=e.getX(f+0),E=e.getX(f+1),v=e.getX(f+2);r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,E),s.fromBufferAttribute(t,v),h.subVectors(s,a),d.subVectors(r,a),h.cross(d),o.fromBufferAttribute(i,S),c.fromBufferAttribute(i,E),l.fromBufferAttribute(i,v),o.add(h),c.add(h),l.add(h),i.setXYZ(S,o.x,o.y,o.z),i.setXYZ(E,c.x,c.y,c.z),i.setXYZ(v,l.x,l.y,l.z)}else for(let f=0,g=t.count;f<g;f+=3)r.fromBufferAttribute(t,f+0),a.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),h.subVectors(s,a),d.subVectors(r,a),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,d=o.normalized,f=new l.constructor(c.length*h);let g=0,S=0;for(let E=0,v=c.length;E<v;E++){o.isInterleavedBufferAttribute?g=c[E]*o.data.stride+o.offset:g=c[E]*h;for(let p=0;p<h;p++)f[S++]=l[g++]}return new An(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Oi,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const a=this.morphAttributes;for(const o in a){const c=[],l=a[o];for(let h=0,d=l.length;h<d;h++){const f=l[h],g=e(f,i);c.push(g)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,c=s.length;o<c;o++){const l=s[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){const g=l[d];h.push(g.toJSON(e.data))}h.length>0&&(r[c]=h,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(t))}const a=e.morphAttributes;for(const l in a){const h=[],d=a[l];for(let f=0,g=d.length;f<g;f++)h.push(d[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let l=0,h=s.length;l<h;l++){const d=s[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ou=new He,zi=new am,ss=new Fl,Fu=new F,os=new F,cs=new F,ls=new F,Oo=new F,us=new F,Bu=new F,hs=new F;class Wn extends sn{constructor(e=new Oi,t=new md){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){us.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const h=o[c],d=a[c];h!==0&&(Oo.fromBufferAttribute(d,e),s?us.addScaledVector(Oo,h):us.addScaledVector(Oo.sub(t),h))}t.add(us)}return t}raycast(e,t){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ss.copy(i.boundingSphere),ss.applyMatrix4(a),zi.copy(e.ray).recast(e.near),!(ss.containsPoint(zi.origin)===!1&&(zi.intersectSphere(ss,Fu)===null||zi.origin.distanceToSquared(Fu)>(e.far-e.near)**2))&&(Ou.copy(a).invert(),zi.copy(e.ray).applyMatrix4(Ou),!(i.boundingBox!==null&&zi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,zi)))}_computeIntersections(e,t,i){let r;const a=this.geometry,s=this.material,o=a.index,c=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,d=a.attributes.normal,f=a.groups,g=a.drawRange;if(o!==null)if(Array.isArray(s))for(let S=0,E=f.length;S<E;S++){const v=f[S],p=s[v.materialIndex],I=Math.max(v.start,g.start),R=Math.min(o.count,Math.min(v.start+v.count,g.start+g.count));for(let w=I,L=R;w<L;w+=3){const N=o.getX(w),O=o.getX(w+1),G=o.getX(w+2);r=ds(this,p,e,i,l,h,d,N,O,G),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const S=Math.max(0,g.start),E=Math.min(o.count,g.start+g.count);for(let v=S,p=E;v<p;v+=3){const I=o.getX(v),R=o.getX(v+1),w=o.getX(v+2);r=ds(this,s,e,i,l,h,d,I,R,w),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(s))for(let S=0,E=f.length;S<E;S++){const v=f[S],p=s[v.materialIndex],I=Math.max(v.start,g.start),R=Math.min(c.count,Math.min(v.start+v.count,g.start+g.count));for(let w=I,L=R;w<L;w+=3){const N=w,O=w+1,G=w+2;r=ds(this,p,e,i,l,h,d,N,O,G),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const S=Math.max(0,g.start),E=Math.min(c.count,g.start+g.count);for(let v=S,p=E;v<p;v+=3){const I=v,R=v+1,w=v+2;r=ds(this,s,e,i,l,h,d,I,R,w),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}}}function _m(n,e,t,i,r,a,s,o){let c;if(e.side===Wt?c=i.intersectTriangle(s,a,r,!0,o):c=i.intersectTriangle(r,a,s,e.side===vi,o),c===null)return null;hs.copy(o),hs.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(hs);return l<t.near||l>t.far?null:{distance:l,point:hs.clone(),object:n}}function ds(n,e,t,i,r,a,s,o,c,l){n.getVertexPosition(o,os),n.getVertexPosition(c,cs),n.getVertexPosition(l,ls);const h=_m(n,e,t,i,os,cs,ls,Bu);if(h){const d=new F;Un.getBarycoord(Bu,os,cs,ls,d),r&&(h.uv=Un.getInterpolatedAttribute(r,o,c,l,d,new Pe)),a&&(h.uv1=Un.getInterpolatedAttribute(a,o,c,l,d,new Pe)),s&&(h.normal=Un.getInterpolatedAttribute(s,o,c,l,d,new F),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new F,materialIndex:0};Un.getNormal(os,cs,ls,f.normal),h.face=f,h.barycoord=d}return h}class Ua extends Oi{constructor(e=1,t=1,i=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const c=[],l=[],h=[],d=[];let f=0,g=0;S("z","y","x",-1,-1,i,t,e,s,a,0),S("z","y","x",1,-1,i,t,-e,s,a,1),S("x","z","y",1,1,e,i,t,r,s,2),S("x","z","y",1,-1,e,i,-t,r,s,3),S("x","y","z",1,-1,e,t,i,r,a,4),S("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(c),this.setAttribute("position",new Ji(l,3)),this.setAttribute("normal",new Ji(h,3)),this.setAttribute("uv",new Ji(d,2));function S(E,v,p,I,R,w,L,N,O,G,y){const M=w/O,B=L/G,X=w/2,j=L/2,Q=N/2,ee=O+1,ie=G+1;let ae=0,J=0;const ge=new F;for(let ue=0;ue<ie;ue++){const De=ue*B-j;for(let Ge=0;Ge<ee;Ge++){const nt=Ge*M-X;ge[E]=nt*I,ge[v]=De*R,ge[p]=Q,l.push(ge.x,ge.y,ge.z),ge[E]=0,ge[v]=0,ge[p]=N>0?1:-1,h.push(ge.x,ge.y,ge.z),d.push(Ge/O),d.push(1-ue/G),ae+=1}}for(let ue=0;ue<G;ue++)for(let De=0;De<O;De++){const Ge=f+De+ee*ue,nt=f+De+ee*(ue+1),ut=f+(De+1)+ee*(ue+1),Je=f+(De+1)+ee*ue;c.push(Ge,nt,Je),c.push(nt,ut,Je),J+=6}o.addGroup(g,J,y),g+=J,f+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ua(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function en(n){const e={};for(let t=0;t<n.length;t++){const i=Vr(n[t]);for(const r in i)e[r]=i[r]}return e}function Sm(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function _d(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}const xm={clone:Vr,merge:en};var Em=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dn extends Bn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Em,this.fragmentShader=Tm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vr(e.uniforms),this.uniformsGroups=Sm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Oa extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=Vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ri=new F,Hu=new Pe,zu=new Pe;class vn extends Oa{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ca*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ca*2*Math.atan(Math.tan(xa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z)}getViewSize(e,t){return this.getViewBounds(e,Hu,zu),t.subVectors(zu,Hu)}setViewOffset(e,t,i,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,l=s.fullHeight;a+=s.offsetX*r/c,t-=s.offsetY*i/l,r*=s.width/c,i*=s.height/l}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vr=-90,_r=1;class ym extends sn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new vn(vr,_r,e,t);r.layers=this.layers,this.add(r);const a=new vn(vr,_r,e,t);a.layers=this.layers,this.add(a);const s=new vn(vr,_r,e,t);s.layers=this.layers,this.add(s);const o=new vn(vr,_r,e,t);o.layers=this.layers,this.add(o);const c=new vn(vr,_r,e,t);c.layers=this.layers,this.add(c);const l=new vn(vr,_r,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,a,s,o,c]=t;for(const l of t)this.remove(l);if(e===Vn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Fs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,c,l,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,a),e.setRenderTarget(i,1,r),e.render(t,s),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(d,f,g),e.xr.enabled=S,i.texture.needsPMREMUpdate=!0}}class Sd extends Pt{constructor(e=[],t=Br,i,r,a,s,o,c,l,h){super(e,t,i,r,a,s,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mm extends Xt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Sd(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ua(5,5,5),a=new dn({name:"CubemapFromEquirect",uniforms:Vr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Wt,blending:wn});a.uniforms.tEquirect.value=t;const s=new Wn(r,a),o=t.minFilter;return t.minFilter===ui&&(t.minFilter=pt),new ym(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(a)}}class fs extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wm={type:"move"};class Fo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,s=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(const E of e.hand.values()){const v=t.getJointPose(E,i),p=this._getHandJoint(l,E);v!==null&&(p.matrix.fromArray(v.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=v.radius),p.visible=v!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),g=.02,S=.005;l.inputState.pinching&&f>g+S?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=g-S&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wm)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new fs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class jc extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _i,this.environmentIntensity=1,this.environmentRotation=new _i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Bs extends Pt{constructor(e=null,t=1,i=1,r,a,s,o,c,l=Ot,h=Ot,d,f){super(null,s,o,c,l,h,r,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Bo=new F,Am=new F,Rm=new tt;class Xi{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Bo.subVectors(i,t).cross(Am.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Bo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Rm.getNormalMatrix(e),r=this.coplanarPoint(Bo).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gi=new Fl,Cm=new Pe(.5,.5),ps=new F;class xd{constructor(e=new Xi,t=new Xi,i=new Xi,r=new Xi,a=new Xi,s=new Xi){this.planes=[e,t,i,r,a,s]}set(e,t,i,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Vn,i=!1){const r=this.planes,a=e.elements,s=a[0],o=a[1],c=a[2],l=a[3],h=a[4],d=a[5],f=a[6],g=a[7],S=a[8],E=a[9],v=a[10],p=a[11],I=a[12],R=a[13],w=a[14],L=a[15];if(r[0].setComponents(l-s,g-h,p-S,L-I).normalize(),r[1].setComponents(l+s,g+h,p+S,L+I).normalize(),r[2].setComponents(l+o,g+d,p+E,L+R).normalize(),r[3].setComponents(l-o,g-d,p-E,L-R).normalize(),i)r[4].setComponents(c,f,v,w).normalize(),r[5].setComponents(l-c,g-f,p-v,L-w).normalize();else if(r[4].setComponents(l-c,g-f,p-v,L-w).normalize(),t===Vn)r[5].setComponents(l+c,g+f,p+v,L+w).normalize();else if(t===Fs)r[5].setComponents(c,f,v,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(e){Gi.center.set(0,0,0);const t=Cm.distanceTo(e.center);return Gi.radius=.7071067811865476+t,Gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ps.x=r.normal.x>0?e.max.x:e.min.x,ps.y=r.normal.y>0?e.max.y:e.min.y,ps.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ps)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bm extends Pt{constructor(e,t,i,r,a,s,o,c,l){super(e,t,i,r,a,s,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Bl extends Pt{constructor(e,t,i=Ni,r,a,s,o=Ot,c=Ot,l,h=Ra,d=1){if(h!==Ra&&h!==kr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,r,a,s,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ul(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ed extends Pt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Js extends Oi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const a=e/2,s=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,h=c+1,d=e/o,f=t/c,g=[],S=[],E=[],v=[];for(let p=0;p<h;p++){const I=p*f-s;for(let R=0;R<l;R++){const w=R*d-a;S.push(w,-I,0),E.push(0,0,1),v.push(R/o),v.push(1-p/c)}}for(let p=0;p<c;p++)for(let I=0;I<o;I++){const R=I+l*p,w=I+l*(p+1),L=I+1+l*(p+1),N=I+1+l*p;g.push(R,w,N),g.push(w,L,N)}this.setIndex(g),this.setAttribute("position",new Ji(S,3)),this.setAttribute("normal",new Ji(E,3)),this.setAttribute("uv",new Ji(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Js(e.width,e.height,e.widthSegments,e.heightSegments)}}class Qs extends dn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Dm extends Bn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ud,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Im extends Bn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=La,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Pm extends Bn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ta={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Lm{constructor(e,t,i){const r=this;let a=!1,s=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){o++,a===!1&&r.onStart!==void 0&&r.onStart(h,s,o),a=!0},this.itemEnd=function(h){s++,r.onProgress!==void 0&&r.onProgress(h,s,o),s===o&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){const d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=l.length;d<f;d+=2){const g=l[d],S=l[d+1];if(g.global&&(g.lastIndex=0),g.test(h))return S}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Nm=new Lm;class Hn{constructor(e){this.manager=e!==void 0?e:Nm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Hn.DEFAULT_MATERIAL_NAME="__DEFAULT";const ti={};class Um extends Error{constructor(e,t){super(e),this.response=t}}class Td extends Hn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=Ta.get(`file:${e}`);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(ti[e]!==void 0){ti[e].push({onLoad:t,onProgress:i,onError:r});return}ti[e]=[],ti[e].push({onLoad:t,onProgress:i,onError:r});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(s).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=ti[e],d=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),g=f?parseInt(f):0,S=g!==0;let E=0;const v=new ReadableStream({start(p){I();function I(){d.read().then(({done:R,value:w})=>{if(R)p.close();else{E+=w.byteLength;const L=new ProgressEvent("progress",{lengthComputable:S,loaded:E,total:g});for(let N=0,O=h.length;N<O;N++){const G=h[N];G.onProgress&&G.onProgress(L)}p.enqueue(w),I()}},R=>{p.error(R)})}}});return new Response(v)}else throw new Um(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),f=d&&d[1]?d[1].toLowerCase():void 0,g=new TextDecoder(f);return l.arrayBuffer().then(S=>g.decode(S))}}}).then(l=>{Ta.add(`file:${e}`,l);const h=ti[e];delete ti[e];for(let d=0,f=h.length;d<f;d++){const g=h[d];g.onLoad&&g.onLoad(l)}}).catch(l=>{const h=ti[e];if(h===void 0)throw this.manager.itemError(e),l;delete ti[e];for(let d=0,f=h.length;d<f;d++){const g=h[d];g.onError&&g.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Sr=new WeakMap;class Om extends Hn{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,s=Ta.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)a.manager.itemStart(e),setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0);else{let d=Sr.get(s);d===void 0&&(d=[],Sr.set(s,d)),d.push({onLoad:t,onError:r})}return s}const o=ba("img");function c(){h(),t&&t(this);const d=Sr.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onLoad&&g.onLoad(this)}Sr.delete(this),a.manager.itemEnd(e)}function l(d){h(),r&&r(d),Ta.remove(`image:${e}`);const f=Sr.get(this)||[];for(let g=0;g<f.length;g++){const S=f[g];S.onError&&S.onError(d)}Sr.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ta.add(`image:${e}`,o),a.manager.itemStart(e),o.src=e,o}}class Fm extends Hn{constructor(e){super(e)}load(e,t,i,r){const a=this,s=new Bs,o=new Td(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(a.withCredentials),o.load(e,function(c){let l;try{l=a.parse(c)}catch(h){if(r!==void 0)r(h);else{console.error(h);return}}l.image!==void 0?s.image=l.image:l.data!==void 0&&(s.image.width=l.width,s.image.height=l.height,s.image.data=l.data),s.wrapS=l.wrapS!==void 0?l.wrapS:li,s.wrapT=l.wrapT!==void 0?l.wrapT:li,s.magFilter=l.magFilter!==void 0?l.magFilter:pt,s.minFilter=l.minFilter!==void 0?l.minFilter:pt,s.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(s.colorSpace=l.colorSpace),l.flipY!==void 0&&(s.flipY=l.flipY),l.format!==void 0&&(s.format=l.format),l.type!==void 0&&(s.type=l.type),l.mipmaps!==void 0&&(s.mipmaps=l.mipmaps,s.minFilter=ui),l.mipmapCount===1&&(s.minFilter=pt),l.generateMipmaps!==void 0&&(s.generateMipmaps=l.generateMipmaps),s.needsUpdate=!0,t&&t(s,l)},i,r),s}}class Bm extends Hn{constructor(e){super(e)}load(e,t,i,r){const a=new Pt,s=new Om(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){a.image=o,a.needsUpdate=!0,t!==void 0&&t(a)},i,r),a}}class yd extends Oa{constructor(e=-1,t=1,i=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,s=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,s=a+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Hm extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class U{constructor(e){this.value=e}clone(){return new U(this.value.clone===void 0?this.value:this.value.clone())}}function Gu(n,e,t,i){const r=zm(i);switch(t){case cd:return n*e;case hi:return n*e/r.components*r.byteLength;case Il:return n*e/r.components*r.byteLength;case $i:return n*e*2/r.components*r.byteLength;case Pl:return n*e*2/r.components*r.byteLength;case ld:return n*e*3/r.components*r.byteLength;case Vt:return n*e*4/r.components*r.byteLength;case Ll:return n*e*4/r.components*r.byteLength;case Cs:case bs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ds:case Is:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yc:case wc:return Math.max(n,16)*Math.max(e,8)/4;case Tc:case Mc:return Math.max(n,8)*Math.max(e,8)/2;case Ac:case Rc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Cc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case bc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Dc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ic:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Pc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Lc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Nc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Uc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Oc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Fc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Hc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case zc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Gc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case kc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Vc:case Wc:case Xc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Yc:case qc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case $c:case Zc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zm(n){switch(n){case $t:case Rl:return{byteLength:1,components:1};case zr:case Cl:case rn:return{byteLength:2,components:1};case bl:case Dl:return{byteLength:2,components:4};case Ni:case js:case qt:return{byteLength:4,components:1};case sd:case od:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$r}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$r);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Md(){let n=null,e=!1,t=null,i=null;function r(a,s){t(a,s),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function Gm(n){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,d=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,h),o.onUploadCallback();let g;if(l instanceof Float32Array)g=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)g=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?g=n.HALF_FLOAT:g=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)g=n.SHORT;else if(l instanceof Uint32Array)g=n.UNSIGNED_INT;else if(l instanceof Int32Array)g=n.INT;else if(l instanceof Int8Array)g=n.BYTE;else if(l instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:g,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){const h=c.array,d=c.updateRanges;if(n.bindBuffer(l,o),d.length===0)n.bufferSubData(l,0,h);else{d.sort((g,S)=>g.start-S.start);let f=0;for(let g=1;g<d.length;g++){const S=d[f],E=d[g];E.start<=S.start+S.count+1?S.count=Math.max(S.count,E.start+E.count-S.start):(++f,d[f]=E)}d.length=f+1;for(let g=0,S=d.length;g<S;g++){const E=d[g];n.bufferSubData(l,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function s(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:a,update:s}}var km=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vm=`#ifdef USE_ALPHAHASH
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
#endif`,Wm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ym=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$m=`#ifdef USE_AOMAP
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
#endif`,Zm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jm=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Km=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,e0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,t0=`#ifdef USE_IRIDESCENCE
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
#endif`,n0=`#ifdef USE_BUMPMAP
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
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,a0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,s0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,o0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,c0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,l0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,u0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,h0=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,d0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,f0=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,p0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,m0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,g0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,v0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_0="gl_FragColor = linearToOutputTexel( gl_FragColor );",S0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,x0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,E0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,T0=`#ifdef USE_ENVMAP
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
#endif`,y0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,M0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,w0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,A0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,R0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,C0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,b0=`#ifdef USE_GRADIENTMAP
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
}`,D0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,I0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,P0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,L0=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,N0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,U0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,O0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,F0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,B0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,H0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,z0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,G0=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,k0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,V0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,W0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,X0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Z0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,j0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,K0=`#if defined( USE_POINTS_UV )
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
#endif`,J0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Q0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ng=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ig=`#ifdef USE_MORPHTARGETS
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
#endif`,rg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ag=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ug=`#ifdef USE_NORMALMAP
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
#endif`,hg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,vg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_g=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Eg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Mg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,wg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Ag=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Rg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cg=`#ifdef USE_SKINNING
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
#endif`,bg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dg=`#ifdef USE_SKINNING
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
#endif`,Ig=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ng=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ug=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Og=`#ifdef USE_TRANSMISSION
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
#endif`,Fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kg=`uniform sampler2D t2D;
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
}`,Vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qg=`#include <common>
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
}`,$g=`#if DEPTH_PACKING == 3200
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
}`,Zg=`#define DISTANCE
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
}`,jg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qg=`uniform float scale;
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
}`,e1=`uniform vec3 diffuse;
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
}`,t1=`#include <common>
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
}`,n1=`uniform vec3 diffuse;
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
}`,i1=`#define LAMBERT
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
}`,r1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,a1=`#define MATCAP
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
}`,s1=`#define MATCAP
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
}`,o1=`#define NORMAL
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
}`,c1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,l1=`#define PHONG
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
}`,u1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,h1=`#define STANDARD
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
}`,d1=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,f1=`#define TOON
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
}`,p1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,m1=`uniform float size;
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
}`,g1=`uniform vec3 diffuse;
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
}`,v1=`#include <common>
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
}`,_1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,S1=`uniform float rotation;
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
}`,x1=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:km,alphahash_pars_fragment:Vm,alphamap_fragment:Wm,alphamap_pars_fragment:Xm,alphatest_fragment:Ym,alphatest_pars_fragment:qm,aomap_fragment:$m,aomap_pars_fragment:Zm,batching_pars_vertex:jm,batching_vertex:Km,begin_vertex:Jm,beginnormal_vertex:Qm,bsdfs:e0,iridescence_fragment:t0,bumpmap_pars_fragment:n0,clipping_planes_fragment:i0,clipping_planes_pars_fragment:r0,clipping_planes_pars_vertex:a0,clipping_planes_vertex:s0,color_fragment:o0,color_pars_fragment:c0,color_pars_vertex:l0,color_vertex:u0,common:h0,cube_uv_reflection_fragment:d0,defaultnormal_vertex:f0,displacementmap_pars_vertex:p0,displacementmap_vertex:m0,emissivemap_fragment:g0,emissivemap_pars_fragment:v0,colorspace_fragment:_0,colorspace_pars_fragment:S0,envmap_fragment:x0,envmap_common_pars_fragment:E0,envmap_pars_fragment:T0,envmap_pars_vertex:y0,envmap_physical_pars_fragment:N0,envmap_vertex:M0,fog_vertex:w0,fog_pars_vertex:A0,fog_fragment:R0,fog_pars_fragment:C0,gradientmap_pars_fragment:b0,lightmap_pars_fragment:D0,lights_lambert_fragment:I0,lights_lambert_pars_fragment:P0,lights_pars_begin:L0,lights_toon_fragment:U0,lights_toon_pars_fragment:O0,lights_phong_fragment:F0,lights_phong_pars_fragment:B0,lights_physical_fragment:H0,lights_physical_pars_fragment:z0,lights_fragment_begin:G0,lights_fragment_maps:k0,lights_fragment_end:V0,logdepthbuf_fragment:W0,logdepthbuf_pars_fragment:X0,logdepthbuf_pars_vertex:Y0,logdepthbuf_vertex:q0,map_fragment:$0,map_pars_fragment:Z0,map_particle_fragment:j0,map_particle_pars_fragment:K0,metalnessmap_fragment:J0,metalnessmap_pars_fragment:Q0,morphinstance_vertex:eg,morphcolor_vertex:tg,morphnormal_vertex:ng,morphtarget_pars_vertex:ig,morphtarget_vertex:rg,normal_fragment_begin:ag,normal_fragment_maps:sg,normal_pars_fragment:og,normal_pars_vertex:cg,normal_vertex:lg,normalmap_pars_fragment:ug,clearcoat_normal_fragment_begin:hg,clearcoat_normal_fragment_maps:dg,clearcoat_pars_fragment:fg,iridescence_pars_fragment:pg,opaque_fragment:mg,packing:gg,premultiplied_alpha_fragment:vg,project_vertex:_g,dithering_fragment:Sg,dithering_pars_fragment:xg,roughnessmap_fragment:Eg,roughnessmap_pars_fragment:Tg,shadowmap_pars_fragment:yg,shadowmap_pars_vertex:Mg,shadowmap_vertex:wg,shadowmask_pars_fragment:Ag,skinbase_vertex:Rg,skinning_pars_vertex:Cg,skinning_vertex:bg,skinnormal_vertex:Dg,specularmap_fragment:Ig,specularmap_pars_fragment:Pg,tonemapping_fragment:Lg,tonemapping_pars_fragment:Ng,transmission_fragment:Ug,transmission_pars_fragment:Og,uv_pars_fragment:Fg,uv_pars_vertex:Bg,uv_vertex:Hg,worldpos_vertex:zg,background_vert:Gg,background_frag:kg,backgroundCube_vert:Vg,backgroundCube_frag:Wg,cube_vert:Xg,cube_frag:Yg,depth_vert:qg,depth_frag:$g,distanceRGBA_vert:Zg,distanceRGBA_frag:jg,equirect_vert:Kg,equirect_frag:Jg,linedashed_vert:Qg,linedashed_frag:e1,meshbasic_vert:t1,meshbasic_frag:n1,meshlambert_vert:i1,meshlambert_frag:r1,meshmatcap_vert:a1,meshmatcap_frag:s1,meshnormal_vert:o1,meshnormal_frag:c1,meshphong_vert:l1,meshphong_frag:u1,meshphysical_vert:h1,meshphysical_frag:d1,meshtoon_vert:f1,meshtoon_frag:p1,points_vert:m1,points_frag:g1,shadow_vert:v1,shadow_frag:_1,sprite_vert:S1,sprite_frag:x1},ye={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},kn={basic:{uniforms:en([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:en([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new ft(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:en([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:en([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:en([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new ft(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:en([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:en([ye.points,ye.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:en([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:en([ye.common,ye.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:en([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:en([ye.sprite,ye.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:en([ye.common,ye.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:en([ye.lights,ye.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};kn.physical={uniforms:en([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const ms={r:0,b:0,g:0},ki=new _i,E1=new He;function T1(n,e,t,i,r,a,s){const o=new ft(0);let c=a===!0?0:1,l,h,d=null,f=0,g=null;function S(R){let w=R.isScene===!0?R.background:null;return w&&w.isTexture&&(w=(R.backgroundBlurriness>0?t:e).get(w)),w}function E(R){let w=!1;const L=S(R);L===null?p(o,c):L&&L.isColor&&(p(L,1),w=!0);const N=n.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,s):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(n.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(R,w){const L=S(w);L&&(L.isCubeTexture||L.mapping===Zs)?(h===void 0&&(h=new Wn(new Ua(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:Vr(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,O,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),ki.copy(w.backgroundRotation),ki.x*=-1,ki.y*=-1,ki.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),h.material.uniforms.envMap.value=L,h.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(E1.makeRotationFromEuler(ki)),h.material.toneMapped=gt.getTransfer(L.colorSpace)!==Tt,(d!==L||f!==L.version||g!==n.toneMapping)&&(h.material.needsUpdate=!0,d=L,f=L.version,g=n.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null)):L&&L.isTexture&&(l===void 0&&(l=new Wn(new Js(2,2),new dn({name:"BackgroundMaterial",uniforms:Vr(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=L,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=gt.getTransfer(L.colorSpace)!==Tt,L.matrixAutoUpdate===!0&&L.updateMatrix(),l.material.uniforms.uvTransform.value.copy(L.matrix),(d!==L||f!==L.version||g!==n.toneMapping)&&(l.material.needsUpdate=!0,d=L,f=L.version,g=n.toneMapping),l.layers.enableAll(),R.unshift(l,l.geometry,l.material,0,0,null))}function p(R,w){R.getRGB(ms,_d(n)),i.buffers.color.setClear(ms.r,ms.g,ms.b,w,s)}function I(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(R,w=1){o.set(R),c=w,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(R){c=R,p(o,c)},render:E,addToRenderList:v,dispose:I}}function y1(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let a=r,s=!1;function o(M,B,X,j,Q){let ee=!1;const ie=d(j,X,B);a!==ie&&(a=ie,l(a.object)),ee=g(M,j,X,Q),ee&&S(M,j,X,Q),Q!==null&&e.update(Q,n.ELEMENT_ARRAY_BUFFER),(ee||s)&&(s=!1,w(M,B,X,j),Q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function c(){return n.createVertexArray()}function l(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function d(M,B,X){const j=X.wireframe===!0;let Q=i[M.id];Q===void 0&&(Q={},i[M.id]=Q);let ee=Q[B.id];ee===void 0&&(ee={},Q[B.id]=ee);let ie=ee[j];return ie===void 0&&(ie=f(c()),ee[j]=ie),ie}function f(M){const B=[],X=[],j=[];for(let Q=0;Q<t;Q++)B[Q]=0,X[Q]=0,j[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:X,attributeDivisors:j,object:M,attributes:{},index:null}}function g(M,B,X,j){const Q=a.attributes,ee=B.attributes;let ie=0;const ae=X.getAttributes();for(const J in ae)if(ae[J].location>=0){const ue=Q[J];let De=ee[J];if(De===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(De=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(De=M.instanceColor)),ue===void 0||ue.attribute!==De||De&&ue.data!==De.data)return!0;ie++}return a.attributesNum!==ie||a.index!==j}function S(M,B,X,j){const Q={},ee=B.attributes;let ie=0;const ae=X.getAttributes();for(const J in ae)if(ae[J].location>=0){let ue=ee[J];ue===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(ue=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(ue=M.instanceColor));const De={};De.attribute=ue,ue&&ue.data&&(De.data=ue.data),Q[J]=De,ie++}a.attributes=Q,a.attributesNum=ie,a.index=j}function E(){const M=a.newAttributes;for(let B=0,X=M.length;B<X;B++)M[B]=0}function v(M){p(M,0)}function p(M,B){const X=a.newAttributes,j=a.enabledAttributes,Q=a.attributeDivisors;X[M]=1,j[M]===0&&(n.enableVertexAttribArray(M),j[M]=1),Q[M]!==B&&(n.vertexAttribDivisor(M,B),Q[M]=B)}function I(){const M=a.newAttributes,B=a.enabledAttributes;for(let X=0,j=B.length;X<j;X++)B[X]!==M[X]&&(n.disableVertexAttribArray(X),B[X]=0)}function R(M,B,X,j,Q,ee,ie){ie===!0?n.vertexAttribIPointer(M,B,X,Q,ee):n.vertexAttribPointer(M,B,X,j,Q,ee)}function w(M,B,X,j){E();const Q=j.attributes,ee=X.getAttributes(),ie=B.defaultAttributeValues;for(const ae in ee){const J=ee[ae];if(J.location>=0){let ge=Q[ae];if(ge===void 0&&(ae==="instanceMatrix"&&M.instanceMatrix&&(ge=M.instanceMatrix),ae==="instanceColor"&&M.instanceColor&&(ge=M.instanceColor)),ge!==void 0){const ue=ge.normalized,De=ge.itemSize,Ge=e.get(ge);if(Ge===void 0)continue;const nt=Ge.buffer,ut=Ge.type,Je=Ge.bytesPerElement,Z=ut===n.INT||ut===n.UNSIGNED_INT||ge.gpuType===js;if(ge.isInterleavedBufferAttribute){const se=ge.data,Me=se.stride,Y=ge.offset;if(se.isInstancedInterleavedBuffer){for(let we=0;we<J.locationSize;we++)p(J.location+we,se.meshPerAttribute);M.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let we=0;we<J.locationSize;we++)v(J.location+we);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let we=0;we<J.locationSize;we++)R(J.location+we,De/J.locationSize,ut,ue,Me*Je,(Y+De/J.locationSize*we)*Je,Z)}else{if(ge.isInstancedBufferAttribute){for(let se=0;se<J.locationSize;se++)p(J.location+se,ge.meshPerAttribute);M.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let se=0;se<J.locationSize;se++)v(J.location+se);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let se=0;se<J.locationSize;se++)R(J.location+se,De/J.locationSize,ut,ue,De*Je,De/J.locationSize*se*Je,Z)}}else if(ie!==void 0){const ue=ie[ae];if(ue!==void 0)switch(ue.length){case 2:n.vertexAttrib2fv(J.location,ue);break;case 3:n.vertexAttrib3fv(J.location,ue);break;case 4:n.vertexAttrib4fv(J.location,ue);break;default:n.vertexAttrib1fv(J.location,ue)}}}}I()}function L(){G();for(const M in i){const B=i[M];for(const X in B){const j=B[X];for(const Q in j)h(j[Q].object),delete j[Q];delete B[X]}delete i[M]}}function N(M){if(i[M.id]===void 0)return;const B=i[M.id];for(const X in B){const j=B[X];for(const Q in j)h(j[Q].object),delete j[Q];delete B[X]}delete i[M.id]}function O(M){for(const B in i){const X=i[B];if(X[M.id]===void 0)continue;const j=X[M.id];for(const Q in j)h(j[Q].object),delete j[Q];delete X[M.id]}}function G(){y(),s=!0,a!==r&&(a=r,l(a.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:G,resetDefaultState:y,dispose:L,releaseStatesOfGeometry:N,releaseStatesOfProgram:O,initAttributes:E,enableAttribute:v,disableUnusedAttributes:I}}function M1(n,e,t){let i;function r(l){i=l}function a(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function s(l,h,d){d!==0&&(n.drawArraysInstanced(i,l,h,d),t.update(h,i,d))}function o(l,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,d);let g=0;for(let S=0;S<d;S++)g+=h[S];t.update(g,i,1)}function c(l,h,d,f){if(d===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let S=0;S<l.length;S++)s(l[S],h[S],f[S]);else{g.multiDrawArraysInstancedWEBGL(i,l,0,h,0,f,0,d);let S=0;for(let E=0;E<d;E++)S+=h[E]*f[E];t.update(S,i,1)}}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function w1(n,e,t,i){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(O){return!(O!==Vt&&i.convert(O)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(O){const G=O===rn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==$t&&i.convert(O)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==qt&&!G)}function c(O){if(O==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),g=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),I=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),R=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=S>0,N=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:g,maxVertexTextures:S,maxTextureSize:E,maxCubemapSize:v,maxAttributes:p,maxVertexUniforms:I,maxVaryings:R,maxFragmentUniforms:w,vertexTextures:L,maxSamples:N}}function A1(n){const e=this;let t=null,i=0,r=!1,a=!1;const s=new Xi,o=new tt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const g=d.length!==0||f||i!==0||r;return r=f,i=d.length,g},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,g){const S=d.clippingPlanes,E=d.clipIntersection,v=d.clipShadows,p=n.get(d);if(!r||S===null||S.length===0||a&&!v)a?h(null):l();else{const I=a?0:i,R=I*4;let w=p.clippingState||null;c.value=w,w=h(S,f,R,g);for(let L=0;L!==R;++L)w[L]=t[L];p.clippingState=w,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=I}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,f,g,S){const E=d!==null?d.length:0;let v=null;if(E!==0){if(v=c.value,S!==!0||v===null){const p=g+E*4,I=f.matrixWorldInverse;o.getNormalMatrix(I),(v===null||v.length<p)&&(v=new Float32Array(p));for(let R=0,w=g;R!==E;++R,w+=4)s.copy(d[R]).applyMatrix4(I,o),s.normal.toArray(v,w),v[w+3]=s.constant}c.value=v,c.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,v}}function R1(n){let e=new WeakMap;function t(s,o){return o===Sc?s.mapping=Br:o===xc&&(s.mapping=Hr),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===Sc||o===xc)if(e.has(s)){const c=e.get(s).texture;return t(c,s.mapping)}else{const c=s.image;if(c&&c.height>0){const l=new Mm(c.height);return l.fromEquirectangularTexture(n,s),e.set(s,l),s.addEventListener("dispose",r),t(l.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}const Cr=4,ku=[.125,.215,.35,.446,.526,.582],Zi=20,Ho=new yd,Vu=new ft;let zo=null,Go=0,ko=0,Vo=!1;const Yi=(1+Math.sqrt(5))/2,xr=1/Yi,Wu=[new F(-Yi,xr,0),new F(Yi,xr,0),new F(-xr,0,Yi),new F(xr,0,Yi),new F(0,Yi,-xr),new F(0,Yi,xr),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],C1=new F;class Xu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,a={}){const{size:s=256,position:o=C1}=a;zo=this._renderer.getRenderTarget(),Go=this._renderer.getActiveCubeFace(),ko=this._renderer.getActiveMipmapLevel(),Vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$u(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zo,Go,ko),this._renderer.xr.enabled=Vo,e.scissorTest=!1,gs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Br||e.mapping===Hr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zo=this._renderer.getRenderTarget(),Go=this._renderer.getActiveCubeFace(),ko=this._renderer.getActiveMipmapLevel(),Vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:pt,minFilter:pt,generateMipmaps:!1,type:rn,format:Vt,colorSpace:tn,depthBuffer:!1},r=Yu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yu(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=b1(a)),this._blurMaterial=D1(a,e,t)}return r}_compileMaterial(e){const t=new Wn(this._lodPlanes[0],e);this._renderer.compile(t,Ho)}_sceneToCubeUV(e,t,i,r,a){const c=new vn(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,g=d.toneMapping;d.getClearColor(Vu),d.toneMapping=di,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));const E=new md({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1}),v=new Wn(new Ua,E);let p=!1;const I=e.background;I?I.isColor&&(E.color.copy(I),e.background=null,p=!0):(E.color.copy(Vu),p=!0);for(let R=0;R<6;R++){const w=R%3;w===0?(c.up.set(0,l[R],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x+h[R],a.y,a.z)):w===1?(c.up.set(0,0,l[R]),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y+h[R],a.z)):(c.up.set(0,l[R],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y,a.z+h[R]));const L=this._cubeSize;gs(r,w*L,R>2?L:0,L,L),d.setRenderTarget(r),p&&d.render(v,c),d.render(e,c)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=g,d.autoClear=f,e.background=I}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Br||e.mapping===Hr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=$u()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qu());const a=r?this._cubemapMaterial:this._equirectMaterial,s=new Wn(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const c=this._cubeSize;gs(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(s,Ho)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Wu[(r-a-1)%Wu.length];this._blur(e,a-1,a,s,o)}t.autoClear=i}_blur(e,t,i,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",a),this._halfBlur(s,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,s,o){const c=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Wn(this._lodPlanes[r],l),f=l.uniforms,g=this._sizeLods[i]-1,S=isFinite(a)?Math.PI/(2*g):2*Math.PI/(2*Zi-1),E=a/S,v=isFinite(a)?1+Math.floor(h*E):Zi;v>Zi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Zi}`);const p=[];let I=0;for(let O=0;O<Zi;++O){const G=O/E,y=Math.exp(-G*G/2);p.push(y),O===0?I+=y:O<v&&(I+=2*y)}for(let O=0;O<p.length;O++)p[O]=p[O]/I;f.envMap.value=e.texture,f.samples.value=v,f.weights.value=p,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:R}=this;f.dTheta.value=S,f.mipInt.value=R-i;const w=this._sizeLods[r],L=3*w*(r>R-Cr?r-R+Cr:0),N=4*(this._cubeSize-w);gs(t,L,N,3*w,2*w),c.setRenderTarget(t),c.render(d,Ho)}}function b1(n){const e=[],t=[],i=[];let r=n;const a=n-Cr+1+ku.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);t.push(o);let c=1/o;s>n-Cr?c=ku[s-n+Cr-1]:s===0&&(c=0),i.push(c);const l=1/(o-2),h=-l,d=1+l,f=[h,h,d,h,d,d,h,h,d,d,h,d],g=6,S=6,E=3,v=2,p=1,I=new Float32Array(E*S*g),R=new Float32Array(v*S*g),w=new Float32Array(p*S*g);for(let N=0;N<g;N++){const O=N%3*2/3-1,G=N>2?0:-1,y=[O,G,0,O+2/3,G,0,O+2/3,G+1,0,O,G,0,O+2/3,G+1,0,O,G+1,0];I.set(y,E*S*N),R.set(f,v*S*N);const M=[N,N,N,N,N,N];w.set(M,p*S*N)}const L=new Oi;L.setAttribute("position",new An(I,E)),L.setAttribute("uv",new An(R,v)),L.setAttribute("faceIndex",new An(w,p)),e.push(L),r>Cr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Yu(n,e,t){const i=new Xt(n,e,t);return i.texture.mapping=Zs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function gs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function D1(n,e,t){const i=new Float32Array(Zi),r=new F(0,1,0);return new dn({name:"SphericalGaussianBlur",defines:{n:Zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function qu(){return new dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hl(),fragmentShader:`

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
		`,blending:wn,depthTest:!1,depthWrite:!1})}function $u(){return new dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Hl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function I1(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===Sc||c===xc,h=c===Br||c===Hr;if(l||h){let d=e.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Xu(n)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const g=o.image;return l&&g&&g.height>0||h&&g&&r(g)?(t===null&&(t=new Xu(n)),d=l?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",a),d.texture):null}}}return o}function r(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function a(o){const c=o.target;c.removeEventListener("dispose",a);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function P1(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Da("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function L1(n,e,t,i){const r={},a=new WeakMap;function s(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const S in f.attributes)e.remove(f.attributes[S]);f.removeEventListener("dispose",s),delete r[f.id];const g=a.get(f);g&&(e.remove(g),a.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,t.memory.geometries++),f}function c(d){const f=d.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER)}function l(d){const f=[],g=d.index,S=d.attributes.position;let E=0;if(g!==null){const I=g.array;E=g.version;for(let R=0,w=I.length;R<w;R+=3){const L=I[R+0],N=I[R+1],O=I[R+2];f.push(L,N,N,O,O,L)}}else if(S!==void 0){const I=S.array;E=S.version;for(let R=0,w=I.length/3-1;R<w;R+=3){const L=R+0,N=R+1,O=R+2;f.push(L,N,N,O,O,L)}}else return;const v=new(dd(f)?vd:gd)(f,1);v.version=E;const p=a.get(d);p&&e.remove(p),a.set(d,v)}function h(d){const f=a.get(d);if(f){const g=d.index;g!==null&&f.version<g.version&&l(d)}else l(d);return a.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function N1(n,e,t){let i;function r(f){i=f}let a,s;function o(f){a=f.type,s=f.bytesPerElement}function c(f,g){n.drawElements(i,g,a,f*s),t.update(g,i,1)}function l(f,g,S){S!==0&&(n.drawElementsInstanced(i,g,a,f*s,S),t.update(g,i,S))}function h(f,g,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,a,f,0,S);let v=0;for(let p=0;p<S;p++)v+=g[p];t.update(v,i,1)}function d(f,g,S,E){if(S===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let p=0;p<f.length;p++)l(f[p]/s,g[p],E[p]);else{v.multiDrawElementsInstancedWEBGL(i,g,0,a,f,0,E,0,S);let p=0;for(let I=0;I<S;I++)p+=g[I]*E[I];t.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function U1(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=o*(a/3);break;case n.LINES:t.lines+=o*(a/2);break;case n.LINE_STRIP:t.lines+=o*(a-1);break;case n.LINE_LOOP:t.lines+=o*a;break;case n.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function O1(n,e,t){const i=new WeakMap,r=new ht;function a(s,o,c){const l=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let M=function(){G.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var g=M;f!==void 0&&f.texture.dispose();const S=o.morphAttributes.position!==void 0,E=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],I=o.morphAttributes.normal||[],R=o.morphAttributes.color||[];let w=0;S===!0&&(w=1),E===!0&&(w=2),v===!0&&(w=3);let L=o.attributes.position.count*w,N=1;L>e.maxTextureSize&&(N=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const O=new Float32Array(L*N*4*d),G=new Ol(O,L,N,d);G.type=qt,G.needsUpdate=!0;const y=w*4;for(let B=0;B<d;B++){const X=p[B],j=I[B],Q=R[B],ee=L*N*4*B;for(let ie=0;ie<X.count;ie++){const ae=ie*y;S===!0&&(r.fromBufferAttribute(X,ie),O[ee+ae+0]=r.x,O[ee+ae+1]=r.y,O[ee+ae+2]=r.z,O[ee+ae+3]=0),E===!0&&(r.fromBufferAttribute(j,ie),O[ee+ae+4]=r.x,O[ee+ae+5]=r.y,O[ee+ae+6]=r.z,O[ee+ae+7]=0),v===!0&&(r.fromBufferAttribute(Q,ie),O[ee+ae+8]=r.x,O[ee+ae+9]=r.y,O[ee+ae+10]=r.z,O[ee+ae+11]=Q.itemSize===4?r.w:1)}}f={count:d,texture:G,size:new Pe(L,N)},i.set(o,f),o.addEventListener("dispose",M)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let S=0;for(let v=0;v<l.length;v++)S+=l[v];const E=o.morphTargetsRelative?1:1-S;c.getUniforms().setValue(n,"morphTargetBaseInfluence",E),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:a}}function F1(n,e,t,i){let r=new WeakMap;function a(c){const l=i.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return d}function s(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:a,dispose:s}}const wd=new Pt,Zu=new Bl(1,1),Ad=new Ol,Rd=new pi,Cd=new Sd,ju=[],Ku=[],Ju=new Float32Array(16),Qu=new Float32Array(9),eh=new Float32Array(4);function Kr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let a=ju[r];if(a===void 0&&(a=new Float32Array(r),ju[r]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,n[s].toArray(a,o)}return a}function Ft(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function eo(n,e){let t=Ku[e];t===void 0&&(t=new Int32Array(e),Ku[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function B1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function H1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2fv(this.addr,e),Bt(t,e)}}function z1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;n.uniform3fv(this.addr,e),Bt(t,e)}}function G1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4fv(this.addr,e),Bt(t,e)}}function k1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,i))return;eh.set(i),n.uniformMatrix2fv(this.addr,!1,eh),Bt(t,i)}}function V1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,i))return;Qu.set(i),n.uniformMatrix3fv(this.addr,!1,Qu),Bt(t,i)}}function W1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,i))return;Ju.set(i),n.uniformMatrix4fv(this.addr,!1,Ju),Bt(t,i)}}function X1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Y1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2iv(this.addr,e),Bt(t,e)}}function q1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3iv(this.addr,e),Bt(t,e)}}function $1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4iv(this.addr,e),Bt(t,e)}}function Z1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function j1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2uiv(this.addr,e),Bt(t,e)}}function K1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3uiv(this.addr,e),Bt(t,e)}}function J1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4uiv(this.addr,e),Bt(t,e)}}function Q1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let a;this.type===n.SAMPLER_2D_SHADOW?(Zu.compareFunction=hd,a=Zu):a=wd,t.setTexture2D(e||a,r)}function ev(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Rd,r)}function tv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Cd,r)}function nv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Ad,r)}function iv(n){switch(n){case 5126:return B1;case 35664:return H1;case 35665:return z1;case 35666:return G1;case 35674:return k1;case 35675:return V1;case 35676:return W1;case 5124:case 35670:return X1;case 35667:case 35671:return Y1;case 35668:case 35672:return q1;case 35669:case 35673:return $1;case 5125:return Z1;case 36294:return j1;case 36295:return K1;case 36296:return J1;case 35678:case 36198:case 36298:case 36306:case 35682:return Q1;case 35679:case 36299:case 36307:return ev;case 35680:case 36300:case 36308:case 36293:return tv;case 36289:case 36303:case 36311:case 36292:return nv}}function rv(n,e){n.uniform1fv(this.addr,e)}function av(n,e){const t=Kr(e,this.size,2);n.uniform2fv(this.addr,t)}function sv(n,e){const t=Kr(e,this.size,3);n.uniform3fv(this.addr,t)}function ov(n,e){const t=Kr(e,this.size,4);n.uniform4fv(this.addr,t)}function cv(n,e){const t=Kr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function lv(n,e){const t=Kr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function uv(n,e){const t=Kr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function hv(n,e){n.uniform1iv(this.addr,e)}function dv(n,e){n.uniform2iv(this.addr,e)}function fv(n,e){n.uniform3iv(this.addr,e)}function pv(n,e){n.uniform4iv(this.addr,e)}function mv(n,e){n.uniform1uiv(this.addr,e)}function gv(n,e){n.uniform2uiv(this.addr,e)}function vv(n,e){n.uniform3uiv(this.addr,e)}function _v(n,e){n.uniform4uiv(this.addr,e)}function Sv(n,e,t){const i=this.cache,r=e.length,a=eo(t,r);Ft(i,a)||(n.uniform1iv(this.addr,a),Bt(i,a));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||wd,a[s])}function xv(n,e,t){const i=this.cache,r=e.length,a=eo(t,r);Ft(i,a)||(n.uniform1iv(this.addr,a),Bt(i,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Rd,a[s])}function Ev(n,e,t){const i=this.cache,r=e.length,a=eo(t,r);Ft(i,a)||(n.uniform1iv(this.addr,a),Bt(i,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Cd,a[s])}function Tv(n,e,t){const i=this.cache,r=e.length,a=eo(t,r);Ft(i,a)||(n.uniform1iv(this.addr,a),Bt(i,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||Ad,a[s])}function yv(n){switch(n){case 5126:return rv;case 35664:return av;case 35665:return sv;case 35666:return ov;case 35674:return cv;case 35675:return lv;case 35676:return uv;case 5124:case 35670:return hv;case 35667:case 35671:return dv;case 35668:case 35672:return fv;case 35669:case 35673:return pv;case 5125:return mv;case 36294:return gv;case 36295:return vv;case 36296:return _v;case 35678:case 36198:case 36298:case 36306:case 35682:return Sv;case 35679:case 36299:case 36307:return xv;case 35680:case 36300:case 36308:case 36293:return Ev;case 36289:case 36303:case 36311:case 36292:return Tv}}class Mv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=iv(t.type)}}class wv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yv(t.type)}}class Av{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,t[o.id],i)}}}const Wo=/(\w+)(\])?(\[|\.)?/g;function th(n,e){n.seq.push(e),n.map[e.id]=e}function Rv(n,e,t){const i=n.name,r=i.length;for(Wo.lastIndex=0;;){const a=Wo.exec(i),s=Wo.lastIndex;let o=a[1];const c=a[2]==="]",l=a[3];if(c&&(o=o|0),l===void 0||l==="["&&s+2===r){th(t,l===void 0?new Mv(o,n,e):new wv(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new Av(o),th(t,d)),t=d}}}class Ps{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(t,r),s=e.getUniformLocation(t,a.name);Rv(a,s,this)}}setValue(e,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&i.push(s)}return i}}function nh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Cv=37297;let bv=0;function Dv(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}const ih=new tt;function Iv(n){gt._getMatrix(ih,gt.workingColorSpace,n);const e=`mat3( ${ih.elements.map(t=>t.toFixed(4))} )`;switch(gt.getTransfer(n)){case Os:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function rh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),a=(n.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+Dv(n.getShaderSource(e),o)}else return a}function Pv(n,e){const t=Iv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Lv(n,e){let t;switch(e){case vp:t="Linear";break;case _p:t="Reinhard";break;case Sp:t="Cineon";break;case xp:t="ACESFilmic";break;case Tp:t="AgX";break;case yp:t="Neutral";break;case Ep:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const vs=new F;function Nv(){gt.getLuminanceCoefficients(vs);const n=vs.x.toFixed(4),e=vs.y.toFixed(4),t=vs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Uv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pa).join(`
`)}function Ov(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Fv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=n.getActiveAttrib(e,r),s=a.name;let o=1;a.type===n.FLOAT_MAT2&&(o=2),a.type===n.FLOAT_MAT3&&(o=3),a.type===n.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:n.getAttribLocation(e,s),locationSize:o}}return t}function pa(n){return n!==""}function ah(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Bv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kc(n){return n.replace(Bv,zv)}const Hv=new Map;function zv(n,e){let t=rt[e];if(t===void 0){const i=Hv.get(e);if(i!==void 0)t=rt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Kc(t)}const Gv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function oh(n){return n.replace(Gv,kv)}function kv(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function ch(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function Vv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===nd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===jf?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function Wv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Br:case Hr:e="ENVMAP_TYPE_CUBE";break;case Zs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Xv(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Hr:e="ENVMAP_MODE_REFRACTION";break}return e}function Yv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case id:e="ENVMAP_BLENDING_MULTIPLY";break;case mp:e="ENVMAP_BLENDING_MIX";break;case gp:e="ENVMAP_BLENDING_ADD";break}return e}function qv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function $v(n,e,t,i){const r=n.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const c=Vv(t),l=Wv(t),h=Xv(t),d=Yv(t),f=qv(t),g=Uv(t),S=Ov(a),E=r.createProgram();let v,p,I=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(pa).join(`
`),v.length>0&&(v+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(pa).join(`
`),p.length>0&&(p+=`
`)):(v=[ch(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pa).join(`
`),p=[ch(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==di?"#define TONE_MAPPING":"",t.toneMapping!==di?rt.tonemapping_pars_fragment:"",t.toneMapping!==di?Lv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,Pv("linearToOutputTexel",t.outputColorSpace),Nv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(pa).join(`
`)),s=Kc(s),s=ah(s,t),s=sh(s,t),o=Kc(o),o=ah(o,t),o=sh(o,t),s=oh(s),o=oh(o),t.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,v=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",t.glslVersion===Ui?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ui?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const R=I+v+s,w=I+p+o,L=nh(r,r.VERTEX_SHADER,R),N=nh(r,r.FRAGMENT_SHADER,w);r.attachShader(E,L),r.attachShader(E,N),t.index0AttributeName!==void 0?r.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function O(B){if(n.debug.checkShaderErrors){const X=r.getProgramInfoLog(E)||"",j=r.getShaderInfoLog(L)||"",Q=r.getShaderInfoLog(N)||"",ee=X.trim(),ie=j.trim(),ae=Q.trim();let J=!0,ge=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,E,L,N);else{const ue=rh(r,L,"vertex"),De=rh(r,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+ee+`
`+ue+`
`+De)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(ie===""||ae==="")&&(ge=!1);ge&&(B.diagnostics={runnable:J,programLog:ee,vertexShader:{log:ie,prefix:v},fragmentShader:{log:ae,prefix:p}})}r.deleteShader(L),r.deleteShader(N),G=new Ps(r,E),y=Fv(r,E)}let G;this.getUniforms=function(){return G===void 0&&O(this),G};let y;this.getAttributes=function(){return y===void 0&&O(this),y};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(E,Cv)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bv++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=L,this.fragmentShader=N,this}let Zv=0;class jv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Kv(e),t.set(e,i)),i}}class Kv{constructor(e){this.id=Zv++,this.code=e,this.usedTimes=0}}function Jv(n,e,t,i,r,a,s){const o=new fd,c=new jv,l=new Set,h=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let g=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(y){return l.add(y),y===0?"uv":`uv${y}`}function v(y,M,B,X,j){const Q=X.fog,ee=j.geometry,ie=y.isMeshStandardMaterial?X.environment:null,ae=(y.isMeshStandardMaterial?t:e).get(y.envMap||ie),J=ae&&ae.mapping===Zs?ae.image.height:null,ge=S[y.type];y.precision!==null&&(g=r.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const ue=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,De=ue!==void 0?ue.length:0;let Ge=0;ee.morphAttributes.position!==void 0&&(Ge=1),ee.morphAttributes.normal!==void 0&&(Ge=2),ee.morphAttributes.color!==void 0&&(Ge=3);let nt,ut,Je,Z;if(ge){const mt=kn[ge];nt=mt.vertexShader,ut=mt.fragmentShader}else nt=y.vertexShader,ut=y.fragmentShader,c.update(y),Je=c.getVertexShaderID(y),Z=c.getFragmentShaderID(y);const se=n.getRenderTarget(),Me=n.state.buffers.depth.getReversed(),Y=j.isInstancedMesh===!0,we=j.isBatchedMesh===!0,Qe=!!y.map,ke=!!y.matcap,P=!!ae,qe=!!y.aoMap,Ie=!!y.lightMap,Ce=!!y.bumpMap,Ae=!!y.normalMap,ot=!!y.displacementMap,be=!!y.emissiveMap,Xe=!!y.metalnessMap,Lt=!!y.roughnessMap,Rt=y.anisotropy>0,D=y.clearcoat>0,x=y.dispersion>0,W=y.iridescence>0,re=y.sheen>0,le=y.transmission>0,te=Rt&&!!y.anisotropyMap,Fe=D&&!!y.clearcoatMap,ve=D&&!!y.clearcoatNormalMap,Ue=D&&!!y.clearcoatRoughnessMap,Be=W&&!!y.iridescenceMap,pe=W&&!!y.iridescenceThicknessMap,xe=re&&!!y.sheenColorMap,Ne=re&&!!y.sheenRoughnessMap,Oe=!!y.specularMap,Ee=!!y.specularColorMap,ze=!!y.specularIntensityMap,H=le&&!!y.transmissionMap,me=le&&!!y.thicknessMap,$=!!y.gradientMap,Re=!!y.alphaMap,de=y.alphaTest>0,oe=!!y.alphaHash,Le=!!y.extensions;let Ke=di;y.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Ke=n.toneMapping);const Et={shaderID:ge,shaderType:y.type,shaderName:y.name,vertexShader:nt,fragmentShader:ut,defines:y.defines,customVertexShaderID:Je,customFragmentShaderID:Z,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:we,batchingColor:we&&j._colorsTexture!==null,instancing:Y,instancingColor:Y&&j.instanceColor!==null,instancingMorph:Y&&j.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:se===null?n.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:tn,alphaToCoverage:!!y.alphaToCoverage,map:Qe,matcap:ke,envMap:P,envMapMode:P&&ae.mapping,envMapCubeUVHeight:J,aoMap:qe,lightMap:Ie,bumpMap:Ce,normalMap:Ae,displacementMap:f&&ot,emissiveMap:be,normalMapObjectSpace:Ae&&y.normalMapType===Ap,normalMapTangentSpace:Ae&&y.normalMapType===ud,metalnessMap:Xe,roughnessMap:Lt,anisotropy:Rt,anisotropyMap:te,clearcoat:D,clearcoatMap:Fe,clearcoatNormalMap:ve,clearcoatRoughnessMap:Ue,dispersion:x,iridescence:W,iridescenceMap:Be,iridescenceThicknessMap:pe,sheen:re,sheenColorMap:xe,sheenRoughnessMap:Ne,specularMap:Oe,specularColorMap:Ee,specularIntensityMap:ze,transmission:le,transmissionMap:H,thicknessMap:me,gradientMap:$,opaque:y.transparent===!1&&y.blending===Nr&&y.alphaToCoverage===!1,alphaMap:Re,alphaTest:de,alphaHash:oe,combine:y.combine,mapUv:Qe&&E(y.map.channel),aoMapUv:qe&&E(y.aoMap.channel),lightMapUv:Ie&&E(y.lightMap.channel),bumpMapUv:Ce&&E(y.bumpMap.channel),normalMapUv:Ae&&E(y.normalMap.channel),displacementMapUv:ot&&E(y.displacementMap.channel),emissiveMapUv:be&&E(y.emissiveMap.channel),metalnessMapUv:Xe&&E(y.metalnessMap.channel),roughnessMapUv:Lt&&E(y.roughnessMap.channel),anisotropyMapUv:te&&E(y.anisotropyMap.channel),clearcoatMapUv:Fe&&E(y.clearcoatMap.channel),clearcoatNormalMapUv:ve&&E(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&E(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&E(y.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&E(y.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&E(y.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&E(y.sheenRoughnessMap.channel),specularMapUv:Oe&&E(y.specularMap.channel),specularColorMapUv:Ee&&E(y.specularColorMap.channel),specularIntensityMapUv:ze&&E(y.specularIntensityMap.channel),transmissionMapUv:H&&E(y.transmissionMap.channel),thicknessMapUv:me&&E(y.thicknessMap.channel),alphaMapUv:Re&&E(y.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(Ae||Rt),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!ee.attributes.uv&&(Qe||Re),fog:!!Q,useFog:y.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Me,skinning:j.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:Ge,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ke,decodeVideoTexture:Qe&&y.map.isVideoTexture===!0&&gt.getTransfer(y.map.colorSpace)===Tt,decodeVideoTextureEmissive:be&&y.emissiveMap.isVideoTexture===!0&&gt.getTransfer(y.emissiveMap.colorSpace)===Tt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===_n,flipSided:y.side===Wt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Le&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&y.extensions.multiDraw===!0||we)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Et.vertexUv1s=l.has(1),Et.vertexUv2s=l.has(2),Et.vertexUv3s=l.has(3),l.clear(),Et}function p(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const B in y.defines)M.push(B),M.push(y.defines[B]);return y.isRawShaderMaterial===!1&&(I(M,y),R(M,y),M.push(n.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function I(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function R(y,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),y.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),y.push(o.mask)}function w(y){const M=S[y.type];let B;if(M){const X=kn[M];B=xm.clone(X.uniforms)}else B=y.uniforms;return B}function L(y,M){let B;for(let X=0,j=h.length;X<j;X++){const Q=h[X];if(Q.cacheKey===M){B=Q,++B.usedTimes;break}}return B===void 0&&(B=new $v(n,M,y,a),h.push(B)),B}function N(y){if(--y.usedTimes===0){const M=h.indexOf(y);h[M]=h[h.length-1],h.pop(),y.destroy()}}function O(y){c.remove(y)}function G(){c.dispose()}return{getParameters:v,getProgramCacheKey:p,getUniforms:w,acquireProgram:L,releaseProgram:N,releaseShaderCache:O,programs:h,dispose:G}}function Qv(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function i(s){n.delete(s)}function r(s,o,c){n.get(s)[o]=c}function a(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:a}}function e_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function lh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function uh(){const n=[];let e=0;const t=[],i=[],r=[];function a(){e=0,t.length=0,i.length=0,r.length=0}function s(d,f,g,S,E,v){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:g,groupOrder:S,renderOrder:d.renderOrder,z:E,group:v},n[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=g,p.groupOrder=S,p.renderOrder=d.renderOrder,p.z=E,p.group=v),e++,p}function o(d,f,g,S,E,v){const p=s(d,f,g,S,E,v);g.transmission>0?i.push(p):g.transparent===!0?r.push(p):t.push(p)}function c(d,f,g,S,E,v){const p=s(d,f,g,S,E,v);g.transmission>0?i.unshift(p):g.transparent===!0?r.unshift(p):t.unshift(p)}function l(d,f){t.length>1&&t.sort(d||e_),i.length>1&&i.sort(f||lh),r.length>1&&r.sort(f||lh)}function h(){for(let d=e,f=n.length;d<f;d++){const g=n[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:o,unshift:c,finish:h,sort:l}}function t_(){let n=new WeakMap;function e(i,r){const a=n.get(i);let s;return a===void 0?(s=new uh,n.set(i,[s])):r>=a.length?(s=new uh,a.push(s)):s=a[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function n_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new ft};break;case"SpotLight":t={position:new F,direction:new F,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new ft,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":t={color:new ft,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function i_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let r_=0;function a_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function s_(n){const e=new n_,t=i_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new F);const r=new F,a=new He,s=new He;function o(l){let h=0,d=0,f=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let g=0,S=0,E=0,v=0,p=0,I=0,R=0,w=0,L=0,N=0,O=0;l.sort(a_);for(let y=0,M=l.length;y<M;y++){const B=l[y],X=B.color,j=B.intensity,Q=B.distance,ee=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)h+=X.r*j,d+=X.g*j,f+=X.b*j;else if(B.isLightProbe){for(let ie=0;ie<9;ie++)i.probe[ie].addScaledVector(B.sh.coefficients[ie],j);O++}else if(B.isDirectionalLight){const ie=e.get(B);if(ie.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const ae=B.shadow,J=t.get(B);J.shadowIntensity=ae.intensity,J.shadowBias=ae.bias,J.shadowNormalBias=ae.normalBias,J.shadowRadius=ae.radius,J.shadowMapSize=ae.mapSize,i.directionalShadow[g]=J,i.directionalShadowMap[g]=ee,i.directionalShadowMatrix[g]=B.shadow.matrix,I++}i.directional[g]=ie,g++}else if(B.isSpotLight){const ie=e.get(B);ie.position.setFromMatrixPosition(B.matrixWorld),ie.color.copy(X).multiplyScalar(j),ie.distance=Q,ie.coneCos=Math.cos(B.angle),ie.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),ie.decay=B.decay,i.spot[E]=ie;const ae=B.shadow;if(B.map&&(i.spotLightMap[L]=B.map,L++,ae.updateMatrices(B),B.castShadow&&N++),i.spotLightMatrix[E]=ae.matrix,B.castShadow){const J=t.get(B);J.shadowIntensity=ae.intensity,J.shadowBias=ae.bias,J.shadowNormalBias=ae.normalBias,J.shadowRadius=ae.radius,J.shadowMapSize=ae.mapSize,i.spotShadow[E]=J,i.spotShadowMap[E]=ee,w++}E++}else if(B.isRectAreaLight){const ie=e.get(B);ie.color.copy(X).multiplyScalar(j),ie.halfWidth.set(B.width*.5,0,0),ie.halfHeight.set(0,B.height*.5,0),i.rectArea[v]=ie,v++}else if(B.isPointLight){const ie=e.get(B);if(ie.color.copy(B.color).multiplyScalar(B.intensity),ie.distance=B.distance,ie.decay=B.decay,B.castShadow){const ae=B.shadow,J=t.get(B);J.shadowIntensity=ae.intensity,J.shadowBias=ae.bias,J.shadowNormalBias=ae.normalBias,J.shadowRadius=ae.radius,J.shadowMapSize=ae.mapSize,J.shadowCameraNear=ae.camera.near,J.shadowCameraFar=ae.camera.far,i.pointShadow[S]=J,i.pointShadowMap[S]=ee,i.pointShadowMatrix[S]=B.shadow.matrix,R++}i.point[S]=ie,S++}else if(B.isHemisphereLight){const ie=e.get(B);ie.skyColor.copy(B.color).multiplyScalar(j),ie.groundColor.copy(B.groundColor).multiplyScalar(j),i.hemi[p]=ie,p++}}v>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;const G=i.hash;(G.directionalLength!==g||G.pointLength!==S||G.spotLength!==E||G.rectAreaLength!==v||G.hemiLength!==p||G.numDirectionalShadows!==I||G.numPointShadows!==R||G.numSpotShadows!==w||G.numSpotMaps!==L||G.numLightProbes!==O)&&(i.directional.length=g,i.spot.length=E,i.rectArea.length=v,i.point.length=S,i.hemi.length=p,i.directionalShadow.length=I,i.directionalShadowMap.length=I,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=I,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=w+L-N,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=O,G.directionalLength=g,G.pointLength=S,G.spotLength=E,G.rectAreaLength=v,G.hemiLength=p,G.numDirectionalShadows=I,G.numPointShadows=R,G.numSpotShadows=w,G.numSpotMaps=L,G.numLightProbes=O,i.version=r_++)}function c(l,h){let d=0,f=0,g=0,S=0,E=0;const v=h.matrixWorldInverse;for(let p=0,I=l.length;p<I;p++){const R=l[p];if(R.isDirectionalLight){const w=i.directional[d];w.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(v),d++}else if(R.isSpotLight){const w=i.spot[g];w.position.setFromMatrixPosition(R.matrixWorld),w.position.applyMatrix4(v),w.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(v),g++}else if(R.isRectAreaLight){const w=i.rectArea[S];w.position.setFromMatrixPosition(R.matrixWorld),w.position.applyMatrix4(v),s.identity(),a.copy(R.matrixWorld),a.premultiply(v),s.extractRotation(a),w.halfWidth.set(R.width*.5,0,0),w.halfHeight.set(0,R.height*.5,0),w.halfWidth.applyMatrix4(s),w.halfHeight.applyMatrix4(s),S++}else if(R.isPointLight){const w=i.point[f];w.position.setFromMatrixPosition(R.matrixWorld),w.position.applyMatrix4(v),f++}else if(R.isHemisphereLight){const w=i.hemi[E];w.direction.setFromMatrixPosition(R.matrixWorld),w.direction.transformDirection(v),E++}}}return{setup:o,setupView:c,state:i}}function hh(n){const e=new s_(n),t=[],i=[];function r(h){l.camera=h,t.length=0,i.length=0}function a(h){t.push(h)}function s(h){i.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:a,pushShadow:s}}function o_(n){let e=new WeakMap;function t(r,a=0){const s=e.get(r);let o;return s===void 0?(o=new hh(n),e.set(r,[o])):a>=s.length?(o=new hh(n),s.push(o)):o=s[a],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const c_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,l_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function u_(n,e,t){let i=new xd;const r=new Pe,a=new Pe,s=new ht,o=new Im({depthPacking:wp}),c=new Pm,l={},h=t.maxTextureSize,d={[vi]:Wt,[Wt]:vi,[_n]:_n},f=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:c_,fragmentShader:l_}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const S=new Oi;S.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Wn(S,f),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nd;let p=this.type;this.render=function(N,O,G){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||N.length===0)return;const y=n.getRenderTarget(),M=n.getActiveCubeFace(),B=n.getActiveMipmapLevel(),X=n.state;X.setBlending(wn),X.buffers.depth.getReversed()===!0?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const j=p!==ii&&this.type===ii,Q=p===ii&&this.type!==ii;for(let ee=0,ie=N.length;ee<ie;ee++){const ae=N[ee],J=ae.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;r.copy(J.mapSize);const ge=J.getFrameExtents();if(r.multiply(ge),a.copy(J.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(a.x=Math.floor(h/ge.x),r.x=a.x*ge.x,J.mapSize.x=a.x),r.y>h&&(a.y=Math.floor(h/ge.y),r.y=a.y*ge.y,J.mapSize.y=a.y)),J.map===null||j===!0||Q===!0){const De=this.type!==ii?{minFilter:Ot,magFilter:Ot}:{};J.map!==null&&J.map.dispose(),J.map=new Xt(r.x,r.y,De),J.map.texture.name=ae.name+".shadowMap",J.camera.updateProjectionMatrix()}n.setRenderTarget(J.map),n.clear();const ue=J.getViewportCount();for(let De=0;De<ue;De++){const Ge=J.getViewport(De);s.set(a.x*Ge.x,a.y*Ge.y,a.x*Ge.z,a.y*Ge.w),X.viewport(s),J.updateMatrices(ae,De),i=J.getFrustum(),w(O,G,J.camera,ae,this.type)}J.isPointLightShadow!==!0&&this.type===ii&&I(J,G),J.needsUpdate=!1}p=this.type,v.needsUpdate=!1,n.setRenderTarget(y,M,B)};function I(N,O){const G=e.update(E);f.defines.VSM_SAMPLES!==N.blurSamples&&(f.defines.VSM_SAMPLES=N.blurSamples,g.defines.VSM_SAMPLES=N.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Xt(r.x,r.y)),f.uniforms.shadow_pass.value=N.map.texture,f.uniforms.resolution.value=N.mapSize,f.uniforms.radius.value=N.radius,n.setRenderTarget(N.mapPass),n.clear(),n.renderBufferDirect(O,null,G,f,E,null),g.uniforms.shadow_pass.value=N.mapPass.texture,g.uniforms.resolution.value=N.mapSize,g.uniforms.radius.value=N.radius,n.setRenderTarget(N.map),n.clear(),n.renderBufferDirect(O,null,G,g,E,null)}function R(N,O,G,y){let M=null;const B=G.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(B!==void 0)M=B;else if(M=G.isPointLight===!0?c:o,n.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const X=M.uuid,j=O.uuid;let Q=l[X];Q===void 0&&(Q={},l[X]=Q);let ee=Q[j];ee===void 0&&(ee=M.clone(),Q[j]=ee,O.addEventListener("dispose",L)),M=ee}if(M.visible=O.visible,M.wireframe=O.wireframe,y===ii?M.side=O.shadowSide!==null?O.shadowSide:O.side:M.side=O.shadowSide!==null?O.shadowSide:d[O.side],M.alphaMap=O.alphaMap,M.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,M.map=O.map,M.clipShadows=O.clipShadows,M.clippingPlanes=O.clippingPlanes,M.clipIntersection=O.clipIntersection,M.displacementMap=O.displacementMap,M.displacementScale=O.displacementScale,M.displacementBias=O.displacementBias,M.wireframeLinewidth=O.wireframeLinewidth,M.linewidth=O.linewidth,G.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const X=n.properties.get(M);X.light=G}return M}function w(N,O,G,y,M){if(N.visible===!1)return;if(N.layers.test(O.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&M===ii)&&(!N.frustumCulled||i.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,N.matrixWorld);const j=e.update(N),Q=N.material;if(Array.isArray(Q)){const ee=j.groups;for(let ie=0,ae=ee.length;ie<ae;ie++){const J=ee[ie],ge=Q[J.materialIndex];if(ge&&ge.visible){const ue=R(N,ge,y,M);N.onBeforeShadow(n,N,O,G,j,ue,J),n.renderBufferDirect(G,null,j,ue,N,J),N.onAfterShadow(n,N,O,G,j,ue,J)}}}else if(Q.visible){const ee=R(N,Q,y,M);N.onBeforeShadow(n,N,O,G,j,ee,null),n.renderBufferDirect(G,null,j,ee,N,null),N.onAfterShadow(n,N,O,G,j,ee,null)}}const X=N.children;for(let j=0,Q=X.length;j<Q;j++)w(X[j],O,G,y,M)}function L(N){N.target.removeEventListener("dispose",L);for(const G in l){const y=l[G],M=N.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const h_={[fc]:Us,[pc]:vc,[mc]:_c,[Fr]:gc,[Us]:fc,[vc]:pc,[_c]:mc,[gc]:Fr};function d_(n,e){function t(){let H=!1;const me=new ht;let $=null;const Re=new ht(0,0,0,0);return{setMask:function(de){$!==de&&!H&&(n.colorMask(de,de,de,de),$=de)},setLocked:function(de){H=de},setClear:function(de,oe,Le,Ke,Et){Et===!0&&(de*=Ke,oe*=Ke,Le*=Ke),me.set(de,oe,Le,Ke),Re.equals(me)===!1&&(n.clearColor(de,oe,Le,Ke),Re.copy(me))},reset:function(){H=!1,$=null,Re.set(-1,0,0,0)}}}function i(){let H=!1,me=!1,$=null,Re=null,de=null;return{setReversed:function(oe){if(me!==oe){const Le=e.get("EXT_clip_control");oe?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),me=oe;const Ke=de;de=null,this.setClear(Ke)}},getReversed:function(){return me},setTest:function(oe){oe?se(n.DEPTH_TEST):Me(n.DEPTH_TEST)},setMask:function(oe){$!==oe&&!H&&(n.depthMask(oe),$=oe)},setFunc:function(oe){if(me&&(oe=h_[oe]),Re!==oe){switch(oe){case fc:n.depthFunc(n.NEVER);break;case Us:n.depthFunc(n.ALWAYS);break;case pc:n.depthFunc(n.LESS);break;case Fr:n.depthFunc(n.LEQUAL);break;case mc:n.depthFunc(n.EQUAL);break;case gc:n.depthFunc(n.GEQUAL);break;case vc:n.depthFunc(n.GREATER);break;case _c:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Re=oe}},setLocked:function(oe){H=oe},setClear:function(oe){de!==oe&&(me&&(oe=1-oe),n.clearDepth(oe),de=oe)},reset:function(){H=!1,$=null,Re=null,de=null,me=!1}}}function r(){let H=!1,me=null,$=null,Re=null,de=null,oe=null,Le=null,Ke=null,Et=null;return{setTest:function(mt){H||(mt?se(n.STENCIL_TEST):Me(n.STENCIL_TEST))},setMask:function(mt){me!==mt&&!H&&(n.stencilMask(mt),me=mt)},setFunc:function(mt,Rn,xn){($!==mt||Re!==Rn||de!==xn)&&(n.stencilFunc(mt,Rn,xn),$=mt,Re=Rn,de=xn)},setOp:function(mt,Rn,xn){(oe!==mt||Le!==Rn||Ke!==xn)&&(n.stencilOp(mt,Rn,xn),oe=mt,Le=Rn,Ke=xn)},setLocked:function(mt){H=mt},setClear:function(mt){Et!==mt&&(n.clearStencil(mt),Et=mt)},reset:function(){H=!1,me=null,$=null,Re=null,de=null,oe=null,Le=null,Ke=null,Et=null}}}const a=new t,s=new i,o=new r,c=new WeakMap,l=new WeakMap;let h={},d={},f=new WeakMap,g=[],S=null,E=!1,v=null,p=null,I=null,R=null,w=null,L=null,N=null,O=new ft(0,0,0),G=0,y=!1,M=null,B=null,X=null,j=null,Q=null;const ee=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,ae=0;const J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(J)[1]),ie=ae>=1):J.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),ie=ae>=2);let ge=null,ue={};const De=n.getParameter(n.SCISSOR_BOX),Ge=n.getParameter(n.VIEWPORT),nt=new ht().fromArray(De),ut=new ht().fromArray(Ge);function Je(H,me,$,Re){const de=new Uint8Array(4),oe=n.createTexture();n.bindTexture(H,oe),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Le=0;Le<$;Le++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(me,0,n.RGBA,1,1,Re,0,n.RGBA,n.UNSIGNED_BYTE,de):n.texImage2D(me+Le,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,de);return oe}const Z={};Z[n.TEXTURE_2D]=Je(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=Je(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[n.TEXTURE_2D_ARRAY]=Je(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=Je(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),se(n.DEPTH_TEST),s.setFunc(Fr),Ce(!1),Ae(gu),se(n.CULL_FACE),qe(wn);function se(H){h[H]!==!0&&(n.enable(H),h[H]=!0)}function Me(H){h[H]!==!1&&(n.disable(H),h[H]=!1)}function Y(H,me){return d[H]!==me?(n.bindFramebuffer(H,me),d[H]=me,H===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=me),H===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=me),!0):!1}function we(H,me){let $=g,Re=!1;if(H){$=f.get(me),$===void 0&&($=[],f.set(me,$));const de=H.textures;if($.length!==de.length||$[0]!==n.COLOR_ATTACHMENT0){for(let oe=0,Le=de.length;oe<Le;oe++)$[oe]=n.COLOR_ATTACHMENT0+oe;$.length=de.length,Re=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,Re=!0);Re&&n.drawBuffers($)}function Qe(H){return S!==H?(n.useProgram(H),S=H,!0):!1}const ke={[qi]:n.FUNC_ADD,[Jf]:n.FUNC_SUBTRACT,[Qf]:n.FUNC_REVERSE_SUBTRACT};ke[ep]=n.MIN,ke[tp]=n.MAX;const P={[np]:n.ZERO,[ip]:n.ONE,[rp]:n.SRC_COLOR,[hc]:n.SRC_ALPHA,[up]:n.SRC_ALPHA_SATURATE,[cp]:n.DST_COLOR,[sp]:n.DST_ALPHA,[ap]:n.ONE_MINUS_SRC_COLOR,[dc]:n.ONE_MINUS_SRC_ALPHA,[lp]:n.ONE_MINUS_DST_COLOR,[op]:n.ONE_MINUS_DST_ALPHA,[hp]:n.CONSTANT_COLOR,[dp]:n.ONE_MINUS_CONSTANT_COLOR,[fp]:n.CONSTANT_ALPHA,[pp]:n.ONE_MINUS_CONSTANT_ALPHA};function qe(H,me,$,Re,de,oe,Le,Ke,Et,mt){if(H===wn){E===!0&&(Me(n.BLEND),E=!1);return}if(E===!1&&(se(n.BLEND),E=!0),H!==Kf){if(H!==v||mt!==y){if((p!==qi||w!==qi)&&(n.blendEquation(n.FUNC_ADD),p=qi,w=qi),mt)switch(H){case Nr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vu:n.blendFunc(n.ONE,n.ONE);break;case _u:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Su:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Nr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case _u:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Su:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}I=null,R=null,L=null,N=null,O.set(0,0,0),G=0,v=H,y=mt}return}de=de||me,oe=oe||$,Le=Le||Re,(me!==p||de!==w)&&(n.blendEquationSeparate(ke[me],ke[de]),p=me,w=de),($!==I||Re!==R||oe!==L||Le!==N)&&(n.blendFuncSeparate(P[$],P[Re],P[oe],P[Le]),I=$,R=Re,L=oe,N=Le),(Ke.equals(O)===!1||Et!==G)&&(n.blendColor(Ke.r,Ke.g,Ke.b,Et),O.copy(Ke),G=Et),v=H,y=!1}function Ie(H,me){H.side===_n?Me(n.CULL_FACE):se(n.CULL_FACE);let $=H.side===Wt;me&&($=!$),Ce($),H.blending===Nr&&H.transparent===!1?qe(wn):qe(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),s.setFunc(H.depthFunc),s.setTest(H.depthTest),s.setMask(H.depthWrite),a.setMask(H.colorWrite);const Re=H.stencilWrite;o.setTest(Re),Re&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),be(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?se(n.SAMPLE_ALPHA_TO_COVERAGE):Me(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(H){M!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),M=H)}function Ae(H){H!==$f?(se(n.CULL_FACE),H!==B&&(H===gu?n.cullFace(n.BACK):H===Zf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Me(n.CULL_FACE),B=H}function ot(H){H!==X&&(ie&&n.lineWidth(H),X=H)}function be(H,me,$){H?(se(n.POLYGON_OFFSET_FILL),(j!==me||Q!==$)&&(n.polygonOffset(me,$),j=me,Q=$)):Me(n.POLYGON_OFFSET_FILL)}function Xe(H){H?se(n.SCISSOR_TEST):Me(n.SCISSOR_TEST)}function Lt(H){H===void 0&&(H=n.TEXTURE0+ee-1),ge!==H&&(n.activeTexture(H),ge=H)}function Rt(H,me,$){$===void 0&&(ge===null?$=n.TEXTURE0+ee-1:$=ge);let Re=ue[$];Re===void 0&&(Re={type:void 0,texture:void 0},ue[$]=Re),(Re.type!==H||Re.texture!==me)&&(ge!==$&&(n.activeTexture($),ge=$),n.bindTexture(H,me||Z[H]),Re.type=H,Re.texture=me)}function D(){const H=ue[ge];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function W(){try{n.compressedTexImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function re(){try{n.texSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function le(){try{n.texSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function te(){try{n.compressedTexSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Fe(){try{n.compressedTexSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ve(){try{n.texStorage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ue(){try{n.texStorage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Be(){try{n.texImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function pe(){try{n.texImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function xe(H){nt.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),nt.copy(H))}function Ne(H){ut.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),ut.copy(H))}function Oe(H,me){let $=l.get(me);$===void 0&&($=new WeakMap,l.set(me,$));let Re=$.get(H);Re===void 0&&(Re=n.getUniformBlockIndex(me,H.name),$.set(H,Re))}function Ee(H,me){const Re=l.get(me).get(H);c.get(me)!==Re&&(n.uniformBlockBinding(me,Re,H.__bindingPointIndex),c.set(me,Re))}function ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ge=null,ue={},d={},f=new WeakMap,g=[],S=null,E=!1,v=null,p=null,I=null,R=null,w=null,L=null,N=null,O=new ft(0,0,0),G=0,y=!1,M=null,B=null,X=null,j=null,Q=null,nt.set(0,0,n.canvas.width,n.canvas.height),ut.set(0,0,n.canvas.width,n.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:se,disable:Me,bindFramebuffer:Y,drawBuffers:we,useProgram:Qe,setBlending:qe,setMaterial:Ie,setFlipSided:Ce,setCullFace:Ae,setLineWidth:ot,setPolygonOffset:be,setScissorTest:Xe,activeTexture:Lt,bindTexture:Rt,unbindTexture:D,compressedTexImage2D:x,compressedTexImage3D:W,texImage2D:Be,texImage3D:pe,updateUBOMapping:Oe,uniformBlockBinding:Ee,texStorage2D:ve,texStorage3D:Ue,texSubImage2D:re,texSubImage3D:le,compressedTexSubImage2D:te,compressedTexSubImage3D:Fe,scissor:xe,viewport:Ne,reset:ze}}function f_(n,e,t,i,r,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Pe,h=new WeakMap;let d;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(D,x){return g?new OffscreenCanvas(D,x):ba("canvas")}function E(D,x,W){let re=1;const le=Rt(D);if((le.width>W||le.height>W)&&(re=W/Math.max(le.width,le.height)),re<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const te=Math.floor(re*le.width),Fe=Math.floor(re*le.height);d===void 0&&(d=S(te,Fe));const ve=x?S(te,Fe):d;return ve.width=te,ve.height=Fe,ve.getContext("2d").drawImage(D,0,0,te,Fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+te+"x"+Fe+")."),ve}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),D;return D}function v(D){return D.generateMipmaps}function p(D){n.generateMipmap(D)}function I(D){return D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?n.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function R(D,x,W,re,le=!1){if(D!==null){if(n[D]!==void 0)return n[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let te=x;if(x===n.RED&&(W===n.FLOAT&&(te=n.R32F),W===n.HALF_FLOAT&&(te=n.R16F),W===n.UNSIGNED_BYTE&&(te=n.R8)),x===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(te=n.R8UI),W===n.UNSIGNED_SHORT&&(te=n.R16UI),W===n.UNSIGNED_INT&&(te=n.R32UI),W===n.BYTE&&(te=n.R8I),W===n.SHORT&&(te=n.R16I),W===n.INT&&(te=n.R32I)),x===n.RG&&(W===n.FLOAT&&(te=n.RG32F),W===n.HALF_FLOAT&&(te=n.RG16F),W===n.UNSIGNED_BYTE&&(te=n.RG8)),x===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(te=n.RG8UI),W===n.UNSIGNED_SHORT&&(te=n.RG16UI),W===n.UNSIGNED_INT&&(te=n.RG32UI),W===n.BYTE&&(te=n.RG8I),W===n.SHORT&&(te=n.RG16I),W===n.INT&&(te=n.RG32I)),x===n.RGB_INTEGER&&(W===n.UNSIGNED_BYTE&&(te=n.RGB8UI),W===n.UNSIGNED_SHORT&&(te=n.RGB16UI),W===n.UNSIGNED_INT&&(te=n.RGB32UI),W===n.BYTE&&(te=n.RGB8I),W===n.SHORT&&(te=n.RGB16I),W===n.INT&&(te=n.RGB32I)),x===n.RGBA_INTEGER&&(W===n.UNSIGNED_BYTE&&(te=n.RGBA8UI),W===n.UNSIGNED_SHORT&&(te=n.RGBA16UI),W===n.UNSIGNED_INT&&(te=n.RGBA32UI),W===n.BYTE&&(te=n.RGBA8I),W===n.SHORT&&(te=n.RGBA16I),W===n.INT&&(te=n.RGBA32I)),x===n.RGB&&(W===n.UNSIGNED_INT_5_9_9_9_REV&&(te=n.RGB9_E5),W===n.UNSIGNED_INT_10F_11F_11F_REV&&(te=n.R11F_G11F_B10F)),x===n.RGBA){const Fe=le?Os:gt.getTransfer(re);W===n.FLOAT&&(te=n.RGBA32F),W===n.HALF_FLOAT&&(te=n.RGBA16F),W===n.UNSIGNED_BYTE&&(te=Fe===Tt?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT_4_4_4_4&&(te=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(te=n.RGB5_A1)}return(te===n.R16F||te===n.R32F||te===n.RG16F||te===n.RG32F||te===n.RGBA16F||te===n.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function w(D,x){let W;return D?x===null||x===Ni||x===Gr?W=n.DEPTH24_STENCIL8:x===qt?W=n.DEPTH32F_STENCIL8:x===zr&&(W=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ni||x===Gr?W=n.DEPTH_COMPONENT24:x===qt?W=n.DEPTH_COMPONENT32F:x===zr&&(W=n.DEPTH_COMPONENT16),W}function L(D,x){return v(D)===!0||D.isFramebufferTexture&&D.minFilter!==Ot&&D.minFilter!==pt?Math.log2(Math.max(x.width,x.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?x.mipmaps.length:1}function N(D){const x=D.target;x.removeEventListener("dispose",N),G(x),x.isVideoTexture&&h.delete(x)}function O(D){const x=D.target;x.removeEventListener("dispose",O),M(x)}function G(D){const x=i.get(D);if(x.__webglInit===void 0)return;const W=D.source,re=f.get(W);if(re){const le=re[x.__cacheKey];le.usedTimes--,le.usedTimes===0&&y(D),Object.keys(re).length===0&&f.delete(W)}i.remove(D)}function y(D){const x=i.get(D);n.deleteTexture(x.__webglTexture);const W=D.source,re=f.get(W);delete re[x.__cacheKey],s.memory.textures--}function M(D){const x=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(x.__webglFramebuffer[re]))for(let le=0;le<x.__webglFramebuffer[re].length;le++)n.deleteFramebuffer(x.__webglFramebuffer[re][le]);else n.deleteFramebuffer(x.__webglFramebuffer[re]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[re])}else{if(Array.isArray(x.__webglFramebuffer))for(let re=0;re<x.__webglFramebuffer.length;re++)n.deleteFramebuffer(x.__webglFramebuffer[re]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let re=0;re<x.__webglColorRenderbuffer.length;re++)x.__webglColorRenderbuffer[re]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[re]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const W=D.textures;for(let re=0,le=W.length;re<le;re++){const te=i.get(W[re]);te.__webglTexture&&(n.deleteTexture(te.__webglTexture),s.memory.textures--),i.remove(W[re])}i.remove(D)}let B=0;function X(){B=0}function j(){const D=B;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),B+=1,D}function Q(D){const x=[];return x.push(D.wrapS),x.push(D.wrapT),x.push(D.wrapR||0),x.push(D.magFilter),x.push(D.minFilter),x.push(D.anisotropy),x.push(D.internalFormat),x.push(D.format),x.push(D.type),x.push(D.generateMipmaps),x.push(D.premultiplyAlpha),x.push(D.flipY),x.push(D.unpackAlignment),x.push(D.colorSpace),x.join()}function ee(D,x){const W=i.get(D);if(D.isVideoTexture&&Xe(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&W.__version!==D.version){const re=D.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(W,D,x);return}}else D.isExternalTexture&&(W.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+x)}function ie(D,x){const W=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&W.__version!==D.version){Z(W,D,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+x)}function ae(D,x){const W=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&W.__version!==D.version){Z(W,D,x);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+x)}function J(D,x){const W=i.get(D);if(D.version>0&&W.__version!==D.version){se(W,D,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+x)}const ge={[an]:n.REPEAT,[li]:n.CLAMP_TO_EDGE,[Ec]:n.MIRRORED_REPEAT},ue={[Ot]:n.NEAREST,[Mp]:n.NEAREST_MIPMAP_NEAREST,[ja]:n.NEAREST_MIPMAP_LINEAR,[pt]:n.LINEAR,[go]:n.LINEAR_MIPMAP_NEAREST,[ui]:n.LINEAR_MIPMAP_LINEAR},De={[Rp]:n.NEVER,[Lp]:n.ALWAYS,[Cp]:n.LESS,[hd]:n.LEQUAL,[bp]:n.EQUAL,[Pp]:n.GEQUAL,[Dp]:n.GREATER,[Ip]:n.NOTEQUAL};function Ge(D,x){if(x.type===qt&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===pt||x.magFilter===go||x.magFilter===ja||x.magFilter===ui||x.minFilter===pt||x.minFilter===go||x.minFilter===ja||x.minFilter===ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,ge[x.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,ge[x.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,ge[x.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,ue[x.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,ue[x.minFilter]),x.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,De[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ot||x.minFilter!==ja&&x.minFilter!==ui||x.type===qt&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");n.texParameterf(D,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function nt(D,x){let W=!1;D.__webglInit===void 0&&(D.__webglInit=!0,x.addEventListener("dispose",N));const re=x.source;let le=f.get(re);le===void 0&&(le={},f.set(re,le));const te=Q(x);if(te!==D.__cacheKey){le[te]===void 0&&(le[te]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,W=!0),le[te].usedTimes++;const Fe=le[D.__cacheKey];Fe!==void 0&&(le[D.__cacheKey].usedTimes--,Fe.usedTimes===0&&y(x)),D.__cacheKey=te,D.__webglTexture=le[te].texture}return W}function ut(D,x,W){return Math.floor(Math.floor(D/W)/x)}function Je(D,x,W,re){const te=D.updateRanges;if(te.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,W,re,x.data);else{te.sort((pe,xe)=>pe.start-xe.start);let Fe=0;for(let pe=1;pe<te.length;pe++){const xe=te[Fe],Ne=te[pe],Oe=xe.start+xe.count,Ee=ut(Ne.start,x.width,4),ze=ut(xe.start,x.width,4);Ne.start<=Oe+1&&Ee===ze&&ut(Ne.start+Ne.count-1,x.width,4)===Ee?xe.count=Math.max(xe.count,Ne.start+Ne.count-xe.start):(++Fe,te[Fe]=Ne)}te.length=Fe+1;const ve=n.getParameter(n.UNPACK_ROW_LENGTH),Ue=n.getParameter(n.UNPACK_SKIP_PIXELS),Be=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let pe=0,xe=te.length;pe<xe;pe++){const Ne=te[pe],Oe=Math.floor(Ne.start/4),Ee=Math.ceil(Ne.count/4),ze=Oe%x.width,H=Math.floor(Oe/x.width),me=Ee,$=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ze),n.pixelStorei(n.UNPACK_SKIP_ROWS,H),t.texSubImage2D(n.TEXTURE_2D,0,ze,H,me,$,W,re,x.data)}D.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ve),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ue),n.pixelStorei(n.UNPACK_SKIP_ROWS,Be)}}function Z(D,x,W){let re=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(re=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(re=n.TEXTURE_3D);const le=nt(D,x),te=x.source;t.bindTexture(re,D.__webglTexture,n.TEXTURE0+W);const Fe=i.get(te);if(te.version!==Fe.__version||le===!0){t.activeTexture(n.TEXTURE0+W);const ve=gt.getPrimaries(gt.workingColorSpace),Ue=x.colorSpace===nn?null:gt.getPrimaries(x.colorSpace),Be=x.colorSpace===nn||ve===Ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let pe=E(x.image,!1,r.maxTextureSize);pe=Lt(x,pe);const xe=a.convert(x.format,x.colorSpace),Ne=a.convert(x.type);let Oe=R(x.internalFormat,xe,Ne,x.colorSpace,x.isVideoTexture);Ge(re,x);let Ee;const ze=x.mipmaps,H=x.isVideoTexture!==!0,me=Fe.__version===void 0||le===!0,$=te.dataReady,Re=L(x,pe);if(x.isDepthTexture)Oe=w(x.format===kr,x.type),me&&(H?t.texStorage2D(n.TEXTURE_2D,1,Oe,pe.width,pe.height):t.texImage2D(n.TEXTURE_2D,0,Oe,pe.width,pe.height,0,xe,Ne,null));else if(x.isDataTexture)if(ze.length>0){H&&me&&t.texStorage2D(n.TEXTURE_2D,Re,Oe,ze[0].width,ze[0].height);for(let de=0,oe=ze.length;de<oe;de++)Ee=ze[de],H?$&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,Ee.width,Ee.height,xe,Ne,Ee.data):t.texImage2D(n.TEXTURE_2D,de,Oe,Ee.width,Ee.height,0,xe,Ne,Ee.data);x.generateMipmaps=!1}else H?(me&&t.texStorage2D(n.TEXTURE_2D,Re,Oe,pe.width,pe.height),$&&Je(x,pe,xe,Ne)):t.texImage2D(n.TEXTURE_2D,0,Oe,pe.width,pe.height,0,xe,Ne,pe.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){H&&me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,Oe,ze[0].width,ze[0].height,pe.depth);for(let de=0,oe=ze.length;de<oe;de++)if(Ee=ze[de],x.format!==Vt)if(xe!==null)if(H){if($)if(x.layerUpdates.size>0){const Le=Gu(Ee.width,Ee.height,x.format,x.type);for(const Ke of x.layerUpdates){const Et=Ee.data.subarray(Ke*Le/Ee.data.BYTES_PER_ELEMENT,(Ke+1)*Le/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,Ke,Ee.width,Ee.height,1,xe,Et)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,0,Ee.width,Ee.height,pe.depth,xe,Ee.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,de,Oe,Ee.width,Ee.height,pe.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?$&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,0,Ee.width,Ee.height,pe.depth,xe,Ne,Ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,de,Oe,Ee.width,Ee.height,pe.depth,0,xe,Ne,Ee.data)}else{H&&me&&t.texStorage2D(n.TEXTURE_2D,Re,Oe,ze[0].width,ze[0].height);for(let de=0,oe=ze.length;de<oe;de++)Ee=ze[de],x.format!==Vt?xe!==null?H?$&&t.compressedTexSubImage2D(n.TEXTURE_2D,de,0,0,Ee.width,Ee.height,xe,Ee.data):t.compressedTexImage2D(n.TEXTURE_2D,de,Oe,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?$&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,Ee.width,Ee.height,xe,Ne,Ee.data):t.texImage2D(n.TEXTURE_2D,de,Oe,Ee.width,Ee.height,0,xe,Ne,Ee.data)}else if(x.isDataArrayTexture)if(H){if(me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,Oe,pe.width,pe.height,pe.depth),$)if(x.layerUpdates.size>0){const de=Gu(pe.width,pe.height,x.format,x.type);for(const oe of x.layerUpdates){const Le=pe.data.subarray(oe*de/pe.data.BYTES_PER_ELEMENT,(oe+1)*de/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,oe,pe.width,pe.height,1,xe,Ne,Le)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,xe,Ne,pe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Oe,pe.width,pe.height,pe.depth,0,xe,Ne,pe.data);else if(x.isData3DTexture)H?(me&&t.texStorage3D(n.TEXTURE_3D,Re,Oe,pe.width,pe.height,pe.depth),$&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,xe,Ne,pe.data)):t.texImage3D(n.TEXTURE_3D,0,Oe,pe.width,pe.height,pe.depth,0,xe,Ne,pe.data);else if(x.isFramebufferTexture){if(me)if(H)t.texStorage2D(n.TEXTURE_2D,Re,Oe,pe.width,pe.height);else{let de=pe.width,oe=pe.height;for(let Le=0;Le<Re;Le++)t.texImage2D(n.TEXTURE_2D,Le,Oe,de,oe,0,xe,Ne,null),de>>=1,oe>>=1}}else if(ze.length>0){if(H&&me){const de=Rt(ze[0]);t.texStorage2D(n.TEXTURE_2D,Re,Oe,de.width,de.height)}for(let de=0,oe=ze.length;de<oe;de++)Ee=ze[de],H?$&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,xe,Ne,Ee):t.texImage2D(n.TEXTURE_2D,de,Oe,xe,Ne,Ee);x.generateMipmaps=!1}else if(H){if(me){const de=Rt(pe);t.texStorage2D(n.TEXTURE_2D,Re,Oe,de.width,de.height)}$&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,Ne,pe)}else t.texImage2D(n.TEXTURE_2D,0,Oe,xe,Ne,pe);v(x)&&p(re),Fe.__version=te.version,x.onUpdate&&x.onUpdate(x)}D.__version=x.version}function se(D,x,W){if(x.image.length!==6)return;const re=nt(D,x),le=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+W);const te=i.get(le);if(le.version!==te.__version||re===!0){t.activeTexture(n.TEXTURE0+W);const Fe=gt.getPrimaries(gt.workingColorSpace),ve=x.colorSpace===nn?null:gt.getPrimaries(x.colorSpace),Ue=x.colorSpace===nn||Fe===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const Be=x.isCompressedTexture||x.image[0].isCompressedTexture,pe=x.image[0]&&x.image[0].isDataTexture,xe=[];for(let oe=0;oe<6;oe++)!Be&&!pe?xe[oe]=E(x.image[oe],!0,r.maxCubemapSize):xe[oe]=pe?x.image[oe].image:x.image[oe],xe[oe]=Lt(x,xe[oe]);const Ne=xe[0],Oe=a.convert(x.format,x.colorSpace),Ee=a.convert(x.type),ze=R(x.internalFormat,Oe,Ee,x.colorSpace),H=x.isVideoTexture!==!0,me=te.__version===void 0||re===!0,$=le.dataReady;let Re=L(x,Ne);Ge(n.TEXTURE_CUBE_MAP,x);let de;if(Be){H&&me&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,ze,Ne.width,Ne.height);for(let oe=0;oe<6;oe++){de=xe[oe].mipmaps;for(let Le=0;Le<de.length;Le++){const Ke=de[Le];x.format!==Vt?Oe!==null?H?$&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Le,0,0,Ke.width,Ke.height,Oe,Ke.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Le,ze,Ke.width,Ke.height,0,Ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?$&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Le,0,0,Ke.width,Ke.height,Oe,Ee,Ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Le,ze,Ke.width,Ke.height,0,Oe,Ee,Ke.data)}}}else{if(de=x.mipmaps,H&&me){de.length>0&&Re++;const oe=Rt(xe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,ze,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(pe){H?$&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,xe[oe].width,xe[oe].height,Oe,Ee,xe[oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ze,xe[oe].width,xe[oe].height,0,Oe,Ee,xe[oe].data);for(let Le=0;Le<de.length;Le++){const Et=de[Le].image[oe].image;H?$&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Le+1,0,0,Et.width,Et.height,Oe,Ee,Et.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Le+1,ze,Et.width,Et.height,0,Oe,Ee,Et.data)}}else{H?$&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Oe,Ee,xe[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ze,Oe,Ee,xe[oe]);for(let Le=0;Le<de.length;Le++){const Ke=de[Le];H?$&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Le+1,0,0,Oe,Ee,Ke.image[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Le+1,ze,Oe,Ee,Ke.image[oe])}}}v(x)&&p(n.TEXTURE_CUBE_MAP),te.__version=le.version,x.onUpdate&&x.onUpdate(x)}D.__version=x.version}function Me(D,x,W,re,le,te){const Fe=a.convert(W.format,W.colorSpace),ve=a.convert(W.type),Ue=R(W.internalFormat,Fe,ve,W.colorSpace),Be=i.get(x),pe=i.get(W);if(pe.__renderTarget=x,!Be.__hasExternalTextures){const xe=Math.max(1,x.width>>te),Ne=Math.max(1,x.height>>te);le===n.TEXTURE_3D||le===n.TEXTURE_2D_ARRAY?t.texImage3D(le,te,Ue,xe,Ne,x.depth,0,Fe,ve,null):t.texImage2D(le,te,Ue,xe,Ne,0,Fe,ve,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),be(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,le,pe.__webglTexture,0,ot(x)):(le===n.TEXTURE_2D||le>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,re,le,pe.__webglTexture,te),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Y(D,x,W){if(n.bindRenderbuffer(n.RENDERBUFFER,D),x.depthBuffer){const re=x.depthTexture,le=re&&re.isDepthTexture?re.type:null,te=w(x.stencilBuffer,le),Fe=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=ot(x);be(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ve,te,x.width,x.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,te,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,te,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Fe,n.RENDERBUFFER,D)}else{const re=x.textures;for(let le=0;le<re.length;le++){const te=re[le],Fe=a.convert(te.format,te.colorSpace),ve=a.convert(te.type),Ue=R(te.internalFormat,Fe,ve,te.colorSpace),Be=ot(x);W&&be(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,Ue,x.width,x.height):be(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Be,Ue,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Ue,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function we(D,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const re=i.get(x.depthTexture);re.__renderTarget=x,(!re.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),ee(x.depthTexture,0);const le=re.__webglTexture,te=ot(x);if(x.depthTexture.format===Ra)be(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,le,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,le,0);else if(x.depthTexture.format===kr)be(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,le,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function Qe(D){const x=i.get(D),W=D.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==D.depthTexture){const re=D.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),re){const le=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,re.removeEventListener("dispose",le)};re.addEventListener("dispose",le),x.__depthDisposeCallback=le}x.__boundDepthTexture=re}if(D.depthTexture&&!x.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");const re=D.texture.mipmaps;re&&re.length>0?we(x.__webglFramebuffer[0],D):we(x.__webglFramebuffer,D)}else if(W){x.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[re]),x.__webglDepthbuffer[re]===void 0)x.__webglDepthbuffer[re]=n.createRenderbuffer(),Y(x.__webglDepthbuffer[re],D,!1);else{const le=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=x.__webglDepthbuffer[re];n.bindRenderbuffer(n.RENDERBUFFER,te),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,te)}}else{const re=D.texture.mipmaps;if(re&&re.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Y(x.__webglDepthbuffer,D,!1);else{const le=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,te),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,te)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ke(D,x,W){const re=i.get(D);x!==void 0&&Me(re.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&Qe(D)}function P(D){const x=D.texture,W=i.get(D),re=i.get(x);D.addEventListener("dispose",O);const le=D.textures,te=D.isWebGLCubeRenderTarget===!0,Fe=le.length>1;if(Fe||(re.__webglTexture===void 0&&(re.__webglTexture=n.createTexture()),re.__version=x.version,s.memory.textures++),te){W.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(x.mipmaps&&x.mipmaps.length>0){W.__webglFramebuffer[ve]=[];for(let Ue=0;Ue<x.mipmaps.length;Ue++)W.__webglFramebuffer[ve][Ue]=n.createFramebuffer()}else W.__webglFramebuffer[ve]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){W.__webglFramebuffer=[];for(let ve=0;ve<x.mipmaps.length;ve++)W.__webglFramebuffer[ve]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(Fe)for(let ve=0,Ue=le.length;ve<Ue;ve++){const Be=i.get(le[ve]);Be.__webglTexture===void 0&&(Be.__webglTexture=n.createTexture(),s.memory.textures++)}if(D.samples>0&&be(D)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ve=0;ve<le.length;ve++){const Ue=le[ve];W.__webglColorRenderbuffer[ve]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[ve]);const Be=a.convert(Ue.format,Ue.colorSpace),pe=a.convert(Ue.type),xe=R(Ue.internalFormat,Be,pe,Ue.colorSpace,D.isXRRenderTarget===!0),Ne=ot(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,xe,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,W.__webglColorRenderbuffer[ve])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),Y(W.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(te){t.bindTexture(n.TEXTURE_CUBE_MAP,re.__webglTexture),Ge(n.TEXTURE_CUBE_MAP,x);for(let ve=0;ve<6;ve++)if(x.mipmaps&&x.mipmaps.length>0)for(let Ue=0;Ue<x.mipmaps.length;Ue++)Me(W.__webglFramebuffer[ve][Ue],D,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ue);else Me(W.__webglFramebuffer[ve],D,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);v(x)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Fe){for(let ve=0,Ue=le.length;ve<Ue;ve++){const Be=le[ve],pe=i.get(Be);let xe=n.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(xe=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(xe,pe.__webglTexture),Ge(xe,Be),Me(W.__webglFramebuffer,D,Be,n.COLOR_ATTACHMENT0+ve,xe,0),v(Be)&&p(xe)}t.unbindTexture()}else{let ve=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ve=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ve,re.__webglTexture),Ge(ve,x),x.mipmaps&&x.mipmaps.length>0)for(let Ue=0;Ue<x.mipmaps.length;Ue++)Me(W.__webglFramebuffer[Ue],D,x,n.COLOR_ATTACHMENT0,ve,Ue);else Me(W.__webglFramebuffer,D,x,n.COLOR_ATTACHMENT0,ve,0);v(x)&&p(ve),t.unbindTexture()}D.depthBuffer&&Qe(D)}function qe(D){const x=D.textures;for(let W=0,re=x.length;W<re;W++){const le=x[W];if(v(le)){const te=I(D),Fe=i.get(le).__webglTexture;t.bindTexture(te,Fe),p(te),t.unbindTexture()}}}const Ie=[],Ce=[];function Ae(D){if(D.samples>0){if(be(D)===!1){const x=D.textures,W=D.width,re=D.height;let le=n.COLOR_BUFFER_BIT;const te=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Fe=i.get(D),ve=x.length>1;if(ve)for(let Be=0;Be<x.length;Be++)t.bindFramebuffer(n.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer);const Ue=D.texture.mipmaps;Ue&&Ue.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let Be=0;Be<x.length;Be++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(le|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(le|=n.STENCIL_BUFFER_BIT)),ve){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Fe.__webglColorRenderbuffer[Be]);const pe=i.get(x[Be]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,pe,0)}n.blitFramebuffer(0,0,W,re,0,0,W,re,le,n.NEAREST),c===!0&&(Ie.length=0,Ce.length=0,Ie.push(n.COLOR_ATTACHMENT0+Be),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Ie.push(te),Ce.push(te),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ce)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ie))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ve)for(let Be=0;Be<x.length;Be++){t.bindFramebuffer(n.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.RENDERBUFFER,Fe.__webglColorRenderbuffer[Be]);const pe=i.get(x[Be]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.TEXTURE_2D,pe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){const x=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function ot(D){return Math.min(r.maxSamples,D.samples)}function be(D){const x=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Xe(D){const x=s.render.frame;h.get(D)!==x&&(h.set(D,x),D.update())}function Lt(D,x){const W=D.colorSpace,re=D.format,le=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||W!==tn&&W!==nn&&(gt.getTransfer(W)===Tt?(re!==Vt||le!==$t)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),x}function Rt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=j,this.resetTextureUnits=X,this.setTexture2D=ee,this.setTexture2DArray=ie,this.setTexture3D=ae,this.setTextureCube=J,this.rebindTextures=ke,this.setupRenderTarget=P,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=be}function p_(n,e){function t(i,r=nn){let a;const s=gt.getTransfer(r);if(i===$t)return n.UNSIGNED_BYTE;if(i===bl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Dl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===sd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===od)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Rl)return n.BYTE;if(i===Cl)return n.SHORT;if(i===zr)return n.UNSIGNED_SHORT;if(i===js)return n.INT;if(i===Ni)return n.UNSIGNED_INT;if(i===qt)return n.FLOAT;if(i===rn)return n.HALF_FLOAT;if(i===cd)return n.ALPHA;if(i===ld)return n.RGB;if(i===Vt)return n.RGBA;if(i===Ra)return n.DEPTH_COMPONENT;if(i===kr)return n.DEPTH_STENCIL;if(i===hi)return n.RED;if(i===Il)return n.RED_INTEGER;if(i===$i)return n.RG;if(i===Pl)return n.RG_INTEGER;if(i===Ll)return n.RGBA_INTEGER;if(i===Cs||i===bs||i===Ds||i===Is)if(s===Tt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Cs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===bs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ds)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Is)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Cs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===bs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ds)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Is)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Tc||i===yc||i===Mc||i===wc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Tc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===yc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Mc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ac||i===Rc||i===Cc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Ac||i===Rc)return s===Tt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Cc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===bc||i===Dc||i===Ic||i===Pc||i===Lc||i===Nc||i===Uc||i===Oc||i===Fc||i===Bc||i===Hc||i===zc||i===Gc||i===kc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===bc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Dc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ic)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Pc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Lc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Nc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Uc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Oc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Bc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Hc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===zc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Gc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===kc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Vc||i===Wc||i===Xc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===Vc)return s===Tt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Wc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Xc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Yc||i===qc||i===$c||i===Zc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===Yc)return a.COMPRESSED_RED_RGTC1_EXT;if(i===qc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$c)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Zc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Gr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const m_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,g_=`
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

}`;class v_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Ed(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new dn({vertexShader:m_,fragmentShader:g_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Wn(new Js(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class __ extends qn{constructor(e,t){super();const i=this;let r=null,a=1,s=null,o="local-floor",c=1,l=null,h=null,d=null,f=null,g=null,S=null;const E=typeof XRWebGLBinding<"u",v=new v_,p={},I=t.getContextAttributes();let R=null,w=null;const L=[],N=[],O=new Pe;let G=null;const y=new vn;y.viewport=new ht;const M=new vn;M.viewport=new ht;const B=[y,M],X=new Hm;let j=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let se=L[Z];return se===void 0&&(se=new Fo,L[Z]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Z){let se=L[Z];return se===void 0&&(se=new Fo,L[Z]=se),se.getGripSpace()},this.getHand=function(Z){let se=L[Z];return se===void 0&&(se=new Fo,L[Z]=se),se.getHandSpace()};function ee(Z){const se=N.indexOf(Z.inputSource);if(se===-1)return;const Me=L[se];Me!==void 0&&(Me.update(Z.inputSource,Z.frame,l||s),Me.dispatchEvent({type:Z.type,data:Z.inputSource}))}function ie(){r.removeEventListener("select",ee),r.removeEventListener("selectstart",ee),r.removeEventListener("selectend",ee),r.removeEventListener("squeeze",ee),r.removeEventListener("squeezestart",ee),r.removeEventListener("squeezeend",ee),r.removeEventListener("end",ie),r.removeEventListener("inputsourceschange",ae);for(let Z=0;Z<L.length;Z++){const se=N[Z];se!==null&&(N[Z]=null,L[Z].disconnect(se))}j=null,Q=null,v.reset();for(const Z in p)delete p[Z];e.setRenderTarget(R),g=null,f=null,d=null,r=null,w=null,Je.stop(),i.isPresenting=!1,e.setPixelRatio(G),e.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return d===null&&E&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(R=e.getRenderTarget(),r.addEventListener("select",ee),r.addEventListener("selectstart",ee),r.addEventListener("selectend",ee),r.addEventListener("squeeze",ee),r.addEventListener("squeezestart",ee),r.addEventListener("squeezeend",ee),r.addEventListener("end",ie),r.addEventListener("inputsourceschange",ae),I.xrCompatible!==!0&&await t.makeXRCompatible(),G=e.getPixelRatio(),e.getSize(O),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Y=null,we=null;I.depth&&(we=I.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=I.stencil?kr:Ra,Y=I.stencil?Gr:Ni);const Qe={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:a};d=this.getBinding(),f=d.createProjectionLayer(Qe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new Xt(f.textureWidth,f.textureHeight,{format:Vt,type:$t,depthTexture:new Bl(f.textureWidth,f.textureHeight,Y,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:I.stencil,colorSpace:e.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Me={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:a};g=new XRWebGLLayer(r,t,Me),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),w=new Xt(g.framebufferWidth,g.framebufferHeight,{format:Vt,type:$t,colorSpace:e.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=await r.requestReferenceSpace(o),Je.setContext(r),Je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function ae(Z){for(let se=0;se<Z.removed.length;se++){const Me=Z.removed[se],Y=N.indexOf(Me);Y>=0&&(N[Y]=null,L[Y].disconnect(Me))}for(let se=0;se<Z.added.length;se++){const Me=Z.added[se];let Y=N.indexOf(Me);if(Y===-1){for(let Qe=0;Qe<L.length;Qe++)if(Qe>=N.length){N.push(Me),Y=Qe;break}else if(N[Qe]===null){N[Qe]=Me,Y=Qe;break}if(Y===-1)break}const we=L[Y];we&&we.connect(Me)}}const J=new F,ge=new F;function ue(Z,se,Me){J.setFromMatrixPosition(se.matrixWorld),ge.setFromMatrixPosition(Me.matrixWorld);const Y=J.distanceTo(ge),we=se.projectionMatrix.elements,Qe=Me.projectionMatrix.elements,ke=we[14]/(we[10]-1),P=we[14]/(we[10]+1),qe=(we[9]+1)/we[5],Ie=(we[9]-1)/we[5],Ce=(we[8]-1)/we[0],Ae=(Qe[8]+1)/Qe[0],ot=ke*Ce,be=ke*Ae,Xe=Y/(-Ce+Ae),Lt=Xe*-Ce;if(se.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Lt),Z.translateZ(Xe),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),we[10]===-1)Z.projectionMatrix.copy(se.projectionMatrix),Z.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const Rt=ke+Xe,D=P+Xe,x=ot-Lt,W=be+(Y-Lt),re=qe*P/D*Rt,le=Ie*P/D*Rt;Z.projectionMatrix.makePerspective(x,W,re,le,Rt,D),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function De(Z,se){se===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(se.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let se=Z.near,Me=Z.far;v.texture!==null&&(v.depthNear>0&&(se=v.depthNear),v.depthFar>0&&(Me=v.depthFar)),X.near=M.near=y.near=se,X.far=M.far=y.far=Me,(j!==X.near||Q!==X.far)&&(r.updateRenderState({depthNear:X.near,depthFar:X.far}),j=X.near,Q=X.far),X.layers.mask=Z.layers.mask|6,y.layers.mask=X.layers.mask&3,M.layers.mask=X.layers.mask&5;const Y=Z.parent,we=X.cameras;De(X,Y);for(let Qe=0;Qe<we.length;Qe++)De(we[Qe],Y);we.length===2?ue(X,y,M):X.projectionMatrix.copy(y.projectionMatrix),Ge(Z,X,Y)};function Ge(Z,se,Me){Me===null?Z.matrix.copy(se.matrixWorld):(Z.matrix.copy(Me.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(se.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(se.projectionMatrix),Z.projectionMatrixInverse.copy(se.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ca*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(f===null&&g===null))return c},this.setFoveation=function(Z){c=Z,f!==null&&(f.fixedFoveation=Z),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=Z)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(X)},this.getCameraTexture=function(Z){return p[Z]};let nt=null;function ut(Z,se){if(h=se.getViewerPose(l||s),S=se,h!==null){const Me=h.views;g!==null&&(e.setRenderTargetFramebuffer(w,g.framebuffer),e.setRenderTarget(w));let Y=!1;Me.length!==X.cameras.length&&(X.cameras.length=0,Y=!0);for(let P=0;P<Me.length;P++){const qe=Me[P];let Ie=null;if(g!==null)Ie=g.getViewport(qe);else{const Ae=d.getViewSubImage(f,qe);Ie=Ae.viewport,P===0&&(e.setRenderTargetTextures(w,Ae.colorTexture,Ae.depthStencilTexture),e.setRenderTarget(w))}let Ce=B[P];Ce===void 0&&(Ce=new vn,Ce.layers.enable(P),Ce.viewport=new ht,B[P]=Ce),Ce.matrix.fromArray(qe.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(qe.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),P===0&&(X.matrix.copy(Ce.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),Y===!0&&X.cameras.push(Ce)}const we=r.enabledFeatures;if(we&&we.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){d=i.getBinding();const P=d.getDepthInformation(Me[0]);P&&P.isValid&&P.texture&&v.init(P,r.renderState)}if(we&&we.includes("camera-access")&&E){e.state.unbindTexture(),d=i.getBinding();for(let P=0;P<Me.length;P++){const qe=Me[P].camera;if(qe){let Ie=p[qe];Ie||(Ie=new Ed,p[qe]=Ie);const Ce=d.getCameraImage(qe);Ie.sourceTexture=Ce}}}}for(let Me=0;Me<L.length;Me++){const Y=N[Me],we=L[Me];Y!==null&&we!==void 0&&we.update(Y,se,l||s)}nt&&nt(Z,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),S=null}const Je=new Md;Je.setAnimationLoop(ut),this.setAnimationLoop=function(Z){nt=Z},this.dispose=function(){}}}const Vi=new _i,S_=new He;function x_(n,e){function t(v,p){v.matrixAutoUpdate===!0&&v.updateMatrix(),p.value.copy(v.matrix)}function i(v,p){p.color.getRGB(v.fogColor.value,_d(n)),p.isFog?(v.fogNear.value=p.near,v.fogFar.value=p.far):p.isFogExp2&&(v.fogDensity.value=p.density)}function r(v,p,I,R,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(v,p):p.isMeshToonMaterial?(a(v,p),d(v,p)):p.isMeshPhongMaterial?(a(v,p),h(v,p)):p.isMeshStandardMaterial?(a(v,p),f(v,p),p.isMeshPhysicalMaterial&&g(v,p,w)):p.isMeshMatcapMaterial?(a(v,p),S(v,p)):p.isMeshDepthMaterial?a(v,p):p.isMeshDistanceMaterial?(a(v,p),E(v,p)):p.isMeshNormalMaterial?a(v,p):p.isLineBasicMaterial?(s(v,p),p.isLineDashedMaterial&&o(v,p)):p.isPointsMaterial?c(v,p,I,R):p.isSpriteMaterial?l(v,p):p.isShadowMaterial?(v.color.value.copy(p.color),v.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(v,p){v.opacity.value=p.opacity,p.color&&v.diffuse.value.copy(p.color),p.emissive&&v.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(v.map.value=p.map,t(p.map,v.mapTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,t(p.alphaMap,v.alphaMapTransform)),p.bumpMap&&(v.bumpMap.value=p.bumpMap,t(p.bumpMap,v.bumpMapTransform),v.bumpScale.value=p.bumpScale,p.side===Wt&&(v.bumpScale.value*=-1)),p.normalMap&&(v.normalMap.value=p.normalMap,t(p.normalMap,v.normalMapTransform),v.normalScale.value.copy(p.normalScale),p.side===Wt&&v.normalScale.value.negate()),p.displacementMap&&(v.displacementMap.value=p.displacementMap,t(p.displacementMap,v.displacementMapTransform),v.displacementScale.value=p.displacementScale,v.displacementBias.value=p.displacementBias),p.emissiveMap&&(v.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,v.emissiveMapTransform)),p.specularMap&&(v.specularMap.value=p.specularMap,t(p.specularMap,v.specularMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest);const I=e.get(p),R=I.envMap,w=I.envMapRotation;R&&(v.envMap.value=R,Vi.copy(w),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),v.envMapRotation.value.setFromMatrix4(S_.makeRotationFromEuler(Vi)),v.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=p.reflectivity,v.ior.value=p.ior,v.refractionRatio.value=p.refractionRatio),p.lightMap&&(v.lightMap.value=p.lightMap,v.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,v.lightMapTransform)),p.aoMap&&(v.aoMap.value=p.aoMap,v.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,v.aoMapTransform))}function s(v,p){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,p.map&&(v.map.value=p.map,t(p.map,v.mapTransform))}function o(v,p){v.dashSize.value=p.dashSize,v.totalSize.value=p.dashSize+p.gapSize,v.scale.value=p.scale}function c(v,p,I,R){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,v.size.value=p.size*I,v.scale.value=R*.5,p.map&&(v.map.value=p.map,t(p.map,v.uvTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,t(p.alphaMap,v.alphaMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest)}function l(v,p){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,v.rotation.value=p.rotation,p.map&&(v.map.value=p.map,t(p.map,v.mapTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,t(p.alphaMap,v.alphaMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest)}function h(v,p){v.specular.value.copy(p.specular),v.shininess.value=Math.max(p.shininess,1e-4)}function d(v,p){p.gradientMap&&(v.gradientMap.value=p.gradientMap)}function f(v,p){v.metalness.value=p.metalness,p.metalnessMap&&(v.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,v.metalnessMapTransform)),v.roughness.value=p.roughness,p.roughnessMap&&(v.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,v.roughnessMapTransform)),p.envMap&&(v.envMapIntensity.value=p.envMapIntensity)}function g(v,p,I){v.ior.value=p.ior,p.sheen>0&&(v.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),v.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(v.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,v.sheenColorMapTransform)),p.sheenRoughnessMap&&(v.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,v.sheenRoughnessMapTransform))),p.clearcoat>0&&(v.clearcoat.value=p.clearcoat,v.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(v.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,v.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(v.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Wt&&v.clearcoatNormalScale.value.negate())),p.dispersion>0&&(v.dispersion.value=p.dispersion),p.iridescence>0&&(v.iridescence.value=p.iridescence,v.iridescenceIOR.value=p.iridescenceIOR,v.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(v.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,v.iridescenceMapTransform)),p.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),p.transmission>0&&(v.transmission.value=p.transmission,v.transmissionSamplerMap.value=I.texture,v.transmissionSamplerSize.value.set(I.width,I.height),p.transmissionMap&&(v.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,v.transmissionMapTransform)),v.thickness.value=p.thickness,p.thicknessMap&&(v.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=p.attenuationDistance,v.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(v.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(v.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=p.specularIntensity,v.specularColor.value.copy(p.specularColor),p.specularColorMap&&(v.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,v.specularColorMapTransform)),p.specularIntensityMap&&(v.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,v.specularIntensityMapTransform))}function S(v,p){p.matcap&&(v.matcap.value=p.matcap)}function E(v,p){const I=e.get(p).light;v.referencePosition.value.setFromMatrixPosition(I.matrixWorld),v.nearDistance.value=I.shadow.camera.near,v.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function E_(n,e,t,i){let r={},a={},s=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(I,R){const w=R.program;i.uniformBlockBinding(I,w)}function l(I,R){let w=r[I.id];w===void 0&&(S(I),w=h(I),r[I.id]=w,I.addEventListener("dispose",v));const L=R.program;i.updateUBOMapping(I,L);const N=e.render.frame;a[I.id]!==N&&(f(I),a[I.id]=N)}function h(I){const R=d();I.__bindingPointIndex=R;const w=n.createBuffer(),L=I.__size,N=I.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,L,N),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,R,w),w}function d(){for(let I=0;I<o;I++)if(s.indexOf(I)===-1)return s.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(I){const R=r[I.id],w=I.uniforms,L=I.__cache;n.bindBuffer(n.UNIFORM_BUFFER,R);for(let N=0,O=w.length;N<O;N++){const G=Array.isArray(w[N])?w[N]:[w[N]];for(let y=0,M=G.length;y<M;y++){const B=G[y];if(g(B,N,y,L)===!0){const X=B.__offset,j=Array.isArray(B.value)?B.value:[B.value];let Q=0;for(let ee=0;ee<j.length;ee++){const ie=j[ee],ae=E(ie);typeof ie=="number"||typeof ie=="boolean"?(B.__data[0]=ie,n.bufferSubData(n.UNIFORM_BUFFER,X+Q,B.__data)):ie.isMatrix3?(B.__data[0]=ie.elements[0],B.__data[1]=ie.elements[1],B.__data[2]=ie.elements[2],B.__data[3]=0,B.__data[4]=ie.elements[3],B.__data[5]=ie.elements[4],B.__data[6]=ie.elements[5],B.__data[7]=0,B.__data[8]=ie.elements[6],B.__data[9]=ie.elements[7],B.__data[10]=ie.elements[8],B.__data[11]=0):(ie.toArray(B.__data,Q),Q+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,X,B.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(I,R,w,L){const N=I.value,O=R+"_"+w;if(L[O]===void 0)return typeof N=="number"||typeof N=="boolean"?L[O]=N:L[O]=N.clone(),!0;{const G=L[O];if(typeof N=="number"||typeof N=="boolean"){if(G!==N)return L[O]=N,!0}else if(G.equals(N)===!1)return G.copy(N),!0}return!1}function S(I){const R=I.uniforms;let w=0;const L=16;for(let O=0,G=R.length;O<G;O++){const y=Array.isArray(R[O])?R[O]:[R[O]];for(let M=0,B=y.length;M<B;M++){const X=y[M],j=Array.isArray(X.value)?X.value:[X.value];for(let Q=0,ee=j.length;Q<ee;Q++){const ie=j[Q],ae=E(ie),J=w%L,ge=J%ae.boundary,ue=J+ge;w+=ge,ue!==0&&L-ue<ae.storage&&(w+=L-ue),X.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=w,w+=ae.storage}}}const N=w%L;return N>0&&(w+=L-N),I.__size=w,I.__cache={},this}function E(I){const R={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(R.boundary=4,R.storage=4):I.isVector2?(R.boundary=8,R.storage=8):I.isVector3||I.isColor?(R.boundary=16,R.storage=12):I.isVector4?(R.boundary=16,R.storage=16):I.isMatrix3?(R.boundary=48,R.storage=48):I.isMatrix4?(R.boundary=64,R.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),R}function v(I){const R=I.target;R.removeEventListener("dispose",v);const w=s.indexOf(R.__bindingPointIndex);s.splice(w,1),n.deleteBuffer(r[R.id]),delete r[R.id],delete a[R.id]}function p(){for(const I in r)n.deleteBuffer(r[I]);s=[],r={},a={}}return{bind:c,update:l,dispose:p}}class bd{constructor(e={}){const{canvas:t=jp(),context:i=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=s;const S=new Uint32Array(4),E=new Int32Array(4);let v=null,p=null;const I=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let L=!1;this._outputColorSpace=Dt;let N=0,O=0,G=null,y=-1,M=null;const B=new ht,X=new ht;let j=null;const Q=new ft(0);let ee=0,ie=t.width,ae=t.height,J=1,ge=null,ue=null;const De=new ht(0,0,ie,ae),Ge=new ht(0,0,ie,ae);let nt=!1;const ut=new xd;let Je=!1,Z=!1;const se=new He,Me=new F,Y=new ht,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qe=!1;function ke(){return G===null?J:1}let P=i;function qe(u,_){return t.getContext(u,_)}try{const u={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$r}`),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",Re,!1),t.addEventListener("webglcontextcreationerror",de,!1),P===null){const _="webgl2";if(P=qe(_,u),P===null)throw qe(_)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(u){throw console.error("THREE.WebGLRenderer: "+u.message),u}let Ie,Ce,Ae,ot,be,Xe,Lt,Rt,D,x,W,re,le,te,Fe,ve,Ue,Be,pe,xe,Ne,Oe,Ee,ze;function H(){Ie=new P1(P),Ie.init(),Oe=new p_(P,Ie),Ce=new w1(P,Ie,e,Oe),Ae=new d_(P,Ie),Ce.reversedDepthBuffer&&f&&Ae.buffers.depth.setReversed(!0),ot=new U1(P),be=new Qv,Xe=new f_(P,Ie,Ae,be,Ce,Oe,ot),Lt=new R1(w),Rt=new I1(w),D=new Gm(P),Ee=new y1(P,D),x=new L1(P,D,ot,Ee),W=new F1(P,x,D,ot),pe=new O1(P,Ce,Xe),ve=new A1(be),re=new Jv(w,Lt,Rt,Ie,Ce,Ee,ve),le=new x_(w,be),te=new t_,Fe=new o_(Ie),Be=new T1(w,Lt,Rt,Ae,W,g,c),Ue=new u_(w,W,Ce),ze=new E_(P,ot,Ce,Ae),xe=new M1(P,Ie,ot),Ne=new N1(P,Ie,ot),ot.programs=re.programs,w.capabilities=Ce,w.extensions=Ie,w.properties=be,w.renderLists=te,w.shadowMap=Ue,w.state=Ae,w.info=ot}H();const me=new __(w,P);this.xr=me,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const u=Ie.get("WEBGL_lose_context");u&&u.loseContext()},this.forceContextRestore=function(){const u=Ie.get("WEBGL_lose_context");u&&u.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(u){u!==void 0&&(J=u,this.setSize(ie,ae,!1))},this.getSize=function(u){return u.set(ie,ae)},this.setSize=function(u,_,T=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ie=u,ae=_,t.width=Math.floor(u*J),t.height=Math.floor(_*J),T===!0&&(t.style.width=u+"px",t.style.height=_+"px"),this.setViewport(0,0,u,_)},this.getDrawingBufferSize=function(u){return u.set(ie*J,ae*J).floor()},this.setDrawingBufferSize=function(u,_,T){ie=u,ae=_,J=T,t.width=Math.floor(u*T),t.height=Math.floor(_*T),this.setViewport(0,0,u,_)},this.getCurrentViewport=function(u){return u.copy(B)},this.getViewport=function(u){return u.copy(De)},this.setViewport=function(u,_,T,C){u.isVector4?De.set(u.x,u.y,u.z,u.w):De.set(u,_,T,C),Ae.viewport(B.copy(De).multiplyScalar(J).round())},this.getScissor=function(u){return u.copy(Ge)},this.setScissor=function(u,_,T,C){u.isVector4?Ge.set(u.x,u.y,u.z,u.w):Ge.set(u,_,T,C),Ae.scissor(X.copy(Ge).multiplyScalar(J).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(u){Ae.setScissorTest(nt=u)},this.setOpaqueSort=function(u){ge=u},this.setTransparentSort=function(u){ue=u},this.getClearColor=function(u){return u.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(u=!0,_=!0,T=!0){let C=0;if(u){let b=!1;if(G!==null){const A=G.texture.format;b=A===Ll||A===Pl||A===Il}if(b){const A=G.texture.type,V=A===$t||A===Ni||A===zr||A===Gr||A===bl||A===Dl,k=Be.getClearColor(),z=Be.getClearAlpha(),q=k.r,ne=k.g,K=k.b;V?(S[0]=q,S[1]=ne,S[2]=K,S[3]=z,P.clearBufferuiv(P.COLOR,0,S)):(E[0]=q,E[1]=ne,E[2]=K,E[3]=z,P.clearBufferiv(P.COLOR,0,E))}else C|=P.COLOR_BUFFER_BIT}_&&(C|=P.DEPTH_BUFFER_BIT),T&&(C|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(C)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",Re,!1),t.removeEventListener("webglcontextcreationerror",de,!1),Be.dispose(),te.dispose(),Fe.dispose(),be.dispose(),Lt.dispose(),Rt.dispose(),W.dispose(),Ee.dispose(),ze.dispose(),re.dispose(),me.dispose(),me.removeEventListener("sessionstart",xn),me.removeEventListener("sessionend",ka),$n.stop()};function $(u){u.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const u=ot.autoReset,_=Ue.enabled,T=Ue.autoUpdate,C=Ue.needsUpdate,b=Ue.type;H(),ot.autoReset=u,Ue.enabled=_,Ue.autoUpdate=T,Ue.needsUpdate=C,Ue.type=b}function de(u){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",u.statusMessage)}function oe(u){const _=u.target;_.removeEventListener("dispose",oe),Le(_)}function Le(u){Ke(u),be.remove(u)}function Ke(u){const _=be.get(u).programs;_!==void 0&&(_.forEach(function(T){re.releaseProgram(T)}),u.isShaderMaterial&&re.releaseShaderCache(u))}this.renderBufferDirect=function(u,_,T,C,b,A){_===null&&(_=we);const V=b.isMesh&&b.matrixWorld.determinant()<0,k=$a(u,_,T,C,b);Ae.setMaterial(C,V);let z=T.index,q=1;if(C.wireframe===!0){if(z=x.getWireframeAttribute(T),z===void 0)return;q=2}const ne=T.drawRange,K=T.attributes.position;let ce=ne.start*q,_e=(ne.start+ne.count)*q;A!==null&&(ce=Math.max(ce,A.start*q),_e=Math.min(_e,(A.start+A.count)*q)),z!==null?(ce=Math.max(ce,0),_e=Math.min(_e,z.count)):K!=null&&(ce=Math.max(ce,0),_e=Math.min(_e,K.count));const he=_e-ce;if(he<0||he===1/0)return;Ee.setup(b,C,k,T,z);let fe,Te=xe;if(z!==null&&(fe=D.get(z),Te=Ne,Te.setIndex(fe)),b.isMesh)C.wireframe===!0?(Ae.setLineWidth(C.wireframeLinewidth*ke()),Te.setMode(P.LINES)):Te.setMode(P.TRIANGLES);else if(b.isLine){let Se=C.linewidth;Se===void 0&&(Se=1),Ae.setLineWidth(Se*ke()),b.isLineSegments?Te.setMode(P.LINES):b.isLineLoop?Te.setMode(P.LINE_LOOP):Te.setMode(P.LINE_STRIP)}else b.isPoints?Te.setMode(P.POINTS):b.isSprite&&Te.setMode(P.TRIANGLES);if(b.isBatchedMesh)if(b._multiDrawInstances!==null)Da("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Te.renderMultiDrawInstances(b._multiDrawStarts,b._multiDrawCounts,b._multiDrawCount,b._multiDrawInstances);else if(Ie.get("WEBGL_multi_draw"))Te.renderMultiDraw(b._multiDrawStarts,b._multiDrawCounts,b._multiDrawCount);else{const Se=b._multiDrawStarts,We=b._multiDrawCounts,Ve=b._multiDrawCount,et=z?D.get(z).bytesPerElement:1,Ye=be.get(C).currentProgram.getUniforms();for(let ct=0;ct<Ve;ct++)Ye.setValue(P,"_gl_DrawID",ct),Te.render(Se[ct]/et,We[ct])}else if(b.isInstancedMesh)Te.renderInstances(ce,he,b.count);else if(T.isInstancedBufferGeometry){const Se=T._maxInstanceCount!==void 0?T._maxInstanceCount:1/0,We=Math.min(T.instanceCount,Se);Te.renderInstances(ce,he,We)}else Te.render(ce,he)};function Et(u,_,T){u.transparent===!0&&u.side===_n&&u.forceSinglePass===!1?(u.side=Wt,u.needsUpdate=!0,ar(u,_,T),u.side=vi,u.needsUpdate=!0,ar(u,_,T),u.side=_n):ar(u,_,T)}this.compile=function(u,_,T=null){T===null&&(T=u),p=Fe.get(T),p.init(_),R.push(p),T.traverseVisible(function(b){b.isLight&&b.layers.test(_.layers)&&(p.pushLight(b),b.castShadow&&p.pushShadow(b))}),u!==T&&u.traverseVisible(function(b){b.isLight&&b.layers.test(_.layers)&&(p.pushLight(b),b.castShadow&&p.pushShadow(b))}),p.setupLights();const C=new Set;return u.traverse(function(b){if(!(b.isMesh||b.isPoints||b.isLine||b.isSprite))return;const A=b.material;if(A)if(Array.isArray(A))for(let V=0;V<A.length;V++){const k=A[V];Et(k,T,b),C.add(k)}else Et(A,T,b),C.add(A)}),p=R.pop(),C},this.compileAsync=function(u,_,T=null){const C=this.compile(u,_,T);return new Promise(b=>{function A(){if(C.forEach(function(V){be.get(V).currentProgram.isReady()&&C.delete(V)}),C.size===0){b(u);return}setTimeout(A,10)}Ie.get("KHR_parallel_shader_compile")!==null?A():setTimeout(A,10)})};let mt=null;function Rn(u){mt&&mt(u)}function xn(){$n.stop()}function ka(){$n.start()}const $n=new Md;$n.setAnimationLoop(Rn),typeof self<"u"&&$n.setContext(self),this.setAnimationLoop=function(u){mt=u,me.setAnimationLoop(u),u===null?$n.stop():$n.start()},me.addEventListener("sessionstart",xn),me.addEventListener("sessionend",ka),this.render=function(u,_){if(_!==void 0&&_.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(u.matrixWorldAutoUpdate===!0&&u.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(_),_=me.getCamera()),u.isScene===!0&&u.onBeforeRender(w,u,_,G),p=Fe.get(u,R.length),p.init(_),R.push(p),se.multiplyMatrices(_.projectionMatrix,_.matrixWorldInverse),ut.setFromProjectionMatrix(se,Vn,_.reversedDepth),Z=this.localClippingEnabled,Je=ve.init(this.clippingPlanes,Z),v=te.get(u,I.length),v.init(),I.push(v),me.enabled===!0&&me.isPresenting===!0){const A=w.xr.getDepthSensingMesh();A!==null&&ia(A,_,-1/0,w.sortObjects)}ia(u,_,0,w.sortObjects),v.finish(),w.sortObjects===!0&&v.sort(ge,ue),Qe=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,Qe&&Be.addToRenderList(v,u),this.info.render.frame++,Je===!0&&ve.beginShadows();const T=p.state.shadowsArray;Ue.render(T,u,_),Je===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const C=v.opaque,b=v.transmissive;if(p.setupLights(),_.isArrayCamera){const A=_.cameras;if(b.length>0)for(let V=0,k=A.length;V<k;V++){const z=A[V];Wa(C,b,u,z)}Qe&&Be.render(u);for(let V=0,k=A.length;V<k;V++){const z=A[V];Va(v,u,z,z.viewport)}}else b.length>0&&Wa(C,b,u,_),Qe&&Be.render(u),Va(v,u,_);G!==null&&O===0&&(Xe.updateMultisampleRenderTarget(G),Xe.updateRenderTargetMipmap(G)),u.isScene===!0&&u.onAfterRender(w,u,_),Ee.resetDefaultState(),y=-1,M=null,R.pop(),R.length>0?(p=R[R.length-1],Je===!0&&ve.setGlobalState(w.clippingPlanes,p.state.camera)):p=null,I.pop(),I.length>0?v=I[I.length-1]:v=null};function ia(u,_,T,C){if(u.visible===!1)return;if(u.layers.test(_.layers)){if(u.isGroup)T=u.renderOrder;else if(u.isLOD)u.autoUpdate===!0&&u.update(_);else if(u.isLight)p.pushLight(u),u.castShadow&&p.pushShadow(u);else if(u.isSprite){if(!u.frustumCulled||ut.intersectsSprite(u)){C&&Y.setFromMatrixPosition(u.matrixWorld).applyMatrix4(se);const V=W.update(u),k=u.material;k.visible&&v.push(u,V,k,T,Y.z,null)}}else if((u.isMesh||u.isLine||u.isPoints)&&(!u.frustumCulled||ut.intersectsObject(u))){const V=W.update(u),k=u.material;if(C&&(u.boundingSphere!==void 0?(u.boundingSphere===null&&u.computeBoundingSphere(),Y.copy(u.boundingSphere.center)):(V.boundingSphere===null&&V.computeBoundingSphere(),Y.copy(V.boundingSphere.center)),Y.applyMatrix4(u.matrixWorld).applyMatrix4(se)),Array.isArray(k)){const z=V.groups;for(let q=0,ne=z.length;q<ne;q++){const K=z[q],ce=k[K.materialIndex];ce&&ce.visible&&v.push(u,V,ce,T,Y.z,K)}}else k.visible&&v.push(u,V,k,T,Y.z,null)}}const A=u.children;for(let V=0,k=A.length;V<k;V++)ia(A[V],_,T,C)}function Va(u,_,T,C){const b=u.opaque,A=u.transmissive,V=u.transparent;p.setupLightsView(T),Je===!0&&ve.setGlobalState(w.clippingPlanes,T),C&&Ae.viewport(B.copy(C)),b.length>0&&Fi(b,_,T),A.length>0&&Fi(A,_,T),V.length>0&&Fi(V,_,T),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function Wa(u,_,T,C){if((T.isScene===!0?T.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[C.id]===void 0&&(p.state.transmissionRenderTarget[C.id]=new Xt(1,1,{generateMipmaps:!0,type:Ie.has("EXT_color_buffer_half_float")||Ie.has("EXT_color_buffer_float")?rn:$t,minFilter:ui,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace}));const A=p.state.transmissionRenderTarget[C.id],V=C.viewport||B;A.setSize(V.z*w.transmissionResolutionScale,V.w*w.transmissionResolutionScale);const k=w.getRenderTarget(),z=w.getActiveCubeFace(),q=w.getActiveMipmapLevel();w.setRenderTarget(A),w.getClearColor(Q),ee=w.getClearAlpha(),ee<1&&w.setClearColor(16777215,.5),w.clear(),Qe&&Be.render(T);const ne=w.toneMapping;w.toneMapping=di;const K=C.viewport;if(C.viewport!==void 0&&(C.viewport=void 0),p.setupLightsView(C),Je===!0&&ve.setGlobalState(w.clippingPlanes,C),Fi(u,T,C),Xe.updateMultisampleRenderTarget(A),Xe.updateRenderTargetMipmap(A),Ie.has("WEBGL_multisampled_render_to_texture")===!1){let ce=!1;for(let _e=0,he=_.length;_e<he;_e++){const fe=_[_e],Te=fe.object,Se=fe.geometry,We=fe.material,Ve=fe.group;if(We.side===_n&&Te.layers.test(C.layers)){const et=We.side;We.side=Wt,We.needsUpdate=!0,Xa(Te,T,C,Se,We,Ve),We.side=et,We.needsUpdate=!0,ce=!0}}ce===!0&&(Xe.updateMultisampleRenderTarget(A),Xe.updateRenderTargetMipmap(A))}w.setRenderTarget(k,z,q),w.setClearColor(Q,ee),K!==void 0&&(C.viewport=K),w.toneMapping=ne}function Fi(u,_,T){const C=_.isScene===!0?_.overrideMaterial:null;for(let b=0,A=u.length;b<A;b++){const V=u[b],k=V.object,z=V.geometry,q=V.group;let ne=V.material;ne.allowOverride===!0&&C!==null&&(ne=C),k.layers.test(T.layers)&&Xa(k,_,T,z,ne,q)}}function Xa(u,_,T,C,b,A){u.onBeforeRender(w,_,T,C,b,A),u.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,u.matrixWorld),u.normalMatrix.getNormalMatrix(u.modelViewMatrix),b.onBeforeRender(w,_,T,C,u,A),b.transparent===!0&&b.side===_n&&b.forceSinglePass===!1?(b.side=Wt,b.needsUpdate=!0,w.renderBufferDirect(T,_,C,b,u,A),b.side=vi,b.needsUpdate=!0,w.renderBufferDirect(T,_,C,b,u,A),b.side=_n):w.renderBufferDirect(T,_,C,b,u,A),u.onAfterRender(w,_,T,C,b,A)}function ar(u,_,T){_.isScene!==!0&&(_=we);const C=be.get(u),b=p.state.lights,A=p.state.shadowsArray,V=b.state.version,k=re.getParameters(u,b.state,A,_,T),z=re.getProgramCacheKey(k);let q=C.programs;C.environment=u.isMeshStandardMaterial?_.environment:null,C.fog=_.fog,C.envMap=(u.isMeshStandardMaterial?Rt:Lt).get(u.envMap||C.environment),C.envMapRotation=C.environment!==null&&u.envMap===null?_.environmentRotation:u.envMapRotation,q===void 0&&(u.addEventListener("dispose",oe),q=new Map,C.programs=q);let ne=q.get(z);if(ne!==void 0){if(C.currentProgram===ne&&C.lightsStateVersion===V)return qa(u,k),ne}else k.uniforms=re.getUniforms(u),u.onBeforeCompile(k,w),ne=re.acquireProgram(k,z),q.set(z,ne),C.uniforms=k.uniforms;const K=C.uniforms;return(!u.isShaderMaterial&&!u.isRawShaderMaterial||u.clipping===!0)&&(K.clippingPlanes=ve.uniform),qa(u,k),C.needsLights=mo(u),C.lightsStateVersion=V,C.needsLights&&(K.ambientLightColor.value=b.state.ambient,K.lightProbe.value=b.state.probe,K.directionalLights.value=b.state.directional,K.directionalLightShadows.value=b.state.directionalShadow,K.spotLights.value=b.state.spot,K.spotLightShadows.value=b.state.spotShadow,K.rectAreaLights.value=b.state.rectArea,K.ltc_1.value=b.state.rectAreaLTC1,K.ltc_2.value=b.state.rectAreaLTC2,K.pointLights.value=b.state.point,K.pointLightShadows.value=b.state.pointShadow,K.hemisphereLights.value=b.state.hemi,K.directionalShadowMap.value=b.state.directionalShadowMap,K.directionalShadowMatrix.value=b.state.directionalShadowMatrix,K.spotShadowMap.value=b.state.spotShadowMap,K.spotLightMatrix.value=b.state.spotLightMatrix,K.spotLightMap.value=b.state.spotLightMap,K.pointShadowMap.value=b.state.pointShadowMap,K.pointShadowMatrix.value=b.state.pointShadowMatrix),C.currentProgram=ne,C.uniformsList=null,ne}function Ya(u){if(u.uniformsList===null){const _=u.currentProgram.getUniforms();u.uniformsList=Ps.seqWithValue(_.seq,u.uniforms)}return u.uniformsList}function qa(u,_){const T=be.get(u);T.outputColorSpace=_.outputColorSpace,T.batching=_.batching,T.batchingColor=_.batchingColor,T.instancing=_.instancing,T.instancingColor=_.instancingColor,T.instancingMorph=_.instancingMorph,T.skinning=_.skinning,T.morphTargets=_.morphTargets,T.morphNormals=_.morphNormals,T.morphColors=_.morphColors,T.morphTargetsCount=_.morphTargetsCount,T.numClippingPlanes=_.numClippingPlanes,T.numIntersection=_.numClipIntersection,T.vertexAlphas=_.vertexAlphas,T.vertexTangents=_.vertexTangents,T.toneMapping=_.toneMapping}function $a(u,_,T,C,b){_.isScene!==!0&&(_=we),Xe.resetTextureUnits();const A=_.fog,V=C.isMeshStandardMaterial?_.environment:null,k=G===null?w.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:tn,z=(C.isMeshStandardMaterial?Rt:Lt).get(C.envMap||V),q=C.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,ne=!!T.attributes.tangent&&(!!C.normalMap||C.anisotropy>0),K=!!T.morphAttributes.position,ce=!!T.morphAttributes.normal,_e=!!T.morphAttributes.color;let he=di;C.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(he=w.toneMapping);const fe=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,Te=fe!==void 0?fe.length:0,Se=be.get(C),We=p.state.lights;if(Je===!0&&(Z===!0||u!==M)){const wt=u===M&&C.id===y;ve.setState(C,u,wt)}let Ve=!1;C.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==We.state.version||Se.outputColorSpace!==k||b.isBatchedMesh&&Se.batching===!1||!b.isBatchedMesh&&Se.batching===!0||b.isBatchedMesh&&Se.batchingColor===!0&&b.colorTexture===null||b.isBatchedMesh&&Se.batchingColor===!1&&b.colorTexture!==null||b.isInstancedMesh&&Se.instancing===!1||!b.isInstancedMesh&&Se.instancing===!0||b.isSkinnedMesh&&Se.skinning===!1||!b.isSkinnedMesh&&Se.skinning===!0||b.isInstancedMesh&&Se.instancingColor===!0&&b.instanceColor===null||b.isInstancedMesh&&Se.instancingColor===!1&&b.instanceColor!==null||b.isInstancedMesh&&Se.instancingMorph===!0&&b.morphTexture===null||b.isInstancedMesh&&Se.instancingMorph===!1&&b.morphTexture!==null||Se.envMap!==z||C.fog===!0&&Se.fog!==A||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==ve.numPlanes||Se.numIntersection!==ve.numIntersection)||Se.vertexAlphas!==q||Se.vertexTangents!==ne||Se.morphTargets!==K||Se.morphNormals!==ce||Se.morphColors!==_e||Se.toneMapping!==he||Se.morphTargetsCount!==Te)&&(Ve=!0):(Ve=!0,Se.__version=C.version);let et=Se.currentProgram;Ve===!0&&(et=ar(C,_,b));let Ye=!1,ct=!1,Ct=!1;const $e=et.getUniforms(),je=Se.uniforms;if(Ae.useProgram(et.program)&&(Ye=!0,ct=!0,Ct=!0),C.id!==y&&(y=C.id,ct=!0),Ye||M!==u){Ae.buffers.depth.getReversed()&&u.reversedDepth!==!0&&(u._reversedDepth=!0,u.updateProjectionMatrix()),$e.setValue(P,"projectionMatrix",u.projectionMatrix),$e.setValue(P,"viewMatrix",u.matrixWorldInverse);const Nt=$e.map.cameraPosition;Nt!==void 0&&Nt.setValue(P,Me.setFromMatrixPosition(u.matrixWorld)),Ce.logarithmicDepthBuffer&&$e.setValue(P,"logDepthBufFC",2/(Math.log(u.far+1)/Math.LN2)),(C.isMeshPhongMaterial||C.isMeshToonMaterial||C.isMeshLambertMaterial||C.isMeshBasicMaterial||C.isMeshStandardMaterial||C.isShaderMaterial)&&$e.setValue(P,"isOrthographic",u.isOrthographicCamera===!0),M!==u&&(M=u,ct=!0,Ct=!0)}if(b.isSkinnedMesh){$e.setOptional(P,b,"bindMatrix"),$e.setOptional(P,b,"bindMatrixInverse");const wt=b.skeleton;wt&&(wt.boneTexture===null&&wt.computeBoneTexture(),$e.setValue(P,"boneTexture",wt.boneTexture,Xe))}b.isBatchedMesh&&($e.setOptional(P,b,"batchingTexture"),$e.setValue(P,"batchingTexture",b._matricesTexture,Xe),$e.setOptional(P,b,"batchingIdTexture"),$e.setValue(P,"batchingIdTexture",b._indirectTexture,Xe),$e.setOptional(P,b,"batchingColorTexture"),b._colorsTexture!==null&&$e.setValue(P,"batchingColorTexture",b._colorsTexture,Xe));const at=T.morphAttributes;if((at.position!==void 0||at.normal!==void 0||at.color!==void 0)&&pe.update(b,T,et),(ct||Se.receiveShadow!==b.receiveShadow)&&(Se.receiveShadow=b.receiveShadow,$e.setValue(P,"receiveShadow",b.receiveShadow)),C.isMeshGouraudMaterial&&C.envMap!==null&&(je.envMap.value=z,je.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1),C.isMeshStandardMaterial&&C.envMap===null&&_.environment!==null&&(je.envMapIntensity.value=_.environmentIntensity),ct&&($e.setValue(P,"toneMappingExposure",w.toneMappingExposure),Se.needsLights&&Za(je,Ct),A&&C.fog===!0&&le.refreshFogUniforms(je,A),le.refreshMaterialUniforms(je,C,J,ae,p.state.transmissionRenderTarget[u.id]),Ps.upload(P,Ya(Se),je,Xe)),C.isShaderMaterial&&C.uniformsNeedUpdate===!0&&(Ps.upload(P,Ya(Se),je,Xe),C.uniformsNeedUpdate=!1),C.isSpriteMaterial&&$e.setValue(P,"center",b.center),$e.setValue(P,"modelViewMatrix",b.modelViewMatrix),$e.setValue(P,"normalMatrix",b.normalMatrix),$e.setValue(P,"modelMatrix",b.matrixWorld),C.isShaderMaterial||C.isRawShaderMaterial){const wt=C.uniformsGroups;for(let Nt=0,ln=wt.length;Nt<ln;Nt++){const En=wt[Nt];ze.update(En,et),ze.bind(En,et)}}return et}function Za(u,_){u.ambientLightColor.needsUpdate=_,u.lightProbe.needsUpdate=_,u.directionalLights.needsUpdate=_,u.directionalLightShadows.needsUpdate=_,u.pointLights.needsUpdate=_,u.pointLightShadows.needsUpdate=_,u.spotLights.needsUpdate=_,u.spotLightShadows.needsUpdate=_,u.rectAreaLights.needsUpdate=_,u.hemisphereLights.needsUpdate=_}function mo(u){return u.isMeshLambertMaterial||u.isMeshToonMaterial||u.isMeshPhongMaterial||u.isMeshStandardMaterial||u.isShadowMaterial||u.isShaderMaterial&&u.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(u,_,T){const C=be.get(u);C.__autoAllocateDepthBuffer=u.resolveDepthBuffer===!1,C.__autoAllocateDepthBuffer===!1&&(C.__useRenderToTexture=!1),be.get(u.texture).__webglTexture=_,be.get(u.depthTexture).__webglTexture=C.__autoAllocateDepthBuffer?void 0:T,C.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(u,_){const T=be.get(u);T.__webglFramebuffer=_,T.__useDefaultFramebuffer=_===void 0};const Zn=P.createFramebuffer();this.setRenderTarget=function(u,_=0,T=0){G=u,N=_,O=T;let C=!0,b=null,A=!1,V=!1;if(u){const z=be.get(u);if(z.__useDefaultFramebuffer!==void 0)Ae.bindFramebuffer(P.FRAMEBUFFER,null),C=!1;else if(z.__webglFramebuffer===void 0)Xe.setupRenderTarget(u);else if(z.__hasExternalTextures)Xe.rebindTextures(u,be.get(u.texture).__webglTexture,be.get(u.depthTexture).__webglTexture);else if(u.depthBuffer){const K=u.depthTexture;if(z.__boundDepthTexture!==K){if(K!==null&&be.has(K)&&(u.width!==K.image.width||u.height!==K.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Xe.setupDepthRenderbuffer(u)}}const q=u.texture;(q.isData3DTexture||q.isDataArrayTexture||q.isCompressedArrayTexture)&&(V=!0);const ne=be.get(u).__webglFramebuffer;u.isWebGLCubeRenderTarget?(Array.isArray(ne[_])?b=ne[_][T]:b=ne[_],A=!0):u.samples>0&&Xe.useMultisampledRTT(u)===!1?b=be.get(u).__webglMultisampledFramebuffer:Array.isArray(ne)?b=ne[T]:b=ne,B.copy(u.viewport),X.copy(u.scissor),j=u.scissorTest}else B.copy(De).multiplyScalar(J).floor(),X.copy(Ge).multiplyScalar(J).floor(),j=nt;if(T!==0&&(b=Zn),Ae.bindFramebuffer(P.FRAMEBUFFER,b)&&C&&Ae.drawBuffers(u,b),Ae.viewport(B),Ae.scissor(X),Ae.setScissorTest(j),A){const z=be.get(u.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+_,z.__webglTexture,T)}else if(V){const z=_;for(let q=0;q<u.textures.length;q++){const ne=be.get(u.textures[q]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+q,ne.__webglTexture,T,z)}}else if(u!==null&&T!==0){const z=be.get(u.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,z.__webglTexture,T)}y=-1},this.readRenderTargetPixels=function(u,_,T,C,b,A,V,k=0){if(!(u&&u.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let z=be.get(u).__webglFramebuffer;if(u.isWebGLCubeRenderTarget&&V!==void 0&&(z=z[V]),z){Ae.bindFramebuffer(P.FRAMEBUFFER,z);try{const q=u.textures[k],ne=q.format,K=q.type;if(!Ce.textureFormatReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ce.textureTypeReadable(K)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}_>=0&&_<=u.width-C&&T>=0&&T<=u.height-b&&(u.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+k),P.readPixels(_,T,C,b,Oe.convert(ne),Oe.convert(K),A))}finally{const q=G!==null?be.get(G).__webglFramebuffer:null;Ae.bindFramebuffer(P.FRAMEBUFFER,q)}}},this.readRenderTargetPixelsAsync=async function(u,_,T,C,b,A,V,k=0){if(!(u&&u.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let z=be.get(u).__webglFramebuffer;if(u.isWebGLCubeRenderTarget&&V!==void 0&&(z=z[V]),z)if(_>=0&&_<=u.width-C&&T>=0&&T<=u.height-b){Ae.bindFramebuffer(P.FRAMEBUFFER,z);const q=u.textures[k],ne=q.format,K=q.type;if(!Ce.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ce.textureTypeReadable(K))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ce=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,ce),P.bufferData(P.PIXEL_PACK_BUFFER,A.byteLength,P.STREAM_READ),u.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+k),P.readPixels(_,T,C,b,Oe.convert(ne),Oe.convert(K),0);const _e=G!==null?be.get(G).__webglFramebuffer:null;Ae.bindFramebuffer(P.FRAMEBUFFER,_e);const he=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Kp(P,he,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,ce),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,A),P.deleteBuffer(ce),P.deleteSync(he),A}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(u,_=null,T=0){const C=Math.pow(2,-T),b=Math.floor(u.image.width*C),A=Math.floor(u.image.height*C),V=_!==null?_.x:0,k=_!==null?_.y:0;Xe.setTexture2D(u,0),P.copyTexSubImage2D(P.TEXTURE_2D,T,0,0,V,k,b,A),Ae.unbindTexture()};const zn=P.createFramebuffer(),m=P.createFramebuffer();this.copyTextureToTexture=function(u,_,T=null,C=null,b=0,A=null){A===null&&(b!==0?(Da("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),A=b,b=0):A=0);let V,k,z,q,ne,K,ce,_e,he;const fe=u.isCompressedTexture?u.mipmaps[A]:u.image;if(T!==null)V=T.max.x-T.min.x,k=T.max.y-T.min.y,z=T.isBox3?T.max.z-T.min.z:1,q=T.min.x,ne=T.min.y,K=T.isBox3?T.min.z:0;else{const at=Math.pow(2,-b);V=Math.floor(fe.width*at),k=Math.floor(fe.height*at),u.isDataArrayTexture?z=fe.depth:u.isData3DTexture?z=Math.floor(fe.depth*at):z=1,q=0,ne=0,K=0}C!==null?(ce=C.x,_e=C.y,he=C.z):(ce=0,_e=0,he=0);const Te=Oe.convert(_.format),Se=Oe.convert(_.type);let We;_.isData3DTexture?(Xe.setTexture3D(_,0),We=P.TEXTURE_3D):_.isDataArrayTexture||_.isCompressedArrayTexture?(Xe.setTexture2DArray(_,0),We=P.TEXTURE_2D_ARRAY):(Xe.setTexture2D(_,0),We=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,_.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,_.unpackAlignment);const Ve=P.getParameter(P.UNPACK_ROW_LENGTH),et=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Ye=P.getParameter(P.UNPACK_SKIP_PIXELS),ct=P.getParameter(P.UNPACK_SKIP_ROWS),Ct=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,fe.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,fe.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,q),P.pixelStorei(P.UNPACK_SKIP_ROWS,ne),P.pixelStorei(P.UNPACK_SKIP_IMAGES,K);const $e=u.isDataArrayTexture||u.isData3DTexture,je=_.isDataArrayTexture||_.isData3DTexture;if(u.isDepthTexture){const at=be.get(u),wt=be.get(_),Nt=be.get(at.__renderTarget),ln=be.get(wt.__renderTarget);Ae.bindFramebuffer(P.READ_FRAMEBUFFER,Nt.__webglFramebuffer),Ae.bindFramebuffer(P.DRAW_FRAMEBUFFER,ln.__webglFramebuffer);for(let En=0;En<z;En++)$e&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,be.get(u).__webglTexture,b,K+En),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,be.get(_).__webglTexture,A,he+En)),P.blitFramebuffer(q,ne,V,k,ce,_e,V,k,P.DEPTH_BUFFER_BIT,P.NEAREST);Ae.bindFramebuffer(P.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(b!==0||u.isRenderTargetTexture||be.has(u)){const at=be.get(u),wt=be.get(_);Ae.bindFramebuffer(P.READ_FRAMEBUFFER,zn),Ae.bindFramebuffer(P.DRAW_FRAMEBUFFER,m);for(let Nt=0;Nt<z;Nt++)$e?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,at.__webglTexture,b,K+Nt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,at.__webglTexture,b),je?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,wt.__webglTexture,A,he+Nt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,wt.__webglTexture,A),b!==0?P.blitFramebuffer(q,ne,V,k,ce,_e,V,k,P.COLOR_BUFFER_BIT,P.NEAREST):je?P.copyTexSubImage3D(We,A,ce,_e,he+Nt,q,ne,V,k):P.copyTexSubImage2D(We,A,ce,_e,q,ne,V,k);Ae.bindFramebuffer(P.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else je?u.isDataTexture||u.isData3DTexture?P.texSubImage3D(We,A,ce,_e,he,V,k,z,Te,Se,fe.data):_.isCompressedArrayTexture?P.compressedTexSubImage3D(We,A,ce,_e,he,V,k,z,Te,fe.data):P.texSubImage3D(We,A,ce,_e,he,V,k,z,Te,Se,fe):u.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,A,ce,_e,V,k,Te,Se,fe.data):u.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,A,ce,_e,fe.width,fe.height,Te,fe.data):P.texSubImage2D(P.TEXTURE_2D,A,ce,_e,V,k,Te,Se,fe);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ve),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,et),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ye),P.pixelStorei(P.UNPACK_SKIP_ROWS,ct),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ct),A===0&&_.generateMipmaps&&P.generateMipmap(We),Ae.unbindTexture()},this.initRenderTarget=function(u){be.get(u).__webglFramebuffer===void 0&&Xe.setupRenderTarget(u)},this.initTexture=function(u){u.isCubeTexture?Xe.setTextureCube(u,0):u.isData3DTexture?Xe.setTexture3D(u,0):u.isDataArrayTexture||u.isCompressedArrayTexture?Xe.setTexture2DArray(u,0):Xe.setTexture2D(u,0),Ae.unbindTexture()},this.resetState=function(){N=0,O=0,G=null,Ae.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}}/**
 * postprocessing v6.39.1 build Fri Apr 17 2026
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2026 Raoul van Rüschen
 * @license Zlib
 */var T_=(()=>{const n=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),t=new Oi;return t.setAttribute("position",new An(n,3)),t.setAttribute("uv",new An(e,2)),t})(),Sn=class Jc{static get fullscreenGeometry(){return T_}constructor(e="Pass",t=new jc,i=new yd){this.name=e,this.renderer=null,this.scene=t,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthBlit=!1,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const t=this.fullscreenMaterial;t!==null&&(t.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let t=this.screen;t!==null?t.material=e:(t=new Wn(Jc.fullscreenGeometry,e),t.frustumCulled=!1,this.scene===null&&(this.scene=new jc),this.scene.add(t),this.screen=t)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,t=La){}render(e,t,i,r,a){throw new Error("Render method not implemented!")}setSize(e,t){}initialize(e,t,i){}dispose(){for(const e of Object.keys(this)){const t=this[e];(t instanceof Xt||t instanceof Bn||t instanceof Pt||t instanceof Jc)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},y_=class extends Sn{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(n,e,t,i,r){const a=n.state.buffers.stencil;a.setLocked(!1),a.setTest(!1)}},M_=`#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`,zl="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",w_=class extends dn{constructor(){super({name:"CopyMaterial",defines:{COLOR_SPACE_CONVERSION:"1",DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new U(null),depthBuffer:new U(null),channelWeights:new U(null),opacity:new U(1)},blending:wn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:M_,vertexShader:zl}),this.depthFunc=Us}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(n){const e=n!==null;this.colorWrite!==e&&(e?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=e,this.needsUpdate=!0),this.uniforms.inputBuffer.value=n}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(n){const e=n!==null;this.depthWrite!==e&&(e?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=e,this.depthWrite=e,this.needsUpdate=!0),this.uniforms.depthBuffer.value=n}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}get colorSpaceConversion(){return this.defines.COLOR_SPACE_CONVERSION!==void 0}set colorSpaceConversion(n){this.colorSpaceConversion!==n&&(n?this.defines.COLOR_SPACE_CONVERSION=!0:delete this.defines.COLOR_SPACE_CONVERSION,this.needsUpdate=!0)}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(n){n!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=n):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(n){this.uniforms.inputBuffer.value=n}getOpacity(n){return this.uniforms.opacity.value}setOpacity(n){this.uniforms.opacity.value=n}},Dd=class extends Sn{constructor(n,e=!0){super("CopyPass"),this.fullscreenMaterial=new w_,this.needsSwap=!1,this.renderTarget=n,n===void 0&&(this.renderTarget=new Xt(1,1,{minFilter:pt,magFilter:pt,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(n){this.autoResize=n}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(n){this.autoResize=n}render(n,e,t,i,r){this.fullscreenMaterial.inputBuffer=e.texture,n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){this.autoResize&&this.renderTarget.setSize(n,e)}initialize(n,e,t){t!==void 0&&(this.renderTarget.texture.type=t,t!==$t?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":n!==null&&n.outputColorSpace===Dt&&(this.renderTarget.texture.colorSpace=Dt))}},dh=new ft,Id=class extends Sn{constructor(n=!0,e=!0,t=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=n,this.depth=e,this.stencil=t,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(n,e,t){this.color=n,this.depth=e,this.stencil=t}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(n){this.overrideClearColor=n}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(n){this.overrideClearAlpha=n}render(n,e,t,i,r){const a=this.overrideClearColor,s=this.overrideClearAlpha,o=n.getClearAlpha(),c=a!==null,l=s>=0;c?(n.getClearColor(dh),n.setClearColor(a,l?s:o)):l&&n.setClearAlpha(s),n.setRenderTarget(this.renderToScreen?null:e),n.clear(this.color,this.depth,this.stencil),c?n.setClearColor(dh,o):l&&n.setClearAlpha(o)}},A_=class extends Sn{constructor(n,e){super("MaskPass",n,e),this.needsSwap=!1,this.clearPass=new Id(!1,!1,!0),this.inverse=!1}set mainScene(n){this.scene=n}set mainCamera(n){this.camera=n}get inverted(){return this.inverse}set inverted(n){this.inverse=n}get clear(){return this.clearPass.enabled}set clear(n){this.clearPass.enabled=n}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(n){this.inverted=n}render(n,e,t,i,r){const a=n.getContext(),s=n.state.buffers,o=this.scene,c=this.camera,l=this.clearPass,h=this.inverted?0:1,d=1-h;s.color.setMask(!1),s.depth.setMask(!1),s.color.setLocked(!0),s.depth.setLocked(!0),s.stencil.setTest(!0),s.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),s.stencil.setFunc(a.ALWAYS,h,4294967295),s.stencil.setClear(d),s.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?l.render(n,null):(l.render(n,e),l.render(n,t))),this.renderToScreen?(n.setRenderTarget(null),n.render(o,c)):(n.setRenderTarget(e),n.render(o,c),n.setRenderTarget(t),n.render(o,c)),s.color.setLocked(!1),s.depth.setLocked(!1),s.stencil.setLocked(!1),s.stencil.setFunc(a.EQUAL,1,4294967295),s.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),s.stencil.setLocked(!0)}},Xo=1/1e3,R_=1e3,C_=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(n){typeof document<"u"&&document.hidden!==void 0&&(n?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=n)}get delta(){return this._delta*Xo}get fixedDelta(){return this._fixedDelta*Xo}set fixedDelta(n){this._fixedDelta=n*R_}get elapsed(){return this._elapsed*Xo}update(n){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(n!==void 0?n:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(n){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},b_=class{constructor(n=null,{depthBuffer:e=!0,stencilBuffer:t=!1,multisampling:i=0,frameBufferType:r}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,t,r,i),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new Dd,this.depthTexture=null,this.depthRenderTarget=null,this.passes=[],this.timer=new C_,this.autoRenderToScreen=!0,this.setRenderer(n)}get multisampling(){return this.inputBuffer.samples}set multisampling(n){const e=this.inputBuffer,t=this.multisampling;t>0&&n>0?(this.inputBuffer.samples=n,this.outputBuffer.samples=n,this.inputBuffer.dispose(),this.outputBuffer.dispose()):t!==n&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,n),this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(n){if(this.renderer=n,n!==null){const e=n.getSize(new Pe),t=n.getContext().getContextAttributes().alpha,i=this.inputBuffer.texture.type;i===$t&&n.outputColorSpace===Dt&&(this.inputBuffer.texture.colorSpace=Dt,this.outputBuffer.texture.colorSpace=Dt,this.inputBuffer.dispose(),this.outputBuffer.dispose()),n.autoClear=!1,this.setSize(e.width,e.height);for(const r of this.passes)r.initialize(n,t,i)}}replaceRenderer(n,e=!0){const t=this.renderer,i=t.domElement.parentNode;return this.setRenderer(n),e&&i!==null&&(i.removeChild(t.domElement),i.appendChild(n.domElement)),t}createDepthTexture(){const n=this.inputBuffer,e=new Bl;this.depthTexture=e,n.stencilBuffer?(e.format=kr,e.type=Gr):e.type=qt;const t=e.clone();return t.name="EffectComposer.StableDepth",this.depthRenderTarget=new Xt(n.width,n.height,{depthBuffer:!0,stencilBuffer:n.stencilBuffer,depthTexture:t}),t}blitDepthBuffer(n){const e=this.renderer,t=this.depthRenderTarget,i=e.properties,r=e.getContext();e.setRenderTarget(t);const a=i.get(n).__webglFramebuffer,s=i.get(t).__webglFramebuffer,o=n.stencilBuffer?r.DEPTH_BUFFER_BIT|r.STENCIL_BUFFER_BIT:r.DEPTH_BUFFER_BIT;r.bindFramebuffer(r.READ_FRAMEBUFFER,a),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,s),r.blitFramebuffer(0,0,n.width,n.height,0,0,t.width,t.height,o,r.NEAREST),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),e.setRenderTarget(null)}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.depthRenderTarget.dispose(),this.depthRenderTarget=null,this.inputBuffer.depthTexture=null,this.outputBuffer.depthTexture=null;for(const n of this.passes)n.setDepthTexture(null)}}createBuffer(n,e,t,i){const r=this.renderer,a=r===null?new Pe:r.getDrawingBufferSize(new Pe),s={minFilter:pt,magFilter:pt,stencilBuffer:e,depthBuffer:n,type:t},o=new Xt(a.width,a.height,s);return i>0&&(o.samples=i),t===$t&&r!==null&&r.outputColorSpace===Dt&&(o.texture.colorSpace=Dt),o.texture.name="EffectComposer.Buffer",o.texture.generateMipmaps=!1,o}setMainScene(n){for(const e of this.passes)e.mainScene=n}setMainCamera(n){for(const e of this.passes)e.mainCamera=n}addPass(n,e){const t=this.passes,i=this.renderer,r=i.getDrawingBufferSize(new Pe),a=i.getContext().getContextAttributes().alpha,s=this.inputBuffer.texture.type;if(n.renderer=i,n.setSize(r.width,r.height),n.initialize(i,a,s),this.autoRenderToScreen&&(t.length>0&&(t[t.length-1].renderToScreen=!1),n.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?t.splice(e,0,n):t.push(n),this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!0),n.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const o=this.createDepthTexture();for(n of t)n.setDepthTexture(o)}else{const o=this.depthRenderTarget.depthTexture;n.setDepthTexture(o)}}removePass(n){const e=this.passes,t=e.indexOf(n);if(t!==-1&&e.splice(t,1).length>0){if(this.depthTexture!==null){const a=(o,c)=>o||c.needsDepthTexture;if(!e.reduce(a,!1)){const o=this.depthRenderTarget.depthTexture;n.getDepthTexture()===o&&n.setDepthTexture(null),this.deleteDepthTexture()}}this.autoRenderToScreen&&t===e.length&&(n.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const n=this.passes;this.deleteDepthTexture(),n.length>0&&(this.autoRenderToScreen&&(n[n.length-1].renderToScreen=!1),this.passes=[])}render(n){const e=this.renderer,t=this.copyPass;let i=this.inputBuffer,r=this.outputBuffer,a,s=!1;n===void 0&&(this.timer.update(),n=this.timer.getDelta());for(const o of this.passes)if(o.enabled){if(i.depthTexture=this.depthTexture,r.depthTexture=null,o.render(e,i,r,n,s),o.needsDepthBlit&&this.depthRenderTarget!==null&&this.blitDepthBuffer(i),o.needsSwap){if(s){t.renderToScreen=o.renderToScreen;const c=e.getContext(),l=e.state.buffers.stencil;l.setFunc(c.NOTEQUAL,1,4294967295),t.render(e,i,r,n,s),l.setFunc(c.EQUAL,1,4294967295)}a=i,i=r,r=a}o instanceof A_?s=!0:o instanceof y_&&(s=!1)}}setSize(n,e,t){const i=this.renderer,r=i.getSize(new Pe);(n===void 0||e===void 0)&&(n=r.width,e=r.height),(r.width!==n||r.height!==e)&&i.setSize(n,e,t);const a=i.getDrawingBufferSize(new Pe);this.inputBuffer.setSize(a.width,a.height),this.outputBuffer.setSize(a.width,a.height),this.depthRenderTarget!==null&&this.depthRenderTarget.setSize(a.width,a.height);for(const s of this.passes)s.setSize(a.width,a.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const n of this.passes)n.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),Sn.fullscreenGeometry.dispose()}},mi={NONE:0,DEPTH:1,CONVOLUTION:2},vt={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},D_=class{constructor(){this.shaderParts=new Map([[vt.FRAGMENT_HEAD,null],[vt.FRAGMENT_MAIN_UV,null],[vt.FRAGMENT_MAIN_IMAGE,null],[vt.VERTEX_HEAD,null],[vt.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=mi.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=tn}},Yo=!1,fh=class{constructor(n=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(n),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let t;if(e.material.flatShading)switch(e.material.side){case _n:t=this.materialsFlatShadedDoubleSide;break;case Wt:t=this.materialsFlatShadedBackSide;break;default:t=this.materialsFlatShaded;break}else switch(e.material.side){case _n:t=this.materialsDoubleSide;break;case Wt:t=this.materialsBackSide;break;default:t=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=t[2]:e.isInstancedMesh?e.material=t[1]:e.material=t[0],++this.meshCount}}}cloneMaterial(n){if(!(n instanceof dn))return n.clone();const e=n.uniforms,t=new Map;for(const r in e){const a=e[r].value;a.isRenderTargetTexture&&(e[r].value=null,t.set(r,a))}const i=n.clone();for(const r of t)e[r[0]].value=r[1],i.uniforms[r[0]].value=r[1];return i}setMaterial(n){if(this.disposeMaterials(),this.material=n,n!==null){const e=this.materials=[this.cloneMaterial(n),this.cloneMaterial(n),this.cloneMaterial(n)];for(const t of e)t.uniforms=Object.assign({},n.uniforms),t.side=vi;e[2].skinning=!0,this.materialsBackSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.side=Wt,i}),this.materialsDoubleSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.side=_n,i}),this.materialsFlatShaded=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i}),this.materialsFlatShadedBackSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i.side=Wt,i}),this.materialsFlatShadedDoubleSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i.side=_n,i})}}render(n,e,t){const i=n.shadowMap.enabled;if(n.shadowMap.enabled=!1,Yo){const r=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),n.render(e,t);for(const a of r)a[0].material=a[1];this.meshCount!==r.size&&r.clear()}else{const r=e.overrideMaterial;e.overrideMaterial=this.material,n.render(e,t),e.overrideMaterial=r}n.shadowMap.enabled=i}disposeMaterials(){if(this.material!==null){const n=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of n)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return Yo}static set workaroundEnabled(n){Yo=n}},Ci=-1,gi=class extends qn{constructor(n=null,e=Ci,t=Ci,i=1){super(),n!==null&&this.addEventListener("change",()=>n.setSize(this.baseSize.width,this.baseSize.height)),this.baseSize=new Pe(1,1),this.preferredSize=new Pe(e,t),this.target=this.preferredSize,this.s=i,this.effectiveSize=new Pe,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const n=this.baseSize,e=this.preferredSize,t=this.effectiveSize,i=this.scale;e.width!==Ci?t.width=e.width:e.height!==Ci?t.width=Math.round(e.height*(n.width/Math.max(n.height,1))):t.width=Math.round(n.width*i),e.height!==Ci?t.height=e.height:e.width!==Ci?t.height=Math.round(e.width/Math.max(n.width/Math.max(n.height,1),1)):t.height=Math.round(n.height*i)}get width(){return this.effectiveSize.width}set width(n){this.preferredWidth=n}get height(){return this.effectiveSize.height}set height(n){this.preferredHeight=n}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(n){this.s!==n&&(this.s=n,this.preferredSize.setScalar(Ci),this.dispatchEvent({type:"change"}))}getScale(){return this.scale}setScale(n){this.scale=n}get baseWidth(){return this.baseSize.width}set baseWidth(n){this.baseSize.width!==n&&(this.baseSize.width=n,this.dispatchEvent({type:"change"}))}getBaseWidth(){return this.baseWidth}setBaseWidth(n){this.baseWidth=n}get baseHeight(){return this.baseSize.height}set baseHeight(n){this.baseSize.height!==n&&(this.baseSize.height=n,this.dispatchEvent({type:"change"}))}getBaseHeight(){return this.baseHeight}setBaseHeight(n){this.baseHeight=n}setBaseSize(n,e){(this.baseSize.width!==n||this.baseSize.height!==e)&&(this.baseSize.set(n,e),this.dispatchEvent({type:"change"}))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(n){this.preferredSize.width!==n&&(this.preferredSize.width=n,this.dispatchEvent({type:"change"}))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(n){this.preferredWidth=n}get preferredHeight(){return this.preferredSize.height}set preferredHeight(n){this.preferredSize.height!==n&&(this.preferredSize.height=n,this.dispatchEvent({type:"change"}))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(n){this.preferredHeight=n}setPreferredSize(n,e){(this.preferredSize.width!==n||this.preferredSize.height!==e)&&(this.preferredSize.set(n,e),this.dispatchEvent({type:"change"}))}copy(n){this.s=n.scale,this.baseSize.set(n.baseWidth,n.baseHeight),this.preferredSize.set(n.preferredWidth,n.preferredHeight),this.dispatchEvent({type:"change"})}static get AUTO_SIZE(){return Ci}},st={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},I_="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",P_="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",L_="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",N_="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",U_="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",O_="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",F_="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",B_="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",H_="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",z_="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",G_="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",k_="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",V_="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",W_="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",X_="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Y_="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",q_="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",$_="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Z_="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",j_="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",K_="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",J_="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Q_="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",eS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",tS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",nS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",iS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",rS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",aS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",sS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",oS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",cS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",lS=new Map([[st.ADD,I_],[st.ALPHA,P_],[st.AVERAGE,L_],[st.COLOR,N_],[st.COLOR_BURN,U_],[st.COLOR_DODGE,O_],[st.DARKEN,F_],[st.DIFFERENCE,B_],[st.DIVIDE,H_],[st.DST,null],[st.EXCLUSION,z_],[st.HARD_LIGHT,G_],[st.HARD_MIX,k_],[st.HUE,V_],[st.INVERT,W_],[st.INVERT_RGB,X_],[st.LIGHTEN,Y_],[st.LINEAR_BURN,q_],[st.LINEAR_DODGE,$_],[st.LINEAR_LIGHT,Z_],[st.LUMINOSITY,j_],[st.MULTIPLY,K_],[st.NEGATION,J_],[st.NORMAL,Q_],[st.OVERLAY,eS],[st.PIN_LIGHT,tS],[st.REFLECT,nS],[st.SATURATION,iS],[st.SCREEN,rS],[st.SOFT_LIGHT,aS],[st.SRC,sS],[st.SUBTRACT,oS],[st.VIVID_LIGHT,cS]]),uS=class extends qn{constructor(n,e=1){super(),this._blendFunction=n,this.opacity=new U(e)}getOpacity(){return this.opacity.value}setOpacity(n){this.opacity.value=n}get blendFunction(){return this._blendFunction}set blendFunction(n){this._blendFunction=n,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(n){this.blendFunction=n}getShaderCode(){return lS.get(this.blendFunction)}},to=class extends qn{constructor(n,e,{attributes:t=mi.NONE,blendFunction:i=st.NORMAL,defines:r=new Map,uniforms:a=new Map,extensions:s=null,vertexShader:o=null}={}){super(),this.name=n,this.renderer=null,this.attributes=t,this.fragmentShader=e,this.vertexShader=o,this.defines=r,this.uniforms=a,this.extensions=s,this.blendMode=new uS(i),this.blendMode.addEventListener("change",c=>this.setChanged()),this._inputColorSpace=tn,this._outputColorSpace=nn}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(n){this._inputColorSpace=n,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n,this.setChanged()}set mainScene(n){}set mainCamera(n){}getName(){return this.name}setRenderer(n){this.renderer=n}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(n){this.attributes=n,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(n){this.fragmentShader=n,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(n){this.vertexShader=n,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(n,e=La){}update(n,e,t){}setSize(n,e){}initialize(n,e,t){}dispose(){for(const n of Object.keys(this)){const e=this[n];(e instanceof Xt||e instanceof Bn||e instanceof Pt||e instanceof Sn)&&this[n].dispose()}}},hS=`#include <common>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);float mask=1.0;
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);mask=low*high;
#elif defined(THRESHOLD)
mask=smoothstep(threshold,threshold+smoothing,l);
#endif
#ifdef COLOR
gl_FragColor=texel*mask;
#else
gl_FragColor=vec4(l*mask);
#endif
}`,dS=class extends dn{constructor(n=!1,e=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:$r.replace(/\D+/g,"")},uniforms:{inputBuffer:new U(null),threshold:new U(0),smoothing:new U(1),range:new U(null)},blending:wn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:hS,vertexShader:zl}),this.colorOutput=n,this.luminanceRange=e}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get threshold(){return this.uniforms.threshold.value}set threshold(n){this.smoothing>0||n>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=n}getThreshold(){return this.threshold}setThreshold(n){this.threshold=n}get smoothing(){return this.uniforms.smoothing.value}set smoothing(n){this.threshold>0||n>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=n}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(n){this.smoothing=n}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(n){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(n){n?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(n){return this.colorOutput}setColorOutputEnabled(n){this.colorOutput=n}get useRange(){return this.luminanceRange!==null}set useRange(n){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(n){n!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=n,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(n){this.luminanceRange=n}},fS=class extends Sn{constructor({renderTarget:n,luminanceRange:e,colorOutput:t,resolutionScale:i=1,width:r=gi.AUTO_SIZE,height:a=gi.AUTO_SIZE,resolutionX:s=r,resolutionY:o=a}={}){super("LuminancePass"),this.fullscreenMaterial=new dS(t,e),this.needsSwap=!1,this.renderTarget=n,this.renderTarget===void 0&&(this.renderTarget=new Xt(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");const c=this.resolution=new gi(this,s,o,i);c.addEventListener("change",l=>this.setSize(c.baseWidth,c.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(n,e,t,i,r){const a=this.fullscreenMaterial;a.inputBuffer=e.texture,n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height)}initialize(n,e,t){t!==void 0&&t!==$t&&(this.renderTarget.texture.type=t,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},Qc=class extends Sn{constructor(n,e="inputBuffer"){super("ShaderPass"),this.fullscreenMaterial=n,this.input=e}setInput(n){this.input=n}render(n,e,t,i,r){const a=this.fullscreenMaterial.uniforms;e!==null&&a!==void 0&&a[this.input]!==void 0&&(a[this.input].value=e.texture),n.setRenderTarget(this.renderToScreen?null:t),n.render(this.scene,this.camera)}initialize(n,e,t){t!==void 0&&t!==$t&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},Pd=class extends Sn{constructor(n,e,t=null){super("RenderPass",n,e),this.needsSwap=!1,this.needsDepthBlit=!0,this.clearPass=new Id,this.overrideMaterialManager=t===null?null:new fh(t),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(n){this.scene=n}set mainCamera(n){this.camera=n}get renderToScreen(){return super.renderToScreen}set renderToScreen(n){super.renderToScreen=n,this.clearPass.renderToScreen=n}get overrideMaterial(){const n=this.overrideMaterialManager;return n!==null?n.material:null}set overrideMaterial(n){const e=this.overrideMaterialManager;n!==null?e!==null?e.setMaterial(n):this.overrideMaterialManager=new fh(n):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(n){this.overrideMaterial=n}get clear(){return this.clearPass.enabled}set clear(n){this.clearPass.enabled=n}getSelection(){return this.selection}setSelection(n){this.selection=n}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(n){this.ignoreBackground=n}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(n){this.skipShadowMapUpdate=n}getClearPass(){return this.clearPass}render(n,e,t,i,r){const a=this.scene,s=this.camera,o=this.selection,c=s.layers.mask,l=a.background,h=n.shadowMap.autoUpdate,d=this.renderToScreen?null:e;o!==null&&s.layers.set(o.getLayer()),this.skipShadowMapUpdate&&(n.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(a.background=null),this.clearPass.enabled&&this.clearPass.render(n,e),n.setRenderTarget(d),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(n,a,s):n.render(a,s),s.layers.mask=c,a.background=l,n.shadowMap.autoUpdate=h}},un={LINEAR:0,REINHARD:1,REINHARD2:2,REINHARD2_ADAPTIVE:3,OPTIMIZED_CINEON:5,CINEON:5,ACES_FILMIC:6,AGX:7,NEUTRAL:8},pS=`#include <packing>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
uniform lowp sampler2D luminanceBuffer0;uniform lowp sampler2D luminanceBuffer1;uniform float minLuminance;uniform float deltaTime;uniform float tau;varying vec2 vUv;void main(){float l0=unpackRGBAToFloat(texture2D(luminanceBuffer0,vUv));
#if __VERSION__ < 300
float l1=texture2DLodEXT(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#else
float l1=textureLod(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#endif
l0=max(minLuminance,l0);l1=max(minLuminance,l1);float adaptedLum=l0+(l1-l0)*(1.0-exp(-deltaTime*tau));gl_FragColor=(adaptedLum==1.0)?vec4(1.0):packFloatToRGBA(adaptedLum);}`,mS=class extends dn{constructor(){super({name:"AdaptiveLuminanceMaterial",defines:{MIP_LEVEL_1X1:"0.0"},uniforms:{luminanceBuffer0:new U(null),luminanceBuffer1:new U(null),minLuminance:new U(.01),deltaTime:new U(0),tau:new U(1)},extensions:{shaderTextureLOD:!0},blending:wn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:pS,vertexShader:zl})}set luminanceBuffer0(n){this.uniforms.luminanceBuffer0.value=n}setLuminanceBuffer0(n){this.uniforms.luminanceBuffer0.value=n}set luminanceBuffer1(n){this.uniforms.luminanceBuffer1.value=n}setLuminanceBuffer1(n){this.uniforms.luminanceBuffer1.value=n}set mipLevel1x1(n){this.defines.MIP_LEVEL_1X1=n.toFixed(1),this.needsUpdate=!0}setMipLevel1x1(n){this.mipLevel1x1=n}set deltaTime(n){this.uniforms.deltaTime.value=n}setDeltaTime(n){this.uniforms.deltaTime.value=n}get minLuminance(){return this.uniforms.minLuminance.value}set minLuminance(n){this.uniforms.minLuminance.value=n}getMinLuminance(){return this.uniforms.minLuminance.value}setMinLuminance(n){this.uniforms.minLuminance.value=n}get adaptationRate(){return this.uniforms.tau.value}set adaptationRate(n){this.uniforms.tau.value=n}getAdaptationRate(){return this.uniforms.tau.value}setAdaptationRate(n){this.uniforms.tau.value=n}},gS=class extends Sn{constructor(n,{minLuminance:e=.01,adaptationRate:t=1}={}){super("AdaptiveLuminancePass"),this.fullscreenMaterial=new mS,this.needsSwap=!1,this.renderTargetPrevious=new Xt(1,1,{minFilter:Ot,magFilter:Ot,depthBuffer:!1}),this.renderTargetPrevious.texture.name="Luminance.Previous";const i=this.fullscreenMaterial;i.luminanceBuffer0=this.renderTargetPrevious.texture,i.luminanceBuffer1=n,i.minLuminance=e,i.adaptationRate=t,this.renderTargetAdapted=this.renderTargetPrevious.clone(),this.renderTargetAdapted.texture.name="Luminance.Adapted",this.copyPass=new Dd(this.renderTargetPrevious,!1)}get texture(){return this.renderTargetAdapted.texture}getTexture(){return this.renderTargetAdapted.texture}set mipLevel1x1(n){this.fullscreenMaterial.mipLevel1x1=n}get adaptationRate(){return this.fullscreenMaterial.adaptationRate}set adaptationRate(n){this.fullscreenMaterial.adaptationRate=n}render(n,e,t,i,r){this.fullscreenMaterial.deltaTime=i,n.setRenderTarget(this.renderToScreen?null:this.renderTargetAdapted),n.render(this.scene,this.camera),this.copyPass.render(n,this.renderTargetAdapted)}},vS=`#include <tonemapping_pars_fragment>
uniform float whitePoint;
#if TONE_MAPPING_MODE == 2 || TONE_MAPPING_MODE == 3
uniform float middleGrey;
#if TONE_MAPPING_MODE == 3
uniform lowp sampler2D luminanceBuffer;
#else
uniform float averageLuminance;
#endif
vec3 Reinhard2ToneMapping(vec3 color){color*=toneMappingExposure;float l=luminance(color);
#if TONE_MAPPING_MODE == 3
float lumAvg=unpackRGBAToFloat(texture2D(luminanceBuffer,vec2(0.5)));
#else
float lumAvg=averageLuminance;
#endif
float lumScaled=(l*middleGrey)/max(lumAvg,1e-6);float lumCompressed=lumScaled*(1.0+lumScaled/(whitePoint*whitePoint));lumCompressed/=(1.0+lumScaled);return clamp(lumCompressed*color,0.0,1.0);}
#elif TONE_MAPPING_MODE == 4
#define A 0.15
#define B 0.50
#define C 0.10
#define D 0.20
#define E 0.02
#define F 0.30
vec3 Uncharted2Helper(const in vec3 x){return((x*(A*x+C*B)+D*E)/(x*(A*x+B)+D*F))-E/F;}vec3 Uncharted2ToneMapping(vec3 color){color*=toneMappingExposure;return clamp(Uncharted2Helper(color)/Uncharted2Helper(vec3(whitePoint)),0.0,1.0);}
#endif
void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){
#if TONE_MAPPING_MODE == 2 || TONE_MAPPING_MODE == 3
outputColor=vec4(Reinhard2ToneMapping(inputColor.rgb),inputColor.a);
#elif TONE_MAPPING_MODE == 4
outputColor=vec4(Uncharted2ToneMapping(inputColor.rgb),inputColor.a);
#else
outputColor=vec4(toneMapping(inputColor.rgb),inputColor.a);
#endif
}`,_S=class extends to{constructor({blendFunction:n=st.SRC,adaptive:e=!1,mode:t=e?un.REINHARD2_ADAPTIVE:un.AGX,resolution:i=256,maxLuminance:r=4,whitePoint:a=r,middleGrey:s=.6,minLuminance:o=.01,averageLuminance:c=1,adaptationRate:l=1}={}){super("ToneMappingEffect",vS,{blendFunction:n,uniforms:new Map([["luminanceBuffer",new U(null)],["maxLuminance",new U(r)],["whitePoint",new U(a)],["middleGrey",new U(s)],["averageLuminance",new U(c)]])}),this.renderTargetLuminance=new Xt(1,1,{minFilter:ui,depthBuffer:!1}),this.renderTargetLuminance.texture.generateMipmaps=!0,this.renderTargetLuminance.texture.name="Luminance",this.luminancePass=new fS({renderTarget:this.renderTargetLuminance}),this.adaptiveLuminancePass=new gS(this.luminancePass.texture,{minLuminance:o,adaptationRate:l}),this.uniforms.get("luminanceBuffer").value=this.adaptiveLuminancePass.texture,this.resolution=i,this.mode=t}get mode(){return Number(this.defines.get("TONE_MAPPING_MODE"))}set mode(n){if(this.mode===n)return;const t=$r.replace(/\D+/g,"")>=168?"CineonToneMapping(texel)":"OptimizedCineonToneMapping(texel)";switch(this.defines.clear(),this.defines.set("TONE_MAPPING_MODE",n.toFixed(0)),n){case un.LINEAR:this.defines.set("toneMapping(texel)","LinearToneMapping(texel)");break;case un.REINHARD:this.defines.set("toneMapping(texel)","ReinhardToneMapping(texel)");break;case un.CINEON:case un.OPTIMIZED_CINEON:this.defines.set("toneMapping(texel)",t);break;case un.ACES_FILMIC:this.defines.set("toneMapping(texel)","ACESFilmicToneMapping(texel)");break;case un.AGX:this.defines.set("toneMapping(texel)","AgXToneMapping(texel)");break;case un.NEUTRAL:this.defines.set("toneMapping(texel)","NeutralToneMapping(texel)");break;default:this.defines.set("toneMapping(texel)","texel");break}this.adaptiveLuminancePass.enabled=n===un.REINHARD2_ADAPTIVE,this.setChanged()}getMode(){return this.mode}setMode(n){this.mode=n}get whitePoint(){return this.uniforms.get("whitePoint").value}set whitePoint(n){this.uniforms.get("whitePoint").value=n}get middleGrey(){return this.uniforms.get("middleGrey").value}set middleGrey(n){this.uniforms.get("middleGrey").value=n}get averageLuminance(){return this.uniforms.get("averageLuminance").value}set averageLuminance(n){this.uniforms.get("averageLuminance").value=n}get adaptiveLuminanceMaterial(){return this.adaptiveLuminancePass.fullscreenMaterial}getAdaptiveLuminanceMaterial(){return this.adaptiveLuminanceMaterial}get resolution(){return this.luminancePass.resolution.width}set resolution(n){const e=Math.max(0,Math.ceil(Math.log2(n))),t=Math.pow(2,e);this.luminancePass.resolution.setPreferredSize(t,t),this.adaptiveLuminanceMaterial.mipLevel1x1=e}getResolution(){return this.resolution}setResolution(n){this.resolution=n}get adaptive(){return this.mode===un.REINHARD2_ADAPTIVE}set adaptive(n){this.mode=n?un.REINHARD2_ADAPTIVE:un.REINHARD2}get adaptationRate(){return this.adaptiveLuminanceMaterial.adaptationRate}set adaptationRate(n){this.adaptiveLuminanceMaterial.adaptationRate=n}get distinction(){return console.warn(this.name,"distinction was removed."),1}set distinction(n){console.warn(this.name,"distinction was removed.")}update(n,e,t){this.adaptiveLuminancePass.enabled&&(this.luminancePass.render(n,e),this.adaptiveLuminancePass.render(n,null,null,t))}initialize(n,e,t){this.adaptiveLuminancePass.initialize(n,e,t)}},SS=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,xS="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",ES=class extends dn{constructor(n,e,t,i,r=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:$r.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new U(null),depthBuffer:new U(null),resolution:new U(new Pe),texelSize:new U(new Pe),cameraNear:new U(.3),cameraFar:new U(1e3),aspect:new U(1),time:new U(0)},blending:wn,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:r}),n&&this.setShaderParts(n),e&&this.setDefines(e),t&&this.setUniforms(t),this.copyCameraSettings(i)}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(n){this.uniforms.depthBuffer.value=n}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=La){this.depthBuffer=n,this.depthPacking=e}setShaderData(n){this.setShaderParts(n.shaderParts),this.setDefines(n.defines),this.setUniforms(n.uniforms),this.setExtensions(n.extensions)}setShaderParts(n){return this.fragmentShader=SS.replace(vt.FRAGMENT_HEAD,n.get(vt.FRAGMENT_HEAD)||"").replace(vt.FRAGMENT_MAIN_UV,n.get(vt.FRAGMENT_MAIN_UV)||"").replace(vt.FRAGMENT_MAIN_IMAGE,n.get(vt.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=xS.replace(vt.VERTEX_HEAD,n.get(vt.VERTEX_HEAD)||"").replace(vt.VERTEX_MAIN_SUPPORT,n.get(vt.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(n){for(const e of n.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(n){for(const e of n.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(n){this.extensions={};for(const e of n)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(n){this.encodeOutput!==n&&(n?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(n){return this.encodeOutput}setOutputEncodingEnabled(n){this.encodeOutput=n}get time(){return this.uniforms.time.value}set time(n){this.uniforms.time.value=n}setDeltaTime(n){this.uniforms.time.value+=n}adoptCameraSettings(n){this.copyCameraSettings(n)}copyCameraSettings(n){n&&(this.uniforms.cameraNear.value=n.near,this.uniforms.cameraFar.value=n.far,n instanceof vn?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(n,e){const t=this.uniforms;t.resolution.value.set(n,e),t.texelSize.value.set(1/n,1/e),t.aspect.value=n/e}static get Section(){return vt}};function ph(n,e,t){for(const i of e){const r="$1"+n+i.charAt(0).toUpperCase()+i.slice(1),a=new RegExp("([^\\.])(\\b"+i+"\\b)","g");for(const s of t.entries())s[1]!==null&&t.set(s[0],s[1].replace(a,r))}}function TS(n,e,t){let i=e.getFragmentShader(),r=e.getVertexShader();const a=i!==void 0&&/mainImage/.test(i),s=i!==void 0&&/mainUv/.test(i);if(t.attributes|=e.getAttributes(),i===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(s&&t.attributes&mi.CONVOLUTION)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!a&&!s)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const o=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,c=t.shaderParts;let l=c.get(vt.FRAGMENT_HEAD)||"",h=c.get(vt.FRAGMENT_MAIN_UV)||"",d=c.get(vt.FRAGMENT_MAIN_IMAGE)||"",f=c.get(vt.VERTEX_HEAD)||"",g=c.get(vt.VERTEX_MAIN_SUPPORT)||"";const S=new Set,E=new Set;if(s&&(h+=`	${n}MainUv(UV);
`,t.uvTransformation=!0),r!==null&&/mainSupport/.test(r)){const I=/mainSupport *\([\w\s]*?uv\s*?\)/.test(r);g+=`	${n}MainSupport(`,g+=I?`vUv);
`:`);
`;for(const R of r.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const w of R[1].split(/\s*,\s*/))t.varyings.add(w),S.add(w),E.add(w);for(const R of r.matchAll(o))E.add(R[1])}for(const I of i.matchAll(o))E.add(I[1]);for(const I of e.defines.keys())E.add(I.replace(/\([\w\s,]*\)/g,""));for(const I of e.uniforms.keys())E.add(I);E.delete("while"),E.delete("for"),E.delete("if"),e.uniforms.forEach((I,R)=>t.uniforms.set(n+R.charAt(0).toUpperCase()+R.slice(1),I)),e.defines.forEach((I,R)=>t.defines.set(n+R.charAt(0).toUpperCase()+R.slice(1),I));const v=new Map([["fragment",i],["vertex",r]]);ph(n,E,t.defines),ph(n,E,v),i=v.get("fragment"),r=v.get("vertex");const p=e.blendMode;if(t.blendModes.set(p.blendFunction,p),a){e.inputColorSpace!==null&&e.inputColorSpace!==t.colorSpace&&(d+=e.inputColorSpace===Dt?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==nn?t.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(t.colorSpace=e.inputColorSpace);const I=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;d+=`${n}MainImage(color0, UV, `,t.attributes&mi.DEPTH&&I.test(i)&&(d+="depth, ",t.readDepth=!0),d+=`color1);
	`;const R=n+"BlendOpacity";t.uniforms.set(R,p.opacity),d+=`color0 = blend${p.blendFunction}(color0, color1, ${R});

	`,l+=`uniform float ${R};

`}if(l+=i+`
`,r!==null&&(f+=r+`
`),c.set(vt.FRAGMENT_HEAD,l),c.set(vt.FRAGMENT_MAIN_UV,h),c.set(vt.FRAGMENT_MAIN_IMAGE,d),c.set(vt.VERTEX_HEAD,f),c.set(vt.VERTEX_MAIN_SUPPORT,g),e.extensions!==null)for(const I of e.extensions)t.extensions.add(I)}}var Ld=class extends Sn{constructor(n,...e){super("EffectPass"),this.fullscreenMaterial=new ES(null,null,null,n),this.listener=t=>this.handleEvent(t),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(n){for(const e of this.effects)e.mainScene=n}set mainCamera(n){this.fullscreenMaterial.copyCameraSettings(n);for(const e of this.effects)e.mainCamera=n}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(n){this.fullscreenMaterial.encodeOutput=n}get dithering(){return this.fullscreenMaterial.dithering}set dithering(n){const e=this.fullscreenMaterial;e.dithering=n,e.needsUpdate=!0}setEffects(n){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=n.sort((e,t)=>t.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const n=new D_;let e=0;for(const s of this.effects)if(s.blendMode.blendFunction===st.DST)n.attributes|=s.getAttributes()&mi.DEPTH;else{if(n.attributes&s.getAttributes()&mi.CONVOLUTION)throw new Error(`Convolution effects cannot be merged (${s.name})`);TS("e"+e++,s,n)}let t=n.shaderParts.get(vt.FRAGMENT_HEAD),i=n.shaderParts.get(vt.FRAGMENT_MAIN_IMAGE),r=n.shaderParts.get(vt.FRAGMENT_MAIN_UV);const a=/\bblend\b/g;for(const s of n.blendModes.values())t+=s.getShaderCode().replace(a,`blend${s.blendFunction}`)+`
`;n.attributes&mi.DEPTH?(n.readDepth&&(i=`float depth = readDepth(UV);

	`+i),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,n.colorSpace===Dt&&(i+=`color0 = sRGBToLinear(color0);
	`),n.uvTransformation?(r=`vec2 transformedUv = vUv;
`+r,n.defines.set("UV","transformedUv")):n.defines.set("UV","vUv"),n.shaderParts.set(vt.FRAGMENT_HEAD,t),n.shaderParts.set(vt.FRAGMENT_MAIN_IMAGE,i),n.shaderParts.set(vt.FRAGMENT_MAIN_UV,r);for(const[s,o]of n.shaderParts)o!==null&&n.shaderParts.set(s,o.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(n)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(n,e=La){this.fullscreenMaterial.depthBuffer=n,this.fullscreenMaterial.depthPacking=e;for(const t of this.effects)t.setDepthTexture(n,e)}render(n,e,t,i,r){for(const a of this.effects)a.update(n,e,i);if(!this.skipRendering||this.renderToScreen){const a=this.fullscreenMaterial;a.inputBuffer=e.texture,a.time+=i*this.timeScale,n.setRenderTarget(this.renderToScreen?null:t),n.render(this.scene,this.camera)}}setSize(n,e){this.fullscreenMaterial.setSize(n,e);for(const t of this.effects)t.setSize(n,e)}initialize(n,e,t){this.renderer=n;for(const i of this.effects)i.initialize(n,e,t);this.updateMaterial(),t!==void 0&&t!==$t&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const n of this.effects)n.removeEventListener("change",this.listener),n.dispose()}handleEvent(n){switch(n.type){case"change":this.recompile();break}}},yS=class extends Sn{constructor(n,e,{renderTarget:t,resolutionScale:i=1,width:r=gi.AUTO_SIZE,height:a=gi.AUTO_SIZE,resolutionX:s=r,resolutionY:o=a}={}){super("NormalPass"),this.needsSwap=!1,this.renderPass=new Pd(n,e,new Dm);const c=this.renderPass;c.ignoreBackground=!0,c.skipShadowMapUpdate=!0;const l=c.getClearPass();l.overrideClearColor=new ft(7829503),l.overrideClearAlpha=1,this.renderTarget=t,this.renderTarget===void 0&&(this.renderTarget=new Xt(1,1,{minFilter:Ot,magFilter:Ot}),this.renderTarget.texture.name="NormalPass.Target");const h=this.resolution=new gi(this,s,o,i);h.addEventListener("change",d=>this.setSize(h.baseWidth,h.baseHeight))}set mainScene(n){this.renderPass.mainScene=n}set mainCamera(n){this.renderPass.mainCamera=n}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}render(n,e,t,i,r){const a=this.renderToScreen?null:this.renderTarget;this.renderPass.render(n,a,a)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height)}},MS="Invariant failed";function Hs(n,e){if(!n)throw new Error(MS)}const wS=new F;function Nd(n,e,t=new F,i){const{x:r,y:a,z:s}=n,o=e.x,c=e.y,l=e.z,h=r*r*o,d=a*a*c,f=s*s*l,g=h+d+f,S=Math.sqrt(1/g);if(!Number.isFinite(S))return;const E=wS.copy(n).multiplyScalar(S);if(g<((i==null?void 0:i.centerTolerance)??.1))return t.copy(E);const v=E.multiply(e).multiplyScalar(2);let p=(1-S)*n.length()/(v.length()/2),I=0,R,w,L,N;do{p-=I,R=1/(1+p*o),w=1/(1+p*c),L=1/(1+p*l);const O=R*R,G=w*w,y=L*L,M=O*R,B=G*w,X=y*L;N=h*O+d*G+f*y-1,I=N/((h*M*o+d*B*c+f*X*l)*-2)}while(Math.abs(N)>1e-12);return t.set(r*R,a*w,s*L)}const Er=new F,qo=new F,$o=new F,el=class{constructor(e,t,i){this.radii=new F(e,t,i)}get minimumRadius(){return Math.min(this.radii.x,this.radii.y,this.radii.z)}get maximumRadius(){return Math.max(this.radii.x,this.radii.y,this.radii.z)}get flattening(){return 1-this.minimumRadius/this.maximumRadius}get eccentricity(){return Math.sqrt(this.eccentricitySquared)}get eccentricitySquared(){const e=this.maximumRadius**2,t=this.minimumRadius**2;return(e-t)/e}reciprocalRadii(e=new F){const{x:t,y:i,z:r}=this.radii;return e.set(1/t,1/i,1/r)}reciprocalRadiiSquared(e=new F){const{x:t,y:i,z:r}=this.radii;return e.set(1/t**2,1/i**2,1/r**2)}projectOnSurface(e,t=new F,i){return Nd(e,this.reciprocalRadiiSquared(),t,i)}getSurfaceNormal(e,t=new F){return t.multiplyVectors(this.reciprocalRadiiSquared(Er),e).normalize()}getEastNorthUpVectors(e,t=new F,i=new F,r=new F){this.getSurfaceNormal(e,r),t.set(-e.y,e.x,0).normalize(),i.crossVectors(r,t).normalize()}getEastNorthUpFrame(e,t=new He){const i=Er,r=qo,a=$o;return this.getEastNorthUpVectors(e,i,r,a),t.makeBasis(i,r,a).setPosition(e)}getNorthUpEastFrame(e,t=new He){const i=Er,r=qo,a=$o;return this.getEastNorthUpVectors(e,i,r,a),t.makeBasis(r,a,i).setPosition(e)}getIntersection(e,t=new F){const i=this.reciprocalRadii(Er),r=qo.copy(i).multiply(e.origin),a=$o.copy(i).multiply(e.direction),s=r.lengthSq(),o=a.lengthSq(),c=r.dot(a),l=c**2-o*(s-1);if(s===1)return t.copy(e.origin);if(s>1){if(c>=0||l<0)return;const h=Math.sqrt(l),d=(-c-h)/o,f=(-c+h)/o;return e.at(Math.min(d,f),t)}if(s<1){const h=c**2-o*(s-1),d=Math.sqrt(h),f=(-c+d)/o;return e.at(f,t)}if(c<0)return e.at(-c/o,t)}getOsculatingSphereCenter(e,t,i=new F){Hs(this.radii.x===this.radii.y);const r=this.radii.x**2,a=this.radii.z**2,s=Er.set(e.x/r,e.y/r,e.z/a).normalize();return i.copy(s.multiplyScalar(-t).add(e))}getNormalAtHorizon(e,t,i=new F){Hs(this.radii.x===this.radii.y);const r=this.radii.x**2,a=this.radii.z**2,s=e,o=t;let c=(s.x*o.x+s.y*o.y)/r+s.z*o.z/a;c/=(s.x**2+s.y**2)/r+s.z**2/a;const l=Er.copy(o).multiplyScalar(-c).add(e);return i.set(l.x/r,l.y/r,l.z/a).normalize()}};el.WGS84=new el(6378137,6378137,6356752314245179e-9);let Ia=el;const _s=new F,mh=new F,ma=class tl{constructor(e=0,t=0,i=0){this.longitude=e,this.latitude=t,this.height=i}set(e,t,i){return this.longitude=e,this.latitude=t,i!=null&&(this.height=i),this}clone(){return new tl(this.longitude,this.latitude,this.height)}copy(e){return this.longitude=e.longitude,this.latitude=e.latitude,this.height=e.height,this}equals(e){return e.longitude===this.longitude&&e.latitude===this.latitude&&e.height===this.height}setLongitude(e){return this.longitude=e,this}setLatitude(e){return this.latitude=e,this}setHeight(e){return this.height=e,this}normalize(){return this.longitude<tl.MIN_LONGITUDE&&(this.longitude+=Math.PI*2),this}setFromECEF(e,t){const i=((t==null?void 0:t.ellipsoid)??Ia.WGS84).reciprocalRadiiSquared(_s),r=Nd(e,i,mh,t);if(r==null)throw new Error(`Could not project position to ellipsoid surface: ${e.toArray()}`);const a=_s.multiplyVectors(r,i).normalize();this.longitude=Math.atan2(a.y,a.x),this.latitude=Math.asin(a.z);const s=_s.subVectors(e,r);return this.height=Math.sign(s.dot(e))*s.length(),this}toECEF(e=new F,t){const i=(t==null?void 0:t.ellipsoid)??Ia.WGS84,r=_s.multiplyVectors(i.radii,i.radii),a=Math.cos(this.latitude),s=mh.set(a*Math.cos(this.longitude),a*Math.sin(this.longitude),Math.sin(this.latitude)).normalize();return e.multiplyVectors(r,s),e.divideScalar(Math.sqrt(s.dot(e))).add(s.multiplyScalar(this.height))}fromArray(e,t=0){return this.longitude=e[t],this.latitude=e[t+1],this.height=e[t+2],this}toArray(e=[],t=0){return e[t]=this.longitude,e[t+1]=this.latitude,e[t+2]=this.height,e}*[Symbol.iterator](){yield this.longitude,yield this.latitude,yield this.height}};ma.MIN_LONGITUDE=-Math.PI,ma.MAX_LONGITUDE=Math.PI,ma.MIN_LATITUDE=-Math.PI/2,ma.MAX_LATITUDE=Math.PI/2;let Gl=ma;/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var Mn=Uint8Array,br=Uint16Array,AS=Int32Array,Ud=new Mn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Od=new Mn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),RS=new Mn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Fd=function(n,e){for(var t=new br(31),i=0;i<31;++i)t[i]=e+=1<<n[i-1];for(var r=new AS(t[30]),i=1;i<30;++i)for(var a=t[i];a<t[i+1];++a)r[a]=a-t[i]<<5|i;return{b:t,r}},Bd=Fd(Ud,2),Hd=Bd.b,CS=Bd.r;Hd[28]=258,CS[258]=28;var bS=Fd(Od,0),DS=bS.b,nl=new br(32768);for(var At=0;At<32768;++At){var bi=(At&43690)>>1|(At&21845)<<1;bi=(bi&52428)>>2|(bi&13107)<<2,bi=(bi&61680)>>4|(bi&3855)<<4,nl[At]=((bi&65280)>>8|(bi&255)<<8)>>1}var ya=function(n,e,t){for(var i=n.length,r=0,a=new br(e);r<i;++r)n[r]&&++a[n[r]-1];var s=new br(e);for(r=1;r<e;++r)s[r]=s[r-1]+a[r-1]<<1;var o;if(t){o=new br(1<<e);var c=15-e;for(r=0;r<i;++r)if(n[r])for(var l=r<<4|n[r],h=e-n[r],d=s[n[r]-1]++<<h,f=d|(1<<h)-1;d<=f;++d)o[nl[d]>>c]=l}else for(o=new br(i),r=0;r<i;++r)n[r]&&(o[r]=nl[s[n[r]-1]++]>>15-n[r]);return o},Fa=new Mn(288);for(var At=0;At<144;++At)Fa[At]=8;for(var At=144;At<256;++At)Fa[At]=9;for(var At=256;At<280;++At)Fa[At]=7;for(var At=280;At<288;++At)Fa[At]=8;var zd=new Mn(32);for(var At=0;At<32;++At)zd[At]=5;var IS=ya(Fa,9,1),PS=ya(zd,5,1),Zo=function(n){for(var e=n[0],t=1;t<n.length;++t)n[t]>e&&(e=n[t]);return e},In=function(n,e,t){var i=e/8|0;return(n[i]|n[i+1]<<8)>>(e&7)&t},jo=function(n,e){var t=e/8|0;return(n[t]|n[t+1]<<8|n[t+2]<<16)>>(e&7)},LS=function(n){return(n+7)/8|0},NS=function(n,e,t){return(t==null||t>n.length)&&(t=n.length),new Mn(n.subarray(e,t))},US=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Nn=function(n,e,t){var i=new Error(e||US[n]);if(i.code=n,Error.captureStackTrace&&Error.captureStackTrace(i,Nn),!t)throw i;return i},OS=function(n,e,t,i){var r=n.length,a=0;if(!r||e.f&&!e.l)return t||new Mn(0);var s=!t,o=s||e.i!=2,c=e.i;s&&(t=new Mn(r*3));var l=function(Qe){var ke=t.length;if(Qe>ke){var P=new Mn(Math.max(ke*2,Qe));P.set(t),t=P}},h=e.f||0,d=e.p||0,f=e.b||0,g=e.l,S=e.d,E=e.m,v=e.n,p=r*8;do{if(!g){h=In(n,d,1);var I=In(n,d+1,3);if(d+=3,I)if(I==1)g=IS,S=PS,E=9,v=5;else if(I==2){var N=In(n,d,31)+257,O=In(n,d+10,15)+4,G=N+In(n,d+5,31)+1;d+=14;for(var y=new Mn(G),M=new Mn(19),B=0;B<O;++B)M[RS[B]]=In(n,d+B*3,7);d+=O*3;for(var X=Zo(M),j=(1<<X)-1,Q=ya(M,X,1),B=0;B<G;){var ee=Q[In(n,d,j)];d+=ee&15;var R=ee>>4;if(R<16)y[B++]=R;else{var ie=0,ae=0;for(R==16?(ae=3+In(n,d,3),d+=2,ie=y[B-1]):R==17?(ae=3+In(n,d,7),d+=3):R==18&&(ae=11+In(n,d,127),d+=7);ae--;)y[B++]=ie}}var J=y.subarray(0,N),ge=y.subarray(N);E=Zo(J),v=Zo(ge),g=ya(J,E,1),S=ya(ge,v,1)}else Nn(1);else{var R=LS(d)+4,w=n[R-4]|n[R-3]<<8,L=R+w;if(L>r){c&&Nn(0);break}o&&l(f+w),t.set(n.subarray(R,L),f),e.b=f+=w,e.p=d=L*8,e.f=h;continue}if(d>p){c&&Nn(0);break}}o&&l(f+131072);for(var ue=(1<<E)-1,De=(1<<v)-1,Ge=d;;Ge=d){var ie=g[jo(n,d)&ue],nt=ie>>4;if(d+=ie&15,d>p){c&&Nn(0);break}if(ie||Nn(2),nt<256)t[f++]=nt;else if(nt==256){Ge=d,g=null;break}else{var ut=nt-254;if(nt>264){var B=nt-257,Je=Ud[B];ut=In(n,d,(1<<Je)-1)+Hd[B],d+=Je}var Z=S[jo(n,d)&De],se=Z>>4;Z||Nn(3),d+=Z&15;var ge=DS[se];if(se>3){var Je=Od[se];ge+=jo(n,d)&(1<<Je)-1,d+=Je}if(d>p){c&&Nn(0);break}o&&l(f+131072);var Me=f+ut;if(f<ge){var Y=a-ge,we=Math.min(ge,Me);for(Y+f<0&&Nn(3);f<we;++f)t[f]=i[Y+f]}for(;f<Me;++f)t[f]=t[f-ge]}}e.l=g,e.p=Ge,e.b=f,e.f=h,g&&(h=1,e.m=E,e.d=S,e.n=v)}while(!h);return f!=t.length&&s?NS(t,0,f):t.subarray(0,f)},FS=new Mn(0),BS=function(n,e){return((n[0]&15)!=8||n[0]>>4>7||(n[0]<<8|n[1])%31)&&Nn(6,"invalid zlib data"),(n[1]>>5&1)==1&&Nn(6,"invalid zlib data: "+(n[1]&32?"need":"unexpected")+" dictionary"),(n[1]>>3&4)+2};function Ss(n,e){return OS(n.subarray(BS(n),-4),{i:2},e,e)}var HS=typeof TextDecoder<"u"&&new TextDecoder,zS=0;try{HS.decode(FS,{stream:!0}),zS=1}catch{}class Gd extends Fm{constructor(e){super(e),this.type=rn,this.outputFormat=Vt}parse(e){const y=Math.pow(2.7182818,2.2);function M(m,u){let _=0;for(let C=0;C<65536;++C)(C==0||m[C>>3]&1<<(C&7))&&(u[_++]=C);const T=_-1;for(;_<65536;)u[_++]=0;return T}function B(m){for(let u=0;u<16384;u++)m[u]={},m[u].len=0,m[u].lit=0,m[u].p=null}const X={l:0,c:0,lc:0};function j(m,u,_,T,C){for(;_<m;)u=u<<8|Oe(T,C),_+=8;_-=m,X.l=u>>_&(1<<m)-1,X.c=u,X.lc=_}const Q=new Array(59);function ee(m){for(let _=0;_<=58;++_)Q[_]=0;for(let _=0;_<65537;++_)Q[m[_]]+=1;let u=0;for(let _=58;_>0;--_){const T=u+Q[_]>>1;Q[_]=u,u=T}for(let _=0;_<65537;++_){const T=m[_];T>0&&(m[_]=T|Q[T]++<<6)}}function ie(m,u,_,T,C,b){const A=u;let V=0,k=0;for(;T<=C;T++){if(A.value-u.value>_)return!1;j(6,V,k,m,A);const z=X.l;if(V=X.c,k=X.lc,b[T]=z,z==63){if(A.value-u.value>_)throw new Error("Something wrong with hufUnpackEncTable");j(8,V,k,m,A);let q=X.l+6;if(V=X.c,k=X.lc,T+q>C+1)throw new Error("Something wrong with hufUnpackEncTable");for(;q--;)b[T++]=0;T--}else if(z>=59){let q=z-59+2;if(T+q>C+1)throw new Error("Something wrong with hufUnpackEncTable");for(;q--;)b[T++]=0;T--}}ee(b)}function ae(m){return m&63}function J(m){return m>>6}function ge(m,u,_,T){for(;u<=_;u++){const C=J(m[u]),b=ae(m[u]);if(C>>b)throw new Error("Invalid table entry");if(b>14){const A=T[C>>b-14];if(A.len)throw new Error("Invalid table entry");if(A.lit++,A.p){const V=A.p;A.p=new Array(A.lit);for(let k=0;k<A.lit-1;++k)A.p[k]=V[k]}else A.p=new Array(1);A.p[A.lit-1]=u}else if(b){let A=0;for(let V=1<<14-b;V>0;V--){const k=T[(C<<14-b)+A];if(k.len||k.p)throw new Error("Invalid table entry");k.len=b,k.lit=u,A++}}}return!0}const ue={c:0,lc:0};function De(m,u,_,T){m=m<<8|Oe(_,T),u+=8,ue.c=m,ue.lc=u}const Ge={c:0,lc:0};function nt(m,u,_,T,C,b,A,V,k){if(m==u){T<8&&(De(_,T,C,b),_=ue.c,T=ue.lc),T-=8;let z=_>>T;if(z=new Uint8Array([z])[0],V.value+z>k)return!1;const q=A[V.value-1];for(;z-- >0;)A[V.value++]=q}else if(V.value<k)A[V.value++]=m;else return!1;Ge.c=_,Ge.lc=T}function ut(m){return m&65535}function Je(m){const u=ut(m);return u>32767?u-65536:u}const Z={a:0,b:0};function se(m,u){const _=Je(m),C=Je(u),b=_+(C&1)+(C>>1),A=b,V=b-C;Z.a=A,Z.b=V}function Me(m,u){const _=ut(m),T=ut(u),C=_-(T>>1)&65535,b=T+C-32768&65535;Z.a=b,Z.b=C}function Y(m,u,_,T,C,b,A){const V=A<16384,k=_>C?C:_;let z=1,q,ne;for(;z<=k;)z<<=1;for(z>>=1,q=z,z>>=1;z>=1;){ne=0;const K=ne+b*(C-q),ce=b*z,_e=b*q,he=T*z,fe=T*q;let Te,Se,We,Ve;for(;ne<=K;ne+=_e){let et=ne;const Ye=ne+T*(_-q);for(;et<=Ye;et+=fe){const ct=et+he,Ct=et+ce,$e=Ct+he;V?(se(m[et+u],m[Ct+u]),Te=Z.a,We=Z.b,se(m[ct+u],m[$e+u]),Se=Z.a,Ve=Z.b,se(Te,Se),m[et+u]=Z.a,m[ct+u]=Z.b,se(We,Ve),m[Ct+u]=Z.a,m[$e+u]=Z.b):(Me(m[et+u],m[Ct+u]),Te=Z.a,We=Z.b,Me(m[ct+u],m[$e+u]),Se=Z.a,Ve=Z.b,Me(Te,Se),m[et+u]=Z.a,m[ct+u]=Z.b,Me(We,Ve),m[Ct+u]=Z.a,m[$e+u]=Z.b)}if(_&z){const ct=et+ce;V?se(m[et+u],m[ct+u]):Me(m[et+u],m[ct+u]),Te=Z.a,m[ct+u]=Z.b,m[et+u]=Te}}if(C&z){let et=ne;const Ye=ne+T*(_-q);for(;et<=Ye;et+=fe){const ct=et+he;V?se(m[et+u],m[ct+u]):Me(m[et+u],m[ct+u]),Te=Z.a,m[ct+u]=Z.b,m[et+u]=Te}}q=z,z>>=1}return ne}function we(m,u,_,T,C,b,A,V,k){let z=0,q=0;const ne=A,K=Math.trunc(T.value+(C+7)/8);for(;T.value<K;)for(De(z,q,_,T),z=ue.c,q=ue.lc;q>=14;){const _e=z>>q-14&16383,he=u[_e];if(he.len)q-=he.len,nt(he.lit,b,z,q,_,T,V,k,ne),z=Ge.c,q=Ge.lc;else{if(!he.p)throw new Error("hufDecode issues");let fe;for(fe=0;fe<he.lit;fe++){const Te=ae(m[he.p[fe]]);for(;q<Te&&T.value<K;)De(z,q,_,T),z=ue.c,q=ue.lc;if(q>=Te&&J(m[he.p[fe]])==(z>>q-Te&(1<<Te)-1)){q-=Te,nt(he.p[fe],b,z,q,_,T,V,k,ne),z=Ge.c,q=Ge.lc;break}}if(fe==he.lit)throw new Error("hufDecode issues")}}const ce=8-C&7;for(z>>=ce,q-=ce;q>0;){const _e=u[z<<14-q&16383];if(_e.len)q-=_e.len,nt(_e.lit,b,z,q,_,T,V,k,ne),z=Ge.c,q=Ge.lc;else throw new Error("hufDecode issues")}return!0}function Qe(m,u,_,T,C,b){const A={value:0},V=_.value,k=Ne(u,_),z=Ne(u,_);_.value+=4;const q=Ne(u,_);if(_.value+=4,k<0||k>=65537||z<0||z>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const ne=new Array(65537),K=new Array(16384);B(K);const ce=T-(_.value-V);if(ie(m,_,ce,k,z,ne),q>8*(T-(_.value-V)))throw new Error("Something wrong with hufUncompress");ge(ne,k,z,K),we(ne,K,m,_,q,z,b,C,A)}function ke(m,u,_){for(let T=0;T<_;++T)u[T]=m[u[T]]}function P(m){for(let u=1;u<m.length;u++){const _=m[u-1]+m[u]-128;m[u]=_}}function qe(m,u){let _=0,T=Math.floor((m.length+1)/2),C=0;const b=m.length-1;for(;!(C>b||(u[C++]=m[_++],C>b));)u[C++]=m[T++]}function Ie(m){let u=m.byteLength;const _=new Array;let T=0;const C=new DataView(m);for(;u>0;){const b=C.getInt8(T++);if(b<0){const A=-b;u-=A+1;for(let V=0;V<A;V++)_.push(C.getUint8(T++))}else{const A=b;u-=2;const V=C.getUint8(T++);for(let k=0;k<A+1;k++)_.push(V)}}return _}function Ce(m,u,_,T,C,b){let A=new DataView(b.buffer);const V=_[m.idx[0]].width,k=_[m.idx[0]].height,z=3,q=Math.floor(V/8),ne=Math.ceil(V/8),K=Math.ceil(k/8),ce=V-(ne-1)*8,_e=k-(K-1)*8,he={value:0},fe=new Array(z),Te=new Array(z),Se=new Array(z),We=new Array(z),Ve=new Array(z);for(let Ye=0;Ye<z;++Ye)Ve[Ye]=u[m.idx[Ye]],fe[Ye]=Ye<1?0:fe[Ye-1]+ne*K,Te[Ye]=new Float32Array(64),Se[Ye]=new Uint16Array(64),We[Ye]=new Uint16Array(ne*64);for(let Ye=0;Ye<K;++Ye){let ct=8;Ye==K-1&&(ct=_e);let Ct=8;for(let je=0;je<ne;++je){je==ne-1&&(Ct=ce);for(let at=0;at<z;++at)Se[at].fill(0),Se[at][0]=C[fe[at]++],ot(he,T,Se[at]),be(Se[at],Te[at]),Xe(Te[at]);Lt(Te);for(let at=0;at<z;++at)Rt(Te[at],We[at],je*64)}let $e=0;for(let je=0;je<z;++je){const at=_[m.idx[je]].type;for(let wt=8*Ye;wt<8*Ye+ct;++wt){$e=Ve[je][wt];for(let Nt=0;Nt<q;++Nt){const ln=Nt*64+(wt&7)*8;A.setUint16($e+0*2*at,We[je][ln+0],!0),A.setUint16($e+1*2*at,We[je][ln+1],!0),A.setUint16($e+2*2*at,We[je][ln+2],!0),A.setUint16($e+3*2*at,We[je][ln+3],!0),A.setUint16($e+4*2*at,We[je][ln+4],!0),A.setUint16($e+5*2*at,We[je][ln+5],!0),A.setUint16($e+6*2*at,We[je][ln+6],!0),A.setUint16($e+7*2*at,We[je][ln+7],!0),$e+=8*2*at}}if(q!=ne)for(let wt=8*Ye;wt<8*Ye+ct;++wt){const Nt=Ve[je][wt]+8*q*2*at,ln=q*64+(wt&7)*8;for(let En=0;En<Ct;++En)A.setUint16(Nt+En*2*at,We[je][ln+En],!0)}}}const et=new Uint16Array(V);A=new DataView(b.buffer);for(let Ye=0;Ye<z;++Ye){_[m.idx[Ye]].decoded=!0;const ct=_[m.idx[Ye]].type;if(_[Ye].type==2)for(let Ct=0;Ct<k;++Ct){const $e=Ve[Ye][Ct];for(let je=0;je<V;++je)et[je]=A.getUint16($e+je*2*ct,!0);for(let je=0;je<V;++je)A.setFloat32($e+je*2*ct,$(et[je]),!0)}}}function Ae(m,u,_,T,C,b){const A=new DataView(b.buffer),V=_[m],k=V.width,z=V.height,q=Math.ceil(k/8),ne=Math.ceil(z/8),K=Math.floor(k/8),ce=k-(q-1)*8,_e=z-(ne-1)*8,he={value:0};let fe=0;const Te=new Float32Array(64),Se=new Uint16Array(64),We=new Uint16Array(q*64);for(let Ve=0;Ve<ne;++Ve){let et=8;Ve==ne-1&&(et=_e);for(let Ye=0;Ye<q;++Ye)Se.fill(0),Se[0]=C[fe++],ot(he,T,Se),be(Se,Te),Xe(Te),Rt(Te,We,Ye*64);for(let Ye=8*Ve;Ye<8*Ve+et;++Ye){let ct=u[m][Ye];for(let Ct=0;Ct<K;++Ct){const $e=Ct*64+(Ye&7)*8;for(let je=0;je<8;++je)A.setUint16(ct+je*2*V.type,We[$e+je],!0);ct+=8*2*V.type}if(q!=K){const Ct=K*64+(Ye&7)*8;for(let $e=0;$e<ce;++$e)A.setUint16(ct+$e*2*V.type,We[Ct+$e],!0)}}}V.decoded=!0}function ot(m,u,_){let T,C=1;for(;C<64;)T=u[m.value],T==65280?C=64:T>>8==255?C+=T&255:(_[C]=T,C++),m.value++}function be(m,u){u[0]=$(m[0]),u[1]=$(m[1]),u[2]=$(m[5]),u[3]=$(m[6]),u[4]=$(m[14]),u[5]=$(m[15]),u[6]=$(m[27]),u[7]=$(m[28]),u[8]=$(m[2]),u[9]=$(m[4]),u[10]=$(m[7]),u[11]=$(m[13]),u[12]=$(m[16]),u[13]=$(m[26]),u[14]=$(m[29]),u[15]=$(m[42]),u[16]=$(m[3]),u[17]=$(m[8]),u[18]=$(m[12]),u[19]=$(m[17]),u[20]=$(m[25]),u[21]=$(m[30]),u[22]=$(m[41]),u[23]=$(m[43]),u[24]=$(m[9]),u[25]=$(m[11]),u[26]=$(m[18]),u[27]=$(m[24]),u[28]=$(m[31]),u[29]=$(m[40]),u[30]=$(m[44]),u[31]=$(m[53]),u[32]=$(m[10]),u[33]=$(m[19]),u[34]=$(m[23]),u[35]=$(m[32]),u[36]=$(m[39]),u[37]=$(m[45]),u[38]=$(m[52]),u[39]=$(m[54]),u[40]=$(m[20]),u[41]=$(m[22]),u[42]=$(m[33]),u[43]=$(m[38]),u[44]=$(m[46]),u[45]=$(m[51]),u[46]=$(m[55]),u[47]=$(m[60]),u[48]=$(m[21]),u[49]=$(m[34]),u[50]=$(m[37]),u[51]=$(m[47]),u[52]=$(m[50]),u[53]=$(m[56]),u[54]=$(m[59]),u[55]=$(m[61]),u[56]=$(m[35]),u[57]=$(m[36]),u[58]=$(m[48]),u[59]=$(m[49]),u[60]=$(m[57]),u[61]=$(m[58]),u[62]=$(m[62]),u[63]=$(m[63])}function Xe(m){const u=.5*Math.cos(.7853975),_=.5*Math.cos(3.14159/16),T=.5*Math.cos(3.14159/8),C=.5*Math.cos(3*3.14159/16),b=.5*Math.cos(5*3.14159/16),A=.5*Math.cos(3*3.14159/8),V=.5*Math.cos(7*3.14159/16),k=new Array(4),z=new Array(4),q=new Array(4),ne=new Array(4);for(let K=0;K<8;++K){const ce=K*8;k[0]=T*m[ce+2],k[1]=A*m[ce+2],k[2]=T*m[ce+6],k[3]=A*m[ce+6],z[0]=_*m[ce+1]+C*m[ce+3]+b*m[ce+5]+V*m[ce+7],z[1]=C*m[ce+1]-V*m[ce+3]-_*m[ce+5]-b*m[ce+7],z[2]=b*m[ce+1]-_*m[ce+3]+V*m[ce+5]+C*m[ce+7],z[3]=V*m[ce+1]-b*m[ce+3]+C*m[ce+5]-_*m[ce+7],q[0]=u*(m[ce+0]+m[ce+4]),q[3]=u*(m[ce+0]-m[ce+4]),q[1]=k[0]+k[3],q[2]=k[1]-k[2],ne[0]=q[0]+q[1],ne[1]=q[3]+q[2],ne[2]=q[3]-q[2],ne[3]=q[0]-q[1],m[ce+0]=ne[0]+z[0],m[ce+1]=ne[1]+z[1],m[ce+2]=ne[2]+z[2],m[ce+3]=ne[3]+z[3],m[ce+4]=ne[3]-z[3],m[ce+5]=ne[2]-z[2],m[ce+6]=ne[1]-z[1],m[ce+7]=ne[0]-z[0]}for(let K=0;K<8;++K)k[0]=T*m[16+K],k[1]=A*m[16+K],k[2]=T*m[48+K],k[3]=A*m[48+K],z[0]=_*m[8+K]+C*m[24+K]+b*m[40+K]+V*m[56+K],z[1]=C*m[8+K]-V*m[24+K]-_*m[40+K]-b*m[56+K],z[2]=b*m[8+K]-_*m[24+K]+V*m[40+K]+C*m[56+K],z[3]=V*m[8+K]-b*m[24+K]+C*m[40+K]-_*m[56+K],q[0]=u*(m[K]+m[32+K]),q[3]=u*(m[K]-m[32+K]),q[1]=k[0]+k[3],q[2]=k[1]-k[2],ne[0]=q[0]+q[1],ne[1]=q[3]+q[2],ne[2]=q[3]-q[2],ne[3]=q[0]-q[1],m[0+K]=ne[0]+z[0],m[8+K]=ne[1]+z[1],m[16+K]=ne[2]+z[2],m[24+K]=ne[3]+z[3],m[32+K]=ne[3]-z[3],m[40+K]=ne[2]-z[2],m[48+K]=ne[1]-z[1],m[56+K]=ne[0]-z[0]}function Lt(m){for(let u=0;u<64;++u){const _=m[0][u],T=m[1][u],C=m[2][u];m[0][u]=_+1.5747*C,m[1][u]=_-.1873*T-.4682*C,m[2][u]=_+1.8556*T}}function Rt(m,u,_){for(let T=0;T<64;++T)u[_+T]=Uu.toHalfFloat(D(m[T]))}function D(m){return m<=1?Math.sign(m)*Math.pow(Math.abs(m),2.2):Math.sign(m)*Math.pow(y,Math.abs(m)-1)}function x(m){return new DataView(m.array.buffer,m.offset.value,m.size)}function W(m){const u=m.viewer.buffer.slice(m.offset.value,m.offset.value+m.size),_=new Uint8Array(Ie(u)),T=new Uint8Array(_.length);return P(_),qe(_,T),new DataView(T.buffer)}function re(m){const u=m.array.slice(m.offset.value,m.offset.value+m.size),_=Ss(u),T=new Uint8Array(_.length);return P(_),qe(_,T),new DataView(T.buffer)}function le(m){const u=m.viewer,_={value:m.offset.value},T=new Uint16Array(m.columns*m.lines*(m.inputChannels.length*m.type)),C=new Uint8Array(8192);let b=0;const A=new Array(m.inputChannels.length);for(let _e=0,he=m.inputChannels.length;_e<he;_e++)A[_e]={},A[_e].start=b,A[_e].end=A[_e].start,A[_e].nx=m.columns,A[_e].ny=m.lines,A[_e].size=m.type,b+=A[_e].nx*A[_e].ny*A[_e].size;const V=Re(u,_),k=Re(u,_);if(k>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(V<=k)for(let _e=0;_e<k-V+1;_e++)C[_e+V]=Ee(u,_);const z=new Uint16Array(65536),q=M(C,z),ne=Ne(u,_);Qe(m.array,u,_,ne,T,b);for(let _e=0;_e<m.inputChannels.length;++_e){const he=A[_e];for(let fe=0;fe<A[_e].size;++fe)Y(T,he.start+fe,he.nx,he.size,he.ny,he.nx*he.size,q)}ke(z,T,b);let K=0;const ce=new Uint8Array(T.buffer.byteLength);for(let _e=0;_e<m.lines;_e++)for(let he=0;he<m.inputChannels.length;he++){const fe=A[he],Te=fe.nx*fe.size,Se=new Uint8Array(T.buffer,fe.end*2,Te*2);ce.set(Se,K),K+=Te*2,fe.end+=Te}return new DataView(ce.buffer)}function te(m){const u=m.array.slice(m.offset.value,m.offset.value+m.size),_=Ss(u),T=m.inputChannels.length*m.lines*m.columns*m.totalBytes,C=new ArrayBuffer(T),b=new DataView(C);let A=0,V=0;const k=new Array(4);for(let z=0;z<m.lines;z++)for(let q=0;q<m.inputChannels.length;q++){let ne=0;switch(m.inputChannels[q].pixelType){case 1:k[0]=A,k[1]=k[0]+m.columns,A=k[1]+m.columns;for(let ce=0;ce<m.columns;++ce){const _e=_[k[0]++]<<8|_[k[1]++];ne+=_e,b.setUint16(V,ne,!0),V+=2}break;case 2:k[0]=A,k[1]=k[0]+m.columns,k[2]=k[1]+m.columns,A=k[2]+m.columns;for(let ce=0;ce<m.columns;++ce){const _e=_[k[0]++]<<24|_[k[1]++]<<16|_[k[2]++]<<8;ne+=_e,b.setUint32(V,ne,!0),V+=4}break}}return b}function Fe(m){const u=m.viewer,_={value:m.offset.value},T=new Uint8Array(m.columns*m.lines*(m.inputChannels.length*m.type*2)),C={version:ze(u,_),unknownUncompressedSize:ze(u,_),unknownCompressedSize:ze(u,_),acCompressedSize:ze(u,_),dcCompressedSize:ze(u,_),rleCompressedSize:ze(u,_),rleUncompressedSize:ze(u,_),rleRawSize:ze(u,_),totalAcUncompressedCount:ze(u,_),totalDcUncompressedCount:ze(u,_),acCompression:ze(u,_)};if(C.version<2)throw new Error("EXRLoader.parse: "+Zn.compression+" version "+C.version+" is unsupported");const b=new Array;let A=Re(u,_)-2;for(;A>0;){const he=ve(u.buffer,_),fe=Ee(u,_),Te=fe>>2&3,Se=(fe>>4)-1,We=new Int8Array([Se])[0],Ve=Ee(u,_);b.push({name:he,index:We,type:Ve,compression:Te}),A-=he.length+3}const V=Zn.channels,k=new Array(m.inputChannels.length);for(let he=0;he<m.inputChannels.length;++he){const fe=k[he]={},Te=V[he];fe.name=Te.name,fe.compression=0,fe.decoded=!1,fe.type=Te.pixelType,fe.pLinear=Te.pLinear,fe.width=m.columns,fe.height=m.lines}const z={idx:new Array(3)};for(let he=0;he<m.inputChannels.length;++he){const fe=k[he];for(let Te=0;Te<b.length;++Te){const Se=b[Te];fe.name==Se.name&&(fe.compression=Se.compression,Se.index>=0&&(z.idx[Se.index]=he),fe.offset=he)}}let q,ne,K;if(C.acCompressedSize>0)switch(C.acCompression){case 0:q=new Uint16Array(C.totalAcUncompressedCount),Qe(m.array,u,_,C.acCompressedSize,q,C.totalAcUncompressedCount);break;case 1:const he=m.array.slice(_.value,_.value+C.totalAcUncompressedCount),fe=Ss(he);q=new Uint16Array(fe.buffer),_.value+=C.totalAcUncompressedCount;break}if(C.dcCompressedSize>0){const he={array:m.array,offset:_,size:C.dcCompressedSize};ne=new Uint16Array(re(he).buffer),_.value+=C.dcCompressedSize}if(C.rleRawSize>0){const he=m.array.slice(_.value,_.value+C.rleCompressedSize),fe=Ss(he);K=Ie(fe.buffer),_.value+=C.rleCompressedSize}let ce=0;const _e=new Array(k.length);for(let he=0;he<_e.length;++he)_e[he]=new Array;for(let he=0;he<m.lines;++he)for(let fe=0;fe<k.length;++fe)_e[fe].push(ce),ce+=k[fe].width*m.type*2;z.idx[0]!==void 0&&k[z.idx[0]]&&Ce(z,_e,k,q,ne,T);for(let he=0;he<k.length;++he){const fe=k[he];if(!fe.decoded)switch(fe.compression){case 2:let Te=0,Se=0;for(let We=0;We<m.lines;++We){let Ve=_e[he][Te];for(let et=0;et<fe.width;++et){for(let Ye=0;Ye<2*fe.type;++Ye)T[Ve++]=K[Se+Ye*fe.width*fe.height];Se++}Te++}break;case 1:Ae(he,_e,k,q,ne,T);break;default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(T.buffer)}function ve(m,u){const _=new Uint8Array(m);let T=0;for(;_[u.value+T]!=0;)T+=1;const C=new TextDecoder().decode(_.slice(u.value,u.value+T));return u.value=u.value+T+1,C}function Ue(m,u,_){const T=new TextDecoder().decode(new Uint8Array(m).slice(u.value,u.value+_));return u.value=u.value+_,T}function Be(m,u){const _=xe(m,u),T=Ne(m,u);return[_,T]}function pe(m,u){const _=Ne(m,u),T=Ne(m,u);return[_,T]}function xe(m,u){const _=m.getInt32(u.value,!0);return u.value=u.value+4,_}function Ne(m,u){const _=m.getUint32(u.value,!0);return u.value=u.value+4,_}function Oe(m,u){const _=m[u.value];return u.value=u.value+1,_}function Ee(m,u){const _=m.getUint8(u.value);return u.value=u.value+1,_}const ze=function(m,u){let _;return"getBigInt64"in DataView.prototype?_=Number(m.getBigInt64(u.value,!0)):_=m.getUint32(u.value+4,!0)+Number(m.getUint32(u.value,!0)<<32),u.value+=8,_};function H(m,u){const _=m.getFloat32(u.value,!0);return u.value+=4,_}function me(m,u){return Uu.toHalfFloat(H(m,u))}function $(m){const u=(m&31744)>>10,_=m&1023;return(m>>15?-1:1)*(u?u===31?_?NaN:1/0:Math.pow(2,u-15)*(1+_/1024):6103515625e-14*(_/1024))}function Re(m,u){const _=m.getUint16(u.value,!0);return u.value+=2,_}function de(m,u){return $(Re(m,u))}function oe(m,u,_,T){const C=_.value,b=[];for(;_.value<C+T-1;){const A=ve(u,_),V=xe(m,_),k=Ee(m,_);_.value+=3;const z=xe(m,_),q=xe(m,_);b.push({name:A,pixelType:V,pLinear:k,xSampling:z,ySampling:q})}return _.value+=1,b}function Le(m,u){const _=H(m,u),T=H(m,u),C=H(m,u),b=H(m,u),A=H(m,u),V=H(m,u),k=H(m,u),z=H(m,u);return{redX:_,redY:T,greenX:C,greenY:b,blueX:A,blueY:V,whiteX:k,whiteY:z}}function Ke(m,u){const _=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],T=Ee(m,u);return _[T]}function Et(m,u){const _=xe(m,u),T=xe(m,u),C=xe(m,u),b=xe(m,u);return{xMin:_,yMin:T,xMax:C,yMax:b}}function mt(m,u){const _=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],T=Ee(m,u);return _[T]}function Rn(m,u){const _=["ENVMAP_LATLONG","ENVMAP_CUBE"],T=Ee(m,u);return _[T]}function xn(m,u){const _=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],T=["ROUND_DOWN","ROUND_UP"],C=Ne(m,u),b=Ne(m,u),A=Ee(m,u);return{xSize:C,ySize:b,levelMode:_[A&15],roundingMode:T[A>>4]}}function ka(m,u){const _=H(m,u),T=H(m,u);return[_,T]}function $n(m,u){const _=H(m,u),T=H(m,u),C=H(m,u);return[_,T,C]}function ia(m,u,_,T,C){if(T==="string"||T==="stringvector"||T==="iccProfile")return Ue(u,_,C);if(T==="chlist")return oe(m,u,_,C);if(T==="chromaticities")return Le(m,_);if(T==="compression")return Ke(m,_);if(T==="box2i")return Et(m,_);if(T==="envmap")return Rn(m,_);if(T==="tiledesc")return xn(m,_);if(T==="lineOrder")return mt(m,_);if(T==="float")return H(m,_);if(T==="v2f")return ka(m,_);if(T==="v3f")return $n(m,_);if(T==="int")return xe(m,_);if(T==="rational")return Be(m,_);if(T==="timecode")return pe(m,_);if(T==="preview")return _.value+=C,"skipped";_.value+=C}function Va(m,u){const _=Math.log2(m);return u=="ROUND_DOWN"?Math.floor(_):Math.ceil(_)}function Wa(m,u,_){let T=0;switch(m.levelMode){case"ONE_LEVEL":T=1;break;case"MIPMAP_LEVELS":T=Va(Math.max(u,_),m.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return T}function Fi(m,u,_,T){const C=new Array(m);for(let b=0;b<m;b++){const A=1<<b;let V=u/A|0;T=="ROUND_UP"&&V*A<u&&(V+=1);const k=Math.max(V,1);C[b]=(k+_-1)/_|0}return C}function Xa(){const m=this,u=m.offset,_={value:0};for(let T=0;T<m.tileCount;T++){const C=xe(m.viewer,u),b=xe(m.viewer,u);u.value+=8,m.size=Ne(m.viewer,u);const A=C*m.blockWidth,V=b*m.blockHeight;m.columns=A+m.blockWidth>m.width?m.width-A:m.blockWidth,m.lines=V+m.blockHeight>m.height?m.height-V:m.blockHeight;const k=m.columns*m.totalBytes,q=m.size<m.lines*k?m.uncompress(m):x(m);u.value+=m.size;for(let ne=0;ne<m.lines;ne++){const K=ne*m.columns*m.totalBytes;for(let ce=0;ce<m.inputChannels.length;ce++){const _e=Zn.channels[ce].name,he=m.channelByteOffsets[_e]*m.columns,fe=m.decodeChannels[_e];if(fe===void 0)continue;_.value=K+he;const Te=(m.height-(1+V+ne))*m.outLineWidth;for(let Se=0;Se<m.columns;Se++){const We=Te+(Se+A)*m.outputChannels+fe;m.byteArray[We]=m.getter(q,_)}}}}}function ar(){const m=this,u=m.offset,_={value:0};for(let T=0;T<m.height/m.blockHeight;T++){const C=xe(m.viewer,u)-Zn.dataWindow.yMin;m.size=Ne(m.viewer,u),m.lines=C+m.blockHeight>m.height?m.height-C:m.blockHeight;const b=m.columns*m.totalBytes,V=m.size<m.lines*b?m.uncompress(m):x(m);u.value+=m.size;for(let k=0;k<m.blockHeight;k++){const z=T*m.blockHeight,q=k+m.scanOrder(z);if(q>=m.height)continue;const ne=k*b,K=(m.height-1-q)*m.outLineWidth;for(let ce=0;ce<m.inputChannels.length;ce++){const _e=Zn.channels[ce].name,he=m.channelByteOffsets[_e]*m.columns,fe=m.decodeChannels[_e];if(fe!==void 0){_.value=ne+he;for(let Te=0;Te<m.columns;Te++){const Se=K+Te*m.outputChannels+fe;m.byteArray[Se]=m.getter(V,_)}}}}}}function Ya(m,u,_){const T={};if(m.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");T.version=m.getUint8(4);const C=m.getUint8(5);T.spec={singleTile:!!(C&2),longName:!!(C&4),deepFormat:!!(C&8),multiPart:!!(C&16)},_.value=8;let b=!0;for(;b;){const A=ve(u,_);if(A==="")b=!1;else{const V=ve(u,_),k=Ne(m,_),z=ia(m,u,_,V,k);z===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${V}'.`):T[A]=z}}if(C&-7)throw console.error("THREE.EXRHeader:",T),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return T}function qa(m,u,_,T,C,b){const A={size:0,viewer:u,array:_,offset:T,width:m.dataWindow.xMax-m.dataWindow.xMin+1,height:m.dataWindow.yMax-m.dataWindow.yMin+1,inputChannels:m.channels,channelByteOffsets:{},shouldExpand:!1,scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:tn};switch(m.compression){case"NO_COMPRESSION":A.blockHeight=1,A.uncompress=x;break;case"RLE_COMPRESSION":A.blockHeight=1,A.uncompress=W;break;case"ZIPS_COMPRESSION":A.blockHeight=1,A.uncompress=re;break;case"ZIP_COMPRESSION":A.blockHeight=16,A.uncompress=re;break;case"PIZ_COMPRESSION":A.blockHeight=32,A.uncompress=le;break;case"PXR24_COMPRESSION":A.blockHeight=16,A.uncompress=te;break;case"DWAA_COMPRESSION":A.blockHeight=32,A.uncompress=Fe;break;case"DWAB_COMPRESSION":A.blockHeight=256,A.uncompress=Fe;break;default:throw new Error("EXRLoader.parse: "+m.compression+" is unsupported")}const V={};for(const K of m.channels)switch(K.name){case"Y":case"R":case"G":case"B":case"A":V[K.name]=!0,A.type=K.pixelType}let k=!1,z=!1;if(V.R&&V.G&&V.B)A.outputChannels=4;else if(V.Y)A.outputChannels=1;else throw new Error("EXRLoader.parse: file contains unsupported data channels.");switch(A.outputChannels){case 4:b==Vt?(k=!V.A,A.format=Vt,A.colorSpace=tn,A.outputChannels=4,A.decodeChannels={R:0,G:1,B:2,A:3}):b==$i?(A.format=$i,A.colorSpace=tn,A.outputChannels=2,A.decodeChannels={R:0,G:1}):b==hi?(A.format=hi,A.colorSpace=tn,A.outputChannels=1,A.decodeChannels={R:0}):z=!0;break;case 1:b==Vt?(k=!0,A.format=Vt,A.colorSpace=tn,A.outputChannels=4,A.shouldExpand=!0,A.decodeChannels={Y:0}):b==$i?(A.format=$i,A.colorSpace=tn,A.outputChannels=2,A.shouldExpand=!0,A.decodeChannels={Y:0}):b==hi?(A.format=hi,A.colorSpace=tn,A.outputChannels=1,A.decodeChannels={Y:0}):z=!0;break;default:z=!0}if(z)throw new Error("EXRLoader.parse: invalid output format for specified file.");if(A.type==1)switch(C){case qt:A.getter=de;break;case rn:A.getter=Re;break}else if(A.type==2)switch(C){case qt:A.getter=H;break;case rn:A.getter=me}else throw new Error("EXRLoader.parse: unsupported pixelType "+A.type+" for "+m.compression+".");A.columns=A.width;const q=A.width*A.height*A.outputChannels;switch(C){case qt:A.byteArray=new Float32Array(q),k&&A.byteArray.fill(1,0,q);break;case rn:A.byteArray=new Uint16Array(q),k&&A.byteArray.fill(15360,0,q);break;default:console.error("THREE.EXRLoader: unsupported type: ",C);break}let ne=0;for(const K of m.channels)A.decodeChannels[K.name]!==void 0&&(A.channelByteOffsets[K.name]=ne),ne+=K.pixelType*2;if(A.totalBytes=ne,A.outLineWidth=A.width*A.outputChannels,m.lineOrder==="INCREASING_Y"?A.scanOrder=K=>K:A.scanOrder=K=>A.height-1-K,m.spec.singleTile){A.blockHeight=m.tiles.ySize,A.blockWidth=m.tiles.xSize;const K=Wa(m.tiles,A.width,A.height),ce=Fi(K,A.width,m.tiles.xSize,m.tiles.roundingMode),_e=Fi(K,A.height,m.tiles.ySize,m.tiles.roundingMode);A.tileCount=ce[0]*_e[0];for(let he=0;he<K;he++)for(let fe=0;fe<_e[he];fe++)for(let Te=0;Te<ce[he];Te++)ze(u,T);A.decode=Xa.bind(A)}else{A.blockWidth=A.width;const K=Math.ceil(A.height/A.blockHeight);for(let ce=0;ce<K;ce++)ze(u,T);A.decode=ar.bind(A)}return A}const $a={value:0},Za=new DataView(e),mo=new Uint8Array(e),Zn=Ya(Za,e,$a),zn=qa(Zn,Za,mo,$a,this.type,this.outputFormat);if(zn.decode(),zn.shouldExpand){const m=zn.byteArray;if(this.outputFormat==Vt)for(let u=0;u<m.length;u+=4)m[u+2]=m[u+1]=m[u];else if(this.outputFormat==$i)for(let u=0;u<m.length;u+=2)m[u+1]=m[u]}return{header:Zn,width:zn.width,height:zn.height,data:zn.byteArray,format:zn.format,colorSpace:zn.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}setOutputFormat(e){return this.outputFormat=e,this}load(e,t,i,r){function a(s,o){s.colorSpace=o.colorSpace,s.minFilter=pt,s.magFilter=pt,s.generateMipmaps=!1,s.flipY=!1,t&&t(s,o)}return super.load(e,a,i,r)}}class GS extends Hn{load(e,t,i,r){const a=new Td(this.manager);a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(this.withCredentials),a.load(e,s=>{Hs(s instanceof ArrayBuffer);try{t(s)}catch(o){r!=null?r(o):console.error(o),this.manager.itemError(e)}},i,r)}}function kS(n){var e,t;return n instanceof bd?n.getContext().getExtension("OES_texture_float_linear")!=null:((t=(e=n.backend).hasFeature)==null?void 0:t.call(e,"float32-filterable"))??!1}const VS="This is not an object",WS="This is not a Float16Array object",gh="This constructor is not a subclass of Float16Array",kd="The constructor property value is not an object",XS="Species constructor didn't return TypedArray object",YS="Derived constructor created TypedArray object which was too small length",Ma="Attempting to access detached ArrayBuffer",il="Cannot convert undefined or null to object",rl="Cannot mix BigInt and other types, use explicit conversions",vh="@@iterator property is not callable",_h="Reduce of empty array with no initial value",qS="The comparison function must be either a function or undefined",Ko="Offset is out of bounds";function Mt(n){return(e,...t)=>hn(n,e,t)}function Jr(n,e){return Mt(Wr(n,e).get)}const{apply:hn,construct:ga,defineProperty:$S,get:Jo,getOwnPropertyDescriptor:Wr,getPrototypeOf:Ba,has:al,ownKeys:Vd,set:Sh,setPrototypeOf:Wd}=Reflect,ZS=Proxy,{EPSILON:jS,MAX_SAFE_INTEGER:xh,isFinite:Xd,isNaN:Xr}=Number,{iterator:Yn,species:KS,toStringTag:kl,for:JS}=Symbol,Yr=Object,{create:no,defineProperty:Ha,freeze:QS,is:Eh}=Yr,sl=Yr.prototype,ex=sl.__lookupGetter__?Mt(sl.__lookupGetter__):(n,e)=>{if(n==null)throw bt(il);let t=Yr(n);do{const i=Wr(t,e);if(i!==void 0)return ci(i,"get")?i.get:void 0}while((t=Ba(t))!==null)},ci=Yr.hasOwn||Mt(sl.hasOwnProperty),Yd=Array,qd=Yd.isArray,io=Yd.prototype,tx=Mt(io.join),nx=Mt(io.push),ix=Mt(io.toLocaleString),Vl=io[Yn],rx=Mt(Vl),{abs:ax,trunc:$d}=Math,ro=ArrayBuffer,sx=ro.isView,Zd=ro.prototype,ox=Mt(Zd.slice),cx=Jr(Zd,"byteLength"),ol=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:null,lx=ol&&Jr(ol.prototype,"byteLength"),Wl=Ba(Uint8Array),ux=Wl.from,Yt=Wl.prototype,hx=Yt[Yn],dx=Mt(Yt.keys),fx=Mt(Yt.values),px=Mt(Yt.entries),mx=Mt(Yt.set),Th=Mt(Yt.reverse),gx=Mt(Yt.fill),vx=Mt(Yt.copyWithin),yh=Mt(Yt.sort),ca=Mt(Yt.slice),_x=Mt(Yt.subarray),Gt=Jr(Yt,"buffer"),Wi=Jr(Yt,"byteOffset"),St=Jr(Yt,"length"),jd=Jr(Yt,kl),Sx=Uint8Array,gn=Uint16Array,Mh=(...n)=>hn(ux,gn,n),Xl=Uint32Array,xx=Float32Array,Qi=Ba([][Yn]()),ao=Mt(Qi.next),Ex=Mt(function*(){}().next),Tx=Ba(Qi),yx=DataView.prototype,Mx=Mt(yx.getUint16),bt=TypeError,Qo=RangeError,Kd=WeakSet,Jd=Kd.prototype,wx=Mt(Jd.add),Ax=Mt(Jd.has),so=WeakMap,Yl=so.prototype,zs=Mt(Yl.get),Rx=Mt(Yl.has),ql=Mt(Yl.set),Qd=new so,Cx=no(null,{next:{value:function(){const n=zs(Qd,this);return ao(n)}},[Yn]:{value:function(){return this}}});function va(n){if(n[Yn]===Vl&&Qi.next===ao)return n;const e=no(Cx);return ql(Qd,e,rx(n)),e}const ef=new so,tf=no(Tx,{next:{value:function(){const n=zs(ef,this);return Ex(n)},writable:!0,configurable:!0}});for(const n of Vd(Qi))n!=="next"&&Ha(tf,n,Wr(Qi,n));function wh(n){const e=no(tf);return ql(ef,e,n),e}function Gs(n){return n!==null&&typeof n=="object"||typeof n=="function"}function Ah(n){return n!==null&&typeof n=="object"}function ks(n){return jd(n)!==void 0}function cl(n){const e=jd(n);return e==="BigInt64Array"||e==="BigUint64Array"}function bx(n){try{return qd(n)?!1:(cx(n),!0)}catch{return!1}}function nf(n){if(ol===null)return!1;try{return lx(n),!0}catch{return!1}}function Dx(n){return bx(n)||nf(n)}function Rh(n){return qd(n)?n[Yn]===Vl&&Qi.next===ao:!1}function Ix(n){return ks(n)?n[Yn]===hx&&Qi.next===ao:!1}function xs(n){if(typeof n!="string")return!1;const e=+n;return n!==e+""||!Xd(e)?!1:e===$d(e)}const Vs=JS("__Float16Array__");function Px(n){if(!Ah(n))return!1;const e=Ba(n);if(!Ah(e))return!1;const t=e.constructor;if(t===void 0)return!1;if(!Gs(t))throw bt(kd);return al(t,Vs)}const ll=1/jS;function Lx(n){return n+ll-ll}const rf=6103515625e-14,Nx=65504,af=.0009765625,Ch=af*rf,Ux=af*ll;function Ox(n){const e=+n;if(!Xd(e)||e===0)return e;const t=e>0?1:-1,i=ax(e);if(i<rf)return t*Lx(i/Ch)*Ch;const r=(1+Ux)*i,a=r-(r-i);return a>Nx||Xr(a)?t*(1/0):t*a}const sf=new ro(4),of=new xx(sf),cf=new Xl(sf),Pn=new gn(512),Ln=new Sx(512);for(let n=0;n<256;++n){const e=n-127;e<-24?(Pn[n]=0,Pn[n|256]=32768,Ln[n]=24,Ln[n|256]=24):e<-14?(Pn[n]=1024>>-e-14,Pn[n|256]=1024>>-e-14|32768,Ln[n]=-e-1,Ln[n|256]=-e-1):e<=15?(Pn[n]=e+15<<10,Pn[n|256]=e+15<<10|32768,Ln[n]=13,Ln[n|256]=13):e<128?(Pn[n]=31744,Pn[n|256]=64512,Ln[n]=24,Ln[n|256]=24):(Pn[n]=31744,Pn[n|256]=64512,Ln[n]=13,Ln[n|256]=13)}function Gn(n){of[0]=Ox(n);const e=cf[0],t=e>>23&511;return Pn[t]+((e&8388607)>>Ln[t])}const $l=new Xl(2048);for(let n=1;n<1024;++n){let e=n<<13,t=0;for(;!(e&8388608);)e<<=1,t-=8388608;e&=-8388609,t+=947912704,$l[n]=e|t}for(let n=1024;n<2048;++n)$l[n]=939524096+(n-1024<<13);const Qr=new Xl(64);for(let n=1;n<31;++n)Qr[n]=n<<23;Qr[31]=1199570944;Qr[32]=2147483648;for(let n=33;n<63;++n)Qr[n]=2147483648+(n-32<<23);Qr[63]=3347054592;const lf=new gn(64);for(let n=1;n<64;++n)n!==32&&(lf[n]=1024);function xt(n){const e=n>>10;return cf[0]=$l[lf[e]+(n&1023)]+Qr[e],of[0]}function ri(n){const e=+n;return Xr(e)||e===0?0:$d(e)}function ec(n){const e=ri(n);return e<0?0:e<xh?e:xh}function Es(n,e){if(!Gs(n))throw bt(VS);const t=n.constructor;if(t===void 0)return e;if(!Gs(t))throw bt(kd);return t[KS]??e}function wa(n){if(nf(n))return!1;try{return ox(n,0,0),!1}catch{}return!0}function bh(n,e){const t=Xr(n),i=Xr(e);if(t&&i)return 0;if(t)return 1;if(i||n<e)return-1;if(n>e)return 1;if(n===0&&e===0){const r=Eh(n,0),a=Eh(e,0);if(!r&&a)return-1;if(r&&!a)return 1}return 0}const Zl=2,Ws=new so;function Dr(n){return Rx(Ws,n)||!sx(n)&&Px(n)}function _t(n){if(!Dr(n))throw bt(WS)}function Ts(n,e){const t=Dr(n),i=ks(n);if(!t&&!i)throw bt(XS);if(typeof e=="number"){let r;if(t){const a=it(n);r=St(a)}else r=St(n);if(r<e)throw bt(YS)}if(cl(n))throw bt(rl)}function it(n){const e=zs(Ws,n);if(e!==void 0){const r=Gt(e);if(wa(r))throw bt(Ma);return e}const t=n.buffer;if(wa(t))throw bt(Ma);const i=ga(Ei,[t,n.byteOffset,n.length],n.constructor);return zs(Ws,i)}function Dh(n){const e=St(n),t=[];for(let i=0;i<e;++i)t[i]=xt(n[i]);return t}const uf=new Kd;for(const n of Vd(Yt)){if(n===kl)continue;const e=Wr(Yt,n);ci(e,"get")&&typeof e.get=="function"&&wx(uf,e.get)}const Fx=QS({get(n,e,t){return xs(e)&&ci(n,e)?xt(Jo(n,e)):Ax(uf,ex(n,e))?Jo(n,e):Jo(n,e,t)},set(n,e,t,i){return xs(e)&&ci(n,e)?Sh(n,e,Gn(t)):Sh(n,e,t,i)},getOwnPropertyDescriptor(n,e){if(xs(e)&&ci(n,e)){const t=Wr(n,e);return t.value=xt(t.value),t}return Wr(n,e)},defineProperty(n,e,t){return xs(e)&&ci(n,e)&&ci(t,"value")&&(t.value=Gn(t.value)),$S(n,e,t)}});let Ei=class kt{constructor(e,t,i){let r;if(Dr(e))r=ga(gn,[it(e)],new.target);else if(Gs(e)&&!Dx(e)){let s,o;if(ks(e)){s=e,o=St(e);const c=Gt(e);if(wa(c))throw bt(Ma);if(cl(e))throw bt(rl);const l=new ro(o*Zl);r=ga(gn,[l],new.target)}else{const c=e[Yn];if(c!=null&&typeof c!="function")throw bt(vh);c!=null?Rh(e)?(s=e,o=e.length):(s=[...e],o=s.length):(s=e,o=ec(s.length)),r=ga(gn,[o],new.target)}for(let c=0;c<o;++c)r[c]=Gn(s[c])}else r=ga(gn,arguments,new.target);const a=new ZS(r,Fx);return ql(Ws,a,r),a}static from(e,...t){const i=this;if(!al(i,Vs))throw bt(gh);if(i===kt){if(Dr(e)&&t.length===0){const h=it(e),d=new gn(Gt(h),Wi(h),St(h));return new kt(Gt(ca(d)))}if(t.length===0)return new kt(Gt(Mh(e,Gn)));const c=t[0],l=t[1];return new kt(Gt(Mh(e,function(h,...d){return Gn(hn(c,this,[h,...va(d)]))},l)))}let r,a;const s=e[Yn];if(s!=null&&typeof s!="function")throw bt(vh);if(s!=null)Rh(e)?(r=e,a=e.length):Ix(e)?(r=e,a=St(e)):(r=[...e],a=r.length);else{if(e==null)throw bt(il);r=Yr(e),a=ec(r.length)}const o=new i(a);if(t.length===0)for(let c=0;c<a;++c)o[c]=r[c];else{const c=t[0],l=t[1];for(let h=0;h<a;++h)o[h]=hn(c,l,[r[h],h])}return o}static of(...e){const t=this;if(!al(t,Vs))throw bt(gh);const i=e.length;if(t===kt){const a=new kt(i),s=it(a);for(let o=0;o<i;++o)s[o]=Gn(e[o]);return a}const r=new t(i);for(let a=0;a<i;++a)r[a]=e[a];return r}keys(){_t(this);const e=it(this);return dx(e)}values(){_t(this);const e=it(this);return wh(function*(){for(const t of fx(e))yield xt(t)}())}entries(){_t(this);const e=it(this);return wh(function*(){for(const[t,i]of px(e))yield[t,xt(i)]}())}at(e){_t(this);const t=it(this),i=St(t),r=ri(e),a=r>=0?r:i+r;if(!(a<0||a>=i))return xt(t[a])}with(e,t){_t(this);const i=it(this),r=St(i),a=ri(e),s=a>=0?a:r+a,o=+t;if(s<0||s>=r)throw Qo(Ko);const c=new gn(Gt(i),Wi(i),St(i)),l=new kt(Gt(ca(c))),h=it(l);return h[s]=Gn(o),l}map(e,...t){_t(this);const i=it(this),r=St(i),a=t[0],s=Es(i,kt);if(s===kt){const c=new kt(r),l=it(c);for(let h=0;h<r;++h){const d=xt(i[h]);l[h]=Gn(hn(e,a,[d,h,this]))}return c}const o=new s(r);Ts(o,r);for(let c=0;c<r;++c){const l=xt(i[c]);o[c]=hn(e,a,[l,c,this])}return o}filter(e,...t){_t(this);const i=it(this),r=St(i),a=t[0],s=[];for(let l=0;l<r;++l){const h=xt(i[l]);hn(e,a,[h,l,this])&&nx(s,h)}const o=Es(i,kt),c=new o(s);return Ts(c),c}reduce(e,...t){_t(this);const i=it(this),r=St(i);if(r===0&&t.length===0)throw bt(_h);let a,s;t.length===0?(a=xt(i[0]),s=1):(a=t[0],s=0);for(let o=s;o<r;++o)a=e(a,xt(i[o]),o,this);return a}reduceRight(e,...t){_t(this);const i=it(this),r=St(i);if(r===0&&t.length===0)throw bt(_h);let a,s;t.length===0?(a=xt(i[r-1]),s=r-2):(a=t[0],s=r-1);for(let o=s;o>=0;--o)a=e(a,xt(i[o]),o,this);return a}forEach(e,...t){_t(this);const i=it(this),r=St(i),a=t[0];for(let s=0;s<r;++s)hn(e,a,[xt(i[s]),s,this])}find(e,...t){_t(this);const i=it(this),r=St(i),a=t[0];for(let s=0;s<r;++s){const o=xt(i[s]);if(hn(e,a,[o,s,this]))return o}}findIndex(e,...t){_t(this);const i=it(this),r=St(i),a=t[0];for(let s=0;s<r;++s){const o=xt(i[s]);if(hn(e,a,[o,s,this]))return s}return-1}findLast(e,...t){_t(this);const i=it(this),r=St(i),a=t[0];for(let s=r-1;s>=0;--s){const o=xt(i[s]);if(hn(e,a,[o,s,this]))return o}}findLastIndex(e,...t){_t(this);const i=it(this),r=St(i),a=t[0];for(let s=r-1;s>=0;--s){const o=xt(i[s]);if(hn(e,a,[o,s,this]))return s}return-1}every(e,...t){_t(this);const i=it(this),r=St(i),a=t[0];for(let s=0;s<r;++s)if(!hn(e,a,[xt(i[s]),s,this]))return!1;return!0}some(e,...t){_t(this);const i=it(this),r=St(i),a=t[0];for(let s=0;s<r;++s)if(hn(e,a,[xt(i[s]),s,this]))return!0;return!1}set(e,...t){_t(this);const i=it(this),r=ri(t[0]);if(r<0)throw Qo(Ko);if(e==null)throw bt(il);if(cl(e))throw bt(rl);if(Dr(e))return mx(it(this),it(e),r);if(ks(e)){const c=Gt(e);if(wa(c))throw bt(Ma)}const a=St(i),s=Yr(e),o=ec(s.length);if(r===1/0||o+r>a)throw Qo(Ko);for(let c=0;c<o;++c)i[c+r]=Gn(s[c])}reverse(){_t(this);const e=it(this);return Th(e),this}toReversed(){_t(this);const e=it(this),t=new gn(Gt(e),Wi(e),St(e)),i=new kt(Gt(ca(t))),r=it(i);return Th(r),i}fill(e,...t){_t(this);const i=it(this);return gx(i,Gn(e),...va(t)),this}copyWithin(e,t,...i){_t(this);const r=it(this);return vx(r,e,t,...va(i)),this}sort(e){_t(this);const t=it(this),i=e!==void 0?e:bh;return yh(t,(r,a)=>i(xt(r),xt(a))),this}toSorted(e){_t(this);const t=it(this);if(e!==void 0&&typeof e!="function")throw new bt(qS);const i=e!==void 0?e:bh,r=new gn(Gt(t),Wi(t),St(t)),a=new kt(Gt(ca(r))),s=it(a);return yh(s,(o,c)=>i(xt(o),xt(c))),a}slice(e,t){_t(this);const i=it(this),r=Es(i,kt);if(r===kt){const S=new gn(Gt(i),Wi(i),St(i));return new kt(Gt(ca(S,e,t)))}const a=St(i),s=ri(e),o=t===void 0?a:ri(t);let c;s===-1/0?c=0:s<0?c=a+s>0?a+s:0:c=a<s?a:s;let l;o===-1/0?l=0:o<0?l=a+o>0?a+o:0:l=a<o?a:o;const h=l-c>0?l-c:0,d=new r(h);if(Ts(d,h),h===0)return d;const f=Gt(i);if(wa(f))throw bt(Ma);let g=0;for(;c<l;)d[g]=xt(i[c]),++c,++g;return d}subarray(e,t){_t(this);const i=it(this),r=Es(i,kt),a=new gn(Gt(i),Wi(i),St(i)),s=_x(a,e,t),o=new r(Gt(s),Wi(s),St(s));return Ts(o),o}indexOf(e,...t){_t(this);const i=it(this),r=St(i);let a=ri(t[0]);if(a===1/0)return-1;a<0&&(a+=r,a<0&&(a=0));for(let s=a;s<r;++s)if(ci(i,s)&&xt(i[s])===e)return s;return-1}lastIndexOf(e,...t){_t(this);const i=it(this),r=St(i);let a=t.length>=1?ri(t[0]):r-1;if(a===-1/0)return-1;a>=0?a=a<r-1?a:r-1:a+=r;for(let s=a;s>=0;--s)if(ci(i,s)&&xt(i[s])===e)return s;return-1}includes(e,...t){_t(this);const i=it(this),r=St(i);let a=ri(t[0]);if(a===1/0)return!1;a<0&&(a+=r,a<0&&(a=0));const s=Xr(e);for(let o=a;o<r;++o){const c=xt(i[o]);if(s&&Xr(c)||c===e)return!0}return!1}join(e){_t(this);const t=it(this),i=Dh(t);return tx(i,e)}toLocaleString(...e){_t(this);const t=it(this),i=Dh(t);return ix(i,...va(e))}get[kl](){if(Dr(this))return"Float16Array"}};Ha(Ei,"BYTES_PER_ELEMENT",{value:Zl});Ha(Ei,Vs,{});Wd(Ei,Wl);const Xs=Ei.prototype;Ha(Xs,"BYTES_PER_ELEMENT",{value:Zl});Ha(Xs,Yn,{value:Xs.values,writable:!0,configurable:!0});Wd(Xs,Yt);function Bx(n,e,...t){return xt(Mx(n,e,...va(t)))}let Hx=class extends Hn{constructor(e,t){super(t),this.parser=e}load(e,t,i,r){const a=new GS(this.manager);a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(this.withCredentials),a.load(e,s=>{try{t(this.parser(s))}catch(o){r!=null?r(o):console.error(o),this.manager.itemError(e)}},i,r)}};function zx(n){const e=n instanceof Int8Array?Rl:n instanceof Uint8Array||n instanceof Uint8ClampedArray?$t:n instanceof Int16Array?Cl:n instanceof Uint16Array?zr:n instanceof Int32Array?js:n instanceof Uint32Array?Ni:n instanceof Ei?rn:n instanceof Float32Array||n instanceof Float64Array?qt:null;return Hs(e!=null),e}let ji=class extends Hn{constructor(e,t,i={},r){super(r),this.textureClass=e,this.parser=t,this.options={format:Vt,minFilter:pt,magFilter:pt,...i}}load(e,t,i,r){const a=new this.textureClass,s=new Hx(this.parser,this.manager);return s.setRequestHeader(this.requestHeader),s.setPath(this.path),s.setWithCredentials(this.withCredentials),s.load(e,o=>{a.image.data=o instanceof Ei?new Uint16Array(o.buffer):o;const{width:c,height:l,depth:h,...d}=this.options;c!=null&&(a.image.width=c),l!=null&&(a.image.height=l),"depth"in a.image&&h!=null&&(a.image.depth=h),a.type=zx(o),Object.assign(a,d),a.needsUpdate=!0,t==null||t(a)},i,r),a}};const Ys=Ks.clamp,hf=Ks.lerp,ul=Ks.degToRad;function Gx(n,e,t,i=0,r=1){return Ks.mapLinear(n,e,t,i,r)}function kx(n){return Math.min(Math.max(n,0),1)}function dt(n){return(e,t)=>{e instanceof Bn?Object.defineProperty(e,t,{enumerable:!0,get(){var i;return((i=this.defines)==null?void 0:i[n])!=null},set(i){var r;i!==this[t]&&(i?(this.defines??(this.defines={}),this.defines[n]="1"):(r=this.defines)==null||delete r[n],this.needsUpdate=!0)}}):Object.defineProperty(e,t,{enumerable:!0,get(){return this.defines.has(n)},set(i){i!==this[t]&&(i?this.defines.set(n,"1"):this.defines.delete(n),this.setChanged())}})}}function Ih(n){return typeof n=="number"?Math.floor(n):typeof n=="string"?parseInt(n,10):typeof n=="boolean"?+n:0}function nr(n,{min:e=Number.MIN_SAFE_INTEGER,max:t=Number.MAX_SAFE_INTEGER}={}){return(i,r)=>{i instanceof Bn?Object.defineProperty(i,r,{enumerable:!0,get(){var s;const a=(s=this.defines)==null?void 0:s[n];return a!=null?Ih(a):0},set(a){const s=this[r];a!==s&&(this.defines??(this.defines={}),this.defines[n]=Ys(a,e,t).toFixed(0),this.needsUpdate=!0)}}):Object.defineProperty(i,r,{enumerable:!0,get(){const a=this.defines.get(n);return a!=null?Ih(a):0},set(a){const s=this[r];a!==s&&(this.defines.set(n,Ys(a,e,t).toFixed(0)),this.setChanged())}})}}function Ph(n){return typeof n=="number"?n:typeof n=="string"?parseFloat(n):typeof n=="boolean"?+n:0}function jl(n,{min:e=-1/0,max:t=1/0,precision:i=7}={}){return(r,a)=>{r instanceof Bn?Object.defineProperty(r,a,{enumerable:!0,get(){var o;const s=(o=this.defines)==null?void 0:o[n];return s!=null?Ph(s):0},set(s){const o=this[a];s!==o&&(this.defines??(this.defines={}),this.defines[n]=Ys(s,e,t).toFixed(i),this.needsUpdate=!0)}}):Object.defineProperty(r,a,{enumerable:!0,get(){const s=this.defines.get(n);return s!=null?Ph(s):0},set(s){const o=this[a];s!==o&&(this.defines.set(n,Ys(s,e,t).toFixed(i)),this.setChanged())}})}}function df(n,{validate:e}={}){return(t,i)=>{t instanceof Bn?Object.defineProperty(t,i,{enumerable:!0,get(){var r;return(r=this.defines)==null?void 0:r[n]},set(r){if(r!==this[i]){if((e==null?void 0:e(r))===!1){console.error(`Expression validation failed: ${r}`);return}this.defines??(this.defines={}),this.defines[n]=r,this.needsUpdate=!0}}}):Object.defineProperty(t,i,{enumerable:!0,get(){return this.defines.get(n)},set(r){if(r!==this[i]){if((e==null?void 0:e(r))===!1){console.error(`Expression validation failed: ${r}`);return}this.defines.set(n,r),this.setChanged()}}})}}function Lh(n,...e){const t={};for(let i=0;i<e.length;i+=2){const r=e[i],a=e[i+1];for(const s of a)t[s]={enumerable:!0,get:()=>r[s],set:o=>{r[s]=o}}}return Object.defineProperties(n,t),n}function Nh(n,e,t){const i={};for(const r of t)i[r]={enumerable:!0,get:()=>e.uniforms[r].value,set:a=>{e.uniforms[r].value=a}};return Object.defineProperties(n,i),n}class tc extends Hn{constructor(e={},t){super(t),this.options=e}load(e,t,i,r){const{width:a,height:s,depth:o}=this.options,c=new pi(null,a,s,o),l=new Gd(this.manager);return l.setRequestHeader(this.requestHeader),l.setPath(this.path),l.setWithCredentials(this.withCredentials),l.load(e,h=>{const{image:d}=h;c.image={data:d.data,width:a??d.width,height:s??d.height,depth:o??Math.sqrt(d.height)},c.type=h.type,c.format=h.format,c.colorSpace=h.colorSpace,c.needsUpdate=!0;try{t==null||t(c)}catch(f){r!=null?r(f):console.error(f),this.manager.itemError(e)}},i,r),c}}class Uh extends Hn{constructor(e={},t){super(t),this.options=e}load(e,t,i,r){const{width:a,height:s}=this.options,o=new Bs(null,a,s),c=new Gd(this.manager);return c.setRequestHeader(this.requestHeader),c.setPath(this.path),c.setWithCredentials(this.withCredentials),c.load(e,l=>{const{image:h}=l;o.image={data:h.data,width:a??h.width,height:s??h.height},o.type=l.type,o.format=l.format,o.colorSpace=l.colorSpace,o.needsUpdate=!0;try{t==null||t(o)}catch(d){r!=null?r(d):console.error(d),this.manager.itemError(e)}},i,r),o}}const Vx=/^[ \t]*#include +"([\w\d./]+)"/gm;function Si(n,e){return n.replace(Vx,(t,i)=>{const r=i.split("/").reduce((a,s)=>typeof a!="string"&&a!=null?a[s]:void 0,e);if(typeof r!="string")throw new Error(`Could not find include for ${i}.`);return Si(r,e)})}let ys;function Wx(){if(ys!=null)return ys;const n=new Uint32Array([268435456]);return ys=new Uint8Array(n.buffer,n.byteOffset,n.byteLength)[0]===0,ys}function Xx(n,e,t,i=!0){if(i===Wx())return new e(n);const r=Object.assign(new DataView(n),{getFloat16(s,o){return Bx(this,s,o)}}),a=new e(r.byteLength/e.BYTES_PER_ELEMENT);for(let s=0,o=0;s<a.length;++s,o+=e.BYTES_PER_ELEMENT)a[s]=r[t](o,i);return a}const ff=n=>new Uint8Array(n),la=(n,e)=>Xx(n,Ei,"getFloat16",e);const Yx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*(?:i\s*\+\+|\+\+\s*i)\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qx(n,e,t,i){let r="";for(let a=parseInt(e,10);a<parseInt(t,10);++a)r+=i.replace(/\[\s*i\s*\]/g,`[${a}]`).replace(/UNROLLED_LOOP_INDEX/g,`${a}`);return r}function za(n){return n.replace(Yx,qx)}const $x=`// Reference: https://github.com/mrdoob/three.js/blob/r171/examples/jsm/csm/CSMShader.js

#ifndef SHADOW_CASCADE_COUNT
#error "SHADOW_CASCADE_COUNT macro must be defined."
#endif // SHADOW_CASCADE_COUNT

int getCascadeIndex(
  const mat4 viewMatrix,
  const vec3 worldPosition,
  const vec2 intervals[SHADOW_CASCADE_COUNT],
  const float near,
  const float far
) {
  vec4 viewPosition = viewMatrix * vec4(worldPosition, 1.0);
  float depth = viewZToOrthographicDepth(viewPosition.z, near, far);
  vec2 interval;
  #pragma unroll_loop_start
  for (int i = 0; i < 4; ++i) {
    #if UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT
    interval = intervals[i];
    if (depth >= interval.x && depth < interval.y) {
      return UNROLLED_LOOP_INDEX;
    }
    #endif // UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT
  }
  #pragma unroll_loop_end
  return SHADOW_CASCADE_COUNT - 1;
}

int getFadedCascadeIndex(
  const mat4 viewMatrix,
  const vec3 worldPosition,
  const vec2 intervals[SHADOW_CASCADE_COUNT],
  const float near,
  const float far,
  const float jitter
) {
  vec4 viewPosition = viewMatrix * vec4(worldPosition, 1.0);
  float depth = viewZToOrthographicDepth(viewPosition.z, near, far);

  vec2 interval;
  float intervalCenter;
  float closestEdge;
  float margin;
  int nextIndex = -1;
  int prevIndex = -1;
  float alpha;

  #pragma unroll_loop_start
  for (int i = 0; i < 4; ++i) {
    #if UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT
    interval = intervals[i];
    intervalCenter = (interval.x + interval.y) * 0.5;
    closestEdge = depth < intervalCenter ? interval.x : interval.y;
    margin = closestEdge * closestEdge * 0.5;
    interval += margin * vec2(-0.5, 0.5);

    #if UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT - 1
    if (depth >= interval.x && depth < interval.y) {
      prevIndex = nextIndex;
      nextIndex = UNROLLED_LOOP_INDEX;
      alpha = saturate(min(depth - interval.x, interval.y - depth) / margin);
    }
    #else // UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT - 1
    // Don't fade out the last cascade.
    if (depth >= interval.x) {
      prevIndex = nextIndex;
      nextIndex = UNROLLED_LOOP_INDEX;
      alpha = saturate((depth - interval.x) / margin);
    }
    #endif // UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT - 1
    #endif // UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT
  }
  #pragma unroll_loop_end

  return jitter <= alpha
    ? nextIndex
    : prevIndex;
}
`,Zx=`// cSpell:words logdepthbuf

#ifdef DEPTH_PACKING
float readDepthValue(const sampler2D depthBuffer, const vec2 uv) {
  #if DEPTH_PACKING == 3201
  return unpackRGBAToDepth(texture(depthBuffer, uv));
  #else // DEPTH_PACKING == 3201
  return texture(depthBuffer, uv).r;
  #endif // DEPTH_PACKING == 3201
}
#endif // DEPTH_PACKING

float reverseLogDepth(const float depth, const float near, const float far) {
  #if defined(USE_LOGDEPTHBUF) || defined(USE_LOGARITHMIC_DEPTH_BUFFER)
  float d = pow(2.0, depth * log2(far + 1.0)) - 1.0;
  float a = far / (far - near);
  float b = far * near / (near - far);
  return a + b / d;
  #else // defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(USE_LOGARITHMIC_DEPTH_BUFFER)
  return depth;
  #endif // defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(USE_LOGARITHMIC_DEPTH_BUFFER)
}

float linearizeDepth(const float depth, const float near, const float far) {
  float ndc = depth * 2.0 - 1.0;
  return 2.0 * near * far / (far + near - ndc * (far - near));
}
`,jx=`float checker(const vec2 uv, const vec2 repeats) {
  vec2 c = floor(repeats * uv);
  float result = mod(c.x + c.y, 2.0);
  return sign(result);
}

float checker(const vec2 uv, const float repeats) {
  return checker(uv, vec2(repeats));
}
`,Kx=`// Reference: https://advances.realtimerendering.com/s2014/index.html#_NEXT_GENERATION_POST

float interleavedGradientNoise(const vec2 coord) {
  const vec3 magic = vec3(0.06711056, 0.00583715, 52.9829189);
  return fract(magic.z * fract(dot(coord, magic.xy)));
}
`,Jx=`#if !defined(saturate)
#define saturate(a) clamp(a, 0.0, 1.0)
#endif // !defined(saturate)

float remap(const float x, const float min1, const float max1, const float min2, const float max2) {
  return min2 + (x - min1) / (max1 - min1) * (max2 - min2);
}

vec2 remap(const vec2 x, const vec2 min1, const vec2 max1, const vec2 min2, const vec2 max2) {
  return min2 + (x - min1) / (max1 - min1) * (max2 - min2);
}

vec3 remap(const vec3 x, const vec3 min1, const vec3 max1, const vec3 min2, const vec3 max2) {
  return min2 + (x - min1) / (max1 - min1) * (max2 - min2);
}

vec4 remap(const vec4 x, const vec4 min1, const vec4 max1, const vec4 min2, const vec4 max2) {
  return min2 + (x - min1) / (max1 - min1) * (max2 - min2);
}

float remapClamped(
  const float x,
  const float min1,
  const float max1,
  const float min2,
  const float max2
) {
  return clamp(min2 + (x - min1) / (max1 - min1) * (max2 - min2), min2, max2);
}

vec2 remapClamped(
  const vec2 x,
  const vec2 min1,
  const vec2 max1,
  const vec2 min2,
  const vec2 max2
) {
  return clamp(min2 + (x - min1) / (max1 - min1) * (max2 - min2), min2, max2);
}

vec3 remapClamped(
  const vec3 x,
  const vec3 min1,
  const vec3 max1,
  const vec3 min2,
  const vec3 max2
) {
  return clamp(min2 + (x - min1) / (max1 - min1) * (max2 - min2), min2, max2);
}

vec4 remapClamped(
  const vec4 x,
  const vec4 min1,
  const vec4 max1,
  const vec4 min2,
  const vec4 max2
) {
  return clamp(min2 + (x - min1) / (max1 - min1) * (max2 - min2), min2, max2);
}

// Implicitly remap to 0 and 1
float remap(const float x, const float min1, const float max1) {
  return (x - min1) / (max1 - min1);
}

vec2 remap(const vec2 x, const vec2 min1, const vec2 max1) {
  return (x - min1) / (max1 - min1);
}

vec3 remap(const vec3 x, const vec3 min1, const vec3 max1) {
  return (x - min1) / (max1 - min1);
}

vec4 remap(const vec4 x, const vec4 min1, const vec4 max1) {
  return (x - min1) / (max1 - min1);
}

float remapClamped(const float x, const float min1, const float max1) {
  return saturate((x - min1) / (max1 - min1));
}

vec2 remapClamped(const vec2 x, const vec2 min1, const vec2 max1) {
  return saturate((x - min1) / (max1 - min1));
}

vec3 remapClamped(const vec3 x, const vec3 min1, const vec3 max1) {
  return saturate((x - min1) / (max1 - min1));
}

vec4 remapClamped(const vec4 x, const vec4 min1, const vec4 max1) {
  return saturate((x - min1) / (max1 - min1));
}
`,Qx=`// Reference: https://jcgt.org/published/0003/02/01/paper.pdf

vec2 signNotZero(vec2 v) {
  return vec2(v.x >= 0.0 ? 1.0 : -1.0, v.y >= 0.0 ? 1.0 : -1.0);
}

vec2 packNormalToVec2(vec3 v) {
  vec2 p = v.xy * (1.0 / (abs(v.x) + abs(v.y) + abs(v.z)));
  return v.z <= 0.0
    ? (1.0 - abs(p.yx)) * signNotZero(p)
    : p;
}

vec3 unpackVec2ToNormal(vec2 e) {
  vec3 v = vec3(e.xy, 1.0 - abs(e.x) - abs(e.y));
  if (v.z < 0.0) {
    v.xy = (1.0 - abs(v.yx)) * signNotZero(v.xy);
  }
  return normalize(v);
}
`,eE=`float raySphereFirstIntersection(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const float radius
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  float c = dot(a, a) - radius * radius;
  float discriminant = b * b - 4.0 * c;
  return discriminant < 0.0
    ? -1.0
    : (-b - sqrt(discriminant)) * 0.5;
}

float raySphereFirstIntersection(const vec3 origin, const vec3 direction, const float radius) {
  return raySphereFirstIntersection(origin, direction, vec3(0.0), radius);
}

vec4 raySphereFirstIntersection(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const vec4 radius
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  vec4 c = dot(a, a) - radius * radius;
  vec4 discriminant = b * b - 4.0 * c;
  vec4 mask = step(discriminant, vec4(0.0));
  return mix((-b - sqrt(max(vec4(0.0), discriminant))) * 0.5, vec4(-1.0), mask);
}

vec4 raySphereFirstIntersection(const vec3 origin, const vec3 direction, const vec4 radius) {
  return raySphereFirstIntersection(origin, direction, vec3(0.0), radius);
}

float raySphereSecondIntersection(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const float radius
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  float c = dot(a, a) - radius * radius;
  float discriminant = b * b - 4.0 * c;
  return discriminant < 0.0
    ? -1.0
    : (-b + sqrt(discriminant)) * 0.5;
}

float raySphereSecondIntersection(const vec3 origin, const vec3 direction, const float radius) {
  return raySphereSecondIntersection(origin, direction, vec3(0.0), radius);
}

vec4 raySphereSecondIntersection(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const vec4 radius
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  vec4 c = dot(a, a) - radius * radius;
  vec4 discriminant = b * b - 4.0 * c;
  vec4 mask = step(discriminant, vec4(0.0));
  return mix((-b + sqrt(max(vec4(0.0), discriminant))) * 0.5, vec4(-1.0), mask);
}

vec4 raySphereSecondIntersection(const vec3 origin, const vec3 direction, const vec4 radius) {
  return raySphereSecondIntersection(origin, direction, vec3(0.0), radius);
}

void raySphereIntersections(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const float radius,
  out float intersection1,
  out float intersection2
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  float c = dot(a, a) - radius * radius;
  float discriminant = b * b - 4.0 * c;
  if (discriminant < 0.0) {
    intersection1 = -1.0;
    intersection2 = -1.0;
    return;
  } else {
    float Q = sqrt(discriminant);
    intersection1 = (-b - Q) * 0.5;
    intersection2 = (-b + Q) * 0.5;
  }
}

void raySphereIntersections(
  const vec3 origin,
  const vec3 direction,
  const float radius,
  out float intersection1,
  out float intersection2
) {
  raySphereIntersections(origin, direction, vec3(0.0), radius, intersection1, intersection2);
}

void raySphereIntersections(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const vec4 radius,
  out vec4 intersection1,
  out vec4 intersection2
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  vec4 c = dot(a, a) - radius * radius;
  vec4 discriminant = b * b - 4.0 * c;
  vec4 mask = step(discriminant, vec4(0.0));
  vec4 Q = sqrt(max(vec4(0.0), discriminant));
  intersection1 = mix((-b - Q) * 0.5, vec4(-1.0), mask);
  intersection2 = mix((-b + Q) * 0.5, vec4(-1.0), mask);
}

void raySphereIntersections(
  const vec3 origin,
  const vec3 direction,
  const vec4 radius,
  out vec4 intersection1,
  out vec4 intersection2
) {
  raySphereIntersections(origin, direction, vec3(0.0), radius, intersection1, intersection2);
}
`,tE=`vec3 screenToView(
  const vec2 uv,
  const float depth,
  const float viewZ,
  const mat4 projectionMatrix,
  const mat4 inverseProjectionMatrix
) {
  vec4 clip = vec4(vec3(uv, depth) * 2.0 - 1.0, 1.0);
  float clipW = projectionMatrix[2][3] * viewZ + projectionMatrix[3][3];
  clip *= clipW;
  return (inverseProjectionMatrix * clip).xyz;
}
`,nE=`// A fifth-order polynomial approximation of Turbo color map.
// See: https://observablehq.com/@mbostock/turbo
// prettier-ignore
vec3 turbo(const float x) {
  float r = 0.1357 + x * (4.5974 - x * (42.3277 - x * (130.5887 - x * (150.5666 - x * 58.1375))));
  float g = 0.0914 + x * (2.1856 + x * (4.8052 - x * (14.0195 - x * (4.2109 + x * 2.7747))));
  float b = 0.1067 + x * (12.5925 - x * (60.1097 - x * (109.0745 - x * (88.5066 - x * 26.8183))));
  return vec3(r, g, b);
}
`,iE=`// Reference: https://www.gamedev.net/tutorials/programming/graphics/contact-hardening-soft-shadows-made-fast-r4906/

vec2 vogelDisk(const int index, const int sampleCount, const float phi) {
  const float goldenAngle = 2.39996322972865332;
  float r = sqrt(float(index) + 0.5) / sqrt(float(sampleCount));
  float theta = float(index) * goldenAngle + phi;
  return r * vec2(cos(theta), sin(theta));
}
`,pf=$x,mf=Zx,rE=jx,gf=Kx,Kl=Jx,aE=Qx,oo=eE,sE=tE,vf=nE,_f=iE,Jl=64,Ql=16,eu=32,tu=128,nu=32,iu=8,oE=iu*nu,cE=tu,lE=eu,ru=256,au=64,qs=1/1e3,uE=new F;function su(n,e,t,i){const r=t.projectOnSurface(n,uE);return r!=null?t.getOsculatingSphereCenter(r,e,i).negate():i.setScalar(0)}const co=`// Based on: https://github.com/ebruneton/precomputed_atmospheric_scattering/blob/master/atmosphere/functions.glsl

/**
 * Copyright (c) 2017 Eric Bruneton
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holders nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 *
 * Precomputed Atmospheric Scattering
 * Copyright (c) 2008 INRIA
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holders nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 */

Number ClampCosine(const Number mu) {
  return clamp(mu, Number(-1.0), Number(1.0));
}

Length ClampDistance(const Length d) {
  return max(d, 0.0 * m);
}

Length ClampRadius(const AtmosphereParameters atmosphere, const Length r) {
  return clamp(r, atmosphere.bottom_radius, atmosphere.top_radius);
}

Length SafeSqrt(const Area a) {
  return sqrt(max(a, 0.0 * m2));
}

Length DistanceToTopAtmosphereBoundary(const AtmosphereParameters atmosphere,
    const Length r, const Number mu) {
  assert(r <= atmosphere.top_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  Area discriminant = r * r * (mu * mu - 1.0) +
      atmosphere.top_radius * atmosphere.top_radius;
  return ClampDistance(-r * mu + SafeSqrt(discriminant));
}

Length DistanceToBottomAtmosphereBoundary(const AtmosphereParameters atmosphere,
    const Length r, const Number mu) {
  assert(r >= atmosphere.bottom_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  Area discriminant = r * r * (mu * mu - 1.0) +
      atmosphere.bottom_radius * atmosphere.bottom_radius;
  return ClampDistance(-r * mu - SafeSqrt(discriminant));
}

bool RayIntersectsGround(const AtmosphereParameters atmosphere,
    const Length r, const Number mu) {
  assert(r >= atmosphere.bottom_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  return mu < 0.0 && r * r * (mu * mu - 1.0) +
      atmosphere.bottom_radius * atmosphere.bottom_radius >= 0.0 * m2;
}

Number GetTextureCoordFromUnitRange(const Number x, const int texture_size) {
  return 0.5 / Number(texture_size) + x * (1.0 - 1.0 / Number(texture_size));
}

vec2 GetTransmittanceTextureUvFromRMu(const AtmosphereParameters atmosphere,
    const Length r, const Number mu) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  // Distance to top atmosphere boundary for a horizontal ray at ground level.
  Length H = sqrt(atmosphere.top_radius * atmosphere.top_radius -
      atmosphere.bottom_radius * atmosphere.bottom_radius);
  // Distance to the horizon.
  Length rho =
      SafeSqrt(r * r - atmosphere.bottom_radius * atmosphere.bottom_radius);
  // Distance to the top atmosphere boundary for the ray (r,mu), and its minimum
  // and maximum values over all mu - obtained for (r,1) and (r,mu_horizon).
  Length d = DistanceToTopAtmosphereBoundary(atmosphere, r, mu);
  Length d_min = atmosphere.top_radius - r;
  Length d_max = rho + H;
  Number x_mu = (d - d_min) / (d_max - d_min);
  Number x_r = rho / H;
  return vec2(GetTextureCoordFromUnitRange(x_mu, TRANSMITTANCE_TEXTURE_WIDTH),
              GetTextureCoordFromUnitRange(x_r, TRANSMITTANCE_TEXTURE_HEIGHT));
}

DimensionlessSpectrum GetTransmittanceToTopAtmosphereBoundary(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const Length r, const Number mu) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  vec2 uv = GetTransmittanceTextureUvFromRMu(atmosphere, r, mu);
  // @shotamatsuda: Added for the precomputation stage in half-float precision.
  #ifdef TRANSMITTANCE_PRECISION_LOG
  // Manually interpolate the transmittance instead of the optical depth.
  const vec2 size = vec2(TRANSMITTANCE_TEXTURE_WIDTH, TRANSMITTANCE_TEXTURE_HEIGHT);
  const vec3 texel_size = vec3(1.0 / size, 0.0);
  vec2 coord = (uv * size) - 0.5;
  vec2 i = (floor(coord) + 0.5) * texel_size.xy;
  vec2 f = fract(coord);
  vec4 t1 = exp(-texture(transmittance_texture, i));
  vec4 t2 = exp(-texture(transmittance_texture, i + texel_size.xz));
  vec4 t3 = exp(-texture(transmittance_texture, i + texel_size.zy));
  vec4 t4 = exp(-texture(transmittance_texture, i + texel_size.xy));
  return DimensionlessSpectrum(mix(mix(t1, t2, f.x), mix(t3, t4, f.x), f.y));
  #else // TRANSMITTANCE_PRECISION_LOG
  return DimensionlessSpectrum(texture(transmittance_texture, uv));
  #endif // TRANSMITTANCE_PRECISION_LOG
}

DimensionlessSpectrum GetTransmittance(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const Length r, const Number mu, const Length d,
    const bool ray_r_mu_intersects_ground) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  assert(d >= 0.0 * m);

  Length r_d = ClampRadius(atmosphere, sqrt(d * d + 2.0 * r * mu * d + r * r));
  Number mu_d = ClampCosine((r * mu + d) / r_d);

  if (ray_r_mu_intersects_ground) {
    return min(
        GetTransmittanceToTopAtmosphereBoundary(
            atmosphere, transmittance_texture, r_d, -mu_d) /
        GetTransmittanceToTopAtmosphereBoundary(
            atmosphere, transmittance_texture, r, -mu),
        DimensionlessSpectrum(1.0));
  } else {
    return min(
        GetTransmittanceToTopAtmosphereBoundary(
            atmosphere, transmittance_texture, r, mu) /
        GetTransmittanceToTopAtmosphereBoundary(
            atmosphere, transmittance_texture, r_d, mu_d),
        DimensionlessSpectrum(1.0));
  }
}

DimensionlessSpectrum GetTransmittanceToSun(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const Length r, const Number mu_s) {
  Number sin_theta_h = atmosphere.bottom_radius / r;
  Number cos_theta_h = -sqrt(max(1.0 - sin_theta_h * sin_theta_h, 0.0));
  return GetTransmittanceToTopAtmosphereBoundary(
          atmosphere, transmittance_texture, r, mu_s) *
      smoothstep(-sin_theta_h * atmosphere.sun_angular_radius / rad,
                 sin_theta_h * atmosphere.sun_angular_radius / rad,
                 mu_s - cos_theta_h);
}

InverseSolidAngle RayleighPhaseFunction(const Number nu) {
  InverseSolidAngle k = 3.0 / (16.0 * PI * sr);
  return k * (1.0 + nu * nu);
}

InverseSolidAngle MiePhaseFunction(const Number g, const Number nu) {
  InverseSolidAngle k = 3.0 / (8.0 * PI * sr) * (1.0 - g * g) / (2.0 + g * g);
  return k * (1.0 + nu * nu) / pow(1.0 + g * g - 2.0 * g * nu, 1.5);
}

vec4 GetScatteringTextureUvwzFromRMuMuSNu(const AtmosphereParameters atmosphere,
    const Length r, const Number mu, const Number mu_s, const Number nu,
    const bool ray_r_mu_intersects_ground) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  assert(mu_s >= -1.0 && mu_s <= 1.0);
  assert(nu >= -1.0 && nu <= 1.0);

  // Distance to top atmosphere boundary for a horizontal ray at ground level.
  Length H = sqrt(atmosphere.top_radius * atmosphere.top_radius -
      atmosphere.bottom_radius * atmosphere.bottom_radius);
  // Distance to the horizon.
  Length rho =
      SafeSqrt(r * r - atmosphere.bottom_radius * atmosphere.bottom_radius);
  Number u_r = GetTextureCoordFromUnitRange(rho / H, SCATTERING_TEXTURE_R_SIZE);

  // Discriminant of the quadratic equation for the intersections of the ray
  // (r,mu) with the ground (see RayIntersectsGround).
  Length r_mu = r * mu;
  Area discriminant =
      r_mu * r_mu - r * r + atmosphere.bottom_radius * atmosphere.bottom_radius;
  Number u_mu;
  if (ray_r_mu_intersects_ground) {
    // Distance to the ground for the ray (r,mu), and its minimum and maximum
    // values over all mu - obtained for (r,-1) and (r,mu_horizon).
    Length d = -r_mu - SafeSqrt(discriminant);
    Length d_min = r - atmosphere.bottom_radius;
    Length d_max = rho;
    u_mu = 0.5 - 0.5 * GetTextureCoordFromUnitRange(d_max == d_min ? 0.0 :
        (d - d_min) / (d_max - d_min), SCATTERING_TEXTURE_MU_SIZE / 2);
  } else {
    // Distance to the top atmosphere boundary for the ray (r,mu), and its
    // minimum and maximum values over all mu - obtained for (r,1) and
    // (r,mu_horizon).
    Length d = -r_mu + SafeSqrt(discriminant + H * H);
    Length d_min = atmosphere.top_radius - r;
    Length d_max = rho + H;
    u_mu = 0.5 + 0.5 * GetTextureCoordFromUnitRange(
        (d - d_min) / (d_max - d_min), SCATTERING_TEXTURE_MU_SIZE / 2);
  }

  Length d = DistanceToTopAtmosphereBoundary(
      atmosphere, atmosphere.bottom_radius, mu_s);
  Length d_min = atmosphere.top_radius - atmosphere.bottom_radius;
  Length d_max = H;
  Number a = (d - d_min) / (d_max - d_min);
  Length D = DistanceToTopAtmosphereBoundary(
      atmosphere, atmosphere.bottom_radius, atmosphere.mu_s_min);
  Number A = (D - d_min) / (d_max - d_min);
  // An ad-hoc function equal to 0 for mu_s = mu_s_min (because then d = D and
  // thus a = A), equal to 1 for mu_s = 1 (because then d = d_min and thus
  // a = 0), and with a large slope around mu_s = 0, to get more texture
  // samples near the horizon.
  Number u_mu_s = GetTextureCoordFromUnitRange(
      max(1.0 - a / A, 0.0) / (1.0 + a), SCATTERING_TEXTURE_MU_S_SIZE);

  Number u_nu = (nu + 1.0) / 2.0;
  return vec4(u_nu, u_mu_s, u_mu, u_r);
}

vec2 GetIrradianceTextureUvFromRMuS(const AtmosphereParameters atmosphere,
    const Length r, const Number mu_s) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu_s >= -1.0 && mu_s <= 1.0);
  Number x_r = (r - atmosphere.bottom_radius) /
      (atmosphere.top_radius - atmosphere.bottom_radius);
  Number x_mu_s = mu_s * 0.5 + 0.5;
  return vec2(GetTextureCoordFromUnitRange(x_mu_s, IRRADIANCE_TEXTURE_WIDTH),
              GetTextureCoordFromUnitRange(x_r, IRRADIANCE_TEXTURE_HEIGHT));
}

IrradianceSpectrum GetIrradiance(
    const AtmosphereParameters atmosphere,
    const IrradianceTexture irradiance_texture,
    const Length r, const Number mu_s) {
  vec2 uv = GetIrradianceTextureUvFromRMuS(atmosphere, r, mu_s);
  return IrradianceSpectrum(texture(irradiance_texture, uv));
}
`,lo=`// Based on: https://github.com/ebruneton/precomputed_atmospheric_scattering/blob/master/atmosphere/definitions.glsl

/**
 * Copyright (c) 2017 Eric Bruneton
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holders nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 */

#define assert(x)

#define Length float
#define Wavelength float
#define Angle float
#define SolidAngle float
#define Power float
#define LuminousPower float

#define Number float
#define InverseLength float
#define Area float
#define Volume float
#define NumberDensity float
#define Irradiance float
#define Radiance float
#define SpectralPower float
#define SpectralIrradiance float
#define SpectralRadiance float
#define SpectralRadianceDensity float
#define ScatteringCoefficient float
#define InverseSolidAngle float
#define LuminousIntensity float
#define Luminance float
#define Illuminance float

// A generic function from Wavelength to some other type.
#define AbstractSpectrum vec3
// A function from Wavelength to Number.
#define DimensionlessSpectrum vec3
// A function from Wavelength to SpectralPower.
#define PowerSpectrum vec3
// A function from Wavelength to SpectralIrradiance.
#define IrradianceSpectrum vec3
// A function from Wavelength to SpectralRadiance.
#define RadianceSpectrum vec3
// A function from Wavelength to SpectralRadianceDensity.
#define RadianceDensitySpectrum vec3
// A function from Wavelength to ScatteringCoefficient.
#define ScatteringSpectrum vec3

// A position in 3D (3 length values).
#define Position vec3
// A unit direction vector in 3D (3 unit-less values).
#define Direction vec3
// A vector of 3 luminance values.
#define Luminance3 vec3
// A vector of 3 illuminance values.
#define Illuminance3 vec3

#define TransmittanceTexture sampler2D
#define AbstractScatteringTexture sampler3D
#define ReducedScatteringTexture sampler3D
#define ScatteringTexture sampler3D
#define ScatteringDensityTexture sampler3D
#define IrradianceTexture sampler2D

const Length m = 1.0;
const Wavelength nm = 1.0;
const Angle rad = 1.0;
const SolidAngle sr = 1.0;
const Power watt = 1.0;
const LuminousPower lm = 1.0;

#if !defined(PI)
const float PI = 3.14159265358979323846;
#endif // !defined(PI)

const Length km = 1000.0 * m;
const Area m2 = m * m;
const Volume m3 = m * m * m;
const Angle pi = PI * rad;
const Angle deg = pi / 180.0;
const Irradiance watt_per_square_meter = watt / m2;
const Radiance watt_per_square_meter_per_sr = watt / (m2 * sr);
const SpectralIrradiance watt_per_square_meter_per_nm = watt / (m2 * nm);
const SpectralRadiance watt_per_square_meter_per_sr_per_nm = watt / (m2 * sr * nm);
const SpectralRadianceDensity watt_per_cubic_meter_per_sr_per_nm = watt / (m3 * sr * nm);
const LuminousIntensity cd = lm / sr;
const LuminousIntensity kcd = 1000.0 * cd;
const Luminance cd_per_square_meter = cd / m2;
const Luminance kcd_per_square_meter = kcd / m2;

struct DensityProfileLayer {
  Length width;
  Number exp_term;
  InverseLength exp_scale;
  InverseLength linear_term;
  Number constant_term;
};

struct DensityProfile {
  DensityProfileLayer layers[2];
};

// See AtmosphereParameter.ts for further details.
struct AtmosphereParameters {
  IrradianceSpectrum solar_irradiance;
  Angle sun_angular_radius;
  Length bottom_radius;
  Length top_radius;
  DensityProfile rayleigh_density;
  ScatteringSpectrum rayleigh_scattering;
  DensityProfile mie_density;
  ScatteringSpectrum mie_scattering;
  ScatteringSpectrum mie_extinction;
  Number mie_phase_function_g;
  DensityProfile absorption_density;
  ScatteringSpectrum absorption_extinction;
  DimensionlessSpectrum ground_albedo;
  Number mu_s_min;
};
`,uo=`// Based on: https://github.com/ebruneton/precomputed_atmospheric_scattering/blob/master/atmosphere/functions.glsl

/**
 * Copyright (c) 2017 Eric Bruneton
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holders nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 *
 * Precomputed Atmospheric Scattering
 * Copyright (c) 2008 INRIA
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holders nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 */

#ifdef COMBINED_SCATTERING_TEXTURES
vec3 GetExtrapolatedSingleMieScattering(
    const AtmosphereParameters atmosphere, const vec4 scattering) {
  // Algebraically this can never be negative, but rounding errors can produce
  // that effect for sufficiently short view rays.
  // @shotamatsuda: Avoid division by infinitesimal values.
  // See https://github.com/takram-design-engineering/three-geospatial/issues/47
  if (scattering.r < 1e-5) {
    return vec3(0.0);
  }
  return scattering.rgb * scattering.a / scattering.r *
	    (atmosphere.rayleigh_scattering.r / atmosphere.mie_scattering.r) *
	    (atmosphere.mie_scattering / atmosphere.rayleigh_scattering);
}
#endif // COMBINED_SCATTERING_TEXTURES

IrradianceSpectrum GetCombinedScattering(
    const AtmosphereParameters atmosphere,
    const ReducedScatteringTexture scattering_texture,
    const ReducedScatteringTexture single_mie_scattering_texture,
    const Length r, const Number mu, const Number mu_s, const Number nu,
    const bool ray_r_mu_intersects_ground,
    out IrradianceSpectrum single_mie_scattering) {
  vec4 uvwz = GetScatteringTextureUvwzFromRMuMuSNu(
      atmosphere, r, mu, mu_s, nu, ray_r_mu_intersects_ground);
  Number tex_coord_x = uvwz.x * Number(SCATTERING_TEXTURE_NU_SIZE - 1);
  Number tex_x = floor(tex_coord_x);
  Number lerp = tex_coord_x - tex_x;
  vec3 uvw0 = vec3((tex_x + uvwz.y) / Number(SCATTERING_TEXTURE_NU_SIZE),
      uvwz.z, uvwz.w);
  vec3 uvw1 = vec3((tex_x + 1.0 + uvwz.y) / Number(SCATTERING_TEXTURE_NU_SIZE),
      uvwz.z, uvwz.w);
#ifdef COMBINED_SCATTERING_TEXTURES
  vec4 combined_scattering =
      texture(scattering_texture, uvw0) * (1.0 - lerp) +
      texture(scattering_texture, uvw1) * lerp;
  IrradianceSpectrum scattering = IrradianceSpectrum(combined_scattering);
  single_mie_scattering =
      GetExtrapolatedSingleMieScattering(atmosphere, combined_scattering);
#else // COMBINED_SCATTERING_TEXTURES
  IrradianceSpectrum scattering = IrradianceSpectrum(
      texture(scattering_texture, uvw0) * (1.0 - lerp) +
      texture(scattering_texture, uvw1) * lerp);
  single_mie_scattering = IrradianceSpectrum(
      texture(single_mie_scattering_texture, uvw0) * (1.0 - lerp) +
      texture(single_mie_scattering_texture, uvw1) * lerp);
#endif // COMBINED_SCATTERING_TEXTURES
  return scattering;
}

// @shotamatsuda: Added for reading higher-order scattering texture.
#ifdef HAS_HIGHER_ORDER_SCATTERING_TEXTURE
IrradianceSpectrum GetScattering(
    const AtmosphereParameters atmosphere,
    const ReducedScatteringTexture scattering_texture,
    const Length r, const Number mu, const Number mu_s, const Number nu,
    const bool ray_r_mu_intersects_ground) {
  vec4 uvwz = GetScatteringTextureUvwzFromRMuMuSNu(
      atmosphere, r, mu, mu_s, nu, ray_r_mu_intersects_ground);
  Number tex_coord_x = uvwz.x * Number(SCATTERING_TEXTURE_NU_SIZE - 1);
  Number tex_x = floor(tex_coord_x);
  Number lerp = tex_coord_x - tex_x;
  vec3 uvw0 = vec3((tex_x + uvwz.y) / Number(SCATTERING_TEXTURE_NU_SIZE),
      uvwz.z, uvwz.w);
  vec3 uvw1 = vec3((tex_x + 1.0 + uvwz.y) / Number(SCATTERING_TEXTURE_NU_SIZE),
      uvwz.z, uvwz.w);
  IrradianceSpectrum scattering = IrradianceSpectrum(
      texture(scattering_texture, uvw0) * (1.0 - lerp) +
      texture(scattering_texture, uvw1) * lerp);
  return scattering;
}
#endif // HAS_HIGHER_ORDER_SCATTERING_TEXTURE

RadianceSpectrum GetSkyRadiance(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const ReducedScatteringTexture scattering_texture,
    const ReducedScatteringTexture single_mie_scattering_texture,
    Position camera, const Direction view_ray, const Length shadow_length,
    const Direction sun_direction,
    out DimensionlessSpectrum transmittance) {
  // Compute the distance to the top atmosphere boundary along the view ray,
  // assuming the viewer is in space (or NaN if the view ray does not intersect
  // the atmosphere).
  Length r = length(camera);
  Length rmu = dot(camera, view_ray);
  // @shotamatsuda: Use SafeSqrt instead.
  // See: https://github.com/takram-design-engineering/three-geospatial/pull/26
  Length distance_to_top_atmosphere_boundary = -rmu -
      SafeSqrt(rmu * rmu - r * r +
          atmosphere.top_radius * atmosphere.top_radius);
  // If the viewer is in space and the view ray intersects the atmosphere, move
  // the viewer to the top atmosphere boundary (along the view ray):
  if (distance_to_top_atmosphere_boundary > 0.0 * m) {
    camera = camera + view_ray * distance_to_top_atmosphere_boundary;
    r = atmosphere.top_radius;
    rmu += distance_to_top_atmosphere_boundary;
  } else if (r > atmosphere.top_radius) {
    // If the view ray does not intersect the atmosphere, simply return 0.
    transmittance = DimensionlessSpectrum(1.0);
    return RadianceSpectrum(0.0 * watt_per_square_meter_per_sr_per_nm);
  }
  // Compute the r, mu, mu_s and nu parameters needed for the texture lookups.
  Number mu = rmu / r;
  Number mu_s = dot(camera, sun_direction) / r;
  Number nu = dot(view_ray, sun_direction);

  // @shotamatsuda: For rendering points below the bottom atmosphere.
  #ifdef GROUND
  bool ray_r_mu_intersects_ground = RayIntersectsGround(atmosphere, r, mu);
  #else // GROUND
  bool ray_r_mu_intersects_ground = false;
  #endif // GROUND

  transmittance = ray_r_mu_intersects_ground ? DimensionlessSpectrum(0.0) :
      GetTransmittanceToTopAtmosphereBoundary(
          atmosphere, transmittance_texture, r, mu);
  IrradianceSpectrum single_mie_scattering;
  IrradianceSpectrum scattering;
  if (shadow_length == 0.0 * m) {
    scattering = GetCombinedScattering(
        atmosphere, scattering_texture, single_mie_scattering_texture,
        r, mu, mu_s, nu, ray_r_mu_intersects_ground,
        single_mie_scattering);
  } else {
    // Case of light shafts (shadow_length is the total length noted l in our
    // paper): we omit the scattering between the camera and the point at
    // distance l, by implementing Eq. (18) of the paper (shadow_transmittance
    // is the T(x,x_s) term, scattering is the S|x_s=x+lv term).
    Length d = shadow_length;
    Length r_p =
        ClampRadius(atmosphere, sqrt(d * d + 2.0 * r * mu * d + r * r));
    Number mu_p = (r * mu + d) / r_p;
    Number mu_s_p = (r * mu_s + d * nu) / r_p;

    scattering = GetCombinedScattering(
        atmosphere, scattering_texture, single_mie_scattering_texture,
        r_p, mu_p, mu_s_p, nu, ray_r_mu_intersects_ground,
        single_mie_scattering);
    DimensionlessSpectrum shadow_transmittance =
        GetTransmittance(atmosphere, transmittance_texture,
            r, mu, shadow_length, ray_r_mu_intersects_ground);
    // @shotamatsuda: Occlude only single Rayleigh scattering by the shadow.
#ifdef HAS_HIGHER_ORDER_SCATTERING_TEXTURE
    IrradianceSpectrum higher_order_scattering = GetScattering(
        atmosphere, higher_order_scattering_texture,
        r_p, mu_p, mu_s_p, nu, ray_r_mu_intersects_ground);
    IrradianceSpectrum single_scattering = scattering - higher_order_scattering;
    scattering = single_scattering * shadow_transmittance + higher_order_scattering;
#else // HAS_HIGHER_ORDER_SCATTERING_TEXTURE
    scattering = scattering * shadow_transmittance;
#endif // HAS_HIGHER_ORDER_SCATTERING_TEXTURE
    single_mie_scattering = single_mie_scattering * shadow_transmittance;
  }
  return scattering * RayleighPhaseFunction(nu) + single_mie_scattering *
      MiePhaseFunction(atmosphere.mie_phase_function_g, nu);
}

// @shotamatsuda: Returns the point on the ray closest to the origin.
vec3 ClosestPointOnRay(const Position camera, const Position point) {
  Position ray = point - camera;
  Number t = clamp(-dot(camera, ray) / dot(ray, ray), 0.0, 1.0);
  return camera + t * ray;
}

vec2 RaySphereIntersections(
    const Position camera, const Direction direction, const Length radius) {
  float b = 2.0 * dot(direction, camera);
  float c = dot(camera, camera) - radius * radius;
  float discriminant = b * b - 4.0 * c;
  float Q = sqrt(discriminant);
  return vec2(-b - Q, -b + Q) * 0.5;
}

// @shotamatsuda: Clip the view ray at the bottom atmosphere boundary.
bool ClipAtBottomAtmosphere(
    const AtmosphereParameters atmosphere,
    const Direction view_ray, inout Position camera, inout Position point) {
  const Length eps = 0.0;
  Length bottom_radius = atmosphere.bottom_radius + eps;
  Length r_camera = length(camera);
  Length r_point = length(point);
  bool camera_below = r_camera < bottom_radius;
  bool point_below = r_point < bottom_radius;

  vec2 t = RaySphereIntersections(camera, view_ray, bottom_radius);
  Position intersection = camera + view_ray * (camera_below ? t.y : t.x);
  camera = camera_below ? intersection : camera;
  point = point_below ? intersection : point;

  return camera_below && point_below;
}

RadianceSpectrum GetSkyRadianceToPoint(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const ReducedScatteringTexture scattering_texture,
    const ReducedScatteringTexture single_mie_scattering_texture,
    Position camera, Position point, const Length shadow_length,
    const Direction sun_direction, out DimensionlessSpectrum transmittance) {
  // @shotamatsuda: Avoid artifacts when the ray does not intersect the top
  // atmosphere boundary.
  if (length(ClosestPointOnRay(camera, point)) > atmosphere.top_radius) {
    transmittance = vec3(1.0);
    return vec3(0.0);
  }

  Direction view_ray = normalize(point - camera);
  if (ClipAtBottomAtmosphere(atmosphere, view_ray, camera, point)) {
    transmittance = vec3(1.0);
    return vec3(0.0);
  }

  // Compute the distance to the top atmosphere boundary along the view ray,
  // assuming the viewer is in space (or NaN if the view ray does not intersect
  // the atmosphere).
  Length r = length(camera);
  Length rmu = dot(camera, view_ray);
  // @shotamatsuda: Use SafeSqrt instead.
  // See: https://github.com/takram-design-engineering/three-geospatial/pull/26
  Length distance_to_top_atmosphere_boundary = -rmu -
      SafeSqrt(rmu * rmu - r * r +
          atmosphere.top_radius * atmosphere.top_radius);
  // If the viewer is in space and the view ray intersects the atmosphere, move
  // the viewer to the top atmosphere boundary (along the view ray):
  if (distance_to_top_atmosphere_boundary > 0.0 * m) {
    camera = camera + view_ray * distance_to_top_atmosphere_boundary;
    r = atmosphere.top_radius;
    rmu += distance_to_top_atmosphere_boundary;
  }

  // Compute the r, mu, mu_s and nu parameters for the first texture lookup.
  Number mu = rmu / r;
  Number mu_s = dot(camera, sun_direction) / r;
  Number nu = dot(view_ray, sun_direction);
  Length d = length(point - camera);
  bool ray_r_mu_intersects_ground = RayIntersectsGround(atmosphere, r, mu);

  // @shotamatsuda: Hack to avoid rendering artifacts near the horizon, due to
  // finite atmosphere texture resolution and finite floating point precision.
  // See: https://github.com/ebruneton/precomputed_atmospheric_scattering/pull/32
  if (!ray_r_mu_intersects_ground) {
    Number mu_horizon = -SafeSqrt(1.0 -
        (atmosphere.bottom_radius * atmosphere.bottom_radius) / (r * r));
    const Number eps = 0.004;
    mu = max(mu, mu_horizon + eps);
  }

  transmittance = GetTransmittance(atmosphere, transmittance_texture,
      r, mu, d, ray_r_mu_intersects_ground);

  IrradianceSpectrum single_mie_scattering;
  IrradianceSpectrum scattering = GetCombinedScattering(
      atmosphere, scattering_texture, single_mie_scattering_texture,
      r, mu, mu_s, nu, ray_r_mu_intersects_ground,
      single_mie_scattering);

  // Compute the r, mu, mu_s and nu parameters for the second texture lookup.
  // If shadow_length is not 0 (case of light shafts), we want to ignore the
  // scattering along the last shadow_length meters of the view ray, which we
  // do by subtracting shadow_length from d (this way scattering_p is equal to
  // the S|x_s=x_0-lv term in Eq. (17) of our paper).
  d = max(d - shadow_length, 0.0 * m);
  Length r_p = ClampRadius(atmosphere, sqrt(d * d + 2.0 * r * mu * d + r * r));
  Number mu_p = (r * mu + d) / r_p;
  Number mu_s_p = (r * mu_s + d * nu) / r_p;

  IrradianceSpectrum single_mie_scattering_p;
  IrradianceSpectrum scattering_p = GetCombinedScattering(
      atmosphere, scattering_texture, single_mie_scattering_texture,
      r_p, mu_p, mu_s_p, nu, ray_r_mu_intersects_ground,
      single_mie_scattering_p);

  // Combine the lookup results to get the scattering between camera and point.
  DimensionlessSpectrum shadow_transmittance = transmittance;
  if (shadow_length > 0.0 * m) {
    // This is the T(x,x_s) term in Eq. (17) of our paper, for light shafts.
    shadow_transmittance = GetTransmittance(atmosphere, transmittance_texture,
        r, mu, d, ray_r_mu_intersects_ground);
  }
  // @shotamatsuda: Occlude only single Rayleigh scattering by the shadow.
#ifdef HAS_HIGHER_ORDER_SCATTERING_TEXTURE
  IrradianceSpectrum higher_order_scattering = GetScattering(
      atmosphere, higher_order_scattering_texture,
      r, mu, mu_s, nu, ray_r_mu_intersects_ground);
  IrradianceSpectrum single_scattering = scattering - higher_order_scattering;
  IrradianceSpectrum higher_order_scattering_p = GetScattering(
      atmosphere, higher_order_scattering_texture,
      r_p, mu_p, mu_s_p, nu, ray_r_mu_intersects_ground);
  IrradianceSpectrum single_scattering_p =
      scattering_p - higher_order_scattering_p;
  scattering =
      single_scattering - shadow_transmittance * single_scattering_p +
      higher_order_scattering - transmittance * higher_order_scattering_p;
#else // HAS_HIGHER_ORDER_SCATTERING_TEXTURE
  scattering = scattering - shadow_transmittance * scattering_p;
#endif // HAS_HIGHER_ORDER_SCATTERING_TEXTURE

  single_mie_scattering =
      single_mie_scattering - shadow_transmittance * single_mie_scattering_p;
#ifdef COMBINED_SCATTERING_TEXTURES
  single_mie_scattering = GetExtrapolatedSingleMieScattering(
      atmosphere, vec4(scattering, single_mie_scattering.r));
#endif // COMBINED_SCATTERING_TEXTURES

  // Hack to avoid rendering artifacts when the sun is below the horizon.
  single_mie_scattering = single_mie_scattering *
      smoothstep(Number(0.0), Number(0.01), mu_s);

  return scattering * RayleighPhaseFunction(nu) + single_mie_scattering *
      MiePhaseFunction(atmosphere.mie_phase_function_g, nu);
}

IrradianceSpectrum GetSunAndSkyIrradiance(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const IrradianceTexture irradiance_texture,
    const Position point, const Direction normal, const Direction sun_direction,
    out IrradianceSpectrum sky_irradiance) {
  Length r = length(point);
  Number mu_s = dot(point, sun_direction) / r;

  // Indirect irradiance (approximated if the surface is not horizontal).
  sky_irradiance = GetIrradiance(atmosphere, irradiance_texture, r, mu_s) *
      (1.0 + dot(normal, point) / r) * 0.5;

  // Direct irradiance.
  return atmosphere.solar_irradiance *
      GetTransmittanceToSun(
          atmosphere, transmittance_texture, r, mu_s) *
      max(dot(normal, sun_direction), 0.0);
}

// @shotamatsuda: Added for the clouds.
IrradianceSpectrum GetSunAndSkyScalarIrradiance(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const IrradianceTexture irradiance_texture,
    const Position point, const Direction sun_direction,
    out IrradianceSpectrum sky_irradiance) {
  Length r = length(point);
  Number mu_s = dot(point, sun_direction) / r;

  // Indirect irradiance. Integral over sphere yields 2π.
  sky_irradiance = GetIrradiance(atmosphere, irradiance_texture, r, mu_s) *
      2.0 * PI;

  // Direct irradiance. Omit the cosine term.
  return atmosphere.solar_irradiance *
      GetTransmittanceToSun(atmosphere, transmittance_texture, r, mu_s);
}

Luminance3 GetSolarLuminance() {
  return ATMOSPHERE.solar_irradiance /
      (PI * ATMOSPHERE.sun_angular_radius * ATMOSPHERE.sun_angular_radius) *
      SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
}

Luminance3 GetSkyLuminance(
    const Position camera, Direction view_ray, const Length shadow_length,
    const Direction sun_direction, out DimensionlessSpectrum transmittance) {
  return GetSkyRadiance(ATMOSPHERE, transmittance_texture,
      scattering_texture, single_mie_scattering_texture,
      camera, view_ray, shadow_length, sun_direction,
      transmittance) * SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
}

Luminance3 GetSkyLuminanceToPoint(
    const Position camera, const Position point, const Length shadow_length,
    const Direction sun_direction, out DimensionlessSpectrum transmittance) {
  return GetSkyRadianceToPoint(ATMOSPHERE, transmittance_texture,
      scattering_texture, single_mie_scattering_texture,
      camera, point, shadow_length, sun_direction, transmittance) *
      SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
}

Illuminance3 GetSunAndSkyIlluminance(
    const Position p, const Direction normal, const Direction sun_direction,
    out IrradianceSpectrum sky_irradiance) {
  IrradianceSpectrum sun_irradiance = GetSunAndSkyIrradiance(
      ATMOSPHERE, transmittance_texture, irradiance_texture, p, normal,
      sun_direction, sky_irradiance);
  sky_irradiance *= SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
  return sun_irradiance * SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
}

// @shotamatsuda: Added for the clouds.
Illuminance3 GetSunAndSkyScalarIlluminance(
    const Position p, const Direction sun_direction,
    out IrradianceSpectrum sky_irradiance) {
  IrradianceSpectrum sun_irradiance = GetSunAndSkyScalarIrradiance(
      ATMOSPHERE, transmittance_texture, irradiance_texture, p,
      sun_direction, sky_irradiance);
  sky_irradiance *= SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
  return sun_irradiance * SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
}

#define GetSolarRadiance GetSolarLuminance
#define GetSkyRadiance GetSkyLuminance
#define GetSkyRadianceToPoint GetSkyLuminanceToPoint
#define GetSunAndSkyIrradiance GetSunAndSkyIlluminance
#define GetSunAndSkyScalarIrradiance GetSunAndSkyScalarIlluminance
`,hE=new F(.2126,.7152,.0722),dE=["solarIrradiance","sunAngularRadius","bottomRadius","topRadius","rayleighDensity","rayleighScattering","mieDensity","mieScattering","mieExtinction","miePhaseFunctionG","absorptionDensity","absorptionExtinction","groundAlbedo","muSMin","skyRadianceToLuminance","sunRadianceToLuminance"];function fE(n,e){if(e!=null)for(const t of dE){const i=e[t];i!=null&&(n[t]instanceof F?n[t].copy(i):n[t]=i)}}class Tr{constructor(e,t,i,r,a){this.width=e,this.expTerm=t,this.expScale=i,this.linearTerm=r,this.constantTerm=a}toUniform(){return new U({width:this.width,exp_term:this.expTerm,exp_scale:this.expScale,linear_term:this.linearTerm,constant_term:this.constantTerm})}}const hl=class{constructor(e){this.solarIrradiance=new F(1.474,1.8504,1.91198),this.sunAngularRadius=.004675,this.bottomRadius=636e4,this.topRadius=642e4,this.rayleighDensity=[new Tr(0,0,0,0,0),new Tr(0,1,-.125,0,0)],this.rayleighScattering=new F(.005802,.013558,.0331),this.mieDensity=[new Tr(0,0,0,0,0),new Tr(0,1,-.833333,0,0)],this.mieScattering=new F(.003996,.003996,.003996),this.mieExtinction=new F(.00444,.00444,.00444),this.miePhaseFunctionG=.8,this.absorptionDensity=[new Tr(25,0,0,1/15,-2/3),new Tr(0,0,0,-1/15,8/3)],this.absorptionExtinction=new F(65e-5,.001881,85e-6),this.groundAlbedo=new ft().setScalar(.1),this.muSMin=Math.cos(ul(120)),this.sunRadianceToLuminance=new F(98242.786222,69954.398112,66475.012354),this.skyRadianceToLuminance=new F(114974.916437,71305.954816,65310.548555),this.sunRadianceToRelativeLuminance=new F,this.skyRadianceToRelativeLuminance=new F,fE(this,e);const t=hE.dot(this.sunRadianceToLuminance);this.sunRadianceToRelativeLuminance.copy(this.sunRadianceToLuminance).divideScalar(t),this.skyRadianceToRelativeLuminance.copy(this.skyRadianceToLuminance).divideScalar(t)}toUniform(){return new U({solar_irradiance:this.solarIrradiance,sun_angular_radius:this.sunAngularRadius,bottom_radius:this.bottomRadius*qs,top_radius:this.topRadius*qs,rayleigh_density:{layers:this.rayleighDensity.map(e=>e.toUniform().value)},rayleigh_scattering:this.rayleighScattering,mie_density:{layers:this.mieDensity.map(e=>e.toUniform().value)},mie_scattering:this.mieScattering,mie_extinction:this.mieExtinction,mie_phase_function_g:this.miePhaseFunctionG,absorption_density:{layers:this.absorptionDensity.map(e=>e.toUniform().value)},absorption_extinction:this.absorptionExtinction,ground_albedo:this.groundAlbedo,mu_s_min:this.muSMin})}};hl.DEFAULT=new hl;let ho=hl;const pE=`precision highp sampler2DArray;

#include "core/depth"
#include "core/math"
#include "core/packing"
#include "core/transform"
#ifdef HAS_SHADOW
#include "core/raySphereIntersection"
#include "core/cascadedShadowMaps"
#include "core/interleavedGradientNoise"
#include "core/vogelDisk"
#endif // HAS_SHADOW

#include "bruneton/definitions"

uniform AtmosphereParameters ATMOSPHERE;
uniform vec3 SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
uniform vec3 SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;

uniform sampler2D transmittance_texture;
uniform sampler3D scattering_texture;
uniform sampler2D irradiance_texture;
uniform sampler3D single_mie_scattering_texture;
uniform sampler3D higher_order_scattering_texture;

#include "bruneton/common"
#include "bruneton/runtime"

uniform sampler2D normalBuffer;

uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 inverseProjectionMatrix;
uniform mat4 inverseViewMatrix;
uniform float bottomRadius;
uniform mat4 worldToECEFMatrix;
uniform float geometricErrorCorrectionAmount;
uniform vec3 sunDirection;
uniform float cosSunAngularRadius;
uniform vec3 moonDirection;
uniform float moonAngularRadius;
uniform float lunarRadianceScale;
uniform float albedoScale;

#include "sky"

#ifdef HAS_LIGHTING_MASK
uniform sampler2D lightingMaskBuffer;
#endif // HAS_LIGHTING_MASK

// prettier-ignore
#define LIGHTING_MASK_CHANNEL_ LIGHTING_MASK_CHANNEL

#ifdef HAS_OVERLAY
uniform sampler2D overlayBuffer;
#endif // HAS_OVERLAY

#ifdef HAS_SHADOW
uniform sampler2DArray shadowBuffer;
uniform vec2 shadowIntervals[SHADOW_CASCADE_COUNT];
uniform mat4 shadowMatrices[SHADOW_CASCADE_COUNT];
uniform mat4 inverseShadowMatrices[SHADOW_CASCADE_COUNT];
uniform float shadowFar;
uniform float shadowTopHeight;
uniform float shadowRadius;
uniform sampler3D stbnTexture;
uniform int frame;
#endif // HAS_SHADOW

#ifdef HAS_SHADOW_LENGTH
uniform sampler2D shadowLengthBuffer;
#endif // HAS_SHADOW_LENGTH

varying vec3 vCameraPosition;
varying vec3 vRayDirection;
varying vec3 vGeometryAltitudeCorrection;
varying vec3 vEllipsoidRadiiSquared;

vec3 readNormal(const vec2 uv, out bool degenerate) {
  vec3 normal = texture(normalBuffer, uv).xyz;
  degenerate = normal == vec3(0.0);
  #ifdef OCT_ENCODED_NORMAL
  return unpackVec2ToNormal(normal.xy);
  #else // OCT_ENCODED_NORMAL
  return 2.0 * normal - 1.0;
  #endif // OCT_ENCODED_NORMAL
}

void correctGeometricError(inout vec3 positionECEF, inout vec3 normalECEF) {
  // TODO: The error is pronounced at the edge of the ellipsoid due to the
  // large difference between the sphere position and the unprojected position
  // at the current fragment. Calculating the sphere position from the fragment
  // UV may resolve this.

  // Correct way is slerp, but this will be small-angle interpolation anyways.
  vec3 sphereNormal = normalize(positionECEF / vEllipsoidRadiiSquared);
  vec3 spherePosition = ATMOSPHERE.bottom_radius * sphereNormal;
  normalECEF = mix(normalECEF, sphereNormal, geometricErrorCorrectionAmount);
  positionECEF = mix(positionECEF, spherePosition, geometricErrorCorrectionAmount);
}

#if defined(SUN_LIGHT) || defined(SKY_LIGHT)

vec3 getSunSkyIrradiance(
  const vec3 positionECEF,
  const vec3 normal,
  const vec3 inputColor,
  const float sunTransmittance
) {
  // Assume lambertian BRDF. If both SUN_LIGHT and SKY_LIGHT are not defined,
  // regard the inputColor as radiance at the texel.
  vec3 diffuse = inputColor * albedoScale * RECIPROCAL_PI;
  vec3 skyIrradiance;
  vec3 sunIrradiance = GetSunAndSkyIrradiance(positionECEF, normal, sunDirection, skyIrradiance);

  #ifdef HAS_SHADOW
  sunIrradiance *= sunTransmittance;
  #endif // HAS_SHADOW

  #if defined(SUN_LIGHT) && defined(SKY_LIGHT)
  return diffuse * (sunIrradiance + skyIrradiance);
  #elif defined(SUN_LIGHT)
  return diffuse * sunIrradiance;
  #elif defined(SKY_LIGHT)
  return diffuse * skyIrradiance;
  #endif // defined(SUN_LIGHT) && defined(SKY_LIGHT)
}

#endif // defined(SUN_LIGHT) || defined(SKY_LIGHT)

#if defined(TRANSMITTANCE) || defined(INSCATTER)

void applyTransmittanceInscatter(const vec3 positionECEF, float shadowLength, inout vec3 radiance) {
  vec3 transmittance;
  vec3 inscatter = GetSkyRadianceToPoint(
    vCameraPosition,
    positionECEF,
    shadowLength,
    sunDirection,
    transmittance
  );
  #ifdef TRANSMITTANCE
  radiance = radiance * transmittance;
  #endif // TRANSMITTANCE
  #ifdef INSCATTER
  radiance = radiance + inscatter;
  #endif // INSCATTER
}

#endif // defined(TRANSMITTANCE) || defined(INSCATTER)

#ifdef HAS_SHADOW

float getSTBN() {
  ivec3 size = textureSize(stbnTexture, 0);
  vec3 scale = 1.0 / vec3(size);
  return texture(stbnTexture, vec3(gl_FragCoord.xy, float(frame % size.z)) * scale).r;
}

vec2 getShadowUv(const vec3 worldPosition, const int cascadeIndex) {
  vec4 clip = shadowMatrices[cascadeIndex] * vec4(worldPosition, 1.0);
  clip /= clip.w;
  return clip.xy * 0.5 + 0.5;
}

float getDistanceToShadowTop(const vec3 positionECEF) {
  // Distance to the top of the shadows along the sun direction, which matches
  // the ray origin of BSM.
  return raySphereSecondIntersection(
    positionECEF / METER_TO_LENGTH_UNIT, // TODO: Make units consistent
    sunDirection,
    vec3(0.0),
    bottomRadius + shadowTopHeight
  );
}

float readShadowOpticalDepth(const vec2 uv, const float distanceToTop, const int cascadeIndex) {
  // r: frontDepth, g: meanExtinction, b: maxOpticalDepth, a: maxOpticalDepthTail
  vec4 shadow = texture(shadowBuffer, vec3(uv, float(cascadeIndex)));
  // Omit adding maxOpticalDepthTail to avoid pronounced aliasing. Ground
  // shadow will be attenuated by inscatter anyways.
  return min(shadow.b, shadow.g * max(0.0, distanceToTop - shadow.r));
}

float sampleShadowOpticalDepthPCF(
  const vec3 worldPosition,
  const float distanceToTop,
  const float radius,
  const int cascadeIndex
) {
  vec2 uv = getShadowUv(worldPosition, cascadeIndex);
  if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
    return 0.0;
  }

  vec2 texelSize = vec2(1.0) / vec2(textureSize(shadowBuffer, 0).xy);
  float sum = 0.0;
  vec2 offset;
  #pragma unroll_loop_start
  for (int i = 0; i < 16; ++i) {
    #if UNROLLED_LOOP_INDEX < SHADOW_SAMPLE_COUNT
    offset = vogelDisk(
      UNROLLED_LOOP_INDEX,
      SHADOW_SAMPLE_COUNT,
      interleavedGradientNoise(gl_FragCoord.xy) * PI2
    );
    sum += readShadowOpticalDepth(uv + offset * radius * texelSize, distanceToTop, cascadeIndex);
    #endif // UNROLLED_LOOP_INDEX < SHADOW_SAMPLE_COUNT
  }
  #pragma unroll_loop_end
  return sum / float(SHADOW_SAMPLE_COUNT);
}

float sampleShadowOpticalDepth(
  const vec3 worldPosition,
  const vec3 positionECEF,
  const float radius,
  const float jitter
) {
  float distanceToTop = getDistanceToShadowTop(positionECEF);
  if (distanceToTop <= 0.0) {
    return 0.0;
  }
  int cascadeIndex = getFadedCascadeIndex(
    viewMatrix,
    worldPosition,
    shadowIntervals,
    cameraNear,
    shadowFar,
    jitter
  );
  return cascadeIndex >= 0
    ? sampleShadowOpticalDepthPCF(worldPosition, distanceToTop, radius, cascadeIndex)
    : 0.0;
}

float getShadowRadius(const vec3 worldPosition) {
  vec4 clip = shadowMatrices[0] * vec4(worldPosition, 1.0);
  clip /= clip.w;

  // Offset by 1px in each direction in shadow's clip coordinates.
  vec2 shadowSize = vec2(textureSize(shadowBuffer, 0));
  vec3 offset = vec3(2.0 / shadowSize, 0.0);
  vec4 clipX = clip + offset.xzzz;
  vec4 clipY = clip + offset.zyzz;

  // Convert back to world space.
  vec4 worldX = inverseShadowMatrices[0] * clipX;
  vec4 worldY = inverseShadowMatrices[0] * clipY;

  // Project into the main camera's clip space.
  mat4 viewProjectionMatrix = projectionMatrix * viewMatrix;
  vec4 projected = viewProjectionMatrix * vec4(worldPosition, 1.0);
  vec4 projectedX = viewProjectionMatrix * worldX;
  vec4 projectedY = viewProjectionMatrix * worldY;
  projected /= projected.w;
  projectedX /= projectedX.w;
  projectedY /= projectedY.w;

  // Take the mean of pixel sizes.
  vec2 center = (projected.xy * 0.5 + 0.5) * resolution;
  vec2 offsetX = (projectedX.xy * 0.5 + 0.5) * resolution;
  vec2 offsetY = (projectedY.xy * 0.5 + 0.5) * resolution;
  float size = max(length(offsetX - center), length(offsetY - center));

  return remapClamped(size, 10.0, 50.0, 0.0, shadowRadius);
}

#endif // HAS_SHADOW

void mainImage(const vec4 inputColor, const vec2 uv, out vec4 outputColor) {
  #if defined(HAS_LIGHTING_MASK) && defined(DEBUG_SHOW_LIGHTING_MASK)
  outputColor.rgb = vec3(texture(lightingMaskBuffer, uv).LIGHTING_MASK_CHANNEL_);
  outputColor.a = 1.0;
  return;
  #endif // defined(HAS_LIGHTING_MASK) && defined(DEBUG_SHOW_LIGHTING_MASK)

  float shadowLength = 0.0;
  #ifdef HAS_SHADOW_LENGTH
  shadowLength = texture(shadowLengthBuffer, uv).r;
  #endif // HAS_SHADOW_LENGTH

  #ifdef HAS_OVERLAY
  vec4 overlay = texture(overlayBuffer, uv);
  if (overlay.a == 1.0) {
    outputColor = overlay;
    return;
  }
  #endif // HAS_OVERLAY

  vec3 rayDirection = normalize(vRayDirection);
  vec3 dRDdx = dFdx(rayDirection);
  vec3 dRDdy = dFdy(rayDirection);
  float fragmentAngle = length(dRDdx + dRDdy) / length(rayDirection);

  float depth = readDepthValue(depthBuffer, uv);
  if (depth >= 1.0 - 1e-8) {
    #ifdef SKY
    outputColor.rgb = getSkyRadiance(
      vCameraPosition,
      rayDirection,
      shadowLength,
      sunDirection,
      moonDirection,
      moonAngularRadius,
      lunarRadianceScale,
      fragmentAngle
    );
    outputColor.a = 1.0;
    #else // SKY
    outputColor = inputColor;
    #endif // SKY

    #ifdef HAS_OVERLAY
    outputColor.rgb = outputColor.rgb * (1.0 - overlay.a) + overlay.rgb;
    #endif // HAS_OVERLAY
    return;
  }
  depth = reverseLogDepth(depth, cameraNear, cameraFar);

  // Reconstruct position and normal in world space.
  vec3 viewPosition = screenToView(
    uv,
    depth,
    getViewZ(depth),
    projectionMatrix,
    inverseProjectionMatrix
  );
  vec3 worldPosition = (inverseViewMatrix * vec4(viewPosition, 1.0)).xyz;
  vec3 positionECEF = (worldToECEFMatrix * vec4(worldPosition, 1.0)).xyz;
  positionECEF = positionECEF * METER_TO_LENGTH_UNIT + vGeometryAltitudeCorrection;

  vec3 viewNormal;
  bool degenerateNormal = false;
  #ifdef RECONSTRUCT_NORMAL
  vec3 dVPdx = dFdx(viewPosition);
  vec3 dVPdy = dFdy(viewPosition);
  viewNormal = normalize(cross(dVPdx, dVPdy));
  #elif defined(HAS_NORMALS)
  viewNormal = readNormal(uv, degenerateNormal);
  #endif // defined(HAS_NORMALS)

  #if defined(RECONSTRUCT_NORMAL) || defined(HAS_NORMALS)
  vec3 worldNormal = (inverseViewMatrix * vec4(viewNormal, 0.0)).xyz;
  vec3 normalECEF = (worldToECEFMatrix * vec4(worldNormal, 0.0)).xyz;
  #else // defined(RECONSTRUCT_NORMAL) || defined(HAS_NORMALS)
  vec3 normalECEF = normalize(positionECEF);
  #endif // defined(RECONSTRUCT_NORMAL) || defined(HAS_NORMALS)

  #ifdef CORRECT_GEOMETRIC_ERROR
  correctGeometricError(positionECEF, normalECEF);
  #endif // CORRECT_GEOMETRIC_ERROR

  #ifdef HAS_SHADOW
  float stbn = getSTBN();
  float radius = getShadowRadius(worldPosition);
  float opticalDepth = sampleShadowOpticalDepth(worldPosition, positionECEF, radius, stbn);
  float sunTransmittance = exp(-opticalDepth);
  #else // HAS_SHADOW
  float sunTransmittance = 1.0;
  #endif // HAS_SHADOW

  vec3 radiance;
  #if defined(SUN_LIGHT) || defined(SKY_LIGHT)
  // WORKAROUND: When both post-process lighting and sky options are enabled,
  // stars have degenerate normals. We use this to disable irradiance, which is
  // irrelevant for them.
  if (!degenerateNormal) {
    radiance = getSunSkyIrradiance(positionECEF, normalECEF, inputColor.rgb, sunTransmittance);
  } else {
    radiance = inputColor.rgb;
  }
  #ifdef HAS_LIGHTING_MASK
  float lightingMask = texture(lightingMaskBuffer, uv).LIGHTING_MASK_CHANNEL_;
  radiance = mix(inputColor.rgb, radiance, lightingMask);
  #endif // HAS_LIGHTING_MASK
  #else // defined(SUN_LIGHT) || defined(SKY_LIGHT)
  radiance = inputColor.rgb;
  #endif // defined(SUN_LIGHT) || defined(SKY_LIGHT)

  #if defined(TRANSMITTANCE) || defined(INSCATTER)
  applyTransmittanceInscatter(positionECEF, shadowLength, radiance);
  #endif // defined(TRANSMITTANCE) || defined(INSCATTER)

  outputColor = vec4(radiance, inputColor.a);

  #ifdef HAS_OVERLAY
  outputColor.rgb = outputColor.rgb * (1.0 - overlay.a) + overlay.rgb;
  #endif // HAS_OVERLAY
}
`,mE=`uniform mat4 inverseViewMatrix;
uniform mat4 inverseProjectionMatrix;
uniform vec3 cameraPosition;
uniform mat4 worldToECEFMatrix;
uniform vec3 altitudeCorrection;
uniform float geometricErrorCorrectionAmount;
uniform vec3 ellipsoidRadii;

varying vec3 vCameraPosition;
varying vec3 vRayDirection;
varying vec3 vGeometryAltitudeCorrection;
varying vec3 vEllipsoidRadiiSquared;

void getCameraRay(out vec3 origin, out vec3 direction) {
  bool isPerspective = inverseProjectionMatrix[2][3] != 0.0; // 4th entry in the 3rd column

  if (isPerspective) {
    // Calculate the camera ray for a perspective camera.
    vec4 viewPosition = inverseProjectionMatrix * vec4(position, 1.0);
    vec4 worldDirection = inverseViewMatrix * vec4(viewPosition.xyz, 0.0);
    origin = cameraPosition;
    direction = worldDirection.xyz;
  } else {
    // Unprojected points to calculate direction.
    vec4 nearPoint = inverseProjectionMatrix * vec4(position.xy, -1.0, 1.0);
    vec4 farPoint = inverseProjectionMatrix * vec4(position.xy, -0.9, 1.0);
    nearPoint /= nearPoint.w;
    farPoint /= farPoint.w;

    // Calculate world values.
    vec4 worldDirection = inverseViewMatrix * vec4(farPoint.xyz - nearPoint.xyz, 0.0);
    vec4 worldOrigin = inverseViewMatrix * nearPoint;

    // Outputs
    direction = worldDirection.xyz;
    origin = worldOrigin.xyz;
  }
}

void mainSupport() {
  vec3 direction, origin;
  getCameraRay(origin, direction);

  vec3 cameraPositionECEF = (worldToECEFMatrix * vec4(origin, 1.0)).xyz;
  vCameraPosition = (cameraPositionECEF + altitudeCorrection) * METER_TO_LENGTH_UNIT;
  vRayDirection = (worldToECEFMatrix * vec4(direction, 0.0)).xyz;

  vGeometryAltitudeCorrection = altitudeCorrection * METER_TO_LENGTH_UNIT;
  // Gradually turn off the altitude correction on geometries as the geometric
  // error correction takes effect, because that on the ideal sphere will be
  // over corrected.
  // See: https://github.com/takram-design-engineering/three-geospatial/pull/23#issuecomment-2542914656
  #ifdef CORRECT_GEOMETRIC_ERROR
  vGeometryAltitudeCorrection *= 1.0 - geometricErrorCorrectionAmount;
  #endif // CORRECT_GEOMETRIC_ERROR

  vec3 radii = ellipsoidRadii * METER_TO_LENGTH_UNIT;
  vEllipsoidRadiiSquared = radii * radii;
}
`,Sf=`vec3 getLunarRadiance(const float moonAngularRadius) {
  // Not a physical number but the order of 10^-6 relative to the sun may fit.
  vec3 radiance =
    ATMOSPHERE.solar_irradiance *
    0.000002 /
    (PI * moonAngularRadius * moonAngularRadius) *
    SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
  return radiance;
}

float intersectSphere(const vec3 ray, const vec3 point, const float radius) {
  vec3 P = -point;
  float PoR = dot(P, ray);
  float D = dot(P, P) - radius * radius;
  return -PoR - sqrt(PoR * PoR - D);
}

float orenNayarDiffuse(const vec3 L, const vec3 V, const vec3 N) {
  float NoL = dot(N, L);
  float NoV = dot(N, V);
  float s = dot(L, V) - NoL * NoV;
  float t = mix(1.0, max(NoL, NoV), step(0.0, s));
  return max(0.0, NoL) * (0.62406015 + 0.41284404 * s / t);
}

vec3 getSkyRadiance(
  const vec3 cameraPosition,
  const vec3 rayDirection,
  const float shadowLength,
  const vec3 sunDirection,
  const vec3 moonDirection,
  const float moonAngularRadius,
  const float lunarRadianceScale,
  const float fragmentAngle
) {
  vec3 transmittance;
  vec3 radiance = GetSkyRadiance(
    cameraPosition,
    rayDirection,
    shadowLength,
    sunDirection,
    transmittance
  );

  // Rendering celestial objects without perspective doesn't make sense.
  #ifdef PERSPECTIVE_CAMERA

  #ifdef SUN
  float viewDotSun = dot(rayDirection, sunDirection);
  if (viewDotSun > cosSunAngularRadius) {
    float angle = acos(clamp(viewDotSun, -1.0, 1.0));
    float antialias = smoothstep(
      ATMOSPHERE.sun_angular_radius,
      ATMOSPHERE.sun_angular_radius - fragmentAngle,
      angle
    );
    radiance += transmittance * GetSolarRadiance() * antialias;
  }
  #endif // SUN

  #ifdef MOON
  float intersection = intersectSphere(rayDirection, moonDirection, moonAngularRadius);
  if (intersection > 0.0) {
    vec3 normal = normalize(moonDirection - rayDirection * intersection);
    float diffuse = orenNayarDiffuse(-sunDirection, rayDirection, normal);
    float viewDotMoon = dot(rayDirection, moonDirection);
    float angle = acos(clamp(viewDotMoon, -1.0, 1.0));
    float antialias = smoothstep(moonAngularRadius, moonAngularRadius - fragmentAngle, angle);
    radiance +=
      transmittance *
      getLunarRadiance(moonAngularRadius) *
      lunarRadianceScale *
      diffuse *
      antialias;
  }
  #endif // MOON

  #endif // PERSPECTIVE_CAMERA

  return radiance;
}
`;var gE=Object.defineProperty,on=(n,e,t,i)=>{for(var r=void 0,a=n.length-1,s;a>=0;a--)(s=n[a])&&(r=s(e,t,r)||r);return r&&gE(e,t,r),r};const vE=new F,_E=new F,SE=new Gl,xE={blendFunction:st.NORMAL,octEncodedNormal:!1,reconstructNormal:!1,ellipsoid:Ia.WGS84,correctAltitude:!0,correctGeometricError:!0,sunLight:!1,skyLight:!1,transmittance:!0,inscatter:!0,albedoScale:1,sky:!1,sun:!0,moon:!0,moonAngularRadius:.0045,lunarRadianceScale:1,ground:!0};class Jt extends to{constructor(e=new Oa,t,i=ho.DEFAULT){const{blendFunction:r,normalBuffer:a=null,octEncodedNormal:s,reconstructNormal:o,irradianceTexture:c=null,scatteringTexture:l=null,transmittanceTexture:h=null,singleMieScatteringTexture:d=null,higherOrderScatteringTexture:f=null,ellipsoid:g,correctAltitude:S,correctGeometricError:E,sunDirection:v,sunLight:p,skyLight:I,transmittance:R,inscatter:w,albedoScale:L,sky:N,sun:O,moon:G,moonDirection:y,moonAngularRadius:M,lunarRadianceScale:B,ground:X}={...xE,...t};super("AerialPerspectiveEffect",za(Si(pE,{core:{depth:mf,packing:aE,math:Kl,transform:sE,raySphereIntersection:oo,cascadedShadowMaps:pf,interleavedGradientNoise:gf,vogelDisk:_f},bruneton:{common:co,definitions:lo,runtime:uo},sky:Sf})),{blendFunction:r,vertexShader:mE,attributes:mi.DEPTH,uniforms:new Map(Object.entries({normalBuffer:new U(a),projectionMatrix:new U(new He),viewMatrix:new U(new He),inverseProjectionMatrix:new U(new He),inverseViewMatrix:new U(new He),cameraPosition:new U(new F),bottomRadius:new U(i.bottomRadius),ellipsoidRadii:new U(new F),worldToECEFMatrix:new U(new He),altitudeCorrection:new U(new F),geometricErrorCorrectionAmount:new U(0),sunDirection:new U((v==null?void 0:v.clone())??new F),cosSunAngularRadius:new U(i.sunAngularRadius),albedoScale:new U(L),moonDirection:new U((y==null?void 0:y.clone())??new F),moonAngularRadius:new U(M),lunarRadianceScale:new U(B),overlayBuffer:new U(null),shadowBuffer:new U(null),shadowMapSize:new U(new Pe),shadowIntervals:new U([]),shadowMatrices:new U([]),inverseShadowMatrices:new U([]),shadowFar:new U(0),shadowTopHeight:new U(0),shadowRadius:new U(3),stbnTexture:new U(null),frame:new U(0),shadowLengthBuffer:new U(null),lightingMaskBuffer:new U(null),ATMOSPHERE:i.toUniform(),SUN_SPECTRAL_RADIANCE_TO_LUMINANCE:new U(i.sunRadianceToRelativeLuminance),SKY_SPECTRAL_RADIANCE_TO_LUMINANCE:new U(i.skyRadianceToRelativeLuminance),irradiance_texture:new U(c),scattering_texture:new U(l),transmittance_texture:new U(h),single_mie_scattering_texture:new U(null),higher_order_scattering_texture:new U(null)})),defines:new Map([["TRANSMITTANCE_TEXTURE_WIDTH",ru.toFixed(0)],["TRANSMITTANCE_TEXTURE_HEIGHT",au.toFixed(0)],["SCATTERING_TEXTURE_R_SIZE",eu.toFixed(0)],["SCATTERING_TEXTURE_MU_SIZE",tu.toFixed(0)],["SCATTERING_TEXTURE_MU_S_SIZE",nu.toFixed(0)],["SCATTERING_TEXTURE_NU_SIZE",iu.toFixed(0)],["IRRADIANCE_TEXTURE_WIDTH",Jl.toFixed(0)],["IRRADIANCE_TEXTURE_HEIGHT",Ql.toFixed(0)],["METER_TO_LENGTH_UNIT",qs.toFixed(7)]])}),this.camera=e,this.atmosphere=i,this.overlay=null,this.shadow=null,this.shadowLength=null,this.lightingMask=null,this.hasNormals=!1,this.combinedScatteringTextures=!1,this.hasHigherOrderScatteringTexture=!1,this.shadowSampleCount=8,this.octEncodedNormal=s,this.reconstructNormal=o,this.singleMieScatteringTexture=d,this.higherOrderScatteringTexture=f,this.ellipsoid=g,this.correctAltitude=S,this.correctGeometricError=E,this.sunLight=p,this.skyLight=I,this.transmittance=R,this.inscatter=w,this.sky=N,this.sun=O,this.moon=G,this.ground=X}get mainCamera(){return this.camera}set mainCamera(e){this.camera=e}copyCameraSettings(e){const{projectionMatrix:t,matrixWorldInverse:i,projectionMatrixInverse:r,matrixWorld:a}=e,s=this.uniforms;s.get("projectionMatrix").value.copy(t),s.get("viewMatrix").value.copy(i),s.get("inverseProjectionMatrix").value.copy(r),s.get("inverseViewMatrix").value.copy(a);const o=e.getWorldPosition(s.get("cameraPosition").value),c=s.get("worldToECEFMatrix").value,l=vE.copy(o).applyMatrix4(c);try{const d=SE.setFromECEF(l).height,f=_E.set(0,this.ellipsoid.maximumRadius,-Math.max(0,d)).applyMatrix4(t);s.get("geometricErrorCorrectionAmount").value=kx(Gx(f.y,41.5,13.8,0,1))}catch{return}const h=s.get("altitudeCorrection");this.correctAltitude?su(l,this.atmosphere.bottomRadius,this.ellipsoid,h.value):h.value.setScalar(0)}updateOverlay(){let e=!1;const{uniforms:t,defines:i,overlay:r}=this,a=i.has("HAS_OVERLAY"),s=r!=null;return s!==a&&(s?i.set("HAS_OVERLAY","1"):(i.delete("HAS_OVERLAY"),t.get("overlayBuffer").value=null),e=!0),s&&(t.get("overlayBuffer").value=r.map),e}updateShadow(){let e=!1;const{uniforms:t,defines:i,shadow:r}=this,a=i.has("HAS_SHADOW"),s=r!=null;if(s!==a&&(s?i.set("HAS_SHADOW","1"):(i.delete("HAS_SHADOW"),t.get("shadowBuffer").value=null),e=!0),s){const o=i.get("SHADOW_CASCADE_COUNT"),c=`${r.cascadeCount}`;o!==c&&(i.set("SHADOW_CASCADE_COUNT",r.cascadeCount.toFixed(0)),e=!0),t.get("shadowBuffer").value=r.map,t.get("shadowMapSize").value=r.mapSize,t.get("shadowIntervals").value=r.intervals,t.get("shadowMatrices").value=r.matrices,t.get("inverseShadowMatrices").value=r.inverseMatrices,t.get("shadowFar").value=r.far,t.get("shadowTopHeight").value=r.topHeight}return e}updateShadowLength(){let e=!1;const{uniforms:t,defines:i,shadowLength:r}=this,a=i.has("HAS_SHADOW_LENGTH"),s=r!=null;return s!==a&&(s?i.set("HAS_SHADOW_LENGTH","1"):(i.delete("HAS_SHADOW_LENGTH"),t.get("shadowLengthBuffer").value=null),e=!0),s&&(t.get("shadowLengthBuffer").value=r.map),e}updateLightingMask(){let e=!1;const{uniforms:t,defines:i,lightingMask:r}=this,a=i.has("HAS_LIGHTING_MASK"),s=r!=null;if(s!==a&&(s?i.set("HAS_LIGHTING_MASK","1"):(i.delete("HAS_LIGHTING_MASK"),t.get("lightingMaskBuffer").value=null),e=!0),s){t.get("lightingMaskBuffer").value=r.map;const o=i.get("LIGHTING_MASK_CHANNEL"),c=r.channel;c!==o&&(/^[rgba]$/.test(c)?(i.set("LIGHTING_MASK_CHANNEL",c),e=!0):console.error(`Expression validation failed: ${c}`))}return e}update(e,t,i){this.copyCameraSettings(this.camera);let r=!1;r||(r=this.updateOverlay()),r||(r=this.updateShadow()),r||(r=this.updateShadowLength()),r||(r=this.updateLightingMask()),r&&this.setChanged(),++this.uniforms.get("frame").value}get normalBuffer(){return this.uniforms.get("normalBuffer").value}set normalBuffer(e){this.uniforms.get("normalBuffer").value=e,this.hasNormals=e!=null}get irradianceTexture(){return this.uniforms.get("irradiance_texture").value}set irradianceTexture(e){this.uniforms.get("irradiance_texture").value=e}get scatteringTexture(){return this.uniforms.get("scattering_texture").value}set scatteringTexture(e){this.uniforms.get("scattering_texture").value=e}get transmittanceTexture(){return this.uniforms.get("transmittance_texture").value}set transmittanceTexture(e){this.uniforms.get("transmittance_texture").value=e}get singleMieScatteringTexture(){return this.uniforms.get("single_mie_scattering_texture").value}set singleMieScatteringTexture(e){this.uniforms.get("single_mie_scattering_texture").value=e,this.combinedScatteringTextures=e==null}get higherOrderScatteringTexture(){return this.uniforms.get("higher_order_scattering_texture").value}set higherOrderScatteringTexture(e){this.uniforms.get("higher_order_scattering_texture").value=e,this.hasHigherOrderScatteringTexture=e!=null}get ellipsoid(){return this._ellipsoid}set ellipsoid(e){this._ellipsoid=e,this.uniforms.get("ellipsoidRadii").value.copy(e.radii)}get worldToECEFMatrix(){return this.uniforms.get("worldToECEFMatrix").value}get sunDirection(){return this.uniforms.get("sunDirection").value}get sunAngularRadius(){return this.uniforms.get("ATMOSPHERE").value.sun_angular_radius}set sunAngularRadius(e){this.uniforms.get("ATMOSPHERE").value.sun_angular_radius=e,this.uniforms.get("cosSunAngularRadius").value=Math.cos(e)}get albedoScale(){return this.uniforms.get("albedoScale").value}set albedoScale(e){this.uniforms.get("albedoScale").value=e}get moonDirection(){return this.uniforms.get("moonDirection").value}get moonAngularRadius(){return this.uniforms.get("moonAngularRadius").value}set moonAngularRadius(e){this.uniforms.get("moonAngularRadius").value=e}get lunarRadianceScale(){return this.uniforms.get("lunarRadianceScale").value}set lunarRadianceScale(e){this.uniforms.get("lunarRadianceScale").value=e}get stbnTexture(){return this.uniforms.get("stbnTexture").value}set stbnTexture(e){this.uniforms.get("stbnTexture").value=e}get shadowRadius(){return this.uniforms.get("shadowRadius").value}set shadowRadius(e){this.uniforms.get("shadowRadius").value=e}}on([dt("OCT_ENCODED_NORMAL")],Jt.prototype,"octEncodedNormal");on([dt("RECONSTRUCT_NORMAL")],Jt.prototype,"reconstructNormal");on([dt("HAS_NORMALS")],Jt.prototype,"hasNormals");on([dt("COMBINED_SCATTERING_TEXTURES")],Jt.prototype,"combinedScatteringTextures");on([dt("HAS_HIGHER_ORDER_SCATTERING_TEXTURE")],Jt.prototype,"hasHigherOrderScatteringTexture");on([dt("CORRECT_GEOMETRIC_ERROR")],Jt.prototype,"correctGeometricError");on([dt("SUN_LIGHT")],Jt.prototype,"sunLight");on([dt("SKY_LIGHT")],Jt.prototype,"skyLight");on([dt("TRANSMITTANCE")],Jt.prototype,"transmittance");on([dt("INSCATTER")],Jt.prototype,"inscatter");on([dt("SKY")],Jt.prototype,"sky");on([dt("SUN")],Jt.prototype,"sun");on([dt("MOON")],Jt.prototype,"moon");on([dt("GROUND")],Jt.prototype,"ground");on([nr("SHADOW_SAMPLE_COUNT",{min:1,max:16})],Jt.prototype,"shadowSampleCount");var EE=Object.defineProperty,xf=(n,e,t,i)=>{for(var r=void 0,a=n.length-1,s;a>=0;a--)(s=n[a])&&(r=s(e,t,r)||r);return r&&EE(e,t,r),r};const TE=new F;function yE(n,e){let t="",i="";for(let r=1;r<e;++r)t+=`layout(location = ${r}) out float renderTarget${r};
`,i+=`renderTarget${r} = 0.0;
`;return n.replace("#include <mrt_layout>",t).replace("#include <mrt_output>",i)}const ou={ellipsoid:Ia.WGS84,correctAltitude:!0,renderTargetCount:1};class Ga extends Qs{constructor(e,t=ho.DEFAULT){const{irradianceTexture:i=null,scatteringTexture:r=null,transmittanceTexture:a=null,singleMieScatteringTexture:s=null,higherOrderScatteringTexture:o=null,ellipsoid:c,correctAltitude:l,sunDirection:h,sunAngularRadius:d,renderTargetCount:f,...g}={...ou,...e};super({toneMapped:!1,depthWrite:!1,depthTest:!1,...g,uniforms:{cameraPosition:new U(new F),worldToECEFMatrix:new U(new He),altitudeCorrection:new U(new F),sunDirection:new U((h==null?void 0:h.clone())??new F),cosSunAngularRadius:new U(t.sunAngularRadius),ATMOSPHERE:t.toUniform(),SUN_SPECTRAL_RADIANCE_TO_LUMINANCE:new U(t.sunRadianceToRelativeLuminance),SKY_SPECTRAL_RADIANCE_TO_LUMINANCE:new U(t.skyRadianceToRelativeLuminance),irradiance_texture:new U(i),scattering_texture:new U(r),transmittance_texture:new U(a),single_mie_scattering_texture:new U(null),higher_order_scattering_texture:new U(null),...g.uniforms},defines:{PI:`${Math.PI}`,TRANSMITTANCE_TEXTURE_WIDTH:ru.toFixed(0),TRANSMITTANCE_TEXTURE_HEIGHT:au.toFixed(0),SCATTERING_TEXTURE_R_SIZE:eu.toFixed(0),SCATTERING_TEXTURE_MU_SIZE:tu.toFixed(0),SCATTERING_TEXTURE_MU_S_SIZE:nu.toFixed(0),SCATTERING_TEXTURE_NU_SIZE:iu.toFixed(0),IRRADIANCE_TEXTURE_WIDTH:Jl.toFixed(0),IRRADIANCE_TEXTURE_HEIGHT:Ql.toFixed(0),METER_TO_LENGTH_UNIT:qs.toFixed(7),...g.defines}}),this.atmosphere=t,this.combinedScatteringTextures=!1,this.hasHigherOrderScatteringTexture=!1,this.singleMieScatteringTexture=s,this.higherOrderScatteringTexture=o,this.ellipsoid=c,this.correctAltitude=l,d!=null&&(this.sunAngularRadius=d),this.renderTargetCount=f}copyCameraSettings(e){const t=this.uniforms,i=e.getWorldPosition(t.cameraPosition.value),r=TE.copy(i).applyMatrix4(t.worldToECEFMatrix.value),a=t.altitudeCorrection.value;this.correctAltitude?su(r,this.atmosphere.bottomRadius,this.ellipsoid,a):a.setScalar(0)}onBeforeCompile(e,t){e.fragmentShader=yE(e.fragmentShader,this.renderTargetCount)}onBeforeRender(e,t,i,r,a,s){this.copyCameraSettings(i)}get irradianceTexture(){return this.uniforms.irradiance_texture.value}set irradianceTexture(e){this.uniforms.irradiance_texture.value=e}get scatteringTexture(){return this.uniforms.scattering_texture.value}set scatteringTexture(e){this.uniforms.scattering_texture.value=e}get transmittanceTexture(){return this.uniforms.transmittance_texture.value}set transmittanceTexture(e){this.uniforms.transmittance_texture.value=e}get singleMieScatteringTexture(){return this.uniforms.single_mie_scattering_texture.value}set singleMieScatteringTexture(e){this.uniforms.single_mie_scattering_texture.value=e,this.combinedScatteringTextures=e==null}get higherOrderScatteringTexture(){return this.uniforms.higher_order_scattering_texture.value}set higherOrderScatteringTexture(e){this.uniforms.higher_order_scattering_texture.value=e,this.hasHigherOrderScatteringTexture=e!=null}get worldToECEFMatrix(){return this.uniforms.worldToECEFMatrix.value}get sunDirection(){return this.uniforms.sunDirection.value}get sunAngularRadius(){return this.uniforms.ATMOSPHERE.value.sun_angular_radius}set sunAngularRadius(e){this.uniforms.ATMOSPHERE.value.sun_angular_radius=e,this.uniforms.cosSunAngularRadius.value=Math.cos(e)}get renderTargetCount(){return this._renderTargetCount}set renderTargetCount(e){e!==this.renderTargetCount&&(this._renderTargetCount=e,this.needsUpdate=!0)}}xf([dt("COMBINED_SCATTERING_TEXTURES")],Ga.prototype,"combinedScatteringTextures");xf([dt("HAS_HIGHER_ORDER_SCATTERING_TEXTURE")],Ga.prototype,"hasHigherOrderScatteringTexture");/**
    @preserve

    Astronomy library for JavaScript (browser and Node.js).
    https://github.com/cosinekitty/astronomy

    MIT License

    Copyright (c) 2019-2023 Don Cross <cosinekitty@gmail.com>

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
*//**
 * @fileoverview Astronomy calculation library for browser scripting and Node.js.
 * @author Don Cross <cosinekitty@gmail.com>
 * @license MIT
 */const ME=173.1446326846693,wE=14959787069098932e-8,er=.017453292519943295,AE=365.24217,Oh=new Date("2000-01-01T12:00:00Z"),ai=2*Math.PI,Di=3600*(180/Math.PI),Ir=484813681109536e-20,RE=10800*60,CE=2*RE,bE=6378.1366,DE=bE/wE,IE=81.30056,cu=.0002959122082855911,dl=2825345909524226e-22,fl=8459715185680659e-23,pl=1292024916781969e-23,ml=1524358900784276e-23;function Ls(n){if(!Number.isFinite(n))throw console.trace(),`Value is not a finite number: ${n}`;return n}function yr(n){return n-Math.floor(n)}var yt;(function(n){n.Sun="Sun",n.Moon="Moon",n.Mercury="Mercury",n.Venus="Venus",n.Earth="Earth",n.Mars="Mars",n.Jupiter="Jupiter",n.Saturn="Saturn",n.Uranus="Uranus",n.Neptune="Neptune",n.Pluto="Pluto",n.SSB="SSB",n.EMB="EMB",n.Star1="Star1",n.Star2="Star2",n.Star3="Star3",n.Star4="Star4",n.Star5="Star5",n.Star6="Star6",n.Star7="Star7",n.Star8="Star8"})(yt||(yt={}));const PE=[yt.Star1,yt.Star2,yt.Star3,yt.Star4,yt.Star5,yt.Star6,yt.Star7,yt.Star8],LE=[{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0}];function NE(n){const e=PE.indexOf(n);return e>=0?LE[e]:null}function Ef(n){const e=NE(n);return e&&e.dist>0?e:null}var xi;(function(n){n[n.From2000=0]="From2000",n[n.Into2000=1]="Into2000"})(xi||(xi={}));const Pr={Mercury:[[[[4.40250710144,0,0],[.40989414977,1.48302034195,26087.9031415742],[.050462942,4.47785489551,52175.8062831484],[.00855346844,1.16520322459,78263.70942472259],[.00165590362,4.11969163423,104351.61256629678],[.00034561897,.77930768443,130439.51570787099],[7583476e-11,3.71348404924,156527.41884944518]],[[26087.90313685529,0,0],[.01131199811,6.21874197797,26087.9031415742],[.00292242298,3.04449355541,52175.8062831484],[.00075775081,6.08568821653,78263.70942472259],[.00019676525,2.80965111777,104351.61256629678]]],[[[.11737528961,1.98357498767,26087.9031415742],[.02388076996,5.03738959686,52175.8062831484],[.01222839532,3.14159265359,0],[.0054325181,1.79644363964,78263.70942472259],[.0012977877,4.83232503958,104351.61256629678],[.00031866927,1.58088495658,130439.51570787099],[7963301e-11,4.60972126127,156527.41884944518]],[[.00274646065,3.95008450011,26087.9031415742],[.00099737713,3.14159265359,0]]],[[[.39528271651,0,0],[.07834131818,6.19233722598,26087.9031415742],[.00795525558,2.95989690104,52175.8062831484],[.00121281764,6.01064153797,78263.70942472259],[.00021921969,2.77820093972,104351.61256629678],[4354065e-11,5.82894543774,130439.51570787099]],[[.0021734774,4.65617158665,26087.9031415742],[.00044141826,1.42385544001,52175.8062831484]]]],Venus:[[[[3.17614666774,0,0],[.01353968419,5.59313319619,10213.285546211],[.00089891645,5.30650047764,20426.571092422],[5477194e-11,4.41630661466,7860.4193924392],[3455741e-11,2.6996444782,11790.6290886588],[2372061e-11,2.99377542079,3930.2096962196],[1317168e-11,5.18668228402,26.2983197998],[1664146e-11,4.25018630147,1577.3435424478],[1438387e-11,4.15745084182,9683.5945811164],[1200521e-11,6.15357116043,30639.856638633]],[[10213.28554621638,0,0],[.00095617813,2.4640651111,10213.285546211],[7787201e-11,.6247848222,20426.571092422]]],[[[.05923638472,.26702775812,10213.285546211],[.00040107978,1.14737178112,20426.571092422],[.00032814918,3.14159265359,0]],[[.00287821243,1.88964962838,10213.285546211]]],[[[.72334820891,0,0],[.00489824182,4.02151831717,10213.285546211],[1658058e-11,4.90206728031,20426.571092422],[1378043e-11,1.12846591367,11790.6290886588],[1632096e-11,2.84548795207,7860.4193924392],[498395e-11,2.58682193892,9683.5945811164],[221985e-11,2.01346696541,19367.1891622328],[237454e-11,2.55136053886,15720.8387848784]],[[.00034551041,.89198706276,10213.285546211]]]],Earth:[[[[1.75347045673,0,0],[.03341656453,4.66925680415,6283.0758499914],[.00034894275,4.62610242189,12566.1516999828],[3417572e-11,2.82886579754,3.523118349],[3497056e-11,2.74411783405,5753.3848848968],[3135899e-11,3.62767041756,77713.7714681205],[2676218e-11,4.41808345438,7860.4193924392],[2342691e-11,6.13516214446,3930.2096962196],[1273165e-11,2.03709657878,529.6909650946],[1324294e-11,.74246341673,11506.7697697936],[901854e-11,2.04505446477,26.2983197998],[1199167e-11,1.10962946234,1577.3435424478],[857223e-11,3.50849152283,398.1490034082],[779786e-11,1.17882681962,5223.6939198022],[99025e-10,5.23268072088,5884.9268465832],[753141e-11,2.53339052847,5507.5532386674],[505267e-11,4.58292599973,18849.2275499742],[492392e-11,4.20505711826,775.522611324],[356672e-11,2.91954114478,.0673103028],[284125e-11,1.89869240932,796.2980068164],[242879e-11,.34481445893,5486.777843175],[317087e-11,5.84901948512,11790.6290886588],[271112e-11,.31486255375,10977.078804699],[206217e-11,4.80646631478,2544.3144198834],[205478e-11,1.86953770281,5573.1428014331],[202318e-11,2.45767790232,6069.7767545534],[126225e-11,1.08295459501,20.7753954924],[155516e-11,.83306084617,213.299095438]],[[6283.0758499914,0,0],[.00206058863,2.67823455808,6283.0758499914],[4303419e-11,2.63512233481,12566.1516999828]],[[8721859e-11,1.07253635559,6283.0758499914]]],[[],[[.00227777722,3.4137662053,6283.0758499914],[3805678e-11,3.37063423795,12566.1516999828]]],[[[1.00013988784,0,0],[.01670699632,3.09846350258,6283.0758499914],[.00013956024,3.05524609456,12566.1516999828],[308372e-10,5.19846674381,77713.7714681205],[1628463e-11,1.17387558054,5753.3848848968],[1575572e-11,2.84685214877,7860.4193924392],[924799e-11,5.45292236722,11506.7697697936],[542439e-11,4.56409151453,3930.2096962196],[47211e-10,3.66100022149,5884.9268465832],[85831e-11,1.27079125277,161000.6857376741],[57056e-11,2.01374292245,83996.84731811189],[55736e-11,5.2415979917,71430.69561812909],[174844e-11,3.01193636733,18849.2275499742],[243181e-11,4.2734953079,11790.6290886588]],[[.00103018607,1.10748968172,6283.0758499914],[1721238e-11,1.06442300386,12566.1516999828]],[[4359385e-11,5.78455133808,6283.0758499914]]]],Mars:[[[[6.20347711581,0,0],[.18656368093,5.0503710027,3340.6124266998],[.01108216816,5.40099836344,6681.2248533996],[.00091798406,5.75478744667,10021.8372800994],[.00027744987,5.97049513147,3.523118349],[.00010610235,2.93958560338,2281.2304965106],[.00012315897,.84956094002,2810.9214616052],[8926784e-11,4.15697846427,.0172536522],[8715691e-11,6.11005153139,13362.4497067992],[6797556e-11,.36462229657,398.1490034082],[7774872e-11,3.33968761376,5621.8429232104],[3575078e-11,1.6618650571,2544.3144198834],[4161108e-11,.22814971327,2942.4634232916],[3075252e-11,.85696614132,191.4482661116],[2628117e-11,.64806124465,3337.0893083508],[2937546e-11,6.07893711402,.0673103028],[2389414e-11,5.03896442664,796.2980068164],[2579844e-11,.02996736156,3344.1355450488],[1528141e-11,1.14979301996,6151.533888305],[1798806e-11,.65634057445,529.6909650946],[1264357e-11,3.62275122593,5092.1519581158],[1286228e-11,3.06796065034,2146.1654164752],[1546404e-11,2.91579701718,1751.539531416],[1024902e-11,3.69334099279,8962.4553499102],[891566e-11,.18293837498,16703.062133499],[858759e-11,2.4009381194,2914.0142358238],[832715e-11,2.46418619474,3340.5951730476],[83272e-10,4.49495782139,3340.629680352],[712902e-11,3.66335473479,1059.3819301892],[748723e-11,3.82248614017,155.4203994342],[723861e-11,.67497311481,3738.761430108],[635548e-11,2.92182225127,8432.7643848156],[655162e-11,.48864064125,3127.3133312618],[550474e-11,3.81001042328,.9803210682],[55275e-10,4.47479317037,1748.016413067],[425966e-11,.55364317304,6283.0758499914],[415131e-11,.49662285038,213.299095438],[472167e-11,3.62547124025,1194.4470102246],[306551e-11,.38052848348,6684.7479717486],[312141e-11,.99853944405,6677.7017350506],[293198e-11,4.22131299634,20.7753954924],[302375e-11,4.48618007156,3532.0606928114],[274027e-11,.54222167059,3340.545116397],[281079e-11,5.88163521788,1349.8674096588],[231183e-11,1.28242156993,3870.3033917944],[283602e-11,5.7688543494,3149.1641605882],[236117e-11,5.75503217933,3333.498879699],[274033e-11,.13372524985,3340.6797370026],[299395e-11,2.78323740866,6254.6266625236]],[[3340.61242700512,0,0],[.01457554523,3.60433733236,3340.6124266998],[.00168414711,3.92318567804,6681.2248533996],[.00020622975,4.26108844583,10021.8372800994],[3452392e-11,4.7321039319,3.523118349],[2586332e-11,4.60670058555,13362.4497067992],[841535e-11,4.45864030426,2281.2304965106]],[[.00058152577,2.04961712429,3340.6124266998],[.00013459579,2.45738706163,6681.2248533996]]],[[[.03197134986,3.76832042431,3340.6124266998],[.00298033234,4.10616996305,6681.2248533996],[.00289104742,0,0],[.00031365539,4.4465105309,10021.8372800994],[34841e-9,4.7881254926,13362.4497067992]],[[.00217310991,6.04472194776,3340.6124266998],[.00020976948,3.14159265359,0],[.00012834709,1.60810667915,6681.2248533996]]],[[[1.53033488271,0,0],[.1418495316,3.47971283528,3340.6124266998],[.00660776362,3.81783443019,6681.2248533996],[.00046179117,4.15595316782,10021.8372800994],[8109733e-11,5.55958416318,2810.9214616052],[7485318e-11,1.77239078402,5621.8429232104],[5523191e-11,1.3643630377,2281.2304965106],[382516e-10,4.49407183687,13362.4497067992],[2306537e-11,.09081579001,2544.3144198834],[1999396e-11,5.36059617709,3337.0893083508],[2484394e-11,4.9254563992,2942.4634232916],[1960195e-11,4.74249437639,3344.1355450488],[1167119e-11,2.11260868341,5092.1519581158],[1102816e-11,5.00908403998,398.1490034082],[899066e-11,4.40791133207,529.6909650946],[992252e-11,5.83861961952,6151.533888305],[807354e-11,2.10217065501,1059.3819301892],[797915e-11,3.44839203899,796.2980068164],[740975e-11,1.49906336885,2146.1654164752]],[[.01107433345,2.03250524857,3340.6124266998],[.00103175887,2.37071847807,6681.2248533996],[128772e-9,0,0],[.0001081588,2.70888095665,10021.8372800994]],[[.00044242249,.47930604954,3340.6124266998],[8138042e-11,.86998389204,6681.2248533996]]]],Jupiter:[[[[.59954691494,0,0],[.09695898719,5.06191793158,529.6909650946],[.00573610142,1.44406205629,7.1135470008],[.00306389205,5.41734730184,1059.3819301892],[.00097178296,4.14264726552,632.7837393132],[.00072903078,3.64042916389,522.5774180938],[.00064263975,3.41145165351,103.0927742186],[.00039806064,2.29376740788,419.4846438752],[.00038857767,1.27231755835,316.3918696566],[.00027964629,1.7845459182,536.8045120954],[.0001358973,5.7748104079,1589.0728952838],[8246349e-11,3.5822792584,206.1855484372],[8768704e-11,3.63000308199,949.1756089698],[7368042e-11,5.0810119427,735.8765135318],[626315e-10,.02497628807,213.299095438],[6114062e-11,4.51319998626,1162.4747044078],[4905396e-11,1.32084470588,110.2063212194],[5305285e-11,1.30671216791,14.2270940016],[5305441e-11,4.18625634012,1052.2683831884],[4647248e-11,4.69958103684,3.9321532631],[3045023e-11,4.31676431084,426.598190876],[2609999e-11,1.56667394063,846.0828347512],[2028191e-11,1.06376530715,3.1813937377],[1764763e-11,2.14148655117,1066.49547719],[1722972e-11,3.88036268267,1265.5674786264],[1920945e-11,.97168196472,639.897286314],[1633223e-11,3.58201833555,515.463871093],[1431999e-11,4.29685556046,625.6701923124],[973272e-11,4.09764549134,95.9792272178]],[[529.69096508814,0,0],[.00489503243,4.2208293947,529.6909650946],[.00228917222,6.02646855621,7.1135470008],[.00030099479,4.54540782858,1059.3819301892],[.0002072092,5.45943156902,522.5774180938],[.00012103653,.16994816098,536.8045120954],[6067987e-11,4.42422292017,103.0927742186],[5433968e-11,3.98480737746,419.4846438752],[4237744e-11,5.89008707199,14.2270940016]],[[.00047233601,4.32148536482,7.1135470008],[.00030649436,2.929777887,529.6909650946],[.00014837605,3.14159265359,0]]],[[[.02268615702,3.55852606721,529.6909650946],[.00109971634,3.90809347197,1059.3819301892],[.00110090358,0,0],[8101428e-11,3.60509572885,522.5774180938],[6043996e-11,4.25883108339,1589.0728952838],[6437782e-11,.30627119215,536.8045120954]],[[.00078203446,1.52377859742,529.6909650946]]],[[[5.20887429326,0,0],[.25209327119,3.49108639871,529.6909650946],[.00610599976,3.84115365948,1059.3819301892],[.00282029458,2.57419881293,632.7837393132],[.00187647346,2.07590383214,522.5774180938],[.00086792905,.71001145545,419.4846438752],[.00072062974,.21465724607,536.8045120954],[.00065517248,5.9799588479,316.3918696566],[.00029134542,1.67759379655,103.0927742186],[.00030135335,2.16132003734,949.1756089698],[.00023453271,3.54023522184,735.8765135318],[.00022283743,4.19362594399,1589.0728952838],[.00023947298,.2745803748,7.1135470008],[.00013032614,2.96042965363,1162.4747044078],[970336e-10,1.90669633585,206.1855484372],[.00012749023,2.71550286592,1052.2683831884],[7057931e-11,2.18184839926,1265.5674786264],[6137703e-11,6.26418240033,846.0828347512],[2616976e-11,2.00994012876,1581.959348283]],[[.0127180152,2.64937512894,529.6909650946],[.00061661816,3.00076460387,1059.3819301892],[.00053443713,3.89717383175,522.5774180938],[.00031185171,4.88276958012,536.8045120954],[.00041390269,0,0]]]],Saturn:[[[[.87401354025,0,0],[.11107659762,3.96205090159,213.299095438],[.01414150957,4.58581516874,7.1135470008],[.00398379389,.52112032699,206.1855484372],[.00350769243,3.30329907896,426.598190876],[.00206816305,.24658372002,103.0927742186],[792713e-9,3.84007056878,220.4126424388],[.00023990355,4.66976924553,110.2063212194],[.00016573588,.43719228296,419.4846438752],[.00014906995,5.76903183869,316.3918696566],[.0001582029,.93809155235,632.7837393132],[.00014609559,1.56518472,3.9321532631],[.00013160301,4.44891291899,14.2270940016],[.00015053543,2.71669915667,639.897286314],[.00013005299,5.98119023644,11.0457002639],[.00010725067,3.12939523827,202.2533951741],[5863206e-11,.23656938524,529.6909650946],[5227757e-11,4.20783365759,3.1813937377],[6126317e-11,1.76328667907,277.0349937414],[5019687e-11,3.17787728405,433.7117378768],[459255e-10,.61977744975,199.0720014364],[4005867e-11,2.24479718502,63.7358983034],[2953796e-11,.98280366998,95.9792272178],[387367e-10,3.22283226966,138.5174968707],[2461186e-11,2.03163875071,735.8765135318],[3269484e-11,.77492638211,949.1756089698],[1758145e-11,3.2658010994,522.5774180938],[1640172e-11,5.5050445305,846.0828347512],[1391327e-11,4.02333150505,323.5054166574],[1580648e-11,4.37265307169,309.2783226558],[1123498e-11,2.83726798446,415.5524906121],[1017275e-11,3.71700135395,227.5261894396],[848642e-11,3.1915017083,209.3669421749]],[[213.2990952169,0,0],[.01297370862,1.82834923978,213.299095438],[.00564345393,2.88499717272,7.1135470008],[.00093734369,1.06311793502,426.598190876],[.00107674962,2.27769131009,206.1855484372],[.00040244455,2.04108104671,220.4126424388],[.00019941774,1.2795439047,103.0927742186],[.00010511678,2.7488034213,14.2270940016],[6416106e-11,.38238295041,639.897286314],[4848994e-11,2.43037610229,419.4846438752],[4056892e-11,2.92133209468,110.2063212194],[3768635e-11,3.6496533078,3.9321532631]],[[.0011644133,1.17988132879,7.1135470008],[.00091841837,.0732519584,213.299095438],[.00036661728,0,0],[.00015274496,4.06493179167,206.1855484372]]],[[[.04330678039,3.60284428399,213.299095438],[.00240348302,2.85238489373,426.598190876],[.00084745939,0,0],[.00030863357,3.48441504555,220.4126424388],[.00034116062,.57297307557,206.1855484372],[.0001473407,2.11846596715,639.897286314],[9916667e-11,5.79003188904,419.4846438752],[6993564e-11,4.7360468972,7.1135470008],[4807588e-11,5.43305312061,316.3918696566]],[[.00198927992,4.93901017903,213.299095438],[.00036947916,3.14159265359,0],[.00017966989,.5197943111,426.598190876]]],[[[9.55758135486,0,0],[.52921382865,2.39226219573,213.299095438],[.01873679867,5.2354960466,206.1855484372],[.01464663929,1.64763042902,426.598190876],[.00821891141,5.93520042303,316.3918696566],[.00547506923,5.0153261898,103.0927742186],[.0037168465,2.27114821115,220.4126424388],[.00361778765,3.13904301847,7.1135470008],[.00140617506,5.70406606781,632.7837393132],[.00108974848,3.29313390175,110.2063212194],[.00069006962,5.94099540992,419.4846438752],[.00061053367,.94037691801,639.897286314],[.00048913294,1.55733638681,202.2533951741],[.00034143772,.19519102597,277.0349937414],[.00032401773,5.47084567016,949.1756089698],[.00020936596,.46349251129,735.8765135318],[9796004e-11,5.20477537945,1265.5674786264],[.00011993338,5.98050967385,846.0828347512],[208393e-9,1.52102476129,433.7117378768],[.00015298404,3.0594381494,529.6909650946],[6465823e-11,.17732249942,1052.2683831884],[.00011380257,1.7310542704,522.5774180938],[3419618e-11,4.94550542171,1581.959348283]],[[.0618298134,.2584351148,213.299095438],[.00506577242,.71114625261,206.1855484372],[.00341394029,5.79635741658,426.598190876],[.00188491195,.47215589652,220.4126424388],[.00186261486,3.14159265359,0],[.00143891146,1.40744822888,7.1135470008]],[[.00436902572,4.78671677509,213.299095438]]]],Uranus:[[[[5.48129294297,0,0],[.09260408234,.89106421507,74.7815985673],[.01504247898,3.6271926092,1.4844727083],[.00365981674,1.89962179044,73.297125859],[.00272328168,3.35823706307,149.5631971346],[.00070328461,5.39254450063,63.7358983034],[.00068892678,6.09292483287,76.2660712756],[.00061998615,2.26952066061,2.9689454166],[.00061950719,2.85098872691,11.0457002639],[.0002646877,3.14152083966,71.8126531507],[.00025710476,6.11379840493,454.9093665273],[.0002107885,4.36059339067,148.0787244263],[.00017818647,1.74436930289,36.6485629295],[.00014613507,4.73732166022,3.9321532631],[.00011162509,5.8268179635,224.3447957019],[.0001099791,.48865004018,138.5174968707],[9527478e-11,2.95516862826,35.1640902212],[7545601e-11,5.236265824,109.9456887885],[4220241e-11,3.23328220918,70.8494453042],[40519e-9,2.277550173,151.0476698429],[3354596e-11,1.0654900738,4.4534181249],[2926718e-11,4.62903718891,9.5612275556],[349034e-10,5.48306144511,146.594251718],[3144069e-11,4.75199570434,77.7505439839],[2922333e-11,5.35235361027,85.8272988312],[2272788e-11,4.36600400036,70.3281804424],[2051219e-11,1.51773566586,.1118745846],[2148602e-11,.60745949945,38.1330356378],[1991643e-11,4.92437588682,277.0349937414],[1376226e-11,2.04283539351,65.2203710117],[1666902e-11,3.62744066769,380.12776796],[1284107e-11,3.11347961505,202.2533951741],[1150429e-11,.93343589092,3.1813937377],[1533221e-11,2.58594681212,52.6901980395],[1281604e-11,.54271272721,222.8603229936],[1372139e-11,4.19641530878,111.4301614968],[1221029e-11,.1990065003,108.4612160802],[946181e-11,1.19253165736,127.4717966068],[1150989e-11,4.17898916639,33.6796175129]],[[74.7815986091,0,0],[.00154332863,5.24158770553,74.7815985673],[.00024456474,1.71260334156,1.4844727083],[9258442e-11,.4282973235,11.0457002639],[8265977e-11,1.50218091379,63.7358983034],[915016e-10,1.41213765216,149.5631971346]]],[[[.01346277648,2.61877810547,74.7815985673],[623414e-9,5.08111189648,149.5631971346],[.00061601196,3.14159265359,0],[9963722e-11,1.61603805646,76.2660712756],[992616e-10,.57630380333,73.297125859]],[[.00034101978,.01321929936,74.7815985673]]],[[[19.21264847206,0,0],[.88784984413,5.60377527014,74.7815985673],[.03440836062,.32836099706,73.297125859],[.0205565386,1.7829515933,149.5631971346],[.0064932241,4.52247285911,76.2660712756],[.00602247865,3.86003823674,63.7358983034],[.00496404167,1.40139935333,454.9093665273],[.00338525369,1.58002770318,138.5174968707],[.00243509114,1.57086606044,71.8126531507],[.00190522303,1.99809394714,1.4844727083],[.00161858838,2.79137786799,148.0787244263],[.00143706183,1.38368544947,11.0457002639],[.00093192405,.17437220467,36.6485629295],[.00071424548,4.24509236074,224.3447957019],[.00089806014,3.66105364565,109.9456887885],[.00039009723,1.66971401684,70.8494453042],[.00046677296,1.39976401694,35.1640902212],[.00039025624,3.36234773834,277.0349937414],[.00036755274,3.88649278513,146.594251718],[.00030348723,.70100838798,151.0476698429],[.00029156413,3.180563367,77.7505439839],[.00022637073,.72518687029,529.6909650946],[.00011959076,1.7504339214,984.6003316219],[.00025620756,5.25656086672,380.12776796]],[[.01479896629,3.67205697578,74.7815985673]]]],Neptune:[[[[5.31188633046,0,0],[.0179847553,2.9010127389,38.1330356378],[.01019727652,.48580922867,1.4844727083],[.00124531845,4.83008090676,36.6485629295],[.00042064466,5.41054993053,2.9689454166],[.00037714584,6.09221808686,35.1640902212],[.00033784738,1.24488874087,76.2660712756],[.00016482741,7727998e-11,491.5579294568],[9198584e-11,4.93747051954,39.6175083461],[899425e-10,.27462171806,175.1660598002]],[[38.13303563957,0,0],[.00016604172,4.86323329249,1.4844727083],[.00015744045,2.27887427527,38.1330356378]]],[[[.03088622933,1.44104372644,38.1330356378],[.00027780087,5.91271884599,76.2660712756],[.00027623609,0,0],[.00015355489,2.52123799551,36.6485629295],[.00015448133,3.50877079215,39.6175083461]]],[[[30.07013205828,0,0],[.27062259632,1.32999459377,38.1330356378],[.01691764014,3.25186135653,36.6485629295],[.00807830553,5.18592878704,1.4844727083],[.0053776051,4.52113935896,35.1640902212],[.00495725141,1.5710564165,491.5579294568],[.00274571975,1.84552258866,175.1660598002],[.0001201232,1.92059384991,1021.2488945514],[.00121801746,5.79754470298,76.2660712756],[.00100896068,.3770272493,73.297125859],[.00135134092,3.37220609835,39.6175083461],[7571796e-11,1.07149207335,388.4651552382]]]]};function UE(n){var e,t,i,r,a,s,o;const c=2e3+(n-14)/AE;return c<-500?(e=(c-1820)/100,-20+32*e*e):c<500?(e=c/100,t=e*e,i=e*t,r=t*t,a=t*i,s=i*i,10583.6-1014.41*e+33.78311*t-5.952053*i-.1798452*r+.022174192*a+.0090316521*s):c<1600?(e=(c-1e3)/100,t=e*e,i=e*t,r=t*t,a=t*i,s=i*i,1574.2-556.01*e+71.23472*t+.319781*i-.8503463*r-.005050998*a+.0083572073*s):c<1700?(e=c-1600,t=e*e,i=e*t,120-.9808*e-.01532*t+i/7129):c<1800?(e=c-1700,t=e*e,i=e*t,r=t*t,8.83+.1603*e-.0059285*t+13336e-8*i-r/1174e3):c<1860?(e=c-1800,t=e*e,i=e*t,r=t*t,a=t*i,s=i*i,o=i*r,13.72-.332447*e+.0068612*t+.0041116*i-37436e-8*r+121272e-10*a-1699e-10*s+875e-12*o):c<1900?(e=c-1860,t=e*e,i=e*t,r=t*t,a=t*i,7.62+.5737*e-.251754*t+.01680668*i-.0004473624*r+a/233174):c<1920?(e=c-1900,t=e*e,i=e*t,r=t*t,-2.79+1.494119*e-.0598939*t+.0061966*i-197e-6*r):c<1941?(e=c-1920,t=e*e,i=e*t,21.2+.84493*e-.0761*t+.0020936*i):c<1961?(e=c-1950,t=e*e,i=e*t,29.07+.407*e-t/233+i/2547):c<1986?(e=c-1975,t=e*e,i=e*t,45.45+1.067*e-t/260-i/718):c<2005?(e=c-2e3,t=e*e,i=e*t,r=t*t,a=t*i,63.86+.3345*e-.060374*t+.0017275*i+651814e-9*r+2373599e-11*a):c<2050?(e=c-2e3,62.92+.32217*e+.005589*e*e):c<2150?(e=(c-1820)/100,-20+32*e*e-.5628*(2150-c)):(e=(c-1820)/100,-20+32*e*e)}let OE=UE;function Fh(n){return n+OE(n)/86400}class Li{constructor(e){if(e instanceof Li){this.date=e.date,this.ut=e.ut,this.tt=e.tt;return}const t=1e3*3600*24;if(e instanceof Date&&Number.isFinite(e.getTime())){this.date=e,this.ut=(e.getTime()-Oh.getTime())/t,this.tt=Fh(this.ut);return}if(Number.isFinite(e)){this.date=new Date(Oh.getTime()+e*t),this.ut=e,this.tt=Fh(this.ut);return}throw"Argument must be a Date object, an AstroTime object, or a numeric UTC Julian date."}static FromTerrestrialTime(e){let t=new Li(e);for(;;){const i=e-t.tt;if(Math.abs(i)<1e-12)return t;t=t.AddDays(i)}}toString(){return this.date.toISOString()}AddDays(e){return new Li(this.ut+e)}}function ir(n){return n instanceof Li?n:new Li(n)}function FE(n){function e(f){return f%CE*Ir}const t=n.tt/36525,i=e(128710479305e-5+t*1295965810481e-4),r=e(335779.526232+t*17395272628478e-4),a=e(107226070369e-5+t*1602961601209e-3),s=e(450160.398036-t*69628905431e-4);let o=Math.sin(s),c=Math.cos(s),l=(-172064161-174666*t)*o+33386*c,h=(92052331+9086*t)*c+15377*o,d=2*(r-a+s);return o=Math.sin(d),c=Math.cos(d),l+=(-13170906-1675*t)*o-13696*c,h+=(5730336-3015*t)*c-4587*o,d=2*(r+s),o=Math.sin(d),c=Math.cos(d),l+=(-2276413-234*t)*o+2796*c,h+=(978459-485*t)*c+1374*o,d=2*s,o=Math.sin(d),c=Math.cos(d),l+=(2074554+207*t)*o-698*c,h+=(-897492+470*t)*c-291*o,o=Math.sin(i),c=Math.cos(i),l+=(1475877-3633*t)*o+11817*c,h+=(73871-184*t)*c-1924*o,{dpsi:-135e-6+l*1e-7,deps:388e-6+h*1e-7}}function Tf(n){var e=n.tt/36525,t=((((-434e-10*e-576e-9)*e+.0020034)*e-1831e-7)*e-46.836769)*e+84381.406;return t/3600}var Ms;function yf(n){if(!Ms||Math.abs(Ms.tt-n.tt)>1e-6){const e=FE(n),t=Tf(n),i=t+e.deps/3600;Ms={tt:n.tt,dpsi:e.dpsi,deps:e.deps,ee:e.dpsi*Math.cos(t*er)/15,mobl:t,tobl:i}}return Ms}function BE(n,e){const t=n*er,i=Math.cos(t),r=Math.sin(t);return[e[0],e[1]*i-e[2]*r,e[1]*r+e[2]*i]}function HE(n,e){return BE(Tf(n),e)}function zE(n){const e=n.tt/36525;function t(ke,P){const qe=[];let Ie;for(Ie=0;Ie<=P-ke;++Ie)qe.push(0);return{min:ke,array:qe}}function i(ke,P,qe,Ie){const Ce=[];for(let Ae=0;Ae<=P-ke;++Ae)Ce.push(t(qe,Ie));return{min:ke,array:Ce}}function r(ke,P,qe){const Ie=ke.array[P-ke.min];return Ie.array[qe-Ie.min]}function a(ke,P,qe,Ie){const Ce=ke.array[P-ke.min];Ce.array[qe-Ce.min]=Ie}let s,o,c,l,h,d,f,g,S,E,v,p,I,R,w,L,N,O,G,y,M,B,X,j=i(-6,6,1,4),Q=i(-6,6,1,4);function ee(ke,P){return r(j,ke,P)}function ie(ke,P){return r(Q,ke,P)}function ae(ke,P,qe){return a(j,ke,P,qe)}function J(ke,P,qe){return a(Q,ke,P,qe)}function ge(ke,P,qe,Ie,Ce){Ce(ke*qe-P*Ie,P*qe+ke*Ie)}function ue(ke){return Math.sin(ai*ke)}f=e*e,S=0,X=0,v=0,p=3422.7;var De=ue(.19833+.05611*e),Ge=ue(.27869+.04508*e),nt=ue(.16827-.36903*e),ut=ue(.34734-5.37261*e),Je=ue(.10498-5.37899*e),Z=ue(.42681-.41855*e),se=ue(.14943-5.37511*e);for(O=.84*De+.31*Ge+14.27*nt+7.26*ut+.28*Je+.24*Z,G=2.94*De+.31*Ge+14.27*nt+9.34*ut+1.12*Je+.83*Z,y=-6.4*De-1.89*Z,M=.21*De+.31*Ge+14.27*nt-88.7*ut-15.3*Je+.24*Z-1.86*se,B=O-y,g=-3332e-9*ue(.59734-5.37261*e)-539e-9*ue(.35498-5.37899*e)-64e-9*ue(.39943-5.37511*e),I=ai*yr(.60643382+1336.85522467*e-313e-8*f)+O/Di,R=ai*yr(.37489701+1325.55240982*e+2565e-8*f)+G/Di,w=ai*yr(.99312619+99.99735956*e-44e-8*f)+y/Di,L=ai*yr(.25909118+1342.2278298*e-892e-8*f)+M/Di,N=ai*yr(.82736186+1236.85308708*e-397e-8*f)+B/Di,h=1;h<=4;++h){switch(h){case 1:c=R,o=4,l=1.000002208;break;case 2:c=w,o=3,l=.997504612-.002495388*e;break;case 3:c=L,o=4,l=1.000002708+139.978*g;break;case 4:c=N,o=6,l=1;break;default:throw`Internal error: I = ${h}`}for(ae(0,h,1),ae(1,h,Math.cos(c)*l),J(0,h,0),J(1,h,Math.sin(c)*l),d=2;d<=o;++d)ge(ee(d-1,h),ie(d-1,h),ee(1,h),ie(1,h),(ke,P)=>(ae(d,h,ke),J(d,h,P)));for(d=1;d<=o;++d)ae(-d,h,ee(d,h)),J(-d,h,-ie(d,h))}function Me(ke,P,qe,Ie){for(var Ce={x:1,y:0},Ae=[0,ke,P,qe,Ie],ot=1;ot<=4;++ot)Ae[ot]!==0&&ge(Ce.x,Ce.y,ee(Ae[ot],ot),ie(Ae[ot],ot),(be,Xe)=>(Ce.x=be,Ce.y=Xe));return Ce}function Y(ke,P,qe,Ie,Ce,Ae,ot,be){var Xe=Me(Ce,Ae,ot,be);S+=ke*Xe.y,X+=P*Xe.y,v+=qe*Xe.x,p+=Ie*Xe.x}Y(13.902,14.06,-.001,.2607,0,0,0,4),Y(.403,-4.01,.394,.0023,0,0,0,3),Y(2369.912,2373.36,.601,28.2333,0,0,0,2),Y(-125.154,-112.79,-.725,-.9781,0,0,0,1),Y(1.979,6.98,-.445,.0433,1,0,0,4),Y(191.953,192.72,.029,3.0861,1,0,0,2),Y(-8.466,-13.51,.455,-.1093,1,0,0,1),Y(22639.5,22609.07,.079,186.5398,1,0,0,0),Y(18.609,3.59,-.094,.0118,1,0,0,-1),Y(-4586.465,-4578.13,-.077,34.3117,1,0,0,-2),Y(3.215,5.44,.192,-.0386,1,0,0,-3),Y(-38.428,-38.64,.001,.6008,1,0,0,-4),Y(-.393,-1.43,-.092,.0086,1,0,0,-6),Y(-.289,-1.59,.123,-.0053,0,1,0,4),Y(-24.42,-25.1,.04,-.3,0,1,0,2),Y(18.023,17.93,.007,.1494,0,1,0,1),Y(-668.146,-126.98,-1.302,-.3997,0,1,0,0),Y(.56,.32,-.001,-.0037,0,1,0,-1),Y(-165.145,-165.06,.054,1.9178,0,1,0,-2),Y(-1.877,-6.46,-.416,.0339,0,1,0,-4),Y(.213,1.02,-.074,.0054,2,0,0,4),Y(14.387,14.78,-.017,.2833,2,0,0,2),Y(-.586,-1.2,.054,-.01,2,0,0,1),Y(769.016,767.96,.107,10.1657,2,0,0,0),Y(1.75,2.01,-.018,.0155,2,0,0,-1),Y(-211.656,-152.53,5.679,-.3039,2,0,0,-2),Y(1.225,.91,-.03,-.0088,2,0,0,-3),Y(-30.773,-34.07,-.308,.3722,2,0,0,-4),Y(-.57,-1.4,-.074,.0109,2,0,0,-6),Y(-2.921,-11.75,.787,-.0484,1,1,0,2),Y(1.267,1.52,-.022,.0164,1,1,0,1),Y(-109.673,-115.18,.461,-.949,1,1,0,0),Y(-205.962,-182.36,2.056,1.4437,1,1,0,-2),Y(.233,.36,.012,-.0025,1,1,0,-3),Y(-4.391,-9.66,-.471,.0673,1,1,0,-4),Y(.283,1.53,-.111,.006,1,-1,0,4),Y(14.577,31.7,-1.54,.2302,1,-1,0,2),Y(147.687,138.76,.679,1.1528,1,-1,0,0),Y(-1.089,.55,.021,0,1,-1,0,-1),Y(28.475,23.59,-.443,-.2257,1,-1,0,-2),Y(-.276,-.38,-.006,-.0036,1,-1,0,-3),Y(.636,2.27,.146,-.0102,1,-1,0,-4),Y(-.189,-1.68,.131,-.0028,0,2,0,2),Y(-7.486,-.66,-.037,-.0086,0,2,0,0),Y(-8.096,-16.35,-.74,.0918,0,2,0,-2),Y(-5.741,-.04,0,-9e-4,0,0,2,2),Y(.255,0,0,0,0,0,2,1),Y(-411.608,-.2,0,-.0124,0,0,2,0),Y(.584,.84,0,.0071,0,0,2,-1),Y(-55.173,-52.14,0,-.1052,0,0,2,-2),Y(.254,.25,0,-.0017,0,0,2,-3),Y(.025,-1.67,0,.0031,0,0,2,-4),Y(1.06,2.96,-.166,.0243,3,0,0,2),Y(36.124,50.64,-1.3,.6215,3,0,0,0),Y(-13.193,-16.4,.258,-.1187,3,0,0,-2),Y(-1.187,-.74,.042,.0074,3,0,0,-4),Y(-.293,-.31,-.002,.0046,3,0,0,-6),Y(-.29,-1.45,.116,-.0051,2,1,0,2),Y(-7.649,-10.56,.259,-.1038,2,1,0,0),Y(-8.627,-7.59,.078,-.0192,2,1,0,-2),Y(-2.74,-2.54,.022,.0324,2,1,0,-4),Y(1.181,3.32,-.212,.0213,2,-1,0,2),Y(9.703,11.67,-.151,.1268,2,-1,0,0),Y(-.352,-.37,.001,-.0028,2,-1,0,-1),Y(-2.494,-1.17,-.003,-.0017,2,-1,0,-2),Y(.36,.2,-.012,-.0043,2,-1,0,-4),Y(-1.167,-1.25,.008,-.0106,1,2,0,0),Y(-7.412,-6.12,.117,.0484,1,2,0,-2),Y(-.311,-.65,-.032,.0044,1,2,0,-4),Y(.757,1.82,-.105,.0112,1,-2,0,2),Y(2.58,2.32,.027,.0196,1,-2,0,0),Y(2.533,2.4,-.014,-.0212,1,-2,0,-2),Y(-.344,-.57,-.025,.0036,0,3,0,-2),Y(-.992,-.02,0,0,1,0,2,2),Y(-45.099,-.02,0,-.001,1,0,2,0),Y(-.179,-9.52,0,-.0833,1,0,2,-2),Y(-.301,-.33,0,.0014,1,0,2,-4),Y(-6.382,-3.37,0,-.0481,1,0,-2,2),Y(39.528,85.13,0,-.7136,1,0,-2,0),Y(9.366,.71,0,-.0112,1,0,-2,-2),Y(.202,.02,0,0,1,0,-2,-4),Y(.415,.1,0,.0013,0,1,2,0),Y(-2.152,-2.26,0,-.0066,0,1,2,-2),Y(-1.44,-1.3,0,.0014,0,1,-2,2),Y(.384,-.04,0,0,0,1,-2,-2),Y(1.938,3.6,-.145,.0401,4,0,0,0),Y(-.952,-1.58,.052,-.013,4,0,0,-2),Y(-.551,-.94,.032,-.0097,3,1,0,0),Y(-.482,-.57,.005,-.0045,3,1,0,-2),Y(.681,.96,-.026,.0115,3,-1,0,0),Y(-.297,-.27,.002,-9e-4,2,2,0,-2),Y(.254,.21,-.003,0,2,-2,0,-2),Y(-.25,-.22,.004,.0014,1,3,0,-2),Y(-3.996,0,0,4e-4,2,0,2,0),Y(.557,-.75,0,-.009,2,0,2,-2),Y(-.459,-.38,0,-.0053,2,0,-2,2),Y(-1.298,.74,0,4e-4,2,0,-2,0),Y(.538,1.14,0,-.0141,2,0,-2,-2),Y(.263,.02,0,0,1,1,2,0),Y(.426,.07,0,-6e-4,1,1,-2,-2),Y(-.304,.03,0,3e-4,1,-1,2,0),Y(-.372,-.19,0,-.0027,1,-1,-2,2),Y(.418,0,0,0,0,0,4,0),Y(-.33,-.04,0,0,3,0,2,0);function we(ke,P,qe,Ie,Ce){return ke*Me(P,qe,Ie,Ce).y}E=0,E+=we(-526.069,0,0,1,-2),E+=we(-3.352,0,0,1,-4),E+=we(44.297,1,0,1,-2),E+=we(-6,1,0,1,-4),E+=we(20.599,-1,0,1,0),E+=we(-30.598,-1,0,1,-2),E+=we(-24.649,-2,0,1,0),E+=we(-2,-2,0,1,-2),E+=we(-22.571,0,1,1,-2),E+=we(10.985,0,-1,1,-2),S+=.82*ue(.7736-62.5512*e)+.31*ue(.0466-125.1025*e)+.35*ue(.5785-25.1042*e)+.66*ue(.4591+1335.8075*e)+.64*ue(.313-91.568*e)+1.14*ue(.148+1331.2898*e)+.21*ue(.5918+1056.5859*e)+.44*ue(.5784+1322.8595*e)+.24*ue(.2275-5.7374*e)+.28*ue(.2965+2.6929*e)+.33*ue(.3132+6.3368*e),s=L+X/Di;let Qe=(1.000002708+139.978*g)*(18518.511+1.189+v)*Math.sin(s)-6.24*Math.sin(3*s)+E;return{geo_eclip_lon:ai*yr((I+S/Di)/ai),geo_eclip_lat:Math.PI/(180*3600)*Qe,distance_au:Di*DE/(.999953253*p)}}function GE(n,e){return[n.rot[0][0]*e[0]+n.rot[1][0]*e[1]+n.rot[2][0]*e[2],n.rot[0][1]*e[0]+n.rot[1][1]*e[1]+n.rot[2][1]*e[2],n.rot[0][2]*e[0]+n.rot[1][2]*e[1]+n.rot[2][2]*e[2]]}function kE(n,e,t){const i=Mf(e,t);return GE(i,n)}function Mf(n,e){const t=n.tt/36525;let i=84381.406,r=((((-951e-10*t+132851e-9)*t-.00114045)*t-1.0790069)*t+5038.481507)*t,a=((((3337e-10*t-467e-9)*t-.00772503)*t+.0512623)*t-.025754)*t+i,s=((((-56e-9*t+170663e-9)*t-.00121197)*t-2.3814292)*t+10.556403)*t;i*=Ir,r*=Ir,a*=Ir,s*=Ir;const o=Math.sin(i),c=Math.cos(i),l=Math.sin(-r),h=Math.cos(-r),d=Math.sin(-a),f=Math.cos(-a),g=Math.sin(s),S=Math.cos(s),E=S*h-l*g*f,v=S*l*c+g*f*h*c-o*g*d,p=S*l*o+g*f*h*o+c*g*d,I=-g*h-l*S*f,R=-g*l*c+S*f*h*c-o*S*d,w=-g*l*o+S*f*h*o+c*S*d,L=l*d,N=-d*h*c-o*f,O=-d*h*o+f*c;if(e===xi.Into2000)return new qr([[E,v,p],[I,R,w],[L,N,O]]);if(e===xi.From2000)return new qr([[E,I,L],[v,R,N],[p,w,O]]);throw"Invalid precess direction"}function VE(n){const e=.779057273264+.00273781191135448*n.ut,t=n.ut%1;let i=360*((e+t)%1);return i<0&&(i+=360),i}let ws;function WE(n){if(!ws||ws.tt!==n.tt){const e=n.tt/36525;let t=15*yf(n).ee;const i=VE(n);let r=((t+.014506+((((-368e-10*e-29956e-9)*e-44e-8)*e+1.3915817)*e+4612.156534)*e)/3600+i)%360/15;r<0&&(r+=24),ws={tt:n.tt,st:r}}return ws.st}function XE(n){const e=ir(n);return WE(e)}function YE(n,e){const t=yf(n),i=t.mobl*er,r=t.tobl*er,a=t.dpsi*Ir,s=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(a),d=Math.sin(a),f=h,g=-d*s,S=-d*o,E=d*c,v=h*s*c+o*l,p=h*o*c-s*l,I=d*l,R=h*s*l-o*c,w=h*o*l+s*c;if(e===xi.From2000)return new qr([[f,E,I],[g,v,R],[S,p,w]]);if(e===xi.Into2000)return new qr([[f,g,S],[E,v,p],[I,R,w]]);throw"Invalid precess direction"}class On{constructor(e,t,i,r){this.x=e,this.y=t,this.z=i,this.t=r}Length(){return Math.hypot(this.x,this.y,this.z)}}class qE{constructor(e,t,i,r,a,s,o){this.x=e,this.y=t,this.z=i,this.vx=r,this.vy=a,this.vz=s,this.t=o}}let $E=class{constructor(e,t,i){this.lat=Ls(e),this.lon=Ls(t),this.dist=Ls(i)}};class qr{constructor(e){this.rot=e}}function gl(n){const e=ir(n),t=zE(e),i=t.distance_au*Math.cos(t.geo_eclip_lat),r=[i*Math.cos(t.geo_eclip_lon),i*Math.sin(t.geo_eclip_lon),t.distance_au*Math.sin(t.geo_eclip_lat)],a=HE(e,r),s=kE(a,e,xi.Into2000);return new On(s[0],s[1],s[2],e)}function Or(n,e,t){let i=1,r=0;for(let a of n){let s=0;for(let[c,l,h]of a)s+=c*Math.cos(l+e*h);let o=i*s;t&&(o%=ai),r+=o,i*=e}return r}function nc(n,e){let t=1,i=0,r=0,a=0;for(let s of n){let o=0,c=0;for(let[l,h,d]of s){let f=h+e*d;o+=l*d*Math.sin(f),a>0&&(c+=l*Math.cos(f))}r+=a*i*c-t*o,i=t,t*=e,++a}return r}const _a=365250,vl=0,_l=1,Sl=2;function xl(n){return new Kt(n[0]+44036e-11*n[1]-190919e-12*n[2],-479966e-12*n[0]+.917482137087*n[1]-.397776982902*n[2],.397776982902*n[1]+.917482137087*n[2])}function wf(n,e,t){const i=t*Math.cos(e),r=Math.cos(n),a=Math.sin(n);return[i*r,i*a,t*Math.sin(e)]}function Ns(n,e){const t=e.tt/_a,i=Or(n[vl],t,!0),r=Or(n[_l],t,!1),a=Or(n[Sl],t,!1),s=wf(i,r,a);return xl(s).ToAstroVector(e)}function ZE(n,e){const t=e/_a,i=Or(n[vl],t,!0),r=Or(n[_l],t,!1),a=Or(n[Sl],t,!1),s=nc(n[vl],t),o=nc(n[_l],t),c=nc(n[Sl],t),l=Math.cos(i),h=Math.sin(i),d=Math.cos(r),f=Math.sin(r),g=+(c*d*l)-a*f*l*o-a*d*h*s,S=+(c*d*h)-a*f*h*o+a*d*l*s,E=+(c*f)+a*d*o,v=wf(i,r,a),p=[g/_a,S/_a,E/_a],I=xl(v),R=xl(p);return new tr(e,I,R)}function As(n,e,t,i){const r=i/(i+cu),a=Ns(Pr[t],e);n.x+=r*a.x,n.y+=r*a.y,n.z+=r*a.z}function jE(n){const e=new On(0,0,0,n);return As(e,n,yt.Jupiter,dl),As(e,n,yt.Saturn,fl),As(e,n,yt.Uranus,pl),As(e,n,yt.Neptune,ml),e}const El=51,KE=29200,Lr=146,si=201,Ki=[[-73e4,[-26.118207232108,-14.376168177825,3.384402515299],[.0016339372163656,-.0027861699588508,-.0013585880229445]],[-700800,[41.974905202127,-.448502952929,-12.770351505989],[.00073458569351457,.0022785014891658,.00048619778602049]],[-671600,[14.706930780744,44.269110540027,9.353698474772],[-.00210001479998,.00022295915939915,.00070143443551414]],[-642400,[-29.441003929957,-6.43016153057,6.858481011305],[.00084495803960544,-.0030783914758711,-.0012106305981192]],[-613200,[39.444396946234,-6.557989760571,-13.913760296463],[.0011480029005873,.0022400006880665,.00035168075922288]],[-584e3,[20.2303809507,43.266966657189,7.382966091923],[-.0019754081700585,.00053457141292226,.00075929169129793]],[-554800,[-30.65832536462,2.093818874552,9.880531138071],[61010603013347e-18,-.0031326500935382,-.00099346125151067]],[-525600,[35.737703251673,-12.587706024764,-14.677847247563],[.0015802939375649,.0021347678412429,.00019074436384343]],[-496400,[25.466295188546,41.367478338417,5.216476873382],[-.0018054401046468,.0008328308359951,.00080260156912107]],[-467200,[-29.847174904071,10.636426313081,12.297904180106],[-.00063257063052907,-.0029969577578221,-.00074476074151596]],[-438e3,[30.774692107687,-18.236637015304,-14.945535879896],[.0020113162005465,.0019353827024189,-20937793168297e-19]],[-408800,[30.243153324028,38.656267888503,2.938501750218],[-.0016052508674468,.0011183495337525,.00083333973416824]],[-379600,[-27.288984772533,18.643162147874,14.023633623329],[-.0011856388898191,-.0027170609282181,-.00049015526126399]],[-350400,[24.519605196774,-23.245756064727,-14.626862367368],[.0024322321483154,.0016062008146048,-.00023369181613312]],[-321200,[34.505274805875,35.125338586954,.557361475637],[-.0013824391637782,.0013833397561817,.00084823598806262]],[-292e3,[-23.275363915119,25.818514298769,15.055381588598],[-.0016062295460975,-.0023395961498533,-.00024377362639479]],[-262800,[17.050384798092,-27.180376290126,-13.608963321694],[.0028175521080578,.0011358749093955,-.00049548725258825]],[-233600,[38.093671910285,30.880588383337,-1.843688067413],[-.0011317697153459,.0016128814698472,.00084177586176055]],[-204400,[-18.197852930878,31.932869934309,15.438294826279],[-.0019117272501813,-.0019146495909842,-19657304369835e-18]],[-175200,[8.528924039997,-29.618422200048,-11.805400994258],[.0031034370787005,.0005139363329243,-.00077293066202546]],[-146e3,[40.94685725864,25.904973592021,-4.256336240499],[-.00083652705194051,.0018129497136404,.0008156422827306]],[-116800,[-12.326958895325,36.881883446292,15.217158258711],[-.0021166103705038,-.001481442003599,.00017401209844705]],[-87600,[-.633258375909,-30.018759794709,-9.17193287495],[.0032016994581737,-.00025279858672148,-.0010411088271861]],[-58400,[42.936048423883,20.344685584452,-6.588027007912],[-.00050525450073192,.0019910074335507,.00077440196540269]],[-29200,[-5.975910552974,40.61180995846,14.470131723673],[-.0022184202156107,-.0010562361130164,.00033652250216211]],[0,[-9.875369580774,-27.978926224737,-5.753711824704],[.0030287533248818,-.0011276087003636,-.0012651326732361]],[29200,[43.958831986165,14.214147973292,-8.808306227163],[-.00014717608981871,.0021404187242141,.00071486567806614]],[58400,[.67813676352,43.094461639362,13.243238780721],[-.0022358226110718,-.00063233636090933,.00047664798895648]],[87600,[-18.282602096834,-23.30503958666,-1.766620508028],[.0025567245263557,-.0019902940754171,-.0013943491701082]],[116800,[43.873338744526,7.700705617215,-10.814273666425],[.00023174803055677,.0022402163127924,.00062988756452032]],[146e3,[7.392949027906,44.382678951534,11.629500214854],[-.002193281545383,-.00021751799585364,.00059556516201114]],[175200,[-24.981690229261,-16.204012851426,2.466457544298],[.001819398914958,-.0026765419531201,-.0013848283502247]],[204400,[42.530187039511,.845935508021,-12.554907527683],[.00065059779150669,.0022725657282262,.00051133743202822]],[233600,[13.999526486822,44.462363044894,9.669418486465],[-.0021079296569252,.00017533423831993,.00069128485798076]],[262800,[-29.184024803031,-7.371243995762,6.493275957928],[.00093581363109681,-.0030610357109184,-.0012364201089345]],[292e3,[39.831980671753,-6.078405766765,-13.909815358656],[.0011117769689167,.0022362097830152,.00036230548231153]],[321200,[20.294955108476,43.417190420251,7.450091985932],[-.0019742157451535,.00053102050468554,.00075938408813008]],[350400,[-30.66999230216,2.318743558955,9.973480913858],[45605107450676e-18,-.0031308219926928,-.00099066533301924]],[379600,[35.626122155983,-12.897647509224,-14.777586508444],[.0016015684949743,.0021171931182284,.00018002516202204]],[408800,[26.133186148561,41.232139187599,5.00640132622],[-.0017857704419579,.00086046232702817,.00080614690298954]],[438e3,[-29.57674022923,11.863535943587,12.631323039872],[-.00072292830060955,-.0029587820140709,-.000708242964503]],[467200,[29.910805787391,-19.159019294,-15.013363865194],[.0020871080437997,.0018848372554514,-38528655083926e-18]],[496400,[31.375957451819,38.050372720763,2.433138343754],[-.0015546055556611,.0011699815465629,.00083565439266001]],[525600,[-26.360071336928,20.662505904952,14.414696258958],[-.0013142373118349,-.0026236647854842,-.00042542017598193]],[554800,[22.599441488648,-24.508879898306,-14.484045731468],[.0025454108304806,.0014917058755191,-.00030243665086079]],[584e3,[35.877864013014,33.894226366071,-.224524636277],[-.0012941245730845,.0014560427668319,.00084762160640137]],[613200,[-21.538149762417,28.204068269761,15.321973799534],[-.001731211740901,-.0021939631314577,-.0001631691327518]],[642400,[13.971521374415,-28.339941764789,-13.083792871886],[.0029334630526035,.00091860931752944,-.00059939422488627]],[671600,[39.526942044143,28.93989736011,-2.872799527539],[-.0010068481658095,.001702113288809,.00083578230511981]],[700800,[-15.576200701394,34.399412961275,15.466033737854],[-.0020098814612884,-.0017191109825989,70414782780416e-18]],[73e4,[4.24325283709,-30.118201690825,-10.707441231349],[.0031725847067411,.0001609846120227,-.00090672150593868]]];class Kt{constructor(e,t,i){this.x=e,this.y=t,this.z=i}clone(){return new Kt(this.x,this.y,this.z)}ToAstroVector(e){return new On(this.x,this.y,this.z,e)}static zero(){return new Kt(0,0,0)}quadrature(){return this.x*this.x+this.y*this.y+this.z*this.z}add(e){return new Kt(this.x+e.x,this.y+e.y,this.z+e.z)}sub(e){return new Kt(this.x-e.x,this.y-e.y,this.z-e.z)}incr(e){this.x+=e.x,this.y+=e.y,this.z+=e.z}decr(e){this.x-=e.x,this.y-=e.y,this.z-=e.z}mul(e){return new Kt(e*this.x,e*this.y,e*this.z)}div(e){return new Kt(this.x/e,this.y/e,this.z/e)}mean(e){return new Kt((this.x+e.x)/2,(this.y+e.y)/2,(this.z+e.z)/2)}neg(){return new Kt(-this.x,-this.y,-this.z)}}class tr{constructor(e,t,i){this.tt=e,this.r=t,this.v=i}clone(){return new tr(this.tt,this.r,this.v)}sub(e){return new tr(this.tt,this.r.sub(e.r),this.v.sub(e.v))}}function JE(n){let[e,[t,i,r],[a,s,o]]=n;return new tr(e,new Kt(t,i,r),new Kt(a,s,o))}function Rs(n,e,t,i){const r=i/(i+cu),a=ZE(Pr[t],e);return n.r.incr(a.r.mul(r)),n.v.incr(a.v.mul(r)),a}function ua(n,e,t){const i=t.sub(n),r=i.quadrature();return i.mul(e/(r*Math.sqrt(r)))}class lu{constructor(e){let t=new tr(e,new Kt(0,0,0),new Kt(0,0,0));this.Jupiter=Rs(t,e,yt.Jupiter,dl),this.Saturn=Rs(t,e,yt.Saturn,fl),this.Uranus=Rs(t,e,yt.Uranus,pl),this.Neptune=Rs(t,e,yt.Neptune,ml),this.Jupiter.r.decr(t.r),this.Jupiter.v.decr(t.v),this.Saturn.r.decr(t.r),this.Saturn.v.decr(t.v),this.Uranus.r.decr(t.r),this.Uranus.v.decr(t.v),this.Neptune.r.decr(t.r),this.Neptune.v.decr(t.v),this.Sun=new tr(e,t.r.mul(-1),t.v.mul(-1))}Acceleration(e){let t=ua(e,cu,this.Sun.r);return t.incr(ua(e,dl,this.Jupiter.r)),t.incr(ua(e,fl,this.Saturn.r)),t.incr(ua(e,pl,this.Uranus.r)),t.incr(ua(e,ml,this.Neptune.r)),t}}class fo{constructor(e,t,i,r){this.tt=e,this.r=t,this.v=i,this.a=r}clone(){return new fo(this.tt,this.r.clone(),this.v.clone(),this.a.clone())}}let Af=class{constructor(e,t){this.bary=e,this.grav=t}};function $s(n,e,t,i){return new Kt(e.x+n*(t.x+n*i.x/2),e.y+n*(t.y+n*i.y/2),e.z+n*(t.z+n*i.z/2))}function Bh(n,e,t){return new Kt(e.x+n*t.x,e.y+n*t.y,e.z+n*t.z)}function Tl(n,e){const t=n-e.tt,i=new lu(n),r=$s(t,e.r,e.v,e.a),a=i.Acceleration(r).mean(e.a),s=$s(t,e.r,e.v,a),o=e.v.add(a.mul(t)),c=i.Acceleration(s),l=new fo(n,s,o,c);return new Af(i,l)}const QE=[];function Rf(n,e){const t=Math.floor(n);return t<0?0:t>=e?e-1:t}function yl(n){const e=JE(n),t=new lu(e.tt),i=e.r.add(t.Sun.r),r=e.v.add(t.Sun.v),a=t.Acceleration(i),s=new fo(e.tt,i,r,a);return new Af(t,s)}function e2(n,e){const t=Ki[0][0];if(e<t||e>Ki[El-1][0])return null;const i=Rf((e-t)/KE,El-1);if(!n[i]){const a=n[i]=[];a[0]=yl(Ki[i]).grav,a[si-1]=yl(Ki[i+1]).grav;let s,o=a[0].tt;for(s=1;s<si-1;++s)a[s]=Tl(o+=Lr,a[s-1]).grav;o=a[si-1].tt;var r=[];for(r[si-1]=a[si-1],s=si-2;s>0;--s)r[s]=Tl(o-=Lr,r[s+1]).grav;for(s=si-2;s>0;--s){const c=s/(si-1);a[s].r=a[s].r.mul(1-c).add(r[s].r.mul(c)),a[s].v=a[s].v.mul(1-c).add(r[s].v.mul(c)),a[s].a=a[s].a.mul(1-c).add(r[s].a.mul(c))}}return n[i]}function Hh(n,e,t){let i=yl(n);const r=Math.ceil((e-i.grav.tt)/t);for(let a=0;a<r;++a)i=Tl(a+1===r?e:i.grav.tt+t,i.grav);return i}function t2(n,e){let t,i,r;const a=e2(QE,n.tt);if(a){const s=Rf((n.tt-a[0].tt)/Lr,si-1),o=a[s],c=a[s+1],l=o.a.mean(c.a),h=$s(n.tt-o.tt,o.r,o.v,l),d=Bh(n.tt-o.tt,o.v,l),f=$s(n.tt-c.tt,c.r,c.v,l),g=Bh(n.tt-c.tt,c.v,l),S=(n.tt-o.tt)/Lr;t=h.mul(1-S).add(f.mul(S)),i=d.mul(1-S).add(g.mul(S))}else{let s;n.tt<Ki[0][0]?s=Hh(Ki[0],n.tt,-Lr):s=Hh(Ki[El-1],n.tt,+Lr),t=s.grav.r,i=s.grav.v,r=s.bary}return r||(r=new lu(n.tt)),t=t.sub(r.Sun.r),i=i.sub(r.Sun.v),new qE(t.x,t.y,t.z,i.x,i.y,i.z,n)}function Aa(n,e){var t=ir(e);if(n in Pr)return Ns(Pr[n],t);if(n===yt.Pluto){const s=t2(t);return new On(s.x,s.y,s.z,t)}if(n===yt.Sun)return new On(0,0,0,t);if(n===yt.Moon){var i=Ns(Pr.Earth,t),r=gl(t);return new On(i.x+r.x,i.y+r.y,i.z+r.z,t)}if(n===yt.EMB){const s=Ns(Pr.Earth,t),o=gl(t),c=1+IE;return new On(s.x+o.x/c,s.y+o.y/c,s.z+o.z/c,t)}if(n===yt.SSB)return jE(t);const a=Ef(n);if(a){const s=new $E(a.dec,15*a.ra,a.dist);return c2(s,t)}throw`HelioVector: Unknown body "${n}"`}function n2(n,e){let t=e,i=0;for(let r=0;r<10;++r){const a=n(t),s=a.Length()/ME;if(s>1)throw"Object is too distant for light-travel solver.";const o=e.AddDays(-s);if(i=Math.abs(o.tt-t.tt),i<1e-9)return a;t=o}throw`Light-travel time solver did not converge: dt = ${i}`}class i2{constructor(e,t,i,r){this.observerBody=e,this.targetBody=t,this.aberration=i,this.observerPos=r}Position(e){this.aberration&&(this.observerPos=Aa(this.observerBody,e));const t=Aa(this.targetBody,e);return new On(t.x-this.observerPos.x,t.y-this.observerPos.y,t.z-this.observerPos.z,e)}}function r2(n,e,t,i){const r=ir(n);if(Ef(t)){const o=Aa(t,r),c=Aa(e,r);return new On(o.x-c.x,o.y-c.y,o.z-c.z,r)}let a;a=Aa(e,r);const s=new i2(e,t,i,a);return n2(o=>s.Position(o),r)}function a2(n,e,t){const i=ir(e);switch(n){case yt.Earth:return new On(0,0,0,i);case yt.Moon:return gl(i);default:const r=r2(i,yt.Earth,n,t);return r.t=i,r}}var zh;(function(n){n[n.Pericenter=0]="Pericenter",n[n.Apocenter=1]="Apocenter"})(zh||(zh={}));function s2(n,e){return new qr([[e.rot[0][0]*n.rot[0][0]+e.rot[1][0]*n.rot[0][1]+e.rot[2][0]*n.rot[0][2],e.rot[0][1]*n.rot[0][0]+e.rot[1][1]*n.rot[0][1]+e.rot[2][1]*n.rot[0][2],e.rot[0][2]*n.rot[0][0]+e.rot[1][2]*n.rot[0][1]+e.rot[2][2]*n.rot[0][2]],[e.rot[0][0]*n.rot[1][0]+e.rot[1][0]*n.rot[1][1]+e.rot[2][0]*n.rot[1][2],e.rot[0][1]*n.rot[1][0]+e.rot[1][1]*n.rot[1][1]+e.rot[2][1]*n.rot[1][2],e.rot[0][2]*n.rot[1][0]+e.rot[1][2]*n.rot[1][1]+e.rot[2][2]*n.rot[1][2]],[e.rot[0][0]*n.rot[2][0]+e.rot[1][0]*n.rot[2][1]+e.rot[2][0]*n.rot[2][2],e.rot[0][1]*n.rot[2][0]+e.rot[1][1]*n.rot[2][1]+e.rot[2][1]*n.rot[2][2],e.rot[0][2]*n.rot[2][0]+e.rot[1][2]*n.rot[2][1]+e.rot[2][2]*n.rot[2][2]]])}function o2(n,e,t){const i=Ls(t)*er,r=Math.cos(i),a=Math.sin(i),s=(e+1)%3,o=(e+2)%3,c=e;let l=[[0,0,0],[0,0,0],[0,0,0]];return l[s][s]=r*n.rot[s][s]-a*n.rot[s][o],l[s][o]=a*n.rot[s][s]+r*n.rot[s][o],l[s][c]=n.rot[s][c],l[o][s]=r*n.rot[o][s]-a*n.rot[o][o],l[o][o]=a*n.rot[o][s]+r*n.rot[o][o],l[o][c]=n.rot[o][c],l[c][s]=r*n.rot[c][s]-a*n.rot[c][o],l[c][o]=a*n.rot[c][s]+r*n.rot[c][o],l[c][c]=n.rot[c][c],new qr(l)}function c2(n,e){e=ir(e);const t=n.lat*er,i=n.lon*er,r=n.dist*Math.cos(t);return new On(r*Math.cos(i),r*Math.sin(i),n.dist*Math.sin(t),e)}function l2(n){n=ir(n);const e=Mf(n,xi.From2000),t=YE(n,xi.From2000);return s2(e,t)}var Gh;(function(n){n.Penumbral="penumbral",n.Partial="partial",n.Annular="annular",n.Total="total"})(Gh||(Gh={}));var kh;(function(n){n[n.Invalid=0]="Invalid",n[n.Ascending=1]="Ascending",n[n.Descending=-1]="Descending"})(kh||(kh={}));const u2=new He;function Cf(n){return n instanceof Li?n:new Li(n instanceof Date?n:new Date(n))}function h2(n,e=new F){const{x:t,y:i,z:r}=n;return e.set(t,i,r)}function d2(n,e=new He){const[t,i,r]=n.rot;return e.set(t[0],i[0],r[0],0,t[1],i[1],r[1],0,t[2],i[2],r[2],0,0,0,0,1)}function f2(n,e=new He){const t=Cf(n),i=o2(l2(t),2,-15*XE(t));return d2(i,e)}function p2(n,e,t,i,r){const a=a2(n,e,!1);return h2(a,t),i!=null,t.normalize()}function m2(n,e=new F,t){const i=Cf(n);return p2(yt.Sun,i,e,t).applyMatrix4(f2(i,u2))}function g2(n){var e=[];if(n.length===0)return"";if(typeof n[0]!="string")throw new TypeError("Url must be a string. Received "+n[0]);if(n[0].match(/^[^/:]+:\/*$/)&&n.length>1){var t=n.shift();n[0]=t+n[0]}n[0].match(/^file:\/\/\//)?n[0]=n[0].replace(/^([^/:]+):\/*/,"$1:///"):n[0]=n[0].replace(/^([^/:]+):\/*/,"$1://");for(var i=0;i<n.length;i++){var r=n[i];if(typeof r!="string")throw new TypeError("Url must be a string. Received "+r);r!==""&&(i>0&&(r=r.replace(/^[\/]+/,"")),i<n.length-1?r=r.replace(/[\/]+$/,""):r=r.replace(/[\/]+$/,"/"),e.push(r))}var a=e.join("/");a=a.replace(/\/(\?|&|#[^!])/g,"$1");var s=a.split("?");return a=s.shift()+(s.length>0?"?":"")+s.join("&"),a}function v2(){var n;return typeof arguments[0]=="object"?n=arguments[0]:n=[].slice.call(arguments),g2(n)}const Vh={width:ru,height:au},Mr={width:oE,height:cE,depth:lE},Wh={width:Jl,height:Ql};class _2 extends Hn{constructor({format:e="exr",type:t=rn,combinedScattering:i=!0,higherOrderScattering:r=!0}={},a){super(a),this.format=e,this.type=t,this.combinedScattering=i,this.higherOrderScattering=r}setType(e){return this.type=kS(e)?qt:rn,this}load(e,t,i,r){const a={},s=({key:o,loader:c,path:l})=>(c.setRequestHeader(this.requestHeader),c.setPath(this.path),c.setWithCredentials(this.withCredentials),c.load(v2(e,l),h=>{var d;h.type=this.type,this.type===qt&&(h.image,h.image.data!=null&&(h.image.data=new Float32Array(new Ei((d=h.image.data)==null?void 0:d.buffer)))),h.minFilter=pt,h.magFilter=pt,a[`${o}Texture`]=h,a.irradianceTexture!=null&&a.scatteringTexture!=null&&a.transmittanceTexture!=null&&(this.combinedScattering||a.singleMieScatteringTexture!=null)&&(!this.higherOrderScattering||a.higherOrderScatteringTexture!=null)&&(t==null||t(a))},i,r));return this.format==="exr"?{transmittanceTexture:s({key:"transmittance",loader:new Uh(Vh,this.manager),path:"transmittance.exr"}),scatteringTexture:s({key:"scattering",loader:new tc(Mr,this.manager),path:"scattering.exr"}),irradianceTexture:s({key:"irradiance",loader:new Uh(Wh,this.manager),path:"irradiance.exr"}),singleMieScatteringTexture:this.combinedScattering?void 0:s({key:"singleMieScattering",loader:new tc(Mr,this.manager),path:"single_mie_scattering.exr"}),higherOrderScatteringTexture:this.higherOrderScattering?s({key:"higherOrderScattering",loader:new tc(Mr,this.manager),path:"higher_order_scattering.exr"}):void 0}:{transmittanceTexture:s({key:"transmittance",loader:new ji(Bs,la,Vh,this.manager),path:"transmittance.bin"}),scatteringTexture:s({key:"scattering",loader:new ji(pi,la,Mr,this.manager),path:"scattering.bin"}),irradianceTexture:s({key:"irradiance",loader:new ji(Bs,la,Wh,this.manager),path:"irradiance.bin"}),singleMieScatteringTexture:this.combinedScattering?void 0:s({key:"singleMieScattering",loader:new ji(pi,la,Mr,this.manager),path:"single_mie_scattering.bin"}),higherOrderScatteringTexture:this.higherOrderScattering?s({key:"higherOrderScattering",loader:new ji(pi,la,Mr,this.manager),path:"higher_order_scattering.bin"}):void 0}}}const S2=`precision highp float;
precision highp sampler3D;

#define RECIPROCAL_PI 0.3183098861837907

#include "core/raySphereIntersection"

#include "bruneton/definitions"

uniform AtmosphereParameters ATMOSPHERE;
uniform vec3 SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
uniform vec3 SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;

uniform sampler2D transmittance_texture;
uniform sampler3D scattering_texture;
uniform sampler2D irradiance_texture;
uniform sampler3D single_mie_scattering_texture;
uniform sampler3D higher_order_scattering_texture;

#include "bruneton/common"
#include "bruneton/runtime"

uniform vec3 sunDirection;
uniform float cosSunAngularRadius;
uniform vec3 moonDirection;
uniform float moonAngularRadius;
uniform float lunarRadianceScale;
uniform vec3 groundAlbedo;

#include "sky"

#ifdef HAS_SHADOW_LENGTH
uniform sampler2D shadowLengthBuffer;
#endif // HAS_SHADOW_LENGTH

in vec2 vUv;
in vec3 vCameraPosition;
in vec3 vRayDirection;

layout(location = 0) out vec4 outputColor;

#include <mrt_layout>

void main() {
  float shadowLength = 0.0;
  #ifdef HAS_SHADOW_LENGTH
  shadowLength = texture(shadowLengthBuffer, vUv).r;
  #endif // HAS_SHADOW_LENGTH

  vec3 cameraPosition = vCameraPosition;
  vec3 rayDirection = normalize(vRayDirection);
  vec3 dRDdx = dFdx(rayDirection);
  vec3 dRDdy = dFdy(rayDirection);
  float fragmentAngle = length(dRDdx + dRDdy) / length(rayDirection);

  #ifdef GROUND_ALBEDO

  float r = length(cameraPosition);
  float mu = dot(cameraPosition, rayDirection) / r;
  bool intersectsGround = RayIntersectsGround(ATMOSPHERE, r, mu);
  if (intersectsGround) {
    float distanceToGround = raySphereFirstIntersection(
      cameraPosition,
      rayDirection,
      ATMOSPHERE.bottom_radius
    );
    vec3 groundPosition = rayDirection * distanceToGround + cameraPosition;
    vec3 surfaceNormal = normalize(groundPosition);
    vec3 skyIrradiance;
    vec3 sunIrradiance = GetSunAndSkyIrradiance(
      cameraPosition,
      surfaceNormal,
      sunDirection,
      skyIrradiance
    );
    vec3 transmittance;
    vec3 inscatter = GetSkyRadianceToPoint(
      cameraPosition,
      ATMOSPHERE.bottom_radius * surfaceNormal,
      shadowLength,
      sunDirection,
      transmittance
    );
    vec3 radiance = groundAlbedo * RECIPROCAL_PI * (sunIrradiance + skyIrradiance);
    outputColor.rgb = radiance * transmittance + inscatter;
  } else {
    outputColor.rgb = getSkyRadiance(
      cameraPosition,
      rayDirection,
      shadowLength,
      sunDirection,
      moonDirection,
      moonAngularRadius,
      lunarRadianceScale,
      fragmentAngle
    );
  }

  #else // GROUND_ALBEDO

  outputColor.rgb = getSkyRadiance(
    cameraPosition,
    rayDirection,
    shadowLength,
    sunDirection,
    moonDirection,
    moonAngularRadius,
    lunarRadianceScale,
    fragmentAngle
  );

  #endif // GROUND_ALBEDO

  outputColor.a = 1.0;

  #include <mrt_output>
}
`,x2=`precision highp float;
precision highp sampler3D;

uniform mat4 inverseProjectionMatrix;
uniform mat4 inverseViewMatrix;
uniform vec3 cameraPosition;
uniform mat4 worldToECEFMatrix;
uniform vec3 altitudeCorrection;

layout(location = 0) in vec3 position;

out vec2 vUv;
out vec3 vCameraPosition;
out vec3 vRayDirection;

void getCameraRay(out vec3 origin, out vec3 direction) {
  bool isPerspective = inverseProjectionMatrix[2][3] != 0.0; // 4th entry in the 3rd column

  if (isPerspective) {
    // Calculate the camera ray for a perspective camera.
    vec4 viewPosition = inverseProjectionMatrix * vec4(position, 1.0);
    vec4 worldDirection = inverseViewMatrix * vec4(viewPosition.xyz, 0.0);
    origin = cameraPosition;
    direction = worldDirection.xyz;
  } else {
    // Unprojected points to calculate direction.
    vec4 nearPoint = inverseProjectionMatrix * vec4(position.xy, -1.0, 1.0);
    vec4 farPoint = inverseProjectionMatrix * vec4(position.xy, -0.9, 1.0);
    nearPoint /= nearPoint.w;
    farPoint /= farPoint.w;

    // Calculate world values
    vec4 worldDirection = inverseViewMatrix * vec4(farPoint.xyz - nearPoint.xyz, 0.0);
    vec4 worldOrigin = inverseViewMatrix * nearPoint;

    // Outputs
    direction = worldDirection.xyz;
    origin = worldOrigin.xyz;
  }
}

void main() {
  vUv = position.xy * 0.5 + 0.5;

  vec3 direction, origin;
  getCameraRay(origin, direction);

  vec3 cameraPositionECEF = (worldToECEFMatrix * vec4(origin, 1.0)).xyz;
  vCameraPosition = (cameraPositionECEF + altitudeCorrection) * METER_TO_LENGTH_UNIT;
  vRayDirection = (worldToECEFMatrix * vec4(direction, 0.0)).xyz;

  gl_Position = vec4(position.xy, 1.0, 1.0);
}
`;var E2=Object.defineProperty,uu=(n,e,t,i)=>{for(var r=void 0,a=n.length-1,s;a>=0;a--)(s=n[a])&&(r=s(e,t,r)||r);return r&&E2(e,t,r),r};const T2={...ou,sun:!0,moon:!0,moonAngularRadius:.0045,lunarRadianceScale:1,ground:!0,groundAlbedo:new ft(0)};class hu extends Ga{constructor(e){const{sun:t,moon:i,moonDirection:r,moonAngularRadius:a,lunarRadianceScale:s,ground:o,groundAlbedo:c,...l}={...T2,...e};super({name:"SkyMaterial",glslVersion:Ui,vertexShader:x2,fragmentShader:Si(S2,{core:{raySphereIntersection:oo},bruneton:{common:co,definitions:lo,runtime:uo},sky:Sf}),...l,uniforms:{inverseProjectionMatrix:new U(new He),inverseViewMatrix:new U(new He),moonDirection:new U((r==null?void 0:r.clone())??new F),moonAngularRadius:new U(a),lunarRadianceScale:new U(s),groundAlbedo:new U(c.clone()),shadowLengthBuffer:new U(null),...l.uniforms},defines:{PERSPECTIVE_CAMERA:"1"},depthWrite:!1,depthTest:!0}),this.shadowLength=null,this.sun=t,this.moon=i,this.ground=o}onBeforeRender(e,t,i,r,a,s){super.onBeforeRender(e,t,i,r,a,s);const{uniforms:o,defines:c}=this;o.inverseProjectionMatrix.value.copy(i.projectionMatrixInverse),o.inverseViewMatrix.value.copy(i.matrixWorld);const l=c.PERSPECTIVE_CAMERA!=null,h=i.isPerspectiveCamera===!0;h!==l&&(h?c.PERSPECTIVE_CAMERA="1":delete c.PERSPECTIVE_CAMERA,this.needsUpdate=!0);const d=this.groundAlbedo,f=c.GROUND_ALBEDO!=null,g=d.r!==0||d.g!==0||d.b!==0;g!==f&&(g?this.defines.GROUND_ALBEDO="1":delete this.defines.GROUND_ALBEDO,this.needsUpdate=!0);const S=this.shadowLength,E=c.HAS_SHADOW_LENGTH!=null,v=S!=null;v!==E&&(v?c.HAS_SHADOW_LENGTH="1":(delete c.HAS_SHADOW_LENGTH,o.shadowLengthBuffer.value=null),this.needsUpdate=!0),v&&(o.shadowLengthBuffer.value=S.map)}get moonDirection(){return this.uniforms.moonDirection.value}get moonAngularRadius(){return this.uniforms.moonAngularRadius.value}set moonAngularRadius(e){this.uniforms.moonAngularRadius.value=e}get lunarRadianceScale(){return this.uniforms.lunarRadianceScale.value}set lunarRadianceScale(e){this.uniforms.lunarRadianceScale.value=e}get groundAlbedo(){return this.uniforms.groundAlbedo.value}}uu([dt("SUN")],hu.prototype,"sun");uu([dt("MOON")],hu.prototype,"moon");uu([dt("GROUND")],hu.prototype,"ground");const y2=`precision highp float;
precision highp sampler3D;

#include "bruneton/definitions"

uniform AtmosphereParameters ATMOSPHERE;
uniform vec3 SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
uniform vec3 SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;

uniform sampler2D transmittance_texture;
uniform sampler3D scattering_texture;
uniform sampler2D irradiance_texture;
uniform sampler3D single_mie_scattering_texture;
uniform sampler3D higher_order_scattering_texture;

#include "bruneton/common"
#include "bruneton/runtime"

uniform vec3 sunDirection;

in vec3 vCameraPosition;
in vec3 vRayDirection;

layout(location = 0) out vec4 outputColor;

#include <mrt_layout>

in vec3 vColor;

void main() {
  #if !defined(PERSPECTIVE_CAMERA)
  outputColor = vec4(0.0);
  discard; // Rendering celestial objects without perspective doesn't make sense.
  #endif // !defined(PERSPECTIVE_CAMERA)

  #ifdef BACKGROUND
  vec3 rayDirection = normalize(vRayDirection);
  float r = length(vCameraPosition);
  float mu = dot(vCameraPosition, rayDirection) / r;

  if (RayIntersectsGround(ATMOSPHERE, r, mu)) {
    discard;
  }

  vec3 transmittance;
  vec3 radiance = GetSkyRadiance(
    vCameraPosition,
    normalize(vRayDirection),
    0.0, // Shadow length
    sunDirection,
    transmittance
  );
  radiance += transmittance * vColor;
  outputColor = vec4(radiance, 1.0);
  #else // BACKGROUND
  outputColor = vec4(vColor, 1.0);
  #endif // BACKGROUND

  #include <mrt_output>
}
`,M2=`precision highp float;
precision highp sampler3D;

#define saturate(x) clamp(x, 0.0, 1.0)

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 viewMatrix;
uniform mat4 matrixWorld;
uniform vec3 cameraPosition;
uniform float cameraFar;
uniform mat4 worldToECEFMatrix;
uniform vec3 altitudeCorrection;
uniform float pointSize;
uniform vec2 magnitudeRange;
uniform float intensity;

layout(location = 0) in vec3 position;
layout(location = 1) in float magnitude;
layout(location = 2) in vec3 color;

out vec3 vCameraPosition;
out vec3 vRayDirection;
out vec3 vEllipsoidCenter;
out vec3 vColor;

void main() {
  // Magnitude is stored between 0 to 1 within the given range.
  float m = mix(magnitudeRange.x, magnitudeRange.y, magnitude);
  vec3 v = pow(vec3(10.0), -vec3(magnitudeRange, m) / 2.5);
  vColor = vec3(intensity * color);
  vColor *= saturate((v.z - v.y) / (v.x - v.y));

  #ifdef BACKGROUND
  vec3 worldDirection = normalize(matrixWorld * vec4(position, 1.0)).xyz;
  vec3 cameraPositionECEF = (worldToECEFMatrix * vec4(cameraPosition, 1.0)).xyz;
  vCameraPosition = (cameraPositionECEF + altitudeCorrection) * METER_TO_LENGTH_UNIT;
  vRayDirection = (worldToECEFMatrix * vec4(worldDirection, 0.0)).xyz;
  gl_Position =
    projectionMatrix * viewMatrix * vec4(cameraPosition + worldDirection * cameraFar, 1.0);
  #else // BACKGROUND
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  #endif // BACKGROUND

  gl_PointSize = pointSize;
}
`;var w2=Object.defineProperty,bf=(n,e,t,i)=>{for(var r=void 0,a=n.length-1,s;a>=0;a--)(s=n[a])&&(r=s(e,t,r)||r);return r&&w2(e,t,r),r};const A2={...ou,pointSize:1,intensity:1,background:!0,ground:!0};let Df=class extends Ga{constructor(e){const{pointSize:t,intensity:i,background:r,ground:a,...s}={...A2,...e};super({name:"StarsMaterial",glslVersion:Ui,vertexShader:M2,fragmentShader:Si(y2,{bruneton:{common:co,definitions:lo,runtime:uo}}),...s,uniforms:{projectionMatrix:new U(new He),modelViewMatrix:new U(new He),viewMatrix:new U(new He),matrixWorld:new U(new He),cameraFar:new U(0),pointSize:new U(0),magnitudeRange:new U(new Pe(-2,8)),intensity:new U(i),...s.uniforms},defines:{PERSPECTIVE_CAMERA:"1"},depthWrite:!0,depthTest:!0}),this.pointSize=t,this.background=r,this.ground=a}onBeforeRender(e,t,i,r,a,s){super.onBeforeRender(e,t,i,r,a,s);const o=this.uniforms;o.projectionMatrix.value.copy(i.projectionMatrix),o.modelViewMatrix.value.copy(i.modelViewMatrix),o.viewMatrix.value.copy(i.matrixWorldInverse),o.matrixWorld.value.copy(a.matrixWorld),o.cameraFar.value=i.far,o.pointSize.value=this.pointSize*e.getPixelRatio();const c=i.isPerspectiveCamera===!0;this.defines.PERSPECTIVE_CAMERA!=null!==c&&(c?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}get magnitudeRange(){return this.uniforms.magnitudeRange.value}get intensity(){return this.uniforms.intensity.value}set intensity(e){this.uniforms.intensity.value=e}};bf([dt("BACKGROUND")],Df.prototype,"background");bf([dt("GROUND")],Df.prototype,"ground");const Xh=uo,Yh=co,qh=lo;class po{constructor(e=0,t=0,i=0,r=0){this.expTerm=e,this.exponent=t,this.linearTerm=i,this.constantTerm=r}set(e=0,t=0,i=0,r=0){return this.expTerm=e,this.exponent=t,this.linearTerm=i,this.constantTerm=r,this}clone(){return new po(this.expTerm,this.exponent,this.linearTerm,this.constantTerm)}copy(e){return this.expTerm=e.expTerm,this.exponent=e.exponent,this.linearTerm=e.linearTerm,this.constantTerm=e.constantTerm,this}}const R2=["channel","altitude","height","densityScale","shapeAmount","shapeDetailAmount","weatherExponent","shapeAlteringBias","coverageFilterWidth","shadow","densityProfile"];function C2(n,e){if(e!=null)for(const t of R2){const i=e[t];i!=null&&(n[t]instanceof po?n[t].copy(i):n[t]=i)}}const Ml=class If{constructor(e){this.channel="r",this.altitude=0,this.height=0,this.densityScale=.2,this.shapeAmount=1,this.shapeDetailAmount=1,this.weatherExponent=1,this.shapeAlteringBias=.35,this.coverageFilterWidth=.6,this.densityProfile=new po(0,0,.75,.25),this.shadow=!1,this.set(e)}set(e){return C2(this,e),this}clone(){return new If(this)}copy(e){return this.channel=e.channel,this.altitude=e.altitude,this.height=e.height,this.densityScale=e.densityScale,this.shapeAmount=e.shapeAmount,this.shapeDetailAmount=e.shapeDetailAmount,this.weatherExponent=e.weatherExponent,this.shapeAlteringBias=e.shapeAlteringBias,this.coverageFilterWidth=e.coverageFilterWidth,this.densityProfile.copy(e.densityProfile),this.shadow=e.shadow,this}};Ml.DEFAULT=new Ml;let Ii=Ml;const wr=Array.from({length:8},()=>({value:0,flag:0})),ha=Array.from({length:3},()=>({min:0,max:0}));function b2(n,e){return n.value!==e.value?n.value-e.value:n.flag-e.flag}const wl=class Pf extends Array{constructor(e){super(new Ii(e==null?void 0:e[0]),new Ii(e==null?void 0:e[1]),new Ii(e==null?void 0:e[2]),new Ii(e==null?void 0:e[3]))}set(e){return this[0].set(e==null?void 0:e[0]),this[1].set(e==null?void 0:e[1]),this[2].set(e==null?void 0:e[2]),this[3].set(e==null?void 0:e[3]),this}reset(){return this[0].copy(Ii.DEFAULT),this[1].copy(Ii.DEFAULT),this[2].copy(Ii.DEFAULT),this[3].copy(Ii.DEFAULT),this}clone(){return new Pf(this)}copy(e){return this[0].copy(e[0]),this[1].copy(e[1]),this[2].copy(e[2]),this[3].copy(e[3]),this}get localWeatherChannels(){return this[0].channel+this[1].channel+this[2].channel+this[3].channel}packValues(e,t){return t.set(this[0][e],this[1][e],this[2][e],this[3][e])}packSums(e,t,i){return i.set(this[0][e]+this[0][t],this[1][e]+this[1][t],this[2][e]+this[2][t],this[3][e]+this[3][t])}packDensityProfiles(e,t){return t.set(this[0].densityProfile[e],this[1].densityProfile[e],this[2].densityProfile[e],this[3].densityProfile[e])}packIntervalHeights(e,t){for(let s=0;s<4;++s){const o=this[s];let c=wr[s];c.value=o.altitude,c.flag=0,c=wr[s+4],c.value=o.altitude+o.height,c.flag=1}wr.sort(b2);let i=0,r=0;for(let s=0;s<wr.length;++s){const{value:o,flag:c}=wr[s];if(r===0&&s>0){const l=ha[i++];l.min=wr[s-1].value,l.max=o}r+=c===0?1:-1}for(;i<3;++i){const s=ha[i];s.min=0,s.max=0}let a=ha[0];e.x=a.min,t.x=a.max,a=ha[1],e.y=a.min,t.y=a.max,a=ha[2],e.z=a.min,t.z=a.max}};wl.DEFAULT=new wl([{channel:"r",altitude:750,height:650,densityScale:.2,shapeAmount:1,shapeDetailAmount:1,weatherExponent:1,shapeAlteringBias:.35,coverageFilterWidth:.6,shadow:!0},{channel:"g",altitude:1e3,height:1200,densityScale:.2,shapeAmount:1,shapeDetailAmount:1,weatherExponent:1,shapeAlteringBias:.35,coverageFilterWidth:.6,shadow:!0},{channel:"b",altitude:7500,height:500,densityScale:.003,shapeAmount:.4,shapeDetailAmount:0,weatherExponent:1,shapeAlteringBias:.35,coverageFilterWidth:.5},{channel:"a"}]);let D2=wl;var I2="Invariant failed";function Pi(n,e){if(!n)throw new Error(I2)}class Pa{constructor(e,t){this.near=[new F,new F,new F,new F],this.far=[new F,new F,new F,new F],e!=null&&t!=null&&this.setFromCamera(e,t)}clone(){return new Pa().copy(this)}copy(e){for(let t=0;t<4;++t)this.near[t].copy(e.near[t]),this.far[t].copy(e.far[t]);return this}setFromCamera(e,t){const i=e.isOrthographicCamera===!0,r=e.projectionMatrixInverse;this.near[0].set(1,1,-1),this.near[1].set(1,-1,-1),this.near[2].set(-1,-1,-1),this.near[3].set(-1,1,-1);for(let a=0;a<4;++a)this.near[a].applyMatrix4(r);this.far[0].set(1,1,1),this.far[1].set(1,-1,1),this.far[2].set(-1,-1,1),this.far[3].set(-1,1,1);for(let a=0;a<4;++a){const s=this.far[a];s.applyMatrix4(r);const o=Math.abs(s.z);i?s.z*=Math.min(t/o,1):s.multiplyScalar(Math.min(t/o,1))}return this}split(e,t=[]){for(let i=0;i<e.length;++i){const r=t[i]??(t[i]=new Pa);if(i===0)for(let a=0;a<4;++a)r.near[a].copy(this.near[a]);else for(let a=0;a<4;++a)r.near[a].lerpVectors(this.near[a],this.far[a],e[i-1]);if(i===e.length-1)for(let a=0;a<4;++a)r.far[a].copy(this.far[a]);else for(let a=0;a<4;++a)r.far[a].lerpVectors(this.near[a],this.far[a],e[i])}return t.length=e.length,t}applyMatrix4(e){for(let t=0;t<4;++t)this.near[t].applyMatrix4(e),this.far[t].applyMatrix4(e);return this}}const P2={uniform:(n,e,t,i,r=[])=>{for(let a=0;a<n;++a)r[a]=(e+(t-e)*(a+1)/n)/t;return r.length=n,r},logarithmic:(n,e,t,i,r=[])=>{for(let a=0;a<n;++a)r[a]=e*(t/e)**((a+1)/n)/t;return r.length=n,r},practical:(n,e,t,i=.5,r=[])=>{for(let a=0;a<n;++a){const s=(e+(t-e)*(a+1)/n)/t,o=e*(t/e)**((a+1)/n)/t;r[a]=hf(s,o,i)}return r.length=n,r}};function L2(n,e,t,i,r,a=[]){return P2[n](e,t,i,r,a)}const $h=new F,Zh=new F,N2=new He,jh=new He,U2=new Pa,O2=new jr,F2={maxFar:null,farScale:1,splitMode:"practical",splitLambda:.5,margin:0,fade:!0};class B2{constructor(e){this.cascades=[],this.mapSize=new Pe,this.cameraFrustum=new Pa,this.frusta=[],this.splits=[],this._far=0;const{cascadeCount:t,mapSize:i,maxFar:r,farScale:a,splitMode:s,splitLambda:o,margin:c,fade:l}={...F2,...e};this.cascadeCount=t,this.mapSize.copy(i),this.maxFar=r,this.farScale=a,this.splitMode=s,this.splitLambda=o,this.margin=c,this.fade=l}get cascadeCount(){return this.cascades.length}set cascadeCount(e){var t;if(e!==this.cascadeCount){for(let i=0;i<e;++i)(t=this.cascades)[i]??(t[i]={interval:new Pe,matrix:new He,inverseMatrix:new He,projectionMatrix:new He,inverseProjectionMatrix:new He,viewMatrix:new He,inverseViewMatrix:new He});this.cascades.length=e}}get far(){return this._far}updateIntervals(e){const t=this.cascadeCount,i=this.splits,r=this.far;L2(this.splitMode,t,e.near,r,this.splitLambda,i),this.cameraFrustum.setFromCamera(e,r),this.cameraFrustum.split(i,this.frusta);const a=this.cascades;for(let s=0;s<t;++s)a[s].interval.set(i[s-1]??0,i[s]??0)}getFrustumRadius(e,t){const i=t.near,r=t.far;let a=Math.max(r[0].distanceTo(r[2]),r[0].distanceTo(i[2]));if(this.fade){const s=e.near,o=this.far,c=r[0].z/(o-s);a+=.25*c**2*(o-s)}return a*.5}updateMatrices(e,t,i=1){const r=N2.lookAt($h.setScalar(0),Zh.copy(t).multiplyScalar(-1),sn.DEFAULT_UP),a=jh.multiplyMatrices(jh.copy(r).invert(),e.matrixWorld),s=this.frusta,o=this.cascades;Pi(s.length===o.length);const c=this.margin,l=this.mapSize;for(let h=0;h<s.length;++h){const d=s[h],f=o[h],g=this.getFrustumRadius(e,s[h]),S=-g,E=g,v=g,p=-g;f.projectionMatrix.makeOrthographic(S,E,v,p,-this.margin,g*2+this.margin);const{near:I,far:R}=U2.copy(d).applyMatrix4(a),w=O2.makeEmpty();for(let y=0;y<4;y++)w.expandByPoint(I[y]),w.expandByPoint(R[y]);const L=w.getCenter($h);L.z=w.max.z+c;const N=(E-S)/l.width,O=(v-p)/l.height;L.x=Math.round(L.x/N)*N,L.y=Math.round(L.y/O)*O,L.applyMatrix4(r);const G=Zh.copy(t).multiplyScalar(i).add(L);f.inverseViewMatrix.lookAt(L,G,sn.DEFAULT_UP).setPosition(G)}}update(e,t,i){this._far=this.maxFar!=null?Math.min(this.maxFar,e.far*this.farScale):e.far*this.farScale,this.updateIntervals(e),this.updateMatrices(e,t,i);const r=this.cascades,a=this.cascadeCount;for(let s=0;s<a;++s){const{matrix:o,inverseMatrix:c,projectionMatrix:l,inverseProjectionMatrix:h,viewMatrix:d,inverseViewMatrix:f}=r[s];h.copy(l).invert(),d.copy(f).invert(),o.copy(l).multiply(d),c.copy(f).multiply(h)}}}const Kh=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],Lf=Kh.reduce((n,e,t)=>{const i=new Pe;for(let r=0;r<16;++r)if(Kh[r]===t){i.set((r%4+.5)/4,(Math.floor(r/4)+.5)/4);break}return[...n,i]},[]),H2={resolutionScale:1,lightShafts:!0,shapeDetail:!0,turbulence:!0,haze:!0,clouds:{multiScatteringOctaves:8,accurateSunSkyLight:!0,accuratePhaseFunction:!1,maxIterationCount:500,minStepSize:50,maxStepSize:1e3,maxRayDistance:2e5,perspectiveStepScale:1.01,minDensity:1e-5,minExtinction:1e-5,minTransmittance:.01,maxIterationCountToGround:3,maxIterationCountToSun:2,minSecondaryStepSize:100,secondaryStepScale:2,maxShadowLengthIterationCount:500,minShadowLengthStepSize:50,maxShadowLengthRayDistance:2e5},shadow:{cascadeCount:3,mapSize:new Pe(512,512),maxIterationCount:50,minStepSize:100,maxStepSize:1e3,minDensity:1e-5,minExtinction:1e-5,minTransmittance:1e-4}},Ze=H2,z2={low:{...Ze,lightShafts:!1,shapeDetail:!1,turbulence:!1,clouds:{...Ze.clouds,accurateSunSkyLight:!1,maxIterationCount:200,minStepSize:100,maxRayDistance:1e5,minDensity:1e-4,minExtinction:1e-4,minTransmittance:.1,maxIterationCountToGround:0,maxIterationCountToSun:1},shadow:{...Ze.shadow,maxIterationCount:25,minDensity:1e-4,minExtinction:1e-4,minTransmittance:.01,cascadeCount:2,mapSize:new Pe(256,256)}},medium:{...Ze,lightShafts:!1,turbulence:!1,clouds:{...Ze.clouds,minDensity:1e-4,minExtinction:1e-4,accurateSunSkyLight:!1,maxIterationCountToSun:2,maxIterationCountToGround:1},shadow:{...Ze.shadow,minDensity:1e-4,minExtinction:1e-4,mapSize:new Pe(256,256)}},high:Ze,ultra:{...Ze,clouds:{...Ze.clouds,minStepSize:10},shadow:{...Ze.shadow,mapSize:new Pe(1024,1024)}}},G2=`precision highp float;
precision highp sampler3D;
precision highp sampler2DArray;

#include <common>
#include <packing>

#include "core/depth"
#include "core/math"
#include "core/turbo"
#include "core/generators"
#include "core/raySphereIntersection"
#include "core/cascadedShadowMaps"
#include "core/interleavedGradientNoise"
#include "core/vogelDisk"

#include "atmosphere/bruneton/definitions"

uniform AtmosphereParameters ATMOSPHERE;
uniform vec3 SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
uniform vec3 SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;

uniform sampler2D transmittance_texture;
uniform sampler3D scattering_texture;
uniform sampler2D irradiance_texture;
uniform sampler3D single_mie_scattering_texture;
uniform sampler3D higher_order_scattering_texture;

#include "atmosphere/bruneton/common"
#include "atmosphere/bruneton/runtime"

#include "types"
#include "parameters"
#include "clouds"

#if !defined(RECIPROCAL_PI4)
#define RECIPROCAL_PI4 0.07957747154594767
#endif // !defined(RECIPROCAL_PI4)

uniform sampler2D depthBuffer;
uniform mat4 viewMatrix;
uniform mat4 reprojectionMatrix;
uniform mat4 viewReprojectionMatrix;
uniform float cameraNear;
uniform float cameraFar;
uniform float cameraHeight;
uniform vec2 temporalJitter;
uniform vec2 targetUvScale;
uniform float mipLevelScale;

// Scattering
const vec2 scatterAnisotropy = vec2(SCATTER_ANISOTROPY_1, SCATTER_ANISOTROPY_2);
const float scatterAnisotropyMix = SCATTER_ANISOTROPY_MIX;
uniform float skyLightScale;
uniform float groundBounceScale;
uniform float powderScale;
uniform float powderExponent;

// Primary raymarch
uniform int maxIterationCount;
uniform float minStepSize;
uniform float maxStepSize;
uniform float maxRayDistance;
uniform float perspectiveStepScale;

// Secondary raymarch
uniform int maxIterationCountToSun;
uniform int maxIterationCountToGround;
uniform float minSecondaryStepSize;
uniform float secondaryStepScale;

// Beer shadow map
uniform sampler2DArray shadowBuffer;
uniform vec2 shadowTexelSize;
uniform vec2 shadowIntervals[SHADOW_CASCADE_COUNT];
uniform mat4 shadowMatrices[SHADOW_CASCADE_COUNT];
uniform float shadowFar;
uniform float maxShadowFilterRadius;

// Shadow length
#ifdef SHADOW_LENGTH
uniform int maxShadowLengthIterationCount;
uniform float minShadowLengthStepSize;
uniform float maxShadowLengthRayDistance;
#endif // SHADOW_LENGTH

in vec2 vUv;
in vec3 vCameraPosition;
in vec3 vCameraDirection; // Direction to the center of screen
in vec3 vRayDirection; // Direction to the texel
in vec3 vViewPosition;
in GroundIrradiance vGroundIrradiance;
in CloudsIrradiance vCloudsIrradiance;

layout(location = 0) out vec4 outputColor;
layout(location = 1) out vec3 outputDepthVelocity;
#ifdef SHADOW_LENGTH
layout(location = 2) out float outputShadowLength;
#endif // SHADOW_LENGTH

float getViewZ(const float depth) {
  #ifdef PERSPECTIVE_CAMERA
  return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
  #else // PERSPECTIVE_CAMERA
  return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
  #endif // PERSPECTIVE_CAMERA
}

vec3 ecefToWorld(const vec3 positionECEF) {
  return (ecefToWorldMatrix * vec4(positionECEF - altitudeCorrection, 1.0)).xyz;
}

vec2 getShadowUv(const vec3 worldPosition, const int cascadeIndex) {
  vec4 clip = shadowMatrices[cascadeIndex] * vec4(worldPosition, 1.0);
  clip /= clip.w;
  return clip.xy * 0.5 + 0.5;
}

float getDistanceToShadowTop(const vec3 rayPosition) {
  // Distance to the top of the shadows along the sun direction, which matches
  // the ray origin of BSM.
  return raySphereSecondIntersection(
    rayPosition,
    sunDirection,
    vec3(0.0),
    bottomRadius + shadowTopHeight
  );
}

#ifdef DEBUG_SHOW_CASCADES

const vec3 cascadeColors[4] = vec3[4](
  vec3(1.0, 0.0, 0.0),
  vec3(0.0, 1.0, 0.0),
  vec3(0.0, 0.0, 1.0),
  vec3(1.0, 1.0, 0.0)
);

vec3 getCascadeColor(const vec3 rayPosition) {
  vec3 worldPosition = ecefToWorld(rayPosition);
  int cascadeIndex = getCascadeIndex(
    viewMatrix,
    worldPosition,
    shadowIntervals,
    cameraNear,
    shadowFar
  );
  vec2 uv = getShadowUv(worldPosition, cascadeIndex);
  if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
    return vec3(1.0);
  }
  return cascadeColors[cascadeIndex];
}

vec3 getFadedCascadeColor(const vec3 rayPosition, const float jitter) {
  vec3 worldPosition = ecefToWorld(rayPosition);
  int cascadeIndex = getFadedCascadeIndex(
    viewMatrix,
    worldPosition,
    shadowIntervals,
    cameraNear,
    shadowFar,
    jitter
  );
  return cascadeIndex >= 0
    ? cascadeColors[cascadeIndex]
    : vec3(1.0);
}

#endif // DEBUG_SHOW_CASCADES

float readShadowOpticalDepth(
  const vec2 uv,
  const float distanceToTop,
  const float distanceOffset,
  const int cascadeIndex
) {
  // r: frontDepth, g: meanExtinction, b: maxOpticalDepth, a: maxOpticalDepthTail
  // Also see the discussion here: https://x.com/shotamatsuda/status/1885322308908442106
  vec4 shadow = texture(shadowBuffer, vec3(uv, float(cascadeIndex)));
  float distanceToFront = max(0.0, distanceToTop - distanceOffset - shadow.r);
  return min(shadow.b + shadow.a, shadow.g * distanceToFront);
}

float sampleShadowOpticalDepthPCF(
  const vec3 worldPosition,
  const float distanceToTop,
  const float distanceOffset,
  const float radius,
  const int cascadeIndex
) {
  vec2 uv = getShadowUv(worldPosition, cascadeIndex);
  if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
    return 0.0;
  }
  if (radius < 0.1) {
    return readShadowOpticalDepth(uv, distanceToTop, distanceOffset, cascadeIndex);
  }
  float sum = 0.0;
  vec2 offset;
  #pragma unroll_loop_start
  for (int i = 0; i < 16; ++i) {
    #if UNROLLED_LOOP_INDEX < SHADOW_SAMPLE_COUNT
    offset = vogelDisk(
      UNROLLED_LOOP_INDEX,
      SHADOW_SAMPLE_COUNT,
      interleavedGradientNoise(gl_FragCoord.xy + temporalJitter * resolution) * PI2
    );
    sum += readShadowOpticalDepth(
      uv + offset * radius * shadowTexelSize,
      distanceToTop,
      distanceOffset,
      cascadeIndex
    );
    #endif // UNROLLED_LOOP_INDEX < SHADOW_SAMPLE_COUNT
  }
  #pragma unroll_loop_end
  return sum / float(SHADOW_SAMPLE_COUNT);
}

float sampleShadowOpticalDepth(
  const vec3 rayPosition,
  const float distanceOffset,
  const float radius,
  const float jitter
) {
  float distanceToTop = getDistanceToShadowTop(rayPosition);
  if (distanceToTop <= 0.0) {
    return 0.0;
  }
  vec3 worldPosition = ecefToWorld(rayPosition);
  int cascadeIndex = getFadedCascadeIndex(
    viewMatrix,
    worldPosition,
    shadowIntervals,
    cameraNear,
    shadowFar,
    jitter
  );
  return cascadeIndex >= 0
    ? sampleShadowOpticalDepthPCF(
      worldPosition,
      distanceToTop,
      distanceOffset,
      radius,
      cascadeIndex
    )
    : 0.0;
}

#ifdef DEBUG_SHOW_SHADOW_MAP
vec4 getCascadedShadowMaps(vec2 uv) {
  vec4 coord = vec4(vUv, vUv - 0.5) * 2.0;
  vec4 shadow = vec4(0.0);
  if (uv.y > 0.5) {
    if (uv.x < 0.5) {
      shadow = texture(shadowBuffer, vec3(coord.xw, 0.0));
    } else {
      #if SHADOW_CASCADE_COUNT > 1
      shadow = texture(shadowBuffer, vec3(coord.zw, 1.0));
      #endif // SHADOW_CASCADE_COUNT > 1
    }
  } else {
    if (uv.x < 0.5) {
      #if SHADOW_CASCADE_COUNT > 2
      shadow = texture(shadowBuffer, vec3(coord.xy, 2.0));
      #endif // SHADOW_CASCADE_COUNT > 2
    } else {
      #if SHADOW_CASCADE_COUNT > 3
      shadow = texture(shadowBuffer, vec3(coord.zy, 3.0));
      #endif // SHADOW_CASCADE_COUNT > 3
    }
  }

  #if !defined(DEBUG_SHOW_SHADOW_MAP_TYPE)
  #define DEBUG_SHOW_SHADOW_MAP_TYPE 0
  #endif // !defined(DEBUG_SHOW_SHADOW_MAP_TYPE

  const float frontDepthScale = 1e-5;
  const float meanExtinctionScale = 10.0;
  const float maxOpticalDepthScale = 0.01;
  vec3 color;
  #if DEBUG_SHOW_SHADOW_MAP_TYPE == 1
  color = vec3(shadow.r * frontDepthScale);
  #elif DEBUG_SHOW_SHADOW_MAP_TYPE == 2
  color = vec3(shadow.g * meanExtinctionScale);
  #elif DEBUG_SHOW_SHADOW_MAP_TYPE == 3
  color = vec3((shadow.b + shadow.a) * maxOpticalDepthScale);
  #else // DEBUG_SHOW_SHADOW_MAP_TYPE
  color =
    (shadow.rgb + vec3(0.0, 0.0, shadow.a)) *
    vec3(frontDepthScale, meanExtinctionScale, maxOpticalDepthScale);
  #endif // DEBUG_SHOW_SHADOW_MAP_TYPE
  return vec4(color, 1.0);
}
#endif // DEBUG_SHOW_SHADOW_MAP

vec2 henyeyGreenstein(const vec2 g, const float cosTheta) {
  vec2 g2 = g * g;
  // prettier-ignore
  return RECIPROCAL_PI4 *
    ((1.0 - g2) / max(vec2(1e-7), pow(1.0 + g2 - 2.0 * g * cosTheta, vec2(1.5))));
}

#ifdef ACCURATE_PHASE_FUNCTION

float draine(float u, float g, float a) {
  float g2 = g * g;
  // prettier-ignore
  return (1.0 - g2) *
    (1.0 + a * u * u) /
    (4.0 * (1.0 + a * (1.0 + 2.0 * g2) / 3.0) * PI * pow(1.0 + g2 - 2.0 * g * u, 1.5));
}

// Numerically-fitted large particles (d=10) phase function It won't be
// plausible without a more precise multiple scattering.
// Reference: https://research.nvidia.com/labs/rtr/approximate-mie/
float phaseFunction(const float cosTheta, const float attenuation) {
  const float gHG = 0.988176691700256; // exp(-0.0990567/(d-1.67154))
  const float gD = 0.5556712547839497; // exp(-2.20679/(d+3.91029) - 0.428934)
  const float alpha = 21.995520856274638; // exp(3.62489 - 8.29288/(d+5.52825))
  const float weight = 0.4819554318404214; // exp(-0.599085/(d-0.641583)-0.665888)
  return mix(
    henyeyGreenstein(vec2(gHG) * attenuation, cosTheta).x,
    draine(cosTheta, gD * attenuation, alpha),
    weight
  );
}

#else // ACCURATE_PHASE_FUNCTION

float phaseFunction(const float cosTheta, const float attenuation) {
  const vec2 g = scatterAnisotropy;
  const vec2 weights = vec2(1.0 - scatterAnisotropyMix, scatterAnisotropyMix);
  // A similar approximation is described in the Frostbite's paper, where phase
  // angle is attenuated instead of anisotropy.
  return dot(henyeyGreenstein(g * attenuation, cosTheta), weights);
}

#endif // ACCURATE_PHASE_FUNCTION

float phaseFunction(const float cosTheta) {
  return phaseFunction(cosTheta, 1.0);
}

float marchOpticalDepth(
  const vec3 rayOrigin,
  const vec3 rayDirection,
  const int maxIterationCount,
  const float mipLevel,
  const float jitter,
  out float rayDistance
) {
  int iterationCount = int(
    max(0.0, remap(mipLevel, 0.0, 1.0, float(maxIterationCount + 1), 1.0) - jitter)
  );
  if (iterationCount == 0) {
    // Fudge factor to approximate the mean optical depth.
    // TODO: Remove it.
    return 0.5;
  }
  float stepSize = minSecondaryStepSize / float(iterationCount);
  float nextDistance = stepSize * jitter;
  float opticalDepth = 0.0;
  for (int i = 0; i < iterationCount; ++i) {
    rayDistance = nextDistance;
    vec3 position = rayDistance * rayDirection + rayOrigin;
    vec2 uv = getGlobeUv(position);
    float height = length(position) - bottomRadius;
    WeatherSample weather = sampleWeather(uv, height, mipLevel);
    MediaSample media = sampleMedia(weather, position, uv, mipLevel, jitter);
    opticalDepth += media.extinction * stepSize;
    nextDistance += stepSize;
    stepSize *= secondaryStepScale;
  }
  return opticalDepth;
}

float marchOpticalDepth(
  const vec3 rayOrigin,
  const vec3 rayDirection,
  const int maxIterationCount,
  const float mipLevel,
  const float jitter
) {
  float rayDistance;
  return marchOpticalDepth(
    rayOrigin,
    rayDirection,
    maxIterationCount,
    mipLevel,
    jitter,
    rayDistance
  );
}

float approximateMultipleScattering(const float opticalDepth, const float cosTheta) {
  // Multiple scattering approximation
  // See: https://fpsunflower.github.io/ckulla/data/oz_volumes.pdf
  // a: attenuation, b: contribution, c: phase attenuation
  vec3 coeffs = vec3(1.0); // [a, b, c]
  const vec3 attenuation = vec3(0.5, 0.5, 0.5); // Should satisfy a <= b
  float scattering = 0.0;
  float beerLambert;
  #pragma unroll_loop_start
  for (int i = 0; i < 12; ++i) {
    #if UNROLLED_LOOP_INDEX < MULTI_SCATTERING_OCTAVES
    beerLambert = exp(-opticalDepth * coeffs.y);
    scattering += coeffs.x * beerLambert * phaseFunction(cosTheta, coeffs.z);
    coeffs *= attenuation;
    #endif // UNROLLED_LOOP_INDEX < MULTI_SCATTERING_OCTAVES
  }
  #pragma unroll_loop_end
  return scattering;
}

// TODO: Construct spherical harmonics of degree 2 using 2 sample points
// positioned near the horizon occlusion points on the sun direction plane.
vec3 getGroundSunSkyIrradiance(
  const vec3 position,
  const vec3 surfaceNormal,
  const float height,
  out vec3 skyIrradiance
) {
  #ifdef ACCURATE_SUN_SKY_LIGHT
  return GetSunAndSkyIrradiance(
    (position - surfaceNormal * height) * METER_TO_LENGTH_UNIT,
    surfaceNormal,
    sunDirection,
    skyIrradiance
  );
  #else // ACCURATE_SUN_SKY_LIGHT
  skyIrradiance = vGroundIrradiance.sky;
  return vGroundIrradiance.sun;
  #endif // ACCURATE_SUN_SKY_LIGHT
}

vec3 getCloudsSunSkyIrradiance(const vec3 position, const float height, out vec3 skyIrradiance) {
  #ifdef ACCURATE_SUN_SKY_LIGHT
  return GetSunAndSkyScalarIrradiance(position * METER_TO_LENGTH_UNIT, sunDirection, skyIrradiance);
  #else // ACCURATE_SUN_SKY_LIGHT
  float alpha = remapClamped(height, minHeight, maxHeight);
  skyIrradiance = mix(vCloudsIrradiance.minSky, vCloudsIrradiance.maxSky, alpha);
  return mix(vCloudsIrradiance.minSun, vCloudsIrradiance.maxSun, alpha);
  #endif // ACCURATE_SUN_SKY_LIGHT
}

#ifdef GROUND_BOUNCE
vec3 approximateRadianceFromGround(
  const vec3 position,
  const vec3 surfaceNormal,
  const float height,
  const float mipLevel,
  const float jitter
) {
  float opticalDepthToGround = marchOpticalDepth(
    position,
    -surfaceNormal,
    maxIterationCountToGround,
    mipLevel,
    jitter
  );
  vec3 skyIrradiance;
  vec3 sunIrradiance = getGroundSunSkyIrradiance(position, surfaceNormal, height, skyIrradiance);
  const float groundAlbedo = 0.3;
  vec3 groundIrradiance = skyIrradiance + (1.0 - coverage) * sunIrradiance;
  vec3 bouncedRadiance = groundAlbedo * RECIPROCAL_PI * groundIrradiance;
  return bouncedRadiance * exp(-opticalDepthToGround);
}
#endif // GROUND_BOUNCE

vec4 marchClouds(
  const vec3 rayOrigin,
  const vec3 rayDirection,
  const vec2 rayNearFar,
  const float cosTheta,
  const float jitter,
  const float rayStartTexelsPerPixel,
  out float frontDepth,
  out ivec3 sampleCount
) {
  vec3 radianceIntegral = vec3(0.0);
  float transmittanceIntegral = 1.0;
  float weightedDistanceSum = 0.0;
  float transmittanceSum = 0.0;

  float maxRayDistance = rayNearFar.y - rayNearFar.x;
  float stepSize = minStepSize + (perspectiveStepScale - 1.0) * rayNearFar.x;
  // I don't understand why spatial aliasing remains unless doubling the jitter.
  float rayDistance = stepSize * jitter * 2.0;

  for (int i = 0; i < maxIterationCount; ++i) {
    if (rayDistance > maxRayDistance) {
      break; // Termination
    }

    vec3 position = rayDistance * rayDirection + rayOrigin;
    float height = length(position) - bottomRadius;
    float mipLevel = log2(max(1.0, rayStartTexelsPerPixel + rayDistance * 1e-5));

    #if !defined(DEBUG_MARCH_INTERVALS)
    if (insideLayerIntervals(height)) {
      stepSize *= perspectiveStepScale;
      rayDistance += mix(stepSize, maxStepSize, min(1.0, mipLevel));
      continue;
    }
    #endif // !defined(DEBUG_MARCH_INTERVALS)

    // Sample rough weather.
    vec2 uv = getGlobeUv(position);
    WeatherSample weather = sampleWeather(uv, height, mipLevel);

    #ifdef DEBUG_SHOW_SAMPLE_COUNT
    ++sampleCount.x;
    #endif // DEBUG_SHOW_SAMPLE_COUNT

    if (!any(greaterThan(weather.density, vec4(minDensity)))) {
      // Step longer in empty space.
      // TODO: This produces banding artifacts.
      // Possible improvement: Binary search refinement
      stepSize *= perspectiveStepScale;
      rayDistance += mix(stepSize, maxStepSize, min(1.0, mipLevel));
      continue;
    }

    // Sample detailed participating media.
    MediaSample media = sampleMedia(weather, position, uv, mipLevel, jitter, sampleCount);

    if (media.extinction > minExtinction) {
      vec3 skyIrradiance;
      vec3 sunIrradiance = getCloudsSunSkyIrradiance(position, height, skyIrradiance);
      vec3 surfaceNormal = normalize(position);

      // March optical depth to the sun for finer details, which BSM lacks.
      float sunRayDistance = 0.0;
      float opticalDepth = marchOpticalDepth(
        position,
        sunDirection,
        maxIterationCountToSun,
        mipLevel,
        jitter,
        sunRayDistance
      );

      if (height < shadowTopHeight) {
        // Obtain the optical depth from BSM at the ray position.
        opticalDepth += sampleShadowOpticalDepth(
          position,
          // Take account of only positions further than the marched ray
          // distance.
          sunRayDistance,
          // Apply PCF only when the sun is close to the horizon.
          maxShadowFilterRadius * remapClamped(dot(sunDirection, surfaceNormal), 0.1, 0.0),
          jitter
        );
      }

      vec3 radiance = sunIrradiance * approximateMultipleScattering(opticalDepth, cosTheta);

      #ifdef GROUND_BOUNCE
      // Fudge factor for the irradiance from ground.
      if (height < shadowTopHeight && mipLevel < 0.5) {
        vec3 groundRadiance = approximateRadianceFromGround(
          position,
          surfaceNormal,
          height,
          mipLevel,
          jitter
        );
        radiance += groundRadiance * RECIPROCAL_PI4 * groundBounceScale;
      }
      #endif // GROUND_BOUNCE

      // Crude approximation of sky gradient. Better than none in the shadows.
      float skyGradient = dot(weather.heightFraction * 0.5 + 0.5, media.weight);
      radiance += skyIrradiance * RECIPROCAL_PI4 * skyGradient * skyLightScale;

      // Finally multiply by scattering.
      radiance *= media.scattering;

      #ifdef POWDER
      radiance *= 1.0 - powderScale * exp(-media.extinction * powderExponent);
      #endif // POWDER

      #ifdef DEBUG_SHOW_CASCADES
      if (height < shadowTopHeight) {
        radiance = 1e-3 * getFadedCascadeColor(position, jitter);
      }
      #endif // DEBUG_SHOW_CASCADES

      // Energy-conserving analytical integration of scattered light
      // See 5.6.3 in https://media.contentapi.ea.com/content/dam/eacom/frostbite/files/s2016-pbs-frostbite-sky-clouds-new.pdf
      float transmittance = exp(-media.extinction * stepSize);
      float clampedExtinction = max(media.extinction, 1e-7);
      vec3 scatteringIntegral = (radiance - radiance * transmittance) / clampedExtinction;
      radianceIntegral += transmittanceIntegral * scatteringIntegral;
      transmittanceIntegral *= transmittance;

      // Aerial perspective affecting clouds
      // See 5.9.1 in https://media.contentapi.ea.com/content/dam/eacom/frostbite/files/s2016-pbs-frostbite-sky-clouds-new.pdf
      weightedDistanceSum += rayDistance * transmittanceIntegral;
      transmittanceSum += transmittanceIntegral;
    }

    if (transmittanceIntegral <= minTransmittance) {
      break; // Early termination
    }

    // Take a shorter step because we've already hit the clouds.
    stepSize *= perspectiveStepScale;
    rayDistance += stepSize;
  }

  // The final product of 5.9.1 and we'll evaluate this in aerial perspective.
  frontDepth = transmittanceSum > 0.0 ? weightedDistanceSum / transmittanceSum : -1.0;

  return vec4(radianceIntegral, remapClamped(transmittanceIntegral, 1.0, minTransmittance));
}

#ifdef SHADOW_LENGTH

float marchShadowLength(
  const vec3 rayOrigin,
  const vec3 rayDirection,
  const vec2 rayNearFar,
  const float jitter
) {
  float shadowLength = 0.0;
  float maxRayDistance = rayNearFar.y - rayNearFar.x;
  float stepSize = minShadowLengthStepSize;
  float rayDistance = stepSize * jitter;
  const float attenuationFactor = 1.0 - 5e-4;
  float attenuation = 1.0;

  // TODO: This march is closed, and sample resolution can be much lower.
  // Refining the termination by binary search will make it much more efficient.
  for (int i = 0; i < maxShadowLengthIterationCount; ++i) {
    if (rayDistance > maxRayDistance) {
      break; // Termination
    }
    vec3 position = rayDistance * rayDirection + rayOrigin;
    float opticalDepth = sampleShadowOpticalDepth(position, 0.0, 0.0, jitter);
    shadowLength += (1.0 - exp(-opticalDepth)) * stepSize * attenuation;
    stepSize *= perspectiveStepScale;
    rayDistance += stepSize;
  }
  return shadowLength;
}

#endif // SHADOW_LENGTH

#ifdef HAZE

vec4 approximateHaze(
  const vec3 rayOrigin,
  const vec3 rayDirection,
  const float maxRayDistance,
  const float cosTheta,
  const float shadowLength
) {
  float modulation = remapClamped(coverage, 0.2, 0.4);
  if (cameraHeight * modulation < 0.0) {
    return vec4(0.0);
  }
  float density = modulation * hazeDensityScale * exp(-cameraHeight * hazeExponent);
  if (density < 1e-7) {
    return vec4(0.0); // Prevent artifact in views from space
  }

  // Blend two normals by the difference in angle so that normal near the
  // ground becomes that of the origin, and in the sky that of the horizon.
  vec3 normalAtOrigin = normalize(rayOrigin);
  vec3 normalAtHorizon = (rayOrigin - dot(rayOrigin, rayDirection) * rayDirection) / bottomRadius;
  float alpha = remapClamped(dot(normalAtOrigin, normalAtHorizon), 0.9, 1.0);
  vec3 normal = mix(normalAtOrigin, normalAtHorizon, alpha);

  // Analytical optical depth where density exponentially decreases with height.
  // Based on: https://iquilezles.org/articles/fog/
  float angle = max(dot(normal, rayDirection), 1e-5);
  float exponent = angle * hazeExponent;
  float linearTerm = density / hazeExponent / angle;

  // Derive the optical depths separately for with and without shadow length.
  float expTerm = 1.0 - exp(-maxRayDistance * exponent);
  float shadowExpTerm = 1.0 - exp(-min(maxRayDistance, shadowLength) * exponent);
  float opticalDepth = expTerm * linearTerm;
  float shadowOpticalDepth = max((expTerm - shadowExpTerm) * linearTerm, 0.0);
  float transmittance = saturate(1.0 - exp(-opticalDepth));
  float shadowTransmittance = saturate(1.0 - exp(-shadowOpticalDepth));

  vec3 skyIrradiance = vGroundIrradiance.sky;
  vec3 sunIrradiance = vGroundIrradiance.sun;
  vec3 inscatter = sunIrradiance * phaseFunction(cosTheta) * shadowTransmittance;
  inscatter += skyIrradiance * RECIPROCAL_PI4 * skyLightScale * transmittance;
  inscatter *= hazeScatteringCoefficient / (hazeAbsorptionCoefficient + hazeScatteringCoefficient);
  return vec4(inscatter, transmittance);
}

#endif // HAZE

void applyAerialPerspective(
  const vec3 cameraPosition,
  const vec3 frontPosition,
  const float shadowLength,
  inout vec4 color
) {
  vec3 transmittance;
  vec3 inscatter = GetSkyRadianceToPoint(
    cameraPosition * METER_TO_LENGTH_UNIT,
    frontPosition * METER_TO_LENGTH_UNIT,
    shadowLength * METER_TO_LENGTH_UNIT,
    sunDirection,
    transmittance
  );
  color.rgb = color.rgb * transmittance + inscatter * color.a;
}

bool rayIntersectsGround(const vec3 cameraPosition, const vec3 rayDirection) {
  float r = length(cameraPosition);
  float mu = dot(cameraPosition, rayDirection) / r;
  return mu < 0.0 && r * r * (mu * mu - 1.0) + bottomRadius * bottomRadius >= 0.0;
}

struct IntersectionResult {
  bool ground;
  vec4 first;
  vec4 second;
};

IntersectionResult getIntersections(const vec3 cameraPosition, const vec3 rayDirection) {
  IntersectionResult intersections;
  intersections.ground = rayIntersectsGround(cameraPosition, rayDirection);
  raySphereIntersections(
    cameraPosition,
    rayDirection,
    bottomRadius + vec4(0.0, minHeight, maxHeight, shadowTopHeight),
    intersections.first,
    intersections.second
  );
  return intersections;
}

vec2 getRayNearFar(const IntersectionResult intersections) {
  vec2 nearFar;
  if (cameraHeight < minHeight) {
    // View below the clouds
    if (intersections.ground) {
      nearFar = vec2(-1.0); // No clouds to the ground
    } else {
      nearFar = vec2(intersections.second.y, intersections.second.z);
      nearFar.y = min(nearFar.y, maxRayDistance);
    }
  } else if (cameraHeight < maxHeight) {
    // View inside the total cloud layer
    if (intersections.ground) {
      nearFar = vec2(cameraNear, intersections.first.y);
    } else {
      nearFar = vec2(cameraNear, intersections.second.z);
    }
  } else {
    // View above the clouds
    nearFar = vec2(intersections.first.z, intersections.second.z);
    if (intersections.ground) {
      // Clamp the ray at the min height.
      nearFar.y = intersections.first.y;
    }
  }
  return nearFar;
}

#ifdef SHADOW_LENGTH
vec2 getShadowRayNearFar(const IntersectionResult intersections) {
  vec2 nearFar;
  if (cameraHeight < shadowTopHeight) {
    if (intersections.ground) {
      nearFar = vec2(cameraNear, intersections.first.x);
    } else {
      nearFar = vec2(cameraNear, intersections.second.w);
    }
  } else {
    nearFar = vec2(intersections.first.w, intersections.second.w);
    if (intersections.ground) {
      // Clamp the ray at the ground.
      nearFar.y = intersections.first.x;
    }
  }
  nearFar.y = min(nearFar.y, maxShadowLengthRayDistance);
  return nearFar;
}
#endif // SHADOW_LENGTH

#ifdef HAZE
vec2 getHazeRayNearFar(const IntersectionResult intersections) {
  vec2 nearFar;
  if (cameraHeight < maxHeight) {
    if (intersections.ground) {
      nearFar = vec2(cameraNear, intersections.first.x);
    } else {
      nearFar = vec2(cameraNear, intersections.second.z);
    }
  } else {
    nearFar = vec2(cameraNear, intersections.second.z);
    if (intersections.ground) {
      // Clamp the ray at the ground.
      nearFar.y = intersections.first.x;
    }
  }
  return nearFar;
}
#endif // HAZE

float getRayDistanceToScene(const vec3 rayDirection, out float viewZ) {
  float depth = readDepthValue(depthBuffer, vUv * targetUvScale + temporalJitter);
  if (depth < 1.0 - 1e-7) {
    depth = reverseLogDepth(depth, cameraNear, cameraFar);
    viewZ = getViewZ(depth);
    return -viewZ / dot(rayDirection, vCameraDirection);
  }
  viewZ = 0.0;
  return 0.0;
}

void main() {
  #ifdef DEBUG_SHOW_SHADOW_MAP
  outputColor = getCascadedShadowMaps(vUv);
  outputDepthVelocity = vec3(0.0);
  #ifdef SHADOW_LENGTH
  outputShadowLength = 0.0;
  #endif // SHADOW_LENGTH
  return;
  #endif // DEBUG_SHOW_SHADOW_MAP

  vec3 cameraPosition = vCameraPosition + altitudeCorrection;
  vec3 rayDirection = normalize(vRayDirection);
  float cosTheta = dot(sunDirection, rayDirection);

  IntersectionResult intersections = getIntersections(cameraPosition, rayDirection);
  vec2 rayNearFar = getRayNearFar(intersections);
  #ifdef SHADOW_LENGTH
  vec2 shadowRayNearFar = getShadowRayNearFar(intersections);
  #endif // SHADOW_LENGTH
  #ifdef HAZE
  vec2 hazeRayNearFar = getHazeRayNearFar(intersections);
  #endif // HAZE

  float sceneViewZ;
  float rayDistanceToScene = getRayDistanceToScene(rayDirection, sceneViewZ);
  if (rayDistanceToScene > 0.0) {
    rayNearFar.y = min(rayNearFar.y, rayDistanceToScene);
    #ifdef SHADOW_LENGTH
    shadowRayNearFar.y = min(shadowRayNearFar.y, rayDistanceToScene);
    #endif // SHADOW_LENGTH
    #ifdef HAZE
    hazeRayNearFar.y = min(hazeRayNearFar.y, rayDistanceToScene);
    #endif // HAZE
  }

  bool intersectsGround = any(lessThan(rayNearFar, vec2(0.0)));
  bool intersectsScene = rayNearFar.y < rayNearFar.x;

  float stbn = getSTBN();

  vec4 color = vec4(0.0);
  float frontDepth = rayNearFar.y;
  vec3 depthVelocity = vec3(0.0);
  float shadowLength = 0.0;
  bool hitClouds = false;

  if (!intersectsGround && !intersectsScene) {
    vec3 rayOrigin = rayNearFar.x * rayDirection + cameraPosition;

    vec2 globeUv = getGlobeUv(rayOrigin);
    #ifdef DEBUG_SHOW_UV
    outputColor = vec4(vec3(checker(globeUv, localWeatherRepeat + localWeatherOffset)), 1.0);
    outputDepthVelocity = vec3(0.0);
    #ifdef SHADOW_LENGTH
    outputShadowLength = 0.0;
    #endif // SHADOW_LENGTH
    return;
    #endif // DEBUG_SHOW_UV

    float mipLevel = getMipLevel(globeUv * localWeatherRepeat) * mipLevelScale;
    mipLevel = mix(0.0, mipLevel, min(1.0, 0.2 * cameraHeight / maxHeight));

    float marchedFrontDepth;
    ivec3 sampleCount = ivec3(0);
    color = marchClouds(
      rayOrigin,
      rayDirection,
      rayNearFar,
      cosTheta,
      stbn,
      pow(2.0, mipLevel),
      marchedFrontDepth,
      sampleCount
    );

    #ifdef DEBUG_SHOW_SAMPLE_COUNT
    outputColor = vec4(vec3(sampleCount) / vec3(500.0, 5.0, 5.0), 1.0);
    outputDepthVelocity = vec3(0.0);
    #ifdef SHADOW_LENGTH
    outputShadowLength = 0.0;
    #endif // SHADOW_LENGTH
    return;
    #endif // DEBUG_SHOW_SAMPLE_COUNT

    // Front depth will be -1.0 when no samples are accumulated.
    hitClouds = marchedFrontDepth >= 0.0;
    if (hitClouds) {
      frontDepth = rayNearFar.x + marchedFrontDepth;

      #ifdef SHADOW_LENGTH
      // Clamp the shadow length ray at the clouds.
      shadowRayNearFar.y = mix(
        shadowRayNearFar.y,
        min(frontDepth, shadowRayNearFar.y),
        color.a // Interpolate by the alpha for smoother edges.
      );

      // Shadow length must be computed before applying aerial perspective.
      if (all(greaterThanEqual(shadowRayNearFar, vec2(0.0)))) {
        shadowLength = marchShadowLength(
          shadowRayNearFar.x * rayDirection + cameraPosition,
          rayDirection,
          shadowRayNearFar,
          stbn
        );
      }
      #endif // SHADOW_LENGTH

      #ifdef HAZE
      // Clamp the haze ray at the clouds.
      hazeRayNearFar.y = mix(
        hazeRayNearFar.y,
        min(frontDepth, hazeRayNearFar.y),
        color.a // Interpolate by the alpha for smoother edges.
      );
      #endif // HAZE

      // Apply aerial perspective.
      vec3 frontPosition = cameraPosition + frontDepth * rayDirection;
      applyAerialPerspective(cameraPosition, frontPosition, shadowLength, color);

      // Velocity for temporal resolution.
      vec3 frontPositionWorld = ecefToWorld(frontPosition);
      vec4 prevClip = reprojectionMatrix * vec4(frontPositionWorld, 1.0);
      prevClip /= prevClip.w;
      vec2 prevUv = prevClip.xy * 0.5 + 0.5;
      vec2 velocity = vUv - prevUv;
      depthVelocity = vec3(frontDepth, velocity);
    }
  }

  if (!hitClouds) {
    #ifdef SHADOW_LENGTH
    if (all(greaterThanEqual(shadowRayNearFar, vec2(0.0)))) {
      shadowLength = marchShadowLength(
        shadowRayNearFar.x * rayDirection + cameraPosition,
        rayDirection,
        shadowRayNearFar,
        stbn
      );
    }
    #endif // SHADOW_LENGTH

    // Velocity for temporal resolution. Here reproject in the view space for
    // greatly reducing the precision errors.
    frontDepth = sceneViewZ < 0.0 ? -sceneViewZ : cameraFar;
    vec3 frontView = vViewPosition * frontDepth;
    vec4 prevClip = viewReprojectionMatrix * vec4(frontView, 1.0);
    prevClip /= prevClip.w;
    vec2 prevUv = prevClip.xy * 0.5 + 0.5;
    vec2 velocity = vUv - prevUv;
    depthVelocity = vec3(frontDepth, velocity);
  }

  #ifdef DEBUG_SHOW_FRONT_DEPTH
  outputColor = vec4(turbo(frontDepth / maxRayDistance), 1.0);
  outputDepthVelocity = vec3(0.0);
  #ifdef SHADOW_LENGTH
  outputShadowLength = 0.0;
  #endif // SHADOW_LENGTH
  return;
  #endif // DEBUG_SHOW_FRONT_DEPTH

  #ifdef HAZE
  vec4 haze = approximateHaze(
    cameraNear * rayDirection + cameraPosition,
    rayDirection,
    hazeRayNearFar.y - hazeRayNearFar.x,
    cosTheta,
    shadowLength
  );
  color.rgb = mix(color.rgb, haze.rgb, haze.a);
  color.a = color.a * (1.0 - haze.a) + haze.a;
  #endif // HAZE

  outputColor = color;
  outputDepthVelocity = depthVelocity;
  #ifdef SHADOW_LENGTH
  outputShadowLength = shadowLength * METER_TO_LENGTH_UNIT;
  #endif // SHADOW_LENGTH
}
`,Nf=`float getSTBN() {
  ivec3 size = textureSize(stbnTexture, 0);
  vec3 scale = 1.0 / vec3(size);
  return texture(stbnTexture, vec3(gl_FragCoord.xy, float(frame % size.z)) * scale).r;
}

// Straightforward spherical mapping
vec2 getSphericalUv(const vec3 position) {
  vec2 st = normalize(position.yx);
  float phi = atan(st.x, st.y);
  float theta = asin(normalize(position).z);
  return vec2(phi * RECIPROCAL_PI2 + 0.5, theta * RECIPROCAL_PI + 0.5);
}

vec2 getCubeSphereUv(const vec3 position) {
  // Cube-sphere relaxation by: http://mathproofs.blogspot.com/2005/07/mapping-cube-to-sphere.html
  // TODO: Tile and fix seams.
  // Possible improvements:
  // https://iquilezles.org/articles/texturerepetition/
  // https://gamedev.stackexchange.com/questions/184388/fragment-shader-map-dot-texture-repeatedly-over-the-sphere
  // https://github.com/mmikk/hextile-demo

  vec3 n = normalize(position);
  vec3 f = abs(n);
  vec3 c = n / max(f.x, max(f.y, f.z));
  vec2 m;
  if (all(greaterThan(f.yy, f.xz))) {
    m = c.y > 0.0 ? vec2(-n.x, n.z) : n.xz;
  } else if (all(greaterThan(f.xx, f.yz))) {
    m = c.x > 0.0 ? n.yz : vec2(-n.y, n.z);
  } else {
    m = c.z > 0.0 ? n.xy : vec2(n.x, -n.y);
  }

  vec2 m2 = m * m;
  float q = dot(m2.xy, vec2(-2.0, 2.0)) - 3.0;
  float q2 = q * q;
  vec2 uv;
  uv.x = sqrt(1.5 + m2.x - m2.y - 0.5 * sqrt(-24.0 * m2.x + q2)) * (m.x > 0.0 ? 1.0 : -1.0);
  uv.y = sqrt(6.0 / (3.0 - uv.x * uv.x)) * m.y;
  return uv * 0.5 + 0.5;
}

vec2 getGlobeUv(const vec3 position) {
  return getCubeSphereUv(position);
}

float getMipLevel(const vec2 uv) {
  const float mipLevelScale = 0.1;
  vec2 coord = uv * resolution;
  vec2 ddx = dFdx(coord);
  vec2 ddy = dFdy(coord);
  float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy)) * mipLevelScale;
  return max(0.0, 0.5 * log2(max(1.0, deltaMaxSqr)));
}

bool insideLayerIntervals(const float height) {
  bvec3 gt = greaterThan(vec3(height), minIntervalHeights);
  bvec3 lt = lessThan(vec3(height), maxIntervalHeights);
  return any(bvec3(gt.x && lt.x, gt.y && lt.y, gt.z && lt.z));
}

struct WeatherSample {
  vec4 heightFraction; // Normalized height of each layer
  vec4 density;
};

vec4 shapeAlteringFunction(const vec4 heightFraction, const vec4 bias) {
  // Apply a semi-circle transform to round the clouds towards the top.
  vec4 biased = pow(heightFraction, bias);
  vec4 x = clamp(biased * 2.0 - 1.0, -1.0, 1.0);
  return 1.0 - x * x;
}

WeatherSample sampleWeather(const vec2 uv, const float height, const float mipLevel) {
  WeatherSample weather;
  weather.heightFraction = remapClamped(vec4(height), minLayerHeights, maxLayerHeights);

  vec4 localWeather = pow(
    textureLod(
      localWeatherTexture,
      uv * localWeatherRepeat + localWeatherOffset,
      mipLevel
    ).LOCAL_WEATHER_CHANNELS,
    weatherExponents
  );
  #ifdef SHADOW
  localWeather *= shadowLayerMask;
  #endif // SHADOW

  vec4 heightScale = shapeAlteringFunction(weather.heightFraction, shapeAlteringBiases);

  // Modulation to control weather by coverage parameter.
  // Reference: https://github.com/Prograda/Skybolt/blob/master/Assets/Core/Shaders/Clouds.h#L63
  vec4 factor = 1.0 - coverage * heightScale;
  weather.density = remapClamped(
    mix(localWeather, vec4(1.0), coverageFilterWidths),
    factor,
    factor + coverageFilterWidths
  );

  return weather;
}

vec4 getLayerDensity(const vec4 heightFraction) {
  // prettier-ignore
  return densityProfile.expTerms * exp(densityProfile.exponents * heightFraction) +
    densityProfile.linearTerms * heightFraction +
    densityProfile.constantTerms;
}

struct MediaSample {
  float density;
  vec4 weight;
  float scattering;
  float extinction;
};

MediaSample sampleMedia(
  const WeatherSample weather,
  const vec3 position,
  const vec2 uv,
  const float mipLevel,
  const float jitter,
  out ivec3 sampleCount
) {
  vec4 density = weather.density;

  // TODO: Define in physical length.
  vec3 surfaceNormal = normalize(position);
  float localWeatherSpeed = length(localWeatherOffset);
  vec3 evolution = -surfaceNormal * localWeatherSpeed * 2e4;

  vec3 turbulence = vec3(0.0);
  #ifdef TURBULENCE
  vec2 turbulenceUv = uv * localWeatherRepeat * turbulenceRepeat;
  turbulence =
    turbulenceDisplacement *
    (texture(turbulenceTexture, turbulenceUv).rgb * 2.0 - 1.0) *
    dot(density, remapClamped(weather.heightFraction, vec4(0.3), vec4(0.0)));
  #endif // TURBULENCE

  vec3 shapePosition = (position + evolution + turbulence) * shapeRepeat + shapeOffset;
  float shape = texture(shapeTexture, shapePosition).r;
  density = remapClamped(density, vec4(1.0 - shape) * shapeAmounts, vec4(1.0));

  #ifdef DEBUG_SHOW_SAMPLE_COUNT
  ++sampleCount.y;
  #endif // DEBUG_SHOW_SAMPLE_COUNT

  #ifdef SHAPE_DETAIL
  if (mipLevel * 0.5 + (jitter - 0.5) * 0.5 < 0.5) {
    vec3 detailPosition = (position + turbulence) * shapeDetailRepeat + shapeDetailOffset;
    float detail = texture(shapeDetailTexture, detailPosition).r;
    // Fluffy at the top and whippy at the bottom.
    vec4 modifier = mix(
      vec4(pow(detail, 6.0)),
      vec4(1.0 - detail),
      remapClamped(weather.heightFraction, vec4(0.2), vec4(0.4))
    );
    modifier = mix(vec4(0.0), modifier, shapeDetailAmounts);
    density = remapClamped(density * 2.0, vec4(modifier * 0.5), vec4(1.0));

    #ifdef DEBUG_SHOW_SAMPLE_COUNT
    ++sampleCount.z;
    #endif // DEBUG_SHOW_SAMPLE_COUNT
  }
  #endif // SHAPE_DETAIL

  // Apply the density profiles.
  density = saturate(density * densityScales * getLayerDensity(weather.heightFraction));

  MediaSample media;
  float densitySum = density.x + density.y + density.z + density.w;
  media.weight = density / densitySum;
  media.scattering = densitySum * scatteringCoefficient;
  media.extinction = densitySum * absorptionCoefficient + media.scattering;
  return media;
}

MediaSample sampleMedia(
  const WeatherSample weather,
  const vec3 position,
  const vec2 uv,
  const float mipLevel,
  const float jitter
) {
  ivec3 sampleCount;
  return sampleMedia(weather, position, uv, mipLevel, jitter, sampleCount);
}
`,k2=`precision highp float;
precision highp sampler3D;

#include "atmosphere/bruneton/definitions"

uniform AtmosphereParameters ATMOSPHERE;
uniform vec3 SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
uniform vec3 SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;

uniform sampler2D transmittance_texture;
uniform sampler3D scattering_texture;
uniform sampler2D irradiance_texture;
uniform sampler3D single_mie_scattering_texture;
uniform sampler3D higher_order_scattering_texture;

#include "atmosphere/bruneton/common"
#include "atmosphere/bruneton/runtime"

#include "types"

uniform mat4 inverseProjectionMatrix;
uniform mat4 inverseViewMatrix;
uniform vec3 cameraPosition;
uniform mat4 worldToECEFMatrix;
uniform vec3 altitudeCorrection;

// Atmosphere
uniform float bottomRadius;
uniform vec3 sunDirection;

// Cloud layers
uniform float minHeight;
uniform float maxHeight;

layout(location = 0) in vec3 position;

out vec2 vUv;
out vec3 vCameraPosition;
out vec3 vCameraDirection; // Direction to the center of screen
out vec3 vRayDirection; // Direction to the texel
out vec3 vViewPosition;

out GroundIrradiance vGroundIrradiance;
out CloudsIrradiance vCloudsIrradiance;

void sampleSunSkyIrradiance(const vec3 positionECEF) {
  vGroundIrradiance.sun = GetSunAndSkyScalarIrradiance(
    positionECEF * METER_TO_LENGTH_UNIT,
    sunDirection,
    vGroundIrradiance.sky
  );

  vec3 surfaceNormal = normalize(positionECEF);
  vec2 radii = (bottomRadius + vec2(minHeight, maxHeight)) * METER_TO_LENGTH_UNIT;
  vCloudsIrradiance.minSun = GetSunAndSkyScalarIrradiance(
    surfaceNormal * radii.x,
    sunDirection,
    vCloudsIrradiance.minSky
  );
  vCloudsIrradiance.maxSun = GetSunAndSkyScalarIrradiance(
    surfaceNormal * radii.y,
    sunDirection,
    vCloudsIrradiance.maxSky
  );
}

void main() {
  vUv = position.xy * 0.5 + 0.5;

  vec3 viewPosition = (inverseProjectionMatrix * vec4(position, 1.0)).xyz;
  vec3 worldDirection = (inverseViewMatrix * vec4(viewPosition.xyz, 0.0)).xyz;
  vec3 cameraDirection = normalize((inverseViewMatrix * vec4(0.0, 0.0, -1.0, 0.0)).xyz);
  vCameraPosition = (worldToECEFMatrix * vec4(cameraPosition, 1.0)).xyz;
  vCameraDirection = (worldToECEFMatrix * vec4(cameraDirection, 0.0)).xyz;
  vRayDirection = (worldToECEFMatrix * vec4(worldDirection, 0.0)).xyz;
  vViewPosition = viewPosition;

  sampleSunSkyIrradiance(vCameraPosition + altitudeCorrection);

  gl_Position = vec4(position.xy, 1.0, 1.0);
}
`,Uf=`uniform vec2 resolution;
uniform int frame;
uniform sampler3D stbnTexture;

// Atmosphere
uniform float bottomRadius;
uniform mat4 worldToECEFMatrix;
uniform mat4 ecefToWorldMatrix;
uniform vec3 altitudeCorrection;
uniform vec3 sunDirection;

// Participating medium
uniform float scatteringCoefficient;
uniform float absorptionCoefficient;

// Primary raymarch
uniform float minDensity;
uniform float minExtinction;
uniform float minTransmittance;

// Shape and weather
uniform sampler2D localWeatherTexture;
uniform vec2 localWeatherRepeat;
uniform vec2 localWeatherOffset;
uniform float coverage;
uniform sampler3D shapeTexture;
uniform vec3 shapeRepeat;
uniform vec3 shapeOffset;

#ifdef SHAPE_DETAIL
uniform sampler3D shapeDetailTexture;
uniform vec3 shapeDetailRepeat;
uniform vec3 shapeDetailOffset;
#endif // SHAPE_DETAIL

#ifdef TURBULENCE
uniform sampler2D turbulenceTexture;
uniform vec2 turbulenceRepeat;
uniform float turbulenceDisplacement;
#endif // TURBULENCE

// Haze
#ifdef HAZE
uniform float hazeDensityScale;
uniform float hazeExponent;
uniform float hazeScatteringCoefficient;
uniform float hazeAbsorptionCoefficient;
#endif // HAZE

// Cloud layers
uniform vec4 minLayerHeights;
uniform vec4 maxLayerHeights;
uniform vec3 minIntervalHeights;
uniform vec3 maxIntervalHeights;
uniform vec4 densityScales;
uniform vec4 shapeAmounts;
uniform vec4 shapeDetailAmounts;
uniform vec4 weatherExponents;
uniform vec4 shapeAlteringBiases;
uniform vec4 coverageFilterWidths;
uniform float minHeight;
uniform float maxHeight;
uniform float shadowTopHeight;
uniform float shadowBottomHeight;
uniform vec4 shadowLayerMask;
uniform CloudDensityProfile densityProfile;
`,Al=`struct GroundIrradiance {
  vec3 sun;
  vec3 sky;
};

struct CloudsIrradiance {
  vec3 minSun;
  vec3 minSky;
  vec3 maxSun;
  vec3 maxSky;
};

struct CloudDensityProfile {
  vec4 expTerms;
  vec4 exponents;
  vec4 linearTerms;
  vec4 constantTerms;
};
`;var V2=Object.defineProperty,fn=(n,e,t,i)=>{for(var r=void 0,a=n.length-1,s;a>=0;a--)(s=n[a])&&(r=s(e,t,r)||r);return r&&V2(e,t,r),r};const W2=new F,X2=new Gl;class cn extends Ga{constructor({parameterUniforms:e,layerUniforms:t,atmosphereUniforms:i},r=ho.DEFAULT){super({name:"CloudsMaterial",glslVersion:Ui,vertexShader:Si(k2,{atmosphere:{bruneton:{common:Yh,definitions:qh,runtime:Xh}},types:Al}),fragmentShader:za(Si(G2,{core:{depth:mf,math:Kl,turbo:vf,generators:rE,raySphereIntersection:oo,cascadedShadowMaps:pf,interleavedGradientNoise:gf,vogelDisk:_f},atmosphere:{bruneton:{common:Yh,definitions:qh,runtime:Xh}},types:Al,parameters:Uf,clouds:Nf})),uniforms:{...e,...t,...i,depthBuffer:new U(null),viewMatrix:new U(new He),inverseProjectionMatrix:new U(new He),inverseViewMatrix:new U(new He),reprojectionMatrix:new U(new He),viewReprojectionMatrix:new U(new He),resolution:new U(new Pe),cameraNear:new U(0),cameraFar:new U(0),cameraHeight:new U(0),frame:new U(0),temporalJitter:new U(new Pe),targetUvScale:new U(new Pe),mipLevelScale:new U(1),stbnTexture:new U(null),skyLightScale:new U(1),groundBounceScale:new U(1),powderScale:new U(.8),powderExponent:new U(150),maxIterationCount:new U(Ze.clouds.maxIterationCount),minStepSize:new U(Ze.clouds.minStepSize),maxStepSize:new U(Ze.clouds.maxStepSize),maxRayDistance:new U(Ze.clouds.maxRayDistance),perspectiveStepScale:new U(Ze.clouds.perspectiveStepScale),minDensity:new U(Ze.clouds.minDensity),minExtinction:new U(Ze.clouds.minExtinction),minTransmittance:new U(Ze.clouds.minTransmittance),maxIterationCountToSun:new U(Ze.clouds.maxIterationCountToSun),maxIterationCountToGround:new U(Ze.clouds.maxIterationCountToGround),minSecondaryStepSize:new U(Ze.clouds.minSecondaryStepSize),secondaryStepScale:new U(Ze.clouds.secondaryStepScale),shadowBuffer:new U(null),shadowTexelSize:new U(new Pe),shadowIntervals:new U(Array.from({length:4},()=>new Pe)),shadowMatrices:new U(Array.from({length:4},()=>new He)),shadowFar:new U(0),maxShadowFilterRadius:new U(6),shadowLayerMask:new U(new ht().setScalar(1)),maxShadowLengthIterationCount:new U(Ze.clouds.maxShadowLengthIterationCount),minShadowLengthStepSize:new U(Ze.clouds.minShadowLengthStepSize),maxShadowLengthRayDistance:new U(Ze.clouds.maxShadowLengthRayDistance),hazeDensityScale:new U(3e-5),hazeExponent:new U(.001),hazeScatteringCoefficient:new U(.9),hazeAbsorptionCoefficient:new U(.5)}},r),this.temporalUpscale=!0,this.depthPacking=0,this.localWeatherChannels="rgba",this.shapeDetail=Ze.shapeDetail,this.turbulence=Ze.turbulence,this.shadowLength=Ze.lightShafts,this.haze=Ze.haze,this.multiScatteringOctaves=Ze.clouds.multiScatteringOctaves,this.accurateSunSkyLight=Ze.clouds.accurateSunSkyLight,this.accuratePhaseFunction=Ze.clouds.accuratePhaseFunction,this.shadowCascadeCount=Ze.shadow.cascadeCount,this.shadowSampleCount=8,this.scatterAnisotropy1=.7,this.scatterAnisotropy2=-.2,this.scatterAnisotropyMix=.5}onBeforeRender(e,t,i,r,a,s){const o=this.defines.USE_LOGARITHMIC_DEPTH_BUFFER!=null,c=e.capabilities.logarithmicDepthBuffer;c!==o&&(c?this.defines.USE_LOGARITHMIC_DEPTH_BUFFER="1":delete this.defines.USE_LOGARITHMIC_DEPTH_BUFFER);const l=this.defines.POWDER!=null,h=this.uniforms.powderScale.value>0;h!==l&&(h?this.defines.POWDER="1":delete this.defines.POWDER,this.needsUpdate=!0);const d=this.defines.GROUND_BOUNCE!=null;(this.uniforms.groundBounceScale.value>0&&this.uniforms.maxIterationCountToGround.value>0)!==d&&(h?this.defines.GROUND_BOUNCE="1":delete this.defines.GROUND_BOUNCE,this.needsUpdate=!0)}copyCameraSettings(e){e.isPerspectiveCamera===!0?this.defines.PERSPECTIVE_CAMERA!=="1"&&(this.defines.PERSPECTIVE_CAMERA="1",this.needsUpdate=!0):this.defines.PERSPECTIVE_CAMERA!=null&&(delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0);const t=this.uniforms;t.viewMatrix.value.copy(e.matrixWorldInverse),t.inverseViewMatrix.value.copy(e.matrixWorld);const i=this.previousProjectionMatrix??e.projectionMatrix,r=this.previousViewMatrix??e.matrixWorldInverse,a=t.inverseProjectionMatrix.value,s=t.inverseViewMatrix.value,o=t.reprojectionMatrix.value,c=t.viewReprojectionMatrix.value;if(this.temporalUpscale){const d=t.frame.value%16,f=t.resolution.value,g=Lf[d],S=(g.x-.5)/f.x*4,E=(g.y-.5)/f.y*4;t.temporalJitter.value.set(S,E),t.mipLevelScale.value=.25,a.copy(e.projectionMatrix),a.elements[8]+=S*2,a.elements[9]+=E*2,a.invert(),o.copy(i),o.elements[8]+=S*2,o.elements[9]+=E*2,o.multiply(r),c.copy(o).multiply(s)}else t.temporalJitter.value.setScalar(0),t.mipLevelScale.value=1,a.copy(e.projectionMatrixInverse),o.copy(i).multiply(r),c.copy(o).multiply(s);t.cameraNear.value=e.near,t.cameraFar.value=e.far;const l=e.getWorldPosition(t.cameraPosition.value),h=W2.copy(l).applyMatrix4(t.worldToECEFMatrix.value);try{t.cameraHeight.value=X2.setFromECEF(h).height}catch{}}copyReprojectionMatrix(e){this.previousProjectionMatrix??(this.previousProjectionMatrix=new He),this.previousViewMatrix??(this.previousViewMatrix=new He),this.previousProjectionMatrix.copy(e.projectionMatrix),this.previousViewMatrix.copy(e.matrixWorldInverse)}setSize(e,t,i,r){this.uniforms.resolution.value.set(e,t),i!=null&&r!=null?this.uniforms.targetUvScale.value.set(e/i,t/r):this.uniforms.targetUvScale.value.setScalar(1),this.previousProjectionMatrix=void 0,this.previousViewMatrix=void 0}setShadowSize(e,t){this.uniforms.shadowTexelSize.value.set(1/e,1/t)}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(e){this.uniforms.depthBuffer.value=e}}fn([nr("DEPTH_PACKING")],cn.prototype,"depthPacking");fn([df("LOCAL_WEATHER_CHANNELS",{validate:n=>/^[rgba]{4}$/.test(n)})],cn.prototype,"localWeatherChannels");fn([dt("SHAPE_DETAIL")],cn.prototype,"shapeDetail");fn([dt("TURBULENCE")],cn.prototype,"turbulence");fn([dt("SHADOW_LENGTH")],cn.prototype,"shadowLength");fn([dt("HAZE")],cn.prototype,"haze");fn([nr("MULTI_SCATTERING_OCTAVES",{min:1,max:12})],cn.prototype,"multiScatteringOctaves");fn([dt("ACCURATE_SUN_SKY_LIGHT")],cn.prototype,"accurateSunSkyLight");fn([dt("ACCURATE_PHASE_FUNCTION")],cn.prototype,"accuratePhaseFunction");fn([nr("SHADOW_CASCADE_COUNT",{min:1,max:4})],cn.prototype,"shadowCascadeCount");fn([nr("SHADOW_SAMPLE_COUNT",{min:1,max:16})],cn.prototype,"shadowSampleCount");fn([jl("SCATTER_ANISOTROPY_1")],cn.prototype,"scatterAnisotropy1");fn([jl("SCATTER_ANISOTROPY_2")],cn.prototype,"scatterAnisotropy2");fn([jl("SCATTER_ANISOTROPY_MIX")],cn.prototype,"scatterAnisotropyMix");const Y2=`// Taken from https://gist.github.com/TheRealMJP/c83b8c0f46b63f3a88a5986f4fa982b1
// TODO: Use 5-taps version: https://www.shadertoy.com/view/MtVGWz
// Or even 4 taps (requires preprocessing in the input buffer):
// https://www.shadertoy.com/view/4tyGDD

/**
 * MIT License
 *
 * Copyright (c) 2019 MJP
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

vec4 textureCatmullRom(sampler2D tex, vec2 uv) {
  vec2 texSize = vec2(textureSize(tex, 0));

  // We're going to sample a a 4x4 grid of texels surrounding the target UV
  // coordinate. We'll do this by rounding down the sample location to get the
  // exact center of our "starting" texel. The starting texel will be at
  // location [1, 1] in the grid, where [0, 0] is the top left corner.
  vec2 samplePos = uv * texSize;
  vec2 texPos1 = floor(samplePos - 0.5) + 0.5;

  // Compute the fractional offset from our starting texel to our original
  // sample location, which we'll feed into the Catmull-Rom spline function to
  // get our filter weights.
  vec2 f = samplePos - texPos1;

  // Compute the Catmull-Rom weights using the fractional offset that we
  // calculated earlier. These equations are pre-expanded based on our knowledge
  // of where the texels will be located, which lets us avoid having to evaluate
  // a piece-wise function.
  vec2 w0 = f * (-0.5 + f * (1.0 - 0.5 * f));
  vec2 w1 = 1.0 + f * f * (-2.5 + 1.5 * f);
  vec2 w2 = f * (0.5 + f * (2.0 - 1.5 * f));
  vec2 w3 = f * f * (-0.5 + 0.5 * f);

  // Work out weighting factors and sampling offsets that will let us use
  // bilinear filtering to simultaneously evaluate the middle 2 samples from the
  // 4x4 grid.
  vec2 w12 = w1 + w2;
  vec2 offset12 = w2 / (w1 + w2);

  // Compute the final UV coordinates we'll use for sampling the texture
  vec2 texPos0 = texPos1 - 1.0;
  vec2 texPos3 = texPos1 + 2.0;
  vec2 texPos12 = texPos1 + offset12;

  texPos0 /= texSize;
  texPos3 /= texSize;
  texPos12 /= texSize;

  vec4 result = vec4(0.0);
  result += texture(tex, vec2(texPos0.x, texPos0.y)) * w0.x * w0.y;
  result += texture(tex, vec2(texPos12.x, texPos0.y)) * w12.x * w0.y;
  result += texture(tex, vec2(texPos3.x, texPos0.y)) * w3.x * w0.y;

  result += texture(tex, vec2(texPos0.x, texPos12.y)) * w0.x * w12.y;
  result += texture(tex, vec2(texPos12.x, texPos12.y)) * w12.x * w12.y;
  result += texture(tex, vec2(texPos3.x, texPos12.y)) * w3.x * w12.y;

  result += texture(tex, vec2(texPos0.x, texPos3.y)) * w0.x * w3.y;
  result += texture(tex, vec2(texPos12.x, texPos3.y)) * w12.x * w3.y;
  result += texture(tex, vec2(texPos3.x, texPos3.y)) * w3.x * w3.y;

  return result;
}

vec4 textureCatmullRom(sampler2DArray tex, vec3 uv) {
  vec2 texSize = vec2(textureSize(tex, 0));
  vec2 samplePos = uv.xy * texSize;
  vec2 texPos1 = floor(samplePos - 0.5) + 0.5;
  vec2 f = samplePos - texPos1;
  vec2 w0 = f * (-0.5 + f * (1.0 - 0.5 * f));
  vec2 w1 = 1.0 + f * f * (-2.5 + 1.5 * f);
  vec2 w2 = f * (0.5 + f * (2.0 - 1.5 * f));
  vec2 w3 = f * f * (-0.5 + 0.5 * f);
  vec2 w12 = w1 + w2;
  vec2 offset12 = w2 / (w1 + w2);
  vec2 texPos0 = texPos1 - 1.0;
  vec2 texPos3 = texPos1 + 2.0;
  vec2 texPos12 = texPos1 + offset12;
  texPos0 /= texSize;
  texPos3 /= texSize;
  texPos12 /= texSize;
  vec4 result = vec4(0.0);
  result += texture(tex, vec3(texPos0.x, texPos0.y, uv.z)) * w0.x * w0.y;
  result += texture(tex, vec3(texPos12.x, texPos0.y, uv.z)) * w12.x * w0.y;
  result += texture(tex, vec3(texPos3.x, texPos0.y, uv.z)) * w3.x * w0.y;
  result += texture(tex, vec3(texPos0.x, texPos12.y, uv.z)) * w0.x * w12.y;
  result += texture(tex, vec3(texPos12.x, texPos12.y, uv.z)) * w12.x * w12.y;
  result += texture(tex, vec3(texPos3.x, texPos12.y, uv.z)) * w3.x * w12.y;
  result += texture(tex, vec3(texPos0.x, texPos3.y, uv.z)) * w0.x * w3.y;
  result += texture(tex, vec3(texPos12.x, texPos3.y, uv.z)) * w12.x * w3.y;
  result += texture(tex, vec3(texPos3.x, texPos3.y, uv.z)) * w3.x * w3.y;
  return result;
}
`,q2=`precision highp float;
precision highp sampler2DArray;

#include "core/turbo"
#include "catmullRomSampling"
#include "varianceClipping"

uniform sampler2D colorBuffer;
uniform sampler2D depthVelocityBuffer;
uniform sampler2D colorHistoryBuffer;

#ifdef SHADOW_LENGTH
uniform sampler2D shadowLengthBuffer;
uniform sampler2D shadowLengthHistoryBuffer;
#endif // SHADOW_LENGTH

uniform vec2 texelSize;
uniform int frame;
uniform float varianceGamma;
uniform float temporalAlpha;
uniform vec2 jitterOffset;

in vec2 vUv;

layout(location = 0) out vec4 outputColor;
#ifdef SHADOW_LENGTH
layout(location = 1) out float outputShadowLength;
#endif // SHADOW_LENGTH

const ivec2 neighborOffsets[9] = ivec2[9](
  ivec2(-1, -1),
  ivec2(-1, 0),
  ivec2(-1, 1),
  ivec2(0, -1),
  ivec2(0, 0),
  ivec2(0, 1),
  ivec2(1, -1),
  ivec2(1, 0),
  ivec2(1, 1)
);

const ivec4[4] bayerIndices = ivec4[4](
  ivec4(0, 12, 3, 15),
  ivec4(8, 4, 11, 7),
  ivec4(2, 14, 1, 13),
  ivec4(10, 6, 9, 5)
);

vec4 getClosestFragment(const ivec2 coord) {
  vec4 result = vec4(1e7, 0.0, 0.0, 0.0);
  vec4 neighbor;
  #pragma unroll_loop_start
  for (int i = 0; i < 9; ++i) {
    neighbor = texelFetchOffset(depthVelocityBuffer, coord, 0, neighborOffsets[i]);
    if (neighbor.r < result.r) {
      result = neighbor;
    }
  }
  #pragma unroll_loop_end
  return result;
}

void temporalUpscale(
  const ivec2 coord,
  const ivec2 lowResCoord,
  const bool currentFrame,
  out vec4 outputColor,
  out float outputShadowLength
) {
  vec4 currentColor = texelFetch(colorBuffer, lowResCoord, 0);
  #ifdef SHADOW_LENGTH
  vec4 currentShadowLength = vec4(texelFetch(shadowLengthBuffer, lowResCoord, 0).rgb, 1.0);
  #endif // SHADOW_LENGTH

  if (currentFrame) {
    // Use the texel just rendered without any accumulation.
    outputColor = currentColor;
    #ifdef SHADOW_LENGTH
    outputShadowLength = currentShadowLength.r;
    #endif // SHADOW_LENGTH
    return;
  }

  vec4 depthVelocity = getClosestFragment(lowResCoord);
  vec2 velocity = depthVelocity.gb;
  vec2 prevUv = vUv - velocity;
  if (prevUv.x < 0.0 || prevUv.x > 1.0 || prevUv.y < 0.0 || prevUv.y > 1.0) {
    outputColor = currentColor;
    #ifdef SHADOW_LENGTH
    outputShadowLength = currentShadowLength.r;
    #endif // SHADOW_LENGTH
    return; // Rejection
  }

  // Variance clipping with a large variance gamma seems to work fine for
  // upsampling. This increases ghosting, of course, but it's hard to notice on
  // clouds.
  // vec4 historyColor = textureCatmullRom(colorHistoryBuffer, prevUv);
  vec4 historyColor = texture(colorHistoryBuffer, prevUv);
  vec4 clippedColor = varianceClipping(colorBuffer, vUv, currentColor, historyColor, varianceGamma);
  outputColor = clippedColor;

  #ifdef SHADOW_LENGTH
  // Sampling the shadow length history using scene depth doesn't make much
  // sense, but it's too hard to derive it properly. At least this approach
  // resolves the edges of scene objects.
  // vec4 historyShadowLength = vec4(textureCatmullRom(shadowLengthHistoryBuffer, prevUv).rgb, 1.0);
  vec4 historyShadowLength = vec4(texture(shadowLengthHistoryBuffer, prevUv).rgb, 1.0);
  vec4 clippedShadowLength = varianceClipping(
    shadowLengthBuffer,
    vUv,
    currentShadowLength,
    historyShadowLength,
    varianceGamma
  );
  outputShadowLength = clippedShadowLength.r;
  #endif // SHADOW_LENGTH
}

void temporalAntialiasing(const ivec2 coord, out vec4 outputColor, out float outputShadowLength) {
  vec4 currentColor = texelFetch(colorBuffer, coord, 0);
  #ifdef SHADOW_LENGTH
  vec4 currentShadowLength = vec4(texelFetch(shadowLengthBuffer, coord, 0).rgb, 1.0);
  #endif // SHADOW_LENGTH

  vec4 depthVelocity = getClosestFragment(coord);
  vec2 velocity = depthVelocity.gb;

  vec2 prevUv = vUv - velocity;
  if (prevUv.x < 0.0 || prevUv.x > 1.0 || prevUv.y < 0.0 || prevUv.y > 1.0) {
    outputColor = currentColor;
    #ifdef SHADOW_LENGTH
    outputShadowLength = currentShadowLength.r;
    #endif // SHADOW_LENGTH
    return; // Rejection
  }

  vec4 historyColor = texture(colorHistoryBuffer, prevUv);
  vec4 clippedColor = varianceClipping(colorBuffer, coord, currentColor, historyColor);
  outputColor = mix(clippedColor, currentColor, temporalAlpha);

  #ifdef SHADOW_LENGTH
  vec4 historyShadowLength = vec4(texture(shadowLengthHistoryBuffer, prevUv).rgb, 1.0);
  vec4 clippedShadowLength = varianceClipping(
    shadowLengthBuffer,
    coord,
    currentShadowLength,
    historyShadowLength
  );
  outputShadowLength = mix(clippedShadowLength.r, currentShadowLength.r, temporalAlpha);
  #endif // SHADOW_LENGTH
}

void main() {
  ivec2 coord = ivec2(gl_FragCoord.xy);

  #if !defined(SHADOW_LENGTH)
  float outputShadowLength;
  #endif // !defined(SHADOW_LENGTH)

  #ifdef TEMPORAL_UPSCALE
  ivec2 lowResCoord = coord / 4;
  int bayerValue = bayerIndices[coord.x % 4][coord.y % 4];
  bool currentFrame = bayerValue == frame % 16;
  temporalUpscale(coord, lowResCoord, currentFrame, outputColor, outputShadowLength);
  #else // TEMPORAL_UPSCALE
  temporalAntialiasing(coord, outputColor, outputShadowLength);
  #endif // TEMPORAL_UPSCALE

  #if defined(SHADOW_LENGTH) && defined(DEBUG_SHOW_SHADOW_LENGTH)
  outputColor = vec4(turbo(outputShadowLength * 0.05), 1.0);
  #endif // defined(SHADOW_LENGTH) && defined(DEBUG_SHOW_SHADOW_LENGTH)

  #ifdef DEBUG_SHOW_VELOCITY
  outputColor.rgb = outputColor.rgb + vec3(abs(texture(depthVelocityBuffer, vUv).gb) * 10.0, 0.0);
  #endif // DEBUG_SHOW_VELOCITY
}
`,$2=`precision highp float;

layout(location = 0) in vec3 position;

out vec2 vUv;

void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 1.0, 1.0);
}
`,Of=`#ifdef VARIANCE_9_SAMPLES
#define VARIANCE_OFFSET_COUNT 8
const ivec2 varianceOffsets[8] = ivec2[8](
  ivec2(-1, -1),
  ivec2(-1, 1),
  ivec2(1, -1),
  ivec2(1, 1),
  ivec2(1, 0),
  ivec2(0, -1),
  ivec2(0, 1),
  ivec2(-1, 0)
);
#else // VARIANCE_9_SAMPLES
#define VARIANCE_OFFSET_COUNT 4
const ivec2 varianceOffsets[4] = ivec2[4](ivec2(1, 0), ivec2(0, -1), ivec2(0, 1), ivec2(-1, 0));
#endif // VARIANCE_9_SAMPLES

// Reference: https://github.com/playdeadgames/temporal
vec4 clipAABB(const vec4 current, const vec4 history, const vec4 minColor, const vec4 maxColor) {
  vec3 pClip = 0.5 * (maxColor.rgb + minColor.rgb);
  vec3 eClip = 0.5 * (maxColor.rgb - minColor.rgb) + 1e-7;
  vec4 vClip = history - vec4(pClip, current.a);
  vec3 vUnit = vClip.xyz / eClip;
  vec3 aUnit = abs(vUnit);
  float maUnit = max(aUnit.x, max(aUnit.y, aUnit.z));
  if (maUnit > 1.0) {
    return vec4(pClip, current.a) + vClip / maUnit;
  }
  return history;
}

#ifdef VARIANCE_SAMPLER_ARRAY
#define VARIANCE_SAMPLER sampler2DArray
#define VARIANCE_SAMPLER_COORD ivec3
#else // VARIANCE_SAMPLER_ARRAY
#define VARIANCE_SAMPLER sampler2D
#define VARIANCE_SAMPLER_COORD ivec2
#endif // VARIANCE_SAMPLER_ARRAY

// Variance clipping
// Reference: https://developer.download.nvidia.com/gameworks/events/GDC2016/msalvi_temporal_supersampling.pdf
vec4 varianceClipping(
  const VARIANCE_SAMPLER inputBuffer,
  const VARIANCE_SAMPLER_COORD coord,
  const vec4 current,
  const vec4 history,
  const float gamma
) {
  vec4 moment1 = current;
  vec4 moment2 = current * current;
  vec4 neighbor;
  #pragma unroll_loop_start
  for (int i = 0; i < 8; ++i) {
    #if UNROLLED_LOOP_INDEX < VARIANCE_OFFSET_COUNT
    neighbor = texelFetchOffset(inputBuffer, coord, 0, varianceOffsets[i]);
    moment1 += neighbor;
    moment2 += neighbor * neighbor;
    #endif // UNROLLED_LOOP_INDEX < VARIANCE_OFFSET_COUNT
  }
  #pragma unroll_loop_end

  const float N = float(VARIANCE_OFFSET_COUNT + 1);
  vec4 mean = moment1 / N;
  vec4 varianceGamma = sqrt(max(moment2 / N - mean * mean, 0.0)) * gamma;
  vec4 minColor = mean - varianceGamma;
  vec4 maxColor = mean + varianceGamma;
  return clipAABB(clamp(mean, minColor, maxColor), history, minColor, maxColor);
}

vec4 varianceClipping(
  const VARIANCE_SAMPLER inputBuffer,
  const VARIANCE_SAMPLER_COORD coord,
  const vec4 current,
  const vec4 history
) {
  return varianceClipping(inputBuffer, coord, current, history, 1.0);
}

vec4 varianceClipping(
  const sampler2D inputBuffer,
  const vec2 coord,
  const vec4 current,
  const vec4 history,
  const float gamma
) {
  vec4 moment1 = current;
  vec4 moment2 = current * current;
  vec4 neighbor;
  #pragma unroll_loop_start
  for (int i = 0; i < 8; ++i) {
    #if UNROLLED_LOOP_INDEX < VARIANCE_OFFSET_COUNT
    neighbor = textureOffset(inputBuffer, coord, varianceOffsets[i]);
    moment1 += neighbor;
    moment2 += neighbor * neighbor;
    #endif // UNROLLED_LOOP_INDEX < VARIANCE_OFFSET_COUNT
  }
  #pragma unroll_loop_end

  const float N = float(VARIANCE_OFFSET_COUNT + 1);
  vec4 mean = moment1 / N;
  vec4 varianceGamma = sqrt(max(moment2 / N - mean * mean, 0.0)) * gamma;
  vec4 minColor = mean - varianceGamma;
  vec4 maxColor = mean + varianceGamma;
  return clipAABB(clamp(mean, minColor, maxColor), history, minColor, maxColor);
}

vec4 varianceClipping(
  const sampler2D inputBuffer,
  const vec2 coord,
  const vec4 current,
  const vec4 history
) {
  return varianceClipping(inputBuffer, coord, current, history, 1.0);
}
`;var Z2=Object.defineProperty,Ff=(n,e,t,i)=>{for(var r=void 0,a=n.length-1,s;a>=0;a--)(s=n[a])&&(r=s(e,t,r)||r);return r&&Z2(e,t,r),r};class du extends Qs{constructor({colorBuffer:e=null,depthVelocityBuffer:t=null,shadowLengthBuffer:i=null,colorHistoryBuffer:r=null,shadowLengthHistoryBuffer:a=null}={}){super({name:"CloudsResolveMaterial",glslVersion:Ui,vertexShader:$2,fragmentShader:za(Si(q2,{core:{turbo:vf},catmullRomSampling:Y2,varianceClipping:Of})),uniforms:{colorBuffer:new U(e),depthVelocityBuffer:new U(t),shadowLengthBuffer:new U(i),colorHistoryBuffer:new U(r),shadowLengthHistoryBuffer:new U(a),texelSize:new U(new Pe),frame:new U(0),jitterOffset:new U(new Pe),varianceGamma:new U(2),temporalAlpha:new U(.1)}}),this.temporalUpscale=!0,this.shadowLength=!0}setSize(e,t){this.uniforms.texelSize.value.set(1/e,1/t)}onBeforeRender(e,t,i,r,a,s){const o=this.uniforms.frame.value%16,c=Lf[o],l=(c.x-.5)*4,h=(c.y-.5)*4;this.uniforms.jitterOffset.value.set(l,h)}}Ff([dt("TEMPORAL_UPSCALE")],du.prototype,"temporalUpscale");Ff([dt("SHADOW_LENGTH")],du.prototype,"shadowLength");class Bf extends Sn{constructor(e,t){super(e),this._mainCamera=new Oa;const{shadow:i}=t;this.shadow=i}get mainCamera(){return this._mainCamera}set mainCamera(e){this._mainCamera=e}}function ic(n,{depthVelocity:e,shadowLength:t}){const i=new Xt(1,1,{depthBuffer:!1,type:rn});i.texture.minFilter=pt,i.texture.magFilter=pt,i.texture.name=n;let r;e&&(r=i.texture.clone(),r.isRenderTargetTexture=!0,i.depthVelocity=r,i.textures.push(r));let a;return t&&(a=i.texture.clone(),a.isRenderTargetTexture=!0,a.format=hi,i.shadowLength=a,i.textures.push(a)),Object.assign(i,{depthVelocity:r??null,shadowLength:a??null})}class j2 extends Bf{constructor({parameterUniforms:e,layerUniforms:t,atmosphereUniforms:i,...r},a){super("CloudsPass",r),this.atmosphere=a,this.width=0,this.height=0,this.currentMaterial=new cn({parameterUniforms:e,layerUniforms:t,atmosphereUniforms:i},a),this.currentPass=new Qc(this.currentMaterial),this.resolveMaterial=new du,this.resolvePass=new Qc(this.resolveMaterial),this.initRenderTargets({depthVelocity:!0,shadowLength:Ze.lightShafts})}copyCameraSettings(e){this.currentMaterial.copyCameraSettings(e)}initialize(e,t,i){this.currentPass.initialize(e,t,i),this.resolvePass.initialize(e,t,i)}initRenderTargets(e){var s,o,c;(s=this.currentRenderTarget)==null||s.dispose(),(o=this.resolveRenderTarget)==null||o.dispose(),(c=this.historyRenderTarget)==null||c.dispose();const t=ic("Clouds",e),i=ic("Clouds.A",{...e,depthVelocity:!1}),r=ic("Clouds.B",{...e,depthVelocity:!1});this.currentRenderTarget=t,this.resolveRenderTarget=i,this.historyRenderTarget=r;const a=this.resolveMaterial.uniforms;a.colorBuffer.value=t.texture,a.depthVelocityBuffer.value=t.depthVelocity,a.shadowLengthBuffer.value=t.shadowLength,a.colorHistoryBuffer.value=r.texture,a.shadowLengthHistoryBuffer.value=r.shadowLength}copyShadow(){const e=this.shadow,t=this.currentMaterial.uniforms;for(let i=0;i<e.cascadeCount;++i){const r=e.cascades[i];t.shadowIntervals.value[i].copy(r.interval),t.shadowMatrices.value[i].copy(r.matrix)}t.shadowFar.value=e.far}copyReprojection(){this.currentMaterial.copyReprojectionMatrix(this.mainCamera)}swapBuffers(){const e=this.historyRenderTarget,t=this.resolveRenderTarget;this.resolveRenderTarget=e,this.historyRenderTarget=t;const i=this.resolveMaterial.uniforms;i.colorHistoryBuffer.value=t.texture,i.shadowLengthHistoryBuffer.value=t.shadowLength}update(e,t,i){this.currentMaterial.uniforms.frame.value=t,this.resolveMaterial.uniforms.frame.value=t,this.copyCameraSettings(this.mainCamera),this.copyShadow(),this.currentPass.render(e,null,this.currentRenderTarget),this.resolvePass.render(e,null,this.resolveRenderTarget),this.copyReprojection(),this.swapBuffers()}setSize(e,t){if(this.width=e,this.height=t,this.temporalUpscale){const i=Math.ceil(e/4),r=Math.ceil(t/4);this.currentRenderTarget.setSize(i,r),this.currentMaterial.setSize(i*4,r*4,e,t)}else this.currentRenderTarget.setSize(e,t),this.currentMaterial.setSize(e,t);this.resolveRenderTarget.setSize(e,t),this.resolveMaterial.setSize(e,t),this.historyRenderTarget.setSize(e,t)}setShadowSize(e,t,i){this.currentMaterial.shadowCascadeCount=i,this.currentMaterial.setShadowSize(e,t)}setDepthTexture(e,t){this.currentMaterial.depthBuffer=e,this.currentMaterial.depthPacking=t??0}get outputBuffer(){return this.historyRenderTarget.texture}get shadowBuffer(){return this.currentMaterial.uniforms.shadowBuffer.value}set shadowBuffer(e){this.currentMaterial.uniforms.shadowBuffer.value=e}get shadowLengthBuffer(){return this.historyRenderTarget.shadowLength}get temporalUpscale(){return this.currentMaterial.temporalUpscale}set temporalUpscale(e){e!==this.temporalUpscale&&(this.currentMaterial.temporalUpscale=e,this.resolveMaterial.temporalUpscale=e,this.setSize(this.width,this.height))}get lightShafts(){return this.currentMaterial.shadowLength}set lightShafts(e){e!==this.lightShafts&&(this.currentMaterial.shadowLength=e,this.resolveMaterial.shadowLength=e,this.initRenderTargets({depthVelocity:!0,shadowLength:e}),this.setSize(this.width,this.height))}}function K2(n,e){const t=n.properties.get(e.texture).__webglTexture,i=n.getContext();Pi(i instanceof WebGL2RenderingContext),n.setRenderTarget(e);const r=[];if(t!=null)for(let a=0;a<e.depth;++a)i.framebufferTextureLayer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+a,t,0,a),r.push(i.COLOR_ATTACHMENT0+a);i.drawBuffers(r)}class Jh extends Qc{render(e,t,i,r,a){const s=this.fullscreenMaterial.uniforms;t!==null&&(s==null?void 0:s[this.input])!=null&&(s[this.input].value=t.texture),K2(e,i),e.render(this.scene,this.camera)}}const J2=`precision highp float;
precision highp sampler3D;

#include <common>

#include "core/math"
#include "core/raySphereIntersection"
#include "types"
#include "parameters"
#include "structuredSampling"
#include "clouds"

uniform mat4 inverseShadowMatrices[CASCADE_COUNT];
uniform mat4 reprojectionMatrices[CASCADE_COUNT];

// Primary raymarch
uniform int maxIterationCount;
uniform float minStepSize;
uniform float maxStepSize;
uniform float opticalDepthTailScale;

in vec2 vUv;

layout(location = 0) out vec4 outputColor[CASCADE_COUNT];

// Redundant notation for prettier.
#if CASCADE_COUNT == 1
layout(location = 1) out vec3 outputDepthVelocity[CASCADE_COUNT];
#elif CASCADE_COUNT == 2
layout(location = 2) out vec3 outputDepthVelocity[CASCADE_COUNT];
#elif CASCADE_COUNT == 3
layout(location = 3) out vec3 outputDepthVelocity[CASCADE_COUNT];
#elif CASCADE_COUNT == 4
layout(location = 4) out vec3 outputDepthVelocity[CASCADE_COUNT];
#endif // CASCADE_COUNT

vec4 marchClouds(
  const vec3 rayOrigin,
  const vec3 rayDirection,
  const float maxRayDistance,
  const float jitter,
  const float mipLevel
) {
  // Setup structured volume sampling (SVS).
  // While SVS introduces spatial aliasing, it is indeed temporally stable,
  // which is important for lower-resolution shadow maps where a flickering
  // single pixel can be highly noticeable.
  vec3 normal = getStructureNormal(rayDirection, jitter);
  float rayDistance;
  float stepSize;
  intersectStructuredPlanes(
    normal,
    rayOrigin,
    rayDirection,
    clamp(maxRayDistance / float(maxIterationCount), minStepSize, maxStepSize),
    rayDistance,
    stepSize
  );

  #ifdef TEMPORAL_JITTER
  rayDistance -= stepSize * jitter;
  #endif // TEMPORAL_JITTER

  float extinctionSum = 0.0;
  float maxOpticalDepth = 0.0;
  float maxOpticalDepthTail = 0.0;
  float transmittanceIntegral = 1.0;
  float weightedDistanceSum = 0.0;
  float transmittanceSum = 0.0;

  int sampleCount = 0;
  for (int i = 0; i < maxIterationCount; ++i) {
    if (rayDistance > maxRayDistance) {
      break; // Termination
    }

    vec3 position = rayDistance * rayDirection + rayOrigin;
    float height = length(position) - bottomRadius;

    #if !defined(DEBUG_MARCH_INTERVALS)
    if (insideLayerIntervals(height)) {
      rayDistance += stepSize;
      continue;
    }
    #endif // !defined(DEBUG_MARCH_INTERVALS)

    // Sample rough weather.
    vec2 uv = getGlobeUv(position);
    WeatherSample weather = sampleWeather(uv, height, mipLevel);

    if (any(greaterThan(weather.density, vec4(minDensity)))) {
      // Sample detailed participating media.
      // Note this assumes an homogeneous medium.
      MediaSample media = sampleMedia(weather, position, uv, mipLevel, jitter);
      if (media.extinction > minExtinction) {
        extinctionSum += media.extinction;
        maxOpticalDepth += media.extinction * stepSize;
        transmittanceIntegral *= exp(-media.extinction * stepSize);
        weightedDistanceSum += rayDistance * transmittanceIntegral;
        transmittanceSum += transmittanceIntegral;
        ++sampleCount;
      }
    }

    if (transmittanceIntegral <= minTransmittance) {
      // A large amount of optical depth accumulates in the tail, beyond the
      // point of minimum transmittance. The expected optical depth seems to
      // decrease exponentially with the number of samples taken before reaching
      // the minimum transmittance.
      // See the discussion here: https://x.com/shotamatsuda/status/1886259549931520437
      maxOpticalDepthTail = min(
        opticalDepthTailScale * stepSize * exp(float(1 - sampleCount)),
        stepSize * 0.5 // Excessive optical depth only introduces aliasing.
      );
      break; // Early termination
    }
    rayDistance += stepSize;
  }

  if (sampleCount == 0) {
    return vec4(maxRayDistance, 0.0, 0.0, 0.0);
  }
  float frontDepth = min(weightedDistanceSum / transmittanceSum, maxRayDistance);
  float meanExtinction = extinctionSum / float(sampleCount);
  return vec4(frontDepth, meanExtinction, maxOpticalDepth, maxOpticalDepthTail);
}

void getRayNearFar(
  const vec3 sunPosition,
  const vec3 rayDirection,
  out float rayNear,
  out float rayFar
) {
  vec4 firstIntersections = raySphereFirstIntersection(
    sunPosition,
    rayDirection,
    vec3(0.0),
    bottomRadius + vec4(shadowTopHeight, shadowBottomHeight, 0.0, 0.0)
  );
  rayNear = max(0.0, firstIntersections.x);
  rayFar = firstIntersections.y;
  if (rayFar < 0.0) {
    rayFar = 1e6;
  }
}

void cascade(
  const int cascadeIndex,
  const float mipLevel,
  out vec4 outputColor,
  out vec3 outputDepthVelocity
) {
  vec2 clip = vUv * 2.0 - 1.0;
  vec4 point = inverseShadowMatrices[cascadeIndex] * vec4(clip.xy, -1.0, 1.0);
  point /= point.w;
  vec3 sunPosition = (worldToECEFMatrix * vec4(point.xyz, 1.0)).xyz + altitudeCorrection;

  vec3 rayDirection = normalize(-sunDirection);
  float rayNear;
  float rayFar;
  getRayNearFar(sunPosition, rayDirection, rayNear, rayFar);

  vec3 rayOrigin = rayNear * rayDirection + sunPosition;
  float stbn = getSTBN();
  vec4 color = marchClouds(rayOrigin, rayDirection, rayFar - rayNear, stbn, mipLevel);
  outputColor = color;

  // Velocity for temporal resolution.
  #ifdef TEMPORAL_PASS
  vec3 frontPosition = color.x * rayDirection + rayOrigin;
  vec3 frontPositionWorld = (ecefToWorldMatrix * vec4(frontPosition - altitudeCorrection, 1.0)).xyz;
  vec4 prevClip = reprojectionMatrices[cascadeIndex] * vec4(frontPositionWorld, 1.0);
  prevClip /= prevClip.w;
  vec2 prevUv = prevClip.xy * 0.5 + 0.5;
  vec2 velocity = (vUv - prevUv) * resolution;
  outputDepthVelocity = vec3(color.x, velocity);
  #else // TEMPORAL_PASS
  outputDepthVelocity = vec3(0.0);
  #endif // TEMPORAL_PASS
}

// TODO: Calculate from the main camera frustum perhaps?
const float mipLevels[4] = float[4](0.0, 0.5, 1.0, 2.0);

void main() {
  #pragma unroll_loop_start
  for (int i = 0; i < 4; ++i) {
    #if UNROLLED_LOOP_INDEX < CASCADE_COUNT
    cascade(UNROLLED_LOOP_INDEX, mipLevels[i], outputColor[i], outputDepthVelocity[i]);
    #endif // UNROLLED_LOOP_INDEX < CASCADE_COUNT
  }
  #pragma unroll_loop_end
}
`,Q2=`precision highp float;

layout(location = 0) in vec3 position;

out vec2 vUv;

void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 1.0, 1.0);
}
`,eT=`// Implements Structured Volume Sampling in fragment shader:
// https://github.com/huwb/volsample
// Implementation reference:
// https://www.shadertoy.com/view/ttVfDc

void getIcosahedralVertices(const vec3 direction, out vec3 v1, out vec3 v2, out vec3 v3) {
  // Normalization scalers to fit dodecahedron to unit sphere.
  const float a = 0.85065080835204; // phi / sqrt(2 + phi)
  const float b = 0.5257311121191336; // 1 / sqrt(2 + phi)

  // Derive the vertices of icosahedron where triangle intersects the direction.
  // See: https://www.ppsloan.org/publications/AmbientDice.pdf
  const float kT = 0.6180339887498948; // 1 / phi
  const float kT2 = 0.38196601125010515; // 1 / phi^2
  vec3 absD = abs(direction);
  float selector1 = dot(absD, vec3(1.0, kT2, -kT));
  float selector2 = dot(absD, vec3(-kT, 1.0, kT2));
  float selector3 = dot(absD, vec3(kT2, -kT, 1.0));
  v1 = selector1 > 0.0 ? vec3(a, b, 0.0) : vec3(-b, 0.0, a);
  v2 = selector2 > 0.0 ? vec3(0.0, a, b) : vec3(a, -b, 0.0);
  v3 = selector3 > 0.0 ? vec3(b, 0.0, a) : vec3(0.0, a, -b);
  vec3 octantSign = sign(direction);
  v1 *= octantSign;
  v2 *= octantSign;
  v3 *= octantSign;
}

void swapIfBigger(inout vec4 a, inout vec4 b) {
  if (a.w > b.w) {
    vec4 t = a;
    a = b;
    b = t;
  }
}

void sortVertices(inout vec3 a, inout vec3 b, inout vec3 c) {
  const vec3 base = vec3(0.5, 0.5, 1.0);
  vec4 aw = vec4(a, dot(a, base));
  vec4 bw = vec4(b, dot(b, base));
  vec4 cw = vec4(c, dot(c, base));
  swapIfBigger(aw, bw);
  swapIfBigger(bw, cw);
  swapIfBigger(aw, bw);
  a = aw.xyz;
  b = bw.xyz;
  c = cw.xyz;
}

vec3 getPentagonalWeights(const vec3 direction, const vec3 v1, const vec3 v2, const vec3 v3) {
  float d1 = dot(v1, direction);
  float d2 = dot(v2, direction);
  float d3 = dot(v3, direction);
  vec3 w = exp(vec3(d1, d2, d3) * 40.0);
  return w / (w.x + w.y + w.z);
}

vec3 getStructureNormal(
  const vec3 direction,
  const float jitter,
  out vec3 a,
  out vec3 b,
  out vec3 c,
  out vec3 weights
) {
  getIcosahedralVertices(direction, a, b, c);
  sortVertices(a, b, c);
  weights = getPentagonalWeights(direction, a, b, c);
  return jitter < weights.x
    ? a
    : jitter < weights.x + weights.y
      ? b
      : c;
}

vec3 getStructureNormal(const vec3 direction, const float jitter) {
  vec3 a, b, c, weights;
  return getStructureNormal(direction, jitter, a, b, c, weights);
}

// Reference: https://github.com/huwb/volsample/blob/master/src/unity/Assets/Shaders/RayMarchCore.cginc
void intersectStructuredPlanes(
  const vec3 normal,
  const vec3 rayOrigin,
  const vec3 rayDirection,
  const float samplePeriod,
  out float stepOffset,
  out float stepSize
) {
  float NoD = dot(rayDirection, normal);
  stepSize = samplePeriod / abs(NoD);

  // Skips leftover bit to get from rayOrigin to first strata plane.
  stepOffset = -mod(dot(rayOrigin, normal), samplePeriod) / NoD;

  // mod() gives different results depending on if the arg is negative or
  // positive. This line makes it consistent, and ensures the first sample is in
  // front of the viewer.
  if (stepOffset < 0.0) {
    stepOffset += stepSize;
  }
}
`;var tT=Object.defineProperty,ea=(n,e,t,i)=>{for(var r=void 0,a=n.length-1,s;a>=0;a--)(s=n[a])&&(r=s(e,t,r)||r);return r&&tT(e,t,r),r};class rr extends Qs{constructor({parameterUniforms:e,layerUniforms:t,atmosphereUniforms:i}){super({name:"ShadowMaterial",glslVersion:Ui,vertexShader:Q2,fragmentShader:za(Si(J2,{core:{math:Kl,raySphereIntersection:oo},types:Al,parameters:Uf,structuredSampling:eT,clouds:Nf})),uniforms:{...e,...t,...i,inverseShadowMatrices:new U(Array.from({length:4},()=>new He)),reprojectionMatrices:new U(Array.from({length:4},()=>new He)),resolution:new U(new Pe),frame:new U(0),stbnTexture:new U(null),maxIterationCount:new U(Ze.shadow.maxIterationCount),minStepSize:new U(Ze.shadow.minStepSize),maxStepSize:new U(Ze.shadow.maxStepSize),minDensity:new U(Ze.shadow.minDensity),minExtinction:new U(Ze.shadow.minExtinction),minTransmittance:new U(Ze.shadow.minTransmittance),opticalDepthTailScale:new U(2)},defines:{SHADOW:"1",TEMPORAL_PASS:"1",TEMPORAL_JITTER:"1"}}),this.localWeatherChannels="rgba",this.cascadeCount=Ze.shadow.cascadeCount,this.temporalPass=!0,this.temporalJitter=!0,this.shapeDetail=Ze.shapeDetail,this.turbulence=Ze.turbulence,this.cascadeCount=Ze.shadow.cascadeCount}setSize(e,t){this.uniforms.resolution.value.set(e,t)}}ea([df("LOCAL_WEATHER_CHANNELS",{validate:n=>/^[rgba]{4}$/.test(n)})],rr.prototype,"localWeatherChannels");ea([nr("CASCADE_COUNT",{min:1,max:4})],rr.prototype,"cascadeCount");ea([dt("TEMPORAL_PASS")],rr.prototype,"temporalPass");ea([dt("TEMPORAL_JITTER")],rr.prototype,"temporalJitter");ea([dt("SHAPE_DETAIL")],rr.prototype,"shapeDetail");ea([dt("TURBULENCE")],rr.prototype,"turbulence");const nT=`precision highp float;
precision highp sampler2DArray;

#define VARIANCE_9_SAMPLES 1
#define VARIANCE_SAMPLER_ARRAY 1

#include "varianceClipping"

uniform sampler2DArray inputBuffer;
uniform sampler2DArray historyBuffer;

uniform vec2 texelSize;
uniform float varianceGamma;
uniform float temporalAlpha;

in vec2 vUv;

layout(location = 0) out vec4 outputColor[CASCADE_COUNT];

const ivec2 neighborOffsets[9] = ivec2[9](
  ivec2(-1, -1),
  ivec2(-1, 0),
  ivec2(-1, 1),
  ivec2(0, -1),
  ivec2(0, 0),
  ivec2(0, 1),
  ivec2(1, -1),
  ivec2(1, 0),
  ivec2(1, 1)
);

vec4 getClosestFragment(const ivec3 coord) {
  vec4 result = vec4(1e7, 0.0, 0.0, 0.0);
  vec4 neighbor;
  #pragma unroll_loop_start
  for (int i = 0; i < 9; ++i) {
    neighbor = texelFetchOffset(
      inputBuffer,
      coord + ivec3(0, 0, CASCADE_COUNT),
      0,
      neighborOffsets[i]
    );
    if (neighbor.r < result.r) {
      result = neighbor;
    }
  }
  #pragma unroll_loop_end
  return result;
}

void cascade(const int cascadeIndex, out vec4 outputColor) {
  ivec3 coord = ivec3(gl_FragCoord.xy, cascadeIndex);
  vec4 current = texelFetch(inputBuffer, coord, 0);

  vec4 depthVelocity = getClosestFragment(coord);
  vec2 velocity = depthVelocity.gb * texelSize;
  vec2 prevUv = vUv - velocity;
  if (prevUv.x < 0.0 || prevUv.x > 1.0 || prevUv.y < 0.0 || prevUv.y > 1.0) {
    outputColor = current;
    return; // Rejection
  }

  vec4 history = texture(historyBuffer, vec3(prevUv, float(cascadeIndex)));
  vec4 clippedHistory = varianceClipping(inputBuffer, coord, current, history, varianceGamma);
  outputColor = mix(clippedHistory, current, temporalAlpha);
}

void main() {
  #pragma unroll_loop_start
  for (int i = 0; i < 4; ++i) {
    #if UNROLLED_LOOP_INDEX < CASCADE_COUNT
    cascade(UNROLLED_LOOP_INDEX, outputColor[i]);
    #endif // UNROLLED_LOOP_INDEX < CASCADE_COUNT
  }
  #pragma unroll_loop_end
}
`,iT=`precision highp float;

layout(location = 0) in vec3 position;

out vec2 vUv;

void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 1.0, 1.0);
}
`;var rT=Object.defineProperty,aT=(n,e,t,i)=>{for(var r=void 0,a=n.length-1,s;a>=0;a--)(s=n[a])&&(r=s(e,t,r)||r);return r&&rT(e,t,r),r};class Hf extends Qs{constructor({inputBuffer:e=null,historyBuffer:t=null}={}){super({name:"ShadowResolveMaterial",glslVersion:Ui,vertexShader:iT,fragmentShader:za(Si(nT,{varianceClipping:Of})),uniforms:{inputBuffer:new U(e),historyBuffer:new U(t),texelSize:new U(new Pe),varianceGamma:new U(1),temporalAlpha:new U(.01)},defines:{}}),this.cascadeCount=Ze.shadow.cascadeCount}setSize(e,t){this.uniforms.texelSize.value.set(1/e,1/t)}}aT([nr("CASCADE_COUNT",{min:1,max:4})],Hf.prototype,"cascadeCount");function rc(n){const e=new im(1,1,1,{depthBuffer:!1});return e.texture.type=rn,e.texture.minFilter=pt,e.texture.magFilter=pt,e.texture.name=n,e}class sT extends Bf{constructor({parameterUniforms:e,layerUniforms:t,atmosphereUniforms:i,...r}){super("ShadowPass",r),this.width=0,this.height=0,this.currentMaterial=new rr({parameterUniforms:e,layerUniforms:t,atmosphereUniforms:i}),this.currentPass=new Jh(this.currentMaterial),this.resolveMaterial=new Hf,this.resolvePass=new Jh(this.resolveMaterial),this.initRenderTargets()}initialize(e,t,i){this.currentPass.initialize(e,t,i),this.resolvePass.initialize(e,t,i)}initRenderTargets(){var a,s,o;(a=this.currentRenderTarget)==null||a.dispose(),(s=this.resolveRenderTarget)==null||s.dispose(),(o=this.historyRenderTarget)==null||o.dispose();const e=rc("Shadow"),t=this.temporalPass?rc("Shadow.A"):null,i=this.temporalPass?rc("Shadow.B"):null;this.currentRenderTarget=e,this.resolveRenderTarget=t,this.historyRenderTarget=i;const r=this.resolveMaterial.uniforms;r.inputBuffer.value=e.texture,r.historyBuffer.value=(i==null?void 0:i.texture)??null}copyShadow(){const e=this.shadow,t=this.currentMaterial.uniforms;for(let i=0;i<e.cascadeCount;++i){const r=e.cascades[i];t.inverseShadowMatrices.value[i].copy(r.inverseMatrix)}}copyReprojection(){const e=this.shadow,t=this.currentMaterial.uniforms;for(let i=0;i<e.cascadeCount;++i){const r=e.cascades[i];t.reprojectionMatrices.value[i].copy(r.matrix)}}swapBuffers(){Pi(this.historyRenderTarget!=null),Pi(this.resolveRenderTarget!=null);const e=this.historyRenderTarget,t=this.resolveRenderTarget;this.resolveRenderTarget=e,this.historyRenderTarget=t,this.resolveMaterial.uniforms.historyBuffer.value=t.texture}update(e,t,i){this.currentMaterial.uniforms.frame.value=t,this.copyShadow(),this.currentPass.render(e,null,this.currentRenderTarget),this.temporalPass&&(Pi(this.resolveRenderTarget!=null),this.resolvePass.render(e,null,this.resolveRenderTarget),this.copyReprojection(),this.swapBuffers())}setSize(e,t,i=this.shadow.cascadeCount){var r,a;this.width=e,this.height=t,this.currentMaterial.cascadeCount=i,this.resolveMaterial.cascadeCount=i,this.currentMaterial.setSize(e,t),this.resolveMaterial.setSize(e,t),this.currentRenderTarget.setSize(e,t,this.temporalPass?i*2:i),(r=this.resolveRenderTarget)==null||r.setSize(e,t,i),(a=this.historyRenderTarget)==null||a.setSize(e,t,i)}get outputBuffer(){return this.temporalPass?(Pi(this.historyRenderTarget!=null),this.historyRenderTarget.texture):this.currentRenderTarget.texture}get temporalPass(){return this.currentMaterial.temporalPass}set temporalPass(e){e!==this.temporalPass&&(this.currentMaterial.temporalPass=e,this.initRenderTargets(),this.setSize(this.width,this.height))}}function oT(n){return{scatteringCoefficient:new U(1),absorptionCoefficient:new U(0),coverage:new U(.3),localWeatherTexture:new U(n.localWeatherTexture),localWeatherRepeat:new U(n.localWeatherRepeat),localWeatherOffset:new U(n.localWeatherOffset),shapeTexture:new U(n.shapeTexture),shapeRepeat:new U(n.shapeRepeat),shapeOffset:new U(n.shapeOffset),shapeDetailTexture:new U(n.shapeDetailTexture),shapeDetailRepeat:new U(n.shapeDetailRepeat),shapeDetailOffset:new U(n.shapeDetailOffset),turbulenceTexture:new U(n.turbulenceTexture),turbulenceRepeat:new U(n.turbulenceRepeat),turbulenceDisplacement:new U(350)}}function cT(){return{minLayerHeights:new U(new ht),maxLayerHeights:new U(new ht),minIntervalHeights:new U(new F),maxIntervalHeights:new U(new F),densityScales:new U(new ht),shapeAmounts:new U(new ht),shapeDetailAmounts:new U(new ht),weatherExponents:new U(new ht),shapeAlteringBiases:new U(new ht),coverageFilterWidths:new U(new ht),minHeight:new U(0),maxHeight:new U(0),shadowTopHeight:new U(0),shadowBottomHeight:new U(0),shadowLayerMask:new U(new ht),densityProfile:new U({expTerms:new ht,exponents:new ht,linearTerms:new ht,constantTerms:new ht})}}const ac=[0,0,0,0];function lT(n,e){e.packValues("altitude",n.minLayerHeights.value),e.packSums("altitude","height",n.maxLayerHeights.value),e.packIntervalHeights(n.minIntervalHeights.value,n.maxIntervalHeights.value),e.packValues("densityScale",n.densityScales.value),e.packValues("shapeAmount",n.shapeAmounts.value),e.packValues("shapeDetailAmount",n.shapeDetailAmounts.value),e.packValues("weatherExponent",n.weatherExponents.value),e.packValues("shapeAlteringBias",n.shapeAlteringBiases.value),e.packValues("coverageFilterWidth",n.coverageFilterWidths.value);const t=n.densityProfile.value;e.packDensityProfiles("expTerm",t.expTerms),e.packDensityProfiles("exponent",t.exponents),e.packDensityProfiles("linearTerm",t.linearTerms),e.packDensityProfiles("constantTerm",t.constantTerms);let i=1/0,r=0,a=1/0,s=0;ac.fill(0);for(let o=0;o<e.length;++o){const{altitude:c,height:l,shadow:h}=e[o],d=c+l;l>0&&(c<i&&(i=c),h&&c<a&&(a=c),d>r&&(r=d),h&&d>s&&(s=d)),ac[o]=h?1:0}i!==1/0?(n.minHeight.value=i,n.maxHeight.value=r):(Pi(r===0),n.minHeight.value=0),a!==1/0?(n.shadowBottomHeight.value=a,n.shadowTopHeight.value=s):(Pi(s===0),n.shadowBottomHeight.value=0),n.shadowLayerMask.value.fromArray(ac)}function uT(n,e){return{bottomRadius:new U(n.bottomRadius),topRadius:new U(n.topRadius),worldToECEFMatrix:new U(e.worldToECEFMatrix),ecefToWorldMatrix:new U(e.ecefToWorldMatrix),altitudeCorrection:new U(e.altitudeCorrection),sunDirection:new U(e.sunDirection)}}const hT=`uniform sampler2D cloudsBuffer;

void mainImage(const vec4 inputColor, const vec2 uv, out vec4 outputColor) {
  #ifdef SKIP_RENDERING
  outputColor = inputColor;
  #else // SKIP_RENDERING
  vec4 clouds = texture(cloudsBuffer, uv);
  outputColor.rgb = inputColor.rgb * (1.0 - clouds.a) + clouds.rgb;
  outputColor.a = inputColor.a * (1.0 - clouds.a) + clouds.a;
  #endif // SKIP_RENDERING
}
`;var dT=Object.defineProperty,fT=(n,e,t,i)=>{for(var r=void 0,a=n.length-1,s;a>=0;a--)(s=n[a])&&(r=s(e,t,r)||r);return r&&dT(e,t,r),r};const da=new F,pT=new Pe,mT=new tt,gT=["maxIterationCount","minStepSize","maxStepSize","maxRayDistance","perspectiveStepScale","minDensity","minExtinction","minTransmittance","maxIterationCountToSun","maxIterationCountToGround","minSecondaryStepSize","secondaryStepScale","maxShadowFilterRadius","maxShadowLengthIterationCount","minShadowLengthStepSize","maxShadowLengthRayDistance","hazeDensityScale","hazeExponent","hazeScatteringCoefficient","hazeAbsorptionCoefficient"],vT=["multiScatteringOctaves","accurateSunSkyLight","accuratePhaseFunction"],_T=["maxIterationCount","minStepSize","maxStepSize","minDensity","minExtinction","minTransmittance","opticalDepthTailScale"],ST=["temporalJitter"],xT=["temporalPass"],ET=["cascadeCount","mapSize","maxFar","farScale","splitMode","splitLambda"],ni={type:"change"},TT={resolutionScale:Ze.resolutionScale,width:gi.AUTO_SIZE,height:gi.AUTO_SIZE};class zf extends to{constructor(e=new Oa,t,i=ho.DEFAULT){var h,d,f,g;super("CloudsEffect",hT,{attributes:mi.DEPTH,uniforms:new Map([["cloudsBuffer",new U(null)]])}),this.camera=e,this.atmosphere=i,this.cloudLayers=D2.DEFAULT.clone(),this.correctAltitude=!0,this.localWeatherRepeat=new Pe().setScalar(100),this.localWeatherOffset=new Pe,this.shapeRepeat=new F().setScalar(3e-4),this.shapeOffset=new F,this.shapeDetailRepeat=new F().setScalar(.006),this.shapeDetailOffset=new F,this.turbulenceRepeat=new Pe().setScalar(20),this.worldToECEFMatrix=new He,this.ecefToWorldMatrix=new He,this.altitudeCorrection=new F,this.sunDirection=new F,this.localWeatherVelocity=new Pe,this.shapeVelocity=new F,this.shapeDetailVelocity=new F,this._atmosphereOverlay=null,this._atmosphereShadow=null,this._atmosphereShadowLength=null,this.events=new qn,this.frame=0,this.shadowCascadeCount=0,this.shadowMapSize=new Pe,this.onResolutionChange=()=>{this.setSize(this.resolution.baseWidth,this.resolution.baseHeight)},this.skipRendering=!0;const{resolutionScale:r,width:a,height:s,resolutionX:o=a,resolutionY:c=s}={...TT,...t};this.shadowMaps=new B2({cascadeCount:Ze.shadow.cascadeCount,mapSize:Ze.shadow.mapSize,splitLambda:.6}),this.parameterUniforms=oT({localWeatherTexture:((h=this.proceduralLocalWeather)==null?void 0:h.texture)??null,localWeatherRepeat:this.localWeatherRepeat,localWeatherOffset:this.localWeatherOffset,shapeTexture:((d=this.proceduralShape)==null?void 0:d.texture)??null,shapeRepeat:this.shapeRepeat,shapeOffset:this.shapeOffset,shapeDetailTexture:((f=this.proceduralShapeDetail)==null?void 0:f.texture)??null,shapeDetailRepeat:this.shapeDetailRepeat,shapeDetailOffset:this.shapeDetailOffset,turbulenceTexture:((g=this.proceduralTurbulence)==null?void 0:g.texture)??null,turbulenceRepeat:this.turbulenceRepeat}),this.layerUniforms=cT(),this.atmosphereUniforms=uT(i,{worldToECEFMatrix:this.worldToECEFMatrix,ecefToWorldMatrix:this.ecefToWorldMatrix,altitudeCorrection:this.altitudeCorrection,sunDirection:this.sunDirection});const l={shadow:this.shadowMaps,parameterUniforms:this.parameterUniforms,layerUniforms:this.layerUniforms,atmosphereUniforms:this.atmosphereUniforms};this.shadowPass=new sT(l),this.shadowPass.mainCamera=e,this.cloudsPass=new j2(l,i),this.cloudsPass.mainCamera=e,this.clouds=Lh(Nh({},this.cloudsPass.currentMaterial,gT),this.cloudsPass.currentMaterial,vT),this.shadow=Lh(Nh({},this.shadowPass.currentMaterial,_T),this.shadowPass.currentMaterial,ST,this.shadowPass,xT,this.shadowMaps,ET),this.resolution=new gi(this,o,c,r),this.resolution.addEventListener("change",this.onResolutionChange)}get mainCamera(){return this.camera}set mainCamera(e){this.camera=e,this.shadowPass.mainCamera=e,this.cloudsPass.mainCamera=e}initialize(e,t,i){this.shadowPass.initialize(e,t,i),this.cloudsPass.initialize(e,t,i)}updateSharedUniforms(e){lT(this.layerUniforms,this.cloudLayers);const{parameterUniforms:t}=this;t.localWeatherOffset.value.add(pT.copy(this.localWeatherVelocity).multiplyScalar(e)),t.shapeOffset.value.add(da.copy(this.shapeVelocity).multiplyScalar(e)),t.shapeDetailOffset.value.add(da.copy(this.shapeDetailVelocity).multiplyScalar(e));const i=this.worldToECEFMatrix;this.ecefToWorldMatrix.copy(i).invert();const r=this.camera.getWorldPosition(da).applyMatrix4(this.worldToECEFMatrix),a=this.altitudeCorrection;this.correctAltitude?su(r,this.atmosphere.bottomRadius,this.ellipsoid,a):a.setScalar(0);const s=this.ellipsoid.getSurfaceNormal(r,da),o=this.sunDirection.dot(s),c=hf(1e6,1e3,o),l=mT.setFromMatrix4(i).transpose();this.shadowMaps.update(this.camera,da.copy(this.sunDirection).applyMatrix3(l),c)}updateWeatherTextureChannels(){const e=this.cloudLayers.localWeatherChannels;this.cloudsPass.currentMaterial.localWeatherChannels=e,this.shadowPass.currentMaterial.localWeatherChannels=e}updateAtmosphereComposition(){const{shadowMaps:e,shadowPass:t,cloudsPass:i}=this,r=t.currentMaterial.uniforms,a=i.currentMaterial.uniforms,s=this._atmosphereOverlay,o=Object.assign(this._atmosphereOverlay??{},{map:i.outputBuffer});s!==o&&(this._atmosphereOverlay=o,ni.target=this,ni.property="atmosphereOverlay",this.events.dispatchEvent(ni));const c=this._atmosphereShadow,l=Object.assign(this._atmosphereShadow??{},{map:t.outputBuffer,mapSize:e.mapSize,cascadeCount:e.cascadeCount,intervals:a.shadowIntervals.value,matrices:a.shadowMatrices.value,inverseMatrices:r.inverseShadowMatrices.value,far:e.far,topHeight:a.shadowTopHeight.value});c!==l&&(this._atmosphereShadow=l,ni.target=this,ni.property="atmosphereShadow",this.events.dispatchEvent(ni));const h=this._atmosphereShadowLength,d=i.shadowLengthBuffer!=null?Object.assign(this._atmosphereShadowLength??{},{map:i.shadowLengthBuffer}):null;h!==d&&(this._atmosphereShadowLength=d,ni.target=this,ni.property="atmosphereShadowLength",this.events.dispatchEvent(ni))}update(e,t,i=0){var o,c,l,h;const{shadowMaps:r,shadowPass:a,cloudsPass:s}=this;if(r.cascadeCount!==this.shadowCascadeCount||!r.mapSize.equals(this.shadowMapSize)){const{width:d,height:f}=r.mapSize,g=r.cascadeCount;this.shadowMapSize.set(d,f),this.shadowCascadeCount=g,a.setSize(d,f,g),s.setShadowSize(d,f,g)}(o=this.proceduralLocalWeather)==null||o.render(e,i),(c=this.proceduralShape)==null||c.render(e,i),(l=this.proceduralShapeDetail)==null||l.render(e,i),(h=this.proceduralTurbulence)==null||h.render(e,i),++this.frame,this.updateSharedUniforms(i),this.updateWeatherTextureChannels(),a.update(e,this.frame,i),s.shadowBuffer=a.outputBuffer,s.update(e,this.frame,i),this.updateAtmosphereComposition(),this.uniforms.get("cloudsBuffer").value=this.cloudsPass.outputBuffer}setSize(e,t){const{resolution:i}=this;i.setBaseSize(e,t);const{width:r,height:a}=i;this.cloudsPass.setSize(r,a)}setDepthTexture(e,t){this.shadowPass.setDepthTexture(e,t),this.cloudsPass.setDepthTexture(e,t)}set qualityPreset(e){const{clouds:t,shadow:i,...r}=z2[e];Object.assign(this,r),Object.assign(this.clouds,t),Object.assign(this.shadow,i)}get localWeatherTexture(){return this.proceduralLocalWeather??this.parameterUniforms.localWeatherTexture.value}set localWeatherTexture(e){e instanceof Pt||e==null?(this.proceduralLocalWeather=void 0,this.parameterUniforms.localWeatherTexture.value=e):(this.proceduralLocalWeather=e,this.parameterUniforms.localWeatherTexture.value=e.texture)}get shapeTexture(){return this.proceduralShape??this.parameterUniforms.shapeTexture.value}set shapeTexture(e){e instanceof pi||e==null?(this.proceduralShape=void 0,this.parameterUniforms.shapeTexture.value=e):(this.proceduralShape=e,this.parameterUniforms.shapeTexture.value=e.texture)}get shapeDetailTexture(){return this.proceduralShapeDetail??this.parameterUniforms.shapeDetailTexture.value}set shapeDetailTexture(e){e instanceof pi||e==null?(this.proceduralShapeDetail=void 0,this.parameterUniforms.shapeDetailTexture.value=e):(this.proceduralShapeDetail=e,this.parameterUniforms.shapeDetailTexture.value=e.texture)}get turbulenceTexture(){return this.proceduralTurbulence??this.parameterUniforms.turbulenceTexture.value}set turbulenceTexture(e){e instanceof Pt||e==null?(this.proceduralTurbulence=void 0,this.parameterUniforms.turbulenceTexture.value=e):(this.proceduralTurbulence=e,this.parameterUniforms.turbulenceTexture.value=e.texture)}get stbnTexture(){return this.cloudsPass.currentMaterial.uniforms.stbnTexture.value}set stbnTexture(e){this.cloudsPass.currentMaterial.uniforms.stbnTexture.value=e,this.shadowPass.currentMaterial.uniforms.stbnTexture.value=e}get resolutionScale(){return this.resolution.scale}set resolutionScale(e){this.resolution.scale=e}get temporalUpscale(){return this.cloudsPass.temporalUpscale}set temporalUpscale(e){this.cloudsPass.temporalUpscale=e}get lightShafts(){return this.cloudsPass.lightShafts}set lightShafts(e){this.cloudsPass.lightShafts=e}get shapeDetail(){return this.cloudsPass.currentMaterial.shapeDetail}set shapeDetail(e){this.cloudsPass.currentMaterial.shapeDetail=e,this.shadowPass.currentMaterial.shapeDetail=e}get turbulence(){return this.cloudsPass.currentMaterial.turbulence}set turbulence(e){this.cloudsPass.currentMaterial.turbulence=e,this.shadowPass.currentMaterial.turbulence=e}get haze(){return this.cloudsPass.currentMaterial.haze}set haze(e){this.cloudsPass.currentMaterial.haze=e}get scatteringCoefficient(){return this.parameterUniforms.scatteringCoefficient.value}set scatteringCoefficient(e){this.parameterUniforms.scatteringCoefficient.value=e}get absorptionCoefficient(){return this.parameterUniforms.absorptionCoefficient.value}set absorptionCoefficient(e){this.parameterUniforms.absorptionCoefficient.value=e}get coverage(){return this.parameterUniforms.coverage.value}set coverage(e){this.parameterUniforms.coverage.value=e}get turbulenceDisplacement(){return this.parameterUniforms.turbulenceDisplacement.value}set turbulenceDisplacement(e){this.parameterUniforms.turbulenceDisplacement.value=e}get scatterAnisotropy1(){return this.cloudsPass.currentMaterial.scatterAnisotropy1}set scatterAnisotropy1(e){this.cloudsPass.currentMaterial.scatterAnisotropy1=e}get scatterAnisotropy2(){return this.cloudsPass.currentMaterial.scatterAnisotropy2}set scatterAnisotropy2(e){this.cloudsPass.currentMaterial.scatterAnisotropy2=e}get scatterAnisotropyMix(){return this.cloudsPass.currentMaterial.scatterAnisotropyMix}set scatterAnisotropyMix(e){this.cloudsPass.currentMaterial.scatterAnisotropyMix=e}get skyLightScale(){return this.cloudsPass.currentMaterial.uniforms.skyLightScale.value}set skyLightScale(e){this.cloudsPass.currentMaterial.uniforms.skyLightScale.value=e}get groundBounceScale(){return this.cloudsPass.currentMaterial.uniforms.groundBounceScale.value}set groundBounceScale(e){this.cloudsPass.currentMaterial.uniforms.groundBounceScale.value=e}get powderScale(){return this.cloudsPass.currentMaterial.uniforms.powderScale.value}set powderScale(e){this.cloudsPass.currentMaterial.uniforms.powderScale.value=e}get powderExponent(){return this.cloudsPass.currentMaterial.uniforms.powderExponent.value}set powderExponent(e){this.cloudsPass.currentMaterial.uniforms.powderExponent.value=e}get atmosphereOverlay(){return this._atmosphereOverlay}get atmosphereShadow(){return this._atmosphereShadow}get atmosphereShadowLength(){return this._atmosphereShadowLength}get irradianceTexture(){return this.cloudsPass.currentMaterial.irradianceTexture}set irradianceTexture(e){this.cloudsPass.currentMaterial.irradianceTexture=e}get scatteringTexture(){return this.cloudsPass.currentMaterial.scatteringTexture}set scatteringTexture(e){this.cloudsPass.currentMaterial.scatteringTexture=e}get transmittanceTexture(){return this.cloudsPass.currentMaterial.transmittanceTexture}set transmittanceTexture(e){this.cloudsPass.currentMaterial.transmittanceTexture=e}get singleMieScatteringTexture(){return this.cloudsPass.currentMaterial.singleMieScatteringTexture}set singleMieScatteringTexture(e){this.cloudsPass.currentMaterial.singleMieScatteringTexture=e}get higherOrderScatteringTexture(){return this.cloudsPass.currentMaterial.higherOrderScatteringTexture}set higherOrderScatteringTexture(e){this.cloudsPass.currentMaterial.higherOrderScatteringTexture=e}get ellipsoid(){return this.cloudsPass.currentMaterial.ellipsoid}set ellipsoid(e){this.cloudsPass.currentMaterial.ellipsoid=e}get sunAngularRadius(){return this.cloudsPass.currentMaterial.sunAngularRadius}set sunAngularRadius(e){this.cloudsPass.currentMaterial.sunAngularRadius=e}}fT([dt("SKIP_RENDERING")],zf.prototype,"skipRendering");const sc=128,oc=32,yT="/assets/local_weather-DSzanC6h.png",MT="/assets/shape-C0zrEmxc.bin",wT="/assets/shape_detail-Tuf-gW3D.bin",AT="/assets/turbulence-DqexPSLa.png",RT=document.querySelector("#three"),Sa=document.querySelector("#ascii"),Gf=Sa.getContext("2d",{alpha:!0});class CT extends to{constructor(){super("GroundASCIIEffect",`
      uniform sampler2D uCharacters;
      uniform vec3 uColor;
      uniform float uCellSize;
      uniform float uThreshold;
      uniform float uContrast;
      uniform float uInvert;
      uniform float uHorizon;
      uniform float uReflect;
      uniform float uTime;

      float luminanceOf(vec3 color) {
        return dot(color, vec3(0.2126, 0.7152, 0.0722));
      }

      float glyph(vec2 uv, vec2 cellCount) {
        vec2 charUv = fract(uv * cellCount);
        return texture2D(uCharacters, charUv).r;
      }

      vec3 referenceGrade(vec3 color) {
        float gray = luminanceOf(color);
        gray = (gray - 0.5) * 1.74 + 0.5;
        gray *= 0.62;
        return vec3(clamp(gray, 0.0, 1.0));
      }

      void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
        vec3 base = referenceGrade(inputColor.rgb);
        float screenY = 1.0 - gl_FragCoord.y / resolution.y;
        float lowerBand = smoothstep(0.56, 0.60, screenY) * (1.0 - smoothstep(0.93, 0.97, screenY));
        if (lowerBand <= 0.0) {
          outputColor = vec4(base, inputColor.a);
          return;
        }

        // Inside the ASCII band, fade the photo down to a near-black canvas
        // so the glyphs read like the reference video.
        vec3 canvas = mix(base, base * 0.05, lowerBand);

        vec2 cellCount = resolution / uCellSize;
        vec2 cellSize = 1.0 / cellCount;
        vec2 cellUv = cellSize * (0.5 + floor(uv / cellSize));

        // The water/foreground below the horizon is flat, so it carries no
        // cloud-shadow detail. Instead sample the CLOUD region above the
        // horizon (mirrored downward) so the moving cloud shadows drive the
        // glyphs — the band reads like a reflection of the sky.
        vec2 sampleUv = vec2(
          cellUv.x,
          clamp(uHorizon + (uHorizon - cellUv.y) * uReflect, 0.0, 1.0)
        );
        // inputBuffer is now the finished cloud image (this is its own pass),
        // so we can read the real cloud luminance at the reflected point.
        float lum = luminanceOf(texture2D(inputBuffer, sampleUv).rgb);

        // Hard on/off cutoff: glyphs stay at full strength where it is dark and
        // disappear where it is lighter. uContrast controls how sharp the edge
        // is (high = almost binary), uThreshold sets where dark/light splits.
        float v = clamp((lum - uThreshold) * uContrast + 0.5, 0.0, 1.0);
        // uInvert = 1 -> glyphs stay on the DARK pixels, 0 -> on the light pixels.
        float keep = mix(v, 1.0 - v, uInvert);
        keep = smoothstep(0.4, 0.6, keep);

        float mask = lowerBand * keep;
        if (mask <= 0.05) {
          outputColor = vec4(canvas, inputColor.a);
          return;
        }

        // glyph is full strength wherever it is kept (no fading by tone).
        float shimmer = 0.85 + 0.15 * sin(uTime * 3.0 + cellUv.x * 90.0 + cellUv.y * 130.0);
        float mark = glyph(uv, cellCount) * shimmer;
        outputColor = vec4(canvas + uColor * mark * mask * 1.7, inputColor.a);
      }
    `,{blendFunction:st.SRC,uniforms:new Map([["uCharacters",new U(bT("⟡"))],["uColor",new U(new ft("#AEE700"))],["uCellSize",new U(13)],["uThreshold",new U(.42)],["uContrast",new U(12)],["uInvert",new U(1)],["uHorizon",new U(.44)],["uReflect",new U(1.3)],["uTime",new U(0)]])})}update(e,t,i){this.uniforms.get("uTime").value+=i}}function bT(n){const t=document.createElement("canvas");t.width=128,t.height=128;const i=t.getContext("2d");i.clearRect(0,0,128,128),i.fillStyle="#fff",i.shadowColor="#fff",i.shadowBlur=6,i.font='700 88px "IBM Plex Mono", "Courier New", monospace',i.textAlign="center",i.textBaseline="middle",i.fillText(n,128/2,128/2+2);const r=new bm(t);return r.wrapS=an,r.wrapT=an,r.minFilter=Ot,r.magFilter=Ot,r.colorSpace=nn,r.needsUpdate=!0,r}const ta=new bd({canvas:RT,depth:!1,antialias:!1,logarithmicDepthBuffer:!1,preserveDrawingBuffer:!0});ta.setPixelRatio(Math.min(window.devicePixelRatio,1.5));ta.toneMapping=di;ta.toneMappingExposure=10;const kf=new jc,Fn=new vn(95,1,10,1e6),DT=new Gl(ul(30),ul(67),500),fu=DT.toECEF(),IT=new F,Vf=new F,pu=new F;Ia.WGS84.getEastNorthUpVectors(fu,IT,Vf,pu);Fn.position.copy(fu);Fn.up.copy(pu);Fn.lookAt(fu.clone().add(Vf.clone().multiplyScalar(16e3)).add(pu.clone().multiplyScalar(1350)));const Xn=new Jt(Fn);Xn.sky=!0;Xn.sunLight=!0;Xn.skyLight=!0;const It=new zf(Fn,{resolutionScale:.62});It.coverage=.3;It.qualityPreset="medium";It.temporalUpscale=!0;It.lightShafts=!1;It.localWeatherVelocity.set(45e-5,8e-5);It.shapeVelocity.set(18e-6,0,6e-6);const mu=new F;m2(new Date("2000-06-01T10:00:00Z"),mu);Xn.sunDirection.copy(mu);It.sunDirection.copy(mu);It.shadow.maxFar=1e5;It.events.addEventListener("change",n=>{switch(n.property){case"atmosphereOverlay":Xn.overlay=It.atmosphereOverlay;break;case"atmosphereShadow":Xn.shadow=It.atmosphereShadow;break;case"atmosphereShadowLength":Xn.shadowLength=It.atmosphereShadowLength;break}});It.cloudLayers.set([{channel:"r",altitude:1e3,height:1e3,shapeAmount:.8,weatherExponent:.6,shadow:!0},{channel:"g",altitude:2e3,height:800,shapeAmount:.8,shapeAlteringBias:.5,densityScale:.1},{channel:"b",altitude:2e3,height:2e3,densityScale:.002,shapeAmount:.3},{channel:"a",height:300,densityScale:.05,shapeAmount:.2,shapeDetailAmount:0,shapeAlteringBias:.5,coverageFilterWidth:1,densityProfile:{expTerm:1,exponent:.001,constantTerm:0,linearTerm:0}}]);const na=new b_(ta,{frameBufferType:rn,multisampling:0}),Wf=new yS(kf,Fn),PT=new CT;Xn.normalBuffer=Wf.texture;na.addPass(new Pd(kf,Fn));na.addPass(Wf);na.addPass(new Ld(Fn,It,Xn,new _S({mode:un.AGX})));na.addPass(new Ld(Fn,PT));new _2({format:"binary"}).setType(ta).load("/atmosphere",n=>{Object.assign(Xn,n),Object.assign(It,n)});const Xf=new Bm;Xf.load(yT,n=>{n.minFilter=ad,n.magFilter=pt,n.wrapS=an,n.wrapT=an,n.colorSpace=nn,n.needsUpdate=!0,It.localWeatherTexture=n});Xf.load(AT,n=>{n.minFilter=ad,n.magFilter=pt,n.wrapS=an,n.wrapT=an,n.colorSpace=nn,n.needsUpdate=!0,It.turbulenceTexture=n});new ji(pi,ff,{width:sc,height:sc,depth:sc}).load(MT,n=>{n.format=hi,n.minFilter=pt,n.magFilter=pt,n.wrapS=an,n.wrapT=an,n.wrapR=an,n.colorSpace=nn,n.needsUpdate=!0,It.shapeTexture=n});new ji(pi,ff,{width:oc,height:oc,depth:oc}).load(wT,n=>{n.format=hi,n.minFilter=pt,n.magFilter=pt,n.wrapS=an,n.wrapT=an,n.wrapR=an,n.colorSpace=nn,n.needsUpdate=!0,It.shapeDetailTexture=n});function Yf(){const n=window.innerWidth,e=window.innerHeight;Fn.aspect=n/e,Fn.updateProjectionMatrix(),ta.setSize(n,e,!1),na.setSize(n,e);const t=Math.min(window.devicePixelRatio,1.5);Sa.width=Math.floor(n*t),Sa.height=Math.floor(e*t),Sa.style.width=`${n}px`,Sa.style.height=`${e}px`,Gf.setTransform(t,0,0,t,0,0)}let Qh=performance.now();function qf(n){const e=Math.min((n-Qh)/1e3,.05);Qh=n,It.localWeatherOffset.x+=e*.0015,It.shapeOffset.x+=e*2e-5,na.render(e),Gf.clearRect(0,0,window.innerWidth,window.innerHeight),requestAnimationFrame(qf)}window.addEventListener("resize",Yf);Yf();requestAnimationFrame(qf);const LT="Cloud Gardens",NT=-100,UT=.08,OT=150,FT=-.03,BT=.34,HT=1.62,zT=1.28,GT=.72,kT="#f9f9f4",VT="/fonts/ExposureTrialVAR.ttf",ed="ExposureEmbedded",fa=document.querySelector("#app"),zt=document.querySelector("#title");if(fa&&zt){let n=function(S,E,v){const p=(FT*v).toFixed(2),I=`<svg xmlns="http://www.w3.org/2000/svg" width="${S}" height="${E}" viewBox="0 0 ${S} ${E}"><style>@font-face{font-family:'${ed}';src:url('${c}') format('truetype');}text{font-family:'${ed}';font-size:${v}px;font-variation-settings:'EXPO' ${NT};letter-spacing:${p}px;fill:#ffffff;}</style><text x="${S/2}" y="${E/2}" text-anchor="middle" dominant-baseline="central">${LT}</text></svg>`,R="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(I);return new Promise((w,L)=>{const N=new Image;N.onload=()=>w(N),N.onerror=L,N.src=R})},e=function(){l||(l=requestAnimationFrame(t))},t=function(){l=0,o+=.016,i.clearRect(0,0,zt.width,zt.height),i.fillStyle=kT;let S=0;for(const E of a){const v=s?E.tx:E.sx,p=s?E.ty:E.sy,I=s?1:0;if(E.x+=(v-E.x)*.045,E.y+=(p-E.y)*.045,E.o+=(I-E.o)*.06,E.o<.01)continue;S+=1;const R=Math.max(0,1-(Math.abs(v-E.x)+Math.abs(p-E.y))*.02),w=s?Math.sin(o*2.4+E.seed)*.6*R:0,L=s?Math.cos(o*2+E.seed)*.6*R:0,N=Math.max(1,E.size*zT);i.globalAlpha=E.o*GT,i.fillRect(E.x+w,E.y+L,N,N)}i.globalAlpha=1,(s||S>0)&&e()};const i=zt.getContext("2d"),r=Math.min(window.devicePixelRatio||1,2);let a=[],s=!1,o=0,c=null,l=0;async function h(){if(c)return c;const S=await fetch(VT),E=new Uint8Array(await S.arrayBuffer());let v="";const p=32768;for(let I=0;I<E.length;I+=p)v+=String.fromCharCode.apply(null,E.subarray(I,I+p));return c=`data:font/ttf;base64,${btoa(v)}`,c}async function d(){const S=fa.clientWidth,E=fa.clientHeight;zt.width=Math.floor(S*r),zt.height=Math.floor(E*r),zt.style.width=`${S}px`,zt.style.height=`${E}px`;const v=Math.min(S*UT,OT)*r;let p;try{await h(),p=await n(zt.width,zt.height,v)}catch{return}const I=document.createElement("canvas");I.width=zt.width,I.height=zt.height;const R=I.getContext("2d",{willReadFrequently:!0});R.drawImage(p,0,0);const w=R.getImageData(0,0,I.width,I.height).data,L=Math.max(2,Math.round(v/110*HT)),N=[];let O=1/0,G=-1/0,y=1/0,M=-1/0;for(let j=0;j<I.height;j+=L)for(let Q=0;Q<I.width;Q+=L)w[(j*I.width+Q)*4+3]>80&&(N.push(Q,j),Q<O&&(O=Q),Q>G&&(G=Q),j<y&&(y=j),j>M&&(M=j));const B=zt.width/2-(O+G)/2,X=zt.height*BT-(y+M)/2;a=[];for(let j=0;j<N.length;j+=2){const Q=N[j]+B+(Math.random()-.5)*L*.5,ee=N[j+1]+X+(Math.random()-.5)*L*.5;a.push({tx:Q,ty:ee,sx:Q+(Math.random()-.5)*zt.width*.5,sy:ee+(Math.random()-.5)*zt.height*.5,x:Q+(Math.random()-.5)*zt.width*.5,y:ee+(Math.random()-.5)*zt.height*.5,o:0,size:L,seed:Math.random()*Math.PI*2})}}fa.addEventListener("pointerenter",()=>{s=!0,e()}),fa.addEventListener("pointerleave",()=>{s=!1,e()});let f;window.addEventListener("resize",()=>{clearTimeout(f),f=setTimeout(async()=>{await d(),e()},150)});async function g(){try{await document.fonts.ready}catch{}await d(),e()}g()}const Ar=document.querySelector(".hover-preview"),td=document.querySelectorAll(".reveal-word");if(Ar&&td.length){const n=Ar.querySelector(".preview-image");let e=!1;td.forEach(t=>{t.addEventListener("mouseenter",()=>{n.textContent=t.dataset.image||"image",Ar.classList.add("is-visible"),e=!0}),t.addEventListener("mouseleave",()=>{Ar.classList.remove("is-visible"),e=!1})}),window.addEventListener("mousemove",t=>{e&&(Ar.style.left=`${t.clientX}px`,Ar.style.top=`${t.clientY}px`)})}const yn=document.querySelector(".team-row");if(yn){const n=window.matchMedia("(prefers-reduced-motion: reduce)");let e=1,t=0,i=!1,r;const a=()=>yn.scrollWidth>yn.clientWidth+2,s=()=>{i=!0,window.clearTimeout(r),r=window.setTimeout(()=>{i=!1},1200)},o=c=>{t||(t=c);const l=c-t;if(t=c,!n.matches&&!i&&a()){const h=yn.scrollWidth-yn.clientWidth;yn.scrollLeft+=e*l*.018,yn.scrollLeft>=h-1&&(e=-1),yn.scrollLeft<=1&&(e=1)}window.requestAnimationFrame(o)};yn.addEventListener("wheel",c=>{if(!a())return;c.preventDefault();const l=Math.abs(c.deltaX)>Math.abs(c.deltaY)?c.deltaX:c.deltaY;yn.scrollLeft+=l,e=l>=0?1:-1,s()},{passive:!1}),yn.addEventListener("pointerenter",()=>{i=!0}),yn.addEventListener("pointerleave",()=>{s()}),window.requestAnimationFrame(o)}const cc=document.querySelector(".gif-display"),lc=document.querySelectorAll(".gif-caption-option"),uc=[...document.querySelectorAll("video")].filter(n=>n.dataset.src||n.querySelector("source[data-src]"));if(uc.length){const n=e=>{e.dataset.src&&(e.src=e.dataset.src,e.removeAttribute("data-src")),e.querySelectorAll("source[data-src]").forEach(t=>{t.src=t.dataset.src,t.removeAttribute("data-src")}),e.load(),e.play().catch(()=>{})};if("IntersectionObserver"in window){const e=new WeakMap,t=new IntersectionObserver(i=>{i.forEach(r=>{r.isIntersecting&&(t.unobserve(r.target),n(e.get(r.target)))})},{rootMargin:"500px 0px"});uc.forEach(i=>{const r=i.closest("figure")||i;e.set(r,i),t.observe(r)})}else uc.forEach(n)}if(cc&&lc.length){const n=e=>{cc.src=e.dataset.gifSrc,cc.alt=e.dataset.gifAlt,lc.forEach(t=>{const i=t===e;t.classList.toggle("is-active",i),t.setAttribute("aria-selected",String(i))})};lc.forEach(e=>{e.addEventListener("click",()=>n(e)),e.addEventListener("keydown",t=>{t.target===e&&(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),n(e))})})}
