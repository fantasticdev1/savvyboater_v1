// used by shopper approved code below.
var productTitle = $('.productView-title').text();

/**
* Created 2017-12-13 by PKT-JW.
* Creates the upsell object and runs the startup routine on page load.
*/
$(document).ready(function() {

  // create the Upsell object.
  var upsellObj = createUpsellObj();

  // run the startup methods now that all properties are set.
  upsellObj.startUpRoutine();

  // decide if we should show the reviews tab.
  if (window.location.hash == '#reviews') { ActiveProductTab('ProductReviews_Tab');}

  //var bannerObj = new Banner();
 // Banner.checkForBanners();
});

/**
* Created 2017-12-13 by PKT-JW.
* Uses the legacy code to set the properties of the object.
*/
function createUpsellObj() {

  // create the Upsell object.
  var upsellObj = new Upsell();

  // set the properties as they were set by the legacy code.
  upsellObj.url = window.location.href;
  upsellObj.productTitle = $('.productView-title').text();
  upsellObj.originalAvailability = $('.productView-info-name:contains("Availability:")').next().text();
  upsellObj.originalPrice = parseFloat($('.VariationProductPrice').text().replace(/\$|,/g, ''));
  upsellObj.lastItemPrice = 0;
  upsellObj.lastManualPrice = 0;
  upsellObj.cycles = 0;
  upsellObj.currPrice = cleanPrice($(".VariationProductPrice").text());

  // return the object.
  return upsellObj;
}

/**
* Created 2017-12-13 by PKT-JW.
* Validation routine run upon form submit.
*/
function addUpsells() {

    // If there are any required options, make sure they are selected before running upsellLibrary()
    

      // handle upsells and free items before going to cart page.
      Upsell.upsellLibrary();
      Upsell.freeItems();

      // continue.
      return true;
}
