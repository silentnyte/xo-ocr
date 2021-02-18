var proportion; // ratio of original image to canvas size
var img_org = new Image(); // original image
var cbEnabled = false;
var cb1aEnbld = false;

var cb_info = document.getElementById("cb_info");
var ocr_info = document.getElementById("ocr_info");
var catElement = document.getElementById("category");
var cnv0 = document.getElementById("cnv_org");
var ctx0 = cnv0.getContext("2d");
var cnv1 = document.getElementById("cnv1");
var cnv2 = document.getElementById("cnv2");
var cnv3 = document.getElementById("cnv3");
var cnv4 = document.getElementById("cnv4");
var cnv4a = document.getElementById("cnv4a");
var cnv5 = document.getElementById("cnv5");
var cnv5a = document.getElementById("cnv5a");
var cnv6 = document.getElementById("cnv6");

var cnv_orj = document.createElement("canvas");
var ctx_org = cnv_orj.getContext("2d");
var cnv_inv = document.createElement("canvas");
var ctx_inv = cnv_inv.getContext("2d");
var cnv_filter = document.createElement("canvas");
var ctx_filter = cnv_filter.getContext("2d");
var cnv_bw = document.createElement("canvas");
var ctx_bw = cnv_bw.getContext("2d");

var iw, ih;
var cw = (cnv0.width = 310); //594
var ch = (cnv0.height = 500);
cnv1.width = cnv2.width = cnv3.width = cnv4.width = cnv4a.width = cnv5.width = cnv5a.width = cnv6.width = 140;
cnv1.height = cnv2.height = cnv3.height = cnv4.height = cnv4a.height = cnv5.height = cnv5a.height = cnv6.height = 40;
ctx0.fillStyle = "#000000";
ctx0.font = "16px Courier";
ctx0.textAlign = "center";
ctx0.textBaseline = "middle";
ctx0.fillText("PASTE ITEM CLIP HERE", cw / 2, ch / 2);

var img_melee = new Image();
img_melee.src = 'data:image/png;base64,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';

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
  (filename = results.filename), (dataURL = results.dataURL);
  $data.text(dataURL);
  $size.val(results.file.size);
  $type.val(results.file.type);
  img_org.src = dataURL;
  iw = img_org.width;
  ih = img_org.height;
  $width.val(iw);
  $height.val(ih);

  //console.log(`img w="${iw}", h="${ih}"`);

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

var isDragging1 = false;

var mousePos1 = {
  x: 0,
  y: 0,
};

var cb1 = 59;
var cb1a = 59;
var cb2 = 118;
var cb3 = 158;
var cb4 = 273;
var cb5 = 348;
var r = 2; // cropping bar thickness

// cropping bars
var cbs = {
  cb1: {
    color: "yellow",
    x: 0,
    y: cb1,
    w: cw,
    h: r,
    bool: false,
  },
  cb1a: {
    color: "yellow",
    x: 0,
    y: cb1a,
    w: cw,
    h: r,
    bool: false,
  },
  cb2: {
    color: "yellow",
    x: 0,
    y: cb2,
    w: cw,
    h: r,
    bool: false,
  },
  cb3: {
    color: "yellow",
    x: 0,
    y: cb3,
    w: cw,
    h: r,
    bool: false,
  },
  cb4: {
    color: "yellow",
    x: 0,
    y: cb4,
    w: cw,
    h: r,
    bool: false,
  },
  cb5: {
    color: "yellow",
    x: 0,
    y: cb5,
    w: cw,
    h: r,
    bool: false,
  },
};

