"use strict";(self.webpackChunkpworks_docs=self.webpackChunkpworks_docs||[]).push([[194],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return h}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=u(n),p=i,h=c["".concat(l,".").concat(p)]||c[p]||d[p]||a;return n?o.createElement(h,r(r({ref:t},m),{},{components:n})):o.createElement(h,r({ref:t},m))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,r[1]=s;for(var u=2;u<a;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8753:function(e,t,n){n.r(t),n.d(t,{Highlight:function(){return m},assets:function(){return l},contentTitle:function(){return r},default:function(){return d},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return u}});var o=n(3117),i=(n(7294),n(3905));const a={sidebar_position:3},r="Submitting Jobs",s={unversionedId:"interacting-with-clusters/submitting-jobs",id:"interacting-with-clusters/submitting-jobs",title:"Submitting Jobs",description:"There are two ways you can submit jobs to a cluster: by using workflows or through any terminal/command-line interface.",source:"@site/docs/interacting-with-clusters/submitting-jobs.md",sourceDirName:"interacting-with-clusters",slug:"/interacting-with-clusters/submitting-jobs",permalink:"/interacting-with-clusters/submitting-jobs",draft:!1,editUrl:"https://github.com/parallelworks/docs/tree/master/docs/interacting-with-clusters/submitting-jobs.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Logging in to the Controller",permalink:"/interacting-with-clusters/logging-in-controller"},next:{title:"To/From Cloud Storage",permalink:"/interacting-with-clusters/transferring-data/to-from-cloud-storage"}},l={},u=[{value:"Submitting Jobs via Workflows",id:"submitting-jobs-via-workflows",level:2},{value:"Submitting Jobs via Slurm",id:"submitting-jobs-via-slurm",level:2},{value:"Common Slurm Commands",id:"common-slurm-commands",level:2},{value:"Job Management",id:"job-management",level:3},{value:'<Highlight color="#ff5800">salloc</Highlight>',id:"salloc",level:4},{value:'<Highlight color="#ff5800">sbatch</Highlight>',id:"sbatch",level:4},{value:'<Highlight color="#ff5800">srun</Highlight>',id:"srun",level:4},{value:'<Highlight color="#ff5800">scancel</Highlight>',id:"scancel",level:4},{value:"Cluster Management",id:"cluster-management",level:3},{value:'<Highlight color="#ff5800">sinfo</Highlight>',id:"sinfo",level:4},{value:'<Highlight color="#ff5800">squeue</Highlight>',id:"squeue",level:4},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:'<Highlight color="#ff5800">sacct</Highlight>',id:"sacct",level:4},{value:'<Highlight color="#ff5800">scontrol</Highlight>',id:"scontrol",level:4}],m=e=>{let{children:t,color:n}=e;return(0,i.kt)("span",{style:{backgroundColor:n,borderRadius:"25px",color:"#fff",padding:".65rem"}},t)},c={toc:u,Highlight:m};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"submitting-jobs"},"Submitting Jobs"),(0,i.kt)("p",null,"There are two ways you can submit jobs to a cluster: by using workflows or through any terminal/command-line interface."),(0,i.kt)("h2",{id:"submitting-jobs-via-workflows"},"Submitting Jobs via Workflows"),(0,i.kt)("p",null,"After you\u2019ve started a cluster, navigate to the ",(0,i.kt)("strong",{parentName:"p"},"Workflows")," tab and select the workflow you\u2019d like to use. If you haven\u2019t added any workflows, you can select one from the Marketplace (select ",(0,i.kt)("strong",{parentName:"p"},"your username > Marketplace"),")."),(0,i.kt)("p",null,"When you click the name of your workflow, a settings box will open. In the ",(0,i.kt)("strong",{parentName:"p"},"Run Workflow")," tab, enter any necessary parameters, then click the cloud icon ",(0,i.kt)("img",{alt:"Docusaurus themed image",src:n(5196).Z+"#gh-light-mode-only",width:"16",height:"13"}),(0,i.kt)("img",{alt:"Docusaurus themed image",src:n(6624).Z+"#gh-dark-mode-only",width:"16",height:"13"}),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot of configuration settings for the testlaunch workflow.",src:n(2349).Z,width:"1884",height:"1088"})),(0,i.kt)("p",null,"A new window for ",(0,i.kt)("strong",{parentName:"p"},"Resource Configuration")," will open. Enter any necessary variables, then use the ",(0,i.kt)("strong",{parentName:"p"},"Default Resource")," dropdown to select a cluster that\u2019s already running. Press the X in the upper-left corner to save the settings."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot of Resource Configuration settings inside a workflow\u2019s settings.",src:n(7798).Z,width:"1888",height:"1328"})),(0,i.kt)("p",null,"Click ",(0,i.kt)("strong",{parentName:"p"},"Execute"),". You\u2019ll see a green box with the message ",(0,i.kt)("em",{parentName:"p"},"1 job has been successfully added to the queue"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot of a job submission message after clicking the Execute button on a workflow.",src:n(402).Z,width:"1884",height:"1008"})),(0,i.kt)("p",null,"Now you can navigate to the ",(0,i.kt)("strong",{parentName:"p"},"Compute")," tab to check your job\u2019s progress. The ",(0,i.kt)("strong",{parentName:"p"},"Workflow Monitor")," box displays jobs in descending order, starting with the most recently submitted."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot of a workflow monitor with completed jobs and jobs with errors.",src:n(2871).Z,width:"1864",height:"1186"})),(0,i.kt)("p",null,"Once a job is completed, you can go to the ",(0,i.kt)("strong",{parentName:"p"},"jobs")," folder in the IDE pane to check your job\u2019s output with the ",(0,i.kt)("inlineCode",{parentName:"p"},"std.out")," file."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot of an std.out file\u2019s contents in the full-screen IDE on the platform.",src:n(1340).Z,width:"2396",height:"898"})),(0,i.kt)("admonition",{title:"Note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The example workflow used here is ",(0,i.kt)("inlineCode",{parentName:"p"},"testlaunch"),", which has only two parameters meant for testing purposes. Many workflows on the PW platform have additional parameters, especially those that execute multiple or more complex tasks. If you need help with setting parameters, you can reach out to your admin or to us at any time.")),(0,i.kt)("h2",{id:"submitting-jobs-via-slurm"},"Submitting Jobs via Slurm"),(0,i.kt)("p",null,"After you\u2019ve started a cluster, log in to the controller with your preferred method. The quickest way to submit a job is to transfer your file(s) to the cluster, then run the command ",(0,i.kt)("inlineCode",{parentName:"p"},"sbatch"),"."),(0,i.kt)("p",null,"In this example, we submitted the file ",(0,i.kt)("inlineCode",{parentName:"p"},"demo_test1.sbatch")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"sbatch"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"[demo@democluster-60 ~]$ ls\ndemo_test1.sbatch\n[demo@democluster-60 ~]$ sbatch demo_test1.sbatch\nSubmitted batch job 2\n")),(0,i.kt)("p",null,"After submitting a job, you can watch its progress with the command ",(0,i.kt)("inlineCode",{parentName:"p"},"watch squeue"),", which will update every two seconds with the job's status in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ST")," column:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"Every 2.0s: squeue\n\nJOBID PARTITION     NAME     USER ST       TIME  NODES NODELIST(REASON)\n    4 test.part     test     demo CF       0:08      2 demo-democluster-00060-1-[0001-0002]\n\n")),(0,i.kt)("p",null,"You can also use ",(0,i.kt)("inlineCode",{parentName:"p"},"watch 'sinfo;echo;squeue'")," if you want to see general cluster information in addition to your job's progress:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"Every 2.0s: sinfo; echo; squeue\n\nPARTITION        AVAIL  TIMELIMIT  NODES  STATE NODELIST\ntest.partition1*    up   infinite      2   mix# demo-democluster-00060-1-[0001-0002]\ntest.partition1*    up   infinite      3  idle~ demo-democluster-00060-1-[0003-0005]\ntest.partition2     up   infinite      5  idle~ demo-democluster-00060-2-[0001-0005]\n\n         JOBID PARTITION     NAME     USER ST       TIME  NODES NODELIST(REASON)\n             4 test.part     test     demo CF       0:26      2 demo-democluster-00060-1-[0001-0002]\n")),(0,i.kt)("p",null,"When using ",(0,i.kt)("inlineCode",{parentName:"p"},"watch squeue")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"watch 'sinfo;echo;squeue'"),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"ST")," column will show ",(0,i.kt)("inlineCode",{parentName:"p"},"CF")," while the node(s) configure. All of the rows beneath ",(0,i.kt)("inlineCode",{parentName:"p"},"JOBID")," will clear when your job is finished:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"Every 2.0s: sinfo; echo; squeue\n\nPARTITION        AVAIL  TIMELIMIT  NODES  STATE NODELIST\ntest.partition1*    up   infinite      2  idle% demo-democluster-00060-1-[0001-0002]\ntest.partition1*    up   infinite      3  idle~ demo-democluster-00060-1-[0003-0005]\ntest.partition2     up   infinite      5  idle~ demo-democluster-00060-2-[0001-0005]\n\n         JOBID PARTITION     NAME     USER ST       TIME  NODES NODELIST(REASON)\n\n")),(0,i.kt)("p",null,"Once the job is finished, you can check its output with ",(0,i.kt)("inlineCode",{parentName:"p"},"cat file_name"),". Our file ",(0,i.kt)("inlineCode",{parentName:"p"},"demo_test1.sbatch")," inlcuded instructions to send our completed job's data to an ",(0,i.kt)("inlineCode",{parentName:"p"},"std.out")," file and any errors to an ",(0,i.kt)("inlineCode",{parentName:"p"},"std.err")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"[demo@democluster-60 ~]$ ls\ndemo_test1.sbatch  std.err  std.out\n[demo@democluster-60 ~]$ cat std.err\n[demo@democluster-60 ~]$ cat std.out\ndemo-democluster-00060-1-0001\ndemo-democluster-00060-1-0001\ndemo-democluster-00060-1-0002\ndemo-democluster-00060-1-0002\n")),(0,i.kt)("p",null,"Using ",(0,i.kt)("inlineCode",{parentName:"p"},"cat std.err")," didn\u2019t return anything because the job executed without errors."),(0,i.kt)("h2",{id:"common-slurm-commands"},"Common Slurm Commands"),(0,i.kt)("p",null,"This section gives a quick overview of the commands you\u2019ll use most often when interacting with clusters. You can use any of these commands in any terminal after logging in to a controller node."),(0,i.kt)("p",null,"Because the PW platform uses Slurm to manage jobs, you can use any of their system commands. For an extensive list of those options, see Slurm\u2019s command guide ",(0,i.kt)("a",{parentName:"p",href:"https://slurm.schedmd.com/quickstart.html#commands"},"here"),". You can also enter ",(0,i.kt)("inlineCode",{parentName:"p"},"man")," in front of any command (such as ",(0,i.kt)("inlineCode",{parentName:"p"},"man sacct"),") to see its description and a list of other available commands in Slurm\u2019s virtual manual."),(0,i.kt)("admonition",{title:"Note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"When we say \u201cjob ID\u201d in this section, we mean the job ID that Slurm assigns to your work, which will appear when running many of these commands. ID numbers in the ",(0,i.kt)("strong",{parentName:"p"},"Worflow Monitor")," and the ",(0,i.kt)("strong",{parentName:"p"},"jobs")," folder on the PW platform act as a separate identifier to help us track how many jobs we\u2019ve ever run on the platform. Using any of the commands in this section will generate a new Slurm job ID.")),(0,i.kt)("h3",{id:"job-management"},"Job Management"),(0,i.kt)("h4",{id:"salloc"},(0,i.kt)(m,{color:"#ff5800",mdxType:"Highlight"},"salloc")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"salloc")," retrieves resources for your job without executing any tasks."),(0,i.kt)("p",null,"Using this command retrieves resources before you need them by signaling the system to reserve a specified number of nodes. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"salloc -N 2")," will reserve two compute nodes, for a total of three nodes, including the controller."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"salloc")," is useful if you\u2019re sharing a cluster with other users in your organization: using this command means that once a job is finished, the allocated nodes will remain on reserve for your use until you disconnect from the cluster (meaning that your wait times will be shorter because another user cannot take control of your allocated nodes, so you won\u2019t have to wait for more nodes to become available or wait for them to start once they\u2019re available)."),(0,i.kt)("h4",{id:"sbatch"},(0,i.kt)(m,{color:"#ff5800",mdxType:"Highlight"},"sbatch")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"sbatch")," submits a job script that will execute later. You can also configure nodes with ",(0,i.kt)("inlineCode",{parentName:"p"},"sbatch")," by adding these options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--n-tasks-per-node")," to specify the number of CPUs"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-t")," to specify the maximum amount of time you want these resources to run with the format of ",(0,i.kt)("inlineCode",{parentName:"li"},"0:0:0")," for hours, minutes, and seconds")),(0,i.kt)("p",null,"For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"sbatch demo_test1.sbatch --n-tasks-per-node 5 -t 3:0:0")," would run the file ",(0,i.kt)("inlineCode",{parentName:"p"},"demo_test1.sbatch")," and request 5 CPUs for 3 hours of maximum run time."),(0,i.kt)("h4",{id:"srun"},(0,i.kt)(m,{color:"#ff5800",mdxType:"Highlight"},"srun")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"srun")," executes a job script. You can use the same options from ",(0,i.kt)("inlineCode",{parentName:"p"},"salloc")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"sbatch")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"srun"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-N")," to specify the number of nodes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--n-tasks-per-node")," to specify the number of CPUs"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-t")," to specify the maximum amount of time you want these resources to run")),(0,i.kt)("p",null,"For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"srun -N 1 --pty bash")," would request 1 compute node and open a pseudoterminal, creating an interactive command-line session."),(0,i.kt)("h4",{id:"scancel"},(0,i.kt)(m,{color:"#ff5800",mdxType:"Highlight"},"scancel")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"scancel")," paired with a job ID ends a pending or running job or job step. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"[demo@democluster-60 ~]$ sbatch demo_test1.sbatch\nSubmitted batch job 6\n[demo@democluster-60 ~]$ scancel\nscancel: error: No job identification provided\n[demo@democluster-60 ~]$ scancel 6\n")),(0,i.kt)("p",null,"If you cancel a job, it will disappear from your queue."),(0,i.kt)("h3",{id:"cluster-management"},"Cluster Management"),(0,i.kt)("h4",{id:"sinfo"},(0,i.kt)(m,{color:"#ff5800",mdxType:"Highlight"},"sinfo")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"sinfo")," shows information about the nodes and partitions you\u2019re using. By default, ",(0,i.kt)("inlineCode",{parentName:"p"},"sinfo")," displays partition names, availability, time limit, the number of nodes, state, and the node\u2019s ID number (which is displayed as ",(0,i.kt)("inlineCode",{parentName:"p"},"username-democluster-00019-1-[0001-0005]"),")."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Please note that if you enter ",(0,i.kt)("inlineCode",{parentName:"li"},"sinfo")," without setting up partitions, you\u2019ll receive the error message ",(0,i.kt)("inlineCode",{parentName:"li"},"slurm_load_partitions: Unable to contact slurm controller (connect failure)"),".")),(0,i.kt)("h4",{id:"squeue"},(0,i.kt)(m,{color:"#ff5800",mdxType:"Highlight"},"squeue")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"squeue")," shows a list of running and pending jobs. By default, ",(0,i.kt)("inlineCode",{parentName:"p"},"squeue")," shows job ID number, partition, username, job status, number of nodes, and node names for all queued and running jobs. You can also use these commands to adjust ",(0,i.kt)("inlineCode",{parentName:"p"},"squeue"),"\u2019s output:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--user")," to see only one user\u2019s jobs, such as ",(0,i.kt)("inlineCode",{parentName:"li"},"--user=yourPWusername")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--long")," to show non-abbreviated information and add the field ",(0,i.kt)("inlineCode",{parentName:"li"},"timelimit")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--start")," to estimate a job\u2019s start time")),(0,i.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("h4",{id:"sacct"},(0,i.kt)(m,{color:"#ff5800",mdxType:"Highlight"},"sacct")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"sacct"),"\xa0shows a summary of users as well as completed and running jobs. Using this command will display a table with a job\u2019s ID number, name, partition, status, exit code, whose account it\u2019s running on, and how many CPUs it\u2019s using."),(0,i.kt)("p",null,"For troubleshooting purposes, the ",(0,i.kt)("inlineCode",{parentName:"p"},"State")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ExitCode")," fields from running ",(0,i.kt)("inlineCode",{parentName:"p"},"sacct")," are especially useful for determining whether a node has failed and, if so, why. If you reach out to us for help, one of our support engineers may ask you for the information you see after running ",(0,i.kt)("inlineCode",{parentName:"p"},"sacct"),"."),(0,i.kt)("h4",{id:"scontrol"},(0,i.kt)(m,{color:"#ff5800",mdxType:"Highlight"},"scontrol")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"scontrol")," can delegate commands to specific job IDs and nodes. Please note that many ",(0,i.kt)("inlineCode",{parentName:"p"},"scontrol")," commands can only be executed as user root. You can use these commands with a job ID to adjust ",(0,i.kt)("inlineCode",{parentName:"p"},"scontrol"),"\u2019s output:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"suspend")," to pause a job's processes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"resume")," to continue a job's processes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hold")," to make a job a lower priority, putting it \u201con hold\u201d so higher priority jobs will run first"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"release")," to remove a job from the hold list"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"show job")," to get detailed information about a job")))}d.isMDXComponent=!0},5196:function(e,t){t.Z="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9ImN1cnJlbnRDb2xvciIgZmlsbD0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjAiIHZpZXdCb3g9IjAgMCA2NDAgNTEyIiBoZWlnaHQ9Ii44ZW0iIHdpZHRoPSIxZW0iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUzNy42IDIyNi42YzQuMS0xMC43IDYuNC0yMi40IDYuNC0zNC42IDAtNTMtNDMtOTYtOTYtOTYtMTkuNyAwLTM4LjEgNi01My4zIDE2LjJDMzY3IDY0LjIgMzE1LjMgMzIgMjU2IDMyYy04OC40IDAtMTYwIDcxLjYtMTYwIDE2MCAwIDIuNy4xIDUuNC4yIDguMUM0MC4yIDIxOS44IDAgMjczLjIgMCAzMzZjMCA3OS41IDY0LjUgMTQ0IDE0NCAxNDRoMzY4YzcwLjcgMCAxMjgtNTcuMyAxMjgtMTI4IDAtNjEuOS00NC0xMTMuNi0xMDIuNC0xMjUuNHoiPjwvcGF0aD48L3N2Zz4="},6624:function(e,t){t.Z="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDY0MCA1MTIiIGhlaWdodD0iLjhlbSIgd2lkdGg9IjFlbSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTM3LjYgMjI2LjZjNC4xLTEwLjcgNi40LTIyLjQgNi40LTM0LjYgMC01My00My05Ni05Ni05Ni0xOS43IDAtMzguMSA2LTUzLjMgMTYuMkMzNjcgNjQuMiAzMTUuMyAzMiAyNTYgMzJjLTg4LjQgMC0xNjAgNzEuNi0xNjAgMTYwIDAgMi43LjEgNS40LjIgOC4xQzQwLjIgMjE5LjggMCAyNzMuMiAwIDMzNmMwIDc5LjUgNjQuNSAxNDQgMTQ0IDE0NGgzNjhjNzAuNyAwIDEyOC01Ny4zIDEyOC0xMjggMC02MS45LTQ0LTExMy42LTEwMi40LTEyNS40eiI+PC9wYXRoPjwvc3ZnPg=="},2349:function(e,t,n){t.Z=n.p+"assets/images/submitting_jobs_1_jan23-f3798f5a65b436b85a00e007930ef2eb.png"},7798:function(e,t,n){t.Z=n.p+"assets/images/submitting_jobs_2_jan23-e70cc1a08dac7804c7ebb0838c419e47.png"},402:function(e,t,n){t.Z=n.p+"assets/images/submitting_jobs_3_jan23-2466cd3e543fbab9eed7c28081102bff.png"},2871:function(e,t,n){t.Z=n.p+"assets/images/submitting_jobs_4_jan23-094f4144906d5bd0f897c1c182b86011.png"},1340:function(e,t,n){t.Z=n.p+"assets/images/submitting_jobs_5_jan23-2997c4b4d3450ef8f2e254094149cac4.png"}}]);