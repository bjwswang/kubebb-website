"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7658],{3905:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>N});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},k=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,k=l(e,["components","mdxType","originalType","parentName"]),c=m(a),d=i,N=c["".concat(o,".").concat(d)]||c[d]||s[d]||r;return a?n.createElement(N,p(p({ref:t},k),{},{components:a})):n.createElement(N,p({ref:t},k))}));function N(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,p=new Array(r);p[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:i,p[1]=l;for(var m=2;m<r;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2486:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>s,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var n=a(7462),i=(a(7294),a(3905));const r={sidebar_position:1},p="\u7ec4\u4ef6\u4ed3\u5e93",l={unversionedId:"develop-guid/core/concepts/repository",id:"develop-guid/core/concepts/repository",title:"\u7ec4\u4ef6\u4ed3\u5e93",description:"\u4ed3\u5e93\u662f\u5c06 chart repository \u6620\u5c04\u4e3a\u96c6\u7fa4\u8d44\u6e90\u7684\u4e00\u4e2a\u6982\u5ff5\u3002\u4ed3\u5e93\u5b9a\u4e49\u4e86 chart repository \u7684 URL\uff0c\u8ba4\u8bc1\u4fe1\u606f\u7b49\u76f8\u5173\u4fe1\u606f\u3002\u4ed3\u5e93\u662f\u7ec4\u4ef6\u90e8\u7f72\uff0c\u5347\u7ea7\u7684\u57fa\u7840\u3002",source:"@site/docs/develop-guid/core/concepts/repository.md",sourceDirName:"develop-guid/core/concepts",slug:"/develop-guid/core/concepts/repository",permalink:"/website/en/docs/develop-guid/core/concepts/repository",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u6982\u5ff5",permalink:"/website/en/docs/category/\u6982\u5ff5"},next:{title:"\u7ec4\u4ef6",permalink:"/website/en/docs/develop-guid/core/concepts/component"}},o={},m=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"OCI \u4ed3\u5e93\u7684\u989d\u5916\u8bf4\u660e",id:"oci-\u4ed3\u5e93\u7684\u989d\u5916\u8bf4\u660e",level:3},{value:"\u652f\u6301\u5730\u5740",id:"\u652f\u6301\u5730\u5740",level:4},{value:"\u9650\u5236",id:"\u9650\u5236",level:4},{value:"\u5de5\u4f5c\u539f\u7406",id:"\u5de5\u4f5c\u539f\u7406",level:2}],k={toc:m},c="wrapper";function s(e){let{components:t,...r}=e;return(0,i.kt)(c,(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u7ec4\u4ef6\u4ed3\u5e93"},"\u7ec4\u4ef6\u4ed3\u5e93"),(0,i.kt)("p",null,"\u4ed3\u5e93\u662f\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"chart repository")," \u6620\u5c04\u4e3a\u96c6\u7fa4\u8d44\u6e90\u7684\u4e00\u4e2a\u6982\u5ff5\u3002\u4ed3\u5e93\u5b9a\u4e49\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"chart repository")," \u7684 URL\uff0c\u8ba4\u8bc1\u4fe1\u606f\u7b49\u76f8\u5173\u4fe1\u606f\u3002\u4ed3\u5e93\u662f\u7ec4\u4ef6\u90e8\u7f72\uff0c\u5347\u7ea7\u7684\u57fa\u7840\u3002"),(0,i.kt)("p",null,"\u7ec4\u4ef6\u4ed3\u5e93\u7684\u5de5\u4f5c\u6d41\u7a0b\u5982\u4e0b:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/kubebb/core/main/assets/repository_flow.drawio.png",alt:"repository_flow"})),(0,i.kt)("h2",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,i.kt)("p",null,"CRD \u7684\u4ee3\u7801\u5b9a\u4e49\u4f4d\u4e8e ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubebb/core/blob/main/api/v1alpha1/repository_types.go"},"RepositoryTypes"),"\u3002\u63a5\u4e0b\u6765\u4f1a\u8be6\u7ec6\u4ecb\u7ecd\u6bcf\u4e2a\u5b57\u6bb5\u7684\u542b\u4e49\u53ca\u5176\u4f5c\u7528\u3002"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u8bf4\u660e  \u5bf9\u4e8e\u4e0b\u9762\u7684 yaml\uff0c\u6211\u4eec\u60f3\u8981\u8bbf\u95ee bar \u5b57\u6bb5\uff0c\u4e66\u5199\u683c\u5f0f\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.foo.bar")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  foo:\n    bar: xx\n"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"spec.url")),(0,i.kt)("p",{parentName:"li"},"\u8be5\u5b57\u6bb5\u7528\u6765\u4fdd\u5b58 ",(0,i.kt)("inlineCode",{parentName:"p"},"chart repository")," \u7684\u5730\u5740")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"spec.authSecret")),(0,i.kt)("p",{parentName:"li"},"\u5bf9\u4e8e\u9700\u8981\u8ba4\u8bc1\uff0c\u6216\u8005\u6709\u81ea\u5b9a\u4e49\u8bc1\u4e66\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"chart repository"),"\uff0c\u9700\u8981\u5c06\u8ba4\u8bc1\u4fe1\u606f\uff0c\u8bc1\u4e66\u4fe1\u606f\u5b58\u653e\u5230\u4ee5\u8be5\u5b57\u6bb5\u4e3a\u540d\u5b57\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"secret")," \u4e2d\u3002secret \u4e2d\u7684\u4e3b\u8981\u5b57\u6bb5\u4fe1\u606f\u5982\u4e0b"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"username")," \u5b9a\u4e49\u8ba4\u8bc1\u9700\u8981\u7684\u7528\u6237\u540d"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"password")," \u5b9a\u4e49\u8ba4\u8bc1\u9700\u8981\u7684\u5bc6\u7801"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cadata")," \u5b9a\u4e49\u7b7e\u53d1\u8bc1\u4e66\u7684 RootCA"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"certdata")," \u5b9a\u4e49\u5ba2\u6237\u7aef\u901a\u8fc7 RootCA \u7b7e\u53d1\u7684\u8bc1\u4e66"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"keydata")," \u5b9a\u4e49\u5ba2\u6237\u7aef\u79c1\u94a5")),(0,i.kt)("p",{parentName:"li"},"\u5982\u679c\u670d\u52a1\u7aef\u8981\u6c42 TLS \u53cc\u5411\u8ba4\u8bc1\uff0c\u90a3\u4e48\u9700\u8981\u63d0\u4f9b ",(0,i.kt)("inlineCode",{parentName:"p"},"certdata")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"keydata"),"\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"spec.insecure")),(0,i.kt)("p",{parentName:"li"},"\u662f\u5426\u8df3\u8fc7 https \u9a8c\u8bc1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"spec.repositoryType")),(0,i.kt)("p",{parentName:"li"},"\u4ed3\u5e93\u7c7b\u578b\uff0c\u662f\u5b57\u7b26\u4e32\uff0c\u7406\u89e3\u4e3a\u6807\u8bb0\u5373\u53ef\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"spec.PullStrategy.intervalSeconds")),(0,i.kt)("p",{parentName:"li"},"\u5b9a\u4e49\u83b7\u53d6\u6570\u636e\u7684\u5468\u671f\uff0c\u53ef\u4ee5\u4e0d\u586b\u5199\uff0c\u9ed8\u8ba4\u662f 120 \u79d2\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"spec.PullStrategy.timeoutSeconds")),(0,i.kt)("p",{parentName:"li"},"\u5b9a\u4e49\u4e00\u6b21 http \u8bf7\u6c42\u7684\u8d85\u65f6\u65f6\u95f4\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"spec.PullStrategy.retry")),(0,i.kt)("p",{parentName:"li"},"\u5b9a\u4e49\u8bf7\u6c42\u5931\u8d25\u7684\u91cd\u8bd5\u6b21\u6570\u3002\u9ed8\u8ba4\u4e0d\u586b\u5199\uff0c\u53ea\u4f1a\u505a\u4e00\u6b21\u8bf7\u6c42")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"spec.filter")),(0,i.kt)("p",{parentName:"li"},"\u8be5\u5b57\u6bb5\u662f\u6570\u7ec4\uff0c\u5b9a\u4e49\u4e86\u4e00\u7cfb\u5217\u7684\u5bf9 ",(0,i.kt)("inlineCode",{parentName:"p"},"chart package")," \u548c \u7248\u672c\u7684\u8fc7\u6ee4\u6761\u4ef6\u3002\u56e0\u4e3a\u662f\u6570\u7ec4\uff0c\u6240\u4ee5\u53ef\u4ee5\u51fa\u73b0\u5bf9\u540c\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"chart package")," \u7684\u591a\u4e2a\u8fc7\u6ee4\u6761\u4ef6\uff0c\u53ea\u4f1a\u4f7f\u7528\u6700\u540e\u4e00\u6761\u3002"),(0,i.kt)("p",{parentName:"li"},"\u6570\u7ec4\u7684\u6bcf\u4e00\u9879\u7684\u4ecb\u7ecd"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"spec.filter[index].name")," \u5b9a\u4e49\u4e86\u8981\u53c2\u4e0e\u8fc7\u6ee4\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"chart package")," \u7684\u540d\u79f0\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"spec.filter[index].operation")," \u6709\u4e24\u4e2a\u53ef\u9009\u503c ",(0,i.kt)("inlineCode",{parentName:"li"},"keep"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"ignore"),"\u3002",(0,i.kt)("inlineCode",{parentName:"li"},"ignore")," \u5b9a\u4e49 ",(0,i.kt)("inlineCode",{parentName:"li"},"chart package")," \u8981\u5ffd\u7565\u7684\u7248\u672c, ",(0,i.kt)("inlineCode",{parentName:"li"},"keep")," \u5b9a\u4e49 ",(0,i.kt)("inlineCode",{parentName:"li"},"chart package")," \u8981\u4fdd\u7559\u7684\u7248\u672c\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"spec.filter[index].keepDeprecated")," ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," \u8868\u793a\u4e0d\u4fdd\u7559 ",(0,i.kt)("inlineCode",{parentName:"li"},"chart package")," \u5df2\u7ecf\u5e9f\u5f03\u7684\u7248\u672c\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"true")," \u8868\u793a\u4fdd\u7559\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"spec.filter[index].versionedFilterCond.versions")," \u662f\u4e00\u4e2a\u7248\u672c\u7684\u6570\u7ec4\uff0c\u53ea\u8981 ",(0,i.kt)("inlineCode",{parentName:"li"},"chart package")," \u7684\u7248\u672c\u4e0e\u8be5\u6570\u7ec4\u4e2d\u4efb\u610f\u4e00\u4e2a\u7cbe\u786e\u5339\u914d\u4e0a\uff0c\u5373\u7b26\u5408\u89c4\u5219\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"spec.fitler[index].versionedFilterCond.versionRegexp")," \u7248\u672c\u8fc7\u6ee4\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"spec.filter[index].versionedFilterCond.versionConstraint")," \u7248\u672c\u9a8c\u8bc1\u6761\u4ef6\uff0c\u8868\u8fbe\u5f0f\u683c\u5f0f\u8bf7\u53c2\u8003 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Masterminds/semver#semver"},"semver"))),(0,i.kt)("p",{parentName:"li"},"\u5f53 ",(0,i.kt)("inlineCode",{parentName:"p"},"operation=keep")," \u7684\u65f6\u5019\uff0c  ",(0,i.kt)("inlineCode",{parentName:"p"},"versions, versionRegexp, VersionConstraint")," \u6ee1\u8db3\u4efb\u4e00\u6761\u4ef6\u5c31\u4f1a\u4fdd\u7559\u7248\u672c\u3002\n\u5f53 ",(0,i.kt)("inlineCode",{parentName:"p"},"operation=ignore")," \u7684\u65f6\u5019\uff0c  ",(0,i.kt)("inlineCode",{parentName:"p"},"versions, versionRegexp, VersionConstraint")," \u6ee1\u8db3\u4efb\u4e00\u6761\u4ef6\u5c31\u4f1a\u5ffd\u7565\u7248\u672c\u3002"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"keepDeprecated")," \u5728\u5bf9\u6700\u7ec8\u7559\u4e0b\u6765\u7684\u7248\u672c\u8fdb\u884c\u8fc7\u6ee4\uff0c\u662f\u5426\u4fdd\u7559\u5e9f\u5f03\u7248\u672c\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"spec.imageOverride"),"  \u975e\u5fc5\u9700\n\u8be5\u5b57\u6bb5\u662f\u6570\u7ec4\uff0c\u5b9a\u4e49\u4e86\u4e00\u7cfb\u5217\u4ed3\u5e93\u7ea7\u522b\u7684\u955c\u50cf\u8986\u76d6\u7b56\u7565\u3002"),(0,i.kt)("p",{parentName:"li"},"\u6bcf\u4e00\u9879\u5185\u5bb9\u5305\u62ec\uff1a"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"spec.imageOverride[].registry")," \u8be5\u955c\u50cf\u4ed3\u5e93\u57df\u540d\u5730\u5740\uff0c\u53ef\u4ee5\u5305\u542b\u7aef\u53e3\uff0c\u4f8b\u5982\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"docker.io"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"192.168.1.1:5000")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"spec.imageOverride[].newRegistry")," \u8981\u5c06 ",(0,i.kt)("inlineCode",{parentName:"li"},"registry")," \u66ff\u6362\u540e\u7684\u955c\u50cf\u4ed3\u5e93\u57df\u540d\u5730\u5740\uff0c\u53ef\u4ee5\u5305\u542b\u7aef\u53e3\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"spec.imageOverride[].pathOverride")," \u975e\u5fc5\u9700\uff0c\u6570\u7ec4\u3002",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"spec.imageOverride[].pathOverride.path")," \u65e7\u7684\u955c\u50cf\u4ed3\u5e93\u8def\u5f84\uff0c\u6bd4\u5982\u955c\u50cf\u5730\u5740 ",(0,i.kt)("inlineCode",{parentName:"li"},"docker.io/library/nginx:latest")," \u4e2d\u7684 path \u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"library")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"spec.imageOverride[].pathOverride.newPath")," \u8981\u5c06 ",(0,i.kt)("inlineCode",{parentName:"li"},"path")," \u66ff\u6362\u540e\u7684\u955c\u50cf\u4ed3\u5e93\u65b0\u8def\u5f84\uff0c\u53ef\u4ee5\u4e3a\u7a7a\u3002"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"spec.keywordLenLimit")," \u975e\u5fc5\u8981\n\u6bcf\u4e2a chart \u5305\u90fd\u53ef\u4ee5\u5b9a\u4e49\u4e00\u4e2a\u5173\u952e\u8bcd\u5217\u8868\uff0c\u4f9b helm \u641c\u7d22\u4f7f\u7528\u3002\u8be5\u5b57\u6bb5\u662f\u7528\u6765\u9650\u5236\u8fd9\u4e2a\u5173\u952e\u8bcd\u5217\u8868\u7684\u957f\u5ea6\uff0c\u907f\u514d\u5173\u952e\u8bcd\u8fc7\u591a\u5bfc\u81f4\u5728\u4ea7\u54c1\u754c\u9762\u4e0d\u597d\u5c55\u793a\u3002\u5982\u679c\u4e0d\u914d\u7f6e\uff0c\u4e0d\u4f1a\u505a\u4efb\u4f55\u9650\u5236\u3002"))),(0,i.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,i.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u4ed3\u5e93\u793a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.kubebb.k8s.com.cn/v1alpha1\nkind: Repository\nmetadata:\n  name: repository-bitnami-special-version\n  namespace: kubebb-system\nspec:\n  url: https://charts.bitnami.com/bitnami\n  pullStategy:\n    intervalSeconds: 120\n    retry: 5\n  filter:\n  - name: wordpress\n    operation: keep\n    versionedFilterCond:\n      versions:\n      - 16.1.14\n      - 16.1.13\n  imageOverride:\n  - registry: docker.io\n    newRegistry: 192.168.1.1\n    pathOverride:\n      path: library\n      newPath: system-container\n")),(0,i.kt)("p",null,"\u4e0a\u8ff0\u4ed3\u5e93\u5b9a\u4e49\u4e86\u6570\u636e\u6765\u6e90\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"https://charts.bitnami.com/bitnami")," \uff0c\u6570\u636e\u83b7\u53d6\u7b56\u7565\u662f\uff0c\u6bcf\u9694 120s \u83b7\u53d6\u4e00\u6b21\uff0c\u5982\u679c\u53d1\u751f\u9519\u8bef\u6700\u591a\u5c1d\u8bd5 5 \u6b21\u3002\n\u5bf9 ",(0,i.kt)("inlineCode",{parentName:"p"},"wordpress")," \u7684\u7248\u672c\u5b9a\u4e49\u4e86\u591a\u8651\u6761\u4ef6\uff0c\u7cbe\u786e\u5339\u914d ",(0,i.kt)("inlineCode",{parentName:"p"},"16.1.14"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"16.1.13")," \u4e24\u4e2a\u7248\u672c\u3002\n\u5bf9\u4ed3\u5e93\u4e2d\u6240\u6709\u6765\u81ea ",(0,i.kt)("inlineCode",{parentName:"p"},"docker.io")," \u7684\u955c\u50cf\uff0c\u66ff\u6362\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"192.168.1.1")," \uff0c\u5e76\u5c06\u955c\u50cf\u8def\u5f84\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"library")," \u7684\u955c\u50cf\u66ff\u6362\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"system-container")," \uff0c\u6bd4\u5982\u4ed3\u5e93\u4e2d\u6709\u955c\u50cf ",(0,i.kt)("inlineCode",{parentName:"p"},"docker.io/library/nginx:v1.2.3")," \u4f1a\u66ff\u6362\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"192.168.1.1/system-container/nginx:v1.2.3")," \u3002"),(0,i.kt)("h3",{id:"oci-\u4ed3\u5e93\u7684\u989d\u5916\u8bf4\u660e"},"OCI \u4ed3\u5e93\u7684\u989d\u5916\u8bf4\u660e"),(0,i.kt)("h4",{id:"\u652f\u6301\u5730\u5740"},"\u652f\u6301\u5730\u5740"),(0,i.kt)("p",null,"\u4ed3\u5e93\u652f\u6301\u4f7f\u7528 OCI \u955c\u50cf\u4ed3\u5e93\u7684\u5730\u5740\uff0c\u76ee\u524d\u652f\u6301\u5982\u4e0b\u51e0\u79cd\u65b9\u5f0f\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u539f\u751f ",(0,i.kt)("a",{parentName:"li",href:"https://goharbor.io/"},"harbor")," 2.x \u4ee5\u4e0a\u7248\u672c:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u9879\u76ee\u7eac\u5ea6\uff0c\u5c06\u4f1a\u5c1d\u8bd5\u83b7\u53d6\u8fd9\u4e2a\u9879\u76ee\u4e0b\u6240\u6709\u955c\u50cf\u7684\u6240\u6709 tag\uff0c\u4f8b\u5982\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"oci://demo.goharbor.io/helm-test")," (",(0,i.kt)("inlineCode",{parentName:"li"},"demo.goharbor.io")," \u662f harbor \u7684\u5728\u7ebf\u6d4b\u8bd5\u670d\u52a1\u5668\uff0c\u8be5\u670d\u52a1\u5668\u6570\u636e\u6bcf 2 \u5929\u6e05\u7a7a\u4e00\u6b21\uff0c\u8be6\u60c5\u89c1 ",(0,i.kt)("a",{parentName:"li",href:"https://goharbor.io/docs/1.10/install-config/demo-server/"},"docker \u6587\u6863\u7684\u76f8\u5173\u8bf4\u660e"),")"),(0,i.kt)("li",{parentName:"ul"},"\u955c\u50cf\u7ef4\u5ea6\uff0c\u5c06\u4f1a\u5c1d\u8bd5\u83b7\u53d6\u8fd9\u4e2a\u955c\u50cf\u7684\u6240\u6709 tag\uff0c\u4f8b\u5982\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"oci://demo.goharbor.io/helm-test/nginx")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://hub.docker.com/"},"dockerhub"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u9879\u76ee\u7eac\u5ea6\uff0c\u5c06\u4f1a\u5c1d\u8bd5\u83b7\u53d6\u8fd9\u4e2a\u9879\u76ee\u4e0b\u6240\u6709\u955c\u50cf\u7684\u6240\u6709 tag\uff0c\u4f8b\u5982\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"oci://registry-1.docker.io/bitnamicharts")),(0,i.kt)("li",{parentName:"ul"},"\u955c\u50cf\u7ef4\u5ea6\uff0c\u5c06\u4f1a\u5c1d\u8bd5\u83b7\u53d6\u8fd9\u4e2a\u955c\u50cf\u7684\u6240\u6709 tag\uff0c\u4f8b\u5982\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"oci://registry-1.docker.io/bitnamicharts/wordpress")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/features/packages"},"github package"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/features/packages"},"github package")," \u7ec4\u7ec7\u7ef4\u5ea6:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u6574\u4e2a\u7ec4\u7ec7\u7684\u5730\u5740\uff0c\u5c06\u4f1a\u5c1d\u8bd5\u83b7\u53d6\u8be5\u7ec4\u7ec7\u4e0b\u6240\u6709\u955c\u50cf\u7684\u6240\u6709 tag\uff0c\u4f8b\u5982\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"oci://ghcr.io/oci-helm-example")),(0,i.kt)("li",{parentName:"ul"},"\u7ec4\u7ec7\u4e2d\u5355\u72ec\u4e0a\u4f20\u7684\u955c\u50cf\u5730\u5740\uff0c\u5c06\u4f1a\u5c1d\u8bd5\u83b7\u53d6\u8be5\u7ec4\u7ec7\u4e0b\u6240\u6709\u955c\u50cf\u7684\u6240\u6709 tag\uff0c\u4f8b\u5982\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"oci://ghcr.io/oci-helm-example/redis")),(0,i.kt)("li",{parentName:"ul"},"\u7ec4\u7ec7\u4e2d\u7684\u4ed3\u5e93\u5730\u5740\uff0c\u5c06\u4f1a\u5c1d\u8bd5\u83b7\u53d6\u8be5\u4ed3\u5e93\u4e0b\u6240\u6709\u955c\u50cf\u7684\u6240\u6709 tag\uff0c\u4f8b\u5982\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"oci://ghcr.io/oci-helm-example/helm-oci-example")),(0,i.kt)("li",{parentName:"ul"},"\u7ec4\u7ec7\u4e2d\u67d0\u4e2a\u4ed3\u5e93\u7684\u955c\u50cf\u5730\u5740\uff0c\u5c06\u4f1a\u5c1d\u8bd5\u83b7\u53d6\u8be5\u955c\u50cf\u7684\u6240\u6709 tag\uff0c\u4f8b\u5982\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"oci://ghcr.io/oci-helm-example/helm-oci-example/nginx")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/features/packages"},"github package")," \u4e2a\u4eba\u7ef4\u5ea6:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u8be5\u7528\u6237\u7684\u5730\u5740\uff0c\u5c06\u4f1a\u5c1d\u8bd5\u83b7\u53d6\u8be5\u7528\u6237\u540d\u4e0b\u6240\u6709\u955c\u50cf\u7684\u6240\u6709 tag\uff0c\u4f8b\u5982\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"oci://ghcr.io/abirdcfly")),(0,i.kt)("li",{parentName:"ul"},"\u7528\u6237\u5355\u72ec\u4e0a\u4f20\u7684\u955c\u50cf\u5730\u5740\uff0c\u5c06\u4f1a\u5c1d\u8bd5\u83b7\u53d6\u8be5\u7528\u6237\u540d\u4e0b\u6240\u6709\u955c\u50cf\u7684\u6240\u6709 tag\uff0c\u4f8b\u5982\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"oci://ghcr.io/abirdcfly/redis")),(0,i.kt)("li",{parentName:"ul"},"\u7528\u6237\u7684\u4ed3\u5e93\u5730\u5740\uff0c\u5c06\u4f1a\u5c1d\u8bd5\u83b7\u53d6\u8be5\u4ed3\u5e93\u4e0b\u6240\u6709\u955c\u50cf\u7684\u6240\u6709 tag\uff0c\u4f8b\u5982\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"oci://ghcr.io/abirdcfly/helm-oci-example")),(0,i.kt)("li",{parentName:"ul"},"\u7528\u6237\u67d0\u4e2a\u4ed3\u5e93\u7684\u955c\u50cf\u5730\u5740\uff0c\u5c06\u4f1a\u5c1d\u8bd5\u83b7\u53d6\u8be5\u955c\u50cf\u7684\u6240\u6709 tag\uff0c\u4f8b\u5982\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"oci://ghcr.io/abirdcfly/helm-oci-example/nginx"))))))),(0,i.kt)("h4",{id:"\u9650\u5236"},"\u9650\u5236"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u9650\u4e8e ",(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/zh/rest/packages/packages?apiVersion=2022-11-28#%E5%85%B3%E4%BA%8E-github-packages"},"github package API \u7684\u9650\u5236"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u82e5\u8981\u4f7f\u7528 REST API \u7ba1\u7406 GitHub Packages\uff0c\u5fc5\u987b\u4f7f\u7528 personal access token (classic) \u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u3002\n\u8981\u8bbf\u95ee\u5305\u5143\u6570\u636e\uff0c\u4ee4\u724c\u5fc5\u987b\u5305\u542b read:packages \u8303\u56f4\u3002")),(0,i.kt)("p",null,"\u5728\u4f7f\u7528 github package \u4f5c\u4e3a OCI \u7684\u5b58\u50a8\u5730\u5740\u65f6\uff0c\u9700\u8981\u63d0\u4f9b\u4e00\u4e2a personal access token (classic) \uff0c\u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u73af\u5883\u53d8\u91cf ",(0,i.kt)("inlineCode",{parentName:"p"},"GITHUB_PAT_TOKEN")," \u6765\u8986\u76d6\u7cfb\u7edf\u9ed8\u8ba4\u63d0\u4f9b\u7684 token\u3002"),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u9650\u4e8e \u539f\u751f ",(0,i.kt)("a",{parentName:"p",href:"https://goharbor.io/"},"harbor")," \u548c ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/features/packages"},"github package")," \u5e76\u6ca1\u6709\u5728 API \u8fd4\u56de\u8be6\u60c5\u4e2d\u5199\u660e\u955c\u50cf\u7684\u7c7b\u578b\uff0c\u6240\u4ee5\u4ece API \u8fd4\u56de\u7ed3\u679c\u4e2d\u65e0\u6cd5\u533a\u5206\u8be5 OCI \u955c\u50cf\u662f\u5426\u5b58\u50a8\u7684\u662f Helm \u5305\u8fd8\u662f\u666e\u901a docker \u955c\u50cf\u3002\u56e0\u6b64\u5c06\u4f1a\u4e00\u5e76\u5c1d\u8bd5\uff0c\u53ef\u80fd\u4f1a\u5728\u65e5\u5fd7\u6216\u8d44\u6e90\u72b6\u6001\u4e2d\u770b\u5230\u9519\u8bef\u3002\u6211\u4eec\u5efa\u8bae\u7528\u6237\u5355\u72ec\u5c06\u67d0\u4e2a OCI \u4ed3\u5e93\u7528\u4f5c Helm \u5305\u5b58\u50a8\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u76ee\u524d\u8fd8\u4e0d\u652f\u6301\u79c1\u6709\u4ed3\u5e93\u3002\u5c06\u5728\u540e\u7eed\u7248\u672c\u652f\u6301\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u56e0\u4e3a\u5de5\u4f5c\u539f\u7406\u4e0d\u540c\uff0cchartmuseum \u7c7b\u578b\u7684\u4ed3\u5e93\u4f1a\u63d0\u4f9b\u7d22\u5f15\u6587\u4ef6\uff0c\u800c OCI \u4ed3\u5e93\u53ea\u80fd\u901a\u8fc7\u62c9\u53d6\u5177\u4f53\u538b\u7f29\u5305\u5e76\u89e3\u6790\u5185\u5bb9\uff0cOCI \u4ed3\u5e93\u7684\u83b7\u53d6\u8981\u6162\u4e8e chartmuseum \u4ed3\u5e93\uff0c\u5e76\u4e14\u5404\u4e2a\u5b58\u50a8\u5730\u5740\u90fd\u6709\u81ea\u5df1\u7684 API \u8bf7\u6c42\u901f\u7387\u9650\u5236\u3002\u9ed8\u8ba4\u5c06 OCI \u4ed3\u5e93\u7684\u89e3\u6790\u7684\u5e76\u53d1\u6570\u8bbe\u7f6e\u4e3a 5\uff0c\u53ef\u4ee5\u901a\u8fc7\u73af\u5883\u53d8\u91cf ",(0,i.kt)("inlineCode",{parentName:"p"},"OCI_PULL_WORKER")," \u8986\u76d6\u8be5\u8bbe\u7f6e\uff0c\u6570\u5b57\u8d8a\u5927\uff0c\u89e3\u6790\u5e76\u53d1\u6570\u8d8a\u591a\uff0c\u4e5f\u8d8a\u53ef\u80fd\u9047\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"429 Too Many Requests")," \u9519\u8bef\u3002"))),(0,i.kt)("h2",{id:"\u5de5\u4f5c\u539f\u7406"},"\u5de5\u4f5c\u539f\u7406"),(0,i.kt)("p",null,"\u4ed3\u5e93\u4ee5 Kubernetes Operator \u65b9\u5f0f\u5b9e\u73b0\u3002\u5468\u671f\u6027\u7684\u83b7\u53d6 ",(0,i.kt)("inlineCode",{parentName:"p"},"chart repository")," \u7684\u6570\u636e\uff0c\u5bf9\u96c6\u7fa4\u4e2d\u7ec4\u4ef6\u66f4\u65b0\u6216\u8005\u521b\u5efa\uff0c",(0,i.kt)("strong",{parentName:"p"},"\u4e00\u822c\u4e0d\u4f1a\u5220\u9664\u7ec4\u4ef6\uff0c\u800c\u662f\u5c06\u5728 ",(0,i.kt)("inlineCode",{parentName:"strong"},"chart repository")," \u4e2d\u4e0d\u5b58\u5728\u7684\u7ec4\u4ef6\u6807\u8bb0\u4e3a\u5e9f\u5f03"),"\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5f53 ",(0,i.kt)("inlineCode",{parentName:"li"},"Repository")," \u521b\u5efa\uff0c\u66f4\u65b0\u65f6")),(0,i.kt)("p",null,"\u521b\u5efa\u6216\u8005\u66f4\u65b0 ",(0,i.kt)("inlineCode",{parentName:"p"},"Repository")," \u65f6\uff0c\u4f1a\u68c0\u67e5\u8be5\u8d44\u6e90\u662f\u5426\u6dfb\u52a0 finalizers, \u4ee5\u53ca URL \u53d8\u66f4\u5386\u53f2\u662f\u5426\u6b63\u786e\u66f4\u65b0\u3002"),(0,i.kt)("p",null,"\u5f53\u6240\u6709\u7684\u66f4\u65b0\u90fd\u5904\u7406\u5b8c\u6210\u540e\uff0c\u5c06\u4f1a\u542f\u52a8 ",(0,i.kt)("inlineCode",{parentName:"p"},"chartmuseum watcher"),"\uff0c\u5728\u6bcf\u6b21\u83b7\u53d6\u5230\u82e5\u5e72\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"chart package")," \u540e\uff0c\u4e0e\u96c6\u7fa4\u4e2d\u5df2\u7ecf\u5b58\u5728\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Component")," \u5bf9\u6bd4\uff0c\u5c06\u4f1a\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"\u65b0\u589e component"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"\u66f4\u65b0 component"),"\u3002"),(0,i.kt)("p",null,"\u6211\u4eec\u4e0d\u4f1a\u5220\u9664\u5df2\u7ecf\u521b\u5efa\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Component"),", \u800c\u662f\u5728\u53d1\u73b0\u96c6\u7fa4\u4e2d\u5b58\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Component")," \u4e14\u5e76\u4e0d\u5b58\u5728\u4e8e\u5f53\u524d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"chart repository")," \u4e2d\uff0c\u90a3\u4e48\u4f1a\u5c06\u5176\u6807\u8bb0\u4e3a\u5e9f\u5f03\u3002"),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"\u5f53 ",(0,i.kt)("inlineCode",{parentName:"li"},"Repoistory")," \u5220\u9664\u65f6")),(0,i.kt)("p",null,"\u7531 ",(0,i.kt)("inlineCode",{parentName:"p"},"Repository")," \u521b\u5efa\u51fa\u6765\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Component")," \u90fd\u4f1a\u6dfb\u52a0 ",(0,i.kt)("inlineCode",{parentName:"p"},"OwnerReferences"),"\uff0c\u5220\u9664 ",(0,i.kt)("inlineCode",{parentName:"p"},"Repository")," \u7684\u65f6\u5019\u4f1a\u81ea\u52a8\u5220\u9664\u5173\u8054\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Component"),"\u3002"),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"\u955c\u50cf\u8986\u76d6\u7b56\u7565")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-changed",src:a(2803).Z,width:"1180",height:"834"})))}s.isMDXComponent=!0},2803:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-changed-6cc1cd7373beaa44065302ebf7479fc7.png"}}]);