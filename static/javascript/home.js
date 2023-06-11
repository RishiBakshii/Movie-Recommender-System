document.addEventListener('DOMContentLoaded', function() {


    const header=document.getElementById('header')
    const recommendBtn=document.getElementById("recommend-btn")
    const selectBox=document.getElementById("select-box")


    selectBox.addEventListener('mouseenter',function(){
        header.style.boxShadow='0 1rem 100rem 1px rgb(60, 0, 255)'
    })

    selectBox.addEventListener('click',function(){
        selectBox.style.transform='translateY(3%)'
    })


    selectBox.addEventListener('mouseleave',function(){
        header.style.boxShadow=''
    })
    
    const heading=document.getElementById("heading")

    // setInterval(() => {
    //     heading.innerText='FlickFinder -Movie Match🍿'
    // }, 5000);

    // setInterval(() => {
    //     heading.innerText='FlickFinder -Movie Match🍔'
    // }, 10000);

    // setInterval(() => {
    //     heading.innerText='FlickFinder -Movie Match❤️'
    // }, 15000);

    // const text = "FlickFinder -Movie Match❤️";
    // let index = 0;

    // function type() {
    // heading.innerText += text[index];
    // index++;

    // if (index < text.length) {
    //     setTimeout(type, 100);
    // }
    // }
    // type();


})
  