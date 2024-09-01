// section_0_script.js

function initializeSection0() {
  const list_image_0 = [
    "./assets/img/header/list_image_0/image_1.png",
    "./assets/img/header/list_image_0/image_2.png",
    "./assets/img/header/list_image_0/image_3.png",
    "./assets/img/header/list_image_0/image_4.png",
  ];

  const list_image_1 = [
    "./assets/img/header/list_image_1/image_1.png",
    "./assets/img/header/list_image_1/image_2.png",
    "./assets/img/header/list_image_1/image_3.png",
    "./assets/img/header/list_image_1/image_4.png",
  ];

  const list_image_2 = [
    "./assets/img/header/list_image_2/image_1.png",
    "./assets/img/header/list_image_2/image_2.png",
    "./assets/img/header/list_image_2/image_3.png",
    "./assets/img/header/list_image_2/image_4.png",
  ];

  const imageLists = [list_image_0, list_image_1, list_image_2];

  const items = document.querySelectorAll(
    "#container_section_1 .select_addr .item"
  );

  const imageContainers = document.querySelectorAll(".image_container");
  let typeImage = 0;

  // Set initial state: Only the first icon should be visible
  items.forEach((item, index) => {
    const icon = item.querySelector(".icon");
    if (index === 0) {
      icon.style.opacity = "1";
    } else {
      icon.style.opacity = "0";
    }
  });

  items.forEach((item, index) => {
    item.addEventListener("mouseenter", () => {
      items.forEach((i) => (i.querySelector(".icon").style.opacity = "0"));
      item.querySelector(".icon").style.opacity = "1";
      typeImage = index;
      const selectedImages = imageLists[index];
      imageContainers.forEach((img, imgIndex) => {
        if (selectedImages[imgIndex]) {
          img.src = selectedImages[imgIndex];
        }
      });
      updateOverlay(0);
    });
  });

  const itemss = document.querySelectorAll(".image_item");

  // Function to update the overlay class
  function updateOverlay(indexToAdd) {
    itemss.forEach((item, index) => {
      const overlay = item.querySelector(".no_overlay");
      if (index === indexToAdd) {
        overlay.classList.add("overlay");
        overlay.style.background = `linear-gradient(180deg, rgba(64, 74, 160, 0.00) 0%, #0066B3 100%), url('./assets/img/header/list_image_${typeImage}/image_${
          index + 1
        }.png') lightgray 50% / cover no-repeat`;
      } else {
        overlay.classList.remove("overlay");
        overlay.style.background = ``;
      }
    });
  }

  // Set initial state: Apply 'overlay' class to the first .no_overlay by default
  updateOverlay(0);

  // Handle hover events
  itemss.forEach((item, index) => {
    item.addEventListener("mouseenter", () => {
      updateOverlay(index);
    });

    item.addEventListener("mouseleave", () => {
      updateOverlay(0); // Reapply 'overlay' class to the first item on mouse leave
    });
  });
}

export { initializeSection0 };
