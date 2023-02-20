const tabItems = document.querySelectorAll(".tab_item");
const tabContentItems = document.querySelectorAll(".tab_content_item");

// Select tab content item
function selectItem(e) {
  removeBorder();
  removeShow();
  // Add border to current tab
  this.classList.add("tab_border");
  // Grab content item from DOM
  const tabContentItem = document.querySelector(`#${this.id}_content`);
  // Add show class
  tabContentItem.classList.add("show");
}

function removeBorder() {
  tabItems.forEach((item) => item.classList.remove("tab_border"));
}

function removeShow() {
  tabContentItems.forEach((item) => item.classList.remove("show"));
}

// Listen for tab click
tabItems.forEach((item) => item.addEventListener("click", selectItem));
