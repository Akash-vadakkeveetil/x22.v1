
function revealToSpan() {
    document.querySelectorAll(".reveal").forEach(function(elem) {
        let spanParent = document.createElement("span"); // now this is the new span tag
        let spanChild = document.createElement("span"); // <span></span> this is made here

        spanParent.classList.add("parent"); // <span class = "parent"></span>
        spanChild.classList.add("child");

        spanChild.innerHTML = elem.innerHTML; // <span class ="child">Creative</span>
        spanParent.appendChild(spanChild); // span child now inside the span parent

        // elem replaces its value with parent span
        elem.innerHTML = "";
        elem.appendChild(spanParent);
    });
}

revealToSpan();

function loaderAnimation()
{
    var tl = gsap.timeline();

tl

.to("#loader",{
    height : 0,
    duration : 2,
    ease:Expo.easeInOut 
})

.to("#green",{
    height : "100%",
    duration : 2,
    delay : -2,
    ease:Expo.easeInOut 
})

.to("#home",{
    height : "100%",
    duration : 2,
    delay : -1.5,
    ease:Expo.easeInOut 
})
}

loaderAnimation();

