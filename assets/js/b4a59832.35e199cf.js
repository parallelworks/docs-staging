"use strict";(self.webpackChunkpworks_docs=self.webpackChunkpworks_docs||[]).push([[548],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),c=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||i;return n?o.createElement(m,l(l({ref:t},p),{},{components:n})):o.createElement(m,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var c=2;c<i;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8370:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],a={},u="Developing workflows through the Cloud9 environment",c={unversionedId:"developers-guide/developing_via_cloud9",id:"developers-guide/developing_via_cloud9",title:"Developing workflows through the Cloud9 environment",description:"Through Cloud9 workflow, you can connect to remote (Amazon Web Services) nodes and use the Cloud9 IDE for developing and testing of workflows.",source:"@site/docs/developers-guide/01_developing_via_cloud9.md",sourceDirName:"developers-guide",slug:"/developers-guide/developing_via_cloud9",permalink:"/developers-guide/developing_via_cloud9",editUrl:"https://github.com/parallelworks/docs/tree/master/docs/developers-guide/01_developing_via_cloud9.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"docsSidebar",previous:{title:"Swift Scripting Language",permalink:"/developers-guide/swift_scripting_language"},next:{title:"Containers",permalink:"/developers-guide/containers/"}},p=[{value:"Hint",id:"hint",children:[],level:2}],s={toc:p};function d(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"developing-workflows-through-the-cloud9-environment"},"Developing workflows through the Cloud9 environment"),(0,i.kt)("p",null,"Through Cloud9 workflow, you can connect to remote (Amazon Web Services) nodes and use the Cloud9 IDE for developing and testing of workflows."),(0,i.kt)("p",null,"To run the Cloud9 workflow:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"On Parallel Works platform, go to ",(0,i.kt)("inlineCode",{parentName:"li"},"Compute")," tab (see step 2 in Section ",(0,i.kt)("em",{parentName:"li"},"RunningWorkflow"),") and turn on the ",(0,i.kt)("inlineCode",{parentName:"li"},"LINUXPOOL")," resource."),(0,i.kt)("li",{parentName:"ol"},"Start the ",(0,i.kt)("inlineCode",{parentName:"li"},"C9_DEV")," workflow (similar to step 3 in Section ",(0,i.kt)("em",{parentName:"li"},"RunningWorkflow"),")"),(0,i.kt)("li",{parentName:"ol"},"After executing the workflow, the workflow monitor will load: ",(0,i.kt)("img",{src:n(2517).Z,width:"1920",height:"1080"})),(0,i.kt)("li",{parentName:"ol"},"After a few minutes, the (/gitbook/assets/green-2.png)"),(0,i.kt)("li",{parentName:"ol"},"The Cloud9 editor will start in a new tab, and loads in a few seconds: ",(0,i.kt)("img",{src:n(4374).Z,width:"2000",height:"1500"})),(0,i.kt)("li",{parentName:"ol"},"To stop the Cloud9 workflow, go to Parallel Works Compute tab and click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Cancel Job")," button: ",(0,i.kt)("img",{src:n(9025).Z,width:"1920",height:"1080"}))),(0,i.kt)("h2",{id:"hint"},"Hint"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Please note that during startup the Cloud9 workflow copies your files from a remote location to your ",(0,i.kt)("inlineCode",{parentName:"p"},"/core/")," directory. Removing large files from your ",(0,i.kt)("inlineCode",{parentName:"p"},"/core/")," directory before exiting the Cloud9 environment would reduce the the start-up time next time you start the Cloud9 workflow.")))}d.isMDXComponent=!0},9025:function(e,t,n){t.Z=n.p+"assets/images/c9-end-2-b56be565632ccd1e05c2f41e905d04a5.png"},4374:function(e,t,n){t.Z=n.p+"assets/images/c9-env-2-fe7e41e21a1918e69f003156448e9f6f.png"},2517:function(e,t,n){t.Z=n.p+"assets/images/workflowMonitor-b4a1d8c263917579f718d34162c00313.png"}}]);