webpackJsonp([0],[,,function(e,t,a){var s=a(0)(a(37),null,null,null,null);e.exports=s.exports},,,function(e,t,a){function s(e){a(51)}var i=a(0)(a(46),a(75),s,"data-v-608dc358",null);e.exports=i.exports},,,,,,function(e,t){e.exports={mail:1,google:2,facebook:3}},function(e,t){e.exports={table:1,map:2}},,function(e,t,a){function s(e){a(57)}var i=a(0)(a(36),a(81),s,null,null);e.exports=i.exports},function(e,t,a){function s(e){a(49)}var i=a(0)(a(38),a(73),s,"data-v-0f92fad2",null);e.exports=i.exports},,,,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";function s(){window.onerror=function(e,t,a){return alert("Error message: "+e+"\nURL: "+t+"\nLine Number: "+a),!0},new i.a({el:"#app",template:"<App/>",components:{App:o.a},data:function(){return{isLoading:!1}},router:v})}Object.defineProperty(t,"__esModule",{value:!0});var i=a(17),n=a(14),o=a.n(n),r=a(16),l=a(13),c=a(15),u=a.n(c),d=a(5),p=a.n(d);i.a.use(r.a),i.a.use(l.a),i.a.config.productionTip=!1;var m=[{path:"/case/:id",component:u.a},{path:"/settings",component:p.a}],v=new r.a({routes:m});document.deviceready?document.addEventListener("deviceready",s,!1):s()},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(11),i=a.n(s),n=a(12),o=a.n(n),r=a(3),l=a.n(r),c=a(2),u=a.n(c),d=a(66),p=a.n(d),m=a(67),v=a.n(m),f=a(70),g=a.n(f);t.default={extends:u.a,name:"app",components:{Login:p.a,Register:v.a,MainView:g.a},data:function(){return{userData:{isLoggedIn:!1,name:"",avatar:"",id:0,settings:{sosControlLocation:{left:50,top:50},viewType:o.a.table,mapZoomLevel:14}},currentLocation:{},isLoading:!1,isLoginForm:!0,isRegistrationForm:!1}},created:function(){window.ViewType=o.a;var e=this;e.geolocate();var t=window.localStorage.mb_usercookie;if(t){if(window.localStorage.mb_loginType==i.a.mail){var a=e.domain+"/users/relogin",s={mail:t};l.a.post(a,s).then(function(t){var a=t.data;e.hasErrors=!a.isSuccess,a.isSuccess&&e.userAuthenticated(a.data.userData)})}}},methods:{geolocate:function(){var e=this;navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(t){e.currentLocation={lat:t.coords.latitude,lng:t.coords.longitude}})},userAuthenticated:function(e){var t=this;t.userData.name=e.fullName,t.userData.avatar=e.imageUrl,t.userData.id=e.userId,t.userData.isLoggedIn=!0,t.userData.settings.sosControlLocation=e.settings.sosControlLocation,t.userData.settings.viewType=e.settings.viewType,t.userData.settings.mapZoomLevel=e.settings.mapZoomLevel,t.isLoginForm=!1,t.isRegistrationForm=!1},showRegistration:function(){var e=this;e.isLoginForm=!1,e.isRegistrationForm=!0},showLogin:function(){var e=this;e.isLoginForm=!0,e.isRegistrationForm=!1},userSettingsChanged:function(e){var t=this,a=t.domain+"/users/settings",s={settings:e,userId:t.userData.id};l.a.post(a,s).then(function(e){})}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{domain:"https://mustb-amirbrb.c9users.io"}},created:function(){},methods:{}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(2),i=a.n(s);t.default={extends:i.a,components:{},props:[],data:function(){return{}},created:function(){this.getData()},watch:{$route:"getData"},methods:{getData:function(){}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(2),i=a.n(s),n=a(3),o=a.n(n),r=window.google;t.default={extends:i.a,components:{},props:["currentLocation","mapZoomLevel"],data:function(){return{map:{},cases:[]}},mounted:function(){var e=this;e.map=new r.maps.Map(document.getElementById("map"),{center:{lat:e.currentLocation.lat,lng:e.currentLocation.lng},zoom:e.mapZoomLevel,disableDefaultUI:!0,mapTypeControlOptions:r.maps.MapTypeId.ROADMAP}),e.map.addListener("zoom_changed",function(){var t=e.map.getZoom();e.$emit("mapZoomChanged",t)}),e.getData()},methods:{getData:function(){var e=this,t=e.domain+"/sos";o.a.get(t,{location:e.currentLocation}).then(function(t){e.cases=t.data.map(function(t){return{image:e.domain+"/images/"+t.userImage,title:t.title,description:t.description,id:t.id,location:t.location}}),e.placeDataOnMaps(),setTimeout(e.getData,1e3)}).catch(function(e){alert(e.data)})},placeDataOnMaps:function(){var e=this;e.cases.forEach(function(t){var a={lat:parseFloat(t.location.lat),lng:parseFloat(t.location.lng)},s={url:t.image,scaledSize:new r.maps.Size(40,40),origin:new r.maps.Point(0,0),anchor:new r.maps.Point(0,0)};new r.maps.Marker({position:a,map:e.map,title:t.title,icon:s}).setMap(e.map)})}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(2),i=a.n(s),n=a(3),o=a.n(n);t.default={extends:i.a,components:{},created:function(){this.getData()},props:["currentLocation"],data:function(){return{maxDescriptionChars:100,cases:[]}},methods:{getData:function(){var e=this,t=e.domain+"/sos";o.a.get(t,{location:e.currentLocation}).then(function(t){e.cases=t.data.map(function(t){return{image:e.domain+"/images/"+t.userImage,title:t.title,description:t.description,id:t.id,location:t.location}}),setTimeout(e.getData,1e3)}).catch(function(e){alert(e.data)})},caseShowing:function(){this.$emit("caseShowing")}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(11),i=a.n(s),n=a(3),o=a.n(n),r=a(2),l=a.n(r);t.default={extends:l.a,name:"Login",components:{},data:function(){return{hasErrors:!1,userDetails:{mail:"",password:""}}},methods:{login:function(){var e=this;e.$validator.validateAll({email:e.userDetails.mail,password:e.userDetails.password}).then(function(t){if(t){var a=e.domain+"/users/login",s={mail:e.userDetails.mail,password:e.userDetails.password};alert("posting to "+a),o.a.post(a,s).then(function(t){var a=t.data;e.hasErrors=!a.isSuccess,a.isSuccess?(e.$refs.letMeStay.checked&&(window.localStorage.mb_usercookie=e.userDetails.mail,window.localStorage.mb_loginType=i.a.mail),a.data.userData.imageUrl?e.$refs.userAvater.src=e.domain+a.data.userData.imageUrl:e.$refs.userAvater.src=e.domain+"/images/avatar.png",setTimeout(function(){e.$emit("loggedIn",a.data.userData)},3e3)):e.$refs.errors.innerHTML=a.data.message}).catch(function(t){e.hasErrors=!0,alert(t),console.error(t),e.$refs.errors.innerHTML="an error occured, please try again"})}})},showRegistration:function(){this.$emit("showRegistration")}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(3),i=a.n(s),n=a(2),o=a.n(n);t.default={extends:o.a,name:"Login",components:{},data:function(){return{hasErrors:!1,step:1,isRegistering:!1,userDetails:{mail:"",password:"",first:"",last:"",phone:""}}},methods:{next:function(){var e=this;e.$validator.validateAll({email:e.userDetails.mail,password:e.userDetails.password}).then(function(t){t&&(e.step+=1)})},prev:function(){this.step-=1},register:function(){var e=this;e.$validator.validateAll({first:e.userDetails.first,last:e.userDetails.last,phone:e.userDetails.phone}).then(function(t){if(t){var a=e.domain+"/users/register",s={mail:e.userDetails.mail,password:e.userDetails.password,firstName:e.userDetails.firstName,lastName:e.userDetails.lastName,phoneNumber:e.userDetails.phoneNumber};i.a.post(a,s).then(function(t){var a=t.data;e.hasErrors=!a.isSuccess,a.isSuccess?(e.$refs.userAvater.src=e.domain+a.data.userData.imageUrl,setTimeout(function(){e.$emit("registered",a.data.userData)},3e3)):e.$refs.errors.innerHTML=a.data.message}).catch(function(t){e.hasErrors=!0,console.error(t),e.$refs.errors.innerHTML="an error occured, please try again"})}})},showLogin:function(){this.$emit("showLogin")}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(2),i=a.n(s);t.default={extends:i.a,data:function(){return{navbarIsOpen:!1}},methods:{toggleSettings:function(){this.navbarIsOpen=!this.navbarIsOpen,this.$emit("toggleSettings")}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(2),i=a.n(s);t.default={extends:i.a,components:{},props:["data"],data:function(){return{isShowingData:!1}},methods:{showInfo:function(){var e=this;e.isShowingData=!e.isShowingData;var t=window.event,a=e.$refs.dataElement;a.style.left=t.clientX-48+"px",a.style.top=t.clientY+15+"px",setTimeout(function(){e.isShowingData=!1},2e3)}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(2),i=a.n(s),n=a(12),o=a.n(n),r=a(71),l=a.n(r),c=a(72),u=a.n(c),d=a(65),p=a.n(d),m=a(64),v=a.n(m),f=a(68),g=a.n(f),h=a(5),w=a.n(h);t.default={extends:i.a,components:{SosControl:l.a,SosForm:u.a,TableView:p.a,HeaderNavbar:g.a,Settings:w.a,MapView:v.a,ViewType:o.a},data:function(){return{isShowingHelp:!1,isShowingCase:!1,isShowingSettings:!1}},props:["userData","currentLocation"],created:function(){window.ViewType=o.a},beforeRouteUpdate:function(e,t,a){console.log(e),console.log(t),a()},methods:{sosControlLocationChanged:function(e){var t=this;t.userData.settings.sosControlLocation=e,t.$emit("userSettingsChanged",t.userData.settings)},selectTableView:function(){this.selectedTabChanged(o.a.table)},selectMapView:function(){this.selectedTabChanged(o.a.map)},selectedTabChanged:function(e){var t=this;t.userData.settings.viewType=e,t.$emit("userSettingsChanged",t.userData.settings)},mapZoomChanged:function(e){var t=this;t.userData.settings.mapZoomLevel=e,t.$emit("userSettingsChanged",t.userData.settings)},helpRequested:function(){this.isShowingHelp=!0},hideSosForm:function(){this.isShowingHelp=!1},showSettings:function(){this.isShowingSettings=!0}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(2),i=a.n(s);t.default={extends:i.a}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(61),i=a.n(s);t.default={components:{},props:["location"],data:function(){return{}},mounted:function(){var e=this,t=e.$refs.sosControl;t.style.left=e.location.left+"px",t.style.top=e.location.top+"px";var a=new i.a(t),s=e.location.left,n=e.location.top,o=!1;a.on("tap",function(t){e.$emit("helpRequested")}),a.on("pan",function(t){var a=t.target;o||(o=!0,s=a.offsetLeft,n=a.offsetTop);var i=t.deltaX+s,r=t.deltaY+n;i<0||r<0||(a.style.left=i+"px",a.style.top=r+"px",t.isFinal&&(o=!1,e.$emit("sosControlLocationChanged",{left:i,top:r})))})},methods:{}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s,i=a(2),n=a.n(i),o=a(69),r=a.n(o),l=a(3),c=a.n(l),u=window.google;t.default={extends:n.a,components:{Information:r.a},props:["userId","currentLocation"],data:function(){return{help:{title:"",description:"",images:[],location:{}}}},mounted:function(){this.initAutocomplete()},methods:{hide:function(){var e=this;e.help.title="",e.help.description="",e.help.images=[];for(var t=e.$refs.imageContainer;t.firstChild;)t.removeChild(t.firstChild);this.$emit("SosFormHidden")},initAutocomplete:function(){var e=this;s=new u.maps.places.Autocomplete(this.$refs.autocomplete,{types:["geocode"]});var t=new u.maps.Circle({center:e.currentLocation});s.setBounds(t.getBounds()),setTimeout(this.locateHelpLocation,1e3),s.addListener("place_changed",this.helpLocationChanged)},helpLocationChanged:function(){var e=this,t=s.getPlace();e.help.location={lat:t.geometry.location.lat(),lng:t.geometry.location.lng()}},locateHelpLocation:function(){var e=this;e.help.location=e.currentLocation;var t="https://maps.googleapis.com/maps/api/geocode/json?latlng="+e.currentLocation.lat+","+e.currentLocation.lng+"&key=AIzaSyBSqo5kFr5ENcknN23v5QUfQy-zoWnpopA";c.a.get(t).then(function(t){t.data.results&&t.data.results.length>0&&(e.$refs.autocomplete.value=t.data.results[0].formatted_address)}).catch(function(e){})},callHelp:function(){var e=this;e.$validator.validateAll({title:e.help.title}).then(function(t){if(t){var a=new FormData;a.append("userId",e.userId),a.append("title",e.help.title),a.append("description",e.help.description),a.append("lat",e.help.location.lat),a.append("lng",e.help.location.lng);for(var s=0;s<e.help.images.length;s++)a.append(e.help.images[s].image,e.help.images[s].file);var i={headers:{"content-type":"multipart/form-data"}};c.a.post(e.domain+"/sos/text",a,i).then(function(t){t.data.isSuccess?e.hide():alert(t.data.message)})}})},imagesSelected:function(){for(var e=this,t=e.$refs.images,a=e.$refs.imageContainer,s=t.files,i=0;i<s.length;i++){var n=document.createElement("img");n.style.cssText="width: 80px;height:60px;border-radius:50px;margin-left:5px;";var o=window.URL.createObjectURL(s[i]);n.src=o,a.appendChild(n),e.help.images.push({image:s[i].name,file:s[i]})}}}}},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,,,function(e,t,a){function s(e){a(60)}var i=a(0)(a(39),a(84),s,"data-v-e2f75a56",null);e.exports=i.exports},function(e,t,a){function s(e){a(54)}var i=a(0)(a(40),a(78),s,"data-v-700c2047",null);e.exports=i.exports},function(e,t,a){function s(e){a(56)}var i=a(0)(a(41),a(80),s,"data-v-9e18cf1e",null);e.exports=i.exports},function(e,t,a){function s(e){a(52)}var i=a(0)(a(42),a(76),s,"data-v-6c6c426a",null);e.exports=i.exports},function(e,t,a){function s(e){a(55)}var i=a(0)(a(43),a(79),s,"data-v-7a843dae",null);e.exports=i.exports},function(e,t,a){function s(e){a(59)}var i=a(0)(a(44),a(83),s,"data-v-e29a13ea",null);e.exports=i.exports},function(e,t,a){function s(e){a(58)}var i=a(0)(a(45),a(82),s,"data-v-d859a6a2",null);e.exports=i.exports},function(e,t,a){function s(e){a(53)}var i=a(0)(a(47),a(77),s,"data-v-6ddde392",null);e.exports=i.exports},function(e,t,a){function s(e){a(50)}var i=a(0)(a(48),a(74),s,"data-v-4d52504c",null);e.exports=i.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",[e._v("case")])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sos-request col-xs-10 col-xs-offset-1"},[a("span",{staticClass:"close",on:{click:e.hide}},[a("i",{staticClass:"fa-times fa"})]),e._v(" "),a("div",{staticClass:"col-xs-12 text-center help-title"},[e._v("Need help?")]),e._v(" "),a("div",{staticClass:"form-group has-feedback"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.help.title,expression:"help.title"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"form-control":!0,"error-input":e.errors.has("title")},attrs:{name:"title",placeholder:"title"},domProps:{value:e.help.title},on:{input:function(t){t.target.composing||(e.help.title=t.target.value)}}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("email"),expression:"errors.has('email')"}],staticClass:"glyphicon glyphicon-exclamation-sign form-control-feedback"})]),e._v(" "),a("div",{staticClass:"form-group has-feedback"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.help.description,expression:"help.description"}],staticClass:"form-control",attrs:{name:"description",placeholder:"description",rows:"5"},domProps:{value:e.help.description},on:{input:function(t){t.target.composing||(e.help.description=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form-group has-feedback"},[a("input",{ref:"autocomplete",staticClass:"form-control",attrs:{placeholder:"where sre you?",type:"text"}}),e._v(" "),a("span",{staticClass:"glyphicon glyphicon-map-marker col-xs-offset-1 form-control-feedback"})]),e._v(" "),a("div",{staticClass:"form-group has-feedback col-xs-12"},[a("label",{staticClass:"file-container"},[a("a",{staticClass:"btn btn-default file-loader"},[e._v("choose images")]),e._v(" "),a("input",{ref:"images",attrs:{type:"file",multiple:""},on:{change:e.imagesSelected}})]),e._v(" "),a("Information",{attrs:{data:"provide users with images of the issue so they can help"}}),e._v(" "),a("div",{ref:"imageContainer",staticClass:"images-container"})],1),e._v(" "),a("div",{staticClass:"form-group text-center"},[a("a",{staticClass:"btn btn-primary call-help-btn",on:{click:e.callHelp}},[e._v("SOS")])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"settings"},[e._v("foooooo")])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"register"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6 col-md-4 col-md-offset-4"},[a("div",{staticClass:"account-wall"},[a("img",{ref:"userAvater",staticClass:"profile-img",attrs:{src:e.domain+"/images/community.png",alt:""}}),e._v(" "),a("div",{staticClass:"registration-form",style:{display:1==e.step?null:"none"}},[a("div",{staticClass:"form-group has-feedback"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.userDetails.mail,expression:"userDetails.mail"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],class:{"form-control":!0,"error-input":e.errors.has("email")},attrs:{name:"email",type:"email",placeholder:"email"},domProps:{value:e.userDetails.mail},on:{input:function(t){t.target.composing||(e.userDetails.mail=t.target.value)}}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("email"),expression:"errors.has('email')"}],staticClass:"glyphicon glyphicon-exclamation-sign form-control-feedback"})]),e._v(" "),a("div",{staticClass:"form-group has-feedback"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.userDetails.password,expression:"userDetails.password"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"form-control":!0,"error-input":e.errors.has("password")},attrs:{name:"password",type:"password",placeholder:"password"},domProps:{value:e.userDetails.password},on:{input:function(t){t.target.composing||(e.userDetails.password=t.target.value)}}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("password"),expression:"errors.has('password')"}],staticClass:"glyphicon glyphicon-exclamation-sign form-control-feedback"})]),e._v(" "),a("div",{staticClass:"form-group text-center controls"},[a("a",{staticClass:"btn btn-lg btn-primary next",on:{click:e.next}},[e._v("next")])])]),e._v(" "),a("div",{staticClass:"registration-form",style:{display:2==e.step?null:"none"}},[a("div",{staticClass:"form-group has-feedback"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.userDetails.first,expression:"userDetails.first"},{name:"validate",rawName:"v-validate",value:"required|alpha",expression:"'required|alpha'"}],class:{"form-control":!0,"error-input":e.errors.has("first")},attrs:{name:"first",placeholder:"first name"},domProps:{value:e.userDetails.first},on:{input:function(t){t.target.composing||(e.userDetails.first=t.target.value)}}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("first"),expression:"errors.has('first')"}],staticClass:"glyphicon glyphicon-exclamation-sign form-control-feedback"})]),e._v(" "),a("div",{staticClass:"form-group has-feedback"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.userDetails.last,expression:"userDetails.last"},{name:"validate",rawName:"v-validate",value:"required|alpha",expression:"'required|alpha'"}],class:{"form-control":!0,"error-input":e.errors.has("last")},attrs:{name:"last",placeholder:"last name"},domProps:{value:e.userDetails.last},on:{input:function(t){t.target.composing||(e.userDetails.last=t.target.value)}}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("last"),expression:"errors.has('last')"}],staticClass:"glyphicon glyphicon-exclamation-sign form-control-feedback"})]),e._v(" "),a("div",{staticClass:"form-group has-feedback"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.userDetails.phone,expression:"userDetails.phone"},{name:"validate",rawName:"v-validate",value:"required|numeric",expression:"'required|numeric'"}],class:{"form-control":!0,"error-input":e.errors.has("phone")},attrs:{name:"phone",placeholder:"phone number"},domProps:{value:e.userDetails.phone},on:{input:function(t){t.target.composing||(e.userDetails.phone=t.target.value)}}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("phone"),expression:"errors.has('phone')"}],staticClass:"glyphicon glyphicon-exclamation-sign form-control-feedback"})]),e._v(" "),a("div",{staticClass:"form-group text-center"},[a("a",{staticClass:"btn btn-lg btn-primary prev",on:{click:e.prev}},[e._v("prev")]),e._v(" "),a("a",{staticClass:"btn btn-lg btn-success next",on:{click:e.register}},[e._v("done")]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.hasErrors,expression:"hasErrors"}],ref:"errors",staticClass:"text-center alert alert-danger",attrs:{id:"errors"}})])])]),e._v(" "),a("a",{staticClass:"text-center old-account",attrs:{href:"#"},on:{click:e.showLogin}},[e._v("i have an account")])])])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"sosControl",staticClass:"sos-control",style:{top:e.location.top+"px",left:e.location.left+"px"},attrs:{id:"sosControl"}},[a("i",{staticClass:"fa fa-handshake-o"})])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table-view"},e._l(e.cases,function(t){return a("div",{staticClass:"help-issue",on:{click:e.caseShowing}},[a("router-link",{attrs:{to:{path:"/case/"+t.id}}},[a("div",{staticClass:"help-issuer"},[a("img",{staticClass:"img",attrs:{src:t.image}}),e._v(" "),a("div",{staticClass:"help-title"},[e._v(e._s(t.title))]),e._v(" "),a("div",{staticClass:"help-description"},[e._v("\n          "+e._s(t.description.length>e.maxDescriptionChars?t.description.substring(0,e.maxDescriptionChars)+"...":t.description)+"\n        ")])])])],1)}))},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"navbar navbar-default navbar-fixed-top"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"mb-navbar-header"},[a("a",{class:{on:e.navbarIsOpen},attrs:{id:"toggle"},on:{click:e.toggleSettings}},[a("span")]),e._v(" "),a("img",{staticClass:"mb-navbar-logo",attrs:{src:this.domain+"/images/community.png"}}),e._v(" "),a("a",{staticClass:"mb-navbar-brand"},[e._v("someone's out there")])])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"login"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6 col-md-4 col-md-offset-4"},[a("div",{staticClass:"account-wall"},[a("img",{ref:"userAvater",staticClass:"profile-img",attrs:{src:e.domain+"/images/community.png",alt:""}}),e._v(" "),a("div",{staticClass:"form-signin"},[a("div",{staticClass:"form-group has-feedback"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.userDetails.mail,expression:"userDetails.mail"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],class:{"form-control":!0,"error-input":e.errors.has("email")},attrs:{name:"email",type:"email",placeholder:"email"},domProps:{value:e.userDetails.mail},on:{input:function(t){t.target.composing||(e.userDetails.mail=t.target.value)}}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("email"),expression:"errors.has('email')"}],staticClass:"glyphicon glyphicon-exclamation-sign form-control-feedback"})]),e._v(" "),a("div",{staticClass:"form-group has-feedback"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.userDetails.password,expression:"userDetails.password"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"form-control":!0,"error-input":e.errors.has("password")},attrs:{name:"password",type:"password",placeholder:"password"},domProps:{value:e.userDetails.password},on:{input:function(t){t.target.composing||(e.userDetails.password=t.target.value)}}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("password"),expression:"errors.has('password')"}],staticClass:"glyphicon glyphicon-exclamation-sign form-control-feedback"})]),e._v(" "),a("div",{staticClass:"form-group text-center controls"},[a("a",{staticClass:"btn btn-lg btn-primary",on:{click:e.login}},[e._v("login")])]),e._v(" "),a("div",{staticClass:"form-group text-center controls checkbox checkbox-circle checkbox-success"},[a("input",{ref:"letMeStay",attrs:{id:"checkbox3",type:"checkbox"}}),e._v(" "),a("label",{attrs:{for:"checkbox3"}},[e._v("\n                  i wanna stay\n              ")]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.hasErrors,expression:"hasErrors"}],ref:"errors",staticClass:"text-center alert alert-danger",attrs:{id:"errors"}})])])]),e._v(" "),a("a",{staticClass:"text-center new-account",attrs:{href:"#"},on:{click:e.showRegistration}},[e._v("i am new here")])])])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.isLoading,expression:"isLoading"}]},[e._v("loading...")]),e._v(" "),a("transition",{attrs:{name:"fade"}},[a("Login",{directives:[{name:"show",rawName:"v-show",value:!e.userData.isLoggedIn&&e.isLoginForm,expression:"!userData.isLoggedIn && isLoginForm"}],on:{loggedIn:e.userAuthenticated,showRegistration:e.showRegistration}})],1),e._v(" "),a("transition",{attrs:{name:"fade"}},[a("Register",{directives:[{name:"show",rawName:"v-show",value:!e.userData.isLoggedIn&&e.isRegistrationForm,expression:"!userData.isLoggedIn && isRegistrationForm"}],on:{registered:e.userAuthenticated,showLogin:e.showLogin}})],1),e._v(" "),a("transition",{attrs:{name:"fade-long"}},[e.userData.isLoggedIn?a("MainView",{attrs:{userData:e.userData,currentLocation:e.currentLocation},on:{userSettingsChanged:e.userSettingsChanged}}):e._e()],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main-view"},[a("HeaderNavbar",{on:{toggleSettings:function(t){e.isShowingSettings=!e.isShowingSettings}}}),e._v(" "),e.isShowingHelp||e.isShowingSettings?e._e():a("div",{staticClass:"data-view"},[a("ul",{staticClass:"nav nav-tabs"},[a("li",{class:{active:1===e.userData.settings.viewType}},[a("a",{attrs:{"data-toggle":"tab",href:"#sosTable"},on:{click:e.selectTableView}},[e._v("Table")])]),e._v(" "),a("li",{class:{active:2===e.userData.settings.viewType}},[a("a",{attrs:{"data-toggle":"tab",href:"#sosMap"},on:{click:e.selectMapView}},[e._v("Map")])])]),e._v(" "),a("div",{staticClass:"tab-content"},[a("div",{class:{"tab-pane":!0,fade:!0,in:1===e.userData.settings.viewType,active:1===e.userData.settings.viewType},attrs:{id:"sosTable"}},[1===e.userData.settings.viewType?a("TableView",{directives:[{name:"show",rawName:"v-show",value:!e.isShowingCase,expression:"!isShowingCase"}],attrs:{currentLocation:e.currentLocation},on:{caseShowing:function(t){e.isShowingCase=!0}}}):e._e()],1),e._v(" "),a("div",{class:{"tab-pane":!0,fade:!0,in:2===e.userData.settings.viewType,active:2===e.userData.settings.viewType},attrs:{id:"sosMap"}},[2===e.userData.settings.viewType?a("MapView",{directives:[{name:"show",rawName:"v-show",value:!e.isShowingCase,expression:"!isShowingCase"}],attrs:{mapZoomLevel:e.userData.settings.mapZoomLevel,currentLocation:e.currentLocation},on:{caseShowing:function(t){e.isShowingCase=!0},mapZoomChanged:e.mapZoomChanged}}):e._e()],1),e._v(" "),a("transition",{attrs:{name:"fade-short"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.isShowingCase,expression:"isShowingCase"}],staticClass:"data-viewer"},[a("router-view")],1)])],1)]),e._v(" "),e.isShowingSettings?a("Settings"):e._e(),e._v(" "),a("transition",{attrs:{name:"fade-short"}},[a("SosControl",{directives:[{name:"show",rawName:"v-show",value:!e.isShowingHelp&&!e.isShowingSettings,expression:"!isShowingHelp && !isShowingSettings"}],attrs:{location:e.userData.settings.sosControlLocation},on:{sosControlLocationChanged:e.sosControlLocationChanged,helpRequested:e.helpRequested}})],1),e._v(" "),a("transition",{attrs:{name:"fade-short"}},[e.isShowingHelp?a("SosForm",{attrs:{userId:e.userData.id,currentLocation:e.currentLocation},on:{SosFormHidden:e.hideSosForm}}):e._e()],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"information-button",on:{click:e.showInfo}},[a("i",{staticClass:"fa fa-info"}),e._v(" "),a("transition",{attrs:{name:"fade-short"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.isShowingData,expression:"isShowingData"}],ref:"dataElement",staticClass:"information-data"},[e._v(e._s(e.data))])])],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"map-view"},[a("div",{attrs:{id:"map"}})])}]}}],[35]);
//# sourceMappingURL=app.48a7f748af9dcfb7172d.js.map