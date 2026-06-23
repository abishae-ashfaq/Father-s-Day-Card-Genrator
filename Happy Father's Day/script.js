// --------------------
// SAMPLE DATABASE
// --------------------
const fathersData = [
  {
    name: "Ashfaq",
    image: "./Assets/ashfaq.jpeg",
    meaning: "Ashfaq carries calm strength, patience, and quiet love that makes everyone feel safe.",
    message: "Ashfaq, your steady presence and gentle heart turn ordinary days into something truly special."
  },
  {
    name: "Harryson",
    image: "./Assets/harryson.jpg",
    meaning: "Harryson brings joy, energy, and a warm smile that lights up every room.",
    message: "Harryson, your lively spirit and big heart always remind people to enjoy life with gratitude."
  },
  {
    name: "Aroon",
    image: "./Assets/aroon.jpg",
    meaning: "Aroon stands for kindness, patience, and the quiet strength to always do what is right.",
    message: "Aroon, your caring nature and thoughtful actions make people feel respected and loved."
  },
  {
    name: "Ashir",
    image: "./Assets/ashir.jpg",
    meaning: "Ashir represents courage, honesty, and the ability to inspire others with grace.",
    message: "Ashir, your confidence and kindness make you someone people naturally look up to."
  },
  {
    name: "Ejaz",
    image: "./Assets/ejaz.jpg",
    meaning: "Ejaz reflects warmth, wisdom, and a heart that always gives more than it takes.",
    message: "Ejaz, your thoughtful words and warm smile bring comfort to everyone around you."
  },
  {
    name: "Marqus",
    image: "./Assets/marqus.jpg",
    meaning: "Marqus symbolizes dedication, strength, and a strong sense of family values.",
    message: "Marqus, your commitment and love have a way of making home feel stronger every day."
  },
  {
    name: "Pervaiz",
    image: "./Assets/pervaiz.jpg",
    meaning: "Pervaiz carries wisdom, balance, and a steady heart that guides others with care.",
    message: "Pervaiz, your guidance and patience help people grow with confidence and hope."
  },
  {
    name: "Raza",
    image: "./Assets/raza.jpg",
    meaning: "Raza represents humor, warmth, and the kind of strength that keeps people smiling.",
    message: "Raza, your laughter and kindness make even the toughest days feel lighter."
  },
  {
    name: "Sami",
    image: "./Assets/sami.jpg",
    meaning: "Sami reflects generosity, compassion, and a heart that always chooses love.",
    message: "Sami, your caring nature and selfless love leave a beautiful mark on everyone you meet."
  },
  {
    name: "Sohail",
    image: "./Assets/sohail.jpg",
    meaning: "Sohail stands for determination, loyalty, and a quiet strength that never gives up.",
    message: "Sohail, your determination and kindness make you a true source of inspiration."
  },
  {
    name: "Stephen",
    image: "./Assets/stephen.jpg",
    meaning: "Stephen represents faith, patience, and a loving heart that keeps everyone grounded.",
    message: "Stephen, your love, wisdom, and steady support make life better for those around you."
  }
];

let capturedImage = null;

// --------------------
// CAMERA START
// --------------------
async function startCamera() {
  const video = document.getElementById("video");

  const stream = await navigator.mediaDevices.getUserMedia({
    video: true
  });

  video.srcObject = stream;
}

// --------------------
// CAPTURE PHOTO
// --------------------
function capturePhoto() {
  const video = document.getElementById("video");
  const canvas = document.getElementById("canvas");

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  const ctx = canvas.getContext("2d");
  ctx.drawImage(video, 0, 0);

  capturedImage = canvas.toDataURL("image/png");

  alert("Photo Captured ✔");
}

// --------------------
// NAME MATCH FUNCTION
// --------------------
function findByName(name) {
  return fathersData.find(
    user => user.name.toLowerCase() === name.toLowerCase()
  );
}

// --------------------
// NAME MEANING
// --------------------
function getNameMeaning(name, match) {
  if (match && match.meaning) {
    return match.meaning;
  }

  return `${name} carries strength, kindness, and love that inspire everyone around him.`;
}

// --------------------
// MESSAGE GENERATOR
// --------------------
function generateMessage(name, match) {
  if (match && match.message) {
    return match.message;
  }

  return `Dear ${name}, your love, patience, and support make every day brighter and more meaningful.`;
}

// --------------------
// MAIN FUNCTION
// --------------------
function generateResult() {
  const name = document.getElementById("nameInput").value.trim();
  const resultDiv = document.getElementById("result");

  if (!name) {
    alert("Please enter a name");
    return;
  }

  // STEP 1: NAME MATCH
  let match = findByName(name);

  let imageToShow = "";

  if (match) {
    imageToShow = match.image;
  } else if (capturedImage) {
    // STEP 2: fallback camera image
    imageToShow = capturedImage;
  } else {
    imageToShow = "https://via.placeholder.com/300x300.png?text=Father";
  }

  // OUTPUT
  resultDiv.innerHTML = `
    <h2>💙 Happy Father's Day, ${name}!</h2>
    <img src="${imageToShow}" />
    <h3>${name}</h3>
    <p>${getNameMeaning(name, match)}</p>
    <p>${generateMessage(name, match)}</p>
  `;
}