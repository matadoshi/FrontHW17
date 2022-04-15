AOS.init();

let images=[
    "images/image-1.jpg",
    "images/image-2.jpg",
    "images/image-3.jpg",
    "images/image-4.jpg",
    "images/image-5.jpg",
    "images/image-6.jpg",
]
let imagePlace=document.querySelector('.slider img');
let startPoint = 0;
imagePlace.src = images[startPoint];

let left = document.querySelector('.left');
let next = document.querySelector('.next');


next.onclick = function() {
    startPoint++;
    if(startPoint == images.length) {
        startPoint = 0;
    }
    imagePlace.src = images[startPoint];
}

left.onclick = function() {
    startPoint--;
    if(startPoint == -1) {
        startPoint = images.length - 1;
    }
    imagePlace.src = images[startPoint];
}
let buttons=document.querySelectorAll('.tabMenu button');
let divs=document.querySelectorAll('.content div');

for(let button of buttons){
    button.addEventListener('click',function()
    {
        let active=document.querySelector('.active');
        startPoint++;
        if(startPoint == images.length) {
            startPoint = 0;
        }
        imagePlace.src = images[startPoint];

        active.classList.remove('active');
        this.classList.add('active');
        
        let index=this.getAttribute('data-index');

        for(let div of divs){
            if(div.getAttribute('data-index') === index) {
                div.classList.remove('d-none');
            }
            else{
                div.classList.add('d-none');
            }
        }
    })
}
let ctrlEvent = new KeyboardEvent("keydown", {bubbles : true, keyCode : 17});
let aEvent = new KeyboardEvent("keydown", {bubbles : true, keyCode : 65});


function ctrlPress(){
    dispatchEvent(ctrlEvent);
}
function aPress(){
    dispatchEvent(aEvent)
}

    setTimeout(function(){
        ctrlPress();
        aPress();
    }, 1000);

