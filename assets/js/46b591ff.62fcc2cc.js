"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[572],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9456:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),i=["components"],l={},u="Update",c={unversionedId:"usage/update",id:"usage/update",title:"Update",description:"Update a specific generator",source:"@site/docs/usage/update.md",sourceDirName:"usage",slug:"/usage/update",permalink:"/Grit/docs/usage/update",editUrl:"https://github.com/TimCrooker/Grit/edit/master/docs/docs/usage/update.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Run",permalink:"/Grit/docs/usage/run"},next:{title:"Remove",permalink:"/Grit/docs/usage/remove"}},p=[{value:"Update a specific generator",id:"update-a-specific-generator",children:[],level:2},{value:"Update all generators",id:"update-all-generators",children:[],level:2},{value:"Show a list of generators with updates availiable",id:"show-a-list-of-generators-with-updates-availiable",children:[],level:2}],s={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"update"},"Update"),(0,o.kt)("h2",{id:"update-a-specific-generator"},"Update a specific generator"),(0,o.kt)("p",null,"For instances where you would like to directly update a generator that you already installed and do nothing else you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"update")," command with the name of the generator to update:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"grit update <generator-name>\n#generator-name: the name of the generator you want to run (required)\n")),(0,o.kt)("h2",{id:"update-all-generators"},"Update all generators"),(0,o.kt)("p",null,"If you want to update all of the generators on your machine then use the following command to install all availiable updates:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"grit update --all\n")),(0,o.kt)("h2",{id:"show-a-list-of-generators-with-updates-availiable"},"Show a list of generators with updates availiable"),(0,o.kt)("p",null,"To simply view a list of installed generators that have updates available then use the update command with no arguments or options:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"grit update\n")),(0,o.kt)("p",null,"This command will show the following screen where you can select generatos to update directly from the list"),(0,o.kt)("p",null," INSERT UPDATE SCREEN SCREENSHOT HERE"))}d.isMDXComponent=!0}}]);