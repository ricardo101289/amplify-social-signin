(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[457],{59175:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/user/account",function(){return t(23341)}])},35904:function(e,n,t){"use strict";t.d(n,{Z:function(){return f}});var i=t(85893),r=t(87357),s=t(15861),a=t(50122),o=t(41664),l=t.n(o),c=t(12963);function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function d(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function x(e){var n=e.links,t=e.activeLast,a=void 0!==t&&t,o=d(e,["links","activeLast"]),l=n[n.length-1].name,x=n.map((function(e){return(0,i.jsx)(h,{link:e},e.name)})),m=n.map((function(e){return(0,i.jsx)("div",{children:e.name!==l?(0,i.jsx)(h,{link:e}):(0,i.jsx)(s.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:l})},e.name)}));return(0,i.jsx)(c.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(n){u(e,n,t[n])}))}return e}({separator:(0,i.jsx)(r.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},o,{children:a?x:m}))}function h(e){var n=e.link,t=n.href,s=void 0===t?"":t,o=n.name,c=n.icon;return(0,i.jsx)(l(),{href:s,passHref:!0,children:(0,i.jsxs)(a.Z,{variant:"body2",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[c&&(0,i.jsx)(r.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:c}),o]},o)})}function m(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(n){m(e,n,t[n])}))}return e}function v(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function f(e){var n=e.links,t=e.action,o=e.heading,l=e.moreLink,c=void 0===l?[]:l,u=e.sx,d=v(e,["links","action","heading","moreLink","sx"]);return(0,i.jsxs)(r.Z,{sx:p({mb:5},u),children:[(0,i.jsxs)(r.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsxs)(r.Z,{sx:{flexGrow:1},children:[(0,i.jsx)(s.Z,{variant:"h4",gutterBottom:!0,children:o}),(0,i.jsx)(x,p({links:n},d))]}),t&&(0,i.jsx)(r.Z,{sx:{flexShrink:0},children:t})]}),(0,i.jsx)(r.Z,{sx:{mt:2},children:"string"===typeof c?(0,i.jsx)(a.Z,{href:c,target:"_blank",variant:"body2",children:c}):c.map((function(e){return(0,i.jsx)(a.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}},4292:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var i=t(67294);function r(e){var n=(0,i.useState)(e||""),t=n[0],r=n[1];return{currentTab:t,onChangeTab:function(e,n){r(n)},setCurrentTab:r}}},23341:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return le}});var i=t(85893),r=t(48389),s=t(53156),a=t(88409),o=t(40044),l=t(87357),c=t(92924),u=t(4292),d=t(64722),x=t(80334),h=t(6183),m=t(65656),p=t(28621),v=t(35904),f=t(67294),j=t(86886),b=t(26447),g=t(66242),w=t(15861),Z=t(83321),y=t(55113);function k(e){var n=e.addressBook;return(0,i.jsx)(g.Z,{sx:{p:3},children:(0,i.jsxs)(b.Z,{spacing:3,alignItems:"flex-start",children:[(0,i.jsx)(w.Z,{variant:"overline",sx:{color:"text.secondary"},children:"Billing Info"}),n.map((function(e){return(0,i.jsxs)(y.Z,{sx:{p:3,width:1,bgcolor:"background.neutral"},children:[(0,i.jsx)(w.Z,{variant:"subtitle1",gutterBottom:!0,children:e.name}),(0,i.jsxs)(w.Z,{variant:"body2",gutterBottom:!0,children:[(0,i.jsx)(w.Z,{variant:"body2",component:"span",sx:{color:"text.secondary"},children:"Address: \xa0"}),"".concat(e.street,", ").concat(e.city,", ").concat(e.state,", ").concat(e.country," ").concat(e.zipCode)]}),(0,i.jsxs)(w.Z,{variant:"body2",gutterBottom:!0,children:[(0,i.jsx)(w.Z,{variant:"body2",component:"span",sx:{color:"text.secondary"},children:"Phone: \xa0"}),e.phone]}),(0,i.jsxs)(l.Z,{sx:{mt:1},children:[(0,i.jsx)(Z.Z,{color:"error",size:"small",startIcon:(0,i.jsx)(p.Z,{icon:"eva:trash-2-outline"}),onClick:function(){},sx:{mr:1},children:"Delete"}),(0,i.jsx)(Z.Z,{size:"small",startIcon:(0,i.jsx)(p.Z,{icon:"eva:edit-fill"}),onClick:function(){},children:"Edit"})]})]},e.id)})),(0,i.jsx)(Z.Z,{size:"small",startIcon:(0,i.jsx)(p.Z,{icon:"eva:plus-fill"}),children:"Add new address"})]})})}var P=t(93946),O=t(57922),S=t(9573),C=t(8987),_=t(45562);function N(e){var n=e.cards,t=e.isOpen,r=e.onOpen,s=e.onCancel;return(0,i.jsxs)(g.Z,{sx:{p:3},children:[(0,i.jsx)(w.Z,{variant:"overline",sx:{mb:3,display:"block",color:"text.secondary"},children:"Payment Method"}),(0,i.jsx)(b.Z,{spacing:2,direction:{xs:"column",md:"row"},children:n.map((function(e){return(0,i.jsxs)(y.Z,{sx:{p:3,width:1,position:"relative",border:function(e){return"solid 1px ".concat(e.palette.grey[50032])}},children:[(0,i.jsx)(_.Z,{alt:"icon",src:"master_card"===e.cardType?"https://minimal-assets-api-dev.vercel.app/assets/icons/ic_mastercard.svg":"https://minimal-assets-api-dev.vercel.app/assets/icons/ic_visa.svg",sx:{mb:1,maxWidth:36}}),(0,i.jsx)(w.Z,{variant:"subtitle2",children:e.cardNumber}),(0,i.jsx)(P.Z,{sx:{top:8,right:8,position:"absolute"},children:(0,i.jsx)(p.Z,{icon:"eva:more-vertical-fill",width:20,height:20})})]},e.id)}))}),(0,i.jsx)(l.Z,{sx:{mt:3},children:(0,i.jsx)(Z.Z,{size:"small",startIcon:(0,i.jsx)(p.Z,{icon:"eva:plus-fill"}),onClick:r,children:"Add new card"})}),(0,i.jsx)(O.Z,{in:t,children:(0,i.jsx)(l.Z,{sx:{padding:3,marginTop:3,borderRadius:1,bgcolor:"background.neutral"},children:(0,i.jsxs)(b.Z,{spacing:3,children:[(0,i.jsx)(w.Z,{variant:"subtitle1",children:"Add new card"}),(0,i.jsxs)(b.Z,{direction:{xs:"column",sm:"row"},spacing:2,children:[(0,i.jsx)(S.Z,{fullWidth:!0,label:"Name on card"}),(0,i.jsx)(S.Z,{fullWidth:!0,label:"Card number"})]}),(0,i.jsxs)(b.Z,{direction:{xs:"column",sm:"row"},spacing:2,children:[(0,i.jsx)(S.Z,{fullWidth:!0,label:"Expiration date",placeholder:"MM/YY"}),(0,i.jsx)(S.Z,{fullWidth:!0,label:"Cvv"})]}),(0,i.jsxs)(b.Z,{direction:"row",justifyContent:"flex-end",spacing:1.5,children:[(0,i.jsx)(Z.Z,{color:"inherit",variant:"outlined",onClick:s,children:"Cancel"}),(0,i.jsx)(C.Z,{type:"submit",variant:"contained",onClick:s,children:"Save Change"})]})]})})})]})}var I=t(50122),L=t(54491),A=t(71674);function E(e){var n=e.invoices;return(0,i.jsxs)(b.Z,{spacing:3,alignItems:"flex-end",children:[(0,i.jsx)(w.Z,{variant:"subtitle1",sx:{width:1},children:"Invoice History"}),(0,i.jsx)(b.Z,{spacing:2,sx:{width:1},children:n.map((function(e){return(0,i.jsxs)(b.Z,{direction:"row",justifyContent:"space-between",sx:{width:1},children:[(0,i.jsx)(w.Z,{variant:"body2",sx:{minWidth:160},children:(0,L.Mu)(e.createdAt)}),(0,i.jsx)(w.Z,{variant:"body2",children:(0,A.e_)(e.price)}),(0,i.jsx)(I.Z,{children:"PDF"})]},e.id)}))}),(0,i.jsx)(Z.Z,{size:"small",endIcon:(0,i.jsx)(p.Z,{icon:"eva:arrow-ios-forward-fill"}),children:"All invoices"})]})}function R(e){var n=e.cards,t=e.addressBook,r=e.invoices,s=(0,f.useState)(!1),a=s[0],o=s[1];return(0,i.jsxs)(j.ZP,{container:!0,spacing:5,children:[(0,i.jsx)(j.ZP,{item:!0,xs:12,md:8,children:(0,i.jsxs)(b.Z,{spacing:3,children:[(0,i.jsxs)(g.Z,{sx:{p:3},children:[(0,i.jsx)(w.Z,{variant:"overline",sx:{mb:3,display:"block",color:"text.secondary"},children:"Your Plan"}),(0,i.jsx)(w.Z,{variant:"h4",children:"Premium"}),(0,i.jsxs)(l.Z,{sx:{mt:{xs:2,sm:0},position:{sm:"absolute"},top:{sm:24},right:{sm:24}},children:[(0,i.jsx)(Z.Z,{size:"small",color:"inherit",variant:"outlined",sx:{mr:1},children:"Cancel plan"}),(0,i.jsx)(Z.Z,{size:"small",variant:"outlined",children:"Upgrade plan"})]})]}),(0,i.jsx)(N,{cards:n,isOpen:a,onOpen:function(){return o(!a)},onCancel:function(){return o(!1)}}),(0,i.jsx)(k,{addressBook:t})]})}),(0,i.jsx)(j.ZP,{item:!0,xs:12,md:4,children:(0,i.jsx)(E,{invoices:r})})]})}var B=t(34051),T=t.n(B),z=t(74231),U=t(73400),W=t(87536),q=t(95496),D=t(75920),V=t(1172);function H(e,n,t,i,r,s,a){try{var o=e[s](a),l=o.value}catch(c){return void t(c)}o.done?n(l):Promise.resolve(l).then(i,r)}function M(){var e=(0,U.Ds)().enqueueSnackbar,n=(0,D.Z)().user,t=z.Ry().shape({displayName:z.Z_().required("Name is required")}),r={displayName:(null===n||void 0===n?void 0:n.displayName)||"",email:(null===n||void 0===n?void 0:n.email)||"",photoURL:(null===n||void 0===n?void 0:n.photoURL)||"",phoneNumber:(null===n||void 0===n?void 0:n.phoneNumber)||"",country:(null===n||void 0===n?void 0:n.country)||"",address:(null===n||void 0===n?void 0:n.address)||"",state:(null===n||void 0===n?void 0:n.state)||"",city:(null===n||void 0===n?void 0:n.city)||"",zipCode:(null===n||void 0===n?void 0:n.zipCode)||"",about:(null===n||void 0===n?void 0:n.about)||"",isPublic:(null===n||void 0===n?void 0:n.isPublic)||!1},s=(0,W.cI)({resolver:(0,q.X)(t),defaultValues:r}),a=s.setValue,o=s.handleSubmit,c=s.formState.isSubmitting,u=function(){var n,t=(n=T().mark((function n(t){return T().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:e("Update success!"),n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),console.error(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})),function(){var e=this,t=arguments;return new Promise((function(i,r){var s=n.apply(e,t);function a(e){H(s,i,r,a,o,"next",e)}function o(e){H(s,i,r,a,o,"throw",e)}a(void 0)}))});return function(e){return t.apply(this,arguments)}}(),d=(0,f.useCallback)((function(e){var n=e[0];n&&a("photoURL",Object.assign(n,{preview:URL.createObjectURL(n)}))}),[a]);return(0,i.jsx)(V.RV,{methods:s,onSubmit:o(u),children:(0,i.jsxs)(j.ZP,{container:!0,spacing:3,children:[(0,i.jsx)(j.ZP,{item:!0,xs:12,md:4,children:(0,i.jsxs)(g.Z,{sx:{py:10,px:3,textAlign:"center"},children:[(0,i.jsx)(V.sX,{name:"photoURL",accept:"image/*",maxSize:3145728,onDrop:d,helperText:(0,i.jsxs)(w.Z,{variant:"caption",sx:{mt:2,mx:"auto",display:"block",textAlign:"center",color:"text.secondary"},children:["Allowed *.jpeg, *.jpg, *.png, *.gif",(0,i.jsx)("br",{})," max size of ",(0,A.oe)(3145728)]})}),(0,i.jsx)(V._e,{name:"isPublic",labelPlacement:"start",label:"Public Profile",sx:{mt:5}})]})}),(0,i.jsx)(j.ZP,{item:!0,xs:12,md:8,children:(0,i.jsxs)(g.Z,{sx:{p:3},children:[(0,i.jsxs)(l.Z,{sx:{display:"grid",rowGap:3,columnGap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"}},children:[(0,i.jsx)(V.au,{name:"displayName",label:"Name"}),(0,i.jsx)(V.au,{name:"email",label:"Email Address"}),(0,i.jsx)(V.au,{name:"phoneNumber",label:"Phone Number"}),(0,i.jsx)(V.au,{name:"address",label:"Address"}),(0,i.jsxs)(V.Cc,{name:"country",label:"Country",placeholder:"Country",children:[(0,i.jsx)("option",{value:""}),x.hW.map((function(e){return(0,i.jsx)("option",{value:e.label,children:e.label},e.code)}))]}),(0,i.jsx)(V.au,{name:"state",label:"State/Region"}),(0,i.jsx)(V.au,{name:"city",label:"City"}),(0,i.jsx)(V.au,{name:"zipCode",label:"Zip/Code"})]}),(0,i.jsxs)(b.Z,{spacing:3,alignItems:"flex-end",sx:{mt:3},children:[(0,i.jsx)(V.au,{name:"about",multiline:!0,rows:4,label:"About"}),(0,i.jsx)(C.Z,{type:"submit",variant:"contained",loading:c,children:"Save Changes"})]})]})})]})})}var X=t(87109);function F(e,n,t,i,r,s,a){try{var o=e[s](a),l=o.value}catch(c){return void t(c)}o.done?n(l):Promise.resolve(l).then(i,r)}var G=[{value:"facebookLink",icon:(0,i.jsx)(p.Z,{icon:"eva:facebook-fill",width:24,height:24})},{value:"instagramLink",icon:(0,i.jsx)(p.Z,{icon:"ant-design:instagram-filled",width:24,height:24})},{value:"linkedinLink",icon:(0,i.jsx)(p.Z,{icon:"eva:linkedin-fill",width:24,height:24})},{value:"twitterLink",icon:(0,i.jsx)(p.Z,{icon:"eva:twitter-fill",width:24,height:24})}];function Y(e){var n=e.myProfile,t=(0,U.Ds)().enqueueSnackbar,r={facebookLink:n.facebookLink,instagramLink:n.instagramLink,linkedinLink:n.linkedinLink,twitterLink:n.twitterLink},s=(0,W.cI)({defaultValues:r}),a=s.handleSubmit,o=s.formState.isSubmitting,l=function(){var e,n=(e=T().mark((function e(n){return T().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:t("Update success!"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})),function(){var n=this,t=arguments;return new Promise((function(i,r){var s=e.apply(n,t);function a(e){F(s,i,r,a,o,"next",e)}function o(e){F(s,i,r,a,o,"throw",e)}a(void 0)}))});return function(e){return n.apply(this,arguments)}}();return(0,i.jsx)(g.Z,{sx:{p:3},children:(0,i.jsx)(V.RV,{methods:s,onSubmit:a(l),children:(0,i.jsxs)(b.Z,{spacing:3,alignItems:"flex-end",children:[G.map((function(e){return(0,i.jsx)(V.au,{name:e.value,InputProps:{startAdornment:(0,i.jsx)(X.Z,{position:"start",children:e.icon})}},e.value)})),(0,i.jsx)(C.Z,{type:"submit",variant:"contained",loading:o,children:"Save Changes"})]})})})}function J(e,n,t,i,r,s,a){try{var o=e[s](a),l=o.value}catch(c){return void t(c)}o.done?n(l):Promise.resolve(l).then(i,r)}var K=[{value:"activityComments",label:"Email me when someone comments onmy article"},{value:"activityAnswers",label:"Email me when someone answers on my form"},{value:"activityFollows",label:"Email me hen someone follows me"}],Q=[{value:"applicationNews",label:"News and announcements"},{value:"applicationProduct",label:"Weekly product updates"},{value:"applicationBlog",label:"Weekly blog digest"}],$=!0,ee=!0,ne=!1,te=!0,ie=!1,re=!1;function se(){var e=(0,U.Ds)().enqueueSnackbar,n={activityComments:$,activityAnswers:ee,activityFollows:ne,applicationNews:te,applicationProduct:ie,applicationBlog:re},t=(0,W.cI)({defaultValues:n}),r=t.handleSubmit,s=t.formState.isSubmitting,a=function(){var n,t=(n=T().mark((function n(t){return T().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:e("Update success!"),n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),console.error(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})),function(){var e=this,t=arguments;return new Promise((function(i,r){var s=n.apply(e,t);function a(e){J(s,i,r,a,o,"next",e)}function o(e){J(s,i,r,a,o,"throw",e)}a(void 0)}))});return function(e){return t.apply(this,arguments)}}();return(0,i.jsx)(g.Z,{sx:{p:3},children:(0,i.jsx)(V.RV,{methods:t,onSubmit:r(a),children:(0,i.jsxs)(b.Z,{spacing:3,alignItems:"flex-end",children:[(0,i.jsxs)(b.Z,{spacing:2,sx:{width:1},children:[(0,i.jsx)(w.Z,{variant:"overline",sx:{color:"text.secondary"},children:"Activity"}),(0,i.jsx)(b.Z,{spacing:1,children:K.map((function(e){return(0,i.jsx)(V._e,{name:e.value,label:e.label,sx:{m:0}},e.value)}))})]}),(0,i.jsxs)(b.Z,{spacing:2,sx:{width:1},children:[(0,i.jsx)(w.Z,{variant:"overline",sx:{color:"text.secondary"},children:"Application"}),(0,i.jsx)(b.Z,{spacing:1,children:Q.map((function(e){return(0,i.jsx)(V._e,{name:e.value,label:e.label,sx:{m:0}},e.value)}))})]}),(0,i.jsx)(C.Z,{type:"submit",variant:"contained",loading:s,children:"Save Changes"})]})})})}function ae(e,n,t,i,r,s,a){try{var o=e[s](a),l=o.value}catch(c){return void t(c)}o.done?n(l):Promise.resolve(l).then(i,r)}function oe(){var e=(0,U.Ds)().enqueueSnackbar,n=z.Ry().shape({oldPassword:z.Z_().required("Old Password is required"),newPassword:z.Z_().min(6,"Password must be at least 6 characters").required("New Password is required"),confirmNewPassword:z.Z_().oneOf([z.iH("newPassword"),null],"Passwords must match")}),t=(0,W.cI)({resolver:(0,q.X)(n),defaultValues:{oldPassword:"",newPassword:"",confirmNewPassword:""}}),r=t.reset,s=t.handleSubmit,a=t.formState.isSubmitting,o=function(){var n,t=(n=T().mark((function n(t){return T().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:r(),e("Update success!"),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})),function(){var e=this,t=arguments;return new Promise((function(i,r){var s=n.apply(e,t);function a(e){ae(s,i,r,a,o,"next",e)}function o(e){ae(s,i,r,a,o,"throw",e)}a(void 0)}))});return function(e){return t.apply(this,arguments)}}();return(0,i.jsx)(g.Z,{sx:{p:3},children:(0,i.jsx)(V.RV,{methods:t,onSubmit:s(o),children:(0,i.jsxs)(b.Z,{spacing:3,alignItems:"flex-end",children:[(0,i.jsx)(V.au,{name:"oldPassword",type:"password",label:"Old Password"}),(0,i.jsx)(V.au,{name:"newPassword",type:"password",label:"New Password"}),(0,i.jsx)(V.au,{name:"confirmNewPassword",type:"password",label:"Confirm New Password"}),(0,i.jsx)(C.Z,{type:"submit",variant:"contained",loading:a,children:"Save Changes"})]})})})}function le(){var e=(0,d.Z)().themeStretch,n=(0,u.Z)("general"),t=n.currentTab,h=n.onChangeTab,f=[{value:"general",icon:(0,i.jsx)(p.Z,{icon:"ic:round-account-box",width:20,height:20}),component:(0,i.jsx)(M,{})},{value:"billing",icon:(0,i.jsx)(p.Z,{icon:"ic:round-receipt",width:20,height:20}),component:(0,i.jsx)(R,{cards:x.Po,addressBook:x.n,invoices:x.aH})},{value:"notifications",icon:(0,i.jsx)(p.Z,{icon:"eva:bell-fill",width:20,height:20}),component:(0,i.jsx)(se,{})},{value:"social_links",icon:(0,i.jsx)(p.Z,{icon:"eva:share-fill",width:20,height:20}),component:(0,i.jsx)(Y,{myProfile:x.oE})},{value:"change_password",icon:(0,i.jsx)(p.Z,{icon:"ic:round-vpn-key",width:20,height:20}),component:(0,i.jsx)(oe,{})}];return(0,i.jsx)(m.Z,{title:"User: Account Settings",children:(0,i.jsxs)(s.Z,{maxWidth:!e&&"lg",children:[(0,i.jsx)(v.Z,{heading:"Account",links:[{name:"Dashboard",href:c.vB.root},{name:"User",href:c.vB.user.root},{name:"Account Settings"}]}),(0,i.jsx)(a.Z,{allowScrollButtonsMobile:!0,variant:"scrollable",scrollButtons:"auto",value:t,onChange:h,children:f.map((function(e){return(0,i.jsx)(o.Z,{disableRipple:!0,label:(0,r.I)(e.value),icon:e.icon,value:e.value},e.value)}))}),(0,i.jsx)(l.Z,{sx:{mb:5}}),f.map((function(e){return e.value===t&&(0,i.jsx)(l.Z,{children:e.component},e.value)}))]})})}le.getLayout=function(e){return(0,i.jsx)(h.Z,{children:e})}}},function(e){e.O(0,[631,910,243,9,346,770,97,774,888,179],(function(){return n=59175,e(e.s=n);var n}));var n=e.O();_N_E=n}]);