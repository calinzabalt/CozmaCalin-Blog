(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{175:function(t,e,n){var content=n(183);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("5a0f7113",content,!0,{sourceMap:!1})},182:function(t,e,n){"use strict";var o=n(175);n.n(o).a},183:function(t,e,n){(t.exports=n(29)(!1)).push([t.i,"#about-page[data-v-45aab640]{width:80%;max-width:800px;margin:auto}#about-page p[data-v-45aab640]{margin-top:20px;white-space:pre-line}#about-page h1[data-v-45aab640]{margin-top:100px;white-space:pre-line}#about-page h3[data-v-45aab640]{margin-top:55px}.grid[data-v-45aab640]{padding:20px;color:#fff}form[data-v-45aab640]{width:100%;max-width:900px;margin:20px auto 40px}@media screen and (max-width:996px){form[data-v-45aab640]{width:100%;max-width:500px;margin:20px auto 40px}}@media screen and (max-width:550px){form[data-v-45aab640]{width:100%;max-width:280px;margin:20px auto 40px}}form p[data-v-45aab640]{color:#000;font-size:22px}input[data-v-45aab640],textarea[data-v-45aab640]{width:900px;max-width:100%;resize:none;background-color:#fff;height:30px}@media screen and (max-width:996px){input[data-v-45aab640],textarea[data-v-45aab640]{width:500px;max-width:100%;resize:none}}@media screen and (max-width:550px){input[data-v-45aab640],textarea[data-v-45aab640]{width:280px;max-width:100%;resize:none}}textarea[data-v-45aab640]{height:200px}label[data-v-45aab640]{text-align:left;font-weight:400}form button[data-v-45aab640]{background:#4a96ad;font-weight:700;text-transform:uppercase;padding:20px 30px;font-size:18px;border:none;color:#fff}form p[data-v-45aab640]{text-align:left}",""])},193:function(t,e,n){"use strict";n.r(e);var o={asyncData:function(t){return t.app.$storyapi.get("cdn/stories/about",{version:t.isDev?"draft":"published"}).then(function(t){return console.log(t.data),{blok:t.data.story.content,title:t.data.story.content.title,content:t.data.story.content.content}})},mounted:function(){this.$storybridge.on("change",function(){location.reload(!0)})}},r=(n(182),n(13)),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{directives:[{name:"editable",rawName:"v-editable",value:t.blok,expression:"blok"}],attrs:{id:"about-page"}},[n("h1",[t._v(t._s(t.title))]),t._v(" "),n("p",[t._v(t._s(t.content))]),t._v(" "),n("h3",[t._v("Contact C&C (Critique and comments are welcome)")]),t._v(" "),t._m(0)])},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{attrs:{method:"post"}},[n("input",{attrs:{type:"hidden",name:"form-name",value:"contact"}}),t._v(" "),n("p",[n("label",[t._v("Your Name: "),n("input",{attrs:{type:"text",name:"name"}})])]),t._v(" "),n("p",[n("label",[t._v("Your Email: "),n("input",{attrs:{type:"email",name:"email"}})])]),t._v(" "),n("p",[n("label",[t._v("Message: "),n("textarea",{attrs:{name:"message"}})])]),t._v(" "),n("p",[n("button",{attrs:{type:"submit"}},[t._v("Send")])])])}],!1,null,"45aab640",null);e.default=component.exports}}]);