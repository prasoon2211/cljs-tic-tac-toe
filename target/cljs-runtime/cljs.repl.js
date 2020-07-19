goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36201){
var map__36203 = p__36201;
var map__36203__$1 = (((((!((map__36203 == null))))?(((((map__36203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36203):map__36203);
var m = map__36203__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36203__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36203__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36206_36415 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36207_36416 = null;
var count__36208_36417 = (0);
var i__36209_36418 = (0);
while(true){
if((i__36209_36418 < count__36208_36417)){
var f_36419 = chunk__36207_36416.cljs$core$IIndexed$_nth$arity$2(null,i__36209_36418);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36419], 0));


var G__36420 = seq__36206_36415;
var G__36421 = chunk__36207_36416;
var G__36422 = count__36208_36417;
var G__36423 = (i__36209_36418 + (1));
seq__36206_36415 = G__36420;
chunk__36207_36416 = G__36421;
count__36208_36417 = G__36422;
i__36209_36418 = G__36423;
continue;
} else {
var temp__5735__auto___36424 = cljs.core.seq(seq__36206_36415);
if(temp__5735__auto___36424){
var seq__36206_36425__$1 = temp__5735__auto___36424;
if(cljs.core.chunked_seq_QMARK_(seq__36206_36425__$1)){
var c__4556__auto___36427 = cljs.core.chunk_first(seq__36206_36425__$1);
var G__36428 = cljs.core.chunk_rest(seq__36206_36425__$1);
var G__36429 = c__4556__auto___36427;
var G__36430 = cljs.core.count(c__4556__auto___36427);
var G__36431 = (0);
seq__36206_36415 = G__36428;
chunk__36207_36416 = G__36429;
count__36208_36417 = G__36430;
i__36209_36418 = G__36431;
continue;
} else {
var f_36432 = cljs.core.first(seq__36206_36425__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36432], 0));


var G__36433 = cljs.core.next(seq__36206_36425__$1);
var G__36434 = null;
var G__36435 = (0);
var G__36436 = (0);
seq__36206_36415 = G__36433;
chunk__36207_36416 = G__36434;
count__36208_36417 = G__36435;
i__36209_36418 = G__36436;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36437 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36437], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36437)))?cljs.core.second(arglists_36437):arglists_36437)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36214_36438 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36215_36439 = null;
var count__36216_36440 = (0);
var i__36217_36441 = (0);
while(true){
if((i__36217_36441 < count__36216_36440)){
var vec__36228_36442 = chunk__36215_36439.cljs$core$IIndexed$_nth$arity$2(null,i__36217_36441);
var name_36443 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36228_36442,(0),null);
var map__36231_36444 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36228_36442,(1),null);
var map__36231_36445__$1 = (((((!((map__36231_36444 == null))))?(((((map__36231_36444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36231_36444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36231_36444):map__36231_36444);
var doc_36446 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36231_36445__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36447 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36231_36445__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36443], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36447], 0));

if(cljs.core.truth_(doc_36446)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36446], 0));
} else {
}


var G__36449 = seq__36214_36438;
var G__36450 = chunk__36215_36439;
var G__36451 = count__36216_36440;
var G__36452 = (i__36217_36441 + (1));
seq__36214_36438 = G__36449;
chunk__36215_36439 = G__36450;
count__36216_36440 = G__36451;
i__36217_36441 = G__36452;
continue;
} else {
var temp__5735__auto___36453 = cljs.core.seq(seq__36214_36438);
if(temp__5735__auto___36453){
var seq__36214_36454__$1 = temp__5735__auto___36453;
if(cljs.core.chunked_seq_QMARK_(seq__36214_36454__$1)){
var c__4556__auto___36455 = cljs.core.chunk_first(seq__36214_36454__$1);
var G__36456 = cljs.core.chunk_rest(seq__36214_36454__$1);
var G__36457 = c__4556__auto___36455;
var G__36458 = cljs.core.count(c__4556__auto___36455);
var G__36459 = (0);
seq__36214_36438 = G__36456;
chunk__36215_36439 = G__36457;
count__36216_36440 = G__36458;
i__36217_36441 = G__36459;
continue;
} else {
var vec__36235_36460 = cljs.core.first(seq__36214_36454__$1);
var name_36461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36235_36460,(0),null);
var map__36238_36462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36235_36460,(1),null);
var map__36238_36463__$1 = (((((!((map__36238_36462 == null))))?(((((map__36238_36462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36238_36462.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36238_36462):map__36238_36462);
var doc_36464 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36238_36463__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36465 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36238_36463__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36461], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36465], 0));

if(cljs.core.truth_(doc_36464)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36464], 0));
} else {
}


var G__36466 = cljs.core.next(seq__36214_36454__$1);
var G__36467 = null;
var G__36468 = (0);
var G__36469 = (0);
seq__36214_36438 = G__36466;
chunk__36215_36439 = G__36467;
count__36216_36440 = G__36468;
i__36217_36441 = G__36469;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__36241 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36242 = null;
var count__36243 = (0);
var i__36244 = (0);
while(true){
if((i__36244 < count__36243)){
var role = chunk__36242.cljs$core$IIndexed$_nth$arity$2(null,i__36244);
var temp__5735__auto___36470__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36470__$1)){
var spec_36471 = temp__5735__auto___36470__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36471)], 0));
} else {
}