var cimgs; // cropped images
function update_cimgs() {
  cimgs = {
    cimg1: {
      sx: ~~(iw - iw * 0.83),
      sy: 0,
      sw: ~~(iw * 0.83),
      sh: ~~(cbs.cb1.y * proportion),
      dx: 0,
      dy: 0,
      dw: ~~((iw * 0.83) / proportion),
      dh: cbs.cb1.y,
    },
    cimg2: {
      sx: 0,
      sy: ~~(cbs.cb1a.y * proportion),
      sw: iw,
      sh: ~~((cbs.cb2.y - cbs.cb1a.y) * proportion),
      dx: 0,
      dy: 0,
      dw: ~~(iw / proportion),
      dh: cbs.cb2.y - cbs.cb1a.y,
    },
    cimg3: {
      sx: ~~(iw * 0.01),
      sy: ~~(cbs.cb2.y * proportion),
      sw: ~~(iw * 0.26),
      sh: ~~((cbs.cb3.y - cbs.cb2.y) * proportion),
      dx: 0,
      dy: 0,
      dw: ~~((iw * 0.26) / proportion),
      dh: cbs.cb3.y - cbs.cb2.y,
    },
    cimg4: {
      sx: 0,
      sy: ~~(cbs.cb3.y * proportion),
      sw: ~~(iw * 0.45),
      sh: ~~((cbs.cb4.y - cbs.cb3.y) * proportion),
      dx: 0,
      dy: 0,
      dw: ~~((iw * 0.45) / proportion),
      dh: cbs.cb4.y - cbs.cb3.y,
      cnv: "cnv4a",
      parent: "stats1",
      sx2: ~~(iw * 0.47),
      sw2: ~~(iw * 0.49),
      sh2: 8,
    },
    cimg5: {
      sx: 0,
      sy: ~~(cbs.cb4.y * proportion),
      sw: ~~(iw * 0.45),
      sh: ~~((cbs.cb5.y - cbs.cb4.y) * proportion),
      dx: 0,
      dy: 0,
      dw: ~~((iw * 0.45) / proportion),
      dh: cbs.cb5.y - cbs.cb4.y,
      cnv: "cnv5a",
      parent: "stats2",
      sx2: ~~(iw * 0.52),
      sw2: ~~(iw * 0.3),
      sh2: 16,
    },
    cimg5a: {
      sx: ~~(iw * 0.52),
      sy: ~~(cbs.cb4.y * proportion),
      sw: ~~(iw * 0.48),
      sh: ~~((cbs.cb5.y - cbs.cb4.y) * proportion),
      dx: 0,
      dy: 0,
      dw: ~~((iw * 0.45) / proportion),
      dh: cbs.cb5.y - cbs.cb4.y,
    },
    cimg6: {
      sx: ~~(iw * 0.1),
      sy: ~~(cbs.cb5.y * proportion),
      sw: ~~(iw * 0.9),
      sh: ~~((ch - cbs.cb5.y) * proportion),
      dx: 0,
      dy: 0,
      dw: ~~((iw * 0.91) / proportion),
      dh: ch - cbs.cb5.y,
    },
  };
}

function drawCroppingBars() {
  for (var k in cbs) {
    ctx0.fillStyle = cbs[k].color;
    ctx0.beginPath();
    ctx0.fillRect(cbs[k].x, cbs[k].y, cbs[k].w, cbs[k].h);
  }
  update_cimgs();
  cb_info.textContent =
    "cb1:" +
    cbs.cb1.y +
    ", cb1a:" +
    cbs.cb1a.y +
    ", cb2:" +
    cbs.cb2.y +
    ", cb3:" +
    cbs.cb3.y +
    ", cb4:" +
    cbs.cb4.y +
    ", cb5:" +
    cbs.cb5.y +
    "";
}

function drawImgToCanvas(img, cnv, cimg) {
  var ctx = cnv.getContext("2d");
  ctx.clearRect(0, 0, cw, ch);
  cnv.width = cimg.dw;
  cnv.height = cimg.dh;
  ctx.drawImage(
    img,
    cimg.sx,
    cimg.sy,
    cimg.sw,
    cimg.sh,
    cimg.dx,
    cimg.dy,
    cimg.dw,
    cimg.dh
  );

  // let cv_src = cv.imread(img);
  // let cv_dst = new cv.Mat();
  // let crop = new cv.Rect(cimg.sx, cimg.sy, cimg.sw, cimg.sh);
  // let cv_scaled = new cv.Mat();
  // let dsize = new cv.Size(cimg.dw, cimg.dh);
  // cv_dst = cv_src.roi(crop);
  // if (filter) {
  //   cv_dst = filterImg(cv_dst, cv_dst);
  // }
  // cv.resize(cv_dst, cv_scaled, dsize, 0, 0, cv.INTER_AREA);
  // cv.imshow(cnv, cv_scaled);
  // cv_src.delete();
  // cv_scaled.delete();
  // return cv_dst;
}

