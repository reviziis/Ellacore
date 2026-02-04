const images = [
  "491313859_122121901586763534_6701375329785040373_n.webp",
  "491313859_122121901586763534_6701375329785040373_n_compressed.webp",
  "498211088_122128152404763534_2012882153340018899_n.webp",
  "498211088_122128152404763534_2012882153340018899_n_compressed.webp",
  "515073079_122145628484763534_4349098313969915488_n.webp",
  "515073079_122145628484763534_4349098313969915488_n_compressed.webp",
  "521734406_122139150716763534_6545587891011205202_n.webp",
  "521734406_122139150716763534_6545587891011205202_n_compressed.webp",
  "524506666_122138952686763534_356606227299898647_n.webp",
  "524506666_122138952686763534_356606227299898647_n_compressed.webp",
  "557745077_122148774416763534_7471420824468577759_n.webp",
  "557745077_122148774416763534_7471420824468577759_n_compressed.webp",
  "568355040_122150502182763534_3452344547291263731_n.webp",
  "568355040_122150502182763534_3452344547291263731_n_compressed.webp",
  "568384397_122150502176763534_2778547771503351525_n.webp",
  "568384397_122150502176763534_2778547771503351525_n_compressed.webp",
  "573365124_122151620300763534_3363555647480811239_n.webp",
  "573365124_122151620300763534_3363555647480811239_n_compressed.webp",
  "574333156_122151620294763534_1743824353428525264_n.webp",
  "574333156_122151620294763534_1743824353428525264_n_compressed.webp",
  "585290306_122153875862763534_2018758615384669989_n.webp",
  "585290306_122153875862763534_2018758615384669989_n_compressed.webp",
  "588736442_122155032194763534_1952657933869038357_n.webp",
  "588736442_122155032194763534_1952657933869038357_n_compressed.webp",
  "7563311449947376918_01 ☁️  [375e33e09fc24bf9a92e3d81edd3b8be]_resized.webp",
  "7563311449947376918_02 ☁️  [711a2f90556a4a6c8fd415d8469d394b]_resized.webp",
  "7570037094010162454 TikTok video #75700370940101624541_resized_compressed.webp",
  "7570037094010162454 TikTok video #75700370940101624541_resized_upscayl_4x_4x_NMKD-Superscale-SP_178000_G_compressed.webp",
  "7570037094010162454 TikTok video #75700370940101624541_resized_upscayl_4x_RealESRGAN_General_x4_v3_compressed.webp",
  "7570037094010162454 TikTok video #75700370940101624541_resized_upscayl_4x_high-fidelity-4x_compressed.webp",
  "7570037094010162454 TikTok video #75700370940101624541_resized_upscayl_4x_realesr-animevideov3-x2_compressed.webp",
  "7570037094010162454 TikTok video #75700370940101624541_resized_upscayl_4x_remacri-4x_compressed.webp",
  "7570037094010162454 TikTok video #75700370940101624541_resized_upscayl_4x_uniscale_restore_compressed.webp",
  "dollz_lengthz-20251017_161930-1955299631.webp",
  "dollz_lengthz-20251017_161930-1955299632.webp",
  "dollz_lengthz-20251103_145731-2096687014.webp",
  "dollz_lengthz-20251130_143452-2523079406.webp",
  "dollz_lengthz-20251130_143452-2523079407.webp",
  "ellalouisegloverxx-20250316_150849-1064771865.webp",
  "ellalouisegloverxx-20250316_150849-1064771866.webp",
  "ellalouisegloverxx-20250316_150849-1064771867.webp",
  "ellalouisegloverxx-20250316_150849-1064771868.webp",
  "ellalouisegloverxx-20250416_213436-2980528807.webp",
  "ellalouisegloverxx-20250506_005059-2980528809.webp",
  "ellalouisegloverxx-20250521_182906-1655662303.webp",
  "ellalouisegloverxx-20250521_182906-1655662303_cleanup.webp",
  "ellalouisegloverxx-20250615_185001-2897782456.webp",
  "ellalouisegloverxx-20250615_185001-2897782457.webp",
  "ellalouisegloverxx-20250722_202711-2980528814.webp",
  "ellalouisegloverxx-20250725_101909-157350687.webp",
  "ellalouisegloverxx-20250725_101909-157350688.webp",
  "ellalouisegloverxx-20250725_101909-2447735323.webp",
  "ellalouisegloverxx-20250727_100654-4252607365.webp",
  "ellalouisegloverxx-20250730_134239-1871394637.webp",
  "ellalouisegloverxx-20250730_134239-2942034373.webp",
  "ellalouisegloverxx-20250730_134239-2981059047.webp",
  "ellalouisegloverxx-20250802_183214-441230007.webp",
  "ellalouisegloverxx-20250802_183214-441230008.webp",
  "ellalouisegloverxx-20250810_115433-2121551630.webp",
  "ellalouisegloverxx-20250810_115433-2121551631.webp",
  "ellalouisegloverxx-20250816_231821-1666813696.webp",
  "ellalouisegloverxx-20250906_230700-1871013167.webp",
  "ellalouisegloverxx-20250906_230700-3139083527.webp",
  "ellalouisegloverxx-20251001_225806-2202079884.webp",
  "ellalouisegloverxx-20251002_171141-2202079885.webp",
  "ellalouisegloverxx-20251003_221916-3738548506.webp",
  "ellalouisegloverxx-20251005_002655-1716078697.webp",
  "ellalouisegloverxx-20251005_002655-2086857971.webp",
  "ellalouisegloverxx-20251008_000357-2887923048.webp",
  "ellalouisegloverxx-20251010_021246-413051917.webp",
  "ellalouisegloverxx-20251010_021246-413051917_upscayl_4x_high-fidelity-4x_resized.webp",
  "ellalouisegloverxx-20251018_200950-401014320.webp",
  "ellalouisegloverxx-20251022_201850-4225473584.webp",
  "ellalouisegloverxx-20251022_201850-4225473585.webp",
  "ellalouisegloverxx-20251022_201850-4225473586.webp",
  "ellalouisegloverxx-20251026_225926-3432392312.webp",
  "ellalouisegloverxx-20251029_233800-2668753921.webp",
  "ellalouisegloverxx-20251030_203122-2357669299.webp",
  "ellalouisegloverxx-20251030_203122-3092947076.webp",
  "ellalouisegloverxx-20251121_180628-55933681.webp",
  "ellalouisegloverxx-20251121_180628-55933682.webp",
  "ellalouisegloverxx-20251126_191029-2128460171.webp",
  "ellalouisegloverxx-20251126_191029-2128460172.webp",
  "ellalouisegloverxx-20251126_191029-2128460173.webp",
  "ellalouisegloverxx-20251127_192739-4264141709.webp",
  "ellalouisegloverxx-20251128_170755-2202079912.webp",
  "ellalouisegloverxx-20251130_104715-413051918.webp",
  "ellalouisegloverxx-20251130_142724-2024561005.webp",
  "ellalouisegloverxx-20251130_142724-222023773.webp",
  "ellalouisegloverxx-20251130_142724-2400930869.webp",
  "kjslabel-20250926_202522-1089314548.webp",
  "kjslabel-20250926_202522-4143117129.webp",
];

