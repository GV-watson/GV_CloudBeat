(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Nc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Ae={},Mr=[],Ft=()=>{},Jf=()=>!1,No=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),xc=n=>n.startsWith("onUpdate:"),st=Object.assign,Mc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},a_=Object.prototype.hasOwnProperty,ve=(n,e)=>a_.call(n,e),se=Array.isArray,Lr=n=>xo(n)==="[object Map]",Xf=n=>xo(n)==="[object Set]",le=n=>typeof n=="function",Me=n=>typeof n=="string",Hn=n=>typeof n=="symbol",Re=n=>n!==null&&typeof n=="object",Yf=n=>(Re(n)||le(n))&&le(n.then)&&le(n.catch),Zf=Object.prototype.toString,xo=n=>Zf.call(n),c_=n=>xo(n).slice(8,-1),ed=n=>xo(n)==="[object Object]",Mo=n=>Me(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Os=Nc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Lo=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},l_=/-\w/g,Mn=Lo(n=>n.replace(l_,e=>e.slice(1).toUpperCase())),u_=/\B([A-Z])/g,yr=Lo(n=>n.replace(u_,"-$1").toLowerCase()),td=Lo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ra=Lo(n=>n?`on${td(n)}`:""),Cn=(n,e)=>!Object.is(n,e),Pa=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},nd=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},h_=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Lu;const Fo=()=>Lu||(Lu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Lc(n){if(se(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=Me(r)?g_(r):Lc(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Me(n)||Re(n))return n}const f_=/;(?![^(]*\))/g,d_=/:([^]+)/,p_=/\/\*[^]*?\*\//g;function g_(n){const e={};return n.replace(p_,"").split(f_).forEach(t=>{if(t){const r=t.split(d_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Fc(n){let e="";if(Me(n))e=n;else if(se(n))for(let t=0;t<n.length;t++){const r=Fc(n[t]);r&&(e+=r+" ")}else if(Re(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const m_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",__=Nc(m_);function rd(n){return!!n||n===""}const sd=n=>!!(n&&n.__v_isRef===!0),Vr=n=>Me(n)?n:n==null?"":se(n)||Re(n)&&(n.toString===Zf||!le(n.toString))?sd(n)?Vr(n.value):JSON.stringify(n,id,2):String(n),id=(n,e)=>sd(e)?id(n,e.value):Lr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,s],i)=>(t[Ca(r,i)+" =>"]=s,t),{})}:Xf(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Ca(t))}:Hn(e)?Ca(e):Re(e)&&!se(e)&&!ed(e)?String(e):e,Ca=(n,e="")=>{var t;return Hn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let et;class od{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=et,!e&&et&&(this.index=(et.scopes||(et.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=et;try{return et=this,e()}finally{et=t}}}on(){++this._on===1&&(this.prevScope=et,et=this)}off(){this._on>0&&--this._on===0&&(et=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function ad(n){return new od(n)}function cd(){return et}function y_(n,e=!1){et&&et.cleanups.push(n)}let we;const Va=new WeakSet;class ld{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,et&&et.active&&et.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Va.has(this)&&(Va.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||hd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Fu(this),fd(this);const e=we,t=St;we=this,St=!0;try{return this.fn()}finally{dd(this),we=e,St=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)jc(e);this.deps=this.depsTail=void 0,Fu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Va.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ja(this)&&this.run()}get dirty(){return Ja(this)}}let ud=0,Ns,xs;function hd(n,e=!1){if(n.flags|=8,e){n.next=xs,xs=n;return}n.next=Ns,Ns=n}function Uc(){ud++}function Bc(){if(--ud>0)return;if(xs){let e=xs;for(xs=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Ns;){let e=Ns;for(Ns=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function fd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function dd(n){let e,t=n.depsTail,r=t;for(;r;){const s=r.prevDep;r.version===-1?(r===t&&(t=s),jc(r),v_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}n.deps=e,n.depsTail=t}function Ja(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(pd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function pd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Qs)||(n.globalVersion=Qs,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Ja(n))))return;n.flags|=2;const e=n.dep,t=we,r=St;we=n,St=!0;try{fd(n);const s=n.fn(n._value);(e.version===0||Cn(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{we=t,St=r,dd(n),n.flags&=-3}}function jc(n,e=!1){const{dep:t,prevSub:r,nextSub:s}=n;if(r&&(r.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)jc(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function v_(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let St=!0;const gd=[];function on(){gd.push(St),St=!1}function an(){const n=gd.pop();St=n===void 0?!0:n}function Fu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=we;we=void 0;try{e()}finally{we=t}}}let Qs=0;class E_{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class $c{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!we||!St||we===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==we)t=this.activeLink=new E_(we,this),we.deps?(t.prevDep=we.depsTail,we.depsTail.nextDep=t,we.depsTail=t):we.deps=we.depsTail=t,md(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=we.depsTail,t.nextDep=void 0,we.depsTail.nextDep=t,we.depsTail=t,we.deps===t&&(we.deps=r)}return t}trigger(e){this.version++,Qs++,this.notify(e)}notify(e){Uc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Bc()}}}function md(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)md(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const ao=new WeakMap,or=Symbol(""),Xa=Symbol(""),Js=Symbol("");function nt(n,e,t){if(St&&we){let r=ao.get(n);r||ao.set(n,r=new Map);let s=r.get(t);s||(r.set(t,s=new $c),s.map=r,s.key=t),s.track()}}function Zt(n,e,t,r,s,i){const a=ao.get(n);if(!a){Qs++;return}const c=l=>{l&&l.trigger()};if(Uc(),e==="clear")a.forEach(c);else{const l=se(n),h=l&&Mo(t);if(l&&t==="length"){const d=Number(r);a.forEach((p,_)=>{(_==="length"||_===Js||!Hn(_)&&_>=d)&&c(p)})}else switch((t!==void 0||a.has(void 0))&&c(a.get(t)),h&&c(a.get(Js)),e){case"add":l?h&&c(a.get("length")):(c(a.get(or)),Lr(n)&&c(a.get(Xa)));break;case"delete":l||(c(a.get(or)),Lr(n)&&c(a.get(Xa)));break;case"set":Lr(n)&&c(a.get(or));break}}Bc()}function T_(n,e){const t=ao.get(n);return t&&t.get(e)}function Pr(n){const e=_e(n);return e===n?e:(nt(e,"iterate",Js),mt(n)?e:e.map(Pt))}function Uo(n){return nt(n=_e(n),"iterate",Js),n}function Tn(n,e){return cn(n)?rn(n)?qr(Pt(e)):qr(e):Pt(e)}const I_={__proto__:null,[Symbol.iterator](){return Da(this,Symbol.iterator,n=>Tn(this,n))},concat(...n){return Pr(this).concat(...n.map(e=>se(e)?Pr(e):e))},entries(){return Da(this,"entries",n=>(n[1]=Tn(this,n[1]),n))},every(n,e){return Xt(this,"every",n,e,void 0,arguments)},filter(n,e){return Xt(this,"filter",n,e,t=>t.map(r=>Tn(this,r)),arguments)},find(n,e){return Xt(this,"find",n,e,t=>Tn(this,t),arguments)},findIndex(n,e){return Xt(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Xt(this,"findLast",n,e,t=>Tn(this,t),arguments)},findLastIndex(n,e){return Xt(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Xt(this,"forEach",n,e,void 0,arguments)},includes(...n){return ka(this,"includes",n)},indexOf(...n){return ka(this,"indexOf",n)},join(n){return Pr(this).join(n)},lastIndexOf(...n){return ka(this,"lastIndexOf",n)},map(n,e){return Xt(this,"map",n,e,void 0,arguments)},pop(){return Is(this,"pop")},push(...n){return Is(this,"push",n)},reduce(n,...e){return Uu(this,"reduce",n,e)},reduceRight(n,...e){return Uu(this,"reduceRight",n,e)},shift(){return Is(this,"shift")},some(n,e){return Xt(this,"some",n,e,void 0,arguments)},splice(...n){return Is(this,"splice",n)},toReversed(){return Pr(this).toReversed()},toSorted(n){return Pr(this).toSorted(n)},toSpliced(...n){return Pr(this).toSpliced(...n)},unshift(...n){return Is(this,"unshift",n)},values(){return Da(this,"values",n=>Tn(this,n))}};function Da(n,e,t){const r=Uo(n),s=r[e]();return r!==n&&!mt(n)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=t(i.value)),i}),s}const w_=Array.prototype;function Xt(n,e,t,r,s,i){const a=Uo(n),c=a!==n&&!mt(n),l=a[e];if(l!==w_[e]){const p=l.apply(n,i);return c?Pt(p):p}let h=t;a!==n&&(c?h=function(p,_){return t.call(this,Tn(n,p),_,n)}:t.length>2&&(h=function(p,_){return t.call(this,p,_,n)}));const d=l.call(a,h,r);return c&&s?s(d):d}function Uu(n,e,t,r){const s=Uo(n);let i=t;return s!==n&&(mt(n)?t.length>3&&(i=function(a,c,l){return t.call(this,a,c,l,n)}):i=function(a,c,l){return t.call(this,a,Tn(n,c),l,n)}),s[e](i,...r)}function ka(n,e,t){const r=_e(n);nt(r,"iterate",Js);const s=r[e](...t);return(s===-1||s===!1)&&jo(t[0])?(t[0]=_e(t[0]),r[e](...t)):s}function Is(n,e,t=[]){on(),Uc();const r=_e(n)[e].apply(n,t);return Bc(),an(),r}const A_=Nc("__proto__,__v_isRef,__isVue"),_d=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Hn));function b_(n){Hn(n)||(n=String(n));const e=_e(this);return nt(e,"has",n),e.hasOwnProperty(n)}class yd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(s?i?x_:Id:i?Td:Ed).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=se(e);if(!s){let l;if(a&&(l=I_[t]))return l;if(t==="hasOwnProperty")return b_}const c=Reflect.get(e,t,De(e)?e:r);if((Hn(t)?_d.has(t):A_(t))||(s||nt(e,"get",t),i))return c;if(De(c)){const l=a&&Mo(t)?c:c.value;return s&&Re(l)?Za(l):l}return Re(c)?s?Za(c):Bo(c):c}}class vd extends yd{constructor(e=!1){super(!1,e)}set(e,t,r,s){let i=e[t];const a=se(e)&&Mo(t);if(!this._isShallow){const h=cn(i);if(!mt(r)&&!cn(r)&&(i=_e(i),r=_e(r)),!a&&De(i)&&!De(r))return h||(i.value=r),!0}const c=a?Number(t)<e.length:ve(e,t),l=Reflect.set(e,t,r,De(e)?e:s);return e===_e(s)&&(c?Cn(r,i)&&Zt(e,"set",t,r):Zt(e,"add",t,r)),l}deleteProperty(e,t){const r=ve(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&r&&Zt(e,"delete",t,void 0),s}has(e,t){const r=Reflect.has(e,t);return(!Hn(t)||!_d.has(t))&&nt(e,"has",t),r}ownKeys(e){return nt(e,"iterate",se(e)?"length":or),Reflect.ownKeys(e)}}class S_ extends yd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const R_=new vd,P_=new S_,C_=new vd(!0);const Ya=n=>n,Ui=n=>Reflect.getPrototypeOf(n);function V_(n,e,t){return function(...r){const s=this.__v_raw,i=_e(s),a=Lr(i),c=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,h=s[n](...r),d=t?Ya:e?qr:Pt;return!e&&nt(i,"iterate",l?Xa:or),{next(){const{value:p,done:_}=h.next();return _?{value:p,done:_}:{value:c?[d(p[0]),d(p[1])]:d(p),done:_}},[Symbol.iterator](){return this}}}}function Bi(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function D_(n,e){const t={get(s){const i=this.__v_raw,a=_e(i),c=_e(s);n||(Cn(s,c)&&nt(a,"get",s),nt(a,"get",c));const{has:l}=Ui(a),h=e?Ya:n?qr:Pt;if(l.call(a,s))return h(i.get(s));if(l.call(a,c))return h(i.get(c));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!n&&nt(_e(s),"iterate",or),s.size},has(s){const i=this.__v_raw,a=_e(i),c=_e(s);return n||(Cn(s,c)&&nt(a,"has",s),nt(a,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const a=this,c=a.__v_raw,l=_e(c),h=e?Ya:n?qr:Pt;return!n&&nt(l,"iterate",or),c.forEach((d,p)=>s.call(i,h(d),h(p),a))}};return st(t,n?{add:Bi("add"),set:Bi("set"),delete:Bi("delete"),clear:Bi("clear")}:{add(s){!e&&!mt(s)&&!cn(s)&&(s=_e(s));const i=_e(this);return Ui(i).has.call(i,s)||(i.add(s),Zt(i,"add",s,s)),this},set(s,i){!e&&!mt(i)&&!cn(i)&&(i=_e(i));const a=_e(this),{has:c,get:l}=Ui(a);let h=c.call(a,s);h||(s=_e(s),h=c.call(a,s));const d=l.call(a,s);return a.set(s,i),h?Cn(i,d)&&Zt(a,"set",s,i):Zt(a,"add",s,i),this},delete(s){const i=_e(this),{has:a,get:c}=Ui(i);let l=a.call(i,s);l||(s=_e(s),l=a.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&Zt(i,"delete",s,void 0),h},clear(){const s=_e(this),i=s.size!==0,a=s.clear();return i&&Zt(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=V_(s,n,e)}),t}function qc(n,e){const t=D_(n,e);return(r,s,i)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(ve(t,s)&&s in r?t:r,s,i)}const k_={get:qc(!1,!1)},O_={get:qc(!1,!0)},N_={get:qc(!0,!1)};const Ed=new WeakMap,Td=new WeakMap,Id=new WeakMap,x_=new WeakMap;function M_(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function L_(n){return n.__v_skip||!Object.isExtensible(n)?0:M_(c_(n))}function Bo(n){return cn(n)?n:Hc(n,!1,R_,k_,Ed)}function F_(n){return Hc(n,!1,C_,O_,Td)}function Za(n){return Hc(n,!0,P_,N_,Id)}function Hc(n,e,t,r,s){if(!Re(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=L_(n);if(i===0)return n;const a=s.get(n);if(a)return a;const c=new Proxy(n,i===2?r:t);return s.set(n,c),c}function rn(n){return cn(n)?rn(n.__v_raw):!!(n&&n.__v_isReactive)}function cn(n){return!!(n&&n.__v_isReadonly)}function mt(n){return!!(n&&n.__v_isShallow)}function jo(n){return n?!!n.__v_raw:!1}function _e(n){const e=n&&n.__v_raw;return e?_e(e):n}function zc(n){return!ve(n,"__v_skip")&&Object.isExtensible(n)&&nd(n,"__v_skip",!0),n}const Pt=n=>Re(n)?Bo(n):n,qr=n=>Re(n)?Za(n):n;function De(n){return n?n.__v_isRef===!0:!1}function Ms(n){return U_(n,!1)}function U_(n,e){return De(n)?n:new B_(n,e)}class B_{constructor(e,t){this.dep=new $c,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:_e(e),this._value=t?e:Pt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||mt(e)||cn(e);e=r?e:_e(e),Cn(e,t)&&(this._rawValue=e,this._value=r?e:Pt(e),this.dep.trigger())}}function rr(n){return De(n)?n.value:n}const j_={get:(n,e,t)=>e==="__v_raw"?n:rr(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return De(s)&&!De(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function wd(n){return rn(n)?n:new Proxy(n,j_)}function $_(n){const e=se(n)?new Array(n.length):{};for(const t in n)e[t]=H_(n,t);return e}class q_{constructor(e,t,r){this._object=e,this._key=t,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._raw=_e(e);let s=!0,i=e;if(!se(e)||!Mo(String(t)))do s=!jo(i)||mt(i);while(s&&(i=i.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=rr(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&De(this._raw[this._key])){const t=this._object[this._key];if(De(t)){t.value=e;return}}this._object[this._key]=e}get dep(){return T_(this._raw,this._key)}}function H_(n,e,t){return new q_(n,e,t)}class z_{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new $c(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Qs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&we!==this)return hd(this,!0),!0}get value(){const e=this.dep.track();return pd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function W_(n,e,t=!1){let r,s;return le(n)?r=n:(r=n.get,s=n.set),new z_(r,s,t)}const ji={},co=new WeakMap;let tr;function G_(n,e=!1,t=tr){if(t){let r=co.get(t);r||co.set(t,r=[]),r.push(n)}}function K_(n,e,t=Ae){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:c,call:l}=t,h=H=>s?H:mt(H)||s===!1||s===0?An(H,1):An(H);let d,p,_,b,V=!1,N=!1;if(De(n)?(p=()=>n.value,V=mt(n)):rn(n)?(p=()=>h(n),V=!0):se(n)?(N=!0,V=n.some(H=>rn(H)||mt(H)),p=()=>n.map(H=>{if(De(H))return H.value;if(rn(H))return h(H);if(le(H))return l?l(H,2):H()})):le(n)?e?p=l?()=>l(n,2):n:p=()=>{if(_){on();try{_()}finally{an()}}const H=tr;tr=d;try{return l?l(n,3,[b]):n(b)}finally{tr=H}}:p=Ft,e&&s){const H=p,oe=s===!0?1/0:s;p=()=>An(H(),oe)}const L=cd(),z=()=>{d.stop(),L&&L.active&&Mc(L.effects,d)};if(i&&e){const H=e;e=(...oe)=>{H(...oe),z()}}let K=N?new Array(n.length).fill(ji):ji;const Q=H=>{if(!(!(d.flags&1)||!d.dirty&&!H))if(e){const oe=d.run();if(s||V||(N?oe.some((ye,I)=>Cn(ye,K[I])):Cn(oe,K))){_&&_();const ye=tr;tr=d;try{const I=[oe,K===ji?void 0:N&&K[0]===ji?[]:K,b];K=oe,l?l(e,3,I):e(...I)}finally{tr=ye}}}else d.run()};return c&&c(Q),d=new ld(p),d.scheduler=a?()=>a(Q,!1):Q,b=H=>G_(H,!1,d),_=d.onStop=()=>{const H=co.get(d);if(H){if(l)l(H,4);else for(const oe of H)oe();co.delete(d)}},e?r?Q(!0):K=d.run():a?a(Q.bind(null,!0),!0):d.run(),z.pause=d.pause.bind(d),z.resume=d.resume.bind(d),z.stop=z,z}function An(n,e=1/0,t){if(e<=0||!Re(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,De(n))An(n.value,e,t);else if(se(n))for(let r=0;r<n.length;r++)An(n[r],e,t);else if(Xf(n)||Lr(n))n.forEach(r=>{An(r,e,t)});else if(ed(n)){for(const r in n)An(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&An(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ui(n,e,t,r){try{return r?n(...r):n()}catch(s){$o(s,e,t)}}function Ht(n,e,t,r){if(le(n)){const s=ui(n,e,t,r);return s&&Yf(s)&&s.catch(i=>{$o(i,e,t)}),s}if(se(n)){const s=[];for(let i=0;i<n.length;i++)s.push(Ht(n[i],e,t,r));return s}}function $o(n,e,t,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Ae;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${t}`;for(;c;){const d=c.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](n,l,h)===!1)return}c=c.parent}if(i){on(),ui(i,null,10,[n,l,h]),an();return}}Q_(n,t,s,r,a)}function Q_(n,e,t,r=!0,s=!1){if(s)throw n;console.error(n)}const lt=[];let Ot=-1;const Fr=[];let In=null,Dr=0;const Ad=Promise.resolve();let lo=null;function bd(n){const e=lo||Ad;return n?e.then(this?n.bind(this):n):e}function J_(n){let e=Ot+1,t=lt.length;for(;e<t;){const r=e+t>>>1,s=lt[r],i=Xs(s);i<n||i===n&&s.flags&2?e=r+1:t=r}return e}function Wc(n){if(!(n.flags&1)){const e=Xs(n),t=lt[lt.length-1];!t||!(n.flags&2)&&e>=Xs(t)?lt.push(n):lt.splice(J_(e),0,n),n.flags|=1,Sd()}}function Sd(){lo||(lo=Ad.then(Pd))}function X_(n){se(n)?Fr.push(...n):In&&n.id===-1?In.splice(Dr+1,0,n):n.flags&1||(Fr.push(n),n.flags|=1),Sd()}function Bu(n,e,t=Ot+1){for(;t<lt.length;t++){const r=lt[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;lt.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Rd(n){if(Fr.length){const e=[...new Set(Fr)].sort((t,r)=>Xs(t)-Xs(r));if(Fr.length=0,In){In.push(...e);return}for(In=e,Dr=0;Dr<In.length;Dr++){const t=In[Dr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}In=null,Dr=0}}const Xs=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Pd(n){try{for(Ot=0;Ot<lt.length;Ot++){const e=lt[Ot];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ui(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ot<lt.length;Ot++){const e=lt[Ot];e&&(e.flags&=-2)}Ot=-1,lt.length=0,Rd(),lo=null,(lt.length||Fr.length)&&Pd()}}let Lt=null,Cd=null;function uo(n){const e=Lt;return Lt=n,Cd=n&&n.type.__scopeId||null,e}function Y_(n,e=Lt,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&Ju(-1);const i=uo(e);let a;try{a=n(...s)}finally{uo(i),r._d&&Ju(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Zn(n,e,t,r){const s=n.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const c=s[a];i&&(c.oldValue=i[a].value);let l=c.dir[r];l&&(on(),Ht(l,t,8,[n.el,c,n,e]),an())}}const Z_=Symbol("_vte"),ey=n=>n.__isTeleport,ty=Symbol("_leaveCb");function Gc(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Gc(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function ny(n,e){return le(n)?st({name:n.name},e,{setup:n}):n}function Vd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const ho=new WeakMap;function Ls(n,e,t,r,s=!1){if(se(n)){n.forEach((V,N)=>Ls(V,e&&(se(e)?e[N]:e),t,r,s));return}if(Fs(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ls(n,e,t,r.component.subTree);return}const i=r.shapeFlag&4?Xc(r.component):r.el,a=s?null:i,{i:c,r:l}=n,h=e&&e.r,d=c.refs===Ae?c.refs={}:c.refs,p=c.setupState,_=_e(p),b=p===Ae?Jf:V=>ve(_,V);if(h!=null&&h!==l){if(ju(e),Me(h))d[h]=null,b(h)&&(p[h]=null);else if(De(h)){h.value=null;const V=e;V.k&&(d[V.k]=null)}}if(le(l))ui(l,c,12,[a,d]);else{const V=Me(l),N=De(l);if(V||N){const L=()=>{if(n.f){const z=V?b(l)?p[l]:d[l]:l.value;if(s)se(z)&&Mc(z,i);else if(se(z))z.includes(i)||z.push(i);else if(V)d[l]=[i],b(l)&&(p[l]=d[l]);else{const K=[i];l.value=K,n.k&&(d[n.k]=K)}}else V?(d[l]=a,b(l)&&(p[l]=a)):N&&(l.value=a,n.k&&(d[n.k]=a))};if(a){const z=()=>{L(),ho.delete(n)};z.id=-1,ho.set(n,z),pt(z,t)}else ju(n),L()}}}function ju(n){const e=ho.get(n);e&&(e.flags|=8,ho.delete(n))}Fo().requestIdleCallback;Fo().cancelIdleCallback;const Fs=n=>!!n.type.__asyncLoader,Dd=n=>n.type.__isKeepAlive;function ry(n,e){kd(n,"a",e)}function sy(n,e){kd(n,"da",e)}function kd(n,e,t=ut){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(qo(e,r,t),t){let s=t.parent;for(;s&&s.parent;)Dd(s.parent.vnode)&&iy(r,e,t,s),s=s.parent}}function iy(n,e,t,r){const s=qo(e,n,r,!0);Nd(()=>{Mc(r[e],s)},t)}function qo(n,e,t=ut,r=!1){if(t){const s=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...a)=>{on();const c=hi(t),l=Ht(e,t,n,a);return c(),an(),l});return r?s.unshift(i):s.push(i),i}}const dn=n=>(e,t=ut)=>{(!Zs||n==="sp")&&qo(n,(...r)=>e(...r),t)},oy=dn("bm"),Od=dn("m"),ay=dn("bu"),cy=dn("u"),ly=dn("bum"),Nd=dn("um"),uy=dn("sp"),hy=dn("rtg"),fy=dn("rtc");function dy(n,e=ut){qo("ec",n,e)}const py=Symbol.for("v-ndc");function gy(n,e,t,r){let s;const i=t,a=se(n);if(a||Me(n)){const c=a&&rn(n);let l=!1,h=!1;c&&(l=!mt(n),h=cn(n),n=Uo(n)),s=new Array(n.length);for(let d=0,p=n.length;d<p;d++)s[d]=e(l?h?qr(Pt(n[d])):Pt(n[d]):n[d],d,void 0,i)}else if(typeof n=="number"){s=new Array(n);for(let c=0;c<n;c++)s[c]=e(c+1,c,void 0,i)}else if(Re(n))if(n[Symbol.iterator])s=Array.from(n,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(n);s=new Array(c.length);for(let l=0,h=c.length;l<h;l++){const d=c[l];s[l]=e(n[d],d,l,i)}}else s=[];return s}const ec=n=>n?tp(n)?Xc(n):ec(n.parent):null,Us=st(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>ec(n.parent),$root:n=>ec(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Md(n),$forceUpdate:n=>n.f||(n.f=()=>{Wc(n.update)}),$nextTick:n=>n.n||(n.n=bd.bind(n.proxy)),$watch:n=>Py.bind(n)}),Oa=(n,e)=>n!==Ae&&!n.__isScriptSetup&&ve(n,e),my={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:i,accessCache:a,type:c,appContext:l}=n;if(e[0]!=="$"){const _=a[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return i[e]}else{if(Oa(r,e))return a[e]=1,r[e];if(s!==Ae&&ve(s,e))return a[e]=2,s[e];if(ve(i,e))return a[e]=3,i[e];if(t!==Ae&&ve(t,e))return a[e]=4,t[e];tc&&(a[e]=0)}}const h=Us[e];let d,p;if(h)return e==="$attrs"&&nt(n.attrs,"get",""),h(n);if((d=c.__cssModules)&&(d=d[e]))return d;if(t!==Ae&&ve(t,e))return a[e]=4,t[e];if(p=l.config.globalProperties,ve(p,e))return p[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:i}=n;return Oa(s,e)?(s[e]=t,!0):r!==Ae&&ve(r,e)?(r[e]=t,!0):ve(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,props:i,type:a}},c){let l;return!!(t[c]||n!==Ae&&c[0]!=="$"&&ve(n,c)||Oa(e,c)||ve(i,c)||ve(r,c)||ve(Us,c)||ve(s.config.globalProperties,c)||(l=a.__cssModules)&&l[c])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ve(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function $u(n){return se(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let tc=!0;function _y(n){const e=Md(n),t=n.proxy,r=n.ctx;tc=!1,e.beforeCreate&&qu(e.beforeCreate,n,"bc");const{data:s,computed:i,methods:a,watch:c,provide:l,inject:h,created:d,beforeMount:p,mounted:_,beforeUpdate:b,updated:V,activated:N,deactivated:L,beforeDestroy:z,beforeUnmount:K,destroyed:Q,unmounted:H,render:oe,renderTracked:ye,renderTriggered:I,errorCaptured:m,serverPrefetch:y,expose:T,inheritAttrs:w,components:S,directives:E,filters:ot}=e;if(h&&yy(h,r,null),a)for(const ae in a){const ge=a[ae];le(ge)&&(r[ae]=ge.bind(t))}if(s){const ae=s.call(t,t);Re(ae)&&(n.data=Bo(ae))}if(tc=!0,i)for(const ae in i){const ge=i[ae],Tt=le(ge)?ge.bind(t,t):le(ge.get)?ge.get.bind(t,t):Ft,Wn=!le(ge)&&le(ge.set)?ge.set.bind(t):Ft,Gt=rp({get:Tt,set:Wn});Object.defineProperty(r,ae,{enumerable:!0,configurable:!0,get:()=>Gt.value,set:Le=>Gt.value=Le})}if(c)for(const ae in c)xd(c[ae],r,t,ae);if(l){const ae=le(l)?l.call(t):l;Reflect.ownKeys(ae).forEach(ge=>{Ay(ge,ae[ge])})}d&&qu(d,n,"c");function Pe(ae,ge){se(ge)?ge.forEach(Tt=>ae(Tt.bind(t))):ge&&ae(ge.bind(t))}if(Pe(oy,p),Pe(Od,_),Pe(ay,b),Pe(cy,V),Pe(ry,N),Pe(sy,L),Pe(dy,m),Pe(fy,ye),Pe(hy,I),Pe(ly,K),Pe(Nd,H),Pe(uy,y),se(T))if(T.length){const ae=n.exposed||(n.exposed={});T.forEach(ge=>{Object.defineProperty(ae,ge,{get:()=>t[ge],set:Tt=>t[ge]=Tt,enumerable:!0})})}else n.exposed||(n.exposed={});oe&&n.render===Ft&&(n.render=oe),w!=null&&(n.inheritAttrs=w),S&&(n.components=S),E&&(n.directives=E),y&&Vd(n)}function yy(n,e,t=Ft){se(n)&&(n=nc(n));for(const r in n){const s=n[r];let i;Re(s)?"default"in s?i=Bs(s.from||r,s.default,!0):i=Bs(s.from||r):i=Bs(s),De(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function qu(n,e,t){Ht(se(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function xd(n,e,t,r){let s=r.includes(".")?Ud(t,r):()=>t[r];if(Me(n)){const i=e[n];le(i)&&Ki(s,i)}else if(le(n))Ki(s,n.bind(t));else if(Re(n))if(se(n))n.forEach(i=>xd(i,e,t,r));else{const i=le(n.handler)?n.handler.bind(t):e[n.handler];le(i)&&Ki(s,i,n)}}function Md(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=n.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!t&&!r?l=e:(l={},s.length&&s.forEach(h=>fo(l,h,a,!0)),fo(l,e,a)),Re(e)&&i.set(e,l),l}function fo(n,e,t,r=!1){const{mixins:s,extends:i}=e;i&&fo(n,i,t,!0),s&&s.forEach(a=>fo(n,a,t,!0));for(const a in e)if(!(r&&a==="expose")){const c=vy[a]||t&&t[a];n[a]=c?c(n[a],e[a]):e[a]}return n}const vy={data:Hu,props:zu,emits:zu,methods:Ps,computed:Ps,beforeCreate:ct,created:ct,beforeMount:ct,mounted:ct,beforeUpdate:ct,updated:ct,beforeDestroy:ct,beforeUnmount:ct,destroyed:ct,unmounted:ct,activated:ct,deactivated:ct,errorCaptured:ct,serverPrefetch:ct,components:Ps,directives:Ps,watch:Ty,provide:Hu,inject:Ey};function Hu(n,e){return e?n?function(){return st(le(n)?n.call(this,this):n,le(e)?e.call(this,this):e)}:e:n}function Ey(n,e){return Ps(nc(n),nc(e))}function nc(n){if(se(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function ct(n,e){return n?[...new Set([].concat(n,e))]:e}function Ps(n,e){return n?st(Object.create(null),n,e):e}function zu(n,e){return n?se(n)&&se(e)?[...new Set([...n,...e])]:st(Object.create(null),$u(n),$u(e??{})):e}function Ty(n,e){if(!n)return e;if(!e)return n;const t=st(Object.create(null),n);for(const r in e)t[r]=ct(n[r],e[r]);return t}function Ld(){return{app:null,config:{isNativeTag:Jf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Iy=0;function wy(n,e){return function(r,s=null){le(r)||(r=st({},r)),s!=null&&!Re(s)&&(s=null);const i=Ld(),a=new WeakSet,c=[];let l=!1;const h=i.app={_uid:Iy++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:av,get config(){return i.config},set config(d){},use(d,...p){return a.has(d)||(d&&le(d.install)?(a.add(d),d.install(h,...p)):le(d)&&(a.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,_){if(!l){const b=h._ceVNode||cr(r,s);return b.appContext=i,_===!0?_="svg":_===!1&&(_=void 0),n(b,d,_),l=!0,h._container=d,d.__vue_app__=h,Xc(b.component)}},onUnmount(d){c.push(d)},unmount(){l&&(Ht(c,h._instance,16),n(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=ar;ar=h;try{return d()}finally{ar=p}}};return h}}let ar=null;function Ay(n,e){if(ut){let t=ut.provides;const r=ut.parent&&ut.parent.provides;r===t&&(t=ut.provides=Object.create(r)),t[n]=e}}function Bs(n,e,t=!1){const r=ep();if(r||ar){let s=ar?ar._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&le(e)?e.call(r&&r.proxy):e}}function by(){return!!(ep()||ar)}const Sy=Symbol.for("v-scx"),Ry=()=>Bs(Sy);function Ki(n,e,t){return Fd(n,e,t)}function Fd(n,e,t=Ae){const{immediate:r,deep:s,flush:i,once:a}=t,c=st({},t),l=e&&r||!e&&i!=="post";let h;if(Zs){if(i==="sync"){const b=Ry();h=b.__watcherHandles||(b.__watcherHandles=[])}else if(!l){const b=()=>{};return b.stop=Ft,b.resume=Ft,b.pause=Ft,b}}const d=ut;c.call=(b,V,N)=>Ht(b,d,V,N);let p=!1;i==="post"?c.scheduler=b=>{pt(b,d&&d.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(b,V)=>{V?b():Wc(b)}),c.augmentJob=b=>{e&&(b.flags|=4),p&&(b.flags|=2,d&&(b.id=d.uid,b.i=d))};const _=K_(n,e,c);return Zs&&(h?h.push(_):l&&_()),_}function Py(n,e,t){const r=this.proxy,s=Me(n)?n.includes(".")?Ud(r,n):()=>r[n]:n.bind(r,r);let i;le(e)?i=e:(i=e.handler,t=e);const a=hi(this),c=Fd(s,i.bind(r),t);return a(),c}function Ud(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const Cy=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Mn(e)}Modifiers`]||n[`${yr(e)}Modifiers`];function Vy(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||Ae;let s=t;const i=e.startsWith("update:"),a=i&&Cy(r,e.slice(7));a&&(a.trim&&(s=t.map(d=>Me(d)?d.trim():d)),a.number&&(s=t.map(h_)));let c,l=r[c=Ra(e)]||r[c=Ra(Mn(e))];!l&&i&&(l=r[c=Ra(yr(e))]),l&&Ht(l,n,6,s);const h=r[c+"Once"];if(h){if(!n.emitted)n.emitted={};else if(n.emitted[c])return;n.emitted[c]=!0,Ht(h,n,6,s)}}const Dy=new WeakMap;function Bd(n,e,t=!1){const r=t?Dy:e.emitsCache,s=r.get(n);if(s!==void 0)return s;const i=n.emits;let a={},c=!1;if(!le(n)){const l=h=>{const d=Bd(h,e,!0);d&&(c=!0,st(a,d))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!i&&!c?(Re(n)&&r.set(n,null),null):(se(i)?i.forEach(l=>a[l]=null):st(a,i),Re(n)&&r.set(n,a),a)}function Ho(n,e){return!n||!No(e)?!1:(e=e.slice(2).replace(/Once$/,""),ve(n,e[0].toLowerCase()+e.slice(1))||ve(n,yr(e))||ve(n,e))}function Wu(n){const{type:e,vnode:t,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:c,emit:l,render:h,renderCache:d,props:p,data:_,setupState:b,ctx:V,inheritAttrs:N}=n,L=uo(n);let z,K;try{if(t.shapeFlag&4){const H=s||r,oe=H;z=Mt(h.call(oe,H,d,p,b,_,V)),K=c}else{const H=e;z=Mt(H.length>1?H(p,{attrs:c,slots:a,emit:l}):H(p,null)),K=e.props?c:ky(c)}}catch(H){js.length=0,$o(H,n,1),z=cr(Hr)}let Q=z;if(K&&N!==!1){const H=Object.keys(K),{shapeFlag:oe}=Q;H.length&&oe&7&&(i&&H.some(xc)&&(K=Oy(K,i)),Q=zr(Q,K,!1,!0))}return t.dirs&&(Q=zr(Q,null,!1,!0),Q.dirs=Q.dirs?Q.dirs.concat(t.dirs):t.dirs),t.transition&&Gc(Q,t.transition),z=Q,uo(L),z}const ky=n=>{let e;for(const t in n)(t==="class"||t==="style"||No(t))&&((e||(e={}))[t]=n[t]);return e},Oy=(n,e)=>{const t={};for(const r in n)(!xc(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function Ny(n,e,t){const{props:r,children:s,component:i}=n,{props:a,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return r?Gu(r,a,h):!!a;if(l&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const _=d[p];if(a[_]!==r[_]&&!Ho(h,_))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===a?!1:r?a?Gu(r,a,h):!0:!!a;return!1}function Gu(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==n[i]&&!Ho(t,i))return!0}return!1}function xy({vnode:n,parent:e},t){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.el=n.el),r===n)(n=e.vnode).el=t,e=e.parent;else break}}const jd={},$d=()=>Object.create(jd),qd=n=>Object.getPrototypeOf(n)===jd;function My(n,e,t,r=!1){const s={},i=$d();n.propsDefaults=Object.create(null),Hd(n,e,s,i);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=r?s:F_(s):n.type.props?n.props=s:n.props=i,n.attrs=i}function Ly(n,e,t,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=n,c=_e(s),[l]=n.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=n.vnode.dynamicProps;for(let p=0;p<d.length;p++){let _=d[p];if(Ho(n.emitsOptions,_))continue;const b=e[_];if(l)if(ve(i,_))b!==i[_]&&(i[_]=b,h=!0);else{const V=Mn(_);s[V]=rc(l,c,V,b,n,!1)}else b!==i[_]&&(i[_]=b,h=!0)}}}else{Hd(n,e,s,i)&&(h=!0);let d;for(const p in c)(!e||!ve(e,p)&&((d=yr(p))===p||!ve(e,d)))&&(l?t&&(t[p]!==void 0||t[d]!==void 0)&&(s[p]=rc(l,c,p,void 0,n,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!ve(e,p))&&(delete i[p],h=!0)}h&&Zt(n.attrs,"set","")}function Hd(n,e,t,r){const[s,i]=n.propsOptions;let a=!1,c;if(e)for(let l in e){if(Os(l))continue;const h=e[l];let d;s&&ve(s,d=Mn(l))?!i||!i.includes(d)?t[d]=h:(c||(c={}))[d]=h:Ho(n.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,a=!0)}if(i){const l=_e(t),h=c||Ae;for(let d=0;d<i.length;d++){const p=i[d];t[p]=rc(s,l,p,h[p],n,!ve(h,p))}}return a}function rc(n,e,t,r,s,i){const a=n[t];if(a!=null){const c=ve(a,"default");if(c&&r===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&le(l)){const{propsDefaults:h}=s;if(t in h)r=h[t];else{const d=hi(s);r=h[t]=l.call(null,e),d()}}else r=l;s.ce&&s.ce._setProp(t,r)}a[0]&&(i&&!c?r=!1:a[1]&&(r===""||r===yr(t))&&(r=!0))}return r}const Fy=new WeakMap;function zd(n,e,t=!1){const r=t?Fy:e.propsCache,s=r.get(n);if(s)return s;const i=n.props,a={},c=[];let l=!1;if(!le(n)){const d=p=>{l=!0;const[_,b]=zd(p,e,!0);st(a,_),b&&c.push(...b)};!t&&e.mixins.length&&e.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!i&&!l)return Re(n)&&r.set(n,Mr),Mr;if(se(i))for(let d=0;d<i.length;d++){const p=Mn(i[d]);Ku(p)&&(a[p]=Ae)}else if(i)for(const d in i){const p=Mn(d);if(Ku(p)){const _=i[d],b=a[p]=se(_)||le(_)?{type:_}:st({},_),V=b.type;let N=!1,L=!0;if(se(V))for(let z=0;z<V.length;++z){const K=V[z],Q=le(K)&&K.name;if(Q==="Boolean"){N=!0;break}else Q==="String"&&(L=!1)}else N=le(V)&&V.name==="Boolean";b[0]=N,b[1]=L,(N||ve(b,"default"))&&c.push(p)}}const h=[a,c];return Re(n)&&r.set(n,h),h}function Ku(n){return n[0]!=="$"&&!Os(n)}const Kc=n=>n==="_"||n==="_ctx"||n==="$stable",Qc=n=>se(n)?n.map(Mt):[Mt(n)],Uy=(n,e,t)=>{if(e._n)return e;const r=Y_((...s)=>Qc(e(...s)),t);return r._c=!1,r},Wd=(n,e,t)=>{const r=n._ctx;for(const s in n){if(Kc(s))continue;const i=n[s];if(le(i))e[s]=Uy(s,i,r);else if(i!=null){const a=Qc(i);e[s]=()=>a}}},Gd=(n,e)=>{const t=Qc(e);n.slots.default=()=>t},Kd=(n,e,t)=>{for(const r in e)(t||!Kc(r))&&(n[r]=e[r])},By=(n,e,t)=>{const r=n.slots=$d();if(n.vnode.shapeFlag&32){const s=e._;s?(Kd(r,e,t),t&&nd(r,"_",s,!0)):Wd(e,r)}else e&&Gd(n,e)},jy=(n,e,t)=>{const{vnode:r,slots:s}=n;let i=!0,a=Ae;if(r.shapeFlag&32){const c=e._;c?t&&c===1?i=!1:Kd(s,e,t):(i=!e.$stable,Wd(e,s)),a=e}else e&&(Gd(n,e),a={default:1});if(i)for(const c in s)!Kc(c)&&a[c]==null&&delete s[c]},pt=Wy;function $y(n){return qy(n)}function qy(n,e){const t=Fo();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:c,createComment:l,setText:h,setElementText:d,parentNode:p,nextSibling:_,setScopeId:b=Ft,insertStaticContent:V}=n,N=(v,A,C,F=null,O=null,x=null,$=void 0,B=null,U=!!A.dynamicChildren)=>{if(v===A)return;v&&!bs(v,A)&&(F=Kt(v),Le(v,O,x,!0),v=null),A.patchFlag===-2&&(U=!1,A.dynamicChildren=null);const{type:M,ref:Y,shapeFlag:q}=A;switch(M){case zo:L(v,A,C,F);break;case Hr:z(v,A,C,F);break;case xa:v==null&&K(A,C,F,$);break;case xt:S(v,A,C,F,O,x,$,B,U);break;default:q&1?oe(v,A,C,F,O,x,$,B,U):q&6?E(v,A,C,F,O,x,$,B,U):(q&64||q&128)&&M.process(v,A,C,F,O,x,$,B,U,Dt)}Y!=null&&O?Ls(Y,v&&v.ref,x,A||v,!A):Y==null&&v&&v.ref!=null&&Ls(v.ref,null,x,v,!0)},L=(v,A,C,F)=>{if(v==null)r(A.el=c(A.children),C,F);else{const O=A.el=v.el;A.children!==v.children&&h(O,A.children)}},z=(v,A,C,F)=>{v==null?r(A.el=l(A.children||""),C,F):A.el=v.el},K=(v,A,C,F)=>{[v.el,v.anchor]=V(v.children,A,C,F,v.el,v.anchor)},Q=({el:v,anchor:A},C,F)=>{let O;for(;v&&v!==A;)O=_(v),r(v,C,F),v=O;r(A,C,F)},H=({el:v,anchor:A})=>{let C;for(;v&&v!==A;)C=_(v),s(v),v=C;s(A)},oe=(v,A,C,F,O,x,$,B,U)=>{if(A.type==="svg"?$="svg":A.type==="math"&&($="mathml"),v==null)ye(A,C,F,O,x,$,B,U);else{const M=v.el&&v.el._isVueCE?v.el:null;try{M&&M._beginPatch(),y(v,A,O,x,$,B,U)}finally{M&&M._endPatch()}}},ye=(v,A,C,F,O,x,$,B)=>{let U,M;const{props:Y,shapeFlag:q,transition:J,dirs:te}=v;if(U=v.el=a(v.type,x,Y&&Y.is,Y),q&8?d(U,v.children):q&16&&m(v.children,U,null,F,O,Na(v,x),$,B),te&&Zn(v,null,F,"created"),I(U,v,v.scopeId,$,F),Y){for(const ce in Y)ce!=="value"&&!Os(ce)&&i(U,ce,null,Y[ce],x,F);"value"in Y&&i(U,"value",null,Y.value,x),(M=Y.onVnodeBeforeMount)&&kt(M,F,v)}te&&Zn(v,null,F,"beforeMount");const Z=Hy(O,J);Z&&J.beforeEnter(U),r(U,A,C),((M=Y&&Y.onVnodeMounted)||Z||te)&&pt(()=>{M&&kt(M,F,v),Z&&J.enter(U),te&&Zn(v,null,F,"mounted")},O)},I=(v,A,C,F,O)=>{if(C&&b(v,C),F)for(let x=0;x<F.length;x++)b(v,F[x]);if(O){let x=O.subTree;if(A===x||Xd(x.type)&&(x.ssContent===A||x.ssFallback===A)){const $=O.vnode;I(v,$,$.scopeId,$.slotScopeIds,O.parent)}}},m=(v,A,C,F,O,x,$,B,U=0)=>{for(let M=U;M<v.length;M++){const Y=v[M]=B?wn(v[M]):Mt(v[M]);N(null,Y,A,C,F,O,x,$,B)}},y=(v,A,C,F,O,x,$)=>{const B=A.el=v.el;let{patchFlag:U,dynamicChildren:M,dirs:Y}=A;U|=v.patchFlag&16;const q=v.props||Ae,J=A.props||Ae;let te;if(C&&er(C,!1),(te=J.onVnodeBeforeUpdate)&&kt(te,C,A,v),Y&&Zn(A,v,C,"beforeUpdate"),C&&er(C,!0),(q.innerHTML&&J.innerHTML==null||q.textContent&&J.textContent==null)&&d(B,""),M?T(v.dynamicChildren,M,B,C,F,Na(A,O),x):$||ge(v,A,B,null,C,F,Na(A,O),x,!1),U>0){if(U&16)w(B,q,J,C,O);else if(U&2&&q.class!==J.class&&i(B,"class",null,J.class,O),U&4&&i(B,"style",q.style,J.style,O),U&8){const Z=A.dynamicProps;for(let ce=0;ce<Z.length;ce++){const de=Z[ce],qe=q[de],He=J[de];(He!==qe||de==="value")&&i(B,de,qe,He,O,C)}}U&1&&v.children!==A.children&&d(B,A.children)}else!$&&M==null&&w(B,q,J,C,O);((te=J.onVnodeUpdated)||Y)&&pt(()=>{te&&kt(te,C,A,v),Y&&Zn(A,v,C,"updated")},F)},T=(v,A,C,F,O,x,$)=>{for(let B=0;B<A.length;B++){const U=v[B],M=A[B],Y=U.el&&(U.type===xt||!bs(U,M)||U.shapeFlag&198)?p(U.el):C;N(U,M,Y,null,F,O,x,$,!0)}},w=(v,A,C,F,O)=>{if(A!==C){if(A!==Ae)for(const x in A)!Os(x)&&!(x in C)&&i(v,x,A[x],null,O,F);for(const x in C){if(Os(x))continue;const $=C[x],B=A[x];$!==B&&x!=="value"&&i(v,x,B,$,O,F)}"value"in C&&i(v,"value",A.value,C.value,O)}},S=(v,A,C,F,O,x,$,B,U)=>{const M=A.el=v?v.el:c(""),Y=A.anchor=v?v.anchor:c("");let{patchFlag:q,dynamicChildren:J,slotScopeIds:te}=A;te&&(B=B?B.concat(te):te),v==null?(r(M,C,F),r(Y,C,F),m(A.children||[],C,Y,O,x,$,B,U)):q>0&&q&64&&J&&v.dynamicChildren?(T(v.dynamicChildren,J,C,O,x,$,B),(A.key!=null||O&&A===O.subTree)&&Qd(v,A,!0)):ge(v,A,C,Y,O,x,$,B,U)},E=(v,A,C,F,O,x,$,B,U)=>{A.slotScopeIds=B,v==null?A.shapeFlag&512?O.ctx.activate(A,C,F,$,U):ot(A,C,F,O,x,$,U):Vt(v,A,U)},ot=(v,A,C,F,O,x,$)=>{const B=v.component=tv(v,F,O);if(Dd(v)&&(B.ctx.renderer=Dt),nv(B,!1,$),B.asyncDep){if(O&&O.registerDep(B,Pe,$),!v.el){const U=B.subTree=cr(Hr);z(null,U,A,C),v.placeholder=U.el}}else Pe(B,v,A,C,O,x,$)},Vt=(v,A,C)=>{const F=A.component=v.component;if(Ny(v,A,C))if(F.asyncDep&&!F.asyncResolved){ae(F,A,C);return}else F.next=A,F.update();else A.el=v.el,F.vnode=A},Pe=(v,A,C,F,O,x,$)=>{const B=()=>{if(v.isMounted){let{next:q,bu:J,u:te,parent:Z,vnode:ce}=v;{const Je=Jd(v);if(Je){q&&(q.el=ce.el,ae(v,q,$)),Je.asyncDep.then(()=>{v.isUnmounted||B()});return}}let de=q,qe;er(v,!1),q?(q.el=ce.el,ae(v,q,$)):q=ce,J&&Pa(J),(qe=q.props&&q.props.onVnodeBeforeUpdate)&&kt(qe,Z,q,ce),er(v,!0);const He=Wu(v),_t=v.subTree;v.subTree=He,N(_t,He,p(_t.el),Kt(_t),v,O,x),q.el=He.el,de===null&&xy(v,He.el),te&&pt(te,O),(qe=q.props&&q.props.onVnodeUpdated)&&pt(()=>kt(qe,Z,q,ce),O)}else{let q;const{el:J,props:te}=A,{bm:Z,m:ce,parent:de,root:qe,type:He}=v,_t=Fs(A);er(v,!1),Z&&Pa(Z),!_t&&(q=te&&te.onVnodeBeforeMount)&&kt(q,de,A),er(v,!0);{qe.ce&&qe.ce._def.shadowRoot!==!1&&qe.ce._injectChildStyle(He);const Je=v.subTree=Wu(v);N(null,Je,C,F,v,O,x),A.el=Je.el}if(ce&&pt(ce,O),!_t&&(q=te&&te.onVnodeMounted)){const Je=A;pt(()=>kt(q,de,Je),O)}(A.shapeFlag&256||de&&Fs(de.vnode)&&de.vnode.shapeFlag&256)&&v.a&&pt(v.a,O),v.isMounted=!0,A=C=F=null}};v.scope.on();const U=v.effect=new ld(B);v.scope.off();const M=v.update=U.run.bind(U),Y=v.job=U.runIfDirty.bind(U);Y.i=v,Y.id=v.uid,U.scheduler=()=>Wc(Y),er(v,!0),M()},ae=(v,A,C)=>{A.component=v;const F=v.vnode.props;v.vnode=A,v.next=null,Ly(v,A.props,F,C),jy(v,A.children,C),on(),Bu(v),an()},ge=(v,A,C,F,O,x,$,B,U=!1)=>{const M=v&&v.children,Y=v?v.shapeFlag:0,q=A.children,{patchFlag:J,shapeFlag:te}=A;if(J>0){if(J&128){Wn(M,q,C,F,O,x,$,B,U);return}else if(J&256){Tt(M,q,C,F,O,x,$,B,U);return}}te&8?(Y&16&&Kn(M,O,x),q!==M&&d(C,q)):Y&16?te&16?Wn(M,q,C,F,O,x,$,B,U):Kn(M,O,x,!0):(Y&8&&d(C,""),te&16&&m(q,C,F,O,x,$,B,U))},Tt=(v,A,C,F,O,x,$,B,U)=>{v=v||Mr,A=A||Mr;const M=v.length,Y=A.length,q=Math.min(M,Y);let J;for(J=0;J<q;J++){const te=A[J]=U?wn(A[J]):Mt(A[J]);N(v[J],te,C,null,O,x,$,B,U)}M>Y?Kn(v,O,x,!0,!1,q):m(A,C,F,O,x,$,B,U,q)},Wn=(v,A,C,F,O,x,$,B,U)=>{let M=0;const Y=A.length;let q=v.length-1,J=Y-1;for(;M<=q&&M<=J;){const te=v[M],Z=A[M]=U?wn(A[M]):Mt(A[M]);if(bs(te,Z))N(te,Z,C,null,O,x,$,B,U);else break;M++}for(;M<=q&&M<=J;){const te=v[q],Z=A[J]=U?wn(A[J]):Mt(A[J]);if(bs(te,Z))N(te,Z,C,null,O,x,$,B,U);else break;q--,J--}if(M>q){if(M<=J){const te=J+1,Z=te<Y?A[te].el:F;for(;M<=J;)N(null,A[M]=U?wn(A[M]):Mt(A[M]),C,Z,O,x,$,B,U),M++}}else if(M>J)for(;M<=q;)Le(v[M],O,x,!0),M++;else{const te=M,Z=M,ce=new Map;for(M=Z;M<=J;M++){const ze=A[M]=U?wn(A[M]):Mt(A[M]);ze.key!=null&&ce.set(ze.key,M)}let de,qe=0;const He=J-Z+1;let _t=!1,Je=0;const gn=new Array(He);for(M=0;M<He;M++)gn[M]=0;for(M=te;M<=q;M++){const ze=v[M];if(qe>=He){Le(ze,O,x,!0);continue}let yt;if(ze.key!=null)yt=ce.get(ze.key);else for(de=Z;de<=J;de++)if(gn[de-Z]===0&&bs(ze,A[de])){yt=de;break}yt===void 0?Le(ze,O,x,!0):(gn[yt-Z]=M+1,yt>=Je?Je=yt:_t=!0,N(ze,A[yt],C,null,O,x,$,B,U),qe++)}const ls=_t?zy(gn):Mr;for(de=ls.length-1,M=He-1;M>=0;M--){const ze=Z+M,yt=A[ze],wi=A[ze+1],wr=ze+1<Y?wi.el||wi.placeholder:F;gn[M]===0?N(null,yt,C,wr,O,x,$,B,U):_t&&(de<0||M!==ls[de]?Gt(yt,C,wr,2):de--)}}},Gt=(v,A,C,F,O=null)=>{const{el:x,type:$,transition:B,children:U,shapeFlag:M}=v;if(M&6){Gt(v.component.subTree,A,C,F);return}if(M&128){v.suspense.move(A,C,F);return}if(M&64){$.move(v,A,C,Dt);return}if($===xt){r(x,A,C);for(let q=0;q<U.length;q++)Gt(U[q],A,C,F);r(v.anchor,A,C);return}if($===xa){Q(v,A,C);return}if(F!==2&&M&1&&B)if(F===0)B.beforeEnter(x),r(x,A,C),pt(()=>B.enter(x),O);else{const{leave:q,delayLeave:J,afterLeave:te}=B,Z=()=>{v.ctx.isUnmounted?s(x):r(x,A,C)},ce=()=>{x._isLeaving&&x[ty](!0),q(x,()=>{Z(),te&&te()})};J?J(x,Z,ce):ce()}else r(x,A,C)},Le=(v,A,C,F=!1,O=!1)=>{const{type:x,props:$,ref:B,children:U,dynamicChildren:M,shapeFlag:Y,patchFlag:q,dirs:J,cacheIndex:te}=v;if(q===-2&&(O=!1),B!=null&&(on(),Ls(B,null,C,v,!0),an()),te!=null&&(A.renderCache[te]=void 0),Y&256){A.ctx.deactivate(v);return}const Z=Y&1&&J,ce=!Fs(v);let de;if(ce&&(de=$&&$.onVnodeBeforeUnmount)&&kt(de,A,v),Y&6)Gn(v.component,C,F);else{if(Y&128){v.suspense.unmount(C,F);return}Z&&Zn(v,null,A,"beforeUnmount"),Y&64?v.type.remove(v,A,C,Dt,F):M&&!M.hasOnce&&(x!==xt||q>0&&q&64)?Kn(M,A,C,!1,!0):(x===xt&&q&384||!O&&Y&16)&&Kn(U,A,C),F&&Fe(v)}(ce&&(de=$&&$.onVnodeUnmounted)||Z)&&pt(()=>{de&&kt(de,A,v),Z&&Zn(v,null,A,"unmounted")},C)},Fe=v=>{const{type:A,el:C,anchor:F,transition:O}=v;if(A===xt){fa(C,F);return}if(A===xa){H(v);return}const x=()=>{s(C),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(v.shapeFlag&1&&O&&!O.persisted){const{leave:$,delayLeave:B}=O,U=()=>$(C,x);B?B(v.el,x,U):U()}else x()},fa=(v,A)=>{let C;for(;v!==A;)C=_(v),s(v),v=C;s(A)},Gn=(v,A,C)=>{const{bum:F,scope:O,job:x,subTree:$,um:B,m:U,a:M}=v;Qu(U),Qu(M),F&&Pa(F),O.stop(),x&&(x.flags|=8,Le($,v,A,C)),B&&pt(B,A),pt(()=>{v.isUnmounted=!0},A)},Kn=(v,A,C,F=!1,O=!1,x=0)=>{for(let $=x;$<v.length;$++)Le(v[$],A,C,F,O)},Kt=v=>{if(v.shapeFlag&6)return Kt(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const A=_(v.anchor||v.el),C=A&&A[Z_];return C?_(C):A};let as=!1;const Ii=(v,A,C)=>{v==null?A._vnode&&Le(A._vnode,null,null,!0):N(A._vnode||null,v,A,null,null,null,C),A._vnode=v,as||(as=!0,Bu(),Rd(),as=!1)},Dt={p:N,um:Le,m:Gt,r:Fe,mt:ot,mc:m,pc:ge,pbc:T,n:Kt,o:n};return{render:Ii,hydrate:void 0,createApp:wy(Ii)}}function Na({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function er({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Hy(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Qd(n,e,t=!1){const r=n.children,s=e.children;if(se(r)&&se(s))for(let i=0;i<r.length;i++){const a=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=wn(s[i]),c.el=a.el),!t&&c.patchFlag!==-2&&Qd(a,c)),c.type===zo&&c.patchFlag!==-1&&(c.el=a.el),c.type===Hr&&!c.el&&(c.el=a.el)}}function zy(n){const e=n.slice(),t=[0];let r,s,i,a,c;const l=n.length;for(r=0;r<l;r++){const h=n[r];if(h!==0){if(s=t[t.length-1],n[s]<h){e[r]=s,t.push(r);continue}for(i=0,a=t.length-1;i<a;)c=i+a>>1,n[t[c]]<h?i=c+1:a=c;h<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,a=t[i-1];i-- >0;)t[i]=a,a=e[a];return t}function Jd(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Jd(e)}function Qu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Xd=n=>n.__isSuspense;function Wy(n,e){e&&e.pendingBranch?se(n)?e.effects.push(...n):e.effects.push(n):X_(n)}const xt=Symbol.for("v-fgt"),zo=Symbol.for("v-txt"),Hr=Symbol.for("v-cmt"),xa=Symbol.for("v-stc"),js=[];let gt=null;function ws(n=!1){js.push(gt=n?null:[])}function Gy(){js.pop(),gt=js[js.length-1]||null}let Ys=1;function Ju(n,e=!1){Ys+=n,n<0&&gt&&e&&(gt.hasOnce=!0)}function Ky(n){return n.dynamicChildren=Ys>0?gt||Mr:null,Gy(),Ys>0&&gt&&gt.push(n),n}function As(n,e,t,r,s,i){return Ky(Ue(n,e,t,r,s,i,!0))}function Yd(n){return n?n.__v_isVNode===!0:!1}function bs(n,e){return n.type===e.type&&n.key===e.key}const Zd=({key:n})=>n??null,Qi=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Me(n)||De(n)||le(n)?{i:Lt,r:n,k:e,f:!!t}:n:null);function Ue(n,e=null,t=null,r=0,s=null,i=n===xt?0:1,a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Zd(e),ref:e&&Qi(e),scopeId:Cd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Lt};return c?(Jc(l,t),i&128&&n.normalize(l)):t&&(l.shapeFlag|=Me(t)?8:16),Ys>0&&!a&&gt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&gt.push(l),l}const cr=Qy;function Qy(n,e=null,t=null,r=0,s=null,i=!1){if((!n||n===py)&&(n=Hr),Yd(n)){const c=zr(n,e,!0);return t&&Jc(c,t),Ys>0&&!i&&gt&&(c.shapeFlag&6?gt[gt.indexOf(n)]=c:gt.push(c)),c.patchFlag=-2,c}if(ov(n)&&(n=n.__vccOpts),e){e=Jy(e);let{class:c,style:l}=e;c&&!Me(c)&&(e.class=Fc(c)),Re(l)&&(jo(l)&&!se(l)&&(l=st({},l)),e.style=Lc(l))}const a=Me(n)?1:Xd(n)?128:ey(n)?64:Re(n)?4:le(n)?2:0;return Ue(n,e,t,r,s,a,i,!0)}function Jy(n){return n?jo(n)||qd(n)?st({},n):n:null}function zr(n,e,t=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:c,transition:l}=n,h=e?Yy(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:n.type,props:h,key:h&&Zd(h),ref:e&&e.ref?t&&i?se(i)?i.concat(Qi(e)):[i,Qi(e)]:Qi(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:c,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==xt?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&zr(n.ssContent),ssFallback:n.ssFallback&&zr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&r&&Gc(d,l.clone(d)),d}function Xy(n=" ",e=0){return cr(zo,null,n,e)}function Mt(n){return n==null||typeof n=="boolean"?cr(Hr):se(n)?cr(xt,null,n.slice()):Yd(n)?wn(n):cr(zo,null,String(n))}function wn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:zr(n)}function Jc(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(se(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Jc(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!qd(e)?e._ctx=Lt:s===3&&Lt&&(Lt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else le(e)?(e={default:e,_ctx:Lt},t=32):(e=String(e),r&64?(t=16,e=[Xy(e)]):t=8);n.children=e,n.shapeFlag|=t}function Yy(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Fc([e.class,r.class]));else if(s==="style")e.style=Lc([e.style,r.style]);else if(No(s)){const i=e[s],a=r[s];a&&i!==a&&!(se(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function kt(n,e,t,r=null){Ht(n,e,7,[t,r])}const Zy=Ld();let ev=0;function tv(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||Zy,i={uid:ev++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new od(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zd(r,s),emitsOptions:Bd(r,s),emit:null,emitted:null,propsDefaults:Ae,inheritAttrs:r.inheritAttrs,ctx:Ae,data:Ae,props:Ae,attrs:Ae,slots:Ae,refs:Ae,setupState:Ae,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Vy.bind(null,i),n.ce&&n.ce(i),i}let ut=null;const ep=()=>ut||Lt;let po,sc;{const n=Fo(),e=(t,r)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};po=e("__VUE_INSTANCE_SETTERS__",t=>ut=t),sc=e("__VUE_SSR_SETTERS__",t=>Zs=t)}const hi=n=>{const e=ut;return po(n),n.scope.on(),()=>{n.scope.off(),po(e)}},Xu=()=>{ut&&ut.scope.off(),po(null)};function tp(n){return n.vnode.shapeFlag&4}let Zs=!1;function nv(n,e=!1,t=!1){e&&sc(e);const{props:r,children:s}=n.vnode,i=tp(n);My(n,r,i,e),By(n,s,t||e);const a=i?rv(n,e):void 0;return e&&sc(!1),a}function rv(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,my);const{setup:r}=t;if(r){on();const s=n.setupContext=r.length>1?iv(n):null,i=hi(n),a=ui(r,n,0,[n.props,s]),c=Yf(a);if(an(),i(),(c||n.sp)&&!Fs(n)&&Vd(n),c){if(a.then(Xu,Xu),e)return a.then(l=>{Yu(n,l)}).catch(l=>{$o(l,n,0)});n.asyncDep=a}else Yu(n,a)}else np(n)}function Yu(n,e,t){le(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Re(e)&&(n.setupState=wd(e)),np(n)}function np(n,e,t){const r=n.type;n.render||(n.render=r.render||Ft);{const s=hi(n);on();try{_y(n)}finally{an(),s()}}}const sv={get(n,e){return nt(n,"get",""),n[e]}};function iv(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,sv),slots:n.slots,emit:n.emit,expose:e}}function Xc(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(wd(zc(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Us)return Us[t](n)},has(e,t){return t in e||t in Us}})):n.proxy}function ov(n){return le(n)&&"__vccOpts"in n}const rp=(n,e)=>W_(n,e,Zs),av="3.5.25";/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ic;const Zu=typeof window<"u"&&window.trustedTypes;if(Zu)try{ic=Zu.createPolicy("vue",{createHTML:n=>n})}catch{}const sp=ic?n=>ic.createHTML(n):n=>n,cv="http://www.w3.org/2000/svg",lv="http://www.w3.org/1998/Math/MathML",Yt=typeof document<"u"?document:null,eh=Yt&&Yt.createElement("template"),uv={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e==="svg"?Yt.createElementNS(cv,n):e==="mathml"?Yt.createElementNS(lv,n):t?Yt.createElement(n,{is:t}):Yt.createElement(n);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>Yt.createTextNode(n),createComment:n=>Yt.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Yt.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,i){const a=t?t.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{eh.innerHTML=sp(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const c=eh.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},hv=Symbol("_vtc");function fv(n,e,t){const r=n[hv];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const th=Symbol("_vod"),dv=Symbol("_vsh"),pv=Symbol(""),gv=/(?:^|;)\s*display\s*:/;function mv(n,e,t){const r=n.style,s=Me(t);let i=!1;if(t&&!s){if(e)if(Me(e))for(const a of e.split(";")){const c=a.slice(0,a.indexOf(":")).trim();t[c]==null&&Ji(r,c,"")}else for(const a in e)t[a]==null&&Ji(r,a,"");for(const a in t)a==="display"&&(i=!0),Ji(r,a,t[a])}else if(s){if(e!==t){const a=r[pv];a&&(t+=";"+a),r.cssText=t,i=gv.test(t)}}else e&&n.removeAttribute("style");th in n&&(n[th]=i?r.display:"",n[dv]&&(r.display="none"))}const nh=/\s*!important$/;function Ji(n,e,t){if(se(t))t.forEach(r=>Ji(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=_v(n,e);nh.test(t)?n.setProperty(yr(r),t.replace(nh,""),"important"):n[r]=t}}const rh=["Webkit","Moz","ms"],Ma={};function _v(n,e){const t=Ma[e];if(t)return t;let r=Mn(e);if(r!=="filter"&&r in n)return Ma[e]=r;r=td(r);for(let s=0;s<rh.length;s++){const i=rh[s]+r;if(i in n)return Ma[e]=i}return e}const sh="http://www.w3.org/1999/xlink";function ih(n,e,t,r,s,i=__(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(sh,e.slice(6,e.length)):n.setAttributeNS(sh,e,t):t==null||i&&!rd(t)?n.removeAttribute(e):n.setAttribute(e,i?"":Hn(t)?String(t):t)}function oh(n,e,t,r,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?sp(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(c!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=rd(t):t==null&&c==="string"?(t="",a=!0):c==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function yv(n,e,t,r){n.addEventListener(e,t,r)}function vv(n,e,t,r){n.removeEventListener(e,t,r)}const ah=Symbol("_vei");function Ev(n,e,t,r,s=null){const i=n[ah]||(n[ah]={}),a=i[e];if(r&&a)a.value=r;else{const[c,l]=Tv(e);if(r){const h=i[e]=Av(r,s);yv(n,c,h,l)}else a&&(vv(n,c,a,l),i[e]=void 0)}}const ch=/(?:Once|Passive|Capture)$/;function Tv(n){let e;if(ch.test(n)){e={};let r;for(;r=n.match(ch);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):yr(n.slice(2)),e]}let La=0;const Iv=Promise.resolve(),wv=()=>La||(Iv.then(()=>La=0),La=Date.now());function Av(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;Ht(bv(r,t.value),e,5,[r])};return t.value=n,t.attached=wv(),t}function bv(n,e){if(se(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const lh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Sv=(n,e,t,r,s,i)=>{const a=s==="svg";e==="class"?fv(n,r,a):e==="style"?mv(n,t,r):No(e)?xc(e)||Ev(n,e,t,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Rv(n,e,r,a))?(oh(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ih(n,e,r,a,i,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Me(r))?oh(n,Mn(e),r,i,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),ih(n,e,r,a))};function Rv(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&lh(e)&&le(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return lh(e)&&Me(t)?!1:e in n}const Pv=st({patchProp:Sv},uv);let uh;function Cv(){return uh||(uh=$y(Pv))}const Vv=((...n)=>{const e=Cv().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=kv(r);if(!s)return;const i=e._component;!le(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,Dv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e});function Dv(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function kv(n){return Me(n)?document.querySelector(n):n}/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let ip;const Wo=n=>ip=n,op=Symbol();function oc(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var $s;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})($s||($s={}));function Ov(){const n=ad(!0),e=n.run(()=>Ms({}));let t=[],r=[];const s=zc({install(i){Wo(s),s._a=i,i.provide(op,s),i.config.globalProperties.$pinia=s,r.forEach(a=>t.push(a)),r=[]},use(i){return this._a?t.push(i):r.push(i),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return s}const ap=()=>{};function hh(n,e,t,r=ap){n.add(e);const s=()=>{n.delete(e)&&r()};return!t&&cd()&&y_(s),s}function Cr(n,...e){n.forEach(t=>{t(...e)})}const Nv=n=>n(),fh=Symbol(),Fa=Symbol();function ac(n,e){n instanceof Map&&e instanceof Map?e.forEach((t,r)=>n.set(r,t)):n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const r=e[t],s=n[t];oc(s)&&oc(r)&&n.hasOwnProperty(t)&&!De(r)&&!rn(r)?n[t]=ac(s,r):n[t]=r}return n}const xv=Symbol();function Mv(n){return!oc(n)||!Object.prototype.hasOwnProperty.call(n,xv)}const{assign:En}=Object;function Lv(n){return!!(De(n)&&n.effect)}function Fv(n,e,t,r){const{state:s,actions:i,getters:a}=e,c=t.state.value[n];let l;function h(){c||(t.state.value[n]=s?s():{});const d=$_(t.state.value[n]);return En(d,i,Object.keys(a||{}).reduce((p,_)=>(p[_]=zc(rp(()=>{Wo(t);const b=t._s.get(n);return a[_].call(b,b)})),p),{}))}return l=cp(n,h,e,t,r,!0),l}function cp(n,e,t={},r,s,i){let a;const c=En({actions:{}},t),l={deep:!0};let h,d,p=new Set,_=new Set,b;const V=r.state.value[n];!i&&!V&&(r.state.value[n]={}),Ms({});let N;function L(m){let y;h=d=!1,typeof m=="function"?(m(r.state.value[n]),y={type:$s.patchFunction,storeId:n,events:b}):(ac(r.state.value[n],m),y={type:$s.patchObject,payload:m,storeId:n,events:b});const T=N=Symbol();bd().then(()=>{N===T&&(h=!0)}),d=!0,Cr(p,y,r.state.value[n])}const z=i?function(){const{state:y}=t,T=y?y():{};this.$patch(w=>{En(w,T)})}:ap;function K(){a.stop(),p.clear(),_.clear(),r._s.delete(n)}const Q=(m,y="")=>{if(fh in m)return m[Fa]=y,m;const T=function(){Wo(r);const w=Array.from(arguments),S=new Set,E=new Set;function ot(ae){S.add(ae)}function Vt(ae){E.add(ae)}Cr(_,{args:w,name:T[Fa],store:oe,after:ot,onError:Vt});let Pe;try{Pe=m.apply(this&&this.$id===n?this:oe,w)}catch(ae){throw Cr(E,ae),ae}return Pe instanceof Promise?Pe.then(ae=>(Cr(S,ae),ae)).catch(ae=>(Cr(E,ae),Promise.reject(ae))):(Cr(S,Pe),Pe)};return T[fh]=!0,T[Fa]=y,T},H={_p:r,$id:n,$onAction:hh.bind(null,_),$patch:L,$reset:z,$subscribe(m,y={}){const T=hh(p,m,y.detached,()=>w()),w=a.run(()=>Ki(()=>r.state.value[n],S=>{(y.flush==="sync"?d:h)&&m({storeId:n,type:$s.direct,events:b},S)},En({},l,y)));return T},$dispose:K},oe=Bo(H);r._s.set(n,oe);const I=(r._a&&r._a.runWithContext||Nv)(()=>r._e.run(()=>(a=ad()).run(()=>e({action:Q}))));for(const m in I){const y=I[m];if(De(y)&&!Lv(y)||rn(y))i||(V&&Mv(y)&&(De(y)?y.value=V[m]:ac(y,V[m])),r.state.value[n][m]=y);else if(typeof y=="function"){const T=Q(y,m);I[m]=T,c.actions[m]=y}}return En(oe,I),En(_e(oe),I),Object.defineProperty(oe,"$state",{get:()=>r.state.value[n],set:m=>{L(y=>{En(y,m)})}}),r._p.forEach(m=>{En(oe,a.run(()=>m({store:oe,app:r._a,pinia:r,options:c})))}),V&&i&&t.hydrate&&t.hydrate(oe.$state,V),h=!0,d=!0,oe}/*! #__NO_SIDE_EFFECTS__ */function Uv(n,e,t){let r;const s=typeof e=="function";r=s?t:e;function i(a,c){const l=by();return a=a||(l?Bs(op,null):null),a&&Wo(a),a=ip,a._s.has(n)||(s?cp(n,e,r,a):Fv(n,r,a)),a._s.get(n)}return i.$id=n,i}function Bv(n,e){if(n==null)return;let t=n;for(let r=0;r<e.length;r++){if(t===void 0||t[e[r]]===void 0)return;if(t===null||t[e[r]]===null)return null;t=t[e[r]]}return t}function Yc(n,e,t){if(t.length===0)return e;const r=t[0];return t.length>1&&(e=Yc(typeof n!="object"||n===null||!Object.prototype.hasOwnProperty.call(n,r)?Number.isInteger(Number(t[1]))?[]:{}:n[r],e,Array.prototype.slice.call(t,1))),Number.isInteger(Number(r))&&Array.isArray(n)?n.slice()[r]:Object.assign({},n,{[r]:e})}function lp(n,e){if(n==null||e.length===0)return n;if(e.length===1){if(n==null)return n;if(Number.isInteger(e[0])&&Array.isArray(n))return Array.prototype.slice.call(n,0).splice(e[0],1);const t={};for(const r in n)t[r]=n[r];return delete t[e[0]],t}if(n[e[0]]==null){if(Number.isInteger(e[0])&&Array.isArray(n))return Array.prototype.concat.call([],n);const t={};for(const r in n)t[r]=n[r];return t}return Yc(n,lp(n[e[0]],Array.prototype.slice.call(e,1)),[e[0]])}function up(n,e){return e.map(t=>t.split(".")).map(t=>[t,Bv(n,t)]).filter(t=>t[1]!==void 0).reduce((t,r)=>Yc(t,r[1],r[0]),{})}function hp(n,e){return e.map(t=>t.split(".")).reduce((t,r)=>lp(t,r),n)}function dh(n,{storage:e,serializer:t,key:r,debug:s,pick:i,omit:a,beforeHydrate:c,afterHydrate:l},h,d=!0){try{d&&(c==null||c(h));const p=e.getItem(r);if(p){const _=t.deserialize(p),b=i?up(_,i):_,V=a?hp(b,a):b;n.$patch(V)}d&&(l==null||l(h))}catch(p){s&&console.error("[pinia-plugin-persistedstate]",p)}}function ph(n,{storage:e,serializer:t,key:r,debug:s,pick:i,omit:a}){try{const c=i?up(n,i):n,l=a?hp(c,a):c,h=t.serialize(l);e.setItem(r,h)}catch(c){s&&console.error("[pinia-plugin-persistedstate]",c)}}function jv(n,e){return typeof n=="function"?n(e):typeof n=="string"?n:e}function $v(n,e,t){const{pinia:r,store:s,options:{persist:i=t}}=n;if(!i)return;// v8 ignore if -- @preserve
if(!(s.$id in r.state.value)){const c=r._s.get(s.$id.replace("__hot:",""));c&&Promise.resolve().then(()=>c.$persist());return}const a=(Array.isArray(i)?i:i===!0?[{}]:[i]).map(e);s.$hydrate=({runHooks:c=!0}={})=>{a.forEach(l=>{dh(s,l,n,c)})},s.$persist=()=>{a.forEach(c=>{ph(s.$state,c)})},a.forEach(c=>{dh(s,c,n),s.$subscribe((l,h)=>ph(h,c),{detached:!0})})}function qv(n={}){return function(e){$v(e,t=>{const r=jv(t.key,e.store.$id);return{key:(n.key?n.key:s=>s)(r),debug:t.debug??n.debug??!1,serializer:t.serializer??n.serializer??{serialize:s=>JSON.stringify(s),deserialize:s=>JSON.parse(s)},storage:t.storage??n.storage??window.localStorage,beforeHydrate:t.beforeHydrate??n.beforeHydrate,afterHydrate:t.afterHydrate??n.afterHydrate,pick:t.pick,omit:t.omit}},n.auto??!1)}}var Hv=qv();const zv=()=>{};var gh={};/**
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
 */const fp=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Wv=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},dp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,l=s+2<n.length,h=l?n[s+2]:0,d=i>>2,p=(i&3)<<4|c>>4;let _=(c&15)<<2|h>>6,b=h&63;l||(b=64,a||(_=64)),r.push(t[d],t[p],t[_],t[b])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(fp(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Wv(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new Gv;const _=i<<2|c>>4;if(r.push(_),h!==64){const b=c<<4&240|h>>2;if(r.push(b),p!==64){const V=h<<6&192|p;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Gv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Kv=function(n){const e=fp(n);return dp.encodeByteArray(e,!0)},go=function(n){return Kv(n).replace(/\./g,"")},pp=function(n){try{return dp.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Qv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Jv=()=>Qv().__FIREBASE_DEFAULTS__,Xv=()=>{if(typeof process>"u"||typeof gh>"u")return;const n=gh.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Yv=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&pp(n[1]);return e&&JSON.parse(e)},Go=()=>{try{return zv()||Jv()||Xv()||Yv()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},gp=n=>{var e,t;return(t=(e=Go())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Zv=n=>{const e=gp(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},mp=()=>{var n;return(n=Go())===null||n===void 0?void 0:n.config},_p=n=>{var e;return(e=Go())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class eE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Zr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function yp(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function tE(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[go(JSON.stringify(t)),go(JSON.stringify(a)),""].join(".")}const qs={};function nE(){const n={prod:[],emulator:[]};for(const e of Object.keys(qs))qs[e]?n.emulator.push(e):n.prod.push(e);return n}function rE(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let mh=!1;function vp(n,e){if(typeof window>"u"||typeof document>"u"||!Zr(window.location.host)||qs[n]===e||qs[n]||mh)return;qs[n]=e;function t(_){return`__firebase__banner__${_}`}const r="__firebase__banner",i=nE().prod.length>0;function a(){const _=document.getElementById(r);_&&_.remove()}function c(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function l(_,b){_.setAttribute("width","24"),_.setAttribute("id",b),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function h(){const _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{mh=!0,a()},_}function d(_,b){_.setAttribute("id",b),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function p(){const _=rE(r),b=t("text"),V=document.getElementById(b)||document.createElement("span"),N=t("learnmore"),L=document.getElementById(N)||document.createElement("a"),z=t("preprendIcon"),K=document.getElementById(z)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){const Q=_.element;c(Q),d(L,N);const H=h();l(K,z),Q.append(K,V,L,H),document.body.appendChild(Q)}i?(V.innerText="Preview backend disconnected.",K.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function it(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(it())}function iE(){var n;const e=(n=Go())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function oE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function aE(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function cE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lE(){const n=it();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function uE(){return!iE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function hE(){try{return typeof indexedDB=="object"}catch{return!1}}function fE(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const dE="FirebaseError";class pn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=dE,Object.setPrototypeOf(this,pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fi.prototype.create)}}class fi{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?pE(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new pn(s,c,r)}}function pE(n,e){return n.replace(gE,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const gE=/\{\$([^}]+)}/g;function mE(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function dr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(_h(i)&&_h(a)){if(!dr(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function _h(n){return n!==null&&typeof n=="object"}/**
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
 */function di(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function _E(n,e){const t=new yE(n,e);return t.subscribe.bind(t)}class yE{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");vE(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Ua),s.error===void 0&&(s.error=Ua),s.complete===void 0&&(s.complete=Ua);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vE(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ua(){}/**
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
 */function ft(n){return n&&n._delegate?n._delegate:n}class pr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const nr="[DEFAULT]";/**
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
 */class EE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new eE;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(IE(e))try{this.getOrInitializeService({instanceIdentifier:nr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=nr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=nr){return this.instances.has(e)}getOptions(e=nr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:TE(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=nr){return this.component?this.component.multipleInstances?e:nr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function TE(n){return n===nr?void 0:n}function IE(n){return n.instantiationMode==="EAGER"}/**
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
 */class wE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new EE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var he;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(he||(he={}));const AE={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},bE=he.INFO,SE={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},RE=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=SE[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zc{constructor(e){this.name=e,this._logLevel=bE,this._logHandler=RE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?AE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const PE=(n,e)=>e.some(t=>n instanceof t);let yh,vh;function CE(){return yh||(yh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function VE(){return vh||(vh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ep=new WeakMap,cc=new WeakMap,Tp=new WeakMap,Ba=new WeakMap,el=new WeakMap;function DE(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Vn(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Ep.set(t,n)}).catch(()=>{}),el.set(e,n),e}function kE(n){if(cc.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});cc.set(n,e)}let lc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return cc.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Tp.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Vn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function OE(n){lc=n(lc)}function NE(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(ja(this),e,...t);return Tp.set(r,e.sort?e.sort():[e]),Vn(r)}:VE().includes(n)?function(...e){return n.apply(ja(this),e),Vn(Ep.get(this))}:function(...e){return Vn(n.apply(ja(this),e))}}function xE(n){return typeof n=="function"?NE(n):(n instanceof IDBTransaction&&kE(n),PE(n,CE())?new Proxy(n,lc):n)}function Vn(n){if(n instanceof IDBRequest)return DE(n);if(Ba.has(n))return Ba.get(n);const e=xE(n);return e!==n&&(Ba.set(n,e),el.set(e,n)),e}const ja=n=>el.get(n);function ME(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=Vn(a);return r&&a.addEventListener("upgradeneeded",l=>{r(Vn(a.result),l.oldVersion,l.newVersion,Vn(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const LE=["get","getKey","getAll","getAllKeys","count"],FE=["put","add","delete","clear"],$a=new Map;function Eh(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if($a.get(e))return $a.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=FE.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||LE.includes(t)))return;const i=async function(a,...c){const l=this.transaction(a,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&l.done]))[0]};return $a.set(e,i),i}OE(n=>({...n,get:(e,t,r)=>Eh(e,t)||n.get(e,t,r),has:(e,t)=>!!Eh(e,t)||n.has(e,t)}));/**
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
 */class UE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(BE(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function BE(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const uc="@firebase/app",Th="0.13.2";/**
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
 */const ln=new Zc("@firebase/app"),jE="@firebase/app-compat",$E="@firebase/analytics-compat",qE="@firebase/analytics",HE="@firebase/app-check-compat",zE="@firebase/app-check",WE="@firebase/auth",GE="@firebase/auth-compat",KE="@firebase/database",QE="@firebase/data-connect",JE="@firebase/database-compat",XE="@firebase/functions",YE="@firebase/functions-compat",ZE="@firebase/installations",eT="@firebase/installations-compat",tT="@firebase/messaging",nT="@firebase/messaging-compat",rT="@firebase/performance",sT="@firebase/performance-compat",iT="@firebase/remote-config",oT="@firebase/remote-config-compat",aT="@firebase/storage",cT="@firebase/storage-compat",lT="@firebase/firestore",uT="@firebase/ai",hT="@firebase/firestore-compat",fT="firebase",dT="11.10.0";/**
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
 */const hc="[DEFAULT]",pT={[uc]:"fire-core",[jE]:"fire-core-compat",[qE]:"fire-analytics",[$E]:"fire-analytics-compat",[zE]:"fire-app-check",[HE]:"fire-app-check-compat",[WE]:"fire-auth",[GE]:"fire-auth-compat",[KE]:"fire-rtdb",[QE]:"fire-data-connect",[JE]:"fire-rtdb-compat",[XE]:"fire-fn",[YE]:"fire-fn-compat",[ZE]:"fire-iid",[eT]:"fire-iid-compat",[tT]:"fire-fcm",[nT]:"fire-fcm-compat",[rT]:"fire-perf",[sT]:"fire-perf-compat",[iT]:"fire-rc",[oT]:"fire-rc-compat",[aT]:"fire-gcs",[cT]:"fire-gcs-compat",[lT]:"fire-fst",[hT]:"fire-fst-compat",[uT]:"fire-vertex","fire-js":"fire-js",[fT]:"fire-js-all"};/**
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
 */const mo=new Map,gT=new Map,fc=new Map;function Ih(n,e){try{n.container.addComponent(e)}catch(t){ln.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Wr(n){const e=n.name;if(fc.has(e))return ln.debug(`There were multiple attempts to register component ${e}.`),!1;fc.set(e,n);for(const t of mo.values())Ih(t,n);for(const t of gT.values())Ih(t,n);return!0}function tl(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function wt(n){return n==null?!1:n.settings!==void 0}/**
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
 */const mT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Dn=new fi("app","Firebase",mT);/**
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
 */class _T{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new pr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Dn.create("app-deleted",{appName:this._name})}}/**
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
 */const es=dT;function Ip(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:hc,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Dn.create("bad-app-name",{appName:String(s)});if(t||(t=mp()),!t)throw Dn.create("no-options");const i=mo.get(s);if(i){if(dr(t,i.options)&&dr(r,i.config))return i;throw Dn.create("duplicate-app",{appName:s})}const a=new wE(s);for(const l of fc.values())a.addComponent(l);const c=new _T(t,r,a);return mo.set(s,c),c}function wp(n=hc){const e=mo.get(n);if(!e&&n===hc&&mp())return Ip();if(!e)throw Dn.create("no-app",{appName:n});return e}function kn(n,e,t){var r;let s=(r=pT[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ln.warn(c.join(" "));return}Wr(new pr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const yT="firebase-heartbeat-database",vT=1,ei="firebase-heartbeat-store";let qa=null;function Ap(){return qa||(qa=ME(yT,vT,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ei)}catch(t){console.warn(t)}}}}).catch(n=>{throw Dn.create("idb-open",{originalErrorMessage:n.message})})),qa}async function ET(n){try{const t=(await Ap()).transaction(ei),r=await t.objectStore(ei).get(bp(n));return await t.done,r}catch(e){if(e instanceof pn)ln.warn(e.message);else{const t=Dn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ln.warn(t.message)}}}async function wh(n,e){try{const r=(await Ap()).transaction(ei,"readwrite");await r.objectStore(ei).put(e,bp(n)),await r.done}catch(t){if(t instanceof pn)ln.warn(t.message);else{const r=Dn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ln.warn(r.message)}}}function bp(n){return`${n.name}!${n.options.appId}`}/**
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
 */const TT=1024,IT=30;class wT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new bT(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ah();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>IT){const a=ST(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ln.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ah(),{heartbeatsToSend:r,unsentEntries:s}=AT(this._heartbeatsCache.heartbeats),i=go(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return ln.warn(t),""}}}function Ah(){return new Date().toISOString().substring(0,10)}function AT(n,e=TT){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),bh(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),bh(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class bT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hE()?fE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ET(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return wh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return wh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function bh(n){return go(JSON.stringify({version:2,heartbeats:n})).length}function ST(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function RT(n){Wr(new pr("platform-logger",e=>new UE(e),"PRIVATE")),Wr(new pr("heartbeat",e=>new wT(e),"PRIVATE")),kn(uc,Th,n),kn(uc,Th,"esm2017"),kn("fire-js","")}RT("");var Sh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var On,Sp;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,m){function y(){}y.prototype=m.prototype,I.D=m.prototype,I.prototype=new y,I.prototype.constructor=I,I.C=function(T,w,S){for(var E=Array(arguments.length-2),ot=2;ot<arguments.length;ot++)E[ot-2]=arguments[ot];return m.prototype[w].apply(T,E)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,m,y){y||(y=0);var T=Array(16);if(typeof m=="string")for(var w=0;16>w;++w)T[w]=m.charCodeAt(y++)|m.charCodeAt(y++)<<8|m.charCodeAt(y++)<<16|m.charCodeAt(y++)<<24;else for(w=0;16>w;++w)T[w]=m[y++]|m[y++]<<8|m[y++]<<16|m[y++]<<24;m=I.g[0],y=I.g[1],w=I.g[2];var S=I.g[3],E=m+(S^y&(w^S))+T[0]+3614090360&4294967295;m=y+(E<<7&4294967295|E>>>25),E=S+(w^m&(y^w))+T[1]+3905402710&4294967295,S=m+(E<<12&4294967295|E>>>20),E=w+(y^S&(m^y))+T[2]+606105819&4294967295,w=S+(E<<17&4294967295|E>>>15),E=y+(m^w&(S^m))+T[3]+3250441966&4294967295,y=w+(E<<22&4294967295|E>>>10),E=m+(S^y&(w^S))+T[4]+4118548399&4294967295,m=y+(E<<7&4294967295|E>>>25),E=S+(w^m&(y^w))+T[5]+1200080426&4294967295,S=m+(E<<12&4294967295|E>>>20),E=w+(y^S&(m^y))+T[6]+2821735955&4294967295,w=S+(E<<17&4294967295|E>>>15),E=y+(m^w&(S^m))+T[7]+4249261313&4294967295,y=w+(E<<22&4294967295|E>>>10),E=m+(S^y&(w^S))+T[8]+1770035416&4294967295,m=y+(E<<7&4294967295|E>>>25),E=S+(w^m&(y^w))+T[9]+2336552879&4294967295,S=m+(E<<12&4294967295|E>>>20),E=w+(y^S&(m^y))+T[10]+4294925233&4294967295,w=S+(E<<17&4294967295|E>>>15),E=y+(m^w&(S^m))+T[11]+2304563134&4294967295,y=w+(E<<22&4294967295|E>>>10),E=m+(S^y&(w^S))+T[12]+1804603682&4294967295,m=y+(E<<7&4294967295|E>>>25),E=S+(w^m&(y^w))+T[13]+4254626195&4294967295,S=m+(E<<12&4294967295|E>>>20),E=w+(y^S&(m^y))+T[14]+2792965006&4294967295,w=S+(E<<17&4294967295|E>>>15),E=y+(m^w&(S^m))+T[15]+1236535329&4294967295,y=w+(E<<22&4294967295|E>>>10),E=m+(w^S&(y^w))+T[1]+4129170786&4294967295,m=y+(E<<5&4294967295|E>>>27),E=S+(y^w&(m^y))+T[6]+3225465664&4294967295,S=m+(E<<9&4294967295|E>>>23),E=w+(m^y&(S^m))+T[11]+643717713&4294967295,w=S+(E<<14&4294967295|E>>>18),E=y+(S^m&(w^S))+T[0]+3921069994&4294967295,y=w+(E<<20&4294967295|E>>>12),E=m+(w^S&(y^w))+T[5]+3593408605&4294967295,m=y+(E<<5&4294967295|E>>>27),E=S+(y^w&(m^y))+T[10]+38016083&4294967295,S=m+(E<<9&4294967295|E>>>23),E=w+(m^y&(S^m))+T[15]+3634488961&4294967295,w=S+(E<<14&4294967295|E>>>18),E=y+(S^m&(w^S))+T[4]+3889429448&4294967295,y=w+(E<<20&4294967295|E>>>12),E=m+(w^S&(y^w))+T[9]+568446438&4294967295,m=y+(E<<5&4294967295|E>>>27),E=S+(y^w&(m^y))+T[14]+3275163606&4294967295,S=m+(E<<9&4294967295|E>>>23),E=w+(m^y&(S^m))+T[3]+4107603335&4294967295,w=S+(E<<14&4294967295|E>>>18),E=y+(S^m&(w^S))+T[8]+1163531501&4294967295,y=w+(E<<20&4294967295|E>>>12),E=m+(w^S&(y^w))+T[13]+2850285829&4294967295,m=y+(E<<5&4294967295|E>>>27),E=S+(y^w&(m^y))+T[2]+4243563512&4294967295,S=m+(E<<9&4294967295|E>>>23),E=w+(m^y&(S^m))+T[7]+1735328473&4294967295,w=S+(E<<14&4294967295|E>>>18),E=y+(S^m&(w^S))+T[12]+2368359562&4294967295,y=w+(E<<20&4294967295|E>>>12),E=m+(y^w^S)+T[5]+4294588738&4294967295,m=y+(E<<4&4294967295|E>>>28),E=S+(m^y^w)+T[8]+2272392833&4294967295,S=m+(E<<11&4294967295|E>>>21),E=w+(S^m^y)+T[11]+1839030562&4294967295,w=S+(E<<16&4294967295|E>>>16),E=y+(w^S^m)+T[14]+4259657740&4294967295,y=w+(E<<23&4294967295|E>>>9),E=m+(y^w^S)+T[1]+2763975236&4294967295,m=y+(E<<4&4294967295|E>>>28),E=S+(m^y^w)+T[4]+1272893353&4294967295,S=m+(E<<11&4294967295|E>>>21),E=w+(S^m^y)+T[7]+4139469664&4294967295,w=S+(E<<16&4294967295|E>>>16),E=y+(w^S^m)+T[10]+3200236656&4294967295,y=w+(E<<23&4294967295|E>>>9),E=m+(y^w^S)+T[13]+681279174&4294967295,m=y+(E<<4&4294967295|E>>>28),E=S+(m^y^w)+T[0]+3936430074&4294967295,S=m+(E<<11&4294967295|E>>>21),E=w+(S^m^y)+T[3]+3572445317&4294967295,w=S+(E<<16&4294967295|E>>>16),E=y+(w^S^m)+T[6]+76029189&4294967295,y=w+(E<<23&4294967295|E>>>9),E=m+(y^w^S)+T[9]+3654602809&4294967295,m=y+(E<<4&4294967295|E>>>28),E=S+(m^y^w)+T[12]+3873151461&4294967295,S=m+(E<<11&4294967295|E>>>21),E=w+(S^m^y)+T[15]+530742520&4294967295,w=S+(E<<16&4294967295|E>>>16),E=y+(w^S^m)+T[2]+3299628645&4294967295,y=w+(E<<23&4294967295|E>>>9),E=m+(w^(y|~S))+T[0]+4096336452&4294967295,m=y+(E<<6&4294967295|E>>>26),E=S+(y^(m|~w))+T[7]+1126891415&4294967295,S=m+(E<<10&4294967295|E>>>22),E=w+(m^(S|~y))+T[14]+2878612391&4294967295,w=S+(E<<15&4294967295|E>>>17),E=y+(S^(w|~m))+T[5]+4237533241&4294967295,y=w+(E<<21&4294967295|E>>>11),E=m+(w^(y|~S))+T[12]+1700485571&4294967295,m=y+(E<<6&4294967295|E>>>26),E=S+(y^(m|~w))+T[3]+2399980690&4294967295,S=m+(E<<10&4294967295|E>>>22),E=w+(m^(S|~y))+T[10]+4293915773&4294967295,w=S+(E<<15&4294967295|E>>>17),E=y+(S^(w|~m))+T[1]+2240044497&4294967295,y=w+(E<<21&4294967295|E>>>11),E=m+(w^(y|~S))+T[8]+1873313359&4294967295,m=y+(E<<6&4294967295|E>>>26),E=S+(y^(m|~w))+T[15]+4264355552&4294967295,S=m+(E<<10&4294967295|E>>>22),E=w+(m^(S|~y))+T[6]+2734768916&4294967295,w=S+(E<<15&4294967295|E>>>17),E=y+(S^(w|~m))+T[13]+1309151649&4294967295,y=w+(E<<21&4294967295|E>>>11),E=m+(w^(y|~S))+T[4]+4149444226&4294967295,m=y+(E<<6&4294967295|E>>>26),E=S+(y^(m|~w))+T[11]+3174756917&4294967295,S=m+(E<<10&4294967295|E>>>22),E=w+(m^(S|~y))+T[2]+718787259&4294967295,w=S+(E<<15&4294967295|E>>>17),E=y+(S^(w|~m))+T[9]+3951481745&4294967295,I.g[0]=I.g[0]+m&4294967295,I.g[1]=I.g[1]+(w+(E<<21&4294967295|E>>>11))&4294967295,I.g[2]=I.g[2]+w&4294967295,I.g[3]=I.g[3]+S&4294967295}r.prototype.u=function(I,m){m===void 0&&(m=I.length);for(var y=m-this.blockSize,T=this.B,w=this.h,S=0;S<m;){if(w==0)for(;S<=y;)s(this,I,S),S+=this.blockSize;if(typeof I=="string"){for(;S<m;)if(T[w++]=I.charCodeAt(S++),w==this.blockSize){s(this,T),w=0;break}}else for(;S<m;)if(T[w++]=I[S++],w==this.blockSize){s(this,T),w=0;break}}this.h=w,this.o+=m},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var m=1;m<I.length-8;++m)I[m]=0;var y=8*this.o;for(m=I.length-8;m<I.length;++m)I[m]=y&255,y/=256;for(this.u(I),I=Array(16),m=y=0;4>m;++m)for(var T=0;32>T;T+=8)I[y++]=this.g[m]>>>T&255;return I};function i(I,m){var y=c;return Object.prototype.hasOwnProperty.call(y,I)?y[I]:y[I]=m(I)}function a(I,m){this.h=m;for(var y=[],T=!0,w=I.length-1;0<=w;w--){var S=I[w]|0;T&&S==m||(y[w]=S,T=!1)}this.g=y}var c={};function l(I){return-128<=I&&128>I?i(I,function(m){return new a([m|0],0>m?-1:0)}):new a([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return L(h(-I));for(var m=[],y=1,T=0;I>=y;T++)m[T]=I/y|0,y*=4294967296;return new a(m,0)}function d(I,m){if(I.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(I.charAt(0)=="-")return L(d(I.substring(1),m));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=h(Math.pow(m,8)),T=p,w=0;w<I.length;w+=8){var S=Math.min(8,I.length-w),E=parseInt(I.substring(w,w+S),m);8>S?(S=h(Math.pow(m,S)),T=T.j(S).add(h(E))):(T=T.j(y),T=T.add(h(E)))}return T}var p=l(0),_=l(1),b=l(16777216);n=a.prototype,n.m=function(){if(N(this))return-L(this).m();for(var I=0,m=1,y=0;y<this.g.length;y++){var T=this.i(y);I+=(0<=T?T:4294967296+T)*m,m*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(V(this))return"0";if(N(this))return"-"+L(this).toString(I);for(var m=h(Math.pow(I,6)),y=this,T="";;){var w=H(y,m).g;y=z(y,w.j(m));var S=((0<y.g.length?y.g[0]:y.h)>>>0).toString(I);if(y=w,V(y))return S+T;for(;6>S.length;)S="0"+S;T=S+T}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function V(I){if(I.h!=0)return!1;for(var m=0;m<I.g.length;m++)if(I.g[m]!=0)return!1;return!0}function N(I){return I.h==-1}n.l=function(I){return I=z(this,I),N(I)?-1:V(I)?0:1};function L(I){for(var m=I.g.length,y=[],T=0;T<m;T++)y[T]=~I.g[T];return new a(y,~I.h).add(_)}n.abs=function(){return N(this)?L(this):this},n.add=function(I){for(var m=Math.max(this.g.length,I.g.length),y=[],T=0,w=0;w<=m;w++){var S=T+(this.i(w)&65535)+(I.i(w)&65535),E=(S>>>16)+(this.i(w)>>>16)+(I.i(w)>>>16);T=E>>>16,S&=65535,E&=65535,y[w]=E<<16|S}return new a(y,y[y.length-1]&-2147483648?-1:0)};function z(I,m){return I.add(L(m))}n.j=function(I){if(V(this)||V(I))return p;if(N(this))return N(I)?L(this).j(L(I)):L(L(this).j(I));if(N(I))return L(this.j(L(I)));if(0>this.l(b)&&0>I.l(b))return h(this.m()*I.m());for(var m=this.g.length+I.g.length,y=[],T=0;T<2*m;T++)y[T]=0;for(T=0;T<this.g.length;T++)for(var w=0;w<I.g.length;w++){var S=this.i(T)>>>16,E=this.i(T)&65535,ot=I.i(w)>>>16,Vt=I.i(w)&65535;y[2*T+2*w]+=E*Vt,K(y,2*T+2*w),y[2*T+2*w+1]+=S*Vt,K(y,2*T+2*w+1),y[2*T+2*w+1]+=E*ot,K(y,2*T+2*w+1),y[2*T+2*w+2]+=S*ot,K(y,2*T+2*w+2)}for(T=0;T<m;T++)y[T]=y[2*T+1]<<16|y[2*T];for(T=m;T<2*m;T++)y[T]=0;return new a(y,0)};function K(I,m){for(;(I[m]&65535)!=I[m];)I[m+1]+=I[m]>>>16,I[m]&=65535,m++}function Q(I,m){this.g=I,this.h=m}function H(I,m){if(V(m))throw Error("division by zero");if(V(I))return new Q(p,p);if(N(I))return m=H(L(I),m),new Q(L(m.g),L(m.h));if(N(m))return m=H(I,L(m)),new Q(L(m.g),m.h);if(30<I.g.length){if(N(I)||N(m))throw Error("slowDivide_ only works with positive integers.");for(var y=_,T=m;0>=T.l(I);)y=oe(y),T=oe(T);var w=ye(y,1),S=ye(T,1);for(T=ye(T,2),y=ye(y,2);!V(T);){var E=S.add(T);0>=E.l(I)&&(w=w.add(y),S=E),T=ye(T,1),y=ye(y,1)}return m=z(I,w.j(m)),new Q(w,m)}for(w=p;0<=I.l(m);){for(y=Math.max(1,Math.floor(I.m()/m.m())),T=Math.ceil(Math.log(y)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),S=h(y),E=S.j(m);N(E)||0<E.l(I);)y-=T,S=h(y),E=S.j(m);V(S)&&(S=_),w=w.add(S),I=z(I,E)}return new Q(w,I)}n.A=function(I){return H(this,I).h},n.and=function(I){for(var m=Math.max(this.g.length,I.g.length),y=[],T=0;T<m;T++)y[T]=this.i(T)&I.i(T);return new a(y,this.h&I.h)},n.or=function(I){for(var m=Math.max(this.g.length,I.g.length),y=[],T=0;T<m;T++)y[T]=this.i(T)|I.i(T);return new a(y,this.h|I.h)},n.xor=function(I){for(var m=Math.max(this.g.length,I.g.length),y=[],T=0;T<m;T++)y[T]=this.i(T)^I.i(T);return new a(y,this.h^I.h)};function oe(I){for(var m=I.g.length+1,y=[],T=0;T<m;T++)y[T]=I.i(T)<<1|I.i(T-1)>>>31;return new a(y,I.h)}function ye(I,m){var y=m>>5;m%=32;for(var T=I.g.length-y,w=[],S=0;S<T;S++)w[S]=0<m?I.i(S+y)>>>m|I.i(S+y+1)<<32-m:I.i(S+y);return new a(w,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Sp=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,On=a}).apply(typeof Sh<"u"?Sh:typeof self<"u"?self:typeof window<"u"?window:{});var $i=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rp,Cs,Pp,Xi,dc,Cp,Vp,Dp;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,f){return o==Array.prototype||o==Object.prototype||(o[u]=f.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof $i=="object"&&$i];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(o,u){if(u)e:{var f=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var R=o[g];if(!(R in f))break e;f=f[R]}o=o[o.length-1],g=f[o],u=u(g),u!=g&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var f=0,g=!1,R={next:function(){if(!g&&f<o.length){var P=f++;return{value:u(P,o[P]),done:!1}}return g=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function l(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,f){return o.call.apply(o.bind,arguments)}function p(o,u,f){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,g),o.apply(u,R)}}return function(){return o.apply(u,arguments)}}function _(o,u,f){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,_.apply(null,arguments)}function b(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function V(o,u){function f(){}f.prototype=u.prototype,o.aa=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(g,R,P){for(var j=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)j[Te-2]=arguments[Te];return u.prototype[R].apply(g,j)}}function N(o){const u=o.length;if(0<u){const f=Array(u);for(let g=0;g<u;g++)f[g]=o[g];return f}return[]}function L(o,u){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(l(g)){const R=o.length||0,P=g.length||0;o.length=R+P;for(let j=0;j<P;j++)o[R+j]=g[j]}else o.push(g)}}class z{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function K(o){return/^[\s\xa0]*$/.test(o)}function Q(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function H(o){return H[" "](o),o}H[" "]=function(){};var oe=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function ye(o,u,f){for(const g in o)u.call(f,o[g],g,o)}function I(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function m(o){const u={};for(const f in o)u[f]=o[f];return u}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,u){let f,g;for(let R=1;R<arguments.length;R++){g=arguments[R];for(f in g)o[f]=g[f];for(let P=0;P<y.length;P++)f=y[P],Object.prototype.hasOwnProperty.call(g,f)&&(o[f]=g[f])}}function w(o){var u=1;o=o.split(":");const f=[];for(;0<u&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function S(o){c.setTimeout(()=>{throw o},0)}function E(){var o=Tt;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class ot{constructor(){this.h=this.g=null}add(u,f){const g=Vt.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Vt=new z(()=>new Pe,o=>o.reset());class Pe{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let ae,ge=!1,Tt=new ot,Wn=()=>{const o=c.Promise.resolve(void 0);ae=()=>{o.then(Gt)}};var Gt=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(f){S(f)}var u=Vt;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}ge=!1};function Le(){this.s=this.s,this.C=this.C}Le.prototype.s=!1,Le.prototype.ma=function(){this.s||(this.s=!0,this.N())},Le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Fe(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Fe.prototype.h=function(){this.defaultPrevented=!0};var fa=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};c.addEventListener("test",f,u),c.removeEventListener("test",f,u)}catch{}return o})();function Gn(o,u){if(Fe.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(oe){e:{try{H(u.nodeName);var R=!0;break e}catch{}R=!1}R||(u=null)}}else f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Kn[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Gn.aa.h.call(this)}}V(Gn,Fe);var Kn={2:"touch",3:"pen",4:"mouse"};Gn.prototype.h=function(){Gn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Kt="closure_listenable_"+(1e6*Math.random()|0),as=0;function Ii(o,u,f,g,R){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=R,this.key=++as,this.da=this.fa=!1}function Dt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function cs(o){this.src=o,this.g={},this.h=0}cs.prototype.add=function(o,u,f,g,R){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var j=A(o,u,g,R);return-1<j?(u=o[j],f||(u.fa=!1)):(u=new Ii(u,this.src,P,!!g,R),u.fa=f,o.push(u)),u};function v(o,u){var f=u.type;if(f in o.g){var g=o.g[f],R=Array.prototype.indexOf.call(g,u,void 0),P;(P=0<=R)&&Array.prototype.splice.call(g,R,1),P&&(Dt(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function A(o,u,f,g){for(var R=0;R<o.length;++R){var P=o[R];if(!P.da&&P.listener==u&&P.capture==!!f&&P.ha==g)return R}return-1}var C="closure_lm_"+(1e6*Math.random()|0),F={};function O(o,u,f,g,R){if(Array.isArray(u)){for(var P=0;P<u.length;P++)O(o,u[P],f,g,R);return null}return f=te(f),o&&o[Kt]?o.K(u,f,h(g)?!!g.capture:!1,R):x(o,u,f,!1,g,R)}function x(o,u,f,g,R,P){if(!u)throw Error("Invalid event type");var j=h(R)?!!R.capture:!!R,Te=q(o);if(Te||(o[C]=Te=new cs(o)),f=Te.add(u,f,g,j,P),f.proxy)return f;if(g=$(),f.proxy=g,g.src=o,g.listener=f,o.addEventListener)fa||(R=j),R===void 0&&(R=!1),o.addEventListener(u.toString(),g,R);else if(o.attachEvent)o.attachEvent(M(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function $(){function o(f){return u.call(o.src,o.listener,f)}const u=Y;return o}function B(o,u,f,g,R){if(Array.isArray(u))for(var P=0;P<u.length;P++)B(o,u[P],f,g,R);else g=h(g)?!!g.capture:!!g,f=te(f),o&&o[Kt]?(o=o.i,u=String(u).toString(),u in o.g&&(P=o.g[u],f=A(P,f,g,R),-1<f&&(Dt(P[f]),Array.prototype.splice.call(P,f,1),P.length==0&&(delete o.g[u],o.h--)))):o&&(o=q(o))&&(u=o.g[u.toString()],o=-1,u&&(o=A(u,f,g,R)),(f=-1<o?u[o]:null)&&U(f))}function U(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[Kt])v(u.i,o);else{var f=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(f,g,o.capture):u.detachEvent?u.detachEvent(M(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=q(u))?(v(f,o),f.h==0&&(f.src=null,u[C]=null)):Dt(o)}}}function M(o){return o in F?F[o]:F[o]="on"+o}function Y(o,u){if(o.da)o=!0;else{u=new Gn(u,this);var f=o.listener,g=o.ha||o.src;o.fa&&U(o),o=f.call(g,u)}return o}function q(o){return o=o[C],o instanceof cs?o:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0);function te(o){return typeof o=="function"?o:(o[J]||(o[J]=function(u){return o.handleEvent(u)}),o[J])}function Z(){Le.call(this),this.i=new cs(this),this.M=this,this.F=null}V(Z,Le),Z.prototype[Kt]=!0,Z.prototype.removeEventListener=function(o,u,f,g){B(this,o,u,f,g)};function ce(o,u){var f,g=o.F;if(g)for(f=[];g;g=g.F)f.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new Fe(u,o);else if(u instanceof Fe)u.target=u.target||o;else{var R=u;u=new Fe(g,o),T(u,R)}if(R=!0,f)for(var P=f.length-1;0<=P;P--){var j=u.g=f[P];R=de(j,g,!0,u)&&R}if(j=u.g=o,R=de(j,g,!0,u)&&R,R=de(j,g,!1,u)&&R,f)for(P=0;P<f.length;P++)j=u.g=f[P],R=de(j,g,!1,u)&&R}Z.prototype.N=function(){if(Z.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var f=o.g[u],g=0;g<f.length;g++)Dt(f[g]);delete o.g[u],o.h--}}this.F=null},Z.prototype.K=function(o,u,f,g){return this.i.add(String(o),u,!1,f,g)},Z.prototype.L=function(o,u,f,g){return this.i.add(String(o),u,!0,f,g)};function de(o,u,f,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var R=!0,P=0;P<u.length;++P){var j=u[P];if(j&&!j.da&&j.capture==f){var Te=j.listener,We=j.ha||j.src;j.fa&&v(o.i,j),R=Te.call(We,g)!==!1&&R}}return R&&!g.defaultPrevented}function qe(o,u,f){if(typeof o=="function")f&&(o=_(o,f));else if(o&&typeof o.handleEvent=="function")o=_(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function He(o){o.g=qe(()=>{o.g=null,o.i&&(o.i=!1,He(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class _t extends Le{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:He(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Je(o){Le.call(this),this.h=o,this.g={}}V(Je,Le);var gn=[];function ls(o){ye(o.g,function(u,f){this.g.hasOwnProperty(f)&&U(u)},o),o.g={}}Je.prototype.N=function(){Je.aa.N.call(this),ls(this)},Je.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ze=c.JSON.stringify,yt=c.JSON.parse,wi=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function wr(){}wr.prototype.h=null;function Wl(o){return o.h||(o.h=o.i())}function Gl(){}var us={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function da(){Fe.call(this,"d")}V(da,Fe);function pa(){Fe.call(this,"c")}V(pa,Fe);var Qn={},Kl=null;function Ai(){return Kl=Kl||new Z}Qn.La="serverreachability";function Ql(o){Fe.call(this,Qn.La,o)}V(Ql,Fe);function hs(o){const u=Ai();ce(u,new Ql(u))}Qn.STAT_EVENT="statevent";function Jl(o,u){Fe.call(this,Qn.STAT_EVENT,o),this.stat=u}V(Jl,Fe);function at(o){const u=Ai();ce(u,new Jl(u,o))}Qn.Ma="timingevent";function Xl(o,u){Fe.call(this,Qn.Ma,o),this.size=u}V(Xl,Fe);function fs(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function ds(){this.g=!0}ds.prototype.xa=function(){this.g=!1};function Fm(o,u,f,g,R,P){o.info(function(){if(o.g)if(P)for(var j="",Te=P.split("&"),We=0;We<Te.length;We++){var me=Te[We].split("=");if(1<me.length){var Xe=me[0];me=me[1];var Ye=Xe.split("_");j=2<=Ye.length&&Ye[1]=="type"?j+(Xe+"="+me+"&"):j+(Xe+"=redacted&")}}else j=null;else j=P;return"XMLHTTP REQ ("+g+") [attempt "+R+"]: "+u+`
`+f+`
`+j})}function Um(o,u,f,g,R,P,j){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+R+"]: "+u+`
`+f+`
`+P+" "+j})}function Ar(o,u,f,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+jm(o,f)+(g?" "+g:"")})}function Bm(o,u){o.info(function(){return"TIMEOUT: "+u})}ds.prototype.info=function(){};function jm(o,u){if(!o.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var g=f[o];if(!(2>g.length)){var R=g[1];if(Array.isArray(R)&&!(1>R.length)){var P=R[0];if(P!="noop"&&P!="stop"&&P!="close")for(var j=1;j<R.length;j++)R[j]=""}}}}return ze(f)}catch{return u}}var bi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Yl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ga;function Si(){}V(Si,wr),Si.prototype.g=function(){return new XMLHttpRequest},Si.prototype.i=function(){return{}},ga=new Si;function mn(o,u,f,g){this.j=o,this.i=u,this.l=f,this.R=g||1,this.U=new Je(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Zl}function Zl(){this.i=null,this.g="",this.h=!1}var eu={},ma={};function _a(o,u,f){o.L=1,o.v=Vi(Qt(u)),o.m=f,o.P=!0,tu(o,null)}function tu(o,u){o.F=Date.now(),Ri(o),o.A=Qt(o.v);var f=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),gu(f.i,"t",g),o.C=0,f=o.j.J,o.h=new Zl,o.g=Ou(o.j,f?u:null,!o.m),0<o.O&&(o.M=new _t(_(o.Y,o,o.g),o.O)),u=o.U,f=o.g,g=o.ca;var R="readystatechange";Array.isArray(R)||(R&&(gn[0]=R.toString()),R=gn);for(var P=0;P<R.length;P++){var j=O(f,R[P],g||u.handleEvent,!1,u.h||u);if(!j)break;u.g[j.key]=j}u=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),hs(),Fm(o.i,o.u,o.A,o.l,o.R,o.m)}mn.prototype.ca=function(o){o=o.target;const u=this.M;u&&Jt(o)==3?u.j():this.Y(o)},mn.prototype.Y=function(o){try{if(o==this.g)e:{const Ye=Jt(this.g);var u=this.g.Ba();const Rr=this.g.Z();if(!(3>Ye)&&(Ye!=3||this.g&&(this.h.h||this.g.oa()||Iu(this.g)))){this.J||Ye!=4||u==7||(u==8||0>=Rr?hs(3):hs(2)),ya(this);var f=this.g.Z();this.X=f;t:if(nu(this)){var g=Iu(this.g);o="";var R=g.length,P=Jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Jn(this),ps(this);var j="";break t}this.h.i=new c.TextDecoder}for(u=0;u<R;u++)this.h.h=!0,o+=this.h.i.decode(g[u],{stream:!(P&&u==R-1)});g.length=0,this.h.g+=o,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=f==200,Um(this.i,this.u,this.A,this.l,this.R,Ye,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Te,We=this.g;if((Te=We.g?We.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(Te)){var me=Te;break t}}me=null}if(f=me)Ar(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,va(this,f);else{this.o=!1,this.s=3,at(12),Jn(this),ps(this);break e}}if(this.P){f=!0;let It;for(;!this.J&&this.C<j.length;)if(It=$m(this,j),It==ma){Ye==4&&(this.s=4,at(14),f=!1),Ar(this.i,this.l,null,"[Incomplete Response]");break}else if(It==eu){this.s=4,at(15),Ar(this.i,this.l,j,"[Invalid Chunk]"),f=!1;break}else Ar(this.i,this.l,It,null),va(this,It);if(nu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ye!=4||j.length!=0||this.h.h||(this.s=1,at(16),f=!1),this.o=this.o&&f,!f)Ar(this.i,this.l,j,"[Invalid Chunked Response]"),Jn(this),ps(this);else if(0<j.length&&!this.W){this.W=!0;var Xe=this.j;Xe.g==this&&Xe.ba&&!Xe.M&&(Xe.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),ba(Xe),Xe.M=!0,at(11))}}else Ar(this.i,this.l,j,null),va(this,j);Ye==4&&Jn(this),this.o&&!this.J&&(Ye==4?Cu(this.j,this):(this.o=!1,Ri(this)))}else i_(this.g),f==400&&0<j.indexOf("Unknown SID")?(this.s=3,at(12)):(this.s=0,at(13)),Jn(this),ps(this)}}}catch{}finally{}};function nu(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function $m(o,u){var f=o.C,g=u.indexOf(`
`,f);return g==-1?ma:(f=Number(u.substring(f,g)),isNaN(f)?eu:(g+=1,g+f>u.length?ma:(u=u.slice(g,g+f),o.C=g+f,u)))}mn.prototype.cancel=function(){this.J=!0,Jn(this)};function Ri(o){o.S=Date.now()+o.I,ru(o,o.I)}function ru(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=fs(_(o.ba,o),u)}function ya(o){o.B&&(c.clearTimeout(o.B),o.B=null)}mn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Bm(this.i,this.A),this.L!=2&&(hs(),at(17)),Jn(this),this.s=2,ps(this)):ru(this,this.S-o)};function ps(o){o.j.G==0||o.J||Cu(o.j,o)}function Jn(o){ya(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,ls(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function va(o,u){try{var f=o.j;if(f.G!=0&&(f.g==o||Ea(f.h,o))){if(!o.K&&Ea(f.h,o)&&f.G==3){try{var g=f.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var R=g;if(R[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)Mi(f),Ni(f);else break e;Aa(f),at(18)}}else f.za=R[1],0<f.za-f.T&&37500>R[2]&&f.F&&f.v==0&&!f.C&&(f.C=fs(_(f.Za,f),6e3));if(1>=ou(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Yn(f,11)}else if((o.K||f.g==o)&&Mi(f),!K(u))for(R=f.Da.g.parse(u),u=0;u<R.length;u++){let me=R[u];if(f.T=me[0],me=me[1],f.G==2)if(me[0]=="c"){f.K=me[1],f.ia=me[2];const Xe=me[3];Xe!=null&&(f.la=Xe,f.j.info("VER="+f.la));const Ye=me[4];Ye!=null&&(f.Aa=Ye,f.j.info("SVER="+f.Aa));const Rr=me[5];Rr!=null&&typeof Rr=="number"&&0<Rr&&(g=1.5*Rr,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const It=o.g;if(It){const Fi=It.g?It.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Fi){var P=g.h;P.g||Fi.indexOf("spdy")==-1&&Fi.indexOf("quic")==-1&&Fi.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(Ta(P,P.h),P.h=null))}if(g.D){const Sa=It.g?It.g.getResponseHeader("X-HTTP-Session-Id"):null;Sa&&(g.ya=Sa,Se(g.I,g.D,Sa))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var j=o;if(g.qa=ku(g,g.J?g.ia:null,g.W),j.K){au(g.h,j);var Te=j,We=g.L;We&&(Te.I=We),Te.B&&(ya(Te),Ri(Te)),g.g=j}else Ru(g);0<f.i.length&&xi(f)}else me[0]!="stop"&&me[0]!="close"||Yn(f,7);else f.G==3&&(me[0]=="stop"||me[0]=="close"?me[0]=="stop"?Yn(f,7):wa(f):me[0]!="noop"&&f.l&&f.l.ta(me),f.v=0)}}hs(4)}catch{}}var qm=class{constructor(o,u){this.g=o,this.map=u}};function su(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function iu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function ou(o){return o.h?1:o.g?o.g.size:0}function Ea(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Ta(o,u){o.g?o.g.add(u):o.h=u}function au(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}su.prototype.cancel=function(){if(this.i=cu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function cu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.D);return u}return N(o.i)}function Hm(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var u=[],f=o.length,g=0;g<f;g++)u.push(o[g]);return u}u=[],f=0;for(g in o)u[f++]=o[g];return u}function zm(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var u=[];o=o.length;for(var f=0;f<o;f++)u.push(f);return u}u=[],f=0;for(const g in o)u[f++]=g;return u}}}function lu(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var f=zm(o),g=Hm(o),R=g.length,P=0;P<R;P++)u.call(void 0,g[P],f&&f[P],o)}var uu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Wm(o,u){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var g=o[f].indexOf("="),R=null;if(0<=g){var P=o[f].substring(0,g);R=o[f].substring(g+1)}else P=o[f];u(P,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function Xn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Xn){this.h=o.h,Pi(this,o.j),this.o=o.o,this.g=o.g,Ci(this,o.s),this.l=o.l;var u=o.i,f=new _s;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),hu(this,f),this.m=o.m}else o&&(u=String(o).match(uu))?(this.h=!1,Pi(this,u[1]||"",!0),this.o=gs(u[2]||""),this.g=gs(u[3]||"",!0),Ci(this,u[4]),this.l=gs(u[5]||"",!0),hu(this,u[6]||"",!0),this.m=gs(u[7]||"")):(this.h=!1,this.i=new _s(null,this.h))}Xn.prototype.toString=function(){var o=[],u=this.j;u&&o.push(ms(u,fu,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(ms(u,fu,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(ms(f,f.charAt(0)=="/"?Qm:Km,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",ms(f,Xm)),o.join("")};function Qt(o){return new Xn(o)}function Pi(o,u,f){o.j=f?gs(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Ci(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function hu(o,u,f){u instanceof _s?(o.i=u,Ym(o.i,o.h)):(f||(u=ms(u,Jm)),o.i=new _s(u,o.h))}function Se(o,u,f){o.i.set(u,f)}function Vi(o){return Se(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function gs(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function ms(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,Gm),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Gm(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var fu=/[#\/\?@]/g,Km=/[#\?:]/g,Qm=/[#\?]/g,Jm=/[#\?@]/g,Xm=/#/g;function _s(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function _n(o){o.g||(o.g=new Map,o.h=0,o.i&&Wm(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}n=_s.prototype,n.add=function(o,u){_n(this),this.i=null,o=br(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function du(o,u){_n(o),u=br(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function pu(o,u){return _n(o),u=br(o,u),o.g.has(u)}n.forEach=function(o,u){_n(this),this.g.forEach(function(f,g){f.forEach(function(R){o.call(u,R,g,this)},this)},this)},n.na=function(){_n(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let g=0;g<u.length;g++){const R=o[g];for(let P=0;P<R.length;P++)f.push(u[g])}return f},n.V=function(o){_n(this);let u=[];if(typeof o=="string")pu(this,o)&&(u=u.concat(this.g.get(br(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)u=u.concat(o[f])}return u},n.set=function(o,u){return _n(this),this.i=null,o=br(this,o),pu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function gu(o,u,f){du(o,u),0<f.length&&(o.i=null,o.g.set(br(o,u),N(f)),o.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var g=u[f];const P=encodeURIComponent(String(g)),j=this.V(g);for(g=0;g<j.length;g++){var R=P;j[g]!==""&&(R+="="+encodeURIComponent(String(j[g]))),o.push(R)}}return this.i=o.join("&")};function br(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Ym(o,u){u&&!o.j&&(_n(o),o.i=null,o.g.forEach(function(f,g){var R=g.toLowerCase();g!=R&&(du(this,g),gu(this,R,f))},o)),o.j=u}function Zm(o,u){const f=new ds;if(c.Image){const g=new Image;g.onload=b(yn,f,"TestLoadImage: loaded",!0,u,g),g.onerror=b(yn,f,"TestLoadImage: error",!1,u,g),g.onabort=b(yn,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=b(yn,f,"TestLoadImage: timeout",!1,u,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function e_(o,u){const f=new ds,g=new AbortController,R=setTimeout(()=>{g.abort(),yn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(P=>{clearTimeout(R),P.ok?yn(f,"TestPingServer: ok",!0,u):yn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(R),yn(f,"TestPingServer: error",!1,u)})}function yn(o,u,f,g,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),g(f)}catch{}}function t_(){this.g=new wi}function n_(o,u,f){const g=f||"";try{lu(o,function(R,P){let j=R;h(R)&&(j=ze(R)),u.push(g+P+"="+encodeURIComponent(j))})}catch(R){throw u.push(g+"type="+encodeURIComponent("_badmap")),R}}function Di(o){this.l=o.Ub||null,this.j=o.eb||!1}V(Di,wr),Di.prototype.g=function(){return new ki(this.l,this.j)},Di.prototype.i=(function(o){return function(){return o}})({});function ki(o,u){Z.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(ki,Z),n=ki.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,vs(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ys(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,vs(this)),this.g&&(this.readyState=3,vs(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;mu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function mu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?ys(this):vs(this),this.readyState==3&&mu(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,ys(this))},n.Qa=function(o){this.g&&(this.response=o,ys(this))},n.ga=function(){this.g&&ys(this)};function ys(o){o.readyState=4,o.l=null,o.j=null,o.v=null,vs(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function vs(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ki.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function _u(o){let u="";return ye(o,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function Ia(o,u,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=_u(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):Se(o,u,f))}function Ve(o){Z.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(Ve,Z);var r_=/^https?$/i,s_=["POST","PUT"];n=Ve.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ga.g(),this.v=this.o?Wl(this.o):Wl(ga),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(P){yu(this,P);return}if(o=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var R in g)f.set(R,g[R]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const P of g.keys())f.set(P,g.get(P));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(P=>P.toLowerCase()=="content-type"),R=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(s_,u,void 0))||g||R||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,j]of f)this.g.setRequestHeader(P,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Tu(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){yu(this,P)}};function yu(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,vu(o),Oi(o)}function vu(o){o.A||(o.A=!0,ce(o,"complete"),ce(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,ce(this,"complete"),ce(this,"abort"),Oi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Oi(this,!0)),Ve.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Eu(this):this.bb())},n.bb=function(){Eu(this)};function Eu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Jt(o)!=4||o.Z()!=2)){if(o.u&&Jt(o)==4)qe(o.Ea,0,o);else if(ce(o,"readystatechange"),Jt(o)==4){o.h=!1;try{const j=o.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var g;if(g=j===0){var R=String(o.D).match(uu)[1]||null;!R&&c.self&&c.self.location&&(R=c.self.location.protocol.slice(0,-1)),g=!r_.test(R?R.toLowerCase():"")}f=g}if(f)ce(o,"complete"),ce(o,"success");else{o.m=6;try{var P=2<Jt(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",vu(o)}}finally{Oi(o)}}}}function Oi(o,u){if(o.g){Tu(o);const f=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||ce(o,"ready");try{f.onreadystatechange=g}catch{}}}function Tu(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Jt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Jt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),yt(u)}};function Iu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function i_(o){const u={};o=(o.g&&2<=Jt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(K(o[g]))continue;var f=w(o[g]);const R=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const P=u[R]||[];u[R]=P,P.push(f)}I(u,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Es(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function wu(o){this.Aa=0,this.i=[],this.j=new ds,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Es("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Es("baseRetryDelayMs",5e3,o),this.cb=Es("retryDelaySeedMs",1e4,o),this.Wa=Es("forwardChannelMaxRetries",2,o),this.wa=Es("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new su(o&&o.concurrentRequestLimit),this.Da=new t_,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=wu.prototype,n.la=8,n.G=1,n.connect=function(o,u,f,g){at(0),this.W=o,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=ku(this,null,this.W),xi(this)};function wa(o){if(Au(o),o.G==3){var u=o.U++,f=Qt(o.I);if(Se(f,"SID",o.K),Se(f,"RID",u),Se(f,"TYPE","terminate"),Ts(o,f),u=new mn(o,o.j,u),u.L=2,u.v=Vi(Qt(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=u.v,f=!0),f||(u.g=Ou(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Ri(u)}Du(o)}function Ni(o){o.g&&(ba(o),o.g.cancel(),o.g=null)}function Au(o){Ni(o),o.u&&(c.clearTimeout(o.u),o.u=null),Mi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function xi(o){if(!iu(o.h)&&!o.s){o.s=!0;var u=o.Ga;ae||Wn(),ge||(ae(),ge=!0),Tt.add(u,o),o.B=0}}function o_(o,u){return ou(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=fs(_(o.Ga,o,u),Vu(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const R=new mn(this,this.j,o);let P=this.o;if(this.S&&(P?(P=m(P),T(P,this.S)):P=this.S),this.m!==null||this.O||(R.H=P,P=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=Su(this,R,u),f=Qt(this.I),Se(f,"RID",o),Se(f,"CVER",22),this.D&&Se(f,"X-HTTP-Session-Id",this.D),Ts(this,f),P&&(this.O?u="headers="+encodeURIComponent(String(_u(P)))+"&"+u:this.m&&Ia(f,this.m,P)),Ta(this.h,R),this.Ua&&Se(f,"TYPE","init"),this.P?(Se(f,"$req",u),Se(f,"SID","null"),R.T=!0,_a(R,f,null)):_a(R,f,u),this.G=2}}else this.G==3&&(o?bu(this,o):this.i.length==0||iu(this.h)||bu(this))};function bu(o,u){var f;u?f=u.l:f=o.U++;const g=Qt(o.I);Se(g,"SID",o.K),Se(g,"RID",f),Se(g,"AID",o.T),Ts(o,g),o.m&&o.o&&Ia(g,o.m,o.o),f=new mn(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Su(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ta(o.h,f),_a(f,g,u)}function Ts(o,u){o.H&&ye(o.H,function(f,g){Se(u,g,f)}),o.l&&lu({},function(f,g){Se(u,g,f)})}function Su(o,u,f){f=Math.min(o.i.length,f);var g=o.l?_(o.l.Na,o.l,o):null;e:{var R=o.i;let P=-1;for(;;){const j=["count="+f];P==-1?0<f?(P=R[0].g,j.push("ofs="+P)):P=0:j.push("ofs="+P);let Te=!0;for(let We=0;We<f;We++){let me=R[We].g;const Xe=R[We].map;if(me-=P,0>me)P=Math.max(0,R[We].g-100),Te=!1;else try{n_(Xe,j,"req"+me+"_")}catch{g&&g(Xe)}}if(Te){g=j.join("&");break e}}}return o=o.i.splice(0,f),u.D=o,g}function Ru(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;ae||Wn(),ge||(ae(),ge=!0),Tt.add(u,o),o.v=0}}function Aa(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=fs(_(o.Fa,o),Vu(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Pu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=fs(_(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,at(10),Ni(this),Pu(this))};function ba(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function Pu(o){o.g=new mn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=Qt(o.qa);Se(u,"RID","rpc"),Se(u,"SID",o.K),Se(u,"AID",o.T),Se(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Se(u,"TO",o.ja),Se(u,"TYPE","xmlhttp"),Ts(o,u),o.m&&o.o&&Ia(u,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=Vi(Qt(u)),f.m=null,f.P=!0,tu(f,o)}n.Za=function(){this.C!=null&&(this.C=null,Ni(this),Aa(this),at(19))};function Mi(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function Cu(o,u){var f=null;if(o.g==u){Mi(o),ba(o),o.g=null;var g=2}else if(Ea(o.h,u))f=u.D,au(o.h,u),g=1;else return;if(o.G!=0){if(u.o)if(g==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var R=o.B;g=Ai(),ce(g,new Xl(g,f)),xi(o)}else Ru(o);else if(R=u.s,R==3||R==0&&0<u.X||!(g==1&&o_(o,u)||g==2&&Aa(o)))switch(f&&0<f.length&&(u=o.h,u.i=u.i.concat(f)),R){case 1:Yn(o,5);break;case 4:Yn(o,10);break;case 3:Yn(o,6);break;default:Yn(o,2)}}}function Vu(o,u){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*u}function Yn(o,u){if(o.j.info("Error code "+u),u==2){var f=_(o.fb,o),g=o.Xa;const R=!g;g=new Xn(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Pi(g,"https"),Vi(g),R?Zm(g.toString(),f):e_(g.toString(),f)}else at(2);o.G=0,o.l&&o.l.sa(u),Du(o),Au(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))};function Du(o){if(o.G=0,o.ka=[],o.l){const u=cu(o.h);(u.length!=0||o.i.length!=0)&&(L(o.ka,u),L(o.ka,o.i),o.h.i.length=0,N(o.i),o.i.length=0),o.l.ra()}}function ku(o,u,f){var g=f instanceof Xn?Qt(f):new Xn(f);if(g.g!="")u&&(g.g=u+"."+g.g),Ci(g,g.s);else{var R=c.location;g=R.protocol,u=u?u+"."+R.hostname:R.hostname,R=+R.port;var P=new Xn(null);g&&Pi(P,g),u&&(P.g=u),R&&Ci(P,R),f&&(P.l=f),g=P}return f=o.D,u=o.ya,f&&u&&Se(g,f,u),Se(g,"VER",o.la),Ts(o,g),g}function Ou(o,u,f){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Ve(new Di({eb:f})):new Ve(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Nu(){}n=Nu.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Li(){}Li.prototype.g=function(o,u){return new dt(o,u)};function dt(o,u){Z.call(this),this.g=new wu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!K(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!K(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Sr(this)}V(dt,Z),dt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},dt.prototype.close=function(){wa(this.g)},dt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=ze(o),o=f);u.i.push(new qm(u.Ya++,o)),u.G==3&&xi(u)},dt.prototype.N=function(){this.g.l=null,delete this.j,wa(this.g),delete this.g,dt.aa.N.call(this)};function xu(o){da.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}V(xu,da);function Mu(){pa.call(this),this.status=1}V(Mu,pa);function Sr(o){this.g=o}V(Sr,Nu),Sr.prototype.ua=function(){ce(this.g,"a")},Sr.prototype.ta=function(o){ce(this.g,new xu(o))},Sr.prototype.sa=function(o){ce(this.g,new Mu)},Sr.prototype.ra=function(){ce(this.g,"b")},Li.prototype.createWebChannel=Li.prototype.g,dt.prototype.send=dt.prototype.o,dt.prototype.open=dt.prototype.m,dt.prototype.close=dt.prototype.close,Dp=function(){return new Li},Vp=function(){return Ai()},Cp=Qn,dc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},bi.NO_ERROR=0,bi.TIMEOUT=8,bi.HTTP_ERROR=6,Xi=bi,Yl.COMPLETE="complete",Pp=Yl,Gl.EventType=us,us.OPEN="a",us.CLOSE="b",us.ERROR="c",us.MESSAGE="d",Z.prototype.listen=Z.prototype.K,Cs=Gl,Ve.prototype.listenOnce=Ve.prototype.L,Ve.prototype.getLastError=Ve.prototype.Ka,Ve.prototype.getLastErrorCode=Ve.prototype.Ba,Ve.prototype.getStatus=Ve.prototype.Z,Ve.prototype.getResponseJson=Ve.prototype.Oa,Ve.prototype.getResponseText=Ve.prototype.oa,Ve.prototype.send=Ve.prototype.ea,Ve.prototype.setWithCredentials=Ve.prototype.Ha,Rp=Ve}).apply(typeof $i<"u"?$i:typeof self<"u"?self:typeof window<"u"?window:{});const Rh="@firebase/firestore",Ph="4.8.0";/**
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
 */class tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");/**
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
 */let ts="11.10.0";/**
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
 */const gr=new Zc("@firebase/firestore");function kr(){return gr.logLevel}function G(n,...e){if(gr.logLevel<=he.DEBUG){const t=e.map(nl);gr.debug(`Firestore (${ts}): ${n}`,...t)}}function un(n,...e){if(gr.logLevel<=he.ERROR){const t=e.map(nl);gr.error(`Firestore (${ts}): ${n}`,...t)}}function Ln(n,...e){if(gr.logLevel<=he.WARN){const t=e.map(nl);gr.warn(`Firestore (${ts}): ${n}`,...t)}}function nl(n){if(typeof n=="string")return n;try{/**
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
 */function ee(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,kp(n,r,t)}function kp(n,e,t){let r=`FIRESTORE (${ts}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw un(r),new Error(r)}function Ee(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||kp(e,s,r)}function ie(n,e){return n}/**
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
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends pn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Nn{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class Op{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class PT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(tt.UNAUTHENTICATED)))}shutdown(){}}class CT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class VT{constructor(e){this.t=e,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ee(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new Nn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Nn,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Nn)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ee(typeof r.accessToken=="string",31837,{l:r}),new Op(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ee(e===null||typeof e=="string",2055,{h:e}),new tt(e)}}class DT{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=tt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class kT{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new DT(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(tt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ch{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class OT{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,wt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ee(this.o===void 0,3512);const r=i=>{i.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,G("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Ch(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Ee(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ch(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function NT(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function Np(){return new TextEncoder}/**
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
 */class rl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=NT(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function ue(n,e){return n<e?-1:n>e?1:0}function pc(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return ue(r,s);{const i=Np(),a=xT(i.encode(Vh(n,t)),i.encode(Vh(e,t)));return a!==0?a:ue(r,s)}}t+=r>65535?2:1}return ue(n.length,e.length)}function Vh(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function xT(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return ue(n[t],e[t]);return ue(n.length,e.length)}function Gr(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
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
 */const Dh="__name__";class Nt{constructor(e,t,r){t===void 0?t=0:t>e.length&&ee(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&ee(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Nt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Nt?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Nt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return ue(e.length,t.length)}static compareSegments(e,t){const r=Nt.isNumericId(e),s=Nt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Nt.extractNumericId(e).compare(Nt.extractNumericId(t)):pc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return On.fromString(e.substring(4,e.length-2))}}class be extends Nt{construct(e,t,r){return new be(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new be(t)}static emptyPath(){return new be([])}}const MT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ke extends Nt{construct(e,t,r){return new Ke(e,t,r)}static isValidIdentifier(e){return MT.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ke.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Dh}static keyField(){return new Ke([Dh])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new W(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new W(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new W(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new W(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ke(t)}static emptyPath(){return new Ke([])}}/**
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
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(be.fromString(e))}static fromName(e){return new X(be.fromString(e).popFirst(5))}static empty(){return new X(be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return be.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new be(e.slice()))}}/**
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
 */function xp(n,e,t){if(!t)throw new W(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function LT(n,e,t,r){if(e===!0&&r===!0)throw new W(D.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function kh(n){if(!X.isDocumentKey(n))throw new W(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Oh(n){if(X.isDocumentKey(n))throw new W(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Mp(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ko(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ee(12329,{type:typeof n})}function lr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new W(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ko(n);throw new W(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function xe(n,e){const t={typeString:n};return e&&(t.value=e),t}function pi(n,e){if(!Mp(n))throw new W(D.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new W(D.INVALID_ARGUMENT,t);return!0}/**
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
 */const Nh=-62135596800,xh=1e6;class Ie{static now(){return Ie.fromMillis(Date.now())}static fromDate(e){return Ie.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*xh);return new Ie(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new W(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new W(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Nh)throw new W(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/xh}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ie._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(pi(e,Ie._jsonSchema))return new Ie(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Nh;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ie._jsonSchemaVersion="firestore/timestamp/1.0",Ie._jsonSchema={type:xe("string",Ie._jsonSchemaVersion),seconds:xe("number"),nanoseconds:xe("number")};/**
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
 */class re{static fromTimestamp(e){return new re(e)}static min(){return new re(new Ie(0,0))}static max(){return new re(new Ie(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ti=-1;function FT(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=re.fromTimestamp(r===1e9?new Ie(t+1,0):new Ie(t,r));return new Fn(s,X.empty(),e)}function UT(n){return new Fn(n.readTime,n.key,ti)}class Fn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Fn(re.min(),X.empty(),ti)}static max(){return new Fn(re.max(),X.empty(),ti)}}function BT(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=X.comparator(n.documentKey,e.documentKey),t!==0?t:ue(n.largestBatchId,e.largestBatchId))}/**
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
 */const jT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $T{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function ns(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==jT)throw n;G("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ee(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new k(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof k?t:k.resolve(t)}catch(t){return k.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):k.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):k.reject(t)}static resolve(e){return new k(((t,r)=>{t(e)}))}static reject(e){return new k(((t,r)=>{r(e)}))}static waitFor(e){return new k(((t,r)=>{let s=0,i=0,a=!1;e.forEach((c=>{++s,c.next((()=>{++i,a&&i===s&&t()}),(l=>r(l)))})),a=!0,i===s&&t()}))}static or(e){let t=k.resolve(!1);for(const r of e)t=t.next((s=>s?k.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,i)=>{r.push(t.call(this,s,i))})),this.waitFor(r)}static mapArray(e,t){return new k(((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;t(e[h]).next((d=>{a[h]=d,++c,c===i&&r(a)}),(d=>s(d)))}}))}static doWhile(e,t){return new k(((r,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):r()};i()}))}}function qT(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function rs(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Qo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Qo.ue=-1;/**
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
 */const sl=-1;function Jo(n){return n==null}function _o(n){return n===0&&1/n==-1/0}function HT(n){return typeof n=="number"&&Number.isInteger(n)&&!_o(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Lp="";function zT(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Mh(e)),e=WT(n.get(t),e);return Mh(e)}function WT(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Lp:t+="";break;default:t+=i}}return t}function Mh(n){return n+Lp+""}/**
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
 */function Lh(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function vr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Fp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Ce{constructor(e,t){this.comparator=e,this.root=t||Ge.EMPTY}insert(e,t){return new Ce(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ge.BLACK,null,null))}remove(e){return new Ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ge.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new qi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new qi(this.root,e,this.comparator,!1)}getReverseIterator(){return new qi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new qi(this.root,e,this.comparator,!0)}}class qi{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ge{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Ge.RED,this.left=s??Ge.EMPTY,this.right=i??Ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Ge(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ge.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ee(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ee(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ee(27949);return e+(this.isRed()?0:1)}}Ge.EMPTY=null,Ge.RED=!0,Ge.BLACK=!1;Ge.EMPTY=new class{constructor(){this.size=0}get key(){throw ee(57766)}get value(){throw ee(16141)}get color(){throw ee(16727)}get left(){throw ee(29726)}get right(){throw ee(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Ge(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class je{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Fh(this.data.getIterator())}getIteratorFrom(e){return new Fh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof je)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new je(this.comparator);return t.data=e,t}}class Fh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class At{constructor(e){this.fields=e,e.sort(Ke.comparator)}static empty(){return new At([])}unionWith(e){let t=new je(Ke.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new At(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Gr(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class Up extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Qe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Up("Invalid base64 string: "+i):i}})(e);return new Qe(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(e);return new Qe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qe.EMPTY_BYTE_STRING=new Qe("");const GT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Un(n){if(Ee(!!n,39018),typeof n=="string"){let e=0;const t=GT.exec(n);if(Ee(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ke(n.seconds),nanos:ke(n.nanos)}}function ke(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Bn(n){return typeof n=="string"?Qe.fromBase64String(n):Qe.fromUint8Array(n)}/**
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
 */const Bp="server_timestamp",jp="__type__",$p="__previous_value__",qp="__local_write_time__";function il(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[jp])===null||t===void 0?void 0:t.stringValue)===Bp}function Xo(n){const e=n.mapValue.fields[$p];return il(e)?Xo(e):e}function ni(n){const e=Un(n.mapValue.fields[qp].timestampValue);return new Ie(e.seconds,e.nanos)}/**
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
 */class KT{constructor(e,t,r,s,i,a,c,l,h,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=d}}const yo="(default)";class ri{constructor(e,t){this.projectId=e,this.database=t||yo}static empty(){return new ri("","")}get isDefaultDatabase(){return this.database===yo}isEqual(e){return e instanceof ri&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Hp="__type__",QT="__max__",Hi={mapValue:{}},zp="__vector__",vo="value";function jn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?il(n)?4:XT(n)?9007199254740991:JT(n)?10:11:ee(28295,{value:n})}function zt(n,e){if(n===e)return!0;const t=jn(n);if(t!==jn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ni(n).isEqual(ni(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Un(s.timestampValue),c=Un(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,i){return Bn(s.bytesValue).isEqual(Bn(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,i){return ke(s.geoPointValue.latitude)===ke(i.geoPointValue.latitude)&&ke(s.geoPointValue.longitude)===ke(i.geoPointValue.longitude)})(n,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return ke(s.integerValue)===ke(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=ke(s.doubleValue),c=ke(i.doubleValue);return a===c?_o(a)===_o(c):isNaN(a)&&isNaN(c)}return!1})(n,e);case 9:return Gr(n.arrayValue.values||[],e.arrayValue.values||[],zt);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Lh(a)!==Lh(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!zt(a[l],c[l])))return!1;return!0})(n,e);default:return ee(52216,{left:n})}}function si(n,e){return(n.values||[]).find((t=>zt(t,e)))!==void 0}function Kr(n,e){if(n===e)return 0;const t=jn(n),r=jn(e);if(t!==r)return ue(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ue(n.booleanValue,e.booleanValue);case 2:return(function(i,a){const c=ke(i.integerValue||i.doubleValue),l=ke(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(n,e);case 3:return Uh(n.timestampValue,e.timestampValue);case 4:return Uh(ni(n),ni(e));case 5:return pc(n.stringValue,e.stringValue);case 6:return(function(i,a){const c=Bn(i),l=Bn(a);return c.compareTo(l)})(n.bytesValue,e.bytesValue);case 7:return(function(i,a){const c=i.split("/"),l=a.split("/");for(let h=0;h<c.length&&h<l.length;h++){const d=ue(c[h],l[h]);if(d!==0)return d}return ue(c.length,l.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,a){const c=ue(ke(i.latitude),ke(a.latitude));return c!==0?c:ue(ke(i.longitude),ke(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Bh(n.arrayValue,e.arrayValue);case 10:return(function(i,a){var c,l,h,d;const p=i.fields||{},_=a.fields||{},b=(c=p[vo])===null||c===void 0?void 0:c.arrayValue,V=(l=_[vo])===null||l===void 0?void 0:l.arrayValue,N=ue(((h=b==null?void 0:b.values)===null||h===void 0?void 0:h.length)||0,((d=V==null?void 0:V.values)===null||d===void 0?void 0:d.length)||0);return N!==0?N:Bh(b,V)})(n.mapValue,e.mapValue);case 11:return(function(i,a){if(i===Hi.mapValue&&a===Hi.mapValue)return 0;if(i===Hi.mapValue)return 1;if(a===Hi.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=a.fields||{},d=Object.keys(h);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const _=pc(l[p],d[p]);if(_!==0)return _;const b=Kr(c[l[p]],h[d[p]]);if(b!==0)return b}return ue(l.length,d.length)})(n.mapValue,e.mapValue);default:throw ee(23264,{le:t})}}function Uh(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ue(n,e);const t=Un(n),r=Un(e),s=ue(t.seconds,r.seconds);return s!==0?s:ue(t.nanos,r.nanos)}function Bh(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Kr(t[s],r[s]);if(i)return i}return ue(t.length,r.length)}function Qr(n){return gc(n)}function gc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Un(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Bn(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return X.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=gc(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${gc(t.fields[a])}`;return s+"}"})(n.mapValue):ee(61005,{value:n})}function Yi(n){switch(jn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Xo(n);return e?16+Yi(e):16;case 5:return 2*n.stringValue.length;case 6:return Bn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Yi(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return vr(r.fields,((i,a)=>{s+=i.length+Yi(a)})),s})(n.mapValue);default:throw ee(13486,{value:n})}}function jh(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function mc(n){return!!n&&"integerValue"in n}function ol(n){return!!n&&"arrayValue"in n}function $h(n){return!!n&&"nullValue"in n}function qh(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Zi(n){return!!n&&"mapValue"in n}function JT(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Hp])===null||t===void 0?void 0:t.stringValue)===zp}function Hs(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return vr(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=Hs(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Hs(n.arrayValue.values[t]);return e}return Object.assign({},n)}function XT(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===QT}/**
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
 */class vt{constructor(e){this.value=e}static empty(){return new vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Zi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Hs(t)}setAll(e){let t=Ke.emptyPath(),r={},s=[];e.forEach(((a,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=Hs(a):s.push(c.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Zi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return zt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Zi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){vr(t,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new vt(Hs(this.value))}}function Wp(n){const e=[];return vr(n.fields,((t,r)=>{const s=new Ke([t]);if(Zi(r)){const i=Wp(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)})),new At(e)}/**
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
 */class rt{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new rt(e,0,re.min(),re.min(),re.min(),vt.empty(),0)}static newFoundDocument(e,t,r,s){return new rt(e,1,t,re.min(),r,s,0)}static newNoDocument(e,t){return new rt(e,2,t,re.min(),re.min(),vt.empty(),0)}static newUnknownDocument(e,t){return new rt(e,3,t,re.min(),re.min(),vt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof rt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Eo{constructor(e,t){this.position=e,this.inclusive=t}}function Hh(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=X.comparator(X.fromName(a.referenceValue),t.key):r=Kr(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function zh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!zt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class ii{constructor(e,t="asc"){this.field=e,this.dir=t}}function YT(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Gp{}class Ne extends Gp{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new eI(e,t,r):t==="array-contains"?new rI(e,r):t==="in"?new sI(e,r):t==="not-in"?new iI(e,r):t==="array-contains-any"?new oI(e,r):new Ne(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new tI(e,r):new nI(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Kr(t,this.value)):t!==null&&jn(this.value)===jn(t)&&this.matchesComparison(Kr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ct extends Gp{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Ct(e,t)}matches(e){return Kp(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Kp(n){return n.op==="and"}function Qp(n){return ZT(n)&&Kp(n)}function ZT(n){for(const e of n.filters)if(e instanceof Ct)return!1;return!0}function _c(n){if(n instanceof Ne)return n.field.canonicalString()+n.op.toString()+Qr(n.value);if(Qp(n))return n.filters.map((e=>_c(e))).join(",");{const e=n.filters.map((t=>_c(t))).join(",");return`${n.op}(${e})`}}function Jp(n,e){return n instanceof Ne?(function(r,s){return s instanceof Ne&&r.op===s.op&&r.field.isEqual(s.field)&&zt(r.value,s.value)})(n,e):n instanceof Ct?(function(r,s){return s instanceof Ct&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,c)=>i&&Jp(a,s.filters[c])),!0):!1})(n,e):void ee(19439)}function Xp(n){return n instanceof Ne?(function(t){return`${t.field.canonicalString()} ${t.op} ${Qr(t.value)}`})(n):n instanceof Ct?(function(t){return t.op.toString()+" {"+t.getFilters().map(Xp).join(" ,")+"}"})(n):"Filter"}class eI extends Ne{constructor(e,t,r){super(e,t,r),this.key=X.fromName(r.referenceValue)}matches(e){const t=X.comparator(e.key,this.key);return this.matchesComparison(t)}}class tI extends Ne{constructor(e,t){super(e,"in",t),this.keys=Yp("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class nI extends Ne{constructor(e,t){super(e,"not-in",t),this.keys=Yp("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Yp(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>X.fromName(r.referenceValue)))}class rI extends Ne{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ol(t)&&si(t.arrayValue,this.value)}}class sI extends Ne{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&si(this.value.arrayValue,t)}}class iI extends Ne{constructor(e,t){super(e,"not-in",t)}matches(e){if(si(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!si(this.value.arrayValue,t)}}class oI extends Ne{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ol(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>si(this.value.arrayValue,r)))}}/**
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
 */class aI{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Pe=null}}function Wh(n,e=null,t=[],r=[],s=null,i=null,a=null){return new aI(n,e,t,r,s,i,a)}function al(n){const e=ie(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>_c(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),Jo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>Qr(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>Qr(r))).join(",")),e.Pe=t}return e.Pe}function cl(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!YT(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Jp(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!zh(n.startAt,e.startAt)&&zh(n.endAt,e.endAt)}function yc(n){return X.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class ss{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function cI(n,e,t,r,s,i,a,c){return new ss(n,e,t,r,s,i,a,c)}function ll(n){return new ss(n)}function Gh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Zp(n){return n.collectionGroup!==null}function zs(n){const e=ie(n);if(e.Te===null){e.Te=[];const t=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new je(Ke.comparator);return a.filters.forEach((l=>{l.getFlattenedFilters().forEach((h=>{h.isInequality()&&(c=c.add(h.field))}))})),c})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Te.push(new ii(i,r))})),t.has(Ke.keyField().canonicalString())||e.Te.push(new ii(Ke.keyField(),r))}return e.Te}function Ut(n){const e=ie(n);return e.Ie||(e.Ie=lI(e,zs(n))),e.Ie}function lI(n,e){if(n.limitType==="F")return Wh(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new ii(s.field,i)}));const t=n.endAt?new Eo(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Eo(n.startAt.position,n.startAt.inclusive):null;return Wh(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function vc(n,e){const t=n.filters.concat([e]);return new ss(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Ec(n,e,t){return new ss(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Yo(n,e){return cl(Ut(n),Ut(e))&&n.limitType===e.limitType}function eg(n){return`${al(Ut(n))}|lt:${n.limitType}`}function Or(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>Xp(s))).join(", ")}]`),Jo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>Qr(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>Qr(s))).join(",")),`Target(${r})`})(Ut(n))}; limitType=${n.limitType})`}function Zo(n,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):X.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,e)&&(function(r,s){for(const i of zs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(a,c,l){const h=Hh(a,c,l);return a.inclusive?h<=0:h<0})(r.startAt,zs(r),s)||r.endAt&&!(function(a,c,l){const h=Hh(a,c,l);return a.inclusive?h>=0:h>0})(r.endAt,zs(r),s))})(n,e)}function uI(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function tg(n){return(e,t)=>{let r=!1;for(const s of zs(n)){const i=hI(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function hI(n,e,t){const r=n.field.isKeyField()?X.comparator(e.key,t.key):(function(i,a,c){const l=a.data.field(i),h=c.data.field(i);return l!==null&&h!==null?Kr(l,h):ee(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ee(19790,{direction:n.dir})}}/**
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
 */class Er{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){vr(this.inner,((t,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return Fp(this.inner)}size(){return this.innerSize}}/**
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
 */const fI=new Ce(X.comparator);function hn(){return fI}const ng=new Ce(X.comparator);function Vs(...n){let e=ng;for(const t of n)e=e.insert(t.key,t);return e}function rg(n){let e=ng;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function sr(){return Ws()}function sg(){return Ws()}function Ws(){return new Er((n=>n.toString()),((n,e)=>n.isEqual(e)))}const dI=new Ce(X.comparator),pI=new je(X.comparator);function fe(...n){let e=pI;for(const t of n)e=e.add(t);return e}const gI=new je(ue);function mI(){return gI}/**
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
 */function ul(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_o(e)?"-0":e}}function ig(n){return{integerValue:""+n}}function _I(n,e){return HT(e)?ig(e):ul(n,e)}/**
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
 */class ea{constructor(){this._=void 0}}function yI(n,e,t){return n instanceof To?(function(s,i){const a={fields:{[jp]:{stringValue:Bp},[qp]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&il(i)&&(i=Xo(i)),i&&(a.fields[$p]=i),{mapValue:a}})(t,e):n instanceof oi?ag(n,e):n instanceof ai?cg(n,e):(function(s,i){const a=og(s,i),c=Kh(a)+Kh(s.Ee);return mc(a)&&mc(s.Ee)?ig(c):ul(s.serializer,c)})(n,e)}function vI(n,e,t){return n instanceof oi?ag(n,e):n instanceof ai?cg(n,e):t}function og(n,e){return n instanceof Io?(function(r){return mc(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class To extends ea{}class oi extends ea{constructor(e){super(),this.elements=e}}function ag(n,e){const t=lg(e);for(const r of n.elements)t.some((s=>zt(s,r)))||t.push(r);return{arrayValue:{values:t}}}class ai extends ea{constructor(e){super(),this.elements=e}}function cg(n,e){let t=lg(e);for(const r of n.elements)t=t.filter((s=>!zt(s,r)));return{arrayValue:{values:t}}}class Io extends ea{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Kh(n){return ke(n.integerValue||n.doubleValue)}function lg(n){return ol(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function EI(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof oi&&s instanceof oi||r instanceof ai&&s instanceof ai?Gr(r.elements,s.elements,zt):r instanceof Io&&s instanceof Io?zt(r.Ee,s.Ee):r instanceof To&&s instanceof To})(n.transform,e.transform)}class TI{constructor(e,t){this.version=e,this.transformResults=t}}class sn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new sn}static exists(e){return new sn(void 0,e)}static updateTime(e){return new sn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function eo(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ta{}function ug(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new fg(n.key,sn.none()):new gi(n.key,n.data,sn.none());{const t=n.data,r=vt.empty();let s=new je(Ke.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Tr(n.key,r,new At(s.toArray()),sn.none())}}function II(n,e,t){n instanceof gi?(function(s,i,a){const c=s.value.clone(),l=Jh(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(n,e,t):n instanceof Tr?(function(s,i,a){if(!eo(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=Jh(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(hg(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,e,t):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function Gs(n,e,t,r){return n instanceof gi?(function(i,a,c,l){if(!eo(i.precondition,a))return c;const h=i.value.clone(),d=Xh(i.fieldTransforms,l,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null})(n,e,t,r):n instanceof Tr?(function(i,a,c,l){if(!eo(i.precondition,a))return c;const h=Xh(i.fieldTransforms,l,a),d=a.data;return d.setAll(hg(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(n,e,t,r):(function(i,a,c){return eo(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(n,e,t)}function wI(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=og(r.transform,s||null);i!=null&&(t===null&&(t=vt.empty()),t.set(r.field,i))}return t||null}function Qh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Gr(r,s,((i,a)=>EI(i,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class gi extends ta{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Tr extends ta{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function hg(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function Jh(n,e,t){const r=new Map;Ee(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,vI(a,c,t[s]))}return r}function Xh(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,yI(i,a,e))}return r}class fg extends ta{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class AI extends ta{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class bI{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&II(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Gs(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Gs(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=sg();return this.mutations.forEach((s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const l=ug(a,c);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(re.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),fe())}isEqual(e){return this.batchId===e.batchId&&Gr(this.mutations,e.mutations,((t,r)=>Qh(t,r)))&&Gr(this.baseMutations,e.baseMutations,((t,r)=>Qh(t,r)))}}class hl{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Ee(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return dI})();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new hl(e,t,r,s)}}/**
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
 */class SI{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class RI{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Oe,pe;function PI(n){switch(n){case D.OK:return ee(64938);case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0;default:return ee(15467,{code:n})}}function dg(n){if(n===void 0)return un("GRPC error has no .code"),D.UNKNOWN;switch(n){case Oe.OK:return D.OK;case Oe.CANCELLED:return D.CANCELLED;case Oe.UNKNOWN:return D.UNKNOWN;case Oe.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case Oe.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case Oe.INTERNAL:return D.INTERNAL;case Oe.UNAVAILABLE:return D.UNAVAILABLE;case Oe.UNAUTHENTICATED:return D.UNAUTHENTICATED;case Oe.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case Oe.NOT_FOUND:return D.NOT_FOUND;case Oe.ALREADY_EXISTS:return D.ALREADY_EXISTS;case Oe.PERMISSION_DENIED:return D.PERMISSION_DENIED;case Oe.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case Oe.ABORTED:return D.ABORTED;case Oe.OUT_OF_RANGE:return D.OUT_OF_RANGE;case Oe.UNIMPLEMENTED:return D.UNIMPLEMENTED;case Oe.DATA_LOSS:return D.DATA_LOSS;default:return ee(39323,{code:n})}}(pe=Oe||(Oe={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const CI=new On([4294967295,4294967295],0);function Yh(n){const e=Np().encode(n),t=new Sp;return t.update(e),new Uint8Array(t.digest())}function Zh(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new On([t,r],0),new On([s,i],0)]}class fl{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Ds(`Invalid padding: ${t}`);if(r<0)throw new Ds(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ds(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Ds(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=On.fromNumber(this.fe)}pe(e,t,r){let s=e.add(t.multiply(On.fromNumber(r)));return s.compare(CI)===1&&(s=new On([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=Yh(e),[r,s]=Zh(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);if(!this.ye(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new fl(i,s,t);return r.forEach((c=>a.insert(c))),a}insert(e){if(this.fe===0)return;const t=Yh(e),[r,s]=Zh(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);this.we(a)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Ds extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class na{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,mi.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new na(re.min(),s,new Ce(ue),hn(),fe())}}class mi{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new mi(r,t,fe(),fe(),fe())}}/**
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
 */class to{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=s}}class pg{constructor(e,t){this.targetId=e,this.De=t}}class gg{constructor(e,t,r=Qe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class ef{constructor(){this.ve=0,this.Ce=tf(),this.Fe=Qe.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=fe(),t=fe(),r=fe();return this.Ce.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:ee(38017,{changeType:i})}})),new mi(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=tf()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Ee(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class VI{constructor(e){this.We=e,this.Ge=new Map,this.ze=hn(),this.je=zi(),this.Je=zi(),this.He=new Ce(ue)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:ee(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((r,s)=>{this.nt(s)&&t(s)}))}it(e){const t=e.targetId,r=e.De.count,s=this.st(t);if(s){const i=s.target;if(yc(i))if(r===0){const a=new X(i.path);this.Xe(t,a,rt.newNoDocument(a,re.min()))}else Ee(r===1,20013,{expectedCount:r});else{const a=this.ot(t);if(a!==r){const c=this._t(e),l=c?this.ut(c,e,a):1;if(l!==0){this.rt(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,h)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=Bn(r).toUint8Array()}catch(l){if(l instanceof Up)return Ln("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new fl(a,s,i)}catch(l){return Ln(l instanceof Ds?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.fe===0?null:c}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let s=0;return r.forEach((i=>{const a=this.We.lt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Xe(t,i,null),s++)})),s}Pt(e){const t=new Map;this.Ge.forEach(((i,a)=>{const c=this.st(a);if(c){if(i.current&&yc(c.target)){const l=new X(c.target.path);this.Tt(l).has(a)||this.It(a,l)||this.Xe(a,l,rt.newNoDocument(l,e))}i.Ne&&(t.set(a,i.Le()),i.ke())}}));let r=fe();this.Je.forEach(((i,a)=>{let c=!0;a.forEachWhile((l=>{const h=this.st(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.ze.forEach(((i,a)=>a.setReadTime(e)));const s=new na(e,t,this.He,this.ze,r);return this.ze=hn(),this.je=zi(),this.Je=zi(),this.He=new Ce(ue),s}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,t)?s.qe(t,1):s.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new ef,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new je(ue),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new je(ue),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||G("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new ef),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function zi(){return new Ce(X.comparator)}function tf(){return new Ce(X.comparator)}const DI={asc:"ASCENDING",desc:"DESCENDING"},kI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},OI={and:"AND",or:"OR"};class NI{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Tc(n,e){return n.useProto3Json||Jo(e)?e:{value:e}}function wo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function mg(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function xI(n,e){return wo(n,e.toTimestamp())}function Bt(n){return Ee(!!n,49232),re.fromTimestamp((function(t){const r=Un(t);return new Ie(r.seconds,r.nanos)})(n))}function dl(n,e){return Ic(n,e).canonicalString()}function Ic(n,e){const t=(function(s){return new be(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function _g(n){const e=be.fromString(n);return Ee(Ig(e),10190,{key:e.toString()}),e}function wc(n,e){return dl(n.databaseId,e.path)}function Ha(n,e){const t=_g(e);if(t.get(1)!==n.databaseId.projectId)throw new W(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new W(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new X(vg(t))}function yg(n,e){return dl(n.databaseId,e)}function MI(n){const e=_g(n);return e.length===4?be.emptyPath():vg(e)}function Ac(n){return new be(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function vg(n){return Ee(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function nf(n,e,t){return{name:wc(n,e),fields:t.value.mapValue.fields}}function LI(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ee(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(h,d){return h.useProto3Json?(Ee(d===void 0||typeof d=="string",58123),Qe.fromBase64String(d||"")):(Ee(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Qe.fromUint8Array(d||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&(function(h){const d=h.code===void 0?D.UNKNOWN:dg(h.code);return new W(d,h.message||"")})(a);t=new gg(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ha(n,r.document.name),i=Bt(r.document.updateTime),a=r.document.createTime?Bt(r.document.createTime):re.min(),c=new vt({mapValue:{fields:r.document.fields}}),l=rt.newFoundDocument(s,i,a,c),h=r.targetIds||[],d=r.removedTargetIds||[];t=new to(h,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ha(n,r.document),i=r.readTime?Bt(r.readTime):re.min(),a=rt.newNoDocument(s,i),c=r.removedTargetIds||[];t=new to([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ha(n,r.document),i=r.removedTargetIds||[];t=new to([],i,s,null)}else{if(!("filter"in e))return ee(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new RI(s,i),c=r.targetId;t=new pg(c,a)}}return t}function FI(n,e){let t;if(e instanceof gi)t={update:nf(n,e.key,e.value)};else if(e instanceof fg)t={delete:wc(n,e.key)};else if(e instanceof Tr)t={update:nf(n,e.key,e.data),updateMask:GI(e.fieldMask)};else{if(!(e instanceof AI))return ee(16599,{Rt:e.type});t={verify:wc(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(i,a){const c=a.transform;if(c instanceof To)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof oi)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof ai)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Io)return{fieldPath:a.field.canonicalString(),increment:c.Ee};throw ee(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:xI(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ee(27497)})(n,e.precondition)),t}function UI(n,e){return n&&n.length>0?(Ee(e!==void 0,14353),n.map((t=>(function(s,i){let a=s.updateTime?Bt(s.updateTime):Bt(i);return a.isEqual(re.min())&&(a=Bt(i)),new TI(a,s.transformResults||[])})(t,e)))):[]}function BI(n,e){return{documents:[yg(n,e.path)]}}function jI(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=yg(n,s);const i=(function(h){if(h.length!==0)return Tg(Ct.create(h,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const a=(function(h){if(h.length!==0)return h.map((d=>(function(_){return{field:Nr(_.field),direction:HI(_.dir)}})(d)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Tc(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{Vt:t,parent:s}}function $I(n){let e=MI(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Ee(r===1,65062);const d=t.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];t.where&&(i=(function(p){const _=Eg(p);return _ instanceof Ct&&Qp(_)?_.getFilters():[_]})(t.where));let a=[];t.orderBy&&(a=(function(p){return p.map((_=>(function(V){return new ii(xr(V.field),(function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(V.direction))})(_)))})(t.orderBy));let c=null;t.limit&&(c=(function(p){let _;return _=typeof p=="object"?p.value:p,Jo(_)?null:_})(t.limit));let l=null;t.startAt&&(l=(function(p){const _=!!p.before,b=p.values||[];return new Eo(b,_)})(t.startAt));let h=null;return t.endAt&&(h=(function(p){const _=!p.before,b=p.values||[];return new Eo(b,_)})(t.endAt)),cI(e,s,a,i,c,"F",l,h)}function qI(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Eg(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=xr(t.unaryFilter.field);return Ne.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=xr(t.unaryFilter.field);return Ne.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=xr(t.unaryFilter.field);return Ne.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=xr(t.unaryFilter.field);return Ne.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ee(61313);default:return ee(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Ne.create(xr(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ee(58110);default:return ee(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Ct.create(t.compositeFilter.filters.map((r=>Eg(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ee(1026)}})(t.compositeFilter.op))})(n):ee(30097,{filter:n})}function HI(n){return DI[n]}function zI(n){return kI[n]}function WI(n){return OI[n]}function Nr(n){return{fieldPath:n.canonicalString()}}function xr(n){return Ke.fromServerFormat(n.fieldPath)}function Tg(n){return n instanceof Ne?(function(t){if(t.op==="=="){if(qh(t.value))return{unaryFilter:{field:Nr(t.field),op:"IS_NAN"}};if($h(t.value))return{unaryFilter:{field:Nr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(qh(t.value))return{unaryFilter:{field:Nr(t.field),op:"IS_NOT_NAN"}};if($h(t.value))return{unaryFilter:{field:Nr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Nr(t.field),op:zI(t.op),value:t.value}}})(n):n instanceof Ct?(function(t){const r=t.getFilters().map((s=>Tg(s)));return r.length===1?r[0]:{compositeFilter:{op:WI(t.op),filters:r}}})(n):ee(54877,{filter:n})}function GI(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Ig(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Pn{constructor(e,t,r,s,i=re.min(),a=re.min(),c=Qe.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Pn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Pn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Pn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Pn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class KI{constructor(e){this.gt=e}}function QI(n){const e=$I({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ec(e,e.limit,"L"):e}/**
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
 */class JI{constructor(){this.Dn=new XI}addToCollectionParentIndex(e,t){return this.Dn.add(t),k.resolve()}getCollectionParents(e,t){return k.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return k.resolve()}deleteFieldIndex(e,t){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,t){return k.resolve()}getDocumentsMatchingTarget(e,t){return k.resolve(null)}getIndexType(e,t){return k.resolve(0)}getFieldIndexes(e,t){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,t){return k.resolve(Fn.min())}getMinOffsetFromCollectionGroup(e,t){return k.resolve(Fn.min())}updateCollectionGroup(e,t,r){return k.resolve()}updateIndexEntries(e,t){return k.resolve()}}class XI{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new je(be.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new je(be.comparator)).toArray()}}/**
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
 */const rf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},wg=41943040;class ht{static withCacheSize(e){return new ht(e,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */ht.DEFAULT_COLLECTION_PERCENTILE=10,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ht.DEFAULT=new ht(wg,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ht.DISABLED=new ht(-1,0,0);/**
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
 */class Jr{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Jr(0)}static ur(){return new Jr(-1)}}/**
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
 */const sf="LruGarbageCollector",YI=1048576;function of([n,e],[t,r]){const s=ue(n,t);return s===0?ue(e,r):s}class ZI{constructor(e){this.Tr=e,this.buffer=new je(of),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();of(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class ew{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){G(sf,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){rs(t)?G(sf,"Ignoring IndexedDB error during garbage collection: ",t):await ns(t)}await this.Rr(3e5)}))}}class tw{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return k.resolve(Qo.ue);const r=new ZI(t);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(G("LruGarbageCollector","Garbage collection skipped; disabled"),k.resolve(rf)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(G("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),rf):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,s,i,a,c,l,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(G("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,c=Date.now(),this.removeTargets(e,r,t)))).next((p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(h=Date.now(),kr()<=he.DEBUG&&G("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-d}ms`),k.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function nw(n,e){return new tw(n,e)}/**
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
 */class rw{constructor(){this.changes=new Er((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,rt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?k.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class sw{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class iw{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&Gs(r.mutation,s,At.empty(),Ie.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,fe()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=fe()){const s=sr();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((i=>{let a=Vs();return i.forEach(((c,l)=>{a=a.insert(c,l.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const r=sr();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,fe())))}populateOverlays(e,t,r){const s=[];return r.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((a,c)=>{t.set(a,c)}))}))}computeViews(e,t,r,s){let i=hn();const a=Ws(),c=(function(){return Ws()})();return t.forEach(((l,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof Tr)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),Gs(d.mutation,h,d.mutation.getFieldMask(),Ie.now())):a.set(h.key,At.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((h,d)=>a.set(h,d))),t.forEach(((h,d)=>{var p;return c.set(h,new sw(d,(p=a.get(h))!==null&&p!==void 0?p:null))})),c)))}recalculateAndSaveOverlays(e,t){const r=Ws();let s=new Ce(((a,c)=>a-c)),i=fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const c of a)c.keys().forEach((l=>{const h=t.get(l);if(h===null)return;let d=r.get(l)||At.empty();d=c.applyToLocalView(h,d),r.set(l,d);const p=(s.get(c.batchId)||fe()).add(l);s=s.insert(c.batchId,p)}))})).next((()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,d=l.value,p=sg();d.forEach((_=>{if(!i.has(_)){const b=ug(t.get(_),r.get(_));b!==null&&p.set(_,b),i=i.add(_)}})),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return k.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return(function(a){return X.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Zp(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):k.resolve(sr());let c=ti,l=i;return a.next((h=>k.forEach(h,((d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(d)?k.resolve():this.remoteDocumentCache.getEntry(e,d).next((_=>{l=l.insert(d,_)}))))).next((()=>this.populateOverlays(e,h,i))).next((()=>this.computeViews(e,l,h,fe()))).next((d=>({batchId:c,changes:rg(d)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new X(t)).next((r=>{let s=Vs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Vs();return this.indexManager.getCollectionParents(e,i).next((c=>k.forEach(c,(l=>{const h=(function(p,_){return new ss(_,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next((d=>{d.forEach(((p,_)=>{a=a.insert(p,_)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s)))).next((a=>{i.forEach(((l,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,rt.newInvalidDocument(d)))}));let c=Vs();return a.forEach(((l,h)=>{const d=i.get(l);d!==void 0&&Gs(d.mutation,h,At.empty(),Ie.now()),Zo(t,h)&&(c=c.insert(l,h))})),c}))}}/**
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
 */class ow{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return k.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:Bt(s.createTime)}})(t)),k.resolve()}getNamedQuery(e,t){return k.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(s){return{name:s.name,query:QI(s.bundledQuery),readTime:Bt(s.readTime)}})(t)),k.resolve()}}/**
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
 */class aw{constructor(){this.overlays=new Ce(X.comparator),this.kr=new Map}getOverlay(e,t){return k.resolve(this.overlays.get(t))}getOverlays(e,t){const r=sr();return k.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,i)=>{this.wt(e,t,i)})),k.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(r)),k.resolve()}getOverlaysForCollection(e,t,r){const s=sr(),i=t.length+1,a=new X(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return k.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Ce(((h,d)=>h-d));const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=sr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const c=sr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((h,d)=>c.set(h,d))),!(c.size()>=s)););return k.resolve(c)}wt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new SI(t,r));let i=this.kr.get(t);i===void 0&&(i=fe(),this.kr.set(t,i)),this.kr.set(t,i.add(r.key))}}/**
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
 */class cw{constructor(){this.sessionToken=Qe.EMPTY_BYTE_STRING}getSessionToken(e){return k.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,k.resolve()}}/**
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
 */class pl{constructor(){this.qr=new je($e.Qr),this.$r=new je($e.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new $e(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new $e(e,t))}Gr(e,t){e.forEach((r=>this.removeReference(r,t)))}zr(e){const t=new X(new be([])),r=new $e(t,e),s=new $e(t,e+1),i=[];return this.$r.forEachInRange([r,s],(a=>{this.Wr(a),i.push(a.key)})),i}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new X(new be([])),r=new $e(t,e),s=new $e(t,e+1);let i=fe();return this.$r.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(e){const t=new $e(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class $e{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return X.comparator(e.key,t.key)||ue(e.Hr,t.Hr)}static Ur(e,t){return ue(e.Hr,t.Hr)||X.comparator(e.key,t.key)}}/**
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
 */class lw{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new je($e.Qr)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new bI(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.Yr=this.Yr.add(new $e(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return k.resolve(a)}lookupMutationBatch(e,t){return k.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return k.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?sl:this.er-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new $e(t,0),s=new $e(t,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],(a=>{const c=this.Zr(a.Hr);i.push(c)})),k.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new je(ue);return t.forEach((s=>{const i=new $e(s,0),a=new $e(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,a],(c=>{r=r.add(c.Hr)}))})),k.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;X.isDocumentKey(i)||(i=i.child(""));const a=new $e(new X(i),0);let c=new je(ue);return this.Yr.forEachWhile((l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Hr)),!0)}),a),k.resolve(this.ei(c))}ei(e){const t=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){Ee(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return k.forEach(t.mutations,(s=>{const i=new $e(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,t){const r=new $e(t,0),s=this.Yr.firstAfterOrEqual(r);return k.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class uw{constructor(e){this.ni=e,this.docs=(function(){return new Ce(X.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return k.resolve(r?r.document.mutableCopy():rt.newInvalidDocument(t))}getEntries(e,t){let r=hn();return t.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():rt.newInvalidDocument(s))})),k.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=hn();const a=t.path,c=new X(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:d}}=l.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||BT(UT(d),r)<=0||(s.has(d.key)||Zo(t,d))&&(i=i.insert(d.key,d.mutableCopy()))}return k.resolve(i)}getAllFromCollectionGroup(e,t,r,s){ee(9500)}ri(e,t){return k.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new hw(this)}getSize(e){return k.resolve(this.size)}}class hw extends rw{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),k.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class fw{constructor(e){this.persistence=e,this.ii=new Er((t=>al(t)),cl),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.si=0,this.oi=new pl,this.targetCount=0,this._i=Jr.ar()}forEachTarget(e,t){return this.ii.forEach(((r,s)=>t(s))),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),k.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Jr(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,k.resolve()}updateTargetData(e,t){return this.hr(t),k.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ii.forEach(((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.ii.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),k.waitFor(i).next((()=>s))}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return k.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),k.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((a=>{i.push(s.markPotentiallyOrphaned(e,a))})),k.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),k.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return k.resolve(r)}containsKey(e,t){return k.resolve(this.oi.containsKey(t))}}/**
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
 */class Ag{constructor(e,t){this.ai={},this.overlays={},this.ui=new Qo(0),this.ci=!1,this.ci=!0,this.li=new cw,this.referenceDelegate=e(this),this.hi=new fw(this),this.indexManager=new JI,this.remoteDocumentCache=(function(s){return new uw(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new KI(t),this.Ti=new ow(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new aw,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new lw(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){G("MemoryPersistence","Starting transaction:",e);const s=new dw(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,t){return k.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,t))))}}class dw extends $T{constructor(e){super(),this.currentSequenceNumber=e}}class gl{constructor(e){this.persistence=e,this.Ai=new pl,this.Ri=null}static Vi(e){return new gl(e)}get mi(){if(this.Ri)return this.Ri;throw ee(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),k.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),k.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.mi.add(i.toString())))})).next((()=>r.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.mi,(r=>{const s=X.fromPath(r);return this.fi(e,s).next((i=>{i||t.removeEntry(s,re.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return k.or([()=>k.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Ao{constructor(e,t){this.persistence=e,this.gi=new Er((r=>zT(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=nw(this,t)}static Vi(e,t){return new Ao(e,t)}Ii(){}di(e){return k.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}gr(e,t){return k.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((i=>i?k.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,(a=>this.Sr(e,a,t).next((c=>{c||(r++,i.removeEntry(a,re.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),k.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),k.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),k.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),k.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Yi(e.data.value)),t}Sr(e,t,r){return k.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.gi.get(t);return k.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class ml{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=s}static Es(e,t){let r=fe(),s=fe();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ml(e,t.fromCache,r,s)}}/**
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
 */class pw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class gw{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return uE()?8:qT(it())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ps(e,t).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ys(e,t,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new pw;return this.ws(e,t,a).next((c=>{if(i.result=c,this.Rs)return this.Ss(e,t,a,c.size)}))})).next((()=>i.result))}Ss(e,t,r,s){return r.documentReadCount<this.Vs?(kr()<=he.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",Or(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),k.resolve()):(kr()<=he.DEBUG&&G("QueryEngine","Query:",Or(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(kr()<=he.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",Or(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ut(t))):k.resolve())}ps(e,t){if(Gh(t))return k.resolve(null);let r=Ut(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=Ec(t,null,"F"),r=Ut(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const a=fe(...i);return this.gs.getDocuments(e,a).next((c=>this.indexManager.getMinOffset(e,r).next((l=>{const h=this.bs(t,c);return this.Ds(t,h,a,l.readTime)?this.ps(e,Ec(t,null,"F")):this.vs(e,h,t,l)}))))})))))}ys(e,t,r,s){return Gh(t)||s.isEqual(re.min())?k.resolve(null):this.gs.getDocuments(e,r).next((i=>{const a=this.bs(t,i);return this.Ds(t,a,r,s)?k.resolve(null):(kr()<=he.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Or(t)),this.vs(e,a,t,FT(s,ti)).next((c=>c)))}))}bs(e,t){let r=new je(tg(e));return t.forEach(((s,i)=>{Zo(e,i)&&(r=r.add(i))})),r}Ds(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,t,r){return kr()<=he.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",Or(t)),this.gs.getDocumentsMatchingQuery(e,t,Fn.min(),r)}vs(e,t,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((i=>(t.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
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
 */const _l="LocalStore",mw=3e8;class _w{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.Fs=new Ce(ue),this.Ms=new Er((i=>al(i)),cl),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new iw(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function yw(n,e,t,r){return new _w(n,e,t,r)}async function bg(n,e){const t=ie(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,t.Ns(e),t.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],c=[];let l=fe();for(const h of s){a.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}for(const h of i){c.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}return t.localDocuments.getDocuments(r,l).next((h=>({Bs:h,removedBatchIds:a,addedBatchIds:c})))}))}))}function vw(n,e){const t=ie(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=t.Os.newChangeBuffer({trackRemovals:!0});return(function(c,l,h,d){const p=h.batch,_=p.keys();let b=k.resolve();return _.forEach((V=>{b=b.next((()=>d.getEntry(l,V))).next((N=>{const L=h.docVersions.get(V);Ee(L!==null,48541),N.version.compareTo(L)<0&&(p.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),d.addEntry(N)))}))})),b.next((()=>c.mutationQueue.removeMutationBatch(l,p)))})(t,r,e,i).next((()=>i.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=fe();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function Sg(n){const e=ie(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function Ew(n,e){const t=ie(n),r=e.snapshotVersion;let s=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=t.Os.newChangeBuffer({trackRemovals:!0});s=t.Fs;const c=[];e.targetChanges.forEach(((d,p)=>{const _=s.get(p);if(!_)return;c.push(t.hi.removeMatchingKeys(i,d.removedDocuments,p).next((()=>t.hi.addMatchingKeys(i,d.addedDocuments,p))));let b=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?b=b.withResumeToken(Qe.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):d.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(d.resumeToken,r)),s=s.insert(p,b),(function(N,L,z){return N.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=mw?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0})(_,b,d)&&c.push(t.hi.updateTargetData(i,b))}));let l=hn(),h=fe();if(e.documentUpdates.forEach((d=>{e.resolvedLimboDocuments.has(d)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,d))})),c.push(Tw(i,a,e.documentUpdates).next((d=>{l=d.Ls,h=d.ks}))),!r.isEqual(re.min())){const d=t.hi.getLastRemoteSnapshotVersion(i).next((p=>t.hi.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(d)}return k.waitFor(c).next((()=>a.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,l,h))).next((()=>l))})).then((i=>(t.Fs=s,i)))}function Tw(n,e,t){let r=fe(),s=fe();return t.forEach((i=>r=r.add(i))),e.getEntries(n,r).next((i=>{let a=hn();return t.forEach(((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(re.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):G(_l,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)})),{Ls:a,ks:s}}))}function Iw(n,e){const t=ie(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=sl),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function ww(n,e){const t=ie(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.hi.getTargetData(r,e).next((i=>i?(s=i,k.resolve(s)):t.hi.allocateTargetId(r).next((a=>(s=new Pn(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r}))}async function bc(n,e,t){const r=ie(n),s=r.Fs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!rs(a))throw a;G(_l,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function af(n,e,t){const r=ie(n);let s=re.min(),i=fe();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(l,h,d){const p=ie(l),_=p.Ms.get(d);return _!==void 0?k.resolve(p.Fs.get(_)):p.hi.getTargetData(h,d)})(r,a,Ut(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,c.targetId).next((l=>{i=l}))})).next((()=>r.Cs.getDocumentsMatchingQuery(a,e,t?s:re.min(),t?i:fe()))).next((c=>(Aw(r,uI(e),c),{documents:c,qs:i})))))}function Aw(n,e,t){let r=n.xs.get(e)||re.min();t.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),n.xs.set(e,r)}class cf{constructor(){this.activeTargetIds=mI()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class bw{constructor(){this.Fo=new cf,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new cf,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Sw{xo(e){}shutdown(){}}/**
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
 */const lf="ConnectivityMonitor";class uf{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){G(lf,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){G(lf,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Wi=null;function Sc(){return Wi===null?Wi=(function(){return 268435456+Math.round(2147483648*Math.random())})():Wi++,"0x"+Wi.toString(16)}/**
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
 */const za="RestConnection",Rw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Pw{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===yo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const a=Sc(),c=this.Go(e,t.toUriEncodedString());G(za,`Sending RPC '${e}' ${a}:`,c,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(l,s,i);const{host:h}=new URL(c),d=Zr(h);return this.jo(e,c,l,r,d).then((p=>(G(za,`Received RPC '${e}' ${a}: `,p),p)),(p=>{throw Ln(za,`RPC '${e}' ${a} failed with error: `,p,"url: ",c,"request:",r),p}))}Jo(e,t,r,s,i,a){return this.Wo(e,t,r,s,i)}zo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ts})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Go(e,t){const r=Rw[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
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
 */class Cw{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const Ze="WebChannelConnection";class Vw extends Pw{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,s,i){const a=Sc();return new Promise(((c,l)=>{const h=new Rp;h.setWithCredentials(!0),h.listenOnce(Pp.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case Xi.NO_ERROR:const p=h.getResponseJson();G(Ze,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),c(p);break;case Xi.TIMEOUT:G(Ze,`RPC '${e}' ${a} timed out`),l(new W(D.DEADLINE_EXCEEDED,"Request time out"));break;case Xi.HTTP_ERROR:const _=h.getStatus();if(G(Ze,`RPC '${e}' ${a} failed with status:`,_,"response text:",h.getResponseText()),_>0){let b=h.getResponseJson();Array.isArray(b)&&(b=b[0]);const V=b==null?void 0:b.error;if(V&&V.status&&V.message){const N=(function(z){const K=z.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(K)>=0?K:D.UNKNOWN})(V.status);l(new W(N,V.message))}else l(new W(D.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new W(D.UNAVAILABLE,"Connection failed."));break;default:ee(9055,{c_:e,streamId:a,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{G(Ze,`RPC '${e}' ${a} completed.`)}}));const d=JSON.stringify(s);G(Ze,`RPC '${e}' ${a} sending request:`,s),h.send(t,"POST",d,r,15)}))}P_(e,t,r){const s=Sc(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Dp(),c=Vp(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.zo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const d=i.join("");G(Ze,`Creating RPC '${e}' stream ${s}: ${d}`,l);const p=a.createWebChannel(d,l);this.T_(p);let _=!1,b=!1;const V=new Cw({Ho:L=>{b?G(Ze,`Not sending because RPC '${e}' stream ${s} is closed:`,L):(_||(G(Ze,`Opening RPC '${e}' stream ${s} transport.`),p.open(),_=!0),G(Ze,`RPC '${e}' stream ${s} sending:`,L),p.send(L))},Yo:()=>p.close()}),N=(L,z,K)=>{L.listen(z,(Q=>{try{K(Q)}catch(H){setTimeout((()=>{throw H}),0)}}))};return N(p,Cs.EventType.OPEN,(()=>{b||(G(Ze,`RPC '${e}' stream ${s} transport opened.`),V.s_())})),N(p,Cs.EventType.CLOSE,(()=>{b||(b=!0,G(Ze,`RPC '${e}' stream ${s} transport closed`),V.__(),this.I_(p))})),N(p,Cs.EventType.ERROR,(L=>{b||(b=!0,Ln(Ze,`RPC '${e}' stream ${s} transport errored. Name:`,L.name,"Message:",L.message),V.__(new W(D.UNAVAILABLE,"The operation could not be completed")))})),N(p,Cs.EventType.MESSAGE,(L=>{var z;if(!b){const K=L.data[0];Ee(!!K,16349);const Q=K,H=(Q==null?void 0:Q.error)||((z=Q[0])===null||z===void 0?void 0:z.error);if(H){G(Ze,`RPC '${e}' stream ${s} received error:`,H);const oe=H.status;let ye=(function(y){const T=Oe[y];if(T!==void 0)return dg(T)})(oe),I=H.message;ye===void 0&&(ye=D.INTERNAL,I="Unknown error status: "+oe+" with message "+H.message),b=!0,V.__(new W(ye,I)),p.close()}else G(Ze,`RPC '${e}' stream ${s} received:`,K),V.a_(K)}})),N(c,Cp.STAT_EVENT,(L=>{L.stat===dc.PROXY?G(Ze,`RPC '${e}' stream ${s} detected buffering proxy`):L.stat===dc.NOPROXY&&G(Ze,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{V.o_()}),0),V}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function Wa(){return typeof document<"u"?document:null}/**
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
 */function ra(n){return new NI(n,!0)}/**
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
 */class Rg{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-r);s>0&&G("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const hf="PersistentStream";class Pg{constructor(e,t,r,s,i,a,c,l){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Rg(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===D.RESOURCE_EXHAUSTED?(un(t.toString()),un("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===t&&this.W_(r,s)}),(r=>{e((()=>{const s=new W(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return G(hf,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(G(hf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Dw extends Pg{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=LI(this.serializer,e),r=(function(i){if(!("targetChange"in i))return re.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?re.min():a.readTime?Bt(a.readTime):re.min()})(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=Ac(this.serializer),t.addTarget=(function(i,a){let c;const l=a.target;if(c=yc(l)?{documents:BI(i,l)}:{query:jI(i,l).Vt},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=mg(i,a.resumeToken);const h=Tc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(re.min())>0){c.readTime=wo(i,a.snapshotVersion.toTimestamp());const h=Tc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c})(this.serializer,e);const r=qI(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=Ac(this.serializer),t.removeTarget=e,this.k_(t)}}class kw extends Pg{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Ee(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ee(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Ee(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=UI(e.writeResults,e.commitTime),r=Bt(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=Ac(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>FI(this.serializer,r)))};this.k_(t)}}/**
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
 */class Ow{}class Nw extends Ow{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new W(D.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Wo(e,Ic(t,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(D.UNKNOWN,i.toString())}))}Jo(e,t,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Jo(e,Ic(t,r),s,a,c,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new W(D.UNKNOWN,a.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class xw{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(un(t),this._a=!1):G("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const mr="RemoteStore";class Mw{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((a=>{r.enqueueAndForget((async()=>{Ir(this)&&(G(mr,"Restarting streams for network reachability change."),await(async function(l){const h=ie(l);h.Ia.add(4),await _i(h),h.Aa.set("Unknown"),h.Ia.delete(4),await sa(h)})(this))}))})),this.Aa=new xw(r,s)}}async function sa(n){if(Ir(n))for(const e of n.da)await e(!0)}async function _i(n){for(const e of n.da)await e(!1)}function Cg(n,e){const t=ie(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Tl(t)?El(t):is(t).x_()&&vl(t,e))}function yl(n,e){const t=ie(n),r=is(t);t.Ta.delete(e),r.x_()&&Vg(t,e),t.Ta.size===0&&(r.x_()?r.B_():Ir(t)&&t.Aa.set("Unknown"))}function vl(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(re.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}is(n).H_(e)}function Vg(n,e){n.Ra.$e(e),is(n).Y_(e)}function El(n){n.Ra=new VI({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),is(n).start(),n.Aa.aa()}function Tl(n){return Ir(n)&&!is(n).M_()&&n.Ta.size>0}function Ir(n){return ie(n).Ia.size===0}function Dg(n){n.Ra=void 0}async function Lw(n){n.Aa.set("Online")}async function Fw(n){n.Ta.forEach(((e,t)=>{vl(n,e)}))}async function Uw(n,e){Dg(n),Tl(n)?(n.Aa.la(e),El(n)):n.Aa.set("Unknown")}async function Bw(n,e,t){if(n.Aa.set("Online"),e instanceof gg&&e.state===2&&e.cause)try{await(async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Ta.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ta.delete(c),s.Ra.removeTarget(c))})(n,e)}catch(r){G(mr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await bo(n,r)}else if(e instanceof to?n.Ra.Ye(e):e instanceof pg?n.Ra.it(e):n.Ra.et(e),!t.isEqual(re.min()))try{const r=await Sg(n.localStore);t.compareTo(r)>=0&&await(function(i,a){const c=i.Ra.Pt(a);return c.targetChanges.forEach(((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.Ta.get(h);d&&i.Ta.set(h,d.withResumeToken(l.resumeToken,a))}})),c.targetMismatches.forEach(((l,h)=>{const d=i.Ta.get(l);if(!d)return;i.Ta.set(l,d.withResumeToken(Qe.EMPTY_BYTE_STRING,d.snapshotVersion)),Vg(i,l);const p=new Pn(d.target,l,h,d.sequenceNumber);vl(i,p)})),i.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(r){G(mr,"Failed to raise snapshot:",r),await bo(n,r)}}async function bo(n,e,t){if(!rs(e))throw e;n.Ia.add(1),await _i(n),n.Aa.set("Offline"),t||(t=()=>Sg(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{G(mr,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await sa(n)}))}function kg(n,e){return e().catch((t=>bo(n,t,e)))}async function ia(n){const e=ie(n),t=$n(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:sl;for(;jw(e);)try{const s=await Iw(e.localStore,r);if(s===null){e.Pa.length===0&&t.B_();break}r=s.batchId,$w(e,s)}catch(s){await bo(e,s)}Og(e)&&Ng(e)}function jw(n){return Ir(n)&&n.Pa.length<10}function $w(n,e){n.Pa.push(e);const t=$n(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function Og(n){return Ir(n)&&!$n(n).M_()&&n.Pa.length>0}function Ng(n){$n(n).start()}async function qw(n){$n(n).na()}async function Hw(n){const e=$n(n);for(const t of n.Pa)e.X_(t.mutations)}async function zw(n,e,t){const r=n.Pa.shift(),s=hl.from(r,e,t);await kg(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await ia(n)}async function Ww(n,e){e&&$n(n).Z_&&await(async function(r,s){if((function(a){return PI(a)&&a!==D.ABORTED})(s.code)){const i=r.Pa.shift();$n(r).N_(),await kg(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await ia(r)}})(n,e),Og(n)&&Ng(n)}async function ff(n,e){const t=ie(n);t.asyncQueue.verifyOperationInProgress(),G(mr,"RemoteStore received new credentials");const r=Ir(t);t.Ia.add(3),await _i(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await sa(t)}async function Gw(n,e){const t=ie(n);e?(t.Ia.delete(2),await sa(t)):e||(t.Ia.add(2),await _i(t),t.Aa.set("Unknown"))}function is(n){return n.Va||(n.Va=(function(t,r,s){const i=ie(t);return i.ia(),new Dw(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:Lw.bind(null,n),e_:Fw.bind(null,n),n_:Uw.bind(null,n),J_:Bw.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),Tl(n)?El(n):n.Aa.set("Unknown")):(await n.Va.stop(),Dg(n))}))),n.Va}function $n(n){return n.ma||(n.ma=(function(t,r,s){const i=ie(t);return i.ia(),new kw(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:qw.bind(null,n),n_:Ww.bind(null,n),ea:Hw.bind(null,n),ta:zw.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await ia(n)):(await n.ma.stop(),n.Pa.length>0&&(G(mr,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
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
 */class Il{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Nn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new Il(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wl(n,e){if(un("AsyncQueue",`${e}: ${n}`),rs(n))return new W(D.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Ur{static emptySet(e){return new Ur(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||X.comparator(t.key,r.key):(t,r)=>X.comparator(t.key,r.key),this.keyedMap=Vs(),this.sortedSet=new Ce(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ur)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Ur;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class df{constructor(){this.fa=new Ce(X.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):ee(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class Xr{constructor(e,t,r,s,i,a,c,l,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach((c=>{a.push({type:0,doc:c})})),new Xr(e,t,Ur.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Yo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Kw{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class Qw{constructor(){this.queries=pf(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const s=ie(t),i=s.queries;s.queries=pf(),i.forEach(((a,c)=>{for(const l of c.wa)l.onError(r)}))})(this,new W(D.ABORTED,"Firestore shutting down"))}}function pf(){return new Er((n=>eg(n)),Yo)}async function xg(n,e){const t=ie(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new Kw,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await t.onListen(s,!0);break;case 1:i.ya=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=wl(a,`Initialization of query '${Or(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.wa.push(e),e.va(t.onlineState),i.ya&&e.Ca(i.ya)&&Al(t)}async function Mg(n,e){const t=ie(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.wa.indexOf(e);a>=0&&(i.wa.splice(a,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Jw(n,e){const t=ie(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.wa)c.Ca(s)&&(r=!0);a.ya=s}}r&&Al(t)}function Xw(n,e,t){const r=ie(n),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(t);r.queries.delete(e)}function Al(n){n.Da.forEach((e=>{e.next()}))}var Rc,gf;(gf=Rc||(Rc={})).Fa="default",gf.Cache="cache";class Lg{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Xr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Xr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Rc.Cache}}/**
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
 */class Fg{constructor(e){this.key=e}}class Ug{constructor(e){this.key=e}}class Yw{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=fe(),this.mutatedKeys=fe(),this.Xa=tg(e),this.eu=new Ur(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new df,s=t?t.eu:this.eu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((d,p)=>{const _=s.get(d),b=Zo(this.query,p)?p:null,V=!!_&&this.mutatedKeys.has(_.key),N=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let L=!1;_&&b?_.data.isEqual(b.data)?V!==N&&(r.track({type:3,doc:b}),L=!0):this.iu(_,b)||(r.track({type:2,doc:b}),L=!0,(l&&this.Xa(b,l)>0||h&&this.Xa(b,h)<0)&&(c=!0)):!_&&b?(r.track({type:0,doc:b}),L=!0):_&&!b&&(r.track({type:1,doc:_}),L=!0,(l||h)&&(c=!0)),L&&(b?(a=a.add(b),i=N?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{eu:a,ru:r,Ds:c,mutatedKeys:i}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const a=e.ru.pa();a.sort(((d,p)=>(function(b,V){const N=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee(20277,{At:L})}};return N(b)-N(V)})(d.type,p.type)||this.Xa(d.doc,p.doc))),this.su(r),s=s!=null&&s;const c=t&&!s?this.ou():[],l=this.Za.size===0&&this.current&&!s?1:0,h=l!==this.Ya;return this.Ya=l,a.length!==0||h?{snapshot:new Xr(this.query,e.eu,i,a,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new df,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=fe(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const t=[];return e.forEach((r=>{this.Za.has(r)||t.push(new Ug(r))})),this.Za.forEach((r=>{e.has(r)||t.push(new Fg(r))})),t}uu(e){this.Ha=e.qs,this.Za=fe();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Xr.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const bl="SyncEngine";class Zw{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class eA{constructor(e){this.key=e,this.lu=!1}}class tA{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new Er((c=>eg(c)),Yo),this.Tu=new Map,this.Iu=new Set,this.du=new Ce(X.comparator),this.Eu=new Map,this.Au=new pl,this.Ru={},this.Vu=new Map,this.mu=Jr.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function nA(n,e,t=!0){const r=zg(n);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await Bg(r,e,t,!0),s}async function rA(n,e){const t=zg(n);await Bg(t,e,!0,!1)}async function Bg(n,e,t,r){const s=await ww(n.localStore,Ut(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await sA(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Cg(n.remoteStore,s),c}async function sA(n,e,t,r,s){n.gu=(p,_,b)=>(async function(N,L,z,K){let Q=L.view.nu(z);Q.Ds&&(Q=await af(N.localStore,L.query,!1).then((({documents:I})=>L.view.nu(I,Q))));const H=K&&K.targetChanges.get(L.targetId),oe=K&&K.targetMismatches.get(L.targetId)!=null,ye=L.view.applyChanges(Q,N.isPrimaryClient,H,oe);return _f(N,L.targetId,ye._u),ye.snapshot})(n,p,_,b);const i=await af(n.localStore,e,!0),a=new Yw(e,i.qs),c=a.nu(i.documents),l=mi.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(c,n.isPrimaryClient,l);_f(n,t,h._u);const d=new Zw(e,t,a);return n.Pu.set(e,d),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),h.snapshot}async function iA(n,e,t){const r=ie(n),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter((a=>!Yo(a,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await bc(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&yl(r.remoteStore,s.targetId),Pc(r,s.targetId)})).catch(ns)):(Pc(r,s.targetId),await bc(r.localStore,s.targetId,!0))}async function oA(n,e){const t=ie(n),r=t.Pu.get(e),s=t.Tu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),yl(t.remoteStore,r.targetId))}async function aA(n,e,t){const r=pA(n);try{const s=await(function(a,c){const l=ie(a),h=Ie.now(),d=c.reduce(((b,V)=>b.add(V.key)),fe());let p,_;return l.persistence.runTransaction("Locally write mutations","readwrite",(b=>{let V=hn(),N=fe();return l.Os.getEntries(b,d).next((L=>{V=L,V.forEach(((z,K)=>{K.isValidDocument()||(N=N.add(z))}))})).next((()=>l.localDocuments.getOverlayedDocuments(b,V))).next((L=>{p=L;const z=[];for(const K of c){const Q=wI(K,p.get(K.key).overlayedDocument);Q!=null&&z.push(new Tr(K.key,Q,Wp(Q.value.mapValue),sn.exists(!0)))}return l.mutationQueue.addMutationBatch(b,h,z,c)})).next((L=>{_=L;const z=L.applyToLocalDocumentSet(p,N);return l.documentOverlayCache.saveOverlays(b,L.batchId,z)}))})).then((()=>({batchId:_.batchId,changes:rg(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(a,c,l){let h=a.Ru[a.currentUser.toKey()];h||(h=new Ce(ue)),h=h.insert(c,l),a.Ru[a.currentUser.toKey()]=h})(r,s.batchId,t),await yi(r,s.changes),await ia(r.remoteStore)}catch(s){const i=wl(s,"Failed to persist write");t.reject(i)}}async function jg(n,e){const t=ie(n);try{const r=await Ew(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const a=t.Eu.get(i);a&&(Ee(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.lu=!0:s.modifiedDocuments.size>0?Ee(a.lu,14607):s.removedDocuments.size>0&&(Ee(a.lu,42227),a.lu=!1))})),await yi(t,r,e)}catch(r){await ns(r)}}function mf(n,e,t){const r=ie(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Pu.forEach(((i,a)=>{const c=a.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(a,c){const l=ie(a);l.onlineState=c;let h=!1;l.queries.forEach(((d,p)=>{for(const _ of p.wa)_.va(c)&&(h=!0)})),h&&Al(l)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function cA(n,e,t){const r=ie(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Eu.get(e),i=s&&s.key;if(i){let a=new Ce(X.comparator);a=a.insert(i,rt.newNoDocument(i,re.min()));const c=fe().add(i),l=new na(re.min(),new Map,new Ce(ue),a,c);await jg(r,l),r.du=r.du.remove(i),r.Eu.delete(e),Sl(r)}else await bc(r.localStore,e,!1).then((()=>Pc(r,e,t))).catch(ns)}async function lA(n,e){const t=ie(n),r=e.batch.batchId;try{const s=await vw(t.localStore,e);qg(t,r,null),$g(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await yi(t,s)}catch(s){await ns(s)}}async function uA(n,e,t){const r=ie(n);try{const s=await(function(a,c){const l=ie(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let d;return l.mutationQueue.lookupMutationBatch(h,c).next((p=>(Ee(p!==null,37113),d=p.keys(),l.mutationQueue.removeMutationBatch(h,p)))).next((()=>l.mutationQueue.performConsistencyCheck(h))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(h,d,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d))).next((()=>l.localDocuments.getDocuments(h,d)))}))})(r.localStore,e);qg(r,e,t),$g(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await yi(r,s)}catch(s){await ns(s)}}function $g(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function qg(n,e,t){const r=ie(n);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function Pc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((r=>{n.Au.containsKey(r)||Hg(n,r)}))}function Hg(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(yl(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),Sl(n))}function _f(n,e,t){for(const r of t)r instanceof Fg?(n.Au.addReference(r.key,e),hA(n,r)):r instanceof Ug?(G(bl,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||Hg(n,r.key)):ee(19791,{yu:r})}function hA(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(G(bl,"New document in limbo: "+t),n.Iu.add(r),Sl(n))}function Sl(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new X(be.fromString(e)),r=n.mu.next();n.Eu.set(r,new eA(t)),n.du=n.du.insert(t,r),Cg(n.remoteStore,new Pn(Ut(ll(t.path)),r,"TargetPurposeLimboResolution",Qo.ue))}}async function yi(n,e,t){const r=ie(n),s=[],i=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach(((c,l)=>{a.push(r.gu(l,e,t).then((h=>{var d;if((h||t)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=t==null?void 0:t.targetChanges.get(l.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=ml.Es(l.targetId,h);i.push(p)}})))})),await Promise.all(a),r.hu.J_(s),await(async function(l,h){const d=ie(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>k.forEach(h,(_=>k.forEach(_.Is,(b=>d.persistence.referenceDelegate.addReference(p,_.targetId,b))).next((()=>k.forEach(_.ds,(b=>d.persistence.referenceDelegate.removeReference(p,_.targetId,b)))))))))}catch(p){if(!rs(p))throw p;G(_l,"Failed to update sequence numbers: "+p)}for(const p of h){const _=p.targetId;if(!p.fromCache){const b=d.Fs.get(_),V=b.snapshotVersion,N=b.withLastLimboFreeSnapshotVersion(V);d.Fs=d.Fs.insert(_,N)}}})(r.localStore,i))}async function fA(n,e){const t=ie(n);if(!t.currentUser.isEqual(e)){G(bl,"User change. New user:",e.toKey());const r=await bg(t.localStore,e);t.currentUser=e,(function(i,a){i.Vu.forEach((c=>{c.forEach((l=>{l.reject(new W(D.CANCELLED,a))}))})),i.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await yi(t,r.Bs)}}function dA(n,e){const t=ie(n),r=t.Eu.get(e);if(r&&r.lu)return fe().add(r.key);{let s=fe();const i=t.Tu.get(e);if(!i)return s;for(const a of i){const c=t.Pu.get(a);s=s.unionWith(c.view.tu)}return s}}function zg(n){const e=ie(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=jg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=dA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=cA.bind(null,e),e.hu.J_=Jw.bind(null,e.eventManager),e.hu.pu=Xw.bind(null,e.eventManager),e}function pA(n){const e=ie(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=lA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=uA.bind(null,e),e}class So{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ra(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return yw(this.persistence,new gw,e.initialUser,this.serializer)}Du(e){return new Ag(gl.Vi,this.serializer)}bu(e){return new bw}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}So.provider={build:()=>new So};class gA extends So{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Ee(this.persistence.referenceDelegate instanceof Ao,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new ew(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?ht.withCacheSize(this.cacheSizeBytes):ht.DEFAULT;return new Ag((r=>Ao.Vi(r,t)),this.serializer)}}class Cc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>mf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=fA.bind(null,this.syncEngine),await Gw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Qw})()}createDatastore(e){const t=ra(e.databaseInfo.databaseId),r=(function(i){return new Vw(i)})(e.databaseInfo);return(function(i,a,c,l){return new Nw(i,a,c,l)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,i,a,c){return new Mw(r,s,i,a,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>mf(this.syncEngine,t,0)),(function(){return uf.C()?new uf:new Sw})())}createSyncEngine(e,t){return(function(s,i,a,c,l,h,d){const p=new tA(s,i,a,c,l,h);return d&&(p.fu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const i=ie(s);G(mr,"RemoteStore shutting down."),i.Ia.add(5),await _i(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Cc.provider={build:()=>new Cc};/**
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
 */class Wg{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):un("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const qn="FirestoreClient";class mA{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=tt.UNAUTHENTICATED,this.clientId=rl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{G(qn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(G(qn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Nn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=wl(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Ga(n,e){n.asyncQueue.verifyOperationInProgress(),G(qn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await bg(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{Ln("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{G("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{Ln("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=e}async function yf(n,e){n.asyncQueue.verifyOperationInProgress();const t=await _A(n);G(qn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>ff(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>ff(e.remoteStore,s))),n._onlineComponents=e}async function _A(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){G(qn,"Using user provided OfflineComponentProvider");try{await Ga(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===D.FAILED_PRECONDITION||s.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;Ln("Error using user provided cache. Falling back to memory cache: "+t),await Ga(n,new So)}}else G(qn,"Using default OfflineComponentProvider"),await Ga(n,new gA(void 0));return n._offlineComponents}async function Gg(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(G(qn,"Using user provided OnlineComponentProvider"),await yf(n,n._uninitializedComponentsProvider._online)):(G(qn,"Using default OnlineComponentProvider"),await yf(n,new Cc))),n._onlineComponents}function yA(n){return Gg(n).then((e=>e.syncEngine))}async function Vc(n){const e=await Gg(n),t=e.eventManager;return t.onListen=nA.bind(null,e.syncEngine),t.onUnlisten=iA.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=rA.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=oA.bind(null,e.syncEngine),t}function vA(n,e,t={}){const r=new Nn;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,c,l,h){const d=new Wg({next:_=>{d.Ou(),a.enqueueAndForget((()=>Mg(i,p))),_.fromCache&&l.source==="server"?h.reject(new W(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(_)},error:_=>h.reject(_)}),p=new Lg(c,d,{includeMetadataChanges:!0,ka:!0});return xg(i,p)})(await Vc(n),n.asyncQueue,e,t,r))),r.promise}/**
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
 */function Kg(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const vf=new Map;/**
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
 */const Qg="firestore.googleapis.com",Ef=!0;class Tf{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Qg,this.ssl=Ef}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Ef;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=wg;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<YI)throw new W(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}LT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Kg((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new W(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new W(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new W(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class oa{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Tf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Tf(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new PT;switch(r.type){case"firstParty":return new kT(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=vf.get(t);r&&(G("ComponentProvider","Removing Datastore"),vf.delete(t),r.terminate())})(this),Promise.resolve()}}function EA(n,e,t,r={}){var s;n=lr(n,oa);const i=Zr(e),a=n._getSettings(),c=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),l=`${e}:${t}`;i&&(yp(`https://${l}`),vp("Firestore",!0)),a.host!==Qg&&a.host!==l&&Ln("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},a),{host:l,ssl:i,emulatorOptions:r});if(!dr(h,c)&&(n._setSettings(h),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=tt.MOCK_USER;else{d=tE(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const _=r.mockUserToken.sub||r.mockUserToken.user_id;if(!_)throw new W(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new tt(_)}n._authCredentials=new CT(new Op(d,p))}}/**
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
 */class zn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new zn(this.firestore,e,this._query)}}class Be{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Be(this.firestore,e,this._key)}toJSON(){return{type:Be._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(pi(t,Be._jsonSchema))return new Be(e,r||null,new X(be.fromString(t.referencePath)))}}Be._jsonSchemaVersion="firestore/documentReference/1.0",Be._jsonSchema={type:xe("string",Be._jsonSchemaVersion),referencePath:xe("string")};class xn extends zn{constructor(e,t,r){super(e,t,ll(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Be(this.firestore,null,new X(e))}withConverter(e){return new xn(this.firestore,e,this._path)}}function Ss(n,e,...t){if(n=ft(n),xp("collection","path",e),n instanceof oa){const r=be.fromString(e,...t);return Oh(r),new xn(n,null,r)}{if(!(n instanceof Be||n instanceof xn))throw new W(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(be.fromString(e,...t));return Oh(r),new xn(n.firestore,null,r)}}function TA(n,e,...t){if(n=ft(n),arguments.length===1&&(e=rl.newId()),xp("doc","path",e),n instanceof oa){const r=be.fromString(e,...t);return kh(r),new Be(n,null,new X(r))}{if(!(n instanceof Be||n instanceof xn))throw new W(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(be.fromString(e,...t));return kh(r),new Be(n.firestore,n instanceof xn?n.converter:null,new X(r))}}/**
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
 */const If="AsyncQueue";class wf{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Rg(this,"async_queue_retry"),this.oc=()=>{const r=Wa();r&&G(If,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=Wa();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Wa();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Nn;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!rs(e))throw e;G(If,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,un("INTERNAL UNHANDLED ERROR: ",Af(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const s=Il.createAndSchedule(this,e,t,r,(i=>this.lc(i)));return this.ec.push(s),s}ac(){this.tc&&ee(47125,{hc:Af(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Af(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function bf(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(n,["next","error","complete"])}class ci extends oa{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new wf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new wf(e),this._firestoreClient=void 0,await e}}}function IA(n,e){const t=typeof n=="object"?n:wp(),r=typeof n=="string"?n:yo,s=tl(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Zv("firestore");i&&EA(s,...i)}return s}function Rl(n){if(n._terminated)throw new W(D.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||wA(n),n._firestoreClient}function wA(n){var e,t,r;const s=n._freezeSettings(),i=(function(c,l,h,d){return new KT(c,l,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Kg(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new mA(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&(function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}})(n._componentsProvider))}/**
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
 */class Et{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Et(Qe.fromBase64String(e))}catch(t){throw new W(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Et(Qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Et._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(pi(e,Et._jsonSchema))return Et.fromBase64String(e.bytes)}}Et._jsonSchemaVersion="firestore/bytes/1.0",Et._jsonSchema={type:xe("string",Et._jsonSchemaVersion),bytes:xe("string")};/**
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
 */class Pl{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new W(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ke(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Jg{constructor(e){this._methodName=e}}/**
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
 */class jt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new W(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new W(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:jt._jsonSchemaVersion}}static fromJSON(e){if(pi(e,jt._jsonSchema))return new jt(e.latitude,e.longitude)}}jt._jsonSchemaVersion="firestore/geoPoint/1.0",jt._jsonSchema={type:xe("string",jt._jsonSchemaVersion),latitude:xe("number"),longitude:xe("number")};/**
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
 */class $t{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:$t._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(pi(e,$t._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new $t(e.vectorValues);throw new W(D.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}$t._jsonSchemaVersion="firestore/vectorValue/1.0",$t._jsonSchema={type:xe("string",$t._jsonSchemaVersion),vectorValues:xe("object")};/**
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
 */const AA=/^__.*__$/;class bA{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Tr(e,this.data,this.fieldMask,t,this.fieldTransforms):new gi(e,this.data,t,this.fieldTransforms)}}function Xg(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee(40011,{Ec:n})}}class Cl{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Cl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Ro(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Xg(this.Ec)&&AA.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class SA{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||ra(e)}Dc(e,t,r,s=!1){return new Cl({Ec:e,methodName:t,bc:r,path:Ke.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Yg(n){const e=n._freezeSettings(),t=ra(n._databaseId);return new SA(n._databaseId,!!e.ignoreUndefinedProperties,t)}function RA(n,e,t,r,s,i={}){const a=n.Dc(i.merge||i.mergeFields?2:0,e,t,s);tm("Data must be an object, but it was:",a,r);const c=Zg(r,a);let l,h;if(i.merge)l=new At(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const _=CA(e,p,t);if(!a.contains(_))throw new W(D.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);DA(d,_)||d.push(_)}l=new At(d),h=a.fieldTransforms.filter((p=>l.covers(p.field)))}else l=null,h=a.fieldTransforms;return new bA(new vt(c),l,h)}function PA(n,e,t,r=!1){return Vl(t,n.Dc(r?4:3,e))}function Vl(n,e){if(em(n=ft(n)))return tm("Unsupported field value:",e,n),Zg(n,e);if(n instanceof Jg)return(function(r,s){if(!Xg(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const i=[];let a=0;for(const c of r){let l=Vl(c,s.yc(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}})(n,e)}return(function(r,s){if((r=ft(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return _I(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ie.fromDate(r);return{timestampValue:wo(s.serializer,i)}}if(r instanceof Ie){const i=new Ie(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:wo(s.serializer,i)}}if(r instanceof jt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Et)return{bytesValue:mg(s.serializer,r._byteString)};if(r instanceof Be){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:dl(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof $t)return(function(a,c){return{mapValue:{fields:{[Hp]:{stringValue:zp},[vo]:{arrayValue:{values:a.toArray().map((h=>{if(typeof h!="number")throw c.wc("VectorValues must only contain numeric values.");return ul(c.serializer,h)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${Ko(r)}`)})(n,e)}function Zg(n,e){const t={};return Fp(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):vr(n,((r,s)=>{const i=Vl(s,e.Vc(r));i!=null&&(t[r]=i)})),{mapValue:{fields:t}}}function em(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ie||n instanceof jt||n instanceof Et||n instanceof Be||n instanceof Jg||n instanceof $t)}function tm(n,e,t){if(!em(t)||!Mp(t)){const r=Ko(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function CA(n,e,t){if((e=ft(e))instanceof Pl)return e._internalPath;if(typeof e=="string")return nm(n,e);throw Ro("Field path arguments must be of type string or ",n,!1,void 0,t)}const VA=new RegExp("[~\\*/\\[\\]]");function nm(n,e,t){if(e.search(VA)>=0)throw Ro(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Pl(...e.split("."))._internalPath}catch{throw Ro(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ro(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new W(D.INVALID_ARGUMENT,c+n+l)}function DA(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class rm{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Be(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new kA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(aa("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class kA extends rm{data(){return super.data()}}function aa(n,e){return typeof e=="string"?nm(n,e):e instanceof Pl?e._internalPath:e._delegate._internalPath}/**
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
 */function sm(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new W(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Dl{}class im extends Dl{}function Sf(n,e,...t){let r=[];e instanceof Dl&&r.push(e),r=r.concat(t),(function(i){const a=i.filter((l=>l instanceof kl)).length,c=i.filter((l=>l instanceof ca)).length;if(a>1||a>0&&c>0)throw new W(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class ca extends im{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new ca(e,t,r)}_apply(e){const t=this._parse(e);return om(e._query,t),new zn(e.firestore,e.converter,vc(e._query,t))}_parse(e){const t=Yg(e.firestore);return(function(i,a,c,l,h,d,p){let _;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new W(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Vf(p,d);const V=[];for(const N of p)V.push(Cf(l,i,N));_={arrayValue:{values:V}}}else _=Cf(l,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Vf(p,d),_=PA(c,a,p,d==="in"||d==="not-in");return Ne.create(h,d,_)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Rf(n,e,t){const r=e,s=aa("where",n);return ca._create(s,r,t)}class kl extends Dl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new kl(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:Ct.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let a=s;const c=i.getFlattenedFilters();for(const l of c)om(a,l),a=vc(a,l)})(e._query,t),new zn(e.firestore,e.converter,vc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ol extends im{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Ol(e,t)}_apply(e){const t=(function(s,i,a){if(s.startAt!==null)throw new W(D.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new W(D.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ii(i,a)})(e._query,this._field,this._direction);return new zn(e.firestore,e.converter,(function(s,i){const a=s.explicitOrderBy.concat([i]);return new ss(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,t))}}function Pf(n,e="asc"){const t=e,r=aa("orderBy",n);return Ol._create(r,t)}function Cf(n,e,t){if(typeof(t=ft(t))=="string"){if(t==="")throw new W(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Zp(e)&&t.indexOf("/")!==-1)throw new W(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(be.fromString(t));if(!X.isDocumentKey(r))throw new W(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return jh(n,new X(r))}if(t instanceof Be)return jh(n,t._key);throw new W(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ko(t)}.`)}function Vf(n,e){if(!Array.isArray(n)||n.length===0)throw new W(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function om(n,e){const t=(function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new W(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class OA{convertValue(e,t="none"){switch(jn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Bn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ee(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return vr(e,((s,i)=>{r[s]=this.convertValue(i,t)})),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[vo].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((a=>ke(a.doubleValue)));return new $t(i)}convertGeoPoint(e){return new jt(ke(e.latitude),ke(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Xo(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ni(e));default:return null}}convertTimestamp(e){const t=Un(e);return new Ie(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=be.fromString(e);Ee(Ig(r),9688,{name:e});const s=new ri(r.get(1),r.get(3)),i=new X(r.popFirst(5));return s.isEqual(t)||un(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function NA(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class ks{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ur extends rm{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new no(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(aa("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new W(D.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ur._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ur._jsonSchemaVersion="firestore/documentSnapshot/1.0",ur._jsonSchema={type:xe("string",ur._jsonSchemaVersion),bundleSource:xe("string","DocumentSnapshot"),bundleName:xe("string"),bundle:xe("string")};class no extends ur{data(e={}){return super.data(e)}}class hr{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new ks(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new no(this._firestore,this._userDataWriter,r.key,r,new ks(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new W(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((c=>{const l=new no(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ks(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new no(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ks(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),d=a.indexOf(c.doc.key)),{type:xA(c.type),doc:l,oldIndex:h,newIndex:d}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new W(D.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=hr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=rl.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function xA(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee(61501,{type:n})}}hr._jsonSchemaVersion="firestore/querySnapshot/1.0",hr._jsonSchema={type:xe("string",hr._jsonSchemaVersion),bundleSource:xe("string","QuerySnapshot"),bundleName:xe("string"),bundle:xe("string")};class Nl extends OA{constructor(e){super(),this.firestore=e}convertBytes(e){return new Et(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Be(this.firestore,null,t)}}function Df(n){n=lr(n,zn);const e=lr(n.firestore,ci),t=Rl(e),r=new Nl(e);return sm(n._query),vA(t,n._query).then((s=>new hr(e,r,n,s)))}function kf(n,e){const t=lr(n.firestore,ci),r=TA(n),s=NA(n.converter,e);return LA(t,[RA(Yg(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,sn.exists(!1))]).then((()=>r))}function MA(n,...e){var t,r,s;n=ft(n);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||bf(e[a])||(i=e[a++]);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(bf(e[a])){const p=e[a];e[a]=(t=p.next)===null||t===void 0?void 0:t.bind(p),e[a+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[a+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let l,h,d;if(n instanceof Be)h=lr(n.firestore,ci),d=ll(n._key.path),l={next:p=>{e[a]&&e[a](FA(h,n,p))},error:e[a+1],complete:e[a+2]};else{const p=lr(n,zn);h=lr(p.firestore,ci),d=p._query;const _=new Nl(h);l={next:b=>{e[a]&&e[a](new hr(h,_,p,b))},error:e[a+1],complete:e[a+2]},sm(n._query)}return(function(_,b,V,N){const L=new Wg(N),z=new Lg(b,L,V);return _.asyncQueue.enqueueAndForget((async()=>xg(await Vc(_),z))),()=>{L.Ou(),_.asyncQueue.enqueueAndForget((async()=>Mg(await Vc(_),z)))}})(Rl(h),d,c,l)}function LA(n,e){return(function(r,s){const i=new Nn;return r.asyncQueue.enqueueAndForget((async()=>aA(await yA(r),s,i))),i.promise})(Rl(n),e)}function FA(n,e,t){const r=t.docs.get(e._key),s=new Nl(n);return new ur(n,s,e._key,r,new ks(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){ts=s})(es),Wr(new pr("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new ci(new VT(r.getProvider("auth-internal")),new OT(a,r.getProvider("app-check-internal")),(function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new W(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ri(h.options.projectId,d)})(a,s),a);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),kn(Rh,Ph,e),kn(Rh,Ph,"esm2017")})();var UA="firebase",BA="11.10.0";/**
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
 */kn(UA,BA,"app");const jA={apiKey:"AIzaSyBFK9UDO0XCJ5qRlI1DT9o1ERFw9pEoISo",authDomain:"cis-grp-prjk.firebaseapp.com",projectId:"cis-grp-prjk",storageBucket:"cis-grp-prjk.firebasestorage.app",messagingSenderId:"342018301768",appId:"1:342018301768:web:9daf47b7d3e378e9299d7d"},$A=Ip(jA),Rs=IA($A),qA=Uv("userList",{state:()=>({music:[],currentmusic:null,user:null,snapshotUnsubscribe:null,playlists:[],currentPlaylistId:null,playlistSongs:[]}),actions:{async init(){const n=Ss(Rs,"music");this.snapshotUnsubscribe=MA(n,e=>{const t=[];e.forEach(r=>{const s=r.data();t.push({id:s.id,name:s.name,author:s.author,url:s.url})}),this.music=t,!this.currentmusic&&t.length>0&&(this.currentmusic=t[0])})},setCurrentVideo(n){this.currentmusic=n},async setUser(n){this.user=n,n?await this.loadUserPlaylists(n.uid):(this.playlists=[],this.currentPlaylistId=null,this.playlistSongs=[])},async loadUserPlaylists(n){const e=Sf(Ss(Rs,"playlists"),Rf("userId","==",n),Pf("createdAt","asc")),t=await Df(e);this.playlists=t.docs.map(r=>({id:r.id,...r.data()})),this.playlists.length>0&&!this.currentPlaylistId&&(this.currentPlaylistId=this.playlists[0].id,await this.loadSongsForPlaylist(this.currentPlaylistId))},async createPlaylist(n){if(!this.user)return;const e={userId:this.user.uid,name:n,isPublic:!1,createdAt:Ie.now()},t=await kf(Ss(Rs,"playlists"),e);this.playlists.push({id:t.id,...e}),this.currentPlaylistId=t.id,this.playlistSongs=[]},async loadSongsForPlaylist(n){const e=Sf(Ss(Rs,"playlistSongs"),Rf("playlistId","==",n),Pf("addedAt","asc")),t=await Df(e);this.playlistSongs=t.docs.map(r=>({id:r.id,...r.data()}))},async addSongToPlaylist(n,e){const t={playlistId:n,songId:e.id,addedAt:Ie.now()};await kf(Ss(Rs,"playlistSongs"),t),await this.loadSongsForPlaylist(n)}}});function xl(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function am(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const HA=am,cm=new fi("auth","Firebase",am());/**
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
 */const Po=new Zc("@firebase/auth");function zA(n,...e){Po.logLevel<=he.WARN&&Po.warn(`Auth (${es}): ${n}`,...e)}function ro(n,...e){Po.logLevel<=he.ERROR&&Po.error(`Auth (${es}): ${n}`,...e)}/**
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
 */function Wt(n,...e){throw Ll(n,...e)}function Rt(n,...e){return Ll(n,...e)}function Ml(n,e,t){const r=Object.assign(Object.assign({},HA()),{[e]:t});return new fi("auth","Firebase",r).create(e,{appName:n.name})}function fr(n){return Ml(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function WA(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Wt(n,"argument-error"),Ml(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ll(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return cm.create(n,...e)}function ne(n,e,...t){if(!n)throw Ll(e,...t)}function tn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ro(e),new Error(e)}function fn(n,e){n||tn(e)}/**
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
 */function Dc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function GA(){return Of()==="http:"||Of()==="https:"}function Of(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function KA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(GA()||aE()||"connection"in navigator)?navigator.onLine:!0}function QA(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class vi{constructor(e,t){this.shortDelay=e,this.longDelay=t,fn(t>e,"Short delay should be less than long delay!"),this.isMobile=sE()||cE()}get(){return KA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Fl(n,e){fn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class lm{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const JA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const XA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],YA=new vi(3e4,6e4);function Ul(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function os(n,e,t,r,s={}){return um(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=di(Object.assign({key:n.config.apiKey},a)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:l},i);return oE()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&Zr(n.emulatorConfig.host)&&(h.credentials="include"),lm.fetch()(await hm(n,n.config.apiHost,t,c),h)})}async function um(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},JA),e);try{const s=new e0(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Gi(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gi(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Gi(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw Gi(n,"user-disabled",a);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Ml(n,d,h);Wt(n,d)}}catch(s){if(s instanceof pn)throw s;Wt(n,"network-request-failed",{message:String(s)})}}async function ZA(n,e,t,r,s={}){const i=await os(n,e,t,r,s);return"mfaPendingCredential"in i&&Wt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function hm(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?Fl(n.config,s):`${n.config.apiScheme}://${s}`;return XA.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class e0{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Rt(this.auth,"network-request-failed")),YA.get())})}}function Gi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Rt(n,e,r);return s.customData._tokenResponse=t,s}/**
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
 */async function t0(n,e){return os(n,"POST","/v1/accounts:delete",e)}async function Co(n,e){return os(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ks(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function n0(n,e=!1){const t=ft(n),r=await t.getIdToken(e),s=Bl(r);ne(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ks(Ka(s.auth_time)),issuedAtTime:Ks(Ka(s.iat)),expirationTime:Ks(Ka(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ka(n){return Number(n)*1e3}function Bl(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ro("JWT malformed, contained fewer than 3 sections"),null;try{const s=pp(t);return s?JSON.parse(s):(ro("Failed to decode base64 JWT payload"),null)}catch(s){return ro("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Nf(n){const e=Bl(n);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function li(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof pn&&r0(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function r0({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class s0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class kc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ks(this.lastLoginAt),this.creationTime=Ks(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Vo(n){var e;const t=n.auth,r=await n.getIdToken(),s=await li(n,Co(t,{idToken:r}));ne(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?fm(i.providerUserInfo):[],c=o0(n.providerData,a),l=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),d=l?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new kc(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(n,p)}async function i0(n){const e=ft(n);await Vo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function o0(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function fm(n){return n.map(e=>{var{providerId:t}=e,r=xl(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function a0(n,e){const t=await um(n,{},async()=>{const r=di({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await hm(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return n.emulatorConfig&&Zr(n.emulatorConfig.host)&&(l.credentials="include"),lm.fetch()(a,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function c0(n,e){return os(n,"POST","/v2/accounts:revokeToken",Ul(n,e))}/**
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
 */class Br{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Nf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const t=Nf(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await a0(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Br;return r&&(ne(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ne(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(ne(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Br,this.toJSON())}_performRefresh(){return tn("not implemented")}}/**
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
 */function vn(n,e){ne(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class bt{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=xl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new s0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new kc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await li(this,this.stsTokenManager.getToken(this.auth,e));return ne(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return n0(this,e)}reload(){return i0(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new bt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Vo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(wt(this.auth.app))return Promise.reject(fr(this.auth));const e=await this.getIdToken();return await li(this,t0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,c,l,h,d;const p=(r=t.displayName)!==null&&r!==void 0?r:void 0,_=(s=t.email)!==null&&s!==void 0?s:void 0,b=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,V=(a=t.photoURL)!==null&&a!==void 0?a:void 0,N=(c=t.tenantId)!==null&&c!==void 0?c:void 0,L=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,z=(h=t.createdAt)!==null&&h!==void 0?h:void 0,K=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:Q,emailVerified:H,isAnonymous:oe,providerData:ye,stsTokenManager:I}=t;ne(Q&&I,e,"internal-error");const m=Br.fromJSON(this.name,I);ne(typeof Q=="string",e,"internal-error"),vn(p,e.name),vn(_,e.name),ne(typeof H=="boolean",e,"internal-error"),ne(typeof oe=="boolean",e,"internal-error"),vn(b,e.name),vn(V,e.name),vn(N,e.name),vn(L,e.name),vn(z,e.name),vn(K,e.name);const y=new bt({uid:Q,auth:e,email:_,emailVerified:H,displayName:p,isAnonymous:oe,photoURL:V,phoneNumber:b,tenantId:N,stsTokenManager:m,createdAt:z,lastLoginAt:K});return ye&&Array.isArray(ye)&&(y.providerData=ye.map(T=>Object.assign({},T))),L&&(y._redirectEventId=L),y}static async _fromIdTokenResponse(e,t,r=!1){const s=new Br;s.updateFromServerResponse(t);const i=new bt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Vo(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];ne(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?fm(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Br;c.updateFromIdToken(r);const l=new bt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new kc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
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
 */const xf=new Map;function nn(n){fn(n instanceof Function,"Expected a class definition");let e=xf.get(n);return e?(fn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,xf.set(n,e),e)}/**
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
 */class dm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}dm.type="NONE";const Mf=dm;/**
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
 */function so(n,e,t){return`firebase:${n}:${e}:${t}`}class jr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=so(this.userKey,s.apiKey,i),this.fullPersistenceKey=so("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Co(this.auth,{idToken:e}).catch(()=>{});return t?bt._fromGetAccountInfoResponse(this.auth,t,e):null}return bt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new jr(nn(Mf),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||nn(Mf);const a=so(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const d=await h._get(a);if(d){let p;if(typeof d=="string"){const _=await Co(e,{idToken:d}).catch(()=>{});if(!_)break;p=await bt._fromGetAccountInfoResponse(e,_,d)}else p=bt._fromJSON(e,d);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new jr(i,e,r):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new jr(i,e,r))}}/**
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
 */function Lf(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_m(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vm(e))return"Blackberry";if(Em(e))return"Webos";if(gm(e))return"Safari";if((e.includes("chrome/")||mm(e))&&!e.includes("edge/"))return"Chrome";if(ym(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function pm(n=it()){return/firefox\//i.test(n)}function gm(n=it()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function mm(n=it()){return/crios\//i.test(n)}function _m(n=it()){return/iemobile/i.test(n)}function ym(n=it()){return/android/i.test(n)}function vm(n=it()){return/blackberry/i.test(n)}function Em(n=it()){return/webos/i.test(n)}function jl(n=it()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function l0(n=it()){var e;return jl(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function u0(){return lE()&&document.documentMode===10}function Tm(n=it()){return jl(n)||ym(n)||Em(n)||vm(n)||/windows phone/i.test(n)||_m(n)}/**
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
 */function Im(n,e=[]){let t;switch(n){case"Browser":t=Lf(it());break;case"Worker":t=`${Lf(it())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${es}/${r}`}/**
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
 */class h0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function f0(n,e={}){return os(n,"GET","/v2/passwordPolicy",Ul(n,e))}/**
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
 */const d0=6;class p0{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:d0,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class g0{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ff(this),this.idTokenSubscription=new Ff(this),this.beforeStateQueue=new h0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=nn(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await jr.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Co(this,{idToken:e}),r=await bt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(wt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Vo(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=QA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(wt(this.app))return Promise.reject(fr(this));const t=e?ft(e):null;return t&&ne(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return wt(this.app)?Promise.reject(fr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return wt(this.app)?Promise.reject(fr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(nn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await f0(this),t=new p0(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new fi("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await c0(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&nn(e)||this._popupRedirectResolver;ne(t,this,"argument-error"),this.redirectPersistenceManager=await jr.create(this,[nn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Im(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(wt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&zA(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function la(n){return ft(n)}class Ff{constructor(e){this.auth=e,this.observer=null,this.addObserver=_E(t=>this.observer=t)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let $l={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function m0(n){$l=n}function _0(n){return $l.loadJS(n)}function y0(){return $l.gapiScript}function v0(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function E0(n,e){const t=tl(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(dr(i,e??{}))return s;Wt(s,"already-initialized")}return t.initialize({options:e})}function T0(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(nn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function I0(n,e,t){const r=la(n);ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=wm(e),{host:a,port:c}=w0(e),l=c===null?"":`:${c}`,h={url:`${i}//${a}${l}/`},d=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ne(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ne(dr(h,r.config.emulator)&&dr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Zr(a)?(yp(`${i}//${a}${l}`),vp("Auth",!0)):A0()}function wm(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function w0(n){const e=wm(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Uf(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Uf(a)}}}function Uf(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function A0(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Am{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return tn("not implemented")}_getIdTokenResponse(e){return tn("not implemented")}_linkToIdToken(e,t){return tn("not implemented")}_getReauthenticationResolver(e){return tn("not implemented")}}/**
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
 */async function $r(n,e){return ZA(n,"POST","/v1/accounts:signInWithIdp",Ul(n,e))}/**
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
 */const b0="http://localhost";class _r extends Am{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new _r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Wt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=xl(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new _r(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return $r(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,$r(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,$r(e,t)}buildRequest(){const e={requestUri:b0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=di(t)}return e}}/**
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
 */class ql{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ei extends ql{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class bn extends Ei{constructor(){super("facebook.com")}static credential(e){return _r._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.FACEBOOK_SIGN_IN_METHOD="facebook.com";bn.PROVIDER_ID="facebook.com";/**
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
 */class en extends Ei{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return _r._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return en.credential(t,r)}catch{return null}}}en.GOOGLE_SIGN_IN_METHOD="google.com";en.PROVIDER_ID="google.com";/**
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
 */class Sn extends Ei{constructor(){super("github.com")}static credential(e){return _r._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Sn.credential(e.oauthAccessToken)}catch{return null}}}Sn.GITHUB_SIGN_IN_METHOD="github.com";Sn.PROVIDER_ID="github.com";/**
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
 */class Rn extends Ei{constructor(){super("twitter.com")}static credential(e,t){return _r._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Rn.credential(t,r)}catch{return null}}}Rn.TWITTER_SIGN_IN_METHOD="twitter.com";Rn.PROVIDER_ID="twitter.com";/**
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
 */class Yr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await bt._fromIdTokenResponse(e,r,s),a=Bf(r);return new Yr({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Bf(r);return new Yr({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Bf(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Do extends pn{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Do.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Do(e,t,r,s)}}function bm(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Do._fromErrorAndOperation(n,i,e,r):i})}async function S0(n,e,t=!1){const r=await li(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Yr._forOperation(n,"link",r)}/**
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
 */async function R0(n,e,t=!1){const{auth:r}=n;if(wt(r.app))return Promise.reject(fr(r));const s="reauthenticate";try{const i=await li(n,bm(r,s,e,n),t);ne(i.idToken,r,"internal-error");const a=Bl(i.idToken);ne(a,r,"internal-error");const{sub:c}=a;return ne(n.uid===c,r,"user-mismatch"),Yr._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Wt(r,"user-mismatch"),i}}/**
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
 */async function P0(n,e,t=!1){if(wt(n.app))return Promise.reject(fr(n));const r="signIn",s=await bm(n,r,e),i=await Yr._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function C0(n,e,t,r){return ft(n).onIdTokenChanged(e,t,r)}function V0(n,e,t){return ft(n).beforeAuthStateChanged(e,t)}function D0(n){return ft(n).signOut()}const ko="__sak";/**
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
 */class Sm{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ko,"1"),this.storage.removeItem(ko),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const k0=1e3,O0=10;class Rm extends Sm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Tm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);u0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,O0):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},k0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Rm.type="LOCAL";const N0=Rm;/**
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
 */class Pm extends Sm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Pm.type="SESSION";const Cm=Pm;/**
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
 */function x0(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ua{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new ua(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(t.origin,i)),l=await x0(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ua.receivers=[];/**
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
 */function Hl(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class M0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const h=Hl("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const _=p;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(_.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function qt(){return window}function L0(n){qt().location.href=n}/**
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
 */function Vm(){return typeof qt().WorkerGlobalScope<"u"&&typeof qt().importScripts=="function"}async function F0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function U0(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function B0(){return Vm()?self:null}/**
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
 */const Dm="firebaseLocalStorageDb",j0=1,Oo="firebaseLocalStorage",km="fbase_key";class Ti{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ha(n,e){return n.transaction([Oo],e?"readwrite":"readonly").objectStore(Oo)}function $0(){const n=indexedDB.deleteDatabase(Dm);return new Ti(n).toPromise()}function Oc(){const n=indexedDB.open(Dm,j0);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Oo,{keyPath:km})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Oo)?e(r):(r.close(),await $0(),e(await Oc()))})})}async function jf(n,e,t){const r=ha(n,!0).put({[km]:e,value:t});return new Ti(r).toPromise()}async function q0(n,e){const t=ha(n,!1).get(e),r=await new Ti(t).toPromise();return r===void 0?null:r.value}function $f(n,e){const t=ha(n,!0).delete(e);return new Ti(t).toPromise()}const H0=800,z0=3;class Om{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Oc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>z0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ua._getInstance(B0()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await F0(),!this.activeServiceWorker)return;this.sender=new M0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||U0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Oc();return await jf(e,ko,"1"),await $f(e,ko),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>jf(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>q0(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>$f(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ha(s,!1).getAll();return new Ti(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),H0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Om.type="LOCAL";const W0=Om;new vi(3e4,6e4);/**
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
 */function Nm(n,e){return e?nn(e):(ne(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class zl extends Am{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $r(e,this._buildIdpRequest())}_linkToIdToken(e,t){return $r(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return $r(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function G0(n){return P0(n.auth,new zl(n),n.bypassAuthState)}function K0(n){const{auth:e,user:t}=n;return ne(t,e,"internal-error"),R0(t,new zl(n),n.bypassAuthState)}async function Q0(n){const{auth:e,user:t}=n;return ne(t,e,"internal-error"),S0(t,new zl(n),n.bypassAuthState)}/**
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
 */class xm{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return G0;case"linkViaPopup":case"linkViaRedirect":return Q0;case"reauthViaPopup":case"reauthViaRedirect":return K0;default:Wt(this.auth,"internal-error")}}resolve(e){fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const J0=new vi(2e3,1e4);async function X0(n,e,t){if(wt(n.app))return Promise.reject(Rt(n,"operation-not-supported-in-this-environment"));const r=la(n);WA(n,e,ql);const s=Nm(r,t);return new ir(r,"signInViaPopup",e,s).executeNotNull()}class ir extends xm{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ir.currentPopupAction&&ir.currentPopupAction.cancel(),ir.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){fn(this.filter.length===1,"Popup operations only handle one event");const e=Hl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Rt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Rt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ir.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,J0.get())};e()}}ir.currentPopupAction=null;/**
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
 */const Y0="pendingRedirect",io=new Map;class Z0 extends xm{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=io.get(this.auth._key());if(!e){try{const r=await eb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}io.set(this.auth._key(),e)}return this.bypassAuthState||io.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function eb(n,e){const t=rb(e),r=nb(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function tb(n,e){io.set(n._key(),e)}function nb(n){return nn(n._redirectPersistence)}function rb(n){return so(Y0,n.config.apiKey,n.name)}async function sb(n,e,t=!1){if(wt(n.app))return Promise.reject(fr(n));const r=la(n),s=Nm(r,e),a=await new Z0(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const ib=600*1e3;class ob{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ab(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Mm(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Rt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ib&&this.cachedEventUids.clear(),this.cachedEventUids.has(qf(e))}saveEventToCache(e){this.cachedEventUids.add(qf(e)),this.lastProcessedEventTime=Date.now()}}function qf(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Mm({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ab(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Mm(n);default:return!1}}/**
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
 */async function cb(n,e={}){return os(n,"GET","/v1/projects",e)}/**
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
 */const lb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ub=/^https?/;async function hb(n){if(n.config.emulator)return;const{authorizedDomains:e}=await cb(n);for(const t of e)try{if(fb(t))return}catch{}Wt(n,"unauthorized-domain")}function fb(n){const e=Dc(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!ub.test(t))return!1;if(lb.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const db=new vi(3e4,6e4);function Hf(){const n=qt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function pb(n){return new Promise((e,t)=>{var r,s,i;function a(){Hf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Hf(),t(Rt(n,"network-request-failed"))},timeout:db.get()})}if(!((s=(r=qt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=qt().gapi)===null||i===void 0)&&i.load)a();else{const c=v0("iframefcb");return qt()[c]=()=>{gapi.load?a():t(Rt(n,"network-request-failed"))},_0(`${y0()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw oo=null,e})}let oo=null;function gb(n){return oo=oo||pb(n),oo}/**
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
 */const mb=new vi(5e3,15e3),_b="__/auth/iframe",yb="emulator/auth/iframe",vb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Eb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Tb(n){const e=n.config;ne(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Fl(e,yb):`https://${n.config.authDomain}/${_b}`,r={apiKey:e.apiKey,appName:n.name,v:es},s=Eb.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${di(r).slice(1)}`}async function Ib(n){const e=await gb(n),t=qt().gapi;return ne(t,n,"internal-error"),e.open({where:document.body,url:Tb(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Rt(n,"network-request-failed"),c=qt().setTimeout(()=>{i(a)},mb.get());function l(){qt().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
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
 */const wb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ab=500,bb=600,Sb="_blank",Rb="http://localhost";class zf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Pb(n,e,t,r=Ab,s=bb){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},wb),{width:r.toString(),height:s.toString(),top:i,left:a}),h=it().toLowerCase();t&&(c=mm(h)?Sb:t),pm(h)&&(e=e||Rb,l.scrollbars="yes");const d=Object.entries(l).reduce((_,[b,V])=>`${_}${b}=${V},`,"");if(l0(h)&&c!=="_self")return Cb(e||"",c),new zf(null);const p=window.open(e||"",c,d);ne(p,n,"popup-blocked");try{p.focus()}catch{}return new zf(p)}function Cb(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Vb="__/auth/handler",Db="emulator/auth/handler",kb=encodeURIComponent("fac");async function Wf(n,e,t,r,s,i){ne(n.config.authDomain,n,"auth-domain-config-required"),ne(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:es,eventId:s};if(e instanceof ql){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",mE(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))a[d]=p}if(e instanceof Ei){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(a.scopes=d.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await n._getAppCheckToken(),h=l?`#${kb}=${encodeURIComponent(l)}`:"";return`${Ob(n)}?${di(c).slice(1)}${h}`}function Ob({config:n}){return n.emulator?Fl(n,Db):`https://${n.authDomain}/${Vb}`}/**
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
 */const Qa="webStorageSupport";class Nb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cm,this._completeRedirectFn=sb,this._overrideRedirectResult=tb}async _openPopup(e,t,r,s){var i;fn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await Wf(e,t,r,Dc(),s);return Pb(e,a,Hl())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Wf(e,t,r,Dc(),s);return L0(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(fn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Ib(e),r=new ob(e);return t.register("authEvent",s=>(ne(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Qa,{type:Qa},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Qa];a!==void 0&&t(!!a),Wt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=hb(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Tm()||gm()||jl()}}const xb=Nb;var Gf="@firebase/auth",Kf="1.10.8";/**
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
 */class Mb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Lb(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Fb(n){Wr(new pr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;ne(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Im(n)},h=new g0(r,s,i,l);return T0(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Wr(new pr("auth-internal",e=>{const t=la(e.getProvider("auth").getImmediate());return(r=>new Mb(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),kn(Gf,Kf,Lb(n)),kn(Gf,Kf,"esm2017")}/**
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
 */const Ub=300,Bb=_p("authIdTokenMaxAge")||Ub;let Qf=null;const jb=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Bb)return;const s=t==null?void 0:t.token;Qf!==s&&(Qf=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function $b(n=wp()){const e=tl(n,"auth");if(e.isInitialized())return e.getImmediate();const t=E0(n,{popupRedirectResolver:xb,persistence:[W0,N0,Cm]}),r=_p("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=jb(i.toString());V0(t,a,()=>a(t.currentUser)),C0(t,c=>a(c))}}const s=gp("auth");return s&&I0(t,`http://${s}`),t}function qb(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}m0({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Rt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",qb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Fb("Browser");const Hb={id:"app"},zb={class:"top_of_page_header"},Wb={class:"user_signin"},Gb={key:0,class:"user-label"},Kb={key:1,class:"hint"},Qb={class:"main"},Jb={class:"left_side"},Xb={class:"song_window"},Yb=["src"],Zb={class:"user_playlist_window"},eS={class:"user_playlist_header"},tS={class:"global_playlist"},nS={class:"video_list"},rS=["onClick"],sS=ny({__name:"App",setup(n){const e=Ms("https://www.youtube.com/embed/vYYW9hPj2TM"),t=qA(),r=Ms("Sign In with Google"),s=Ms(""),i=l=>{s.value=l,setTimeout(()=>{s.value=""},5e3)};Od(()=>{t.init()});const a=l=>{e.value=l.url,t.currentmusic=l},c=async()=>{const l=$b();if(r.value==="Sign Out"){await D0(l),t.setUser(null),r.value="Sign In with Google",i("Signed out successfully");return}try{const h=new en,d=await X0(l,h);t.setUser(d.user),r.value="Sign Out",i(`Signed in as ${d.user.displayName}`)}catch(h){console.error(h),i("Sign in failed")}};return(l,h)=>(ws(),As("div",Hb,[Ue("header",zb,[h[0]||(h[0]=Ue("div",{class:"logo"},"CloudBeat",-1)),Ue("div",Wb,[rr(t).user?(ws(),As("span",Gb," Signed in as "+Vr(rr(t).user.displayName),1)):(ws(),As("span",Kb,"Please sign in to see your playlist. ")),Ue("button",{onClick:c},Vr(r.value),1)])]),Ue("main",Qb,[Ue("section",Jb,[Ue("div",Xb,[Ue("iframe",{src:e.value,frameborder:"0",allow:`accelerometer; \r
          autoplay; \r
          clipboard-write; \r
          encrypted-media; \r
          gyroscope; \r
          picture-in-picture`,allowfullscreen:""},null,8,Yb)]),Ue("div",Zb,[Ue("div",eS,Vr(rr(t).user?rr(t).user.displayName:"Your")+" Playlist",1),h[1]||(h[1]=Ue("div",{class:"user_playlist_video_list"},[Ue("div",{class:"video_item"})],-1))])]),Ue("section",tS,[h[2]||(h[2]=Ue("div",{class:"global_header"},"Global Music",-1)),Ue("div",nS,[(ws(!0),As(xt,null,gy(rr(t).music,d=>(ws(),As("div",{class:"video_item",key:d.id,onClick:p=>a(d),style:{cursor:"pointer"}},[Ue("p",null,Vr(d.name)+" - "+Vr(d.author),1)],8,rS))),128))])])]),h[3]||(h[3]=Ue("footer",{class:"footer"}," © 2025 Soundbeat | Can you hear the music? ",-1))]))}}),Lm=Ov();Lm.use(Hv);Vv(sS).use(Lm).mount("#app");
