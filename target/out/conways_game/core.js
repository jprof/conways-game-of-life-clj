// Compiled by ClojureScript 0.0-2030
goog.provide('conways_game.core');
goog.require('cljs.core');
conways_game.core.get_neighbors = (function get_neighbors(r,c){return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([(r - 1),(c - 1)], true),cljs.core.PersistentVector.fromArray([(r - 1),c], true),cljs.core.PersistentVector.fromArray([(r - 1),(c + 1)], true),cljs.core.PersistentVector.fromArray([r,(c - 1)], true),cljs.core.PersistentVector.fromArray([r,(c + 1)], true),cljs.core.PersistentVector.fromArray([(r + 1),(c - 1)], true),cljs.core.PersistentVector.fromArray([(r + 1),c], true),cljs.core.PersistentVector.fromArray([(r + 1),(c + 1)], true)], true);
});
conways_game.core.build_initial_grid = (function build_initial_grid(r_size,c_size){return cljs.core.vec((function (){var iter__3819__auto__ = (function iter__5197(s__5198){return (new cljs.core.LazySeq(null,(function (){var s__5198__$1 = s__5198;while(true){
var temp__4092__auto__ = cljs.core.seq(s__5198__$1);if(temp__4092__auto__)
{var s__5198__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__5198__$2))
{var c__3817__auto__ = cljs.core.chunk_first(s__5198__$2);var size__3818__auto__ = cljs.core.count(c__3817__auto__);var b__5200 = cljs.core.chunk_buffer(size__3818__auto__);if((function (){var i__5199 = 0;while(true){
if((i__5199 < size__3818__auto__))
{var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__3817__auto__,i__5199);cljs.core.chunk_append(b__5200,cljs.core.vec((function (){var iter__3819__auto__ = ((function (i__5199,r,c__3817__auto__,size__3818__auto__,b__5200,s__5198__$2,temp__4092__auto__){
return (function iter__5209(s__5210){return (new cljs.core.LazySeq(null,((function (i__5199,r,c__3817__auto__,size__3818__auto__,b__5200,s__5198__$2,temp__4092__auto__){
return (function (){var s__5210__$1 = s__5210;while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__5210__$1);if(temp__4092__auto____$1)
{var s__5210__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__5210__$2))
{var c__3817__auto____$1 = cljs.core.chunk_first(s__5210__$2);var size__3818__auto____$1 = cljs.core.count(c__3817__auto____$1);var b__5212 = cljs.core.chunk_buffer(size__3818__auto____$1);if((function (){var i__5211 = 0;while(true){
if((i__5211 < size__3818__auto____$1))
{var c = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__3817__auto____$1,i__5211);cljs.core.chunk_append(b__5212,".");
{
var G__5217 = (i__5211 + 1);
i__5211 = G__5217;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__5212),iter__5209(cljs.core.chunk_rest(s__5210__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__5212),null);
}
} else
{var c = cljs.core.first(s__5210__$2);return cljs.core.cons(".",iter__5209(cljs.core.rest(s__5210__$2)));
}
} else
{return null;
}
break;
}
});})(i__5199,r,c__3817__auto__,size__3818__auto__,b__5200,s__5198__$2,temp__4092__auto__))
,null,null));
});})(i__5199,r,c__3817__auto__,size__3818__auto__,b__5200,s__5198__$2,temp__4092__auto__))
;return iter__3819__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(c_size));
})()));
{
var G__5218 = (i__5199 + 1);
i__5199 = G__5218;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__5200),iter__5197(cljs.core.chunk_rest(s__5198__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__5200),null);
}
} else
{var r = cljs.core.first(s__5198__$2);return cljs.core.cons(cljs.core.vec((function (){var iter__3819__auto__ = ((function (r,s__5198__$2,temp__4092__auto__){
return (function iter__5213(s__5214){return (new cljs.core.LazySeq(null,((function (r,s__5198__$2,temp__4092__auto__){
return (function (){var s__5214__$1 = s__5214;while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__5214__$1);if(temp__4092__auto____$1)
{var s__5214__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__5214__$2))
{var c__3817__auto__ = cljs.core.chunk_first(s__5214__$2);var size__3818__auto__ = cljs.core.count(c__3817__auto__);var b__5216 = cljs.core.chunk_buffer(size__3818__auto__);if((function (){var i__5215 = 0;while(true){
if((i__5215 < size__3818__auto__))
{var c = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__3817__auto__,i__5215);cljs.core.chunk_append(b__5216,".");
{
var G__5219 = (i__5215 + 1);
i__5215 = G__5219;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__5216),iter__5213(cljs.core.chunk_rest(s__5214__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__5216),null);
}
} else
{var c = cljs.core.first(s__5214__$2);return cljs.core.cons(".",iter__5213(cljs.core.rest(s__5214__$2)));
}
} else
{return null;
}
break;
}
});})(r,s__5198__$2,temp__4092__auto__))
,null,null));
});})(r,s__5198__$2,temp__4092__auto__))
;return iter__3819__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(c_size));
})()),iter__5197(cljs.core.rest(s__5198__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3819__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(r_size));
})());
});
conways_game.core.is_alive_QMARK_ = (function is_alive_QMARK_(grid,rc){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(grid,rc),"*");
});
conways_game.core.alive_neighbors = (function alive_neighbors(grid,p__5220){var vec__5222 = p__5220;var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5222,0,null);var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5222,1,null);return cljs.core.filter(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(conways_game.core.is_alive_QMARK_,grid),conways_game.core.get_neighbors(r,c));
});
conways_game.core.goldie_locks_filter = (function goldie_locks_filter(value,neighbors){if(((3 >= cljs.core.count(neighbors))) && ((cljs.core.count(neighbors) >= 2)))
{return "*";
} else
{return ".";
}
});
conways_game.core.new_life_filter = (function new_life_filter(value,neighbors){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(3,cljs.core.count(neighbors)))
{return "*";
} else
{return ".";
}
});
conways_game.core.get_next_position = (function get_next_position(grid){var max_r = cljs.core.count(grid);var max_c = cljs.core.count(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(grid,0));var next_pos = conways_game.core.build_initial_grid(max_r,max_c);var curr_r = 0;var curr_c = 0;while(true){
var curr_val = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(grid,cljs.core.PersistentVector.fromArray([curr_r,curr_c], true));var neighbors = conways_game.core.alive_neighbors(grid,cljs.core.PersistentVector.fromArray([curr_r,curr_c], true));var next_val = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(curr_val,"*"))?conways_game.core.goldie_locks_filter(curr_val,neighbors):conways_game.core.new_life_filter(curr_val,neighbors));if(!((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(max_r,(curr_r + 1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(max_c,(curr_c + 1)))))
{{
var G__5223 = cljs.core.assoc_in(next_pos,cljs.core.PersistentVector.fromArray([curr_r,curr_c], true),next_val);
var G__5224 = (((max_c > (curr_c + 1)))?curr_r:(curr_r + 1));
var G__5225 = (((max_c > (curr_c + 1)))?(curr_c + 1):0);
next_pos = G__5223;
curr_r = G__5224;
curr_c = G__5225;
continue;
}
} else
{return cljs.core.assoc_in(next_pos,cljs.core.PersistentVector.fromArray([curr_r,curr_c], true),next_val);
}
break;
}
});
conways_game.core.convert_str_to_vec = (function convert_str_to_vec(s){var s_vec = (clojure.string.split_lines.cljs$core$IFn$_invoke$arity$1 ? clojure.string.split_lines.cljs$core$IFn$_invoke$arity$1(s) : clojure.string.split_lines.call(null,s));var get_cell_fn = ((function (s_vec){
return (function (v){return v;
});})(s_vec))
;return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (t){return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(get_cell_fn,t);
}),s_vec);
});
conways_game.core.get_nth_position = (function get_nth_position(grid,n){if((n > 0))
{return get_nth_position(conways_game.core.get_next_position(grid),(n - 1));
} else
{return grid;
}
});
conways_game.core.vec_to_string = (function vec_to_string(ve){var char_cat_fn = (function (v){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,v);
});var line_cat_fn = ((function (char_cat_fn){
return (function (s,t){return [cljs.core.str(s),cljs.core.str("\n"),cljs.core.str(t)].join('');
});})(char_cat_fn))
;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(line_cat_fn,cljs.core.map.cljs$core$IFn$_invoke$arity$2(char_cat_fn,ve));
});
