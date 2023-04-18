export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_){return {data:{"content-query-wXS1YKTxWZ":{_path:"\u002Fdocs\u002Ficon-component",_dir:"docs",_draft:z,_partial:z,_locale:"en",_empty:z,title:A,description:A,body:{type:"root",children:[{type:a,tag:"h1",props:{id:"优雅使用icon"},children:[{type:b,value:A}]},{type:a,tag:"h2",props:{id:u},children:[{type:b,value:u}]},{type:a,tag:B,props:{id:K},children:[{type:b,value:K}]},{type:a,tag:l,props:{code:"├─src\u002Fcomponents\n│  └─SvgIcon.vue\n├─src\u002Fassets\n│  └─icons\n│  │  └─xxx.svg\n",language:"bash",meta:s},children:[{type:a,tag:t,props:{},children:[{type:a,tag:l,props:{__ignoreMap:q},children:[{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:j},children:[{type:b,value:"├─src\u002Fcomponents"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:j},children:[{type:b,value:v}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"└─SvgIcon.vue"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:j},children:[{type:b,value:"├─src\u002Fassets"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:j},children:[{type:b,value:v}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"└─icons"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:j},children:[{type:b,value:v}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:v}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"└─xxx.svg"}]}]}]}]}]},{type:a,tag:B,props:{id:L},children:[{type:b,value:L}]},{type:a,tag:l,props:{code:"\u003C!-- components\u002FSvgIcon.vue --\u003E\n\u003Cscript setup lang=\"ts\"\u003E\nimport { computed, withDefaults } from 'vue'\n\ninterface Props {\n  prefix?: string;\n  name?: string;\n  color?: string;\n}\n\nconst props = withDefaults(defineProps\u003CProps\u003E(), {\n  prefix: 'icon',\n  name: '',\n  color: '#000',\n})\n\nconst symbolId = computed(() =\u003E `#${props.prefix}-${props.name}`)\n\u003C\u002Fscript\u003E\n\n\u003Ctemplate\u003E\n  \u003Csvg aria-hidden=\"true\"\u003E\n    \u003Cuse :xlink:href=\"symbolId\" :fill=\"color\" \u002F\u003E\n  \u003C\u002Fsvg\u003E\n\u003C\u002Ftemplate\u003E\n",language:M,meta:s},children:[{type:a,tag:t,props:{},children:[{type:a,tag:l,props:{__ignoreMap:q},children:[{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:w},children:[{type:b,value:"\u003C!-- components\u002FSvgIcon.vue --\u003E"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:x}]},{type:a,tag:c,props:{class:n},children:[{type:b,value:N}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:g}]},{type:a,tag:c,props:{class:k},children:[{type:b,value:"setup"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:g}]},{type:a,tag:c,props:{class:k},children:[{type:b,value:"lang"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:o}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"\"ts\""}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:r}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:i},children:[{type:b,value:y}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:" { computed, withDefaults } "}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:C}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:g}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"'vue'"}]}]},{type:a,tag:e,props:{class:f},children:[]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:i},children:[{type:b,value:"interface"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:g}]},{type:a,tag:c,props:{class:j},children:[{type:b,value:O}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:" {"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:j},children:[{type:b,value:P}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:D}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:g}]},{type:a,tag:c,props:{class:k},children:[{type:b,value:E}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:F}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:j},children:[{type:b,value:G}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:D}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:g}]},{type:a,tag:c,props:{class:k},children:[{type:b,value:E}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:F}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:j},children:[{type:b,value:"color"}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:D}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:g}]},{type:a,tag:c,props:{class:k},children:[{type:b,value:E}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:F}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:Q}]}]},{type:a,tag:e,props:{class:f},children:[]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:i},children:[{type:b,value:R}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:g}]},{type:a,tag:c,props:{class:k},children:[{type:b,value:H}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:g}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:o}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:g}]},{type:a,tag:c,props:{class:p},children:[{type:b,value:"withDefaults"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"("}]},{type:a,tag:c,props:{class:p},children:[{type:b,value:"defineProps"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:x}]},{type:a,tag:c,props:{class:j},children:[{type:b,value:O}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"\u003E(), {"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"  prefix: "}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"'icon'"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:I}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"  name: "}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"''"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:I}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"  color: "}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"'#000'"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:I}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"})"}]}]},{type:a,tag:e,props:{class:f},children:[]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:i},children:[{type:b,value:R}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:g}]},{type:a,tag:c,props:{class:k},children:[{type:b,value:"symbolId"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:g}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:o}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:g}]},{type:a,tag:c,props:{class:p},children:[{type:b,value:"computed"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"(() "}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:S}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:g}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"`#${"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:H}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:T}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:P}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"}-${"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:H}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:T}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:G}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"}`"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:")"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:U}]},{type:a,tag:c,props:{class:n},children:[{type:b,value:N}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:r}]}]},{type:a,tag:e,props:{class:f},children:[]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:x}]},{type:a,tag:c,props:{class:n},children:[{type:b,value:V}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:r}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"  \u003C"}]},{type:a,tag:c,props:{class:n},children:[{type:b,value:W}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:g}]},{type:a,tag:c,props:{class:k},children:[{type:b,value:"aria-hidden"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:o}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"\"true\""}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:r}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"    \u003C"}]},{type:a,tag:c,props:{class:n},children:[{type:b,value:"use"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:g}]},{type:a,tag:c,props:{class:k},children:[{type:b,value:":xlink:href"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:o}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"\"symbolId\""}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:g}]},{type:a,tag:c,props:{class:k},children:[{type:b,value:":fill"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:o}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"\"color\""}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:X}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"  \u003C\u002F"}]},{type:a,tag:c,props:{class:n},children:[{type:b,value:W}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:r}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:U}]},{type:a,tag:c,props:{class:n},children:[{type:b,value:V}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:r}]}]}]}]}]},{type:a,tag:B,props:{id:Y},children:[{type:b,value:Y}]},{type:a,tag:l,props:{code:"\u002F\u002F vite.config.ts\nimport viteSvgIcons from 'vite-plugin-svg-icons'\nimport { resolve } from 'path'\n\nexport default ({ mode }) =\u003E {\n  return defineConfig({\n    plugins: [\n      viteSvgIcons({\n        iconDirs: [resolve(process.cwd(), 'src\u002Fassets\u002Ficons')],\n        symbolId: 'icon-[dir]-[name]'\n      })\n    ]\n  })\n}\n",language:Z,meta:s},children:[{type:a,tag:t,props:{},children:[{type:a,tag:l,props:{__ignoreMap:q},children:[{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:w},children:[{type:b,value:"\u002F\u002F vite.config.ts"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:i},children:[{type:b,value:y}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:" viteSvgIcons "}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:C}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:g}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"'vite-plugin-svg-icons'"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:i},children:[{type:b,value:y}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:" { resolve } "}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:C}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:g}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"'path'"}]}]},{type:a,tag:e,props:{class:f},children:[]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:i},children:[{type:b,value:"export"}]},{type:a,tag:c,props:{class:j},children:[{type:b,value:g}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"default"}]},{type:a,tag:c,props:{class:j},children:[{type:b,value:" ({ mode }) "}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:S}]},{type:a,tag:c,props:{class:j},children:[{type:b,value:g}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"{"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"return"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:g}]},{type:a,tag:c,props:{class:p},children:[{type:b,value:"defineConfig"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:_}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"    plugins: ["}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"      "}]},{type:a,tag:c,props:{class:p},children:[{type:b,value:"viteSvgIcons"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:_}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"        iconDirs: ["}]},{type:a,tag:c,props:{class:p},children:[{type:b,value:"resolve"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"(process."}]},{type:a,tag:c,props:{class:p},children:[{type:b,value:"cwd"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"(), "}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"'src\u002Fassets\u002Ficons'"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:")],"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"        symbolId: "}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"'icon-[dir]-[name]'"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"      })"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"    ]"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"  })"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:Q}]}]}]}]}]},{type:a,tag:l,props:{code:"\u002F\u002F main.ts\nimport 'virtual:svg-icons-register'\n\n\u002F\u002F 使用 unplugin-vue-components 自动化导入 SvgIcon\n",language:Z,meta:s},children:[{type:a,tag:t,props:{},children:[{type:a,tag:l,props:{__ignoreMap:q},children:[{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:w},children:[{type:b,value:"\u002F\u002F main.ts"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:i},children:[{type:b,value:y}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:g}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"'virtual:svg-icons-register'"}]}]},{type:a,tag:e,props:{class:f},children:[]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:w},children:[{type:b,value:"\u002F\u002F 使用 unplugin-vue-components 自动化导入 SvgIcon"}]}]}]}]}]},{type:a,tag:l,props:{code:"\u003CSvgIcon name=\"xxx\" \u002F\u003E\n",language:M,meta:s},children:[{type:a,tag:t,props:{},children:[{type:a,tag:l,props:{__ignoreMap:q},children:[{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:x}]},{type:a,tag:c,props:{class:n},children:[{type:b,value:"SvgIcon"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:g}]},{type:a,tag:c,props:{class:k},children:[{type:b,value:G}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:o}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"\"xxx\""}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:X}]}]}]}]}]},{type:a,tag:"style",children:[{type:b,value:".ct-63d77d{color:#DCBDFB}\n.ct-2fd201{color:#F47067}\n.ct-9cb6db{color:#6CB6FF}\n.ct-0fa68c{color:#8DDB8C}\n.ct-7b4888{color:#768390}\n.ct-33a57f{color:#96D0FF}\n.ct-527d49{color:#ADBAC7}\n.ct-ba0620{color:#F69D50}"}]}],toc:{title:q,searchDepth:J,depth:J,links:[{id:u,depth:J,text:u}]}},_type:"markdown",_id:"content:docs:62.icon-component.md",_source:"content",_file:"docs\u002F62.icon-component.md",_extension:"md"}},prerenderedAt:1681795917888}}("element","text","span","ct-527d49","div","line"," ","ct-33a57f","ct-2fd201","ct-ba0620","ct-9cb6db","code","  ","ct-0fa68c","=","ct-63d77d","","\u003E",null,"pre","svg-icon","│","ct-7b4888","\u003C","import",false,"优雅使用Icon","h4","from","?:","string",";","name","props",",",2,"目录","创建组件","vue","script","Props","prefix","}","const","=\u003E",".","\u003C\u002F","template","svg"," \u002F\u003E","配置应用","ts","({"))