const defaultTheme = 'system';

// Function to handle theme changes
function handleThemeChange(option) {
  if (option === defaultTheme) {
    document.body.removeAttribute('data-theme');
    localStorage.removeItem('theme');
  } else {
    document.body.setAttribute('data-theme', option);
    localStorage.setItem('theme', option);
  }
}

// Get the current theme from local storage
const theme = localStorage.getItem('theme');
document.body.setAttribute('data-theme', theme);

// Attach click event listeners to theme options
const themeList = document.getElementById('themes');
themeList.childNodes.forEach(node => {
  node.addEventListener('click', () => {
    const option = node.textContent.toLowerCase();
    handleThemeChange(option);
  });
});
