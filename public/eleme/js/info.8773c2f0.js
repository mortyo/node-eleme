(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["info"],{"51be":function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));var a="";a="/eleme/img/"},9872:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"info_page"},[s("el-tabs",{staticClass:"tabs",attrs:{type:"border-card","tab-position":"left"}},[s("el-tab-pane",[s("span",{attrs:{slot:"label"},slot:"label"},[s("i",{staticClass:"el-icon-user"}),e._v(" 用户信息")]),s("p",[e._v("当前用户名："+e._s(e.username))]),s("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入新的用户名",clearable:""},model:{value:e.resetname,callback:function(t){e.resetname=t},expression:"resetname"}}),s("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.reset_Name()}}},[e._v("确认修改")])],1),s("el-tab-pane",[s("span",{attrs:{slot:"label"},slot:"label"},[s("i",{staticClass:"el-icon-s-custom"}),e._v(" 头像修改")]),s("img",{staticStyle:{width:"180px",height:"180px"},attrs:{src:e.imgBaseUrl+this.userInfo.avatar}}),s("input",{staticClass:"profileinfopanel-upload",staticStyle:{display:"block"},attrs:{type:"file"}}),s("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.uploadAvatar()}}},[e._v("确认上传")])],1),s("el-tab-pane",[s("span",{attrs:{slot:"label"},slot:"label"},[s("i",{staticClass:"el-icon-map-location"}),e._v(" 收货地址")]),s("el-button",{staticStyle:{"margin-bottom":"4px"},attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.add_address_btn()}}},[e._v("增加地址")]),s("el-dialog",{attrs:{title:"添加地址",visible:e.add_address_show,"modal-append-to-body":!1},on:{"update:visible":function(t){e.add_address_show=t}}},[s("el-form",[e._v(" 收货人"),s("el-input",{attrs:{placeholder:"名字"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),e._v(" 手机号码"),s("el-input",{attrs:{placeholder:"手机号码"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}),e._v(" 地址"),s("el-input",{attrs:{placeholder:"地址"},model:{value:e.addAddress,callback:function(t){e.addAddress=t},expression:"addAddress"}}),e._v(" 详细地址"),s("el-input",{attrs:{placeholder:"详细地址"},model:{value:e.detailedaddress,callback:function(t){e.detailedaddress=t},expression:"detailedaddress"}})],1),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(t){e.add_address_show=!1}}},[e._v("取 消")]),s("el-button",{attrs:{type:"primary"},on:{click:function(t){e.add_address_show=!1,e.add_address()}}},[e._v("确 定")])],1)],1),s("ul",e._l(e.addressList,(function(t){return s("li",{key:t.id,staticClass:"addresslist"},[s("div",[s("p",[e._v("地址："+e._s(t.address))]),s("p",[e._v("电话："+e._s(t.phone))])]),s("div",[s("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.edit_address()}}},[e._v("编辑")]),s("el-button",{attrs:{slot:"reference",type:"primary",size:"mini"},on:{click:function(s){return e.delete_address(t.id)}},slot:"reference"},[e._v("删除")])],1)])})),0)],1),s("el-tab-pane",[s("span",{attrs:{slot:"label"},slot:"label"},[s("i",{staticClass:"el-icon-unlock"}),e._v(" 修改密码")]),s("form",{staticClass:"restForm"},[e.username?s("p",[e._v("当前账号："+e._s(e.username))]):e._e(),s("el-input",{staticClass:"input",attrs:{"show-password":"",placeholder:"请输入旧密码"},model:{value:e.oldPassWord,callback:function(t){e.oldPassWord=t},expression:"oldPassWord"}}),s("el-input",{staticClass:"input",attrs:{"show-password":"",placeholder:"请输入新密码"},model:{value:e.newPassWord,callback:function(t){e.newPassWord=t},expression:"newPassWord"}}),s("el-input",{staticClass:"input",attrs:{"show-password":"",placeholder:"请确认新密码"},model:{value:e.confirmPassWord,callback:function(t){e.confirmPassWord=t},expression:"confirmPassWord"}}),s("div",{staticClass:"captcha"},[s("el-input",{attrs:{maxlength:"4",placeholder:"验证码"},model:{value:e.captchaCode,callback:function(t){e.captchaCode=t},expression:"captchaCode"}}),s("img",{attrs:{src:e.captchaCodeImg,alt:"验证码"},on:{click:e.getCaptchaCode}})],1),s("el-button",{attrs:{id:"resetbtn",type:"primary"},on:{click:e.resetButton}},[e._v("确认修改")])],1)])],1)],1)},n=[],r=(s("96cf"),s("1da1")),o=s("5530"),i=s("2f62"),d=s("bdaa"),c=(s("bc3a"),s("51be")),l=(s("3f55"),{data:function(){return{username:"",resetname:"",imgBaseUrl:c["a"],addressList:[],add_address_show:!1,edit_address_show:!1,phone:"",phone_bk:"",addAddress:"",detailedaddress:"",message:"",OldPassword:"",NewPassword:"",ConfirmPassword:"",CaptchaCode:"",captchaCodeImg:""}},computed:Object(o["a"])({},Object(i["d"])(["userInfo","state_Address","geohash"])),created:function(){this.getCaptchaCode()},mounted:function(){this.getAddress()},methods:Object(o["a"])({},Object(i["b"])(["saveAddress"]),{reset_Name:function(){this.$message({showClose:!0,message:"没有修改用户名这个接口，等我后面写服务器的时候再加，嘻嘻",type:"success"})},uploadAvatar:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var s,a,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.userInfo){t.next=18;break}return s=document.querySelector(".profileinfopanel-upload"),a=new FormData,a.append("file",s.files[0]),t.prev=4,t.next=7,Object(d["b"])(e.userInfo.user_id,a);case 7:return n=t.sent,t.next=10,n.json();case 10:r=t.sent,1==r.status&&(e.userInfo.avatar=r.image_path),t.next=18;break;case 14:throw t.prev=14,t.t0=t["catch"](4),e.$message.error("上传失败，请重新上传"),new Error(t.t0);case 18:case"end":return t.stop()}}),t,null,[[4,14]])})))()},getAddress:function(){this.addressList=this.state_Address.data},add_address_btn:function(){this.add_address_show=!0},add_address:function(){Object(d["u"])(this.userInfo.user_id,this.addAddress,this.detailedaddress,this.geohash="geohash",this.username,this.phone,this.phone_bk,0,1,"公司",4).then((function(e){console.log(e.data)}))},edit_address:function(){alert("没有编辑地址的接口(～﹃～)~zZ")},delete_address:function(e){var t=this;this.$confirm("此操作将删除该地址信息, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(r["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,Object(d["f"])(t.userInfo.user_id,e).then((function(e){console.log(e.data)}));case 2:t.saveAddress(),t.addressList=t.state_Address.data,t.$nextTick((function(){console.log("数据更新了")})),t.$message({type:"success",message:"删除成功!"});case 6:case"end":return s.stop()}}),s)})))).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},getCaptchaCode:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(d["p"])().then((function(t){e.captchaCodeImg=t.data.code}));case 2:case"end":return t.stop()}}),t)})))()},resetButton:function(){Object(d["c"])(this.username,this.OldPassWord,this.NewPassWord,this.ConfirmPassWord,this.CaptchaCode).then((function(e){alert("改密码这个接口貌似不管用。。。")}))}}),watch:{userInfo:function(e){e&&e.user_id&&(this.username=e.username,this.avatar=e.avatar)}}}),u=l,p=(s("db5b"),s("2877")),h=Object(p["a"])(u,a,n,!1,null,"6325a562",null);t["default"]=h.exports},c624:function(e,t,s){},db5b:function(e,t,s){"use strict";var a=s("c624"),n=s.n(a);n.a}}]);
//# sourceMappingURL=info.8773c2f0.js.map