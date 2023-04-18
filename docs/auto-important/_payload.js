export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$){return {data:{"content-query-IyPW5gs3Ym":{_path:"\u002Fdocs\u002Fauto-important",_dir:"docs",_draft:y,_partial:y,_locale:"en",_empty:y,title:E,description:E,body:{type:"root",children:[{type:a,tag:F,props:{id:"api自动引入"},children:[{type:b,value:"API自动引入"}]},{type:a,tag:F,props:{id:G},children:[{type:b,value:G}]},{type:a,tag:H,props:{id:I},children:[{type:b,value:J}]},{type:a,tag:"alert",props:{type:"output"},children:[{type:a,tag:"p",props:{},children:[{type:b,value:"动态加载某个文件夹下的所有匹配规则文件"}]}]},{type:a,tag:m,props:{code:"\u002F**\n * plugin\u002Feasy_component.ts\n * 自动化批量导入模块\n * @param {Function} context require.context()返回结果\n * @returns {Array}\n *\u002F\nexport const easyComponent = (context) =\u003E {\n  return context.keys().map(item =\u003E {\n    const value = context(item)\n    return value.default || value\n  })\n}\n",language:K,meta:r},children:[{type:a,tag:s,props:{},children:[{type:a,tag:m,props:{__ignoreMap:o},children:[{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:k},children:[{type:b,value:"\u002F**"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:k},children:[{type:b,value:" * plugin\u002Feasy_component.ts"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:k},children:[{type:b,value:" * 自动化批量导入模块"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:k},children:[{type:b,value:L}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"@param"}]},{type:a,tag:c,props:{class:k},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:l},children:[{type:b,value:"{Function}"}]},{type:a,tag:c,props:{class:k},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:t}]},{type:a,tag:c,props:{class:k},children:[{type:b,value:" require.context()返回结果"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:k},children:[{type:b,value:L}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"@returns"}]},{type:a,tag:c,props:{class:k},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:l},children:[{type:b,value:"{Array}"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:k},children:[{type:b,value:" *\u002F"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:g},children:[{type:b,value:M}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:u}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:j},children:[{type:b,value:N}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:v}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:" ("}]},{type:a,tag:c,props:{class:l},children:[{type:b,value:t}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:") "}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:z}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:A}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:B}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:O}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:" context."}]},{type:a,tag:c,props:{class:j},children:[{type:b,value:"keys"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"()."}]},{type:a,tag:c,props:{class:j},children:[{type:b,value:"map"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:w}]},{type:a,tag:c,props:{class:l},children:[{type:b,value:P}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:z}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:A}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:C}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:u}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:n},children:[{type:b,value:"value"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:v}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:j},children:[{type:b,value:t}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"(item)"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:C}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:O}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:" value.default "}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"||"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:" value"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"  })"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"}"}]}]}]}]}]},{type:a,tag:m,props:{code:"import Vue from 'vue'\nimport { easyComponent } from '@\u002Fplugin\u002Fplugin\u002Feasy_component'\n\nconst moudulesFiles = easyComponent(require.context('@\u002Fcomponents\u002F', true, \u002F\\.vue\u002F))\nmoudulesFiles.forEach(item =\u003E {\n  const reqComName = item.replace(\u002F(\\.\\\u002F|\\.vue)\u002Fg\n  Vue.component(reqComName, item)\n})\n",language:"js",meta:r},children:[{type:a,tag:s,props:{},children:[{type:a,tag:m,props:{__ignoreMap:o},children:[{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:g},children:[{type:b,value:p}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:" Vue "}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:q}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:Q}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:g},children:[{type:b,value:p}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:" { easyComponent } "}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:q}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"'@\u002Fplugin\u002Fplugin\u002Feasy_component'"}]}]},{type:a,tag:e,props:{class:f},children:[]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:g},children:[{type:b,value:u}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:n},children:[{type:b,value:"moudulesFiles"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:v}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:j},children:[{type:b,value:N}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"(require."}]},{type:a,tag:c,props:{class:j},children:[{type:b,value:t}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:w}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"'@\u002Fcomponents\u002F'"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:", "}]},{type:a,tag:c,props:{class:n},children:[{type:b,value:R}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:S}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:" \u002F"}]},{type:a,tag:c,props:{class:D},children:[{type:b,value:T}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"vue\u002F"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"))"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"moudulesFiles."}]},{type:a,tag:c,props:{class:j},children:[{type:b,value:"forEach"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:w}]},{type:a,tag:c,props:{class:l},children:[{type:b,value:P}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:z}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:A}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:B}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:u}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:n},children:[{type:b,value:"reqComName"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:v}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:" item."}]},{type:a,tag:c,props:{class:j},children:[{type:b,value:"replace"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:w}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"\u002F("}]},{type:a,tag:c,props:{class:D},children:[{type:b,value:"\\.\\\u002F"}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"|"}]},{type:a,tag:c,props:{class:D},children:[{type:b,value:T}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"vue)\u002F"}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"g"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"  Vue."}]},{type:a,tag:c,props:{class:j},children:[{type:b,value:"component"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"(reqComName, item)"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:U}]}]}]}]}]},{type:a,tag:H,props:{id:V},children:[{type:b,value:W}]},{type:a,tag:X,props:{id:Y},children:[{type:b,value:Y}]},{type:a,tag:m,props:{code:"pnpm add -D unplugin-vue-components\n",language:"bash",meta:r},children:[{type:a,tag:s,props:{},children:[{type:a,tag:m,props:{__ignoreMap:o},children:[{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:l},children:[{type:b,value:"pnpm"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"add"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:n},children:[{type:b,value:"-D"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"unplugin-vue-components"}]}]}]}]}]},{type:a,tag:X,props:{id:Z},children:[{type:b,value:Z}]},{type:a,tag:m,props:{code:"\u002F\u002F vite.config.ts\nimport { defineConfig } from 'vite'\nimport Components from 'unplugin-vue-components\u002Fvite'\nimport { AntDesignVueResolver } from 'unplugin-vue-components\u002Fresolvers'\n\nexport default defineConfig({\n  plugins: [\n    Components({\n      dts: true,\n      dirs: [ 'src\u002Fcomponents\u002Fsys' ],\n      extensions: [ 'vue' ],\n      resolvers: [ AntDesignVueResolver() ]\n    })\n  ]\n})\n",language:K,meta:r},children:[{type:a,tag:s,props:{},children:[{type:a,tag:m,props:{__ignoreMap:o},children:[{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:k},children:[{type:b,value:"\u002F\u002F vite.config.ts"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:g},children:[{type:b,value:p}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:" { defineConfig } "}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:q}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"'vite'"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:g},children:[{type:b,value:p}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:" Components "}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:q}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"'unplugin-vue-components\u002Fvite'"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:g},children:[{type:b,value:p}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:" { AntDesignVueResolver } "}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:q}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"'unplugin-vue-components\u002Fresolvers'"}]}]},{type:a,tag:e,props:{class:f},children:[]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:g},children:[{type:b,value:M}]},{type:a,tag:c,props:{class:l},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"default"}]},{type:a,tag:c,props:{class:l},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:j},children:[{type:b,value:"defineConfig"}]},{type:a,tag:c,props:{class:l},children:[{type:b,value:_}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:l},children:[{type:b,value:B}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"plugins: ["}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:C}]},{type:a,tag:c,props:{class:j},children:[{type:b,value:"Components"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:_}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"      dts: "}]},{type:a,tag:c,props:{class:n},children:[{type:b,value:R}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:S}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"      dirs: [ "}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"'src\u002Fcomponents\u002Fsys'"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:$}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"      extensions: [ "}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:Q}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:$}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"      resolvers: [ "}]},{type:a,tag:c,props:{class:j},children:[{type:b,value:"AntDesignVueResolver"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"() ]"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"    })"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"  ]"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:l},children:[{type:b,value:U}]}]}]}]}]},{type:a,tag:"style",children:[{type:b,value:".ct-5c089c{color:#8DDB8C}\n.ct-dbc77c{color:#96D0FF}\n.ct-be561b{color:#6CB6FF}\n.ct-21a233{color:#DCBDFB}\n.ct-2ec197{color:#ADBAC7}\n.ct-acfdf9{color:#F69D50}\n.ct-01f664{color:#F47067}\n.ct-5e7abd{color:#768390}"}]}],toc:{title:o,searchDepth:x,depth:x,links:[{id:I,depth:x,text:J},{id:V,depth:x,text:W}]}},_type:"markdown",_id:"content:docs:61.auto-important.md",_source:"content",_file:"docs\u002F61.auto-important.md",_extension:"md"}},prerenderedAt:1681795917852}}("element","text","span","ct-2ec197","div","line","ct-01f664"," ","ct-dbc77c","ct-21a233","ct-5e7abd","ct-acfdf9","code","ct-be561b","","import","from",null,"pre","context","const","=","(",2,false,"=\u003E"," {","  ","    ","ct-5c089c","自动引入","h1","组件自动引入","h2","方案一webpack-requirecontext","方案一：Webpack require.context","ts"," * ","export","easyComponent","return","item","'vue'","true",",","\\.","})","方案二unplugin-vue-components","方案二：unplugin-vue-components","h4","安装","配置","({"," ],"))