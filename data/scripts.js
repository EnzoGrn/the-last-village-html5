// Transpiled ActionScript 2 code of "The Last Village" (RapidoJeux, 2009-2010)
// Generated from the original SWF bytecode. Each S[n] is a frame/button script.
var S = {};
// sprite194#f46.0
S[0] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  $.stop($tgt);
  t1 = $.cm($.get($sc, "this"), "removeMovieClip", []);
};
// sprite231#f1.0
S[1] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite232#f1.0
S[2] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite237#f1.0
S[3] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.sm($.get($sc, "this"), "_alpha", 0);
};
// sprite238#f1.0
S[4] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite260#f1.0
S[5] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite261#f1.0
S[6] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite262#f1.0
S[7] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite265#f69.0
S[8] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite266#f1.0
S[9] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  t1 = $.cm($.gm($.get($sc, "this"), "benteng"), "gotoAndStop", [$.gm($.gm($.get($sc, "_root"), "daftarMap"), $.gm($.get($sc, "_root"), "map"))]);
};
// sprite266#f51.0
S[10] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1, t2;
  $.stop($tgt);
  t1 = $.cm($.get($sc, "_root"), "tampilKalah", []);
  t2 = $.delMember($.gm($.get($sc, "this"), "_parent"), "onEnterFrame");
};
// sprite267#f1.0
S[11] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite267#f2.0
S[12] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite319#f1.0
S[13] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite329#f1.0
S[14] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  t1 = $.cm($.get($sc, "tulisan"), "gotoAndStop", [$.add($.gm($.get($sc, "_root"), "bahasa"), 1)]);
};
// sprite363#f1.0
S[15] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.sm($.get($sc, "this"), "_visible", 0);
};
// sprite367#f1.0
S[16] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.sm($.get($sc, "this"), "_visible", 0);
};
// sprite371#f1.0
S[17] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.sm($.get($sc, "this"), "_visible", 0);
};
// sprite375#f1.0
S[18] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.sm($.get($sc, "this"), "_visible", 0);
};
// sprite379#f1.0
S[19] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.sm($.get($sc, "this"), "_visible", 0);
};
// sprite386#f6.0
S[20] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.sm($.gm($.get($sc, "this"), "papan"), "_visible", 0);
};
// sprite426#f1.0
S[21] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite430#f1.0
S[22] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.sm($.get($sc, "tulisan"), "text", $.gm($.gm($.get($sc, "_root"), "dayBahasa"), $.gm($.get($sc, "_root"), "bahasa")));
};
// sprite436#f91.0
S[23] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1, t2;
  var $b = 0;
  for (;;) switch ($b) {
  case 0:
    $.stop($tgt);
    $.sm($.get($sc, "_root"), "aktifTombol", true);
    if (!$.bool($.gm($.get($sc, "_root"), "serangan"))) { $b = 2; continue; }
    $b = 1; continue;
  case 1:
    $.sm($.get($sc, "_root"), "serangan", false);
    $b = 2; continue;
  case 2:
    t1 = $.cm($.get($sc, "_root"), "gantiPeta", []);
    t2 = $.cm($.get($sc, "this"), "removeMovieClip", []);
    $b = 3; continue;
  case 3: return;
  }
};
// sprite453#f1.0
S[24] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  t1 = $.cm($.get($sc, "this"), "gotoAndStop", [$.add($.gm($.get($sc, "_root"), "bahasa"), 1)]);
};
// sprite471#f1.0
S[25] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  t1 = $.cm($.get($sc, "this"), "gotoAndStop", [$.add($.gm($.get($sc, "_root"), "bahasa"), 1)]);
};
// sprite472#f1.0
S[26] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite487#f1.0
S[27] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite492#f1.0
S[28] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite497#f1.0
S[29] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite502#f1.0
S[30] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite507#f1.0
S[31] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite512#f1.0
S[32] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite521#f26.0
S[33] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  $.stop($tgt);
  t1 = $.cm($.get($sc, "this"), "removeMovieClip", []);
};
// sprite545#f1.0
S[34] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite564#f1.0
S[35] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite585#f1.0
S[36] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite614#f1.0
S[37] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite637#f1.0
S[38] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite654#f1.0
S[39] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite664#f1.0
S[40] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite674#f1.0
S[41] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite684#f1.0
S[42] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite704#f1.0
S[43] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite718#f1.0
S[44] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite728#f1.0
S[45] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite745#f1.0
S[46] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite749#f1.0
S[47] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite890#f1.0
S[48] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  t1 = $.cm($.get($sc, "this"), "gotoAndStop", [$.add($.gm($.get($sc, "_root"), "bahasa"), 1)]);
};
// sprite897#f1.0
S[49] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  t1 = $.cm($.get($sc, "this"), "gotoAndStop", [$.add($.gm($.get($sc, "_root"), "bahasa"), 1)]);
};
// sprite902#f1.0
S[50] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// button919
S[51] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.getURL2("http://www.ludobox.com", $.get($sc, "_blank"), 0);
};
// sprite934#f1.0
S[52] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  t1 = $.cm($.get($sc, "this"), "gotoAndStop", [$.add($.gm($.get($sc, "_root"), "bahasa"), 1)]);
};
// sprite940#f15.0
S[53] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  $.stop($tgt);
  t1 = $.cm($.get($sc, "this"), "removeMovieClip", []);
};
// sprite953#f1.0
S[54] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  t1 = $.cm($.get($sc, "_root"), "soundFX", ["sungai"]);
};
// sprite956#f1.0
S[55] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite981#f1.0
S[56] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  t1 = $.cm($.get($sc, "_root"), "soundFX", ["sungai"]);
};
// sprite994#f1.0
S[57] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  t1 = $.cm($.get($sc, "_root"), "soundFX", ["sungai"]);
};
// sprite1007#f1.0
S[58] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  t1 = $.cm($.get($sc, "_root"), "soundFX", ["sungai"]);
};
// sprite1020#f1.0
S[59] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  t1 = $.cm($.get($sc, "_root"), "soundFX", ["sungai"]);
};
// sprite1043#f1.0
S[60] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite1080#f1.0
S[61] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  t1 = $.cm($.get($sc, "_root"), "soundFX", ["laut"]);
};
// sprite1099#f1.0
S[62] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  t1 = $.cm($.get($sc, "_root"), "soundFX", ["laut"]);
};
// sprite1120#f1.0
S[63] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  t1 = $.cm($.get($sc, "_root"), "soundFX", ["laut"]);
};
// sprite1141#f1.0
S[64] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  t1 = $.cm($.get($sc, "_root"), "soundFX", ["laut"]);
};
// sprite1162#f1.0
S[65] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  t1 = $.cm($.get($sc, "_root"), "soundFX", ["laut"]);
};
// sprite1163#f1.0
S[66] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite1172#f1.0
S[67] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite1174#f1.0
S[68] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite1175#f1.0
S[69] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.sm($.get($sc, "this"), "_alpha", 0);
};
// sprite1238#f17.0
S[70] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  t1 = $.cm($.get($sc, "_root"), "soundFX", ["horse"]);
};
// sprite1238#f74.0
S[71] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  var $b = 0;
  for (;;) switch ($b) {
  case 0:
    $.sm($.gm($.get($sc, "_root"), "battle_mc"), "depthObj", ($.n($.gm($.gm($.get($sc, "_root"), "battle_mc"), "depthObj")) + 1));
    $.set($sc, "nameHorse", $.add("horse", $.gm($.gm($.get($sc, "_root"), "battle_mc"), "depthObj")));
    t1 = $.cm($.gm($.get($sc, "_root"), "battle_mc"), "attachMovie", ["bf_horse_running", $.get($sc, "nameHorse"), $.add($.gm($.gm($.get($sc, "_root"), "battle_mc"), "depthObj"), (5000 * $.n($.gm($.gm($.get($sc, "this"), "_parent"), "posY"))))]);
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "_xscale", 200);
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "_yscale", 200);
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "_x", $.gm($.gm($.get($sc, "this"), "_parent"), "_x"));
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "_y", $.gm($.gm($.get($sc, "this"), "_parent"), "_y"));
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "spd", $.gm($.gm($.get($sc, "this"), "_parent"), "spd"));
    if (!$.lt($.gm($.gm($.get($sc, "this"), "_parent"), "_xscale"), 0)) { $b = 2; continue; }
    $b = 1; continue;
  case 1:
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "_xscale", ($.n($.gm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "_xscale")) * (-1)));
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "spd", $.gm($.gm($.get($sc, "this"), "_parent"), "spd"));
    $b = 2; continue;
  case 2:
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "onEnterFrame", $.fn({"n":"","p":[],"r":3,"f":105}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, t2, t3, t4, t5;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!!$.bool($.gm($r[2], "isPaused"))) { $b = 6; continue; }
      $b = 1; continue;
    case 1:
      t2 = $.cm($r[1], "play", []);
      $.sm($r[1], "_x", $.add($.gm($r[1], "_x"), $.gm($r[1], "spd")));
      t3 = $.lt($.gm($r[1], "_x"), (-100));
      t4 = t3;
      s0 = t3;
      if (t4) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      s0 = $.gt($.gm($r[1], "_x"), 1300);
      $b = 3; continue;
    case 3:
      if (!$.bool(s0)) { $b = 5; continue; }
      $b = 4; continue;
    case 4:
      t5 = $.cm($r[1], "removeMovieClip", []);
      $b = 5; continue;
    case 5:
      $b = 8; continue;
    case 6:
      t1 = $.cm($r[1], "stop", []);
      $b = 8; continue;
    case 8: return;
    }
  }));
    $b = 3; continue;
  case 3: return;
  }
};
// sprite1238#f82.0
S[72] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  $.def($sc, "alphaMundur", $.fn({"n":"alphaMundur","p":[[1,"who"]],"r":2,"f":42}, $sc, function($sc, $this, $args, $r) {
    $.sm($r[1], "_alpha", ($.n($.gm($r[1], "_alpha")) - 1));
  }));
  $.stop($tgt);
  t1 = $.delMember($.gm($.get($sc, "this"), "_parent"), "onEnterFrame");
  $.sm($.gm($.get($sc, "this"), "_parent"), "penghitung", 60);
  $.sm($.gm($.get($sc, "this"), "_parent"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.sm($r[1], "penghitung", ($.n($.gm($r[1], "penghitung")) - 1));
      if (!!$.gt($.gm($r[1], "penghitung"), 0)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t1 = $.cm($r[1], "attachMovie", ["mc_spirit", "spirit", 99]);
      $.sm($.gm($r[1], "spirit"), "_x", (($.n($.gm($r[1], "_width")) / 2) * (-1)));
      t2 = $r[1];
      t3 = $.cf($sc, "setInterval", [$.get($sc, "alphaMundur"), 20, $r[1]]);
      $.sm(t2, "fading", t3);
      $.sm($r[1], "penghitung", 9999);
      $b = 2; continue;
    case 2:
      if (!!$.gt($.gm($r[1], "_alpha"), 0)) { $b = 5; continue; }
      $b = 3; continue;
    case 3:
      t4 = $.cf($sc, "clearInterval", [$.gm($r[1], "fading")]);
      t5 = $.cm($r[1], "removeMovieClip", []);
      $b = 5; continue;
    case 5: return;
    }
  }));
  $.sm($.gm($.get($sc, "_root"), "statisticList"), 14, ($.n($.gm($.gm($.get($sc, "_root"), "statisticList"), 14)) + 1));
};
// sprite1239#f1.0
S[73] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
  $.sm($.get($sc, "this"), "attacking", false);
};
// sprite1239#f24.0
S[74] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.sm($.get($sc, "this"), "attacking", false);
};
// sprite1239#f71.0
S[75] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.gotoFrame($tgt, 1);
};
// sprite1239#f72.0
S[76] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  $.stop($tgt);
  $.sm($.gm($.get($sc, "_root"), $.add("special_btn", $.gm($.get($sc, "this"), "armyNum"))), "enabled", false);
  $.sm($.gm($.get($sc, "_root"), $.add("special_btn", $.gm($.get($sc, "this"), "armyNum"))), "special", false);
  t1 = $.cm($.gm($.get($sc, "_root"), $.add("special_btn", $.gm($.get($sc, "this"), "armyNum"))), "gotoAndStop", [2]);
};
// sprite1282#f79.0
S[77] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  $.def($sc, "alphaMundur", $.fn({"n":"alphaMundur","p":[[1,"who"]],"r":2,"f":42}, $sc, function($sc, $this, $args, $r) {
    $.sm($r[1], "_alpha", ($.n($.gm($r[1], "_alpha")) - 1));
  }));
  $.stop($tgt);
  t1 = $.delMember($.gm($.get($sc, "this"), "_parent"), "onEnterFrame");
  $.sm($.gm($.get($sc, "this"), "_parent"), "penghitung", 60);
  $.sm($.gm($.get($sc, "this"), "_parent"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.sm($r[1], "penghitung", ($.n($.gm($r[1], "penghitung")) - 1));
      if (!!$.gt($.gm($r[1], "penghitung"), 0)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t1 = $.cm($r[1], "attachMovie", ["mc_spirit", "spirit", 99]);
      $.sm($.gm($r[1], "spirit"), "_x", 0);
      t2 = $r[1];
      t3 = $.cf($sc, "setInterval", [$.get($sc, "alphaMundur"), 20, $r[1]]);
      $.sm(t2, "fading", t3);
      $.sm($r[1], "penghitung", 9999);
      $b = 2; continue;
    case 2:
      if (!!$.gt($.gm($r[1], "_alpha"), 0)) { $b = 5; continue; }
      $b = 3; continue;
    case 3:
      t4 = $.cf($sc, "clearInterval", [$.gm($r[1], "fading")]);
      t5 = $.cm($r[1], "removeMovieClip", []);
      $b = 5; continue;
    case 5: return;
    }
  }));
  $.sm($.gm($.get($sc, "_root"), "statisticList"), 14, ($.n($.gm($.gm($.get($sc, "_root"), "statisticList"), 14)) + 1));
};
// sprite1283#f1.0
S[78] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite1283#f48.0
S[79] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.gotoFrame($tgt, 1);
};
// sprite1283#f49.0
S[80] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1, t2, t3;
  $.stop($tgt);
  t1 = $.rand(6);
  t2 = $.cm($.get($sc, "_root"), "soundFX", [$.add("man_dead", (1 + t1))]);
  $.sm($.gm($.get($sc, "_root"), $.add("special_btn", $.gm($.get($sc, "this"), "armyNum"))), "enabled", false);
  $.sm($.gm($.get($sc, "_root"), $.add("special_btn", $.gm($.get($sc, "this"), "armyNum"))), "special", false);
  t3 = $.cm($.gm($.get($sc, "_root"), $.add("special_btn", $.gm($.get($sc, "this"), "armyNum"))), "gotoAndStop", [2]);
};
// sprite1344#f17.0
S[81] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  t1 = $.cm($.get($sc, "_root"), "soundFX", ["horse"]);
};
// sprite1344#f74.0
S[82] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  var $b = 0;
  for (;;) switch ($b) {
  case 0:
    $.sm($.gm($.get($sc, "_root"), "battle_mc"), "depthObj", ($.n($.gm($.gm($.get($sc, "_root"), "battle_mc"), "depthObj")) + 1));
    $.set($sc, "nameHorse", $.add("horse", $.gm($.gm($.get($sc, "_root"), "battle_mc"), "depthObj")));
    t1 = $.cm($.gm($.get($sc, "_root"), "battle_mc"), "attachMovie", ["be_horse_running", $.get($sc, "nameHorse"), $.add($.gm($.gm($.get($sc, "_root"), "battle_mc"), "depthObj"), (5000 * $.n($.gm($.gm($.get($sc, "this"), "_parent"), "posY"))))]);
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "_xscale", 200);
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "_yscale", 200);
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "_x", $.gm($.gm($.get($sc, "this"), "_parent"), "_x"));
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "_y", $.gm($.gm($.get($sc, "this"), "_parent"), "_y"));
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "spd", $.gm($.gm($.get($sc, "this"), "_parent"), "spd"));
    if (!$.lt($.gm($.gm($.get($sc, "this"), "_parent"), "_xscale"), 0)) { $b = 2; continue; }
    $b = 1; continue;
  case 1:
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "_xscale", ($.n($.gm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "_xscale")) * (-1)));
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "spd", $.gm($.gm($.get($sc, "this"), "_parent"), "spd"));
    $b = 2; continue;
  case 2:
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "onEnterFrame", $.fn({"n":"","p":[],"r":3,"f":105}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, t2, t3, t4, t5;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!!$.bool($.gm($r[2], "isPaused"))) { $b = 6; continue; }
      $b = 1; continue;
    case 1:
      t2 = $.cm($r[1], "play", []);
      $.sm($r[1], "_x", $.add($.gm($r[1], "_x"), $.gm($r[1], "spd")));
      t3 = $.lt($.gm($r[1], "_x"), (-100));
      t4 = t3;
      s0 = t3;
      if (t4) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      s0 = $.gt($.gm($r[1], "_x"), 1300);
      $b = 3; continue;
    case 3:
      if (!$.bool(s0)) { $b = 5; continue; }
      $b = 4; continue;
    case 4:
      t5 = $.cm($r[1], "removeMovieClip", []);
      $b = 5; continue;
    case 5:
      $b = 8; continue;
    case 6:
      t1 = $.cm($r[1], "stop", []);
      $b = 8; continue;
    case 8: return;
    }
  }));
    $b = 3; continue;
  case 3: return;
  }
};
// sprite1344#f82.0
S[83] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  $.def($sc, "alphaMundur", $.fn({"n":"alphaMundur","p":[[1,"who"]],"r":2,"f":42}, $sc, function($sc, $this, $args, $r) {
    $.sm($r[1], "_alpha", ($.n($.gm($r[1], "_alpha")) - 1));
  }));
  $.stop($tgt);
  t1 = $.delMember($.gm($.get($sc, "this"), "_parent"), "onEnterFrame");
  $.sm($.gm($.get($sc, "this"), "_parent"), "penghitung", 60);
  $.sm($.gm($.get($sc, "this"), "_parent"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.sm($r[1], "penghitung", ($.n($.gm($r[1], "penghitung")) - 1));
      if (!!$.gt($.gm($r[1], "penghitung"), 0)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t1 = $.cm($r[1], "attachMovie", ["mc_spirit", "spirit", 99]);
      $.sm($.gm($r[1], "spirit"), "_x", (-30));
      t2 = $r[1];
      t3 = $.cf($sc, "setInterval", [$.get($sc, "alphaMundur"), 20, $r[1]]);
      $.sm(t2, "fading", t3);
      $.sm($r[1], "penghitung", 9999);
      $b = 2; continue;
    case 2:
      if (!!$.gt($.gm($r[1], "_alpha"), 0)) { $b = 5; continue; }
      $b = 3; continue;
    case 3:
      t4 = $.cf($sc, "clearInterval", [$.gm($r[1], "fading")]);
      t5 = $.cm($r[1], "removeMovieClip", []);
      $b = 5; continue;
    case 5: return;
    }
  }));
  $.sm($.gm($.get($sc, "_root"), "statisticList"), 14, ($.n($.gm($.gm($.get($sc, "_root"), "statisticList"), 14)) + 1));
};
// sprite1345#f1.0
S[84] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
  $.sm($.get($sc, "this"), "attacking", false);
};
// sprite1345#f56.0
S[85] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.gotoFrame($tgt, 1);
};
// sprite1345#f57.0
S[86] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  $.stop($tgt);
  $.sm($.gm($.get($sc, "_root"), $.add("special_btn", $.gm($.get($sc, "this"), "armyNum"))), "enabled", false);
  $.sm($.gm($.get($sc, "_root"), $.add("special_btn", $.gm($.get($sc, "this"), "armyNum"))), "special", false);
  t1 = $.cm($.gm($.get($sc, "_root"), $.add("special_btn", $.gm($.get($sc, "this"), "armyNum"))), "gotoAndStop", [2]);
};
// sprite1347#f5.0
S[87] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  $.stop($tgt);
  t1 = $.cm($.get($sc, "this"), "removeMovieClip", []);
};
// sprite1396#f43.0
S[88] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  $.def($sc, "alphaMundur", $.fn({"n":"alphaMundur","p":[[1,"who"]],"r":2,"f":42}, $sc, function($sc, $this, $args, $r) {
    $.sm($r[1], "_alpha", ($.n($.gm($r[1], "_alpha")) - 1));
  }));
  $.stop($tgt);
  t1 = $.delMember($.gm($.get($sc, "this"), "_parent"), "onEnterFrame");
  $.sm($.gm($.get($sc, "this"), "_parent"), "penghitung", 60);
  $.sm($.gm($.get($sc, "this"), "_parent"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.sm($r[1], "penghitung", ($.n($.gm($r[1], "penghitung")) - 1));
      if (!!$.gt($.gm($r[1], "penghitung"), 0)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t1 = $.cm($r[1], "attachMovie", ["mc_spirit", "spirit", 99]);
      $.sm($.gm($r[1], "spirit"), "_x", (($.n($.gm($r[1], "_width")) / 2) * (-1)));
      t2 = $r[1];
      t3 = $.cf($sc, "setInterval", [$.get($sc, "alphaMundur"), 20, $r[1]]);
      $.sm(t2, "fading", t3);
      $.sm($r[1], "penghitung", 9999);
      $b = 2; continue;
    case 2:
      if (!!$.gt($.gm($r[1], "_alpha"), 0)) { $b = 5; continue; }
      $b = 3; continue;
    case 3:
      t4 = $.cf($sc, "clearInterval", [$.gm($r[1], "fading")]);
      t5 = $.cm($r[1], "removeMovieClip", []);
      $b = 5; continue;
    case 5: return;
    }
  }));
  $.sm($.gm($.get($sc, "_root"), "posPengurang"), $.gm($.get($sc, "_root"), "perangDi"), ($.n($.gm($.gm($.get($sc, "_root"), "posPengurang"), $.gm($.get($sc, "_root"), "perangDi"))) + 1));
  $.sm($.gm($.get($sc, "_root"), "battle_mc"), "enemyLeft", ($.n($.gm($.gm($.get($sc, "_root"), "battle_mc"), "enemyLeft")) - 1));
  $.sm($.gm($.get($sc, "_root"), "statisticList"), 4, ($.n($.gm($.gm($.get($sc, "_root"), "statisticList"), 4)) + 1));
};
// sprite1397#f1.0
S[89] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
  $.sm($.get($sc, "this"), "attacking", false);
};
// sprite1397#f36.0
S[90] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.gotoFrame($tgt, 1);
};
// sprite1397#f37.0
S[91] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1, t2;
  $.stop($tgt);
  t1 = $.rand(6);
  t2 = $.cm($.get($sc, "_root"), "soundFX", [$.add("man_dead", (1 + t1))]);
};
// sprite1426#f43.0
S[92] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  $.def($sc, "alphaMundur", $.fn({"n":"alphaMundur","p":[[1,"who"]],"r":2,"f":42}, $sc, function($sc, $this, $args, $r) {
    $.sm($r[1], "_alpha", ($.n($.gm($r[1], "_alpha")) - 1));
  }));
  $.stop($tgt);
  t1 = $.delMember($.gm($.get($sc, "this"), "_parent"), "onEnterFrame");
  $.sm($.gm($.get($sc, "this"), "_parent"), "penghitung", 60);
  $.sm($.gm($.get($sc, "this"), "_parent"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.sm($r[1], "penghitung", ($.n($.gm($r[1], "penghitung")) - 1));
      if (!!$.gt($.gm($r[1], "penghitung"), 0)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t1 = $.cm($r[1], "attachMovie", ["mc_spirit", "spirit", 99]);
      $.sm($.gm($r[1], "spirit"), "_x", (($.n($.gm($r[1], "_width")) / 2) * (-1)));
      t2 = $r[1];
      t3 = $.cf($sc, "setInterval", [$.get($sc, "alphaMundur"), 20, $r[1]]);
      $.sm(t2, "fading", t3);
      $.sm($r[1], "penghitung", 9999);
      $b = 2; continue;
    case 2:
      if (!!$.gt($.gm($r[1], "_alpha"), 0)) { $b = 5; continue; }
      $b = 3; continue;
    case 3:
      t4 = $.cf($sc, "clearInterval", [$.gm($r[1], "fading")]);
      t5 = $.cm($r[1], "removeMovieClip", []);
      $b = 5; continue;
    case 5: return;
    }
  }));
  $.sm($.gm($.get($sc, "_root"), "posPengurang"), $.gm($.get($sc, "_root"), "perangDi"), ($.n($.gm($.gm($.get($sc, "_root"), "posPengurang"), $.gm($.get($sc, "_root"), "perangDi"))) + 1));
  $.sm($.gm($.get($sc, "_root"), "battle_mc"), "enemyLeft", ($.n($.gm($.gm($.get($sc, "_root"), "battle_mc"), "enemyLeft")) - 1));
  $.sm($.gm($.get($sc, "_root"), "statisticList"), 4, ($.n($.gm($.gm($.get($sc, "_root"), "statisticList"), 4)) + 1));
};
// sprite1427#f1.0
S[93] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
  $.sm($.get($sc, "this"), "attacking", false);
};
// sprite1427#f36.0
S[94] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.gotoFrame($tgt, 1);
};
// sprite1427#f37.0
S[95] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1, t2;
  $.stop($tgt);
  t1 = $.rand(6);
  t2 = $.cm($.get($sc, "_root"), "soundFX", [$.add("man_dead", (1 + t1))]);
};
// sprite1493#f17.0
S[96] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  t1 = $.cm($.get($sc, "_root"), "soundFX", ["horse"]);
};
// sprite1493#f74.0
S[97] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  var $b = 0;
  for (;;) switch ($b) {
  case 0:
    $.sm($.gm($.get($sc, "_root"), "battle_mc"), "depthObj", ($.n($.gm($.gm($.get($sc, "_root"), "battle_mc"), "depthObj")) + 1));
    $.set($sc, "nameHorse", $.add("horse", $.gm($.gm($.get($sc, "_root"), "battle_mc"), "depthObj")));
    t1 = $.cm($.gm($.get($sc, "_root"), "battle_mc"), "attachMovie", ["enemy_horse_running", $.get($sc, "nameHorse"), $.add($.gm($.gm($.get($sc, "_root"), "battle_mc"), "depthObj"), (5000 * $.n($.gm($.gm($.get($sc, "this"), "_parent"), "posY"))))]);
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "_xscale", 200);
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "_yscale", 200);
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "_x", $.gm($.gm($.get($sc, "this"), "_parent"), "_x"));
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "_y", $.gm($.gm($.get($sc, "this"), "_parent"), "_y"));
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "spd", $.gm($.gm($.get($sc, "this"), "_parent"), "spd"));
    if (!$.lt($.gm($.gm($.get($sc, "this"), "_parent"), "_xscale"), 0)) { $b = 2; continue; }
    $b = 1; continue;
  case 1:
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "_xscale", ($.n($.gm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "_xscale")) * (-1)));
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "spd", $.gm($.gm($.get($sc, "this"), "_parent"), "spd"));
    $b = 2; continue;
  case 2:
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "onEnterFrame", $.fn({"n":"","p":[],"r":3,"f":105}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, t2, t3, t4, t5;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!!$.bool($.gm($r[2], "isPaused"))) { $b = 6; continue; }
      $b = 1; continue;
    case 1:
      t2 = $.cm($r[1], "play", []);
      $.sm($r[1], "_x", $.add($.gm($r[1], "_x"), $.gm($r[1], "spd")));
      t3 = $.lt($.gm($r[1], "_x"), (-100));
      t4 = t3;
      s0 = t3;
      if (t4) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      s0 = $.gt($.gm($r[1], "_x"), 1300);
      $b = 3; continue;
    case 3:
      if (!$.bool(s0)) { $b = 5; continue; }
      $b = 4; continue;
    case 4:
      t5 = $.cm($r[1], "removeMovieClip", []);
      $b = 5; continue;
    case 5:
      $b = 8; continue;
    case 6:
      t1 = $.cm($r[1], "stop", []);
      $b = 8; continue;
    case 8: return;
    }
  }));
    $b = 3; continue;
  case 3: return;
  }
};
// sprite1493#f82.0
S[98] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  $.def($sc, "alphaMundur", $.fn({"n":"alphaMundur","p":[[1,"who"]],"r":2,"f":42}, $sc, function($sc, $this, $args, $r) {
    $.sm($r[1], "_alpha", ($.n($.gm($r[1], "_alpha")) - 1));
  }));
  $.stop($tgt);
  t1 = $.delMember($.gm($.get($sc, "this"), "_parent"), "onEnterFrame");
  $.sm($.gm($.get($sc, "this"), "_parent"), "penghitung", 60);
  $.sm($.gm($.get($sc, "this"), "_parent"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.sm($r[1], "penghitung", ($.n($.gm($r[1], "penghitung")) - 1));
      if (!!$.gt($.gm($r[1], "penghitung"), 0)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t1 = $.cm($r[1], "attachMovie", ["mc_spirit", "spirit", 99]);
      $.sm($.gm($r[1], "spirit"), "_x", (($.n($.gm($r[1], "_width")) / 2) * (-1)));
      t2 = $r[1];
      t3 = $.cf($sc, "setInterval", [$.get($sc, "alphaMundur"), 20, $r[1]]);
      $.sm(t2, "fading", t3);
      $.sm($r[1], "penghitung", 9999);
      $b = 2; continue;
    case 2:
      if (!!$.gt($.gm($r[1], "_alpha"), 0)) { $b = 5; continue; }
      $b = 3; continue;
    case 3:
      t4 = $.cf($sc, "clearInterval", [$.gm($r[1], "fading")]);
      t5 = $.cm($r[1], "removeMovieClip", []);
      $b = 5; continue;
    case 5: return;
    }
  }));
  $.sm($.gm($.get($sc, "_root"), "posPengurang"), $.gm($.get($sc, "_root"), "perangDi"), ($.n($.gm($.gm($.get($sc, "_root"), "posPengurang"), $.gm($.get($sc, "_root"), "perangDi"))) + 1));
  $.sm($.gm($.get($sc, "_root"), "battle_mc"), "enemyLeft", ($.n($.gm($.gm($.get($sc, "_root"), "battle_mc"), "enemyLeft")) - 1));
  $.sm($.gm($.get($sc, "_root"), "statisticList"), 4, ($.n($.gm($.gm($.get($sc, "_root"), "statisticList"), 4)) + 1));
};
// sprite1494#f1.0
S[99] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
  $.sm($.get($sc, "this"), "attacking", false);
};
// sprite1494#f41.0
S[100] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.gotoFrame($tgt, 1);
};
// sprite1494#f42.0
S[101] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1, t2;
  $.stop($tgt);
  t1 = $.rand(6);
  t2 = $.cm($.get($sc, "_root"), "soundFX", [$.add("man_dead", (1 + t1))]);
};
// sprite1554#f17.0
S[102] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  t1 = $.cm($.get($sc, "_root"), "soundFX", ["horse"]);
};
// sprite1554#f74.0
S[103] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  var $b = 0;
  for (;;) switch ($b) {
  case 0:
    $.sm($.gm($.get($sc, "_root"), "battle_mc"), "depthObj", ($.n($.gm($.gm($.get($sc, "_root"), "battle_mc"), "depthObj")) + 1));
    $.set($sc, "nameHorse", $.add("horse", $.gm($.gm($.get($sc, "_root"), "battle_mc"), "depthObj")));
    t1 = $.cm($.gm($.get($sc, "_root"), "battle_mc"), "attachMovie", ["enemy_horse_running", $.get($sc, "nameHorse"), $.add($.gm($.gm($.get($sc, "_root"), "battle_mc"), "depthObj"), (5000 * $.n($.gm($.gm($.get($sc, "this"), "_parent"), "posY"))))]);
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "_xscale", 200);
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "_yscale", 200);
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "_x", $.gm($.gm($.get($sc, "this"), "_parent"), "_x"));
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "_y", $.gm($.gm($.get($sc, "this"), "_parent"), "_y"));
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "spd", $.gm($.gm($.get($sc, "this"), "_parent"), "spd"));
    if (!$.lt($.gm($.gm($.get($sc, "this"), "_parent"), "_xscale"), 0)) { $b = 2; continue; }
    $b = 1; continue;
  case 1:
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "_xscale", ($.n($.gm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "_xscale")) * (-1)));
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "spd", $.gm($.gm($.get($sc, "this"), "_parent"), "spd"));
    $b = 2; continue;
  case 2:
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "onEnterFrame", $.fn({"n":"","p":[],"r":3,"f":105}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, t2, t3, t4, t5;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!!$.bool($.gm($r[2], "isPaused"))) { $b = 6; continue; }
      $b = 1; continue;
    case 1:
      t2 = $.cm($r[1], "play", []);
      $.sm($r[1], "_x", $.add($.gm($r[1], "_x"), $.gm($r[1], "spd")));
      t3 = $.lt($.gm($r[1], "_x"), (-100));
      t4 = t3;
      s0 = t3;
      if (t4) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      s0 = $.gt($.gm($r[1], "_x"), 1300);
      $b = 3; continue;
    case 3:
      if (!$.bool(s0)) { $b = 5; continue; }
      $b = 4; continue;
    case 4:
      t5 = $.cm($r[1], "removeMovieClip", []);
      $b = 5; continue;
    case 5:
      $b = 8; continue;
    case 6:
      t1 = $.cm($r[1], "stop", []);
      $b = 8; continue;
    case 8: return;
    }
  }));
    $b = 3; continue;
  case 3: return;
  }
};
// sprite1554#f82.0
S[104] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  $.def($sc, "alphaMundur", $.fn({"n":"alphaMundur","p":[[1,"who"]],"r":2,"f":42}, $sc, function($sc, $this, $args, $r) {
    $.sm($r[1], "_alpha", ($.n($.gm($r[1], "_alpha")) - 1));
  }));
  $.stop($tgt);
  t1 = $.delMember($.gm($.get($sc, "this"), "_parent"), "onEnterFrame");
  $.sm($.gm($.get($sc, "this"), "_parent"), "penghitung", 60);
  $.sm($.gm($.get($sc, "this"), "_parent"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.sm($r[1], "penghitung", ($.n($.gm($r[1], "penghitung")) - 1));
      if (!!$.gt($.gm($r[1], "penghitung"), 0)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t1 = $.cm($r[1], "attachMovie", ["mc_spirit", "spirit", 99]);
      $.sm($.gm($r[1], "spirit"), "_x", (($.n($.gm($r[1], "_width")) / 2) * (-1)));
      t2 = $r[1];
      t3 = $.cf($sc, "setInterval", [$.get($sc, "alphaMundur"), 20, $r[1]]);
      $.sm(t2, "fading", t3);
      $.sm($r[1], "penghitung", 9999);
      $b = 2; continue;
    case 2:
      if (!!$.gt($.gm($r[1], "_alpha"), 0)) { $b = 5; continue; }
      $b = 3; continue;
    case 3:
      t4 = $.cf($sc, "clearInterval", [$.gm($r[1], "fading")]);
      t5 = $.cm($r[1], "removeMovieClip", []);
      $b = 5; continue;
    case 5: return;
    }
  }));
  $.sm($.gm($.get($sc, "_root"), "posPengurang"), $.get($sc, "perangDi"), ($.n($.gm($.gm($.get($sc, "_root"), "posPengurang"), $.get($sc, "perangDi"))) + 1));
  $.sm($.gm($.get($sc, "_root"), "battle_mc"), "enemyLeft", ($.n($.gm($.gm($.get($sc, "_root"), "battle_mc"), "enemyLeft")) - 1));
  $.sm($.gm($.get($sc, "_root"), "statisticList"), 2, ($.n($.gm($.gm($.get($sc, "_root"), "statisticList"), 2)) + 1));
};
// sprite1555#f1.0
S[105] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
  $.sm($.get($sc, "this"), "attacking", false);
};
// sprite1555#f41.0
S[106] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.gotoFrame($tgt, 1);
};
// sprite1555#f42.0
S[107] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1, t2;
  $.stop($tgt);
  t1 = $.rand(6);
  t2 = $.cm($.get($sc, "_root"), "soundFX", [$.add("man_dead", (1 + t1))]);
};
// sprite1561#f1.0
S[108] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
  $.sm($.get($sc, "this"), "attacking", false);
};
// sprite1561#f41.0
S[109] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.gotoFrame($tgt, 1);
};
// sprite1561#f42.0
S[110] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1, t2;
  $.stop($tgt);
  t1 = $.rand(6);
  t2 = $.cm($.get($sc, "_root"), "soundFX", [$.add("man_dead", (1 + t1))]);
};
// sprite1618#f51.0
S[111] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  $.def($sc, "alphaMundur", $.fn({"n":"alphaMundur","p":[[1,"who"]],"r":2,"f":42}, $sc, function($sc, $this, $args, $r) {
    $.sm($r[1], "_alpha", ($.n($.gm($r[1], "_alpha")) - 1));
  }));
  $.stop($tgt);
  t1 = $.delMember($.gm($.get($sc, "this"), "_parent"), "onEnterFrame");
  $.sm($.gm($.get($sc, "this"), "_parent"), "penghitung", 60);
  $.sm($.gm($.get($sc, "this"), "_parent"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.sm($r[1], "penghitung", ($.n($.gm($r[1], "penghitung")) - 1));
      if (!!$.gt($.gm($r[1], "penghitung"), 0)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t1 = $.cm($r[1], "attachMovie", ["mc_spirit", "spirit", 99]);
      $.sm($.gm($r[1], "spirit"), "_x", ($.n($.gm($r[1], "_width")) / 1.5));
      t2 = $r[1];
      t3 = $.cf($sc, "setInterval", [$.get($sc, "alphaMundur"), 20, $r[1]]);
      $.sm(t2, "fading", t3);
      $.sm($r[1], "penghitung", 9999);
      $b = 2; continue;
    case 2:
      if (!!$.gt($.gm($r[1], "_alpha"), 0)) { $b = 5; continue; }
      $b = 3; continue;
    case 3:
      t4 = $.cf($sc, "clearInterval", [$.gm($r[1], "fading")]);
      t5 = $.cm($r[1], "removeMovieClip", []);
      $b = 5; continue;
    case 5: return;
    }
  }));
  $.sm($.gm($.get($sc, "_root"), "posPengurang"), $.gm($.get($sc, "_root"), "perangDi"), ($.n($.gm($.gm($.get($sc, "_root"), "posPengurang"), $.gm($.get($sc, "_root"), "perangDi"))) + 1));
  $.sm($.gm($.get($sc, "_root"), "battle_mc"), "enemyLeft", ($.n($.gm($.gm($.get($sc, "_root"), "battle_mc"), "enemyLeft")) - 1));
  $.sm($.gm($.get($sc, "_root"), "statisticList"), 5, ($.n($.gm($.gm($.get($sc, "_root"), "statisticList"), 5)) + 1));
};
// sprite1619#f1.0
S[112] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
  $.sm($.get($sc, "this"), "attacking", false);
};
// sprite1619#f39.0
S[113] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.gotoFrame($tgt, 1);
};
// sprite1619#f40.0
S[114] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1, t2;
  $.stop($tgt);
  t1 = $.rand(6);
  t2 = $.cm($.get($sc, "_root"), "soundFX", [$.add("man_dead", (1 + t1))]);
};
// sprite1668#f51.0
S[115] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  $.def($sc, "alphaMundur", $.fn({"n":"alphaMundur","p":[[1,"who"]],"r":2,"f":42}, $sc, function($sc, $this, $args, $r) {
    $.sm($r[1], "_alpha", ($.n($.gm($r[1], "_alpha")) - 1));
  }));
  $.stop($tgt);
  t1 = $.delMember($.gm($.get($sc, "this"), "_parent"), "onEnterFrame");
  $.sm($.gm($.get($sc, "this"), "_parent"), "penghitung", 60);
  $.sm($.gm($.get($sc, "this"), "_parent"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.sm($r[1], "penghitung", ($.n($.gm($r[1], "penghitung")) - 1));
      if (!!$.gt($.gm($r[1], "penghitung"), 0)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t1 = $.cm($r[1], "attachMovie", ["mc_spirit", "spirit", 99]);
      $.sm($.gm($r[1], "spirit"), "_x", ($.n($.gm($r[1], "_width")) / 1.5));
      t2 = $r[1];
      t3 = $.cf($sc, "setInterval", [$.get($sc, "alphaMundur"), 20, $r[1]]);
      $.sm(t2, "fading", t3);
      $.sm($r[1], "penghitung", 9999);
      $b = 2; continue;
    case 2:
      if (!!$.gt($.gm($r[1], "_alpha"), 0)) { $b = 5; continue; }
      $b = 3; continue;
    case 3:
      t4 = $.cf($sc, "clearInterval", [$.gm($r[1], "fading")]);
      t5 = $.cm($r[1], "removeMovieClip", []);
      $b = 5; continue;
    case 5: return;
    }
  }));
  $.sm($.gm($.get($sc, "_root"), "posPengurang"), $.gm($.get($sc, "_root"), "perangDi"), ($.n($.gm($.gm($.get($sc, "_root"), "posPengurang"), $.gm($.get($sc, "_root"), "perangDi"))) + 1));
  $.sm($.gm($.get($sc, "_root"), "battle_mc"), "enemyLeft", ($.n($.gm($.gm($.get($sc, "_root"), "battle_mc"), "enemyLeft")) - 1));
  $.sm($.gm($.get($sc, "_root"), "statisticList"), 5, ($.n($.gm($.gm($.get($sc, "_root"), "statisticList"), 5)) + 1));
};
// sprite1669#f1.0
S[116] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
  $.sm($.get($sc, "this"), "attacking", false);
};
// sprite1669#f60.0
S[117] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.gotoFrame($tgt, 1);
};
// sprite1669#f61.0
S[118] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1, t2;
  $.stop($tgt);
  t1 = $.rand(6);
  t2 = $.cm($.get($sc, "_root"), "soundFX", [$.add("man_dead", (1 + t1))]);
};
// sprite1719#f43.0
S[119] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  $.def($sc, "alphaMundur", $.fn({"n":"alphaMundur","p":[[1,"who"]],"r":2,"f":42}, $sc, function($sc, $this, $args, $r) {
    $.sm($r[1], "_alpha", ($.n($.gm($r[1], "_alpha")) - 1));
  }));
  $.stop($tgt);
  t1 = $.delMember($.gm($.get($sc, "this"), "_parent"), "onEnterFrame");
  $.sm($.gm($.get($sc, "this"), "_parent"), "penghitung", 60);
  $.sm($.gm($.get($sc, "this"), "_parent"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.sm($r[1], "penghitung", ($.n($.gm($r[1], "penghitung")) - 1));
      if (!!$.gt($.gm($r[1], "penghitung"), 0)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t1 = $.cm($r[1], "attachMovie", ["mc_spirit", "spirit", 99]);
      $.sm($.gm($r[1], "spirit"), "_x", (($.n($.gm($r[1], "_width")) / 3) * (-1)));
      t2 = $r[1];
      t3 = $.cf($sc, "setInterval", [$.get($sc, "alphaMundur"), 20, $r[1]]);
      $.sm(t2, "fading", t3);
      $.sm($r[1], "penghitung", 9999);
      $b = 2; continue;
    case 2:
      if (!!$.gt($.gm($r[1], "_alpha"), 0)) { $b = 5; continue; }
      $b = 3; continue;
    case 3:
      t4 = $.cf($sc, "clearInterval", [$.gm($r[1], "fading")]);
      t5 = $.cm($r[1], "removeMovieClip", []);
      $b = 5; continue;
    case 5: return;
    }
  }));
  $.sm($.gm($.get($sc, "_root"), "posPengurang"), $.gm($.get($sc, "_root"), "perangDi"), ($.n($.gm($.gm($.get($sc, "_root"), "posPengurang"), $.gm($.get($sc, "_root"), "perangDi"))) + 1));
  $.sm($.gm($.get($sc, "_root"), "battle_mc"), "enemyLeft", ($.n($.gm($.gm($.get($sc, "_root"), "battle_mc"), "enemyLeft")) - 1));
  $.sm($.gm($.get($sc, "_root"), "statisticList"), 3, ($.n($.gm($.gm($.get($sc, "_root"), "statisticList"), 3)) + 1));
};
// sprite1720#f1.0
S[120] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
  $.sm($.get($sc, "this"), "attacking", false);
};
// sprite1720#f40.0
S[121] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.gotoFrame($tgt, 1);
};
// sprite1720#f41.0
S[122] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1, t2;
  $.stop($tgt);
  t1 = $.rand(6);
  t2 = $.cm($.get($sc, "_root"), "soundFX", [$.add("man_dead", (1 + t1))]);
};
// sprite1756#f43.0
S[123] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  $.def($sc, "alphaMundur", $.fn({"n":"alphaMundur","p":[[1,"who"]],"r":2,"f":42}, $sc, function($sc, $this, $args, $r) {
    $.sm($r[1], "_alpha", ($.n($.gm($r[1], "_alpha")) - 1));
  }));
  $.stop($tgt);
  t1 = $.delMember($.gm($.get($sc, "this"), "_parent"), "onEnterFrame");
  $.sm($.gm($.get($sc, "this"), "_parent"), "penghitung", 60);
  $.sm($.gm($.get($sc, "this"), "_parent"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.sm($r[1], "penghitung", ($.n($.gm($r[1], "penghitung")) - 1));
      if (!!$.gt($.gm($r[1], "penghitung"), 0)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t1 = $.cm($r[1], "attachMovie", ["mc_spirit", "spirit", 99]);
      $.sm($.gm($r[1], "spirit"), "_x", (($.n($.gm($r[1], "_width")) / 3) * (-1)));
      t2 = $r[1];
      t3 = $.cf($sc, "setInterval", [$.get($sc, "alphaMundur"), 20, $r[1]]);
      $.sm(t2, "fading", t3);
      $.sm($r[1], "penghitung", 9999);
      $b = 2; continue;
    case 2:
      if (!!$.gt($.gm($r[1], "_alpha"), 0)) { $b = 5; continue; }
      $b = 3; continue;
    case 3:
      t4 = $.cf($sc, "clearInterval", [$.gm($r[1], "fading")]);
      t5 = $.cm($r[1], "removeMovieClip", []);
      $b = 5; continue;
    case 5: return;
    }
  }));
  $.sm($.gm($.get($sc, "_root"), "posPengurang"), $.gm($.get($sc, "_root"), "perangDi"), ($.n($.gm($.gm($.get($sc, "_root"), "posPengurang"), $.gm($.get($sc, "_root"), "perangDi"))) + 1));
  $.sm($.gm($.get($sc, "_root"), "battle_mc"), "enemyLeft", ($.n($.gm($.gm($.get($sc, "_root"), "battle_mc"), "enemyLeft")) - 1));
  $.sm($.gm($.get($sc, "_root"), "statisticList"), 3, ($.n($.gm($.gm($.get($sc, "_root"), "statisticList"), 3)) + 1));
};
// sprite1757#f1.0
S[124] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
  $.sm($.get($sc, "this"), "attacking", false);
};
// sprite1757#f48.0
S[125] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.gotoFrame($tgt, 1);
};
// sprite1757#f49.0
S[126] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1, t2;
  $.stop($tgt);
  t1 = $.rand(6);
  t2 = $.cm($.get($sc, "_root"), "soundFX", [$.add("man_dead", (1 + t1))]);
};
// sprite1802#f43.0
S[127] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  $.def($sc, "alphaMundur", $.fn({"n":"alphaMundur","p":[[1,"who"]],"r":2,"f":42}, $sc, function($sc, $this, $args, $r) {
    $.sm($r[1], "_alpha", ($.n($.gm($r[1], "_alpha")) - 1));
  }));
  $.stop($tgt);
  t1 = $.delMember($.gm($.get($sc, "this"), "_parent"), "onEnterFrame");
  $.sm($.gm($.get($sc, "this"), "_parent"), "penghitung", 60);
  $.sm($.gm($.get($sc, "this"), "_parent"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.sm($r[1], "penghitung", ($.n($.gm($r[1], "penghitung")) - 1));
      if (!!$.gt($.gm($r[1], "penghitung"), 0)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t1 = $.cm($r[1], "attachMovie", ["mc_spirit", "spirit", 99]);
      $.sm($.gm($r[1], "spirit"), "_x", (($.n($.gm($r[1], "_width")) / 2) * (-1)));
      t2 = $r[1];
      t3 = $.cf($sc, "setInterval", [$.get($sc, "alphaMundur"), 20, $r[1]]);
      $.sm(t2, "fading", t3);
      $.sm($r[1], "penghitung", 9999);
      $b = 2; continue;
    case 2:
      if (!!$.gt($.gm($r[1], "_alpha"), 0)) { $b = 5; continue; }
      $b = 3; continue;
    case 3:
      t4 = $.cf($sc, "clearInterval", [$.gm($r[1], "fading")]);
      t5 = $.cm($r[1], "removeMovieClip", []);
      $b = 5; continue;
    case 5: return;
    }
  }));
  $.sm($.gm($.get($sc, "_root"), "posPengurang"), $.gm($.get($sc, "_root"), "perangDi"), ($.n($.gm($.gm($.get($sc, "_root"), "posPengurang"), $.gm($.get($sc, "_root"), "perangDi"))) + 1));
  $.sm($.gm($.get($sc, "_root"), "battle_mc"), "enemyLeft", ($.n($.gm($.gm($.get($sc, "_root"), "battle_mc"), "enemyLeft")) - 1));
  $.sm($.gm($.get($sc, "_root"), "statisticList"), 1, ($.n($.gm($.gm($.get($sc, "_root"), "statisticList"), 1)) + 1));
  $.trace($.gm($.gm($.get($sc, "_root"), "battle_mc"), "enemyLeft"));
};
// sprite1803#f1.0
S[128] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
  $.sm($.get($sc, "this"), "attacking", false);
};
// sprite1803#f36.0
S[129] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.gotoFrame($tgt, 1);
};
// sprite1803#f37.0
S[130] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1, t2;
  $.stop($tgt);
  t1 = $.rand(6);
  t2 = $.cm($.get($sc, "_root"), "soundFX", [$.add("man_dead", (1 + t1))]);
};
// sprite1837#f43.0
S[131] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  $.def($sc, "alphaMundur", $.fn({"n":"alphaMundur","p":[[1,"who"]],"r":2,"f":42}, $sc, function($sc, $this, $args, $r) {
    $.sm($r[1], "_alpha", ($.n($.gm($r[1], "_alpha")) - 1));
  }));
  $.stop($tgt);
  t1 = $.delMember($.gm($.get($sc, "this"), "_parent"), "onEnterFrame");
  $.sm($.gm($.get($sc, "this"), "_parent"), "penghitung", 60);
  $.sm($.gm($.get($sc, "this"), "_parent"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.sm($r[1], "penghitung", ($.n($.gm($r[1], "penghitung")) - 1));
      if (!!$.gt($.gm($r[1], "penghitung"), 0)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t1 = $.cm($r[1], "attachMovie", ["mc_spirit", "spirit", 99]);
      $.sm($.gm($r[1], "spirit"), "_x", (($.n($.gm($r[1], "_width")) / 2) * (-1)));
      t2 = $r[1];
      t3 = $.cf($sc, "setInterval", [$.get($sc, "alphaMundur"), 20, $r[1]]);
      $.sm(t2, "fading", t3);
      $.sm($r[1], "penghitung", 9999);
      $b = 2; continue;
    case 2:
      if (!!$.gt($.gm($r[1], "_alpha"), 0)) { $b = 5; continue; }
      $b = 3; continue;
    case 3:
      t4 = $.cf($sc, "clearInterval", [$.gm($r[1], "fading")]);
      t5 = $.cm($r[1], "removeMovieClip", []);
      $b = 5; continue;
    case 5: return;
    }
  }));
  $.sm($.gm($.get($sc, "_root"), "posPengurang"), $.gm($.get($sc, "_root"), "perangDi"), ($.n($.gm($.gm($.get($sc, "_root"), "posPengurang"), $.gm($.get($sc, "_root"), "perangDi"))) + 1));
  $.sm($.gm($.get($sc, "_root"), "battle_mc"), "enemyLeft", ($.n($.gm($.gm($.get($sc, "_root"), "battle_mc"), "enemyLeft")) - 1));
  $.sm($.gm($.get($sc, "_root"), "statisticList"), 1, ($.n($.gm($.gm($.get($sc, "_root"), "statisticList"), 1)) + 1));
};
// sprite1838#f1.0
S[132] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
  $.sm($.get($sc, "this"), "attacking", false);
};
// sprite1838#f22.0
S[133] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.gotoFrame($tgt, 1);
};
// sprite1838#f23.0
S[134] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1, t2;
  $.stop($tgt);
  t1 = $.rand(6);
  t2 = $.cm($.get($sc, "_root"), "soundFX", [$.add("man_dead", (1 + t1))]);
};
// sprite1848#f11.0
S[135] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  $.stop($tgt);
  t1 = $.cm($.get($sc, "this"), "removeMovieClip", []);
};
// sprite1953#f17.0
S[136] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  t1 = $.cm($.get($sc, "_root"), "soundFX", ["horse"]);
};
// sprite1953#f74.0
S[137] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  var $b = 0;
  for (;;) switch ($b) {
  case 0:
    $.sm($.gm($.get($sc, "_root"), "battle_mc"), "depthObj", ($.n($.gm($.gm($.get($sc, "_root"), "battle_mc"), "depthObj")) + 1));
    $.set($sc, "nameHorse", $.add("horse", $.gm($.gm($.get($sc, "_root"), "battle_mc"), "depthObj")));
    t1 = $.cm($.gm($.get($sc, "_root"), "battle_mc"), "attachMovie", ["gw_horse_running", $.get($sc, "nameHorse"), $.add($.gm($.gm($.get($sc, "_root"), "battle_mc"), "depthObj"), (5000 * $.n($.gm($.gm($.get($sc, "this"), "_parent"), "posY"))))]);
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "_xscale", 200);
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "_yscale", 200);
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "_x", $.gm($.gm($.get($sc, "this"), "_parent"), "_x"));
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "_y", $.gm($.gm($.get($sc, "this"), "_parent"), "_y"));
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "spd", $.gm($.gm($.get($sc, "this"), "_parent"), "spd"));
    if (!$.lt($.gm($.gm($.get($sc, "this"), "_parent"), "_xscale"), 0)) { $b = 2; continue; }
    $b = 1; continue;
  case 1:
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "_xscale", ($.n($.gm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "_xscale")) * (-1)));
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "spd", $.gm($.gm($.get($sc, "this"), "_parent"), "spd"));
    $b = 2; continue;
  case 2:
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "onEnterFrame", $.fn({"n":"","p":[],"r":3,"f":105}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, t2, t3, t4, t5;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!!$.bool($.gm($r[2], "isPaused"))) { $b = 6; continue; }
      $b = 1; continue;
    case 1:
      t2 = $.cm($r[1], "play", []);
      $.sm($r[1], "_x", $.add($.gm($r[1], "_x"), $.gm($r[1], "spd")));
      t3 = $.lt($.gm($r[1], "_x"), (-100));
      t4 = t3;
      s0 = t3;
      if (t4) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      s0 = $.gt($.gm($r[1], "_x"), 1300);
      $b = 3; continue;
    case 3:
      if (!$.bool(s0)) { $b = 5; continue; }
      $b = 4; continue;
    case 4:
      t5 = $.cm($r[1], "removeMovieClip", []);
      $b = 5; continue;
    case 5:
      $b = 8; continue;
    case 6:
      t1 = $.cm($r[1], "stop", []);
      $b = 8; continue;
    case 8: return;
    }
  }));
    $b = 3; continue;
  case 3: return;
  }
};
// sprite1953#f82.0
S[138] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  $.def($sc, "alphaMundur", $.fn({"n":"alphaMundur","p":[[1,"who"]],"r":2,"f":42}, $sc, function($sc, $this, $args, $r) {
    $.sm($r[1], "_alpha", ($.n($.gm($r[1], "_alpha")) - 1));
  }));
  $.stop($tgt);
  t1 = $.delMember($.gm($.get($sc, "this"), "_parent"), "onEnterFrame");
  $.sm($.gm($.get($sc, "this"), "_parent"), "penghitung", 60);
  $.sm($.gm($.get($sc, "this"), "_parent"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.sm($r[1], "penghitung", ($.n($.gm($r[1], "penghitung")) - 1));
      if (!!$.gt($.gm($r[1], "penghitung"), 0)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t1 = $.cm($r[1], "attachMovie", ["mc_spirit", "spirit", 99]);
      $.sm($.gm($r[1], "spirit"), "_x", (-30));
      t2 = $r[1];
      t3 = $.cf($sc, "setInterval", [$.get($sc, "alphaMundur"), 20, $r[1]]);
      $.sm(t2, "fading", t3);
      $.sm($r[1], "penghitung", 9999);
      $b = 2; continue;
    case 2:
      if (!!$.gt($.gm($r[1], "_alpha"), 0)) { $b = 5; continue; }
      $b = 3; continue;
    case 3:
      t4 = $.cf($sc, "clearInterval", [$.gm($r[1], "fading")]);
      t5 = $.cm($r[1], "removeMovieClip", []);
      $b = 5; continue;
    case 5: return;
    }
  }));
};
// sprite1954#f1.0
S[139] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
  $.sm($.get($sc, "this"), "attacking", false);
};
// sprite1954#f53.0
S[140] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.gotoFrame($tgt, 1);
};
// sprite1954#f113.0
S[141] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.gotoFrame($tgt, 1);
};
// sprite1954#f172.0
S[142] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.gotoFrame($tgt, 1);
};
// sprite1954#f173.0
S[143] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1, t2;
  $.stop($tgt);
  t1 = $.rand(6);
  t2 = $.cm($.get($sc, "_root"), "soundFX", [$.add("man_dead", (1 + t1))]);
};
// sprite2003#f43.0
S[144] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  $.def($sc, "alphaMundur", $.fn({"n":"alphaMundur","p":[[1,"who"]],"r":2,"f":42}, $sc, function($sc, $this, $args, $r) {
    $.sm($r[1], "_alpha", ($.n($.gm($r[1], "_alpha")) - 1));
  }));
  $.stop($tgt);
  t1 = $.delMember($.gm($.get($sc, "this"), "_parent"), "onEnterFrame");
  $.sm($.gm($.get($sc, "this"), "_parent"), "penghitung", 60);
  $.sm($.gm($.get($sc, "_root"), "battleSummary"), 2, ($.n($.gm($.gm($.get($sc, "_root"), "battleSummary"), 2)) + 1));
  $.sm($.gm($.get($sc, "this"), "_parent"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.sm($r[1], "penghitung", ($.n($.gm($r[1], "penghitung")) - 1));
      if (!!$.gt($.gm($r[1], "penghitung"), 0)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t1 = $.cm($r[1], "attachMovie", ["mc_spirit", "spirit", 99]);
      $.sm($.gm($r[1], "spirit"), "_x", (($.n($.gm($r[1], "_width")) / 2) * (-1)));
      t2 = $r[1];
      t3 = $.cf($sc, "setInterval", [$.get($sc, "alphaMundur"), 20, $r[1]]);
      $.sm(t2, "fading", t3);
      $.sm($r[1], "penghitung", 9999);
      $b = 2; continue;
    case 2:
      if (!!$.gt($.gm($r[1], "_alpha"), 0)) { $b = 5; continue; }
      $b = 3; continue;
    case 3:
      t4 = $.cf($sc, "clearInterval", [$.gm($r[1], "fading")]);
      t5 = $.cm($r[1], "removeMovieClip", []);
      $b = 5; continue;
    case 5: return;
    }
  }));
  $.sm($.gm($.get($sc, "_root"), "statisticList"), 12, ($.n($.gm($.gm($.get($sc, "_root"), "statisticList"), 12)) + 1));
};
// sprite2004#f1.0
S[145] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
  $.sm($.get($sc, "this"), "attacking", false);
};
// sprite2004#f36.0
S[146] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.gotoFrame($tgt, 1);
};
// sprite2004#f37.0
S[147] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1, t2;
  $.stop($tgt);
  t1 = $.rand(6);
  t2 = $.cm($.get($sc, "_root"), "soundFX", [$.add("man_dead", (1 + t1))]);
};
// sprite2033#f43.0
S[148] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  $.def($sc, "alphaMundur", $.fn({"n":"alphaMundur","p":[[1,"who"]],"r":2,"f":42}, $sc, function($sc, $this, $args, $r) {
    $.sm($r[1], "_alpha", ($.n($.gm($r[1], "_alpha")) - 1));
  }));
  $.stop($tgt);
  t1 = $.delMember($.gm($.get($sc, "this"), "_parent"), "onEnterFrame");
  $.sm($.gm($.get($sc, "this"), "_parent"), "penghitung", 60);
  $.sm($.gm($.get($sc, "_root"), "battleSummary"), 2, ($.n($.gm($.gm($.get($sc, "_root"), "battleSummary"), 2)) + 1));
  $.sm($.gm($.get($sc, "this"), "_parent"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.sm($r[1], "penghitung", ($.n($.gm($r[1], "penghitung")) - 1));
      if (!!$.gt($.gm($r[1], "penghitung"), 0)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t1 = $.cm($r[1], "attachMovie", ["mc_spirit", "spirit", 99]);
      $.sm($.gm($r[1], "spirit"), "_x", (($.n($.gm($r[1], "_width")) / 2) * (-1)));
      t2 = $r[1];
      t3 = $.cf($sc, "setInterval", [$.get($sc, "alphaMundur"), 20, $r[1]]);
      $.sm(t2, "fading", t3);
      $.sm($r[1], "penghitung", 9999);
      $b = 2; continue;
    case 2:
      if (!!$.gt($.gm($r[1], "_alpha"), 0)) { $b = 5; continue; }
      $b = 3; continue;
    case 3:
      t4 = $.cf($sc, "clearInterval", [$.gm($r[1], "fading")]);
      t5 = $.cm($r[1], "removeMovieClip", []);
      $b = 5; continue;
    case 5: return;
    }
  }));
  $.sm($.gm($.get($sc, "_root"), "statisticList"), 12, ($.n($.gm($.gm($.get($sc, "_root"), "statisticList"), 12)) + 1));
};
// sprite2034#f1.0
S[149] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
  $.sm($.get($sc, "this"), "attacking", false);
};
// sprite2034#f36.0
S[150] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.gotoFrame($tgt, 1);
};
// sprite2034#f37.0
S[151] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1, t2;
  $.stop($tgt);
  t1 = $.rand(6);
  t2 = $.cm($.get($sc, "_root"), "soundFX", [$.add("man_dead", (1 + t1))]);
};
// sprite2098#f17.0
S[152] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  t1 = $.cm($.get($sc, "_root"), "soundFX", ["horse"]);
};
// sprite2098#f74.0
S[153] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  var $b = 0;
  for (;;) switch ($b) {
  case 0:
    $.sm($.gm($.get($sc, "_root"), "battle_mc"), "depthObj", ($.n($.gm($.gm($.get($sc, "_root"), "battle_mc"), "depthObj")) + 1));
    $.set($sc, "nameHorse", $.add("horse", $.gm($.gm($.get($sc, "_root"), "battle_mc"), "depthObj")));
    t1 = $.cm($.gm($.get($sc, "_root"), "battle_mc"), "attachMovie", ["horse_running", $.get($sc, "nameHorse"), $.add($.gm($.gm($.get($sc, "_root"), "battle_mc"), "depthObj"), (5000 * $.n($.gm($.gm($.get($sc, "this"), "_parent"), "posY"))))]);
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "_xscale", 200);
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "_yscale", 200);
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "_x", $.gm($.gm($.get($sc, "this"), "_parent"), "_x"));
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "_y", $.gm($.gm($.get($sc, "this"), "_parent"), "_y"));
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "spd", $.gm($.gm($.get($sc, "this"), "_parent"), "spd"));
    if (!$.lt($.gm($.gm($.get($sc, "this"), "_parent"), "_xscale"), 0)) { $b = 2; continue; }
    $b = 1; continue;
  case 1:
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "_xscale", ($.n($.gm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "_xscale")) * (-1)));
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "spd", $.gm($.gm($.get($sc, "this"), "_parent"), "spd"));
    $b = 2; continue;
  case 2:
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "onEnterFrame", $.fn({"n":"","p":[],"r":3,"f":105}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, t2, t3, t4, t5;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!!$.bool($.gm($r[2], "isPaused"))) { $b = 6; continue; }
      $b = 1; continue;
    case 1:
      t2 = $.cm($r[1], "play", []);
      $.sm($r[1], "_x", $.add($.gm($r[1], "_x"), $.gm($r[1], "spd")));
      t3 = $.lt($.gm($r[1], "_x"), (-100));
      t4 = t3;
      s0 = t3;
      if (t4) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      s0 = $.gt($.gm($r[1], "_x"), 1300);
      $b = 3; continue;
    case 3:
      if (!$.bool(s0)) { $b = 5; continue; }
      $b = 4; continue;
    case 4:
      t5 = $.cm($r[1], "removeMovieClip", []);
      $b = 5; continue;
    case 5:
      $b = 8; continue;
    case 6:
      t1 = $.cm($r[1], "stop", []);
      $b = 8; continue;
    case 8: return;
    }
  }));
    $b = 3; continue;
  case 3: return;
  }
};
// sprite2098#f82.0
S[154] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  $.def($sc, "alphaMundur", $.fn({"n":"alphaMundur","p":[[1,"who"]],"r":2,"f":42}, $sc, function($sc, $this, $args, $r) {
    $.sm($r[1], "_alpha", ($.n($.gm($r[1], "_alpha")) - 1));
  }));
  $.stop($tgt);
  t1 = $.delMember($.gm($.get($sc, "this"), "_parent"), "onEnterFrame");
  $.sm($.gm($.get($sc, "this"), "_parent"), "penghitung", 60);
  $.sm($.gm($.get($sc, "_root"), "battleSummary"), 2, ($.n($.gm($.gm($.get($sc, "_root"), "battleSummary"), 2)) + 1));
  $.sm($.gm($.get($sc, "this"), "_parent"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.sm($r[1], "penghitung", ($.n($.gm($r[1], "penghitung")) - 1));
      if (!!$.gt($.gm($r[1], "penghitung"), 0)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t1 = $.cm($r[1], "attachMovie", ["mc_spirit", "spirit", 99]);
      $.sm($.gm($r[1], "spirit"), "_x", (($.n($.gm($r[1], "_width")) / 2) * (-1)));
      t2 = $r[1];
      t3 = $.cf($sc, "setInterval", [$.get($sc, "alphaMundur"), 20, $r[1]]);
      $.sm(t2, "fading", t3);
      $.sm($r[1], "penghitung", 9999);
      $b = 2; continue;
    case 2:
      if (!!$.gt($.gm($r[1], "_alpha"), 0)) { $b = 5; continue; }
      $b = 3; continue;
    case 3:
      t4 = $.cf($sc, "clearInterval", [$.gm($r[1], "fading")]);
      t5 = $.cm($r[1], "removeMovieClip", []);
      $b = 5; continue;
    case 5: return;
    }
  }));
  $.sm($.gm($.get($sc, "_root"), "statisticList"), 10, ($.n($.gm($.gm($.get($sc, "_root"), "statisticList"), 10)) + 1));
};
// sprite2099#f1.0
S[155] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
  $.sm($.get($sc, "this"), "attacking", false);
};
// sprite2099#f41.0
S[156] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.gotoFrame($tgt, 1);
};
// sprite2099#f42.0
S[157] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1, t2;
  $.stop($tgt);
  t1 = $.rand(6);
  t2 = $.cm($.get($sc, "_root"), "soundFX", [$.add("man_dead", (1 + t1))]);
};
// sprite2104#f1.0
S[158] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
  $.sm($.get($sc, "this"), "attacking", false);
};
// sprite2104#f41.0
S[159] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.gotoFrame($tgt, 1);
};
// sprite2104#f42.0
S[160] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1, t2;
  $.stop($tgt);
  t1 = $.rand(6);
  t2 = $.cm($.get($sc, "_root"), "soundFX", [$.add("man_dead", (1 + t1))]);
};
// sprite2166#f51.0
S[161] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  $.def($sc, "alphaMundur", $.fn({"n":"alphaMundur","p":[[1,"who"]],"r":2,"f":42}, $sc, function($sc, $this, $args, $r) {
    $.sm($r[1], "_alpha", ($.n($.gm($r[1], "_alpha")) - 1));
  }));
  $.stop($tgt);
  t1 = $.delMember($.gm($.get($sc, "this"), "_parent"), "onEnterFrame");
  $.sm($.gm($.get($sc, "this"), "_parent"), "penghitung", 60);
  $.sm($.gm($.get($sc, "_root"), "battleSummary"), 2, ($.n($.gm($.gm($.get($sc, "_root"), "battleSummary"), 2)) + 1));
  $.sm($.gm($.get($sc, "this"), "_parent"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.sm($r[1], "penghitung", ($.n($.gm($r[1], "penghitung")) - 1));
      if (!!$.gt($.gm($r[1], "penghitung"), 0)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t1 = $.cm($r[1], "attachMovie", ["mc_spirit", "spirit", 99]);
      $.sm($.gm($r[1], "spirit"), "_x", ($.n($.gm($r[1], "_width")) / 1.5));
      t2 = $r[1];
      t3 = $.cf($sc, "setInterval", [$.get($sc, "alphaMundur"), 20, $r[1]]);
      $.sm(t2, "fading", t3);
      $.sm($r[1], "penghitung", 9999);
      $b = 2; continue;
    case 2:
      if (!!$.gt($.gm($r[1], "_alpha"), 0)) { $b = 5; continue; }
      $b = 3; continue;
    case 3:
      t4 = $.cf($sc, "clearInterval", [$.gm($r[1], "fading")]);
      t5 = $.cm($r[1], "removeMovieClip", []);
      $b = 5; continue;
    case 5: return;
    }
  }));
  $.sm($.gm($.get($sc, "_root"), "statisticList"), 13, ($.n($.gm($.gm($.get($sc, "_root"), "statisticList"), 13)) + 1));
};
// sprite2167#f1.0
S[162] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
  $.sm($.get($sc, "this"), "attacking", false);
};
// sprite2167#f39.0
S[163] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.gotoFrame($tgt, 1);
};
// sprite2167#f40.0
S[164] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1, t2;
  $.stop($tgt);
  t1 = $.rand(6);
  t2 = $.cm($.get($sc, "_root"), "soundFX", [$.add("man_dead", (1 + t1))]);
};
// sprite2215#f51.0
S[165] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  $.def($sc, "alphaMundur", $.fn({"n":"alphaMundur","p":[[1,"who"]],"r":2,"f":42}, $sc, function($sc, $this, $args, $r) {
    $.sm($r[1], "_alpha", ($.n($.gm($r[1], "_alpha")) - 1));
  }));
  $.stop($tgt);
  t1 = $.delMember($.gm($.get($sc, "this"), "_parent"), "onEnterFrame");
  $.sm($.gm($.get($sc, "this"), "_parent"), "penghitung", 60);
  $.sm($.gm($.get($sc, "_root"), "battleSummary"), 2, ($.n($.gm($.gm($.get($sc, "_root"), "battleSummary"), 2)) + 1));
  $.sm($.gm($.get($sc, "this"), "_parent"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.sm($r[1], "penghitung", ($.n($.gm($r[1], "penghitung")) - 1));
      if (!!$.gt($.gm($r[1], "penghitung"), 0)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t1 = $.cm($r[1], "attachMovie", ["mc_spirit", "spirit", 99]);
      $.sm($.gm($r[1], "spirit"), "_x", ($.n($.gm($r[1], "_width")) / 1.5));
      t2 = $r[1];
      t3 = $.cf($sc, "setInterval", [$.get($sc, "alphaMundur"), 20, $r[1]]);
      $.sm(t2, "fading", t3);
      $.sm($r[1], "penghitung", 9999);
      $b = 2; continue;
    case 2:
      if (!!$.gt($.gm($r[1], "_alpha"), 0)) { $b = 5; continue; }
      $b = 3; continue;
    case 3:
      t4 = $.cf($sc, "clearInterval", [$.gm($r[1], "fading")]);
      t5 = $.cm($r[1], "removeMovieClip", []);
      $b = 5; continue;
    case 5: return;
    }
  }));
  $.sm($.gm($.get($sc, "_root"), "statisticList"), 13, ($.n($.gm($.gm($.get($sc, "_root"), "statisticList"), 13)) + 1));
};
// sprite2216#f1.0
S[166] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
  $.sm($.get($sc, "this"), "attacking", false);
};
// sprite2216#f60.0
S[167] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.gotoFrame($tgt, 1);
};
// sprite2216#f61.0
S[168] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1, t2;
  $.stop($tgt);
  t1 = $.rand(6);
  t2 = $.cm($.get($sc, "_root"), "soundFX", [$.add("man_dead", (1 + t1))]);
};
// sprite2281#f17.0
S[169] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  t1 = $.cm($.get($sc, "_root"), "soundFX", ["horse"]);
};
// sprite2281#f74.0
S[170] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  var $b = 0;
  for (;;) switch ($b) {
  case 0:
    $.sm($.gm($.get($sc, "_root"), "battle_mc"), "depthObj", ($.n($.gm($.gm($.get($sc, "_root"), "battle_mc"), "depthObj")) + 1));
    $.set($sc, "nameHorse", $.add("horse", $.gm($.gm($.get($sc, "_root"), "battle_mc"), "depthObj")));
    t1 = $.cm($.gm($.get($sc, "_root"), "battle_mc"), "attachMovie", ["rb_horse_running", $.get($sc, "nameHorse"), $.add($.gm($.gm($.get($sc, "_root"), "battle_mc"), "depthObj"), (5000 * $.n($.gm($.gm($.get($sc, "this"), "_parent"), "posY"))))]);
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "_xscale", 200);
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "_yscale", 200);
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "_x", $.gm($.gm($.get($sc, "this"), "_parent"), "_x"));
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "_y", $.gm($.gm($.get($sc, "this"), "_parent"), "_y"));
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "spd", $.gm($.gm($.get($sc, "this"), "_parent"), "spd"));
    if (!$.lt($.gm($.gm($.get($sc, "this"), "_parent"), "_xscale"), 0)) { $b = 2; continue; }
    $b = 1; continue;
  case 1:
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "_xscale", ($.n($.gm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "_xscale")) * (-1)));
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "spd", $.gm($.gm($.get($sc, "this"), "_parent"), "spd"));
    $b = 2; continue;
  case 2:
    $.sm($.gm($.gm($.get($sc, "_root"), "battle_mc"), $.get($sc, "nameHorse")), "onEnterFrame", $.fn({"n":"","p":[],"r":3,"f":105}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, t2, t3, t4, t5;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!!$.bool($.gm($r[2], "isPaused"))) { $b = 6; continue; }
      $b = 1; continue;
    case 1:
      t2 = $.cm($r[1], "play", []);
      $.sm($r[1], "_x", $.add($.gm($r[1], "_x"), $.gm($r[1], "spd")));
      t3 = $.lt($.gm($r[1], "_x"), (-100));
      t4 = t3;
      s0 = t3;
      if (t4) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      s0 = $.gt($.gm($r[1], "_x"), 1300);
      $b = 3; continue;
    case 3:
      if (!$.bool(s0)) { $b = 5; continue; }
      $b = 4; continue;
    case 4:
      t5 = $.cm($r[1], "removeMovieClip", []);
      $b = 5; continue;
    case 5:
      $b = 8; continue;
    case 6:
      t1 = $.cm($r[1], "stop", []);
      $b = 8; continue;
    case 8: return;
    }
  }));
    $b = 3; continue;
  case 3: return;
  }
};
// sprite2281#f82.0
S[171] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  $.def($sc, "alphaMundur", $.fn({"n":"alphaMundur","p":[[1,"who"]],"r":2,"f":42}, $sc, function($sc, $this, $args, $r) {
    $.sm($r[1], "_alpha", ($.n($.gm($r[1], "_alpha")) - 1));
  }));
  $.stop($tgt);
  t1 = $.delMember($.gm($.get($sc, "this"), "_parent"), "onEnterFrame");
  $.sm($.gm($.get($sc, "this"), "_parent"), "penghitung", 60);
  $.sm($.gm($.get($sc, "this"), "_parent"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.sm($r[1], "penghitung", ($.n($.gm($r[1], "penghitung")) - 1));
      if (!!$.gt($.gm($r[1], "penghitung"), 0)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t1 = $.cm($r[1], "attachMovie", ["mc_spirit", "spirit", 99]);
      $.sm($.gm($r[1], "spirit"), "_x", (($.n($.gm($r[1], "_width")) / 2) * (-1)));
      t2 = $r[1];
      t3 = $.cf($sc, "setInterval", [$.get($sc, "alphaMundur"), 20, $r[1]]);
      $.sm(t2, "fading", t3);
      $.sm($r[1], "penghitung", 9999);
      $b = 2; continue;
    case 2:
      if (!!$.gt($.gm($r[1], "_alpha"), 0)) { $b = 5; continue; }
      $b = 3; continue;
    case 3:
      t4 = $.cf($sc, "clearInterval", [$.gm($r[1], "fading")]);
      t5 = $.cm($r[1], "removeMovieClip", []);
      $b = 5; continue;
    case 5: return;
    }
  }));
  $.sm($.gm($.get($sc, "_root"), "statisticList"), 14, ($.n($.gm($.gm($.get($sc, "_root"), "statisticList"), 14)) + 1));
};
// sprite2282#f1.0
S[172] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
  $.sm($.get($sc, "this"), "attacking", false);
};
// sprite2282#f53.0
S[173] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.gotoFrame($tgt, 1);
};
// sprite2282#f54.0
S[174] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  $.stop($tgt);
  $.sm($.gm($.get($sc, "_root"), $.add("special_btn", $.gm($.get($sc, "this"), "armyNum"))), "enabled", false);
  $.sm($.gm($.get($sc, "_root"), $.add("special_btn", $.gm($.get($sc, "this"), "armyNum"))), "special", false);
  t1 = $.cm($.gm($.get($sc, "_root"), $.add("special_btn", $.gm($.get($sc, "this"), "armyNum"))), "gotoAndStop", [2]);
};
// sprite2336#f43.0
S[175] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  $.def($sc, "alphaMundur", $.fn({"n":"alphaMundur","p":[[1,"who"]],"r":2,"f":42}, $sc, function($sc, $this, $args, $r) {
    $.sm($r[1], "_alpha", ($.n($.gm($r[1], "_alpha")) - 1));
  }));
  $.stop($tgt);
  t1 = $.delMember($.gm($.get($sc, "this"), "_parent"), "onEnterFrame");
  $.sm($.gm($.get($sc, "this"), "_parent"), "penghitung", 60);
  $.sm($.gm($.get($sc, "this"), "_parent"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5, t6;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.sm($r[1], "penghitung", ($.n($.gm($r[1], "penghitung")) - 1));
      if (!!$.gt($.gm($r[1], "penghitung"), 0)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t1 = $.cm($r[1], "attachMovie", ["mc_spirit", "spirit", 99]);
      $.sm($.gm($r[1], "spirit"), "_x", (($.n($.gm($r[1], "_width")) / 2) * (-1)));
      t2 = $r[1];
      t3 = $.cf($sc, "setInterval", [$.get($sc, "alphaMundur"), 20, $r[1]]);
      $.sm(t2, "fading", t3);
      $.sm($r[1], "penghitung", 9999);
      $b = 2; continue;
    case 2:
      if (!!$.gt($.gm($r[1], "_alpha"), 0)) { $b = 5; continue; }
      $b = 3; continue;
    case 3:
      t4 = $.cf($sc, "clearInterval", [$.gm($r[1], "fading")]);
      t5 = $.cm($r[1], "removeMovieClip", []);
      t6 = $.delMember($r[1], "onEnterFrame");
      $b = 5; continue;
    case 5: return;
    }
  }));
  $.sm($.gm($.get($sc, "_root"), "statisticList"), 14, ($.n($.gm($.gm($.get($sc, "_root"), "statisticList"), 14)) + 1));
};
// sprite2337#f1.0
S[176] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
  $.sm($.get($sc, "this"), "attacking", false);
};
// sprite2337#f41.0
S[177] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.gotoFrame($tgt, 1);
};
// sprite2337#f68.0
S[178] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.gotoFrame($tgt, 1);
};
// sprite2337#f69.0
S[179] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1, t2, t3;
  $.stop($tgt);
  t1 = $.rand(6);
  t2 = $.cm($.get($sc, "_root"), "soundFX", [$.add("man_dead", (1 + t1))]);
  $.sm($.gm($.get($sc, "_root"), $.add("special_btn", $.gm($.get($sc, "this"), "armyNum"))), "enabled", false);
  $.sm($.gm($.get($sc, "_root"), $.add("special_btn", $.gm($.get($sc, "this"), "armyNum"))), "special", false);
  t3 = $.cm($.gm($.get($sc, "_root"), $.add("special_btn", $.gm($.get($sc, "this"), "armyNum"))), "gotoAndStop", [2]);
};
// sprite2340#f1.0
S[180] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite2388#f43.0
S[181] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  $.def($sc, "alphaMundur", $.fn({"n":"alphaMundur","p":[[1,"who"]],"r":2,"f":42}, $sc, function($sc, $this, $args, $r) {
    $.sm($r[1], "_alpha", ($.n($.gm($r[1], "_alpha")) - 1));
  }));
  $.stop($tgt);
  t1 = $.delMember($.gm($.get($sc, "this"), "_parent"), "onEnterFrame");
  $.sm($.gm($.get($sc, "this"), "_parent"), "penghitung", 60);
  $.sm($.gm($.get($sc, "_root"), "battleSummary"), 2, ($.n($.gm($.gm($.get($sc, "_root"), "battleSummary"), 2)) + 1));
  $.sm($.gm($.get($sc, "this"), "_parent"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.sm($r[1], "penghitung", ($.n($.gm($r[1], "penghitung")) - 1));
      if (!!$.gt($.gm($r[1], "penghitung"), 0)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t1 = $.cm($r[1], "attachMovie", ["mc_spirit", "spirit", 99]);
      $.sm($.gm($r[1], "spirit"), "_x", (($.n($.gm($r[1], "_width")) / 3) * (-1)));
      t2 = $r[1];
      t3 = $.cf($sc, "setInterval", [$.get($sc, "alphaMundur"), 20, $r[1]]);
      $.sm(t2, "fading", t3);
      $.sm($r[1], "penghitung", 9999);
      $b = 2; continue;
    case 2:
      if (!!$.gt($.gm($r[1], "_alpha"), 0)) { $b = 5; continue; }
      $b = 3; continue;
    case 3:
      t4 = $.cf($sc, "clearInterval", [$.gm($r[1], "fading")]);
      t5 = $.cm($r[1], "removeMovieClip", []);
      $b = 5; continue;
    case 5: return;
    }
  }));
  $.sm($.gm($.get($sc, "_root"), "statisticList"), 11, ($.n($.gm($.gm($.get($sc, "_root"), "statisticList"), 11)) + 1));
};
// sprite2389#f1.0
S[182] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite2389#f40.0
S[183] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.gotoFrame($tgt, 1);
};
// sprite2389#f41.0
S[184] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1, t2;
  $.stop($tgt);
  t1 = $.rand(6);
  t2 = $.cm($.get($sc, "_root"), "soundFX", [$.add("man_dead", (1 + t1))]);
};
// sprite2424#f43.0
S[185] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  $.def($sc, "alphaMundur", $.fn({"n":"alphaMundur","p":[[1,"who"]],"r":2,"f":42}, $sc, function($sc, $this, $args, $r) {
    $.sm($r[1], "_alpha", ($.n($.gm($r[1], "_alpha")) - 1));
  }));
  $.stop($tgt);
  t1 = $.delMember($.gm($.get($sc, "this"), "_parent"), "onEnterFrame");
  $.sm($.gm($.get($sc, "this"), "_parent"), "penghitung", 60);
  $.sm($.gm($.get($sc, "_root"), "battleSummary"), 2, ($.n($.gm($.gm($.get($sc, "_root"), "battleSummary"), 2)) + 1));
  $.sm($.gm($.get($sc, "this"), "_parent"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.sm($r[1], "penghitung", ($.n($.gm($r[1], "penghitung")) - 1));
      if (!!$.gt($.gm($r[1], "penghitung"), 0)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t1 = $.cm($r[1], "attachMovie", ["mc_spirit", "spirit", 99]);
      $.sm($.gm($r[1], "spirit"), "_x", (($.n($.gm($r[1], "_width")) / 3) * (-1)));
      t2 = $r[1];
      t3 = $.cf($sc, "setInterval", [$.get($sc, "alphaMundur"), 20, $r[1]]);
      $.sm(t2, "fading", t3);
      $.sm($r[1], "penghitung", 9999);
      $b = 2; continue;
    case 2:
      if (!!$.gt($.gm($r[1], "_alpha"), 0)) { $b = 5; continue; }
      $b = 3; continue;
    case 3:
      t4 = $.cf($sc, "clearInterval", [$.gm($r[1], "fading")]);
      t5 = $.cm($r[1], "removeMovieClip", []);
      $b = 5; continue;
    case 5: return;
    }
  }));
  $.sm($.gm($.get($sc, "_root"), "statisticList"), 11, ($.n($.gm($.gm($.get($sc, "_root"), "statisticList"), 11)) + 1));
};
// sprite2425#f1.0
S[186] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite2425#f48.0
S[187] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.gotoFrame($tgt, 1);
};
// sprite2425#f49.0
S[188] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1, t2;
  $.stop($tgt);
  t1 = $.rand(6);
  t2 = $.cm($.get($sc, "_root"), "soundFX", [$.add("man_dead", (1 + t1))]);
};
// sprite2463#f43.0
S[189] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  $.def($sc, "alphaMundur", $.fn({"n":"alphaMundur","p":[[1,"who"]],"r":2,"f":42}, $sc, function($sc, $this, $args, $r) {
    $.sm($r[1], "_alpha", ($.n($.gm($r[1], "_alpha")) - 1));
  }));
  $.stop($tgt);
  t1 = $.delMember($.gm($.get($sc, "this"), "_parent"), "onEnterFrame");
  $.sm($.gm($.get($sc, "this"), "_parent"), "penghitung", 60);
  $.sm($.gm($.get($sc, "_root"), "battleSummary"), 2, ($.n($.gm($.gm($.get($sc, "_root"), "battleSummary"), 2)) + 1));
  $.sm($.gm($.get($sc, "this"), "_parent"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.sm($r[1], "penghitung", ($.n($.gm($r[1], "penghitung")) - 1));
      if (!!$.gt($.gm($r[1], "penghitung"), 0)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t1 = $.cm($r[1], "attachMovie", ["mc_spirit", "spirit", 99]);
      $.sm($.gm($r[1], "spirit"), "_x", (($.n($.gm($r[1], "_width")) / 2) * (-1)));
      t2 = $r[1];
      t3 = $.cf($sc, "setInterval", [$.get($sc, "alphaMundur"), 20, $r[1]]);
      $.sm(t2, "fading", t3);
      $.sm($r[1], "penghitung", 9999);
      $b = 2; continue;
    case 2:
      if (!!$.gt($.gm($r[1], "_alpha"), 0)) { $b = 5; continue; }
      $b = 3; continue;
    case 3:
      t4 = $.cf($sc, "clearInterval", [$.gm($r[1], "fading")]);
      t5 = $.cm($r[1], "removeMovieClip", []);
      $b = 5; continue;
    case 5: return;
    }
  }));
  $.sm($.gm($.get($sc, "_root"), "statisticList"), 9, ($.n($.gm($.gm($.get($sc, "_root"), "statisticList"), 9)) + 1));
};
// sprite2464#f1.0
S[190] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  $.stop($tgt);
  t1 = $.cm($.get($sc, "char"), "gotoAndStop", [1]);
};
// sprite2464#f36.0
S[191] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.gotoFrame($tgt, 1);
};
// sprite2464#f37.0
S[192] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1, t2;
  $.stop($tgt);
  t1 = $.rand(6);
  t2 = $.cm($.get($sc, "_root"), "soundFX", [$.add("man_dead", (1 + t1))]);
};
// sprite2497#f43.0
S[193] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  $.def($sc, "alphaMundur", $.fn({"n":"alphaMundur","p":[[1,"who"]],"r":2,"f":42}, $sc, function($sc, $this, $args, $r) {
    $.sm($r[1], "_alpha", ($.n($.gm($r[1], "_alpha")) - 1));
  }));
  $.stop($tgt);
  t1 = $.delMember($.gm($.get($sc, "this"), "_parent"), "onEnterFrame");
  $.sm($.gm($.get($sc, "this"), "_parent"), "penghitung", 60);
  $.sm($.gm($.get($sc, "_root"), "battleSummary"), 2, ($.n($.gm($.gm($.get($sc, "_root"), "battleSummary"), 2)) + 1));
  $.sm($.gm($.get($sc, "this"), "_parent"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.sm($r[1], "penghitung", ($.n($.gm($r[1], "penghitung")) - 1));
      if (!!$.gt($.gm($r[1], "penghitung"), 0)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t1 = $.cm($r[1], "attachMovie", ["mc_spirit", "spirit", 99]);
      $.sm($.gm($r[1], "spirit"), "_x", (($.n($.gm($r[1], "_width")) / 2) * (-1)));
      t2 = $r[1];
      t3 = $.cf($sc, "setInterval", [$.get($sc, "alphaMundur"), 20, $r[1]]);
      $.sm(t2, "fading", t3);
      $.sm($r[1], "penghitung", 9999);
      $b = 2; continue;
    case 2:
      if (!!$.gt($.gm($r[1], "_alpha"), 0)) { $b = 5; continue; }
      $b = 3; continue;
    case 3:
      t4 = $.cf($sc, "clearInterval", [$.gm($r[1], "fading")]);
      t5 = $.cm($r[1], "removeMovieClip", []);
      $b = 5; continue;
    case 5: return;
    }
  }));
  $.sm($.gm($.get($sc, "_root"), "statisticList"), 9, ($.n($.gm($.gm($.get($sc, "_root"), "statisticList"), 9)) + 1));
};
// sprite2498#f1.0
S[194] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
  $.sm($.get($sc, "this"), "attacking", false);
};
// sprite2498#f22.0
S[195] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.gotoFrame($tgt, 1);
};
// sprite2498#f23.0
S[196] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1, t2;
  $.stop($tgt);
  t1 = $.rand(6);
  t2 = $.cm($.get($sc, "_root"), "soundFX", [$.add("man_dead", (1 + t1))]);
};
// sprite2544#f1.0
S[197] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.set($sc, "judulList", ["What would you do?", "Que voulez-vous faire?", "Apa yang kamu butuhkan?"]);
  $.sm($.get($sc, "judul"), "text", $.gm($.get($sc, "judulList"), $.gm($.get($sc, "_root"), "bahasa")));
};
// sprite2596#f1.0
S[198] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  t1 = $.cm($.get($sc, "this"), "gotoAndStop", [$.add($.gm($.get($sc, "_root"), "bahasa"), 1)]);
};
// sprite2607#f1.0
S[199] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  t1 = $.cm($.get($sc, "this"), "gotoAndStop", [$.add($.gm($.get($sc, "_root"), "bahasa"), 1)]);
};
// sprite2628#f1.0
S[200] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  t1 = $.cm($.get($sc, "this"), "gotoAndStop", [$.add($.gm($.get($sc, "_root"), "bahasa"), 1)]);
};
// sprite2643#f22.0
S[201] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  $.stop($tgt);
  t1 = $.cm($.get($sc, "this"), "removeMovieClip", []);
};
// sprite2723#f1.0
S[202] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  t1 = $.cm($.get($sc, "tulisan"), "gotoAndStop", [$.add($.gm($.get($sc, "_root"), "bahasa"), 1)]);
};
// sprite2726#f1.0
S[203] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite2766#f1.0
S[204] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  t1 = $.cm($.get($sc, "this"), "gotoAndStop", [$.add($.gm($.get($sc, "_root"), "bahasa"), 1)]);
};
// sprite2837#f1.0
S[205] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  t1 = $.cm($.get($sc, "achievement_teks"), "gotoAndStop", [$.add($.gm($.get($sc, "_root"), "bahasa"), 1)]);
};
// button2854
S[206] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.getURL2("http://www.belugerinstudios.com/", $.get($sc, "_blank"), 0);
};
// sprite2870#f1.0
S[207] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  t1 = $.cm($.get($sc, "judul"), "gotoAndStop", [$.add($.gm($.get($sc, "_root"), "bahasa"), 1)]);
};
// sprite2904#f1.0
S[208] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  t1 = $.cm($.get($sc, "medals_teks"), "gotoAndStop", [$.add($.gm($.get($sc, "_root"), "bahasa"), 1)]);
};
// sprite2935#f1.0
S[209] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  t1 = $.cm($.get($sc, "this"), "gotoAndStop", [$.add($.gm($.get($sc, "_root"), "bahasa"), 1)]);
};
// sprite2939#f1.0
S[210] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  t1 = $.cm($.get($sc, "this"), "gotoAndStop", [$.add($.gm($.get($sc, "_root"), "bahasa"), 1)]);
};
// sprite2940#f1.0
S[211] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite2947#f1.0
S[212] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  t1 = $.cm($.get($sc, "judul"), "gotoAndStop", [$.add($.gm($.get($sc, "_root"), "bahasa"), 1)]);
};
// sprite2976#f1.0
S[213] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite2981#f1.0
S[214] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite2986#f1.0
S[215] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite2997#f1.0
S[216] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite3006#f1.0
S[217] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1, t2;
  $.stop($tgt);
  t1 = $.cm($.get($sc, "tulisan"), "gotoAndStop", [$.add($.gm($.get($sc, "_root"), "bahasa"), 1)]);
  t2 = $.cm($.get($sc, "tulisan2"), "gotoAndStop", [$.add($.gm($.get($sc, "_root"), "bahasa"), 1)]);
};
// sprite3006#f2.0
S[218] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1, t2;
  $.stop($tgt);
  t1 = $.cm($.get($sc, "tulisan"), "gotoAndStop", [$.add($.gm($.get($sc, "_root"), "bahasa"), 1)]);
  t2 = $.cm($.get($sc, "tulisan2"), "gotoAndStop", [$.add($.gm($.get($sc, "_root"), "bahasa"), 1)]);
};
// sprite3013#f1.0
S[219] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  t1 = $.cm($.get($sc, "this"), "gotoAndStop", [$.add($.gm($.get($sc, "_root"), "bahasa"), 1)]);
};
// sprite3063#f1.0
S[220] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.sm($.get($sc, "_root"), "isPaused", true);
  $.set($sc, "tutorialBattle", [0, ["Use the left and right arrow keys or move the mouse to the left and right corners to scroll the landscape.", "Pour faire défiler le paysage, utilisez les flèches droite et gauche ou déplacez la souris.", "Gunakan tombol kiri dan kanan, atau gerakkan mouse ke pojok kiri dan kanan untuk men-scroll landscape ke kiri dan kanan"], ["Click on the icon of available units to create an army, then click on the line in the landscape to block enemy attacks.", "Cliquez sur une des icônes des guerriers disponibles pour créer une unité, puis sélectionnez une rangée dans le paysage pour contrer une attaque ennemie.", "Klik pada icon unit yang tersedia untuk meng-create pasukan kemudian klik pada line di landscape untuk memblok serangan musuh"], ["Defense statistics is your base lifepoint. If your base lifepoint reaches 0, it means that the enemy has beaten your defenses.", "La case défense recense vos points de vie. Si cette valeur tombe à zéro, l’ennemi a réussi à vaincre votre défense.", "Statistik defense adalah lifepoint dari base kita, jika base lifepoint menjadi 0, itu artinya musuh berhasil menembus pertahanan kita"], ["Food stock indicates the number of meal stocks available. If we do not enough food stock, we won't be able to feed our armies.", "La case nourriture en stock indique le niveau de vivres disponibles. Si nous n’avons plus de nourriture en stock, nous ne pouvons plus nourrir nos armées.", "Food Stock menunjukkan jumlah stock makanan yg kita punya untuk berperang, jika kita tidak mempunyai stock makanan, kita tidak dapat membuat pasukan"], ["Enemy left shows the number of remaining enemy forces. You have to defend the base until there are no enemies left.", "La case ennemis indique le nombre d’ennemis encore en vie. Vous devez combattre jusqu’à ce qu’il n’y ait plus d’ennemis.", "Enemy left menunjukkan jumlah pasukan musuh yang tersisa, kamu harus pertahankan base hingga musuh tidak tersisa"], ["Your army will steal enemy's gold after every successful battle", "Votre armée voleront l'or ennemi après chaque victoire", "pasukan kamu akan merampas gold ketika mereka sampai ke base musuh"], ["Special ability is the ability possesed by each commander. You must use them wisely to get maximum results.", "Chaque chef possède un pouvoir spécial. Vous devez l’utiliser judicieusement pour obtenir un résultat optimal.", "Special ability adalah kemampuan yang dimiliki tiap panglima, Kau harus menggunakan secara tepat untuk mendapat hasil yg maksimal"], ["At the bottom right, there is a button to retreat. It is better to retreat when you see no possibility of winning the battle. Retreat gives you time to prepare a counter-attack", "En bas à droite, le bouton repli vous permet de battre en retraite. Cela peut être utile si vous sentez que vous ne pourrez pas gagner la bataille. Cela vous donnera le temps de préparer une contre-attaque", "Di pojok bawah ada tombol menu untuk menyerah, jika kamu merasa tidak akan menang sebaiknya mundur untuk menyusun penyerangan balik"]]);
  $.set($sc, "judul", ["Battle Tutorial", "TUTORIEL DE COMBAT", "Tutorial Pertempuran"]);
  $.sm($.get($sc, "this"), "onEnterFrame", $.fn({"n":"","p":[],"r":3,"f":105}, $sc, function($sc, $this, $args, $r) {
    $.sm($.gm($r[1], "tulisan"), "text", $.gm($.gm($.get($sc, "tutorialBattle"), $.gm($r[1], "_currentframe")), $.gm($r[2], "bahasa")));
    $.sm($.gm($r[1], "tulisan3"), "text", $.gm($.get($sc, "judul"), $.gm($r[2], "bahasa")));
  }));
};
// sprite3063#f9.0
S[221] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1, t2;
  $.sm($.get($sc, "_root"), "isPaused", false);
  $.sm($.get($sc, "_root"), "battleTutorial", true);
  t1 = $.cm($.get($sc, "_root"), "newAchievement", [1]);
  t2 = $.cm($.get($sc, "this"), "removeMovieClip", []);
};
// sprite3064#f6.0
S[222] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  $.stop($tgt);
  t1 = $.cm($.get($sc, "this"), "removeMovieClip", []);
};
// sprite3065#f7.0
S[223] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  $.stop($tgt);
  t1 = $.cm($.get($sc, "this"), "removeMovieClip", []);
};
// sprite3100#f1.0
S[224] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.sm($.get($sc, "this"), "onEnterFrame", $.fn({"n":"","p":[],"r":3,"f":105}, $sc, function($sc, $this, $args, $r) {
    var t1;
    t1 = $.cm($.gm($r[1], "tulisan"), "gotoAndStop", [$.add($.gm($r[2], "bahasa"), 1)]);
    $.sm($.gm($r[1], "cancel_btn"), "onRelease", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    $.sm($.gm($r[1], "_parent"), "_visible", false);
  }));
  }));
};
// sprite3100#f9.0
S[225] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite3104#f1.0
S[226] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite3107#f1.0
S[227] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite3150#f339.0
S[228] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  $.stop($tgt);
  t1 = $.cm($.get($sc, "_root"), "play", []);
};
// sprite3163#f1.0
S[229] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  t1 = $.cm($.get($sc, "this"), "gotoAndStop", [$.add($.gm($.get($sc, "_root"), "bahasa"), 1)]);
};
// sprite3193#f1.0
S[230] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite3230#f1.0
S[231] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.set($sc, "cerita", [0, ["One day on the American shore,\nan unknown ship came out of nowhere...", "Un jour, sur la côte américaine, un navire inconnu arrive de nulle part...", "Suatu hari di pantai Benua Amerika,\nSebuah kapal megah datang dengan tiba-tiba..."], ["Seeds of evil radiating prominently from within...", "Des ondes maléfiques s’en dégagent... ", "Aura kejahatan memancar dari dalam kapal itu..."], ["A curse had fallen upon the Indians...\nand escape shall be the only salvation..", "Le mauvais sort vient de s’abattre sur les Indiens...\net le salut réside dans la fuite... ", "Firasat buruk untuk para penduduk Indian...\nSatu-satunya jalan harus melarikan diri..."], ["Vicious and ruthless, these guests are consumed by greed... \nThey slaughtered the villagers, burned their villages to ashes..", "Brutaux et impitoyables, ces nouveaux arrivants sont dévorés par l’appât du gain... Ils réduisent les villages en cendres et massacrent leurs habitants…", "Tamu tak diundang yang sangat kejam dan serakah...\nMereka membunuh para penduduk dan membumihanguskan Desa-desa."], ["Their purpose is to overtake the continent..\nThe prisoners, fearing for their life, eventually joined these invaders...\nThey become traitors, tainted by the thirst of power and gold...", "Leur objectif est de conquérir le continent...\nDe peur d’être exécutés, leurs prisonniers finissent par se joindre aux envahisseurs…\nIls deviennent des traîtres, corrompus par leur soif de pouvoir et de richesse.", "Tujuan mereka adalah menguasai Benua Amerika...\nPara tawanan yang tidak ingin dibunuh akhirnya bergabung bersama mereka...\nmenjadi pengkhianat yang haus akan kekuasaan dan kekayaan..."], ["Only one village remains...\nThe last hope for the Indians...", "Seul un village résiste encore…\nLe dernier espoir pour le peuple indien…", "Tinggal 1 Desa yang tersisa....\nHarapan yang tersisa bagi bangsa Indian..."], ["These words eventually reach Wambleeska,\nElder Chief of the Last Village", "Le récit de ces événements est parvenu aux oreilles de Wambleeska, le doyen et le chef du Dernier Village.", "Salah satu penduduk yang selamat memberi informasi tersebut kepada Wambleeska,\nsang kepala suku The Last Village."], ["Thus, \nThe Last Village prepares their army to face\nthe greatest battle of their time...", "Le Dernier Village prépare donc son armée pour le combat le plus important de son histoire...", "Maka bersiaplah The Last Village untuk mengatur strategy menghadapi perang terbesar sepanjang sejarah mereka..."]]);
  $.set($sc, "cerita2", [0, ["They spared no survivors...", "Ils n’épargnent personne...", "Tak ada yang selamat..."]]);
};
// sprite3230#f15.0
S[232] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.sm($.get($sc, "tulisan"), "text", $.gm($.gm($.get($sc, "cerita"), 1), $.gm($.get($sc, "_root"), "bahasa")));
};
// sprite3230#f137.0
S[233] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.sm($.get($sc, "tulisan"), "text", $.gm($.gm($.get($sc, "cerita"), 2), $.gm($.get($sc, "_root"), "bahasa")));
};
// sprite3230#f245.0
S[234] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.sm($.get($sc, "tulisan"), "text", $.gm($.gm($.get($sc, "cerita"), 3), $.gm($.get($sc, "_root"), "bahasa")));
};
// sprite3230#f382.0
S[235] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.sm($.get($sc, "tulisan"), "text", $.gm($.gm($.get($sc, "cerita"), 4), $.gm($.get($sc, "_root"), "bahasa")));
};
// sprite3230#f452.0
S[236] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.sm($.get($sc, "tulisan"), "text", $.gm($.gm($.get($sc, "cerita"), 4), $.gm($.get($sc, "_root"), "bahasa")));
  $.sm($.get($sc, "tulisan2"), "text", $.gm($.gm($.get($sc, "cerita2"), 1), $.gm($.get($sc, "_root"), "bahasa")));
};
// sprite3230#f543.0
S[237] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.sm($.get($sc, "tulisan"), "text", $.gm($.gm($.get($sc, "cerita"), 5), $.gm($.get($sc, "_root"), "bahasa")));
};
// sprite3230#f754.0
S[238] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.sm($.get($sc, "tulisan"), "text", $.gm($.gm($.get($sc, "cerita"), 6), $.gm($.get($sc, "_root"), "bahasa")));
};
// sprite3230#f934.0
S[239] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.sm($.get($sc, "tulisan"), "text", $.gm($.gm($.get($sc, "cerita"), 7), $.gm($.get($sc, "_root"), "bahasa")));
};
// sprite3230#f1102.0
S[240] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.sm($.get($sc, "tulisan"), "text", $.gm($.gm($.get($sc, "cerita"), 8), $.gm($.get($sc, "_root"), "bahasa")));
};
// sprite3230#f1329.0
S[241] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  t1 = $.cm($.get($sc, "_root"), "play", []);
};
// sprite3360#f1.0
S[242] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite3407#f1.0
S[243] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite3443#f1.0
S[244] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite3474#f1.0
S[245] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite3492#f1.0
S[246] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var s0, en1, t1, t2, t3;
  var $b = 0;
  for (;;) switch ($b) {
  case 0:
    $.stop($tgt);
    $.set($sc, "daftarItem", ["pohon1", "pohon2", "kaktus1", "kaktus2"]);
    en1 = $.enumerate($.get($sc, "daftarItem"));
    s0 = en1;
    $b = 1; continue;
  case 1:
    $r[0] = s0.shift();
    if ($r[0] === null) { $b = 6; continue; }
    $b = 2; continue;
  case 2:
    $.def($sc, "daf", $r[0]);
    $.sm($.gm($.get($sc, "this"), $.gm($.get($sc, "daftarItem"), $.get($sc, "daf"))), "_visible", 0);
    $.sm($.gm($.get($sc, "this"), $.gm($.get($sc, "daftarItem"), $.get($sc, "daf"))), "daf", $.get($sc, "daf"));
    t1 = $.rand(2);
    if (!$.eq(t1, 1)) { $b = 4; continue; }
    $b = 3; continue;
  case 3:
    $.sm($.gm($.get($sc, "this"), $.gm($.get($sc, "daftarItem"), $.get($sc, "daf"))), "_visible", 1);
    t2 = $.gm($.get($sc, "this"), $.gm($.get($sc, "daftarItem"), $.get($sc, "daf")));
    t3 = $.rand((200 + ($.n($.add(1, $.get($sc, "daf"))) * 100)));
    $.sm(t2, "_x", t3);
    $b = 4; continue;
  case 4:
    $b = 1; continue;
  case 6: return;
  }
};
// sprite3536#f1.0
S[247] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite3543#f1.0
S[248] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite3570#f1.0
S[249] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// sprite3590#f1.0
S[250] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.set($sc, "cerita", [0, ["Our struggle is finally a success!\nPeople are celebrating the victory...", "Notre combat se termine par un succès total ! Le peuple célèbre la victoire…", "Perjuangan kita akhirnya membuahkan hasil!\nRakyat pun berpesta pora..."], ["A few moment later,\nWambeeska's spies give reports to their master.", "Quelques instants plus tard, les espions font leur rapport à Wambeeska.", "Beberapa waktu kemudian,\nmata2 Wambleeska datang melapor kepada tuannya,"], ["They report that the enemy has brought a large, unpredicted number of troops.\nFar more than number of current residents remaining", "Alors qu’on ne s’y attendait plus, ils révèlent que l’ennemi approche avec un grand nombre de troupes. Son armée est beaucoup plus importante que la nôtre. ", "Dia melaporkan bahwa musuh telah menghimpun pasukan  dengan jumlah tak terkira.\nJauh lebih banyak daripada jumlah  penduduknya saat ini yang tersisa..."], ["A moment where the soul of a leader is tested...\nArmed with a magic potion that has helped the soldiers", "C’est l’instant de vérité, celui où l’âme du chef est mise à l’épreuve... ", "Suatu detik2 dimana jiwa seorang pemimpin diuji...\nDengan berbekal ramuan ajaib yang selama ini membantu para prajurit"], ["there is no other option\nbut to fight all out until the last breath...", "Il n’y a pas d’autre option que de combattre jusqu’au dernier souffle, avec l’aide de la potion magique qui a déjà servi nos guerriers…", "Tidak ada pilihan lain selain kembali bertarung habis2an dengan sekuat tenaga untuk terakhir kali..."]]);
};
// sprite3590#f37.0
S[251] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.sm($.get($sc, "tulisan"), "text", $.gm($.gm($.get($sc, "cerita"), 1), $.gm($.get($sc, "_root"), "bahasa")));
};
// sprite3590#f169.0
S[252] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.sm($.get($sc, "tulisan"), "text", $.gm($.gm($.get($sc, "cerita"), 2), $.gm($.get($sc, "_root"), "bahasa")));
};
// sprite3590#f314.0
S[253] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.sm($.get($sc, "tulisan"), "text", $.gm($.gm($.get($sc, "cerita"), 3), $.gm($.get($sc, "_root"), "bahasa")));
};
// sprite3590#f471.0
S[254] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.sm($.get($sc, "tulisan"), "text", $.gm($.gm($.get($sc, "cerita"), 4), $.gm($.get($sc, "_root"), "bahasa")));
};
// sprite3590#f653.0
S[255] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.sm($.get($sc, "tulisan"), "text", $.gm($.gm($.get($sc, "cerita"), 5), $.gm($.get($sc, "_root"), "bahasa")));
};
// sprite3590#f980.0
S[256] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
  $.def($sc, "loadingBattle", 0);
  $.set($sc, "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":106}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.set($sc, "loadingBattle", ($.n($.get($sc, "loadingBattle")) + 1));
      if (!!$.lt($.get($sc, "loadingBattle"), 200)) { $b = 3; continue; }
      $b = 1; continue;
    case 1:
      t1 = $.del($sc, "onEnterFrame");
      t2 = $.cm($r[1], "gotoAndStop", ["menu"]);
      $b = 3; continue;
    case 3: return;
    }
  }));
};
// main#f1.0
S[257] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1, t2, t3, t4, t5, t6;
  $.stop($tgt);
  $.sm($.get($sc, "Stage"), "showMenu", false);
  $.getURL2("FSCommand:trapallkeys", true, 0);
  $.set($sc, "preload", true);
  $.sm($.get($sc, "this"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":106}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!$.eq($.get($sc, "preload"), true)) { $b = 5; continue; }
      $b = 1; continue;
    case 1:
      if (!$.eq($.get($sc, "persen"), 100)) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      t4 = $.cm($r[1], "play", []);
      $.set($sc, "preload", false);
      $b = 3; continue;
    case 3:
      t1 = $.cf($sc, "getBytesLoaded", []);
      $.set($sc, "now", t1);
      t2 = $.cf($sc, "getBytesTotal", []);
      $.set($sc, "tot", t2);
      t3 = $.cm($.get($sc, "Math"), "round", [(($.n($.get($sc, "now")) / $.n($.get($sc, "tot"))) * 100)]);
      $.set($sc, "persen", t3);
      $.sm($.get($sc, "load_teks"), "text", $.add($.get($sc, "persen"), "%"));
      $b = 5; continue;
    case 5: return;
    }
  }));
  $.def2($sc, "playedAPI");
  t1 = $.cf($sc, "getNextHighestDepth", []);
  t2 = $.cf($sc, "createEmptyMovieClip", ["playedAPI", t1]);
  $.set($sc, "playedAPI", t2);
  $.def($sc, "apiPath", "http://www.playedonline.com/playedAPI_as2.swf");
  t3 = $.nw($sc, "MovieClipLoader", []);
  $.def($sc, "apiLoader", t3);
  t4 = $.nw($sc, "Object", []);
  $.def($sc, "apiLoadListener", t4);
  t5 = $.cm($.get($sc, "apiLoader"), "addListener", [$.get($sc, "apiLoadListener")]);
  $.sm($.get($sc, "apiLoadListener"), "onLoadInit", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    var t1;
    t1 = $.cm($.gm($.get($sc, "playedAPI"), "api"), "init", [597242, $.get($sc, "sessionID"), "326f5a3d3e277d635224376d753d5348"]);
  }));
  $.sm($.get($sc, "apiLoadListener"), "onLoadError", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    $.trace("Playedonline API failed to load");
  }));
  t6 = $.cm($.get($sc, "apiLoader"), "loadClip", [$.get($sc, "apiPath"), $.get($sc, "playedAPI")]);
};
// main#f2.0
S[258] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1, t2, t3, t4, t5, t6, t7, t8;
  var $b = 0;
  for (;;) switch ($b) {
  case 0:
    $.stop($tgt);
    t1 = $.cm($.gp($tgt, "_url"), "indexOf", ["://"]);
    $.set($sc, "_urlStart", $.add(t1, 3));
    t2 = $.cm($.gp($tgt, "_url"), "indexOf", ["/", $.get($sc, "_urlStart")]);
    $.set($sc, "_urlEnd", t2);
    t3 = $.cm($.gp($tgt, "_url"), "substring", [$.get($sc, "_urlStart"), $.get($sc, "_urlEnd")]);
    $.set($sc, "domain", t3);
    t4 = $.cm($.get($sc, "domain"), "lastIndexOf", ["."]);
    $.set($sc, "LastDot", ($.n(t4) - 1));
    t5 = $.cm($.get($sc, "domain"), "lastIndexOf", [".", $.get($sc, "LastDot")]);
    $.set($sc, "domEnd", $.add(t5, 1));
    t6 = $.cm($.get($sc, "domain"), "substring", [$.get($sc, "domEnd"), $.gm($.get($sc, "domain"), "length")]);
    $.set($sc, "domain", t6);
    if (!$.eq($.get($sc, "domain"), "ludobox.com")) { $b = 2; continue; }
    $b = 1; continue;
  case 1:
    t8 = $.cm($.get($sc, "_root"), "play", []);
    $b = 4; continue;
  case 2:
    t7 = $.cm($.get($sc, "_root"), "play", []);
    $b = 4; continue;
  case 4: return;
  }
};
// main#f3.0
S[259] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stopAllSounds();
  $.gotoFrame($tgt, "ludo");
};
// main#f4.0
S[260] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
  $.sm($.get($sc, "inv_btn"), "onRelease", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    $.getURL2("http://www.ludobox.com", $.get($sc, "_blank"), 0);
  }));
};
// main#f5.0
S[261] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var $b = 0;
  for (;;) switch ($b) {
  case 0:
    $.stop($tgt);
    $.def($sc, "bahasa", 0);
    $.def($sc, "i", 0);
    $b = 1; continue;
  case 1:
    if (!!$.gt($.get($sc, "i"), 2)) { $b = 4; continue; }
    $b = 2; continue;
  case 2:
    $.sm($.gm($.get($sc, "_root"), $.add("bah", $.get($sc, "i"))), "i", $.get($sc, "i"));
    $.sm($.gm($.get($sc, "_root"), $.add("bah", $.get($sc, "i"))), "onRelease", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var $tgt = $.clipOf($sc);
    $.set($sc, "bahasa", $.gm($r[1], "i"));
    $.gotoFrame($tgt, 7);
  }));
    $.set($sc, "i", ($.n($.get($sc, "i")) + 1));
    $b = 1; continue;
  case 4: return;
  }
};
// main#f6.0
S[262] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  $.stop($tgt);
};
// main#f7.0
S[263] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21, t22, t23, t24, t25, t26, t27, t28, t29, t30, t31;
  var $b = 0;
  for (;;) switch ($b) {
  case 0:
    $.def($sc, "showCustomCursor", $.fn({"n":"showCustomCursor","p":[],"r":3,"f":105}, $sc, function($sc, $this, $args, $r) {
    var $tgt = $.clipOf($sc);
    var t1, t2;
    t1 = $.cm($.get($sc, "Mouse"), "hide", []);
    t2 = $.cm($r[2], "attachMovie", ["cursor_mc", "cursor_mc", 999991]);
    $.sm($.get($sc, "cursor_mc"), "_x", $.gp($tgt, "_xmouse"));
    $.sm($.get($sc, "cursor_mc"), "_y", $.gp($tgt, "_ymouse"));
    $.sm($.get($sc, "cursor_mc"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var $tgt = $.clipOf($sc);
    $.sm($r[1], "_x", $.gp($tgt, "_xmouse"));
    $.sm($r[1], "_y", $.gp($tgt, "_ymouse"));
  }));
    $.sm($.get($sc, "cursor_mc"), "onMouseDown", $.fn({"n":"","p":[],"r":3,"f":105}, $sc, function($sc, $this, $args, $r) {
    var $tgt = $.clipOf($sc);
    var t1, t2;
    t1 = $.cm($r[1], "gotoAndStop", [2]);
    t2 = $.cm($r[2], "attachMovie", ["mouse_traill", "trail", 999990]);
    $.sm($.get($sc, "trail"), "_x", $.gp($tgt, "_xmouse"));
    $.sm($.get($sc, "trail"), "_y", $.gp($tgt, "_ymouse"));
  }));
    $.sm($.get($sc, "cursor_mc"), "onMouseUp", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1;
    t1 = $.cm($r[1], "gotoAndStop", [1]);
  }));
  }));
    $.def($sc, "showNormalCursor", $.fn({"n":"showNormalCursor","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    t1 = $.cm($.get($sc, "cursor_mc"), "removeMovieClip", []);
    t2 = $.cm($.get($sc, "Mouse"), "show", []);
  }));
    $.def($sc, "efekFade", $.fn({"n":"efekFade","p":[[1,"who"]],"r":2,"f":42}, $sc, function($sc, $this, $args, $r) {
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.sm($r[1], "_alpha", $.add($.gm($r[1], "_alpha"), 20));
      if (!$.gt($.gm($r[1], "_alpha"), 100)) { $b = 3; continue; }
      $b = 1; continue;
    case 1:
      $.sm($r[1], "_alpha", 100);
      $b = 3; continue;
    case 3: return;
    }
  }));
    $.def($sc, "newAchievement", $.fn({"n":"newAchievement","p":[[3,"number"]],"r":4,"f":105}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!$.eq($.gm($.gm($r[2], "achievementList"), $r[3]), 0)) { $b = 3; continue; }
      $b = 1; continue;
    case 1:
      $.sm($.gm($r[2], "achievementList"), $r[3], 1);
      t1 = $.cm($r[2], "attachMovie", ["win_new", "achiv", 9989]);
      $.sm($.get($sc, "achiv"), "count", 0);
      t2 = $.cm($.get($sc, "achiv"), "gotoAndStop", [$.add($.gm($r[2], "bahasa"), 1)]);
      $.sm($.get($sc, "achiv"), "_alpha", 0);
      $.sm($.get($sc, "achiv"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.sm($r[1], "count", ($.n($.gm($r[1], "count")) + 1));
      if (!!$.lt($.gm($r[1], "count"), 200)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t2 = $.cm($r[1], "removeMovieClip", []);
      $b = 2; continue;
    case 2:
      t1 = $.cf($sc, "efekFade", [$r[1]]);
      $b = 3; continue;
    case 3: return;
    }
  }));
      $b = 3; continue;
    case 3: return;
    }
  }));
    $.def($sc, "newMedals", $.fn({"n":"newMedals","p":[[3,"number"]],"r":4,"f":105}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!$.eq($.gm($.gm($r[2], "medalsList"), $r[3]), 0)) { $b = 3; continue; }
      $b = 1; continue;
    case 1:
      $.sm($.gm($r[2], "medalsList"), $r[3], 1);
      t1 = $.cm($r[2], "attachMovie", ["win_new2", "achiv", 9989]);
      $.sm($.get($sc, "achiv"), "count", 0);
      t2 = $.cm($.get($sc, "achiv"), "gotoAndStop", [$.add($.gm($r[2], "bahasa"), 1)]);
      $.sm($.get($sc, "achiv"), "_alpha", 0);
      $.sm($.get($sc, "achiv"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.sm($r[1], "count", ($.n($.gm($r[1], "count")) + 1));
      if (!!$.lt($.gm($r[1], "count"), 200)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t2 = $.cm($r[1], "removeMovieClip", []);
      $b = 2; continue;
    case 2:
      t1 = $.cf($sc, "efekFade", [$r[1]]);
      $b = 3; continue;
    case 3: return;
    }
  }));
      $b = 3; continue;
    case 3: return;
    }
  }));
    $.def($sc, "enemyMoving", $.fn({"n":"enemyMoving","p":[],"r":3,"f":105}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      t1 = $r[1];
      t2 = $.cm($.gm($.gm($.gm($r[2], $.add("jalurMusuh", $.gm($r[1], "pos"))), $.gm($r[1], "stepLeft")), $.gm($r[1], "nextStep")), "substr", [3, 2]);
      $.sm(t1, "coordinate", t2);
      $.sm($r[1], "_x", $.gm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.gm($.gm($r[2], $.add("jalurMusuh", $.gm($r[1], "pos"))), $.gm($r[1], "stepLeft")), $.gm($r[1], "nextStep"))), "_x"));
      $.sm($r[1], "_y", $.gm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.gm($.gm($r[2], $.add("jalurMusuh", $.gm($r[1], "pos"))), $.gm($r[1], "stepLeft")), $.gm($r[1], "nextStep"))), "_y"));
      if (!(($.n($.gm($r[1], "stepLeft")) - 3) > 0)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      $.sm($.gm($r[1], "dayLeft"), "text", ($.n($.gm($r[1], "stepLeft")) - 3));
      $b = 3; continue;
    case 2:
      $.sm($.gm($r[1], "dayLeft"), "text", "A");
      $b = 3; continue;
    case 3:
      if (!$.eq($.gm($r[1], "coordinate"), undefined)) { $b = 6; continue; }
      $b = 4; continue;
    case 4:
      t3 = $.cm($r[1], "removeMovieClip", []);
      $b = 6; continue;
    case 6: return;
    }
  }));
    $.def($sc, "saveData", $.fn({"n":"saveData","p":[],"r":11,"f":106}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21, t22, t23, t24, t25, t26, t27, t28, t29;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      t1 = $.cm($.get($sc, "SharedObject"), "getLocal", ["TLV", "/"]);
      $.set($sc, "Cookies", t1);
      $.sm($.gm($.get($sc, "Cookies"), "data"), "volBGM", $.get($sc, "volBGM"));
      $.sm($.gm($.get($sc, "Cookies"), "data"), "volFX", $.get($sc, "volFX"));
      $r[2] = 1;
      $b = 1; continue;
    case 1:
      if (!!$.gt($r[2], 5)) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      $.sm($.gm($.get($sc, "Cookies"), "data"), $.add("weaponList", $r[2]), $.str($.gm($.get($sc, "weaponList"), $r[2])));
      $.sm($.gm($.get($sc, "Cookies"), "data"), $.add("weaponProduce", $r[2]), $.str($.gm($.get($sc, "weaponProduce"), $r[2])));
      $.sm($.gm($.get($sc, "Cookies"), "data"), $.add("armyList", $r[2]), $.str($.gm($.get($sc, "armyList"), $r[2])));
      $.sm($.gm($.get($sc, "Cookies"), "data"), $.add("armyProduce", $r[2]), $.str($.gm($.get($sc, "armyProduce"), $r[2])));
      t2 = ($.n($r[2]) + 1);
      $r[2] = t2;
      $b = 1; continue;
    case 3:
      $.sm($.gm($.get($sc, "Cookies"), "data"), "days", $.get($sc, "days"));
      $r[5] = 1;
      $b = 4; continue;
    case 4:
      if (!!$.gt($r[5], 4)) { $b = 6; continue; }
      $b = 5; continue;
    case 5:
      $.sm($.gm($.get($sc, "Cookies"), "data"), $.add("resource", $r[5]), $.str($.gm($.get($sc, "resourceList"), $r[5])));
      $.sm($.gm($.get($sc, "Cookies"), "data"), $.add("resourceProduce", $r[5]), $.str($.gm($.get($sc, "resourceProduce"), $r[5])));
      t3 = ($.n($r[5]) + 1);
      $r[5] = t3;
      $b = 4; continue;
    case 6:
      $.sm($.gm($.get($sc, "Cookies"), "data"), "dataPosisi1", "");
      $.sm($.gm($.get($sc, "Cookies"), "data"), "dataPosisi2", "");
      $.sm($.gm($.get($sc, "Cookies"), "data"), "dataPosisi3", "");
      $r[3] = 1;
      $b = 7; continue;
    case 7:
      if (!!$.gt($r[3], 25)) { $b = 15; continue; }
      $b = 8; continue;
    case 8:
      $.sm($.gm($.get($sc, "Cookies"), "data"), "dataPosisi1", $.add($.gm($.gm($.get($sc, "Cookies"), "data"), "dataPosisi1"), $.str($.gm($.gm($.gm($r[1], $.add("objectMap", $r[3])), 0), 0))));
      if (!!$.eq($.gm($.gm($.gm($r[1], $.add("objectMap", $r[3])), 1), 0), undefined)) { $b = 10; continue; }
      $b = 9; continue;
    case 9:
      $.sm($.gm($.get($sc, "Cookies"), "data"), "dataPosisi2", $.add($.gm($.gm($.get($sc, "Cookies"), "data"), "dataPosisi2"), $.str($.gm($.gm($.gm($r[1], $.add("objectMap", $r[3])), 1), 0))));
      $b = 11; continue;
    case 10:
      $.sm($.gm($.get($sc, "Cookies"), "data"), "dataPosisi2", $.add($.gm($.gm($.get($sc, "Cookies"), "data"), "dataPosisi2"), $.str(0)));
      $b = 11; continue;
    case 11:
      if (!!$.eq($.gm($.gm($.gm($r[1], $.add("objectMap", $r[3])), 2), 0), undefined)) { $b = 13; continue; }
      $b = 12; continue;
    case 12:
      $.sm($.gm($.get($sc, "Cookies"), "data"), "dataPosisi3", $.add($.gm($.gm($.get($sc, "Cookies"), "data"), "dataPosisi3"), $.str($.gm($.gm($.gm($r[1], $.add("objectMap", $r[3])), 2), 0))));
      $b = 14; continue;
    case 13:
      $.sm($.gm($.get($sc, "Cookies"), "data"), "dataPosisi3", $.add($.gm($.gm($.get($sc, "Cookies"), "data"), "dataPosisi3"), $.str(0)));
      $b = 14; continue;
    case 14:
      t6 = ($.n($r[3]) + 1);
      $r[3] = t6;
      $b = 7; continue;
    case 15:
      $.sm($.gm($.get($sc, "Cookies"), "data"), "comLoc", "");
      $.sm($.gm($.get($sc, "Cookies"), "data"), "comLocBaru", "");
      $r[7] = 1;
      $b = 16; continue;
    case 16:
      if (!!$.gt($r[7], 6)) { $b = 18; continue; }
      $b = 17; continue;
    case 17:
      $.sm($.gm($.get($sc, "Cookies"), "data"), "comLoc", $.add($.gm($.gm($.get($sc, "Cookies"), "data"), "comLoc"), $.str($.gm($.get($sc, "comLoc"), $r[7]))));
      $.sm($.gm($.get($sc, "Cookies"), "data"), "comLocBaru", $.add($.gm($.gm($.get($sc, "Cookies"), "data"), "comLocBaru"), $.str($.gm($.get($sc, "comLocBaru"), $r[7]))));
      t4 = ($.n($r[7]) + 1);
      $r[7] = t4;
      $b = 16; continue;
    case 18:
      $.sm($.gm($.get($sc, "Cookies"), "data"), "townEcoStat", "");
      $.sm($.gm($.get($sc, "Cookies"), "data"), "townMilStat", "");
      $.sm($.gm($.get($sc, "Cookies"), "data"), "townSpeStat", "");
      $r[6] = 1;
      $b = 19; continue;
    case 19:
      if (!!$.gt($r[6], 4)) { $b = 21; continue; }
      $b = 20; continue;
    case 20:
      $.sm($.gm($.get($sc, "Cookies"), "data"), "townEcoStat", $.add($.gm($.gm($.get($sc, "Cookies"), "data"), "townEcoStat"), $.str($.gm($.get($sc, "townEcoStat"), $r[6]))));
      $.sm($.gm($.get($sc, "Cookies"), "data"), "townMilStat", $.add($.gm($.gm($.get($sc, "Cookies"), "data"), "townMilStat"), $.str($.gm($.get($sc, "townMilStat"), $r[6]))));
      $.sm($.gm($.get($sc, "Cookies"), "data"), "townSpeStat", $.add($.gm($.gm($.get($sc, "Cookies"), "data"), "townSpeStat"), $.str($.gm($.get($sc, "townSpeStat"), $r[6]))));
      t5 = ($.n($r[6]) + 1);
      $r[6] = t5;
      $b = 19; continue;
    case 21:
      $.sm($.gm($.get($sc, "Cookies"), "data"), "tempStat", "");
      $r[9] = 1;
      $b = 22; continue;
    case 22:
      if (!!$.gt($r[9], 5)) { $b = 24; continue; }
      $b = 23; continue;
    case 23:
      $.sm($.gm($.get($sc, "Cookies"), "data"), "tempStat", $.add($.gm($.gm($.get($sc, "Cookies"), "data"), "tempStat"), $.str($.gm($.get($sc, "tempStat"), $r[9]))));
      t7 = ($.n($r[9]) + 1);
      $r[9] = t7;
      $b = 22; continue;
    case 24:
      $.sm($.gm($.get($sc, "Cookies"), "data"), "trapEnable", "");
      $r[8] = 1;
      $b = 25; continue;
    case 25:
      if (!$.lt($r[8], $.gm($.get($sc, "trapEnable"), "length"))) { $b = 27; continue; }
      $b = 26; continue;
    case 26:
      $.sm($.gm($.get($sc, "Cookies"), "data"), "trapEnable", $.add($.gm($.gm($.get($sc, "Cookies"), "data"), "trapEnable"), $.str($.gm($.gm($.get($sc, "trapEnable"), $r[8]), 0))));
      t18 = ($.n($r[8]) + 1);
      $r[8] = t18;
      $b = 25; continue;
    case 27:
      $.sm($.gm($.get($sc, "Cookies"), "data"), "posSerang", $.get($sc, "posSerang"));
      $.sm($.gm($.get($sc, "Cookies"), "data"), "enemyID", $.get($sc, "enemyID"));
      $.sm($.gm($.get($sc, "Cookies"), "data"), "daftarMusuhSerang", $.get($sc, "daftarMusuhSerang"));
      t8 = $.gm($.get($sc, "Cookies"), "data");
      t9 = $.nw($sc, "Array", []);
      $.sm(t8, "ID", t9);
      t10 = $.gm($.get($sc, "Cookies"), "data");
      t11 = $.nw($sc, "Array", []);
      $.sm(t10, "posArrayEnemy", t11);
      t12 = $.gm($.get($sc, "Cookies"), "data");
      t13 = $.nw($sc, "Array", []);
      $.sm(t12, "stepLeftEnemy", t13);
      t14 = $.gm($.get($sc, "Cookies"), "data");
      t15 = $.nw($sc, "Array", []);
      $.sm(t14, "pos", t15);
      t16 = $.gm($.get($sc, "Cookies"), "data");
      t17 = $.nw($sc, "Array", []);
      $.sm(t16, "trapped", t17);
      $r[4] = 0;
      $b = 28; continue;
    case 28:
      if (!$.lt($r[4], $.gm($.get($sc, "daftarMusuhSerang"), "length"))) { $b = 30; continue; }
      $b = 29; continue;
    case 29:
      t21 = $.cm($.gm($.gm($.get($sc, "Cookies"), "data"), "ID"), "push", [$.gm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "daftarMusuhSerang"), $r[4])), "ID")]);
      t22 = $.cm($.gm($.gm($.get($sc, "Cookies"), "data"), "posArrayEnemy"), "push", [$.gm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "daftarMusuhSerang"), $r[4])), "posArray")]);
      t23 = $.cm($.gm($.gm($.get($sc, "Cookies"), "data"), "stepLeftEnemy"), "push", [$.gm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "daftarMusuhSerang"), $r[4])), "stepLeft")]);
      t24 = $.cm($.gm($.gm($.get($sc, "Cookies"), "data"), "pos"), "push", [$.gm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "daftarMusuhSerang"), $r[4])), "pos")]);
      t25 = $.cm($.gm($.gm($.get($sc, "Cookies"), "data"), "trapped"), "push", [$.gm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "daftarMusuhSerang"), $r[4])), "trapped")]);
      t26 = ($.n($r[4]) + 1);
      $r[4] = t26;
      $b = 28; continue;
    case 30:
      $.sm($.gm($.get($sc, "Cookies"), "data"), "statisticList", $.get($sc, "statisticList"));
      $.sm($.gm($.get($sc, "Cookies"), "data"), "achievementList", $.get($sc, "achievementList"));
      $.sm($.gm($.get($sc, "Cookies"), "data"), "medalsList", $.get($sc, "medalsList"));
      $.sm($.gm($.get($sc, "Cookies"), "data"), "flowerID", $.get($sc, "flowerID"));
      $.sm($.gm($.get($sc, "Cookies"), "data"), "flowerList", $.get($sc, "flowerList"));
      $.sm($.gm($.get($sc, "Cookies"), "data"), "bunga", $.get($sc, "bunga"));
      t19 = $.gm($.get($sc, "Cookies"), "data");
      t20 = $.nw($sc, "Array", []);
      $.sm(t19, "bungaPos", t20);
      $r[10] = 0;
      $b = 31; continue;
    case 31:
      if (!$.lt($r[10], $.gm($.get($sc, "flowerList"), "length"))) { $b = 33; continue; }
      $b = 32; continue;
    case 32:
      t28 = $.cm($.gm($.gm($.get($sc, "Cookies"), "data"), "bungaPos"), "push", [$.gm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "flowerList"), $r[10])), "pos")]);
      t29 = ($.n($r[10]) + 1);
      $r[10] = t29;
      $b = 31; continue;
    case 33:
      t27 = $.cm($.get($sc, "Cookies"), "flush", [10]);
      $b = 34; continue;
    case 34: return;
    }
  }));
    $.def($sc, "loadData", $.fn({"n":"loadData","p":[],"r":11,"f":106}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21, t22, t23, t24, t25, t26, t27, t28, t29, t30, t31, t32, t33, t34, t35, t36, t37, t38, t39, t40, t41;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      t1 = $.cm($.get($sc, "SharedObject"), "getLocal", ["TLV", "/"]);
      $.set($sc, "Cookies", t1);
      if (!!$.eq($.gm($.gm($.get($sc, "Cookies"), "data"), "volBGM"), undefined)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      $.set($sc, "volBGM", $.gm($.gm($.get($sc, "Cookies"), "data"), "volBGM"));
      $.set($sc, "volFX", $.gm($.gm($.get($sc, "Cookies"), "data"), "volFX"));
      $b = 2; continue;
    case 2:
      $.set($sc, "days", $.gm($.gm($.get($sc, "Cookies"), "data"), "days"));
      $r[5] = 1;
      $b = 3; continue;
    case 3:
      if (!!$.gt($r[5], 5)) { $b = 5; continue; }
      $b = 4; continue;
    case 4:
      $.sm($.get($sc, "weaponList"), $r[5], $.n($.gm($.gm($.get($sc, "Cookies"), "data"), $.add("weaponList", $r[5]))));
      $.sm($.get($sc, "weaponProduce"), $r[5], $.n($.gm($.gm($.get($sc, "Cookies"), "data"), $.add("weaponProduce", $r[5]))));
      $.sm($.get($sc, "armyList"), $r[5], $.n($.gm($.gm($.get($sc, "Cookies"), "data"), $.add("armyList", $r[5]))));
      $.sm($.get($sc, "armyProduce"), $r[5], $.n($.gm($.gm($.get($sc, "Cookies"), "data"), $.add("armyProduce", $r[5]))));
      t2 = ($.n($r[5]) + 1);
      $r[5] = t2;
      $b = 3; continue;
    case 5:
      $r[8] = 1;
      $b = 6; continue;
    case 6:
      if (!!$.gt($r[8], 4)) { $b = 8; continue; }
      $b = 7; continue;
    case 7:
      $.sm($.get($sc, "resourceList"), $r[8], $.n($.gm($.gm($.get($sc, "Cookies"), "data"), $.add("resource", $r[8]))));
      $.sm($.get($sc, "resourceProduce"), $r[8], $.n($.gm($.gm($.get($sc, "Cookies"), "data"), $.add("resourceProduce", $r[8]))));
      t3 = ($.n($r[8]) + 1);
      $r[8] = t3;
      $b = 6; continue;
    case 8:
      $r[4] = 1;
      $b = 9; continue;
    case 9:
      if (!!$.gt($r[4], 25)) { $b = 15; continue; }
      $b = 10; continue;
    case 10:
      t4 = $.gm($.gm($r[1], $.add("objectMap", $r[4])), 0);
      t5 = $.cm($.gm($.gm($.get($sc, "Cookies"), "data"), "dataPosisi1"), "substr", [($.n($r[4]) - 1), 1]);
      $.sm(t4, 0, $.n(t5));
      if (!!$.eq($.gm($.gm($.gm($r[1], $.add("objectMap", $r[4])), 1), 0), undefined)) { $b = 12; continue; }
      $b = 11; continue;
    case 11:
      t6 = $.gm($.gm($r[1], $.add("objectMap", $r[4])), 1);
      t7 = $.cm($.gm($.gm($.get($sc, "Cookies"), "data"), "dataPosisi2"), "substr", [($.n($r[4]) - 1), 1]);
      $.sm(t6, 0, $.n(t7));
      $b = 12; continue;
    case 12:
      if (!!$.eq($.gm($.gm($.gm($r[1], $.add("objectMap", $r[4])), 2), 0), undefined)) { $b = 14; continue; }
      $b = 13; continue;
    case 13:
      t16 = $.gm($.gm($r[1], $.add("objectMap", $r[4])), 2);
      t17 = $.cm($.gm($.gm($.get($sc, "Cookies"), "data"), "dataPosisi3"), "substr", [($.n($r[4]) - 1), 1]);
      $.sm(t16, 0, $.n(t17));
      $b = 14; continue;
    case 14:
      t15 = ($.n($r[4]) + 1);
      $r[4] = t15;
      $b = 9; continue;
    case 15:
      $r[7] = 1;
      $b = 16; continue;
    case 16:
      if (!!$.gt($r[7], 6)) { $b = 18; continue; }
      $b = 17; continue;
    case 17:
      t8 = $.get($sc, "comLoc");
      t9 = $r[7];
      t10 = $.cm($.gm($.gm($.get($sc, "Cookies"), "data"), "comLoc"), "substr", [(($.n($r[7]) - 1) * 2), 2]);
      $.sm(t8, t9, $.n(t10));
      t11 = $.get($sc, "comLocBaru");
      t12 = $r[7];
      t13 = $.cm($.gm($.gm($.get($sc, "Cookies"), "data"), "comLocBaru"), "substr", [(($.n($r[7]) - 1) * 2), 2]);
      $.sm(t11, t12, $.n(t13));
      t14 = ($.n($r[7]) + 1);
      $r[7] = t14;
      $b = 16; continue;
    case 18:
      $r[6] = 1;
      $b = 19; continue;
    case 19:
      if (!!$.gt($r[6], 4)) { $b = 21; continue; }
      $b = 20; continue;
    case 20:
      t18 = $.get($sc, "townEcoStat");
      t19 = $r[6];
      t20 = $.cm($.gm($.gm($.get($sc, "Cookies"), "data"), "townEcoStat"), "substr", [($.n($r[6]) - 1), 1]);
      $.sm(t18, t19, $.n(t20));
      t21 = $.get($sc, "townMilStat");
      t22 = $r[6];
      t23 = $.cm($.gm($.gm($.get($sc, "Cookies"), "data"), "townMilStat"), "substr", [($.n($r[6]) - 1), 1]);
      $.sm(t21, t22, $.n(t23));
      t24 = $.get($sc, "townSpeStat");
      t25 = $r[6];
      t26 = $.cm($.gm($.gm($.get($sc, "Cookies"), "data"), "townSpeStat"), "substr", [($.n($r[6]) - 1), 1]);
      $.sm(t24, t25, $.n(t26));
      t27 = ($.n($r[6]) + 1);
      $r[6] = t27;
      $b = 19; continue;
    case 21:
      $r[10] = 1;
      $b = 22; continue;
    case 22:
      if (!!$.gt($r[10], 5)) { $b = 24; continue; }
      $b = 23; continue;
    case 23:
      t28 = $.get($sc, "tempStat");
      t29 = $r[10];
      t30 = $.cm($.gm($.gm($.get($sc, "Cookies"), "data"), "tempStat"), "substr", [($.n($r[10]) - 1), 1]);
      $.sm(t28, t29, $.n(t30));
      t31 = ($.n($r[10]) + 1);
      $r[10] = t31;
      $b = 22; continue;
    case 24:
      $r[9] = 1;
      $b = 25; continue;
    case 25:
      if (!$.lt($r[9], $.gm($.get($sc, "trapEnable"), "length"))) { $b = 27; continue; }
      $b = 26; continue;
    case 26:
      t32 = $.gm($.get($sc, "trapEnable"), $r[9]);
      t33 = $.cm($.gm($.gm($.get($sc, "Cookies"), "data"), "trapEnable"), "substr", [($.n($r[9]) - 1), 1]);
      $.sm(t32, 0, $.n(t33));
      t34 = ($.n($r[9]) + 1);
      $r[9] = t34;
      $b = 25; continue;
    case 27:
      $.set($sc, "posSerang", $.gm($.gm($.get($sc, "Cookies"), "data"), "posSerang"));
      $.set($sc, "enemyID", $.gm($.gm($.get($sc, "Cookies"), "data"), "enemyID"));
      $.set($sc, "daftarMusuhSerang", $.gm($.gm($.get($sc, "Cookies"), "data"), "daftarMusuhSerang"));
      $r[2] = 0;
      $b = 28; continue;
    case 28:
      if (!$.lt($r[2], $.gm($.gm($.gm($.get($sc, "Cookies"), "data"), "daftarMusuhSerang"), "length"))) { $b = 32; continue; }
      $b = 29; continue;
    case 29:
      if (!!$.eq($.gm($.gm($.gm($.get($sc, "Cookies"), "data"), "pos"), $r[2]), undefined)) { $b = 31; continue; }
      $b = 30; continue;
    case 30:
      t36 = $.cm($.gm($.get($sc, "minimap"), "coordinate"), "attachMovie", ["icon_musuh", $.gm($.get($sc, "daftarMusuhSerang"), $r[2]), $.add(100, $.gm($.gm($.gm($.get($sc, "Cookies"), "data"), "ID"), $r[2]))]);
      $.sm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "daftarMusuhSerang"), $r[2])), "ID", $.gm($.gm($.gm($.get($sc, "Cookies"), "data"), "ID"), $r[2]));
      $.sm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "daftarMusuhSerang"), $r[2])), "posArray", $.gm($.gm($.gm($.get($sc, "Cookies"), "data"), "posArrayEnemy"), $r[2]));
      $.sm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "daftarMusuhSerang"), $r[2])), "stepLeft", $.gm($.gm($.gm($.get($sc, "Cookies"), "data"), "stepLeftEnemy"), $r[2]));
      $.sm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "daftarMusuhSerang"), $r[2])), "pos", $.gm($.gm($.gm($.get($sc, "Cookies"), "data"), "pos"), $r[2]));
      $.sm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "daftarMusuhSerang"), $r[2])), "trapped", $.gm($.gm($.gm($.get($sc, "Cookies"), "data"), "trapped"), $r[2]));
      t37 = $.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "daftarMusuhSerang"), $r[2]));
      t38 = $.rand($.gm($.gm($.gm($r[1], $.add("jalurMusuh", $.gm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "daftarMusuhSerang"), $r[2])), "pos"))), $.gm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "daftarMusuhSerang"), $r[2])), "stepLeft")), "length"));
      $.sm(t37, "nextStep", t38);
      $.sm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "daftarMusuhSerang"), $r[2])), "onEnterFrame", $.get($sc, "enemyMoving"));
      $.sm($.get($sc, "posSerang"), $.gm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "daftarMusuhSerang"), $r[2])), "pos"), 1);
      $b = 31; continue;
    case 31:
      t35 = ($.n($r[2]) + 1);
      $r[2] = t35;
      $b = 28; continue;
    case 32:
      $.set($sc, "statisticList", $.gm($.gm($.get($sc, "Cookies"), "data"), "statisticList"));
      $.set($sc, "achievementList", $.gm($.gm($.get($sc, "Cookies"), "data"), "achievementList"));
      $.set($sc, "medalsList", $.gm($.gm($.get($sc, "Cookies"), "data"), "medalsList"));
      $.set($sc, "flowerID", $.gm($.gm($.get($sc, "Cookies"), "data"), "flowerID"));
      $.set($sc, "flowerList", $.gm($.gm($.get($sc, "Cookies"), "data"), "flowerList"));
      $.set($sc, "bunga", $.gm($.gm($.get($sc, "Cookies"), "data"), "bunga"));
      $r[3] = 0;
      $b = 33; continue;
    case 33:
      if (!$.lt($r[3], $.gm($.get($sc, "flowerList"), "length"))) { $b = 37; continue; }
      $b = 34; continue;
    case 34:
      if (!!$.eq($.gm($.gm($.gm($.get($sc, "Cookies"), "data"), "bungaPos"), $r[3]), undefined)) { $b = 36; continue; }
      $b = 35; continue;
    case 35:
      t41 = $.cm($.gm($.get($sc, "minimap"), "coordinate"), "attachMovie", ["mc_flower", $.gm($.get($sc, "flowerList"), $r[3]), $.add(500, $r[3])]);
      $.sm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "flowerList"), $r[3])), "pos", $.gm($.gm($.gm($.get($sc, "Cookies"), "data"), "bungaPos"), $r[3]));
      $.sm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "flowerList"), $r[3])), "_x", $.gm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.add("map", $.gm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "flowerList"), $r[3])), "pos"))), "_x"));
      $.sm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "flowerList"), $r[3])), "_y", $.gm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.add("map", $.gm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "flowerList"), $r[3])), "pos"))), "_y"));
      $b = 36; continue;
    case 36:
      t40 = ($.n($r[3]) + 1);
      $r[3] = t40;
      $b = 33; continue;
    case 37:
      t39 = $.cm($.get($sc, "Cookies"), "flush", [10]);
      $b = 38; continue;
    case 38: return;
    }
  }));
    $.def($sc, "resetData", $.fn({"n":"resetData","p":[],"r":3,"f":42}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21, t22, t23, t24, t25, t26, t27, t28, t29, t30, t31, t32, t33, t34, t35;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      t1 = $.cm($.get($sc, "SharedObject"), "getLocal", ["TLV", "/"]);
      $.set($sc, "Cookies", t1);
      $r[1] = 1;
      $b = 1; continue;
    case 1:
      if (!!$.gt($r[1], 5)) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      t3 = $.delMember($.gm($.get($sc, "Cookies"), "data"), $.add("weaponList", $r[1]));
      t4 = $.delMember($.gm($.get($sc, "Cookies"), "data"), $.add("weaponProduce", $r[1]));
      t5 = $.delMember($.gm($.get($sc, "Cookies"), "data"), $.add("armyList", $r[1]));
      t6 = $.delMember($.gm($.get($sc, "Cookies"), "data"), $.add("armyProduce", $r[1]));
      t7 = ($.n($r[1]) + 1);
      $r[1] = t7;
      $b = 1; continue;
    case 3:
      t2 = $.delMember($.gm($.get($sc, "Cookies"), "data"), "days");
      $r[2] = 1;
      $b = 4; continue;
    case 4:
      if (!!$.gt($r[2], 4)) { $b = 6; continue; }
      $b = 5; continue;
    case 5:
      t33 = $.delMember($.gm($.get($sc, "Cookies"), "data"), $.add("resource", $r[2]));
      t34 = $.delMember($.gm($.get($sc, "Cookies"), "data"), $.add("resourceProduce", $r[2]));
      t35 = ($.n($r[2]) + 1);
      $r[2] = t35;
      $b = 4; continue;
    case 6:
      t8 = $.delMember($.gm($.get($sc, "Cookies"), "data"), "dataPosisi1");
      t9 = $.delMember($.gm($.get($sc, "Cookies"), "data"), "dataPosisi2");
      t10 = $.delMember($.gm($.get($sc, "Cookies"), "data"), "dataPosisi3");
      t11 = $.delMember($.gm($.get($sc, "Cookies"), "data"), "comLoc");
      t12 = $.delMember($.gm($.get($sc, "Cookies"), "data"), "comLocBaru");
      t13 = $.delMember($.gm($.get($sc, "Cookies"), "data"), "townEcoStat");
      t14 = $.delMember($.gm($.get($sc, "Cookies"), "data"), "townMilStat");
      t15 = $.delMember($.gm($.get($sc, "Cookies"), "data"), "townSpeStat");
      t16 = $.delMember($.gm($.get($sc, "Cookies"), "data"), "tempStat");
      t17 = $.delMember($.gm($.get($sc, "Cookies"), "data"), "trapEnable");
      t18 = $.delMember($.gm($.get($sc, "Cookies"), "data"), "enemyID");
      t19 = $.delMember($.gm($.get($sc, "Cookies"), "data"), "daftarMusuhSerang");
      t20 = $.delMember($.gm($.get($sc, "Cookies"), "data"), "ID");
      t21 = $.delMember($.gm($.get($sc, "Cookies"), "data"), "posArrayEnemy");
      t22 = $.delMember($.gm($.get($sc, "Cookies"), "data"), "stepLeftEnemy");
      t23 = $.delMember($.gm($.get($sc, "Cookies"), "data"), "pos");
      t24 = $.delMember($.gm($.get($sc, "Cookies"), "data"), "trapped");
      t25 = $.delMember($.gm($.get($sc, "Cookies"), "data"), "statisticList");
      t26 = $.delMember($.gm($.get($sc, "Cookies"), "data"), "achievementList");
      t27 = $.delMember($.gm($.get($sc, "Cookies"), "data"), "medalsList");
      t28 = $.delMember($.gm($.get($sc, "Cookies"), "data"), "flowerID");
      t29 = $.delMember($.gm($.get($sc, "Cookies"), "data"), "flowerList");
      t30 = $.delMember($.gm($.get($sc, "Cookies"), "data"), "bunga");
      t31 = $.delMember($.gm($.get($sc, "Cookies"), "data"), "bungaPos");
      t32 = $.cm($.get($sc, "Cookies"), "flush", [10]);
      $b = 7; continue;
    case 7: return;
    }
  }));
    $.def($sc, "soundFX", $.fn({"n":"soundFX","p":[[2,"idSound"]],"r":3,"f":106}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4;
    t1 = $.nw($sc, "Sound", [$.get($sc, "slevel1")]);
    $.set($sc, "sEffect", t1);
    t2 = $.cm($.get($sc, "sEffect"), "attachSound", [$r[2]]);
    t3 = $.cm($.get($sc, "sEffect"), "start", [0, 0]);
    t4 = $.cm($.get($sc, "sEffect"), "setVolume", [$.gm($r[1], "volFX")]);
  }));
    $.def($sc, "soundBGM", $.fn({"n":"soundBGM","p":[[2,"idSound"]],"r":3,"f":106}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4;
    $.stopAllSounds();
    t1 = $.nw($sc, "Sound", [$.get($sc, "slevel2")]);
    $.set($sc, "sBGM", t1);
    t2 = $.cm($.get($sc, "sBGM"), "attachSound", [$r[2]]);
    t3 = $.cm($.get($sc, "sBGM"), "start", [0, 999999]);
    t4 = $.cm($.get($sc, "sBGM"), "setVolume", [$.gm($r[1], "volBGM")]);
  }));
    $.def($sc, "MD5", $.fn({"n":"MD5","p":[[27,"string"]],"r":48,"f":42}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21, t22, t23, t24, t25, t26, t27, t28, t29, t30, t31, t32, t33, t34, t35, t36, t37, t38, t39, t40, t41, t42, t43, t44, t45, t46, t47, t48, t49, t50, t51, t52, t53, t54, t55, t56, t57, t58, t59, t60, t61, t62, t63, t64, t65, t66, t67, t68, t69, t70, t71, t72, t73, t74, t75, t76, t77, t78, t79, t80, t81;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.def($sc, "RotateLeft", $.fn({"n":"RotateLeft","p":[[2,"lValue"],[1,"iShiftBits"]],"r":3,"f":42}, $sc, function($sc, $this, $args, $r) {
    return (((($.n($r[2]) | 0) << ($.n($r[1]) | 0)) | 0) | ((($.n($r[2]) | 0) >>> ((32 - $.n($r[1])) | 0)) | 0));
  }));
      $.def($sc, "AddUnsigned", $.fn({"n":"AddUnsigned","p":[[7,"lX"],[6,"lY"]],"r":8,"f":42}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $r[5] = undefined;
      $r[4] = undefined;
      $r[3] = undefined;
      $r[2] = undefined;
      $r[1] = undefined;
      t1 = (($.n($r[7]) | 0) & (2147483648 | 0));
      $r[3] = t1;
      t2 = (($.n($r[6]) | 0) & (2147483648 | 0));
      $r[2] = t2;
      t3 = (($.n($r[7]) | 0) & (1073741824 | 0));
      $r[5] = t3;
      t4 = (($.n($r[6]) | 0) & (1073741824 | 0));
      $r[4] = t4;
      t5 = ((($.n($r[7]) | 0) & (1073741823 | 0)) + (($.n($r[6]) | 0) & (1073741823 | 0)));
      $r[1] = t5;
      if (!$.bool((($.n($r[5]) | 0) & ($.n($r[4]) | 0)))) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      return (((((($.n($r[1]) | 0) ^ (2147483648 | 0)) | 0) ^ ($.n($r[3]) | 0)) | 0) ^ ($.n($r[2]) | 0));
    case 2:
      if (!$.bool((($.n($r[5]) | 0) | ($.n($r[4]) | 0)))) { $b = 8; continue; }
      $b = 3; continue;
    case 3:
      if (!$.bool((($.n($r[1]) | 0) & (1073741824 | 0)))) { $b = 6; continue; }
      $b = 4; continue;
    case 4:
      return (((((($.n($r[1]) | 0) ^ (3221225472 | 0)) | 0) ^ ($.n($r[3]) | 0)) | 0) ^ ($.n($r[2]) | 0));
    case 6:
      return (((((($.n($r[1]) | 0) ^ (1073741824 | 0)) | 0) ^ ($.n($r[3]) | 0)) | 0) ^ ($.n($r[2]) | 0));
    case 8:
      return (((($.n($r[1]) | 0) ^ ($.n($r[3]) | 0)) | 0) ^ ($.n($r[2]) | 0));
    case 10: return;
    }
  }));
      $.def($sc, "F", $.fn({"n":"F","p":[[1,"x"],[3,"y"],[2,"z"]],"r":4,"f":42}, $sc, function($sc, $this, $args, $r) {
    return (((($.n($r[1]) | 0) & ($.n($r[3]) | 0)) | 0) | ((((($.n($r[1]) | 0) ^ (4294967295 | 0)) | 0) & ($.n($r[2]) | 0)) | 0));
  }));
      $.def($sc, "G", $.fn({"n":"G","p":[[3,"x"],[2,"y"],[1,"z"]],"r":4,"f":42}, $sc, function($sc, $this, $args, $r) {
    return (((($.n($r[3]) | 0) & ($.n($r[1]) | 0)) | 0) | ((($.n($r[2]) | 0) & ((($.n($r[1]) | 0) ^ (4294967295 | 0)) | 0)) | 0));
  }));
      $.def($sc, "H", $.fn({"n":"H","p":[[3,"x"],[2,"y"],[1,"z"]],"r":4,"f":42}, $sc, function($sc, $this, $args, $r) {
    return (((($.n($r[3]) | 0) ^ ($.n($r[2]) | 0)) | 0) ^ ($.n($r[1]) | 0));
  }));
      $.def($sc, "I", $.fn({"n":"I","p":[[3,"x"],[2,"y"],[1,"z"]],"r":4,"f":42}, $sc, function($sc, $this, $args, $r) {
    return (($.n($r[2]) | 0) ^ ((($.n($r[3]) | 0) | ((($.n($r[1]) | 0) ^ (4294967295 | 0)) | 0)) | 0));
  }));
      $.def($sc, "FF", $.fn({"n":"FF","p":[[1,"a"],[2,"b"],[4,"c"],[3,"d"],[7,"x"],[5,"s"],[6,"ac"]],"r":8,"f":42}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5, t6, t7, t8, t9;
    t1 = $r[6];
    t2 = $r[7];
    t3 = $.cf($sc, "F", [$r[2], $r[4], $r[3]]);
    t4 = $.cf($sc, "AddUnsigned", [t3, t2]);
    t5 = $.cf($sc, "AddUnsigned", [t4, t1]);
    t6 = $.cf($sc, "AddUnsigned", [$r[1], t5]);
    $r[1] = t6;
    t7 = $r[2];
    t8 = $.cf($sc, "RotateLeft", [$r[1], $r[5]]);
    t9 = $.cf($sc, "AddUnsigned", [t8, t7]);
    return t9;
  }));
      $.def($sc, "GG", $.fn({"n":"GG","p":[[1,"a"],[2,"b"],[4,"c"],[3,"d"],[7,"x"],[5,"s"],[6,"ac"]],"r":8,"f":42}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5, t6, t7, t8, t9;
    t1 = $r[6];
    t2 = $r[7];
    t3 = $.cf($sc, "G", [$r[2], $r[4], $r[3]]);
    t4 = $.cf($sc, "AddUnsigned", [t3, t2]);
    t5 = $.cf($sc, "AddUnsigned", [t4, t1]);
    t6 = $.cf($sc, "AddUnsigned", [$r[1], t5]);
    $r[1] = t6;
    t7 = $r[2];
    t8 = $.cf($sc, "RotateLeft", [$r[1], $r[5]]);
    t9 = $.cf($sc, "AddUnsigned", [t8, t7]);
    return t9;
  }));
      $.def($sc, "HH", $.fn({"n":"HH","p":[[1,"a"],[2,"b"],[4,"c"],[3,"d"],[7,"x"],[5,"s"],[6,"ac"]],"r":8,"f":42}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5, t6, t7, t8, t9;
    t1 = $r[6];
    t2 = $r[7];
    t3 = $.cf($sc, "H", [$r[2], $r[4], $r[3]]);
    t4 = $.cf($sc, "AddUnsigned", [t3, t2]);
    t5 = $.cf($sc, "AddUnsigned", [t4, t1]);
    t6 = $.cf($sc, "AddUnsigned", [$r[1], t5]);
    $r[1] = t6;
    t7 = $r[2];
    t8 = $.cf($sc, "RotateLeft", [$r[1], $r[5]]);
    t9 = $.cf($sc, "AddUnsigned", [t8, t7]);
    return t9;
  }));
      $.def($sc, "II", $.fn({"n":"II","p":[[1,"a"],[2,"b"],[4,"c"],[3,"d"],[7,"x"],[5,"s"],[6,"ac"]],"r":8,"f":42}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5, t6, t7, t8, t9;
    t1 = $r[6];
    t2 = $r[7];
    t3 = $.cf($sc, "I", [$r[2], $r[4], $r[3]]);
    t4 = $.cf($sc, "AddUnsigned", [t3, t2]);
    t5 = $.cf($sc, "AddUnsigned", [t4, t1]);
    t6 = $.cf($sc, "AddUnsigned", [$r[1], t5]);
    $r[1] = t6;
    t7 = $r[2];
    t8 = $.cf($sc, "RotateLeft", [$r[1], $r[5]]);
    t9 = $.cf($sc, "AddUnsigned", [t8, t7]);
    return t9;
  }));
      $.def($sc, "ConvertToWordArray", $.fn({"n":"ConvertToWordArray","p":[[6,"string"]],"r":10,"f":42}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $r[2] = undefined;
      t1 = $.gm($r[6], "length");
      $r[5] = t1;
      t2 = $.add($r[5], 8);
      $r[8] = t2;
      t3 = (($.n($r[8]) - ($.n($r[8]) % 64)) / 64);
      $r[9] = t3;
      t4 = ($.n($.add($r[9], 1)) * 16);
      $r[7] = t4;
      t5 = $.cf($sc, "Array", [($.n($r[7]) - 1)]);
      $r[3] = t5;
      $r[4] = 0;
      $r[1] = 0;
      $b = 1; continue;
    case 1:
      if (!$.lt($r[1], $r[5])) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      t8 = (($.n($r[1]) - ($.n($r[1]) % 4)) / 4);
      $r[2] = t8;
      t9 = (($.n($r[1]) % 4) * 8);
      $r[4] = t9;
      t10 = $r[3];
      t11 = $r[2];
      t12 = $.gm($r[3], $r[2]);
      t13 = $.cm($r[6], "charCodeAt", [$r[1]]);
      $.sm(t10, t11, (($.n(t12) | 0) | ((($.n(t13) | 0) << ($.n($r[4]) | 0)) | 0)));
      t14 = ($.n($r[1]) + 1);
      $r[1] = t14;
      $b = 1; continue;
    case 3:
      t6 = (($.n($r[1]) - ($.n($r[1]) % 4)) / 4);
      $r[2] = t6;
      t7 = (($.n($r[1]) % 4) * 8);
      $r[4] = t7;
      $.sm($r[3], $r[2], (($.n($.gm($r[3], $r[2])) | 0) | (((128 | 0) << ($.n($r[4]) | 0)) | 0)));
      $.sm($r[3], ($.n($r[7]) - 2), (($.n($r[5]) | 0) << (3 | 0)));
      $.sm($r[3], ($.n($r[7]) - 1), (($.n($r[5]) | 0) >>> (29 | 0)));
      return $r[3];
    case 5: return;
    }
  }));
      $.def($sc, "WordToHex", $.fn({"n":"WordToHex","p":[[5,"lValue"]],"r":6,"f":42}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $r[3] = "";
      $r[2] = "";
      $r[4] = undefined;
      $r[1] = undefined;
      $r[1] = 0;
      $b = 1; continue;
    case 1:
      if (!!$.gt($r[1], 3)) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      t1 = (((($.n($r[5]) | 0) >>> (($.n($r[1]) * 8) | 0)) | 0) & (255 | 0));
      $r[4] = t1;
      t2 = $.cm($r[4], "toString", [16]);
      $r[2] = $.add("0", t2);
      t3 = $r[3];
      t4 = $.cm($r[2], "substr", [($.n($.gm($r[2], "length")) - 2), 2]);
      $r[3] = $.add(t3, t4);
      t5 = ($.n($r[1]) + 1);
      $r[1] = t5;
      $b = 1; continue;
    case 3:
      return $r[3];
    case 5: return;
    }
  }));
      $.def($sc, "Utf8Encode", $.fn({"n":"Utf8Encode","p":[[4,"string"]],"r":5,"f":42}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $r[2] = "";
      $r[3] = 0;
      $b = 1; continue;
    case 1:
      if (!$.lt($r[3], $.gm($r[4], "length"))) { $b = 10; continue; }
      $b = 2; continue;
    case 2:
      t1 = $.cm($r[4], "charCodeAt", [$r[3]]);
      $r[1] = t1;
      if (!$.lt($r[1], 128)) { $b = 4; continue; }
      $b = 3; continue;
    case 3:
      t4 = $r[2];
      t5 = $.cm($.get($sc, "String"), "fromCharCode", [$r[1]]);
      $r[2] = $.add(t4, t5);
      $b = 9; continue;
    case 4:
      t2 = $.gt($r[1], 127);
      t3 = !t2;
      s0 = t2;
      if (t3) { $b = 6; continue; }
      $b = 5; continue;
    case 5:
      s0 = $.lt($r[1], 2048);
      $b = 6; continue;
    case 6:
      if (!$.bool(s0)) { $b = 8; continue; }
      $b = 7; continue;
    case 7:
      t13 = $r[2];
      t14 = $.cm($.get($sc, "String"), "fromCharCode", [(((($.n($r[1]) | 0) >> (6 | 0)) | 0) | (192 | 0))]);
      $r[2] = $.add(t13, t14);
      t15 = $r[2];
      t16 = $.cm($.get($sc, "String"), "fromCharCode", [(((($.n($r[1]) | 0) & (63 | 0)) | 0) | (128 | 0))]);
      $r[2] = $.add(t15, t16);
      $b = 9; continue;
    case 8:
      t7 = $r[2];
      t8 = $.cm($.get($sc, "String"), "fromCharCode", [(((($.n($r[1]) | 0) >> (12 | 0)) | 0) | (224 | 0))]);
      $r[2] = $.add(t7, t8);
      t9 = $r[2];
      t10 = $.cm($.get($sc, "String"), "fromCharCode", [(((((($.n($r[1]) | 0) >> (6 | 0)) | 0) & (63 | 0)) | 0) | (128 | 0))]);
      $r[2] = $.add(t9, t10);
      t11 = $r[2];
      t12 = $.cm($.get($sc, "String"), "fromCharCode", [(((($.n($r[1]) | 0) & (63 | 0)) | 0) | (128 | 0))]);
      $r[2] = $.add(t11, t12);
      $b = 9; continue;
    case 9:
      t6 = ($.n($r[3]) + 1);
      $r[3] = t6;
      $b = 1; continue;
    case 10:
      return $r[2];
    case 12: return;
    }
  }));
      t1 = $.cf($sc, "Array", []);
      $r[6] = t1;
      $r[5] = undefined;
      $r[35] = undefined;
      $r[36] = undefined;
      $r[37] = undefined;
      $r[34] = undefined;
      $r[4] = undefined;
      $r[3] = undefined;
      $r[2] = undefined;
      $r[1] = undefined;
      $r[21] = 7;
      $r[19] = 12;
      $r[16] = 17;
      $r[13] = 22;
      $r[20] = 5;
      $r[17] = 9;
      $r[14] = 14;
      $r[11] = 20;
      $r[18] = 4;
      $r[15] = 11;
      $r[12] = 16;
      $r[10] = 23;
      $r[25] = 6;
      $r[24] = 10;
      $r[23] = 15;
      $r[22] = 21;
      t2 = $.cf($sc, "Utf8Encode", [$r[27]]);
      $r[27] = t2;
      t3 = $.cf($sc, "ConvertToWordArray", [$r[27]]);
      $r[6] = t3;
      $r[4] = 1732584193;
      $r[3] = 4023233417;
      $r[2] = 2562383102;
      $r[1] = 271733878;
      $r[5] = 0;
      $b = 1; continue;
    case 1:
      if (!$.lt($r[5], $.gm($r[6], "length"))) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      t9 = $r[4];
      $r[35] = t9;
      t10 = $r[3];
      $r[36] = t10;
      t11 = $r[2];
      $r[37] = t11;
      t12 = $r[1];
      $r[34] = t12;
      t13 = $.cf($sc, "FF", [$r[4], $r[3], $r[2], $r[1], $.gm($r[6], $.add($r[5], 0)), $r[21], 3614090360]);
      $r[4] = t13;
      t14 = $.cf($sc, "FF", [$r[1], $r[4], $r[3], $r[2], $.gm($r[6], $.add($r[5], 1)), $r[19], 3905402710]);
      $r[1] = t14;
      t15 = $.cf($sc, "FF", [$r[2], $r[1], $r[4], $r[3], $.gm($r[6], $.add($r[5], 2)), $r[16], 606105819]);
      $r[2] = t15;
      t16 = $.cf($sc, "FF", [$r[3], $r[2], $r[1], $r[4], $.gm($r[6], $.add($r[5], 3)), $r[13], 3250441966]);
      $r[3] = t16;
      t17 = $.cf($sc, "FF", [$r[4], $r[3], $r[2], $r[1], $.gm($r[6], $.add($r[5], 4)), $r[21], 4118548399]);
      $r[4] = t17;
      t18 = $.cf($sc, "FF", [$r[1], $r[4], $r[3], $r[2], $.gm($r[6], $.add($r[5], 5)), $r[19], 1200080426]);
      $r[1] = t18;
      t19 = $.cf($sc, "FF", [$r[2], $r[1], $r[4], $r[3], $.gm($r[6], $.add($r[5], 6)), $r[16], 2821735955]);
      $r[2] = t19;
      t20 = $.cf($sc, "FF", [$r[3], $r[2], $r[1], $r[4], $.gm($r[6], $.add($r[5], 7)), $r[13], 4249261313]);
      $r[3] = t20;
      t21 = $.cf($sc, "FF", [$r[4], $r[3], $r[2], $r[1], $.gm($r[6], $.add($r[5], 8)), $r[21], 1770035416]);
      $r[4] = t21;
      t22 = $.cf($sc, "FF", [$r[1], $r[4], $r[3], $r[2], $.gm($r[6], $.add($r[5], 9)), $r[19], 2336552879]);
      $r[1] = t22;
      t23 = $.cf($sc, "FF", [$r[2], $r[1], $r[4], $r[3], $.gm($r[6], $.add($r[5], 10)), $r[16], 4294925233]);
      $r[2] = t23;
      t24 = $.cf($sc, "FF", [$r[3], $r[2], $r[1], $r[4], $.gm($r[6], $.add($r[5], 11)), $r[13], 2304563134]);
      $r[3] = t24;
      t25 = $.cf($sc, "FF", [$r[4], $r[3], $r[2], $r[1], $.gm($r[6], $.add($r[5], 12)), $r[21], 1804603682]);
      $r[4] = t25;
      t26 = $.cf($sc, "FF", [$r[1], $r[4], $r[3], $r[2], $.gm($r[6], $.add($r[5], 13)), $r[19], 4254626195]);
      $r[1] = t26;
      t27 = $.cf($sc, "FF", [$r[2], $r[1], $r[4], $r[3], $.gm($r[6], $.add($r[5], 14)), $r[16], 2792965006]);
      $r[2] = t27;
      t28 = $.cf($sc, "FF", [$r[3], $r[2], $r[1], $r[4], $.gm($r[6], $.add($r[5], 15)), $r[13], 1236535329]);
      $r[3] = t28;
      t29 = $.cf($sc, "GG", [$r[4], $r[3], $r[2], $r[1], $.gm($r[6], $.add($r[5], 1)), $r[20], 4129170786]);
      $r[4] = t29;
      t30 = $.cf($sc, "GG", [$r[1], $r[4], $r[3], $r[2], $.gm($r[6], $.add($r[5], 6)), $r[17], 3225465664]);
      $r[1] = t30;
      t31 = $.cf($sc, "GG", [$r[2], $r[1], $r[4], $r[3], $.gm($r[6], $.add($r[5], 11)), $r[14], 643717713]);
      $r[2] = t31;
      t32 = $.cf($sc, "GG", [$r[3], $r[2], $r[1], $r[4], $.gm($r[6], $.add($r[5], 0)), $r[11], 3921069994]);
      $r[3] = t32;
      t33 = $.cf($sc, "GG", [$r[4], $r[3], $r[2], $r[1], $.gm($r[6], $.add($r[5], 5)), $r[20], 3593408605]);
      $r[4] = t33;
      t34 = $.cf($sc, "GG", [$r[1], $r[4], $r[3], $r[2], $.gm($r[6], $.add($r[5], 10)), $r[17], 38016083]);
      $r[1] = t34;
      t35 = $.cf($sc, "GG", [$r[2], $r[1], $r[4], $r[3], $.gm($r[6], $.add($r[5], 15)), $r[14], 3634488961]);
      $r[2] = t35;
      t36 = $.cf($sc, "GG", [$r[3], $r[2], $r[1], $r[4], $.gm($r[6], $.add($r[5], 4)), $r[11], 3889429448]);
      $r[3] = t36;
      t37 = $.cf($sc, "GG", [$r[4], $r[3], $r[2], $r[1], $.gm($r[6], $.add($r[5], 9)), $r[20], 568446438]);
      $r[4] = t37;
      t38 = $.cf($sc, "GG", [$r[1], $r[4], $r[3], $r[2], $.gm($r[6], $.add($r[5], 14)), $r[17], 3275163606]);
      $r[1] = t38;
      t39 = $.cf($sc, "GG", [$r[2], $r[1], $r[4], $r[3], $.gm($r[6], $.add($r[5], 3)), $r[14], 4107603335]);
      $r[2] = t39;
      t40 = $.cf($sc, "GG", [$r[3], $r[2], $r[1], $r[4], $.gm($r[6], $.add($r[5], 8)), $r[11], 1163531501]);
      $r[3] = t40;
      t41 = $.cf($sc, "GG", [$r[4], $r[3], $r[2], $r[1], $.gm($r[6], $.add($r[5], 13)), $r[20], 2850285829]);
      $r[4] = t41;
      t42 = $.cf($sc, "GG", [$r[1], $r[4], $r[3], $r[2], $.gm($r[6], $.add($r[5], 2)), $r[17], 4243563512]);
      $r[1] = t42;
      t43 = $.cf($sc, "GG", [$r[2], $r[1], $r[4], $r[3], $.gm($r[6], $.add($r[5], 7)), $r[14], 1735328473]);
      $r[2] = t43;
      t44 = $.cf($sc, "GG", [$r[3], $r[2], $r[1], $r[4], $.gm($r[6], $.add($r[5], 12)), $r[11], 2368359562]);
      $r[3] = t44;
      t45 = $.cf($sc, "HH", [$r[4], $r[3], $r[2], $r[1], $.gm($r[6], $.add($r[5], 5)), $r[18], 4294588738]);
      $r[4] = t45;
      t46 = $.cf($sc, "HH", [$r[1], $r[4], $r[3], $r[2], $.gm($r[6], $.add($r[5], 8)), $r[15], 2272392833]);
      $r[1] = t46;
      t47 = $.cf($sc, "HH", [$r[2], $r[1], $r[4], $r[3], $.gm($r[6], $.add($r[5], 11)), $r[12], 1839030562]);
      $r[2] = t47;
      t48 = $.cf($sc, "HH", [$r[3], $r[2], $r[1], $r[4], $.gm($r[6], $.add($r[5], 14)), $r[10], 4259657740]);
      $r[3] = t48;
      t49 = $.cf($sc, "HH", [$r[4], $r[3], $r[2], $r[1], $.gm($r[6], $.add($r[5], 1)), $r[18], 2763975236]);
      $r[4] = t49;
      t50 = $.cf($sc, "HH", [$r[1], $r[4], $r[3], $r[2], $.gm($r[6], $.add($r[5], 4)), $r[15], 1272893353]);
      $r[1] = t50;
      t51 = $.cf($sc, "HH", [$r[2], $r[1], $r[4], $r[3], $.gm($r[6], $.add($r[5], 7)), $r[12], 4139469664]);
      $r[2] = t51;
      t52 = $.cf($sc, "HH", [$r[3], $r[2], $r[1], $r[4], $.gm($r[6], $.add($r[5], 10)), $r[10], 3200236656]);
      $r[3] = t52;
      t53 = $.cf($sc, "HH", [$r[4], $r[3], $r[2], $r[1], $.gm($r[6], $.add($r[5], 13)), $r[18], 681279174]);
      $r[4] = t53;
      t54 = $.cf($sc, "HH", [$r[1], $r[4], $r[3], $r[2], $.gm($r[6], $.add($r[5], 0)), $r[15], 3936430074]);
      $r[1] = t54;
      t55 = $.cf($sc, "HH", [$r[2], $r[1], $r[4], $r[3], $.gm($r[6], $.add($r[5], 3)), $r[12], 3572445317]);
      $r[2] = t55;
      t56 = $.cf($sc, "HH", [$r[3], $r[2], $r[1], $r[4], $.gm($r[6], $.add($r[5], 6)), $r[10], 76029189]);
      $r[3] = t56;
      t57 = $.cf($sc, "HH", [$r[4], $r[3], $r[2], $r[1], $.gm($r[6], $.add($r[5], 9)), $r[18], 3654602809]);
      $r[4] = t57;
      t58 = $.cf($sc, "HH", [$r[1], $r[4], $r[3], $r[2], $.gm($r[6], $.add($r[5], 12)), $r[15], 3873151461]);
      $r[1] = t58;
      t59 = $.cf($sc, "HH", [$r[2], $r[1], $r[4], $r[3], $.gm($r[6], $.add($r[5], 15)), $r[12], 530742520]);
      $r[2] = t59;
      t60 = $.cf($sc, "HH", [$r[3], $r[2], $r[1], $r[4], $.gm($r[6], $.add($r[5], 2)), $r[10], 3299628645]);
      $r[3] = t60;
      t61 = $.cf($sc, "II", [$r[4], $r[3], $r[2], $r[1], $.gm($r[6], $.add($r[5], 0)), $r[25], 4096336452]);
      $r[4] = t61;
      t62 = $.cf($sc, "II", [$r[1], $r[4], $r[3], $r[2], $.gm($r[6], $.add($r[5], 7)), $r[24], 1126891415]);
      $r[1] = t62;
      t63 = $.cf($sc, "II", [$r[2], $r[1], $r[4], $r[3], $.gm($r[6], $.add($r[5], 14)), $r[23], 2878612391]);
      $r[2] = t63;
      t64 = $.cf($sc, "II", [$r[3], $r[2], $r[1], $r[4], $.gm($r[6], $.add($r[5], 5)), $r[22], 4237533241]);
      $r[3] = t64;
      t65 = $.cf($sc, "II", [$r[4], $r[3], $r[2], $r[1], $.gm($r[6], $.add($r[5], 12)), $r[25], 1700485571]);
      $r[4] = t65;
      t66 = $.cf($sc, "II", [$r[1], $r[4], $r[3], $r[2], $.gm($r[6], $.add($r[5], 3)), $r[24], 2399980690]);
      $r[1] = t66;
      t67 = $.cf($sc, "II", [$r[2], $r[1], $r[4], $r[3], $.gm($r[6], $.add($r[5], 10)), $r[23], 4293915773]);
      $r[2] = t67;
      t68 = $.cf($sc, "II", [$r[3], $r[2], $r[1], $r[4], $.gm($r[6], $.add($r[5], 1)), $r[22], 2240044497]);
      $r[3] = t68;
      t69 = $.cf($sc, "II", [$r[4], $r[3], $r[2], $r[1], $.gm($r[6], $.add($r[5], 8)), $r[25], 1873313359]);
      $r[4] = t69;
      t70 = $.cf($sc, "II", [$r[1], $r[4], $r[3], $r[2], $.gm($r[6], $.add($r[5], 15)), $r[24], 4264355552]);
      $r[1] = t70;
      t71 = $.cf($sc, "II", [$r[2], $r[1], $r[4], $r[3], $.gm($r[6], $.add($r[5], 6)), $r[23], 2734768916]);
      $r[2] = t71;
      t72 = $.cf($sc, "II", [$r[3], $r[2], $r[1], $r[4], $.gm($r[6], $.add($r[5], 13)), $r[22], 1309151649]);
      $r[3] = t72;
      t73 = $.cf($sc, "II", [$r[4], $r[3], $r[2], $r[1], $.gm($r[6], $.add($r[5], 4)), $r[25], 4149444226]);
      $r[4] = t73;
      t74 = $.cf($sc, "II", [$r[1], $r[4], $r[3], $r[2], $.gm($r[6], $.add($r[5], 11)), $r[24], 3174756917]);
      $r[1] = t74;
      t75 = $.cf($sc, "II", [$r[2], $r[1], $r[4], $r[3], $.gm($r[6], $.add($r[5], 2)), $r[23], 718787259]);
      $r[2] = t75;
      t76 = $.cf($sc, "II", [$r[3], $r[2], $r[1], $r[4], $.gm($r[6], $.add($r[5], 9)), $r[22], 3951481745]);
      $r[3] = t76;
      t77 = $.cf($sc, "AddUnsigned", [$r[4], $r[35]]);
      $r[4] = t77;
      t78 = $.cf($sc, "AddUnsigned", [$r[3], $r[36]]);
      $r[3] = t78;
      t79 = $.cf($sc, "AddUnsigned", [$r[2], $r[37]]);
      $r[2] = t79;
      t80 = $.cf($sc, "AddUnsigned", [$r[1], $r[34]]);
      $r[1] = t80;
      t81 = $.add($r[5], 16);
      $r[5] = t81;
      $b = 1; continue;
    case 3:
      t4 = $.cf($sc, "WordToHex", [$r[4]]);
      t5 = $.cf($sc, "WordToHex", [$r[3]]);
      t6 = $.cf($sc, "WordToHex", [$r[2]]);
      t7 = $.cf($sc, "WordToHex", [$r[1]]);
      $r[46] = $.add($.add($.add(t4, t5), t6), t7);
      t8 = $.cm($r[46], "toLowerCase", []);
      return t8;
    case 5: return;
    }
  }));
    $.def($sc, "getGoldFromChallange", $.fn({"n":"getGoldFromChallange","p":[[2,"idChallange"]],"r":3,"f":106}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    t1 = $.nw($sc, "XML", []);
    $.def($sc, "myXML", t1);
    $.sm($.get($sc, "myXML"), "ignoreWhite", true);
    t2 = $.cm($.get($sc, "myXML"), "load", [$.add("http://belugerinstudios.com/data/data.php?act=getGoldFromId&challangeid=", $r[2])]);
    $.sm($.get($sc, "myXML"), "onLoad", $.fn({"n":"","p":[[0,"success"]],"r":2,"f":106}, $sc, function($sc, $this, $args, $r) {
    $.set($sc, "nodeResult", $.gm($.gm($.gm($.gm($.gm($.get($sc, "myXML"), "firstChild"), "childNodes"), 0), "firstChild"), "nodeValue"));
    $.sm($.gm($.gm($r[1], "icoba"), "gaingold"), "value", $.add($.add("You Gain: ", $.get($sc, "nodeResult")), " golds."));
    $.sm($.gm($.gm($r[1], "icoba"), "curgold"), "value", ($.n($.gm($.gm($.gm($r[1], "icoba"), "curgold"), "value")) + $.n($.get($sc, "nodeResult"))));
    $.sm($.gm($r[1], "icoba"), "gold", ($.n($.gm($.gm($r[1], "icoba"), "gold")) + $.n($.get($sc, "nodeResult"))));
    $.trace($.add("test:", $.get($sc, "nodeResult")));
  }));
  }));
    $.stop($tgt);
    $.sp($tgt, "_quality", "medium");
    t1 = $.cm($.get($sc, "btn_text"), "gotoAndStop", [$.add($.get($sc, "bahasa"), 1)]);
    $.sm($.get($sc, "play2"), "_visible", false);
    t2 = $.cm($.get($sc, "play2"), "gotoAndStop", [$.add($.get($sc, "bahasa"), 1)]);
    $.sm($.get($sc, "main_btn"), "onEnterFrame", $.fn({"n":"","p":[],"r":3,"f":105}, $sc, function($sc, $this, $args, $r) {
    var t1;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.sm($.gm($r[1], "inv"), "onRelease", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    var t1;
    $.sm($.get($sc, "play2"), "_visible", true);
    t1 = $.cm($.get($sc, "play2"), "gotoAndStop", [$.add($.get($sc, "bahasa"), 1)]);
  }));
      $.sm($.gm($.get($sc, "play2"), "mulai_btn"), "onRelease", $.fn({"n":"","p":[],"r":2,"f":106}, $sc, function($sc, $this, $args, $r) {
    var t1;
    $.set($sc, "battleTutorial", false);
    $.set($sc, "firstWar", true);
    $.set($sc, "firstFlower", true);
    $.set($sc, "firstStrategy", true);
    t1 = $.cm($r[1], "gotoAndStop", ["story"]);
  }));
      t1 = $.cm($.get($sc, "SharedObject"), "getLocal", ["TLV", "/"]);
      $.set($sc, "Cookies", t1);
      if (!!$.eq($.gm($.gm($.get($sc, "Cookies"), "data"), "days"), undefined)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      $.sm($.gm($.gm($r[1], "pop_right"), "lanjut_btn"), "enabled", true);
      $.sm($.gm($.get($sc, "play2"), "lanjut_btn"), "onRelease", $.fn({"n":"","p":[],"r":2,"f":106}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    $.set($sc, "battleTutorial", true);
    t1 = $.cm($r[1], "gotoAndStop", ["main"]);
    t2 = $.cf($sc, "loadData", []);
  }));
      $b = 4; continue;
    case 2:
      $.sm($.gm($.get($sc, "play2"), "lanjut_btn"), "enabled", false);
      $b = 4; continue;
    case 4: return;
    }
  }));
    $.sm($.get($sc, "statistik_btn"), "onRelease", $.fn({"n":"","p":[],"r":4,"f":105}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      t1 = $.cm($r[2], "attachMovie", ["statistic", "statistic", 999]);
      $.sm($.get($sc, "statistic"), "_x", ($.n($.gm($.get($sc, "Stage"), "width")) / 2));
      $.sm($.get($sc, "statistic"), "_y", ($.n($.gm($.get($sc, "Stage"), "height")) / 2));
      $.sm($.get($sc, "statistic"), "_alpha", 0);
      $r[3] = 1;
      $b = 1; continue;
    case 1:
      if (!!$.gt($r[3], 16)) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      $.sm($.gm($.get($sc, "statistic"), $.add("stat", $r[3])), "text", $.gm($.get($sc, "statisticList"), $r[3]));
      t2 = ($.n($r[3]) + 1);
      $r[3] = t2;
      $b = 1; continue;
    case 3:
      $.sm($.gm($.get($sc, "statistic"), "cancel_btn"), "onRelease", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    var t1;
    t1 = $.cm($.get($sc, "statistic"), "removeMovieClip", []);
  }));
      $.sm($.get($sc, "statistic"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1;
    t1 = $.cf($sc, "efekFade", [$r[1]]);
  }));
      $b = 4; continue;
    case 4: return;
    }
  }));
    $.sm($.get($sc, "achievement_btn"), "onRelease", $.fn({"n":"","p":[],"r":3,"f":105}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      t1 = $.cm($r[2], "attachMovie", ["window_achievement", "achievement", 999]);
      $.sm($.get($sc, "achievement"), "_x", ($.n($.gm($.get($sc, "Stage"), "width")) / 2));
      $.sm($.get($sc, "achievement"), "_y", ($.n($.gm($.get($sc, "Stage"), "height")) / 2));
      $.sm($.get($sc, "achievement"), "_alpha", 0);
      $.sm($.gm($.get($sc, "achievement"), "hint1"), "text", $.gm($.get($sc, "rollText"), $.get($sc, "bahasa")));
      $.sm($.gm($.get($sc, "achievement"), "hint"), "text", "");
      $.def($sc, "i", 1);
      $b = 1; continue;
    case 1:
      if (!!$.gt($.get($sc, "i"), 12)) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      $.sm($.gm($.get($sc, "achievement"), $.add("ach", $.get($sc, "i"))), "i", $.get($sc, "i"));
      t2 = $.cm($.gm($.get($sc, "achievement"), $.add("ach", $.get($sc, "i"))), "gotoAndStop", [$.add($.gm($.get($sc, "achievementList"), $.get($sc, "i")), 1)]);
      $.sm($.gm($.get($sc, "achievement"), $.add("ach", $.get($sc, "i"))), "onRollOver", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    $.sm($.gm($.get($sc, "achievement"), "hint1"), "text", $.gm($.gm($.get($sc, "achievementStory"), $.gm($r[1], "i")), $.get($sc, "bahasa")));
    $.sm($.gm($.get($sc, "achievement"), "hint"), "text", $.add($.add("(", $.gm($.gm($.get($sc, "achievementDes"), $.gm($r[1], "i")), $.get($sc, "bahasa"))), ")"));
  }));
      $.sm($.gm($.get($sc, "achievement"), $.add("ach", $.get($sc, "i"))), "onRollOut", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    $.sm($.gm($.get($sc, "achievement"), "hint1"), "text", $.gm($.get($sc, "rollText"), $.get($sc, "bahasa")));
    $.sm($.gm($.get($sc, "achievement"), "hint"), "text", "");
  }));
      $.set($sc, "i", ($.n($.get($sc, "i")) + 1));
      $b = 1; continue;
    case 3:
      $.sm($.gm($.get($sc, "achievement"), "cancel_btn"), "onRelease", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    var t1;
    t1 = $.cm($.get($sc, "achievement"), "removeMovieClip", []);
  }));
      $.sm($.get($sc, "achievement"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1;
    t1 = $.cf($sc, "efekFade", [$r[1]]);
  }));
      $b = 4; continue;
    case 4: return;
    }
  }));
    $.sm($.get($sc, "medals_btn"), "onRelease", $.fn({"n":"","p":[],"r":3,"f":105}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      t1 = $.cm($r[2], "attachMovie", ["window_medals", "medals", 999]);
      $.sm($.get($sc, "medals"), "_x", ($.n($.gm($.get($sc, "Stage"), "width")) / 2));
      $.sm($.get($sc, "medals"), "_y", ($.n($.gm($.get($sc, "Stage"), "height")) / 2));
      $.sm($.get($sc, "medals"), "_alpha", 0);
      $.sm($.gm($.get($sc, "medals"), "hint1"), "text", $.gm($.get($sc, "rollText"), $.get($sc, "bahasa")));
      $.def($sc, "i", 1);
      $b = 1; continue;
    case 1:
      if (!!$.gt($.get($sc, "i"), 5)) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      $.sm($.gm($.get($sc, "medals"), $.add("medals", $.get($sc, "i"))), "i", $.get($sc, "i"));
      t2 = $.cm($.gm($.get($sc, "medals"), $.add("medals", $.get($sc, "i"))), "gotoAndStop", [$.add($.gm($.get($sc, "medalsList"), $.get($sc, "i")), 1)]);
      $.sm($.gm($.get($sc, "medals"), $.add("medals", $.get($sc, "i"))), "onRollOver", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    $.sm($.gm($.get($sc, "medals"), "hint1"), "text", $.gm($.gm($.get($sc, "medalsDes"), $.gm($r[1], "i")), $.get($sc, "bahasa")));
  }));
      $.sm($.gm($.get($sc, "medals"), $.add("medals", $.get($sc, "i"))), "onRollOut", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    $.sm($.gm($.get($sc, "medals"), "hint1"), "text", $.gm($.get($sc, "rollText"), $.get($sc, "bahasa")));
  }));
      $.set($sc, "i", ($.n($.get($sc, "i")) + 1));
      $b = 1; continue;
    case 3:
      $.sm($.gm($.get($sc, "medals"), "cancel_btn"), "onRelease", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    var t1;
    t1 = $.cm($.get($sc, "medals"), "removeMovieClip", []);
  }));
      $.sm($.get($sc, "medals"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1;
    t1 = $.cf($sc, "efekFade", [$r[1]]);
  }));
      $b = 4; continue;
    case 4: return;
    }
  }));
    $.sm($.get($sc, "credit_btn"), "onRelease", $.fn({"n":"","p":[],"r":3,"f":105}, $sc, function($sc, $this, $args, $r) {
    var t1;
    t1 = $.cm($r[2], "attachMovie", ["window_credit", "credit", 999]);
    $.sm($.get($sc, "credit"), "_x", ($.n($.gm($.get($sc, "Stage"), "width")) / 2));
    $.sm($.get($sc, "credit"), "_y", ($.n($.gm($.get($sc, "Stage"), "height")) / 2));
    $.sm($.get($sc, "credit"), "_alpha", 0);
    $.sm($.gm($.get($sc, "credit"), "inv"), "onRelease", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    $.getURL2("http://belugerinstudios.com", $.get($sc, "_blank"), 0);
  }));
    $.sm($.gm($.get($sc, "credit"), "cancel_btn"), "onRelease", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    var t1;
    t1 = $.cm($.get($sc, "credit"), "removeMovieClip", []);
  }));
    $.sm($.get($sc, "credit"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1;
    t1 = $.cf($sc, "efekFade", [$r[1]]);
  }));
  }));
    $.sm($.get($sc, "moregames_btn"), "onRelease", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    $.getURL2("http://www.ludobox.com", $.get($sc, "_blank"), 0);
  }));
    $.sm($.get($sc, "inv"), "onRelease", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    $.getURL2("http://belugerinstudios.com", $.get($sc, "_blank"), 0);
  }));
    t3 = $.cm($.get($sc, "add_btn"), "gotoAndStop", [($.n($.get($sc, "bahasa")) + 1)]);
    $.sm($.get($sc, "add_btn"), "onRelease", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!$.eq($.get($sc, "bahasa"), 1)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      $.getURL2("http://fr.ludobox.com/gratuit.html", $.get($sc, "_blank"), 0);
      $b = 4; continue;
    case 2:
      $.getURL2("http://www.ludobox.com/free-content.html", $.get($sc, "_blank"), 0);
      $b = 4; continue;
    case 4: return;
    }
  }));
    $.def($sc, "flowerID", 0);
    t4 = $.nw($sc, "Array", []);
    $.def($sc, "flowerList", t4);
    $.def($sc, "bunga", 0);
    $.def($sc, "jamuMode", false);
    $.def($sc, "haveMove", false);
    $.def($sc, "firstWar", false);
    $.def($sc, "firstFlower", false);
    $.def($sc, "firstStrategy", false);
    $.def($sc, "days", 1);
    $.def($sc, "populationMax", 50);
    $.def($sc, "population", 0);
    $.def($sc, "commander", 1);
    $.def($sc, "habisPerang", false);
    $.def($sc, "battleTutorial", true);
    $.def($sc, "kualitasList", [0, "low", "medium", "best"]);
    $.def($sc, "kualitas", [0, false, true, false]);
    $.def($sc, "aktifTombol", true);
    t5 = $.nw($sc, "Array", []);
    $.def($sc, "enemyArmy1", t5);
    t6 = $.nw($sc, "Array", []);
    $.def($sc, "enemyArmy2", t6);
    t7 = $.nw($sc, "Array", []);
    $.def($sc, "enemyArmy3", t7);
    t8 = $.nw($sc, "Array", []);
    $.def($sc, "enemyArmy4", t8);
    t9 = $.nw($sc, "Array", []);
    $.def($sc, "daftarMusuhSerang", t9);
    $.def($sc, "enemyID", 0);
    $.def($sc, "posPengurang", [0, 0, 0, 0, 0]);
    $.def($sc, "posSerang", [0, 0, 0, 0, 0]);
    $.def($sc, "gateName", [0, ["Northern", "Du Nord", "utara"], ["Eastern", "Est", "timur"], ["Southern", "Du sud", "selatan"], ["Western", "Ouest", "barat"]]);
    $.def($sc, "jalurMusuh1", ["North", ["map33"], ["map22", "map23", "map24"], ["map13"], ["mapGate1"], ["mapGate1"], ["mapGate1"], ["mapGate1"], ["mapGate1"]]);
    $.def($sc, "jalurMusuh2", ["East", ["map33"], ["map24", "map34", "map44"], ["map35"], ["mapGate2"], ["mapGate2"], ["mapGate2"], ["mapGate2"], ["mapGate2"]]);
    $.def($sc, "jalurMusuh3", ["South", ["map33"], ["map42", "map43", "map44"], ["map53"], ["mapGate3"], ["mapGate3"], ["mapGate3"], ["mapGate3"], ["mapGate3"]]);
    $.def($sc, "jalurMusuh4", ["West", ["map33"], ["map22", "map32", "map42"], ["map31"], ["mapGate4"], ["mapGate4"], ["mapGate4"], ["mapGate4"], ["mapGate4"]]);
    $.set($sc, "statisticList", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    $.set($sc, "achievementList", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    $.set($sc, "medalsList", [0, 0, 0, 0, 0, 0]);
    $.set($sc, "resourceListDes", [0, "Gold", "Food", "Iron", "Wood"]);
    $.set($sc, "resourceList", [0, 2000, 2000, 2000, 2000]);
    $.set($sc, "resourcePrice", [0, 0, 25, 15, 20]);
    $.set($sc, "weaponPrice", [0, 50, 80, 60, 100, 120]);
    $.set($sc, "weaponList", [0, 20, 15, 25, 8, 10]);
    $.set($sc, "armyList", [0, 20, 20, 20, 15, 15]);
    $.set($sc, "resourceProduce", [0, 0, 0, 0, 0]);
    $.set($sc, "weaponProduce", [0, 0, 0, 0, 0, 0]);
    $.set($sc, "armyProduce", [0, 0, 0, 0, 0, 0]);
    $.set($sc, "armyProduceTot", $.get($sc, "armyProduce"));
    $.def($sc, "rollText", ["roll over to view hint", "Passer le pointeur pour voir l’aide", "arahkan mouse ke obyek untuk menampilkan keterangan"]);
    $.set($sc, "enemyLevDes0", [[6, "Swordman", 1], [2, "Horse Archer", 1]]);
    $.set($sc, "enemyLevDes1", [[10, "Swordman", 1], [5, "Horse Archer", 1]]);
    $.set($sc, "enemyLevDes2", [[15, "Swordman", 2], [10, "Horse Archer", 1], [5, "Gunman", 1]]);
    $.set($sc, "enemyLevDes3", [[15, "Swordman", 2], [15, "Horse Archer", 2], [10, "Gunman", 1]]);
    $.set($sc, "enemyLevDes4", [[20, "Swordman", 2], [20, "Horse Archer", 2], [10, "Gunman", 1], [10, "Spearman", 1]]);
    $.set($sc, "enemyLevDes5", [[20, "Swordman", 2], [20, "Horse Archer", 2], [15, "Gunman", 2], [10, "Spearman", 1]]);
    $.set($sc, "enemyLevDes6", [[20, "Swordman", 2], [20, "Horse Archer", 2], [20, "Gunman", 3], [20, "Spearman", 2], [10, "Spell Caster", 2]]);
    $.set($sc, "enemyLevDes7", [[20, "Swordman", 2], [20, "Horse Archer", 2], [25, "Gunman", 3], [25, "Spearman", 2], [15, "Spell Caster", 2]]);
    t10 = $.nw($sc, "Array", []);
    $.def($sc, "enemyLevDesList", t10);
    $.def($sc, "i", 0);
    $b = 1; continue;
  case 1:
    if (!!$.gt($.get($sc, "i"), 7)) { $b = 3; continue; }
    $b = 2; continue;
  case 2:
    t12 = $.cm($.get($sc, "enemyLevDesList"), "push", [$.gm($.get($sc, "_root"), $.add("enemyLevDes", $.get($sc, "i")))]);
    $.set($sc, "i", ($.n($.get($sc, "i")) + 1));
    $b = 1; continue;
  case 3:
    $.set($sc, "ar0", null);
    $.set($sc, "ar1", ["sharpwolf_army", "Pasukan bersenjata pedang dan pisau terbang", 1, [180, 15, 3, 2], [0, 20, 30, 15, 20]]);
    $.set($sc, "ar2", ["runningbow_army", "Pasukan berkuda bersenjatakan panah", 1, [200, 10, 5, 3], [0, 20, 35, 15, 40]]);
    $.set($sc, "ar3", ["bigbear_army", "Pasukan bersenjata kapak berujung tombak", 1, [180, 15, 3, 2], [0, 20, 40, 15, 20]]);
    $.set($sc, "ar4", ["beautyflower_army", "Pasukan bersenjata senapan", 1, [180, 15, 3, 2], [0, 30, 30, 35, 15]]);
    $.set($sc, "ar5", ["broadeagle_army", "Pasukan sihir bersenjata tongkat sihir", 1, [180, 15, 3, 2], [0, 40, 20, 15, 35]]);
    t11 = $.nw($sc, "Array", []);
    $.def($sc, "armyDescList", t11);
    $.def($sc, "a", 0);
    $b = 4; continue;
  case 4:
    if (!!$.gt($.get($sc, "a"), 5)) { $b = 6; continue; }
    $b = 5; continue;
  case 5:
    t14 = $.cm($.get($sc, "armyDescList"), "push", [$.gm($.get($sc, "_root"), $.add("ar", $.get($sc, "a")))]);
    $.set($sc, "a", ($.n($.get($sc, "a")) + 1));
    $b = 4; continue;
  case 6:
    $.set($sc, "com0", null);
    $.set($sc, "com1", ["sharpwolf", "SHARP WOLF", "Panglima bersenjata pedang dan pisau terbang", 1, [170, 5.5, 4.5, 2], [10, 20, 5, 5], 2]);
    $.set($sc, "com2", ["runningbow", "RUNNING BOW", "Panglima pasukan berkuda bersenjatakan panah", 1, [120, 4.5, 3, 3], [10, 20, 5, 5], 2]);
    $.set($sc, "com3", ["bigbear", "BIG BEAR", "Panglima pasukan bersenjata kapak berujung tombak", 1, [180, 6.5, 3.5, 2], [10, 20, 5, 5], 1]);
    $.set($sc, "com4", ["beautyflower", "BEAUTY FLOWER", "Panglima wanita bersenjata senapan", 1, [80, 4.5, 2, 2], [10, 20, 5, 5], 2]);
    $.set($sc, "com5", ["broadeagle", "BROAD EAGLE", "Panglima sihir bersenjata tongkat sihir", 1, [100, 6.5, 3.5, 3], [10, 20, 5, 5], 3]);
    $.set($sc, "com6", ["greatwinstar", "GREAT WINSTAR", "Panglima sihir bersenjata tongkat sihir", 1, [200, 7, 5, 3], [10, 20, 5, 5], 0]);
    t13 = $.nw($sc, "Array", []);
    $.def($sc, "comList", t13);
    $.def($sc, "a", 0);
    $b = 7; continue;
  case 7:
    if (!!$.gt($.get($sc, "a"), 6)) { $b = 9; continue; }
    $b = 8; continue;
  case 8:
    t16 = $.cm($.get($sc, "comList"), "push", [$.gm($.get($sc, "_root"), $.add("com", $.get($sc, "a")))]);
    $.set($sc, "a", ($.n($.get($sc, "a")) + 1));
    $b = 7; continue;
  case 9:
    $.set($sc, "info0", 0);
    $.set($sc, "info1", ["TOCHO", ["Tocho is a proud warrior of Apache tribe. With his amazing speed and swordsmanship he can utilize the speed of his hands and legs to the limit and beat his opponents down. His agility is second to none. His only weakness is his quick temper; he can easily chase his opponents into the battlefield without thinking much. His sense of justice is the only way to guide him to be the greatest warrior in his tribe. His army consists of swordsmen.", "Tocho est un fier guerrier de la tribu des Apaches. Il peut battre ses adversaires grâce à sa grande habileté au poignard et à une rapidité d’exécution étonnante. Son agilité n’a pas d’égale. Sa seule faiblesse est son impatience, il lui arrive de se lancer à la poursuite de ses adversaires sans réfléchir. C’est son sens aigu de la justice qui l’a conduit à devenir le plus grand guerrier de sa tribu. Ses hommes sont armés de poignards.", "Tocho adalah prajurit kebanggaan suku Apache. Dengan kecepatan dan keahlian berpedangnya, dia dapat menggunakan kecepatan lengan dan kakinya hingga ke ambang batas kemampuan dan mengalahkan musuhnya. Kelincahannya tidak ada yang menandingi. Satu satunya kelemahannya adalah terlalu mudah naik darah; dia dapat dengan mudah mengejar musuhnya ke tengah medan perang tanpa berpikir panjang. Naluri membela keadilannya adalah satu-satunya jalan yang membimbingnya menjadi salah satu pejuang terhebat dalam sukunya. Pasukannya terdiri dari para prajurit berpedang."], ["male", "homme", "pria"], 27]);
    $.set($sc, "info2", ["CHEVEYO", ["Cheveyo is a natural hunter. Since he was a child he has been gifted with an amazing sense of smell and hearing. His eyes are also extraordinarily sharp among his peers. He is Otoahnacto's best childhood friend, although they often act as rivals. This rivalry has Cheveyo always on the lookout for better skills and achievements in battle. Despite the rivalry, Cheveyo is loyal to the village and will defend it until the end with his trusty bow. His army consists of bowmen.", "Cheveyo est un chasseur né. Depuis l’enfance, il est doté d’un odorat et d’une ouïe remarquables. Sa vue est également plus acérée que la moyenne. Il est le meilleur ami d’enfance de Otoahnacto, bien qu’ils soient souvent rivaux. Cette rivalité pousse Cheveyo à toujours chercher à améliorer ses compétences et à combattre avec habileté. Et malgré cette rivalité, Cheveyo est fidèle au village et le défendra jusqu’au bout avec son arc. Sa troupe est composée d’archers.", "Cheveyo adalah pemburu alami. Sejak kecil dia telah dianugerahi dengan naluri yang luar biasa dalam hal pendengaran dan penciuman. Kedua belah matanya juga luar biasa tajam dibandingkan tekan-rekannya. Dia adalah teman baik Otoahnacto, meskipun mereka sering juga bersaing sebagai rival. Persaingan ini membuat cheveyo selalu mencari pencapaian dan keahlian yang lebih baik dalam pertempuran. Disamping persaingan itu, Cheveyo sangat setia terhadap desanya dan akan mempertahankannya hingga akhir bersama dengan Busur dan anak panah yang dia percayai. Pasukannya terdiri dari pemanah."], ["male", "homme", "pria"], 32]);
    $.set($sc, "info3", ["OTOAHNACTO", ["Otoahnacto is one of the greatest, strongest men in his tribe's history. He has beaten the legendary Grizzly Bear with his bare hands in a one-on-one battle. His massive figure makes him stand tall in the battlefield like the Rocky Mountains, and he beats his opponents like ragdolls with his great axe. As one of the 5 Apache Warlords he bears the mark of the Bear, the sign of the power of the wild. He combines his natural strengths with Cheveyo the hunter to increase the efficacy of their guerilla tactics in the battlefield. His army consists of spearmen.", "Otoahnacto est un des hommes les plus grands et les plus forts dans toute l’histoire de la tribu. Il est sorti vainqueur d’un combat à mains nues contre le légendaire Ours Grizzly. Sur le champ de bataille, on repère de loin sa silhouette massive, comme les Montagnes Rocheuses au-dessus des grandes plaines, et avec son immense hache il renverse ses adversaires comme des poupées de chiffons. En tant qu’un des 5 chefs de guerre apaches, il porte la marque de l’Ours, symbole de la puissance sauvage. Il combine sa force naturelle avec les qualités de chasseur de Cheveyo pour augmenter l’efficacité des tactiques de guérilla. Ses hommes sont armés de lances.", "Otoahnacto adalah manusia yang terkuat dalam sejarah sukunya. Dia telah mengalahkan beruang Grizzly yang legendaris hanya dengan tangan kosong dalam pertarungan satu lawan satu. Perawakannya yang tinggi besar membuatnya menonjol di dalam medan pertempuran, dan dia dapat dengan mudah mengalahkan musuhnya seperti boneka jerami dengan Kapak Besarnya. Sebagai satu dari 5 panglima perang Apache dia memiliki tanda totem Beruang, simbol dari kekuatan alam liar. Dia memadukan kekuatan alaminya bersama Cheveyo si pemburu dan meningkatkan efisiensi taktik gerilya mereka di medan pertempuran. Pasukannya terdiri dari tentara bertombak."], ["male", "homme", "pria"], 35]);
    $.set($sc, "info4", ["NIDAWI", ["Nidawi is the youngest warrior and the only female of her compatriots. Her beauty is her deadliest weapon, although her calm nature and gentle gestures assure her opponents never realize how dangerous she is until it is too late. The long rifle is her best friend in battle, but outside the battlefield she lives an ordinary life as Tocho's beloved little sister. She is his opposite in personality, always counting her steps and predicting the outcome of her actions far into the future. Her army consists of gunmen.", "Nidawi est la plus jeune et la seule femme parmi les guerriers. Sa beauté est son arme la plus meurtrière, bien que sa nature calme et ses gestes doux ne laissent pas ses adversaires soupçonner combien elle est dangereuse avant qu’il ne soit trop tard. Au combat, son fusil est son meilleur ami, mais en dehors du champ de bataille elle mène une vie ordinaire, en tant que petite sœur adorée de Tocho. Sa personnalité est à l’opposé de celle de son frère, elle avance à pas comptés et envisage toujours les conséquences de ses actes sur le long terme. Ses troupes sont armées de fusils.", "Nidawi adalah pejuang termuda dan sekaligus satu satunya wanita diantara rekan-rekan panglima perangnya. Kecantikannya adalah senjata mematikan, meskipun kelemah lembutannya membuat lawannya tidak pernah menyadari betapa berbahayanya dia sampai terlambat. Senapan adalah rekan terpercayanya dalam pertempuran, tetapi diluar medan tempur dia menjalani kehidupan biasanya sebagai adik tercinta dari Tocho. Nidawi memiliki sikap yang berlawanan dengan kakaknya, selalu memperhitungkan langkahnya dan memprediksi hasil dari aksinya jauh kedepan. Pasukannya terdiri dari para penembak."], ["female", "femmme", "wanita"], 23]);
    $.set($sc, "info5", ["KACHADA", ["Kachada is the Elder of the Apache tribe and one of their 5 Warlords. He is the oldest and wisest man of the tribe, and holder of their secret magic. His knowledge of nature is very vast, and has helped his tribe survive the harsh savage land. He foresaw the bad omens of the invasion long before it actually began, and warned other villages of the threat. Not many believed his vision, and so they fell to the invaders. He is the only one who can pick the legendary magic flowers that grow rarely in the village area. His army consists of spellcasters.", "Kachada est le doyen de la tribu Apache et l’un de ses 5 chefs de guerre. Il est l’homme le plus âgé et le plus sage de la tribu, et aussi le détenteur des secrets de la Magie. Il a une excellente connaissance de la nature, qui a permis à sa tribu de survivre dans un environnement très dur. Il a su prédire les ravages de l’invasion bien avant qu’elle n’ait lieu et a prévenu les autres villages du danger. Très peu ont cru à ses visions, et tous ont été vaincus par les envahisseurs. Il est le seul à pouvoir cueillir les légendaires fleurs magiques qui poussent parfois autour du village. Son armée est composée de sorciers.", "Kachada adalah tetua dari suku Apache dan salah satu dari 5 panglima perang mereka.  Dia adalah yang tertua dan paling bijaksana di dalam sukunya, dan pewaris ilmu sihir rahasia suku mereka. Pengetahuannya tentang alam amat luas, dan telah membantu sukunya bertahan dari kejamnya dataran liar. Dia telah melihat pertanda invasi jauh sebelum terjadi, dan telah memperingatkan penduduk desa yang lain. Tidak banyak yang percaya,  dan maka jatuhlah mereka ke tangan para penjajah. Kachada adalah satu-satunya yang bisa mengambil bunga ajaib yang legendaris yang sangat jarang tumbuh di area desa mereka. Pasukannya terdiri dari para Penyihir."], ["male", "homme", "pria"], 72]);
    $.set($sc, "info6", ["WAMBLEESKA", ["Wambleeska is the Chief of the Apache tribe. He is not as old as Kachada the wizard, but his vast knowledge and balanced skills in battle make him a dangerous opponent. The invasion of the foreigners has forced him to fiercely defend his village. He has a strong will, handed down from his ancestors, that no one will be allowed to take their freedom away.", "Wambleeska est le chef de la tribu Apache. Il n’est pas aussi âgé que le sorcier Kachada, mais l’étendue de son savoir et l’équilibre de ses compétences au combat en font un adversaire redoutable. L’invasion l’a amené à défendre farouchement son village. Il a une volonté de fer, qui lui vient de ses ancêtres, et il ne laissera personne réduire son peuple en esclavage.", "Wambleeska adalah kepala suku Apache. Tidak setua Kachada si Penyihir, namun pengetahuannya yang luas dan keahliannya yang merata di berbagai bidang dalam perang membuatnya lawan yang berbahaya. Invasi dari para orang asing telah memaksanya mempertahankan desanya dengan gagah berani. Kemauannya yang kuat berasal turun temurun dari nenek moyangnya, dan selalu menekankan bahwa tiada seorangpun yang bisa merebut kemerdekaan mereka."], ["male", "homme", "pria"], 53]);
    t15 = $.nw($sc, "Array", []);
    $.def($sc, "comInfo", t15);
    $.def($sc, "i", 0);
    $b = 10; continue;
  case 10:
    if (!!$.gt($.get($sc, "i"), 6)) { $b = 12; continue; }
    $b = 11; continue;
  case 11:
    t18 = $.cm($.get($sc, "comInfo"), "push", [$.gm($.get($sc, "_root"), $.add("info", $.get($sc, "i")))]);
    $.set($sc, "i", ($.n($.get($sc, "i")) + 1));
    $b = 10; continue;
  case 12:
    $.set($sc, "comLoc", [0, 32, 23, 43, 34, 33, 33]);
    $.set($sc, "comLocBaru", [0, 32, 23, 43, 34, 33, 33]);
    $.set($sc, "des0", ["pusat_desa", ["Center command in The Last Village increases the commanders' attack and defense and supports more population.", "Le centre de commandement dans le Dernier Village améliore les capacités d’attaque et de défense des chefs, et permet d’augmenter la population.", "Pusat desa tempat mengatur desa, meningkatkan kekuatan pasukan dan meningkatkan jumlah populasi maksimal"], [undefined, 0, 0, 0, 0], [0, 500, 500, 500, 500], ["TOWN CENTER", "CENTRE VILLE", "PUSAT DESA"], 100]);
    $.set($sc, "des1", ["sawmill", ["Wood cutters produce wood every turn to allow more building", "Les bûcherons produisent du bois à chaque tour pour permettre la construction de bâtiments.", "Tempat mencari kayu untuk membuat bahan bangunan"], [undefined, 0, 0, 0, 60], [0, 80, 250, 200, 0], ["SAWMIll", "Scierie", "PENEBANG KAYU"]]);
    $.set($sc, "des2", ["tower", ["Part of the fortification is equipped with a place to shoot arrows from within. This is one of the main defense features", "Cet élément de fortification est équipé de meurtrières pour pouvoir tirer à l’arc en restant protégé. C’est un des principaux ouvrages défensifs.", "Bangunan pertahanan dengan pemanah untuk membantu bertahan dari serangan musuh"], [undefined, 0, 0, 0, 0], [0, 120, 250, 300, 200], ["WATCH TOWER", "Tour de guet", "MENARA PENGAWAS"]]);
    $.set($sc, "des3", ["blacksmith", ["Blacksmiths produce things like weapons and armor", "Les forgerons fabriquent des armes et des armures.", "Pandai besi tempat produksi senjata dan pakaian pelindung"], [undefined, 0, 0, 0, 0], [0, 180, 200, 300, 180], ["BLACKSMITH", "Forgeron", "PANDAI BESI"]]);
    $.set($sc, "des4", ["kios_hasilBumi", ["The market is the place to sell resource and collect taxes, increasing your gold", "Le marché est l’endroit où vous pouvez vendre des armes et collecter des taxes, de façon à augmenter le nombre de vos pièces d’or.", "Pasar tempat jual beli sumber daya, meningkatkan pendapatan emas"], [undefined, 30, 0, 0, 0], [0, 50, 80, 100, 250], ["MARKET", "Marché", "PASAR"]]);
    $.set($sc, "des5", ["kios_senjata", ["The market is the place to sell weapon and collect taxes, increasing your gold", "Le marché est l’endroit où vous pouvez vendre des armes et collecter des taxes, de façon à augmenter le nombre de vos pièces d’or.", "Pasar tempat jual beli senjata, meningkatkan pendapatan emas"], [undefined, 30, 0, 0, 0], [0, 75, 200, 100, 220], ["WEAPON SELLER", "Armurerie", "PENJUAL SENJATA"]]);
    $.set($sc, "des6", ["sawah", ["An area of land, including various structures, devoted primarily to the practice of producing and managing food", "Une étendue de terrain, comportant diverses structures, consacrée principalement à la production de nourriture.", "Sawah untuk menanam dan mencari makanan"], [undefined, 0, 30, 0, 0], [0, 50, 0, 150, 150], ["FARM", "Ferme", "SAWAH"]]);
    $.set($sc, "des7", ["peternakan", ["A place to breed animals for food supplies.", "Un endroit où on élève des animaux destinés à la boucherie.", "Peternakan untuk mencari makanan"], [undefined, 0, 30, 0, 0], [0, 70, 0, 100, 180], ["BARN", "Grange", "PETERNAKAN"]]);
    $.set($sc, "des8", ["pelabuhan", ["A fishing place and source of fish for food", "Un lieu de pêche pour se nourrir de poissons.", "Tempat memancing dan mencari ikan"], [undefined, 0, 40, 0, 0], [0, 100, 0, 120, 250], ["HARBOUR", "Port", "PELABUHAN"]]);
    $.set($sc, "des9", ["iron_mine", ["Gather iron from the mine to create weapons", "Exploitez la mine pour en tirer du fer qui servira à fabriquer des armes.", "Tempat mencari besi untuk membuat senjata"], [undefined, 0, 0, 60, 0], [0, 150, 150, 0, 200], ["IRON MINE", "Mine de fer", "TAMBANG BESI"]]);
    $.set($sc, "des10", ["barrack", ["A training place used to train fighters and armies, increase attack, and support more population.", "Un centre d’entraînement pour aguerrir les combattants, améliorer leur potentiel d’attaque, et loger plus de population.", "Tempat melatih pasukan, meningkatkan serangan, dan meningkatkan jumlah populasi"], [undefined, 0, 0, 0, 0], [0, 200, 400, 300, 100], ["BARRACK", "Caserne", "BARAK"], 25]);
    $.set($sc, "des11", ["tenda", ["A place to live, supports more population", "Un type d’habitation qui permet loger plus de population.", "tempat tinggal, meningkatkan jumlah populasi maksimal"], [undefined, 0, 0, 0, 0], [0, 80, 200, 100, 100], ["TENT", "Tente", "TENDA"], 50]);
    $.set($sc, "des12", ["temple", ["Increases the morale and defense power of the army in battle", "Améliore le moral des troupes et leur capacité de défense pendant la bataille.", "meningkatkan moral dan pertahanan pasukan saat bertempur"], [undefined, 0, 0, 0, 0], [0, 500, 500, 500, 500], ["TEMPLE", "Temple", "KUIL"]]);
    t17 = $.nw($sc, "Array", []);
    $.def($sc, "desList", t17);
    $.def($sc, "a", 0);
    $b = 13; continue;
  case 13:
    if (!!$.gt($.get($sc, "a"), 12)) { $b = 15; continue; }
    $b = 14; continue;
  case 14:
    t20 = $.cm($.get($sc, "desList"), "push", [$.gm($.get($sc, "_root"), $.add("des", $.get($sc, "a")))]);
    $.set($sc, "a", ($.n($.get($sc, "a")) + 1));
    $b = 13; continue;
  case 15:
    $.set($sc, "objectMap1", [[0, $.gm($.gm($.get($sc, "desList"), 8), 0), 8]]);
    $.set($sc, "objectMap2", [[0, $.gm($.gm($.get($sc, "desList"), 1), 0), 1], [0, $.gm($.gm($.get($sc, "desList"), 8), 0), 8]]);
    $.set($sc, "objectMap3", [[0, $.gm($.gm($.get($sc, "desList"), 2), 0), 2]]);
    $.set($sc, "objectMap4", [[0, $.gm($.gm($.get($sc, "desList"), 6), 0), 6], [0, $.gm($.gm($.get($sc, "desList"), 7), 0), 7]]);
    $.set($sc, "objectMap5", [[0, $.gm($.gm($.get($sc, "desList"), 6), 0), 6], [0, $.gm($.gm($.get($sc, "desList"), 7), 0), 7]]);
    $.set($sc, "objectMap6", [[0, $.gm($.gm($.get($sc, "desList"), 9), 0), 9]]);
    $.set($sc, "objectMap7", [[1, $.gm($.gm($.get($sc, "desList"), 1), 0), 1], [0, $.gm($.gm($.get($sc, "desList"), 11), 0), 11]]);
    $.set($sc, "objectMap8", [[0, $.gm($.gm($.get($sc, "desList"), 2), 0), 2], [0, $.gm($.gm($.get($sc, "desList"), 10), 0), 10], [0, $.gm($.gm($.get($sc, "desList"), 11), 0), 11]]);
    $.set($sc, "objectMap9", [[0, $.gm($.gm($.get($sc, "desList"), 4), 0), 4], [0, $.gm($.gm($.get($sc, "desList"), 11), 0), 11]]);
    $.set($sc, "objectMap10", [[1, $.gm($.gm($.get($sc, "desList"), 9), 0), 9]]);
    $.set($sc, "objectMap11", [[0, $.gm($.gm($.get($sc, "desList"), 2), 0), 2]]);
    $.set($sc, "objectMap12", [[0, $.gm($.gm($.get($sc, "desList"), 2), 0), 2], [0, $.gm($.gm($.get($sc, "desList"), 10), 0), 10], [0, $.gm($.gm($.get($sc, "desList"), 11), 0), 11]]);
    $.set($sc, "objectMap13", [[1, $.gm($.gm($.get($sc, "desList"), 0), 0), 0], [0, $.gm($.gm($.get($sc, "desList"), 3), 0), 3], [0, $.gm($.gm($.get($sc, "desList"), 12), 0), 12]]);
    $.set($sc, "objectMap14", [[0, $.gm($.gm($.get($sc, "desList"), 2), 0), 2], [0, $.gm($.gm($.get($sc, "desList"), 10), 0), 10], [0, $.gm($.gm($.get($sc, "desList"), 11), 0), 11]]);
    $.set($sc, "objectMap15", [[0, $.gm($.gm($.get($sc, "desList"), 2), 0), 2]]);
    $.set($sc, "objectMap16", [[0, $.gm($.gm($.get($sc, "desList"), 9), 0), 9]]);
    $.set($sc, "objectMap17", [[0, $.gm($.gm($.get($sc, "desList"), 5), 0), 5], [0, $.gm($.gm($.get($sc, "desList"), 11), 0), 11]]);
    $.set($sc, "objectMap18", [[0, $.gm($.gm($.get($sc, "desList"), 2), 0), 2], [0, $.gm($.gm($.get($sc, "desList"), 10), 0), 10], [0, $.gm($.gm($.get($sc, "desList"), 11), 0), 11]]);
    $.set($sc, "objectMap19", [[0, $.gm($.gm($.get($sc, "desList"), 1), 0), 1], [0, $.gm($.gm($.get($sc, "desList"), 11), 0), 11]]);
    $.set($sc, "objectMap20", [[0, $.gm($.gm($.get($sc, "desList"), 9), 0), 9]]);
    $.set($sc, "objectMap21", [[1, $.gm($.gm($.get($sc, "desList"), 6), 0), 6], [0, $.gm($.gm($.get($sc, "desList"), 7), 0), 7]]);
    $.set($sc, "objectMap22", [[0, $.gm($.gm($.get($sc, "desList"), 6), 0), 6], [0, $.gm($.gm($.get($sc, "desList"), 7), 0), 7]]);
    $.set($sc, "objectMap23", [[0, $.gm($.gm($.get($sc, "desList"), 2), 0), 2]]);
    $.set($sc, "objectMap24", [[0, $.gm($.gm($.get($sc, "desList"), 1), 0), 1], [0, $.gm($.gm($.get($sc, "desList"), 8), 0), 8]]);
    $.set($sc, "objectMap25", [[0, $.gm($.gm($.get($sc, "desList"), 8), 0), 8]]);
    t19 = $.nw($sc, "Array", []);
    $.def($sc, "objectMapAll", t19);
    $.def($sc, "o", 0);
    $b = 16; continue;
  case 16:
    if (!$.lt($.get($sc, "o"), $.gm($.get($sc, "desList"), "length"))) { $b = 18; continue; }
    $b = 17; continue;
  case 17:
    t22 = $.cm($.get($sc, "objectMapAll"), "push", [$.gm($.gm($.get($sc, "desList"), $.get($sc, "o")), 0)]);
    $.set($sc, "o", ($.n($.get($sc, "o")) + 1));
    $b = 16; continue;
  case 18:
    $.def($sc, "trapEnable", [0, [0, 13], [0, 22], [0, 23], [0, 24], [0, 31], [0, 32], [0, 33], [0, 34], [0, 35], [0, 42], [0, 43], [0, 44], [0, 53]]);
    $.def($sc, "trapPrice", [0, 150, 150, 150, 150]);
    $.set($sc, "townEco0", 0);
    $.set($sc, "townEco1", [["FAIR TRADING", "Commerce équitable", "PERDAGANGAN ADIL"], ["Reduce resource prices when trading at the market", "Réduit le prix des ressources au marché.", "Mengurangi harga penjualan sumber daya di pasar"]]);
    $.set($sc, "townEco2", [["TAXES", "Taxes", "PAJAK"], ["Increase gold production per turn if you have any marketable items", "Augmente la production d’or à chaque tour si vous avez des denrées négociables.", "Meningkatkan produksi emas tiap putaran untuk setiap pasar"]]);
    $.set($sc, "townEco3", [["IRRIGRATION SYTEM", "Système d'irrigation", "SISTIM IRIGRASI"], ["Increase food production per turn", "Augmente la production de nourriture à chaque tour.", "Meningkatkan produksi makanan tiap putaran"]]);
    $.set($sc, "townEco4", [["TOOLS REFINE", "Outils", "PENGEMBANGAN ALAT"], ["Increase iron production per turn", "Augmente la production de fer à chaque tour.", "Meningkatkan produksi besi tiap putaran"]]);
    t21 = $.nw($sc, "Array", []);
    $.def($sc, "townEcoDes", t21);
    $.def($sc, "eco", 0);
    $b = 19; continue;
  case 19:
    if (!!$.gt($.get($sc, "eco"), 4)) { $b = 21; continue; }
    $b = 20; continue;
  case 20:
    t24 = $.cm($.get($sc, "townEcoDes"), "push", [$.gm($.get($sc, "_root"), $.add("townEco", $.get($sc, "eco")))]);
    $.set($sc, "eco", ($.n($.get($sc, "eco")) + 1));
    $b = 19; continue;
  case 21:
    $.set($sc, "townMil0", 0);
    $.set($sc, "townMil1", [["ARMORY", "Arsenal", "GUDANG SENJATA"], ["Increase army's defense", "Améliore la capacité de défense de l’armée.", "Meningkatkan pertahanan pasukan"]]);
    $.set($sc, "townMil2", [["TRAINING", "Entrainement", "PELATIHAN"], ["Increase army's life point", "Augmente les points de vie de l’armée.", "Meningkatkan nyawa pasukan"]]);
    $.set($sc, "townMil3", [["OUTPOST", "Avant-poste", "POS PENGINTAI"], ["Increase tower and building attack", "Améliore la capacité d’attaque des tours et des bâtiments.", "Meningkatkan serangan bangunan dan menara"]]);
    $.set($sc, "townMil4", [["CONSTRUCTIVE BUILD", "Constructions", "PEMBANGUNAN"], ["Increase tower and building defense", "Améliore la capacité de défense des tours et des bâtiments.", "Meningkatkan pertahanan bangunan dan menara"]]);
    t23 = $.nw($sc, "Array", []);
    $.def($sc, "townMilDes", t23);
    $.def($sc, "eco", 0);
    $b = 22; continue;
  case 22:
    if (!!$.gt($.get($sc, "eco"), 4)) { $b = 24; continue; }
    $b = 23; continue;
  case 23:
    t26 = $.cm($.get($sc, "townMilDes"), "push", [$.gm($.get($sc, "_root"), $.add("townMil", $.get($sc, "eco")))]);
    $.set($sc, "eco", ($.n($.get($sc, "eco")) + 1));
    $b = 22; continue;
  case 24:
    $.set($sc, "townSpe0", 0);
    $.set($sc, "townSpe1", [["PICK POCKET", "Pillage", "TRIK COPET"], ["Increase the gold you get after winning a battle by 10%", "Augmente de 10% la quantité d’or que vous recevez après avoir gagné une bataille.", "Meningkatkan pendapatan emas dari hasil rampokan sebesar 10%"]]);
    $.set($sc, "townSpe2", [["AMBUSH", "Embuscade", "PENYERGAPAN"], ["Increase trap efficacy", "Améliore l’efficacité des pièges.", "Meningkatkan efektifitas perangkap"]]);
    $.set($sc, "townSpe3", [["WE ARE AT WAR", "Etat de guerre", "SITUASI PERANG"], ["Increase army's reloading at battle", "Augmente la cadence de tir au combat.", "Mempercepat proses pembuatan pasukan saat battle"]]);
    $.set($sc, "townSpe4", [["PLENTY VAULT", "CORNE D'ABONDANCE", "GUDANG KEKAYAAN"], ["Produce more resources per turn", "Produit plus de ressources par tour", "Memproduksi sumber daya persediaan berlebih tiap putaran"]]);
    t25 = $.nw($sc, "Array", []);
    $.def($sc, "townSpeDes", t25);
    $.def($sc, "eco", 0);
    $b = 25; continue;
  case 25:
    if (!!$.gt($.get($sc, "eco"), 4)) { $b = 27; continue; }
    $b = 26; continue;
  case 26:
    t28 = $.cm($.get($sc, "townSpeDes"), "push", [$.gm($.get($sc, "_root"), $.add("townSpe", $.get($sc, "eco")))]);
    $.set($sc, "eco", ($.n($.get($sc, "eco")) + 1));
    $b = 25; continue;
  case 27:
    $.set($sc, "townEcoStat", [0, 0, 0, 0, 0]);
    $.set($sc, "townMilStat", [0, 0, 0, 0, 0]);
    $.set($sc, "townSpeStat", [0, 0, 0, 0, 0]);
    $.set($sc, "townEcoPrice", [0, [0, 500, 520, 650, 580], [0, 200, 500, 400, 600], [0, 300, 650, 550, 800], [0, 350, 600, 650, 700]]);
    $.set($sc, "townMilPrice", [0, [0, 300, 500, 650, 720], [0, 400, 620, 500, 500], [0, 250, 400, 800, 750], [0, 350, 500, 720, 800]]);
    $.set($sc, "townSpePrice", [0, [0, 500, 1200, 1000, 1000], [0, 400, 900, 800, 1000], [0, 500, 900, 950, 1000], [0, 800, 1000, 1000, 1000]]);
    $.set($sc, "temp0", 0);
    $.set($sc, "temp1", [["SWORD", "EPEE", "PEDANG"], ["Upgrade throwing-knife to swordsman", "Passer du lanceur de couteaux au fantassin.", "Meningkatkan pelempar pisau menjadi pasukan pedang"]]);
    $.set($sc, "temp2", [["FIRE ARROW", "FLECHE DE FEU", "PANAH API"], ["Upgrade normal arrow to fire arrow", "Passer des flèches normales aux flèches enflammées", "Meningkatkan pasukan pemanah menjadi pasukan pemanah api"]]);
    $.set($sc, "temp3", [["AXE", "AXE", "KAPAK"], ["Upgrade spearman to halberdier", "Passer du lancier au hallebardier", "Meningkatkan pasukan bertombak menjadi pasukan berkapak"]]);
    $.set($sc, "temp4", [["LONG GUN", "FUSIL", "SENAPAN LARAS PANJANG"], ["Upgrade pistol to gun", "Passer du pistolet au fusil", "Meningkatkan pasukan senapan laras pendek menjadi pasukan senapan laras panjang"]]);
    $.set($sc, "temp5", [["STAFF", "BATON MAGIQUE", "TONGKAT SIHIR"], ["Upgrade wizard to high wizard with staff", "Passer du sorcier au grand sorcier avec bâton.", "Meningkatkan pasukan dukun menjadi pasukan tongkat sihir"]]);
    t27 = $.nw($sc, "Array", []);
    $.def($sc, "tempList", t27);
    $.def($sc, "eco", 0);
    $b = 28; continue;
  case 28:
    if (!!$.gt($.get($sc, "eco"), 5)) { $b = 30; continue; }
    $b = 29; continue;
  case 29:
    t30 = $.cm($.get($sc, "tempList"), "push", [$.gm($.get($sc, "_root"), $.add("temp", $.get($sc, "eco")))]);
    $.set($sc, "eco", ($.n($.get($sc, "eco")) + 1));
    $b = 28; continue;
  case 30:
    $.set($sc, "tempStat", [0, 0, 0, 0, 0, 0]);
    $.set($sc, "tempPrice", [0, [0, 700, 1200, 1000, 1000], [0, 650, 1000, 1000, 1200], [0, 700, 1000, 1200, 1000], [0, 750, 1000, 1200, 1000], [0, 750, 1000, 1000, 1200]]);
    $.set($sc, "tipsList", [["Build more barracks. Each barrack increases your army's attack.", "Construisez plus de casernes. Chaque caserne augmente le potentiel d’attaque de votre armée.", "Bangunlah banyak barrack. Setiap barrack yg kamu punya meningkatkan serangan pasukan kamu"], ["A commander's special ability is a really powerful and useful skill when used at the right time.", "La capacité spéciale d’un chef est un outil très puissant et très utile quand elle est employée au bon moment.", "Kekuatan special para panglima sangatlah kuat dan berguna jika digunakan disaat yg tepat"], ["Build and upgrade your tower, it will really help your battle.", "Construisez et améliorez votre tour de guet, elle vous sera très utile pour les batailles.", "Bangun dan tingkatkan tower, karena akan sangat membantu dalam pertempuran"], ["Your army will steal the enemy's gold when they reach the enemy's base in every battle.", "Votre armée récupérera l’or de l’ennemi à chaque fois qu’elle prendra la base adverse dans une bataille.", "Pasukanmu akan merampas gold musuh ketika mereka mencapai base musuh dalam pertempuran"], ["Collect gold resource from selling weapons or another resource at the market.", "Gagnez des pièces d’or en vendant des armes ou toute autre ressource sur le marché.", "Kumpulkan gold dengan jual belu senjata atau bahan makanan di pasar"], ["Upgrade your army's class level in the temple, it increases your army's strength and stolen gold.", "Améliorez le niveau de votre armée au temple, cela permet d’augmenter sa force et la quantité d’or volé.", "Tingkatkan classlevel pasukan kamu di temple, itu akan meningkatkan kekuatan pasukanmu"], ["Enemies will destroy your buildings when they pass the village.", "L’ennemi détruit tous les bâtiments d’un village quand il le traverse.", "Pasukan musuh akan menghancurkan bangunan-bangunan yg dilewatinya di desa"], ["Town centers can upgrade economy, military, and special abilities of village.", "Un centre-ville peut améliorer l’économie, la force militaire et les capacités spéciales d’un village.", "Pusat desa dapat meningkatkan ekonomi, militer, dan kekuatan special yg dimiliki desa"], ["Manufacturing weapons at the blacksmith is cheaper than buying them at the weapons market.", "Fabriquer des armes chez un forgeron coûte moins cher que les acheter sur le marché.", "Membuat senjata di blacksmith lebih murah daripada membeli di penjual senjata"], ["Fighting with more than 2 commanders will allow more possibilities to win, because there are more troops to fight.", "Engager le combat avec plus de 2 chefs augmente les chances de succès, car cela permet de combattre avec plus de troupes.", "Bertempur dengan lebih dari 2 panglima akan lebih memungkinkan untuk menang, karena akan lebih banyak pasukan yg maju"], ["If you have only a small possibility to win, a retreat is suggested to minimize the loss.", "Si vous avez peu de chances de gagner un combat, il est conseillé de battre en retraite pour minimiser les pertes.", "Jika pertempuran tidak memungkinkan menang, lebih baik mundur agar tidak banyak pasukan yg tewas"], ["Upgrade temple to increase attack and defense for all commander", "Améliorer le temple pour augmenter le potentiel d’attaque et de défense de tous les chefs", "Upgrade temple untuk meningkatkan kekuatan para panglima"]]);
    $.set($sc, "achievementStory", [0, ["Warbonnets\n\nWarbonnets or headdresses were one of the magical charms worn by Plains Indians in battle. The eagle was considered as the greatest and most powerful of all birds and thus, the finest bonnets were made out of eagle feathers. A chief's war bonnet is made of the feathers he has received for good deeds to his community and is worn in high honor. A warrior's war bonnet, such as the famous war bonnet of Roman Nose, the Cheyenne warrior, served to protect him during battle. In several instances Roman Nose, wearing his war bonnet, rode back and forth before soldiers of the United States Army during battles of the Indian Wars and despite many shots, was never hit.", "Coiffure de guerre\n\nles coiffures de guerre ou bonnets de guerre faisaient partie des accessoires magiques portés au combat par les Indiens des plaines. L’aigle étant considéré comme le plus grand et le plus puissant des oiseaux, les bonnets les plus précieux étaient confectionnés avec des plumes d’aigle. Le bonnet de guerre d’un chef est composé des plumes qu’il a reçues pour son action bénéfique envers sa tribu, et c’est un grand honneur de le porter. Le bonnet de guerre d’un combattant, comme celui du guerrier Cheyenne Roman Nose, sert aussi à le protéger pendant la bataille. A plusieurs reprises, pendant les guerres indiennes, Roman Nose passa et repassa au galop devant les lignes des soldats de l’US Army, et bien qu’il ait essuyé de nombreux tirs ennemis, il ne fut jamais touché.", "Warbonnets\n\nTopi Indian atau hiasan kepala khas Indian adalah salah satu simbol magis yang dikenakan oleh Indian dataran rendah dalam pertempuran. Elang dianggap sebagai burung yang paling kuat dan hebat, maka dari itu hiasan kepala indian yang paling bagus dibuat dari bulu elang. Hiasan Bulu untuk kepala suku dibuat dari bulu-bulu yang diterimanya dari perbuatan baiknya terhadap rakyatnya dan di pakai  untuk kehormatan yang tinggi. Hiasan bulu untuk pejuang, seperti yang digunakan oleh Roman Nose, pejuang Cheyenne, bertujuan untuk melindungi dia sepanjang perang. Dalam beberapa kejadian, Roman Nose, dengan memakai hiasan bulu, berkeliaran diantara serdadu Amerika sepanjang perang Indian dan meski seharusnya tertembak oleh banyak peluru, dia tidak pernah tertembak."], ["Bear tooth\n\nBear teeth are usually worn as necklaces, pendants, or amulets. They sometimes acted as proof of bravery for the youngsters in the tribe.", "Dent d’ours\n\nLes dents d’ours étaient généralement portées en colliers, pendentifs ou amulettes. Elles étaient parfois considérées comme une preuve de bravoure pour les jeunes de la tribu.", "Gigi beruang\n\nBiasa digunakan sebagai bagian dari kalung, liontin atau amulet/jimat. Kadang berlaku sebagai bukti keberanian para pemuda (bagian dari ujian kedewasaan) di dalam suku."], ["Skull\n\nUsually used for ritual purpose by some Indian tribes. Not many Indian tribes used human skulls for their rituals", "Crâne\n\nUtilisé principalement pour des rituels par quelques tribus indiennes. Peu d’entre elles utilisaient des crânes humains pour leurs rituels.", "Tengkorak \n\nBiasanya digunakan untuk tujuan ritual oleh beberapa suku Indian. Tidak banyak suku Indian yang menggunakan tengkorak manusia untuk ritual mereka."], ["Bone Bracelet\n\nParts of the Native American jewelry made from bone or jade, sometimes made from buffalo bones", "Bracelet en os\n\nUne grande partie des bijoux amérindiens était à base d’os ou de jade, parfois d’os de bison.", "Gelang Tulang\n\nBagian dari perhiasan suku Indian asli Amerika, perhiasan yang dibuat dari tulang atau bebatuan mulia, sering juga dibuat dari tulang bison."], ["Indian Flute\n\nThe Native American flute was originally very personal; its music was played without accompaniment in courtship, healing, meditation, and spiritual rituals. Native American flutes can be made from various materials. Juniper, Redwood, and Cedar are popular, as they provide a nice aroma. There are two different types of Native American flute, the plains flute and the woodlands flute, each with slightly different construction.", "Flûte indienne\n\nl’usage de la flûte amérindienne était à l’origine très individuel. On jouait de la flûte pour faire la cour, pendant les rituels de guérison, de méditation, ou d’invocation des esprits. Les flûtes amérindiennes pouvaient être taillées dans différents matériaux. Le genévrier, le séquoia et le cèdre étaient populaires pour leur odeur. Il y avait 2 types de flûte amérindienne : la flûte des plaines et celle des bois, légèrement différentes dans leur mode de fabrication.", "Seruling Indian\n\nSeruling asli suku Indian Amerika, sebenarnya sangat unik; musiknya di mainkan tanpa musik pengiring di mimbar suku, mimbar penyembuhan, meditasi dan ritual spiritual. Seruling ini bisa terbuat dari bermacam-macam materi. Juniper, Redwood dan Kayu Cedar lebih populer, karena mereka menimbulkan aroma yang khas dan enak. Ada 2 jenis seruling, seruling dataran rendah dan seruling woodlands yang masing masing punya struktur yang sedikit berbeda."], ["Navajo Rug\n\nNative American weaving has evolved into a true art form. As these Navajo weavers expand their innate sense of design and harmony, their weavings are constantly improving. The weaving of a Native American rug involves both the spiritual and temporal world. From the spiritual side, the Navajos believe that the art of weaving was passed on to them by Spider Woman, a deity of the Navajo emergence story. From a temporal view, they respond to both artistic pride and augmentation of their meager income.", "Tapis Navajo\n\nAu fil du temps, la pratique du tissage des Amérindiens a évolué en une véritable forme d’art. Alors que les tisserands navajos développaient leur sens inné du design et de l’harmonie, la qualité de leur tissage s’améliorait constamment. Le tissage d’un tapis navajo est une action située à la limite des univers matériel et spirituel. Sur le plan spirituel, les Navajos pensent que l’art du tissage leur avait été transmis par la Femme Araignée, une divinité de la mythologie navajo. Sur le plan matériel, le tissage apporte une satisfaction artistique et une augmentation de leurs maigres revenus.", "Karpet navajo\n\ntenunan asli Indian telah berubah menjadi bentuk kesenian. Para penyulam Navajo memperluas selera design mereka dan juga harmoninya, tenunan mereka berkembang. Tenunan Indian mencakup baik tema dunia spiritual dan dunia nyata. Dari segi spiritual mereka percaya bahwa tenunan telah diwariskan oleh wanita laba-laba, dewa dari Legenda Navajo. Dari sudut dunia nyata, mereka mencerminkan sisi kebanggaan artistik dan sumber pemasukan mereka."], ["Calumet\n\nA Calumet is a ceremonial smoking pipe used by some Native American Nations. Traditionally it has been smoked to seal a covenant or treaty, or to offer prayers in a religious ceremony. A common material for calumet pipe bowls is red pipestone or catlinite, a fine-grained easily-worked stone of a rich red color of the Coteau des Prairies, west of the Big Stone Lake in South Dakota. Various types of ceremonial pipes have been used by multiple Native American cultures, with the style of pipe, herbs smoked, and ceremonies being unique to the distinct religions of those Nations. In ceremonial usage, the smoke is believed to carry prayers to the attention of the Creator or other powerful spirits.", "Calumet\n\nUn calumet est une pipe de cérémonie utilisée par certaines nations amérindiennes. Traditionnellement on l’allume pour sceller une alliance ou un traité, ou pour célébrer une cérémonie religieuse. Le fourneau est en terre de pipe ou catlinite, un minéral rouge au grain fin, facile à graver, provenant du Coteau des Prairies, à l’ouest du lac Big Stone dans le Dakota du Sud. De nombreux types de calumets de cérémonie ont été utilisés par les différentes nations amérindiennes, chacune ayant un type de calumet, de tabac et de cérémonial lié à ses croyances religieuses. Durant une cérémonie, la fumée est censée porter les prières à l’attention du Créateur ou de tout autre esprit divin.", "Calumet\n\nadalah sebuah pipa untuk merokok yang digunakan untuk upacara oleh beberapa Suku Indian. Secara tradisional pipa ini digunakan sebagai ritual sahnya perjanjian atau kesepakatan, atau untuk menyampaikan doa-doa dalam upacara keagamaan. Materi yang umum untuk calumet adalah red pipestone atau catlinite, sebuah batu yang mudah dibentuk yang berwarna merah dari Coteau des Praries, sebelah barat dari Big Stone Lake di South Dakota. Banyak jenis calumet tekah dipergunakan oleh berbagai macam suku Indian, baik itu bentuk pipanya, obat obatan yang di hisap lewat pipanya, dan upacara yang berbeda-beda dari suku Indian. Dalam hal upacara, asapnya dipercaya untuk menyampaikan doa-doa kepada Sang Pencipta ataupun mahkluk spritual yang lain."], ["Indian Pot\n\nAbout two thousand years ago, the beginning of agriculture in North America caused the previously nomadic Indian peoples to settle down. Soon, pottery shapes developed according to various customs and techniques of gathering water, storing grains and liquids, and preserving seeds for the next planting. The craft culminated in the development of cooking pots that were made to sit on rocks in open fires, water jars with indented bases so they could sit comfortably on the heads of water gatherers, and large storage vessels for grains and water. Indian villages all over the United States became known for their different pot shapes and decorative styles.", "Poterie indienne\n\nIl y a environ 2.000 ans, les peuples indiens d’Amérique du Nord cessèrent d’être nomades pour commencer à cultiver la terre et ainsi se sédentariser. Peu après, la fabrication de poteries commença à se développer, et les coutumes de chaque tribu, la manière de puiser de l’eau, de conserver les grains et les liquides, ou de protéger les graines pour les prochaines semences, donnèrent naissance à plusieurs styles. Cet art atteint son apogée avec la réalisation de poteries qui pouvaient être placées directement sur un foyer ouvert, de jarres avec une base concave pour que les porteurs d’eau puissent les tenir plus facilement sur leur tête, et de grands silos pour le grain et l’eau. Certains villages indiens devinrent renommés à travers tout le territoire américain pour la forme et le style décoratif de leurs poteries.", "Guci Khas Indian\n\nkira-kira 2000 tahun yang lalu, awal dari masa agrikultur di America Utara menyebabkan Indian yang sebelumnya adalah suku nomaden untuk mulai menetap. Tidak lama kemudian kerajinan tanah liat berkembang sesuai kebiasaan dan kebutuhan serta teknik mereka mengumpulkan air, menyimpan gandum dan carian lain, dan merawat benih untuk masa tanam berikutnya. Kerajinan ini berkembang dengan munculnya pot pot untuk memasak yang dibuat dengan dudukan untuk di atas tungku yang terbuat dari bebatuan di alam bebas, guci untuk menyimpan air dengan dasar yang agak cekung sehingga dapat diletakkan dengan nyaman di atas kepala para pembawa air, dan tempat penyimpanan yang besar untuk gandum dan air. Ada banyak bentuk dari pot/guci ini dari berbagai suku Indian."], ["Dreamcatcher\n\nIn Ojibwa (Chippewa) culture, a dreamcatcher is a handmade object based on a willow hoop, on which is woven a loose net or web. The dreamcatcher is then decorated with personal and sacred items such as feathers and beads. The legend of the Native American dreamcatcher varies somewhat from tribe to tribe, but the basic theme or intention was to allow good dreams to slip through the web and into the sleeper during the night while the bad dreams were caught in the web and would perish at morning's light", "Attrape-rêves\n\nDans la culture Ojibwa (Chippewa), un attrape-rêves est un objet fait à la main, constitué d’un anneau en saule sur lequel est noué un filet assez ample. L’attrape-rêves est ensuite personnalisé avec des petits accessoires sacrés comme des plumes ou des perles. La légende de l’attrape-rêves amérindien varie quelque peu d’une tribu à l’autre, mais la base est commune : il s’agit de laisser passer les bons rêves à travers le filet pour arriver jusqu’au dormeur, et de retenir les cauchemars dans le filet jusqu’au matin, quand la lumière du jour les fera disparaître.", "Dreamcatcher\n\nPenangkap Mimpi, dalam bahasa budaya Chippewa, penangkap Mimpi adalah kerajinan tangan yang dibuat dari bulatan willow, yang kemudian disulami dengan jaring. Dreamcatcher ini kemudian di dekorasi dengan benda-benda pribadi dan benda suci semacam bulu dan biji kalung. Legenda mengenai benda ini bermacam-macam dari suku ke suku, tapi pada dasarnya adalah untuk mengijinkan mimpi baik untuk lewat dari jaring masuk ke dalam tidur selama malam, sementara mimpi buruk terperangkap di dalam jala/jaring dan akan musnah pada pagi hari."], ["Buffalo Skull\n\nAnimal skulls are usually used by Indian people for many purposes, from ceremonial to war. They most often used Buffalo skulls.", "Crâne de bison\n\nLes crânes d’animaux étaient beaucoup utilisés dans la culture amérindienne, dans des contextes très divers, comme la guerre ou les cérémonies. Les crânes de bison étaient les plus répandus. ", "Tengkorak Bison/Kerbau\n\ntengkorak binatang biasa digunakan oleh Suku Indian untuk berbagai tujuan, mulai dari upacara sampai perang, mereka paling sering menggunakan tengkorak bison/kerbau liar."], ["Indian Necklace\n- Sometimes made from small bones, but sometimes also using animal leather for the amulet.", "Collier indien\n\nCertains étaient composés de petits os, avec parfois aussi du cuir pour l’amulette", "Kalung Khas Indian\n\nkadang terbuat dari tulang tulang kecil, tapi kadang kadang menggunakan kulit hewan untuk amulet / jimatnya."], ["Plains Indian Shield\n\nThe shield, as could be expected, was a very important item to the Native American, not only due to the obvious physical protection, but also because of the Spiritual Protection it provided. Because of the latter, shields did not disappear from the cultural identity of the Native American as they did from the European, where the shield provided familial linkage and/or identity of the bearer and was judged quite inadequate with the advent of weapons using gunpowder.", "Bouclier indien des Plaines\n\nLe bouclier était bien sûr un objet très important dans la culture amérindienne, pas seulement pour son rôle évident de protection physique, mais aussi dans un rôle de protection spirituelle. C’est pour cette raison que les boucliers n’ont pas disparu aussi vite dans la culture amérindienne que dans la culture européenne, où le bouclier, symbole de la lignée et de l’identité de celui qui le portait, disparut quand il se révéla inefficace avec l’avènement des armes à feu.", "Perisai Indian\n\nPerisai adalah benda yang amat penting untuk para Indian Amerika, tidak hanya untuk perlindungan fisik, tetapi juga karena perlindungan spiritualnya. Karena hal yang terakhir, perisai tidak menghilang dari identitas budaya Suku Indian, tidak seperti yang terjadi di Eropa karena perisa menunjukkan hubungan keluarga dan atau identitas dari sang pemilik dan telah dinilai tidak cukup melindungi karena ditemukannya senjata dengan mesiu."]]);
    $.set($sc, "achievementDes", [0, ["Completing and saving the tutorial games", "Terminer et sauvegarder les tutoriaux", "Menyelesaikan dan menyimpan tutorial game"], ["Fighting with all 5 commanders  in a single battle", "Combattre avec les 5 chefs dans une même bataille", "Bertempur dengan semua 5 panglima dalam 1 kali pertarungan"], ["Using  3 special powers in 1 battle", "Utiliser 3 pouvoirs spéciaux dans une même bataille", "Menggunakan 3 kekuatan spesial dalam 1 kali pertempuran"], ["Building all 4 available barracks", "Construire les 4 casernes disponibles", "Membangun semua 4 barak yang tersedia"], ["Upgrading the temple to level 9", "Améliorer le temple jusqu’au niveau 9", "Meningkatkan kuil hingga level 9"], ["Upgrading all 5 classlevel  available", "Améliorer les 5 classes de guerrier disponibles", "Meningkatkan semua 5 tingkat pasukan yg tersedia"], ["Stealing 5000 golds from the enemies in battle", "Voler 5.000 pièces d’or à l’ennemi dans une bataille", "Mencuri 5000 emas dari musuh ketika pertempuran"], ["Collecting 10,000 Golds", "Rassembler 10.000 pièces d’or", "Mengumpulkan 10.000 emas"], ["Collecting 10,000 Foods", "Rassembler 10.000 unités de nourriture", "Mengumpulkan 10.000 makanan"], ["Collecting 10,000 Irons", "Rassembler 10.000 unités de fer", "Mengumpulkan 10.000 besi"], ["Collecting 10,000 Woods", "Rassembler 10.000 unités de bois", "Mengumpulkan 10.000 kayu"], ["Gathering 30 Flowers", "Recueillir 30 fleurs", "Mengumpulkan 30 bunga ajaib"]]);
    $.set($sc, "medalsDes", [0, ["GOLD COIN\nSurvive for 75 days", "Pièce d'or\nSurvivre 75 jours", "KOIN EMAS\nBertahan selama 75 hari"], ["SILVER COIN\nSurvive for 50 days", "Pièce d'argent\nSurvivre 50 jours", "KOIN PERAK\nBertahan selama 50 hari"], ["BRONZE COIN\nSurvive for 40 days", "Pièce de bronze\nSurvivre 40 jours", "PERUNGGU\nBertahan selama 40 hari"], ["LEAD COIN\nSurvive for 25 days", "Pièce de plomb\nSurvivre 25 jours", "KOIN TIMAH\nBertahan selama 25 hari"], ["COPPER COIN\nSurvive for 10 days", "Pièce de cuivre\nSurvivre 10 jours", "KOIN TEMBAGA\nBertahan selama 10 hari"]]);
    $.def($sc, "serangan", false);
    t29 = $.cm($.get($sc, "SharedObject"), "getLocal", ["TLV", "/"]);
    $.set($sc, "Cookies", t29);
    if (!!$.eq($.gm($.gm($.get($sc, "Cookies"), "data"), "statisticList"), undefined)) { $b = 32; continue; }
    $b = 31; continue;
  case 31:
    $.set($sc, "statisticList", $.gm($.gm($.get($sc, "Cookies"), "data"), "statisticList"));
    $b = 32; continue;
  case 32:
    if (!!$.eq($.gm($.gm($.get($sc, "Cookies"), "data"), "achievementList"), undefined)) { $b = 34; continue; }
    $b = 33; continue;
  case 33:
    $.set($sc, "achievementList", $.gm($.gm($.get($sc, "Cookies"), "data"), "achievementList"));
    $b = 34; continue;
  case 34:
    if (!!$.eq($.gm($.gm($.get($sc, "Cookies"), "data"), "medalsList"), undefined)) { $b = 36; continue; }
    $b = 35; continue;
  case 35:
    $.set($sc, "medalsList", $.gm($.gm($.get($sc, "Cookies"), "data"), "medalsList"));
    $b = 36; continue;
  case 36:
    $.def($sc, "volBGM", 80);
    $.def($sc, "volFX", 100);
    t31 = $.cf($sc, "soundBGM", ["bgm1"]);
    $.def($sc, "i", 1);
    $b = 37; continue;
  case 37:
    if (!!$.gt($.get($sc, "i"), 16)) { $b = 40; continue; }
    $b = 38; continue;
  case 38:
    $.sm($.get($sc, "_root"), $.add("challenge", $.get($sc, "i")), false);
    $.set($sc, "i", ($.n($.get($sc, "i")) + 1));
    $b = 37; continue;
  case 40: return;
  }
};
// main#f8.0
S[264] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1, t2;
  $.stop($tgt);
  $.stopAllSounds();
  t1 = $.cf($sc, "soundFX", ["bgm0"]);
  t2 = $.cm($.get($sc, "skip_btn"), "gotoAndStop", [$.add($.gm($.get($sc, "_root"), "bahasa"), 1)]);
  $.sm($.get($sc, "skip_btn"), "onRelease", $.fn({"n":"","p":[],"r":2,"f":106}, $sc, function($sc, $this, $args, $r) {
    var t1;
    t1 = $.cm($r[1], "gotoAndStop", ["main"]);
  }));
};
// main#f9.0
S[265] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var s0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, en1, t18, t19, t20, t21, t22, t23;
  var $b = 0;
  for (;;) switch ($b) {
  case 0:
    $.def($sc, "bikinMapBayangan", $.fn({"n":"bikinMapBayangan","p":[],"r":4,"f":42}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      t1 = $.nw($sc, "Array", []);
      $r[3] = t1;
      $r[2] = 1;
      $b = 1; continue;
    case 1:
      if (!!$.gt($r[2], 5)) { $b = 7; continue; }
      $b = 2; continue;
    case 2:
      $r[1] = 1;
      $b = 3; continue;
    case 3:
      if (!!$.gt($r[1], 5)) { $b = 5; continue; }
      $b = 4; continue;
    case 4:
      t3 = $.cm($r[3], "push", [$.add($.add("map", $r[2]), $r[1])]);
      t4 = ($.n($r[1]) + 1);
      $r[1] = t4;
      $b = 3; continue;
    case 5:
      t2 = ($.n($r[2]) + 1);
      $r[2] = t2;
      $b = 1; continue;
    case 7: return;
    }
  }));
    $.def($sc, "tampilBunga", $.fn({"n":"tampilBunga","p":[[4,"arrayTempat"]],"r":5,"f":106}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5, t6, t7, t8, t9, t10;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!$.eq($.get($sc, "days"), 3)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      $r[3] = 0;
      $b = 3; continue;
    case 2:
      t1 = $.cm($.get($sc, "Math"), "ceil", [($.n($.get($sc, "days")) / 20)]);
      $r[3] = $.add(1, t1);
      $b = 3; continue;
    case 3:
      t2 = $r[4];
      t3 = $.rand($.gm($r[4], "length"));
      t4 = $.gm(t2, t3);
      $r[2] = t4;
      t5 = $.rand($r[3]);
      if (!$.eq((1 + t5), 1)) { $b = 6; continue; }
      $b = 4; continue;
    case 4:
      $.set($sc, "flowerID", ($.n($.get($sc, "flowerID")) + 1));
      t6 = $.cm($.gm($.get($sc, "minimap"), "coordinate"), "attachMovie", ["mc_flower", $.add("flower", $.get($sc, "flowerID")), $.add(500, $.get($sc, "flowerID"))]);
      $.sm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.add("flower", $.get($sc, "flowerID"))), "_x", $.gm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $r[2]), "_x"));
      $.sm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.add("flower", $.get($sc, "flowerID"))), "_y", $.gm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $r[2]), "_y"));
      $.sm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.add("flower", $.get($sc, "flowerID"))), "daysLeft", 1);
      t7 = $.gm($.gm($.get($sc, "minimap"), "coordinate"), $.add("flower", $.get($sc, "flowerID")));
      t8 = $.cm($r[2], "substr", [3, 2]);
      $.sm(t7, "pos", t8);
      t9 = $.cm($.get($sc, "flowerList"), "push", [$.add("flower", $.get($sc, "flowerID"))]);
      t10 = $.cf($sc, "tampilAlertFlower", [$.gm($.get($sc, "bungaTampilBahasa"), $.gm($r[1], "bahasa"))]);
      $b = 6; continue;
    case 6: return;
    }
  }));
    $.def($sc, "resetBunga", $.fn({"n":"resetBunga","p":[],"r":2,"f":42}, $sc, function($sc, $this, $args, $r) {
    var s0, en1, t1, t2, t3;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      en1 = $.enumerate($.get($sc, "flowerList"));
      s0 = en1;
      $b = 1; continue;
    case 1:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 7; continue; }
      $b = 2; continue;
    case 2:
      t1 = $r[0];
      $r[1] = t1;
      if (!$.gt($.gm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "flowerList"), $r[1])), "daysLeft"), 0)) { $b = 4; continue; }
      $b = 3; continue;
    case 3:
      $.sm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "flowerList"), $r[1])), "daysLeft", ($.n($.gm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "flowerList"), $r[1])), "daysLeft")) - 1));
      $b = 5; continue;
    case 4:
      t2 = $.delMember($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "flowerList"), $r[1])), "pos");
      t3 = $.cm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "flowerList"), $r[1])), "removeMovieClip", []);
      $b = 5; continue;
    case 5:
      $b = 1; continue;
    case 7: return;
    }
  }));
    $.def($sc, "cekDapatBunga", $.fn({"n":"cekDapatBunga","p":[],"r":3,"f":106}, $sc, function($sc, $this, $args, $r) {
    var s0, s1, en1, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      en1 = $.enumerate($.get($sc, "flowerList"));
      s0 = en1;
      $b = 1; continue;
    case 1:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 23; continue; }
      $b = 2; continue;
    case 2:
      t1 = $r[0];
      $r[2] = t1;
      t2 = $.cm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "flowerList"), $r[2])), "hitTest", [$.gm($.gm($.get($sc, "minimap"), "coordinate"), "panglima5")]);
      if (!$.bool(t2)) { $b = 21; continue; }
      $b = 3; continue;
    case 3:
      $.sm($r[1], "bunga", ($.n($.gm($r[1], "bunga")) + 1));
      t3 = $.cm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "flowerList"), $r[2])), "removeMovieClip", []);
      t4 = $.cf($sc, "tampilAlertFlower", [$.add($.gm($.get($sc, "dapatBungaBahasa"), $.gm($r[1], "bahasa")), $.gm($r[1], "bunga"))]);
      if (!!$.bool($.get($sc, "challenge5"))) { $b = 8; continue; }
      $b = 4; continue;
    case 4:
      t5 = !$.lt($.gm($r[1], "bunga"), 5);
      t6 = !t5;
      s1 = t5;
      if (t6) { $b = 6; continue; }
      $b = 5; continue;
    case 5:
      s1 = $.lt($.gm($r[1], "bunga"), 10);
      $b = 6; continue;
    case 6:
      if (!$.bool(s1)) { $b = 8; continue; }
      $b = 7; continue;
    case 7:
      t11 = $.cm($r[1], "scoreHTTPSender", ["FL091017", "CH005"]);
      $.set($sc, "challenge5", true);
      $b = 8; continue;
    case 8:
      if (!!$.bool($.get($sc, "challenge6"))) { $b = 13; continue; }
      $b = 9; continue;
    case 9:
      t7 = !$.lt($.gm($r[1], "bunga"), 10);
      t8 = !t7;
      s1 = t7;
      if (t8) { $b = 11; continue; }
      $b = 10; continue;
    case 10:
      s1 = $.lt($.gm($r[1], "bunga"), 15);
      $b = 11; continue;
    case 11:
      if (!$.bool(s1)) { $b = 13; continue; }
      $b = 12; continue;
    case 12:
      t12 = $.cm($r[1], "scoreHTTPSender", ["FL091017", "CH006"]);
      $.set($sc, "challenge6", true);
      $b = 13; continue;
    case 13:
      if (!!$.bool($.get($sc, "challenge7"))) { $b = 18; continue; }
      $b = 14; continue;
    case 14:
      t9 = !$.lt($.gm($r[1], "bunga"), 15);
      t10 = !t9;
      s1 = t9;
      if (t10) { $b = 16; continue; }
      $b = 15; continue;
    case 15:
      s1 = $.lt($.gm($r[1], "bunga"), 25);
      $b = 16; continue;
    case 16:
      if (!$.bool(s1)) { $b = 18; continue; }
      $b = 17; continue;
    case 17:
      t14 = $.cm($r[1], "scoreHTTPSender", ["FL091017", "CH007"]);
      $.set($sc, "challenge7", true);
      $b = 18; continue;
    case 18:
      if (!!$.bool($.get($sc, "challenge8"))) { $b = 21; continue; }
      $b = 19; continue;
    case 19:
      if (!!$.lt($.gm($r[1], "bunga"), 25)) { $b = 21; continue; }
      $b = 20; continue;
    case 20:
      t13 = $.cm($r[1], "scoreHTTPSender", ["FL091017", "CH008"]);
      $.set($sc, "challenge8", true);
      $b = 21; continue;
    case 21:
      $b = 1; continue;
    case 23: return;
    }
  }));
    $.def($sc, "cekPosBunga", $.fn({"n":"cekPosBunga","p":[],"r":3,"f":42}, $sc, function($sc, $this, $args, $r) {
    var s0, s1, en1, t1, en2, t2;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.sm($.gm($.get($sc, "map_general"), "flower"), "_visible", false);
      en1 = $.enumerate($.get($sc, "flowerList"));
      s0 = en1;
      $b = 1; continue;
    case 1:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 10; continue; }
      $b = 2; continue;
    case 2:
      t1 = $r[0];
      $r[2] = t1;
      en2 = $.enumerate($.get($sc, "posMap"));
      s1 = en2;
      $b = 3; continue;
    case 3:
      $r[0] = s1.shift();
      if ($r[0] === null) { $b = 8; continue; }
      $b = 4; continue;
    case 4:
      t2 = $r[0];
      $r[1] = t2;
      if (!$.eq($.gm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "flowerList"), $r[2])), "pos"), $.gm($.get($sc, "posMap"), $r[1]))) { $b = 7; continue; }
      $b = 5; continue;
    case 5:
      if (!$.eq($.get($sc, "map"), ($.n($r[1]) + 1))) { $b = 7; continue; }
      $b = 6; continue;
    case 6:
      $.sm($.gm($.get($sc, "map_general"), "flower"), "_visible", true);
      $b = 7; continue;
    case 7:
      $b = 3; continue;
    case 8:
      $b = 1; continue;
    case 10: return;
    }
  }));
    $.def($sc, "tampilBlur", $.fn({"n":"tampilBlur","p":[],"r":2,"f":106}, $sc, function($sc, $this, $args, $r) {
    var t1;
    t1 = $.cm($r[1], "attachMovie", ["main_blur", "blur", 99]);
    $.sm($.get($sc, "blur"), "_x", ($.n($.gm($.get($sc, "Stage"), "width")) / 2));
    $.sm($.get($sc, "blur"), "_y", ($.n($.gm($.get($sc, "Stage"), "height")) / 2));
  }));
    $.def($sc, "tampilOption", $.fn({"n":"tampilOption","p":[[6,"nomor"]],"r":7,"f":105}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5, t6, t7, t8, t9, t10;
    $.set($sc, "isPaused", true);
    t1 = $.cf($sc, "tampilBlur", []);
    $.set($sc, "aktifTombol", false);
    t2 = $.cm($r[2], "attachMovie", ["windows_option", "option", 1000]);
    $.sm($.get($sc, "option"), "_x", ($.n($.gm($.get($sc, "Stage"), "width")) / 2));
    $.sm($.get($sc, "option"), "_y", ($.n($.gm($.get($sc, "Stage"), "height")) / 2));
    $.sm($.get($sc, "option"), "_alpha", 0);
    t3 = $.cm($.get($sc, "option"), "gotoAndStop", [$r[6]]);
    $.sm($.get($sc, "option"), "onEnterFrame", $.fn({"n":"","p":[],"r":4,"f":105}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      t1 = $.cf($sc, "efekFade", [$r[1]]);
      $r[3] = 0;
      $b = 1; continue;
    case 1:
      if (!!$.gt($r[3], 3)) { $b = 7; continue; }
      $b = 2; continue;
    case 2:
      if (!$.bool($.gm($.gm($r[2], "kualitas"), $r[3]))) { $b = 4; continue; }
      $b = 3; continue;
    case 3:
      t3 = $.cm($.gm($.get($sc, "option"), $.add("kualitas", $r[3])), "gotoAndStop", [2]);
      $b = 5; continue;
    case 4:
      t2 = $.cm($.gm($.get($sc, "option"), $.add("kualitas", $r[3])), "gotoAndStop", [1]);
      $b = 5; continue;
    case 5:
      $.sm($.gm($.get($sc, "option"), $.add("kualitas", $r[3])), "kw", $r[3]);
      $.sm($.gm($.get($sc, "option"), $.add("kualitas", $r[3])), "onRelease", $.fn({"n":"","p":[],"r":4,"f":105}, $sc, function($sc, $this, $args, $r) {
    var t1;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $r[3] = 0;
      $b = 1; continue;
    case 1:
      if (!!$.gt($r[3], 3)) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      $.sm($.gm($r[2], "kualitas"), $r[3], false);
      t1 = ($.n($r[3]) + 1);
      $r[3] = t1;
      $b = 1; continue;
    case 3:
      $.sm($.gm($r[2], "kualitas"), $.gm($r[1], "kw"), true);
      $.sm($r[2], "_quality", $.gm($.gm($r[2], "kualitasList"), $.gm($r[1], "kw")));
      $b = 4; continue;
    case 4: return;
    }
  }));
      t4 = ($.n($r[3]) + 1);
      $r[3] = t4;
      $b = 1; continue;
    case 7: return;
    }
  }));
    $.sm($.gm($.gm($.get($sc, "option"), "bgm_slider"), "tombol"), "_x", (($.n($.gm($r[2], "volBGM")) * $.n($.gm($.gm($.gm($.gm($r[2], "option"), "bgm_slider"), "bar"), "_width"))) / 100));
    $.sm($.gm($.gm($.get($sc, "option"), "bgm_slider"), "tombol"), "onPress", $.fn({"n":"","p":[],"r":3,"f":105}, $sc, function($sc, $this, $args, $r) {
    $.startDrag($r[1], 1, [0, 0, $.gm($.gm($.gm($.gm($r[2], "option"), "bgm_slider"), "bar"), "_width"), 0]);
    $.sm($r[1], "onEnterFrame", $.fn({"n":"","p":[],"r":3,"f":105}, $sc, function($sc, $this, $args, $r) {
    var t1;
    $.sm($r[2], "volBGM", (($.n($.gm($r[1], "_x")) / $.n($.gm($.gm($.gm($.gm($r[2], "option"), "fx_slider"), "bar"), "_width"))) * 100));
    t1 = $.cm($.get($sc, "sBGM"), "setVolume", [$.gm($r[2], "volBGM")]);
  }));
  }));
    t4 = $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    t1 = $.cm($r[1], "stopDrag", []);
    t2 = $.delMember($r[1], "onEnterFrame");
  });
    $r[0] = t4;
    t5 = $.gm($.gm($.get($sc, "option"), "bgm_slider"), "tombol");
    $.sm($.gm($.gm($.get($sc, "option"), "bgm_slider"), "tombol"), "onReleaseOutside", t4);
    $.sm(t5, "onRelease", $r[0]);
    $.sm($.gm($.gm($.get($sc, "option"), "fx_slider"), "tombol"), "_x", (($.n($.gm($r[2], "volFX")) * $.n($.gm($.gm($.gm($.gm($r[2], "option"), "fx_slider"), "bar"), "_width"))) / 100));
    $.sm($.gm($.gm($.get($sc, "option"), "fx_slider"), "tombol"), "onPress", $.fn({"n":"","p":[],"r":3,"f":105}, $sc, function($sc, $this, $args, $r) {
    $.startDrag($r[1], 1, [0, 0, $.gm($.gm($.gm($.gm($r[2], "option"), "fx_slider"), "bar"), "_width"), 0]);
    $.sm($r[1], "onEnterFrame", $.fn({"n":"","p":[],"r":3,"f":105}, $sc, function($sc, $this, $args, $r) {
    $.sm($r[2], "volFX", (($.n($.gm($r[1], "_x")) / $.n($.gm($.gm($.gm($.gm($r[2], "option"), "fx_slider"), "bar"), "_width"))) * 100));
  }));
  }));
    t6 = $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    t1 = $.cm($r[1], "stopDrag", []);
    t2 = $.delMember($r[1], "onEnterFrame");
  });
    $r[0] = t6;
    t7 = $.gm($.gm($.get($sc, "option"), "fx_slider"), "tombol");
    $.sm($.gm($.gm($.get($sc, "option"), "fx_slider"), "tombol"), "onReleaseOutside", t6);
    $.sm(t7, "onRelease", $r[0]);
    t8 = $.cm($.gm($.get($sc, "option"), "cursormode_btn"), "gotoAndStop", [(2 - $.n($.get($sc, "customCursor")))]);
    $.sm($.gm($.get($sc, "option"), "cursormode_btn"), "onRelease", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!$.bool($.get($sc, "customCursor"))) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t3 = $.cm($r[1], "gotoAndStop", [2]);
      t4 = $.cf($sc, "showNormalCursor", []);
      $.set($sc, "customCursor", false);
      $b = 4; continue;
    case 2:
      t1 = $.cm($r[1], "gotoAndStop", [1]);
      t2 = $.cf($sc, "showCustomCursor", []);
      $.set($sc, "customCursor", true);
      $b = 4; continue;
    case 4: return;
    }
  }));
    t9 = $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    $.set($sc, "aktifTombol", true);
    $.set($sc, "isPaused", false);
    t1 = $.cm($.get($sc, "blur"), "removeMovieClip", []);
    t2 = $.cm($.gm($r[1], "_parent"), "removeMovieClip", []);
  });
    $r[0] = t9;
    t10 = $.gm($.get($sc, "option"), "cancel_btn");
    $.sm($.gm($.get($sc, "option"), "continue_btn"), "onRelease", t9);
    $.sm(t10, "onRelease", $r[0]);
    $.sm($.gm($.get($sc, "option"), "close_btn"), "onRelease", $.fn({"n":"","p":[],"r":5,"f":105}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, en1, en2, t2, t3, t4, t5, t6, t7, t8;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      t1 = $.cf($sc, "saveData", []);
      en1 = $.enumerate($.get($sc, "daftarMusuhSerang"));
      s0 = en1;
      $b = 1; continue;
    case 1:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      t2 = $r[0];
      $r[3] = t2;
      t3 = $.cm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "daftarMusuhSerang"), $r[3])), "removeMovieClip", []);
      $b = 1; continue;
    case 3:
      en2 = $.enumerate($.get($sc, "flowerList"));
      s0 = en2;
      $b = 4; continue;
    case 4:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 6; continue; }
      $b = 5; continue;
    case 5:
      t7 = $r[0];
      $r[4] = t7;
      t8 = $.cm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "flowerList"), $r[4])), "removeMovieClip", []);
      $b = 4; continue;
    case 6:
      t4 = $.cm($r[2], "gotoAndStop", ["menu"]);
      $.set($sc, "aktifTombol", true);
      $.set($sc, "isPaused", false);
      t5 = $.cm($.get($sc, "blur"), "removeMovieClip", []);
      t6 = $.cm($.gm($r[1], "_parent"), "removeMovieClip", []);
      $b = 7; continue;
    case 7: return;
    }
  }));
  }));
    $.def($sc, "tampilDeskripsiNone", $.fn({"n":"tampilDeskripsiNone","p":[[3,"who"]],"r":4,"f":105}, $sc, function($sc, $this, $args, $r) {
    var $tgt = $.clipOf($sc);
    var t1;
    t1 = $.cm($r[2], "attachMovie", ["description_map", "des", 999]);
    $.sm($.get($sc, "des"), "_x", $.gp($tgt, "_xmouse"));
    $.sm($.get($sc, "des"), "_y", $.gp($tgt, "_ymouse"));
    $.sm($.get($sc, "des"), "_alpha", 0);
    $.sm($.gm($.get($sc, "des"), "lvl"), "text", 1);
    $.sm($.gm($.get($sc, "des"), "judul"), "text", $.gm($.gm($.gm($.gm($r[2], "desList"), $.gm($r[3], "id")), 4), $.get($sc, "bahasa")));
    $.sm($.gm($.get($sc, "des"), "des"), "text", $.gm($.get($sc, "cantBahasa"), $.gm($r[2], "bahasa")));
    $.sm($.gm($.get($sc, "des"), "gold"), "text", $.gm($.gm($.gm($.gm($r[2], "desList"), $.gm($r[3], "id")), 3), 1));
    $.sm($.gm($.get($sc, "des"), "food"), "text", $.gm($.gm($.gm($.gm($r[2], "desList"), $.gm($r[3], "id")), 3), 2));
    $.sm($.gm($.get($sc, "des"), "iron"), "text", $.gm($.gm($.gm($.gm($r[2], "desList"), $.gm($r[3], "id")), 3), 3));
    $.sm($.gm($.get($sc, "des"), "wood"), "text", $.gm($.gm($.gm($.gm($r[2], "desList"), $.gm($r[3], "id")), 3), 4));
    $.sm($.get($sc, "des"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var $tgt = $.clipOf($sc);
    var t1;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      t1 = $.cf($sc, "efekFade", [$r[1]]);
      if (!$.gt($.gp($tgt, "_xmouse"), ($.n($.gm($.get($sc, "Stage"), "width")) / 2))) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      $.sm($.get($sc, "des"), "_x", ($.n($.gp($tgt, "_xmouse")) - $.n($.gm($.get($sc, "des"), "_width"))));
      $b = 3; continue;
    case 2:
      $.sm($.get($sc, "des"), "_x", $.gp($tgt, "_xmouse"));
      $b = 3; continue;
    case 3:
      if (!$.gt($.gp($tgt, "_ymouse"), ($.n($.gm($.get($sc, "Stage"), "height")) / 2))) { $b = 5; continue; }
      $b = 4; continue;
    case 4:
      $.sm($.get($sc, "des"), "_y", ($.n($.gp($tgt, "_ymouse")) - $.n($.gm($.get($sc, "des"), "_height"))));
      $b = 7; continue;
    case 5:
      $.sm($.get($sc, "des"), "_y", $.gp($tgt, "_ymouse"));
      $b = 7; continue;
    case 7: return;
    }
  }));
  }));
    $.def($sc, "tampilDeskripsi", $.fn({"n":"tampilDeskripsi","p":[[3,"who"]],"r":4,"f":105}, $sc, function($sc, $this, $args, $r) {
    var $tgt = $.clipOf($sc);
    var t1;
    t1 = $.cm($r[2], "attachMovie", ["description_map", "des", 999]);
    $.sm($.get($sc, "des"), "_x", ($.n($.gp($tgt, "_xmouse")) - $.n($.gm($.get($sc, "des"), "_width"))));
    $.sm($.get($sc, "des"), "_y", $.gp($tgt, "_ymouse"));
    $.sm($.get($sc, "des"), "_alpha", 0);
    $.sm($.gm($.get($sc, "des"), "judul"), "text", $.gm($.gm($.gm($.gm($r[2], "desList"), $.gm($r[3], "id")), 4), $.get($sc, "bahasa")));
    $.sm($.gm($.get($sc, "des"), "lvl"), "text", 1);
    $.sm($.gm($.get($sc, "des"), "des"), "text", $.gm($.gm($.gm($.gm($r[2], "desList"), $.gm($r[3], "id")), 1), $.get($sc, "bahasa")));
    $.sm($.gm($.get($sc, "des"), "gold"), "text", $.gm($.gm($.gm($.gm($r[2], "desList"), $.gm($r[3], "id")), 3), 1));
    $.sm($.gm($.get($sc, "des"), "food"), "text", $.gm($.gm($.gm($.gm($r[2], "desList"), $.gm($r[3], "id")), 3), 2));
    $.sm($.gm($.get($sc, "des"), "iron"), "text", $.gm($.gm($.gm($.gm($r[2], "desList"), $.gm($r[3], "id")), 3), 3));
    $.sm($.gm($.get($sc, "des"), "wood"), "text", $.gm($.gm($.gm($.gm($r[2], "desList"), $.gm($r[3], "id")), 3), 4));
    $.sm($.get($sc, "des"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var $tgt = $.clipOf($sc);
    var t1;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      t1 = $.cf($sc, "efekFade", [$r[1]]);
      if (!$.gt($.gp($tgt, "_xmouse"), ($.n($.gm($.get($sc, "Stage"), "width")) / 2))) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      $.sm($.get($sc, "des"), "_x", ($.n($.gp($tgt, "_xmouse")) - $.n($.gm($.get($sc, "des"), "_width"))));
      $b = 3; continue;
    case 2:
      $.sm($.get($sc, "des"), "_x", $.gp($tgt, "_xmouse"));
      $b = 3; continue;
    case 3:
      if (!$.gt($.gp($tgt, "_ymouse"), ($.n($.gm($.get($sc, "Stage"), "height")) / 2))) { $b = 5; continue; }
      $b = 4; continue;
    case 4:
      $.sm($.get($sc, "des"), "_y", ($.n($.gp($tgt, "_ymouse")) - $.n($.gm($.get($sc, "des"), "_height"))));
      $b = 7; continue;
    case 5:
      $.sm($.get($sc, "des"), "_y", $.gp($tgt, "_ymouse"));
      $b = 7; continue;
    case 7: return;
    }
  }));
  }));
    $.def($sc, "tampilDeskripsiMap", $.fn({"n":"tampilDeskripsiMap","p":[[3,"who"]],"r":4,"f":105}, $sc, function($sc, $this, $args, $r) {
    var $tgt = $.clipOf($sc);
    var s0, t1, t2, t3, t4, t5, t6, t7, t8;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      t1 = $.cm($r[2], "attachMovie", ["description_map", "des", 999]);
      $.sm($.get($sc, "des"), "_x", $.gp($tgt, "_xmouse"));
      $.sm($.get($sc, "des"), "_y", $.gp($tgt, "_ymouse"));
      $.sm($.get($sc, "des"), "_alpha", 0);
      t2 = $.cm($.get($sc, "des"), "gotoAndStop", [2]);
      t3 = $.eq($.gm($r[3], "_name"), "sawmill");
      t4 = t3;
      s0 = t3;
      if (t4) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      s0 = $.eq($.gm($r[3], "_name"), "peternakan");
      $b = 2; continue;
    case 2:
      if ($.bool(s0)) { $b = 4; continue; }
      $b = 3; continue;
    case 3:
      s0 = $.eq($.gm($r[3], "_name"), "sawah");
      $b = 4; continue;
    case 4:
      if ($.bool(s0)) { $b = 6; continue; }
      $b = 5; continue;
    case 5:
      s0 = $.eq($.gm($r[3], "_name"), "pelabuhan");
      $b = 6; continue;
    case 6:
      if ($.bool(s0)) { $b = 8; continue; }
      $b = 7; continue;
    case 7:
      s0 = $.eq($.gm($r[3], "_name"), "iron_mine");
      $b = 8; continue;
    case 8:
      if (!$.bool(s0)) { $b = 10; continue; }
      $b = 9; continue;
    case 9:
      t7 = $.cm($.get($sc, "des"), "gotoAndStop", [4]);
      $.sm($.gm($.get($sc, "des"), "gold"), "text", ($.n($.gm($.gm($.gm($.gm($r[2], "desList"), $.gm($r[3], "id")), 2), 1)) * $.n($.gm($r[3], "isSetLevel"))));
      $.sm($.gm($.get($sc, "des"), "food"), "text", ($.n($.gm($.gm($.gm($.gm($r[2], "desList"), $.gm($r[3], "id")), 2), 2)) * $.n($.gm($r[3], "isSetLevel"))));
      $.sm($.gm($.get($sc, "des"), "iron"), "text", ($.n($.gm($.gm($.gm($.gm($r[2], "desList"), $.gm($r[3], "id")), 2), 3)) * $.n($.gm($r[3], "isSetLevel"))));
      $.sm($.gm($.get($sc, "des"), "wood"), "text", ($.n($.gm($.gm($.gm($.gm($r[2], "desList"), $.gm($r[3], "id")), 2), 4)) * $.n($.gm($r[3], "isSetLevel"))));
      $b = 10; continue;
    case 10:
      t5 = $.eq($.gm($r[3], "_name"), "barrack");
      t6 = t5;
      s0 = t5;
      if (t6) { $b = 12; continue; }
      $b = 11; continue;
    case 11:
      s0 = $.eq($.gm($r[3], "_name"), "kios_hasilBumi");
      $b = 12; continue;
    case 12:
      if ($.bool(s0)) { $b = 14; continue; }
      $b = 13; continue;
    case 13:
      s0 = $.eq($.gm($r[3], "_name"), "kios_senjata");
      $b = 14; continue;
    case 14:
      if ($.bool(s0)) { $b = 16; continue; }
      $b = 15; continue;
    case 15:
      s0 = $.eq($.gm($r[3], "_name"), "pusat_desa");
      $b = 16; continue;
    case 16:
      if ($.bool(s0)) { $b = 18; continue; }
      $b = 17; continue;
    case 17:
      s0 = $.eq($.gm($r[3], "_name"), "blacksmith");
      $b = 18; continue;
    case 18:
      if (!$.bool(s0)) { $b = 20; continue; }
      $b = 19; continue;
    case 19:
      t8 = $.cm($.get($sc, "des"), "gotoAndStop", [3]);
      $b = 20; continue;
    case 20:
      $.sm($.gm($.get($sc, "des"), "lvl"), "text", $.gm($r[3], "isSetLevel"));
      $.sm($.gm($.get($sc, "des"), "judul"), "text", $.gm($.gm($.gm($.gm($r[2], "desList"), $.gm($r[3], "id")), 4), $.get($sc, "bahasa")));
      $.sm($.gm($.get($sc, "des"), "des"), "text", $.gm($.gm($.gm($.gm($r[2], "desList"), $.gm($r[3], "id")), 1), $.get($sc, "bahasa")));
      if (!$.eq($.gm($r[3], "_name"), "tenda")) { $b = 22; continue; }
      $b = 21; continue;
    case 21:
      $.sm($.gm($.get($sc, "des"), "des"), "text", $.add($.gm($.gm($.get($sc, "des"), "des"), "text"), $.add($.add("\n\nSupport: \n", ($.n($.gm($.gm($.gm($r[2], "desList"), $.gm($r[3], "id")), 5)) * $.n($.gm($r[3], "isSetLevel")))), " populations")));
      $b = 22; continue;
    case 22:
      $.sm($.get($sc, "des"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var $tgt = $.clipOf($sc);
    var t1;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      t1 = $.cf($sc, "efekFade", [$r[1]]);
      if (!$.gt($.gp($tgt, "_xmouse"), ($.n($.gm($.get($sc, "Stage"), "width")) / 2))) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      $.sm($.get($sc, "des"), "_x", ($.n($.gp($tgt, "_xmouse")) - $.n($.gm($.get($sc, "des"), "_width"))));
      $b = 3; continue;
    case 2:
      $.sm($.get($sc, "des"), "_x", $.gp($tgt, "_xmouse"));
      $b = 3; continue;
    case 3:
      if (!$.gt($.gp($tgt, "_ymouse"), ($.n($.gm($.get($sc, "Stage"), "height")) / 2))) { $b = 5; continue; }
      $b = 4; continue;
    case 4:
      $.sm($.get($sc, "des"), "_y", ($.n($.gp($tgt, "_ymouse")) - $.n($.gm($.get($sc, "des"), "_height"))));
      $b = 7; continue;
    case 5:
      $.sm($.get($sc, "des"), "_y", $.gp($tgt, "_ymouse"));
      $b = 7; continue;
    case 7: return;
    }
  }));
      $b = 23; continue;
    case 23: return;
    }
  }));
    $.def($sc, "upgradeSomething", $.fn({"n":"upgradeSomething","p":[],"r":5,"f":105}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, en1, t2, t3, t4, t5, t6, t7, en2, t8, t9, t10, t11, t12, t13, t14;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $r[3] = undefined;
      t1 = $.cm($.get($sc, "des"), "removeMovieClip", []);
      en1 = $.enumerate($.get($sc, "resourceList"));
      s0 = en1;
      $b = 1; continue;
    case 1:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 7; continue; }
      $b = 2; continue;
    case 2:
      t2 = $r[0];
      $r[4] = t2;
      if (!!(($.n($.gm($.get($sc, "resourceList"), $r[4])) - ($.n($.gm($.gm($.gm($.get($sc, "desList"), $.gm($r[1], "id")), 3), $r[4])) * ($.n($.add(1, $.gm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $.gm($r[1], "j")), 0))) / 2))) < 0)) { $b = 4; continue; }
      $b = 3; continue;
    case 3:
      $r[3] = true;
      $b = 5; continue;
    case 4:
      t3 = $.cf($sc, "soundFX", ["error"]);
      t4 = $.cf($sc, "tampilDialog", [4]);
      $r[3] = false;
      $b = 6; continue;
    case 5:
      $b = 1; continue;
    case 6:
      while (s0.shift() !== null) ;
      $b = 7; continue;
    case 7:
      if (!$.bool($r[3])) { $b = 22; continue; }
      $b = 8; continue;
    case 8:
      if (!!$.gt($.add($.gm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $.gm($r[1], "j")), 0), 1), 9)) { $b = 20; continue; }
      $b = 9; continue;
    case 9:
      en2 = $.enumerate($.get($sc, "resourceList"));
      s0 = en2;
      $b = 10; continue;
    case 10:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 12; continue; }
      $b = 11; continue;
    case 11:
      t9 = $r[0];
      $r[4] = t9;
      $.sm($.get($sc, "resourceList"), $r[4], ($.n($.gm($.get($sc, "resourceList"), $r[4])) - ($.n($.gm($.gm($.gm($.get($sc, "desList"), $.gm($r[1], "id")), 3), $r[4])) * ($.n($.add(1, $.gm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $.gm($r[1], "j")), 0))) / 2))));
      $b = 10; continue;
    case 12:
      t8 = $.cf($sc, "soundFX", ["build"]);
      if (!$.eq($.gm($r[1], "j"), undefined)) { $b = 14; continue; }
      $b = 13; continue;
    case 13:
      $.sm($r[1], "j", 0);
      $b = 14; continue;
    case 14:
      $.sm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $.gm($r[1], "j")), 0, $.add($.gm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $.gm($r[1], "j")), 0), 1));
      if (!!$.bool($.get($sc, "challenge14"))) { $b = 19; continue; }
      $b = 15; continue;
    case 15:
      t12 = $.eq($.gm($r[1], "id"), 12);
      t13 = !t12;
      s0 = t12;
      if (t13) { $b = 17; continue; }
      $b = 16; continue;
    case 16:
      s0 = $.eq($.gm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $.gm($r[1], "j")), 0), 9);
      $b = 17; continue;
    case 17:
      if (!$.bool(s0)) { $b = 19; continue; }
      $b = 18; continue;
    case 18:
      t14 = $.cm($r[2], "scoreHTTPSender", ["FL091017", "CH014"]);
      $.set($sc, "challenge14", true);
      $b = 19; continue;
    case 19:
      t10 = $.cm($r[2], "gantiPeta", []);
      t11 = $.cm($.gm($r[1], "_parent"), "removeMovieClip", []);
      $b = 22; continue;
    case 20:
      t5 = $.cf($sc, "soundFX", ["error"]);
      t6 = $.cf($sc, "tampilDialog", [5]);
      $r[3] = false;
      t7 = $.cm($.gm($r[1], "_parent"), "removeMovieClip", []);
      $b = 22; continue;
    case 22: return;
    }
  }));
    $.def($sc, "tampilMenuUpgrade", $.fn({"n":"tampilMenuUpgrade","p":[[0,"who"]],"r":4,"f":105}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3;
    $.set($sc, "aktifTombol", false);
    t1 = $.cm($r[2], "attachMovie", ["menu_upgrade", "menu_bs", 1000]);
    $.sm($.get($sc, "menu_bs"), "_x", ($.n($.gm($.get($sc, "Stage"), "width")) / 2));
    $.sm($.get($sc, "menu_bs"), "_y", ($.n($.gm($.get($sc, "Stage"), "height")) / 2));
    $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.gm($.get($sc, "rollText"), $.get($sc, "bahasa")));
    $.sm($.gm($.get($sc, "menu_bs"), "jual_btn"), "onRollOver", $.fn({"n":"","p":[],"r":2,"f":106}, $sc, function($sc, $this, $args, $r) {
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!$.eq($.get($sc, "bahasa"), 0)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.add($.add($.add($.add($.add($.add($.add($.add($.gm($.get($sc, "sellBahasa"), $.gm($r[1], "bahasa")), "Gold: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 1)), " Food: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 2)), " Iron: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 3)), " Wood: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 4)));
      $b = 6; continue;
    case 2:
      if (!$.eq($.get($sc, "bahasa"), 1)) { $b = 4; continue; }
      $b = 3; continue;
    case 3:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.add($.add($.add($.add($.add($.add($.add($.add($.gm($.get($sc, "sellBahasa"), $.gm($r[1], "bahasa")), "Or: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 1)), " Nourriture: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 2)), " Fer: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 3)), " Boil: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 4)));
      $b = 6; continue;
    case 4:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.add($.add($.add($.add($.add($.add($.add($.add($.gm($.get($sc, "sellBahasa"), $.gm($r[1], "bahasa")), "Emas: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 1)), " Makanan: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 2)), " Besi: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 3)), " Kayu: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 4)));
      $b = 6; continue;
    case 6: return;
    }
  }));
    $.sm($.gm($.get($sc, "menu_bs"), "jual_btn"), "onRollOut", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.gm($.get($sc, "rollText"), $.get($sc, "bahasa")));
  }));
    $.sm($.gm($.get($sc, "menu_bs"), "jual_btn"), "onRelease", $.fn({"n":"","p":[],"r":4,"f":105}, $sc, function($sc, $this, $args, $r) {
    var s0, en1, t1, t2, t3;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.set($sc, "aktifTombol", true);
      $.sm($.get($sc, "who"), "_visible", 0);
      en1 = $.enumerate($.get($sc, "resourceList"));
      s0 = en1;
      $b = 1; continue;
    case 1:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      t3 = $r[0];
      $r[3] = t3;
      $.sm($.get($sc, "resourceList"), $r[3], $.add($.gm($.get($sc, "resourceList"), $r[3]), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), $r[3])));
      $b = 1; continue;
    case 3:
      $.sm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $.gm($.get($sc, "who"), "j")), 0, 0);
      t1 = $.cm($r[2], "gantiPeta", []);
      t2 = $.cm($.gm($r[1], "_parent"), "removeMovieClip", []);
      $b = 4; continue;
    case 4: return;
    }
  }));
    $.sm($.gm($.get($sc, "menu_bs"), "upgrade_btn"), "id", $.gm($.get($sc, "who"), "id"));
    $.sm($.gm($.get($sc, "menu_bs"), "upgrade_btn"), "j", $.gm($.get($sc, "who"), "j"));
    $.sm($.gm($.get($sc, "menu_bs"), "upgrade_btn"), "onRollOver", $.fn({"n":"","p":[],"r":3,"f":105}, $sc, function($sc, $this, $args, $r) {
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!$.eq($.get($sc, "bahasa"), 0)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.add($.add($.add($.add($.add($.add($.add($.add($.gm($.get($sc, "upgradeBahasa"), $.get($sc, "bahasa")), "Gold: "), ($.n($.gm($.gm($.gm($.get($sc, "desList"), $.gm($r[1], "id")), 3), 1)) * ($.n($.add(1, $.gm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $.gm($r[1], "j")), 0))) / 2))), " Food: "), ($.n($.gm($.gm($.gm($.get($sc, "desList"), $.gm($r[1], "id")), 3), 2)) * ($.n($.add(1, $.gm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $.gm($r[1], "j")), 0))) / 2))), " Iron: "), ($.n($.gm($.gm($.gm($.get($sc, "desList"), $.gm($r[1], "id")), 3), 3)) * ($.n($.add(1, $.gm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $.gm($r[1], "j")), 0))) / 2))), " Wood: "), ($.n($.gm($.gm($.gm($.get($sc, "desList"), $.gm($r[1], "id")), 3), 4)) * ($.n($.add(1, $.gm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $.gm($r[1], "j")), 0))) / 2))));
      $b = 6; continue;
    case 2:
      if (!$.eq($.get($sc, "bahasa"), 1)) { $b = 4; continue; }
      $b = 3; continue;
    case 3:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.add($.add($.add($.add($.add($.add($.add($.add($.gm($.get($sc, "upgradeBahasa"), $.get($sc, "bahasa")), "Or: "), ($.n($.gm($.gm($.gm($.get($sc, "desList"), $.gm($r[1], "id")), 3), 1)) * ($.n($.add(1, $.gm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $.gm($r[1], "j")), 0))) / 2))), " Nourriture: "), ($.n($.gm($.gm($.gm($.get($sc, "desList"), $.gm($r[1], "id")), 3), 2)) * ($.n($.add(1, $.gm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $.gm($r[1], "j")), 0))) / 2))), " Fer: "), ($.n($.gm($.gm($.gm($.get($sc, "desList"), $.gm($r[1], "id")), 3), 3)) * ($.n($.add(1, $.gm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $.gm($r[1], "j")), 0))) / 2))), " Bois: "), ($.n($.gm($.gm($.gm($.get($sc, "desList"), $.gm($r[1], "id")), 3), 4)) * ($.n($.add(1, $.gm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $.gm($r[1], "j")), 0))) / 2))));
      $b = 6; continue;
    case 4:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.add($.add($.add($.add($.add($.add($.add($.add($.gm($.get($sc, "upgradeBahasa"), $.get($sc, "bahasa")), "Emas: "), ($.n($.gm($.gm($.gm($.get($sc, "desList"), $.gm($r[1], "id")), 3), 1)) * ($.n($.add(1, $.gm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $.gm($r[1], "j")), 0))) / 2))), " Makanan: "), ($.n($.gm($.gm($.gm($.get($sc, "desList"), $.gm($r[1], "id")), 3), 2)) * ($.n($.add(1, $.gm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $.gm($r[1], "j")), 0))) / 2))), " Besi: "), ($.n($.gm($.gm($.gm($.get($sc, "desList"), $.gm($r[1], "id")), 3), 3)) * ($.n($.add(1, $.gm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $.gm($r[1], "j")), 0))) / 2))), " Kayu: "), ($.n($.gm($.gm($.gm($.get($sc, "desList"), $.gm($r[1], "id")), 3), 4)) * ($.n($.add(1, $.gm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $.gm($r[1], "j")), 0))) / 2))));
      $b = 6; continue;
    case 6: return;
    }
  }));
    $.sm($.gm($.get($sc, "menu_bs"), "upgrade_btn"), "onRollOut", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.gm($.get($sc, "rollText"), $.get($sc, "bahasa")));
  }));
    $.sm($.gm($.get($sc, "menu_bs"), "upgrade_btn"), "onRelease", $.get($sc, "upgradeSomething"));
    t2 = $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    $.set($sc, "aktifTombol", true);
    t1 = $.cf($sc, "gantiPeta", []);
    t2 = $.cm($.gm($r[1], "_parent"), "removeMovieClip", []);
  });
    $r[0] = t2;
    t3 = $.gm($.get($sc, "menu_bs"), "cancel_btn");
    $.sm($.gm($.get($sc, "menu_bs"), "oke_btn"), "onRelease", t2);
    $.sm(t3, "onRelease", $r[0]);
  }));
    $.def($sc, "sellWeapon", $.fn({"n":"sellWeapon","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!!(($.n($.gm($.get($sc, "weaponList"), $.gm($r[1], "i"))) - 1) < 0)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      $.sm($.get($sc, "weaponList"), $.gm($r[1], "i"), ($.n($.gm($.get($sc, "weaponList"), $.gm($r[1], "i"))) - 1));
      $.sm($.get($sc, "resourceList"), 1, $.add($.gm($.get($sc, "resourceList"), 1), ($.n($.gm($.get($sc, "weaponPrice"), $.gm($r[1], "i"))) / 2)));
      $b = 4; continue;
    case 2:
      t1 = $.cf($sc, "soundFX", ["error"]);
      t2 = $.cf($sc, "tampilDialog", [4]);
      $b = 4; continue;
    case 4: return;
    }
  }));
    $.def($sc, "buyWeapon", $.fn({"n":"buyWeapon","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!!(($.n($.gm($.get($sc, "resourceList"), 1)) - $.n($.gm($.get($sc, "weaponPrice"), $.gm($r[1], "j")))) < 0)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      $.sm($.get($sc, "weaponList"), $.gm($r[1], "j"), ($.n($.gm($.get($sc, "weaponList"), $.gm($r[1], "j"))) + 1));
      $.sm($.get($sc, "resourceList"), 1, ($.n($.gm($.get($sc, "resourceList"), 1)) - $.n($.gm($.get($sc, "weaponPrice"), $.gm($r[1], "j")))));
      $b = 4; continue;
    case 2:
      t1 = $.cf($sc, "soundFX", ["error"]);
      t2 = $.cf($sc, "tampilDialog", [4]);
      $b = 4; continue;
    case 4: return;
    }
  }));
    $.def($sc, "tampilMenuSenjata", $.fn({"n":"tampilMenuSenjata","p":[[0,"who"]],"r":6,"f":105}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, en1, en2, t2, t3;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.set($sc, "aktifTombol", false);
      $r[4] = [0, "sell_pedang_btn", "sell_panah_btn", "sell_tombak_btn", "sell_pistol_btn", "sell_tongkat_btn"];
      $.def($sc, "desJual", [0, ["Sell swords weapon from stock", "Vendre un poignard du stock d’armes.", "Jual pedang dari gudang senjata"], ["Sell bows weapon from stock", "Vendre un arc du stock d’armes", "Jual busur dari gudang senjata"], ["Sell spears weapon from stock", "Vendre une lance du stock d’armes", "Jual tombak dari gudang senjata"], ["Sell guns weapon from stock", "Vendre un fusil du stock d’armes", "Jual senapan dari gudang senjata"], ["Sell staves weapon from stock", "Vendre un bâton du stock d’armes", "Jual tongkat sihir dari gudang senjata"]]);
      $r[3] = [0, "buy_pedang_btn", "buy_panah_btn", "buy_tombak_btn", "buy_pistol_btn", "buy_tongkat_btn"];
      t1 = $.cm($r[2], "attachMovie", ["menu_kiosSenjata", "menu_bs", 1000]);
      $.def($sc, "desBeli", [0, ["Buy swords weapon from stock", "Acheter un poignard", "Beli pedang dari penjual senjata"], ["Buy bows weapon from stock", "Acheter un arc", "Beli busur dari penjual senjata"], ["Buy spears weapon from stock", "Acheter une lance", "Beli tombak dari penjual senjata"], ["Buy guns weapon from stock", "Acheter un fusil", "Beli senapan dari penjual senjata"], ["Buy staves weapon from stock", "Acheter un bâton", "Beli tongkat sihir dari penjual senjata"]]);
      $.sm($.get($sc, "menu_bs"), "_x", 300);
      $.sm($.get($sc, "menu_bs"), "_y", 350);
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.gm($.get($sc, "rollText"), $.get($sc, "bahasa")));
      $.sm($.get($sc, "menu_bs"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    t1 = $.gm($r[1], "gold_text");
    t2 = $.cm($.get($sc, "Math"), "round", [$.gm($.get($sc, "resourceList"), 1)]);
    $.sm(t1, "text", t2);
  }));
      en1 = $.enumerate($r[4]);
      s0 = en1;
      $b = 1; continue;
    case 1:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      $.def($sc, "i", $r[0]);
      $.sm($.gm($.get($sc, "menu_bs"), $.gm($r[4], $.get($sc, "i"))), "i", $.get($sc, "i"));
      $.sm($.gm($.get($sc, "menu_bs"), $.gm($r[4], $.get($sc, "i"))), "onRollOver", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!$.eq($.get($sc, "bahasa"), 0)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.add($.add($.add($.gm($.gm($.get($sc, "desJual"), $.gm($r[1], "i")), $.get($sc, "bahasa")), "\nWeapon price: \n"), ($.n($.gm($.get($sc, "weaponPrice"), $.gm($r[1], "i"))) / 2)), " gold"));
      $b = 6; continue;
    case 2:
      if (!$.eq($.get($sc, "bahasa"), 1)) { $b = 4; continue; }
      $b = 3; continue;
    case 3:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.add($.add($.add($.gm($.gm($.get($sc, "desJual"), $.gm($r[1], "i")), $.get($sc, "bahasa")), "\narme de prix: \n"), ($.n($.gm($.get($sc, "weaponPrice"), $.gm($r[1], "i"))) / 2)), " or"));
      $b = 6; continue;
    case 4:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.add($.add($.add($.gm($.gm($.get($sc, "desJual"), $.gm($r[1], "i")), $.get($sc, "bahasa")), "\nHarga senjata: \n"), ($.n($.gm($.get($sc, "weaponPrice"), $.gm($r[1], "i"))) / 2)), " emas"));
      $b = 6; continue;
    case 6: return;
    }
  }));
      $.sm($.gm($.get($sc, "menu_bs"), $.gm($r[4], $.get($sc, "i"))), "onRollOut", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.gm($.get($sc, "rollText"), $.get($sc, "bahasa")));
  }));
      $.sm($.gm($.get($sc, "menu_bs"), $.gm($r[4], $.get($sc, "i"))), "onRelease", $.get($sc, "sellWeapon"));
      $b = 1; continue;
    case 3:
      en2 = $.enumerate($r[3]);
      s0 = en2;
      $b = 4; continue;
    case 4:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 6; continue; }
      $b = 5; continue;
    case 5:
      $.def($sc, "j", $r[0]);
      $.sm($.gm($.get($sc, "menu_bs"), $.gm($r[3], $.get($sc, "j"))), "j", $.get($sc, "j"));
      $.sm($.gm($.get($sc, "menu_bs"), $.gm($r[3], $.get($sc, "j"))), "onRollOver", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!$.eq($.get($sc, "bahasa"), 0)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.add($.add($.add($.gm($.gm($.get($sc, "desBeli"), $.gm($r[1], "j")), $.get($sc, "bahasa")), "\nWeapon price: \n"), $.gm($.get($sc, "weaponPrice"), $.gm($r[1], "j"))), " gold"));
      $b = 6; continue;
    case 2:
      if (!$.eq($.get($sc, "bahasa"), 1)) { $b = 4; continue; }
      $b = 3; continue;
    case 3:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.add($.add($.add($.gm($.gm($.get($sc, "desBeli"), $.gm($r[1], "j")), $.get($sc, "bahasa")), "\narme de prix: \n"), $.gm($.get($sc, "weaponPrice"), $.gm($r[1], "j"))), " or"));
      $b = 6; continue;
    case 4:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.add($.add($.add($.gm($.gm($.get($sc, "desBeli"), $.gm($r[1], "j")), $.get($sc, "bahasa")), "\nHarga senjata: \n"), $.gm($.get($sc, "weaponPrice"), $.gm($r[1], "j"))), " emas"));
      $b = 6; continue;
    case 6: return;
    }
  }));
      $.sm($.gm($.get($sc, "menu_bs"), $.gm($r[3], $.get($sc, "j"))), "onRollOut", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.gm($.get($sc, "rollText"), $.get($sc, "bahasa")));
  }));
      $.sm($.gm($.get($sc, "menu_bs"), $.gm($r[3], $.get($sc, "j"))), "onRelease", $.get($sc, "buyWeapon"));
      $b = 4; continue;
    case 6:
      $.sm($.gm($.get($sc, "menu_bs"), "jual_btn"), "onRollOver", $.fn({"n":"","p":[],"r":2,"f":106}, $sc, function($sc, $this, $args, $r) {
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!$.eq($.get($sc, "bahasa"), 0)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.add($.add($.add($.add($.add($.add($.add($.add($.gm($.get($sc, "sellBahasa"), $.gm($r[1], "bahasa")), "Gold: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 1)), " Food: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 2)), " Iron: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 3)), " Wood: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 4)));
      $b = 6; continue;
    case 2:
      if (!$.eq($.get($sc, "bahasa"), 1)) { $b = 4; continue; }
      $b = 3; continue;
    case 3:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.add($.add($.add($.add($.add($.add($.add($.add($.gm($.get($sc, "sellBahasa"), $.gm($r[1], "bahasa")), "Or: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 1)), " Nourriture: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 2)), " Fer: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 3)), " Bois: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 4)));
      $b = 6; continue;
    case 4:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.add($.add($.add($.add($.add($.add($.add($.add($.gm($.get($sc, "sellBahasa"), $.gm($r[1], "bahasa")), "Emas: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 1)), " Makanan: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 2)), " Besi: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 3)), " Kayu: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 4)));
      $b = 6; continue;
    case 6: return;
    }
  }));
      $.sm($.gm($.get($sc, "menu_bs"), "jual_btn"), "onRollOut", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.gm($.get($sc, "rollText"), $.get($sc, "bahasa")));
  }));
      $.sm($.gm($.get($sc, "menu_bs"), "jual_btn"), "onRelease", $.fn({"n":"","p":[],"r":4,"f":105}, $sc, function($sc, $this, $args, $r) {
    var s0, en1, t1, t2, t3;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.set($sc, "aktifTombol", true);
      $.sm($.get($sc, "who"), "_visible", 0);
      en1 = $.enumerate($.get($sc, "resourceList"));
      s0 = en1;
      $b = 1; continue;
    case 1:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      t3 = $r[0];
      $r[3] = t3;
      $.sm($.get($sc, "resourceList"), $r[3], $.add($.gm($.get($sc, "resourceList"), $r[3]), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), $r[3])));
      $b = 1; continue;
    case 3:
      $.sm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $.gm($.get($sc, "who"), "j")), 0, 0);
      t1 = $.cm($r[2], "gantiPeta", []);
      t2 = $.cm($.gm($r[1], "_parent"), "removeMovieClip", []);
      $b = 4; continue;
    case 4: return;
    }
  }));
      $.sm($.gm($.get($sc, "menu_bs"), "oke_btn"), "onRollOver", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.gm($.get($sc, "acceptBahasa"), $.get($sc, "bahasa")));
  }));
      $.sm($.gm($.get($sc, "menu_bs"), "oke_btn"), "onRollOut", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.gm($.get($sc, "rollText"), $.get($sc, "bahasa")));
  }));
      t2 = $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    t1 = $.cf($sc, "gantiPeta", []);
    t2 = $.cm($.gm($r[1], "_parent"), "removeMovieClip", []);
  });
      $r[0] = t2;
      t3 = $.gm($.get($sc, "menu_bs"), "cancel_btn");
      $.sm($.gm($.get($sc, "menu_bs"), "oke_btn"), "onRelease", t2);
      $.sm(t3, "onRelease", $r[0]);
      $b = 7; continue;
    case 7: return;
    }
  }));
    $.def($sc, "sellResource", $.fn({"n":"sellResource","p":[],"r":3,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5, t6, t7;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      t1 = $.cm($.get($sc, "Key"), "isDown", [16]);
      if (!$.bool(t1)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      $r[2] = 5;
      $b = 3; continue;
    case 2:
      $r[2] = 1;
      $b = 3; continue;
    case 3:
      if (!!(($.n($.get($sc, "transaksi")) - (1 * $.n($r[2]))) < 0)) { $b = 8; continue; }
      $b = 4; continue;
    case 4:
      if (!!(($.n($.gm($.get($sc, "resourceList"), $.gm($r[1], "i"))) - ($.n($.gm($.get($sc, "resourcePrice"), $.gm($r[1], "i"))) * $.n($r[2]))) < 0)) { $b = 6; continue; }
      $b = 5; continue;
    case 5:
      $.sm($.get($sc, "resourceList"), $.gm($r[1], "i"), ($.n($.gm($.get($sc, "resourceList"), $.gm($r[1], "i"))) - ($.n($.gm($.get($sc, "resourcePrice"), $.gm($r[1], "i"))) * $.n($r[2]))));
      $.sm($.get($sc, "resourceList"), 1, $.add($.gm($.get($sc, "resourceList"), 1), ($.n($.add(5, $.gm($.get($sc, "townEcoStat"), 1))) * $.n($r[2]))));
      $.set($sc, "transaksi", ($.n($.get($sc, "transaksi")) - (1 * $.n($r[2]))));
      $b = 7; continue;
    case 6:
      t5 = $.cf($sc, "soundFX", ["error"]);
      t6 = $.cm($.gm($r[1], "_parent"), "removeMovieClip", []);
      t7 = $.cf($sc, "tampilDialog", [4]);
      $b = 7; continue;
    case 7:
      $b = 10; continue;
    case 8:
      t2 = $.cf($sc, "soundFX", ["error"]);
      t3 = $.cm($.gm($r[1], "_parent"), "removeMovieClip", []);
      t4 = $.cf($sc, "tampilDialog", [8]);
      $b = 10; continue;
    case 10: return;
    }
  }));
    $.def($sc, "buyResource", $.fn({"n":"buyResource","p":[],"r":3,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5, t6, t7;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      t1 = $.cm($.get($sc, "Key"), "isDown", [16]);
      if (!$.bool(t1)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      $r[2] = 5;
      $b = 3; continue;
    case 2:
      $r[2] = 1;
      $b = 3; continue;
    case 3:
      if (!!(($.n($.get($sc, "transaksi")) - (1 * $.n($r[2]))) < 0)) { $b = 8; continue; }
      $b = 4; continue;
    case 4:
      if (!!(($.n($.gm($.get($sc, "resourceList"), 1)) - (15 * $.n($r[2]))) < 0)) { $b = 6; continue; }
      $b = 5; continue;
    case 5:
      $.sm($.get($sc, "resourceList"), $.gm($r[1], "j"), $.add($.gm($.get($sc, "resourceList"), $.gm($r[1], "j")), ($.n($.gm($.get($sc, "resourcePrice"), $.gm($r[1], "j"))) * $.n($r[2]))));
      $.sm($.get($sc, "resourceList"), 1, ($.n($.gm($.get($sc, "resourceList"), 1)) - (15 * $.n($r[2]))));
      $.set($sc, "transaksi", ($.n($.get($sc, "transaksi")) - (1 * $.n($r[2]))));
      $b = 7; continue;
    case 6:
      t5 = $.cf($sc, "soundFX", ["error"]);
      t6 = $.cm($.gm($r[1], "_parent"), "removeMovieClip", []);
      t7 = $.cf($sc, "tampilDialog", [4]);
      $b = 7; continue;
    case 7:
      $b = 10; continue;
    case 8:
      t2 = $.cf($sc, "soundFX", ["error"]);
      t3 = $.cm($.gm($r[1], "_parent"), "removeMovieClip", []);
      t4 = $.cf($sc, "tampilDialog", [8]);
      $b = 10; continue;
    case 10: return;
    }
  }));
    $.def($sc, "tampilMenuResource", $.fn({"n":"tampilMenuResource","p":[[0,"who"]],"r":8,"f":105}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, en1, en2, t2, t3;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.set($sc, "aktifTombol", false);
      $r[3] = [0, 0, "sell_food_btn", "sell_iron_btn", "sell_wood_btn"];
      $r[7] = [0, 0, "Sell food resource to get gold", "Sell iron resource to get gold", "Sell wood resource to get gold"];
      $r[4] = [0, 0, "buy_food_btn", "buy_iron_btn", "buy_wood_btn"];
      $r[6] = [0, 0, "Buy food resource with gold", "Buy iron resource with gold", "Buy wood resource with gold"];
      t1 = $.cm($r[2], "attachMovie", ["menu_kiosResource", "menu_bs", 1000]);
      $.sm($.get($sc, "menu_bs"), "_x", 300);
      $.sm($.get($sc, "menu_bs"), "_y", 350);
      $.sm($.get($sc, "menu_bs"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    t1 = $.gm($r[1], "gold_text");
    t2 = $.cm($.get($sc, "Math"), "round", [$.gm($.get($sc, "resourceList"), 1)]);
    $.sm(t1, "text", t2);
  }));
      en1 = $.enumerate($r[3]);
      s0 = en1;
      $b = 1; continue;
    case 1:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      $.def($sc, "i", $r[0]);
      $.sm($.gm($.get($sc, "menu_bs"), $.gm($r[3], $.get($sc, "i"))), "i", $.get($sc, "i"));
      $.sm($.gm($.get($sc, "menu_bs"), $.gm($r[3], $.get($sc, "i"))), "onRollOver", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!$.eq($.get($sc, "bahasa"), 0)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.add($.add($.add($.add($.add($.add("Sell ", $.gm($.get($sc, "resourcePrice"), $.gm($r[1], "i"))), " "), $.gm($.gm($.get($sc, "resList"), $.gm($r[1], "i")), $.get($sc, "bahasa"))), " for "), $.add(5, $.gm($.get($sc, "townEcoStat"), 1))), " golds"));
      $b = 6; continue;
    case 2:
      if (!$.eq($.get($sc, "bahasa"), 1)) { $b = 4; continue; }
      $b = 3; continue;
    case 3:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.add($.add($.add($.add($.add($.add("vendre ", $.gm($.get($sc, "resourcePrice"), $.gm($r[1], "i"))), " "), $.gm($.gm($.get($sc, "resList"), $.gm($r[1], "i")), $.get($sc, "bahasa"))), " pour "), $.add(5, $.gm($.get($sc, "townEcoStat"), 1))), " pièces d'or"));
      $b = 6; continue;
    case 4:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.add($.add($.add($.add($.add($.add("Jual ", $.gm($.get($sc, "resourcePrice"), $.gm($r[1], "i"))), " "), $.gm($.gm($.get($sc, "resList"), $.gm($r[1], "i")), $.get($sc, "bahasa"))), " seharga "), $.add(5, $.gm($.get($sc, "townEcoStat"), 1))), " emas"));
      $b = 6; continue;
    case 6: return;
    }
  }));
      $.sm($.gm($.get($sc, "menu_bs"), $.gm($r[3], $.get($sc, "i"))), "onRollOut", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.gm($.get($sc, "multiplyBahasa"), $.get($sc, "bahasa")));
  }));
      $.sm($.gm($.get($sc, "menu_bs"), $.gm($r[3], $.get($sc, "i"))), "onRelease", $.get($sc, "sellResource"));
      $b = 1; continue;
    case 3:
      en2 = $.enumerate($r[4]);
      s0 = en2;
      $b = 4; continue;
    case 4:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 6; continue; }
      $b = 5; continue;
    case 5:
      $.def($sc, "j", $r[0]);
      $.sm($.gm($.get($sc, "menu_bs"), $.gm($r[4], $.get($sc, "j"))), "j", $.get($sc, "j"));
      $.sm($.gm($.get($sc, "menu_bs"), $.gm($r[4], $.get($sc, "j"))), "onRollOver", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!$.eq($.get($sc, "bahasa"), 0)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.add($.add($.add($.add("Buy ", $.gm($.get($sc, "resourcePrice"), $.gm($r[1], "j"))), " "), $.gm($.gm($.get($sc, "resList"), $.gm($r[1], "j")), $.get($sc, "bahasa"))), " for 15 golds"));
      $b = 6; continue;
    case 2:
      if (!$.eq($.get($sc, "bahasa"), 1)) { $b = 4; continue; }
      $b = 3; continue;
    case 3:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.add($.add($.add($.add("acheter ", $.gm($.get($sc, "resourcePrice"), $.gm($r[1], "j"))), " "), $.gm($.gm($.get($sc, "resList"), $.gm($r[1], "j")), $.get($sc, "bahasa"))), "pour 15 pièces d’or"));
      $b = 6; continue;
    case 4:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.add($.add($.add($.add("Beli ", $.gm($.get($sc, "resourcePrice"), $.gm($r[1], "j"))), " "), $.gm($.gm($.get($sc, "resList"), $.gm($r[1], "j")), $.get($sc, "bahasa"))), " seharga 15 emas"));
      $b = 6; continue;
    case 6: return;
    }
  }));
      $.sm($.gm($.get($sc, "menu_bs"), $.gm($r[4], $.get($sc, "j"))), "onRollOut", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.gm($.get($sc, "multiplyBahasa"), $.get($sc, "bahasa")));
  }));
      $.sm($.gm($.get($sc, "menu_bs"), $.gm($r[4], $.get($sc, "j"))), "onRelease", $.get($sc, "buyResource"));
      $b = 4; continue;
    case 6:
      $.sm($.gm($.get($sc, "menu_bs"), "jual_btn"), "onRollOver", $.fn({"n":"","p":[],"r":2,"f":106}, $sc, function($sc, $this, $args, $r) {
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!$.eq($.get($sc, "bahasa"), 0)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.add($.add($.add($.add($.add($.add($.add($.add($.gm($.get($sc, "sellBahasa"), $.gm($r[1], "bahasa")), "Gold: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 1)), " Food: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 2)), " Iron: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 3)), " Wood: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 4)));
      $b = 6; continue;
    case 2:
      if (!$.eq($.get($sc, "bahasa"), 1)) { $b = 4; continue; }
      $b = 3; continue;
    case 3:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.add($.add($.add($.add($.add($.add($.add($.add($.gm($.get($sc, "sellBahasa"), $.gm($r[1], "bahasa")), "Or: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 1)), " Nourriture: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 2)), " Fer: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 3)), " Bois: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 4)));
      $b = 6; continue;
    case 4:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.add($.add($.add($.add($.add($.add($.add($.add($.gm($.get($sc, "sellBahasa"), $.gm($r[1], "bahasa")), "Emas: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 1)), " Makanan: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 2)), " Besi: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 3)), " Kayu: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 4)));
      $b = 6; continue;
    case 6: return;
    }
  }));
      $.sm($.gm($.get($sc, "menu_bs"), "jual_btn"), "onRollOut", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.gm($.get($sc, "rollText"), $.get($sc, "bahasa")));
  }));
      $.sm($.gm($.get($sc, "menu_bs"), "jual_btn"), "onRelease", $.fn({"n":"","p":[],"r":4,"f":105}, $sc, function($sc, $this, $args, $r) {
    var s0, en1, t1, t2, t3;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.set($sc, "aktifTombol", true);
      $.sm($.get($sc, "who"), "_visible", 0);
      en1 = $.enumerate($.get($sc, "resourceList"));
      s0 = en1;
      $b = 1; continue;
    case 1:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      t3 = $r[0];
      $r[3] = t3;
      $.sm($.get($sc, "resourceList"), $r[3], $.add($.gm($.get($sc, "resourceList"), $r[3]), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), $r[3])));
      $b = 1; continue;
    case 3:
      $.sm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $.gm($.get($sc, "who"), "j")), 0, 0);
      t1 = $.cm($r[2], "gantiPeta", []);
      t2 = $.cm($.gm($r[1], "_parent"), "removeMovieClip", []);
      $b = 4; continue;
    case 4: return;
    }
  }));
      $.sm($.gm($.get($sc, "menu_bs"), "oke_btn"), "onRollOver", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.gm($.get($sc, "acceptBahasa"), $.get($sc, "bahasa")));
  }));
      $.sm($.gm($.get($sc, "menu_bs"), "oke_btn"), "onRollOut", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.gm($.get($sc, "rollText"), $.get($sc, "bahasa")));
  }));
      t2 = $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    $.set($sc, "aktifTombol", true);
    t1 = $.cf($sc, "gantiPeta", []);
    t2 = $.cm($.gm($r[1], "_parent"), "removeMovieClip", []);
  });
      $r[0] = t2;
      t3 = $.gm($.get($sc, "menu_bs"), "cancel_btn");
      $.sm($.gm($.get($sc, "menu_bs"), "oke_btn"), "onRelease", t2);
      $.sm(t3, "onRelease", $r[0]);
      $b = 7; continue;
    case 7: return;
    }
  }));
    $.def($sc, "beliSenjata", $.fn({"n":"beliSenjata","p":[],"r":5,"f":41}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, t2, en1, t3, t4, t5, en2, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      t1 = $.cm($.get($sc, "Key"), "isDown", [16]);
      if (!$.bool(t1)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      $r[2] = 5;
      $b = 3; continue;
    case 2:
      $r[2] = 1;
      $b = 3; continue;
    case 3:
      $r[3] = undefined;
      t2 = $.cm($.get($sc, "des"), "removeMovieClip", []);
      en1 = $.enumerate($.get($sc, "resourceList"));
      s0 = en1;
      $b = 4; continue;
    case 4:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 10; continue; }
      $b = 5; continue;
    case 5:
      t3 = $r[0];
      $r[4] = t3;
      t4 = $.gm($.get($sc, "resourceList"), $r[4]);
      t5 = $.cm($.get($sc, "Math"), "round", [($.n($.gm($.gm($.gm($.get($sc, "armyDescList"), $.gm($r[1], "i")), 4), $r[4])) / 1.5)]);
      if (!!(($.n(t4) - ($.n(t5) * $.n($r[2]))) < 0)) { $b = 7; continue; }
      $b = 6; continue;
    case 6:
      $r[3] = true;
      $b = 8; continue;
    case 7:
      t6 = $.cf($sc, "soundFX", ["error"]);
      $r[3] = false;
      $b = 9; continue;
    case 8:
      $b = 4; continue;
    case 9:
      while (s0.shift() !== null) ;
      $b = 10; continue;
    case 10:
      if (!$.bool($r[3])) { $b = 16; continue; }
      $b = 11; continue;
    case 11:
      en2 = $.enumerate($.get($sc, "resourceList"));
      s0 = en2;
      $b = 12; continue;
    case 12:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 14; continue; }
      $b = 13; continue;
    case 13:
      t8 = $r[0];
      $r[4] = t8;
      t9 = $.get($sc, "resourceBuyWeapon");
      t10 = $r[4];
      t11 = $.gm($.get($sc, "resourceBuyWeapon"), $r[4]);
      t12 = $.cm($.get($sc, "Math"), "round", [($.n($.gm($.gm($.gm($.get($sc, "armyDescList"), $.gm($r[1], "i")), 4), $r[4])) / 1.5)]);
      $.sm(t9, t10, $.add(t11, ($.n(t12) * $.n($r[2]))));
      t13 = $.get($sc, "resourceList");
      t14 = $r[4];
      t15 = $.gm($.get($sc, "resourceList"), $r[4]);
      t16 = $.cm($.get($sc, "Math"), "round", [($.n($.gm($.gm($.gm($.get($sc, "armyDescList"), $.gm($r[1], "i")), 4), $r[4])) / 1.5)]);
      $.sm(t13, t14, ($.n(t15) - ($.n(t16) * $.n($r[2]))));
      $b = 12; continue;
    case 14:
      t7 = $.cf($sc, "soundFX", ["build"]);
      $.sm($.get($sc, "weaponProduce"), $.gm($r[1], "i"), $.add($.gm($.get($sc, "weaponProduce"), $.gm($r[1], "i")), (1 * $.n($r[2]))));
      $b = 16; continue;
    case 16: return;
    }
  }));
    $.def($sc, "tampilMenuBlacksmith", $.fn({"n":"tampilMenuBlacksmith","p":[[0,"who"]],"r":6,"f":105}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.set($sc, "aktifTombol", false);
      $r[3] = [0, "ppedang_btn", "ppanah_btn", "ptombak_btn", "ppistol_btn", "ptongkat_btn"];
      $.def($sc, "ketTombol", [0, ["Make sword weapon and add it to weapon stock\nResource to produce:\n", "Fabriquer un poignard et l’ajouter au stock d’armes.\nressources pour produire:\n", "Pesan senjata pedang dan menyimpannya di gudang senjata\nSumber daya yang diperlukan:\n"], ["Make bow weapon and add it to weapon stock\nResource to produce:\n", "Fabriquer un arc et l’ajouter au stock d’armes\nressources pour produire:\n", "Pesan senjata busur dan menyimpannya di gudang senjata\nSumber daya yang diperlukan:\n"], ["Make spear weapon and add it to weapon stock\nResource to produce:\n", "Fabriquer une lance et l’ajouter au stock d’armes\nressources pour produire:\n", "Pesan senjata tombak dan menyimpannya di gudang senjata\nSumber daya yang diperlukan:\n"], ["Make gun weapon and add it to weapon stock\nResource to produce:\n", "Fabriquer un fusil et l’ajouter au stock d’armes\nressources pour produire:\n", "Pesan senjata senapan dan menyimpannya di gudang senjata\nSumber daya yang diperlukan:\n"], ["Make magic staff weapon and add it to weapon stock\nResource to produce:\n", "Fabriquer un bâton et l’ajouter au stock d’armes\nressources pour produire:\n", "Pesan senjata tongkat sihir dan menyimpannya di gudang senjata\nSumber daya yang diperlukan:\n"]]);
      t1 = $.cm($r[2], "attachMovie", ["menu_blacksmith", "menu_bs", 1000]);
      $.sm($.get($sc, "menu_bs"), "_x", 300);
      $.sm($.get($sc, "menu_bs"), "_y", 350);
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.gm($.get($sc, "multiplyBahasa"), $.get($sc, "bahasa")));
      $.sm($.get($sc, "menu_bs"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":42}, $sc, function($sc, $this, $args, $r) {
    var t1;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $r[1] = 0;
      $b = 1; continue;
    case 1:
      if (!!$.gt($r[1], 5)) { $b = 4; continue; }
      $b = 2; continue;
    case 2:
      $.sm($.gm($.get($sc, "menu_bs"), $.add("ket", $r[1])), "text", $.gm($.get($sc, "weaponProduce"), $r[1]));
      t1 = ($.n($r[1]) + 1);
      $r[1] = t1;
      $b = 1; continue;
    case 4: return;
    }
  }));
      $.def($sc, "i", 0);
      $b = 1; continue;
    case 1:
      if (!!$.gt($.get($sc, "i"), $.gm($r[3], "length"))) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      t2 = $.get($sc, "i");
      $r[0] = t2;
      t3 = $.gm($.get($sc, "menu_bs"), $.add("ket", $.get($sc, "i")));
      $.sm($.gm($.get($sc, "menu_bs"), $.gm($r[3], $.get($sc, "i"))), "i", t2);
      $.sm(t3, "text", $r[0]);
      $.sm($.gm($.get($sc, "menu_bs"), $.gm($r[3], $.get($sc, "i"))), "onRollOver", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!$.eq($.get($sc, "bahasa"), 0)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t1 = $.gm($.get($sc, "menu_bs"), "des");
      t2 = $.add($.gm($.gm($.get($sc, "ketTombol"), $.gm($r[1], "i")), $.get($sc, "bahasa")), "Gold: ");
      t3 = $.cm($.get($sc, "Math"), "round", [($.n($.gm($.gm($.gm($.get($sc, "armyDescList"), $.gm($r[1], "i")), 4), 1)) / 1.5)]);
      t4 = $.cm($.get($sc, "Math"), "round", [($.n($.gm($.gm($.gm($.get($sc, "armyDescList"), $.gm($r[1], "i")), 4), 2)) / 1.5)]);
      t5 = $.cm($.get($sc, "Math"), "round", [($.n($.gm($.gm($.gm($.get($sc, "armyDescList"), $.gm($r[1], "i")), 4), 3)) / 1.5)]);
      t6 = $.cm($.get($sc, "Math"), "round", [($.n($.gm($.gm($.gm($.get($sc, "armyDescList"), $.gm($r[1], "i")), 4), 4)) / 1.5)]);
      $.sm(t1, "text", $.add($.add($.add($.add($.add($.add($.add(t2, t3), " Food: "), t4), " Iron: "), t5), " Wood: "), t6));
      $b = 6; continue;
    case 2:
      if (!$.eq($.get($sc, "bahasa"), 1)) { $b = 4; continue; }
      $b = 3; continue;
    case 3:
      t13 = $.gm($.get($sc, "menu_bs"), "des");
      t14 = $.add($.gm($.gm($.get($sc, "ketTombol"), $.gm($r[1], "i")), $.get($sc, "bahasa")), "Or: ");
      t15 = $.cm($.get($sc, "Math"), "round", [($.n($.gm($.gm($.gm($.get($sc, "armyDescList"), $.gm($r[1], "i")), 4), 1)) / 1.5)]);
      t16 = $.cm($.get($sc, "Math"), "round", [($.n($.gm($.gm($.gm($.get($sc, "armyDescList"), $.gm($r[1], "i")), 4), 2)) / 1.5)]);
      t17 = $.cm($.get($sc, "Math"), "round", [($.n($.gm($.gm($.gm($.get($sc, "armyDescList"), $.gm($r[1], "i")), 4), 3)) / 1.5)]);
      t18 = $.cm($.get($sc, "Math"), "round", [($.n($.gm($.gm($.gm($.get($sc, "armyDescList"), $.gm($r[1], "i")), 4), 4)) / 1.5)]);
      $.sm(t13, "text", $.add($.add($.add($.add($.add($.add($.add(t14, t15), " Nourriture: "), t16), " Fer: "), t17), " Bois: "), t18));
      $b = 6; continue;
    case 4:
      t7 = $.gm($.get($sc, "menu_bs"), "des");
      t8 = $.add($.gm($.gm($.get($sc, "ketTombol"), $.gm($r[1], "i")), $.get($sc, "bahasa")), "Emas: ");
      t9 = $.cm($.get($sc, "Math"), "round", [($.n($.gm($.gm($.gm($.get($sc, "armyDescList"), $.gm($r[1], "i")), 4), 1)) / 1.5)]);
      t10 = $.cm($.get($sc, "Math"), "round", [($.n($.gm($.gm($.gm($.get($sc, "armyDescList"), $.gm($r[1], "i")), 4), 2)) / 1.5)]);
      t11 = $.cm($.get($sc, "Math"), "round", [($.n($.gm($.gm($.gm($.get($sc, "armyDescList"), $.gm($r[1], "i")), 4), 3)) / 1.5)]);
      t12 = $.cm($.get($sc, "Math"), "round", [($.n($.gm($.gm($.gm($.get($sc, "armyDescList"), $.gm($r[1], "i")), 4), 4)) / 1.5)]);
      $.sm(t7, "text", $.add($.add($.add($.add($.add($.add($.add(t8, t9), " Makanan: "), t10), " Besi: "), t11), " Kayu: "), t12));
      $b = 6; continue;
    case 6: return;
    }
  }));
      $.sm($.gm($.get($sc, "menu_bs"), $.gm($r[3], $.get($sc, "i"))), "onRollOut", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.gm($.get($sc, "multiplyBahasa"), $.get($sc, "bahasa")));
  }));
      $.sm($.gm($.get($sc, "menu_bs"), $.gm($r[3], $.get($sc, "i"))), "onRelease", $.get($sc, "beliSenjata"));
      $.set($sc, "i", ($.n($.get($sc, "i")) + 1));
      $b = 1; continue;
    case 3:
      $.sm($.gm($.get($sc, "menu_bs"), "jual_btn"), "onRollOver", $.fn({"n":"","p":[],"r":2,"f":106}, $sc, function($sc, $this, $args, $r) {
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!$.eq($.get($sc, "bahasa"), 0)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.add($.add($.add($.add($.add($.add($.add($.add($.gm($.get($sc, "sellBahasa"), $.gm($r[1], "bahasa")), "Gold: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 1)), " Food: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 2)), " Iron: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 3)), " Wood: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 4)));
      $b = 6; continue;
    case 2:
      if (!$.eq($.get($sc, "bahasa"), 1)) { $b = 4; continue; }
      $b = 3; continue;
    case 3:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.add($.add($.add($.add($.add($.add($.add($.add($.gm($.get($sc, "sellBahasa"), $.gm($r[1], "bahasa")), "Or: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 1)), " Nourriture: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 2)), " Fer: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 3)), " Bois: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 4)));
      $b = 6; continue;
    case 4:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.add($.add($.add($.add($.add($.add($.add($.add($.gm($.get($sc, "sellBahasa"), $.gm($r[1], "bahasa")), "Emas: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 1)), " Makanan: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 2)), " Besi: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 3)), " Kayu: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 4)));
      $b = 6; continue;
    case 6: return;
    }
  }));
      $.sm($.gm($.get($sc, "menu_bs"), "jual_btn"), "onRollOut", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.gm($.get($sc, "rollText"), $.get($sc, "bahasa")));
  }));
      $.sm($.gm($.get($sc, "menu_bs"), "jual_btn"), "onRelease", $.fn({"n":"","p":[],"r":4,"f":105}, $sc, function($sc, $this, $args, $r) {
    var s0, en1, t1, t2, t3;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.set($sc, "aktifTombol", true);
      $.sm($.get($sc, "who"), "_visible", 0);
      en1 = $.enumerate($.get($sc, "resourceList"));
      s0 = en1;
      $b = 1; continue;
    case 1:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      t3 = $r[0];
      $r[3] = t3;
      $.sm($.get($sc, "resourceList"), $r[3], $.add($.gm($.get($sc, "resourceList"), $r[3]), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), $r[3])));
      $b = 1; continue;
    case 3:
      $.sm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $.gm($.get($sc, "who"), "j")), 0, 0);
      t1 = $.cm($r[2], "gantiPeta", []);
      t2 = $.cm($.gm($r[1], "_parent"), "removeMovieClip", []);
      $b = 4; continue;
    case 4: return;
    }
  }));
      $.sm($.gm($.get($sc, "menu_bs"), "cancel_btn"), "onRollOver", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.gm($.get($sc, "cancelBahasa"), $.get($sc, "bahasa")));
  }));
      $.sm($.gm($.get($sc, "menu_bs"), "cancel_btn"), "onRollOut", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.gm($.get($sc, "rollText"), $.get($sc, "bahasa")));
  }));
      $.sm($.gm($.get($sc, "menu_bs"), "cancel_btn"), "onRelease", $.fn({"n":"","p":[],"r":4,"f":41}, $sc, function($sc, $this, $args, $r) {
    var s0, en1, en2, t1, t2, t3, t4;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      en1 = $.enumerate($.get($sc, "armyProduce"));
      s0 = en1;
      $b = 1; continue;
    case 1:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      t1 = $r[0];
      $r[3] = t1;
      $.sm($.get($sc, "weaponProduce"), $r[3], 0);
      $b = 1; continue;
    case 3:
      en2 = $.enumerate($.get($sc, "resourceList"));
      s0 = en2;
      $b = 4; continue;
    case 4:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 6; continue; }
      $b = 5; continue;
    case 5:
      t4 = $r[0];
      $r[2] = t4;
      $.sm($.get($sc, "resourceList"), $r[2], $.add($.gm($.get($sc, "resourceList"), $r[2]), $.gm($.get($sc, "resourceBuyWeapon"), $r[2])));
      $.sm($.get($sc, "resourceBuyWeapon"), $r[2], 0);
      $b = 4; continue;
    case 6:
      t2 = $.cf($sc, "gantiPeta", []);
      t3 = $.cm($.gm($r[1], "_parent"), "removeMovieClip", []);
      $b = 7; continue;
    case 7: return;
    }
  }));
      $.sm($.gm($.get($sc, "menu_bs"), "oke_btn"), "onRollOver", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.gm($.get($sc, "produceAllBahasa"), $.get($sc, "bahasa")));
  }));
      $.sm($.gm($.get($sc, "menu_bs"), "oke_btn"), "onRollOut", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.gm($.get($sc, "rollText"), $.get($sc, "bahasa")));
  }));
      $.sm($.gm($.get($sc, "menu_bs"), "oke_btn"), "onRelease", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    t1 = $.cf($sc, "gantiPeta", []);
    t2 = $.cm($.gm($r[1], "_parent"), "removeMovieClip", []);
  }));
      $b = 4; continue;
    case 4: return;
    }
  }));
    $.def($sc, "beliPasukan", $.fn({"n":"beliPasukan","p":[],"r":5,"f":41}, $sc, function($sc, $this, $args, $r) {
    var s0, s1, t1, t2, en1, t3, t4, t5, en2, t6, t7, t8;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      t1 = $.cm($.get($sc, "Key"), "isDown", [16]);
      if (!$.bool(t1)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      $r[2] = 5;
      $b = 3; continue;
    case 2:
      $r[2] = 1;
      $b = 3; continue;
    case 3:
      $r[3] = undefined;
      t2 = $.cm($.get($sc, "des"), "removeMovieClip", []);
      en1 = $.enumerate($.get($sc, "resourceList"));
      s0 = en1;
      $b = 4; continue;
    case 4:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 12; continue; }
      $b = 5; continue;
    case 5:
      t3 = $r[0];
      $r[4] = t3;
      t4 = !(($.n($.gm($.get($sc, "resourceList"), $r[4])) - ($.n($.gm($.gm($.gm($.get($sc, "armyDescList"), $.gm($r[1], "i")), 4), $r[4])) * $.n($r[2]))) < 0);
      t5 = !t4;
      s1 = t4;
      if (t5) { $b = 7; continue; }
      $b = 6; continue;
    case 6:
      s1 = !(($.n($.gm($.get($sc, "weaponList"), $.gm($r[1], "i"))) - $.n($r[2])) < 0);
      $b = 7; continue;
    case 7:
      if (!$.bool(s1)) { $b = 9; continue; }
      $b = 8; continue;
    case 8:
      $r[3] = true;
      $b = 10; continue;
    case 9:
      t6 = $.cf($sc, "soundFX", ["error"]);
      $r[3] = false;
      $b = 11; continue;
    case 10:
      $b = 4; continue;
    case 11:
      while (s0.shift() !== null) ;
      $b = 12; continue;
    case 12:
      if (!$.bool($r[3])) { $b = 18; continue; }
      $b = 13; continue;
    case 13:
      en2 = $.enumerate($.get($sc, "resourceList"));
      s0 = en2;
      $b = 14; continue;
    case 14:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 16; continue; }
      $b = 15; continue;
    case 15:
      t8 = $r[0];
      $r[4] = t8;
      $.sm($.get($sc, "resourceBuyArmy"), $r[4], $.add($.gm($.get($sc, "resourceBuyArmy"), $r[4]), ($.n($.gm($.gm($.gm($.get($sc, "armyDescList"), $.gm($r[1], "i")), 4), $r[4])) * $.n($r[2]))));
      $.sm($.get($sc, "resourceList"), $r[4], ($.n($.gm($.get($sc, "resourceList"), $r[4])) - ($.n($.gm($.gm($.gm($.get($sc, "armyDescList"), $.gm($r[1], "i")), 4), $r[4])) * $.n($r[2]))));
      $b = 14; continue;
    case 16:
      t7 = $.cf($sc, "soundFX", ["build"]);
      $.sm($.get($sc, "armyProduce"), $.gm($r[1], "i"), $.add($.gm($.get($sc, "armyProduce"), $.gm($r[1], "i")), $r[2]));
      $.sm($.get($sc, "weaponList"), $.gm($r[1], "i"), ($.n($.gm($.get($sc, "weaponList"), $.gm($r[1], "i"))) - $.n($r[2])));
      $.sm($.get($sc, "resourceWeaponBuy"), $.gm($r[1], "i"), $.add($.gm($.get($sc, "resourceWeaponBuy"), $.gm($r[1], "i")), $r[2]));
      $b = 18; continue;
    case 18: return;
    }
  }));
    $.def($sc, "tampilMenuBarrack", $.fn({"n":"tampilMenuBarrack","p":[[0,"who"]],"r":6,"f":105}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.set($sc, "aktifTombol", false);
      $r[3] = [0, "ppedang_btn", "ppanah_btn", "ptombak_btn", "ppistol_btn", "ptongkat_btn"];
      $.def($sc, "ketTombol", [0, ["Produce swordman, army of Tocho\nResource to produce:\n", "Créer un fantassin, armée de Tocho\nRessources pour produire:\n", "Memproduksi pasukan pedang, pasukan Tocho\nSumber daya yang dibutuhkan\n"], ["Produce bowman, army of Cheveyo\nResource to produce:\n", "Créer un archer, armée de Cheveyo\nRessources pour produire:\n", "Memproduksi pasukan pemanah, pasukan Cheveyo\nSumber daya yang dibutuhkan\n"], ["Produce spearman, army of Otoahnacto\nResource to produce:\n", "Créer un lancier, armée de Otoahnacto\nRessources pour produire:\n", "Memproduksi pasukan tombak, pasukan Otoachnacto\nSumber daya yang dibutuhkan\n"], ["Produce gunman, army of Nidawi\nResource to produce:\n", "Créer un fusilier, armée de Nidawi\nRessources pour produire:\n", "Memproduksi pasukan penembak, pasukan Nidawi\nSumber daya yang dibutuhkan\n"], ["Produce magician, army of Kachada\nResource to produce:\n", "Créer un sorcier, armée de Kachada\nRessources pour produire:\n", "Memproduksi pasukan penyihir, pasukan Kachada\nSumber daya yang dibutuhkan\n"]]);
      t1 = $.cm($r[2], "attachMovie", ["menu_blacksmith", "menu_bs", 1000]);
      $.sm($.get($sc, "menu_bs"), "_x", 300);
      $.sm($.get($sc, "menu_bs"), "_y", 350);
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.gm($.get($sc, "multiplyBahasa"), $.get($sc, "bahasa")));
      $.sm($.get($sc, "menu_bs"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":42}, $sc, function($sc, $this, $args, $r) {
    var t1;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $r[1] = 0;
      $b = 1; continue;
    case 1:
      if (!!$.gt($r[1], 5)) { $b = 4; continue; }
      $b = 2; continue;
    case 2:
      $.sm($.gm($.get($sc, "menu_bs"), $.add("ket", $r[1])), "text", $.gm($.get($sc, "armyProduce"), $r[1]));
      t1 = ($.n($r[1]) + 1);
      $r[1] = t1;
      $b = 1; continue;
    case 4: return;
    }
  }));
      $.def($sc, "i", 0);
      $b = 1; continue;
    case 1:
      if (!!$.gt($.get($sc, "i"), $.gm($r[3], "length"))) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      t2 = $.get($sc, "i");
      $r[0] = t2;
      t3 = $.gm($.get($sc, "menu_bs"), $.add("ket", $.get($sc, "i")));
      $.sm($.gm($.get($sc, "menu_bs"), $.gm($r[3], $.get($sc, "i"))), "i", t2);
      $.sm(t3, "text", $r[0]);
      $.sm($.gm($.get($sc, "menu_bs"), $.gm($r[3], $.get($sc, "i"))), "onRollOver", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!$.eq($.get($sc, "bahasa"), 0)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.add($.add($.add($.add($.add($.add($.add($.add($.gm($.gm($.get($sc, "ketTombol"), $.gm($r[1], "i")), $.get($sc, "bahasa")), "Gold: "), $.gm($.gm($.gm($.get($sc, "armyDescList"), $.gm($r[1], "i")), 4), 1)), " Food: "), $.gm($.gm($.gm($.get($sc, "armyDescList"), $.gm($r[1], "i")), 4), 2)), " Iron: "), $.gm($.gm($.gm($.get($sc, "armyDescList"), $.gm($r[1], "i")), 4), 3)), " Wood: "), $.gm($.gm($.gm($.get($sc, "armyDescList"), $.gm($r[1], "i")), 4), 4)));
      $b = 6; continue;
    case 2:
      if (!$.eq($.get($sc, "bahasa"), 1)) { $b = 4; continue; }
      $b = 3; continue;
    case 3:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.add($.add($.add($.add($.add($.add($.add($.add($.gm($.gm($.get($sc, "ketTombol"), $.gm($r[1], "i")), $.get($sc, "bahasa")), "Or: "), $.gm($.gm($.gm($.get($sc, "armyDescList"), $.gm($r[1], "i")), 4), 1)), " Nourriture: "), $.gm($.gm($.gm($.get($sc, "armyDescList"), $.gm($r[1], "i")), 4), 2)), " Fer: "), $.gm($.gm($.gm($.get($sc, "armyDescList"), $.gm($r[1], "i")), 4), 3)), " Bois: "), $.gm($.gm($.gm($.get($sc, "armyDescList"), $.gm($r[1], "i")), 4), 4)));
      $b = 6; continue;
    case 4:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.add($.add($.add($.add($.add($.add($.add($.add($.gm($.gm($.get($sc, "ketTombol"), $.gm($r[1], "i")), $.get($sc, "bahasa")), "Emas: "), $.gm($.gm($.gm($.get($sc, "armyDescList"), $.gm($r[1], "i")), 4), 1)), " Makanan: "), $.gm($.gm($.gm($.get($sc, "armyDescList"), $.gm($r[1], "i")), 4), 2)), " Besi: "), $.gm($.gm($.gm($.get($sc, "armyDescList"), $.gm($r[1], "i")), 4), 3)), " Kayu: "), $.gm($.gm($.gm($.get($sc, "armyDescList"), $.gm($r[1], "i")), 4), 4)));
      $b = 6; continue;
    case 6: return;
    }
  }));
      $.sm($.gm($.get($sc, "menu_bs"), $.gm($r[3], $.get($sc, "i"))), "onRollOut", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.gm($.get($sc, "multiplyBahasa"), $.get($sc, "bahasa")));
  }));
      $.sm($.gm($.get($sc, "menu_bs"), $.gm($r[3], $.get($sc, "i"))), "onRelease", $.get($sc, "beliPasukan"));
      $.set($sc, "i", ($.n($.get($sc, "i")) + 1));
      $b = 1; continue;
    case 3:
      $.sm($.gm($.get($sc, "menu_bs"), "jual_btn"), "onRollOver", $.fn({"n":"","p":[],"r":2,"f":106}, $sc, function($sc, $this, $args, $r) {
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!$.eq($.get($sc, "bahasa"), 0)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.add($.add($.add($.add($.add($.add($.add($.add($.gm($.get($sc, "sellBahasa"), $.gm($r[1], "bahasa")), "Gold: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 1)), " Food: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 2)), " Iron: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 3)), " Wood: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 4)));
      $b = 6; continue;
    case 2:
      if (!$.eq($.get($sc, "bahasa"), 1)) { $b = 4; continue; }
      $b = 3; continue;
    case 3:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.add($.add($.add($.add($.add($.add($.add($.add($.gm($.get($sc, "sellBahasa"), $.gm($r[1], "bahasa")), "Or: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 1)), " Nourriture: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 2)), " Fer: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 3)), " Bois: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 4)));
      $b = 6; continue;
    case 4:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.add($.add($.add($.add($.add($.add($.add($.add($.gm($.get($sc, "sellBahasa"), $.gm($r[1], "bahasa")), "Emas: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 1)), " Makanan: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 2)), " Besi: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 3)), " Kayu: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 4)));
      $b = 6; continue;
    case 6: return;
    }
  }));
      $.sm($.gm($.get($sc, "menu_bs"), "jual_btn"), "onRollOut", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.gm($.get($sc, "rollText"), $.get($sc, "bahasa")));
  }));
      $.sm($.gm($.get($sc, "menu_bs"), "jual_btn"), "onRelease", $.fn({"n":"","p":[],"r":4,"f":105}, $sc, function($sc, $this, $args, $r) {
    var s0, en1, t1, t2, t3;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.set($sc, "aktifTombol", true);
      $.sm($.get($sc, "who"), "_visible", 0);
      en1 = $.enumerate($.get($sc, "resourceList"));
      s0 = en1;
      $b = 1; continue;
    case 1:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      t3 = $r[0];
      $r[3] = t3;
      $.sm($.get($sc, "resourceList"), $r[3], $.add($.gm($.get($sc, "resourceList"), $r[3]), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), $r[3])));
      $b = 1; continue;
    case 3:
      $.sm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $.gm($.get($sc, "who"), "j")), 0, 0);
      t1 = $.cm($r[2], "gantiPeta", []);
      t2 = $.cm($.gm($r[1], "_parent"), "removeMovieClip", []);
      $b = 4; continue;
    case 4: return;
    }
  }));
      $.sm($.gm($.get($sc, "menu_bs"), "cancel_btn"), "onRollOver", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.gm($.get($sc, "cancelBahasa"), $.get($sc, "bahasa")));
  }));
      $.sm($.gm($.get($sc, "menu_bs"), "cancel_btn"), "onRollOut", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.gm($.get($sc, "rollText"), $.get($sc, "bahasa")));
  }));
      $.sm($.gm($.get($sc, "menu_bs"), "cancel_btn"), "onRelease", $.fn({"n":"","p":[],"r":4,"f":41}, $sc, function($sc, $this, $args, $r) {
    var s0, en1, en2, t1, t2, t3, t4;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      en1 = $.enumerate($.get($sc, "armyProduce"));
      s0 = en1;
      $b = 1; continue;
    case 1:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      t1 = $r[0];
      $r[3] = t1;
      $.sm($.get($sc, "armyProduce"), $r[3], 0);
      $b = 1; continue;
    case 3:
      en2 = $.enumerate($.get($sc, "resourceList"));
      s0 = en2;
      $b = 4; continue;
    case 4:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 6; continue; }
      $b = 5; continue;
    case 5:
      t4 = $r[0];
      $r[2] = t4;
      $.sm($.get($sc, "resourceList"), $r[2], $.add($.gm($.get($sc, "resourceList"), $r[2]), $.gm($.get($sc, "resourceBuyArmy"), $r[2])));
      $.sm($.get($sc, "resourceBuyArmy"), $r[2], 0);
      $.sm($.get($sc, "weaponList"), $r[2], $.add($.gm($.get($sc, "weaponList"), $r[2]), $.gm($.get($sc, "resourceWeaponBuy"), $r[2])));
      $.sm($.get($sc, "resourceWeaponBuy"), $r[2], 0);
      $b = 4; continue;
    case 6:
      t2 = $.cf($sc, "gantiPeta", []);
      t3 = $.cm($.gm($r[1], "_parent"), "removeMovieClip", []);
      $b = 7; continue;
    case 7: return;
    }
  }));
      $.sm($.gm($.get($sc, "menu_bs"), "oke_btn"), "onRollOver", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.gm($.get($sc, "produce2Bahasa"), $.get($sc, "bahasa")));
  }));
      $.sm($.gm($.get($sc, "menu_bs"), "oke_btn"), "onRollOut", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.gm($.get($sc, "rollText"), $.get($sc, "bahasa")));
  }));
      $.sm($.gm($.get($sc, "menu_bs"), "oke_btn"), "onRelease", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    t1 = $.cf($sc, "gantiPeta", []);
    t2 = $.cm($.gm($r[1], "_parent"), "removeMovieClip", []);
  }));
      $b = 4; continue;
    case 4: return;
    }
  }));
    $.def($sc, "upgradeTemple", $.fn({"n":"upgradeTemple","p":[],"r":4,"f":41}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, en1, t2, en2, t3, t4, t5, t6;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $r[2] = undefined;
      t1 = $.cm($.get($sc, "des"), "removeMovieClip", []);
      en1 = $.enumerate($.get($sc, "resourceList"));
      s0 = en1;
      $b = 1; continue;
    case 1:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 8; continue; }
      $b = 2; continue;
    case 2:
      t2 = $r[0];
      $r[3] = t2;
      if (!$.eq($.gm($.get($sc, "tempStat"), $.gm($r[1], "i")), 0)) { $b = 6; continue; }
      $b = 3; continue;
    case 3:
      if (!!(($.n($.gm($.get($sc, "resourceList"), $r[3])) - $.n($.gm($.gm($.get($sc, "tempPrice"), $.gm($r[1], "i")), $r[3]))) < 0)) { $b = 5; continue; }
      $b = 4; continue;
    case 4:
      $r[2] = true;
      $b = 6; continue;
    case 5:
      t3 = $.cf($sc, "soundFX", ["error"]);
      $r[2] = false;
      $b = 7; continue;
    case 6:
      $b = 1; continue;
    case 7:
      while (s0.shift() !== null) ;
      $b = 8; continue;
    case 8:
      if (!$.bool($r[2])) { $b = 14; continue; }
      $b = 9; continue;
    case 9:
      en2 = $.enumerate($.get($sc, "resourceList"));
      s0 = en2;
      $b = 10; continue;
    case 10:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 12; continue; }
      $b = 11; continue;
    case 11:
      t6 = $r[0];
      $r[3] = t6;
      $.sm($.get($sc, "resourceList"), $r[3], ($.n($.gm($.get($sc, "resourceList"), $r[3])) - $.n($.gm($.gm($.get($sc, "tempPrice"), $.gm($r[1], "i")), $r[3]))));
      $b = 10; continue;
    case 12:
      t4 = $.cf($sc, "soundFX", ["build"]);
      $.sm($.get($sc, "tempStat"), $.gm($r[1], "i"), 1);
      t5 = $.cm($r[1], "gotoAndStop", [3]);
      $b = 14; continue;
    case 14: return;
    }
  }));
    $.def($sc, "tampilMenuTemple", $.fn({"n":"tampilMenuTemple","p":[[0,"who"]],"r":4,"f":105}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.set($sc, "aktifTombol", false);
      t1 = $.cm($r[2], "attachMovie", ["menu_temple", "menu_bs", 1000]);
      $.sm($.get($sc, "menu_bs"), "_x", 300);
      $.sm($.get($sc, "menu_bs"), "_y", 350);
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.gm($.get($sc, "rollText"), $.get($sc, "bahasa")));
      $.def($sc, "i", 1);
      $b = 1; continue;
    case 1:
      if (!!$.gt($.get($sc, "i"), 5)) { $b = 6; continue; }
      $b = 2; continue;
    case 2:
      $.sm($.gm($.get($sc, "menu_bs"), $.add("upgrade", $.get($sc, "i"))), "i", $.get($sc, "i"));
      $.sm($.gm($.get($sc, "menu_bs"), $.add("upgrade", $.get($sc, "i"))), "onRollOver", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!$.eq($.get($sc, "bahasa"), 0)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.gm($.gm($.gm($.get($sc, "tempList"), $.gm($r[1], "i")), 0), $.get($sc, "bahasa")), "\n"), $.gm($.gm($.gm($.get($sc, "tempList"), $.gm($r[1], "i")), 1), $.get($sc, "bahasa"))), "\nResource to build:"), "\nGold: "), $.gm($.gm($.get($sc, "tempPrice"), $.gm($r[1], "i")), 1)), " Food: "), $.gm($.gm($.get($sc, "tempPrice"), $.gm($r[1], "i")), 2)), " Iron: "), $.gm($.gm($.get($sc, "tempPrice"), $.gm($r[1], "i")), 3)), " Wood: "), $.gm($.gm($.get($sc, "tempPrice"), $.gm($r[1], "i")), 4)));
      $b = 6; continue;
    case 2:
      if (!$.eq($.get($sc, "bahasa"), 1)) { $b = 4; continue; }
      $b = 3; continue;
    case 3:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.gm($.gm($.gm($.get($sc, "tempList"), $.gm($r[1], "i")), 0), $.get($sc, "bahasa")), "\n"), $.gm($.gm($.gm($.get($sc, "tempList"), $.gm($r[1], "i")), 1), $.get($sc, "bahasa"))), "\nRessources nécessaires:"), "\nOr: "), $.gm($.gm($.get($sc, "tempPrice"), $.gm($r[1], "i")), 1)), " Nourriture: "), $.gm($.gm($.get($sc, "tempPrice"), $.gm($r[1], "i")), 2)), " Fer: "), $.gm($.gm($.get($sc, "tempPrice"), $.gm($r[1], "i")), 3)), " Bois: "), $.gm($.gm($.get($sc, "tempPrice"), $.gm($r[1], "i")), 4)));
      $b = 6; continue;
    case 4:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.gm($.gm($.gm($.get($sc, "tempList"), $.gm($r[1], "i")), 0), $.get($sc, "bahasa")), "\n"), $.gm($.gm($.gm($.get($sc, "tempList"), $.gm($r[1], "i")), 1), $.get($sc, "bahasa"))), "\nSumber daya yang dibutuhkan:"), "\nEmas: "), $.gm($.gm($.get($sc, "tempPrice"), $.gm($r[1], "i")), 1)), " Makanan: "), $.gm($.gm($.get($sc, "tempPrice"), $.gm($r[1], "i")), 2)), " Besi: "), $.gm($.gm($.get($sc, "tempPrice"), $.gm($r[1], "i")), 3)), " Kayu: "), $.gm($.gm($.get($sc, "tempPrice"), $.gm($r[1], "i")), 4)));
      $b = 6; continue;
    case 6: return;
    }
  }));
      $.sm($.gm($.get($sc, "menu_bs"), $.add("upgrade", $.get($sc, "i"))), "onRollOut", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.gm($.get($sc, "rollText"), $.get($sc, "bahasa")));
  }));
      if (!$.eq($.gm($.get($sc, "tempStat"), $.get($sc, "i")), 0)) { $b = 4; continue; }
      $b = 3; continue;
    case 3:
      t5 = $.cm($.gm($.get($sc, "menu_bs"), $.add("upgrade", $.get($sc, "i"))), "gotoAndStop", [1]);
      $b = 5; continue;
    case 4:
      t4 = $.cm($.gm($.get($sc, "menu_bs"), $.add("upgrade", $.get($sc, "i"))), "gotoAndStop", [3]);
      $b = 5; continue;
    case 5:
      $.sm($.gm($.get($sc, "menu_bs"), $.add("upgrade", $.get($sc, "i"))), "onRelease", $.get($sc, "upgradeTemple"));
      $.set($sc, "i", ($.n($.get($sc, "i")) + 1));
      $b = 1; continue;
    case 6:
      $.sm($.gm($.get($sc, "menu_bs"), "jual_btn"), "onRollOver", $.fn({"n":"","p":[],"r":2,"f":106}, $sc, function($sc, $this, $args, $r) {
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!$.eq($.get($sc, "bahasa"), 0)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.add($.add($.add($.add($.add($.add($.add($.add($.gm($.get($sc, "sellBahasa"), $.gm($r[1], "bahasa")), "Gold: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 1)), " Food: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 2)), " Iron: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 3)), " Wood: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 4)));
      $b = 6; continue;
    case 2:
      if (!$.eq($.get($sc, "bahasa"), 1)) { $b = 4; continue; }
      $b = 3; continue;
    case 3:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.add($.add($.add($.add($.add($.add($.add($.add($.gm($.get($sc, "sellBahasa"), $.gm($r[1], "bahasa")), "Or: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 1)), " Nourriture: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 2)), " Fer: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 3)), " Bois: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 4)));
      $b = 6; continue;
    case 4:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.add($.add($.add($.add($.add($.add($.add($.add($.gm($.get($sc, "sellBahasa"), $.gm($r[1], "bahasa")), "Emas: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 1)), " Makanan: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 2)), " Besi: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 3)), " Kayu: "), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), 4)));
      $b = 6; continue;
    case 6: return;
    }
  }));
      $.sm($.gm($.get($sc, "menu_bs"), "jual_btn"), "onRollOut", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.gm($.get($sc, "rollText"), $.get($sc, "bahasa")));
  }));
      $.sm($.gm($.get($sc, "menu_bs"), "jual_btn"), "onRelease", $.fn({"n":"","p":[],"r":4,"f":105}, $sc, function($sc, $this, $args, $r) {
    var s0, en1, t1, t2, t3;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.set($sc, "aktifTombol", true);
      $.sm($.get($sc, "who"), "_visible", 0);
      en1 = $.enumerate($.get($sc, "resourceList"));
      s0 = en1;
      $b = 1; continue;
    case 1:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      t3 = $r[0];
      $r[3] = t3;
      $.sm($.get($sc, "resourceList"), $r[3], $.add($.gm($.get($sc, "resourceList"), $r[3]), $.gm($.gm($.gm($.get($sc, "desList"), $.gm($.get($sc, "who"), "id")), 3), $r[3])));
      $b = 1; continue;
    case 3:
      $.sm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $.gm($.get($sc, "who"), "j")), 0, 0);
      t1 = $.cm($r[2], "gantiPeta", []);
      t2 = $.cm($.gm($r[1], "_parent"), "removeMovieClip", []);
      $b = 4; continue;
    case 4: return;
    }
  }));
      $.sm($.gm($.get($sc, "menu_bs"), "upgrade_btn"), "id", $.gm($.get($sc, "who"), "id"));
      $.sm($.gm($.get($sc, "menu_bs"), "upgrade_btn"), "j", $.gm($.get($sc, "who"), "j"));
      $.sm($.gm($.get($sc, "menu_bs"), "upgrade_btn"), "onRollOver", $.fn({"n":"","p":[],"r":3,"f":105}, $sc, function($sc, $this, $args, $r) {
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!$.eq($.get($sc, "bahasa"), 0)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.add($.add($.add($.add($.add($.add($.add($.add($.gm($.get($sc, "upgradeBahasa"), $.get($sc, "bahasa")), "Gold: "), ($.n($.gm($.gm($.gm($.get($sc, "desList"), $.gm($r[1], "id")), 3), 1)) * ($.n($.add(1, $.gm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $.gm($r[1], "j")), 0))) / 2))), " Food: "), ($.n($.gm($.gm($.gm($.get($sc, "desList"), $.gm($r[1], "id")), 3), 2)) * ($.n($.add(1, $.gm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $.gm($r[1], "j")), 0))) / 2))), " Iron: "), ($.n($.gm($.gm($.gm($.get($sc, "desList"), $.gm($r[1], "id")), 3), 3)) * ($.n($.add(1, $.gm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $.gm($r[1], "j")), 0))) / 2))), " Wood: "), ($.n($.gm($.gm($.gm($.get($sc, "desList"), $.gm($r[1], "id")), 3), 4)) * ($.n($.add(1, $.gm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $.gm($r[1], "j")), 0))) / 2))));
      $b = 6; continue;
    case 2:
      if (!$.eq($.get($sc, "bahasa"), 1)) { $b = 4; continue; }
      $b = 3; continue;
    case 3:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.add($.add($.add($.add($.add($.add($.add($.add($.gm($.get($sc, "upgradeBahasa"), $.get($sc, "bahasa")), "Or: "), ($.n($.gm($.gm($.gm($.get($sc, "desList"), $.gm($r[1], "id")), 3), 1)) * ($.n($.add(1, $.gm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $.gm($r[1], "j")), 0))) / 2))), " Nourriture: "), ($.n($.gm($.gm($.gm($.get($sc, "desList"), $.gm($r[1], "id")), 3), 2)) * ($.n($.add(1, $.gm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $.gm($r[1], "j")), 0))) / 2))), " Fer: "), ($.n($.gm($.gm($.gm($.get($sc, "desList"), $.gm($r[1], "id")), 3), 3)) * ($.n($.add(1, $.gm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $.gm($r[1], "j")), 0))) / 2))), " Bois: "), ($.n($.gm($.gm($.gm($.get($sc, "desList"), $.gm($r[1], "id")), 3), 4)) * ($.n($.add(1, $.gm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $.gm($r[1], "j")), 0))) / 2))));
      $b = 6; continue;
    case 4:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.add($.add($.add($.add($.add($.add($.add($.add($.gm($.get($sc, "upgradeBahasa"), $.get($sc, "bahasa")), "Emas: "), ($.n($.gm($.gm($.gm($.get($sc, "desList"), $.gm($r[1], "id")), 3), 1)) * ($.n($.add(1, $.gm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $.gm($r[1], "j")), 0))) / 2))), " Makanan: "), ($.n($.gm($.gm($.gm($.get($sc, "desList"), $.gm($r[1], "id")), 3), 2)) * ($.n($.add(1, $.gm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $.gm($r[1], "j")), 0))) / 2))), " Besi: "), ($.n($.gm($.gm($.gm($.get($sc, "desList"), $.gm($r[1], "id")), 3), 3)) * ($.n($.add(1, $.gm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $.gm($r[1], "j")), 0))) / 2))), " Kayu: "), ($.n($.gm($.gm($.gm($.get($sc, "desList"), $.gm($r[1], "id")), 3), 4)) * ($.n($.add(1, $.gm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $.gm($r[1], "j")), 0))) / 2))));
      $b = 6; continue;
    case 6: return;
    }
  }));
      $.sm($.gm($.get($sc, "menu_bs"), "upgrade_btn"), "onRollOut", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.gm($.get($sc, "rollText"), $.get($sc, "bahasa")));
  }));
      $.sm($.gm($.get($sc, "menu_bs"), "upgrade_btn"), "onRelease", $.get($sc, "upgradeSomething"));
      t2 = $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    $.set($sc, "aktifTombol", true);
    t1 = $.cf($sc, "gantiPeta", []);
    t2 = $.cm($.gm($r[1], "_parent"), "removeMovieClip", []);
  });
      $r[0] = t2;
      t3 = $.gm($.get($sc, "menu_bs"), "cancel_btn");
      $.sm($.gm($.get($sc, "menu_bs"), "oke_btn"), "onRelease", t2);
      $.sm(t3, "onRelease", $r[0]);
      $b = 7; continue;
    case 7: return;
    }
  }));
    $.def($sc, "upgradeTownEco", $.fn({"n":"upgradeTownEco","p":[],"r":5,"f":105}, $sc, function($sc, $this, $args, $r) {
    var s0, s1, t1, en1, t2, t3, t4, en2, t5, t6, t7, t8;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $r[3] = undefined;
      t1 = $.cm($.get($sc, "des"), "removeMovieClip", []);
      en1 = $.enumerate($.get($sc, "resourceList"));
      s0 = en1;
      $b = 1; continue;
    case 1:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 9; continue; }
      $b = 2; continue;
    case 2:
      t2 = $r[0];
      $r[4] = t2;
      t3 = !(($.n($.gm($.get($sc, "resourceList"), $r[4])) - ($.n($.gm($.gm($.get($sc, "townEcoPrice"), $.gm($r[1], "i")), $r[4])) * ($.n($.add(1, $.gm($.get($sc, "townEcoStat"), $.gm($r[1], "i")))) / 2))) < 0);
      t4 = !t3;
      s1 = t3;
      if (t4) { $b = 4; continue; }
      $b = 3; continue;
    case 3:
      s1 = $.lt($.gm($.get($sc, "townEcoStat"), $.gm($r[1], "i")), 9);
      $b = 4; continue;
    case 4:
      if (!$.bool(s1)) { $b = 6; continue; }
      $b = 5; continue;
    case 5:
      $r[3] = true;
      $b = 7; continue;
    case 6:
      t5 = $.cf($sc, "soundFX", ["error"]);
      $r[3] = false;
      $b = 8; continue;
    case 7:
      $b = 1; continue;
    case 8:
      while (s0.shift() !== null) ;
      $b = 9; continue;
    case 9:
      if (!$.bool($r[3])) { $b = 19; continue; }
      $b = 10; continue;
    case 10:
      en2 = $.enumerate($.get($sc, "resourceList"));
      s0 = en2;
      $b = 11; continue;
    case 11:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 13; continue; }
      $b = 12; continue;
    case 12:
      t8 = $r[0];
      $r[4] = t8;
      $.sm($.get($sc, "resourceList"), $r[4], ($.n($.gm($.get($sc, "resourceList"), $r[4])) - ($.n($.gm($.gm($.get($sc, "townEcoPrice"), $.gm($r[1], "i")), $r[4])) * ($.n($.add(1, $.gm($.get($sc, "townEcoStat"), $.gm($r[1], "i")))) / 2))));
      $b = 11; continue;
    case 13:
      t6 = $.cf($sc, "soundFX", ["build"]);
      $.sm($.gm($r[2], "townEcoStat"), $.gm($r[1], "i"), $.add($.gm($.gm($r[2], "townEcoStat"), $.gm($r[1], "i")), 1));
      t7 = $.cm($r[1], "gotoAndStop", [2]);
      if (!$.eq($.get($sc, "bahasa"), 0)) { $b = 15; continue; }
      $b = 14; continue;
    case 14:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", "upgraded!");
      $b = 19; continue;
    case 15:
      if (!$.eq($.get($sc, "bahasa"), 1)) { $b = 17; continue; }
      $b = 16; continue;
    case 16:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", "mis à jour !");
      $b = 19; continue;
    case 17:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", "berhasil di upgrade!");
      $b = 19; continue;
    case 19: return;
    }
  }));
    $.def($sc, "upgradeTownMil", $.fn({"n":"upgradeTownMil","p":[],"r":5,"f":105}, $sc, function($sc, $this, $args, $r) {
    var s0, s1, t1, en1, t2, t3, t4, en2, t5, t6, t7, t8;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $r[3] = undefined;
      t1 = $.cm($.get($sc, "des"), "removeMovieClip", []);
      en1 = $.enumerate($.get($sc, "resourceList"));
      s0 = en1;
      $b = 1; continue;
    case 1:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 9; continue; }
      $b = 2; continue;
    case 2:
      t2 = $r[0];
      $r[4] = t2;
      t3 = !(($.n($.gm($.get($sc, "resourceList"), $r[4])) - ($.n($.gm($.gm($.get($sc, "townMilPrice"), $.gm($r[1], "i")), $r[4])) * ($.n($.add(1, $.gm($.get($sc, "townMilStat"), $.gm($r[1], "i")))) / 2))) < 0);
      t4 = !t3;
      s1 = t3;
      if (t4) { $b = 4; continue; }
      $b = 3; continue;
    case 3:
      s1 = $.lt($.gm($.get($sc, "townMilStat"), $.gm($r[1], "i")), 9);
      $b = 4; continue;
    case 4:
      if (!$.bool(s1)) { $b = 6; continue; }
      $b = 5; continue;
    case 5:
      $r[3] = true;
      $b = 7; continue;
    case 6:
      t5 = $.cf($sc, "soundFX", ["error"]);
      $r[3] = false;
      $b = 8; continue;
    case 7:
      $b = 1; continue;
    case 8:
      while (s0.shift() !== null) ;
      $b = 9; continue;
    case 9:
      if (!$.bool($r[3])) { $b = 19; continue; }
      $b = 10; continue;
    case 10:
      en2 = $.enumerate($.get($sc, "resourceList"));
      s0 = en2;
      $b = 11; continue;
    case 11:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 13; continue; }
      $b = 12; continue;
    case 12:
      t8 = $r[0];
      $r[4] = t8;
      $.sm($.get($sc, "resourceList"), $r[4], ($.n($.gm($.get($sc, "resourceList"), $r[4])) - ($.n($.gm($.gm($.get($sc, "townMilPrice"), $.gm($r[1], "i")), $r[4])) * ($.n($.add(1, $.gm($.get($sc, "townMilStat"), $.gm($r[1], "i")))) / 2))));
      $b = 11; continue;
    case 13:
      t6 = $.cf($sc, "soundFX", ["build"]);
      $.sm($.gm($r[2], "townMilStat"), $.gm($r[1], "i"), $.add($.gm($.gm($r[2], "townMilStat"), $.gm($r[1], "i")), 1));
      t7 = $.cm($r[1], "gotoAndStop", [2]);
      if (!$.eq($.get($sc, "bahasa"), 0)) { $b = 15; continue; }
      $b = 14; continue;
    case 14:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", "upgraded!");
      $b = 19; continue;
    case 15:
      if (!$.eq($.get($sc, "bahasa"), 1)) { $b = 17; continue; }
      $b = 16; continue;
    case 16:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", "mis à jour !");
      $b = 19; continue;
    case 17:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", "berhasil di upgrade!");
      $b = 19; continue;
    case 19: return;
    }
  }));
    $.def($sc, "upgradeTownSpe", $.fn({"n":"upgradeTownSpe","p":[],"r":5,"f":105}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, t2, en1, t3, en2, t4, t5, t6, t7, t8;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!$.eq($.gm($.get($sc, "townSpeStat"), $.gm($r[1], "i")), 0)) { $b = 21; continue; }
      $b = 1; continue;
    case 1:
      $r[3] = undefined;
      t2 = $.cm($.get($sc, "des"), "removeMovieClip", []);
      en1 = $.enumerate($.get($sc, "resourceList"));
      s0 = en1;
      $b = 2; continue;
    case 2:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 8; continue; }
      $b = 3; continue;
    case 3:
      t3 = $r[0];
      $r[4] = t3;
      if (!!(($.n($.gm($.get($sc, "resourceList"), $r[4])) - $.n($.gm($.gm($.get($sc, "townSpePrice"), $.gm($r[1], "i")), $r[4]))) < 0)) { $b = 5; continue; }
      $b = 4; continue;
    case 4:
      $r[3] = true;
      $b = 6; continue;
    case 5:
      t4 = $.cf($sc, "soundFX", ["error"]);
      $r[3] = false;
      $b = 7; continue;
    case 6:
      $b = 2; continue;
    case 7:
      while (s0.shift() !== null) ;
      $b = 8; continue;
    case 8:
      if (!$.bool($r[3])) { $b = 20; continue; }
      $b = 9; continue;
    case 9:
      en2 = $.enumerate($.get($sc, "resourceList"));
      s0 = en2;
      $b = 10; continue;
    case 10:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 12; continue; }
      $b = 11; continue;
    case 11:
      t7 = $r[0];
      $r[4] = t7;
      $.sm($.get($sc, "resourceList"), $r[4], ($.n($.gm($.get($sc, "resourceList"), $r[4])) - $.n($.gm($.gm($.get($sc, "townSpePrice"), $.gm($r[1], "i")), $r[4]))));
      $b = 10; continue;
    case 12:
      t5 = $.cf($sc, "soundFX", ["build"]);
      $.sm($.gm($r[2], "townSpeStat"), $.gm($r[1], "i"), $.add($.gm($.gm($r[2], "townSpeStat"), $.gm($r[1], "i")), 1));
      t6 = $.cm($r[1], "gotoAndStop", [2]);
      if (!$.eq($.get($sc, "bahasa"), 0)) { $b = 14; continue; }
      $b = 13; continue;
    case 13:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", "upgraded!");
      $b = 17; continue;
    case 14:
      if (!$.eq($.get($sc, "bahasa"), 1)) { $b = 16; continue; }
      $b = 15; continue;
    case 15:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", "mis à jour !");
      $b = 17; continue;
    case 16:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", "berhasil di upgrade!");
      $b = 17; continue;
    case 17:
      if (!!$.bool($.get($sc, "challenge13"))) { $b = 20; continue; }
      $b = 18; continue;
    case 18:
      if (!$.eq($.gm($r[1], "i"), 4)) { $b = 20; continue; }
      $b = 19; continue;
    case 19:
      t8 = $.cm($r[2], "scoreHTTPSender", ["FL091017", "CH013"]);
      $.set($sc, "challenge13", true);
      $b = 20; continue;
    case 20:
      $b = 23; continue;
    case 21:
      t1 = $.cf($sc, "soundFX", ["error"]);
      $b = 23; continue;
    case 23: return;
    }
  }));
    $.def($sc, "tampilMenuTowncenter", $.fn({"n":"tampilMenuTowncenter","p":[[3,"who"]],"r":4,"f":105}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5, t6, t7, t8, t9;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.set($sc, "aktifTombol", false);
      t1 = $.cm($r[2], "attachMovie", ["command_center", "menu_bs", 1000]);
      $.sm($.get($sc, "menu_bs"), "_x", 300);
      $.sm($.get($sc, "menu_bs"), "_y", 350);
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.gm($.get($sc, "rollText"), $.get($sc, "bahasa")));
      $.sm($.get($sc, "menu_bs"), "_alpha", 0);
      $.sm($.get($sc, "menu_bs"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1;
    t1 = $.cf($sc, "efekFade", [$r[1]]);
  }));
      $.def($sc, "i", 0);
      $b = 1; continue;
    case 1:
      if (!!$.gt($.get($sc, "i"), 4)) { $b = 18; continue; }
      $b = 2; continue;
    case 2:
      $.sm($.gm($.get($sc, "menu_bs"), $.add("economy", $.get($sc, "i"))), "i", $.get($sc, "i"));
      $.sm($.gm($.get($sc, "menu_bs"), $.add("economy", $.get($sc, "i"))), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    $.sm($.gm($r[1], "lev"), "text", $.gm($.get($sc, "townEcoStat"), $.gm($r[1], "i")));
  }));
      $.sm($.gm($.get($sc, "menu_bs"), $.add("economy", $.get($sc, "i"))), "onRollOver", $.fn({"n":"","p":[],"r":3,"f":105}, $sc, function($sc, $this, $args, $r) {
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!$.eq($.get($sc, "bahasa"), 0)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.gm($.gm($.gm($.gm($r[2], "townEcoDes"), $.gm($r[1], "i")), 0), $.get($sc, "bahasa")), "\n"), $.gm($.gm($.gm($.gm($r[2], "townEcoDes"), $.gm($r[1], "i")), 1), $.get($sc, "bahasa"))), "\nResource to build:"), "\nGold: "), ($.n($.gm($.gm($.get($sc, "townEcoPrice"), $.gm($r[1], "i")), 1)) * ($.n($.add(1, $.gm($.get($sc, "townEcoStat"), $.gm($r[1], "i")))) / 2))), " Food: "), ($.n($.gm($.gm($.get($sc, "townEcoPrice"), $.gm($r[1], "i")), 2)) * ($.n($.add(1, $.gm($.get($sc, "townEcoStat"), $.gm($r[1], "i")))) / 2))), " Iron: "), ($.n($.gm($.gm($.get($sc, "townEcoPrice"), $.gm($r[1], "i")), 3)) * ($.n($.add(1, $.gm($.get($sc, "townEcoStat"), $.gm($r[1], "i")))) / 2))), " Wood: "), ($.n($.gm($.gm($.get($sc, "townEcoPrice"), $.gm($r[1], "i")), 4)) * ($.n($.add(1, $.gm($.get($sc, "townEcoStat"), $.gm($r[1], "i")))) / 2))));
      $b = 6; continue;
    case 2:
      if (!$.eq($.get($sc, "bahasa"), 1)) { $b = 4; continue; }
      $b = 3; continue;
    case 3:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.gm($.gm($.gm($.gm($r[2], "townEcoDes"), $.gm($r[1], "i")), 0), $.get($sc, "bahasa")), "\n"), $.gm($.gm($.gm($.gm($r[2], "townEcoDes"), $.gm($r[1], "i")), 1), $.get($sc, "bahasa"))), "\nRessources nécessaires:"), "\nOr: "), ($.n($.gm($.gm($.get($sc, "townEcoPrice"), $.gm($r[1], "i")), 1)) * ($.n($.add(1, $.gm($.get($sc, "townEcoStat"), $.gm($r[1], "i")))) / 2))), " Nourriture: "), ($.n($.gm($.gm($.get($sc, "townEcoPrice"), $.gm($r[1], "i")), 2)) * ($.n($.add(1, $.gm($.get($sc, "townEcoStat"), $.gm($r[1], "i")))) / 2))), " Fer: "), ($.n($.gm($.gm($.get($sc, "townEcoPrice"), $.gm($r[1], "i")), 3)) * ($.n($.add(1, $.gm($.get($sc, "townEcoStat"), $.gm($r[1], "i")))) / 2))), " Bois: "), ($.n($.gm($.gm($.get($sc, "townEcoPrice"), $.gm($r[1], "i")), 4)) * ($.n($.add(1, $.gm($.get($sc, "townEcoStat"), $.gm($r[1], "i")))) / 2))));
      $b = 6; continue;
    case 4:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.gm($.gm($.gm($.gm($r[2], "townEcoDes"), $.gm($r[1], "i")), 0), $.get($sc, "bahasa")), "\n"), $.gm($.gm($.gm($.gm($r[2], "townEcoDes"), $.gm($r[1], "i")), 1), $.get($sc, "bahasa"))), "\nSumber daya yang dibutuhkan:"), "\nEmas: "), ($.n($.gm($.gm($.get($sc, "townEcoPrice"), $.gm($r[1], "i")), 1)) * ($.n($.add(1, $.gm($.get($sc, "townEcoStat"), $.gm($r[1], "i")))) / 2))), " Makanan: "), ($.n($.gm($.gm($.get($sc, "townEcoPrice"), $.gm($r[1], "i")), 2)) * ($.n($.add(1, $.gm($.get($sc, "townEcoStat"), $.gm($r[1], "i")))) / 2))), " Besi: "), ($.n($.gm($.gm($.get($sc, "townEcoPrice"), $.gm($r[1], "i")), 3)) * ($.n($.add(1, $.gm($.get($sc, "townEcoStat"), $.gm($r[1], "i")))) / 2))), " Kayu: "), ($.n($.gm($.gm($.get($sc, "townEcoPrice"), $.gm($r[1], "i")), 4)) * ($.n($.add(1, $.gm($.get($sc, "townEcoStat"), $.gm($r[1], "i")))) / 2))));
      $b = 6; continue;
    case 6: return;
    }
  }));
      $.sm($.gm($.get($sc, "menu_bs"), $.add("economy", $.get($sc, "i"))), "onRollOut", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.gm($.get($sc, "rollText"), $.get($sc, "bahasa")));
  }));
      if (!$.gt($.gm($.get($sc, "townEcoStat"), $.get($sc, "i")), 0)) { $b = 4; continue; }
      $b = 3; continue;
    case 3:
      t3 = $.cm($.gm($.get($sc, "menu_bs"), $.add("economy", $.get($sc, "i"))), "gotoAndStop", [2]);
      $b = 5; continue;
    case 4:
      t2 = $.cm($.gm($.get($sc, "menu_bs"), $.add("economy", $.get($sc, "i"))), "gotoAndStop", [1]);
      $b = 5; continue;
    case 5:
      if (!!$.gt($.gm($.get($sc, "townEcoStat"), $.get($sc, "i")), 9)) { $b = 7; continue; }
      $b = 6; continue;
    case 6:
      $.sm($.gm($.get($sc, "menu_bs"), $.add("economy", $.get($sc, "i"))), "onRelease", $.get($sc, "upgradeTownEco"));
      $b = 8; continue;
    case 7:
      t4 = $.cf($sc, "soundFX", ["error"]);
      $b = 8; continue;
    case 8:
      $.sm($.gm($.get($sc, "menu_bs"), $.add("military", $.get($sc, "i"))), "i", $.get($sc, "i"));
      $.sm($.gm($.get($sc, "menu_bs"), $.add("military", $.get($sc, "i"))), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    $.sm($.gm($r[1], "lev"), "text", $.gm($.get($sc, "townMilStat"), $.gm($r[1], "i")));
  }));
      $.sm($.gm($.get($sc, "menu_bs"), $.add("military", $.get($sc, "i"))), "onRollOver", $.fn({"n":"","p":[],"r":3,"f":105}, $sc, function($sc, $this, $args, $r) {
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!$.eq($.get($sc, "bahasa"), 0)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.gm($.gm($.gm($.gm($r[2], "townMilDes"), $.gm($r[1], "i")), 0), $.get($sc, "bahasa")), "\n"), $.gm($.gm($.gm($.gm($r[2], "townMilDes"), $.gm($r[1], "i")), 1), $.get($sc, "bahasa"))), "\nResource to build:"), "\nGold: "), ($.n($.gm($.gm($.get($sc, "townMilPrice"), $.gm($r[1], "i")), 1)) * ($.n($.add(1, $.gm($.get($sc, "townMilStat"), $.gm($r[1], "i")))) / 2))), " Food: "), ($.n($.gm($.gm($.get($sc, "townMilPrice"), $.gm($r[1], "i")), 2)) * ($.n($.add(1, $.gm($.get($sc, "townMilStat"), $.gm($r[1], "i")))) / 2))), " Iron: "), ($.n($.gm($.gm($.get($sc, "townMilPrice"), $.gm($r[1], "i")), 3)) * ($.n($.add(1, $.gm($.get($sc, "townMilStat"), $.gm($r[1], "i")))) / 2))), " Wood: "), ($.n($.gm($.gm($.get($sc, "townMilPrice"), $.gm($r[1], "i")), 4)) * ($.n($.add(1, $.gm($.get($sc, "townMilStat"), $.gm($r[1], "i")))) / 2))));
      $b = 6; continue;
    case 2:
      if (!$.eq($.get($sc, "bahasa"), 1)) { $b = 4; continue; }
      $b = 3; continue;
    case 3:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.gm($.gm($.gm($.gm($r[2], "townMilDes"), $.gm($r[1], "i")), 0), $.get($sc, "bahasa")), "\n"), $.gm($.gm($.gm($.gm($r[2], "townMilDes"), $.gm($r[1], "i")), 1), $.get($sc, "bahasa"))), "\nRessources nécessaires:"), "\nOr: "), ($.n($.gm($.gm($.get($sc, "townMilPrice"), $.gm($r[1], "i")), 1)) * ($.n($.add(1, $.gm($.get($sc, "townMilStat"), $.gm($r[1], "i")))) / 2))), " Nourriture: "), ($.n($.gm($.gm($.get($sc, "townMilPrice"), $.gm($r[1], "i")), 2)) * ($.n($.add(1, $.gm($.get($sc, "townMilStat"), $.gm($r[1], "i")))) / 2))), " Fer: "), ($.n($.gm($.gm($.get($sc, "townMilPrice"), $.gm($r[1], "i")), 3)) * ($.n($.add(1, $.gm($.get($sc, "townMilStat"), $.gm($r[1], "i")))) / 2))), " Bois: "), ($.n($.gm($.gm($.get($sc, "townMilPrice"), $.gm($r[1], "i")), 4)) * ($.n($.add(1, $.gm($.get($sc, "townMilStat"), $.gm($r[1], "i")))) / 2))));
      $b = 6; continue;
    case 4:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.gm($.gm($.gm($.gm($r[2], "townMilDes"), $.gm($r[1], "i")), 0), $.get($sc, "bahasa")), "\n"), $.gm($.gm($.gm($.gm($r[2], "townMilDes"), $.gm($r[1], "i")), 1), $.get($sc, "bahasa"))), "\nSumber daya yang dibutuhkan:"), "\nEmas: "), ($.n($.gm($.gm($.get($sc, "townMilPrice"), $.gm($r[1], "i")), 1)) * ($.n($.add(1, $.gm($.get($sc, "townMilStat"), $.gm($r[1], "i")))) / 2))), " Makanan: "), ($.n($.gm($.gm($.get($sc, "townMilPrice"), $.gm($r[1], "i")), 2)) * ($.n($.add(1, $.gm($.get($sc, "townMilStat"), $.gm($r[1], "i")))) / 2))), " Besi: "), ($.n($.gm($.gm($.get($sc, "townMilPrice"), $.gm($r[1], "i")), 3)) * ($.n($.add(1, $.gm($.get($sc, "townMilStat"), $.gm($r[1], "i")))) / 2))), " Kayu: "), ($.n($.gm($.gm($.get($sc, "townMilPrice"), $.gm($r[1], "i")), 4)) * ($.n($.add(1, $.gm($.get($sc, "townMilStat"), $.gm($r[1], "i")))) / 2))));
      $b = 6; continue;
    case 6: return;
    }
  }));
      $.sm($.gm($.get($sc, "menu_bs"), $.add("military", $.get($sc, "i"))), "onRollOut", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.gm($.get($sc, "rollText"), $.get($sc, "bahasa")));
  }));
      if (!$.gt($.gm($.get($sc, "townMilStat"), $.get($sc, "i")), 0)) { $b = 10; continue; }
      $b = 9; continue;
    case 9:
      t6 = $.cm($.gm($.get($sc, "menu_bs"), $.add("military", $.get($sc, "i"))), "gotoAndStop", [2]);
      $b = 11; continue;
    case 10:
      t5 = $.cm($.gm($.get($sc, "menu_bs"), $.add("military", $.get($sc, "i"))), "gotoAndStop", [1]);
      $b = 11; continue;
    case 11:
      if (!!$.gt($.gm($.get($sc, "townMilStat"), $.get($sc, "i")), 9)) { $b = 13; continue; }
      $b = 12; continue;
    case 12:
      $.sm($.gm($.get($sc, "menu_bs"), $.add("military", $.get($sc, "i"))), "onRelease", $.get($sc, "upgradeTownMil"));
      $b = 14; continue;
    case 13:
      t7 = $.cf($sc, "soundFX", ["error"]);
      $b = 14; continue;
    case 14:
      $.sm($.gm($.get($sc, "menu_bs"), $.add("special", $.get($sc, "i"))), "i", $.get($sc, "i"));
      $.sm($.gm($.get($sc, "menu_bs"), $.add("special", $.get($sc, "i"))), "onRollOver", $.fn({"n":"","p":[],"r":3,"f":105}, $sc, function($sc, $this, $args, $r) {
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!$.eq($.get($sc, "bahasa"), 0)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.gm($.gm($.gm($.gm($r[2], "townSpeDes"), $.gm($r[1], "i")), 0), $.get($sc, "bahasa")), "\n"), $.gm($.gm($.gm($.gm($r[2], "townSpeDes"), $.gm($r[1], "i")), 1), $.get($sc, "bahasa"))), "\nResource to build:"), "\nGold: "), $.gm($.gm($.get($sc, "townSpePrice"), $.gm($r[1], "i")), 1)), " Food: "), $.gm($.gm($.get($sc, "townSpePrice"), $.gm($r[1], "i")), 2)), " Iron: "), $.gm($.gm($.get($sc, "townSpePrice"), $.gm($r[1], "i")), 3)), " Wood: "), $.gm($.gm($.get($sc, "townSpePrice"), $.gm($r[1], "i")), 4)));
      $b = 6; continue;
    case 2:
      if (!$.eq($.get($sc, "bahasa"), 1)) { $b = 4; continue; }
      $b = 3; continue;
    case 3:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.gm($.gm($.gm($.gm($r[2], "townSpeDes"), $.gm($r[1], "i")), 0), $.get($sc, "bahasa")), "\n"), $.gm($.gm($.gm($.gm($r[2], "townSpeDes"), $.gm($r[1], "i")), 1), $.get($sc, "bahasa"))), "\nRessources nécessaires:"), "\nOr: "), $.gm($.gm($.get($sc, "townSpePrice"), $.gm($r[1], "i")), 1)), " Nourriture: "), $.gm($.gm($.get($sc, "townSpePrice"), $.gm($r[1], "i")), 2)), " Fer: "), $.gm($.gm($.get($sc, "townSpePrice"), $.gm($r[1], "i")), 3)), " Bois: "), $.gm($.gm($.get($sc, "townSpePrice"), $.gm($r[1], "i")), 4)));
      $b = 6; continue;
    case 4:
      $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.gm($.gm($.gm($.gm($r[2], "townSpeDes"), $.gm($r[1], "i")), 0), $.get($sc, "bahasa")), "\n"), $.gm($.gm($.gm($.gm($r[2], "townSpeDes"), $.gm($r[1], "i")), 1), $.get($sc, "bahasa"))), "\nSumber daya yang dibutuhkan:"), "\nEmas: "), $.gm($.gm($.get($sc, "townSpePrice"), $.gm($r[1], "i")), 1)), " Makanan: "), $.gm($.gm($.get($sc, "townSpePrice"), $.gm($r[1], "i")), 2)), " Besi: "), $.gm($.gm($.get($sc, "townSpePrice"), $.gm($r[1], "i")), 3)), " Kayu: "), $.gm($.gm($.get($sc, "townSpePrice"), $.gm($r[1], "i")), 4)));
      $b = 6; continue;
    case 6: return;
    }
  }));
      $.sm($.gm($.get($sc, "menu_bs"), $.add("special", $.get($sc, "i"))), "onRollOut", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    $.sm($.gm($.get($sc, "menu_bs"), "des"), "text", $.gm($.get($sc, "rollText"), $.get($sc, "bahasa")));
  }));
      if (!$.gt($.gm($.get($sc, "townSpeStat"), $.get($sc, "i")), 0)) { $b = 16; continue; }
      $b = 15; continue;
    case 15:
      t9 = $.cm($.gm($.get($sc, "menu_bs"), $.add("special", $.get($sc, "i"))), "gotoAndStop", [2]);
      $b = 17; continue;
    case 16:
      t8 = $.cm($.gm($.get($sc, "menu_bs"), $.add("special", $.get($sc, "i"))), "gotoAndStop", [1]);
      $b = 17; continue;
    case 17:
      $.sm($.gm($.get($sc, "menu_bs"), $.add("special", $.get($sc, "i"))), "onRelease", $.get($sc, "upgradeTownSpe"));
      $.set($sc, "i", ($.n($.get($sc, "i")) + 1));
      $b = 1; continue;
    case 18:
      $.sm($.gm($.get($sc, "menu_bs"), "upgrade_btn"), "id", $.gm($r[3], "id"));
      $.sm($.gm($.get($sc, "menu_bs"), "upgrade_btn"), "j", $.gm($r[3], "j"));
      $.sm($.gm($.get($sc, "menu_bs"), "upgrade_btn"), "onRelease", $.get($sc, "upgradeSomething"));
      $.sm($.gm($.get($sc, "menu_bs"), "cancel_btn"), "onRelease", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    $.set($sc, "aktifTombol", true);
    t1 = $.cf($sc, "gantiPeta", []);
    t2 = $.cm($.gm($r[1], "_parent"), "removeMovieClip", []);
  }));
      $b = 19; continue;
    case 19: return;
    }
  }));
    $.def($sc, "cekTrap", $.fn({"n":"cekTrap","p":[],"r":5,"f":42}, $sc, function($sc, $this, $args, $r) {
    var s0, s1, s2, en1, t1, en2, t2, t3, en3, t4, t5;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      en1 = $.enumerate($.get($sc, "daftarMusuhSerang"));
      s0 = en1;
      $b = 1; continue;
    case 1:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 16; continue; }
      $b = 2; continue;
    case 2:
      t1 = $r[0];
      $r[4] = t1;
      en2 = $.enumerate($.get($sc, "trapEnable"));
      s1 = en2;
      $b = 3; continue;
    case 3:
      $r[0] = s1.shift();
      if ($r[0] === null) { $b = 14; continue; }
      $b = 4; continue;
    case 4:
      t2 = $r[0];
      $r[3] = t2;
      if (!$.eq($.gm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "daftarMusuhSerang"), $r[4])), "coordinate"), $.gm($.gm($.get($sc, "trapEnable"), $r[3]), 1))) { $b = 13; continue; }
      $b = 5; continue;
    case 5:
      if (!$.eq($.gm($.gm($.get($sc, "trapEnable"), $r[3]), 0), 1)) { $b = 13; continue; }
      $b = 6; continue;
    case 6:
      $.sm($.gm($.get($sc, "trapEnable"), $r[3]), 0, 0);
      t3 = $.rand((9 - $.n($.gm($.get($sc, "townSpeStat"), 2))));
      $r[1] = (1 + t3);
      if (!!$.gt($r[1], $.add(3, $.gm($.get($sc, "townSpeStat"), 2)))) { $b = 13; continue; }
      $b = 7; continue;
    case 7:
      en3 = $.enumerate($.get($sc, "posMap"));
      s2 = en3;
      $b = 8; continue;
    case 8:
      $r[0] = s2.shift();
      if ($r[0] === null) { $b = 12; continue; }
      $b = 9; continue;
    case 9:
      t4 = $r[0];
      $r[2] = t4;
      if (!$.eq($.gm($.get($sc, "posMap"), $r[2]), $.gm($.gm($.get($sc, "trapEnable"), $r[3]), 1))) { $b = 11; continue; }
      $b = 10; continue;
    case 10:
      $.set($sc, "map", (1 + $.n($r[2])));
      t5 = $.cf($sc, "tampilTrap", []);
      $b = 11; continue;
    case 11:
      $b = 8; continue;
    case 12:
      $.sm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "daftarMusuhSerang"), $r[4])), "trapped", $.add($.gm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "daftarMusuhSerang"), $r[4])), "trapped"), 1));
      $b = 13; continue;
    case 13:
      $b = 3; continue;
    case 14:
      $b = 1; continue;
    case 16: return;
    }
  }));
    $.def($sc, "enemyAttack", $.fn({"n":"enemyAttack","p":[[2,"where"]],"r":3,"f":106}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5, t6, t7;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.sm($r[1], "serangan", true);
      $.set($sc, "enemyID", ($.n($.get($sc, "enemyID")) + 1));
      t1 = $.cm($.gm($.get($sc, "minimap"), "coordinate"), "attachMovie", ["icon_musuh", $.add("musuh", $.get($sc, "enemyID")), (100 * $.n($r[2]))]);
      $.sm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.add("musuh", $.get($sc, "enemyID"))), "ID", $.get($sc, "enemyID"));
      $.sm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.add("musuh", $.get($sc, "enemyID"))), "posArray", ($.n($.get($sc, "enemyID")) - 1));
      t2 = $.gm($.gm($.get($sc, "minimap"), "coordinate"), $.add("musuh", $.get($sc, "enemyID")));
      t3 = $.rand(3);
      $.sm(t2, "stepLeft", (6 + t3));
      $.sm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.add("musuh", $.get($sc, "enemyID"))), "pos", $r[2]);
      $.sm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.add("musuh", $.get($sc, "enemyID"))), "trapped", 0);
      if (!$.eq($.get($sc, "bahasa"), 0)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t4 = $.cf($sc, "tampilAlertPerang", [$.add($.add($.add($.add("Enemy attack from ", $.gm($.gm($.get($sc, "gateName"), $r[2]), $.get($sc, "bahasa"))), " gate\n"), ($.n($.gm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.add("musuh", $.get($sc, "enemyID"))), "stepLeft")) - 4)), " days left")]);
      $b = 5; continue;
    case 2:
      if (!$.eq($.get($sc, "bahasa"), 1)) { $b = 4; continue; }
      $b = 3; continue;
    case 3:
      t6 = $.cf($sc, "tampilAlertPerang", [$.add($.add($.add($.add("Attaque ennemie à l'entrée ", $.gm($.gm($.get($sc, "gateName"), $r[2]), $.get($sc, "bahasa"))), "\n"), ($.n($.gm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.add("musuh", $.get($sc, "enemyID"))), "stepLeft")) - 4)), " jours restant")]);
      $b = 5; continue;
    case 4:
      t5 = $.cf($sc, "tampilAlertPerang", [$.add($.add($.add($.add("Serangan musuh dari gerbang ", $.gm($.gm($.get($sc, "gateName"), $r[2]), $.get($sc, "bahasa"))), "\n"), ($.n($.gm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.add("musuh", $.get($sc, "enemyID"))), "stepLeft")) - 4)), " hari lagi")]);
      $b = 5; continue;
    case 5:
      $.sm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.add("musuh", $.get($sc, "enemyID"))), "onEnterFrame", $.get($sc, "enemyMoving"));
      t7 = $.cm($.get($sc, "daftarMusuhSerang"), "push", [$.add("musuh", $.get($sc, "enemyID"))]);
      $b = 6; continue;
    case 6: return;
    }
  }));
    $.def($sc, "cekPerang", $.fn({"n":"cekPerang","p":[],"r":8,"f":106}, $sc, function($sc, $this, $args, $r) {
    var s0, s1, s2, en1, t1, en2, en3, t2, en4, t3, t4, t5, en5, t6, t7, t8, t9;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.sm($.gm($.get($sc, "map_general"), "serangan"), "_visible", false);
      en1 = $.enumerate($.get($sc, "daftarMusuhSerang"));
      s0 = en1;
      $b = 1; continue;
    case 1:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 26; continue; }
      $b = 2; continue;
    case 2:
      t1 = $r[0];
      $r[7] = t1;
      en2 = $.enumerate($.get($sc, "comLoc"));
      s1 = en2;
      $b = 3; continue;
    case 3:
      $r[0] = s1.shift();
      if ($r[0] === null) { $b = 13; continue; }
      $b = 4; continue;
    case 4:
      t2 = $r[0];
      $r[5] = t2;
      if (!$.eq($.gm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "daftarMusuhSerang"), $r[7])), "coordinate"), $.gm($.get($sc, "comLoc"), $r[5]))) { $b = 12; continue; }
      $b = 5; continue;
    case 5:
      en4 = $.enumerate($.get($sc, "posMap"));
      s2 = en4;
      $b = 6; continue;
    case 6:
      $r[0] = s2.shift();
      if ($r[0] === null) { $b = 12; continue; }
      $b = 7; continue;
    case 7:
      t4 = $r[0];
      $r[3] = t4;
      if (!$.eq($.gm($.get($sc, "posMap"), $r[3]), $.gm($.get($sc, "comLoc"), $r[5]))) { $b = 11; continue; }
      $b = 8; continue;
    case 8:
      if (!$.bool($.gm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "daftarMusuhSerang"), $r[7])), "menang"))) { $b = 10; continue; }
      $b = 9; continue;
    case 9:
      $.sm($.get($sc, "posSerang"), $.gm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "daftarMusuhSerang"), $r[7])), "pos"), 0);
      t7 = $.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "daftarMusuhSerang"), $r[7]));
      $r[2] = t7;
      t8 = $.cm($r[2], "removeMovieClip", []);
      $b = 11; continue;
    case 10:
      $.set($sc, "map", (1 + $.n($r[3])));
      $.set($sc, "perangDi", $.gm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "daftarMusuhSerang"), $r[7])), "pos"));
      t6 = $.cf($sc, "tampilWarningPerang", [$.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "daftarMusuhSerang"), $r[7]))]);
      $b = 11; continue;
    case 11:
      $b = 6; continue;
    case 12:
      $b = 3; continue;
    case 13:
      en3 = $.enumerate($.get($sc, "posMap"));
      s1 = en3;
      $b = 14; continue;
    case 14:
      $r[0] = s1.shift();
      if ($r[0] === null) { $b = 24; continue; }
      $b = 15; continue;
    case 15:
      t3 = $r[0];
      $r[6] = t3;
      if (!$.eq($.gm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "daftarMusuhSerang"), $r[7])), "coordinate"), $.gm($.get($sc, "posMap"), $r[6]))) { $b = 18; continue; }
      $b = 16; continue;
    case 16:
      if (!$.eq($.get($sc, "map"), ($.n($r[6]) + 1))) { $b = 18; continue; }
      $b = 17; continue;
    case 17:
      $.sm($.gm($.get($sc, "map_general"), "serangan"), "_visible", true);
      t5 = $.cm($.gm($.get($sc, "map_general"), "serangan"), "gotoAndStop", [$.gm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "daftarMusuhSerang"), $r[7])), "pos")]);
      $b = 18; continue;
    case 18:
      if (!$.eq($.gm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "daftarMusuhSerang"), $r[7])), "lastPos"), $.gm($.get($sc, "posMap"), $r[6]))) { $b = 23; continue; }
      $b = 19; continue;
    case 19:
      if (!!$.eq(($.n($r[6]) + 1), 13)) { $b = 23; continue; }
      $b = 20; continue;
    case 20:
      en5 = $.enumerate($.gm($r[1], $.add("objectMap", ($.n($r[6]) + 1))));
      s2 = en5;
      $b = 21; continue;
    case 21:
      $r[0] = s2.shift();
      if ($r[0] === null) { $b = 23; continue; }
      $b = 22; continue;
    case 22:
      t9 = $r[0];
      $r[4] = t9;
      $.sm($.gm($.gm($r[1], $.add("objectMap", ($.n($r[6]) + 1))), $r[4]), 0, 0);
      $b = 21; continue;
    case 23:
      $b = 14; continue;
    case 24:
      $b = 1; continue;
    case 26: return;
    }
  }));
    $.def($sc, "cekMusuh", $.fn({"n":"cekMusuh","p":[],"r":6,"f":106}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, t2, t3, t4, en1, t5, t6, t7, t8, t9;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      t1 = $.rand(4);
      $r[3] = (1 + t1);
      t2 = $.cm($.get($sc, "Math"), "floor", [($.n($.get($sc, "days")) / 20)]);
      t3 = $.rand((2 - $.n(t2)));
      $r[4] = t3;
      if (!$.eq($.get($sc, "days"), 2)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      $r[4] = 0;
      $b = 2; continue;
    case 2:
      t4 = $.add(1, $r[4]);
      $r[5] = t4;
      if (!!$.gt($r[5], 1)) { $b = 5; continue; }
      $b = 3; continue;
    case 3:
      if (!$.eq($.gm($.get($sc, "posSerang"), $r[3]), 0)) { $b = 5; continue; }
      $b = 4; continue;
    case 4:
      $.sm($.get($sc, "posSerang"), $r[3], 1);
      t5 = $.cf($sc, "enemyAttack", [$r[3]]);
      $b = 5; continue;
    case 5:
      en1 = $.enumerate($.get($sc, "daftarMusuhSerang"));
      s0 = en1;
      $b = 6; continue;
    case 6:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 8; continue; }
      $b = 7; continue;
    case 7:
      t7 = $r[0];
      $r[2] = t7;
      $.sm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "daftarMusuhSerang"), $r[2])), "lastPos", $.gm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "daftarMusuhSerang"), $r[2])), "coordinate"));
      $.sm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "daftarMusuhSerang"), $r[2])), "stepLeft", ($.n($.gm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "daftarMusuhSerang"), $r[2])), "stepLeft")) - 1));
      t8 = $.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "daftarMusuhSerang"), $r[2]));
      t9 = $.rand($.gm($.gm($.gm($r[1], $.add("jalurMusuh", $.gm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "daftarMusuhSerang"), $r[2])), "pos"))), $.gm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "daftarMusuhSerang"), $r[2])), "stepLeft")), "length"));
      $.sm(t8, "nextStep", t9);
      $b = 6; continue;
    case 8:
      t6 = $.cf($sc, "cekPerang", []);
      $b = 9; continue;
    case 9: return;
    }
  }));
    $.def($sc, "tampilWarningPerang", $.fn({"n":"tampilWarningPerang","p":[[3,"what"]],"r":4,"f":105}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5, t6;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      t1 = $.cf($sc, "cekPosPanglima", []);
      $.set($sc, "aktifTombol", false);
      $.set($sc, "pasukanMusuh", $r[3]);
      $.set($sc, "tampilWarning", true);
      t2 = $.cm($r[2], "attachMovie", ["window_warning", "warning", 1999]);
      $.sm($.get($sc, "warning"), "_x", 300);
      $.sm($.get($sc, "warning"), "_y", 350);
      $.sm($.get($sc, "warning"), "_alpha", 0);
      t3 = $.cm($.get($sc, "warning"), "gotoAndStop", [1]);
      t4 = $.cm($.gm($.get($sc, "warning"), "gambar"), "gotoAndStop", [1]);
      $.sm($.gm($.get($sc, "warning"), "isi"), "text", $.gm($.get($sc, "perangBahasa"), $.gm($r[2], "bahasa")));
      $.sm($.gm($.get($sc, "warning"), "potionLeft"), "text", $.gm($r[2], "bunga"));
      $.sm($.get($sc, "warning"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1;
    t1 = $.cf($sc, "efekFade", [$r[1]]);
  }));
      if (!$.gt($.gm($r[2], "bunga"), 0)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t6 = $.cm($.gm($.get($sc, "warning"), "potion_btn"), "gotoAndStop", [1]);
      $.sm($.gm($.get($sc, "warning"), "potion_btn"), "onRelease", $.fn({"n":"","p":[],"r":3,"f":105}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    $.set($sc, "jamuMode", true);
    $.sm($r[2], "bunga", ($.n($.gm($r[2], "bunga")) - 1));
    $.set($sc, "tampilWarning", false);
    t1 = $.cm($r[2], "gotoAndStop", ["ilustration"]);
    t2 = $.cm($.gm($r[1], "_parent"), "removeMovieClip", []);
  }));
      $b = 3; continue;
    case 2:
      t5 = $.cm($.gm($.get($sc, "warning"), "potion_btn"), "gotoAndStop", ["pressed"]);
      $b = 3; continue;
    case 3:
      $.sm($.gm($.get($sc, "warning"), "oke_btn"), "onRelease", $.fn({"n":"","p":[],"r":3,"f":105}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    $.set($sc, "jamuMode", false);
    $.set($sc, "tampilWarning", false);
    t1 = $.cm($r[2], "gotoAndStop", ["ilustration"]);
    t2 = $.cm($.gm($r[1], "_parent"), "removeMovieClip", []);
  }));
      $b = 4; continue;
    case 4: return;
    }
  }));
    $.def($sc, "tampilTrap", $.fn({"n":"tampilTrap","p":[],"r":3,"f":105}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3;
    $.set($sc, "aktifTombol", false);
    $.set($sc, "tampilWarning", true);
    t1 = $.cm($r[2], "attachMovie", ["window_warning", "warning", 1999]);
    $.sm($.get($sc, "warning"), "_x", 300);
    $.sm($.get($sc, "warning"), "_y", 350);
    $.sm($.get($sc, "warning"), "_alpha", 0);
    t2 = $.cm($.get($sc, "warning"), "gotoAndStop", [2]);
    t3 = $.cm($.gm($.get($sc, "warning"), "gambar"), "gotoAndStop", [2]);
    $.sm($.gm($.get($sc, "warning"), "isi"), "text", $.gm($.get($sc, "trapBahasa"), $.gm($r[2], "bahasa")));
    $.sm($.get($sc, "warning"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1;
    t1 = $.cf($sc, "efekFade", [$r[1]]);
  }));
    $.sm($.gm($.get($sc, "warning"), "oke_btn"), "onRelease", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    t1 = $.cf($sc, "gantiPeta", []);
    t2 = $.cm($.gm($r[1], "_parent"), "removeMovieClip", []);
  }));
  }));
    $.def($sc, "buildSomething", $.fn({"n":"buildSomething","p":[],"r":5,"f":105}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, en1, t2, en2, t3, t4, t5, t6, t7;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $r[3] = undefined;
      t1 = $.cm($.get($sc, "des"), "removeMovieClip", []);
      en1 = $.enumerate($.get($sc, "resourceList"));
      s0 = en1;
      $b = 1; continue;
    case 1:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 7; continue; }
      $b = 2; continue;
    case 2:
      t2 = $r[0];
      $r[4] = t2;
      if (!!(($.n($.gm($.get($sc, "resourceList"), $r[4])) - $.n($.gm($.gm($.gm($.get($sc, "desList"), $.gm($r[1], "id")), 3), $r[4]))) < 0)) { $b = 4; continue; }
      $b = 3; continue;
    case 3:
      $r[3] = true;
      $b = 5; continue;
    case 4:
      t3 = $.cf($sc, "soundFX", ["error"]);
      t4 = $.cf($sc, "tampilDialog", [4]);
      $r[3] = false;
      $b = 6; continue;
    case 5:
      $b = 1; continue;
    case 6:
      while (s0.shift() !== null) ;
      $b = 7; continue;
    case 7:
      if (!$.bool($r[3])) { $b = 13; continue; }
      $b = 8; continue;
    case 8:
      $.sm($.get($sc, "statisticList"), 7, ($.n($.gm($.get($sc, "statisticList"), 7)) + 1));
      en2 = $.enumerate($.get($sc, "resourceList"));
      s0 = en2;
      $b = 9; continue;
    case 9:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 11; continue; }
      $b = 10; continue;
    case 10:
      t7 = $r[0];
      $r[4] = t7;
      $.sm($.get($sc, "resourceList"), $r[4], ($.n($.gm($.get($sc, "resourceList"), $r[4])) - $.n($.gm($.gm($.gm($.get($sc, "desList"), $.gm($r[1], "id")), 3), $r[4]))));
      $b = 9; continue;
    case 11:
      t5 = $.cf($sc, "soundFX", ["build"]);
      $.sm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $.gm($r[1], "j")), 0, 1);
      t6 = $.cm($r[2], "gantiPeta", []);
      $b = 13; continue;
    case 13: return;
    }
  }));
    $.def($sc, "hitungBarrack", $.fn({"n":"hitungBarrack","p":[],"r":5,"f":106}, $sc, function($sc, $this, $args, $r) {
    var s0, en1, t1, t2, t3;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $r[3] = 0;
      $r[2] = 0;
      $b = 1; continue;
    case 1:
      if (!!$.gt($r[2], 25)) { $b = 9; continue; }
      $b = 2; continue;
    case 2:
      en1 = $.enumerate($.gm($r[1], $.add("objectMap", $r[2])));
      s0 = en1;
      $b = 3; continue;
    case 3:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 8; continue; }
      $b = 4; continue;
    case 4:
      t2 = $r[0];
      $r[4] = t2;
      if (!$.eq($.gm($.gm($.gm($r[1], $.add("objectMap", $r[2])), $r[4]), 2), 10)) { $b = 7; continue; }
      $b = 5; continue;
    case 5:
      if (!$.gt($.gm($.gm($.gm($r[1], $.add("objectMap", $r[2])), $r[4]), 0), 0)) { $b = 7; continue; }
      $b = 6; continue;
    case 6:
      t3 = ($.n($r[3]) + 1);
      $r[3] = t3;
      $b = 7; continue;
    case 7:
      $b = 3; continue;
    case 8:
      t1 = ($.n($r[2]) + 1);
      $r[2] = t1;
      $b = 1; continue;
    case 9:
      return $r[3];
    case 11: return;
    }
  }));
    $.def($sc, "cekPosPanglima", $.fn({"n":"cekPosPanglima","p":[],"r":2,"f":42}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, en1, t2, t3, t4;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      t1 = $.cm($.get($sc, "map_general"), "createEmptyMovieClip", ["panglimaGrup", 100]);
      $.sm($.gm($.get($sc, "map_general"), "panglimaGrup"), "count", 0);
      en1 = $.enumerate($.get($sc, "comLoc"));
      s0 = en1;
      $b = 1; continue;
    case 1:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 6; continue; }
      $b = 2; continue;
    case 2:
      t2 = $r[0];
      $r[1] = t2;
      if (!$.eq($.gm($.get($sc, "posMap"), ($.n($.get($sc, "map")) - 1)), $.gm($.get($sc, "comLoc"), $r[1]))) { $b = 4; continue; }
      $b = 3; continue;
    case 3:
      $.sm($.gm($.get($sc, "map_general"), "panglimaGrup"), "count", ($.n($.gm($.gm($.get($sc, "map_general"), "panglimaGrup"), "count")) + 1));
      t3 = $.cm($.gm($.get($sc, "map_general"), "panglimaGrup"), "attachMovie", ["icon_panglima", $.add("icon", $r[1]), $r[1]]);
      $.sm($.gm($.gm($.get($sc, "map_general"), "panglimaGrup"), $.add("icon", $r[1])), "_x", 70);
      $.sm($.gm($.gm($.get($sc, "map_general"), "panglimaGrup"), $.add("icon", $r[1])), "_y", (75 * $.n($.gm($.gm($.get($sc, "map_general"), "panglimaGrup"), "count"))));
      t4 = $.cm($.gm($.gm($.get($sc, "map_general"), "panglimaGrup"), $.add("icon", $r[1])), "gotoAndStop", [$r[1]]);
      $b = 4; continue;
    case 4:
      $b = 1; continue;
    case 6: return;
    }
  }));
    $.def($sc, "gantiPeta", $.fn({"n":"gantiPeta","p":[],"r":5,"f":105}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, en1, t13, en2, t14, t15, t16, t17, t18, t19;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.set($sc, "aktifTombol", true);
      t1 = $.cm($.gm($r[2], "blur"), "removeMovieClip", []);
      t2 = $.cm($.gm($r[2], "minimap"), "attachMovie", ["mc_indicator", "indicator", 99]);
      $.sm($.gm($.gm($r[2], "minimap"), "indicator"), "_x", $.add($.gm($.gm($.gm($r[2], "minimap"), $.add("map", $.get($sc, "map"))), "_x"), ($.n($.gm($.gm($.gm($r[2], "minimap"), $.add("map", $.get($sc, "map"))), "_width")) / 2)));
      $.sm($.gm($.gm($r[2], "minimap"), "indicator"), "_y", $.add($.gm($.gm($.gm($r[2], "minimap"), $.add("map", $.get($sc, "map"))), "_y"), ($.n($.gm($.gm($.gm($r[2], "minimap"), $.add("map", $.get($sc, "map"))), "_height")) / 2)));
      $.sm($.gm($r[2], "minimap"), "enabled", true);
      $.sm($.gm($r[2], "endturn_btn"), "enabled", true);
      $.sm($.get($sc, "minimap"), "countPanglima", 0);
      t3 = $.cm($.get($sc, "map_general"), "createEmptyMovieClip", ["panglimaGrup", 100]);
      $.sm($.gm($.get($sc, "map_general"), "panglimaGrup"), "count", 0);
      t4 = $.cf($sc, "cekPosPanglima", []);
      t5 = $.cf($sc, "cekTrap", []);
      t6 = $.cf($sc, "cekPerang", []);
      t7 = $.cf($sc, "cekDapatBunga", []);
      t8 = $.cf($sc, "cekPosBunga", []);
      t9 = $.cf($sc, "hitungBarrack", []);
      if (!$.eq(t9, 4)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t10 = $.cf($sc, "newAchievement", [4]);
      $b = 2; continue;
    case 2:
      if (!$.eq($.gm($.gm($.get($sc, "objectMap13"), 2), 0), 9)) { $b = 4; continue; }
      $b = 3; continue;
    case 3:
      t11 = $.cf($sc, "newAchievement", [5]);
      $b = 4; continue;
    case 4:
      if (!$.eq($.get($sc, "tempStat"), [0, 0, 0, 0, 0, 0])) { $b = 6; continue; }
      $b = 5; continue;
    case 5:
      t13 = $.cf($sc, "newAchievement", [6]);
      $b = 6; continue;
    case 6:
      t12 = $.cm($.get($sc, "map_general"), "gotoAndStop", [$.get($sc, "map")]);
      en1 = $.enumerate($.get($sc, "objectMapAll"));
      s0 = en1;
      $b = 7; continue;
    case 7:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 9; continue; }
      $b = 8; continue;
    case 8:
      t14 = $r[0];
      $r[4] = t14;
      $.sm($.gm($.gm($r[2], "map_general"), $.gm($.get($sc, "objectMapAll"), $r[4])), "id", $r[4]);
      $.sm($.gm($.gm($r[2], "bt_group"), $.gm($.get($sc, "objectMapAll"), $r[4])), "id", $r[4]);
      $.sm($.gm($.gm($r[2], "bt_group"), $.gm($.get($sc, "objectMapAll"), $r[4])), "_alpha", 30);
      $.sm($.gm($.gm($r[2], "bt_group"), $.gm($.get($sc, "objectMapAll"), $r[4])), "onRollOver", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1;
    t1 = $.cf($sc, "tampilDeskripsiNone", [$r[1]]);
  }));
      $.sm($.gm($.gm($r[2], "bt_group"), $.gm($.get($sc, "objectMapAll"), $r[4])), "onRollOut", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    var t1;
    t1 = $.cm($.get($sc, "des"), "removeMovieClip", []);
  }));
      $.sm($.gm($.gm($r[2], "bt_group"), $.gm($.get($sc, "objectMapAll"), $r[4])), "onRelease", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    var t1;
    t1 = $.cf($sc, "soundFX", ["error"]);
  }));
      $b = 7; continue;
    case 9:
      en2 = $.enumerate($.gm($r[2], $.add("objectMap", $.get($sc, "map"))));
      s0 = en2;
      $b = 10; continue;
    case 10:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 15; continue; }
      $b = 11; continue;
    case 11:
      t15 = $r[0];
      $r[3] = t15;
      $.sm($.gm($.gm($r[2], "bt_group"), $.gm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $r[3]), 1)), "j", $r[3]);
      $.sm($.gm($.gm($r[2], "map_general"), $.gm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $r[3]), 1)), "j", $r[3]);
      $.sm($.gm($.gm($r[2], "map_general"), $.gm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $r[3]), 1)), "isSetLevel", $.gm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $r[3]), 0));
      if (!$.gt($.gm($.gm($.gm($r[2], "map_general"), $.gm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $r[3]), 1)), "isSetLevel"), 0)) { $b = 13; continue; }
      $b = 12; continue;
    case 12:
      $.sm($.gm($.gm($r[2], "map_general"), $.gm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $r[3]), 1)), "_visible", true);
      $.sm($.gm($.gm($r[2], "bt_group"), $.gm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $r[3]), 1)), "_alpha", 30);
      $b = 14; continue;
    case 13:
      $.sm($.gm($.gm($r[2], "map_general"), $.gm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $r[3]), 1)), "_visible", false);
      $.sm($.gm($.gm($r[2], "bt_group"), $.gm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $r[3]), 1)), "_alpha", 100);
      $.sm($.gm($.gm($r[2], "bt_group"), $.gm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $r[3]), 1)), "onRollOver", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1;
    t1 = $.cf($sc, "tampilDeskripsi", [$r[1]]);
  }));
      $.sm($.gm($.gm($r[2], "bt_group"), $.gm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $r[3]), 1)), "onRollOut", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    var t1;
    t1 = $.cm($.get($sc, "des"), "removeMovieClip", []);
  }));
      $.sm($.gm($.gm($r[2], "bt_group"), $.gm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $r[3]), 1)), "onRelease", $.get($sc, "buildSomething"));
      $b = 14; continue;
    case 14:
      $.sm($.gm($.gm($r[2], "map_general"), $.gm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $r[3]), 1)), "onRollOver", $.fn({"n":"","p":[],"r":3,"f":105}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    t1 = $.cm($r[2], "tampilDeskripsiMap", [$r[1]]);
    t2 = $.cf($sc, "soundFX", [$.gm($.gm($.get($sc, "desList"), $.gm($r[1], "id")), 0)]);
  }));
      $.sm($.gm($.gm($r[2], "map_general"), $.gm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $r[3]), 1)), "onRollOut", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    var t1;
    t1 = $.cm($.get($sc, "des"), "removeMovieClip", []);
  }));
      $.sm($.gm($.gm($r[2], "map_general"), $.gm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $r[3]), 1)), "onRelease", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    t1 = $.cf($sc, "tampilMenuUpgrade", [$r[1]]);
    t2 = $.cm($.get($sc, "des"), "removeMovieClip", []);
  }));
      $.sm($.gm($.gm($r[2], "map_general"), $.gm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $r[3]), 1)), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1;
    t1 = $.cm($r[1], "gotoAndStop", [$.gm($r[1], "isSetLevel")]);
  }));
      $b = 10; continue;
    case 15:
      if (!$.eq($.gm($.get($sc, "daftarMusuhSerang"), "length"), 1)) { $b = 19; continue; }
      $b = 16; continue;
    case 16:
      if (!$.bool($.get($sc, "firstWar"))) { $b = 18; continue; }
      $b = 17; continue;
    case 17:
      t16 = $.cf($sc, "tampilDialog", [6]);
      $.set($sc, "firstWar", false);
      $b = 18; continue;
    case 18:
      $b = 21; continue;
    case 19:
      if (!$.gt($.gm($.get($sc, "daftarMusuhSerang"), "length"), 1)) { $b = 21; continue; }
      $b = 20; continue;
    case 20:
      $.set($sc, "firstWar", false);
      $b = 21; continue;
    case 21:
      if (!!$.bool($.get($sc, "firstWar"))) { $b = 31; continue; }
      $b = 22; continue;
    case 22:
      t17 = $.eq($.gm($.get($sc, "flowerList"), "length"), 1);
      t18 = !t17;
      s0 = t17;
      if (t18) { $b = 24; continue; }
      $b = 23; continue;
    case 23:
      s0 = !$.bool($.get($sc, "tampilWarning"));
      $b = 24; continue;
    case 24:
      if (!$.bool(s0)) { $b = 28; continue; }
      $b = 25; continue;
    case 25:
      if (!$.bool($.get($sc, "firstFlower"))) { $b = 27; continue; }
      $b = 26; continue;
    case 26:
      t19 = $.cf($sc, "tampilDialog", [7]);
      $.set($sc, "firstFlower", false);
      $b = 27; continue;
    case 27:
      $b = 31; continue;
    case 28:
      if (!$.gt($.gm($.get($sc, "flowerList"), "length"), 1)) { $b = 31; continue; }
      $b = 29; continue;
    case 29:
      $.set($sc, "firstFlower", false);
      $b = 31; continue;
    case 31: return;
    }
  }));
    $.def($sc, "findPath", $.fn({"n":"findPath","p":[[3,"who"]],"r":7,"f":42}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5, t6, t7, t8, t9;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      t1 = $.nw($sc, "Array", []);
      $r[4] = t1;
      t2 = $.add($.gm($r[3], "xPos"), $.gm($r[3], "jarakTempuh"));
      $r[5] = t2;
      t3 = ($.n($.gm($r[3], "xPos")) - $.n($.gm($r[3], "jarakTempuh")));
      $r[6] = t3;
      $r[2] = 0;
      $b = 1; continue;
    case 1:
      if (!!$.gt($r[2], $.gm($r[3], "jarakTempuh"))) { $b = 6; continue; }
      $b = 2; continue;
    case 2:
      $r[1] = 0;
      $b = 3; continue;
    case 3:
      if (!!$.gt($r[1], $r[2])) { $b = 5; continue; }
      $b = 4; continue;
    case 4:
      t5 = $.cm($r[4], "push", [$.add($.add("map", $.str($.add($r[6], $r[2]))), $.add($.gm($r[3], "yPos"), $r[1]))]);
      t6 = $.cm($r[4], "push", [$.add($.add("map", $.str($.add($r[6], $r[2]))), ($.n($.gm($r[3], "yPos")) - $.n($r[1])))]);
      t7 = $.cm($r[4], "push", [$.add($.add("map", $.str(($.n($r[5]) - $.n($r[2])))), $.add($.gm($r[3], "yPos"), $r[1]))]);
      t8 = $.cm($r[4], "push", [$.add($.add("map", $.str(($.n($r[5]) - $.n($r[2])))), ($.n($.gm($r[3], "yPos")) - $.n($r[1])))]);
      t9 = ($.n($r[1]) + 1);
      $r[1] = t9;
      $b = 3; continue;
    case 5:
      t4 = ($.n($r[2]) + 1);
      $r[2] = t4;
      $b = 1; continue;
    case 6:
      return $r[4];
    case 8: return;
    }
  }));
    $.def($sc, "setTrap", $.fn({"n":"setTrap","p":[],"r":4,"f":41}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, en1, t2, en2, t3, t4, t5;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $r[2] = undefined;
      t1 = $.cm($.get($sc, "des"), "removeMovieClip", []);
      en1 = $.enumerate($.get($sc, "resourceList"));
      s0 = en1;
      $b = 1; continue;
    case 1:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 7; continue; }
      $b = 2; continue;
    case 2:
      t2 = $r[0];
      $r[3] = t2;
      if (!!(($.n($.gm($.get($sc, "resourceList"), $r[3])) - $.n($.gm($.get($sc, "trapPrice"), $r[3]))) < 0)) { $b = 4; continue; }
      $b = 3; continue;
    case 3:
      $r[2] = true;
      $b = 5; continue;
    case 4:
      t3 = $.cf($sc, "soundFX", ["error"]);
      $r[2] = false;
      $b = 6; continue;
    case 5:
      $b = 1; continue;
    case 6:
      while (s0.shift() !== null) ;
      $b = 7; continue;
    case 7:
      if (!$.bool($r[2])) { $b = 13; continue; }
      $b = 8; continue;
    case 8:
      en2 = $.enumerate($.get($sc, "resourceList"));
      s0 = en2;
      $b = 9; continue;
    case 9:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 11; continue; }
      $b = 10; continue;
    case 10:
      t5 = $r[0];
      $r[3] = t5;
      $.sm($.get($sc, "resourceList"), $r[3], ($.n($.gm($.get($sc, "resourceList"), $r[3])) - $.n($.gm($.get($sc, "trapPrice"), $r[3]))));
      $b = 9; continue;
    case 11:
      t4 = $.cf($sc, "soundFX", ["build"]);
      $.sm($.gm($.get($sc, "trapEnable"), $.gm($r[1], "i")), 0, 1);
      $b = 13; continue;
    case 13: return;
    }
  }));
    $.def($sc, "tampilAlertPerang", $.fn({"n":"tampilAlertPerang","p":[[3,"isi"]],"r":4,"f":105}, $sc, function($sc, $this, $args, $r) {
    $.sm($.get($sc, "warNotification"), "hitung", 0);
    $.sm($.get($sc, "warNotification"), "atasY", 535);
    $.sm($.get($sc, "warNotification"), "bawahY", 610);
    $.sm($.gm($.get($sc, "warNotification"), "des"), "text", $r[3]);
    $.sm($.get($sc, "warNotification"), "onEnterFrame", $.fn({"n":"","p":[],"r":3,"f":105}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!$.bool($.get($sc, "aktifTombol"))) { $b = 7; continue; }
      $b = 1; continue;
    case 1:
      $.sm($r[1], "atasY", ($.n($.gm($.get($sc, "resourceCollected"), "atasY")) - $.n($.gm($r[1], "_height"))));
      $.sm($r[1], "_y", ($.n($.gm($r[1], "_y")) - 2));
      if (!!$.gt($.gm($r[1], "_y"), $.gm($r[1], "atasY"))) { $b = 4; continue; }
      $b = 2; continue;
    case 2:
      $.sm($r[1], "_y", $.gm($r[1], "atasY"));
      $.sm($r[1], "hitung", ($.n($.gm($r[1], "hitung")) + 1));
      if (!!$.lt($.gm($r[1], "hitung"), 200)) { $b = 4; continue; }
      $b = 3; continue;
    case 3:
      t2 = $.delMember($r[1], "onEnterFrame");
      $.sm($r[1], "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.sm($r[1], "_y", $.add($.gm($r[1], "_y"), 2));
      if (!!$.lt($.gm($r[1], "_y"), $.gm($r[1], "bawahY"))) { $b = 3; continue; }
      $b = 1; continue;
    case 1:
      t1 = $.delMember($r[1], "onEnterFrame");
      $b = 3; continue;
    case 3: return;
    }
  }));
      $b = 4; continue;
    case 4:
      t1 = $.cm($r[1], "hitTest", [$.gm($r[2], "resourceCollected")]);
      if (!$.bool(t1)) { $b = 7; continue; }
      $b = 5; continue;
    case 5:
      $.sm($r[1], "_y", ($.n($.gm($r[1], "_y")) - 2));
      $b = 7; continue;
    case 7: return;
    }
  }));
  }));
    $.def($sc, "tampilSummaryResource", $.fn({"n":"tampilSummaryResource","p":[],"r":4,"f":105}, $sc, function($sc, $this, $args, $r) {
    var t1;
    t1 = $.cm($.get($sc, "resourceCollected"), "gotoAndStop", [$.add($.get($sc, "bahasa"), 1)]);
    $.sm($.get($sc, "resourceCollected"), "hitung", 0);
    $.sm($.get($sc, "resourceCollected"), "atasY", 515);
    $.sm($.get($sc, "resourceCollected"), "bawahY", 600);
    $.sm($.get($sc, "resourceCollected"), "onEnterFrame", $.fn({"n":"","p":[],"r":4,"f":105}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $r[3] = 1;
      $b = 1; continue;
    case 1:
      if (!!$.gt($r[3], 4)) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      $.sm($.gm($r[1], $.add("res", $r[3])), "text", $.add("+", $.gm($.gm($r[2], "resourceProduce"), $r[3])));
      t1 = ($.n($r[3]) + 1);
      $r[3] = t1;
      $b = 1; continue;
    case 3:
      if (!$.bool($.get($sc, "aktifTombol"))) { $b = 8; continue; }
      $b = 4; continue;
    case 4:
      $.sm($r[1], "_y", ($.n($.gm($r[1], "_y")) - 2));
      if (!!$.gt($.gm($r[1], "_y"), $.gm($r[1], "atasY"))) { $b = 8; continue; }
      $b = 5; continue;
    case 5:
      $.sm($r[1], "_y", $.gm($r[1], "atasY"));
      $.sm($r[1], "hitung", ($.n($.gm($r[1], "hitung")) + 1));
      if (!!$.lt($.gm($r[1], "hitung"), 200)) { $b = 8; continue; }
      $b = 6; continue;
    case 6:
      t2 = $.delMember($r[1], "onEnterFrame");
      $.sm($r[1], "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.sm($r[1], "_y", $.add($.gm($r[1], "_y"), 2));
      if (!!$.lt($.gm($r[1], "_y"), $.gm($r[1], "bawahY"))) { $b = 3; continue; }
      $b = 1; continue;
    case 1:
      t1 = $.delMember($r[1], "onEnterFrame");
      $b = 3; continue;
    case 3: return;
    }
  }));
      $b = 8; continue;
    case 8: return;
    }
  }));
  }));
    $.def($sc, "tampilAlertFlower", $.fn({"n":"tampilAlertFlower","p":[[3,"isi"]],"r":4,"f":105}, $sc, function($sc, $this, $args, $r) {
    $.sm($.get($sc, "flowerNotification"), "hitung", 0);
    $.sm($.get($sc, "flowerNotification"), "atasY", 500);
    $.sm($.get($sc, "flowerNotification"), "bawahY", 610);
    $.sm($.gm($.get($sc, "flowerNotification"), "des"), "text", $r[3]);
    $.sm($.get($sc, "flowerNotification"), "onEnterFrame", $.fn({"n":"","p":[],"r":3,"f":105}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!$.bool($.get($sc, "aktifTombol"))) { $b = 9; continue; }
      $b = 1; continue;
    case 1:
      $.sm($r[1], "_y", ($.n($.gm($r[1], "_y")) - 2));
      if (!!$.gt($.gm($r[1], "_y"), $.gm($r[1], "atasY"))) { $b = 4; continue; }
      $b = 2; continue;
    case 2:
      $.sm($r[1], "_y", $.gm($r[1], "atasY"));
      $.sm($r[1], "hitung", ($.n($.gm($r[1], "hitung")) + 1));
      if (!!$.lt($.gm($r[1], "hitung"), 150)) { $b = 4; continue; }
      $b = 3; continue;
    case 3:
      t3 = $.delMember($r[1], "onEnterFrame");
      $.sm($r[1], "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.sm($r[1], "_y", $.add($.gm($r[1], "_y"), 2));
      if (!!$.lt($.gm($r[1], "_y"), $.gm($r[1], "bawahY"))) { $b = 3; continue; }
      $b = 1; continue;
    case 1:
      t1 = $.delMember($r[1], "onEnterFrame");
      $b = 3; continue;
    case 3: return;
    }
  }));
      $b = 4; continue;
    case 4:
      t1 = $.cm($r[1], "hitTest", [$.gm($r[2], "resourceCollected")]);
      if (!$.bool(t1)) { $b = 6; continue; }
      $b = 5; continue;
    case 5:
      $.sm($r[1], "_y", ($.n($.gm($r[1], "_y")) - 2));
      $.sm($r[1], "atasY", ($.n($.gm($.get($sc, "resourceCollected"), "_y")) - $.n($.gm($r[1], "_height"))));
      $b = 6; continue;
    case 6:
      t2 = $.cm($r[1], "hitTest", [$.gm($r[2], "warNotification")]);
      if (!$.bool(t2)) { $b = 9; continue; }
      $b = 7; continue;
    case 7:
      $.sm($r[1], "_y", ($.n($.gm($r[1], "_y")) - 2));
      $.sm($r[1], "atasY", ($.n($.gm($.get($sc, "warNotification"), "_y")) - $.n($.gm($r[1], "_height"))));
      $b = 9; continue;
    case 9: return;
    }
  }));
  }));
    $.def($sc, "tampilSummaryBattle", $.fn({"n":"tampilSummaryBattle","p":[],"r":4,"f":105}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.set($sc, "aktifTombol", false);
      $.set($sc, "tampilWarning", true);
      t1 = $.cm($r[2], "attachMovie", ["win_summary", "warning", 1999]);
      $.sm($.get($sc, "warning"), "_x", 300);
      $.sm($.get($sc, "warning"), "_y", 350);
      $.sm($.get($sc, "warning"), "_alpha", 0);
      $r[3] = 1;
      $b = 1; continue;
    case 1:
      if (!!$.gt($r[3], 5)) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      $.sm($.gm($.get($sc, "warning"), $.add("sum", $r[3])), "text", $.gm($.get($sc, "battleSummary"), $r[3]));
      t2 = ($.n($r[3]) + 1);
      $r[3] = t2;
      $b = 1; continue;
    case 3:
      $.sm($.get($sc, "warning"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1;
    t1 = $.cf($sc, "efekFade", [$r[1]]);
  }));
      $.sm($.gm($.get($sc, "warning"), "cancel_btn"), "onRelease", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    t1 = $.cm($.gm($r[1], "_parent"), "removeMovieClip", []);
    $.set($sc, "tampilWarning", false);
    t2 = $.cf($sc, "gantiPeta", []);
  }));
      $b = 4; continue;
    case 4: return;
    }
  }));
    $.def($sc, "tampilDesRes", $.fn({"n":"tampilDesRes","p":[[3,"isi"]],"r":4,"f":105}, $sc, function($sc, $this, $args, $r) {
    var $tgt = $.clipOf($sc);
    var t1;
    t1 = $.cm($r[2], "attachMovie", ["description_map2", "des", 999]);
    $.sm($.get($sc, "des"), "_x", $.gp($tgt, "_xmouse"));
    $.sm($.get($sc, "des"), "_y", $.gp($tgt, "_ymouse"));
    $.sm($.get($sc, "des"), "_alpha", 0);
    $.sm($.gm($.get($sc, "des"), "des"), "text", $r[3]);
    $.sm($.get($sc, "des"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var $tgt = $.clipOf($sc);
    var t1;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      t1 = $.cf($sc, "efekFade", [$r[1]]);
      if (!$.gt($.gp($tgt, "_xmouse"), ($.n($.gm($.get($sc, "Stage"), "width")) / 2))) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      $.sm($.get($sc, "des"), "_x", ($.n($.gp($tgt, "_xmouse")) - $.n($.gm($.get($sc, "des"), "_width"))));
      $b = 3; continue;
    case 2:
      $.sm($.get($sc, "des"), "_x", $.gp($tgt, "_xmouse"));
      $b = 3; continue;
    case 3:
      if (!$.gt($.gp($tgt, "_ymouse"), ($.n($.gm($.get($sc, "Stage"), "height")) / 2))) { $b = 5; continue; }
      $b = 4; continue;
    case 4:
      $.sm($.get($sc, "des"), "_y", ($.n($.gp($tgt, "_ymouse")) - $.n($.gm($.get($sc, "des"), "_height"))));
      $b = 7; continue;
    case 5:
      $.sm($.get($sc, "des"), "_y", $.gp($tgt, "_ymouse"));
      $b = 7; continue;
    case 7: return;
    }
  }));
  }));
    $.def($sc, "tampilDesSerangan", $.fn({"n":"tampilDesSerangan","p":[],"r":5,"f":105}, $sc, function($sc, $this, $args, $r) {
    var $tgt = $.clipOf($sc);
    var s0, t1, t2, t3, en1, t4, t5, t6, t7, t8, t9, t10, t11, t12;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      t1 = $.cm($r[2], "attachMovie", ["description_map3", "des", 999]);
      $.sm($.get($sc, "des"), "_x", $.gp($tgt, "_xmouse"));
      $.sm($.get($sc, "des"), "_y", $.gp($tgt, "_ymouse"));
      $.sm($.get($sc, "des"), "_alpha", 0);
      $.sm($.gm($.get($sc, "des"), "des"), "text", $.gm($.get($sc, "typeBahasa"), $.get($sc, "bahasa")));
      $r[3] = 0;
      t2 = $.get($sc, "enemyLevDesList");
      t3 = $.cm($.get($sc, "Math"), "floor", [($.n($.get($sc, "days")) / 10)]);
      en1 = $.enumerate($.gm(t2, t3));
      s0 = en1;
      $b = 1; continue;
    case 1:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      t4 = $r[0];
      $r[4] = t4;
      t5 = $r[3];
      t6 = $.get($sc, "enemyLevDesList");
      t7 = $.cm($.get($sc, "Math"), "floor", [($.n($.get($sc, "days")) / 10)]);
      t8 = $.add(t5, $.gm($.gm($.gm(t6, t7), $r[4]), 0));
      $r[3] = t8;
      t9 = $.gm($.get($sc, "des"), "des");
      t10 = $.gm($.gm($.get($sc, "des"), "des"), "text");
      t11 = $.get($sc, "enemyLevDesList");
      t12 = $.cm($.get($sc, "Math"), "floor", [($.n($.get($sc, "days")) / 10)]);
      $.sm(t9, "text", $.add(t10, $.add("\n   - ", $.gm($.gm($.gm(t11, t12), $r[4]), 1))));
      $b = 1; continue;
    case 3:
      $.sm($.gm($.get($sc, "des"), "des"), "text", $.add($.gm($.gm($.get($sc, "des"), "des"), "text"), $.add($.gm($.get($sc, "totalEnemyBahasa"), $.get($sc, "bahasa")), $r[3])));
      $.sm($.get($sc, "des"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var $tgt = $.clipOf($sc);
    var t1;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      t1 = $.cf($sc, "efekFade", [$r[1]]);
      if (!$.gt($.gp($tgt, "_xmouse"), ($.n($.gm($.get($sc, "Stage"), "width")) / 2))) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      $.sm($.get($sc, "des"), "_x", ($.n($.gp($tgt, "_xmouse")) - $.n($.gm($.get($sc, "des"), "_width"))));
      $b = 3; continue;
    case 2:
      $.sm($.get($sc, "des"), "_x", $.gp($tgt, "_xmouse"));
      $b = 3; continue;
    case 3:
      if (!$.gt($.gp($tgt, "_ymouse"), ($.n($.gm($.get($sc, "Stage"), "height")) / 2))) { $b = 5; continue; }
      $b = 4; continue;
    case 4:
      $.sm($.get($sc, "des"), "_y", ($.n($.gp($tgt, "_ymouse")) - $.n($.gm($.get($sc, "des"), "_height"))));
      $b = 7; continue;
    case 5:
      $.sm($.get($sc, "des"), "_y", $.gp($tgt, "_ymouse"));
      $b = 7; continue;
    case 7: return;
    }
  }));
      $b = 4; continue;
    case 4: return;
    }
  }));
    $.def($sc, "sumArray", $.fn({"n":"sumArray","p":[[2,"array"]],"r":4,"f":42}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $r[3] = 0;
      $r[1] = 0;
      $b = 1; continue;
    case 1:
      if (!$.lt($r[1], $.gm($r[2], "length"))) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      t1 = $.add($r[3], $.gm($r[2], $r[1]));
      $r[3] = t1;
      t2 = ($.n($r[1]) + 1);
      $r[1] = t2;
      $b = 1; continue;
    case 3:
      return $r[3];
    case 5: return;
    }
  }));
    $.def($sc, "tambahKata", $.fn({"n":"tambahKata","p":[],"r":2,"f":42}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.set($sc, "aktifTombol", false);
      $.sm($.get($sc, "dialogBar"), "awalAmbil", ($.n($.gm($.get($sc, "dialogBar"), "awalAmbil")) + 1));
      t1 = $.cm($.gm($.gm($.gm($.get($sc, "dialogList"), $.gm($.get($sc, "dialogBar"), "eventNomor")), $.gm($.get($sc, "dialogBar"), "teksNomor")), $.get($sc, "bahasa")), "substr", [0, $.gm($.get($sc, "dialogBar"), "awalAmbil")]);
      $r[1] = t1;
      $.sm($.gm($.get($sc, "dialogBar"), "dialog"), "text", $r[1]);
      if (!!$.lt($.add($.gm($.get($sc, "dialogBar"), "awalAmbil"), 1), $.gm($.gm($.gm($.gm($.get($sc, "dialogList"), $.gm($.get($sc, "dialogBar"), "eventNomor")), $.gm($.get($sc, "dialogBar"), "teksNomor")), $.get($sc, "bahasa")), "length"))) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      $.sm($.get($sc, "dialogBar"), "awalAmbil", ($.n($.gm($.gm($.gm($.gm($.get($sc, "dialogList"), $.gm($.get($sc, "dialogBar"), "eventNomor")), $.gm($.get($sc, "dialogBar"), "teksNomor")), $.get($sc, "bahasa")), "length")) - 1));
      $b = 2; continue;
    case 2:
      t2 = $.cm($.get($sc, "des"), "removeMovieClip", []);
      $b = 3; continue;
    case 3: return;
    }
  }));
    $.def($sc, "tampilDialog", $.fn({"n":"tampilDialog","p":[[0,"eventNomor"]],"r":2,"f":106}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3;
    $.sm($.gm($.get($sc, "dialogBar"), "skip_btn"), "_visible", false);
    $.sm($.gm($.get($sc, "dialogBar"), "skip_btn"), "onRelease", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4;
    t1 = $.cm($.get($sc, "tutorial"), "removeMovieClip", []);
    $.sm($.get($sc, "dialogBar"), "_visible", false);
    $.sm($.get($sc, "skip_btn"), "_visible", false);
    t2 = $.cf($sc, "gantiPeta", []);
    t3 = $.delMember($.get($sc, "dialogBar"), "onMouseDown");
    t4 = $.cf($sc, "clearInterval", [$.gm($.get($sc, "dialogBar"), "tampil")]);
  }));
    $.sm($.get($sc, "dialogBar"), "_visible", true);
    $.sm($.get($sc, "dialogBar"), "awalAmbil", 0);
    $.sm($.get($sc, "dialogBar"), "teksNomor", 1);
    $.sm($.get($sc, "dialogBar"), "eventNomor", $.get($sc, "eventNomor"));
    t1 = $.cm($.gm($.get($sc, "dialogBar"), "char"), "gotoAndStop", [1]);
    t2 = $.get($sc, "dialogBar");
    t3 = $.cf($sc, "setInterval", [$.get($sc, "tambahKata"), 15]);
    $.sm(t2, "tampil", t3);
    $.sm($.get($sc, "dialogBar"), "onMouseDown", $.fn({"n":"","p":[],"r":2,"f":106}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      t1 = $.cm($.gm($r[1], "des"), "removeMovieClip", []);
      $.sm($.get($sc, "dialogBar"), "teksNomor", ($.n($.gm($.get($sc, "dialogBar"), "teksNomor")) + 1));
      $.sm($.get($sc, "dialogBar"), "awalAmbil", 0);
      if (!!$.lt($.gm($.get($sc, "dialogBar"), "teksNomor"), $.gm($.gm($.get($sc, "dialogList"), $.gm($.get($sc, "dialogBar"), "eventNomor")), "length"))) { $b = 4; continue; }
      $b = 1; continue;
    case 1:
      $.sm($.get($sc, "dialogBar"), "_visible", false);
      $.sm($.get($sc, "skip_btn"), "_visible", false);
      t2 = $.cf($sc, "gantiPeta", []);
      if (!$.eq($.get($sc, "eventNomor"), 1)) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      t8 = $.cf($sc, "tampilSummaryBattle", []);
      $b = 3; continue;
    case 3:
      t6 = $.delMember($.get($sc, "dialogBar"), "onMouseDown");
      t7 = $.cf($sc, "clearInterval", [$.gm($.get($sc, "dialogBar"), "tampil")]);
      $b = 4; continue;
    case 4:
      if (!$.eq($.get($sc, "eventNomor"), 0)) { $b = 6; continue; }
      $b = 5; continue;
    case 5:
      $.sm($.gm($.get($sc, "dialogBar"), "skip_btn"), "_visible", true);
      t3 = $.cm($.gm($.get($sc, "dialogBar"), "skip_btn"), "gotoAndStop", [$.add($.gm($r[1], "bahasa"), 1)]);
      t4 = $.cm($r[1], "attachMovie", ["main_tutorial", "tutorial", 10009]);
      t5 = $.cm($.get($sc, "tutorial"), "gotoAndStop", [$.gm($.get($sc, "dialogBar"), "teksNomor")]);
      $b = 6; continue;
    case 6:
      if (!$.eq($.get($sc, "eventNomor"), 6)) { $b = 8; continue; }
      $b = 7; continue;
    case 7:
      $.sm($.gm($.get($sc, "dialogBar"), "skip_btn"), "_visible", true);
      t9 = $.cm($.gm($.get($sc, "dialogBar"), "skip_btn"), "gotoAndStop", [$.add($.gm($r[1], "bahasa"), 1)]);
      t10 = $.cm($r[1], "attachMovie", ["main_tutorial3", "tutorial", 10009]);
      t11 = $.cm($.get($sc, "tutorial"), "gotoAndStop", [$.gm($.get($sc, "dialogBar"), "teksNomor")]);
      $b = 8; continue;
    case 8:
      if (!$.eq($.get($sc, "eventNomor"), 7)) { $b = 11; continue; }
      $b = 9; continue;
    case 9:
      $.sm($.gm($.get($sc, "dialogBar"), "skip_btn"), "_visible", true);
      t12 = $.cm($.gm($.get($sc, "dialogBar"), "skip_btn"), "gotoAndStop", [$.add($.gm($r[1], "bahasa"), 1)]);
      t13 = $.cm($r[1], "attachMovie", ["main_tutorial4", "tutorial", 10009]);
      t14 = $.cm($.get($sc, "tutorial"), "gotoAndStop", [$.gm($.get($sc, "dialogBar"), "teksNomor")]);
      $b = 11; continue;
    case 11: return;
    }
  }));
  }));
    $.stop($tgt);
    t1 = $.cf($sc, "soundBGM", ["bgm2"]);
    t2 = $.cm($.get($sc, "this"), "getNextHighestDepth", []);
    t3 = $.cm($.get($sc, "_root"), "attachMovie", ["main_fadeout", "fadeout", t2]);
    $.def($sc, "dayBahasa", ["day", "jour", "hari"]);
    $.sm($.get($sc, "dayTeks"), "text", $.gm($.get($sc, "dayBahasa"), $.get($sc, "bahasa")));
    t4 = $.cm($.get($sc, "interface_teks"), "gotoAndStop", [$.add($.gm($.get($sc, "_root"), "bahasa"), 1)]);
    $.def($sc, "aktifTombol", true);
    $.def($sc, "transaksi", 10000);
    $.def($sc, "trapSuccess", false);
    $.def($sc, "map", 13);
    t5 = $.nw($sc, "Array", []);
    $.def($sc, "posMap", t5);
    $.def($sc, "i", 1);
    $b = 1; continue;
  case 1:
    if (!!$.gt($.get($sc, "i"), 5)) { $b = 3; continue; }
    $b = 2; continue;
  case 2:
    t6 = $.cm($.get($sc, "posMap"), "push", [$.add($.get($sc, "i"), "1")]);
    t7 = $.cm($.get($sc, "posMap"), "push", [$.add($.get($sc, "i"), "2")]);
    t8 = $.cm($.get($sc, "posMap"), "push", [$.add($.get($sc, "i"), "3")]);
    t9 = $.cm($.get($sc, "posMap"), "push", [$.add($.get($sc, "i"), "4")]);
    t10 = $.cm($.get($sc, "posMap"), "push", [$.add($.get($sc, "i"), "5")]);
    $.set($sc, "i", ($.n($.get($sc, "i")) + 1));
    $b = 1; continue;
  case 3:
    if (!!$.lt($.gm($.get($sc, "statisticList"), 6), 5000)) { $b = 5; continue; }
    $b = 4; continue;
  case 4:
    $.sm($.get($sc, "achievement"), 7, 1);
    $b = 5; continue;
  case 5:
    t11 = $.nw($sc, "Array", [0, 1, 2, 3, 4]);
    $.def($sc, "posibility", t11);
    $.def($sc, "total", 15);
    $.def($sc, "banyak", $.get($sc, "total"));
    $.def($sc, "panglimaMove", [true, true, true, true, true, true]);
    $.def($sc, "customCursor", true);
    t12 = $.nw($sc, "Array", []);
    $.def($sc, "trap", t12);
    t13 = $.cf($sc, "bikinMapBayangan", []);
    $.def($sc, "tempat1", ["map45", "map54", "map55"]);
    $.def($sc, "tempat2", ["map11", "map21", "map12"]);
    $.def($sc, "tempat3", ["map14", "map25", "map15"]);
    $.def($sc, "tempat4", ["map41", "map51", "map52"]);
    $.def($sc, "bungaTampilBahasa", ["The magic flower has been sighted, take the flower before it disappears!", "Une fleur magique a été repérée, cueillez la fleur avant qu’elle ne disparaisse!", "Terlihat kemunculan bunga ajaib, ambil sebelum menghilang!"]);
    $.def($sc, "dapatBungaBahasa", ["Magical flower has been collected!\nStock potion: ", "La fleur magique a été cueillie!\nConservez la potion: ", "Berhasil mendapatkan bunga ajaib,\nBunga ajaib: "]);
    $.sm($.gm($.get($sc, "map_general"), "flower"), "_visible", false);
    $.def($sc, "cantBahasa", ["Cannot build this object in this map", "Impossible de construire ceci sur cette carte.", "Tidak dapat dibangun di peta ini"]);
    $.def($sc, "sellBahasa", ["Sell this building\nResource get:\n", "Vendre ce bâtiment\nRessource collectée:\n", "Jual bangunan ini\nSumber daya yang didapat:\n"]);
    $.def($sc, "upgradeBahasa", ["Upgrade this building\nResource to upgrade:\n", "Améliorer ce bâtiment\nRessources nécessaires:\n", "Tingkatkan bangunan ini\nSumber daya yang dibutuhkan:\n"]);
    $.def($sc, "multiplyBahasa", ["While pressing “shift” on keyboard, click the button to multiply", "Garder la touche “shift” enfoncée, et cliquer pour multiplier.", "Tahan tombol “shift” di keyboard sambil klik pada tombol jual/beli untuk kelipatan 5"]);
    $.def($sc, "acceptBahasa", ["accept all progress", "accepter tous les progrès", "lakukan semua proses"]);
    $.def($sc, "resourceBuyWeapon", [0, 0, 0, 0, 0]);
    $.def($sc, "cancelBahasa", ["cancel all production", "Annuler toutes les productions", "gagalkan semua produksi"]);
    $.def($sc, "produceAllBahasa", ["produce all production at the end of this turn", "produire toute la production à la fin de ce tour", "proses semua produksi di akhir turn ini"]);
    $.def($sc, "resourceBuyArmy", [0, 0, 0, 0, 0]);
    $.def($sc, "resourceWeaponBuy", [0, 0, 0, 0, 0]);
    $.def($sc, "produce2Bahasa", ["produce all production", "produire toute la production", "hasilkan semua produksi"]);
    $.def($sc, "gateID", [0, 3, 15, 23, 11]);
    $.def($sc, "perangDi", 0);
    $.def($sc, "musuhID", 0);
    t14 = $.cf($sc, "cekPerang", []);
    $.def($sc, "pasukanMusuh", 0);
    $.def($sc, "perangBahasa", ["Our armies have contact with enemy, get ready to go to the battlefield!", "Nos armées sont au contact de l’ennemi, préparez-vous au combat!", "Pasukan kita bertemu dengan pasukan musuh, besiap untuk pertempuran!"]);
    $.set($sc, "trapBahasa", ["Our trap is working, some enemies are trapped!", "Notre piège a fonctionné, plusieurs ennemis se sont faits prendre!", "Perangkap berhasil, beberapa pasukan musuh terperangkap!"]);
    $.sm($.get($sc, "map_general"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!$.bool($.get($sc, "aktifTombol"))) { $b = 14; continue; }
      $b = 1; continue;
    case 1:
      $.sm($.gm($r[1], "kios_senjata"), "onRelease", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    t1 = $.cf($sc, "tampilMenuSenjata", [$r[1]]);
    t2 = $.cm($.get($sc, "des"), "removeMovieClip", []);
  }));
      $.sm($.gm($r[1], "kios_hasilBumi"), "onRelease", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    t1 = $.cf($sc, "tampilMenuResource", [$r[1]]);
    t2 = $.cm($.get($sc, "des"), "removeMovieClip", []);
  }));
      $.sm($.gm($r[1], "blacksmith"), "onRelease", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    t1 = $.cf($sc, "tampilMenuBlacksmith", [$r[1]]);
    t2 = $.cm($.get($sc, "des"), "removeMovieClip", []);
  }));
      $.sm($.gm($r[1], "barrack"), "onRelease", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    t1 = $.cf($sc, "tampilMenuBarrack", [$r[1]]);
    t2 = $.cm($.get($sc, "des"), "removeMovieClip", []);
  }));
      $.sm($.gm($r[1], "pusat_desa"), "onRelease", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    t1 = $.cf($sc, "tampilMenuTowncenter", [$r[1]]);
    t2 = $.cm($.get($sc, "des"), "removeMovieClip", []);
  }));
      $.sm($.gm($r[1], "temple"), "onRelease", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    t1 = $.cf($sc, "tampilMenuTemple", [$r[1]]);
    t2 = $.cm($.get($sc, "des"), "removeMovieClip", []);
  }));
      if (!(($.n($.get($sc, "map")) - 5) > 0)) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      $.sm($.gm($r[1], "atas"), "enabled", true);
      $.sm($.gm($r[1], "atas"), "_visible", 1);
      $.sm($.gm($r[1], "atas"), "onRollOver", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1;
    t1 = $.cm($r[1], "gotoAndStop", [2]);
  }));
      $.sm($.gm($r[1], "atas"), "onRollOut", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1;
    t1 = $.cm($r[1], "gotoAndStop", [1]);
  }));
      $.sm($.gm($r[1], "atas"), "onRelease", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    var t1;
    $.set($sc, "map", ($.n($.get($sc, "map")) - 5));
    t1 = $.cf($sc, "gantiPeta", []);
  }));
      $b = 4; continue;
    case 3:
      $.sm($.gm($r[1], "atas"), "enabled", false);
      t1 = $.cm($.gm($r[1], "atas"), "gotoAndStop", [1]);
      $.sm($.gm($r[1], "atas"), "_visible", 0);
      $b = 4; continue;
    case 4:
      if (!!$.gt($.add($.get($sc, "map"), 5), 25)) { $b = 6; continue; }
      $b = 5; continue;
    case 5:
      $.sm($.gm($r[1], "bawah"), "enabled", true);
      $.sm($.gm($r[1], "bawah"), "_visible", 1);
      $.sm($.gm($r[1], "bawah"), "onRollOver", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1;
    t1 = $.cm($r[1], "gotoAndStop", [2]);
  }));
      $.sm($.gm($r[1], "bawah"), "onRollOut", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1;
    t1 = $.cm($r[1], "gotoAndStop", [1]);
  }));
      $.sm($.gm($r[1], "bawah"), "onRelease", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    var t1;
    $.set($sc, "map", $.add($.get($sc, "map"), 5));
    t1 = $.cf($sc, "gantiPeta", []);
  }));
      $b = 7; continue;
    case 6:
      $.sm($.gm($r[1], "bawah"), "enabled", false);
      t2 = $.cm($.gm($r[1], "bawah"), "gotoAndStop", [1]);
      $.sm($.gm($r[1], "bawah"), "_visible", 0);
      $b = 7; continue;
    case 7:
      if (!!$.eq(($.n($.get($sc, "map")) % 5), 0)) { $b = 9; continue; }
      $b = 8; continue;
    case 8:
      $.sm($.gm($r[1], "kanan"), "enabled", true);
      $.sm($.gm($r[1], "kanan"), "_visible", 1);
      $.sm($.gm($r[1], "kanan"), "onRollOver", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1;
    t1 = $.cm($r[1], "gotoAndStop", [2]);
  }));
      $.sm($.gm($r[1], "kanan"), "onRollOut", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1;
    t1 = $.cm($r[1], "gotoAndStop", [1]);
  }));
      $.sm($.gm($r[1], "kanan"), "onRelease", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    var t1;
    $.set($sc, "map", $.add($.get($sc, "map"), 1));
    t1 = $.cf($sc, "gantiPeta", []);
  }));
      $b = 10; continue;
    case 9:
      $.sm($.gm($r[1], "kanan"), "enabled", false);
      t3 = $.cm($.gm($r[1], "kanan"), "gotoAndStop", [1]);
      $.sm($.gm($r[1], "kanan"), "_visible", 0);
      $b = 10; continue;
    case 10:
      if (!!$.eq(($.n($.get($sc, "map")) % 5), 1)) { $b = 12; continue; }
      $b = 11; continue;
    case 11:
      $.sm($.gm($r[1], "kiri"), "enabled", true);
      $.sm($.gm($r[1], "kiri"), "_visible", 1);
      $.sm($.gm($r[1], "kiri"), "onRollOver", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1;
    t1 = $.cm($r[1], "gotoAndStop", [2]);
  }));
      $.sm($.gm($r[1], "kiri"), "onRollOut", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1;
    t1 = $.cm($r[1], "gotoAndStop", [1]);
  }));
      $.sm($.gm($r[1], "kiri"), "onRelease", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    var t1;
    $.set($sc, "map", ($.n($.get($sc, "map")) - 1));
    t1 = $.cf($sc, "gantiPeta", []);
  }));
      $b = 13; continue;
    case 12:
      $.sm($.gm($r[1], "kiri"), "enabled", false);
      t4 = $.cm($.gm($r[1], "kiri"), "gotoAndStop", [1]);
      $.sm($.gm($r[1], "kiri"), "_visible", 0);
      $b = 13; continue;
    case 13:
      $b = 16; continue;
    case 14:
      $.sm($.gm($r[1], "atas"), "_visible", false);
      $.sm($.gm($r[1], "bawah"), "_visible", false);
      $.sm($.gm($r[1], "kanan"), "_visible", false);
      $.sm($.gm($r[1], "kiri"), "_visible", false);
      $b = 16; continue;
    case 16: return;
    }
  }));
    t15 = $.nw($sc, "Array", []);
    $.def($sc, "minimapItem", t15);
    $.def($sc, "p", 1);
    $b = 6; continue;
  case 6:
    if (!!$.gt($.get($sc, "p"), 11)) { $b = 11; continue; }
    $b = 7; continue;
  case 7:
    $.def($sc, "q", 1);
    $b = 8; continue;
  case 8:
    if (!!$.gt($.get($sc, "q"), 25)) { $b = 10; continue; }
    $b = 9; continue;
  case 9:
    t18 = $.cm($.get($sc, "minimapItem"), "push", [$.add($.add($.gm($.gm($.get($sc, "desList"), $.get($sc, "p")), 0), "_"), $.get($sc, "q"))]);
    $.set($sc, "q", ($.n($.get($sc, "q")) + 1));
    $b = 8; continue;
  case 10:
    $.set($sc, "p", ($.n($.get($sc, "p")) + 1));
    $b = 6; continue;
  case 11:
    $.sm($.get($sc, "minimap"), "onEnterFrame", $.fn({"n":"","p":[],"r":5,"f":106}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, t2, t3, t4, t5, en1, t6, t7, t8, t9;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $r[3] = 1;
      $b = 1; continue;
    case 1:
      if (!!$.gt($r[3], 6)) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      $.sm($.get($sc, "minimap"), "countPanglima", ($.n($.gm($.get($sc, "minimap"), "countPanglima")) + 1));
      t1 = $.cm($.gm($.get($sc, "minimap"), "coordinate"), "attachMovie", ["icon_panglima", $.add("panglima", $r[3]), $r[3]]);
      $.sm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.add("panglima", $r[3])), "_x", $.gm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.add("map", $.gm($.get($sc, "comLoc"), $r[3]))), "_x"));
      $.sm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.add("panglima", $r[3])), "_y", $.gm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.add("map", $.gm($.get($sc, "comLoc"), $r[3]))), "_y"));
      $.sm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.add("panglima", $r[3])), "_xscale", 70);
      $.sm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.add("panglima", $r[3])), "_yscale", 60);
      t2 = $.cm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.add("panglima", $r[3])), "gotoAndStop", [$r[3]]);
      t3 = $.cm($.gm($.get($sc, "bigMap"), "coordinate"), "attachMovie", ["icon_panglima", $.add("panglima", $r[3]), $r[3]]);
      $.sm($.gm($.gm($.get($sc, "bigMap"), "coordinate"), $.add("panglima", $r[3])), "_x", $.gm($.gm($.gm($.get($sc, "bigMap"), "coordinate"), $.add("map", $.gm($.get($sc, "comLoc"), $r[3]))), "_x"));
      $.sm($.gm($.gm($.get($sc, "bigMap"), "coordinate"), $.add("panglima", $r[3])), "_y", $.gm($.gm($.gm($.get($sc, "bigMap"), "coordinate"), $.add("map", $.gm($.get($sc, "comLoc"), $r[3]))), "_y"));
      $.sm($.gm($.gm($.get($sc, "bigMap"), "coordinate"), $.add("panglima", $r[3])), "_xscale", 70);
      $.sm($.gm($.gm($.get($sc, "bigMap"), "coordinate"), $.add("panglima", $r[3])), "_yscale", 60);
      t4 = $.cm($.gm($.gm($.get($sc, "bigMap"), "coordinate"), $.add("panglima", $r[3])), "gotoAndStop", [$r[3]]);
      t5 = ($.n($r[3]) + 1);
      $r[3] = t5;
      $b = 1; continue;
    case 3:
      $r[2] = 1;
      $b = 4; continue;
    case 4:
      if (!!$.gt($r[2], 25)) { $b = 13; continue; }
      $b = 5; continue;
    case 5:
      en1 = $.enumerate($.gm($r[1], $.add("objectMap", $r[2])));
      s0 = en1;
      $b = 6; continue;
    case 6:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 11; continue; }
      $b = 7; continue;
    case 7:
      t7 = $r[0];
      $r[4] = t7;
      if (!!$.eq($.gm($.gm($.gm($r[1], $.add("objectMap", $r[2])), $r[4]), 0), 0)) { $b = 9; continue; }
      $b = 8; continue;
    case 8:
      $.sm($.gm($.get($sc, "bigMap"), $.add($.add($.gm($.gm($.gm($r[1], $.add("objectMap", $r[2])), $r[4]), 1), "_"), $r[2])), "_visible", 1);
      t8 = $.cm($.gm($.get($sc, "bigMap"), $.add($.add($.gm($.gm($.gm($r[1], $.add("objectMap", $r[2])), $r[4]), 1), "_"), $r[2])), "gotoAndStop", [$.gm($.gm($.gm($r[1], $.add("objectMap", $r[2])), $r[4]), 0)]);
      $.sm($.gm($.get($sc, "minimap"), $.add($.add($.gm($.gm($.gm($r[1], $.add("objectMap", $r[2])), $r[4]), 1), "_"), $r[2])), "_visible", 1);
      t9 = $.cm($.gm($.get($sc, "minimap"), $.add($.add($.gm($.gm($.gm($r[1], $.add("objectMap", $r[2])), $r[4]), 1), "_"), $r[2])), "gotoAndStop", [$.gm($.gm($.gm($r[1], $.add("objectMap", $r[2])), $r[4]), 0)]);
      $b = 10; continue;
    case 9:
      $.sm($.gm($.get($sc, "bigMap"), $.add($.add($.gm($.gm($.gm($r[1], $.add("objectMap", $r[2])), $r[4]), 1), "_"), $r[2])), "_visible", 0);
      $.sm($.gm($.get($sc, "minimap"), $.add($.add($.gm($.gm($.gm($r[1], $.add("objectMap", $r[2])), $r[4]), 1), "_"), $r[2])), "_visible", 0);
      $b = 10; continue;
    case 10:
      $b = 6; continue;
    case 11:
      t6 = ($.n($r[2]) + 1);
      $r[2] = t6;
      $b = 4; continue;
    case 13: return;
    }
  }));
    $.sm($.get($sc, "minimap"), "onRelease", $.fn({"n":"","p":[],"r":7,"f":105}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, t2, en1, en2, t3, t4, t5, t6, t7;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.set($sc, "aktifTombol", false);
      t1 = $.cf($sc, "tampilBlur", []);
      t2 = $.cm($r[2], "attachMovie", ["main_minimap", "bigMap", 1000]);
      $.sm($.get($sc, "bigMap"), "_x", ($.n($.gm($.get($sc, "Stage"), "width")) / 2));
      $.sm($.get($sc, "bigMap"), "_y", ($.n($.gm($.get($sc, "Stage"), "height")) / 2));
      $.sm($.get($sc, "bigMap"), "_xscale", 90);
      $.sm($.get($sc, "bigMap"), "_yscale", 90);
      $.sm($.get($sc, "bigMap"), "_alpha", 0);
      en1 = $.enumerate($.get($sc, "daftarMusuhSerang"));
      s0 = en1;
      $b = 1; continue;
    case 1:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 5; continue; }
      $b = 2; continue;
    case 2:
      $.def($sc, "i", $r[0]);
      t3 = $.cm($.gm($.get($sc, "bigMap"), "coordinate"), "attachMovie", ["icon_musuh", $.add("enemyArmy", $.get($sc, "i")), (100 + $.n($.get($sc, "i")))]);
      $.sm($.gm($.gm($.get($sc, "bigMap"), "coordinate"), $.add("enemyArmy", $.get($sc, "i"))), "_x", $.gm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "daftarMusuhSerang"), $.get($sc, "i"))), "_x"));
      $.sm($.gm($.gm($.get($sc, "bigMap"), "coordinate"), $.add("enemyArmy", $.get($sc, "i"))), "_y", $.gm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "daftarMusuhSerang"), $.get($sc, "i"))), "_y"));
      $.sm($.gm($.gm($.gm($.get($sc, "bigMap"), "coordinate"), $.add("enemyArmy", $.get($sc, "i"))), "dayLeft"), "text", $.gm($.gm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "daftarMusuhSerang"), $.get($sc, "i"))), "dayLeft"), "text"));
      if (!$.eq($.gm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "daftarMusuhSerang"), $.get($sc, "i"))), "_x"), undefined)) { $b = 4; continue; }
      $b = 3; continue;
    case 3:
      t4 = $.cm($.gm($.gm($.get($sc, "bigMap"), "coordinate"), $.add("enemyArmy", $.get($sc, "i"))), "removeMovieClip", []);
      $b = 4; continue;
    case 4:
      $b = 1; continue;
    case 5:
      en2 = $.enumerate($.get($sc, "flowerList"));
      s0 = en2;
      $b = 6; continue;
    case 6:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 10; continue; }
      $b = 7; continue;
    case 7:
      t5 = $r[0];
      $r[6] = t5;
      t6 = $.cm($.gm($.get($sc, "bigMap"), "coordinate"), "attachMovie", ["mc_flower", $.add("flower", $r[6]), (200 + $.n($r[6]))]);
      $.sm($.gm($.gm($.get($sc, "bigMap"), "coordinate"), $.add("flower", $r[6])), "_x", $.gm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "flowerList"), $r[6])), "_x"));
      $.sm($.gm($.gm($.get($sc, "bigMap"), "coordinate"), $.add("flower", $r[6])), "_y", $.gm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "flowerList"), $r[6])), "_y"));
      if (!$.eq($.gm($.gm($.gm($.get($sc, "minimap"), "coordinate"), $.gm($.get($sc, "flowerList"), $r[6])), "_x"), undefined)) { $b = 9; continue; }
      $b = 8; continue;
    case 8:
      t7 = $.cm($.gm($.gm($.get($sc, "bigMap"), "coordinate"), $.add("flower", $r[6])), "removeMovieClip", []);
      $b = 9; continue;
    case 9:
      $b = 6; continue;
    case 10:
      $.def($sc, "availableBahasa", ["Building Available: ", "Contruction(s) disponible(s): ", "Bangunan yang tersedia: "]);
      $.sm($.get($sc, "bigMap"), "onEnterFrame", $.fn({"n":"","p":[],"r":6,"f":105}, $sc, function($sc, $this, $args, $r) {
    var t1;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      t1 = $.cf($sc, "efekFade", [$r[1]]);
      $.def($sc, "i", 1);
      $b = 1; continue;
    case 1:
      if (!!$.gt($.get($sc, "i"), 25)) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      $.sm($.gm($r[1], $.add("map", $.get($sc, "i"))), "i", $.get($sc, "i"));
      $.sm($.gm($r[1], $.add("map", $.get($sc, "i"))), "onRollOver", $.fn({"n":"","p":[],"r":6,"f":105}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, t2, t3, t4, t5, en1, t6, t7, t8;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      t1 = $.cm($r[1], "getNextHighestDepth", []);
      t2 = $.cm($.get($sc, "bigMap"), "createEmptyMovieClip", ["teks_mc", t1]);
      $.sm($.gm($.get($sc, "bigMap"), "teks_mc"), "_x", (-280));
      $.sm($.gm($.get($sc, "bigMap"), "teks_mc"), "_y", 300);
      t3 = $.cm($.gm($.get($sc, "bigMap"), "teks_mc"), "createTextField", ["my_txt", 1, 0, 0, 500, 100]);
      $.sm($.gm($.gm($.get($sc, "bigMap"), "teks_mc"), "my_txt"), "multiline", true);
      $.sm($.gm($.gm($.get($sc, "bigMap"), "teks_mc"), "my_txt"), "wordWrap", true);
      $.sm($.gm($.gm($.get($sc, "bigMap"), "teks_mc"), "my_txt"), "selectable", false);
      t4 = $.nw($sc, "TextFormat", []);
      $r[5] = t4;
      $.sm($r[5], "color", 16777215);
      $.sm($r[5], "font", "Arial");
      t5 = $.nw($sc, "Array", []);
      $r[3] = t5;
      en1 = $.enumerate($.gm($r[2], $.add("objectMap", $.gm($r[1], "i"))));
      s0 = en1;
      $b = 1; continue;
    case 1:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      t7 = $r[0];
      $r[4] = t7;
      t8 = $.cm($r[3], "push", [$.add(" ", $.gm($.gm($.gm($.gm($r[2], "desList"), $.gm($.gm($.gm($r[2], $.add("objectMap", $.gm($r[1], "i"))), $r[4]), 2)), 4), $.get($sc, "bahasa")))]);
      $b = 1; continue;
    case 3:
      $.sm($.gm($.gm($.get($sc, "bigMap"), "teks_mc"), "my_txt"), "text", $.add($.gm($.get($sc, "availableBahasa"), $.get($sc, "bahasa")), $r[3]));
      t6 = $.cm($.gm($.gm($.get($sc, "bigMap"), "teks_mc"), "my_txt"), "setTextFormat", [$r[5]]);
      $.sm($r[1], "_alpha", 100);
      $b = 4; continue;
    case 4: return;
    }
  }));
      $.sm($.gm($r[1], $.add("map", $.get($sc, "i"))), "onRollOut", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    $.sm($r[1], "_alpha", 0);
  }));
      $.sm($.gm($r[1], $.add("map", $.get($sc, "i"))), "onRelease", $.fn({"n":"","p":[],"r":3,"f":105}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    $.set($sc, "aktifTombol", true);
    $.sm($r[2], "map", $.gm($r[1], "i"));
    t1 = $.cm($r[2], "gantiPeta", []);
    t2 = $.cm($.gm($r[2], "bigMap"), "removeMovieClip", []);
  }));
      $.set($sc, "i", ($.n($.get($sc, "i")) + 1));
      $b = 1; continue;
    case 3:
      $.sm($.gm($r[1], "cancel_btn"), "onRelease", $.fn({"n":"","p":[],"r":2,"f":106}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    $.set($sc, "aktifTombol", true);
    t1 = $.cf($sc, "gantiPeta", []);
    t2 = $.cm($.gm($r[1], "bigMap"), "removeMovieClip", []);
  }));
      $b = 4; continue;
    case 4: return;
    }
  }));
      $b = 11; continue;
    case 11: return;
    }
  }));
    $.sm($.get($sc, "menu_btn"), "onRelease", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    t1 = $.cf($sc, "tampilOption", [1]);
    t2 = $.cf($sc, "tampilBlur", []);
  }));
    $.def($sc, "colorType", [0, 16711680, 153, 26112, 10701705, 16777215, 16750899]);
    $.sm($.get($sc, "strategy_btn"), "onRelease", $.fn({"n":"","p":[],"r":6,"f":105}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.set($sc, "aktifTombol", false);
      t1 = $.cm($r[2], "attachMovie", ["main_strategy", "main_strategy", 1000]);
      $.sm($.get($sc, "main_strategy"), "_x", ($.n($.gm($.get($sc, "Stage"), "width")) / 2));
      $.sm($.get($sc, "main_strategy"), "_y", ($.n($.gm($.get($sc, "Stage"), "height")) / 2));
      $.sm($.get($sc, "main_strategy"), "_alpha", 0);
      $.sm($.get($sc, "main_strategy"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1;
    t1 = $.cf($sc, "efekFade", [$r[1]]);
  }));
      $.set($sc, "jarakMapX", $.gm($.gm($.gm($.gm($.get($sc, "main_strategy"), "peta"), "coordinate"), "map11"), "_width"));
      $.set($sc, "jarakMapY", $.gm($.gm($.gm($.gm($.get($sc, "main_strategy"), "peta"), "coordinate"), "map11"), "_height"));
      $.sm($.gm($.get($sc, "main_strategy"), "trap"), "_visible", false);
      $.sm($.get($sc, "main_strategy"), "panglimaAktif", 6);
      $.sm($.gm($.get($sc, "main_strategy"), "nama"), "text", $.gm($.gm($.get($sc, "comInfo"), $.gm($.get($sc, "main_strategy"), "panglimaAktif")), 0));
      $.sm($.gm($.get($sc, "main_strategy"), "info_text"), "text", $.gm($.gm($.gm($.get($sc, "comInfo"), $.gm($.get($sc, "main_strategy"), "panglimaAktif")), 1), $.get($sc, "bahasa")));
      $.sm($.gm($.get($sc, "main_strategy"), "sex"), "text", $.gm($.gm($.gm($.get($sc, "comInfo"), $.gm($.get($sc, "main_strategy"), "panglimaAktif")), 2), $.get($sc, "bahasa")));
      $.sm($.gm($.get($sc, "main_strategy"), "age"), "text", $.gm($.gm($.get($sc, "comInfo"), $.gm($.get($sc, "main_strategy"), "panglimaAktif")), 3));
      $.sm($.gm($.get($sc, "main_strategy"), "infobunga"), "_visible", false);
      t2 = $.cm($.gm($.get($sc, "main_strategy"), "figure"), "gotoAndStop", [$.gm($.get($sc, "main_strategy"), "panglimaAktif")]);
      $.def($sc, "p", 1);
      $b = 1; continue;
    case 1:
      if (!!$.gt($.get($sc, "p"), 6)) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      t3 = $.cm($.gm($.get($sc, "main_strategy"), $.add("panglima", $.get($sc, "p"))), "gotoAndStop", [$.get($sc, "p")]);
      $.sm($.gm($.get($sc, "main_strategy"), $.add("panglima", $.get($sc, "p"))), "p", $.get($sc, "p"));
      t4 = $.cm($.gm($.gm($.get($sc, "main_strategy"), $.add("panglima", $.get($sc, "p"))), "photo"), "gotoAndStop", [2]);
      t5 = $.cm($.gm($.gm($.get($sc, "main_strategy"), $.add("panglima", $.gm($.get($sc, "main_strategy"), "panglimaAktif"))), "photo"), "gotoAndStop", [1]);
      $.sm($.gm($.get($sc, "main_strategy"), $.add("panglima", $.get($sc, "p"))), "onRelease", $.fn({"n":"","p":[],"r":5,"f":105}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, en1, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21, t22, t23, t24, t25, t26, t27, t28, t29, t30, t31, t32, t33, t34, t35, t36, t37;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.sm($.gm($.get($sc, "main_strategy"), "peta"), "_visible", true);
      $.sm($.gm($.get($sc, "main_strategy"), "trap"), "_visible", false);
      if (!!$.bool($.get($sc, "haveMove"))) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      $.sm($.gm($.get($sc, "main_strategy"), "execute_move"), "enabled", true);
      $b = 2; continue;
    case 2:
      t1 = $r[1];
      t2 = $.cm($.str($.gm($.get($sc, "comLoc"), $.gm($r[1], "p"))), "substr", [0, 1]);
      $.sm(t1, "xPos", $.n(t2));
      t3 = $r[1];
      t4 = $.cm($.str($.gm($.get($sc, "comLoc"), $.gm($r[1], "p"))), "substr", [1, 1]);
      $.sm(t3, "yPos", $.n(t4));
      $.sm($r[1], "jarakTempuh", $.gm($.gm($.get($sc, "comList"), $.gm($r[1], "p")), 6));
      $r[4] = 1;
      $b = 3; continue;
    case 3:
      if (!!$.gt($r[4], 55)) { $b = 5; continue; }
      $b = 4; continue;
    case 4:
      $.sm($.gm($.gm($.gm($.get($sc, "main_strategy"), "peta"), "coordinate"), $.add("map", $r[4])), "enabled", false);
      t7 = ($.n($r[4]) + 1);
      $r[4] = t7;
      $b = 3; continue;
    case 5:
      t5 = $.cm($.gm($.gm($.get($sc, "main_strategy"), "peta"), "coordinate"), "getDepth", []);
      t6 = $.cm($.gm($.get($sc, "main_strategy"), "peta"), "createEmptyMovieClip", ["walkpath", $.add(t5, 1)]);
      if (!$.bool($.gm($.get($sc, "panglimaMove"), $.gm($r[1], "p")))) { $b = 11; continue; }
      $b = 6; continue;
    case 6:
      t11 = $.cf($sc, "findPath", [$r[1]]);
      en1 = $.enumerate(t11);
      s0 = en1;
      $b = 7; continue;
    case 7:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 11; continue; }
      $b = 8; continue;
    case 8:
      t13 = $r[0];
      $r[4] = t13;
      t14 = $.gm($.gm($.get($sc, "main_strategy"), "peta"), "coordinate");
      t15 = $.cf($sc, "findPath", [$r[1]]);
      $.sm($.gm(t14, $.gm(t15, $r[4])), "enabled", true);
      t16 = $.gm($.gm($.get($sc, "main_strategy"), "peta"), "coordinate");
      t17 = $.cf($sc, "findPath", [$r[1]]);
      $.sm($.gm(t16, $.gm(t17, $r[4])), "onRelease", $.fn({"n":"","p":[],"r":3,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      t1 = $.cm($.str($.gm($r[1], "_name")), "substr", [3, 2]);
      $r[2] = $.n(t1);
      $.sm($.get($sc, "comLocBaru"), $.gm($.get($sc, "main_strategy"), "panglimaAktif"), $r[2]);
      if (!$.bool($.gm($.get($sc, "tutorial"), "firstPanglima"))) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t3 = $.cm($.get($sc, "tutorial"), "gotoAndStop", [3]);
      $.sm($.get($sc, "tutorial"), "firstPanglima", true);
      $b = 4; continue;
    case 2:
      t2 = $.cm($.get($sc, "tutorial"), "gotoAndStop", [4]);
      $b = 4; continue;
    case 4: return;
    }
  }));
      t18 = $r[4];
      t19 = $.cf($sc, "findPath", [$r[1]]);
      t20 = $.cm($.gm($.gm($.get($sc, "main_strategy"), "peta"), "walkpath"), "attachMovie", ["mark2", $.gm(t19, $r[4]), t18]);
      t21 = $.gm($.gm($.get($sc, "main_strategy"), "peta"), "walkpath");
      t22 = $.cf($sc, "findPath", [$r[1]]);
      t23 = $.gm(t21, $.gm(t22, $r[4]));
      t24 = $.gm($.gm($.get($sc, "main_strategy"), "peta"), "coordinate");
      t25 = $.cf($sc, "findPath", [$r[1]]);
      $.sm(t23, "_x", $.gm($.gm(t24, $.gm(t25, $r[4])), "_x"));
      t26 = $.gm($.gm($.get($sc, "main_strategy"), "peta"), "walkpath");
      t27 = $.cf($sc, "findPath", [$r[1]]);
      t28 = $.gm(t26, $.gm(t27, $r[4]));
      t29 = $.gm($.gm($.get($sc, "main_strategy"), "peta"), "coordinate");
      t30 = $.cf($sc, "findPath", [$r[1]]);
      $.sm(t28, "_y", $.gm($.gm(t29, $.gm(t30, $r[4])), "_y"));
      t31 = $.gm($.gm($.get($sc, "main_strategy"), "peta"), "walkpath");
      t32 = $.cf($sc, "findPath", [$r[1]]);
      if (!$.eq($.gm($.gm(t31, $.gm(t32, $r[4])), "_x"), undefined)) { $b = 10; continue; }
      $b = 9; continue;
    case 9:
      t33 = $.gm($.gm($.get($sc, "main_strategy"), "peta"), "walkpath");
      t34 = $.cf($sc, "findPath", [$r[1]]);
      t35 = $.cm($.gm(t33, $.gm(t34, $r[4])), "removeMovieClip", []);
      $b = 10; continue;
    case 10:
      $b = 7; continue;
    case 11:
      t8 = $.cm($.gm($.gm($.get($sc, "main_strategy"), $.add("panglima", $.gm($.get($sc, "main_strategy"), "panglimaAktif"))), "photo"), "gotoAndStop", [2]);
      $.sm($.get($sc, "main_strategy"), "panglimaAktif", $.gm($r[1], "p"));
      t9 = $.cm($.gm($.gm($.get($sc, "main_strategy"), $.add("panglima", $.gm($r[1], "p"))), "photo"), "gotoAndStop", [1]);
      $.sm($.gm($.get($sc, "main_strategy"), "nama"), "text", $.gm($.gm($.get($sc, "comInfo"), $.gm($r[1], "p")), 0));
      $.sm($.gm($.get($sc, "main_strategy"), "info_text"), "text", $.gm($.gm($.gm($.get($sc, "comInfo"), $.gm($r[1], "p")), 1), $.get($sc, "bahasa")));
      $.sm($.gm($.get($sc, "main_strategy"), "sex"), "text", $.gm($.gm($.gm($.get($sc, "comInfo"), $.gm($r[1], "p")), 2), $.get($sc, "bahasa")));
      $.sm($.gm($.get($sc, "main_strategy"), "age"), "text", $.gm($.gm($.get($sc, "comInfo"), $.gm($r[1], "p")), 3));
      t10 = $.cm($.gm($.get($sc, "main_strategy"), "figure"), "gotoAndStop", [$.gm($r[1], "p")]);
      if (!$.eq($.gm($r[1], "p"), 5)) { $b = 13; continue; }
      $b = 12; continue;
    case 12:
      $.sm($.gm($.get($sc, "main_strategy"), "infobunga"), "_visible", true);
      $.sm($.gm($.gm($.get($sc, "main_strategy"), "infobunga"), "isi"), "text", $.gm($r[2], "bunga"));
      $b = 14; continue;
    case 13:
      $.sm($.gm($.get($sc, "main_strategy"), "infobunga"), "_visible", false);
      $b = 14; continue;
    case 14:
      $.sm($.get($sc, "main_strategy"), "trapMode", false);
      $.sm($.gm($.get($sc, "main_strategy"), "trap"), "_visible", false);
      t12 = $.cm($.gm($.get($sc, "main_strategy"), "trap_btn"), "gotoAndStop", [1]);
      if (!!$.bool($.get($sc, "haveMove"))) { $b = 16; continue; }
      $b = 15; continue;
    case 15:
      $.sm($.gm($.get($sc, "main_strategy"), "execute_move"), "enabled", true);
      $b = 16; continue;
    case 16:
      $.sm($.gm($.get($sc, "main_strategy"), "info_btn"), "enabled", true);
      if (!!$.bool($.get($sc, "haveMove"))) { $b = 18; continue; }
      $b = 17; continue;
    case 17:
      t37 = $.cm($.get($sc, "tutorial"), "gotoAndStop", [2]);
      $b = 20; continue;
    case 18:
      t36 = $.cm($.get($sc, "tutorial"), "gotoAndStop", [9]);
      $b = 20; continue;
    case 20: return;
    }
  }));
      $.sm($.gm($.gm($.gm($.get($sc, "main_strategy"), "peta"), $.add("panglima", $.get($sc, "p"))), "papan"), "_visible", 0);
      $.sm($.gm($.gm($.get($sc, "main_strategy"), "peta"), $.add("panglima", $.get($sc, "p"))), "_x", $.gm($.gm($.gm($.gm($.get($sc, "main_strategy"), "peta"), "coordinate"), $.add("map", $.gm($.get($sc, "comLoc"), $.get($sc, "p")))), "_x"));
      $.sm($.gm($.gm($.get($sc, "main_strategy"), "peta"), $.add("panglima", $.get($sc, "p"))), "_y", $.gm($.gm($.gm($.gm($.get($sc, "main_strategy"), "peta"), "coordinate"), $.add("map", $.gm($.get($sc, "comLoc"), $.get($sc, "p")))), "_y"));
      t6 = $.cm($.gm($.gm($.get($sc, "main_strategy"), "peta"), $.add("panglima", $.get($sc, "p"))), "gotoAndStop", [$.get($sc, "p")]);
      $.sm($.gm($.gm($.get($sc, "main_strategy"), "peta"), $.add("panglima", $.get($sc, "p"))), "p", $.get($sc, "p"));
      $.set($sc, "p", ($.n($.get($sc, "p")) + 1));
      $b = 1; continue;
    case 3:
      $.sm($.gm($.get($sc, "main_strategy"), "peta"), "onEnterFrame", $.fn({"n":"","p":[],"r":3,"f":106}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5, t6;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.sm($.gm($.gm($.get($sc, "main_strategy"), "peta"), "fokus"), "_x", $.gm($.gm($.gm($.get($sc, "main_strategy"), "peta"), $.add("panglima", $.gm($.get($sc, "main_strategy"), "panglimaAktif"))), "_x"));
      $.sm($.gm($.gm($.get($sc, "main_strategy"), "peta"), "fokus"), "_y", $.gm($.gm($.gm($.get($sc, "main_strategy"), "peta"), $.add("panglima", $.gm($.get($sc, "main_strategy"), "panglimaAktif"))), "_y"));
      $r[2] = 1;
      $b = 1; continue;
    case 1:
      if (!!$.gt($r[2], 6)) { $b = 6; continue; }
      $b = 2; continue;
    case 2:
      t2 = $.cm($.gm($.get($sc, "main_strategy"), "peta"), "createEmptyMovieClip", [$.add("garis", $r[2]), $r[2]]);
      t3 = $.cm($.gm($.gm($.get($sc, "main_strategy"), "peta"), $.add("garis", $r[2])), "lineStyle", [3, $.gm($.gm($r[1], "colorType"), $r[2]), 100]);
      t4 = $.cm($.gm($.gm($.get($sc, "main_strategy"), "peta"), $.add("garis", $r[2])), "moveTo", [$.gm($.gm($.gm($.get($sc, "main_strategy"), "peta"), $.add("panglima", $r[2])), "_x"), $.gm($.gm($.gm($.get($sc, "main_strategy"), "peta"), $.add("panglima", $r[2])), "_y")]);
      t5 = $.cm($.gm($.gm($.get($sc, "main_strategy"), "peta"), $.add("garis", $r[2])), "lineTo", [$.gm($.gm($.gm($.gm($.get($sc, "main_strategy"), "peta"), "coordinate"), $.add("map", $.gm($.get($sc, "comLocBaru"), $r[2]))), "_x"), $.gm($.gm($.gm($.gm($.get($sc, "main_strategy"), "peta"), "coordinate"), $.add("map", $.gm($.get($sc, "comLocBaru"), $r[2]))), "_y")]);
      if (!!$.bool($.gm($.get($sc, "main_strategy"), "trapMode"))) { $b = 4; continue; }
      $b = 3; continue;
    case 3:
      $.sm($.gm($.gm($.get($sc, "main_strategy"), "peta"), $.add("garis", $r[2])), "_visible", true);
      $.sm($.gm($.gm($.get($sc, "main_strategy"), "peta"), $.add("panglima", $r[2])), "_visible", true);
      $b = 5; continue;
    case 4:
      $.sm($.gm($.gm($.get($sc, "main_strategy"), "peta"), $.add("garis", $r[2])), "_visible", false);
      $.sm($.gm($.gm($.get($sc, "main_strategy"), "peta"), $.add("panglima", $r[2])), "_visible", false);
      $b = 5; continue;
    case 5:
      t6 = ($.n($r[2]) + 1);
      $r[2] = t6;
      $b = 1; continue;
    case 6:
      t1 = $.cm($.gm($.gm($.get($sc, "main_strategy"), "peta"), $.add("garis", $.gm($.get($sc, "main_strategy"), "panglimaAktif"))), "swapDepths", [99]);
      $b = 7; continue;
    case 7: return;
    }
  }));
      $.sm($.gm($.get($sc, "main_strategy"), "execute_move"), "onRelease", $.fn({"n":"","p":[],"r":3,"f":41}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, t2, t3, en1, t4, t5;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.set($sc, "haveMove", true);
      t1 = $.cm($r[1], "gotoAndStop", [2]);
      $.sm($r[1], "enabled", false);
      t2 = $.cm($r[1], "getNextHighestDepth", []);
      t3 = $.cm($.gm($.get($sc, "main_strategy"), "peta"), "createEmptyMovieClip", ["walkpath", t2]);
      $.def($sc, "p", 1);
      $b = 1; continue;
    case 1:
      if (!!$.gt($.get($sc, "p"), 6)) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      $.sm($.get($sc, "panglimaMove"), $.get($sc, "p"), false);
      $.sm($.get($sc, "main_strategy"), $.add("disX", $.get($sc, "p")), ($.n($.gm($.gm($.gm($.gm($.get($sc, "main_strategy"), "peta"), "coordinate"), $.add("map", $.gm($.get($sc, "comLocBaru"), $.get($sc, "p")))), "_x")) - $.n($.gm($.gm($.gm($.get($sc, "main_strategy"), "peta"), $.add("panglima", $.get($sc, "p"))), "_x"))));
      $.sm($.get($sc, "main_strategy"), $.add("disY", $.get($sc, "p")), ($.n($.gm($.gm($.gm($.gm($.get($sc, "main_strategy"), "peta"), "coordinate"), $.add("map", $.gm($.get($sc, "comLocBaru"), $.get($sc, "p")))), "_y")) - $.n($.gm($.gm($.gm($.get($sc, "main_strategy"), "peta"), $.add("panglima", $.get($sc, "p"))), "_y"))));
      $.sm($.gm($.gm($.get($sc, "main_strategy"), "peta"), $.add("panglima", $.get($sc, "p"))), "p", $.get($sc, "p"));
      $.sm($.gm($.gm($.get($sc, "main_strategy"), "peta"), $.add("panglima", $.get($sc, "p"))), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      t1 = $.cm($.get($sc, "Math"), "abs", [($.n($.gm($.gm($.gm($.gm($.get($sc, "main_strategy"), "peta"), "coordinate"), $.add("map", $.gm($.get($sc, "comLocBaru"), $.gm($r[1], "p")))), "_x")) - $.n($.gm($r[1], "_x")))]);
      t2 = $.cm($.get($sc, "Math"), "abs", [($.n($.gm($.gm($.gm($.gm($.get($sc, "main_strategy"), "peta"), "coordinate"), $.add("map", $.gm($.get($sc, "comLocBaru"), $.gm($r[1], "p")))), "_y")) - $.n($.gm($r[1], "_y")))]);
      if (!$.gt($.add(t1, t2), 5)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      $.sm($r[1], "moving", true);
      $.sm($.gm($.get($sc, "main_strategy"), "execute_move"), "enabled", false);
      $.sm($.gm($.get($sc, "main_strategy"), "set_trap"), "enabled", false);
      $.sm($.gm($.get($sc, "main_strategy"), "close_btn"), "enabled", false);
      t3 = $r[1];
      t4 = $.gm($r[1], "_x");
      t5 = $.cm($.get($sc, "Math"), "atan2", [$.gm($.get($sc, "main_strategy"), $.add("disY", $.gm($r[1], "p"))), $.gm($.get($sc, "main_strategy"), $.add("disX", $.gm($r[1], "p")))]);
      t6 = $.cm($.get($sc, "Math"), "cos", [t5]);
      $.sm(t3, "_x", $.add(t4, (4 * $.n(t6))));
      t7 = $r[1];
      t8 = $.gm($r[1], "_y");
      t9 = $.cm($.get($sc, "Math"), "atan2", [$.gm($.get($sc, "main_strategy"), $.add("disY", $.gm($r[1], "p"))), $.gm($.get($sc, "main_strategy"), $.add("disX", $.gm($r[1], "p")))]);
      t10 = $.cm($.get($sc, "Math"), "sin", [t9]);
      $.sm(t7, "_y", $.add(t8, (4 * $.n(t10))));
      $b = 6; continue;
    case 2:
      $.sm($r[1], "moving", false);
      if (!!$.bool($.get($sc, "haveMove"))) { $b = 4; continue; }
      $b = 3; continue;
    case 3:
      $.sm($.gm($.get($sc, "main_strategy"), "execute_move"), "enabled", true);
      $b = 4; continue;
    case 4:
      $.sm($.gm($.get($sc, "main_strategy"), "set_trap"), "enabled", true);
      $.sm($.gm($.get($sc, "main_strategy"), "close_btn"), "enabled", true);
      $.sm($r[1], "_x", $.gm($.gm($.gm($.gm($.get($sc, "main_strategy"), "peta"), "coordinate"), $.add("map", $.gm($.get($sc, "comLocBaru"), $.gm($r[1], "p")))), "_x"));
      $.sm($r[1], "_y", $.gm($.gm($.gm($.gm($.get($sc, "main_strategy"), "peta"), "coordinate"), $.add("map", $.gm($.get($sc, "comLocBaru"), $.gm($r[1], "p")))), "_y"));
      t11 = $.delMember($r[1], "onEnterFrame");
      $b = 6; continue;
    case 6: return;
    }
  }));
      $.set($sc, "p", ($.n($.get($sc, "p")) + 1));
      $b = 1; continue;
    case 3:
      en1 = $.enumerate($.get($sc, "comLocBaru"));
      s0 = en1;
      $b = 4; continue;
    case 4:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 6; continue; }
      $b = 5; continue;
    case 5:
      $.set($sc, "isi", $r[0]);
      $.sm($.get($sc, "comLoc"), $.get($sc, "isi"), $.gm($.get($sc, "comLocBaru"), $.get($sc, "isi")));
      $b = 4; continue;
    case 6:
      $r[2] = 1;
      $b = 7; continue;
    case 7:
      if (!!$.gt($r[2], 55)) { $b = 9; continue; }
      $b = 8; continue;
    case 8:
      $.sm($.gm($.gm($.gm($.get($sc, "main_strategy"), "peta"), "coordinate"), $.add("map", $r[2])), "enabled", false);
      t5 = ($.n($r[2]) + 1);
      $r[2] = t5;
      $b = 7; continue;
    case 9:
      t4 = $.cm($.get($sc, "tutorial"), "gotoAndStop", [5]);
      $b = 10; continue;
    case 10: return;
    }
  }));
      if (!!$.bool($.get($sc, "haveMove"))) { $b = 5; continue; }
      $b = 4; continue;
    case 4:
      $.sm($.gm($.get($sc, "main_strategy"), "execute_move"), "enabled", true);
      t8 = $.cm($.gm($.get($sc, "main_strategy"), "execute_move"), "gotoAndStop", [1]);
      $b = 6; continue;
    case 5:
      $.sm($.gm($.get($sc, "main_strategy"), "execute_move"), "enabled", false);
      t7 = $.cm($.gm($.get($sc, "main_strategy"), "execute_move"), "gotoAndStop", [2]);
      $b = 6; continue;
    case 6:
      t9 = $.cm($.gm($.get($sc, "main_strategy"), "trap_btn"), "stop", []);
      $.sm($.gm($.get($sc, "main_strategy"), "trap_btn"), "onRelease", $.fn({"n":"","p":[],"r":3,"f":41}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, en1, t2, t3, t4, t5, t6;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.sm($.gm($.get($sc, "main_strategy"), "trap"), "_visible", true);
      if (!!$.bool($.gm($.get($sc, "main_strategy"), "trapMode"))) { $b = 5; continue; }
      $b = 1; continue;
    case 1:
      en1 = $.enumerate($.get($sc, "trapEnable"));
      s0 = en1;
      $b = 2; continue;
    case 2:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 4; continue; }
      $b = 3; continue;
    case 3:
      t5 = $r[0];
      $r[2] = t5;
      t6 = $.cm($.gm($.gm($.get($sc, "main_strategy"), "trap"), "coordinate"), "attachMovie", ["trap", $.add("trap", $r[2]), $.add(100, $r[2])]);
      $.sm($.gm($.gm($.gm($.get($sc, "main_strategy"), "trap"), "coordinate"), $.add("trap", $r[2])), "_x", $.gm($.gm($.gm($.gm($.get($sc, "main_strategy"), "trap"), "coordinate"), $.add("map", $.gm($.gm($.get($sc, "trapEnable"), $r[2]), 1))), "_x"));
      $.sm($.gm($.gm($.gm($.get($sc, "main_strategy"), "trap"), "coordinate"), $.add("trap", $r[2])), "_y", $.gm($.gm($.gm($.gm($.get($sc, "main_strategy"), "trap"), "coordinate"), $.add("map", $.gm($.gm($.get($sc, "trapEnable"), $r[2]), 1))), "_y"));
      $.sm($.gm($.gm($.gm($.get($sc, "main_strategy"), "trap"), "coordinate"), $.add("trap", $r[2])), "i", $r[2]);
      $.sm($.gm($.gm($.gm($.get($sc, "main_strategy"), "trap"), "coordinate"), $.add("trap", $r[2])), "onRelease", $.get($sc, "setTrap"));
      $.sm($.gm($.gm($.gm($.get($sc, "main_strategy"), "trap"), "coordinate"), $.add("trap", $r[2])), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1;
    t1 = $.cm($r[1], "gotoAndStop", [$.add($.gm($.gm($.get($sc, "trapEnable"), $.gm($r[1], "i")), 0), 1)]);
  }));
      $b = 2; continue;
    case 4:
      $.sm($.get($sc, "main_strategy"), "trapMode", true);
      t3 = $.cm($.gm($.get($sc, "main_strategy"), "trap_btn"), "gotoAndStop", [2]);
      $.sm($.gm($.get($sc, "main_strategy"), "execute_move"), "enabled", false);
      $.sm($.gm($.get($sc, "main_strategy"), "info_btn"), "enabled", false);
      t4 = $.cm($.get($sc, "tutorial"), "gotoAndStop", [6]);
      $b = 9; continue;
    case 5:
      $.sm($.get($sc, "main_strategy"), "trapMode", false);
      $.sm($.gm($.get($sc, "main_strategy"), "trap"), "_visible", false);
      t1 = $.cm($.gm($.get($sc, "main_strategy"), "trap_btn"), "gotoAndStop", [1]);
      if (!!$.bool($.get($sc, "haveMove"))) { $b = 7; continue; }
      $b = 6; continue;
    case 6:
      $.sm($.gm($.get($sc, "main_strategy"), "execute_move"), "enabled", true);
      $b = 7; continue;
    case 7:
      $.sm($.gm($.get($sc, "main_strategy"), "info_btn"), "enabled", true);
      t2 = $.cm($.get($sc, "tutorial"), "gotoAndStop", [8]);
      $b = 9; continue;
    case 9: return;
    }
  }));
      $.sm($.gm($.get($sc, "main_strategy"), "info_btn"), "onRelease", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    var t1;
    $.sm($.gm($.get($sc, "main_strategy"), "peta"), "_visible", false);
    $.sm($.gm($.get($sc, "main_strategy"), "trap"), "_visible", false);
    t1 = $.cm($.get($sc, "tutorial"), "gotoAndStop", [7]);
  }));
      $.sm($.gm($.get($sc, "main_strategy"), "close_btn"), "onRelease", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3;
    $.set($sc, "aktifTombol", true);
    t1 = $.cf($sc, "gantiPeta", []);
    t2 = $.cm($.get($sc, "tutorial"), "removeMovieClip", []);
    t3 = $.cm($.get($sc, "main_strategy"), "removeMovieClip", []);
  }));
      if (!$.bool($.get($sc, "firstStrategy"))) { $b = 9; continue; }
      $b = 7; continue;
    case 7:
      t10 = $.cm($r[2], "attachMovie", ["main_tutorial_str", "tutorial", 10009]);
      t11 = $.cm($.get($sc, "tutorial"), "stop", []);
      $.sm($.get($sc, "tutorial"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    $.sm($.gm($r[1], "cancel_btn"), "onRelease", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    var t1;
    t1 = $.cm($.get($sc, "tutorial"), "gotoAndStop", [9]);
  }));
  }));
      $.sm($.get($sc, "tutorial"), "firstPanglima", false);
      $.set($sc, "firstStrategy", false);
      $b = 9; continue;
    case 9: return;
    }
  }));
    $.sm($.get($sc, "endturn_btn"), "onRelease", $.fn({"n":"","p":[],"r":7,"f":105}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!!$.lt($.add($.get($sc, "days"), 1), 76)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t4 = $.cm($r[2], "gotoAndStop", ["end"]);
      $b = 4; continue;
    case 2:
      $.set($sc, "aktifTombol", false);
      t1 = $.cf($sc, "tampilBlur", []);
      t2 = $.cm($r[2], "attachMovie", ["menu_confirm", "confirm", 1000]);
      $.sm($.get($sc, "confirm"), "_x", ($.n($.gm($.get($sc, "Stage"), "width")) / 2));
      $.sm($.get($sc, "confirm"), "_y", ($.n($.gm($.get($sc, "Stage"), "height")) / 2));
      t3 = $.cm($.get($sc, "confirm"), "gotoAndStop", [($.n($.get($sc, "bahasa")) + 1)]);
      $.sm($.get($sc, "confirm"), "_alpha", 0);
      $.sm($.get($sc, "confirm"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1;
    t1 = $.cf($sc, "efekFade", [$r[1]]);
  }));
      $.sm($.gm($.get($sc, "confirm"), "yes_btn"), "onRelease", $.fn({"n":"","p":[],"r":7,"f":105}, $sc, function($sc, $this, $args, $r) {
    var s0, s1, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21, t22, t23, t24, t25, t26, t27, t28, t29, en1, t30, t31, t32, en2, t33, t34, en3, t35, t36, en4, t37, en5, t38, t39, t40, t41, t42, t43, t44, t45, t46, t47, t48, en6, t49, t50, t51, t52, t53, t54, t55;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!!$.bool($.get($sc, "challenge1"))) { $b = 5; continue; }
      $b = 1; continue;
    case 1:
      t1 = !$.lt($.add($.get($sc, "days"), 1), 15);
      t2 = !t1;
      s0 = t1;
      if (t2) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      s0 = $.lt($.get($sc, "days"), 30);
      $b = 3; continue;
    case 3:
      if (!$.bool(s0)) { $b = 5; continue; }
      $b = 4; continue;
    case 4:
      t7 = $.cm($r[2], "scoreHTTPSender", ["FL091017", "CH001"]);
      $.set($sc, "challenge1", true);
      $b = 5; continue;
    case 5:
      if (!!$.bool($.get($sc, "challenge2"))) { $b = 10; continue; }
      $b = 6; continue;
    case 6:
      t3 = !$.lt($.add($.get($sc, "days"), 1), 30);
      t4 = !t3;
      s0 = t3;
      if (t4) { $b = 8; continue; }
      $b = 7; continue;
    case 7:
      s0 = $.lt($.get($sc, "days"), 50);
      $b = 8; continue;
    case 8:
      if (!$.bool(s0)) { $b = 10; continue; }
      $b = 9; continue;
    case 9:
      t8 = $.cm($r[2], "scoreHTTPSender", ["FL091017", "CH002"]);
      $.set($sc, "challenge2", true);
      $b = 10; continue;
    case 10:
      if (!!$.bool($.get($sc, "challenge3"))) { $b = 15; continue; }
      $b = 11; continue;
    case 11:
      t5 = !$.lt($.add($.get($sc, "days"), 1), 50);
      t6 = !t5;
      s0 = t5;
      if (t6) { $b = 13; continue; }
      $b = 12; continue;
    case 12:
      s0 = $.lt($.get($sc, "days"), 75);
      $b = 13; continue;
    case 13:
      if (!$.bool(s0)) { $b = 15; continue; }
      $b = 14; continue;
    case 14:
      t11 = $.cm($r[2], "scoreHTTPSender", ["FL091017", "CH003"]);
      $.set($sc, "challenge3", true);
      $b = 15; continue;
    case 15:
      if (!!$.bool($.get($sc, "challenge4"))) { $b = 18; continue; }
      $b = 16; continue;
    case 16:
      if (!!$.lt($.add($.get($sc, "days"), 1), 75)) { $b = 18; continue; }
      $b = 17; continue;
    case 17:
      t10 = $.cm($r[2], "scoreHTTPSender", ["FL091017", "CH004"]);
      $.set($sc, "challenge4", true);
      $b = 18; continue;
    case 18:
      $.set($sc, "days", ($.n($.get($sc, "days")) + 1));
      if (!$.lt($.get($sc, "days"), 75)) { $.cf($sc, "newMedals", [1]); }
      if (!$.lt($.get($sc, "days"), 50)) { $.cf($sc, "newMedals", [2]); }
      if (!$.lt($.get($sc, "days"), 40)) { $.cf($sc, "newMedals", [3]); }
      if (!$.lt($.get($sc, "days"), 25)) { $.cf($sc, "newMedals", [4]); }
      if (!$.lt($.get($sc, "days"), 10)) { $.cf($sc, "newMedals", [5]); }
      $b = 28; continue;
    case 28:
      $.set($sc, "haveMove", false);
      if (!!$.bool($.get($sc, "tampilWarning"))) { $b = 33; continue; }
      $b = 29; continue;
    case 29:
      if (!$.gt($.gm($.get($sc, "daftarMusuhSerang"), "length"), 0)) { $b = 33; continue; }
      $b = 30; continue;
    case 30:
      $r[3] = 1;
      $b = 31; continue;
    case 31:
      t30 = $r[3];
      t31 = $.cm($.get($sc, "Math"), "ceil", [($.n($.get($sc, "days")) / 25)]);
      if (!!$.gt(t30, t31)) { $b = 33; continue; }
      $b = 32; continue;
    case 32:
      t33 = $.cf($sc, "tampilBunga", [$.gm($r[2], $.add("tempat", $r[3]))]);
      t34 = ($.n($r[3]) + 1);
      $r[3] = t34;
      $b = 31; continue;
    case 33:
      t14 = $.cf($sc, "resetBunga", []);
      $.set($sc, "transaksi", 100);
      t15 = $.cm($r[1], "getNextHighestDepth", []);
      t16 = $.cm($r[2], "attachMovie", ["day_tween", "day_tween", t15]);
      $.sm($.gm($.gm($.get($sc, "day_tween"), "text_mc"), "hari"), "text", $.get($sc, "days"));
      $.set($sc, "resourceBuyWeapon", [0, 0, 0, 0, 0]);
      $.set($sc, "resourceBuyArmy", [0, 0, 0, 0, 0]);
      $.set($sc, "panglimaMove", [true, true, true, true, true, true]);
      $.set($sc, "resourceProduce", [0, 0, 0, 0, 0]);
      $r[3] = 1;
      $b = 34; continue;
    case 34:
      if (!!$.gt($r[3], 25)) { $b = 42; continue; }
      $b = 35; continue;
    case 35:
      en1 = $.enumerate($.gm($r[2], $.add("objectMap", $r[3])));
      s0 = en1;
      $b = 36; continue;
    case 36:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 41; continue; }
      $b = 37; continue;
    case 37:
      t36 = $r[0];
      $r[4] = t36;
      en4 = $.enumerate($.gm($.gm($.get($sc, "desList"), $.gm($.gm($.gm($r[2], $.add("objectMap", $r[3])), $r[4]), 2)), 2));
      s1 = en4;
      $b = 38; continue;
    case 38:
      $r[0] = s1.shift();
      if ($r[0] === null) { $b = 40; continue; }
      $b = 39; continue;
    case 39:
      t39 = $r[0];
      $r[5] = t39;
      $.sm($.get($sc, "resourceProduce"), $r[5], $.add($.gm($.get($sc, "resourceProduce"), $r[5]), ($.n($.gm($.gm($.gm($.get($sc, "desList"), $.gm($.gm($.gm($r[2], $.add("objectMap", $r[3])), $r[4]), 2)), 2), $r[5])) * $.n($.gm($.gm($.gm($r[2], $.add("objectMap", $r[3])), $r[4]), 0)))));
      $b = 38; continue;
    case 40:
      $b = 36; continue;
    case 41:
      t35 = ($.n($r[3]) + 1);
      $r[3] = t35;
      $b = 34; continue;
    case 42:
      t19 = $.get($sc, "resourceProduce");
      t20 = $.gm($.get($sc, "resourceProduce"), 1);
      t21 = $.cm($.get($sc, "Math"), "round", [(($.n($.gm($.get($sc, "resourceProduce"), 1)) / 50) * $.n($.gm($.get($sc, "townEcoStat"), 2)))]);
      $.sm(t19, 1, $.add(t20, t21));
      t22 = $.get($sc, "resourceProduce");
      t23 = $.gm($.get($sc, "resourceProduce"), 2);
      t24 = $.cm($.get($sc, "Math"), "round", [(($.n($.gm($.get($sc, "resourceProduce"), 2)) / 10) * $.n($.gm($.get($sc, "townEcoStat"), 3)))]);
      $.sm(t22, 2, $.add(t23, t24));
      t25 = $.get($sc, "resourceProduce");
      t26 = $.gm($.get($sc, "resourceProduce"), 3);
      t27 = $.cm($.get($sc, "Math"), "round", [(($.n($.gm($.get($sc, "resourceProduce"), 3)) / 10) * $.n($.gm($.get($sc, "townEcoStat"), 4)))]);
      $.sm(t25, 3, $.add(t26, t27));
      t28 = $.get($sc, "population");
      t29 = $.cf($sc, "sumArray", [$.get($sc, "armyProduce")]);
      if (!$.lt($.add(t28, t29), $.get($sc, "populationMax"))) { $b = 47; continue; }
      $b = 43; continue;
    case 43:
      en2 = $.enumerate($.get($sc, "armyList"));
      s0 = en2;
      $b = 44; continue;
    case 44:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 46; continue; }
      $b = 45; continue;
    case 45:
      t37 = $r[0];
      $r[5] = t37;
      $.sm($.get($sc, "armyList"), $r[5], $.add($.gm($.get($sc, "armyList"), $r[5]), $.gm($.get($sc, "armyProduce"), $r[5])));
      $b = 44; continue;
    case 46:
      $b = 48; continue;
    case 47:
      t32 = $.cf($sc, "tampilDialog", [3]);
      $b = 48; continue;
    case 48:
      en3 = $.enumerate($.get($sc, "weaponList"));
      s0 = en3;
      $b = 49; continue;
    case 49:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 51; continue; }
      $b = 50; continue;
    case 50:
      t38 = $r[0];
      $r[5] = t38;
      $.sm($.get($sc, "weaponList"), $r[5], $.add($.gm($.get($sc, "weaponList"), $r[5]), $.gm($.get($sc, "weaponProduce"), $r[5])));
      $b = 49; continue;
    case 51:
      en5 = $.enumerate($.get($sc, "resourceList"));
      s0 = en5;
      $b = 52; continue;
    case 52:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 56; continue; }
      $b = 53; continue;
    case 53:
      t40 = $r[0];
      $r[5] = t40;
      if (!$.gt($.gm($.get($sc, "townSpeStat"), 4), 0)) { $b = 55; continue; }
      $b = 54; continue;
    case 54:
      $.sm($.get($sc, "resourceProduce"), $r[5], $.add($.gm($.get($sc, "resourceProduce"), $r[5]), 100));
      $b = 55; continue;
    case 55:
      $.sm($.get($sc, "resourceList"), $r[5], $.add($.gm($.get($sc, "resourceList"), $r[5]), $.gm($.get($sc, "resourceProduce"), $r[5])));
      $b = 52; continue;
    case 56:
      $r[6] = 10000;
      if (!!$.lt($.gm($.get($sc, "resourceList"), 1), $r[6])) { $b = 58; continue; }
      $b = 57; continue;
    case 57:
      t41 = $.cf($sc, "newAchievement", [8]);
      $b = 58; continue;
    case 58:
      if (!!$.lt($.gm($.get($sc, "resourceList"), 2), $r[6])) { $b = 60; continue; }
      $b = 59; continue;
    case 59:
      t42 = $.cf($sc, "newAchievement", [9]);
      $b = 60; continue;
    case 60:
      if (!!$.lt($.gm($.get($sc, "resourceList"), 3), $r[6])) { $b = 62; continue; }
      $b = 61; continue;
    case 61:
      t43 = $.cf($sc, "newAchievement", [10]);
      $b = 62; continue;
    case 62:
      if (!!$.lt($.gm($.get($sc, "resourceList"), 4), $r[6])) { $b = 64; continue; }
      $b = 63; continue;
    case 63:
      t44 = $.cf($sc, "newAchievement", [11]);
      $b = 64; continue;
    case 64:
      if (!!$.bool($.get($sc, "challenge9"))) { $b = 67; continue; }
      $b = 65; continue;
    case 65:
      if (!!$.lt($.gm($.get($sc, "resourceList"), 2), 8000)) { $b = 67; continue; }
      $b = 66; continue;
    case 66:
      t45 = $.cm($r[2], "scoreHTTPSender", ["FL091017", "CH009"]);
      $.set($sc, "challenge9", true);
      $b = 67; continue;
    case 67:
      if (!!$.bool($.get($sc, "challenge10"))) { $b = 70; continue; }
      $b = 68; continue;
    case 68:
      if (!!$.lt($.gm($.get($sc, "resourceList"), 4), 8000)) { $b = 70; continue; }
      $b = 69; continue;
    case 69:
      t46 = $.cm($r[2], "scoreHTTPSender", ["FL091017", "CH010"]);
      $.set($sc, "challenge10", true);
      $b = 70; continue;
    case 70:
      if (!!$.bool($.get($sc, "challenge11"))) { $b = 73; continue; }
      $b = 71; continue;
    case 71:
      if (!!$.lt($.gm($.get($sc, "resourceList"), 3), 8000)) { $b = 73; continue; }
      $b = 72; continue;
    case 72:
      t47 = $.cm($r[2], "scoreHTTPSender", ["FL091017", "CH011"]);
      $.set($sc, "challenge11", true);
      $b = 73; continue;
    case 73:
      if (!!$.bool($.get($sc, "challenge12"))) { $b = 76; continue; }
      $b = 74; continue;
    case 74:
      if (!!$.lt($.gm($.get($sc, "resourceList"), 1), 8000)) { $b = 76; continue; }
      $b = 75; continue;
    case 75:
      t48 = $.cm($r[2], "scoreHTTPSender", ["FL091017", "CH012"]);
      $.set($sc, "challenge12", true);
      $b = 76; continue;
    case 76:
      if (!!$.bool($.get($sc, "challenge15"))) { $b = 79; continue; }
      $b = 77; continue;
    case 77:
      if (!!$.lt($.gm($.get($sc, "weaponList"), 1), 150)) { $b = 79; continue; }
      $b = 78; continue;
    case 78:
      t49 = $.cm($r[2], "scoreHTTPSender", ["FL091017", "CH015"]);
      $.set($sc, "challenge15", true);
      $b = 79; continue;
    case 79:
      if (!!$.bool($.get($sc, "challenge16"))) { $b = 82; continue; }
      $b = 80; continue;
    case 80:
      if (!!$.lt($.gm($.get($sc, "armyList"), 4), 100)) { $b = 82; continue; }
      $b = 81; continue;
    case 81:
      t50 = $.cm($r[2], "scoreHTTPSender", ["FL091017", "CH016"]);
      $.set($sc, "challenge16", true);
      $b = 82; continue;
    case 82:
      en6 = $.enumerate($.get($sc, "armyProduce"));
      s0 = en6;
      $b = 83; continue;
    case 83:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 85; continue; }
      $b = 84; continue;
    case 84:
      t55 = $r[0];
      $r[5] = t55;
      $.sm($.get($sc, "armyProduce"), $r[5], 0);
      $.sm($.get($sc, "weaponProduce"), $r[5], 0);
      $b = 83; continue;
    case 85:
      t51 = $.cf($sc, "tampilSummaryResource", []);
      t52 = $.cf($sc, "cekMusuh", []);
      t53 = $.cm($.get($sc, "blur"), "removeMovieClip", []);
      $.set($sc, "aktifTombol", false);
      $.trace($.add("end of day :", ($.n($.get($sc, "days")) - 1)));
      $.trace("===============");
      t54 = $.cm($.get($sc, "confirm"), "removeMovieClip", []);
      $b = 86; continue;
    case 86: return;
    }
  }));
      $.sm($.gm($.get($sc, "confirm"), "no_btn"), "onRelease", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    $.set($sc, "aktifTombol", true);
    t1 = $.cf($sc, "gantiPeta", []);
    t2 = $.cm($.get($sc, "confirm"), "removeMovieClip", []);
  }));
      $b = 4; continue;
    case 4: return;
    }
  }));
    $.def($sc, "pasList", [0, ["Swordman", "Fantassin", "Pasukan Pedang"], ["Bowman", "Archer", "Pemanah"], ["Spearman", "Lancier", "Pasukan Tombak"], ["Gunman", "Tireur", "Penembak"], ["Spellcaster", "Sorcier", "Penyihir"]]);
    $.def($sc, "resList", [0, ["Gold", "Or", "Emas"], ["Food", "Nourriture", "Makanan"], ["Iron", "Fer", "Besi"], ["Wood", "Bois", "Kayu"], ["Population", "Population", "Populasi"]]);
    $.def($sc, "weList", [0, ["Sword", "épée", "Pedang"], ["Bow", "arc", "Busur panah"], ["Spear", "lance", "Tombak"], ["Gun", "Fusil", "Senapan"], ["Staff", "Bâton", "Tongkat Sihir"]]);
    $.def($sc, "typeBahasa", ["ENEMY TYPE", "ENNEMI DE TYPE", "TIPE MUSUH"]);
    $.def($sc, "totalEnemyBahasa", ["\nTOTAL ENEMY: ", "\\OTAL ENEMY: ", "\nTOTAL MUSUH: "]);
    $.sm($.get($sc, "main_resources"), "onEnterFrame", $.fn({"n":"","p":[],"r":3,"f":105}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5, t6, t7, t8, t9;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      t1 = $.cm($.gm($r[1], "tulisan"), "gotoAndStop", [$.add($.gm($r[2], "bahasa"), 1)]);
      $.sm($.gm($r[2], "day_text"), "text", $.get($sc, "days"));
      t2 = $.gm($r[1], "gold");
      t3 = $.cm($.get($sc, "Math"), "round", [$.gm($.get($sc, "resourceList"), 1)]);
      $.sm(t2, "text", t3);
      t4 = $.gm($r[1], "food");
      t5 = $.cm($.get($sc, "Math"), "round", [$.gm($.get($sc, "resourceList"), 2)]);
      $.sm(t4, "text", t5);
      t6 = $.gm($r[1], "iron");
      t7 = $.cm($.get($sc, "Math"), "round", [$.gm($.get($sc, "resourceList"), 3)]);
      $.sm(t6, "text", t7);
      t8 = $.gm($r[1], "wood");
      t9 = $.cm($.get($sc, "Math"), "round", [$.gm($.get($sc, "resourceList"), 4)]);
      $.sm(t8, "text", t9);
      $.sm($.gm($r[1], "population"), "text", $.add($.add($.get($sc, "population"), "/"), $.get($sc, "populationMax")));
      $.sm($.gm($r[1], "sword"), "text", $.gm($.get($sc, "weaponList"), 1));
      $.sm($.gm($r[1], "bow"), "text", $.gm($.get($sc, "weaponList"), 2));
      $.sm($.gm($r[1], "spear"), "text", $.gm($.get($sc, "weaponList"), 3));
      $.sm($.gm($r[1], "gun"), "text", $.gm($.get($sc, "weaponList"), 4));
      $.sm($.gm($r[1], "staff"), "text", $.gm($.get($sc, "weaponList"), 5));
      $.sm($.gm($r[1], "swordman"), "text", $.gm($.get($sc, "armyList"), 1));
      $.sm($.gm($r[1], "horsearcher"), "text", $.gm($.get($sc, "armyList"), 2));
      $.sm($.gm($r[1], "spearman"), "text", $.gm($.get($sc, "armyList"), 3));
      $.sm($.gm($r[1], "gunman"), "text", $.gm($.get($sc, "armyList"), 4));
      $.sm($.gm($r[1], "magician"), "text", $.gm($.get($sc, "armyList"), 5));
      $.def($sc, "i", 1);
      $b = 1; continue;
    case 1:
      if (!!$.gt($.get($sc, "i"), 5)) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      $.sm($.gm($r[1], $.add("res", $.get($sc, "i"))), "i", $.get($sc, "i"));
      $.sm($.gm($r[1], $.add("res", $.get($sc, "i"))), "onRollOver", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1;
    t1 = $.cf($sc, "tampilDesRes", [$.gm($.gm($.get($sc, "resList"), $.gm($r[1], "i")), $.get($sc, "bahasa"))]);
  }));
      $.sm($.gm($r[1], $.add("res", $.get($sc, "i"))), "onRollOut", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    var t1;
    t1 = $.cm($.get($sc, "des"), "removeMovieClip", []);
  }));
      $.sm($.gm($r[1], $.add("pas", $.get($sc, "i"))), "i", $.get($sc, "i"));
      $.sm($.gm($r[1], $.add("pas", $.get($sc, "i"))), "onRollOver", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1;
    t1 = $.cf($sc, "tampilDesRes", [$.gm($.gm($.get($sc, "pasList"), $.gm($r[1], "i")), $.get($sc, "bahasa"))]);
  }));
      $.sm($.gm($r[1], $.add("pas", $.get($sc, "i"))), "onRollOut", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    var t1;
    t1 = $.cm($.get($sc, "des"), "removeMovieClip", []);
  }));
      $.sm($.gm($r[1], $.add("we", $.get($sc, "i"))), "i", $.get($sc, "i"));
      $.sm($.gm($r[1], $.add("we", $.get($sc, "i"))), "onRollOver", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1;
    t1 = $.cf($sc, "tampilDesRes", [$.gm($.gm($.get($sc, "weList"), $.gm($r[1], "i")), $.get($sc, "bahasa"))]);
  }));
      $.sm($.gm($r[1], $.add("we", $.get($sc, "i"))), "onRollOut", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    var t1;
    t1 = $.cm($.get($sc, "des"), "removeMovieClip", []);
  }));
      $.set($sc, "i", ($.n($.get($sc, "i")) + 1));
      $b = 1; continue;
    case 3:
      $.sm($.gm($r[1], "resource"), "onRelease", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    t1 = $.cm($.get($sc, "main_resources"), "gotoAndStop", [1]);
    $.sm($r[1], "enabled", false);
    t2 = $.cm($r[1], "gotoAndStop", [2]);
  }));
      $.sm($.gm($r[1], "weapon"), "onRelease", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    t1 = $.cm($.get($sc, "main_resources"), "gotoAndStop", [2]);
    $.sm($r[1], "enabled", false);
    t2 = $.cm($r[1], "gotoAndStop", [2]);
  }));
      $.sm($.gm($r[1], "army"), "onRelease", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    t1 = $.cm($.get($sc, "main_resources"), "gotoAndStop", [3]);
    $.sm($r[1], "enabled", false);
    t2 = $.cm($r[1], "gotoAndStop", [2]);
  }));
      $b = 4; continue;
    case 4: return;
    }
  }));
    $.sm($.get($sc, "_root"), "onEnterFrame", $.fn({"n":"","p":[],"r":5,"f":106}, $sc, function($sc, $this, $args, $r) {
    var s0, en1, t1, t2, en2, t3, t4;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      en1 = $.enumerate($.get($sc, "objectMapAll"));
      s0 = en1;
      $b = 1; continue;
    case 1:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 6; continue; }
      $b = 2; continue;
    case 2:
      t1 = $r[0];
      $r[4] = t1;
      if (!!$.bool($.get($sc, "aktifTombol"))) { $b = 4; continue; }
      $b = 3; continue;
    case 3:
      $.sm($.gm($.gm($r[1], "map_general"), $.gm($.get($sc, "objectMapAll"), $r[4])), "enabled", false);
      $.sm($.gm($.gm($r[1], "bt_group"), $.gm($.get($sc, "objectMapAll"), $r[4])), "enabled", false);
      $.sm($.gm($r[1], "minimap"), "enabled", false);
      $.sm($.gm($r[1], "endturn_btn"), "enabled", false);
      $.sm($.gm($r[1], "menu_btn"), "enabled", false);
      $.sm($.gm($r[1], "strategy_btn"), "enabled", false);
      $b = 5; continue;
    case 4:
      $.sm($.gm($.gm($r[1], "map_general"), $.gm($.get($sc, "objectMapAll"), $r[4])), "enabled", true);
      $.sm($.gm($.gm($r[1], "bt_group"), $.gm($.get($sc, "objectMapAll"), $r[4])), "enabled", true);
      $.sm($.gm($r[1], "minimap"), "enabled", true);
      $.sm($.gm($r[1], "endturn_btn"), "enabled", true);
      $.sm($.gm($r[1], "menu_btn"), "enabled", true);
      $.sm($.gm($r[1], "strategy_btn"), "enabled", true);
      $b = 5; continue;
    case 5:
      $b = 1; continue;
    case 6:
      $.set($sc, "populationMax", 0);
      $r[2] = 1;
      $b = 7; continue;
    case 7:
      if (!!$.gt($r[2], 25)) { $b = 14; continue; }
      $b = 8; continue;
    case 8:
      en2 = $.enumerate($.gm($r[1], $.add("objectMap", $r[2])));
      s0 = en2;
      $b = 9; continue;
    case 9:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 13; continue; }
      $b = 10; continue;
    case 10:
      t4 = $r[0];
      $r[3] = t4;
      if (!!$.eq($.gm($.gm($.get($sc, "desList"), $.gm($.gm($.gm($r[1], $.add("objectMap", $r[2])), $r[3]), 2)), 5), undefined)) { $b = 12; continue; }
      $b = 11; continue;
    case 11:
      $.set($sc, "populationMax", $.add($.get($sc, "populationMax"), ($.n($.gm($.gm($.get($sc, "desList"), $.gm($.gm($.gm($r[1], $.add("objectMap", $r[2])), $r[3]), 2)), 5)) * $.n($.gm($.gm($.gm($r[1], $.add("objectMap", $r[2])), $r[3]), 0)))));
      $b = 12; continue;
    case 12:
      $b = 9; continue;
    case 13:
      t3 = ($.n($r[2]) + 1);
      $r[2] = t3;
      $b = 7; continue;
    case 14:
      t2 = $.cf($sc, "sumArray", [$.get($sc, "armyList")]);
      $.set($sc, "population", t2);
      $b = 15; continue;
    case 15: return;
    }
  }));
    t16 = $.nw($sc, "Array", []);
    $.def($sc, "dialogList", t16);
    $.sm($.get($sc, "dialogList"), 0, [0, ["Welcome to The Last Village. I am Aiyanna, I will guide you through this game.", "Bienvenue au Dernier Village. Je m’appelle Aiyanna, je vais vous guider dans ce jeu.", "Selamat datang di The Last Village"], ["In this game, you will defend your village from enemy invasion.", "Dans ce jeu, vous allez défendre votre village face à une invasion ennemie.", "di game ini, kamu harus berusaha mempertahankan desa kamu dari serangan musuh"], ["You can train 5 different armies to help you protect the village. Each army  is led by a commander who has a special ability.", "Vous pouvez entraîner 5 armées différentes pour vous aider à protéger le village. Chaque armée est menée par un chef qui a une capacité spéciale.", "kamu dapat melatih 5 jenis pasukan berbeda untuk membantu kamu mempertahankan desa, setiap pasukan dipimpin oleh seorang panglima"], ["At the top left corner you can see how many days you have kept the village unharmed. Every time you end your round, the number will increase by one.", "Dans le coin en haut à gauche vous pouvez voir le nombre de jours durant lequel vous avez protégé le village. A chaque fin de tour, ce nombre augmente de 1.", "di pojok kiri atas kamu dapat melihat penghitung hari selama permainan kamu, tiap kali kamu mengakhiri putaran, maka angka disitu akan bertambah banyak"], ["At the top center you can see your resources statistics, which consists of gold, food, iron, wood, and the population of your village. Do not forget to keep your resources stocked.", "En haut au centre vous pouvez voir les statistiques de vos ressources : or, nourriture, fer, bois, et population de votre village. N’oubliez pas de stocker des ressources.", "di bagian atas tengah kamu dapat melihat statistik sumber daya kamu, yang terdiri dari emas, makanan, besi, kayu, dan jumlah populasi, jangan lupa untuk selalu menjaga stock sumber daya kamu"], ["At the right you can switch to other statistics of  your weapons as well as troop count.", "A droite vous pouvez cliquer pour afficher d’autres statistiques concernant vos armes ou vos troupes.", "di bagian kanannya kamu dapat melihat statistik lainnya yaitu jumlah senjata, dan juga jumlah pasukan kamu"], ["At the top right is one of the most important parts of this game, the MiniMap.", "En haut à droite on trouve un des plus importants éléments du jeu : la mini-carte.", "di bagian kanan atas adalah salah satu bagian terpenting dalam game ini, yaitu minimap"], ["From here you can see the position of each commander and his troops, the enemy's attack direction, and the condition of buildings in your village.", "Vous pouvez y voir la position de chaque chef et de ses troupes, la localisation des attaques ennemies, et l’état des bâtiments de votre village.", "di minimap kamu dapat melihat posisi panglima beserta pasukannya, arah serangan musuh, dan juga kondisi bangunan desa kamu"], ["On the right is a list of buildings that can help you set up your defense.", "Sur la droite, une liste des bâtiments qui vous aideront à organiser votre défense.", "di panel sebelah kanan adalah daftar bangunan yang bisa kamu bangun untuk membantu pertahanan desa kamu"], ["You cannot build in just any place. If you are on the right spot, the icon in the panel will light up. That means you can build the object in that map.", "Vous ne pouvez pas construire n’importe quel bâtiment à n’importe quel endroit. Sur un secteur donné, les bâtiments que vous pouvez construire sont ceux dont les icônes sont allumées", "tidak semua bangunan bisa dibangun di sembarang tempat, jika kamu sudah berada di area yang tepat, ikon di panel tersebut akan menyala, itu artinya kamu bisa membangun bangunan tersebut di area itu"], ["Remember, every building's essential function is to help defend the village. Mouse over the building to find out its function.", "N’oubliez pas, la principale fonction de chaque bâtiment est de contribuer à la protection du village. Placez le pointeur de la souris sur un bâtiment pour connaître sa fonction exacte.", "Ingat, setiap bangunan mempunyai masing-masing fungsi yang sangat penting untuk membantu kamu mempertahankan desa ini, untuk mengetahui kegunaan bangunan itu kamu bisa menggerakkan kursor pada bangunan tersebut"], ["Some buildings can be upgraded to increase productivity. This affects the quality of these buildings' ability to defend the village.", "Certains bâtiments peuvent être améliorés pour augmenter leur efficacité. Cela permet d’accroître leur capacité à défendre le village.", "Beberapa bangunan juga bisa dikembangkan untuk meningkatkan produktifitasnya dan dapat mempengaruhi kualitas bangunan tersebut"], ["I guess that's all for now. Please try all the features, and defend our village as best you can.", "Je crois que c’est tout pour l’instant. Vous pouvez essayer toutes les fonctions du jeu, et faire de votre mieux pour défendre notre village.", "Mungkin itu saja yang perlu saya jelaskan untuk saat ini, pasti akan lebih cepat jika anda belajar dengan mencoba sendiri dan bereksperimen dengan fitur-fitur yang ada"], ["Good luck, hope to see you again ..", "Bonne chance, j’espère vous revoir bientôt...", "Saya akan menemuimu lagi nanti, semoga sukses.."]]);
    $.sm($.get($sc, "dialogList"), 1, [0, ["Welcome back soldier..", "Bon retour parmi nous, soldat...", "Selamat datang kembali.."], ["We have received some information about our last battle", "Nous avons reçu quelques informations sur ta dernière bataille.", "Kami telah menerima laporan pertempuran terakhir"]]);
    $.sm($.get($sc, "dialogList"), 2, [0, ["Watch out!! Our scout has detected some movement from the enemy’s army!", "Attention ! Notre éclaireur a détecté un mouvement de l’armée ennemie !", "Awas!! Mata-mata kita telah mendeteksi pergerakan dari musuh"], ["Prepare to defend our village, and be careful!", "Préparez-vous à défendre le village, et soyez prudent !", "Persiapkan pasikan kita dan berhati hati lah"]]);
    $.sm($.get($sc, "dialogList"), 3, [0, ["Not enough population for barracks production.", "Pas assez de population pour le fonctionnement des casernes.", "Tidak cukup populasi untuk produksi di barak"], ["Set up or upgrade more tents to support more population", "Installez plus de tentes ou améliorez-les pour permettre une augmentation de la population.", "Bangun atau upgrade tenda lagi untuk mensuport populasi"]]);
    $.sm($.get($sc, "dialogList"), 4, [0, ["Not enough resources", "Pas assez de ressources", "sumber daya tidak mencukupi"]]);
    $.sm($.get($sc, "dialogList"), 5, [0, ["This building has reached its maximum level", "Ce bâtiment a atteint son niveau maximal", "Bangunan ini telah mencapai level maksimal"]]);
    $.sm($.get($sc, "dialogList"), 6, [0, ["You are under attack for the first time!", "Vous êtes attaqué pour la première fois !", "Ini adalah pertama kali kamu diserang oleh pasukan musuh!!"], ["At the lower left corner, there is a notification to bookmark attacks every time our spies see the enemy coming.", "Dans le coin en bas à gauche, une note apparaîtra pour vous avertir chaque fois que nos espions verront l’ennemi arriver.", "Perhatikan pada pojok kiri bawah, disitu ada notifikasi untuk penanda serangan setiap kali mata-mata kita melihat datangnya musuh"], ["To prevent enemy forces from attacking the village center, you must move the commander and his troops to blockade the movements of the enemy.", "Pour empêcher l’ennemi d’attaquer le centre du village, vous devez déplacer le chef et ses troupes pour bloquer les mouvements adverses.", "Untuk mencegah pasukan musuh menyerang pusat desa, kamu harus menggerakkan panglima beserta pasukannya untuk memblokir pergerakan musuh"], ["Use at least 2 commanders and their troops to stop the enemy attack, because each troop has its own commander.", "Utilisez au moins 2 chefs avec leur troupes pour arrêter l’attaque ennemie, car chaque unité a son propre chef.", "Gunakan paling tidak 2 panglima beserta pasukannya untuk menghentikan serangan musuh, karena setiap pasukan diwakili oleh panglima masing2"], ["You can move the commanders and troops using the menu at the right, but the chief Wambeeska cannot leave the village center.", "Vous pouvez déplacer les chefs et leurs troupes en utilisant le menu à droite, mais le chef Wambleeska ne peut pas quitter le centre du village.", "Kamu dapat menggerakkan panglima dan pasukannya di menu strategy di panel bagian kanan, tapi Wambeeska sang kepala suku tidak dapat meninggalkan pusat desa"], ["Remember, sending more commanders and their troops to the war gives you more chances to win!", "Rappelez-vous : plus vous envoyez de chefs et de troupes au combat, plus vous augmentez vos chances de gagner la bataille !", "Ingat, semakin banyak panglima beserta pasukan yang kamu kirim untuk berperang, akan semakin besar kemungkinan untuk menang!"]]);
    $.sm($.get($sc, "dialogList"), 7, [0, ["Look!! There is a magical flower in this village!", "Regardez ! Il y a une fleur magique dans ce village !", "Lihat!! muncul bunga ajaib di desa ini!"], ["It is for making potions that strengthen our troops to resist the enemy attacks.", "Elle sera utile pour fabriquer des potions qui amélioreront la résistance de vos troupes face à l’ennemi.", "Bunga ajaib dapat digunakan untuk membuat ramuan obat yang menjadikan pasukan kita menjadi sangat kuat untuk melawan serangan pasukan musuh"], ["Unfortunately this flower is very rare and hard to find. If we are not careful enough, the flower will disappear and we will have to wait for it to appear again.", "Malheureusement cette fleur est très rare et difficile à trouver. Si nous ne prenons pas assez de précautions, la fleur disparaîtra et nous devrons attendre qu’elle réapparaisse.", "Namun sayangnya bunga ini sangat langka dan susah dicari, jika tidak hati2 maka bunga ini akan menghilang dan harus menunggu kemunculannya lagi"], ["Only the wizard Kachada can pick the flowers and make potions to strengthen the army.", "Seul le sorcier Kachada peut cueillir la fleur et fabriquer la potion pour renforcer notre armée.", "Oleh karena itu hanya KACHADA sang penyihir yang bisa mengambil bunga itu dan menjadikannya ramuan untuk memperkuat pasukan"], ["Once you get the magic potion, use it carefully. The effect only applies to one battle", "Quand vous aurez la potion magique, utilisez-la à bon escient. Elle n’aura d’effet que sur une bataille.", "Sekali kamu mendapatkan ramuan ajaibnya, gunakan dengan hati2, karena efek ramuan itu hanya berlaku untuk satu kali pertempuran"], ["Flowers appear for only 1 day, then they disappear. Move Kachada to take the flower through the strategy menu on the side panel", "Chaque fleur n’apparaît que pendant une journée, et disparaît ensuite. Déplacez Kachada pour cueillir la fleur à l’aide du menu “Stratégie” sur la droite de l’écran.", "Bunga itu hanya muncul 1 hari sebelum hilang lagi, gerakkan KACHADA untuk mengambil bunga tersebut melalui strategy menu di panel samping"]]);
    $.sm($.get($sc, "dialogList"), 8, [0, ["you have excedeed the limit of transaction for today", "Vous avez dépassé le nombre de transactions maximum pour la journée", "Kamu telah melebihi batas transaksi hari ini"], ["please end this turn to do the transaction again", "Mettez fin à ce tour pour pouvoir effectuer de nouvelles transactions", "Silakan akhiri turn ini untuk melakukan transaksi lagi"]]);
    t17 = $.cf($sc, "saveData", []);
    en1 = $.enumerate($.get($sc, "armyList"));
    s0 = en1;
    $b = 12; continue;
  case 12:
    $r[0] = s0.shift();
    if ($r[0] === null) { $b = 16; continue; }
    $b = 13; continue;
  case 13:
    $.def($sc, "m", $r[0]);
    if (!$.lt($.gm($.get($sc, "armyList"), $.get($sc, "m")), 0)) { $b = 15; continue; }
    $b = 14; continue;
  case 14:
    $.sm($.get($sc, "armyList"), $.get($sc, "m"), 0);
    $b = 15; continue;
  case 15:
    $b = 12; continue;
  case 16:
    $.sm($.get($sc, "dialogBar"), "_visible", false);
    if (!$.eq($.get($sc, "days"), 1)) { $b = 18; continue; }
    $b = 17; continue;
  case 17:
    t19 = $.cf($sc, "tampilDialog", [0]);
    $b = 22; continue;
  case 18:
    if (!!$.bool($.get($sc, "tampilWarning"))) { $b = 22; continue; }
    $b = 19; continue;
  case 19:
    if (!$.bool($.get($sc, "habisPerang"))) { $b = 21; continue; }
    $b = 20; continue;
  case 20:
    t23 = $.cf($sc, "tampilDialog", [1]);
    $.set($sc, "habisPerang", false);
    $b = 22; continue;
  case 21:
    $.sm($.get($sc, "dialogBar"), "_visible", false);
    $.set($sc, "aktifTombol", true);
    $b = 22; continue;
  case 22:
    t20 = $.nw($sc, "Object", []);
    $.set($sc, "keyListener", t20);
    $.sm($.get($sc, "keyListener"), "onKeyDown", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5, t6, t7, t8, t9;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      t1 = $.cm($.get($sc, "des"), "removeMovieClip", []);
      if (!$.bool($.get($sc, "aktifTombol"))) { $b = 14; continue; }
      $b = 1; continue;
    case 1:
      if (!(($.n($.get($sc, "map")) - 5) > 0)) { $b = 4; continue; }
      $b = 2; continue;
    case 2:
      t2 = $.cm($.get($sc, "Key"), "isDown", [38]);
      if (!$.bool(t2)) { $b = 4; continue; }
      $b = 3; continue;
    case 3:
      $.set($sc, "map", ($.n($.get($sc, "map")) - 5));
      t4 = $.cf($sc, "gantiPeta", []);
      $b = 4; continue;
    case 4:
      if (!!$.gt($.add($.get($sc, "map"), 5), 25)) { $b = 7; continue; }
      $b = 5; continue;
    case 5:
      t3 = $.cm($.get($sc, "Key"), "isDown", [40]);
      if (!$.bool(t3)) { $b = 7; continue; }
      $b = 6; continue;
    case 6:
      $.set($sc, "map", $.add($.get($sc, "map"), 5));
      t6 = $.cf($sc, "gantiPeta", []);
      $b = 7; continue;
    case 7:
      if (!!$.eq(($.n($.get($sc, "map")) % 5), 0)) { $b = 10; continue; }
      $b = 8; continue;
    case 8:
      t5 = $.cm($.get($sc, "Key"), "isDown", [39]);
      if (!$.bool(t5)) { $b = 10; continue; }
      $b = 9; continue;
    case 9:
      $.set($sc, "map", $.add($.get($sc, "map"), 1));
      t8 = $.cf($sc, "gantiPeta", []);
      $b = 10; continue;
    case 10:
      if (!!$.eq(($.n($.get($sc, "map")) % 5), 1)) { $b = 14; continue; }
      $b = 11; continue;
    case 11:
      t7 = $.cm($.get($sc, "Key"), "isDown", [37]);
      if (!$.bool(t7)) { $b = 14; continue; }
      $b = 12; continue;
    case 12:
      $.set($sc, "map", ($.n($.get($sc, "map")) - 1));
      t9 = $.cf($sc, "gantiPeta", []);
      $b = 14; continue;
    case 14: return;
    }
  }));
    t21 = $.cm($.get($sc, "Key"), "addListener", [$.get($sc, "keyListener")]);
    t22 = $.cf($sc, "gantiPeta", []);
    $b = 23; continue;
  case 23: return;
  }
};
// main#f10.0
S[266] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var s0, s1, t1, t2, t3, t4, t5, t6, t7, t8, en1, t9, en2, t10, en3, t11, en4, t12, en5, t13, en6, t14, t15, t16, t17, en7, t18, t19, en8, t20, t21, t22, t23, t24, t25, t26, t27, t28, t29, t30, t31, t32, t33, t34, t35, t36, t37, t38, t39, t40, t41, t42, t43, t44, en9, en10, t45, en11, t46, en12, en13, t47, t48, t49, t50, t51, t52, t53, t54, t55, t56, en14, t57, t58, t59, t60, t61, t62, t63, t64, t65, t66, t67, t68, t69, t70, t71, t72, t73, t74;
  var $b = 0;
  for (;;) switch ($b) {
  case 0:
    $.def($sc, "heal", $.fn({"n":"heal","p":[[0,"who"]],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!!$.bool($.gm($.get($sc, "who"), "isHealed"))) { $b = 3; continue; }
      $b = 1; continue;
    case 1:
      t1 = $.cm($r[1], "getNextHighestDepth", []);
      t2 = $.cm($.get($sc, "who"), "attachMovie", ["mc_heal", "heal", t1]);
      $.sm($.gm($.get($sc, "who"), "heal"), "timer", 100);
      $.sm($.gm($.get($sc, "who"), "heal"), "_alpha", 0);
      $.sm($.gm($.get($sc, "who"), "heal"), "cacheAsBitmap", true);
      $.sm($.gm($.get($sc, "who"), "heal"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!$.lt($.gm($.get($sc, "who"), "life"), $.gm($.get($sc, "who"), "lifeAwal"))) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      $.sm($.get($sc, "who"), "life", $.add($.gm($.get($sc, "who"), "life"), ($.n($.gm($.get($sc, "who"), "lifeAwal")) / 50)));
      $b = 2; continue;
    case 2:
      $.sm($r[1], "timer", ($.n($.gm($r[1], "timer")) - 1));
      if (!!$.gt($.gm($r[1], "timer"), 0)) { $b = 6; continue; }
      $b = 3; continue;
    case 3:
      $.sm($r[1], "timer", 0);
      $.sm($r[1], "_alpha", ($.n($.gm($r[1], "_alpha")) - 2));
      if (!!$.gt($.gm($r[1], "_alpha"), 0)) { $b = 5; continue; }
      $b = 4; continue;
    case 4:
      $.sm($.get($sc, "who"), "isHealed", false);
      $.set($sc, "isSpecial", false);
      t2 = $.cm($r[1], "removeMovieClip", []);
      $b = 5; continue;
    case 5:
      $b = 8; continue;
    case 6:
      t1 = $.cf($sc, "efekFade", [$r[1]]);
      $b = 8; continue;
    case 8: return;
    }
  }));
      $.sm($.get($sc, "who"), "isHealed", true);
      $b = 3; continue;
    case 3: return;
    }
  }));
    $.def($sc, "healingSpring", $.fn({"n":"healingSpring","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    var s0, en1, en2, t1, en3, t2, en4, t3, en5, t4, t5;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      en1 = $.enumerate($.gm($.get($sc, "battle_mc"), "swordmanList"));
      s0 = en1;
      $b = 1; continue;
    case 1:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      $.set($sc, "index", $r[0]);
      t1 = $.cf($sc, "heal", [$.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "swordmanList"), $.get($sc, "index")))]);
      $b = 1; continue;
    case 3:
      en2 = $.enumerate($.gm($.get($sc, "battle_mc"), "spearmanList"));
      s0 = en2;
      $b = 4; continue;
    case 4:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 6; continue; }
      $b = 5; continue;
    case 5:
      $.set($sc, "index", $r[0]);
      t2 = $.cf($sc, "heal", [$.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "spearmanList"), $.get($sc, "index")))]);
      $b = 4; continue;
    case 6:
      en3 = $.enumerate($.gm($.get($sc, "battle_mc"), "horsearcherList"));
      s0 = en3;
      $b = 7; continue;
    case 7:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 9; continue; }
      $b = 8; continue;
    case 8:
      $.set($sc, "index", $r[0]);
      t3 = $.cf($sc, "heal", [$.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "horsearcherList"), $.get($sc, "index")))]);
      $b = 7; continue;
    case 9:
      en4 = $.enumerate($.gm($.get($sc, "battle_mc"), "gunmanList"));
      s0 = en4;
      $b = 10; continue;
    case 10:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 12; continue; }
      $b = 11; continue;
    case 11:
      $.set($sc, "index", $r[0]);
      t4 = $.cf($sc, "heal", [$.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "gunmanList"), $.get($sc, "index")))]);
      $b = 10; continue;
    case 12:
      en5 = $.enumerate($.gm($.get($sc, "battle_mc"), "magicianList"));
      s0 = en5;
      $b = 13; continue;
    case 13:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 16; continue; }
      $b = 14; continue;
    case 14:
      $.set($sc, "index", $r[0]);
      t5 = $.cf($sc, "heal", [$.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "magicianList"), $.get($sc, "index")))]);
      $b = 13; continue;
    case 16: return;
    }
  }));
    $.def($sc, "rage", $.fn({"n":"rage","p":[[0,"who"]],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!!$.bool($.gm($.get($sc, "who"), "isRage"))) { $b = 3; continue; }
      $b = 1; continue;
    case 1:
      $.sm($.get($sc, "who"), "att", ($.n($.gm($.get($sc, "who"), "att")) * 5));
      $.sm($.get($sc, "who"), "spd", ($.n($.gm($.get($sc, "who"), "spd")) * 1.5));
      t1 = $.cm($r[1], "getNextHighestDepth", []);
      t2 = $.cm($.get($sc, "who"), "attachMovie", ["mc_rage", "rage", t1]);
      $.sm($.gm($.get($sc, "who"), "rage"), "timer", 500);
      $.sm($.gm($.get($sc, "who"), "rage"), "_alpha", 0);
      $.sm($.gm($.get($sc, "who"), "rage"), "cacheAsBitmap", true);
      $.sm($.gm($.get($sc, "who"), "rage"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.sm($r[1], "timer", ($.n($.gm($r[1], "timer")) - 1));
      if (!!$.gt($.gm($r[1], "timer"), 0)) { $b = 4; continue; }
      $b = 1; continue;
    case 1:
      $.sm($r[1], "timer", 0);
      $.sm($r[1], "_alpha", ($.n($.gm($r[1], "_alpha")) - 2));
      if (!!$.gt($.gm($r[1], "_alpha"), 0)) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      $.sm($.get($sc, "who"), "isRage", false);
      $.sm($.get($sc, "who"), "att", ($.n($.gm($.get($sc, "who"), "att")) / 5));
      $.sm($.get($sc, "who"), "spd", ($.n($.gm($.get($sc, "who"), "spd")) / 1.5));
      $.set($sc, "isSpecial", false);
      t2 = $.cm($r[1], "removeMovieClip", []);
      $b = 3; continue;
    case 3:
      $b = 6; continue;
    case 4:
      t1 = $.cf($sc, "efekFade", [$r[1]]);
      $b = 6; continue;
    case 6: return;
    }
  }));
      $.sm($.get($sc, "who"), "isRage", true);
      $b = 3; continue;
    case 3: return;
    }
  }));
    $.def($sc, "rageStorm", $.fn({"n":"rageStorm","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    var s0, en1, en2, t1, en3, t2, en4, t3, en5, t4, t5;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      en1 = $.enumerate($.gm($.get($sc, "battle_mc"), "swordmanList"));
      s0 = en1;
      $b = 1; continue;
    case 1:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      $.set($sc, "index", $r[0]);
      t1 = $.cf($sc, "rage", [$.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "swordmanList"), $.get($sc, "index")))]);
      $b = 1; continue;
    case 3:
      en2 = $.enumerate($.gm($.get($sc, "battle_mc"), "spearmanList"));
      s0 = en2;
      $b = 4; continue;
    case 4:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 6; continue; }
      $b = 5; continue;
    case 5:
      $.set($sc, "index", $r[0]);
      t2 = $.cf($sc, "rage", [$.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "spearmanList"), $.get($sc, "index")))]);
      $b = 4; continue;
    case 6:
      en3 = $.enumerate($.gm($.get($sc, "battle_mc"), "horsearcherList"));
      s0 = en3;
      $b = 7; continue;
    case 7:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 9; continue; }
      $b = 8; continue;
    case 8:
      $.set($sc, "index", $r[0]);
      t3 = $.cf($sc, "rage", [$.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "horsearcherList"), $.get($sc, "index")))]);
      $b = 7; continue;
    case 9:
      en4 = $.enumerate($.gm($.get($sc, "battle_mc"), "gunmanList"));
      s0 = en4;
      $b = 10; continue;
    case 10:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 12; continue; }
      $b = 11; continue;
    case 11:
      $.set($sc, "index", $r[0]);
      t4 = $.cf($sc, "rage", [$.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "gunmanList"), $.get($sc, "index")))]);
      $b = 10; continue;
    case 12:
      en5 = $.enumerate($.gm($.get($sc, "battle_mc"), "magicianList"));
      s0 = en5;
      $b = 13; continue;
    case 13:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 16; continue; }
      $b = 14; continue;
    case 14:
      $.set($sc, "index", $r[0]);
      t5 = $.cf($sc, "rage", [$.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "magicianList"), $.get($sc, "index")))]);
      $b = 13; continue;
    case 16: return;
    }
  }));
    $.def($sc, "earthQuake", $.fn({"n":"earthQuake","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    $.set($sc, "special", true);
    $.set($sc, "battle_mcAwalY", $.gm($.get($sc, "battle_mc"), "_y"));
    $.set($sc, "battlebg_mcAwalX", $.gm($.get($sc, "battlebg_mc"), "_x"));
    $.set($sc, "semak_mcAwalX", $.gm($.get($sc, "semak_mc"), "_x"));
    t1 = $.cm($r[1], "getNextHighestDepth", []);
    t2 = $.cm($.get($sc, "battle_mc"), "createEmptyMovieClip", ["gempa", t1]);
    $.sm($.gm($.get($sc, "battle_mc"), "gempa"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, t2, t3, t4, t5, t6, t7, t8, t9, en1, t10, t11, t12;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!$.eq($.gm($r[1], "count"), undefined)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      $.sm($r[1], "count", 0);
      $b = 2; continue;
    case 2:
      $.sm($r[1], "count", ($.n($.gm($r[1], "count")) + 1));
      if (!$.eq(($.n($.gm($r[1], "count")) % 2), 1)) { $b = 4; continue; }
      $b = 3; continue;
    case 3:
      t1 = $.get($sc, "battle_mc");
      t2 = $.gm($.get($sc, "battle_mc"), "_y");
      t3 = $.rand(11);
      $.sm(t1, "_y", $.add(t2, ((-5) + t3)));
      t4 = $.get($sc, "battlebg_mc");
      t5 = $.gm($.get($sc, "battlebg_mc"), "_x");
      t6 = $.rand(7);
      $.sm(t4, "_x", $.add(t5, ((-3) + t6)));
      t7 = $.get($sc, "semak_mc");
      t8 = $.gm($.get($sc, "semak_mc"), "_x");
      t9 = $.rand(14);
      $.sm(t7, "_x", $.add(t8, ((-6) + t9)));
      $b = 5; continue;
    case 4:
      $.sm($.get($sc, "battle_mc"), "_y", $.get($sc, "battle_mcAwalY"));
      $.sm($.get($sc, "battlebg_mc"), "_x", $.get($sc, "battlebg_mcAwalX"));
      $.sm($.get($sc, "semak_mc"), "_x", $.get($sc, "semak_mcAwalX"));
      $b = 5; continue;
    case 5:
      en1 = $.enumerate($.gm($.get($sc, "battle_mc"), "enemyObjList"));
      s0 = en1;
      $b = 6; continue;
    case 6:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 11; continue; }
      $b = 7; continue;
    case 7:
      $.set($sc, "index", $r[0]);
      if (!(($.n($.gm($.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "enemyObjList"), $.get($sc, "index"))), "life")) - 0.2) > 0)) { $b = 9; continue; }
      $b = 8; continue;
    case 8:
      $.sm($.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "enemyObjList"), $.get($sc, "index"))), "life", ($.n($.gm($.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "enemyObjList"), $.get($sc, "index"))), "life")) - 0.2));
      $b = 10; continue;
    case 9:
      $.sm($.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "enemyObjList"), $.get($sc, "index"))), "v", 0);
      t12 = $.cm($.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "enemyObjList"), $.get($sc, "index"))), "gotoAndStop", ["dead"]);
      $b = 10; continue;
    case 10:
      $b = 6; continue;
    case 11:
      if (!!$.lt($.gm($r[1], "count"), 200)) { $b = 14; continue; }
      $b = 12; continue;
    case 12:
      $.sm($.get($sc, "battle_mc"), "_y", $.get($sc, "battle_mcAwalY"));
      $.sm($.get($sc, "battlebg_mc"), "_x", $.get($sc, "battlebg_mcAwalX"));
      $.sm($.get($sc, "semak_mc"), "_x", $.get($sc, "semak_mcAwalX"));
      t10 = $.delMember($.gm($.get($sc, "battle_mc"), "gempa"), "onEnterFrame");
      $.set($sc, "isSpecial", false);
      t11 = $.cm($.gm($.get($sc, "battle_mc"), "gempa"), "removeMovieClip", []);
      $.sm($r[1], "count", 0);
      $.set($sc, "special", false);
      $b = 14; continue;
    case 14: return;
    }
  }));
  }));
    $.def($sc, "rainArrow", $.fn({"n":"rainArrow","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    t1 = $.cm($r[1], "getNextHighestDepth", []);
    t2 = $.cm($.get($sc, "battle_mc"), "createEmptyMovieClip", ["rainArrow", t1]);
    $.sm($.gm($.get($sc, "battle_mc"), "rainArrow"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5, t6, t7;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!!$.bool($.get($sc, "isPaused"))) { $b = 6; continue; }
      $b = 1; continue;
    case 1:
      if (!$.eq($.get($sc, "count"), undefined)) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      $.set($sc, "count", 0);
      $b = 3; continue;
    case 3:
      $.set($sc, "count", ($.n($.get($sc, "count")) + 1));
      $.set($sc, "arrowIndexName", $.add("arrowIndex", $.get($sc, "count")));
      t1 = $.cm($.get($sc, "battle_mc"), "attachMovie", ["mc_arrow2", $.get($sc, "arrowIndexName"), $.add($.get($sc, "count"), 3000)]);
      t2 = $.gm($.get($sc, "battle_mc"), $.get($sc, "arrowIndexName"));
      t3 = $.rand($.gm($.get($sc, "battle_mc"), "_width"));
      $.sm(t2, "_x", ((-400) + t3));
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "arrowIndexName")), "_y", 0);
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "arrowIndexName")), "_rotation", 45);
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "arrowIndexName")), "spd", 45);
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "arrowIndexName")), "att", 25);
      t4 = $.gm($.get($sc, "battle_mc"), $.get($sc, "arrowIndexName"));
      t5 = $.rand(50);
      $.sm(t4, "batasY", (380 + t5));
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "arrowIndexName")), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var s0, en1, t1, t2, t3, t4, t5, t6, t7, t8, t9;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!!$.bool($.get($sc, "isPaused"))) { $b = 15; continue; }
      $b = 1; continue;
    case 1:
      $.sm($r[1], "_y", $.add($.gm($r[1], "_y"), $.gm($r[1], "spd")));
      $.sm($r[1], "_x", $.add($.gm($r[1], "_x"), $.gm($r[1], "spd")));
      en1 = $.enumerate($.gm($.get($sc, "battle_mc"), "enemyObjList"));
      s0 = en1;
      $b = 2; continue;
    case 2:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 12; continue; }
      $b = 3; continue;
    case 3:
      $.set($sc, "index", $r[0]);
      t1 = $.cm($r[1], "hitTest", [$.gm($.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "enemyObjList"), $.get($sc, "index"))), "area")]);
      if (!$.bool(t1)) { $b = 11; continue; }
      $b = 4; continue;
    case 4:
      $.sm($r[1], "damage", ($.n($.gm($r[1], "att")) - $.n($.gm($.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "enemyObjList"), $.get($sc, "index"))), "def"))));
      t6 = $.cf($sc, "bloodEffect", [$.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "enemyObjList"), $.get($sc, "index")))]);
      if (!(($.n($.gm($.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "enemyObjList"), $.get($sc, "index"))), "life")) - $.n($.gm($r[1], "damage"))) > 0)) { $b = 9; continue; }
      $b = 5; continue;
    case 5:
      if (!$.gt($.gm($r[1], "att"), 0)) { $b = 7; continue; }
      $b = 6; continue;
    case 6:
      $.sm($.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "enemyObjList"), $.get($sc, "index"))), "life", ($.n($.gm($.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "enemyObjList"), $.get($sc, "index"))), "life")) - $.n($.gm($r[1], "damage"))));
      $b = 8; continue;
    case 7:
      $.sm($.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "enemyObjList"), $.get($sc, "index"))), "life", ($.n($.gm($.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "enemyObjList"), $.get($sc, "index"))), "life")) - 1));
      $b = 8; continue;
    case 8:
      $b = 10; continue;
    case 9:
      $.sm($.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "enemyObjList"), $.get($sc, "index"))), "v", 0);
      t7 = $.cm($.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "enemyObjList"), $.get($sc, "index"))), "gotoAndStop", ["dead"]);
      t8 = $.delMember($.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "enemyObjList"), $.get($sc, "index"))), "onEnterFrame");
      $b = 10; continue;
    case 10:
      t9 = $.cm($r[1], "removeMovieClip", []);
      $b = 11; continue;
    case 11:
      $b = 2; continue;
    case 12:
      if (!$.gt($.gm($r[1], "_y"), $.gm($r[1], "batasY"))) { $b = 15; continue; }
      $b = 13; continue;
    case 13:
      t2 = $.cm($r[1], "gotoAndStop", [2]);
      t3 = $.delMember($r[1], "onEnterFrame");
      t4 = $r[1];
      t5 = $.cf($sc, "setInterval", [$.get($sc, "hapusObject"), 1000, $r[1]]);
      $.sm(t4, "hapus", t5);
      $b = 15; continue;
    case 15: return;
    }
  }));
      if (!!$.lt($.get($sc, "count"), 300)) { $b = 6; continue; }
      $b = 4; continue;
    case 4:
      t6 = $.delMember($.gm($.get($sc, "battle_mc"), "rainArrow"), "onEnterFrame");
      $.set($sc, "isSpecial", false);
      t7 = $.cm($.gm($.get($sc, "battle_mc"), "rainArrow"), "removeMovieClip", []);
      $.set($sc, "count", 0);
      $b = 6; continue;
    case 6: return;
    }
  }));
  }));
    $.def($sc, "explosionEffect", $.fn({"n":"explosionEffect","p":[[2,"who"]],"r":3,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3;
    t1 = $.cf($sc, "soundFX", ["gun3"]);
    t2 = $.cm($r[1], "getNextHighestDepth", []);
    t3 = $.cm($r[2], "attachMovie", ["mc_explosion", "explosion", t2]);
    $.sm($.gm($r[2], "explosion"), "_y", (0 - ($.n($.gm($r[2], "_height")) / 2)));
  }));
    $.def($sc, "explodingFrenzy", $.fn({"n":"explodingFrenzy","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    var s0, en1, t1, t2, t3;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      en1 = $.enumerate($.gm($.get($sc, "battle_mc"), "enemyObjList"));
      s0 = en1;
      $b = 1; continue;
    case 1:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 7; continue; }
      $b = 2; continue;
    case 2:
      $.set($sc, "index", $r[0]);
      t1 = $.cf($sc, "explosionEffect", [$.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "enemyObjList"), $.get($sc, "index")))]);
      $.sm($.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "enemyObjList"), $.get($sc, "index"))), "life", ($.n($.gm($.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "enemyObjList"), $.get($sc, "index"))), "life")) - 100));
      if (!$.gt($.gm($.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "enemyObjList"), $.get($sc, "index"))), "life"), 0)) { $b = 4; continue; }
      $b = 3; continue;
    case 3:
      $.sm($.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "enemyObjList"), $.get($sc, "index"))), "life", ($.n($.gm($.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "enemyObjList"), $.get($sc, "index"))), "life")) - 20));
      $b = 5; continue;
    case 4:
      $.sm($.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "enemyObjList"), $.get($sc, "index"))), "v", 0);
      t2 = $.cm($.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "enemyObjList"), $.get($sc, "index"))), "gotoAndStop", ["dead"]);
      $.set($sc, "isSpecial", false);
      t3 = $.delMember($.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "enemyObjList"), $.get($sc, "index"))), "onEnterFrame");
      $b = 5; continue;
    case 5:
      $b = 1; continue;
    case 7: return;
    }
  }));
    $.def($sc, "counter", $.fn({"n":"counter","p":[[1,"max"]],"r":2,"f":42}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!!$.lt($.get($sc, "penghitungTimer"), $r[1])) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t1 = $.cf($sc, "clearInterval", [$.get($sc, "jurusAktif")]);
      t2 = $.cf($sc, "clearInterval", [$.get($sc, "mulaiHitungJurus")]);
      $.set($sc, "penghitungTimer", 0);
      $b = 4; continue;
    case 2:
      $.set($sc, "penghitungTimer", ($.n($.get($sc, "penghitungTimer")) + 1));
      $b = 4; continue;
    case 4: return;
    }
  }));
    $.def($sc, "hapusObject", $.fn({"n":"hapusObject","p":[[1,"who"]],"r":2,"f":42}, $sc, function($sc, $this, $args, $r) {
    var t1;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!$.eq($.gm($r[1], "penghitungTimer"), undefined)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      $.sm($r[1], "penghitungTimer", 5);
      $b = 2; continue;
    case 2:
      $.sm($r[1], "penghitungTimer", ($.n($.gm($r[1], "penghitungTimer")) - 1));
      if (!!$.gt($.gm($r[1], "penghitungTimer"), 0)) { $b = 5; continue; }
      $b = 3; continue;
    case 3:
      t1 = $.cm($r[1], "removeMovieClip", []);
      $b = 5; continue;
    case 5: return;
    }
  }));
    $.def($sc, "smokeEffect", $.fn({"n":"smokeEffect","p":[[3,"who"]],"r":4,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $r[2] = 1;
      $b = 1; continue;
    case 1:
      t1 = $r[2];
      t2 = $.rand(3);
      if (!!$.gt(t1, (1 + t2))) { $b = 4; continue; }
      $b = 2; continue;
    case 2:
      $.sm($.get($sc, "battle_mc"), "depthObj", $.add($.gm($.get($sc, "battle_mc"), "depthObj"), 1));
      t3 = $.cm($r[3], "getDepth", []);
      t4 = $.add($.add(t3, $.gm($.get($sc, "battle_mc"), "depthObj")), (5000 * $.n($.gm($r[3], "posY"))));
      t5 = $.add("smoke", $.gm($.get($sc, "battle_mc"), "depthObj"));
      t6 = $.rand(4);
      t7 = $.cm($.get($sc, "battle_mc"), "attachMovie", [$.add("smoke_mc", (1 + t6)), t5, t4]);
      $.sm($.gm($.get($sc, "battle_mc"), $.add("smoke", $.gm($.get($sc, "battle_mc"), "depthObj"))), "skala", 10);
      $.sm($.gm($.get($sc, "battle_mc"), $.add("smoke", $.gm($.get($sc, "battle_mc"), "depthObj"))), "_xscale", $.gm($.gm($.get($sc, "battle_mc"), $.add("smoke", $.gm($.get($sc, "battle_mc"), "depthObj"))), "skala"));
      $.sm($.gm($.get($sc, "battle_mc"), $.add("smoke", $.gm($.get($sc, "battle_mc"), "depthObj"))), "_yscale", $.gm($.gm($.get($sc, "battle_mc"), $.add("smoke", $.gm($.get($sc, "battle_mc"), "depthObj"))), "skala"));
      $.sm($.gm($.get($sc, "battle_mc"), $.add("smoke", $.gm($.get($sc, "battle_mc"), "depthObj"))), "_x", $.gm($r[3], "frontX"));
      $.sm($.gm($.get($sc, "battle_mc"), $.add("smoke", $.gm($.get($sc, "battle_mc"), "depthObj"))), "_y", $.gm($r[3], "frontY"));
      $.sm($.gm($.get($sc, "battle_mc"), $.add("smoke", $.gm($.get($sc, "battle_mc"), "depthObj"))), "posY", $.gm($.gm($.get($sc, "battle_mc"), $.add("smoke", $.gm($.get($sc, "battle_mc"), "depthObj"))), "_y"));
      t8 = $.gm($.get($sc, "battle_mc"), $.add("smoke", $.gm($.get($sc, "battle_mc"), "depthObj")));
      t9 = $.rand(2);
      $.sm(t8, "vel", (1 + t9));
      t10 = $.gm($.get($sc, "battle_mc"), $.add("smoke", $.gm($.get($sc, "battle_mc"), "depthObj")));
      t11 = $.rand(5);
      $.sm(t10, "velX", ((-2) + t11));
      $.sm($.gm($.get($sc, "battle_mc"), $.add("smoke", $.gm($.get($sc, "battle_mc"), "depthObj"))), "cacheAsBitmap", true);
      $.sm($.gm($.get($sc, "battle_mc"), $.add("smoke", $.gm($.get($sc, "battle_mc"), "depthObj"))), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!!$.bool($.get($sc, "isPaused"))) { $b = 4; continue; }
      $b = 1; continue;
    case 1:
      $.sm($r[1], "_x", $.add($.gm($r[1], "_x"), ($.n($.gm($r[1], "v")) * $.n($.get($sc, "gameSpeed")))));
      $.sm($r[1], "_y", ($.n($.gm($r[1], "_y")) - $.n($.gm($r[1], "vel"))));
      $.sm($r[1], "_xscale", $.add($.gm($r[1], "_xscale"), 1));
      $.sm($r[1], "_yscale", $.add($.gm($r[1], "_yscale"), 1));
      $.sm($r[1], "_alpha", ($.n($.gm($r[1], "_alpha")) - 3));
      if (!$.lt($.gm($r[1], "_alpha"), 0)) { $b = 4; continue; }
      $b = 2; continue;
    case 2:
      t1 = $.cm($r[1], "removeMovieClip", []);
      $b = 4; continue;
    case 4: return;
    }
  }));
      t12 = ($.n($r[2]) + 1);
      $r[2] = t12;
      $b = 1; continue;
    case 4: return;
    }
  }));
    $.def($sc, "bloodEffect", $.fn({"n":"bloodEffect","p":[[3,"who"]],"r":4,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $r[2] = 1;
      $b = 1; continue;
    case 1:
      t1 = $r[2];
      t2 = $.rand(3);
      if (!!$.gt(t1, (1 + t2))) { $b = 4; continue; }
      $b = 2; continue;
    case 2:
      $.sm($.get($sc, "battle_mc"), "depthObj", $.add($.gm($.get($sc, "battle_mc"), "depthObj"), 1));
      t3 = $.cm($.get($sc, "battle_mc"), "attachMovie", ["blood_mc", $.add("blood", $.gm($.get($sc, "battle_mc"), "depthObj")), $.add($.gm($.get($sc, "battle_mc"), "depthObj"), (5000 * $.n($.gm($r[3], "posY"))))]);
      $.sm($.gm($.get($sc, "battle_mc"), $.add("blood", $.gm($.get($sc, "battle_mc"), "depthObj"))), "_xscale", $.gm($.gm($.get($sc, "battle_mc"), $.add("blood", $.gm($.get($sc, "battle_mc"), "depthObj"))), "skala"));
      $.sm($.gm($.get($sc, "battle_mc"), $.add("blood", $.gm($.get($sc, "battle_mc"), "depthObj"))), "_yscale", $.gm($.gm($.get($sc, "battle_mc"), $.add("blood", $.gm($.get($sc, "battle_mc"), "depthObj"))), "skala"));
      $.sm($.gm($.get($sc, "battle_mc"), $.add("blood", $.gm($.get($sc, "battle_mc"), "depthObj"))), "_x", $.gm($r[3], "_x"));
      $.sm($.gm($.get($sc, "battle_mc"), $.add("blood", $.gm($.get($sc, "battle_mc"), "depthObj"))), "_y", ($.n($.gm($r[3], "_y")) - 50));
      $.sm($.gm($.get($sc, "battle_mc"), $.add("blood", $.gm($.get($sc, "battle_mc"), "depthObj"))), "posY", $.gm($.gm($.get($sc, "battle_mc"), $.add("blood", $.gm($.get($sc, "battle_mc"), "depthObj"))), "_y"));
      t4 = $.gm($.get($sc, "battle_mc"), $.add("blood", $.gm($.get($sc, "battle_mc"), "depthObj")));
      t5 = $.rand(3);
      $.sm(t4, "vel", (3 + t5));
      t6 = $.gm($.get($sc, "battle_mc"), $.add("blood", $.gm($.get($sc, "battle_mc"), "depthObj")));
      t7 = $.rand(6);
      $.sm(t6, "velX", ((-3) + t7));
      t8 = $.gm($.get($sc, "battle_mc"), $.add("blood", $.gm($.get($sc, "battle_mc"), "depthObj")));
      t9 = $.rand(2);
      $.sm(t8, "rot", (3 + t9));
      t10 = $.gm($.get($sc, "battle_mc"), $.add("blood", $.gm($.get($sc, "battle_mc"), "depthObj")));
      t11 = $.rand(50);
      $.sm(t10, "skala", (30 + t11));
      $.sm($.gm($.get($sc, "battle_mc"), $.add("blood", $.gm($.get($sc, "battle_mc"), "depthObj"))), "cacheAsBitmap", true);
      $.sm($.gm($.get($sc, "battle_mc"), $.add("blood", $.gm($.get($sc, "battle_mc"), "depthObj"))), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!!$.bool($.get($sc, "isPaused"))) { $b = 4; continue; }
      $b = 1; continue;
    case 1:
      $.sm($r[1], "vel", ($.n($.gm($r[1], "vel")) - 0.3));
      $.sm($r[1], "_x", $.add($.gm($r[1], "_x"), ($.n($.gm($r[1], "v")) * $.n($.get($sc, "gameSpeed")))));
      $.sm($r[1], "_y", ($.n($.gm($r[1], "_y")) - $.n($.gm($r[1], "vel"))));
      $.sm($r[1], "_rotation", $.add($.gm($r[1], "_rotation"), $.gm($r[1], "rot")));
      $.sm($r[1], "_xscale", $.add($.gm($r[1], "_xscale"), 5));
      $.sm($r[1], "_yscale", $.add($.gm($r[1], "_yscale"), 9));
      $.sm($r[1], "_alpha", ($.n($.gm($r[1], "_alpha")) - 3));
      if (!$.lt($.gm($r[1], "_alpha"), 0)) { $b = 4; continue; }
      $b = 2; continue;
    case 2:
      t1 = $.cm($r[1], "removeMovieClip", []);
      $b = 4; continue;
    case 4: return;
    }
  }));
      t12 = ($.n($r[2]) + 1);
      $r[2] = t12;
      $b = 1; continue;
    case 4: return;
    }
  }));
    $.def($sc, "fightMelee", $.fn({"n":"fightMelee","p":[[1,"who"],[2,"target"]],"r":3,"f":42}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      t1 = $.cm($.gm($r[1], "hit"), "hitTest", [$.gm($r[2], "area")]);
      if (!$.bool(t1)) { $b = 5; continue; }
      $b = 1; continue;
    case 1:
      t3 = $.cm($.get($sc, "Math"), "abs", [($.n($.gm($r[2], "_y")) - $.n($.gm($r[1], "_y")))]);
      t4 = !$.gt(t3, 20);
      s0 = !$.gt(t3, 20);
      if (t4) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      s0 = $.eq($.gm($r[2], "_name"), "benteng");
      $b = 3; continue;
    case 3:
      if (!$.bool(s0)) { $b = 5; continue; }
      $b = 4; continue;
    case 4:
      $.sm($r[1], "_x", ($.n($.gm($r[1], "_x")) - $.n($.gm($r[1], "v"))));
      $.sm($r[1], "v", 0);
      t7 = $.cm($r[1], "gotoAndPlay", ["menyerang"]);
      $b = 5; continue;
    case 5:
      t2 = $.cm($.gm($r[1], "attack"), "hitTest", [$.gm($r[2], "area")]);
      if (!$.bool(t2)) { $b = 22; continue; }
      $b = 6; continue;
    case 6:
      t5 = $.cm($.get($sc, "Math"), "abs", [($.n($.gm($r[2], "_y")) - $.n($.gm($r[1], "_y")))]);
      t6 = !$.gt(t5, 20);
      s0 = !$.gt(t5, 20);
      if (t6) { $b = 8; continue; }
      $b = 7; continue;
    case 7:
      s0 = $.eq($.gm($r[2], "_name"), "benteng");
      $b = 8; continue;
    case 8:
      if (!$.bool(s0)) { $b = 22; continue; }
      $b = 9; continue;
    case 9:
      t8 = $.cf($sc, "soundFX", [$.gm($r[1], "soundFX")]);
      t9 = $.cf($sc, "bloodEffect", [$r[2]]);
      if (!(($.n($.gm($r[1], "att")) - $.n($.gm($r[2], "def"))) > 0)) { $b = 11; continue; }
      $b = 10; continue;
    case 10:
      t10 = $r[1];
      t11 = $.cm($.get($sc, "Math"), "ceil", [($.n($.gm($r[1], "att")) - $.n($.gm($r[2], "def")))]);
      $.sm(t10, "damage", t11);
      $b = 12; continue;
    case 11:
      $.sm($r[1], "damage", 1);
      $b = 12; continue;
    case 12:
      if (!(($.n($.gm($r[2], "life")) - $.n($.gm($r[1], "damage"))) > 0)) { $b = 17; continue; }
      $b = 13; continue;
    case 13:
      if (!$.gt($.gm($r[1], "damage"), 0)) { $b = 15; continue; }
      $b = 14; continue;
    case 14:
      $.sm($r[2], "life", ($.n($.gm($r[2], "life")) - $.n($.gm($r[1], "damage"))));
      $b = 16; continue;
    case 15:
      $.sm($r[2], "life", ($.n($.gm($r[2], "life")) - 1));
      $b = 16; continue;
    case 16:
      $b = 22; continue;
    case 17:
      if (!$.eq($.gm($r[1], "kills"), undefined)) { $b = 19; continue; }
      $b = 18; continue;
    case 18:
      $.sm($r[1], "kills", 0);
      $b = 19; continue;
    case 19:
      $.sm($r[1], "kills", ($.n($.gm($r[1], "kills")) + 1));
      if (!!$.lt($.gm($r[1], "kills"), 2)) { $b = 21; continue; }
      $b = 20; continue;
    case 20:
      t14 = $.cf($sc, "rage", [$r[1]]);
      $b = 21; continue;
    case 21:
      $.sm($r[2], "isDead", true);
      $.sm($r[2], "v", 0);
      $.sm($r[2], "life", 0);
      t12 = $.cm($r[2], "gotoAndStop", ["dead"]);
      t13 = $.delMember($r[2], "onEnterFrame");
      $b = 22; continue;
    case 22:
      if (!$.eq($.gm($r[1], "v"), 0)) { $b = 25; continue; }
      $b = 23; continue;
    case 23:
      $.sm($r[1], "standby", true);
      $b = 25; continue;
    case 25: return;
    }
  }));
    $.def($sc, "fightRange", $.fn({"n":"fightRange","p":[[1,"who"],[2,"target"]],"r":3,"f":42}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, t2, t3, t4, t5, t6;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      t1 = $.cm($.gm($r[1], "hit"), "hitTest", [$.gm($r[2], "area")]);
      if (!$.bool(t1)) { $b = 5; continue; }
      $b = 1; continue;
    case 1:
      t3 = $.cm($.get($sc, "Math"), "abs", [($.n($.gm($r[2], "_y")) - $.n($.gm($r[1], "_y")))]);
      t4 = !$.gt(t3, 60);
      s0 = !$.gt(t3, 60);
      if (t4) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      s0 = $.eq($.gm($r[2], "_name"), "benteng");
      $b = 3; continue;
    case 3:
      if (!$.bool(s0)) { $b = 5; continue; }
      $b = 4; continue;
    case 4:
      $.sm($r[1], "_x", ($.n($.gm($r[1], "_x")) - $.n($.gm($r[1], "v"))));
      $.sm($r[1], "v", 0);
      t6 = $.cm($r[1], "gotoAndPlay", ["menyerang"]);
      $b = 5; continue;
    case 5:
      t2 = $.cm($.gm($r[1], "attack"), "hitTest", [$.gm($r[2], "area")]);
      if (!$.bool(t2)) { $b = 8; continue; }
      $b = 6; continue;
    case 6:
      if (!!$.bool($.gm($r[1], "attacking"))) { $b = 8; continue; }
      $b = 7; continue;
    case 7:
      t5 = $.cf($sc, "shootArrow", [$r[1], $r[2]]);
      $.sm($r[1], "attacking", true);
      $b = 8; continue;
    case 8:
      if (!$.eq($.gm($r[1], "v"), 0)) { $b = 11; continue; }
      $b = 9; continue;
    case 9:
      $.sm($r[1], "standby", true);
      $b = 11; continue;
    case 11: return;
    }
  }));
    $.def($sc, "shootArrow", $.fn({"n":"shootArrow","p":[[0,"who"],[0,"target"]],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      t1 = $.cf($sc, "soundFX", ["arrow1"]);
      $.sm($.get($sc, "battle_mc"), "depthObj", $.add($.gm($.get($sc, "battle_mc"), "depthObj"), 1));
      $.set($sc, "nameArrow", $.add("arrow", $.gm($.get($sc, "battle_mc"), "depthObj")));
      t2 = $.cm($.get($sc, "battle_mc"), "attachMovie", ["mc_arrow2", $.get($sc, "nameArrow"), $.add($.gm($.get($sc, "battle_mc"), "depthObj"), (5000 * $.n($.gm($.get($sc, "who"), "posY"))))]);
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "_x", $.gm($.get($sc, "who"), "_x"));
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "_y", ($.n($.gm($.get($sc, "who"), "_y")) - 70));
      t3 = $.cm($.gm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "arrow_mc"), "gotoAndStop", [$.gm($.get($sc, "who"), "classLevel")]);
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "spd", 35);
      if (!$.lt($.gm($.get($sc, "who"), "_xscale"), 0)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "spd", ($.n($.gm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "spd")) * (-1)));
      $b = 2; continue;
    case 2:
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "velY", 4);
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "batasY", $.gm($.gm($.get($sc, "battle_mc"), "rowPos"), $.add($.gm($.get($sc, "target"), "posY"), 1)));
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "cacheAsBitmap", true);
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!!$.bool($.get($sc, "isPaused"))) { $b = 15; continue; }
      $b = 1; continue;
    case 1:
      $.sm($r[1], "velY", ($.n($.gm($r[1], "velY")) - 1));
      $.sm($r[1], "_x", $.add($.gm($r[1], "_x"), $.gm($r[1], "spd")));
      $.sm($r[1], "_y", ($.n($.gm($r[1], "_y")) - $.n($.gm($r[1], "velY"))));
      t1 = $r[1];
      t2 = $.cm($.get($sc, "Math"), "atan2", [$.gm($r[1], "velY"), $.gm($r[1], "spd")]);
      $.sm(t1, "_rotation", (((0 - $.n(t2)) * 180) / 3.141592653589793));
      if (!!$.lt($.gm($r[1], "_y"), $.gm($r[1], "batasY"))) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      t4 = $.cm($r[1], "gotoAndStop", [2]);
      t5 = $.delMember($r[1], "onEnterFrame");
      t6 = $r[1];
      t7 = $.cf($sc, "setInterval", [$.get($sc, "hapusObject"), 1000, $r[1]]);
      $.sm(t6, "hapus", t7);
      $b = 3; continue;
    case 3:
      t3 = $.cm($r[1], "hitTest", [$.gm($.get($sc, "target"), "area")]);
      if (!$.bool(t3)) { $b = 15; continue; }
      $b = 4; continue;
    case 4:
      if (!(($.n($.gm($.get($sc, "who"), "att")) - $.n($.gm($.get($sc, "target"), "def"))) > 0)) { $b = 6; continue; }
      $b = 5; continue;
    case 5:
      $.sm($.get($sc, "who"), "damage", ($.n($.gm($.get($sc, "who"), "att")) - $.n($.gm($.get($sc, "target"), "def"))));
      $b = 7; continue;
    case 6:
      $.sm($.get($sc, "who"), "damage", 1);
      $b = 7; continue;
    case 7:
      t8 = $.cf($sc, "bloodEffect", [$.get($sc, "target")]);
      if (!(($.n($.gm($.get($sc, "target"), "life")) - $.n($.gm($.get($sc, "who"), "damage"))) > 0)) { $b = 12; continue; }
      $b = 8; continue;
    case 8:
      if (!$.gt($.gm($.get($sc, "who"), "damage"), 0)) { $b = 10; continue; }
      $b = 9; continue;
    case 9:
      $.sm($.get($sc, "target"), "life", ($.n($.gm($.get($sc, "target"), "life")) - $.n($.gm($.get($sc, "who"), "damage"))));
      $b = 11; continue;
    case 10:
      $.sm($.get($sc, "target"), "life", ($.n($.gm($.get($sc, "target"), "life")) - 1));
      $b = 11; continue;
    case 11:
      $b = 13; continue;
    case 12:
      $.sm($.get($sc, "target"), "isDead", true);
      $.sm($.get($sc, "target"), "v", 0);
      $.sm($.get($sc, "target"), "life", 0);
      t9 = $.cm($.get($sc, "target"), "gotoAndStop", ["dead"]);
      t10 = $.delMember($.get($sc, "target"), "onEnterFrame");
      $b = 13; continue;
    case 13:
      t11 = $.delMember($r[1], "onEnterFrame");
      t12 = $.cm($r[1], "removeMovieClip", []);
      $b = 15; continue;
    case 15: return;
    }
  }));
      $b = 3; continue;
    case 3: return;
    }
  }));
    $.def($sc, "fightMultipleRange", $.fn({"n":"fightMultipleRange","p":[[1,"who"],[2,"target"]],"r":3,"f":42}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      t1 = $.cm($.gm($r[1], "hit"), "hitTest", [$.gm($r[2], "area")]);
      if (!$.bool(t1)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      $.sm($r[1], "_x", ($.n($.gm($r[1], "_x")) - $.n($.gm($r[1], "v"))));
      $.sm($r[1], "v", 0);
      t3 = $.cm($r[1], "gotoAndPlay", ["menyerang"]);
      $b = 2; continue;
    case 2:
      t2 = $.cm($.gm($r[1], "attack"), "hitTest", [$.gm($r[2], "area")]);
      if (!$.bool(t2)) { $b = 5; continue; }
      $b = 3; continue;
    case 3:
      if (!!$.bool($.gm($r[1], "attacking"))) { $b = 5; continue; }
      $b = 4; continue;
    case 4:
      t4 = $.cf($sc, "shootMultipleArrow", [$r[1], $r[2]]);
      $.sm($r[1], "attacking", true);
      $b = 5; continue;
    case 5:
      if (!$.eq($.gm($r[1], "v"), 0)) { $b = 8; continue; }
      $b = 6; continue;
    case 6:
      $.sm($r[1], "standby", true);
      $b = 8; continue;
    case 8: return;
    }
  }));
    $.def($sc, "shootMultipleArrow", $.fn({"n":"shootMultipleArrow","p":[[0,"who"],[0,"target"]],"r":3,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5, t6;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $r[2] = 1;
      $b = 1; continue;
    case 1:
      if (!!$.gt($r[2], 3)) { $b = 6; continue; }
      $b = 2; continue;
    case 2:
      t1 = $.cf($sc, "soundFX", ["arrow1"]);
      $.sm($.get($sc, "battle_mc"), "depthObj", $.add($.gm($.get($sc, "battle_mc"), "depthObj"), 1));
      $.set($sc, "nameArrow", $.add("arrow", $.gm($.get($sc, "battle_mc"), "depthObj")));
      t2 = $.cm($.get($sc, "battle_mc"), "attachMovie", ["mc_arrow2", $.get($sc, "nameArrow"), $.add($.gm($.get($sc, "battle_mc"), "depthObj"), (5000 * $.n($.gm($.get($sc, "who"), "posY"))))]);
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "_x", $.gm($.get($sc, "who"), "_x"));
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "_y", ($.n($.gm($.get($sc, "who"), "_y")) - 80));
      t3 = $.cm($.gm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "arrow_mc"), "gotoAndStop", [$.gm($.get($sc, "who"), "classLevel")]);
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "spd", 30);
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "rot", 1.25);
      if (!$.lt($.gm($.get($sc, "who"), "_xscale"), 0)) { $b = 4; continue; }
      $b = 3; continue;
    case 3:
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "rot", ($.n($.gm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "rot")) * (-1)));
      $b = 4; continue;
    case 4:
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "xdiff", ($.n($.gm($.get($sc, "target"), "_x")) - $.n($.add($.gm($.get($sc, "who"), "_x"), 20))));
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "ydiff", (($.n($.gm($.get($sc, "target"), "_y")) - (40 * $.n($.add($r[2], 1)))) - ($.n($.gm($.get($sc, "who"), "_y")) - 80)));
      t4 = $.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow"));
      t5 = $.cm($.get($sc, "Math"), "atan2", [$.gm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "ydiff"), $.gm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "xdiff")]);
      $.sm(t4, "_rotation", (($.n(t5) * 180) / 3.141592653589793));
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "batasY", $.gm($.gm($.get($sc, "battle_mc"), "rowPos"), $.add($.gm($.get($sc, "target"), "posY"), 1)));
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "cacheAsBitmap", true);
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!!$.bool($.get($sc, "isPaused"))) { $b = 15; continue; }
      $b = 1; continue;
    case 1:
      t1 = $r[1];
      t2 = $.gm($r[1], "_x");
      t3 = $.gm($r[1], "spd");
      t4 = $.cm($.get($sc, "Math"), "cos", [($.n($.gm($r[1], "_rotation")) * 0.017453292519943295)]);
      $.sm(t1, "_x", $.add(t2, ($.n(t3) * $.n(t4))));
      t5 = $r[1];
      t6 = $.gm($r[1], "_y");
      t7 = $.gm($r[1], "spd");
      t8 = $.cm($.get($sc, "Math"), "sin", [($.n($.gm($r[1], "_rotation")) * 0.017453292519943295)]);
      $.sm(t5, "_y", $.add(t6, ($.n(t7) * $.n(t8))));
      $.sm($r[1], "_rotation", $.add($.gm($r[1], "_rotation"), $.gm($r[1], "rot")));
      if (!!$.lt($.gm($r[1], "_y"), $.gm($r[1], "batasY"))) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      t10 = $.cm($r[1], "gotoAndStop", [2]);
      t11 = $.delMember($r[1], "onEnterFrame");
      t12 = $r[1];
      t13 = $.cf($sc, "setInterval", [$.get($sc, "hapusObject"), 1000, $r[1]]);
      $.sm(t12, "hapus", t13);
      $b = 3; continue;
    case 3:
      t9 = $.cm($r[1], "hitTest", [$.gm($.get($sc, "target"), "area")]);
      if (!$.bool(t9)) { $b = 15; continue; }
      $b = 4; continue;
    case 4:
      if (!(($.n($.gm($.get($sc, "who"), "att")) - $.n($.gm($.get($sc, "target"), "def"))) > 0)) { $b = 6; continue; }
      $b = 5; continue;
    case 5:
      $.sm($.get($sc, "who"), "damage", ($.n($.gm($.get($sc, "who"), "att")) - $.n($.gm($.get($sc, "target"), "def"))));
      $b = 7; continue;
    case 6:
      $.sm($.get($sc, "who"), "damage", 1);
      $b = 7; continue;
    case 7:
      t14 = $.cf($sc, "bloodEffect", [$.get($sc, "target")]);
      if (!(($.n($.gm($.get($sc, "target"), "life")) - $.n($.gm($.get($sc, "who"), "damage"))) > 0)) { $b = 12; continue; }
      $b = 8; continue;
    case 8:
      if (!$.gt($.gm($.get($sc, "who"), "damage"), 0)) { $b = 10; continue; }
      $b = 9; continue;
    case 9:
      $.sm($.get($sc, "target"), "life", ($.n($.gm($.get($sc, "target"), "life")) - $.n($.gm($.get($sc, "who"), "damage"))));
      $b = 11; continue;
    case 10:
      $.sm($.get($sc, "target"), "life", ($.n($.gm($.get($sc, "target"), "life")) - 1));
      $b = 11; continue;
    case 11:
      $b = 13; continue;
    case 12:
      $.sm($.get($sc, "target"), "isDead", true);
      $.sm($.get($sc, "target"), "v", 0);
      $.sm($.get($sc, "target"), "life", 0);
      t15 = $.cm($.get($sc, "target"), "gotoAndStop", ["dead"]);
      t16 = $.delMember($.get($sc, "target"), "onEnterFrame");
      $b = 13; continue;
    case 13:
      t17 = $.delMember($r[1], "onEnterFrame");
      t18 = $.cm($r[1], "removeMovieClip", []);
      $b = 15; continue;
    case 15: return;
    }
  }));
      t6 = ($.n($r[2]) + 1);
      $r[2] = t6;
      $b = 1; continue;
    case 6: return;
    }
  }));
    $.def($sc, "fightThrow", $.fn({"n":"fightThrow","p":[[1,"who"],[2,"target"]],"r":3,"f":42}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, t2, t3, t4, t5, t6;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      t1 = $.cm($.gm($r[1], "hit"), "hitTest", [$.gm($r[2], "area")]);
      if (!$.bool(t1)) { $b = 5; continue; }
      $b = 1; continue;
    case 1:
      t3 = $.cm($.get($sc, "Math"), "abs", [($.n($.gm($r[2], "_y")) - $.n($.gm($r[1], "_y")))]);
      t4 = !$.gt(t3, 20);
      s0 = !$.gt(t3, 20);
      if (t4) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      s0 = $.eq($.gm($r[2], "_name"), "benteng");
      $b = 3; continue;
    case 3:
      if (!$.bool(s0)) { $b = 5; continue; }
      $b = 4; continue;
    case 4:
      $.sm($r[1], "_x", ($.n($.gm($r[1], "_x")) - $.n($.gm($r[1], "v"))));
      $.sm($r[1], "v", 0);
      t6 = $.cm($r[1], "gotoAndPlay", ["menyerang"]);
      $b = 5; continue;
    case 5:
      t2 = $.cm($.gm($r[1], "attack"), "hitTest", [$.gm($r[2], "area")]);
      if (!$.bool(t2)) { $b = 7; continue; }
      $b = 6; continue;
    case 6:
      t5 = $.cf($sc, "shootKnife", [$r[1], $r[2]]);
      $b = 7; continue;
    case 7:
      if (!$.eq($.gm($r[1], "v"), 0)) { $b = 10; continue; }
      $b = 8; continue;
    case 8:
      $.sm($r[1], "standby", true);
      $b = 10; continue;
    case 10: return;
    }
  }));
    $.def($sc, "shootKnife", $.fn({"n":"shootKnife","p":[[0,"who"],[0,"target"]],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.sm($.get($sc, "battle_mc"), "depthObj", $.add($.gm($.get($sc, "battle_mc"), "depthObj"), 1));
      $.set($sc, "nameKnife", $.add("knife", $.gm($.get($sc, "battle_mc"), "depthObj")));
      t1 = $.cm($.get($sc, "battle_mc"), "attachMovie", ["mc_knife", $.get($sc, "nameKnife"), $.add($.gm($.get($sc, "battle_mc"), "depthObj"), (5000 * $.n($.gm($.get($sc, "who"), "posY"))))]);
      if (!$.eq($.gm($.get($sc, "who"), "_xscale"), (-100))) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameKnife")), "_yscale", (-100));
      $b = 2; continue;
    case 2:
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameKnife")), "_x", $.gm($.get($sc, "who"), "_x"));
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameKnife")), "_y", ($.n($.gm($.get($sc, "who"), "_y")) - 60));
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameKnife")), "spd", 20);
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameKnife")), "batasY", $.gm($.get($sc, "who"), "_y"));
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameKnife")), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, t2, t3, t4, t5, t6, t7, t8;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!!$.bool($.get($sc, "isPaused"))) { $b = 20; continue; }
      $b = 1; continue;
    case 1:
      $.sm($r[1], "_rotation", $.add($.gm($r[1], "_rotation"), 50));
      if (!$.lt($.gm($.get($sc, "who"), "_xscale"), 0)) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      $.sm($r[1], "_x", ($.n($.gm($r[1], "_x")) - $.n($.gm($r[1], "spd"))));
      $b = 4; continue;
    case 3:
      $.sm($r[1], "_x", $.add($.gm($r[1], "_x"), $.gm($r[1], "spd")));
      $b = 4; continue;
    case 4:
      t1 = $.cm($r[1], "hitTest", [$.gm($.get($sc, "target"), "area")]);
      if (!$.bool(t1)) { $b = 15; continue; }
      $b = 5; continue;
    case 5:
      if (!(($.n($.gm($.get($sc, "who"), "att")) - $.n($.gm($.get($sc, "target"), "def"))) > 0)) { $b = 7; continue; }
      $b = 6; continue;
    case 6:
      $.sm($.get($sc, "who"), "damage", ($.n($.gm($.get($sc, "who"), "att")) - $.n($.gm($.get($sc, "target"), "def"))));
      $b = 8; continue;
    case 7:
      $.sm($.get($sc, "who"), "damage", 1);
      $b = 8; continue;
    case 8:
      t5 = $.cf($sc, "bloodEffect", [$.get($sc, "target")]);
      if (!(($.n($.gm($.get($sc, "target"), "life")) - $.n($.gm($.get($sc, "who"), "damage"))) > 0)) { $b = 13; continue; }
      $b = 9; continue;
    case 9:
      if (!$.gt($.gm($.get($sc, "who"), "damage"), 0)) { $b = 11; continue; }
      $b = 10; continue;
    case 10:
      $.sm($.get($sc, "target"), "life", ($.n($.gm($.get($sc, "target"), "life")) - $.n($.gm($.get($sc, "who"), "damage"))));
      $b = 12; continue;
    case 11:
      $.sm($.get($sc, "target"), "life", ($.n($.gm($.get($sc, "target"), "life")) - 1));
      $b = 12; continue;
    case 12:
      $b = 14; continue;
    case 13:
      $.sm($.get($sc, "target"), "isDead", true);
      $.sm($.get($sc, "target"), "v", 0);
      $.sm($.get($sc, "target"), "life", 0);
      t6 = $.cm($.get($sc, "target"), "gotoAndStop", ["dead"]);
      t7 = $.delMember($.get($sc, "target"), "onEnterFrame");
      $b = 14; continue;
    case 14:
      t8 = $.cm($r[1], "removeMovieClip", []);
      $b = 15; continue;
    case 15:
      t2 = $.gt($.gm($r[1], "_x"), $.gm($.get($sc, "battle_mc"), "_width"));
      t3 = t2;
      s0 = t2;
      if (t3) { $b = 17; continue; }
      $b = 16; continue;
    case 16:
      s0 = $.lt($.gm($r[1], "_x"), 0);
      $b = 17; continue;
    case 17:
      if (!$.bool(s0)) { $b = 20; continue; }
      $b = 18; continue;
    case 18:
      t4 = $.cm($r[1], "removeMovieClip", []);
      $b = 20; continue;
    case 20: return;
    }
  }));
      $b = 3; continue;
    case 3: return;
    }
  }));
    $.def($sc, "fightShoot", $.fn({"n":"fightShoot","p":[[1,"who"],[2,"target"]],"r":3,"f":42}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      t1 = $.cm($.gm($r[1], "hit"), "hitTest", [$.gm($r[2], "area")]);
      if (!$.bool(t1)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      $.sm($r[1], "attacking", false);
      $.sm($r[1], "_x", ($.n($.gm($r[1], "_x")) - $.n($.gm($r[1], "v"))));
      $.sm($r[1], "v", 0);
      t3 = $.cm($r[1], "gotoAndPlay", ["menyerang"]);
      $b = 2; continue;
    case 2:
      t2 = $.cm($.gm($r[1], "attack"), "hitTest", [$.gm($r[2], "area")]);
      if (!$.bool(t2)) { $b = 5; continue; }
      $b = 3; continue;
    case 3:
      if (!!$.bool($.gm($r[1], "attacking"))) { $b = 5; continue; }
      $b = 4; continue;
    case 4:
      t4 = $.cf($sc, "smokeEffect", [$r[1]]);
      t5 = $.cf($sc, "shootBullet", [$r[1], $r[2]]);
      $.sm($r[1], "attacking", true);
      $b = 5; continue;
    case 5:
      if (!$.eq($.gm($r[1], "v"), 0)) { $b = 8; continue; }
      $b = 6; continue;
    case 6:
      $.sm($r[1], "standby", true);
      $b = 8; continue;
    case 8: return;
    }
  }));
    $.def($sc, "shootBullet", $.fn({"n":"shootBullet","p":[[0,"who"],[0,"target"]],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4;
    t1 = $.cf($sc, "soundFX", [$.add("gun", $.gm($.get($sc, "who"), "classLevel"))]);
    $.sm($.get($sc, "battle_mc"), "depthObj", $.add($.gm($.get($sc, "battle_mc"), "depthObj"), 1));
    $.set($sc, "nameBullet", $.add("bullet", $.gm($.get($sc, "battle_mc"), "depthObj")));
    t2 = $.cm($.get($sc, "battle_mc"), "attachMovie", ["mc_bullet", $.get($sc, "nameBullet"), $.add($.gm($.get($sc, "battle_mc"), "depthObj"), (5000 * $.n($.gm($.get($sc, "who"), "posY"))))]);
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameBullet")), "_x", $.gm($.get($sc, "who"), "frontX"));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameBullet")), "_y", $.gm($.get($sc, "who"), "frontY"));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameBullet")), "spd", 100);
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameBullet")), "batasY", $.gm($.get($sc, "who"), "_y"));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameBullet")), "xdiff", ($.n($.gm($.get($sc, "target"), "_x")) - $.n($.gm($.get($sc, "who"), "_x"))));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameBullet")), "ydiff", (($.n($.gm($.get($sc, "target"), "_y")) - ($.n($.gm($.get($sc, "target"), "_height")) / 2)) - ($.n($.gm($.get($sc, "who"), "_y")) - ($.n($.gm($.get($sc, "who"), "_height")) / 1.5))));
    t3 = $.gm($.get($sc, "battle_mc"), $.get($sc, "nameBullet"));
    t4 = $.cm($.get($sc, "Math"), "atan2", [$.gm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameBullet")), "ydiff"), $.gm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameBullet")), "xdiff")]);
    $.sm(t3, "_rotation", (($.n(t4) * 180) / 3.141592653589793));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameBullet")), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!!$.bool($.get($sc, "isPaused"))) { $b = 13; continue; }
      $b = 1; continue;
    case 1:
      t1 = $r[1];
      t2 = $.gm($r[1], "_x");
      t3 = $.gm($r[1], "spd");
      t4 = $.cm($.get($sc, "Math"), "cos", [(($.n($.gm($r[1], "_rotation")) / 180) * 3.141592653589793)]);
      $.sm(t1, "_x", $.add(t2, ($.n(t3) * $.n(t4))));
      t5 = $r[1];
      t6 = $.gm($r[1], "_y");
      t7 = $.gm($r[1], "spd");
      t8 = $.cm($.get($sc, "Math"), "sin", [(($.n($.gm($r[1], "_rotation")) / 180) * 3.141592653589793)]);
      $.sm(t5, "_y", $.add(t6, ($.n(t7) * $.n(t8))));
      t9 = $.cm($r[1], "hitTest", [$.gm($.get($sc, "target"), "area")]);
      if (!$.bool(t9)) { $b = 13; continue; }
      $b = 2; continue;
    case 2:
      if (!(($.n($.gm($.get($sc, "who"), "att")) - $.n($.gm($.get($sc, "target"), "def"))) > 0)) { $b = 4; continue; }
      $b = 3; continue;
    case 3:
      $.sm($.get($sc, "who"), "damage", ($.n($.gm($.get($sc, "who"), "att")) - $.n($.gm($.get($sc, "target"), "def"))));
      $b = 5; continue;
    case 4:
      $.sm($.get($sc, "who"), "damage", 1);
      $b = 5; continue;
    case 5:
      t10 = $.cf($sc, "bloodEffect", [$.get($sc, "target")]);
      if (!(($.n($.gm($.get($sc, "target"), "life")) - $.n($.gm($.get($sc, "who"), "damage"))) > 0)) { $b = 10; continue; }
      $b = 6; continue;
    case 6:
      if (!$.gt($.gm($.get($sc, "who"), "damage"), 0)) { $b = 8; continue; }
      $b = 7; continue;
    case 7:
      $.sm($.get($sc, "target"), "life", ($.n($.gm($.get($sc, "target"), "life")) - $.n($.gm($.get($sc, "who"), "damage"))));
      $b = 9; continue;
    case 8:
      $.sm($.get($sc, "target"), "life", ($.n($.gm($.get($sc, "target"), "life")) - 1));
      $b = 9; continue;
    case 9:
      $b = 11; continue;
    case 10:
      $.sm($.get($sc, "target"), "isDead", true);
      $.sm($.get($sc, "target"), "v", 0);
      $.sm($.get($sc, "target"), "life", 0);
      t11 = $.cm($.get($sc, "target"), "gotoAndStop", ["dead"]);
      t12 = $.delMember($.get($sc, "target"), "onEnterFrame");
      $b = 11; continue;
    case 11:
      t13 = $.cm($r[1], "removeMovieClip", []);
      $b = 13; continue;
    case 13: return;
    }
  }));
  }));
    $.def($sc, "fightMagic", $.fn({"n":"fightMagic","p":[[1,"who"],[2,"target"]],"r":3,"f":42}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, t2, t3, t4, t5, t6, t7, t8, t9;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      t1 = $.cm($.gm($r[1], "hit"), "hitTest", [$.gm($r[2], "area")]);
      if (!$.bool(t1)) { $b = 5; continue; }
      $b = 1; continue;
    case 1:
      t3 = $.cm($.get($sc, "Math"), "abs", [($.n($.gm($r[2], "_y")) - $.n($.gm($r[1], "_y")))]);
      t4 = !$.gt(t3, 20);
      s0 = !$.gt(t3, 20);
      if (t4) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      s0 = $.eq($.gm($r[2], "_name"), "benteng");
      $b = 3; continue;
    case 3:
      if (!$.bool(s0)) { $b = 5; continue; }
      $b = 4; continue;
    case 4:
      $.sm($r[1], "_x", ($.n($.gm($r[1], "_x")) - $.n($.gm($r[1], "v"))));
      $.sm($r[1], "v", 0);
      t7 = $.cm($r[1], "gotoAndPlay", ["menyerang"]);
      $b = 5; continue;
    case 5:
      t2 = $.cm($.gm($r[1], "attack"), "hitTest", [$.gm($r[2], "area")]);
      if (!$.bool(t2)) { $b = 15; continue; }
      $b = 6; continue;
    case 6:
      t5 = $.cf($sc, "soundFX", [$.add("magic", $.gm($r[1], "classLevel"))]);
      t6 = $.cf($sc, "bloodEffect", [$r[2]]);
      if (!(($.n($.gm($r[1], "att")) - $.n($.gm($r[2], "def"))) > 0)) { $b = 8; continue; }
      $b = 7; continue;
    case 7:
      $.sm($r[1], "damage", ($.n($.gm($r[1], "att")) - $.n($.gm($r[2], "def"))));
      $b = 9; continue;
    case 8:
      $.sm($r[1], "damage", 1);
      $b = 9; continue;
    case 9:
      if (!(($.n($.gm($r[2], "life")) - ($.n($.gm($r[1], "damage")) / 5)) > 0)) { $b = 14; continue; }
      $b = 10; continue;
    case 10:
      if (!$.gt($.gm($r[1], "damage"), 0)) { $b = 12; continue; }
      $b = 11; continue;
    case 11:
      $.sm($r[2], "life", ($.n($.gm($r[2], "life")) - ($.n($.gm($r[1], "damage")) / 5)));
      $b = 13; continue;
    case 12:
      $.sm($r[2], "life", ($.n($.gm($r[2], "life")) - 0.2));
      $b = 13; continue;
    case 13:
      $b = 15; continue;
    case 14:
      $.sm($r[2], "isDead", true);
      $.sm($r[2], "v", 0);
      $.sm($r[2], "life", 0);
      t8 = $.cm($r[2], "gotoAndStop", ["dead"]);
      t9 = $.delMember($r[2], "onEnterFrame");
      $b = 15; continue;
    case 15:
      if (!$.eq($.gm($r[1], "v"), 0)) { $b = 18; continue; }
      $b = 16; continue;
    case 16:
      $.sm($r[1], "standby", true);
      $b = 18; continue;
    case 18: return;
    }
  }));
    $.def($sc, "minumJamu", $.fn({"n":"minumJamu","p":[[1,"who"]],"r":4,"f":42}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3;
    t1 = $.nm($.gm($.get($sc, "flash"), "filters"), "GlowFilter", [16750848, 30, 5, 5, 3, 3, false, false]);
    $r[3] = t1;
    t2 = $.nw($sc, "Array", []);
    $r[2] = t2;
    t3 = $.cm($r[2], "push", [$r[3]]);
    $.sm($r[1], "filters", $r[2]);
    $.sm($r[1], "att", ($.n($.gm($r[1], "att")) * 3));
    $.sm($r[1], "def", ($.n($.gm($r[1], "def")) * 3));
    $.sm($r[1], "lifeAwal", ($.n($.gm($r[1], "lifeAwal")) * 10));
    $.sm($r[1], "life", $.gm($r[1], "lifeAwal"));
    $.sm($r[1], "minumJamu", true);
  }));
    $.def($sc, "stealResource", $.fn({"n":"stealResource","p":[[1,"who"]],"r":2,"f":42}, $sc, function($sc, $this, $args, $r) {
    var t1;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.sm($.get($sc, "resourceList"), 1, $.add($.gm($.get($sc, "resourceList"), 1), ((2 * $.n($.gm($r[1], "lifeAwal"))) * $.n($.gm($r[1], "classLevel")))));
      if (!$.gt($.gm($.get($sc, "townSpeStat"), 1), 0)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      $.sm($.get($sc, "resourceList"), 1, $.add($.gm($.get($sc, "resourceList"), 1), (((2 * $.n($.gm($r[1], "lifeAwal"))) * $.n($.gm($r[1], "classLevel"))) / 5)));
      $b = 2; continue;
    case 2:
      $.sm($.get($sc, "battleSummary"), 5, $.add($.gm($.get($sc, "battleSummary"), 5), ((2 * $.n($.gm($r[1], "lifeAwal"))) * $.n($.gm($r[1], "classLevel")))));
      $.sm($.get($sc, "statisticList"), 6, $.add($.gm($.get($sc, "statisticList"), 6), ((2 * $.n($.gm($r[1], "lifeAwal"))) * $.n($.gm($r[1], "classLevel")))));
      if (!!$.lt($.gm($.get($sc, "statisticList"), 6), 5000)) { $b = 5; continue; }
      $b = 3; continue;
    case 3:
      t1 = $.cf($sc, "newAchievement", [7]);
      $b = 5; continue;
    case 5: return;
    }
  }));
    $.def($sc, "summonSwordman", $.fn({"n":"summonSwordman","p":[[0,"classLevel"]],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5;
    $.sm($.get($sc, "battle_mc"), "depthObj", $.add($.gm($.get($sc, "battle_mc"), "depthObj"), 1));
    $.set($sc, "nameSwordman", $.add("swordman", $.gm($.get($sc, "battle_mc"), "depthObj")));
    t1 = $.cm($.get($sc, "battle_mc"), "attachMovie", [$.gm($.gm($.gm($.get($sc, "armyStock"), 2), $.get($sc, "classLevel")), 0), $.get($sc, "nameSwordman"), $.add($.gm($.get($sc, "battle_mc"), "depthObj"), (5000 * $.n($.gm($.get($sc, "battle_mc"), "armyID"))))]);
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordman")), "posY", $.gm($.get($sc, "battle_mc"), "armyID"));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordman")), "classLevel", $.get($sc, "classLevel"));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordman")), "_x", 0);
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordman")), "_y", $.gm($.gm($.get($sc, "battle_mc"), "rowPos"), $.gm($.get($sc, "battle_mc"), "armyID")));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordman")), "lifeAwal", $.add($.gm($.gm($.gm($.get($sc, "armyStock"), 2), $.get($sc, "classLevel")), 1), (2.5 * $.n($.gm($.get($sc, "townMilStat"), 2)))));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordman")), "life", $.gm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordman")), "lifeAwal"));
    t2 = $.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordman"));
    t3 = $.gm($.gm($.gm($.get($sc, "armyStock"), 2), $.get($sc, "classLevel")), 2);
    t4 = $.cf($sc, "hitungBarrack", []);
    $.sm(t2, "att", $.add(t3, t4));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordman")), "def", $.add($.gm($.gm($.gm($.get($sc, "armyStock"), 2), $.get($sc, "classLevel")), 3), $.gm($.get($sc, "townMilStat"), 1)));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordman")), "spd", $.gm($.gm($.gm($.get($sc, "armyStock"), 2), $.get($sc, "classLevel")), 4));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordman")), "v", $.gm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordman")), "spd"));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordman")), "timer", 50);
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordman")), "soundFX", "sword1");
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordman")), "cacheAsBitmap", true);
    t5 = $.cm($.gm($.get($sc, "battle_mc"), "swordmanList"), "push", [$.get($sc, "nameSwordman")]);
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordman")), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, t2, t3, t4, en1, en2, t5, t6, t7, t8, t9, t10;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!$.bool($.get($sc, "habisPerang"))) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t1 = $.delMember($r[1], "onEnterFrame");
      $b = 2; continue;
    case 2:
      if (!!$.bool($.get($sc, "isPaused"))) { $b = 22; continue; }
      $b = 3; continue;
    case 3:
      t3 = $.cm($.gm($r[1], "clip"), "play", []);
      $.sm($r[1], "_x", $.add($.gm($r[1], "_x"), ($.n($.gm($r[1], "v")) * $.n($.get($sc, "gameSpeed")))));
      if (!!$.eq($.gm($r[1], "v"), 0)) { $b = 5; continue; }
      $b = 4; continue;
    case 4:
      t4 = $.cm($r[1], "gotoAndStop", ["walking"]);
      $b = 5; continue;
    case 5:
      if (!$.eq($.gm($r[1], "classLevel"), 1)) { $b = 10; continue; }
      $b = 6; continue;
    case 6:
      en1 = $.enumerate($.gm($.get($sc, "battle_mc"), "enemyObjList"));
      s0 = en1;
      $b = 7; continue;
    case 7:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 9; continue; }
      $b = 8; continue;
    case 8:
      $.set($sc, "index", $r[0]);
      t7 = $.cf($sc, "fightThrow", [$r[1], $.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "enemyObjList"), $.get($sc, "index")))]);
      $b = 7; continue;
    case 9:
      $b = 14; continue;
    case 10:
      if (!$.eq($.gm($r[1], "classLevel"), 2)) { $b = 14; continue; }
      $b = 11; continue;
    case 11:
      en2 = $.enumerate($.gm($.get($sc, "battle_mc"), "enemyObjList"));
      s0 = en2;
      $b = 12; continue;
    case 12:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 14; continue; }
      $b = 13; continue;
    case 13:
      $.set($sc, "index", $r[0]);
      t10 = $.cf($sc, "fightMelee", [$r[1], $.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "enemyObjList"), $.get($sc, "index")))]);
      $b = 12; continue;
    case 14:
      if (!$.bool($.gm($r[1], "standby"))) { $b = 19; continue; }
      $b = 15; continue;
    case 15:
      $.sm($r[1], "timer", ($.n($.gm($r[1], "timer")) - 1));
      t5 = !$.gt($.gm($r[1], "timer"), 0);
      t6 = t5;
      s0 = t5;
      if (t6) { $b = 17; continue; }
      $b = 16; continue;
    case 16:
      s0 = $.eq($.gm($r[1], "timer"), undefined);
      $b = 17; continue;
    case 17:
      if (!$.bool(s0)) { $b = 19; continue; }
      $b = 18; continue;
    case 18:
      $.sm($r[1], "timer", 50);
      $.sm($r[1], "v", $.gm($r[1], "spd"));
      $b = 19; continue;
    case 19:
      $.sm($.gm($.gm($r[1], "life_span"), "span"), "_xscale", (100 * ($.n($.gm($r[1], "life")) / $.n($.gm($r[1], "lifeAwal")))));
      if (!$.gt($.gm($r[1], "_x"), 1300)) { $b = 21; continue; }
      $b = 20; continue;
    case 20:
      t8 = $.cf($sc, "stealResource", [$r[1]]);
      t9 = $.cm($r[1], "removeMovieClip", []);
      $b = 21; continue;
    case 21:
      $b = 24; continue;
    case 22:
      t2 = $.cm($.gm($r[1], "clip"), "stop", []);
      $b = 24; continue;
    case 24: return;
    }
  }));
  }));
    $.def($sc, "summonSpearman", $.fn({"n":"summonSpearman","p":[[2,"classLevel"]],"r":3,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5;
    $.sm($.get($sc, "battle_mc"), "depthObj", $.add($.gm($.get($sc, "battle_mc"), "depthObj"), 1));
    $.set($sc, "nameSpearman", $.add("spearman", $.gm($.get($sc, "battle_mc"), "depthObj")));
    t1 = $.cm($.get($sc, "battle_mc"), "attachMovie", [$.gm($.gm($.gm($.get($sc, "armyStock"), 3), $r[2]), 0), $.get($sc, "nameSpearman"), $.add($.gm($.get($sc, "battle_mc"), "depthObj"), (5000 * $.n($.gm($.get($sc, "battle_mc"), "armyID"))))]);
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSpearman")), "posY", $.gm($.get($sc, "battle_mc"), "armyID"));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSpearman")), "_x", 0);
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSpearman")), "_y", $.gm($.gm($.get($sc, "battle_mc"), "rowPos"), $.gm($.get($sc, "battle_mc"), "armyID")));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSpearman")), "classLevel", $r[2]);
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSpearman")), "lifeAwal", $.add($.gm($.gm($.gm($.get($sc, "armyStock"), 3), $r[2]), 1), (2.5 * $.n($.gm($.get($sc, "townMilStat"), 2)))));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSpearman")), "life", $.gm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSpearman")), "lifeAwal"));
    t2 = $.gm($.get($sc, "battle_mc"), $.get($sc, "nameSpearman"));
    t3 = $.gm($.gm($.gm($.get($sc, "armyStock"), 3), $r[2]), 2);
    t4 = $.cf($sc, "hitungBarrack", []);
    $.sm(t2, "att", $.add(t3, t4));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSpearman")), "def", $.add($.gm($.gm($.gm($.get($sc, "armyStock"), 3), $r[2]), 3), $.gm($.get($sc, "townMilStat"), 1)));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSpearman")), "spd", $.gm($.gm($.gm($.get($sc, "armyStock"), 3), $r[2]), 4));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSpearman")), "v", $.gm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSpearman")), "spd"));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSpearman")), "timer", 50);
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSpearman")), "soundFX", "spear1");
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSpearman")), "cacheAsBitmap", true);
    t5 = $.cm($.gm($.get($sc, "battle_mc"), "spearmanList"), "push", [$.get($sc, "nameSpearman")]);
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSpearman")), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, t2, t3, en1, t4, t5, t6, t7, t8, t9;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!$.bool($.get($sc, "habisPerang"))) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t1 = $.delMember($r[1], "onEnterFrame");
      $b = 2; continue;
    case 2:
      if (!!$.bool($.get($sc, "isPaused"))) { $b = 16; continue; }
      $b = 3; continue;
    case 3:
      t3 = $.cm($.gm($r[1], "clip"), "play", []);
      $.sm($r[1], "_x", $.add($.gm($r[1], "_x"), ($.n($.gm($r[1], "v")) * $.n($.get($sc, "gameSpeed")))));
      if (!!$.eq($.gm($r[1], "v"), 0)) { $b = 5; continue; }
      $b = 4; continue;
    case 4:
      t4 = $.cm($r[1], "gotoAndStop", ["walking"]);
      $b = 5; continue;
    case 5:
      en1 = $.enumerate($.gm($.get($sc, "battle_mc"), "enemyObjList"));
      s0 = en1;
      $b = 6; continue;
    case 6:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 8; continue; }
      $b = 7; continue;
    case 7:
      $.set($sc, "index", $r[0]);
      t5 = $.cf($sc, "fightMelee", [$r[1], $.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "enemyObjList"), $.get($sc, "index")))]);
      $b = 6; continue;
    case 8:
      if (!$.bool($.gm($r[1], "standby"))) { $b = 13; continue; }
      $b = 9; continue;
    case 9:
      $.sm($r[1], "timer", ($.n($.gm($r[1], "timer")) - 1));
      t6 = !$.gt($.gm($r[1], "timer"), 0);
      t7 = t6;
      s0 = t6;
      if (t7) { $b = 11; continue; }
      $b = 10; continue;
    case 10:
      s0 = $.eq($.gm($r[1], "timer"), undefined);
      $b = 11; continue;
    case 11:
      if (!$.bool(s0)) { $b = 13; continue; }
      $b = 12; continue;
    case 12:
      $.sm($r[1], "timer", 50);
      $.sm($r[1], "v", $.gm($r[1], "spd"));
      $b = 13; continue;
    case 13:
      $.sm($.gm($.gm($r[1], "life_span"), "span"), "_xscale", (100 * ($.n($.gm($r[1], "life")) / $.n($.gm($r[1], "lifeAwal")))));
      if (!$.gt($.gm($r[1], "_x"), 1300)) { $b = 15; continue; }
      $b = 14; continue;
    case 14:
      t8 = $.cf($sc, "stealResource", [$r[1]]);
      t9 = $.cm($r[1], "removeMovieClip", []);
      $b = 15; continue;
    case 15:
      $b = 18; continue;
    case 16:
      t2 = $.cm($.gm($r[1], "clip"), "stop", []);
      $b = 18; continue;
    case 18: return;
    }
  }));
  }));
    $.def($sc, "summonHorsearcher", $.fn({"n":"summonHorsearcher","p":[[2,"classLevel"]],"r":3,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5;
    $.sm($.get($sc, "battle_mc"), "depthObj", $.add($.gm($.get($sc, "battle_mc"), "depthObj"), 1));
    $.set($sc, "nameHorsearcher", $.add("horseacher", $.gm($.get($sc, "battle_mc"), "depthObj")));
    t1 = $.cm($.get($sc, "battle_mc"), "attachMovie", [$.gm($.gm($.gm($.get($sc, "armyStock"), 1), $r[2]), 0), $.get($sc, "nameHorsearcher"), $.add($.gm($.get($sc, "battle_mc"), "depthObj"), (5000 * $.n($.gm($.get($sc, "battle_mc"), "armyID"))))]);
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameHorsearcher")), "posY", $.gm($.get($sc, "battle_mc"), "armyID"));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameHorsearcher")), "_x", 0);
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameHorsearcher")), "_y", $.gm($.gm($.get($sc, "battle_mc"), "rowPos"), $.gm($.get($sc, "battle_mc"), "armyID")));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameHorsearcher")), "classLevel", $r[2]);
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameHorsearcher")), "lifeAwal", $.add($.gm($.gm($.gm($.get($sc, "armyStock"), 1), $r[2]), 1), (2.5 * $.n($.gm($.get($sc, "townMilStat"), 2)))));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameHorsearcher")), "life", $.gm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameHorsearcher")), "lifeAwal"));
    t2 = $.gm($.get($sc, "battle_mc"), $.get($sc, "nameHorsearcher"));
    t3 = $.gm($.gm($.gm($.get($sc, "armyStock"), 1), $r[2]), 2);
    t4 = $.cf($sc, "hitungBarrack", []);
    $.sm(t2, "att", $.add(t3, t4));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameHorsearcher")), "def", $.add($.gm($.gm($.gm($.get($sc, "armyStock"), 1), $r[2]), 3), $.gm($.get($sc, "townMilStat"), 1)));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameHorsearcher")), "spd", $.gm($.gm($.gm($.get($sc, "armyStock"), 1), $r[2]), 4));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameHorsearcher")), "v", $.gm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameHorsearcher")), "spd"));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameHorsearcher")), "timer", 50);
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameHorsearcher")), "jedaAwal", 30);
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameHorsearcher")), "jeda", $.gm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameHorsearcher")), "jedaAwal"));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameHorsearcher")), "cacheAsBitmap", true);
    t5 = $.cm($.gm($.get($sc, "battle_mc"), "horsearcherList"), "push", [$.get($sc, "nameHorsearcher")]);
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameHorsearcher")), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, t2, t3, en1, t4, t5, t6, t7, t8, t9;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!$.bool($.get($sc, "habisPerang"))) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t1 = $.delMember($r[1], "onEnterFrame");
      $b = 2; continue;
    case 2:
      if (!!$.bool($.get($sc, "isPaused"))) { $b = 16; continue; }
      $b = 3; continue;
    case 3:
      t3 = $.cm($.gm($r[1], "clip"), "play", []);
      $.sm($r[1], "_x", $.add($.gm($r[1], "_x"), ($.n($.gm($r[1], "v")) * $.n($.get($sc, "gameSpeed")))));
      if (!!$.eq($.gm($r[1], "v"), 0)) { $b = 5; continue; }
      $b = 4; continue;
    case 4:
      t4 = $.cm($r[1], "gotoAndStop", ["walking"]);
      $b = 5; continue;
    case 5:
      en1 = $.enumerate($.gm($.get($sc, "battle_mc"), "enemyObjList"));
      s0 = en1;
      $b = 6; continue;
    case 6:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 8; continue; }
      $b = 7; continue;
    case 7:
      $.set($sc, "index", $r[0]);
      t5 = $.cf($sc, "fightRange", [$r[1], $.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "enemyObjList"), $.get($sc, "index")))]);
      $b = 6; continue;
    case 8:
      if (!$.bool($.gm($r[1], "standby"))) { $b = 13; continue; }
      $b = 9; continue;
    case 9:
      $.sm($r[1], "timer", ($.n($.gm($r[1], "timer")) - 1));
      t6 = !$.gt($.gm($r[1], "timer"), 0);
      t7 = t6;
      s0 = t6;
      if (t7) { $b = 11; continue; }
      $b = 10; continue;
    case 10:
      s0 = $.eq($.gm($r[1], "timer"), undefined);
      $b = 11; continue;
    case 11:
      if (!$.bool(s0)) { $b = 13; continue; }
      $b = 12; continue;
    case 12:
      $.sm($r[1], "v", $.gm($r[1], "spd"));
      $.sm($r[1], "timer", 50);
      $b = 13; continue;
    case 13:
      $.sm($.gm($.gm($r[1], "life_span"), "span"), "_xscale", (100 * ($.n($.gm($r[1], "life")) / $.n($.gm($r[1], "lifeAwal")))));
      if (!$.gt($.gm($r[1], "_x"), 1300)) { $b = 15; continue; }
      $b = 14; continue;
    case 14:
      t8 = $.cf($sc, "stealResource", [$r[1]]);
      t9 = $.cm($r[1], "removeMovieClip", []);
      $b = 15; continue;
    case 15:
      $b = 18; continue;
    case 16:
      t2 = $.cm($.gm($r[1], "clip"), "stop", []);
      $b = 18; continue;
    case 18: return;
    }
  }));
  }));
    $.def($sc, "summonGunman", $.fn({"n":"summonGunman","p":[[2,"classLevel"]],"r":3,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5;
    $.sm($.get($sc, "battle_mc"), "depthObj", $.add($.gm($.get($sc, "battle_mc"), "depthObj"), 1));
    $.set($sc, "nameGunman", $.add("gunman", $.gm($.get($sc, "battle_mc"), "depthObj")));
    t1 = $.cm($.get($sc, "battle_mc"), "attachMovie", [$.gm($.gm($.gm($.get($sc, "armyStock"), 4), $r[2]), 0), $.get($sc, "nameGunman"), $.add($.gm($.get($sc, "battle_mc"), "depthObj"), (5000 * $.n($.gm($.get($sc, "battle_mc"), "armyID"))))]);
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameGunman")), "posY", $.gm($.get($sc, "battle_mc"), "armyID"));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameGunman")), "_x", 0);
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameGunman")), "_y", $.gm($.gm($.get($sc, "battle_mc"), "rowPos"), $.gm($.get($sc, "battle_mc"), "armyID")));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameGunman")), "classLevel", $r[2]);
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameGunman")), "lifeAwal", $.add($.gm($.gm($.gm($.get($sc, "armyStock"), 4), $r[2]), 1), (2.5 * $.n($.gm($.get($sc, "townMilStat"), 2)))));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameGunman")), "life", $.gm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameGunman")), "lifeAwal"));
    t2 = $.gm($.get($sc, "battle_mc"), $.get($sc, "nameGunman"));
    t3 = $.gm($.gm($.gm($.get($sc, "armyStock"), 4), $r[2]), 2);
    t4 = $.cf($sc, "hitungBarrack", []);
    $.sm(t2, "att", $.add(t3, t4));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameGunman")), "def", $.add($.gm($.gm($.gm($.get($sc, "armyStock"), 4), $r[2]), 3), $.gm($.get($sc, "townMilStat"), 1)));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameGunman")), "spd", $.gm($.gm($.gm($.get($sc, "armyStock"), 4), $r[2]), 4));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameGunman")), "v", $.gm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameGunman")), "spd"));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameGunman")), "timer", 50);
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameGunman")), "jedaAwal", 30);
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameGunman")), "jeda", $.gm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameGunman")), "jedaAwal"));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameGunman")), "cacheAsBitmap", true);
    t5 = $.cm($.gm($.get($sc, "battle_mc"), "gunmanList"), "push", [$.get($sc, "nameGunman")]);
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameGunman")), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, t2, t3, en1, t4, t5, t6, t7, t8, t9;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!$.bool($.get($sc, "habisPerang"))) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t1 = $.delMember($r[1], "onEnterFrame");
      $b = 2; continue;
    case 2:
      if (!!$.bool($.get($sc, "isPaused"))) { $b = 16; continue; }
      $b = 3; continue;
    case 3:
      t3 = $.cm($.gm($r[1], "clip"), "play", []);
      $.sm($r[1], "frontX", $.add($.gm($r[1], "_x"), 25));
      $.sm($r[1], "frontY", ($.n($.gm($r[1], "_y")) - ($.n($.gm($r[1], "_height")) / 1.5)));
      $.sm($r[1], "_x", $.add($.gm($r[1], "_x"), ($.n($.gm($r[1], "v")) * $.n($.get($sc, "gameSpeed")))));
      if (!!$.eq($.gm($r[1], "v"), 0)) { $b = 5; continue; }
      $b = 4; continue;
    case 4:
      t4 = $.cm($r[1], "gotoAndStop", ["walking"]);
      $b = 5; continue;
    case 5:
      en1 = $.enumerate($.gm($.get($sc, "battle_mc"), "enemyObjList"));
      s0 = en1;
      $b = 6; continue;
    case 6:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 8; continue; }
      $b = 7; continue;
    case 7:
      $.set($sc, "index", $r[0]);
      t5 = $.cf($sc, "fightShoot", [$r[1], $.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "enemyObjList"), $.get($sc, "index")))]);
      $b = 6; continue;
    case 8:
      if (!$.bool($.gm($r[1], "standby"))) { $b = 13; continue; }
      $b = 9; continue;
    case 9:
      $.sm($r[1], "timer", ($.n($.gm($r[1], "timer")) - 1));
      t6 = !$.gt($.gm($r[1], "timer"), 0);
      t7 = t6;
      s0 = t6;
      if (t7) { $b = 11; continue; }
      $b = 10; continue;
    case 10:
      s0 = $.eq($.gm($r[1], "timer"), undefined);
      $b = 11; continue;
    case 11:
      if (!$.bool(s0)) { $b = 13; continue; }
      $b = 12; continue;
    case 12:
      $.sm($r[1], "timer", 50);
      $.sm($r[1], "v", $.gm($r[1], "spd"));
      $b = 13; continue;
    case 13:
      $.sm($.gm($.gm($r[1], "life_span"), "span"), "_xscale", (100 * ($.n($.gm($r[1], "life")) / $.n($.gm($r[1], "lifeAwal")))));
      if (!$.gt($.gm($r[1], "_x"), 1300)) { $b = 15; continue; }
      $b = 14; continue;
    case 14:
      t8 = $.cf($sc, "stealResource", [$r[1]]);
      t9 = $.cm($r[1], "removeMovieClip", []);
      $b = 15; continue;
    case 15:
      $b = 18; continue;
    case 16:
      t2 = $.cm($.gm($r[1], "clip"), "stop", []);
      $b = 18; continue;
    case 18: return;
    }
  }));
  }));
    $.def($sc, "summonMagician", $.fn({"n":"summonMagician","p":[[2,"classLevel"]],"r":3,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5;
    $.sm($.get($sc, "battle_mc"), "depthObj", $.add($.gm($.get($sc, "battle_mc"), "depthObj"), 1));
    $.set($sc, "nameMagician", $.add("magician", $.gm($.get($sc, "battle_mc"), "depthObj")));
    t1 = $.cm($.get($sc, "battle_mc"), "attachMovie", [$.gm($.gm($.gm($.get($sc, "armyStock"), 5), $r[2]), 0), $.get($sc, "nameMagician"), $.add($.gm($.get($sc, "battle_mc"), "depthObj"), (5000 * $.n($.gm($.get($sc, "battle_mc"), "armyID"))))]);
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameMagician")), "posY", $.gm($.get($sc, "battle_mc"), "armyID"));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameMagician")), "_x", 0);
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameMagician")), "_y", $.gm($.gm($.get($sc, "battle_mc"), "rowPos"), $.gm($.get($sc, "battle_mc"), "armyID")));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameMagician")), "classLevel", $r[2]);
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameMagician")), "lifeAwal", $.add($.gm($.gm($.gm($.get($sc, "armyStock"), 5), $r[2]), 1), (2.5 * $.n($.gm($.get($sc, "townMilStat"), 2)))));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameMagician")), "life", $.gm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameMagician")), "lifeAwal"));
    t2 = $.gm($.get($sc, "battle_mc"), $.get($sc, "nameMagician"));
    t3 = $.gm($.gm($.gm($.get($sc, "armyStock"), 5), $r[2]), 2);
    t4 = $.cf($sc, "hitungBarrack", []);
    $.sm(t2, "att", $.add(t3, t4));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameMagician")), "def", $.add($.gm($.gm($.gm($.get($sc, "armyStock"), 5), $r[2]), 3), $.gm($.get($sc, "townMilStat"), 1)));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameMagician")), "spd", $.gm($.gm($.gm($.get($sc, "armyStock"), 5), $r[2]), 4));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameMagician")), "v", $.gm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameMagician")), "spd"));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameMagician")), "timer", 50);
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameMagician")), "jedaAwal", 50);
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameMagician")), "jeda", $.gm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameMagician")), "jedaAwal"));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameMagician")), "cacheAsBitmap", true);
    t5 = $.cm($.gm($.get($sc, "battle_mc"), "magicianList"), "push", [$.get($sc, "nameMagician")]);
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameMagician")), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, t2, t3, en1, t4, t5, t6, t7, t8, t9;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!$.bool($.get($sc, "habisPerang"))) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t1 = $.delMember($r[1], "onEnterFrame");
      $b = 2; continue;
    case 2:
      if (!!$.bool($.get($sc, "isPaused"))) { $b = 16; continue; }
      $b = 3; continue;
    case 3:
      t3 = $.cm($.gm($r[1], "clip"), "play", []);
      $.sm($r[1], "_x", $.add($.gm($r[1], "_x"), ($.n($.gm($r[1], "v")) * $.n($.get($sc, "gameSpeed")))));
      if (!!$.eq($.gm($r[1], "v"), 0)) { $b = 5; continue; }
      $b = 4; continue;
    case 4:
      t4 = $.cm($r[1], "gotoAndStop", ["walking"]);
      $b = 5; continue;
    case 5:
      en1 = $.enumerate($.gm($.get($sc, "battle_mc"), "enemyObjList"));
      s0 = en1;
      $b = 6; continue;
    case 6:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 8; continue; }
      $b = 7; continue;
    case 7:
      $.set($sc, "index", $r[0]);
      t5 = $.cf($sc, "fightMagic", [$r[1], $.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "enemyObjList"), $.get($sc, "index")))]);
      $b = 6; continue;
    case 8:
      if (!$.bool($.gm($r[1], "standby"))) { $b = 13; continue; }
      $b = 9; continue;
    case 9:
      $.sm($r[1], "timer", ($.n($.gm($r[1], "timer")) - 1));
      t6 = !$.gt($.gm($r[1], "timer"), 0);
      t7 = t6;
      s0 = t6;
      if (t7) { $b = 11; continue; }
      $b = 10; continue;
    case 10:
      s0 = $.eq($.gm($r[1], "timer"), undefined);
      $b = 11; continue;
    case 11:
      if (!$.bool(s0)) { $b = 13; continue; }
      $b = 12; continue;
    case 12:
      $.sm($r[1], "timer", 50);
      $.sm($r[1], "v", $.gm($r[1], "spd"));
      $b = 13; continue;
    case 13:
      $.sm($.gm($.gm($r[1], "life_span"), "span"), "_xscale", (100 * ($.n($.gm($r[1], "life")) / $.n($.gm($r[1], "lifeAwal")))));
      if (!$.gt($.gm($r[1], "_x"), 1300)) { $b = 15; continue; }
      $b = 14; continue;
    case 14:
      t8 = $.cf($sc, "stealResource", [$r[1]]);
      t9 = $.cm($r[1], "removeMovieClip", []);
      $b = 15; continue;
    case 15:
      $b = 18; continue;
    case 16:
      t2 = $.cm($.gm($r[1], "clip"), "stop", []);
      $b = 18; continue;
    case 18: return;
    }
  }));
  }));
    $.def($sc, "deployingUnit", $.fn({"n":"deployingUnit","p":[],"r":4,"f":105}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.sm($.get($sc, "battleSummary"), 1, ($.n($.gm($.get($sc, "battleSummary"), 1)) + 1));
      $.set($sc, "isDeploying", true);
      if (!$.gt($.gm($.gm($r[2], "armyList"), $.gm($r[1], "s")), 0)) { $b = 8; continue; }
      $b = 1; continue;
    case 1:
      t1 = $.cm($r[1], "gotoAndStop", [2]);
      $.sm($r[1], "isChoosen", true);
      $.sm($.gm($r[2], "armyList"), $.gm($r[1], "s"), ($.n($.gm($.gm($r[2], "armyList"), $.gm($r[1], "s"))) - 1));
      $.sm($r[1], "sisa", $.gm($.gm($r[2], "armyList"), $.gm($r[1], "s")));
      $r[3] = 1;
      $b = 2; continue;
    case 2:
      if (!!$.gt($r[3], 4)) { $b = 8; continue; }
      $b = 3; continue;
    case 3:
      $.sm($.gm($.get($sc, "battle_mc"), $.add("row", $r[3])), "enabled", true);
      $.sm($.gm($.get($sc, "battle_mc"), $.add("row", $r[3])), "s", $.gm($r[1], "s"));
      $.sm($.gm($.get($sc, "battle_mc"), $.add("row", $r[3])), "pos", $r[3]);
      $.sm($.gm($.get($sc, "battle_mc"), $.add("row", $r[3])), "who", $r[1]);
      t2 = $.gm($.get($sc, "resourceList"), 2);
      t3 = $.cm($.get($sc, "Math"), "round", [($.n($.gm($.gm($.gm($.get($sc, "armyDescList"), $.get($sc, "s")), 4), 2)) / 2)]);
      if (!!(($.n(t2) - $.n(t3)) < 0)) { $b = 5; continue; }
      $b = 4; continue;
    case 4:
      $.sm($.gm($.get($sc, "battle_mc"), $.add("row", $r[3])), "onRelease", $.fn({"n":"","p":[],"r":4,"f":105}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5, t6, t7, t8, t9, t10;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.set($sc, "isDeploying", false);
      t1 = $.cm($r[1], "gotoAndStop", [1]);
      $.sm($.gm($r[1], "who"), "jeda", 0);
      $.sm($.gm($r[1], "who"), "isChoosen", false);
      t2 = $.cm($.gm($r[1], "who"), "gotoAndStop", [1]);
      $.sm($.get($sc, "battle_mc"), "armyID", $.gm($r[1], "pos"));
      t3 = $.cm($r[2], $.add("summon", $.gm($.get($sc, "tombolSummon"), $.gm($r[1], "s"))), [($.n($.gm($.get($sc, "tempStat"), $.gm($r[1], "s"))) + 1)]);
      t4 = $.get($sc, "resourceList");
      t5 = $.gm($.get($sc, "resourceList"), 2);
      t6 = $.cm($.get($sc, "Math"), "round", [($.n($.gm($.gm($.gm($.get($sc, "armyDescList"), $.gm($r[1], "s")), 4), 2)) / 2)]);
      $.sm(t4, 2, ($.n(t5) - $.n(t6)));
      t7 = $.get($sc, "battleSummary");
      t8 = $.gm($.get($sc, "battleSummary"), 3);
      t9 = $.cm($.get($sc, "Math"), "round", [($.n($.gm($.gm($.gm($.get($sc, "armyDescList"), $.gm($r[1], "s")), 4), 2)) / 2)]);
      $.sm(t7, 3, $.add(t8, t9));
      $r[3] = 1;
      $b = 1; continue;
    case 1:
      if (!!$.gt($r[3], 4)) { $b = 4; continue; }
      $b = 2; continue;
    case 2:
      $.sm($.gm($.get($sc, "battle_mc"), $.add("row", $r[3])), "enabled", false);
      t10 = ($.n($r[3]) + 1);
      $r[3] = t10;
      $b = 1; continue;
    case 4: return;
    }
  }));
      $b = 6; continue;
    case 5:
      $.sm($.get($sc, "resourceList"), 2, 0);
      $b = 6; continue;
    case 6:
      t4 = ($.n($r[3]) + 1);
      $r[3] = t4;
      $b = 2; continue;
    case 8: return;
    }
  }));
    $.def($sc, "fightMeleeExtreme", $.fn({"n":"fightMeleeExtreme","p":[[4,"who"],[3,"target"]],"r":5,"f":41}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      t1 = $.cm($.gm($r[4], "hit"), "hitTest", [$.gm($r[3], "area")]);
      if (!$.bool(t1)) { $b = 5; continue; }
      $b = 1; continue;
    case 1:
      $.sm($r[4], "v", 0);
      t3 = (($.n($.gm($r[3], "_x")) - $.n($.gm($r[4], "_x"))) < 150);
      t4 = !t3;
      s0 = t3;
      if (t4) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      t5 = $.cm($.get($sc, "Math"), "abs", [($.n($.gm($r[3], "_y")) - $.n($.gm($r[4], "_y")))]);
      s0 = !$.gt(t5, 20);
      $b = 3; continue;
    case 3:
      if (!$.bool(s0)) { $b = 5; continue; }
      $b = 4; continue;
    case 4:
      t6 = $.cm($r[4], "gotoAndPlay", ["menyerang"]);
      $b = 5; continue;
    case 5:
      t2 = $.cm($.gm($r[4], "attack"), "hitTest", [$.gm($r[3], "area")]);
      if (!$.bool(t2)) { $b = 10; continue; }
      $b = 6; continue;
    case 6:
      $r[2] = 1;
      $b = 7; continue;
    case 7:
      if (!!$.gt($r[2], 3)) { $b = 9; continue; }
      $b = 8; continue;
    case 8:
      t8 = $.cf($sc, "bloodEffect", [$r[3]]);
      $.sm($.get($sc, "battle_mc"), "depthObj", $.add($.gm($.get($sc, "battle_mc"), "depthObj"), 1));
      t9 = $.cm($.get($sc, "battle_mc"), "attachMovie", [$.add("swordman1_part", $r[2]), $.add("part", $.gm($.get($sc, "battle_mc"), "depthObj")), $.gm($.get($sc, "battle_mc"), "depthObj")]);
      $.sm($.gm($.get($sc, "battle_mc"), $.add("part", $.gm($.get($sc, "battle_mc"), "depthObj"))), "posY", $.gm($r[3], "_y"));
      t10 = $.gm($.get($sc, "battle_mc"), $.add("part", $.gm($.get($sc, "battle_mc"), "depthObj")));
      t11 = $.rand(4);
      $.sm(t10, "vel", (8 + t11));
      t12 = $.gm($.get($sc, "battle_mc"), $.add("part", $.gm($.get($sc, "battle_mc"), "depthObj")));
      t13 = $.rand(6);
      $.sm(t12, "velX", ((-3) + t13));
      t14 = $.gm($.get($sc, "battle_mc"), $.add("part", $.gm($.get($sc, "battle_mc"), "depthObj")));
      t15 = $.rand(10);
      $.sm(t14, "rot", (20 + t15));
      $.sm($.gm($.get($sc, "battle_mc"), $.add("part", $.gm($.get($sc, "battle_mc"), "depthObj"))), "timer", 100);
      $.sm($.gm($.get($sc, "battle_mc"), $.add("part", $.gm($.get($sc, "battle_mc"), "depthObj"))), "_x", $.gm($r[3], "_x"));
      $.sm($.gm($.get($sc, "battle_mc"), $.add("part", $.gm($.get($sc, "battle_mc"), "depthObj"))), "_y", ($.n($.gm($r[3], "_y")) - 100));
      $.sm($.gm($.get($sc, "battle_mc"), $.add("part", $.gm($.get($sc, "battle_mc"), "depthObj"))), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!!$.bool($.get($sc, "isPaused"))) { $b = 8; continue; }
      $b = 1; continue;
    case 1:
      if (!$.gt($.gm($r[1], "_y"), $.gm($r[1], "posY"))) { $b = 6; continue; }
      $b = 2; continue;
    case 2:
      $.sm($r[1], "timer", ($.n($.gm($r[1], "timer")) - 1));
      if (!!$.gt($.gm($r[1], "timer"), 0)) { $b = 5; continue; }
      $b = 3; continue;
    case 3:
      $.sm($r[1], "_alpha", ($.n($.gm($r[1], "_alpha")) - 3));
      if (!!$.gt($.gm($r[1], "_alpha"), 0)) { $b = 5; continue; }
      $b = 4; continue;
    case 4:
      t1 = $.cm($r[1], "removeMovieClip", []);
      t2 = $.delMember($r[1], "onEnterFrame");
      $b = 5; continue;
    case 5:
      $b = 8; continue;
    case 6:
      $.sm($r[1], "vel", ($.n($.gm($r[1], "vel")) - 0.3));
      $.sm($r[1], "_x", $.add($.gm($r[1], "_x"), ($.n($.gm($r[1], "v")) * $.n($.get($sc, "gameSpeed")))));
      $.sm($r[1], "_y", ($.n($.gm($r[1], "_y")) - $.n($.gm($r[1], "vel"))));
      $.sm($r[1], "_rotation", $.add($.gm($r[1], "_rotation"), $.gm($r[1], "rot")));
      $b = 8; continue;
    case 8: return;
    }
  }));
      t16 = ($.n($r[2]) + 1);
      $r[2] = t16;
      $b = 7; continue;
    case 9:
      t7 = $.cm($r[3], "removeMovieClip", []);
      $b = 10; continue;
    case 10:
      if (!$.eq($.gm($r[4], "v"), 0)) { $b = 13; continue; }
      $b = 11; continue;
    case 11:
      $.sm($r[4], "standby", true);
      $b = 13; continue;
    case 13: return;
    }
  }));
    $.def($sc, "fightBigbear", $.fn({"n":"fightBigbear","p":[[1,"who"],[2,"target"]],"r":3,"f":42}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      t1 = $.cm($.gm($r[1], "hit"), "hitTest", [$.gm($r[2], "area")]);
      if (!$.bool(t1)) { $b = 3; continue; }
      $b = 1; continue;
    case 1:
      t3 = $.cm($.get($sc, "Math"), "abs", [($.n($.gm($r[2], "_y")) - $.n($.gm($r[1], "_y")))]);
      if (!!$.gt(t3, 30)) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      $.sm($r[1], "_x", ($.n($.gm($r[1], "_x")) - $.n($.gm($r[1], "v"))));
      $.sm($r[1], "v", 0);
      t5 = $.cm($r[1], "gotoAndPlay", ["menyerang"]);
      $b = 3; continue;
    case 3:
      t2 = $.cm($.gm($r[1], "attack"), "hitTest", [$.gm($r[2], "area")]);
      if (!$.bool(t2)) { $b = 18; continue; }
      $b = 4; continue;
    case 4:
      t4 = $.cm($.get($sc, "Math"), "abs", [($.n($.gm($r[2], "_y")) - $.n($.gm($r[1], "_y")))]);
      if (!!$.gt(t4, 30)) { $b = 18; continue; }
      $b = 5; continue;
    case 5:
      t6 = $.cf($sc, "soundFX", [$.gm($r[1], "soundFX")]);
      t7 = $.cf($sc, "bloodEffect", [$r[2]]);
      t8 = $.cf($sc, "smokeEffect", [$r[1]]);
      if (!(($.n($.gm($r[1], "att")) - $.n($.gm($r[2], "def"))) > 0)) { $b = 7; continue; }
      $b = 6; continue;
    case 6:
      $.sm($r[1], "damage", ($.n($.gm($r[1], "att")) - $.n($.gm($r[2], "def"))));
      $b = 8; continue;
    case 7:
      $.sm($r[1], "damage", 1);
      $b = 8; continue;
    case 8:
      if (!(($.n($.gm($r[2], "life")) - $.n($.gm($r[1], "damage"))) > 0)) { $b = 13; continue; }
      $b = 9; continue;
    case 9:
      if (!$.gt($.gm($r[1], "damage"), 0)) { $b = 11; continue; }
      $b = 10; continue;
    case 10:
      $.sm($r[2], "life", ($.n($.gm($r[2], "life")) - $.n($.gm($r[1], "damage"))));
      $b = 12; continue;
    case 11:
      $.sm($r[2], "life", ($.n($.gm($r[2], "life")) - 1));
      $b = 12; continue;
    case 12:
      $b = 18; continue;
    case 13:
      if (!$.eq($.gm($r[1], "kills"), undefined)) { $b = 15; continue; }
      $b = 14; continue;
    case 14:
      $.sm($r[1], "kills", 0);
      $b = 15; continue;
    case 15:
      $.sm($r[1], "kills", ($.n($.gm($r[1], "kills")) + 1));
      if (!$.eq(($.n($.gm($r[1], "kills")) % 3), 1)) { $b = 17; continue; }
      $b = 16; continue;
    case 16:
      t11 = $.cf($sc, "rage", [$r[1]]);
      $b = 17; continue;
    case 17:
      $.sm($r[2], "isDead", true);
      $.sm($r[2], "v", 0);
      $.sm($r[2], "life", 0);
      t9 = $.cm($r[2], "gotoAndStop", ["dead"]);
      t10 = $.delMember($r[2], "onEnterFrame");
      $b = 18; continue;
    case 18:
      if (!$.eq($.gm($r[1], "v"), 0)) { $b = 21; continue; }
      $b = 19; continue;
    case 19:
      $.sm($r[1], "standby", true);
      $b = 21; continue;
    case 21: return;
    }
  }));
    $.def($sc, "fightSharpwolf", $.fn({"n":"fightSharpwolf","p":[[0,"who"],[0,"target"]],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      t1 = $.cm($.gm($.get($sc, "who"), "hit"), "hitTest", [$.gm($.get($sc, "target"), "area")]);
      if (!$.bool(t1)) { $b = 7; continue; }
      $b = 1; continue;
    case 1:
      t3 = $.cm($.get($sc, "Math"), "abs", [($.n($.gm($.get($sc, "target"), "_y")) - $.n($.gm($.get($sc, "who"), "_y")))]);
      if (!!$.gt(t3, 30)) { $b = 7; continue; }
      $b = 2; continue;
    case 2:
      t5 = (($.n($.gm($.get($sc, "target"), "_x")) - $.n($.gm($.get($sc, "who"), "_x"))) < 400);
      t6 = !t5;
      s0 = t5;
      if (t6) { $b = 4; continue; }
      $b = 3; continue;
    case 3:
      s0 = (($.n($.gm($.get($sc, "target"), "_x")) - $.n($.gm($.get($sc, "who"), "_x"))) > 150);
      $b = 4; continue;
    case 4:
      if (!$.bool(s0)) { $b = 6; continue; }
      $b = 5; continue;
    case 5:
      $.sm($.get($sc, "who"), "_x", ($.n($.gm($.get($sc, "who"), "_x")) - $.n($.gm($.get($sc, "who"), "v"))));
      $.sm($.get($sc, "who"), "v", 0);
      t13 = $.cm($.get($sc, "who"), "gotoAndPlay", ["menyerang2"]);
      $b = 7; continue;
    case 6:
      $.sm($.get($sc, "who"), "_x", ($.n($.gm($.get($sc, "who"), "_x")) - $.n($.gm($.get($sc, "who"), "v"))));
      $.sm($.get($sc, "who"), "v", 0);
      t12 = $.cm($.get($sc, "who"), "gotoAndPlay", ["menyerang1"]);
      $b = 7; continue;
    case 7:
      t2 = $.cm($.gm($.get($sc, "who"), "attack"), "hitTest", [$.gm($.get($sc, "target"), "area")]);
      if (!$.bool(t2)) { $b = 10; continue; }
      $b = 8; continue;
    case 8:
      if (!!$.bool($.gm($.get($sc, "who"), "attacking"))) { $b = 10; continue; }
      $b = 9; continue;
    case 9:
      $.sm($.get($sc, "battle_mc"), "depthObj", $.add($.gm($.get($sc, "battle_mc"), "depthObj"), 1));
      $.set($sc, "nameKnife", $.add("knife", $.gm($.get($sc, "battle_mc"), "depthObj")));
      t9 = $.cm($.get($sc, "battle_mc"), "attachMovie", ["mc_knife", $.get($sc, "nameKnife"), $.add($.gm($.get($sc, "battle_mc"), "depthObj"), (5000 * $.n($.gm($.get($sc, "who"), "posY"))))]);
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameKnife")), "_x", $.add($.gm($.get($sc, "who"), "_x"), 20));
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameKnife")), "_y", ($.n($.gm($.get($sc, "who"), "_y")) - 50));
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameKnife")), "spd", 30);
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameKnife")), "batasY", $.gm($.get($sc, "who"), "_y"));
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameKnife")), "difX", ($.n($.gm($.get($sc, "target"), "_x")) - $.n($.gm($.get($sc, "who"), "_x"))));
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameKnife")), "difY", ($.n($.gm($.get($sc, "target"), "_y")) - $.n($.gm($.get($sc, "who"), "_y"))));
      t10 = $.gm($.get($sc, "battle_mc"), $.get($sc, "nameKnife"));
      t11 = $.cm($.get($sc, "Math"), "atan2", [$.gm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameKnife")), "difY"), $.gm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameKnife")), "difX")]);
      $.sm(t10, "_rotation", (57.29577951308232 * $.n(t11)));
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameKnife")), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!!$.bool($.get($sc, "isPaused"))) { $b = 15; continue; }
      $b = 1; continue;
    case 1:
      t1 = $r[1];
      t2 = $.gm($r[1], "_x");
      t3 = $.gm($r[1], "spd");
      t4 = $.cm($.get($sc, "Math"), "cos", [(($.n($.gm($r[1], "_rotation")) / 180) * 3.141592653589793)]);
      $.sm(t1, "_x", $.add(t2, ($.n(t3) * $.n(t4))));
      t5 = $r[1];
      t6 = $.gm($r[1], "_y");
      t7 = $.gm($r[1], "spd");
      t8 = $.cm($.get($sc, "Math"), "sin", [(($.n($.gm($r[1], "_rotation")) / 180) * 3.141592653589793)]);
      $.sm(t5, "_y", $.add(t6, ($.n(t7) * $.n(t8))));
      t9 = $.cm($r[1], "hitTest", [$.gm($.get($sc, "target"), "area")]);
      if (!$.bool(t9)) { $b = 12; continue; }
      $b = 2; continue;
    case 2:
      if (!(($.n($.gm($.get($sc, "who"), "att")) - $.n($.gm($.get($sc, "target"), "def"))) > 0)) { $b = 4; continue; }
      $b = 3; continue;
    case 3:
      $.sm($.get($sc, "who"), "damage", ($.n($.gm($.get($sc, "who"), "att")) - $.n($.gm($.get($sc, "target"), "def"))));
      $b = 5; continue;
    case 4:
      $.sm($.get($sc, "who"), "damage", 1);
      $b = 5; continue;
    case 5:
      t11 = $.cf($sc, "bloodEffect", [$.get($sc, "target")]);
      if (!(($.n($.gm($.get($sc, "target"), "life")) - $.n($.gm($.get($sc, "who"), "damage"))) > 0)) { $b = 10; continue; }
      $b = 6; continue;
    case 6:
      if (!$.gt($.gm($.get($sc, "who"), "damage"), 0)) { $b = 8; continue; }
      $b = 7; continue;
    case 7:
      $.sm($.get($sc, "target"), "life", ($.n($.gm($.get($sc, "target"), "life")) - $.n($.gm($.get($sc, "who"), "damage"))));
      $b = 9; continue;
    case 8:
      $.sm($.get($sc, "target"), "life", ($.n($.gm($.get($sc, "target"), "life")) - 1));
      $b = 9; continue;
    case 9:
      $b = 11; continue;
    case 10:
      $.sm($.get($sc, "target"), "isDead", true);
      $.sm($.get($sc, "target"), "v", 0);
      $.sm($.get($sc, "target"), "life", 0);
      t12 = $.cm($.get($sc, "target"), "gotoAndStop", ["dead"]);
      t13 = $.delMember($.get($sc, "target"), "onEnterFrame");
      $b = 11; continue;
    case 11:
      t14 = $.cm($r[1], "removeMovieClip", []);
      $b = 12; continue;
    case 12:
      if (!$.gt($.gm($r[1], "_x"), $.gm($.get($sc, "battle_mc"), "_width"))) { $b = 15; continue; }
      $b = 13; continue;
    case 13:
      t10 = $.cm($r[1], "removeMovieClip", []);
      $b = 15; continue;
    case 15: return;
    }
  }));
      $.sm($.get($sc, "who"), "attacking", true);
      $b = 10; continue;
    case 10:
      t4 = $.cm($.gm($.get($sc, "who"), "attack2"), "hitTest", [$.gm($.get($sc, "target"), "area")]);
      if (!$.bool(t4)) { $b = 20; continue; }
      $b = 11; continue;
    case 11:
      t7 = $.cf($sc, "soundFX", ["sword1"]);
      t8 = $.cf($sc, "bloodEffect", [$.get($sc, "target")]);
      if (!(($.n($.gm($.get($sc, "who"), "att")) - $.n($.gm($.get($sc, "target"), "def"))) > 0)) { $b = 13; continue; }
      $b = 12; continue;
    case 12:
      $.sm($.get($sc, "who"), "damage", ($.n($.gm($.get($sc, "who"), "att")) - $.n($.gm($.get($sc, "target"), "def"))));
      $b = 14; continue;
    case 13:
      $.sm($.get($sc, "who"), "damage", 1);
      $b = 14; continue;
    case 14:
      if (!(($.n($.gm($.get($sc, "target"), "life")) - $.n($.gm($.get($sc, "who"), "damage"))) > 0)) { $b = 19; continue; }
      $b = 15; continue;
    case 15:
      if (!$.gt($.gm($.get($sc, "who"), "damage"), 0)) { $b = 17; continue; }
      $b = 16; continue;
    case 16:
      $.sm($.get($sc, "target"), "life", ($.n($.gm($.get($sc, "target"), "life")) - $.n($.gm($.get($sc, "who"), "damage"))));
      $b = 18; continue;
    case 17:
      $.sm($.get($sc, "target"), "life", ($.n($.gm($.get($sc, "target"), "life")) - 1));
      $b = 18; continue;
    case 18:
      $b = 20; continue;
    case 19:
      $.sm($.get($sc, "target"), "isDead", true);
      $.sm($.get($sc, "target"), "v", 0);
      $.sm($.get($sc, "target"), "life", 0);
      t14 = $.cm($.get($sc, "target"), "gotoAndStop", ["dead"]);
      t15 = $.delMember($.get($sc, "target"), "onEnterFrame");
      $b = 20; continue;
    case 20:
      if (!$.eq($.gm($.get($sc, "who"), "v"), 0)) { $b = 23; continue; }
      $b = 21; continue;
    case 21:
      $.sm($.get($sc, "who"), "standby", true);
      $b = 23; continue;
    case 23: return;
    }
  }));
    $.def($sc, "fightBroadeagle", $.fn({"n":"fightBroadeagle","p":[[1,"who"],[2,"target"]],"r":3,"f":42}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5, t6, t7, t8;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      t1 = $.cm($.gm($r[1], "hit"), "hitTest", [$.gm($r[2], "area")]);
      if (!$.bool(t1)) { $b = 3; continue; }
      $b = 1; continue;
    case 1:
      if (!!$.bool($.gm($r[1], "isAttacking"))) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      t3 = $.cf($sc, "soundFX", [$.gm($r[1], "soundFX")]);
      $.sm($r[1], "_x", ($.n($.gm($r[1], "_x")) - $.n($.gm($r[1], "v"))));
      $.sm($r[1], "v", 0);
      t4 = $.cm($r[1], "gotoAndPlay", ["menyerang"]);
      $.sm($r[1], "isAttacking", true);
      $b = 3; continue;
    case 3:
      t2 = $.cm($.gm($r[1], "attack"), "hitTest", [$.gm($r[2], "area")]);
      if (!$.bool(t2)) { $b = 15; continue; }
      $b = 4; continue;
    case 4:
      if (!$.bool($.gm($r[1], "isAttacking"))) { $b = 15; continue; }
      $b = 5; continue;
    case 5:
      t5 = $.cf($sc, "bloodEffect", [$r[2]]);
      t6 = $.cf($sc, "explosionEffect", [$r[2]]);
      if (!(($.n($.gm($r[1], "att")) - $.n($.gm($r[2], "def"))) > 0)) { $b = 7; continue; }
      $b = 6; continue;
    case 6:
      $.sm($r[1], "damage", ($.n($.gm($r[1], "att")) - $.n($.gm($r[2], "def"))));
      $b = 8; continue;
    case 7:
      $.sm($r[1], "damage", 1);
      $b = 8; continue;
    case 8:
      if (!(($.n($.gm($r[2], "life")) - $.n($.gm($r[1], "damage"))) > 0)) { $b = 13; continue; }
      $b = 9; continue;
    case 9:
      if (!$.gt($.gm($r[1], "damage"), 0)) { $b = 11; continue; }
      $b = 10; continue;
    case 10:
      $.sm($r[2], "life", ($.n($.gm($r[2], "life")) - $.n($.gm($r[1], "damage"))));
      $b = 12; continue;
    case 11:
      $.sm($r[2], "life", ($.n($.gm($r[2], "life")) - 1));
      $b = 12; continue;
    case 12:
      $b = 14; continue;
    case 13:
      $.sm($r[2], "isDead", true);
      $.sm($r[2], "v", 0);
      $.sm($r[2], "life", 0);
      t7 = $.cm($r[2], "gotoAndStop", ["dead"]);
      t8 = $.delMember($r[2], "onEnterFrame");
      $b = 14; continue;
    case 14:
      $.sm($r[1], "isAttacking", false);
      $b = 15; continue;
    case 15:
      if (!$.eq($.gm($r[1], "_currentframe"), 1)) { $b = 17; continue; }
      $b = 16; continue;
    case 16:
      $.sm($r[1], "isAttacking", false);
      $b = 17; continue;
    case 17:
      if (!$.eq($.gm($r[1], "v"), 0)) { $b = 20; continue; }
      $b = 18; continue;
    case 18:
      $.sm($r[1], "standby", true);
      $b = 20; continue;
    case 20: return;
    }
  }));
    $.def($sc, "fightGreatwinstar", $.fn({"n":"fightGreatwinstar","p":[[0,"who"],[0,"target"]],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      t1 = $.cm($.gm($.get($sc, "who"), "hit"), "hitTest", [$.gm($.get($sc, "target"), "area")]);
      if (!$.bool(t1)) { $b = 9; continue; }
      $b = 1; continue;
    case 1:
      if (!!(($.n($.gm($.get($sc, "target"), "_x")) - $.n($.gm($.get($sc, "who"), "_x"))) < 400)) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      t6 = $.cm($.get($sc, "who"), "gotoAndPlay", ["menyerang3"]);
      $b = 8; continue;
    case 3:
      t4 = (($.n($.gm($.get($sc, "target"), "_x")) - $.n($.gm($.get($sc, "who"), "_x"))) < 400);
      t5 = !t4;
      s0 = t4;
      if (t5) { $b = 5; continue; }
      $b = 4; continue;
    case 4:
      s0 = (($.n($.gm($.get($sc, "target"), "_x")) - $.n($.gm($.get($sc, "who"), "_x"))) > 150);
      $b = 5; continue;
    case 5:
      if (!$.bool(s0)) { $b = 7; continue; }
      $b = 6; continue;
    case 6:
      t17 = $.cm($.get($sc, "who"), "gotoAndPlay", ["menyerang2"]);
      $b = 8; continue;
    case 7:
      t16 = $.cm($.get($sc, "who"), "gotoAndPlay", ["menyerang1"]);
      $b = 8; continue;
    case 8:
      $.sm($.get($sc, "who"), "_x", ($.n($.gm($.get($sc, "who"), "_x")) - $.n($.gm($.get($sc, "who"), "v"))));
      $b = 9; continue;
    case 9:
      t2 = $.cm($.gm($.get($sc, "who"), "attack"), "hitTest", [$.gm($.get($sc, "target"), "area")]);
      if (!$.bool(t2)) { $b = 12; continue; }
      $b = 10; continue;
    case 10:
      if (!!$.bool($.gm($.get($sc, "who"), "attacking"))) { $b = 12; continue; }
      $b = 11; continue;
    case 11:
      $.sm($.get($sc, "battle_mc"), "depthObj", $.add($.gm($.get($sc, "battle_mc"), "depthObj"), 1));
      $.set($sc, "nameKnife", $.add("knife", $.gm($.get($sc, "battle_mc"), "depthObj")));
      t8 = $.cm($.get($sc, "battle_mc"), "attachMovie", ["mc_spear", $.get($sc, "nameKnife"), $.add($.gm($.get($sc, "battle_mc"), "depthObj"), (5000 * $.n($.gm($.get($sc, "who"), "posY"))))]);
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameKnife")), "_x", $.add($.gm($.get($sc, "who"), "_x"), 20));
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameKnife")), "_y", ($.n($.gm($.get($sc, "who"), "_y")) - 80));
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameKnife")), "spd", 40);
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameKnife")), "batasY", $.gm($.get($sc, "who"), "_y"));
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameKnife")), "difX", ($.n($.gm($.get($sc, "target"), "_x")) - $.n($.gm($.get($sc, "who"), "_x"))));
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameKnife")), "difY", (($.n($.gm($.get($sc, "target"), "_y")) - 30) - ($.n($.gm($.get($sc, "who"), "_y")) - 80)));
      t9 = $.gm($.get($sc, "battle_mc"), $.get($sc, "nameKnife"));
      t10 = $.cm($.get($sc, "Math"), "atan2", [$.gm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameKnife")), "difY"), $.gm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameKnife")), "difX")]);
      $.sm(t9, "_rotation", (57.29577951308232 * $.n(t10)));
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameKnife")), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!!$.bool($.get($sc, "isPaused"))) { $b = 16; continue; }
      $b = 1; continue;
    case 1:
      t1 = $r[1];
      t2 = $.gm($r[1], "_x");
      t3 = $.gm($r[1], "spd");
      t4 = $.cm($.get($sc, "Math"), "cos", [(($.n($.gm($r[1], "_rotation")) / 180) * 3.141592653589793)]);
      $.sm(t1, "_x", $.add(t2, ($.n(t3) * $.n(t4))));
      t5 = $r[1];
      t6 = $.gm($r[1], "_y");
      t7 = $.gm($r[1], "spd");
      t8 = $.cm($.get($sc, "Math"), "sin", [(($.n($.gm($r[1], "_rotation")) / 180) * 3.141592653589793)]);
      $.sm(t5, "_y", $.add(t6, ($.n(t7) * $.n(t8))));
      t9 = $.cm($r[1], "hitTest", [$.gm($.get($sc, "target"), "area")]);
      if (!$.bool(t9)) { $b = 11; continue; }
      $b = 2; continue;
    case 2:
      if (!(($.n($.gm($.get($sc, "who"), "att")) - $.n($.gm($.get($sc, "target"), "def"))) > 0)) { $b = 4; continue; }
      $b = 3; continue;
    case 3:
      $.sm($.get($sc, "who"), "damage", ($.n($.gm($.get($sc, "who"), "att")) - $.n($.gm($.get($sc, "target"), "def"))));
      $b = 5; continue;
    case 4:
      $.sm($.get($sc, "who"), "damage", 1);
      $b = 5; continue;
    case 5:
      t13 = $.cf($sc, "bloodEffect", [$.get($sc, "target")]);
      if (!(($.n($.gm($.get($sc, "target"), "life")) - $.n($.gm($.get($sc, "who"), "damage"))) > 0)) { $b = 10; continue; }
      $b = 6; continue;
    case 6:
      if (!$.gt($.gm($.get($sc, "who"), "damage"), 0)) { $b = 8; continue; }
      $b = 7; continue;
    case 7:
      $.sm($.get($sc, "target"), "life", ($.n($.gm($.get($sc, "target"), "life")) - $.n($.gm($.get($sc, "who"), "damage"))));
      $b = 9; continue;
    case 8:
      $.sm($.get($sc, "target"), "life", ($.n($.gm($.get($sc, "target"), "life")) - 1));
      $b = 9; continue;
    case 9:
      $b = 11; continue;
    case 10:
      $.sm($.get($sc, "target"), "isDead", true);
      $.sm($.get($sc, "target"), "v", 0);
      $.sm($.get($sc, "target"), "life", 0);
      t14 = $.cm($.get($sc, "target"), "gotoAndStop", ["dead"]);
      t15 = $.delMember($.get($sc, "target"), "onEnterFrame");
      $b = 11; continue;
    case 11:
      if (!$.gt($.gm($r[1], "_y"), $.gm($.get($sc, "who"), "_y"))) { $b = 13; continue; }
      $b = 12; continue;
    case 12:
      t10 = $.cm($r[1], "gotoAndStop", [2]);
      t11 = $.delMember($r[1], "onEnterFrame");
      $.sm($r[1], "countDown", 200);
      $.sm($r[1], "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.sm($r[1], "countDown", ($.n($.gm($r[1], "countDown")) - 1));
      if (!!$.gt($.gm($r[1], "countDown"), 0)) { $b = 3; continue; }
      $b = 1; continue;
    case 1:
      t1 = $.cm($r[1], "removeMovieClip", []);
      $b = 3; continue;
    case 3: return;
    }
  }));
      $b = 13; continue;
    case 13:
      if (!$.gt($.gm($r[1], "_x"), $.gm($.get($sc, "battle_mc"), "_width"))) { $b = 16; continue; }
      $b = 14; continue;
    case 14:
      t12 = $.cm($r[1], "removeMovieClip", []);
      $b = 16; continue;
    case 16: return;
    }
  }));
      $.sm($.get($sc, "who"), "attacking", true);
      $b = 12; continue;
    case 12:
      t3 = $.cm($.gm($.get($sc, "who"), "attack3"), "hitTest", [$.gm($.get($sc, "target"), "area")]);
      if (!$.bool(t3)) { $b = 15; continue; }
      $b = 13; continue;
    case 13:
      if (!!$.bool($.gm($.get($sc, "who"), "attacking"))) { $b = 15; continue; }
      $b = 14; continue;
    case 14:
      t13 = $.cf($sc, "soundFX", ["arrow1"]);
      $.sm($.get($sc, "battle_mc"), "depthObj", $.add($.gm($.get($sc, "battle_mc"), "depthObj"), 1));
      $.set($sc, "nameArrow", $.add("arrow", $.gm($.get($sc, "battle_mc"), "depthObj")));
      t14 = $.cm($.get($sc, "battle_mc"), "attachMovie", ["mc_arrow2", $.get($sc, "nameArrow"), $.add($.gm($.get($sc, "battle_mc"), "depthObj"), (5000 * $.n($.gm($.get($sc, "who"), "posY"))))]);
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "_x", $.gm($.get($sc, "who"), "_x"));
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "_y", ($.n($.gm($.get($sc, "who"), "_y")) - 80));
      t15 = $.cm($.gm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "arrow_mc"), "gotoAndStop", [$.gm($.get($sc, "who"), "classLevel")]);
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "spd", 30);
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "velY", 5);
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "batasY", $.gm($.gm($.get($sc, "battle_mc"), "rowPos"), $.add($.gm($.get($sc, "target"), "posY"), 1)));
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "cacheAsBitmap", true);
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!!$.bool($.get($sc, "isPaused"))) { $b = 15; continue; }
      $b = 1; continue;
    case 1:
      t1 = $.cm($.gm($r[1], "clip"), "play", []);
      $.sm($r[1], "velY", ($.n($.gm($r[1], "velY")) - 1));
      $.sm($r[1], "_x", $.add($.gm($r[1], "_x"), $.gm($r[1], "spd")));
      $.sm($r[1], "_y", ($.n($.gm($r[1], "_y")) - $.n($.gm($r[1], "velY"))));
      t2 = $r[1];
      t3 = $.cm($.get($sc, "Math"), "atan2", [$.gm($r[1], "velY"), $.gm($r[1], "spd")]);
      $.sm(t2, "_rotation", (((0 - $.n(t3)) * 180) / 3.141592653589793));
      if (!!$.lt($.gm($r[1], "_y"), $.gm($r[1], "batasY"))) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      t5 = $.cm($r[1], "gotoAndStop", [2]);
      t6 = $.delMember($r[1], "onEnterFrame");
      t7 = $r[1];
      t8 = $.cf($sc, "setInterval", [$.get($sc, "hapusObject"), 1000, $r[1]]);
      $.sm(t7, "hapus", t8);
      $b = 3; continue;
    case 3:
      t4 = $.cm($r[1], "hitTest", [$.gm($.get($sc, "target"), "area")]);
      if (!$.bool(t4)) { $b = 15; continue; }
      $b = 4; continue;
    case 4:
      if (!(($.n($.gm($.get($sc, "who"), "att")) - $.n($.gm($.get($sc, "target"), "def"))) > 0)) { $b = 6; continue; }
      $b = 5; continue;
    case 5:
      $.sm($.get($sc, "who"), "damage", ($.n($.gm($.get($sc, "who"), "att")) - $.n($.gm($.get($sc, "target"), "def"))));
      $b = 7; continue;
    case 6:
      $.sm($.get($sc, "who"), "damage", 1);
      $b = 7; continue;
    case 7:
      t9 = $.cf($sc, "bloodEffect", [$.get($sc, "target")]);
      if (!(($.n($.gm($.get($sc, "target"), "life")) - $.n($.gm($.get($sc, "who"), "damage"))) > 0)) { $b = 12; continue; }
      $b = 8; continue;
    case 8:
      if (!$.gt($.gm($.get($sc, "who"), "damage"), 0)) { $b = 10; continue; }
      $b = 9; continue;
    case 9:
      $.sm($.get($sc, "target"), "life", ($.n($.gm($.get($sc, "target"), "life")) - $.n($.gm($.get($sc, "who"), "damage"))));
      $b = 11; continue;
    case 10:
      $.sm($.get($sc, "target"), "life", ($.n($.gm($.get($sc, "target"), "life")) - 1));
      $b = 11; continue;
    case 11:
      $b = 13; continue;
    case 12:
      $.sm($.get($sc, "target"), "isDead", true);
      $.sm($.get($sc, "target"), "v", 0);
      $.sm($.get($sc, "target"), "life", 0);
      t10 = $.cm($.get($sc, "target"), "gotoAndStop", ["dead"]);
      t11 = $.delMember($.get($sc, "target"), "onEnterFrame");
      $b = 13; continue;
    case 13:
      t12 = $.delMember($r[1], "onEnterFrame");
      t13 = $.cm($r[1], "removeMovieClip", []);
      $b = 15; continue;
    case 15: return;
    }
  }));
      $.sm($.get($sc, "who"), "attacking", true);
      $b = 15; continue;
    case 15:
      t7 = $.cm($.gm($.get($sc, "who"), "attack2"), "hitTest", [$.gm($.get($sc, "target"), "area")]);
      if (!$.bool(t7)) { $b = 25; continue; }
      $b = 16; continue;
    case 16:
      t11 = $.cf($sc, "soundFX", ["sword1"]);
      t12 = $.cf($sc, "bloodEffect", [$.get($sc, "target")]);
      if (!(($.n($.gm($.get($sc, "who"), "att")) - $.n($.gm($.get($sc, "target"), "def"))) > 0)) { $b = 18; continue; }
      $b = 17; continue;
    case 17:
      $.sm($.get($sc, "who"), "damage", ($.n($.gm($.get($sc, "who"), "att")) - $.n($.gm($.get($sc, "target"), "def"))));
      $b = 19; continue;
    case 18:
      $.sm($.get($sc, "who"), "damage", 1);
      $b = 19; continue;
    case 19:
      if (!(($.n($.gm($.get($sc, "target"), "life")) - $.n($.gm($.get($sc, "who"), "damage"))) > 0)) { $b = 24; continue; }
      $b = 20; continue;
    case 20:
      if (!$.gt($.gm($.get($sc, "who"), "damage"), 0)) { $b = 22; continue; }
      $b = 21; continue;
    case 21:
      $.sm($.get($sc, "target"), "life", ($.n($.gm($.get($sc, "target"), "life")) - $.n($.gm($.get($sc, "who"), "damage"))));
      $b = 23; continue;
    case 22:
      $.sm($.get($sc, "target"), "life", ($.n($.gm($.get($sc, "target"), "life")) - 1));
      $b = 23; continue;
    case 23:
      $b = 25; continue;
    case 24:
      $.sm($.get($sc, "target"), "isDead", true);
      $.sm($.get($sc, "target"), "v", 0);
      $.sm($.get($sc, "target"), "life", 0);
      t18 = $.cm($.get($sc, "target"), "gotoAndStop", ["dead"]);
      t19 = $.delMember($.get($sc, "target"), "onEnterFrame");
      $b = 25; continue;
    case 25:
      if (!$.eq($.gm($.get($sc, "who"), "_currentframe"), 1)) { $b = 28; continue; }
      $b = 26; continue;
    case 26:
      $.sm($.get($sc, "who"), "attacking", false);
      $b = 28; continue;
    case 28: return;
    }
  }));
    $.def($sc, "summonBigbear", $.fn({"n":"summonBigbear","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    $.sm($.get($sc, "battle_mc"), "battlePosPanglima", ($.n($.gm($.get($sc, "battle_mc"), "battlePosPanglima")) + 1));
    $.sm($.get($sc, "battle_mc"), "depthObj", $.add($.gm($.get($sc, "battle_mc"), "depthObj"), 1));
    t1 = $.cm($.get($sc, "battle_mc"), "attachMovie", ["mc_bigbear", "bigbear", $.add($.gm($.get($sc, "battle_mc"), "depthObj"), (5000 * $.n($.gm($.gm($.gm($.get($sc, "battle_mc"), "rowPosPanglima"), $.gm($.get($sc, "battle_mc"), "battlePosPanglima")), 1))))]);
    $.sm($.gm($.get($sc, "battle_mc"), "bigbear"), "posY", 2);
    $.sm($.gm($.get($sc, "battle_mc"), "bigbear"), "armyNum", 3);
    $.sm($.gm($.get($sc, "battle_mc"), "bigbear"), "_x", 350);
    $.sm($.gm($.get($sc, "battle_mc"), "bigbear"), "_y", $.gm($.gm($.gm($.get($sc, "battle_mc"), "rowPosPanglima"), $.gm($.get($sc, "battle_mc"), "battlePosPanglima")), 0));
    $.sm($.gm($.get($sc, "battle_mc"), "bigbear"), "lifeAwal", $.add($.gm($.gm($.gm($.get($sc, "comList"), 3), 4), 0), ($.n($.gm($.gm($.get($sc, "objectMap13"), 2), 0)) * 10)));
    $.sm($.gm($.get($sc, "battle_mc"), "bigbear"), "life", $.gm($.gm($.get($sc, "battle_mc"), "bigbear"), "lifeAwal"));
    $.sm($.gm($.get($sc, "battle_mc"), "bigbear"), "att", $.add($.gm($.gm($.gm($.get($sc, "comList"), 3), 4), 1), $.gm($.gm($.get($sc, "objectMap13"), 2), 0)));
    $.sm($.gm($.get($sc, "battle_mc"), "bigbear"), "def", $.add($.gm($.gm($.gm($.get($sc, "comList"), 3), 4), 2), $.gm($.gm($.get($sc, "objectMap13"), 2), 0)));
    $.sm($.gm($.get($sc, "battle_mc"), "bigbear"), "spd", $.gm($.gm($.gm($.get($sc, "comList"), 3), 4), 3));
    $.sm($.gm($.get($sc, "battle_mc"), "bigbear"), "v", $.gm($.gm($.get($sc, "battle_mc"), "bigbear"), "spd"));
    $.sm($.gm($.get($sc, "battle_mc"), "bigbear"), "timer", 10);
    t2 = $.cm($.gm($.get($sc, "battle_mc"), "spearmanList"), "push", ["bigbear"]);
    $.sm($.gm($.get($sc, "battle_mc"), "bigbear"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, t2, t3, en1, t4, t5, t6, t7, t8;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!$.bool($.get($sc, "habisPerang"))) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t1 = $.delMember($r[1], "onEnterFrame");
      $b = 2; continue;
    case 2:
      if (!!$.bool($.get($sc, "isPaused"))) { $b = 17; continue; }
      $b = 3; continue;
    case 3:
      t3 = $.cm($.gm($r[1], "clip"), "play", []);
      $.sm($r[1], "frontX", $.add($.gm($r[1], "_x"), 50));
      $.sm($r[1], "frontY", $.gm($r[1], "_y"));
      if (!!$.gt($.gm($.get($sc, "armyList"), $.gm($r[1], "armyNum")), 0)) { $b = 11; continue; }
      $b = 4; continue;
    case 4:
      $.sm($r[1], "_x", $.add($.gm($r[1], "_x"), ($.n($.gm($r[1], "v")) * $.n($.get($sc, "gameSpeed")))));
      if (!!$.eq($.gm($r[1], "v"), 0)) { $b = 6; continue; }
      $b = 5; continue;
    case 5:
      t4 = $.cm($r[1], "gotoAndStop", ["walking"]);
      $b = 6; continue;
    case 6:
      if (!$.bool($.gm($r[1], "standby"))) { $b = 11; continue; }
      $b = 7; continue;
    case 7:
      $.sm($r[1], "timer", ($.n($.gm($r[1], "timer")) - 1));
      t6 = !$.gt($.gm($r[1], "timer"), 0);
      t7 = t6;
      s0 = t6;
      if (t7) { $b = 9; continue; }
      $b = 8; continue;
    case 8:
      s0 = $.eq($.gm($r[1], "timer"), undefined);
      $b = 9; continue;
    case 9:
      if (!$.bool(s0)) { $b = 11; continue; }
      $b = 10; continue;
    case 10:
      $.sm($r[1], "timer", 50);
      $.sm($r[1], "v", $.gm($r[1], "spd"));
      $b = 11; continue;
    case 11:
      en1 = $.enumerate($.gm($.get($sc, "battle_mc"), "enemyObjList"));
      s0 = en1;
      $b = 12; continue;
    case 12:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 14; continue; }
      $b = 13; continue;
    case 13:
      $.set($sc, "index", $r[0]);
      t5 = $.cf($sc, "fightBigbear", [$r[1], $.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "enemyObjList"), $.get($sc, "index")))]);
      $b = 12; continue;
    case 14:
      $.sm($.gm($.gm($r[1], "life_span"), "span"), "_xscale", (100 * ($.n($.gm($r[1], "life")) / $.n($.gm($r[1], "lifeAwal")))));
      if (!$.gt($.gm($r[1], "_x"), 1300)) { $b = 16; continue; }
      $b = 15; continue;
    case 15:
      t8 = $.cm($r[1], "removeMovieClip", []);
      $b = 16; continue;
    case 16:
      $b = 19; continue;
    case 17:
      t2 = $.cm($.gm($r[1], "clip"), "stop", []);
      $b = 19; continue;
    case 19: return;
    }
  }));
  }));
    $.def($sc, "summonBeautyflower", $.fn({"n":"summonBeautyflower","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    $.sm($.get($sc, "battle_mc"), "battlePosPanglima", ($.n($.gm($.get($sc, "battle_mc"), "battlePosPanglima")) + 1));
    $.sm($.get($sc, "battle_mc"), "depthObj", $.add($.gm($.get($sc, "battle_mc"), "depthObj"), 1));
    t1 = $.cm($.get($sc, "battle_mc"), "attachMovie", ["mc_beautyflower", "beautyflower", $.add($.gm($.get($sc, "battle_mc"), "depthObj"), (5000 * $.n($.gm($.gm($.gm($.get($sc, "battle_mc"), "rowPosPanglima"), $.gm($.get($sc, "battle_mc"), "battlePosPanglima")), 1))))]);
    $.sm($.gm($.get($sc, "battle_mc"), "beautyflower"), "posY", 2);
    $.sm($.gm($.get($sc, "battle_mc"), "beautyflower"), "armyNum", 4);
    $.sm($.gm($.get($sc, "battle_mc"), "beautyflower"), "_x", 300);
    $.sm($.gm($.get($sc, "battle_mc"), "beautyflower"), "_y", $.gm($.gm($.gm($.get($sc, "battle_mc"), "rowPosPanglima"), $.gm($.get($sc, "battle_mc"), "battlePosPanglima")), 0));
    $.sm($.gm($.get($sc, "battle_mc"), "beautyflower"), "classLevel", 3);
    $.sm($.gm($.get($sc, "battle_mc"), "beautyflower"), "lifeAwal", $.add($.gm($.gm($.gm($.get($sc, "comList"), 4), 4), 0), ($.n($.gm($.gm($.get($sc, "objectMap13"), 2), 0)) * 10)));
    $.sm($.gm($.get($sc, "battle_mc"), "beautyflower"), "life", $.gm($.gm($.get($sc, "battle_mc"), "beautyflower"), "lifeAwal"));
    $.sm($.gm($.get($sc, "battle_mc"), "beautyflower"), "att", $.add($.gm($.gm($.gm($.get($sc, "comList"), 4), 4), 1), $.gm($.gm($.get($sc, "objectMap13"), 2), 0)));
    $.sm($.gm($.get($sc, "battle_mc"), "beautyflower"), "def", $.add($.gm($.gm($.gm($.get($sc, "comList"), 4), 4), 2), $.gm($.gm($.get($sc, "objectMap13"), 2), 0)));
    $.sm($.gm($.get($sc, "battle_mc"), "beautyflower"), "spd", $.gm($.gm($.gm($.get($sc, "comList"), 4), 4), 3));
    $.sm($.gm($.get($sc, "battle_mc"), "beautyflower"), "v", $.gm($.gm($.get($sc, "battle_mc"), "beautyflower"), "spd"));
    $.sm($.gm($.get($sc, "battle_mc"), "beautyflower"), "timer", 50);
    t2 = $.cm($.gm($.get($sc, "battle_mc"), "gunmanList"), "push", ["beautyflower"]);
    $.sm($.gm($.get($sc, "battle_mc"), "beautyflower"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, t2, t3, en1, t4, t5;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!$.bool($.get($sc, "habisPerang"))) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t1 = $.delMember($r[1], "onEnterFrame");
      $b = 2; continue;
    case 2:
      if (!!$.bool($.get($sc, "isPaused"))) { $b = 9; continue; }
      $b = 3; continue;
    case 3:
      t3 = $.cm($.gm($r[1], "clip"), "play", []);
      $.sm($r[1], "frontX", $.add($.gm($r[1], "_x"), 50));
      $.sm($r[1], "frontY", ($.n($.gm($r[1], "_y")) - ($.n($.gm($r[1], "_height")) / 1.3)));
      en1 = $.enumerate($.gm($.get($sc, "battle_mc"), "enemyObjList"));
      s0 = en1;
      $b = 4; continue;
    case 4:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 6; continue; }
      $b = 5; continue;
    case 5:
      $.set($sc, "index", $r[0]);
      t4 = $.cf($sc, "fightShoot", [$r[1], $.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "enemyObjList"), $.get($sc, "index")))]);
      $b = 4; continue;
    case 6:
      $.sm($.gm($.gm($r[1], "life_span"), "span"), "_xscale", (100 * ($.n($.gm($r[1], "life")) / $.n($.gm($r[1], "lifeAwal")))));
      if (!$.gt($.gm($r[1], "_x"), 1300)) { $b = 8; continue; }
      $b = 7; continue;
    case 7:
      t5 = $.cm($r[1], "removeMovieClip", []);
      $b = 8; continue;
    case 8:
      $b = 11; continue;
    case 9:
      t2 = $.cm($.gm($r[1], "clip"), "stop", []);
      $b = 11; continue;
    case 11: return;
    }
  }));
  }));
    $.def($sc, "summonBroadeagle", $.fn({"n":"summonBroadeagle","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    $.sm($.get($sc, "battle_mc"), "battlePosPanglima", ($.n($.gm($.get($sc, "battle_mc"), "battlePosPanglima")) + 1));
    $.sm($.get($sc, "battle_mc"), "depthObj", $.add($.gm($.get($sc, "battle_mc"), "depthObj"), 1));
    t1 = $.cm($.get($sc, "battle_mc"), "attachMovie", ["mc_broadeagle", "broadeagle", $.add($.gm($.get($sc, "battle_mc"), "depthObj"), (5000 * $.n($.gm($.gm($.gm($.get($sc, "battle_mc"), "rowPosPanglima"), $.gm($.get($sc, "battle_mc"), "battlePosPanglima")), 1))))]);
    $.sm($.gm($.get($sc, "battle_mc"), "broadeagle"), "posY", 3);
    $.sm($.gm($.get($sc, "battle_mc"), "broadeagle"), "armyNum", 5);
    $.sm($.gm($.get($sc, "battle_mc"), "broadeagle"), "_x", 300);
    $.sm($.gm($.get($sc, "battle_mc"), "broadeagle"), "_y", $.gm($.gm($.gm($.get($sc, "battle_mc"), "rowPosPanglima"), $.gm($.get($sc, "battle_mc"), "battlePosPanglima")), 0));
    $.sm($.gm($.get($sc, "battle_mc"), "broadeagle"), "soundFX", "magic1");
    $.sm($.gm($.get($sc, "battle_mc"), "broadeagle"), "lifeAwal", $.add($.gm($.gm($.gm($.get($sc, "comList"), 5), 4), 0), ($.n($.gm($.gm($.get($sc, "objectMap13"), 2), 0)) * 10)));
    $.sm($.gm($.get($sc, "battle_mc"), "broadeagle"), "life", $.gm($.gm($.get($sc, "battle_mc"), "broadeagle"), "lifeAwal"));
    $.sm($.gm($.get($sc, "battle_mc"), "broadeagle"), "att", $.add($.gm($.gm($.gm($.get($sc, "comList"), 5), 4), 1), $.gm($.gm($.get($sc, "objectMap13"), 2), 0)));
    $.sm($.gm($.get($sc, "battle_mc"), "broadeagle"), "def", $.add($.gm($.gm($.gm($.get($sc, "comList"), 5), 4), 2), $.gm($.gm($.get($sc, "objectMap13"), 2), 0)));
    $.sm($.gm($.get($sc, "battle_mc"), "broadeagle"), "spd", $.gm($.gm($.gm($.get($sc, "comList"), 5), 4), 3));
    $.sm($.gm($.get($sc, "battle_mc"), "broadeagle"), "v", $.gm($.gm($.get($sc, "battle_mc"), "broadeagle"), "spd"));
    $.sm($.gm($.get($sc, "battle_mc"), "broadeagle"), "timer", 50);
    $.sm($.gm($.get($sc, "battle_mc"), "broadeagle"), "jedaAwal", 50);
    $.sm($.gm($.get($sc, "battle_mc"), "broadeagle"), "jeda", $.gm($.gm($.get($sc, "battle_mc"), "broadeagle"), "jedaAwal"));
    $.sm($.gm($.get($sc, "battle_mc"), "broadeagle"), "cacheAsBitmap", true);
    t2 = $.cm($.gm($.get($sc, "battle_mc"), "magicianList"), "push", ["broadeagle"]);
    $.sm($.gm($.get($sc, "battle_mc"), "broadeagle"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, t2, t3, en1, t4, t5;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!$.bool($.get($sc, "habisPerang"))) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t1 = $.delMember($r[1], "onEnterFrame");
      $b = 2; continue;
    case 2:
      if (!!$.bool($.get($sc, "isPaused"))) { $b = 9; continue; }
      $b = 3; continue;
    case 3:
      t3 = $.cm($.gm($r[1], "clip"), "play", []);
      en1 = $.enumerate($.gm($.get($sc, "battle_mc"), "enemyObjList"));
      s0 = en1;
      $b = 4; continue;
    case 4:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 6; continue; }
      $b = 5; continue;
    case 5:
      $.set($sc, "index", $r[0]);
      t4 = $.cf($sc, "fightBroadeagle", [$r[1], $.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "enemyObjList"), $.get($sc, "index")))]);
      $b = 4; continue;
    case 6:
      $.sm($.gm($.gm($r[1], "life_span"), "span"), "_xscale", (100 * ($.n($.gm($r[1], "life")) / $.n($.gm($r[1], "lifeAwal")))));
      if (!$.gt($.gm($r[1], "_x"), 1300)) { $b = 8; continue; }
      $b = 7; continue;
    case 7:
      t5 = $.cm($r[1], "removeMovieClip", []);
      $b = 8; continue;
    case 8:
      $b = 11; continue;
    case 9:
      t2 = $.cm($.gm($r[1], "clip"), "stop", []);
      $b = 11; continue;
    case 11: return;
    }
  }));
  }));
    $.def($sc, "summonRunningbow", $.fn({"n":"summonRunningbow","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    $.sm($.get($sc, "battle_mc"), "battlePosPanglima", ($.n($.gm($.get($sc, "battle_mc"), "battlePosPanglima")) + 1));
    $.sm($.get($sc, "battle_mc"), "depthObj", $.add($.gm($.get($sc, "battle_mc"), "depthObj"), 1));
    t1 = $.cm($.get($sc, "battle_mc"), "attachMovie", ["mc_runningbow", "runningbow", $.add($.gm($.get($sc, "battle_mc"), "depthObj"), (5000 * $.n($.gm($.gm($.gm($.get($sc, "battle_mc"), "rowPosPanglima"), $.gm($.get($sc, "battle_mc"), "battlePosPanglima")), 1))))]);
    $.sm($.gm($.get($sc, "battle_mc"), "runningbow"), "posY", 2);
    $.sm($.gm($.get($sc, "battle_mc"), "runningbow"), "armyNum", 2);
    $.sm($.gm($.get($sc, "battle_mc"), "runningbow"), "_x", 300);
    $.sm($.gm($.get($sc, "battle_mc"), "runningbow"), "_y", $.gm($.gm($.gm($.get($sc, "battle_mc"), "rowPosPanglima"), $.gm($.get($sc, "battle_mc"), "battlePosPanglima")), 0));
    $.sm($.gm($.get($sc, "battle_mc"), "runningbow"), "lifeAwal", $.add($.gm($.gm($.gm($.get($sc, "comList"), 2), 4), 0), ($.n($.gm($.gm($.get($sc, "objectMap13"), 2), 0)) * 10)));
    $.sm($.gm($.get($sc, "battle_mc"), "runningbow"), "life", $.gm($.gm($.get($sc, "battle_mc"), "runningbow"), "lifeAwal"));
    $.sm($.gm($.get($sc, "battle_mc"), "runningbow"), "att", $.add($.gm($.gm($.gm($.get($sc, "comList"), 2), 4), 1), $.gm($.gm($.get($sc, "objectMap13"), 2), 0)));
    $.sm($.gm($.get($sc, "battle_mc"), "runningbow"), "def", $.add($.gm($.gm($.gm($.get($sc, "comList"), 2), 4), 2), $.gm($.gm($.get($sc, "objectMap13"), 2), 0)));
    $.sm($.gm($.get($sc, "battle_mc"), "runningbow"), "spd", $.gm($.gm($.gm($.get($sc, "comList"), 2), 4), 3));
    $.sm($.gm($.get($sc, "battle_mc"), "runningbow"), "v", $.gm($.gm($.get($sc, "battle_mc"), "runningbow"), "spd"));
    $.sm($.gm($.get($sc, "battle_mc"), "runningbow"), "timer", 50);
    t2 = $.cm($.gm($.get($sc, "battle_mc"), "horsearcherList"), "push", ["runningbow"]);
    $.sm($.gm($.get($sc, "battle_mc"), "runningbow"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, t2, t3, en1, t4, t5;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!$.bool($.get($sc, "habisPerang"))) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t1 = $.delMember($r[1], "onEnterFrame");
      $b = 2; continue;
    case 2:
      if (!!$.bool($.get($sc, "isPaused"))) { $b = 9; continue; }
      $b = 3; continue;
    case 3:
      t3 = $.cm($.gm($r[1], "clip"), "play", []);
      en1 = $.enumerate($.gm($.get($sc, "battle_mc"), "enemyObjList"));
      s0 = en1;
      $b = 4; continue;
    case 4:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 6; continue; }
      $b = 5; continue;
    case 5:
      $.set($sc, "index", $r[0]);
      t4 = $.cf($sc, "fightMultipleRange", [$r[1], $.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "enemyObjList"), $.get($sc, "index")))]);
      $b = 4; continue;
    case 6:
      $.sm($.gm($.gm($r[1], "life_span"), "span"), "_xscale", (100 * ($.n($.gm($r[1], "life")) / $.n($.gm($r[1], "lifeAwal")))));
      if (!$.gt($.gm($r[1], "_x"), 1300)) { $b = 8; continue; }
      $b = 7; continue;
    case 7:
      t5 = $.cm($r[1], "removeMovieClip", []);
      $b = 8; continue;
    case 8:
      $b = 11; continue;
    case 9:
      t2 = $.cm($.gm($r[1], "clip"), "stop", []);
      $b = 11; continue;
    case 11: return;
    }
  }));
  }));
    $.def($sc, "summonSharpwolf", $.fn({"n":"summonSharpwolf","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    $.sm($.get($sc, "battle_mc"), "battlePosPanglima", ($.n($.gm($.get($sc, "battle_mc"), "battlePosPanglima")) + 1));
    $.sm($.get($sc, "battle_mc"), "depthObj", $.add($.gm($.get($sc, "battle_mc"), "depthObj"), 1));
    $.set($sc, "nameSwordman", $.add("swordman", $.gm($.get($sc, "battle_mc"), "depthObj")));
    t1 = $.cm($.get($sc, "battle_mc"), "attachMovie", ["mc_sharpwolf", "sharpwolf", $.add($.gm($.get($sc, "battle_mc"), "depthObj"), (5000 * $.n($.gm($.gm($.gm($.get($sc, "battle_mc"), "rowPosPanglima"), $.gm($.get($sc, "battle_mc"), "battlePosPanglima")), 1))))]);
    $.sm($.gm($.get($sc, "battle_mc"), "sharpwolf"), "posY", 2);
    $.sm($.gm($.get($sc, "battle_mc"), "sharpwolf"), "armyNum", 1);
    $.sm($.gm($.get($sc, "battle_mc"), "sharpwolf"), "_x", 350);
    $.sm($.gm($.get($sc, "battle_mc"), "sharpwolf"), "_y", $.gm($.gm($.gm($.get($sc, "battle_mc"), "rowPosPanglima"), $.gm($.get($sc, "battle_mc"), "battlePosPanglima")), 0));
    $.sm($.gm($.get($sc, "battle_mc"), "sharpwolf"), "lifeAwal", $.add($.gm($.gm($.gm($.get($sc, "comList"), 1), 4), 0), ($.n($.gm($.gm($.get($sc, "objectMap13"), 2), 0)) * 10)));
    $.sm($.gm($.get($sc, "battle_mc"), "sharpwolf"), "life", $.gm($.gm($.get($sc, "battle_mc"), "sharpwolf"), "lifeAwal"));
    $.sm($.gm($.get($sc, "battle_mc"), "sharpwolf"), "att", $.add($.gm($.gm($.gm($.get($sc, "comList"), 1), 4), 1), $.gm($.gm($.get($sc, "objectMap13"), 2), 0)));
    $.sm($.gm($.get($sc, "battle_mc"), "sharpwolf"), "def", $.add($.gm($.gm($.gm($.get($sc, "comList"), 1), 4), 2), $.gm($.gm($.get($sc, "objectMap13"), 2), 0)));
    $.sm($.gm($.get($sc, "battle_mc"), "sharpwolf"), "spd", $.gm($.gm($.gm($.get($sc, "comList"), 1), 4), 3));
    $.sm($.gm($.get($sc, "battle_mc"), "sharpwolf"), "v", $.gm($.gm($.get($sc, "battle_mc"), "sharpwolf"), "spd"));
    $.sm($.gm($.get($sc, "battle_mc"), "sharpwolf"), "range", 300);
    $.sm($.gm($.get($sc, "battle_mc"), "sharpwolf"), "timer", 50);
    $.sm($.gm($.get($sc, "battle_mc"), "sharpwolf"), "soundFX", "sword1");
    $.sm($.gm($.get($sc, "battle_mc"), "sharpwolf"), "cacheAsBitmap", true);
    t2 = $.cm($.gm($.get($sc, "battle_mc"), "swordmanList"), "push", ["sharpwolf"]);
    $.sm($.gm($.get($sc, "battle_mc"), "sharpwolf"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, t2, t3, en1, t4, t5, t6, t7, t8;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!$.bool($.get($sc, "habisPerang"))) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t1 = $.delMember($r[1], "onEnterFrame");
      $b = 2; continue;
    case 2:
      if (!!$.bool($.get($sc, "isPaused"))) { $b = 17; continue; }
      $b = 3; continue;
    case 3:
      t3 = $.cm($.gm($r[1], "clip"), "play", []);
      if (!!$.gt($.gm($.get($sc, "armyList"), $.gm($r[1], "armyNum")), 0)) { $b = 11; continue; }
      $b = 4; continue;
    case 4:
      $.sm($r[1], "_x", $.add($.gm($r[1], "_x"), ($.n($.gm($r[1], "v")) * $.n($.get($sc, "gameSpeed")))));
      if (!!$.eq($.gm($r[1], "v"), 0)) { $b = 6; continue; }
      $b = 5; continue;
    case 5:
      t4 = $.cm($r[1], "gotoAndStop", ["walking"]);
      $b = 6; continue;
    case 6:
      if (!$.bool($.gm($r[1], "standby"))) { $b = 11; continue; }
      $b = 7; continue;
    case 7:
      $.sm($r[1], "timer", ($.n($.gm($r[1], "timer")) - 1));
      t6 = !$.gt($.gm($r[1], "timer"), 0);
      t7 = t6;
      s0 = t6;
      if (t7) { $b = 9; continue; }
      $b = 8; continue;
    case 8:
      s0 = $.eq($.gm($r[1], "timer"), undefined);
      $b = 9; continue;
    case 9:
      if (!$.bool(s0)) { $b = 11; continue; }
      $b = 10; continue;
    case 10:
      $.sm($r[1], "timer", 50);
      $.sm($r[1], "v", $.gm($r[1], "spd"));
      $b = 11; continue;
    case 11:
      en1 = $.enumerate($.gm($.get($sc, "battle_mc"), "enemyObjList"));
      s0 = en1;
      $b = 12; continue;
    case 12:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 14; continue; }
      $b = 13; continue;
    case 13:
      $.set($sc, "index", $r[0]);
      t5 = $.cf($sc, "fightSharpwolf", [$r[1], $.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "enemyObjList"), $.get($sc, "index")))]);
      $b = 12; continue;
    case 14:
      $.sm($.gm($.gm($r[1], "life_span"), "span"), "_xscale", (100 * ($.n($.gm($r[1], "life")) / $.n($.gm($r[1], "lifeAwal")))));
      if (!$.gt($.gm($r[1], "_x"), 1300)) { $b = 16; continue; }
      $b = 15; continue;
    case 15:
      t8 = $.cm($r[1], "removeMovieClip", []);
      $b = 16; continue;
    case 16:
      $b = 19; continue;
    case 17:
      t2 = $.cm($.gm($r[1], "clip"), "stop", []);
      $b = 19; continue;
    case 19: return;
    }
  }));
  }));
    $.def($sc, "summonGreatwinstar", $.fn({"n":"summonGreatwinstar","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    $.sm($.get($sc, "battle_mc"), "battlePosPanglima", ($.n($.gm($.get($sc, "battle_mc"), "battlePosPanglima")) + 1));
    $.sm($.get($sc, "battle_mc"), "depthObj", $.add($.gm($.get($sc, "battle_mc"), "depthObj"), 1));
    $.set($sc, "nameSwordman", $.add("swordman", $.gm($.get($sc, "battle_mc"), "depthObj")));
    t1 = $.cm($.get($sc, "battle_mc"), "attachMovie", ["mc_greatwinstar", "gw", $.add($.gm($.get($sc, "battle_mc"), "depthObj"), (5000 * $.n($.gm($.gm($.gm($.get($sc, "battle_mc"), "rowPosPanglima"), $.gm($.get($sc, "battle_mc"), "battlePosPanglima")), 1))))]);
    $.sm($.gm($.get($sc, "battle_mc"), "gw"), "posY", 2);
    $.sm($.gm($.get($sc, "battle_mc"), "gw"), "armyNum", 1);
    $.sm($.gm($.get($sc, "battle_mc"), "gw"), "_x", 300);
    $.sm($.gm($.get($sc, "battle_mc"), "gw"), "_y", $.gm($.gm($.gm($.get($sc, "battle_mc"), "rowPosPanglima"), $.gm($.get($sc, "battle_mc"), "battlePosPanglima")), 0));
    $.sm($.gm($.get($sc, "battle_mc"), "gw"), "lifeAwal", $.add($.gm($.gm($.gm($.get($sc, "comList"), 6), 4), 0), ($.n($.gm($.gm($.get($sc, "objectMap13"), 2), 0)) * 10)));
    $.sm($.gm($.get($sc, "battle_mc"), "gw"), "life", $.gm($.gm($.get($sc, "battle_mc"), "gw"), "lifeAwal"));
    $.sm($.gm($.get($sc, "battle_mc"), "gw"), "att", $.add($.gm($.gm($.gm($.get($sc, "comList"), 6), 4), 1), $.gm($.gm($.get($sc, "objectMap13"), 2), 0)));
    $.sm($.gm($.get($sc, "battle_mc"), "gw"), "def", $.add($.gm($.gm($.gm($.get($sc, "comList"), 6), 4), 2), $.gm($.gm($.get($sc, "objectMap13"), 2), 0)));
    $.sm($.gm($.get($sc, "battle_mc"), "gw"), "spd", $.gm($.gm($.gm($.get($sc, "comList"), 6), 4), 3));
    $.sm($.gm($.get($sc, "battle_mc"), "gw"), "v", $.gm($.gm($.get($sc, "battle_mc"), $.get($sc, "gw")), "spd"));
    $.sm($.gm($.get($sc, "battle_mc"), "gw"), "range", 300);
    $.sm($.gm($.get($sc, "battle_mc"), "gw"), "timer", 50);
    $.sm($.gm($.get($sc, "battle_mc"), "gw"), "soundFX", "sword1");
    $.sm($.gm($.get($sc, "battle_mc"), "gw"), "cacheAsBitmap", true);
    t2 = $.cm($.gm($.get($sc, "battle_mc"), "swordmanList"), "push", ["gw"]);
    $.sm($.gm($.get($sc, "battle_mc"), "gw"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, t2, t3, en1, t4, t5;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!$.bool($.get($sc, "habisPerang"))) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t1 = $.delMember($r[1], "onEnterFrame");
      $b = 2; continue;
    case 2:
      if (!!$.bool($.get($sc, "isPaused"))) { $b = 11; continue; }
      $b = 3; continue;
    case 3:
      t3 = $.cm($.gm($r[1], "clip"), "play", []);
      if (!$.lt($.gm($r[1], "life"), $.gm($r[1], "lifeAwal"))) { $b = 5; continue; }
      $b = 4; continue;
    case 4:
      $.sm($r[1], "life", $.add($.gm($r[1], "life"), 0.01));
      $b = 5; continue;
    case 5:
      en1 = $.enumerate($.gm($.get($sc, "battle_mc"), "enemyObjList"));
      s0 = en1;
      $b = 6; continue;
    case 6:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 8; continue; }
      $b = 7; continue;
    case 7:
      $.set($sc, "index", $r[0]);
      t4 = $.cf($sc, "fightGreatwinstar", [$r[1], $.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "enemyObjList"), $.get($sc, "index")))]);
      $b = 6; continue;
    case 8:
      $.sm($.gm($.gm($r[1], "life_span"), "span"), "_xscale", (100 * ($.n($.gm($r[1], "life")) / $.n($.gm($r[1], "lifeAwal")))));
      if (!$.gt($.gm($r[1], "_x"), 1300)) { $b = 10; continue; }
      $b = 9; continue;
    case 9:
      t5 = $.cm($r[1], "removeMovieClip", []);
      $b = 10; continue;
    case 10:
      $b = 13; continue;
    case 11:
      t2 = $.cm($.gm($r[1], "clip"), "stop", []);
      $b = 13; continue;
    case 13: return;
    }
  }));
  }));
    $.def($sc, "tambahPowerCommander", $.fn({"n":"tambahPowerCommander","p":[[1,"who"]],"r":2,"f":42}, $sc, function($sc, $this, $args, $r) {
    $.sm($r[1], "att", $.add($.gm($r[1], "att"), $.gm($.gm($.get($sc, "objectMap13"), 0), 0)));
    $.sm($r[1], "def", $.add($.gm($r[1], "def"), $.gm($.gm($.get($sc, "objectMap13"), 0), 0)));
  }));
    $.def($sc, "fightTower", $.fn({"n":"fightTower","p":[[0,"who"],[0,"target"]],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      t1 = $.cm($.gm($.get($sc, "who"), "hit"), "hitTest", [$.gm($.get($sc, "target"), "area")]);
      if (!$.bool(t1)) { $b = 17; continue; }
      $b = 1; continue;
    case 1:
      $.set($sc, "xdiff", ($.n($.gm($.get($sc, "target"), "_x")) - $.n($.gm($.get($sc, "who"), "_x"))));
      if (!!$.gt($.get($sc, "xdiff"), 350)) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      t4 = $.cm($.gm($.get($sc, "who"), "tower"), "gotoAndStop", [3]);
      $b = 8; continue;
    case 3:
      t2 = !$.gt($.get($sc, "xdiff"), 600);
      t3 = !t2;
      s0 = t2;
      if (t3) { $b = 5; continue; }
      $b = 4; continue;
    case 4:
      s0 = $.gt($.get($sc, "xdiff"), 350);
      $b = 5; continue;
    case 5:
      if (!$.bool(s0)) { $b = 7; continue; }
      $b = 6; continue;
    case 6:
      t6 = $.cm($.gm($.get($sc, "who"), "tower"), "gotoAndStop", [2]);
      $b = 8; continue;
    case 7:
      t5 = $.cm($.gm($.get($sc, "who"), "tower"), "gotoAndStop", [1]);
      $b = 8; continue;
    case 8:
      $.sm($.get($sc, "who"), "jeda", ($.n($.gm($.get($sc, "who"), "jeda")) - 1));
      if (!!$.gt($.gm($.get($sc, "who"), "jeda"), 0)) { $b = 17; continue; }
      $b = 9; continue;
    case 9:
      t7 = $.cm($.gm($.gm($.get($sc, "who"), "tower"), "archer"), "play", []);
      $.sm($.get($sc, "battle_mc"), "depthObj", $.add($.gm($.get($sc, "battle_mc"), "depthObj"), 1));
      $.set($sc, "nameArrow", $.add("arrow", $.gm($.get($sc, "battle_mc"), "depthObj")));
      t8 = $.cm($.get($sc, "battle_mc"), "attachMovie", ["mc_arrow2", $.get($sc, "nameArrow"), $.add($.gm($.get($sc, "battle_mc"), "depthObj"), (5000 * $.n($.gm($.get($sc, "who"), "posY"))))]);
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "xdiff", ($.n($.gm($.get($sc, "target"), "_x")) - $.n($.gm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "_x"))));
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "ydiff", (($.n($.gm($.get($sc, "target"), "_y")) - 30) - $.n($.gm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "_y"))));
      if (!!$.gt($.gm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "xdiff"), 420)) { $b = 11; continue; }
      $b = 10; continue;
    case 10:
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "_x", $.add($.gm($.get($sc, "who"), "_x"), 100));
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "_y", ($.n($.gm($.get($sc, "who"), "_y")) - 290));
      $b = 16; continue;
    case 11:
      t9 = !$.gt($.gm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "xdiff"), 600);
      t10 = !t9;
      s0 = t9;
      if (t10) { $b = 13; continue; }
      $b = 12; continue;
    case 12:
      s0 = $.gt($.gm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "xdiff"), 420);
      $b = 13; continue;
    case 13:
      if (!$.bool(s0)) { $b = 15; continue; }
      $b = 14; continue;
    case 14:
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "_x", $.add($.gm($.get($sc, "who"), "_x"), 100));
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "_y", ($.n($.gm($.get($sc, "who"), "_y")) - 295));
      $b = 16; continue;
    case 15:
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "_x", $.add($.gm($.get($sc, "who"), "_x"), 100));
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "_y", ($.n($.gm($.get($sc, "who"), "_y")) - 300));
      $b = 16; continue;
    case 16:
      t11 = $.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow"));
      t12 = $.cm($.get($sc, "Math"), "atan2", [$.gm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "ydiff"), $.gm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "xdiff")]);
      $.sm(t11, "sudut", t12);
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "sudut", ($.n($.gm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "sudut")) * 57.29577951308232));
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "_rotation", $.gm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "sudut"));
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "sudutb", $.gm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "sudut"));
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "sudutb", ($.n($.gm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "sudutb")) * 0.017453292519943295));
      t13 = $.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow"));
      t14 = $.cm($.get($sc, "Math"), "cos", [$.gm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "sudutb")]);
      $.sm(t13, "xmov", (55 * $.n(t14)));
      t15 = $.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow"));
      t16 = $.cm($.get($sc, "Math"), "sin", [$.gm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "sudutb")]);
      $.sm(t15, "ymov", (55 * $.n(t16)));
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "batasY", $.gm($.get($sc, "target"), "_y"));
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "cacheAsBitmap", true);
      $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameArrow")), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5, t6, t7, t8, t9;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!!$.bool($.get($sc, "isPaused"))) { $b = 15; continue; }
      $b = 1; continue;
    case 1:
      $.sm($r[1], "_x", $.add($.gm($r[1], "_x"), $.gm($r[1], "xmov")));
      $.sm($r[1], "_y", $.add($.gm($r[1], "_y"), $.gm($r[1], "ymov")));
      if (!!$.lt($.gm($r[1], "_y"), $.gm($r[1], "batasY"))) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      t2 = $.cm($r[1], "gotoAndStop", [2]);
      t3 = $.delMember($r[1], "onEnterFrame");
      t4 = $r[1];
      t5 = $.cf($sc, "setInterval", [$.get($sc, "hapusObject"), 1000, $r[1]]);
      $.sm(t4, "hapus", t5);
      $b = 3; continue;
    case 3:
      t1 = $.cm($r[1], "hitTest", [$.gm($.get($sc, "target"), "area")]);
      if (!$.bool(t1)) { $b = 15; continue; }
      $b = 4; continue;
    case 4:
      if (!(($.n($.gm($.get($sc, "who"), "att")) - $.n($.gm($.get($sc, "target"), "def"))) > 0)) { $b = 6; continue; }
      $b = 5; continue;
    case 5:
      $.sm($.get($sc, "who"), "damage", ($.n($.gm($.get($sc, "who"), "att")) - $.n($.gm($.get($sc, "target"), "def"))));
      $b = 7; continue;
    case 6:
      $.sm($.get($sc, "who"), "damage", 1);
      $b = 7; continue;
    case 7:
      t6 = $.cf($sc, "bloodEffect", [$.get($sc, "target")]);
      if (!(($.n($.gm($.get($sc, "target"), "life")) - $.n($.gm($.get($sc, "who"), "damage"))) > 0)) { $b = 12; continue; }
      $b = 8; continue;
    case 8:
      if (!$.gt($.gm($.get($sc, "who"), "damage"), 0)) { $b = 10; continue; }
      $b = 9; continue;
    case 9:
      $.sm($.get($sc, "target"), "life", ($.n($.gm($.get($sc, "target"), "life")) - $.n($.gm($.get($sc, "who"), "damage"))));
      $b = 11; continue;
    case 10:
      $.sm($.get($sc, "target"), "life", ($.n($.gm($.get($sc, "target"), "life")) - 1));
      $b = 11; continue;
    case 11:
      $b = 13; continue;
    case 12:
      $.sm($.get($sc, "target"), "isDead", true);
      $.sm($.get($sc, "target"), "v", 0);
      $.sm($.get($sc, "target"), "life", 0);
      t7 = $.cm($.get($sc, "target"), "gotoAndStop", ["dead"]);
      t8 = $.delMember($.get($sc, "target"), "onEnterFrame");
      $b = 13; continue;
    case 13:
      t9 = $.cm($r[1], "removeMovieClip", []);
      $b = 15; continue;
    case 15: return;
    }
  }));
      t17 = $.cm($.get($sc, "who"), "gotoAndPlay", ["menyerang"]);
      $.sm($.get($sc, "who"), "jeda", $.gm($.get($sc, "who"), "jedaAwal"));
      $b = 17; continue;
    case 17:
      if (!$.eq($.gm($.get($sc, "who"), "v"), 0)) { $b = 20; continue; }
      $b = 18; continue;
    case 18:
      $.sm($.get($sc, "who"), "standby", true);
      $b = 20; continue;
    case 20: return;
    }
  }));
    $.def($sc, "fightTower2", $.fn({"n":"fightTower2","p":[[0,"who"],[0,"target"]],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      t1 = $.cm($.gm($.get($sc, "who"), "hit"), "hitTest", [$.gm($.get($sc, "target"), "area")]);
      if (!$.bool(t1)) { $b = 10; continue; }
      $b = 1; continue;
    case 1:
      $.set($sc, "xdiff", ($.n($.gm($.get($sc, "target"), "_x")) - $.n($.gm($.get($sc, "who"), "_x"))));
      if (!!$.gt($.get($sc, "xdiff"), 350)) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      t4 = $.cm($.gm($.get($sc, "who"), "tower"), "gotoAndStop", [3]);
      $b = 8; continue;
    case 3:
      t2 = !$.gt($.get($sc, "xdiff"), 600);
      t3 = !t2;
      s0 = t2;
      if (t3) { $b = 5; continue; }
      $b = 4; continue;
    case 4:
      s0 = $.gt($.get($sc, "xdiff"), 350);
      $b = 5; continue;
    case 5:
      if (!$.bool(s0)) { $b = 7; continue; }
      $b = 6; continue;
    case 6:
      t6 = $.cm($.gm($.get($sc, "who"), "tower"), "gotoAndStop", [2]);
      $b = 8; continue;
    case 7:
      t5 = $.cm($.gm($.get($sc, "who"), "tower"), "gotoAndStop", [1]);
      $b = 8; continue;
    case 8:
      $.sm($.get($sc, "who"), "jeda", ($.n($.gm($.get($sc, "who"), "jeda")) - 1));
      if (!!$.gt($.gm($.get($sc, "who"), "jeda"), 0)) { $b = 10; continue; }
      $b = 9; continue;
    case 9:
      t7 = $.cm($.gm($.gm($.get($sc, "who"), "tower"), "archer"), "play", []);
      $.sm($.get($sc, "battle_mc"), "depthObj", $.add($.gm($.get($sc, "battle_mc"), "depthObj"), 1));
      $.set($sc, "nameArrow", $.add("arrow", $.gm($.get($sc, "battle_mc"), "depthObj")));
      t8 = $.cm($.get($sc, "who"), "attachMovie", ["mc_arrow2", $.get($sc, "nameArrow"), $.add($.gm($.get($sc, "battle_mc"), "depthObj"), (5000 * $.n($.gm($.get($sc, "who"), "posY"))))]);
      $.sm($.gm($.get($sc, "who"), $.get($sc, "nameArrow")), "xdiff", ($.n($.gm($.get($sc, "target"), "_x")) - $.n($.gm($.gm($.get($sc, "who"), $.get($sc, "nameArrow")), "_x"))));
      $.sm($.gm($.get($sc, "who"), $.get($sc, "nameArrow")), "ydiff", (($.n($.gm($.get($sc, "target"), "_y")) - 30) - $.n($.gm($.gm($.get($sc, "who"), $.get($sc, "nameArrow")), "_y"))));
      $.sm($.gm($.get($sc, "who"), $.get($sc, "nameArrow")), "_x", $.add($.gm($.get($sc, "who"), "_x"), 90));
      $.sm($.gm($.get($sc, "who"), $.get($sc, "nameArrow")), "_y", ($.n($.gm($.get($sc, "who"), "_y")) - 440));
      t9 = $.gm($.get($sc, "who"), $.get($sc, "nameArrow"));
      t10 = $.cm($.get($sc, "Math"), "atan2", [$.gm($.gm($.get($sc, "who"), $.get($sc, "nameArrow")), "ydiff"), $.gm($.gm($.get($sc, "who"), $.get($sc, "nameArrow")), "xdiff")]);
      $.sm(t9, "sudut", t10);
      $.sm($.gm($.get($sc, "who"), $.get($sc, "nameArrow")), "sudut", ($.n($.gm($.gm($.get($sc, "who"), $.get($sc, "nameArrow")), "sudut")) * 57.29577951308232));
      $.sm($.gm($.get($sc, "who"), $.get($sc, "nameArrow")), "_rotation", $.gm($.gm($.get($sc, "who"), $.get($sc, "nameArrow")), "sudut"));
      $.sm($.gm($.get($sc, "who"), $.get($sc, "nameArrow")), "sudutb", $.gm($.gm($.get($sc, "who"), $.get($sc, "nameArrow")), "sudut"));
      $.sm($.gm($.get($sc, "who"), $.get($sc, "nameArrow")), "sudutb", ($.n($.gm($.gm($.get($sc, "who"), $.get($sc, "nameArrow")), "sudutb")) * 0.017453292519943295));
      t11 = $.gm($.get($sc, "who"), $.get($sc, "nameArrow"));
      t12 = $.cm($.get($sc, "Math"), "cos", [$.gm($.gm($.get($sc, "who"), $.get($sc, "nameArrow")), "sudutb")]);
      $.sm(t11, "xmov", (55 * $.n(t12)));
      t13 = $.gm($.get($sc, "who"), $.get($sc, "nameArrow"));
      t14 = $.cm($.get($sc, "Math"), "sin", [$.gm($.gm($.get($sc, "who"), $.get($sc, "nameArrow")), "sudutb")]);
      $.sm(t13, "ymov", (55 * $.n(t14)));
      $.sm($.gm($.get($sc, "who"), $.get($sc, "nameArrow")), "batasY", $.gm($.get($sc, "target"), "_y"));
      $.sm($.gm($.get($sc, "who"), $.get($sc, "nameArrow")), "cacheAsBitmap", true);
      $.sm($.gm($.get($sc, "who"), $.get($sc, "nameArrow")), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5, t6, t7, t8, t9;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!!$.bool($.get($sc, "isPaused"))) { $b = 15; continue; }
      $b = 1; continue;
    case 1:
      $.sm($r[1], "_x", $.add($.gm($r[1], "_x"), $.gm($r[1], "xmov")));
      $.sm($r[1], "_y", $.add($.gm($r[1], "_y"), $.gm($r[1], "ymov")));
      if (!!$.lt($.gm($r[1], "_y"), $.gm($r[1], "batasY"))) { $b = 3; continue; }
      $b = 2; continue;
    case 2:
      t2 = $.cm($r[1], "gotoAndStop", [2]);
      t3 = $.delMember($r[1], "onEnterFrame");
      t4 = $r[1];
      t5 = $.cf($sc, "setInterval", [$.get($sc, "hapusObject"), 1000, $r[1]]);
      $.sm(t4, "hapus", t5);
      $b = 3; continue;
    case 3:
      t1 = $.cm($r[1], "hitTest", [$.gm($.get($sc, "target"), "area")]);
      if (!$.bool(t1)) { $b = 15; continue; }
      $b = 4; continue;
    case 4:
      if (!(($.n($.gm($.get($sc, "who"), "att")) - $.n($.gm($.get($sc, "target"), "def"))) > 0)) { $b = 6; continue; }
      $b = 5; continue;
    case 5:
      $.sm($.get($sc, "who"), "damage", ($.n($.gm($.get($sc, "who"), "att")) - $.n($.gm($.get($sc, "target"), "def"))));
      $b = 7; continue;
    case 6:
      $.sm($.get($sc, "who"), "damage", 1);
      $b = 7; continue;
    case 7:
      t6 = $.cf($sc, "bloodEffect", [$.get($sc, "target")]);
      if (!(($.n($.gm($.get($sc, "target"), "life")) - $.n($.gm($.get($sc, "who"), "damage"))) > 0)) { $b = 12; continue; }
      $b = 8; continue;
    case 8:
      if (!$.gt($.gm($.get($sc, "who"), "damage"), 0)) { $b = 10; continue; }
      $b = 9; continue;
    case 9:
      $.sm($.get($sc, "target"), "life", ($.n($.gm($.get($sc, "target"), "life")) - $.n($.gm($.get($sc, "who"), "damage"))));
      $b = 11; continue;
    case 10:
      $.sm($.get($sc, "target"), "life", ($.n($.gm($.get($sc, "target"), "life")) - 1));
      $b = 11; continue;
    case 11:
      $b = 13; continue;
    case 12:
      $.sm($.get($sc, "target"), "isDead", true);
      $.sm($.get($sc, "target"), "v", 0);
      $.sm($.get($sc, "target"), "life", 0);
      t7 = $.cm($.get($sc, "target"), "gotoAndStop", ["dead"]);
      t8 = $.delMember($.get($sc, "target"), "onEnterFrame");
      $b = 13; continue;
    case 13:
      t9 = $.cm($r[1], "removeMovieClip", []);
      $b = 15; continue;
    case 15: return;
    }
  }));
      t15 = $.cm($.get($sc, "who"), "gotoAndPlay", ["menyerang"]);
      $.sm($.get($sc, "who"), "jeda", $.gm($.get($sc, "who"), "jedaAwal"));
      $b = 10; continue;
    case 10:
      if (!$.eq($.gm($.get($sc, "who"), "v"), 0)) { $b = 13; continue; }
      $b = 11; continue;
    case 11:
      $.sm($.get($sc, "who"), "standby", true);
      $b = 13; continue;
    case 13: return;
    }
  }));
    $.def($sc, "addTower", $.fn({"n":"addTower","p":[],"r":4,"f":105}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, en1, t2, t3;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      t1 = $.cm($.get($sc, "battle_mc"), "attachMovie", ["tower_battle", "tower", 14998]);
      $.sm($.gm($.get($sc, "battle_mc"), "tower"), "_x", 120);
      $.sm($.gm($.get($sc, "battle_mc"), "tower"), "_y", 412);
      $.sm($.gm($.get($sc, "battle_mc"), "tower"), "posY", 2);
      en1 = $.enumerate($.gm($r[2], $.add("objectMap", $.get($sc, "map"))));
      s0 = en1;
      $b = 1; continue;
    case 1:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 5; continue; }
      $b = 2; continue;
    case 2:
      t3 = $r[0];
      $r[3] = t3;
      if (!$.eq($.gm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $r[3]), 1), "tower")) { $b = 4; continue; }
      $b = 3; continue;
    case 3:
      $.sm($.gm($.get($sc, "battle_mc"), "tower"), "lev", $.gm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $r[3]), 0));
      $.sm($.gm($.gm($.get($sc, "battle_mc"), "tower"), "lev_ket"), "text", $.gm($.gm($.gm($r[2], $.add("objectMap", $.get($sc, "map"))), $r[3]), 0));
      $b = 4; continue;
    case 4:
      $b = 1; continue;
    case 5:
      $.sm($.gm($.get($sc, "battle_mc"), "tower"), "lifeAwal", (300 * $.n($.gm($.gm($.get($sc, "battle_mc"), "tower"), "lev"))));
      $.sm($.gm($.get($sc, "battle_mc"), "tower"), "life", $.gm($.gm($.get($sc, "battle_mc"), $.get($sc, "tower")), "lifeAwal"));
      $.sm($.gm($.get($sc, "battle_mc"), "tower"), "att", $.add((8 * ($.n($.gm($.gm($.get($sc, "battle_mc"), "tower"), "lev")) / 2)), $.gm($.get($sc, "townMilStat"), 3)));
      $.sm($.gm($.get($sc, "battle_mc"), "tower"), "def", $.add((3 * ($.n($.gm($.gm($.get($sc, "battle_mc"), "tower"), "lev")) / 2)), $.gm($.get($sc, "townMilStat"), 4)));
      $.sm($.gm($.get($sc, "battle_mc"), "tower"), "spd", 0);
      $.sm($.gm($.get($sc, "battle_mc"), "tower"), "v", $.gm($.gm($.get($sc, "battle_mc"), $.get($sc, "tower")), "spd"));
      $.sm($.gm($.get($sc, "battle_mc"), "tower"), "timer", 50);
      $.sm($.gm($.get($sc, "battle_mc"), "tower"), "jedaAwal", 100);
      $.sm($.gm($.get($sc, "battle_mc"), "tower"), "jeda", $.gm($.gm($.get($sc, "battle_mc"), $.get($sc, "tower")), "jedaAwal"));
      t2 = $.cm($.gm($.get($sc, "battle_mc"), "swordmanList"), "push", ["tower"]);
      $.sm($.gm($.get($sc, "battle_mc"), "tower"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var s0, en1, t1;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!!$.bool($.get($sc, "isPaused"))) { $b = 5; continue; }
      $b = 1; continue;
    case 1:
      en1 = $.enumerate($.gm($.get($sc, "battle_mc"), "enemyObjList"));
      s0 = en1;
      $b = 2; continue;
    case 2:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 5; continue; }
      $b = 3; continue;
    case 3:
      $.set($sc, "index", $r[0]);
      t1 = $.cf($sc, "fightTower", [$r[1], $.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "enemyObjList"), $.get($sc, "index")))]);
      $b = 2; continue;
    case 5: return;
    }
  }));
      $b = 6; continue;
    case 6: return;
    }
  }));
    $.def($sc, "upLevelPower", $.fn({"n":"upLevelPower","p":[],"r":3,"f":106}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!$.lt($.get($sc, "days"), 40)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t2 = $.cm($.get($sc, "Math"), "ceil", [($.n($.gm($r[1], "days")) / 20)]);
      $r[2] = t2;
      $b = 3; continue;
    case 2:
      t1 = $.cm($.get($sc, "Math"), "ceil", [($.n($.gm($r[1], "days")) / 10)]);
      $r[2] = t1;
      $b = 3; continue;
    case 3:
      return $r[2];
    case 5: return;
    }
  }));
    $.def($sc, "enemySwordman", $.fn({"n":"enemySwordman","p":[[0,"classLevel"]],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5, t6, t7, t8, t9, t10;
    t1 = $.get($sc, "battle_mc");
    t2 = $.rand(4);
    $.sm(t1, "armyEID", (1 + t2));
    $.sm($.get($sc, "battle_mc"), "depthObj", $.add($.gm($.get($sc, "battle_mc"), "depthObj"), 1));
    $.set($sc, "nameSwordmanE", $.add("swordmanE", $.gm($.get($sc, "battle_mc"), "depthObj")));
    t3 = $.cm($.get($sc, "battle_mc"), "attachMovie", [$.add("mc_enemy_swordman", $.get($sc, "classLevel")), $.get($sc, "nameSwordmanE"), $.add($.gm($.get($sc, "battle_mc"), "depthObj"), (5000 * $.n($.gm($.get($sc, "battle_mc"), "armyEID"))))]);
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordmanE")), "posY", $.gm($.get($sc, "battle_mc"), "armyEID"));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordmanE")), "_xscale", (-100));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordmanE")), "_x", 1200);
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordmanE")), "_y", $.gm($.gm($.get($sc, "battle_mc"), "rowPos"), $.gm($.get($sc, "battle_mc"), "armyEID")));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordmanE")), "classLevel", $.get($sc, "classLevel"));
    t4 = $.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordmanE"));
    t5 = $.cf($sc, "upLevelPower", []);
    $.sm(t4, "lifeAwal", ((15 + ($.n(t5) * 2)) + (10 * ($.n($.get($sc, "classLevel")) - 1))));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordmanE")), "life", $.gm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordmanE")), "lifeAwal"));
    t6 = $.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordmanE"));
    t7 = $.cf($sc, "upLevelPower", []);
    $.sm(t6, "att", $.add($.add(4.5, t7), (3 * ($.n($.get($sc, "classLevel")) - 1))));
    t8 = $.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordmanE"));
    t9 = $.cf($sc, "upLevelPower", []);
    $.sm(t8, "def", $.add($.add(2, t9), (2 * ($.n($.get($sc, "classLevel")) - 1))));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordmanE")), "spd", (-2));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordmanE")), "v", $.gm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordmanE")), "spd"));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordmanE")), "timer", 50);
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordmanE")), "cacheAsBitmap", true);
    t10 = $.cm($.gm($.get($sc, "battle_mc"), "enemyObjList"), "push", [$.get($sc, "nameSwordmanE")]);
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordmanE")), "nomor", $.gm($.gm($.get($sc, "battle_mc"), "enemyObjList"), "length"));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordmanE")), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, t2, t3, t4, en1, en2, en3, t5, t6, en4, t7, en5, t8, en6, t9, en7, t10, en8, t11, en9, t12, en10, t13, t14, t15;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!$.bool($.get($sc, "habisPerang"))) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t1 = $.delMember($r[1], "onEnterFrame");
      $b = 2; continue;
    case 2:
      if (!!$.bool($.get($sc, "isPaused"))) { $b = 44; continue; }
      $b = 3; continue;
    case 3:
      t3 = $.cm($.gm($r[1], "clip"), "play", []);
      $.sm($r[1], "_x", $.add($.gm($r[1], "_x"), ($.n($.gm($r[1], "v")) * $.n($.get($sc, "gameSpeed")))));
      if (!!$.eq($.gm($r[1], "v"), 0)) { $b = 5; continue; }
      $b = 4; continue;
    case 4:
      t4 = $.cm($r[1], "gotoAndStop", ["walking"]);
      $b = 5; continue;
    case 5:
      if (!$.eq($.gm($r[1], "classLevel"), 1)) { $b = 22; continue; }
      $b = 6; continue;
    case 6:
      en1 = $.enumerate($.gm($.get($sc, "battle_mc"), "swordmanList"));
      s0 = en1;
      $b = 7; continue;
    case 7:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 9; continue; }
      $b = 8; continue;
    case 8:
      $.set($sc, "index", $r[0]);
      t5 = $.cf($sc, "fightThrow", [$r[1], $.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "swordmanList"), $.get($sc, "index")))]);
      $b = 7; continue;
    case 9:
      en3 = $.enumerate($.gm($.get($sc, "battle_mc"), "spearmanList"));
      s0 = en3;
      $b = 10; continue;
    case 10:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 12; continue; }
      $b = 11; continue;
    case 11:
      $.set($sc, "index", $r[0]);
      t8 = $.cf($sc, "fightThrow", [$r[1], $.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "spearmanList"), $.get($sc, "index")))]);
      $b = 10; continue;
    case 12:
      en5 = $.enumerate($.gm($.get($sc, "battle_mc"), "horsearcherList"));
      s0 = en5;
      $b = 13; continue;
    case 13:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 15; continue; }
      $b = 14; continue;
    case 14:
      $.set($sc, "index", $r[0]);
      t10 = $.cf($sc, "fightThrow", [$r[1], $.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "horsearcherList"), $.get($sc, "index")))]);
      $b = 13; continue;
    case 15:
      en7 = $.enumerate($.gm($.get($sc, "battle_mc"), "gunmanList"));
      s0 = en7;
      $b = 16; continue;
    case 16:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 18; continue; }
      $b = 17; continue;
    case 17:
      $.set($sc, "index", $r[0]);
      t12 = $.cf($sc, "fightThrow", [$r[1], $.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "gunmanList"), $.get($sc, "index")))]);
      $b = 16; continue;
    case 18:
      en9 = $.enumerate($.gm($.get($sc, "battle_mc"), "magicianList"));
      s0 = en9;
      $b = 19; continue;
    case 19:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 21; continue; }
      $b = 20; continue;
    case 20:
      $.set($sc, "index", $r[0]);
      t14 = $.cf($sc, "fightThrow", [$r[1], $.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "magicianList"), $.get($sc, "index")))]);
      $b = 19; continue;
    case 21:
      $b = 38; continue;
    case 22:
      if (!$.eq($.gm($r[1], "classLevel"), 2)) { $b = 38; continue; }
      $b = 23; continue;
    case 23:
      en2 = $.enumerate($.gm($.get($sc, "battle_mc"), "swordmanList"));
      s0 = en2;
      $b = 24; continue;
    case 24:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 26; continue; }
      $b = 25; continue;
    case 25:
      $.set($sc, "index", $r[0]);
      t7 = $.cf($sc, "fightMelee", [$r[1], $.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "swordmanList"), $.get($sc, "index")))]);
      $b = 24; continue;
    case 26:
      en4 = $.enumerate($.gm($.get($sc, "battle_mc"), "spearmanList"));
      s0 = en4;
      $b = 27; continue;
    case 27:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 29; continue; }
      $b = 28; continue;
    case 28:
      $.set($sc, "index", $r[0]);
      t9 = $.cf($sc, "fightMelee", [$r[1], $.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "spearmanList"), $.get($sc, "index")))]);
      $b = 27; continue;
    case 29:
      en6 = $.enumerate($.gm($.get($sc, "battle_mc"), "horsearcherList"));
      s0 = en6;
      $b = 30; continue;
    case 30:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 32; continue; }
      $b = 31; continue;
    case 31:
      $.set($sc, "index", $r[0]);
      t11 = $.cf($sc, "fightMelee", [$r[1], $.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "horsearcherList"), $.get($sc, "index")))]);
      $b = 30; continue;
    case 32:
      en8 = $.enumerate($.gm($.get($sc, "battle_mc"), "gunmanList"));
      s0 = en8;
      $b = 33; continue;
    case 33:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 35; continue; }
      $b = 34; continue;
    case 34:
      $.set($sc, "index", $r[0]);
      t13 = $.cf($sc, "fightMelee", [$r[1], $.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "gunmanList"), $.get($sc, "index")))]);
      $b = 33; continue;
    case 35:
      en10 = $.enumerate($.gm($.get($sc, "battle_mc"), "magicianList"));
      s0 = en10;
      $b = 36; continue;
    case 36:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 38; continue; }
      $b = 37; continue;
    case 37:
      $.set($sc, "index", $r[0]);
      t15 = $.cf($sc, "fightMelee", [$r[1], $.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "magicianList"), $.get($sc, "index")))]);
      $b = 36; continue;
    case 38:
      if (!$.bool($.gm($r[1], "standby"))) { $b = 41; continue; }
      $b = 39; continue;
    case 39:
      $.sm($r[1], "timer", ($.n($.gm($r[1], "timer")) - 1));
      if (!!$.gt($.gm($r[1], "timer"), 0)) { $b = 41; continue; }
      $b = 40; continue;
    case 40:
      $.sm($r[1], "timer", 50);
      $.sm($r[1], "v", $.gm($r[1], "spd"));
      $b = 41; continue;
    case 41:
      $.sm($.gm($.gm($r[1], "life_span"), "span"), "_xscale", (100 * ($.n($.gm($r[1], "life")) / $.n($.gm($r[1], "lifeAwal")))));
      if (!!$.gt($.gm($r[1], "_x"), (-100))) { $b = 43; continue; }
      $b = 42; continue;
    case 42:
      t6 = $.cm($r[1], "removeMovieClip", []);
      $b = 43; continue;
    case 43:
      $b = 46; continue;
    case 44:
      t2 = $.cm($.gm($r[1], "clip"), "stop", []);
      $b = 46; continue;
    case 46: return;
    }
  }));
  }));
    $.def($sc, "enemySpearman", $.fn({"n":"enemySpearman","p":[[2,"classLevel"]],"r":3,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5, t6, t7, t8, t9, t10;
    t1 = $.get($sc, "battle_mc");
    t2 = $.rand(4);
    $.sm(t1, "armyEID", (1 + t2));
    $.sm($.get($sc, "battle_mc"), "depthObj", $.add($.gm($.get($sc, "battle_mc"), "depthObj"), 1));
    $.set($sc, "nameSpearmanE", $.add("spearmanE", $.gm($.get($sc, "battle_mc"), "depthObj")));
    t3 = $.cm($.get($sc, "battle_mc"), "attachMovie", [$.add("mc_enemy_spearman", $r[2]), $.get($sc, "nameSpearmanE"), $.add($.gm($.get($sc, "battle_mc"), "depthObj"), (5000 * $.n($.gm($.get($sc, "battle_mc"), "armyEID"))))]);
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSpearmanE")), "posY", $.gm($.get($sc, "battle_mc"), "armyEID"));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSpearmanE")), "_xscale", (-100));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSpearmanE")), "_x", 1200);
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSpearmanE")), "_y", $.gm($.gm($.get($sc, "battle_mc"), "rowPos"), $.gm($.get($sc, "battle_mc"), "armyEID")));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSpearmanE")), "classLevel", $r[2]);
    t4 = $.gm($.get($sc, "battle_mc"), $.get($sc, "nameSpearmanE"));
    t5 = $.cf($sc, "upLevelPower", []);
    $.sm(t4, "lifeAwal", ((15 + ($.n(t5) * 2)) + (5 * ($.n($r[2]) - 1))));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSpearmanE")), "life", $.gm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSpearmanE")), "lifeAwal"));
    t6 = $.gm($.get($sc, "battle_mc"), $.get($sc, "nameSpearmanE"));
    t7 = $.cf($sc, "upLevelPower", []);
    $.sm(t6, "att", $.add($.add(5, t7), (3 * ($.n($r[2]) - 1))));
    t8 = $.gm($.get($sc, "battle_mc"), $.get($sc, "nameSpearmanE"));
    t9 = $.cf($sc, "upLevelPower", []);
    $.sm(t8, "def", $.add($.add(3, t9), (2 * ($.n($r[2]) - 1))));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSpearmanE")), "spd", (-2));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSpearmanE")), "v", $.gm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSpearmanE")), "spd"));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSpearmanE")), "timer", 50);
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSpearmanE")), "cacheAsBitmap", true);
    t10 = $.cm($.gm($.get($sc, "battle_mc"), "enemyObjList"), "push", [$.get($sc, "nameSpearmanE")]);
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSpearmanE")), "nomor", $.gm($.gm($.get($sc, "battle_mc"), "enemyObjList"), "length"));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSpearmanE")), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, t2, t3, en1, t4, en2, t5, en3, t6, en4, t7, en5, t8, t9, t10;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!$.bool($.get($sc, "habisPerang"))) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t1 = $.delMember($r[1], "onEnterFrame");
      $b = 2; continue;
    case 2:
      if (!!$.bool($.get($sc, "isPaused"))) { $b = 26; continue; }
      $b = 3; continue;
    case 3:
      t3 = $.cm($.gm($r[1], "clip"), "play", []);
      $.sm($r[1], "_x", $.add($.gm($r[1], "_x"), ($.n($.gm($r[1], "v")) * $.n($.get($sc, "gameSpeed")))));
      if (!!$.eq($.gm($r[1], "v"), 0)) { $b = 5; continue; }
      $b = 4; continue;
    case 4:
      t4 = $.cm($r[1], "gotoAndStop", ["walking"]);
      $b = 5; continue;
    case 5:
      en1 = $.enumerate($.gm($.get($sc, "battle_mc"), "swordmanList"));
      s0 = en1;
      $b = 6; continue;
    case 6:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 8; continue; }
      $b = 7; continue;
    case 7:
      $.set($sc, "index", $r[0]);
      t5 = $.cf($sc, "fightMelee", [$r[1], $.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "swordmanList"), $.get($sc, "index")))]);
      $b = 6; continue;
    case 8:
      en2 = $.enumerate($.gm($.get($sc, "battle_mc"), "spearmanList"));
      s0 = en2;
      $b = 9; continue;
    case 9:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 11; continue; }
      $b = 10; continue;
    case 10:
      $.set($sc, "index", $r[0]);
      t6 = $.cf($sc, "fightMelee", [$r[1], $.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "spearmanList"), $.get($sc, "index")))]);
      $b = 9; continue;
    case 11:
      en3 = $.enumerate($.gm($.get($sc, "battle_mc"), "horsearcherList"));
      s0 = en3;
      $b = 12; continue;
    case 12:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 14; continue; }
      $b = 13; continue;
    case 13:
      $.set($sc, "index", $r[0]);
      t7 = $.cf($sc, "fightMelee", [$r[1], $.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "horsearcherList"), $.get($sc, "index")))]);
      $b = 12; continue;
    case 14:
      en4 = $.enumerate($.gm($.get($sc, "battle_mc"), "gunmanList"));
      s0 = en4;
      $b = 15; continue;
    case 15:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 17; continue; }
      $b = 16; continue;
    case 16:
      $.set($sc, "index", $r[0]);
      t8 = $.cf($sc, "fightMelee", [$r[1], $.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "gunmanList"), $.get($sc, "index")))]);
      $b = 15; continue;
    case 17:
      en5 = $.enumerate($.gm($.get($sc, "battle_mc"), "magicianList"));
      s0 = en5;
      $b = 18; continue;
    case 18:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 20; continue; }
      $b = 19; continue;
    case 19:
      $.set($sc, "index", $r[0]);
      t9 = $.cf($sc, "fightMelee", [$r[1], $.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "magicianList"), $.get($sc, "index")))]);
      $b = 18; continue;
    case 20:
      if (!$.bool($.gm($r[1], "standby"))) { $b = 23; continue; }
      $b = 21; continue;
    case 21:
      $.sm($r[1], "timer", ($.n($.gm($r[1], "timer")) - 1));
      if (!!$.gt($.gm($r[1], "timer"), 0)) { $b = 23; continue; }
      $b = 22; continue;
    case 22:
      $.sm($r[1], "timer", 50);
      $.sm($r[1], "v", $.gm($r[1], "spd"));
      $b = 23; continue;
    case 23:
      $.sm($.gm($.gm($r[1], "life_span"), "span"), "_xscale", (100 * ($.n($.gm($r[1], "life")) / $.n($.gm($r[1], "lifeAwal")))));
      if (!!$.gt($.gm($r[1], "_x"), (-100))) { $b = 25; continue; }
      $b = 24; continue;
    case 24:
      t10 = $.cm($r[1], "removeMovieClip", []);
      $b = 25; continue;
    case 25:
      $b = 28; continue;
    case 26:
      t2 = $.cm($.gm($r[1], "clip"), "stop", []);
      $b = 28; continue;
    case 28: return;
    }
  }));
  }));
    $.def($sc, "enemyHorsearcher", $.fn({"n":"enemyHorsearcher","p":[[2,"classLevel"]],"r":3,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5, t6, t7, t8, t9, t10;
    t1 = $.get($sc, "battle_mc");
    t2 = $.rand(4);
    $.sm(t1, "armyEID", (1 + t2));
    $.sm($.get($sc, "battle_mc"), "depthObj", $.add($.gm($.get($sc, "battle_mc"), "depthObj"), 1));
    $.set($sc, "nameHorsearcherE", $.add("horseacherE", $.gm($.get($sc, "battle_mc"), "depthObj")));
    t3 = $.cm($.get($sc, "battle_mc"), "attachMovie", [$.add("mc_enemy_horsearcher", $r[2]), $.get($sc, "nameHorsearcherE"), $.add($.gm($.get($sc, "battle_mc"), "depthObj"), (5000 * $.n($.gm($.get($sc, "battle_mc"), "armyEID"))))]);
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameHorsearcherE")), "posY", $.gm($.get($sc, "battle_mc"), "armyEID"));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameHorsearcherE")), "_xscale", (-100));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameHorsearcherE")), "_x", 1200);
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameHorsearcherE")), "_y", $.gm($.gm($.get($sc, "battle_mc"), "rowPos"), $.gm($.get($sc, "battle_mc"), "armyEID")));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameHorsearcherE")), "classLevel", $r[2]);
    t4 = $.gm($.get($sc, "battle_mc"), $.get($sc, "nameHorsearcherE"));
    t5 = $.cf($sc, "upLevelPower", []);
    $.sm(t4, "lifeAwal", ((15 + ($.n(t5) * 2)) + (5 * ($.n($r[2]) - 1))));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameHorsearcherE")), "life", $.gm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameHorsearcherE")), "lifeAwal"));
    t6 = $.gm($.get($sc, "battle_mc"), $.get($sc, "nameHorsearcherE"));
    t7 = $.cf($sc, "upLevelPower", []);
    $.sm(t6, "att", $.add($.add(4, t7), (3 * ($.n($r[2]) - 1))));
    t8 = $.gm($.get($sc, "battle_mc"), $.get($sc, "nameHorsearcherE"));
    t9 = $.cf($sc, "upLevelPower", []);
    $.sm(t8, "def", $.add($.add(2, t9), (2 * ($.n($r[2]) - 1))));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameHorsearcherE")), "spd", (-4));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameHorsearcherE")), "v", $.gm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameHorsearcherE")), "spd"));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameHorsearcherE")), "timer", 50);
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameHorsearcherE")), "jedaAwal", 30);
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameHorsearcherE")), "jeda", $.gm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameHorsearcherE")), "jedaAwal"));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameHorsearcherE")), "cacheAsBitmap", true);
    t10 = $.cm($.gm($.get($sc, "battle_mc"), "enemyObjList"), "push", [$.get($sc, "nameHorsearcherE")]);
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameHorsearcherE")), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, t2, t3, en1, t4, en2, t5, en3, t6, en4, t7, en5, t8, t9, t10, t11, t12;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!$.bool($.get($sc, "habisPerang"))) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t1 = $.delMember($r[1], "onEnterFrame");
      $b = 2; continue;
    case 2:
      if (!!$.bool($.get($sc, "isPaused"))) { $b = 28; continue; }
      $b = 3; continue;
    case 3:
      t3 = $.cm($.gm($r[1], "clip"), "play", []);
      $.sm($r[1], "_x", $.add($.gm($r[1], "_x"), ($.n($.gm($r[1], "v")) * $.n($.get($sc, "gameSpeed")))));
      if (!!$.eq($.gm($r[1], "v"), 0)) { $b = 5; continue; }
      $b = 4; continue;
    case 4:
      t4 = $.cm($r[1], "gotoAndStop", ["walking"]);
      $b = 5; continue;
    case 5:
      en1 = $.enumerate($.gm($.get($sc, "battle_mc"), "swordmanList"));
      s0 = en1;
      $b = 6; continue;
    case 6:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 8; continue; }
      $b = 7; continue;
    case 7:
      $.set($sc, "index", $r[0]);
      t5 = $.cf($sc, "fightRange", [$r[1], $.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "swordmanList"), $.get($sc, "index")))]);
      $b = 6; continue;
    case 8:
      en2 = $.enumerate($.gm($.get($sc, "battle_mc"), "spearmanList"));
      s0 = en2;
      $b = 9; continue;
    case 9:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 11; continue; }
      $b = 10; continue;
    case 10:
      $.set($sc, "index", $r[0]);
      t6 = $.cf($sc, "fightRange", [$r[1], $.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "spearmanList"), $.get($sc, "index")))]);
      $b = 9; continue;
    case 11:
      en3 = $.enumerate($.gm($.get($sc, "battle_mc"), "horsearcherList"));
      s0 = en3;
      $b = 12; continue;
    case 12:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 14; continue; }
      $b = 13; continue;
    case 13:
      $.set($sc, "index", $r[0]);
      t7 = $.cf($sc, "fightRange", [$r[1], $.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "horsearcherList"), $.get($sc, "index")))]);
      $b = 12; continue;
    case 14:
      en4 = $.enumerate($.gm($.get($sc, "battle_mc"), "gunmanList"));
      s0 = en4;
      $b = 15; continue;
    case 15:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 17; continue; }
      $b = 16; continue;
    case 16:
      $.set($sc, "index", $r[0]);
      t8 = $.cf($sc, "fightRange", [$r[1], $.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "gunmanList"), $.get($sc, "index")))]);
      $b = 15; continue;
    case 17:
      en5 = $.enumerate($.gm($.get($sc, "battle_mc"), "magicianList"));
      s0 = en5;
      $b = 18; continue;
    case 18:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 20; continue; }
      $b = 19; continue;
    case 19:
      $.set($sc, "index", $r[0]);
      t9 = $.cf($sc, "fightRange", [$r[1], $.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "magicianList"), $.get($sc, "index")))]);
      $b = 18; continue;
    case 20:
      if (!$.bool($.gm($r[1], "standby"))) { $b = 25; continue; }
      $b = 21; continue;
    case 21:
      $.sm($r[1], "timer", ($.n($.gm($r[1], "timer")) - 1));
      t10 = !$.gt($.gm($r[1], "timer"), 0);
      t11 = t10;
      s0 = t10;
      if (t11) { $b = 23; continue; }
      $b = 22; continue;
    case 22:
      s0 = $.eq($.gm($r[1], "timer"), undefined);
      $b = 23; continue;
    case 23:
      if (!$.bool(s0)) { $b = 25; continue; }
      $b = 24; continue;
    case 24:
      $.sm($r[1], "timer", 50);
      $.sm($r[1], "v", $.gm($r[1], "spd"));
      $b = 25; continue;
    case 25:
      $.sm($.gm($.gm($r[1], "life_span"), "span"), "_xscale", (100 * ($.n($.gm($r[1], "life")) / $.n($.gm($r[1], "lifeAwal")))));
      if (!!$.gt($.gm($r[1], "_x"), (-100))) { $b = 27; continue; }
      $b = 26; continue;
    case 26:
      t12 = $.cm($r[1], "removeMovieClip", []);
      $b = 27; continue;
    case 27:
      $b = 30; continue;
    case 28:
      t2 = $.cm($.gm($r[1], "clip"), "stop", []);
      $b = 30; continue;
    case 30: return;
    }
  }));
  }));
    $.def($sc, "enemyMagician", $.fn({"n":"enemyMagician","p":[[2,"classLevel"]],"r":3,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5, t6, t7, t8, t9, t10;
    t1 = $.get($sc, "battle_mc");
    t2 = $.rand(4);
    $.sm(t1, "armyEID", (1 + t2));
    $.sm($.get($sc, "battle_mc"), "depthObj", $.add($.gm($.get($sc, "battle_mc"), "depthObj"), 1));
    $.set($sc, "nameSwordmanE", $.add("magicianE", $.gm($.get($sc, "battle_mc"), "depthObj")));
    t3 = $.cm($.get($sc, "battle_mc"), "attachMovie", [$.add("mc_enemy_magician", $r[2]), $.get($sc, "nameSwordmanE"), $.add($.gm($.get($sc, "battle_mc"), "depthObj"), (5000 * $.n($.gm($.get($sc, "battle_mc"), "armyEID"))))]);
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordmanE")), "posY", $.gm($.get($sc, "battle_mc"), "armyEID"));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordmanE")), "_xscale", (-100));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordmanE")), "_x", 1200);
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordmanE")), "_y", $.gm($.gm($.get($sc, "battle_mc"), "rowPos"), $.gm($.get($sc, "battle_mc"), "armyEID")));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordmanE")), "classLevel", $r[2]);
    t4 = $.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordmanE"));
    t5 = $.cf($sc, "upLevelPower", []);
    $.sm(t4, "lifeAwal", ((12 + ($.n(t5) * 2)) + (5 * ($.n($r[2]) - 1))));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordmanE")), "life", $.gm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordmanE")), "lifeAwal"));
    t6 = $.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordmanE"));
    t7 = $.cf($sc, "upLevelPower", []);
    $.sm(t6, "att", $.add($.add(5, t7), (3 * ($.n($r[2]) - 1))));
    t8 = $.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordmanE"));
    t9 = $.cf($sc, "upLevelPower", []);
    $.sm(t8, "def", $.add($.add(2, t9), (2 * ($.n($r[2]) - 1))));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordmanE")), "spd", (-1.5));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordmanE")), "v", $.gm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordmanE")), "spd"));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordmanE")), "timer", 50);
    t10 = $.cm($.gm($.get($sc, "battle_mc"), "enemyObjList"), "push", [$.get($sc, "nameSwordmanE")]);
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordmanE")), "nomor", $.gm($.gm($.get($sc, "battle_mc"), "enemyObjList"), "length"));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordmanE")), "cacheAsBitmap", true);
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordmanE")), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, t2, t3, en1, t4, en2, t5, en3, t6, en4, t7, en5, t8, t9, t10;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!$.bool($.get($sc, "habisPerang"))) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t1 = $.delMember($r[1], "onEnterFrame");
      $b = 2; continue;
    case 2:
      if (!!$.bool($.get($sc, "isPaused"))) { $b = 26; continue; }
      $b = 3; continue;
    case 3:
      t3 = $.cm($.gm($r[1], "clip"), "play", []);
      $.sm($r[1], "_x", $.add($.gm($r[1], "_x"), ($.n($.gm($r[1], "v")) * $.n($.get($sc, "gameSpeed")))));
      if (!!$.eq($.gm($r[1], "v"), 0)) { $b = 5; continue; }
      $b = 4; continue;
    case 4:
      t4 = $.cm($r[1], "gotoAndStop", ["walking"]);
      $b = 5; continue;
    case 5:
      en1 = $.enumerate($.gm($.get($sc, "battle_mc"), "swordmanList"));
      s0 = en1;
      $b = 6; continue;
    case 6:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 8; continue; }
      $b = 7; continue;
    case 7:
      $.set($sc, "index", $r[0]);
      t5 = $.cf($sc, "fightMagic", [$r[1], $.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "swordmanList"), $.get($sc, "index")))]);
      $b = 6; continue;
    case 8:
      en2 = $.enumerate($.gm($.get($sc, "battle_mc"), "spearmanList"));
      s0 = en2;
      $b = 9; continue;
    case 9:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 11; continue; }
      $b = 10; continue;
    case 10:
      $.set($sc, "index", $r[0]);
      t6 = $.cf($sc, "fightMagic", [$r[1], $.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "spearmanList"), $.get($sc, "index")))]);
      $b = 9; continue;
    case 11:
      en3 = $.enumerate($.gm($.get($sc, "battle_mc"), "horsearcherList"));
      s0 = en3;
      $b = 12; continue;
    case 12:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 14; continue; }
      $b = 13; continue;
    case 13:
      $.set($sc, "index", $r[0]);
      t7 = $.cf($sc, "fightMagic", [$r[1], $.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "horsearcherList"), $.get($sc, "index")))]);
      $b = 12; continue;
    case 14:
      en4 = $.enumerate($.gm($.get($sc, "battle_mc"), "gunmanList"));
      s0 = en4;
      $b = 15; continue;
    case 15:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 17; continue; }
      $b = 16; continue;
    case 16:
      $.set($sc, "index", $r[0]);
      t8 = $.cf($sc, "fightMagic", [$r[1], $.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "gunmanList"), $.get($sc, "index")))]);
      $b = 15; continue;
    case 17:
      en5 = $.enumerate($.gm($.get($sc, "battle_mc"), "magicianList"));
      s0 = en5;
      $b = 18; continue;
    case 18:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 20; continue; }
      $b = 19; continue;
    case 19:
      $.set($sc, "index", $r[0]);
      t9 = $.cf($sc, "fightMagic", [$r[1], $.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "magicianList"), $.get($sc, "index")))]);
      $b = 18; continue;
    case 20:
      if (!$.bool($.gm($r[1], "standby"))) { $b = 23; continue; }
      $b = 21; continue;
    case 21:
      $.sm($r[1], "timer", ($.n($.gm($r[1], "timer")) - 1));
      if (!!$.gt($.gm($r[1], "timer"), 0)) { $b = 23; continue; }
      $b = 22; continue;
    case 22:
      $.sm($r[1], "timer", 50);
      $.sm($r[1], "v", $.gm($r[1], "spd"));
      $b = 23; continue;
    case 23:
      $.sm($.gm($.gm($r[1], "life_span"), "span"), "_xscale", (100 * ($.n($.gm($r[1], "life")) / $.n($.gm($r[1], "lifeAwal")))));
      if (!!$.gt($.gm($r[1], "_x"), (-100))) { $b = 25; continue; }
      $b = 24; continue;
    case 24:
      t10 = $.cm($r[1], "removeMovieClip", []);
      $b = 25; continue;
    case 25:
      $b = 28; continue;
    case 26:
      t2 = $.cm($.gm($r[1], "clip"), "stop", []);
      $b = 28; continue;
    case 28: return;
    }
  }));
  }));
    $.def($sc, "enemyCowboy", $.fn({"n":"enemyCowboy","p":[[2,"classLevel"]],"r":3,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5, t6, t7, t8, t9, t10;
    t1 = $.get($sc, "battle_mc");
    t2 = $.rand(4);
    $.sm(t1, "armyEID", (1 + t2));
    $.sm($.get($sc, "battle_mc"), "depthObj", $.add($.gm($.get($sc, "battle_mc"), "depthObj"), 1));
    $.set($sc, "nameSwordmanE", $.add("cowboyE", $.gm($.get($sc, "battle_mc"), "depthObj")));
    t3 = $.cm($.get($sc, "battle_mc"), "attachMovie", [$.add("mc_enemy_cowboy", $r[2]), $.get($sc, "nameSwordmanE"), $.add($.gm($.get($sc, "battle_mc"), "depthObj"), (5000 * $.n($.gm($.get($sc, "battle_mc"), "armyEID"))))]);
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordmanE")), "posY", $.gm($.get($sc, "battle_mc"), "armyEID"));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordmanE")), "_xscale", (-100));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordmanE")), "_x", 1200);
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordmanE")), "_y", $.gm($.gm($.get($sc, "battle_mc"), "rowPos"), $.gm($.get($sc, "battle_mc"), "armyEID")));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordmanE")), "classLevel", $r[2]);
    t4 = $.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordmanE"));
    t5 = $.cf($sc, "upLevelPower", []);
    $.sm(t4, "lifeAwal", ((15 + ($.n(t5) * 2)) + (5 * ($.n($r[2]) - 1))));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordmanE")), "life", $.gm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordmanE")), "lifeAwal"));
    t6 = $.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordmanE"));
    t7 = $.cf($sc, "upLevelPower", []);
    $.sm(t6, "att", $.add($.add(5, t7), (3 * ($.n($r[2]) - 1))));
    t8 = $.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordmanE"));
    t9 = $.cf($sc, "upLevelPower", []);
    $.sm(t8, "def", $.add($.add(1, t9), (2 * ($.n($r[2]) - 1))));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordmanE")), "spd", (0 - $.n($.add(1, $r[2]))));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordmanE")), "v", $.gm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordmanE")), "spd"));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordmanE")), "timer", 50);
    t10 = $.cm($.gm($.get($sc, "battle_mc"), "enemyObjList"), "push", [$.get($sc, "nameSwordmanE")]);
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordmanE")), "nomor", $.gm($.gm($.get($sc, "battle_mc"), "enemyObjList"), "length"));
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordmanE")), "cacheAsBitmap", true);
    $.sm($.gm($.get($sc, "battle_mc"), $.get($sc, "nameSwordmanE")), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, t2, t3, en1, t4, en2, t5, en3, t6, en4, t7, en5, t8, t9, t10;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!$.bool($.get($sc, "habisPerang"))) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t1 = $.delMember($r[1], "onEnterFrame");
      $b = 2; continue;
    case 2:
      if (!!$.bool($.get($sc, "isPaused"))) { $b = 26; continue; }
      $b = 3; continue;
    case 3:
      t3 = $.cm($.gm($r[1], "clip"), "play", []);
      $.sm($r[1], "frontX", ($.n($.gm($r[1], "_x")) - 40));
      $.sm($r[1], "frontY", ($.n($.gm($r[1], "_y")) - ($.n($.gm($r[1], "_height")) / 1.5)));
      $.sm($r[1], "_x", $.add($.gm($r[1], "_x"), ($.n($.gm($r[1], "v")) * $.n($.get($sc, "gameSpeed")))));
      if (!!$.eq($.gm($r[1], "v"), 0)) { $b = 5; continue; }
      $b = 4; continue;
    case 4:
      t4 = $.cm($r[1], "gotoAndStop", ["walking"]);
      $b = 5; continue;
    case 5:
      en1 = $.enumerate($.gm($.get($sc, "battle_mc"), "swordmanList"));
      s0 = en1;
      $b = 6; continue;
    case 6:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 8; continue; }
      $b = 7; continue;
    case 7:
      $.set($sc, "index", $r[0]);
      t5 = $.cf($sc, "fightShoot", [$r[1], $.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "swordmanList"), $.get($sc, "index")))]);
      $b = 6; continue;
    case 8:
      en2 = $.enumerate($.gm($.get($sc, "battle_mc"), "spearmanList"));
      s0 = en2;
      $b = 9; continue;
    case 9:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 11; continue; }
      $b = 10; continue;
    case 10:
      $.set($sc, "index", $r[0]);
      t6 = $.cf($sc, "fightShoot", [$r[1], $.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "spearmanList"), $.get($sc, "index")))]);
      $b = 9; continue;
    case 11:
      en3 = $.enumerate($.gm($.get($sc, "battle_mc"), "horsearcherList"));
      s0 = en3;
      $b = 12; continue;
    case 12:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 14; continue; }
      $b = 13; continue;
    case 13:
      $.set($sc, "index", $r[0]);
      t7 = $.cf($sc, "fightShoot", [$r[1], $.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "horsearcherList"), $.get($sc, "index")))]);
      $b = 12; continue;
    case 14:
      en4 = $.enumerate($.gm($.get($sc, "battle_mc"), "gunmanList"));
      s0 = en4;
      $b = 15; continue;
    case 15:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 17; continue; }
      $b = 16; continue;
    case 16:
      $.set($sc, "index", $r[0]);
      t8 = $.cf($sc, "fightShoot", [$r[1], $.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "gunmanList"), $.get($sc, "index")))]);
      $b = 15; continue;
    case 17:
      en5 = $.enumerate($.gm($.get($sc, "battle_mc"), "magicianList"));
      s0 = en5;
      $b = 18; continue;
    case 18:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 20; continue; }
      $b = 19; continue;
    case 19:
      $.set($sc, "index", $r[0]);
      t9 = $.cf($sc, "fightShoot", [$r[1], $.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "magicianList"), $.get($sc, "index")))]);
      $b = 18; continue;
    case 20:
      if (!$.bool($.gm($r[1], "standby"))) { $b = 23; continue; }
      $b = 21; continue;
    case 21:
      $.sm($r[1], "timer", ($.n($.gm($r[1], "timer")) - 1));
      if (!!$.gt($.gm($r[1], "timer"), 0)) { $b = 23; continue; }
      $b = 22; continue;
    case 22:
      $.sm($r[1], "timer", 50);
      $.sm($r[1], "v", $.gm($r[1], "spd"));
      $b = 23; continue;
    case 23:
      $.sm($.gm($.gm($r[1], "life_span"), "span"), "_xscale", (100 * ($.n($.gm($r[1], "life")) / $.n($.gm($r[1], "lifeAwal")))));
      if (!!$.gt($.gm($r[1], "_x"), (-100))) { $b = 25; continue; }
      $b = 24; continue;
    case 24:
      t10 = $.cm($r[1], "removeMovieClip", []);
      $b = 25; continue;
    case 25:
      $b = 28; continue;
    case 26:
      t2 = $.cm($.gm($r[1], "clip"), "stop", []);
      $b = 28; continue;
    case 28: return;
    }
  }));
  }));
    $.def($sc, "tampilMenang", $.fn({"n":"tampilMenang","p":[],"r":7,"f":105}, $sc, function($sc, $this, $args, $r) {
    var s0, s1, t1, t2, en1, t3, t4, en2, t5;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.set($sc, "habisPerang", true);
      t1 = $.cf($sc, "soundFX", ["win"]);
      $.sm($.get($sc, "posPengurang"), $.get($sc, "perangDi"), 0);
      $.set($sc, "isPaused", true);
      t2 = $.cf($sc, "tampilBlur", []);
      $.sm($.gm($r[2], "statisticList"), 8, ($.n($.gm($.gm($r[2], "statisticList"), 8)) + 1));
      $.set($sc, "menangBattle", true);
      $.sm($.get($sc, "pasukanMusuh"), "menang", true);
      $r[3] = [0, 0, 0, 0, 0, 0];
      $r[4] = [0, "swordmanList", "horsearcherList", "spearmanList", "gunmanList", "magicianList"];
      en1 = $.enumerate($r[3]);
      s0 = en1;
      $b = 1; continue;
    case 1:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 8; continue; }
      $b = 2; continue;
    case 2:
      t4 = $r[0];
      $r[6] = t4;
      en2 = $.enumerate($.gm($.get($sc, "battle_mc"), $.gm($r[4], $r[6])));
      s1 = en2;
      $b = 3; continue;
    case 3:
      $r[0] = s1.shift();
      if ($r[0] === null) { $b = 7; continue; }
      $b = 4; continue;
    case 4:
      t5 = $r[0];
      $r[5] = t5;
      if (!$.gt($.gm($.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), $.gm($r[4], $r[6])), $r[5])), "life"), 0)) { $b = 6; continue; }
      $b = 5; continue;
    case 5:
      $.sm($r[3], $r[6], ($.n($.gm($r[3], $r[6])) + 1));
      $b = 6; continue;
    case 6:
      $b = 3; continue;
    case 7:
      $.sm($.get($sc, "armyList"), $r[6], $.add($.gm($.get($sc, "armyList"), $r[6]), $.gm($r[3], $r[6])));
      $b = 1; continue;
    case 8:
      $.sm($.get($sc, "battleSummary"), 4, $.add($.add($.gm($.gm($.get($sc, "battle_mc"), "benteng"), "life"), "/"), $.gm($.gm($.get($sc, "battle_mc"), "benteng"), "lifeAwal")));
      t3 = $.cm($r[2], "attachMovie", ["window_win", "window_win", 1000]);
      $.sm($.get($sc, "window_win"), "_x", ($.n($.gm($.get($sc, "Stage"), "width")) / 2));
      $.sm($.get($sc, "window_win"), "_y", ($.n($.gm($.get($sc, "Stage"), "height")) / 2));
      $.sm($.get($sc, "window_win"), "_alpha", 0);
      $.sm($.get($sc, "window_win"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1;
    t1 = $.cf($sc, "efekFade", [$r[1]]);
  }));
      $.sm($.gm($.get($sc, "window_win"), "continue_btn"), "onRelease", $.fn({"n":"","p":[],"r":2,"f":106}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3;
    t1 = $.cm($r[1], "gotoAndStop", ["main"]);
    $.set($sc, "isPaused", false);
    t2 = $.cm($.get($sc, "blur"), "removeMovieClip", []);
    t3 = $.cm($.get($sc, "window_win"), "removeMovieClip", []);
  }));
      $b = 9; continue;
    case 9: return;
    }
  }));
    $.def($sc, "tampilKalah", $.fn({"n":"tampilKalah","p":[],"r":4,"f":105}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, en1, t2, t3;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.set($sc, "habisPerang", true);
      $.set($sc, "isPaused", true);
      t1 = $.cf($sc, "tampilBlur", []);
      $.sm($.get($sc, "pasukanMusuh"), "menang", false);
      $.sm($.gm($r[2], "statisticList"), 16, ($.n($.gm($.gm($r[2], "statisticList"), 16)) + 1));
      en1 = $.enumerate($.get($sc, "comLoc"));
      s0 = en1;
      $b = 1; continue;
    case 1:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 5; continue; }
      $b = 2; continue;
    case 2:
      t3 = $r[0];
      $r[3] = t3;
      if (!$.eq($.gm($.get($sc, "posMap"), ($.n($.get($sc, "map")) - 1)), $.gm($.get($sc, "comLoc"), $r[3]))) { $b = 4; continue; }
      $b = 3; continue;
    case 3:
      $.sm($.get($sc, "comLoc"), $r[3], 33);
      $.sm($.get($sc, "comLocBaru"), $r[3], 33);
      $b = 4; continue;
    case 4:
      $b = 1; continue;
    case 5:
      t2 = $.cm($r[2], "attachMovie", ["window_lose", "window_lose", 1000]);
      $.sm($.get($sc, "window_lose"), "_x", ($.n($.gm($.get($sc, "Stage"), "width")) / 2));
      $.sm($.get($sc, "window_lose"), "_y", ($.n($.gm($.get($sc, "Stage"), "height")) / 2));
      $.sm($.get($sc, "window_lose"), "_alpha", 0);
      $.sm($.get($sc, "window_lose"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1;
    t1 = $.cf($sc, "efekFade", [$r[1]]);
  }));
      $.sm($.gm($.get($sc, "window_lose"), "continue_btn"), "onRelease", $.fn({"n":"","p":[],"r":2,"f":106}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!$.eq($.get($sc, "map"), 13)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t2 = $.cm($r[1], "gotoAndStop", ["gameover"]);
      $b = 3; continue;
    case 2:
      t1 = $.cm($r[1], "gotoAndStop", ["main"]);
      $b = 3; continue;
    case 3:
      $.set($sc, "isPaused", false);
      t3 = $.cm($.get($sc, "blur"), "removeMovieClip", []);
      t4 = $.cm($.get($sc, "window_lose"), "removeMovieClip", []);
      $b = 4; continue;
    case 4: return;
    }
  }));
      $b = 6; continue;
    case 6: return;
    }
  }));
    $.stop($tgt);
    t1 = $.cf($sc, "soundBGM", ["bgm3"]);
    $.def($sc, "gameSpeed", 1);
    $.sm($.get($sc, "ctrl1"), "onRelease", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    var t1;
    t1 = $.cf($sc, "tampilOption", [2]);
  }));
    $.sm($.get($sc, "ctrl2"), "onRelease", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!!$.bool($.get($sc, "isPaused"))) { $b = 3; continue; }
      $b = 1; continue;
    case 1:
      $.set($sc, "gameSpeed", 1);
      $b = 3; continue;
    case 3: return;
    }
  }));
    $.sm($.get($sc, "ctrl3"), "onRelease", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!!$.bool($.get($sc, "isPaused"))) { $b = 3; continue; }
      $b = 1; continue;
    case 1:
      $.set($sc, "gameSpeed", 2);
      $b = 3; continue;
    case 3: return;
    }
  }));
    t2 = $.cm($.get($sc, "tulisan"), "gotoAndStop", [$.add($.gm($.get($sc, "_root"), "bahasa"), 1)]);
    $.def($sc, "battleSummary", [0, 0, 0, 0, 0, 0]);
    $.def($sc, "penghitungTimer", 0);
    $.def($sc, "jurusAktif", $.get($sc, "none"));
    $.def($sc, "isPaused", false);
    $.def($sc, "isSpecial", false);
    $.def($sc, "habisPerang", false);
    $.set($sc, "army0", [null]);
    $.set($sc, "army1", ["Horse Archer", ["mc_horsearcher1", 12, 5, 2, 4, 50], ["mc_horsearcher2", 25, 7, 3, 5, 80]]);
    $.set($sc, "army2", ["Swordman", ["mc_swordman1", 15, 5, 3, 2, 40], ["mc_swordman2", 30, 8, 4, 3, 60]]);
    $.set($sc, "army3", ["Spearman", ["mc_spearman1", 18, 7, 4, 3, 50], ["mc_spearman2", 35, 9, 5, 3, 70]]);
    $.set($sc, "army4", ["Gunman", ["mc_gunman1", 10, 5, 2, 2, 40], ["mc_gunman2", 18, 10, 2, 3, 60]]);
    $.set($sc, "army5", ["Magician", ["mc_magician1", 12, 10, 4, 2, 40], ["mc_magician2", 25, 15, 5, 3, 60]]);
    t3 = $.nw($sc, "Array", []);
    $.def($sc, "armyStock", t3);
    $.def($sc, "i", 0);
    $b = 1; continue;
  case 1:
    if (!!$.gt($.get($sc, "i"), 5)) { $b = 3; continue; }
    $b = 2; continue;
  case 2:
    t5 = $.cm($.get($sc, "armyStock"), "push", [$.gm($.get($sc, "_root"), $.add("army", $.get($sc, "i")))]);
    $.set($sc, "i", ($.n($.get($sc, "i")) + 1));
    $b = 1; continue;
  case 3:
    $.set($sc, "enemyLev0", [[6, $.get($sc, "enemySwordman"), 1], [2, $.get($sc, "enemyHorsearcher"), 1]]);
    $.set($sc, "enemyLev1", [[10, $.get($sc, "enemySwordman"), 1], [5, $.get($sc, "enemyHorsearcher"), 1]]);
    $.set($sc, "enemyLev2", [[15, $.get($sc, "enemySwordman"), 2], [10, $.get($sc, "enemyHorsearcher"), 1], [5, $.get($sc, "enemyCowboy"), 1]]);
    $.set($sc, "enemyLev3", [[15, $.get($sc, "enemySwordman"), 2], [15, $.get($sc, "enemyHorsearcher"), 2], [5, $.get($sc, "enemyCowboy"), 1], [5, $.get($sc, "enemySpearman"), 1]]);
    $.set($sc, "enemyLev4", [[20, $.get($sc, "enemySwordman"), 2], [20, $.get($sc, "enemyHorsearcher"), 2], [10, $.get($sc, "enemyCowboy"), 1], [10, $.get($sc, "enemySpearman"), 1]]);
    $.set($sc, "enemyLev5", [[20, $.get($sc, "enemySwordman"), 2], [20, $.get($sc, "enemyHorsearcher"), 2], [15, $.get($sc, "enemyCowboy"), 2], [10, $.get($sc, "enemySpearman"), 2]]);
    $.set($sc, "enemyLev6", [[20, $.get($sc, "enemySwordman"), 2], [20, $.get($sc, "enemyHorsearcher"), 2], [20, $.get($sc, "enemyCowboy"), 3], [20, $.get($sc, "enemySpearman"), 2], [10, $.get($sc, "enemyMagician"), 2]]);
    $.set($sc, "enemyLev7", [[20, $.get($sc, "enemySwordman"), 2], [20, $.get($sc, "enemyHorsearcher"), 2], [25, $.get($sc, "enemyCowboy"), 3], [25, $.get($sc, "enemySpearman"), 2], [15, $.get($sc, "enemyMagician"), 2]]);
    t4 = $.nw($sc, "Array", []);
    $.def($sc, "enemyLevList", t4);
    $.def($sc, "i", 0);
    $b = 4; continue;
  case 4:
    if (!!$.gt($.get($sc, "i"), 7)) { $b = 6; continue; }
    $b = 5; continue;
  case 5:
    t7 = $.cm($.get($sc, "enemyLevList"), "push", [$.gm($.get($sc, "_root"), $.add("enemyLev", $.get($sc, "i")))]);
    $.set($sc, "i", ($.n($.get($sc, "i")) + 1));
    $b = 4; continue;
  case 6:
    t6 = $.nw($sc, "Array", []);
    $.def($sc, "daftarMap", t6);
    $.def($sc, "a", 0);
    $b = 7; continue;
  case 7:
    if (!!$.gt($.get($sc, "a"), 25)) { $b = 9; continue; }
    $b = 8; continue;
  case 8:
    t9 = $.cm($.get($sc, "daftarMap"), "push", [$.add("map", $.get($sc, "a"))]);
    $.set($sc, "a", ($.n($.get($sc, "a")) + 1));
    $b = 7; continue;
  case 9:
    $.set($sc, "specialList", [undefined, $.get($sc, "rageStorm"), $.get($sc, "rainArrow"), $.get($sc, "earthQuake"), $.get($sc, "explodingFrenzy"), $.get($sc, "healingSpring")]);
    t8 = $.cm($.get($sc, "Key"), "removeListener", [$.get($sc, "keyListener")]);
    en1 = $.enumerate($.gm($.get($sc, "battle_mc"), "swordmanList"));
    s0 = en1;
    $b = 10; continue;
  case 10:
    $r[0] = s0.shift();
    if ($r[0] === null) { $b = 12; continue; }
    $b = 11; continue;
  case 11:
    $.set($sc, "index", $r[0]);
    t10 = $.delMember($.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "swordmanList"), $.get($sc, "index"))), "onEnterFrame");
    $b = 10; continue;
  case 12:
    en2 = $.enumerate($.gm($.get($sc, "battle_mc"), "spearmanList"));
    s0 = en2;
    $b = 13; continue;
  case 13:
    $r[0] = s0.shift();
    if ($r[0] === null) { $b = 15; continue; }
    $b = 14; continue;
  case 14:
    $.set($sc, "index", $r[0]);
    t11 = $.delMember($.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "spearmanList"), $.get($sc, "index"))), "onEnterFrame");
    $b = 13; continue;
  case 15:
    en3 = $.enumerate($.gm($.get($sc, "battle_mc"), "horsearcherList"));
    s0 = en3;
    $b = 16; continue;
  case 16:
    $r[0] = s0.shift();
    if ($r[0] === null) { $b = 18; continue; }
    $b = 17; continue;
  case 17:
    $.set($sc, "index", $r[0]);
    t12 = $.delMember($.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "horsearcherList"), $.get($sc, "index"))), "onEnterFrame");
    $b = 16; continue;
  case 18:
    en4 = $.enumerate($.gm($.get($sc, "battle_mc"), "gunmanList"));
    s0 = en4;
    $b = 19; continue;
  case 19:
    $r[0] = s0.shift();
    if ($r[0] === null) { $b = 21; continue; }
    $b = 20; continue;
  case 20:
    $.set($sc, "index", $r[0]);
    t13 = $.delMember($.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "gunmanList"), $.get($sc, "index"))), "onEnterFrame");
    $b = 19; continue;
  case 21:
    en5 = $.enumerate($.gm($.get($sc, "battle_mc"), "magicianList"));
    s0 = en5;
    $b = 22; continue;
  case 22:
    $r[0] = s0.shift();
    if ($r[0] === null) { $b = 24; continue; }
    $b = 23; continue;
  case 23:
    $.set($sc, "index", $r[0]);
    t14 = $.delMember($.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "magicianList"), $.get($sc, "index"))), "onEnterFrame");
    $b = 22; continue;
  case 24:
    en6 = $.enumerate($.gm($.get($sc, "battle_mc"), "enemyObjList"));
    s0 = en6;
    $b = 25; continue;
  case 25:
    $r[0] = s0.shift();
    if ($r[0] === null) { $b = 27; continue; }
    $b = 26; continue;
  case 26:
    $.set($sc, "index", $r[0]);
    t15 = $.delMember($.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "enemyObjList"), $.get($sc, "index"))), "onEnterFrame");
    $b = 25; continue;
  case 27:
    $.def($sc, "enemyoutbahasa", ["Enemy Left", "Ennemis restant", "Musuh Tersisa"]);
    $.sm($.get($sc, "_root"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":106}, $sc, function($sc, $this, $args, $r) {
    var $tgt = $.clipOf($sc);
    var s0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.sm($.gm($r[1], "enemyOut"), "text", $.add($.add($.gm($.get($sc, "enemyoutbahasa"), $.get($sc, "bahasa")), ": "), $.gm($.get($sc, "battle_mc"), "enemyLeft")));
      $.sm($.gm($r[1], "base_food"), "text", $.gm($.gm($r[1], "resourceList"), 2));
      t1 = !$.bool($.get($sc, "isPaused"));
      t2 = !t1;
      s0 = t1;
      if (t2) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      s0 = !$.bool($.get($sc, "isSpecial"));
      $b = 2; continue;
    case 2:
      if (!$.bool(s0)) { $b = 4; continue; }
      $b = 3; continue;
    case 3:
      $.sm($.get($sc, "menu_btn"), "enabled", true);
      $.sm($.get($sc, "surrender_btn"), "enabled", true);
      $b = 5; continue;
    case 4:
      $.sm($.get($sc, "menu_btn"), "enabled", false);
      $.sm($.get($sc, "surrender_btn"), "enabled", false);
      $b = 5; continue;
    case 5:
      t3 = $.lt($.gp($tgt, "_ymouse"), 500);
      t4 = !t3;
      s0 = t3;
      if (t4) { $b = 7; continue; }
      $b = 6; continue;
    case 6:
      s0 = $.gt($.gp($tgt, "_ymouse"), 100);
      $b = 7; continue;
    case 7:
      if (!$.bool(s0)) { $b = 19; continue; }
      $b = 8; continue;
    case 8:
      t5 = !$.gt($.gp($tgt, "_xmouse"), 100);
      t6 = t5;
      s0 = t5;
      if (t6) { $b = 10; continue; }
      $b = 9; continue;
    case 9:
      t7 = $.cm($.get($sc, "Key"), "isDown", [37]);
      s0 = t7;
      $b = 10; continue;
    case 10:
      if (!$.bool(s0)) { $b = 13; continue; }
      $b = 11; continue;
    case 11:
      if (!$.lt($.gm($.get($sc, "battle_mc"), "_x"), 0)) { $b = 13; continue; }
      $b = 12; continue;
    case 12:
      $.sm($.get($sc, "semak_mc"), "_x", $.add($.gm($.get($sc, "semak_mc"), "_x"), 9));
      $.sm($.get($sc, "battle_mc"), "_x", $.add($.gm($.get($sc, "battle_mc"), "_x"), 5));
      $.sm($.get($sc, "battlebg_mc"), "_x", $.add($.gm($.get($sc, "battlebg_mc"), "_x"), 2));
      $b = 13; continue;
    case 13:
      t8 = !$.lt($.gp($tgt, "_xmouse"), 700);
      t9 = t8;
      s0 = t8;
      if (t9) { $b = 15; continue; }
      $b = 14; continue;
    case 14:
      t10 = $.cm($.get($sc, "Key"), "isDown", [39]);
      s0 = t10;
      $b = 15; continue;
    case 15:
      if (!$.bool(s0)) { $b = 19; continue; }
      $b = 16; continue;
    case 16:
      if (!$.gt($.gm($.get($sc, "battle_mc"), "_x"), (-400))) { $b = 19; continue; }
      $b = 17; continue;
    case 17:
      $.sm($.get($sc, "semak_mc"), "_x", ($.n($.gm($.get($sc, "semak_mc"), "_x")) - 9));
      $.sm($.get($sc, "battle_mc"), "_x", ($.n($.gm($.get($sc, "battle_mc"), "_x")) - 5));
      $.sm($.get($sc, "battlebg_mc"), "_x", ($.n($.gm($.get($sc, "battlebg_mc"), "_x")) - 2));
      $b = 19; continue;
    case 19: return;
    }
  }));
    $.def($sc, "i", 1);
    $b = 28; continue;
  case 28:
    if (!!$.gt($.get($sc, "i"), $.gm($.get($sc, "pasukanMusuh"), "trapped"))) { $b = 33; continue; }
    $b = 29; continue;
  case 29:
    t18 = $.get($sc, "enemyLevList");
    t19 = $.cm($.get($sc, "Math"), "floor", [($.n($.get($sc, "days")) / 10)]);
    en8 = $.enumerate($.gm(t18, t19));
    s0 = en8;
    $b = 30; continue;
  case 30:
    $r[0] = s0.shift();
    if ($r[0] === null) { $b = 32; continue; }
    $b = 31; continue;
  case 31:
    $.def($sc, "index", $r[0]);
    t35 = $.get($sc, "enemyLevList");
    t36 = $.cm($.get($sc, "Math"), "floor", [($.n($.get($sc, "days")) / 10)]);
    t37 = $.gm($.gm(t35, t36), $.get($sc, "index"));
    t38 = $.get($sc, "enemyLevList");
    t39 = $.cm($.get($sc, "Math"), "floor", [($.n($.get($sc, "days")) / 10)]);
    t40 = $.gm($.gm($.gm(t38, t39), $.get($sc, "index")), 0);
    t41 = $.get($sc, "enemyLevList");
    t42 = $.cm($.get($sc, "Math"), "floor", [($.n($.get($sc, "days")) / 10)]);
    t43 = $.cm($.get($sc, "Math"), "round", [($.n($.gm($.gm($.gm(t41, t42), $.get($sc, "index")), 0)) / 5)]);
    $.sm(t37, 0, ($.n(t40) - $.n(t43)));
    $b = 30; continue;
  case 32:
    $.set($sc, "i", ($.n($.get($sc, "i")) + 1));
    $b = 28; continue;
  case 33:
    $.sm($.get($sc, "battle_mc"), "enemyCount", 0);
    $.def($sc, "totalEnemy", 0);
    t16 = $.get($sc, "enemyLevList");
    t17 = $.cm($.get($sc, "Math"), "floor", [($.n($.get($sc, "days")) / 10)]);
    en7 = $.enumerate($.gm(t16, t17));
    s0 = en7;
    $b = 34; continue;
  case 34:
    $r[0] = s0.shift();
    if ($r[0] === null) { $b = 36; continue; }
    $b = 35; continue;
  case 35:
    $.def($sc, "index", $r[0]);
    t32 = $.get($sc, "totalEnemy");
    t33 = $.get($sc, "enemyLevList");
    t34 = $.cm($.get($sc, "Math"), "floor", [($.n($.get($sc, "days")) / 10)]);
    $.set($sc, "totalEnemy", $.add(t32, $.gm($.gm($.gm(t33, t34), $.get($sc, "index")), 0)));
    $b = 34; continue;
  case 36:
    $.sm($.get($sc, "battle_mc"), "enemyCount", ($.n($.get($sc, "totalEnemy")) - $.n($.gm($.get($sc, "posPengurang"), $.get($sc, "perangDi")))));
    $.sm($.get($sc, "battle_mc"), "enemyLeft", $.gm($.get($sc, "battle_mc"), "enemyCount"));
    $.sm($.get($sc, "battle_mc"), "depthObj", 0);
    $.sm($.get($sc, "battle_mc"), "armyID", 1);
    $.sm($.get($sc, "battle_mc"), "armyEID", 0);
    $.sm($.get($sc, "battle_mc"), "rowPos", [0, 370, 395, 435, 460, 500]);
    $.sm($.get($sc, "battle_mc"), "rowPosPanglima", [0, [410, 3], [390, 2], [435, 4], [460, 5], [370, 1], [500, 6]]);
    $.sm($.get($sc, "battle_mc"), "battlePosPanglima", 0);
    t20 = $.get($sc, "battle_mc");
    t21 = $.nw($sc, "Array", []);
    $.sm(t20, "swordmanList", t21);
    t22 = $.get($sc, "battle_mc");
    t23 = $.nw($sc, "Array", []);
    $.sm(t22, "spearmanList", t23);
    t24 = $.get($sc, "battle_mc");
    t25 = $.nw($sc, "Array", []);
    $.sm(t24, "horsearcherList", t25);
    t26 = $.get($sc, "battle_mc");
    t27 = $.nw($sc, "Array", []);
    $.sm(t26, "gunmanList", t27);
    t28 = $.get($sc, "battle_mc");
    t29 = $.nw($sc, "Array", []);
    $.sm(t28, "magicianList", t29);
    t30 = $.get($sc, "battle_mc");
    t31 = $.nw($sc, "Array", []);
    $.sm(t30, "enemyObjList", t31);
    $.def($sc, "d", 1);
    $b = 37; continue;
  case 37:
    if (!!$.gt($.get($sc, "d"), 4)) { $b = 39; continue; }
    $b = 38; continue;
  case 38:
    $.sm($.gm($.get($sc, "battle_mc"), $.add("row", $.get($sc, "d"))), "enabled", false);
    $.set($sc, "d", ($.n($.get($sc, "d")) + 1));
    $b = 37; continue;
  case 39:
    t44 = $.nw($sc, "Array", []);
    $.def($sc, "armyBattle", t44);
    en9 = $.enumerate($.get($sc, "comLoc"));
    s0 = en9;
    $b = 40; continue;
  case 40:
    $r[0] = s0.shift();
    if ($r[0] === null) { $b = 44; continue; }
    $b = 41; continue;
  case 41:
    $.def($sc, "isi", $r[0]);
    if (!$.eq($.gm($.get($sc, "posMap"), ($.n($.get($sc, "map")) - 1)), $.gm($.get($sc, "comLoc"), $.get($sc, "isi")))) { $b = 43; continue; }
    $b = 42; continue;
  case 42:
    t45 = $.cm($.get($sc, "armyBattle"), "push", [$.get($sc, "isi")]);
    $b = 43; continue;
  case 43:
    $b = 40; continue;
  case 44:
    $.def($sc, "summonCommander", [undefined, $.get($sc, "summonSharpwolf"), $.get($sc, "summonRunningbow"), $.get($sc, "summonBigbear"), $.get($sc, "summonBeautyflower"), $.get($sc, "summonBroadeagle"), $.get($sc, "summonGreatwinstar")]);
    $.def($sc, "specialDesList", [undefined, ["Force our armies to be rage!", "Les troupes alliées ont la rage de vaincre !", "Membuat para pasukan mengamuk!"], ["Call rain arrow for reinforcement!", "Faire tomber une pluie de flèches en soutien!", "Mengeluarkan hujan panah!"], ["Summon tremors to disband enemies", "Faire trembler la terre pour anéantir l'ennemi", "Memanggil gempa bumi untuk menghancurkan musuh"], ["Explode enemies with explosive bomb", "Lancer des bombes sur les ennemis", "Meledakkan musuh dengan bom"], ["Heal allies unit", "Soigne les unités alliées", "Menyembuhkan pasukan kita"]]);
    $.def($sc, "abilitiesBahasa", ["SPECIAL ABILITIES", "Pouvoirs spéciaux", "KEMAMPUAN SPESIAL"]);
    $.def($sc, "isDeploying", false);
    $.def($sc, "tombolSummon", [0, "Swordman", "Horsearcher", "Spearman", "Gunman", "Magician"]);
    $.def($sc, "commanderCount", 0);
    $.def($sc, "specialUsedCount", 0);
    $.sm($.get($sc, "specialDes"), "text", $.gm($.get($sc, "abilitiesBahasa"), $.get($sc, "bahasa")));
    en10 = $.enumerate($.get($sc, "tombolSummon"));
    s0 = en10;
    $b = 45; continue;
  case 45:
    $r[0] = s0.shift();
    if ($r[0] === null) { $b = 57; continue; }
    $b = 46; continue;
  case 46:
    $.def($sc, "s", $r[0]);
    en11 = $.enumerate($.get($sc, "armyBattle"));
    s1 = en11;
    $b = 47; continue;
  case 47:
    $r[0] = s1.shift();
    if ($r[0] === null) { $b = 56; continue; }
    $b = 48; continue;
  case 48:
    $.def($sc, "r", $r[0]);
    if (!$.eq($.get($sc, "s"), $.gm($.get($sc, "armyBattle"), $.get($sc, "r")))) { $b = 54; continue; }
    $b = 49; continue;
  case 49:
    $.set($sc, "commanderCount", ($.n($.get($sc, "commanderCount")) + 1));
    if (!!$.lt($.get($sc, "commanderCount"), 5)) { $b = 51; continue; }
    $b = 50; continue;
  case 50:
    t61 = $.cf($sc, "newAchievement", [2]);
    $b = 51; continue;
  case 51:
    t60 = $.cm($.get($sc, "summonCommander"), $.get($sc, "s"), []);
    if (!$.gt($.gm($.get($sc, "armyList"), $.get($sc, "s")), 0)) { $b = 53; continue; }
    $b = 52; continue;
  case 52:
    $.sm($.gm($.get($sc, "_root"), $.add($.gm($.get($sc, "tombolSummon"), $.get($sc, "s")), "_btn")), "sisa", $.gm($.get($sc, "armyList"), $.get($sc, "s")));
    $.sm($.gm($.get($sc, "_root"), $.add($.gm($.get($sc, "tombolSummon"), $.get($sc, "s")), "_btn")), "s", $.get($sc, "s"));
    t63 = $.cm($.gm($.gm($.get($sc, "_root"), $.add($.gm($.get($sc, "tombolSummon"), $.get($sc, "s")), "_btn")), "photo"), "gotoAndStop", [$.get($sc, "s")]);
    t64 = $.cm($.gm($.gm($.get($sc, "_root"), $.add($.gm($.get($sc, "tombolSummon"), $.get($sc, "s")), "_btn")), "photo_mask"), "gotoAndStop", [$.get($sc, "s")]);
    $.sm($.gm($.get($sc, "_root"), $.add($.gm($.get($sc, "tombolSummon"), $.get($sc, "s")), "_btn")), "jedaAwal", (75 - (25 * $.n($.gm($.get($sc, "townSpeStat"), 3)))));
    $.sm($.gm($.get($sc, "_root"), $.add($.gm($.get($sc, "tombolSummon"), $.get($sc, "s")), "_btn")), "jeda", $.gm($.gm($.get($sc, "_root"), $.add($.gm($.get($sc, "tombolSummon"), $.get($sc, "s")), "_btn")), "jedaAwal"));
    $.sm($.gm($.get($sc, "_root"), $.add($.gm($.get($sc, "tombolSummon"), $.get($sc, "s")), "_btn")), "enabled", false);
    $.sm($.gm($.get($sc, "_root"), $.add($.gm($.get($sc, "tombolSummon"), $.get($sc, "s")), "_btn")), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, t2, t3, t4, t5, t6, t7, t8, t9;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!!$.gt($.gm($.get($sc, "armyList"), $.gm($r[1], "s")), 0)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t2 = $.cm($r[1], "gotoAndStop", [5]);
      $.sm($.gm($r[1], "photo_mask"), "_visible", 0);
      t3 = $.delMember($r[1], "onEnterFrame");
      $b = 2; continue;
    case 2:
      t1 = $.cm($.gm($r[1], "photo_mask"), "gotoAndStop", [$.gm($r[1], "s")]);
      if (!!$.bool($.get($sc, "isPaused"))) { $b = 16; continue; }
      $b = 3; continue;
    case 3:
      if (!!$.lt($.gm($.get($sc, "resourceList"), 2), 0)) { $b = 14; continue; }
      $b = 4; continue;
    case 4:
      t5 = !$.bool($.get($sc, "isDeploying"));
      t6 = !t5;
      s0 = t5;
      if (t6) { $b = 6; continue; }
      $b = 5; continue;
    case 5:
      s0 = $.gt($.gm($r[1], "sisa"), 0);
      $b = 6; continue;
    case 6:
      if (!$.bool(s0)) { $b = 8; continue; }
      $b = 7; continue;
    case 7:
      $.sm($r[1], "enabled", true);
      t7 = $.cm($r[1], "gotoAndStop", [1]);
      $b = 10; continue;
    case 8:
      $.sm($r[1], "enabled", false);
      if (!!$.bool($.gm($r[1], "isChoosen"))) { $b = 10; continue; }
      $b = 9; continue;
    case 9:
      t8 = $.cm($r[1], "gotoAndStop", [4]);
      $b = 10; continue;
    case 10:
      $.sm($r[1], "jeda", $.add($.gm($r[1], "jeda"), (1 * $.n($.get($sc, "gameSpeed")))));
      if (!!$.lt($.gm($r[1], "jeda"), $.gm($r[1], "jedaAwal"))) { $b = 12; continue; }
      $b = 11; continue;
    case 11:
      $.sm($r[1], "jeda", $.gm($r[1], "jedaAwal"));
      $.sm($r[1], "onRelease", $.get($sc, "deployingUnit"));
      $b = 13; continue;
    case 12:
      $.sm($r[1], "enabled", false);
      t9 = $.cm($r[1], "gotoAndStop", [3]);
      $.sm($.gm($r[1], "preloader"), "_yscale", (100 - (($.n($.gm($r[1], "jeda")) / $.n($.gm($r[1], "jedaAwal"))) * 100)));
      $b = 13; continue;
    case 13:
      $b = 16; continue;
    case 14:
      $.sm($.get($sc, "resourceList"), 2, 0);
      $.sm($r[1], "enabled", false);
      t4 = $.cm($r[1], "gotoAndStop", [5]);
      $b = 16; continue;
    case 16: return;
    }
  }));
    $b = 53; continue;
  case 53:
    $.sm($.gm($.get($sc, "_root"), $.add("special_btn", $.get($sc, "s"))), "special", true);
    t62 = $.cm($.gm($.gm($.get($sc, "_root"), $.add("special_btn", $.get($sc, "s"))), "mc"), "gotoAndStop", [$.get($sc, "s")]);
    $.sm($.gm($.get($sc, "_root"), $.add("special_btn", $.get($sc, "s"))), "s", $.get($sc, "s"));
    $.sm($.gm($.get($sc, "_root"), $.add("special_btn", $.get($sc, "s"))), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, t2, t3, t4, t5;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      t1 = $.cm($.gm($r[1], "mc"), "gotoAndStop", [$.gm($r[1], "s")]);
      if (!$.bool($.gm($r[1], "special"))) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t3 = $.cm($r[1], "gotoAndStop", [1]);
      $b = 3; continue;
    case 2:
      t2 = $.cm($r[1], "gotoAndStop", [2]);
      $b = 3; continue;
    case 3:
      t4 = $.get($sc, "isPaused");
      t5 = !$.bool(t4);
      s0 = t4;
      if (t5) { $b = 5; continue; }
      $b = 4; continue;
    case 4:
      s0 = $.get($sc, "isSpecial");
      $b = 5; continue;
    case 5:
      if (!$.bool(s0)) { $b = 7; continue; }
      $b = 6; continue;
    case 6:
      $.sm($r[1], "enabled", false);
      $b = 9; continue;
    case 7:
      $.sm($r[1], "enabled", true);
      $b = 9; continue;
    case 9: return;
    }
  }));
    $.sm($.gm($.get($sc, "_root"), $.add("special_btn", $.get($sc, "s"))), "onRollOver", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    $.sm($.get($sc, "specialDes"), "text", $.gm($.gm($.get($sc, "specialDesList"), $.gm($r[1], "s")), $.get($sc, "bahasa")));
  }));
    $.sm($.gm($.get($sc, "_root"), $.add("special_btn", $.get($sc, "s"))), "onRollOut", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    $.sm($.get($sc, "specialDes"), "text", $.gm($.get($sc, "abilitiesBahasa"), $.get($sc, "bahasa")));
  }));
    $.sm($.gm($.get($sc, "_root"), $.add("special_btn", $.get($sc, "s"))), "onRelease", $.fn({"n":"","p":[],"r":3,"f":105}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.set($sc, "isSpecial", true);
      $.set($sc, "specialUsedCount", ($.n($.get($sc, "specialUsedCount")) + 1));
      if (!!$.lt($.get($sc, "specialUsedCount"), 3)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t1 = $.cf($sc, "newAchievement", [3]);
      $b = 2; continue;
    case 2:
      if (!$.bool($.gm($r[1], "special"))) { $b = 5; continue; }
      $b = 3; continue;
    case 3:
      $.sm($.get($sc, "specialDes"), "text", $.gm($.get($sc, "abilitiesBahasa"), $.get($sc, "bahasa")));
      $.sm($r[2], "isPaused", true);
      t2 = $.cm($r[1], "getNextHighestDepth", []);
      t3 = $.cm($r[2], "attachMovie", ["battle_ilustration", "ilustration", t2]);
      $.sm($.get($sc, "ilustration"), "_x", (-150));
      $.sm($.get($sc, "ilustration"), "_y", 500);
      t4 = $.cm($.get($sc, "ilustration"), "gotoAndStop", [$.gm($r[1], "s")]);
      $.sm($.get($sc, "ilustration"), "timer", 100);
      $.sm($.get($sc, "ilustration"), "onEnterFrame", $.fn({"n":"","p":[],"r":3,"f":105}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.sm($r[1], "difX", (0 - $.n($.gm($r[1], "_x"))));
      $.sm($r[1], "_x", $.add($.gm($r[1], "_x"), ($.n($.gm($r[1], "difX")) / 10)));
      $.sm($r[1], "timer", ($.n($.gm($r[1], "timer")) - 1));
      if (!!$.gt($.gm($r[1], "timer"), 0)) { $b = 3; continue; }
      $b = 1; continue;
    case 1:
      $.sm($r[2], "isPaused", false);
      t1 = $.cm($.get($sc, "specialList"), $.gm($r[1], "_currentframe"), []);
      t2 = $.delMember($r[1], "onEnterFrame");
      $.sm($r[1], "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.sm($r[1], "difX", ((-750) - $.n($.gm($r[1], "_x"))));
      $.sm($r[1], "_x", $.add($.gm($r[1], "_x"), ($.n($.gm($r[1], "difX")) / 8)));
      t1 = $.cm($.get($sc, "Math"), "abs", [$.gm($r[1], "difX")]);
      if (!!$.gt(t1, 20)) { $b = 3; continue; }
      $b = 1; continue;
    case 1:
      t2 = $.cm($r[1], "removeMovieClip", []);
      $b = 3; continue;
    case 3: return;
    }
  }));
      $b = 3; continue;
    case 3: return;
    }
  }));
      $.sm($r[1], "special", false);
      $.sm($r[1], "enabled", false);
      t5 = $.cm($r[1], "gotoAndStop", [2]);
      $b = 5; continue;
    case 5: return;
    }
  }));
    $b = 55; continue;
  case 54:
    t53 = $.cm($.gm($.get($sc, "_root"), $.add($.gm($.get($sc, "tombolSummon"), $.get($sc, "s")), "_btn")), "gotoAndStop", [6]);
    t54 = $.cm($.gm($.gm($.get($sc, "_root"), $.add($.gm($.get($sc, "tombolSummon"), $.get($sc, "s")), "_btn")), "photo"), "gotoAndStop", [$.get($sc, "s")]);
    t55 = $.cm($.gm($.gm($.get($sc, "_root"), $.add($.gm($.get($sc, "tombolSummon"), $.get($sc, "s")), "_btn")), "photo_mask"), "gotoAndStop", [$.get($sc, "s")]);
    t56 = $.cm($.gm($.get($sc, "_root"), $.add("special_btn", $.get($sc, "s"))), "gotoAndStop", [2]);
    $b = 55; continue;
  case 55:
    $b = 47; continue;
  case 56:
    $b = 45; continue;
  case 57:
    if (!$.eq($.get($sc, "map"), 13)) { $b = 63; continue; }
    $b = 58; continue;
  case 58:
    t46 = $.cf($sc, "summonGreatwinstar", []);
    en12 = $.enumerate($.get($sc, "tombolSummon"));
    s0 = en12;
    $b = 59; continue;
  case 59:
    $r[0] = s0.shift();
    if ($r[0] === null) { $b = 63; continue; }
    $b = 60; continue;
  case 60:
    $.def($sc, "s", $r[0]);
    if (!$.gt($.gm($.get($sc, "armyList"), $.get($sc, "s")), 0)) { $b = 62; continue; }
    $b = 61; continue;
  case 61:
    $.sm($.gm($.get($sc, "_root"), $.add($.gm($.get($sc, "tombolSummon"), $.get($sc, "s")), "_btn")), "sisa", $.gm($.get($sc, "armyList"), $.get($sc, "s")));
    $.sm($.gm($.get($sc, "_root"), $.add($.gm($.get($sc, "tombolSummon"), $.get($sc, "s")), "_btn")), "s", $.get($sc, "s"));
    t58 = $.cm($.gm($.gm($.get($sc, "_root"), $.add($.gm($.get($sc, "tombolSummon"), $.get($sc, "s")), "_btn")), "photo"), "gotoAndStop", [$.get($sc, "s")]);
    t59 = $.cm($.gm($.gm($.get($sc, "_root"), $.add($.gm($.get($sc, "tombolSummon"), $.get($sc, "s")), "_btn")), "photo_mask"), "gotoAndStop", [$.get($sc, "s")]);
    $.sm($.gm($.get($sc, "_root"), $.add($.gm($.get($sc, "tombolSummon"), $.get($sc, "s")), "_btn")), "jedaAwal", (75 - (25 * $.n($.gm($.get($sc, "townSpeStat"), 3)))));
    $.sm($.gm($.get($sc, "_root"), $.add($.gm($.get($sc, "tombolSummon"), $.get($sc, "s")), "_btn")), "jeda", $.gm($.gm($.get($sc, "_root"), $.add($.gm($.get($sc, "tombolSummon"), $.get($sc, "s")), "_btn")), "jedaAwal"));
    $.sm($.gm($.get($sc, "_root"), $.add($.gm($.get($sc, "tombolSummon"), $.get($sc, "s")), "_btn")), "enabled", false);
    $.sm($.gm($.get($sc, "_root"), $.add($.gm($.get($sc, "tombolSummon"), $.get($sc, "s")), "_btn")), "onEnterFrame", $.fn({"n":"","p":[],"r":4,"f":105}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!!$.gt($.gm($.get($sc, "armyList"), $.gm($r[1], "s")), 0)) { $b = 2; continue; }
      $b = 1; continue;
    case 1:
      t2 = $.cm($r[1], "gotoAndStop", [5]);
      $.sm($.gm($r[1], "photo_mask"), "_visible", 0);
      t3 = $.delMember($r[1], "onEnterFrame");
      $b = 2; continue;
    case 2:
      t1 = $.cm($.gm($r[1], "photo_mask"), "gotoAndStop", [$.gm($r[1], "s")]);
      if (!!$.bool($.get($sc, "isPaused"))) { $b = 18; continue; }
      $b = 3; continue;
    case 3:
      if (!!$.lt($.gm($.get($sc, "resourceList"), 2), 0)) { $b = 16; continue; }
      $b = 4; continue;
    case 4:
      t9 = !$.bool($.get($sc, "isDeploying"));
      t10 = !t9;
      s0 = t9;
      if (t10) { $b = 6; continue; }
      $b = 5; continue;
    case 5:
      s0 = $.gt($.gm($r[1], "sisa"), 0);
      $b = 6; continue;
    case 6:
      if (!$.bool(s0)) { $b = 8; continue; }
      $b = 7; continue;
    case 7:
      $.sm($r[1], "enabled", true);
      t11 = $.cm($r[1], "gotoAndStop", [1]);
      $b = 10; continue;
    case 8:
      $.sm($r[1], "enabled", false);
      if (!!$.bool($.gm($r[1], "isChoosen"))) { $b = 10; continue; }
      $b = 9; continue;
    case 9:
      t12 = $.cm($r[1], "gotoAndStop", [4]);
      $b = 10; continue;
    case 10:
      if (!!$.gt($.gm($r[1], "sisa"), 0)) { $b = 12; continue; }
      $b = 11; continue;
    case 11:
      t13 = $.cm($r[1], "gotoAndStop", [6]);
      $b = 12; continue;
    case 12:
      $.sm($r[1], "jeda", $.add($.gm($r[1], "jeda"), $.get($sc, "gameSpeed")));
      if (!!$.lt($.gm($r[1], "jeda"), $.gm($r[1], "jedaAwal"))) { $b = 14; continue; }
      $b = 13; continue;
    case 13:
      $.sm($r[1], "jeda", $.gm($r[1], "jedaAwal"));
      $.sm($r[1], "onRelease", $.fn({"n":"","p":[],"r":4,"f":105}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.sm($.get($sc, "battleSummary"), 1, ($.n($.gm($.get($sc, "battleSummary"), 1)) + 1));
      $.set($sc, "isDeploying", true);
      if (!$.gt($.gm($.gm($r[2], "armyList"), $.gm($r[1], "s")), 0)) { $b = 5; continue; }
      $b = 1; continue;
    case 1:
      t1 = $.cm($r[1], "gotoAndStop", [2]);
      $.sm($r[1], "isChoosen", true);
      $.sm($.gm($r[2], "armyList"), $.gm($r[1], "s"), ($.n($.gm($.gm($r[2], "armyList"), $.gm($r[1], "s"))) - 1));
      $.sm($r[1], "sisa", $.gm($.gm($r[2], "armyList"), $.gm($r[1], "s")));
      $r[3] = 1;
      $b = 2; continue;
    case 2:
      if (!!$.gt($r[3], 4)) { $b = 5; continue; }
      $b = 3; continue;
    case 3:
      $.sm($.gm($.get($sc, "battle_mc"), $.add("row", $r[3])), "enabled", true);
      $.sm($.gm($.get($sc, "battle_mc"), $.add("row", $r[3])), "s", $.gm($r[1], "s"));
      $.sm($.gm($.get($sc, "battle_mc"), $.add("row", $r[3])), "pos", $r[3]);
      $.sm($.gm($.get($sc, "battle_mc"), $.add("row", $r[3])), "who", $r[1]);
      $.sm($.gm($.get($sc, "battle_mc"), $.add("row", $r[3])), "onRelease", $.fn({"n":"","p":[],"r":4,"f":105}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4, t5, t6, t7, t8, t9, t10;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.set($sc, "isDeploying", false);
      t1 = $.cm($r[1], "gotoAndStop", [1]);
      $.sm($.gm($r[1], "who"), "jeda", 0);
      $.sm($.gm($r[1], "who"), "isChoosen", false);
      t2 = $.cm($.gm($r[1], "who"), "gotoAndStop", [1]);
      $.sm($.get($sc, "battle_mc"), "armyID", $.gm($r[1], "pos"));
      t3 = $.cm($r[2], $.add("summon", $.gm($.get($sc, "tombolSummon"), $.gm($r[1], "s"))), [($.n($.gm($.get($sc, "tempStat"), $.gm($r[1], "s"))) + 1)]);
      t4 = $.get($sc, "resourceList");
      t5 = $.gm($.get($sc, "resourceList"), 2);
      t6 = $.cm($.get($sc, "Math"), "round", [($.n($.gm($.gm($.gm($.get($sc, "armyDescList"), $.gm($r[1], "s")), 4), 2)) / 2)]);
      $.sm(t4, 2, ($.n(t5) - $.n(t6)));
      t7 = $.get($sc, "battleSummary");
      t8 = $.gm($.get($sc, "battleSummary"), 3);
      t9 = $.cm($.get($sc, "Math"), "round", [($.n($.gm($.gm($.gm($.get($sc, "armyDescList"), $.gm($r[1], "s")), 4), 2)) / 2)]);
      $.sm(t7, 3, $.add(t8, t9));
      $r[3] = 1;
      $b = 1; continue;
    case 1:
      if (!!$.gt($r[3], 4)) { $b = 4; continue; }
      $b = 2; continue;
    case 2:
      $.sm($.gm($.get($sc, "battle_mc"), $.add("row", $r[3])), "enabled", false);
      t10 = ($.n($r[3]) + 1);
      $r[3] = t10;
      $b = 1; continue;
    case 4: return;
    }
  }));
      t2 = ($.n($r[3]) + 1);
      $r[3] = t2;
      $b = 2; continue;
    case 5: return;
    }
  }));
      $b = 15; continue;
    case 14:
      $.sm($r[1], "enabled", false);
      t14 = $.cm($r[1], "gotoAndStop", [3]);
      $.sm($.gm($r[1], "preloader"), "_yscale", (100 - (($.n($.gm($r[1], "jeda")) / $.n($.gm($r[1], "jedaAwal"))) * 100)));
      $b = 15; continue;
    case 15:
      $b = 17; continue;
    case 16:
      $.sm($.get($sc, "resourceList"), 2, 0);
      $.sm($r[1], "enabled", false);
      t8 = $.cm($r[1], "gotoAndStop", [5]);
      $b = 17; continue;
    case 17:
      $b = 20; continue;
    case 18:
      t4 = $.cm($.gm($r[2], $.add($.gm($.get($sc, "tombolSummon"), $.get($sc, "s")), "_btn")), "gotoAndStop", [6]);
      t5 = $.cm($.gm($.gm($r[2], $.add($.gm($.get($sc, "tombolSummon"), $.get($sc, "s")), "_btn")), "photo"), "gotoAndStop", [$.get($sc, "s")]);
      t6 = $.cm($.gm($.gm($r[2], $.add($.gm($.get($sc, "tombolSummon"), $.get($sc, "s")), "_btn")), "photo_mask"), "gotoAndStop", [$.get($sc, "s")]);
      t7 = $.cm($.gm($r[2], $.add("special_btn", $.get($sc, "s"))), "gotoAndStop", [2]);
      $b = 20; continue;
    case 20: return;
    }
  }));
    $b = 62; continue;
  case 62:
    $b = 59; continue;
  case 63:
    if (!$.bool($.gm($.get($sc, "_root"), "jamuMode"))) { $b = 65; continue; }
    $b = 64; continue;
  case 64:
    t47 = $.cf($sc, "minumJamu", [$.gm($.get($sc, "battle_mc"), "bigbear")]);
    t48 = $.cf($sc, "minumJamu", [$.gm($.get($sc, "battle_mc"), "sharpwolf")]);
    t49 = $.cf($sc, "minumJamu", [$.gm($.get($sc, "battle_mc"), "runningbow")]);
    t50 = $.cf($sc, "minumJamu", [$.gm($.get($sc, "battle_mc"), "beautyflower")]);
    t51 = $.cf($sc, "minumJamu", [$.gm($.get($sc, "battle_mc"), "broadeagle")]);
    t52 = $.cf($sc, "minumJamu", [$.gm($.get($sc, "battle_mc"), "gw")]);
    $b = 65; continue;
  case 65:
    en13 = $.enumerate($.get($sc, "comList"));
    s0 = en13;
    $b = 66; continue;
  case 66:
    $r[0] = s0.shift();
    if ($r[0] === null) { $b = 68; continue; }
    $b = 67; continue;
  case 67:
    $.def($sc, "i", $r[0]);
    t57 = $.cf($sc, "tambahPowerCommander", [$.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "comList"), $.get($sc, "i")), 0))]);
    $b = 66; continue;
  case 68:
    en14 = $.enumerate($.gm($.get($sc, "_root"), $.add("objectMap", $.get($sc, "map"))));
    s0 = en14;
    $b = 69; continue;
  case 69:
    $r[0] = s0.shift();
    if ($r[0] === null) { $b = 74; continue; }
    $b = 70; continue;
  case 70:
    $.def($sc, "a", $r[0]);
    if (!$.eq($.gm($.gm($.gm($.get($sc, "_root"), $.add("objectMap", $.get($sc, "map"))), $.get($sc, "a")), 1), "tower")) { $b = 73; continue; }
    $b = 71; continue;
  case 71:
    if (!$.gt($.gm($.gm($.gm($.get($sc, "_root"), $.add("objectMap", $.get($sc, "map"))), $.get($sc, "a")), 0), 0)) { $b = 73; continue; }
    $b = 72; continue;
  case 72:
    t74 = $.cf($sc, "addTower", []);
    $b = 73; continue;
  case 73:
    $b = 69; continue;
  case 74:
    t65 = $.cm($.get($sc, "battle_mc"), "attachMovie", ["mc_benteng", "benteng", 80000]);
    $.sm($.gm($.get($sc, "battle_mc"), "benteng"), "_x", 0);
    $.sm($.gm($.get($sc, "battle_mc"), "benteng"), "_y", 500);
    t66 = $.cm($.gm($.gm($.get($sc, "battle_mc"), "benteng"), "benteng"), "gotoAndStop", [$.gm($.get($sc, "daftarMap"), $.gm($.get($sc, "_root"), "map"))]);
    $.sm($.gm($.get($sc, "battle_mc"), "benteng"), "posY", 3);
    $.sm($.gm($.get($sc, "battle_mc"), "benteng"), "lifeAwal", 200);
    $.sm($.gm($.get($sc, "battle_mc"), "benteng"), "life", $.gm($.gm($.get($sc, "battle_mc"), "benteng"), "lifeAwal"));
    $.sm($.gm($.get($sc, "battle_mc"), "benteng"), "def", $.add(5, $.gm($.get($sc, "townMilStat"), 4)));
    $.sm($.gm($.get($sc, "battle_mc"), "benteng"), "frontX", $.add($.gm($.get($sc, "this"), "_x"), 150));
    $.sm($.gm($.get($sc, "battle_mc"), "benteng"), "frontY", ($.n($.gm($.get($sc, "this"), "_y")) - 100));
    t67 = $.cm($.gm($.get($sc, "battle_mc"), "swordmanList"), "push", ["benteng"]);
    $.sm($.gm($.get($sc, "battle_mc"), "benteng"), "onEnterFrame", $.fn({"n":"","p":[],"r":3,"f":105}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3, t4;
    $.sm($.gm($.gm($r[1], "life_span"), "span"), "_xscale", (100 * ($.n($.gm($r[1], "life")) / $.n($.gm($r[1], "lifeAwal")))));
    t1 = $.gm($r[2], "our_base");
    t2 = $.cm($.get($sc, "Math"), "floor", [$.gm($r[1], "life")]);
    $.sm(t1, "text", t2);
    t3 = $.cm($.gm($r[1], "benteng"), "gotoAndStop", [$.gm($.get($sc, "daftarMap"), $.gm($r[2], "map"))]);
    t4 = $.cm($.gm($.gm($r[1], "benteng"), "benteng"), "gotoAndStop", [$.gm($.get($sc, "daftarMap"), $.gm($r[2], "map"))]);
  }));
    $.sm($.gm($.gm($.gm($.get($sc, "battle_mc"), "benteng"), "benteng"), "towncenter"), "att", $.add(8, $.gm($.get($sc, "townMilStat"), 3)));
    $.sm($.gm($.gm($.gm($.get($sc, "battle_mc"), "benteng"), "benteng"), "towncenter"), "jedaAwal", 100);
    $.sm($.gm($.gm($.gm($.get($sc, "battle_mc"), "benteng"), "benteng"), "towncenter"), "jeda", $.gm($.gm($.gm($.gm($.get($sc, "battle_mc"), "benteng"), "benteng"), "towncenter"), "jedaAwal"));
    $.sm($.gm($.gm($.gm($.get($sc, "battle_mc"), "benteng"), "benteng"), "towncenter"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var s0, en1, t1;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!!$.bool($.get($sc, "isPaused"))) { $b = 5; continue; }
      $b = 1; continue;
    case 1:
      en1 = $.enumerate($.gm($.get($sc, "battle_mc"), "enemyObjList"));
      s0 = en1;
      $b = 2; continue;
    case 2:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 5; continue; }
      $b = 3; continue;
    case 3:
      $.set($sc, "index", $r[0]);
      t1 = $.cf($sc, "fightTower2", [$r[1], $.gm($.get($sc, "battle_mc"), $.gm($.gm($.get($sc, "battle_mc"), "enemyObjList"), $.get($sc, "index")))]);
      $b = 2; continue;
    case 5: return;
    }
  }));
    t68 = $.cm($.get($sc, "battle_mc"), "gotoAndStop", [$.gm($.get($sc, "daftarMap"), $.gm($.get($sc, "_root"), "map"))]);
    t69 = $.cm($.get($sc, "battlebg_mc"), "gotoAndStop", [$.gm($.get($sc, "daftarMap"), $.gm($.get($sc, "_root"), "map"))]);
    $.def($sc, "menangBattle", false);
    $.set($sc, "foodStock", $.gm($.get($sc, "resourceList"), 2));
    $.sm($.get($sc, "battle_mc"), "onEnterFrame", $.fn({"n":"","p":[],"r":4,"f":105}, $sc, function($sc, $this, $args, $r) {
    var s0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21, t22, t23, t24, t25, t26, t27, t28;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      if (!!$.bool($.get($sc, "isPaused"))) { $b = 11; continue; }
      $b = 1; continue;
    case 1:
      if (!$.gt($.gm($.get($sc, "battle_mc"), "enemyCount"), 0)) { $b = 9; continue; }
      $b = 2; continue;
    case 2:
      $.sm($r[1], "timer", ($.n($.gm($r[1], "timer")) - $.n($.get($sc, "gameSpeed"))));
      t5 = !$.gt($.gm($r[1], "timer"), 0);
      t6 = t5;
      s0 = t5;
      if (t6) { $b = 4; continue; }
      $b = 3; continue;
    case 3:
      s0 = $.eq($.gm($r[1], "timer"), undefined);
      $b = 4; continue;
    case 4:
      if (!$.bool(s0)) { $b = 8; continue; }
      $b = 5; continue;
    case 5:
      t9 = $.get($sc, "enemyLevList");
      t10 = $.cm($.get($sc, "Math"), "floor", [($.n($.get($sc, "days")) / 10)]);
      t11 = $.rand($.gm($.gm(t9, t10), "length"));
      $r[3] = t11;
      t12 = $.get($sc, "enemyLevList");
      t13 = $.cm($.get($sc, "Math"), "floor", [($.n($.get($sc, "days")) / 10)]);
      if (!!(($.n($.gm($.gm($.gm(t12, t13), $r[3]), 0)) - 1) < 0)) { $b = 7; continue; }
      $b = 6; continue;
    case 6:
      t14 = $.get($sc, "enemyLevList");
      t15 = $.cm($.get($sc, "Math"), "floor", [($.n($.get($sc, "days")) / 10)]);
      t16 = $.gm($.gm(t14, t15), $r[3]);
      t17 = $.get($sc, "enemyLevList");
      t18 = $.cm($.get($sc, "Math"), "floor", [($.n($.get($sc, "days")) / 10)]);
      $.sm(t16, 0, ($.n($.gm($.gm($.gm(t17, t18), $r[3]), 0)) - 1));
      $.sm($.get($sc, "battle_mc"), "enemyCount", ($.n($.gm($.get($sc, "battle_mc"), "enemyCount")) - 1));
      t19 = $.get($sc, "enemyLevList");
      t20 = $.cm($.get($sc, "Math"), "floor", [($.n($.get($sc, "days")) / 10)]);
      t21 = $.rand($.gm($.gm($.gm(t19, t20), $r[3]), 2));
      t22 = $.get($sc, "enemyLevList");
      t23 = $.cm($.get($sc, "Math"), "floor", [($.n($.get($sc, "days")) / 10)]);
      t24 = $.cm($.gm($.gm(t22, t23), $r[3]), 1, [(1 + t21)]);
      t25 = $r[1];
      t26 = $.rand(50);
      t27 = $.cm($.get($sc, "Math"), "floor", [($.n($.get($sc, "days")) / 30)]);
      t28 = $.cm($.get($sc, "Math"), "round", [((80 + t26) / $.n($.add(1, t27)))]);
      $.sm(t25, "timer", t28);
      $b = 8; continue;
    case 7:
      $.sm($r[1], "timer", 0);
      $b = 8; continue;
    case 8:
      $b = 11; continue;
    case 9:
      $.sm($.get($sc, "battle_mc"), "enemyCount", 0);
      if (!!$.gt($.gm($.get($sc, "battle_mc"), "enemyLeft"), 0)) { $b = 11; continue; }
      $b = 10; continue;
    case 10:
      t7 = $.delMember($r[1], "onEnterFrame");
      t8 = $.cf($sc, "tampilMenang", []);
      $b = 11; continue;
    case 11:
      t1 = $.gm($.gm($r[2], "life_span"), "teks");
      t2 = $.cm($.get($sc, "Math"), "round", [$.gm($.gm($.get($sc, "battle_mc"), "benteng"), "life")]);
      $.sm(t1, "text", $.add($.add(t2, "/"), $.gm($.gm($.get($sc, "battle_mc"), "benteng"), "lifeAwal")));
      $.sm($.gm($.gm($r[2], "life_span"), "span"), "_xscale", (($.n($.gm($.gm($.get($sc, "battle_mc"), "benteng"), "life")) / $.n($.gm($.gm($.get($sc, "battle_mc"), "benteng"), "lifeAwal"))) * 100));
      t3 = $.gm($.gm($r[2], "food_span"), "teks");
      t4 = $.cm($.get($sc, "Math"), "round", [$.gm($.gm($r[2], "resourceList"), 2)]);
      $.sm(t3, "text", $.add($.add(t4, "/"), $.get($sc, "foodStock")));
      $.sm($.gm($.gm($r[2], "food_span"), "span"), "_xscale", (($.n($.gm($.gm($r[2], "resourceList"), 2)) / $.n($.get($sc, "foodStock"))) * 100));
      $b = 12; continue;
    case 12: return;
    }
  }));
    $.sm($.get($sc, "surrender_btn"), "onRelease", $.fn({"n":"","p":[],"r":4,"f":105}, $sc, function($sc, $this, $args, $r) {
    var t1, t2, t3;
    $.set($sc, "isPaused", true);
    t1 = $.cf($sc, "tampilBlur", []);
    t2 = $.cm($r[2], "attachMovie", ["menu_surrender", "confirm", 1000]);
    $.sm($.get($sc, "confirm"), "_x", ($.n($.gm($.get($sc, "Stage"), "width")) / 2));
    $.sm($.get($sc, "confirm"), "_y", ($.n($.gm($.get($sc, "Stage"), "height")) / 2));
    t3 = $.cm($.get($sc, "confirm"), "gotoAndStop", [$.add($.gm($r[2], "bahasa"), 1)]);
    $.sm($.get($sc, "confirm"), "_alpha", 0);
    $.sm($.get($sc, "confirm"), "onEnterFrame", $.fn({"n":"","p":[],"r":2,"f":41}, $sc, function($sc, $this, $args, $r) {
    var t1;
    t1 = $.cf($sc, "efekFade", [$r[1]]);
  }));
    $.sm($.gm($.get($sc, "confirm"), "yes_btn"), "onRelease", $.fn({"n":"","p":[],"r":3,"f":106}, $sc, function($sc, $this, $args, $r) {
    var s0, en1, t1, t2, t3, t4, t5;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.set($sc, "isPaused", false);
      $.set($sc, "habisPerang", true);
      $.sm($.get($sc, "pasukanMusuh"), "menang", false);
      $.sm($.gm($r[1], "statisticList"), 16, ($.n($.gm($.gm($r[1], "statisticList"), 16)) + 1));
      en1 = $.enumerate($.get($sc, "comLoc"));
      s0 = en1;
      $b = 1; continue;
    case 1:
      $r[0] = s0.shift();
      if ($r[0] === null) { $b = 5; continue; }
      $b = 2; continue;
    case 2:
      t1 = $r[0];
      $r[2] = t1;
      if (!$.eq($.gm($.get($sc, "posMap"), ($.n($.get($sc, "map")) - 1)), $.gm($.get($sc, "comLoc"), $r[2]))) { $b = 4; continue; }
      $b = 3; continue;
    case 3:
      $.sm($.get($sc, "comLoc"), $r[2], 33);
      $.sm($.get($sc, "comLocBaru"), $r[2], 33);
      $b = 4; continue;
    case 4:
      $b = 1; continue;
    case 5:
      if (!$.eq($.get($sc, "map"), 13)) { $b = 7; continue; }
      $b = 6; continue;
    case 6:
      t3 = $.cm($r[1], "gotoAndStop", ["gameover"]);
      $b = 8; continue;
    case 7:
      t2 = $.cm($r[1], "gotoAndStop", ["main"]);
      $b = 8; continue;
    case 8:
      t4 = $.cm($.get($sc, "blur"), "removeMovieClip", []);
      t5 = $.cm($.get($sc, "confirm"), "removeMovieClip", []);
      $b = 9; continue;
    case 9: return;
    }
  }));
    $.sm($.gm($.get($sc, "confirm"), "no_btn"), "onRelease", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    $.set($sc, "isPaused", false);
    t1 = $.cm($.get($sc, "blur"), "removeMovieClip", []);
    t2 = $.cm($.get($sc, "confirm"), "removeMovieClip", []);
  }));
  }));
    $.sm($.get($sc, "menu_btn"), "onRelease", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    var t1;
    t1 = $.cf($sc, "tampilOption", [2]);
  }));
    if (!!$.bool($.get($sc, "battleTutorial"))) { $b = 77; continue; }
    $b = 75; continue;
  case 75:
    $.def($sc, "tempTut", 1);
    t70 = $.cm($.get($sc, "_root"), "attachMovie", ["main_tutorial2", "tutorial", 777]);
    $.sm($.get($sc, "tutorial"), "_x", ($.n($.gm($.get($sc, "Stage"), "width")) / 2));
    $.sm($.get($sc, "tutorial"), "_y", ($.n($.gm($.get($sc, "Stage"), "height")) / 2));
    t71 = $.cm($.get($sc, "tutorial"), "stop", []);
    t72 = $.cm($.gm($.get($sc, "tutorial"), "next_btn"), "gotoAndStop", [$.add($.gm($.get($sc, "_root"), "bahasa"), 1)]);
    $.sm($.gm($.get($sc, "tutorial"), "next_btn"), "onRelease", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    var t1;
    $.set($sc, "tempTut", ($.n($.get($sc, "tempTut")) + 1));
    t1 = $.cm($.get($sc, "tutorial"), "gotoAndStop", [$.get($sc, "tempTut")]);
  }));
    t73 = $.cm($.gm($.get($sc, "tutorial"), "skip_btn"), "gotoAndStop", [$.add($.gm($.get($sc, "_root"), "bahasa"), 1)]);
    $.sm($.gm($.get($sc, "tutorial"), "skip_btn"), "onRelease", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    var t1;
    t1 = $.cm($.get($sc, "tutorial"), "gotoAndStop", [9]);
  }));
    $b = 77; continue;
  case 77: return;
  }
};
// main#f11.0
S[267] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1, t2, t3, t4, t5;
  $.stop($tgt);
  $.stopAllSounds();
  $.def($sc, "loadingBattle", 0);
  t1 = $.get($sc, "hint");
  t2 = $.get($sc, "tipsList");
  t3 = $.rand($.gm($.get($sc, "tipsList"), "length"));
  $.sm(t1, "text", $.gm($.gm(t2, t3), $.gm($.get($sc, "_root"), "bahasa")));
  $.set($sc, "onEnterFrame", $.fn({"n":"","p":[],"r":0,"f":0}, $sc, function($sc, $this, $args, $r) {
    var $tgt = $.clipOf($sc);
    var t1;
    var $b = 0;
    for (;;) switch ($b) {
    case 0:
      $.set($sc, "loadingBattle", ($.n($.get($sc, "loadingBattle")) + 1));
      if (!!$.lt($.get($sc, "loadingBattle"), 200)) { $b = 3; continue; }
      $b = 1; continue;
    case 1:
      t1 = $.del($sc, "onEnterFrame");
      $.gotoFrame($tgt, "battle");
      $b = 3; continue;
    case 3: return;
    }
  }));
  t4 = $.cm($.get($sc, "gametips_teks"), "gotoAndStop", [$.add($.gm($.get($sc, "_root"), "bahasa"), 1)]);
  t5 = $.cm($.get($sc, "tutorial"), "removeMovieClip", []);
};
// main#f12.0
S[268] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1;
  $.stop($tgt);
  $.stopAllSounds();
  t1 = $.cf($sc, "soundFX", ["bgm0"]);
};
// main#f13.0
S[269] = function($sc, $this) {
  var $r = [];
  var $tgt = $this;
  var t1, t2, t3, t4;
  $.stop($tgt);
  t1 = $.cm($.gm($.get($sc, "_root"), "kongregateStats"), "submit", ["GameOver", 1]);
  t2 = $.cf($sc, "soundBGM", ["bgm_end"]);
  t3 = $.cm($.get($sc, "game_teks"), "gotoAndStop", [$.add($.gm($.get($sc, "_root"), "bahasa"), 1)]);
  t4 = $.cm($.get($sc, "return_btn"), "gotoAndStop", [$.add($.gm($.get($sc, "_root"), "bahasa"), 1)]);
  $.sm($.get($sc, "return_btn"), "onRelease", $.fn({"n":"","p":[],"r":2,"f":106}, $sc, function($sc, $this, $args, $r) {
    var t1, t2;
    t1 = $.del($sc, "onEnterFrame");
    t2 = $.cm($r[1], "gotoAndStop", ["menu"]);
  }));
};
