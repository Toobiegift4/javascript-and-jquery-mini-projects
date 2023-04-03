// fade i  ad fade out examples
// function fun1(){
//     $('img').fadeToggle()
// }

// selectors
// function fun1(){
//      $("div").css("background-color","orange");
//     $('#p1').css('font-style','italic')
//     $("#div1,li").css("background-color", "purple");

//     $("div  p").fadeToggle();

//     to acess the first paragraph but not the second
//     $('p:first').fadeToggle()
    

    
// }


// events
// $('document').ready(function(){

// changing the size of an image after clicking a button
//     $('button').click(function () {
//         $('img').css('width', '500px')
//     })


// })
// $('document').ready(()=>{
// changing the size of an image after putting the mouse on the image

    // $('img').mouseenter(function() {
    //     $('.img').css('width','250px')
    // })

    // $('img').hover(function () {
    //     $('.img').css('width', '500px')
    // })
// })


// effects
// hide and show effect
// $('document').ready(()=>{
    // $('.btn1').click(()=>{
    //     $('.img').hide(2000)
    // })
    // $('.btn2').click(() => {
    //     $('.img').show(2000)
    // })
    // $('.btn3').click(() => {
    //     $('.img').toggle(3000)
    // })
// fade in and out effect
    // $('.btn4').click(() => {
    //     $('.img').fadeIn(2000)
    // })
    // $('.btn5').click(() => {
    //     $('.img').fadeOut(2000)
    // })
    // $('.btn6').click(() => {
    //     $('.img').fadeToggle(3000)
    // })

    // same for slide up and down effect
    // $('.btn4').click(() => {
    //     $('.img').slideUp(2000)
    // })
    // $('.btn5').click(() => {
    //     $('.img').slideDown(2000)
    // })
    // $('.btn6').click(() => {
    //     $('.img').slideToggle(3000)
    // })
// })

// animate effect and callbacks
$('document').ready(()=>{
    $('.btn').click(()=>{
        $('.img').animate({
            left:'150px',
            opacity: '1',
            height:'400px',
            width: '400px'

        },2000,()=>{
            alert('animated')
        })
    })
    $('.btn1').click(()=>{
        $('.img').animate({
            left: '8px',
            opacity: '0.4',
            height: '250px',
            width: '250px'
        },2000)
    })
})
