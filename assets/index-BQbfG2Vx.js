(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Hl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const we={},jr=[],$t=()=>{},dd=()=>!1,Bo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),zl=n=>n.startsWith("onUpdate:"),it=Object.assign,Wl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},w_=Object.prototype.hasOwnProperty,ve=(n,e)=>w_.call(n,e),ne=Array.isArray,$r=n=>fi(n)==="[object Map]",jo=n=>fi(n)==="[object Set]",Gu=n=>fi(n)==="[object Date]",ce=n=>typeof n=="function",Le=n=>typeof n=="string",Gt=n=>typeof n=="symbol",Re=n=>n!==null&&typeof n=="object",pd=n=>(Re(n)||ce(n))&&ce(n.then)&&ce(n.catch),gd=Object.prototype.toString,fi=n=>gd.call(n),A_=n=>fi(n).slice(8,-1),md=n=>fi(n)==="[object Object]",$o=n=>Le(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ms=Hl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),qo=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},b_=/-\w/g,$n=qo(n=>n.replace(b_,e=>e.slice(1).toUpperCase())),S_=/\B([A-Z])/g,wr=qo(n=>n.replace(S_,"-$1").toLowerCase()),_d=qo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ma=qo(n=>n?`on${_d(n)}`:""),xn=(n,e)=>!Object.is(n,e),Yi=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},yd=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},Ho=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Qu;const zo=()=>Qu||(Qu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Kl(n){if(ne(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=Le(r)?V_(r):Kl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Le(n)||Re(n))return n}const R_=/;(?![^(]*\))/g,P_=/:([^]+)/,C_=/\/\*[^]*?\*\//g;function V_(n){const e={};return n.replace(C_,"").split(R_).forEach(t=>{if(t){const r=t.split(P_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Gl(n){let e="";if(Le(n))e=n;else if(ne(n))for(let t=0;t<n.length;t++){const r=Gl(n[t]);r&&(e+=r+" ")}else if(Re(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const k_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",D_=Hl(k_);function vd(n){return!!n||n===""}function N_(n,e){if(n.length!==e.length)return!1;let t=!0;for(let r=0;t&&r<n.length;r++)t=Wo(n[r],e[r]);return t}function Wo(n,e){if(n===e)return!0;let t=Gu(n),r=Gu(e);if(t||r)return t&&r?n.getTime()===e.getTime():!1;if(t=Gt(n),r=Gt(e),t||r)return n===e;if(t=ne(n),r=ne(e),t||r)return t&&r?N_(n,e):!1;if(t=Re(n),r=Re(e),t||r){if(!t||!r)return!1;const s=Object.keys(n).length,i=Object.keys(e).length;if(s!==i)return!1;for(const a in n){const l=n.hasOwnProperty(a),c=e.hasOwnProperty(a);if(l&&!c||!l&&c||!Wo(n[a],e[a]))return!1}}return String(n)===String(e)}function O_(n,e){return n.findIndex(t=>Wo(t,e))}const Ed=n=>!!(n&&n.__v_isRef===!0),Pt=n=>Le(n)?n:n==null?"":ne(n)||Re(n)&&(n.toString===gd||!ce(n.toString))?Ed(n)?Pt(n.value):JSON.stringify(n,Td,2):String(n),Td=(n,e)=>Ed(e)?Td(n,e.value):$r(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,s],i)=>(t[La(r,i)+" =>"]=s,t),{})}:jo(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>La(t))}:Gt(e)?La(e):Re(e)&&!ne(e)&&!md(e)?String(e):e,La=(n,e="")=>{var t;return Gt(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let tt;class Id{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=tt,!e&&tt&&(this.index=(tt.scopes||(tt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=tt;try{return tt=this,e()}finally{tt=t}}}on(){++this._on===1&&(this.prevScope=tt,tt=this)}off(){this._on>0&&--this._on===0&&(tt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function wd(n){return new Id(n)}function Ad(){return tt}function x_(n,e=!1){tt&&tt.cleanups.push(n)}let be;const Fa=new WeakSet;class bd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,tt&&tt.active&&tt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Fa.has(this)&&(Fa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Rd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ju(this),Pd(this);const e=be,t=Dt;be=this,Dt=!0;try{return this.fn()}finally{Cd(this),be=e,Dt=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Yl(e);this.deps=this.depsTail=void 0,Ju(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Fa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){il(this)&&this.run()}get dirty(){return il(this)}}let Sd=0,Ls,Fs;function Rd(n,e=!1){if(n.flags|=8,e){n.next=Fs,Fs=n;return}n.next=Ls,Ls=n}function Ql(){Sd++}function Jl(){if(--Sd>0)return;if(Fs){let e=Fs;for(Fs=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Ls;){let e=Ls;for(Ls=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function Pd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Cd(n){let e,t=n.depsTail,r=t;for(;r;){const s=r.prevDep;r.version===-1?(r===t&&(t=s),Yl(r),M_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}n.deps=e,n.depsTail=t}function il(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Vd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Vd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Ys)||(n.globalVersion=Ys,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!il(n))))return;n.flags|=2;const e=n.dep,t=be,r=Dt;be=n,Dt=!0;try{Pd(n);const s=n.fn(n._value);(e.version===0||xn(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{be=t,Dt=r,Cd(n),n.flags&=-3}}function Yl(n,e=!1){const{dep:t,prevSub:r,nextSub:s}=n;if(r&&(r.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)Yl(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function M_(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Dt=!0;const kd=[];function dn(){kd.push(Dt),Dt=!1}function pn(){const n=kd.pop();Dt=n===void 0?!0:n}function Ju(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=be;be=void 0;try{e()}finally{be=t}}}let Ys=0;class L_{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Xl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!be||!Dt||be===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==be)t=this.activeLink=new L_(be,this),be.deps?(t.prevDep=be.depsTail,be.depsTail.nextDep=t,be.depsTail=t):be.deps=be.depsTail=t,Dd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=be.depsTail,t.nextDep=void 0,be.depsTail.nextDep=t,be.depsTail=t,be.deps===t&&(be.deps=r)}return t}trigger(e){this.version++,Ys++,this.notify(e)}notify(e){Ql();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Jl()}}}function Dd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Dd(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const ho=new WeakMap,fr=Symbol(""),ol=Symbol(""),Xs=Symbol("");function rt(n,e,t){if(Dt&&be){let r=ho.get(n);r||ho.set(n,r=new Map);let s=r.get(t);s||(r.set(t,s=new Xl),s.map=r,s.key=t),s.track()}}function sn(n,e,t,r,s,i){const a=ho.get(n);if(!a){Ys++;return}const l=c=>{c&&c.trigger()};if(Ql(),e==="clear")a.forEach(l);else{const c=ne(n),h=c&&$o(t);if(c&&t==="length"){const d=Number(r);a.forEach((p,y)=>{(y==="length"||y===Xs||!Gt(y)&&y>=d)&&l(p)})}else switch((t!==void 0||a.has(void 0))&&l(a.get(t)),h&&l(a.get(Xs)),e){case"add":c?h&&l(a.get("length")):(l(a.get(fr)),$r(n)&&l(a.get(ol)));break;case"delete":c||(l(a.get(fr)),$r(n)&&l(a.get(ol)));break;case"set":$r(n)&&l(a.get(fr));break}}Jl()}function F_(n,e){const t=ho.get(n);return t&&t.get(e)}function Nr(n){const e=ye(n);return e===n?e:(rt(e,"iterate",Xs),vt(n)?e:e.map(Ot))}function Ko(n){return rt(n=ye(n),"iterate",Xs),n}function Pn(n,e){return gn(n)?un(n)?Qr(Ot(e)):Qr(e):Ot(e)}const U_={__proto__:null,[Symbol.iterator](){return Ua(this,Symbol.iterator,n=>Pn(this,n))},concat(...n){return Nr(this).concat(...n.map(e=>ne(e)?Nr(e):e))},entries(){return Ua(this,"entries",n=>(n[1]=Pn(this,n[1]),n))},every(n,e){return nn(this,"every",n,e,void 0,arguments)},filter(n,e){return nn(this,"filter",n,e,t=>t.map(r=>Pn(this,r)),arguments)},find(n,e){return nn(this,"find",n,e,t=>Pn(this,t),arguments)},findIndex(n,e){return nn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return nn(this,"findLast",n,e,t=>Pn(this,t),arguments)},findLastIndex(n,e){return nn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return nn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ba(this,"includes",n)},indexOf(...n){return Ba(this,"indexOf",n)},join(n){return Nr(this).join(n)},lastIndexOf(...n){return Ba(this,"lastIndexOf",n)},map(n,e){return nn(this,"map",n,e,void 0,arguments)},pop(){return Rs(this,"pop")},push(...n){return Rs(this,"push",n)},reduce(n,...e){return Yu(this,"reduce",n,e)},reduceRight(n,...e){return Yu(this,"reduceRight",n,e)},shift(){return Rs(this,"shift")},some(n,e){return nn(this,"some",n,e,void 0,arguments)},splice(...n){return Rs(this,"splice",n)},toReversed(){return Nr(this).toReversed()},toSorted(n){return Nr(this).toSorted(n)},toSpliced(...n){return Nr(this).toSpliced(...n)},unshift(...n){return Rs(this,"unshift",n)},values(){return Ua(this,"values",n=>Pn(this,n))}};function Ua(n,e,t){const r=Ko(n),s=r[e]();return r!==n&&!vt(n)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=t(i.value)),i}),s}const B_=Array.prototype;function nn(n,e,t,r,s,i){const a=Ko(n),l=a!==n&&!vt(n),c=a[e];if(c!==B_[e]){const p=c.apply(n,i);return l?Ot(p):p}let h=t;a!==n&&(l?h=function(p,y){return t.call(this,Pn(n,p),y,n)}:t.length>2&&(h=function(p,y){return t.call(this,p,y,n)}));const d=c.call(a,h,r);return l&&s?s(d):d}function Yu(n,e,t,r){const s=Ko(n);let i=t;return s!==n&&(vt(n)?t.length>3&&(i=function(a,l,c){return t.call(this,a,l,c,n)}):i=function(a,l,c){return t.call(this,a,Pn(n,l),c,n)}),s[e](i,...r)}function Ba(n,e,t){const r=ye(n);rt(r,"iterate",Xs);const s=r[e](...t);return(s===-1||s===!1)&&Qo(t[0])?(t[0]=ye(t[0]),r[e](...t)):s}function Rs(n,e,t=[]){dn(),Ql();const r=ye(n)[e].apply(n,t);return Jl(),pn(),r}const j_=Hl("__proto__,__v_isRef,__isVue"),Nd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Gt));function $_(n){Gt(n)||(n=String(n));const e=ye(this);return rt(e,"has",n),e.hasOwnProperty(n)}class Od{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(s?i?X_:Fd:i?Ld:Md).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=ne(e);if(!s){let c;if(a&&(c=U_[t]))return c;if(t==="hasOwnProperty")return $_}const l=Reflect.get(e,t,De(e)?e:r);if((Gt(t)?Nd.has(t):j_(t))||(s||rt(e,"get",t),i))return l;if(De(l)){const c=a&&$o(t)?l:l.value;return s&&Re(c)?ll(c):c}return Re(l)?s?ll(l):Go(l):l}}class xd extends Od{constructor(e=!1){super(!1,e)}set(e,t,r,s){let i=e[t];const a=ne(e)&&$o(t);if(!this._isShallow){const h=gn(i);if(!vt(r)&&!gn(r)&&(i=ye(i),r=ye(r)),!a&&De(i)&&!De(r))return h||(i.value=r),!0}const l=a?Number(t)<e.length:ve(e,t),c=Reflect.set(e,t,r,De(e)?e:s);return e===ye(s)&&(l?xn(r,i)&&sn(e,"set",t,r):sn(e,"add",t,r)),c}deleteProperty(e,t){const r=ve(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&r&&sn(e,"delete",t,void 0),s}has(e,t){const r=Reflect.has(e,t);return(!Gt(t)||!Nd.has(t))&&rt(e,"has",t),r}ownKeys(e){return rt(e,"iterate",ne(e)?"length":fr),Reflect.ownKeys(e)}}class q_ extends Od{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const H_=new xd,z_=new q_,W_=new xd(!0);const al=n=>n,$i=n=>Reflect.getPrototypeOf(n);function K_(n,e,t){return function(...r){const s=this.__v_raw,i=ye(s),a=$r(i),l=n==="entries"||n===Symbol.iterator&&a,c=n==="keys"&&a,h=s[n](...r),d=t?al:e?Qr:Ot;return!e&&rt(i,"iterate",c?ol:fr),{next(){const{value:p,done:y}=h.next();return y?{value:p,done:y}:{value:l?[d(p[0]),d(p[1])]:d(p),done:y}},[Symbol.iterator](){return this}}}}function qi(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function G_(n,e){const t={get(s){const i=this.__v_raw,a=ye(i),l=ye(s);n||(xn(s,l)&&rt(a,"get",s),rt(a,"get",l));const{has:c}=$i(a),h=e?al:n?Qr:Ot;if(c.call(a,s))return h(i.get(s));if(c.call(a,l))return h(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!n&&rt(ye(s),"iterate",fr),s.size},has(s){const i=this.__v_raw,a=ye(i),l=ye(s);return n||(xn(s,l)&&rt(a,"has",s),rt(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,c=ye(l),h=e?al:n?Qr:Ot;return!n&&rt(c,"iterate",fr),l.forEach((d,p)=>s.call(i,h(d),h(p),a))}};return it(t,n?{add:qi("add"),set:qi("set"),delete:qi("delete"),clear:qi("clear")}:{add(s){!e&&!vt(s)&&!gn(s)&&(s=ye(s));const i=ye(this);return $i(i).has.call(i,s)||(i.add(s),sn(i,"add",s,s)),this},set(s,i){!e&&!vt(i)&&!gn(i)&&(i=ye(i));const a=ye(this),{has:l,get:c}=$i(a);let h=l.call(a,s);h||(s=ye(s),h=l.call(a,s));const d=c.call(a,s);return a.set(s,i),h?xn(i,d)&&sn(a,"set",s,i):sn(a,"add",s,i),this},delete(s){const i=ye(this),{has:a,get:l}=$i(i);let c=a.call(i,s);c||(s=ye(s),c=a.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&sn(i,"delete",s,void 0),h},clear(){const s=ye(this),i=s.size!==0,a=s.clear();return i&&sn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=K_(s,n,e)}),t}function Zl(n,e){const t=G_(n,e);return(r,s,i)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(ve(t,s)&&s in r?t:r,s,i)}const Q_={get:Zl(!1,!1)},J_={get:Zl(!1,!0)},Y_={get:Zl(!0,!1)};const Md=new WeakMap,Ld=new WeakMap,Fd=new WeakMap,X_=new WeakMap;function Z_(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ey(n){return n.__v_skip||!Object.isExtensible(n)?0:Z_(A_(n))}function Go(n){return gn(n)?n:ec(n,!1,H_,Q_,Md)}function ty(n){return ec(n,!1,W_,J_,Ld)}function ll(n){return ec(n,!0,z_,Y_,Fd)}function ec(n,e,t,r,s){if(!Re(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=ey(n);if(i===0)return n;const a=s.get(n);if(a)return a;const l=new Proxy(n,i===2?r:t);return s.set(n,l),l}function un(n){return gn(n)?un(n.__v_raw):!!(n&&n.__v_isReactive)}function gn(n){return!!(n&&n.__v_isReadonly)}function vt(n){return!!(n&&n.__v_isShallow)}function Qo(n){return n?!!n.__v_raw:!1}function ye(n){const e=n&&n.__v_raw;return e?ye(e):n}function tc(n){return!ve(n,"__v_skip")&&Object.isExtensible(n)&&yd(n,"__v_skip",!0),n}const Ot=n=>Re(n)?Go(n):n,Qr=n=>Re(n)?ll(n):n;function De(n){return n?n.__v_isRef===!0:!1}function Br(n){return ny(n,!1)}function ny(n,e){return De(n)?n:new ry(n,e)}class ry{constructor(e,t){this.dep=new Xl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ye(e),this._value=t?e:Ot(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||vt(e)||gn(e);e=r?e:ye(e),xn(e,t)&&(this._rawValue=e,this._value=r?e:Ot(e),this.dep.trigger())}}function Be(n){return De(n)?n.value:n}const sy={get:(n,e,t)=>e==="__v_raw"?n:Be(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return De(s)&&!De(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function Ud(n){return un(n)?n:new Proxy(n,sy)}function iy(n){const e=ne(n)?new Array(n.length):{};for(const t in n)e[t]=ay(n,t);return e}class oy{constructor(e,t,r){this._object=e,this._key=t,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._raw=ye(e);let s=!0,i=e;if(!ne(e)||!$o(String(t)))do s=!Qo(i)||vt(i);while(s&&(i=i.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=Be(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&De(this._raw[this._key])){const t=this._object[this._key];if(De(t)){t.value=e;return}}this._object[this._key]=e}get dep(){return F_(this._raw,this._key)}}function ay(n,e,t){return new oy(n,e,t)}class ly{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Xl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ys-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&be!==this)return Rd(this,!0),!0}get value(){const e=this.dep.track();return Vd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function cy(n,e,t=!1){let r,s;return ce(n)?r=n:(r=n.get,s=n.set),new ly(r,s,t)}const Hi={},fo=new WeakMap;let ar;function uy(n,e=!1,t=ar){if(t){let r=fo.get(t);r||fo.set(t,r=[]),r.push(n)}}function hy(n,e,t=we){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:c}=t,h=q=>s?q:vt(q)||s===!1||s===0?on(q,1):on(q);let d,p,y,b,V=!1,N=!1;if(De(n)?(p=()=>n.value,V=vt(n)):un(n)?(p=()=>h(n),V=!0):ne(n)?(N=!0,V=n.some(q=>un(q)||vt(q)),p=()=>n.map(q=>{if(De(q))return q.value;if(un(q))return h(q);if(ce(q))return c?c(q,2):q()})):ce(n)?e?p=c?()=>c(n,2):n:p=()=>{if(y){dn();try{y()}finally{pn()}}const q=ar;ar=d;try{return c?c(n,3,[b]):n(b)}finally{ar=q}}:p=$t,e&&s){const q=p,re=s===!0?1/0:s;p=()=>on(q(),re)}const L=Ad(),z=()=>{d.stop(),L&&L.active&&Wl(L.effects,d)};if(i&&e){const q=e;e=(...re)=>{q(...re),z()}}let W=N?new Array(n.length).fill(Hi):Hi;const Q=q=>{if(!(!(d.flags&1)||!d.dirty&&!q))if(e){const re=d.run();if(s||V||(N?re.some((ge,w)=>xn(ge,W[w])):xn(re,W))){y&&y();const ge=ar;ar=d;try{const w=[re,W===Hi?void 0:N&&W[0]===Hi?[]:W,b];W=re,c?c(e,3,w):e(...w)}finally{ar=ge}}}else d.run()};return l&&l(Q),d=new bd(p),d.scheduler=a?()=>a(Q,!1):Q,b=q=>uy(q,!1,d),y=d.onStop=()=>{const q=fo.get(d);if(q){if(c)c(q,4);else for(const re of q)re();fo.delete(d)}},e?r?Q(!0):W=d.run():a?a(Q.bind(null,!0),!0):d.run(),z.pause=d.pause.bind(d),z.resume=d.resume.bind(d),z.stop=z,z}function on(n,e=1/0,t){if(e<=0||!Re(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,De(n))on(n.value,e,t);else if(ne(n))for(let r=0;r<n.length;r++)on(n[r],e,t);else if(jo(n)||$r(n))n.forEach(r=>{on(r,e,t)});else if(md(n)){for(const r in n)on(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&on(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function di(n,e,t,r){try{return r?n(...r):n()}catch(s){Jo(s,e,t)}}function Qt(n,e,t,r){if(ce(n)){const s=di(n,e,t,r);return s&&pd(s)&&s.catch(i=>{Jo(i,e,t)}),s}if(ne(n)){const s=[];for(let i=0;i<n.length;i++)s.push(Qt(n[i],e,t,r));return s}}function Jo(n,e,t,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||we;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${t}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](n,c,h)===!1)return}l=l.parent}if(i){dn(),di(i,null,10,[n,c,h]),pn();return}}fy(n,t,s,r,a)}function fy(n,e,t,r=!0,s=!1){if(s)throw n;console.error(n)}const ft=[];let Ut=-1;const qr=[];let Cn=null,xr=0;const Bd=Promise.resolve();let po=null;function nc(n){const e=po||Bd;return n?e.then(this?n.bind(this):n):e}function dy(n){let e=Ut+1,t=ft.length;for(;e<t;){const r=e+t>>>1,s=ft[r],i=Zs(s);i<n||i===n&&s.flags&2?e=r+1:t=r}return e}function rc(n){if(!(n.flags&1)){const e=Zs(n),t=ft[ft.length-1];!t||!(n.flags&2)&&e>=Zs(t)?ft.push(n):ft.splice(dy(e),0,n),n.flags|=1,jd()}}function jd(){po||(po=Bd.then(qd))}function py(n){ne(n)?qr.push(...n):Cn&&n.id===-1?Cn.splice(xr+1,0,n):n.flags&1||(qr.push(n),n.flags|=1),jd()}function Xu(n,e,t=Ut+1){for(;t<ft.length;t++){const r=ft[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;ft.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function $d(n){if(qr.length){const e=[...new Set(qr)].sort((t,r)=>Zs(t)-Zs(r));if(qr.length=0,Cn){Cn.push(...e);return}for(Cn=e,xr=0;xr<Cn.length;xr++){const t=Cn[xr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Cn=null,xr=0}}const Zs=n=>n.id==null?n.flags&2?-1:1/0:n.id;function qd(n){try{for(Ut=0;Ut<ft.length;Ut++){const e=ft[Ut];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),di(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ut<ft.length;Ut++){const e=ft[Ut];e&&(e.flags&=-2)}Ut=-1,ft.length=0,$d(),po=null,(ft.length||qr.length)&&qd()}}let bt=null,Hd=null;function go(n){const e=bt;return bt=n,Hd=n&&n.type.__scopeId||null,e}function gy(n,e=bt,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&ch(-1);const i=go(e);let a;try{a=n(...s)}finally{go(i),r._d&&ch(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Zu(n,e){if(bt===null)return n;const t=ea(bt),r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,l,c=we]=e[s];i&&(ce(i)&&(i={mounted:i,updated:i}),i.deep&&on(a),r.push({dir:i,instance:t,value:a,oldValue:void 0,arg:l,modifiers:c}))}return n}function ir(n,e,t,r){const s=n.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&(dn(),Qt(c,t,8,[n.el,l,n,e]),pn())}}const my=Symbol("_vte"),_y=n=>n.__isTeleport,yy=Symbol("_leaveCb");function sc(n,e){n.shapeFlag&6&&n.component?(n.transition=e,sc(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function vy(n,e){return ce(n)?it({name:n.name},e,{setup:n}):n}function zd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const mo=new WeakMap;function Us(n,e,t,r,s=!1){if(ne(n)){n.forEach((V,N)=>Us(V,e&&(ne(e)?e[N]:e),t,r,s));return}if(Bs(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Us(n,e,t,r.component.subTree);return}const i=r.shapeFlag&4?ea(r.component):r.el,a=s?null:i,{i:l,r:c}=n,h=e&&e.r,d=l.refs===we?l.refs={}:l.refs,p=l.setupState,y=ye(p),b=p===we?dd:V=>ve(y,V);if(h!=null&&h!==c){if(eh(e),Le(h))d[h]=null,b(h)&&(p[h]=null);else if(De(h)){h.value=null;const V=e;V.k&&(d[V.k]=null)}}if(ce(c))di(c,l,12,[a,d]);else{const V=Le(c),N=De(c);if(V||N){const L=()=>{if(n.f){const z=V?b(c)?p[c]:d[c]:c.value;if(s)ne(z)&&Wl(z,i);else if(ne(z))z.includes(i)||z.push(i);else if(V)d[c]=[i],b(c)&&(p[c]=d[c]);else{const W=[i];c.value=W,n.k&&(d[n.k]=W)}}else V?(d[c]=a,b(c)&&(p[c]=a)):N&&(c.value=a,n.k&&(d[n.k]=a))};if(a){const z=()=>{L(),mo.delete(n)};z.id=-1,mo.set(n,z),_t(z,t)}else eh(n),L()}}}function eh(n){const e=mo.get(n);e&&(e.flags|=8,mo.delete(n))}zo().requestIdleCallback;zo().cancelIdleCallback;const Bs=n=>!!n.type.__asyncLoader,Wd=n=>n.type.__isKeepAlive;function Ey(n,e){Kd(n,"a",e)}function Ty(n,e){Kd(n,"da",e)}function Kd(n,e,t=dt){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Yo(e,r,t),t){let s=t.parent;for(;s&&s.parent;)Wd(s.parent.vnode)&&Iy(r,e,t,s),s=s.parent}}function Iy(n,e,t,r){const s=Yo(e,n,r,!0);Qd(()=>{Wl(r[e],s)},t)}function Yo(n,e,t=dt,r=!1){if(t){const s=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...a)=>{dn();const l=pi(t),c=Qt(e,t,n,a);return l(),pn(),c});return r?s.unshift(i):s.push(i),i}}const En=n=>(e,t=dt)=>{(!ti||n==="sp")&&Yo(n,(...r)=>e(...r),t)},wy=En("bm"),Gd=En("m"),Ay=En("bu"),by=En("u"),Sy=En("bum"),Qd=En("um"),Ry=En("sp"),Py=En("rtg"),Cy=En("rtc");function Vy(n,e=dt){Yo("ec",n,e)}const ky=Symbol.for("v-ndc");function ja(n,e,t,r){let s;const i=t,a=ne(n);if(a||Le(n)){const l=a&&un(n);let c=!1,h=!1;l&&(c=!vt(n),h=gn(n),n=Ko(n)),s=new Array(n.length);for(let d=0,p=n.length;d<p;d++)s[d]=e(c?h?Qr(Ot(n[d])):Ot(n[d]):n[d],d,void 0,i)}else if(typeof n=="number"){s=new Array(n);for(let l=0;l<n;l++)s[l]=e(l+1,l,void 0,i)}else if(Re(n))if(n[Symbol.iterator])s=Array.from(n,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(n);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const d=l[c];s[c]=e(n[d],d,c,i)}}else s=[];return s}const cl=n=>n?_p(n)?ea(n):cl(n.parent):null,js=it(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>cl(n.parent),$root:n=>cl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Yd(n),$forceUpdate:n=>n.f||(n.f=()=>{rc(n.update)}),$nextTick:n=>n.n||(n.n=nc.bind(n.proxy)),$watch:n=>Hy.bind(n)}),$a=(n,e)=>n!==we&&!n.__isScriptSetup&&ve(n,e),Dy={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:c}=n;if(e[0]!=="$"){const y=a[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return i[e]}else{if($a(r,e))return a[e]=1,r[e];if(s!==we&&ve(s,e))return a[e]=2,s[e];if(ve(i,e))return a[e]=3,i[e];if(t!==we&&ve(t,e))return a[e]=4,t[e];ul&&(a[e]=0)}}const h=js[e];let d,p;if(h)return e==="$attrs"&&rt(n.attrs,"get",""),h(n);if((d=l.__cssModules)&&(d=d[e]))return d;if(t!==we&&ve(t,e))return a[e]=4,t[e];if(p=c.config.globalProperties,ve(p,e))return p[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:i}=n;return $a(s,e)?(s[e]=t,!0):r!==we&&ve(r,e)?(r[e]=t,!0):ve(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,props:i,type:a}},l){let c;return!!(t[l]||n!==we&&l[0]!=="$"&&ve(n,l)||$a(e,l)||ve(i,l)||ve(r,l)||ve(js,l)||ve(s.config.globalProperties,l)||(c=a.__cssModules)&&c[l])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ve(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function th(n){return ne(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let ul=!0;function Ny(n){const e=Yd(n),t=n.proxy,r=n.ctx;ul=!1,e.beforeCreate&&nh(e.beforeCreate,n,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:h,created:d,beforeMount:p,mounted:y,beforeUpdate:b,updated:V,activated:N,deactivated:L,beforeDestroy:z,beforeUnmount:W,destroyed:Q,unmounted:q,render:re,renderTracked:ge,renderTriggered:w,errorCaptured:_,serverPrefetch:m,expose:v,inheritAttrs:I,components:S,directives:T,filters:lt}=e;if(h&&Oy(h,r,null),a)for(const ae in a){const me=a[ae];ce(me)&&(r[ae]=me.bind(t))}if(s){const ae=s.call(t,t);Re(ae)&&(n.data=Go(ae))}if(ul=!0,i)for(const ae in i){const me=i[ae],St=ce(me)?me.bind(t,t):ce(me.get)?me.get.bind(t,t):$t,Xn=!ce(me)&&ce(me.set)?me.set.bind(t):$t,Xt=lc({get:St,set:Xn});Object.defineProperty(r,ae,{enumerable:!0,configurable:!0,get:()=>Xt.value,set:Fe=>Xt.value=Fe})}if(l)for(const ae in l)Jd(l[ae],r,t,ae);if(c){const ae=ce(c)?c.call(t):c;Reflect.ownKeys(ae).forEach(me=>{By(me,ae[me])})}d&&nh(d,n,"c");function Ce(ae,me){ne(me)?me.forEach(St=>ae(St.bind(t))):me&&ae(me.bind(t))}if(Ce(wy,p),Ce(Gd,y),Ce(Ay,b),Ce(by,V),Ce(Ey,N),Ce(Ty,L),Ce(Vy,_),Ce(Cy,ge),Ce(Py,w),Ce(Sy,W),Ce(Qd,q),Ce(Ry,m),ne(v))if(v.length){const ae=n.exposed||(n.exposed={});v.forEach(me=>{Object.defineProperty(ae,me,{get:()=>t[me],set:St=>t[me]=St,enumerable:!0})})}else n.exposed||(n.exposed={});re&&n.render===$t&&(n.render=re),I!=null&&(n.inheritAttrs=I),S&&(n.components=S),T&&(n.directives=T),m&&zd(n)}function Oy(n,e,t=$t){ne(n)&&(n=hl(n));for(const r in n){const s=n[r];let i;Re(s)?"default"in s?i=$s(s.from||r,s.default,!0):i=$s(s.from||r):i=$s(s),De(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function nh(n,e,t){Qt(ne(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function Jd(n,e,t,r){let s=r.includes(".")?ep(t,r):()=>t[r];if(Le(n)){const i=e[n];ce(i)&&Xi(s,i)}else if(ce(n))Xi(s,n.bind(t));else if(Re(n))if(ne(n))n.forEach(i=>Jd(i,e,t,r));else{const i=ce(n.handler)?n.handler.bind(t):e[n.handler];ce(i)&&Xi(s,i,n)}}function Yd(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=n.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!t&&!r?c=e:(c={},s.length&&s.forEach(h=>_o(c,h,a,!0)),_o(c,e,a)),Re(e)&&i.set(e,c),c}function _o(n,e,t,r=!1){const{mixins:s,extends:i}=e;i&&_o(n,i,t,!0),s&&s.forEach(a=>_o(n,a,t,!0));for(const a in e)if(!(r&&a==="expose")){const l=xy[a]||t&&t[a];n[a]=l?l(n[a],e[a]):e[a]}return n}const xy={data:rh,props:sh,emits:sh,methods:ks,computed:ks,beforeCreate:ut,created:ut,beforeMount:ut,mounted:ut,beforeUpdate:ut,updated:ut,beforeDestroy:ut,beforeUnmount:ut,destroyed:ut,unmounted:ut,activated:ut,deactivated:ut,errorCaptured:ut,serverPrefetch:ut,components:ks,directives:ks,watch:Ly,provide:rh,inject:My};function rh(n,e){return e?n?function(){return it(ce(n)?n.call(this,this):n,ce(e)?e.call(this,this):e)}:e:n}function My(n,e){return ks(hl(n),hl(e))}function hl(n){if(ne(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function ut(n,e){return n?[...new Set([].concat(n,e))]:e}function ks(n,e){return n?it(Object.create(null),n,e):e}function sh(n,e){return n?ne(n)&&ne(e)?[...new Set([...n,...e])]:it(Object.create(null),th(n),th(e??{})):e}function Ly(n,e){if(!n)return e;if(!e)return n;const t=it(Object.create(null),n);for(const r in e)t[r]=ut(n[r],e[r]);return t}function Xd(){return{app:null,config:{isNativeTag:dd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Fy=0;function Uy(n,e){return function(r,s=null){ce(r)||(r=it({},r)),s!=null&&!Re(s)&&(s=null);const i=Xd(),a=new WeakSet,l=[];let c=!1;const h=i.app={_uid:Fy++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:wv,get config(){return i.config},set config(d){},use(d,...p){return a.has(d)||(d&&ce(d.install)?(a.add(d),d.install(h,...p)):ce(d)&&(a.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,y){if(!c){const b=h._ceVNode||hn(r,s);return b.appContext=i,y===!0?y="svg":y===!1&&(y=void 0),n(b,d,y),c=!0,h._container=d,d.__vue_app__=h,ea(b.component)}},onUnmount(d){l.push(d)},unmount(){c&&(Qt(l,h._instance,16),n(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=dr;dr=h;try{return d()}finally{dr=p}}};return h}}let dr=null;function By(n,e){if(dt){let t=dt.provides;const r=dt.parent&&dt.parent.provides;r===t&&(t=dt.provides=Object.create(r)),t[n]=e}}function $s(n,e,t=!1){const r=mp();if(r||dr){let s=dr?dr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&ce(e)?e.call(r&&r.proxy):e}}function jy(){return!!(mp()||dr)}const $y=Symbol.for("v-scx"),qy=()=>$s($y);function Xi(n,e,t){return Zd(n,e,t)}function Zd(n,e,t=we){const{immediate:r,deep:s,flush:i,once:a}=t,l=it({},t),c=e&&r||!e&&i!=="post";let h;if(ti){if(i==="sync"){const b=qy();h=b.__watcherHandles||(b.__watcherHandles=[])}else if(!c){const b=()=>{};return b.stop=$t,b.resume=$t,b.pause=$t,b}}const d=dt;l.call=(b,V,N)=>Qt(b,d,V,N);let p=!1;i==="post"?l.scheduler=b=>{_t(b,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(b,V)=>{V?b():rc(b)}),l.augmentJob=b=>{e&&(b.flags|=4),p&&(b.flags|=2,d&&(b.id=d.uid,b.i=d))};const y=hy(n,e,l);return ti&&(h?h.push(y):c&&y()),y}function Hy(n,e,t){const r=this.proxy,s=Le(n)?n.includes(".")?ep(r,n):()=>r[n]:n.bind(r,r);let i;ce(e)?i=e:(i=e.handler,t=e);const a=pi(this),l=Zd(s,i.bind(r),t);return a(),l}function ep(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const zy=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${$n(e)}Modifiers`]||n[`${wr(e)}Modifiers`];function Wy(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||we;let s=t;const i=e.startsWith("update:"),a=i&&zy(r,e.slice(7));a&&(a.trim&&(s=t.map(d=>Le(d)?d.trim():d)),a.number&&(s=t.map(Ho)));let l,c=r[l=Ma(e)]||r[l=Ma($n(e))];!c&&i&&(c=r[l=Ma(wr(e))]),c&&Qt(c,n,6,s);const h=r[l+"Once"];if(h){if(!n.emitted)n.emitted={};else if(n.emitted[l])return;n.emitted[l]=!0,Qt(h,n,6,s)}}const Ky=new WeakMap;function tp(n,e,t=!1){const r=t?Ky:e.emitsCache,s=r.get(n);if(s!==void 0)return s;const i=n.emits;let a={},l=!1;if(!ce(n)){const c=h=>{const d=tp(h,e,!0);d&&(l=!0,it(a,d))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!i&&!l?(Re(n)&&r.set(n,null),null):(ne(i)?i.forEach(c=>a[c]=null):it(a,i),Re(n)&&r.set(n,a),a)}function Xo(n,e){return!n||!Bo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ve(n,e[0].toLowerCase()+e.slice(1))||ve(n,wr(e))||ve(n,e))}function ih(n){const{type:e,vnode:t,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:h,renderCache:d,props:p,data:y,setupState:b,ctx:V,inheritAttrs:N}=n,L=go(n);let z,W;try{if(t.shapeFlag&4){const q=s||r,re=q;z=jt(h.call(re,q,d,p,b,y,V)),W=l}else{const q=e;z=jt(q.length>1?q(p,{attrs:l,slots:a,emit:c}):q(p,null)),W=e.props?l:Gy(l)}}catch(q){qs.length=0,Jo(q,n,1),z=hn(qn)}let Q=z;if(W&&N!==!1){const q=Object.keys(W),{shapeFlag:re}=Q;q.length&&re&7&&(i&&q.some(zl)&&(W=Qy(W,i)),Q=Jr(Q,W,!1,!0))}return t.dirs&&(Q=Jr(Q,null,!1,!0),Q.dirs=Q.dirs?Q.dirs.concat(t.dirs):t.dirs),t.transition&&sc(Q,t.transition),z=Q,go(L),z}const Gy=n=>{let e;for(const t in n)(t==="class"||t==="style"||Bo(t))&&((e||(e={}))[t]=n[t]);return e},Qy=(n,e)=>{const t={};for(const r in n)(!zl(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function Jy(n,e,t){const{props:r,children:s,component:i}=n,{props:a,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return r?oh(r,a,h):!!a;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const y=d[p];if(a[y]!==r[y]&&!Xo(h,y))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?oh(r,a,h):!0:!!a;return!1}function oh(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==n[i]&&!Xo(t,i))return!0}return!1}function Yy({vnode:n,parent:e},t){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.el=n.el),r===n)(n=e.vnode).el=t,e=e.parent;else break}}const np={},rp=()=>Object.create(np),sp=n=>Object.getPrototypeOf(n)===np;function Xy(n,e,t,r=!1){const s={},i=rp();n.propsDefaults=Object.create(null),ip(n,e,s,i);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=r?s:ty(s):n.type.props?n.props=s:n.props=i,n.attrs=i}function Zy(n,e,t,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=n,l=ye(s),[c]=n.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=n.vnode.dynamicProps;for(let p=0;p<d.length;p++){let y=d[p];if(Xo(n.emitsOptions,y))continue;const b=e[y];if(c)if(ve(i,y))b!==i[y]&&(i[y]=b,h=!0);else{const V=$n(y);s[V]=fl(c,l,V,b,n,!1)}else b!==i[y]&&(i[y]=b,h=!0)}}}else{ip(n,e,s,i)&&(h=!0);let d;for(const p in l)(!e||!ve(e,p)&&((d=wr(p))===p||!ve(e,d)))&&(c?t&&(t[p]!==void 0||t[d]!==void 0)&&(s[p]=fl(c,l,p,void 0,n,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!ve(e,p))&&(delete i[p],h=!0)}h&&sn(n.attrs,"set","")}function ip(n,e,t,r){const[s,i]=n.propsOptions;let a=!1,l;if(e)for(let c in e){if(Ms(c))continue;const h=e[c];let d;s&&ve(s,d=$n(c))?!i||!i.includes(d)?t[d]=h:(l||(l={}))[d]=h:Xo(n.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,a=!0)}if(i){const c=ye(t),h=l||we;for(let d=0;d<i.length;d++){const p=i[d];t[p]=fl(s,c,p,h[p],n,!ve(h,p))}}return a}function fl(n,e,t,r,s,i){const a=n[t];if(a!=null){const l=ve(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&ce(c)){const{propsDefaults:h}=s;if(t in h)r=h[t];else{const d=pi(s);r=h[t]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(t,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===wr(t))&&(r=!0))}return r}const ev=new WeakMap;function op(n,e,t=!1){const r=t?ev:e.propsCache,s=r.get(n);if(s)return s;const i=n.props,a={},l=[];let c=!1;if(!ce(n)){const d=p=>{c=!0;const[y,b]=op(p,e,!0);it(a,y),b&&l.push(...b)};!t&&e.mixins.length&&e.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!i&&!c)return Re(n)&&r.set(n,jr),jr;if(ne(i))for(let d=0;d<i.length;d++){const p=$n(i[d]);ah(p)&&(a[p]=we)}else if(i)for(const d in i){const p=$n(d);if(ah(p)){const y=i[d],b=a[p]=ne(y)||ce(y)?{type:y}:it({},y),V=b.type;let N=!1,L=!0;if(ne(V))for(let z=0;z<V.length;++z){const W=V[z],Q=ce(W)&&W.name;if(Q==="Boolean"){N=!0;break}else Q==="String"&&(L=!1)}else N=ce(V)&&V.name==="Boolean";b[0]=N,b[1]=L,(N||ve(b,"default"))&&l.push(p)}}const h=[a,l];return Re(n)&&r.set(n,h),h}function ah(n){return n[0]!=="$"&&!Ms(n)}const ic=n=>n==="_"||n==="_ctx"||n==="$stable",oc=n=>ne(n)?n.map(jt):[jt(n)],tv=(n,e,t)=>{if(e._n)return e;const r=gy((...s)=>oc(e(...s)),t);return r._c=!1,r},ap=(n,e,t)=>{const r=n._ctx;for(const s in n){if(ic(s))continue;const i=n[s];if(ce(i))e[s]=tv(s,i,r);else if(i!=null){const a=oc(i);e[s]=()=>a}}},lp=(n,e)=>{const t=oc(e);n.slots.default=()=>t},cp=(n,e,t)=>{for(const r in e)(t||!ic(r))&&(n[r]=e[r])},nv=(n,e,t)=>{const r=n.slots=rp();if(n.vnode.shapeFlag&32){const s=e._;s?(cp(r,e,t),t&&yd(r,"_",s,!0)):ap(e,r)}else e&&lp(n,e)},rv=(n,e,t)=>{const{vnode:r,slots:s}=n;let i=!0,a=we;if(r.shapeFlag&32){const l=e._;l?t&&l===1?i=!1:cp(s,e,t):(i=!e.$stable,ap(e,s)),a=e}else e&&(lp(n,e),a={default:1});if(i)for(const l in s)!ic(l)&&a[l]==null&&delete s[l]},_t=lv;function sv(n){return iv(n)}function iv(n,e){const t=zo();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:h,setElementText:d,parentNode:p,nextSibling:y,setScopeId:b=$t,insertStaticContent:V}=n,N=(E,A,C,F=null,O=null,x=null,$=void 0,B=null,U=!!A.dynamicChildren)=>{if(E===A)return;E&&!Ps(E,A)&&(F=Zt(E),Fe(E,O,x,!0),E=null),A.patchFlag===-2&&(U=!1,A.dynamicChildren=null);const{type:M,ref:X,shapeFlag:H}=A;switch(M){case Zo:L(E,A,C,F);break;case qn:z(E,A,C,F);break;case Ha:E==null&&W(A,C,F,$);break;case It:S(E,A,C,F,O,x,$,B,U);break;default:H&1?re(E,A,C,F,O,x,$,B,U):H&6?T(E,A,C,F,O,x,$,B,U):(H&64||H&128)&&M.process(E,A,C,F,O,x,$,B,U,Lt)}X!=null&&O?Us(X,E&&E.ref,x,A||E,!A):X==null&&E&&E.ref!=null&&Us(E.ref,null,x,E,!0)},L=(E,A,C,F)=>{if(E==null)r(A.el=l(A.children),C,F);else{const O=A.el=E.el;A.children!==E.children&&h(O,A.children)}},z=(E,A,C,F)=>{E==null?r(A.el=c(A.children||""),C,F):A.el=E.el},W=(E,A,C,F)=>{[E.el,E.anchor]=V(E.children,A,C,F,E.el,E.anchor)},Q=({el:E,anchor:A},C,F)=>{let O;for(;E&&E!==A;)O=y(E),r(E,C,F),E=O;r(A,C,F)},q=({el:E,anchor:A})=>{let C;for(;E&&E!==A;)C=y(E),s(E),E=C;s(A)},re=(E,A,C,F,O,x,$,B,U)=>{if(A.type==="svg"?$="svg":A.type==="math"&&($="mathml"),E==null)ge(A,C,F,O,x,$,B,U);else{const M=E.el&&E.el._isVueCE?E.el:null;try{M&&M._beginPatch(),m(E,A,O,x,$,B,U)}finally{M&&M._endPatch()}}},ge=(E,A,C,F,O,x,$,B)=>{let U,M;const{props:X,shapeFlag:H,transition:J,dirs:te}=E;if(U=E.el=a(E.type,x,X&&X.is,X),H&8?d(U,E.children):H&16&&_(E.children,U,null,F,O,qa(E,x),$,B),te&&ir(E,null,F,"created"),w(U,E,E.scopeId,$,F),X){for(const le in X)le!=="value"&&!Ms(le)&&i(U,le,null,X[le],x,F);"value"in X&&i(U,"value",null,X.value,x),(M=X.onVnodeBeforeMount)&&Ft(M,F,E)}te&&ir(E,null,F,"beforeMount");const Z=ov(O,J);Z&&J.beforeEnter(U),r(U,A,C),((M=X&&X.onVnodeMounted)||Z||te)&&_t(()=>{M&&Ft(M,F,E),Z&&J.enter(U),te&&ir(E,null,F,"mounted")},O)},w=(E,A,C,F,O)=>{if(C&&b(E,C),F)for(let x=0;x<F.length;x++)b(E,F[x]);if(O){let x=O.subTree;if(A===x||fp(x.type)&&(x.ssContent===A||x.ssFallback===A)){const $=O.vnode;w(E,$,$.scopeId,$.slotScopeIds,O.parent)}}},_=(E,A,C,F,O,x,$,B,U=0)=>{for(let M=U;M<E.length;M++){const X=E[M]=B?Vn(E[M]):jt(E[M]);N(null,X,A,C,F,O,x,$,B)}},m=(E,A,C,F,O,x,$)=>{const B=A.el=E.el;let{patchFlag:U,dynamicChildren:M,dirs:X}=A;U|=E.patchFlag&16;const H=E.props||we,J=A.props||we;let te;if(C&&or(C,!1),(te=J.onVnodeBeforeUpdate)&&Ft(te,C,A,E),X&&ir(A,E,C,"beforeUpdate"),C&&or(C,!0),(H.innerHTML&&J.innerHTML==null||H.textContent&&J.textContent==null)&&d(B,""),M?v(E.dynamicChildren,M,B,C,F,qa(A,O),x):$||me(E,A,B,null,C,F,qa(A,O),x,!1),U>0){if(U&16)I(B,H,J,C,O);else if(U&2&&H.class!==J.class&&i(B,"class",null,J.class,O),U&4&&i(B,"style",H.style,J.style,O),U&8){const Z=A.dynamicProps;for(let le=0;le<Z.length;le++){const de=Z[le],He=H[de],ze=J[de];(ze!==He||de==="value")&&i(B,de,He,ze,O,C)}}U&1&&E.children!==A.children&&d(B,A.children)}else!$&&M==null&&I(B,H,J,C,O);((te=J.onVnodeUpdated)||X)&&_t(()=>{te&&Ft(te,C,A,E),X&&ir(A,E,C,"updated")},F)},v=(E,A,C,F,O,x,$)=>{for(let B=0;B<A.length;B++){const U=E[B],M=A[B],X=U.el&&(U.type===It||!Ps(U,M)||U.shapeFlag&198)?p(U.el):C;N(U,M,X,null,F,O,x,$,!0)}},I=(E,A,C,F,O)=>{if(A!==C){if(A!==we)for(const x in A)!Ms(x)&&!(x in C)&&i(E,x,A[x],null,O,F);for(const x in C){if(Ms(x))continue;const $=C[x],B=A[x];$!==B&&x!=="value"&&i(E,x,B,$,O,F)}"value"in C&&i(E,"value",A.value,C.value,O)}},S=(E,A,C,F,O,x,$,B,U)=>{const M=A.el=E?E.el:l(""),X=A.anchor=E?E.anchor:l("");let{patchFlag:H,dynamicChildren:J,slotScopeIds:te}=A;te&&(B=B?B.concat(te):te),E==null?(r(M,C,F),r(X,C,F),_(A.children||[],C,X,O,x,$,B,U)):H>0&&H&64&&J&&E.dynamicChildren?(v(E.dynamicChildren,J,C,O,x,$,B),(A.key!=null||O&&A===O.subTree)&&up(E,A,!0)):me(E,A,C,X,O,x,$,B,U)},T=(E,A,C,F,O,x,$,B,U)=>{A.slotScopeIds=B,E==null?A.shapeFlag&512?O.ctx.activate(A,C,F,$,U):lt(A,C,F,O,x,$,U):Mt(E,A,U)},lt=(E,A,C,F,O,x,$)=>{const B=E.component=_v(E,F,O);if(Wd(E)&&(B.ctx.renderer=Lt),yv(B,!1,$),B.asyncDep){if(O&&O.registerDep(B,Ce,$),!E.el){const U=B.subTree=hn(qn);z(null,U,A,C),E.placeholder=U.el}}else Ce(B,E,A,C,O,x,$)},Mt=(E,A,C)=>{const F=A.component=E.component;if(Jy(E,A,C))if(F.asyncDep&&!F.asyncResolved){ae(F,A,C);return}else F.next=A,F.update();else A.el=E.el,F.vnode=A},Ce=(E,A,C,F,O,x,$)=>{const B=()=>{if(E.isMounted){let{next:H,bu:J,u:te,parent:Z,vnode:le}=E;{const Ye=hp(E);if(Ye){H&&(H.el=le.el,ae(E,H,$)),Ye.asyncDep.then(()=>{E.isUnmounted||B()});return}}let de=H,He;or(E,!1),H?(H.el=le.el,ae(E,H,$)):H=le,J&&Yi(J),(He=H.props&&H.props.onVnodeBeforeUpdate)&&Ft(He,Z,H,le),or(E,!0);const ze=ih(E),Et=E.subTree;E.subTree=ze,N(Et,ze,p(Et.el),Zt(Et),E,O,x),H.el=ze.el,de===null&&Yy(E,ze.el),te&&_t(te,O),(He=H.props&&H.props.onVnodeUpdated)&&_t(()=>Ft(He,Z,H,le),O)}else{let H;const{el:J,props:te}=A,{bm:Z,m:le,parent:de,root:He,type:ze}=E,Et=Bs(A);or(E,!1),Z&&Yi(Z),!Et&&(H=te&&te.onVnodeBeforeMount)&&Ft(H,de,A),or(E,!0);{He.ce&&He.ce._def.shadowRoot!==!1&&He.ce._injectChildStyle(ze);const Ye=E.subTree=ih(E);N(null,Ye,C,F,E,O,x),A.el=Ye.el}if(le&&_t(le,O),!Et&&(H=te&&te.onVnodeMounted)){const Ye=A;_t(()=>Ft(H,de,Ye),O)}(A.shapeFlag&256||de&&Bs(de.vnode)&&de.vnode.shapeFlag&256)&&E.a&&_t(E.a,O),E.isMounted=!0,A=C=F=null}};E.scope.on();const U=E.effect=new bd(B);E.scope.off();const M=E.update=U.run.bind(U),X=E.job=U.runIfDirty.bind(U);X.i=E,X.id=E.uid,U.scheduler=()=>rc(X),or(E,!0),M()},ae=(E,A,C)=>{A.component=E;const F=E.vnode.props;E.vnode=A,E.next=null,Zy(E,A.props,F,C),rv(E,A.children,C),dn(),Xu(E),pn()},me=(E,A,C,F,O,x,$,B,U=!1)=>{const M=E&&E.children,X=E?E.shapeFlag:0,H=A.children,{patchFlag:J,shapeFlag:te}=A;if(J>0){if(J&128){Xn(M,H,C,F,O,x,$,B,U);return}else if(J&256){St(M,H,C,F,O,x,$,B,U);return}}te&8?(X&16&&er(M,O,x),H!==M&&d(C,H)):X&16?te&16?Xn(M,H,C,F,O,x,$,B,U):er(M,O,x,!0):(X&8&&d(C,""),te&16&&_(H,C,F,O,x,$,B,U))},St=(E,A,C,F,O,x,$,B,U)=>{E=E||jr,A=A||jr;const M=E.length,X=A.length,H=Math.min(M,X);let J;for(J=0;J<H;J++){const te=A[J]=U?Vn(A[J]):jt(A[J]);N(E[J],te,C,null,O,x,$,B,U)}M>X?er(E,O,x,!0,!1,H):_(A,C,F,O,x,$,B,U,H)},Xn=(E,A,C,F,O,x,$,B,U)=>{let M=0;const X=A.length;let H=E.length-1,J=X-1;for(;M<=H&&M<=J;){const te=E[M],Z=A[M]=U?Vn(A[M]):jt(A[M]);if(Ps(te,Z))N(te,Z,C,null,O,x,$,B,U);else break;M++}for(;M<=H&&M<=J;){const te=E[H],Z=A[J]=U?Vn(A[J]):jt(A[J]);if(Ps(te,Z))N(te,Z,C,null,O,x,$,B,U);else break;H--,J--}if(M>H){if(M<=J){const te=J+1,Z=te<X?A[te].el:F;for(;M<=J;)N(null,A[M]=U?Vn(A[M]):jt(A[M]),C,Z,O,x,$,B,U),M++}}else if(M>J)for(;M<=H;)Fe(E[M],O,x,!0),M++;else{const te=M,Z=M,le=new Map;for(M=Z;M<=J;M++){const We=A[M]=U?Vn(A[M]):jt(A[M]);We.key!=null&&le.set(We.key,M)}let de,He=0;const ze=J-Z+1;let Et=!1,Ye=0;const In=new Array(ze);for(M=0;M<ze;M++)In[M]=0;for(M=te;M<=H;M++){const We=E[M];if(He>=ze){Fe(We,O,x,!0);continue}let Tt;if(We.key!=null)Tt=le.get(We.key);else for(de=Z;de<=J;de++)if(In[de-Z]===0&&Ps(We,A[de])){Tt=de;break}Tt===void 0?Fe(We,O,x,!0):(In[Tt-Z]=M+1,Tt>=Ye?Ye=Tt:Et=!0,N(We,A[Tt],C,null,O,x,$,B,U),He++)}const ps=Et?av(In):jr;for(de=ps.length-1,M=ze-1;M>=0;M--){const We=Z+M,Tt=A[We],Si=A[We+1],Pr=We+1<X?Si.el||Si.placeholder:F;In[M]===0?N(null,Tt,C,Pr,O,x,$,B,U):Et&&(de<0||M!==ps[de]?Xt(Tt,C,Pr,2):de--)}}},Xt=(E,A,C,F,O=null)=>{const{el:x,type:$,transition:B,children:U,shapeFlag:M}=E;if(M&6){Xt(E.component.subTree,A,C,F);return}if(M&128){E.suspense.move(A,C,F);return}if(M&64){$.move(E,A,C,Lt);return}if($===It){r(x,A,C);for(let H=0;H<U.length;H++)Xt(U[H],A,C,F);r(E.anchor,A,C);return}if($===Ha){Q(E,A,C);return}if(F!==2&&M&1&&B)if(F===0)B.beforeEnter(x),r(x,A,C),_t(()=>B.enter(x),O);else{const{leave:H,delayLeave:J,afterLeave:te}=B,Z=()=>{E.ctx.isUnmounted?s(x):r(x,A,C)},le=()=>{x._isLeaving&&x[yy](!0),H(x,()=>{Z(),te&&te()})};J?J(x,Z,le):le()}else r(x,A,C)},Fe=(E,A,C,F=!1,O=!1)=>{const{type:x,props:$,ref:B,children:U,dynamicChildren:M,shapeFlag:X,patchFlag:H,dirs:J,cacheIndex:te}=E;if(H===-2&&(O=!1),B!=null&&(dn(),Us(B,null,C,E,!0),pn()),te!=null&&(A.renderCache[te]=void 0),X&256){A.ctx.deactivate(E);return}const Z=X&1&&J,le=!Bs(E);let de;if(le&&(de=$&&$.onVnodeBeforeUnmount)&&Ft(de,A,E),X&6)Zn(E.component,C,F);else{if(X&128){E.suspense.unmount(C,F);return}Z&&ir(E,null,A,"beforeUnmount"),X&64?E.type.remove(E,A,C,Lt,F):M&&!M.hasOnce&&(x!==It||H>0&&H&64)?er(M,A,C,!1,!0):(x===It&&H&384||!O&&X&16)&&er(U,A,C),F&&Ue(E)}(le&&(de=$&&$.onVnodeUnmounted)||Z)&&_t(()=>{de&&Ft(de,A,E),Z&&ir(E,null,A,"unmounted")},C)},Ue=E=>{const{type:A,el:C,anchor:F,transition:O}=E;if(A===It){Ta(C,F);return}if(A===Ha){q(E);return}const x=()=>{s(C),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(E.shapeFlag&1&&O&&!O.persisted){const{leave:$,delayLeave:B}=O,U=()=>$(C,x);B?B(E.el,x,U):U()}else x()},Ta=(E,A)=>{let C;for(;E!==A;)C=y(E),s(E),E=C;s(A)},Zn=(E,A,C)=>{const{bum:F,scope:O,job:x,subTree:$,um:B,m:U,a:M}=E;lh(U),lh(M),F&&Yi(F),O.stop(),x&&(x.flags|=8,Fe($,E,A,C)),B&&_t(B,A),_t(()=>{E.isUnmounted=!0},A)},er=(E,A,C,F=!1,O=!1,x=0)=>{for(let $=x;$<E.length;$++)Fe(E[$],A,C,F,O)},Zt=E=>{if(E.shapeFlag&6)return Zt(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const A=y(E.anchor||E.el),C=A&&A[my];return C?y(C):A};let fs=!1;const bi=(E,A,C)=>{E==null?A._vnode&&Fe(A._vnode,null,null,!0):N(A._vnode||null,E,A,null,null,null,C),A._vnode=E,fs||(fs=!0,Xu(),$d(),fs=!1)},Lt={p:N,um:Fe,m:Xt,r:Ue,mt:lt,mc:_,pc:me,pbc:v,n:Zt,o:n};return{render:bi,hydrate:void 0,createApp:Uy(bi)}}function qa({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function or({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function ov(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function up(n,e,t=!1){const r=n.children,s=e.children;if(ne(r)&&ne(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Vn(s[i]),l.el=a.el),!t&&l.patchFlag!==-2&&up(a,l)),l.type===Zo&&l.patchFlag!==-1&&(l.el=a.el),l.type===qn&&!l.el&&(l.el=a.el)}}function av(n){const e=n.slice(),t=[0];let r,s,i,a,l;const c=n.length;for(r=0;r<c;r++){const h=n[r];if(h!==0){if(s=t[t.length-1],n[s]<h){e[r]=s,t.push(r);continue}for(i=0,a=t.length-1;i<a;)l=i+a>>1,n[t[l]]<h?i=l+1:a=l;h<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,a=t[i-1];i-- >0;)t[i]=a,a=e[a];return t}function hp(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:hp(e)}function lh(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const fp=n=>n.__isSuspense;function lv(n,e){e&&e.pendingBranch?ne(n)?e.effects.push(...n):e.effects.push(n):py(n)}const It=Symbol.for("v-fgt"),Zo=Symbol.for("v-txt"),qn=Symbol.for("v-cmt"),Ha=Symbol.for("v-stc"),qs=[];let yt=null;function ht(n=!1){qs.push(yt=n?null:[])}function cv(){qs.pop(),yt=qs[qs.length-1]||null}let ei=1;function ch(n,e=!1){ei+=n,n<0&&yt&&e&&(yt.hasOnce=!0)}function dp(n){return n.dynamicChildren=ei>0?yt||jr:null,cv(),ei>0&&yt&&yt.push(n),n}function pt(n,e,t,r,s,i){return dp(Ie(n,e,t,r,s,i,!0))}function uv(n,e,t,r,s){return dp(hn(n,e,t,r,s,!0))}function pp(n){return n?n.__v_isVNode===!0:!1}function Ps(n,e){return n.type===e.type&&n.key===e.key}const gp=({key:n})=>n??null,Zi=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Le(n)||De(n)||ce(n)?{i:bt,r:n,k:e,f:!!t}:n:null);function Ie(n,e=null,t=null,r=0,s=null,i=n===It?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&gp(e),ref:e&&Zi(e),scopeId:Hd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:bt};return l?(ac(c,t),i&128&&n.normalize(c)):t&&(c.shapeFlag|=Le(t)?8:16),ei>0&&!a&&yt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&yt.push(c),c}const hn=hv;function hv(n,e=null,t=null,r=0,s=null,i=!1){if((!n||n===ky)&&(n=qn),pp(n)){const l=Jr(n,e,!0);return t&&ac(l,t),ei>0&&!i&&yt&&(l.shapeFlag&6?yt[yt.indexOf(n)]=l:yt.push(l)),l.patchFlag=-2,l}if(Iv(n)&&(n=n.__vccOpts),e){e=fv(e);let{class:l,style:c}=e;l&&!Le(l)&&(e.class=Gl(l)),Re(c)&&(Qo(c)&&!ne(c)&&(c=it({},c)),e.style=Kl(c))}const a=Le(n)?1:fp(n)?128:_y(n)?64:Re(n)?4:ce(n)?2:0;return Ie(n,e,t,r,s,a,i,!0)}function fv(n){return n?Qo(n)||sp(n)?it({},n):n:null}function Jr(n,e,t=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:c}=n,h=e?pv(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:n.type,props:h,key:h&&gp(h),ref:e&&e.ref?t&&i?ne(i)?i.concat(Zi(e)):[i,Zi(e)]:Zi(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:l,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==It?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Jr(n.ssContent),ssFallback:n.ssFallback&&Jr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&r&&sc(d,c.clone(d)),d}function dl(n=" ",e=0){return hn(Zo,null,n,e)}function dv(n="",e=!1){return e?(ht(),uv(qn,null,n)):hn(qn,null,n)}function jt(n){return n==null||typeof n=="boolean"?hn(qn):ne(n)?hn(It,null,n.slice()):pp(n)?Vn(n):hn(Zo,null,String(n))}function Vn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Jr(n)}function ac(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(ne(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),ac(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!sp(e)?e._ctx=bt:s===3&&bt&&(bt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ce(e)?(e={default:e,_ctx:bt},t=32):(e=String(e),r&64?(t=16,e=[dl(e)]):t=8);n.children=e,n.shapeFlag|=t}function pv(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Gl([e.class,r.class]));else if(s==="style")e.style=Kl([e.style,r.style]);else if(Bo(s)){const i=e[s],a=r[s];a&&i!==a&&!(ne(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function Ft(n,e,t,r=null){Qt(n,e,7,[t,r])}const gv=Xd();let mv=0;function _v(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||gv,i={uid:mv++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Id(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:op(r,s),emitsOptions:tp(r,s),emit:null,emitted:null,propsDefaults:we,inheritAttrs:r.inheritAttrs,ctx:we,data:we,props:we,attrs:we,slots:we,refs:we,setupState:we,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Wy.bind(null,i),n.ce&&n.ce(i),i}let dt=null;const mp=()=>dt||bt;let yo,pl;{const n=zo(),e=(t,r)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};yo=e("__VUE_INSTANCE_SETTERS__",t=>dt=t),pl=e("__VUE_SSR_SETTERS__",t=>ti=t)}const pi=n=>{const e=dt;return yo(n),n.scope.on(),()=>{n.scope.off(),yo(e)}},uh=()=>{dt&&dt.scope.off(),yo(null)};function _p(n){return n.vnode.shapeFlag&4}let ti=!1;function yv(n,e=!1,t=!1){e&&pl(e);const{props:r,children:s}=n.vnode,i=_p(n);Xy(n,r,i,e),nv(n,s,t||e);const a=i?vv(n,e):void 0;return e&&pl(!1),a}function vv(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Dy);const{setup:r}=t;if(r){dn();const s=n.setupContext=r.length>1?Tv(n):null,i=pi(n),a=di(r,n,0,[n.props,s]),l=pd(a);if(pn(),i(),(l||n.sp)&&!Bs(n)&&zd(n),l){if(a.then(uh,uh),e)return a.then(c=>{hh(n,c)}).catch(c=>{Jo(c,n,0)});n.asyncDep=a}else hh(n,a)}else yp(n)}function hh(n,e,t){ce(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Re(e)&&(n.setupState=Ud(e)),yp(n)}function yp(n,e,t){const r=n.type;n.render||(n.render=r.render||$t);{const s=pi(n);dn();try{Ny(n)}finally{pn(),s()}}}const Ev={get(n,e){return rt(n,"get",""),n[e]}};function Tv(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Ev),slots:n.slots,emit:n.emit,expose:e}}function ea(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Ud(tc(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in js)return js[t](n)},has(e,t){return t in e||t in js}})):n.proxy}function Iv(n){return ce(n)&&"__vccOpts"in n}const lc=(n,e)=>cy(n,e,ti),wv="3.5.25";/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let gl;const fh=typeof window<"u"&&window.trustedTypes;if(fh)try{gl=fh.createPolicy("vue",{createHTML:n=>n})}catch{}const vp=gl?n=>gl.createHTML(n):n=>n,Av="http://www.w3.org/2000/svg",bv="http://www.w3.org/1998/Math/MathML",rn=typeof document<"u"?document:null,dh=rn&&rn.createElement("template"),Sv={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e==="svg"?rn.createElementNS(Av,n):e==="mathml"?rn.createElementNS(bv,n):t?rn.createElement(n,{is:t}):rn.createElement(n);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>rn.createTextNode(n),createComment:n=>rn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>rn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,i){const a=t?t.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{dh.innerHTML=vp(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const l=dh.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Rv=Symbol("_vtc");function Pv(n,e,t){const r=n[Rv];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const ph=Symbol("_vod"),Cv=Symbol("_vsh"),Vv=Symbol(""),kv=/(?:^|;)\s*display\s*:/;function Dv(n,e,t){const r=n.style,s=Le(t);let i=!1;if(t&&!s){if(e)if(Le(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();t[l]==null&&eo(r,l,"")}else for(const a in e)t[a]==null&&eo(r,a,"");for(const a in t)a==="display"&&(i=!0),eo(r,a,t[a])}else if(s){if(e!==t){const a=r[Vv];a&&(t+=";"+a),r.cssText=t,i=kv.test(t)}}else e&&n.removeAttribute("style");ph in n&&(n[ph]=i?r.display:"",n[Cv]&&(r.display="none"))}const gh=/\s*!important$/;function eo(n,e,t){if(ne(t))t.forEach(r=>eo(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=Nv(n,e);gh.test(t)?n.setProperty(wr(r),t.replace(gh,""),"important"):n[r]=t}}const mh=["Webkit","Moz","ms"],za={};function Nv(n,e){const t=za[e];if(t)return t;let r=$n(e);if(r!=="filter"&&r in n)return za[e]=r;r=_d(r);for(let s=0;s<mh.length;s++){const i=mh[s]+r;if(i in n)return za[e]=i}return e}const _h="http://www.w3.org/1999/xlink";function yh(n,e,t,r,s,i=D_(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(_h,e.slice(6,e.length)):n.setAttributeNS(_h,e,t):t==null||i&&!vd(t)?n.removeAttribute(e):n.setAttribute(e,i?"":Gt(t)?String(t):t)}function vh(n,e,t,r,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?vp(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(l!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=vd(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function cr(n,e,t,r){n.addEventListener(e,t,r)}function Ov(n,e,t,r){n.removeEventListener(e,t,r)}const Eh=Symbol("_vei");function xv(n,e,t,r,s=null){const i=n[Eh]||(n[Eh]={}),a=i[e];if(r&&a)a.value=r;else{const[l,c]=Mv(e);if(r){const h=i[e]=Uv(r,s);cr(n,l,h,c)}else a&&(Ov(n,l,a,c),i[e]=void 0)}}const Th=/(?:Once|Passive|Capture)$/;function Mv(n){let e;if(Th.test(n)){e={};let r;for(;r=n.match(Th);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):wr(n.slice(2)),e]}let Wa=0;const Lv=Promise.resolve(),Fv=()=>Wa||(Lv.then(()=>Wa=0),Wa=Date.now());function Uv(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;Qt(Bv(r,t.value),e,5,[r])};return t.value=n,t.attached=Fv(),t}function Bv(n,e){if(ne(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ih=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,jv=(n,e,t,r,s,i)=>{const a=s==="svg";e==="class"?Pv(n,r,a):e==="style"?Dv(n,t,r):Bo(e)?zl(e)||xv(n,e,t,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):$v(n,e,r,a))?(vh(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&yh(n,e,r,a,i,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Le(r))?vh(n,$n(e),r,i,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),yh(n,e,r,a))};function $v(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&Ih(e)&&ce(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ih(e)&&Le(t)?!1:e in n}const vo=n=>{const e=n.props["onUpdate:modelValue"]||!1;return ne(e)?t=>Yi(e,t):e};function qv(n){n.target.composing=!0}function wh(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Hr=Symbol("_assign");function Ah(n,e,t){return e&&(n=n.trim()),t&&(n=Ho(n)),n}const Hv={created(n,{modifiers:{lazy:e,trim:t,number:r}},s){n[Hr]=vo(s);const i=r||s.props&&s.props.type==="number";cr(n,e?"change":"input",a=>{a.target.composing||n[Hr](Ah(n.value,t,i))}),(t||i)&&cr(n,"change",()=>{n.value=Ah(n.value,t,i)}),e||(cr(n,"compositionstart",qv),cr(n,"compositionend",wh),cr(n,"change",wh))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:r,trim:s,number:i}},a){if(n[Hr]=vo(a),n.composing)return;const l=(i||n.type==="number")&&!/^0\d/.test(n.value)?Ho(n.value):n.value,c=e??"";l!==c&&(document.activeElement===n&&n.type!=="range"&&(r&&e===t||s&&n.value.trim()===c)||(n.value=c))}},zv={deep:!0,created(n,{value:e,modifiers:{number:t}},r){const s=jo(e);cr(n,"change",()=>{const i=Array.prototype.filter.call(n.options,a=>a.selected).map(a=>t?Ho(Eo(a)):Eo(a));n[Hr](n.multiple?s?new Set(i):i:i[0]),n._assigning=!0,nc(()=>{n._assigning=!1})}),n[Hr]=vo(r)},mounted(n,{value:e}){bh(n,e)},beforeUpdate(n,e,t){n[Hr]=vo(t)},updated(n,{value:e}){n._assigning||bh(n,e)}};function bh(n,e){const t=n.multiple,r=ne(e);if(!(t&&!r&&!jo(e))){for(let s=0,i=n.options.length;s<i;s++){const a=n.options[s],l=Eo(a);if(t)if(r){const c=typeof l;c==="string"||c==="number"?a.selected=e.some(h=>String(h)===String(l)):a.selected=O_(e,l)>-1}else a.selected=e.has(l);else if(Wo(Eo(a),e)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Eo(n){return"_value"in n?n._value:n.value}const Wv=it({patchProp:jv},Sv);let Sh;function Kv(){return Sh||(Sh=sv(Wv))}const Gv=((...n)=>{const e=Kv().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=Jv(r);if(!s)return;const i=e._component;!ce(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,Qv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e});function Qv(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Jv(n){return Le(n)?document.querySelector(n):n}/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Ep;const ta=n=>Ep=n,Tp=Symbol();function ml(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var Hs;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Hs||(Hs={}));function Yv(){const n=wd(!0),e=n.run(()=>Br({}));let t=[],r=[];const s=tc({install(i){ta(s),s._a=i,i.provide(Tp,s),i.config.globalProperties.$pinia=s,r.forEach(a=>t.push(a)),r=[]},use(i){return this._a?t.push(i):r.push(i),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return s}const Ip=()=>{};function Rh(n,e,t,r=Ip){n.add(e);const s=()=>{n.delete(e)&&r()};return!t&&Ad()&&x_(s),s}function Or(n,...e){n.forEach(t=>{t(...e)})}const Xv=n=>n(),Ph=Symbol(),Ka=Symbol();function _l(n,e){n instanceof Map&&e instanceof Map?e.forEach((t,r)=>n.set(r,t)):n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const r=e[t],s=n[t];ml(s)&&ml(r)&&n.hasOwnProperty(t)&&!De(r)&&!un(r)?n[t]=_l(s,r):n[t]=r}return n}const Zv=Symbol();function eE(n){return!ml(n)||!Object.prototype.hasOwnProperty.call(n,Zv)}const{assign:Rn}=Object;function tE(n){return!!(De(n)&&n.effect)}function nE(n,e,t,r){const{state:s,actions:i,getters:a}=e,l=t.state.value[n];let c;function h(){l||(t.state.value[n]=s?s():{});const d=iy(t.state.value[n]);return Rn(d,i,Object.keys(a||{}).reduce((p,y)=>(p[y]=tc(lc(()=>{ta(t);const b=t._s.get(n);return a[y].call(b,b)})),p),{}))}return c=wp(n,h,e,t,r,!0),c}function wp(n,e,t={},r,s,i){let a;const l=Rn({actions:{}},t),c={deep:!0};let h,d,p=new Set,y=new Set,b;const V=r.state.value[n];!i&&!V&&(r.state.value[n]={}),Br({});let N;function L(_){let m;h=d=!1,typeof _=="function"?(_(r.state.value[n]),m={type:Hs.patchFunction,storeId:n,events:b}):(_l(r.state.value[n],_),m={type:Hs.patchObject,payload:_,storeId:n,events:b});const v=N=Symbol();nc().then(()=>{N===v&&(h=!0)}),d=!0,Or(p,m,r.state.value[n])}const z=i?function(){const{state:m}=t,v=m?m():{};this.$patch(I=>{Rn(I,v)})}:Ip;function W(){a.stop(),p.clear(),y.clear(),r._s.delete(n)}const Q=(_,m="")=>{if(Ph in _)return _[Ka]=m,_;const v=function(){ta(r);const I=Array.from(arguments),S=new Set,T=new Set;function lt(ae){S.add(ae)}function Mt(ae){T.add(ae)}Or(y,{args:I,name:v[Ka],store:re,after:lt,onError:Mt});let Ce;try{Ce=_.apply(this&&this.$id===n?this:re,I)}catch(ae){throw Or(T,ae),ae}return Ce instanceof Promise?Ce.then(ae=>(Or(S,ae),ae)).catch(ae=>(Or(T,ae),Promise.reject(ae))):(Or(S,Ce),Ce)};return v[Ph]=!0,v[Ka]=m,v},q={_p:r,$id:n,$onAction:Rh.bind(null,y),$patch:L,$reset:z,$subscribe(_,m={}){const v=Rh(p,_,m.detached,()=>I()),I=a.run(()=>Xi(()=>r.state.value[n],S=>{(m.flush==="sync"?d:h)&&_({storeId:n,type:Hs.direct,events:b},S)},Rn({},c,m)));return v},$dispose:W},re=Go(q);r._s.set(n,re);const w=(r._a&&r._a.runWithContext||Xv)(()=>r._e.run(()=>(a=wd()).run(()=>e({action:Q}))));for(const _ in w){const m=w[_];if(De(m)&&!tE(m)||un(m))i||(V&&eE(m)&&(De(m)?m.value=V[_]:_l(m,V[_])),r.state.value[n][_]=m);else if(typeof m=="function"){const v=Q(m,_);w[_]=v,l.actions[_]=m}}return Rn(re,w),Rn(ye(re),w),Object.defineProperty(re,"$state",{get:()=>r.state.value[n],set:_=>{L(m=>{Rn(m,_)})}}),r._p.forEach(_=>{Rn(re,a.run(()=>_({store:re,app:r._a,pinia:r,options:l})))}),V&&i&&t.hydrate&&t.hydrate(re.$state,V),h=!0,d=!0,re}/*! #__NO_SIDE_EFFECTS__ */function rE(n,e,t){let r;const s=typeof e=="function";r=s?t:e;function i(a,l){const c=jy();return a=a||(c?$s(Tp,null):null),a&&ta(a),a=Ep,a._s.has(n)||(s?wp(n,e,r,a):nE(n,r,a)),a._s.get(n)}return i.$id=n,i}function sE(n,e){if(n==null)return;let t=n;for(let r=0;r<e.length;r++){if(t===void 0||t[e[r]]===void 0)return;if(t===null||t[e[r]]===null)return null;t=t[e[r]]}return t}function cc(n,e,t){if(t.length===0)return e;const r=t[0];return t.length>1&&(e=cc(typeof n!="object"||n===null||!Object.prototype.hasOwnProperty.call(n,r)?Number.isInteger(Number(t[1]))?[]:{}:n[r],e,Array.prototype.slice.call(t,1))),Number.isInteger(Number(r))&&Array.isArray(n)?n.slice()[r]:Object.assign({},n,{[r]:e})}function Ap(n,e){if(n==null||e.length===0)return n;if(e.length===1){if(n==null)return n;if(Number.isInteger(e[0])&&Array.isArray(n))return Array.prototype.slice.call(n,0).splice(e[0],1);const t={};for(const r in n)t[r]=n[r];return delete t[e[0]],t}if(n[e[0]]==null){if(Number.isInteger(e[0])&&Array.isArray(n))return Array.prototype.concat.call([],n);const t={};for(const r in n)t[r]=n[r];return t}return cc(n,Ap(n[e[0]],Array.prototype.slice.call(e,1)),[e[0]])}function bp(n,e){return e.map(t=>t.split(".")).map(t=>[t,sE(n,t)]).filter(t=>t[1]!==void 0).reduce((t,r)=>cc(t,r[1],r[0]),{})}function Sp(n,e){return e.map(t=>t.split(".")).reduce((t,r)=>Ap(t,r),n)}function Ch(n,{storage:e,serializer:t,key:r,debug:s,pick:i,omit:a,beforeHydrate:l,afterHydrate:c},h,d=!0){try{d&&(l==null||l(h));const p=e.getItem(r);if(p){const y=t.deserialize(p),b=i?bp(y,i):y,V=a?Sp(b,a):b;n.$patch(V)}d&&(c==null||c(h))}catch(p){s&&console.error("[pinia-plugin-persistedstate]",p)}}function Vh(n,{storage:e,serializer:t,key:r,debug:s,pick:i,omit:a}){try{const l=i?bp(n,i):n,c=a?Sp(l,a):l,h=t.serialize(c);e.setItem(r,h)}catch(l){s&&console.error("[pinia-plugin-persistedstate]",l)}}function iE(n,e){return typeof n=="function"?n(e):typeof n=="string"?n:e}function oE(n,e,t){const{pinia:r,store:s,options:{persist:i=t}}=n;if(!i)return;// v8 ignore if -- @preserve
if(!(s.$id in r.state.value)){const l=r._s.get(s.$id.replace("__hot:",""));l&&Promise.resolve().then(()=>l.$persist());return}const a=(Array.isArray(i)?i:i===!0?[{}]:[i]).map(e);s.$hydrate=({runHooks:l=!0}={})=>{a.forEach(c=>{Ch(s,c,n,l)})},s.$persist=()=>{a.forEach(l=>{Vh(s.$state,l)})},a.forEach(l=>{Ch(s,l,n),s.$subscribe((c,h)=>Vh(h,l),{detached:!0})})}function aE(n={}){return function(e){oE(e,t=>{const r=iE(t.key,e.store.$id);return{key:(n.key?n.key:s=>s)(r),debug:t.debug??n.debug??!1,serializer:t.serializer??n.serializer??{serialize:s=>JSON.stringify(s),deserialize:s=>JSON.parse(s)},storage:t.storage??n.storage??window.localStorage,beforeHydrate:t.beforeHydrate??n.beforeHydrate,afterHydrate:t.afterHydrate??n.afterHydrate,pick:t.pick,omit:t.omit}},n.auto??!1)}}var lE=aE();const cE=()=>{};var kh={};/**
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
 */const Rp=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},uE=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],l=n[t++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Pp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,c=s+2<n.length,h=c?n[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let y=(l&15)<<2|h>>6,b=h&63;c||(b=64,a||(y=64)),r.push(t[d],t[p],t[y],t[b])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Rp(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):uE(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new hE;const y=i<<2|l>>4;if(r.push(y),h!==64){const b=l<<4&240|h>>2;if(r.push(b),p!==64){const V=h<<6&192|p;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class hE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fE=function(n){const e=Rp(n);return Pp.encodeByteArray(e,!0)},To=function(n){return fE(n).replace(/\./g,"")},Cp=function(n){try{return Pp.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function dE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const pE=()=>dE().__FIREBASE_DEFAULTS__,gE=()=>{if(typeof process>"u"||typeof kh>"u")return;const n=kh.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},mE=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Cp(n[1]);return e&&JSON.parse(e)},na=()=>{try{return cE()||pE()||gE()||mE()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Vp=n=>{var e,t;return(t=(e=na())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},_E=n=>{const e=Vp(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},kp=()=>{var n;return(n=na())===null||n===void 0?void 0:n.config},Dp=n=>{var e;return(e=na())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class yE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function ss(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Np(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function vE(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[To(JSON.stringify(t)),To(JSON.stringify(a)),""].join(".")}const zs={};function EE(){const n={prod:[],emulator:[]};for(const e of Object.keys(zs))zs[e]?n.emulator.push(e):n.prod.push(e);return n}function TE(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Dh=!1;function Op(n,e){if(typeof window>"u"||typeof document>"u"||!ss(window.location.host)||zs[n]===e||zs[n]||Dh)return;zs[n]=e;function t(y){return`__firebase__banner__${y}`}const r="__firebase__banner",i=EE().prod.length>0;function a(){const y=document.getElementById(r);y&&y.remove()}function l(y){y.style.display="flex",y.style.background="#7faaf0",y.style.position="fixed",y.style.bottom="5px",y.style.left="5px",y.style.padding=".5em",y.style.borderRadius="5px",y.style.alignItems="center"}function c(y,b){y.setAttribute("width","24"),y.setAttribute("id",b),y.setAttribute("height","24"),y.setAttribute("viewBox","0 0 24 24"),y.setAttribute("fill","none"),y.style.marginLeft="-6px"}function h(){const y=document.createElement("span");return y.style.cursor="pointer",y.style.marginLeft="16px",y.style.fontSize="24px",y.innerHTML=" &times;",y.onclick=()=>{Dh=!0,a()},y}function d(y,b){y.setAttribute("id",b),y.innerText="Learn more",y.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",y.setAttribute("target","__blank"),y.style.paddingLeft="5px",y.style.textDecoration="underline"}function p(){const y=TE(r),b=t("text"),V=document.getElementById(b)||document.createElement("span"),N=t("learnmore"),L=document.getElementById(N)||document.createElement("a"),z=t("preprendIcon"),W=document.getElementById(z)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(y.created){const Q=y.element;l(Q),d(L,N);const q=h();c(W,z),Q.append(W,V,L,q),document.body.appendChild(Q)}i?(V.innerText="Preview backend disconnected.",W.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(W.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,V.innerText="Preview backend running in this workspace."),V.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function ot(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function IE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ot())}function wE(){var n;const e=(n=na())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function AE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function bE(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function SE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function RE(){const n=ot();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function PE(){return!wE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function CE(){try{return typeof indexedDB=="object"}catch{return!1}}function VE(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const kE="FirebaseError";class Tn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=kE,Object.setPrototypeOf(this,Tn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gi.prototype.create)}}class gi{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?DE(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Tn(s,l,r)}}function DE(n,e){return n.replace(NE,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const NE=/\{\$([^}]+)}/g;function OE(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function yr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Nh(i)&&Nh(a)){if(!yr(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Nh(n){return n!==null&&typeof n=="object"}/**
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
 */function mi(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function xE(n,e){const t=new ME(n,e);return t.subscribe.bind(t)}class ME{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");LE(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Ga),s.error===void 0&&(s.error=Ga),s.complete===void 0&&(s.complete=Ga);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function LE(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ga(){}/**
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
 */function at(n){return n&&n._delegate?n._delegate:n}class vr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const lr="[DEFAULT]";/**
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
 */class FE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new yE;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(BE(e))try{this.getOrInitializeService({instanceIdentifier:lr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=lr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=lr){return this.instances.has(e)}getOptions(e=lr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:UE(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=lr){return this.component?this.component.multipleInstances?e:lr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function UE(n){return n===lr?void 0:n}function BE(n){return n.instantiationMode==="EAGER"}/**
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
 */class jE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new FE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var he;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(he||(he={}));const $E={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},qE=he.INFO,HE={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},zE=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=HE[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class uc{constructor(e){this.name=e,this._logLevel=qE,this._logHandler=zE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$E[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const WE=(n,e)=>e.some(t=>n instanceof t);let Oh,xh;function KE(){return Oh||(Oh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function GE(){return xh||(xh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xp=new WeakMap,yl=new WeakMap,Mp=new WeakMap,Qa=new WeakMap,hc=new WeakMap;function QE(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Mn(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&xp.set(t,n)}).catch(()=>{}),hc.set(e,n),e}function JE(n){if(yl.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});yl.set(n,e)}let vl={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return yl.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Mp.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Mn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function YE(n){vl=n(vl)}function XE(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ja(this),e,...t);return Mp.set(r,e.sort?e.sort():[e]),Mn(r)}:GE().includes(n)?function(...e){return n.apply(Ja(this),e),Mn(xp.get(this))}:function(...e){return Mn(n.apply(Ja(this),e))}}function ZE(n){return typeof n=="function"?XE(n):(n instanceof IDBTransaction&&JE(n),WE(n,KE())?new Proxy(n,vl):n)}function Mn(n){if(n instanceof IDBRequest)return QE(n);if(Qa.has(n))return Qa.get(n);const e=ZE(n);return e!==n&&(Qa.set(n,e),hc.set(e,n)),e}const Ja=n=>hc.get(n);function eT(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),l=Mn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Mn(a.result),c.oldVersion,c.newVersion,Mn(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const tT=["get","getKey","getAll","getAllKeys","count"],nT=["put","add","delete","clear"],Ya=new Map;function Mh(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ya.get(e))return Ya.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=nT.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||tT.includes(t)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),s&&c.done]))[0]};return Ya.set(e,i),i}YE(n=>({...n,get:(e,t,r)=>Mh(e,t)||n.get(e,t,r),has:(e,t)=>!!Mh(e,t)||n.has(e,t)}));/**
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
 */class rT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(sT(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function sT(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const El="@firebase/app",Lh="0.13.2";/**
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
 */const mn=new uc("@firebase/app"),iT="@firebase/app-compat",oT="@firebase/analytics-compat",aT="@firebase/analytics",lT="@firebase/app-check-compat",cT="@firebase/app-check",uT="@firebase/auth",hT="@firebase/auth-compat",fT="@firebase/database",dT="@firebase/data-connect",pT="@firebase/database-compat",gT="@firebase/functions",mT="@firebase/functions-compat",_T="@firebase/installations",yT="@firebase/installations-compat",vT="@firebase/messaging",ET="@firebase/messaging-compat",TT="@firebase/performance",IT="@firebase/performance-compat",wT="@firebase/remote-config",AT="@firebase/remote-config-compat",bT="@firebase/storage",ST="@firebase/storage-compat",RT="@firebase/firestore",PT="@firebase/ai",CT="@firebase/firestore-compat",VT="firebase",kT="11.10.0";/**
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
 */const Tl="[DEFAULT]",DT={[El]:"fire-core",[iT]:"fire-core-compat",[aT]:"fire-analytics",[oT]:"fire-analytics-compat",[cT]:"fire-app-check",[lT]:"fire-app-check-compat",[uT]:"fire-auth",[hT]:"fire-auth-compat",[fT]:"fire-rtdb",[dT]:"fire-data-connect",[pT]:"fire-rtdb-compat",[gT]:"fire-fn",[mT]:"fire-fn-compat",[_T]:"fire-iid",[yT]:"fire-iid-compat",[vT]:"fire-fcm",[ET]:"fire-fcm-compat",[TT]:"fire-perf",[IT]:"fire-perf-compat",[wT]:"fire-rc",[AT]:"fire-rc-compat",[bT]:"fire-gcs",[ST]:"fire-gcs-compat",[RT]:"fire-fst",[CT]:"fire-fst-compat",[PT]:"fire-vertex","fire-js":"fire-js",[VT]:"fire-js-all"};/**
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
 */const Io=new Map,NT=new Map,Il=new Map;function Fh(n,e){try{n.container.addComponent(e)}catch(t){mn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Yr(n){const e=n.name;if(Il.has(e))return mn.debug(`There were multiple attempts to register component ${e}.`),!1;Il.set(e,n);for(const t of Io.values())Fh(t,n);for(const t of NT.values())Fh(t,n);return!0}function fc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ct(n){return n==null?!1:n.settings!==void 0}/**
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
 */const OT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ln=new gi("app","Firebase",OT);/**
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
 */class xT{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new vr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ln.create("app-deleted",{appName:this._name})}}/**
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
 */const is=kT;function Lp(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Tl,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Ln.create("bad-app-name",{appName:String(s)});if(t||(t=kp()),!t)throw Ln.create("no-options");const i=Io.get(s);if(i){if(yr(t,i.options)&&yr(r,i.config))return i;throw Ln.create("duplicate-app",{appName:s})}const a=new jE(s);for(const c of Il.values())a.addComponent(c);const l=new xT(t,r,a);return Io.set(s,l),l}function Fp(n=Tl){const e=Io.get(n);if(!e&&n===Tl&&kp())return Lp();if(!e)throw Ln.create("no-app",{appName:n});return e}function Fn(n,e,t){var r;let s=(r=DT[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),mn.warn(l.join(" "));return}Yr(new vr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const MT="firebase-heartbeat-database",LT=1,ni="firebase-heartbeat-store";let Xa=null;function Up(){return Xa||(Xa=eT(MT,LT,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ni)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ln.create("idb-open",{originalErrorMessage:n.message})})),Xa}async function FT(n){try{const t=(await Up()).transaction(ni),r=await t.objectStore(ni).get(Bp(n));return await t.done,r}catch(e){if(e instanceof Tn)mn.warn(e.message);else{const t=Ln.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});mn.warn(t.message)}}}async function Uh(n,e){try{const r=(await Up()).transaction(ni,"readwrite");await r.objectStore(ni).put(e,Bp(n)),await r.done}catch(t){if(t instanceof Tn)mn.warn(t.message);else{const r=Ln.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});mn.warn(r.message)}}}function Bp(n){return`${n.name}!${n.options.appId}`}/**
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
 */const UT=1024,BT=30;class jT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new qT(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Bh();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>BT){const a=HT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){mn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Bh(),{heartbeatsToSend:r,unsentEntries:s}=$T(this._heartbeatsCache.heartbeats),i=To(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return mn.warn(t),""}}}function Bh(){return new Date().toISOString().substring(0,10)}function $T(n,e=UT){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),jh(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),jh(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class qT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return CE()?VE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await FT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Uh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Uh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function jh(n){return To(JSON.stringify({version:2,heartbeats:n})).length}function HT(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function zT(n){Yr(new vr("platform-logger",e=>new rT(e),"PRIVATE")),Yr(new vr("heartbeat",e=>new jT(e),"PRIVATE")),Fn(El,Lh,n),Fn(El,Lh,"esm2017"),Fn("fire-js","")}zT("");var $h=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Un,jp;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,_){function m(){}m.prototype=_.prototype,w.D=_.prototype,w.prototype=new m,w.prototype.constructor=w,w.C=function(v,I,S){for(var T=Array(arguments.length-2),lt=2;lt<arguments.length;lt++)T[lt-2]=arguments[lt];return _.prototype[I].apply(v,T)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,_,m){m||(m=0);var v=Array(16);if(typeof _=="string")for(var I=0;16>I;++I)v[I]=_.charCodeAt(m++)|_.charCodeAt(m++)<<8|_.charCodeAt(m++)<<16|_.charCodeAt(m++)<<24;else for(I=0;16>I;++I)v[I]=_[m++]|_[m++]<<8|_[m++]<<16|_[m++]<<24;_=w.g[0],m=w.g[1],I=w.g[2];var S=w.g[3],T=_+(S^m&(I^S))+v[0]+3614090360&4294967295;_=m+(T<<7&4294967295|T>>>25),T=S+(I^_&(m^I))+v[1]+3905402710&4294967295,S=_+(T<<12&4294967295|T>>>20),T=I+(m^S&(_^m))+v[2]+606105819&4294967295,I=S+(T<<17&4294967295|T>>>15),T=m+(_^I&(S^_))+v[3]+3250441966&4294967295,m=I+(T<<22&4294967295|T>>>10),T=_+(S^m&(I^S))+v[4]+4118548399&4294967295,_=m+(T<<7&4294967295|T>>>25),T=S+(I^_&(m^I))+v[5]+1200080426&4294967295,S=_+(T<<12&4294967295|T>>>20),T=I+(m^S&(_^m))+v[6]+2821735955&4294967295,I=S+(T<<17&4294967295|T>>>15),T=m+(_^I&(S^_))+v[7]+4249261313&4294967295,m=I+(T<<22&4294967295|T>>>10),T=_+(S^m&(I^S))+v[8]+1770035416&4294967295,_=m+(T<<7&4294967295|T>>>25),T=S+(I^_&(m^I))+v[9]+2336552879&4294967295,S=_+(T<<12&4294967295|T>>>20),T=I+(m^S&(_^m))+v[10]+4294925233&4294967295,I=S+(T<<17&4294967295|T>>>15),T=m+(_^I&(S^_))+v[11]+2304563134&4294967295,m=I+(T<<22&4294967295|T>>>10),T=_+(S^m&(I^S))+v[12]+1804603682&4294967295,_=m+(T<<7&4294967295|T>>>25),T=S+(I^_&(m^I))+v[13]+4254626195&4294967295,S=_+(T<<12&4294967295|T>>>20),T=I+(m^S&(_^m))+v[14]+2792965006&4294967295,I=S+(T<<17&4294967295|T>>>15),T=m+(_^I&(S^_))+v[15]+1236535329&4294967295,m=I+(T<<22&4294967295|T>>>10),T=_+(I^S&(m^I))+v[1]+4129170786&4294967295,_=m+(T<<5&4294967295|T>>>27),T=S+(m^I&(_^m))+v[6]+3225465664&4294967295,S=_+(T<<9&4294967295|T>>>23),T=I+(_^m&(S^_))+v[11]+643717713&4294967295,I=S+(T<<14&4294967295|T>>>18),T=m+(S^_&(I^S))+v[0]+3921069994&4294967295,m=I+(T<<20&4294967295|T>>>12),T=_+(I^S&(m^I))+v[5]+3593408605&4294967295,_=m+(T<<5&4294967295|T>>>27),T=S+(m^I&(_^m))+v[10]+38016083&4294967295,S=_+(T<<9&4294967295|T>>>23),T=I+(_^m&(S^_))+v[15]+3634488961&4294967295,I=S+(T<<14&4294967295|T>>>18),T=m+(S^_&(I^S))+v[4]+3889429448&4294967295,m=I+(T<<20&4294967295|T>>>12),T=_+(I^S&(m^I))+v[9]+568446438&4294967295,_=m+(T<<5&4294967295|T>>>27),T=S+(m^I&(_^m))+v[14]+3275163606&4294967295,S=_+(T<<9&4294967295|T>>>23),T=I+(_^m&(S^_))+v[3]+4107603335&4294967295,I=S+(T<<14&4294967295|T>>>18),T=m+(S^_&(I^S))+v[8]+1163531501&4294967295,m=I+(T<<20&4294967295|T>>>12),T=_+(I^S&(m^I))+v[13]+2850285829&4294967295,_=m+(T<<5&4294967295|T>>>27),T=S+(m^I&(_^m))+v[2]+4243563512&4294967295,S=_+(T<<9&4294967295|T>>>23),T=I+(_^m&(S^_))+v[7]+1735328473&4294967295,I=S+(T<<14&4294967295|T>>>18),T=m+(S^_&(I^S))+v[12]+2368359562&4294967295,m=I+(T<<20&4294967295|T>>>12),T=_+(m^I^S)+v[5]+4294588738&4294967295,_=m+(T<<4&4294967295|T>>>28),T=S+(_^m^I)+v[8]+2272392833&4294967295,S=_+(T<<11&4294967295|T>>>21),T=I+(S^_^m)+v[11]+1839030562&4294967295,I=S+(T<<16&4294967295|T>>>16),T=m+(I^S^_)+v[14]+4259657740&4294967295,m=I+(T<<23&4294967295|T>>>9),T=_+(m^I^S)+v[1]+2763975236&4294967295,_=m+(T<<4&4294967295|T>>>28),T=S+(_^m^I)+v[4]+1272893353&4294967295,S=_+(T<<11&4294967295|T>>>21),T=I+(S^_^m)+v[7]+4139469664&4294967295,I=S+(T<<16&4294967295|T>>>16),T=m+(I^S^_)+v[10]+3200236656&4294967295,m=I+(T<<23&4294967295|T>>>9),T=_+(m^I^S)+v[13]+681279174&4294967295,_=m+(T<<4&4294967295|T>>>28),T=S+(_^m^I)+v[0]+3936430074&4294967295,S=_+(T<<11&4294967295|T>>>21),T=I+(S^_^m)+v[3]+3572445317&4294967295,I=S+(T<<16&4294967295|T>>>16),T=m+(I^S^_)+v[6]+76029189&4294967295,m=I+(T<<23&4294967295|T>>>9),T=_+(m^I^S)+v[9]+3654602809&4294967295,_=m+(T<<4&4294967295|T>>>28),T=S+(_^m^I)+v[12]+3873151461&4294967295,S=_+(T<<11&4294967295|T>>>21),T=I+(S^_^m)+v[15]+530742520&4294967295,I=S+(T<<16&4294967295|T>>>16),T=m+(I^S^_)+v[2]+3299628645&4294967295,m=I+(T<<23&4294967295|T>>>9),T=_+(I^(m|~S))+v[0]+4096336452&4294967295,_=m+(T<<6&4294967295|T>>>26),T=S+(m^(_|~I))+v[7]+1126891415&4294967295,S=_+(T<<10&4294967295|T>>>22),T=I+(_^(S|~m))+v[14]+2878612391&4294967295,I=S+(T<<15&4294967295|T>>>17),T=m+(S^(I|~_))+v[5]+4237533241&4294967295,m=I+(T<<21&4294967295|T>>>11),T=_+(I^(m|~S))+v[12]+1700485571&4294967295,_=m+(T<<6&4294967295|T>>>26),T=S+(m^(_|~I))+v[3]+2399980690&4294967295,S=_+(T<<10&4294967295|T>>>22),T=I+(_^(S|~m))+v[10]+4293915773&4294967295,I=S+(T<<15&4294967295|T>>>17),T=m+(S^(I|~_))+v[1]+2240044497&4294967295,m=I+(T<<21&4294967295|T>>>11),T=_+(I^(m|~S))+v[8]+1873313359&4294967295,_=m+(T<<6&4294967295|T>>>26),T=S+(m^(_|~I))+v[15]+4264355552&4294967295,S=_+(T<<10&4294967295|T>>>22),T=I+(_^(S|~m))+v[6]+2734768916&4294967295,I=S+(T<<15&4294967295|T>>>17),T=m+(S^(I|~_))+v[13]+1309151649&4294967295,m=I+(T<<21&4294967295|T>>>11),T=_+(I^(m|~S))+v[4]+4149444226&4294967295,_=m+(T<<6&4294967295|T>>>26),T=S+(m^(_|~I))+v[11]+3174756917&4294967295,S=_+(T<<10&4294967295|T>>>22),T=I+(_^(S|~m))+v[2]+718787259&4294967295,I=S+(T<<15&4294967295|T>>>17),T=m+(S^(I|~_))+v[9]+3951481745&4294967295,w.g[0]=w.g[0]+_&4294967295,w.g[1]=w.g[1]+(I+(T<<21&4294967295|T>>>11))&4294967295,w.g[2]=w.g[2]+I&4294967295,w.g[3]=w.g[3]+S&4294967295}r.prototype.u=function(w,_){_===void 0&&(_=w.length);for(var m=_-this.blockSize,v=this.B,I=this.h,S=0;S<_;){if(I==0)for(;S<=m;)s(this,w,S),S+=this.blockSize;if(typeof w=="string"){for(;S<_;)if(v[I++]=w.charCodeAt(S++),I==this.blockSize){s(this,v),I=0;break}}else for(;S<_;)if(v[I++]=w[S++],I==this.blockSize){s(this,v),I=0;break}}this.h=I,this.o+=_},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var _=1;_<w.length-8;++_)w[_]=0;var m=8*this.o;for(_=w.length-8;_<w.length;++_)w[_]=m&255,m/=256;for(this.u(w),w=Array(16),_=m=0;4>_;++_)for(var v=0;32>v;v+=8)w[m++]=this.g[_]>>>v&255;return w};function i(w,_){var m=l;return Object.prototype.hasOwnProperty.call(m,w)?m[w]:m[w]=_(w)}function a(w,_){this.h=_;for(var m=[],v=!0,I=w.length-1;0<=I;I--){var S=w[I]|0;v&&S==_||(m[I]=S,v=!1)}this.g=m}var l={};function c(w){return-128<=w&&128>w?i(w,function(_){return new a([_|0],0>_?-1:0)}):new a([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return L(h(-w));for(var _=[],m=1,v=0;w>=m;v++)_[v]=w/m|0,m*=4294967296;return new a(_,0)}function d(w,_){if(w.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(w.charAt(0)=="-")return L(d(w.substring(1),_));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=h(Math.pow(_,8)),v=p,I=0;I<w.length;I+=8){var S=Math.min(8,w.length-I),T=parseInt(w.substring(I,I+S),_);8>S?(S=h(Math.pow(_,S)),v=v.j(S).add(h(T))):(v=v.j(m),v=v.add(h(T)))}return v}var p=c(0),y=c(1),b=c(16777216);n=a.prototype,n.m=function(){if(N(this))return-L(this).m();for(var w=0,_=1,m=0;m<this.g.length;m++){var v=this.i(m);w+=(0<=v?v:4294967296+v)*_,_*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(V(this))return"0";if(N(this))return"-"+L(this).toString(w);for(var _=h(Math.pow(w,6)),m=this,v="";;){var I=q(m,_).g;m=z(m,I.j(_));var S=((0<m.g.length?m.g[0]:m.h)>>>0).toString(w);if(m=I,V(m))return S+v;for(;6>S.length;)S="0"+S;v=S+v}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function V(w){if(w.h!=0)return!1;for(var _=0;_<w.g.length;_++)if(w.g[_]!=0)return!1;return!0}function N(w){return w.h==-1}n.l=function(w){return w=z(this,w),N(w)?-1:V(w)?0:1};function L(w){for(var _=w.g.length,m=[],v=0;v<_;v++)m[v]=~w.g[v];return new a(m,~w.h).add(y)}n.abs=function(){return N(this)?L(this):this},n.add=function(w){for(var _=Math.max(this.g.length,w.g.length),m=[],v=0,I=0;I<=_;I++){var S=v+(this.i(I)&65535)+(w.i(I)&65535),T=(S>>>16)+(this.i(I)>>>16)+(w.i(I)>>>16);v=T>>>16,S&=65535,T&=65535,m[I]=T<<16|S}return new a(m,m[m.length-1]&-2147483648?-1:0)};function z(w,_){return w.add(L(_))}n.j=function(w){if(V(this)||V(w))return p;if(N(this))return N(w)?L(this).j(L(w)):L(L(this).j(w));if(N(w))return L(this.j(L(w)));if(0>this.l(b)&&0>w.l(b))return h(this.m()*w.m());for(var _=this.g.length+w.g.length,m=[],v=0;v<2*_;v++)m[v]=0;for(v=0;v<this.g.length;v++)for(var I=0;I<w.g.length;I++){var S=this.i(v)>>>16,T=this.i(v)&65535,lt=w.i(I)>>>16,Mt=w.i(I)&65535;m[2*v+2*I]+=T*Mt,W(m,2*v+2*I),m[2*v+2*I+1]+=S*Mt,W(m,2*v+2*I+1),m[2*v+2*I+1]+=T*lt,W(m,2*v+2*I+1),m[2*v+2*I+2]+=S*lt,W(m,2*v+2*I+2)}for(v=0;v<_;v++)m[v]=m[2*v+1]<<16|m[2*v];for(v=_;v<2*_;v++)m[v]=0;return new a(m,0)};function W(w,_){for(;(w[_]&65535)!=w[_];)w[_+1]+=w[_]>>>16,w[_]&=65535,_++}function Q(w,_){this.g=w,this.h=_}function q(w,_){if(V(_))throw Error("division by zero");if(V(w))return new Q(p,p);if(N(w))return _=q(L(w),_),new Q(L(_.g),L(_.h));if(N(_))return _=q(w,L(_)),new Q(L(_.g),_.h);if(30<w.g.length){if(N(w)||N(_))throw Error("slowDivide_ only works with positive integers.");for(var m=y,v=_;0>=v.l(w);)m=re(m),v=re(v);var I=ge(m,1),S=ge(v,1);for(v=ge(v,2),m=ge(m,2);!V(v);){var T=S.add(v);0>=T.l(w)&&(I=I.add(m),S=T),v=ge(v,1),m=ge(m,1)}return _=z(w,I.j(_)),new Q(I,_)}for(I=p;0<=w.l(_);){for(m=Math.max(1,Math.floor(w.m()/_.m())),v=Math.ceil(Math.log(m)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),S=h(m),T=S.j(_);N(T)||0<T.l(w);)m-=v,S=h(m),T=S.j(_);V(S)&&(S=y),I=I.add(S),w=z(w,T)}return new Q(I,w)}n.A=function(w){return q(this,w).h},n.and=function(w){for(var _=Math.max(this.g.length,w.g.length),m=[],v=0;v<_;v++)m[v]=this.i(v)&w.i(v);return new a(m,this.h&w.h)},n.or=function(w){for(var _=Math.max(this.g.length,w.g.length),m=[],v=0;v<_;v++)m[v]=this.i(v)|w.i(v);return new a(m,this.h|w.h)},n.xor=function(w){for(var _=Math.max(this.g.length,w.g.length),m=[],v=0;v<_;v++)m[v]=this.i(v)^w.i(v);return new a(m,this.h^w.h)};function re(w){for(var _=w.g.length+1,m=[],v=0;v<_;v++)m[v]=w.i(v)<<1|w.i(v-1)>>>31;return new a(m,w.h)}function ge(w,_){var m=_>>5;_%=32;for(var v=w.g.length-m,I=[],S=0;S<v;S++)I[S]=0<_?w.i(S+m)>>>_|w.i(S+m+1)<<32-_:w.i(S+m);return new a(I,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,jp=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,Un=a}).apply(typeof $h<"u"?$h:typeof self<"u"?self:typeof window<"u"?window:{});var zi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $p,Ds,qp,to,wl,Hp,zp,Wp;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,f){return o==Array.prototype||o==Object.prototype||(o[u]=f.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof zi=="object"&&zi];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(o,u){if(u)e:{var f=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var R=o[g];if(!(R in f))break e;f=f[R]}o=o[o.length-1],g=f[o],u=u(g),u!=g&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var f=0,g=!1,R={next:function(){if(!g&&f<o.length){var P=f++;return{value:u(P,o[P]),done:!1}}return g=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,f){return o.call.apply(o.bind,arguments)}function p(o,u,f){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,g),o.apply(u,R)}}return function(){return o.apply(u,arguments)}}function y(o,u,f){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,y.apply(null,arguments)}function b(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function V(o,u){function f(){}f.prototype=u.prototype,o.aa=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(g,R,P){for(var j=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)j[Te-2]=arguments[Te];return u.prototype[R].apply(g,j)}}function N(o){const u=o.length;if(0<u){const f=Array(u);for(let g=0;g<u;g++)f[g]=o[g];return f}return[]}function L(o,u){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(c(g)){const R=o.length||0,P=g.length||0;o.length=R+P;for(let j=0;j<P;j++)o[R+j]=g[j]}else o.push(g)}}class z{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function W(o){return/^[\s\xa0]*$/.test(o)}function Q(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function q(o){return q[" "](o),o}q[" "]=function(){};var re=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function ge(o,u,f){for(const g in o)u.call(f,o[g],g,o)}function w(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function _(o){const u={};for(const f in o)u[f]=o[f];return u}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(o,u){let f,g;for(let R=1;R<arguments.length;R++){g=arguments[R];for(f in g)o[f]=g[f];for(let P=0;P<m.length;P++)f=m[P],Object.prototype.hasOwnProperty.call(g,f)&&(o[f]=g[f])}}function I(o){var u=1;o=o.split(":");const f=[];for(;0<u&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function S(o){l.setTimeout(()=>{throw o},0)}function T(){var o=St;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class lt{constructor(){this.h=this.g=null}add(u,f){const g=Mt.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Mt=new z(()=>new Ce,o=>o.reset());class Ce{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let ae,me=!1,St=new lt,Xn=()=>{const o=l.Promise.resolve(void 0);ae=()=>{o.then(Xt)}};var Xt=()=>{for(var o;o=T();){try{o.h.call(o.g)}catch(f){S(f)}var u=Mt;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}me=!1};function Fe(){this.s=this.s,this.C=this.C}Fe.prototype.s=!1,Fe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Fe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ue(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Ue.prototype.h=function(){this.defaultPrevented=!0};var Ta=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};l.addEventListener("test",f,u),l.removeEventListener("test",f,u)}catch{}return o})();function Zn(o,u){if(Ue.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(re){e:{try{q(u.nodeName);var R=!0;break e}catch{}R=!1}R||(u=null)}}else f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:er[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Zn.aa.h.call(this)}}V(Zn,Ue);var er={2:"touch",3:"pen",4:"mouse"};Zn.prototype.h=function(){Zn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Zt="closure_listenable_"+(1e6*Math.random()|0),fs=0;function bi(o,u,f,g,R){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=R,this.key=++fs,this.da=this.fa=!1}function Lt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ds(o){this.src=o,this.g={},this.h=0}ds.prototype.add=function(o,u,f,g,R){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var j=A(o,u,g,R);return-1<j?(u=o[j],f||(u.fa=!1)):(u=new bi(u,this.src,P,!!g,R),u.fa=f,o.push(u)),u};function E(o,u){var f=u.type;if(f in o.g){var g=o.g[f],R=Array.prototype.indexOf.call(g,u,void 0),P;(P=0<=R)&&Array.prototype.splice.call(g,R,1),P&&(Lt(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function A(o,u,f,g){for(var R=0;R<o.length;++R){var P=o[R];if(!P.da&&P.listener==u&&P.capture==!!f&&P.ha==g)return R}return-1}var C="closure_lm_"+(1e6*Math.random()|0),F={};function O(o,u,f,g,R){if(Array.isArray(u)){for(var P=0;P<u.length;P++)O(o,u[P],f,g,R);return null}return f=te(f),o&&o[Zt]?o.K(u,f,h(g)?!!g.capture:!1,R):x(o,u,f,!1,g,R)}function x(o,u,f,g,R,P){if(!u)throw Error("Invalid event type");var j=h(R)?!!R.capture:!!R,Te=H(o);if(Te||(o[C]=Te=new ds(o)),f=Te.add(u,f,g,j,P),f.proxy)return f;if(g=$(),f.proxy=g,g.src=o,g.listener=f,o.addEventListener)Ta||(R=j),R===void 0&&(R=!1),o.addEventListener(u.toString(),g,R);else if(o.attachEvent)o.attachEvent(M(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function $(){function o(f){return u.call(o.src,o.listener,f)}const u=X;return o}function B(o,u,f,g,R){if(Array.isArray(u))for(var P=0;P<u.length;P++)B(o,u[P],f,g,R);else g=h(g)?!!g.capture:!!g,f=te(f),o&&o[Zt]?(o=o.i,u=String(u).toString(),u in o.g&&(P=o.g[u],f=A(P,f,g,R),-1<f&&(Lt(P[f]),Array.prototype.splice.call(P,f,1),P.length==0&&(delete o.g[u],o.h--)))):o&&(o=H(o))&&(u=o.g[u.toString()],o=-1,u&&(o=A(u,f,g,R)),(f=-1<o?u[o]:null)&&U(f))}function U(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[Zt])E(u.i,o);else{var f=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(f,g,o.capture):u.detachEvent?u.detachEvent(M(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=H(u))?(E(f,o),f.h==0&&(f.src=null,u[C]=null)):Lt(o)}}}function M(o){return o in F?F[o]:F[o]="on"+o}function X(o,u){if(o.da)o=!0;else{u=new Zn(u,this);var f=o.listener,g=o.ha||o.src;o.fa&&U(o),o=f.call(g,u)}return o}function H(o){return o=o[C],o instanceof ds?o:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0);function te(o){return typeof o=="function"?o:(o[J]||(o[J]=function(u){return o.handleEvent(u)}),o[J])}function Z(){Fe.call(this),this.i=new ds(this),this.M=this,this.F=null}V(Z,Fe),Z.prototype[Zt]=!0,Z.prototype.removeEventListener=function(o,u,f,g){B(this,o,u,f,g)};function le(o,u){var f,g=o.F;if(g)for(f=[];g;g=g.F)f.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new Ue(u,o);else if(u instanceof Ue)u.target=u.target||o;else{var R=u;u=new Ue(g,o),v(u,R)}if(R=!0,f)for(var P=f.length-1;0<=P;P--){var j=u.g=f[P];R=de(j,g,!0,u)&&R}if(j=u.g=o,R=de(j,g,!0,u)&&R,R=de(j,g,!1,u)&&R,f)for(P=0;P<f.length;P++)j=u.g=f[P],R=de(j,g,!1,u)&&R}Z.prototype.N=function(){if(Z.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var f=o.g[u],g=0;g<f.length;g++)Lt(f[g]);delete o.g[u],o.h--}}this.F=null},Z.prototype.K=function(o,u,f,g){return this.i.add(String(o),u,!1,f,g)},Z.prototype.L=function(o,u,f,g){return this.i.add(String(o),u,!0,f,g)};function de(o,u,f,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var R=!0,P=0;P<u.length;++P){var j=u[P];if(j&&!j.da&&j.capture==f){var Te=j.listener,Ke=j.ha||j.src;j.fa&&E(o.i,j),R=Te.call(Ke,g)!==!1&&R}}return R&&!g.defaultPrevented}function He(o,u,f){if(typeof o=="function")f&&(o=y(o,f));else if(o&&typeof o.handleEvent=="function")o=y(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function ze(o){o.g=He(()=>{o.g=null,o.i&&(o.i=!1,ze(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Et extends Fe{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:ze(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ye(o){Fe.call(this),this.h=o,this.g={}}V(Ye,Fe);var In=[];function ps(o){ge(o.g,function(u,f){this.g.hasOwnProperty(f)&&U(u)},o),o.g={}}Ye.prototype.N=function(){Ye.aa.N.call(this),ps(this)},Ye.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var We=l.JSON.stringify,Tt=l.JSON.parse,Si=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Pr(){}Pr.prototype.h=null;function ru(o){return o.h||(o.h=o.i())}function su(){}var gs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ia(){Ue.call(this,"d")}V(Ia,Ue);function wa(){Ue.call(this,"c")}V(wa,Ue);var tr={},iu=null;function Ri(){return iu=iu||new Z}tr.La="serverreachability";function ou(o){Ue.call(this,tr.La,o)}V(ou,Ue);function ms(o){const u=Ri();le(u,new ou(u))}tr.STAT_EVENT="statevent";function au(o,u){Ue.call(this,tr.STAT_EVENT,o),this.stat=u}V(au,Ue);function ct(o){const u=Ri();le(u,new au(u,o))}tr.Ma="timingevent";function lu(o,u){Ue.call(this,tr.Ma,o),this.size=u}V(lu,Ue);function _s(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function ys(){this.g=!0}ys.prototype.xa=function(){this.g=!1};function e_(o,u,f,g,R,P){o.info(function(){if(o.g)if(P)for(var j="",Te=P.split("&"),Ke=0;Ke<Te.length;Ke++){var _e=Te[Ke].split("=");if(1<_e.length){var Xe=_e[0];_e=_e[1];var Ze=Xe.split("_");j=2<=Ze.length&&Ze[1]=="type"?j+(Xe+"="+_e+"&"):j+(Xe+"=redacted&")}}else j=null;else j=P;return"XMLHTTP REQ ("+g+") [attempt "+R+"]: "+u+`
`+f+`
`+j})}function t_(o,u,f,g,R,P,j){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+R+"]: "+u+`
`+f+`
`+P+" "+j})}function Cr(o,u,f,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+r_(o,f)+(g?" "+g:"")})}function n_(o,u){o.info(function(){return"TIMEOUT: "+u})}ys.prototype.info=function(){};function r_(o,u){if(!o.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var g=f[o];if(!(2>g.length)){var R=g[1];if(Array.isArray(R)&&!(1>R.length)){var P=R[0];if(P!="noop"&&P!="stop"&&P!="close")for(var j=1;j<R.length;j++)R[j]=""}}}}return We(f)}catch{return u}}var Pi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},cu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Aa;function Ci(){}V(Ci,Pr),Ci.prototype.g=function(){return new XMLHttpRequest},Ci.prototype.i=function(){return{}},Aa=new Ci;function wn(o,u,f,g){this.j=o,this.i=u,this.l=f,this.R=g||1,this.U=new Ye(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new uu}function uu(){this.i=null,this.g="",this.h=!1}var hu={},ba={};function Sa(o,u,f){o.L=1,o.v=Ni(en(u)),o.m=f,o.P=!0,fu(o,null)}function fu(o,u){o.F=Date.now(),Vi(o),o.A=en(o.v);var f=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),Su(f.i,"t",g),o.C=0,f=o.j.J,o.h=new uu,o.g=Hu(o.j,f?u:null,!o.m),0<o.O&&(o.M=new Et(y(o.Y,o,o.g),o.O)),u=o.U,f=o.g,g=o.ca;var R="readystatechange";Array.isArray(R)||(R&&(In[0]=R.toString()),R=In);for(var P=0;P<R.length;P++){var j=O(f,R[P],g||u.handleEvent,!1,u.h||u);if(!j)break;u.g[j.key]=j}u=o.H?_(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),ms(),e_(o.i,o.u,o.A,o.l,o.R,o.m)}wn.prototype.ca=function(o){o=o.target;const u=this.M;u&&tn(o)==3?u.j():this.Y(o)},wn.prototype.Y=function(o){try{if(o==this.g)e:{const Ze=tn(this.g);var u=this.g.Ba();const Dr=this.g.Z();if(!(3>Ze)&&(Ze!=3||this.g&&(this.h.h||this.g.oa()||Nu(this.g)))){this.J||Ze!=4||u==7||(u==8||0>=Dr?ms(3):ms(2)),Ra(this);var f=this.g.Z();this.X=f;t:if(du(this)){var g=Nu(this.g);o="";var R=g.length,P=tn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){nr(this),vs(this);var j="";break t}this.h.i=new l.TextDecoder}for(u=0;u<R;u++)this.h.h=!0,o+=this.h.i.decode(g[u],{stream:!(P&&u==R-1)});g.length=0,this.h.g+=o,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=f==200,t_(this.i,this.u,this.A,this.l,this.R,Ze,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Te,Ke=this.g;if((Te=Ke.g?Ke.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!W(Te)){var _e=Te;break t}}_e=null}if(f=_e)Cr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Pa(this,f);else{this.o=!1,this.s=3,ct(12),nr(this),vs(this);break e}}if(this.P){f=!0;let Rt;for(;!this.J&&this.C<j.length;)if(Rt=s_(this,j),Rt==ba){Ze==4&&(this.s=4,ct(14),f=!1),Cr(this.i,this.l,null,"[Incomplete Response]");break}else if(Rt==hu){this.s=4,ct(15),Cr(this.i,this.l,j,"[Invalid Chunk]"),f=!1;break}else Cr(this.i,this.l,Rt,null),Pa(this,Rt);if(du(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ze!=4||j.length!=0||this.h.h||(this.s=1,ct(16),f=!1),this.o=this.o&&f,!f)Cr(this.i,this.l,j,"[Invalid Chunked Response]"),nr(this),vs(this);else if(0<j.length&&!this.W){this.W=!0;var Xe=this.j;Xe.g==this&&Xe.ba&&!Xe.M&&(Xe.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),Oa(Xe),Xe.M=!0,ct(11))}}else Cr(this.i,this.l,j,null),Pa(this,j);Ze==4&&nr(this),this.o&&!this.J&&(Ze==4?Bu(this.j,this):(this.o=!1,Vi(this)))}else T_(this.g),f==400&&0<j.indexOf("Unknown SID")?(this.s=3,ct(12)):(this.s=0,ct(13)),nr(this),vs(this)}}}catch{}finally{}};function du(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function s_(o,u){var f=o.C,g=u.indexOf(`
`,f);return g==-1?ba:(f=Number(u.substring(f,g)),isNaN(f)?hu:(g+=1,g+f>u.length?ba:(u=u.slice(g,g+f),o.C=g+f,u)))}wn.prototype.cancel=function(){this.J=!0,nr(this)};function Vi(o){o.S=Date.now()+o.I,pu(o,o.I)}function pu(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=_s(y(o.ba,o),u)}function Ra(o){o.B&&(l.clearTimeout(o.B),o.B=null)}wn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(n_(this.i,this.A),this.L!=2&&(ms(),ct(17)),nr(this),this.s=2,vs(this)):pu(this,this.S-o)};function vs(o){o.j.G==0||o.J||Bu(o.j,o)}function nr(o){Ra(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,ps(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Pa(o,u){try{var f=o.j;if(f.G!=0&&(f.g==o||Ca(f.h,o))){if(!o.K&&Ca(f.h,o)&&f.G==3){try{var g=f.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var R=g;if(R[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)Ui(f),Li(f);else break e;Na(f),ct(18)}}else f.za=R[1],0<f.za-f.T&&37500>R[2]&&f.F&&f.v==0&&!f.C&&(f.C=_s(y(f.Za,f),6e3));if(1>=_u(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else sr(f,11)}else if((o.K||f.g==o)&&Ui(f),!W(u))for(R=f.Da.g.parse(u),u=0;u<R.length;u++){let _e=R[u];if(f.T=_e[0],_e=_e[1],f.G==2)if(_e[0]=="c"){f.K=_e[1],f.ia=_e[2];const Xe=_e[3];Xe!=null&&(f.la=Xe,f.j.info("VER="+f.la));const Ze=_e[4];Ze!=null&&(f.Aa=Ze,f.j.info("SVER="+f.Aa));const Dr=_e[5];Dr!=null&&typeof Dr=="number"&&0<Dr&&(g=1.5*Dr,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Rt=o.g;if(Rt){const ji=Rt.g?Rt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ji){var P=g.h;P.g||ji.indexOf("spdy")==-1&&ji.indexOf("quic")==-1&&ji.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(Va(P,P.h),P.h=null))}if(g.D){const xa=Rt.g?Rt.g.getResponseHeader("X-HTTP-Session-Id"):null;xa&&(g.ya=xa,Pe(g.I,g.D,xa))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var j=o;if(g.qa=qu(g,g.J?g.ia:null,g.W),j.K){yu(g.h,j);var Te=j,Ke=g.L;Ke&&(Te.I=Ke),Te.B&&(Ra(Te),Vi(Te)),g.g=j}else Fu(g);0<f.i.length&&Fi(f)}else _e[0]!="stop"&&_e[0]!="close"||sr(f,7);else f.G==3&&(_e[0]=="stop"||_e[0]=="close"?_e[0]=="stop"?sr(f,7):Da(f):_e[0]!="noop"&&f.l&&f.l.ta(_e),f.v=0)}}ms(4)}catch{}}var i_=class{constructor(o,u){this.g=o,this.map=u}};function gu(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function mu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function _u(o){return o.h?1:o.g?o.g.size:0}function Ca(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Va(o,u){o.g?o.g.add(u):o.h=u}function yu(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}gu.prototype.cancel=function(){if(this.i=vu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function vu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.D);return u}return N(o.i)}function o_(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],f=o.length,g=0;g<f;g++)u.push(o[g]);return u}u=[],f=0;for(g in o)u[f++]=o[g];return u}function a_(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var f=0;f<o;f++)u.push(f);return u}u=[],f=0;for(const g in o)u[f++]=g;return u}}}function Eu(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var f=a_(o),g=o_(o),R=g.length,P=0;P<R;P++)u.call(void 0,g[P],f&&f[P],o)}var Tu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function l_(o,u){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var g=o[f].indexOf("="),R=null;if(0<=g){var P=o[f].substring(0,g);R=o[f].substring(g+1)}else P=o[f];u(P,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function rr(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof rr){this.h=o.h,ki(this,o.j),this.o=o.o,this.g=o.g,Di(this,o.s),this.l=o.l;var u=o.i,f=new Is;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),Iu(this,f),this.m=o.m}else o&&(u=String(o).match(Tu))?(this.h=!1,ki(this,u[1]||"",!0),this.o=Es(u[2]||""),this.g=Es(u[3]||"",!0),Di(this,u[4]),this.l=Es(u[5]||"",!0),Iu(this,u[6]||"",!0),this.m=Es(u[7]||"")):(this.h=!1,this.i=new Is(null,this.h))}rr.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Ts(u,wu,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Ts(u,wu,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(Ts(f,f.charAt(0)=="/"?h_:u_,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",Ts(f,d_)),o.join("")};function en(o){return new rr(o)}function ki(o,u,f){o.j=f?Es(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Di(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Iu(o,u,f){u instanceof Is?(o.i=u,p_(o.i,o.h)):(f||(u=Ts(u,f_)),o.i=new Is(u,o.h))}function Pe(o,u,f){o.i.set(u,f)}function Ni(o){return Pe(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Es(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Ts(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,c_),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function c_(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var wu=/[#\/\?@]/g,u_=/[#\?:]/g,h_=/[#\?]/g,f_=/[#\?@]/g,d_=/#/g;function Is(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function An(o){o.g||(o.g=new Map,o.h=0,o.i&&l_(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}n=Is.prototype,n.add=function(o,u){An(this),this.i=null,o=Vr(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function Au(o,u){An(o),u=Vr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function bu(o,u){return An(o),u=Vr(o,u),o.g.has(u)}n.forEach=function(o,u){An(this),this.g.forEach(function(f,g){f.forEach(function(R){o.call(u,R,g,this)},this)},this)},n.na=function(){An(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let g=0;g<u.length;g++){const R=o[g];for(let P=0;P<R.length;P++)f.push(u[g])}return f},n.V=function(o){An(this);let u=[];if(typeof o=="string")bu(this,o)&&(u=u.concat(this.g.get(Vr(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)u=u.concat(o[f])}return u},n.set=function(o,u){return An(this),this.i=null,o=Vr(this,o),bu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Su(o,u,f){Au(o,u),0<f.length&&(o.i=null,o.g.set(Vr(o,u),N(f)),o.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var g=u[f];const P=encodeURIComponent(String(g)),j=this.V(g);for(g=0;g<j.length;g++){var R=P;j[g]!==""&&(R+="="+encodeURIComponent(String(j[g]))),o.push(R)}}return this.i=o.join("&")};function Vr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function p_(o,u){u&&!o.j&&(An(o),o.i=null,o.g.forEach(function(f,g){var R=g.toLowerCase();g!=R&&(Au(this,g),Su(this,R,f))},o)),o.j=u}function g_(o,u){const f=new ys;if(l.Image){const g=new Image;g.onload=b(bn,f,"TestLoadImage: loaded",!0,u,g),g.onerror=b(bn,f,"TestLoadImage: error",!1,u,g),g.onabort=b(bn,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=b(bn,f,"TestLoadImage: timeout",!1,u,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function m_(o,u){const f=new ys,g=new AbortController,R=setTimeout(()=>{g.abort(),bn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(P=>{clearTimeout(R),P.ok?bn(f,"TestPingServer: ok",!0,u):bn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(R),bn(f,"TestPingServer: error",!1,u)})}function bn(o,u,f,g,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),g(f)}catch{}}function __(){this.g=new Si}function y_(o,u,f){const g=f||"";try{Eu(o,function(R,P){let j=R;h(R)&&(j=We(R)),u.push(g+P+"="+encodeURIComponent(j))})}catch(R){throw u.push(g+"type="+encodeURIComponent("_badmap")),R}}function Oi(o){this.l=o.Ub||null,this.j=o.eb||!1}V(Oi,Pr),Oi.prototype.g=function(){return new xi(this.l,this.j)},Oi.prototype.i=(function(o){return function(){return o}})({});function xi(o,u){Z.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(xi,Z),n=xi.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,As(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ws(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,As(this)),this.g&&(this.readyState=3,As(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ru(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ru(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?ws(this):As(this),this.readyState==3&&Ru(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,ws(this))},n.Qa=function(o){this.g&&(this.response=o,ws(this))},n.ga=function(){this.g&&ws(this)};function ws(o){o.readyState=4,o.l=null,o.j=null,o.v=null,As(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function As(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(xi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Pu(o){let u="";return ge(o,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function ka(o,u,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=Pu(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):Pe(o,u,f))}function ke(o){Z.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(ke,Z);var v_=/^https?$/i,E_=["POST","PUT"];n=ke.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Aa.g(),this.v=this.o?ru(this.o):ru(Aa),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(P){Cu(this,P);return}if(o=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var R in g)f.set(R,g[R]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const P of g.keys())f.set(P,g.get(P));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(P=>P.toLowerCase()=="content-type"),R=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(E_,u,void 0))||g||R||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,j]of f)this.g.setRequestHeader(P,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Du(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){Cu(this,P)}};function Cu(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Vu(o),Mi(o)}function Vu(o){o.A||(o.A=!0,le(o,"complete"),le(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,le(this,"complete"),le(this,"abort"),Mi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Mi(this,!0)),ke.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ku(this):this.bb())},n.bb=function(){ku(this)};function ku(o){if(o.h&&typeof a<"u"&&(!o.v[1]||tn(o)!=4||o.Z()!=2)){if(o.u&&tn(o)==4)He(o.Ea,0,o);else if(le(o,"readystatechange"),tn(o)==4){o.h=!1;try{const j=o.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var g;if(g=j===0){var R=String(o.D).match(Tu)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),g=!v_.test(R?R.toLowerCase():"")}f=g}if(f)le(o,"complete"),le(o,"success");else{o.m=6;try{var P=2<tn(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",Vu(o)}}finally{Mi(o)}}}}function Mi(o,u){if(o.g){Du(o);const f=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||le(o,"ready");try{f.onreadystatechange=g}catch{}}}function Du(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function tn(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<tn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Tt(u)}};function Nu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function T_(o){const u={};o=(o.g&&2<=tn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(W(o[g]))continue;var f=I(o[g]);const R=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const P=u[R]||[];u[R]=P,P.push(f)}w(u,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function bs(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function Ou(o){this.Aa=0,this.i=[],this.j=new ys,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=bs("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=bs("baseRetryDelayMs",5e3,o),this.cb=bs("retryDelaySeedMs",1e4,o),this.Wa=bs("forwardChannelMaxRetries",2,o),this.wa=bs("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new gu(o&&o.concurrentRequestLimit),this.Da=new __,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ou.prototype,n.la=8,n.G=1,n.connect=function(o,u,f,g){ct(0),this.W=o,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=qu(this,null,this.W),Fi(this)};function Da(o){if(xu(o),o.G==3){var u=o.U++,f=en(o.I);if(Pe(f,"SID",o.K),Pe(f,"RID",u),Pe(f,"TYPE","terminate"),Ss(o,f),u=new wn(o,o.j,u),u.L=2,u.v=Ni(en(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=u.v,f=!0),f||(u.g=Hu(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Vi(u)}$u(o)}function Li(o){o.g&&(Oa(o),o.g.cancel(),o.g=null)}function xu(o){Li(o),o.u&&(l.clearTimeout(o.u),o.u=null),Ui(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Fi(o){if(!mu(o.h)&&!o.s){o.s=!0;var u=o.Ga;ae||Xn(),me||(ae(),me=!0),St.add(u,o),o.B=0}}function I_(o,u){return _u(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=_s(y(o.Ga,o,u),ju(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const R=new wn(this,this.j,o);let P=this.o;if(this.S&&(P?(P=_(P),v(P,this.S)):P=this.S),this.m!==null||this.O||(R.H=P,P=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=Lu(this,R,u),f=en(this.I),Pe(f,"RID",o),Pe(f,"CVER",22),this.D&&Pe(f,"X-HTTP-Session-Id",this.D),Ss(this,f),P&&(this.O?u="headers="+encodeURIComponent(String(Pu(P)))+"&"+u:this.m&&ka(f,this.m,P)),Va(this.h,R),this.Ua&&Pe(f,"TYPE","init"),this.P?(Pe(f,"$req",u),Pe(f,"SID","null"),R.T=!0,Sa(R,f,null)):Sa(R,f,u),this.G=2}}else this.G==3&&(o?Mu(this,o):this.i.length==0||mu(this.h)||Mu(this))};function Mu(o,u){var f;u?f=u.l:f=o.U++;const g=en(o.I);Pe(g,"SID",o.K),Pe(g,"RID",f),Pe(g,"AID",o.T),Ss(o,g),o.m&&o.o&&ka(g,o.m,o.o),f=new wn(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Lu(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Va(o.h,f),Sa(f,g,u)}function Ss(o,u){o.H&&ge(o.H,function(f,g){Pe(u,g,f)}),o.l&&Eu({},function(f,g){Pe(u,g,f)})}function Lu(o,u,f){f=Math.min(o.i.length,f);var g=o.l?y(o.l.Na,o.l,o):null;e:{var R=o.i;let P=-1;for(;;){const j=["count="+f];P==-1?0<f?(P=R[0].g,j.push("ofs="+P)):P=0:j.push("ofs="+P);let Te=!0;for(let Ke=0;Ke<f;Ke++){let _e=R[Ke].g;const Xe=R[Ke].map;if(_e-=P,0>_e)P=Math.max(0,R[Ke].g-100),Te=!1;else try{y_(Xe,j,"req"+_e+"_")}catch{g&&g(Xe)}}if(Te){g=j.join("&");break e}}}return o=o.i.splice(0,f),u.D=o,g}function Fu(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;ae||Xn(),me||(ae(),me=!0),St.add(u,o),o.v=0}}function Na(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=_s(y(o.Fa,o),ju(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Uu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=_s(y(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ct(10),Li(this),Uu(this))};function Oa(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Uu(o){o.g=new wn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=en(o.qa);Pe(u,"RID","rpc"),Pe(u,"SID",o.K),Pe(u,"AID",o.T),Pe(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Pe(u,"TO",o.ja),Pe(u,"TYPE","xmlhttp"),Ss(o,u),o.m&&o.o&&ka(u,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=Ni(en(u)),f.m=null,f.P=!0,fu(f,o)}n.Za=function(){this.C!=null&&(this.C=null,Li(this),Na(this),ct(19))};function Ui(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Bu(o,u){var f=null;if(o.g==u){Ui(o),Oa(o),o.g=null;var g=2}else if(Ca(o.h,u))f=u.D,yu(o.h,u),g=1;else return;if(o.G!=0){if(u.o)if(g==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var R=o.B;g=Ri(),le(g,new lu(g,f)),Fi(o)}else Fu(o);else if(R=u.s,R==3||R==0&&0<u.X||!(g==1&&I_(o,u)||g==2&&Na(o)))switch(f&&0<f.length&&(u=o.h,u.i=u.i.concat(f)),R){case 1:sr(o,5);break;case 4:sr(o,10);break;case 3:sr(o,6);break;default:sr(o,2)}}}function ju(o,u){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*u}function sr(o,u){if(o.j.info("Error code "+u),u==2){var f=y(o.fb,o),g=o.Xa;const R=!g;g=new rr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ki(g,"https"),Ni(g),R?g_(g.toString(),f):m_(g.toString(),f)}else ct(2);o.G=0,o.l&&o.l.sa(u),$u(o),xu(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ct(2)):(this.j.info("Failed to ping google.com"),ct(1))};function $u(o){if(o.G=0,o.ka=[],o.l){const u=vu(o.h);(u.length!=0||o.i.length!=0)&&(L(o.ka,u),L(o.ka,o.i),o.h.i.length=0,N(o.i),o.i.length=0),o.l.ra()}}function qu(o,u,f){var g=f instanceof rr?en(f):new rr(f);if(g.g!="")u&&(g.g=u+"."+g.g),Di(g,g.s);else{var R=l.location;g=R.protocol,u=u?u+"."+R.hostname:R.hostname,R=+R.port;var P=new rr(null);g&&ki(P,g),u&&(P.g=u),R&&Di(P,R),f&&(P.l=f),g=P}return f=o.D,u=o.ya,f&&u&&Pe(g,f,u),Pe(g,"VER",o.la),Ss(o,g),g}function Hu(o,u,f){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new ke(new Oi({eb:f})):new ke(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function zu(){}n=zu.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Bi(){}Bi.prototype.g=function(o,u){return new mt(o,u)};function mt(o,u){Z.call(this),this.g=new Ou(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!W(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!W(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new kr(this)}V(mt,Z),mt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},mt.prototype.close=function(){Da(this.g)},mt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=We(o),o=f);u.i.push(new i_(u.Ya++,o)),u.G==3&&Fi(u)},mt.prototype.N=function(){this.g.l=null,delete this.j,Da(this.g),delete this.g,mt.aa.N.call(this)};function Wu(o){Ia.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}V(Wu,Ia);function Ku(){wa.call(this),this.status=1}V(Ku,wa);function kr(o){this.g=o}V(kr,zu),kr.prototype.ua=function(){le(this.g,"a")},kr.prototype.ta=function(o){le(this.g,new Wu(o))},kr.prototype.sa=function(o){le(this.g,new Ku)},kr.prototype.ra=function(){le(this.g,"b")},Bi.prototype.createWebChannel=Bi.prototype.g,mt.prototype.send=mt.prototype.o,mt.prototype.open=mt.prototype.m,mt.prototype.close=mt.prototype.close,Wp=function(){return new Bi},zp=function(){return Ri()},Hp=tr,wl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Pi.NO_ERROR=0,Pi.TIMEOUT=8,Pi.HTTP_ERROR=6,to=Pi,cu.COMPLETE="complete",qp=cu,su.EventType=gs,gs.OPEN="a",gs.CLOSE="b",gs.ERROR="c",gs.MESSAGE="d",Z.prototype.listen=Z.prototype.K,Ds=su,ke.prototype.listenOnce=ke.prototype.L,ke.prototype.getLastError=ke.prototype.Ka,ke.prototype.getLastErrorCode=ke.prototype.Ba,ke.prototype.getStatus=ke.prototype.Z,ke.prototype.getResponseJson=ke.prototype.Oa,ke.prototype.getResponseText=ke.prototype.oa,ke.prototype.send=ke.prototype.ea,ke.prototype.setWithCredentials=ke.prototype.Ha,$p=ke}).apply(typeof zi<"u"?zi:typeof self<"u"?self:typeof window<"u"?window:{});const qh="@firebase/firestore",Hh="4.8.0";/**
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
 */class nt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nt.UNAUTHENTICATED=new nt(null),nt.GOOGLE_CREDENTIALS=new nt("google-credentials-uid"),nt.FIRST_PARTY=new nt("first-party-uid"),nt.MOCK_USER=new nt("mock-user");/**
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
 */let os="11.10.0";/**
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
 */const Er=new uc("@firebase/firestore");function Mr(){return Er.logLevel}function G(n,...e){if(Er.logLevel<=he.DEBUG){const t=e.map(dc);Er.debug(`Firestore (${os}): ${n}`,...t)}}function _n(n,...e){if(Er.logLevel<=he.ERROR){const t=e.map(dc);Er.error(`Firestore (${os}): ${n}`,...t)}}function Hn(n,...e){if(Er.logLevel<=he.WARN){const t=e.map(dc);Er.warn(`Firestore (${os}): ${n}`,...t)}}function dc(n){if(typeof n=="string")return n;try{/**
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
 */function ee(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Kp(n,r,t)}function Kp(n,e,t){let r=`FIRESTORE (${os}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw _n(r),new Error(r)}function Ee(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Kp(e,s,r)}function oe(n,e){return n}/**
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
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends Tn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Bn{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class Gp{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class WT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(nt.UNAUTHENTICATED)))}shutdown(){}}class KT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class GT{constructor(e){this.t=e,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ee(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new Bn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Bn,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const c=i;e.enqueueRetryable((async()=>{await c.promise,await s(this.currentUser)}))},l=c=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Bn)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ee(typeof r.accessToken=="string",31837,{l:r}),new Gp(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ee(e===null||typeof e=="string",2055,{h:e}),new nt(e)}}class QT{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=nt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class JT{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new QT(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(nt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class zh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class YT{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ct(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ee(this.o===void 0,3512);const r=i=>{i.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,G("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new zh(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Ee(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new zh(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function XT(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function Qp(){return new TextEncoder}/**
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
 */class pc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=XT(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function ue(n,e){return n<e?-1:n>e?1:0}function Al(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return ue(r,s);{const i=Qp(),a=ZT(i.encode(Wh(n,t)),i.encode(Wh(e,t)));return a!==0?a:ue(r,s)}}t+=r>65535?2:1}return ue(n.length,e.length)}function Wh(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function ZT(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return ue(n[t],e[t]);return ue(n.length,e.length)}function Xr(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
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
 */const Kh="__name__";class Bt{constructor(e,t,r){t===void 0?t=0:t>e.length&&ee(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&ee(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Bt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Bt?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Bt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return ue(e.length,t.length)}static compareSegments(e,t){const r=Bt.isNumericId(e),s=Bt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Bt.extractNumericId(e).compare(Bt.extractNumericId(t)):Al(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Un.fromString(e.substring(4,e.length-2))}}class Se extends Bt{construct(e,t,r){return new Se(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new Se(t)}static emptyPath(){return new Se([])}}const eI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qe extends Bt{construct(e,t,r){return new Qe(e,t,r)}static isValidIdentifier(e){return eI.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qe.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Kh}static keyField(){return new Qe([Kh])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new K(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new K(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new K(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new K(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Qe(t)}static emptyPath(){return new Qe([])}}/**
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
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(Se.fromString(e))}static fromName(e){return new Y(Se.fromString(e).popFirst(5))}static empty(){return new Y(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Se.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new Se(e.slice()))}}/**
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
 */function Jp(n,e,t){if(!t)throw new K(k.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function tI(n,e,t,r){if(e===!0&&r===!0)throw new K(k.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Gh(n){if(!Y.isDocumentKey(n))throw new K(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Qh(n){if(Y.isDocumentKey(n))throw new K(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Yp(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function ra(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ee(12329,{type:typeof n})}function pr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new K(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ra(n);throw new K(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Me(n,e){const t={typeString:n};return e&&(t.value=e),t}function _i(n,e){if(!Yp(n))throw new K(k.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new K(k.INVALID_ARGUMENT,t);return!0}/**
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
 */const Jh=-62135596800,Yh=1e6;class Ae{static now(){return Ae.fromMillis(Date.now())}static fromDate(e){return Ae.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Yh);return new Ae(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new K(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new K(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Jh)throw new K(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Yh}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ae._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(_i(e,Ae._jsonSchema))return new Ae(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Jh;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ae._jsonSchemaVersion="firestore/timestamp/1.0",Ae._jsonSchema={type:Me("string",Ae._jsonSchemaVersion),seconds:Me("number"),nanoseconds:Me("number")};/**
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
 */class ie{static fromTimestamp(e){return new ie(e)}static min(){return new ie(new Ae(0,0))}static max(){return new ie(new Ae(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ri=-1;function nI(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=ie.fromTimestamp(r===1e9?new Ae(t+1,0):new Ae(t,r));return new zn(s,Y.empty(),e)}function rI(n){return new zn(n.readTime,n.key,ri)}class zn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new zn(ie.min(),Y.empty(),ri)}static max(){return new zn(ie.max(),Y.empty(),ri)}}function sI(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Y.comparator(n.documentKey,e.documentKey),t!==0?t:ue(n.largestBatchId,e.largestBatchId))}/**
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
 */const iI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class oI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function as(n){if(n.code!==k.FAILED_PRECONDITION||n.message!==iI)throw n;G("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ee(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new D(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof D?t:D.resolve(t)}catch(t){return D.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):D.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):D.reject(t)}static resolve(e){return new D(((t,r)=>{t(e)}))}static reject(e){return new D(((t,r)=>{r(e)}))}static waitFor(e){return new D(((t,r)=>{let s=0,i=0,a=!1;e.forEach((l=>{++s,l.next((()=>{++i,a&&i===s&&t()}),(c=>r(c)))})),a=!0,i===s&&t()}))}static or(e){let t=D.resolve(!1);for(const r of e)t=t.next((s=>s?D.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,i)=>{r.push(t.call(this,s,i))})),this.waitFor(r)}static mapArray(e,t){return new D(((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;t(e[h]).next((d=>{a[h]=d,++l,l===i&&r(a)}),(d=>s(d)))}}))}static doWhile(e,t){return new D(((r,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):r()};i()}))}}function aI(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ls(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class sa{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}sa.ue=-1;/**
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
 */const gc=-1;function ia(n){return n==null}function wo(n){return n===0&&1/n==-1/0}function lI(n){return typeof n=="number"&&Number.isInteger(n)&&!wo(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Xp="";function cI(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Xh(e)),e=uI(n.get(t),e);return Xh(e)}function uI(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Xp:t+="";break;default:t+=i}}return t}function Xh(n){return n+Xp+""}/**
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
 */function Zh(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ar(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Zp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Ve{constructor(e,t){this.comparator=e,this.root=t||Ge.EMPTY}insert(e,t){return new Ve(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ge.BLACK,null,null))}remove(e){return new Ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ge.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Wi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Wi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Wi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Wi(this.root,e,this.comparator,!0)}}class Wi{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ge{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Ge.RED,this.left=s??Ge.EMPTY,this.right=i??Ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Ge(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ge.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ee(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ee(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ee(27949);return e+(this.isRed()?0:1)}}Ge.EMPTY=null,Ge.RED=!0,Ge.BLACK=!1;Ge.EMPTY=new class{constructor(){this.size=0}get key(){throw ee(57766)}get value(){throw ee(16141)}get color(){throw ee(16727)}get left(){throw ee(29726)}get right(){throw ee(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Ge(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class $e{constructor(e){this.comparator=e,this.data=new Ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ef(this.data.getIterator())}getIteratorFrom(e){return new ef(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof $e)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new $e(this.comparator);return t.data=e,t}}class ef{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Vt{constructor(e){this.fields=e,e.sort(Qe.comparator)}static empty(){return new Vt([])}unionWith(e){let t=new $e(Qe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Vt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Xr(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class eg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Je{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new eg("Invalid base64 string: "+i):i}})(e);return new Je(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(e);return new Je(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Je.EMPTY_BYTE_STRING=new Je("");const hI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Wn(n){if(Ee(!!n,39018),typeof n=="string"){let e=0;const t=hI.exec(n);if(Ee(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ne(n.seconds),nanos:Ne(n.nanos)}}function Ne(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Kn(n){return typeof n=="string"?Je.fromBase64String(n):Je.fromUint8Array(n)}/**
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
 */const tg="server_timestamp",ng="__type__",rg="__previous_value__",sg="__local_write_time__";function mc(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[ng])===null||t===void 0?void 0:t.stringValue)===tg}function oa(n){const e=n.mapValue.fields[rg];return mc(e)?oa(e):e}function si(n){const e=Wn(n.mapValue.fields[sg].timestampValue);return new Ae(e.seconds,e.nanos)}/**
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
 */class fI{constructor(e,t,r,s,i,a,l,c,h,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h,this.isUsingEmulator=d}}const Ao="(default)";class ii{constructor(e,t){this.projectId=e,this.database=t||Ao}static empty(){return new ii("","")}get isDefaultDatabase(){return this.database===Ao}isEqual(e){return e instanceof ii&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ig="__type__",dI="__max__",Ki={mapValue:{}},og="__vector__",bo="value";function Gn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?mc(n)?4:gI(n)?9007199254740991:pI(n)?10:11:ee(28295,{value:n})}function Jt(n,e){if(n===e)return!0;const t=Gn(n);if(t!==Gn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return si(n).isEqual(si(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Wn(s.timestampValue),l=Wn(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,i){return Kn(s.bytesValue).isEqual(Kn(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,i){return Ne(s.geoPointValue.latitude)===Ne(i.geoPointValue.latitude)&&Ne(s.geoPointValue.longitude)===Ne(i.geoPointValue.longitude)})(n,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Ne(s.integerValue)===Ne(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Ne(s.doubleValue),l=Ne(i.doubleValue);return a===l?wo(a)===wo(l):isNaN(a)&&isNaN(l)}return!1})(n,e);case 9:return Xr(n.arrayValue.values||[],e.arrayValue.values||[],Jt);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Zh(a)!==Zh(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!Jt(a[c],l[c])))return!1;return!0})(n,e);default:return ee(52216,{left:n})}}function oi(n,e){return(n.values||[]).find((t=>Jt(t,e)))!==void 0}function Zr(n,e){if(n===e)return 0;const t=Gn(n),r=Gn(e);if(t!==r)return ue(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ue(n.booleanValue,e.booleanValue);case 2:return(function(i,a){const l=Ne(i.integerValue||i.doubleValue),c=Ne(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1})(n,e);case 3:return tf(n.timestampValue,e.timestampValue);case 4:return tf(si(n),si(e));case 5:return Al(n.stringValue,e.stringValue);case 6:return(function(i,a){const l=Kn(i),c=Kn(a);return l.compareTo(c)})(n.bytesValue,e.bytesValue);case 7:return(function(i,a){const l=i.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const d=ue(l[h],c[h]);if(d!==0)return d}return ue(l.length,c.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,a){const l=ue(Ne(i.latitude),Ne(a.latitude));return l!==0?l:ue(Ne(i.longitude),Ne(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return nf(n.arrayValue,e.arrayValue);case 10:return(function(i,a){var l,c,h,d;const p=i.fields||{},y=a.fields||{},b=(l=p[bo])===null||l===void 0?void 0:l.arrayValue,V=(c=y[bo])===null||c===void 0?void 0:c.arrayValue,N=ue(((h=b==null?void 0:b.values)===null||h===void 0?void 0:h.length)||0,((d=V==null?void 0:V.values)===null||d===void 0?void 0:d.length)||0);return N!==0?N:nf(b,V)})(n.mapValue,e.mapValue);case 11:return(function(i,a){if(i===Ki.mapValue&&a===Ki.mapValue)return 0;if(i===Ki.mapValue)return 1;if(a===Ki.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=a.fields||{},d=Object.keys(h);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const y=Al(c[p],d[p]);if(y!==0)return y;const b=Zr(l[c[p]],h[d[p]]);if(b!==0)return b}return ue(c.length,d.length)})(n.mapValue,e.mapValue);default:throw ee(23264,{le:t})}}function tf(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ue(n,e);const t=Wn(n),r=Wn(e),s=ue(t.seconds,r.seconds);return s!==0?s:ue(t.nanos,r.nanos)}function nf(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Zr(t[s],r[s]);if(i)return i}return ue(t.length,r.length)}function es(n){return bl(n)}function bl(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Wn(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Kn(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return Y.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=bl(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${bl(t.fields[a])}`;return s+"}"})(n.mapValue):ee(61005,{value:n})}function no(n){switch(Gn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=oa(n);return e?16+no(e):16;case 5:return 2*n.stringValue.length;case 6:return Kn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+no(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return Ar(r.fields,((i,a)=>{s+=i.length+no(a)})),s})(n.mapValue);default:throw ee(13486,{value:n})}}function rf(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Sl(n){return!!n&&"integerValue"in n}function _c(n){return!!n&&"arrayValue"in n}function sf(n){return!!n&&"nullValue"in n}function of(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ro(n){return!!n&&"mapValue"in n}function pI(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[ig])===null||t===void 0?void 0:t.stringValue)===og}function Ws(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ar(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=Ws(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ws(n.arrayValue.values[t]);return e}return Object.assign({},n)}function gI(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===dI}/**
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
 */class wt{constructor(e){this.value=e}static empty(){return new wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ro(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ws(t)}setAll(e){let t=Qe.emptyPath(),r={},s=[];e.forEach(((a,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=Ws(a):s.push(l.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());ro(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Jt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];ro(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Ar(t,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new wt(Ws(this.value))}}function ag(n){const e=[];return Ar(n.fields,((t,r)=>{const s=new Qe([t]);if(ro(r)){const i=ag(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)})),new Vt(e)}/**
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
 */class st{constructor(e,t,r,s,i,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new st(e,0,ie.min(),ie.min(),ie.min(),wt.empty(),0)}static newFoundDocument(e,t,r,s){return new st(e,1,t,ie.min(),r,s,0)}static newNoDocument(e,t){return new st(e,2,t,ie.min(),ie.min(),wt.empty(),0)}static newUnknownDocument(e,t){return new st(e,3,t,ie.min(),ie.min(),wt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof st&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new st(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class So{constructor(e,t){this.position=e,this.inclusive=t}}function af(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=Y.comparator(Y.fromName(a.referenceValue),t.key):r=Zr(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function lf(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Jt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class ai{constructor(e,t="asc"){this.field=e,this.dir=t}}function mI(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class lg{}class xe extends lg{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new yI(e,t,r):t==="array-contains"?new TI(e,r):t==="in"?new II(e,r):t==="not-in"?new wI(e,r):t==="array-contains-any"?new AI(e,r):new xe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new vI(e,r):new EI(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Zr(t,this.value)):t!==null&&Gn(this.value)===Gn(t)&&this.matchesComparison(Zr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class xt extends lg{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new xt(e,t)}matches(e){return cg(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function cg(n){return n.op==="and"}function ug(n){return _I(n)&&cg(n)}function _I(n){for(const e of n.filters)if(e instanceof xt)return!1;return!0}function Rl(n){if(n instanceof xe)return n.field.canonicalString()+n.op.toString()+es(n.value);if(ug(n))return n.filters.map((e=>Rl(e))).join(",");{const e=n.filters.map((t=>Rl(t))).join(",");return`${n.op}(${e})`}}function hg(n,e){return n instanceof xe?(function(r,s){return s instanceof xe&&r.op===s.op&&r.field.isEqual(s.field)&&Jt(r.value,s.value)})(n,e):n instanceof xt?(function(r,s){return s instanceof xt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,l)=>i&&hg(a,s.filters[l])),!0):!1})(n,e):void ee(19439)}function fg(n){return n instanceof xe?(function(t){return`${t.field.canonicalString()} ${t.op} ${es(t.value)}`})(n):n instanceof xt?(function(t){return t.op.toString()+" {"+t.getFilters().map(fg).join(" ,")+"}"})(n):"Filter"}class yI extends xe{constructor(e,t,r){super(e,t,r),this.key=Y.fromName(r.referenceValue)}matches(e){const t=Y.comparator(e.key,this.key);return this.matchesComparison(t)}}class vI extends xe{constructor(e,t){super(e,"in",t),this.keys=dg("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class EI extends xe{constructor(e,t){super(e,"not-in",t),this.keys=dg("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function dg(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>Y.fromName(r.referenceValue)))}class TI extends xe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return _c(t)&&oi(t.arrayValue,this.value)}}class II extends xe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&oi(this.value.arrayValue,t)}}class wI extends xe{constructor(e,t){super(e,"not-in",t)}matches(e){if(oi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!oi(this.value.arrayValue,t)}}class AI extends xe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!_c(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>oi(this.value.arrayValue,r)))}}/**
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
 */class bI{constructor(e,t=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.Pe=null}}function cf(n,e=null,t=[],r=[],s=null,i=null,a=null){return new bI(n,e,t,r,s,i,a)}function yc(n){const e=oe(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>Rl(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),ia(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>es(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>es(r))).join(",")),e.Pe=t}return e.Pe}function vc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!mI(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!hg(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!lf(n.startAt,e.startAt)&&lf(n.endAt,e.endAt)}function Pl(n){return Y.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class cs{constructor(e,t=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function SI(n,e,t,r,s,i,a,l){return new cs(n,e,t,r,s,i,a,l)}function Ec(n){return new cs(n)}function uf(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function pg(n){return n.collectionGroup!==null}function Ks(n){const e=oe(n);if(e.Te===null){e.Te=[];const t=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new $e(Qe.comparator);return a.filters.forEach((c=>{c.getFlattenedFilters().forEach((h=>{h.isInequality()&&(l=l.add(h.field))}))})),l})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Te.push(new ai(i,r))})),t.has(Qe.keyField().canonicalString())||e.Te.push(new ai(Qe.keyField(),r))}return e.Te}function qt(n){const e=oe(n);return e.Ie||(e.Ie=RI(e,Ks(n))),e.Ie}function RI(n,e){if(n.limitType==="F")return cf(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new ai(s.field,i)}));const t=n.endAt?new So(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new So(n.startAt.position,n.startAt.inclusive):null;return cf(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Cl(n,e){const t=n.filters.concat([e]);return new cs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Vl(n,e,t){return new cs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function aa(n,e){return vc(qt(n),qt(e))&&n.limitType===e.limitType}function gg(n){return`${yc(qt(n))}|lt:${n.limitType}`}function Lr(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>fg(s))).join(", ")}]`),ia(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>es(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>es(s))).join(",")),`Target(${r})`})(qt(n))}; limitType=${n.limitType})`}function la(n,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Y.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,e)&&(function(r,s){for(const i of Ks(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(a,l,c){const h=af(a,l,c);return a.inclusive?h<=0:h<0})(r.startAt,Ks(r),s)||r.endAt&&!(function(a,l,c){const h=af(a,l,c);return a.inclusive?h>=0:h>0})(r.endAt,Ks(r),s))})(n,e)}function PI(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function mg(n){return(e,t)=>{let r=!1;for(const s of Ks(n)){const i=CI(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function CI(n,e,t){const r=n.field.isKeyField()?Y.comparator(e.key,t.key):(function(i,a,l){const c=a.data.field(i),h=l.data.field(i);return c!==null&&h!==null?Zr(c,h):ee(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ee(19790,{direction:n.dir})}}/**
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
 */class br{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ar(this.inner,((t,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return Zp(this.inner)}size(){return this.innerSize}}/**
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
 */const VI=new Ve(Y.comparator);function yn(){return VI}const _g=new Ve(Y.comparator);function Ns(...n){let e=_g;for(const t of n)e=e.insert(t.key,t);return e}function yg(n){let e=_g;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function ur(){return Gs()}function vg(){return Gs()}function Gs(){return new br((n=>n.toString()),((n,e)=>n.isEqual(e)))}const kI=new Ve(Y.comparator),DI=new $e(Y.comparator);function fe(...n){let e=DI;for(const t of n)e=e.add(t);return e}const NI=new $e(ue);function OI(){return NI}/**
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
 */function Tc(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wo(e)?"-0":e}}function Eg(n){return{integerValue:""+n}}function xI(n,e){return lI(e)?Eg(e):Tc(n,e)}/**
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
 */class ca{constructor(){this._=void 0}}function MI(n,e,t){return n instanceof Ro?(function(s,i){const a={fields:{[ng]:{stringValue:tg},[sg]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&mc(i)&&(i=oa(i)),i&&(a.fields[rg]=i),{mapValue:a}})(t,e):n instanceof li?Ig(n,e):n instanceof ci?wg(n,e):(function(s,i){const a=Tg(s,i),l=hf(a)+hf(s.Ee);return Sl(a)&&Sl(s.Ee)?Eg(l):Tc(s.serializer,l)})(n,e)}function LI(n,e,t){return n instanceof li?Ig(n,e):n instanceof ci?wg(n,e):t}function Tg(n,e){return n instanceof Po?(function(r){return Sl(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class Ro extends ca{}class li extends ca{constructor(e){super(),this.elements=e}}function Ig(n,e){const t=Ag(e);for(const r of n.elements)t.some((s=>Jt(s,r)))||t.push(r);return{arrayValue:{values:t}}}class ci extends ca{constructor(e){super(),this.elements=e}}function wg(n,e){let t=Ag(e);for(const r of n.elements)t=t.filter((s=>!Jt(s,r)));return{arrayValue:{values:t}}}class Po extends ca{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function hf(n){return Ne(n.integerValue||n.doubleValue)}function Ag(n){return _c(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function FI(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof li&&s instanceof li||r instanceof ci&&s instanceof ci?Xr(r.elements,s.elements,Jt):r instanceof Po&&s instanceof Po?Jt(r.Ee,s.Ee):r instanceof Ro&&s instanceof Ro})(n.transform,e.transform)}class UI{constructor(e,t){this.version=e,this.transformResults=t}}class fn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new fn}static exists(e){return new fn(void 0,e)}static updateTime(e){return new fn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function so(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ua{}function bg(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Rg(n.key,fn.none()):new yi(n.key,n.data,fn.none());{const t=n.data,r=wt.empty();let s=new $e(Qe.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Sr(n.key,r,new Vt(s.toArray()),fn.none())}}function BI(n,e,t){n instanceof yi?(function(s,i,a){const l=s.value.clone(),c=df(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,e,t):n instanceof Sr?(function(s,i,a){if(!so(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=df(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(Sg(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(n,e,t):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function Qs(n,e,t,r){return n instanceof yi?(function(i,a,l,c){if(!so(i.precondition,a))return l;const h=i.value.clone(),d=pf(i.fieldTransforms,c,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null})(n,e,t,r):n instanceof Sr?(function(i,a,l,c){if(!so(i.precondition,a))return l;const h=pf(i.fieldTransforms,c,a),d=a.data;return d.setAll(Sg(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(n,e,t,r):(function(i,a,l){return so(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l})(n,e,t)}function jI(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Tg(r.transform,s||null);i!=null&&(t===null&&(t=wt.empty()),t.set(r.field,i))}return t||null}function ff(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Xr(r,s,((i,a)=>FI(i,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class yi extends ua{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Sr extends ua{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Sg(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function df(n,e,t){const r=new Map;Ee(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,LI(a,l,t[s]))}return r}function pf(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,MI(i,a,e))}return r}class Rg extends ua{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $I extends ua{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class qI{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&BI(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Qs(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Qs(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=vg();return this.mutations.forEach((s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const c=bg(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(ie.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),fe())}isEqual(e){return this.batchId===e.batchId&&Xr(this.mutations,e.mutations,((t,r)=>ff(t,r)))&&Xr(this.baseMutations,e.baseMutations,((t,r)=>ff(t,r)))}}class Ic{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Ee(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return kI})();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Ic(e,t,r,s)}}/**
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
 */class HI{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class zI{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Oe,pe;function WI(n){switch(n){case k.OK:return ee(64938);case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0;default:return ee(15467,{code:n})}}function Pg(n){if(n===void 0)return _n("GRPC error has no .code"),k.UNKNOWN;switch(n){case Oe.OK:return k.OK;case Oe.CANCELLED:return k.CANCELLED;case Oe.UNKNOWN:return k.UNKNOWN;case Oe.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case Oe.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case Oe.INTERNAL:return k.INTERNAL;case Oe.UNAVAILABLE:return k.UNAVAILABLE;case Oe.UNAUTHENTICATED:return k.UNAUTHENTICATED;case Oe.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case Oe.NOT_FOUND:return k.NOT_FOUND;case Oe.ALREADY_EXISTS:return k.ALREADY_EXISTS;case Oe.PERMISSION_DENIED:return k.PERMISSION_DENIED;case Oe.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case Oe.ABORTED:return k.ABORTED;case Oe.OUT_OF_RANGE:return k.OUT_OF_RANGE;case Oe.UNIMPLEMENTED:return k.UNIMPLEMENTED;case Oe.DATA_LOSS:return k.DATA_LOSS;default:return ee(39323,{code:n})}}(pe=Oe||(Oe={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const KI=new Un([4294967295,4294967295],0);function gf(n){const e=Qp().encode(n),t=new jp;return t.update(e),new Uint8Array(t.digest())}function mf(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Un([t,r],0),new Un([s,i],0)]}class wc{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Os(`Invalid padding: ${t}`);if(r<0)throw new Os(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Os(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Os(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Un.fromNumber(this.fe)}pe(e,t,r){let s=e.add(t.multiply(Un.fromNumber(r)));return s.compare(KI)===1&&(s=new Un([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=gf(e),[r,s]=mf(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);if(!this.ye(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new wc(i,s,t);return r.forEach((l=>a.insert(l))),a}insert(e){if(this.fe===0)return;const t=gf(e),[r,s]=mf(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);this.we(a)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Os extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ha{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,vi.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ha(ie.min(),s,new Ve(ue),yn(),fe())}}class vi{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new vi(r,t,fe(),fe(),fe())}}/**
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
 */class io{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=s}}class Cg{constructor(e,t){this.targetId=e,this.De=t}}class Vg{constructor(e,t,r=Je.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class _f{constructor(){this.ve=0,this.Ce=yf(),this.Fe=Je.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=fe(),t=fe(),r=fe();return this.Ce.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:ee(38017,{changeType:i})}})),new vi(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=yf()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Ee(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class GI{constructor(e){this.We=e,this.Ge=new Map,this.ze=yn(),this.je=Gi(),this.Je=Gi(),this.He=new Ve(ue)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:ee(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((r,s)=>{this.nt(s)&&t(s)}))}it(e){const t=e.targetId,r=e.De.count,s=this.st(t);if(s){const i=s.target;if(Pl(i))if(r===0){const a=new Y(i.path);this.Xe(t,a,st.newNoDocument(a,ie.min()))}else Ee(r===1,20013,{expectedCount:r});else{const a=this.ot(t);if(a!==r){const l=this._t(e),c=l?this.ut(l,e,a):1;if(c!==0){this.rt(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,h)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,l;try{a=Kn(r).toUint8Array()}catch(c){if(c instanceof eg)return Hn("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new wc(a,s,i)}catch(c){return Hn(c instanceof Os?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.fe===0?null:l}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let s=0;return r.forEach((i=>{const a=this.We.lt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Xe(t,i,null),s++)})),s}Pt(e){const t=new Map;this.Ge.forEach(((i,a)=>{const l=this.st(a);if(l){if(i.current&&Pl(l.target)){const c=new Y(l.target.path);this.Tt(c).has(a)||this.It(a,c)||this.Xe(a,c,st.newNoDocument(c,e))}i.Ne&&(t.set(a,i.Le()),i.ke())}}));let r=fe();this.Je.forEach(((i,a)=>{let l=!0;a.forEachWhile((c=>{const h=this.st(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(i))})),this.ze.forEach(((i,a)=>a.setReadTime(e)));const s=new ha(e,t,this.He,this.ze,r);return this.ze=yn(),this.je=Gi(),this.Je=Gi(),this.He=new Ve(ue),s}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,t)?s.qe(t,1):s.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new _f,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new $e(ue),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new $e(ue),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||G("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new _f),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Gi(){return new Ve(Y.comparator)}function yf(){return new Ve(Y.comparator)}const QI={asc:"ASCENDING",desc:"DESCENDING"},JI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},YI={and:"AND",or:"OR"};class XI{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function kl(n,e){return n.useProto3Json||ia(e)?e:{value:e}}function Co(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function kg(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function ZI(n,e){return Co(n,e.toTimestamp())}function Ht(n){return Ee(!!n,49232),ie.fromTimestamp((function(t){const r=Wn(t);return new Ae(r.seconds,r.nanos)})(n))}function Ac(n,e){return Dl(n,e).canonicalString()}function Dl(n,e){const t=(function(s){return new Se(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Dg(n){const e=Se.fromString(n);return Ee(Lg(e),10190,{key:e.toString()}),e}function Nl(n,e){return Ac(n.databaseId,e.path)}function Za(n,e){const t=Dg(e);if(t.get(1)!==n.databaseId.projectId)throw new K(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new K(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Y(Og(t))}function Ng(n,e){return Ac(n.databaseId,e)}function ew(n){const e=Dg(n);return e.length===4?Se.emptyPath():Og(e)}function Ol(n){return new Se(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Og(n){return Ee(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function vf(n,e,t){return{name:Nl(n,e),fields:t.value.mapValue.fields}}function tw(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ee(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(h,d){return h.useProto3Json?(Ee(d===void 0||typeof d=="string",58123),Je.fromBase64String(d||"")):(Ee(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Je.fromUint8Array(d||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&(function(h){const d=h.code===void 0?k.UNKNOWN:Pg(h.code);return new K(d,h.message||"")})(a);t=new Vg(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Za(n,r.document.name),i=Ht(r.document.updateTime),a=r.document.createTime?Ht(r.document.createTime):ie.min(),l=new wt({mapValue:{fields:r.document.fields}}),c=st.newFoundDocument(s,i,a,l),h=r.targetIds||[],d=r.removedTargetIds||[];t=new io(h,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Za(n,r.document),i=r.readTime?Ht(r.readTime):ie.min(),a=st.newNoDocument(s,i),l=r.removedTargetIds||[];t=new io([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Za(n,r.document),i=r.removedTargetIds||[];t=new io([],i,s,null)}else{if(!("filter"in e))return ee(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new zI(s,i),l=r.targetId;t=new Cg(l,a)}}return t}function nw(n,e){let t;if(e instanceof yi)t={update:vf(n,e.key,e.value)};else if(e instanceof Rg)t={delete:Nl(n,e.key)};else if(e instanceof Sr)t={update:vf(n,e.key,e.data),updateMask:hw(e.fieldMask)};else{if(!(e instanceof $I))return ee(16599,{Rt:e.type});t={verify:Nl(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(i,a){const l=a.transform;if(l instanceof Ro)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof li)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ci)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Po)return{fieldPath:a.field.canonicalString(),increment:l.Ee};throw ee(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:ZI(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ee(27497)})(n,e.precondition)),t}function rw(n,e){return n&&n.length>0?(Ee(e!==void 0,14353),n.map((t=>(function(s,i){let a=s.updateTime?Ht(s.updateTime):Ht(i);return a.isEqual(ie.min())&&(a=Ht(i)),new UI(a,s.transformResults||[])})(t,e)))):[]}function sw(n,e){return{documents:[Ng(n,e.path)]}}function iw(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Ng(n,s);const i=(function(h){if(h.length!==0)return Mg(xt.create(h,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const a=(function(h){if(h.length!==0)return h.map((d=>(function(y){return{field:Fr(y.field),direction:lw(y.dir)}})(d)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=kl(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{Vt:t,parent:s}}function ow(n){let e=ew(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Ee(r===1,65062);const d=t.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];t.where&&(i=(function(p){const y=xg(p);return y instanceof xt&&ug(y)?y.getFilters():[y]})(t.where));let a=[];t.orderBy&&(a=(function(p){return p.map((y=>(function(V){return new ai(Ur(V.field),(function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(V.direction))})(y)))})(t.orderBy));let l=null;t.limit&&(l=(function(p){let y;return y=typeof p=="object"?p.value:p,ia(y)?null:y})(t.limit));let c=null;t.startAt&&(c=(function(p){const y=!!p.before,b=p.values||[];return new So(b,y)})(t.startAt));let h=null;return t.endAt&&(h=(function(p){const y=!p.before,b=p.values||[];return new So(b,y)})(t.endAt)),SI(e,s,a,i,l,"F",c,h)}function aw(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function xg(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Ur(t.unaryFilter.field);return xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ur(t.unaryFilter.field);return xe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ur(t.unaryFilter.field);return xe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Ur(t.unaryFilter.field);return xe.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ee(61313);default:return ee(60726)}})(n):n.fieldFilter!==void 0?(function(t){return xe.create(Ur(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ee(58110);default:return ee(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return xt.create(t.compositeFilter.filters.map((r=>xg(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ee(1026)}})(t.compositeFilter.op))})(n):ee(30097,{filter:n})}function lw(n){return QI[n]}function cw(n){return JI[n]}function uw(n){return YI[n]}function Fr(n){return{fieldPath:n.canonicalString()}}function Ur(n){return Qe.fromServerFormat(n.fieldPath)}function Mg(n){return n instanceof xe?(function(t){if(t.op==="=="){if(of(t.value))return{unaryFilter:{field:Fr(t.field),op:"IS_NAN"}};if(sf(t.value))return{unaryFilter:{field:Fr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(of(t.value))return{unaryFilter:{field:Fr(t.field),op:"IS_NOT_NAN"}};if(sf(t.value))return{unaryFilter:{field:Fr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fr(t.field),op:cw(t.op),value:t.value}}})(n):n instanceof xt?(function(t){const r=t.getFilters().map((s=>Mg(s)));return r.length===1?r[0]:{compositeFilter:{op:uw(t.op),filters:r}}})(n):ee(54877,{filter:n})}function hw(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Lg(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class On{constructor(e,t,r,s,i=ie.min(),a=ie.min(),l=Je.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new On(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new On(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new On(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new On(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class fw{constructor(e){this.gt=e}}function dw(n){const e=ow({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Vl(e,e.limit,"L"):e}/**
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
 */class pw{constructor(){this.Dn=new gw}addToCollectionParentIndex(e,t){return this.Dn.add(t),D.resolve()}getCollectionParents(e,t){return D.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return D.resolve()}deleteFieldIndex(e,t){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,t){return D.resolve()}getDocumentsMatchingTarget(e,t){return D.resolve(null)}getIndexType(e,t){return D.resolve(0)}getFieldIndexes(e,t){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,t){return D.resolve(zn.min())}getMinOffsetFromCollectionGroup(e,t){return D.resolve(zn.min())}updateCollectionGroup(e,t,r){return D.resolve()}updateIndexEntries(e,t){return D.resolve()}}class gw{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new $e(Se.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new $e(Se.comparator)).toArray()}}/**
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
 */const Ef={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Fg=41943040;class gt{static withCacheSize(e){return new gt(e,gt.DEFAULT_COLLECTION_PERCENTILE,gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */gt.DEFAULT_COLLECTION_PERCENTILE=10,gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,gt.DEFAULT=new gt(Fg,gt.DEFAULT_COLLECTION_PERCENTILE,gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),gt.DISABLED=new gt(-1,0,0);/**
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
 */class ts{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new ts(0)}static ur(){return new ts(-1)}}/**
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
 */const Tf="LruGarbageCollector",mw=1048576;function If([n,e],[t,r]){const s=ue(n,t);return s===0?ue(e,r):s}class _w{constructor(e){this.Tr=e,this.buffer=new $e(If),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();If(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class yw{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){G(Tf,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ls(t)?G(Tf,"Ignoring IndexedDB error during garbage collection: ",t):await as(t)}await this.Rr(3e5)}))}}class vw{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return D.resolve(sa.ue);const r=new _w(t);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(G("LruGarbageCollector","Garbage collection skipped; disabled"),D.resolve(Ef)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(G("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ef):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,s,i,a,l,c,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(G("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,l=Date.now(),this.removeTargets(e,r,t)))).next((p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(h=Date.now(),Mr()<=he.DEBUG&&G("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(h-c)+`ms
Total Duration: ${h-d}ms`),D.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function Ew(n,e){return new vw(n,e)}/**
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
 */class Tw{constructor(){this.changes=new br((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,st.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?D.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Iw{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class ww{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&Qs(r.mutation,s,Vt.empty(),Ae.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,fe()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=fe()){const s=ur();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((i=>{let a=Ns();return i.forEach(((l,c)=>{a=a.insert(l,c.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const r=ur();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,fe())))}populateOverlays(e,t,r){const s=[];return r.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((a,l)=>{t.set(a,l)}))}))}computeViews(e,t,r,s){let i=yn();const a=Gs(),l=(function(){return Gs()})();return t.forEach(((c,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof Sr)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),Qs(d.mutation,h,d.mutation.getFieldMask(),Ae.now())):a.set(h.key,Vt.empty())})),this.recalculateAndSaveOverlays(e,i).next((c=>(c.forEach(((h,d)=>a.set(h,d))),t.forEach(((h,d)=>{var p;return l.set(h,new Iw(d,(p=a.get(h))!==null&&p!==void 0?p:null))})),l)))}recalculateAndSaveOverlays(e,t){const r=Gs();let s=new Ve(((a,l)=>a-l)),i=fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const l of a)l.keys().forEach((c=>{const h=t.get(c);if(h===null)return;let d=r.get(c)||Vt.empty();d=l.applyToLocalView(h,d),r.set(c,d);const p=(s.get(l.batchId)||fe()).add(c);s=s.insert(l.batchId,p)}))})).next((()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,d=c.value,p=vg();d.forEach((y=>{if(!i.has(y)){const b=bg(t.get(y),r.get(y));b!==null&&p.set(y,b),i=i.add(y)}})),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return D.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return(function(a){return Y.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):pg(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):D.resolve(ur());let l=ri,c=i;return a.next((h=>D.forEach(h,((d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?D.resolve():this.remoteDocumentCache.getEntry(e,d).next((y=>{c=c.insert(d,y)}))))).next((()=>this.populateOverlays(e,h,i))).next((()=>this.computeViews(e,c,h,fe()))).next((d=>({batchId:l,changes:yg(d)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Y(t)).next((r=>{let s=Ns();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Ns();return this.indexManager.getCollectionParents(e,i).next((l=>D.forEach(l,(c=>{const h=(function(p,y){return new cs(y,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next((d=>{d.forEach(((p,y)=>{a=a.insert(p,y)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s)))).next((a=>{i.forEach(((c,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,st.newInvalidDocument(d)))}));let l=Ns();return a.forEach(((c,h)=>{const d=i.get(c);d!==void 0&&Qs(d.mutation,h,Vt.empty(),Ae.now()),la(t,h)&&(l=l.insert(c,h))})),l}))}}/**
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
 */class Aw{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return D.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:Ht(s.createTime)}})(t)),D.resolve()}getNamedQuery(e,t){return D.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(s){return{name:s.name,query:dw(s.bundledQuery),readTime:Ht(s.readTime)}})(t)),D.resolve()}}/**
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
 */class bw{constructor(){this.overlays=new Ve(Y.comparator),this.kr=new Map}getOverlay(e,t){return D.resolve(this.overlays.get(t))}getOverlays(e,t){const r=ur();return D.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,i)=>{this.wt(e,t,i)})),D.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(r)),D.resolve()}getOverlaysForCollection(e,t,r){const s=ur(),i=t.length+1,a=new Y(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return D.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Ve(((h,d)=>h-d));const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=ur(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=ur(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((h,d)=>l.set(h,d))),!(l.size()>=s)););return D.resolve(l)}wt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new HI(t,r));let i=this.kr.get(t);i===void 0&&(i=fe(),this.kr.set(t,i)),this.kr.set(t,i.add(r.key))}}/**
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
 */class Sw{constructor(){this.sessionToken=Je.EMPTY_BYTE_STRING}getSessionToken(e){return D.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,D.resolve()}}/**
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
 */class bc{constructor(){this.qr=new $e(qe.Qr),this.$r=new $e(qe.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new qe(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new qe(e,t))}Gr(e,t){e.forEach((r=>this.removeReference(r,t)))}zr(e){const t=new Y(new Se([])),r=new qe(t,e),s=new qe(t,e+1),i=[];return this.$r.forEachInRange([r,s],(a=>{this.Wr(a),i.push(a.key)})),i}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new Y(new Se([])),r=new qe(t,e),s=new qe(t,e+1);let i=fe();return this.$r.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(e){const t=new qe(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class qe{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return Y.comparator(e.key,t.key)||ue(e.Hr,t.Hr)}static Ur(e,t){return ue(e.Hr,t.Hr)||Y.comparator(e.key,t.key)}}/**
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
 */class Rw{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new $e(qe.Qr)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new qI(i,t,r,s);this.mutationQueue.push(a);for(const l of s)this.Yr=this.Yr.add(new qe(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return D.resolve(a)}lookupMutationBatch(e,t){return D.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return D.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?gc:this.er-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new qe(t,0),s=new qe(t,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],(a=>{const l=this.Zr(a.Hr);i.push(l)})),D.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new $e(ue);return t.forEach((s=>{const i=new qe(s,0),a=new qe(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,a],(l=>{r=r.add(l.Hr)}))})),D.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;Y.isDocumentKey(i)||(i=i.child(""));const a=new qe(new Y(i),0);let l=new $e(ue);return this.Yr.forEachWhile((c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.Hr)),!0)}),a),D.resolve(this.ei(l))}ei(e){const t=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){Ee(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return D.forEach(t.mutations,(s=>{const i=new qe(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,t){const r=new qe(t,0),s=this.Yr.firstAfterOrEqual(r);return D.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Pw{constructor(e){this.ni=e,this.docs=(function(){return new Ve(Y.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return D.resolve(r?r.document.mutableCopy():st.newInvalidDocument(t))}getEntries(e,t){let r=yn();return t.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():st.newInvalidDocument(s))})),D.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=yn();const a=t.path,l=new Y(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:d}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||sI(rI(d),r)<=0||(s.has(d.key)||la(t,d))&&(i=i.insert(d.key,d.mutableCopy()))}return D.resolve(i)}getAllFromCollectionGroup(e,t,r,s){ee(9500)}ri(e,t){return D.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new Cw(this)}getSize(e){return D.resolve(this.size)}}class Cw extends Tw{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),D.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class Vw{constructor(e){this.persistence=e,this.ii=new br((t=>yc(t)),vc),this.lastRemoteSnapshotVersion=ie.min(),this.highestTargetId=0,this.si=0,this.oi=new bc,this.targetCount=0,this._i=ts.ar()}forEachTarget(e,t){return this.ii.forEach(((r,s)=>t(s))),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),D.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new ts(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,D.resolve()}updateTargetData(e,t){return this.hr(t),D.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ii.forEach(((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.ii.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)})),D.waitFor(i).next((()=>s))}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return D.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),D.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((a=>{i.push(s.markPotentiallyOrphaned(e,a))})),D.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),D.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return D.resolve(r)}containsKey(e,t){return D.resolve(this.oi.containsKey(t))}}/**
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
 */class Ug{constructor(e,t){this.ai={},this.overlays={},this.ui=new sa(0),this.ci=!1,this.ci=!0,this.li=new Sw,this.referenceDelegate=e(this),this.hi=new Vw(this),this.indexManager=new pw,this.remoteDocumentCache=(function(s){return new Pw(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new fw(t),this.Ti=new Aw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new bw,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new Rw(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){G("MemoryPersistence","Starting transaction:",e);const s=new kw(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,t){return D.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,t))))}}class kw extends oI{constructor(e){super(),this.currentSequenceNumber=e}}class Sc{constructor(e){this.persistence=e,this.Ai=new bc,this.Ri=null}static Vi(e){return new Sc(e)}get mi(){if(this.Ri)return this.Ri;throw ee(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),D.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),D.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.mi.add(i.toString())))})).next((()=>r.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.mi,(r=>{const s=Y.fromPath(r);return this.fi(e,s).next((i=>{i||t.removeEntry(s,ie.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return D.or([()=>D.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Vo{constructor(e,t){this.persistence=e,this.gi=new br((r=>cI(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=Ew(this,t)}static Vi(e,t){return new Vo(e,t)}Ii(){}di(e){return D.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}gr(e,t){return D.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((i=>i?D.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,(a=>this.Sr(e,a,t).next((l=>{l||(r++,i.removeEntry(a,ie.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),D.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),D.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),D.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),D.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=no(e.data.value)),t}Sr(e,t,r){return D.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.gi.get(t);return D.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Rc{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=s}static Es(e,t){let r=fe(),s=fe();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Rc(e,t.fromCache,r,s)}}/**
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
 */class Dw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Nw{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return PE()?8:aI(ot())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ps(e,t).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ys(e,t,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new Dw;return this.ws(e,t,a).next((l=>{if(i.result=l,this.Rs)return this.Ss(e,t,a,l.size)}))})).next((()=>i.result))}Ss(e,t,r,s){return r.documentReadCount<this.Vs?(Mr()<=he.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",Lr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),D.resolve()):(Mr()<=he.DEBUG&&G("QueryEngine","Query:",Lr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(Mr()<=he.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",Lr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,qt(t))):D.resolve())}ps(e,t){if(uf(t))return D.resolve(null);let r=qt(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=Vl(t,null,"F"),r=qt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const a=fe(...i);return this.gs.getDocuments(e,a).next((l=>this.indexManager.getMinOffset(e,r).next((c=>{const h=this.bs(t,l);return this.Ds(t,h,a,c.readTime)?this.ps(e,Vl(t,null,"F")):this.vs(e,h,t,c)}))))})))))}ys(e,t,r,s){return uf(t)||s.isEqual(ie.min())?D.resolve(null):this.gs.getDocuments(e,r).next((i=>{const a=this.bs(t,i);return this.Ds(t,a,r,s)?D.resolve(null):(Mr()<=he.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Lr(t)),this.vs(e,a,t,nI(s,ri)).next((l=>l)))}))}bs(e,t){let r=new $e(mg(e));return t.forEach(((s,i)=>{la(e,i)&&(r=r.add(i))})),r}Ds(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,t,r){return Mr()<=he.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",Lr(t)),this.gs.getDocumentsMatchingQuery(e,t,zn.min(),r)}vs(e,t,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((i=>(t.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
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
 */const Pc="LocalStore",Ow=3e8;class xw{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.Fs=new Ve(ue),this.Ms=new br((i=>yc(i)),vc),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ww(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function Mw(n,e,t,r){return new xw(n,e,t,r)}async function Bg(n,e){const t=oe(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,t.Ns(e),t.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],l=[];let c=fe();for(const h of s){a.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}for(const h of i){l.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}return t.localDocuments.getDocuments(r,c).next((h=>({Bs:h,removedBatchIds:a,addedBatchIds:l})))}))}))}function Lw(n,e){const t=oe(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=t.Os.newChangeBuffer({trackRemovals:!0});return(function(l,c,h,d){const p=h.batch,y=p.keys();let b=D.resolve();return y.forEach((V=>{b=b.next((()=>d.getEntry(c,V))).next((N=>{const L=h.docVersions.get(V);Ee(L!==null,48541),N.version.compareTo(L)<0&&(p.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),d.addEntry(N)))}))})),b.next((()=>l.mutationQueue.removeMutationBatch(c,p)))})(t,r,e,i).next((()=>i.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let c=fe();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function jg(n){const e=oe(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function Fw(n,e){const t=oe(n),r=e.snapshotVersion;let s=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=t.Os.newChangeBuffer({trackRemovals:!0});s=t.Fs;const l=[];e.targetChanges.forEach(((d,p)=>{const y=s.get(p);if(!y)return;l.push(t.hi.removeMatchingKeys(i,d.removedDocuments,p).next((()=>t.hi.addMatchingKeys(i,d.addedDocuments,p))));let b=y.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?b=b.withResumeToken(Je.EMPTY_BYTE_STRING,ie.min()).withLastLimboFreeSnapshotVersion(ie.min()):d.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(d.resumeToken,r)),s=s.insert(p,b),(function(N,L,z){return N.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=Ow?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0})(y,b,d)&&l.push(t.hi.updateTargetData(i,b))}));let c=yn(),h=fe();if(e.documentUpdates.forEach((d=>{e.resolvedLimboDocuments.has(d)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,d))})),l.push(Uw(i,a,e.documentUpdates).next((d=>{c=d.Ls,h=d.ks}))),!r.isEqual(ie.min())){const d=t.hi.getLastRemoteSnapshotVersion(i).next((p=>t.hi.setTargetsMetadata(i,i.currentSequenceNumber,r)));l.push(d)}return D.waitFor(l).next((()=>a.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,c,h))).next((()=>c))})).then((i=>(t.Fs=s,i)))}function Uw(n,e,t){let r=fe(),s=fe();return t.forEach((i=>r=r.add(i))),e.getEntries(n,r).next((i=>{let a=yn();return t.forEach(((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(ie.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):G(Pc,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)})),{Ls:a,ks:s}}))}function Bw(n,e){const t=oe(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=gc),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function jw(n,e){const t=oe(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.hi.getTargetData(r,e).next((i=>i?(s=i,D.resolve(s)):t.hi.allocateTargetId(r).next((a=>(s=new On(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r}))}async function xl(n,e,t){const r=oe(n),s=r.Fs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!ls(a))throw a;G(Pc,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function wf(n,e,t){const r=oe(n);let s=ie.min(),i=fe();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(c,h,d){const p=oe(c),y=p.Ms.get(d);return y!==void 0?D.resolve(p.Fs.get(y)):p.hi.getTargetData(h,d)})(r,a,qt(e)).next((l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,l.targetId).next((c=>{i=c}))})).next((()=>r.Cs.getDocumentsMatchingQuery(a,e,t?s:ie.min(),t?i:fe()))).next((l=>($w(r,PI(e),l),{documents:l,qs:i})))))}function $w(n,e,t){let r=n.xs.get(e)||ie.min();t.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),n.xs.set(e,r)}class Af{constructor(){this.activeTargetIds=OI()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class qw{constructor(){this.Fo=new Af,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Af,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Hw{xo(e){}shutdown(){}}/**
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
 */const bf="ConnectivityMonitor";class Sf{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){G(bf,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){G(bf,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Qi=null;function Ml(){return Qi===null?Qi=(function(){return 268435456+Math.round(2147483648*Math.random())})():Qi++,"0x"+Qi.toString(16)}/**
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
 */const el="RestConnection",zw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Ww{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===Ao?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const a=Ml(),l=this.Go(e,t.toUriEncodedString());G(el,`Sending RPC '${e}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(c,s,i);const{host:h}=new URL(l),d=ss(h);return this.jo(e,l,c,r,d).then((p=>(G(el,`Received RPC '${e}' ${a}: `,p),p)),(p=>{throw Hn(el,`RPC '${e}' ${a} failed with error: `,p,"url: ",l,"request:",r),p}))}Jo(e,t,r,s,i,a){return this.Wo(e,t,r,s,i)}zo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+os})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Go(e,t){const r=zw[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
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
 */class Kw{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const et="WebChannelConnection";class Gw extends Ww{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,s,i){const a=Ml();return new Promise(((l,c)=>{const h=new $p;h.setWithCredentials(!0),h.listenOnce(qp.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case to.NO_ERROR:const p=h.getResponseJson();G(et,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),l(p);break;case to.TIMEOUT:G(et,`RPC '${e}' ${a} timed out`),c(new K(k.DEADLINE_EXCEEDED,"Request time out"));break;case to.HTTP_ERROR:const y=h.getStatus();if(G(et,`RPC '${e}' ${a} failed with status:`,y,"response text:",h.getResponseText()),y>0){let b=h.getResponseJson();Array.isArray(b)&&(b=b[0]);const V=b==null?void 0:b.error;if(V&&V.status&&V.message){const N=(function(z){const W=z.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(W)>=0?W:k.UNKNOWN})(V.status);c(new K(N,V.message))}else c(new K(k.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new K(k.UNAVAILABLE,"Connection failed."));break;default:ee(9055,{c_:e,streamId:a,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{G(et,`RPC '${e}' ${a} completed.`)}}));const d=JSON.stringify(s);G(et,`RPC '${e}' ${a} sending request:`,s),h.send(t,"POST",d,r,15)}))}P_(e,t,r){const s=Ml(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Wp(),l=zp(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.zo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const d=i.join("");G(et,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=a.createWebChannel(d,c);this.T_(p);let y=!1,b=!1;const V=new Kw({Ho:L=>{b?G(et,`Not sending because RPC '${e}' stream ${s} is closed:`,L):(y||(G(et,`Opening RPC '${e}' stream ${s} transport.`),p.open(),y=!0),G(et,`RPC '${e}' stream ${s} sending:`,L),p.send(L))},Yo:()=>p.close()}),N=(L,z,W)=>{L.listen(z,(Q=>{try{W(Q)}catch(q){setTimeout((()=>{throw q}),0)}}))};return N(p,Ds.EventType.OPEN,(()=>{b||(G(et,`RPC '${e}' stream ${s} transport opened.`),V.s_())})),N(p,Ds.EventType.CLOSE,(()=>{b||(b=!0,G(et,`RPC '${e}' stream ${s} transport closed`),V.__(),this.I_(p))})),N(p,Ds.EventType.ERROR,(L=>{b||(b=!0,Hn(et,`RPC '${e}' stream ${s} transport errored. Name:`,L.name,"Message:",L.message),V.__(new K(k.UNAVAILABLE,"The operation could not be completed")))})),N(p,Ds.EventType.MESSAGE,(L=>{var z;if(!b){const W=L.data[0];Ee(!!W,16349);const Q=W,q=(Q==null?void 0:Q.error)||((z=Q[0])===null||z===void 0?void 0:z.error);if(q){G(et,`RPC '${e}' stream ${s} received error:`,q);const re=q.status;let ge=(function(m){const v=Oe[m];if(v!==void 0)return Pg(v)})(re),w=q.message;ge===void 0&&(ge=k.INTERNAL,w="Unknown error status: "+re+" with message "+q.message),b=!0,V.__(new K(ge,w)),p.close()}else G(et,`RPC '${e}' stream ${s} received:`,W),V.a_(W)}})),N(l,Hp.STAT_EVENT,(L=>{L.stat===wl.PROXY?G(et,`RPC '${e}' stream ${s} detected buffering proxy`):L.stat===wl.NOPROXY&&G(et,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{V.o_()}),0),V}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function tl(){return typeof document<"u"?document:null}/**
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
 */function fa(n){return new XI(n,!0)}/**
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
 */class $g{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-r);s>0&&G("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const Rf="PersistentStream";class qg{constructor(e,t,r,s,i,a,l,c){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new $g(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===k.RESOURCE_EXHAUSTED?(_n(t.toString()),_n("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===t&&this.W_(r,s)}),(r=>{e((()=>{const s=new K(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return G(Rf,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(G(Rf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Qw extends qg{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=tw(this.serializer,e),r=(function(i){if(!("targetChange"in i))return ie.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?ie.min():a.readTime?Ht(a.readTime):ie.min()})(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=Ol(this.serializer),t.addTarget=(function(i,a){let l;const c=a.target;if(l=Pl(c)?{documents:sw(i,c)}:{query:iw(i,c).Vt},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=kg(i,a.resumeToken);const h=kl(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(ie.min())>0){l.readTime=Co(i,a.snapshotVersion.toTimestamp());const h=kl(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l})(this.serializer,e);const r=aw(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=Ol(this.serializer),t.removeTarget=e,this.k_(t)}}class Jw extends qg{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Ee(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ee(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Ee(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=rw(e.writeResults,e.commitTime),r=Ht(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=Ol(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>nw(this.serializer,r)))};this.k_(t)}}/**
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
 */class Yw{}class Xw extends Yw{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new K(k.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Wo(e,Dl(t,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(k.UNKNOWN,i.toString())}))}Jo(e,t,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.Jo(e,Dl(t,r),s,a,l,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new K(k.UNKNOWN,a.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class Zw{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(_n(t),this._a=!1):G("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const Tr="RemoteStore";class eA{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((a=>{r.enqueueAndForget((async()=>{Rr(this)&&(G(Tr,"Restarting streams for network reachability change."),await(async function(c){const h=oe(c);h.Ia.add(4),await Ei(h),h.Aa.set("Unknown"),h.Ia.delete(4),await da(h)})(this))}))})),this.Aa=new Zw(r,s)}}async function da(n){if(Rr(n))for(const e of n.da)await e(!0)}async function Ei(n){for(const e of n.da)await e(!1)}function Hg(n,e){const t=oe(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Dc(t)?kc(t):us(t).x_()&&Vc(t,e))}function Cc(n,e){const t=oe(n),r=us(t);t.Ta.delete(e),r.x_()&&zg(t,e),t.Ta.size===0&&(r.x_()?r.B_():Rr(t)&&t.Aa.set("Unknown"))}function Vc(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ie.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}us(n).H_(e)}function zg(n,e){n.Ra.$e(e),us(n).Y_(e)}function kc(n){n.Ra=new GI({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),us(n).start(),n.Aa.aa()}function Dc(n){return Rr(n)&&!us(n).M_()&&n.Ta.size>0}function Rr(n){return oe(n).Ia.size===0}function Wg(n){n.Ra=void 0}async function tA(n){n.Aa.set("Online")}async function nA(n){n.Ta.forEach(((e,t)=>{Vc(n,e)}))}async function rA(n,e){Wg(n),Dc(n)?(n.Aa.la(e),kc(n)):n.Aa.set("Unknown")}async function sA(n,e,t){if(n.Aa.set("Online"),e instanceof Vg&&e.state===2&&e.cause)try{await(async function(s,i){const a=i.cause;for(const l of i.targetIds)s.Ta.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ta.delete(l),s.Ra.removeTarget(l))})(n,e)}catch(r){G(Tr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ko(n,r)}else if(e instanceof io?n.Ra.Ye(e):e instanceof Cg?n.Ra.it(e):n.Ra.et(e),!t.isEqual(ie.min()))try{const r=await jg(n.localStore);t.compareTo(r)>=0&&await(function(i,a){const l=i.Ra.Pt(a);return l.targetChanges.forEach(((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.Ta.get(h);d&&i.Ta.set(h,d.withResumeToken(c.resumeToken,a))}})),l.targetMismatches.forEach(((c,h)=>{const d=i.Ta.get(c);if(!d)return;i.Ta.set(c,d.withResumeToken(Je.EMPTY_BYTE_STRING,d.snapshotVersion)),zg(i,c);const p=new On(d.target,c,h,d.sequenceNumber);Vc(i,p)})),i.remoteSyncer.applyRemoteEvent(l)})(n,t)}catch(r){G(Tr,"Failed to raise snapshot:",r),await ko(n,r)}}async function ko(n,e,t){if(!ls(e))throw e;n.Ia.add(1),await Ei(n),n.Aa.set("Offline"),t||(t=()=>jg(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{G(Tr,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await da(n)}))}function Kg(n,e){return e().catch((t=>ko(n,t,e)))}async function pa(n){const e=oe(n),t=Qn(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:gc;for(;iA(e);)try{const s=await Bw(e.localStore,r);if(s===null){e.Pa.length===0&&t.B_();break}r=s.batchId,oA(e,s)}catch(s){await ko(e,s)}Gg(e)&&Qg(e)}function iA(n){return Rr(n)&&n.Pa.length<10}function oA(n,e){n.Pa.push(e);const t=Qn(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function Gg(n){return Rr(n)&&!Qn(n).M_()&&n.Pa.length>0}function Qg(n){Qn(n).start()}async function aA(n){Qn(n).na()}async function lA(n){const e=Qn(n);for(const t of n.Pa)e.X_(t.mutations)}async function cA(n,e,t){const r=n.Pa.shift(),s=Ic.from(r,e,t);await Kg(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await pa(n)}async function uA(n,e){e&&Qn(n).Z_&&await(async function(r,s){if((function(a){return WI(a)&&a!==k.ABORTED})(s.code)){const i=r.Pa.shift();Qn(r).N_(),await Kg(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await pa(r)}})(n,e),Gg(n)&&Qg(n)}async function Pf(n,e){const t=oe(n);t.asyncQueue.verifyOperationInProgress(),G(Tr,"RemoteStore received new credentials");const r=Rr(t);t.Ia.add(3),await Ei(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await da(t)}async function hA(n,e){const t=oe(n);e?(t.Ia.delete(2),await da(t)):e||(t.Ia.add(2),await Ei(t),t.Aa.set("Unknown"))}function us(n){return n.Va||(n.Va=(function(t,r,s){const i=oe(t);return i.ia(),new Qw(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:tA.bind(null,n),e_:nA.bind(null,n),n_:rA.bind(null,n),J_:sA.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),Dc(n)?kc(n):n.Aa.set("Unknown")):(await n.Va.stop(),Wg(n))}))),n.Va}function Qn(n){return n.ma||(n.ma=(function(t,r,s){const i=oe(t);return i.ia(),new Jw(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:aA.bind(null,n),n_:uA.bind(null,n),ea:lA.bind(null,n),ta:cA.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await pa(n)):(await n.ma.stop(),n.Pa.length>0&&(G(Tr,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
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
 */class Nc{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Bn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,l=new Nc(e,t,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Oc(n,e){if(_n("AsyncQueue",`${e}: ${n}`),ls(n))return new K(k.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class zr{static emptySet(e){return new zr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||Y.comparator(t.key,r.key):(t,r)=>Y.comparator(t.key,r.key),this.keyedMap=Ns(),this.sortedSet=new Ve(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof zr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new zr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Cf{constructor(){this.fa=new Ve(Y.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):ee(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class ns{constructor(e,t,r,s,i,a,l,c,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach((l=>{a.push({type:0,doc:l})})),new ns(e,t,zr.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&aa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class fA{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class dA{constructor(){this.queries=Vf(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const s=oe(t),i=s.queries;s.queries=Vf(),i.forEach(((a,l)=>{for(const c of l.wa)c.onError(r)}))})(this,new K(k.ABORTED,"Firestore shutting down"))}}function Vf(){return new br((n=>gg(n)),aa)}async function Jg(n,e){const t=oe(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new fA,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await t.onListen(s,!0);break;case 1:i.ya=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=Oc(a,`Initialization of query '${Lr(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.wa.push(e),e.va(t.onlineState),i.ya&&e.Ca(i.ya)&&xc(t)}async function Yg(n,e){const t=oe(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.wa.indexOf(e);a>=0&&(i.wa.splice(a,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function pA(n,e){const t=oe(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const l of a.wa)l.Ca(s)&&(r=!0);a.ya=s}}r&&xc(t)}function gA(n,e,t){const r=oe(n),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(t);r.queries.delete(e)}function xc(n){n.Da.forEach((e=>{e.next()}))}var Ll,kf;(kf=Ll||(Ll={})).Fa="default",kf.Cache="cache";class Xg{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ns(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=ns.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Ll.Cache}}/**
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
 */class Zg{constructor(e){this.key=e}}class em{constructor(e){this.key=e}}class mA{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=fe(),this.mutatedKeys=fe(),this.Xa=mg(e),this.eu=new zr(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new Cf,s=t?t.eu:this.eu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((d,p)=>{const y=s.get(d),b=la(this.query,p)?p:null,V=!!y&&this.mutatedKeys.has(y.key),N=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let L=!1;y&&b?y.data.isEqual(b.data)?V!==N&&(r.track({type:3,doc:b}),L=!0):this.iu(y,b)||(r.track({type:2,doc:b}),L=!0,(c&&this.Xa(b,c)>0||h&&this.Xa(b,h)<0)&&(l=!0)):!y&&b?(r.track({type:0,doc:b}),L=!0):y&&!b&&(r.track({type:1,doc:y}),L=!0,(c||h)&&(l=!0)),L&&(b?(a=a.add(b),i=N?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{eu:a,ru:r,Ds:l,mutatedKeys:i}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const a=e.ru.pa();a.sort(((d,p)=>(function(b,V){const N=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee(20277,{At:L})}};return N(b)-N(V)})(d.type,p.type)||this.Xa(d.doc,p.doc))),this.su(r),s=s!=null&&s;const l=t&&!s?this.ou():[],c=this.Za.size===0&&this.current&&!s?1:0,h=c!==this.Ya;return this.Ya=c,a.length!==0||h?{snapshot:new ns(this.query,e.eu,i,a,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Cf,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=fe(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const t=[];return e.forEach((r=>{this.Za.has(r)||t.push(new em(r))})),this.Za.forEach((r=>{e.has(r)||t.push(new Zg(r))})),t}uu(e){this.Ha=e.qs,this.Za=fe();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return ns.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Mc="SyncEngine";class _A{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class yA{constructor(e){this.key=e,this.lu=!1}}class vA{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new br((l=>gg(l)),aa),this.Tu=new Map,this.Iu=new Set,this.du=new Ve(Y.comparator),this.Eu=new Map,this.Au=new bc,this.Ru={},this.Vu=new Map,this.mu=ts.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function EA(n,e,t=!0){const r=om(n);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await tm(r,e,t,!0),s}async function TA(n,e){const t=om(n);await tm(t,e,!0,!1)}async function tm(n,e,t,r){const s=await jw(n.localStore,qt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await IA(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Hg(n.remoteStore,s),l}async function IA(n,e,t,r,s){n.gu=(p,y,b)=>(async function(N,L,z,W){let Q=L.view.nu(z);Q.Ds&&(Q=await wf(N.localStore,L.query,!1).then((({documents:w})=>L.view.nu(w,Q))));const q=W&&W.targetChanges.get(L.targetId),re=W&&W.targetMismatches.get(L.targetId)!=null,ge=L.view.applyChanges(Q,N.isPrimaryClient,q,re);return Nf(N,L.targetId,ge._u),ge.snapshot})(n,p,y,b);const i=await wf(n.localStore,e,!0),a=new mA(e,i.qs),l=a.nu(i.documents),c=vi.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(l,n.isPrimaryClient,c);Nf(n,t,h._u);const d=new _A(e,t,a);return n.Pu.set(e,d),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),h.snapshot}async function wA(n,e,t){const r=oe(n),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter((a=>!aa(a,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await xl(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Cc(r.remoteStore,s.targetId),Fl(r,s.targetId)})).catch(as)):(Fl(r,s.targetId),await xl(r.localStore,s.targetId,!0))}async function AA(n,e){const t=oe(n),r=t.Pu.get(e),s=t.Tu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Cc(t.remoteStore,r.targetId))}async function bA(n,e,t){const r=DA(n);try{const s=await(function(a,l){const c=oe(a),h=Ae.now(),d=l.reduce(((b,V)=>b.add(V.key)),fe());let p,y;return c.persistence.runTransaction("Locally write mutations","readwrite",(b=>{let V=yn(),N=fe();return c.Os.getEntries(b,d).next((L=>{V=L,V.forEach(((z,W)=>{W.isValidDocument()||(N=N.add(z))}))})).next((()=>c.localDocuments.getOverlayedDocuments(b,V))).next((L=>{p=L;const z=[];for(const W of l){const Q=jI(W,p.get(W.key).overlayedDocument);Q!=null&&z.push(new Sr(W.key,Q,ag(Q.value.mapValue),fn.exists(!0)))}return c.mutationQueue.addMutationBatch(b,h,z,l)})).next((L=>{y=L;const z=L.applyToLocalDocumentSet(p,N);return c.documentOverlayCache.saveOverlays(b,L.batchId,z)}))})).then((()=>({batchId:y.batchId,changes:yg(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(a,l,c){let h=a.Ru[a.currentUser.toKey()];h||(h=new Ve(ue)),h=h.insert(l,c),a.Ru[a.currentUser.toKey()]=h})(r,s.batchId,t),await Ti(r,s.changes),await pa(r.remoteStore)}catch(s){const i=Oc(s,"Failed to persist write");t.reject(i)}}async function nm(n,e){const t=oe(n);try{const r=await Fw(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const a=t.Eu.get(i);a&&(Ee(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.lu=!0:s.modifiedDocuments.size>0?Ee(a.lu,14607):s.removedDocuments.size>0&&(Ee(a.lu,42227),a.lu=!1))})),await Ti(t,r,e)}catch(r){await as(r)}}function Df(n,e,t){const r=oe(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Pu.forEach(((i,a)=>{const l=a.view.va(e);l.snapshot&&s.push(l.snapshot)})),(function(a,l){const c=oe(a);c.onlineState=l;let h=!1;c.queries.forEach(((d,p)=>{for(const y of p.wa)y.va(l)&&(h=!0)})),h&&xc(c)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function SA(n,e,t){const r=oe(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Eu.get(e),i=s&&s.key;if(i){let a=new Ve(Y.comparator);a=a.insert(i,st.newNoDocument(i,ie.min()));const l=fe().add(i),c=new ha(ie.min(),new Map,new Ve(ue),a,l);await nm(r,c),r.du=r.du.remove(i),r.Eu.delete(e),Lc(r)}else await xl(r.localStore,e,!1).then((()=>Fl(r,e,t))).catch(as)}async function RA(n,e){const t=oe(n),r=e.batch.batchId;try{const s=await Lw(t.localStore,e);sm(t,r,null),rm(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Ti(t,s)}catch(s){await as(s)}}async function PA(n,e,t){const r=oe(n);try{const s=await(function(a,l){const c=oe(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let d;return c.mutationQueue.lookupMutationBatch(h,l).next((p=>(Ee(p!==null,37113),d=p.keys(),c.mutationQueue.removeMutationBatch(h,p)))).next((()=>c.mutationQueue.performConsistencyCheck(h))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(h,d,l))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d))).next((()=>c.localDocuments.getDocuments(h,d)))}))})(r.localStore,e);sm(r,e,t),rm(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Ti(r,s)}catch(s){await as(s)}}function rm(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function sm(n,e,t){const r=oe(n);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function Fl(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((r=>{n.Au.containsKey(r)||im(n,r)}))}function im(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Cc(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),Lc(n))}function Nf(n,e,t){for(const r of t)r instanceof Zg?(n.Au.addReference(r.key,e),CA(n,r)):r instanceof em?(G(Mc,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||im(n,r.key)):ee(19791,{yu:r})}function CA(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(G(Mc,"New document in limbo: "+t),n.Iu.add(r),Lc(n))}function Lc(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new Y(Se.fromString(e)),r=n.mu.next();n.Eu.set(r,new yA(t)),n.du=n.du.insert(t,r),Hg(n.remoteStore,new On(qt(Ec(t.path)),r,"TargetPurposeLimboResolution",sa.ue))}}async function Ti(n,e,t){const r=oe(n),s=[],i=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach(((l,c)=>{a.push(r.gu(c,e,t).then((h=>{var d;if((h||t)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=t==null?void 0:t.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Rc.Es(c.targetId,h);i.push(p)}})))})),await Promise.all(a),r.hu.J_(s),await(async function(c,h){const d=oe(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>D.forEach(h,(y=>D.forEach(y.Is,(b=>d.persistence.referenceDelegate.addReference(p,y.targetId,b))).next((()=>D.forEach(y.ds,(b=>d.persistence.referenceDelegate.removeReference(p,y.targetId,b)))))))))}catch(p){if(!ls(p))throw p;G(Pc,"Failed to update sequence numbers: "+p)}for(const p of h){const y=p.targetId;if(!p.fromCache){const b=d.Fs.get(y),V=b.snapshotVersion,N=b.withLastLimboFreeSnapshotVersion(V);d.Fs=d.Fs.insert(y,N)}}})(r.localStore,i))}async function VA(n,e){const t=oe(n);if(!t.currentUser.isEqual(e)){G(Mc,"User change. New user:",e.toKey());const r=await Bg(t.localStore,e);t.currentUser=e,(function(i,a){i.Vu.forEach((l=>{l.forEach((c=>{c.reject(new K(k.CANCELLED,a))}))})),i.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ti(t,r.Bs)}}function kA(n,e){const t=oe(n),r=t.Eu.get(e);if(r&&r.lu)return fe().add(r.key);{let s=fe();const i=t.Tu.get(e);if(!i)return s;for(const a of i){const l=t.Pu.get(a);s=s.unionWith(l.view.tu)}return s}}function om(n){const e=oe(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=nm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=kA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=SA.bind(null,e),e.hu.J_=pA.bind(null,e.eventManager),e.hu.pu=gA.bind(null,e.eventManager),e}function DA(n){const e=oe(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=RA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=PA.bind(null,e),e}class Do{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=fa(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return Mw(this.persistence,new Nw,e.initialUser,this.serializer)}Du(e){return new Ug(Sc.Vi,this.serializer)}bu(e){return new qw}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Do.provider={build:()=>new Do};class NA extends Do{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Ee(this.persistence.referenceDelegate instanceof Vo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new yw(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?gt.withCacheSize(this.cacheSizeBytes):gt.DEFAULT;return new Ug((r=>Vo.Vi(r,t)),this.serializer)}}class Ul{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Df(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=VA.bind(null,this.syncEngine),await hA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new dA})()}createDatastore(e){const t=fa(e.databaseInfo.databaseId),r=(function(i){return new Gw(i)})(e.databaseInfo);return(function(i,a,l,c){return new Xw(i,a,l,c)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,i,a,l){return new eA(r,s,i,a,l)})(this.localStore,this.datastore,e.asyncQueue,(t=>Df(this.syncEngine,t,0)),(function(){return Sf.C()?new Sf:new Hw})())}createSyncEngine(e,t){return(function(s,i,a,l,c,h,d){const p=new vA(s,i,a,l,c,h);return d&&(p.fu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const i=oe(s);G(Tr,"RemoteStore shutting down."),i.Ia.add(5),await Ei(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Ul.provider={build:()=>new Ul};/**
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
 */class am{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):_n("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Jn="FirestoreClient";class OA{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=nt.UNAUTHENTICATED,this.clientId=pc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{G(Jn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(G(Jn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Bn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Oc(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function nl(n,e){n.asyncQueue.verifyOperationInProgress(),G(Jn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Bg(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{Hn("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{G("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{Hn("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=e}async function Of(n,e){n.asyncQueue.verifyOperationInProgress();const t=await xA(n);G(Jn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>Pf(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>Pf(e.remoteStore,s))),n._onlineComponents=e}async function xA(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){G(Jn,"Using user provided OfflineComponentProvider");try{await nl(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===k.FAILED_PRECONDITION||s.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;Hn("Error using user provided cache. Falling back to memory cache: "+t),await nl(n,new Do)}}else G(Jn,"Using default OfflineComponentProvider"),await nl(n,new NA(void 0));return n._offlineComponents}async function lm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(G(Jn,"Using user provided OnlineComponentProvider"),await Of(n,n._uninitializedComponentsProvider._online)):(G(Jn,"Using default OnlineComponentProvider"),await Of(n,new Ul))),n._onlineComponents}function MA(n){return lm(n).then((e=>e.syncEngine))}async function Bl(n){const e=await lm(n),t=e.eventManager;return t.onListen=EA.bind(null,e.syncEngine),t.onUnlisten=wA.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=TA.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=AA.bind(null,e.syncEngine),t}function LA(n,e,t={}){const r=new Bn;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,l,c,h){const d=new am({next:y=>{d.Ou(),a.enqueueAndForget((()=>Yg(i,p))),y.fromCache&&c.source==="server"?h.reject(new K(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(y)},error:y=>h.reject(y)}),p=new Xg(l,d,{includeMetadataChanges:!0,ka:!0});return Jg(i,p)})(await Bl(n),n.asyncQueue,e,t,r))),r.promise}/**
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
 */function cm(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const xf=new Map;/**
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
 */const um="firestore.googleapis.com",Mf=!0;class Lf{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new K(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=um,this.ssl=Mf}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Mf;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Fg;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<mw)throw new K(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}tI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cm((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new K(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new K(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new K(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ga{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Lf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Lf(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new WT;switch(r.type){case"firstParty":return new JT(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=xf.get(t);r&&(G("ComponentProvider","Removing Datastore"),xf.delete(t),r.terminate())})(this),Promise.resolve()}}function FA(n,e,t,r={}){var s;n=pr(n,ga);const i=ss(e),a=n._getSettings(),l=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),c=`${e}:${t}`;i&&(Np(`https://${c}`),Op("Firestore",!0)),a.host!==um&&a.host!==c&&Hn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},a),{host:c,ssl:i,emulatorOptions:r});if(!yr(h,l)&&(n._setSettings(h),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=nt.MOCK_USER;else{d=vE(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const y=r.mockUserToken.sub||r.mockUserToken.user_id;if(!y)throw new K(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new nt(y)}n._authCredentials=new KT(new Gp(d,p))}}/**
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
 */class Yn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Yn(this.firestore,e,this._query)}}class je{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new jn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new je(this.firestore,e,this._key)}toJSON(){return{type:je._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(_i(t,je._jsonSchema))return new je(e,r||null,new Y(Se.fromString(t.referencePath)))}}je._jsonSchemaVersion="firestore/documentReference/1.0",je._jsonSchema={type:Me("string",je._jsonSchemaVersion),referencePath:Me("string")};class jn extends Yn{constructor(e,t,r){super(e,t,Ec(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new je(this.firestore,null,new Y(e))}withConverter(e){return new jn(this.firestore,e,this._path)}}function Cs(n,e,...t){if(n=at(n),Jp("collection","path",e),n instanceof ga){const r=Se.fromString(e,...t);return Qh(r),new jn(n,null,r)}{if(!(n instanceof je||n instanceof jn))throw new K(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Se.fromString(e,...t));return Qh(r),new jn(n.firestore,null,r)}}function UA(n,e,...t){if(n=at(n),arguments.length===1&&(e=pc.newId()),Jp("doc","path",e),n instanceof ga){const r=Se.fromString(e,...t);return Gh(r),new je(n,null,new Y(r))}{if(!(n instanceof je||n instanceof jn))throw new K(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Se.fromString(e,...t));return Gh(r),new je(n.firestore,n instanceof jn?n.converter:null,new Y(r))}}/**
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
 */const Ff="AsyncQueue";class Uf{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new $g(this,"async_queue_retry"),this.oc=()=>{const r=tl();r&&G(Ff,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=tl();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=tl();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Bn;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!ls(e))throw e;G(Ff,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,_n("INTERNAL UNHANDLED ERROR: ",Bf(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const s=Nc.createAndSchedule(this,e,t,r,(i=>this.lc(i)));return this.ec.push(s),s}ac(){this.tc&&ee(47125,{hc:Bf(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Bf(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function jf(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(n,["next","error","complete"])}class ui extends ga{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Uf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Uf(e),this._firestoreClient=void 0,await e}}}function BA(n,e){const t=typeof n=="object"?n:Fp(),r=typeof n=="string"?n:Ao,s=fc(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=_E("firestore");i&&FA(s,...i)}return s}function Fc(n){if(n._terminated)throw new K(k.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||jA(n),n._firestoreClient}function jA(n){var e,t,r;const s=n._freezeSettings(),i=(function(l,c,h,d){return new fI(l,c,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,cm(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new OA(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&(function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}})(n._componentsProvider))}/**
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
 */class At{constructor(e){this._byteString=e}static fromBase64String(e){try{return new At(Je.fromBase64String(e))}catch(t){throw new K(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new At(Je.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:At._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(_i(e,At._jsonSchema))return At.fromBase64String(e.bytes)}}At._jsonSchemaVersion="firestore/bytes/1.0",At._jsonSchema={type:Me("string",At._jsonSchemaVersion),bytes:Me("string")};/**
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
 */class Uc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new K(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class hm{constructor(e){this._methodName=e}}/**
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
 */class zt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new K(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new K(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:zt._jsonSchemaVersion}}static fromJSON(e){if(_i(e,zt._jsonSchema))return new zt(e.latitude,e.longitude)}}zt._jsonSchemaVersion="firestore/geoPoint/1.0",zt._jsonSchema={type:Me("string",zt._jsonSchemaVersion),latitude:Me("number"),longitude:Me("number")};/**
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
 */class Wt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Wt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(_i(e,Wt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Wt(e.vectorValues);throw new K(k.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Wt._jsonSchemaVersion="firestore/vectorValue/1.0",Wt._jsonSchema={type:Me("string",Wt._jsonSchemaVersion),vectorValues:Me("object")};/**
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
 */const $A=/^__.*__$/;class qA{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Sr(e,this.data,this.fieldMask,t,this.fieldTransforms):new yi(e,this.data,t,this.fieldTransforms)}}function fm(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee(40011,{Ec:n})}}class Bc{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Bc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return No(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(fm(this.Ec)&&$A.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class HA{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||fa(e)}Dc(e,t,r,s=!1){return new Bc({Ec:e,methodName:t,bc:r,path:Qe.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function dm(n){const e=n._freezeSettings(),t=fa(n._databaseId);return new HA(n._databaseId,!!e.ignoreUndefinedProperties,t)}function zA(n,e,t,r,s,i={}){const a=n.Dc(i.merge||i.mergeFields?2:0,e,t,s);mm("Data must be an object, but it was:",a,r);const l=pm(r,a);let c,h;if(i.merge)c=new Vt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const y=KA(e,p,t);if(!a.contains(y))throw new K(k.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);QA(d,y)||d.push(y)}c=new Vt(d),h=a.fieldTransforms.filter((p=>c.covers(p.field)))}else c=null,h=a.fieldTransforms;return new qA(new wt(l),c,h)}function WA(n,e,t,r=!1){return jc(t,n.Dc(r?4:3,e))}function jc(n,e){if(gm(n=at(n)))return mm("Unsupported field value:",e,n),pm(n,e);if(n instanceof hm)return(function(r,s){if(!fm(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const i=[];let a=0;for(const l of r){let c=jc(l,s.yc(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}})(n,e)}return(function(r,s){if((r=at(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return xI(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ae.fromDate(r);return{timestampValue:Co(s.serializer,i)}}if(r instanceof Ae){const i=new Ae(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Co(s.serializer,i)}}if(r instanceof zt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof At)return{bytesValue:kg(s.serializer,r._byteString)};if(r instanceof je){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ac(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Wt)return(function(a,l){return{mapValue:{fields:{[ig]:{stringValue:og},[bo]:{arrayValue:{values:a.toArray().map((h=>{if(typeof h!="number")throw l.wc("VectorValues must only contain numeric values.");return Tc(l.serializer,h)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${ra(r)}`)})(n,e)}function pm(n,e){const t={};return Zp(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ar(n,((r,s)=>{const i=jc(s,e.Vc(r));i!=null&&(t[r]=i)})),{mapValue:{fields:t}}}function gm(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ae||n instanceof zt||n instanceof At||n instanceof je||n instanceof hm||n instanceof Wt)}function mm(n,e,t){if(!gm(t)||!Yp(t)){const r=ra(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function KA(n,e,t){if((e=at(e))instanceof Uc)return e._internalPath;if(typeof e=="string")return _m(n,e);throw No("Field path arguments must be of type string or ",n,!1,void 0,t)}const GA=new RegExp("[~\\*/\\[\\]]");function _m(n,e,t){if(e.search(GA)>=0)throw No(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Uc(...e.split("."))._internalPath}catch{throw No(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function No(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new K(k.INVALID_ARGUMENT,l+n+c)}function QA(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class ym{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new je(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new JA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ma("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class JA extends ym{data(){return super.data()}}function ma(n,e){return typeof e=="string"?_m(n,e):e instanceof Uc?e._internalPath:e._delegate._internalPath}/**
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
 */function vm(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new K(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class $c{}class Em extends $c{}function $f(n,e,...t){let r=[];e instanceof $c&&r.push(e),r=r.concat(t),(function(i){const a=i.filter((c=>c instanceof qc)).length,l=i.filter((c=>c instanceof _a)).length;if(a>1||a>0&&l>0)throw new K(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class _a extends Em{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new _a(e,t,r)}_apply(e){const t=this._parse(e);return Tm(e._query,t),new Yn(e.firestore,e.converter,Cl(e._query,t))}_parse(e){const t=dm(e.firestore);return(function(i,a,l,c,h,d,p){let y;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new K(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Wf(p,d);const V=[];for(const N of p)V.push(zf(c,i,N));y={arrayValue:{values:V}}}else y=zf(c,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Wf(p,d),y=WA(l,a,p,d==="in"||d==="not-in");return xe.create(h,d,y)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function qf(n,e,t){const r=e,s=ma("where",n);return _a._create(s,r,t)}class qc extends $c{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new qc(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:xt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let a=s;const l=i.getFlattenedFilters();for(const c of l)Tm(a,c),a=Cl(a,c)})(e._query,t),new Yn(e.firestore,e.converter,Cl(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Hc extends Em{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Hc(e,t)}_apply(e){const t=(function(s,i,a){if(s.startAt!==null)throw new K(k.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new K(k.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ai(i,a)})(e._query,this._field,this._direction);return new Yn(e.firestore,e.converter,(function(s,i){const a=s.explicitOrderBy.concat([i]);return new cs(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,t))}}function Hf(n,e="asc"){const t=e,r=ma("orderBy",n);return Hc._create(r,t)}function zf(n,e,t){if(typeof(t=at(t))=="string"){if(t==="")throw new K(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!pg(e)&&t.indexOf("/")!==-1)throw new K(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Se.fromString(t));if(!Y.isDocumentKey(r))throw new K(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return rf(n,new Y(r))}if(t instanceof je)return rf(n,t._key);throw new K(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ra(t)}.`)}function Wf(n,e){if(!Array.isArray(n)||n.length===0)throw new K(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Tm(n,e){const t=(function(s,i){for(const a of s)for(const l of a.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new K(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new K(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class YA{convertValue(e,t="none"){switch(Gn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ne(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Kn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ee(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Ar(e,((s,i)=>{r[s]=this.convertValue(i,t)})),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[bo].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((a=>Ne(a.doubleValue)));return new Wt(i)}convertGeoPoint(e){return new zt(Ne(e.latitude),Ne(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=oa(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(si(e));default:return null}}convertTimestamp(e){const t=Wn(e);return new Ae(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Se.fromString(e);Ee(Lg(r),9688,{name:e});const s=new ii(r.get(1),r.get(3)),i=new Y(r.popFirst(5));return s.isEqual(t)||_n(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function XA(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class xs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class gr extends ym{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new oo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(ma("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new K(k.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=gr._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}gr._jsonSchemaVersion="firestore/documentSnapshot/1.0",gr._jsonSchema={type:Me("string",gr._jsonSchemaVersion),bundleSource:Me("string","DocumentSnapshot"),bundleName:Me("string"),bundle:Me("string")};class oo extends gr{data(e={}){return super.data(e)}}class mr{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new xs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new oo(this._firestore,this._userDataWriter,r.key,r,new xs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new K(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((l=>{const c=new oo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new xs(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const c=new oo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new xs(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),d=a.indexOf(l.doc.key)),{type:ZA(l.type),doc:c,oldIndex:h,newIndex:d}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new K(k.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=mr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=pc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function ZA(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee(61501,{type:n})}}mr._jsonSchemaVersion="firestore/querySnapshot/1.0",mr._jsonSchema={type:Me("string",mr._jsonSchemaVersion),bundleSource:Me("string","QuerySnapshot"),bundleName:Me("string"),bundle:Me("string")};class zc extends YA{constructor(e){super(),this.firestore=e}convertBytes(e){return new At(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new je(this.firestore,null,t)}}function Kf(n){n=pr(n,Yn);const e=pr(n.firestore,ui),t=Fc(e),r=new zc(e);return vm(n._query),LA(t,n._query).then((s=>new mr(e,r,n,s)))}function Gf(n,e){const t=pr(n.firestore,ui),r=UA(n),s=XA(n.converter,e);return t0(t,[zA(dm(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,fn.exists(!1))]).then((()=>r))}function e0(n,...e){var t,r,s;n=at(n);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||jf(e[a])||(i=e[a++]);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(jf(e[a])){const p=e[a];e[a]=(t=p.next)===null||t===void 0?void 0:t.bind(p),e[a+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[a+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let c,h,d;if(n instanceof je)h=pr(n.firestore,ui),d=Ec(n._key.path),c={next:p=>{e[a]&&e[a](n0(h,n,p))},error:e[a+1],complete:e[a+2]};else{const p=pr(n,Yn);h=pr(p.firestore,ui),d=p._query;const y=new zc(h);c={next:b=>{e[a]&&e[a](new mr(h,y,p,b))},error:e[a+1],complete:e[a+2]},vm(n._query)}return(function(y,b,V,N){const L=new am(N),z=new Xg(b,L,V);return y.asyncQueue.enqueueAndForget((async()=>Jg(await Bl(y),z))),()=>{L.Ou(),y.asyncQueue.enqueueAndForget((async()=>Yg(await Bl(y),z)))}})(Fc(h),d,l,c)}function t0(n,e){return(function(r,s){const i=new Bn;return r.asyncQueue.enqueueAndForget((async()=>bA(await MA(r),s,i))),i.promise})(Fc(n),e)}function n0(n,e,t){const r=t.docs.get(e._key),s=new zc(n);return new gr(n,s,e._key,r,new xs(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){os=s})(is),Yr(new vr("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new ui(new GT(r.getProvider("auth-internal")),new YT(a,r.getProvider("app-check-internal")),(function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new K(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ii(h.options.projectId,d)})(a,s),a);return i=Object.assign({useFetchStreams:t},i),l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),Fn(qh,Hh,e),Fn(qh,Hh,"esm2017")})();var r0="firebase",s0="11.10.0";/**
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
 */Fn(r0,s0,"app");const i0={apiKey:"AIzaSyBFK9UDO0XCJ5qRlI1DT9o1ERFw9pEoISo",authDomain:"cis-grp-prjk.firebaseapp.com",projectId:"cis-grp-prjk",storageBucket:"cis-grp-prjk.firebasestorage.app",messagingSenderId:"342018301768",appId:"1:342018301768:web:9daf47b7d3e378e9299d7d"},o0=Lp(i0),Vs=BA(o0),a0=rE("userList",{state:()=>({music:[],currentmusic:null,user:null,snapshotUnsubscribe:null,query:"",playlists:[],currentPlaylistId:null,playlistSongs:[],isShuffled:!1,shuffledPlaylist:[],currentPlaylistIndex:0,persist:!0}),actions:{async init(){const n=Cs(Vs,"music");this.snapshotUnsubscribe=e0(n,e=>{const t=[];e.forEach(r=>{const s=r.data();t.push({id:s.id,name:s.name,author:s.author,url:s.url})}),this.music=t,!this.currentmusic&&t.length>0&&(this.currentmusic=t[0])})},setCurrentVideo(n){this.currentmusic=n},async setUser(n){this.user=n,n?await this.loadUserPlaylists(n.uid):(this.playlists=[],this.currentPlaylistId=null,this.playlistSongs=[])},async loadUserPlaylists(n){const e=$f(Cs(Vs,"playlists"),qf("userId","==",n),Hf("createdAt","asc")),t=await Kf(e);this.playlists=t.docs.map(r=>({id:r.id,...r.data()})),this.playlists.length>0&&!this.currentPlaylistId&&(this.currentPlaylistId=this.playlists[0].id,await this.loadSongsForPlaylist(this.currentPlaylistId))},async createPlaylist(n){if(!this.user)return;const e={userId:this.user.uid,name:n,isPublic:!1,createdAt:Ae.now()},t=await Gf(Cs(Vs,"playlists"),e);this.playlists.push({id:t.id,...e}),this.currentPlaylistId=t.id,this.playlistSongs=[]},async loadSongsForPlaylist(n){const e=$f(Cs(Vs,"playlistSongs"),qf("playlistId","==",n),Hf("addedAt","asc")),t=await Kf(e);this.playlistSongs=t.docs.map(r=>({id:r.id,...r.data()}))},async addSongToPlaylist(n,e){const t={playlistId:n,songId:e.id,addedAt:Ae.now()};await Gf(Cs(Vs,"playlistSongs"),t),await this.loadSongsForPlaylist(n)},shufflePlaylist(){const e=[...this.playlistSongs.map(t=>this.music.find(r=>r.id===t.songId)).filter(Boolean)];for(let t=e.length-1;t>0;t--){const r=Math.floor(Math.random()*(t+1));[e[t],e[r]]=[e[r],e[t]]}this.shuffledPlaylist=e,this.isShuffled=!0,this.currentPlaylistIndex=0},toggleShuffle(){this.isShuffled?(this.isShuffled=!1,this.shuffledPlaylist=[],this.currentPlaylistIndex=0):this.shufflePlaylist()},getCurrentPlaylist(){return this.isShuffled?this.shuffledPlaylist:this.playlistSongs.map(n=>this.music.find(e=>e.id===n.songId)).filter(Boolean)},playNext(){const n=this.getCurrentPlaylist();if(n.length===0)return null;this.currentPlaylistIndex=(this.currentPlaylistIndex+1)%n.length;const e=n[this.currentPlaylistIndex];return this.currentmusic=e,e},playPrevious(){const n=this.getCurrentPlaylist();if(n.length===0)return null;this.currentPlaylistIndex=this.currentPlaylistIndex===0?n.length-1:this.currentPlaylistIndex-1;const e=n[this.currentPlaylistIndex];return this.currentmusic=e,e},setCurrentSongIndex(n){const t=this.getCurrentPlaylist().findIndex(r=>r.id===n.id);t!==-1&&(this.currentPlaylistIndex=t)},searchMusic(n){const e=n.toLowerCase(),t=this.music.filter(r=>r.name.toLowerCase().includes(e)||r.author.toLowerCase().includes(e));return t.length>0&&(this.currentmusic=t[0]),t}}});function Wc(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Im(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l0=Im,wm=new gi("auth","Firebase",Im());/**
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
 */const Oo=new uc("@firebase/auth");function c0(n,...e){Oo.logLevel<=he.WARN&&Oo.warn(`Auth (${is}): ${n}`,...e)}function ao(n,...e){Oo.logLevel<=he.ERROR&&Oo.error(`Auth (${is}): ${n}`,...e)}/**
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
 */function Yt(n,...e){throw Gc(n,...e)}function Nt(n,...e){return Gc(n,...e)}function Kc(n,e,t){const r=Object.assign(Object.assign({},l0()),{[e]:t});return new gi("auth","Firebase",r).create(e,{appName:n.name})}function _r(n){return Kc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function u0(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Yt(n,"argument-error"),Kc(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Gc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return wm.create(n,...e)}function se(n,e,...t){if(!n)throw Gc(e,...t)}function ln(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ao(e),new Error(e)}function vn(n,e){n||ln(e)}/**
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
 */function jl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function h0(){return Qf()==="http:"||Qf()==="https:"}function Qf(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function f0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(h0()||bE()||"connection"in navigator)?navigator.onLine:!0}function d0(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Ii{constructor(e,t){this.shortDelay=e,this.longDelay=t,vn(t>e,"Short delay should be less than long delay!"),this.isMobile=IE()||SE()}get(){return f0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Qc(n,e){vn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Am{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ln("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ln("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ln("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const p0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const g0=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],m0=new Ii(3e4,6e4);function Jc(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function hs(n,e,t,r,s={}){return bm(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=mi(Object.assign({key:n.config.apiKey},a)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:c},i);return AE()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&ss(n.emulatorConfig.host)&&(h.credentials="include"),Am.fetch()(await Sm(n,n.config.apiHost,t,l),h)})}async function bm(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},p0),e);try{const s=new y0(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Ji(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ji(n,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw Ji(n,"email-already-in-use",a);if(c==="USER_DISABLED")throw Ji(n,"user-disabled",a);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Kc(n,d,h);Yt(n,d)}}catch(s){if(s instanceof Tn)throw s;Yt(n,"network-request-failed",{message:String(s)})}}async function _0(n,e,t,r,s={}){const i=await hs(n,e,t,r,s);return"mfaPendingCredential"in i&&Yt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Sm(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?Qc(n.config,s):`${n.config.apiScheme}://${s}`;return g0.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class y0{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Nt(this.auth,"network-request-failed")),m0.get())})}}function Ji(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Nt(n,e,r);return s.customData._tokenResponse=t,s}/**
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
 */async function v0(n,e){return hs(n,"POST","/v1/accounts:delete",e)}async function xo(n,e){return hs(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Js(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function E0(n,e=!1){const t=at(n),r=await t.getIdToken(e),s=Yc(r);se(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Js(rl(s.auth_time)),issuedAtTime:Js(rl(s.iat)),expirationTime:Js(rl(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function rl(n){return Number(n)*1e3}function Yc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ao("JWT malformed, contained fewer than 3 sections"),null;try{const s=Cp(t);return s?JSON.parse(s):(ao("Failed to decode base64 JWT payload"),null)}catch(s){return ao("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Jf(n){const e=Yc(n);return se(e,"internal-error"),se(typeof e.exp<"u","internal-error"),se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function hi(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Tn&&T0(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function T0({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class I0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class $l{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Js(this.lastLoginAt),this.creationTime=Js(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Mo(n){var e;const t=n.auth,r=await n.getIdToken(),s=await hi(n,xo(t,{idToken:r}));se(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Rm(i.providerUserInfo):[],l=A0(n.providerData,a),c=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new $l(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(n,p)}async function w0(n){const e=at(n);await Mo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function A0(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Rm(n){return n.map(e=>{var{providerId:t}=e,r=Wc(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function b0(n,e){const t=await bm(n,{},async()=>{const r=mi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await Sm(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return n.emulatorConfig&&ss(n.emulatorConfig.host)&&(c.credentials="include"),Am.fetch()(a,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function S0(n,e){return hs(n,"POST","/v2/accounts:revokeToken",Jc(n,e))}/**
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
 */class Wr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){se(e.idToken,"internal-error"),se(typeof e.idToken<"u","internal-error"),se(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Jf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){se(e.length!==0,"internal-error");const t=Jf(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await b0(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Wr;return r&&(se(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(se(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(se(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Wr,this.toJSON())}_performRefresh(){return ln("not implemented")}}/**
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
 */function Sn(n,e){se(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class kt{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=Wc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new I0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new $l(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await hi(this,this.stsTokenManager.getToken(this.auth,e));return se(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return E0(this,e)}reload(){return w0(this)}_assign(e){this!==e&&(se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new kt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Mo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ct(this.auth.app))return Promise.reject(_r(this.auth));const e=await this.getIdToken();return await hi(this,v0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,l,c,h,d;const p=(r=t.displayName)!==null&&r!==void 0?r:void 0,y=(s=t.email)!==null&&s!==void 0?s:void 0,b=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,V=(a=t.photoURL)!==null&&a!==void 0?a:void 0,N=(l=t.tenantId)!==null&&l!==void 0?l:void 0,L=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,z=(h=t.createdAt)!==null&&h!==void 0?h:void 0,W=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:Q,emailVerified:q,isAnonymous:re,providerData:ge,stsTokenManager:w}=t;se(Q&&w,e,"internal-error");const _=Wr.fromJSON(this.name,w);se(typeof Q=="string",e,"internal-error"),Sn(p,e.name),Sn(y,e.name),se(typeof q=="boolean",e,"internal-error"),se(typeof re=="boolean",e,"internal-error"),Sn(b,e.name),Sn(V,e.name),Sn(N,e.name),Sn(L,e.name),Sn(z,e.name),Sn(W,e.name);const m=new kt({uid:Q,auth:e,email:y,emailVerified:q,displayName:p,isAnonymous:re,photoURL:V,phoneNumber:b,tenantId:N,stsTokenManager:_,createdAt:z,lastLoginAt:W});return ge&&Array.isArray(ge)&&(m.providerData=ge.map(v=>Object.assign({},v))),L&&(m._redirectEventId=L),m}static async _fromIdTokenResponse(e,t,r=!1){const s=new Wr;s.updateFromServerResponse(t);const i=new kt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Mo(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];se(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Rm(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Wr;l.updateFromIdToken(r);const c=new kt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new $l(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
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
 */const Yf=new Map;function cn(n){vn(n instanceof Function,"Expected a class definition");let e=Yf.get(n);return e?(vn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Yf.set(n,e),e)}/**
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
 */class Pm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Pm.type="NONE";const Xf=Pm;/**
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
 */function lo(n,e,t){return`firebase:${n}:${e}:${t}`}class Kr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=lo(this.userKey,s.apiKey,i),this.fullPersistenceKey=lo("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await xo(this.auth,{idToken:e}).catch(()=>{});return t?kt._fromGetAccountInfoResponse(this.auth,t,e):null}return kt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Kr(cn(Xf),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||cn(Xf);const a=lo(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const d=await h._get(a);if(d){let p;if(typeof d=="string"){const y=await xo(e,{idToken:d}).catch(()=>{});if(!y)break;p=await kt._fromGetAccountInfoResponse(e,y,d)}else p=kt._fromJSON(e,d);h!==i&&(l=p),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Kr(i,e,r):(i=c[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Kr(i,e,r))}}/**
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
 */function Zf(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Dm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Cm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Om(e))return"Blackberry";if(xm(e))return"Webos";if(Vm(e))return"Safari";if((e.includes("chrome/")||km(e))&&!e.includes("edge/"))return"Chrome";if(Nm(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Cm(n=ot()){return/firefox\//i.test(n)}function Vm(n=ot()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function km(n=ot()){return/crios\//i.test(n)}function Dm(n=ot()){return/iemobile/i.test(n)}function Nm(n=ot()){return/android/i.test(n)}function Om(n=ot()){return/blackberry/i.test(n)}function xm(n=ot()){return/webos/i.test(n)}function Xc(n=ot()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function R0(n=ot()){var e;return Xc(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function P0(){return RE()&&document.documentMode===10}function Mm(n=ot()){return Xc(n)||Nm(n)||xm(n)||Om(n)||/windows phone/i.test(n)||Dm(n)}/**
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
 */function Lm(n,e=[]){let t;switch(n){case"Browser":t=Zf(ot());break;case"Worker":t=`${Zf(ot())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${is}/${r}`}/**
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
 */class C0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,l)=>{try{const c=e(i);a(c)}catch(c){l(c)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function V0(n,e={}){return hs(n,"GET","/v2/passwordPolicy",Jc(n,e))}/**
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
 */const k0=6;class D0{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:k0,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class N0{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ed(this),this.idTokenSubscription=new ed(this),this.beforeStateQueue=new C0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=cn(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Kr.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await xo(this,{idToken:e}),r=await kt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ct(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Mo(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=d0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ct(this.app))return Promise.reject(_r(this));const t=e?at(e):null;return t&&se(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ct(this.app)?Promise.reject(_r(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ct(this.app)?Promise.reject(_r(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(cn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await V0(this),t=new D0(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new gi("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await S0(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&cn(e)||this._popupRedirectResolver;se(t,this,"argument-error"),this.redirectPersistenceManager=await Kr.create(this,[cn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(se(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,s);return()=>{a=!0,c()}}else{const c=e.addObserver(t);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Lm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(Ct(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&c0(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ya(n){return at(n)}class ed{constructor(e){this.auth=e,this.observer=null,this.addObserver=xE(t=>this.observer=t)}get next(){return se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Zc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function O0(n){Zc=n}function x0(n){return Zc.loadJS(n)}function M0(){return Zc.gapiScript}function L0(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function F0(n,e){const t=fc(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(yr(i,e??{}))return s;Yt(s,"already-initialized")}return t.initialize({options:e})}function U0(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(cn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function B0(n,e,t){const r=ya(n);se(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Fm(e),{host:a,port:l}=j0(e),c=l===null?"":`:${l}`,h={url:`${i}//${a}${c}/`},d=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){se(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),se(yr(h,r.config.emulator)&&yr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,ss(a)?(Np(`${i}//${a}${c}`),Op("Auth",!0)):$0()}function Fm(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function j0(n){const e=Fm(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:td(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:td(a)}}}function td(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function $0(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Um{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ln("not implemented")}_getIdTokenResponse(e){return ln("not implemented")}_linkToIdToken(e,t){return ln("not implemented")}_getReauthenticationResolver(e){return ln("not implemented")}}/**
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
 */async function Gr(n,e){return _0(n,"POST","/v1/accounts:signInWithIdp",Jc(n,e))}/**
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
 */const q0="http://localhost";class Ir extends Um{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ir(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Yt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=Wc(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Ir(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Gr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Gr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Gr(e,t)}buildRequest(){const e={requestUri:q0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=mi(t)}return e}}/**
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
 */class eu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class wi extends eu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class kn extends wi{constructor(){super("facebook.com")}static credential(e){return Ir._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kn.credential(e.oauthAccessToken)}catch{return null}}}kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";kn.PROVIDER_ID="facebook.com";/**
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
 */class an extends wi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ir._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return an.credential(t,r)}catch{return null}}}an.GOOGLE_SIGN_IN_METHOD="google.com";an.PROVIDER_ID="google.com";/**
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
 */class Dn extends wi{constructor(){super("github.com")}static credential(e){return Ir._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dn.credential(e.oauthAccessToken)}catch{return null}}}Dn.GITHUB_SIGN_IN_METHOD="github.com";Dn.PROVIDER_ID="github.com";/**
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
 */class Nn extends wi{constructor(){super("twitter.com")}static credential(e,t){return Ir._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Nn.credential(t,r)}catch{return null}}}Nn.TWITTER_SIGN_IN_METHOD="twitter.com";Nn.PROVIDER_ID="twitter.com";/**
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
 */class rs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await kt._fromIdTokenResponse(e,r,s),a=nd(r);return new rs({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=nd(r);return new rs({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function nd(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Lo extends Tn{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Lo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Lo(e,t,r,s)}}function Bm(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Lo._fromErrorAndOperation(n,i,e,r):i})}async function H0(n,e,t=!1){const r=await hi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return rs._forOperation(n,"link",r)}/**
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
 */async function z0(n,e,t=!1){const{auth:r}=n;if(Ct(r.app))return Promise.reject(_r(r));const s="reauthenticate";try{const i=await hi(n,Bm(r,s,e,n),t);se(i.idToken,r,"internal-error");const a=Yc(i.idToken);se(a,r,"internal-error");const{sub:l}=a;return se(n.uid===l,r,"user-mismatch"),rs._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Yt(r,"user-mismatch"),i}}/**
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
 */async function W0(n,e,t=!1){if(Ct(n.app))return Promise.reject(_r(n));const r="signIn",s=await Bm(n,r,e),i=await rs._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}/**
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
 */function K0(n,e){return at(n).setPersistence(e)}function G0(n,e,t,r){return at(n).onIdTokenChanged(e,t,r)}function Q0(n,e,t){return at(n).beforeAuthStateChanged(e,t)}function J0(n,e,t,r){return at(n).onAuthStateChanged(e,t,r)}function Y0(n){return at(n).signOut()}const Fo="__sak";/**
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
 */class jm{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Fo,"1"),this.storage.removeItem(Fo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const X0=1e3,Z0=10;class $m extends jm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Mm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);P0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Z0):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},X0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}$m.type="LOCAL";const qm=$m;/**
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
 */class Hm extends jm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Hm.type="SESSION";const zm=Hm;/**
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
 */function eb(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class va{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new va(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async h=>h(t.origin,i)),c=await eb(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}va.receivers=[];/**
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
 */function tu(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class tb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,c)=>{const h=tu("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const y=p;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(y.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Kt(){return window}function nb(n){Kt().location.href=n}/**
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
 */function Wm(){return typeof Kt().WorkerGlobalScope<"u"&&typeof Kt().importScripts=="function"}async function rb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sb(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function ib(){return Wm()?self:null}/**
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
 */const Km="firebaseLocalStorageDb",ob=1,Uo="firebaseLocalStorage",Gm="fbase_key";class Ai{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ea(n,e){return n.transaction([Uo],e?"readwrite":"readonly").objectStore(Uo)}function ab(){const n=indexedDB.deleteDatabase(Km);return new Ai(n).toPromise()}function ql(){const n=indexedDB.open(Km,ob);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Uo,{keyPath:Gm})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Uo)?e(r):(r.close(),await ab(),e(await ql()))})})}async function rd(n,e,t){const r=Ea(n,!0).put({[Gm]:e,value:t});return new Ai(r).toPromise()}async function lb(n,e){const t=Ea(n,!1).get(e),r=await new Ai(t).toPromise();return r===void 0?null:r.value}function sd(n,e){const t=Ea(n,!0).delete(e);return new Ai(t).toPromise()}const cb=800,ub=3;class Qm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ql(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>ub)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=va._getInstance(ib()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await rb(),!this.activeServiceWorker)return;this.sender=new tb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ql();return await rd(e,Fo,"1"),await sd(e,Fo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>rd(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>lb(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>sd(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ea(s,!1).getAll();return new Ai(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),cb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Qm.type="LOCAL";const hb=Qm;new Ii(3e4,6e4);/**
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
 */function Jm(n,e){return e?cn(e):(se(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class nu extends Um{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Gr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Gr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function fb(n){return W0(n.auth,new nu(n),n.bypassAuthState)}function db(n){const{auth:e,user:t}=n;return se(t,e,"internal-error"),z0(t,new nu(n),n.bypassAuthState)}async function pb(n){const{auth:e,user:t}=n;return se(t,e,"internal-error"),H0(t,new nu(n),n.bypassAuthState)}/**
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
 */class Ym{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fb;case"linkViaPopup":case"linkViaRedirect":return pb;case"reauthViaPopup":case"reauthViaRedirect":return db;default:Yt(this.auth,"internal-error")}}resolve(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const gb=new Ii(2e3,1e4);async function mb(n,e,t){if(Ct(n.app))return Promise.reject(Nt(n,"operation-not-supported-in-this-environment"));const r=ya(n);u0(n,e,eu);const s=Jm(r,t);return new hr(r,"signInViaPopup",e,s).executeNotNull()}class hr extends Ym{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,hr.currentPopupAction&&hr.currentPopupAction.cancel(),hr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return se(e,this.auth,"internal-error"),e}async onExecution(){vn(this.filter.length===1,"Popup operations only handle one event");const e=tu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,gb.get())};e()}}hr.currentPopupAction=null;/**
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
 */const _b="pendingRedirect",co=new Map;class yb extends Ym{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=co.get(this.auth._key());if(!e){try{const r=await vb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}co.set(this.auth._key(),e)}return this.bypassAuthState||co.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vb(n,e){const t=Ib(e),r=Tb(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function Eb(n,e){co.set(n._key(),e)}function Tb(n){return cn(n._redirectPersistence)}function Ib(n){return lo(_b,n.config.apiKey,n.name)}async function wb(n,e,t=!1){if(Ct(n.app))return Promise.reject(_r(n));const r=ya(n),s=Jm(r,e),a=await new yb(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const Ab=600*1e3;class bb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Sb(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Xm(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Nt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ab&&this.cachedEventUids.clear(),this.cachedEventUids.has(id(e))}saveEventToCache(e){this.cachedEventUids.add(id(e)),this.lastProcessedEventTime=Date.now()}}function id(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Xm({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Sb(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xm(n);default:return!1}}/**
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
 */async function Rb(n,e={}){return hs(n,"GET","/v1/projects",e)}/**
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
 */const Pb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Cb=/^https?/;async function Vb(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Rb(n);for(const t of e)try{if(kb(t))return}catch{}Yt(n,"unauthorized-domain")}function kb(n){const e=jl(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Cb.test(t))return!1;if(Pb.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Db=new Ii(3e4,6e4);function od(){const n=Kt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Nb(n){return new Promise((e,t)=>{var r,s,i;function a(){od(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{od(),t(Nt(n,"network-request-failed"))},timeout:Db.get()})}if(!((s=(r=Kt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Kt().gapi)===null||i===void 0)&&i.load)a();else{const l=L0("iframefcb");return Kt()[l]=()=>{gapi.load?a():t(Nt(n,"network-request-failed"))},x0(`${M0()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw uo=null,e})}let uo=null;function Ob(n){return uo=uo||Nb(n),uo}/**
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
 */const xb=new Ii(5e3,15e3),Mb="__/auth/iframe",Lb="emulator/auth/iframe",Fb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ub=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Bb(n){const e=n.config;se(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Qc(e,Lb):`https://${n.config.authDomain}/${Mb}`,r={apiKey:e.apiKey,appName:n.name,v:is},s=Ub.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${mi(r).slice(1)}`}async function jb(n){const e=await Ob(n),t=Kt().gapi;return se(t,n,"internal-error"),e.open({where:document.body,url:Bb(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Fb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Nt(n,"network-request-failed"),l=Kt().setTimeout(()=>{i(a)},xb.get());function c(){Kt().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(a)})}))}/**
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
 */const $b={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qb=500,Hb=600,zb="_blank",Wb="http://localhost";class ad{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Kb(n,e,t,r=qb,s=Hb){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},$b),{width:r.toString(),height:s.toString(),top:i,left:a}),h=ot().toLowerCase();t&&(l=km(h)?zb:t),Cm(h)&&(e=e||Wb,c.scrollbars="yes");const d=Object.entries(c).reduce((y,[b,V])=>`${y}${b}=${V},`,"");if(R0(h)&&l!=="_self")return Gb(e||"",l),new ad(null);const p=window.open(e||"",l,d);se(p,n,"popup-blocked");try{p.focus()}catch{}return new ad(p)}function Gb(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Qb="__/auth/handler",Jb="emulator/auth/handler",Yb=encodeURIComponent("fac");async function ld(n,e,t,r,s,i){se(n.config.authDomain,n,"auth-domain-config-required"),se(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:is,eventId:s};if(e instanceof eu){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",OE(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))a[d]=p}if(e instanceof wi){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(a.scopes=d.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await n._getAppCheckToken(),h=c?`#${Yb}=${encodeURIComponent(c)}`:"";return`${Xb(n)}?${mi(l).slice(1)}${h}`}function Xb({config:n}){return n.emulator?Qc(n,Jb):`https://${n.authDomain}/${Qb}`}/**
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
 */const sl="webStorageSupport";class Zb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zm,this._completeRedirectFn=wb,this._overrideRedirectResult=Eb}async _openPopup(e,t,r,s){var i;vn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await ld(e,t,r,jl(),s);return Kb(e,a,tu())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await ld(e,t,r,jl(),s);return nb(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(vn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await jb(e),r=new bb(e);return t.register("authEvent",s=>(se(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(sl,{type:sl},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[sl];a!==void 0&&t(!!a),Yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Vb(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Mm()||Vm()||Xc()}}const eS=Zb;var cd="@firebase/auth",ud="1.10.8";/**
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
 */class tS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function nS(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function rS(n){Yr(new vr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;se(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Lm(n)},h=new N0(r,s,i,c);return U0(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Yr(new vr("auth-internal",e=>{const t=ya(e.getProvider("auth").getImmediate());return(r=>new tS(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Fn(cd,ud,nS(n)),Fn(cd,ud,"esm2017")}/**
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
 */const sS=300,iS=Dp("authIdTokenMaxAge")||sS;let hd=null;const oS=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>iS)return;const s=t==null?void 0:t.token;hd!==s&&(hd=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function fd(n=Fp()){const e=fc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=F0(n,{popupRedirectResolver:eS,persistence:[hb,qm,zm]}),r=Dp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=oS(i.toString());Q0(t,a,()=>a(t.currentUser)),G0(t,l=>a(l))}}const s=Vp("auth");return s&&B0(t,`http://${s}`),t}function aS(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}O0({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Nt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",aS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});rS("Browser");const lS={id:"app"},cS={class:"top_of_page_header"},uS={class:"user_signin"},hS={key:0,class:"user-label",style:{color:"white",padding:"2px",cursor:"pointer"}},fS={key:1,class:"hint",style:{color:"white"}},dS={class:"main"},pS={class:"left_side"},gS={class:"user_playlist_window"},mS={class:"user_playlist_header"},_S={class:"player_controls"},yS=["disabled"],vS=["disabled"],ES=["disabled"],TS={class:"user_playlist_video_list"},IS={key:0,style:{padding:"10px",color:"white"}},wS={key:1},AS=["value"],bS={key:0},SS=["onClick"],RS={key:1,style:{color:"white","margin-top":"10px"}},PS={class:"global_playlist"},CS={class:"global_header"},VS={class:"video_list"},kS=["onClick"],DS=["onClick"],NS=vy({__name:"App",setup(n){const e=Br("https://www.youtube.com/embed/vYYW9hPj2TM"),t=Br(!1);let r=null;const s=a0(),i=Br("Sign In with Google"),a=Br(""),l=m=>{a.value=m,setTimeout(()=>{a.value=""},5e3)};Gd(()=>{s.init(),V()});const c=fd();K0(c,qm),J0(c,m=>{m&&s.setUser(m)});const h=m=>{if(e.value=m.url,s.currentmusic=m,s.setCurrentSongIndex(m),r){const v=b(m.url);v&&r.loadVideoById(v)}},d=()=>{const m=s.playNext();if(m&&(e.value=m.url,r)){const v=b(m.url);v&&r.loadVideoById(v)}},p=()=>{const m=s.playPrevious();if(m&&(e.value=m.url,r)){const v=b(m.url);v&&r.loadVideoById(v)}},y=()=>{s.toggleShuffle()},b=m=>{const v=m.match(/(?:embed\/|v=|\/v\/|youtu\.be\/|\/embed\/)([^&\n?#]+)/);return v?v[1]:null},V=()=>{var I;if(window.YT){N();return}const m=document.createElement("script");m.src="https://www.youtube.com/iframe_api";const v=document.getElementsByTagName("script")[0];(I=v.parentNode)==null||I.insertBefore(m,v),window.onYouTubeIframeAPIReady=N},N=()=>{const m=b(e.value);r=new window.YT.Player("youtube-player",{height:"315",width:"560",videoId:m,events:{onReady:L,onStateChange:z}})},L=m=>{console.log("Player ready")},z=m=>{const v=window.YT;m.data===v.PlayerState.PLAYING?t.value=!0:m.data===v.PlayerState.PAUSED?t.value=!1:m.data===v.PlayerState.ENDED&&(t.value=!1,d())},W=()=>{r&&(t.value?r.pauseVideo():r.playVideo())},Q=async()=>{const m=fd();if(i.value==="Sign Out"){await Y0(m),s.setUser(null),i.value="Sign In with Google",l("Signed out successfully");return}try{const v=new an,I=await mb(m,v);s.setUser(I.user),i.value="Sign Out",l(`Signed in as ${I.user.displayName}`)}catch(v){console.error(v),l("Sign in failed")}},q=lc(()=>s.playlistSongs.map(m=>s.music.find(v=>v.id===m.songId)).filter(m=>m!==void 0)),re=async()=>{s.currentPlaylistId&&await s.loadSongsForPlaylist(s.currentPlaylistId)},ge=async()=>{const m=prompt("Enter playlist name:");m&&(await s.createPlaylist(m),await re())},w=async m=>{s.currentPlaylistId&&(await s.addSongToPlaylist(s.currentPlaylistId,m),await re(),console.log("Adding:",m,"Playlist:",s.currentPlaylistId))},_=async()=>{if(!s.query)return;const m=s.searchMusic(s.query);m.length>0&&h(m[0])};return(m,v)=>(ht(),pt("div",lS,[Ie("header",cS,[v[3]||(v[3]=Ie("div",{class:"logo"},"CloudBeat",-1)),Ie("div",uS,[Be(s).user?(ht(),pt("span",hS," Signed in as "+Pt(Be(s).user.displayName),1)):(ht(),pt("span",fS,"Sign in")),Ie("button",{onClick:Q,style:{"background-color":"darkgreen",color:"white",padding:"2px",cursor:"pointer"}},Pt(i.value),1)])]),Ie("main",dS,[Ie("section",pS,[v[4]||(v[4]=Ie("div",{class:"song_window"},[Ie("div",{id:"youtube-player"})],-1)),Ie("div",gS,[Ie("div",mS,[dl(Pt(Be(s).user?Be(s).user.displayName:"Your")+" Playlists ",1),Ie("div",_S,[Ie("button",{onClick:p,style:{"background-color":"darkgreen",color:"white",padding:"2px",cursor:"pointer"},disabled:!Be(s).currentPlaylistId},"Back",8,yS),Ie("button",{onClick:W,style:{"background-color":"darkgreen",color:"white",padding:"2px",cursor:"pointer"}},Pt(t.value?"Pause":"Play"),1),Ie("button",{onClick:y,style:{"background-color":"darkgreen",color:"white",padding:"2px",cursor:"pointer"},disabled:!Be(s).currentPlaylistId},Pt(Be(s).isShuffled?"Shuffle On":"Shuffle Off"),9,vS),Ie("button",{onClick:d,style:{"background-color":"darkgreen",color:"white",padding:"2px",cursor:"pointer"},disabled:!Be(s).currentPlaylistId},"Next",8,ES)])]),Ie("div",TS,[Be(s).user?(ht(),pt("div",wS,[Zu(Ie("select",{"onUpdate:modelValue":v[0]||(v[0]=I=>Be(s).currentPlaylistId=I),onChange:re,style:{width:"100%",padding:"5px","margin-bottom":"10px"}},[(ht(!0),pt(It,null,ja(Be(s).playlists,I=>(ht(),pt("option",{key:I.id,value:I.id},Pt(I.name),9,AS))),128))],544),[[zv,Be(s).currentPlaylistId]]),Ie("button",{onClick:ge,style:{width:"100%","margin-bottom":"10px","background-color":"darkgreen",color:"white",padding:"2px",cursor:"pointer"}}," + Create Playlist "),q.value.length>0?(ht(),pt("div",bS,[(ht(!0),pt(It,null,ja(q.value,I=>(ht(),pt("div",{class:"video_item",key:I.id,onClick:S=>h(I),style:{padding:"2px",cursor:"pointer"}},Pt(I.name)+" — "+Pt(I.author),9,SS))),128))])):(ht(),pt("div",RS," This playlist is empty. "))])):(ht(),pt("div",IS," Please sign in to see your playlists. "))])])]),Ie("section",PS,[Ie("div",CS,[v[5]||(v[5]=dl("Global Music ",-1)),Zu(Ie("input",{"onUpdate:modelValue":v[1]||(v[1]=I=>Be(s).query=I),type:"text",placeholder:"Search for a song"},null,512),[[Hv,Be(s).query]]),Ie("button",{onClick:v[2]||(v[2]=I=>_()),style:{"background-color":"darkgreen",color:"white",padding:"2px",cursor:"pointer"}}," Find Song ")]),Ie("div",VS,[(ht(!0),pt(It,null,ja(Be(s).music,I=>(ht(),pt("div",{class:"video-item",key:I.id},[Ie("p",{onClick:S=>h(I),style:{cursor:"pointer"}},Pt(I.name)+" - "+Pt(I.author),9,kS),Be(s).user&&Be(s).currentPlaylistId?(ht(),pt("button",{key:0,onClick:S=>w(I),style:{"margin-top":"5px","background-color":"darkgreen",color:"white",padding:"2px",cursor:"pointer"}}," + Add to Playlist ",8,DS)):dv("",!0)]))),128))])])]),v[6]||(v[6]=Ie("footer",{class:"footer"}," © 2025 CloudBeat | Can you hear the music? ",-1))]))}}),Zm=Yv();Zm.use(lE);Gv(NS).use(Zm).mount("#app");
