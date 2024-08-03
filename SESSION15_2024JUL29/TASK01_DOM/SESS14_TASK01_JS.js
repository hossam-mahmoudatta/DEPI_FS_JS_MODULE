
const title = document.getElementById('headerHosa');
const title2 = document.getElementsByClassName('headerTwo');
const title3 = document.querySelector('.one');

console.log(title);
console.log(title2);
console.log(title3);

// Manipulating HTML



// Event Handling
let divHider = document.querySelector("div");
const btn = document.querySelector("button");
console.log(btn);

btn.addEventListener("click",  function() {
    console.log("Button clicked, Hello Hossam");
    if(divHider.style.display === 'none') {
        divHider.style.display = 'block';
    } else {
        divHider.style.display = 'none';
    }
});



// I want to map specific products to each merchant
