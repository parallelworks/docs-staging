"use strict";(self.webpackChunkpworks_docs=self.webpackChunkpworks_docs||[]).push([[7374],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return g}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),u=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return o.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(t),g=r,h=d["".concat(l,".").concat(g)]||d[g]||p[g]||i;return t?o.createElement(h,a(a({ref:n},c),{},{components:t})):o.createElement(h,a({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=t[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8785:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var o=t(7462),r=t(3366),i=(t(7294),t(3905)),a=["components"],s={description:"Introduction to using attached GPU node types with Slurm and Jupyter"},l="Using GPU Nodes on GCP",u={unversionedId:"working-with-clusters/using-gpu-nodes-on-gcp",id:"working-with-clusters/using-gpu-nodes-on-gcp",title:"Using GPU Nodes on GCP",description:"Introduction to using attached GPU node types with Slurm and Jupyter",source:"@site/docs/working-with-clusters/using-gpu-nodes-on-gcp.md",sourceDirName:"working-with-clusters",slug:"/working-with-clusters/using-gpu-nodes-on-gcp",permalink:"/working-with-clusters/using-gpu-nodes-on-gcp",editUrl:"https://github.com/parallelworks/docs/tree/master/docs/working-with-clusters/using-gpu-nodes-on-gcp.md",tags:[],version:"current",frontMatter:{description:"Introduction to using attached GPU node types with Slurm and Jupyter"},sidebar:"docsSidebar",previous:{title:"View Results",permalink:"/working-with-clusters/epa_swmm_sweep_tutorials/view_results"}},c=[{value:"<strong>Adding a new resource</strong>",id:"adding-a-new-resource",children:[],level:3},{value:"Accessing the cluster and GPU node",id:"accessing-the-cluster-and-gpu-node",children:[],level:3},{value:"Running the Jupyterlab workflow on a GPU node",id:"running-the-jupyterlab-workflow-on-a-gpu-node",children:[],level:3}],p={toc:c};function d(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"using-gpu-nodes-on-gcp"},"Using GPU Nodes on GCP"),(0,i.kt)("p",null,"This guide will walk you through creating a new cluster resource on the Parallel Works platform, and configuring it for use with attached GPU nodes running in Google Cloud"),(0,i.kt)("h3",{id:"adding-a-new-resource"},(0,i.kt)("strong",{parentName:"h3"},"Adding a new resource")),(0,i.kt)("p",null,"From the main PW page, click ",(0,i.kt)("inlineCode",{parentName:"p"},"Resources")," on the top banner. This will take your resource management page. From there, push the ",(0,i.kt)("inlineCode",{parentName:"p"},"+ Add Resource")," button, located near the top right of the window:"),(0,i.kt)("p",null,"![](/gitbook/assets/Screen Shot 2022-01-21 at 12.28.18 PM.png>)"),(0,i.kt)("p",null,"Clicking the ",(0,i.kt)("inlineCode",{parentName:"p"},"+ Add Resource")," button will navigate you to a simple web form that will prompt for basic information like resource name, a short description, and which CSP to use. You will also have the option to choose between ",(0,i.kt)("inlineCode",{parentName:"p"},"V1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"V2")," types. For now, let's select ",(0,i.kt)("inlineCode",{parentName:"p"},"Google Slurm V1"),". With the information provided, click ",(0,i.kt)("inlineCode",{parentName:"p"},"Add Resource"),"."," "),(0,i.kt)("p",null,"![](/gitbook/assets/Screen Shot 2022-01-21 at 1.30.45 PM.png>)"),(0,i.kt)("p",null,"After adding the resource, your browser should redirect you to the main configuration page for the cluster. Here you will need to configure the resource account, project, and other miscellaneous optional settings. To get a basic template of the Slurm configuration, you can click ",(0,i.kt)("inlineCode",{parentName:"p"},"restore configuration")," and then edit the template your desired configuration:"),(0,i.kt)("p",null,"![](/gitbook/assets/Screen Shot 2022-01-21 at 1.48.13 PM.png>)"),(0,i.kt)("p",null,"A sample Slurm configuration utilizing a single ",(0,i.kt)("inlineCode",{parentName:"p"},"a2-highgpu-8g")," compute node is shown below. This configuration is ideal if you only intend to use the cluster for Slurm jobs, and don't need to do anything computational on the controller itself. This example can be directly copy pasted into the ",(0,i.kt)("inlineCode",{parentName:"p"},"Slurm Configuration")," text box in your own cluster:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"resources:\n- name: __NAME__\n  type: slurm.jinja\n  properties:\n    cluster_name            : __NAME__\n    zone                    : us-central1-c\n    vpc_net                   : default\n    vpc_subnet                : default\n\n    controller_machine_type : c2-standard-8\n    controller_disk_size_gb   : 50\n    external_controller_ip    : True\n    controller_secondary_disk         : True\n    controller_secondary_disk_type    : pd-ssd\n    controller_secondary_disk_size_gb : 200\n\n    external_compute_ips      : False\n    suspend_time              : 300\n    partitions :\n      - name              : compute\n        machine_type      : a2-highgpu-8g\n        machine_type_is_gpu: True\n        max_node_count    : 1\n        zone              : us-central1-c\n        vpc_subnet                : default\n")),(0,i.kt)("p",null,"Now that our cluster is configured, we can click ",(0,i.kt)("inlineCode",{parentName:"p"},"Save Resource"),", located near the top of the page, and start it from the main ",(0,i.kt)("inlineCode",{parentName:"p"},"Compute")," page by clicking the power button. The cluster should be accessible in a few minutes."),(0,i.kt)("p",null,"![](/gitbook/assets/Screen Shot 2022-01-21 at 1.54.38 PM.png>)"),(0,i.kt)("h3",{id:"accessing-the-cluster-and-gpu-node"},"Accessing the cluster and GPU node"),(0,i.kt)("p",null,"When the cluster is ready for use, login to the controller using the PW built-in IDE, or an ssh client of your choice (if configured). From there, you're ready to submit jobs to the GPU node:"),(0,i.kt)("p",null,"![](/gitbook/assets/Screen Shot 2022-01-21 at 2.06.38 PM.png>)"),(0,i.kt)("p",null,"![](/gitbook/assets/Screen Shot 2022-01-21 at 2.13.40 PM.png>)"),(0,i.kt)("h3",{id:"running-the-jupyterlab-workflow-on-a-gpu-node"},"Running the Jupyterlab workflow on a GPU node"),(0,i.kt)("p",null,"If you want to run Jupyterlab on a GPU node, it is easiest to run it directly on the head node instead of as a Slurm job. For this exercise, start by creating a second resource named ",(0,i.kt)("inlineCode",{parentName:"p"},"gcluster_v1_jupyter_gpu")," with the same basic settings as the first. Since the Jupyterlab workflow requires an ssh tunnel to connect to it, you will also need to fill in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Access Public Key")," box with a ",(0,i.kt)("strong",{parentName:"p"},"public")," ssh key from your local workstation:"),(0,i.kt)("p",null,"![](/gitbook/assets/Screen Shot 2022-01-21 at 3.13.45 PM.png>)"),(0,i.kt)("p",null," ","Next, add a Slurm configuration specifying a GPU node as the controller:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"resources:\n- name: __NAME__\n  type: slurm.jinja\n  properties:\n    cluster_name            : __NAME__\n    zone                    : us-central1-c\n    vpc_net                   : default\n    vpc_subnet                : default\n\n    controller_machine_type : a2-highgpu-8g\n    controller_machine_type_is_gpu: True\n    controller_disk_size_gb   : 50\n    external_controller_ip    : True\n    controller_secondary_disk         : True\n    controller_secondary_disk_type    : pd-ssd\n    controller_secondary_disk_size_gb : 200\n\n    external_compute_ips      : False\n    suspend_time              : 300\n    partitions :\n      - name              : compute\n        machine_type      : a2-highgpu-8g\n        machine_type_is_gpu: True\n        max_node_count    : 1\n        zone              : us-central1-c\n        vpc_subnet                : default\n")),(0,i.kt)("p",null,"This configuration will allow you to access GPUs directly from the controller, and also submit jobs to a secondary GPU node in a Slurm cluster. ",(0,i.kt)("strong",{parentName:"p"},"To help minimize compute costs,")," ",(0,i.kt)("strong",{parentName:"p"},"This configuration should only be used if you intend to use the GPUs directly on the head node.")," If you only need access to GPUs on the batch nodes, you should select a smaller instance type for the controller, as shown in the first example of this guide."))}d.isMDXComponent=!0}}]);