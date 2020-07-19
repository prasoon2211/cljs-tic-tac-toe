goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__32117,p__32118){
var map__32120 = p__32117;
var map__32120__$1 = (((((!((map__32120 == null))))?(((((map__32120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32120):map__32120);
var svc = map__32120__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32120__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32120__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32120__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__32121 = p__32118;
var map__32121__$1 = (((((!((map__32121 == null))))?(((((map__32121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32121):map__32121);
var msg = map__32121__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32121__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32121__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32121__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32121__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__32144,p__32145){
var map__32146 = p__32144;
var map__32146__$1 = (((((!((map__32146 == null))))?(((((map__32146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32146):map__32146);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32146__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__32147 = p__32145;
var map__32147__$1 = (((((!((map__32147 == null))))?(((((map__32147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32147):map__32147);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32147__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__32159,p__32160){
var map__32163 = p__32159;
var map__32163__$1 = (((((!((map__32163 == null))))?(((((map__32163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32163):map__32163);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32163__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32163__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__32164 = p__32160;
var map__32164__$1 = (((((!((map__32164 == null))))?(((((map__32164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32164):map__32164);
var msg = map__32164__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32164__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__32176,tid){
var map__32177 = p__32176;
var map__32177__$1 = (((((!((map__32177 == null))))?(((((map__32177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32177):map__32177);
var svc = map__32177__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32177__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__32190 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__32191 = null;
var count__32192 = (0);
var i__32193 = (0);
while(true){
if((i__32193 < count__32192)){
var vec__32215 = chunk__32191.cljs$core$IIndexed$_nth$arity$2(null,i__32193);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32215,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32215,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__32296 = seq__32190;
var G__32297 = chunk__32191;
var G__32298 = count__32192;
var G__32299 = (i__32193 + (1));
seq__32190 = G__32296;
chunk__32191 = G__32297;
count__32192 = G__32298;
i__32193 = G__32299;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32190);
if(temp__5735__auto__){
var seq__32190__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32190__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32190__$1);
var G__32300 = cljs.core.chunk_rest(seq__32190__$1);
var G__32301 = c__4556__auto__;
var G__32302 = cljs.core.count(c__4556__auto__);
var G__32303 = (0);
seq__32190 = G__32300;
chunk__32191 = G__32301;
count__32192 = G__32302;
i__32193 = G__32303;
continue;
} else {
var vec__32220 = cljs.core.first(seq__32190__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32220,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32220,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__32311 = cljs.core.next(seq__32190__$1);
var G__32312 = null;
var G__32313 = (0);
var G__32314 = (0);
seq__32190 = G__32311;
chunk__32191 = G__32312;
count__32192 = G__32313;
i__32193 = G__32314;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__32184_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__32184_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__32185_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__32185_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__32186_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__32186_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__32188_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__32188_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__32226){
var map__32227 = p__32226;
var map__32227__$1 = (((((!((map__32227 == null))))?(((((map__32227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32227):map__32227);
var svc = map__32227__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32227__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32227__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
