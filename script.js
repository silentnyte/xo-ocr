var proportion = 1; // ratio of canvas size / original image
var img_org = new Image(); // original image
var title_color;
var SSID = "1gdJ6sYWlI_b3C5v1b9uhLEsDBENlW7oQR02WgWIxSVc";
var master_sheet = "1587708941";

// const worker = Tesseract.createWorker({
//   logger: m => console.log(m)
// });
// Tesseract.setLogging(true);

var ocr_info = document.getElementById("log");
var cnv0 = document.getElementById("cnv_org");
var ctx0 = cnv0.getContext("2d");
var cnv_ocr = document.getElementById("cnv_ocr");
var ctx_ocr = cnv_ocr.getContext("2d");

var cnv_org = document.createElement("canvas");
var ctx_org = cnv_org.getContext("2d");
var cnv_inv = document.createElement("canvas");
var ctx_inv = cnv_inv.getContext("2d");
var cnv_filter = document.createElement("canvas");
var ctx_filter = cnv_filter.getContext("2d");
var cnv_title = document.createElement("canvas");
var ctx_title = cnv_title.getContext("2d");

var iw, ih;
var cw = (cnv0.width = cnv_ocr.width = ~~(512 * proportion));
var ch = (cnv0.height = cnv_ocr.height = ~~(640 * proportion));
ctx0.fillStyle = "#000000";
ctx0.font = "16px Courier";
ctx0.textAlign = "center";
ctx0.textBaseline = "middle";
ctx0.fillText("PASTE ITEM CLIP HERE", ~~(cw / 2), ~~(ch / 2));

var img_melee = new Image();
img_melee.src =
  "data:image/png;base64,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";

// Created by STRd6
// MIT License
// jquery.paste_image_reader.js
(function ($) {
  var defaults;
  $.event.fix = (function (originalFix) {
    return function (event) {
      event = originalFix.apply(this, arguments);
      if (
        event.type.indexOf("copy") === 0 ||
        event.type.indexOf("paste") === 0
      ) {
        event.clipboardData = event.originalEvent.clipboardData;
      }
      return event;
    };
  })($.event.fix);
  defaults = {
    callback: $.noop,
    matchType: /image.*/,
  };
  return ($.fn.pasteImageReader = function (options) {
    if (typeof options === "function") {
      options = {
        callback: options,
      };
    }
    options = $.extend({}, defaults, options);
    return this.each(function () {
      var $this, element;
      element = this;
      $this = $(this);
      return $this.bind("paste", function (event) {
        var clipboardData, found;
        found = false;
        clipboardData = event.clipboardData;
        return Array.prototype.forEach.call(
          clipboardData.types,
          function (type, i) {
            var file, reader;
            if (found) {
              return;
            }
            if (
              type.match(options.matchType) ||
              clipboardData.items[i].type.match(options.matchType)
            ) {
              file = clipboardData.items[i].getAsFile();
              reader = new FileReader();
              reader.onload = function (evt) {
                return options.callback.call(element, {
                  dataURL: evt.target.result,
                  event: evt,
                  file: file,
                  name: file.name,
                });
              };
              reader.readAsDataURL(file);
              return (found = true);
            }
          }
        );
      });
    });
  });
})(jQuery);

var dataURL, filename;
$("html").pasteImageReader(function (results) {
  filename = results.filename;
  dataURL = results.dataURL;
  $data.text(dataURL);
  $size.val(results.file.size);
  $type.val(results.file.type);
  img_org.src = dataURL;
  iw = img_org.width;
  ih = img_org.height;
  $width.val(iw);
  $height.val(ih);

  return (
    $(".active")
      //.css({backgroundImage: "url(" + dataURL + ")"})
      .data({ width: iw, height: ih })
  );
});

var $data, $size, $type, $width, $height;
$(function () {
  $data = $(".data");
  $size = $(".size");
  $type = $(".type");
  $width = $("#width");
  $height = $("#height");
  $(".target").on("click", function () {
    var $this = $(this);
    var bi = $this.css("background-image");
    if (bi != "none") {
      $data.text(bi.substr(4, bi.length - 6));
    }

    $(".active").removeClass("active");
    $this.addClass("active");
  });
});

