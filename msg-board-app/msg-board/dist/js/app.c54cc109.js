(function(e){function t(t){for(var a,o,i=t[0],u=t[1],l=t[2],c=0,d=[];c<i.length;c++)o=i[c],r[o]&&d.push(r[o][0]),r[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);m&&m(t);while(d.length)d.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],a=!0,i=1;i<s.length;i++){var u=s[i];0!==r[u]&&(a=!1)}a&&(n.splice(t--,1),e=o(o.s=s[0]))}return e}var a={},r={app:0},n=[];function o(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=a,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(s,a,function(t){return e[t]}.bind(null,a));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/mb/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var m=u;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var a=s("64a9"),r=s.n(a);r.a},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("097d");var a=s("2b0e"),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[e._m(0),s("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}}),s("footer",[e._v("© Stefan Bobrowski 2019")])],1)},n=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("header",[s("h2",[e._v("Public Message Board")])])}],o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"messages-container"},[s("h2",[e._v("Leave a Message will ya?")]),s("form",{staticClass:"new-message-form",attrs:{id:"new-message-form"},on:{submit:function(t){return t.preventDefault(),e.addMessage(t)}}},[e.error?s("div",{staticClass:"alert alert-dismissible alert-warning"},[s("button",{staticClass:"close",attrs:{type:"bottom","data-dismiss":"alert"}},[e._v("×")]),s("h4",{staticClass:"alert-heading"},[e._v("Error!")]),s("p",[e._v(e._s(e.error))])]):e._e(),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"username"}},[e._v("Username")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.message.username,expression:"message.username"}],staticClass:"form-control",attrs:{type:"text",id:"username",placeholder:"Username",required:""},domProps:{value:e.message.username},on:{input:function(t){t.target.composing||e.$set(e.message,"username",t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"subject"}},[e._v("Subject")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.message.subject,expression:"message.subject"}],staticClass:"form-control",attrs:{type:"text",id:"subject",placeholder:"Subject",required:""},domProps:{value:e.message.subject},on:{input:function(t){t.target.composing||e.$set(e.message,"subject",t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"message"}},[e._v("Message")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message.message,expression:"message.message"}],staticClass:"form-control",attrs:{id:"message",placeholder:"Message"},domProps:{value:e.message.message},on:{input:function(t){t.target.composing||e.$set(e.message,"message",t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"imageURL"}},[e._v("Image URL")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.message.imageURL,expression:"message.imageURL"}],staticClass:"form-control",attrs:{type:"text",id:"imageURL"},domProps:{value:e.message.imageURL},on:{input:function(t){t.target.composing||e.$set(e.message,"imageURL",t.target.value)}}})]),s("button",{attrs:{type:"submit",id:"submit-message"}},[e._v("Add Message")])]),e._l(e.reversedMessages,function(t){return s("div",{key:t._id,staticClass:"media-container"},[s("li",{staticClass:"media"},[s("div",{staticClass:"media-profile"},[t.imageURL?s("img",{attrs:{src:t.imageURL,alt:"avatar"}}):e._e(),s("h4",{staticClass:"m-username"},[e._v(e._s(t.username))])]),s("div",{staticClass:"media-body"},[s("div",{staticClass:"m-post-date"},[s("p",{staticClass:"m-date"},[e._v(e._s(t.date))]),s("p",{staticClass:"m-time"},[e._v(e._s(t.time))])]),s("h4",{staticClass:"m-subject"},[e._v(e._s(t.subject))]),s("p",{staticClass:"m-message"},[e._v(e._s(t.message))])])])])})],2)},i=[],u=s("f499"),l=s.n(u),m="https://stefanbobrowski.com/mbapi",c={name:"HelloWorld",props:{msg:String},data:function(){return{error:"",messages:[],message:{username:"",subject:"",message:"",imageURL:"https://source.unsplash.com/random/100x100"}}},computed:{reversedMessages:function(){return this.messages.slice().reverse()}},mounted:function(){var e=this;fetch(m).then(function(e){return e.json()}).then(function(t){e.messages=t})},methods:{addMessage:function(){var e=this;fetch(m,{method:"POST",body:l()(this.message),headers:{"content-type":"application/json"}}).then(function(e){return e.json()}).then(function(t){if(t.details){var s=t.details.map(function(e){return e.message}).join(". ");e.error=s}else e.error="",e.showMessageForm=!1,e.messages.push(t)}).then(function(){document.getElementById("new-message-form").reset()})}}},d=c,p=(s("ac25"),s("2877")),f=Object(p["a"])(d,o,i,!1,null,"fb50e1e8",null),g=f.exports,v={name:"app",components:{HelloWorld:g}},b=v,h=(s("034f"),Object(p["a"])(b,r,n,!1,null,null,null)),_=h.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(_)}}).$mount("#app")},"64a9":function(e,t,s){},ac25:function(e,t,s){"use strict";var a=s("b3fc"),r=s.n(a);r.a},b3fc:function(e,t,s){}});
//# sourceMappingURL=app.c54cc109.js.map