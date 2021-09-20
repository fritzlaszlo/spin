// INIT
let opts = {
 lines: 13, //ANIMATE
 length: 40, //ANIMATE
 width: 20, //ANIMATE
 radius: 80, //ANIMATE
 corners: 1 //ANIMATE
},
 target = document.getElementById('spinner'),
 spinner = new Spinner(opts).spin(target),
 lastoptnr = 0;
console.log('First spinner initiated');

// zeitmultiplikator abfragen
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
        }
    return urlparameter;
}
var timemultiplicator = getUrlParam('multi','1');
animationIntervalmin = (60000 * timemultiplicator), // 1 Minute = 60000 , 2 min = 120000, 5min = 30000
IdleIntervalmin = (30000 * timemultiplicator);

// Updates spin on every iteration, animations do not need to call update

function update() {
    const animated = document.querySelector('.spinner > div');
    animated.onanimationiteration = () => { 
     spinner.stop();
     spinner = new Spinner(opts).spin(target);
     update();
    };
};
update();

// does single value animation, 5 times because too lazy to multi thread 
function singleValueAnimation(optvalue, valcurrent, valtarget, animationtime, callback) {
  // Animation berechnen
  let id = null;
  let changevalue = valcurrent;
  let diff = 0;
  if (changevalue < valtarget) {diff = valtarget - changevalue;}
  else {diff = changevalue - valtarget;};
  let animationsteps = animationtime / diff;
  // Animation Starten
  clearInterval(id);
  id = setInterval(frame, animationsteps);
  // Animation Loop till target readhed
  function frame() {
    if (changevalue == valtarget) {
      clearInterval(id);
      callback();
    } 
    else {
      // count down oder up
      if (changevalue < valtarget) {changevalue++; console.log('step ' + optvalue + ' ++');}
      else {changevalue--; console.log('step ' + optvalue + ' --');};
      // value change
      opts[optvalue] = changevalue;
    }
  }
}

function singleValueAnimation2(optvalue, valcurrent, valtarget, animationtime, callback) {
  // Animation berechnen
  let id = null;
  let changevalue = valcurrent;
  let diff = 0;
  if (changevalue < valtarget) {diff = valtarget - changevalue;}
  else {diff = changevalue - valtarget;};
  let animationsteps = animationtime / diff;
  // Animation Starten
  clearInterval(id);
  id = setInterval(frame, animationsteps);
  // Animation Loop till target readhed
  function frame() {
    if (changevalue == valtarget) {
      clearInterval(id);
      callback();
    } 
    else {
      // count down oder up
      if (changevalue < valtarget) {changevalue++; console.log('step ' + optvalue + ' ++');}
      else {changevalue--; console.log('step ' + optvalue + ' --');};
      // value change
      opts[optvalue] = changevalue;
    }
  }
}

function singleValueAnimation3(optvalue, valcurrent, valtarget, animationtime, callback) {
  // Animation berechnen
  let id = null;
  let changevalue = valcurrent;
  let diff = 0;
  if (changevalue < valtarget) {diff = valtarget - changevalue;}
  else {diff = changevalue - valtarget;};
  let animationsteps = animationtime / diff;
  // Animation Starten
  clearInterval(id);
  id = setInterval(frame, animationsteps);
  // Animation Loop till target readhed
  function frame() {
    if (changevalue == valtarget) {
      clearInterval(id);
      callback();
    } 
    else {
      // count down oder up
      if (changevalue < valtarget) {changevalue++; console.log('step ' + optvalue + ' ++');}
      else {changevalue--; console.log('step ' + optvalue + ' --');};
      // value change
      opts[optvalue] = changevalue;
    }
  }
}

