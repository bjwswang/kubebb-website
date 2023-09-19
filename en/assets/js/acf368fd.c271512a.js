"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2237],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>b});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),c=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=c(t.components);return a.createElement(p.Provider,{value:e},t.children)},d="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=c(n),m=r,b=d["".concat(p,".").concat(m)]||d[m]||k[m]||i;return n?a.createElement(b,l(l({ref:e},u),{},{components:n})):a.createElement(b,l({ref:e},u))}));function b(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[d]="string"==typeof t?t:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9753:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:4},l="\u96c6\u6210\u5355\u70b9\u767b\u5f55",o={unversionedId:"building-base/configuration/oidc-integration",id:"building-base/configuration/oidc-integration",title:"\u96c6\u6210\u5355\u70b9\u767b\u5f55",description:"\u901a\u8fc7 OIDC \u534f\u8bae\uff0c\u5b9e\u73b0\u540c kubebb \u7684\u7edf\u4e00\u8d26\u53f7\u3001\u8ba4\u8bc1\u53ca\u5355\u70b9\u767b\u5f55\u529f\u80fd\u3002",source:"@site/docs/building-base/configuration/oidc-integration.md",sourceDirName:"building-base/configuration",slug:"/building-base/configuration/oidc-integration",permalink:"/website/en/docs/building-base/configuration/oidc-integration",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u914d\u7f6e\u5ba1\u8ba1\u80fd\u529b",permalink:"/website/en/docs/building-base/configuration/audit-config"},next:{title:"\u751f\u6210 oidc-proxy \u7684\u8bc1\u4e66",permalink:"/website/en/docs/building-base/configuration/issue-oidc-proxy-certs"}},p={},c=[{value:"1. \u5728 kubebb \u670d\u52a1\u7aef\u6ce8\u518c OIDC \u5ba2\u6237\u7aef",id:"1-\u5728-kubebb-\u670d\u52a1\u7aef\u6ce8\u518c-oidc-\u5ba2\u6237\u7aef",level:2},{value:"2.  \u63a5\u5165 OIDC \u767b\u5f55",id:"2--\u63a5\u5165-oidc-\u767b\u5f55",level:2}],u={toc:c},d="wrapper";function k(t){let{components:e,...n}=t;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u96c6\u6210\u5355\u70b9\u767b\u5f55"},"\u96c6\u6210\u5355\u70b9\u767b\u5f55"),(0,r.kt)("p",null,"\u901a\u8fc7 OIDC \u534f\u8bae\uff0c\u5b9e\u73b0\u540c kubebb \u7684\u7edf\u4e00\u8d26\u53f7\u3001\u8ba4\u8bc1\u53ca\u5355\u70b9\u767b\u5f55\u529f\u80fd\u3002"),(0,r.kt)("h2",{id:"1-\u5728-kubebb-\u670d\u52a1\u7aef\u6ce8\u518c-oidc-\u5ba2\u6237\u7aef"},"1. \u5728 kubebb \u670d\u52a1\u7aef\u6ce8\u518c OIDC \u5ba2\u6237\u7aef"),(0,r.kt)("p",null,"\u901a\u8fc7\u4fee\u6539 dex-server \u4f7f\u7528\u7684 ConfigMap \u6765\u6dfb\u52a0 client\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl edit cm oidc-server -n u4a-system\n")),(0,r.kt)("p",null,"\u5728 staticClients \u5904\u6dfb\u52a0\u4e00\u4e2a\u65b0\u7684\u5ba2\u6237\u7aef\uff0c\u53c2\u8003\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'  staticClients:\n  - id: my-oidc-client\n    name: my-oidc-client\n    secret: ZXhhbXBsZS1hcHAtc2VjcmV0   # \u8fd9\u91cc\u586b\u5199\u968f\u673a\u5bc6\u94a5\uff0c\u6ce8\u610f\u4e0d\u8981\u6cc4\u6f0f\u5bc6\u94a5\n    redirectURIs: # \u8fd9\u91cc\u53ef\u4ee5\u914d\u7f6e\u591a\u4e2a\u56de\u8c03\u5730\u5740\n    - "<my-oidc-client-callback-address>" # \u8fd9\u91cc\u586b\u5199\u767b\u5f55\u6210\u529f\u540e\u7684\u56de\u8c03\u5730\u5740\uff0c\u4f8b\u5982 "http://192.168.1.32:8022"\n')),(0,r.kt)("p",null,"\u91cd\u542f oidc-server"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl delete <oidc-server-pod> -n u4a-system\n")),(0,r.kt)("h2",{id:"2--\u63a5\u5165-oidc-\u767b\u5f55"},"2.  \u63a5\u5165 OIDC \u767b\u5f55"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u73af\u5883\u4fe1\u606f\u793a\u4f8b")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5e94\u7528\u5730\u5740\uff1a",(0,r.kt)("a",{parentName:"li",href:"http://192.168.1.32:8022"},"http://192.168.1.32:8022")),(0,r.kt)("li",{parentName:"ul"},"kubebb \u8ba4\u8bc1\u670d\u52a1\u5730\u5740\uff08issuer\uff09\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://192.168.2.216/oidc"},"https://192.168.2.216/oidc")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u5e94\u7528\u6ce8\u518c\u4fe1\u606f")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5e94\u7528\u540d\u79f0\uff1amy-oidc-client"),(0,r.kt)("li",{parentName:"ul"},"\u56de\u8c03\u5730\u5740\uff1a",(0,r.kt)("a",{parentName:"li",href:"http://192.168.1.32:8022/auth/callback"},"http://192.168.1.32:8022/auth/callback")),(0,r.kt)("li",{parentName:"ul"},"client_id\uff1amy-oidc-client"),(0,r.kt)("li",{parentName:"ul"},"client_secret\uff1aZXhhbXBsZS1hcHAtc2VjcmV0"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u7528\u6237\u767b\u5f55")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728\u5e94\u7528\u4fa7\uff0c\u4e00\u822c\u4f1a\u5f15\u7528\u76f8\u5173\u7684 OIDC SDK \u6765\u5904\u7406 OIDC \u76f8\u5173\u7684\u5904\u7406\u6d41\u7a0b\uff0c\u6765\u5e2e\u52a9\u5f00\u53d1\u8005\u7b80\u5316\u4ea4\u4e92\u6d41\u7a0b\uff0c\u6bd4\u5982 golang \u53ef\u4ee5\u4f7f\u7528\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://github.com/coreos/go-oidc"},"https://github.com/coreos/go-oidc"))),(0,r.kt)("p",null,"\u8fd9\u91cc\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7 API \u8c03\u7528\uff0c\u6765\u5b9e\u73b0 OIDC \u5355\u70b9\u767b\u5f55\u7684\u57fa\u672c\u6d41\u7a0b\uff1a"),(0,r.kt)("p",null,"1\uff09\u7528\u6237\u8bbf\u95ee\u5e94\u7528\u754c\u9762\uff0c\u5e94\u81ea\u52a8\u91cd\u5b9a\u5411\u5230 kubebb \u8ba4\u8bc1\u670d\u52a1\u767b\u9646 URL\uff0cURL \u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://192.168.2.216/oidc/auth?client_id=my-oidc-client&redirect_uri=http://192.168.1.32:8022/auth/callback&response_type=code&scope=openid+profile+email+offline_access\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"client_id"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e94\u7528 ID\uff0c\u6ce8\u518c\u9636\u6bb5\u7531 kubebb \u63d0\u4f9b\uff0c\u5982\uff1amy-oidc-client")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"redirect_uri"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e94\u7528\u56de\u8c03\u5730\u5740\uff0c\u6ce8\u518c\u9636\u6bb5\u7531\u5e94\u7528\u63d0\u4f9b\uff0c\u5982\uff1a",(0,r.kt)("a",{parentName:"td",href:"http://192.168.1.32:8022/auth/callback"},"http://192.168.1.32:8022/auth/callback"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"response_type"),(0,r.kt)("td",{parentName:"tr",align:null},"\u56fa\u5b9a\u503c\uff1acode")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"scope"),(0,r.kt)("td",{parentName:"tr",align:null},"\u56fa\u5b9a\u503c\uff1aopenid profile email")))),(0,r.kt)("p",null,"2\uff09\u5728 kubebb \u7684\u767b\u9646\u9875\u9762\uff0c\u7528\u6237\u8f93\u5165\u7528\u6237\u540d/\u5bc6\u7801\u767b\u9646\uff08\u5982\u679c\u7528\u6237\u5df2\u7ecf\u767b\u9646\uff0c\u8fd9\u6b65\u4f1a\u81ea\u52a8\u8df3\u8fc7\uff09"),(0,r.kt)("p",null,"3\uff09\u767b\u5f55\u6210\u529f\u540e\uff0c\u8df3\u8f6c\u56de\u5e94\u7528\u6ce8\u518c\u7684\u56de\u8c03\u5730\u5740\uff0c\u8df3\u8f6c\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"http://192.168.1.32:8022/auth/callback?code=kf7dmmvhdipdcjczydklwi6pu&state=<state-info>\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"code"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6388\u6743\u7801\uff0c\u7531 kubebb \u8ba4\u8bc1\u670d\u52a1 \u751f\u6210\uff0c\u7528\u4e8e\u540e\u9762\u83b7\u53d6 token")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"state"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0e\u5e94\u7528\u8df3\u8f6c\u5230 kubebb \u8ba4\u8bc1\u670d\u52a1\u767b\u9646 URL \u65f6\u4f20\u9012\u7684 state \u503c\u4e00\u6837\u3002")))),(0,r.kt)("p",null,"4\uff09\u5e94\u7528\u540e\u53f0\u8c03\u7528 kubebb token API \u83b7\u53d6 token \u4fe1\u606f\uff0c\u8c03\u7528\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl -XPOST 'https://192.168.2.216/oidc/token' \\\n    -H 'Authorization: Basic c2FtcGxlLWFwcC0yMTg6WlhoaGJYQnNaUzFoY0hBdGMyVmpjbVYwJw==' \\\n    -H 'Content-Type: application/x-www-form-urlencoded' \\\n    --data-urlencode 'code=kf7dmmvhdipdcjczydklwi6pu' \\\n    --data-urlencode 'grant_type=authorization_code' \\\n    --data-urlencode 'redirect_uri=http://192.168.1.32:8022/auth/callback'\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Authorization"),(0,r.kt)("td",{parentName:"tr",align:null},"\u683c\u5f0f Basic XXXX\uff0c\u5176\u4e2d XXXX \u662f client_id:client_secret \u7684 base64 \u7f16\u7801")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Content-Type"),(0,r.kt)("td",{parentName:"tr",align:null},"\u56fa\u5b9a\u503c\uff1aapplication/x-www-form-urlencoded")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"code"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6388\u6743\u7801")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"grant_type"),(0,r.kt)("td",{parentName:"tr",align:null},"\u56fa\u5b9a\u503c\uff1aauthorization_code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"redirect_uri"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e94\u7528\u56de\u8c03\u5730\u5740\uff0ckubebb \u8ba4\u8bc1\u670d\u52a1\u4f1a\u9a8c\u8bc1\u8be5\u5730\u5740\u662f\u5426\u4e0e\u5e94\u7528\u6ce8\u518c\u7684\u56de\u8c03\u5730\u5740\u4e00\u81f4")))),(0,r.kt)("p",null,"\u8be5\u8bf7\u6c42\u4f1a\u8fd4\u56detoken\u4fe1\u606f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ID Token: eyJhbGciOiJSUzI1NiIsImtpZCI6ImQxY2Y2MzA3YmQ5Yzk3OTJiMzdmMGJiM2M1Njk1ZDQ0MWJlZTMzNjcifQ.eyJpc3MiOiJodHRwczovLzE5Mi4xNjguMi4yMTYiLCJzdWIiOiJDZ0V4RWdsMFpXNTRZMnh2ZFdRIiwiYXVkIjoic2FtcGxlLWFwcC0yMTgiLCJleHAiOjE2MzAwMzA0ODEsImlhdCI6MTYyOTk0NDA4MSwiYXRfaGFzaCI6Ik1PUjk0enktTUZNcU5zZUZTM1ZzRXciLCJjX2hhc2giOiJpbkoteDVKUEFCRXhaaEpRaEx3T3pBIiwiZW1haWwiOiJhZG1pbkBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoiYWRtaW4iLCJwaG9uZSI6IjE3MzQzMTM1MDUxIiwidXNlcmlkIjoiMSJ9.FrC6oKRsManuP9opqugknJmOE78uKmxX6uteM1flCDVRqRv-riG0C5AOX4K9BTnT9GIlu3H24jydT4ybSissz_wL_mLzoTQWoQ9uMMmd4w1aiGqgO6mIaEh3XvTqtoQv1ltONSkp49bykpdIXbDJxy0PScU0k-0XFNJIMSBwn8SEubgH7NO3xwFzsjaLqBfolxC5YXBuWS8n-FEOqNTg-mx-n_Fu2oemJCT-8qWMqY6FNjRSC3D-2ABkCbl4g76vPLgJ-I6dU6eaJvaBW6S4BzhCX0SitxYrxcXjOGviX1HKOXXSUC1n1HfQpOpNW-FA2G3F-kON94rYr1AEdIwSVw\n\nAccess Token: eyJhbGciOiJSUzI1NiIsImtpZCI6ImQxY2Y2MzA3YmQ5Yzk3OTJiMzdmMGJiM2M1Njk1ZDQ0MWJlZTMzNjcifQ.eyJpc3MiOiJodHRwczovLzE5Mi4xNjguMi4yMTYiLCJzdWIiOiJDZ0V4RWdsMFpXNTRZMnh2ZFdRIiwiYXVkIjoic2FtcGxlLWFwcC0yMTgiLCJleHAiOjE2MzAwMzA0ODEsImlhdCI6MTYyOTk0NDA4MSwiYXRfaGFzaCI6IlhYS3RzUkhZS043WnZGOUFxcXVSd3ciLCJlbWFpbCI6ImFkbWluQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5hbWUiOiJhZG1pbiIsInBob25lIjoiMTczNDMxMzUwNTEiLCJ1c2VyaWQiOiIxIn0.VXUxba9cy4S3ZUtyfbF6A3Xg5fZYL-m6nqR09qiJgJmNUCEkHr_b4xKXXvDJwsgoC0zdUxShd1BpOgN4vi8A7zZ676-PybB2dVT6x3EPpwCVC8_NVYwXijeELWJJ0nU9aAq6p_m-XdXOuPzutbmMLSWVfrY-CS2WSdQISuKxb28slTptzCF4OY3dZugOHZ_v10KAxsMo0Aul4d3C_EXOaiUKzw0OTD7xyYOm8MmJvhzQEYSodHAkbJWnOusKEBtFKJ5hhAqPLCymY2VleN-7Jbqr-DYrDSDtd7FF1vCbDL0-rTwQ5_79FIAu_fusOcVc26M7GlvOtGcniaweNtm1dg\n")),(0,r.kt)("p",null,"\u8fd4\u56de\u7684 ID Token \u662f\u6807\u51c6 JWT Token\uff0c\u5e94\u7528\u53ef\u4ee5\u4ece  ID Token \u4e2d\u89e3\u6790\u51fa\u7528\u6237\u4fe1\u606f\uff0c\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'    {\n        "iss": "https://192.168.2.216/oidc",\n        "sub": "CgExEgl0ZW54Y2xvdWQ",\n        "aud": "sample-app",\n        "exp": 1630030481,\n        "iat": 1629944081,\n        "at_hash": "MOR94zy-MFMqNseFS3VsEw",\n        "c_hash": "inJ-x5JPABExZhJQhLwOzA",\n        "email": "admin@example.com",\n        "email_verified": true,\n        "name": "admin",\n        "phone": "17343135051",\n        "userid": "1"\n    }\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u8be5 JWT Token\uff0c\u5e94\u7528\u53ef\u4ee5\u5c06\u7528\u6237\u57fa\u7840\u4fe1\u606f\u540c\u6b65\u5230\u81ea\u5df1\u7684\u7cfb\u7edf\u5185\uff0c\u5728\u57fa\u4e8e\u7edf\u4e00\u8d26\u53f7\u3001\u8ba4\u8bc1\u7684\u524d\u63d0\u4e0b\uff0c\u5b9e\u73b0\u540c\u81ea\u8eab\u8d26\u53f7\u3001\u6743\u9650\u4f53\u7cfb\u7684\u878d\u5408\u3002"),(0,r.kt)("li",{parentName:"ul"},"Access Token \u4e00\u822c\u7528\u4e8e\u8bbf\u95ee kubebb \u8ba4\u8bc1\u670d\u52a1\u83b7\u53d6\u7528\u6237\u8be6\u7ec6\u4fe1\u606f\uff0c\u53ef\u4ee5\u6309\u9700\u4f7f\u7528\u3002")))}k.isMDXComponent=!0}}]);