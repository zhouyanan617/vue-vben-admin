import{a$ as e,r as t,f as n,a as s,o as r,j as a,s as o}from"./index.32a91551.js";import"./xlsx.a48e520c.js";import"./useDebounce.9a95f792.js";import{u as i}from"./useEventListener.56ccf098.js";var c=s({name:"ClickOutSide",setup(s,{emit:r}){const a=t(null);return function(s,r,a="click"){if(e)return;const o=t(!1);function c(e){if("touchend"===e.type&&(o.value=!0),"click"===e.type&&n(o))return;const t=s.value;t&&e.target&&!t.contains(e.target)&&r(e)}i({el:document,name:"touchend",listener:c,options:!0}),i({el:document,name:a,listener:c,options:!0})}(a,(()=>{r("clickOutside")})),{wrap:a}}});const u={ref:"wrap"};c.render=function(e,t,n,s,i,c){return r(),a("div",u,[o(e.$slots,"default")],512)};export default c;