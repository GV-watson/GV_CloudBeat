(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function gl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Ie={},br=[],xt=()=>{},pf=()=>!1,mo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ml=n=>n.startsWith("onUpdate:"),nt=Object.assign,_l=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Zg=Object.prototype.hasOwnProperty,ve=(n,e)=>Zg.call(n,e),re=Array.isArray,Sr=n=>_o(n)==="[object Map]",gf=n=>_o(n)==="[object Set]",le=n=>typeof n=="function",xe=n=>typeof n=="string",Un=n=>typeof n=="symbol",Ae=n=>n!==null&&typeof n=="object",mf=n=>(Ae(n)||le(n))&&le(n.then)&&le(n.catch),_f=Object.prototype.toString,_o=n=>_f.call(n),em=n=>_o(n).slice(8,-1),yf=n=>_o(n)==="[object Object]",yo=n=>xe(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ws=gl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),vo=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},tm=/-\w/g,kn=vo(n=>n.replace(tm,e=>e.slice(1).toUpperCase())),nm=/\B([A-Z])/g,ur=vo(n=>n.replace(nm,"-$1").toLowerCase()),vf=vo(n=>n.charAt(0).toUpperCase()+n.slice(1)),oa=vo(n=>n?`on${vf(n)}`:""),An=(n,e)=>!Object.is(n,e),aa=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Ef=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},rm=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let au;const Eo=()=>au||(au=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function yl(n){if(re(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=xe(r)?am(r):yl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(xe(n)||Ae(n))return n}const sm=/;(?![^(]*\))/g,im=/:([^]+)/,om=/\/\*[^]*?\*\//g;function am(n){const e={};return n.replace(om,"").split(sm).forEach(t=>{if(t){const r=t.split(im);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function vl(n){let e="";if(xe(n))e=n;else if(re(n))for(let t=0;t<n.length;t++){const r=vl(n[t]);r&&(e+=r+" ")}else if(Ae(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const lm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",cm=gl(lm);function Tf(n){return!!n||n===""}const If=n=>!!(n&&n.__v_isRef===!0),vr=n=>xe(n)?n:n==null?"":re(n)||Ae(n)&&(n.toString===_f||!le(n.toString))?If(n)?vr(n.value):JSON.stringify(n,wf,2):String(n),wf=(n,e)=>If(e)?wf(n,e.value):Sr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,s],i)=>(t[la(r,i)+" =>"]=s,t),{})}:gf(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>la(t))}:Un(e)?la(e):Ae(e)&&!re(e)&&!yf(e)?String(e):e,la=(n,e="")=>{var t;return Un(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ye;class Af{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ye,!e&&Ye&&(this.index=(Ye.scopes||(Ye.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Ye;try{return Ye=this,e()}finally{Ye=t}}}on(){++this._on===1&&(this.prevScope=Ye,Ye=this)}off(){this._on>0&&--this._on===0&&(Ye=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function bf(n){return new Af(n)}function Sf(){return Ye}function um(n,e=!1){Ye&&Ye.cleanups.push(n)}let Te;const ca=new WeakSet;class Rf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ye&&Ye.active&&Ye.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ca.has(this)&&(ca.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Pf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,lu(this),Of(this);const e=Te,t=It;Te=this,It=!0;try{return this.fn()}finally{kf(this),Te=e,It=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Il(e);this.deps=this.depsTail=void 0,lu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ca.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Oa(this)&&this.run()}get dirty(){return Oa(this)}}let Cf=0,As,bs;function Pf(n,e=!1){if(n.flags|=8,e){n.next=bs,bs=n;return}n.next=As,As=n}function El(){Cf++}function Tl(){if(--Cf>0)return;if(bs){let e=bs;for(bs=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;As;){let e=As;for(As=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function Of(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function kf(n){let e,t=n.depsTail,r=t;for(;r;){const s=r.prevDep;r.version===-1?(r===t&&(t=s),Il(r),hm(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}n.deps=e,n.depsTail=t}function Oa(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Df(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Df(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Us)||(n.globalVersion=Us,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Oa(n))))return;n.flags|=2;const e=n.dep,t=Te,r=It;Te=n,It=!0;try{Of(n);const s=n.fn(n._value);(e.version===0||An(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Te=t,It=r,kf(n),n.flags&=-3}}function Il(n,e=!1){const{dep:t,prevSub:r,nextSub:s}=n;if(r&&(r.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)Il(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function hm(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let It=!0;const Nf=[];function Zt(){Nf.push(It),It=!1}function en(){const n=Nf.pop();It=n===void 0?!0:n}function lu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Te;Te=void 0;try{e()}finally{Te=t}}}let Us=0;class fm{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class wl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Te||!It||Te===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Te)t=this.activeLink=new fm(Te,this),Te.deps?(t.prevDep=Te.depsTail,Te.depsTail.nextDep=t,Te.depsTail=t):Te.deps=Te.depsTail=t,Vf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=Te.depsTail,t.nextDep=void 0,Te.depsTail.nextDep=t,Te.depsTail=t,Te.deps===t&&(Te.deps=r)}return t}trigger(e){this.version++,Us++,this.notify(e)}notify(e){El();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Tl()}}}function Vf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Vf(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Ki=new WeakMap,er=Symbol(""),ka=Symbol(""),Bs=Symbol("");function et(n,e,t){if(It&&Te){let r=Ki.get(n);r||Ki.set(n,r=new Map);let s=r.get(t);s||(r.set(t,s=new wl),s.map=r,s.key=t),s.track()}}function Gt(n,e,t,r,s,i){const a=Ki.get(n);if(!a){Us++;return}const l=u=>{u&&u.trigger()};if(El(),e==="clear")a.forEach(l);else{const u=re(n),f=u&&yo(t);if(u&&t==="length"){const d=Number(r);a.forEach((g,y)=>{(y==="length"||y===Bs||!Un(y)&&y>=d)&&l(g)})}else switch((t!==void 0||a.has(void 0))&&l(a.get(t)),f&&l(a.get(Bs)),e){case"add":u?f&&l(a.get("length")):(l(a.get(er)),Sr(n)&&l(a.get(ka)));break;case"delete":u||(l(a.get(er)),Sr(n)&&l(a.get(ka)));break;case"set":Sr(n)&&l(a.get(er));break}}Tl()}function dm(n,e){const t=Ki.get(n);return t&&t.get(e)}function _r(n){const e=_e(n);return e===n?e:(et(e,"iterate",Bs),gt(n)?e:e.map(At))}function To(n){return et(n=_e(n),"iterate",Bs),n}function gn(n,e){return tn(n)?Yt(n)?Mr(At(e)):Mr(e):At(e)}const pm={__proto__:null,[Symbol.iterator](){return ua(this,Symbol.iterator,n=>gn(this,n))},concat(...n){return _r(this).concat(...n.map(e=>re(e)?_r(e):e))},entries(){return ua(this,"entries",n=>(n[1]=gn(this,n[1]),n))},every(n,e){return Wt(this,"every",n,e,void 0,arguments)},filter(n,e){return Wt(this,"filter",n,e,t=>t.map(r=>gn(this,r)),arguments)},find(n,e){return Wt(this,"find",n,e,t=>gn(this,t),arguments)},findIndex(n,e){return Wt(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Wt(this,"findLast",n,e,t=>gn(this,t),arguments)},findLastIndex(n,e){return Wt(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Wt(this,"forEach",n,e,void 0,arguments)},includes(...n){return ha(this,"includes",n)},indexOf(...n){return ha(this,"indexOf",n)},join(n){return _r(this).join(n)},lastIndexOf(...n){return ha(this,"lastIndexOf",n)},map(n,e){return Wt(this,"map",n,e,void 0,arguments)},pop(){return ps(this,"pop")},push(...n){return ps(this,"push",n)},reduce(n,...e){return cu(this,"reduce",n,e)},reduceRight(n,...e){return cu(this,"reduceRight",n,e)},shift(){return ps(this,"shift")},some(n,e){return Wt(this,"some",n,e,void 0,arguments)},splice(...n){return ps(this,"splice",n)},toReversed(){return _r(this).toReversed()},toSorted(n){return _r(this).toSorted(n)},toSpliced(...n){return _r(this).toSpliced(...n)},unshift(...n){return ps(this,"unshift",n)},values(){return ua(this,"values",n=>gn(this,n))}};function ua(n,e,t){const r=To(n),s=r[e]();return r!==n&&!gt(n)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=t(i.value)),i}),s}const gm=Array.prototype;function Wt(n,e,t,r,s,i){const a=To(n),l=a!==n&&!gt(n),u=a[e];if(u!==gm[e]){const g=u.apply(n,i);return l?At(g):g}let f=t;a!==n&&(l?f=function(g,y){return t.call(this,gn(n,g),y,n)}:t.length>2&&(f=function(g,y){return t.call(this,g,y,n)}));const d=u.call(a,f,r);return l&&s?s(d):d}function cu(n,e,t,r){const s=To(n);let i=t;return s!==n&&(gt(n)?t.length>3&&(i=function(a,l,u){return t.call(this,a,l,u,n)}):i=function(a,l,u){return t.call(this,a,gn(n,l),u,n)}),s[e](i,...r)}function ha(n,e,t){const r=_e(n);et(r,"iterate",Bs);const s=r[e](...t);return(s===-1||s===!1)&&wo(t[0])?(t[0]=_e(t[0]),r[e](...t)):s}function ps(n,e,t=[]){Zt(),El();const r=_e(n)[e].apply(n,t);return Tl(),en(),r}const mm=gl("__proto__,__v_isRef,__isVue"),xf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Un));function _m(n){Un(n)||(n=String(n));const e=_e(this);return et(e,"has",n),e.hasOwnProperty(n)}class Mf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(s?i?Rm:Bf:i?Uf:Ff).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=re(e);if(!s){let u;if(a&&(u=pm[t]))return u;if(t==="hasOwnProperty")return _m}const l=Reflect.get(e,t,Pe(e)?e:r);if((Un(t)?xf.has(t):mm(t))||(s||et(e,"get",t),i))return l;if(Pe(l)){const u=a&&yo(t)?l:l.value;return s&&Ae(u)?Na(u):u}return Ae(l)?s?Na(l):Io(l):l}}class Lf extends Mf{constructor(e=!1){super(!1,e)}set(e,t,r,s){let i=e[t];const a=re(e)&&yo(t);if(!this._isShallow){const f=tn(i);if(!gt(r)&&!tn(r)&&(i=_e(i),r=_e(r)),!a&&Pe(i)&&!Pe(r))return f||(i.value=r),!0}const l=a?Number(t)<e.length:ve(e,t),u=Reflect.set(e,t,r,Pe(e)?e:s);return e===_e(s)&&(l?An(r,i)&&Gt(e,"set",t,r):Gt(e,"add",t,r)),u}deleteProperty(e,t){const r=ve(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&r&&Gt(e,"delete",t,void 0),s}has(e,t){const r=Reflect.has(e,t);return(!Un(t)||!xf.has(t))&&et(e,"has",t),r}ownKeys(e){return et(e,"iterate",re(e)?"length":er),Reflect.ownKeys(e)}}class ym extends Mf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const vm=new Lf,Em=new ym,Tm=new Lf(!0);const Da=n=>n,bi=n=>Reflect.getPrototypeOf(n);function Im(n,e,t){return function(...r){const s=this.__v_raw,i=_e(s),a=Sr(i),l=n==="entries"||n===Symbol.iterator&&a,u=n==="keys"&&a,f=s[n](...r),d=t?Da:e?Mr:At;return!e&&et(i,"iterate",u?ka:er),{next(){const{value:g,done:y}=f.next();return y?{value:g,done:y}:{value:l?[d(g[0]),d(g[1])]:d(g),done:y}},[Symbol.iterator](){return this}}}}function Si(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function wm(n,e){const t={get(s){const i=this.__v_raw,a=_e(i),l=_e(s);n||(An(s,l)&&et(a,"get",s),et(a,"get",l));const{has:u}=bi(a),f=e?Da:n?Mr:At;if(u.call(a,s))return f(i.get(s));if(u.call(a,l))return f(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!n&&et(_e(s),"iterate",er),s.size},has(s){const i=this.__v_raw,a=_e(i),l=_e(s);return n||(An(s,l)&&et(a,"has",s),et(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,u=_e(l),f=e?Da:n?Mr:At;return!n&&et(u,"iterate",er),l.forEach((d,g)=>s.call(i,f(d),f(g),a))}};return nt(t,n?{add:Si("add"),set:Si("set"),delete:Si("delete"),clear:Si("clear")}:{add(s){!e&&!gt(s)&&!tn(s)&&(s=_e(s));const i=_e(this);return bi(i).has.call(i,s)||(i.add(s),Gt(i,"add",s,s)),this},set(s,i){!e&&!gt(i)&&!tn(i)&&(i=_e(i));const a=_e(this),{has:l,get:u}=bi(a);let f=l.call(a,s);f||(s=_e(s),f=l.call(a,s));const d=u.call(a,s);return a.set(s,i),f?An(i,d)&&Gt(a,"set",s,i):Gt(a,"add",s,i),this},delete(s){const i=_e(this),{has:a,get:l}=bi(i);let u=a.call(i,s);u||(s=_e(s),u=a.call(i,s)),l&&l.call(i,s);const f=i.delete(s);return u&&Gt(i,"delete",s,void 0),f},clear(){const s=_e(this),i=s.size!==0,a=s.clear();return i&&Gt(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Im(s,n,e)}),t}function Al(n,e){const t=wm(n,e);return(r,s,i)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(ve(t,s)&&s in r?t:r,s,i)}const Am={get:Al(!1,!1)},bm={get:Al(!1,!0)},Sm={get:Al(!0,!1)};const Ff=new WeakMap,Uf=new WeakMap,Bf=new WeakMap,Rm=new WeakMap;function Cm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Pm(n){return n.__v_skip||!Object.isExtensible(n)?0:Cm(em(n))}function Io(n){return tn(n)?n:bl(n,!1,vm,Am,Ff)}function Om(n){return bl(n,!1,Tm,bm,Uf)}function Na(n){return bl(n,!0,Em,Sm,Bf)}function bl(n,e,t,r,s){if(!Ae(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=Pm(n);if(i===0)return n;const a=s.get(n);if(a)return a;const l=new Proxy(n,i===2?r:t);return s.set(n,l),l}function Yt(n){return tn(n)?Yt(n.__v_raw):!!(n&&n.__v_isReactive)}function tn(n){return!!(n&&n.__v_isReadonly)}function gt(n){return!!(n&&n.__v_isShallow)}function wo(n){return n?!!n.__v_raw:!1}function _e(n){const e=n&&n.__v_raw;return e?_e(e):n}function Sl(n){return!ve(n,"__v_skip")&&Object.isExtensible(n)&&Ef(n,"__v_skip",!0),n}const At=n=>Ae(n)?Io(n):n,Mr=n=>Ae(n)?Na(n):n;function Pe(n){return n?n.__v_isRef===!0:!1}function Ss(n){return km(n,!1)}function km(n,e){return Pe(n)?n:new Dm(n,e)}class Dm{constructor(e,t){this.dep=new wl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:_e(e),this._value=t?e:At(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||gt(e)||tn(e);e=r?e:_e(e),An(e,t)&&(this._rawValue=e,this._value=r?e:At(e),this.dep.trigger())}}function Xn(n){return Pe(n)?n.value:n}const Nm={get:(n,e,t)=>e==="__v_raw"?n:Xn(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return Pe(s)&&!Pe(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function jf(n){return Yt(n)?n:new Proxy(n,Nm)}function Vm(n){const e=re(n)?new Array(n.length):{};for(const t in n)e[t]=Mm(n,t);return e}class xm{constructor(e,t,r){this._object=e,this._key=t,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._raw=_e(e);let s=!0,i=e;if(!re(e)||!yo(String(t)))do s=!wo(i)||gt(i);while(s&&(i=i.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=Xn(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&Pe(this._raw[this._key])){const t=this._object[this._key];if(Pe(t)){t.value=e;return}}this._object[this._key]=e}get dep(){return dm(this._raw,this._key)}}function Mm(n,e,t){return new xm(n,e,t)}class Lm{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new wl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Us-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Te!==this)return Pf(this,!0),!0}get value(){const e=this.dep.track();return Df(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Fm(n,e,t=!1){let r,s;return le(n)?r=n:(r=n.get,s=n.set),new Lm(r,s,t)}const Ri={},Gi=new WeakMap;let Qn;function Um(n,e=!1,t=Qn){if(t){let r=Gi.get(t);r||Gi.set(t,r=[]),r.push(n)}}function Bm(n,e,t=Ie){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:u}=t,f=H=>s?H:gt(H)||s===!1||s===0?yn(H,1):yn(H);let d,g,y,R,O=!1,M=!1;if(Pe(n)?(g=()=>n.value,O=gt(n)):Yt(n)?(g=()=>f(n),O=!0):re(n)?(M=!0,O=n.some(H=>Yt(H)||gt(H)),g=()=>n.map(H=>{if(Pe(H))return H.value;if(Yt(H))return f(H);if(le(H))return u?u(H,2):H()})):le(n)?e?g=u?()=>u(n,2):n:g=()=>{if(y){Zt();try{y()}finally{en()}}const H=Qn;Qn=d;try{return u?u(n,3,[R]):n(R)}finally{Qn=H}}:g=xt,e&&s){const H=g,se=s===!0?1/0:s;g=()=>yn(H(),se)}const L=Sf(),W=()=>{d.stop(),L&&L.active&&_l(L.effects,d)};if(i&&e){const H=e;e=(...se)=>{H(...se),W()}}let K=M?new Array(n.length).fill(Ri):Ri;const G=H=>{if(!(!(d.flags&1)||!d.dirty&&!H))if(e){const se=d.run();if(s||O||(M?se.some((ye,I)=>An(ye,K[I])):An(se,K))){y&&y();const ye=Qn;Qn=d;try{const I=[se,K===Ri?void 0:M&&K[0]===Ri?[]:K,R];K=se,u?u(e,3,I):e(...I)}finally{Qn=ye}}}else d.run()};return l&&l(G),d=new Rf(g),d.scheduler=a?()=>a(G,!1):G,R=H=>Um(H,!1,d),y=d.onStop=()=>{const H=Gi.get(d);if(H){if(u)u(H,4);else for(const se of H)se();Gi.delete(d)}},e?r?G(!0):K=d.run():a?a(G.bind(null,!0),!0):d.run(),W.pause=d.pause.bind(d),W.resume=d.resume.bind(d),W.stop=W,W}function yn(n,e=1/0,t){if(e<=0||!Ae(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Pe(n))yn(n.value,e,t);else if(re(n))for(let r=0;r<n.length;r++)yn(n[r],e,t);else if(gf(n)||Sr(n))n.forEach(r=>{yn(r,e,t)});else if(yf(n)){for(const r in n)yn(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&yn(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Js(n,e,t,r){try{return r?n(...r):n()}catch(s){Ao(s,e,t)}}function Ft(n,e,t,r){if(le(n)){const s=Js(n,e,t,r);return s&&mf(s)&&s.catch(i=>{Ao(i,e,t)}),s}if(re(n)){const s=[];for(let i=0;i<n.length;i++)s.push(Ft(n[i],e,t,r));return s}}function Ao(n,e,t,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Ie;if(e){let l=e.parent;const u=e.proxy,f=`https://vuejs.org/error-reference/#runtime-${t}`;for(;l;){const d=l.ec;if(d){for(let g=0;g<d.length;g++)if(d[g](n,u,f)===!1)return}l=l.parent}if(i){Zt(),Js(i,null,10,[n,u,f]),en();return}}jm(n,t,s,r,a)}function jm(n,e,t,r=!0,s=!1){if(s)throw n;console.error(n)}const at=[];let Ct=-1;const Rr=[];let mn=null,Er=0;const $f=Promise.resolve();let Qi=null;function qf(n){const e=Qi||$f;return n?e.then(this?n.bind(this):n):e}function $m(n){let e=Ct+1,t=at.length;for(;e<t;){const r=e+t>>>1,s=at[r],i=js(s);i<n||i===n&&s.flags&2?e=r+1:t=r}return e}function Rl(n){if(!(n.flags&1)){const e=js(n),t=at[at.length-1];!t||!(n.flags&2)&&e>=js(t)?at.push(n):at.splice($m(e),0,n),n.flags|=1,Hf()}}function Hf(){Qi||(Qi=$f.then(Wf))}function qm(n){re(n)?Rr.push(...n):mn&&n.id===-1?mn.splice(Er+1,0,n):n.flags&1||(Rr.push(n),n.flags|=1),Hf()}function uu(n,e,t=Ct+1){for(;t<at.length;t++){const r=at[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;at.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function zf(n){if(Rr.length){const e=[...new Set(Rr)].sort((t,r)=>js(t)-js(r));if(Rr.length=0,mn){mn.push(...e);return}for(mn=e,Er=0;Er<mn.length;Er++){const t=mn[Er];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}mn=null,Er=0}}const js=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Wf(n){try{for(Ct=0;Ct<at.length;Ct++){const e=at[Ct];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Js(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ct<at.length;Ct++){const e=at[Ct];e&&(e.flags&=-2)}Ct=-1,at.length=0,zf(),Qi=null,(at.length||Rr.length)&&Wf()}}let Vt=null,Kf=null;function Ji(n){const e=Vt;return Vt=n,Kf=n&&n.type.__scopeId||null,e}function Hm(n,e=Vt,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&Eu(-1);const i=Ji(e);let a;try{a=n(...s)}finally{Ji(i),r._d&&Eu(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Kn(n,e,t,r){const s=n.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let u=l.dir[r];u&&(Zt(),Ft(u,t,8,[n.el,l,n,e]),en())}}const zm=Symbol("_vte"),Wm=n=>n.__isTeleport,Km=Symbol("_leaveCb");function Cl(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Cl(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Gm(n,e){return le(n)?nt({name:n.name},e,{setup:n}):n}function Gf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const Xi=new WeakMap;function Rs(n,e,t,r,s=!1){if(re(n)){n.forEach((O,M)=>Rs(O,e&&(re(e)?e[M]:e),t,r,s));return}if(Cs(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Rs(n,e,t,r.component.subTree);return}const i=r.shapeFlag&4?Dl(r.component):r.el,a=s?null:i,{i:l,r:u}=n,f=e&&e.r,d=l.refs===Ie?l.refs={}:l.refs,g=l.setupState,y=_e(g),R=g===Ie?pf:O=>ve(y,O);if(f!=null&&f!==u){if(hu(e),xe(f))d[f]=null,R(f)&&(g[f]=null);else if(Pe(f)){f.value=null;const O=e;O.k&&(d[O.k]=null)}}if(le(u))Js(u,l,12,[a,d]);else{const O=xe(u),M=Pe(u);if(O||M){const L=()=>{if(n.f){const W=O?R(u)?g[u]:d[u]:u.value;if(s)re(W)&&_l(W,i);else if(re(W))W.includes(i)||W.push(i);else if(O)d[u]=[i],R(u)&&(g[u]=d[u]);else{const K=[i];u.value=K,n.k&&(d[n.k]=K)}}else O?(d[u]=a,R(u)&&(g[u]=a)):M&&(u.value=a,n.k&&(d[n.k]=a))};if(a){const W=()=>{L(),Xi.delete(n)};W.id=-1,Xi.set(n,W),ft(W,t)}else hu(n),L()}}}function hu(n){const e=Xi.get(n);e&&(e.flags|=8,Xi.delete(n))}Eo().requestIdleCallback;Eo().cancelIdleCallback;const Cs=n=>!!n.type.__asyncLoader,Qf=n=>n.type.__isKeepAlive;function Qm(n,e){Jf(n,"a",e)}function Jm(n,e){Jf(n,"da",e)}function Jf(n,e,t=lt){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(bo(e,r,t),t){let s=t.parent;for(;s&&s.parent;)Qf(s.parent.vnode)&&Xm(r,e,t,s),s=s.parent}}function Xm(n,e,t,r){const s=bo(e,n,r,!0);Yf(()=>{_l(r[e],s)},t)}function bo(n,e,t=lt,r=!1){if(t){const s=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...a)=>{Zt();const l=Xs(t),u=Ft(e,t,n,a);return l(),en(),u});return r?s.unshift(i):s.push(i),i}}const on=n=>(e,t=lt)=>{(!qs||n==="sp")&&bo(n,(...r)=>e(...r),t)},Ym=on("bm"),Xf=on("m"),Zm=on("bu"),e_=on("u"),t_=on("bum"),Yf=on("um"),n_=on("sp"),r_=on("rtg"),s_=on("rtc");function i_(n,e=lt){bo("ec",n,e)}const o_=Symbol.for("v-ndc");function a_(n,e,t,r){let s;const i=t,a=re(n);if(a||xe(n)){const l=a&&Yt(n);let u=!1,f=!1;l&&(u=!gt(n),f=tn(n),n=To(n)),s=new Array(n.length);for(let d=0,g=n.length;d<g;d++)s[d]=e(u?f?Mr(At(n[d])):At(n[d]):n[d],d,void 0,i)}else if(typeof n=="number"){s=new Array(n);for(let l=0;l<n;l++)s[l]=e(l+1,l,void 0,i)}else if(Ae(n))if(n[Symbol.iterator])s=Array.from(n,(l,u)=>e(l,u,void 0,i));else{const l=Object.keys(n);s=new Array(l.length);for(let u=0,f=l.length;u<f;u++){const d=l[u];s[u]=e(n[d],d,u,i)}}else s=[];return s}const Va=n=>n?vd(n)?Dl(n):Va(n.parent):null,Ps=nt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Va(n.parent),$root:n=>Va(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>ed(n),$forceUpdate:n=>n.f||(n.f=()=>{Rl(n.update)}),$nextTick:n=>n.n||(n.n=qf.bind(n.proxy)),$watch:n=>E_.bind(n)}),fa=(n,e)=>n!==Ie&&!n.__isScriptSetup&&ve(n,e),l_={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:u}=n;if(e[0]!=="$"){const y=a[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return i[e]}else{if(fa(r,e))return a[e]=1,r[e];if(s!==Ie&&ve(s,e))return a[e]=2,s[e];if(ve(i,e))return a[e]=3,i[e];if(t!==Ie&&ve(t,e))return a[e]=4,t[e];xa&&(a[e]=0)}}const f=Ps[e];let d,g;if(f)return e==="$attrs"&&et(n.attrs,"get",""),f(n);if((d=l.__cssModules)&&(d=d[e]))return d;if(t!==Ie&&ve(t,e))return a[e]=4,t[e];if(g=u.config.globalProperties,ve(g,e))return g[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:i}=n;return fa(s,e)?(s[e]=t,!0):r!==Ie&&ve(r,e)?(r[e]=t,!0):ve(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,props:i,type:a}},l){let u;return!!(t[l]||n!==Ie&&l[0]!=="$"&&ve(n,l)||fa(e,l)||ve(i,l)||ve(r,l)||ve(Ps,l)||ve(s.config.globalProperties,l)||(u=a.__cssModules)&&u[l])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ve(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function fu(n){return re(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let xa=!0;function c_(n){const e=ed(n),t=n.proxy,r=n.ctx;xa=!1,e.beforeCreate&&du(e.beforeCreate,n,"bc");const{data:s,computed:i,methods:a,watch:l,provide:u,inject:f,created:d,beforeMount:g,mounted:y,beforeUpdate:R,updated:O,activated:M,deactivated:L,beforeDestroy:W,beforeUnmount:K,destroyed:G,unmounted:H,render:se,renderTracked:ye,renderTriggered:I,errorCaptured:m,serverPrefetch:_,expose:T,inheritAttrs:w,components:b,directives:E,filters:st}=e;if(f&&u_(f,r,null),a)for(const oe in a){const ge=a[oe];le(ge)&&(r[oe]=ge.bind(t))}if(s){const oe=s.call(t,t);Ae(oe)&&(n.data=Io(oe))}if(xa=!0,i)for(const oe in i){const ge=i[oe],yt=le(ge)?ge.bind(t,t):le(ge.get)?ge.get.bind(t,t):xt,Bn=!le(ge)&&le(ge.set)?ge.set.bind(t):xt,$t=Td({get:yt,set:Bn});Object.defineProperty(r,oe,{enumerable:!0,configurable:!0,get:()=>$t.value,set:Me=>$t.value=Me})}if(l)for(const oe in l)Zf(l[oe],r,t,oe);if(u){const oe=le(u)?u.call(t):u;Reflect.ownKeys(oe).forEach(ge=>{m_(ge,oe[ge])})}d&&du(d,n,"c");function be(oe,ge){re(ge)?ge.forEach(yt=>oe(yt.bind(t))):ge&&oe(ge.bind(t))}if(be(Ym,g),be(Xf,y),be(Zm,R),be(e_,O),be(Qm,M),be(Jm,L),be(i_,m),be(s_,ye),be(r_,I),be(t_,K),be(Yf,H),be(n_,_),re(T))if(T.length){const oe=n.exposed||(n.exposed={});T.forEach(ge=>{Object.defineProperty(oe,ge,{get:()=>t[ge],set:yt=>t[ge]=yt,enumerable:!0})})}else n.exposed||(n.exposed={});se&&n.render===xt&&(n.render=se),w!=null&&(n.inheritAttrs=w),b&&(n.components=b),E&&(n.directives=E),_&&Gf(n)}function u_(n,e,t=xt){re(n)&&(n=Ma(n));for(const r in n){const s=n[r];let i;Ae(s)?"default"in s?i=Os(s.from||r,s.default,!0):i=Os(s.from||r):i=Os(s),Pe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function du(n,e,t){Ft(re(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function Zf(n,e,t,r){let s=r.includes(".")?rd(t,r):()=>t[r];if(xe(n)){const i=e[n];le(i)&&Vi(s,i)}else if(le(n))Vi(s,n.bind(t));else if(Ae(n))if(re(n))n.forEach(i=>Zf(i,e,t,r));else{const i=le(n.handler)?n.handler.bind(t):e[n.handler];le(i)&&Vi(s,i,n)}}function ed(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=n.appContext,l=i.get(e);let u;return l?u=l:!s.length&&!t&&!r?u=e:(u={},s.length&&s.forEach(f=>Yi(u,f,a,!0)),Yi(u,e,a)),Ae(e)&&i.set(e,u),u}function Yi(n,e,t,r=!1){const{mixins:s,extends:i}=e;i&&Yi(n,i,t,!0),s&&s.forEach(a=>Yi(n,a,t,!0));for(const a in e)if(!(r&&a==="expose")){const l=h_[a]||t&&t[a];n[a]=l?l(n[a],e[a]):e[a]}return n}const h_={data:pu,props:gu,emits:gu,methods:ys,computed:ys,beforeCreate:ot,created:ot,beforeMount:ot,mounted:ot,beforeUpdate:ot,updated:ot,beforeDestroy:ot,beforeUnmount:ot,destroyed:ot,unmounted:ot,activated:ot,deactivated:ot,errorCaptured:ot,serverPrefetch:ot,components:ys,directives:ys,watch:d_,provide:pu,inject:f_};function pu(n,e){return e?n?function(){return nt(le(n)?n.call(this,this):n,le(e)?e.call(this,this):e)}:e:n}function f_(n,e){return ys(Ma(n),Ma(e))}function Ma(n){if(re(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function ot(n,e){return n?[...new Set([].concat(n,e))]:e}function ys(n,e){return n?nt(Object.create(null),n,e):e}function gu(n,e){return n?re(n)&&re(e)?[...new Set([...n,...e])]:nt(Object.create(null),fu(n),fu(e??{})):e}function d_(n,e){if(!n)return e;if(!e)return n;const t=nt(Object.create(null),n);for(const r in e)t[r]=ot(n[r],e[r]);return t}function td(){return{app:null,config:{isNativeTag:pf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let p_=0;function g_(n,e){return function(r,s=null){le(r)||(r=nt({},r)),s!=null&&!Ae(s)&&(s=null);const i=td(),a=new WeakSet,l=[];let u=!1;const f=i.app={_uid:p_++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Z_,get config(){return i.config},set config(d){},use(d,...g){return a.has(d)||(d&&le(d.install)?(a.add(d),d.install(f,...g)):le(d)&&(a.add(d),d(f,...g))),f},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),f},component(d,g){return g?(i.components[d]=g,f):i.components[d]},directive(d,g){return g?(i.directives[d]=g,f):i.directives[d]},mount(d,g,y){if(!u){const R=f._ceVNode||nr(r,s);return R.appContext=i,y===!0?y="svg":y===!1&&(y=void 0),n(R,d,y),u=!0,f._container=d,d.__vue_app__=f,Dl(R.component)}},onUnmount(d){l.push(d)},unmount(){u&&(Ft(l,f._instance,16),n(null,f._container),delete f._container.__vue_app__)},provide(d,g){return i.provides[d]=g,f},runWithContext(d){const g=tr;tr=f;try{return d()}finally{tr=g}}};return f}}let tr=null;function m_(n,e){if(lt){let t=lt.provides;const r=lt.parent&&lt.parent.provides;r===t&&(t=lt.provides=Object.create(r)),t[n]=e}}function Os(n,e,t=!1){const r=yd();if(r||tr){let s=tr?tr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&le(e)?e.call(r&&r.proxy):e}}function __(){return!!(yd()||tr)}const y_=Symbol.for("v-scx"),v_=()=>Os(y_);function Vi(n,e,t){return nd(n,e,t)}function nd(n,e,t=Ie){const{immediate:r,deep:s,flush:i,once:a}=t,l=nt({},t),u=e&&r||!e&&i!=="post";let f;if(qs){if(i==="sync"){const R=v_();f=R.__watcherHandles||(R.__watcherHandles=[])}else if(!u){const R=()=>{};return R.stop=xt,R.resume=xt,R.pause=xt,R}}const d=lt;l.call=(R,O,M)=>Ft(R,d,O,M);let g=!1;i==="post"?l.scheduler=R=>{ft(R,d&&d.suspense)}:i!=="sync"&&(g=!0,l.scheduler=(R,O)=>{O?R():Rl(R)}),l.augmentJob=R=>{e&&(R.flags|=4),g&&(R.flags|=2,d&&(R.id=d.uid,R.i=d))};const y=Bm(n,e,l);return qs&&(f?f.push(y):u&&y()),y}function E_(n,e,t){const r=this.proxy,s=xe(n)?n.includes(".")?rd(r,n):()=>r[n]:n.bind(r,r);let i;le(e)?i=e:(i=e.handler,t=e);const a=Xs(this),l=nd(s,i.bind(r),t);return a(),l}function rd(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const T_=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${kn(e)}Modifiers`]||n[`${ur(e)}Modifiers`];function I_(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||Ie;let s=t;const i=e.startsWith("update:"),a=i&&T_(r,e.slice(7));a&&(a.trim&&(s=t.map(d=>xe(d)?d.trim():d)),a.number&&(s=t.map(rm)));let l,u=r[l=oa(e)]||r[l=oa(kn(e))];!u&&i&&(u=r[l=oa(ur(e))]),u&&Ft(u,n,6,s);const f=r[l+"Once"];if(f){if(!n.emitted)n.emitted={};else if(n.emitted[l])return;n.emitted[l]=!0,Ft(f,n,6,s)}}const w_=new WeakMap;function sd(n,e,t=!1){const r=t?w_:e.emitsCache,s=r.get(n);if(s!==void 0)return s;const i=n.emits;let a={},l=!1;if(!le(n)){const u=f=>{const d=sd(f,e,!0);d&&(l=!0,nt(a,d))};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}return!i&&!l?(Ae(n)&&r.set(n,null),null):(re(i)?i.forEach(u=>a[u]=null):nt(a,i),Ae(n)&&r.set(n,a),a)}function So(n,e){return!n||!mo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ve(n,e[0].toLowerCase()+e.slice(1))||ve(n,ur(e))||ve(n,e))}function mu(n){const{type:e,vnode:t,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:u,render:f,renderCache:d,props:g,data:y,setupState:R,ctx:O,inheritAttrs:M}=n,L=Ji(n);let W,K;try{if(t.shapeFlag&4){const H=s||r,se=H;W=kt(f.call(se,H,d,g,R,y,O)),K=l}else{const H=e;W=kt(H.length>1?H(g,{attrs:l,slots:a,emit:u}):H(g,null)),K=e.props?l:A_(l)}}catch(H){ks.length=0,Ao(H,n,1),W=nr(Lr)}let G=W;if(K&&M!==!1){const H=Object.keys(K),{shapeFlag:se}=G;H.length&&se&7&&(i&&H.some(ml)&&(K=b_(K,i)),G=Fr(G,K,!1,!0))}return t.dirs&&(G=Fr(G,null,!1,!0),G.dirs=G.dirs?G.dirs.concat(t.dirs):t.dirs),t.transition&&Cl(G,t.transition),W=G,Ji(L),W}const A_=n=>{let e;for(const t in n)(t==="class"||t==="style"||mo(t))&&((e||(e={}))[t]=n[t]);return e},b_=(n,e)=>{const t={};for(const r in n)(!ml(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function S_(n,e,t){const{props:r,children:s,component:i}=n,{props:a,children:l,patchFlag:u}=e,f=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&u>=0){if(u&1024)return!0;if(u&16)return r?_u(r,a,f):!!a;if(u&8){const d=e.dynamicProps;for(let g=0;g<d.length;g++){const y=d[g];if(a[y]!==r[y]&&!So(f,y))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?_u(r,a,f):!0:!!a;return!1}function _u(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==n[i]&&!So(t,i))return!0}return!1}function R_({vnode:n,parent:e},t){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.el=n.el),r===n)(n=e.vnode).el=t,e=e.parent;else break}}const id={},od=()=>Object.create(id),ad=n=>Object.getPrototypeOf(n)===id;function C_(n,e,t,r=!1){const s={},i=od();n.propsDefaults=Object.create(null),ld(n,e,s,i);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=r?s:Om(s):n.type.props?n.props=s:n.props=i,n.attrs=i}function P_(n,e,t,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=n,l=_e(s),[u]=n.propsOptions;let f=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=n.vnode.dynamicProps;for(let g=0;g<d.length;g++){let y=d[g];if(So(n.emitsOptions,y))continue;const R=e[y];if(u)if(ve(i,y))R!==i[y]&&(i[y]=R,f=!0);else{const O=kn(y);s[O]=La(u,l,O,R,n,!1)}else R!==i[y]&&(i[y]=R,f=!0)}}}else{ld(n,e,s,i)&&(f=!0);let d;for(const g in l)(!e||!ve(e,g)&&((d=ur(g))===g||!ve(e,d)))&&(u?t&&(t[g]!==void 0||t[d]!==void 0)&&(s[g]=La(u,l,g,void 0,n,!0)):delete s[g]);if(i!==l)for(const g in i)(!e||!ve(e,g))&&(delete i[g],f=!0)}f&&Gt(n.attrs,"set","")}function ld(n,e,t,r){const[s,i]=n.propsOptions;let a=!1,l;if(e)for(let u in e){if(ws(u))continue;const f=e[u];let d;s&&ve(s,d=kn(u))?!i||!i.includes(d)?t[d]=f:(l||(l={}))[d]=f:So(n.emitsOptions,u)||(!(u in r)||f!==r[u])&&(r[u]=f,a=!0)}if(i){const u=_e(t),f=l||Ie;for(let d=0;d<i.length;d++){const g=i[d];t[g]=La(s,u,g,f[g],n,!ve(f,g))}}return a}function La(n,e,t,r,s,i){const a=n[t];if(a!=null){const l=ve(a,"default");if(l&&r===void 0){const u=a.default;if(a.type!==Function&&!a.skipFactory&&le(u)){const{propsDefaults:f}=s;if(t in f)r=f[t];else{const d=Xs(s);r=f[t]=u.call(null,e),d()}}else r=u;s.ce&&s.ce._setProp(t,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===ur(t))&&(r=!0))}return r}const O_=new WeakMap;function cd(n,e,t=!1){const r=t?O_:e.propsCache,s=r.get(n);if(s)return s;const i=n.props,a={},l=[];let u=!1;if(!le(n)){const d=g=>{u=!0;const[y,R]=cd(g,e,!0);nt(a,y),R&&l.push(...R)};!t&&e.mixins.length&&e.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!i&&!u)return Ae(n)&&r.set(n,br),br;if(re(i))for(let d=0;d<i.length;d++){const g=kn(i[d]);yu(g)&&(a[g]=Ie)}else if(i)for(const d in i){const g=kn(d);if(yu(g)){const y=i[d],R=a[g]=re(y)||le(y)?{type:y}:nt({},y),O=R.type;let M=!1,L=!0;if(re(O))for(let W=0;W<O.length;++W){const K=O[W],G=le(K)&&K.name;if(G==="Boolean"){M=!0;break}else G==="String"&&(L=!1)}else M=le(O)&&O.name==="Boolean";R[0]=M,R[1]=L,(M||ve(R,"default"))&&l.push(g)}}const f=[a,l];return Ae(n)&&r.set(n,f),f}function yu(n){return n[0]!=="$"&&!ws(n)}const Pl=n=>n==="_"||n==="_ctx"||n==="$stable",Ol=n=>re(n)?n.map(kt):[kt(n)],k_=(n,e,t)=>{if(e._n)return e;const r=Hm((...s)=>Ol(e(...s)),t);return r._c=!1,r},ud=(n,e,t)=>{const r=n._ctx;for(const s in n){if(Pl(s))continue;const i=n[s];if(le(i))e[s]=k_(s,i,r);else if(i!=null){const a=Ol(i);e[s]=()=>a}}},hd=(n,e)=>{const t=Ol(e);n.slots.default=()=>t},fd=(n,e,t)=>{for(const r in e)(t||!Pl(r))&&(n[r]=e[r])},D_=(n,e,t)=>{const r=n.slots=od();if(n.vnode.shapeFlag&32){const s=e._;s?(fd(r,e,t),t&&Ef(r,"_",s,!0)):ud(e,r)}else e&&hd(n,e)},N_=(n,e,t)=>{const{vnode:r,slots:s}=n;let i=!0,a=Ie;if(r.shapeFlag&32){const l=e._;l?t&&l===1?i=!1:fd(s,e,t):(i=!e.$stable,ud(e,s)),a=e}else e&&(hd(n,e),a={default:1});if(i)for(const l in s)!Pl(l)&&a[l]==null&&delete s[l]},ft=F_;function V_(n){return x_(n)}function x_(n,e){const t=Eo();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:u,setText:f,setElementText:d,parentNode:g,nextSibling:y,setScopeId:R=xt,insertStaticContent:O}=n,M=(v,A,P,x=null,D=null,N=null,$=void 0,U=null,F=!!A.dynamicChildren)=>{if(v===A)return;v&&!_s(v,A)&&(x=qt(v),Me(v,D,N,!0),v=null),A.patchFlag===-2&&(F=!1,A.dynamicChildren=null);const{type:V,ref:X,shapeFlag:q}=A;switch(V){case Ro:L(v,A,P,x);break;case Lr:W(v,A,P,x);break;case pa:v==null&&K(A,P,x,$);break;case Ot:b(v,A,P,x,D,N,$,U,F);break;default:q&1?se(v,A,P,x,D,N,$,U,F):q&6?E(v,A,P,x,D,N,$,U,F):(q&64||q&128)&&V.process(v,A,P,x,D,N,$,U,F,St)}X!=null&&D?Rs(X,v&&v.ref,N,A||v,!A):X==null&&v&&v.ref!=null&&Rs(v.ref,null,N,v,!0)},L=(v,A,P,x)=>{if(v==null)r(A.el=l(A.children),P,x);else{const D=A.el=v.el;A.children!==v.children&&f(D,A.children)}},W=(v,A,P,x)=>{v==null?r(A.el=u(A.children||""),P,x):A.el=v.el},K=(v,A,P,x)=>{[v.el,v.anchor]=O(v.children,A,P,x,v.el,v.anchor)},G=({el:v,anchor:A},P,x)=>{let D;for(;v&&v!==A;)D=y(v),r(v,P,x),v=D;r(A,P,x)},H=({el:v,anchor:A})=>{let P;for(;v&&v!==A;)P=y(v),s(v),v=P;s(A)},se=(v,A,P,x,D,N,$,U,F)=>{if(A.type==="svg"?$="svg":A.type==="math"&&($="mathml"),v==null)ye(A,P,x,D,N,$,U,F);else{const V=v.el&&v.el._isVueCE?v.el:null;try{V&&V._beginPatch(),_(v,A,D,N,$,U,F)}finally{V&&V._endPatch()}}},ye=(v,A,P,x,D,N,$,U)=>{let F,V;const{props:X,shapeFlag:q,transition:Q,dirs:ee}=v;if(F=v.el=a(v.type,N,X&&X.is,X),q&8?d(F,v.children):q&16&&m(v.children,F,null,x,D,da(v,N),$,U),ee&&Kn(v,null,x,"created"),I(F,v,v.scopeId,$,x),X){for(const ae in X)ae!=="value"&&!ws(ae)&&i(F,ae,null,X[ae],N,x);"value"in X&&i(F,"value",null,X.value,N),(V=X.onVnodeBeforeMount)&&Rt(V,x,v)}ee&&Kn(v,null,x,"beforeMount");const Y=M_(D,Q);Y&&Q.beforeEnter(F),r(F,A,P),((V=X&&X.onVnodeMounted)||Y||ee)&&ft(()=>{V&&Rt(V,x,v),Y&&Q.enter(F),ee&&Kn(v,null,x,"mounted")},D)},I=(v,A,P,x,D)=>{if(P&&R(v,P),x)for(let N=0;N<x.length;N++)R(v,x[N]);if(D){let N=D.subTree;if(A===N||gd(N.type)&&(N.ssContent===A||N.ssFallback===A)){const $=D.vnode;I(v,$,$.scopeId,$.slotScopeIds,D.parent)}}},m=(v,A,P,x,D,N,$,U,F=0)=>{for(let V=F;V<v.length;V++){const X=v[V]=U?_n(v[V]):kt(v[V]);M(null,X,A,P,x,D,N,$,U)}},_=(v,A,P,x,D,N,$)=>{const U=A.el=v.el;let{patchFlag:F,dynamicChildren:V,dirs:X}=A;F|=v.patchFlag&16;const q=v.props||Ie,Q=A.props||Ie;let ee;if(P&&Gn(P,!1),(ee=Q.onVnodeBeforeUpdate)&&Rt(ee,P,A,v),X&&Kn(A,v,P,"beforeUpdate"),P&&Gn(P,!0),(q.innerHTML&&Q.innerHTML==null||q.textContent&&Q.textContent==null)&&d(U,""),V?T(v.dynamicChildren,V,U,P,x,da(A,D),N):$||ge(v,A,U,null,P,x,da(A,D),N,!1),F>0){if(F&16)w(U,q,Q,P,D);else if(F&2&&q.class!==Q.class&&i(U,"class",null,Q.class,D),F&4&&i(U,"style",q.style,Q.style,D),F&8){const Y=A.dynamicProps;for(let ae=0;ae<Y.length;ae++){const he=Y[ae],$e=q[he],qe=Q[he];(qe!==$e||he==="value")&&i(U,he,$e,qe,D,P)}}F&1&&v.children!==A.children&&d(U,A.children)}else!$&&V==null&&w(U,q,Q,P,D);((ee=Q.onVnodeUpdated)||X)&&ft(()=>{ee&&Rt(ee,P,A,v),X&&Kn(A,v,P,"updated")},x)},T=(v,A,P,x,D,N,$)=>{for(let U=0;U<A.length;U++){const F=v[U],V=A[U],X=F.el&&(F.type===Ot||!_s(F,V)||F.shapeFlag&198)?g(F.el):P;M(F,V,X,null,x,D,N,$,!0)}},w=(v,A,P,x,D)=>{if(A!==P){if(A!==Ie)for(const N in A)!ws(N)&&!(N in P)&&i(v,N,A[N],null,D,x);for(const N in P){if(ws(N))continue;const $=P[N],U=A[N];$!==U&&N!=="value"&&i(v,N,U,$,D,x)}"value"in P&&i(v,"value",A.value,P.value,D)}},b=(v,A,P,x,D,N,$,U,F)=>{const V=A.el=v?v.el:l(""),X=A.anchor=v?v.anchor:l("");let{patchFlag:q,dynamicChildren:Q,slotScopeIds:ee}=A;ee&&(U=U?U.concat(ee):ee),v==null?(r(V,P,x),r(X,P,x),m(A.children||[],P,X,D,N,$,U,F)):q>0&&q&64&&Q&&v.dynamicChildren?(T(v.dynamicChildren,Q,P,D,N,$,U),(A.key!=null||D&&A===D.subTree)&&dd(v,A,!0)):ge(v,A,P,X,D,N,$,U,F)},E=(v,A,P,x,D,N,$,U,F)=>{A.slotScopeIds=U,v==null?A.shapeFlag&512?D.ctx.activate(A,P,x,$,F):st(A,P,x,D,N,$,F):bt(v,A,F)},st=(v,A,P,x,D,N,$)=>{const U=v.component=K_(v,x,D);if(Qf(v)&&(U.ctx.renderer=St),G_(U,!1,$),U.asyncDep){if(D&&D.registerDep(U,be,$),!v.el){const F=U.subTree=nr(Lr);W(null,F,A,P),v.placeholder=F.el}}else be(U,v,A,P,D,N,$)},bt=(v,A,P)=>{const x=A.component=v.component;if(S_(v,A,P))if(x.asyncDep&&!x.asyncResolved){oe(x,A,P);return}else x.next=A,x.update();else A.el=v.el,x.vnode=A},be=(v,A,P,x,D,N,$)=>{const U=()=>{if(v.isMounted){let{next:q,bu:Q,u:ee,parent:Y,vnode:ae}=v;{const Ge=pd(v);if(Ge){q&&(q.el=ae.el,oe(v,q,$)),Ge.asyncDep.then(()=>{v.isUnmounted||U()});return}}let he=q,$e;Gn(v,!1),q?(q.el=ae.el,oe(v,q,$)):q=ae,Q&&aa(Q),($e=q.props&&q.props.onVnodeBeforeUpdate)&&Rt($e,Y,q,ae),Gn(v,!0);const qe=mu(v),mt=v.subTree;v.subTree=qe,M(mt,qe,g(mt.el),qt(mt),v,D,N),q.el=qe.el,he===null&&R_(v,qe.el),ee&&ft(ee,D),($e=q.props&&q.props.onVnodeUpdated)&&ft(()=>Rt($e,Y,q,ae),D)}else{let q;const{el:Q,props:ee}=A,{bm:Y,m:ae,parent:he,root:$e,type:qe}=v,mt=Cs(A);Gn(v,!1),Y&&aa(Y),!mt&&(q=ee&&ee.onVnodeBeforeMount)&&Rt(q,he,A),Gn(v,!0);{$e.ce&&$e.ce._def.shadowRoot!==!1&&$e.ce._injectChildStyle(qe);const Ge=v.subTree=mu(v);M(null,Ge,P,x,v,D,N),A.el=Ge.el}if(ae&&ft(ae,D),!mt&&(q=ee&&ee.onVnodeMounted)){const Ge=A;ft(()=>Rt(q,he,Ge),D)}(A.shapeFlag&256||he&&Cs(he.vnode)&&he.vnode.shapeFlag&256)&&v.a&&ft(v.a,D),v.isMounted=!0,A=P=x=null}};v.scope.on();const F=v.effect=new Rf(U);v.scope.off();const V=v.update=F.run.bind(F),X=v.job=F.runIfDirty.bind(F);X.i=v,X.id=v.uid,F.scheduler=()=>Rl(X),Gn(v,!0),V()},oe=(v,A,P)=>{A.component=v;const x=v.vnode.props;v.vnode=A,v.next=null,P_(v,A.props,x,P),N_(v,A.children,P),Zt(),uu(v),en()},ge=(v,A,P,x,D,N,$,U,F=!1)=>{const V=v&&v.children,X=v?v.shapeFlag:0,q=A.children,{patchFlag:Q,shapeFlag:ee}=A;if(Q>0){if(Q&128){Bn(V,q,P,x,D,N,$,U,F);return}else if(Q&256){yt(V,q,P,x,D,N,$,U,F);return}}ee&8?(X&16&&$n(V,D,N),q!==V&&d(P,q)):X&16?ee&16?Bn(V,q,P,x,D,N,$,U,F):$n(V,D,N,!0):(X&8&&d(P,""),ee&16&&m(q,P,x,D,N,$,U,F))},yt=(v,A,P,x,D,N,$,U,F)=>{v=v||br,A=A||br;const V=v.length,X=A.length,q=Math.min(V,X);let Q;for(Q=0;Q<q;Q++){const ee=A[Q]=F?_n(A[Q]):kt(A[Q]);M(v[Q],ee,P,null,D,N,$,U,F)}V>X?$n(v,D,N,!0,!1,q):m(A,P,x,D,N,$,U,F,q)},Bn=(v,A,P,x,D,N,$,U,F)=>{let V=0;const X=A.length;let q=v.length-1,Q=X-1;for(;V<=q&&V<=Q;){const ee=v[V],Y=A[V]=F?_n(A[V]):kt(A[V]);if(_s(ee,Y))M(ee,Y,P,null,D,N,$,U,F);else break;V++}for(;V<=q&&V<=Q;){const ee=v[q],Y=A[Q]=F?_n(A[Q]):kt(A[Q]);if(_s(ee,Y))M(ee,Y,P,null,D,N,$,U,F);else break;q--,Q--}if(V>q){if(V<=Q){const ee=Q+1,Y=ee<X?A[ee].el:x;for(;V<=Q;)M(null,A[V]=F?_n(A[V]):kt(A[V]),P,Y,D,N,$,U,F),V++}}else if(V>Q)for(;V<=q;)Me(v[V],D,N,!0),V++;else{const ee=V,Y=V,ae=new Map;for(V=Y;V<=Q;V++){const He=A[V]=F?_n(A[V]):kt(A[V]);He.key!=null&&ae.set(He.key,V)}let he,$e=0;const qe=Q-Y+1;let mt=!1,Ge=0;const cn=new Array(qe);for(V=0;V<qe;V++)cn[V]=0;for(V=ee;V<=q;V++){const He=v[V];if($e>=qe){Me(He,D,N,!0);continue}let _t;if(He.key!=null)_t=ae.get(He.key);else for(he=Y;he<=Q;he++)if(cn[he-Y]===0&&_s(He,A[he])){_t=he;break}_t===void 0?Me(He,D,N,!0):(cn[_t-Y]=V+1,_t>=Ge?Ge=_t:mt=!0,M(He,A[_t],P,null,D,N,$,U,F),$e++)}const ts=mt?L_(cn):br;for(he=ts.length-1,V=qe-1;V>=0;V--){const He=Y+V,_t=A[He],ci=A[He+1],fr=He+1<X?ci.el||ci.placeholder:x;cn[V]===0?M(null,_t,P,fr,D,N,$,U,F):mt&&(he<0||V!==ts[he]?$t(_t,P,fr,2):he--)}}},$t=(v,A,P,x,D=null)=>{const{el:N,type:$,transition:U,children:F,shapeFlag:V}=v;if(V&6){$t(v.component.subTree,A,P,x);return}if(V&128){v.suspense.move(A,P,x);return}if(V&64){$.move(v,A,P,St);return}if($===Ot){r(N,A,P);for(let q=0;q<F.length;q++)$t(F[q],A,P,x);r(v.anchor,A,P);return}if($===pa){G(v,A,P);return}if(x!==2&&V&1&&U)if(x===0)U.beforeEnter(N),r(N,A,P),ft(()=>U.enter(N),D);else{const{leave:q,delayLeave:Q,afterLeave:ee}=U,Y=()=>{v.ctx.isUnmounted?s(N):r(N,A,P)},ae=()=>{N._isLeaving&&N[Km](!0),q(N,()=>{Y(),ee&&ee()})};Q?Q(N,Y,ae):ae()}else r(N,A,P)},Me=(v,A,P,x=!1,D=!1)=>{const{type:N,props:$,ref:U,children:F,dynamicChildren:V,shapeFlag:X,patchFlag:q,dirs:Q,cacheIndex:ee}=v;if(q===-2&&(D=!1),U!=null&&(Zt(),Rs(U,null,P,v,!0),en()),ee!=null&&(A.renderCache[ee]=void 0),X&256){A.ctx.deactivate(v);return}const Y=X&1&&Q,ae=!Cs(v);let he;if(ae&&(he=$&&$.onVnodeBeforeUnmount)&&Rt(he,A,v),X&6)jn(v.component,P,x);else{if(X&128){v.suspense.unmount(P,x);return}Y&&Kn(v,null,A,"beforeUnmount"),X&64?v.type.remove(v,A,P,St,x):V&&!V.hasOnce&&(N!==Ot||q>0&&q&64)?$n(V,A,P,!1,!0):(N===Ot&&q&384||!D&&X&16)&&$n(F,A,P),x&&Le(v)}(ae&&(he=$&&$.onVnodeUnmounted)||Y)&&ft(()=>{he&&Rt(he,A,v),Y&&Kn(v,null,A,"unmounted")},P)},Le=v=>{const{type:A,el:P,anchor:x,transition:D}=v;if(A===Ot){zo(P,x);return}if(A===pa){H(v);return}const N=()=>{s(P),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(v.shapeFlag&1&&D&&!D.persisted){const{leave:$,delayLeave:U}=D,F=()=>$(P,N);U?U(v.el,N,F):F()}else N()},zo=(v,A)=>{let P;for(;v!==A;)P=y(v),s(v),v=P;s(A)},jn=(v,A,P)=>{const{bum:x,scope:D,job:N,subTree:$,um:U,m:F,a:V}=v;vu(F),vu(V),x&&aa(x),D.stop(),N&&(N.flags|=8,Me($,v,A,P)),U&&ft(U,A),ft(()=>{v.isUnmounted=!0},A)},$n=(v,A,P,x=!1,D=!1,N=0)=>{for(let $=N;$<v.length;$++)Me(v[$],A,P,x,D)},qt=v=>{if(v.shapeFlag&6)return qt(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const A=y(v.anchor||v.el),P=A&&A[zm];return P?y(P):A};let Zr=!1;const li=(v,A,P)=>{v==null?A._vnode&&Me(A._vnode,null,null,!0):M(A._vnode||null,v,A,null,null,null,P),A._vnode=v,Zr||(Zr=!0,uu(),zf(),Zr=!1)},St={p:M,um:Me,m:$t,r:Le,mt:st,mc:m,pc:ge,pbc:T,n:qt,o:n};return{render:li,hydrate:void 0,createApp:g_(li)}}function da({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Gn({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function M_(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function dd(n,e,t=!1){const r=n.children,s=e.children;if(re(r)&&re(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=_n(s[i]),l.el=a.el),!t&&l.patchFlag!==-2&&dd(a,l)),l.type===Ro&&l.patchFlag!==-1&&(l.el=a.el),l.type===Lr&&!l.el&&(l.el=a.el)}}function L_(n){const e=n.slice(),t=[0];let r,s,i,a,l;const u=n.length;for(r=0;r<u;r++){const f=n[r];if(f!==0){if(s=t[t.length-1],n[s]<f){e[r]=s,t.push(r);continue}for(i=0,a=t.length-1;i<a;)l=i+a>>1,n[t[l]]<f?i=l+1:a=l;f<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,a=t[i-1];i-- >0;)t[i]=a,a=e[a];return t}function pd(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:pd(e)}function vu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const gd=n=>n.__isSuspense;function F_(n,e){e&&e.pendingBranch?re(n)?e.effects.push(...n):e.effects.push(n):qm(n)}const Ot=Symbol.for("v-fgt"),Ro=Symbol.for("v-txt"),Lr=Symbol.for("v-cmt"),pa=Symbol.for("v-stc"),ks=[];let dt=null;function gs(n=!1){ks.push(dt=n?null:[])}function U_(){ks.pop(),dt=ks[ks.length-1]||null}let $s=1;function Eu(n,e=!1){$s+=n,n<0&&dt&&e&&(dt.hasOnce=!0)}function B_(n){return n.dynamicChildren=$s>0?dt||br:null,U_(),$s>0&&dt&&dt.push(n),n}function ms(n,e,t,r,s,i){return B_(Fe(n,e,t,r,s,i,!0))}function md(n){return n?n.__v_isVNode===!0:!1}function _s(n,e){return n.type===e.type&&n.key===e.key}const _d=({key:n})=>n??null,xi=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?xe(n)||Pe(n)||le(n)?{i:Vt,r:n,k:e,f:!!t}:n:null);function Fe(n,e=null,t=null,r=0,s=null,i=n===Ot?0:1,a=!1,l=!1){const u={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&_d(e),ref:e&&xi(e),scopeId:Kf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Vt};return l?(kl(u,t),i&128&&n.normalize(u)):t&&(u.shapeFlag|=xe(t)?8:16),$s>0&&!a&&dt&&(u.patchFlag>0||i&6)&&u.patchFlag!==32&&dt.push(u),u}const nr=j_;function j_(n,e=null,t=null,r=0,s=null,i=!1){if((!n||n===o_)&&(n=Lr),md(n)){const l=Fr(n,e,!0);return t&&kl(l,t),$s>0&&!i&&dt&&(l.shapeFlag&6?dt[dt.indexOf(n)]=l:dt.push(l)),l.patchFlag=-2,l}if(Y_(n)&&(n=n.__vccOpts),e){e=$_(e);let{class:l,style:u}=e;l&&!xe(l)&&(e.class=vl(l)),Ae(u)&&(wo(u)&&!re(u)&&(u=nt({},u)),e.style=yl(u))}const a=xe(n)?1:gd(n)?128:Wm(n)?64:Ae(n)?4:le(n)?2:0;return Fe(n,e,t,r,s,a,i,!0)}function $_(n){return n?wo(n)||ad(n)?nt({},n):n:null}function Fr(n,e,t=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:u}=n,f=e?H_(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:n.type,props:f,key:f&&_d(f),ref:e&&e.ref?t&&i?re(i)?i.concat(xi(e)):[i,xi(e)]:xi(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:l,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Ot?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:u,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Fr(n.ssContent),ssFallback:n.ssFallback&&Fr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return u&&r&&Cl(d,u.clone(d)),d}function q_(n=" ",e=0){return nr(Ro,null,n,e)}function kt(n){return n==null||typeof n=="boolean"?nr(Lr):re(n)?nr(Ot,null,n.slice()):md(n)?_n(n):nr(Ro,null,String(n))}function _n(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Fr(n)}function kl(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(re(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),kl(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!ad(e)?e._ctx=Vt:s===3&&Vt&&(Vt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else le(e)?(e={default:e,_ctx:Vt},t=32):(e=String(e),r&64?(t=16,e=[q_(e)]):t=8);n.children=e,n.shapeFlag|=t}function H_(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=vl([e.class,r.class]));else if(s==="style")e.style=yl([e.style,r.style]);else if(mo(s)){const i=e[s],a=r[s];a&&i!==a&&!(re(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function Rt(n,e,t,r=null){Ft(n,e,7,[t,r])}const z_=td();let W_=0;function K_(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||z_,i={uid:W_++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Af(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:cd(r,s),emitsOptions:sd(r,s),emit:null,emitted:null,propsDefaults:Ie,inheritAttrs:r.inheritAttrs,ctx:Ie,data:Ie,props:Ie,attrs:Ie,slots:Ie,refs:Ie,setupState:Ie,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=I_.bind(null,i),n.ce&&n.ce(i),i}let lt=null;const yd=()=>lt||Vt;let Zi,Fa;{const n=Eo(),e=(t,r)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};Zi=e("__VUE_INSTANCE_SETTERS__",t=>lt=t),Fa=e("__VUE_SSR_SETTERS__",t=>qs=t)}const Xs=n=>{const e=lt;return Zi(n),n.scope.on(),()=>{n.scope.off(),Zi(e)}},Tu=()=>{lt&&lt.scope.off(),Zi(null)};function vd(n){return n.vnode.shapeFlag&4}let qs=!1;function G_(n,e=!1,t=!1){e&&Fa(e);const{props:r,children:s}=n.vnode,i=vd(n);C_(n,r,i,e),D_(n,s,t||e);const a=i?Q_(n,e):void 0;return e&&Fa(!1),a}function Q_(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,l_);const{setup:r}=t;if(r){Zt();const s=n.setupContext=r.length>1?X_(n):null,i=Xs(n),a=Js(r,n,0,[n.props,s]),l=mf(a);if(en(),i(),(l||n.sp)&&!Cs(n)&&Gf(n),l){if(a.then(Tu,Tu),e)return a.then(u=>{Iu(n,u)}).catch(u=>{Ao(u,n,0)});n.asyncDep=a}else Iu(n,a)}else Ed(n)}function Iu(n,e,t){le(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Ae(e)&&(n.setupState=jf(e)),Ed(n)}function Ed(n,e,t){const r=n.type;n.render||(n.render=r.render||xt);{const s=Xs(n);Zt();try{c_(n)}finally{en(),s()}}}const J_={get(n,e){return et(n,"get",""),n[e]}};function X_(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,J_),slots:n.slots,emit:n.emit,expose:e}}function Dl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(jf(Sl(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ps)return Ps[t](n)},has(e,t){return t in e||t in Ps}})):n.proxy}function Y_(n){return le(n)&&"__vccOpts"in n}const Td=(n,e)=>Fm(n,e,qs),Z_="3.5.25";/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ua;const wu=typeof window<"u"&&window.trustedTypes;if(wu)try{Ua=wu.createPolicy("vue",{createHTML:n=>n})}catch{}const Id=Ua?n=>Ua.createHTML(n):n=>n,ey="http://www.w3.org/2000/svg",ty="http://www.w3.org/1998/Math/MathML",Kt=typeof document<"u"?document:null,Au=Kt&&Kt.createElement("template"),ny={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e==="svg"?Kt.createElementNS(ey,n):e==="mathml"?Kt.createElementNS(ty,n):t?Kt.createElement(n,{is:t}):Kt.createElement(n);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>Kt.createTextNode(n),createComment:n=>Kt.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Kt.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,i){const a=t?t.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{Au.innerHTML=Id(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const l=Au.content;if(r==="svg"||r==="mathml"){const u=l.firstChild;for(;u.firstChild;)l.appendChild(u.firstChild);l.removeChild(u)}e.insertBefore(l,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},ry=Symbol("_vtc");function sy(n,e,t){const r=n[ry];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const bu=Symbol("_vod"),iy=Symbol("_vsh"),oy=Symbol(""),ay=/(?:^|;)\s*display\s*:/;function ly(n,e,t){const r=n.style,s=xe(t);let i=!1;if(t&&!s){if(e)if(xe(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();t[l]==null&&Mi(r,l,"")}else for(const a in e)t[a]==null&&Mi(r,a,"");for(const a in t)a==="display"&&(i=!0),Mi(r,a,t[a])}else if(s){if(e!==t){const a=r[oy];a&&(t+=";"+a),r.cssText=t,i=ay.test(t)}}else e&&n.removeAttribute("style");bu in n&&(n[bu]=i?r.display:"",n[iy]&&(r.display="none"))}const Su=/\s*!important$/;function Mi(n,e,t){if(re(t))t.forEach(r=>Mi(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=cy(n,e);Su.test(t)?n.setProperty(ur(r),t.replace(Su,""),"important"):n[r]=t}}const Ru=["Webkit","Moz","ms"],ga={};function cy(n,e){const t=ga[e];if(t)return t;let r=kn(e);if(r!=="filter"&&r in n)return ga[e]=r;r=vf(r);for(let s=0;s<Ru.length;s++){const i=Ru[s]+r;if(i in n)return ga[e]=i}return e}const Cu="http://www.w3.org/1999/xlink";function Pu(n,e,t,r,s,i=cm(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Cu,e.slice(6,e.length)):n.setAttributeNS(Cu,e,t):t==null||i&&!Tf(t)?n.removeAttribute(e):n.setAttribute(e,i?"":Un(t)?String(t):t)}function Ou(n,e,t,r,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Id(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?n.getAttribute("value")||"":n.value,u=t==null?n.type==="checkbox"?"on":"":String(t);(l!==u||!("_value"in n))&&(n.value=u),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=Tf(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function uy(n,e,t,r){n.addEventListener(e,t,r)}function hy(n,e,t,r){n.removeEventListener(e,t,r)}const ku=Symbol("_vei");function fy(n,e,t,r,s=null){const i=n[ku]||(n[ku]={}),a=i[e];if(r&&a)a.value=r;else{const[l,u]=dy(e);if(r){const f=i[e]=my(r,s);uy(n,l,f,u)}else a&&(hy(n,l,a,u),i[e]=void 0)}}const Du=/(?:Once|Passive|Capture)$/;function dy(n){let e;if(Du.test(n)){e={};let r;for(;r=n.match(Du);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ur(n.slice(2)),e]}let ma=0;const py=Promise.resolve(),gy=()=>ma||(py.then(()=>ma=0),ma=Date.now());function my(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;Ft(_y(r,t.value),e,5,[r])};return t.value=n,t.attached=gy(),t}function _y(n,e){if(re(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Nu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,yy=(n,e,t,r,s,i)=>{const a=s==="svg";e==="class"?sy(n,r,a):e==="style"?ly(n,t,r):mo(e)?ml(e)||fy(n,e,t,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):vy(n,e,r,a))?(Ou(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Pu(n,e,r,a,i,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!xe(r))?Ou(n,kn(e),r,i,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),Pu(n,e,r,a))};function vy(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&Nu(e)&&le(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Nu(e)&&xe(t)?!1:e in n}const Ey=nt({patchProp:yy},ny);let Vu;function Ty(){return Vu||(Vu=V_(Ey))}const Iy=((...n)=>{const e=Ty().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=Ay(r);if(!s)return;const i=e._component;!le(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,wy(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e});function wy(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Ay(n){return xe(n)?document.querySelector(n):n}/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let wd;const Co=n=>wd=n,Ad=Symbol();function Ba(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var Ds;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Ds||(Ds={}));function by(){const n=bf(!0),e=n.run(()=>Ss({}));let t=[],r=[];const s=Sl({install(i){Co(s),s._a=i,i.provide(Ad,s),i.config.globalProperties.$pinia=s,r.forEach(a=>t.push(a)),r=[]},use(i){return this._a?t.push(i):r.push(i),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return s}const bd=()=>{};function xu(n,e,t,r=bd){n.add(e);const s=()=>{n.delete(e)&&r()};return!t&&Sf()&&um(s),s}function yr(n,...e){n.forEach(t=>{t(...e)})}const Sy=n=>n(),Mu=Symbol(),_a=Symbol();function ja(n,e){n instanceof Map&&e instanceof Map?e.forEach((t,r)=>n.set(r,t)):n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const r=e[t],s=n[t];Ba(s)&&Ba(r)&&n.hasOwnProperty(t)&&!Pe(r)&&!Yt(r)?n[t]=ja(s,r):n[t]=r}return n}const Ry=Symbol();function Cy(n){return!Ba(n)||!Object.prototype.hasOwnProperty.call(n,Ry)}const{assign:pn}=Object;function Py(n){return!!(Pe(n)&&n.effect)}function Oy(n,e,t,r){const{state:s,actions:i,getters:a}=e,l=t.state.value[n];let u;function f(){l||(t.state.value[n]=s?s():{});const d=Vm(t.state.value[n]);return pn(d,i,Object.keys(a||{}).reduce((g,y)=>(g[y]=Sl(Td(()=>{Co(t);const R=t._s.get(n);return a[y].call(R,R)})),g),{}))}return u=Sd(n,f,e,t,r,!0),u}function Sd(n,e,t={},r,s,i){let a;const l=pn({actions:{}},t),u={deep:!0};let f,d,g=new Set,y=new Set,R;const O=r.state.value[n];!i&&!O&&(r.state.value[n]={}),Ss({});let M;function L(m){let _;f=d=!1,typeof m=="function"?(m(r.state.value[n]),_={type:Ds.patchFunction,storeId:n,events:R}):(ja(r.state.value[n],m),_={type:Ds.patchObject,payload:m,storeId:n,events:R});const T=M=Symbol();qf().then(()=>{M===T&&(f=!0)}),d=!0,yr(g,_,r.state.value[n])}const W=i?function(){const{state:_}=t,T=_?_():{};this.$patch(w=>{pn(w,T)})}:bd;function K(){a.stop(),g.clear(),y.clear(),r._s.delete(n)}const G=(m,_="")=>{if(Mu in m)return m[_a]=_,m;const T=function(){Co(r);const w=Array.from(arguments),b=new Set,E=new Set;function st(oe){b.add(oe)}function bt(oe){E.add(oe)}yr(y,{args:w,name:T[_a],store:se,after:st,onError:bt});let be;try{be=m.apply(this&&this.$id===n?this:se,w)}catch(oe){throw yr(E,oe),oe}return be instanceof Promise?be.then(oe=>(yr(b,oe),oe)).catch(oe=>(yr(E,oe),Promise.reject(oe))):(yr(b,be),be)};return T[Mu]=!0,T[_a]=_,T},H={_p:r,$id:n,$onAction:xu.bind(null,y),$patch:L,$reset:W,$subscribe(m,_={}){const T=xu(g,m,_.detached,()=>w()),w=a.run(()=>Vi(()=>r.state.value[n],b=>{(_.flush==="sync"?d:f)&&m({storeId:n,type:Ds.direct,events:R},b)},pn({},u,_)));return T},$dispose:K},se=Io(H);r._s.set(n,se);const I=(r._a&&r._a.runWithContext||Sy)(()=>r._e.run(()=>(a=bf()).run(()=>e({action:G}))));for(const m in I){const _=I[m];if(Pe(_)&&!Py(_)||Yt(_))i||(O&&Cy(_)&&(Pe(_)?_.value=O[m]:ja(_,O[m])),r.state.value[n][m]=_);else if(typeof _=="function"){const T=G(_,m);I[m]=T,l.actions[m]=_}}return pn(se,I),pn(_e(se),I),Object.defineProperty(se,"$state",{get:()=>r.state.value[n],set:m=>{L(_=>{pn(_,m)})}}),r._p.forEach(m=>{pn(se,a.run(()=>m({store:se,app:r._a,pinia:r,options:l})))}),O&&i&&t.hydrate&&t.hydrate(se.$state,O),f=!0,d=!0,se}/*! #__NO_SIDE_EFFECTS__ */function ky(n,e,t){let r;const s=typeof e=="function";r=s?t:e;function i(a,l){const u=__();return a=a||(u?Os(Ad,null):null),a&&Co(a),a=wd,a._s.has(n)||(s?Sd(n,e,r,a):Oy(n,r,a)),a._s.get(n)}return i.$id=n,i}function Dy(n,e){if(n==null)return;let t=n;for(let r=0;r<e.length;r++){if(t===void 0||t[e[r]]===void 0)return;if(t===null||t[e[r]]===null)return null;t=t[e[r]]}return t}function Nl(n,e,t){if(t.length===0)return e;const r=t[0];return t.length>1&&(e=Nl(typeof n!="object"||n===null||!Object.prototype.hasOwnProperty.call(n,r)?Number.isInteger(Number(t[1]))?[]:{}:n[r],e,Array.prototype.slice.call(t,1))),Number.isInteger(Number(r))&&Array.isArray(n)?n.slice()[r]:Object.assign({},n,{[r]:e})}function Rd(n,e){if(n==null||e.length===0)return n;if(e.length===1){if(n==null)return n;if(Number.isInteger(e[0])&&Array.isArray(n))return Array.prototype.slice.call(n,0).splice(e[0],1);const t={};for(const r in n)t[r]=n[r];return delete t[e[0]],t}if(n[e[0]]==null){if(Number.isInteger(e[0])&&Array.isArray(n))return Array.prototype.concat.call([],n);const t={};for(const r in n)t[r]=n[r];return t}return Nl(n,Rd(n[e[0]],Array.prototype.slice.call(e,1)),[e[0]])}function Cd(n,e){return e.map(t=>t.split(".")).map(t=>[t,Dy(n,t)]).filter(t=>t[1]!==void 0).reduce((t,r)=>Nl(t,r[1],r[0]),{})}function Pd(n,e){return e.map(t=>t.split(".")).reduce((t,r)=>Rd(t,r),n)}function Lu(n,{storage:e,serializer:t,key:r,debug:s,pick:i,omit:a,beforeHydrate:l,afterHydrate:u},f,d=!0){try{d&&(l==null||l(f));const g=e.getItem(r);if(g){const y=t.deserialize(g),R=i?Cd(y,i):y,O=a?Pd(R,a):R;n.$patch(O)}d&&(u==null||u(f))}catch(g){s&&console.error("[pinia-plugin-persistedstate]",g)}}function Fu(n,{storage:e,serializer:t,key:r,debug:s,pick:i,omit:a}){try{const l=i?Cd(n,i):n,u=a?Pd(l,a):l,f=t.serialize(u);e.setItem(r,f)}catch(l){s&&console.error("[pinia-plugin-persistedstate]",l)}}function Ny(n,e){return typeof n=="function"?n(e):typeof n=="string"?n:e}function Vy(n,e,t){const{pinia:r,store:s,options:{persist:i=t}}=n;if(!i)return;// v8 ignore if -- @preserve
if(!(s.$id in r.state.value)){const l=r._s.get(s.$id.replace("__hot:",""));l&&Promise.resolve().then(()=>l.$persist());return}const a=(Array.isArray(i)?i:i===!0?[{}]:[i]).map(e);s.$hydrate=({runHooks:l=!0}={})=>{a.forEach(u=>{Lu(s,u,n,l)})},s.$persist=()=>{a.forEach(l=>{Fu(s.$state,l)})},a.forEach(l=>{Lu(s,l,n),s.$subscribe((u,f)=>Fu(f,l),{detached:!0})})}function xy(n={}){return function(e){Vy(e,t=>{const r=Ny(t.key,e.store.$id);return{key:(n.key?n.key:s=>s)(r),debug:t.debug??n.debug??!1,serializer:t.serializer??n.serializer??{serialize:s=>JSON.stringify(s),deserialize:s=>JSON.parse(s)},storage:t.storage??n.storage??window.localStorage,beforeHydrate:t.beforeHydrate??n.beforeHydrate,afterHydrate:t.afterHydrate??n.afterHydrate,pick:t.pick,omit:t.omit}},n.auto??!1)}}var My=xy();const Ly=()=>{};var Uu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Fy=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],l=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},kd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,u=s+2<n.length,f=u?n[s+2]:0,d=i>>2,g=(i&3)<<4|l>>4;let y=(l&15)<<2|f>>6,R=f&63;u||(R=64,a||(y=64)),r.push(t[d],t[g],t[y],t[R])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Od(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Fy(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const f=s<n.length?t[n.charAt(s)]:64;++s;const g=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||f==null||g==null)throw new Uy;const y=i<<2|l>>4;if(r.push(y),f!==64){const R=l<<4&240|f>>2;if(r.push(R),g!==64){const O=f<<6&192|g;r.push(O)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Uy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const By=function(n){const e=Od(n);return kd.encodeByteArray(e,!0)},eo=function(n){return By(n).replace(/\./g,"")},Dd=function(n){try{return kd.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $y=()=>jy().__FIREBASE_DEFAULTS__,qy=()=>{if(typeof process>"u"||typeof Uu>"u")return;const n=Uu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Hy=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Dd(n[1]);return e&&JSON.parse(e)},Po=()=>{try{return Ly()||$y()||qy()||Hy()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Nd=n=>{var e,t;return(t=(e=Po())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},zy=n=>{const e=Nd(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Vd=()=>{var n;return(n=Po())===null||n===void 0?void 0:n.config},xd=n=>{var e;return(e=Po())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Md(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ky(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[eo(JSON.stringify(t)),eo(JSON.stringify(a)),""].join(".")}const Ns={};function Gy(){const n={prod:[],emulator:[]};for(const e of Object.keys(Ns))Ns[e]?n.emulator.push(e):n.prod.push(e);return n}function Qy(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Bu=!1;function Ld(n,e){if(typeof window>"u"||typeof document>"u"||!Kr(window.location.host)||Ns[n]===e||Ns[n]||Bu)return;Ns[n]=e;function t(y){return`__firebase__banner__${y}`}const r="__firebase__banner",i=Gy().prod.length>0;function a(){const y=document.getElementById(r);y&&y.remove()}function l(y){y.style.display="flex",y.style.background="#7faaf0",y.style.position="fixed",y.style.bottom="5px",y.style.left="5px",y.style.padding=".5em",y.style.borderRadius="5px",y.style.alignItems="center"}function u(y,R){y.setAttribute("width","24"),y.setAttribute("id",R),y.setAttribute("height","24"),y.setAttribute("viewBox","0 0 24 24"),y.setAttribute("fill","none"),y.style.marginLeft="-6px"}function f(){const y=document.createElement("span");return y.style.cursor="pointer",y.style.marginLeft="16px",y.style.fontSize="24px",y.innerHTML=" &times;",y.onclick=()=>{Bu=!0,a()},y}function d(y,R){y.setAttribute("id",R),y.innerText="Learn more",y.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",y.setAttribute("target","__blank"),y.style.paddingLeft="5px",y.style.textDecoration="underline"}function g(){const y=Qy(r),R=t("text"),O=document.getElementById(R)||document.createElement("span"),M=t("learnmore"),L=document.getElementById(M)||document.createElement("a"),W=t("preprendIcon"),K=document.getElementById(W)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(y.created){const G=y.element;l(G),d(L,M);const H=f();u(K,W),G.append(K,O,L,H),document.body.appendChild(G)}i?(O.innerText="Preview backend disconnected.",K.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(K.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,O.innerText="Preview backend running in this workspace."),O.setAttribute("id",R)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Jy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rt())}function Xy(){var n;const e=(n=Po())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Yy(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Zy(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ev(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tv(){const n=rt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function nv(){return!Xy()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function rv(){try{return typeof indexedDB=="object"}catch{return!1}}function sv(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv="FirebaseError";class an extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=iv,Object.setPrototypeOf(this,an.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ys.prototype.create)}}class Ys{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?ov(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new an(s,l,r)}}function ov(n,e){return n.replace(av,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const av=/\{\$([^}]+)}/g;function lv(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function or(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(ju(i)&&ju(a)){if(!or(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function ju(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function cv(n,e){const t=new uv(n,e);return t.subscribe.bind(t)}class uv{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");hv(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=ya),s.error===void 0&&(s.error=ya),s.complete===void 0&&(s.complete=ya);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hv(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ya(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(n){return n&&n._delegate?n._delegate:n}class ar{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Wy;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pv(e))try{this.getOrInitializeService({instanceIdentifier:Jn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Jn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Jn){return this.instances.has(e)}getOptions(e=Jn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:dv(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Jn){return this.component?this.component.multipleInstances?e:Jn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dv(n){return n===Jn?void 0:n}function pv(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new fv(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ue||(ue={}));const mv={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},_v=ue.INFO,yv={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},vv=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=yv[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vl{constructor(e){this.name=e,this._logLevel=_v,this._logHandler=vv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const Ev=(n,e)=>e.some(t=>n instanceof t);let $u,qu;function Tv(){return $u||($u=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Iv(){return qu||(qu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fd=new WeakMap,$a=new WeakMap,Ud=new WeakMap,va=new WeakMap,xl=new WeakMap;function wv(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(bn(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Fd.set(t,n)}).catch(()=>{}),xl.set(e,n),e}function Av(n){if($a.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});$a.set(n,e)}let qa={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return $a.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ud.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return bn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function bv(n){qa=n(qa)}function Sv(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ea(this),e,...t);return Ud.set(r,e.sort?e.sort():[e]),bn(r)}:Iv().includes(n)?function(...e){return n.apply(Ea(this),e),bn(Fd.get(this))}:function(...e){return bn(n.apply(Ea(this),e))}}function Rv(n){return typeof n=="function"?Sv(n):(n instanceof IDBTransaction&&Av(n),Ev(n,Tv())?new Proxy(n,qa):n)}function bn(n){if(n instanceof IDBRequest)return wv(n);if(va.has(n))return va.get(n);const e=Rv(n);return e!==n&&(va.set(n,e),xl.set(e,n)),e}const Ea=n=>xl.get(n);function Cv(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),l=bn(a);return r&&a.addEventListener("upgradeneeded",u=>{r(bn(a.result),u.oldVersion,u.newVersion,bn(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const Pv=["get","getKey","getAll","getAllKeys","count"],Ov=["put","add","delete","clear"],Ta=new Map;function Hu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ta.get(e))return Ta.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Ov.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Pv.includes(t)))return;const i=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let f=u.store;return r&&(f=f.index(l.shift())),(await Promise.all([f[t](...l),s&&u.done]))[0]};return Ta.set(e,i),i}bv(n=>({...n,get:(e,t,r)=>Hu(e,t)||n.get(e,t,r),has:(e,t)=>!!Hu(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Dv(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Dv(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ha="@firebase/app",zu="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=new Vl("@firebase/app"),Nv="@firebase/app-compat",Vv="@firebase/analytics-compat",xv="@firebase/analytics",Mv="@firebase/app-check-compat",Lv="@firebase/app-check",Fv="@firebase/auth",Uv="@firebase/auth-compat",Bv="@firebase/database",jv="@firebase/data-connect",$v="@firebase/database-compat",qv="@firebase/functions",Hv="@firebase/functions-compat",zv="@firebase/installations",Wv="@firebase/installations-compat",Kv="@firebase/messaging",Gv="@firebase/messaging-compat",Qv="@firebase/performance",Jv="@firebase/performance-compat",Xv="@firebase/remote-config",Yv="@firebase/remote-config-compat",Zv="@firebase/storage",eE="@firebase/storage-compat",tE="@firebase/firestore",nE="@firebase/ai",rE="@firebase/firestore-compat",sE="firebase",iE="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za="[DEFAULT]",oE={[Ha]:"fire-core",[Nv]:"fire-core-compat",[xv]:"fire-analytics",[Vv]:"fire-analytics-compat",[Lv]:"fire-app-check",[Mv]:"fire-app-check-compat",[Fv]:"fire-auth",[Uv]:"fire-auth-compat",[Bv]:"fire-rtdb",[jv]:"fire-data-connect",[$v]:"fire-rtdb-compat",[qv]:"fire-fn",[Hv]:"fire-fn-compat",[zv]:"fire-iid",[Wv]:"fire-iid-compat",[Kv]:"fire-fcm",[Gv]:"fire-fcm-compat",[Qv]:"fire-perf",[Jv]:"fire-perf-compat",[Xv]:"fire-rc",[Yv]:"fire-rc-compat",[Zv]:"fire-gcs",[eE]:"fire-gcs-compat",[tE]:"fire-fst",[rE]:"fire-fst-compat",[nE]:"fire-vertex","fire-js":"fire-js",[sE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to=new Map,aE=new Map,Wa=new Map;function Wu(n,e){try{n.container.addComponent(e)}catch(t){nn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ur(n){const e=n.name;if(Wa.has(e))return nn.debug(`There were multiple attempts to register component ${e}.`),!1;Wa.set(e,n);for(const t of to.values())Wu(t,n);for(const t of aE.values())Wu(t,n);return!0}function Ml(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Et(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Sn=new Ys("app","Firebase",lE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ar("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Sn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr=iE;function Bd(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:za,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Sn.create("bad-app-name",{appName:String(s)});if(t||(t=Vd()),!t)throw Sn.create("no-options");const i=to.get(s);if(i){if(or(t,i.options)&&or(r,i.config))return i;throw Sn.create("duplicate-app",{appName:s})}const a=new gv(s);for(const u of Wa.values())a.addComponent(u);const l=new cE(t,r,a);return to.set(s,l),l}function jd(n=za){const e=to.get(n);if(!e&&n===za&&Vd())return Bd();if(!e)throw Sn.create("no-app",{appName:n});return e}function Rn(n,e,t){var r;let s=(r=oE[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),nn.warn(l.join(" "));return}Ur(new ar(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uE="firebase-heartbeat-database",hE=1,Hs="firebase-heartbeat-store";let Ia=null;function $d(){return Ia||(Ia=Cv(uE,hE,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Hs)}catch(t){console.warn(t)}}}}).catch(n=>{throw Sn.create("idb-open",{originalErrorMessage:n.message})})),Ia}async function fE(n){try{const t=(await $d()).transaction(Hs),r=await t.objectStore(Hs).get(qd(n));return await t.done,r}catch(e){if(e instanceof an)nn.warn(e.message);else{const t=Sn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});nn.warn(t.message)}}}async function Ku(n,e){try{const r=(await $d()).transaction(Hs,"readwrite");await r.objectStore(Hs).put(e,qd(n)),await r.done}catch(t){if(t instanceof an)nn.warn(t.message);else{const r=Sn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});nn.warn(r.message)}}}function qd(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE=1024,pE=30;class gE{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new _E(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Gu();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>pE){const a=yE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){nn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Gu(),{heartbeatsToSend:r,unsentEntries:s}=mE(this._heartbeatsCache.heartbeats),i=eo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return nn.warn(t),""}}}function Gu(){return new Date().toISOString().substring(0,10)}function mE(n,e=dE){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Qu(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Qu(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class _E{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rv()?sv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await fE(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ku(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ku(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Qu(n){return eo(JSON.stringify({version:2,heartbeats:n})).length}function yE(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vE(n){Ur(new ar("platform-logger",e=>new kv(e),"PRIVATE")),Ur(new ar("heartbeat",e=>new gE(e),"PRIVATE")),Rn(Ha,zu,n),Rn(Ha,zu,"esm2017"),Rn("fire-js","")}vE("");var Ju=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Cn,Hd;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,m){function _(){}_.prototype=m.prototype,I.D=m.prototype,I.prototype=new _,I.prototype.constructor=I,I.C=function(T,w,b){for(var E=Array(arguments.length-2),st=2;st<arguments.length;st++)E[st-2]=arguments[st];return m.prototype[w].apply(T,E)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,m,_){_||(_=0);var T=Array(16);if(typeof m=="string")for(var w=0;16>w;++w)T[w]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(w=0;16>w;++w)T[w]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=I.g[0],_=I.g[1],w=I.g[2];var b=I.g[3],E=m+(b^_&(w^b))+T[0]+3614090360&4294967295;m=_+(E<<7&4294967295|E>>>25),E=b+(w^m&(_^w))+T[1]+3905402710&4294967295,b=m+(E<<12&4294967295|E>>>20),E=w+(_^b&(m^_))+T[2]+606105819&4294967295,w=b+(E<<17&4294967295|E>>>15),E=_+(m^w&(b^m))+T[3]+3250441966&4294967295,_=w+(E<<22&4294967295|E>>>10),E=m+(b^_&(w^b))+T[4]+4118548399&4294967295,m=_+(E<<7&4294967295|E>>>25),E=b+(w^m&(_^w))+T[5]+1200080426&4294967295,b=m+(E<<12&4294967295|E>>>20),E=w+(_^b&(m^_))+T[6]+2821735955&4294967295,w=b+(E<<17&4294967295|E>>>15),E=_+(m^w&(b^m))+T[7]+4249261313&4294967295,_=w+(E<<22&4294967295|E>>>10),E=m+(b^_&(w^b))+T[8]+1770035416&4294967295,m=_+(E<<7&4294967295|E>>>25),E=b+(w^m&(_^w))+T[9]+2336552879&4294967295,b=m+(E<<12&4294967295|E>>>20),E=w+(_^b&(m^_))+T[10]+4294925233&4294967295,w=b+(E<<17&4294967295|E>>>15),E=_+(m^w&(b^m))+T[11]+2304563134&4294967295,_=w+(E<<22&4294967295|E>>>10),E=m+(b^_&(w^b))+T[12]+1804603682&4294967295,m=_+(E<<7&4294967295|E>>>25),E=b+(w^m&(_^w))+T[13]+4254626195&4294967295,b=m+(E<<12&4294967295|E>>>20),E=w+(_^b&(m^_))+T[14]+2792965006&4294967295,w=b+(E<<17&4294967295|E>>>15),E=_+(m^w&(b^m))+T[15]+1236535329&4294967295,_=w+(E<<22&4294967295|E>>>10),E=m+(w^b&(_^w))+T[1]+4129170786&4294967295,m=_+(E<<5&4294967295|E>>>27),E=b+(_^w&(m^_))+T[6]+3225465664&4294967295,b=m+(E<<9&4294967295|E>>>23),E=w+(m^_&(b^m))+T[11]+643717713&4294967295,w=b+(E<<14&4294967295|E>>>18),E=_+(b^m&(w^b))+T[0]+3921069994&4294967295,_=w+(E<<20&4294967295|E>>>12),E=m+(w^b&(_^w))+T[5]+3593408605&4294967295,m=_+(E<<5&4294967295|E>>>27),E=b+(_^w&(m^_))+T[10]+38016083&4294967295,b=m+(E<<9&4294967295|E>>>23),E=w+(m^_&(b^m))+T[15]+3634488961&4294967295,w=b+(E<<14&4294967295|E>>>18),E=_+(b^m&(w^b))+T[4]+3889429448&4294967295,_=w+(E<<20&4294967295|E>>>12),E=m+(w^b&(_^w))+T[9]+568446438&4294967295,m=_+(E<<5&4294967295|E>>>27),E=b+(_^w&(m^_))+T[14]+3275163606&4294967295,b=m+(E<<9&4294967295|E>>>23),E=w+(m^_&(b^m))+T[3]+4107603335&4294967295,w=b+(E<<14&4294967295|E>>>18),E=_+(b^m&(w^b))+T[8]+1163531501&4294967295,_=w+(E<<20&4294967295|E>>>12),E=m+(w^b&(_^w))+T[13]+2850285829&4294967295,m=_+(E<<5&4294967295|E>>>27),E=b+(_^w&(m^_))+T[2]+4243563512&4294967295,b=m+(E<<9&4294967295|E>>>23),E=w+(m^_&(b^m))+T[7]+1735328473&4294967295,w=b+(E<<14&4294967295|E>>>18),E=_+(b^m&(w^b))+T[12]+2368359562&4294967295,_=w+(E<<20&4294967295|E>>>12),E=m+(_^w^b)+T[5]+4294588738&4294967295,m=_+(E<<4&4294967295|E>>>28),E=b+(m^_^w)+T[8]+2272392833&4294967295,b=m+(E<<11&4294967295|E>>>21),E=w+(b^m^_)+T[11]+1839030562&4294967295,w=b+(E<<16&4294967295|E>>>16),E=_+(w^b^m)+T[14]+4259657740&4294967295,_=w+(E<<23&4294967295|E>>>9),E=m+(_^w^b)+T[1]+2763975236&4294967295,m=_+(E<<4&4294967295|E>>>28),E=b+(m^_^w)+T[4]+1272893353&4294967295,b=m+(E<<11&4294967295|E>>>21),E=w+(b^m^_)+T[7]+4139469664&4294967295,w=b+(E<<16&4294967295|E>>>16),E=_+(w^b^m)+T[10]+3200236656&4294967295,_=w+(E<<23&4294967295|E>>>9),E=m+(_^w^b)+T[13]+681279174&4294967295,m=_+(E<<4&4294967295|E>>>28),E=b+(m^_^w)+T[0]+3936430074&4294967295,b=m+(E<<11&4294967295|E>>>21),E=w+(b^m^_)+T[3]+3572445317&4294967295,w=b+(E<<16&4294967295|E>>>16),E=_+(w^b^m)+T[6]+76029189&4294967295,_=w+(E<<23&4294967295|E>>>9),E=m+(_^w^b)+T[9]+3654602809&4294967295,m=_+(E<<4&4294967295|E>>>28),E=b+(m^_^w)+T[12]+3873151461&4294967295,b=m+(E<<11&4294967295|E>>>21),E=w+(b^m^_)+T[15]+530742520&4294967295,w=b+(E<<16&4294967295|E>>>16),E=_+(w^b^m)+T[2]+3299628645&4294967295,_=w+(E<<23&4294967295|E>>>9),E=m+(w^(_|~b))+T[0]+4096336452&4294967295,m=_+(E<<6&4294967295|E>>>26),E=b+(_^(m|~w))+T[7]+1126891415&4294967295,b=m+(E<<10&4294967295|E>>>22),E=w+(m^(b|~_))+T[14]+2878612391&4294967295,w=b+(E<<15&4294967295|E>>>17),E=_+(b^(w|~m))+T[5]+4237533241&4294967295,_=w+(E<<21&4294967295|E>>>11),E=m+(w^(_|~b))+T[12]+1700485571&4294967295,m=_+(E<<6&4294967295|E>>>26),E=b+(_^(m|~w))+T[3]+2399980690&4294967295,b=m+(E<<10&4294967295|E>>>22),E=w+(m^(b|~_))+T[10]+4293915773&4294967295,w=b+(E<<15&4294967295|E>>>17),E=_+(b^(w|~m))+T[1]+2240044497&4294967295,_=w+(E<<21&4294967295|E>>>11),E=m+(w^(_|~b))+T[8]+1873313359&4294967295,m=_+(E<<6&4294967295|E>>>26),E=b+(_^(m|~w))+T[15]+4264355552&4294967295,b=m+(E<<10&4294967295|E>>>22),E=w+(m^(b|~_))+T[6]+2734768916&4294967295,w=b+(E<<15&4294967295|E>>>17),E=_+(b^(w|~m))+T[13]+1309151649&4294967295,_=w+(E<<21&4294967295|E>>>11),E=m+(w^(_|~b))+T[4]+4149444226&4294967295,m=_+(E<<6&4294967295|E>>>26),E=b+(_^(m|~w))+T[11]+3174756917&4294967295,b=m+(E<<10&4294967295|E>>>22),E=w+(m^(b|~_))+T[2]+718787259&4294967295,w=b+(E<<15&4294967295|E>>>17),E=_+(b^(w|~m))+T[9]+3951481745&4294967295,I.g[0]=I.g[0]+m&4294967295,I.g[1]=I.g[1]+(w+(E<<21&4294967295|E>>>11))&4294967295,I.g[2]=I.g[2]+w&4294967295,I.g[3]=I.g[3]+b&4294967295}r.prototype.u=function(I,m){m===void 0&&(m=I.length);for(var _=m-this.blockSize,T=this.B,w=this.h,b=0;b<m;){if(w==0)for(;b<=_;)s(this,I,b),b+=this.blockSize;if(typeof I=="string"){for(;b<m;)if(T[w++]=I.charCodeAt(b++),w==this.blockSize){s(this,T),w=0;break}}else for(;b<m;)if(T[w++]=I[b++],w==this.blockSize){s(this,T),w=0;break}}this.h=w,this.o+=m},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var m=1;m<I.length-8;++m)I[m]=0;var _=8*this.o;for(m=I.length-8;m<I.length;++m)I[m]=_&255,_/=256;for(this.u(I),I=Array(16),m=_=0;4>m;++m)for(var T=0;32>T;T+=8)I[_++]=this.g[m]>>>T&255;return I};function i(I,m){var _=l;return Object.prototype.hasOwnProperty.call(_,I)?_[I]:_[I]=m(I)}function a(I,m){this.h=m;for(var _=[],T=!0,w=I.length-1;0<=w;w--){var b=I[w]|0;T&&b==m||(_[w]=b,T=!1)}this.g=_}var l={};function u(I){return-128<=I&&128>I?i(I,function(m){return new a([m|0],0>m?-1:0)}):new a([I|0],0>I?-1:0)}function f(I){if(isNaN(I)||!isFinite(I))return g;if(0>I)return L(f(-I));for(var m=[],_=1,T=0;I>=_;T++)m[T]=I/_|0,_*=4294967296;return new a(m,0)}function d(I,m){if(I.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(I.charAt(0)=="-")return L(d(I.substring(1),m));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=f(Math.pow(m,8)),T=g,w=0;w<I.length;w+=8){var b=Math.min(8,I.length-w),E=parseInt(I.substring(w,w+b),m);8>b?(b=f(Math.pow(m,b)),T=T.j(b).add(f(E))):(T=T.j(_),T=T.add(f(E)))}return T}var g=u(0),y=u(1),R=u(16777216);n=a.prototype,n.m=function(){if(M(this))return-L(this).m();for(var I=0,m=1,_=0;_<this.g.length;_++){var T=this.i(_);I+=(0<=T?T:4294967296+T)*m,m*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(O(this))return"0";if(M(this))return"-"+L(this).toString(I);for(var m=f(Math.pow(I,6)),_=this,T="";;){var w=H(_,m).g;_=W(_,w.j(m));var b=((0<_.g.length?_.g[0]:_.h)>>>0).toString(I);if(_=w,O(_))return b+T;for(;6>b.length;)b="0"+b;T=b+T}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function O(I){if(I.h!=0)return!1;for(var m=0;m<I.g.length;m++)if(I.g[m]!=0)return!1;return!0}function M(I){return I.h==-1}n.l=function(I){return I=W(this,I),M(I)?-1:O(I)?0:1};function L(I){for(var m=I.g.length,_=[],T=0;T<m;T++)_[T]=~I.g[T];return new a(_,~I.h).add(y)}n.abs=function(){return M(this)?L(this):this},n.add=function(I){for(var m=Math.max(this.g.length,I.g.length),_=[],T=0,w=0;w<=m;w++){var b=T+(this.i(w)&65535)+(I.i(w)&65535),E=(b>>>16)+(this.i(w)>>>16)+(I.i(w)>>>16);T=E>>>16,b&=65535,E&=65535,_[w]=E<<16|b}return new a(_,_[_.length-1]&-2147483648?-1:0)};function W(I,m){return I.add(L(m))}n.j=function(I){if(O(this)||O(I))return g;if(M(this))return M(I)?L(this).j(L(I)):L(L(this).j(I));if(M(I))return L(this.j(L(I)));if(0>this.l(R)&&0>I.l(R))return f(this.m()*I.m());for(var m=this.g.length+I.g.length,_=[],T=0;T<2*m;T++)_[T]=0;for(T=0;T<this.g.length;T++)for(var w=0;w<I.g.length;w++){var b=this.i(T)>>>16,E=this.i(T)&65535,st=I.i(w)>>>16,bt=I.i(w)&65535;_[2*T+2*w]+=E*bt,K(_,2*T+2*w),_[2*T+2*w+1]+=b*bt,K(_,2*T+2*w+1),_[2*T+2*w+1]+=E*st,K(_,2*T+2*w+1),_[2*T+2*w+2]+=b*st,K(_,2*T+2*w+2)}for(T=0;T<m;T++)_[T]=_[2*T+1]<<16|_[2*T];for(T=m;T<2*m;T++)_[T]=0;return new a(_,0)};function K(I,m){for(;(I[m]&65535)!=I[m];)I[m+1]+=I[m]>>>16,I[m]&=65535,m++}function G(I,m){this.g=I,this.h=m}function H(I,m){if(O(m))throw Error("division by zero");if(O(I))return new G(g,g);if(M(I))return m=H(L(I),m),new G(L(m.g),L(m.h));if(M(m))return m=H(I,L(m)),new G(L(m.g),m.h);if(30<I.g.length){if(M(I)||M(m))throw Error("slowDivide_ only works with positive integers.");for(var _=y,T=m;0>=T.l(I);)_=se(_),T=se(T);var w=ye(_,1),b=ye(T,1);for(T=ye(T,2),_=ye(_,2);!O(T);){var E=b.add(T);0>=E.l(I)&&(w=w.add(_),b=E),T=ye(T,1),_=ye(_,1)}return m=W(I,w.j(m)),new G(w,m)}for(w=g;0<=I.l(m);){for(_=Math.max(1,Math.floor(I.m()/m.m())),T=Math.ceil(Math.log(_)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),b=f(_),E=b.j(m);M(E)||0<E.l(I);)_-=T,b=f(_),E=b.j(m);O(b)&&(b=y),w=w.add(b),I=W(I,E)}return new G(w,I)}n.A=function(I){return H(this,I).h},n.and=function(I){for(var m=Math.max(this.g.length,I.g.length),_=[],T=0;T<m;T++)_[T]=this.i(T)&I.i(T);return new a(_,this.h&I.h)},n.or=function(I){for(var m=Math.max(this.g.length,I.g.length),_=[],T=0;T<m;T++)_[T]=this.i(T)|I.i(T);return new a(_,this.h|I.h)},n.xor=function(I){for(var m=Math.max(this.g.length,I.g.length),_=[],T=0;T<m;T++)_[T]=this.i(T)^I.i(T);return new a(_,this.h^I.h)};function se(I){for(var m=I.g.length+1,_=[],T=0;T<m;T++)_[T]=I.i(T)<<1|I.i(T-1)>>>31;return new a(_,I.h)}function ye(I,m){var _=m>>5;m%=32;for(var T=I.g.length-_,w=[],b=0;b<T;b++)w[b]=0<m?I.i(b+_)>>>m|I.i(b+_+1)<<32-m:I.i(b+_);return new a(w,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Hd=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=d,Cn=a}).apply(typeof Ju<"u"?Ju:typeof self<"u"?self:typeof window<"u"?window:{});var Ci=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zd,vs,Wd,Li,Ka,Kd,Gd,Qd;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,h){return o==Array.prototype||o==Object.prototype||(o[c]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ci=="object"&&Ci];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(o,c){if(c)e:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var S=o[p];if(!(S in h))break e;h=h[S]}o=o[o.length-1],p=h[o],c=c(p),c!=p&&c!=null&&e(h,o,{configurable:!0,writable:!0,value:c})}}function i(o,c){o instanceof String&&(o+="");var h=0,p=!1,S={next:function(){if(!p&&h<o.length){var C=h++;return{value:c(C,o[C]),done:!1}}return p=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}s("Array.prototype.values",function(o){return o||function(){return i(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function f(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function d(o,c,h){return o.call.apply(o.bind,arguments)}function g(o,c,h){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,p),o.apply(c,S)}}return function(){return o.apply(c,arguments)}}function y(o,c,h){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:g,y.apply(null,arguments)}function R(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function O(o,c){function h(){}h.prototype=c.prototype,o.aa=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(p,S,C){for(var B=Array(arguments.length-2),Ee=2;Ee<arguments.length;Ee++)B[Ee-2]=arguments[Ee];return c.prototype[S].apply(p,B)}}function M(o){const c=o.length;if(0<c){const h=Array(c);for(let p=0;p<c;p++)h[p]=o[p];return h}return[]}function L(o,c){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(u(p)){const S=o.length||0,C=p.length||0;o.length=S+C;for(let B=0;B<C;B++)o[S+B]=p[B]}else o.push(p)}}class W{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function K(o){return/^[\s\xa0]*$/.test(o)}function G(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function H(o){return H[" "](o),o}H[" "]=function(){};var se=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function ye(o,c,h){for(const p in o)c.call(h,o[p],p,o)}function I(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function m(o){const c={};for(const h in o)c[h]=o[h];return c}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,c){let h,p;for(let S=1;S<arguments.length;S++){p=arguments[S];for(h in p)o[h]=p[h];for(let C=0;C<_.length;C++)h=_[C],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function w(o){var c=1;o=o.split(":");const h=[];for(;0<c&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function b(o){l.setTimeout(()=>{throw o},0)}function E(){var o=yt;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class st{constructor(){this.h=this.g=null}add(c,h){const p=bt.get();p.set(c,h),this.h?this.h.next=p:this.g=p,this.h=p}}var bt=new W(()=>new be,o=>o.reset());class be{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let oe,ge=!1,yt=new st,Bn=()=>{const o=l.Promise.resolve(void 0);oe=()=>{o.then($t)}};var $t=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(h){b(h)}var c=bt;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}ge=!1};function Me(){this.s=this.s,this.C=this.C}Me.prototype.s=!1,Me.prototype.ma=function(){this.s||(this.s=!0,this.N())},Me.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Le(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}Le.prototype.h=function(){this.defaultPrevented=!0};var zo=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};l.addEventListener("test",h,c),l.removeEventListener("test",h,c)}catch{}return o})();function jn(o,c){if(Le.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(se){e:{try{H(c.nodeName);var S=!0;break e}catch{}S=!1}S||(c=null)}}else h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:$n[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&jn.aa.h.call(this)}}O(jn,Le);var $n={2:"touch",3:"pen",4:"mouse"};jn.prototype.h=function(){jn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var qt="closure_listenable_"+(1e6*Math.random()|0),Zr=0;function li(o,c,h,p,S){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!p,this.ha=S,this.key=++Zr,this.da=this.fa=!1}function St(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function es(o){this.src=o,this.g={},this.h=0}es.prototype.add=function(o,c,h,p,S){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var B=A(o,c,p,S);return-1<B?(c=o[B],h||(c.fa=!1)):(c=new li(c,this.src,C,!!p,S),c.fa=h,o.push(c)),c};function v(o,c){var h=c.type;if(h in o.g){var p=o.g[h],S=Array.prototype.indexOf.call(p,c,void 0),C;(C=0<=S)&&Array.prototype.splice.call(p,S,1),C&&(St(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function A(o,c,h,p){for(var S=0;S<o.length;++S){var C=o[S];if(!C.da&&C.listener==c&&C.capture==!!h&&C.ha==p)return S}return-1}var P="closure_lm_"+(1e6*Math.random()|0),x={};function D(o,c,h,p,S){if(Array.isArray(c)){for(var C=0;C<c.length;C++)D(o,c[C],h,p,S);return null}return h=ee(h),o&&o[qt]?o.K(c,h,f(p)?!!p.capture:!1,S):N(o,c,h,!1,p,S)}function N(o,c,h,p,S,C){if(!c)throw Error("Invalid event type");var B=f(S)?!!S.capture:!!S,Ee=q(o);if(Ee||(o[P]=Ee=new es(o)),h=Ee.add(c,h,p,B,C),h.proxy)return h;if(p=$(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)zo||(S=B),S===void 0&&(S=!1),o.addEventListener(c.toString(),p,S);else if(o.attachEvent)o.attachEvent(V(c.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function $(){function o(h){return c.call(o.src,o.listener,h)}const c=X;return o}function U(o,c,h,p,S){if(Array.isArray(c))for(var C=0;C<c.length;C++)U(o,c[C],h,p,S);else p=f(p)?!!p.capture:!!p,h=ee(h),o&&o[qt]?(o=o.i,c=String(c).toString(),c in o.g&&(C=o.g[c],h=A(C,h,p,S),-1<h&&(St(C[h]),Array.prototype.splice.call(C,h,1),C.length==0&&(delete o.g[c],o.h--)))):o&&(o=q(o))&&(c=o.g[c.toString()],o=-1,c&&(o=A(c,h,p,S)),(h=-1<o?c[o]:null)&&F(h))}function F(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[qt])v(c.i,o);else{var h=o.type,p=o.proxy;c.removeEventListener?c.removeEventListener(h,p,o.capture):c.detachEvent?c.detachEvent(V(h),p):c.addListener&&c.removeListener&&c.removeListener(p),(h=q(c))?(v(h,o),h.h==0&&(h.src=null,c[P]=null)):St(o)}}}function V(o){return o in x?x[o]:x[o]="on"+o}function X(o,c){if(o.da)o=!0;else{c=new jn(c,this);var h=o.listener,p=o.ha||o.src;o.fa&&F(o),o=h.call(p,c)}return o}function q(o){return o=o[P],o instanceof es?o:null}var Q="__closure_events_fn_"+(1e9*Math.random()>>>0);function ee(o){return typeof o=="function"?o:(o[Q]||(o[Q]=function(c){return o.handleEvent(c)}),o[Q])}function Y(){Me.call(this),this.i=new es(this),this.M=this,this.F=null}O(Y,Me),Y.prototype[qt]=!0,Y.prototype.removeEventListener=function(o,c,h,p){U(this,o,c,h,p)};function ae(o,c){var h,p=o.F;if(p)for(h=[];p;p=p.F)h.push(p);if(o=o.M,p=c.type||c,typeof c=="string")c=new Le(c,o);else if(c instanceof Le)c.target=c.target||o;else{var S=c;c=new Le(p,o),T(c,S)}if(S=!0,h)for(var C=h.length-1;0<=C;C--){var B=c.g=h[C];S=he(B,p,!0,c)&&S}if(B=c.g=o,S=he(B,p,!0,c)&&S,S=he(B,p,!1,c)&&S,h)for(C=0;C<h.length;C++)B=c.g=h[C],S=he(B,p,!1,c)&&S}Y.prototype.N=function(){if(Y.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var h=o.g[c],p=0;p<h.length;p++)St(h[p]);delete o.g[c],o.h--}}this.F=null},Y.prototype.K=function(o,c,h,p){return this.i.add(String(o),c,!1,h,p)},Y.prototype.L=function(o,c,h,p){return this.i.add(String(o),c,!0,h,p)};function he(o,c,h,p){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var S=!0,C=0;C<c.length;++C){var B=c[C];if(B&&!B.da&&B.capture==h){var Ee=B.listener,ze=B.ha||B.src;B.fa&&v(o.i,B),S=Ee.call(ze,p)!==!1&&S}}return S&&!p.defaultPrevented}function $e(o,c,h){if(typeof o=="function")h&&(o=y(o,h));else if(o&&typeof o.handleEvent=="function")o=y(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function qe(o){o.g=$e(()=>{o.g=null,o.i&&(o.i=!1,qe(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class mt extends Me{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:qe(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ge(o){Me.call(this),this.h=o,this.g={}}O(Ge,Me);var cn=[];function ts(o){ye(o.g,function(c,h){this.g.hasOwnProperty(h)&&F(c)},o),o.g={}}Ge.prototype.N=function(){Ge.aa.N.call(this),ts(this)},Ge.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var He=l.JSON.stringify,_t=l.JSON.parse,ci=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function fr(){}fr.prototype.h=null;function mc(o){return o.h||(o.h=o.i())}function _c(){}var ns={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Wo(){Le.call(this,"d")}O(Wo,Le);function Ko(){Le.call(this,"c")}O(Ko,Le);var qn={},yc=null;function ui(){return yc=yc||new Y}qn.La="serverreachability";function vc(o){Le.call(this,qn.La,o)}O(vc,Le);function rs(o){const c=ui();ae(c,new vc(c))}qn.STAT_EVENT="statevent";function Ec(o,c){Le.call(this,qn.STAT_EVENT,o),this.stat=c}O(Ec,Le);function it(o){const c=ui();ae(c,new Ec(c,o))}qn.Ma="timingevent";function Tc(o,c){Le.call(this,qn.Ma,o),this.size=c}O(Tc,Le);function ss(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function is(){this.g=!0}is.prototype.xa=function(){this.g=!1};function Og(o,c,h,p,S,C){o.info(function(){if(o.g)if(C)for(var B="",Ee=C.split("&"),ze=0;ze<Ee.length;ze++){var me=Ee[ze].split("=");if(1<me.length){var Qe=me[0];me=me[1];var Je=Qe.split("_");B=2<=Je.length&&Je[1]=="type"?B+(Qe+"="+me+"&"):B+(Qe+"=redacted&")}}else B=null;else B=C;return"XMLHTTP REQ ("+p+") [attempt "+S+"]: "+c+`
`+h+`
`+B})}function kg(o,c,h,p,S,C,B){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+S+"]: "+c+`
`+h+`
`+C+" "+B})}function dr(o,c,h,p){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+Ng(o,h)+(p?" "+p:"")})}function Dg(o,c){o.info(function(){return"TIMEOUT: "+c})}is.prototype.info=function(){};function Ng(o,c){if(!o.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var p=h[o];if(!(2>p.length)){var S=p[1];if(Array.isArray(S)&&!(1>S.length)){var C=S[0];if(C!="noop"&&C!="stop"&&C!="close")for(var B=1;B<S.length;B++)S[B]=""}}}}return He(h)}catch{return c}}var hi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ic={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Go;function fi(){}O(fi,fr),fi.prototype.g=function(){return new XMLHttpRequest},fi.prototype.i=function(){return{}},Go=new fi;function un(o,c,h,p){this.j=o,this.i=c,this.l=h,this.R=p||1,this.U=new Ge(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new wc}function wc(){this.i=null,this.g="",this.h=!1}var Ac={},Qo={};function Jo(o,c,h){o.L=1,o.v=mi(Ht(c)),o.m=h,o.P=!0,bc(o,null)}function bc(o,c){o.F=Date.now(),di(o),o.A=Ht(o.v);var h=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),Uc(h.i,"t",p),o.C=0,h=o.j.J,o.h=new wc,o.g=ru(o.j,h?c:null,!o.m),0<o.O&&(o.M=new mt(y(o.Y,o,o.g),o.O)),c=o.U,h=o.g,p=o.ca;var S="readystatechange";Array.isArray(S)||(S&&(cn[0]=S.toString()),S=cn);for(var C=0;C<S.length;C++){var B=D(h,S[C],p||c.handleEvent,!1,c.h||c);if(!B)break;c.g[B.key]=B}c=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),rs(),Og(o.i,o.u,o.A,o.l,o.R,o.m)}un.prototype.ca=function(o){o=o.target;const c=this.M;c&&zt(o)==3?c.j():this.Y(o)},un.prototype.Y=function(o){try{if(o==this.g)e:{const Je=zt(this.g);var c=this.g.Ba();const mr=this.g.Z();if(!(3>Je)&&(Je!=3||this.g&&(this.h.h||this.g.oa()||Wc(this.g)))){this.J||Je!=4||c==7||(c==8||0>=mr?rs(3):rs(2)),Xo(this);var h=this.g.Z();this.X=h;t:if(Sc(this)){var p=Wc(this.g);o="";var S=p.length,C=zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Hn(this),os(this);var B="";break t}this.h.i=new l.TextDecoder}for(c=0;c<S;c++)this.h.h=!0,o+=this.h.i.decode(p[c],{stream:!(C&&c==S-1)});p.length=0,this.h.g+=o,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=h==200,kg(this.i,this.u,this.A,this.l,this.R,Je,h),this.o){if(this.T&&!this.K){t:{if(this.g){var Ee,ze=this.g;if((Ee=ze.g?ze.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(Ee)){var me=Ee;break t}}me=null}if(h=me)dr(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Yo(this,h);else{this.o=!1,this.s=3,it(12),Hn(this),os(this);break e}}if(this.P){h=!0;let vt;for(;!this.J&&this.C<B.length;)if(vt=Vg(this,B),vt==Qo){Je==4&&(this.s=4,it(14),h=!1),dr(this.i,this.l,null,"[Incomplete Response]");break}else if(vt==Ac){this.s=4,it(15),dr(this.i,this.l,B,"[Invalid Chunk]"),h=!1;break}else dr(this.i,this.l,vt,null),Yo(this,vt);if(Sc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Je!=4||B.length!=0||this.h.h||(this.s=1,it(16),h=!1),this.o=this.o&&h,!h)dr(this.i,this.l,B,"[Invalid Chunked Response]"),Hn(this),os(this);else if(0<B.length&&!this.W){this.W=!0;var Qe=this.j;Qe.g==this&&Qe.ba&&!Qe.M&&(Qe.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),sa(Qe),Qe.M=!0,it(11))}}else dr(this.i,this.l,B,null),Yo(this,B);Je==4&&Hn(this),this.o&&!this.J&&(Je==4?Zc(this.j,this):(this.o=!1,di(this)))}else Xg(this.g),h==400&&0<B.indexOf("Unknown SID")?(this.s=3,it(12)):(this.s=0,it(13)),Hn(this),os(this)}}}catch{}finally{}};function Sc(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Vg(o,c){var h=o.C,p=c.indexOf(`
`,h);return p==-1?Qo:(h=Number(c.substring(h,p)),isNaN(h)?Ac:(p+=1,p+h>c.length?Qo:(c=c.slice(p,p+h),o.C=p+h,c)))}un.prototype.cancel=function(){this.J=!0,Hn(this)};function di(o){o.S=Date.now()+o.I,Rc(o,o.I)}function Rc(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=ss(y(o.ba,o),c)}function Xo(o){o.B&&(l.clearTimeout(o.B),o.B=null)}un.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Dg(this.i,this.A),this.L!=2&&(rs(),it(17)),Hn(this),this.s=2,os(this)):Rc(this,this.S-o)};function os(o){o.j.G==0||o.J||Zc(o.j,o)}function Hn(o){Xo(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,ts(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function Yo(o,c){try{var h=o.j;if(h.G!=0&&(h.g==o||Zo(h.h,o))){if(!o.K&&Zo(h.h,o)&&h.G==3){try{var p=h.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var S=p;if(S[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)Ii(h),Ei(h);else break e;ra(h),it(18)}}else h.za=S[1],0<h.za-h.T&&37500>S[2]&&h.F&&h.v==0&&!h.C&&(h.C=ss(y(h.Za,h),6e3));if(1>=Oc(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Wn(h,11)}else if((o.K||h.g==o)&&Ii(h),!K(c))for(S=h.Da.g.parse(c),c=0;c<S.length;c++){let me=S[c];if(h.T=me[0],me=me[1],h.G==2)if(me[0]=="c"){h.K=me[1],h.ia=me[2];const Qe=me[3];Qe!=null&&(h.la=Qe,h.j.info("VER="+h.la));const Je=me[4];Je!=null&&(h.Aa=Je,h.j.info("SVER="+h.Aa));const mr=me[5];mr!=null&&typeof mr=="number"&&0<mr&&(p=1.5*mr,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const vt=o.g;if(vt){const Ai=vt.g?vt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ai){var C=p.h;C.g||Ai.indexOf("spdy")==-1&&Ai.indexOf("quic")==-1&&Ai.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(ea(C,C.h),C.h=null))}if(p.D){const ia=vt.g?vt.g.getResponseHeader("X-HTTP-Session-Id"):null;ia&&(p.ya=ia,we(p.I,p.D,ia))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var B=o;if(p.qa=nu(p,p.J?p.ia:null,p.W),B.K){kc(p.h,B);var Ee=B,ze=p.L;ze&&(Ee.I=ze),Ee.B&&(Xo(Ee),di(Ee)),p.g=B}else Xc(p);0<h.i.length&&Ti(h)}else me[0]!="stop"&&me[0]!="close"||Wn(h,7);else h.G==3&&(me[0]=="stop"||me[0]=="close"?me[0]=="stop"?Wn(h,7):na(h):me[0]!="noop"&&h.l&&h.l.ta(me),h.v=0)}}rs(4)}catch{}}var xg=class{constructor(o,c){this.g=o,this.map=c}};function Cc(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Pc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Oc(o){return o.h?1:o.g?o.g.size:0}function Zo(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function ea(o,c){o.g?o.g.add(c):o.h=c}function kc(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}Cc.prototype.cancel=function(){if(this.i=Dc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Dc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.D);return c}return M(o.i)}function Mg(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var c=[],h=o.length,p=0;p<h;p++)c.push(o[p]);return c}c=[],h=0;for(p in o)c[h++]=o[p];return c}function Lg(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var c=[];o=o.length;for(var h=0;h<o;h++)c.push(h);return c}c=[],h=0;for(const p in o)c[h++]=p;return c}}}function Nc(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var h=Lg(o),p=Mg(o),S=p.length,C=0;C<S;C++)c.call(void 0,p[C],h&&h[C],o)}var Vc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Fg(o,c){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var p=o[h].indexOf("="),S=null;if(0<=p){var C=o[h].substring(0,p);S=o[h].substring(p+1)}else C=o[h];c(C,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function zn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof zn){this.h=o.h,pi(this,o.j),this.o=o.o,this.g=o.g,gi(this,o.s),this.l=o.l;var c=o.i,h=new cs;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),xc(this,h),this.m=o.m}else o&&(c=String(o).match(Vc))?(this.h=!1,pi(this,c[1]||"",!0),this.o=as(c[2]||""),this.g=as(c[3]||"",!0),gi(this,c[4]),this.l=as(c[5]||"",!0),xc(this,c[6]||"",!0),this.m=as(c[7]||"")):(this.h=!1,this.i=new cs(null,this.h))}zn.prototype.toString=function(){var o=[],c=this.j;c&&o.push(ls(c,Mc,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(ls(c,Mc,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(ls(h,h.charAt(0)=="/"?jg:Bg,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",ls(h,qg)),o.join("")};function Ht(o){return new zn(o)}function pi(o,c,h){o.j=h?as(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function gi(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function xc(o,c,h){c instanceof cs?(o.i=c,Hg(o.i,o.h)):(h||(c=ls(c,$g)),o.i=new cs(c,o.h))}function we(o,c,h){o.i.set(c,h)}function mi(o){return we(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function as(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function ls(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,Ug),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Ug(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Mc=/[#\/\?@]/g,Bg=/[#\?:]/g,jg=/[#\?]/g,$g=/[#\?@]/g,qg=/#/g;function cs(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function hn(o){o.g||(o.g=new Map,o.h=0,o.i&&Fg(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=cs.prototype,n.add=function(o,c){hn(this),this.i=null,o=pr(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function Lc(o,c){hn(o),c=pr(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function Fc(o,c){return hn(o),c=pr(o,c),o.g.has(c)}n.forEach=function(o,c){hn(this),this.g.forEach(function(h,p){h.forEach(function(S){o.call(c,S,p,this)},this)},this)},n.na=function(){hn(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let p=0;p<c.length;p++){const S=o[p];for(let C=0;C<S.length;C++)h.push(c[p])}return h},n.V=function(o){hn(this);let c=[];if(typeof o=="string")Fc(this,o)&&(c=c.concat(this.g.get(pr(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)c=c.concat(o[h])}return c},n.set=function(o,c){return hn(this),this.i=null,o=pr(this,o),Fc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function Uc(o,c,h){Lc(o,c),0<h.length&&(o.i=null,o.g.set(pr(o,c),M(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var p=c[h];const C=encodeURIComponent(String(p)),B=this.V(p);for(p=0;p<B.length;p++){var S=C;B[p]!==""&&(S+="="+encodeURIComponent(String(B[p]))),o.push(S)}}return this.i=o.join("&")};function pr(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function Hg(o,c){c&&!o.j&&(hn(o),o.i=null,o.g.forEach(function(h,p){var S=p.toLowerCase();p!=S&&(Lc(this,p),Uc(this,S,h))},o)),o.j=c}function zg(o,c){const h=new is;if(l.Image){const p=new Image;p.onload=R(fn,h,"TestLoadImage: loaded",!0,c,p),p.onerror=R(fn,h,"TestLoadImage: error",!1,c,p),p.onabort=R(fn,h,"TestLoadImage: abort",!1,c,p),p.ontimeout=R(fn,h,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else c(!1)}function Wg(o,c){const h=new is,p=new AbortController,S=setTimeout(()=>{p.abort(),fn(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:p.signal}).then(C=>{clearTimeout(S),C.ok?fn(h,"TestPingServer: ok",!0,c):fn(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(S),fn(h,"TestPingServer: error",!1,c)})}function fn(o,c,h,p,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),p(h)}catch{}}function Kg(){this.g=new ci}function Gg(o,c,h){const p=h||"";try{Nc(o,function(S,C){let B=S;f(S)&&(B=He(S)),c.push(p+C+"="+encodeURIComponent(B))})}catch(S){throw c.push(p+"type="+encodeURIComponent("_badmap")),S}}function _i(o){this.l=o.Ub||null,this.j=o.eb||!1}O(_i,fr),_i.prototype.g=function(){return new yi(this.l,this.j)},_i.prototype.i=(function(o){return function(){return o}})({});function yi(o,c){Y.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}O(yi,Y),n=yi.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,hs(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,us(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,hs(this)),this.g&&(this.readyState=3,hs(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Bc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Bc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?us(this):hs(this),this.readyState==3&&Bc(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,us(this))},n.Qa=function(o){this.g&&(this.response=o,us(this))},n.ga=function(){this.g&&us(this)};function us(o){o.readyState=4,o.l=null,o.j=null,o.v=null,hs(o)}n.setRequestHeader=function(o,c){this.u.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function hs(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(yi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function jc(o){let c="";return ye(o,function(h,p){c+=p,c+=":",c+=h,c+=`\r
`}),c}function ta(o,c,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=jc(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):we(o,c,h))}function Ce(o){Y.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}O(Ce,Y);var Qg=/^https?$/i,Jg=["POST","PUT"];n=Ce.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,c,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Go.g(),this.v=this.o?mc(this.o):mc(Go),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(C){$c(this,C);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var S in p)h.set(S,p[S]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const C of p.keys())h.set(C,p.get(C));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(C=>C.toLowerCase()=="content-type"),S=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Jg,c,void 0))||p||S||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,B]of h)this.g.setRequestHeader(C,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{zc(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){$c(this,C)}};function $c(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,qc(o),vi(o)}function qc(o){o.A||(o.A=!0,ae(o,"complete"),ae(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,ae(this,"complete"),ae(this,"abort"),vi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),vi(this,!0)),Ce.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Hc(this):this.bb())},n.bb=function(){Hc(this)};function Hc(o){if(o.h&&typeof a<"u"&&(!o.v[1]||zt(o)!=4||o.Z()!=2)){if(o.u&&zt(o)==4)$e(o.Ea,0,o);else if(ae(o,"readystatechange"),zt(o)==4){o.h=!1;try{const B=o.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var p;if(p=B===0){var S=String(o.D).match(Vc)[1]||null;!S&&l.self&&l.self.location&&(S=l.self.location.protocol.slice(0,-1)),p=!Qg.test(S?S.toLowerCase():"")}h=p}if(h)ae(o,"complete"),ae(o,"success");else{o.m=6;try{var C=2<zt(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",qc(o)}}finally{vi(o)}}}}function vi(o,c){if(o.g){zc(o);const h=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||ae(o,"ready");try{h.onreadystatechange=p}catch{}}}function zc(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function zt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<zt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),_t(c)}};function Wc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Xg(o){const c={};o=(o.g&&2<=zt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(K(o[p]))continue;var h=w(o[p]);const S=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const C=c[S]||[];c[S]=C,C.push(h)}I(c,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function fs(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function Kc(o){this.Aa=0,this.i=[],this.j=new is,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=fs("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=fs("baseRetryDelayMs",5e3,o),this.cb=fs("retryDelaySeedMs",1e4,o),this.Wa=fs("forwardChannelMaxRetries",2,o),this.wa=fs("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Cc(o&&o.concurrentRequestLimit),this.Da=new Kg,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Kc.prototype,n.la=8,n.G=1,n.connect=function(o,c,h,p){it(0),this.W=o,this.H=c||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=nu(this,null,this.W),Ti(this)};function na(o){if(Gc(o),o.G==3){var c=o.U++,h=Ht(o.I);if(we(h,"SID",o.K),we(h,"RID",c),we(h,"TYPE","terminate"),ds(o,h),c=new un(o,o.j,c),c.L=2,c.v=mi(Ht(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=c.v,h=!0),h||(c.g=ru(c.j,null),c.g.ea(c.v)),c.F=Date.now(),di(c)}tu(o)}function Ei(o){o.g&&(sa(o),o.g.cancel(),o.g=null)}function Gc(o){Ei(o),o.u&&(l.clearTimeout(o.u),o.u=null),Ii(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Ti(o){if(!Pc(o.h)&&!o.s){o.s=!0;var c=o.Ga;oe||Bn(),ge||(oe(),ge=!0),yt.add(c,o),o.B=0}}function Yg(o,c){return Oc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=ss(y(o.Ga,o,c),eu(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const S=new un(this,this.j,o);let C=this.o;if(this.S&&(C?(C=m(C),T(C,this.S)):C=this.S),this.m!==null||this.O||(S.H=C,C=null),this.P)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=Jc(this,S,c),h=Ht(this.I),we(h,"RID",o),we(h,"CVER",22),this.D&&we(h,"X-HTTP-Session-Id",this.D),ds(this,h),C&&(this.O?c="headers="+encodeURIComponent(String(jc(C)))+"&"+c:this.m&&ta(h,this.m,C)),ea(this.h,S),this.Ua&&we(h,"TYPE","init"),this.P?(we(h,"$req",c),we(h,"SID","null"),S.T=!0,Jo(S,h,null)):Jo(S,h,c),this.G=2}}else this.G==3&&(o?Qc(this,o):this.i.length==0||Pc(this.h)||Qc(this))};function Qc(o,c){var h;c?h=c.l:h=o.U++;const p=Ht(o.I);we(p,"SID",o.K),we(p,"RID",h),we(p,"AID",o.T),ds(o,p),o.m&&o.o&&ta(p,o.m,o.o),h=new un(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),c&&(o.i=c.D.concat(o.i)),c=Jc(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),ea(o.h,h),Jo(h,p,c)}function ds(o,c){o.H&&ye(o.H,function(h,p){we(c,p,h)}),o.l&&Nc({},function(h,p){we(c,p,h)})}function Jc(o,c,h){h=Math.min(o.i.length,h);var p=o.l?y(o.l.Na,o.l,o):null;e:{var S=o.i;let C=-1;for(;;){const B=["count="+h];C==-1?0<h?(C=S[0].g,B.push("ofs="+C)):C=0:B.push("ofs="+C);let Ee=!0;for(let ze=0;ze<h;ze++){let me=S[ze].g;const Qe=S[ze].map;if(me-=C,0>me)C=Math.max(0,S[ze].g-100),Ee=!1;else try{Gg(Qe,B,"req"+me+"_")}catch{p&&p(Qe)}}if(Ee){p=B.join("&");break e}}}return o=o.i.splice(0,h),c.D=o,p}function Xc(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;oe||Bn(),ge||(oe(),ge=!0),yt.add(c,o),o.v=0}}function ra(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=ss(y(o.Fa,o),eu(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Yc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=ss(y(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,it(10),Ei(this),Yc(this))};function sa(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Yc(o){o.g=new un(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=Ht(o.qa);we(c,"RID","rpc"),we(c,"SID",o.K),we(c,"AID",o.T),we(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&we(c,"TO",o.ja),we(c,"TYPE","xmlhttp"),ds(o,c),o.m&&o.o&&ta(c,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=mi(Ht(c)),h.m=null,h.P=!0,bc(h,o)}n.Za=function(){this.C!=null&&(this.C=null,Ei(this),ra(this),it(19))};function Ii(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Zc(o,c){var h=null;if(o.g==c){Ii(o),sa(o),o.g=null;var p=2}else if(Zo(o.h,c))h=c.D,kc(o.h,c),p=1;else return;if(o.G!=0){if(c.o)if(p==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var S=o.B;p=ui(),ae(p,new Tc(p,h)),Ti(o)}else Xc(o);else if(S=c.s,S==3||S==0&&0<c.X||!(p==1&&Yg(o,c)||p==2&&ra(o)))switch(h&&0<h.length&&(c=o.h,c.i=c.i.concat(h)),S){case 1:Wn(o,5);break;case 4:Wn(o,10);break;case 3:Wn(o,6);break;default:Wn(o,2)}}}function eu(o,c){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*c}function Wn(o,c){if(o.j.info("Error code "+c),c==2){var h=y(o.fb,o),p=o.Xa;const S=!p;p=new zn(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||pi(p,"https"),mi(p),S?zg(p.toString(),h):Wg(p.toString(),h)}else it(2);o.G=0,o.l&&o.l.sa(c),tu(o),Gc(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function tu(o){if(o.G=0,o.ka=[],o.l){const c=Dc(o.h);(c.length!=0||o.i.length!=0)&&(L(o.ka,c),L(o.ka,o.i),o.h.i.length=0,M(o.i),o.i.length=0),o.l.ra()}}function nu(o,c,h){var p=h instanceof zn?Ht(h):new zn(h);if(p.g!="")c&&(p.g=c+"."+p.g),gi(p,p.s);else{var S=l.location;p=S.protocol,c=c?c+"."+S.hostname:S.hostname,S=+S.port;var C=new zn(null);p&&pi(C,p),c&&(C.g=c),S&&gi(C,S),h&&(C.l=h),p=C}return h=o.D,c=o.ya,h&&c&&we(p,h,c),we(p,"VER",o.la),ds(o,p),p}function ru(o,c,h){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new Ce(new _i({eb:h})):new Ce(o.pa),c.Ha(o.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function su(){}n=su.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function wi(){}wi.prototype.g=function(o,c){return new ht(o,c)};function ht(o,c){Y.call(this),this.g=new Kc(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!K(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!K(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new gr(this)}O(ht,Y),ht.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ht.prototype.close=function(){na(this.g)},ht.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=He(o),o=h);c.i.push(new xg(c.Ya++,o)),c.G==3&&Ti(c)},ht.prototype.N=function(){this.g.l=null,delete this.j,na(this.g),delete this.g,ht.aa.N.call(this)};function iu(o){Wo.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const h in c){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}O(iu,Wo);function ou(){Ko.call(this),this.status=1}O(ou,Ko);function gr(o){this.g=o}O(gr,su),gr.prototype.ua=function(){ae(this.g,"a")},gr.prototype.ta=function(o){ae(this.g,new iu(o))},gr.prototype.sa=function(o){ae(this.g,new ou)},gr.prototype.ra=function(){ae(this.g,"b")},wi.prototype.createWebChannel=wi.prototype.g,ht.prototype.send=ht.prototype.o,ht.prototype.open=ht.prototype.m,ht.prototype.close=ht.prototype.close,Qd=function(){return new wi},Gd=function(){return ui()},Kd=qn,Ka={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},hi.NO_ERROR=0,hi.TIMEOUT=8,hi.HTTP_ERROR=6,Li=hi,Ic.COMPLETE="complete",Wd=Ic,_c.EventType=ns,ns.OPEN="a",ns.CLOSE="b",ns.ERROR="c",ns.MESSAGE="d",Y.prototype.listen=Y.prototype.K,vs=_c,Ce.prototype.listenOnce=Ce.prototype.L,Ce.prototype.getLastError=Ce.prototype.Ka,Ce.prototype.getLastErrorCode=Ce.prototype.Ba,Ce.prototype.getStatus=Ce.prototype.Z,Ce.prototype.getResponseJson=Ce.prototype.Oa,Ce.prototype.getResponseText=Ce.prototype.oa,Ce.prototype.send=Ce.prototype.ea,Ce.prototype.setWithCredentials=Ce.prototype.Ha,zd=Ce}).apply(typeof Ci<"u"?Ci:typeof self<"u"?self:typeof window<"u"?window:{});const Xu="@firebase/firestore",Yu="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ze.UNAUTHENTICATED=new Ze(null),Ze.GOOGLE_CREDENTIALS=new Ze("google-credentials-uid"),Ze.FIRST_PARTY=new Ze("first-party-uid"),Ze.MOCK_USER=new Ze("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qr="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr=new Vl("@firebase/firestore");function Tr(){return lr.logLevel}function z(n,...e){if(lr.logLevel<=ue.DEBUG){const t=e.map(Ll);lr.debug(`Firestore (${Qr}): ${n}`,...t)}}function rn(n,...e){if(lr.logLevel<=ue.ERROR){const t=e.map(Ll);lr.error(`Firestore (${Qr}): ${n}`,...t)}}function Dn(n,...e){if(lr.logLevel<=ue.WARN){const t=e.map(Ll);lr.warn(`Firestore (${Qr}): ${n}`,...t)}}function Ll(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Jd(n,r,t)}function Jd(n,e,t){let r=`FIRESTORE (${Qr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw rn(r),new Error(r)}function Re(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Jd(e,s,r)}function de(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class J extends an{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class EE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ze.UNAUTHENTICATED)))}shutdown(){}}class TE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class IE{constructor(e){this.t=e,this.currentUser=Ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Re(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new Cr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Cr,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const u=i;e.enqueueRetryable((async()=>{await u.promise,await s(this.currentUser)}))},l=u=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((u=>l(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Cr)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Re(typeof r.accessToken=="string",31837,{l:r}),new Xd(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Re(e===null||typeof e=="string",2055,{h:e}),new Ze(e)}}class wE{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Ze.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class AE{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new wE(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ze.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Zu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class bE{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Et(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Re(this.o===void 0,3512);const r=i=>{i.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,z("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Zu(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Re(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Zu(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SE(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=SE(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function ce(n,e){return n<e?-1:n>e?1:0}function Ga(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return ce(r,s);{const i=Yd(),a=RE(i.encode(eh(n,t)),i.encode(eh(e,t)));return a!==0?a:ce(r,s)}}t+=r>65535?2:1}return ce(n.length,e.length)}function eh(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function RE(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return ce(n[t],e[t]);return ce(n.length,e.length)}function Br(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th="__name__";class Pt{constructor(e,t,r){t===void 0?t=0:t>e.length&&ie(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&ie(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Pt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Pt?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Pt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return ce(e.length,t.length)}static compareSegments(e,t){const r=Pt.isNumericId(e),s=Pt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Pt.extractNumericId(e).compare(Pt.extractNumericId(t)):Ga(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Cn.fromString(e.substring(4,e.length-2))}}class Se extends Pt{construct(e,t,r){return new Se(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new J(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new Se(t)}static emptyPath(){return new Se([])}}const CE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends Pt{construct(e,t,r){return new ct(e,t,r)}static isValidIdentifier(e){return CE.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===th}static keyField(){return new ct([th])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new J(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new J(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new J(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new J(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ct(t)}static emptyPath(){return new ct([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.path=e}static fromPath(e){return new Z(Se.fromString(e))}static fromName(e){return new Z(Se.fromString(e).popFirst(5))}static empty(){return new Z(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Se.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Z(new Se(e.slice()))}}function PE(n,e,t,r){if(e===!0&&r===!0)throw new J(j.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function nh(n){if(Z.isDocumentKey(n))throw new J(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function OE(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function kE(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ie(12329,{type:typeof n})}function Fi(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new J(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=kE(n);throw new J(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(n,e){const t={typeString:n};return e&&(t.value=e),t}function ei(n,e){if(!OE(n))throw new J(j.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new J(j.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rh=-62135596800,sh=1e6;class Ne{static now(){return Ne.fromMillis(Date.now())}static fromDate(e){return Ne.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*sh);return new Ne(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new J(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new J(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<rh)throw new J(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new J(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/sh}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ne._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ei(e,Ne._jsonSchema))return new Ne(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-rh;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ne._jsonSchemaVersion="firestore/timestamp/1.0",Ne._jsonSchema={type:Ve("string",Ne._jsonSchemaVersion),seconds:Ve("number"),nanoseconds:Ve("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{static fromTimestamp(e){return new ne(e)}static min(){return new ne(new Ne(0,0))}static max(){return new ne(new Ne(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs=-1;function DE(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=ne.fromTimestamp(r===1e9?new Ne(t+1,0):new Ne(t,r));return new Nn(s,Z.empty(),e)}function NE(n){return new Nn(n.readTime,n.key,zs)}class Nn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Nn(ne.min(),Z.empty(),zs)}static max(){return new Nn(ne.max(),Z.empty(),zs)}}function VE(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Z.comparator(n.documentKey,e.documentKey),t!==0?t:ce(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ME{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oo(n){if(n.code!==j.FAILED_PRECONDITION||n.message!==xE)throw n;z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ie(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new k(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof k?t:k.resolve(t)}catch(t){return k.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):k.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):k.reject(t)}static resolve(e){return new k(((t,r)=>{t(e)}))}static reject(e){return new k(((t,r)=>{r(e)}))}static waitFor(e){return new k(((t,r)=>{let s=0,i=0,a=!1;e.forEach((l=>{++s,l.next((()=>{++i,a&&i===s&&t()}),(u=>r(u)))})),a=!0,i===s&&t()}))}static or(e){let t=k.resolve(!1);for(const r of e)t=t.next((s=>s?k.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,i)=>{r.push(t.call(this,s,i))})),this.waitFor(r)}static mapArray(e,t){return new k(((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let u=0;u<i;u++){const f=u;t(e[f]).next((d=>{a[f]=d,++l,l===i&&r(a)}),(d=>s(d)))}}))}static doWhile(e,t){return new k(((r,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):r()};i()}))}}function LE(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Jr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}ko.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE=-1;function Do(n){return n==null}function Qa(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep="";function UE(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=ih(e)),e=BE(n.get(t),e);return ih(e)}function BE(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case ep:t+="";break;default:t+=i}}return t}function ih(n){return n+ep+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oh(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ti(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function jE(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,t){this.comparator=e,this.root=t||We.EMPTY}insert(e,t){return new ke(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,We.BLACK,null,null))}remove(e){return new ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,We.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Pi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Pi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Pi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Pi(this.root,e,this.comparator,!0)}}class Pi{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class We{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??We.RED,this.left=s??We.EMPTY,this.right=i??We.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new We(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return We.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return We.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ie(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ie(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ie(27949);return e+(this.isRed()?0:1)}}We.EMPTY=null,We.RED=!0,We.BLACK=!1;We.EMPTY=new class{constructor(){this.size=0}get key(){throw ie(57766)}get value(){throw ie(16141)}get color(){throw ie(16727)}get left(){throw ie(29726)}get right(){throw ie(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new We(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.comparator=e,this.data=new ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ah(this.data.getIterator())}getIteratorFrom(e){return new ah(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof Be)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Be(this.comparator);return t.data=e,t}}class ah{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e){this.fields=e,e.sort(ct.comparator)}static empty(){return new In([])}unionWith(e){let t=new Be(ct.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new In(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Br(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new tp("Invalid base64 string: "+i):i}})(e);return new Ke(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(e);return new Ke(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ke.EMPTY_BYTE_STRING=new Ke("");const $E=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vn(n){if(Re(!!n,39018),typeof n=="string"){let e=0;const t=$E.exec(n);if(Re(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Oe(n.seconds),nanos:Oe(n.nanos)}}function Oe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function xn(n){return typeof n=="string"?Ke.fromBase64String(n):Ke.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np="server_timestamp",rp="__type__",sp="__previous_value__",ip="__local_write_time__";function Fl(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[rp])===null||t===void 0?void 0:t.stringValue)===np}function No(n){const e=n.mapValue.fields[sp];return Fl(e)?No(e):e}function Ws(n){const e=Vn(n.mapValue.fields[ip].timestampValue);return new Ne(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(e,t,r,s,i,a,l,u,f,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=f,this.isUsingEmulator=d}}const no="(default)";class Ks{constructor(e,t){this.projectId=e,this.database=t||no}static empty(){return new Ks("","")}get isDefaultDatabase(){return this.database===no}isEqual(e){return e instanceof Ks&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE="__type__",zE="__max__",Oi={mapValue:{}},WE="__vector__",Ja="value";function Mn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Fl(n)?4:GE(n)?9007199254740991:KE(n)?10:11:ie(28295,{value:n})}function Ut(n,e){if(n===e)return!0;const t=Mn(n);if(t!==Mn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ws(n).isEqual(Ws(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Vn(s.timestampValue),l=Vn(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,i){return xn(s.bytesValue).isEqual(xn(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,i){return Oe(s.geoPointValue.latitude)===Oe(i.geoPointValue.latitude)&&Oe(s.geoPointValue.longitude)===Oe(i.geoPointValue.longitude)})(n,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Oe(s.integerValue)===Oe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Oe(s.doubleValue),l=Oe(i.doubleValue);return a===l?Qa(a)===Qa(l):isNaN(a)&&isNaN(l)}return!1})(n,e);case 9:return Br(n.arrayValue.values||[],e.arrayValue.values||[],Ut);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(oh(a)!==oh(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!Ut(a[u],l[u])))return!1;return!0})(n,e);default:return ie(52216,{left:n})}}function Gs(n,e){return(n.values||[]).find((t=>Ut(t,e)))!==void 0}function jr(n,e){if(n===e)return 0;const t=Mn(n),r=Mn(e);if(t!==r)return ce(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ce(n.booleanValue,e.booleanValue);case 2:return(function(i,a){const l=Oe(i.integerValue||i.doubleValue),u=Oe(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1})(n,e);case 3:return lh(n.timestampValue,e.timestampValue);case 4:return lh(Ws(n),Ws(e));case 5:return Ga(n.stringValue,e.stringValue);case 6:return(function(i,a){const l=xn(i),u=xn(a);return l.compareTo(u)})(n.bytesValue,e.bytesValue);case 7:return(function(i,a){const l=i.split("/"),u=a.split("/");for(let f=0;f<l.length&&f<u.length;f++){const d=ce(l[f],u[f]);if(d!==0)return d}return ce(l.length,u.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,a){const l=ce(Oe(i.latitude),Oe(a.latitude));return l!==0?l:ce(Oe(i.longitude),Oe(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return ch(n.arrayValue,e.arrayValue);case 10:return(function(i,a){var l,u,f,d;const g=i.fields||{},y=a.fields||{},R=(l=g[Ja])===null||l===void 0?void 0:l.arrayValue,O=(u=y[Ja])===null||u===void 0?void 0:u.arrayValue,M=ce(((f=R==null?void 0:R.values)===null||f===void 0?void 0:f.length)||0,((d=O==null?void 0:O.values)===null||d===void 0?void 0:d.length)||0);return M!==0?M:ch(R,O)})(n.mapValue,e.mapValue);case 11:return(function(i,a){if(i===Oi.mapValue&&a===Oi.mapValue)return 0;if(i===Oi.mapValue)return 1;if(a===Oi.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),f=a.fields||{},d=Object.keys(f);u.sort(),d.sort();for(let g=0;g<u.length&&g<d.length;++g){const y=Ga(u[g],d[g]);if(y!==0)return y;const R=jr(l[u[g]],f[d[g]]);if(R!==0)return R}return ce(u.length,d.length)})(n.mapValue,e.mapValue);default:throw ie(23264,{le:t})}}function lh(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ce(n,e);const t=Vn(n),r=Vn(e),s=ce(t.seconds,r.seconds);return s!==0?s:ce(t.nanos,r.nanos)}function ch(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=jr(t[s],r[s]);if(i)return i}return ce(t.length,r.length)}function $r(n){return Xa(n)}function Xa(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Vn(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return xn(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return Z.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Xa(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Xa(t.fields[a])}`;return s+"}"})(n.mapValue):ie(61005,{value:n})}function Ui(n){switch(Mn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=No(n);return e?16+Ui(e):16;case 5:return 2*n.stringValue.length;case 6:return xn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Ui(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return ti(r.fields,((i,a)=>{s+=i.length+Ui(a)})),s})(n.mapValue);default:throw ie(13486,{value:n})}}function Ya(n){return!!n&&"integerValue"in n}function Ul(n){return!!n&&"arrayValue"in n}function uh(n){return!!n&&"nullValue"in n}function hh(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function wa(n){return!!n&&"mapValue"in n}function KE(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[HE])===null||t===void 0?void 0:t.stringValue)===WE}function Vs(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ti(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=Vs(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Vs(n.arrayValue.values[t]);return e}return Object.assign({},n)}function GE(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===zE}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.value=e}static empty(){return new Dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!wa(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Vs(t)}setAll(e){let t=ct.emptyPath(),r={},s=[];e.forEach(((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=Vs(a):s.push(l.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());wa(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ut(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];wa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){ti(t,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new Dt(Vs(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,t,r,s,i,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new tt(e,0,ne.min(),ne.min(),ne.min(),Dt.empty(),0)}static newFoundDocument(e,t,r,s){return new tt(e,1,t,ne.min(),r,s,0)}static newNoDocument(e,t){return new tt(e,2,t,ne.min(),ne.min(),Dt.empty(),0)}static newUnknownDocument(e,t){return new tt(e,3,t,ne.min(),ne.min(),Dt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,t){this.position=e,this.inclusive=t}}function fh(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=Z.comparator(Z.fromName(a.referenceValue),t.key):r=jr(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function dh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ut(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,t="asc"){this.field=e,this.dir=t}}function QE(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{}class Ue extends op{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new XE(e,t,r):t==="array-contains"?new eT(e,r):t==="in"?new tT(e,r):t==="not-in"?new nT(e,r):t==="array-contains-any"?new rT(e,r):new Ue(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new YE(e,r):new ZE(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(jr(t,this.value)):t!==null&&Mn(this.value)===Mn(t)&&this.matchesComparison(jr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ie(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Bt extends op{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Bt(e,t)}matches(e){return ap(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function ap(n){return n.op==="and"}function lp(n){return JE(n)&&ap(n)}function JE(n){for(const e of n.filters)if(e instanceof Bt)return!1;return!0}function Za(n){if(n instanceof Ue)return n.field.canonicalString()+n.op.toString()+$r(n.value);if(lp(n))return n.filters.map((e=>Za(e))).join(",");{const e=n.filters.map((t=>Za(t))).join(",");return`${n.op}(${e})`}}function cp(n,e){return n instanceof Ue?(function(r,s){return s instanceof Ue&&r.op===s.op&&r.field.isEqual(s.field)&&Ut(r.value,s.value)})(n,e):n instanceof Bt?(function(r,s){return s instanceof Bt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,l)=>i&&cp(a,s.filters[l])),!0):!1})(n,e):void ie(19439)}function up(n){return n instanceof Ue?(function(t){return`${t.field.canonicalString()} ${t.op} ${$r(t.value)}`})(n):n instanceof Bt?(function(t){return t.op.toString()+" {"+t.getFilters().map(up).join(" ,")+"}"})(n):"Filter"}class XE extends Ue{constructor(e,t,r){super(e,t,r),this.key=Z.fromName(r.referenceValue)}matches(e){const t=Z.comparator(e.key,this.key);return this.matchesComparison(t)}}class YE extends Ue{constructor(e,t){super(e,"in",t),this.keys=hp("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class ZE extends Ue{constructor(e,t){super(e,"not-in",t),this.keys=hp("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function hp(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>Z.fromName(r.referenceValue)))}class eT extends Ue{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ul(t)&&Gs(t.arrayValue,this.value)}}class tT extends Ue{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Gs(this.value.arrayValue,t)}}class nT extends Ue{constructor(e,t){super(e,"not-in",t)}matches(e){if(Gs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Gs(this.value.arrayValue,t)}}class rT extends Ue{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ul(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>Gs(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e,t=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.Pe=null}}function ph(n,e=null,t=[],r=[],s=null,i=null,a=null){return new sT(n,e,t,r,s,i,a)}function Bl(n){const e=de(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>Za(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),Do(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>$r(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>$r(r))).join(",")),e.Pe=t}return e.Pe}function jl(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!QE(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!cp(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!dh(n.startAt,e.startAt)&&dh(n.endAt,e.endAt)}function el(n){return Z.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,t=null,r=[],s=[],i=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function iT(n,e,t,r,s,i,a,l){return new Vo(n,e,t,r,s,i,a,l)}function $l(n){return new Vo(n)}function gh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function oT(n){return n.collectionGroup!==null}function xs(n){const e=de(n);if(e.Te===null){e.Te=[];const t=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Be(ct.comparator);return a.filters.forEach((u=>{u.getFlattenedFilters().forEach((f=>{f.isInequality()&&(l=l.add(f.field))}))})),l})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Te.push(new so(i,r))})),t.has(ct.keyField().canonicalString())||e.Te.push(new so(ct.keyField(),r))}return e.Te}function Mt(n){const e=de(n);return e.Ie||(e.Ie=aT(e,xs(n))),e.Ie}function aT(n,e){if(n.limitType==="F")return ph(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new so(s.field,i)}));const t=n.endAt?new ro(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ro(n.startAt.position,n.startAt.inclusive):null;return ph(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function tl(n,e,t){return new Vo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function xo(n,e){return jl(Mt(n),Mt(e))&&n.limitType===e.limitType}function fp(n){return`${Bl(Mt(n))}|lt:${n.limitType}`}function Ir(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>up(s))).join(", ")}]`),Do(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>$r(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>$r(s))).join(",")),`Target(${r})`})(Mt(n))}; limitType=${n.limitType})`}function Mo(n,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Z.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,e)&&(function(r,s){for(const i of xs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(a,l,u){const f=fh(a,l,u);return a.inclusive?f<=0:f<0})(r.startAt,xs(r),s)||r.endAt&&!(function(a,l,u){const f=fh(a,l,u);return a.inclusive?f>=0:f>0})(r.endAt,xs(r),s))})(n,e)}function lT(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function dp(n){return(e,t)=>{let r=!1;for(const s of xs(n)){const i=cT(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function cT(n,e,t){const r=n.field.isKeyField()?Z.comparator(e.key,t.key):(function(i,a,l){const u=a.data.field(i),f=l.data.field(i);return u!==null&&f!==null?jr(u,f):ie(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ie(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ti(this.inner,((t,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return jE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uT=new ke(Z.comparator);function Ln(){return uT}const pp=new ke(Z.comparator);function Es(...n){let e=pp;for(const t of n)e=e.insert(t.key,t);return e}function hT(n){let e=pp;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function Yn(){return Ms()}function gp(){return Ms()}function Ms(){return new hr((n=>n.toString()),((n,e)=>n.isEqual(e)))}const fT=new Be(Z.comparator);function pe(...n){let e=fT;for(const t of n)e=e.add(t);return e}const dT=new Be(ce);function pT(){return dT}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gT(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qa(e)?"-0":e}}function mT(n){return{integerValue:""+n}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(){this._=void 0}}function _T(n,e,t){return n instanceof nl?(function(s,i){const a={fields:{[rp]:{stringValue:np},[ip]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Fl(i)&&(i=No(i)),i&&(a.fields[sp]=i),{mapValue:a}})(t,e):n instanceof io?mp(n,e):n instanceof oo?_p(n,e):(function(s,i){const a=vT(s,i),l=mh(a)+mh(s.Ee);return Ya(a)&&Ya(s.Ee)?mT(l):gT(s.serializer,l)})(n,e)}function yT(n,e,t){return n instanceof io?mp(n,e):n instanceof oo?_p(n,e):t}function vT(n,e){return n instanceof rl?(function(r){return Ya(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class nl extends Lo{}class io extends Lo{constructor(e){super(),this.elements=e}}function mp(n,e){const t=yp(e);for(const r of n.elements)t.some((s=>Ut(s,r)))||t.push(r);return{arrayValue:{values:t}}}class oo extends Lo{constructor(e){super(),this.elements=e}}function _p(n,e){let t=yp(e);for(const r of n.elements)t=t.filter((s=>!Ut(s,r)));return{arrayValue:{values:t}}}class rl extends Lo{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function mh(n){return Oe(n.integerValue||n.doubleValue)}function yp(n){return Ul(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function ET(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof io&&s instanceof io||r instanceof oo&&s instanceof oo?Br(r.elements,s.elements,Ut):r instanceof rl&&s instanceof rl?Ut(r.Ee,s.Ee):r instanceof nl&&s instanceof nl})(n.transform,e.transform)}class rr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new rr}static exists(e){return new rr(void 0,e)}static updateTime(e){return new rr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ql{}function vp(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new IT(n.key,rr.none()):new Hl(n.key,n.data,rr.none());{const t=n.data,r=Dt.empty();let s=new Be(ct.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Fo(n.key,r,new In(s.toArray()),rr.none())}}function TT(n,e,t){n instanceof Hl?(function(s,i,a){const l=s.value.clone(),u=yh(s.fieldTransforms,i,a.transformResults);l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,e,t):n instanceof Fo?(function(s,i,a){if(!Bi(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=yh(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(Ep(s)),u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(n,e,t):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function Ls(n,e,t,r){return n instanceof Hl?(function(i,a,l,u){if(!Bi(i.precondition,a))return l;const f=i.value.clone(),d=vh(i.fieldTransforms,u,a);return f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null})(n,e,t,r):n instanceof Fo?(function(i,a,l,u){if(!Bi(i.precondition,a))return l;const f=vh(i.fieldTransforms,u,a),d=a.data;return d.setAll(Ep(i)),d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((g=>g.field)))})(n,e,t,r):(function(i,a,l){return Bi(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l})(n,e,t)}function _h(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Br(r,s,((i,a)=>ET(i,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Hl extends ql{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Fo extends ql{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ep(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function yh(n,e,t){const r=new Map;Re(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,yT(a,l,t[s]))}return r}function vh(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,_T(i,a,e))}return r}class IT extends ql{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&TT(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Ls(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Ls(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=gp();return this.mutations.forEach((s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const u=vp(a,l);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(ne.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),pe())}isEqual(e){return this.batchId===e.batchId&&Br(this.mutations,e.mutations,((t,r)=>_h(t,r)))&&Br(this.baseMutations,e.baseMutations,((t,r)=>_h(t,r)))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De,fe;function Tp(n){if(n===void 0)return rn("GRPC error has no .code"),j.UNKNOWN;switch(n){case De.OK:return j.OK;case De.CANCELLED:return j.CANCELLED;case De.UNKNOWN:return j.UNKNOWN;case De.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case De.INTERNAL:return j.INTERNAL;case De.UNAVAILABLE:return j.UNAVAILABLE;case De.UNAUTHENTICATED:return j.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case De.NOT_FOUND:return j.NOT_FOUND;case De.ALREADY_EXISTS:return j.ALREADY_EXISTS;case De.PERMISSION_DENIED:return j.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case De.ABORTED:return j.ABORTED;case De.OUT_OF_RANGE:return j.OUT_OF_RANGE;case De.UNIMPLEMENTED:return j.UNIMPLEMENTED;case De.DATA_LOSS:return j.DATA_LOSS;default:return ie(39323,{code:n})}}(fe=De||(De={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ST=new Cn([4294967295,4294967295],0);function Eh(n){const e=Yd().encode(n),t=new Hd;return t.update(e),new Uint8Array(t.digest())}function Th(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Cn([t,r],0),new Cn([s,i],0)]}class zl{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Ts(`Invalid padding: ${t}`);if(r<0)throw new Ts(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ts(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Ts(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Cn.fromNumber(this.fe)}pe(e,t,r){let s=e.add(t.multiply(Cn.fromNumber(r)));return s.compare(ST)===1&&(s=new Cn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=Eh(e),[r,s]=Th(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);if(!this.ye(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new zl(i,s,t);return r.forEach((l=>a.insert(l))),a}insert(e){if(this.fe===0)return;const t=Eh(e),[r,s]=Th(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);this.we(a)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Ts extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,ni.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Uo(ne.min(),s,new ke(ce),Ln(),pe())}}class ni{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ni(r,t,pe(),pe(),pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=s}}class Ip{constructor(e,t){this.targetId=e,this.De=t}}class wp{constructor(e,t,r=Ke.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Ih{constructor(){this.ve=0,this.Ce=wh(),this.Fe=Ke.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=pe(),t=pe(),r=pe();return this.Ce.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:ie(38017,{changeType:i})}})),new ni(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=wh()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Re(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class RT{constructor(e){this.We=e,this.Ge=new Map,this.ze=Ln(),this.je=ki(),this.Je=ki(),this.He=new ke(ce)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:ie(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((r,s)=>{this.nt(s)&&t(s)}))}it(e){const t=e.targetId,r=e.De.count,s=this.st(t);if(s){const i=s.target;if(el(i))if(r===0){const a=new Z(i.path);this.Xe(t,a,tt.newNoDocument(a,ne.min()))}else Re(r===1,20013,{expectedCount:r});else{const a=this.ot(t);if(a!==r){const l=this._t(e),u=l?this.ut(l,e,a):1;if(u!==0){this.rt(t);const f=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,f)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,l;try{a=xn(r).toUint8Array()}catch(u){if(u instanceof tp)return Dn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new zl(a,s,i)}catch(u){return Dn(u instanceof Ts?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.fe===0?null:l}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let s=0;return r.forEach((i=>{const a=this.We.lt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Xe(t,i,null),s++)})),s}Pt(e){const t=new Map;this.Ge.forEach(((i,a)=>{const l=this.st(a);if(l){if(i.current&&el(l.target)){const u=new Z(l.target.path);this.Tt(u).has(a)||this.It(a,u)||this.Xe(a,u,tt.newNoDocument(u,e))}i.Ne&&(t.set(a,i.Le()),i.ke())}}));let r=pe();this.Je.forEach(((i,a)=>{let l=!0;a.forEachWhile((u=>{const f=this.st(u);return!f||f.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(i))})),this.ze.forEach(((i,a)=>a.setReadTime(e)));const s=new Uo(e,t,this.He,this.ze,r);return this.ze=Ln(),this.je=ki(),this.Je=ki(),this.He=new ke(ce),s}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,t)?s.qe(t,1):s.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Ih,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Be(ce),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Be(ce),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||z("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Ih),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function ki(){return new ke(Z.comparator)}function wh(){return new ke(Z.comparator)}const CT={asc:"ASCENDING",desc:"DESCENDING"},PT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},OT={and:"AND",or:"OR"};class kT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function sl(n,e){return n.useProto3Json||Do(e)?e:{value:e}}function DT(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function NT(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Pr(n){return Re(!!n,49232),ne.fromTimestamp((function(t){const r=Vn(t);return new Ne(r.seconds,r.nanos)})(n))}function VT(n,e){return il(n,e).canonicalString()}function il(n,e){const t=(function(s){return new Se(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Ap(n){const e=Se.fromString(n);return Re(Pp(e),10190,{key:e.toString()}),e}function Aa(n,e){const t=Ap(e);if(t.get(1)!==n.databaseId.projectId)throw new J(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new J(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Z(Sp(t))}function bp(n,e){return VT(n.databaseId,e)}function xT(n){const e=Ap(n);return e.length===4?Se.emptyPath():Sp(e)}function Ah(n){return new Se(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Sp(n){return Re(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function MT(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:ie(39313,{state:f})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(f,d){return f.useProto3Json?(Re(d===void 0||typeof d=="string",58123),Ke.fromBase64String(d||"")):(Re(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Ke.fromUint8Array(d||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&(function(f){const d=f.code===void 0?j.UNKNOWN:Tp(f.code);return new J(d,f.message||"")})(a);t=new wp(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Aa(n,r.document.name),i=Pr(r.document.updateTime),a=r.document.createTime?Pr(r.document.createTime):ne.min(),l=new Dt({mapValue:{fields:r.document.fields}}),u=tt.newFoundDocument(s,i,a,l),f=r.targetIds||[],d=r.removedTargetIds||[];t=new ji(f,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Aa(n,r.document),i=r.readTime?Pr(r.readTime):ne.min(),a=tt.newNoDocument(s,i),l=r.removedTargetIds||[];t=new ji([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Aa(n,r.document),i=r.removedTargetIds||[];t=new ji([],i,s,null)}else{if(!("filter"in e))return ie(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new bT(s,i),l=r.targetId;t=new Ip(l,a)}}return t}function LT(n,e){return{documents:[bp(n,e.path)]}}function FT(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=bp(n,s);const i=(function(f){if(f.length!==0)return Cp(Bt.create(f,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const a=(function(f){if(f.length!==0)return f.map((d=>(function(y){return{field:wr(y.field),direction:jT(y.dir)}})(d)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=sl(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=(function(f){return{before:f.inclusive,values:f.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(f){return{before:!f.inclusive,values:f.position}})(e.endAt)),{Vt:t,parent:s}}function UT(n){let e=xT(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Re(r===1,65062);const d=t.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];t.where&&(i=(function(g){const y=Rp(g);return y instanceof Bt&&lp(y)?y.getFilters():[y]})(t.where));let a=[];t.orderBy&&(a=(function(g){return g.map((y=>(function(O){return new so(Ar(O.field),(function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(O.direction))})(y)))})(t.orderBy));let l=null;t.limit&&(l=(function(g){let y;return y=typeof g=="object"?g.value:g,Do(y)?null:y})(t.limit));let u=null;t.startAt&&(u=(function(g){const y=!!g.before,R=g.values||[];return new ro(R,y)})(t.startAt));let f=null;return t.endAt&&(f=(function(g){const y=!g.before,R=g.values||[];return new ro(R,y)})(t.endAt)),iT(e,s,a,i,l,"F",u,f)}function BT(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ie(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Rp(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Ar(t.unaryFilter.field);return Ue.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ar(t.unaryFilter.field);return Ue.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ar(t.unaryFilter.field);return Ue.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Ar(t.unaryFilter.field);return Ue.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ie(61313);default:return ie(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Ue.create(Ar(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ie(58110);default:return ie(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Bt.create(t.compositeFilter.filters.map((r=>Rp(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ie(1026)}})(t.compositeFilter.op))})(n):ie(30097,{filter:n})}function jT(n){return CT[n]}function $T(n){return PT[n]}function qT(n){return OT[n]}function wr(n){return{fieldPath:n.canonicalString()}}function Ar(n){return ct.fromServerFormat(n.fieldPath)}function Cp(n){return n instanceof Ue?(function(t){if(t.op==="=="){if(hh(t.value))return{unaryFilter:{field:wr(t.field),op:"IS_NAN"}};if(uh(t.value))return{unaryFilter:{field:wr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(hh(t.value))return{unaryFilter:{field:wr(t.field),op:"IS_NOT_NAN"}};if(uh(t.value))return{unaryFilter:{field:wr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:wr(t.field),op:$T(t.op),value:t.value}}})(n):n instanceof Bt?(function(t){const r=t.getFilters().map((s=>Cp(s)));return r.length===1?r[0]:{compositeFilter:{op:qT(t.op),filters:r}}})(n):ie(54877,{filter:n})}function Pp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e,t,r,s,i=ne.min(),a=ne.min(),l=Ke.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new wn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new wn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(e){this.gt=e}}function zT(n){const e=UT({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?tl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(){this.Dn=new KT}addToCollectionParentIndex(e,t){return this.Dn.add(t),k.resolve()}getCollectionParents(e,t){return k.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return k.resolve()}deleteFieldIndex(e,t){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,t){return k.resolve()}getDocumentsMatchingTarget(e,t){return k.resolve(null)}getIndexType(e,t){return k.resolve(0)}getFieldIndexes(e,t){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,t){return k.resolve(Nn.min())}getMinOffsetFromCollectionGroup(e,t){return k.resolve(Nn.min())}updateCollectionGroup(e,t,r){return k.resolve()}updateIndexEntries(e,t){return k.resolve()}}class KT{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Be(Se.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Be(Se.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Op=41943040;class ut{static withCacheSize(e){return new ut(e,ut.DEFAULT_COLLECTION_PERCENTILE,ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ut.DEFAULT_COLLECTION_PERCENTILE=10,ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ut.DEFAULT=new ut(Op,ut.DEFAULT_COLLECTION_PERCENTILE,ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ut.DISABLED=new ut(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new qr(0)}static ur(){return new qr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh="LruGarbageCollector",GT=1048576;function Rh([n,e],[t,r]){const s=ce(n,t);return s===0?ce(e,r):s}class QT{constructor(e){this.Tr=e,this.buffer=new Be(Rh),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Rh(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class JT{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){z(Sh,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Jr(t)?z(Sh,"Ignoring IndexedDB error during garbage collection: ",t):await Oo(t)}await this.Rr(3e5)}))}}class XT{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return k.resolve(ko.ue);const r=new QT(t);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(z("LruGarbageCollector","Garbage collection skipped; disabled"),k.resolve(bh)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),bh):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,s,i,a,l,u,f;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((g=>(g>this.params.maximumSequenceNumbersToCollect?(z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(e,s)))).next((g=>(r=g,l=Date.now(),this.removeTargets(e,r,t)))).next((g=>(i=g,u=Date.now(),this.removeOrphanedDocuments(e,r)))).next((g=>(f=Date.now(),Tr()<=ue.DEBUG&&z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${g} documents in `+(f-u)+`ms
Total Duration: ${f-d}ms`),k.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g}))))}}function YT(n,e){return new XT(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(){this.changes=new hr((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,tt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?k.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&Ls(r.mutation,s,In.empty(),Ne.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,pe()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=pe()){const s=Yn();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((i=>{let a=Es();return i.forEach(((l,u)=>{a=a.insert(l,u.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const r=Yn();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,pe())))}populateOverlays(e,t,r){const s=[];return r.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((a,l)=>{t.set(a,l)}))}))}computeViews(e,t,r,s){let i=Ln();const a=Ms(),l=(function(){return Ms()})();return t.forEach(((u,f)=>{const d=r.get(f.key);s.has(f.key)&&(d===void 0||d.mutation instanceof Fo)?i=i.insert(f.key,f):d!==void 0?(a.set(f.key,d.mutation.getFieldMask()),Ls(d.mutation,f,d.mutation.getFieldMask(),Ne.now())):a.set(f.key,In.empty())})),this.recalculateAndSaveOverlays(e,i).next((u=>(u.forEach(((f,d)=>a.set(f,d))),t.forEach(((f,d)=>{var g;return l.set(f,new eI(d,(g=a.get(f))!==null&&g!==void 0?g:null))})),l)))}recalculateAndSaveOverlays(e,t){const r=Ms();let s=new ke(((a,l)=>a-l)),i=pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const l of a)l.keys().forEach((u=>{const f=t.get(u);if(f===null)return;let d=r.get(u)||In.empty();d=l.applyToLocalView(f,d),r.set(u,d);const g=(s.get(l.batchId)||pe()).add(u);s=s.insert(l.batchId,g)}))})).next((()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),f=u.key,d=u.value,g=gp();d.forEach((y=>{if(!i.has(y)){const R=vp(t.get(y),r.get(y));R!==null&&g.set(y,R),i=i.add(y)}})),a.push(this.documentOverlayCache.saveOverlays(e,f,g))}return k.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return(function(a){return Z.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):oT(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):k.resolve(Yn());let l=zs,u=i;return a.next((f=>k.forEach(f,((d,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),i.get(d)?k.resolve():this.remoteDocumentCache.getEntry(e,d).next((y=>{u=u.insert(d,y)}))))).next((()=>this.populateOverlays(e,f,i))).next((()=>this.computeViews(e,u,f,pe()))).next((d=>({batchId:l,changes:hT(d)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Z(t)).next((r=>{let s=Es();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Es();return this.indexManager.getCollectionParents(e,i).next((l=>k.forEach(l,(u=>{const f=(function(g,y){return new Vo(y,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)})(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,f,r,s).next((d=>{d.forEach(((g,y)=>{a=a.insert(g,y)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s)))).next((a=>{i.forEach(((u,f)=>{const d=f.getKey();a.get(d)===null&&(a=a.insert(d,tt.newInvalidDocument(d)))}));let l=Es();return a.forEach(((u,f)=>{const d=i.get(u);d!==void 0&&Ls(d.mutation,f,In.empty(),Ne.now()),Mo(t,f)&&(l=l.insert(u,f))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return k.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:Pr(s.createTime)}})(t)),k.resolve()}getNamedQuery(e,t){return k.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(s){return{name:s.name,query:zT(s.bundledQuery),readTime:Pr(s.readTime)}})(t)),k.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(){this.overlays=new ke(Z.comparator),this.kr=new Map}getOverlay(e,t){return k.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Yn();return k.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,i)=>{this.wt(e,t,i)})),k.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(r)),k.resolve()}getOverlaysForCollection(e,t,r){const s=Yn(),i=t.length+1,a=new Z(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,f=u.getKey();if(!t.isPrefixOf(f.path))break;f.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return k.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new ke(((f,d)=>f-d));const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===t&&f.largestBatchId>r){let d=i.get(f.largestBatchId);d===null&&(d=Yn(),i=i.insert(f.largestBatchId,d)),d.set(f.getKey(),f)}}const l=Yn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((f,d)=>l.set(f,d))),!(l.size()>=s)););return k.resolve(l)}wt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new AT(t,r));let i=this.kr.get(t);i===void 0&&(i=pe(),this.kr.set(t,i)),this.kr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(){this.sessionToken=Ke.EMPTY_BYTE_STRING}getSessionToken(e){return k.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,k.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(){this.qr=new Be(je.Qr),this.$r=new Be(je.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new je(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new je(e,t))}Gr(e,t){e.forEach((r=>this.removeReference(r,t)))}zr(e){const t=new Z(new Se([])),r=new je(t,e),s=new je(t,e+1),i=[];return this.$r.forEachInRange([r,s],(a=>{this.Wr(a),i.push(a.key)})),i}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new Z(new Se([])),r=new je(t,e),s=new je(t,e+1);let i=pe();return this.$r.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(e){const t=new je(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class je{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return Z.comparator(e.key,t.key)||ce(e.Hr,t.Hr)}static Ur(e,t){return ce(e.Hr,t.Hr)||Z.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Be(je.Qr)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new wT(i,t,r,s);this.mutationQueue.push(a);for(const l of s)this.Yr=this.Yr.add(new je(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return k.resolve(a)}lookupMutationBatch(e,t){return k.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return k.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?FE:this.er-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new je(t,0),s=new je(t,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],(a=>{const l=this.Zr(a.Hr);i.push(l)})),k.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Be(ce);return t.forEach((s=>{const i=new je(s,0),a=new je(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,a],(l=>{r=r.add(l.Hr)}))})),k.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;Z.isDocumentKey(i)||(i=i.child(""));const a=new je(new Z(i),0);let l=new Be(ce);return this.Yr.forEachWhile((u=>{const f=u.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(l=l.add(u.Hr)),!0)}),a),k.resolve(this.ei(l))}ei(e){const t=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){Re(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return k.forEach(t.mutations,(s=>{const i=new je(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,t){const r=new je(t,0),s=this.Yr.firstAfterOrEqual(r);return k.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(e){this.ni=e,this.docs=(function(){return new ke(Z.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return k.resolve(r?r.document.mutableCopy():tt.newInvalidDocument(t))}getEntries(e,t){let r=Ln();return t.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():tt.newInvalidDocument(s))})),k.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Ln();const a=t.path,l=new Z(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:f,value:{document:d}}=u.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||VE(NE(d),r)<=0||(s.has(d.key)||Mo(t,d))&&(i=i.insert(d.key,d.mutableCopy()))}return k.resolve(i)}getAllFromCollectionGroup(e,t,r,s){ie(9500)}ri(e,t){return k.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new aI(this)}getSize(e){return k.resolve(this.size)}}class aI extends ZT{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),k.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e){this.persistence=e,this.ii=new hr((t=>Bl(t)),jl),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this.si=0,this.oi=new Wl,this.targetCount=0,this._i=qr.ar()}forEachTarget(e,t){return this.ii.forEach(((r,s)=>t(s))),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),k.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new qr(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,k.resolve()}updateTargetData(e,t){return this.hr(t),k.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ii.forEach(((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.ii.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)})),k.waitFor(i).next((()=>s))}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return k.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),k.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((a=>{i.push(s.markPotentiallyOrphaned(e,a))})),k.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),k.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return k.resolve(r)}containsKey(e,t){return k.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(e,t){this.ai={},this.overlays={},this.ui=new ko(0),this.ci=!1,this.ci=!0,this.li=new sI,this.referenceDelegate=e(this),this.hi=new lI(this),this.indexManager=new WT,this.remoteDocumentCache=(function(s){return new oI(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new HT(t),this.Ti=new nI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new rI,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new iI(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){z("MemoryPersistence","Starting transaction:",e);const s=new cI(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,t){return k.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,t))))}}class cI extends ME{constructor(e){super(),this.currentSequenceNumber=e}}class Kl{constructor(e){this.persistence=e,this.Ai=new Wl,this.Ri=null}static Vi(e){return new Kl(e)}get mi(){if(this.Ri)return this.Ri;throw ie(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),k.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),k.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.mi.add(i.toString())))})).next((()=>r.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.mi,(r=>{const s=Z.fromPath(r);return this.fi(e,s).next((i=>{i||t.removeEntry(s,ne.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return k.or([()=>k.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class ao{constructor(e,t){this.persistence=e,this.gi=new hr((r=>UE(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=YT(this,t)}static Vi(e,t){return new ao(e,t)}Ii(){}di(e){return k.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}gr(e,t){return k.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((i=>i?k.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,(a=>this.Sr(e,a,t).next((l=>{l||(r++,i.removeEntry(a,ne.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),k.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),k.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),k.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),k.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ui(e.data.value)),t}Sr(e,t,r){return k.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.gi.get(t);return k.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=s}static Es(e,t){let r=pe(),s=pe();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Gl(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return nv()?8:LE(rt())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ps(e,t).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ys(e,t,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new uI;return this.ws(e,t,a).next((l=>{if(i.result=l,this.Rs)return this.Ss(e,t,a,l.size)}))})).next((()=>i.result))}Ss(e,t,r,s){return r.documentReadCount<this.Vs?(Tr()<=ue.DEBUG&&z("QueryEngine","SDK will not create cache indexes for query:",Ir(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),k.resolve()):(Tr()<=ue.DEBUG&&z("QueryEngine","Query:",Ir(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(Tr()<=ue.DEBUG&&z("QueryEngine","The SDK decides to create cache indexes for query:",Ir(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Mt(t))):k.resolve())}ps(e,t){if(gh(t))return k.resolve(null);let r=Mt(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=tl(t,null,"F"),r=Mt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const a=pe(...i);return this.gs.getDocuments(e,a).next((l=>this.indexManager.getMinOffset(e,r).next((u=>{const f=this.bs(t,l);return this.Ds(t,f,a,u.readTime)?this.ps(e,tl(t,null,"F")):this.vs(e,f,t,u)}))))})))))}ys(e,t,r,s){return gh(t)||s.isEqual(ne.min())?k.resolve(null):this.gs.getDocuments(e,r).next((i=>{const a=this.bs(t,i);return this.Ds(t,a,r,s)?k.resolve(null):(Tr()<=ue.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ir(t)),this.vs(e,a,t,DE(s,zs)).next((l=>l)))}))}bs(e,t){let r=new Be(dp(e));return t.forEach(((s,i)=>{Mo(e,i)&&(r=r.add(i))})),r}Ds(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,t,r){return Tr()<=ue.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",Ir(t)),this.gs.getDocumentsMatchingQuery(e,t,Nn.min(),r)}vs(e,t,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((i=>(t.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql="LocalStore",fI=3e8;class dI{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.Fs=new ke(ce),this.Ms=new hr((i=>Bl(i)),jl),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new tI(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function pI(n,e,t,r){return new dI(n,e,t,r)}async function Dp(n,e){const t=de(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,t.Ns(e),t.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],l=[];let u=pe();for(const f of s){a.push(f.batchId);for(const d of f.mutations)u=u.add(d.key)}for(const f of i){l.push(f.batchId);for(const d of f.mutations)u=u.add(d.key)}return t.localDocuments.getDocuments(r,u).next((f=>({Bs:f,removedBatchIds:a,addedBatchIds:l})))}))}))}function Np(n){const e=de(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function gI(n,e){const t=de(n),r=e.snapshotVersion;let s=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=t.Os.newChangeBuffer({trackRemovals:!0});s=t.Fs;const l=[];e.targetChanges.forEach(((d,g)=>{const y=s.get(g);if(!y)return;l.push(t.hi.removeMatchingKeys(i,d.removedDocuments,g).next((()=>t.hi.addMatchingKeys(i,d.addedDocuments,g))));let R=y.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?R=R.withResumeToken(Ke.EMPTY_BYTE_STRING,ne.min()).withLastLimboFreeSnapshotVersion(ne.min()):d.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(d.resumeToken,r)),s=s.insert(g,R),(function(M,L,W){return M.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=fI?!0:W.addedDocuments.size+W.modifiedDocuments.size+W.removedDocuments.size>0})(y,R,d)&&l.push(t.hi.updateTargetData(i,R))}));let u=Ln(),f=pe();if(e.documentUpdates.forEach((d=>{e.resolvedLimboDocuments.has(d)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,d))})),l.push(mI(i,a,e.documentUpdates).next((d=>{u=d.Ls,f=d.ks}))),!r.isEqual(ne.min())){const d=t.hi.getLastRemoteSnapshotVersion(i).next((g=>t.hi.setTargetsMetadata(i,i.currentSequenceNumber,r)));l.push(d)}return k.waitFor(l).next((()=>a.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,u,f))).next((()=>u))})).then((i=>(t.Fs=s,i)))}function mI(n,e,t){let r=pe(),s=pe();return t.forEach((i=>r=r.add(i))),e.getEntries(n,r).next((i=>{let a=Ln();return t.forEach(((l,u)=>{const f=i.get(l);u.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(ne.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!f.isValidDocument()||u.version.compareTo(f.version)>0||u.version.compareTo(f.version)===0&&f.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):z(Ql,"Ignoring outdated watch update for ",l,". Current version:",f.version," Watch version:",u.version)})),{Ls:a,ks:s}}))}function _I(n,e){const t=de(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.hi.getTargetData(r,e).next((i=>i?(s=i,k.resolve(s)):t.hi.allocateTargetId(r).next((a=>(s=new wn(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r}))}async function ol(n,e,t){const r=de(n),s=r.Fs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!Jr(a))throw a;z(Ql,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function Ch(n,e,t){const r=de(n);let s=ne.min(),i=pe();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(u,f,d){const g=de(u),y=g.Ms.get(d);return y!==void 0?k.resolve(g.Fs.get(y)):g.hi.getTargetData(f,d)})(r,a,Mt(e)).next((l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,l.targetId).next((u=>{i=u}))})).next((()=>r.Cs.getDocumentsMatchingQuery(a,e,t?s:ne.min(),t?i:pe()))).next((l=>(yI(r,lT(e),l),{documents:l,qs:i})))))}function yI(n,e,t){let r=n.xs.get(e)||ne.min();t.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),n.xs.set(e,r)}class Ph{constructor(){this.activeTargetIds=pT()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class vI{constructor(){this.Fo=new Ph,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Ph,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh="ConnectivityMonitor";class kh{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){z(Oh,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){z(Oh,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Di=null;function al(){return Di===null?Di=(function(){return 268435456+Math.round(2147483648*Math.random())})():Di++,"0x"+Di.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba="RestConnection",TI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class II{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===no?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const a=al(),l=this.Go(e,t.toUriEncodedString());z(ba,`Sending RPC '${e}' ${a}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,s,i);const{host:f}=new URL(l),d=Kr(f);return this.jo(e,l,u,r,d).then((g=>(z(ba,`Received RPC '${e}' ${a}: `,g),g)),(g=>{throw Dn(ba,`RPC '${e}' ${a} failed with error: `,g,"url: ",l,"request:",r),g}))}Jo(e,t,r,s,i,a){return this.Wo(e,t,r,s,i)}zo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Qr})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Go(e,t){const r=TI[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe="WebChannelConnection";class AI extends II{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,s,i){const a=al();return new Promise(((l,u)=>{const f=new zd;f.setWithCredentials(!0),f.listenOnce(Wd.COMPLETE,(()=>{try{switch(f.getLastErrorCode()){case Li.NO_ERROR:const g=f.getResponseJson();z(Xe,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(g)),l(g);break;case Li.TIMEOUT:z(Xe,`RPC '${e}' ${a} timed out`),u(new J(j.DEADLINE_EXCEEDED,"Request time out"));break;case Li.HTTP_ERROR:const y=f.getStatus();if(z(Xe,`RPC '${e}' ${a} failed with status:`,y,"response text:",f.getResponseText()),y>0){let R=f.getResponseJson();Array.isArray(R)&&(R=R[0]);const O=R==null?void 0:R.error;if(O&&O.status&&O.message){const M=(function(W){const K=W.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(K)>=0?K:j.UNKNOWN})(O.status);u(new J(M,O.message))}else u(new J(j.UNKNOWN,"Server responded with status "+f.getStatus()))}else u(new J(j.UNAVAILABLE,"Connection failed."));break;default:ie(9055,{c_:e,streamId:a,l_:f.getLastErrorCode(),h_:f.getLastError()})}}finally{z(Xe,`RPC '${e}' ${a} completed.`)}}));const d=JSON.stringify(s);z(Xe,`RPC '${e}' ${a} sending request:`,s),f.send(t,"POST",d,r,15)}))}P_(e,t,r){const s=al(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Qd(),l=Gd(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(u.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const d=i.join("");z(Xe,`Creating RPC '${e}' stream ${s}: ${d}`,u);const g=a.createWebChannel(d,u);this.T_(g);let y=!1,R=!1;const O=new wI({Ho:L=>{R?z(Xe,`Not sending because RPC '${e}' stream ${s} is closed:`,L):(y||(z(Xe,`Opening RPC '${e}' stream ${s} transport.`),g.open(),y=!0),z(Xe,`RPC '${e}' stream ${s} sending:`,L),g.send(L))},Yo:()=>g.close()}),M=(L,W,K)=>{L.listen(W,(G=>{try{K(G)}catch(H){setTimeout((()=>{throw H}),0)}}))};return M(g,vs.EventType.OPEN,(()=>{R||(z(Xe,`RPC '${e}' stream ${s} transport opened.`),O.s_())})),M(g,vs.EventType.CLOSE,(()=>{R||(R=!0,z(Xe,`RPC '${e}' stream ${s} transport closed`),O.__(),this.I_(g))})),M(g,vs.EventType.ERROR,(L=>{R||(R=!0,Dn(Xe,`RPC '${e}' stream ${s} transport errored. Name:`,L.name,"Message:",L.message),O.__(new J(j.UNAVAILABLE,"The operation could not be completed")))})),M(g,vs.EventType.MESSAGE,(L=>{var W;if(!R){const K=L.data[0];Re(!!K,16349);const G=K,H=(G==null?void 0:G.error)||((W=G[0])===null||W===void 0?void 0:W.error);if(H){z(Xe,`RPC '${e}' stream ${s} received error:`,H);const se=H.status;let ye=(function(_){const T=De[_];if(T!==void 0)return Tp(T)})(se),I=H.message;ye===void 0&&(ye=j.INTERNAL,I="Unknown error status: "+se+" with message "+H.message),R=!0,O.__(new J(ye,I)),g.close()}else z(Xe,`RPC '${e}' stream ${s} received:`,K),O.a_(K)}})),M(l,Kd.STAT_EVENT,(L=>{L.stat===Ka.PROXY?z(Xe,`RPC '${e}' stream ${s} detected buffering proxy`):L.stat===Ka.NOPROXY&&z(Xe,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{O.o_()}),0),O}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function Sa(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vp(n){return new kT(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-r);s>0&&z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh="PersistentStream";class bI{constructor(e,t,r,s,i,a,l,u){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new xp(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===j.RESOURCE_EXHAUSTED?(rn(t.toString()),rn("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===t&&this.W_(r,s)}),(r=>{e((()=>{const s=new J(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return z(Dh,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(z(Dh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class SI extends bI{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=MT(this.serializer,e),r=(function(i){if(!("targetChange"in i))return ne.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?ne.min():a.readTime?Pr(a.readTime):ne.min()})(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=Ah(this.serializer),t.addTarget=(function(i,a){let l;const u=a.target;if(l=el(u)?{documents:LT(i,u)}:{query:FT(i,u).Vt},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=NT(i,a.resumeToken);const f=sl(i,a.expectedCount);f!==null&&(l.expectedCount=f)}else if(a.snapshotVersion.compareTo(ne.min())>0){l.readTime=DT(i,a.snapshotVersion.toTimestamp());const f=sl(i,a.expectedCount);f!==null&&(l.expectedCount=f)}return l})(this.serializer,e);const r=BT(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=Ah(this.serializer),t.removeTarget=e,this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{}class CI extends RI{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new J(j.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Wo(e,il(t,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new J(j.UNKNOWN,i.toString())}))}Jo(e,t,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.Jo(e,il(t,r),s,a,l,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new J(j.UNKNOWN,a.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class PI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(rn(t),this._a=!1):z("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr="RemoteStore";class OI{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((a=>{r.enqueueAndForget((async()=>{si(this)&&(z(Hr,"Restarting streams for network reachability change."),await(async function(u){const f=de(u);f.Ia.add(4),await ri(f),f.Aa.set("Unknown"),f.Ia.delete(4),await Bo(f)})(this))}))})),this.Aa=new PI(r,s)}}async function Bo(n){if(si(n))for(const e of n.da)await e(!0)}async function ri(n){for(const e of n.da)await e(!1)}function Mp(n,e){const t=de(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Zl(t)?Yl(t):Xr(t).x_()&&Xl(t,e))}function Jl(n,e){const t=de(n),r=Xr(t);t.Ta.delete(e),r.x_()&&Lp(t,e),t.Ta.size===0&&(r.x_()?r.B_():si(t)&&t.Aa.set("Unknown"))}function Xl(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ne.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Xr(n).H_(e)}function Lp(n,e){n.Ra.$e(e),Xr(n).Y_(e)}function Yl(n){n.Ra=new RT({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),Xr(n).start(),n.Aa.aa()}function Zl(n){return si(n)&&!Xr(n).M_()&&n.Ta.size>0}function si(n){return de(n).Ia.size===0}function Fp(n){n.Ra=void 0}async function kI(n){n.Aa.set("Online")}async function DI(n){n.Ta.forEach(((e,t)=>{Xl(n,e)}))}async function NI(n,e){Fp(n),Zl(n)?(n.Aa.la(e),Yl(n)):n.Aa.set("Unknown")}async function VI(n,e,t){if(n.Aa.set("Online"),e instanceof wp&&e.state===2&&e.cause)try{await(async function(s,i){const a=i.cause;for(const l of i.targetIds)s.Ta.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ta.delete(l),s.Ra.removeTarget(l))})(n,e)}catch(r){z(Hr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Nh(n,r)}else if(e instanceof ji?n.Ra.Ye(e):e instanceof Ip?n.Ra.it(e):n.Ra.et(e),!t.isEqual(ne.min()))try{const r=await Np(n.localStore);t.compareTo(r)>=0&&await(function(i,a){const l=i.Ra.Pt(a);return l.targetChanges.forEach(((u,f)=>{if(u.resumeToken.approximateByteSize()>0){const d=i.Ta.get(f);d&&i.Ta.set(f,d.withResumeToken(u.resumeToken,a))}})),l.targetMismatches.forEach(((u,f)=>{const d=i.Ta.get(u);if(!d)return;i.Ta.set(u,d.withResumeToken(Ke.EMPTY_BYTE_STRING,d.snapshotVersion)),Lp(i,u);const g=new wn(d.target,u,f,d.sequenceNumber);Xl(i,g)})),i.remoteSyncer.applyRemoteEvent(l)})(n,t)}catch(r){z(Hr,"Failed to raise snapshot:",r),await Nh(n,r)}}async function Nh(n,e,t){if(!Jr(e))throw e;n.Ia.add(1),await ri(n),n.Aa.set("Offline"),t||(t=()=>Np(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{z(Hr,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await Bo(n)}))}async function Vh(n,e){const t=de(n);t.asyncQueue.verifyOperationInProgress(),z(Hr,"RemoteStore received new credentials");const r=si(t);t.Ia.add(3),await ri(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Bo(t)}async function xI(n,e){const t=de(n);e?(t.Ia.delete(2),await Bo(t)):e||(t.Ia.add(2),await ri(t),t.Aa.set("Unknown"))}function Xr(n){return n.Va||(n.Va=(function(t,r,s){const i=de(t);return i.ia(),new SI(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:kI.bind(null,n),e_:DI.bind(null,n),n_:NI.bind(null,n),J_:VI.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),Zl(n)?Yl(n):n.Aa.set("Unknown")):(await n.Va.stop(),Fp(n))}))),n.Va}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Cr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,l=new ec(e,t,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Up(n,e){if(rn("AsyncQueue",`${e}: ${n}`),Jr(n))return new J(j.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{static emptySet(e){return new Or(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||Z.comparator(t.key,r.key):(t,r)=>Z.comparator(t.key,r.key),this.keyedMap=Es(),this.sortedSet=new ke(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Or)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Or;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(){this.fa=new ke(Z.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):ie(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class zr{constructor(e,t,r,s,i,a,l,u,f){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=f}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach((l=>{a.push({type:0,doc:l})})),new zr(e,t,Or.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&xo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class LI{constructor(){this.queries=Mh(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const s=de(t),i=s.queries;s.queries=Mh(),i.forEach(((a,l)=>{for(const u of l.wa)u.onError(r)}))})(this,new J(j.ABORTED,"Firestore shutting down"))}}function Mh(){return new hr((n=>fp(n)),xo)}async function FI(n,e){const t=de(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new MI,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await t.onListen(s,!0);break;case 1:i.ya=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=Up(a,`Initialization of query '${Ir(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.wa.push(e),e.va(t.onlineState),i.ya&&e.Ca(i.ya)&&tc(t)}async function UI(n,e){const t=de(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.wa.indexOf(e);a>=0&&(i.wa.splice(a,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function BI(n,e){const t=de(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const l of a.wa)l.Ca(s)&&(r=!0);a.ya=s}}r&&tc(t)}function jI(n,e,t){const r=de(n),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(t);r.queries.delete(e)}function tc(n){n.Da.forEach((e=>{e.next()}))}var ll,Lh;(Lh=ll||(ll={})).Fa="default",Lh.Cache="cache";class $I{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new zr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=zr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==ll.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(e){this.key=e}}class jp{constructor(e){this.key=e}}class qI{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=pe(),this.mutatedKeys=pe(),this.Xa=dp(e),this.eu=new Or(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new xh,s=t?t.eu:this.eu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((d,g)=>{const y=s.get(d),R=Mo(this.query,g)?g:null,O=!!y&&this.mutatedKeys.has(y.key),M=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let L=!1;y&&R?y.data.isEqual(R.data)?O!==M&&(r.track({type:3,doc:R}),L=!0):this.iu(y,R)||(r.track({type:2,doc:R}),L=!0,(u&&this.Xa(R,u)>0||f&&this.Xa(R,f)<0)&&(l=!0)):!y&&R?(r.track({type:0,doc:R}),L=!0):y&&!R&&(r.track({type:1,doc:y}),L=!0,(u||f)&&(l=!0)),L&&(R?(a=a.add(R),i=M?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{eu:a,ru:r,Ds:l,mutatedKeys:i}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const a=e.ru.pa();a.sort(((d,g)=>(function(R,O){const M=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ie(20277,{At:L})}};return M(R)-M(O)})(d.type,g.type)||this.Xa(d.doc,g.doc))),this.su(r),s=s!=null&&s;const l=t&&!s?this.ou():[],u=this.Za.size===0&&this.current&&!s?1:0,f=u!==this.Ya;return this.Ya=u,a.length!==0||f?{snapshot:new zr(this.query,e.eu,i,a,e.mutatedKeys,u===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new xh,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=pe(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const t=[];return e.forEach((r=>{this.Za.has(r)||t.push(new jp(r))})),this.Za.forEach((r=>{e.has(r)||t.push(new Bp(r))})),t}uu(e){this.Ha=e.qs,this.Za=pe();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return zr.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const nc="SyncEngine";class HI{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class zI{constructor(e){this.key=e,this.lu=!1}}class WI{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new hr((l=>fp(l)),xo),this.Tu=new Map,this.Iu=new Set,this.du=new ke(Z.comparator),this.Eu=new Map,this.Au=new Wl,this.Ru={},this.Vu=new Map,this.mu=qr.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function KI(n,e,t=!0){const r=Wp(n);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await $p(r,e,t,!0),s}async function GI(n,e){const t=Wp(n);await $p(t,e,!0,!1)}async function $p(n,e,t,r){const s=await _I(n.localStore,Mt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await QI(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Mp(n.remoteStore,s),l}async function QI(n,e,t,r,s){n.gu=(g,y,R)=>(async function(M,L,W,K){let G=L.view.nu(W);G.Ds&&(G=await Ch(M.localStore,L.query,!1).then((({documents:I})=>L.view.nu(I,G))));const H=K&&K.targetChanges.get(L.targetId),se=K&&K.targetMismatches.get(L.targetId)!=null,ye=L.view.applyChanges(G,M.isPrimaryClient,H,se);return Uh(M,L.targetId,ye._u),ye.snapshot})(n,g,y,R);const i=await Ch(n.localStore,e,!0),a=new qI(e,i.qs),l=a.nu(i.documents),u=ni.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),f=a.applyChanges(l,n.isPrimaryClient,u);Uh(n,t,f._u);const d=new HI(e,t,a);return n.Pu.set(e,d),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),f.snapshot}async function JI(n,e,t){const r=de(n),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter((a=>!xo(a,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ol(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Jl(r.remoteStore,s.targetId),cl(r,s.targetId)})).catch(Oo)):(cl(r,s.targetId),await ol(r.localStore,s.targetId,!0))}async function XI(n,e){const t=de(n),r=t.Pu.get(e),s=t.Tu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Jl(t.remoteStore,r.targetId))}async function qp(n,e){const t=de(n);try{const r=await gI(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const a=t.Eu.get(i);a&&(Re(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.lu=!0:s.modifiedDocuments.size>0?Re(a.lu,14607):s.removedDocuments.size>0&&(Re(a.lu,42227),a.lu=!1))})),await zp(t,r,e)}catch(r){await Oo(r)}}function Fh(n,e,t){const r=de(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Pu.forEach(((i,a)=>{const l=a.view.va(e);l.snapshot&&s.push(l.snapshot)})),(function(a,l){const u=de(a);u.onlineState=l;let f=!1;u.queries.forEach(((d,g)=>{for(const y of g.wa)y.va(l)&&(f=!0)})),f&&tc(u)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function YI(n,e,t){const r=de(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Eu.get(e),i=s&&s.key;if(i){let a=new ke(Z.comparator);a=a.insert(i,tt.newNoDocument(i,ne.min()));const l=pe().add(i),u=new Uo(ne.min(),new Map,new ke(ce),a,l);await qp(r,u),r.du=r.du.remove(i),r.Eu.delete(e),rc(r)}else await ol(r.localStore,e,!1).then((()=>cl(r,e,t))).catch(Oo)}function cl(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((r=>{n.Au.containsKey(r)||Hp(n,r)}))}function Hp(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Jl(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),rc(n))}function Uh(n,e,t){for(const r of t)r instanceof Bp?(n.Au.addReference(r.key,e),ZI(n,r)):r instanceof jp?(z(nc,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||Hp(n,r.key)):ie(19791,{yu:r})}function ZI(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(z(nc,"New document in limbo: "+t),n.Iu.add(r),rc(n))}function rc(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new Z(Se.fromString(e)),r=n.mu.next();n.Eu.set(r,new zI(t)),n.du=n.du.insert(t,r),Mp(n.remoteStore,new wn(Mt($l(t.path)),r,"TargetPurposeLimboResolution",ko.ue))}}async function zp(n,e,t){const r=de(n),s=[],i=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach(((l,u)=>{a.push(r.gu(u,e,t).then((f=>{var d;if((f||t)&&r.isPrimaryClient){const g=f?!f.fromCache:(d=t==null?void 0:t.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(f){s.push(f);const g=Gl.Es(u.targetId,f);i.push(g)}})))})),await Promise.all(a),r.hu.J_(s),await(async function(u,f){const d=de(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(g=>k.forEach(f,(y=>k.forEach(y.Is,(R=>d.persistence.referenceDelegate.addReference(g,y.targetId,R))).next((()=>k.forEach(y.ds,(R=>d.persistence.referenceDelegate.removeReference(g,y.targetId,R)))))))))}catch(g){if(!Jr(g))throw g;z(Ql,"Failed to update sequence numbers: "+g)}for(const g of f){const y=g.targetId;if(!g.fromCache){const R=d.Fs.get(y),O=R.snapshotVersion,M=R.withLastLimboFreeSnapshotVersion(O);d.Fs=d.Fs.insert(y,M)}}})(r.localStore,i))}async function ew(n,e){const t=de(n);if(!t.currentUser.isEqual(e)){z(nc,"User change. New user:",e.toKey());const r=await Dp(t.localStore,e);t.currentUser=e,(function(i,a){i.Vu.forEach((l=>{l.forEach((u=>{u.reject(new J(j.CANCELLED,a))}))})),i.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await zp(t,r.Bs)}}function tw(n,e){const t=de(n),r=t.Eu.get(e);if(r&&r.lu)return pe().add(r.key);{let s=pe();const i=t.Tu.get(e);if(!i)return s;for(const a of i){const l=t.Pu.get(a);s=s.unionWith(l.view.tu)}return s}}function Wp(n){const e=de(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=qp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=tw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=YI.bind(null,e),e.hu.J_=BI.bind(null,e.eventManager),e.hu.pu=jI.bind(null,e.eventManager),e}class lo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Vp(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return pI(this.persistence,new hI,e.initialUser,this.serializer)}Du(e){return new kp(Kl.Vi,this.serializer)}bu(e){return new vI}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}lo.provider={build:()=>new lo};class nw extends lo{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Re(this.persistence.referenceDelegate instanceof ao,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new JT(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?ut.withCacheSize(this.cacheSizeBytes):ut.DEFAULT;return new kp((r=>ao.Vi(r,t)),this.serializer)}}class ul{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Fh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ew.bind(null,this.syncEngine),await xI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new LI})()}createDatastore(e){const t=Vp(e.databaseInfo.databaseId),r=(function(i){return new AI(i)})(e.databaseInfo);return(function(i,a,l,u){return new CI(i,a,l,u)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,i,a,l){return new OI(r,s,i,a,l)})(this.localStore,this.datastore,e.asyncQueue,(t=>Fh(this.syncEngine,t,0)),(function(){return kh.C()?new kh:new EI})())}createSyncEngine(e,t){return(function(s,i,a,l,u,f,d){const g=new WI(s,i,a,l,u,f);return d&&(g.fu=!0),g})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const i=de(s);z(Hr,"RemoteStore shutting down."),i.Ia.add(5),await ri(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}ul.provider={build:()=>new ul};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):rn("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn="FirestoreClient";class sw{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Ze.UNAUTHENTICATED,this.clientId=Zd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{z(Fn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(z(Fn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Cr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Up(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Ra(n,e){n.asyncQueue.verifyOperationInProgress(),z(Fn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Dp(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{Dn("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{z("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{Dn("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=e}async function Bh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await iw(n);z(Fn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>Vh(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>Vh(e.remoteStore,s))),n._onlineComponents=e}async function iw(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){z(Fn,"Using user provided OfflineComponentProvider");try{await Ra(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===j.FAILED_PRECONDITION||s.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;Dn("Error using user provided cache. Falling back to memory cache: "+t),await Ra(n,new lo)}}else z(Fn,"Using default OfflineComponentProvider"),await Ra(n,new nw(void 0));return n._offlineComponents}async function ow(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(z(Fn,"Using user provided OnlineComponentProvider"),await Bh(n,n._uninitializedComponentsProvider._online)):(z(Fn,"Using default OnlineComponentProvider"),await Bh(n,new ul))),n._onlineComponents}async function jh(n){const e=await ow(n),t=e.eventManager;return t.onListen=KI.bind(null,e.syncEngine),t.onUnlisten=JI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=GI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=XI.bind(null,e.syncEngine),t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kp(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gp="firestore.googleapis.com",qh=!0;class Hh{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new J(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Gp,this.ssl=qh}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:qh;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Op;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<GT)throw new J(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}PE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Kp((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new J(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new J(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new J(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class sc{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Hh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new J(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new J(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Hh(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new EE;switch(r.type){case"firstParty":return new AE(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new J(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=$h.get(t);r&&(z("ComponentProvider","Removing Datastore"),$h.delete(t),r.terminate())})(this),Promise.resolve()}}function aw(n,e,t,r={}){var s;n=Fi(n,sc);const i=Kr(e),a=n._getSettings(),l=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),u=`${e}:${t}`;i&&(Md(`https://${u}`),Ld("Firestore",!0)),a.host!==Gp&&a.host!==u&&Dn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f=Object.assign(Object.assign({},a),{host:u,ssl:i,emulatorOptions:r});if(!or(f,l)&&(n._setSettings(f),r.mockUserToken)){let d,g;if(typeof r.mockUserToken=="string")d=r.mockUserToken,g=Ze.MOCK_USER;else{d=Ky(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const y=r.mockUserToken.sub||r.mockUserToken.user_id;if(!y)throw new J(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Ze(y)}n._authCredentials=new TE(new Xd(d,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new jo(this.firestore,e,this._query)}}class pt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new kr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new pt(this.firestore,e,this._key)}toJSON(){return{type:pt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(ei(t,pt._jsonSchema))return new pt(e,r||null,new Z(Se.fromString(t.referencePath)))}}pt._jsonSchemaVersion="firestore/documentReference/1.0",pt._jsonSchema={type:Ve("string",pt._jsonSchemaVersion),referencePath:Ve("string")};class kr extends jo{constructor(e,t,r){super(e,t,$l(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new pt(this.firestore,null,new Z(e))}withConverter(e){return new kr(this.firestore,e,this._path)}}function lw(n,e,...t){if(n=ln(n),n instanceof sc){const r=Se.fromString(e,...t);return nh(r),new kr(n,null,r)}{if(!(n instanceof pt||n instanceof kr))throw new J(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Se.fromString(e,...t));return nh(r),new kr(n.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh="AsyncQueue";class Wh{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new xp(this,"async_queue_retry"),this.oc=()=>{const r=Sa();r&&z(zh,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=Sa();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Sa();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Cr;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Jr(e))throw e;z(zh,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,rn("INTERNAL UNHANDLED ERROR: ",Kh(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const s=ec.createAndSchedule(this,e,t,r,(i=>this.lc(i)));return this.ec.push(s),s}ac(){this.tc&&ie(47125,{hc:Kh(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Kh(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(n,["next","error","complete"])}class hl extends sc{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Wh,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Wh(e),this._firestoreClient=void 0,await e}}}function cw(n,e){const t=typeof n=="object"?n:jd(),r=typeof n=="string"?n:no,s=Ml(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=zy("firestore");i&&aw(s,...i)}return s}function uw(n){if(n._terminated)throw new J(j.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||hw(n),n._firestoreClient}function hw(n){var e,t,r;const s=n._freezeSettings(),i=(function(l,u,f,d){return new qE(l,u,f,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Kp(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new sw(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&(function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Nt(Ke.fromBase64String(e))}catch(t){throw new J(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Nt(Ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Nt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ei(e,Nt._jsonSchema))return Nt.fromBase64String(e.bytes)}}Nt._jsonSchemaVersion="firestore/bytes/1.0",Nt._jsonSchema={type:Ve("string",Nt._jsonSchemaVersion),bytes:Ve("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new J(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new J(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new J(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Pn._jsonSchemaVersion}}static fromJSON(e){if(ei(e,Pn._jsonSchema))return new Pn(e.latitude,e.longitude)}}Pn._jsonSchemaVersion="firestore/geoPoint/1.0",Pn._jsonSchema={type:Ve("string",Pn._jsonSchemaVersion),latitude:Ve("number"),longitude:Ve("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:On._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ei(e,On._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new On(e.vectorValues);throw new J(j.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}On._jsonSchemaVersion="firestore/vectorValue/1.0",On._jsonSchema={type:Ve("string",On._jsonSchemaVersion),vectorValues:Ve("object")};const fw=new RegExp("[~\\*/\\[\\]]");function dw(n,e,t){if(e.search(fw)>=0)throw Qh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new Qp(...e.split("."))._internalPath}catch{throw Qh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function Qh(n,e,t,r,s){let i=`Function ${e}() called with invalid data`;i+=". ";let a="";return new J(j.INVALID_ARGUMENT,i+n+a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new pw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Xp("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class pw extends Jp{data(){return super.data()}}function Xp(n,e){return typeof e=="string"?dw(n,e):e instanceof Qp?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gw(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new J(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class mw{convertValue(e,t="none"){switch(Mn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(xn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ie(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return ti(e,((s,i)=>{r[s]=this.convertValue(i,t)})),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[Ja].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((a=>Oe(a.doubleValue)));return new On(i)}convertGeoPoint(e){return new Pn(Oe(e.latitude),Oe(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=No(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Ws(e));default:return null}}convertTimestamp(e){const t=Vn(e);return new Ne(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Se.fromString(e);Re(Pp(r),9688,{name:e});const s=new Ks(r.get(1),r.get(3)),i=new Z(r.popFirst(5));return s.isEqual(t)||rn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}class Is{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class sr extends Jp{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new $i(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Xp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new J(j.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=sr._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}sr._jsonSchemaVersion="firestore/documentSnapshot/1.0",sr._jsonSchema={type:Ve("string",sr._jsonSchemaVersion),bundleSource:Ve("string","DocumentSnapshot"),bundleName:Ve("string"),bundle:Ve("string")};class $i extends sr{data(e={}){return super.data(e)}}class Dr{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Is(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new $i(this._firestore,this._userDataWriter,r.key,r,new Is(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new J(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((l=>{const u=new $i(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Is(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const u=new $i(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Is(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,d=-1;return l.type!==0&&(f=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),d=a.indexOf(l.doc.key)),{type:_w(l.type),doc:u,oldIndex:f,newIndex:d}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new J(j.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Dr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Zd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function _w(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ie(61501,{type:n})}}Dr._jsonSchemaVersion="firestore/querySnapshot/1.0",Dr._jsonSchema={type:Ve("string",Dr._jsonSchemaVersion),bundleSource:Ve("string","QuerySnapshot"),bundleName:Ve("string"),bundle:Ve("string")};class Yp extends mw{constructor(e){super(),this.firestore=e}convertBytes(e){return new Nt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new pt(this.firestore,null,t)}}function yw(n,...e){var t,r,s;n=ln(n);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Gh(e[a])||(i=e[a++]);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Gh(e[a])){const g=e[a];e[a]=(t=g.next)===null||t===void 0?void 0:t.bind(g),e[a+1]=(r=g.error)===null||r===void 0?void 0:r.bind(g),e[a+2]=(s=g.complete)===null||s===void 0?void 0:s.bind(g)}let u,f,d;if(n instanceof pt)f=Fi(n.firestore,hl),d=$l(n._key.path),u={next:g=>{e[a]&&e[a](vw(f,n,g))},error:e[a+1],complete:e[a+2]};else{const g=Fi(n,jo);f=Fi(g.firestore,hl),d=g._query;const y=new Yp(f);u={next:R=>{e[a]&&e[a](new Dr(f,y,g,R))},error:e[a+1],complete:e[a+2]},gw(n._query)}return(function(y,R,O,M){const L=new rw(M),W=new $I(R,L,O);return y.asyncQueue.enqueueAndForget((async()=>FI(await jh(y),W))),()=>{L.Ou(),y.asyncQueue.enqueueAndForget((async()=>UI(await jh(y),W)))}})(uw(f),d,l,u)}function vw(n,e,t){const r=t.docs.get(e._key),s=new Yp(n);return new sr(n,s,e._key,r,new Is(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){Qr=s})(Gr),Ur(new ar("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new hl(new IE(r.getProvider("auth-internal")),new bE(a,r.getProvider("app-check-internal")),(function(f,d){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new J(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ks(f.options.projectId,d)})(a,s),a);return i=Object.assign({useFetchStreams:t},i),l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),Rn(Xu,Yu,e),Rn(Xu,Yu,"esm2017")})();var Ew="firebase",Tw="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rn(Ew,Tw,"app");const Iw={apiKey:"AIzaSyBFK9UDO0XCJ5qRlI1DT9o1ERFw9pEoISo",authDomain:"cis-grp-prjk.firebaseapp.com",projectId:"cis-grp-prjk",storageBucket:"cis-grp-prjk.firebasestorage.app",messagingSenderId:"342018301768",appId:"1:342018301768:web:9daf47b7d3e378e9299d7d"},ww=Bd(Iw),Aw=cw(ww),bw=ky("userList",{state:()=>({music:[],currentmusic:null,user:null,snapshotUnsubscribe:null,userplaylists:[]}),actions:{async init(){const n=lw(Aw,"music");this.snapshotUnsubscribe=yw(n,e=>{const t=[];e.forEach(r=>{const s=r.data();t.push({id:s.id,name:s.name,author:s.author,url:s.url})}),this.music=t,!this.currentmusic&&t.length>0&&(this.currentmusic=t[0])})},setCurrentVideo(n){this.currentmusic=n},setUser(n){this.user=n}}});function ic(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Zp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Sw=Zp,eg=new Ys("auth","Firebase",Zp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co=new Vl("@firebase/auth");function Rw(n,...e){co.logLevel<=ue.WARN&&co.warn(`Auth (${Gr}): ${n}`,...e)}function qi(n,...e){co.logLevel<=ue.ERROR&&co.error(`Auth (${Gr}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(n,...e){throw ac(n,...e)}function wt(n,...e){return ac(n,...e)}function oc(n,e,t){const r=Object.assign(Object.assign({},Sw()),{[e]:t});return new Ys("auth","Firebase",r).create(e,{appName:n.name})}function ir(n){return oc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Cw(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&jt(n,"argument-error"),oc(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ac(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return eg.create(n,...e)}function te(n,e,...t){if(!n)throw ac(e,...t)}function Jt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw qi(e),new Error(e)}function sn(n,e){n||Jt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Pw(){return Jh()==="http:"||Jh()==="https:"}function Jh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ow(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Pw()||Zy()||"connection"in navigator)?navigator.onLine:!0}function kw(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,t){this.shortDelay=e,this.longDelay=t,sn(t>e,"Short delay should be less than long delay!"),this.isMobile=Jy()||ev()}get(){return Ow()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(n,e){sn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Jt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Jt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Jt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Vw=new ii(3e4,6e4);function cc(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Yr(n,e,t,r,s={}){return ng(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=Zs(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const f=Object.assign({method:e,headers:u},i);return Yy()||(f.referrerPolicy="no-referrer"),n.emulatorConfig&&Kr(n.emulatorConfig.host)&&(f.credentials="include"),tg.fetch()(await rg(n,n.config.apiHost,t,l),f)})}async function ng(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Dw),e);try{const s=new Mw(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Ni(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[u,f]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ni(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Ni(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Ni(n,"user-disabled",a);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw oc(n,d,f);jt(n,d)}}catch(s){if(s instanceof an)throw s;jt(n,"network-request-failed",{message:String(s)})}}async function xw(n,e,t,r,s={}){const i=await Yr(n,e,t,r,s);return"mfaPendingCredential"in i&&jt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function rg(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?lc(n.config,s):`${n.config.apiScheme}://${s}`;return Nw.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class Mw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(wt(this.auth,"network-request-failed")),Vw.get())})}}function Ni(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=wt(n,e,r);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lw(n,e){return Yr(n,"POST","/v1/accounts:delete",e)}async function uo(n,e){return Yr(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Fw(n,e=!1){const t=ln(n),r=await t.getIdToken(e),s=uc(r);te(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Fs(Ca(s.auth_time)),issuedAtTime:Fs(Ca(s.iat)),expirationTime:Fs(Ca(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ca(n){return Number(n)*1e3}function uc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return qi("JWT malformed, contained fewer than 3 sections"),null;try{const s=Dd(t);return s?JSON.parse(s):(qi("Failed to decode base64 JWT payload"),null)}catch(s){return qi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Xh(n){const e=uc(n);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qs(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof an&&Uw(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Uw({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fs(this.lastLoginAt),this.creationTime=Fs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ho(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Qs(n,uo(t,{idToken:r}));te(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?sg(i.providerUserInfo):[],l=$w(n.providerData,a),u=n.isAnonymous,f=!(n.email&&i.passwordHash)&&!(l!=null&&l.length),d=u?f:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new dl(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(n,g)}async function jw(n){const e=ln(n);await ho(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $w(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function sg(n){return n.map(e=>{var{providerId:t}=e,r=ic(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qw(n,e){const t=await ng(n,{},async()=>{const r=Zs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await rg(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return n.emulatorConfig&&Kr(n.emulatorConfig.host)&&(u.credentials="include"),tg.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Hw(n,e){return Yr(n,"POST","/v2/accounts:revokeToken",cc(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Xh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){te(e.length!==0,"internal-error");const t=Xh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await qw(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Nr;return r&&(te(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(te(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(te(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Nr,this.toJSON())}_performRefresh(){return Jt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(n,e){te(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Tt{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=ic(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Bw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new dl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Qs(this,this.stsTokenManager.getToken(this.auth,e));return te(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Fw(this,e)}reload(){return jw(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Tt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ho(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Et(this.auth.app))return Promise.reject(ir(this.auth));const e=await this.getIdToken();return await Qs(this,Lw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,l,u,f,d;const g=(r=t.displayName)!==null&&r!==void 0?r:void 0,y=(s=t.email)!==null&&s!==void 0?s:void 0,R=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,O=(a=t.photoURL)!==null&&a!==void 0?a:void 0,M=(l=t.tenantId)!==null&&l!==void 0?l:void 0,L=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,W=(f=t.createdAt)!==null&&f!==void 0?f:void 0,K=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:G,emailVerified:H,isAnonymous:se,providerData:ye,stsTokenManager:I}=t;te(G&&I,e,"internal-error");const m=Nr.fromJSON(this.name,I);te(typeof G=="string",e,"internal-error"),dn(g,e.name),dn(y,e.name),te(typeof H=="boolean",e,"internal-error"),te(typeof se=="boolean",e,"internal-error"),dn(R,e.name),dn(O,e.name),dn(M,e.name),dn(L,e.name),dn(W,e.name),dn(K,e.name);const _=new Tt({uid:G,auth:e,email:y,emailVerified:H,displayName:g,isAnonymous:se,photoURL:O,phoneNumber:R,tenantId:M,stsTokenManager:m,createdAt:W,lastLoginAt:K});return ye&&Array.isArray(ye)&&(_.providerData=ye.map(T=>Object.assign({},T))),L&&(_._redirectEventId=L),_}static async _fromIdTokenResponse(e,t,r=!1){const s=new Nr;s.updateFromServerResponse(t);const i=new Tt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ho(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];te(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?sg(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Nr;l.updateFromIdToken(r);const u=new Tt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new dl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,f),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh=new Map;function Xt(n){sn(n instanceof Function,"Expected a class definition");let e=Yh.get(n);return e?(sn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Yh.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ig.type="NONE";const Zh=ig;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(n,e,t){return`firebase:${n}:${e}:${t}`}class Vr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Hi(this.userKey,s.apiKey,i),this.fullPersistenceKey=Hi("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await uo(this.auth,{idToken:e}).catch(()=>{});return t?Tt._fromGetAccountInfoResponse(this.auth,t,e):null}return Tt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Vr(Xt(Zh),e,r);const s=(await Promise.all(t.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let i=s[0]||Xt(Zh);const a=Hi(r,e.config.apiKey,e.name);let l=null;for(const f of t)try{const d=await f._get(a);if(d){let g;if(typeof d=="string"){const y=await uo(e,{idToken:d}).catch(()=>{});if(!y)break;g=await Tt._fromGetAccountInfoResponse(e,y,d)}else g=Tt._fromJSON(e,d);f!==i&&(l=g),i=f;break}}catch{}const u=s.filter(f=>f._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Vr(i,e,r):(i=u[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async f=>{if(f!==i)try{await f._remove(a)}catch{}})),new Vr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(og(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hg(e))return"Blackberry";if(fg(e))return"Webos";if(ag(e))return"Safari";if((e.includes("chrome/")||lg(e))&&!e.includes("edge/"))return"Chrome";if(ug(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function og(n=rt()){return/firefox\//i.test(n)}function ag(n=rt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function lg(n=rt()){return/crios\//i.test(n)}function cg(n=rt()){return/iemobile/i.test(n)}function ug(n=rt()){return/android/i.test(n)}function hg(n=rt()){return/blackberry/i.test(n)}function fg(n=rt()){return/webos/i.test(n)}function hc(n=rt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function zw(n=rt()){var e;return hc(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ww(){return tv()&&document.documentMode===10}function dg(n=rt()){return hc(n)||ug(n)||fg(n)||hg(n)||/windows phone/i.test(n)||cg(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(n,e=[]){let t;switch(n){case"Browser":t=ef(rt());break;case"Worker":t=`${ef(rt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Gr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,l)=>{try{const u=e(i);a(u)}catch(u){l(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gw(n,e={}){return Yr(n,"GET","/v2/passwordPolicy",cc(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw=6;class Jw{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Qw,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new tf(this),this.idTokenSubscription=new tf(this),this.beforeStateQueue=new Kw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=eg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Xt(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Vr.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await uo(this,{idToken:e}),r=await Tt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Et(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ho(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Et(this.app))return Promise.reject(ir(this));const t=e?ln(e):null;return t&&te(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Et(this.app)?Promise.reject(ir(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Et(this.app)?Promise.reject(ir(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Xt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Gw(this),t=new Jw(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ys("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Hw(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Xt(e)||this._popupRedirectResolver;te(t,this,"argument-error"),this.redirectPersistenceManager=await Vr.create(this,[Xt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(Et(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Rw(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function $o(n){return ln(n)}class tf{constructor(e){this.auth=e,this.observer=null,this.addObserver=cv(t=>this.observer=t)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Yw(n){fc=n}function Zw(n){return fc.loadJS(n)}function eA(){return fc.gapiScript}function tA(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nA(n,e){const t=Ml(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(or(i,e??{}))return s;jt(s,"already-initialized")}return t.initialize({options:e})}function rA(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Xt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function sA(n,e,t){const r=$o(n);te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=gg(e),{host:a,port:l}=iA(e),u=l===null?"":`:${l}`,f={url:`${i}//${a}${u}/`},d=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){te(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),te(or(f,r.config.emulator)&&or(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=f,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Kr(a)?(Md(`${i}//${a}${u}`),Ld("Auth",!0)):oA()}function gg(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function iA(n){const e=gg(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:nf(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:nf(a)}}}function nf(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function oA(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Jt("not implemented")}_getIdTokenResponse(e){return Jt("not implemented")}_linkToIdToken(e,t){return Jt("not implemented")}_getReauthenticationResolver(e){return Jt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xr(n,e){return xw(n,"POST","/v1/accounts:signInWithIdp",cc(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA="http://localhost";class cr extends mg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new cr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):jt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=ic(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new cr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return xr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,xr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,xr(e,t)}buildRequest(){const e={requestUri:aA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Zs(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends dc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends oi{constructor(){super("facebook.com")}static credential(e){return cr._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vn.credential(e.oauthAccessToken)}catch{return null}}}vn.FACEBOOK_SIGN_IN_METHOD="facebook.com";vn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends oi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return cr._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Qt.credential(t,r)}catch{return null}}}Qt.GOOGLE_SIGN_IN_METHOD="google.com";Qt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends oi{constructor(){super("github.com")}static credential(e){return cr._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return En.credential(e.oauthAccessToken)}catch{return null}}}En.GITHUB_SIGN_IN_METHOD="github.com";En.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends oi{constructor(){super("twitter.com")}static credential(e,t){return cr._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Tn.credential(t,r)}catch{return null}}}Tn.TWITTER_SIGN_IN_METHOD="twitter.com";Tn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Tt._fromIdTokenResponse(e,r,s),a=rf(r);return new Wr({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=rf(r);return new Wr({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function rf(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo extends an{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,fo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new fo(e,t,r,s)}}function _g(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?fo._fromErrorAndOperation(n,i,e,r):i})}async function lA(n,e,t=!1){const r=await Qs(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Wr._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cA(n,e,t=!1){const{auth:r}=n;if(Et(r.app))return Promise.reject(ir(r));const s="reauthenticate";try{const i=await Qs(n,_g(r,s,e,n),t);te(i.idToken,r,"internal-error");const a=uc(i.idToken);te(a,r,"internal-error");const{sub:l}=a;return te(n.uid===l,r,"user-mismatch"),Wr._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&jt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uA(n,e,t=!1){if(Et(n.app))return Promise.reject(ir(n));const r="signIn",s=await _g(n,r,e),i=await Wr._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function hA(n,e,t,r){return ln(n).onIdTokenChanged(e,t,r)}function fA(n,e,t){return ln(n).beforeAuthStateChanged(e,t)}function dA(n){return ln(n).signOut()}const po="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(po,"1"),this.storage.removeItem(po),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pA=1e3,gA=10;class vg extends yg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=dg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);Ww()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,gA):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},pA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}vg.type="LOCAL";const mA=vg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg extends yg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Eg.type="SESSION";const Tg=Eg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new qo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async f=>f(t.origin,i)),u=await _A(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,u)=>{const f=pc("",20);s.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(g){const y=g;if(y.data.eventId===f)switch(y.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(y.data.response);break;default:clearTimeout(d),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:f,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(){return window}function vA(n){Lt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ig(){return typeof Lt().WorkerGlobalScope<"u"&&typeof Lt().importScripts=="function"}async function EA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function TA(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function IA(){return Ig()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg="firebaseLocalStorageDb",wA=1,go="firebaseLocalStorage",Ag="fbase_key";class ai{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ho(n,e){return n.transaction([go],e?"readwrite":"readonly").objectStore(go)}function AA(){const n=indexedDB.deleteDatabase(wg);return new ai(n).toPromise()}function pl(){const n=indexedDB.open(wg,wA);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(go,{keyPath:Ag})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(go)?e(r):(r.close(),await AA(),e(await pl()))})})}async function sf(n,e,t){const r=Ho(n,!0).put({[Ag]:e,value:t});return new ai(r).toPromise()}async function bA(n,e){const t=Ho(n,!1).get(e),r=await new ai(t).toPromise();return r===void 0?null:r.value}function of(n,e){const t=Ho(n,!0).delete(e);return new ai(t).toPromise()}const SA=800,RA=3;class bg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await pl(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>RA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ig()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qo._getInstance(IA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await EA(),!this.activeServiceWorker)return;this.sender=new yA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||TA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await pl();return await sf(e,po,"1"),await of(e,po),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>sf(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>bA(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>of(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ho(s,!1).getAll();return new ai(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),SA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bg.type="LOCAL";const CA=bg;new ii(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sg(n,e){return e?Xt(e):(te(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc extends mg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return xr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return xr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function PA(n){return uA(n.auth,new gc(n),n.bypassAuthState)}function OA(n){const{auth:e,user:t}=n;return te(t,e,"internal-error"),cA(t,new gc(n),n.bypassAuthState)}async function kA(n){const{auth:e,user:t}=n;return te(t,e,"internal-error"),lA(t,new gc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return PA;case"linkViaPopup":case"linkViaRedirect":return kA;case"reauthViaPopup":case"reauthViaRedirect":return OA;default:jt(this.auth,"internal-error")}}resolve(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA=new ii(2e3,1e4);async function NA(n,e,t){if(Et(n.app))return Promise.reject(wt(n,"operation-not-supported-in-this-environment"));const r=$o(n);Cw(n,e,dc);const s=Sg(r,t);return new Zn(r,"signInViaPopup",e,s).executeNotNull()}class Zn extends Rg{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Zn.currentPopupAction&&Zn.currentPopupAction.cancel(),Zn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){sn(this.filter.length===1,"Popup operations only handle one event");const e=pc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(wt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(wt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,DA.get())};e()}}Zn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA="pendingRedirect",zi=new Map;class xA extends Rg{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=zi.get(this.auth._key());if(!e){try{const r=await MA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}zi.set(this.auth._key(),e)}return this.bypassAuthState||zi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function MA(n,e){const t=UA(e),r=FA(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function LA(n,e){zi.set(n._key(),e)}function FA(n){return Xt(n._redirectPersistence)}function UA(n){return Hi(VA,n.config.apiKey,n.name)}async function BA(n,e,t=!1){if(Et(n.app))return Promise.reject(ir(n));const r=$o(n),s=Sg(r,e),a=await new xA(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jA=600*1e3;class $A{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Cg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(wt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jA&&this.cachedEventUids.clear(),this.cachedEventUids.has(af(e))}saveEventToCache(e){this.cachedEventUids.add(af(e)),this.lastProcessedEventTime=Date.now()}}function af(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Cg({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function qA(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Cg(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HA(n,e={}){return Yr(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,WA=/^https?/;async function KA(n){if(n.config.emulator)return;const{authorizedDomains:e}=await HA(n);for(const t of e)try{if(GA(t))return}catch{}jt(n,"unauthorized-domain")}function GA(n){const e=fl(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!WA.test(t))return!1;if(zA.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA=new ii(3e4,6e4);function lf(){const n=Lt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function JA(n){return new Promise((e,t)=>{var r,s,i;function a(){lf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{lf(),t(wt(n,"network-request-failed"))},timeout:QA.get()})}if(!((s=(r=Lt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Lt().gapi)===null||i===void 0)&&i.load)a();else{const l=tA("iframefcb");return Lt()[l]=()=>{gapi.load?a():t(wt(n,"network-request-failed"))},Zw(`${eA()}?onload=${l}`).catch(u=>t(u))}}).catch(e=>{throw Wi=null,e})}let Wi=null;function XA(n){return Wi=Wi||JA(n),Wi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA=new ii(5e3,15e3),ZA="__/auth/iframe",e0="emulator/auth/iframe",t0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},n0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function r0(n){const e=n.config;te(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?lc(e,e0):`https://${n.config.authDomain}/${ZA}`,r={apiKey:e.apiKey,appName:n.name,v:Gr},s=n0.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Zs(r).slice(1)}`}async function s0(n){const e=await XA(n),t=Lt().gapi;return te(t,n,"internal-error"),e.open({where:document.body,url:r0(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:t0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=wt(n,"network-request-failed"),l=Lt().setTimeout(()=>{i(a)},YA.get());function u(){Lt().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},o0=500,a0=600,l0="_blank",c0="http://localhost";class cf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function u0(n,e,t,r=o0,s=a0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},i0),{width:r.toString(),height:s.toString(),top:i,left:a}),f=rt().toLowerCase();t&&(l=lg(f)?l0:t),og(f)&&(e=e||c0,u.scrollbars="yes");const d=Object.entries(u).reduce((y,[R,O])=>`${y}${R}=${O},`,"");if(zw(f)&&l!=="_self")return h0(e||"",l),new cf(null);const g=window.open(e||"",l,d);te(g,n,"popup-blocked");try{g.focus()}catch{}return new cf(g)}function h0(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f0="__/auth/handler",d0="emulator/auth/handler",p0=encodeURIComponent("fac");async function uf(n,e,t,r,s,i){te(n.config.authDomain,n,"auth-domain-config-required"),te(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Gr,eventId:s};if(e instanceof dc){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",lv(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,g]of Object.entries({}))a[d]=g}if(e instanceof oi){const d=e.getScopes().filter(g=>g!=="");d.length>0&&(a.scopes=d.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await n._getAppCheckToken(),f=u?`#${p0}=${encodeURIComponent(u)}`:"";return`${g0(n)}?${Zs(l).slice(1)}${f}`}function g0({config:n}){return n.emulator?lc(n,d0):`https://${n.authDomain}/${f0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa="webStorageSupport";class m0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Tg,this._completeRedirectFn=BA,this._overrideRedirectResult=LA}async _openPopup(e,t,r,s){var i;sn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await uf(e,t,r,fl(),s);return u0(e,a,pc())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await uf(e,t,r,fl(),s);return vA(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(sn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await s0(e),r=new $A(e);return t.register("authEvent",s=>(te(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Pa,{type:Pa},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Pa];a!==void 0&&t(!!a),jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=KA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return dg()||ag()||hc()}}const _0=m0;var hf="@firebase/auth",ff="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v0(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function E0(n){Ur(new ar("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;te(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pg(n)},f=new Xw(r,s,i,u);return rA(f,t),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Ur(new ar("auth-internal",e=>{const t=$o(e.getProvider("auth").getImmediate());return(r=>new y0(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rn(hf,ff,v0(n)),Rn(hf,ff,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T0=300,I0=xd("authIdTokenMaxAge")||T0;let df=null;const w0=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>I0)return;const s=t==null?void 0:t.token;df!==s&&(df=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function A0(n=jd()){const e=Ml(n,"auth");if(e.isInitialized())return e.getImmediate();const t=nA(n,{popupRedirectResolver:_0,persistence:[CA,mA,Tg]}),r=xd("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=w0(i.toString());fA(t,a,()=>a(t.currentUser)),hA(t,l=>a(l))}}const s=Nd("auth");return s&&sA(t,`http://${s}`),t}function b0(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Yw({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=wt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",b0().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});E0("Browser");const S0={id:"app"},R0={class:"top_of_page_header"},C0={class:"user_signin"},P0={key:0,class:"user-label"},O0={key:1,class:"hint"},k0={class:"main"},D0={class:"left_side"},N0={class:"song_window"},V0=["src"],x0={class:"user_playlist_window"},M0={class:"user_playlist_header"},L0={class:"global_playlist"},F0={class:"video_list"},U0=["onClick"],B0=Gm({__name:"App",setup(n){const e=Ss("https://www.youtube.com/embed/vYYW9hPj2TM"),t=bw(),r=Ss("Sign In with Google"),s=Ss(""),i=u=>{s.value=u,setTimeout(()=>{s.value=""},5e3)};Xf(()=>{t.init()});const a=u=>{e.value=u.url,t.currentmusic=u},l=async()=>{const u=A0();if(r.value==="Sign Out"){await dA(u),t.setUser(null),r.value="Sign In with Google",i("Signed out successfully");return}try{const f=new Qt,d=await NA(u,f);t.setUser(d.user),r.value="Sign Out",i(`Signed in as ${d.user.displayName}`)}catch(f){console.error(f),i("Sign in failed")}};return(u,f)=>(gs(),ms("div",S0,[Fe("header",R0,[f[0]||(f[0]=Fe("div",{class:"logo"},"CloudBeat",-1)),Fe("div",C0,[Xn(t).user?(gs(),ms("span",P0," Signed in as "+vr(Xn(t).user.displayName),1)):(gs(),ms("span",O0,"Please sign in to see your playlist. ")),Fe("button",{onClick:l},vr(r.value),1)])]),Fe("main",k0,[Fe("section",D0,[Fe("div",N0,[Fe("iframe",{src:e.value,frameborder:"0",allow:`accelerometer; \r
          autoplay; \r
          clipboard-write; \r
          encrypted-media; \r
          gyroscope; \r
          picture-in-picture`,allowfullscreen:""},null,8,V0)]),Fe("div",x0,[Fe("div",M0,vr(Xn(t).user?Xn(t).user.displayName:"Your")+" Playlist",1),f[1]||(f[1]=Fe("div",{class:"user_playlist_video_list"},[Fe("div",{class:"video_item"})],-1))])]),Fe("section",L0,[f[2]||(f[2]=Fe("div",{class:"global_header"},"Global Music",-1)),Fe("div",F0,[(gs(!0),ms(Ot,null,a_(Xn(t).music,d=>(gs(),ms("div",{class:"video_item",key:d.id,onClick:g=>a(d),style:{cursor:"pointer"}},[Fe("p",null,vr(d.name)+" - "+vr(d.author),1)],8,U0))),128))])])]),f[3]||(f[3]=Fe("footer",{class:"footer"}," © 2025 Soundbeat | Can you hear the music? ",-1))]))}}),Pg=by();Pg.use(My);Iy(B0).use(Pg).mount("#app");
