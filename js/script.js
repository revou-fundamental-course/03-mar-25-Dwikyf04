console.log("JavaScript is working!");

// function to validate the form
function validateForm() {
  const nameInput = document.getElementById("name-input");
  console.log(nameInput.value);

  // check if the name input is empty
  if (nameInput.value == "") {
    alert("Name must be filled out");
  } else {
  }
}

let bannerIndex = 0;
showBanner();

// function to change the next banner
function nextBanner() {
  bannerIndex += 1;
  showBanner();
}
// function to show the previous banner
function showBanner() {
  const banners = document.getElementsByClassName("banner-img");
  console.log(banners);
  if (bannerIndex >= banners.length) {
    bannerIndex = 0;
  }

  // loop through all the banners and hide them
  for (let i = 0; i < banners.length; i++) {
    banners[i].style.display = "none";
  }
  banners[0].style.display = "none";
  banners[1].style.display = "none";
  banners[2].style.display = "none";
  // show the next banner
  banners[bannerIndex].style.display = "block";
}

// setInterval to chage the banner every 3 seconds
setInterval(nextBanner, 3000);
// banner end