var cimgs; // cropped images
function update_cimgs() {
  cimgs = {
    title: {
      sx: ~~(iw - iw * 0.83),
      sy: 0,
      sw: ~~(iw * 0.83),
      sh: ~~(iw * 0.18),
      dx: ~~((iw - iw * 0.83) * proportion),
      dy: 0,
      dw: ~~(iw * 0.83 * proportion),
      dh: ~~(iw * 0.18 * proportion),
    },
    body: {
      sx: 0,
      sy: ~~(iw * 0.2),
      sw: iw,
      sh: ~~(ih - iw * 0.2),
      dx: 0,
      dy: ~~(iw * 0.2 * proportion),
      dw: ~~(iw * proportion),
      dh: ~~((ih - iw * 0.2) * proportion),
      sx2: ~~(iw * 0.47),
      sw2: ~~(iw * 0.49),
      sh2: 8,
    },
    desc: {
      sx: 0,
      sy: ~~(iw * 0.2),
      sw: iw,
      sh: 0,
    },
    ps: {
      sx: 0,
      sy: 0,
      sw: iw,
      sh: 0,
    },
    stats: {
      sx: 0,
      sy: 0,
      sw: ~~(iw * 0.45),
      sh: 0,
      sx2: ~~(iw * 0.47),
      sw2: ~~(iw * 0.49),
      sh2: 8,
    },
    perks: {
      sx: ~~(iw * 0.1),
      sy: 0,
      sw: ~~(iw * 0.9),
      sh: 0,
    },
  };
}

var spellchk = [
  ["puwer", "power"],
  ["catlin", "cabin"],
  ["amrno", "ammo"],
  ["bverheating", "overheating"],
  ["Nut", "Not"],
  ["nut", "not"],
  ["Dues", "Does"],
  ["sturage", "storage"],
  ["Nun’", "Not "],
];

function drawOCR(scr, dst, cimg) {
  cimg.dx = ~~(cimg.sx * proportion);
  cimg.dy = ~~(cimg.sy * proportion);
  cimg.dw = ~~(cimg.sw * proportion);
  cimg.dh = ~~(cimg.sh * proportion);

  var cnv = document.getElementById(dst);
  var ctx = cnv.getContext("2d");
  ctx.drawImage(
    scr,
    cimg.sx,
    cimg.sy,
    cimg.sw,
    cimg.sh,
    cimg.dx,
    cimg.dy,
    cimg.dw,
    cimg.dh
  );
}

async function ocrImage() {
  await recognizeFile(cnv_title).then((data) => processTitleOCR(data));
  await recognizeFile(cnv_filter).then((data) => locatePS(data, cimgs.ps));
  if (cimgs.ps.sy > 0) {
    cimgs.desc.sh = cimgs.ps.sy - cimgs.desc.sy;
    await recognizeFile(
      ctx_inv.getImageData(
        cimgs.desc.sx,
        cimgs.desc.sy,
        cimgs.desc.sw,
        cimgs.desc.sh
      )
    ).then((data) => processDescOCR(data, cimgs.desc));

    cimgs.stats.sy = cimgs.ps.sy + cimgs.ps.sh;
    cimgs.stats.sh = ih - cimgs.stats.sy;
    await recognizeFile(
      ctx_inv.getImageData(
        cimgs.stats.sx,
        cimgs.stats.sy,
        cimgs.stats.sw,
        cimgs.stats.sh
      )
    ).then((data) => processStatsOCR(data, cimgs.stats));
  } else {
    //TODO: Add error proccessing if PS not found
    alert('"POWER SCORE" not found in image!');
  }
}

