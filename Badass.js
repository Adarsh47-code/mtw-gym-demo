const buttons = document.querySelectorAll(".contact")
const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            
        }
        else{
            entry.target.classList.remove("visible");
            // observer.unobserve(entry.target);
        }
    });
}, {threshold: 0.6});

buttons.forEach(btn => {observer.observe(btn)});

// For price boxes 
const boxes = document.querySelectorAll(".money")
const observer1 = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
        }
        else{
            entry.target.classList.remove("show")
        }
    })
}, {threshold: 0.5});
boxes.forEach(box => {observer1.observe(box)});