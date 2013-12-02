// Compiled by ClojureScript 0.0-2030
goog.provide('conways_game.web');
goog.require('cljs.core');
goog.require('conways_game.core');
goog.require('conways_game.core');
conways_game.web.canvas = document.getElementById("canvas");
conways_game.web.next_button = document.getElementById("next-position");
conways_game.web.ctx = conways_game.web.canvas.getContext("2d");
conways_game.web.empty_color = "#FFFFFF";
conways_game.web.fill_color = "#888888";
conways_game.web.grid_color = "#888888";
conways_game.web.board = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(conways_game.core.build_initial_grid(20,20));
/**
* Calculate the offset of the element relative to body.
*/
conways_game.web.get_offset = (function get_offset(o){var curr = o;var off_x = o.offsetLeft;var off_y = o.offsetTop;while(true){
var temp__4090__auto__ = curr.offsetParent;if(cljs.core.truth_(temp__4090__auto__))
{var parent = temp__4090__auto__;{
var G__4983 = parent;
var G__4984 = (off_x + parent.offsetLeft);
var G__4985 = (off_y + parent.offsetTop);
curr = G__4983;
off_x = G__4984;
off_y = G__4985;
continue;
}
} else
{return cljs.core.PersistentVector.fromArray([off_x,off_y], true);
}
break;
}
});
conways_game.web.flip_clicked_cell = (function flip_clicked_cell(x,y,board){var map__4987 = (conways_game.web.board_properties.cljs$core$IFn$_invoke$arity$2 ? conways_game.web.board_properties.cljs$core$IFn$_invoke$arity$2(conways_game.web.canvas,cljs.core.deref(board)) : conways_game.web.board_properties.call(null,conways_game.web.canvas,cljs.core.deref(board)));var map__4987__$1 = ((cljs.core.seq_QMARK_(map__4987))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__4987):map__4987);var cell_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4987__$1,cljs.core.constant$keyword$15);var cell_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4987__$1,cljs.core.constant$keyword$16);var col_cell = ((x / cell_width) | 0);var row_cell = ((y / cell_height) | 0);var new_val = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(board),cljs.core.PersistentVector.fromArray([col_cell,row_cell], true)),"."))?"*":".");cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(board,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([col_cell,row_cell], true),new_val);
return (conways_game.web.draw_board.cljs$core$IFn$_invoke$arity$2 ? conways_game.web.draw_board.cljs$core$IFn$_invoke$arity$2(conways_game.web.canvas,cljs.core.deref(board)) : conways_game.web.draw_board.call(null,conways_game.web.canvas,cljs.core.deref(board)));
});
/**
* Calculate the position clicked in the canvas and then invert the value at
* the corresponding location on the board.
*/
conways_game.web.change_cell = (function change_cell(e){var this$ = this;var vec__4989 = conways_game.web.get_offset(this$);var off_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4989,0,null);var off_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4989,1,null);var x = (e.x - off_x);var y = (e.y - off_y);return conways_game.web.flip_clicked_cell(x,y,conways_game.web.board);
});
/**
* Calculate the next state of the board from the current state.
*/
conways_game.web.get_next_position = (function get_next_position(e){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(conways_game.web.board,conways_game.core.get_next_position);
return (conways_game.web.draw_board.cljs$core$IFn$_invoke$arity$2 ? conways_game.web.draw_board.cljs$core$IFn$_invoke$arity$2(conways_game.web.canvas,cljs.core.deref(conways_game.web.board)) : conways_game.web.draw_board.call(null,conways_game.web.canvas,cljs.core.deref(conways_game.web.board)));
});
conways_game.web.canvas.addEventListener("click",conways_game.web.change_cell,false);
conways_game.web.next_button.addEventListener("click",conways_game.web.get_next_position,false);
conways_game.web.set_color_BANG_ = (function set_color_BANG_(c,color){c.fillStyle = color;
return c;
});
conways_game.web.line_to_BANG_ = (function line_to_BANG_(c,x,y){c.lineTo(x,y);
return c;
});
conways_game.web.move_to_BANG_ = (function move_to_BANG_(c,x,y){c.moveTo(x,y);
return c;
});
conways_game.web.draw_rect_BANG_ = (function draw_rect_BANG_(c,x0,y0,x1,y1){c.fillRect(x0,y0,x1,y1);
return c;
});
conways_game.web.draw_line_BANG_ = (function draw_line_BANG_(c,x0,y0,x1,y1){return conways_game.web.line_to_BANG_(conways_game.web.move_to_BANG_(c,x0,y0),x1,y1).stroke();
});
conways_game.web.board_properties = (function board_properties(canvas,board){var x_pix = canvas.scrollWidth;var y_pix = canvas.scrollHeight;var vert_cells = cljs.core.count(board);var horz_cells = cljs.core.count(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(board,0));var cell_height = (y_pix / vert_cells);var cell_width = (x_pix / horz_cells);return cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$17,x_pix,cljs.core.constant$keyword$18,y_pix,cljs.core.constant$keyword$19,vert_cells,cljs.core.constant$keyword$20,horz_cells,cljs.core.constant$keyword$15,cell_height,cljs.core.constant$keyword$16,cell_width], true);
});
conways_game.web.draw_cell = (function draw_cell(c,x,y,width,height,color){return conways_game.web.draw_rect_BANG_(conways_game.web.set_color_BANG_(c,color),(x * width),(y * height),((x * width) + width),((y * height) + height));
});
conways_game.web.draw_lines = (function draw_lines(c,width,height,vert_cells,horz_cells,color){conways_game.web.set_color_BANG_(c,color);
var seq__4998_5006 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(horz_cells));var chunk__4999_5007 = null;var count__5000_5008 = 0;var i__5001_5009 = 0;while(true){
if((i__5001_5009 < count__5000_5008))
{var col_5010 = chunk__4999_5007.cljs$core$IIndexed$_nth$arity$2(null,i__5001_5009);conways_game.web.draw_line_BANG_(c,(col_5010 * width),0,(col_5010 * width),(height * vert_cells));
{
var G__5011 = seq__4998_5006;
var G__5012 = chunk__4999_5007;
var G__5013 = count__5000_5008;
var G__5014 = (i__5001_5009 + 1);
seq__4998_5006 = G__5011;
chunk__4999_5007 = G__5012;
count__5000_5008 = G__5013;
i__5001_5009 = G__5014;
continue;
}
} else
{var temp__4092__auto___5015 = cljs.core.seq(seq__4998_5006);if(temp__4092__auto___5015)
{var seq__4998_5016__$1 = temp__4092__auto___5015;if(cljs.core.chunked_seq_QMARK_(seq__4998_5016__$1))
{var c__3850__auto___5017 = cljs.core.chunk_first(seq__4998_5016__$1);{
var G__5018 = cljs.core.chunk_rest(seq__4998_5016__$1);
var G__5019 = c__3850__auto___5017;
var G__5020 = cljs.core.count(c__3850__auto___5017);
var G__5021 = 0;
seq__4998_5006 = G__5018;
chunk__4999_5007 = G__5019;
count__5000_5008 = G__5020;
i__5001_5009 = G__5021;
continue;
}
} else
{var col_5022 = cljs.core.first(seq__4998_5016__$1);conways_game.web.draw_line_BANG_(c,(col_5022 * width),0,(col_5022 * width),(height * vert_cells));
{
var G__5023 = cljs.core.next(seq__4998_5016__$1);
var G__5024 = null;
var G__5025 = 0;
var G__5026 = 0;
seq__4998_5006 = G__5023;
chunk__4999_5007 = G__5024;
count__5000_5008 = G__5025;
i__5001_5009 = G__5026;
continue;
}
}
} else
{}
}
break;
}
var seq__5002 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(vert_cells));var chunk__5003 = null;var count__5004 = 0;var i__5005 = 0;while(true){
if((i__5005 < count__5004))
{var row = chunk__5003.cljs$core$IIndexed$_nth$arity$2(null,i__5005);conways_game.web.draw_line_BANG_(c,0,(row * height),(width * horz_cells),(row * height));
{
var G__5027 = seq__5002;
var G__5028 = chunk__5003;
var G__5029 = count__5004;
var G__5030 = (i__5005 + 1);
seq__5002 = G__5027;
chunk__5003 = G__5028;
count__5004 = G__5029;
i__5005 = G__5030;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__5002);if(temp__4092__auto__)
{var seq__5002__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__5002__$1))
{var c__3850__auto__ = cljs.core.chunk_first(seq__5002__$1);{
var G__5031 = cljs.core.chunk_rest(seq__5002__$1);
var G__5032 = c__3850__auto__;
var G__5033 = cljs.core.count(c__3850__auto__);
var G__5034 = 0;
seq__5002 = G__5031;
chunk__5003 = G__5032;
count__5004 = G__5033;
i__5005 = G__5034;
continue;
}
} else
{var row = cljs.core.first(seq__5002__$1);conways_game.web.draw_line_BANG_(c,0,(row * height),(width * horz_cells),(row * height));
{
var G__5035 = cljs.core.next(seq__5002__$1);
var G__5036 = null;
var G__5037 = 0;
var G__5038 = 0;
seq__5002 = G__5035;
chunk__5003 = G__5036;
count__5004 = G__5037;
i__5005 = G__5038;
continue;
}
}
} else
{return null;
}
}
break;
}
});
conways_game.web.clear_board = (function clear_board(c){return conways_game.web.set_color_BANG_(c,conways_game.web.empty_color).clearRect(0,0,conways_game.web.canvas.scrollWidth,conways_game.web.canvas.scrollHeight);
});
conways_game.web.draw_board = (function draw_board(canvas,board){var map__5052 = conways_game.web.board_properties(canvas,board);var map__5052__$1 = ((cljs.core.seq_QMARK_(map__5052))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5052):map__5052);var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5052__$1,cljs.core.constant$keyword$19);var cols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5052__$1,cljs.core.constant$keyword$20);var cell_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5052__$1,cljs.core.constant$keyword$15);var cell_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5052__$1,cljs.core.constant$keyword$16);var c = conways_game.web.ctx;conways_game.web.clear_board(c);
var seq__5053_5065 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(rows));var chunk__5058_5066 = null;var count__5059_5067 = 0;var i__5060_5068 = 0;while(true){
if((i__5060_5068 < count__5059_5067))
{var row_5069 = chunk__5058_5066.cljs$core$IIndexed$_nth$arity$2(null,i__5060_5068);var seq__5061_5070 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cols));var chunk__5062_5071 = null;var count__5063_5072 = 0;var i__5064_5073 = 0;while(true){
if((i__5064_5073 < count__5063_5072))
{var col_5074 = chunk__5062_5071.cljs$core$IIndexed$_nth$arity$2(null,i__5064_5073);conways_game.web.draw_cell(c,row_5069,col_5074,cell_width,cell_height,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,cljs.core.PersistentVector.fromArray([row_5069,col_5074], true)),"."))?conways_game.web.empty_color:conways_game.web.fill_color));
{
var G__5075 = seq__5061_5070;
var G__5076 = chunk__5062_5071;
var G__5077 = count__5063_5072;
var G__5078 = (i__5064_5073 + 1);
seq__5061_5070 = G__5075;
chunk__5062_5071 = G__5076;
count__5063_5072 = G__5077;
i__5064_5073 = G__5078;
continue;
}
} else
{var temp__4092__auto___5079 = cljs.core.seq(seq__5061_5070);if(temp__4092__auto___5079)
{var seq__5061_5080__$1 = temp__4092__auto___5079;if(cljs.core.chunked_seq_QMARK_(seq__5061_5080__$1))
{var c__3850__auto___5081 = cljs.core.chunk_first(seq__5061_5080__$1);{
var G__5082 = cljs.core.chunk_rest(seq__5061_5080__$1);
var G__5083 = c__3850__auto___5081;
var G__5084 = cljs.core.count(c__3850__auto___5081);
var G__5085 = 0;
seq__5061_5070 = G__5082;
chunk__5062_5071 = G__5083;
count__5063_5072 = G__5084;
i__5064_5073 = G__5085;
continue;
}
} else
{var col_5086 = cljs.core.first(seq__5061_5080__$1);conways_game.web.draw_cell(c,row_5069,col_5086,cell_width,cell_height,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,cljs.core.PersistentVector.fromArray([row_5069,col_5086], true)),"."))?conways_game.web.empty_color:conways_game.web.fill_color));
{
var G__5087 = cljs.core.next(seq__5061_5080__$1);
var G__5088 = null;
var G__5089 = 0;
var G__5090 = 0;
seq__5061_5070 = G__5087;
chunk__5062_5071 = G__5088;
count__5063_5072 = G__5089;
i__5064_5073 = G__5090;
continue;
}
}
} else
{}
}
break;
}
{
var G__5091 = seq__5053_5065;
var G__5092 = chunk__5058_5066;
var G__5093 = count__5059_5067;
var G__5094 = (i__5060_5068 + 1);
seq__5053_5065 = G__5091;
chunk__5058_5066 = G__5092;
count__5059_5067 = G__5093;
i__5060_5068 = G__5094;
continue;
}
} else
{var temp__4092__auto___5095 = cljs.core.seq(seq__5053_5065);if(temp__4092__auto___5095)
{var seq__5053_5096__$1 = temp__4092__auto___5095;if(cljs.core.chunked_seq_QMARK_(seq__5053_5096__$1))
{var c__3850__auto___5097 = cljs.core.chunk_first(seq__5053_5096__$1);{
var G__5098 = cljs.core.chunk_rest(seq__5053_5096__$1);
var G__5099 = c__3850__auto___5097;
var G__5100 = cljs.core.count(c__3850__auto___5097);
var G__5101 = 0;
seq__5053_5065 = G__5098;
chunk__5058_5066 = G__5099;
count__5059_5067 = G__5100;
i__5060_5068 = G__5101;
continue;
}
} else
{var row_5102 = cljs.core.first(seq__5053_5096__$1);var seq__5054_5103 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cols));var chunk__5055_5104 = null;var count__5056_5105 = 0;var i__5057_5106 = 0;while(true){
if((i__5057_5106 < count__5056_5105))
{var col_5107 = chunk__5055_5104.cljs$core$IIndexed$_nth$arity$2(null,i__5057_5106);conways_game.web.draw_cell(c,row_5102,col_5107,cell_width,cell_height,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,cljs.core.PersistentVector.fromArray([row_5102,col_5107], true)),"."))?conways_game.web.empty_color:conways_game.web.fill_color));
{
var G__5108 = seq__5054_5103;
var G__5109 = chunk__5055_5104;
var G__5110 = count__5056_5105;
var G__5111 = (i__5057_5106 + 1);
seq__5054_5103 = G__5108;
chunk__5055_5104 = G__5109;
count__5056_5105 = G__5110;
i__5057_5106 = G__5111;
continue;
}
} else
{var temp__4092__auto___5112__$1 = cljs.core.seq(seq__5054_5103);if(temp__4092__auto___5112__$1)
{var seq__5054_5113__$1 = temp__4092__auto___5112__$1;if(cljs.core.chunked_seq_QMARK_(seq__5054_5113__$1))
{var c__3850__auto___5114 = cljs.core.chunk_first(seq__5054_5113__$1);{
var G__5115 = cljs.core.chunk_rest(seq__5054_5113__$1);
var G__5116 = c__3850__auto___5114;
var G__5117 = cljs.core.count(c__3850__auto___5114);
var G__5118 = 0;
seq__5054_5103 = G__5115;
chunk__5055_5104 = G__5116;
count__5056_5105 = G__5117;
i__5057_5106 = G__5118;
continue;
}
} else
{var col_5119 = cljs.core.first(seq__5054_5113__$1);conways_game.web.draw_cell(c,row_5102,col_5119,cell_width,cell_height,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,cljs.core.PersistentVector.fromArray([row_5102,col_5119], true)),"."))?conways_game.web.empty_color:conways_game.web.fill_color));
{
var G__5120 = cljs.core.next(seq__5054_5113__$1);
var G__5121 = null;
var G__5122 = 0;
var G__5123 = 0;
seq__5054_5103 = G__5120;
chunk__5055_5104 = G__5121;
count__5056_5105 = G__5122;
i__5057_5106 = G__5123;
continue;
}
}
} else
{}
}
break;
}
{
var G__5124 = cljs.core.next(seq__5053_5096__$1);
var G__5125 = null;
var G__5126 = 0;
var G__5127 = 0;
seq__5053_5065 = G__5124;
chunk__5058_5066 = G__5125;
count__5059_5067 = G__5126;
i__5060_5068 = G__5127;
continue;
}
}
} else
{}
}
break;
}
return conways_game.web.draw_lines(c,cell_width,cell_height,rows,cols,conways_game.web.grid_color);
});
conways_game.web.draw_board(conways_game.web.canvas,cljs.core.deref(conways_game.web.board));
