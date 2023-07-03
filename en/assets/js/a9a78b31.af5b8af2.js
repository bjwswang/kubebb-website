"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1915],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),d=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),b=a,k=u["".concat(i,".").concat(b)]||u[b]||p[b]||o;return n?r.createElement(k,s(s({ref:t},c),{},{components:n})):r.createElement(k,s({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:a,s[1]=l;for(var d=2;d<o;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},4756:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},s="kubedashboard \u7ba1\u7406\u5de5\u5177",l={unversionedId:"component-market/kubedashboard",id:"component-market/kubedashboard",title:"kubedashboard \u7ba1\u7406\u5de5\u5177",description:"\u8fd9\u91cc\u4ecb\u7ecd\u4e00\u4e0b\u5982\u4f55\u57fa\u4e8e kubebb \u7684\u5e95\u5ea7\u6765\u90e8\u7f72 Kubernetes Dashboard\uff0c\u5e76\u4f7f\u7528\u7edf\u4e00\u7684 OIDC \u8ba4\u8bc1\u3001\u5355\u70b9\u767b\u5f55\u53ca\u539f\u751f Kubernetes RBAC \u8ba4\u8bc1\u3002",source:"@site/docs/component-market/kubedashboard.md",sourceDirName:"component-market",slug:"/component-market/kubedashboard",permalink:"/kubebb-website/en/docs/component-market/kubedashboard",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u7ec4\u4ef6\u5e02\u573a",permalink:"/kubebb-website/en/docs/category/\u7ec4\u4ef6\u5e02\u573a"},next:{title:"\u65e5\u5fd7\u7ec4\u4ef6",permalink:"/kubebb-website/en/docs/component-market/logging"}},i={},d=[{value:"\u5b89\u88c5 Kubernetes dashboard",id:"\u5b89\u88c5-kubernetes-dashboard",level:3},{value:"Uninstall",id:"uninstall",level:3}],c={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kubedashboard-\u7ba1\u7406\u5de5\u5177"},"kubedashboard \u7ba1\u7406\u5de5\u5177"),(0,a.kt)("p",null,"\u8fd9\u91cc\u4ecb\u7ecd\u4e00\u4e0b\u5982\u4f55\u57fa\u4e8e kubebb \u7684\u5e95\u5ea7\u6765\u90e8\u7f72 Kubernetes Dashboard\uff0c\u5e76\u4f7f\u7528\u7edf\u4e00\u7684 OIDC \u8ba4\u8bc1\u3001\u5355\u70b9\u767b\u5f55\u53ca\u539f\u751f Kubernetes RBAC \u8ba4\u8bc1\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5de5\u5177\u4ee3\u7801\u5730\u5740\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/dashboard"},"kubernetes dashboard "))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Prerequisite"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u90e8\u7f72 kubebb \u7684\u5e95\u5ea7\u7ec4\u4ef6 u4a-component\uff0c\u63d0\u4f9b\u57fa\u4e8e K8S \u6784\u5efa\u7684\u57fa\u672c\u7684\u8d26\u53f7\u3001\u8ba4\u8bc1\u3001\u6743\u9650\u548c\u5ba1\u8ba1\u529f\u80fd\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u90e8\u7f72\u7ec4\u4ef6")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ git clone https://github.com/kubebb/addon-components.git\n# \u8fdb\u5165\u5bf9\u5e94\u76ee\u5f55\n$ cd kube-dashboard\n")))),(0,a.kt)("h3",{id:"\u5b89\u88c5-kubernetes-dashboard"},"\u5b89\u88c5 Kubernetes dashboard"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u7f16\u8f91 values.yaml\uff0c\u6309\u9700\u8981\u66ff\u6362\u955c\u50cf\u5730\u5740\uff0c\u66ff\u6362 ",(0,a.kt)("inlineCode",{parentName:"li"},"<replaced-")," \u5f00\u5934\u7684\u7684\u5c5e\u6027\u503c\uff0c\u5176\u4e2d OIDC \u7684\u76f8\u5173\u4fe1\u606f\u53ef\u4ee5\u5728 configmap\u4e2d\u83b7\u53d6\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# \u83b7\u53d6 OIDC client \u76f8\u5173\u914d\u7f6e\nkubectl edit cm oidc-server -n u4a-system\n# \u8bb0\u5f55 issuer\uff0cstaticClients \u7684 id\u3001secret \u7684\u503c\n")),(0,a.kt)("p",null,"\u4fee\u6539 values.yaml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"dashboard:\n  dashboardImage: hub.tenxcloud.com/addon_system/kube-dashboard:v2.7.0\n  proxyImage: hub.tenxcloud.com/addon_system/keycloak-gatekeeper:latest\n  metricsImage: hub.tenxcloud.com/addon_system/kube-dashboard-metrics-scraper:v1.0.8\n\ningress:\n  class: portal-ingress\n  host: kubedashboard.<replaced-ingress-nginx-ip>.nip.io\n\n# You must check and update the value of each variable below\nkubeOidcProxy:\n  issuerUrl: <replaced-issuer-url> # https://portal.172.22.96.209.nip.io/oidc\n  clientId: <replaced-client-id>\n  clientSecret: <replaced-client-secret>\n  usernameClaim: preferred_username\n  groupClaim: groups\n  hostConfig:\n    enabled: true\n    hostAliases:\n    - hostnames:\n      # MUST update this value\n      - portal.<replaced-ingress-nginx-ip>.nip.io\n      ip: <replaced-ingress-nginx-ip>\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u8fd0\u884c helm \u5b89\u88c5\u63d2\u4ef6")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# \u5982\u679c\u9700\u8981\uff0c\u521b\u5efa\u5355\u72ec\u7684 namespace \u6765\u90e8\u7f72\u6b64\u63d2\u4ef6\uff0c\u6bd4\u5982 addon-system\nkubectl create ns addon-system\n# \u90e8\u7f72 kube-dashboard \u63d2\u4ef6\nhelm install kube-dashboard -n addon-system .\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Note: \u6b64\u65f6\uff0cdashboard \u7684 pod \u4f1a\u5904\u4e8e ContainerCreating \u7684\u72b6\u6001\uff0c\u8fd9\u662f\u56e0\u4e3a\u7f3a\u5c11\u6240\u4f9d\u8d56\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u9700\u8981\u51c6\u5907\u6b64\u914d\u7f6e\u6587\u4ef6\u3002")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u521b\u5efa kube-dashboard \u6240\u9700\u8981\u7684 kubeconfig \u6587\u4ef6, \u4ee5\u4fbf kube-dashboard \u53ef\u4ee5\u4f7f\u7528\u7edf\u4e00\u7684 kube-oidc-proxy \u8fdb\u884c\u8ba4\u8bc1\uff0c\u540c\u65f6\uff0c\u4e5f\u9700\u8981\u5728\u914d\u7f6e\u4e2d\u4f7f\u7528\u6b63\u786e\u7684\u8bc1\u4e66\u548c\u8fde\u63a5 token \u4fe1\u606f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# copy the kubeconfig template\n$ cp sample-kubeconfig kubeconfig\n# edit kubeconfig file to use the correct cluster.certificate-authority-data, cluster.server, user.token\n\n# Step 1\n$ export CLUSTER_CA=$(kubectl get secret -n u4a-system oidc-server-root-secret -o jsonpath='{.data.ca\\.crt}')\n$ use the value from $CLUSTER_CA to replace cluster.certificate-authority-data(<certificate-authority-data>) in kubeconfig file\n\n# Step 2\n$ export USER_TOKEN_NAME=$(kubectl -n addon-system get serviceaccount kubernetes-dashboard -o=jsonpath='{.secrets[0].name}')\n$ export USER_TOKEN_VALUE=$(kubectl -n addon-system get secret/${USER_TOKEN_NAME} -o=go-template='{{.data.token}}' | base64 --decode)\n# use the value from $USER_TOKEN_VALUE to replace user.token(<user-token>) in kubeconfig file\n\n# Step 3 replace cluster.server(<cluster-server>) with the address of kube-oidc-proxy\n\n# Step 4 create the configmap\n$ kubectl create cm dashboard-kubeconfig --from-file=kubeconfig -n addon-system\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"\u91cd\u542f kube-dashboard")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ kubectl delete pod -n addon-system $(kubectl  get pod -n addon-system | grep kubernetes-dashboard | awk '{print $1}')\n")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"\u5728 OIDC \u670d\u52a1\u4e2d\u6dfb\u52a0 kube-dashboard \u7684 callback \u5730\u5740.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ kubectl edit cm oidc-server -n u4a-system\n# find redirectURIs and add a new redirect url 'https://<kubedashboard-host-name>/oauth/callback'\n")),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"kubedashboard.<replaced-ingress-nginx-ip>.nip.io")," \u5730\u5740\u8bbf\u95ee kube-dashboard. \u5982\u679c\u5904\u4e8e\u672a\u767b\u5f55\u72b6\u6001\uff0c\u4f1a\u88ab\u91cd\u5b9a\u5411\u5230\u7edf\u4e00\u7684\u8ba4\u8bc1\u670d\u52a1\u8fdb\u884c\u767b\u5f55\uff0c\u6210\u529f\u767b\u5f55\u540e\u5373\u523b\u643a\u5e26\u6388\u6743\u7684 token \u56de\u5230 kube-dashboard \u8fdb\u884c\u6b63\u5e38\u4f7f\u7528\u4e86\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u901a\u8fc7\u7ed9\u767b\u5f55\u7684\u7528\u6237\u6388\u6743\u4e0d\u540c\u7684 RBAC \u7b56\u7565\uff0c\u6765\u9a8c\u8bc1\u662f\u5426\u53ea\u6709\u6388\u6743\u7684\u8d44\u6e90\u624d\u80fd\u88ab\u8be5\u7528\u6237\u8bbf\u95ee\u3002"))),(0,a.kt)("h3",{id:"uninstall"},"Uninstall"),(0,a.kt)("p",null,"\u901a\u8fc7 helm uninstall \u6765\u5378\u8f7d\u8be5\u63d2\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"helm uninstall kube-dashboard -n addon-system\n")))}p.isMDXComponent=!0}}]);