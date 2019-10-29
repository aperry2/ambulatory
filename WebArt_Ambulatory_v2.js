/*

 to-do:  add cursor
 add text tooltips
 add sound
 
 */

var wiping = false;
var exploring = false;
var goLeft = false;

var tab = [];
var words = [];
var symbols = [];
var planets = [];

var frame;

var tracker = 0;

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
}

function setup() {

  noStroke();
  createCanvas(512, 512);
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

  symbols[0] = "apparatus\nof creation";
  symbols[1] = "apparatus\nof time";
  symbols[2] = "apparatus\nof combination";
  symbols[3] = "apparatus\nof communication";
  symbols[4] = "apparatus\nof information";
  symbols[5] = "apparatus\nof observation";
  symbols[6] = "apparatus\nof organized space";
  symbols[7] = "apparatus\nof contemplation";
  symbols[8] = "apparatus\nof supplication";
  symbols[9] = "apparatus\nof segregation";
  symbols[10] = "apparatus\nof hubris";
  symbols[11] = "apparatus\nof non-being";

  planets[0] = "mars\nruler of aries";
  planets[1] = "venus\nruler of taurus";
  planets[2] = "mercury\nruler of gemini";
  planets[3] = "the moon\nruler of cancer";
  planets[4] = "the sun\nruler of leo";
  planets[5] = "mercury\nruler of virgo";
  planets[6] = "venus\nruler of libra";
  planets[7] = "mars\nruler of scorpio";
  planets[8] = "jupiter\nruler of sagittarius";
  planets[9] = "saturn\nruler of capricorn";
  planets[10] = "saturn\nruler of aquarius";
  planets[11] = "jupiter\nruler of pisces";


  textFont(font);
  textSize(14);
  textAlign(CENTER);
}

function draw() {
  console.log("tracker in draw: " + tracker);
  if (tracker % 2 === 1) {
    // odd clicks - fade between
    wipeTab();
  } else if (tracker % 2 === 0) {
    hasWiped = false;
    drawTab(int(tracker / 2));
    console.log("tab: " + tracker / 2);
  } else {
    console.log("yo");
  }
  image(frame, 0, 0, 512, 512);
  console.log("x,y: " + mouseX + "," + mouseY);
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
  console.log("wipe: " + wipe);
  fill(255, wipe);
  rect(0, 0, 512, 512);
  console.log("wipeStep:" + wipeStep);
  console.log("hasWiped: " + hasWiped);
  console.log("wiping: " + wiping);
}

function displayText(i) {
  textSize(14);

  fill(0, fade);
  text(words[i], (width / 2) - 1, (height / 2 + height / 4) + 4);

  fill(255, fade);
  text(words[i], width / 2, (height / 2 + height / 4) + 5);
  if (fade > 255) {
  } else {
    fade += 2;
  }

  textSize(10);
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
}

function mousePressed() {
  fade = 0;
  prevTracker = tracker;
  if (!wiping || !exploring) {
    if (mouseX < width / 2) {
      tracker--;
      goLeft = true;
    } else {
      tracker++;
      goLeft = false;
    }
    console.log("current tracker: " + tracker);
  }
  if (tracker > 23) {
    tracker = 0;
  }
  if (tracker < 0) {
    tracker = 23;
  }
}
