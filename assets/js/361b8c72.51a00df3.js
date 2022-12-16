"use strict";(self.webpackChunkpworks_docs=self.webpackChunkpworks_docs||[]).push([[9088],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},318:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),l=["components"],a={},s="Visualize Simulation Results",u={unversionedId:"tutorials/helyx-os_cloud_connector/visualize_simulation_results",id:"tutorials/helyx-os_cloud_connector/visualize_simulation_results",title:"Visualize Simulation Results",description:"Once the simulation run has finished, click the ParaView button to load the case in the ParaView interface and visually inspect the results of the CFD simulation.\\",source:"@site/docs/tutorials/01_helyx-os_cloud_connector/06_visualize_simulation_results.md",sourceDirName:"tutorials/01_helyx-os_cloud_connector",slug:"/tutorials/helyx-os_cloud_connector/visualize_simulation_results",permalink:"/tutorials/helyx-os_cloud_connector/visualize_simulation_results",editUrl:"https://github.com/parallelworks/docs/tree/master/docs/tutorials/01_helyx-os_cloud_connector/06_visualize_simulation_results.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"docsSidebar",previous:{title:"Solver run and monitoring using the Parallel Works Cloud Connector",permalink:"/tutorials/helyx-os_cloud_connector/solver_run_and_monitoring_using_the_pw_cloud_connector"},next:{title:"Troubleshooting",permalink:"/tutorials/helyx-os_cloud_connector/troubleshooting"}},c=[],p={toc:c};function d(e){var t=e.components,a=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"visualize-simulation-results"},"Visualize Simulation Results"),(0,i.kt)("p",null,"Once the simulation run has finished, click the ParaView button to load the case in the ParaView interface and visually inspect the results of the CFD simulation.\\\nFor this purpose, in the Properties panel, make sure Decomposed Case option is selected to load the case in parallel as shown here."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(7516).Z,width:"593",height:"415"})),(0,i.kt)("p",null,"The Main Toolbar shown here allows for the creation of iso-surfaces, clipping planes, slices, glyphs and many more operations in ParaView."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(6850).Z,width:"825",height:"133"})),(0,i.kt)("p",null,"The image below displays an example of streamlines inside a mixer computed in parallel mode using the Parallel Works Cloud Connector available in HELYX-OS."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(7135).Z,width:"916",height:"516"})))}d.isMDXComponent=!0},7516:function(e,t,n){t.Z=n.p+"assets/images/Helyx_DecomposeCase-2beac2290c86d14295ddf09a409213d3.png"},6850:function(e,t,n){t.Z=n.p+"assets/images/Helyx_ParaviewToolbar-e78fcb6796ccf2ea8bbe217eb52136a4.png"},7135:function(e,t,n){t.Z=n.p+"assets/images/Helyx_Viz-385cde244601088df00ac372b12e2464.png"}}]);