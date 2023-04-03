// dom manipulation VERY IMPORTANT FOR FORMS
$('document').ready(()=>{
    // $('.div1').click(()=>{
    //    const x = $('.p1').html()
    //    $('.span1').text(x) 
    // })

    // $('.div1').click(()=>{
        
        // alert($('.p1').html()) 
        // $('.div1').slideUp(2000).slideDown(2000)
    //  })


    // append, prepend, after and before, remove and empty methods
    $('.btn1').click(() => {
        $('.div1').append('<img src= "images/download.jpg" height= "100px" width= "100px" />')
         $('.div1').append('this is p 2')
     })
    $('.btn2').click(() => {
        $('.div1').prepend('<p>this is para 2 using prepend</P>')

     })
    $('.btn3').click(() => { 
        $('.div1').before('<p>this is para 2 using before</P>')
    })
    $('.btn4').click(() => {
        $('.div1').after('<p>this is para 2 using after</P>')
    })
    $('.btn5').click(()=>{
        $('.div1').remove()
    })
    $('.btn6').click(() => {
        $('.div1').empty()
    })
    $('').click(() => { })

})