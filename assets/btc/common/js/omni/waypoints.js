/*
jQuery Waypoints - v2.0.4
Copyright (c) 2011-2014 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/

(function(){var b=[].indexOf||function(c){for(var d=0,e=this.length;d<e;d++){if(d in this&&this[d]===c){return d}}return -1},a=[].slice;(function(d,c){if(typeof define==="function"&&define.amd){return define("waypoints",["jquery"],function(e){return c(e,d)})}else{return c(d.jQuery,d)}})(this,function(s,h){var m,f,n,t,o,p,c,l,g,e,d,j,i,q,k,r;m=s(h);l=b.call(h,"ontouchstart")>=0;t={horizontal:{},vertical:{}};o=1;c={};p="waypoints-context-id";d="resize.waypoints";j="scroll.waypoints";i=1;q="waypoints-waypoint-ids";k="waypoint";r="waypoints";f=(function(){function u(v){var w=this;this.$element=v;this.element=v[0];this.didResize=false;this.didScroll=false;this.id="context"+o++;this.oldScroll={x:v.scrollLeft(),y:v.scrollTop()};this.waypoints={horizontal:{},vertical:{}};this.element[p]=this.id;c[this.id]=this;v.bind(j,function(){var x;if(!(w.didScroll||l)){w.didScroll=true;x=function(){w.doScroll();return w.didScroll=false};return h.setTimeout(x,s[r].settings.scrollThrottle)}});v.bind(d,function(){var x;if(!w.didResize){w.didResize=true;x=function(){s[r]("refresh");return w.didResize=false};return h.setTimeout(x,s[r].settings.resizeThrottle)}})}u.prototype.doScroll=function(){var w,v=this;w={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(l&&(!w.vertical.oldScroll||!w.vertical.newScroll)){s[r]("refresh")}s.each(w,function(x,z){var A,y,B;B=[];y=z.newScroll>z.oldScroll;A=y?z.forward:z.backward;s.each(v.waypoints[x],function(E,C){var F,D;if((z.oldScroll<(F=C.offset)&&F<=z.newScroll)){return B.push(C)}else{if((z.newScroll<(D=C.offset)&&D<=z.oldScroll)){return B.push(C)}}});B.sort(function(D,C){return D.offset-C.offset});if(!y){B.reverse()}return s.each(B,function(C,D){if(D.options.continuous||C===B.length-1){return D.trigger([A])}})});return this.oldScroll={x:w.horizontal.newScroll,y:w.vertical.newScroll}};u.prototype.refresh=function(){var v,y,w,x=this;w=s.isWindow(this.element);y=this.$element.offset();this.doScroll();v={horizontal:{contextOffset:w?0:y.left,contextScroll:w?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:w?0:y.top,contextScroll:w?0:this.oldScroll.y,contextDimension:w?s[r]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return s.each(v,function(A,z){return s.each(x.waypoints[A],function(G,B){var C,D,E,F,H;C=B.options.offset;E=B.offset;D=s.isWindow(B.element)?0:B.$element.offset()[z.offsetProp];if(s.isFunction(C)){C=C.apply(B.element)}else{if(typeof C==="string"){C=parseFloat(C);if(B.options.offset.indexOf("%")>-1){C=Math.ceil(z.contextDimension*C/100)}}}B.offset=D-z.contextOffset+z.contextScroll-C;if((B.options.onlyOnScroll&&(E!=null))||!B.enabled){return}if(E!==null&&(E<(F=z.oldScroll)&&F<=B.offset)){return B.trigger([z.backward])}else{if(E!==null&&(E>(H=z.oldScroll)&&H>=B.offset)){return B.trigger([z.forward])}else{if(E===null&&z.oldScroll>=B.offset){return B.trigger([z.forward])}}}})})};u.prototype.checkEmpty=function(){if(s.isEmptyObject(this.waypoints.horizontal)&&s.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([d,j].join(" "));return delete c[this.id]}};return u})();n=(function(){function u(x,w,y){var z,v;y=s.extend({},s.fn[k].defaults,y);if(y.offset==="bottom-in-view"){y.offset=function(){var A;A=s[r]("viewportHeight");if(!s.isWindow(w.element)){A=w.$element.height()}return A-s(this).outerHeight()}}this.$element=x;this.element=x[0];this.axis=y.horizontal?"horizontal":"vertical";this.callback=y.handler;this.context=w;this.enabled=y.enabled;this.id="waypoints"+i++;this.offset=null;this.options=y;w.waypoints[this.axis][this.id]=this;t[this.axis][this.id]=this;z=(v=this.element[q])!=null?v:[];z.push(this.id);this.element[q]=z}u.prototype.trigger=function(v){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,v)}if(this.options.triggerOnce){return this.destroy()}};u.prototype.disable=function(){return this.enabled=false};u.prototype.enable=function(){this.context.refresh();return this.enabled=true};u.prototype.destroy=function(){delete t[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};u.getWaypointsByElement=function(v){var w,x;x=v[q];if(!x){return[]}w=s.extend({},t.horizontal,t.vertical);return s.map(x,function(y){return w[y]})};return u})();e={init:function(u,v){var w;if(v==null){v={}}if((w=v.handler)==null){v.handler=u}this.each(function(){var x,y,A,z;x=s(this);A=(z=v.context)!=null?z:s.fn[k].defaults.context;if(!s.isWindow(A)){A=x.closest(A)}A=s(A);y=c[A[0][p]];if(!y){y=new f(A)}return new n(x,y,v)});s[r]("refresh");return this},disable:function(){return e._invoke.call(this,"disable")},enable:function(){return e._invoke.call(this,"enable")},destroy:function(){return e._invoke.call(this,"destroy")},prev:function(v,u){return e._traverse.call(this,v,u,function(y,w,x){if(w>0){return y.push(x[w-1])}})},next:function(v,u){return e._traverse.call(this,v,u,function(y,w,x){if(w<x.length-1){return y.push(x[w+1])}})},_traverse:function(v,x,u){var y,w;if(v==null){v="vertical"}if(x==null){x=h}w=g.aggregate(x);y=[];this.each(function(){var z;z=s.inArray(this,w[v]);return u(y,z,w[v])});return this.pushStack(y)},_invoke:function(u){this.each(function(){var v;v=n.getWaypointsByElement(this);return s.each(v,function(w,x){x[u]();return true})});return this}};s.fn[k]=function(){var v,u;u=arguments[0],v=2<=arguments.length?a.call(arguments,1):[];if(e[u]){return e[u].apply(this,v)}else{if(s.isFunction(u)){return e.init.apply(this,arguments)}else{if(s.isPlainObject(u)){return e.init.apply(this,[null,u])}else{if(!u){return s.error("jQuery Waypoints needs a callback function or handler option.")}else{return s.error("The "+u+" method does not exist in jQuery Waypoints.")}}}}};s.fn[k].defaults={context:h,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};g={refresh:function(){return s.each(c,function(u,v){return v.refresh()})},viewportHeight:function(){var u;return(u=h.innerHeight)!=null?u:m.height()},aggregate:function(u){var w,v,x;w=t;if(u){w=(x=c[s(u)[0][p]])!=null?x.waypoints:void 0}if(!w){return[]}v={horizontal:[],vertical:[]};s.each(v,function(y,z){s.each(w[y],function(B,A){return z.push(A)});z.sort(function(B,A){return B.offset-A.offset});v[y]=s.map(z,function(A){return A.element});return v[y]=s.unique(v[y])});return v},above:function(u){if(u==null){u=h}return g._filter(u,"vertical",function(v,w){return w.offset<=v.oldScroll.y})},below:function(u){if(u==null){u=h}return g._filter(u,"vertical",function(v,w){return w.offset>v.oldScroll.y})},left:function(u){if(u==null){u=h}return g._filter(u,"horizontal",function(v,w){return w.offset<=v.oldScroll.x})},right:function(u){if(u==null){u=h}return g._filter(u,"horizontal",function(v,w){return w.offset>v.oldScroll.x})},enable:function(){return g._invoke("enable")},disable:function(){return g._invoke("disable")},destroy:function(){return g._invoke("destroy")},extendFn:function(v,u){return e[v]=u},_invoke:function(u){var v;v=s.extend({},t.vertical,t.horizontal);return s.each(v,function(x,w){w[u]();return true})},_filter:function(y,x,u){var w,v;w=c[s(y)[0][p]];if(!w){return[]}v=[];s.each(w.waypoints[x],function(z,A){if(u(w,A)){return v.push(A)}});v.sort(function(A,z){return A.offset-z.offset});return s.map(v,function(z){return z.element})}};s[r]=function(){var v,u;u=arguments[0],v=2<=arguments.length?a.call(arguments,1):[];if(g[u]){return g[u].apply(null,v)}else{return g.aggregate.call(null,u)}};s[r].settings={resizeThrottle:100,scrollThrottle:30};return m.load(function(){return s[r]("refresh")})})}).call(this);