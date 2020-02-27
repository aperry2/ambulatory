var wiping = false;
var goLeft = false;
var debug = false;

let song;

var tab = [];
var words = [];
var symbols = [];
var planets = [];

var frame;

var tracker;

var font;

var fade = 0;

var wipe = 1;
var wipeStep = 1;
var hasWiped = false;
var prevTracker = 0;

function preload() {
  font = loadFont('assets/1996.otf');

  //for (let i = 0; i < 12; i++) {
  //  let num = i + 1;
  //  tab[i] = loadImage('assets/tab' + num + '.png');
  //}
  soundFormats('mp3', 'ogg');

  song = loadSound('assets/gameOver.ogg');
}

function setup() {
  var canvas = createCanvas(512, 512);
  canvas.parent('sketch-holder');
  tracker =  int(random(23)/2);
  song.play();
  song.loop();
  noStroke();
  // createCanvas(512, 512);
  wipeColor = color(255);

  for (let i = 0; i < 12; i++) {
    let num = i + 1;
    tab[i] = loadImage('assets/tab' + num + '.png');
  }

  frame = loadImage('assets/frame.png');

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

  symbols[0] = "Apparatus\nof Creation";
  symbols[1] = "Apparatus\nof Time";
  symbols[2] = "Apparatus\nof Combination";
  symbols[3] = "Apparatus\nof Communication";
  symbols[4] = "Apparatus\nof Information";
  symbols[5] = "Apparatus\nof Observation";
  symbols[6] = "Apparatus\nof Organized Space";
  symbols[7] = "Apparatus\nof Contemplation";
  symbols[8] = "Apparatus\nof Supplication";
  symbols[9] = "Apparatus\nof Segregation";
  symbols[10] = "Apparatus\nof Hubris";
  symbols[11] = "Apparatus\nof Non-Being";

  planets[0] = "Mars\nRuler of Aries";
  planets[1] = "Venus\nRuler of Taurus";
  planets[2] = "Mercury\nRuler of Gemini";
  planets[3] = "the Moon\nRuler of Cancer";
  planets[4] = "the Sun\nRuler of Leo";
  planets[5] = "Mercury\nRuler of Virgo";
  planets[6] = "Venus\nRuler of Libra";
  planets[7] = "Mars\nRuler of Scorpio";
  planets[8] = "Jupiter\nRuler of Sagittarius";
  planets[9] = "Saturn\nRuler of Capricorn";
  planets[10] = "Saturn\nRuler of Aquarius";
  planets[11] = "Jupiter\nRuler of Pisces";


  textFont(font);
  textSize(14);
}

function draw() {
  if (debug) {
    console.log("tracker in draw: " + tracker);
    console.log("x,y: " + mouseX + "," + mouseY);
    console.log("tab: " + tracker / 2);
  }
  if (tracker % 2 === 1) {
    // odd clicks - fade between
    wipeTab();
  } else if (tracker % 2 === 0) {
    hasWiped = false;
    drawTab(int(tracker / 2));
  } else {
    console.log("yo");
  }
  image(frame, 0, 0, 512, 512);
}

function drawTab(i) {
  wiping = false;
  image(tab[i], 0, 0, 512, 512);
  displayText(i);
}

function wipeTab() {
  wiping = true;
  if (wipe <= 1 && hasWiped == false) {
    wipeStep = 2;
  } else if (wipe >= 100) {
    wipeStep = -2;
    hasWiped = true;
    if (goLeft) {
      tracker--;
    } else {
      tracker++;
    }
    if (tracker > 23) {
      tracker = 0;
    }
    if (tracker < 0) {
      tracker = 23;
    }
  } else if (hasWiped == true && wipe < 0) {
    wipeStep = 0;
    console.log("eek");
  }
  image(tab[int(prevTracker / 2)], 0, 0, 512, 512);

  wipe = wipe + wipeStep;

  fill(255, wipe);
  rect(0, 0, 512, 512);
  if (debug) {
    console.log("wipe: " + wipe);
    console.log("wipeStep:" + wipeStep);
    console.log("hasWiped: " + hasWiped);
    console.log("wiping: " + wiping);
  }
}

function displayText(i) {
  textSize(14);
  textAlign(CENTER);

  fill(0, fade);
  text(words[i], (width / 2) - 1, (height / 2 + height / 4) + 4);

  fill(255, fade);
  text(words[i], width / 2, (height / 2 + height / 4) + 5);
  if (fade > 255) {
  } else {
    fade += 2;
  }

  textSize(12);
  if ((mouseX > 220 && mouseX < 290) && (mouseY > 120 && mouseY < 190)) { // planet
    fill(0);
    text(planets[i], mouseX - 1, mouseY + 21);
    fill(255);
    text(planets[i], mouseX, mouseY + 20);
  } else if ((mouseX > 130 && mouseX < 370) && (mouseY > 220 && mouseY < 370)) { // symbol
    fill(0);
    text(symbols[i], mouseX - 1, mouseY - 19);
    fill(255);
    text(symbols[i], mouseX, mouseY - 20);
  } else {
    // draw no text
  }

  if ((mouseX < 30 && mouseX > 0) && (mouseY < 30 && mouseY > 0)) {
    textSize(10);
    textAlign(LEFT);
    let credits = "The Interactive Ambulatory, 2019\nby Alan Perry\nPart of an ongoing exploration of neofeudalism and neomedieval dreams.\nSound by Avgvst, CC-BY\nOrnamentation from the Black Hours and other medieval Books of Hours";
    fill(0);
    text(credits, 34, 42);
    fill(255);
    text(credits, 33, 41);
  }
}

function mousePressed() {
  if (debug) {
    console.log("current tracker: " + tracker);
  }
  fade = 0;
  prevTracker = tracker;
  if (!wiping) {
    if (mouseX < width / 2) {
      tracker++;
      goLeft = false;
    } else {
      tracker--;
      goLeft = true;
    }
  }
  if (tracker > 23) {
    tracker = 0;
  }
  if (tracker < 0) {
    tracker = 23;
  }
}
