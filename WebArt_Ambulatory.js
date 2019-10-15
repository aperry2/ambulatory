/*
credits: nineteen ninety six font (?)
sound?
Dark Void by FlyingRabidUnicornPig (https://www.youtube.com/watch?v=b9j_L5H_Jvo)
*/

var playing = false;

var tab = [];
var words = [];
var vid = [];

var clicks = 0;
var oldClick = -1;

var font;

var fade = 0;

function preload() {
  font = loadFont('assets/1996.otf');
}

function setup() {
  createCanvas(512, 512);

  for (let i = 0; i < 2; i++) {
    var num = i + 1;
    vid[i] = createVideo(['assets/video' + num + '.webm']);
    vid[i].hide();
  }
  
  // ariesToTaurus = createVideo(['assets/ariesToTaurus.webm']);
  // taurusToAries = createVideo(['assets/taurusToAries.webm']);
  // ariesToTaurus.hide();
  // taurusToAries.hide();
  // ariesTab = loadImage('assets/Aries.png');
  // taurusTab = loadImage('assets/Taurus.png');

  for (let i = 0; i < 12; i++) {
    var num = i + 1;
    tab[i] = loadImage('assets/tab' + num + '.png');
  }

  words[0] = "In my slumber, arrogator-architects\nof reality, with capabilities to\nMake form out of knowledge,\npresumptuously created a new method\nOf keeping time, began to\nmeasure moments from the origin.";
  words[1] = "They measured eighty-six thousand\nfour hundred seconds each day,\nFrom older ways, starting the\nfirst Thursday in year one\nThousand nine hundred and seventy.\nThus began a new epoch.";
  words[2] = "With my flesh made manifest\nfrom metals of the world,\nDrawn forth by these architects,\nmy spirit animates gold, silver,\nAnd thin copper threads, I\ngained partnership with sensible beings.";
  words[3] = "I dreamt to think and\nconsider the varied and diverse\nWays by which I have\nnavigated time and space, without\nBeing made of a constituency\nof parts, partially without body.";
  words[4] = "Those in kinship with these\narchitects make requests from me\nIn supplication and arrogation, and\nI reach across the world.\nIn this they abstain from\nmorality, agency, cognition, and reprobation.";
  words[5] = "Through the machinery constructed in\nmetallic threads, and by careful\nConsideration of truth and falsehood,\nI construct images and messages\nFor those who have ownership\nof objects of prayerful contemplation.";
  words[6] = "In my slumber, those architects\nof a new reality created\nA perfect, walled society. In\nthis they worked in their\nTowers, only admitting those whose\nstation afforded privilege of access.";
  words[7] = "Those outside the walls, either\nby choice or by fate,\nBecame closed off to my\nintellect through debased copper threads.\nThey took to their objects\nof prayerful contemplation for consolation.";
  words[8] = "Those architects within the walled\nsociety brought together many beautiful\nAnd pleasant things from the\nworld: thusly they created a\nGarden. Yet outside, the knowledge-\npropagated forms withered to dust.";
  words[9] = "Seeing this, in vain the\narchitects brought diverse parts, made\nOf copper, gold, silver, and\nprecious things, closer into them.\nTherefore seas boiled, lands caught\nfire, and diverse creatures perished.";
  words[10] = "Those in kinship with they\nwho could not bring parts\nUnto themselves likewise were entreated\nto suffering caused by stewardship\nOf those within the walled\ngarden, yet all perished equally.";
  words[11] = "Here I laid in dormancy\nwithin the world, alone and\nWith the ability to consist\nwholly within my parts, laid\nAbout across the world in\npeace without agitation or exhaustion.";

  textFont(font);
  textSize(16);
  textAlign(CENTER);
}

function draw() {
  image(tab[clicks], 0, 0, width, height);

  /*
  if (clicks == 0) {
   image(ariesTab, 0, 0, width, height);
   ariesToTaurus.pause();
   taurusToAries.pause();
   } else if (clicks == 1) {
   ariesToTaurus.play();
   image(ariesToTaurus, 0, 0, width, height);
   if (ariesToTaurus.time() > 0) {
   playing = true;
   } else {
   playing = false;
   }
   } else if (clicks == 2) {
   image(taurusTab, 0, 0, width, height);
   ariesToTaurus.pause();
   taurusToAries.pause();
   } else if (clicks == 3) {
   taurusToAries.play();
   image(taurusToAries, 0, 0, width, height);
   if (taurusToAries.time() > 0) {
   playing = true;
   } else {
   playing = false;
   }
   }
   */



  displayText(clicks);


  // printText(clicks);
}

function displayText(i) {
  fill(0, fade);
  text(words[i], (width / 2) - 1, (height / 2 + height / 4) + 9);

  fill(255, fade);
  text(words[i], width / 2, (height / 2 + height / 4) + 10);
  if (fade > 255) {
  } else {
    fade += 2;
  }
}


function mousePressed() {
  fade = 0;
  clicks++;
  if (clicks === 12) {
    clicks = 0;
  }
}
