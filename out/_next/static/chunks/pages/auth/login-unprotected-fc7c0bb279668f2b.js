(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[437],{49695:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/login-unprotected",function(){return t(62269)}])},62269:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return k}});var r=t(85893),i=t(48389),s=t(41664),a=t.n(s),o=t(90948),l=t(66242),c=t(15861),d=t(50122),u=t(53156),m=t(26447),f=t(87357),h=t(83984),x=t(21737),p=t(92924),g=t(75920),j=t(81832),b=t(65656),v=t(41304),Z=t(45562),w=t(71995);function y(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var E=(0,o.ZP)("div")((function(e){return y({},e.theme.breakpoints.up("md"),{display:"flex"})})),P=(0,o.ZP)("header")((function(e){var n=e.theme;return y({top:0,zIndex:9,lineHeight:0,width:"100%",display:"flex",alignItems:"center",position:"absolute",padding:n.spacing(3),justifyContent:"space-between"},n.breakpoints.up("md"),{alignItems:"flex-start",padding:n.spacing(7,5,0,7)})})),_=(0,o.ZP)(l.Z)((function(e){return{width:"100%",maxWidth:464,display:"flex",flexDirection:"column",justifyContent:"center",margin:e.theme.spacing(2,0,2,2)}})),S=(0,o.ZP)("div")((function(e){return{maxWidth:480,margin:"auto",minHeight:"100vh",display:"flex",justifyContent:"center",flexDirection:"column",padding:e.theme.spacing(12,0)}}));function k(){var e=(0,g.Z)().method,n=(0,j.Z)("up","sm"),t=(0,j.Z)("up","md");return(0,r.jsx)(b.Z,{title:"Login",children:(0,r.jsxs)(E,{children:[(0,r.jsxs)(P,{children:[(0,r.jsx)(v.Z,{}),n&&(0,r.jsxs)(c.Z,{variant:"body2",sx:{mt:{md:-2}},children:["Don\u2019t have an account? ","",(0,r.jsx)(a(),{href:p.EE.register,passHref:!0,children:(0,r.jsx)(d.Z,{variant:"subtitle2",children:"Get started"})})]})]}),t&&(0,r.jsxs)(_,{children:[(0,r.jsx)(c.Z,{variant:"h3",sx:{px:5,mt:10,mb:5},children:"Hi, Welcome Back"}),(0,r.jsx)(Z.Z,{visibleByDefault:!0,disabledEffect:!0,src:"/assets/illustrations/illustration_login.png",alt:"login"})]}),(0,r.jsx)(u.Z,{maxWidth:"sm",children:(0,r.jsxs)(S,{children:[(0,r.jsxs)(m.Z,{direction:"row",alignItems:"center",sx:{mb:5},children:[(0,r.jsxs)(f.Z,{sx:{flexGrow:1},children:[(0,r.jsx)(c.Z,{variant:"h4",gutterBottom:!0,children:"Sign in to Minimal"}),(0,r.jsx)(c.Z,{sx:{color:"text.secondary"},children:"Enter your details below."})]}),(0,r.jsx)(h.Z,{title:(0,i.I)(e),placement:"right",children:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(Z.Z,{disabledEffect:!0,alt:e,src:"https://minimal-assets-api-dev.vercel.app/assets/icons/auth/ic_".concat(e,".png"),sx:{width:32,height:32}})})})]}),(0,r.jsxs)(x.Z,{severity:"info",sx:{mb:3},children:["Use email : ",(0,r.jsx)("strong",{children:"demo@minimals.cc"})," / password :",(0,r.jsx)("strong",{children:" demo1234"})]}),(0,r.jsx)(w.U,{}),!n&&(0,r.jsxs)(c.Z,{variant:"body2",align:"center",sx:{mt:3},children:["Don\u2019t have an account?"," ",(0,r.jsx)(a(),{href:p.EE.register,passHref:!0,children:(0,r.jsx)(d.Z,{variant:"subtitle2",children:"Get started"})})]})]})})]})})}},71995:function(e,n,t){"use strict";t.d(n,{U:function(){return I}});var r=t(34051),i=t.n(r),s=t(85893),a=t(74231),o=t(67294),l=t(41664),c=t.n(l),d=t(87536),u=t(95496),m=t(26447),f=t(21737),h=t(87109),x=t(93946),p=t(50122),g=t(8987),j=t(92924),b=t(75920),v=t(75605),Z=t(28621),w=t(1172),y=t(19861),E=t(15427);function P(){return(0,s.jsx)("div",{children:(0,s.jsx)("button",{onClick:function(){return console.log(E.g.federatedSignIn({provider:y.CognitoHostedUIIdentityProvider.Google}))},children:"Sign In with Google"})})}function _(e,n,t,r,i,s,a){try{var o=e[s](a),l=o.value}catch(c){return void t(c)}o.done?n(l):Promise.resolve(l).then(r,i)}function S(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function k(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){S(e,n,t[n])}))}return e}function I(){var e=(0,b.Z)().login,n=(0,v.Z)(),t=(0,o.useState)(!1),r=t[0],l=t[1],y=a.Ry().shape({email:a.Z_().email("Email must be a valid email address").required("Email is required"),password:a.Z_().required("Password is required")}),E=(0,d.cI)({resolver:(0,u.X)(y),defaultValues:{email:"demo@minimals.cc",password:"demo1234",remember:!0}}),S=E.reset,I=E.setError,O=E.handleSubmit,C=E.formState,H=C.errors,D=C.isSubmitting,G=function(){var t,r=(t=i().mark((function t(r){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e(r.email,r.password);case 3:t.next=10;break;case 5:t.prev=5,t.t0=t.catch(0),console.error(t.t0),S(),n.current&&I("afterSubmit",k({},t.t0,{message:t.t0.message}));case 10:case"end":return t.stop()}}),t,null,[[0,5]])})),function(){var e=this,n=arguments;return new Promise((function(r,i){var s=t.apply(e,n);function a(e){_(s,r,i,a,o,"next",e)}function o(e){_(s,r,i,a,o,"throw",e)}a(void 0)}))});return function(e){return r.apply(this,arguments)}}();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(w.RV,{methods:E,onSubmit:O(G),children:[(0,s.jsxs)(m.Z,{spacing:3,children:[!!H.afterSubmit&&(0,s.jsx)(f.Z,{severity:"error",children:H.afterSubmit.message}),(0,s.jsx)(w.au,{name:"email",label:"Email address"}),(0,s.jsx)(w.au,{name:"password",label:"Password",type:r?"text":"password",InputProps:{endAdornment:(0,s.jsx)(h.Z,{position:"end",children:(0,s.jsx)(x.Z,{onClick:function(){return l(!r)},edge:"end",children:(0,s.jsx)(Z.Z,{icon:r?"eva:eye-fill":"eva:eye-off-fill"})})})}})]}),(0,s.jsxs)(m.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{my:2},children:[(0,s.jsx)(w.jb,{name:"remember",label:"Remember me"}),(0,s.jsx)(c(),{href:j.EE.resetPassword,passHref:!0,children:(0,s.jsx)(p.Z,{variant:"subtitle2",children:"Forgot password?"})})]}),(0,s.jsx)(g.Z,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:D,children:"Login"})]}),(0,s.jsx)(P,{})]})}},3727:function(){}},function(e){e.O(0,[631,910,243,770,774,888,179],(function(){return n=49695,e(e.s=n);var n}));var n=e.O();_N_E=n}]);