function drawCroppedImages() {
  drawImgToCanvas(cnv_filter, cnv1, cimgs.cimg1);
  drawImgToCanvas(cnv_inv, cnv2, cimgs.cimg2);
  drawImgToCanvas(cnv_bw, cnv3, cimgs.cimg3);
  drawImgToCanvas(cnv_inv, cnv4, cimgs.cimg4);
  drawImgToCanvas(cnv_inv, cnv5, cimgs.cimg5);
  //drawImgToCanvas(cnv_inv, cnv5a, cimgs.cimg5a);
  drawImgToCanvas(cnv_inv, cnv6, cimgs.cimg6);
}

function ocrImages() {
  cbEnabled = false;

  var rgb = getColor(ctx_org.getImageData(10, 10, 10, 10));
  var ratiry = getRarity(rgb);
  //console.log(ratiry);
  document.getElementById("rarity").value = ratiry;

  recognizeImage(
    ctx_filter.getImageData(
      cimgs.cimg1.sx,
      cimgs.cimg1.sy,
      cimgs.cimg1.sw,
      cimgs.cimg1.sh
    )
  ).then((data) => processOCR(data, cimgs.cimg1, ["name", "type"]));

  recognizeImage(
    ctx_inv.getImageData(
      cimgs.cimg2.sx,
      cimgs.cimg2.sy,
      cimgs.cimg2.sw,
      cimgs.cimg2.sh
    )
  ).then((data) => processOCR(data, cimgs.cimg2, ["desc"]));

  let rgxPS = [
    ["O", "0"],
    ["D", "0"],
    [/\s/g, ""],
  ];
  recognizeImage(
    ctx_bw.getImageData(
      cimgs.cimg3.sx,
      cimgs.cimg3.sy,
      cimgs.cimg3.sw,
      cimgs.cimg3.sh
    )
  ).then((data) => processOCR(data, cimgs.cimg3, ["ps"], rgxPS));

  if (cimgs.cimg4.sh > 10) {
    recognizeImage(
      ctx_inv.getImageData(
        cimgs.cimg4.sx,
        cimgs.cimg4.sy,
        cimgs.cimg4.sw,
        cimgs.cimg4.sh
      )
    ).then((data) => processOCR(data, cimgs.cimg4, []));
  }

  recognizeImage(
    ctx_inv.getImageData(
      cimgs.cimg5.sx,
      cimgs.cimg5.sy,
      cimgs.cimg5.sw,
      cimgs.cimg5.sh
    )
  ).then((data) => processOCR(data, cimgs.cimg5, []));

  // recognizeImage(
  //   ctx_inv.getImageData(
  //     cimgs.cimg5a.sx,
  //     cimgs.cimg5a.sy,
  //     cimgs.cimg5a.sw,
  //     cimgs.cimg5a.sh
  //   )
  // ).then((data) => processOCR(data, cimgs.cimg5a, ["val2a", "val2b", "val2c"], rgxStat));

  if (cimgs.cimg6.sh > 10) {
    recognizeImage(
      ctx_inv.getImageData(
        cimgs.cimg6.sx,
        cimgs.cimg6.sy,
        cimgs.cimg6.sw,
        cimgs.cimg6.sh
      )
    ).then((data) => processOCR(data, cimgs.cimg6, ["perks"]));
  } else {
    document.getElementById("perks").value = "";
  }
  cbEnabled = true;
}

