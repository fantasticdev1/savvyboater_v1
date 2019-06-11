
/* Final load functions - Copyright 2016 SavvyBoater

/==\    |  \      / \      / \     /  |===\  /==\    |  ======= |==== |===\
|      / \  |    |   |    |   |   |   |   / /    \  / \    |    |     |   /
\==\  |---|  \  /     \  /     \ /    |===  |    | |---|   |    |===  |===
   |  |   |  |  |     |  |      |     |   \ \    / |   |   |    |     |  \
\==/ /     \  \/       \/       |     |===/  \==/ /     \  |    |==== |   \

/*************************
 *                       *
 *       FUNCTIONS       *
 *                       *
 *************************

// Pulls value from cookie based on cname passed. Syntax example: getCookie('username'); will return the value associated with "username" if it exists in the cookie jar
function getCookie(cname) {
    var name = cname + "=",

        ca = document.cookie.split(';'),
        i,
        c;
    for (i = 0; i < ca.length; i++) {
        c = ca[i];request
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Creates or sets a cookie with specified name and value. Syntax example: setCookie('username','Bob');
function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";max-age=3600;path=/";
    return true;
}

/* */
// shows or hides section under heading when clicked
function showHide(shID) {
    if (document.getElementById(shID)) {
        if (document.getElementById(shID + '-show').style.display !== 'none') {
            document.getElementById(shID + '-show').style.display = 'none';
            document.getElementById(shID).style.display = 'block';
        } else {
            document.getElementById(shID + '-show').style.display = 'inline';
            document.getElementById(shID).style.display = 'none';
        }
    }
}

// shows or hides section under heading when clicked and scrolls content into view
function showHideFocus(shID) {
    if (document.getElementById(shID)) {
        if (document.getElementById(shID + '-show').style.display !== 'none') {
            document.getElementById(shID + '-show').style.display = 'none';
            document.getElementById(shID).style.display = 'block';
            var scrollEl = document.getElementById(shID);
            scrollEl.scrollIntoView(true);
        } else {
            document.getElementById(shID + '-show').style.display = 'inline';
            document.getElementById(shID).style.display = 'none';
        }
    }
}

/*
// displays a table with bimini type and measurements which are popular for the selected boat style (in use on Bimini Help Guide Page and Bimini main category page)
function displayBoatBiminiInfo(boatType) {
    var i, alphabet = "abcdefghijklmnopqrstuvwxyz";
    document.getElementById(boatType).style.display = 'block';
    for (i = 1; i < boatType.length; i += 1) {
        document.getElementById(alphabet.substring(0, i)).style.display = 'none';
    }
    for (i = boatType.length + 1; i < 25; i += 1) {
        document.getElementById(alphabet.substring(0, i)).style.display = 'none';
    }
}

// uses lightbox frames for elements with the class of lightbox - lightbox2 is single use, lightbox3 is iframe
$(function() {
    // Standard Popup
    $(".lightbox").fancybox();

    // 1 Time Use Popup
    $(".lightbox2").fancybox({
        'hideOnContentClick': true
    });

    // 1 Time Use Popup - Used for clickable link/element in iframe.
    $(".lightbox4").fancybox({
        'hideOnContentClick': false
    });

          // Temporary fix for font color of link
          $("#freeShippingText a").css("color", "yellow");

    // Iframe/multi Style Popup
    $(".lightbox3").fancybox({
        'transitionIn': 'elastic',
        'transitionOut': 'elastic',
        'speedIn': 600,
        'speedOut': 200,
        'overlayShow': true
    });
});

// add "Retail Price" and "Our Price" plus line break to pricing on product list page and product page
$(function() {
    $('<span class="priceLabels">Retail Price:&nbsp;</span>').insertBefore('strike.RetailPriceValue');
    $('<br /><span class="priceLabels">Our Price:&nbsp;</span>').insertAfter('strike.RetailPriceValue');
});

// reformat titles on product list page
$(function() {
    var test = [],
        titles = [],
        i;

    for (i = 0; i < $('.ProductDetails a').length; i += 1) {
        titles[i] = $('.ProductDetails a:eq(' + i + ')').text().split(' | ');
    }
    for (i = 0; i < titles.length; i += 1) {
        if (titles[i].length === 2) {
            $('.ProductDetails a:eq(' + i + ')').not("#fastCartSuggestive a").html('<span class="prodListSp1">' + titles[i][0] + '</span><br /><strong>' + titles[i][1] + '</strong>');
        } else if (titles[i].length === 3) {
            if (titles[i][1].indexOf('\\') > -1) {
                titles[i][1] = titles[i][1].split(' \\ ');
                $('.ProductDetails a:eq(' + i + ')').not("#fastCartSuggestive a").html('<span class="prodListSp1">' + titles[i][0] + '</span><br /><strong>' + titles[i][1][0] + '</strong>&nbsp;&nbsp;' + titles[i][1][1]);
            } else {
                $('.ProductDetails a:eq(' + i + ')').not("#fastCartSuggestive a").html('<span class="prodListSp1">' + titles[i][0] + '</span><br /><strong>' + titles[i][1] + '</strong><br />' + titles[i][2]);
            }
        } else {
            $('.ProductDetails a:eq(' + i + ')').not("#fastCartSuggestive a").html('<span class="prodListSp1">' + titles[i][0] + '</span><br /><strong>' + titles[i][1] + '</strong><br />' + titles[i][2]);
        }
    }
});

// reformat title (h1) on product page
$(function() {
    var test = [],
        titles = [],
        i;

    for (i = 0; i < $('#ProductDetails .BlockContent h1').length; i += 1) {
        titles[i] = $('#ProductDetails .BlockContent h1:eq(' + i + ')').text().split(' | ');
    }
    for (i = 0; i < titles.length; i += 1) {
        if (titles[i].length === 2) {
            $('#ProductDetails .BlockContent h1:eq(' + i + ')').html('<span class="prodTitleSp1">' + titles[i][0] + '</span>&nbsp;' + titles[i][1]);
        } else if (titles[i].length === 3) {
            if (titles[i][1].indexOf('\\') > -1) {
                titles[i][1] = titles[i][1].split(' \\ ');
                $('#ProductDetails .BlockContent h1:eq(' + i + ')').html('<span class="prodTitleSp1">' + titles[i][0] + '</span>&nbsp;<strong>' + titles[i][1][0] + '</strong>&nbsp;' + titles[i][1][1]);
            } else {
                $('#ProductDetails .BlockContent h1:eq(' + i + ')').html('<span class="prodTitleSp1">' + titles[i][0] + '</span>&nbsp;<strong>' + titles[i][1] + '</strong>&nbsp;' + titles[i][2]);
            }
        } else {
            $('#ProductDetails .BlockContent h1:eq(' + i + ')').html('<span class="prodTitleSp1">' + titles[i][0] + '</span>&nbsp;<strong>' + titles[i][1] + '</strong>&nbsp;' + titles[i][2]);
        }
    }
    // this part removes the pipes from the product title shown in the breadcrumbs at the top of the page.
    if (titles.length) {
        var productTitle = $('#ProductBreadcrumb > ul:nth-child(1) > li:last-child').text();
        while (~productTitle.indexOf(' | ')) {
            productTitle = productTitle.replace(' | ', ' ');
        }
        $('#ProductBreadcrumb > ul:nth-child(1) > li:last-child').text(productTitle);
    }
});

// reformat description title (h4) on product page
$(function() {
    var test = [],
        titles = [],
        i;

    for (i = 0; i < $('.ProductDescriptionContainer h4').length; i += 1) {
        titles[i] = $('.ProductDescriptionContainer h4:eq(' + i + ')').text().split(' | ');
    }
    for (i = 0; i < titles.length; i += 1) {
        if (titles[i].length === 2) {
            $('.ProductDescriptionContainer h4:eq(' + i + ')').html('<span class="prodDescTitleSp1">' + titles[i][0] + '</span>&nbsp;<strong>' + titles[i][1] + '</strong>');
        } else if (titles[i].length === 3) {
            if (titles[i][1].indexOf('\\') > -1) {
                titles[i][1] = titles[i][1].split(' \\ ');
                $('.ProductDescriptionContainer h4:eq(' + i + ')').html('<span class="prodDescTitleSp1">' + titles[i][0] + '</span>&nbsp;<strong>' + titles[i][1][0] + '</strong>&nbsp;<span class="prodDescTitleSp2">' + titles[i][1][1] + '</span>&nbsp;' + titles[i][2]);
            } else {
                $('.ProductDescriptionContainer h4:eq(' + i + ')').html('<span class="prodDescTitleSp1">' + titles[i][0] + '</span>&nbsp;<strong>' + titles[i][1] + '</strong>&nbsp;<span class="prodDescTitleSp2">' + titles[i][2] + '</span>');
            }
        } else {
            $('.ProductDescriptionContainer h4:eq(' + i + ')').not("#fastCartSuggestive a").html('<span class="prodDescTitleSp1">' + titles[i][0] + '</span>&nbsp;<strong>' + titles[i][1] + '</strong>&nbsp;<span class="prodDescTitleSp2">' + titles[i][2] + '</span>&nbsp;' + titles[i][3]);
        }
    }
});

// causes any links with the class of "newWindowPopup" to open in a new window 1000 x 790 centered on the screen
$(function() {
    var nwPopupLinkHrefs = $('a.newWindowPopup'),
        i,
        left = (screen.width / 2) - 500,
        top = (screen.height / 2) - 395;
    for (i = 0; i < nwPopupLinkHrefs.length; i += 1) {
        $('a.newWindowPopup:eq(' + i + ')').attr('id', i + 1 + 'link');
    }
    $('.newWindowPopup').click(function() {
        var clickedId = $(this).attr('id').charAt(0);
        window.open(nwPopupLinkHrefs[clickedId - 1], 'Windows', 'width=1000px, height=790px, top=' + top + ', left=' + left + ', scrollbars=Yes');
        return false;
    });
});

// This causes any links with the class of "brandPopup" to open in a new window 1000 x 500 centered on the screen
$(function() {
    var nwPopupLinkHrefs = $('a.brandPopup'),
        i,
        left = (screen.width / 2) - 500,
        top = (screen.height / 2) - 250;
    for (i = 0; i < nwPopupLinkHrefs.length; i += 1) {
        $('a.brandPopup:eq(' + i + ')').attr('id', i + 1 + 'link');
    }
    $('.brandPopup').click(function() {
        var clickedId = $(this).attr('id').charAt(0);
        window.open(nwPopupLinkHrefs[clickedId - 1], 'Windows', 'width=1000px, height=500px, top=' + top + ', left=' + left + ', scrollbars=No');
        return false;
    });
});

// There's a message on blank category pages, but it needs a some formatting, so that's what we're doing here.
$(function() {
    var message = [];
    if ($('#frmCompare .ProductList .Message').html() !== null) {
        message = $('.Message').html().split('. ');
        $('.Message').html(message[0] + '.<br />' + message[1] + '<br /><span style="font-size:18px;">Customer Service: 1-866-560-1330</span>');
        if (message[1].indexOf("check") === 7) {
            $('#LayoutColumn1').remove();
            $('#LayoutColumn2').css('width', '100%');
        }
    }
});

// Adds prop make, HP, model & year data to cookie on prop finder results pages
$(window).load(function() {
    var URL = window.location.href,
        motorData;

    if (URL.indexOf('?filter.props_') > -1) {
        motorData = URL.split('hierarchy=');
        document.cookie = "motorDataCookie=" + motorData[1] + "; path=/";
    }
});

// Fills prop make, HP, model & year input values on prop product pages using cookie data from prop finder results page
$(function() {
    var URL = window.location.href,
        isPropPage = ['Solas', 'michigan-wheel', 'powertech'],
        motorData,
        i,
        ind;
    for (i = 0; i < isPropPage.length; i++) {
        if (URL.indexOf(isPropPage[i]) >= 0) {
            motorData = getCookie('motorDataCookie');
            motorData = decodeURIComponent(motorData).split(/&_|\//, 3);
            if (motorData[0] !== 'undefined') {
                for (ind = 0; ind < 3; ind++) {
                    $('input.Field.validation:eq(' + ind + ')').val(motorData[ind]);
                }
            }
        }
    }
});

// For PowerTech navigation style selection, this function replaces the category title on the product list page with a value passed from the previous page depending on what link was clicked, and carries that motor information through to the product page, filling the inputs with the appropriate values
$(window).load(function() {
    var URL = window.location.href,
        motorData;

    if (URL.indexOf('powertech-propellers') > -1) {
        // Get the motor data from the cookie and separate it into an array
        motorData = decodeURIComponent(getCookie('motorData')).split(/--|_/);

        // Replace the title with the motor data unless there is not motorData (and increase the bottom margin of the title to 20px and the width to 100%)
        if (motorData[0] !== '') {
            $('h1.title').html(motorData[0] + " for<br />" + motorData[1] + " " + motorData[2] + " " + motorData[3]);
            $('h1.title').css({
                'margin-bottom': '20px',
                'width': '100%'
            });
        }

        // Pass the motor data into the motorDataCookie cookie for the product page
        document.cookie = 'motorDataCookie=' + motorData[1] + ';max-age=3600;path=/';
    }
    // Add explanatory text above motor make size and model boxes on product page
    if (~document.location.href.indexOf('powertech-stainless-steel')) {
        $('.ProductAddToCart').prepend('<h4 style="text-align: center; margin-bottom: 15px; color: #000;">Please fill in your motor info below,<br>so we can include any necessary hardware.</h4>');
    }
});

// This function provides smooth scrolling to anchor links on the site, eliminating the disorientation caused by immediate jumps
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 50
                }, 1000);
                return false;
            }
        }
    });
});

// I'm using this script on the help guide pages to create a floating "back-to-top" button in the lower right hand corner
$(function() {
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = $('.cd-top');

    //hide or show the "back to top" link
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $back_to_top.addClass('cd-is-visible');
        } else {
            $back_to_top.removeClass('cd-is-visible cd-fade-out');
        }
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('cd-fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function(event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0
        }, scroll_top_duration);
    });

});

// This function adds a bulk order link to Polyform fenders & buoys we stock here, and a bulk order button to ones we don't stock here.
/* - commented out since we now set up tier pricing for this category. Emily 7/20/17
$(function() {
    var stockItems = ['polyform-boat-fender-f-6c', 'polyform-boat-fender-f-7c', 'polyform-boat-fender-f-5c', 'polyform-boat-fender-f-3c', 'polyform-boat-fender-f-4c', 'polyform-boat-fender-f-11c', 'polyform-boat-fender-f-1c', 'polyform-boat-fender-f-2c', 'polyform-boat-fender-g-1c', 'polyform-boat-fender-g-2c', 'polyform-boat-fender-g-3c', 'polyform-boat-fender-g-4c', 'polyform-boat-fender-g-5c', 'polyform-boat-fender-htm-1c','polyform-boat-fender-htm-2c', 'polyform-boat-fender-htm-3c','polyform-boat-fender-htm-4c'],
        nonStockItems = ['polyform-buoy-a5', 'polyform-buoy-a6', 'polyform-buoy-a7', 'polyform-boat-fender-f-02', 'polyform-boat-fender-f-6', 'polyform-boat-fender-f-7', 'polyform-boat-fender-f-8', 'polyform-boat-fender-f-10', 'polyform-boat-fender-f-11', 'polyform-boat-fender-f-13', 'polyform-boat-fender-g-1', 'polyform-boat-fender-g-6', 'polyform-boat-fender-htm-1', 'polyform-boat-fender-htm-4'],
        URL = window.location.href,
        i;

    for (i = 0; i < stockItems.length; i++) {
        if (URL.indexOf(stockItems[i]) > 0) {
            $('.productOptionPickListSwatch ul').append('<li style="float: right; margin-right: 25px;"><a href="//stowaway2.wufoo.com/forms/savvyboater-bulk-order-quote-request/" target="_blank">Request Bulk Discount</a></li>');
        } else if (URL.indexOf(nonStockItems[i]) > 0) {
            // Bulk order button code goes here (I haven't written it yet)
            console.log('non-stock');
        }
    }
}); */

