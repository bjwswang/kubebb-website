"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1818],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=i.createContext({}),m=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=m(e.components);return i.createElement(o.Provider,{value:n},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=m(t),c=a,u=d["".concat(o,".").concat(c)]||d[c]||k[c]||r;return t?i.createElement(u,l(l({ref:n},s),{},{components:t})):i.createElement(u,l({ref:n},s))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=c;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[d]="string"==typeof e?e:a,l[1]=p;for(var m=2;m<r;m++)l[m]=t[m];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},159:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>k,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var i=t(7462),a=(t(7294),t(3905));const r={sidebar_position:3},l="\u7ec4\u4ef6\u5b89\u88c5\u8ba1\u5212",p={unversionedId:"core/userguide/componentplan",id:"core/userguide/componentplan",title:"\u7ec4\u4ef6\u5b89\u88c5\u8ba1\u5212",description:"\u7ec4\u4ef6\u5b89\u88c5\u8ba1\u5212\u7c7b\u4f3c\u4e8e Kubernetes \u539f\u751f\u8d44\u6e90 Job\uff0c\u6267\u884c\u4e00\u6b21\u6027\u4efb\u52a1\uff0c\u5b89\u88c5\u4e00\u4e2a\u7ec4\u4ef6\u5230\u96c6\u7fa4\uff0c\u7c7b\u4f3c\u6267\u884c\u4e00\u6b21 helm install\u3002",source:"@site/docs/core/userguide/componentplan.md",sourceDirName:"core/userguide",slug:"/core/userguide/componentplan",permalink:"/kubebb-website/en/docs/core/userguide/componentplan",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u7ec4\u4ef6",permalink:"/kubebb-website/en/docs/core/userguide/component"},next:{title:"\u8ba2\u9605",permalink:"/kubebb-website/en/docs/core/userguide/subscription"}},o={},m=[{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"CRD \u5b9a\u4e49\u8bf4\u660e",id:"crd-\u5b9a\u4e49\u8bf4\u660e",level:2},{value:"\u5de5\u4f5c\u539f\u7406",id:"\u5de5\u4f5c\u539f\u7406",level:2}],s={toc:m},d="wrapper";function k(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7ec4\u4ef6\u5b89\u88c5\u8ba1\u5212"},"\u7ec4\u4ef6\u5b89\u88c5\u8ba1\u5212"),(0,a.kt)("p",null,"\u7ec4\u4ef6\u5b89\u88c5\u8ba1\u5212\u7c7b\u4f3c\u4e8e Kubernetes \u539f\u751f\u8d44\u6e90 Job\uff0c\u6267\u884c\u4e00\u6b21\u6027\u4efb\u52a1\uff0c\u5b89\u88c5\u4e00\u4e2a\u7ec4\u4ef6\u5230\u96c6\u7fa4\uff0c\u7c7b\u4f3c\u6267\u884c\u4e00\u6b21 ",(0,a.kt)("inlineCode",{parentName:"p"},"helm install"),"\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u7ec4\u4ef6\u5b89\u88c5\u8ba1\u5212\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.kubebb.k8s.com.cn/v1alpha1\nkind: ComponentPlan\nmetadata:\n  name: nginx-15.0.2\n  namespace: kubebb-system\nspec:\n  approved: true\n  component:\n    name: repository-bitnami-sample.nginx\n    namespace: kubebb-system\n  name: my-nginx\n  override:\n    images:\n      - name: docker.io/bitnami/nginx\n        newTag: latest # default image is docker.io/bitnami/nginx:1.25.1-debian-11-r0, will be replace by docker.io/bitnami/nginx:latest\n  repository:\n    name: repository-bitnami-sample\n    namespace: kubebb-system\n  version: 15.0.2\n#status:\n#  conditions:\n#    - lastTransitionTime: "2023-06-21T03:44:31Z"\n#      reason: ""\n#      status: "True"\n#      type: Approved\n#    - lastTransitionTime: "2023-06-21T03:44:37Z"\n#      reason: ""\n#      status: "True"\n#      type: Installed\n#    - lastTransitionTime: "2023-06-21T03:44:37Z"\n#      reason: ""\n#      status: "True"\n#      type: Succeeded\n#  images:\n#    - docker.io/bitnami/nginx:latest\n#  resources:\n#    - NewCreated: true\n#      apiVersion: v1\n#      kind: Service\n#      name: my-nginx\n#    - NewCreated: true\n#      apiVersion: apps/v1\n#      kind: Deployment\n#      name: my-nginx\n')),(0,a.kt)("p",null,"\u4e0a\u8ff0\u7ec4\u4ef6\u5b89\u88c5\u8ba1\u5212\u5b9a\u4e49\u4e86\u5b89\u88c5\u7684\u7ec4\u4ef6\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"kubebb-system")," \u547d\u540d\u7a7a\u95f4\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"repository-bitnami-sample.nginx"),"\u3002\n\u5b89\u88c5\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"my-nginx"),"\uff0c\u5b89\u88c5\u7248\u672c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"15.0.2"),"\u3002\n\u540c\u65f6\u5728\u5b89\u88c5\u65f6\uff0c\u5c06\u955c\u50cf ",(0,a.kt)("inlineCode",{parentName:"p"},"docker.io/bitnami/nginx")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"tag")," \u66ff\u6362\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"latest"),"\u3002"),(0,a.kt)("p",null,"\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"status")," \u5b57\u6bb5\u53ef\u4ee5\u770b\u5230\uff0c\u5f53\u524d\u7ec4\u4ef6\u6d89\u53ca\u7684\u955c\u50cf\u4ee5\u53ca\u8d44\u6e90\u3002\u5176\u4e2d\u8d44\u6e90\u4f1a\u6807\u660e\u662f\u65b0\u521b\u5efa\u8fd8\u662f\u66f4\u65b0\u73b0\u6709\u8d44\u6e90\uff0c\u4e00\u4e2a\u66f4\u65b0\u73b0\u6709\u8d44\u6e90\u7684\u4f8b\u5b50\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"  - apiVersion: v1\n    kind: Service\n    name: my-wordpress\n    specDiffwithExist: no spec diff, but some field like resourceVersion will update\n  - apiVersion: apps/v1\n    kind: Deployment\n    name: my-wordpress\n    specDiffwithExist: |\n      metadata:\n        annotations: map[deployment.kubernetes.io/revision:2] -> <empty> (REMOVED)\n      spec:\n        replicas: 3 -> 1\n        template:\n          spec:\n            containers:\n              '[#0]':\n                image: docker.io/bitnami/wordpress:6.2.2-debian-11-r9 -> docker.io/bitnami/wordpress:6.2.2-debian-11-r11\n                resources:\n                  requests:\n                    cpu: 400m -> 300m\n                    memory: 1Gi -> 512Mi\n")),(0,a.kt)("h2",{id:"crd-\u5b9a\u4e49\u8bf4\u660e"},"CRD \u5b9a\u4e49\u8bf4\u660e"),(0,a.kt)("p",null,"CRD \u7684\u4ee3\u7801\u5b9a\u4e49\u4f4d\u4e8e ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubebb/core/blob/main/api/v1alpha1/componentplan_types.go"},"componentplan_types.go"),"\u3002\u63a5\u4e0b\u6765\u4f1a\u8be6\u7ec6\u4ecb\u7ecd\u6bcf\u4e2a\u5b57\u6bb5\u7684\u542b\u4e49\u53ca\u5176\u4f5c\u7528\u3002"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u8bf4\u660e  \u5bf9\u4e8e\u4e0b\u9762\u7684 yaml\uff0c\u6211\u4eec\u60f3\u8981\u8bbf\u95ee bar \u5b57\u6bb5\uff0c\u4e66\u5199\u683c\u5f0f\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.foo.bar")),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  foo:\n    bar: xx\n"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spec.componet"),"\n\u8be5\u5b57\u6bb5\u7528\u6765\u6307\u660e\u8981\u76d1\u63a7\u7684\u7ec4\u4ef6\u5b9e\u4f8b\uff0c\u4e00\u822c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"namespace")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"name")," \u6765\u552f\u4e00\u786e\u5b9a"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spec.repository"),"  ",(0,a.kt)("em",{parentName:"li"},"\u53ef\u9009\u5b57\u6bb5"),"\n\u8be5\u5b57\u6bb5\u7528\u6765\u6307\u660e\u8981\u76d1\u63a7\u7684\u7ec4\u4ef6\u6240\u5728\u7684\u4ed3\u5e93\u5b9e\u4f8b\uff0c\u4e00\u822c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"namespace")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"name")," \u6765\u552f\u4e00\u786e\u5b9a\uff0c\u4e00\u822c\u7531\u63a7\u5236\u5668\u81ea\u52a8\u586b\u5145\uff0c\u4e0d\u9700\u8981\u7528\u6237\u586b\u5199"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spec.version"),"\n\u9700\u8981\u5b89\u88c5\u7684\u7ec4\u4ef6\u7248\u672c\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spec.approved"),"\n\u662f\u5426\u540c\u610f\u5b89\u88c5\u3002",(0,a.kt)("inlineCode",{parentName:"li"},"bool")," \u7c7b\u578b\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"true")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"\uff0c\u5f53\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," \u65f6\uff0c\u81ea\u52a8\u89e6\u53d1\u5b89\u88c5\u6d41\u7a0b\u3002\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," \u65f6\uff0c\u53ea\u4f1a\u89e3\u6790\u8fd9\u4e2a\u7ec4\u4ef6\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"manifest")," \u5230 ",(0,a.kt)("inlineCode",{parentName:"li"},"ConfigMap")," \u4e2d\uff0c\u4e0d\u4f1a\u5b89\u88c5\u3002\u8fd9\u65f6\u5019\uff0c\u53ef\u4ee5\u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"li"},"ConfigMap")," \u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"manifest"),"\uff0c\u5b9e\u73b0\u8fdb\u4e00\u6b65\u63a7\u5236\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spec.name"),"\n\u7ec4\u4ef6\u5b89\u88c5\u5230\u96c6\u7fa4\u4e2d\u7684\u540d\u79f0\u3002\u7c7b\u4f3c ",(0,a.kt)("inlineCode",{parentName:"li"},"helm release")," \u7684\u540d\u79f0"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spec.override")," ",(0,a.kt)("em",{parentName:"li"},"\u53ef\u9009\u5b57\u6bb5"),"\n\u7528\u4e8e\u8986\u76d6\u539f\u7ec4\u4ef6\u914d\u7f6e\u7684\u5b57\u6bb5\u3002",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spec.override.values"),(0,a.kt)("inlineCode",{parentName:"li"},"JSON")," \u683c\u5f0f\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"values"),"\uff0c\u7528\u4e8e\u8986\u76d6\u9ed8\u8ba4\u503c"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spec.override.valuesFrom"),"\n\u5b57\u6bb5\u4e3a\u6570\u7ec4\u3002\u5f53\u8981\u8bbe\u5b9a\u7684\u5b57\u6bb5\u504f\u591a\u65f6\uff0c\u6211\u4eec\u4e00\u822c\u5e0c\u671b\u628a ",(0,a.kt)("inlineCode",{parentName:"li"},"values.yaml")," \u5355\u72ec\u62ff\u51fa\u6765\uff0c\u653e\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"ConfigMap")," \u6216\u8005 ",(0,a.kt)("inlineCode",{parentName:"li"},"Secret")," \u4e2d\uff0c\u800c\u4e14\u6211\u4eec\u53ef\u80fd\u4f1a\u6709\u5f88\u591a ",(0,a.kt)("inlineCode",{parentName:"li"},"values.yaml")," \u6587\u4ef6\u3002\u5177\u4f53\u683c\u5f0f\u4e3a\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spec.override.valuesFrom[].kind")," ",(0,a.kt)("inlineCode",{parentName:"li"},"Secret")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"li"},"ConfigMap")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spec.override.valuesFrom[].name")," ",(0,a.kt)("inlineCode",{parentName:"li"},"Secret")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"li"},"ConfigMap")," \u7684\u540d\u79f0\uff0c\u4e0d\u9700\u8981 ",(0,a.kt)("inlineCode",{parentName:"li"},"namespace")," \u5b57\u6bb5\uff0c\u56e0\u4e3a\u53ea\u4f1a\u67e5\u627e\u548c\u5f53\u524d ComponentPlan \u540c ",(0,a.kt)("inlineCode",{parentName:"li"},"namespace")," \u7684\u8d44\u6e90\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spec.override.valuesFrom[].valuesKey")," ",(0,a.kt)("inlineCode",{parentName:"li"},"Secret")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"li"},"ConfigMap")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"data")," \u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"key"),"\uff0c\u9ed8\u8ba4\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"values.yaml")," \u4f1a\u5c1d\u8bd5\u5148\u540e\u67e5\u8be2 ",(0,a.kt)("inlineCode",{parentName:"li"},"ConfigMap")," \u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"Data")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"BinaryData")," \u5b57\u6bb5\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"Secret")," \u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"StringData")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"Data")," \u5b57\u6bb5\u3002"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spec.override.set")," \u7c7b\u4f3c ",(0,a.kt)("inlineCode",{parentName:"li"},"helm template --set")," \u7684\u53c2\u6570"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spec.override.set-string")," \u7c7b\u4f3c ",(0,a.kt)("inlineCode",{parentName:"li"},"helm template --set-string")," \u7684\u53c2\u6570"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spec.override.set-file")," \u7c7b\u4f3c ",(0,a.kt)("inlineCode",{parentName:"li"},"helm template --set-file")," \u7684\u53c2\u6570"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spec.override.set-json")," \u7c7b\u4f3c ",(0,a.kt)("inlineCode",{parentName:"li"},"helm template --set-json")," \u7684\u53c2\u6570"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spec.override.set-literal")," \u7c7b\u4f3c ",(0,a.kt)("inlineCode",{parentName:"li"},"helm template --set-literal")," \u7684\u53c2\u6570"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spec.override.images"),"\n\u6570\u7ec4\u3002\u7c7b\u4f3c ",(0,a.kt)("inlineCode",{parentName:"li"},"kustomize")," \u7684\u955c\u50cf\u81ea\u5b9a\u4e49\u53c2\u6570",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spec.override.images[].name")," \u53bb\u9664 ",(0,a.kt)("inlineCode",{parentName:"li"},"tag")," \u540e\u7684\u539f\u59cb\u955c\u50cf\u540d\u79f0"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spec.override.images[].newName")," \u66ff\u4ee3\u539f\u59cb\u955c\u50cf\u540d\u79f0\u7684\u540d\u79f0"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spec.override.images[].newTag")," \u66ff\u4ee3\u539f\u59cb ",(0,a.kt)("inlineCode",{parentName:"li"},"tag")," \u7684\u65b0 ",(0,a.kt)("inlineCode",{parentName:"li"},"tag")," \u540d\u79f0"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spec.override.images[].digest")," \u66ff\u4ee3\u539f\u59cb ",(0,a.kt)("inlineCode",{parentName:"li"},"tag")," \u7684\u65b0 ",(0,a.kt)("inlineCode",{parentName:"li"},"digest"),"\uff0c\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"li"},"digest")," \u6709\u503c\uff0c\u4f1a\u5ffd\u7565 ",(0,a.kt)("inlineCode",{parentName:"li"},"newTag")," \u7684\u503c\u3002")))))),(0,a.kt)("h2",{id:"\u5de5\u4f5c\u539f\u7406"},"\u5de5\u4f5c\u539f\u7406"),(0,a.kt)("p",null,"\u7ec4\u4ef6\u5b89\u88c5\u8ba1\u5212\u4ee5 Kubernetes Operator \u65b9\u5f0f\u5b9e\u73b0\u3002\u4f7f\u7528\u6807\u51c6 ",(0,a.kt)("inlineCode",{parentName:"p"},"helm")," \u547d\u4ee4\u5c06 helm chart \u5305\u4e0b\u8f7d\u5230\u672c\u5730\u540e\uff0c\u9996\u5148\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"helm template")," \u547d\u4ee4\u751f\u6210\u7ec4\u4ef6\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"manifest")," \u6587\u4ef6\uff0c\u7136\u540e\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"Repository")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"ComponentPlan")," \u4e0a\u7684\u5404\u79cd\u8986\u76d6\u914d\u7f6e\uff0c\u6bd4\u5982\u955c\u50cf\u7684\u8986\u76d6\u914d\u7f6e\uff0c\u7136\u540e\u5c06\u7ed3\u679c\u653e\u5230\u540c\u547d\u540d\u7a7a\u95f4\u7684\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"manifest.<componentPlanName>")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"ConfigMap")," \u4e2d\uff0c\u5982\u679c\u5f53\u524d ",(0,a.kt)("inlineCode",{parentName:"p"},"ComponentPlan")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.approved")," \u5b57\u6bb5\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u90a3\u4e48\u4f1a\u76f4\u63a5\u5b89\u88c5\uff0c\u5982\u679c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"\uff0c\u4f1a\u6682\u65f6\u505c\u6b62\u5728\u8fd9\u91cc\uff0c\u76f4\u5230\u8fd9\u4e2a\u5b57\u6bb5\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u8fd9\u65f6\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u6d4f\u89c8 ",(0,a.kt)("inlineCode",{parentName:"p"},"ComponentPlan")," \u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Status")," \u5b57\u6bb5\u6765\u67e5\u770b\u5b89\u88c5\u8fd9\u4e2a\u7ec4\u4ef6\u4f1a\u5bf9\u96c6\u7fa4\u4e2d\u73b0\u6709\u7684\u8d44\u6e90\u9020\u6210\u4ec0\u4e48\u5f71\u54cd\uff0c\u5f53\u524d\u7ec4\u4ef6\u5b89\u88c5\u8ba1\u5212\u4f1a\u65b0\u521b\u5efa\u54ea\u4e9b\u8d44\u6e90\uff0c\u53c8\u4f1a\u5bf9\u54ea\u4e9b\u8d44\u6e90\u6709\u4fee\u6539\u3002\u5982\u679c\u4e0d\u6ee1\u610f\uff0c\u8fd8\u53ef\u4ee5\u76f4\u63a5\u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"p"},"manifest")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"ConfigMap"),"\uff0c\u6ee1\u610f\u540e\uff0c\u7136\u540e\u518d\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.approved")," \u6539\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u8fdb\u884c\u5b89\u88c5\u3002"))}k.isMDXComponent=!0}}]);