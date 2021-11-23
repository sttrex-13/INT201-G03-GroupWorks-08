//Call the value of localStorage in the name variable.
const username = document.querySelector('#username');
  
function nameDisplayCheck() {
  const name = localStorage.getItem("name");
  if (localStorage.getItem("name")) {
    username.innerHTML = `Welcome ${name}`;

  } else if (localStorage.getItem("name") === null) {
    const sign = prompt("Welcome",' ');//Get input from keyboard
    localStorage.setItem("name", sign);//set a value to the input

    localStorage.getItem("name")? username.innerHTML = `Welcome ${name}`: username.innerHTML = `Welcome` //check that name in localstorage is exist
    window.location.reload(); //Command to automatically reload
  }
}

document.body.onload = nameDisplayCheck;
username.addEventListener('click', () => {
  localStorage.clear(); // clear all localstorage
  nameDisplayCheck();
});

