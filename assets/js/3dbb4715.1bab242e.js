"use strict";(self.webpackChunkpworks_docs=self.webpackChunkpworks_docs||[]).push([[8748],{3905:function(e,t,r){r.d(t,{Zo:function(){return i},kt:function(){return f}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},c=Object.keys(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},i=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=u(r),f=n,h=d["".concat(s,".").concat(f)]||d[f]||p[f]||c;return r?o.createElement(h,a(a({ref:t},i),{},{components:r})):o.createElement(h,a({ref:t},i))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var u=2;u<c;u++)a[u]=r[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9713:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return i},default:function(){return d}});var o=r(7462),n=r(3366),c=(r(7294),r(3905)),a=["components"],l={},s="Activate Cloud Resources",u={unversionedId:"tutorials/helyx-os_cloud_connector/activate_cloud_resources",id:"tutorials/helyx-os_cloud_connector/activate_cloud_resources",title:"Activate Cloud Resources",description:"To complete the setup process, login to the Parallel Works Cloud platform and switch on the LINUXPOOL parallel resource available for the HELYX-OS workspace by pressing the power button in the image below.\\",source:"@site/docs/tutorials/01_helyx-os_cloud_connector/02_activate_cloud_resources.md",sourceDirName:"tutorials/01_helyx-os_cloud_connector",slug:"/tutorials/helyx-os_cloud_connector/activate_cloud_resources",permalink:"/tutorials/helyx-os_cloud_connector/activate_cloud_resources",editUrl:"https://github.com/parallelworks/docs/tree/master/docs/tutorials/01_helyx-os_cloud_connector/02_activate_cloud_resources.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"docsSidebar",previous:{title:"Setup the Parallel Works Cloud Connector in HELYX-OS",permalink:"/tutorials/helyx-os_cloud_connector/setup_pw_cloud_connector_in_helyx-os"},next:{title:"Create a Mesh using the Parallel Works Cloud Connector",permalink:"/tutorials/helyx-os_cloud_connector/create_a_mesh_using_the_pw_cloud_connector"}},i=[],p={toc:i};function d(e){var t=e.components,l=(0,n.Z)(e,a);return(0,c.kt)("wrapper",(0,o.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"activate-cloud-resources"},"Activate Cloud Resources"),(0,c.kt)("p",null,"To complete the setup process, login to the Parallel Works Cloud platform and switch on the LINUXPOOL parallel resource available for the HELYX-OS workspace by pressing the power button in the image below.\\\nOnce active, it will turn green. By default, these resources are configured to use two processors per worker, but can easily be configured in the Resources page. Detailed documentation on editing your resources can be found in the Parallel Works main documentation."),(0,c.kt)("p",null,(0,c.kt)("img",{src:r(4995).Z,width:"916",height:"592"})),(0,c.kt)("p",null,"Once the Parallel Works Cloud Connector has been setup as described in this section, HELYX-OS is now ready to submit runs from the local machine to the Parallel Works system."))}d.isMDXComponent=!0},4995:function(e,t,r){t.Z=r.p+"assets/images/Helyx_StartPWResources-ec315f871e3aad487b7dbbbd7b486126.png"}}]);