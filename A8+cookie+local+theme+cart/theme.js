// declare variables.
const moon = '🌙';
const sun = '☀️';
const darkMode = 'dark';
const lightMode = 'light';
const defaultMode = darkMode;

const themeBtn = document.querySelector('#theme-switcher');  // select the button.

init();

// function for run when to page loads.
function init() {
    let storedMode = sessionStorage.getItem('mode');    // retrieve the mode stored in session storage.
    // if seession storage doesn't have the mode, function will switch page to default mode and it sets to the mode stored in session storage.
    if (!storedMode) {
        storedMode = defaultMode;
        sessionStorage.setItem('mode', defaultMode);
    }
    changeTheme(storedMode);
}

// function for change the theme.
function changeTheme(mode = defaultMode) {
    // in the dark mode, the change theme changes the button to the sun and add dark mode to body.
    if (mode === darkMode) {
        themeBtn.textContent = sun;
         document.body.classList.add(darkMode);

    // but the light mode, the change theme changes the button to the moon and remove dark mode from body.
    } else if (mode === lightMode) {
        themeBtn.textContent = moon;
        document.body.classList.remove(darkMode);
    }
}

// add click event.
themeBtn.addEventListener('click', function () {
    // click event gets the mode stored in session storage.
    let mode = sessionStorage.getItem('mode');
    // if the mode item exists, it switches the mode.
    if (mode) {
        let newMode = mode == darkMode ? lightMode : darkMode ;
        changeTheme(newMode);
        sessionStorage.setItem('mode', newMode);    // for update the mode in session storage to the new one.
        alert(`You are switching to the ${newMode} mode`);  // alert box for show switching to new mode.
    } 
});


