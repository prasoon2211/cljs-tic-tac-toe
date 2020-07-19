goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35220 = arguments.length;
var i__4737__auto___35221 = (0);
while(true){
if((i__4737__auto___35221 < len__4736__auto___35220)){
args__4742__auto__.push((arguments[i__4737__auto___35221]));

var G__35222 = (i__4737__auto___35221 + (1));
i__4737__auto___35221 = G__35222;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq34956){
var G__34957 = cljs.core.first(seq34956);
var seq34956__$1 = cljs.core.next(seq34956);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34957,seq34956__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__34967 = cljs.core.seq(sources);
var chunk__34968 = null;
var count__34969 = (0);
var i__34970 = (0);
while(true){
if((i__34970 < count__34969)){
var map__34986 = chunk__34968.cljs$core$IIndexed$_nth$arity$2(null,i__34970);
var map__34986__$1 = (((((!((map__34986 == null))))?(((((map__34986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34986):map__34986);
var src = map__34986__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34986__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34986__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34986__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34986__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e34990){var e_35223 = e34990;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35223);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35223.message)].join('')));
}

var G__35224 = seq__34967;
var G__35225 = chunk__34968;
var G__35226 = count__34969;
var G__35227 = (i__34970 + (1));
seq__34967 = G__35224;
chunk__34968 = G__35225;
count__34969 = G__35226;
i__34970 = G__35227;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34967);
if(temp__5735__auto__){
var seq__34967__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34967__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34967__$1);
var G__35228 = cljs.core.chunk_rest(seq__34967__$1);
var G__35229 = c__4556__auto__;
var G__35230 = cljs.core.count(c__4556__auto__);
var G__35231 = (0);
seq__34967 = G__35228;
chunk__34968 = G__35229;
count__34969 = G__35230;
i__34970 = G__35231;
continue;
} else {
var map__34994 = cljs.core.first(seq__34967__$1);
var map__34994__$1 = (((((!((map__34994 == null))))?(((((map__34994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34994):map__34994);
var src = map__34994__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34994__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34994__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34994__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34994__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e34997){var e_35232 = e34997;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35232);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35232.message)].join('')));
}

var G__35233 = cljs.core.next(seq__34967__$1);
var G__35234 = null;
var G__35235 = (0);
var G__35236 = (0);
seq__34967 = G__35233;
chunk__34968 = G__35234;
count__34969 = G__35235;
i__34970 = G__35236;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35001 = cljs.core.seq(js_requires);
var chunk__35002 = null;
var count__35003 = (0);
var i__35004 = (0);
while(true){
if((i__35004 < count__35003)){
var js_ns = chunk__35002.cljs$core$IIndexed$_nth$arity$2(null,i__35004);
var require_str_35237 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35237);


var G__35238 = seq__35001;
var G__35239 = chunk__35002;
var G__35240 = count__35003;
var G__35241 = (i__35004 + (1));
seq__35001 = G__35238;
chunk__35002 = G__35239;
count__35003 = G__35240;
i__35004 = G__35241;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35001);
if(temp__5735__auto__){
var seq__35001__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35001__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35001__$1);
var G__35242 = cljs.core.chunk_rest(seq__35001__$1);
var G__35243 = c__4556__auto__;
var G__35244 = cljs.core.count(c__4556__auto__);
var G__35245 = (0);
seq__35001 = G__35242;
chunk__35002 = G__35243;
count__35003 = G__35244;
i__35004 = G__35245;
continue;
} else {
var js_ns = cljs.core.first(seq__35001__$1);
var require_str_35246 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35246);


var G__35247 = cljs.core.next(seq__35001__$1);
var G__35248 = null;
var G__35249 = (0);
var G__35250 = (0);
seq__35001 = G__35247;
chunk__35002 = G__35248;
count__35003 = G__35249;
i__35004 = G__35250;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__35012){
var map__35013 = p__35012;
var map__35013__$1 = (((((!((map__35013 == null))))?(((((map__35013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35013):map__35013);
var msg = map__35013__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35013__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35013__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35015(s__35016){
return (new cljs.core.LazySeq(null,(function (){
var s__35016__$1 = s__35016;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35016__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__35021 = cljs.core.first(xs__6292__auto__);
var map__35021__$1 = (((((!((map__35021 == null))))?(((((map__35021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35021):map__35021);
var src = map__35021__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35021__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35021__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__35016__$1,map__35021,map__35021__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35013,map__35013__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35015_$_iter__35017(s__35018){
return (new cljs.core.LazySeq(null,((function (s__35016__$1,map__35021,map__35021__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35013,map__35013__$1,msg,info,reload_info){
return (function (){
var s__35018__$1 = s__35018;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__35018__$1);
if(temp__5735__auto____$1){
var s__35018__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35018__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__35018__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__35020 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__35019 = (0);
while(true){
if((i__35019 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__35019);
cljs.core.chunk_append(b__35020,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35251 = (i__35019 + (1));
i__35019 = G__35251;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35020),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35015_$_iter__35017(cljs.core.chunk_rest(s__35018__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35020),null);
}
} else {
var warning = cljs.core.first(s__35018__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35015_$_iter__35017(cljs.core.rest(s__35018__$2)));
}
} else {
return null;
}
break;
}
});})(s__35016__$1,map__35021,map__35021__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35013,map__35013__$1,msg,info,reload_info))
,null,null));
});})(s__35016__$1,map__35021,map__35021__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35013,map__35013__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35015(cljs.core.rest(s__35016__$1)));
} else {
var G__35252 = cljs.core.rest(s__35016__$1);
s__35016__$1 = G__35252;
continue;
}
} else {
var G__35253 = cljs.core.rest(s__35016__$1);
s__35016__$1 = G__35253;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__35030_35254 = cljs.core.seq(warnings);
var chunk__35031_35255 = null;
var count__35032_35256 = (0);
var i__35033_35257 = (0);
while(true){
if((i__35033_35257 < count__35032_35256)){
var map__35042_35258 = chunk__35031_35255.cljs$core$IIndexed$_nth$arity$2(null,i__35033_35257);
var map__35042_35259__$1 = (((((!((map__35042_35258 == null))))?(((((map__35042_35258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35042_35258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35042_35258):map__35042_35258);
var w_35260 = map__35042_35259__$1;
var msg_35261__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35042_35259__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35262 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35042_35259__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35263 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35042_35259__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35264 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35042_35259__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35264)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35262),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35263),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35261__$1)].join(''));


var G__35265 = seq__35030_35254;
var G__35266 = chunk__35031_35255;
var G__35267 = count__35032_35256;
var G__35268 = (i__35033_35257 + (1));
seq__35030_35254 = G__35265;
chunk__35031_35255 = G__35266;
count__35032_35256 = G__35267;
i__35033_35257 = G__35268;
continue;
} else {
var temp__5735__auto___35269 = cljs.core.seq(seq__35030_35254);
if(temp__5735__auto___35269){
var seq__35030_35270__$1 = temp__5735__auto___35269;
if(cljs.core.chunked_seq_QMARK_(seq__35030_35270__$1)){
var c__4556__auto___35271 = cljs.core.chunk_first(seq__35030_35270__$1);
var G__35272 = cljs.core.chunk_rest(seq__35030_35270__$1);
var G__35273 = c__4556__auto___35271;
var G__35274 = cljs.core.count(c__4556__auto___35271);
var G__35275 = (0);
seq__35030_35254 = G__35272;
chunk__35031_35255 = G__35273;
count__35032_35256 = G__35274;
i__35033_35257 = G__35275;
continue;
} else {
var map__35078_35276 = cljs.core.first(seq__35030_35270__$1);
var map__35078_35277__$1 = (((((!((map__35078_35276 == null))))?(((((map__35078_35276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35078_35276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35078_35276):map__35078_35276);
var w_35278 = map__35078_35277__$1;
var msg_35279__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35078_35277__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35280 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35078_35277__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35281 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35078_35277__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35282 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35078_35277__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35282)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35280),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35281),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35279__$1)].join(''));


var G__35283 = cljs.core.next(seq__35030_35270__$1);
var G__35284 = null;
var G__35285 = (0);
var G__35286 = (0);
seq__35030_35254 = G__35283;
chunk__35031_35255 = G__35284;
count__35032_35256 = G__35285;
i__35033_35257 = G__35286;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__35010_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35010_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__35098){
var map__35099 = p__35098;
var map__35099__$1 = (((((!((map__35099 == null))))?(((((map__35099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35099):map__35099);
var msg = map__35099__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35099__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35102 = cljs.core.seq(updates);
var chunk__35104 = null;
var count__35105 = (0);
var i__35106 = (0);
while(true){
if((i__35106 < count__35105)){
var path = chunk__35104.cljs$core$IIndexed$_nth$arity$2(null,i__35106);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35150_35287 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35153_35288 = null;
var count__35154_35289 = (0);
var i__35155_35290 = (0);
while(true){
if((i__35155_35290 < count__35154_35289)){
var node_35291 = chunk__35153_35288.cljs$core$IIndexed$_nth$arity$2(null,i__35155_35290);
var path_match_35292 = shadow.cljs.devtools.client.browser.match_paths(node_35291.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35292)){
var new_link_35293 = (function (){var G__35161 = node_35291.cloneNode(true);
G__35161.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35292),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35161;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35292], 0));

goog.dom.insertSiblingAfter(new_link_35293,node_35291);

goog.dom.removeNode(node_35291);


var G__35294 = seq__35150_35287;
var G__35295 = chunk__35153_35288;
var G__35296 = count__35154_35289;
var G__35297 = (i__35155_35290 + (1));
seq__35150_35287 = G__35294;
chunk__35153_35288 = G__35295;
count__35154_35289 = G__35296;
i__35155_35290 = G__35297;
continue;
} else {
var G__35298 = seq__35150_35287;
var G__35299 = chunk__35153_35288;
var G__35300 = count__35154_35289;
var G__35301 = (i__35155_35290 + (1));
seq__35150_35287 = G__35298;
chunk__35153_35288 = G__35299;
count__35154_35289 = G__35300;
i__35155_35290 = G__35301;
continue;
}
} else {
var temp__5735__auto___35302 = cljs.core.seq(seq__35150_35287);
if(temp__5735__auto___35302){
var seq__35150_35303__$1 = temp__5735__auto___35302;
if(cljs.core.chunked_seq_QMARK_(seq__35150_35303__$1)){
var c__4556__auto___35304 = cljs.core.chunk_first(seq__35150_35303__$1);
var G__35305 = cljs.core.chunk_rest(seq__35150_35303__$1);
var G__35306 = c__4556__auto___35304;
var G__35307 = cljs.core.count(c__4556__auto___35304);
var G__35308 = (0);
seq__35150_35287 = G__35305;
chunk__35153_35288 = G__35306;
count__35154_35289 = G__35307;
i__35155_35290 = G__35308;
continue;
} else {
var node_35309 = cljs.core.first(seq__35150_35303__$1);
var path_match_35310 = shadow.cljs.devtools.client.browser.match_paths(node_35309.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35310)){
var new_link_35311 = (function (){var G__35163 = node_35309.cloneNode(true);
G__35163.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35310),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35163;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35310], 0));

goog.dom.insertSiblingAfter(new_link_35311,node_35309);

goog.dom.removeNode(node_35309);


var G__35312 = cljs.core.next(seq__35150_35303__$1);
var G__35313 = null;
var G__35314 = (0);
var G__35315 = (0);
seq__35150_35287 = G__35312;
chunk__35153_35288 = G__35313;
count__35154_35289 = G__35314;
i__35155_35290 = G__35315;
continue;
} else {
var G__35316 = cljs.core.next(seq__35150_35303__$1);
var G__35317 = null;
var G__35318 = (0);
var G__35319 = (0);
seq__35150_35287 = G__35316;
chunk__35153_35288 = G__35317;
count__35154_35289 = G__35318;
i__35155_35290 = G__35319;
continue;
}
}
} else {
}
}
break;
}


var G__35320 = seq__35102;
var G__35321 = chunk__35104;
var G__35322 = count__35105;
var G__35323 = (i__35106 + (1));
seq__35102 = G__35320;
chunk__35104 = G__35321;
count__35105 = G__35322;
i__35106 = G__35323;
continue;
} else {
var G__35324 = seq__35102;
var G__35325 = chunk__35104;
var G__35326 = count__35105;
var G__35327 = (i__35106 + (1));
seq__35102 = G__35324;
chunk__35104 = G__35325;
count__35105 = G__35326;
i__35106 = G__35327;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35102);
if(temp__5735__auto__){
var seq__35102__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35102__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35102__$1);
var G__35328 = cljs.core.chunk_rest(seq__35102__$1);
var G__35329 = c__4556__auto__;
var G__35330 = cljs.core.count(c__4556__auto__);
var G__35331 = (0);
seq__35102 = G__35328;
chunk__35104 = G__35329;
count__35105 = G__35330;
i__35106 = G__35331;
continue;
} else {
var path = cljs.core.first(seq__35102__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35164_35332 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35167_35333 = null;
var count__35168_35334 = (0);
var i__35169_35335 = (0);
while(true){
if((i__35169_35335 < count__35168_35334)){
var node_35336 = chunk__35167_35333.cljs$core$IIndexed$_nth$arity$2(null,i__35169_35335);
var path_match_35337 = shadow.cljs.devtools.client.browser.match_paths(node_35336.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35337)){
var new_link_35338 = (function (){var G__35174 = node_35336.cloneNode(true);
G__35174.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35337),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35174;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35337], 0));

goog.dom.insertSiblingAfter(new_link_35338,node_35336);

goog.dom.removeNode(node_35336);


var G__35339 = seq__35164_35332;
var G__35340 = chunk__35167_35333;
var G__35341 = count__35168_35334;
var G__35342 = (i__35169_35335 + (1));
seq__35164_35332 = G__35339;
chunk__35167_35333 = G__35340;
count__35168_35334 = G__35341;
i__35169_35335 = G__35342;
continue;
} else {
var G__35343 = seq__35164_35332;
var G__35344 = chunk__35167_35333;
var G__35345 = count__35168_35334;
var G__35346 = (i__35169_35335 + (1));
seq__35164_35332 = G__35343;
chunk__35167_35333 = G__35344;
count__35168_35334 = G__35345;
i__35169_35335 = G__35346;
continue;
}
} else {
var temp__5735__auto___35347__$1 = cljs.core.seq(seq__35164_35332);
if(temp__5735__auto___35347__$1){
var seq__35164_35348__$1 = temp__5735__auto___35347__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35164_35348__$1)){
var c__4556__auto___35349 = cljs.core.chunk_first(seq__35164_35348__$1);
var G__35350 = cljs.core.chunk_rest(seq__35164_35348__$1);
var G__35351 = c__4556__auto___35349;
var G__35352 = cljs.core.count(c__4556__auto___35349);
var G__35353 = (0);
seq__35164_35332 = G__35350;
chunk__35167_35333 = G__35351;
count__35168_35334 = G__35352;
i__35169_35335 = G__35353;
continue;
} else {
var node_35354 = cljs.core.first(seq__35164_35348__$1);
var path_match_35355 = shadow.cljs.devtools.client.browser.match_paths(node_35354.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35355)){
var new_link_35356 = (function (){var G__35177 = node_35354.cloneNode(true);
G__35177.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35355),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35177;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35355], 0));

goog.dom.insertSiblingAfter(new_link_35356,node_35354);

goog.dom.removeNode(node_35354);


var G__35357 = cljs.core.next(seq__35164_35348__$1);
var G__35358 = null;
var G__35359 = (0);
var G__35360 = (0);
seq__35164_35332 = G__35357;
chunk__35167_35333 = G__35358;
count__35168_35334 = G__35359;
i__35169_35335 = G__35360;
continue;
} else {
var G__35361 = cljs.core.next(seq__35164_35348__$1);
var G__35362 = null;
var G__35363 = (0);
var G__35364 = (0);
seq__35164_35332 = G__35361;
chunk__35167_35333 = G__35362;
count__35168_35334 = G__35363;
i__35169_35335 = G__35364;
continue;
}
}
} else {
}
}
break;
}


var G__35365 = cljs.core.next(seq__35102__$1);
var G__35366 = null;
var G__35367 = (0);
var G__35368 = (0);
seq__35102 = G__35365;
chunk__35104 = G__35366;
count__35105 = G__35367;
i__35106 = G__35368;
continue;
} else {
var G__35369 = cljs.core.next(seq__35102__$1);
var G__35370 = null;
var G__35371 = (0);
var G__35372 = (0);
seq__35102 = G__35369;
chunk__35104 = G__35370;
count__35105 = G__35371;
i__35106 = G__35372;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__35178){
var map__35179 = p__35178;
var map__35179__$1 = (((((!((map__35179 == null))))?(((((map__35179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35179):map__35179);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35179__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.client_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null);
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__35184){
var map__35185 = p__35184;
var map__35185__$1 = (((((!((map__35185 == null))))?(((((map__35185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35185):map__35185);
var _ = map__35185__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35185__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__35188,done,error){
var map__35189 = p__35188;
var map__35189__$1 = (((((!((map__35189 == null))))?(((((map__35189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35189):map__35189);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35189__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__35192,done,error){
var map__35193 = p__35192;
var map__35193__$1 = (((((!((map__35193 == null))))?(((((map__35193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35193):map__35193);
var msg = map__35193__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35193__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35193__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35193__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__35196){
var map__35198 = p__35196;
var map__35198__$1 = (((((!((map__35198 == null))))?(((((map__35198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35198):map__35198);
var src = map__35198__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35198__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__35201 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__35201) : done.call(null,G__35201));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__35202){
var map__35203 = p__35202;
var map__35203__$1 = (((((!((map__35203 == null))))?(((((map__35203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35203):map__35203);
var msg__$1 = map__35203__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35203__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e35206){var ex = e35206;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__35207){
var map__35208 = p__35207;
var map__35208__$1 = (((((!((map__35208 == null))))?(((((map__35208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35208):map__35208);
var env = map__35208__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35208__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__35211){
var map__35212 = p__35211;
var map__35212__$1 = (((((!((map__35212 == null))))?(((((map__35212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35212):map__35212);
var msg = map__35212__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35212__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__35214){
var map__35215 = p__35214;
var map__35215__$1 = (((((!((map__35215 == null))))?(((((map__35215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35215):map__35215);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35215__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35215__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__35217){
var map__35218 = p__35217;
var map__35218__$1 = (((((!((map__35218 == null))))?(((((map__35218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35218):map__35218);
var svc = map__35218__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35218__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