// This function adds a request fabric sample link to Carver and Westland covers and biminis - Emily 7/20/17

$(function() {
    //var CarverProducts = ['carver'],
    //    WestlandProducts = ['westland'],
    //    URL = window.location.href,
    //    i;


    //for (i = 0; i < CarverProducts.length; i++) {
    //    if (URL.indexOf(CarverProducts[i]) > 0) {
          if (~window.location.href.indexOf('carver-')) {
            $('.productOptionPickListSwatch ul').append('<li style="float: right; margin-right: 6px;"><a href="//stowaway2.wufoo.com/forms/z1a2bxy90nzk0uf/" target="_blank"><strong>Request Fabric Samples</strong></a></li>');
        } else if (~window.location.href.indexOf('westland-')) {
            $('.productOptionPickListSwatch ul').append('<li style="float: right; margin-right: 6px;"><a href="//stowaway2.wufoo.com/forms/r10x70o31peapt6/" target="_blank"><strong>Request Fabric Samples</strong></a></li>');
        }

            if (~window.location.href.indexOf('carver-bimini-')) {
                     $('.customCheckBox ul').append('<li style="float:right; margin-right: 6px;"><a href="https://www.savvyboater.com/product_images/uploaded_images/bimini-top-width-200x148.jpg">Measured at mounting widths</a></li>');
            }

       if (~window.location.href.indexOf('wise-')) {
            $('.productOptionPickListSwatch ul').append('<li style="float: right; margin-right: 6px;"><a href="http://stowaway2.wufoo.com/forms/s1xuo97i1s7alw7/" target="_blank"><strong>Request Fabric Samples</strong></a></li>');
        }

});

// This function adds text about Quantity for fenders/buoys sold by the case - Emily 8/4/17

$(function() {
    var CaseProducts = ['a-5c','-a6c', '-a7c'],
        Case4Fenders = ['htm-1c', 'htm-2c', 'htm-3c', 'htm-4c', 'g-1c', 'g-2c', 'g-3c', 'g-4c', 'g-5c', 'g-6c', 'f-02c', 'f-1c', 'f-2c', 'f-3c', 'f-8c', 'f-11c', 'f-10c', 'f-13c', 'f-4c', 'f-5c', 'f-6c', 'f-7c'],
        URL = window.location.href,
        i;
    //for buoys:
    for (i = 0; i < CaseProducts.length; i++) {
        if (URL.indexOf(CaseProducts[i]) > 0) {
          if (~window.location.href.indexOf('a-5c')) {
            $('.AddCartButton').append('<br><div class="case-pack" style="margin-right: 0px;"><strong>Case Pack = 5 buoys</strong></div>');
          }else if (~window.location.href.indexOf('-a6c')) {
            $('.AddCartButton').append('<br><div class="case-pack" style="margin-right: 0px;"><strong>Case Pack = 3 buoys</strong></div>');
          }else if (~window.location.href.indexOf('-a7c')) {
            $('.AddCartButton').append('<br><div class="case-pack" style="margin-right: 0px;"><strong>Case Pack = 2 buoys</strong></div>');
          }
          //adding text to Quantity label for all case packs
          $('.QuantityInput').append('<div style="margin-left: 0px;">(Case Packs)</div>');
        }
    }

    //for fenders:
    for (i = 0; i < Case4Fenders.length; i++) {
        if (URL.indexOf(Case4Fenders[i]) > 0) {
           if (~window.location.href.indexOf('f-11c')) {
              $('.AddCartButton').append('<br><div class="case-pack" style="margin-right: 0px;"><strong>Case Pack = 3 fenders</strong></div>');
           } else if (~window.location.href.indexOf('f-10c')||~window.location.href.indexOf('f-13c')||~window.location.href.indexOf('f-4c')||~window.location.href.indexOf('f-5c')||~window.location.href.indexOf('f-6c')||~window.location.href.indexOf('f-7c')) {
              $('.AddCartButton').append('<br><div class="case-pack" style="margin-right: 0px;"><strong>Case Pack = 2 fenders</strong></div>');
           } else {
              $('.AddCartButton').append('<br><div class="case-pack" style="margin-right: 0px;"><strong>Case Pack = 4 fenders</strong></div>');
              //if (~window.location.href.indexOf('f-1c')) {
                 // $('.productAttributeConfigurablePickListProduct').append('<br><div class="case-pack" style="margin-right: 0px;"><strong>* 1 set holds 2 //fenders</strong></div>');
              //}
           }
//adding text to Quantity label for all case packs
          $('.QuantityInput').append('<div style="margin-left: 0px;">(Case Packs)</div>');
        }
    }
}); //end function

// This function collapses the product attributes on product list pages when the viewport is less than 768 pixels wide.
$(window).load(function() {
    if ($(window).width() < 768) {
        $('a.facet_title').removeClass('open');
        $('ul.element_container').css('display', 'none');
    }
});


// This function adds "Fabric Quick Guide" and "Compare Brands" buttons to bimini finder results pages, as well as a box showing the Sunbrella logo and a few key features of the fabric
$(window).load(function() {
    if (window.location.href.indexOf('bimini_finder_widths') > 0 || window.location.href.indexOf('ymm_bimini_tops') > 0) {
        $('div#searchspring-options > h3').before().load('/content/misc-html/bimini-finder-results-top-banner.html');
    }
    if (~window.location.href.indexOf('ymm_carver_cover') || ~window.location.href.indexOf('ymm_westland_cover')) {
        $('div#searchspring-options > h3').before().load('/content/misc-html/cover-finder-results-top-banner.html');
    }
});

// This function powers the manual sliders in use on brand pages, etc.
$(function() {
    var slideWidth,
        animationSpeed = 400,
        $prevArrow = $('.prevArrow'),
        $nextArrow = $('.nextArrow'),
        sliderNumber,
        numberSlides,
        $slider,
        $slideContainer,
        $slides,
        lastClicked = 0;

    function init(sliderNum, numSlides) {
        slideWidth = parseInt($('.slideOf' + numSlides).css('width').replace('px', ''), 10);
        $slider = $('#sliderArea' + sliderNum);
        $slideContainer = $slider.find('.slideList' + numSlides);
        $slides = $slideContainer.find('.slideOf' + numSlides);
    }

    function moveSlide(direction) {
        var slideToMove;
        if (direction === 'left') {
            slideToMove = $slides.length - 1;
            $slideContainer.prepend($slides[slideToMove]);
            $slideContainer.css('margin-left', '-' + slideWidth * 2 + 'px');
            $slideContainer.animate({
                'margin-left': '+=' + slideWidth
            }, animationSpeed);
        } else if (direction === 'right') {
            slideToMove = 0;
            $slideContainer.append($slides[slideToMove]);
            $slideContainer.css('margin-left', '0px');
            $slideContainer.animate({
                'margin-left': '-=' + slideWidth
            }, animationSpeed);
        } else {
            return false;
        }
    }

    $prevArrow.click(function() {
        if (Date.now() - lastClicked < animationSpeed + 50) {
            return;
        }
        lastClicked = Date.now();
        sliderNumber = $(this).attr('id').replace('prevArrow', '');
        numberSlides = $('#sliderArea' + sliderNumber).find('ul').attr('class').replace('slideList', '');
        init(sliderNumber, numberSlides);
        moveSlide('left');
    });
    $nextArrow.click(function() {
        if (Date.now() - lastClicked < animationSpeed + 50) {
            return;
        }
        lastClicked = Date.now();
        sliderNumber = $(this).attr('id').replace('nextArrow', '');
        numberSlides = $('#sliderArea' + sliderNumber).find('ul').attr('class').replace('slideList', '');
        init(sliderNumber, numberSlides);
        moveSlide('right');
    });
});

// These two functions make sure the correct price is displayed for the Mallard View Outdoors Ice-eater stand combo package
$(window).load(function() {
    if ($('div.item a[href="http://www.savvyboater.com/powerhouse-ice-eater-shallow-water-stand-package/"]').length) {
        var interval,
            cycle;
        $('div.item').has('a[href="http://www.savvyboater.com/powerhouse-ice-eater-shallow-water-stand-package/"]').find('em').text('$709.95');
        $('li').click(function() {
            cycle = 0;
            interval = setInterval(function() {
                $('div.item').has('a[href="http://www.savvyboater.com/powerhouse-ice-eater-shallow-water-stand-package/"]').find('em').text('$709.95');
                cycle++;
                if (cycle > 7) {
                    clearInterval(interval);
                }
            }, 100);
        });
    }
});

$(function() {
    if ($('.ProductDetails strong a[href="https://www.savvyboater.com/powerhouse-ice-eater-shallow-water-stand-package/"]').length) {
        var sarah = $('.ProductList li').has('a[href="https://www.savvyboater.com/powerhouse-ice-eater-shallow-water-stand-package/"]'),
            jack = sarah.find('em'),
            frank = jack.html().replace("$524.01", "$709.95");
        jack.html(frank);
    }
});

//This function adds explanation text to the bottom of the first boat cover image on product pages,specifying that the image is just an example.
$(function() {
    var firstImage = $('.zoomPad img:first-child').attr('src'),
        currentImage;

    if (~window.location.href.indexOf("-custom-boat-cover-") || ~window.location.href.indexOf("-specialty-boat-cover-") || ~window.location.href.indexOf("-universal-boat-cover-")) {
        $('.zoomPad').append('<span id="coverImageExample">This is an example and not the actual cover you will receive</span>');
        $('.ProductTinyImageList').mouseover(function() {
            currentImage = $('.zoomPad img:first-child').attr('src');
            if (currentImage === firstImage && !$('span#coverImageExample').length) {
                $('.zoomPad').append('<span id="coverImageExample">This is an example and not the actual cover you will receive</span>');
            }
        });
    }
});

// This function adds a free DeckMate message to boat covers in the cart between start and end dates.
/*
$(function () {
    var startDate = "November 25, 2015",
        endDate = "December 1, 2015";
    if (~window.location.href.indexOf('/cart.php') && Date.now() > Date.parse(startDate) && Date.now() < Date.parse(endDate)) {
        var prodNameURLs = [],
            covers = ['westland-semi-custom-boat-cover', 'westland-custom-boat-cover', 'westland-pwc-cover', 'carver-custom-boat-cover', 'carver-semi-custom-boat-cover', 'carver-specialty-boat-cover', 'carver-universal-boat-cover', 'carver-pwc-pwc-cover'],
            i, f;

        for (i = 0; i < $('.ProductName > a:first-child').length; i++) {
            prodNameURLs[i] = $('.ProductName:eq(' + i + ') > a:first-child').attr('href');
        }

        for (i = 0; i < covers.length; i++) {
            for (f = 0; f < prodNameURLs.length; f++) {
                if (~prodNameURLs[f].indexOf(covers[i])) {
                    console.log('matches ' + prodNameURLs[f]);
                    $('.ProductName:eq(' + f + ')').append('<br /><span>Includes Free DeckMate tool (ships separately)</span>');
                    break;
                }
            }
        }
    }
});
*/

// This script changes the chat icon displayed in the "prodListPageContact" area based on which icon is shown in the top menu area
$(window).load(function() {
    var mode = $('#scpiki > a > img').attr('src'),
        icon = $('.prodListPageContact > a:nth-child(3) > img');
    if (icon.length) {
        if (~mode.indexOf('online')) {
            icon.attr('src', '/content/images/subcategory-pages/chat-icon-online.png');
        } else if (~mode.indexOf('offline')) {
            icon.attr('src', '/content/images/subcategory-pages/chat-icon-offline.png');
        }
    }
});

