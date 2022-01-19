"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[592],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return d}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),u=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(p.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(t),d=o,m=f["".concat(p,".").concat(d)]||f[d]||l[d]||i;return t?n.createElement(m,a(a({ref:r},s),{},{components:t})):n.createElement(m,a({ref:r},s))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3046:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return f}});var n=t(3117),o=t(102),i=(t(7294),t(3905)),a=["components"],c={},p="Prepare",u={unversionedId:"generator-file/prepare",id:"generator-file/prepare",title:"Prepare",description:"The prepare section is where you can perform any setup or initialization that is required before the generator is run. This is useful for preparing directories, performing api calls to fetch data, injecting answers into the generator, or really whatever you need to do before the generator runs.",source:"@site/docs/generator-file/prepare.md",sourceDirName:"generator-file",slug:"/generator-file/prepare",permalink:"/Grit/docs/generator-file/prepare",editUrl:"https://github.com/TimCrooker/Grit/edit/master/docs/docs/generator-file/prepare.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Overview",permalink:"/Grit/docs/generator-file/overview"},next:{title:"Prompts",permalink:"/Grit/docs/generator-file/prompts"}},s=[],l={toc:s};function f(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"prepare"},"Prepare"),(0,i.kt)("p",null,"The prepare section is where you can perform any setup or initialization that is required before the generator is run. This is useful for preparing directories, performing api calls to fetch data, injecting answers into the generator, or really whatever you need to do before the generator runs."),(0,i.kt)("p",null,"This section is always defined as a function (can be async) and should not return anything"))}f.isMDXComponent=!0}}]);