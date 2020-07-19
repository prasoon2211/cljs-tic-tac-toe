goog.provide('tic_tac_toe.core');
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.core !== 'undefined') && (typeof tic_tac_toe.core.app_state !== 'undefined')){
} else {
tic_tac_toe.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"squares","squares",-888257629),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((9),null)),new cljs.core.Keyword(null,"next-player","next-player",-654529910),"X"], null)], null),new cljs.core.Keyword(null,"current-index","current-index",821935409),(0)], null));
}
tic_tac_toe.core.current_squares = (function tic_tac_toe$core$current_squares(){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tic_tac_toe.core.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"current-index","current-index",821935409).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tic_tac_toe.core.app_state)),new cljs.core.Keyword(null,"squares","squares",-888257629)], null));
});
tic_tac_toe.core.current_next_player = (function tic_tac_toe$core$current_next_player(){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tic_tac_toe.core.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"current-index","current-index",821935409).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tic_tac_toe.core.app_state)),new cljs.core.Keyword(null,"next-player","next-player",-654529910)], null));
});
tic_tac_toe.core.get_winner = (function tic_tac_toe$core$get_winner(squares){
var lines = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4),(5)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(7),(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3),(6)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(4),(7)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(5),(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4),(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4),(6)], null)], null);
return cljs.core.first(cljs.core.take.cljs$core$IFn$_invoke$arity$2((1),(function (){var iter__4529__auto__ = (function tic_tac_toe$core$get_winner_$_iter__35459(s__35460){
return (new cljs.core.LazySeq(null,(function (){
var s__35460__$1 = s__35460;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35460__$1);
if(temp__5735__auto__){
var s__35460__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35460__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__35460__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__35462 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__35461 = (0);
while(true){
if((i__35461 < size__4528__auto__)){
var line = cljs.core._nth(c__4527__auto__,i__35461);
var vec__35463 = line;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35463,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35463,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35463,(2),null);
var res = (cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(squares,a);
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(squares,a),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(squares,b))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(squares,a),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(squares,c))));
} else {
return and__4115__auto__;
}
})())?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(squares,a):null);
if((!((res == null)))){
cljs.core.chunk_append(b__35462,res);

var G__35480 = (i__35461 + (1));
i__35461 = G__35480;
continue;
} else {
var G__35481 = (i__35461 + (1));
i__35461 = G__35481;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35462),tic_tac_toe$core$get_winner_$_iter__35459(cljs.core.chunk_rest(s__35460__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35462),null);
}
} else {
var line = cljs.core.first(s__35460__$2);
var vec__35466 = line;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35466,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35466,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35466,(2),null);
var res = (cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(squares,a);
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(squares,a),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(squares,b))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(squares,a),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(squares,c))));
} else {
return and__4115__auto__;
}
})())?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(squares,a):null);
if((!((res == null)))){
return cljs.core.cons(res,tic_tac_toe$core$get_winner_$_iter__35459(cljs.core.rest(s__35460__$2)));
} else {
var G__35482 = cljs.core.rest(s__35460__$2);
s__35460__$1 = G__35482;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(lines);
})()));
});
tic_tac_toe.core.handle_click_BANG_ = (function tic_tac_toe$core$handle_click_BANG_(i){
if(cljs.core.truth_(tic_tac_toe.core.get_winner(tic_tac_toe.core.current_squares()))){
return null;
} else {
var history = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tic_tac_toe.core.app_state));
var current_index = new cljs.core.Keyword(null,"current-index","current-index",821935409).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tic_tac_toe.core.app_state));
var next_player = tic_tac_toe.core.current_next_player();
var updated_squares = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tic_tac_toe.core.current_squares(),i,next_player);
var updated_next_player = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("X",next_player))?"O":"X");
var new_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"squares","squares",-888257629),updated_squares,new cljs.core.Keyword(null,"next-player","next-player",-654529910),updated_next_player], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tic_tac_toe.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220)], null),(function (p1__35469_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(p1__35469_SHARP_,(0),(current_index + (1))),new_state);
}));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tic_tac_toe.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-index","current-index",821935409)], null),(current_index + (1)));
}
});
tic_tac_toe.core.square = (function tic_tac_toe$core$square(click_handler,square_value){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"square",new cljs.core.Keyword(null,"on-click","on-click",1632826543),click_handler], null),square_value], null);
});
tic_tac_toe.core.render_square = (function tic_tac_toe$core$render_square(i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.core.square,(function (){
return tic_tac_toe.core.handle_click_BANG_(i);
}),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tic_tac_toe.core.current_squares(),i)], null);
});
tic_tac_toe.core.board = (function tic_tac_toe$core$board(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board-row","div.board-row",575328183),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.core.render_square,(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.core.render_square,(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.core.render_square,(2)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board-row","div.board-row",575328183),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.core.render_square,(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.core.render_square,(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.core.render_square,(5)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board-row","div.board-row",575328183),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.core.render_square,(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.core.render_square,(7)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.core.render_square,(8)], null)], null)], null);
});
tic_tac_toe.core.get_status = (function tic_tac_toe$core$get_status(){
var temp__5733__auto__ = tic_tac_toe.core.get_winner(tic_tac_toe.core.current_squares());
if(cljs.core.truth_(temp__5733__auto__)){
var winner = temp__5733__auto__;
return ["Winner: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(winner)].join('');
} else {
return ["Next turn: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tic_tac_toe.core.current_next_player())].join('');
}
});
tic_tac_toe.core.moves = (function tic_tac_toe$core$moves(){
var history = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tic_tac_toe.core.app_state));
var iter__4529__auto__ = (function tic_tac_toe$core$moves_$_iter__35470(s__35471){
return (new cljs.core.LazySeq(null,(function (){
var s__35471__$1 = s__35471;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35471__$1);
if(temp__5735__auto__){
var s__35471__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35471__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__35471__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__35473 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__35472 = (0);
while(true){
if((i__35472 < size__4528__auto__)){
var vec__35474 = cljs.core._nth(c__4527__auto__,i__35472);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35474,(0),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35474,(1),null);
cljs.core.chunk_append(b__35473,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__35472,vec__35474,idx,state,c__4527__auto__,size__4528__auto__,b__35473,s__35471__$2,temp__5735__auto__,history){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tic_tac_toe.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-index","current-index",821935409)], null),idx);
});})(i__35472,vec__35474,idx,state,c__4527__auto__,size__4528__auto__,b__35473,s__35471__$2,temp__5735__auto__,history))
], null),(((idx === (0)))?"Go to game start":["Go to move #: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)));

var G__35483 = (i__35472 + (1));
i__35472 = G__35483;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35473),tic_tac_toe$core$moves_$_iter__35470(cljs.core.chunk_rest(s__35471__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35473),null);
}
} else {
var vec__35477 = cljs.core.first(s__35471__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35477,(0),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35477,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__35477,idx,state,s__35471__$2,temp__5735__auto__,history){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tic_tac_toe.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-index","current-index",821935409)], null),idx);
});})(vec__35477,idx,state,s__35471__$2,temp__5735__auto__,history))
], null),(((idx === (0)))?"Go to game start":["Go to move #: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)),tic_tac_toe$core$moves_$_iter__35470(cljs.core.rest(s__35471__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,history));
});
tic_tac_toe.core.game = (function tic_tac_toe$core$game(props){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.game","div.game",1488032861),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.game-board","div.game-board",1833032215),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.core.board], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.game-info","div.game-info",-605893819),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),tic_tac_toe.core.get_status()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),tic_tac_toe.core.moves()], null)], null)], null);
});
tic_tac_toe.core.mount = (function tic_tac_toe$core$mount(el){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.core.game], null),el);
});
tic_tac_toe.core.mount_app_element = (function tic_tac_toe$core$mount_app_element(){
var temp__5735__auto__ = goog.dom.getElement("app");
if(cljs.core.truth_(temp__5735__auto__)){
var el = temp__5735__auto__;
return tic_tac_toe.core.mount(el);
} else {
return null;
}
});
tic_tac_toe.core.main = (function tic_tac_toe$core$main(){
tic_tac_toe.core.mount_app_element();

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["[main] : loading"], 0));
});
goog.exportSymbol('tic_tac_toe.core.main', tic_tac_toe.core.main);

//# sourceMappingURL=tic_tac_toe.core.js.map
