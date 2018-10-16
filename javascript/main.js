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
    $('.addtocart').on('click', () => {
        console.log("Updating the Cart!");
    
        var cartUpdate = $('#cartUpdate');

        var cartCount = parseInt(cartUpdate.text());

        if(cartCount == 0) cartUpdate.css("display", "flex");
        cartUpdate.text(++cartCount);

      });

    
    //validating email address
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
    
    function validate() {
        var email = $("#email").val();

        if (validateEmail(email)) {
            alert("Thanks for subscribing!");
        } else {
            alert("Please enter a valid email!");
        } 
        return false;
        }

        $("#subscribe").bind("click", validate);

});

