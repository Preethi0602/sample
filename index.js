const largebtn = document.querySelectorAll('.zoomtxt');
const allpics = document.querySelectorAll('.imagecontainer');
const picview = document.querySelector('.picture-view');
const rightbtn = document.getElementById('nex-btn');
const leftbtn = document.getElementById('pre-btn');
const picbox = document.querySelector('.picture-box');
const closing = document.querySelector('.closebtn');
let index=0;
picview.addEventListener('click',
function(){
    this.style.display = "none";
    pic.style.display = "none";
})

largebtn.forEach(function(btn,idx){
    btn.addEventListener('click',
    function(){
        picview.style.display = "block";
        picbox.style.display = "block";
        index = idx + 1;
        indexdisplay(index);
    })
})

function indexdisplay(index){
    picbox.style.background = `url(images/img${index}.jpg) center/cover no-repeat`;
}

leftbtn.addEventListener('click',function(){
    index--;
    if(index===0){
        index=allpics.length;
    }
    indexdisplay(index);
})

rightbtn.addEventListener('click',function(){
    index++;
    if(index===5){
        index=1;
    }
    indexdisplay(index);
})

closing.addEventListener('click',function(){
    picview.style.display = "none";
    picbox.style.display = "none";
})
