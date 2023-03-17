import{G as p,a as k,u as r,o as e,b as o,D as i,R as l,S as u,e as d,M as a,f,T as m,U as c,J as b}from"./entry.091436f4.js";const g=()=>p("DOCSLAYOUTLEFTEARLY",()=>[{title:"Documentation",icon:"iconfont icon-ziliao",router:"/docs/documentation"},{title:"Tools",icon:"iconfont icon-179",router:"/docs/tools"},{title:"Design",icon:"iconfont icon-zhaopian",router:"/docs/design"}]),C=()=>p("DOCSLAYOUTLEFTGUIDE",()=>[{title:"\u76EE\u5F55\u89C4\u8303",children:[{title:"Directory",router:"/docs/standard-directory"}]},{title:"\u7F16\u7801\u89C4\u8303",children:[{title:"ESlint",router:"/docs/eslint"},{title:"Prettier",router:"/docs/prettier"},{title:"Stylelint",router:"/docs/stylelint"},{title:"EditorConfig",router:"/docs/editorconfig"},{title:"TSConfig",router:"/docs/tsconfig"},{title:"Browserslist",router:"/docs/browserslist"}]},{title:"\u63D0\u4EA4\u89C4\u8303",children:[{title:"Husky & LintStaged",router:"/docs/husky-lintstaged"},{title:"Commitizen & Commitlint",router:"/docs/commitizen-commitlint"},{title:"Changelog",router:"/docs/changelog"}]},{title:"\u5F00\u53D1\u89C4\u8303",children:[{title:"Var",router:"/docs/var"},{title:"Notes",router:"/docs/notes"},{title:"Mock",router:"/docs/mock"},{title:"Request",router:"/docs/request"},{title:"Store",router:"/docs/store"},{title:"Router",router:"/docs/router"}]},{title:"\u4FBF\u6377\u5F00\u53D1",children:[{title:"AutoImportant",router:"/docs/auto-important"},{title:"IconComponent",router:"/docs/icon-component"},{title:"LayoutSystem",router:"/docs/layout-system"},{title:"PWA",router:"/docs/pwa"},{title:"UnoCSS",router:"/docs/unocss"},{title:"I18n",router:"/docs/i18n"},{title:"MarkdownSupport",router:"/docs/markdown-support"}]},{title:"\u7CFB\u7EDF\u6784\u5EFA",children:[{title:"Package",router:"/docs/package"},{title:"Webpack",router:"/docs/build-webpack"},{title:"Vite",router:"/docs/build-vite"},{title:"Rollup",router:"/docs/build-rollup"},{title:"Babel",router:"/docs/build-babel"}]},{title:"\u6027\u80FD\u4F18\u5316",children:[{title:"ChromeAnalysis",router:"/docs/analysis-chrome"},{title:"JS & CSS",router:"/docs/js-css"},{title:"Resource",router:"/docs/resource"},{title:"Vue",router:"/docs/vue"},{title:"MiniProgram",router:"/docs/mini-program"},{title:"Webpack",router:"/docs/webpack"},{title:"Vite",router:"/docs/vite"},{title:"Network",router:"/docs/network"}]},{title:"\u96C6\u6210\u6D4B\u8BD5",children:[{title:"Vitest",router:"/docs/vitest"},{title:"Jest",router:"/docs/jest"},{title:"Cypress",router:"/docs/cypress"}]},{title:"\u9879\u76EE\u90E8\u7F72",children:[{title:"Gitlab",router:"/docs/gitlab"},{title:"GitHubActions",router:"/docs/github-action"},{title:"Netlify",router:"/docs/netlify"},{title:"Nginx",router:"/docs/nginx"},{title:"Docker",router:"/docs/docker"},{title:"Jenkins",router:"/docs/jenkins"}]},{title:"\u76D1\u63A7\u5206\u6790",children:[{title:"Monitor",router:"/docs/monitor"},{title:"UserTraffic",router:"/docs/user-traffic"}]}]),_={class:"pb-20"},D={class:"mb-3 font-medium text-slate-900"},x={class:"space-y-2 border-l border-slate-100"},F=k({__name:"DocsLayoutLeft",setup(L){const y=r(g()),h=r(C());return(E,S)=>{const n=b;return e(),o("div",null,[i("div",_,[(e(!0),o(l,null,u(r(y),t=>(e(),o("div",{key:t.title},[d(n,{to:t.router,class:"inline-flex items-center text-sm leading-6 mb-4 font-medium text-slate-700 hover:text-sky-500 hover:shadow-sm",activeClass:"text-sky-500"},{default:a(()=>[i("span",{class:f(["mr-4 p-[2px] !text-xl !leading-4 rounded ring-1 ring-slate-900/5 shadow-md",t.icon])},null,2),m(" "+c(t.title),1)]),_:2},1032,["to"])]))),128)),(e(!0),o(l,null,u(r(h),t=>(e(),o("div",{class:"mt-8",key:t.title},[i("h5",D,c(t.title),1),i("div",x,[(e(!0),o(l,null,u(t.children,s=>(e(),o("p",{key:s.title},[d(n,{to:s.router,class:"block border-l pl-4 -ml-px border-slate-200 text-slate-500 hover:border-slate-400 hover:text-slate-900",activeClass:"!text-sky-500 border-sky-500"},{default:a(()=>[m(c(s.title),1)]),_:2},1032,["to"])]))),128))])]))),128))])])}}});export{F as _};