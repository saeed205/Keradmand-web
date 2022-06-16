"use strict";(self.webpackChunk_bitforms=self.webpackChunk_bitforms||[]).push([[376],{90376:(e,t,s)=>{s.r(t),s.d(t,{default:()=>x});var a=s(87462),i=s(67294),n=(s(78774),s(5977)),l=s(80160),r=s(35637),c=s(35001),m=s(33231),d=s(85813),o=s(84143),f=s(97957),p=s(90452),u=s(14383),b=s(85893);const x=function(e){var t=e.formFields,s=e.setIntegration,x=e.integrations,h=e.allIntegURL,_=(0,n.k6)(),v=(0,i.useState)(!1),g=v[0],j=v[1],y=(0,i.useState)(1),N=y[0],k=y[1],E=(0,i.useState)({show:!1}),I=E[0],C=E[1],Z=(0,i.useState)({name:"ElasticEmail",type:"ElasticEmail",api_key:"",field_map:[{formField:"",elasticEmailField:""}],actions:{},elasticEmailFields:[{key:"Email",label:"Email",required:!0},{key:"FirstName",label:"FirstName",required:!1},{key:"LastName",label:"LastName",required:!1}]}),S=Z[0],w=Z[1];return document.querySelector(".btcd-s-wrp").scrollTop=0,(0,b.jsxs)("div",{children:[(0,b.jsx)(c.Z,{snack:I,setSnackbar:C}),(0,b.jsx)("div",{className:"txt-center w-9 mt-2",children:(0,b.jsx)(m.Z,{step:3,active:N})}),(0,b.jsx)(o.default,{elasticEmailConf:S,setElasticEmailConf:w,step:N,setstep:k,isLoading:g,setIsLoading:j}),(0,b.jsxs)("div",{className:"btcd-stp-page",style:(0,a.Z)({},2===N&&{width:900,height:"auto",overflow:"visible"}),children:[(0,b.jsx)(p.Z,{formFields:t,handleInput:function(e){return(0,f.Rx)(e,S,w,j)},elasticEmailConf:S,setElasticEmailConf:w,isLoading:g,setIsLoading:j}),(0,b.jsxs)("button",{onClick:function(){return e=3,void((0,f.Pd)(S)?S.field_map.length>0&&k(e):l.ZP.error("Please map mandatory fields"));var e},className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[(0,r.__)("Next","bitform")," "," ",(0,b.jsx)("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(0,b.jsx)(d.Z,{step:N,saveConfig:function(){(0,u.Mm)(x,s,h,S,_)}})]})}},84143:(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});var a=s(87462),i=s(67294),n=s(41238),l=s(39492),r=s(35637),c=s(75257),m=s(97957),d=s(85893);function o(e){var t=e.elasticEmailConf,s=e.setElasticEmailConf,o=e.step,f=e.setstep,p=e.isInfo,u=(0,i.useState)(!1),b=u[0],x=u[1],h=(0,i.useState)({name:"",api_key:""}),_=h[0],v=h[1],g=(0,i.useState)(!1),j=g[0],y=g[1],N=(0,i.useState)(!1),k=N[0],E=N[1],I=function(e){var i=(0,a.Z)({},t),n=(0,a.Z)({},_);n[e.target.name]="",i[e.target.name]=e.target.value,v(n),s(i)};return(0,d.jsxs)("div",{className:"btcd-stp-page",style:(0,a.Z)({},{width:1===o&&900},{height:1===o&&"auto"}),children:[(0,d.jsx)("div",{className:"mt-3",children:(0,d.jsx)("b",{children:(0,r.__)("Integration Name:","bitform")})}),(0,d.jsx)("input",{className:"btcd-paper-inp w-6 mt-1",onChange:I,name:"name",value:t.name,type:"text",placeholder:(0,r.__)("Integration Name...","bitform"),disabled:p}),(0,d.jsx)("div",{style:{color:"red",fontSize:"15px"},children:_.name}),(0,d.jsx)("div",{className:"mt-3",children:(0,d.jsx)("b",{children:(0,r.__)("API Key:","bitform")})}),(0,d.jsx)("input",{className:"btcd-paper-inp w-6 mt-1",onChange:I,name:"api_key",value:t.api_key,type:"text",placeholder:(0,r.__)("API Key...","bitform"),disabled:p}),(0,d.jsx)("div",{style:{color:"red",fontSize:"15px"},children:_.api_key}),(0,d.jsxs)("small",{className:"d-blk mt-5",children:[(0,r.__)("To get API Key, Please Visit","bitform")," ",(0,d.jsx)("a",{className:"btcd-link",href:"https://elasticemail.com/account#/settings/new/manage-api",target:"_blank",rel:"noreferrer",children:(0,r.__)("Elastic Email API Console","bitform")})]}),"auth"===k&&(0,d.jsxs)("div",{className:"flx mt-5",children:[(0,d.jsx)(c.Z,{size:25,clr:"#022217",className:"mr-2"}),"Checking API Key!!!"]}),j&&!b&&!k&&(0,d.jsxs)("div",{className:"flx mt-5",style:{color:"red"},children:[(0,d.jsx)("span",{className:"btcd-icn mr-2",style:{fontSize:30,marginTop:-5},children:"×"}),"Sorry, API key is invalid"]}),!p&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("button",{onClick:function(){var e=(0,a.Z)({},t);if(e.name&&e.api_key){E("auth");var s={api_key:e.api_key};(0,l.Z)(s,"bitforms_elasticemail_authorize").then((function(e){null!=e&&e.success&&x(!0),y(!0),E(!1)}))}else v({name:e.name?"":(0,r.__)("Integration name cann't be empty","bitform"),api_key:e.api_key?"":(0,r.__)("API Key cann't be empty","bitform")})},className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:b||k,children:[b?(0,r.__)("Authorized ✔","bitform"):(0,r.__)("Authorize","bitform"),k&&(0,d.jsx)(c.Z,{size:20,clr:"#022217",className:"ml-2"})]}),(0,d.jsx)("br",{}),(0,d.jsxs)("button",{onClick:function(){return setTimeout((function(){document.getElementById("btcd-settings-wrp").scrollTop=0}),300),(null==t||!t.default)&&(0,m.Jd)(t,s,E),void f(2)},className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",disabled:!b,children:[(0,r.__)("Next","bitform"),(0,d.jsx)(n.Z,{className:"ml-1 rev-icn"})]})]})]})}},33231:(e,t,s)=>{s.d(t,{Z:()=>n});var a=s(67294),i=s(85893);const n=function(e){var t=e.step,s=e.active,n=e.className;return(0,i.jsx)("div",{className:"d-in-b "+n,children:(0,i.jsxs)("div",{className:"flx flx-center",children:[Array(s).fill(0).map((function(e,t){return(0,i.jsxs)(a.Fragment,{children:[(0,i.jsx)("div",{className:"btcd-stp flx flx-center stp-a  txt-center",children:t+1}),s-1!==t&&(0,i.jsx)("div",{className:"btcd-stp-line stp-line-a"})]},"stp-"+(t+21))})),t-s!==0&&(0,i.jsx)("div",{className:"btcd-stp-line"}),Array(t-s).fill(0).map((function(e,n){return(0,i.jsxs)(a.Fragment,{children:[(0,i.jsx)("div",{className:"btcd-stp flx flx-center txt-center",children:n+s+1}),t-s-1!==n&&(0,i.jsx)("div",{className:"btcd-stp-line "})]},"stp-"+(n+23))}))]})})}}}]);