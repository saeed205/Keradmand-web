"use strict";(self.webpackChunk_bitforms=self.webpackChunk_bitforms||[]).push([[2643],{17751:(t,e,i)=>{i.d(e,{Z:()=>o});const o={acf:{title:"",link:""},activeCampaign:{title:"How to Setup ActiveCampaign integration",link:"https://www.youtube.com/watch?v=jqxrRGziVkk"},encharge:{title:"How to Setup Encharge integration",link:"https://www.youtube.com/watch?v=fdOH5zJMgj0"},fluentCRM:{title:"How to Setup Fluent-CRM integration",link:"https://www.youtube.com/watch?v=-ReHm3CLdMM"},googelSheets:{title:"How to Setup Google Sheets integration",link:"https://www.youtube.com/watch?v=xD50a-pVcvo"},integrately:{title:"How to Setup Integrately integration",link:"https://www.youtube.com/watch?v=mRTLKAZ5MUE"},integromat:{title:"How to Setup Integromat integration",link:"https://www.youtube.com/watch?v=tohv9ADnEWU"},mailChimp:{title:"How to Setup MailChamp integration",link:"https://www.youtube.com/watch?v=9gjlx8MUFgM"},mailPoet:{title:"How to Setup MailPoet integration",link:"https://www.youtube.com/watch?v=AkGRzZZPXFA"},metaBox:{title:"How to Setup MetaBox integration",link:"https://www.youtube.com/watch?v=cXAp-FYzAbo"},pabbly:{title:"How to Setup Pabbly integration",link:""},pods:{title:"How to Setup Pods integration",link:"https://www.youtube.com/watch?v=9Pm2lerasVc"},sendinblue:{title:"How to Setup SendinBlue integration",link:"https://www.youtube.com/watch?v=5RscqQCBAi0"},telegram:{title:"How to Setup Telegram integration",link:"https://www.youtube.com/watch?v=2CFNMhGuFXQ"},wooCommerce:{title:"How to Setup WooCommerce integration",link:""},zapier:{title:"How to Setup Zapier integration",link:""},zohoAnalytics:{title:"How to Setup Zoho Analytics integration",link:""},zohoBigin:{title:"How to Setup Zoho Bigin integration",link:"https://www.youtube.com/watch?v=9cU1Tn7m3rY&list=PLJDk81Wj7a_OmS6jPi1t7NeIVGJNPV344"},zohoCampaigns:{title:"How to Setup Zoho Campaigns integration",link:""},zohoCreator:{title:"How to Setup Zoho Creator integration",link:"https://www.youtube.com/watch?v=QfYq-vgASPQ"},zohoCrm:{title:"How to Setup Zoho-CRM integration",link:""},zohoDesk:{title:"How to Setup Zoho Desk integration",link:""},zohoFlow:{title:"How to Setup Zoho Flow integration",link:"https://www.youtube.com/watch?v=auZQvI4juHE"},zohoMail:{title:"How to Setup Zoho Mail integration",link:""},zohoMarketingHub:{title:"How to Setup Zoho Marketing Hub integration",link:""},zohoProjects:{title:"How to Setup Zoho Projects integration",link:"https://www.youtube.com/watch?v=pRc7lord0eI&list=PLJDk81Wj7a_OGgMvc-jAxcvjxuK_sk8_e"},zohoRecruit:{title:"How to Setup Zoho Recruit integration",link:""},zohoSheet:{title:"How to Setup Zoho Sheet integration",link:"https://www.youtube.com/watch?v=p8BXKgl3qro&list=PLJDk81Wj7a_MAkRRN2DUdP4dLNqyYe67C"},zohoSign:{title:"How to Setup Zoho Sign integration",link:"https://www.youtube.com/watch?v=QJLs6agchig&list=PLJDk81Wj7a_PlMjnqUulHqKbZYvtDzbZk"},zohoWorkDrive:{title:"How to Setup Zoho Work Drive integration",link:""}}},52643:(t,e,i)=>{i.r(e),i.d(e,{default:()=>m});var o=i(87462),a=i(67294),n=i(41238),l=i(39492),s=i(35637),r=i(17751),c=i(75257),u=i(92138),h=i(2515),d=i(85893);function m(t){t.formID;var e=t.sendinBlueConf,i=t.setSendinBlueConf,m=t.step,p=t.setstep,w=t.setSnackbar,f=t.isInfo,g=(0,a.useState)(!1),b=g[0],_=g[1],k=(0,a.useState)({name:"",api_key:""}),v=k[0],y=k[1],x=(0,a.useState)(!1),j=x[0],S=x[1],Z=(0,a.useState)(!1),z=Z[0],C=Z[1],H=function(t){var a=(0,o.Z)({},e),n=(0,o.Z)({},v);n[t.target.name]="",a[t.target.name]=t.target.value,y(n),i(a)};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(u.Z,{title:r.Z.sendinblue.title,youTubeLink:r.Z.sendinblue.link}),(0,d.jsxs)("div",{className:"btcd-stp-page",style:(0,o.Z)({},{width:1===m&&900},{height:1===m&&"100%"}),children:[(0,d.jsx)("div",{className:"mt-3",children:(0,d.jsx)("b",{children:(0,s.__)("Integration Name:","bitform")})}),(0,d.jsx)("input",{className:"btcd-paper-inp w-6 mt-1",onChange:H,name:"name",value:e.name,type:"text",placeholder:(0,s.__)("Integration Name...","bitform"),disabled:f}),(0,d.jsx)("div",{style:{color:"red",fontSize:"15px"},children:v.name}),(0,d.jsx)("div",{className:"mt-3",children:(0,d.jsx)("b",{children:(0,s.__)("API Key:","bitform")})}),(0,d.jsx)("input",{className:"btcd-paper-inp w-6 mt-1",onChange:H,name:"api_key",value:e.api_key,type:"text",placeholder:(0,s.__)("Integration Name...","bitform"),disabled:f}),(0,d.jsx)("div",{style:{color:"red",fontSize:"15px"},children:v.api_key}),(0,d.jsxs)("small",{className:"d-blk mt-5",children:[(0,s.__)("To get API , Please Visit","bitform")," ",(0,d.jsx)("a",{className:"btcd-link",href:"https://account.sendinblue.com/advanced/api",target:"_blank",rel:"noreferrer",children:(0,s.__)("Sendinblue API Console","bitform")})]}),"auth"===z&&(0,d.jsxs)("div",{className:"flx mt-5",children:[(0,d.jsx)(c.Z,{size:25,clr:"#022217",className:"mr-2"}),"Checking API Key!!!"]}),j&&!b&&!z&&(0,d.jsxs)("div",{className:"flx mt-5",style:{color:"red"},children:[(0,d.jsx)("span",{className:"btcd-icn mr-2",style:{fontSize:30,marginTop:-5},children:"×"}),"Sorry, API key is invalid"]}),!f&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("button",{onClick:function(){var t=(0,o.Z)({},e);if(t.name&&t.api_key){C("auth");var i={api_key:t.api_key};(0,l.Z)(i,"bitforms_sblue_authorize").then((function(t){null!=t&&t.success&&(_(!0),w({show:!0,msg:(0,s.__)("Authorized Successfully","bitfrom")})),S(!0),C(!1)}))}else y({name:t.name?"":(0,s.__)("Integration name cann't be empty","bitform"),api_key:t.api_key?"":(0,s.__)("API Key cann't be empty","bitform")})},className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:b,children:[b?(0,s.__)("Authorized ✔","bitform"):(0,s.__)("Authorize","bitform"),z&&(0,d.jsx)(c.Z,{size:20,clr:"#022217",className:"ml-2"})]}),(0,d.jsx)("br",{}),(0,d.jsxs)("button",{onClick:function(){return setTimeout((function(){document.getElementById("btcd-settings-wrp").scrollTop=0}),300),p(2),void(0,h.aS)(e,i,C,w)},className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",disabled:!b,children:[(0,s.__)("Next","bitform"),(0,d.jsx)(n.Z,{className:"ml-1 rev-icn"})]})]})]})]})}},2515:(t,e,i)=>{i.d(e,{Pd:()=>u,Pl:()=>c,Rx:()=>l,aS:()=>s,e1:()=>r});var o=i(87462),a=i(35637),n=i(39492),l=function(t,e,i){var a=(0,o.Z)({},e);a.name=t.target.value,i((0,o.Z)({},a))},s=function(t,e,i,l){i(!0);var s={api_key:t.api_key};(0,n.Z)(s,"bitforms_sblue_refresh_lists").then((function(n){if(n&&n.success){var s=(0,o.Z)({},t);s.default||(s.default={}),n.data.sblueList&&(s.default.sblueList=n.data.sblueList),l({show:!0,msg:(0,a.__)("List refreshed","bitform")}),e((0,o.Z)({},s))}else n&&n.data&&n.data.data||!n.success&&"string"===typeof n.data?l({show:!0,msg:(0,a.g)((0,a.__)("List refresh failed Cause: %s. please try again","bitform"),n.data.data||n.data)}):l({show:!0,msg:(0,a.__)("List failed. please try again","bitform")});i(!1)})).catch((function(){return i(!1)}))},r=function(t,e,i){var l={api_key:t.api_key};(0,n.Z)(l,"bitforms_sblue_refresh_template").then((function(n){if(n&&n.success){var l=(0,o.Z)({},t);l.default||(l.default={}),n.data.sblueTemplates&&(l.default.sblueTemplates=n.data.sblueTemplates),i({show:!0,msg:(0,a.__)("Templates refreshed","bitform")}),e((0,o.Z)({},l))}else n&&n.data&&n.data.data||!n.success&&"string"===typeof n.data?i({show:!0,msg:(0,a.g)((0,a.__)("Templates refresh failed Cause: %s. please try again","bitform"),n.data.data||n.data)}):i({show:!0,msg:(0,a.__)("Templates failed. please try again","bitform")})}))},c=function(t,e,i,l){var s={api_key:t.api_key};(0,n.Z)(s,"bitforms_sblue_headers").then((function(n){if(n&&n.success){var s=(0,o.Z)({},t);if(n.data.sendinBlueField){s.default.fields=n.data.sendinBlueField;var r=s.default.fields;s.field_map=Object.values(r).filter((function(t){return t.required})).map((function(t){return{formField:"",sendinBlueField:t.fieldId,required:!0}})),l({show:!0,msg:(0,a.__)("Sendinblue fields refreshed","bitform")})}else l({show:!0,msg:(0,a.__)("No Sendinblue fields found. Try changing the header row number or try again","bitform")});e((0,o.Z)({},s))}else l({show:!0,msg:(0,a.__)("Sendinblue fields refresh failed. please try again","bitform")});i(!1)})).catch((function(){return i(!1)}))},u=function(t){var e,i=null!=t&&t.field_map?t.field_map.filter((function(t){return!t.formField&&t.sendinBlueField&&t.required})):[];return(!t.lists||void 0!==(null==(e=t.lists)?void 0:e.length))&&!(i.length>0)}},92138:(t,e,i)=>{i.d(e,{Z:()=>l});var o=i(85893);function a(t){var e=t.size,i=t.className;return(0,o.jsx)("svg",{viewBox:"0 0 512 512",width:e,height:e,className:i,children:(0,o.jsx)("g",{children:(0,o.jsx)("g",{children:(0,o.jsxs)("g",{children:[(0,o.jsx)("path",{fill:"currentColor",d:"M352.459,220c0-11.046-8.954-20-20-20h-206c-11.046,0-20,8.954-20,20s8.954,20,20,20h206 C343.505,240,352.459,231.046,352.459,220z"}),(0,o.jsx)("path",{fill:"currentColor",d:"M126.459,280c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20H251.57c11.046,0,20-8.954,20-20c0-11.046-8.954-20-20-20 H126.459z"}),(0,o.jsx)("path",{fill:"currentColor",d:"M173.459,472H106.57c-22.056,0-40-17.944-40-40V80c0-22.056,17.944-40,40-40h245.889c22.056,0,40,17.944,40,40v123 c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20V80c0-44.112-35.888-80-80-80H106.57c-44.112,0-80,35.888-80,80v352 c0,44.112,35.888,80,80,80h66.889c11.046,0,20-8.954,20-20C193.459,480.954,184.505,472,173.459,472z"}),(0,o.jsx)("path",{fill:"currentColor",d:"M467.884,289.572c-23.394-23.394-61.458-23.395-84.837-0.016l-109.803,109.56c-2.332,2.327-4.052,5.193-5.01,8.345 l-23.913,78.725c-2.12,6.98-0.273,14.559,4.821,19.78c3.816,3.911,9,6.034,14.317,6.034c1.779,0,3.575-0.238,5.338-0.727 l80.725-22.361c3.322-0.92,6.35-2.683,8.79-5.119l109.573-109.367C491.279,351.032,491.279,312.968,467.884,289.572z M333.776,451.768l-40.612,11.25l11.885-39.129l74.089-73.925l28.29,28.29L333.776,451.768z M439.615,346.13l-3.875,3.867 l-28.285-28.285l3.862-3.854c7.798-7.798,20.486-7.798,28.284,0C447.399,325.656,447.399,338.344,439.615,346.13z"}),(0,o.jsx)("path",{fill:"currentColor",d:"M332.459,120h-206c-11.046,0-20,8.954-20,20s8.954,20,20,20h206c11.046,0,20-8.954,20-20S343.505,120,332.459,120z"})]})})})})}function n(t){var e=t.size,i=t.color,a=void 0===i?"#FF3D00":i,n=t.className;return(0,o.jsxs)("svg",{viewBox:"0 0 48 48",width:e,height:e,className:n,children:[(0,o.jsx)("path",{fill:a,d:"M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"}),(0,o.jsx)("path",{fill:"#FFF",d:"M20 31L20 17 32 24z"})]})}function l(t){var e=t.title,i=t.subtitle,l=t.youTubeLink,s=t.docLink,r=t.style;return(0,o.jsxs)("div",{style:r,children:[(0,o.jsxs)("span",{className:"tutoriallink p-1 "+(l&&"youtube"),children:[l?(0,o.jsx)(n,{size:"25",className:"mr-1"}):(0,o.jsx)(a,{size:"18",className:"mr-1"}),(0,o.jsx)("a",{target:"_blank",rel:"noreferrer",href:l||s,children:e})]}),i&&(0,o.jsx)("p",{className:"mt-1",children:i})]})}}}]);