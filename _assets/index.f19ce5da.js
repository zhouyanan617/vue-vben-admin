let a=document.createElement("style");a.innerHTML=".iframe-page .ant-spin-nested-loading[data-v-5c45baaa]{position:relative;height:100%}.iframe-page .ant-spin-nested-loading .ant-spin-container[data-v-5c45baaa]{width:100%;height:100%;padding:10px}.iframe-page__mask[data-v-5c45baaa]{position:absolute;top:0;left:0;width:100%;height:100%}.iframe-page__main[data-v-5c45baaa]{width:100%;height:100%;overflow:hidden;background:#fff;border:0;box-sizing:border-box}",document.head.appendChild(a);import{a as e,ba as t,r as i,M as n,p as s,D as r,f as o,i as d,o as p,j as l,k as c,X as m}from"./index.32a91551.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.8f203f76.js";import"./useDebounce.9a95f792.js";import{g as f}from"./domUtils.a7a309b4.js";import{u as g}from"./useWindowSizeFn.4c17dd3d.js";var u=e({name:"IFrame",components:{Spin:t},props:{frameSrc:{type:String}},setup(){const a=i(!1),e=i(50),t=i(window.innerHeight),d=i(null);function p(){const a=o(d);if(!a)return;let{top:i}=f(a);i+=20,e.value=i,t.value=window.innerHeight-i;const n=document.documentElement.clientHeight-i;a.style.height=`${n}px`}function l(){a.value=!1,p()}return g(p,150,{immediate:!0}),n((()=>{a.value=!0,r((()=>{const a=o(d);a&&(a.attachEvent?a.attachEvent("onload",(()=>{l()})):a.onload=()=>{l()})}))})),{getWrapStyle:s((()=>({height:`${o(t)}px`}))),loading:a,frameRef:d}}});const h=m("data-v-5c45baaa"),b=h(((a,e,t,i,n,s)=>{const r=d("Spin");return p(),l("div",{class:"iframe-page",style:a.getWrapStyle},[c(r,{spinning:a.loading,size:"large",style:a.getWrapStyle},{default:h((()=>[c("iframe",{src:a.frameSrc,class:"iframe-page__main",ref:"frameRef"},null,8,["src"])])),_:1},8,["spinning","style"])],4)}));u.render=b,u.__scopeId="data-v-5c45baaa";export default u;