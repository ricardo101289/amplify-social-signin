(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[565],{29996:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/user/profile",function(){return r(28074)}])},35904:function(e,t,r){"use strict";r.d(t,{Z:function(){return j}});var n=r(85893),i=r(87357),o=r(15861),l=r(50122),a=r(41664),s=r.n(a),c=r(12963);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function h(e){var t=e.links,r=e.activeLast,l=void 0!==r&&r,a=d(e,["links","activeLast"]),s=t[t.length-1].name,h=t.map((function(e){return(0,n.jsx)(f,{link:e},e.name)})),x=t.map((function(e){return(0,n.jsx)("div",{children:e.name!==s?(0,n.jsx)(f,{link:e}):(0,n.jsx)(o.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:s})},e.name)}));return(0,n.jsx)(c.Z,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){u(e,t,r[t])}))}return e}({separator:(0,n.jsx)(i.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},a,{children:l?h:x}))}function f(e){var t=e.link,r=t.href,o=void 0===r?"":r,a=t.name,c=t.icon;return(0,n.jsx)(s(),{href:o,passHref:!0,children:(0,n.jsxs)(l.Z,{variant:"body2",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[c&&(0,n.jsx)(i.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:c}),a]},a)})}function x(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){x(e,t,r[t])}))}return e}function m(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function j(e){var t=e.links,r=e.action,a=e.heading,s=e.moreLink,c=void 0===s?[]:s,u=e.sx,d=m(e,["links","action","heading","moreLink","sx"]);return(0,n.jsxs)(i.Z,{sx:p({mb:5},u),children:[(0,n.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,n.jsxs)(i.Z,{sx:{flexGrow:1},children:[(0,n.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:a}),(0,n.jsx)(h,p({links:t},d))]}),r&&(0,n.jsx)(i.Z,{sx:{flexShrink:0},children:r})]}),(0,n.jsx)(i.Z,{sx:{mt:2},children:"string"===typeof c?(0,n.jsx)(l.Z,{href:c,target:"_blank",variant:"body2",children:c}):c.map((function(e){return(0,n.jsx)(l.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}},4292:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(67294);function i(e){var t=(0,n.useState)(e||""),r=t[0],i=t[1];return{currentTab:r,onChangeTab:function(e,t){i(t)},setCurrentTab:i}}},28074:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ze}});var n=r(85893),i=r(48389),o=r(67294),l=r(90948),a=r(53156),s=r(66242),c=r(88409),u=r(40044),d=r(87357),h=r(92924),f=r(4292),x=r(75920),p=r(64722),m=r(80334),j=r(6183),b=r(65656),g=r(28621),v=r(35904),y=r(86886),Z=r(26447),w=r(78445),O=r(15861),k=r(50122),P=(0,l.ZP)(g.Z)((function(e){return{width:20,height:20,marginTop:1,flexShrink:0,marginRight:e.theme.spacing(2)}}));function S(e){var t=e.profile,r=t.quote,i=t.country,o=t.email,l=t.role,a=t.company,c=t.school;return(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(w.Z,{title:"About"}),(0,n.jsxs)(Z.Z,{spacing:2,sx:{p:3},children:[(0,n.jsx)(O.Z,{variant:"body2",children:r}),(0,n.jsxs)(Z.Z,{direction:"row",children:[(0,n.jsx)(P,{icon:"eva:pin-fill"}),(0,n.jsxs)(O.Z,{variant:"body2",children:["Live at \xa0",(0,n.jsx)(k.Z,{component:"span",variant:"subtitle2",color:"text.primary",children:i})]})]}),(0,n.jsxs)(Z.Z,{direction:"row",children:[(0,n.jsx)(P,{icon:"eva:email-fill"}),(0,n.jsx)(O.Z,{variant:"body2",children:o})]}),(0,n.jsxs)(Z.Z,{direction:"row",children:[(0,n.jsx)(P,{icon:"ic:round-business-center"}),(0,n.jsxs)(O.Z,{variant:"body2",children:[l," at \xa0",(0,n.jsx)(k.Z,{component:"span",variant:"subtitle2",color:"text.primary",children:a})]})]}),(0,n.jsxs)(Z.Z,{direction:"row",children:[(0,n.jsx)(P,{icon:"ic:round-business-center"}),(0,n.jsxs)(O.Z,{variant:"body2",children:["Studied at \xa0",(0,n.jsx)(k.Z,{component:"span",variant:"subtitle2",color:"text.primary",children:c})]})]})]})]})}var C=r(93946),I=r(50480),_=r(69368),E=r(51107),F=r(87952),R=r(55113),L=r(9573),z=r(87109),B=r(54491),W=r(71674),D=r(45562),T=r(83112),N=(r(48330),r(35829)),A=r(2734),M=r(23926),U=r(35617);function G(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){G(e,t,r[t])}))}return e}function Q(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var V=(0,l.ZP)(d.Z)({position:"relative"}),H=(0,l.ZP)("div")((function(e){var t=e.theme;return{bottom:40,overflow:"hidden",position:"absolute",left:t.spacing(-2),boxShadow:t.customShadows.z20,borderRadius:2*Number(t.shape.borderRadius),"& .emoji-mart":{border:"none",backgroundColor:t.palette.background.paper},"& .emoji-mart-anchor":{color:t.palette.text.disabled,"&:hover, &:focus, &.emoji-mart-anchor-selected":{color:t.palette.text.primary}},"& .emoji-mart-bar":{borderColor:t.palette.divider},"& .emoji-mart-search input":{backgroundColor:"transparent",color:t.palette.text.primary,borderColor:t.palette.grey[50032],"&::placeholder":q({},t.typography.body2,{color:t.palette.text.disabled})},"& .emoji-mart-search-icon svg":{opacity:1,fill:t.palette.text.disabled},"& .emoji-mart-category-label span":q({},t.typography.subtitle2,(0,U.Z)().bgBlur({color:t.palette.background.paper}),{color:t.palette.text.primary}),"& .emoji-mart-title-label":{color:t.palette.text.primary},"& .emoji-mart-category .emoji-mart-emoji:hover:before":{backgroundColor:t.palette.action.selected},"& .emoji-mart-emoji":{outline:"none"},"& .emoji-mart-preview-name":{color:t.palette.text.primary},"& .emoji-mart-preview-shortname, .emoji-mart-preview-emoticon":{color:t.palette.text.secondary}}}));function K(e){var t,r=e.disabled,i=e.value,l=e.setValue,a=e.alignRight,s=void 0!==a&&a,c=Q(e,["disabled","value","setValue","alignRight"]),u=(0,A.Z)(),d=(0,o.useState)(!1),h=d[0],f=d[1];h&&(t=(0,n.jsx)(N.cW,{color:u.palette.primary.main,title:"Pick your emoji\u2026",emoji:"point_up",onSelect:function(e){return l(i+(null===e||void 0===e?void 0:e.native))}}));return(0,n.jsx)(M.Z,{onClickAway:function(){f(!1)},children:(0,n.jsxs)(V,q({},c,{children:[(0,n.jsx)(H,{sx:q({},s&&{right:-2,left:"auto !important"}),children:t}),(0,n.jsx)(C.Z,{disabled:r,size:"small",onClick:function(e){e.preventDefault(),f(!h)},children:(0,n.jsx)(g.Z,{icon:"eva:smiling-face-fill",width:20,height:20})})]}))})}function X(e){var t=e.post,r=(0,x.Z)().user,i=(0,o.useRef)(null),l=(0,o.useRef)(null),a=(0,o.useState)(t.isLiked),c=a[0],u=a[1],h=(0,o.useState)(t.personLikes.length),f=h[0],p=h[1],m=(0,o.useState)(""),j=m[0],b=m[1],v=t.comments.length>0;return(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(w.Z,{disableTypography:!0,avatar:(0,n.jsx)(T.Z,{}),title:(0,n.jsx)(k.Z,{variant:"subtitle2",color:"text.primary",children:null===r||void 0===r?void 0:r.displayName}),subheader:(0,n.jsx)(O.Z,{variant:"caption",sx:{display:"block",color:"text.secondary"},children:(0,B.Mu)(t.createdAt)}),action:(0,n.jsx)(C.Z,{children:(0,n.jsx)(g.Z,{icon:"eva:more-vertical-fill",width:20,height:20})})}),(0,n.jsxs)(Z.Z,{spacing:3,sx:{p:3},children:[(0,n.jsx)(O.Z,{children:t.message}),(0,n.jsx)(D.Z,{alt:"post media",src:t.media,ratio:"16/9",sx:{borderRadius:1}}),(0,n.jsxs)(Z.Z,{direction:"row",alignItems:"center",children:[(0,n.jsx)(I.Z,{control:(0,n.jsx)(_.Z,{size:"small",color:"error",checked:c,icon:(0,n.jsx)(g.Z,{icon:"eva:heart-fill"}),checkedIcon:(0,n.jsx)(g.Z,{icon:"eva:heart-fill"}),onChange:c?function(){u(!1),p((function(e){return e-1}))}:function(){u(!0),p((function(e){return e+1}))}}),label:(0,W.v1)(f),sx:{minWidth:72,mr:0}}),(0,n.jsx)(E.Z,{max:4,sx:{"& .MuiAvatar-root":{width:32,height:32}},children:t.personLikes.map((function(e){return(0,n.jsx)(F.Z,{alt:e.name,src:e.avatarUrl},e.name)}))}),(0,n.jsx)(d.Z,{sx:{flexGrow:1}}),(0,n.jsx)(C.Z,{onClick:function(){var e;null===(e=i.current)||void 0===e||e.focus()},children:(0,n.jsx)(g.Z,{icon:"eva:message-square-fill",width:20,height:20})}),(0,n.jsx)(C.Z,{children:(0,n.jsx)(g.Z,{icon:"eva:share-fill",width:20,height:20})})]}),v&&(0,n.jsx)(Z.Z,{spacing:1.5,children:t.comments.map((function(e){return(0,n.jsxs)(Z.Z,{direction:"row",spacing:2,children:[(0,n.jsx)(F.Z,{alt:e.author.name,src:e.author.avatarUrl}),(0,n.jsxs)(R.Z,{sx:{p:1.5,flexGrow:1,bgcolor:"background.neutral"},children:[(0,n.jsxs)(Z.Z,{direction:{xs:"column",sm:"row"},alignItems:{sm:"center"},justifyContent:"space-between",sx:{mb:.5},children:[(0,n.jsx)(O.Z,{variant:"subtitle2",children:e.author.name}),(0,n.jsx)(O.Z,{variant:"caption",sx:{color:"text.disabled"},children:(0,B.Mu)(e.createdAt)})]}),(0,n.jsx)(O.Z,{variant:"body2",sx:{color:"text.secondary"},children:e.message})]})]},e.id)}))}),(0,n.jsxs)(Z.Z,{direction:"row",alignItems:"center",children:[(0,n.jsx)(T.Z,{}),(0,n.jsx)(L.Z,{fullWidth:!0,size:"small",value:j,inputRef:i,placeholder:"Write a comment\u2026",onChange:function(e){return t=e.target.value,void b(t);var t},InputProps:{endAdornment:(0,n.jsxs)(z.Z,{position:"end",children:[(0,n.jsx)(C.Z,{size:"small",onClick:function(){var e;null===(e=l.current)||void 0===e||e.click()},children:(0,n.jsx)(g.Z,{icon:"ic:round-add-photo-alternate",width:24,height:24})}),(0,n.jsx)(K,{alignRight:!0,value:j,setValue:b})]})},sx:{ml:2,mr:1,"& fieldset":{borderWidth:"1px !important",borderColor:function(e){return"".concat(e.palette.grey[50032]," !important")}}}}),(0,n.jsx)(C.Z,{children:(0,n.jsx)(g.Z,{icon:"ic:round-send",width:24,height:24})}),(0,n.jsx)("input",{type:"file",ref:l,style:{display:"none"}})]})]})]})}var Y=r(83321);function J(){var e=(0,o.useRef)(null),t=function(){var t;null===(t=e.current)||void 0===t||t.click()};return(0,n.jsxs)(s.Z,{sx:{p:3},children:[(0,n.jsx)(L.Z,{multiline:!0,fullWidth:!0,rows:4,placeholder:"Share what you are thinking here...",sx:{"& fieldset":{borderWidth:"1px !important",borderColor:function(e){return"".concat(e.palette.grey[50032]," !important")}}}}),(0,n.jsxs)(d.Z,{sx:{mt:3,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,n.jsxs)(d.Z,{sx:{display:"flex"},children:[(0,n.jsx)(C.Z,{size:"small",onClick:t,sx:{mr:1},children:(0,n.jsx)(g.Z,{icon:"ic:round-add-photo-alternate",width:24,height:24})}),(0,n.jsx)(C.Z,{size:"small",onClick:t,children:(0,n.jsx)(g.Z,{icon:"eva:attach-2-fill",width:24,height:24})})]}),(0,n.jsx)(Y.Z,{variant:"contained",children:"Post"})]}),(0,n.jsx)("input",{ref:e,type:"file",style:{display:"none"}})]})}var $=r(67720);function ee(e){var t=e.profile,r=t.follower,i=t.following;return(0,n.jsx)(s.Z,{sx:{py:3},children:(0,n.jsxs)(Z.Z,{direction:"row",divider:(0,n.jsx)($.Z,{orientation:"vertical",flexItem:!0}),children:[(0,n.jsxs)(Z.Z,{width:1,textAlign:"center",children:[(0,n.jsx)(O.Z,{variant:"h4",children:(0,W.FK)(r)}),(0,n.jsx)(O.Z,{variant:"body2",sx:{color:"text.secondary"},children:"Follower"})]}),(0,n.jsxs)(Z.Z,{width:1,textAlign:"center",children:[(0,n.jsx)(O.Z,{variant:"h4",children:(0,W.FK)(i)}),(0,n.jsx)(O.Z,{variant:"body2",sx:{color:"text.secondary"},children:"Following"})]})]})})}var te=(0,l.ZP)(g.Z)((function(e){return{width:20,height:20,marginTop:1,flexShrink:0,marginRight:e.theme.spacing(2)}}));function re(e){var t=e.profile,r=t.facebookLink,i=t.instagramLink,o=t.linkedinLink,l=t.twitterLink,a=[{name:"Linkedin",icon:(0,n.jsx)(te,{icon:"eva:linkedin-fill",color:"#006097"}),href:o},{name:"Twitter",icon:(0,n.jsx)(te,{icon:"eva:twitter-fill",color:"#1C9CEA"}),href:l},{name:"Instagram",icon:(0,n.jsx)(te,{icon:"ant-design:instagram-filled",color:"#D7336D"}),href:i},{name:"Facebook",icon:(0,n.jsx)(te,{icon:"eva:facebook-fill",color:"#1877F2"}),href:r}];return(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(w.Z,{title:"Social"}),(0,n.jsx)(Z.Z,{spacing:2,sx:{p:3},children:a.map((function(e){return(0,n.jsxs)(Z.Z,{direction:"row",alignItems:"center",children:[e.icon,(0,n.jsx)(k.Z,{component:"span",variant:"body2",color:"text.primary",noWrap:!0,children:e.href})]},e.name)}))})]})}function ne(e){var t=e.myProfile,r=e.posts;return(0,n.jsxs)(y.ZP,{container:!0,spacing:3,children:[(0,n.jsx)(y.ZP,{item:!0,xs:12,md:4,children:(0,n.jsxs)(Z.Z,{spacing:3,children:[(0,n.jsx)(ee,{profile:t}),(0,n.jsx)(S,{profile:t}),(0,n.jsx)(re,{profile:t})]})}),(0,n.jsx)(y.ZP,{item:!0,xs:12,md:8,children:(0,n.jsxs)(Z.Z,{spacing:3,children:[(0,n.jsx)(J,{}),r.map((function(e){return(0,n.jsx)(X,{post:e},e.id)}))]})})]})}function ie(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function oe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){ie(e,t,r[t])}))}return e}var le=(0,l.ZP)("div")((function(e){var t=e.theme;return{"&:before":oe({},(0,U.Z)().bgBlur({blur:2,color:t.palette.primary.darker}),{top:0,zIndex:9,content:"''",width:"100%",height:"100%",position:"absolute"})}})),ae=(0,l.ZP)("div")((function(e){var t=e.theme;return ie({left:0,right:0,zIndex:99,position:"absolute",marginTop:t.spacing(5)},t.breakpoints.up("md"),{right:"auto",display:"flex",alignItems:"center",left:t.spacing(3),bottom:t.spacing(3)})}));function se(e){var t=e.myProfile,r=(0,x.Z)().user,i=t.position,o=t.cover;return(0,n.jsxs)(le,{children:[(0,n.jsxs)(ae,{children:[(0,n.jsx)(T.Z,{sx:{mx:"auto",borderWidth:2,borderStyle:"solid",borderColor:"common.white",width:{xs:80,md:128},height:{xs:80,md:128}}}),(0,n.jsxs)(d.Z,{sx:{ml:{md:3},mt:{xs:1,md:0},color:"common.white",textAlign:{xs:"center",md:"left"}},children:[(0,n.jsx)(O.Z,{variant:"h4",children:null===r||void 0===r?void 0:r.displayName}),(0,n.jsx)(O.Z,{sx:{opacity:.72},children:i})]})]}),(0,n.jsx)(D.Z,{alt:"profile cover",src:o,sx:{position:"absolute",top:0,left:0,right:0,bottom:0}})]})}function ce(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ue(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){ce(e,t,r[t])}))}return e}var de=(0,l.ZP)(L.Z,{shouldForwardProp:function(e){return"stretchStart"!==e}})((function(e){var t=e.stretchStart,r=e.theme;return{"& .MuiOutlinedInput-root":ue({transition:r.transitions.create(["box-shadow","width"],{easing:r.transitions.easing.easeInOut,duration:r.transitions.duration.shorter}),"&.Mui-focused":{boxShadow:r.customShadows.z12}},t&&{width:t,"&.Mui-focused":ce({boxShadow:r.customShadows.z12},r.breakpoints.up("sm"),{width:t+60})}),"& fieldset":{borderWidth:"1px !important",borderColor:"".concat(r.palette.grey[50032]," !important")}}})),he=r(56053);function fe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function xe(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function pe(e){var t=e.searchQuery,r=void 0===t?"":t,i=xe(e,["searchQuery"]);return r?(0,n.jsxs)(R.Z,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){fe(e,t,r[t])}))}return e}({},i,{children:[(0,n.jsx)(O.Z,{gutterBottom:!0,align:"center",variant:"subtitle1",children:"Not found"}),(0,n.jsxs)(O.Z,{variant:"body2",align:"center",children:["No results found for \xa0",(0,n.jsxs)("strong",{children:['"',r,'"']}),". Try checking for typos or using complete words."]})]})):(0,n.jsx)(O.Z,{variant:"body2",children:" Please enter keywords"})}function me(e){var t=e.friends,r=e.findFriends,i=e.onFindFriends,o=function(e,t){if(t)return e.filter((function(e){return-1!==e.name.toLowerCase().indexOf(t.toLowerCase())}));return e}(t,r),l=0===o.length;return(0,n.jsxs)(d.Z,{sx:{mt:5},children:[(0,n.jsx)(O.Z,{variant:"h4",sx:{mb:3},children:"Friends"}),(0,n.jsx)(de,{stretchStart:240,value:r,onChange:function(e){return i(e.target.value)},placeholder:"Find friends...",InputProps:{startAdornment:(0,n.jsx)(z.Z,{position:"start",children:(0,n.jsx)(g.Z,{icon:"eva:search-fill",sx:{color:"text.disabled",width:20,height:20}})})},sx:{mb:5}}),(0,n.jsx)(y.ZP,{container:!0,spacing:3,children:o.map((function(e){return(0,n.jsx)(y.ZP,{item:!0,xs:12,md:4,children:(0,n.jsx)(je,{friend:e})},e.id)}))}),l&&(0,n.jsx)(d.Z,{sx:{mt:5},children:(0,n.jsx)(pe,{searchQuery:r})})]})}function je(e){var t=e.friend,r=t.name,i=t.role,o=t.avatarUrl;return(0,n.jsxs)(s.Z,{sx:{py:5,display:"flex",position:"relative",alignItems:"center",flexDirection:"column"},children:[(0,n.jsx)(F.Z,{alt:r,src:o,sx:{width:64,height:64,mb:3}}),(0,n.jsx)(k.Z,{variant:"subtitle1",color:"text.primary",children:r}),(0,n.jsx)(O.Z,{variant:"body2",sx:{color:"text.secondary",mb:1},children:i}),(0,n.jsx)(he.Z,{initialColor:!0}),(0,n.jsx)(C.Z,{sx:{top:8,right:8,position:"absolute"},children:(0,n.jsx)(g.Z,{icon:"eva:more-vertical-fill",width:20,height:20})})]})}var be=r(44267),ge=r(92879),ve=r(41796),ye=r(42287);function Ze(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function we(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){Ze(e,t,r[t])}))}return e}function Oe(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function ke(){var e=(0,A.Z)(),t="rtl"===e.direction,r=e.palette.grey[600].replace("#",""),i=function(e){return"url(https://api.iconify.design/carbon/".concat(e,".svg?color=%23").concat(r,"&width=").concat(32,"&height=").concat(32,")")},o=function(t){return{opacity:1,alignItems:"center",display:"inline-flex",justifyContent:"center",backgroundImage:"unset",backgroundColor:"transparent",transition:e.transitions.create("opacity"),"&:before":{display:"block",width:32,height:32,content:i(t)},"&:hover":{opacity:.72}}};return(0,n.jsx)(ye.Z,{styles:{"& .ReactModalPortal":{"& .ril__outer":{backgroundColor:(0,ve.Fq)(e.palette.grey[900],.96)},"& .ril__toolbar":{height:"auto !important",padding:e.spacing(2,3),backgroundColor:"transparent"},"& .ril__toolbarLeftSide":{display:"none"},"& .ril__toolbarRightSide":{height:"auto !important",padding:0,flexGrow:1,display:"flex",alignItems:"center","& li":{display:"flex",alignItems:"center"},"& li:first-of-type":{flexGrow:1},"& li:not(:first-of-type)":{width:40,height:40,justifyContent:"center",marginLeft:e.spacing(2)}},"& button:focus":{outline:"none"},"& .ril__toolbarRightSide button":{width:"100%",height:"100%","&.ril__zoomInButton":o("zoom-in"),"&.ril__zoomOutButton":o("zoom-out"),"&.ril__closeButton":o("close")},"& .ril__navButtons":{padding:e.spacing(3),"&.ril__navButtonPrev":we({right:"auto",left:e.spacing(2)},o(t?"arrow-right":"arrow-left")),"&.ril__navButtonNext":we({left:"auto",right:e.spacing(2)},o(t?"arrow-left":"arrow-right"))}}}})}function Pe(e){var t=e.images,r=e.photoIndex,i=e.setPhotoIndex,l=e.isOpen,a=Oe(e,["images","photoIndex","setPhotoIndex","isOpen"]);(0,o.useEffect)((function(){document.body.style.overflow=l?"hidden":""}),[l]);var s=[(0,n.jsx)(O.Z,{variant:"subtitle2",children:"".concat(r+1," / ").concat(t.length)})];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ke,{}),l&&(0,n.jsx)(ge.Z,we({animationDuration:160,nextSrc:t[(r+1)%t.length],prevSrc:t[(r+t.length-1)%t.length],onMovePrevRequest:function(){return i((r+t.length-1)%t.length)},onMoveNextRequest:function(){return i((r+1)%t.length)},toolbarButtons:s,reactModalStyle:{overlay:{zIndex:9999}}},a))]})}function Se(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Ce=(0,l.ZP)(be.Z)((function(e){var t=e.theme;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){Se(e,t,r[t])}))}return e}({},(0,U.Z)().bgBlur({blur:2,color:t.palette.grey[900]}),{bottom:0,width:"100%",display:"flex",alignItems:"center",position:"absolute",justifyContent:"space-between",color:t.palette.common.white})}));function Ie(e){var t=e.gallery,r=(0,o.useState)(!1),i=r[0],l=r[1],a=(0,o.useState)(0),c=a[0],u=a[1],h=t.map((function(e){return e.imageUrl})),f=function(e){var t=h.findIndex((function(t){return t===e}));l(!0),u(t)};return(0,n.jsxs)(d.Z,{sx:{mt:5},children:[(0,n.jsx)(O.Z,{variant:"h4",sx:{mb:3},children:"Gallery"}),(0,n.jsxs)(s.Z,{sx:{p:3},children:[(0,n.jsx)(d.Z,{sx:{display:"grid",gap:3,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"}},children:t.map((function(e){return(0,n.jsx)(_e,{image:e,onOpenLightbox:f},e.id)}))}),(0,n.jsx)(Pe,{images:h,mainSrc:h[c],photoIndex:c,setPhotoIndex:u,isOpen:i,onCloseRequest:function(){return l(!1)}})]})]})}function _e(e){var t=e.image,r=e.onOpenLightbox,i=t.imageUrl,o=t.title,l=t.postAt;return(0,n.jsxs)(s.Z,{sx:{cursor:"pointer",position:"relative"},children:[(0,n.jsx)(D.Z,{alt:"gallery image",ratio:"1/1",src:i,onClick:function(){return r(i)}}),(0,n.jsxs)(Ce,{children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(O.Z,{variant:"subtitle1",children:o}),(0,n.jsx)(O.Z,{variant:"body2",sx:{opacity:.72},children:(0,B.Mu)(l)})]}),(0,n.jsx)(C.Z,{color:"inherit",children:(0,n.jsx)(g.Z,{icon:"eva:more-vertical-fill",width:20,height:20})})]})]})}function Ee(e){var t=e.followers;return(0,n.jsxs)(d.Z,{sx:{mt:5},children:[(0,n.jsx)(O.Z,{variant:"h4",sx:{mb:3},children:"Followers"}),(0,n.jsx)(y.ZP,{container:!0,spacing:3,children:t.map((function(e){return(0,n.jsx)(y.ZP,{item:!0,xs:12,md:4,children:(0,n.jsx)(Fe,{follower:e})},e.id)}))})]})}function Fe(e){var t=e.follower,r=t.name,i=t.country,l=t.avatarUrl,a=t.isFollowed,c=(0,o.useState)(a),u=c[0],h=c[1];return(0,n.jsxs)(s.Z,{sx:{display:"flex",alignItems:"center",p:3},children:[(0,n.jsx)(F.Z,{alt:r,src:l,sx:{width:48,height:48}}),(0,n.jsxs)(d.Z,{sx:{flexGrow:1,minWidth:0,pl:2,pr:1},children:[(0,n.jsx)(O.Z,{variant:"subtitle2",noWrap:!0,children:r}),(0,n.jsxs)(d.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,n.jsx)(g.Z,{icon:"eva:pin-fill",sx:{width:16,height:16,mr:.5,flexShrink:0}}),(0,n.jsx)(O.Z,{variant:"body2",sx:{color:"text.secondary"},noWrap:!0,children:i})]})]}),(0,n.jsx)(Y.Z,{size:"small",onClick:function(){return h(!u)},variant:u?"text":"outlined",color:u?"primary":"inherit",startIcon:u&&(0,n.jsx)(g.Z,{icon:"eva:checkmark-fill"}),children:u?"Followed":"Follow"})]})}function Re(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Le=(0,l.ZP)("div")((function(e){var t,r=e.theme;return Re(t={zIndex:9,bottom:0,width:"100%",display:"flex",position:"absolute",backgroundColor:r.palette.background.paper},r.breakpoints.up("sm"),{justifyContent:"center"}),Re(t,r.breakpoints.up("md"),{justifyContent:"flex-end",paddingRight:r.spacing(3)}),t}));function ze(){var e=(0,p.Z)().themeStretch,t=(0,x.Z)().user,r=(0,f.Z)("profile"),l=r.currentTab,j=r.onChangeTab,y=(0,o.useState)(""),Z=y[0],w=y[1],O=[{value:"profile",icon:(0,n.jsx)(g.Z,{icon:"ic:round-account-box",width:20,height:20}),component:(0,n.jsx)(ne,{myProfile:m.oE,posts:m.c8})},{value:"followers",icon:(0,n.jsx)(g.Z,{icon:"eva:heart-fill",width:20,height:20}),component:(0,n.jsx)(Ee,{followers:m.gY})},{value:"friends",icon:(0,n.jsx)(g.Z,{icon:"eva:people-fill",width:20,height:20}),component:(0,n.jsx)(me,{friends:m.fw,findFriends:Z,onFindFriends:function(e){w(e)}})},{value:"gallery",icon:(0,n.jsx)(g.Z,{icon:"ic:round-perm-media",width:20,height:20}),component:(0,n.jsx)(Ie,{gallery:m.BU})}];return(0,n.jsx)(b.Z,{title:"User: Profile",children:(0,n.jsxs)(a.Z,{maxWidth:!e&&"lg",children:[(0,n.jsx)(v.Z,{heading:"Profile",links:[{name:"Dashboard",href:h.vB.root},{name:"User",href:h.vB.user.root},{name:(null===t||void 0===t?void 0:t.displayName)||""}]}),(0,n.jsxs)(s.Z,{sx:{mb:3,height:280,position:"relative"},children:[(0,n.jsx)(se,{myProfile:m.oE}),(0,n.jsx)(Le,{children:(0,n.jsx)(c.Z,{allowScrollButtonsMobile:!0,variant:"scrollable",scrollButtons:"auto",value:l,onChange:j,children:O.map((function(e){return(0,n.jsx)(u.Z,{disableRipple:!0,value:e.value,icon:e.icon,label:(0,i.I)(e.value)},e.value)}))})})]}),O.map((function(e){return e.value===l&&(0,n.jsx)(d.Z,{children:e.component},e.value)}))]})})}ze.getLayout=function(e){return(0,n.jsx)(j.Z,{children:e})}}},function(e){e.O(0,[631,229,910,243,9,346,43,770,97,774,888,179],(function(){return t=29996,e(e.s=t);var t}));var t=e.O();_N_E=t}]);