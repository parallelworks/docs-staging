"use strict";(self.webpackChunkpworks_docs=self.webpackChunkpworks_docs||[]).push([[755],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),u=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=u(r),d=n,g=f["".concat(c,".").concat(d)]||f[d]||p[d]||a;return r?o.createElement(g,s(s({ref:t},l),{},{components:r})):o.createElement(g,s({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var u=2;u<a;u++)s[u]=r[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6249:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return f}});var o=r(7462),n=r(3366),a=(r(7294),r(3905)),s=["components"],i={sidebar_position:4,label:"Creating Clusters"},c="Creating Clusters",u={unversionedId:"creating_clusters",id:"creating_clusters",title:"Creating Clusters",description:"Any work you do on the PW platform will need to be completed on a resource. If you don\u2019t have any pre-configured resources that fit your needs for the project at hand, you can create a new one.",source:"@site/docs/creating_clusters.md",sourceDirName:".",slug:"/creating_clusters",permalink:"/creating_clusters",editUrl:"https://github.com/parallelworks/docs/tree/master/docs/creating_clusters.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,label:"Creating Clusters"},sidebar:"docsSidebar",previous:{title:"Navigating the Platform",permalink:"/navigating_the_platform"},next:{title:"Starting and Stopping Clusters",permalink:"/starting_stopping_clusters"}},l=[{value:"Which type of resource should I use?",id:"which-type-of-resource-should-i-use",children:[],level:2},{value:"How should I configure my resource?",id:"how-should-i-configure-my-resource",children:[],level:2}],p={toc:l};function f(e){var t=e.components,i=(0,n.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"creating-clusters"},"Creating Clusters"),(0,a.kt)("p",null,"Any work you do on the PW platform will need to be completed on a resource. If you don\u2019t have any pre-configured resources that fit your needs for the project at hand, you can create a new one.  "),(0,a.kt)("p",null,"Navigate to the ",(0,a.kt)("strong",{parentName:"p"},"Resources")," tab and select ",(0,a.kt)("strong",{parentName:"p"},"+ Add Resource"),". "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Screenshot of the Resources tab immediately after selecting Resources.",src:r(864).Z,width:"2438",height:"1523"})),(0,a.kt)("p",null,"Now you can select the type of resource you need from the available elastic clusters and elastic pools. Once you choose your type of resource, you can create a cluster on a specific cloud service provider (CSP). For example, if you want to create an elastic cluster, you can do so with resources from AWS, Google, or Azure. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Screenshot of the Resources tab immediately after selecting the + Add Resource button.",src:r(3178).Z,width:"1998",height:"1406"})),(0,a.kt)("p",null,"When creating a cluster, you must enter information into the fields for ",(0,a.kt)("strong",{parentName:"p"},"Pool Name"),", ",(0,a.kt)("strong",{parentName:"p"},"Short description"),", and ",(0,a.kt)("strong",{parentName:"p"},"Tags"),". This information will be especially useful later if you or your organization use many clusters. "),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Display Name")," and ",(0,a.kt)("strong",{parentName:"p"},"Thumbnail")," are both optional descriptors. If you leave ",(0,a.kt)("strong",{parentName:"p"},"Display Name")," blank, the cluster will default to the ",(0,a.kt)("strong",{parentName:"p"},"Pool Name")," text. If you don\u2019t upload a thumbnail image, the cluster\u2019s icon will default to the icon of the CSP you\u2019ve chosen. "),(0,a.kt)("p",null,"After you\u2019ve entered information into all the fields, select ",(0,a.kt)("strong",{parentName:"p"},"Add Resource"),". Your resource creation will be confirmed on the next page with the message ",(0,a.kt)("em",{parentName:"p"},"Resource created"),". You can configure your resource from this page. For more information on configuring clusters generally or what you need to configure clusters on specific CSPs, see ",(0,a.kt)("strong",{parentName:"p"},"Configuring Clusters"),". "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Screenshot of the Resources tab after a resource has been created.",src:r(5056).Z,width:"2519",height:"1516"})),(0,a.kt)("p",null,"Your new cluster will also appear in the ",(0,a.kt)("strong",{parentName:"p"},"Computing Resources")," box in the ",(0,a.kt)("strong",{parentName:"p"},"Compute")," tab. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Screenshot of a new resource appearing in the Compute tab.",src:r(9236).Z,width:"1948",height:"562"})),(0,a.kt)("h2",{id:"which-type-of-resource-should-i-use"},"Which type of resource should I use?"),(0,a.kt)("p",null,"If you\u2019re creating a new resource, an elastic cluster is typically the best choice. Users who are familiar with Slurm will be more comfortable using elastic clusters instead of elastic pools. Additionally, newer PW workflows run exclusively on elastic clusters. For these reasons, we consider elastic pools to be a legacy feature and discourage users from choosing them to create new resources."),(0,a.kt)("p",null,"As for which CSP to choose, that largely depends on your organization, your workflow needs, and whether you or your organization already have a cloud account from a specific CSP. Many users without CSP restrictions choose Google clusters because of their quick start-up times (see ",(0,a.kt)("strong",{parentName:"p"},"Starting and Stopping Clusters")," for more information). "),(0,a.kt)("h2",{id:"how-should-i-configure-my-resource"},"How should I configure my resource?"),(0,a.kt)("p",null,"If you\u2019re simply testing resources or if your organization has not provided specific configuration settings for your project, we recommend using the default configuration settings. For more information, see ",(0,a.kt)("strong",{parentName:"p"},"Configuring Clusters > Default Pool Configuration"),"."))}f.isMDXComponent=!0},864:function(e,t,r){t.Z=r.p+"assets/images/resources_tab_1_dec22-ff2f9501c69c413aab7769fcd50b91c9.png"},3178:function(e,t,r){t.Z=r.p+"assets/images/resources_tab_2_dec22-d7cc314ec377f8319430f6826e15f313.png"},5056:function(e,t,r){t.Z=r.p+"assets/images/resources_tab_3_dec22-61116b64eebfae5f8252a8d41ab6c21c.png"},9236:function(e,t,r){t.Z=r.p+"assets/images/resources_tab_4_dec22-9a2fbbc464133c2cf661fbf0ca8a2f6a.png"}}]);