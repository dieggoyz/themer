// Get the theme select element from the DOM
const select = document.getElementById("theme");

// Retrieve the saved theme from localStorage or default to "system" if not set
const savedTheme = localStorage.getItem("theme") || "system";

// Set the select element's value to the saved theme
select.value = savedTheme;

// Apply the saved theme by setting the "data-theme" attribute on the <html> element
document.documentElement.setAttribute("data-theme", savedTheme);

// Listen for changes to the select element (when the user selects a new theme)
select.addEventListener('change', ({ target: { value } }) => {
  // Update the "data-theme" attribute with the newly selected theme
  document.documentElement.setAttribute("data-theme", value);
  
  // Save the new theme to localStorage
  localStorage.setItem("theme", value);
});
