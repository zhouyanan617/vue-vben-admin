let t=document.createElement("style");t.innerHTML=".account-center-application__card{width:100%;margin-bottom:-12px}.account-center-application__card .ant-card-body{padding:16px}.account-center-application__card-title{margin-bottom:5px;font-size:16px;font-weight:500;color:rgba(0,0,0,.85)}.account-center-application__card-title .icon{margin-top:-5px;font-size:22px}.account-center-application__card-num{margin-left:24px;line-height:36px;color:#7d7a7a}.account-center-application__card-num span{margin-left:5px;font-size:18px;color:#000}.account-center-application__card-download{float:right;font-size:20px!important;color:#1890ff}",document.head.appendChild(t);import{a,i,o,j as c,w as n,k as e,Y as r,aH as s,l,n as p,m as d}from"./index.32a91551.js";import"./xlsx.a48e520c.js";import"./index.89b0d90c.js";import"./Trigger.718b7c19.js";import"./omit.3e908ff2.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.c054b14a.js";import"./CheckOutlined.6e943c23.js";import"./RightOutlined.94b8f1ec.js";import"./index.b66dcbf7.js";import"./UpOutlined.4e49ff7f.js";import"./LeftOutlined.47449d33.js";import{C as m}from"./index.dcc0ddf2.js";import"./index.2c49c022.js";import"./zh_CN.0242bd16.js";import{L as f}from"./index.43ce6d91.js";import"./propTypes.fc55f516.js";import{I as u}from"./index.904cc867.js";import{applicationList as _}from"./data.adb4d861.js";var x=a({components:{List:f,ListItem:f.Item,Card:m,Icon:u},setup:()=>({prefixCls:"account-center-application",list:_})});const j=p(" 活跃用户："),b=p(" 万 "),g=p(" 新增用户：");x.render=function(t,a,m,f,u,_){const x=i("Icon"),C=i("Card"),h=i("ListItem"),w=i("a-col"),L=i("a-row"),v=i("List");return o(),c(v,{class:t.prefixCls},{default:n((()=>[e(L,{gutter:16},{default:n((()=>[(o(!0),c(r,null,s(t.list,((a,i)=>(o(),c(w,{key:i,span:6},{default:n((()=>[e(h,null,{default:n((()=>[e(C,{hoverable:!0,class:`${t.prefixCls}__card`},{default:n((()=>[e("div",{class:`${t.prefixCls}__card-title`},[a.icon?(o(),c(x,{key:0,class:"icon",icon:a.icon,color:a.color},null,8,["icon","color"])):l("",!0),p(" "+d(a.title),1)],2),e("div",{class:`${t.prefixCls}__card-num`},[j,e("span",null,d(a.active),1),b],2),e("div",{class:`${t.prefixCls}__card-num`},[g,e("span",null,d(a.new),1)],2),a.download?(o(),c(x,{key:0,class:`${t.prefixCls}__card-download`,icon:a.download},null,8,["class","icon"])):l("",!0)])),_:2},1032,["class"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1},8,["class"])};export default x;