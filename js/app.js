/*

1. GLOBAL VARIABLES

In this section we define the global variables.

*/

let sections = document.querySelectorAll('section');
let str = "<ul>";
let header = document.querySelector('header');



/*

2. GENERATING THE NAVIGATION

We are generating the navigation list in this section.

First we are using a forEach loop to generate the list elements based on the sections variable.

*/

sections.forEach(function(section) {
    str += `<li class="${section.id}"><a href="#${section.id}">${section.id}</li>`;
});

/*
After the loop we close the unordered list and add it to the header section.
*/

str += "</ul>";
header.insertAdjacentHTML('beforeend', str);

/*

3. SET THE ACTIVE SECTION

In this section we track the active sections and based on this we set the appropriate
links to active.

In the forEach loop we go through the sections.
We retrieve the section positions based on the getBoundingClientRect();
We select the appropriate li in the header based on the section id.
Based on the position of the section we decide if we should add the active class
to the li element or remove it.

In the last step we add an event listener to the scroll event to invoke the activeSection function.

*/


function activeSection() {
    sections.forEach(function(section) {
        const item = section.getBoundingClientRect();
        const link = header.querySelector(`.${section.id}`);
        if (item.y <= 330 && item.bottom >= 360){
            link.classList.add("active");
          }
          else {
            link.classList.remove("active");
          }
    })
}

document.addEventListener("scroll", activeSection);