function processOCR(data, cimg, txtb, rgx) {
  rgx = rgx || [];
  var i = 0;
  var txt = "";
  var elm;
  var pImg2 = false;
  try {
    if (cimg.parent && cimg.parent !== "null" && cimg.parent !== "undefined") {
      if (cimg.parent != "") {
        pImg2 = true;
      }
    }
    for (let l in data.lines) {
      txt = data.lines[l].text.trim();
      if (txt.length > 0) {
        for (let j = 0; j < rgx.length; j++) {
          txt = txt.replace(rgx[j][0], rgx[j][1]);
        }
        //console.log(elm.type + ' ' + txt);
        if (pImg2) {
          processImg2(data.lines[l], cimg);
        } else {
          //console.log('1 - ' + txtb[i]);
          elm = document.getElementById(txtb[i]);
          if (elm.type == "textarea") {
            if (elm.textContent.length > 0) {
              elm.textContent = elm.textContent + "\n";
            }
            elm.textContent = elm.textContent + txt;
          } else {
            elm.textContent = txt;
            elm.value = txt;
          }
          if (i < txtb.length - 1) {
            i++;
            elm = document.getElementById(txtb[i]);
          }
        }
      }
    }
  } catch (err) {
    console.error(err.stack);
  }
}

function processImg2(line, cimg) {
  var bb = line.bbox;
  var x = cimg.sx2;
  var y = cimg.sy + bb.y0 - cimg.sh2;
  var w = cimg.sw2;
  var h = bb.y1 - bb.y0 + cimg.sh2 * 2;
  var dy = ~~((y - cimg.sy) / proportion);
  var dw = ~~(w / proportion);
  var dh = ~~(h / proportion);
  var syc = ~~(y + h / 2); //source center of bar
  //console.log(cimg.sy+' '+bb.y0+' '+bb.y1);
  var cnv = document.getElementById(cimg.cnv);
  var ctx = cnv.getContext("2d");
  if (dw > cnv.width || cimg.dh > cnv.height) {
    cnv.width = dw;
    cnv.height = cimg.dh;
  }
  ctx.drawImage(cnv_inv, x, y, w, h, 0, dy, dw, dh);
  //console.log(cimg.parent);

  var label = line.text.trim();
  if (label == "Puwer") {
    label = "Power";
  }
  if (label == "Max. catlin speed") {
    label = "Max. cabin speed";
  }
  
  var name = label.toLowerCase().replace(/ /g, "_");
  if (
    name == "damage" ||
    name == "fire_rate" ||
    name == "range" ||
    name == "accuracy" ||
    name == "time_to_overheating" ||
    (name == "power" && catElement.value == "Cabins")
  ) {
    addField(cimg.parent, name, "number", label);
    var val = processBar(ctx_inv.getImageData(x, syc, w, 1));
    document.getElementById(name).value = val;
  } else if (name == "features") {
    addField(cimg.parent, name, "text", label);
    //var cnvf = document.createElement("canvas");
    //var ctxf = cnvf.getContext("2d");
    //ctxf.drawImage(cnv_inv, x, y, w, h, 0, dy, dw, dh);
    //detectFeatures(cnvf);
  } else {
    addField(cimg.parent, name, "number", label);
    recognizeImage(ctx_inv.getImageData(x, y, w, h)).then(
      (data) =>
        (document.getElementById(name).value = data.text
          .replace(/\s/g, "")
          .match(/-?\d+/g))
    );
    //).then((data) => processOCR(data, null, [name], rgx));
    //txt = txt.match(/-?\d+/g);
    //txt = txt.replace(',','');
    //document.getElementById(name).value = txt;
  }
}

function addField(parent, name, type, label) {
  var container = document.getElementById(parent);
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
  input.className = "form-control";
}

function getColor(img) {
  var pixels = [];
  var dict = {};
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
      pixels[i] = hex;
      dict[hex] = (dict[hex] || 0) + 1;
    }
  }
  rgb.r = Math.floor(rgb.r / count);
  rgb.g = Math.floor(rgb.g / count);
  rgb.b = Math.floor(rgb.b / count);
  rgb.h = rgbToHex(rgb.r, rgb.g, rgb.b);
  //console.log(dict);
  //console.log(rgb);
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
  for (r in rarities) {
    //console.log(rarities[r]);
    if (rgb.r > rarities[r].r - 20 && rgb.r < rarities[r].r + 20) {
      if (rgb.g > rarities[r].g - 20 && rgb.g < rarities[r].g + 20) {
        if (rgb.b > rarities[r].b - 20 && rgb.b < rarities[r].b + 20) {
          return rarities[r].rarity;
        }
      }
    }
  }
  return "Unknown";
}

