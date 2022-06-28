$(document).ready(function(){
    $(".c-mainvisual").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    });

    $('.c-pickup__slides').slick({
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        prevArrow: '<div class="control__prev"></div>',
        nextArrow: '<div class="control__next"></div>',
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 920,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows:false,
                }
            }
        ]
    }); 


    //open menu sp
    $("#btnShowMenu").on("click",function(){
        $(this).toggleClass("is-active");
        $(".c-menu__sp").toggleClass("is-active");
    })

    $(".c-menusp__close").on("click",function(){
        $("#btnShowMenu").removeClass("is-active");
        $(".c-menu__sp").removeClass("is-active");
    })
})