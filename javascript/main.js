$(document).ready(function(){
    //smooth scroll
    var smoothScroll = $('.scroll')
    smoothScroll.click(function(event) {
        event.preventDefault()

        $('body, html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1250 );
    })

    //carousel
    $('.main-carousel').flickity({
        cellAlign: 'left',
        prevNextButtons: false
    });

    //adding items to cart


    //subscribe button
    $('#subscribe').on('click', function() {
        alert('Thanks for subscribing!'); 
    });


    
});

