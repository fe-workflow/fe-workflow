export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T){return {data:{"content-query-wseZ641o0j":{_path:"\u002Fdocs\u002Fstylelint",_dir:"docs",_draft:A,_partial:A,_locale:"en",_empty:A,title:E,description:"Styleint配置使用指南",body:{type:"root",children:[{type:a,tag:"h1",props:{id:"styleint"},children:[{type:b,value:E}]},{type:a,tag:q,props:{id:u},children:[{type:b,value:u}]},{type:a,tag:k,props:{code:"# stylelint-config-standard 标准配置\npnpm add stylelint stylelint-config-standard -D\n\n# 【可选】排序扩展\npnpm add stylelint-order -D\n# 【可选】规范的排序扩展\npnpm add stylelint-config-rational-order -D\n\n# 【可选】支持校验scss语法的插件\npnpm add stylelint-scss  -D\n",language:"bash",meta:r},children:[{type:a,tag:s,props:{},children:[{type:a,tag:k,props:{__ignoreMap:p},children:[{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:i},children:[{type:b,value:"# stylelint-config-standard 标准配置"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:v},children:[{type:b,value:w}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:x}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"stylelint"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"stylelint-config-standard"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:n},children:[{type:b,value:y}]}]},{type:a,tag:e,props:{class:f},children:[]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:i},children:[{type:b,value:"# 【可选】排序扩展"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:v},children:[{type:b,value:w}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:x}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"stylelint-order"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:n},children:[{type:b,value:y}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:i},children:[{type:b,value:"# 【可选】规范的排序扩展"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:v},children:[{type:b,value:w}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:x}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"stylelint-config-rational-order"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:n},children:[{type:b,value:y}]}]},{type:a,tag:e,props:{class:f},children:[]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:i},children:[{type:b,value:"# 【可选】支持校验scss语法的插件"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:v},children:[{type:b,value:w}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:x}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"stylelint-scss"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:n},children:[{type:b,value:y}]}]}]}]}]},{type:a,tag:q,props:{id:F},children:[{type:b,value:G}]},{type:a,tag:k,props:{code:"{\n  \"extends\": [\n    \"stylelint-config-standard\",\n    \"stylelint-config-rational-order\" \u002F\u002F 可选\n  ],\n  \"plugins\": [\n    \"stylelint-scss\" \u002F\u002F 可选\n  ],\n  \"rules\": {\n    \u002F\u002F stylelint-config-rational-order 规则\n    \u002F\u002F 1.Positioning 位置属性\n    \u002F\u002F 2.Box Model 盒子属性\n    \u002F\u002F 3.Typography 文字属性\n    \u002F\u002F 4.Visual 视觉属性\n    \u002F\u002F 5.Animation Misc 其他\n\n    \u002F\u002F 与 prettier 规则冲突\n    \"declaration-block-trailing-semicolon\": null\n  }\n}\n",language:z,meta:r},children:[{type:a,tag:s,props:{},children:[{type:a,tag:k,props:{__ignoreMap:p},children:[{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:H}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:l},children:[{type:b,value:"\"extends\""}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:I}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:j}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"\"stylelint-config-standard\""}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:B}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:j}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"\"stylelint-config-rational-order\""}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:J}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:K}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:l},children:[{type:b,value:"\"plugins\""}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:I}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:j}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"\"stylelint-scss\""}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:J}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:K}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:l},children:[{type:b,value:"\"rules\""}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:C}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:j}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"\u002F\u002F stylelint-config-rational-order 规则"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:j}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"\u002F\u002F 1.Positioning 位置属性"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:j}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"\u002F\u002F 2.Box Model 盒子属性"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:j}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"\u002F\u002F 3.Typography 文字属性"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:j}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"\u002F\u002F 4.Visual 视觉属性"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:j}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"\u002F\u002F 5.Animation Misc 其他"}]}]},{type:a,tag:e,props:{class:f},children:[]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:j}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"\u002F\u002F 与 prettier 规则冲突"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:j}]},{type:a,tag:c,props:{class:l},children:[{type:b,value:"\"declaration-block-trailing-semicolon\""}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:t}]},{type:a,tag:c,props:{class:n},children:[{type:b,value:"null"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:L}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:D}]}]}]}]}]},{type:a,tag:q,props:{id:M},children:[{type:b,value:N}]},{type:a,tag:k,props:{code:"build\ndist\nnode_modules\n",language:z,meta:r},children:[{type:a,tag:s,props:{},children:[{type:a,tag:k,props:{__ignoreMap:p},children:[{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"build"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"dist"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"node_modules"}]}]}]}]}]},{type:a,tag:q,props:{id:O},children:[{type:b,value:P}]},{type:a,tag:k,props:{code:"\"scripts\": {\n  \"lint:style\": \"stylelint {components,src}**\u002F*.{vue,html,css,sss,less,scss,sass}\",\n  \"fix:style\": \"stylelint {components,src}**\u002F*.{vue,html,css,sss,less,scss,sass} --fix\"\n}\n",language:z,meta:r},children:[{type:a,tag:s,props:{},children:[{type:a,tag:k,props:{__ignoreMap:p},children:[{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:g},children:[{type:b,value:"\"scripts\""}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:C}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:l},children:[{type:b,value:"\"lint:style\""}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:t}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"\"stylelint {components,src}**\u002F*.{vue,html,css,sss,less,scss,sass}\""}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:B}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:l},children:[{type:b,value:"\"fix:style\""}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:t}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"\"stylelint {components,src}**\u002F*.{vue,html,css,sss,less,scss,sass} --fix\""}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:D}]}]}]}]}]},{type:a,tag:q,props:{id:Q},children:[{type:b,value:R}]},{type:a,tag:"ul",props:{},children:[{type:a,tag:S,props:{},children:[{type:b,value:"添加 stylelint 插件"}]},{type:a,tag:S,props:{},children:[{type:b,value:"配置文件 setting.json 自动格式化"}]}]},{type:a,tag:k,props:{code:"{\n  \"editor.formatOnSave\": true,\n  \"editor.codeActionsOnSave\": {\n    \"source.fixAll.stylelint\": true\n  }\n}\n",language:z,meta:r},children:[{type:a,tag:s,props:{},children:[{type:a,tag:k,props:{__ignoreMap:p},children:[{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:H}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:l},children:[{type:b,value:"\"editor.formatOnSave\""}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:t}]},{type:a,tag:c,props:{class:n},children:[{type:b,value:T}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:B}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:l},children:[{type:b,value:"\"editor.codeActionsOnSave\""}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:C}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:j}]},{type:a,tag:c,props:{class:l},children:[{type:b,value:"\"source.fixAll.stylelint\""}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:t}]},{type:a,tag:c,props:{class:n},children:[{type:b,value:T}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:L}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:D}]}]}]}]}]},{type:a,tag:"style",children:[{type:b,value:".ct-3455d0{color:#8DDB8C}\n.ct-655d88{color:#6CB6FF}\n.ct-25db91{color:#96D0FF}\n.ct-5363ac{color:#ADBAC7}\n.ct-b6d066{color:#F69D50}\n.ct-9981c3{color:#768390}"}]}],toc:{title:p,searchDepth:o,depth:o,links:[{id:u,depth:o,text:u},{id:F,depth:o,text:G},{id:M,depth:o,text:N},{id:O,depth:o,text:P},{id:Q,depth:o,text:R}]}},_type:"markdown",_id:"content:docs:23.stylelint.md",_source:"content",_file:"docs\u002F23.stylelint.md",_extension:"md"}},prerenderedAt:1681795562640}}("element","text","span","ct-5363ac","div","line","ct-25db91"," ","ct-9981c3","    ","code","ct-3455d0","  ","ct-655d88",2,"","h2",null,"pre",": ","安装","ct-b6d066","pnpm","add","-D","json",false,",",": {","}","Styleint","配置-stylelintrc","配置 .stylelintrc","{",": [","\u002F\u002F 可选","  ],","  }","配置-stylelintignore","配置 .stylelintignore","配置-packagejson","配置 package.json","for-vscode","For VScode","li","true"))