function processTitleOCR(data) {
  var iname = "";
  var itype = "";
  for (let l in data.lines) {
    var txt = data.lines[l].text.trim();
    if (txt.length > 0) {
      if (iname == "") {
        iname = txt;
      } else {
        itype = txt;
      }
    }
  }
  document.getElementById("name").value = iname;
  document.getElementById("type").value = itype;

  var query = encodeURIComponent("SELECT * WHERE A='" + iname + "'");
  var url =
    "https://docs.google.com/spreadsheets/d/" +
    SSID +
    "/gviz/tq?gid=" +
    master_sheet +
    "&tq=" +
    query;
  jsonp(url, function (json_data) {
    // console.log(url);
    // console.log(json_data);
    if (typeof json_data.table.rows[0] === "undefined") {
      // TODO: Add error proccessing
      console.log('"' + iname + '" was not found in database.');
    } else {
      // var rarity = json_data.table.rows[0].c[1].v;
      var faction = "Shop";
      if (json_data.table.rows[0].c[2] != null) {
        faction = json_data.table.rows[0].c[2].v;
      }
      var category = json_data.table.rows[0].c[3].v;
      // var type = json_data.table.rows[0].c[4].v;
      var id = json_data.table.rows[0].c[5].v;
      document.getElementById("category").value = category;
      document.getElementById("faction").value = faction;
      document.getElementById("id").value = id;
    }
  });
  appendOCR_results(data.text);
}

function locatePS(data, cimg) {
  for (let l in data.lines) {
    var txt = data.lines[l].text.trim();
    if (txt.length > 0) {
      var match = /power score/i.exec(txt);
      if (match != null) {
        cimg.sy = data.lines[l].bbox.y0 - 5;
        cimg.sh = data.lines[l].bbox.y1 - data.lines[l].bbox.y0 + 5;
        var ps = txt.substr(0, match.index).trim();
        document.getElementById("ps").value = ps.replace(/[^-\d]/g, "");
        break;
      }
    }
  }

  drawOCR(cnv_filter, "cnv_ocr", cimg);
}

function processDescOCR(data, cimg) {
  var desc = "";
  for (let l in data.lines) {
    var txt = data.lines[l].text.trim();
    if (txt.length > 0) {
      for (let j = 0; j < spellchk.length; j++) {
        txt = txt.replace(spellchk[j][0], spellchk[j][1]);
      }
      if (txt.match("Increases vehicle durability")) {
        addField(
          "form_stats",
          "increases_durability",
          "number",
          "Increases vehicle durability"
        );
        var txtsplit = txt.split(" ");
        var val = txtsplit[txtsplit.length - 1].replace(/[^-\d]/g, "");
        document.getElementById("increases_durability").value = val;
      } else if (txt.match("Increases reputation gain")) {
        addField(
          "form_stats",
          "increases_reputation",
          "number",
          "Increases reputation gain"
        );
        var txtsplit = txt.split(" ");
        var val = txtsplit[txtsplit.length - 1].replace(/[^-\d]/g, "");
        document.getElementById("increases_reputation").value = val;
      } else if (
        !txt.match("Not tradable") &&
        !txt.match("Does not take up storage space") &&
        !txt.match("Not salvageable") &&
        !txt.match("Not for fusion")
      ) {
        if (desc != "") {
          desc = desc + "\n";
        }
        desc = desc + txt;
      }
    }
  }
  document.getElementById("desc").textContent = desc;

  appendOCR_results(data.text);
  drawOCR(cnv_inv, "cnv_ocr", cimg);
}