function processBar(img) {
  var pixels = [];
  var dict = {};
  for (var x = 0; x < img.width; x++) {
    for (var y = 0; y < img.height; y++) {
      var i = y * 4 * img.width + x * 4;
      var hex = rgbToHex(img.data[i], img.data[i + 1], img.data[i + 2]);
      pixels[i] = hex;
      dict[hex] = (dict[hex] || 0) + 1;
    }
  }
  var val = dict["#000000"] / (dict["#000000"] + dict["#b3b3b3"]);
  val = ~~(val * 100);
  val = val / 10;
  //console.log(dict);
  return val;
}

function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

img_org.onload = function () {
  clearForm();
  iw = img_org.width;
  ih = img_org.height;
  proportion = iw / cw;
  //console.log(`img w="${iw}", h="${ih}", p="${proportion}"`);
  //console.log(`cnv w="${cnv_org.width}", h="${cnv_org.height}"`);
  ch = ~~(ih / proportion);
  cnv0.height = ch;
  ctx0.clearRect(0, 0, cw, ch);
  cnv0.style.backgroundImage = "url(" + img_org.src + ")";
  cnv_orj.width = iw;
  cnv_orj.height = ih;
  ctx_org.drawImage(img_org, 0, 0, iw, ih);
  cnv_inv.width = iw;
  cnv_inv.height = ih;
  ctx_inv.filter = "invert(1)";
  ctx_inv.drawImage(img_org, 0, 0, iw, ih);

  let cv_src = cv.imread(cnv_inv);
  let cv_filter = new cv.Mat();
  //let crop = new cv.Rect(cimgs.cimg1.sx, cimgs.cimg1.sy, cimgs.cimg1.sw, cimgs.cimg1.sh);
  cv_filter = filterImg(cv_src, cv_filter);
  cv.imshow(cnv_filter, cv_filter);
  cv_filter.delete();

  let cv_bw = new cv.Mat();
  cv.cvtColor(cv_src, cv_bw, cv.COLOR_RGBA2GRAY);
  cv.threshold(cv_bw, cv_bw, 200, 255, cv.THRESH_BINARY);
  cv.imshow(cnv_bw, cv_bw);
  cv_bw.delete();
  cv_src.delete();

  cbs.cb5.y = Math.min(cbs.cb5.y, ch);

  drawCroppingBars();
  drawCroppedImages();
  ocrImages();
  cbEnabled = true;

  //let cv_src = cv.imread(cnv_inv);
  //let cv_dst = new cv.Mat();
  //let crop = new cv.Rect(cimgs.cimg1.sx, cimgs.cimg1.sy, cimgs.cimg1.sw, cimgs.cimg1.sh);
  //cv_dst = filterImg(cv_src.roi(crop), cv_dst);
  //cv.imshow('cnv1', cv_dst);
  //cv_src.delete();
  //cv_dst.delete();
};

function filterImg(src, dst) {
  let blur = new cv.Mat();
  let gs = new cv.Mat();
  let bw = new cv.Mat();
  //let ksize = new cv.Size(3, 3);
  cv.cvtColor(src, gs, cv.COLOR_RGBA2GRAY);
  //cv.GaussianBlur(gs, blur, ksize, 0);
  cv.medianBlur(gs, blur, 3);
  cv.threshold(blur, dst, 74, 255, cv.THRESH_BINARY);
  //cv.threshold(mat, dst, 128, 255, cv.THRESH_BINARY);
  //does not work: dst = cv.adaptiveThreshold(cv.medianBlur(mat, 3), 255, cv.ADAPTIVE_THRESH_GAUSSIAN_C, cv.THRESH_BINARY, 31, 2);
  //cv.adaptiveThreshold(mat, dst, 200, cv.ADAPTIVE_THRESH_GAUSSIAN_C, cv.THRESH_BINARY, 3, 2);
  //does not work: dst = cv.bitwise_not(src);
  blur.delete();
  gs.delete();
  bw.delete();
  return dst;
}

