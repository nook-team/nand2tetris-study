"use strict";(self.webpackChunkntt_study=self.webpackChunkntt_study||[]).push([[637],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>s});var l=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,l,a=function(t,e){if(null==t)return{};var n,l,a={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=l.createContext({}),p=function(t){var e=l.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return l.createElement(u.Provider,{value:e},t.children)},N="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},m=l.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,u=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),N=p(n),m=a,s=N["".concat(u,".").concat(m)]||N[m]||k[m]||r;return n?l.createElement(s,i(i({ref:e},d),{},{components:n})):l.createElement(s,i({ref:e},d))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o[N]="string"==typeof t?t:a,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9785:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>N,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var l=n(7462),a=(n(7294),n(3905));const r={sidebar_position:3,slug:"/boolean-functions-and-gate-logic"},i="Boolean functions and Gate Logic",o={unversionedId:"boolean_functions_and_gate_logic",id:"boolean_functions_and_gate_logic",title:"Boolean functions and Gate Logic",description:"Boolean Expressions",source:"@site/docs/03.boolean_functions_and_gate_logic.md",sourceDirName:".",slug:"/boolean-functions-and-gate-logic",permalink:"/nand2tetris-study/boolean-functions-and-gate-logic",draft:!1,editUrl:"https://github.com/neu-ru/nand2tetris-study/tree/main/docs/03.boolean_functions_and_gate_logic.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,slug:"/boolean-functions-and-gate-logic"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/nand2tetris-study/introduction"},next:{title:"Boolean arithmetic and the ALU",permalink:"/nand2tetris-study/boolean-arithmetic-and-the-alu"}},u={},p=[{value:"Boolean Expressions",id:"boolean-expressions",level:2},{value:"Boolean Functions",id:"boolean-functions",level:2},{value:"Boolean identities",id:"boolean-identities",level:2},{value:"Commutative Laws",id:"commutative-laws",level:3},{value:"Associative Laws",id:"associative-laws",level:3},{value:"Distributive Laws",id:"distributive-laws",level:3},{value:"De Morgan Laws",id:"de-morgan-laws",level:3},{value:"Boolean Algebra",id:"boolean-algebra",level:2},{value:"Truth Table to Boolean Expression",id:"truth-table-to-boolean-expression",level:2},{value:"Gate Logic",id:"gate-logic",level:2},{value:"Elementary",id:"elementary",level:3},{value:"Composite",id:"composite",level:3},{value:"HDL",id:"hdl",level:2},{value:"HDL \uad6c\uc131 \uc694\uc18c",id:"hdl-\uad6c\uc131-\uc694\uc18c",level:2},{value:".hdl",id:"hdl-1",level:3},{value:".tst",id:"tst",level:3},{value:".cmp",id:"cmp",level:3},{value:"Multi-bit Buses",id:"multi-bit-buses",level:2}],d={toc:p};function N(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,l.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"boolean-functions-and-gate-logic"},"Boolean functions and Gate Logic"),(0,a.kt)("h2",{id:"boolean-expressions"},"Boolean Expressions"),(0,a.kt)("p",null,"NOT(0 OR (1 AND 1))"),(0,a.kt)("p",null,"\uad04\ud638\ub85c \uac10\uc2f8\uc838 \uc788\ub294 \ubd80\ubd84\uc774 \uc6b0\uc120\uc21c\uc704\uac00 \ub192\uc2b5\ub2c8\ub2e4.\n\uc5ec\uae30\uc11c \uc81c\uc77c \uc548\ucabd\uc5d0 \uc788\ub294 1 AND 1 \ubd80\ud130 \uacc4\uc0b0\ud558\uba74 1 \uc774 \ub098\uc624\uace0\n\uadf8\ub2e4\uc74c \uacc4\uc0b0\ud560 \ubd80\ubd84\uc740 0 OR 1\n\uadf8\ub2e4\uc74c \uacc4\uc0b0\ud560 \ubd80\ubd84\uc740 NOT(1)\uc774 \ub418\ubbc0\ub85c \uacb0\uacfc\ub294 0\uc774 \ub429\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"boolean-functions"},"Boolean Functions"),(0,a.kt)("p",null,"f(x, y, z) = (x AND y) OR (NOT(x) AND z)"),(0,a.kt)("p",null,"\uc704\uc640 \uac19\uc740 \uc2dd\uc744 \ubd88\ub9ac\uc548 \ud568\uc218\uc2dd(Formula)\uc774\ub77c\uace0 \ubd80\ub985\ub2c8\ub2e4.\n\ud574\ub2f9 \uc2dd\uc758 \uacb0\uacfc\ub294 2(0, 1)\uc758 3(x, y, z)\uc2b9 \uac1c\ub9cc\ud07c \ub098\uc62c \uac83\uc785\ub2c8\ub2e4.\n8\uac00\uc9c0\uc758 \uacb0\uacfc\ub294 x, y, z \uc758 \uac01 \uc785\ub825(0,1) \ub9c8\ub2e4 \ud56d\uc0c1 \uc77c\uc815\ud55c \uacb0\uacfc\uac12\uc774 \ub098\uc62c \uac83\uc785\ub2c8\ub2e4.\n\uadf8\ub7ec\ud55c \uacb0\uacfc\ub4e4\uc744 \ud55c\ub208\uc5d0 \ubcfc \uc218 \uc788\ub3c4\ub85d \ub9cc\ub4e0 \ud14c\uc774\ube14\uc774 \uc9c4\ub9ac\ud45c(Truth table) \uc785\ub2c8\ub2e4.\n\uc544\ub798\ub294 \ud574\ub2f9 \ud568\uc218\uc2dd\uc758 \uc9c4\ub9ac\ud45c\uc785\ub2c8\ub2e4."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"x"),(0,a.kt)("th",{parentName:"tr",align:null},"y"),(0,a.kt)("th",{parentName:"tr",align:null},"z"),(0,a.kt)("th",{parentName:"tr",align:null},"f"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"1")))),(0,a.kt)("h2",{id:"boolean-identities"},"Boolean identities"),(0,a.kt)("h3",{id:"commutative-laws"},"Commutative Laws"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"x AND y = y AND x"),(0,a.kt)("li",{parentName:"ul"},"x OR y = y OR x")),(0,a.kt)("h3",{id:"associative-laws"},"Associative Laws"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"x AND (y AND z) = (x AND y) AND z"),(0,a.kt)("li",{parentName:"ul"},"x OR (y OR z) = (x OR y) OR z")),(0,a.kt)("h3",{id:"distributive-laws"},"Distributive Laws"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"x AND (y OR z) = (x AND y) OR (x AND z)"),(0,a.kt)("li",{parentName:"ul"},"x OR (y AND z) = (x OR y) AND (x OR z)")),(0,a.kt)("h3",{id:"de-morgan-laws"},"De Morgan Laws"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"NOT(x AND y) = NOT(x) OR NOT(y)"),(0,a.kt)("li",{parentName:"ul"},"NOT(x OR y) = NOT(x) AND NOT(y)")),(0,a.kt)("h2",{id:"boolean-algebra"},"Boolean Algebra"),(0,a.kt)("p",null,"NOT(NOT(x) AND NOT(x OR y))"),(0,a.kt)("p",null,"\uc704\uc640 \uac19\uc740 \ud568\uc218\uc2dd\uc744 \uadf8\ub300\ub85c \uc0ac\uc6a9\ud560 \uc218\ub3c4 \uc788\uc9c0\ub9cc \uc6b0\ub9ac\uac00 \uc0ac\uc6a9\ud558\ub294 \ud558\ub4dc\uc6e8\uc5b4\uc758 \uc790\uc6d0\uc740 \ubd80\ud488\uc744 \uc801\uac8c \uc0ac\uc6a9\ud558\uba74 \ub354 \ud6a8\uc728\uc774 \ub192\uc544\uc9d1\ub2c8\ub2e4.\n\ub2e4\uc74c \uc2dd\uc744 \ubd88\ub9ac\uc548 \ud2b9\uc9d5\uc5d0 \ub530\ub77c \uc904\uc5ec\ubd05\uc2dc\ub2e4."),(0,a.kt)("p",null,"NOT(NOT(x) AND NOT(x OR y)) -> De Morgan Laws -> NOT(NOT(x) AND (NOT(x) AND NOT(y)))"),(0,a.kt)("p",null,"NOT(NOT(x) AND (NOT(x) AND NOT(y))) -> Associative Laws -> NOT((NOT(x) AND NOT(x)) AND NOT(y))"),(0,a.kt)("p",null,"NOT((NOT(x) AND NOT(x)) AND NOT(y)) -> Idempotence ->\nNOT(NOT(x) AND NOT(y))"),(0,a.kt)("p",null,"NOT(NOT(x) AND NOT(y)) -> De Morgan Laws + Double Negation -> x OR y"),(0,a.kt)("p",null,"\uc6d0\ub798 5\uac1c\uc758 \ub85c\uc9c1\uc774 \uc788\ub358 \uc2dd\uc774 1\uac1c\uc758 \ub85c\uc9c1\uc73c\ub85c \uac04\ub2e8\ud574\uc84c\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"truth-table-to-boolean-expression"},"Truth Table to Boolean Expression"),(0,a.kt)("p",null,"\uc9c4\ub9ac\ud45c\uc5d0\uc11c \ubd80\uc6b8\uc2dd\uc744 \ub3c4\ucd9c\ud574\ub0bc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc6b0\uc120 \ub2e4\uc74c\uacfc \uac19\uc740 \uc9c4\ub9ac\ud45c\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"x"),(0,a.kt)("th",{parentName:"tr",align:null},"y"),(0,a.kt)("th",{parentName:"tr",align:null},"z"),(0,a.kt)("th",{parentName:"tr",align:null},"f"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"0")))),(0,a.kt)("p",null,"\uc6b0\uc120 \uacb0\uacfc\uac00 1\uc77c\ub54c\ub9cc\uc744 \uc0dd\uac01\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"x, y, z \uac00 0 \uc77c\ub54c 1\uc778 \uacb0\uacfc\uac00 \ub098\uc62c\ub54c \ud568\uc218\uc2dd\uc740 \ub2e4\uc74c\uacfc \uac19\uc774 \ud45c\ud604\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"NOT(x) AND NOT(y) AND NOT(z)"),(0,a.kt)("p",null,"\uc774 \ud568\uc218\uc2dd\uc740 x, y, z \uac00 0 \uc77c\ub54c \ub9d0\uace0\ub294 \uacb0\uacfc\uac00 0\uc774 \ub098\uc635\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ub2e4\uc74c\uc73c\ub85c x, z\uac00 0 y \uac00 1\uc77c \ub54c \uacb0\uacfc\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 \ud45c\ud604\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"NOT(x) AND y AND NOT(z)"),(0,a.kt)("p",null,"\ub9c8\ucc2c\uac00\uc9c0\ub85c \ub098\uba38\uc9c0\ub294 0\uc774 \ub098\uc635\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ub9c8\uc9c0\ub9c9\uc73c\ub85c x \uac00 1 y, z \uac00 0 \uc77c\ub54c\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"x AND NOT(y) AND NOT(z)"),(0,a.kt)("p",null,"\uc774\uc81c \uc800 3 \uac00\uc9c0 \uc2dd\ub4e4\uc744 \ubaa8\ub450 \ub9cc\uc871\ud558\ub294 \uc2dd\uc744 \ub9cc\ub4dc\ub824\uba74 \uc5b4\ub5bb\uac8c \ud574\uc57c\ud560\uae4c\uc694?"),(0,a.kt)("p",null,"3 \uac00\uc9c0 \uc2dd\uc744 or \uc5f0\uc0b0\ud558\uba74 \ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,"(NOT(x) AND NOT(y) AND NOT(z)) or (NOT(x) AND y AND NOT(z)) or (x AND NOT(y) AND NOT(z))"),(0,a.kt)("p",null,"\uc774\ub294 \ubd88\ub9ac\uc548\uc758 \uc5ec\ub7ec \ubc95\uce59\ub4e4\ub85c \uac04\ub2e8\ud558\uac8c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"gate-logic"},"Gate Logic"),(0,a.kt)("h3",{id:"elementary"},"Elementary"),(0,a.kt)("p",null,"Nand,\nAnd,\nOr,\nNot"),(0,a.kt)("h3",{id:"composite"},"Composite"),(0,a.kt)("p",null,"Adder,\nMux"),(0,a.kt)("h2",{id:"hdl"},"HDL"),(0,a.kt)("p",null,"HDL \uc740 \ud568\uc218\ud615, \uc120\uc5b8\ud615 \uc5b8\uc5b4\uc785\ub2c8\ub2e4.\nHDL \uad6c\ubb38\uc758 \uc21c\uc11c\ub294 \uc2e0\uacbd\uc4f0\uc9c0 \uc54a\uc544\ub3c4 \ub429\ub2c8\ub2e4.\nchip \uc744 \ub9cc\ub4e4\uae30 \uc704\ud574\uc11c\ub294 interface \uc601\uc5ed \uc120\uc5b8\ubc95\uc744 \uc54c\uc544\uc57c\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"Not(in= , out= ), AND(a= , b= , out= ), OR(a= , b= , out= )"),(0,a.kt)("p",null,"interface \uc601\uc5ed\uc740 unique \ud569\ub2c8\ub2e4.\nimplementation \uc601\uc5ed\uc740 unique \ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc77c\ubc18\uc801\uc778 HDL \uc5b8\uc5b4\ub85c VHDL, Verilog \ub4f1\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"hdl-\uad6c\uc131-\uc694\uc18c"},"HDL \uad6c\uc131 \uc694\uc18c"),(0,a.kt)("h3",{id:"hdl-1"},".hdl"),(0,a.kt)("p",null,"\uce69\uc758 \uc778\ud130\ud398\uc774\uc2a4\uc640 \uad6c\ud604\ubd80\uac00 \uc788\ub294 \ud30c\uc77c\uc785\ub2c8\ub2e4.\n\uc778\ud130\ud398\uc774\uc2a4\uc640 \uad6c\ud604\ubd80\ub97c \uc815\uc758\ud558\uba74 \ud558\ub098\uc758 \uac00\uc0c1 \uce69\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"tst"},".tst"),(0,a.kt)("p",null,"hdl \uc5d0\uc11c \ub9cc\ub4e4\uc5b4\uc9c0 \uac00\uc0c1\uc758 \uce69\uc744 \ud14c\uc2a4\ud2b8\ud560 \uc218 \uc788\ub294 \ud30c\uc77c\uc785\ub2c8\ub2e4.\n\uc77c\uc885\uc758 \uc778\ud130\ud398\uc774\uc2a4 \ud14c\uc2a4\ud2b8\ub77c\uace0 \uc0dd\uac01\ud558\uba74 \ub429\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"cmp"},".cmp"),(0,a.kt)("p",null,"\uc9c4\ub9ac\ud45c\ub97c \ub123\uc5b4\uc11c \ud14c\uc2a4\ud2b8 \ud30c\uc77c\uc758 \uc218\ud589 \ud6c4 \uc815\ub2f5 \uc5ec\ubd80\ub97c \uc54c\ub824\uc90d\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"multi-bit-buses"},"Multi-bit Buses"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-HDL"},"CHIP multi {\n  IN a[4], b[4];\n  OUT out[4];\n\n  PARTS:\n}\n\n\uc774\ub807\uac8c \uba40\ud2f0 \ube44\ud2b8\ub97c \uac00\uc9c4 \uc785\ub825\uc5d0 \ub300\uc751\ud558\uc5ec HDL \uc744 \uad6c\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uc774\ub294 \uc77c\ubc18\uc801\uc778 \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\uc758 array \uc640 \uc720\uc0ac\ud55c \ud2b9\uc131\uc744 \uc774\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n")))}N.isMDXComponent=!0}}]);