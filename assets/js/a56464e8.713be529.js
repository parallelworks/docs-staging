"use strict";(self.webpackChunkpworks_docs=self.webpackChunkpworks_docs||[]).push([[7090],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=p(r),m=o,d=f["".concat(s,".").concat(m)]||f[m]||c[m]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3833:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return f}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={},s="OpenFOAM Parameter Sweep Demo",p={unversionedId:"tutorials/openfoam_on_parallel_works/openfoam_parameter_sweep_demo",id:"tutorials/openfoam_on_parallel_works/openfoam_parameter_sweep_demo",title:"OpenFOAM Parameter Sweep Demo",description:"The OpenFOAM Parameter Sweep workflow is primarily for demonstrative purposes to teach users the basic functions for executing a workflow. All required inputs will be provided for you in your OpenFOAM Parameter Sweep Workspace.\\",source:"@site/docs/tutorials/02_openfoam_on_parallel_works/01_openfoam_parameter_sweep_demo.md",sourceDirName:"tutorials/02_openfoam_on_parallel_works",slug:"/tutorials/openfoam_on_parallel_works/openfoam_parameter_sweep_demo",permalink:"/tutorials/openfoam_on_parallel_works/openfoam_parameter_sweep_demo",editUrl:"https://github.com/parallelworks/docs/tree/master/docs/tutorials/02_openfoam_on_parallel_works/01_openfoam_parameter_sweep_demo.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"docsSidebar",previous:{title:"OpenFOAM on Parallel Works",permalink:"/tutorials/openfoam_on_parallel_works/"},next:{title:"OpenFOAM Single Case Runner",permalink:"/tutorials/openfoam_on_parallel_works/openfoam_single_case_runner"}},u=[{value:"Required Inputs",id:"required-inputs",children:[],level:2},{value:"Select Workflow",id:"select-workflow",children:[],level:2},{value:"Select Inputs",id:"select-inputs",children:[],level:2},{value:"Execute Workflow",id:"execute-workflow",children:[],level:2},{value:"View Results in Browser",id:"view-results-in-browser",children:[],level:2},{value:"Customize this Study!",id:"customize-this-study",children:[],level:2}],c={toc:u};function f(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"openfoam-parameter-sweep-demo"},"OpenFOAM Parameter Sweep Demo"),(0,a.kt)("p",null,"The OpenFOAM Parameter Sweep workflow is primarily for demonstrative purposes to teach users the basic functions for executing a workflow. All required inputs will be provided for you in your OpenFOAM Parameter Sweep Workspace.\\\n\\\nThe parameter sweep capability can be customized to other geometries with a modest effort. Contact the Parallel Works team to learn more about using this advanced capability for your projects."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(3189).Z,width:"439",height:"347"})),(0,a.kt)("h2",{id:"required-inputs"},"Required Inputs"),(0,a.kt)("p",null,"There are three required inputs for the Parameter Sweep workflow:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"A tar file of the case inputs\\")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"A Sweep file (3 runs, 40 runs or 80 runs) that indicates the minimum, maximum and interval for the parametized inlet Length variable\\"))),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(9184).Z,width:"660",height:"182"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"blockMeshDict.template file. This is a standard OpenFOAM Mesh Dict file that has been edited to parameterize the inlet Length variable of the input")),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(6587).Z,width:"660",height:"600"})),(0,a.kt)("h2",{id:"select-workflow"},"Select Workflow"),(0,a.kt)("p",null,"After starting your resources, select the OpenFOAM sweep tile under Parallel Workflows to access the workflow execution interface (see full title with mouse-over)"),(0,a.kt)("h2",{id:"select-inputs"},"Select Inputs"),(0,a.kt)("p",null,"Using the drop downs in the workflow execution interface, select the input files for each required input.\\\nThe platform will automatically match the input files from your active workspace based on file type.\\\nDouble check each file matches appropriately, select desired number of runs to execute via the .sweep file, and click Execute to launch your study.\\"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(3606).Z,width:"1089",height:"570"})),(0,a.kt)("h2",{id:"execute-workflow"},"Execute Workflow"),(0,a.kt)("p",null,"Upon execution of your study, the Parallel Works workflow execution engine automatically spins up a cluster and distributes the many runs of the sweep study across these workers for processing in parallel\\"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(1306).Z,width:"417",height:"430"})),(0,a.kt)("p",null,"Upon completion of the study, the results will display as complete (in green) in the workspace under which it was launched."),(0,a.kt)("h2",{id:"view-results-in-browser"},"View Results in Browser"),(0,a.kt)("p",null,"Select the eye icon next to the result output to view thumbnail images of each run executed in your sweep.\\\nClick desired thumbnail to view further and the result will open up a larger image in a new tab."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(7162).Z,width:"699",height:"447"})),(0,a.kt)("h2",{id:"customize-this-study"},"Customize this Study!"),(0,a.kt)("p",null,"While this specific workflow cannot be used on a different mesh input, the Parallel Works team can help you create your own parametric open foam workflow.\\\nContact the team at ",(0,a.kt)("a",{parentName:"p",href:"mailto:info@parallelworks.com"},"info@parallelworks.com")," to schedule a time to review your set up."))}f.isMDXComponent=!0},9184:function(e,t,r){t.Z=r.p+"assets/images/OpenFOAM_SweepFile-d32d34d42052cb0eef08205d3023af5c.png"},3189:function(e,t,r){t.Z=r.p+"assets/images/OpenFOAM_SweepIcon-ad8b43d6c4aaec8e3a565977c600384f.png"},3606:function(e,t,r){t.Z=r.p+"assets/images/OpenFOAM_SweepInputs-9eb54673331300df061d40c0797d37ca.png"},7162:function(e,t,r){t.Z=r.p+"assets/images/OpenFOAM_SweepResult-627da37df0ebf24bfca5b1e814fffd07.png"},1306:function(e,t,r){t.Z=r.p+"assets/images/OpenFOAM_SweepStatus-33202659e2f22b51a50278e04dcb6d5a.png"},6587:function(e,t,r){t.Z=r.p+"assets/images/OpenFOAM_Sweeptemplate-0b2dc61e1076c99cd57981ac5ff40719.png"}}]);