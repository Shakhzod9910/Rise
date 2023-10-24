const elements = document.getElementsByClassName("menu-out");
const toggleButtons = document.getElementsByClassName("menu-in");
const menu = document.getElementsByClassName("links");

// Add a click event listener to each button
for (let i = 0; i < toggleButtons.length; i++) {
  toggleButtons[i].addEventListener("click", function() {
    // Toggle the 'active' class on the corresponding 'menu-out' element
    
    toggleButtons[i].classList.remove("active");
    menu[i].classList.add("active-menu");
    elements[i].classList.add("active");
    
  });
}
for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", function() {
      // Toggle the 'active' class on the corresponding 'menu-out' element
      elements[i].classList.remove("active");
      
      menu[i].classList.remove("active-menu");
      toggleButtons[i].classList.add("active");
    });
  }