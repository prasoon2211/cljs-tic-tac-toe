goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__28664 = arguments.length;
switch (G__28664) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28668 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28668 = (function (f,blockable,meta28669){
this.f = f;
this.blockable = blockable;
this.meta28669 = meta28669;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28668.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28670,meta28669__$1){
var self__ = this;
var _28670__$1 = this;
return (new cljs.core.async.t_cljs$core$async28668(self__.f,self__.blockable,meta28669__$1));
}));

(cljs.core.async.t_cljs$core$async28668.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28670){
var self__ = this;
var _28670__$1 = this;
return self__.meta28669;
}));

(cljs.core.async.t_cljs$core$async28668.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28668.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28668.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async28668.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async28668.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28669","meta28669",-1680649469,null)], null);
}));

(cljs.core.async.t_cljs$core$async28668.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28668.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28668");

(cljs.core.async.t_cljs$core$async28668.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async28668");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28668.
 */
cljs.core.async.__GT_t_cljs$core$async28668 = (function cljs$core$async$__GT_t_cljs$core$async28668(f__$1,blockable__$1,meta28669){
return (new cljs.core.async.t_cljs$core$async28668(f__$1,blockable__$1,meta28669));
});

}

return (new cljs.core.async.t_cljs$core$async28668(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__28731 = arguments.length;
switch (G__28731) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__28771 = arguments.length;
switch (G__28771) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__28795 = arguments.length;
switch (G__28795) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32048 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32048) : fn1.call(null,val_32048));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32048) : fn1.call(null,val_32048));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__28811 = arguments.length;
switch (G__28811) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___32070 = n;
var x_32075 = (0);
while(true){
if((x_32075 < n__4613__auto___32070)){
(a[x_32075] = x_32075);

var G__32077 = (x_32075 + (1));
x_32075 = G__32077;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28849 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28849 = (function (flag,meta28850){
this.flag = flag;
this.meta28850 = meta28850;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28851,meta28850__$1){
var self__ = this;
var _28851__$1 = this;
return (new cljs.core.async.t_cljs$core$async28849(self__.flag,meta28850__$1));
}));

(cljs.core.async.t_cljs$core$async28849.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28851){
var self__ = this;
var _28851__$1 = this;
return self__.meta28850;
}));

(cljs.core.async.t_cljs$core$async28849.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28849.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async28849.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28849.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async28849.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28850","meta28850",1053644918,null)], null);
}));

(cljs.core.async.t_cljs$core$async28849.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28849.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28849");

(cljs.core.async.t_cljs$core$async28849.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async28849");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28849.
 */
cljs.core.async.__GT_t_cljs$core$async28849 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28849(flag__$1,meta28850){
return (new cljs.core.async.t_cljs$core$async28849(flag__$1,meta28850));
});

}

return (new cljs.core.async.t_cljs$core$async28849(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28861 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28861 = (function (flag,cb,meta28862){
this.flag = flag;
this.cb = cb;
this.meta28862 = meta28862;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28861.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28863,meta28862__$1){
var self__ = this;
var _28863__$1 = this;
return (new cljs.core.async.t_cljs$core$async28861(self__.flag,self__.cb,meta28862__$1));
}));

(cljs.core.async.t_cljs$core$async28861.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28863){
var self__ = this;
var _28863__$1 = this;
return self__.meta28862;
}));

(cljs.core.async.t_cljs$core$async28861.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28861.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async28861.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28861.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async28861.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28862","meta28862",-930734358,null)], null);
}));

(cljs.core.async.t_cljs$core$async28861.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28861.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28861");

(cljs.core.async.t_cljs$core$async28861.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async28861");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28861.
 */
cljs.core.async.__GT_t_cljs$core$async28861 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28861(flag__$1,cb__$1,meta28862){
return (new cljs.core.async.t_cljs$core$async28861(flag__$1,cb__$1,meta28862));
});

}

