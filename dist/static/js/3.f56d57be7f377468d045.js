webpackJsonp([3],{583:function(e,t,n){n(619);var i=n(10)(n(599),n(631),"data-v-4fd8e104",null);e.exports=i.exports},596:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(210),o=n.n(i),r=n(132),d=n(211);n.n(d);t.default={name:"slider",data:function(){return{dots:[],currentPageIndex:0}},props:{loop:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!0},interval:{type:Number,default:4e3}},mounted:function(){var e=this;n.i(d.setTimeout)(function(){e._setSliderWidth(),e._initDots(),e._initSlider(),e.autoPlay&&e._play()},20),window.addEventListener("resize",function(){e.slider&&(e._setSliderWidth(!0),e.slider.refresh())})},methods:{_setSliderWidth:function(e){this.children=this.$refs.sliderGroup.children;for(var t=0,i=this.$refs.slider.clientWidth,o=0;o<this.children.length;o++){var d=this.children[o];n.i(r.c)(d,"slider-item"),d.style.width=i+"px",t+=i}this.loop&&!e&&(t+=2*i),this.$refs.sliderGroup.style.width=t+"px"},_initDots:function(){this.dots=new Array(this.children.length)},_initSlider:function(){var e=this;this.slider=new o.a(this.$refs.slider,{scrollX:!0,scrollY:!1,momentum:!1,snap:!0,snapLoop:this.loop,snapThreshold:.3,snapSpeend:400}),this.slider.on("scrollEnd",function(){var t=e.slider.getCurrentPage().pageX;e.loop&&(t-=1),e.currentPageIndex=t,e.autoPlay&&(n.i(d.clearTimeout)(e.timer),e._play())})},_play:function(){var e=this,t=this.currentPageIndex+1;this.loop&&(t+=1),this.timer=n.i(d.setTimeout)(function(){e.slider.goToPage(t,0,400)},this.interval)}},destroyed:function(){n.i(d.clearTimeout)(this.timer)}}},599:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(58),o=n.n(i),r=n(626),d=n.n(r),s=n(206),a=n.n(s),A=n(68),l=n.n(A),c=n(88),m=(n(133),n(50));t.default={mixins:[c.c],data:function(){return{recommends:[],discList:[]}},created:function(){this._getRecommend(),this._getDiscList()},methods:o()({_getRecommend:function(){var e=this;e.http.banner().then(function(t){if(0===t.code){var n=t.data.slider;e.recommends=[];for(var i=0;i<n.length;i++)e.recommends.push({url:n[i].linkUrl,img:n[i].picUrl})}})},_getDiscList:function(){var e=this;e.http.remdList().then(function(t){if(200===t.data.code)for(var n=t.data.result,i=0;i<n.length;i++)e.discList.push({id:n[i].id,name:n[i].name,img:n[i].picUrl,playCount:n[i].playCount>1e4?Math.round(n[i].playCount/1e4)+"万":Math.round(n[i].playCount)})}).catch(function(e){console.log(e)})},loadImage:function(){this.checkLoaded||(this.$refs.scroll.refresh(),this.checkLoaded=!0)},handlePlaylist:function(e){var t=e.length>0?"60px":"";this.$refs.recommend.style.bottom=t,this.$refs.scroll.refresh()},selectItem:function(e){this.$router.push({path:"/recommend/"+e.dissid}),this.setDisc(e)}},n.i(m.b)({setDisc:"SET_DISC"})),components:{Slider:d.a,Loading:a.a,Scroll:l.a}}},607:function(e,t,n){t=e.exports=n(579)(!0),t.push([e.i,".slider[data-v-383b0a36]{min-height:1px}.slider .slider-group[data-v-383b0a36]{position:relative;overflow:hidden;white-space:nowrap}.slider .slider-group .slider-item[data-v-383b0a36]{float:left;box-sizing:border-box;overflow:hidden;text-align:center}.slider .slider-group .slider-item a[data-v-383b0a36]{display:block;width:100%;overflow:hidden;text-decoration:none}.slider .slider-group .slider-item img[data-v-383b0a36]{display:block;width:100%}.slider .dots[data-v-383b0a36]{position:absolute;right:0;left:0;bottom:12px;text-align:center;font-size:0}.slider .dots .dot[data-v-383b0a36]{display:inline-block;margin:0 4px;width:8px;height:8px;border-radius:50%;background:hsla(0,0%,100%,.5)}.slider .dots .dot.active[data-v-383b0a36]{width:20px;border-radius:5px;background:hsla(0,0%,100%,.8)}","",{version:3,sources:["F:/work/webMusicApp/trunk/src/base/slider/slider.vue"],names:[],mappings:"AACA,yBACE,cAAgB,CACjB,AACD,uCACE,kBAAmB,AACnB,gBAAiB,AACjB,kBAAoB,CACrB,AACD,oDACE,WAAY,AACZ,sBAAuB,AACvB,gBAAiB,AACjB,iBAAmB,CACpB,AACD,sDACE,cAAe,AACf,WAAY,AACZ,gBAAiB,AACjB,oBAAsB,CACvB,AACD,wDACE,cAAe,AACf,UAAY,CACb,AACD,+BACE,kBAAmB,AACnB,QAAS,AACT,OAAQ,AACR,YAAa,AACb,kBAAmB,AACnB,WAAa,CACd,AACD,oCACE,qBAAsB,AACtB,aAAc,AACd,UAAW,AACX,WAAY,AACZ,kBAAmB,AACnB,6BAAkC,CACnC,AACD,2CACE,WAAY,AACZ,kBAAmB,AACnB,6BAAkC,CACnC",file:"slider.vue",sourcesContent:["\n.slider[data-v-383b0a36] {\n  min-height: 1px;\n}\n.slider .slider-group[data-v-383b0a36] {\n  position: relative;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.slider .slider-group .slider-item[data-v-383b0a36] {\n  float: left;\n  box-sizing: border-box;\n  overflow: hidden;\n  text-align: center;\n}\n.slider .slider-group .slider-item a[data-v-383b0a36] {\n  display: block;\n  width: 100%;\n  overflow: hidden;\n  text-decoration: none;\n}\n.slider .slider-group .slider-item img[data-v-383b0a36] {\n  display: block;\n  width: 100%;\n}\n.slider .dots[data-v-383b0a36] {\n  position: absolute;\n  right: 0;\n  left: 0;\n  bottom: 12px;\n  text-align: center;\n  font-size: 0;\n}\n.slider .dots .dot[data-v-383b0a36] {\n  display: inline-block;\n  margin: 0 4px;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: rgba(255,255,255,0.5);\n}\n.slider .dots .dot.active[data-v-383b0a36] {\n  width: 20px;\n  border-radius: 5px;\n  background: rgba(255,255,255,0.8);\n}"],sourceRoot:""}])},609:function(e,t,n){t=e.exports=n(579)(!0),t.push([e.i,'.recommend[data-v-4fd8e104]{position:fixed;width:100%;top:88px;bottom:0}.recommend .recommend-content[data-v-4fd8e104]{height:100%;overflow:hidden}.recommend .recommend-content .slider-wrapper[data-v-4fd8e104]{position:relative;width:100%;overflow:hidden}.recommend .recommend-content .recommend-list .list-title[data-v-4fd8e104]{height:65px;line-height:65px;text-align:center;font-size:14px;color:#ffcd32}.recommend .recommend-content .recommend-list .item[data-v-4fd8e104]{display:-ms-flexbox;display:flex;box-sizing:border-box;-ms-flex-align:center;align-items:center;padding:0 20px 20px}.recommend .recommend-content .recommend-list .item .icon[data-v-4fd8e104]{-ms-flex:0 0 60px;flex:0 0 60px;width:60px;padding-right:20px}.recommend .recommend-content .recommend-list .item .text[data-v-4fd8e104]{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex:1;flex:1;line-height:20px;overflow:hidden;font-size:14px}.recommend .recommend-content .recommend-list .item .text .name[data-v-4fd8e104]{margin-bottom:10px;color:#fff}.recommend .recommend-content .recommend-list .item .text .desc[data-v-4fd8e104]{color:hsla(0,0%,100%,.3)}.recommend .recommend-content .recommend-list .item .text .desc .fa[data-v-4fd8e104]:before{content:"\\F025"}.recommend .recommend-content .loading-container[data-v-4fd8e104]{position:absolute;width:100%;top:50%;transform:translateY(-50%)}',"",{version:3,sources:["F:/work/webMusicApp/trunk/src/components/recommend/recommend.vue"],names:[],mappings:"AACA,4BACE,eAAgB,AAChB,WAAY,AACZ,SAAU,AACV,QAAU,CACX,AACD,+CACE,YAAa,AACb,eAAiB,CAClB,AACD,+DACE,kBAAmB,AACnB,WAAY,AACZ,eAAiB,CAClB,AACD,2EACE,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,eAAgB,AAChB,aAAe,CAChB,AACD,qEACE,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACvB,sBAAuB,AACnB,mBAAoB,AACxB,mBAA0B,CAC3B,AACD,2EACE,kBAAmB,AACf,cAAe,AACnB,WAAY,AACZ,kBAAoB,CACrB,AACD,2EACE,oBAAqB,AACrB,aAAc,AACd,0BAA2B,AACvB,sBAAuB,AAC3B,qBAAsB,AAClB,uBAAwB,AAC5B,WAAY,AACR,OAAQ,AACZ,iBAAkB,AAClB,gBAAiB,AACjB,cAAgB,CACjB,AACD,iFACE,mBAAoB,AACpB,UAAY,CACb,AACD,iFACE,wBAA6B,CAC9B,AACD,4FACE,eAAiB,CAClB,AACD,kEACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,0BAA4B,CAC7B",file:"recommend.vue",sourcesContent:['\n.recommend[data-v-4fd8e104] {\n  position: fixed;\n  width: 100%;\n  top: 88px;\n  bottom: 0;\n}\n.recommend .recommend-content[data-v-4fd8e104] {\n  height: 100%;\n  overflow: hidden;\n}\n.recommend .recommend-content .slider-wrapper[data-v-4fd8e104] {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n.recommend .recommend-content .recommend-list .list-title[data-v-4fd8e104] {\n  height: 65px;\n  line-height: 65px;\n  text-align: center;\n  font-size: 14px;\n  color: #ffcd32;\n}\n.recommend .recommend-content .recommend-list .item[data-v-4fd8e104] {\n  display: -ms-flexbox;\n  display: flex;\n  box-sizing: border-box;\n  -ms-flex-align: center;\n      align-items: center;\n  padding: 0 20px 20px 20px;\n}\n.recommend .recommend-content .recommend-list .item .icon[data-v-4fd8e104] {\n  -ms-flex: 0 0 60px;\n      flex: 0 0 60px;\n  width: 60px;\n  padding-right: 20px;\n}\n.recommend .recommend-content .recommend-list .item .text[data-v-4fd8e104] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex: 1;\n      flex: 1;\n  line-height: 20px;\n  overflow: hidden;\n  font-size: 14px;\n}\n.recommend .recommend-content .recommend-list .item .text .name[data-v-4fd8e104] {\n  margin-bottom: 10px;\n  color: #fff;\n}\n.recommend .recommend-content .recommend-list .item .text .desc[data-v-4fd8e104] {\n  color: rgba(255,255,255,0.3);\n}\n.recommend .recommend-content .recommend-list .item .text .desc .fa[data-v-4fd8e104]:before {\n  content: "\\F025";\n}\n.recommend .recommend-content .loading-container[data-v-4fd8e104] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n}'],sourceRoot:""}])},617:function(e,t,n){var i=n(607);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(580)("f5cd6ace",i,!0)},619:function(e,t,n){var i=n(609);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(580)("a7dd2e60",i,!0)},626:function(e,t,n){n(617);var i=n(10)(n(596),n(629),"data-v-383b0a36",null);e.exports=i.exports},629:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"slider",staticClass:"slider"},[n("div",{ref:"sliderGroup",staticClass:"slider-group"},[e._t("default")],2),e._v(" "),n("div",{staticClass:"dots"},e._l(e.dots,function(t,i){return n("span",{staticClass:"dot",class:{active:e.currentPageIndex===i}})}),0)])},staticRenderFns:[]}},631:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"recommend",staticClass:"recommend"},[n("scroll",{ref:"scroll",staticClass:"recommend-content",attrs:{data:e.discList}},[n("div",[e.recommends.length?n("div",{staticClass:"slider-wrapper"},[n("slider",e._l(e.recommends,function(t){return n("div",[n("a",{attrs:{href:t.url}},[n("img",{staticClass:"needsclick",attrs:{src:t.img,alt:""},on:{load:e.loadImage}})])])}),0)],1):e._e(),e._v(" "),n("div",{staticClass:"recommend-list"},[n("h1",{staticClass:"list-title"},[e._v("热门歌单推荐")]),e._v(" "),e.discList.length?n("ul",e._l(e.discList,function(t){return n("li",{staticClass:"item",on:{click:function(n){return e.selectItem(t)}}},[n("div",{staticClass:"icon"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.img,expression:"item.img"}],attrs:{alt:"",width:"60",height:"60"}})]),e._v(" "),n("div",{staticClass:"text"},[n("h2",{staticClass:"name",domProps:{innerHTML:e._s(t.name)}}),e._v(" "),n("p",{staticClass:"desc"},[n("i",{staticClass:"fa"}),n("span",{staticStyle:{"margin-left":"5px"},domProps:{innerHTML:e._s(t.playCount)}})])])])}),0):e._e()])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.discList.length,expression:"!discList.length"}],staticClass:"loading-container"},[n("loading")],1)]),e._v(" "),n("router-view")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=3.f56d57be7f377468d045.js.map