function processStatsOCR(data, cimg) {
  var statsDone = false;
  var perksLine = 0;
  try {
    for (let l in data.lines) {
      var txt = data.lines[l].text.trim();
      if (txt.length > 0) {
        var txtlc = txt.toLowerCase();
        for (let j = 0; j < spellchk.length; j++) {
          txtlc = txtlc.replace(spellchk[j][0], spellchk[j][1]);
        }
        var name = txtlc.split(" ")[0];
        var label = "";
        var type = "";
        switch (name) {
          case "damage":
            label = "Damage";
            type = "bar";
            break;
          case "fire":
            if (txtlc.startsWith("fire rate")) {
              name = "fire_rate";
              label = "Fire rate";
              type = "bar";
            }
            break;
          case "range":
            label = "Range";
            type = "bar";
            break;
          case "accuracy":
            label = "Accuracy";
            type = "bar";
            break;
          case "time":
            if (txtlc.startsWith("time to overheating")) {
              name = "time_to_overheating";
              label = "Time to overheating";
              type = "bar";
            }
            break;
          case "max":
            if (txtlc.startsWith("max ammo")) {
              name = "max_ammo";
              label = "Max ammo";
              type = "text";
            }
            break;
          case "blast":
            if (txtlc.startsWith("blast power")) {
              name = "blast_power";
              label = "Blast power";
              type = "bar";
            }
            break;
          case "adds":
            if (txtlc.startsWith("adds energy")) {
              name = "adds_energy";
              label = "Adds energy";
              type = "text";
            }
            break;
          case "tonnage":
            label = "Tonnage";
            type = "text";
            break;
          case "mass":
            if (txtlc.startsWith("mass limit")) {
              name = "mass_limit";
              label = "Mass limit";
              type = "text";
            } else {
              statsDone = true;
              label = "Mass";
              type = "text";
              perksLine = data.lines[l];
            }
            break;
          case "max.":
            if (txtlc.startsWith("max. cabin speed")) {
              name = "max_cabin_speed";
              label = "Max. cabin speed";
              type = "text";
            }
            break;
          case "power":
            label = "Power";
            type = "text";
            if (document.getElementById("type").value.match(/cabin/i)) {
              type = "bar";
            }
            break;
          case "fuel":
            if (txtlc.startsWith("fuel reserves")) {
              name = "fuel_reserves";
              label = "Fuel reserves";
              type = "text";
            }
            break;
          case "durability":
            label = "Durability";
            type = "text";
            cimg.sx2 = ~~(iw * 0.52);
            cimg.sw2 = ~~(iw * 0.3);
            cimg.sh2 = 16;
            break;
          case "energy":
            if (txtlc.startsWith("energy drain")) {
              name = "energy_drain";
              label = "Energy drain";
              type = "text";
            }
            break;
          default:
        }
        if (label != "" && type != "") {
          processStatsVal(data.lines[l], cimg, name, label, type);
        } else {
          console.log("Stat not found:" + name + " - " + data.lines[l].text);
          //TODO: Add error proccessing if Stat not found
        }
      }
      if (statsDone) {
        break;
      }
    }
    if (cimg.sh - perksLine.bbox.y1 > 50) {
      cimgs.perks.sy = perksLine.bbox.y1 + cimg.sy + ~~(iw * 0.05);
      cimgs.perks.sh = ih - cimgs.perks.sy;
      processPerks(perksLine, cimgs.perks, "perks", "", "");
      cimg.sh = cimgs.perks.sy - cimg.sy;
    }
    appendOCR_results(data.text);
    drawOCR(cnv_inv, "cnv_ocr", cimg);
  } catch (err) {
    console.error(err.stack);
    // TODO: Add error proccessing
  }

}

function processStatsVal(line, cimg, name, label, type) {
  var bb = line.bbox;
  var x = cimg.sx2;
  var y = bb.y0 - cimg.sh2 + cimg.sy;
  var w = cimg.sw2;
  var h = bb.y1 - bb.y0 + cimg.sh2 * 2;
  var dx = ~~(x * proportion);
  var dy = ~~(y * proportion);
  var dw = ~~(w * proportion);
  var dh = ~~(h * proportion);
  var syc = ~~(y + h / 2); //source center of bar
  var cnv = document.getElementById("cnv_ocr");
  var ctx = cnv.getContext("2d");

  if (type == "bar") {
    addField("form_stats", name, "number", label);
    var val = processBar(ctx_inv.getImageData(x, syc, w, 1));
    document.getElementById(name).value = val;
    ctx.drawImage(cnv_inv, x, y, w, h, dx, dy, dw, dh);
  } else if (type == "features") {
    addField("form_stats", name, "text", label);
    //var cnvf = document.createElement("canvas");
    //var ctxf = cnvf.getContext("2d");
    //ctxf.drawImage(cnv_inv, x, y, w, h, 0, dy, dw, dh);
    //detectFeatures(cnvf);
  } else {
    addField("form_stats", name, "number", label);
    recognizeFile(ctx_filter.getImageData(x, y, w, h)).then(
      (data) =>
        (document.getElementById(name).value = data.text.replace(/[^-\d]/g, "")) //.match(/-?\d+/g))
      //TODO: Add error proccessing if data.text is not a number
    );
    ctx.drawImage(cnv_filter, x, y, w, h, dx, dy, dw, dh);
  }
}

