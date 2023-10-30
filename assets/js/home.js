var owl = $('.owl-carousel1');

owl.owlCarousel({
    autoHeight:true,
    loop:true,
    autoplay:true,
    center: true,
    responsiveClass:true,
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1,
            nav:false,
            margin:10,
        },
        1000:{
            items:1,
            nav:false,
            margin:10,
        },
        1500:{
            items:2,
            nav:false,
            margin:10,
            center:false,
            autoHeight:true,
        }
    },
    autoplayTimeout:2500,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

