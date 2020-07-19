goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_33096 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_33096(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_33100 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_33100(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32061 = coll;
var G__32062 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32061,G__32062) : shadow.dom.lazy_native_coll_seq.call(null,G__32061,G__32062));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__32100 = arguments.length;
switch (G__32100) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__32104 = arguments.length;
switch (G__32104) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__32110 = arguments.length;
switch (G__32110) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__32114 = arguments.length;
switch (G__32114) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__32140 = arguments.length;
switch (G__32140) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32168 = arguments.length;
switch (G__32168) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e32183){if((e32183 instanceof Object)){
var e = e32183;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32183;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__32201 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32202 = null;
var count__32203 = (0);
var i__32204 = (0);
while(true){
if((i__32204 < count__32203)){
var el = chunk__32202.cljs$core$IIndexed$_nth$arity$2(null,i__32204);
var handler_33136__$1 = ((function (seq__32201,chunk__32202,count__32203,i__32204,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32201,chunk__32202,count__32203,i__32204,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33136__$1);


var G__33139 = seq__32201;
var G__33140 = chunk__32202;
var G__33141 = count__32203;
var G__33142 = (i__32204 + (1));
seq__32201 = G__33139;
chunk__32202 = G__33140;
count__32203 = G__33141;
i__32204 = G__33142;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32201);
if(temp__5735__auto__){
var seq__32201__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32201__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32201__$1);
var G__33143 = cljs.core.chunk_rest(seq__32201__$1);
var G__33144 = c__4556__auto__;
var G__33145 = cljs.core.count(c__4556__auto__);
var G__33146 = (0);
seq__32201 = G__33143;
chunk__32202 = G__33144;
count__32203 = G__33145;
i__32204 = G__33146;
continue;
} else {
var el = cljs.core.first(seq__32201__$1);
var handler_33147__$1 = ((function (seq__32201,chunk__32202,count__32203,i__32204,el,seq__32201__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32201,chunk__32202,count__32203,i__32204,el,seq__32201__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33147__$1);


var G__33149 = cljs.core.next(seq__32201__$1);
var G__33150 = null;
var G__33151 = (0);
var G__33152 = (0);
seq__32201 = G__33149;
chunk__32202 = G__33150;
count__32203 = G__33151;
i__32204 = G__33152;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__32231 = arguments.length;
switch (G__32231) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__32251 = cljs.core.seq(events);
var chunk__32252 = null;
var count__32253 = (0);
var i__32254 = (0);
while(true){
if((i__32254 < count__32253)){
var vec__32268 = chunk__32252.cljs$core$IIndexed$_nth$arity$2(null,i__32254);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32268,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32268,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33162 = seq__32251;
var G__33163 = chunk__32252;
var G__33164 = count__32253;
var G__33165 = (i__32254 + (1));
seq__32251 = G__33162;
chunk__32252 = G__33163;
count__32253 = G__33164;
i__32254 = G__33165;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32251);
if(temp__5735__auto__){
var seq__32251__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32251__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32251__$1);
var G__33166 = cljs.core.chunk_rest(seq__32251__$1);
var G__33167 = c__4556__auto__;
var G__33168 = cljs.core.count(c__4556__auto__);
var G__33169 = (0);
seq__32251 = G__33166;
chunk__32252 = G__33167;
count__32253 = G__33168;
i__32254 = G__33169;
continue;
} else {
var vec__32273 = cljs.core.first(seq__32251__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32273,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32273,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33173 = cljs.core.next(seq__32251__$1);
var G__33174 = null;
var G__33175 = (0);
var G__33176 = (0);
seq__32251 = G__33173;
chunk__32252 = G__33174;
count__32253 = G__33175;
i__32254 = G__33176;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__32279 = cljs.core.seq(styles);
var chunk__32280 = null;
var count__32281 = (0);
var i__32282 = (0);
while(true){
if((i__32282 < count__32281)){
var vec__32293 = chunk__32280.cljs$core$IIndexed$_nth$arity$2(null,i__32282);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32293,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32293,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33180 = seq__32279;
var G__33181 = chunk__32280;
var G__33182 = count__32281;
var G__33183 = (i__32282 + (1));
seq__32279 = G__33180;
chunk__32280 = G__33181;
count__32281 = G__33182;
i__32282 = G__33183;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32279);
if(temp__5735__auto__){
var seq__32279__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32279__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32279__$1);
var G__33186 = cljs.core.chunk_rest(seq__32279__$1);
var G__33187 = c__4556__auto__;
var G__33188 = cljs.core.count(c__4556__auto__);
var G__33189 = (0);
seq__32279 = G__33186;
chunk__32280 = G__33187;
count__32281 = G__33188;
i__32282 = G__33189;
continue;
} else {
var vec__32316 = cljs.core.first(seq__32279__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32316,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32316,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33192 = cljs.core.next(seq__32279__$1);
var G__33193 = null;
var G__33194 = (0);
var G__33195 = (0);
seq__32279 = G__33192;
chunk__32280 = G__33193;
count__32281 = G__33194;
i__32282 = G__33195;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__32322_33197 = key;
var G__32322_33198__$1 = (((G__32322_33197 instanceof cljs.core.Keyword))?G__32322_33197.fqn:null);
switch (G__32322_33198__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_33207 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_33207,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_33207,"aria-");
}
})())){
el.setAttribute(ks_33207,value);
} else {
(el[ks_33207] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32341){
var map__32342 = p__32341;
var map__32342__$1 = (((((!((map__32342 == null))))?(((((map__32342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32342):map__32342);
var props = map__32342__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32342__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32344 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32344,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32344,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32344,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32352 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32352,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32352;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32357 = arguments.length;
switch (G__32357) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32372){
var vec__32374 = p__32372;
var seq__32375 = cljs.core.seq(vec__32374);
var first__32376 = cljs.core.first(seq__32375);
var seq__32375__$1 = cljs.core.next(seq__32375);
var nn = first__32376;
var first__32376__$1 = cljs.core.first(seq__32375__$1);
var seq__32375__$2 = cljs.core.next(seq__32375__$1);
var np = first__32376__$1;
var nc = seq__32375__$2;
var node = vec__32374;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32380 = nn;
var G__32381 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32380,G__32381) : create_fn.call(null,G__32380,G__32381));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32382 = nn;
var G__32383 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32382,G__32383) : create_fn.call(null,G__32382,G__32383));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32385 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32385,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32385,(1),null);
var seq__32389_33232 = cljs.core.seq(node_children);
var chunk__32390_33233 = null;
var count__32391_33234 = (0);
var i__32392_33235 = (0);
while(true){
if((i__32392_33235 < count__32391_33234)){
var child_struct_33236 = chunk__32390_33233.cljs$core$IIndexed$_nth$arity$2(null,i__32392_33235);
var children_33238 = shadow.dom.dom_node(child_struct_33236);
if(cljs.core.seq_QMARK_(children_33238)){
var seq__32429_33239 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33238));
var chunk__32431_33240 = null;
var count__32432_33241 = (0);
var i__32433_33242 = (0);
while(true){
if((i__32433_33242 < count__32432_33241)){
var child_33245 = chunk__32431_33240.cljs$core$IIndexed$_nth$arity$2(null,i__32433_33242);
if(cljs.core.truth_(child_33245)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33245);


var G__33246 = seq__32429_33239;
var G__33247 = chunk__32431_33240;
var G__33248 = count__32432_33241;
var G__33249 = (i__32433_33242 + (1));
seq__32429_33239 = G__33246;
chunk__32431_33240 = G__33247;
count__32432_33241 = G__33248;
i__32433_33242 = G__33249;
continue;
} else {
var G__33251 = seq__32429_33239;
var G__33252 = chunk__32431_33240;
var G__33253 = count__32432_33241;
var G__33254 = (i__32433_33242 + (1));
seq__32429_33239 = G__33251;
chunk__32431_33240 = G__33252;
count__32432_33241 = G__33253;
i__32433_33242 = G__33254;
continue;
}
} else {
var temp__5735__auto___33255 = cljs.core.seq(seq__32429_33239);
if(temp__5735__auto___33255){
var seq__32429_33257__$1 = temp__5735__auto___33255;
if(cljs.core.chunked_seq_QMARK_(seq__32429_33257__$1)){
var c__4556__auto___33258 = cljs.core.chunk_first(seq__32429_33257__$1);
var G__33259 = cljs.core.chunk_rest(seq__32429_33257__$1);
var G__33260 = c__4556__auto___33258;
var G__33261 = cljs.core.count(c__4556__auto___33258);
var G__33262 = (0);
seq__32429_33239 = G__33259;
chunk__32431_33240 = G__33260;
count__32432_33241 = G__33261;
i__32433_33242 = G__33262;
continue;
} else {
var child_33263 = cljs.core.first(seq__32429_33257__$1);
if(cljs.core.truth_(child_33263)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33263);


var G__33264 = cljs.core.next(seq__32429_33257__$1);
var G__33265 = null;
var G__33266 = (0);
var G__33267 = (0);
seq__32429_33239 = G__33264;
chunk__32431_33240 = G__33265;
count__32432_33241 = G__33266;
i__32433_33242 = G__33267;
continue;
} else {
var G__33268 = cljs.core.next(seq__32429_33257__$1);
var G__33269 = null;
var G__33270 = (0);
var G__33271 = (0);
seq__32429_33239 = G__33268;
chunk__32431_33240 = G__33269;
count__32432_33241 = G__33270;
i__32433_33242 = G__33271;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33238);
}


var G__33272 = seq__32389_33232;
var G__33273 = chunk__32390_33233;
var G__33274 = count__32391_33234;
var G__33275 = (i__32392_33235 + (1));
seq__32389_33232 = G__33272;
chunk__32390_33233 = G__33273;
count__32391_33234 = G__33274;
i__32392_33235 = G__33275;
continue;
} else {
var temp__5735__auto___33277 = cljs.core.seq(seq__32389_33232);
if(temp__5735__auto___33277){
var seq__32389_33278__$1 = temp__5735__auto___33277;
if(cljs.core.chunked_seq_QMARK_(seq__32389_33278__$1)){
var c__4556__auto___33279 = cljs.core.chunk_first(seq__32389_33278__$1);
var G__33280 = cljs.core.chunk_rest(seq__32389_33278__$1);
var G__33281 = c__4556__auto___33279;
var G__33282 = cljs.core.count(c__4556__auto___33279);
var G__33283 = (0);
seq__32389_33232 = G__33280;
chunk__32390_33233 = G__33281;
count__32391_33234 = G__33282;
i__32392_33235 = G__33283;
continue;
} else {
var child_struct_33286 = cljs.core.first(seq__32389_33278__$1);
var children_33288 = shadow.dom.dom_node(child_struct_33286);
if(cljs.core.seq_QMARK_(children_33288)){
var seq__32449_33289 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33288));
var chunk__32451_33290 = null;
var count__32452_33291 = (0);
var i__32453_33292 = (0);
while(true){
if((i__32453_33292 < count__32452_33291)){
var child_33293 = chunk__32451_33290.cljs$core$IIndexed$_nth$arity$2(null,i__32453_33292);
if(cljs.core.truth_(child_33293)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33293);


var G__33294 = seq__32449_33289;
var G__33295 = chunk__32451_33290;
var G__33296 = count__32452_33291;
var G__33297 = (i__32453_33292 + (1));
seq__32449_33289 = G__33294;
chunk__32451_33290 = G__33295;
count__32452_33291 = G__33296;
i__32453_33292 = G__33297;
continue;
} else {
var G__33299 = seq__32449_33289;
var G__33300 = chunk__32451_33290;
var G__33301 = count__32452_33291;
var G__33302 = (i__32453_33292 + (1));
seq__32449_33289 = G__33299;
chunk__32451_33290 = G__33300;
count__32452_33291 = G__33301;
i__32453_33292 = G__33302;
continue;
}
} else {
var temp__5735__auto___33303__$1 = cljs.core.seq(seq__32449_33289);
if(temp__5735__auto___33303__$1){
var seq__32449_33304__$1 = temp__5735__auto___33303__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32449_33304__$1)){
var c__4556__auto___33305 = cljs.core.chunk_first(seq__32449_33304__$1);
var G__33306 = cljs.core.chunk_rest(seq__32449_33304__$1);
var G__33307 = c__4556__auto___33305;
var G__33308 = cljs.core.count(c__4556__auto___33305);
var G__33309 = (0);
seq__32449_33289 = G__33306;
chunk__32451_33290 = G__33307;
count__32452_33291 = G__33308;
i__32453_33292 = G__33309;
continue;
} else {
var child_33310 = cljs.core.first(seq__32449_33304__$1);
if(cljs.core.truth_(child_33310)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33310);


var G__33311 = cljs.core.next(seq__32449_33304__$1);
var G__33312 = null;
var G__33313 = (0);
var G__33314 = (0);
seq__32449_33289 = G__33311;
chunk__32451_33290 = G__33312;
count__32452_33291 = G__33313;
i__32453_33292 = G__33314;
continue;
} else {
var G__33315 = cljs.core.next(seq__32449_33304__$1);
var G__33316 = null;
var G__33317 = (0);
var G__33318 = (0);
seq__32449_33289 = G__33315;
chunk__32451_33290 = G__33316;
count__32452_33291 = G__33317;
i__32453_33292 = G__33318;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33288);
}


var G__33320 = cljs.core.next(seq__32389_33278__$1);
var G__33321 = null;
var G__33322 = (0);
var G__33323 = (0);
seq__32389_33232 = G__33320;
chunk__32390_33233 = G__33321;
count__32391_33234 = G__33322;
i__32392_33235 = G__33323;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__32485 = cljs.core.seq(node);
var chunk__32486 = null;
var count__32487 = (0);
var i__32488 = (0);
while(true){
if((i__32488 < count__32487)){
var n = chunk__32486.cljs$core$IIndexed$_nth$arity$2(null,i__32488);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33333 = seq__32485;
var G__33334 = chunk__32486;
var G__33335 = count__32487;
var G__33336 = (i__32488 + (1));
seq__32485 = G__33333;
chunk__32486 = G__33334;
count__32487 = G__33335;
i__32488 = G__33336;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32485);
if(temp__5735__auto__){
var seq__32485__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32485__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32485__$1);
var G__33339 = cljs.core.chunk_rest(seq__32485__$1);
var G__33340 = c__4556__auto__;
var G__33341 = cljs.core.count(c__4556__auto__);
var G__33342 = (0);
seq__32485 = G__33339;
chunk__32486 = G__33340;
count__32487 = G__33341;
i__32488 = G__33342;
continue;
} else {
var n = cljs.core.first(seq__32485__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33345 = cljs.core.next(seq__32485__$1);
var G__33346 = null;
var G__33347 = (0);
var G__33348 = (0);
seq__32485 = G__33345;
chunk__32486 = G__33346;
count__32487 = G__33347;
i__32488 = G__33348;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__32510 = arguments.length;
switch (G__32510) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__32516 = arguments.length;
switch (G__32516) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__32528 = arguments.length;
switch (G__32528) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33369 = arguments.length;
var i__4737__auto___33370 = (0);
while(true){
if((i__4737__auto___33370 < len__4736__auto___33369)){
args__4742__auto__.push((arguments[i__4737__auto___33370]));

var G__33371 = (i__4737__auto___33370 + (1));
i__4737__auto___33370 = G__33371;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__32551_33372 = cljs.core.seq(nodes);
var chunk__32552_33373 = null;
var count__32553_33374 = (0);
var i__32554_33375 = (0);
while(true){
if((i__32554_33375 < count__32553_33374)){
var node_33376 = chunk__32552_33373.cljs$core$IIndexed$_nth$arity$2(null,i__32554_33375);
fragment.appendChild(shadow.dom._to_dom(node_33376));


var G__33377 = seq__32551_33372;
var G__33378 = chunk__32552_33373;
var G__33379 = count__32553_33374;
var G__33380 = (i__32554_33375 + (1));
seq__32551_33372 = G__33377;
chunk__32552_33373 = G__33378;
count__32553_33374 = G__33379;
i__32554_33375 = G__33380;
continue;
} else {
var temp__5735__auto___33381 = cljs.core.seq(seq__32551_33372);
if(temp__5735__auto___33381){
var seq__32551_33382__$1 = temp__5735__auto___33381;
if(cljs.core.chunked_seq_QMARK_(seq__32551_33382__$1)){
var c__4556__auto___33383 = cljs.core.chunk_first(seq__32551_33382__$1);
var G__33384 = cljs.core.chunk_rest(seq__32551_33382__$1);
var G__33385 = c__4556__auto___33383;
var G__33386 = cljs.core.count(c__4556__auto___33383);
var G__33387 = (0);
seq__32551_33372 = G__33384;
chunk__32552_33373 = G__33385;
count__32553_33374 = G__33386;
i__32554_33375 = G__33387;
continue;
} else {
var node_33391 = cljs.core.first(seq__32551_33382__$1);
fragment.appendChild(shadow.dom._to_dom(node_33391));


var G__33392 = cljs.core.next(seq__32551_33382__$1);
var G__33393 = null;
var G__33394 = (0);
var G__33395 = (0);
seq__32551_33372 = G__33392;
chunk__32552_33373 = G__33393;
count__32553_33374 = G__33394;
i__32554_33375 = G__33395;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq32547){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32547));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__32578_33396 = cljs.core.seq(scripts);
var chunk__32580_33397 = null;
var count__32581_33398 = (0);
var i__32582_33399 = (0);
while(true){
if((i__32582_33399 < count__32581_33398)){
var vec__32609_33400 = chunk__32580_33397.cljs$core$IIndexed$_nth$arity$2(null,i__32582_33399);
var script_tag_33401 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32609_33400,(0),null);
var script_body_33402 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32609_33400,(1),null);
eval(script_body_33402);


var G__33407 = seq__32578_33396;
var G__33408 = chunk__32580_33397;
var G__33409 = count__32581_33398;
var G__33410 = (i__32582_33399 + (1));
seq__32578_33396 = G__33407;
chunk__32580_33397 = G__33408;
count__32581_33398 = G__33409;
i__32582_33399 = G__33410;
continue;
} else {
var temp__5735__auto___33411 = cljs.core.seq(seq__32578_33396);
if(temp__5735__auto___33411){
var seq__32578_33414__$1 = temp__5735__auto___33411;
if(cljs.core.chunked_seq_QMARK_(seq__32578_33414__$1)){
var c__4556__auto___33416 = cljs.core.chunk_first(seq__32578_33414__$1);
var G__33417 = cljs.core.chunk_rest(seq__32578_33414__$1);
var G__33418 = c__4556__auto___33416;
var G__33419 = cljs.core.count(c__4556__auto___33416);
var G__33420 = (0);
seq__32578_33396 = G__33417;
chunk__32580_33397 = G__33418;
count__32581_33398 = G__33419;
i__32582_33399 = G__33420;
continue;
} else {
var vec__32614_33421 = cljs.core.first(seq__32578_33414__$1);
var script_tag_33422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32614_33421,(0),null);
var script_body_33423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32614_33421,(1),null);
eval(script_body_33423);


var G__33426 = cljs.core.next(seq__32578_33414__$1);
var G__33427 = null;
var G__33428 = (0);
var G__33429 = (0);
seq__32578_33396 = G__33426;
chunk__32580_33397 = G__33427;
count__32581_33398 = G__33428;
i__32582_33399 = G__33429;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__32620){
var vec__32626 = p__32620;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32626,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32626,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__32632 = arguments.length;
switch (G__32632) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__32653 = cljs.core.seq(style_keys);
var chunk__32654 = null;
var count__32655 = (0);
var i__32656 = (0);
while(true){
if((i__32656 < count__32655)){
var it = chunk__32654.cljs$core$IIndexed$_nth$arity$2(null,i__32656);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33447 = seq__32653;
var G__33448 = chunk__32654;
var G__33449 = count__32655;
var G__33450 = (i__32656 + (1));
seq__32653 = G__33447;
chunk__32654 = G__33448;
count__32655 = G__33449;
i__32656 = G__33450;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32653);
if(temp__5735__auto__){
var seq__32653__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32653__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32653__$1);
var G__33451 = cljs.core.chunk_rest(seq__32653__$1);
var G__33452 = c__4556__auto__;
var G__33453 = cljs.core.count(c__4556__auto__);
var G__33454 = (0);
seq__32653 = G__33451;
chunk__32654 = G__33452;
count__32655 = G__33453;
i__32656 = G__33454;
continue;
} else {
var it = cljs.core.first(seq__32653__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33455 = cljs.core.next(seq__32653__$1);
var G__33456 = null;
var G__33457 = (0);
var G__33458 = (0);
seq__32653 = G__33455;
chunk__32654 = G__33456;
count__32655 = G__33457;
i__32656 = G__33458;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k32667,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__32677 = k32667;
var G__32677__$1 = (((G__32677 instanceof cljs.core.Keyword))?G__32677.fqn:null);
switch (G__32677__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32667,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__32679){
var vec__32680 = p__32679;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32680,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32680,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32666){
var self__ = this;
var G__32666__$1 = this;
return (new cljs.core.RecordIter((0),G__32666__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32668,other32669){
var self__ = this;
var this32668__$1 = this;
return (((!((other32669 == null)))) && ((this32668__$1.constructor === other32669.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32668__$1.x,other32669.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32668__$1.y,other32669.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32668__$1.__extmap,other32669.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__32666){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__32717 = cljs.core.keyword_identical_QMARK_;
var expr__32718 = k__4388__auto__;
if(cljs.core.truth_((pred__32717.cljs$core$IFn$_invoke$arity$2 ? pred__32717.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__32718) : pred__32717.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__32718)))){
return (new shadow.dom.Coordinate(G__32666,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32717.cljs$core$IFn$_invoke$arity$2 ? pred__32717.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__32718) : pred__32717.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__32718)))){
return (new shadow.dom.Coordinate(self__.x,G__32666,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__32666),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__32666){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__32666,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__32670){
var extmap__4419__auto__ = (function (){var G__32758 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32670,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__32670)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32758);
} else {
return G__32758;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__32670),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__32670),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k32773,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__32784 = k32773;
var G__32784__$1 = (((G__32784 instanceof cljs.core.Keyword))?G__32784.fqn:null);
switch (G__32784__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32773,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__32789){
var vec__32790 = p__32789;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32790,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32790,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32772){
var self__ = this;
var G__32772__$1 = this;
return (new cljs.core.RecordIter((0),G__32772__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32774,other32775){
var self__ = this;
var this32774__$1 = this;
return (((!((other32775 == null)))) && ((this32774__$1.constructor === other32775.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32774__$1.w,other32775.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32774__$1.h,other32775.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32774__$1.__extmap,other32775.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__32772){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__32813 = cljs.core.keyword_identical_QMARK_;
var expr__32814 = k__4388__auto__;
if(cljs.core.truth_((pred__32813.cljs$core$IFn$_invoke$arity$2 ? pred__32813.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__32814) : pred__32813.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__32814)))){
return (new shadow.dom.Size(G__32772,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32813.cljs$core$IFn$_invoke$arity$2 ? pred__32813.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__32814) : pred__32813.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__32814)))){
return (new shadow.dom.Size(self__.w,G__32772,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__32772),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__32772){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__32772,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__32776){
var extmap__4419__auto__ = (function (){var G__32833 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32776,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__32776)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32833);
} else {
return G__32833;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__32776),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__32776),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__33607 = (i + (1));
var G__33608 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33607;
ret = G__33608;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32862){
var vec__32866 = p__32862;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32866,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32866,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__32874 = arguments.length;
switch (G__32874) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__33628 = ps;
var G__33629 = (i + (1));
el__$1 = G__33628;
i = G__33629;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__32899 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32899,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32899,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32899,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__32908_33642 = cljs.core.seq(props);
var chunk__32909_33643 = null;
var count__32910_33644 = (0);
var i__32911_33645 = (0);
while(true){
if((i__32911_33645 < count__32910_33644)){
var vec__32932_33649 = chunk__32909_33643.cljs$core$IIndexed$_nth$arity$2(null,i__32911_33645);
var k_33650 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32932_33649,(0),null);
var v_33651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32932_33649,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_33650);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33650),v_33651);


var G__33655 = seq__32908_33642;
var G__33656 = chunk__32909_33643;
var G__33657 = count__32910_33644;
var G__33658 = (i__32911_33645 + (1));
seq__32908_33642 = G__33655;
chunk__32909_33643 = G__33656;
count__32910_33644 = G__33657;
i__32911_33645 = G__33658;
continue;
} else {
var temp__5735__auto___33662 = cljs.core.seq(seq__32908_33642);
if(temp__5735__auto___33662){
var seq__32908_33664__$1 = temp__5735__auto___33662;
if(cljs.core.chunked_seq_QMARK_(seq__32908_33664__$1)){
var c__4556__auto___33667 = cljs.core.chunk_first(seq__32908_33664__$1);
var G__33668 = cljs.core.chunk_rest(seq__32908_33664__$1);
var G__33669 = c__4556__auto___33667;
var G__33670 = cljs.core.count(c__4556__auto___33667);
var G__33671 = (0);
seq__32908_33642 = G__33668;
chunk__32909_33643 = G__33669;
count__32910_33644 = G__33670;
i__32911_33645 = G__33671;
continue;
} else {
var vec__32939_33674 = cljs.core.first(seq__32908_33664__$1);
var k_33675 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32939_33674,(0),null);
var v_33676 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32939_33674,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_33675);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33675),v_33676);


var G__33682 = cljs.core.next(seq__32908_33664__$1);
var G__33683 = null;
var G__33684 = (0);
var G__33685 = (0);
seq__32908_33642 = G__33682;
chunk__32909_33643 = G__33683;
count__32910_33644 = G__33684;
i__32911_33645 = G__33685;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__32948 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32948,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32948,(1),null);
var seq__32953_33694 = cljs.core.seq(node_children);
var chunk__32955_33695 = null;
var count__32956_33696 = (0);
var i__32957_33697 = (0);
while(true){
if((i__32957_33697 < count__32956_33696)){
var child_struct_33699 = chunk__32955_33695.cljs$core$IIndexed$_nth$arity$2(null,i__32957_33697);
if((!((child_struct_33699 == null)))){
if(typeof child_struct_33699 === 'string'){
var text_33700 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33700),child_struct_33699].join(''));
} else {
var children_33701 = shadow.dom.svg_node(child_struct_33699);
if(cljs.core.seq_QMARK_(children_33701)){
var seq__33014_33702 = cljs.core.seq(children_33701);
var chunk__33016_33703 = null;
var count__33017_33704 = (0);
var i__33018_33705 = (0);
while(true){
if((i__33018_33705 < count__33017_33704)){
var child_33712 = chunk__33016_33703.cljs$core$IIndexed$_nth$arity$2(null,i__33018_33705);
if(cljs.core.truth_(child_33712)){
node.appendChild(child_33712);


var G__33713 = seq__33014_33702;
var G__33714 = chunk__33016_33703;
var G__33715 = count__33017_33704;
var G__33716 = (i__33018_33705 + (1));
seq__33014_33702 = G__33713;
chunk__33016_33703 = G__33714;
count__33017_33704 = G__33715;
i__33018_33705 = G__33716;
continue;
} else {
var G__33719 = seq__33014_33702;
var G__33720 = chunk__33016_33703;
var G__33721 = count__33017_33704;
var G__33722 = (i__33018_33705 + (1));
seq__33014_33702 = G__33719;
chunk__33016_33703 = G__33720;
count__33017_33704 = G__33721;
i__33018_33705 = G__33722;
continue;
}
} else {
var temp__5735__auto___33727 = cljs.core.seq(seq__33014_33702);
if(temp__5735__auto___33727){
var seq__33014_33728__$1 = temp__5735__auto___33727;
if(cljs.core.chunked_seq_QMARK_(seq__33014_33728__$1)){
var c__4556__auto___33729 = cljs.core.chunk_first(seq__33014_33728__$1);
var G__33731 = cljs.core.chunk_rest(seq__33014_33728__$1);
var G__33732 = c__4556__auto___33729;
var G__33733 = cljs.core.count(c__4556__auto___33729);
var G__33734 = (0);
seq__33014_33702 = G__33731;
chunk__33016_33703 = G__33732;
count__33017_33704 = G__33733;
i__33018_33705 = G__33734;
continue;
} else {
var child_33736 = cljs.core.first(seq__33014_33728__$1);
if(cljs.core.truth_(child_33736)){
node.appendChild(child_33736);


var G__33738 = cljs.core.next(seq__33014_33728__$1);
var G__33739 = null;
var G__33740 = (0);
var G__33741 = (0);
seq__33014_33702 = G__33738;
chunk__33016_33703 = G__33739;
count__33017_33704 = G__33740;
i__33018_33705 = G__33741;
continue;
} else {
var G__33743 = cljs.core.next(seq__33014_33728__$1);
var G__33744 = null;
var G__33745 = (0);
var G__33746 = (0);
seq__33014_33702 = G__33743;
chunk__33016_33703 = G__33744;
count__33017_33704 = G__33745;
i__33018_33705 = G__33746;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33701);
}
}


var G__33747 = seq__32953_33694;
var G__33748 = chunk__32955_33695;
var G__33749 = count__32956_33696;
var G__33750 = (i__32957_33697 + (1));
seq__32953_33694 = G__33747;
chunk__32955_33695 = G__33748;
count__32956_33696 = G__33749;
i__32957_33697 = G__33750;
continue;
} else {
var G__33754 = seq__32953_33694;
var G__33755 = chunk__32955_33695;
var G__33756 = count__32956_33696;
var G__33757 = (i__32957_33697 + (1));
seq__32953_33694 = G__33754;
chunk__32955_33695 = G__33755;
count__32956_33696 = G__33756;
i__32957_33697 = G__33757;
continue;
}
} else {
var temp__5735__auto___33760 = cljs.core.seq(seq__32953_33694);
if(temp__5735__auto___33760){
var seq__32953_33762__$1 = temp__5735__auto___33760;
if(cljs.core.chunked_seq_QMARK_(seq__32953_33762__$1)){
var c__4556__auto___33763 = cljs.core.chunk_first(seq__32953_33762__$1);
var G__33764 = cljs.core.chunk_rest(seq__32953_33762__$1);
var G__33765 = c__4556__auto___33763;
var G__33766 = cljs.core.count(c__4556__auto___33763);
var G__33767 = (0);
seq__32953_33694 = G__33764;
chunk__32955_33695 = G__33765;
count__32956_33696 = G__33766;
i__32957_33697 = G__33767;
continue;
} else {
var child_struct_33770 = cljs.core.first(seq__32953_33762__$1);
if((!((child_struct_33770 == null)))){
if(typeof child_struct_33770 === 'string'){
var text_33773 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33773),child_struct_33770].join(''));
} else {
var children_33778 = shadow.dom.svg_node(child_struct_33770);
if(cljs.core.seq_QMARK_(children_33778)){
var seq__33030_33779 = cljs.core.seq(children_33778);
var chunk__33032_33780 = null;
var count__33033_33781 = (0);
var i__33034_33782 = (0);
while(true){
if((i__33034_33782 < count__33033_33781)){
var child_33784 = chunk__33032_33780.cljs$core$IIndexed$_nth$arity$2(null,i__33034_33782);
if(cljs.core.truth_(child_33784)){
node.appendChild(child_33784);


var G__33785 = seq__33030_33779;
var G__33786 = chunk__33032_33780;
var G__33787 = count__33033_33781;
var G__33788 = (i__33034_33782 + (1));
seq__33030_33779 = G__33785;
chunk__33032_33780 = G__33786;
count__33033_33781 = G__33787;
i__33034_33782 = G__33788;
continue;
} else {
var G__33789 = seq__33030_33779;
var G__33790 = chunk__33032_33780;
var G__33791 = count__33033_33781;
var G__33792 = (i__33034_33782 + (1));
seq__33030_33779 = G__33789;
chunk__33032_33780 = G__33790;
count__33033_33781 = G__33791;
i__33034_33782 = G__33792;
continue;
}
} else {
var temp__5735__auto___33798__$1 = cljs.core.seq(seq__33030_33779);
if(temp__5735__auto___33798__$1){
var seq__33030_33799__$1 = temp__5735__auto___33798__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33030_33799__$1)){
var c__4556__auto___33800 = cljs.core.chunk_first(seq__33030_33799__$1);
var G__33801 = cljs.core.chunk_rest(seq__33030_33799__$1);
var G__33802 = c__4556__auto___33800;
var G__33803 = cljs.core.count(c__4556__auto___33800);
var G__33804 = (0);
seq__33030_33779 = G__33801;
chunk__33032_33780 = G__33802;
count__33033_33781 = G__33803;
i__33034_33782 = G__33804;
continue;
} else {
var child_33808 = cljs.core.first(seq__33030_33799__$1);
if(cljs.core.truth_(child_33808)){
node.appendChild(child_33808);


var G__33809 = cljs.core.next(seq__33030_33799__$1);
var G__33810 = null;
var G__33811 = (0);
var G__33812 = (0);
seq__33030_33779 = G__33809;
chunk__33032_33780 = G__33810;
count__33033_33781 = G__33811;
i__33034_33782 = G__33812;
continue;
} else {
var G__33817 = cljs.core.next(seq__33030_33799__$1);
var G__33818 = null;
var G__33819 = (0);
var G__33820 = (0);
seq__33030_33779 = G__33817;
chunk__33032_33780 = G__33818;
count__33033_33781 = G__33819;
i__33034_33782 = G__33820;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33778);
}
}


var G__33822 = cljs.core.next(seq__32953_33762__$1);
var G__33823 = null;
var G__33824 = (0);
var G__33825 = (0);
seq__32953_33694 = G__33822;
chunk__32955_33695 = G__33823;
count__32956_33696 = G__33824;
i__32957_33697 = G__33825;
continue;
} else {
var G__33826 = cljs.core.next(seq__32953_33762__$1);
var G__33827 = null;
var G__33828 = (0);
var G__33829 = (0);
seq__32953_33694 = G__33826;
chunk__32955_33695 = G__33827;
count__32956_33696 = G__33828;
i__32957_33697 = G__33829;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33840 = arguments.length;
var i__4737__auto___33842 = (0);
while(true){
if((i__4737__auto___33842 < len__4736__auto___33840)){
args__4742__auto__.push((arguments[i__4737__auto___33842]));

var G__33844 = (i__4737__auto___33842 + (1));
i__4737__auto___33842 = G__33844;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33041){
var G__33042 = cljs.core.first(seq33041);
var seq33041__$1 = cljs.core.next(seq33041);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33042,seq33041__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33049 = arguments.length;
switch (G__33049) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__28561__auto___33866 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28562__auto__ = (function (){var switch__28401__auto__ = (function (state_33059){
var state_val_33060 = (state_33059[(1)]);
if((state_val_33060 === (1))){
var state_33059__$1 = state_33059;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33059__$1,(2),once_or_cleanup);
} else {
if((state_val_33060 === (2))){
var inst_33056 = (state_33059[(2)]);
var inst_33057 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33059__$1 = (function (){var statearr_33062 = state_33059;
(statearr_33062[(7)] = inst_33056);

return statearr_33062;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33059__$1,inst_33057);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__28402__auto__ = null;
var shadow$dom$state_machine__28402__auto____0 = (function (){
var statearr_33065 = [null,null,null,null,null,null,null,null];
(statearr_33065[(0)] = shadow$dom$state_machine__28402__auto__);

(statearr_33065[(1)] = (1));

return statearr_33065;
});
var shadow$dom$state_machine__28402__auto____1 = (function (state_33059){
while(true){
var ret_value__28403__auto__ = (function (){try{while(true){
var result__28404__auto__ = switch__28401__auto__(state_33059);
if(cljs.core.keyword_identical_QMARK_(result__28404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28404__auto__;
}
break;
}
}catch (e33066){var ex__28405__auto__ = e33066;
var statearr_33067_33879 = state_33059;
(statearr_33067_33879[(2)] = ex__28405__auto__);


if(cljs.core.seq((state_33059[(4)]))){
var statearr_33069_33881 = state_33059;
(statearr_33069_33881[(1)] = cljs.core.first((state_33059[(4)])));

} else {
throw ex__28405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33883 = state_33059;
state_33059 = G__33883;
continue;
} else {
return ret_value__28403__auto__;
}
break;
}
});
shadow$dom$state_machine__28402__auto__ = function(state_33059){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__28402__auto____0.call(this);
case 1:
return shadow$dom$state_machine__28402__auto____1.call(this,state_33059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__28402__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__28402__auto____0;
shadow$dom$state_machine__28402__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__28402__auto____1;
return shadow$dom$state_machine__28402__auto__;
})()
})();
var state__28563__auto__ = (function (){var statearr_33073 = f__28562__auto__();
(statearr_33073[(6)] = c__28561__auto___33866);

return statearr_33073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28563__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
