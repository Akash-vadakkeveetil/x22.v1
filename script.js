
function revealToSpan() {
    document.querySelectorAll(".reveal").forEach(function(elem) {
        var parent = document.createElement("span"); // now this is the new span tag
        var child = document.createElement("span"); // <span></span> this is made here

        parent.classList.add("parent"); // <span class = "parent"></span>
        child.classList.add("child");

        child.innerHTML = elem.innerHTML; // <span class ="child">Creative</span>
        parent.appendChild(child); // span child now inside the span parent

        // elem replaces its value with parent span
        elem.innerHTML = "";
        elem.appendChild(parent);
    });
}

revealToSpan();

//first text moving up animation
gsap.to(".parent .child",{
    y:"-100%",
    duration:1,
    delay:0.5,
    ease:Expo.easeInOut
})

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
    ease:Expo.easeInOut,
    delay : -2, 
})

.to("#white",{
    height : "100%",
    duration : 3,
    ease:Expo.easeInOut ,
    delay : -2,
})
}

loaderAnimation();

function animateNav() {
    gsap.set("#nav",{y:"-100%",opacity :0});

    var tl = gsap.timeline();

    tl.to("#nav",{
        y:"0%",
        opacity :1,
        duration:1.6,
        delay:.8,
        ease:Expo.easeInOut
    });
}
animateNav();

function animateRowH1() {
    gsap.set(".row h1 .parent .child", { y: "100%" })
    gsap.to(".row h1 .parent .child", {
        y: "0%",
        duration: 2.6,
        delay: 0.5,
        ease: Expo.easeInOut
    });
}

animateRowH1();




function updateTime() {
    // Get the current date and time
    var currentDate = new Date();

    // Extract the hours, minutes, and seconds
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    // Determine whether it's AM or PM
    var ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert hours to 12-hour format
    hours = hours % 12 || 12;

    // Get the GMT offset in hours
    var gmtOffset = -currentDate.getTimezoneOffset() / 60;

    // Format the time as hh:mm:ss AM/PM +GMT
    var formattedTime = `${hours}:${minutes}:${seconds} ${ampm} +GMT${gmtOffset >= 0 ? '+' : ''}${gmtOffset}`;

    // Update the content of the relevant h5 elements
    document.getElementById("currentTime").textContent = formattedTime;
    document.getElementById("currentTimeLabel").textContent = "MY LOCAL TIME +GMT";

    // Call this function every second to update the time
    setTimeout(updateTime, 1000);
}

// Call the updateTime function to start updating the time
updateTime();
