import{B as p,p as s}from"./entry.29d81c83.mjs";const y=["p","h1","h2","h3","h4","h5","h6","li"];function u(r,t){return r.type===t||typeof r.type=="object"&&r.type.tag===t||r.tag===t}function a(r){return u(r,"text")||typeof r.children=="string"}function c(r){return Array.isArray(r.children)||typeof r.children=="string"?r.children:typeof r.children.default=="function"?r.children.default():[]}function n(r){if(!r)return"";if(Array.isArray(r))return r.map(n).join("");if(a(r))return r.children||r.value;const t=c(r);return Array.isArray(t)?t.map(n).join(""):""}function f(r,t=["p"]){if(Array.isArray(r))return r.flatMap(e=>f(e,t));let i=r;return t.some(e=>e==="*"||u(r,e))&&(i=c(r)||r,!Array.isArray(i)&&y.some(e=>u(r,e))&&(i=[i])),i}function l(r,t=["p"]){return r=Array.isArray(r)?r:[r],t.length?r.flatMap(i=>l(f(i,[t[0]]),t.slice(1))).filter(i=>!(a(i)&&n(i).trim()==="")):r}const A=r=>p(r,"/api/"+s().public.content.base),m=()=>({unwrap:f,flatUnwrap:l});export{m as u,A as w};