// This function adds a little bit of text and a button above the features box on Ice Eater and De-icer pages to give customers who land on a product page from AdWords the option to see all the models in that brand.
/*
$(function() {
    var contentKasco = '<div class="goToAllDeIcers"><span class="redText">Looking for a<br>different model?</span><a href="/kasco-de-icers/">Shop All<br>Kasco De-Icers</a></div>',
        contentPowerHouse = '<div class="goToAllDeIcers"><span class="redText">Looking for a<br>different model?</span><a href="/power-house-ice-eaters/">Shop All Power House Ice Eaters</a></div>';

    if(~document.location.href.indexOf("/kasco-deicer-")){
        $('.ProductMain').prepend(contentKasco);
    } else if (~document.location.href.indexOf("/powerhouse-ice-eater-")){
        $('.ProductMain').prepend(contentPowerHouse);
    }
});
*/

/***************
*    Stock     *
*  Functions   *
****************


 ===== ===== |====
   |     |   |
   |     |   |===
|  |     |   |
\==/   ===== |


//This function replaces the availability mesasge for Carver products over the holiday closure (expires Jan. 4, 2016) */
/*
$(function () {
    var $availabilityMessage = $('div.ProductDetailsGrid div.ShippingRow + div.DetailRow > div.Label + div.Value'),
        expires = 'January 4, 2016';

    if (~window.location.href.indexOf('carver-') && $availabilityMessage !== undefined && Date.now() < Date.parse(expires)) {
        $availabilityMessage.html('Warehouse closed over the holidays.<br>Orders will be processed beginning Jan. 4');
    }
});
*/

//This function replaces the availability message for select ladder SKUs which are currently out of stock. It will automatically stop doing so once the dates have been reached.
$(function() {
    // Check to see that we're on a Jif product page
    if (window.location.href.indexOf('jif-') >= 0) {
        var SKUs = [],
            // Variable to hold the SKU displayed on the page
            SKU,
            newMessage = 'Currently out of stock',
            // what's displayed by default (this is needed to change the message back when options are clicked that change the displayed SKU)
            oldMessage = 'Leaves warehouse in 1-2 business days',
            interval,
            i,
            //JQuery selector cache
            $availabilityMessage = $('div.ProductDetailsGrid div.ShippingRow + div.DetailRow > div.Label + div.Value'),
            $quantityInput = $('.QuantityInput'),
            $addCartButton = $('.AddCartButton'),
            //get SKUs from jif.txt
            loadData = new Promise(function(resolve) {
                $.get('/template/js/jif.txt', dataType = "text", function(result) {
                    // PKT: Updated 2017-10-08 by PKT-JW
                    // PKT: manual parsing of data was not working properly.
                    // PKT: Changed to use JSON.parse built into JavaScript.
                    //SKUs = result.replace(/[\[: :':\n:\]]/g, '').split(',');
                    SKUs = JSON.parse(result);
                    resolve();
                });
            }),

            // This function replaces the availability message depending on what SKU is displayed on the page
            replaceJifAvailability = function() {
                // set the SKU variable with the value displayed on the page, removing all white space and line breaks
                SKU = $('span.VariationProductSKU').html().replace(/\s/g, '');
                // run the loop as many times as there are SKUs in the longest list
                for (i = 0; i < SKUs.length; i++) {
                    // check today's date against the expected in-stock date for list 1, and if there's a matching SKU in list 1
                    if (SKU === SKUs[i]) {
                        // replace the availability message with the new one & appropriate date
                        $availabilityMessage.html(newMessage);
                        $quantityInput.hide();
                        $addCartButton.hide();
                        // if this code ran, break out of the loop
                        break;
                    } else {
                        // make sure the availability message is the original
                        $availabilityMessage.html(oldMessage);
                        $quantityInput.show();
                        $addCartButton.show();
                        // (this is necessary because of product options changing the SKU)
                    }
                }
            };

        // Run the function when the page first loads in case the default SKU is a match
        loadData.then(function() {
            replaceJifAvailability();

            // Run the function every time there is a state change on the input with the class 'validation' (Product Options)
            $('input.validation').change(function() {
                interval = setInterval(function() {
                    if (SKU !== $('span.VariationProductSKU').text().replace(/\s/g, '')) {
                        replaceJifAvailability();
                        clearInterval(interval);
                    }
                }, 100);
            });
        }).catch(console.log.bind(console));
    }
    // That's all folks!
});

/*

|          | ===== /==\ |====
 \   /\   /    |   |    |
  | |  | |     |   \==\ |===
  \ /  \ /     |      | |
   |    |    ===== \==/ |====

*/
//This function replaces the availability message for select Wise seat SKUs which are currently out of stock.
$(function() {
    if (window.location.href.indexOf('wise-') >= 0) {
        // Above condition checks to see that we're on a Wise product page
        // Below we declare variables, SKUs is the list ones out of stock
        var SKUs = [];
        // Get SKUs from wise.txt
        var loadData = new Promise(function(resolve) {
            $.get('/template/js/wise.txt', dataType = "text", function(result) {
              // PKT: Updated 2017-10-08 by PKT-JW
              // PKT: manual parsing of data was not working properly.
              // PKT: Changed to use JSON.parse built into JavaScript.
              // SKUs = result.replace(/[\[: :':\n:\]]/g, '').split(',');
              SKUs = JSON.parse(result);
                resolve();
            });
        });
        var SKU,
            newMessage = 'This Color Is Currently Out of Stock',
            oldMessage = 'Leaves warehouse in 7-10 business days',
            $availabilityMessage = $('div.ProductDetailsGrid div.ShippingRow + div.DetailRow > div.Label + div.Value'),
            interval,
            i,

            replaceWiseAvailability = function() {
                // Grab the currently displayed SKU and take out any spaces
                SKU = $('span.VariationProductSKU').text().replace(/\s/g, '');
                // loop through the values in the SKUs array
                for (i = 0; i < SKUs.length; i++) {
                    // if the SKUs match, change the message
console.log(SKU);
                    if (SKU === SKUs[i]) {
console.log('SKU matched');
                        $availabilityMessage.text(newMessage);
                        $('.QuantityInput').hide();
                        $('.AddCartButton').hide();
                        break;
                        // if the SKUs don't match, make sure the original message is displayed
                    } else {
console.log('SKU not matched');
                        $availabilityMessage.text(oldMessage);
                        $('.QuantityInput').show();
                        $('.AddCartButton').show();
                    }
                }
            };
        // run the function once when the page loads
        loadData.then(function() {
            replaceWiseAvailability();


            // run the function whenever a product option is selected, but delay for a second, since we have to give BigCommerce time to update the SKU before we check it.
            $('input.validation').change(function() {
                interval = setInterval(function() {
                    if (SKU !== $('span.VariationProductSKU').text().replace(/\s/g, '')) {
                        replaceWiseAvailability();
                        clearInterval(interval);
                    }
                }, 100);
            });
        }).catch(console.log.bind(console));
    }
});

