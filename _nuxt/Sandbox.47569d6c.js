import f from"./TabsHeader.0e754e4f.js";import{a as x,a8 as h,l as n,K as g,o as r,f as l,c as S,u as c,v as k,k as y}from"./entry.8d4d0e48.js";/* empty css                    *//* empty css                       */const $={class:"sandbox"},w=["src"],B={key:2},C=x({__name:"Sandbox",props:{src:{type:String,default:""},repo:{type:String,default:""},branch:{type:String,default:""},dir:{type:String,default:""},file:{type:String,default:"app.vue"}},setup(i){const e=i,p=h(),o={CodeSandBox:()=>`https://codesandbox.io/embed/github/${e.repo}/tree/${e.branch}/${e.dir}?hidenavigation=1&theme=${p.value}`,StackBlitz:()=>`https://stackblitz.com/github/${e.repo}/tree/${e.branch}/${e.dir}?embed=1&file=${e.file}&theme=${p.value}`},u=Object.keys(o).map(t=>({label:t})),d=n(-1),b=n(),s=n(""),a=n(""),m=t=>{a.value=t,s.value=e.src||o[a.value](),localStorage.setItem("docus_sandbox",t)},v=t=>{d.value=t,m(u[t].label)};return g(()=>{a.value=window.localStorage.getItem("docus_sandbox")||"CodeSandBox",s.value=e.src||o[a.value](),d.value=Object.keys(o).indexOf(a.value)}),(t,I)=>{const _=f;return r(),l("div",$,[i.src?k("",!0):(r(),S(_,{key:0,ref_key:"tabs",ref:b,"active-tab-index":c(d),tabs:c(u),"onUpdate:activeTabIndex":v},null,8,["active-tab-index","tabs"])),c(s)?(r(),l("iframe",{key:1,src:c(s),title:"Sandbox editor",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"},null,8,w)):(r(),l("span",B,"Loading Sandbox..."))])}}}),z=y(C,[["__scopeId","data-v-91be1191"]]);export{z as default};
