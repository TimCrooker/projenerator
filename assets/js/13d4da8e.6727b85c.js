"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[426],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(t),m=o,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6938:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var r=t(3117),o=t(102),a=(t(7294),t(3905)),i=["components"],s={sidebar_position:5},l="Advanced Usage",d={unversionedId:"advanced-usage",id:"advanced-usage",title:"Advanced Usage",description:"Docusaurus can manage multiple versions of your docs.",source:"@site/docs/advanced-usage.md",sourceDirName:".",slug:"/advanced-usage",permalink:"/Grit/docs/advanced-usage",editUrl:"https://github.com/TimCrooker/Grit/edit/master/docs/docs/advanced-usage.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5}},c=[{value:"Create a docs version",id:"create-a-docs-version",children:[],level:2},{value:"Add a Version Dropdown",id:"add-a-version-dropdown",children:[],level:2},{value:"Update an existing version",id:"update-an-existing-version",children:[],level:2}],u={toc:c};function p(e){var n=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,s,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"advanced-usage"},"Advanced Usage"),(0,a.kt)("p",null,"Docusaurus can manage multiple versions of your docs."),(0,a.kt)("h2",{id:"create-a-docs-version"},"Create a docs version"),(0,a.kt)("p",null,"Release a version 1.0 of your project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run docusaurus docs:version 1.0\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"docs")," folder is copied into ",(0,a.kt)("inlineCode",{parentName:"p"},"versioned_docs/version-1.0")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"versions.json")," is created."),(0,a.kt)("p",null,"Your docs now have 2 versions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1.0")," at ",(0,a.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/")," for the version 1.0 docs"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"current")," at ",(0,a.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/next/")," for the ",(0,a.kt)("strong",{parentName:"li"},"upcoming, unreleased docs"))),(0,a.kt)("h2",{id:"add-a-version-dropdown"},"Add a Version Dropdown"),(0,a.kt)("p",null,"To navigate seamlessly across versions, add a version dropdown."),(0,a.kt)("p",null,"Modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: 'docsVersionDropdown',\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n")),(0,a.kt)("p",null,"The docs version dropdown appears in your navbar:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Docs Version Dropdown",src:t(1877).Z})),(0,a.kt)("h2",{id:"update-an-existing-version"},"Update an existing version"),(0,a.kt)("p",null,"It is possible to edit versioned docs in their respective folder:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"versioned_docs/version-1.0/hello.md")," updates ",(0,a.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/hello")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"docs/hello.md")," updates ",(0,a.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/next/hello"))))}p.isMDXComponent=!0},1877:function(e,n,t){n.Z=t.p+"assets/images/docsVersionDropdown-dda80f009a926fb2dd92bab8faa6c4d8.png"}}]);