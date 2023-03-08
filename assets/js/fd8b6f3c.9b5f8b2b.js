"use strict";(self.webpackChunkpworks_docs=self.webpackChunkpworks_docs||[]).push([[253],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=i,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4543:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return r},default:function(){return u},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l}});var a=n(3117),i=(n(7294),n(3905));const o={sidebar_position:1},r="About CSP Keys and Secrets",s={unversionedId:"managing-organizations/about-keys-secrets",id:"managing-organizations/about-keys-secrets",title:"About CSP Keys and Secrets",description:"Each of the three main CSPs use keys and secret keys that function similarly to SSH keys. This page goes over key-sharing best practices, including how to create keys and safely manage access between users.",source:"@site/docs/managing-organizations/about-keys-secrets.md",sourceDirName:"managing-organizations",slug:"/managing-organizations/about-keys-secrets",permalink:"/managing-organizations/about-keys-secrets",draft:!1,editUrl:"https://github.com/parallelworks/docs/tree/master/docs/managing-organizations/about-keys-secrets.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Getting Support",permalink:"/getting-support"},next:{title:"Setting Up AWS Credentials",permalink:"/managing-organizations/setting-aws-credentials"}},c={},l=[{value:"Best Practices for Sharing Keys",id:"best-practices-for-sharing-keys",level:2},{value:"Create Public/Private Key Pair &amp; Certificate",id:"create-publicprivate-key-pair--certificate",level:3},{value:"Upload the Public Key to a Service Account",id:"upload-the-public-key-to-a-service-account",level:3},{value:"Authenticate With the Private Key",id:"authenticate-with-the-private-key",level:3},{value:"Authenticate",id:"authenticate",level:3}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"about-csp-keys-and-secrets"},"About CSP Keys and Secrets"),(0,i.kt)("p",null,"Each of the three main CSPs use keys and secret keys that function similarly to SSH keys. This page goes over key-sharing best practices, including how to create keys and safely manage access between users. "),(0,i.kt)("h2",{id:"best-practices-for-sharing-keys"},"Best Practices for Sharing Keys"),(0,i.kt)("p",null,"It\u2019s often useful to share service account keys between individuals in the PW organization.\xa0 For example, an employee with cloud console access may want to share a service account key with an intern, but the intern shouldn\u2019t be granted console access."),(0,i.kt)("p",null,"Below is an example for how to share keys without actually transferring the whole key itself. This process is based on ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys"},"Google\u2019s best practice documentation"),"."),(0,i.kt)("h3",{id:"create-publicprivate-key-pair--certificate"},"Create Public/Private Key Pair & Certificate"),(0,i.kt)("p",null,"It\u2019s not a good idea to share keys among users.\xa0Instead, a user that wants to access a service account but does not have cloud console access should create a public/private key pair, then send the public key to someone who does have cloud console access and can associate the key with a service account. Then the original key owner can use the private key to access the service account."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/creating-managing-service-account-keys#iam-service-accounts-upload-gcloud"},"Google suggests using OpenSSL")," to locally create the publick/private key pair:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},'openssl req -x509 -nodes -newkey rsa:2048 -days 365 \\\n\n    -keyout /path/to/private_key.pem \\\n\n    -out /path/to/public_key.pem \\\n\n    -subj "/CN=unused"\n')),(0,i.kt)("p",null,"For additional security, the user should also create a self-signed certificate. This certificate holds the public key along with other important information such as the target machine\u2019s FQDN, country and city of access, email, and company details. In other cases, this should be signed by a Certificate Authority. "),(0,i.kt)("p",null,"To create a certificate request in OpenSSL , enter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},"openssl req -new -key /path/to/private_key.pem \\\n    -out /path/to/certificate_request.csr\n")),(0,i.kt)("p",null,"Please note that the certificate request was created with a ",(0,i.kt)("inlineCode",{parentName:"p"},".key")," file."),(0,i.kt)("p",null,"To self-sign the certificate in OpenSSL, enter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},"openssl req -text -in /path/to/certificate_request.csr -noout -verify\nopenssl x509 -in /path/to/certificate_request.csr -out \\ \n    /path/to/certificate.crt -req -signkey /path/to/private_key.pem \\ \n    -days 365\n")),(0,i.kt)("h3",{id:"upload-the-public-key-to-a-service-account"},"Upload the Public Key to a Service Account"),(0,i.kt)("p",null,"Please note that this step was completed with the GCE Console, but you can also follow ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/creating-managing-service-account-keys#iam-service-accounts-upload-gcloud"},"a CLI approach"),".\xa0 "),(0,i.kt)("p",null,"If using the GCE Console, you need to note the ",(0,i.kt)("inlineCode",{parentName:"p"},"private_key_id")," and send that back to the person who generated the public/private key pair.\xa0 The other data necessary to populate the key is the ",(0,i.kt)("inlineCode",{parentName:"p"},"project_id"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"client_id")," (a unique ID associated with the service account), and ",(0,i.kt)("inlineCode",{parentName:"p"},"client_email")," (the service account e-mail), all displayed in the GCE Console."),(0,i.kt)("h3",{id:"authenticate-with-the-private-key"},"Authenticate With the Private Key"),(0,i.kt)("p",null,"This key generation was done in a Linux Docker container running on Windows. Another way to get OpenSSL on Windows is to ",(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/50625283/how-to-install-openssl-in-windows-10"},"install it via Git for Windows"),". It\u2019s also possible to authenticate via the Windows command line if you already have glcloud installed. "),(0,i.kt)("p",null,"The private key needs to be first ",(0,i.kt)("a",{parentName:"p",href:"https://binx.io/blog/2021/03/08/how-to-create-your-own-google-service-account-key-file/"},"wrapped in a .json file that holds the key")," as well as project information (",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/creating-managing-service-account-keys"},"Google\u2019s template"),").\xa0This additional ",(0,i.kt)("inlineCode",{parentName:"p"},".json")," wrapping is done first, followed by the actual authentication."),(0,i.kt)("p",null,"To cut and paste the private key text into the ",(0,i.kt)("inlineCode",{parentName:"p"},".json")," file, note that literal ",(0,i.kt)("inlineCode",{parentName:"p"},"\\n"),' are required.\xa0Try this command (in Linux) to change all new lines to literal "\\n": ',(0,i.kt)("inlineCode",{parentName:"p"},"tr '\\n' '@' < private_key.pem | sed 's/@/\\\\n/g'")),(0,i.kt)("p",null,"Cut and paste the ",(0,i.kt)("inlineCode",{parentName:"p"},"PROJECT_ID"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"CLIENT_ID"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"PRIVATE_KEY"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"PRIVATE_KEY_ID"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"CLIENT_EMAIL")," into the rest of the template ",(0,i.kt)("inlineCode",{parentName:"p"},".json"),". A nearly complete example for the ",(0,i.kt)("inlineCode",{parentName:"p"},"used-cars-test")," service account is below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},'{\n"type": "service_account",\n\n"project_id": "modular-magpie-167320",\n\n"private_key_id": "KEY_ID",\n\n"private_key": "-----BEGIN PRIVATE KEY-----\\nPRIVATE_KEY\\n-----END PRIVATE KEY-----\\n",\n\n"client_email": "used-cars-test@modular-magpie-167320.iam.gserviceaccount.com",\n\n"client_id": "106279635271222952172",\n\n"auth_uri": "https://accounts.google.com/o/oauth2/auth",\n\n"token_uri": "https://oauth2.googleapis.com/token",\n\n"auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",\n\n"client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/used-cars-test%40modular-magpie-167320.iam.gse\n\nrviceaccount.com"\n\n}\n')),(0,i.kt)("admonition",{title:"Note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If your private key file contains ",(0,i.kt)("inlineCode",{parentName:"p"},"----BEGIN RSA PRIVATE KEY-----")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"-----END RSA PRIVATE KEY-----"),", you must have it in the same format in the ",(0,i.kt)("inlineCode",{parentName:"p"},".json")," file. "),(0,i.kt)("p",{parentName:"admonition"},"Please also note that Google will reject the ",(0,i.kt)("inlineCode",{parentName:"p"},".json")," file as a \u201cbad format\u201d if the ",(0,i.kt)("inlineCode",{parentName:"p"},".json")," keys are capitalized (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"Client_email")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"client_email"),").")),(0,i.kt)("h3",{id:"authenticate"},"Authenticate"),(0,i.kt)("p",null,"This last step is the same in PowerShell, macOS, or Linux. Enter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"gcloud auth activate-service-account <CLIENT_EMAIL> \n--key-file=<key_file.json>\n")))}u.isMDXComponent=!0}}]);