function processPerks(line, cimg, name, label, type) {
  addField("form_perks", name, "textarea", label);
  recognizeFile(ctx_inv.getImageData(cimg.sx, cimg.sy, cimg.sw, cimg.sh)).then(
    (data) => (document.getElementById(name).value = data.text.trim())
  );

  drawOCR(cnv_inv, "cnv_ocr", cimg);
}

function addField(parent, name, type, label) {
  var container = document.getElementById(parent);
  if (type == "text" || type == "number") {
    var ig = container.appendChild(document.createElement("div"));
    ig.className = "input-group mb-3";
    var igp = ig.appendChild(document.createElement("div"));
    igp.className = "input-group-prepend";
    var span = igp.appendChild(document.createElement("span"));
    span.className = "input-group-text";
    span.textContent = label;
    var input = ig.appendChild(document.createElement("input"));
    input.id = name;
    input.name = name;
    input.type = type;
    input.step = "0.1";
    input.className = "form-control";
  } else {
    var input = container.appendChild(document.createElement("textarea"));
    input.id = name;
    input.name = name;
    input.cols = "50";
    input.rows = "4";
    input.className = "form-control form-control-sm";
  }
}

function getColor(img) {
  var colors = {};
  var rgb = { r: 0, g: 0, b: 0, h: "" };
  var count = 0;
  for (var x = 0; x < img.width; x++) {
    for (var y = 0; y < img.height; y++) {
      var i = y * 4 * img.width + x * 4;
      var hex = rgbToHex(img.data[i], img.data[i + 1], img.data[i + 2]);
      rgb.r += img.data[i];
      rgb.g += img.data[i + 1];
      rgb.b += img.data[i + 2];
      count++;
      colors[hex] = (colors[hex] || 0) + 1;
    }
  }
  rgb.r = Math.floor(rgb.r / count);
  rgb.g = Math.floor(rgb.g / count);
  rgb.b = Math.floor(rgb.b / count);
  rgb.h = rgbToHex(rgb.r, rgb.g, rgb.b);
  return rgb;
}

function getRarity(rgb) {
  var rarities = [
    { r: 101, g: 101, b: 101, h: "#656565", rarity: "Base" },
    { r: 165, g: 165, b: 165, h: "#a5a5a5", rarity: "Common" },
    { r: 2, g: 74, b: 148, h: "#024a94", rarity: "Rare" },
    { r: 36, g: 147, b: 147, h: "#249393", rarity: "Special" },
    { r: 121, g: 0, b: 167, h: "#7900a7", rarity: "Epic" },
    { r: 167, g: 105, b: 42, h: "#a7692a", rarity: "Legendary" },
    { r: 163, g: 65, b: 0, h: "#a34100", rarity: "Relic" },
  ];
  for (var cbt in rarities) {
    if (rgb.r > rarities[cbt].r - 20 && rgb.r < rarities[cbt].r + 20) {
      if (rgb.g > rarities[cbt].g - 20 && rgb.g < rarities[cbt].g + 20) {
        if (rgb.b > rarities[cbt].b - 20 && rgb.b < rarities[cbt].b + 20) {
          return rarities[cbt].rarity;
        }
      }
    }
  }
  return "Unknown";
}

function processBar(img) {
  var colors = {
    "#000000": 0,
    "#b3b3b3": 0
  };
  for (var x = 0; x < img.width; x++) {
    for (var y = 0; y < img.height; y++) {
      var i = y * 4 * img.width + x * 4;
      var hex = rgbToHex(img.data[i], img.data[i + 1], img.data[i + 2]);
      colors[hex] = (colors[hex] || 0) + 1;
    }
  }
  var val = colors["#000000"] / (colors["#000000"] + colors["#b3b3b3"]);
  val = ~~(val * 100);
  val = val / 10;
  return val;
}

