"use strict";(self.webpackChunk_bitforms=self.webpackChunk_bitforms||[]).push([[2734],{92734:(e,t,a)=>{a.r(t),a.d(t,{default:()=>k});var s=a(87462),n=a(67294),i=(a(78774),a(5977)),l=a(80160),r=a(35637),c=a(35001),o=a(33231),d=a(14383),b=a(85813),m=a(41238),u=a(39492),p=a(75257),h=a(61079),y=a(85893);function x(e){var t=e.hubspotConf,a=e.setHubspotConf,i=e.step,l=e.setstep,c=e.isInfo,o=(0,n.useState)(!1),d=o[0],b=o[1],x=(0,n.useState)({name:"",api_key:""}),f=x[0],g=x[1],k=(0,n.useState)(!1),v=k[0],j=k[1],_=(0,n.useState)(!1),N=_[0],I=_[1],S=function(e){var n=(0,s.Z)({},t),i=(0,s.Z)({},f);i[e.target.name]="",n[e.target.name]=e.target.value,g(i),a(n)};return(0,y.jsxs)("div",{className:"btcd-stp-page",style:(0,s.Z)({},{width:1===i&&900},{height:1===i&&"auto"}),children:[(0,y.jsx)("div",{className:"mt-3",children:(0,y.jsx)("b",{children:(0,r.__)("Integration Name:","bit-integrations")})}),(0,y.jsx)("input",{className:"btcd-paper-inp w-6 mt-1",onChange:S,name:"name",value:null==t?void 0:t.name,type:"text",placeholder:(0,r.__)("Integration Name...","bit-integrations"),disabled:c}),(0,y.jsx)("div",{style:{color:"red",fontSize:"15px"},children:f.name}),(0,y.jsx)("div",{className:"mt-3",children:(0,y.jsx)("b",{children:(0,r.__)("API Key:","bit-integrations")})}),(0,y.jsx)("input",{className:"btcd-paper-inp w-6 mt-1",onChange:S,name:"api_key",value:null==t?void 0:t.api_key,type:"text",placeholder:(0,r.__)("Integration Name...","bit-integrations"),disabled:c}),(0,y.jsx)("div",{style:{color:"red",fontSize:"15px"},children:f.api_key}),(0,y.jsxs)("small",{className:"d-blk mt-5",children:[(0,r.__)("To get API , Please Visit","bit-integrations")," ",(0,y.jsx)("a",{className:"btcd-link",href:"https://app.hubspot.com/api-key",target:"_blank",rel:"noreferrer",children:(0,r.__)("Hubspot API Console","bit-integrations")})]}),"auth"===N&&(0,y.jsxs)("div",{className:"flx mt-5",children:[(0,y.jsx)(p.Z,{size:25,clr:"#022217",className:"mr-2"}),"Checking API Key!!!"]}),v&&!d&&!N&&(0,y.jsxs)("div",{className:"flx mt-5",style:{color:"red"},children:[(0,y.jsx)("span",{className:"btcd-icn mr-2",style:{fontSize:30,marginTop:-5},children:"×"}),"Sorry, API key is invalid"]}),!c&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("button",{onClick:function(){var e=(0,s.Z)({},t);if(e.name&&e.api_key){I("auth");var a={api_key:e.api_key};(0,u.Z)(a,"bitforms_hubspot_authorize").then((function(e){e.data&&b(!0),j(!0),I(!1)}))}else g({name:e.name?"":(0,r.__)("Integration name cann't be empty","bit-integrations"),api_key:e.api_key?"":(0,r.__)("API Key cann't be empty","bit-integrations")})},className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:d||N,children:[d?(0,r.__)("Authorized ✔","bit-integrations"):(0,r.__)("Authorize","bit-integrations"),N&&(0,y.jsx)(p.Z,{size:20,clr:"#022217",className:"ml-2"})]}),(0,y.jsx)("br",{}),(0,y.jsxs)("button",{onClick:function(){return setTimeout((function(){document.getElementById("btcd-settings-wrp").scrollTop=0}),300),void l(2)},className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",disabled:!d,children:[(0,r.__)("Next","bit-integrations"),(0,y.jsx)(m.Z,{className:"ml-1 rev-icn"})]})]}),(0,y.jsx)(h.Z,{note:"\n    <h4> Step of generating api key:</h4>\n    <ul>\n      <li>Login to your HubSpot account, click the <b>Settings</b> icon settings in the main navigation bar..</li>\n      <li>In the left sidebar menu, navigate to <b>Integrations > API key</b>.</li>\n      <li>If a key has never been generated for your account, click <b>Generate API key</b>.</li>\n      <li>If you've already generated an API key, click Show to display your key.</li>\n  </ul>\n  "})]})}var f=a(86099),g=a(12950);const k=function(e){var t=e.formFields,a=e.setIntegration,m=e.integrations,u=e.allIntegURL,p=(0,i.k6)(),h=(0,n.useState)(!1),k=h[0],v=h[1],j=(0,n.useState)(1),_=j[0],N=j[1],I=(0,n.useState)({show:!1}),S=I[0],C=I[1],Z=(0,n.useState)({name:"Hubspot",type:"Hubspot",api_key:"",field_map:[{formField:"",hubspotField:""}],actions:{},contactFields:[{key:"email",label:"Email",required:!0},{key:"firstname",label:"First Name",required:!1},{key:"lastname",label:"Last Name",required:!1},{key:"website",label:"Website",required:!1},{key:"company",label:"Company",required:!1},{key:"phone",label:"Phone",required:!1},{key:"address",label:"Address",required:!1},{key:"city",label:"City",required:!1},{key:"state",label:"State",required:!1},{key:"zip",label:"Zip",required:!1},{key:"jobtitle",label:"Job Title",required:!1}],dealFields:[{key:"dealname",label:"Deal Name",required:!0},{key:"amount",label:"Amount",required:!1},{key:"closedate",label:"Close Date",required:!1}],ticketFields:[{key:"subject",label:"Ticket Name",required:!0},{key:"content",label:"Ticket description",required:!1}]}),q=Z[0],A=Z[1];return(0,y.jsxs)("div",{children:[(0,y.jsx)(c.Z,{snack:S,setSnackbar:C}),(0,y.jsx)("div",{className:"txt-center w-9 mt-2",children:(0,y.jsx)(o.Z,{step:3,active:_})}),(0,y.jsx)(x,{hubspotConf:q,setHubspotConf:A,step:_,setstep:N,isLoading:k,setIsLoading:v,setSnackbar:C}),(0,y.jsxs)("div",{className:"btcd-stp-page",style:(0,s.Z)({},2===_&&{width:900,height:"auto",overflow:"visible"}),children:[(0,y.jsx)(f.Z,{formFields:t,handleInput:function(e){return(0,g.Rx)(e,q,A,v,C)},hubspotConf:q,setHubspotConf:A,isLoading:k,setIsLoading:v,setSnackbar:C}),(0,y.jsxs)("button",{onClick:function(){return e=3,void((0,g.Pd)(q)?q.field_map.length>0&&N(e):l.ZP.error("Please map mandatory fields"));var e},disabled:!(null!=q&&q.actionName),className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[(0,r.__)("Next","bit-integrations")," "," ",(0,y.jsx)("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(0,y.jsx)(b.Z,{step:_,saveConfig:function(){(0,d.Mm)(m,a,u,q,p)}})]})}},61079:(e,t,a)=>{a.d(t,{Z:()=>n});var s=a(85893);function n(e){var t=e.note;return(0,s.jsxs)("div",{className:"note",children:[(0,s.jsx)("h4",{className:"mt-0",children:"Note"}),(0,s.jsx)("div",{className:"note-text",dangerouslySetInnerHTML:{__html:t}})]})}},33231:(e,t,a)=>{a.d(t,{Z:()=>i});var s=a(67294),n=a(85893);const i=function(e){var t=e.step,a=e.active,i=e.className;return(0,n.jsx)("div",{className:"d-in-b "+i,children:(0,n.jsxs)("div",{className:"flx flx-center",children:[Array(a).fill(0).map((function(e,t){return(0,n.jsxs)(s.Fragment,{children:[(0,n.jsx)("div",{className:"btcd-stp flx flx-center stp-a  txt-center",children:t+1}),a-1!==t&&(0,n.jsx)("div",{className:"btcd-stp-line stp-line-a"})]},"stp-"+(t+21))})),t-a!==0&&(0,n.jsx)("div",{className:"btcd-stp-line"}),Array(t-a).fill(0).map((function(e,i){return(0,n.jsxs)(s.Fragment,{children:[(0,n.jsx)("div",{className:"btcd-stp flx flx-center txt-center",children:i+a+1}),t-a-1!==i&&(0,n.jsx)("div",{className:"btcd-stp-line "})]},"stp-"+(i+23))}))]})})}}}]);