/*

/==\   /==\  |        |    /==\
|     /    \ |       / \   |
\==\  |    | |      |---|  \==\
   |  \    / |      |   |     |
\==/   \==/  |==== /     \ \==/

*/
//This function replaces the availability message for select Solas prop SKUs which are currently out of stock.
$(function() {
    if (window.location.href.indexOf('Solas-') >= 0 || window.location.href.indexOf('solas-prop-') >= 0) {

        // Above condition checks to see that we're on a Solas product page
        // Below we declare variables, SKUs is the list ones out of stock
        var SKUs = [];
        // Get SKUs from solas.txt
        var loadData = new Promise(function(resolve) {
            $.get('/template/js/solas.txt', dataType = "text", function(result) {
              // PKT: Updated 2017-10-08 by PKT-JW
              // PKT: manual parsing of data was not working properly.
              // PKT: Changed to use JSON.parse built into JavaScript.
              // SKUs = result.replace(/[\[: :':\n:\]]/g, '').split(',');
              SKUs = JSON.parse(result);
                resolve();
            });
        });

        var SKU,
            newMessage = 'This product is currently out of stock',
            oldMessage = 'Leaves warehouse within 1-2 business days',
            $availabilityMessage = $('div.ProductDetailsGrid div.ShippingRow + div.DetailRow > div.Label + div.Value'),
            interval,
            i,

            replaceSolasAvailability = function() {

              // PKT: Added 2017-10-10 by PKT-JW
              // PKT: Array to handle dual SKUs in Solas.
              var arrDualSku = [];

              // Grab the currently displayed SKU and take out any spaces
              SKU = $('span.VariationProductSKU').text().replace(/\s/g, '');

              // PKT: Check to see if this is a dual sku.
              if (SKU.indexOf("&") > -1) {

                // PKT: Split and place into array.
                arrDualSku = SKU.split("&");
              }
              else {

                // PKT: Just use first item in array and make second blank.
                arrDualSku[0] = SKU;
                arrDualSku[1] = "";
              }

                // loop through the values in the SKUs array
                for (i = 0; i < SKUs.length; i++) {

                  // replace quotations.
                  SKUs[i].replace(/["']/g, "");

                    // if the SKUs match, change the message
                    // PKT: Updated 2017-10-07 by PKT-JW
                    // PKT: Replaced the quotes in the string since was interpreting as
                    // PKT: different data types.
                    // PKT: Updated 2017-10-10 by PKT-JW
                    // PKT: Code in this function was not handling dual SKUs.
                    // if (SKU == SKUs[i].replace(/["']/g, "")) {
                    if ((arrDualSku[0] == SKUs[i]) ||
                      ((arrDualSku[1] != "") && (arrDualSku[1] == SKUs[i]))) {

                        $availabilityMessage.text(newMessage);
                        $('.QuantityInput').hide();
                        $('.AddCartButton').hide();
                        $('.productAddToCartRight').hide();
                        break;
                        // if the SKUs don't match, make sure the original message is displayed
                    } else {

                        $availabilityMessage.text(oldMessage);
                        $('.QuantityInput').show();
                        $('.AddCartButton').show();
                        $('.productAddToCartRight').show();
                    }
                }
            };
        // run the function once when the page loads
        loadData.then(function() {
            replaceSolasAvailability();


            // run the function whenever a product option is selected, but delay for a second, since we have to give BigCommerce time to update the SKU before we check it.
            $('input.validation').change(function() {
                interval = setInterval(function() {
                    if (SKU !== $('span.VariationProductSKU').text().replace(/\s/g, '')) {
                        replaceSolasAvailability();
                        clearInterval(interval);
                    }
                }, 100);
            });
        }).catch(console.log.bind(console));
    }
});

/************************
 *                      *
 *         SALE         *
 *        BANNERS       *
 *         CODE         *
 *                      *
 ************************/


// Add sale banners for Carver Boat Covers
/*
$(function() {
    var appearNarrow = ['carver-semi-custom-boat-cover', 'carver-universal-boat-cover', 'carver-custom-boat-cover', 'carver-specialty-boat-cover', 'carver-pwc-pwc-cover'],
        contentNarrow = '<div class="saleBannerNarrow">BLACK FRIDAY SALE! 25% Off Carver Boat Covers</div><div class="saleExplanationNarrow">Use Coupon Code "BFCOVERS25" in Cart</div>',
        URL = window.location.href,
        i,
        appearWidest = ['semi-custom-specialty-covers'],
        contentWidest = '<div class="saleBannerWidest">BLACK FRIDAY SALE! 25% Off Carver Boat Covers</div><div class="saleExplanation">Use Coupon Code "BFCOVERS25" in Cart</div>';

    for (i = 0; i < appearWidest.length; i++) {
        if (URL.indexOf(appearWidest[i]) >= 0) {
            $('.coversByStyle .CategoryDescription').after(contentWidest);
        }
    }

    for (i = 0; i < appearNarrow.length; i++) {
        if (URL.indexOf(appearNarrow[i]) >= 0) {
            $('div.ProductThumb').prepend(contentNarrow);
        }
    }
});

$(window).load(function() {
    var appearWide = ['ymm_carver_cover', 'aluminum-fishing-boat-covers', 'bay-style-boat-covers', 'bass-boat-covers', 'covers-for-boats-with-towers', 'cruiser-boat-covers', 'cuddy-cabin-boat-covers', 'deck-boat-covers', 'drift-boat-covers', 'inflatable-boat-covers', 'covers-for-jet-boats-pwcs-paddle-boats-dinghys', 'jon-boat-covers', 'pontoon-boat-covers', 'runabouts-v-hull-tri-hull-boat-covers', 'tournament-ski-boat-covers', 'v-hull-fishing-boat-covers', 'whaler-style-boat-covers'],
        contentWide = '<div class="saleBannerWide">BLACK FRIDAY SALE! 25% Off Carver Boat Covers</div><div class="saleExplanation">Use Coupon Code "BFCOVERS25" in Cart</div>',
        URL = window.location.href,
        i;

    for (i = 0; i < appearWide.length; i++) {
        if (URL.indexOf(appearWide[i]) >= 0) {
            $('div#LayoutColumn2').prepend(contentWide);
        }
    }
});
*/

// Add Sale Banners for Solas Props
/*
$(function() {
    var appearNarrow = ['Solas-'],
        contentNarrow = '<div class="saleBannerNarrow">Sale! Additional 10% Off Our Price</div><div class="saleExplanationNarrow">Use Coupon Code "SOLAS10" in Cart</div>',
        URL = window.location.href,
        i;

    for (i = 0; i < appearNarrow.length; i++) {
        if (~URL.indexOf(appearNarrow[i])) {
            $('div.ProductMain').prepend(contentNarrow);
        }
    }
});

$(window).load(function() {
    var appearWide = ['props_outboard_hierarchy', 'props_sterndrive_hierarchy'],
        contentWide = '<div class="saleBannerWide">Sale! 10% Off Solas Propellers</div><div class="saleExplanation">Use Coupon Code "SOLAS10" in Cart</div>',
        URL = window.location.href,
        isSolas = $('a.option_link[title="Solas"]').html(),
        i;

    for (i = 0; i < appearWide.length; i++) {
        if (URL.indexOf(appearWide[i]) >= 0 && isSolas !== null) {
            $('div#LayoutColumn2').prepend(contentWide);
        }
    }
});
*/

// Add Sale Banners for Wise Seats
/*
$(function() {
    var appearNarrow = ['/wise-folding-bass-boat-seat-3313/', '/wise-folding-bass-boat-seat-8wd418/', '/wise-low-back-folding-seat-734pls/', '/wise-folding-bass-boat-seat-wd717/', '/wise-low-back-folding-fishing-seat-camo-618pls/', '/wise-weekender-bucket-boat-seat-wd1129/', '/wise-contemporary-bucket-boat-seat-traditional-wd1127/', '/wise-weekender-back-to-back-seat-wd1130/',  '/wise-back-to-back-boat-seat-wd707p-1/', '/wise-offshore-folding-deck-chair-marlin-logo-wd119/'],
        contentNarrow = '<div class="saleBannerNarrow">SUMMER SPECIAL! 5% Off Select Wise Seats</div><div class="saleExplanationNarrow">Use Coupon Code: WISESALE</div>',
        URL = window.location.href,
        i;

    for (i = 0; i < appearNarrow.length; i++) {
        if (URL.indexOf(appearNarrow[i]) >= 0) {
            $('div.ProductMain').prepend(contentNarrow);
        }
    }
});

$(window).load(function() {
    var appearWide = ['/boat-seats/'],
        contentWide = '<div class="saleBannerWide">SUMMER SPECIAL! 5% Off Select Wise Seats - WISESALE</div>',
        URL = window.location.href,
        i;

    for (i = 0; i < appearWide.length; i++) {
        if (URL.indexOf(appearWide[i]) >= 0) {
            $('div#LayoutColumn2').prepend(contentWide);
        }
    }
});
*/

// Add Sale Banners for Polyform F series buoys
/*
$(function() {
    var contentNarrow = '<div class="saleBannerNarrow">10% Off Polyform F Series Fenders</div><div class="saleExplanationNarrow">Use Coupon Code "POLYF10" in Cart</div>',
        URL = window.location.href;

    if (/http.*\/\/www\.savvyboater\.com\/polyform-boat-fender-f-(02|1|2|3|4|5|6|7|8|9|10|11|12|13)\//.test(URL)) {
        $('div.ProductThumb').prepend(contentNarrow);
    }
});

$(window).load(function() {
    var appearWide = ['/boat-fenders/', 'search.php?q=polyform', 'search.php?q=Polyform', 'search.php?q=fender'],
        contentWide = '<div class="saleBannerWide">10% Off Polyform F Series Fenders</div><div class="saleExplanation">Use Coupon Code "POLYF10" in Cart</div>',
        URL = window.location.href,
        isF = $('a.option_link[title="Polyform F Series"]').html(),
        i;

    for (i = 0; i < appearWide.length; i++) {
        if (URL.indexOf(appearWide[i]) >= 0 && isF !== null) {
            $('div#LayoutColumn2').prepend(contentWide);
        }
    }
});
*/

// Add Sale Banners for Polyform A series buoys
/*
$(function() {
    var contentNarrow = '<div class="saleBannerNarrow">BLACK FRIDAY SALE! 20% Off Polyform A Series Buoys with a $100 min purchase</div><div class="saleExplanationNarrow">Use Coupon Code "BFASERIES" in Cart</div>',
        URL = window.location.href;

    if ('https://www.savvyboater.com/polyform-buoy-a1') {
        $('div.ProductThumb').prepend(contentNarrow);
    }
});

$(window).load(function() {
    var appearNarrow = ['polyform-buoy-a1', 'polyform-buoy-a2', 'polyform-buoy-a3', 'polyform-buoy-a4', 'polyform-buoy-a5', 'polyform-buoy-a6', 'polyform-buoy-a7'],
        contentNarrow = '<div class="saleBannerWide">DECEMBER SALE! 20% Off Polyform A Series Buoys with a $100 min purchase</div><div class="saleExplanation">Use Coupon Code "BFASERIES" in Cart</div>',
        URL = window.location.href,
        //isF = $('a.option_link[title="Polyform A Series"]').html(),
        i;

    for (i = 0; i < appearNarrow.length; i++) {
        if (URL.indexOf(appearNarrow[i]) >= 0) {
            $('div.ProductThumb').prepend(contentNarrow);
        }
    }
});

$(window).load(function () {
    var appearWide = ['buoys'],
        contentWide = '<div class="saleBannerWide">BLACK FRIDAY SALE! 20% Off Polyform A Series Buoys with a $100 min purchase</div><div class="saleExplanation">Use Coupon Code "BFASERIES" in Cart</div>',
       URL = window.location.href,
        i;

    for (i = 0; i < appearWide.length; i++) {
        if (URL.indexOf(appearWide[i]) >= 0) {
            $('div#LayoutColumn2').prepend(contentWide);
        }
    }
});*/


// Add Sale Banners for Jif Ladders
/*
$(function () {
    var appearNarrow = ['jif-emergency-reboarding-ladder', 'jif-compact-ladder', 'jif-transom-ladder', 'jif-compact-transom-ladder', 'jif-over-platform-telescoping-boat-ladder', 'jif-aluminum-gunwale-hook-ladder', 'jif-stainless-steel-gunwale-hook-ladder', 'jif-contour-boat-ladder', 'jif-sport-dive-ladder', 'jif-dock-ladder', 'jif-four-step-folding-ladder', 'jif-folding-pontoon-ladder', 'jif-4-step-folding-deck-ladder', 'jif-under-deck-pontoon-ladder', 'jif-pontoon-boarding-ramp', 'jif-removable-folding-pontoon-ladder', 'jif-premium-rear-entry-ladder', 'jif-pontoon-transom-boarding-ladder', 'jif-4-step-boarding-ladder', 'jif-4-step-telescoping-pontoon-ladder', 'jif-removable-telescoping-pontoon-ladder', 'jif-dmw-telescoping-drop-ladder', 'jif-dmx-telescoping-drop-ladder', 'jif-platform-ladder-step', 'jif-under-platform-telescoping-drop-ladder', 'jif-3-step-locking-side-mount-telescoping-ladder', 'jif-3-step-under-platform-sliding-ladder', 'jif-ob-transom-platform-ladder', 'jif-ob-transom-platform-bottom-mounted-ladder', 'jif-ob-transom-platform-top-mounted-ladder', 'jif-telescoping-gunwale-hook-ladder', 'jif-aluminum-stationary-dock-ladder', 'jif-stainless-steel-stationary-dock-ladder', 'jif-dock-lif-ladder', 'jif-hinged-dock-ladder', 'jif-io-transom-plate', 'jif-io-transom-platform-ladder', 'jif-io-transom-platform-top-mounted-ladder', 'jif-io-transom-platform-bottom-mounted-ladder'],
        contentNarrow = '<div class="saleBannerNarrow">Sale! Additional 10% Off Our Price</div><div class="saleExplanationNarrow">Use coupon code "JIF10" in cart</div>',
        URL = window.location.href,
        i;

    for (i = 0; i < appearNarrow.length; i++) {
        if (URL.indexOf(appearNarrow[i]) >= 0) {
            $('div.ProductMain').prepend(contentNarrow);
        }
    }
});

$(window).load(function () {
    var appearWide = ['boat-ladders', 'pontoon-boat-ladders', 'gunwale-ladders', 'swim-platform-ladders', 'transom-boat-ladders', 'dive-ladders', 'dock-ladders', 'q=Jif+Ladder'],
        contentWide = '<div class="saleBannerWide">Sale! Additional 10% off Jif Ladders</div><div class="saleExplanation">Use coupon code "JIF10" in cart</div>',
        URL = window.location.href,
        i;

    var afterHttp = (window.location.href).split('https://')[1];
    var newArr = afterHttp.split('/');
    for (i = 0; i < newArr.length; i++) {
       if(jQuery.inArray(newArr[i], appearWide) !== -1){
        $('div#LayoutColumn2').prepend(contentWide);
       }
    }
});
*/
/*
// Add sale banners for Westland Boat Covers
$(function() {
    var appearWidest = ['semi-custom-specialty-covers'],
        // appearNarrow = ['westland-semi-custom-boat-cover', 'westland-custom-boat-cover'], // Because we did just Sunbrella in custom covers for a previous sale, I'm using regex down in the if statement below to check the URL
        contentWidest = '<div class="saleBannerWidest">Sale! 15% Off Westland Boat Covers</div><div class="saleExplanation">Use Coupon Code "WESTCOVER15" in Cart</div>',
        contentNarrow = '<div class="saleBannerNarrow">Sale! Additional 15% Off Our Price</div><div class="saleExplanationNarrow">Use Coupon Code "WESTCOVER15" in Cart</div>',
        URL = window.location.href,
        i;

    for (i = 0; i < appearWidest.length; i++) {
        if (URL.indexOf(appearWidest[i]) >= 0) {
            $('.coversByStyle .CategoryDescription').after(contentWidest);
        }
    }
    // for (i = 0; i < appearNarrow.length; i++) { // The structure of this is a little different from normal, because a previous sale only applied to Sunbrella in custom covers, and it was easier to slightly change this than put it back to normal.
    if (/http.*\/\/www\.savvyboater\.com\/westland-custom-boat-cover-.*\//.test(URL) || /http.*\/\/www\.savvyboater\.com\/westland-semi-custom-boat-cover-.*\//.test(URL)) {
        $('div.ProductThumb').prepend(contentNarrow);
    }
    // }
});

$(window).load(function() {
    var appearWide = ['ymm_westland_cover'],
        appearWide2 = ['aluminum-fishing-boat-covers', 'bay-style-boat-covers', 'bass-boat-covers', 'covers-for-boats-with-towers', 'cruiser-boat-covers', 'cuddy-cabin-boat-covers', 'deck-boat-covers', 'drift-boat-covers', 'inflatable-boat-covers', 'covers-for-jet-boats-pwcs-paddle-boats-dinghys', 'jon-boat-covers', 'pontoon-boat-covers', 'runabouts-v-hull-tri-hull-boat-covers', 'tournament-ski-boat-covers', 'v-hull-fishing-boat-covers', 'whaler-style-boat-covers'],
        contentWide = '<div class="saleBannerWide">Sale! Additional 15% Off Westland Boat Covers</div><div class="saleExplanation">Use Coupon Code "WESTCOVER15" in Cart</div>',
        contentWide2 = '<div class="saleBannerWide">Sale! 15% Off Westland Boat Covers</div><div class="saleExplanation">Use Coupon Code "WESTCOVER15" in Cart</div>',
        URL = window.location.href,
        isWestland = $('a.option_link[title="Westland"]').html(),
        i;

    for (i = 0; i < appearWide.length; i++) {
        if (URL.indexOf(appearWide[i]) >= 0) {
            $('div#LayoutColumn2').prepend(contentWide);
        }
    }

    for (i = 0; i < appearWide2.length; i++) {
        if (URL.indexOf(appearWide2[i]) >= 0 && isWestland !== null) {
            $('div#LayoutColumn2').prepend(contentWide2);
        }
    }
});

// Add Sale Banners for Westland Bimini Tops
$(function() {
    var appearNarrow = ['westland-bimini-top'],
        contentNarrow = '<div class="saleBannerNarrow">Sale! Additional 15% Off Our Price</div><div class="saleExplanationNarrow">Use Coupon Code "WESTTOP15" in Cart</div>',
        URL = window.location.href,
        i;

    for (i = 0; i < appearNarrow.length; i++) {
        if (URL.indexOf(appearNarrow[i]) >= 0) {
            $('div.ProductThumb').prepend(contentNarrow);
        }
    }
});

$(window).load(function() {
    var appearWide = ['ymm_bimini_tops', 'bimini_finder_widths'],
        contentWide = '<div class="saleBannerWide">Sale! 15% Off Westland Bimini Tops</div><div class="saleExplanation">Use Coupon Code "WESTTOP15" in Cart</div>',
        URL = window.location.href,
        isWestland = $('a.option_link[title="Westland"]').html(),
        i;

    for (i = 0; i < appearWide.length; i++) {
        if (URL.indexOf(appearWide[i]) >= 0 && isWestland !== null) {
            $('div#LayoutColumn2').prepend(contentWide);
        }
    }
});*/

/*
// Add Sale Banners for Garelick Ladders
$(function () {
    var appearNarrow = ['garelick-compact-transom-ladder', 'garelick-pontoon-swim-ladder', 'garelick-folding-pontoon-deck-ladder', 'garelick-original-gunwale-eez-in-hook-ladder', 'garelick-latch-type-boarding-ladder', 'garelick-eez-in-', 'garelick-over-platform-telescoping-drop-ladder', 'garelick-under-platform-sliding-ladder', 'garelick-outboard-', 'garelick-flip-up-dock-raft-ladder', 'garelick-io-swim-', 'garelick-inflatable-boat-ladder', 'garelick-sport-dive-ladder', 'garelick-bass-boat-transom-ladder', 'garelick-swinger-pontoon-boarding-ladder'],
        contentNarrow = '<div class="saleBannerNarrow">Sale! Additional 15% Off Our Price</div><div class="saleExplanationNarrow">Use coupon code "GARELICK15" in cart</div>',
        URL = window.location.href,
        i;

    for (i = 0; i < appearNarrow.length; i++) {
        if (URL.indexOf(appearNarrow[i]) >= 0) {
            $('div.ProductMain').prepend(contentNarrow);
        }
    }
});

$(window).load(function () {
    var appearWide = ['pontoon-boat-ladders', 'gunwale-ladders', 'swim-platform-ladders', 'transom-boat-ladders', 'dive-ladders', 'dock-ladders', 'q=Garelick+Ladder'],
        contentWide = '<div class="saleBannerWide">Sale! Additional 15% off Garelick Ladders</div><div class="saleExplanation">Use coupon code "GARELICK15" in cart</div>',
        URL = window.location.href,
        i;

    for (i = 0; i < appearWide.length; i++) {
        if (URL.indexOf(appearWide[i]) >= 0) {
            $('div#LayoutColumn2').prepend(contentWide);
        }
    }
});
*/
/*
// Add Sale Banners for Taylor Made Tuff-End buoys
$(function () {
    var appearNarrow = ['-tuff-end-'],
        contentNarrow = '<div class="saleBannerNarrow">10% Off $100+ Orders</div><div class="saleExplanationNarrow">Use Coupon Code "TUFFEND10"</div>',
        URL = window.location.href,
        i;

    for (i = 0; i < appearNarrow.length; i++) {
        if (URL.indexOf(appearNarrow[i]) >= 0) {
            $('div.ProductMain').prepend(contentNarrow);
        }
    }
});

$(window).load(function () {
    var appearWide = ['/buoys/', 'search.php?q=buoy', 'search.php?q=fender', '/boat-fenders/', 'search.php?q=Tuff+End'],
        contentWide = '<div class="saleBannerWide">Sale! 10% Off Taylor Made Tuff-End Buoys &amp; Fenders</div><div class="saleExplanation">On orders of $100+ Use Coupon Code "TUFFEND10" in Cart</div>',
        URL = window.location.href,
        i;

    for (i = 0; i < appearWide.length; i++) {
        if (~URL.indexOf(appearWide[i])) {
            $('div#LayoutColumn2').prepend(contentWide);
        }
    }
});
*/
/*
// Add Sale Banners for All Bimini Tops
$(function () {
    var appearNarrow = ['westland-bimini-top-sunbrella', 'carver-bimini-top-sunbrella', 'carver-pontoon-bimini-top-sunbrella', 'carver-tower-bimini-top'],
        contentNarrow = '<div class="saleBannerNarrow">Sale! Additional 15% Off Our Price</div><div class="saleExplanationNarrow">Use Coupon Code "BIMINI15" in Cart</div>',
        URL = window.location.href,
        i;

    for (i = 0; i < appearNarrow.length; i++) {

        // There are some Bimini accessories we want to exclude
        if (URL.indexOf('brace') >= 0 || URL.indexOf('boot') >= 0 || URL.indexOf('fitting') >= 0 || URL.indexOf('mounting') >= 0 || URL.indexOf('rocket') >= 0 || URL.indexOf('track') >= 0 || URL.indexOf('strap') >= 0 || URL.indexOf('knob') >= 0) {
            continue;
        }
        if (URL.indexOf(appearNarrow[i]) >= 0) {
            $('div.ProductThumb').prepend(contentNarrow);
        }
    }
});

$(window).load(function () {
    var appearWide = ['ymm_bimini_tops', 'bimini_finder_widths', 'standard-bimini-tops', 'pontoon-boat-bimini-top', 'tower-bimini-tops', 'inflatable-boat-bimini-tops'],
        contentWide = '<div class="saleBannerWide">Sale! Additional 15% Off Sunbrella Bimini Tops</div><div class="saleExplanation">Use Coupon Code "BIMINI15" in Cart</div>',
        URL = window.location.href,
        i;

    for (i = 0; i < appearWide.length; i++) {
        if (URL.indexOf(appearWide[i]) >= 0) {
            $('div#LayoutColumn2').prepend(contentWide);
        }
    }
});

// Add Sale Banners for Fenders & buoys
$(function () {
    var appearNarrow = ['made-boat-fender-big', 'made-boat-fender-hull', 'made-boat-fender-low', 'made-boat-fender-pontoon', 'made-boat-fender-pwc', 'made-boat-fender-super', 'made-boat-fender-tuff', 'polyform-boat-fender', 'hull-hugr-boat-fender'],
        contentNarrow = '<div class="saleBannerNarrow">10% Off Fender orders of $100+</div><div class="saleExplanationNarrow">Use Coupon Code "FENDER10" in Cart</div>',
        URL = window.location.href;

    for (i = 0; i < appearNarrow.length; i++) {
        if (URL.indexOf(appearNarrow[i]) >= 0) {
            $('div.ProductMain').prepend(contentNarrow);
        }
    }
});

$(window).load(function () {
    var appearWide = ['/boat-fenders/', 'search.php?q=fender'],
        contentWide = '<div class="saleBannerWide">10% Off Fender orders of $100+</div><div class="saleExplanation">Use Coupon Code "FENDER10" in Cart</div>',
        URL = window.location.href,
        i;

    for (i = 0; i < appearWide.length; i++) {
        if (URL.indexOf(appearWide[i]) >= 0) {
            $('div#LayoutColumn2').prepend(contentWide);
        }
    }
});
*/
/*
// Add Sale Banners for Michigan Wheel Props
$(function() {
    var appearNarrow = ['Michigan-Wheel-'],
        contentNarrow = '<div class="saleBannerNarrow">Sale! Additional 10% Off Our Price</div><div class="saleExplanationNarrow">Use coupon code "MWHEEL10" in cart</div>',
        URL = window.location.href,
        i;

    for (i = 0; i < appearNarrow.length; i++) {
        if (URL.indexOf(appearNarrow[i]) >= 0) {
            $('div.ProductThumb').prepend(contentNarrow);
        }
    }
});

$(window).load(function() {
    var appearWide = ['props_outboard_hierarchy', 'props_sterndrive_hierarchy'],
        contentWide = '<div class="saleBannerWide">Sale! 10% Off Michigan Wheel Boat Propellers</div><div class="saleExplanation">Use coupon code "MWHEEL10" in cart</div>',
        URL = window.location.href,
        isMichigan = $('a.option_link[title="Michigan Wheel"]').html(),
        i;

    for (i = 0; i < appearWide.length; i++) {
        if (URL.indexOf(appearWide[i]) >= 0 && isMichigan.length) {
            $('div#LayoutColumn2').prepend(contentWide);
        }
    }
});*/

// Add Sale Banners for Bentley's Seats
/*
$(function () {
    var appearNarrow = ['bentleys-'],
        contentNarrow = '<div class="saleBannerNarrow">Sale! Additional 10% Off Our Price</div><div class="saleExplanationNarrow">Use coupon code "BENTLEYS10" in cart</div>',
        URL = window.location.href,
        i;

    for (i = 0; i < appearNarrow.length; i++) {
        if (URL.indexOf(appearNarrow[i]) >= 0) {
            $('div.ProductThumb').prepend(contentNarrow);
        }
    }
});

$(window).load(function () {
    var appearWide = ['boat-helm-seats', 'offshore-boat-seats'],
        contentWide = '<div class="saleBannerWide">Sale! 10% Off Bentley\'s Boat Seats</div><div class="saleExplanation">Use coupon code "BENTLEYS10" in cart</div>',
        URL = window.location.href,
        i;

    for (i = 0; i < appearWide.length; i++) {
        if (URL.indexOf(appearWide[i]) >= 0) {
            $('div#LayoutColumn2').prepend(contentWide);
        }
    }
});
*/

// Add sale banners for De-Icer & Ice-eater thermostats
/*
$(function () {
    var appearNarrow = ['kasco-deicer-2400d', 'kasco-deicer-3400d', 'kasco-deicer-4400d'],
        appearNarrow1 = [' '],
        appearNarrow2 = [' ', ' ', 'powerhouse-ice-eater-p750', 'powerhouse-ice-eater-p1000'],
        appearNarrow3 = [' '],
        contentNarrow = '<div class="saleBannerNarrow">Free Zinc with any Kasco de-icer purchase</div><div class="saleExplanationNarrow"> </div>',
        contentNarrow2 = '<div class="saleBannerNarrow">Free Zinc with any Kasco de-icer purchase</div><div class="saleExplanationNarrow"> </div>',
        couponReminder = '<br><span class="redText">Get $10 Off:</span><span>&nbsp;Coupon Code&nbsp;</span><span class="redText">THERM10</span>',
        URL = window.location.href,
        i;

    for (i = 0; i < appearNarrow.length; i++) {
        if (URL.indexOf(appearNarrow[i]) >= 0) {
            $('div.ProductThumb').prepend(contentNarrow);
        }
    }

    for (i = 0; i < appearNarrow2.length; i++) {
        if (URL.indexOf(appearNarrow2[i]) >= 0) {
            $('div.ProductThumb').prepend(contentNarrow2);
            $('.productOptionViewProductPickList li span:contains(Add 115V Thermostat)').after(couponReminder);
            $('.productOptionViewProductPickList li span:contains(Add 230V Thermostat)').after(couponReminder);
        }
    }

    // We have to put the sale banner on the right side for the thermostat pages, since the features and buy boxes are so much shorter.
    if (URL.indexOf(appearNarrow1[0]) >= 0) {
        $('div.ProductMain').prepend(contentNarrow);
    } else if (URL.indexOf(appearNarrow3[0]) >= 0) {
        $('div.ProductMain').prepend(contentNarrow2);
    }

});

$(window).load(function () {
    var appearWide = ['kasco-de-icers', 'power-house-ice-eaters', 'shop-all-de-icers', 'de-icers-ice-eaters'],
        contentWide = ['<div class="saleBannerWide">Free Zinc with Kasco. Free 50ft cord upgrade with Power House</div><div class="saleExplanation"></div>', '<div class="saleBannerWide">Free Zinc with Kasco. Free 50ft cord upgrade with Power House</div><div class="saleExplanation"></div>', '<div class="saleBannerWide">Free Zinc with Kasco unit. Free 50ft cord upgrade with selected Power House unit</div><div class="saleExplanation"></div>', '<div class="saleBannerWide">Free Zinc with Kasco unit. Free 50ft cord upgrade with selected Power House unit</div><div class="saleExplanation"></div>'],
        // URL = window.location.href,
        i;

    for (i = 0; i < appearWide.length; i++) {
        if (~window.location.href.indexOf(appearWide[i])) {
            $('div#LayoutColumn2').prepend(contentWide[i]);
        }
    }
});
*/

/*
 // Add sale banners for Westland Boat Covers
 $(function () {
     var appearWidest = ['semi-custom-specialty-covers'],
         // appearNarrow = ['westland-semi-custom-boat-cover', 'westland-custom-boat-cover'], // Because we did just Sunbrella in custom covers for a previous sale, I'm using regex down in the if statement below to check the URL
         contentWidest = '<div class="saleBannerWidest">Sale! 10% Off Westland Boat Covers</div><div class="saleExplanation">Use Coupon Code "WESTLAND10" in Cart</div>',
         contentNarrow = '<div class="saleBannerNarrow">Sale! Additional 10% Off Our Price</div><div class="saleExplanationNarrow">Use Coupon Code "WESTLAND10" in Cart</div>',
         URL = window.location.href,
         i;

     for (i = 0; i < appearWidest.length; i++) {
         if (URL.indexOf(appearWidest[i]) >= 0) {
             $('.coversByStyle .CategoryDescription').after(contentWidest);
         }
     }
     // for (i = 0; i < appearNarrow.length; i++) { // The structure of this is a little different from normal, because a previous sale only applied to Sunbrella in custom covers, and it was easier to slightly change this than put it back to normal.
     if (/http.*\/\/www\.savvyboater\.com\/westland-custom-boat-cover-.*\//.test(URL) || /http.*\/\/www\.savvyboater\.com\/westland-semi-custom-boat-cover-.*\//.test(URL)) {
         $('div.ProductThumb').prepend(contentNarrow);
     }
     // }
 });

 $(window).load(function () {
     var appearWide = ['ymm_westland_cover'],
         appearWide2 = ['aluminum-fishing-boat-covers', 'bay-style-boat-covers', 'bass-boat-covers', 'covers-for-boats-with-towers', 'cruiser-boat-covers', 'cuddy-cabin-boat-covers', 'deck-boat-covers', 'drift-boat-covers', 'inflatable-boat-covers', 'covers-for-jet-boats-pwcs-paddle-boats-dinghys', 'jon-boat-covers', 'pontoon-boat-covers', 'runabouts-v-hull-tri-hull-boat-covers', 'tournament-ski-boat-covers', 'v-hull-fishing-boat-covers', 'whaler-style-boat-covers'],
         contentWide = '<div class="saleBannerWide">Sale! Additional 10% Off Westland Boat Covers</div><div class="saleExplanation">Use Coupon Code "WESTLAND10" in Cart</div>',
         contentWide2 = '<div class="saleBannerWide">Sale! 10% Off Westland Boat Covers</div><div class="saleExplanation">Use Coupon Code "WESTLAND10" in Cart</div>',
         URL = window.location.href,
         isWestland = $('a.option_link[title="Westland"]').html(),
         i;

     for (i = 0; i < appearWide.length; i++) {
         if (URL.indexOf(appearWide[i]) >= 0) {
             $('div#LayoutColumn2').prepend(contentWide);
         }
     }

     for (i = 0; i < appearWide2.length; i++) {
         if (URL.indexOf(appearWide2[i]) >= 0 && isWestland !== null) {
             $('div#LayoutColumn2').prepend(contentWide2);
         }
     }
 });
 */


/*
// Add sale banners for De-Icer & Ice-eater thermostat
$(function() {
    var appearNarrow = ['kasco-deicer-2400d', 'kasco-deicer-3400', 'kasco-deicer-4400'],
        appearNarrow1 = ['kasco-deicer-thermostat'],
        appearNarrow2 = ['powerhouse-ice-eater-p500', 'powerhouse-ice-eater-p750', 'powerhouse-ice-eater-p1000'],
        appearNarrow3 = ['powerhouse-ice-eater-thermostat'],
        contentNarrow = '<div class="saleBannerNarrow">Buy a De-Icer get $30 off a Thermostat</div><div class="saleExplanationNarrow"></div>',
        contentNarrow2 = '<div class="saleBannerNarrow">Get $30 off Thermostat with Ice Eater</div><div class="saleExplanationNarrow"></div>',
        couponReminder = '<br><span class="redText">A Savings of $30!</span><span>&nbsp;&nbsp;</span><span class="redText"></span>',
        URL = window.location.href,
        i;

    for (i = 0; i < appearNarrow.length; i++) {
        if (URL.indexOf(appearNarrow[i]) >= 0) {
            $('div.ProductThumb').prepend(contentNarrow);
            $('.productOptionViewProductPickList li span:contains(Add Thermostat)').after(couponReminder);
        }
    }

    for (i = 0; i < appearNarrow2.length; i++) {
        if (URL.indexOf(appearNarrow2[i]) >= 0) {
            $('div.ProductThumb').prepend(contentNarrow2);
            $('.productOptionViewProductPickList li span:contains(Add a Thermostat)').after(couponReminder);
        }
    }

    // We have to put the sale banner on the right side for the dock mount pages, since the features and buy boxes are so much shorter.
    if (URL.indexOf(appearNarrow1[0]) >= 0) {
        $('div.ProductMain').prepend(contentNarrow);
    } else if (URL.indexOf(appearNarrow3[0]) >= 0) {
        $('div.ProductMain').prepend(contentNarrow);
    }

});

$(window).load(function() {
    var appearWide = ['power-house-ice-eaters', 'shop-all-de-icers'],
        contentWide = ['<div class="saleBannerWide">Free 50ft cord upgrade with 3/4HP and 1HP De-Icer!</div><div class="saleExplanation"></div>', '<div class="saleBannerWide">Free 50ft cord upgrade with 3/4HP and 1HP De-Icer!</div><div class="saleExplanation"></div>', '<div class="saleBannerWide">Free 50ft cord upgrade with 3/4HP and 1HP De-Icer!</div><div class="saleExplanation"></div>'],
        URL = window.location.href,
        i;

    for (i = 0; i < appearWide.length; i++) {
        if (URL.indexOf(appearWide[i]) >= 0) {
            $('div#LayoutColumn2').prepend(contentWide[i]);
        }
    }
});


// Add sale banners for Power House De-Icer : Free cord upgrade
$(function() {
    var appearNarrow1 = ['powerhouse-ice-eater-p750-115v'],
    appearNarrow2 = ['powerhouse-ice-eater-p750-230v'],
        appearNarrow3 = ['powerhouse-ice-eater-p1000-115v'],
        appearNarrow4 = ['powerhouse-ice-eater-p1000-230v'],
        contentNarrow = '<div class="saleBannerNarrow">FREE upgrade to 50ft cord!</div><div class="saleExplanationNarrow"></div>',
        contentNarrow2 = '<div class="saleBannerNarrow">FREE upgrade to 50ft cord!</div><div class="saleExplanationNarrow"></div>',
        couponReminder = '<br><span class="redText"></span><span>&nbsp;&nbsp;</span><span class="redText"></span>',
        URL = window.location.href,
        i;

    // We have to put the sale banner on the right side for the dock mount pages, since the features and buy boxes are so much shorter.
    if (URL.indexOf(appearNarrow1[0]) >= 0) {
        $('div.ProductThumb').prepend(contentNarrow);
    } else if (URL.indexOf(appearNarrow2[0]) >= 0) {
        $('div.ProductThumb').prepend(contentNarrow);
    } else if (URL.indexOf(appearNarrow3[0]) >= 0) {
        $('div.ProductThumb').prepend(contentNarrow);
    } else if (URL.indexOf(appearNarrow4[0]) >= 0) {
        $('div.ProductThumb').prepend(contentNarrow);
    }
});

$(window).load(function() {
    var appearWide = ['power-house-ice-eaters'],
        contentWide = ['<div class="saleBannerWide">FREE upgrade to 50ft cord with 3/4HP and 1HP De-Icer!</div><div class="saleExplanation"></div>', '<div class="saleBannerWide">FREE upgrade to 50ft cord with 3/4HP and 1HP De-Icer!</div><div class="saleExplanation"></div>', '<div class="saleBannerWide">FREE upgrade to 50ft cord with 3/4HP and 1HP De-Icer!</div><div class="saleExplanation"></div>'],
        URL = window.location.href,
        i;

    for (i = 0; i < appearWide.length; i++) {
        if (URL.indexOf(appearWide[i]) >= 0) {
            $('div#LayoutColumn2').prepend(contentWide[i]);
        }
    }
});

// Add sale banners for Kasco De-Icer : Free zinc
$(function() {
    var appearNarrow = ['kasco-deicer-2400d'],
    appearNarrow1 = ['kasco-deicer-3400d'],
        appearNarrow2 = ['kasco-deicer-4400d'],
//appearNarrow4 = ['kasco-deicer-3400hd'],
        contentNarrow = '<div class="saleBannerNarrow">FREE Zinc with any Kasco De-Icer model!</div><div class="saleExplanationNarrow"></div>',
        contentNarrow2 = '<div class="saleBannerNarrow">FREE Zinc with any Kasco De-Icer model!</div><div class="saleExplanationNarrow"></div>',
        couponReminder = '<br><span class="redText"></span><span>&nbsp;&nbsp;</span><span class="redText"></span>',
        URL = window.location.href,
        i;

    // We have to put the sale banner on the right side for the dock mount pages, since the features and buy boxes are so much shorter.
    if (URL.indexOf(appearNarrow1[0]) >= 0) {
        $('div.ProductThumb').prepend(contentNarrow);
    } else if (URL.indexOf(appearNarrow[0]) >= 0) {
        $('div.ProductThumb').prepend(contentNarrow);
    } else if (URL.indexOf(appearNarrow2[0]) >= 0) {
        $('div.ProductThumb').prepend(contentNarrow);
    }

});

$(window).load(function() {
    var appearWide = ['kasco-de-icers'],
        contentWide = ['<div class="saleBannerWide">FREE Zinc from KASCO with a de-icer purchase!</div><div class="saleExplanation"></div>', '<div class="saleBannerWide">FREE Zinc from KASCO with a de-icer purchase!</div><div class="saleExplanation"></div>', '<div class="saleBannerWide">FREE Zinc from KASCO with a de-icer purchase!</div><div class="saleExplanation"></div>'],
        URL = window.location.href,
        i;

    for (i = 0; i < appearWide.length; i++) {
        if (URL.indexOf(appearWide[i]) >= 0) {
            $('div#LayoutColumn2').prepend(contentWide[i]);
        }
    }
});
*/

// Add sale banners for Boat Covers
/*
$(function () {
    var appearWidest = ['boat-covers', 'semi-custom-specialty-covers'],
        appearNarrow = ['westland-semi-custom-boat-cover', 'westland-custom-boat-cover', 'westland-pwc-cover', 'westland-custom-pwc-cover'],
        contentWidest = '<div class="saleBannerWidest">Summer Sale on All Westland Boat Covers</div><div class="saleExplanation">Use Coupon Code WLCOVERS</div>',
        contentNarrow = '<div class="saleBannerNarrow">Summer Sale on All Westland Boat Covers</div><div class="saleExplanationNarrow">Use Coupon Code WLCOVERS</div>',
        URL = window.location.href,
        i;

    for (i = 0; i < appearWidest.length; i++) {
        if (URL.indexOf(appearWidest[i]) >= 0) {
            $('.coversByStyle .CategoryDescription').after(contentWidest);
        }
    }
    for (i = 0; i < appearNarrow.length; i++) {
        if (URL.indexOf(appearNarrow[i]) >= 0) {
            $('div.ProductThumb').prepend(contentNarrow);
        }
    }
});

$(window).load(function () {
    var appearWide = ['ymm_westland_cover', 'aluminum-fishing-boat-covers', 'bay-style-boat-covers', 'bass-boat-covers', 'covers-for-boats-with-towers', 'cruiser-boat-covers', 'cuddy-cabin-boat-covers', 'deck-boat-covers', 'drift-boat-covers', 'inflatable-boat-covers', 'covers-for-jet-boats-pwcs-paddle-boats-dinghys', 'pontoon-boat-covers', 'jon-boat-covers', 'runabouts-v-hull-tri-hull-boat-covers', 'tournament-ski-boat-covers', 'v-hull-fishing-boat-covers', 'whaler-style-boat-covers'],
        contentWide = '<div class="saleBannerWide">Summer Sale on All Westland Boat Covers</div><div class="saleExplanation">Use Coupon Code WLCOVERS</div>',
        URL = window.location.href,
        i;

    for (i = 0; i < appearWide.length; i++) {
        if (URL.indexOf(appearWide[i]) >= 0) {
            $('div#LayoutColumn2').prepend(contentWide);
        }
    }

});
*/
/*
 // Add Sale Banners for PowerTech Props
 $(function () {
     var appearWidest1 = ['powertech-boat-propellers'],
         appearWidest2 = ['powertech-mercury-mariner-propellers', 'powertech-mercruiser-propellers', 'powertech-evinrude-johnson-propellers', 'powertech-yamaha-propellers', 'powertech-suzuki-propellers', 'powertech-honda-propellers', 'powertech-nissan-tohatsu-propellers'],
         appearNarrow = ['powertech-stainless-steel'],
         contentWidest1 = '<div class="saleBannerWidest" style="text-align: center; margin: -35px 0px 0px 44px; width: 90%">Sale! 10% Off all PowerTech Propellers</div><div class="saleExplanation">Use Coupon Code "POWERTECH10" in Cart</div>',
         contentWidest2 = '<div class="saleBannerWidest" style="text-align: center; margin: 0px 0px 0px 44px; width: 90%">Sale! 10% Off all PowerTech Propellers</div><div class="saleExplanation">Use Coupon Code "POWERTECH10" in Cart</div>',
         contentNarrow = '<div class="saleBannerNarrow">Sale! Additional 10% Off Our Price</div><div class="saleExplanationNarrow">Use Coupon Code "POWERTECH10" in Cart</div>',
         URL = window.location.href,
         i;

     for (i = 0; i < appearWidest1.length; i++) {
         if (URL.indexOf(appearWidest1[i]) >= 0) {
             $('.PropsCategoryDescription').after(contentWidest1);
         }
     }

     for (i = 0; i < appearWidest2.length; i++) {
         if (URL.indexOf(appearWidest2[i]) >= 0) {
             $('.PowerTechSubcategories h5').before(contentWidest2);
         }
     }

     for (i = 0; i < appearNarrow.length; i++) {
         if (URL.indexOf(appearNarrow[i]) >= 0) {
             $('div.ProductThumb').prepend(contentNarrow);
         }
     }
 });

 $(window).load(function () {
     var appearWide = ['powertech-propellers'],
         contentWide = '<div class="saleBannerWide">Sale! Additional 10% Off PowerTech Propellers</div><div class="saleExplanation">Use Coupon Code "POWERTECH10" in Cart</div>',
         URL = window.location.href,
         i;

     for (i = 0; i < appearWide.length; i++) {
         if (URL.indexOf(appearWide[i]) >= 0) {
             $('div#LayoutColumn2').prepend(contentWide);
         }
     }
 });
*/

// Add Sale Banners for PowerTech & Solas & Mighigan Wheel Stainless Steel Propellers
/*
$(function () {
    var appearNarrow = ['boat-propellers'],
        contentNarrow = '<div class="saleBannerNarrow">SUMMER SALE! Get 20% Off Our Stainless Steel Selection</div><div class="saleExplanationNarrow">Use Coupon Code "STAINLESS20" in Cart</div>',
        URL = window.location.href,
        i;

    for (i = 0; i < appearNarrow.length; i++) {
        if (~URL.indexOf(appearNarrow[i]) && ~$('#ProductWarranty').html().indexOf("Stainless Steel")) {
            $('div.ProductThumb').prepend(contentNarrow);
        }
    }
});

$(window).load(function () {
    var appearWide = ['boat-propellers'],
        contentWide = '<div class="saleBannerWide">SUMMER SALE! 20% Off All Stainless Steel Propellers</div><div class="saleExplanation">Use Coupon Code "STAINLESS20" in Cart</div>',
        URL = window.location.href,
        i;

    for (i = 0; i < appearWide.length; i++) {
        if (~URL.indexOf(appearWide[i])) {
            $('div#LayoutColumn2').prepend(contentWide);
        }
    }

});
*/
/***********************
 *                      *
 *        END OF        *
 *         SALE         *
 *        BANNERS       *
 *         CODE         *
 *                      *
 ************************/

// --------------------------------------------------------------------
// PKT: BEGIN EXPEDITED SHIPPING FIX
// --------------------------------------------------------------------

/**
* PKT: Added 2017-08-23 by PKT-JW.
* PKT: changes the expedited checkbox on the modal option change form.
* PKT: posts changed form to server and then runs the BigCommerce function
* PKT: in the onclick event on the form.
* PKT: isChecked = boolean of whether of the option should be checked or not.
*/
function changeTheExpeditedOptionOnChangeForm(isChecked) {

  console.log("changeTheExpeditedOptionOnChangeForm fired...");


  // get the span element with expedited label.
  var expeditedSpan = $("span:contains('Expedited::')");

  console.log(expeditedSpan);

  // go up to the parent row and then back down to product attribute value.
  var productAttributeValue = expeditedSpan.closest('.productAttributeRow').find('.productAttributeValue input:checkbox');

  console.log(productAttributeValue.val());

  // uncheck the box.
  productAttributeValue.prop("checked", isChecked);

  // post the form via ajax.
  $.post( "cart.php", $( "#CartEditProductFieldsForm" ).serialize())
    .done(function( data ) {
      //console.log("posted form to cart.php");
    });




  // hide the rows in the modal related to expedited shipping.
  expeditedSpan.closest(".productAttributeConfigurableEntryCheckbox").hide();




  // run the BigCommerce javascript function in the form onclick.
  Cart.saveItemCustomizations();

  // return a value.
  return true;
}

// PKT: Added 2017-08-23 by PKT-JW.
// PKT: We only want to observer below to run until the modal has been retrieved
// PKT: from the server.
var sawModalOverlay = false;
var sawModalContainer = false;

/*
* PKT: Added 2017-08-23 by PKT-JW.
* PKT: Creates a MutationObserver to specifically look for the creation of
* PKT: the modal option edit form since this is retrieved from the server upon
* PKT: clicking the change link.
*/
function mutationObserverForExpedited() {

  // create the observer.
  var observer = new MutationObserver(function(mutations) {

    // cycle through mutations.
    mutations.forEach(function(mutation) {

      //console.log('Mutation type: ' + mutation.type);

      // mutation added to html.
      if ( mutation.type == 'childList' ) {

        // check that there are added nodes.
        if (mutation.addedNodes.length >= 1) {

          // make sure that not id.
          if (mutation.addedNodes[0].nodeName != '#text') {

             //console.log('Added ' + mutation.addedNodes[0].tagName + ' tag.');
             //console.log(mutation.addedNodes[0]);

             // seeing if the mutation is the modal overlay.
             if (mutation.addedNodes[0].id == "ModalOverlay") {

               // hide the modal overlay.
               $("#ModalOverlay").hide();

               // change the bool.
               sawModalOverlay = true;
             }
             // seeing if the mutation is the modal container.
             else if (mutation.addedNodes[0].id == "ModalContainer") {

               // hide the modal.
               $("#ModalContainer").hide();

               // change the bool.
               sawModalContainer = true;
             } // end else if.
          } // end if (mutation.addedNodes[0].nodeName != '#text')
        } // end if (mutation.addedNodes.length >= 1)
      } // end if ( mutation.type == 'childList' )
    }); // end mutations.forEach
  }); // end new MutationObserver

  // return the new observer.
  return observer;
}

/**
* PKT: Added 2017-08-23 by PKT-JW.
* PKT: Creates a handler so that when the carver expedited shipping item
* PKT: is removed from the cart, the item option for expedited shipping is
* PKT: changed as well. Opens option change form, sets the input checkbox,
* PKT: and then submits the form before removing the item from the cart.
* PKT: cartItemId = original cartItemId in generated cart link onclick event.
*/
function handleExpeditedInCart(cartItemId) {

  // look for an element that has the expedited option.
  var expeditedElement = $("label:contains('Expedited:')");

  //console.log(expeditedElement.html());

  // find the change link within the product description.
  var expeditedLink = expeditedElement.closest('.ProductName').find('.CustomizeItemLink');

  //console.log(expeditedLink.html());

  // the html for the modal and form are retrieved from the server when you
  // click the link; therefore we are creating a mutation observer to watch for
  // changes to the dom. We do not want to show the form but we want the html.
  var observer = mutationObserverForExpedited();

  // set the configuration for the observer.
  var observerConfig = {
          attributes: true,
          childList: true,
          characterData: true
  };

  // Listen to all changes to body and child nodes
  var targetNode = document.body;

  // start the observer.
  observer.observe(targetNode, observerConfig);

  // create an interval to keep running until the both booleans have been
  // changed to true. runs every half second.
  var intervalForModal = setInterval(function() {

    // check the booleans.
    if ((sawModalOverlay === true) && (sawModalContainer === true)) {

      console.log("saw modal...");

      // don't need the observer anymore.
      observer.disconnect();

      // destroy the interval.
      clearInterval(intervalForModal);

      //console.log("cleared interval");

      // change and submit options form.
      if (changeTheExpeditedOptionOnChangeForm(false) === true) {

        // use cart javacript function that was originally in onclick event.
        Cart.RemoveItem(cartItemId);

        // build and click the link that was originally href attribute.
        var cartRemoveLink = "cart.php?action=remove&item=" + cartItemId;
        cartRemoveLink.trigger('click');
      }
    }
  }, 500); // end setInterval

  // observer and interval set so click the change link.
  expeditedLink.trigger('click');

} // end handleExpeditedInCart


/**
* PKT: Added 2017-08-23 by PKT-JW.
* PKT: Finds the remove link for the carver expedited shipping cart item and
* PKT: changes the onclick event to the custom handler that will change the
* PKT: option in the item where the user selected expedited shipping.
*/
function changeExpeditedOnClick() {

  // look for link showing expedited item.
  var cartItemLink = $("a:contains('Expedited Production - 3 Business Days')");

  //console.log(cartItemLink.html());

  // check if there was one found.
  if (cartItemLink.length > 0) {

    // find the link.
    var cartRemoveLink = cartItemLink.closest('tr').find('.CartRemoveLink');

    //console.log(cartRemoveLink.html());

    // get the current onclick attribute. will need this to be processed
    // after all of the added methods.
    var currentOnClick = cartRemoveLink.attr("onclick");

    //console.log(currentOnClick);

    // get the argument from the current onclick.
    var arrCurrentArg = currentOnClick.split('\'');

    //console.log(arrCurrentArg[1]);

    // build the new onclick event.
    var revisedOnClick = "handleExpeditedInCart('" + arrCurrentArg[1] + "')";

    //console.log(cartRemoveLink);

    // change the onclick attribute.
    // requires that we use first item in array.
    cartRemoveLink[0].setAttribute( "onClick", revisedOnClick );

    //console.log("revised onclick...");
    //console.log(cartRemoveLink.attr("onclick"));

    // we need to replace the href value so that we don't leave this page yet.
    cartRemoveLink[0].setAttribute("href", "#");

  } // end if (cartItemLink.length > 0)
} // end changeExpeditedOnClick()

/**
* PKT: Added 2017-08-23 by PKT-JW.
* PKT: This window load looks for a carver expedited shipping item in the
* PKT: cart and changes the remove link attributes so that the options for the
* PKT: item are also changed.
*/
$(window).load(function() {

   changeExpeditedOnClick();

});
// --------------------------------------------------------------------
// PKT: END EXPEDITED SHIPPING FIX
// --------------------------------------------------------------------

// --------------------------------------------------------------------
// PKT: BEGIN FREE ITEM CART REMOVAL
// --------------------------------------------------------------------

/**
* PKT: Added 2017-08-25 by PKT-JW
* PKT: Gets the data in the free item cookie as an array.
*/
function retrieveFreeItemCookieData() {

  // get the cookie using js-cookie.
  var cookieData = Cookies.get('freeItems');

  // return the cookie data as an array.
  if (cookieData != null) {

    // parse the data as an array.
    return $.parseJSON(cookieData);
  }
  else {

    // return an empty array.
    return [];
  }
}

/**
* PKT: Added 2017-08-25 by PKT-JW
* PKT: Adds linked free item to primary item in the free item cookie.
*/
function handleNewFreeItem(theUrl, theItemId, theItemUrl) {

  // first check if there is an existing cookie.
  var cookieData = Cookies.get('freeItems');

  // check for existing data.
  if (cookieData != null) {

    // there is an existing cookie.

    // get the data as an array.
    var arrCookieData = $.parseJSON(cookieData);

    // add new record to array.
    arrCookieData.push(createFreeItemCookieObj(theUrl, theItemId, theItemUrl));

    // save back to cookie.
    Cookies.set('freeItems', JSON.stringify(arrCookieData));

  }
  else {

    // no existing cookie.

    // create the cookie and add the data.
    var arrCookieData = [];

    // add new record to array.
    arrCookieData.push(createFreeItemCookieObj(theUrl, theItemId, theItemUrl));

    // save back to cookie.
    Cookies.set('freeItems', JSON.stringify(arrCookieData));
  }
}

/**
* PKT: Added 2017-08-25 by PKT-JW
* PKT: Creates the object that will be pushed to the cookie and then
* PKT: saved in the array.
*/
function createFreeItemCookieObj(theUrl, theItemId, theItemUrl) {

  // create the object.
  var objToSave = {};
  objToSave.itemUrl = theUrl;
  objToSave.freeItemId = theItemId;
  objToSave.freeItemUrl = theItemUrl;

  // send back.
  return objToSave;
}

/**
* PKT: Added 2017-08-25 by PKT-JW
* PKT: Gets the URL of the item from the browser URL line.
*/
function getItemUrl() {

  // get the full url.
  var url = window.location.href;

  // get the sanitized url removing the first part.
  var theItemUrl = getItemUrlProcessed(url);

  // return the item part.
  return theItemUrl;
}

/**
* PKT: Added 2017-08-25 by PKT-JW
* PKT: Gets the item portion of the URL from the argument.
*/
function getItemUrlProcessed(url) {

  // split parts into array.
  var arrUrl = url.split('/');

  // get the second to last item.
  return arrUrl[arrUrl.length - 2];
}

/**
* PKT: Added 2017-08-25 by PKT-JW
* PKT: Determines which cart items will need to have its onclick event changed
* PKT: based on the information in the cookie.
*/
function alterCartLinksForFreeItems() {

  // get the cookie data.
  var arrCookieData = retrieveFreeItemCookieData();

  // check that there is data.
  if (arrCookieData.length > 0) {

    // get the items in the cart.
    var cartItems = $(".main_table tr .CartThumb a");

    //console.log(cartItems);

    // cycle through items in cart.
    $.each(cartItems, function(key, value) {

      // get the link to the item.
      var cartLink = getItemUrlProcessed(value.href);

      //console.log("cartLink:" + cartLink);

      // cycle through items in array to look for a match.
      $.each(arrCookieData, function(i, objCookie) {

          // get the link in the cookie.
          var cookieLink = objCookie.itemUrl;

          //console.log("cookieLink: " + cookieLink);

          // look for a match.
          if (cookieLink === cartLink) {

            // we need to replace remove link so that the free item is removed
            // when we remove the item.

            //console.log("found a match: " + cookieLink);

            // replace the remove link for the item that has the free add on.
            replaceRemoveLinkForItemWithFreeAddOn(cookieLink,
              objCookie.freeItemUrl);
          }


      }); // end each cookieData
    }); // end each cartItems
  } // end if (arrCookieData.length > 0)
} // end alterCartLinksForFreeItems

/**
* PKT: Added 2017-08-25 by PKT-JW
* PKT: Performs the action of replacing the onclick event in the cart Remove
* PKT: link so that a custom function is fired instead of the Big Commerce
* PKT: default action.
*/
function replaceRemoveLinkForItemWithFreeAddOn(itemUrl, freeItemUrl) {

  // look for link showing item with free add on.
  var cartItemLink = $('a[href*="' + itemUrl + '"]');

  // check if there was one found.
  if (cartItemLink.length > 0) {

    // find the link.
    var cartRemoveLink = cartItemLink.closest('tr').find('.CartRemoveLink');

    // get the current onclick attribute. will need this to be processed
    // after all of the added methods.
    var currentOnClick = cartRemoveLink.attr("onclick");

    // get the argument from the current onclick.
    var arrCurrentArg = currentOnClick.split('\'');

    // get the cart id of the free item in the cart.
    var freeItemLink = $('a[href*="' + freeItemUrl + '"]');

    // check if there was one found.
    if (freeItemLink.length > 0) {

      // find the link.
      var freeRemoveLink = freeItemLink.closest('tr').find('.CartRemoveLink');

      // get the current onclick attribute. will need this to be processed
      // after all of the added methods.
      var currentFreeOnClick = freeRemoveLink.attr("onclick");

      // get the argument from the current onclick.
      var freeCurrentArg = currentFreeOnClick.split('\'');

      // build the new onclick event.
      var revisedOnClick = "handleLinkedItemInCart('" + arrCurrentArg[1] + "', '" + freeCurrentArg[1] + "')";

      // change the item onclick attribute to the new function.
      cartRemoveLink[0].setAttribute( "onClick", revisedOnClick );

      // we need to replace the href value so that we don't leave this page yet.
      cartRemoveLink[0].setAttribute("href", "#");
    } // end if (freeItemLink.length > 0)
  } // end if (cartItemLink.length > 0)

} // end replaceRemoveLinkForItemWithFreeAddOn

/**
* PKT: Added 2017-08-25 by PKT-JW
* PKT: Handles the new onclick event when the item is removed from the cart.
*/
function handleLinkedItemInCart(cartItemId, freeItemId) {

  // use cart javacript function that was originally in onclick event.
  Cart.RemoveItem(cartItemId);

  // we need to delete both items.
  var cartRemoveLink = "cart.php?action=remove&item=" + freeItemId;

  // remove the new free item.
  $.ajax({type: 'GET', async: false, url: cartRemoveLink});

  // reset the remove link to the original item.
  cartRemoveLink = "cart.php?action=remove&item=" + cartItemId;

  // click the link.
  cartRemoveLink.trigger('click');

} // end handleLinkedItemInCart

/**
* PKT: Added 2018-05-14 by PKT-JW
* PKT: Handles the removal of the free item that had been orpahed when a user
* PKT: removed the parent item by changing the quantity to 0. Removes item
* PKT: from the cookie to prevent future issues if the same free item is added
* PKT: back to the cart.
* PKT: freeItemUrl: partial href value that we will be using to identify cart
* PKT: id of the free item. e.g. carver-free-accessory-tie-down-kit-and-storage-bag-61001
*/
function removeOrphanedItem(freeItemUrl) {

  // we need to delete both items.
  //var cartRemoveLink = "cart.php?action=remove&item=" + freeItemId;

  // remove the new free item.
  //$.ajax({type: 'GET', async: false, url: cartRemoveLink});

  // click the link.
  //cartRemoveLink.trigger('click');

  // get the

  // find the link.
  //var cartItem = cartItemLink.closest('tr').find('.CartRemoveLink');

  //console.log("cartRemoveLink");
  //console.log(cartRemoveLink);

  //var cartItems = $(".main_table tr .CartThumb a");

  //console.log(freeItemUrl);

  var freeItemLink = $('a[href*="' + freeItemUrl + '"]');

  //console.log("freeItemLink");
  //console.log(freeItemLink);

  // find the link.
  var cartRemoveLink = freeItemLink.closest('tr').find('.CartRemoveLink');

  //console.log("cartRemoveLink");
  //console.log(cartRemoveLink);

  var currentOnClick = cartRemoveLink.attr("onclick");

  // get the argument from the current onclick.
  var arrCurrentArg = currentOnClick.split('\'');

  //console.log(arrCurrentArg);

  // we need to delete both items.
  var cartAjaxLink = "cart.php?action=remove&item=" + arrCurrentArg[1];

  //console.log("cartAjaxLink: " + cartAjaxLink);

  // remove item from cookie to prevent future errors.
  // get the cookie.
  var cookieData = Cookies.get('freeItems');

  //console.log("got the cookie data...");

  // check for existing data.
  if (cookieData != null) {

    // console.log("cookie data was not null...");

    // get the data as an array.
    var arrCookieData = $.parseJSON(cookieData);

    //console.log("cookie data...");
    //console.log(arrCookieData);

    for (var i = arrCookieData.length - 1; i >= 0; --i) {
      if (arrCookieData[i].freeItemUrl == freeItemUrl) {
          arrCookieData.splice(i,1);
      }
    }

    // remove item from array.
    /*
    for (var obj in arrCookieData) {

      console.log("obj.freeItemUrl: " + obj.freeItemUrl);
      console.log("freeItemUrl: " + freeItemUrl);

      if (obj.freeItemUrl == freeItemUrl) {
        console.log("removing free item from cookie...");

        // remove the item from the array.
        arrCookieData.splice(i,1)
      }
    }
    */

    // save back to cookie.
    Cookies.set('freeItems', JSON.stringify(arrCookieData));

  }


  // redirect to cart ajax link to remove item from cart.
  window.location.href = cartAjaxLink;

  // remove the new free item.
  //$.ajax({type: 'GET', async: false, url: cartAjaxLink});

  // click the link.
  // cartRemoveLink.trigger('click');

  // get the current onclick attribute. will need this to be processed
  // after all of the added methods.
  //var currentOnClick = cartRemoveLink.attr("onclick");

  // get the argument from the current onclick.
  //var arrCurrentArg = currentOnClick.split('\'');

  // get the cart id of the free item in the cart.
  //var freeItemLink = $('a[href*="' + freeItemUrl + '"]');

  // check if there was one found.
  //if (freeItemLink.length > 0) {

    // find the link.
    //var freeRemoveLink = freeItemLink.closest('tr').find('.CartRemoveLink');

  //console.log(value);
} // end removeOrphanedItem(freeItemUrl)

/**
* PKT: Added 2018-05-14 by PKT-JW
* PKT: The issue was that people had discovered that they could remove items
* PKT: from the cart by changing the quantity but the free items would remain
* PKT: (as opposed to using the Remove link which would ensure that the free
* PKT: items would also be removed). This solution evaluates the free item
* PKT: created for the Remove link solution on cart page load to ensure that
* PKT: there are not any items remaining.
*/
function checkForOrphanedItems() {

  // get the cookie data.
  var arrCookieData = retrieveFreeItemCookieData();

  // check that there is data.
  if (arrCookieData.length > 0) {

    //console.log(arrCookieData);

    // cycle through array and make sure that free items still have their parents.
    $.each(arrCookieData, function(index, objItem) {

      //console.log("evaluating free item: " + objItem.freeItemUrl);


      // cycle through items in cart to ensure that the parent item is there.
      // get the items in the cart.
      var cartItems = $(".main_table tr .CartThumb a");

      //console.log(cartItems);
      var foundMatch = false;

      // cycle through items in cart.
      $.each(cartItems, function(key, value) {

        // get the link to the item.
        var cartLink = getItemUrlProcessed(value.href);

        //console.log("cartLink: " + cartLink);

        // see if cart link matches parent item.
        if (cartLink == objItem.itemUrl) {
          foundMatch = true;
        }

      }); // $.each(cartItems

      //console.log("foundMatch: " + foundMatch);

      // if no parent, then remove item.
      if (!foundMatch) {

        // cycle through cartitems agin to this time look for the item
        // to be removed.
        $.each(cartItems, function(key, value) {

          var cartLink = getItemUrlProcessed(value.href);

          // see if cart link matches parent item.
          if (cartLink == objItem.freeItemUrl) {

            // console.log("found item to remove.");

            removeOrphanedItem(objItem.freeItemUrl);
          }

        });

      }

    }); // $.each(arrCookieData

  }
  else {
    //console.log("nothing in free item cookie.");
  }
} // end checkForOrphanedItems()


// --------------------------------------------------------------------
// PKT: END FREE ITEM CART REMOVAL
// --------------------------------------------------------------------

// --------------------------------------------------------------------
// PKT: BEGIN DUPLICATE ADD-ON FIX
// --------------------------------------------------------------------

// PKT: Added 2017-10-02 by PKT-JW.
// PKT: We only want the observer below to run until the modal has been retrieved
// PKT: from the server.
var addOnModalOverlay = false;
var addOnModalContainer = false;

/*
* PKT: Added 2017-10-02 by PKT-JW.
* PKT: Creates a MutationObserver to specifically look for the creation of
* PKT: the modal option edit form since this is retrieved from the server upon
* PKT: clicking the change link.
*/
function mutationObserverForAddOn() {

  // create the observer.
  var observer = new MutationObserver(function(mutations) {

    // cycle through mutations.
    mutations.forEach(function(mutation) {

      //console.log('Mutation type: ' + mutation.type);

      // mutation added to html.
      if ( mutation.type == 'childList' ) {

        // check that there are added nodes.
        if (mutation.addedNodes.length >= 1) {

          // make sure that not id.
          if (mutation.addedNodes[0].nodeName != '#text') {

             //console.log('Added ' + mutation.addedNodes[0].tagName + ' tag.');
             //console.log(mutation.addedNodes[0]);

             // seeing if the mutation is the modal overlay.
             if (mutation.addedNodes[0].id == "ModalOverlay") {

               // hide the modal overlay.
               $("#ModalOverlay").hide();

               // change the bool.
               addOnModalOverlay = true;

             }
             // seeing if the mutation is the modal container.
             else if (mutation.addedNodes[0].id == "ModalContainer") {

               //console.log("hiding ModalContainer...");

               // hide the modal.
               //$("#ModalContainer").hide();

               //console.log("Line 2228: hid modal...");

               // change the bool.
               addOnModalContainer = true;

               // console.log("addOnModalContainer: " + addOnModalContainer);
             } // end else if.
          } // end if (mutation.addedNodes[0].nodeName != '#text')
        } // end if (mutation.addedNodes.length >= 1)
      } // end if ( mutation.type == 'childList' )
    }); // end mutations.forEach
  }); // end new MutationObserver

  // return the new observer.
  return observer;
}

/**
* PKT: Added 2017-10-02 by PKT-JW.
* PKT: Creates a handler so that when there is an add-on attribute of a product
* PKT: that is duplicated as a separate cart item, removes the attribute.
*/
function handleAddOnInCart() {

  // look for an element that has the expedited option.
  var addOnElement = $("label:contains('Add-on:')");

  // check if there is an add-on under the cart item.
  if (addOnElement.length == 0) {

    // set the element.
    addOnElement = $("label:contains('Add-ons:')");
  }

  // find the change link within the product description.
  var addOnLink = addOnElement.closest('.ProductName').find('.CustomizeItemLink');

  // the html for the modal and form are retrieved from the server when you
  // click the link; therefore we are creating a mutation observer to watch for
  // changes to the dom. We do not want to show the form but we want the html.
  var observer = mutationObserverForAddOn();

  // set the configuration for the observer.
  var observerConfig = {
          attributes: true,
          childList: true,
          characterData: true
  };

  // Listen to all changes to body and child nodes
  var targetNode = document.body;

  // start the observer.
  observer.observe(targetNode, observerConfig);

  // create an interval to keep running until the both booleans have been
  // changed to true. runs every half second.
  var intervalForModal = setInterval(function() {

    // check the booleans.
    if ((addOnModalOverlay === true) && (addOnModalContainer === true)) {

      // don't need the observer anymore.
      observer.disconnect();

      // destroy the interval.
      clearInterval(intervalForModal);

      // change and submit options form.
      if (changeTheAddOnChangeForm() === true) {

        // use cart javacript function that was originally in onclick event.
        // Cart.RemoveItem(cartItemId);

        // build and click the link that was originally href attribute.
        //var cartRemoveLink = "cart.php?action=remove&item=" + cartItemId;
        //cartRemoveLink.trigger('click');
      }
    }
  }, 500); // end setInterval


  // observer and interval set so click the change link.
  addOnLink.trigger('click');

} // end handleAddOnInCart

/**
* PKT: Added 2017-10-02 by PKT-JW.
* PKT: Last Updated 2018-03-19 by PKT-JW.
* PKT: Changes the modal form so that the attribute under a product will be
* PKT: removed since it already exists as a separate cart item.
*/
function changeTheAddOnChangeForm() {

  // first check if there is a span called add-ons.
  var addOnSpan = $("#CartEditProductFieldsForm .productAttributeConfigurablePickListProduct span:contains('Add-ons:')");

  // in some cases the section will be labeled add-on (singular).
  if (addOnSpan.length === 0) {
    addOnSpan = $("#CartEditProductFieldsForm .productAttributeConfigurablePickListProduct span:contains('Add-on:')");
  }

  // if no add-on section get out.
  if (addOnSpan.length === 0) { return true; }

  // get the first radio button which should always be 'none'.
  var productAttributeRow = addOnSpan.closest('div').closest('div').next().find('input:radio:first');

  // see if the none is set.
  if (productAttributeRow.prop("checked") != true) {

    // hide the modal container.
    $("#ModalContainer").hide();

    // check the none radio button.
    productAttributeRow.prop("checked", "checked");

    // post the form via ajax.
    $.post( "cart.php", $( "#CartEditProductFieldsForm" ).serialize())
      .done(function( data ) {
        //console.log("posted form to cart.php");
        // reload the page to remove the attribute.
        location.reload();
      });
  }
  else {

    // add-on already set to none so just hide the add-on section.
    addOnSpan.closest('.productAttributeRow').hide();
  }

  // return a value.
  return true;
}
// --------------------------------------------------------------------
// PKT: END DUPLICATE ADD-ON FIX
// --------------------------------------------------------------------

// --------------------------------------------------------------------
// PKT: BEGIN CLEAR CART FUNCTIONALITY
// --------------------------------------------------------------------

/**
* PKT: Added 2017-10-24 by PKT-JW.
* PKT: Adds a Clear Cart link to the cart page under the update quantity button.
*/
function addClearCart() {

  // find the update quantity image button.
  $("input[alt='Update']").parent().append("<a href='#' " +
    "onclick='return clearCart()' " +
    "style='display: block; margin-top: 10px'>Clear Cart</a>");
}

/**
* PKT: Added 2017-10-24 by PKT-JW.
* PKT: Performs the clear cart functionality by setting all quantities to 0
* PKT: and then submitting the form.
*/
function clearCart() {

  // set input values to 0.
  $(".qtyInput").val("0");

  // submit the form.
  $("#cartForm").submit();
}

// --------------------------------------------------------------------
// PKT: END CLEAR CART FUNCTIONALITY
// --------------------------------------------------------------------

// --------------------------------------------------------------------
// PKT: FIX DUPLICATE EXPEDITED IN MODAL
// --------------------------------------------------------------------
function handleModalExpeditedInCart() {

  // the html for the modal and form are retrieved from the server when you
  // click the link; therefore we are creating a mutation observer to watch for
  // changes to the dom. We do not want to show the form but we want the html.
  var observer = mutationObserverForAddOn();

  // set the configuration for the observer.
  var observerConfig = {
          attributes: true,
          childList: true,
          characterData: true
  };

  // Listen to all changes to body and child nodes
  var targetNode = document.body;

  // start the observer.
  observer.observe(targetNode, observerConfig);

  // create an interval to keep running until the both booleans have been
  // changed to true. runs every half second.
  var intervalForModal = setInterval(function() {

    // check the booleans.
    if ((addOnModalOverlay === true) && (addOnModalContainer === true)) {

      // hide the row with expedited check box.
      var expeditedCheckSpan = $("#CartEditProductFieldsForm .productAttributeConfigurableEntryCheckbox span:contains('Expedited:')");
      expeditedCheckSpan.closest('.productAttributeRow').hide();

      // hide the row with the expedited radio button.
      var expeditedRadioSpan = $("#CartEditProductFieldsForm .productAttributeConfigurablePickListProduct span:contains('Expedited Production:')");
      expeditedRadioSpan.closest('.productAttributeRow').hide();
    }
  }, 500); // end setInterval
}
// --------------------------------------------------------------------
// PKT: END DUPLICATE EXPEDITED IN MODAL
// --------------------------------------------------------------------
