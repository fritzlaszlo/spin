// INIT
let opts = {
 lines: 13, //ANIMATE
 length: 28, //ANIMATE
 width: 4, //ANIMATE
 radius: 2, //ANIMATE
 corners: 1 //ANIMATE
},
 target = document.getElementById('spinner'),
 spinner = new Spinner(opts).spin(target),
 animationIntervalmin = 150;


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
  let id = null;
  let changevalue = valcurrent;
  let diff = 0
  if (changevalue < valtarget) {diff = valtarget - changevalue;}
  else {diff = changevalue - valtarget;};
  let animationsteps = animationtime / diff;
  clearInterval(id);
  id = setInterval(frame, animationsteps);
  function frame() {
    if (changevalue == valtarget) {
      clearInterval(id);
      callback();
    } else {
      if (changevalue < valtarget) {changevalue++;}
      else {changevalue--;};
      opts[optvalue] = changevalue;
    }
  }
}

function singleValueAnimation2(optvalue, valcurrent, valtarget, animationtime, callback) {
  let id = null;
  let changevalue = valcurrent;
  let diff = 0
  if (changevalue < valtarget) {diff = valtarget - changevalue;}
  else {diff = changevalue - valtarget;};
  let animationsteps = animationtime / diff;
  clearInterval(id);
  id = setInterval(frame, animationsteps);
  function frame() {
    if (changevalue == valtarget) {
      clearInterval(id);
      callback();
    } else {
      if (changevalue < valtarget) {changevalue++;}
      else {changevalue--;};
      opts[optvalue] = changevalue;
    }
  }
}

function singleValueAnimation3(optvalue, valcurrent, valtarget, animationtime, callback) {
  let id = null;
  let changevalue = valcurrent;
  let diff = 0
  if (changevalue < valtarget) {diff = valtarget - changevalue;}
  else {diff = changevalue - valtarget;};
  let animationsteps = animationtime / diff;
  clearInterval(id);
  id = setInterval(frame, animationsteps);
  function frame() {
    if (changevalue == valtarget) {
      clearInterval(id);
      callback();
    } else {
      if (changevalue < valtarget) {changevalue++;}
      else {changevalue--;};
      opts[optvalue] = changevalue;
    }
  }
}

function singleValueAnimation4(optvalue, valcurrent, valtarget, animationtime, callback) {
  let id = null;
  let changevalue = valcurrent;
  let diff = 0
  if (changevalue < valtarget) {diff = valtarget - changevalue;}
  else {diff = changevalue - valtarget;};
  let animationsteps = animationtime / diff;
  clearInterval(id);
  id = setInterval(frame, animationsteps);
  function frame() {
    if (changevalue == valtarget) {
      clearInterval(id);
      callback();
    } else {
      if (changevalue < valtarget) {changevalue++;}
      else {changevalue--;};
      opts[optvalue] = changevalue;
    }
  }
}

function singleValueAnimation5(optvalue, valcurrent, valtarget, animationtime, callback) {
  let id = null;
  let changevalue = valcurrent;
  let diff = 0
  if (changevalue < valtarget) {diff = valtarget - changevalue;}
  else {diff = changevalue - valtarget;};
  let animationsteps = animationtime / diff;
  clearInterval(id);
  id = setInterval(frame, animationsteps);
  function frame() {
    if (changevalue == valtarget) {
      clearInterval(id);
      callback();
    } else {
      if (changevalue < valtarget) {changevalue++;}
      else {changevalue--;};
      opts[optvalue] = changevalue;
    }
  }
}


// different spinner values
let opts2 = {
 lines: 2, //ANIMATE
 length: 8, //ANIMATE
 width: 60, //ANIMATE
 radius: 10, //ANIMATE
 corners: 0 //ANIMATE
};

let opts1 = {
 lines: 13, //ANIMATE
 length: 28, //ANIMATE
 width: 4, //ANIMATE
 radius: 2, //ANIMATE
 corners: 1 //ANIMATE
};

let opts3 = {
 lines: 6, //ANIMATE
 length: 2, //ANIMATE
 width: 10, //ANIMATE
 radius: 30, //ANIMATE
 corners: 1 //ANIMATE
}

// multiple value animation
function morph(optsnew, animationtime, callback2) {
      let waitnum = 0;
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

// selection process

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//selectnewopt();

function selectnewopt() {
  let newoptnr = getRandomInt(1,2);
  let newoptname = 'opts' + newoptnr;
  console.log(newoptname);

  morph(newoptname, function() {
    console.log('alldone');
    selectnewopt();
  });
};