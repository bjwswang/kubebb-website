"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2217],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},b="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=u(n),k=r,d=b["".concat(i,".").concat(k)]||b[k]||s[k]||o;return n?a.createElement(d,l(l({ref:t},p),{},{components:n})):a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=k;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[b]="string"==typeof e?e:r,l[1]=c;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7320:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1},l="\u542f\u7528Rating",c={unversionedId:"core/userguide/enablerating",id:"core/userguide/enablerating",title:"\u542f\u7528Rating",description:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cRating\u7ec4\u4ef6\u8bc4\u7ea7\u529f\u80fd\u662f\u5173\u95ed\u7684\uff0c\u9700\u8981\u624b\u52a8\u542f\u7528\u3002\u6211\u4eec\u5efa\u8bae\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u542f\u7528Rating:",source:"@site/docs/core/userguide/enablerating.md",sourceDirName:"core/userguide",slug:"/core/userguide/enablerating",permalink:"/website/docs/core/userguide/enablerating",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u7528\u6237\u6307\u5357",permalink:"/website/docs/category/\u7528\u6237\u6307\u5357"},next:{title:"\u79c1\u6709\u96c6\u7fa4\u90e8\u7f72\u65b9\u6848",permalink:"/website/docs/core/userguide/privatecluster"}},i={},u=[{value:"1.\u5b89\u88c5kubebb core",id:"1\u5b89\u88c5kubebb-core",level:2},{value:"2. \u521b\u5efa\u547d\u540d\u7a7a\u95f4 <code>kubebb-addons</code>",id:"2-\u521b\u5efa\u547d\u540d\u7a7a\u95f4-kubebb-addons",level:2},{value:"3. \u5b89\u88c5Tekton\u6d41\u6c34\u7ebf",id:"3-\u5b89\u88c5tekton\u6d41\u6c34\u7ebf",level:2},{value:"4. \u5b89\u88c5Arcadia AI\u7ec4\u4ef6",id:"4-\u5b89\u88c5arcadia-ai\u7ec4\u4ef6",level:2},{value:"4. \u66f4\u65b0\u5185\u6838",id:"4-\u66f4\u65b0\u5185\u6838",level:3}],p={toc:u},b="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(b,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u542f\u7528rating"},"\u542f\u7528Rating"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cRating\u7ec4\u4ef6\u8bc4\u7ea7\u529f\u80fd\u662f\u5173\u95ed\u7684\uff0c\u9700\u8981\u624b\u52a8\u542f\u7528\u3002\u6211\u4eec\u5efa\u8bae\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u542f\u7528Rating:"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u8be6\u7ec6\u4e86\u89e3\u66f4\u591aRating\u6709\u5173\u5185\u5bb9\uff0c\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"../rating"},"\u7ec4\u4ef6\u8bc4\u7ea7\u8bbe\u8ba1"),"\u548c",(0,r.kt)("a",{parentName:"p",href:"../concepts/rating"},"Rating CRD\u5b9a\u4e49"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Rating"),"\u4f9d\u8d56\u4e24\u4e2a\u7ec4\u4ef6\uff0c\u5206\u522b\u662f:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Tekton"),"\u63d0\u4f9b\u6d41\u6c34\u7ebf\u80fd\u529b,\u5b8c\u6210\u7ec4\u4ef6\u7684\u81ea\u52a8\u5316\u6d4b\u8bd5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"KubeAGI Arcadia"),"\u63d0\u4f9bAI\u6570\u636e\u5206\u6790\u80fd\u529b\uff0c\u5b8c\u6574\u7ec4\u4ef6\u7684AI\u8bc4\u6d4b")),(0,r.kt)("p",null,"\u56e0\u6b64, \u9700\u8981\u5148\u5b89\u88c5\u597dTekton\u548cArcadia, \u624d\u80fd\u4f7f\u7528Rating\u529f\u80fd\u3002"),(0,r.kt)("h2",{id:"1\u5b89\u88c5kubebb-core"},"1.\u5b89\u88c5kubebb core"),(0,r.kt)("p",null,"\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"../../quick-start/core_quickstart"},"\u5b89\u88c5\u5185\u6838"),"\u5b8c\u6210\u5185\u6838(\u672a\u542f\u7528Rating)\u5b89\u88c5\u3002"),(0,r.kt)("h2",{id:"2-\u521b\u5efa\u547d\u540d\u7a7a\u95f4-kubebb-addons"},"2. \u521b\u5efa\u547d\u540d\u7a7a\u95f4 ",(0,r.kt)("inlineCode",{parentName:"h2"},"kubebb-addons")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u540e\u7eed\u5b89\u88c5\u7684\u7ec4\u4ef6\u90fd\u4f1a\u6dfb\u52a0\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"kubebb-addons"),"\u547d\u540d\u7a7a\u95f4\u4e2d\uff0c\u4f5c\u4e3akubebb\u7684\u6269\u5c55")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create namespace kubebb-addons\n")),(0,r.kt)("h2",{id:"3-\u5b89\u88c5tekton\u6d41\u6c34\u7ebf"},"3. \u5b89\u88c5Tekton\u6d41\u6c34\u7ebf"),(0,r.kt)("p",null,"\u5b98\u65b9\u7ec4\u4ef6\u4ed3\u5e93\u63d0\u4f9b\u4e86",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubebb/components/tree/main/charts/tekton-operator"},"Tekton\u7ec4\u4ef6\u5b89\u88c5\u5305"),"\u548c",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubebb/components/tree/main/examples/tekton-operator"},"Tekton\u5b89\u88c5\u793a\u4f8b"),"\u3002\u53ef\u4ee5\u4f7f\u7528\u5185\u6838\u5feb\u901f\u5b8c\u6210tekton\u7684\u5b89\u88c5\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u524d\u9700\u8981\u786e\u4fdd\u7ec4\u4ef6kubebb.tekton-operator\u5df2\u7ecf\u540c\u6b65\u5b8c\u6210")),(0,r.kt)("p",null,"\u547d\u4ee4\u5982\u4e0b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u9ed8\u8ba4\u5b89\u88c5\u5230default\u547d\u540d\u7a7a\u95f4\nkubectl apply -f https://raw.githubusercontent.com/kubebb/components/main/examples/tekton-operator/componentplan.yaml\n")),(0,r.kt)("p",null,"\u67e5\u770b\u5b89\u88c5\u72b6\u6001:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get pods --watch\n")),(0,r.kt)("p",null,"\u5982\u679c\u5b89\u88c5\u5b8c\u6210,\u8f93\u51fa\u5982\u4e0b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\u276f kubectl get pods\nNAME                                                 READY   STATUS    RESTARTS   AGE\nmy-tekton-tekton-operator-68bdffc888-8dtfx           2/2     Running   0          25m\nmy-tekton-tekton-operator-webhook-78bdfcbc77-6k6cx   1/1     Running   0          25m\n")),(0,r.kt)("p",null,"\u5982\u679c\u957f\u65f6\u95f4\u5b89\u88c5\u672a\u5b8c\u6210,\u53ef\u67e5\u770b\u5bf9\u5e94\u7684Componentplan\u8d44\u6e90\u7684\u72b6\u6001\u3002"),(0,r.kt)("h2",{id:"4-\u5b89\u88c5arcadia-ai\u7ec4\u4ef6"},"4. \u5b89\u88c5Arcadia AI\u7ec4\u4ef6"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Arcadia\u7ec4\u4ef6\u4f4d\u4e8e\u53e6\u5916\u7684\u4e00\u4e2a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubeagi/arcadia/tree/main/charts"},"\u7ec4\u4ef6\u4ed3\u5e93"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6dfb\u52a0",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kubebb/components/blob/main/repos/repository_arcadia.yaml"},"arcadia\u7ec4\u4ef6\u4ed3\u5e93"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/kubebb/components/main/repos/repository_arcadia.yaml\n")),(0,r.kt)("p",null,"\u6210\u529f\u540e\uff0c\u53ef\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u67e5\u770b\u4ed3\u5e93\u4e2d\u7684\u7ec4\u4ef6:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get components -nkubebb-system -l kubebb.component.repository=arcadia\n")),(0,r.kt)("p",null,"\u5982\u679c\u4e00\u5207\u6b63\u5e38\uff0c\u8f93\u5165\u5982\u4e0b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\u276f kubectl get components -nkubebb-system -l kubebb.component.repository=arcadia\nNAME                 AGE\narcadia.arcadia      32s\narcadia.jupyterlab   32s\narcadia.llms         32s\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u5b89\u88c5Arcadia AI\u7ec4\u4ef6")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6b64\u5904\u5efa\u8bae\u91c7\u7528\u7ec4\u4ef6\u8ba2\u9605\u81ea\u52a8\u5b89\u88c5\u7684\u6a21\u5f0f\uff0c\u9ed8\u8ba4\u5b89\u88c5\u5230default\u547d\u540d\u7a7a\u95f4")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/kubebb/components/main/examples/arcadia/subscription.yaml\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u67e5\u770b\u5b89\u88c5\u72b6\u6001")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\u276f kubectl get pods --watch\nNAME                                                 READY   STATUS    RESTARTS   AGE\nmy-tekton-tekton-operator-68bdffc888-8dtfx           2/2     Running   0          48m\nmy-tekton-tekton-operator-webhook-78bdfcbc77-6k6cx   1/1     Running   0          48m\narcadia-5cb86f8787-jvd7j                             0/1     Pending   0          0s\narcadia-5cb86f8787-jvd7j                             0/1     Pending   0          0s\narcadia-5cb86f8787-jvd7j                             0/1     ContainerCreating   0          0s\narcadia-5cb86f8787-jvd7j                             0/1     Running             0          20s\narcadia-5cb86f8787-jvd7j                             1/1     Running             0          30s\n")),(0,r.kt)("h3",{id:"4-\u66f4\u65b0\u5185\u6838"},"4. \u66f4\u65b0\u5185\u6838"),(0,r.kt)("p",null,"\u901a\u8fc7\u8bbe\u7f6e\u53c2\u6570",(0,r.kt)("inlineCode",{parentName:"p"},"deployment.rating_enable=true"),"\u6765\u542f\u7528Rating"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helm upgrade  -nkubebb-system kubebb-core kubebb/kubebb-core  --set deployment.rating_enable=true\n")),(0,r.kt)("p",null,"\u67e5\u770b\u5185\u6838Pod\u72b6\u6001:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\u276f kubectl get pods -nkubebb-system --watch\nNAME                           READY   STATUS    RESTARTS   AGE\nkubebb-core-65ddc99994-25k49   0/1     Running   0          7s\nkubebb-core-6d78d7d8fd-vxbc6   1/1     Running   0          119s\nkubebb-core-65ddc99994-25k49   1/1     Running   0          10s\nkubebb-core-6d78d7d8fd-vxbc6   1/1     Terminating   0          2m2s\nkubebb-core-6d78d7d8fd-vxbc6   0/1     Terminating   0          2m3s\nkubebb-core-6d78d7d8fd-vxbc6   0/1     Terminating   0          2m3s\nkubebb-core-6d78d7d8fd-vxbc6   0/1     Terminating   0          2m3s\n")),(0,r.kt)("p",null,"\u5982\u679c\u5347\u7ea7\u6210\u529f,\u5219\u53ef\u5728\u5185\u6838Pod\u5185\u770b\u5230\u5982\u4e0b\u65e5\u5fd7:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'1.6935407235060694e+09 INFO Starting EventSource {"controller": "rating", "controllerGroup": "core.kubebb.k8s.com.cn", "controllerKind": "Rating", "source": "kind source: *v1alpha1.Rating"}\n1.6935407235063274e+09 INFO Starting EventSource {"controller": "rating", "controllerGroup": "core.kubebb.k8s.com.cn", "controllerKind": "Rating", "source": "kind source: *v1beta1.PipelineRun"}\n')))}s.isMDXComponent=!0}}]);