// Shuffle images for random slideshow order
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
shuffle(images);

// Ensure a wrapper exists that lives behind the blur
let wrapper = document.getElementById("bg-wrapper");

if (!wrapper) {
  wrapper = document.createElement("div");
  wrapper.id = "bg-wrapper";
  document.body.prepend(wrapper);
}

wrapper.style.position = "fixed";
wrapper.style.top = "0";
wrapper.style.left = "0";
wrapper.style.width = "100%";
wrapper.style.height = "100%";
wrapper.style.zIndex = "-2";  // MUST stay behind blur layer
wrapper.style.overflow = "hidden";

// Create two cross-fade layers inside wrapper
const bg1 = document.createElement("div");
const bg2 = document.createElement("div");

[bg1, bg2].forEach((bg) => {
  bg.style.position = "absolute";
  bg.style.top = "0";
  bg.style.left = "0";
  bg.style.width = "100%";
  bg.style.height = "100%";
  bg.style.backgroundSize = "cover";
  bg.style.backgroundPosition = "center";
  bg.style.backgroundAttachment = "fixed";
  bg.style.transition = "opacity 2s ease-in-out";
  bg.style.zIndex = "-2";
  bg.style.opacity = "0";
});

wrapper.appendChild(bg1);
wrapper.appendChild(bg2);

// Slideshow logic
let index = 0;
let showingFirst = true;

function setBackground() {
  const imagePath = `images/${images[index]}`;

  if (showingFirst) {
    bg2.style.backgroundImage = `url('${imagePath}')`;
    bg2.style.opacity = "1";
    bg1.style.opacity = "0";
  } else {
    bg1.style.backgroundImage = `url('${imagePath}')`;
    bg1.style.opacity = "1";
    bg2.style.opacity = "0";
  }

  showingFirst = !showingFirst;
  index = (index + 1) % images.length;
}

// Start slideshow
setBackground();
setInterval(setBackground, 10000);
