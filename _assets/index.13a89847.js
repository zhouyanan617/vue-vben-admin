let e=document.createElement("style");e.innerHTML=".demo[data-v-c13dcea4]{background:#fff}",document.head.appendChild(e);import{a,dj as s,dk as n,cT as o,cU as t,i as c,o as d,j as r,k as i,aQ as m,p as u}from"./index.4201f4f7.js";import"./xlsx.a48e520c.js";import{A as l}from"./index.f83683e5.js";import"./index.d6a53ab6.js";import f from"./CurrentPermissionMode.9a5fc873.js";var p=a({components:{Alert:l,CurrentPermissionMode:f},setup(){const{changeMenu:e}=n();return{RoleEnum:s,changeMenu:e}}});const g=m("data-v-c13dcea4");o("data-v-c13dcea4");const h={class:"p-4 m-4 demo"},M={class:"mt-4"},j=u(" 权限切换(请先切换权限模式为后台权限模式): "),k=u(" 获取用户id为1的菜单 "),v=u(" 获取用户id为2的菜单 ");t();const x=g(((e,a,s,n,o,t)=>{const m=c("Alert"),u=c("CurrentPermissionMode"),l=c("a-button"),f=c("a-button-group");return d(),r("div",h,[i(m,{message:"目前mock了两组数据， id为1 和 2 具体返回的菜单可以在mock/sys/menu.ts内查看","show-icon":""}),i(u),i(m,{class:"mt-4",type:"info",message:"点击后请查看左侧菜单变化","show-icon":""}),i("div",M,[j,i(f,null,{default:g((()=>[i(l,{onClick:a[1]||(a[1]=a=>e.changeMenu("1"))},{default:g((()=>[k])),_:1}),i(l,{onClick:a[2]||(a[2]=a=>e.changeMenu("2"))},{default:g((()=>[v])),_:1})])),_:1})])])}));p.render=x,p.__scopeId="data-v-c13dcea4";export default p;