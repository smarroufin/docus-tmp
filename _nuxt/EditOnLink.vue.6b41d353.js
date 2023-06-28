import{d as y,x as a,L as c,a5 as v,X as w}from"./entry.cd82d135.js";const q=y({props:{owner:{type:String,default:()=>{var e,t,r;return(r=(t=(e=a())==null?void 0:e.docus)==null?void 0:t.github)==null?void 0:r.owner},required:!1},repo:{type:String,default:()=>{var e,t,r;return(r=(t=(e=a())==null?void 0:e.docus)==null?void 0:t.github)==null?void 0:r.repo},required:!1},branch:{type:String,default:()=>{var e,t,r;return(r=(t=(e=a())==null?void 0:e.docus)==null?void 0:t.github)==null?void 0:r.branch},required:!1},dir:{type:String,default:()=>{var e,t,r;return(r=(t=(e=a())==null?void 0:e.docus)==null?void 0:t.github)==null?void 0:r.dir},required:!1},source:{type:String,required:!1,default:void 0},page:{type:Object,required:!1,default:void 0},contentDir:{type:String,required:!1,default:()=>{var e,t,r;return((r=(t=(e=a())==null?void 0:e.docus)==null?void 0:t.github)==null?void 0:r.dir)||"content"}},edit:{type:Boolean,required:!1,default:()=>{var e,t,r;return(r=(t=(e=a())==null?void 0:e.docus)==null?void 0:t.github)==null?void 0:r.edit}}},setup(e){if(!e.owner||!e.repo||!e.branch)throw new Error("If you want to use `GithubLink` component, you must specify: `owner`, `repo` and `branch`.");const t=c(()=>{var s,h;let{repo:n,owner:u,branch:d,contentDir:f}=e,l="";if((h=(s=a())==null?void 0:s.public)!=null&&h.content){let i;const{sources:b}=a().public.content;for(const g in b||[])if(e.page._id.startsWith(g)){i=b[g];break}(i==null?void 0:i.driver)==="github"&&(n=i.repo||e.repo||"",u=i.owner||e.owner||"",d=i.branch||e.branch||"main",f=i.dir||e.contentDir||"",l=i.prefix||"")}return{repo:n,owner:u,branch:d,contentDir:f,prefix:l}}),r=c(()=>v("https://github.com",`${t.value.owner}/${t.value.repo}`)),o=c(()=>{var u;const n=[];return(u=e==null?void 0:e.page)!=null&&u._path?(t.value.contentDir&&n.push(t.value.contentDir),n.push(e.page._file.substring(t.value.prefix.length)),n):(e.dir&&n.push(e.dir),e.source&&n.push(e.source),n)});return{url:c(()=>{var u;const n=[r.value];return e.edit?n.push("edit"):n.push("tree"),n.push(((u=t==null?void 0:t.value)==null?void 0:u.branch)||"",...o.value),n.filter(Boolean).join("/")})}},render(e){var o;const{url:t}=e,r=w();return(o=r==null?void 0:r.default)==null?void 0:o.call(r,{url:t})}});export{q as _};
