"use strict";(self.webpackChunk_bitforms=self.webpackChunk_bitforms||[]).push([[4476],{14383:(e,t,a)=>{a.d(t,{FP:()=>s,Mm:()=>r,T5:()=>n,WK:()=>i,mG:()=>d,wX:()=>o});var l=a(87462),r=(a(35637),a(39492),function(e,t,a,r,i,s,n){var o=[].concat(e);if(n)o[s]=(0,l.Z)({},e[s],r),o.push({editItegration:!0}),t([].concat(o)),i.push(a);else{var d=[].concat(o);d.push(r),d.push({newItegration:!0}),t(d),i.push(a)}}),i=function(e){var t={},a=window.location.href.replace(window.opener.location.href+"/redirect","").split("&");a&&a.forEach((function(e){var a=e.split("=");a[1]&&(t[a[0]]=a[1])})),localStorage.setItem("__bitforms_"+e,JSON.stringify(t)),window.close()},s=function(e,t,a,r,i){var s=(0,l.Z)({},t);i?r?s.relatedlists[i-1].upload_field_map.splice(e,0,{}):s.relatedlists[i-1].field_map.splice(e,0,{}):r?s.upload_field_map.splice(e,0,{}):s.field_map.splice(e,0,{}),a((0,l.Z)({},s))},n=function(e,t,a,r,i){var s=(0,l.Z)({},t);i?r?s.relatedlists[i-1].upload_field_map.length>1&&s.relatedlists[i-1].upload_field_map.splice(e,1):s.relatedlists[i-1].field_map.length>1&&s.relatedlists[i-1].field_map.splice(e,1):r?s.upload_field_map.length>1&&s.upload_field_map.splice(e,1):s.field_map.length>1&&s.field_map.splice(e,1),a((0,l.Z)({},s))},o=function(e,t,a,r,i,s){var n=(0,l.Z)({},a);s?i?n.relatedlists[s-1].upload_field_map[t][e.target.name]=e.target.value:n.relatedlists[s-1].field_map[t][e.target.name]=e.target.value:i?n.upload_field_map[t][e.target.name]=e.target.value:n.field_map[t][e.target.name]=e.target.value,"custom"===e.target.value&&(s?n.relatedlists[s-1].field_map[t].customValue="":n.field_map[t].customValue=""),r((0,l.Z)({},n))},d=function(e,t,a,r,i){var s=(0,l.Z)({},a);i?s.relatedlists[i-1].field_map[t].customValue=e.target.value:s.field_map[t].customValue=e.target.value,r((0,l.Z)({},s))}},85813:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(35637),r=a(85893);function i(e){var t=e.step,a=e.saveConfig,i=e.edit,s=e.disabled;return i?(0,r.jsx)("div",{className:"txt-center w-9 mt-3",children:(0,r.jsx)("button",{onClick:a,id:"secondary-update-btn",className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:s,children:(0,l.__)("Update","bitform")})}):(0,r.jsxs)("div",{className:"btcd-stp-page txt-center",style:{width:3===t&&"90%",height:3===t&&"100%"},children:[(0,r.jsx)("h2",{className:"ml-3",children:(0,l.__)("Successfully Integrated","bitform")}),(0,r.jsxs)("button",{onClick:a,id:"secondary-update-btn",className:"btn btcd-btn-lg green sh-sm",type:"button",children:[(0,l.__)("Finish & Save ","bitform")," ✔"]})]})}},83140:(e,t,a)=>{a.d(t,{P_:()=>m,Rx:()=>o,e1:()=>f,kY:()=>c});var l=a(87462),r=a(80160),i=a(35637),s=a(39492),n=a(52249),o=function(e,t,a,r,i,s,n){void 0===n&&(n=0);var o=(0,l.Z)({},t),c=e.target.name;if(""!==e.target.value?o[c]=e.target.value:delete o[c],o[e.target.name]=e.target.value,"folder"===e.target.name)o.folderMap=o.folderMap.slice(0,n),o=d(o,r,a,i,s);a((0,l.Z)({},o))},d=function(e,t,a,r,i){var s,n,o=(0,l.Z)({},e);return delete o.teamType,!o.folder||null!=(s=o.default)&&null!=(n=s.folders)&&n[o.folder]?o.folder&&o.folder!==o.folderMap[o.folderMap.length-1]&&o.folderMap.push(o.folder):f(t,o,a,r,i),o},c=function(e,t,a,n,o){n(!0);var d={flowID:null!=e?e:null,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails},c=(0,s.Z)(d,"bitforms_oneDrive_get_all_folders").then((function(e){if(e&&e.success){var r=(0,l.Z)({},t);return r.default||(r.default={}),e.data.oneDriveFoldersList&&(r.default.rootFolders=e.data.oneDriveFoldersList,r.tokenDetails=e.data.tokenDetails),a(r),n(!1),"OneDrive Folders List refreshed successfully"}return n(!1),"OneDrive Folders List refresh failed. please try again"})).catch((function(){return n(!1)}));r.ZP.promise(c,{success:function(e){return e},error:(0,i.__)("Error Occurred","bitform"),loading:(0,i.__)("Loading OneDrive Folders List...","bitform")})},f=function(e,t,a,r,o,d){var c=d?t.folderMap[d]:t.folder;r(!0);var f={formID:e,dataCenter:t.dataCenter,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails,team:t.team,folder:c,teamType:"teamType"in t?"private":"team"};(0,s.Z)(f,"bitforms_oneDrive_get_single_folder").then((function(e){if(e&&e.success){var s=(0,l.Z)({},t);e.data.folders?(s.default.folders||(s.default.folders={}),s.default.folders[c]=(0,n.SI)(e.data.folders,"folderName"),s.folderMap.includes(c)||s.folderMap.push(c),o({show:!0,msg:(0,i.__)("Sub Folders refreshed","bitform")})):o({show:!0,msg:(0,i.__)("No Sub Folder Found","bitform")}),e.data.tokenDetails&&(s.tokenDetails=e.data.tokenDetails),a((0,l.Z)({},s))}else o({show:!0,msg:(0,i.__)("Sub Folders refresh failed. please try again","bitform")});r(!1)})).catch((function(){return r(!1)}))},m=function(e,t,a,s,n){if(e.clientId&&e.clientSecret){s(!0);var o="https://login.live.com/oauth20_authorize.srf?client_id="+e.clientId+"&scope=onedrive.readwrite offline_access Files.ReadWrite.All&access_type=offline&prompt=consent&response_type=code&state="+encodeURIComponent(window.location.href)+"/redirect&redirect_uri="+encodeURIComponent(bits.oneDriveRedirectURL),d=window.open(o,"oneDrive","width=400,height=609,toolbar=off"),c=setInterval((function(){if(d.closed){clearInterval(c);var n={},o=!1,f=localStorage.getItem("__bitforms_oneDrive");if(f&&(o=!0,n=JSON.parse(f),localStorage.removeItem("__bitforms_oneDrive")),n.code&&!n.error&&n&&o){var m=(0,l.Z)({},e);m.accountServer=n["accounts-server"],u(n,m,t,a,s)}else{var p=n.error?"Cause: "+n.error:"";r.ZP.error((0,i.__)("Authorization failed","bitform")+" "+p+". "+(0,i.__)("please try again","bitform")),s(!1)}}}),500)}else n({clientId:e.clientId?"":(0,i.__)("Client Id can't be empty","bitform"),clientSecret:e.clientSecret?"":(0,i.__)("Client Secret can't be empty","bitform")})},u=function(e,t,a,n,o){var d=(0,l.Z)({},e);d.clientId=t.clientId,d.clientSecret=t.clientSecret,d.redirectURI=bits.oneDriveRedirectURL,(0,s.Z)(d,"bitforms_oneDrive_authorization").then((function(e){if(e&&e.success){var s=(0,l.Z)({},t);s.tokenDetails=e.data,a(s),n(!0),r.ZP.success((0,i.__)("Authorized Successfully","bitform"))}else e&&e.data&&e.data.data||!e.success&&"string"===typeof e.data?r.ZP.error(""+(0,i.__)("Authorization failed Cause:","bitform")+(e.data.data||e.data)+". "+(0,i.__)("please try again","bitform")):r.ZP.error((0,i.__)("Authorization failed. please try again","bitform"));o(!1)}))}},55416:(e,t,a)=>{a.d(t,{Z:()=>u});var l=a(67294),r=a(35637),i=a(68381),s=a(87462),n=a(97707),o=a(23921),d=(a(38762),a(34401)),c=a(85893);function f(e){var t,a=e.oneDriveConf,i=e.setOneDriveConf,f=e.formFields,m=(e.formID,e.setSnackbar,a.folderMap?a.folderMap[0]:a.folder,(0,l.useState)(!1)),u=(m[0],m[1],(0,l.useState)({show:!1})),p=u[0],h=u[1];return(0,c.jsxs)("div",{className:"pos-rel d-flx w-5",children:[(0,c.jsxs)("div",{className:"pos-rel d-flx flx-col w-8",children:[(0,c.jsx)(o.Z,{onChange:function(){var e,t,l;null!=(e=a.actions)&&e.share||(a.actions.share={}),null!=(t=a.actions)&&null!=(l=t.share)&&l.file||(a.actions.share.file={permissions:[{email:"",access:"34",accessLabel:"View"},{email:"",access:"5",accessLabel:"Edit"},{email:"",access:"4",accessLabel:"Share"},{email:"",access:"6",accessLabel:"View and Comment"}],mail:"false"}),h({show:"attachments"})},checked:"attachments"in a.actions,className:"wdt-200 mt-4 mr-2",value:"Attachment",title:(0,r.__)("Upload Files","bit-integration-pro"),subTitle:(0,r.__)("Add attachments from Bit-integration-pro to OneDrive folder.","bit-integration-pro")}),!a.actions.attachments&&(0,c.jsx)("small",{style:{marginLeft:30,marginTop:10,color:"red",fontWeight:"bold"},children:(0,r.__)("This action is required.","bitform")})]}),(0,c.jsx)(d.Z,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:"Ok",show:"attachments"===p.show,close:function(){return h({show:!1})},action:function(){return h({show:!1})},title:(0,r.__)("Select Attachment","bitform"),children:(0,c.jsxs)("div",{style:{height:"95%"},children:[(0,c.jsx)("div",{className:"mt-2",children:(0,r.__)("Select file upload fields","bitform")}),(0,c.jsx)(n.Z,{defaultValue:a.actions.attachments,className:"mt-2 w-10 mb-25",options:f.filter((function(e){return"file-up"===e.type})).map((function(e){return{label:e.lbl,value:e.key}})),onChange:function(e){return function(e,t,l){var r=(0,s.Z)({},a);"create_folder"===t?e.target.checked?r.actions.create_folder={name:"",suffix:!1}:(delete r.actions.create_folder,delete r.actions.share.folder):"attachments"===t&&(""!==e?r.actions.attachments=e:(delete r.actions.attachments,delete r.actions.share.file)),i((0,s.Z)({},r))}(e,"attachments")},height:300})]})}),(0,c.jsx)("div",{className:"pos-rel d-flx flx-col w-8",children:(0,c.jsx)(o.Z,{checked:(null==(t=a.actions)?void 0:t.delete_from_wp)||!1,onChange:function(e){return function(e,t){var l=(0,s.Z)({},a);"deleteFile"===t&&(e.target.checked?l.actions.delete_from_wp=!0:delete l.actions.delete_from_wp),i((0,s.Z)({},l))}(e,"deleteFile")},className:"mt-4 mr-2",value:"delete_from_wp",title:(0,r.__)("Delete File From Wordpress","bitform"),subTitle:(0,r.__)("Delete file from Wordpress after upload in OneDrive","bitform")})})]})}var m=a(83140);function u(e){var t,a=e.formID,l=e.formFields,s=e.oneDriveConf,n=e.setOneDriveConf,o=e.isLoading,d=e.setIsLoading,u=e.setSnackbar;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("br",{}),(0,c.jsx)("b",{className:"wdt-150 d-in-b mr-2",children:"Folder:"}),(0,c.jsxs)("select",{onChange:function(e){return(0,m.Rx)(e,s,n,a,d,u)},name:"folder",value:s.folderMap[0]||s.folder,className:"btcd-paper-inp w-7",children:[(0,c.jsx)("option",{value:"",children:(0,r.__)("Select Folder","bitform")}),(null==s||null==(t=s.default)?void 0:t.rootFolders)&&s.default.rootFolders.map((function(e){return(0,c.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),(0,c.jsx)("button",{onClick:function(){return(0,m.kY)(a,s,n,d,u)},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":"'"+(0,r.__)("Refresh All oneDrive Folders","bitform")+"'"},type:"button",disabled:o,children:"↻"}),(0,c.jsx)("br",{}),s.folderMap.map((function(e,t){var l,i;return(0,c.jsxs)("div",{children:[(0,c.jsx)("br",{}),(0,c.jsxs)("div",{className:"flx",children:[(0,c.jsx)("b",{className:"wdt-150 d-in-b mr-2"}),(0,c.jsx)("div",{className:"d-in-b",style:{width:10*(t+1),marginLeft:1,marginRight:2,height:58,marginTop:-60},children:(0,c.jsx)("div",{className:"sub-tree"})}),(0,c.jsxs)("div",{className:"flx sub-folder w-7",children:[(0,c.jsxs)("select",{onChange:function(e){return(0,m.Rx)(e,s,n,a,d,u,t+1)},name:"folder",value:s.folderMap[t+1]||s.folder,className:"btcd-paper-inp",children:[(0,c.jsx)("option",{value:s.folderMap[t],children:"/ root"}),(null==s||null==(l=s.default)||null==(i=l.folders)?void 0:i[e])&&s.default.folders[e].map((function(e){return(0,c.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),(0,c.jsx)("div",{className:"tooltip-box",children:(0,c.jsx)("button",{onClick:function(){return(0,m.e1)(a,s,n,d,u,t)},className:"d-non icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":"'"+(0,r.__)("Refresh Sub Folders","bitform")+"'"},type:"button",disabled:o,children:"↻"})})]})]})]},e)})),(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),o&&(0,c.jsx)(i.default,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),s.folder&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"mt-4",children:(0,c.jsx)("b",{className:"wdt-100",children:(0,r.__)("Actions","bitform")})}),(0,c.jsx)("div",{className:"btcd-hr mt-1"}),(0,c.jsx)(f,{oneDriveConf:s,setOneDriveConf:n,formFields:l,formID:a,setisLoading:d,setSnackbar:u})]})]})}}}]);