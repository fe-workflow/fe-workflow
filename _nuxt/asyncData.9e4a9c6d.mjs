import{s as A,v as l,x as b,w as O,y as k,z as g,u as z,A as R}from"./entry.29d81c83.mjs";const B=n=>A(n)?n:l(n),M=()=>null;function I(...n){var y,h,v,m,w,D,_;const f=typeof n[n.length-1]=="string"?n.pop():void 0;typeof n[0]!="string"&&n.unshift(f);let[t,c,e={}]=n;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof c!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");e.server=(y=e.server)!=null?y:!0,e.default=(h=e.default)!=null?h:M,e.defer&&console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC."),e.lazy=(m=(v=e.lazy)!=null?v:e.defer)!=null?m:!1,e.initialCache=(w=e.initialCache)!=null?w:!0;const a=b(),i=R();if(i&&!i._nuxtOnBeforeMountCbs){const o=i._nuxtOnBeforeMountCbs=[];i&&(k(()=>{o.forEach(s=>{s()}),o.splice(0,o.length)}),g(()=>o.splice(0,o.length)))}const u=()=>e.initialCache&&a.payload.data[t]!==void 0,r={data:B((D=a.payload.data[t])!=null?D:e.default()),pending:l(!u()),error:l((_=a.payload._errors[t])!=null?_:null)};r.refresh=(o={})=>a._asyncDataPromises[t]?a._asyncDataPromises[t]:o._initial&&u()?a.payload.data[t]:(r.pending.value=!0,a._asyncDataPromises[t]=new Promise((s,C)=>{try{s(c(a))}catch(P){C(P)}}).then(s=>{e.transform&&(s=e.transform(s)),e.pick&&(s=E(s,e.pick)),r.data.value=s,r.error.value=null}).catch(s=>{r.error.value=s,r.data.value=z(e.default())}).finally(()=>{r.pending.value=!1,a.payload.data[t]=r.data.value,r.error.value&&(a.payload._errors[t]=!0),delete a._asyncDataPromises[t]}),a._asyncDataPromises[t]);const d=()=>r.refresh({_initial:!0}),x=e.server!==!1&&a.payload.serverRendered;{x&&a.isHydrating&&t in a.payload.data?r.pending.value=!1:i&&a.payload.serverRendered&&(a.isHydrating||e.lazy)?i._nuxtOnBeforeMountCbs.push(d):d(),e.watch&&O(e.watch,()=>r.refresh());const o=a.hook("app:data:refresh",s=>{if(!s||s.includes(t))return r.refresh()});i&&g(o)}const p=Promise.resolve(a._asyncDataPromises[t]).then(()=>r);return Object.assign(p,r),p}function j(n){const f=n?Array.isArray(n)?n:[n]:void 0;return b().callHook("app:data:refresh",f)}function E(n,f){const t={};for(const c of f)t[c]=n[c];return t}export{j as r,I as u,B as w};