function recognizeImage(image) {
  //console.log('recognize START');

  ocr_info.textContent = "Waiting to start.";
  ocr_info.classList.remove("error");
  ocr_info.classList.add("processing");

  return Tesseract.recognize(image)
    .progress((progress) => {
      // console.log('progress', progress);
      ocr_info.innerHTML = `Processing...<br>Status: ${
        progress.status
      }<br>${Math.round(progress.progress * 100)}%`;
    })
    .then((result) => {
      //console.log('result', result.text);

      ocr_info.classList.remove("processing");
      //ocr_result.textContent = result.text;
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

function cursorStyleC1() {
  cnv0.style.cursor = "default";
  if (cbEnabled) {
    for (var k in cbs) {
      //o[k].bool = false;
      ctx0.beginPath();
      ctx0.rect(cbs[k].x - 5, cbs[k].y - 5, cbs[k].w + 20, cbs[k].h + 20);
      if (ctx0.isPointInPath(mousePos1.x, mousePos1.y)) {
        if (
          k == "cb1" ||
          k == "cb1a" ||
          k == "cb2" ||
          k == "cb3" ||
          k == "cb4" ||
          k == "cb5"
        ) {
          cnv0.style.cursor = "row-resize";
        } else {
          cnv0.style.cursor = "col-resize";
        }
        break;
      } else {
        cnv0.style.cursor = "default";
      }
    }
  }
}

// mousedown ***************************
cnv0.addEventListener(
  "mousedown",
  function (evt) {
    if (cbEnabled) {
      isDragging1 = true;

      mousePos1 = oMousePos(cnv0, evt);
      for (var k in cbs) {
        ctx0.beginPath();
        ctx0.rect(cbs[k].x - 5, cbs[k].y - 5, cbs[k].w + 20, cbs[k].h + 20);
        if (ctx0.isPointInPath(mousePos1.x, mousePos1.y)) {
          cbs[k].bool = true;
          if (k == "cb1" || k == "cb1a") {
            if (cb1aEnbld) {
              cbs[k].y = mousePos1.y;
            } else {
              cbs.cb1.y = mousePos1.y;
              cbs.cb1a.y = mousePos1.y;
            }
          } else if (k == "cb2" || k == "cb3" || k == "cb4" || k == "cb5") {
            cbs[k].y = mousePos1.y;
          } else {
            cbs[k].x = mousePos1.x;
          }
          break;
        } else {
          cbs[k].bool = false;
        }
      }
    }
  },
  false
);

// mousemove ***************************
cnv0.addEventListener(
  "mousemove",
  function (evt) {
    mousePos1 = oMousePos(cnv0, evt); //console.log(mousePos)
    cursorStyleC1();

    if (isDragging1 == true) {
      ctx0.clearRect(0, 0, cw, ch);

      for (var k in cbs) {
        if (cbs[k].bool) {
          if (k == "cb1" || k == "cb1a") {
            if (cb1aEnbld) {
              cbs[k].y = mousePos1.y;
            } else {
              cbs.cb1.y = mousePos1.y;
              cbs.cb1a.y = mousePos1.y;
            }
          } else if (k == "cb2" || k == "cb3" || k == "cb4" || k == "cb5") {
            cbs[k].y = mousePos1.y;
          } else {
            cbs[k].x = mousePos1.x;
          }
          break;
        }
      }

      drawCroppingBars();
      drawCroppedImages();
    }
  },
  false
);

// mouseup ***************************
cnv0.addEventListener(
  "mouseup",
  function (evt) {
    isDragging1 = false;
    for (var k in cbs) {
      cbs[k].bool = false;
    }
  },
  false
);

// mouseout ***************************
cnv0.addEventListener(
  "mouseout",
  function (evt) {
    isDragging1 = false;
    for (var k in cbs) {
      cbs[k].bool = false;
    }
  },
  false
);

function oMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: Math.round(evt.clientX - rect.left),
    y: Math.round(evt.clientY - rect.top),
  };
}

catElement.addEventListener("change", (event) => {
  if (event.target.value == "Structure") {
    cb1aEnbld = true;
    cbs.cb1.y = cb1;
    cbs.cb1a.y = 123;
    cbs.cb2.y = 177;
    cbs.cb3.y = 218;
    cbs.cb4.y = 273;
    cbs.cb5.y = 325;
  } else if (event.target.value == "Frames") {
    cb1aEnbld = true;
    cbs.cb1.y = cb1;
    cbs.cb1a.y = 123;
    cbs.cb2.y = 162;
    cbs.cb3.y = 202;
    cbs.cb4.y = 237;
    cbs.cb5.y = 325;
  } else if (event.target.value == "Decor") {
    cb1aEnbld = true;
    cbs.cb1.y = cb1;
    cbs.cb1a.y = 85;
    cbs.cb2.y = 177;
    cbs.cb3.y = 218;
    cbs.cb4.y = 218;
    cbs.cb5.y = 325;
  } else if (event.target.value == "Cabins") {
    cb1aEnbld = false;
    cbs.cb1.y = cb1;
    cbs.cb1a.y = cb1a;
    cbs.cb2.y = 163;
    cbs.cb3.y = 204;
    cbs.cb4.y = 320;
    cbs.cb5.y = 374;
  } else if (event.target.value == "Movement") {
    cb1aEnbld = false;
    cbs.cb1.y = cb1;
    cbs.cb1a.y = cb1a;
    cbs.cb2.y = cb2;
    cbs.cb3.y = cb3;
    cbs.cb4.y = 237;
    cbs.cb5.y = cb5;
  } else if (event.target.value == "Hardware") {
    cb1aEnbld = false;
    cbs.cb1.y = cb1;
    cbs.cb1a.y = cb1a;
    cbs.cb2.y = 176;
    cbs.cb3.y = 217;
    cbs.cb4.y = 292;
    cbs.cb5.y = 366;
  } else {
    cb1aEnbld = false;
    cbs.cb1.y = cb1;   //59
    cbs.cb1a.y = cb1a; //59
    cbs.cb2.y = cb2;   //118
    cbs.cb3.y = cb3;   //158
    cbs.cb4.y = cb4;   //273
    cbs.cb5.y = cb5;   //348
}
  if (cbEnabled) {
    ctx0.clearRect(0, 0, cw, ch);
    drawCroppingBars();
    drawCroppedImages();
    clearForm();
    ocrImages();
  }
});

var form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(form.action, {
    method: "POST",
    body: new FormData(document.getElementById("form")),
  })
    .then((response) => response.json())
    .then((html) => {
      // you can put any JS code here
      alert("success");
    });
});