function singleValueAnimation4(optvalue, valcurrent, valtarget, animationtime, callback) {
  // Animation berechnen
  let id = null;
  let changevalue = valcurrent;
  let diff = 0;
  if (changevalue < valtarget) {diff = valtarget - changevalue;}
  else {diff = changevalue - valtarget;};
  let animationsteps = animationtime / diff;
  // Animation Starten
  clearInterval(id);
  id = setInterval(frame, animationsteps);
  // Animation Loop till target readhed
  function frame() {
    if (changevalue == valtarget) {
      clearInterval(id);
      callback();
    } 
    else {
      // count down oder up
      if (changevalue < valtarget) {changevalue++; console.log('step ' + optvalue + ' ++');}
      else {changevalue--; console.log('step ' + optvalue + ' --');};
      // value change
      opts[optvalue] = changevalue;
    }
  }
}
/*
Corners von 0 auf 100 animieren !!!!!!

*/

function singleValueAnimation5(optvalue, valcurrent, valtarget, animationtime, callback) {
  // Animation berechnen
  let id = null;
  let changevalue = valcurrent;
  let diff = 0;
  if (changevalue < valtarget) {diff = valtarget - changevalue;}
  else {diff = changevalue - valtarget;};
  let animationsteps = animationtime / diff;
  // Animation Starten
  clearInterval(id);
  id = setInterval(frame, animationsteps);
  // Animation Loop till target reached
  function frame() {
    if (changevalue == valtarget) {
      clearInterval(id);
      callback();
    } 
    else {
      // count down oder up
      if (changevalue < valtarget) {changevalue++; console.log('step ' + optvalue + ' ++');}
      else {changevalue--; console.log('step ' + optvalue + ' --');};
      // value change
      opts[optvalue] = changevalue;
    }
  }
}


// different spinner models
let opts0 = {
 lines: 13, //ANIMATE
 length: 40, //ANIMATE
 width: 20, //ANIMATE
 radius: 80, //ANIMATE
 corners: 1 //ANIMATE
};

let opts1 = {
 lines: 20, //ANIMATE
 length: 0, //ANIMATE
 width: 52, //ANIMATE
 radius: 74, //ANIMATE
 corners: 1 //ANIMATE
};


var opts2 = {
 lines: 17, //ANIMATE
 length: 80, //ANIMATE
 width: 2, //ANIMATE
 radius: 42, //ANIMATE
 corners: 0 //ANIMATE
}


let opts3 = {
 lines: 18, //ANIMATE
 length: 0, //ANIMATE
 width: 22, //ANIMATE
 radius: 84, //ANIMATE
 corners: 0 //ANIMATE
}

let opts4 = {
  lines: 8,
  length: 0,
  width: 22,
  radius: 27,
  corners: 1
}

let opts5 = {
  lines: 9,
  length: 0,
  width: 52,
  radius: 0,
  corners: 1
}

// multiple value animation
function morph(optsnew, animationtime, callback2) {
      let waitnum = 0;
      console.log('Morpn initiated ' + (animationtime/1000) + 's');
      singleValueAnimation('lines', opts.lines, optsnew.lines, animationtime, function() {
        console.log('ready lines'); waitnum++; 
      });
      singleValueAnimation2('length', opts.length, optsnew.length, animationtime, function() {
        console.log('ready length'); waitnum++;
      });
      singleValueAnimation3('width', opts.width, optsnew.width, animationtime, function() {
        console.log('ready width'); waitnum++;
      });
      singleValueAnimation4('radius', opts.radius, optsnew.radius, animationtime, function() {
        console.log('ready radius'); waitnum++;  
      });
      id = setInterval(checkwaitnum, 1000);
      function checkwaitnum() {
       if (waitnum == 4) {
          clearInterval(id);
          callback2();
        }
      }
};

// random selection process

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// random idle process


// nächstes form auswählen und morph anstoßen;
selectnewopt();
function selectnewopt() {
  // Keep Max here up do todate with amount of Spinners +1
  let newoptnr = getRandomInt(6);
  if (newoptnr == lastoptnr) {
    let newoptnr = getRandomInt(6);
  }
  let newoptname = 'opts' + newoptnr;
  console.log(newoptname);
  morph(eval(newoptname), animationIntervalmin, function() {
    console.log('Morph finished');
    console.log('Idling for ' + (IdleIntervalmin/1000) + 's');
    setTimeout(function(){ selectnewopt(); }, IdleIntervalmin);
  });
};