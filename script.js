function breakWord(){

        var tag = document.querySelector("h1");
        var word = tag.textContent;

        var letters = word.split("");

        var clutter = "";
        
        letters.forEach(function(val,ind){
                if (ind%2==0){
                        clutter += `<span class="a">${val}</span>`;
                }
                else{
                        clutter += `<span class="b">${val}</span>`
                }
        })

        // change the html content ; dont use textcontent or innertext
        tag.innerHTML = clutter;
        
}


breakWord(); 


gsap.from("h1 .a",{
        y:200,
        opacity:0,
        duration:1,
        stagger:0.2,
        delay:0.5
})

gsap.from("h1 .b",{
        y:-200,
        opacity:0,
        duration:1,
        stagger:0.2,
        delay:0.5
})




















