var swiper = new Swiper(".product-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".review-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

/* cart */

$(document).ready(function () {
  $("#cart").hide();
  $("#cart-icon").click(function () {
    console.log("clicked icon");
    $(".pcart").toggle();
  })


  var cart_item_count = 0;
  $('.order_btn').click(function () {
    console.log("clicked add to cart");
    cart_item_count++;
    var img_src = $(this).parents(".box").find("img").attr('src');
    var title = $(this).parents(".box").find("h3").text();
    var price = $(this).parents(".box").find(".price").text();

    var cart_item = `
    <div class="main d-flex p-3 border border-left-0 border-right-0 border-top-0 justify-content-between">
        <div class="col-md-3 border border-left-0 border-top-0 border-bottom-0">
            <img src=${img_src} height="90px" width="90px" alt=""/>
        </div>

        <div id="title" class="col-md-3 d-flex flex-wrap align-content-center">
            <h6 style="font-size:13px;font-family: sans-serif, 'Poppins';"><strong>${title}</strong></h6>
        </div>

        <div class="col-md-3 d-flex flex-wrap align-content-center justify-content-between">
            <button type="button" class="btn btn-block btn-sm btn-outline-primary" onclick="">+</button>
            <span class="mx-2"> 1 </span>
            <button type="button" class="btn btn-block btn-sm btn-outline-primary">-</button>
        </div>

        <div class="col-md-2 d-flex flex-wrap align-content-center" id="t_price">
            <h6 class="mt-2 d-flex"><span>  </span><span class="cart_item_price"><strong> ${price} </strong></span></h6>
        <div>

        <div class="col-md-1 d-flex flex-wrap align-content-center">
            <span class="close" style="cursor:pointer;font-size:25px;"> &times; </span>
        </div>
    </div>
  `

    $("#order").append(cart_item);

    $("#cart_item_count").text(cart_item_count);
    $(".close").click(function () {
      $(this).parents(".main").remove();

      item_count();
    })
    item_count();
  })
  function item_count() {

    var res = $("#order").children().length;
    $("#cart_item_count").text(res);
  }
})