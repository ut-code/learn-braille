(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(306)}])},1965:function(e,t,i){"use strict";i.d(t,{Z:function(){return M}});var r=i(5893),n=i(7294),o=i(9008),a=i.n(o),s=i(1664),l=i.n(s),c=i(5675),u=i.n(c),d=i(2974),p=i(2293),m=i(155),h=i(1536),f=i(5861),g=i(3321),x=i(3795),Z=i(3946),v=i(7357),b=i(5449),j=i(5104),w=i(7645),k=i(6514),$=i(1425),S=i(594);function C(e){let[t,i]=(0,n.useState)(0);function o(){e.setOpen(!1),i(0)}return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(j.Z,{open:e.open,onClose:()=>{o()},scroll:"paper",fullWidth:!0,maxWidth:!1,PaperProps:{sx:{height:"100%"}},children:[(0,r.jsxs)(w.Z,{m:0,p:2,children:[e.tutorialDialogSteps[t].title,(0,r.jsx)(Z.Z,{sx:{position:"absolute",right:8,top:8},onClick:()=>{o()},children:(0,r.jsx)(S.Z,{})})]}),(0,r.jsx)(k.Z,{dividers:!0,children:e.tutorialDialogSteps[t].content}),(0,r.jsxs)($.Z,{children:[(0,r.jsx)(g.Z,{variant:"outlined",disabled:0===t,onClick:()=>{t>0&&i(t-1)},children:"前へ"}),(0,r.jsx)(g.Z,{variant:"outlined",disabled:t===e.tutorialDialogSteps.length-1,onClick:()=>{t<e.tutorialDialogSteps.length-1&&i(t+1)},children:"次へ"}),t===e.tutorialDialogSteps.length-1&&(0,r.jsx)(g.Z,{variant:"contained",onClick:()=>{o()},children:"はじめる"})]})]})})}function M(e){let{children:t,tutorialDialogSteps:i}=e,[o,s]=(0,n.useState)(!0);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:"点字学習ソフトウェア"}),(0,r.jsx)("meta",{name:"description",content:"点字学習ソフトウェアです。"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("link",{rel:"icon",href:(0,d.H)("/favicon.svg")})]}),(0,r.jsx)(p.Z,{component:"nav",children:(0,r.jsxs)(m.Z,{children:[(0,r.jsxs)(h.Z,{direction:"row",spacing:2,alignItems:"center",flexGrow:1,children:[(0,r.jsx)(u(),{src:(0,d.H)("/logo-black-background.svg"),alt:"ロゴ",width:"150",height:"40"}),(0,r.jsx)(f.Z,{variant:"h5",component:"div",children:"点字学習ソフトウェア"})]}),(0,r.jsxs)(h.Z,{direction:"row",spacing:2,alignItems:"center",children:[null!=i&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g.Z,{color:"inherit",variant:"outlined",onClick:()=>{s(!0)},children:"スライドで確認"}),(0,r.jsx)(C,{open:o,setOpen:s,tutorialDialogSteps:i})]}),(0,r.jsx)(x.Z,{href:"/",component:l(),color:"inherit",underline:"hover",sx:{fontSize:"large"},children:"Home"}),(0,r.jsx)(Z.Z,{color:"inherit",href:"https://github.com/ut-code/learn-braille",children:(0,r.jsx)(b.Z,{fontSize:"large"})})]})]})}),(0,r.jsx)(m.Z,{}),(0,r.jsx)(v.Z,{m:2,children:(0,r.jsx)("main",{children:t})})]})}},306:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return eo}});var r=i(5893),n=i(1163),o=i(1965),a=i(2974),s=i(7462),l=i(3366),c=i(7294),u=i(6010),d=i(4780),p=i(948),m=i(1657),h=i(629),f=i(1588),g=i(4867);function x(e){return(0,g.Z)("MuiCard",e)}(0,f.Z)("MuiCard",["root"]);let Z=["className","raised"],v=e=>{let{classes:t}=e;return(0,d.Z)({root:["root"]},x,t)},b=(0,p.ZP)(h.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),j=c.forwardRef(function(e,t){let i=(0,m.Z)({props:e,name:"MuiCard"}),{className:n,raised:o=!1}=i,a=(0,l.Z)(i,Z),c=(0,s.Z)({},i,{raised:o}),d=v(c);return(0,r.jsx)(b,(0,s.Z)({className:(0,u.Z)(d.root,n),elevation:o?8:void 0,ref:t,ownerState:c},a))});function w(e){return(0,g.Z)("MuiCardActionArea",e)}let k=(0,f.Z)("MuiCardActionArea",["root","focusVisible","focusHighlight"]);var $=i(6054);let S=["children","className","focusVisibleClassName"],C=e=>{let{classes:t}=e;return(0,d.Z)({root:["root"],focusHighlight:["focusHighlight"]},w,t)},M=(0,p.ZP)($.Z,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({display:"block",textAlign:"inherit",width:"100%",[`&:hover .${k.focusHighlight}`]:{opacity:(e.vars||e).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${k.focusVisible} .${k.focusHighlight}`]:{opacity:(e.vars||e).palette.action.focusOpacity}})),N=(0,p.ZP)("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(e,t)=>t.focusHighlight})(({theme:e})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})})),y=c.forwardRef(function(e,t){let i=(0,m.Z)({props:e,name:"MuiCardActionArea"}),{children:n,className:o,focusVisibleClassName:a}=i,c=(0,l.Z)(i,S),d=C(i);return(0,r.jsxs)(M,(0,s.Z)({className:(0,u.Z)(d.root,o),focusVisibleClassName:(0,u.Z)(a,d.focusVisible),ref:t,ownerState:i},c,{children:[n,(0,r.jsx)(N,{className:d.focusHighlight,ownerState:i})]}))});function P(e){return(0,g.Z)("MuiCardMedia",e)}(0,f.Z)("MuiCardMedia",["root","media","img"]);let R=["children","className","component","image","src","style"],W=e=>{let{classes:t,isMediaComponent:i,isImageComponent:r}=e;return(0,d.Z)({root:["root",i&&"media",r&&"img"]},P,t)},H=(0,p.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e,{isMediaComponent:r,isImageComponent:n}=i;return[t.root,r&&t.media,n&&t.img]}})(({ownerState:e})=>(0,s.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"})),O=["video","audio","picture","iframe","img"],E=["picture","img"],_=c.forwardRef(function(e,t){let i=(0,m.Z)({props:e,name:"MuiCardMedia"}),{children:n,className:o,component:a="div",image:c,src:d,style:p}=i,h=(0,l.Z)(i,R),f=-1!==O.indexOf(a),g=!f&&c?(0,s.Z)({backgroundImage:`url("${c}")`},p):p,x=(0,s.Z)({},i,{component:a,isMediaComponent:f,isImageComponent:-1!==E.indexOf(a)}),Z=W(x);return(0,r.jsx)(H,(0,s.Z)({className:(0,u.Z)(Z.root,o),as:a,role:!f&&c?"img":void 0,ref:t,style:g,ownerState:x,src:f?c||d:void 0},h,{children:n}))});function A(e){return(0,g.Z)("MuiCardContent",e)}(0,f.Z)("MuiCardContent",["root"]);let z=["className","component"],F=e=>{let{classes:t}=e;return(0,d.Z)({root:["root"]},A,t)},G=(0,p.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),D=c.forwardRef(function(e,t){let i=(0,m.Z)({props:e,name:"MuiCardContent"}),{className:n,component:o="div"}=i,a=(0,l.Z)(i,z),c=(0,s.Z)({},i,{component:o}),d=F(c);return(0,r.jsx)(G,(0,s.Z)({as:o,className:(0,u.Z)(d.root,n),ownerState:c,ref:t},a))});var T=i(5861),B=i(7357),I=i(5408),V=i(9707),L=i(2734);let U=c.createContext();function X(e){return(0,g.Z)("MuiGrid",e)}let q=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],J=(0,f.Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map(e=>`spacing-xs-${e}`),...["column-reverse","column","row-reverse","row"].map(e=>`direction-xs-${e}`),...["nowrap","wrap-reverse","wrap"].map(e=>`wrap-xs-${e}`),...q.map(e=>`grid-xs-${e}`),...q.map(e=>`grid-sm-${e}`),...q.map(e=>`grid-md-${e}`),...q.map(e=>`grid-lg-${e}`),...q.map(e=>`grid-xl-${e}`)]);var K=J;let Q=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function Y(e){let t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}function ee({breakpoints:e,values:t}){let i="";Object.keys(t).forEach(e=>{""===i&&0!==t[e]&&(i=e)});let r=Object.keys(e).sort((t,i)=>e[t]-e[i]);return r.slice(0,r.indexOf(i))}let et=(0,p.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e,{container:r,direction:n,item:o,spacing:a,wrap:s,zeroMinWidth:l,breakpoints:c}=i,u=[];r&&(u=function(e,t,i={}){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[i[`spacing-xs-${String(e)}`]];let r=[];return t.forEach(t=>{let n=e[t];Number(n)>0&&r.push(i[`spacing-${t}-${String(n)}`])}),r}(a,c,t));let d=[];return c.forEach(e=>{let r=i[e];r&&d.push(t[`grid-${e}-${String(r)}`])}),[t.root,r&&t.container,o&&t.item,l&&t.zeroMinWidth,...u,"row"!==n&&t[`direction-xs-${String(n)}`],"wrap"!==s&&t[`wrap-xs-${String(s)}`],...d]}})(({ownerState:e})=>(0,s.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap}),function({theme:e,ownerState:t}){let i=(0,I.P$)({values:t.direction,breakpoints:e.breakpoints.values});return(0,I.k9)({theme:e},i,e=>{let t={flexDirection:e};return 0===e.indexOf("column")&&(t[`& > .${K.item}`]={maxWidth:"none"}),t})},function({theme:e,ownerState:t}){let{container:i,rowSpacing:r}=t,n={};if(i&&0!==r){let t;let i=(0,I.P$)({values:r,breakpoints:e.breakpoints.values});"object"==typeof i&&(t=ee({breakpoints:e.breakpoints.values,values:i})),n=(0,I.k9)({theme:e},i,(i,r)=>{var n;let o=e.spacing(i);return"0px"!==o?{marginTop:`-${Y(o)}`,[`& > .${K.item}`]:{paddingTop:Y(o)}}:null!=(n=t)&&n.includes(r)?{}:{marginTop:0,[`& > .${K.item}`]:{paddingTop:0}}})}return n},function({theme:e,ownerState:t}){let{container:i,columnSpacing:r}=t,n={};if(i&&0!==r){let t;let i=(0,I.P$)({values:r,breakpoints:e.breakpoints.values});"object"==typeof i&&(t=ee({breakpoints:e.breakpoints.values,values:i})),n=(0,I.k9)({theme:e},i,(i,r)=>{var n;let o=e.spacing(i);return"0px"!==o?{width:`calc(100% + ${Y(o)})`,marginLeft:`-${Y(o)}`,[`& > .${K.item}`]:{paddingLeft:Y(o)}}:null!=(n=t)&&n.includes(r)?{}:{width:"100%",marginLeft:0,[`& > .${K.item}`]:{paddingLeft:0}}})}return n},function({theme:e,ownerState:t}){let i;return e.breakpoints.keys.reduce((r,n)=>{let o={};if(t[n]&&(i=t[n]),!i)return r;if(!0===i)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===i)o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{let a=(0,I.P$)({values:t.columns,breakpoints:e.breakpoints.values}),l="object"==typeof a?a[n]:a;if(null==l)return r;let c=`${Math.round(i/l*1e8)/1e6}%`,u={};if(t.container&&t.item&&0!==t.columnSpacing){let i=e.spacing(t.columnSpacing);if("0px"!==i){let e=`calc(${c} + ${Y(i)})`;u={flexBasis:e,maxWidth:e}}}o=(0,s.Z)({flexBasis:c,flexGrow:0,maxWidth:c},u)}return 0===e.breakpoints.values[n]?Object.assign(r,o):r[e.breakpoints.up(n)]=o,r},{})}),ei=e=>{let{classes:t,container:i,direction:r,item:n,spacing:o,wrap:a,zeroMinWidth:s,breakpoints:l}=e,c=[];i&&(c=function(e,t){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[`spacing-xs-${String(e)}`];let i=[];return t.forEach(t=>{let r=e[t];if(Number(r)>0){let e=`spacing-${t}-${String(r)}`;i.push(e)}}),i}(o,l));let u=[];l.forEach(t=>{let i=e[t];i&&u.push(`grid-${t}-${String(i)}`)});let p={root:["root",i&&"container",n&&"item",s&&"zeroMinWidth",...c,"row"!==r&&`direction-xs-${String(r)}`,"wrap"!==a&&`wrap-xs-${String(a)}`,...u]};return(0,d.Z)(p,X,t)},er=c.forwardRef(function(e,t){let i=(0,m.Z)({props:e,name:"MuiGrid"}),{breakpoints:n}=(0,L.Z)(),o=(0,V.Z)(i),{className:a,columns:d,columnSpacing:p,component:h="div",container:f=!1,direction:g="row",item:x=!1,rowSpacing:Z,spacing:v=0,wrap:b="wrap",zeroMinWidth:j=!1}=o,w=(0,l.Z)(o,Q),k=c.useContext(U),$=f?d||12:k,S={},C=(0,s.Z)({},w);n.keys.forEach(e=>{null!=w[e]&&(S[e]=w[e],delete C[e])});let M=(0,s.Z)({},o,{columns:$,container:f,direction:g,item:x,rowSpacing:Z||v,columnSpacing:p||v,wrap:b,zeroMinWidth:j,spacing:v},S,{breakpoints:n.keys}),N=ei(M);return(0,r.jsx)(U.Provider,{value:$,children:(0,r.jsx)(et,(0,s.Z)({ownerState:M,className:(0,u.Z)(N.root,a),as:h,ref:t},C))})});function en(e){let t=(0,n.useRouter)();return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(j,{sx:{maxWidth:400},children:(0,r.jsxs)(y,{onClick:async()=>await t.push(e.linkUrl),children:[(0,r.jsx)(_,{component:"img",image:e.imgPath}),(0,r.jsx)(D,{children:(0,r.jsx)(T.Z,{variant:"h5",component:"div",children:e.title})})]})})})}function eo(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(o.Z,{children:[(0,r.jsxs)(B.Z,{m:2,children:[(0,r.jsx)(T.Z,{variant:"h5",component:"h1",children:"ようこそ"}),(0,r.jsx)(T.Z,{variant:"body1",component:"p",children:"ここでは、チュートリアル形式で点字について学ぶことができます。"})]}),(0,r.jsxs)(er,{container:!0,spacing:2,children:[(0,r.jsx)(er,{item:!0,xs:12,sm:6,children:(0,r.jsx)(en,{title:"点字キーボード",linkUrl:"/keyboard",imgPath:(0,a.H)("/logo.svg")})}),(0,r.jsx)(er,{item:!0,xs:12,sm:6,children:(0,r.jsx)(en,{title:"Web 点字器",linkUrl:"/touch",imgPath:(0,a.H)("/logo.svg")})})]})]})})}},2974:function(e,t,i){"use strict";i.d(t,{H:function(){return o}});var r=i(1752),n=i.n(r);function o(e){let{publicRuntimeConfig:t}=n()();return"".concat(t.staticFolder).concat(e)}},1163:function(e,t,i){e.exports=i(880)}},function(e){e.O(0,[455,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);