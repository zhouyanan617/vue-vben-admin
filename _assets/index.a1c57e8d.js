import{a as e,h as n,i as t,o as i,j as l,k as s,w as a,p as o}from"./index.4201f4f7.js";import"./xlsx.a48e520c.js";import"./Trigger.d6b11091.js";import"./index.e75dd547.js";import"./types.95acfcc2.js";import"./index.a172b251.js";import"./index.abbd4b6e.js";import"./index.d6a53ab6.js";import{C as r}from"./index.bcb6dbba.js";import"./index.e65e388a.js";import{u as c}from"./useContextMenu.8e10a48d.js";var d=e({components:{CollapseContainer:r},setup(){const[e]=c(),{createMessage:t}=n();return{handleContext:function(n){e({event:n,items:[{label:"New",icon:"bi:plus",handler:()=>{t.success("click new")}},{label:"Open",icon:"bx:bxs-folder-open",handler:()=>{t.success("click open")}}]})},handleMultipleContext:function(n){e({event:n,items:[{label:"New",icon:"bi:plus",children:[{label:"New1-1",icon:"bi:plus",divider:!0,children:[{label:"New1-1-1",handler:()=>{t.success("click new")}},{label:"New1-2-1",disabled:!0}]},{label:"New1-2",icon:"bi:plus"}]}]})}}}});const p={class:"p-4"},u=o("Right Click on me"),m=o("Right Click on me");d.render=function(e,n,o,r,c,d){const b=t("a-button"),x=t("CollapseContainer");return i(),l("div",p,[s(x,{title:"Simple"},{default:a((()=>[s(b,{type:"primary",onContextmenu:e.handleContext},{default:a((()=>[u])),_:1},8,["onContextmenu"])])),_:1}),s(x,{title:"Multiple",class:"mt-4"},{default:a((()=>[s(b,{type:"primary",onContextmenu:e.handleMultipleContext},{default:a((()=>[m])),_:1},8,["onContextmenu"])])),_:1})])};export default d;