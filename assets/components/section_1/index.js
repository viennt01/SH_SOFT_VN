function initializeSection1() {
  const item_left = [
    "/assets/img/section_1/list_imgae_0/image_0.png",
    "/assets/img/section_1/list_imgae_0/image_1.png",
    "/assets/img/section_1/list_imgae_0/image_2.png",
    "/assets/img/section_1/list_imgae_0/image_3.png",
  ];
  const item_right = [
    "/assets/img/section_1/list_imgae_1/image_0.png",
    "/assets/img/section_1/list_imgae_1/image_1.png",
    "/assets/img/section_1/list_imgae_1/image_2.png",
    "/assets/img/section_1/list_imgae_1/image_3.png",
  ];
  const images = document.querySelectorAll(".list_image .image");
  const iconActive = document.querySelectorAll(".list_image .icon_active");
  const desActive = document.querySelectorAll(".list_image .container_des");
  const imagesContainer = document.querySelectorAll(
    ".list_image .image_container"
  );

  let imageActive = 0;
  let listImage = item_left;

  images.forEach((img, index) => {
    img.src = item_left[index];
  });

  const buttonLeftL = document.querySelector(".button_left");
  const buttonRightL = document.querySelector(".button_right");

  const buttonLeftR = document.querySelector(
    ".buttons_handle_right .button_left"
  );
  const buttonRightR = document.querySelector(
    ".buttons_handle_right .button_right"
  );

  const imageRight = document.querySelector(".right .image_main");

  buttonLeftL.addEventListener("click", function () {
    if (listImage === item_left) {
      return;
    }
    //remove active
    imageActive = 0;
    imageRight.classList.remove("active");
    imagesContainer.forEach((img) => {
      img.classList.remove("active");
    });
    iconActive.forEach((img) => {
      img.classList.remove("active");
    });
    desActive.forEach((img) => {
      img.classList.remove("active");
    });
    images.forEach((img) => {
      img.classList.remove("active");
    });

    buttonLeftL.classList.add("active");
    buttonRightL.classList.remove("active");

    buttonLeftL.style.borderRadius = "50px";
    buttonRightL.style.borderRadius = "0px 50px 50px 0px";

    listImage = item_left;

    imageRight.src = listImage[3];
    images.forEach((img, index) => {
      img.src = item_left[index];
    });
  });

  buttonRightL.addEventListener("click", function () {
    if (listImage === item_right) {
      return;
    }
    //remove active
    imageActive = 0;
    imageRight.classList.remove("active");
    imagesContainer.forEach((img) => {
      img.classList.remove("active");
    });
    iconActive.forEach((img) => {
      img.classList.remove("active");
    });
    desActive.forEach((img) => {
        img.classList.remove("active");
      });
    images.forEach((img) => {
      img.classList.remove("active");
    });
    
    buttonRightL.classList.add("active");
    buttonLeftL.classList.remove("active");

    buttonLeftL.style.borderRadius = " 50px 0px 0px 50px";
    buttonRightL.style.borderRadius = "50px";

    listImage = item_right;

    imageRight.src = listImage[3];
    images.forEach((img, index) => {
      img.src = item_right[index];
    });
  });

  buttonRightR.addEventListener("click", function () {
    imageActive = imageActive + 1;
    if (imageActive > 3) {
      imageActive = 1;
    }
    imageRight.src = listImage[imageActive - 1];
    images.forEach((img, index) => {
      if (index + 1 === imageActive) {
        img.classList.add("active");
        imagesContainer[index].classList.add("active");
        iconActive[index].classList.add("active");
        desActive[index].classList.add("active");
        imageRight.classList.add("active");
      } else {
        img.classList.remove("active");
        imagesContainer[index].classList.remove("active");
        iconActive[index].classList.remove("active");
        desActive[index].classList.remove("active");
      }
    });
  });
  
  buttonLeftR.addEventListener("click", function () {
    imageActive = imageActive - 1;
    if (imageActive < 1) {
      imageActive = 3;
    }
    imageRight.src = listImage[imageActive - 1];
    images.forEach((img, index) => {
      if (index + 1 === imageActive) {
        img.classList.add("active");
        imagesContainer[index].classList.add("active");
        iconActive[index].classList.add("active");
        desActive[index].classList.add("active");
        imageRight.classList.add("active");
      } else {
        img.classList.remove("active");
        imagesContainer[index].classList.remove("active");
        iconActive[index].classList.remove("active");
        desActive[index].classList.remove("active");
      }
    });
  });
}

export { initializeSection1 };
