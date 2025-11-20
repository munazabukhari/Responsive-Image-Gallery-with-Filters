const filterBtns = document.querySelectorAll(".filters button");
const galleryItems = document.querySelectorAll(".gallery-item");
const lightBox = document.querySelector(".light-box");
const lightBoxImg = document.querySelector("#lightbox-img");
const closeBtn = document.querySelector(".close-btn");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

// lightBox open
galleryItems.forEach((img, index) => {
  img.addEventListener("click", () => {
    lightBox.style.display = "flex";
    lightBoxImg.src = img.src;
    currentIndex = index;
  });
});

// lightBox close
closeBtn.addEventListener("click", () => {
  lightBox.style.display = "none";
});

// prev button
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  lightBoxImg.src = galleryItems[currentIndex].src;
});

// next button
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % galleryItems.length;
  lightBoxImg.src = galleryItems[currentIndex].src;
});

// filters button
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let category = btn.getAttribute("data-filter");
    galleryItems.forEach((img) => {
      if (
        category === "all" ||
        img.getAttribute("data-category") === category
      ) {
        img.classList.remove("hide");
      } else {
        img.classList.add("hide");
      }
    });
  });
});