function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

img_org.onload = function () {
  iw = img_org.width;
  ih = img_org.height;
  //proportion = cw / iw;
  cw = ~~(iw * proportion);
  ch = ~~(ih * proportion);

  update_cimgs();
  initForm();

  cnv0.width = cw;
  cnv0.height = ch;
  ctx0.clearRect(0, 0, cw, ch);
  cnv0.style.backgroundImage = "url(" + img_org.src + ")";

  cnv_ocr.width = cw;
  cnv_ocr.height = ch;

  cnv_org.width = iw;
  cnv_org.height = ih;
  ctx_org.drawImage(img_org, 0, 0, iw, ih);
  title_color = getColor(ctx_org.getImageData(10, 10, 10, 10));
  var title_gs = ~~((title_color.r + title_color.g + title_color.b) / 3);
  document.getElementById("rarity").value = getRarity(title_color);

  cnv_inv.width = iw;
  cnv_inv.height = ih;
  ctx_inv.filter = "invert(1)";
  ctx_inv.drawImage(img_org, 0, 0, iw, ih);

  cnv_filter.width = iw;
  cnv_filter.height = ih;
  cv.imshow(cnv_filter, filterImg(cnv_inv, 255 - title_gs + 20));

  cnv_title.width = cimgs.title.sw;
  cnv_title.height = cimgs.title.sh;
  ctx_title.filter = "invert(1)";
  ctx_title.drawImage(
    img_org,
    cimgs.title.sx,
    cimgs.title.sy,
    cimgs.title.sw,
    cimgs.title.sh,
    0,
    0,
    cimgs.title.sw,
    cimgs.title.sh
  );
  cv.imshow(cnv_title, filterImg(cnv_title, title_gs));
  ctx_ocr.drawImage(
    cnv_title,
    0,
    0,
    cimgs.title.sw,
    cimgs.title.sh,
    cimgs.title.dx,
    cimgs.title.dy,
    cimgs.title.dw,
    cimgs.title.dh
  );

  ocrImage();
};

function filterImg(img, thresh) {
  let src = cv.imread(img);
  let gs = new cv.Mat();
  let bw = new cv.Mat();
  let blur = new cv.Mat();
  let dst = new cv.Mat();
  let M = cv.Mat.ones(2, 2, cv.CV_8U);
  let anchor = new cv.Point(-1, -1);

  cv.cvtColor(src, gs, cv.COLOR_RGBA2GRAY);
  cv.erode(
    gs,
    blur,
    M,
    anchor,
    1,
    cv.BORDER_CONSTANT,
    cv.morphologyDefaultBorderValue()
  );
  cv.threshold(blur, dst, thresh, 255, cv.THRESH_BINARY);

  src.delete();
  gs.delete();
  bw.delete();
  blur.delete();
  return dst;
}

function recognizeImage(image) {
  //console.log('recognize START');

  ocr_info.textContent = "Waiting to start.";
  ocr_info.classList.remove("error");
  ocr_info.classList.add("processing");

  return Tesseract.recognize(image, { lang: "eng" })
    .progress((progress) => {
      // console.log('progress', progress);
      ocr_info.innerHTML = `Processing...<br>Status: ${
        progress.status
      }<br>${Math.round(progress.progress * 100)}%`;
    })
    .then((result) => {
      //console.log('result', result.text);

      ocr_info.classList.remove("processing");
      //ocr_results.textContent = result.text;
    })
    .catch((err) => {
      myError(err, "caught error");
      ocr_info.classList.add("error");
      ocr_info.textContent = "Error processing image.";
    })
    .finally(() => {
      //console.log('recognize END');
    });
}

