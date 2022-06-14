const d1_1 = document.getElementById("11");
const d1_2 = document.getElementById("12");
const d1_3 = document.getElementById("13");
const d1_4 = document.getElementById("14");
const d1_5 = document.getElementById("15");
const d1_6 = document.getElementById("16");
const d2_1 = document.getElementById("21");
const d2_2 = document.getElementById("22");
const d2_3 = document.getElementById("23");
const d2_4 = document.getElementById("24");
const d2_5 = document.getElementById("25");
const d2_6 = document.getElementById("26");
const pp = document.getElementById("pp");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p = document.getElementById("p");
const great = document.getElementById("great");
const small = document.getElementById("small");
const equal = document.getElementById("equal");
const s1 = document.getElementById("s1");
const s2 = document.getElementById("s2");

let c1 = 0,
  c2 = 0;
let play = document.getElementById("play");
play.addEventListener("click", game);

function game() {
  function rndm1(rangeStart, rangeEnd) {
    return Math.floor(Math.random() * (rangeStart - rangeEnd + 1) + rangeEnd);
  }
  function rndm2(rangeStart, rangeEnd) {
    return Math.floor(Math.random() * (rangeStart - rangeEnd + 1) + rangeEnd);
  }
  pp.classList.add("hidden");

  var d1 = rndm1(0, 7);
  var d2 = rndm2(0, 7);

  //Heading Logic
  if (d1 > d2) {
    p1.classList.remove("hidden");
    p1.classList.add("visible");
    if (p2.classList.contains("visible")) {
      p2.classList.add("hidden");
      p2.classList.remove("visible");
    }
    if (p.classList.contains("visible")) {
      p.classList.add("hidden");
      p.classList.remove("visible");
    }
  } else if (d2 > d1) {
    p2.classList.remove("hidden");
    p2.classList.add("visible");
    if (p1.classList.contains("visible")) {
      p1.classList.add("hidden");
      p1.classList.remove("visible");
    }
    if (p.classList.contains("visible")) {
      p.classList.add("hidden");
      p.classList.remove("visible");
    }
  } else if (d1 == d2) {
    p.classList.remove("hidden");
    p.classList.add("visible");
    if (p2.classList.contains("visible")) {
      p2.classList.add("hidden");
      p2.classList.remove("visible");
    }
    if (p1.classList.contains("visible")) {
      p1.classList.add("hidden");
      p1.classList.remove("visible");
    }
  }

  //Sign Logic
  if (d1 > d2) {
    great.classList.remove("hidden");
    great.classList.add("visible");
    if (small.classList.contains("visible")) {
      small.classList.add("hidden");
      small.classList.remove("visible");
    }
    if (equal.classList.contains("visible")) {
      equal.classList.add("hidden");
      equal.classList.remove("visible");
    }
  } else if (d2 > d1) {
    small.classList.remove("hidden");
    small.classList.add("visible");
    if (great.classList.contains("visible")) {
      great.classList.add("hidden");
      great.classList.remove("visible");
    }
    if (equal.classList.contains("visible")) {
      equal.classList.add("hidden");
      equal.classList.remove("visible");
    }
  } else if (d1 == d2) {
    equal.classList.remove("hidden");
    equal.classList.add("visible");
    if (small.classList.contains("visible")) {
      small.classList.add("hidden");
      small.classList.remove("visible");
    }
    if (great.classList.contains("visible")) {
      great.classList.add("hidden");
      great.classList.remove("visible");
    }
  }

  //Score Logic

  if (d1 > d2) {
    c1++;
    console.log(c1);
    s1.textContent = "Player 1 Score : " + c1;
  } else if (d2 > d1) {
    c2++;
    s2.textContent = "Player 2 Score : " + c2;
  }

  //Dice Logic

  //D1
  if (d1 == 1) {
    d1_1.classList.remove("hidden");
    d1_1.classList.add("visible");
    if (d1_2.classList.contains("visible")) {
      d1_2.classList.add("hidden");
      d1_2.classList.remove("visible");
    }
    if (d1_3.classList.contains("visible")) {
      d1_3.classList.add("hidden");
      d1_3.classList.remove("visible");
    }
    if (d1_4.classList.contains("visible")) {
      d1_4.classList.add("hidden");
      d1_4.classList.remove("visible");
    }
    if (d1_5.classList.contains("visible")) {
      d1_5.classList.add("hidden");
      d1_5.classList.remove("visible");
    }
    if (d1_6.classList.contains("visible")) {
      d1_6.classList.add("hidden");
      d1_6.classList.remove("visible");
    }
  } else if (d1 == 2) {
    d1_2.classList.remove("hidden");
    d1_2.classList.add("visible");
    if (d1_1.classList.contains("visible")) {
      d1_1.classList.add("hidden");
      d1_1.classList.remove("visible");
    }
    if (d1_3.classList.contains("visible")) {
      d1_3.classList.add("hidden");
      d1_3.classList.remove("visible");
    }
    if (d1_4.classList.contains("visible")) {
      d1_4.classList.add("hidden");
      d1_4.classList.remove("visible");
    }
    if (d1_5.classList.contains("visible")) {
      d1_5.classList.add("hidden");
      d1_5.classList.remove("visible");
    }
    if (d1_6.classList.contains("visible")) {
      d1_6.classList.add("hidden");
      d1_6.classList.remove("visible");
    }
  } else if (d1 == 3) {
    d1_3.classList.remove("hidden");
    d1_3.classList.add("visible");
    if (d1_1.classList.contains("visible")) {
      d1_1.classList.add("hidden");
      d1_1.classList.remove("visible");
    }
    if (d1_2.classList.contains("visible")) {
      d1_2.classList.add("hidden");
      d1_2.classList.remove("visible");
    }
    if (d1_4.classList.contains("visible")) {
      d1_4.classList.add("hidden");
      d1_4.classList.remove("visible");
    }
    if (d1_5.classList.contains("visible")) {
      d1_5.classList.add("hidden");
      d1_5.classList.remove("visible");
    }
    if (d1_6.classList.contains("visible")) {
      d1_6.classList.add("hidden");
      d1_6.classList.remove("visible");
    }
  } else if (d1 == 4) {
    d1_4.classList.remove("hidden");
    d1_4.classList.add("visible");
    if (d1_1.classList.contains("visible")) {
      d1_1.classList.add("hidden");
      d1_1.classList.remove("visible");
    }
    if (d1_3.classList.contains("visible")) {
      d1_3.classList.add("hidden");
      d1_3.classList.remove("visible");
    }
    if (d1_2.classList.contains("visible")) {
      d1_2.classList.add("hidden");
      d1_2.classList.remove("visible");
    }
    if (d1_5.classList.contains("visible")) {
      d1_5.classList.add("hidden");
      d1_5.classList.remove("visible");
    }
    if (d1_6.classList.contains("visible")) {
      d1_6.classList.add("hidden");
      d1_6.classList.remove("visible");
    }
  } else if (d1 == 5) {
    d1_5.classList.remove("hidden");
    d1_5.classList.add("visible");
    if (d1_1.classList.contains("visible")) {
      d1_1.classList.add("hidden");
      d1_1.classList.remove("visible");
    }
    if (d1_3.classList.contains("visible")) {
      d1_3.classList.add("hidden");
      d1_3.classList.remove("visible");
    }
    if (d1_4.classList.contains("visible")) {
      d1_4.classList.add("hidden");
      d1_4.classList.remove("visible");
    }
    if (d1_2.classList.contains("visible")) {
      d1_2.classList.add("hidden");
      d1_2.classList.remove("visible");
    }
    if (d1_6.classList.contains("visible")) {
      d1_6.classList.add("hidden");
      d1_6.classList.remove("visible");
    }
  } else if (d1 == 6) {
    d1_6.classList.remove("hidden");
    d1_6.classList.add("visible");
    if (d1_1.classList.contains("visible")) {
      d1_1.classList.add("hidden");
      d1_1.classList.remove("visible");
    }
    if (d1_3.classList.contains("visible")) {
      d1_3.classList.add("hidden");
      d1_3.classList.remove("visible");
    }
    if (d1_4.classList.contains("visible")) {
      d1_4.classList.add("hidden");
      d1_4.classList.remove("visible");
    }
    if (d1_5.classList.contains("visible")) {
      d1_5.classList.add("hidden");
      d1_5.classList.remove("visible");
    }
    if (d1_2.classList.contains("visible")) {
      d1_2.classList.add("hidden");
      d1_2.classList.remove("visible");
    }
  }

  //D2
  if (d2 == 1) {
    d2_1.classList.remove("hidden");
    d2_1.classList.add("visible");
    if (d2_2.classList.contains("visible")) {
      d2_2.classList.add("hidden");
      d2_2.classList.remove("visible");
    }
    if (d2_3.classList.contains("visible")) {
      d2_3.classList.add("hidden");
      d2_3.classList.remove("visible");
    }
    if (d2_4.classList.contains("visible")) {
      d2_4.classList.add("hidden");
      d2_4.classList.remove("visible");
    }
    if (d2_5.classList.contains("visible")) {
      d2_5.classList.add("hidden");
      d2_5.classList.remove("visible");
    }
    if (d2_6.classList.contains("visible")) {
      d2_6.classList.add("hidden");
      d2_6.classList.remove("visible");
    }
  } else if (d2 == 2) {
    d2_2.classList.remove("hidden");
    d2_2.classList.add("visible");
    if (d2_1.classList.contains("visible")) {
      d2_1.classList.add("hidden");
      d2_1.classList.remove("visible");
    }
    if (d2_3.classList.contains("visible")) {
      d2_3.classList.add("hidden");
      d2_3.classList.remove("visible");
    }
    if (d2_4.classList.contains("visible")) {
      d2_4.classList.add("hidden");
      d2_4.classList.remove("visible");
    }
    if (d2_5.classList.contains("visible")) {
      d2_5.classList.add("hidden");
      d2_5.classList.remove("visible");
    }
    if (d2_6.classList.contains("visible")) {
      d2_6.classList.add("hidden");
      d2_6.classList.remove("visible");
    }
  } else if (d2 == 3) {
    d2_3.classList.remove("hidden");
    d2_3.classList.add("visible");
    if (d2_1.classList.contains("visible")) {
      d2_1.classList.add("hidden");
      d2_1.classList.remove("visible");
    }
    if (d2_2.classList.contains("visible")) {
      d2_2.classList.add("hidden");
      d2_2.classList.remove("visible");
    }
    if (d2_4.classList.contains("visible")) {
      d2_4.classList.add("hidden");
      d2_4.classList.remove("visible");
    }
    if (d2_5.classList.contains("visible")) {
      d2_5.classList.add("hidden");
      d2_5.classList.remove("visible");
    }
    if (d2_6.classList.contains("visible")) {
      d2_6.classList.add("hidden");
      d2_6.classList.remove("visible");
    }
  } else if (d2 == 4) {
    d2_4.classList.remove("hidden");
    d2_4.classList.add("visible");
    if (d2_1.classList.contains("visible")) {
      d2_1.classList.add("hidden");
      d2_1.classList.remove("visible");
    }
    if (d2_3.classList.contains("visible")) {
      d2_3.classList.add("hidden");
      d2_3.classList.remove("visible");
    }
    if (d2_2.classList.contains("visible")) {
      d2_2.classList.add("hidden");
      d2_2.classList.remove("visible");
    }
    if (d2_5.classList.contains("visible")) {
      d2_5.classList.add("hidden");
      d2_5.classList.remove("visible");
    }
    if (d2_6.classList.contains("visible")) {
      d2_6.classList.add("hidden");
      d2_6.classList.remove("visible");
    }
  } else if (d2 == 5) {
    d2_5.classList.remove("hidden");
    d2_5.classList.add("visible");
    if (d2_1.classList.contains("visible")) {
      d2_1.classList.add("hidden");
      d2_1.classList.remove("visible");
    }
    if (d2_3.classList.contains("visible")) {
      d2_3.classList.add("hidden");
      d2_3.classList.remove("visible");
    }
    if (d2_4.classList.contains("visible")) {
      d2_4.classList.add("hidden");
      d2_4.classList.remove("visible");
    }
    if (d2_2.classList.contains("visible")) {
      d2_2.classList.add("hidden");
      d2_2.classList.remove("visible");
    }
    if (d2_6.classList.contains("visible")) {
      d2_6.classList.add("hidden");
      d2_6.classList.remove("visible");
    }
  } else if (d2 == 6) {
    d2_6.classList.remove("hidden");
    d2_6.classList.add("visible");
    if (d2_1.classList.contains("visible")) {
      d2_1.classList.add("hidden");
      d2_1.classList.remove("visible");
    }
    if (d2_3.classList.contains("visible")) {
      d2_3.classList.add("hidden");
      d2_3.classList.remove("visible");
    }
    if (d2_4.classList.contains("visible")) {
      d2_4.classList.add("hidden");
      d2_4.classList.remove("visible");
    }
    if (d2_5.classList.contains("visible")) {
      d2_5.classList.add("hidden");
      d2_5.classList.remove("visible");
    }
    if (d2_2.classList.contains("visible")) {
      d2_2.classList.add("hidden");
      d2_2.classList.remove("visible");
    }
  }
}
