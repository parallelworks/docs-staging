"use strict";(self.webpackChunkpworks_docs=self.webpackChunkpworks_docs||[]).push([[5623],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),a=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=a(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=a(r),h=o,f=d["".concat(u,".").concat(h)]||d[h]||p[h]||l;return r?n.createElement(f,c(c({ref:t},s),{},{components:r})):n.createElement(f,c({ref:t},s))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,c=new Array(l);c[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var a=2;a<l;a++)c[a]=r[a];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9497:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return a},toc:function(){return s},default:function(){return d}});var n=r(7462),o=r(3366),l=(r(7294),r(3905)),c=["components"],i={},u="HELYX-OS Cloud Connector",a={unversionedId:"working-with-clusters/helyx-os_cloud_connector/README",id:"working-with-clusters/helyx-os_cloud_connector/README",title:"HELYX-OS Cloud Connector",description:"HELYX-OS 2.4.0 Parallel Works Cloud Connector Guide",source:"@site/docs/working-with-clusters/01_helyx-os_cloud_connector/README.md",sourceDirName:"working-with-clusters/01_helyx-os_cloud_connector",slug:"/working-with-clusters/helyx-os_cloud_connector/",permalink:"/working-with-clusters/helyx-os_cloud_connector/",editUrl:"https://github.com/parallelworks/docs/tree/master/docs/working-with-clusters/01_helyx-os_cloud_connector/README.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Singularity",permalink:"/configuring-clusters/containers/singularity"},next:{title:"Setup the Parallel Works Cloud Connector in HELYX-OS",permalink:"/working-with-clusters/helyx-os_cloud_connector/setup_pw_cloud_connector_in_helyx-os"}},s=[],p={toc:s};function d(e){var t=e.components,i=(0,o.Z)(e,c);return(0,l.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"helyx-os-cloud-connector"},"HELYX-OS Cloud Connector"),(0,l.kt)("p",null,"HELYX-OS 2.4.0 Parallel Works Cloud Connector Guide"),(0,l.kt)("p",null,(0,l.kt)("img",{src:r(9963).Z,width:"776",height:"436"})),(0,l.kt)("p",null,"Note: None of the OpenFOAM related products and services offered by Parallel Works or ENGYS are approved or endorsed by OpenCFD Ltd. (ESI Group), producer and distributor of OpenFOAM and owner of the OPENFOAM\xae and OpenCFD\xae trademarks."),(0,l.kt)("p",null,"A step-by-step procedure is detailed here to setup and run a case in the cloud using Parallel Works via HELYX-OS.\\"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/working-with-clusters/helyx-os_cloud_connector/setup_pw_cloud_connector_in_helyx-os"},"Setup of the Parallel Works cloud connector in HELYX-OS")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/working-with-clusters/helyx-os_cloud_connector/activate_cloud_resources"},"Activation of Cloud Resources")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/working-with-clusters/helyx-os_cloud_connector/create_a_mesh_using_the_pw_cloud_connector"},"Creation a mesh using the Parallel Works cloud connector")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/working-with-clusters/helyx-os_cloud_connector/case_setup_using_the_pw_cloud_connector"},"Case Setup using the Parallel Works cloud connector")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/working-with-clusters/helyx-os_cloud_connector/solver_run_and_monitoring_using_the_pw_cloud_connector"},"Solver run and monitoring using the Parallel Works")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/working-with-clusters/helyx-os_cloud_connector/visualize_simulation_results"},"Visualization of simulation results")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/working-with-clusters/helyx-os_cloud_connector/troubleshooting"},"Troubleshooting"))))}d.isMDXComponent=!0},9963:function(e,t,r){t.Z=r.p+"assets/images/Helyx_Intro-99a9772b112c5f7a713b1342ec4d74f2.png"}}]);