function progressUpdate(packet) {
  var log = document.getElementById("log");

  if (log.firstChild && log.firstChild.status === packet.status) {
    if ("progress" in packet) {
      var progress = log.firstChild.querySelector("progress");
      progress.value = packet.progress;
    }
  } else {
    var line = document.createElement("div");
    line.status = packet.status;
    var status = document.createElement("div");
    status.className = "status";
    status.appendChild(document.createTextNode(packet.status));
    line.appendChild(status);

    if ("progress" in packet) {
      var progress = document.createElement("progress");
      progress.value = packet.progress;
      progress.max = 1;
      line.appendChild(progress);
    }

    if (packet.status == "done") {
      var pre = document.createElement("pre");
      pre.appendChild(document.createTextNode(packet.data.text));
      line.innerHTML = "";
      line.appendChild(pre);
    }

    log.insertBefore(line, log.firstChild);
  }
}

async function recognizeFile(file) {
  //document.querySelector("#log").innerHTML = "";

  const lang = document.querySelector("#langsel").value;
  const data = await Tesseract.recognize(file, lang, {
    logger: progressUpdate,
  });
  progressUpdate({ status: "done", data });
  return data;
}

var form = document.getElementById("form");
const submitURL =
  "https://script.google.com/macros/s/AKfycbwedtt9rbWyb34xnfN3zv_2ijjGsaA1pT5Kjc9MDa4ZVdo3w4bDaJ7ECw/exec";
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(submitURL, {
    method: "POST",
    body: new FormData(form),
  })
    .then((response) => console.log("Success!", response))
    .then((html) => {
      // you can put any JS code here
      // alert("Success!");
    });
});

function appendOCR_results(text) {
  var pre = document.createElement("pre");
  pre.appendChild(document.createTextNode(text));
  document.getElementById("ocr_results").appendChild(pre);
}

function initForm() {
  var category = document.getElementById("category").value;
  var faction = document.getElementById("faction").value;
  var lvl = document.getElementById("level").value;

  document.getElementById("form").reset();

  document.getElementById("desc").textContent = "";
  document.getElementById("form_stats").innerHTML = "";
  document.getElementById("form_perks").innerHTML = "";
  document.getElementById("ocr_results").innerHTML = "";

  // var stats = document.getElementById("form_stats");
  // while (stats.hasChildNodes()) {
  //   stats.removeChild(stats.lastChild);
  // }
  // var perks = document.getElementById("form_perks");
  // while (perks.hasChildNodes()) {
  //   perks.removeChild(perks.lastChild);
  // }

  document.getElementById("category").value = category;
  document.getElementById("faction").value = faction;
  document.getElementById("level").value = lvl;
}

function myError(err, message) {
  console.warn(`MyError: ${message || ""}`);
  console.error(err);
}

function jsonp(url, callback) {
  var callbackName = "jsonp_callback_" + Math.round(100000 * Math.random());
  window[callbackName] = function (data) {
    delete window[callbackName];
    document.body.removeChild(script);
    callback(data);
  };

  var script = document.createElement("script");
  script.src = url + "&tqx=responseHandler:" + callbackName;
  // url + (url.indexOf("?") >= 0 ? "&" : "?") + "callback=" + callbackName;
  document.body.appendChild(script);
}

function detectFeatures(img) {
  let src = cv.imread(img);
  let templ = cv.imread(img_melee);
  let dst = new cv.Mat();
  let mask = new cv.Mat();
  cv.matchTemplate(src, templ, dst, cv.TM_CCOEFF, mask);
  let result = cv.minMaxLoc(dst, mask);
  let maxPoint = result.maxLoc;
  let color = new cv.Scalar(255, 0, 0, 255);
  let point = new cv.Point(maxPoint.x + templ.cols, maxPoint.y + templ.rows);
  cv.rectangle(src, maxPoint, point, color, 2, cv.LINE_8, 0);
  var cnv = document.createElement("canvas");
  var container = document.getElementById("cnv_stats1");
  container.appendChild(cnv);
  cv.imshow(cnv, src);
  src.delete();
  dst.delete();
  mask.delete();
}

// TODO: better progress status
// TODO: better error logging
// TODO: upgrade tesseract
// TODO: improve image preproccesing
// TODO: improve image inputing clip pasting/batch processing
// TODO: add feature detection
