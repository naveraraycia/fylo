// Step 1: Get the Toggle button and logo versions
const themeToggleBtn = document.getElementById('theme-toggle');
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Step 2: Check whether you are in Dark / Light mode to know which Icon to show
if (
  localStorage.getItem('color-theme') === 'dark' ||
  (!('color-theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  // If we are in dark mode: Show the 'light' icon (remove the hidden class from the light icon)
  themeToggleLightIcon.classList.remove('hidden');

} else {
  themeToggleDarkIcon.classList.remove('hidden');
}

// Step 3: Listen for toggle button click
themeToggleBtn.addEventListener('click', toggleMode);

function toggleMode(){
  ///////////////// Toggling Icons and local storage value ///////////////////
  // Toggle icons
  themeToggleDarkIcon.classList.toggle('hidden');
  themeToggleLightIcon.classList.toggle('hidden');

  // Check if local storage has content
  if(localStorage.getItem('color-theme')) {
    // Check if the current setting is in 'light' or 'dark' mode
    // If light, turn it to 'dark' and save to local storage
    if(localStorage.getItem('color-theme') === 'light') {
      // Add class 'dark' to <html>
      document.documentElement.classList.add('dark');
      // Put to local storage
      localStorage.setItem('color-theme', 'dark');
    } else {
      // If in dark mode, remove the class 'dark'
      document.documentElement.classList.remove('dark');
      // Set storage value to 'light'
      localStorage.setItem('color-theme', 'light');
    }
  } else {
    // If local storage is empty, (first time in the website) check if within <html> there is the 'dark' class
    if(document.documentElement.classList.contains('dark')) {
      // If there is class='dark' within <html> , remove it
      document.documentElement.classList.remove('dark');
      // Set the color theme to 'light' within local storage
      localStorage.setItem('color-theme', 'light');
      
    } else {
      // If the class='dark' is not within <html>, apply it
      document.documentElement.classList.add('dark');
      // Put to local storage
      localStorage.setItem('color-theme', 'dark');
    }

  }
}