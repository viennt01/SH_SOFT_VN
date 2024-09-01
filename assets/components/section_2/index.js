function initializeSection2() {
  const items = document.querySelectorAll(
    ".list_image_section_2 .contianer_item"
  );
  let currentIndex = 0;
  function switchActiveClass() {
    items[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % items.length;
    items[currentIndex].classList.add("active");
  }
  setInterval(switchActiveClass, 3000);
}

export { initializeSection2 };
