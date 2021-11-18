
let click = false;
function toggleSearch() {  //Show and hidden search panel 
    let inputName = document.querySelector("#input");

    click = !click;
    if (click) {
        inputName.setAttribute('class', 'visible');//Press to display the search panel.

    } else {
        inputName.setAttribute('class', 'invisible');//Press to hide search panel.
    }
}

let search = document.querySelector("#search");
search.setAttribute('style', 'padding-top: 15px');
search.addEventListener('click', toggleSearch); //If click the magnifying glass code will calling toggleSearch function

const searching = () => {
    let input, filter, div, div2, pdName, txtValue, i;
    input = document.querySelector("#inputValue");
    filter = input.value.toUpperCase(); // Assign value from tag input to filter in uppercase 
    div = document.getElementById("products"); // Select all products and put them in the div
    div2 = div.getElementsByClassName("product"); // Select product and put them in the div2

    for (i = 0; i < products.length; i++) {
        pdName = div2[i].getElementsByTagName("div")[0];
        txtValue = pdName.textContent || pdName.innerText; // assign value in first tag div that the name of product to txtValue
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            div2[i].style.display = ""; // Bring the product that include the condition to show while sreaching
        } else {
            div2[i].style.display = "none"; // Hidden the product that is't include the condition while sreaching
        }
    }
}

let btn = document.querySelector("#searchBtn");
btn.onclick = searching; // Add event onclick to search button for searching
