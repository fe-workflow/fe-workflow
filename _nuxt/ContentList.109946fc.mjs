import i from"./ContentQuery.49374a62.mjs";import{a as m,e as y,h as o}from"./entry.29d81c83.mjs";import"./asyncData.9e4a9c6d.mjs";import"./json.9d3c948a.mjs";import"./utils.c0f02b94.mjs";const q=m({props:{path:{type:String,required:!1,default:"/"},query:{type:Object,required:!1,default:void 0}},render(a){const e=y(),{path:d,query:p}=a,f=Object.assign(p||{},{path:d}),r=(t,n)=>o("pre",null,JSON.stringify({message:"You should use slots with <ContentList>",slot:t,data:n},null,2));return o(i,f,{default:e!=null&&e.default?({data:t,refresh:n,isPartial:u})=>e==null?void 0:e.default({list:t,refresh:n,isPartial:u,...this.$attrs}):({data:t})=>r("default",t),empty:t=>e!=null&&e.empty?e.empty(t):({data:n})=>r("default",n),"not-found":t=>{var n;return e!=null&&e["not-found"]?(n=e==null?void 0:e["not-found"])==null?void 0:n.call(e,t):({data:u})=>r("not-found",u)}})}});export{q as default};
