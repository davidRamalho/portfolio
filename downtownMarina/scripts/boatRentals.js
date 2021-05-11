//FAKE RENTAL DATA
const rentalData = [
  {
    type: 'wakesurf', 
    title: 'MasterCraft X24',
    imgSource: [
      '../images/boatRentals/MasterCraftX24.jpg',
      '../images/boatRentals/ChaparralH2019Sport.jpg',
      '../images/boatRentals/MasterCraftX24.jpg',
      '../images/boatRentals/MasterCraftX24.jpg',
      '../images/boatRentals/MasterCraftX24.jpg',
      '../images/boatRentals/MasterCraftX24.jpg',
      '../images/boatRentals/MasterCraftX24.jpg'], 
    rates: {
      hourly: ['$299', '$339', '$579', '$1,039', '$1,419'], 
      daily: ['$1,299', '$1,069']
    }
  }, 
  {
    type: 'bowrider', 
    title: 'Chaparral H20 19 Sport',
    imgSource: ['../images/boatRentals/ChaparralH2019Sport.jpg', '../images/boatRentals/ChaparralH2019Sport.jpg', '../images/boatRentals/ChaparralH2019Sport.jpg', '../images/boatRentals/ChaparralH2019Sport.jpg', '../images/boatRentals/ChaparralH2019Sport.jpg', '../images/boatRentals/ChaparralH2019Sport.jpg', '../images/boatRentals/ChaparralH2019Sport.jpg'], 
    rates: {
      hourly: ['$299', '$339', '$579', '$1,039', '$1,419'], 
      daily: ['$1,299', '$1,069']
    }
  }, 
  {
    type: 'pontoon', 
    title: 'South Bay 525E Pontoon',
    imgSource: ['../images/boatRentals/SouthBayPontoon.jpeg', '../images/boatRentals/SouthBayPontoon.jpeg', '../images/boatRentals/SouthBayPontoon.jpeg', '../images/boatRentals/SouthBayPontoon.jpeg', '../images/boatRentals/SouthBayPontoon.jpeg', '../images/boatRentals/SouthBayPontoon.jpeg', '../images/boatRentals/SouthBayPontoon.jpeg'], 
    rates: {
      hourly: ['$299', '$339', '$579', '$1,039', '$1,419'], 
      daily: ['$1,299', '$1,069']
    }
  }, 
  {
    type: 'jet-ski', 
    title: 'Yamaha VX Deluxe',
    imgSource: ['../images/boatRentals/YamahaVXDeluxe.jpg', '../images/boatRentals/YamahaVXDeluxe.jpg', '../images/boatRentals/YamahaVXDeluxe.jpg', '../images/boatRentals/YamahaVXDeluxe.jpg', '../images/boatRentals/YamahaVXDeluxe.jpg', '../images/boatRentals/YamahaVXDeluxe.jpg', '../images/boatRentals/YamahaVXDeluxe.jpg'], 
    rates: {
      hourly: ['$299', '$339', '$579', '$1,039', '$1,419'], 
      daily: ['$1,299', '$1,069']
    }
  },   
  {
    type: 'jet-ski', 
    title: 'Sea-Doo GTI 90',
    imgSource: ['../images/boatRentals/Sea-DooGTI90.jpeg', '../images/boatRentals/Sea-DooGTI90.jpeg', '../images/boatRentals/Sea-DooGTI90.jpeg', '../images/boatRentals/Sea-DooGTI90.jpeg', '../images/boatRentals/Sea-DooGTI90.jpeg', '../images/boatRentals/Sea-DooGTI90.jpeg', '../images/boatRentals/Sea-DooGTI90.jpeg'], 
    rates: {
      hourly: ['$299', '$339', '$579', '$1,039', '$1,419'], 
      daily: ['$1,299', '$1,069']
    }
  }
]

$(document).ready(function() {
  //SHOWS AND HIDES FAQ ANSWERS
  $('.faq-item').on('click', function() {
    const index = $('.faq-item').index(this)
    if ($(`.faq-item > div > div`).eq(index).hasClass('hidden')) {
      $(`.faq-item > div > div`).eq(index).removeClass('hidden');
      $( `.faq-expand > svg.bi-dash`).eq(index).removeClass('hidden');
      $( `.faq-expand > svg.bi-plus`).eq(index).addClass('hidden');
    } else {
      $(`.faq-item > div > div`).eq(index).addClass('hidden')
      $( `.faq-expand > svg.bi-dash`).eq(index).addClass('hidden');
      $( `.faq-expand > svg.bi-plus`).eq(index).removeClass('hidden');
    }
  });
  
  //GRAB RENTAL ITEM's TITLE
  $('.details').on('click', function() {
    const index = $('.details').index(this);
    let title = $('.item-title').closest('h2').eq(index).html();
    sessionStorage.setItem("title", title);
    sessionStorage.setItem("items", JSON.stringify(rentalData));
  });
  //ISOTOPE FILTERING
  $(".items").isotope({
    itemSelector: ".item", 
    layoutMode: "fitRows",
    fitRows: {
      gutter: 40
    }
  });
  $(".menu ul li").click(function() {
    $(".menu ul li").removeClass("active");
    $(this).addClass("active");
    const selector = $(this).attr("data-filter")
  
    $(".items").isotope({
      filter: selector
    });
    return false;
  });
});