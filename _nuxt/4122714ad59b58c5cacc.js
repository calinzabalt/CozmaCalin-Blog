(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{175:function(t,e,n){var content=n(183);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("432f8077",content,!0,{sourceMap:!1})},182:function(t,e,n){"use strict";var o=n(175);n.n(o).a},183:function(t,e,n){(t.exports=n(29)(!1)).push([t.i,"#about-page[data-v-50cb3680]{width:80%;max-width:800px;margin:auto}#about-page p[data-v-50cb3680]{white-space:pre-line}",""])},193:function(t,e,n){"use strict";n.r(e);var o={asyncData:function(t){return t.app.$storyapi.get("cdn/stories/about",{version:t.isDev?"draft":"published"}).then(function(t){return console.log(t.data),{blok:t.data.story.content,title:t.data.story.content.title,content:t.data.story.content.content}})},mounted:function(){this.$storybridge.on("change",function(){location.reload(!0)})}},c=(n(182),n(13)),component=Object(c.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{directives:[{name:"editable",rawName:"v-editable",value:t.blok,expression:"blok"}],attrs:{id:"about-page"}},[n("h1",[t._v(t._s(t.title))]),t._v(" "),n("p",[t._v(t._s(t.content))])])},[],!1,null,"50cb3680",null);e.default=component.exports}}]);