var G__36472 = seq__36241;
var G__36473 = chunk__36242;
var G__36474 = count__36243;
var G__36475 = (i__36244 + (1));
seq__36241 = G__36472;
chunk__36242 = G__36473;
count__36243 = G__36474;
i__36244 = G__36475;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__36241);
if(temp__5735__auto____$1){
var seq__36241__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36241__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36241__$1);
var G__36476 = cljs.core.chunk_rest(seq__36241__$1);
var G__36477 = c__4556__auto__;
var G__36478 = cljs.core.count(c__4556__auto__);
var G__36479 = (0);
seq__36241 = G__36476;
chunk__36242 = G__36477;
count__36243 = G__36478;
i__36244 = G__36479;
continue;
} else {
var role = cljs.core.first(seq__36241__$1);
var temp__5735__auto___36480__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36480__$2)){
var spec_36481 = temp__5735__auto___36480__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36481)], 0));
} else {
}


var G__36482 = cljs.core.next(seq__36241__$1);
var G__36483 = null;
var G__36484 = (0);
var G__36485 = (0);
seq__36241 = G__36482;
chunk__36242 = G__36483;
count__36243 = G__36484;
i__36244 = G__36485;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__36486 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36487 = cljs.core.ex_cause(t);
via = G__36486;
t = G__36487;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__36266 = datafied_throwable;
var map__36266__$1 = (((((!((map__36266 == null))))?(((((map__36266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36266):map__36266);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36266__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36266__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36266__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36267 = cljs.core.last(via);
var map__36267__$1 = (((((!((map__36267 == null))))?(((((map__36267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36267):map__36267);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36267__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36267__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36267__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36268 = data;
var map__36268__$1 = (((((!((map__36268 == null))))?(((((map__36268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36268):map__36268);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36268__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36268__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36268__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36269 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36269__$1 = (((((!((map__36269 == null))))?(((((map__36269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36269):map__36269);
var top_data = map__36269__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36269__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36281 = phase;
var G__36281__$1 = (((G__36281 instanceof cljs.core.Keyword))?G__36281.fqn:null);
switch (G__36281__$1) {
case "read-source":
var map__36287 = data;
var map__36287__$1 = (((((!((map__36287 == null))))?(((((map__36287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36287):map__36287);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36287__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36287__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36298 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36298__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36298,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36298);
var G__36298__$2 = (cljs.core.truth_((function (){var fexpr__36299 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36299.cljs$core$IFn$_invoke$arity$1 ? fexpr__36299.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36299.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36298__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36298__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36298__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36298__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36304 = top_data;
var G__36304__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36304,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36304);
var G__36304__$2 = (cljs.core.truth_((function (){var fexpr__36310 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36310.cljs$core$IFn$_invoke$arity$1 ? fexpr__36310.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36310.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36304__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36304__$1);
var G__36304__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36304__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36304__$2);
var G__36304__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36304__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36304__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36304__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36304__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36326 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36326,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36326,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36326,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36326,(3),null);
var G__36329 = top_data;
var G__36329__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36329,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36329);
var G__36329__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36329__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36329__$1);
var G__36329__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36329__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36329__$2);
var G__36329__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36329__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36329__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36329__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36329__$4;
}

break;
case "execution":
var vec__36334 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36334,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36334,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36334,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36334,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36252_SHARP_){
var or__4126__auto__ = (p1__36252_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__36341 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36341.cljs$core$IFn$_invoke$arity$1 ? fexpr__36341.cljs$core$IFn$_invoke$arity$1(p1__36252_SHARP_) : fexpr__36341.call(null,p1__36252_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__36342 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36342__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36342,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36342);
var G__36342__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36342__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36342__$1);
var G__36342__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36342__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36342__$2);
var G__36342__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36342__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36342__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36342__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36342__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36281__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36367){
var map__36368 = p__36367;
var map__36368__$1 = (((((!((map__36368 == null))))?(((((map__36368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36368):map__36368);
var triage_data = map__36368__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36368__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36368__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36368__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36368__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36368__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36368__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36368__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36368__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__36374 = phase;
var G__36374__$1 = (((G__36374 instanceof cljs.core.Keyword))?G__36374.fqn:null);
switch (G__36374__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36376 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36377 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36378 = loc;
var G__36379 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36380_36499 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36381_36500 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36382_36501 = true;
var _STAR_print_fn_STAR__temp_val__36383_36502 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36382_36501);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36383_36502);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36365_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36365_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36381_36500);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36380_36499);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36376,G__36377,G__36378,G__36379) : format.call(null,G__36376,G__36377,G__36378,G__36379));

break;
case "macroexpansion":
var G__36385 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36386 = cause_type;
var G__36387 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36388 = loc;
var G__36389 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36385,G__36386,G__36387,G__36388,G__36389) : format.call(null,G__36385,G__36386,G__36387,G__36388,G__36389));

break;
case "compile-syntax-check":
var G__36390 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36391 = cause_type;
var G__36392 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36393 = loc;
var G__36394 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36390,G__36391,G__36392,G__36393,G__36394) : format.call(null,G__36390,G__36391,G__36392,G__36393,G__36394));

break;
case "compilation":
var G__36395 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36396 = cause_type;
var G__36397 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36398 = loc;
var G__36399 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36395,G__36396,G__36397,G__36398,G__36399) : format.call(null,G__36395,G__36396,G__36397,G__36398,G__36399));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36400 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36401 = symbol;
var G__36402 = loc;
var G__36403 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36404_36504 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36405_36505 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36406_36506 = true;
var _STAR_print_fn_STAR__temp_val__36407_36507 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36406_36506);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36407_36507);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36366_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36366_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36405_36505);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36404_36504);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36400,G__36401,G__36402,G__36403) : format.call(null,G__36400,G__36401,G__36402,G__36403));
} else {
var G__36408 = "Execution error%s at %s(%s).\n%s\n";
var G__36409 = cause_type;
var G__36410 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36411 = loc;
var G__36412 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36408,G__36409,G__36410,G__36411,G__36412) : format.call(null,G__36408,G__36409,G__36410,G__36411,G__36412));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36374__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
