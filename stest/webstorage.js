function nameDisplayCheck() {
  if (localStorage.getItem("name")) {
    let name = localStorage.getItem("name");//Call the value of localStorage in the name variable.
    let username = document.querySelector('#username');
    username.innerHTML = `Welcome ${name}`;

  } else if (localStorage.getItem("name") === null) {
    const sign = prompt("Welcome",' ');//Get input from keyboard
    localStorage.setItem("name", sign);//set a value to the input
    window.location.reload();//Command to automatically reload
    if(localStorage.getItem("name") == ' '){
      username.innerHTML = `Welcome`;
      window.location.reload();
    }
  }
}
document.body.onload = nameDisplayCheck;
// localStorage.clear();
