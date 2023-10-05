$(function ($) {
    console.log("awrga")
    $('.building-list-images').slick({
        // slideというクラスに、slick関数を実行するイメージ
        adaptiveHeight: false,
        autoplay: false,
        dots: false,
        infinite: true,
        centerMode: true,
        centerPadding: "20%",
        arrows: false,
        responsive: [
        {
        breakpoint: 1000,
        settings: {
            centerPadding: "10%",
        }
        },
        ]
    });
});