return (new cljs.core.async.t_cljs$core$async28861(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28882_SHARP_){
var G__28891 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28882_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28891) : fret.call(null,G__28891));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28883_SHARP_){
var G__28902 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28883_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28902) : fret.call(null,G__28902));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32105 = (i + (1));
i = G__32105;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32106 = arguments.length;
var i__4737__auto___32107 = (0);
while(true){
if((i__4737__auto___32107 < len__4736__auto___32106)){
args__4742__auto__.push((arguments[i__4737__auto___32107]));

var G__32109 = (i__4737__auto___32107 + (1));
i__4737__auto___32107 = G__32109;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28917){
var map__28918 = p__28917;
var map__28918__$1 = (((((!((map__28918 == null))))?(((((map__28918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28918):map__28918);
var opts = map__28918__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28908){
var G__28909 = cljs.core.first(seq28908);
var seq28908__$1 = cljs.core.next(seq28908);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28909,seq28908__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__28936 = arguments.length;
switch (G__28936) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28561__auto___32125 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28562__auto__ = (function (){var switch__28401__auto__ = (function (state_28985){
var state_val_28986 = (state_28985[(1)]);
if((state_val_28986 === (7))){
var inst_28981 = (state_28985[(2)]);
var state_28985__$1 = state_28985;
var statearr_29010_32132 = state_28985__$1;
(statearr_29010_32132[(2)] = inst_28981);

(statearr_29010_32132[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28986 === (1))){
var state_28985__$1 = state_28985;
var statearr_29011_32135 = state_28985__$1;
(statearr_29011_32135[(2)] = null);

(statearr_29011_32135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28986 === (4))){
var inst_28956 = (state_28985[(7)]);
var inst_28956__$1 = (state_28985[(2)]);
var inst_28957 = (inst_28956__$1 == null);
var state_28985__$1 = (function (){var statearr_29015 = state_28985;
(statearr_29015[(7)] = inst_28956__$1);

return statearr_29015;
})();
if(cljs.core.truth_(inst_28957)){
var statearr_29017_32142 = state_28985__$1;
(statearr_29017_32142[(1)] = (5));

} else {
var statearr_29018_32148 = state_28985__$1;
(statearr_29018_32148[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28986 === (13))){
var state_28985__$1 = state_28985;
var statearr_29020_32153 = state_28985__$1;
(statearr_29020_32153[(2)] = null);

(statearr_29020_32153[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28986 === (6))){
var inst_28956 = (state_28985[(7)]);
var state_28985__$1 = state_28985;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28985__$1,(11),to,inst_28956);
} else {
if((state_val_28986 === (3))){
var inst_28983 = (state_28985[(2)]);
var state_28985__$1 = state_28985;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28985__$1,inst_28983);
} else {
if((state_val_28986 === (12))){
var state_28985__$1 = state_28985;
var statearr_29024_32158 = state_28985__$1;
(statearr_29024_32158[(2)] = null);

(statearr_29024_32158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28986 === (2))){
var state_28985__$1 = state_28985;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28985__$1,(4),from);
} else {
if((state_val_28986 === (11))){
var inst_28974 = (state_28985[(2)]);
var state_28985__$1 = state_28985;
if(cljs.core.truth_(inst_28974)){
var statearr_29028_32169 = state_28985__$1;
(statearr_29028_32169[(1)] = (12));

} else {
var statearr_29029_32171 = state_28985__$1;
(statearr_29029_32171[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28986 === (9))){
var state_28985__$1 = state_28985;
var statearr_29030_32174 = state_28985__$1;
(statearr_29030_32174[(2)] = null);

(statearr_29030_32174[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28986 === (5))){
var state_28985__$1 = state_28985;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29031_32175 = state_28985__$1;
(statearr_29031_32175[(1)] = (8));

} else {
var statearr_29033_32178 = state_28985__$1;
(statearr_29033_32178[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28986 === (14))){
var inst_28979 = (state_28985[(2)]);
var state_28985__$1 = state_28985;
var statearr_29041_32182 = state_28985__$1;
(statearr_29041_32182[(2)] = inst_28979);

(statearr_29041_32182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28986 === (10))){
var inst_28971 = (state_28985[(2)]);
var state_28985__$1 = state_28985;
var statearr_29043_32187 = state_28985__$1;
(statearr_29043_32187[(2)] = inst_28971);

(statearr_29043_32187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28986 === (8))){
var inst_28962 = cljs.core.async.close_BANG_(to);
var state_28985__$1 = state_28985;
var statearr_29044_32189 = state_28985__$1;
(statearr_29044_32189[(2)] = inst_28962);

(statearr_29044_32189[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28402__auto__ = null;
var cljs$core$async$state_machine__28402__auto____0 = (function (){
var statearr_29045 = [null,null,null,null,null,null,null,null];
(statearr_29045[(0)] = cljs$core$async$state_machine__28402__auto__);

(statearr_29045[(1)] = (1));

return statearr_29045;
});
var cljs$core$async$state_machine__28402__auto____1 = (function (state_28985){
while(true){
var ret_value__28403__auto__ = (function (){try{while(true){
var result__28404__auto__ = switch__28401__auto__(state_28985);
if(cljs.core.keyword_identical_QMARK_(result__28404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28404__auto__;
}
break;
}
}catch (e29046){var ex__28405__auto__ = e29046;
var statearr_29047_32199 = state_28985;
(statearr_29047_32199[(2)] = ex__28405__auto__);


if(cljs.core.seq((state_28985[(4)]))){
var statearr_29048_32209 = state_28985;
(statearr_29048_32209[(1)] = cljs.core.first((state_28985[(4)])));

} else {
throw ex__28405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32214 = state_28985;
state_28985 = G__32214;
continue;
} else {
return ret_value__28403__auto__;
}
break;
}
});
cljs$core$async$state_machine__28402__auto__ = function(state_28985){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28402__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28402__auto____1.call(this,state_28985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28402__auto____0;
cljs$core$async$state_machine__28402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28402__auto____1;
return cljs$core$async$state_machine__28402__auto__;
})()
})();
var state__28563__auto__ = (function (){var statearr_29049 = f__28562__auto__();
(statearr_29049[(6)] = c__28561__auto___32125);

return statearr_29049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28563__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__29065){
var vec__29066 = p__29065;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29066,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29066,(1),null);
var job = vec__29066;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__28561__auto___32223 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28562__auto__ = (function (){var switch__28401__auto__ = (function (state_29073){
var state_val_29074 = (state_29073[(1)]);
if((state_val_29074 === (1))){
var state_29073__$1 = state_29073;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29073__$1,(2),res,v);
} else {
if((state_val_29074 === (2))){
var inst_29070 = (state_29073[(2)]);
var inst_29071 = cljs.core.async.close_BANG_(res);
var state_29073__$1 = (function (){var statearr_29083 = state_29073;
(statearr_29083[(7)] = inst_29070);

return statearr_29083;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29073__$1,inst_29071);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28402__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28402__auto____0 = (function (){
var statearr_29085 = [null,null,null,null,null,null,null,null];
(statearr_29085[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28402__auto__);

(statearr_29085[(1)] = (1));

return statearr_29085;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28402__auto____1 = (function (state_29073){
while(true){
var ret_value__28403__auto__ = (function (){try{while(true){
var result__28404__auto__ = switch__28401__auto__(state_29073);
if(cljs.core.keyword_identical_QMARK_(result__28404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28404__auto__;
}
break;
}
}catch (e29086){var ex__28405__auto__ = e29086;
var statearr_29087_32230 = state_29073;
(statearr_29087_32230[(2)] = ex__28405__auto__);


if(cljs.core.seq((state_29073[(4)]))){
var statearr_29090_32232 = state_29073;
(statearr_29090_32232[(1)] = cljs.core.first((state_29073[(4)])));

} else {
throw ex__28405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32234 = state_29073;
state_29073 = G__32234;
continue;
} else {
return ret_value__28403__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28402__auto__ = function(state_29073){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28402__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28402__auto____1.call(this,state_29073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28402__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28402__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28402__auto__;
})()
})();
var state__28563__auto__ = (function (){var statearr_29095 = f__28562__auto__();
(statearr_29095[(6)] = c__28561__auto___32223);

return statearr_29095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28563__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__29096){
var vec__29097 = p__29096;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29097,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29097,(1),null);
var job = vec__29097;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___32241 = n;
var __32242 = (0);
while(true){
if((__32242 < n__4613__auto___32241)){
var G__29103_32245 = type;
var G__29103_32246__$1 = (((G__29103_32245 instanceof cljs.core.Keyword))?G__29103_32245.fqn:null);
switch (G__29103_32246__$1) {
case "compute":
var c__28561__auto___32248 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32242,c__28561__auto___32248,G__29103_32245,G__29103_32246__$1,n__4613__auto___32241,jobs,results,process,async){
return (function (){
var f__28562__auto__ = (function (){var switch__28401__auto__ = ((function (__32242,c__28561__auto___32248,G__29103_32245,G__29103_32246__$1,n__4613__auto___32241,jobs,results,process,async){
return (function (state_29121){
var state_val_29122 = (state_29121[(1)]);
if((state_val_29122 === (1))){
var state_29121__$1 = state_29121;
var statearr_29125_32250 = state_29121__$1;
(statearr_29125_32250[(2)] = null);

(statearr_29125_32250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29122 === (2))){
var state_29121__$1 = state_29121;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29121__$1,(4),jobs);
} else {
if((state_val_29122 === (3))){
var inst_29119 = (state_29121[(2)]);
var state_29121__$1 = state_29121;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29121__$1,inst_29119);
} else {
if((state_val_29122 === (4))){
var inst_29111 = (state_29121[(2)]);
var inst_29112 = process(inst_29111);
var state_29121__$1 = state_29121;
if(cljs.core.truth_(inst_29112)){
var statearr_29135_32256 = state_29121__$1;
(statearr_29135_32256[(1)] = (5));

} else {
var statearr_29137_32260 = state_29121__$1;
(statearr_29137_32260[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29122 === (5))){
var state_29121__$1 = state_29121;
var statearr_29146_32261 = state_29121__$1;
(statearr_29146_32261[(2)] = null);

(statearr_29146_32261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29122 === (6))){
var state_29121__$1 = state_29121;
var statearr_29151_32262 = state_29121__$1;
(statearr_29151_32262[(2)] = null);

(statearr_29151_32262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29122 === (7))){
var inst_29117 = (state_29121[(2)]);
var state_29121__$1 = state_29121;
var statearr_29159_32267 = state_29121__$1;
(statearr_29159_32267[(2)] = inst_29117);

(statearr_29159_32267[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32242,c__28561__auto___32248,G__29103_32245,G__29103_32246__$1,n__4613__auto___32241,jobs,results,process,async))
;
return ((function (__32242,switch__28401__auto__,c__28561__auto___32248,G__29103_32245,G__29103_32246__$1,n__4613__auto___32241,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28402__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28402__auto____0 = (function (){
var statearr_29161 = [null,null,null,null,null,null,null];
(statearr_29161[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28402__auto__);

(statearr_29161[(1)] = (1));

return statearr_29161;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28402__auto____1 = (function (state_29121){
while(true){
var ret_value__28403__auto__ = (function (){try{while(true){
var result__28404__auto__ = switch__28401__auto__(state_29121);
if(cljs.core.keyword_identical_QMARK_(result__28404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28404__auto__;
}
break;
}
}catch (e29169){var ex__28405__auto__ = e29169;
var statearr_29172_32277 = state_29121;
(statearr_29172_32277[(2)] = ex__28405__auto__);


if(cljs.core.seq((state_29121[(4)]))){
var statearr_29173_32278 = state_29121;
(statearr_29173_32278[(1)] = cljs.core.first((state_29121[(4)])));

} else {
throw ex__28405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32287 = state_29121;
state_29121 = G__32287;
continue;
} else {
return ret_value__28403__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28402__auto__ = function(state_29121){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28402__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28402__auto____1.call(this,state_29121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28402__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28402__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28402__auto__;
})()
;})(__32242,switch__28401__auto__,c__28561__auto___32248,G__29103_32245,G__29103_32246__$1,n__4613__auto___32241,jobs,results,process,async))
})();
var state__28563__auto__ = (function (){var statearr_29175 = f__28562__auto__();
(statearr_29175[(6)] = c__28561__auto___32248);

return statearr_29175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28563__auto__);
});})(__32242,c__28561__auto___32248,G__29103_32245,G__29103_32246__$1,n__4613__auto___32241,jobs,results,process,async))
);


break;
case "async":
var c__28561__auto___32288 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32242,c__28561__auto___32288,G__29103_32245,G__29103_32246__$1,n__4613__auto___32241,jobs,results,process,async){
return (function (){
var f__28562__auto__ = (function (){var switch__28401__auto__ = ((function (__32242,c__28561__auto___32288,G__29103_32245,G__29103_32246__$1,n__4613__auto___32241,jobs,results,process,async){
return (function (state_29189){
var state_val_29190 = (state_29189[(1)]);
if((state_val_29190 === (1))){
var state_29189__$1 = state_29189;
var statearr_29204_32292 = state_29189__$1;
(statearr_29204_32292[(2)] = null);

(statearr_29204_32292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29190 === (2))){
var state_29189__$1 = state_29189;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29189__$1,(4),jobs);
} else {
if((state_val_29190 === (3))){
var inst_29187 = (state_29189[(2)]);
var state_29189__$1 = state_29189;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29189__$1,inst_29187);
} else {
if((state_val_29190 === (4))){
var inst_29179 = (state_29189[(2)]);
var inst_29180 = async(inst_29179);
var state_29189__$1 = state_29189;
if(cljs.core.truth_(inst_29180)){
var statearr_29207_32310 = state_29189__$1;
(statearr_29207_32310[(1)] = (5));

} else {
var statearr_29208_32315 = state_29189__$1;
(statearr_29208_32315[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29190 === (5))){
var state_29189__$1 = state_29189;
var statearr_29210_32319 = state_29189__$1;
(statearr_29210_32319[(2)] = null);

(statearr_29210_32319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29190 === (6))){
var state_29189__$1 = state_29189;
var statearr_29211_32320 = state_29189__$1;
(statearr_29211_32320[(2)] = null);

(statearr_29211_32320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29190 === (7))){
var inst_29185 = (state_29189[(2)]);
var state_29189__$1 = state_29189;
var statearr_29212_32321 = state_29189__$1;
(statearr_29212_32321[(2)] = inst_29185);

(statearr_29212_32321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32242,c__28561__auto___32288,G__29103_32245,G__29103_32246__$1,n__4613__auto___32241,jobs,results,process,async))
;
return ((function (__32242,switch__28401__auto__,c__28561__auto___32288,G__29103_32245,G__29103_32246__$1,n__4613__auto___32241,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28402__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28402__auto____0 = (function (){
var statearr_29213 = [null,null,null,null,null,null,null];
(statearr_29213[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28402__auto__);

(statearr_29213[(1)] = (1));

return statearr_29213;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28402__auto____1 = (function (state_29189){
while(true){
var ret_value__28403__auto__ = (function (){try{while(true){
var result__28404__auto__ = switch__28401__auto__(state_29189);
if(cljs.core.keyword_identical_QMARK_(result__28404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28404__auto__;
}
break;
}
}catch (e29214){var ex__28405__auto__ = e29214;
var statearr_29215_32326 = state_29189;
(statearr_29215_32326[(2)] = ex__28405__auto__);


if(cljs.core.seq((state_29189[(4)]))){
var statearr_29216_32328 = state_29189;
(statearr_29216_32328[(1)] = cljs.core.first((state_29189[(4)])));

} else {
throw ex__28405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32329 = state_29189;
state_29189 = G__32329;
continue;
} else {
return ret_value__28403__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28402__auto__ = function(state_29189){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28402__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28402__auto____1.call(this,state_29189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28402__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28402__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28402__auto__;
})()
;})(__32242,switch__28401__auto__,c__28561__auto___32288,G__29103_32245,G__29103_32246__$1,n__4613__auto___32241,jobs,results,process,async))
})();
var state__28563__auto__ = (function (){var statearr_29217 = f__28562__auto__();
(statearr_29217[(6)] = c__28561__auto___32288);

return statearr_29217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28563__auto__);
});})(__32242,c__28561__auto___32288,G__29103_32245,G__29103_32246__$1,n__4613__auto___32241,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29103_32246__$1)].join('')));

}

var G__32330 = (__32242 + (1));
__32242 = G__32330;
continue;
} else {
}
break;
}

var c__28561__auto___32331 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28562__auto__ = (function (){var switch__28401__auto__ = (function (state_29241){
var state_val_29242 = (state_29241[(1)]);
if((state_val_29242 === (7))){
var inst_29236 = (state_29241[(2)]);
var state_29241__$1 = state_29241;
var statearr_29243_32332 = state_29241__$1;
(statearr_29243_32332[(2)] = inst_29236);

(statearr_29243_32332[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29242 === (1))){
var state_29241__$1 = state_29241;
var statearr_29245_32333 = state_29241__$1;
(statearr_29245_32333[(2)] = null);

(statearr_29245_32333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29242 === (4))){
var inst_29220 = (state_29241[(7)]);
var inst_29220__$1 = (state_29241[(2)]);
var inst_29221 = (inst_29220__$1 == null);
var state_29241__$1 = (function (){var statearr_29246 = state_29241;
(statearr_29246[(7)] = inst_29220__$1);

return statearr_29246;
})();
if(cljs.core.truth_(inst_29221)){
var statearr_29247_32334 = state_29241__$1;
(statearr_29247_32334[(1)] = (5));

} else {
var statearr_29248_32335 = state_29241__$1;
(statearr_29248_32335[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29242 === (6))){
var inst_29220 = (state_29241[(7)]);
var inst_29225 = (state_29241[(8)]);
var inst_29225__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_29227 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29228 = [inst_29220,inst_29225__$1];
var inst_29229 = (new cljs.core.PersistentVector(null,2,(5),inst_29227,inst_29228,null));
var state_29241__$1 = (function (){var statearr_29249 = state_29241;
(statearr_29249[(8)] = inst_29225__$1);

return statearr_29249;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29241__$1,(8),jobs,inst_29229);
} else {
if((state_val_29242 === (3))){
var inst_29238 = (state_29241[(2)]);
var state_29241__$1 = state_29241;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29241__$1,inst_29238);
} else {
if((state_val_29242 === (2))){
var state_29241__$1 = state_29241;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29241__$1,(4),from);
} else {
if((state_val_29242 === (9))){
var inst_29233 = (state_29241[(2)]);
var state_29241__$1 = (function (){var statearr_29253 = state_29241;
(statearr_29253[(9)] = inst_29233);

return statearr_29253;
})();
var statearr_29254_32339 = state_29241__$1;
(statearr_29254_32339[(2)] = null);

(statearr_29254_32339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29242 === (5))){
var inst_29223 = cljs.core.async.close_BANG_(jobs);
var state_29241__$1 = state_29241;
var statearr_29255_32340 = state_29241__$1;
(statearr_29255_32340[(2)] = inst_29223);

(statearr_29255_32340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29242 === (8))){
var inst_29225 = (state_29241[(8)]);
var inst_29231 = (state_29241[(2)]);
var state_29241__$1 = (function (){var statearr_29258 = state_29241;
(statearr_29258[(10)] = inst_29231);

return statearr_29258;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29241__$1,(9),results,inst_29225);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28402__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28402__auto____0 = (function (){
var statearr_29264 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29264[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28402__auto__);

(statearr_29264[(1)] = (1));

return statearr_29264;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28402__auto____1 = (function (state_29241){
while(true){
var ret_value__28403__auto__ = (function (){try{while(true){
var result__28404__auto__ = switch__28401__auto__(state_29241);
if(cljs.core.keyword_identical_QMARK_(result__28404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28404__auto__;
}
break;
}
}catch (e29266){var ex__28405__auto__ = e29266;
var statearr_29267_32348 = state_29241;
(statearr_29267_32348[(2)] = ex__28405__auto__);


if(cljs.core.seq((state_29241[(4)]))){
var statearr_29268_32351 = state_29241;
(statearr_29268_32351[(1)] = cljs.core.first((state_29241[(4)])));

} else {
throw ex__28405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32354 = state_29241;
state_29241 = G__32354;
continue;
} else {
return ret_value__28403__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28402__auto__ = function(state_29241){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28402__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28402__auto____1.call(this,state_29241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28402__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28402__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28402__auto__;
})()
})();
var state__28563__auto__ = (function (){var statearr_29273 = f__28562__auto__();
(statearr_29273[(6)] = c__28561__auto___32331);

return statearr_29273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28563__auto__);
}));


var c__28561__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28562__auto__ = (function (){var switch__28401__auto__ = (function (state_29317){
var state_val_29318 = (state_29317[(1)]);
if((state_val_29318 === (7))){
var inst_29313 = (state_29317[(2)]);
var state_29317__$1 = state_29317;
var statearr_29323_32356 = state_29317__$1;
(statearr_29323_32356[(2)] = inst_29313);

(statearr_29323_32356[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (20))){
var state_29317__$1 = state_29317;
var statearr_29324_32358 = state_29317__$1;
(statearr_29324_32358[(2)] = null);

(statearr_29324_32358[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (1))){
var state_29317__$1 = state_29317;
var statearr_29325_32359 = state_29317__$1;
(statearr_29325_32359[(2)] = null);

(statearr_29325_32359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (4))){
var inst_29276 = (state_29317[(7)]);
var inst_29276__$1 = (state_29317[(2)]);
var inst_29278 = (inst_29276__$1 == null);
var state_29317__$1 = (function (){var statearr_29327 = state_29317;
(statearr_29327[(7)] = inst_29276__$1);

return statearr_29327;
})();
if(cljs.core.truth_(inst_29278)){
var statearr_29328_32367 = state_29317__$1;
(statearr_29328_32367[(1)] = (5));

} else {
var statearr_29329_32368 = state_29317__$1;
(statearr_29329_32368[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (15))){
var inst_29294 = (state_29317[(8)]);
var state_29317__$1 = state_29317;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29317__$1,(18),to,inst_29294);
} else {
if((state_val_29318 === (21))){
var inst_29308 = (state_29317[(2)]);
var state_29317__$1 = state_29317;
var statearr_29330_32369 = state_29317__$1;
(statearr_29330_32369[(2)] = inst_29308);

(statearr_29330_32369[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (13))){
var inst_29310 = (state_29317[(2)]);
var state_29317__$1 = (function (){var statearr_29331 = state_29317;
(statearr_29331[(9)] = inst_29310);

return statearr_29331;
})();
var statearr_29332_32371 = state_29317__$1;
(statearr_29332_32371[(2)] = null);

(statearr_29332_32371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (6))){
var inst_29276 = (state_29317[(7)]);
var state_29317__$1 = state_29317;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29317__$1,(11),inst_29276);
} else {
if((state_val_29318 === (17))){
var inst_29303 = (state_29317[(2)]);
var state_29317__$1 = state_29317;
if(cljs.core.truth_(inst_29303)){
var statearr_29333_32378 = state_29317__$1;
(statearr_29333_32378[(1)] = (19));

} else {
var statearr_29335_32379 = state_29317__$1;
(statearr_29335_32379[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (3))){
var inst_29315 = (state_29317[(2)]);
var state_29317__$1 = state_29317;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29317__$1,inst_29315);
} else {
if((state_val_29318 === (12))){
var inst_29287 = (state_29317[(10)]);
var state_29317__$1 = state_29317;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29317__$1,(14),inst_29287);
} else {
if((state_val_29318 === (2))){
var state_29317__$1 = state_29317;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29317__$1,(4),results);
} else {
if((state_val_29318 === (19))){
var state_29317__$1 = state_29317;
var statearr_29338_32384 = state_29317__$1;
(statearr_29338_32384[(2)] = null);

(statearr_29338_32384[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (11))){
var inst_29287 = (state_29317[(2)]);
var state_29317__$1 = (function (){var statearr_29339 = state_29317;
(statearr_29339[(10)] = inst_29287);

return statearr_29339;
})();
var statearr_29340_32388 = state_29317__$1;
(statearr_29340_32388[(2)] = null);

(statearr_29340_32388[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (9))){
var state_29317__$1 = state_29317;
var statearr_29341_32393 = state_29317__$1;
(statearr_29341_32393[(2)] = null);

(statearr_29341_32393[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (5))){
var state_29317__$1 = state_29317;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29342_32400 = state_29317__$1;
(statearr_29342_32400[(1)] = (8));

} else {
var statearr_29343_32401 = state_29317__$1;
(statearr_29343_32401[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (14))){
var inst_29294 = (state_29317[(8)]);
var inst_29294__$1 = (state_29317[(2)]);
var inst_29295 = (inst_29294__$1 == null);
var inst_29296 = cljs.core.not(inst_29295);
var state_29317__$1 = (function (){var statearr_29347 = state_29317;
(statearr_29347[(8)] = inst_29294__$1);

return statearr_29347;
})();
if(inst_29296){
var statearr_29349_32404 = state_29317__$1;
(statearr_29349_32404[(1)] = (15));

} else {
var statearr_29350_32406 = state_29317__$1;
(statearr_29350_32406[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (16))){
var state_29317__$1 = state_29317;
var statearr_29351_32407 = state_29317__$1;
(statearr_29351_32407[(2)] = false);

(statearr_29351_32407[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (10))){
var inst_29284 = (state_29317[(2)]);
var state_29317__$1 = state_29317;
var statearr_29352_32408 = state_29317__$1;
(statearr_29352_32408[(2)] = inst_29284);

(statearr_29352_32408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (18))){
var inst_29300 = (state_29317[(2)]);
var state_29317__$1 = state_29317;
var statearr_29353_32409 = state_29317__$1;
(statearr_29353_32409[(2)] = inst_29300);

(statearr_29353_32409[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (8))){
var inst_29281 = cljs.core.async.close_BANG_(to);
var state_29317__$1 = state_29317;
var statearr_29357_32412 = state_29317__$1;
(statearr_29357_32412[(2)] = inst_29281);

(statearr_29357_32412[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28402__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28402__auto____0 = (function (){
var statearr_29358 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29358[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28402__auto__);

(statearr_29358[(1)] = (1));

return statearr_29358;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28402__auto____1 = (function (state_29317){
while(true){
var ret_value__28403__auto__ = (function (){try{while(true){
var result__28404__auto__ = switch__28401__auto__(state_29317);
if(cljs.core.keyword_identical_QMARK_(result__28404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28404__auto__;
}
break;
}
}catch (e29359){var ex__28405__auto__ = e29359;
var statearr_29360_32413 = state_29317;
(statearr_29360_32413[(2)] = ex__28405__auto__);


if(cljs.core.seq((state_29317[(4)]))){
var statearr_29361_32414 = state_29317;
(statearr_29361_32414[(1)] = cljs.core.first((state_29317[(4)])));

} else {
throw ex__28405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32421 = state_29317;
state_29317 = G__32421;
continue;
} else {
return ret_value__28403__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28402__auto__ = function(state_29317){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28402__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28402__auto____1.call(this,state_29317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28402__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28402__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28402__auto__;
})()
})();
var state__28563__auto__ = (function (){var statearr_29363 = f__28562__auto__();
(statearr_29363[(6)] = c__28561__auto__);

return statearr_29363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28563__auto__);
}));

return c__28561__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__29366 = arguments.length;
switch (G__29366) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__29376 = arguments.length;
switch (G__29376) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__29383 = arguments.length;
switch (G__29383) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__28561__auto___32443 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28562__auto__ = (function (){var switch__28401__auto__ = (function (state_29415){
var state_val_29416 = (state_29415[(1)]);
if((state_val_29416 === (7))){
var inst_29411 = (state_29415[(2)]);
var state_29415__$1 = state_29415;
var statearr_29420_32444 = state_29415__$1;
(statearr_29420_32444[(2)] = inst_29411);

(statearr_29420_32444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (1))){
var state_29415__$1 = state_29415;
var statearr_29421_32445 = state_29415__$1;
(statearr_29421_32445[(2)] = null);

(statearr_29421_32445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (4))){
var inst_29392 = (state_29415[(7)]);
var inst_29392__$1 = (state_29415[(2)]);
var inst_29393 = (inst_29392__$1 == null);
var state_29415__$1 = (function (){var statearr_29423 = state_29415;
(statearr_29423[(7)] = inst_29392__$1);

return statearr_29423;
})();
if(cljs.core.truth_(inst_29393)){
var statearr_29424_32448 = state_29415__$1;
(statearr_29424_32448[(1)] = (5));

} else {
var statearr_29425_32455 = state_29415__$1;
(statearr_29425_32455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (13))){
var state_29415__$1 = state_29415;
var statearr_29426_32457 = state_29415__$1;
(statearr_29426_32457[(2)] = null);

(statearr_29426_32457[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (6))){
var inst_29392 = (state_29415[(7)]);
var inst_29398 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_29392) : p.call(null,inst_29392));
var state_29415__$1 = state_29415;
if(cljs.core.truth_(inst_29398)){
var statearr_29427_32460 = state_29415__$1;
(statearr_29427_32460[(1)] = (9));

} else {
var statearr_29428_32461 = state_29415__$1;
(statearr_29428_32461[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (3))){
var inst_29413 = (state_29415[(2)]);
var state_29415__$1 = state_29415;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29415__$1,inst_29413);
} else {
if((state_val_29416 === (12))){
var state_29415__$1 = state_29415;
var statearr_29429_32464 = state_29415__$1;
(statearr_29429_32464[(2)] = null);

(statearr_29429_32464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (2))){
var state_29415__$1 = state_29415;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29415__$1,(4),ch);
} else {
if((state_val_29416 === (11))){
var inst_29392 = (state_29415[(7)]);
var inst_29402 = (state_29415[(2)]);
var state_29415__$1 = state_29415;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29415__$1,(8),inst_29402,inst_29392);
} else {
if((state_val_29416 === (9))){
var state_29415__$1 = state_29415;
var statearr_29430_32466 = state_29415__$1;
(statearr_29430_32466[(2)] = tc);

(statearr_29430_32466[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (5))){
var inst_29395 = cljs.core.async.close_BANG_(tc);
var inst_29396 = cljs.core.async.close_BANG_(fc);
var state_29415__$1 = (function (){var statearr_29431 = state_29415;
(statearr_29431[(8)] = inst_29395);

return statearr_29431;
})();
var statearr_29432_32468 = state_29415__$1;
(statearr_29432_32468[(2)] = inst_29396);

(statearr_29432_32468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (14))){
var inst_29409 = (state_29415[(2)]);
var state_29415__$1 = state_29415;
var statearr_29433_32471 = state_29415__$1;
(statearr_29433_32471[(2)] = inst_29409);

(statearr_29433_32471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (10))){
var state_29415__$1 = state_29415;
var statearr_29434_32472 = state_29415__$1;
(statearr_29434_32472[(2)] = fc);

(statearr_29434_32472[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (8))){
var inst_29404 = (state_29415[(2)]);
var state_29415__$1 = state_29415;
if(cljs.core.truth_(inst_29404)){
var statearr_29435_32475 = state_29415__$1;
(statearr_29435_32475[(1)] = (12));

} else {
var statearr_29439_32476 = state_29415__$1;
(statearr_29439_32476[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28402__auto__ = null;
var cljs$core$async$state_machine__28402__auto____0 = (function (){
var statearr_29440 = [null,null,null,null,null,null,null,null,null];
(statearr_29440[(0)] = cljs$core$async$state_machine__28402__auto__);

(statearr_29440[(1)] = (1));

return statearr_29440;
});
var cljs$core$async$state_machine__28402__auto____1 = (function (state_29415){
while(true){
var ret_value__28403__auto__ = (function (){try{while(true){
var result__28404__auto__ = switch__28401__auto__(state_29415);
if(cljs.core.keyword_identical_QMARK_(result__28404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28404__auto__;
}
break;
}
}catch (e29441){var ex__28405__auto__ = e29441;
var statearr_29442_32478 = state_29415;
(statearr_29442_32478[(2)] = ex__28405__auto__);


if(cljs.core.seq((state_29415[(4)]))){
var statearr_29444_32479 = state_29415;
(statearr_29444_32479[(1)] = cljs.core.first((state_29415[(4)])));

} else {
throw ex__28405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32482 = state_29415;
state_29415 = G__32482;
continue;
} else {
return ret_value__28403__auto__;
}
break;
}
});
cljs$core$async$state_machine__28402__auto__ = function(state_29415){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28402__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28402__auto____1.call(this,state_29415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28402__auto____0;
cljs$core$async$state_machine__28402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28402__auto____1;
return cljs$core$async$state_machine__28402__auto__;
})()
})();
var state__28563__auto__ = (function (){var statearr_29449 = f__28562__auto__();
(statearr_29449[(6)] = c__28561__auto___32443);

return statearr_29449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28563__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28561__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28562__auto__ = (function (){var switch__28401__auto__ = (function (state_29474){
var state_val_29475 = (state_29474[(1)]);
if((state_val_29475 === (7))){
var inst_29469 = (state_29474[(2)]);
var state_29474__$1 = state_29474;
var statearr_29509_32490 = state_29474__$1;
(statearr_29509_32490[(2)] = inst_29469);

(statearr_29509_32490[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29475 === (1))){
var inst_29452 = init;
var inst_29453 = inst_29452;
var state_29474__$1 = (function (){var statearr_29514 = state_29474;
(statearr_29514[(7)] = inst_29453);

return statearr_29514;
})();
var statearr_29515_32495 = state_29474__$1;
(statearr_29515_32495[(2)] = null);

(statearr_29515_32495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29475 === (4))){
var inst_29456 = (state_29474[(8)]);
var inst_29456__$1 = (state_29474[(2)]);
var inst_29457 = (inst_29456__$1 == null);
var state_29474__$1 = (function (){var statearr_29516 = state_29474;
(statearr_29516[(8)] = inst_29456__$1);

return statearr_29516;
})();
if(cljs.core.truth_(inst_29457)){
var statearr_29517_32496 = state_29474__$1;
(statearr_29517_32496[(1)] = (5));

} else {
var statearr_29524_32497 = state_29474__$1;
(statearr_29524_32497[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29475 === (6))){
var inst_29453 = (state_29474[(7)]);
var inst_29460 = (state_29474[(9)]);
var inst_29456 = (state_29474[(8)]);
var inst_29460__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_29453,inst_29456) : f.call(null,inst_29453,inst_29456));
var inst_29461 = cljs.core.reduced_QMARK_(inst_29460__$1);
var state_29474__$1 = (function (){var statearr_29528 = state_29474;
(statearr_29528[(9)] = inst_29460__$1);

return statearr_29528;
})();
if(inst_29461){
var statearr_29529_32511 = state_29474__$1;
(statearr_29529_32511[(1)] = (8));

} else {
var statearr_29530_32512 = state_29474__$1;
(statearr_29530_32512[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29475 === (3))){
var inst_29471 = (state_29474[(2)]);
var state_29474__$1 = state_29474;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29474__$1,inst_29471);
} else {
if((state_val_29475 === (2))){
var state_29474__$1 = state_29474;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29474__$1,(4),ch);
} else {
if((state_val_29475 === (9))){
var inst_29460 = (state_29474[(9)]);
var inst_29453 = inst_29460;
var state_29474__$1 = (function (){var statearr_29533 = state_29474;
(statearr_29533[(7)] = inst_29453);

return statearr_29533;
})();
var statearr_29534_32517 = state_29474__$1;
(statearr_29534_32517[(2)] = null);

(statearr_29534_32517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29475 === (5))){
var inst_29453 = (state_29474[(7)]);
var state_29474__$1 = state_29474;
var statearr_29535_32518 = state_29474__$1;
(statearr_29535_32518[(2)] = inst_29453);

(statearr_29535_32518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29475 === (10))){
var inst_29467 = (state_29474[(2)]);
var state_29474__$1 = state_29474;
var statearr_29538_32519 = state_29474__$1;
(statearr_29538_32519[(2)] = inst_29467);

(statearr_29538_32519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29475 === (8))){
var inst_29460 = (state_29474[(9)]);
var inst_29463 = cljs.core.deref(inst_29460);
var state_29474__$1 = state_29474;
var statearr_29540_32521 = state_29474__$1;
(statearr_29540_32521[(2)] = inst_29463);

(statearr_29540_32521[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__28402__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28402__auto____0 = (function (){
var statearr_29542 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29542[(0)] = cljs$core$async$reduce_$_state_machine__28402__auto__);

(statearr_29542[(1)] = (1));

return statearr_29542;
});
var cljs$core$async$reduce_$_state_machine__28402__auto____1 = (function (state_29474){
while(true){
var ret_value__28403__auto__ = (function (){try{while(true){
var result__28404__auto__ = switch__28401__auto__(state_29474);
if(cljs.core.keyword_identical_QMARK_(result__28404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28404__auto__;
}
break;
}
}catch (e29543){var ex__28405__auto__ = e29543;
var statearr_29544_32525 = state_29474;
(statearr_29544_32525[(2)] = ex__28405__auto__);


if(cljs.core.seq((state_29474[(4)]))){
var statearr_29545_32527 = state_29474;
(statearr_29545_32527[(1)] = cljs.core.first((state_29474[(4)])));

} else {
throw ex__28405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32529 = state_29474;
state_29474 = G__32529;
continue;
} else {
return ret_value__28403__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28402__auto__ = function(state_29474){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28402__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28402__auto____1.call(this,state_29474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28402__auto____0;
cljs$core$async$reduce_$_state_machine__28402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28402__auto____1;
return cljs$core$async$reduce_$_state_machine__28402__auto__;
})()
})();
var state__28563__auto__ = (function (){var statearr_29546 = f__28562__auto__();
(statearr_29546[(6)] = c__28561__auto__);

return statearr_29546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28563__auto__);
}));

return c__28561__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__28561__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28562__auto__ = (function (){var switch__28401__auto__ = (function (state_29556){
var state_val_29557 = (state_29556[(1)]);
if((state_val_29557 === (1))){
var inst_29549 = cljs.core.async.reduce(f__$1,init,ch);
var state_29556__$1 = state_29556;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29556__$1,(2),inst_29549);
} else {
if((state_val_29557 === (2))){
var inst_29551 = (state_29556[(2)]);
var inst_29552 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_29551) : f__$1.call(null,inst_29551));
var state_29556__$1 = state_29556;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29556__$1,inst_29552);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__28402__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28402__auto____0 = (function (){
var statearr_29568 = [null,null,null,null,null,null,null];
(statearr_29568[(0)] = cljs$core$async$transduce_$_state_machine__28402__auto__);

(statearr_29568[(1)] = (1));

return statearr_29568;
});
var cljs$core$async$transduce_$_state_machine__28402__auto____1 = (function (state_29556){
while(true){
var ret_value__28403__auto__ = (function (){try{while(true){
var result__28404__auto__ = switch__28401__auto__(state_29556);
if(cljs.core.keyword_identical_QMARK_(result__28404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28404__auto__;
}
break;
}
}catch (e29573){var ex__28405__auto__ = e29573;
var statearr_29575_32539 = state_29556;
(statearr_29575_32539[(2)] = ex__28405__auto__);


if(cljs.core.seq((state_29556[(4)]))){
var statearr_29577_32540 = state_29556;
(statearr_29577_32540[(1)] = cljs.core.first((state_29556[(4)])));

} else {
throw ex__28405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32541 = state_29556;
state_29556 = G__32541;
continue;
} else {
return ret_value__28403__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28402__auto__ = function(state_29556){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28402__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28402__auto____1.call(this,state_29556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28402__auto____0;
cljs$core$async$transduce_$_state_machine__28402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28402__auto____1;
return cljs$core$async$transduce_$_state_machine__28402__auto__;
})()
})();
var state__28563__auto__ = (function (){var statearr_29579 = f__28562__auto__();
(statearr_29579[(6)] = c__28561__auto__);

return statearr_29579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28563__auto__);
}));

return c__28561__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__29585 = arguments.length;
switch (G__29585) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28561__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28562__auto__ = (function (){var switch__28401__auto__ = (function (state_29618){
var state_val_29619 = (state_29618[(1)]);
if((state_val_29619 === (7))){
var inst_29596 = (state_29618[(2)]);
var state_29618__$1 = state_29618;
var statearr_29622_32548 = state_29618__$1;
(statearr_29622_32548[(2)] = inst_29596);

(statearr_29622_32548[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29619 === (1))){
var inst_29590 = cljs.core.seq(coll);
var inst_29591 = inst_29590;
var state_29618__$1 = (function (){var statearr_29623 = state_29618;
(statearr_29623[(7)] = inst_29591);

return statearr_29623;
})();
var statearr_29626_32549 = state_29618__$1;
(statearr_29626_32549[(2)] = null);

(statearr_29626_32549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29619 === (4))){
var inst_29591 = (state_29618[(7)]);
var inst_29594 = cljs.core.first(inst_29591);
var state_29618__$1 = state_29618;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29618__$1,(7),ch,inst_29594);
} else {
if((state_val_29619 === (13))){
var inst_29610 = (state_29618[(2)]);
var state_29618__$1 = state_29618;
var statearr_29630_32550 = state_29618__$1;
(statearr_29630_32550[(2)] = inst_29610);

(statearr_29630_32550[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29619 === (6))){
var inst_29599 = (state_29618[(2)]);
var state_29618__$1 = state_29618;
if(cljs.core.truth_(inst_29599)){
var statearr_29633_32555 = state_29618__$1;
(statearr_29633_32555[(1)] = (8));

} else {
var statearr_29634_32556 = state_29618__$1;
(statearr_29634_32556[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29619 === (3))){
var inst_29614 = (state_29618[(2)]);
var state_29618__$1 = state_29618;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29618__$1,inst_29614);
} else {
if((state_val_29619 === (12))){
var state_29618__$1 = state_29618;
var statearr_29639_32557 = state_29618__$1;
(statearr_29639_32557[(2)] = null);

(statearr_29639_32557[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29619 === (2))){
var inst_29591 = (state_29618[(7)]);
var state_29618__$1 = state_29618;
if(cljs.core.truth_(inst_29591)){
var statearr_29643_32563 = state_29618__$1;
(statearr_29643_32563[(1)] = (4));

} else {
var statearr_29644_32564 = state_29618__$1;
(statearr_29644_32564[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29619 === (11))){
var inst_29607 = cljs.core.async.close_BANG_(ch);
var state_29618__$1 = state_29618;
var statearr_29648_32566 = state_29618__$1;
(statearr_29648_32566[(2)] = inst_29607);

(statearr_29648_32566[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29619 === (9))){
var state_29618__$1 = state_29618;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29649_32569 = state_29618__$1;
(statearr_29649_32569[(1)] = (11));

} else {
var statearr_29653_32570 = state_29618__$1;
(statearr_29653_32570[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29619 === (5))){
var inst_29591 = (state_29618[(7)]);
var state_29618__$1 = state_29618;
var statearr_29662_32575 = state_29618__$1;
(statearr_29662_32575[(2)] = inst_29591);

(statearr_29662_32575[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29619 === (10))){
var inst_29612 = (state_29618[(2)]);
var state_29618__$1 = state_29618;
var statearr_29666_32577 = state_29618__$1;
(statearr_29666_32577[(2)] = inst_29612);

(statearr_29666_32577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29619 === (8))){
var inst_29591 = (state_29618[(7)]);
var inst_29601 = cljs.core.next(inst_29591);
var inst_29591__$1 = inst_29601;
var state_29618__$1 = (function (){var statearr_29667 = state_29618;
(statearr_29667[(7)] = inst_29591__$1);

return statearr_29667;
})();
var statearr_29668_32579 = state_29618__$1;
(statearr_29668_32579[(2)] = null);

(statearr_29668_32579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28402__auto__ = null;
var cljs$core$async$state_machine__28402__auto____0 = (function (){
var statearr_29669 = [null,null,null,null,null,null,null,null];
(statearr_29669[(0)] = cljs$core$async$state_machine__28402__auto__);

(statearr_29669[(1)] = (1));

return statearr_29669;
});
var cljs$core$async$state_machine__28402__auto____1 = (function (state_29618){
while(true){
var ret_value__28403__auto__ = (function (){try{while(true){
var result__28404__auto__ = switch__28401__auto__(state_29618);
if(cljs.core.keyword_identical_QMARK_(result__28404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28404__auto__;
}
break;
}
}catch (e29677){var ex__28405__auto__ = e29677;
var statearr_29678_32588 = state_29618;
(statearr_29678_32588[(2)] = ex__28405__auto__);


if(cljs.core.seq((state_29618[(4)]))){
var statearr_29679_32592 = state_29618;
(statearr_29679_32592[(1)] = cljs.core.first((state_29618[(4)])));

} else {
throw ex__28405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32597 = state_29618;
state_29618 = G__32597;
continue;
} else {
return ret_value__28403__auto__;
}
break;
}
});
cljs$core$async$state_machine__28402__auto__ = function(state_29618){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28402__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28402__auto____1.call(this,state_29618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28402__auto____0;
cljs$core$async$state_machine__28402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28402__auto____1;
return cljs$core$async$state_machine__28402__auto__;
})()
})();
var state__28563__auto__ = (function (){var statearr_29683 = f__28562__auto__();
(statearr_29683[(6)] = c__28561__auto__);

return statearr_29683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28563__auto__);
}));

return c__28561__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__29685 = arguments.length;
switch (G__29685) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_32613 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_32613(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_32617 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_32617(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_32629 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_32629(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_32630 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_32630(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29732 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29732 = (function (ch,cs,meta29733){
this.ch = ch;
this.cs = cs;
this.meta29733 = meta29733;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29732.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29734,meta29733__$1){
var self__ = this;
var _29734__$1 = this;
return (new cljs.core.async.t_cljs$core$async29732(self__.ch,self__.cs,meta29733__$1));
}));

(cljs.core.async.t_cljs$core$async29732.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29734){
var self__ = this;
var _29734__$1 = this;
return self__.meta29733;
}));

(cljs.core.async.t_cljs$core$async29732.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29732.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async29732.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29732.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async29732.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async29732.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async29732.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29733","meta29733",1776488162,null)], null);
}));

(cljs.core.async.t_cljs$core$async29732.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29732.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29732");

(cljs.core.async.t_cljs$core$async29732.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async29732");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29732.
 */
cljs.core.async.__GT_t_cljs$core$async29732 = (function cljs$core$async$mult_$___GT_t_cljs$core$async29732(ch__$1,cs__$1,meta29733){
return (new cljs.core.async.t_cljs$core$async29732(ch__$1,cs__$1,meta29733));
});

}

return (new cljs.core.async.t_cljs$core$async29732(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__28561__auto___32640 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28562__auto__ = (function (){var switch__28401__auto__ = (function (state_29902){
var state_val_29903 = (state_29902[(1)]);
if((state_val_29903 === (7))){
var inst_29891 = (state_29902[(2)]);
var state_29902__$1 = state_29902;
var statearr_29913_32641 = state_29902__$1;
(statearr_29913_32641[(2)] = inst_29891);

(statearr_29913_32641[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (20))){
var inst_29781 = (state_29902[(7)]);
var inst_29802 = cljs.core.first(inst_29781);
var inst_29803 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29802,(0),null);
var inst_29804 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29802,(1),null);
var state_29902__$1 = (function (){var statearr_29914 = state_29902;
(statearr_29914[(8)] = inst_29803);

return statearr_29914;
})();
if(cljs.core.truth_(inst_29804)){
var statearr_29915_32644 = state_29902__$1;
(statearr_29915_32644[(1)] = (22));

} else {
var statearr_29916_32645 = state_29902__$1;
(statearr_29916_32645[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (27))){
var inst_29835 = (state_29902[(9)]);
var inst_29833 = (state_29902[(10)]);
var inst_29749 = (state_29902[(11)]);
var inst_29840 = (state_29902[(12)]);
var inst_29840__$1 = cljs.core._nth(inst_29833,inst_29835);
var inst_29841 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_29840__$1,inst_29749,done);
var state_29902__$1 = (function (){var statearr_29917 = state_29902;
(statearr_29917[(12)] = inst_29840__$1);

return statearr_29917;
})();
if(cljs.core.truth_(inst_29841)){
var statearr_29918_32647 = state_29902__$1;
(statearr_29918_32647[(1)] = (30));

} else {
var statearr_29919_32648 = state_29902__$1;
(statearr_29919_32648[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (1))){
var state_29902__$1 = state_29902;
var statearr_29920_32650 = state_29902__$1;
(statearr_29920_32650[(2)] = null);

(statearr_29920_32650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (24))){
var inst_29781 = (state_29902[(7)]);
var inst_29810 = (state_29902[(2)]);
var inst_29811 = cljs.core.next(inst_29781);
var inst_29758 = inst_29811;
var inst_29759 = null;
var inst_29760 = (0);
var inst_29761 = (0);
var state_29902__$1 = (function (){var statearr_29933 = state_29902;
(statearr_29933[(13)] = inst_29759);

(statearr_29933[(14)] = inst_29810);

(statearr_29933[(15)] = inst_29758);

(statearr_29933[(16)] = inst_29760);

(statearr_29933[(17)] = inst_29761);

return statearr_29933;
})();
var statearr_29935_32651 = state_29902__$1;
(statearr_29935_32651[(2)] = null);

(statearr_29935_32651[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (39))){
var state_29902__$1 = state_29902;
var statearr_29942_32652 = state_29902__$1;
(statearr_29942_32652[(2)] = null);

(statearr_29942_32652[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (4))){
var inst_29749 = (state_29902[(11)]);
var inst_29749__$1 = (state_29902[(2)]);
var inst_29750 = (inst_29749__$1 == null);
var state_29902__$1 = (function (){var statearr_29943 = state_29902;
(statearr_29943[(11)] = inst_29749__$1);

return statearr_29943;
})();
if(cljs.core.truth_(inst_29750)){
var statearr_29946_32660 = state_29902__$1;
(statearr_29946_32660[(1)] = (5));

} else {
var statearr_29948_32661 = state_29902__$1;
(statearr_29948_32661[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (15))){
var inst_29759 = (state_29902[(13)]);
var inst_29758 = (state_29902[(15)]);
var inst_29760 = (state_29902[(16)]);
var inst_29761 = (state_29902[(17)]);
var inst_29777 = (state_29902[(2)]);
var inst_29778 = (inst_29761 + (1));
var tmp29938 = inst_29759;
var tmp29939 = inst_29758;
var tmp29940 = inst_29760;
var inst_29758__$1 = tmp29939;
var inst_29759__$1 = tmp29938;
var inst_29760__$1 = tmp29940;
var inst_29761__$1 = inst_29778;
var state_29902__$1 = (function (){var statearr_29949 = state_29902;
(statearr_29949[(13)] = inst_29759__$1);

(statearr_29949[(18)] = inst_29777);

(statearr_29949[(15)] = inst_29758__$1);

(statearr_29949[(16)] = inst_29760__$1);

(statearr_29949[(17)] = inst_29761__$1);

return statearr_29949;
})();
var statearr_29953_32665 = state_29902__$1;
(statearr_29953_32665[(2)] = null);

(statearr_29953_32665[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (21))){
var inst_29814 = (state_29902[(2)]);
var state_29902__$1 = state_29902;
var statearr_29957_32672 = state_29902__$1;
(statearr_29957_32672[(2)] = inst_29814);

(statearr_29957_32672[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (31))){
var inst_29840 = (state_29902[(12)]);
var inst_29844 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_29840);
var state_29902__$1 = state_29902;
var statearr_29960_32675 = state_29902__$1;
(statearr_29960_32675[(2)] = inst_29844);

(statearr_29960_32675[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (32))){
var inst_29832 = (state_29902[(19)]);
var inst_29835 = (state_29902[(9)]);
var inst_29833 = (state_29902[(10)]);
var inst_29834 = (state_29902[(20)]);
var inst_29846 = (state_29902[(2)]);
var inst_29847 = (inst_29835 + (1));
var tmp29954 = inst_29832;
var tmp29955 = inst_29833;
var tmp29956 = inst_29834;
var inst_29832__$1 = tmp29954;
var inst_29833__$1 = tmp29955;
var inst_29834__$1 = tmp29956;
var inst_29835__$1 = inst_29847;
var state_29902__$1 = (function (){var statearr_29961 = state_29902;
(statearr_29961[(19)] = inst_29832__$1);

(statearr_29961[(9)] = inst_29835__$1);

(statearr_29961[(10)] = inst_29833__$1);

(statearr_29961[(21)] = inst_29846);

(statearr_29961[(20)] = inst_29834__$1);

return statearr_29961;
})();
var statearr_29962_32684 = state_29902__$1;
(statearr_29962_32684[(2)] = null);

(statearr_29962_32684[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (40))){
var inst_29864 = (state_29902[(22)]);
var inst_29868 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_29864);
var state_29902__$1 = state_29902;
var statearr_29964_32686 = state_29902__$1;
(statearr_29964_32686[(2)] = inst_29868);

(statearr_29964_32686[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (33))){
var inst_29850 = (state_29902[(23)]);
var inst_29852 = cljs.core.chunked_seq_QMARK_(inst_29850);
var state_29902__$1 = state_29902;
if(inst_29852){
var statearr_29969_32690 = state_29902__$1;
(statearr_29969_32690[(1)] = (36));

} else {
var statearr_29970_32692 = state_29902__$1;
(statearr_29970_32692[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (13))){
var inst_29771 = (state_29902[(24)]);
var inst_29774 = cljs.core.async.close_BANG_(inst_29771);
var state_29902__$1 = state_29902;
var statearr_29971_32694 = state_29902__$1;
(statearr_29971_32694[(2)] = inst_29774);

(statearr_29971_32694[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (22))){
var inst_29803 = (state_29902[(8)]);
var inst_29807 = cljs.core.async.close_BANG_(inst_29803);
var state_29902__$1 = state_29902;
var statearr_29972_32696 = state_29902__$1;
(statearr_29972_32696[(2)] = inst_29807);

(statearr_29972_32696[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (36))){
var inst_29850 = (state_29902[(23)]);
var inst_29857 = cljs.core.chunk_first(inst_29850);
var inst_29860 = cljs.core.chunk_rest(inst_29850);
var inst_29861 = cljs.core.count(inst_29857);
var inst_29832 = inst_29860;
var inst_29833 = inst_29857;
var inst_29834 = inst_29861;
var inst_29835 = (0);
var state_29902__$1 = (function (){var statearr_29973 = state_29902;
(statearr_29973[(19)] = inst_29832);

(statearr_29973[(9)] = inst_29835);

(statearr_29973[(10)] = inst_29833);

(statearr_29973[(20)] = inst_29834);

return statearr_29973;
})();
var statearr_29974_32706 = state_29902__$1;
(statearr_29974_32706[(2)] = null);

(statearr_29974_32706[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (41))){
var inst_29850 = (state_29902[(23)]);
var inst_29870 = (state_29902[(2)]);
var inst_29871 = cljs.core.next(inst_29850);
var inst_29832 = inst_29871;
var inst_29833 = null;
var inst_29834 = (0);
var inst_29835 = (0);
var state_29902__$1 = (function (){var statearr_29975 = state_29902;
(statearr_29975[(25)] = inst_29870);

(statearr_29975[(19)] = inst_29832);

(statearr_29975[(9)] = inst_29835);

(statearr_29975[(10)] = inst_29833);

(statearr_29975[(20)] = inst_29834);

return statearr_29975;
})();
var statearr_29976_32711 = state_29902__$1;
(statearr_29976_32711[(2)] = null);

(statearr_29976_32711[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (43))){
var state_29902__$1 = state_29902;
var statearr_29978_32716 = state_29902__$1;
(statearr_29978_32716[(2)] = null);

(statearr_29978_32716[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (29))){
var inst_29879 = (state_29902[(2)]);
var state_29902__$1 = state_29902;
var statearr_29989_32725 = state_29902__$1;
(statearr_29989_32725[(2)] = inst_29879);

(statearr_29989_32725[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (44))){
var inst_29888 = (state_29902[(2)]);
var state_29902__$1 = (function (){var statearr_29990 = state_29902;
(statearr_29990[(26)] = inst_29888);

return statearr_29990;
})();
var statearr_29994_32751 = state_29902__$1;
(statearr_29994_32751[(2)] = null);

(statearr_29994_32751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (6))){
var inst_29824 = (state_29902[(27)]);
var inst_29823 = cljs.core.deref(cs);
var inst_29824__$1 = cljs.core.keys(inst_29823);
var inst_29825 = cljs.core.count(inst_29824__$1);
var inst_29826 = cljs.core.reset_BANG_(dctr,inst_29825);
var inst_29831 = cljs.core.seq(inst_29824__$1);
var inst_29832 = inst_29831;
var inst_29833 = null;
var inst_29834 = (0);
var inst_29835 = (0);
var state_29902__$1 = (function (){var statearr_30000 = state_29902;
(statearr_30000[(28)] = inst_29826);

(statearr_30000[(19)] = inst_29832);

(statearr_30000[(9)] = inst_29835);

(statearr_30000[(10)] = inst_29833);

(statearr_30000[(27)] = inst_29824__$1);

(statearr_30000[(20)] = inst_29834);

return statearr_30000;
})();
var statearr_30001_32754 = state_29902__$1;
(statearr_30001_32754[(2)] = null);

(statearr_30001_32754[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (28))){
var inst_29850 = (state_29902[(23)]);
var inst_29832 = (state_29902[(19)]);
var inst_29850__$1 = cljs.core.seq(inst_29832);
var state_29902__$1 = (function (){var statearr_30002 = state_29902;
(statearr_30002[(23)] = inst_29850__$1);

return statearr_30002;
})();
if(inst_29850__$1){
var statearr_30003_32755 = state_29902__$1;
(statearr_30003_32755[(1)] = (33));

} else {
var statearr_30005_32756 = state_29902__$1;
(statearr_30005_32756[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (25))){
var inst_29835 = (state_29902[(9)]);
var inst_29834 = (state_29902[(20)]);
var inst_29837 = (inst_29835 < inst_29834);
var inst_29838 = inst_29837;
var state_29902__$1 = state_29902;
if(cljs.core.truth_(inst_29838)){
var statearr_30010_32757 = state_29902__$1;
(statearr_30010_32757[(1)] = (27));

} else {
var statearr_30011_32759 = state_29902__$1;
(statearr_30011_32759[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (34))){
var state_29902__$1 = state_29902;
var statearr_30013_32760 = state_29902__$1;
(statearr_30013_32760[(2)] = null);

(statearr_30013_32760[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (17))){
var state_29902__$1 = state_29902;
var statearr_30019_32761 = state_29902__$1;
(statearr_30019_32761[(2)] = null);

(statearr_30019_32761[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (3))){
var inst_29893 = (state_29902[(2)]);
var state_29902__$1 = state_29902;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29902__$1,inst_29893);
} else {
if((state_val_29903 === (12))){
var inst_29819 = (state_29902[(2)]);
var state_29902__$1 = state_29902;
var statearr_30024_32763 = state_29902__$1;
(statearr_30024_32763[(2)] = inst_29819);

(statearr_30024_32763[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (2))){
var state_29902__$1 = state_29902;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29902__$1,(4),ch);
} else {
if((state_val_29903 === (23))){
var state_29902__$1 = state_29902;
var statearr_30032_32769 = state_29902__$1;
(statearr_30032_32769[(2)] = null);

(statearr_30032_32769[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (35))){
var inst_29877 = (state_29902[(2)]);
var state_29902__$1 = state_29902;
var statearr_30039_32771 = state_29902__$1;
(statearr_30039_32771[(2)] = inst_29877);

(statearr_30039_32771[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (19))){
var inst_29781 = (state_29902[(7)]);
var inst_29789 = cljs.core.chunk_first(inst_29781);
var inst_29791 = cljs.core.chunk_rest(inst_29781);
var inst_29793 = cljs.core.count(inst_29789);
var inst_29758 = inst_29791;
var inst_29759 = inst_29789;
var inst_29760 = inst_29793;
var inst_29761 = (0);
var state_29902__$1 = (function (){var statearr_30042 = state_29902;
(statearr_30042[(13)] = inst_29759);

(statearr_30042[(15)] = inst_29758);

(statearr_30042[(16)] = inst_29760);

(statearr_30042[(17)] = inst_29761);

return statearr_30042;
})();
var statearr_30044_32778 = state_29902__$1;
(statearr_30044_32778[(2)] = null);

(statearr_30044_32778[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (11))){
var inst_29781 = (state_29902[(7)]);
var inst_29758 = (state_29902[(15)]);
var inst_29781__$1 = cljs.core.seq(inst_29758);
var state_29902__$1 = (function (){var statearr_30046 = state_29902;
(statearr_30046[(7)] = inst_29781__$1);

return statearr_30046;
})();
if(inst_29781__$1){
var statearr_30047_32780 = state_29902__$1;
(statearr_30047_32780[(1)] = (16));

} else {
var statearr_30048_32782 = state_29902__$1;
(statearr_30048_32782[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (9))){
var inst_29821 = (state_29902[(2)]);
var state_29902__$1 = state_29902;
var statearr_30049_32783 = state_29902__$1;
(statearr_30049_32783[(2)] = inst_29821);

(statearr_30049_32783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (5))){
var inst_29756 = cljs.core.deref(cs);
var inst_29757 = cljs.core.seq(inst_29756);
var inst_29758 = inst_29757;
var inst_29759 = null;
var inst_29760 = (0);
var inst_29761 = (0);
var state_29902__$1 = (function (){var statearr_30051 = state_29902;
(statearr_30051[(13)] = inst_29759);

(statearr_30051[(15)] = inst_29758);

(statearr_30051[(16)] = inst_29760);

(statearr_30051[(17)] = inst_29761);

return statearr_30051;
})();
var statearr_30053_32786 = state_29902__$1;
(statearr_30053_32786[(2)] = null);

(statearr_30053_32786[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (14))){
var state_29902__$1 = state_29902;
var statearr_30055_32787 = state_29902__$1;
(statearr_30055_32787[(2)] = null);

(statearr_30055_32787[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (45))){
var inst_29885 = (state_29902[(2)]);
var state_29902__$1 = state_29902;
var statearr_30056_32793 = state_29902__$1;
(statearr_30056_32793[(2)] = inst_29885);

(statearr_30056_32793[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (26))){
var inst_29824 = (state_29902[(27)]);
var inst_29881 = (state_29902[(2)]);
var inst_29882 = cljs.core.seq(inst_29824);
var state_29902__$1 = (function (){var statearr_30057 = state_29902;
(statearr_30057[(29)] = inst_29881);

return statearr_30057;
})();
if(inst_29882){
var statearr_30058_32794 = state_29902__$1;
(statearr_30058_32794[(1)] = (42));

} else {
var statearr_30059_32795 = state_29902__$1;
(statearr_30059_32795[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (16))){
var inst_29781 = (state_29902[(7)]);
var inst_29785 = cljs.core.chunked_seq_QMARK_(inst_29781);
var state_29902__$1 = state_29902;
if(inst_29785){
var statearr_30062_32796 = state_29902__$1;
(statearr_30062_32796[(1)] = (19));

} else {
var statearr_30063_32799 = state_29902__$1;
(statearr_30063_32799[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (38))){
var inst_29874 = (state_29902[(2)]);
var state_29902__$1 = state_29902;
var statearr_30064_32800 = state_29902__$1;
(statearr_30064_32800[(2)] = inst_29874);

(statearr_30064_32800[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (30))){
var state_29902__$1 = state_29902;
var statearr_30065_32801 = state_29902__$1;
(statearr_30065_32801[(2)] = null);

(statearr_30065_32801[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (10))){
var inst_29759 = (state_29902[(13)]);
var inst_29761 = (state_29902[(17)]);
var inst_29770 = cljs.core._nth(inst_29759,inst_29761);
var inst_29771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29770,(0),null);
var inst_29772 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29770,(1),null);
var state_29902__$1 = (function (){var statearr_30067 = state_29902;
(statearr_30067[(24)] = inst_29771);

return statearr_30067;
})();
if(cljs.core.truth_(inst_29772)){
var statearr_30068_32804 = state_29902__$1;
(statearr_30068_32804[(1)] = (13));

} else {
var statearr_30071_32805 = state_29902__$1;
(statearr_30071_32805[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (18))){
var inst_29817 = (state_29902[(2)]);
var state_29902__$1 = state_29902;
var statearr_30073_32806 = state_29902__$1;
(statearr_30073_32806[(2)] = inst_29817);

(statearr_30073_32806[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (42))){
var state_29902__$1 = state_29902;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29902__$1,(45),dchan);
} else {
if((state_val_29903 === (37))){
var inst_29850 = (state_29902[(23)]);
var inst_29749 = (state_29902[(11)]);
var inst_29864 = (state_29902[(22)]);
var inst_29864__$1 = cljs.core.first(inst_29850);
var inst_29865 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_29864__$1,inst_29749,done);
var state_29902__$1 = (function (){var statearr_30077 = state_29902;
(statearr_30077[(22)] = inst_29864__$1);

return statearr_30077;
})();
if(cljs.core.truth_(inst_29865)){
var statearr_30078_32807 = state_29902__$1;
(statearr_30078_32807[(1)] = (39));

} else {
var statearr_30080_32808 = state_29902__$1;
(statearr_30080_32808[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (8))){
var inst_29760 = (state_29902[(16)]);
var inst_29761 = (state_29902[(17)]);
var inst_29763 = (inst_29761 < inst_29760);
var inst_29764 = inst_29763;
var state_29902__$1 = state_29902;
if(cljs.core.truth_(inst_29764)){
var statearr_30087_32809 = state_29902__$1;
(statearr_30087_32809[(1)] = (10));

} else {
var statearr_30088_32810 = state_29902__$1;
(statearr_30088_32810[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__28402__auto__ = null;
var cljs$core$async$mult_$_state_machine__28402__auto____0 = (function (){
var statearr_30090 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30090[(0)] = cljs$core$async$mult_$_state_machine__28402__auto__);

(statearr_30090[(1)] = (1));

return statearr_30090;
});
var cljs$core$async$mult_$_state_machine__28402__auto____1 = (function (state_29902){
while(true){
var ret_value__28403__auto__ = (function (){try{while(true){
var result__28404__auto__ = switch__28401__auto__(state_29902);
if(cljs.core.keyword_identical_QMARK_(result__28404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28404__auto__;
}
break;
}
}catch (e30091){var ex__28405__auto__ = e30091;
var statearr_30092_32811 = state_29902;
(statearr_30092_32811[(2)] = ex__28405__auto__);


if(cljs.core.seq((state_29902[(4)]))){
var statearr_30095_32812 = state_29902;
(statearr_30095_32812[(1)] = cljs.core.first((state_29902[(4)])));

} else {
throw ex__28405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32817 = state_29902;
state_29902 = G__32817;
continue;
} else {
return ret_value__28403__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28402__auto__ = function(state_29902){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28402__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28402__auto____1.call(this,state_29902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28402__auto____0;
cljs$core$async$mult_$_state_machine__28402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28402__auto____1;
return cljs$core$async$mult_$_state_machine__28402__auto__;
})()
})();
var state__28563__auto__ = (function (){var statearr_30097 = f__28562__auto__();
(statearr_30097[(6)] = c__28561__auto___32640);

return statearr_30097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28563__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__30101 = arguments.length;
switch (G__30101) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_32830 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_32830(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_32834 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_32834(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_32846 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_32846(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_32851 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_32851(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_32861 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_32861(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32869 = arguments.length;
var i__4737__auto___32871 = (0);
while(true){
if((i__4737__auto___32871 < len__4736__auto___32869)){
args__4742__auto__.push((arguments[i__4737__auto___32871]));

var G__32873 = (i__4737__auto___32871 + (1));
i__4737__auto___32871 = G__32873;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30175){
var map__30176 = p__30175;
var map__30176__$1 = (((((!((map__30176 == null))))?(((((map__30176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30176.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30176):map__30176);
var opts = map__30176__$1;
var statearr_30178_32875 = state;
(statearr_30178_32875[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_30182_32876 = state;
(statearr_30182_32876[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_30183_32877 = state;
(statearr_30183_32877[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30162){
var G__30163 = cljs.core.first(seq30162);
var seq30162__$1 = cljs.core.next(seq30162);
var G__30164 = cljs.core.first(seq30162__$1);
var seq30162__$2 = cljs.core.next(seq30162__$1);
var G__30165 = cljs.core.first(seq30162__$2);
var seq30162__$3 = cljs.core.next(seq30162__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30163,G__30164,G__30165,seq30162__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30193 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30193 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30194){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30194 = meta30194;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30195,meta30194__$1){
var self__ = this;
var _30195__$1 = this;
return (new cljs.core.async.t_cljs$core$async30193(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30194__$1));
}));

(cljs.core.async.t_cljs$core$async30193.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30195){
var self__ = this;
var _30195__$1 = this;
return self__.meta30194;
}));

(cljs.core.async.t_cljs$core$async30193.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30193.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async30193.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30193.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30193.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30193.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30193.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30193.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30193.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30194","meta30194",-523543639,null)], null);
}));

(cljs.core.async.t_cljs$core$async30193.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30193.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30193");

(cljs.core.async.t_cljs$core$async30193.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30193");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30193.
 */
cljs.core.async.__GT_t_cljs$core$async30193 = (function cljs$core$async$mix_$___GT_t_cljs$core$async30193(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30194){
return (new cljs.core.async.t_cljs$core$async30193(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30194));
});

}

return (new cljs.core.async.t_cljs$core$async30193(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28561__auto___32905 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28562__auto__ = (function (){var switch__28401__auto__ = (function (state_30374){
var state_val_30375 = (state_30374[(1)]);
if((state_val_30375 === (7))){
var inst_30238 = (state_30374[(2)]);
var state_30374__$1 = state_30374;
var statearr_30379_32912 = state_30374__$1;
(statearr_30379_32912[(2)] = inst_30238);

(statearr_30379_32912[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (20))){
var inst_30257 = (state_30374[(7)]);
var state_30374__$1 = state_30374;
var statearr_30383_32917 = state_30374__$1;
(statearr_30383_32917[(2)] = inst_30257);

(statearr_30383_32917[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (27))){
var state_30374__$1 = state_30374;
var statearr_30384_32922 = state_30374__$1;
(statearr_30384_32922[(2)] = null);

(statearr_30384_32922[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (1))){
var inst_30213 = (state_30374[(8)]);
var inst_30213__$1 = calc_state();
var inst_30215 = (inst_30213__$1 == null);
var inst_30216 = cljs.core.not(inst_30215);
var state_30374__$1 = (function (){var statearr_30385 = state_30374;
(statearr_30385[(8)] = inst_30213__$1);

return statearr_30385;
})();
if(inst_30216){
var statearr_30386_32925 = state_30374__$1;
(statearr_30386_32925[(1)] = (2));

} else {
var statearr_30387_32929 = state_30374__$1;
(statearr_30387_32929[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (24))){
var inst_30338 = (state_30374[(9)]);
var inst_30311 = (state_30374[(10)]);
var inst_30298 = (state_30374[(11)]);
var inst_30338__$1 = (inst_30298.cljs$core$IFn$_invoke$arity$1 ? inst_30298.cljs$core$IFn$_invoke$arity$1(inst_30311) : inst_30298.call(null,inst_30311));
var state_30374__$1 = (function (){var statearr_30389 = state_30374;
(statearr_30389[(9)] = inst_30338__$1);

return statearr_30389;
})();
if(cljs.core.truth_(inst_30338__$1)){
var statearr_30390_32930 = state_30374__$1;
(statearr_30390_32930[(1)] = (29));

} else {
var statearr_30391_32931 = state_30374__$1;
(statearr_30391_32931[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (4))){
var inst_30241 = (state_30374[(2)]);
var state_30374__$1 = state_30374;
if(cljs.core.truth_(inst_30241)){
var statearr_30393_32935 = state_30374__$1;
(statearr_30393_32935[(1)] = (8));

} else {
var statearr_30394_32936 = state_30374__$1;
(statearr_30394_32936[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (15))){
var inst_30289 = (state_30374[(2)]);
var state_30374__$1 = state_30374;
if(cljs.core.truth_(inst_30289)){
var statearr_30396_32937 = state_30374__$1;
(statearr_30396_32937[(1)] = (19));

} else {
var statearr_30399_32938 = state_30374__$1;
(statearr_30399_32938[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (21))){
var inst_30297 = (state_30374[(12)]);
var inst_30297__$1 = (state_30374[(2)]);
var inst_30298 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30297__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30299 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30297__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30300 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30297__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30374__$1 = (function (){var statearr_30401 = state_30374;
(statearr_30401[(12)] = inst_30297__$1);

(statearr_30401[(13)] = inst_30299);

(statearr_30401[(11)] = inst_30298);

return statearr_30401;
})();
return cljs.core.async.ioc_alts_BANG_(state_30374__$1,(22),inst_30300);
} else {
if((state_val_30375 === (31))){
var inst_30354 = (state_30374[(2)]);
var state_30374__$1 = state_30374;
if(cljs.core.truth_(inst_30354)){
var statearr_30403_32944 = state_30374__$1;
(statearr_30403_32944[(1)] = (32));

} else {
var statearr_30404_32945 = state_30374__$1;
(statearr_30404_32945[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (32))){
var inst_30310 = (state_30374[(14)]);
var state_30374__$1 = state_30374;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30374__$1,(35),out,inst_30310);
} else {
if((state_val_30375 === (33))){
var inst_30297 = (state_30374[(12)]);
var inst_30257 = inst_30297;
var state_30374__$1 = (function (){var statearr_30409 = state_30374;
(statearr_30409[(7)] = inst_30257);

return statearr_30409;
})();
var statearr_30420_32947 = state_30374__$1;
(statearr_30420_32947[(2)] = null);

(statearr_30420_32947[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (13))){
var inst_30257 = (state_30374[(7)]);
var inst_30274 = inst_30257.cljs$lang$protocol_mask$partition0$;
var inst_30279 = (inst_30274 & (64));
var inst_30280 = inst_30257.cljs$core$ISeq$;
var inst_30281 = (cljs.core.PROTOCOL_SENTINEL === inst_30280);
var inst_30282 = ((inst_30279) || (inst_30281));
var state_30374__$1 = state_30374;
if(cljs.core.truth_(inst_30282)){
var statearr_30423_32951 = state_30374__$1;
(statearr_30423_32951[(1)] = (16));

} else {
var statearr_30425_32952 = state_30374__$1;
(statearr_30425_32952[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (22))){
var inst_30310 = (state_30374[(14)]);
var inst_30311 = (state_30374[(10)]);
var inst_30309 = (state_30374[(2)]);
var inst_30310__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30309,(0),null);
var inst_30311__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30309,(1),null);
var inst_30317 = (inst_30310__$1 == null);
var inst_30318 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30311__$1,change);
var inst_30319 = ((inst_30317) || (inst_30318));
var state_30374__$1 = (function (){var statearr_30430 = state_30374;
(statearr_30430[(14)] = inst_30310__$1);

(statearr_30430[(10)] = inst_30311__$1);

return statearr_30430;
})();
if(cljs.core.truth_(inst_30319)){
var statearr_30432_32960 = state_30374__$1;
(statearr_30432_32960[(1)] = (23));

} else {
var statearr_30433_32961 = state_30374__$1;
(statearr_30433_32961[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (36))){
var inst_30297 = (state_30374[(12)]);
var inst_30257 = inst_30297;
var state_30374__$1 = (function (){var statearr_30436 = state_30374;
(statearr_30436[(7)] = inst_30257);

return statearr_30436;
})();
var statearr_30437_32969 = state_30374__$1;
(statearr_30437_32969[(2)] = null);

(statearr_30437_32969[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (29))){
var inst_30338 = (state_30374[(9)]);
var state_30374__$1 = state_30374;
var statearr_30441_32970 = state_30374__$1;
(statearr_30441_32970[(2)] = inst_30338);

(statearr_30441_32970[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (6))){
var state_30374__$1 = state_30374;
var statearr_30442_32971 = state_30374__$1;
(statearr_30442_32971[(2)] = false);

(statearr_30442_32971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (28))){
var inst_30331 = (state_30374[(2)]);
var inst_30332 = calc_state();
var inst_30257 = inst_30332;
var state_30374__$1 = (function (){var statearr_30443 = state_30374;
(statearr_30443[(7)] = inst_30257);

(statearr_30443[(15)] = inst_30331);

return statearr_30443;
})();
var statearr_30444_32972 = state_30374__$1;
(statearr_30444_32972[(2)] = null);

(statearr_30444_32972[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (25))){
var inst_30368 = (state_30374[(2)]);
var state_30374__$1 = state_30374;
var statearr_30446_32973 = state_30374__$1;
(statearr_30446_32973[(2)] = inst_30368);

(statearr_30446_32973[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (34))){
var inst_30366 = (state_30374[(2)]);
var state_30374__$1 = state_30374;
var statearr_30449_32976 = state_30374__$1;
(statearr_30449_32976[(2)] = inst_30366);

(statearr_30449_32976[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (17))){
var state_30374__$1 = state_30374;
var statearr_30452_32977 = state_30374__$1;
(statearr_30452_32977[(2)] = false);

(statearr_30452_32977[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (3))){
var state_30374__$1 = state_30374;
var statearr_30453_32978 = state_30374__$1;
(statearr_30453_32978[(2)] = false);

(statearr_30453_32978[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (12))){
var inst_30370 = (state_30374[(2)]);
var state_30374__$1 = state_30374;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30374__$1,inst_30370);
} else {
if((state_val_30375 === (2))){
var inst_30213 = (state_30374[(8)]);
var inst_30227 = inst_30213.cljs$lang$protocol_mask$partition0$;
var inst_30228 = (inst_30227 & (64));
var inst_30230 = inst_30213.cljs$core$ISeq$;
var inst_30232 = (cljs.core.PROTOCOL_SENTINEL === inst_30230);
var inst_30233 = ((inst_30228) || (inst_30232));
var state_30374__$1 = state_30374;
if(cljs.core.truth_(inst_30233)){
var statearr_30457_32984 = state_30374__$1;
(statearr_30457_32984[(1)] = (5));

} else {
var statearr_30459_32990 = state_30374__$1;
(statearr_30459_32990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (23))){
var inst_30310 = (state_30374[(14)]);
var inst_30322 = (inst_30310 == null);
var state_30374__$1 = state_30374;
if(cljs.core.truth_(inst_30322)){
var statearr_30461_32991 = state_30374__$1;
(statearr_30461_32991[(1)] = (26));

} else {
var statearr_30462_32992 = state_30374__$1;
(statearr_30462_32992[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (35))){
var inst_30357 = (state_30374[(2)]);
var state_30374__$1 = state_30374;
if(cljs.core.truth_(inst_30357)){
var statearr_30463_32999 = state_30374__$1;
(statearr_30463_32999[(1)] = (36));

} else {
var statearr_30464_33000 = state_30374__$1;
(statearr_30464_33000[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (19))){
var inst_30257 = (state_30374[(7)]);
var inst_30294 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30257);
var state_30374__$1 = state_30374;
var statearr_30466_33001 = state_30374__$1;
(statearr_30466_33001[(2)] = inst_30294);

(statearr_30466_33001[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (11))){
var inst_30257 = (state_30374[(7)]);
var inst_30267 = (inst_30257 == null);
var inst_30268 = cljs.core.not(inst_30267);
var state_30374__$1 = state_30374;
if(inst_30268){
var statearr_30470_33003 = state_30374__$1;
(statearr_30470_33003[(1)] = (13));

} else {
var statearr_30471_33008 = state_30374__$1;
(statearr_30471_33008[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (9))){
var inst_30213 = (state_30374[(8)]);
var state_30374__$1 = state_30374;
var statearr_30473_33009 = state_30374__$1;
(statearr_30473_33009[(2)] = inst_30213);

(statearr_30473_33009[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (5))){
var state_30374__$1 = state_30374;
var statearr_30474_33010 = state_30374__$1;
(statearr_30474_33010[(2)] = true);

(statearr_30474_33010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (14))){
var state_30374__$1 = state_30374;
var statearr_30484_33011 = state_30374__$1;
(statearr_30484_33011[(2)] = false);

(statearr_30484_33011[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (26))){
var inst_30311 = (state_30374[(10)]);
var inst_30328 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_30311);
var state_30374__$1 = state_30374;
var statearr_30486_33012 = state_30374__$1;
(statearr_30486_33012[(2)] = inst_30328);

(statearr_30486_33012[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (16))){
var state_30374__$1 = state_30374;
var statearr_30493_33013 = state_30374__$1;
(statearr_30493_33013[(2)] = true);

(statearr_30493_33013[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (38))){
var inst_30362 = (state_30374[(2)]);
var state_30374__$1 = state_30374;
var statearr_30497_33020 = state_30374__$1;
(statearr_30497_33020[(2)] = inst_30362);

(statearr_30497_33020[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (30))){
var inst_30311 = (state_30374[(10)]);
var inst_30299 = (state_30374[(13)]);
var inst_30298 = (state_30374[(11)]);
var inst_30349 = cljs.core.empty_QMARK_(inst_30298);
var inst_30350 = (inst_30299.cljs$core$IFn$_invoke$arity$1 ? inst_30299.cljs$core$IFn$_invoke$arity$1(inst_30311) : inst_30299.call(null,inst_30311));
var inst_30351 = cljs.core.not(inst_30350);
var inst_30352 = ((inst_30349) && (inst_30351));
var state_30374__$1 = state_30374;
var statearr_30498_33023 = state_30374__$1;
(statearr_30498_33023[(2)] = inst_30352);

(statearr_30498_33023[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (10))){
var inst_30213 = (state_30374[(8)]);
var inst_30251 = (state_30374[(2)]);
var inst_30252 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30251,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30254 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30251,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30256 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30251,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30257 = inst_30213;
var state_30374__$1 = (function (){var statearr_30502 = state_30374;
(statearr_30502[(16)] = inst_30252);

(statearr_30502[(17)] = inst_30256);

(statearr_30502[(7)] = inst_30257);

(statearr_30502[(18)] = inst_30254);

return statearr_30502;
})();
var statearr_30503_33024 = state_30374__$1;
(statearr_30503_33024[(2)] = null);

(statearr_30503_33024[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (18))){
var inst_30286 = (state_30374[(2)]);
var state_30374__$1 = state_30374;
var statearr_30506_33025 = state_30374__$1;
(statearr_30506_33025[(2)] = inst_30286);

(statearr_30506_33025[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (37))){
var state_30374__$1 = state_30374;
var statearr_30507_33026 = state_30374__$1;
(statearr_30507_33026[(2)] = null);

(statearr_30507_33026[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (8))){
var inst_30213 = (state_30374[(8)]);
var inst_30247 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30213);
var state_30374__$1 = state_30374;
var statearr_30513_33027 = state_30374__$1;
(statearr_30513_33027[(2)] = inst_30247);

(statearr_30513_33027[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__28402__auto__ = null;
var cljs$core$async$mix_$_state_machine__28402__auto____0 = (function (){
var statearr_30519 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30519[(0)] = cljs$core$async$mix_$_state_machine__28402__auto__);

(statearr_30519[(1)] = (1));

return statearr_30519;
});
var cljs$core$async$mix_$_state_machine__28402__auto____1 = (function (state_30374){
while(true){
var ret_value__28403__auto__ = (function (){try{while(true){
var result__28404__auto__ = switch__28401__auto__(state_30374);
if(cljs.core.keyword_identical_QMARK_(result__28404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28404__auto__;
}
break;
}
}catch (e30521){var ex__28405__auto__ = e30521;
var statearr_30522_33036 = state_30374;
(statearr_30522_33036[(2)] = ex__28405__auto__);


if(cljs.core.seq((state_30374[(4)]))){
var statearr_30524_33037 = state_30374;
(statearr_30524_33037[(1)] = cljs.core.first((state_30374[(4)])));

} else {
throw ex__28405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33038 = state_30374;
state_30374 = G__33038;
continue;
} else {
return ret_value__28403__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28402__auto__ = function(state_30374){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28402__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28402__auto____1.call(this,state_30374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28402__auto____0;
cljs$core$async$mix_$_state_machine__28402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28402__auto____1;
return cljs$core$async$mix_$_state_machine__28402__auto__;
})()
})();
var state__28563__auto__ = (function (){var statearr_30528 = f__28562__auto__();
(statearr_30528[(6)] = c__28561__auto___32905);

return statearr_30528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28563__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_33039 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_33039(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33040 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_33040(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33043 = (function() {
var G__33044 = null;
var G__33044__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__33044__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__33044 = function(p,v){
switch(arguments.length){
case 1:
return G__33044__1.call(this,p);
case 2:
return G__33044__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33044.cljs$core$IFn$_invoke$arity$1 = G__33044__1;
G__33044.cljs$core$IFn$_invoke$arity$2 = G__33044__2;
return G__33044;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__30562 = arguments.length;
switch (G__30562) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33043(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33043(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__30579 = arguments.length;
switch (G__30579) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__30577_SHARP_){
if(cljs.core.truth_((p1__30577_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__30577_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__30577_SHARP_.call(null,topic)))){
return p1__30577_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__30577_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30588 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30588 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30589){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30589 = meta30589;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30590,meta30589__$1){
var self__ = this;
var _30590__$1 = this;
return (new cljs.core.async.t_cljs$core$async30588(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30589__$1));
}));

(cljs.core.async.t_cljs$core$async30588.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30590){
var self__ = this;
var _30590__$1 = this;
return self__.meta30589;
}));

(cljs.core.async.t_cljs$core$async30588.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30588.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30588.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30588.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async30588.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async30588.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async30588.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async30588.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30589","meta30589",648919454,null)], null);
}));

(cljs.core.async.t_cljs$core$async30588.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30588.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30588");

(cljs.core.async.t_cljs$core$async30588.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30588");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30588.
 */
cljs.core.async.__GT_t_cljs$core$async30588 = (function cljs$core$async$__GT_t_cljs$core$async30588(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30589){
return (new cljs.core.async.t_cljs$core$async30588(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30589));
});

}

return (new cljs.core.async.t_cljs$core$async30588(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28561__auto___33074 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28562__auto__ = (function (){var switch__28401__auto__ = (function (state_30696){
var state_val_30697 = (state_30696[(1)]);
if((state_val_30697 === (7))){
var inst_30692 = (state_30696[(2)]);
var state_30696__$1 = state_30696;
var statearr_30704_33081 = state_30696__$1;
(statearr_30704_33081[(2)] = inst_30692);

(statearr_30704_33081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30697 === (20))){
var state_30696__$1 = state_30696;
var statearr_30706_33083 = state_30696__$1;
(statearr_30706_33083[(2)] = null);

(statearr_30706_33083[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30697 === (1))){
var state_30696__$1 = state_30696;
var statearr_30707_33084 = state_30696__$1;
(statearr_30707_33084[(2)] = null);

(statearr_30707_33084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30697 === (24))){
var inst_30675 = (state_30696[(7)]);
var inst_30684 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_30675);
var state_30696__$1 = state_30696;
var statearr_30708_33087 = state_30696__$1;
(statearr_30708_33087[(2)] = inst_30684);

(statearr_30708_33087[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30697 === (4))){
var inst_30616 = (state_30696[(8)]);
var inst_30616__$1 = (state_30696[(2)]);
var inst_30617 = (inst_30616__$1 == null);
var state_30696__$1 = (function (){var statearr_30709 = state_30696;
(statearr_30709[(8)] = inst_30616__$1);

return statearr_30709;
})();
if(cljs.core.truth_(inst_30617)){
var statearr_30711_33088 = state_30696__$1;
(statearr_30711_33088[(1)] = (5));

} else {
var statearr_30712_33089 = state_30696__$1;
(statearr_30712_33089[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30697 === (15))){
var inst_30669 = (state_30696[(2)]);
var state_30696__$1 = state_30696;
var statearr_30716_33090 = state_30696__$1;
(statearr_30716_33090[(2)] = inst_30669);

(statearr_30716_33090[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30697 === (21))){
var inst_30689 = (state_30696[(2)]);
var state_30696__$1 = (function (){var statearr_30717 = state_30696;
(statearr_30717[(9)] = inst_30689);

return statearr_30717;
})();
var statearr_30718_33091 = state_30696__$1;
(statearr_30718_33091[(2)] = null);

(statearr_30718_33091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30697 === (13))){
var inst_30647 = (state_30696[(10)]);
var inst_30649 = cljs.core.chunked_seq_QMARK_(inst_30647);
var state_30696__$1 = state_30696;
if(inst_30649){
var statearr_30720_33092 = state_30696__$1;
(statearr_30720_33092[(1)] = (16));

} else {
var statearr_30721_33093 = state_30696__$1;
(statearr_30721_33093[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30697 === (22))){
var inst_30681 = (state_30696[(2)]);
var state_30696__$1 = state_30696;
if(cljs.core.truth_(inst_30681)){
var statearr_30722_33094 = state_30696__$1;
(statearr_30722_33094[(1)] = (23));

} else {
var statearr_30723_33095 = state_30696__$1;
(statearr_30723_33095[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30697 === (6))){
var inst_30677 = (state_30696[(11)]);
var inst_30675 = (state_30696[(7)]);
var inst_30616 = (state_30696[(8)]);
var inst_30675__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_30616) : topic_fn.call(null,inst_30616));
var inst_30676 = cljs.core.deref(mults);
var inst_30677__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30676,inst_30675__$1);
var state_30696__$1 = (function (){var statearr_30726 = state_30696;
(statearr_30726[(11)] = inst_30677__$1);

(statearr_30726[(7)] = inst_30675__$1);

return statearr_30726;
})();
if(cljs.core.truth_(inst_30677__$1)){
var statearr_30727_33097 = state_30696__$1;
(statearr_30727_33097[(1)] = (19));

} else {
var statearr_30728_33098 = state_30696__$1;
(statearr_30728_33098[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30697 === (25))){
var inst_30686 = (state_30696[(2)]);
var state_30696__$1 = state_30696;
var statearr_30734_33099 = state_30696__$1;
(statearr_30734_33099[(2)] = inst_30686);

(statearr_30734_33099[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30697 === (17))){
var inst_30647 = (state_30696[(10)]);
var inst_30660 = cljs.core.first(inst_30647);
var inst_30661 = cljs.core.async.muxch_STAR_(inst_30660);
var inst_30662 = cljs.core.async.close_BANG_(inst_30661);
var inst_30663 = cljs.core.next(inst_30647);
var inst_30626 = inst_30663;
var inst_30627 = null;
var inst_30628 = (0);
var inst_30629 = (0);
var state_30696__$1 = (function (){var statearr_30739 = state_30696;
(statearr_30739[(12)] = inst_30662);

(statearr_30739[(13)] = inst_30628);

(statearr_30739[(14)] = inst_30626);

(statearr_30739[(15)] = inst_30629);

(statearr_30739[(16)] = inst_30627);

return statearr_30739;
})();
var statearr_30740_33101 = state_30696__$1;
(statearr_30740_33101[(2)] = null);

(statearr_30740_33101[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30697 === (3))){
var inst_30694 = (state_30696[(2)]);
var state_30696__$1 = state_30696;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30696__$1,inst_30694);
} else {
if((state_val_30697 === (12))){
var inst_30671 = (state_30696[(2)]);
var state_30696__$1 = state_30696;
var statearr_30742_33102 = state_30696__$1;
(statearr_30742_33102[(2)] = inst_30671);

(statearr_30742_33102[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30697 === (2))){
var state_30696__$1 = state_30696;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30696__$1,(4),ch);
} else {
if((state_val_30697 === (23))){
var state_30696__$1 = state_30696;
var statearr_30744_33103 = state_30696__$1;
(statearr_30744_33103[(2)] = null);

(statearr_30744_33103[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30697 === (19))){
var inst_30677 = (state_30696[(11)]);
var inst_30616 = (state_30696[(8)]);
var inst_30679 = cljs.core.async.muxch_STAR_(inst_30677);
var state_30696__$1 = state_30696;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30696__$1,(22),inst_30679,inst_30616);
} else {
if((state_val_30697 === (11))){
var inst_30647 = (state_30696[(10)]);
var inst_30626 = (state_30696[(14)]);
var inst_30647__$1 = cljs.core.seq(inst_30626);
var state_30696__$1 = (function (){var statearr_30751 = state_30696;
(statearr_30751[(10)] = inst_30647__$1);

return statearr_30751;
})();
if(inst_30647__$1){
var statearr_30752_33104 = state_30696__$1;
(statearr_30752_33104[(1)] = (13));

} else {
var statearr_30753_33105 = state_30696__$1;
(statearr_30753_33105[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30697 === (9))){
var inst_30673 = (state_30696[(2)]);
var state_30696__$1 = state_30696;
var statearr_30757_33106 = state_30696__$1;
(statearr_30757_33106[(2)] = inst_30673);

(statearr_30757_33106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30697 === (5))){
var inst_30623 = cljs.core.deref(mults);
var inst_30624 = cljs.core.vals(inst_30623);
var inst_30625 = cljs.core.seq(inst_30624);
var inst_30626 = inst_30625;
var inst_30627 = null;
var inst_30628 = (0);
var inst_30629 = (0);
var state_30696__$1 = (function (){var statearr_30761 = state_30696;
(statearr_30761[(13)] = inst_30628);

(statearr_30761[(14)] = inst_30626);

(statearr_30761[(15)] = inst_30629);

(statearr_30761[(16)] = inst_30627);

return statearr_30761;
})();
var statearr_30763_33108 = state_30696__$1;
(statearr_30763_33108[(2)] = null);

(statearr_30763_33108[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30697 === (14))){
var state_30696__$1 = state_30696;
var statearr_30767_33109 = state_30696__$1;
(statearr_30767_33109[(2)] = null);

(statearr_30767_33109[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30697 === (16))){
var inst_30647 = (state_30696[(10)]);
var inst_30655 = cljs.core.chunk_first(inst_30647);
var inst_30656 = cljs.core.chunk_rest(inst_30647);
var inst_30657 = cljs.core.count(inst_30655);
var inst_30626 = inst_30656;
var inst_30627 = inst_30655;
var inst_30628 = inst_30657;
var inst_30629 = (0);
var state_30696__$1 = (function (){var statearr_30775 = state_30696;
(statearr_30775[(13)] = inst_30628);

(statearr_30775[(14)] = inst_30626);

(statearr_30775[(15)] = inst_30629);

(statearr_30775[(16)] = inst_30627);

return statearr_30775;
})();
var statearr_30776_33111 = state_30696__$1;
(statearr_30776_33111[(2)] = null);

(statearr_30776_33111[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30697 === (10))){
var inst_30628 = (state_30696[(13)]);
var inst_30626 = (state_30696[(14)]);
var inst_30629 = (state_30696[(15)]);
var inst_30627 = (state_30696[(16)]);
var inst_30641 = cljs.core._nth(inst_30627,inst_30629);
var inst_30642 = cljs.core.async.muxch_STAR_(inst_30641);
var inst_30643 = cljs.core.async.close_BANG_(inst_30642);
var inst_30644 = (inst_30629 + (1));
var tmp30764 = inst_30628;
var tmp30765 = inst_30626;
var tmp30766 = inst_30627;
var inst_30626__$1 = tmp30765;
var inst_30627__$1 = tmp30766;
var inst_30628__$1 = tmp30764;
var inst_30629__$1 = inst_30644;
var state_30696__$1 = (function (){var statearr_30780 = state_30696;
(statearr_30780[(17)] = inst_30643);

(statearr_30780[(13)] = inst_30628__$1);

(statearr_30780[(14)] = inst_30626__$1);

(statearr_30780[(15)] = inst_30629__$1);

(statearr_30780[(16)] = inst_30627__$1);

return statearr_30780;
})();
var statearr_30781_33120 = state_30696__$1;
(statearr_30781_33120[(2)] = null);

(statearr_30781_33120[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30697 === (18))){
var inst_30666 = (state_30696[(2)]);
var state_30696__$1 = state_30696;
var statearr_30785_33121 = state_30696__$1;
(statearr_30785_33121[(2)] = inst_30666);

(statearr_30785_33121[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30697 === (8))){
var inst_30628 = (state_30696[(13)]);
var inst_30629 = (state_30696[(15)]);
var inst_30635 = (inst_30629 < inst_30628);
var inst_30636 = inst_30635;
var state_30696__$1 = state_30696;
if(cljs.core.truth_(inst_30636)){
var statearr_30786_33122 = state_30696__$1;
(statearr_30786_33122[(1)] = (10));

} else {
var statearr_30787_33124 = state_30696__$1;
(statearr_30787_33124[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28402__auto__ = null;
var cljs$core$async$state_machine__28402__auto____0 = (function (){
var statearr_30792 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30792[(0)] = cljs$core$async$state_machine__28402__auto__);

(statearr_30792[(1)] = (1));

return statearr_30792;
});
var cljs$core$async$state_machine__28402__auto____1 = (function (state_30696){
while(true){
var ret_value__28403__auto__ = (function (){try{while(true){
var result__28404__auto__ = switch__28401__auto__(state_30696);
if(cljs.core.keyword_identical_QMARK_(result__28404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28404__auto__;
}
break;
}
}catch (e30797){var ex__28405__auto__ = e30797;
var statearr_30798_33125 = state_30696;
(statearr_30798_33125[(2)] = ex__28405__auto__);


if(cljs.core.seq((state_30696[(4)]))){
var statearr_30799_33126 = state_30696;
(statearr_30799_33126[(1)] = cljs.core.first((state_30696[(4)])));

} else {
throw ex__28405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33127 = state_30696;
state_30696 = G__33127;
continue;
} else {
return ret_value__28403__auto__;
}
break;
}
});
cljs$core$async$state_machine__28402__auto__ = function(state_30696){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28402__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28402__auto____1.call(this,state_30696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28402__auto____0;
cljs$core$async$state_machine__28402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28402__auto____1;
return cljs$core$async$state_machine__28402__auto__;
})()
})();
var state__28563__auto__ = (function (){var statearr_30800 = f__28562__auto__();
(statearr_30800[(6)] = c__28561__auto___33074);

return statearr_30800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28563__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__30803 = arguments.length;
switch (G__30803) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__30806 = arguments.length;
switch (G__30806) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__30817 = arguments.length;
switch (G__30817) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__28561__auto___33148 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28562__auto__ = (function (){var switch__28401__auto__ = (function (state_30869){
var state_val_30870 = (state_30869[(1)]);
if((state_val_30870 === (7))){
var state_30869__$1 = state_30869;
var statearr_30872_33153 = state_30869__$1;
(statearr_30872_33153[(2)] = null);

(statearr_30872_33153[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30870 === (1))){
var state_30869__$1 = state_30869;
var statearr_30878_33155 = state_30869__$1;
(statearr_30878_33155[(2)] = null);

(statearr_30878_33155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30870 === (4))){
var inst_30825 = (state_30869[(7)]);
var inst_30824 = (state_30869[(8)]);
var inst_30827 = (inst_30825 < inst_30824);
var state_30869__$1 = state_30869;
if(cljs.core.truth_(inst_30827)){
var statearr_30881_33156 = state_30869__$1;
(statearr_30881_33156[(1)] = (6));

} else {
var statearr_30882_33157 = state_30869__$1;
(statearr_30882_33157[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30870 === (15))){
var inst_30854 = (state_30869[(9)]);
var inst_30859 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_30854);
var state_30869__$1 = state_30869;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30869__$1,(17),out,inst_30859);
} else {
if((state_val_30870 === (13))){
var inst_30854 = (state_30869[(9)]);
var inst_30854__$1 = (state_30869[(2)]);
var inst_30855 = cljs.core.some(cljs.core.nil_QMARK_,inst_30854__$1);
var state_30869__$1 = (function (){var statearr_30890 = state_30869;
(statearr_30890[(9)] = inst_30854__$1);

return statearr_30890;
})();
if(cljs.core.truth_(inst_30855)){
var statearr_30891_33158 = state_30869__$1;
(statearr_30891_33158[(1)] = (14));

} else {
var statearr_30892_33159 = state_30869__$1;
(statearr_30892_33159[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30870 === (6))){
var state_30869__$1 = state_30869;
var statearr_30893_33160 = state_30869__$1;
(statearr_30893_33160[(2)] = null);

(statearr_30893_33160[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30870 === (17))){
var inst_30861 = (state_30869[(2)]);
var state_30869__$1 = (function (){var statearr_30895 = state_30869;
(statearr_30895[(10)] = inst_30861);

return statearr_30895;
})();
var statearr_30896_33161 = state_30869__$1;
(statearr_30896_33161[(2)] = null);

(statearr_30896_33161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30870 === (3))){
var inst_30866 = (state_30869[(2)]);
var state_30869__$1 = state_30869;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30869__$1,inst_30866);
} else {
if((state_val_30870 === (12))){
var _ = (function (){var statearr_30903 = state_30869;
(statearr_30903[(4)] = cljs.core.rest((state_30869[(4)])));

return statearr_30903;
})();
var state_30869__$1 = state_30869;
var ex30894 = (state_30869__$1[(2)]);
var statearr_30905_33171 = state_30869__$1;
(statearr_30905_33171[(5)] = ex30894);


if((ex30894 instanceof Object)){
var statearr_30913_33172 = state_30869__$1;
(statearr_30913_33172[(1)] = (11));

(statearr_30913_33172[(5)] = null);

} else {
throw ex30894;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30870 === (2))){
var inst_30823 = cljs.core.reset_BANG_(dctr,cnt);
var inst_30824 = cnt;
var inst_30825 = (0);
var state_30869__$1 = (function (){var statearr_30923 = state_30869;
(statearr_30923[(7)] = inst_30825);

(statearr_30923[(8)] = inst_30824);

(statearr_30923[(11)] = inst_30823);

return statearr_30923;
})();
var statearr_30924_33179 = state_30869__$1;
(statearr_30924_33179[(2)] = null);

(statearr_30924_33179[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30870 === (11))){
var inst_30833 = (state_30869[(2)]);
var inst_30834 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_30869__$1 = (function (){var statearr_30925 = state_30869;
(statearr_30925[(12)] = inst_30833);

return statearr_30925;
})();
var statearr_30926_33184 = state_30869__$1;
(statearr_30926_33184[(2)] = inst_30834);

(statearr_30926_33184[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30870 === (9))){
var inst_30825 = (state_30869[(7)]);
var _ = (function (){var statearr_30930 = state_30869;
(statearr_30930[(4)] = cljs.core.cons((12),(state_30869[(4)])));

return statearr_30930;
})();
var inst_30840 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_30825) : chs__$1.call(null,inst_30825));
var inst_30841 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_30825) : done.call(null,inst_30825));
var inst_30842 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_30840,inst_30841);
var ___$1 = (function (){var statearr_30931 = state_30869;
(statearr_30931[(4)] = cljs.core.rest((state_30869[(4)])));

return statearr_30931;
})();
var state_30869__$1 = state_30869;
var statearr_30935_33190 = state_30869__$1;
(statearr_30935_33190[(2)] = inst_30842);

(statearr_30935_33190[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30870 === (5))){
var inst_30852 = (state_30869[(2)]);
var state_30869__$1 = (function (){var statearr_30936 = state_30869;
(statearr_30936[(13)] = inst_30852);

return statearr_30936;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30869__$1,(13),dchan);
} else {
if((state_val_30870 === (14))){
var inst_30857 = cljs.core.async.close_BANG_(out);
var state_30869__$1 = state_30869;
var statearr_30941_33196 = state_30869__$1;
(statearr_30941_33196[(2)] = inst_30857);

(statearr_30941_33196[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30870 === (16))){
var inst_30864 = (state_30869[(2)]);
var state_30869__$1 = state_30869;
var statearr_30944_33199 = state_30869__$1;
(statearr_30944_33199[(2)] = inst_30864);

(statearr_30944_33199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30870 === (10))){
var inst_30825 = (state_30869[(7)]);
var inst_30845 = (state_30869[(2)]);
var inst_30846 = (inst_30825 + (1));
var inst_30825__$1 = inst_30846;
var state_30869__$1 = (function (){var statearr_30946 = state_30869;
(statearr_30946[(7)] = inst_30825__$1);

(statearr_30946[(14)] = inst_30845);

return statearr_30946;
})();
var statearr_30948_33201 = state_30869__$1;
(statearr_30948_33201[(2)] = null);

(statearr_30948_33201[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30870 === (8))){
var inst_30850 = (state_30869[(2)]);
var state_30869__$1 = state_30869;
var statearr_30955_33202 = state_30869__$1;
(statearr_30955_33202[(2)] = inst_30850);

(statearr_30955_33202[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28402__auto__ = null;
var cljs$core$async$state_machine__28402__auto____0 = (function (){
var statearr_30961 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30961[(0)] = cljs$core$async$state_machine__28402__auto__);

(statearr_30961[(1)] = (1));

return statearr_30961;
});
var cljs$core$async$state_machine__28402__auto____1 = (function (state_30869){
while(true){
var ret_value__28403__auto__ = (function (){try{while(true){
var result__28404__auto__ = switch__28401__auto__(state_30869);
if(cljs.core.keyword_identical_QMARK_(result__28404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28404__auto__;
}
break;
}
}catch (e30963){var ex__28405__auto__ = e30963;
var statearr_30964_33203 = state_30869;
(statearr_30964_33203[(2)] = ex__28405__auto__);


if(cljs.core.seq((state_30869[(4)]))){
var statearr_30965_33205 = state_30869;
(statearr_30965_33205[(1)] = cljs.core.first((state_30869[(4)])));

} else {
throw ex__28405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33206 = state_30869;
state_30869 = G__33206;
continue;
} else {
return ret_value__28403__auto__;
}
break;
}
});
cljs$core$async$state_machine__28402__auto__ = function(state_30869){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28402__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28402__auto____1.call(this,state_30869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28402__auto____0;
cljs$core$async$state_machine__28402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28402__auto____1;
return cljs$core$async$state_machine__28402__auto__;
})()
})();
var state__28563__auto__ = (function (){var statearr_30967 = f__28562__auto__();
(statearr_30967[(6)] = c__28561__auto___33148);

return statearr_30967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28563__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__30980 = arguments.length;
switch (G__30980) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28561__auto___33212 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28562__auto__ = (function (){var switch__28401__auto__ = (function (state_31025){
var state_val_31026 = (state_31025[(1)]);
if((state_val_31026 === (7))){
var inst_30998 = (state_31025[(7)]);
var inst_30999 = (state_31025[(8)]);
var inst_30998__$1 = (state_31025[(2)]);
var inst_30999__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30998__$1,(0),null);
var inst_31000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30998__$1,(1),null);
var inst_31002 = (inst_30999__$1 == null);
var state_31025__$1 = (function (){var statearr_31037 = state_31025;
(statearr_31037[(9)] = inst_31000);

(statearr_31037[(7)] = inst_30998__$1);

(statearr_31037[(8)] = inst_30999__$1);

return statearr_31037;
})();
if(cljs.core.truth_(inst_31002)){
var statearr_31039_33213 = state_31025__$1;
(statearr_31039_33213[(1)] = (8));

} else {
var statearr_31040_33214 = state_31025__$1;
(statearr_31040_33214[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (1))){
var inst_30986 = cljs.core.vec(chs);
var inst_30987 = inst_30986;
var state_31025__$1 = (function (){var statearr_31045 = state_31025;
(statearr_31045[(10)] = inst_30987);

return statearr_31045;
})();
var statearr_31046_33216 = state_31025__$1;
(statearr_31046_33216[(2)] = null);

(statearr_31046_33216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (4))){
var inst_30987 = (state_31025[(10)]);
var state_31025__$1 = state_31025;
return cljs.core.async.ioc_alts_BANG_(state_31025__$1,(7),inst_30987);
} else {
if((state_val_31026 === (6))){
var inst_31017 = (state_31025[(2)]);
var state_31025__$1 = state_31025;
var statearr_31054_33217 = state_31025__$1;
(statearr_31054_33217[(2)] = inst_31017);

(statearr_31054_33217[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (3))){
var inst_31019 = (state_31025[(2)]);
var state_31025__$1 = state_31025;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31025__$1,inst_31019);
} else {
if((state_val_31026 === (2))){
var inst_30987 = (state_31025[(10)]);
var inst_30989 = cljs.core.count(inst_30987);
var inst_30990 = (inst_30989 > (0));
var state_31025__$1 = state_31025;
if(cljs.core.truth_(inst_30990)){
var statearr_31061_33221 = state_31025__$1;
(statearr_31061_33221[(1)] = (4));

} else {
var statearr_31062_33222 = state_31025__$1;
(statearr_31062_33222[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (11))){
var inst_30987 = (state_31025[(10)]);
var inst_31010 = (state_31025[(2)]);
var tmp31055 = inst_30987;
var inst_30987__$1 = tmp31055;
var state_31025__$1 = (function (){var statearr_31067 = state_31025;
(statearr_31067[(11)] = inst_31010);

(statearr_31067[(10)] = inst_30987__$1);

return statearr_31067;
})();
var statearr_31068_33224 = state_31025__$1;
(statearr_31068_33224[(2)] = null);

(statearr_31068_33224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (9))){
var inst_30999 = (state_31025[(8)]);
var state_31025__$1 = state_31025;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31025__$1,(11),out,inst_30999);
} else {
if((state_val_31026 === (5))){
var inst_31015 = cljs.core.async.close_BANG_(out);
var state_31025__$1 = state_31025;
var statearr_31072_33226 = state_31025__$1;
(statearr_31072_33226[(2)] = inst_31015);

(statearr_31072_33226[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (10))){
var inst_31013 = (state_31025[(2)]);
var state_31025__$1 = state_31025;
var statearr_31073_33229 = state_31025__$1;
(statearr_31073_33229[(2)] = inst_31013);

(statearr_31073_33229[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (8))){
var inst_31000 = (state_31025[(9)]);
var inst_30987 = (state_31025[(10)]);
var inst_30998 = (state_31025[(7)]);
var inst_30999 = (state_31025[(8)]);
var inst_31005 = (function (){var cs = inst_30987;
var vec__30993 = inst_30998;
var v = inst_30999;
var c = inst_31000;
return (function (p1__30969_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__30969_SHARP_);
});
})();
var inst_31006 = cljs.core.filterv(inst_31005,inst_30987);
var inst_30987__$1 = inst_31006;
var state_31025__$1 = (function (){var statearr_31085 = state_31025;
(statearr_31085[(10)] = inst_30987__$1);

return statearr_31085;
})();
var statearr_31086_33231 = state_31025__$1;
(statearr_31086_33231[(2)] = null);

(statearr_31086_33231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28402__auto__ = null;
var cljs$core$async$state_machine__28402__auto____0 = (function (){
var statearr_31092 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31092[(0)] = cljs$core$async$state_machine__28402__auto__);

(statearr_31092[(1)] = (1));

return statearr_31092;
});
var cljs$core$async$state_machine__28402__auto____1 = (function (state_31025){
while(true){
var ret_value__28403__auto__ = (function (){try{while(true){
var result__28404__auto__ = switch__28401__auto__(state_31025);
if(cljs.core.keyword_identical_QMARK_(result__28404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28404__auto__;
}
break;
}
}catch (e31094){var ex__28405__auto__ = e31094;
var statearr_31095_33237 = state_31025;
(statearr_31095_33237[(2)] = ex__28405__auto__);


if(cljs.core.seq((state_31025[(4)]))){
var statearr_31098_33243 = state_31025;
(statearr_31098_33243[(1)] = cljs.core.first((state_31025[(4)])));

} else {
throw ex__28405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33250 = state_31025;
state_31025 = G__33250;
continue;
} else {
return ret_value__28403__auto__;
}
break;
}
});
cljs$core$async$state_machine__28402__auto__ = function(state_31025){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28402__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28402__auto____1.call(this,state_31025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28402__auto____0;
cljs$core$async$state_machine__28402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28402__auto____1;
return cljs$core$async$state_machine__28402__auto__;
})()
})();
var state__28563__auto__ = (function (){var statearr_31101 = f__28562__auto__();
(statearr_31101[(6)] = c__28561__auto___33212);

return statearr_31101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28563__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__31116 = arguments.length;
switch (G__31116) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28561__auto___33298 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28562__auto__ = (function (){var switch__28401__auto__ = (function (state_31154){
var state_val_31156 = (state_31154[(1)]);
if((state_val_31156 === (7))){
var inst_31127 = (state_31154[(7)]);
var inst_31127__$1 = (state_31154[(2)]);
var inst_31128 = (inst_31127__$1 == null);
var inst_31129 = cljs.core.not(inst_31128);
var state_31154__$1 = (function (){var statearr_31167 = state_31154;
(statearr_31167[(7)] = inst_31127__$1);

return statearr_31167;
})();
if(inst_31129){
var statearr_31168_33319 = state_31154__$1;
(statearr_31168_33319[(1)] = (8));

} else {
var statearr_31169_33324 = state_31154__$1;
(statearr_31169_33324[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31156 === (1))){
var inst_31122 = (0);
var state_31154__$1 = (function (){var statearr_31173 = state_31154;
(statearr_31173[(8)] = inst_31122);

return statearr_31173;
})();
var statearr_31176_33329 = state_31154__$1;
(statearr_31176_33329[(2)] = null);

(statearr_31176_33329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31156 === (4))){
var state_31154__$1 = state_31154;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31154__$1,(7),ch);
} else {
if((state_val_31156 === (6))){
var inst_31144 = (state_31154[(2)]);
var state_31154__$1 = state_31154;
var statearr_31183_33330 = state_31154__$1;
(statearr_31183_33330[(2)] = inst_31144);

(statearr_31183_33330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31156 === (3))){
var inst_31146 = (state_31154[(2)]);
var inst_31150 = cljs.core.async.close_BANG_(out);
var state_31154__$1 = (function (){var statearr_31187 = state_31154;
(statearr_31187[(9)] = inst_31146);

return statearr_31187;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31154__$1,inst_31150);
} else {
if((state_val_31156 === (2))){
var inst_31122 = (state_31154[(8)]);
var inst_31124 = (inst_31122 < n);
var state_31154__$1 = state_31154;
if(cljs.core.truth_(inst_31124)){
var statearr_31195_33331 = state_31154__$1;
(statearr_31195_33331[(1)] = (4));

} else {
var statearr_31196_33332 = state_31154__$1;
(statearr_31196_33332[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31156 === (11))){
var inst_31122 = (state_31154[(8)]);
var inst_31133 = (state_31154[(2)]);
var inst_31135 = (inst_31122 + (1));
var inst_31122__$1 = inst_31135;
var state_31154__$1 = (function (){var statearr_31198 = state_31154;
(statearr_31198[(10)] = inst_31133);

(statearr_31198[(8)] = inst_31122__$1);

return statearr_31198;
})();
var statearr_31199_33337 = state_31154__$1;
(statearr_31199_33337[(2)] = null);

(statearr_31199_33337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31156 === (9))){
var state_31154__$1 = state_31154;
var statearr_31200_33338 = state_31154__$1;
(statearr_31200_33338[(2)] = null);

(statearr_31200_33338[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31156 === (5))){
var state_31154__$1 = state_31154;
var statearr_31205_33343 = state_31154__$1;
(statearr_31205_33343[(2)] = null);

(statearr_31205_33343[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31156 === (10))){
var inst_31140 = (state_31154[(2)]);
var state_31154__$1 = state_31154;
var statearr_31207_33349 = state_31154__$1;
(statearr_31207_33349[(2)] = inst_31140);

(statearr_31207_33349[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31156 === (8))){
var inst_31127 = (state_31154[(7)]);
var state_31154__$1 = state_31154;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31154__$1,(11),out,inst_31127);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28402__auto__ = null;
var cljs$core$async$state_machine__28402__auto____0 = (function (){
var statearr_31209 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31209[(0)] = cljs$core$async$state_machine__28402__auto__);

(statearr_31209[(1)] = (1));

return statearr_31209;
});
var cljs$core$async$state_machine__28402__auto____1 = (function (state_31154){
while(true){
var ret_value__28403__auto__ = (function (){try{while(true){
var result__28404__auto__ = switch__28401__auto__(state_31154);
if(cljs.core.keyword_identical_QMARK_(result__28404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28404__auto__;
}
break;
}
}catch (e31212){var ex__28405__auto__ = e31212;
var statearr_31213_33357 = state_31154;
(statearr_31213_33357[(2)] = ex__28405__auto__);


if(cljs.core.seq((state_31154[(4)]))){
var statearr_31214_33359 = state_31154;
(statearr_31214_33359[(1)] = cljs.core.first((state_31154[(4)])));

} else {
throw ex__28405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33360 = state_31154;
state_31154 = G__33360;
continue;
} else {
return ret_value__28403__auto__;
}
break;
}
});
cljs$core$async$state_machine__28402__auto__ = function(state_31154){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28402__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28402__auto____1.call(this,state_31154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28402__auto____0;
cljs$core$async$state_machine__28402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28402__auto____1;
return cljs$core$async$state_machine__28402__auto__;
})()
})();
var state__28563__auto__ = (function (){var statearr_31220 = f__28562__auto__();
(statearr_31220[(6)] = c__28561__auto___33298);

return statearr_31220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28563__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31227 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31227 = (function (f,ch,meta31228){
this.f = f;
this.ch = ch;
this.meta31228 = meta31228;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31227.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31229,meta31228__$1){
var self__ = this;
var _31229__$1 = this;
return (new cljs.core.async.t_cljs$core$async31227(self__.f,self__.ch,meta31228__$1));
}));

(cljs.core.async.t_cljs$core$async31227.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31229){
var self__ = this;
var _31229__$1 = this;
return self__.meta31228;
}));

(cljs.core.async.t_cljs$core$async31227.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31227.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31227.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31227.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31227.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31234 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31234 = (function (f,ch,meta31228,_,fn1,meta31235){
this.f = f;
this.ch = ch;
this.meta31228 = meta31228;
this._ = _;
this.fn1 = fn1;
this.meta31235 = meta31235;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31234.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31236,meta31235__$1){
var self__ = this;
var _31236__$1 = this;
return (new cljs.core.async.t_cljs$core$async31234(self__.f,self__.ch,self__.meta31228,self__._,self__.fn1,meta31235__$1));
}));

(cljs.core.async.t_cljs$core$async31234.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31236){
var self__ = this;
var _31236__$1 = this;
return self__.meta31235;
}));

(cljs.core.async.t_cljs$core$async31234.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31234.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async31234.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31234.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__31225_SHARP_){
var G__31245 = (((p1__31225_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__31225_SHARP_) : self__.f.call(null,p1__31225_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31245) : f1.call(null,G__31245));
});
}));

(cljs.core.async.t_cljs$core$async31234.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31228","meta31228",-986017410,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31227","cljs.core.async/t_cljs$core$async31227",736187034,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31235","meta31235",-1845687035,null)], null);
}));

(cljs.core.async.t_cljs$core$async31234.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31234.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31234");

(cljs.core.async.t_cljs$core$async31234.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31234");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31234.
 */
cljs.core.async.__GT_t_cljs$core$async31234 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31234(f__$1,ch__$1,meta31228__$1,___$2,fn1__$1,meta31235){
return (new cljs.core.async.t_cljs$core$async31234(f__$1,ch__$1,meta31228__$1,___$2,fn1__$1,meta31235));
});

}

return (new cljs.core.async.t_cljs$core$async31234(self__.f,self__.ch,self__.meta31228,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31278 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31278) : self__.f.call(null,G__31278));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async31227.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31227.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async31227.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31228","meta31228",-986017410,null)], null);
}));

(cljs.core.async.t_cljs$core$async31227.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31227.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31227");

(cljs.core.async.t_cljs$core$async31227.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31227");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31227.
 */
cljs.core.async.__GT_t_cljs$core$async31227 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31227(f__$1,ch__$1,meta31228){
return (new cljs.core.async.t_cljs$core$async31227(f__$1,ch__$1,meta31228));
});

}

return (new cljs.core.async.t_cljs$core$async31227(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31288 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31288 = (function (f,ch,meta31289){
this.f = f;
this.ch = ch;
this.meta31289 = meta31289;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31288.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31290,meta31289__$1){
var self__ = this;
var _31290__$1 = this;
return (new cljs.core.async.t_cljs$core$async31288(self__.f,self__.ch,meta31289__$1));
}));

(cljs.core.async.t_cljs$core$async31288.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31290){
var self__ = this;
var _31290__$1 = this;
return self__.meta31289;
}));

(cljs.core.async.t_cljs$core$async31288.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31288.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31288.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31288.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31288.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31288.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async31288.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31289","meta31289",-154881234,null)], null);
}));

(cljs.core.async.t_cljs$core$async31288.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31288.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31288");

(cljs.core.async.t_cljs$core$async31288.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31288");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31288.
 */
cljs.core.async.__GT_t_cljs$core$async31288 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31288(f__$1,ch__$1,meta31289){
return (new cljs.core.async.t_cljs$core$async31288(f__$1,ch__$1,meta31289));
});

}

return (new cljs.core.async.t_cljs$core$async31288(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31308 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31308 = (function (p,ch,meta31309){
this.p = p;
this.ch = ch;
this.meta31309 = meta31309;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31310,meta31309__$1){
var self__ = this;
var _31310__$1 = this;
return (new cljs.core.async.t_cljs$core$async31308(self__.p,self__.ch,meta31309__$1));
}));

(cljs.core.async.t_cljs$core$async31308.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31310){
var self__ = this;
var _31310__$1 = this;
return self__.meta31309;
}));

(cljs.core.async.t_cljs$core$async31308.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31308.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31308.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31308.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31308.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31308.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31308.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async31308.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31309","meta31309",2109977181,null)], null);
}));

(cljs.core.async.t_cljs$core$async31308.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31308.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31308");

(cljs.core.async.t_cljs$core$async31308.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31308");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31308.
 */
cljs.core.async.__GT_t_cljs$core$async31308 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31308(p__$1,ch__$1,meta31309){
return (new cljs.core.async.t_cljs$core$async31308(p__$1,ch__$1,meta31309));
});

}

return (new cljs.core.async.t_cljs$core$async31308(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__31373 = arguments.length;
switch (G__31373) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28561__auto___33477 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28562__auto__ = (function (){var switch__28401__auto__ = (function (state_31407){
var state_val_31411 = (state_31407[(1)]);
if((state_val_31411 === (7))){
var inst_31402 = (state_31407[(2)]);
var state_31407__$1 = state_31407;
var statearr_31423_33485 = state_31407__$1;
(statearr_31423_33485[(2)] = inst_31402);

(statearr_31423_33485[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31411 === (1))){
var state_31407__$1 = state_31407;
var statearr_31425_33491 = state_31407__$1;
(statearr_31425_33491[(2)] = null);

(statearr_31425_33491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31411 === (4))){
var inst_31379 = (state_31407[(7)]);
var inst_31379__$1 = (state_31407[(2)]);
var inst_31387 = (inst_31379__$1 == null);
var state_31407__$1 = (function (){var statearr_31436 = state_31407;
(statearr_31436[(7)] = inst_31379__$1);

return statearr_31436;
})();
if(cljs.core.truth_(inst_31387)){
var statearr_31437_33494 = state_31407__$1;
(statearr_31437_33494[(1)] = (5));

} else {
var statearr_31442_33496 = state_31407__$1;
(statearr_31442_33496[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31411 === (6))){
var inst_31379 = (state_31407[(7)]);
var inst_31392 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31379) : p.call(null,inst_31379));
var state_31407__$1 = state_31407;
if(cljs.core.truth_(inst_31392)){
var statearr_31447_33497 = state_31407__$1;
(statearr_31447_33497[(1)] = (8));

} else {
var statearr_31448_33498 = state_31407__$1;
(statearr_31448_33498[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31411 === (3))){
var inst_31404 = (state_31407[(2)]);
var state_31407__$1 = state_31407;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31407__$1,inst_31404);
} else {
if((state_val_31411 === (2))){
var state_31407__$1 = state_31407;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31407__$1,(4),ch);
} else {
if((state_val_31411 === (11))){
var inst_31395 = (state_31407[(2)]);
var state_31407__$1 = state_31407;
var statearr_31449_33507 = state_31407__$1;
(statearr_31449_33507[(2)] = inst_31395);

(statearr_31449_33507[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31411 === (9))){
var state_31407__$1 = state_31407;
var statearr_31450_33508 = state_31407__$1;
(statearr_31450_33508[(2)] = null);

(statearr_31450_33508[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31411 === (5))){
var inst_31389 = cljs.core.async.close_BANG_(out);
var state_31407__$1 = state_31407;
var statearr_31452_33512 = state_31407__$1;
(statearr_31452_33512[(2)] = inst_31389);

(statearr_31452_33512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31411 === (10))){
var inst_31398 = (state_31407[(2)]);
var state_31407__$1 = (function (){var statearr_31453 = state_31407;
(statearr_31453[(8)] = inst_31398);

return statearr_31453;
})();
var statearr_31454_33513 = state_31407__$1;
(statearr_31454_33513[(2)] = null);

(statearr_31454_33513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31411 === (8))){
var inst_31379 = (state_31407[(7)]);
var state_31407__$1 = state_31407;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31407__$1,(11),out,inst_31379);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28402__auto__ = null;
var cljs$core$async$state_machine__28402__auto____0 = (function (){
var statearr_31456 = [null,null,null,null,null,null,null,null,null];
(statearr_31456[(0)] = cljs$core$async$state_machine__28402__auto__);

(statearr_31456[(1)] = (1));

return statearr_31456;
});
var cljs$core$async$state_machine__28402__auto____1 = (function (state_31407){
while(true){
var ret_value__28403__auto__ = (function (){try{while(true){
var result__28404__auto__ = switch__28401__auto__(state_31407);
if(cljs.core.keyword_identical_QMARK_(result__28404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28404__auto__;
}
break;
}
}catch (e31457){var ex__28405__auto__ = e31457;
var statearr_31458_33517 = state_31407;
(statearr_31458_33517[(2)] = ex__28405__auto__);


if(cljs.core.seq((state_31407[(4)]))){
var statearr_31460_33518 = state_31407;
(statearr_31460_33518[(1)] = cljs.core.first((state_31407[(4)])));

} else {
throw ex__28405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33522 = state_31407;
state_31407 = G__33522;
continue;
} else {
return ret_value__28403__auto__;
}
break;
}
});
cljs$core$async$state_machine__28402__auto__ = function(state_31407){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28402__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28402__auto____1.call(this,state_31407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28402__auto____0;
cljs$core$async$state_machine__28402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28402__auto____1;
return cljs$core$async$state_machine__28402__auto__;
})()
})();
var state__28563__auto__ = (function (){var statearr_31466 = f__28562__auto__();
(statearr_31466[(6)] = c__28561__auto___33477);

return statearr_31466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28563__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__31469 = arguments.length;
switch (G__31469) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28561__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28562__auto__ = (function (){var switch__28401__auto__ = (function (state_31582){
var state_val_31583 = (state_31582[(1)]);
if((state_val_31583 === (7))){
var inst_31573 = (state_31582[(2)]);
var state_31582__$1 = state_31582;
var statearr_31587_33527 = state_31582__$1;
(statearr_31587_33527[(2)] = inst_31573);

(statearr_31587_33527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31583 === (20))){
var inst_31539 = (state_31582[(7)]);
var inst_31554 = (state_31582[(2)]);
var inst_31555 = cljs.core.next(inst_31539);
var inst_31513 = inst_31555;
var inst_31514 = null;
var inst_31515 = (0);
var inst_31516 = (0);
var state_31582__$1 = (function (){var statearr_31589 = state_31582;
(statearr_31589[(8)] = inst_31516);

(statearr_31589[(9)] = inst_31554);

(statearr_31589[(10)] = inst_31513);

(statearr_31589[(11)] = inst_31515);

(statearr_31589[(12)] = inst_31514);

return statearr_31589;
})();
var statearr_31590_33532 = state_31582__$1;
(statearr_31590_33532[(2)] = null);

(statearr_31590_33532[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31583 === (1))){
var state_31582__$1 = state_31582;
var statearr_31591_33536 = state_31582__$1;
(statearr_31591_33536[(2)] = null);

(statearr_31591_33536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31583 === (4))){
var inst_31494 = (state_31582[(13)]);
var inst_31494__$1 = (state_31582[(2)]);
var inst_31499 = (inst_31494__$1 == null);
var state_31582__$1 = (function (){var statearr_31592 = state_31582;
(statearr_31592[(13)] = inst_31494__$1);

return statearr_31592;
})();
if(cljs.core.truth_(inst_31499)){
var statearr_31593_33542 = state_31582__$1;
(statearr_31593_33542[(1)] = (5));

} else {
var statearr_31597_33543 = state_31582__$1;
(statearr_31597_33543[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31583 === (15))){
var state_31582__$1 = state_31582;
var statearr_31602_33548 = state_31582__$1;
(statearr_31602_33548[(2)] = null);

(statearr_31602_33548[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31583 === (21))){
var state_31582__$1 = state_31582;
var statearr_31603_33551 = state_31582__$1;
(statearr_31603_33551[(2)] = null);

(statearr_31603_33551[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31583 === (13))){
var inst_31516 = (state_31582[(8)]);
var inst_31513 = (state_31582[(10)]);
var inst_31515 = (state_31582[(11)]);
var inst_31514 = (state_31582[(12)]);
var inst_31527 = (state_31582[(2)]);
var inst_31528 = (inst_31516 + (1));
var tmp31598 = inst_31513;
var tmp31599 = inst_31515;
var tmp31600 = inst_31514;
var inst_31513__$1 = tmp31598;
var inst_31514__$1 = tmp31600;
var inst_31515__$1 = tmp31599;
var inst_31516__$1 = inst_31528;
var state_31582__$1 = (function (){var statearr_31605 = state_31582;
(statearr_31605[(8)] = inst_31516__$1);

(statearr_31605[(10)] = inst_31513__$1);

(statearr_31605[(11)] = inst_31515__$1);

(statearr_31605[(14)] = inst_31527);

(statearr_31605[(12)] = inst_31514__$1);

return statearr_31605;
})();
var statearr_31606_33560 = state_31582__$1;
(statearr_31606_33560[(2)] = null);

(statearr_31606_33560[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31583 === (22))){
var state_31582__$1 = state_31582;
var statearr_31607_33565 = state_31582__$1;
(statearr_31607_33565[(2)] = null);

(statearr_31607_33565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31583 === (6))){
var inst_31494 = (state_31582[(13)]);
var inst_31507 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31494) : f.call(null,inst_31494));
var inst_31508 = cljs.core.seq(inst_31507);
var inst_31513 = inst_31508;
var inst_31514 = null;
var inst_31515 = (0);
var inst_31516 = (0);
var state_31582__$1 = (function (){var statearr_31609 = state_31582;
(statearr_31609[(8)] = inst_31516);

(statearr_31609[(10)] = inst_31513);

(statearr_31609[(11)] = inst_31515);

(statearr_31609[(12)] = inst_31514);

return statearr_31609;
})();
var statearr_31610_33570 = state_31582__$1;
(statearr_31610_33570[(2)] = null);

(statearr_31610_33570[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31583 === (17))){
var inst_31539 = (state_31582[(7)]);
var inst_31547 = cljs.core.chunk_first(inst_31539);
var inst_31548 = cljs.core.chunk_rest(inst_31539);
var inst_31549 = cljs.core.count(inst_31547);
var inst_31513 = inst_31548;
var inst_31514 = inst_31547;
var inst_31515 = inst_31549;
var inst_31516 = (0);
var state_31582__$1 = (function (){var statearr_31611 = state_31582;
(statearr_31611[(8)] = inst_31516);

(statearr_31611[(10)] = inst_31513);

(statearr_31611[(11)] = inst_31515);

(statearr_31611[(12)] = inst_31514);

return statearr_31611;
})();
var statearr_31612_33580 = state_31582__$1;
(statearr_31612_33580[(2)] = null);

(statearr_31612_33580[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31583 === (3))){
var inst_31575 = (state_31582[(2)]);
var state_31582__$1 = state_31582;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31582__$1,inst_31575);
} else {
if((state_val_31583 === (12))){
var inst_31563 = (state_31582[(2)]);
var state_31582__$1 = state_31582;
var statearr_31614_33584 = state_31582__$1;
(statearr_31614_33584[(2)] = inst_31563);

(statearr_31614_33584[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31583 === (2))){
var state_31582__$1 = state_31582;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31582__$1,(4),in$);
} else {
if((state_val_31583 === (23))){
var inst_31571 = (state_31582[(2)]);
var state_31582__$1 = state_31582;
var statearr_31615_33585 = state_31582__$1;
(statearr_31615_33585[(2)] = inst_31571);

(statearr_31615_33585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31583 === (19))){
var inst_31558 = (state_31582[(2)]);
var state_31582__$1 = state_31582;
var statearr_31617_33588 = state_31582__$1;
(statearr_31617_33588[(2)] = inst_31558);

(statearr_31617_33588[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31583 === (11))){
var inst_31513 = (state_31582[(10)]);
var inst_31539 = (state_31582[(7)]);
var inst_31539__$1 = cljs.core.seq(inst_31513);
var state_31582__$1 = (function (){var statearr_31621 = state_31582;
(statearr_31621[(7)] = inst_31539__$1);

return statearr_31621;
})();
if(inst_31539__$1){
var statearr_31622_33592 = state_31582__$1;
(statearr_31622_33592[(1)] = (14));

} else {
var statearr_31623_33593 = state_31582__$1;
(statearr_31623_33593[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31583 === (9))){
var inst_31565 = (state_31582[(2)]);
var inst_31566 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_31582__$1 = (function (){var statearr_31624 = state_31582;
(statearr_31624[(15)] = inst_31565);

return statearr_31624;
})();
if(cljs.core.truth_(inst_31566)){
var statearr_31625_33596 = state_31582__$1;
(statearr_31625_33596[(1)] = (21));

} else {
var statearr_31626_33598 = state_31582__$1;
(statearr_31626_33598[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31583 === (5))){
var inst_31501 = cljs.core.async.close_BANG_(out);
var state_31582__$1 = state_31582;
var statearr_31628_33599 = state_31582__$1;
(statearr_31628_33599[(2)] = inst_31501);

(statearr_31628_33599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31583 === (14))){
var inst_31539 = (state_31582[(7)]);
var inst_31545 = cljs.core.chunked_seq_QMARK_(inst_31539);
var state_31582__$1 = state_31582;
if(inst_31545){
var statearr_31630_33601 = state_31582__$1;
(statearr_31630_33601[(1)] = (17));

} else {
var statearr_31631_33602 = state_31582__$1;
(statearr_31631_33602[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31583 === (16))){
var inst_31561 = (state_31582[(2)]);
var state_31582__$1 = state_31582;
var statearr_31632_33605 = state_31582__$1;
(statearr_31632_33605[(2)] = inst_31561);

(statearr_31632_33605[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31583 === (10))){
var inst_31516 = (state_31582[(8)]);
var inst_31514 = (state_31582[(12)]);
var inst_31525 = cljs.core._nth(inst_31514,inst_31516);
var state_31582__$1 = state_31582;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31582__$1,(13),out,inst_31525);
} else {
if((state_val_31583 === (18))){
var inst_31539 = (state_31582[(7)]);
var inst_31552 = cljs.core.first(inst_31539);
var state_31582__$1 = state_31582;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31582__$1,(20),out,inst_31552);
} else {
if((state_val_31583 === (8))){
var inst_31516 = (state_31582[(8)]);
var inst_31515 = (state_31582[(11)]);
var inst_31522 = (inst_31516 < inst_31515);
var inst_31523 = inst_31522;
var state_31582__$1 = state_31582;
if(cljs.core.truth_(inst_31523)){
var statearr_31638_33611 = state_31582__$1;
(statearr_31638_33611[(1)] = (10));

} else {
var statearr_31640_33613 = state_31582__$1;
(statearr_31640_33613[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28402__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28402__auto____0 = (function (){
var statearr_31642 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31642[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28402__auto__);

(statearr_31642[(1)] = (1));

return statearr_31642;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28402__auto____1 = (function (state_31582){
while(true){
var ret_value__28403__auto__ = (function (){try{while(true){
var result__28404__auto__ = switch__28401__auto__(state_31582);
if(cljs.core.keyword_identical_QMARK_(result__28404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28404__auto__;
}
break;
}
}catch (e31643){var ex__28405__auto__ = e31643;
var statearr_31644_33618 = state_31582;
(statearr_31644_33618[(2)] = ex__28405__auto__);


if(cljs.core.seq((state_31582[(4)]))){
var statearr_31646_33620 = state_31582;
(statearr_31646_33620[(1)] = cljs.core.first((state_31582[(4)])));

} else {
throw ex__28405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33623 = state_31582;
state_31582 = G__33623;
continue;
} else {
return ret_value__28403__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28402__auto__ = function(state_31582){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28402__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28402__auto____1.call(this,state_31582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28402__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28402__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28402__auto__;
})()
})();
var state__28563__auto__ = (function (){var statearr_31649 = f__28562__auto__();
(statearr_31649[(6)] = c__28561__auto__);

return statearr_31649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28563__auto__);
}));

return c__28561__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__31652 = arguments.length;
switch (G__31652) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__31662 = arguments.length;
switch (G__31662) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__31674 = arguments.length;
switch (G__31674) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28561__auto___33653 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28562__auto__ = (function (){var switch__28401__auto__ = (function (state_31719){
var state_val_31720 = (state_31719[(1)]);
if((state_val_31720 === (7))){
var inst_31714 = (state_31719[(2)]);
var state_31719__$1 = state_31719;
var statearr_31724_33660 = state_31719__$1;
(statearr_31724_33660[(2)] = inst_31714);

(statearr_31724_33660[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31720 === (1))){
var inst_31689 = null;
var state_31719__$1 = (function (){var statearr_31725 = state_31719;
(statearr_31725[(7)] = inst_31689);

return statearr_31725;
})();
var statearr_31726_33672 = state_31719__$1;
(statearr_31726_33672[(2)] = null);

(statearr_31726_33672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31720 === (4))){
var inst_31697 = (state_31719[(8)]);
var inst_31697__$1 = (state_31719[(2)]);
var inst_31699 = (inst_31697__$1 == null);
var inst_31700 = cljs.core.not(inst_31699);
var state_31719__$1 = (function (){var statearr_31729 = state_31719;
(statearr_31729[(8)] = inst_31697__$1);

return statearr_31729;
})();
if(inst_31700){
var statearr_31731_33680 = state_31719__$1;
(statearr_31731_33680[(1)] = (5));

} else {
var statearr_31732_33686 = state_31719__$1;
(statearr_31732_33686[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31720 === (6))){
var state_31719__$1 = state_31719;
var statearr_31733_33689 = state_31719__$1;
(statearr_31733_33689[(2)] = null);

(statearr_31733_33689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31720 === (3))){
var inst_31716 = (state_31719[(2)]);
var inst_31717 = cljs.core.async.close_BANG_(out);
var state_31719__$1 = (function (){var statearr_31737 = state_31719;
(statearr_31737[(9)] = inst_31716);

return statearr_31737;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31719__$1,inst_31717);
} else {
if((state_val_31720 === (2))){
var state_31719__$1 = state_31719;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31719__$1,(4),ch);
} else {
if((state_val_31720 === (11))){
var inst_31697 = (state_31719[(8)]);
var inst_31708 = (state_31719[(2)]);
var inst_31689 = inst_31697;
var state_31719__$1 = (function (){var statearr_31740 = state_31719;
(statearr_31740[(10)] = inst_31708);

(statearr_31740[(7)] = inst_31689);

return statearr_31740;
})();
var statearr_31742_33698 = state_31719__$1;
(statearr_31742_33698[(2)] = null);

(statearr_31742_33698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31720 === (9))){
var inst_31697 = (state_31719[(8)]);
var state_31719__$1 = state_31719;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31719__$1,(11),out,inst_31697);
} else {
if((state_val_31720 === (5))){
var inst_31697 = (state_31719[(8)]);
var inst_31689 = (state_31719[(7)]);
var inst_31703 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31697,inst_31689);
var state_31719__$1 = state_31719;
if(inst_31703){
var statearr_31748_33706 = state_31719__$1;
(statearr_31748_33706[(1)] = (8));

} else {
var statearr_31749_33711 = state_31719__$1;
(statearr_31749_33711[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31720 === (10))){
var inst_31711 = (state_31719[(2)]);
var state_31719__$1 = state_31719;
var statearr_31750_33717 = state_31719__$1;
(statearr_31750_33717[(2)] = inst_31711);

(statearr_31750_33717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31720 === (8))){
var inst_31689 = (state_31719[(7)]);
var tmp31743 = inst_31689;
var inst_31689__$1 = tmp31743;
var state_31719__$1 = (function (){var statearr_31751 = state_31719;
(statearr_31751[(7)] = inst_31689__$1);

return statearr_31751;
})();
var statearr_31755_33730 = state_31719__$1;
(statearr_31755_33730[(2)] = null);

(statearr_31755_33730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28402__auto__ = null;
var cljs$core$async$state_machine__28402__auto____0 = (function (){
var statearr_31757 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31757[(0)] = cljs$core$async$state_machine__28402__auto__);

(statearr_31757[(1)] = (1));

return statearr_31757;
});
var cljs$core$async$state_machine__28402__auto____1 = (function (state_31719){
while(true){
var ret_value__28403__auto__ = (function (){try{while(true){
var result__28404__auto__ = switch__28401__auto__(state_31719);
if(cljs.core.keyword_identical_QMARK_(result__28404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28404__auto__;
}
break;
}
}catch (e31758){var ex__28405__auto__ = e31758;
var statearr_31759_33753 = state_31719;
(statearr_31759_33753[(2)] = ex__28405__auto__);


if(cljs.core.seq((state_31719[(4)]))){
var statearr_31760_33759 = state_31719;
(statearr_31760_33759[(1)] = cljs.core.first((state_31719[(4)])));

} else {
throw ex__28405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33768 = state_31719;
state_31719 = G__33768;
continue;
} else {
return ret_value__28403__auto__;
}
break;
}
});
cljs$core$async$state_machine__28402__auto__ = function(state_31719){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28402__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28402__auto____1.call(this,state_31719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28402__auto____0;
cljs$core$async$state_machine__28402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28402__auto____1;
return cljs$core$async$state_machine__28402__auto__;
})()
})();
var state__28563__auto__ = (function (){var statearr_31765 = f__28562__auto__();
(statearr_31765[(6)] = c__28561__auto___33653);

return statearr_31765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28563__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__31773 = arguments.length;
switch (G__31773) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28561__auto___33797 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28562__auto__ = (function (){var switch__28401__auto__ = (function (state_31814){
var state_val_31815 = (state_31814[(1)]);
if((state_val_31815 === (7))){
var inst_31810 = (state_31814[(2)]);
var state_31814__$1 = state_31814;
var statearr_31819_33807 = state_31814__$1;
(statearr_31819_33807[(2)] = inst_31810);

(statearr_31819_33807[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31815 === (1))){
var inst_31777 = (new Array(n));
var inst_31778 = inst_31777;
var inst_31779 = (0);
var state_31814__$1 = (function (){var statearr_31820 = state_31814;
(statearr_31820[(7)] = inst_31779);

(statearr_31820[(8)] = inst_31778);

return statearr_31820;
})();
var statearr_31821_33821 = state_31814__$1;
(statearr_31821_33821[(2)] = null);

(statearr_31821_33821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31815 === (4))){
var inst_31782 = (state_31814[(9)]);
var inst_31782__$1 = (state_31814[(2)]);
var inst_31783 = (inst_31782__$1 == null);
var inst_31784 = cljs.core.not(inst_31783);
var state_31814__$1 = (function (){var statearr_31825 = state_31814;
(statearr_31825[(9)] = inst_31782__$1);

return statearr_31825;
})();
if(inst_31784){
var statearr_31826_33830 = state_31814__$1;
(statearr_31826_33830[(1)] = (5));

} else {
var statearr_31827_33833 = state_31814__$1;
(statearr_31827_33833[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31815 === (15))){
var inst_31804 = (state_31814[(2)]);
var state_31814__$1 = state_31814;
var statearr_31828_33834 = state_31814__$1;
(statearr_31828_33834[(2)] = inst_31804);

(statearr_31828_33834[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31815 === (13))){
var state_31814__$1 = state_31814;
var statearr_31829_33839 = state_31814__$1;
(statearr_31829_33839[(2)] = null);

(statearr_31829_33839[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31815 === (6))){
var inst_31779 = (state_31814[(7)]);
var inst_31800 = (inst_31779 > (0));
var state_31814__$1 = state_31814;
if(cljs.core.truth_(inst_31800)){
var statearr_31833_33841 = state_31814__$1;
(statearr_31833_33841[(1)] = (12));

} else {
var statearr_31834_33843 = state_31814__$1;
(statearr_31834_33843[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31815 === (3))){
var inst_31812 = (state_31814[(2)]);
var state_31814__$1 = state_31814;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31814__$1,inst_31812);
} else {
if((state_val_31815 === (12))){
var inst_31778 = (state_31814[(8)]);
var inst_31802 = cljs.core.vec(inst_31778);
var state_31814__$1 = state_31814;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31814__$1,(15),out,inst_31802);
} else {
if((state_val_31815 === (2))){
var state_31814__$1 = state_31814;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31814__$1,(4),ch);
} else {
if((state_val_31815 === (11))){
var inst_31794 = (state_31814[(2)]);
var inst_31795 = (new Array(n));
var inst_31778 = inst_31795;
var inst_31779 = (0);
var state_31814__$1 = (function (){var statearr_31840 = state_31814;
(statearr_31840[(7)] = inst_31779);

(statearr_31840[(10)] = inst_31794);

(statearr_31840[(8)] = inst_31778);

return statearr_31840;
})();
var statearr_31841_33852 = state_31814__$1;
(statearr_31841_33852[(2)] = null);

(statearr_31841_33852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31815 === (9))){
var inst_31778 = (state_31814[(8)]);
var inst_31792 = cljs.core.vec(inst_31778);
var state_31814__$1 = state_31814;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31814__$1,(11),out,inst_31792);
} else {
if((state_val_31815 === (5))){
var inst_31779 = (state_31814[(7)]);
var inst_31782 = (state_31814[(9)]);
var inst_31778 = (state_31814[(8)]);
var inst_31787 = (state_31814[(11)]);
var inst_31786 = (inst_31778[inst_31779] = inst_31782);
var inst_31787__$1 = (inst_31779 + (1));
var inst_31788 = (inst_31787__$1 < n);
var state_31814__$1 = (function (){var statearr_31845 = state_31814;
(statearr_31845[(12)] = inst_31786);

(statearr_31845[(11)] = inst_31787__$1);

return statearr_31845;
})();
if(cljs.core.truth_(inst_31788)){
var statearr_31847_33863 = state_31814__$1;
(statearr_31847_33863[(1)] = (8));

} else {
var statearr_31848_33864 = state_31814__$1;
(statearr_31848_33864[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31815 === (14))){
var inst_31807 = (state_31814[(2)]);
var inst_31808 = cljs.core.async.close_BANG_(out);
var state_31814__$1 = (function (){var statearr_31850 = state_31814;
(statearr_31850[(13)] = inst_31807);

return statearr_31850;
})();
var statearr_31851_33865 = state_31814__$1;
(statearr_31851_33865[(2)] = inst_31808);

(statearr_31851_33865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31815 === (10))){
var inst_31798 = (state_31814[(2)]);
var state_31814__$1 = state_31814;
var statearr_31852_33869 = state_31814__$1;
(statearr_31852_33869[(2)] = inst_31798);

(statearr_31852_33869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31815 === (8))){
var inst_31778 = (state_31814[(8)]);
var inst_31787 = (state_31814[(11)]);
var tmp31849 = inst_31778;
var inst_31778__$1 = tmp31849;
var inst_31779 = inst_31787;
var state_31814__$1 = (function (){var statearr_31854 = state_31814;
(statearr_31854[(7)] = inst_31779);

(statearr_31854[(8)] = inst_31778__$1);

return statearr_31854;
})();
var statearr_31856_33876 = state_31814__$1;
(statearr_31856_33876[(2)] = null);

(statearr_31856_33876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28402__auto__ = null;
var cljs$core$async$state_machine__28402__auto____0 = (function (){
var statearr_31858 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31858[(0)] = cljs$core$async$state_machine__28402__auto__);

(statearr_31858[(1)] = (1));

return statearr_31858;
});
var cljs$core$async$state_machine__28402__auto____1 = (function (state_31814){
while(true){
var ret_value__28403__auto__ = (function (){try{while(true){
var result__28404__auto__ = switch__28401__auto__(state_31814);
if(cljs.core.keyword_identical_QMARK_(result__28404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28404__auto__;
}
break;
}
}catch (e31859){var ex__28405__auto__ = e31859;
var statearr_31860_33882 = state_31814;
(statearr_31860_33882[(2)] = ex__28405__auto__);


if(cljs.core.seq((state_31814[(4)]))){
var statearr_31861_33888 = state_31814;
(statearr_31861_33888[(1)] = cljs.core.first((state_31814[(4)])));

} else {
throw ex__28405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33890 = state_31814;
state_31814 = G__33890;
continue;
} else {
return ret_value__28403__auto__;
}
break;
}
});
cljs$core$async$state_machine__28402__auto__ = function(state_31814){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28402__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28402__auto____1.call(this,state_31814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28402__auto____0;
cljs$core$async$state_machine__28402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28402__auto____1;
return cljs$core$async$state_machine__28402__auto__;
})()
})();
var state__28563__auto__ = (function (){var statearr_31862 = f__28562__auto__();
(statearr_31862[(6)] = c__28561__auto___33797);

return statearr_31862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28563__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__31866 = arguments.length;
switch (G__31866) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28561__auto___33902 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28562__auto__ = (function (){var switch__28401__auto__ = (function (state_31912){
var state_val_31913 = (state_31912[(1)]);
if((state_val_31913 === (7))){
var inst_31908 = (state_31912[(2)]);
var state_31912__$1 = state_31912;
var statearr_31916_33903 = state_31912__$1;
(statearr_31916_33903[(2)] = inst_31908);

(statearr_31916_33903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31913 === (1))){
var inst_31870 = [];
var inst_31872 = inst_31870;
var inst_31873 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31912__$1 = (function (){var statearr_31918 = state_31912;
(statearr_31918[(7)] = inst_31873);

(statearr_31918[(8)] = inst_31872);

return statearr_31918;
})();
var statearr_31921_33906 = state_31912__$1;
(statearr_31921_33906[(2)] = null);

(statearr_31921_33906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31913 === (4))){
var inst_31876 = (state_31912[(9)]);
var inst_31876__$1 = (state_31912[(2)]);
var inst_31877 = (inst_31876__$1 == null);
var inst_31878 = cljs.core.not(inst_31877);
var state_31912__$1 = (function (){var statearr_31924 = state_31912;
(statearr_31924[(9)] = inst_31876__$1);

return statearr_31924;
})();
if(inst_31878){
var statearr_31925_33907 = state_31912__$1;
(statearr_31925_33907[(1)] = (5));

} else {
var statearr_31926_33908 = state_31912__$1;
(statearr_31926_33908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31913 === (15))){
var inst_31902 = (state_31912[(2)]);
var state_31912__$1 = state_31912;
var statearr_31930_33909 = state_31912__$1;
(statearr_31930_33909[(2)] = inst_31902);

(statearr_31930_33909[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31913 === (13))){
var state_31912__$1 = state_31912;
var statearr_31935_33910 = state_31912__$1;
(statearr_31935_33910[(2)] = null);

(statearr_31935_33910[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31913 === (6))){
var inst_31872 = (state_31912[(8)]);
var inst_31897 = inst_31872.length;
var inst_31898 = (inst_31897 > (0));
var state_31912__$1 = state_31912;
if(cljs.core.truth_(inst_31898)){
var statearr_31937_33912 = state_31912__$1;
(statearr_31937_33912[(1)] = (12));

} else {
var statearr_31938_33914 = state_31912__$1;
(statearr_31938_33914[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31913 === (3))){
var inst_31910 = (state_31912[(2)]);
var state_31912__$1 = state_31912;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31912__$1,inst_31910);
} else {
if((state_val_31913 === (12))){
var inst_31872 = (state_31912[(8)]);
var inst_31900 = cljs.core.vec(inst_31872);
var state_31912__$1 = state_31912;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31912__$1,(15),out,inst_31900);
} else {
if((state_val_31913 === (2))){
var state_31912__$1 = state_31912;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31912__$1,(4),ch);
} else {
if((state_val_31913 === (11))){
var inst_31880 = (state_31912[(10)]);
var inst_31876 = (state_31912[(9)]);
var inst_31890 = (state_31912[(2)]);
var inst_31891 = [];
var inst_31892 = inst_31891.push(inst_31876);
var inst_31872 = inst_31891;
var inst_31873 = inst_31880;
var state_31912__$1 = (function (){var statearr_31950 = state_31912;
(statearr_31950[(7)] = inst_31873);

(statearr_31950[(8)] = inst_31872);

(statearr_31950[(11)] = inst_31892);

(statearr_31950[(12)] = inst_31890);

return statearr_31950;
})();
var statearr_31952_33924 = state_31912__$1;
(statearr_31952_33924[(2)] = null);

(statearr_31952_33924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31913 === (9))){
var inst_31872 = (state_31912[(8)]);
var inst_31888 = cljs.core.vec(inst_31872);
var state_31912__$1 = state_31912;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31912__$1,(11),out,inst_31888);
} else {
if((state_val_31913 === (5))){
var inst_31880 = (state_31912[(10)]);
var inst_31873 = (state_31912[(7)]);
var inst_31876 = (state_31912[(9)]);
var inst_31880__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31876) : f.call(null,inst_31876));
var inst_31881 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31880__$1,inst_31873);
var inst_31882 = cljs.core.keyword_identical_QMARK_(inst_31873,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31883 = ((inst_31881) || (inst_31882));
var state_31912__$1 = (function (){var statearr_31958 = state_31912;
(statearr_31958[(10)] = inst_31880__$1);

return statearr_31958;
})();
if(cljs.core.truth_(inst_31883)){
var statearr_31959_33925 = state_31912__$1;
(statearr_31959_33925[(1)] = (8));

} else {
var statearr_31960_33926 = state_31912__$1;
(statearr_31960_33926[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31913 === (14))){
var inst_31905 = (state_31912[(2)]);
var inst_31906 = cljs.core.async.close_BANG_(out);
var state_31912__$1 = (function (){var statearr_31969 = state_31912;
(statearr_31969[(13)] = inst_31905);

return statearr_31969;
})();
var statearr_31970_33929 = state_31912__$1;
(statearr_31970_33929[(2)] = inst_31906);

(statearr_31970_33929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31913 === (10))){
var inst_31895 = (state_31912[(2)]);
var state_31912__$1 = state_31912;
var statearr_31971_33930 = state_31912__$1;
(statearr_31971_33930[(2)] = inst_31895);

(statearr_31971_33930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31913 === (8))){
var inst_31880 = (state_31912[(10)]);
var inst_31872 = (state_31912[(8)]);
var inst_31876 = (state_31912[(9)]);
var inst_31885 = inst_31872.push(inst_31876);
var tmp31965 = inst_31872;
var inst_31872__$1 = tmp31965;
var inst_31873 = inst_31880;
var state_31912__$1 = (function (){var statearr_31973 = state_31912;
(statearr_31973[(14)] = inst_31885);

(statearr_31973[(7)] = inst_31873);

(statearr_31973[(8)] = inst_31872__$1);

return statearr_31973;
})();
var statearr_31975_33935 = state_31912__$1;
(statearr_31975_33935[(2)] = null);

(statearr_31975_33935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28402__auto__ = null;
var cljs$core$async$state_machine__28402__auto____0 = (function (){
var statearr_31979 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31979[(0)] = cljs$core$async$state_machine__28402__auto__);

(statearr_31979[(1)] = (1));

return statearr_31979;
});
var cljs$core$async$state_machine__28402__auto____1 = (function (state_31912){
while(true){
var ret_value__28403__auto__ = (function (){try{while(true){
var result__28404__auto__ = switch__28401__auto__(state_31912);
if(cljs.core.keyword_identical_QMARK_(result__28404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28404__auto__;
}
break;
}
}catch (e31980){var ex__28405__auto__ = e31980;
var statearr_31981_33938 = state_31912;
(statearr_31981_33938[(2)] = ex__28405__auto__);


if(cljs.core.seq((state_31912[(4)]))){
var statearr_31982_33939 = state_31912;
(statearr_31982_33939[(1)] = cljs.core.first((state_31912[(4)])));

} else {
throw ex__28405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33941 = state_31912;
state_31912 = G__33941;
continue;
} else {
return ret_value__28403__auto__;
}
break;
}
});
cljs$core$async$state_machine__28402__auto__ = function(state_31912){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28402__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28402__auto____1.call(this,state_31912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28402__auto____0;
cljs$core$async$state_machine__28402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28402__auto____1;
return cljs$core$async$state_machine__28402__auto__;
})()
})();
var state__28563__auto__ = (function (){var statearr_31984 = f__28562__auto__();
(statearr_31984[(6)] = c__28561__auto___33902);

return statearr_31984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28563__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