function clearForm() {
  var cat = catElement.value;
  var faction = document.getElementById("faction").value;
  var lvl = document.getElementById("level").value;

  document.getElementById("form").reset();

  document.getElementById("desc").textContent = '';
  document.getElementById("perks").textContent = '';
  var stats1 = document.getElementById("stats1");
  while (stats1.hasChildNodes()) {
    stats1.removeChild(stats1.lastChild);
  }
  var stats2 = document.getElementById("stats2");
  while (stats2.hasChildNodes()) {
    stats2.removeChild(stats2.lastChild);
  }
  var ctx4a = cnv4a.getContext("2d");
  cnv4a.height = 40;
  ctx4a.clearRect(0, 0, cnv4a.width, cnv4a.height);
  var ctx5a = cnv5a.getContext("2d");
  cnv5a.height = 40;
  ctx5a.clearRect(0, 0, cnv5a.width, cnv5a.height);

  catElement.value = cat;
  document.getElementById("faction").value = faction;
  document.getElementById("level").value = lvl;
}

function myError(err, message) {
  console.warn(`MyError: ${message || ""}`);
  console.error(err);
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
  var ctx = cnv.getContext("2d");
  var container = document.getElementById("cnv_stats1");
  container.appendChild(cnv);
  cv.imshow(cnv, src);
  src.delete(); dst.delete(); mask.delete();
}