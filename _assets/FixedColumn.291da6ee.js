import{a as e,i as t,o as i,j as o,k as s,w as n}from"./index.32a91551.js";import"./xlsx.a48e520c.js";import"./SettingOutlined.87292a41.js";import"./index.89b0d90c.js";import"./Trigger.718b7c19.js";import"./omit.3e908ff2.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.c054b14a.js";import"./CheckOutlined.6e943c23.js";import{T as d}from"./index.0602a9cf.js";import"./index.653a701c.js";import"./colors.0ce6be88.js";import"./index.aeff906b.js";import"./RightOutlined.94b8f1ec.js";import"./index.e8ccaaa0.js";import"./types.73855c7d.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.8f203f76.js";import"./index.73e48437.js";import"./index.64033cdb.js";import"./UpOutlined.4e49ff7f.js";import"./LeftOutlined.47449d33.js";import"./DownOutlined.e9680d82.js";import"./index.b18f0b63.js";import"./index.6d446186.js";import"./index.2c49c022.js";import"./zh_CN.0242bd16.js";import"./index.0b0aeba1.js";import"./index.9504cf4b.js";import"./CaretDownFilled.c5a5bd4b.js";import"./CheckOutlined.0616dc90.js";import"./CloseOutlined.98ded395.js";import{s as r}from"./EditTableHeaderIcon.bea0c65d.js";import"./index.d3a58b78.js";import"./LeftOutlined.840eb964.js";import"./functional.c8e5999a.js";import"./RightOutlined.f3b30548.js";import"./useContext.1701c2fc.js";import"./useTimeout.2b4d0e59.js";import"./useDebounce.9a95f792.js";import"./useEventListener.56ccf098.js";import"./useBreakpoint.e13cfb1d.js";import"./resizeEvent.015ad000.js";import"./domUtils.a7a309b4.js";import"./tsxHelper.60c80881.js";import"./useExpose.44cd7e6e.js";import"./index.875daa15.js";import"./propTypes.fc55f516.js";import"./index.904cc867.js";import"./index.daead25a.js";import"./useWindowSizeFn.4c17dd3d.js";import"./uuid.40269c00.js";import"./download.af0adc4a.js";import"./useForm.7538871d.js";import"./useFullScreen.007ac430.js";import"./index.0956157a.js";import{u as a}from"./useTable.185ea93d.js";import{d as p}from"./table.f1a153e2.js";const c=[{title:"ID",dataIndex:"id",fixed:"left",width:280},{title:"姓名",dataIndex:"name",width:260},{title:"地址",dataIndex:"address",width:260},{title:"编号",dataIndex:"no",width:300},{title:"开始时间",width:200,dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime",width:200}];var m=e({components:{BasicTable:r,TableAction:d},setup(){const[e]=a({title:"TableAction组件及固定列示例",api:p,columns:c,rowSelection:{type:"radio"},actionColumn:{width:160,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});return{registerTable:e,handleDelete:function(e){},handleOpen:function(e){}}}});const l={class:"p-4"};m.render=function(e,d,r,a,p,c){const m=t("TableAction"),j=t("BasicTable");return i(),o("div",l,[s(j,{onRegister:e.registerTable},{action:n((({record:t})=>[s(m,{actions:[{label:"删除",icon:"ic:outline-delete-outline",onClick:e.handleDelete.bind(null,t)}],dropDownActions:[{label:"启用",onClick:e.handleOpen.bind(null,t)}]},null,8,["actions","dropDownActions"])])),_:1},8,["onRegister"])])};export default m;