(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[831],{12963:function(e,r,t){"use strict";t.d(r,{Z:function(){return S}});var n=t(87462),o=t(63366),i=t(67294),a=(t(59864),t(86010)),s=t(94780),l=t(90948),c=t(71657),d=t(15861),u=t(41796),p=t(82066),f=t(85893),h=(0,p.Z)((0,f.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),x=t(82607);const m=(0,l.ZP)(x.Z)((({theme:e})=>(0,n.Z)({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},"light"===e.palette.mode?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,n.Z)({},"light"===e.palette.mode?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":(0,n.Z)({boxShadow:e.shadows[0]},"light"===e.palette.mode?{backgroundColor:(0,u._4)(e.palette.grey[200],.12)}:{backgroundColor:(0,u._4)(e.palette.grey[600],.12)})}))),b=(0,l.ZP)(h)({width:24,height:16});var g=function(e){const r=e;return(0,f.jsx)("li",{children:(0,f.jsx)(m,(0,n.Z)({focusRipple:!0},e,{ownerState:r,children:(0,f.jsx)(b,{ownerState:r})}))})},v=t(34867);function j(e){return(0,v.Z)("MuiBreadcrumbs",e)}var y=(0,t(1588).Z)("MuiBreadcrumbs",["root","ol","li","separator"]);const Z=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],w=(0,l.ZP)(d.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,r)=>[{[`& .${y.li}`]:r.li},r.root]})({}),O=(0,l.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,r)=>r.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),k=(0,l.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,r)=>r.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function P(e,r,t,n){return e.reduce(((o,i,a)=>(a<e.length-1?o=o.concat(i,(0,f.jsx)(k,{"aria-hidden":!0,className:r,ownerState:n,children:t},`separator-${a}`)):o.push(i),o)),[])}var S=i.forwardRef((function(e,r){const t=(0,c.Z)({props:e,name:"MuiBreadcrumbs"}),{children:l,className:d,component:u="nav",expandText:p="Show path",itemsAfterCollapse:h=1,itemsBeforeCollapse:x=1,maxItems:m=8,separator:b="/"}=t,v=(0,o.Z)(t,Z),[y,k]=i.useState(!1),S=(0,n.Z)({},t,{component:u,expanded:y,expandText:p,itemsAfterCollapse:h,itemsBeforeCollapse:x,maxItems:m,separator:b}),C=(e=>{const{classes:r}=e;return(0,s.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},j,r)})(S),_=i.useRef(null),B=i.Children.toArray(l).filter((e=>i.isValidElement(e))).map(((e,r)=>(0,f.jsx)("li",{className:C.li,children:e},`child-${r}`)));return(0,f.jsx)(w,(0,n.Z)({ref:r,component:u,color:"text.secondary",className:(0,a.Z)(C.root,d),ownerState:S},v,{children:(0,f.jsx)(O,{className:C.ol,ref:_,ownerState:S,children:P(y||m&&B.length<=m?B:(e=>x+h>=e.length?e:[...e.slice(0,x),(0,f.jsx)(g,{"aria-label":p,onClick:()=>{k(!0);const e=_.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis"),...e.slice(e.length-h,e.length)])(B),C.separator,b,S)})}))}))},21371:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/user/cards",function(){return t(27561)}])},35904:function(e,r,t){"use strict";t.d(r,{Z:function(){return b}});var n=t(85893),o=t(87357),i=t(15861),a=t(50122),s=t(41664),l=t.n(s),c=t(12963);function d(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function p(e){var r=e.links,t=e.activeLast,a=void 0!==t&&t,s=u(e,["links","activeLast"]),l=r[r.length-1].name,p=r.map((function(e){return(0,n.jsx)(f,{link:e},e.name)})),h=r.map((function(e){return(0,n.jsx)("div",{children:e.name!==l?(0,n.jsx)(f,{link:e}):(0,n.jsx)(i.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:l})},e.name)}));return(0,n.jsx)(c.Z,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){d(e,r,t[r])}))}return e}({separator:(0,n.jsx)(o.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},s,{children:a?p:h}))}function f(e){var r=e.link,t=r.href,i=void 0===t?"":t,s=r.name,c=r.icon;return(0,n.jsx)(l(),{href:i,passHref:!0,children:(0,n.jsxs)(a.Z,{variant:"body2",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[c&&(0,n.jsx)(o.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:c}),s]},s)})}function h(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function x(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){h(e,r,t[r])}))}return e}function m(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function b(e){var r=e.links,t=e.action,s=e.heading,l=e.moreLink,c=void 0===l?[]:l,d=e.sx,u=m(e,["links","action","heading","moreLink","sx"]);return(0,n.jsxs)(o.Z,{sx:x({mb:5},d),children:[(0,n.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,n.jsxs)(o.Z,{sx:{flexGrow:1},children:[(0,n.jsx)(i.Z,{variant:"h4",gutterBottom:!0,children:s}),(0,n.jsx)(p,x({links:r},u))]}),t&&(0,n.jsx)(o.Z,{sx:{flexShrink:0},children:t})]}),(0,n.jsx)(o.Z,{sx:{mt:2},children:"string"===typeof c?(0,n.jsx)(a.Z,{href:c,target:"_blank",variant:"body2",children:c}):c.map((function(e){return(0,n.jsx)(a.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}},27561:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return P}});var n=t(85893),o=t(53156),i=t(87357),a=t(92924),s=t(64722),l=t(80334),c=t(6183),d=t(65656),u=t(35904),p=t(90948),f=t(66242),h=t(87952),x=t(15861),m=t(26447),b=t(67720),g=t(35617),v=t(71674),j=t(45562),y=t(56053),Z=t(33534);function w(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var O=(0,p.ZP)("div")((function(e){var r=e.theme;return function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){w(e,r,t[r])}))}return e}({},(0,g.Z)().bgBlur({blur:2,color:r.palette.primary.darker}),{top:0,zIndex:8,content:"''",width:"100%",height:"100%",position:"absolute"})}));function k(e){var r=e.user,t=r.name,o=r.cover,a=r.position,s=r.follower,l=r.totalPost,c=r.avatarUrl,d=r.following;return(0,n.jsxs)(f.Z,{sx:{textAlign:"center"},children:[(0,n.jsxs)(i.Z,{sx:{position:"relative"},children:[(0,n.jsx)(Z.Z,{src:"https://minimal-assets-api-dev.vercel.app/assets/icons/shape-avatar.svg",sx:{width:144,height:62,zIndex:10,left:0,right:0,bottom:-26,mx:"auto",position:"absolute",color:"background.paper"}}),(0,n.jsx)(h.Z,{alt:t,src:c,sx:{width:64,height:64,zIndex:11,left:0,right:0,bottom:-32,mx:"auto",position:"absolute"}}),(0,n.jsx)(O,{}),(0,n.jsx)(j.Z,{src:o,alt:o,ratio:"16/9"})]}),(0,n.jsx)(x.Z,{variant:"subtitle1",sx:{mt:6},children:t}),(0,n.jsx)(x.Z,{variant:"body2",sx:{color:"text.secondary"},children:a}),(0,n.jsx)(m.Z,{alignItems:"center",children:(0,n.jsx)(y.Z,{initialColor:!0,sx:{my:2.5}})}),(0,n.jsx)(b.Z,{sx:{borderStyle:"dashed"}}),(0,n.jsxs)(i.Z,{sx:{py:3,display:"grid",gridTemplateColumns:"repeat(3, 1fr)"},children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(x.Z,{variant:"caption",component:"div",sx:{mb:.75,color:"text.disabled"},children:"Follower"}),(0,n.jsx)(x.Z,{variant:"subtitle1",children:(0,v.v1)(s)})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(x.Z,{variant:"caption",component:"div",sx:{mb:.75,color:"text.disabled"},children:"Following"}),(0,n.jsx)(x.Z,{variant:"subtitle1",children:(0,v.v1)(d)})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(x.Z,{variant:"caption",component:"div",sx:{mb:.75,color:"text.disabled"},children:"Total Post"}),(0,n.jsx)(x.Z,{variant:"subtitle1",children:(0,v.v1)(l)})]})]})]})}function P(){var e=(0,s.Z)().themeStretch;return(0,n.jsx)(d.Z,{title:"User: Cards",children:(0,n.jsxs)(o.Z,{maxWidth:!e&&"lg",children:[(0,n.jsx)(u.Z,{heading:"User Cards",links:[{name:"Dashboard",href:a.vB.root},{name:"User",href:a.vB.user.root},{name:"Cards"}]}),(0,n.jsx)(i.Z,{sx:{display:"grid",gap:3,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"}},children:l.oe.map((function(e){return(0,n.jsx)(k,{user:e},e.id)}))})]})})}P.getLayout=function(e){return(0,n.jsx)(c.Z,{children:e})}}},function(e){e.O(0,[631,910,243,9,770,97,774,888,179],(function(){return r=21371,e(e.s=r);var r}));var r=e.O();_N_E=r}]);