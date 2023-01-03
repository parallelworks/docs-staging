"use strict";(self.webpackChunkpworks_docs=self.webpackChunkpworks_docs||[]).push([[630],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var u=r.createContext({}),l=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},c=function(t){var e=l(t.components);return r.createElement(u.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,u=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),p=l(n),d=i,M=p["".concat(u,".").concat(d)]||p[d]||g[d]||o;return n?r.createElement(M,a(a({ref:e},c),{},{components:n})):r.createElement(M,a({ref:e},c))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=t,s.mdxType="string"==typeof t?t:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7615:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={sidebar_position:5,label:"Starting and Stopping Clusters"},u="Starting and Stopping Clusters",l={unversionedId:"starting_stopping_clusters",id:"starting_stopping_clusters",title:"Starting and Stopping Clusters",description:"Starting Clusters",source:"@site/docs/starting_stopping_clusters.md",sourceDirName:".",slug:"/starting_stopping_clusters",permalink:"/starting_stopping_clusters",editUrl:"https://github.com/parallelworks/docs/tree/master/docs/starting_stopping_clusters.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,label:"Starting and Stopping Clusters"},sidebar:"docsSidebar",previous:{title:"Creating Clusters",permalink:"/creating_clusters"},next:{title:"Swift Scripting Language",permalink:"/configuring-clusters/swift_scripting_language"}},c=[{value:"Starting Clusters",id:"starting-clusters",children:[],level:2},{value:"Stopping Clusters",id:"stopping-clusters",children:[],level:2}],g={toc:c};function p(t){var e=t.components,s=(0,i.Z)(t,a);return(0,o.kt)("wrapper",(0,r.Z)({},g,s,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"starting-and-stopping-clusters"},"Starting and Stopping Clusters"),(0,o.kt)("h2",{id:"starting-clusters"},"Starting Clusters"),(0,o.kt)("p",null,"Navigate to the ",(0,o.kt)("strong",{parentName:"p"},"Computing Resources")," box in the ",(0,o.kt)("strong",{parentName:"p"},"Compute")," tab. Select the power button ",(0,o.kt)("img",{alt:"Docusaurus themed image",src:n(3997).Z+"#gh-light-mode-only",width:"16",height:"16"}),(0,o.kt)("img",{alt:"Docusaurus themed image",src:n(6954).Z+"#gh-dark-mode-only",width:"16",height:"16"}),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot of inactive cluster in Computing Resources box. The power button is grayed out and the stopped bubble on the right is red.",src:n(562).Z,width:"2444",height:"332"})),(0,o.kt)("p",null,"While the cluster starts, the power button will flash green and the ",(0,o.kt)("strong",{parentName:"p"},"requested")," status bubble will turn yellow."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot of cluster starting up. The power button flashes green and the requested bubble on the right is yellow.",src:n(2675).Z,width:"2448",height:"334"})),(0,o.kt)("p",null,"It may take up to 15 minutes for an AWS cluster to start and roughly 5 minutes for a Google cluster to start. "),(0,o.kt)("p",null,"When your cluster is online, both the power button and the ",(0,o.kt)("strong",{parentName:"p"},"active")," bubble will turn green. Now your cluster is ready to run workflows. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot of active cluster. The power button is solid green and the active bubble on the right is green.",src:n(9779).Z,width:"2480",height:"340"})),(0,o.kt)("h2",{id:"stopping-clusters"},"Stopping Clusters"),(0,o.kt)("p",null,"When you\u2019re ready to finish a job or log off for the day, stop any running clusters by selecting the power button. A dialog box will appear with the message ",(0,o.kt)("em",{parentName:"p"},"Are you sure you want to turn off ","[cluster name]","?")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot of popup box asking to confirm that the user wants to stop the cluster.",src:n(2870).Z,width:"1070",height:"366"})),(0,o.kt)("p",null,"Select ",(0,o.kt)("strong",{parentName:"p"},"Turn off")," to stop the cluster. "),(0,o.kt)("p",null,"When you stop a cluster, all data in ",(0,o.kt)("inlineCode",{parentName:"p"},"/lustre")," and the local file system will be lost. Only the data in the object storage (S3 buckets) and ",(0,o.kt)("inlineCode",{parentName:"p"},"/contrib")," will remain.\xa0It\u2019s important to copy any data you\u2019d like to keep to an S3 bucket or to a remote location."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It\u2019s essential to turn off the cluster when you\u2019ve finished your work. Clusters that run unmonitored continue to accrue additional charges, which will be subtracted from your organization\u2019s allotment."))))}p.isMDXComponent=!0},3997:function(t,e){e.Z="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9ImN1cnJlbnRDb2xvciIgZmlsbD0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjAiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBoZWlnaHQ9IjFlbSIgd2lkdGg9IjFlbSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNDAwIDU0LjFjNjMgNDUgMTA0IDExOC42IDEwNCAyMDEuOSAwIDEzNi44LTExMC44IDI0Ny43LTI0Ny41IDI0OEMxMjAgNTA0LjMgOC4yIDM5MyA4IDI1Ni40IDcuOSAxNzMuMSA0OC45IDk5LjMgMTExLjggNTQuMmMxMS43LTguMyAyOC00LjggMzUgNy43TDE2Mi42IDkwYzUuOSAxMC41IDMuMSAyMy44LTYuNiAzMS00MS41IDMwLjgtNjggNzkuNi02OCAxMzQuOS0uMSA5Mi4zIDc0LjUgMTY4LjEgMTY4IDE2OC4xIDkxLjYgMCAxNjguNi03NC4yIDE2OC0xNjkuMS0uMy01MS44LTI0LjctMTAxLjgtNjguMS0xMzQtOS43LTcuMi0xMi40LTIwLjUtNi41LTMwLjlsMTUuOC0yOC4xYzctMTIuNCAyMy4yLTE2LjEgMzQuOC03Ljh6TTI5NiAyNjRWMjRjMC0xMy4zLTEwLjctMjQtMjQtMjRoLTMyYy0xMy4zIDAtMjQgMTAuNy0yNCAyNHYyNDBjMCAxMy4zIDEwLjcgMjQgMjQgMjRoMzJjMTMuMyAwIDI0LTEwLjcgMjQtMjR6Ij48L3BhdGg+PC9zdmc+"},6954:function(t,e){e.Z="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGhlaWdodD0iMWVtIiB3aWR0aD0iMWVtIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik00MDAgNTQuMWM2MyA0NSAxMDQgMTE4LjYgMTA0IDIwMS45IDAgMTM2LjgtMTEwLjggMjQ3LjctMjQ3LjUgMjQ4QzEyMCA1MDQuMyA4LjIgMzkzIDggMjU2LjQgNy45IDE3My4xIDQ4LjkgOTkuMyAxMTEuOCA1NC4yYzExLjctOC4zIDI4LTQuOCAzNSA3LjdMMTYyLjYgOTBjNS45IDEwLjUgMy4xIDIzLjgtNi42IDMxLTQxLjUgMzAuOC02OCA3OS42LTY4IDEzNC45LS4xIDkyLjMgNzQuNSAxNjguMSAxNjggMTY4LjEgOTEuNiAwIDE2OC42LTc0LjIgMTY4LTE2OS4xLS4zLTUxLjgtMjQuNy0xMDEuOC02OC4xLTEzNC05LjctNy4yLTEyLjQtMjAuNS02LjUtMzAuOWwxNS44LTI4LjFjNy0xMi40IDIzLjItMTYuMSAzNC44LTcuOHpNMjk2IDI2NFYyNGMwLTEzLjMtMTAuNy0yNC0yNC0yNGgtMzJjLTEzLjMgMC0yNCAxMC43LTI0IDI0djI0MGMwIDEzLjMgMTAuNyAyNCAyNCAyNGgzMmMxMy4zIDAgMjQtMTAuNyAyNC0yNHoiPjwvcGF0aD48L3N2Zz4="},562:function(t,e,n){e.Z=n.p+"assets/images/starting_clusters_1_dec22-308e4ae7fb46aefa13bb459c6134b8bb.png"},2675:function(t,e,n){e.Z=n.p+"assets/images/starting_clusters_2_dec22-fdf0cf95b0f46f4bc2acb38d7d251243.png"},9779:function(t,e,n){e.Z=n.p+"assets/images/starting_clusters_3_dec22-d8ca45dd07fcf2826861c590be4109af.png"},2870:function(t,e,n){e.Z=n.p+"assets/images/stopping_clusters_1_dec22-a193ef9a2a9d8f141e101d524bf2034a.png"}}]);