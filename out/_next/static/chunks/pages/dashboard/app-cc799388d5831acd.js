(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[835],{87693:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/app",function(){return r(67270)}])},53471:function(e,t,r){"use strict";r.d(t,{$W:function(){return v},K:function(){return I},V7:function(){return m},et:function(){return p},Nl:function(){return N}});var n=r(85893),i=r(68509),o=r(53252),l=r(90948),a=r(87357),c=r(15861),s=r(45562);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var f=(0,l.ZP)(a.Z)((function(e){return{height:"100%",display:"flex",textAlign:"center",alignItems:"center",flexDirection:"column",justifyContent:"center",padding:e.theme.spacing(8,2)}}));function h(e){var t=e.title,r=e.description,i=e.img,o=d(e,["title","description","img"]);return(0,n.jsxs)(f,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){u(e,t,r[t])}))}return e}({},o,{children:[(0,n.jsx)(s.Z,{disabledEffect:!0,visibleByDefault:!0,alt:"empty content",src:i||"/assets/illustrations/illustration_empty_content.svg",sx:{height:240,mb:3}}),(0,n.jsx)(c.Z,{variant:"h5",gutterBottom:!0,children:t}),r&&(0,n.jsx)(c.Z,{variant:"body2",sx:{color:"text.secondary"},children:r})]}))}function p(e){var t=e.isNotFound;return(0,n.jsx)(i.Z,{children:t?(0,n.jsx)(o.Z,{colSpan:12,children:(0,n.jsx)(h,{title:"No Data",sx:{"& span.MuiBox-root":{height:160}}})}):(0,n.jsx)(o.Z,{colSpan:12,sx:{p:0}})})}var b=r(93946),x=r(28621),g=r(31179);function m(e){var t=e.actions,r=e.open,i=e.onClose,o=e.onOpen;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(b.Z,{onClick:o,children:(0,n.jsx)(x.Z,{icon:"eva:more-vertical-fill",width:20,height:20})}),(0,n.jsx)(g.Z,{open:Boolean(r),anchorEl:r,onClose:i,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},arrow:"right-top",sx:{mt:-1,width:160,"& .MuiMenuItem-root":{px:1,typography:"body2",borderRadius:.75,"& svg":{mr:2,width:20,height:20}}},children:t})]})}function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){j(e,t,r[t])}))}return e}function v(e){var t=e.emptyRows,r=e.height;return t?(0,n.jsx)(i.Z,{sx:y({},r&&{height:r*t}),children:(0,n.jsx)(o.Z,{colSpan:9})}):null}var O=r(53184),w=r(69368),Z=r(26280);function P(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){P(e,t,r[t])}))}return e}var k={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function I(e){var t=e.order,r=e.orderBy,l=e.rowCount,c=void 0===l?0:l,s=e.headLabel,u=e.numSelected,d=void 0===u?0:u,f=e.onSort,h=e.onSelectAllRows,p=e.sx;return(0,n.jsx)(O.Z,{sx:p,children:(0,n.jsxs)(i.Z,{children:[h&&(0,n.jsx)(o.Z,{padding:"checkbox",children:(0,n.jsx)(w.Z,{indeterminate:d>0&&d<c,checked:c>0&&d===c,onChange:function(e){return h(e.target.checked)}})}),s.map((function(e){return(0,n.jsx)(o.Z,{align:e.align||"left",sortDirection:r===e.id&&t,sx:{width:e.width,minWidth:e.minWidth},children:f?(0,n.jsxs)(Z.Z,{hideSortIcon:!0,active:r===e.id,direction:r===e.id?t:"asc",onClick:function(){return f(e.id)},sx:{textTransform:"capitalize"},children:[e.label,r===e.id?(0,n.jsx)(a.Z,{sx:S({},k),children:"desc"===t?"sorted descending":"sorted ascending"}):null]}):e.label},e.id)}))]})})}var C=r(26447);function D(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){D(e,t,r[t])}))}return e}function A(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function N(e){var t=e.dense,r=e.actions,i=e.rowCount,o=e.numSelected,l=e.onSelectAllRows,a=e.sx,s=A(e,["dense","actions","rowCount","numSelected","onSelectAllRows","sx"]);return(0,n.jsxs)(C.Z,E({direction:"row",alignItems:"center",sx:E({px:2,top:0,left:8,right:8,zIndex:9,height:58,borderRadius:1,position:"absolute",bgcolor:"primary.lighter"},t&&{pl:1,height:38},a)},s,{children:[(0,n.jsx)(w.Z,{indeterminate:o>0&&o<i,checked:i>0&&o===i,onChange:function(e){return l(e.target.checked)}}),(0,n.jsxs)(c.Z,{variant:"subtitle1",sx:E({ml:2,flexGrow:1,color:"primary.main"},t&&{ml:3}),children:[o," selected"]}),r&&r]}))}},67270:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return rt}});var n=r(85893),i=r(2734),o=r(53156),l=r(86886),a=r(83321),c=r(26447),s=r(75920),u=r(64722),d=r(6183),f=r(80334),h=r(65656),p=r(82492),b=r.n(p),x=r(90948),g=r(66242),m=r(87357),j=r(15861),y=r(71674),v=r(28621),O=r(28399);function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Z(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var P=(0,x.ZP)(g.Z)((function(e){var t=e.theme;return{display:"flex",position:"relative",alignItems:"center",padding:t.spacing(3),backgroundColor:t.palette.primary.darker}})),S=(0,x.ZP)(v.Z)((function(e){var t=e.theme;return{width:120,height:120,opacity:.12,position:"absolute",right:t.spacing(-3),color:t.palette.common.white}}));function k(e){var t=e.title,r=e.total,o=e.icon,l=e.color,a=void 0===l?"primary":l,c=e.chartData,s=Z(e,["title","total","icon","color","chartData"]),u=(0,i.Z)(),d=b()((0,O.Fx)(),{colors:[u.palette[a].main],chart:{sparkline:{enabled:!0}},legend:{show:!1},plotOptions:{radialBar:{hollow:{size:"78%"},track:{margin:0},dataLabels:{name:{show:!1},value:{offsetY:6,color:u.palette.common.white,fontSize:u.typography.subtitle2.fontSize}}}}});return(0,n.jsxs)(P,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){w(e,t,r[t])}))}return e}({sx:{bgcolor:u.palette[a].darker}},s,{children:[(0,n.jsx)(O.ZP,{type:"radialBar",series:[c],options:d,width:86,height:86}),(0,n.jsxs)(m.Z,{sx:{ml:3,color:"common.white"},children:[(0,n.jsxs)(j.Z,{variant:"h4",children:[" ",(0,y.FK)(r)]}),(0,n.jsx)(j.Z,{variant:"body2",sx:{opacity:.72},children:t})]}),(0,n.jsx)(S,{icon:o})]}))}var I=r(44267);function C(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function D(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var E=(0,x.ZP)(g.Z)((function(e){var t=e.theme;return C({boxShadow:"none",textAlign:"center",backgroundColor:t.palette.primary.lighter},t.breakpoints.up("md"),{height:"100%",display:"flex",textAlign:"left",alignItems:"center",justifyContent:"space-between"})}));function A(e){var t=e.title,r=e.description,i=e.action,o=e.img,l=D(e,["title","description","action","img"]);return(0,n.jsxs)(E,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){C(e,t,r[t])}))}return e}({},l,{children:[(0,n.jsxs)(I.Z,{sx:{p:{md:0},pl:{md:5},color:"grey.800"},children:[(0,n.jsx)(j.Z,{gutterBottom:!0,variant:"h4",sx:{whiteSpace:"pre-line"},children:t}),(0,n.jsx)(j.Z,{variant:"body2",sx:{pb:{xs:3,xl:5},maxWidth:480,mx:"auto"},children:r}),i&&i]}),o&&o]}))}var N=r(46066),R=r(45962),F=r(67294),_=r(41796),W=r(50122),T=r(45562),z=r(86179);function L(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){L(e,t,r[t])}))}return e}var B=(0,x.ZP)(m.Z,{shouldForwardProp:function(e){return"rounded"!==e}})((function(e){return{display:"flex",listStyle:"none",alignItems:"center",justifyContent:"center","& li":{width:18,height:18,opacity:.32,cursor:"pointer"},"& li.slick-active":M({opacity:1},e.rounded&&{"& .dotActive":{width:16,borderRadius:6}})}})),K=(0,x.ZP)("div")((function(){return{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}})),q=(0,x.ZP)("span")((function(e){var t=e.theme;return{width:8,height:8,borderRadius:"50%",transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.short})}}));function G(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function X(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){G(e,t,r[t])}))}return e}function U(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var V=(0,x.ZP)(z.w_,{shouldForwardProp:function(e){return"filled"!==e}})((function(e){var t=e.filled,r=e.theme;return X({width:40,height:40,cursor:"pointer",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center","&:hover":{color:r.palette.text.primary}},t&&{opacity:.48,borderRadius:1.5*Number(r.shape.borderRadius),color:r.palette.common.white,backgroundColor:r.palette.grey[900],"&:hover":{opacity:1,color:r.palette.common.white,backgroundColor:r.palette.grey[900]}})}));function J(e){var t=e.filled,r=void 0!==t&&t,o=e.customIcon,l=e.onNext,a=e.onPrevious,s=e.children,u=U(e,["filled","customIcon","onNext","onPrevious","children"]),d="rtl"===(0,i.Z)().direction,f={position:"absolute",mt:-2.5,top:"50%",zIndex:9};return s?(0,n.jsxs)(m.Z,X({},u,{children:[(0,n.jsx)(m.Z,{className:"arrow left",sx:X({},f,{left:0}),children:(0,n.jsx)(V,{filled:r,onClick:a,children:Y(o,d)})}),s,(0,n.jsx)(m.Z,{className:"arrow right",sx:X({},f,{right:0}),children:(0,n.jsx)(V,{filled:r,onClick:l,children:$(o,d)})})]})):(0,n.jsxs)(c.Z,X({direction:"row",spacing:1},u,{children:[(0,n.jsx)(V,{className:"arrow left",filled:r,onClick:a,children:Y(o,d)}),(0,n.jsx)(V,{className:"arrow right",filled:r,onClick:l,children:$(o,d)})]}))}var Y=function(e,t){return(0,n.jsx)(v.Z,{icon:e||"eva:arrow-right-fill",sx:X({width:20,height:20,transform:" scaleX(-1)"},t&&{transform:" scaleX(1)"})})},$=function(e,t){return(0,n.jsx)(v.Z,{icon:e||"eva:arrow-right-fill",sx:X({width:20,height:20},t&&{transform:" scaleX(-1)"})})},H=r(93946);(0,x.ZP)(m.Z)((function(e){var t=e.theme;return{zIndex:9,display:"flex",alignItems:"center",position:"absolute",bottom:t.spacing(2),right:t.spacing(2),color:t.palette.common.white,borderRadius:t.shape.borderRadius,backgroundColor:(0,_.Fq)(t.palette.grey[900],.48)}})),(0,x.ZP)(H.Z)((function(e){return{padding:6,opacity:.48,color:e.theme.palette.common.white,"&:hover":{opacity:1}}}));function Q(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ee(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){Q(e,t,r[t])}))}return e}function te(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var re=(0,x.ZP)("div")((function(e){var t=e.theme;return{top:0,left:0,right:0,bottom:0,zIndex:8,position:"absolute",backgroundColor:(0,_.Fq)(t.palette.grey[900],.64)}}));function ne(e){var t=e.list,r=te(e,["list"]),o=(0,i.Z)(),l=(0,F.useRef)(null),a=(0,F.useState)("rtl"===o.direction?t.length-1:0),c=a[0],s=a[1],u=ee({speed:800,dots:!0,arrows:!1,autoplay:!0,slidesToShow:1,slidesToScroll:1,rtl:Boolean("rtl"===o.direction),beforeChange:function(e,t){return s(t)}},function(e){var t=null===e||void 0===e?void 0:e.color,r=(null===e||void 0===e?void 0:e.rounded)||!1;return{appendDots:function(t){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(B,M({rounded:r,component:"ul"},e,{children:t}))})},customPaging:function(){return(0,n.jsx)(K,{children:(0,n.jsx)(q,{className:"dotActive",sx:{bgcolor:t||"primary.main"}})})}}}({zIndex:9,top:24,left:24,position:"absolute"}));return(0,n.jsxs)(g.Z,ee({},r,{children:[(0,n.jsx)(N.Z,ee({ref:l},u,{children:t.map((function(e,t){return(0,n.jsx)(ie,{item:e,isActive:t===c},e.id)}))})),(0,n.jsx)(J,{onNext:function(){var e;null===(e=l.current)||void 0===e||e.slickNext()},onPrevious:function(){var e;null===(e=l.current)||void 0===e||e.slickPrev()},spacing:0,sx:{top:16,right:16,position:"absolute","& .arrow":{p:0,width:32,height:32,opacity:.48,color:"common.white","&:hover":{color:"common.white",opacity:1}}}})]}))}function ie(e){var t=e.item,r=e.isActive,i=t.image,o=t.title,l=t.description;return(0,n.jsxs)(m.Z,{sx:{position:"relative"},children:[(0,n.jsxs)(I.Z,{component:z.NM,animate:r,action:!0,sx:{bottom:0,width:1,zIndex:9,textAlign:"left",position:"absolute",color:"common.white"},children:[(0,n.jsx)(R.m.div,{variants:(0,z.EU)().inRight,children:(0,n.jsx)(j.Z,{variant:"overline",component:"div",sx:{mb:1,opacity:.48},children:"Featured App"})}),(0,n.jsx)(R.m.div,{variants:(0,z.EU)().inRight,children:(0,n.jsx)(W.Z,{color:"inherit",underline:"none",children:(0,n.jsx)(j.Z,{variant:"h5",gutterBottom:!0,noWrap:!0,children:o})})}),(0,n.jsx)(R.m.div,{variants:(0,z.EU)().inRight,children:(0,n.jsx)(j.Z,{variant:"body2",noWrap:!0,children:l})})]}),(0,n.jsx)(re,{}),(0,n.jsx)(T.Z,{alt:o,src:i,sx:{height:{xs:280,xl:320}}})]})}var oe=r(49933),le=r(78445),ae=r(72882),ce=r(7906),se=r(295),ue=r(67720),de=r(68509),fe=r(53252),he=r(18972),pe=r(82680),be=r(82135),xe=r(53471);function ge(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function me(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function je(e){var t=e.title,r=e.subheader,i=e.tableData,o=e.tableLabels,l=me(e,["title","subheader","tableData","tableLabels"]);return(0,n.jsxs)(g.Z,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){ge(e,t,r[t])}))}return e}({},l,{children:[(0,n.jsx)(le.Z,{title:t,subheader:r,sx:{mb:3}}),(0,n.jsx)(be.Z,{children:(0,n.jsx)(ae.Z,{sx:{minWidth:720},children:(0,n.jsxs)(ce.Z,{children:[(0,n.jsx)(xe.K,{headLabel:o}),(0,n.jsx)(se.Z,{children:i.map((function(e){return(0,n.jsx)(ye,{row:e},e.id)}))})]})})}),(0,n.jsx)(ue.Z,{}),(0,n.jsx)(m.Z,{sx:{p:2,textAlign:"right"},children:(0,n.jsx)(a.Z,{size:"small",color:"inherit",endIcon:(0,n.jsx)(v.Z,{icon:"eva:arrow-ios-forward-fill"}),children:"View All"})})]}))}function ye(e){var t=e.row,r=(0,i.Z)(),o=(0,F.useState)(null),l=o[0],a=o[1],c=function(){a(null)};return(0,n.jsxs)(de.Z,{children:[(0,n.jsx)(fe.Z,{children:"INV-".concat(t.id)}),(0,n.jsx)(fe.Z,{children:t.category}),(0,n.jsx)(fe.Z,{children:(0,y.e_)(t.price)}),(0,n.jsx)(fe.Z,{children:(0,n.jsx)(pe.Z,{variant:"light"===r.palette.mode?"ghost":"filled",color:("in_progress"===t.status?"warning":"out_of_date"===t.status&&"error")||"success",children:(0,oe.G)(t.status)})}),(0,n.jsx)(fe.Z,{align:"right",children:(0,n.jsx)(xe.V7,{open:l,onOpen:function(e){a(e.currentTarget)},onClose:c,actions:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(he.Z,{onClick:function(){c(),console.log("DOWNLOAD",t.id)},children:[(0,n.jsx)(v.Z,{icon:"eva:download-fill"}),"Download"]}),(0,n.jsxs)(he.Z,{onClick:function(){c(),console.log("PRINT",t.id)},children:[(0,n.jsx)(v.Z,{icon:"eva:printer-fill"}),"Print"]}),(0,n.jsxs)(he.Z,{onClick:function(){c(),console.log("SHARE",t.id)},children:[(0,n.jsx)(v.Z,{icon:"eva:share-fill"}),"Share"]}),(0,n.jsx)(ue.Z,{sx:{borderStyle:"dashed"}}),(0,n.jsxs)(he.Z,{onClick:function(){c(),console.log("DELETE",t.id)},sx:{color:"error.main"},children:[(0,n.jsx)(v.Z,{icon:"eva:trash-2-outline"}),"Delete"]})]})})})]})}var ve=r(75472),Oe=r.n(ve),we=r(87952);function Ze(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Pe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){Ze(e,t,r[t])}))}return e}function Se(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var ke=(0,x.ZP)("div")((function(e){var t=e.theme;return{width:40,height:40,display:"flex",borderRadius:"50%",alignItems:"center",justifyContent:"center",color:t.palette.primary.main,backgroundColor:(0,_.Fq)(t.palette.primary.main,.08)}}));function Ie(e){var t=e.title,r=e.subheader,i=e.list,o=Se(e,["title","subheader","list"]);return(0,n.jsxs)(g.Z,Pe({},o,{children:[(0,n.jsx)(le.Z,{title:t,subheader:r}),(0,n.jsx)(c.Z,{spacing:3,sx:{p:3},children:Oe()(i,["favourite"],["desc"]).map((function(e,t){return(0,n.jsx)(Ce,{author:e,index:t},e.id)}))})]}))}function Ce(e){var t=e.author,r=e.index;return(0,n.jsxs)(c.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,n.jsx)(we.Z,{alt:t.name,src:t.avatar}),(0,n.jsxs)(m.Z,{sx:{flexGrow:1},children:[(0,n.jsx)(j.Z,{variant:"subtitle2",children:t.name}),(0,n.jsxs)(j.Z,{variant:"caption",sx:{mt:.5,display:"flex",alignItems:"center",color:"text.secondary"},children:[(0,n.jsx)(v.Z,{icon:"eva:heart-fill",sx:{width:16,height:16,mr:.5}}),(0,y.v1)(t.favourite)]})]}),(0,n.jsx)(ke,{sx:Pe({},1===r&&{color:"info.main",bgcolor:function(e){return(0,_.Fq)(e.palette.info.main,.08)}},2===r&&{color:"error.main",bgcolor:function(e){return(0,_.Fq)(e.palette.error.main,.08)}}),children:(0,n.jsx)(v.Z,{icon:"ant-design:trophy-filled",width:20,height:20})})]})}var De=r(44612);function Ee(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Ae(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function Ne(e){var t=e.title,r=e.subheader,i=e.list,o=Ae(e,["title","subheader","list"]);return(0,n.jsxs)(g.Z,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){Ee(e,t,r[t])}))}return e}({},o,{children:[(0,n.jsx)(le.Z,{title:t,subheader:r}),(0,n.jsx)(be.Z,{children:(0,n.jsx)(c.Z,{spacing:3,sx:{p:3,pr:0},children:i.map((function(e){return(0,n.jsx)(Re,{app:e},e.id)}))})})]}))}function Re(e){var t=e.app,r=(0,i.Z)(),o=t.shortcut,l=t.system,a=t.price,s=t.rating,u=t.review,d=t.name;return(0,n.jsxs)(c.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,n.jsx)(m.Z,{sx:{width:48,height:48,flexShrink:0,display:"flex",borderRadius:1.5,alignItems:"center",justifyContent:"center",bgcolor:"background.neutral"},children:(0,n.jsx)(T.Z,{src:o,alt:d,sx:{width:24,height:24}})}),(0,n.jsxs)(m.Z,{sx:{flexGrow:1,minWidth:160},children:[(0,n.jsx)(j.Z,{variant:"subtitle2",children:d}),(0,n.jsxs)(c.Z,{direction:"row",alignItems:"center",sx:{mt:.5,color:"text.secondary"},children:[(0,n.jsx)(v.Z,{width:16,height:16,icon:"Mac"===l?"ant-design:apple-filled":"ant-design:windows-filled"}),(0,n.jsx)(j.Z,{variant:"caption",sx:{ml:.5,mr:1},children:l}),(0,n.jsx)(pe.Z,{variant:"light"===r.palette.mode?"ghost":"filled",color:0===a?"success":"error",children:0===a?"Free":(0,y.e_)(a)})]})]}),(0,n.jsxs)(c.Z,{alignItems:"flex-end",sx:{pr:3},children:[(0,n.jsx)(De.Z,{readOnly:!0,size:"small",precision:.5,name:"reviews",value:s}),(0,n.jsxs)(j.Z,{variant:"caption",sx:{mt:.5,color:"text.secondary"},children:[(0,y.v1)(u),"\xa0reviews"]})]})]})}var Fe=r(9573);function _e(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function We(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function Te(e){var t=e.title,r=e.subheader,i=e.chartLabels,o=e.chartData,l=We(e,["title","subheader","chartLabels","chartData"]),a=(0,F.useState)("2019"),c=a[0],s=a[1],u=b()((0,O.Fx)(),{xaxis:{categories:i}});return(0,n.jsxs)(g.Z,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){_e(e,t,r[t])}))}return e}({},l,{children:[(0,n.jsx)(le.Z,{title:t,subheader:r,action:(0,n.jsx)(Fe.Z,{select:!0,fullWidth:!0,value:c,SelectProps:{native:!0},onChange:function(e){s(e.target.value)},sx:{"& fieldset":{border:"0 !important"},"& select":{pl:1,py:.5,pr:"24px !important",typography:"subtitle2"},"& .MuiOutlinedInput-root":{borderRadius:.75,bgcolor:"background.neutral"},"& .MuiNativeSelect-icon":{top:4,right:0,width:20,height:20}},children:o.map((function(e){return(0,n.jsx)("option",{value:e.year,children:e.year},e.year)}))})}),o.map((function(e){return(0,n.jsx)(m.Z,{sx:{mt:3,mx:3},dir:"ltr",children:e.year===c&&(0,n.jsx)(O.ZP,{type:"line",series:e.data,options:u,height:364})},e.year)}))]}))}function ze(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Le(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){ze(e,t,r[t])}))}return e}function Me(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var Be=(0,x.ZP)("div")((function(e){var t=e.theme;return{width:24,height:24,display:"flex",borderRadius:"50%",alignItems:"center",justifyContent:"center",color:t.palette.success.main,backgroundColor:(0,_.Fq)(t.palette.success.main,.16)}}));function Ke(e){var t=e.title,r=e.percent,o=e.total,l=e.chartColor,a=e.chartData,s=e.sx,u=Me(e,["title","percent","total","chartColor","chartData","sx"]),d=(0,i.Z)(),f={colors:[l],chart:{sparkline:{enabled:!0}},plotOptions:{bar:{columnWidth:"68%",borderRadius:2}},tooltip:{x:{show:!1},y:{formatter:function(e){return(0,y.FK)(e)},title:{formatter:function(e){return""}}},marker:{show:!1}}};return(0,n.jsxs)(g.Z,Le({sx:Le({display:"flex",alignItems:"center",p:3},s)},u,{children:[(0,n.jsxs)(m.Z,{sx:{flexGrow:1},children:[(0,n.jsx)(j.Z,{variant:"subtitle2",children:t}),(0,n.jsxs)(c.Z,{direction:"row",alignItems:"center",spacing:1,sx:{mt:2,mb:1},children:[(0,n.jsx)(Be,{sx:Le({},r<0&&{color:"error.main",bgcolor:(0,_.Fq)(d.palette.error.main,.16)}),children:(0,n.jsx)(v.Z,{width:16,height:16,icon:r>=0?"eva:trending-up-fill":"eva:trending-down-fill"})}),(0,n.jsxs)(j.Z,{component:"span",variant:"subtitle2",children:[r>0&&"+",(0,y.f2)(r)]})]}),(0,n.jsx)(j.Z,{variant:"h3",children:(0,y.FK)(o)})]}),(0,n.jsx)(O.ZP,{type:"bar",series:[{data:a}],options:f,width:60,height:36})]}))}function qe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Ge(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var Xe=(0,x.ZP)("div")((function(e){var t=e.theme;return{height:392,marginTop:t.spacing(5),"& .apexcharts-canvas svg":{height:392},"& .apexcharts-canvas svg,.apexcharts-canvas foreignObject":{overflow:"visible"},"& .apexcharts-legend":{height:72,alignContent:"center",position:"relative !important",borderTop:"solid 1px ".concat(t.palette.divider),top:"calc(".concat(320,"px) !important")}}}));function Ue(e){var t=e.title,r=e.subheader,o=e.chartData,l=e.chartColors,a=Ge(e,["title","subheader","chartData","chartColors"]),c=(0,i.Z)(),s=o.map((function(e){return e.label})),u=o.map((function(e){return e.value})),d=b()((0,O.Fx)(),{colors:l,labels:s,stroke:{colors:[c.palette.background.paper]},legend:{floating:!0,horizontalAlign:"center"},tooltip:{fillSeriesColor:!1,y:{formatter:function(e){return(0,y.FK)(e)},title:{formatter:function(e){return"".concat(e)}}}},plotOptions:{pie:{donut:{size:"90%",labels:{value:{formatter:function(e){return(0,y.FK)(e)}},total:{formatter:function(e){var t=e.globals.seriesTotals.reduce((function(e,t){return e+t}),0);return(0,y.FK)(t)}}}}}}});return(0,n.jsxs)(g.Z,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){qe(e,t,r[t])}))}return e}({},a,{children:[(0,n.jsx)(le.Z,{title:t,subheader:r}),(0,n.jsx)(Xe,{dir:"ltr",children:(0,n.jsx)(O.ZP,{type:"donut",series:u,options:d,height:280})})]}))}function Ve(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Je(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){Ve(e,t,r[t])}))}return e}function Ye(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var $e=(0,x.ZP)((function(e){return(0,n.jsx)(c.Z,Je({direction:"row",alignItems:"center"},e))}))({minWidth:72,flex:"1 1"}),He=(0,x.ZP)(v.Z)((function(e){var t=e.theme;return{width:16,height:16,marginRight:t.spacing(.5),color:t.palette.text.disabled}}));function Qe(e){var t=e.title,r=e.subheader,i=e.list,o=Ye(e,["title","subheader","list"]);return(0,n.jsxs)(g.Z,Je({},o,{children:[(0,n.jsx)(le.Z,{title:t,subheader:r}),(0,n.jsx)(be.Z,{children:(0,n.jsx)(c.Z,{spacing:3,sx:{p:3},children:i.map((function(e){return(0,n.jsx)(et,{country:e},e.id)}))})})]}))}function et(e){var t=e.country;return(0,n.jsxs)(c.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,n.jsxs)($e,{sx:{minWidth:120},children:[(0,n.jsx)(T.Z,{disabledEffect:!0,alt:t.name,src:t.flag,sx:{width:28,mr:1}}),(0,n.jsx)(j.Z,{variant:"subtitle2",children:t.name})]}),(0,n.jsxs)($e,{children:[(0,n.jsx)(He,{icon:"ant-design:android-filled"}),(0,n.jsx)(j.Z,{variant:"body2",children:(0,y.v1)(t.android)})]}),(0,n.jsxs)($e,{children:[(0,n.jsx)(He,{icon:"ant-design:windows-filled"}),(0,n.jsx)(j.Z,{variant:"body2",children:(0,y.v1)(t.windows)})]}),(0,n.jsxs)($e,{sx:{minWidth:88},children:[(0,n.jsx)(He,{icon:"ant-design:apple-filled"}),(0,n.jsx)(j.Z,{variant:"body2",children:(0,y.v1)(t.windows)})]})]})}var tt=r(18017);function rt(){var e=(0,s.Z)().user,t=(0,i.Z)(),r=(0,u.Z)().themeStretch;return(0,n.jsx)(h.Z,{title:"General: App",children:(0,n.jsx)(o.Z,{maxWidth:!r&&"xl",children:(0,n.jsxs)(l.ZP,{container:!0,spacing:3,children:[(0,n.jsx)(l.ZP,{item:!0,xs:12,md:8,children:(0,n.jsx)(A,{title:"Welcome back! \n ".concat(null===e||void 0===e?void 0:e.displayName),description:"If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.",img:(0,n.jsx)(tt.XI,{sx:{p:3,width:360,margin:{xs:"auto",md:"inherit"}}}),action:(0,n.jsx)(a.Z,{variant:"contained",children:"Go Now"})})}),(0,n.jsx)(l.ZP,{item:!0,xs:12,md:4,children:(0,n.jsx)(ne,{list:f.$M})}),(0,n.jsx)(l.ZP,{item:!0,xs:12,md:4,children:(0,n.jsx)(Ke,{title:"Total Active Users",percent:2.6,total:18765,chartColor:t.palette.primary.main,chartData:[5,18,12,51,68,11,39,37,27,20]})}),(0,n.jsx)(l.ZP,{item:!0,xs:12,md:4,children:(0,n.jsx)(Ke,{title:"Total Installed",percent:.2,total:4876,chartColor:t.palette.chart.blue[0],chartData:[20,41,63,33,28,35,50,46,11,26]})}),(0,n.jsx)(l.ZP,{item:!0,xs:12,md:4,children:(0,n.jsx)(Ke,{title:"Total Downloads",percent:-.1,total:678,chartColor:t.palette.chart.red[0],chartData:[8,9,31,8,16,37,8,33,46,31]})}),(0,n.jsx)(l.ZP,{item:!0,xs:12,md:6,lg:4,children:(0,n.jsx)(Ue,{title:"Current Download",chartColors:[t.palette.primary.lighter,t.palette.primary.light,t.palette.primary.main,t.palette.primary.dark],chartData:[{label:"Mac",value:12244},{label:"Window",value:53345},{label:"iOS",value:44313},{label:"Android",value:78343}]})}),(0,n.jsx)(l.ZP,{item:!0,xs:12,md:6,lg:8,children:(0,n.jsx)(Te,{title:"Area Installed",subheader:"(+43%) than last year",chartLabels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"],chartData:[{year:"2019",data:[{name:"Asia",data:[10,41,35,51,49,62,69,91,148]},{name:"America",data:[10,34,13,56,77,88,99,77,45]}]},{year:"2020",data:[{name:"Asia",data:[148,91,69,62,49,51,35,41,10]},{name:"America",data:[45,77,99,88,77,56,13,34,10]}]}]})}),(0,n.jsx)(l.ZP,{item:!0,xs:12,lg:8,children:(0,n.jsx)(je,{title:"New Invoice",tableData:f.fY,tableLabels:[{id:"id",label:"Invoice ID"},{id:"category",label:"Category"},{id:"price",label:"Price"},{id:"status",label:"Status"},{id:""}]})}),(0,n.jsx)(l.ZP,{item:!0,xs:12,md:6,lg:4,children:(0,n.jsx)(Ne,{title:"Top Related Applications",list:f.Wc})}),(0,n.jsx)(l.ZP,{item:!0,xs:12,md:6,lg:4,children:(0,n.jsx)(Qe,{title:"Top Installed Countries",list:f.bt})}),(0,n.jsx)(l.ZP,{item:!0,xs:12,md:6,lg:4,children:(0,n.jsx)(Ie,{title:"Top Authors",list:f.Id})}),(0,n.jsx)(l.ZP,{item:!0,xs:12,md:6,lg:4,children:(0,n.jsxs)(c.Z,{spacing:3,children:[(0,n.jsx)(k,{title:"Conversion",total:38566,icon:"eva:person-fill",chartData:48}),(0,n.jsx)(k,{title:"Applications",total:55566,icon:"eva:email-fill",color:"warning",chartData:75})]})})]})})})}rt.getLayout=function(e){return(0,n.jsx)(d.Z,{children:e})}}},function(e){e.O(0,[631,910,243,9,411,42,770,97,774,888,179],(function(){return t=87693,e(e.s=t);var t}));var t=e.O();_N_E=t}]);