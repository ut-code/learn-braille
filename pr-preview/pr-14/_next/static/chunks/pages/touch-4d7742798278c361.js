(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[158],{1946:function(t,o,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/touch",function(){return e(5201)}])},5201:function(t,o,e){"use strict";e.r(o),e.d(o,{default:function(){return u}});var n=e(5893),l=e(7294);let r={Dot1:!1,Dot2:!1,Dot3:!1,Dot4:!1,Dot5:!1,Dot6:!1},i=["Dot1","Dot2","Dot3","Dot4","Dot5","Dot6"];function D(t){let o=10240;return t.Dot1&&(o+=1),t.Dot2&&(o+=2),t.Dot3&&(o+=4),t.Dot4&&(o+=8),t.Dot5&&(o+=16),t.Dot6&&(o+=32),String.fromCodePoint(o)}function c(t){let{height:o,width:e,brailleStrings:c,setBrailleStrings:u,index:s}=t,[a,h]=(0,l.useState)(function(t){let o={...r},e=t.codePointAt(0);return o.Dot1=Boolean(e-10240&1),o.Dot2=Boolean(e-10240&2),o.Dot3=Boolean(e-10240&4),o.Dot4=Boolean(e-10240&8),o.Dot5=Boolean(e-10240&16),o.Dot6=Boolean(e-10240&32),{...o}}(c[s]));(0,l.useEffect)(()=>{u(c.map((t,o)=>o===s?D(a):t))},[a]);let f={Dot1:"40",Dot2:"40",Dot3:"40",Dot4:"90",Dot5:"90",Dot6:"90"},d={Dot1:"30",Dot2:"75",Dot3:"120",Dot4:"30",Dot5:"75",Dot6:"120"};return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:o,width:e,viewBox:"0,0,120,160",children:[(0,n.jsx)("text",{x:"2",y:"141",style:{fontSize:"169px"},children:D(a)}),Object.values(i).map(t=>(0,n.jsx)(l.Fragment,{children:(0,n.jsx)("circle",{cx:f[t],cy:d[t],r:"10",fill:a[t]?"black":"#ccc",onClick:()=>{h({...a,[t]:!a[t]})}})},t))]})})}function u(){let[t,o]=(0,l.useState)([...Array(100)].map(t=>"⠀")),[e,r]=(0,l.useState)(),i=t=>{let o="",e=!1,n=!1,l=!1,i=!1,D=!1;for(let r=0;r<t.length;r++){let c="";"⠁"===t[r]?c="あ":"⠃"===t[r]?c="い":"⠉"===t[r]?c="う":"⠋"===t[r]?c="え":"⠊"===t[r]?c="お":"⠡"===t[r]?e?(c="が",e=!1):l?(c="きゃ",l=!1):i?(c="ぎゃ",i=!1):c="か":"⠣"===t[r]?e?(c="ぎ",e=!1):c="き":"⠩"===t[r]?e?(c="ぐ",e=!1):l?(c="きゅ",l=!1):i?(c="ぎゅ",i=!1):c="く":"⠫"===t[r]?e?(c="げ",e=!1):c="け":"⠪"===t[r]?e?(c="ご",e=!1):l?(c="きょ",l=!1):i?(c="ぎょ",i=!1):c="こ":"⠱"===t[r]?e?(c="ざ",e=!1):l?(c="しゃ",l=!1):i?(c="じゃ",i=!1):c="さ":"⠳"===t[r]?e?(c="じ",e=!1):c="し":"⠹"===t[r]?e?(c="ず",e=!1):l?(c="しゅ",l=!1):i?(c="じゅ",i=!1):c="す":"⠻"===t[r]?e?(c="ぜ",e=!1):c="せ":"⠺"===t[r]?e?(c="ぞ",e=!1):l?(c="しょ",l=!1):i?(c="じょ",i=!1):c="そ":"⠕"===t[r]?e?(c="だ",e=!1):l?(c="ちゃ",l=!1):i?(c="ぢゃ",i=!1):c="た":"⠗"===t[r]?e?(c="ぢ",e=!1):c="ち":"⠝"===t[r]?e?(c="づ",e=!1):l?(c="ちゅ",l=!1):i?(c="ぢゅ",i=!1):c="つ":"⠟"===t[r]?e?(c="で",e=!1):c="て":"⠞"===t[r]?e?(c="ど",e=!1):l?(c="ちょ",l=!1):i?(c="ぢょ",i=!1):c="と":"⠅"===t[r]?l?(c="にゃ",l=!1):c="な":"⠇"===t[r]?c="に":"⠍"===t[r]?l?(c="にゅ",l=!1):c="ぬ":"⠏"===t[r]?c="ね":"⠎"===t[r]?l?(c="にょ",l=!1):c="の":"⠥"===t[r]?e?(c="ば",e=!1):l?(c="ひゃ",l=!1):i?(c="びゃ",i=!1):D?(c="ぴゃ",D=!1):c="は":"⠧"===t[r]?e?(c="び",e=!1):n?(c="ぴ",n=!1):c="ひ":"⠭"===t[r]?e?(c="ぶ",e=!1):n?(c="ぷ",n=!1):l?(c="ひゅ",l=!1):i?(c="びゅ",i=!1):D?(c="ぴゅ",D=!1):c="ふ":"⠯"===t[r]?e?(c="べ",e=!1):n?(c="ぺ",n=!1):c="へ":"⠮"===t[r]?e?(c="ぼ",e=!1):n?(c="ぽ",n=!1):l?(c="ひょ",l=!1):i?(c="びょ",i=!1):D?(c="ぴょ",D=!1):c="ほ":"⠵"===t[r]?l?(c="みゃ",l=!1):c="ま":"⠷"===t[r]?c="み":"⠽"===t[r]?l?(c="みゅ",l=!1):c="む":"⠿"===t[r]?c="め":"⠾"===t[r]?l?(c="みょ",l=!1):c="も":"⠌"===t[r]?c="や":"⠬"===t[r]?c="ゆ":"⠜"===t[r]?c="よ":"⠑"===t[r]?l?(c="りゃ",l=!1):c="ら":"⠓"===t[r]?c="り":"⠙"===t[r]?l?(c="りゅ",l=!1):c="る":"⠛"===t[r]?c="れ":"⠚"===t[r]?l?(c="りょ",l=!1):c="ろ":"⠄"===t[r]?c="わ":"⠔"===t[r]?c="を":"⠴"===t[r]?c="ん":"⠒"===t[r]?c="ー":"⠂"===t[r]?c="っ":"⠐"===t[r]?e=!0:"⠠"===t[r]?n=!0:"⠈"===t[r]?l=!0:"⠘"===t[r]?i=!0:"⠨"===t[r]&&(D=!0),o+=c}r(o)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("button",{type:"button",onClick:()=>{i(t)},children:"翻訳"}),(0,n.jsx)("p",{children:e}),t.map((e,l)=>(0,n.jsx)(c,{height:"100",width:"60",brailleStrings:t,setBrailleStrings:o,index:l},l))]})}}},function(t){t.O(0,[774,888,179],function(){return t(t.s=1946)}),_N_E=t.O()}]);