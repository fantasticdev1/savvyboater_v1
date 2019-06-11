/**
* BannerClass.js
* Created 2017-12-19 by PKT-JW.
* Updated 2018-03-21 by PKT-JW - added features search.
* The purpose of this class is to replace the pricing code within the etc-onload.js
* file that displays banners based on the urls entered within the array below.
*/

/**
* The properties for this class are based on the variables in the legacy code.
* @param which where to display the banner. Right now, only options are "narrow" and "wide"
* @param urlFragment the url fragment for which to look.
* @param headline the headline to display within the banner.
* @param explanation value to add to the explanation div which does not appear to be
* currently used.
*/
function Banner(which, urlFragment, headline, explanation) {

  // set the properties from the arguments.
  this.which = which;
  this.urlFragment = urlFragment;
  this.headline = headline;
  this.explanation = explanation;
}

/**
* This is the static function used to build the array that will be used to
* evaluate the url to determine if a banner should be displayed on the page.
* To add a new item to the array, use the format:
* arrReturn.push(new Banner("<which>", "<urlFragment>", "<headline>", "<explanation>"));
*/
Banner.buildArray = function() {

  // create the array to return.
  var arrReturn = [];

  // Kasco specials - Feb 2018
  //arrReturn.push(new Banner("wide", "de-icers-ice-eaters", "Specials from Kasco: Free Zinc and Cord Upgrade!", ""));
  //arrReturn.push(new Banner("wide", "kasco-de-icers", "Specials from Kasco: Free Zinc and Cord Upgrade!", ""));
  //arrReturn.push(new Banner("narrow", "kasco-deicer-2400d", "Receive a Free Zinc and 50ft Cord Upgrade with this Kasco Model", ""));
  //arrReturn.push(new Banner("narrow", "kasco-deicer-3400d", "Receive a Free Zinc and 50ft Cord Upgrade with this Kasco Model", ""));

//Westland all cover sale - June 2018

arrReturn.push(new Banner("narrow", "westland-custom-boat", "Save 15% on Any Westland Boat Cover! ", "Use code WLSALE15 [exp 3/31]"));
arrReturn.push(new Banner("narrow", "westland-semi-custom-boat", "Save 15% on Any Westland Boat Cover! ", "Use code WLSALE15 [exp 3/31]"));
arrReturn.push(new Banner("wide", "westland-boat-covers", "Save 15% on Any Westland Boat Cover! ", "Use code WLSALE15 [exp 3/31]"));
//arrReturn.push(new Banner("wide", "bay-style-boat-covers","Save 15% on Any Sunbrella Boat Cover! ", "Use code BFCOVERS5 [exp 11/26]"));
//arrReturn.push(new Banner("wide", "aluminum-fishing-boat-covers", "Save 5% on Any Sunbrella Boat Cover! ", "Use code BFCOVERS5 [exp 11/26]"));
//arrReturn.push(new Banner("wide", "bass-boat-covers", "Save 5% on Any Sunbrella Boat Cover! ", "Use code BFCOVERS5 [exp 11/26]"));
//arrReturn.push(new Banner("wide", "covers-for-boats-with-towers", "Save 5% on Any Sunbrella Boat Cover! ", "Use code BFCOVERS5 [exp 11/26]"));
//arrReturn.push(new Banner("wide", "boston-whaler-boat-covers", "Save 5% on Any Sunbrella Boat Cover! ", "Use code BFCOVERS5 [exp 11/26]"));
//arrReturn.push(new Banner("wide", "cruiser-boat-covers", "Save 5% on Any Sunbrella Boat Cover! ", "Use code BFCOVERS5 [exp 11/26]"));
//arrReturn.push(new Banner("wide", "cuddy-cabin-boat-covers","Save 5% on Any Sunbrella Boat Cover! ", "Use code BFCOVERS5 [exp 11/26]"));
//arrReturn.push(new Banner("wide", "deck-boat-covers", "Save 5% on Any Sunbrella Boat Cover! ", "Use code BFCOVERS5 [exp 11/26]"));
//arrReturn.push(new Banner("wide", "dinghy-boat-covers", "Save 5% on Any Sunbrella Boat Cover! ", "Use code BFCOVERS5 [exp 11/26]"));
//arrReturn.push(new Banner("wide", "drift-boat-covers", "Save 5% on Any Sunbrella Boat Cover! ", "Use code BFCOVERS5 [exp 11/26]"));
//arrReturn.push(new Banner("wide", "inflatable-boat-covers", "Save 5% on Any Sunbrella Boat Cover! ", "Use code BFCOVERS5 [exp 11/26]"));
//arrReturn.push(new Banner("wide", "jet-boat-covers", "Save 5% on Any Sunbrella Boat Cover! ", "Use code BFCOVERS5 [exp 11/26]"));
//arrReturn.push(new Banner("wide", "jon-boat-covers", "Save 5% on Any Sunbrella Boat Cover! ", "Use code BFCOVERS5 [exp 11/26]"));
//arrReturn.push(new Banner("wide", "personal-water-craft-covers", "Save 5% on Any Sunbrella Boat Cover! ", "Use code BFCOVERS5 [exp 11/26]"));
//arrReturn.push(new Banner("wide", "pontoon-boat-covers", "Save 5% on Any Sunbrella Boat Cover! ", "Use code BFCOVERS5 [exp 11/26]"));
//arrReturn.push(new Banner("wide", "runabouts-v-hull-tri-hull-boat-covers", "Save 5% on Any Sunbrella Boat Cover! ", "Use code BFCOVERS5 [exp 11/26]"));
//arrReturn.push(new Banner("wide", "tournament-ski-boat-covers", "Save 5% on Any Sunbrella Boat Cover! ", "Use code BFCOVERS5 [exp 11/26]"));
//arrReturn.push(new Banner("wide", "v-hull-fishing-boat-covers", "Save 5% on Any Sunbrella Boat Cover! ", "Use code BFCOVERS5 [exp 11/26]"));

//Carver all cover sale - Sep-Oct 2018
arrReturn.push(new Banner("wide", "/boat-covers", "Save 15% on Any Westland Boat Cover!", "Use code WLSALE15 [exp 3/31]"));
arrReturn.push(new Banner("wide", "/bimini-tops", "Save 15% on Any Westland Bimini Top!", "Use code WLSALE15 [exp 3/31]"));
arrReturn.push(new Banner("wide", "semi-custom-specialty-covers", "Save 15% on Any Westland Boat Cover! ", "Use code WLSALE15 [exp 3/31]"));

//arrReturn.push(new Banner("narrow", "carver-custom-boat", "Save 5% on Any Sunbrella Boat Cover! ", "Use code BFCOVERS5 [exp 11/26]"));
//arrReturn.push(new Banner("narrow", "carver-semi-custom-boat", "Save 5% on Any Sunbrella Boat Cover! ", "Use code BFCOVERS5 [exp 11/26]"));
//arrReturn.push(new Banner("wide", "boats-with-tower-over-the-tower-covers", "Save 5% on Any Sunbrella Boat Cover! ", "Use code BFCOVERS5 [exp 11/26]"));
//arrReturn.push(new Banner("wide", "bay-style-boat-covers", "Save 5% on Any Sunbrella Boat Cover! ", "Use code BFCOVERS5 [exp 11/26]"));
//arrReturn.push(new Banner("wide", "aluminum-fishing-boat-covers", "Save 5% on Any Sunbrella Boat Cover! ", "Use code BFCOVERS5 [exp 11/26]"));
//arrReturn.push(new Banner("wide", "bass-boat-covers", "Save 5% on Any Sunbrella Boat Cover! ", "Use code BFCOVERS5 [exp 11/26]"));
//arrReturn.push(new Banner("wide", "covers-for-boats-with-towers", "Save 5% on Any Sunbrella Boat Cover! ", "Use code BFCOVERS5 [exp 11/26]"));
//arrReturn.push(new Banner("wide", "boston-whaler-boat-covers", "Save 5% on Any Sunbrella Boat Cover! ", "Use code BFCOVERS5 [exp 11/26]"));
//arrReturn.push(new Banner("wide", "cruiser-boat-covers", "Save 5% on Any Sunbrella Boat Cover! ", "Use code BFCOVERS5 [exp 11/26]"));
//arrReturn.push(new Banner("wide", "cuddy-cabin-boat-covers", "Save 5% on Any Sunbrella Boat Cover! ", "Use code BFCOVERS5 [exp 11/26]"));
//arrReturn.push(new Banner("wide", "deck-boat-covers", "Save 5% on Any Sunbrella Boat Cover! ", "Use code BFCOVERS5 [exp 11/26]"));
//arrReturn.push(new Banner("wide", "dinghy-boat-covers", "Save 5% on Any Sunbrella Boat Cover! ", "Use code BFCOVERS5 [exp 11/26]"));
//arrReturn.push(new Banner("wide", "drift-boat-covers", "Save 5% on Any Sunbrella Boat Cover! ", "Use code BFCOVERS5 [exp 11/26]"));
//arrReturn.push(new Banner("wide", "inflatable-boat-covers", "Save 5% on Any Sunbrella Boat Cover! ", "Use code BFCOVERS5 [exp 11/26]"));
//arrReturn.push(new Banner("wide", "jet-boat-covers", "Save 5% on Any Sunbrella Boat Cover! ", "Use code BFCOVERS5 [exp 11/26]"));
//arrReturn.push(new Banner("wide", "jon-boat-covers", "Save 5% on Any Sunbrella Boat Cover! ", "Use code BFCOVERS5 [exp 11/26]"));
//arrReturn.push(new Banner("wide", "personal-water-craft-covers", "Save 5% on Any Sunbrella Boat Cover! ", "Use code BFCOVERS5 [exp 11/26]"));
//arrReturn.push(new Banner("wide", "pontoon-boat-covers", "Save 5% on Any Sunbrella Boat Cover! ", "Use code BFCOVERS5 [exp 11/26]"));
//arrReturn.push(new Banner("wide", "runabouts-v-hull-tri-hull-boat-covers", "Save 5% on Any Sunbrella Boat Cover! ", "Use code BFCOVERS5 [exp 11/26]"));
//arrReturn.push(new Banner("wide", "tournament-ski-boat-covers", "Save 5% on Any Sunbrella Boat Cover! ", "Use code BFCOVERS5 [exp 11/26]"));
//arrReturn.push(new Banner("wide", "v-hull-fishing-boat-covers", "Save 5% on Any Sunbrella Boat Cover! ", "Use code BFCOVERS5 [exp 11/26]"));

//Carver bimini top sale - July 2018
//arrReturn.push(new Banner("wide", "carver-bimini-tops", "Save 5% on Carver bimini tops:  CARVERBIMINI5<br> [exp 7/31]", ""));
//arrReturn.push(new Banner("wide", "pontoon-boat-bimini-top", "Save 5% on Carver bimini tops:  CARVERBIMINI5<br>  [exp 7/31]", ""));
//arrReturn.push(new Banner("wide", "tower-bimini-tops", "Save 5% on Carver bimini tops:  CARVERBIMINI5<br>  [exp 7/31]", ""));
//arrReturn.push(new Banner("wide", "inflatable-boat-bimini-tops", "Save 5% on Carver bimini tops:  CARVERBIMINI5<br>  [exp 7/31]", ""));
//arrReturn.push(new Banner("narrow", "carver-pontoon-bimini-top-", "Save 5% on Carver bimini tops:  CARVERBIMINI5<br> [exp 7/31]", ""));
//arrReturn.push(new Banner("narrow", "carver-bimini-top-", "Save 5% on Carver bimini tops:  CARVERBIMINI5<br> [exp 7/31]", ""));
//arrReturn.push(new Banner("narrow", "carver-tower-bimini-top", "Save 5% on Carver bimini tops:  CARVERBIMINI5<br> [exp 7/31]", ""));

//Westland bimini top sale - July 2018
arrReturn.push(new Banner("wide", "westland-bimini-tops", "Save 15% on Westland bimini tops!", "Use code WLSALE15 [exp 3/31]"));
arrReturn.push(new Banner("narrow", "westland-bimini-top-", "Save 15% on Westland bimini tops:  WLSALE15<br>  [exp 3/31]", ""));
arrReturn.push(new Banner("narrow", "bimini-tops-", "Save 15% on Westland bimini tops:  WLSALE15<br>  [exp 3/31]", ""));

// Fabric - terms on page specific
// arrReturn.push(new Banner("narrow-feature", "Sun-DURA", "Save 5% on this cover:  CARVER5", ""));
 //arrReturn.push(new Banner("narrow-feature", "Sunbrella", "Save 5% on this cover:  BFCOVERS5", ""));
 //arrReturn.push(new Banner("narrow-feature", "Poly-Guard", "Save 5% on this cover:  CARVER5", ""));
 //arrReturn.push(new Banner("narrow-feature", "Camouflage", "Save 5% on this cover:  CARVER5", ""));
 //arrReturn.push(new Banner("narrow-feature", "Duck", "Save 5% on this cover:  CARVER5", ""));

//Wise select seats temp promo - 5/29/18
//  arrReturn.push(new Banner("wide", "boat-seats", "Summer Sale: Save up to $200 on select Wise seats!", ""));
 // arrReturn.push(new Banner("wide", "pontoon-seats-tables", "Save up to $200 on select Wise pontoon seat set!", ""));
 // arrReturn.push(new Banner("narrow", "wise-deluxe-pontoon-fishing-full-set-ws13520", "Save up to $200! Reg Price $1711.10", ""));
 // arrReturn.push(new Banner("narrow", "wise-tracker-style-folding-fishing-boat-seat-mid-back-8WD999PLS-840", "Save $32.28 on select colors. Reg Price $113.26", ""));
 // arrReturn.push(new Banner("narrow", "wise-folding-camo-boat-seat-low-back-8WD618PLS-733", "Save $24.50 on select colors. Reg Price $82.29", ""));
 // arrReturn.push(new Banner("narrow", "wise-talon-pontoon-boat-bucket-seat-with-bolster-3012", "Save $56.75 on select colors. Reg Price $394.07", ""));
 // arrReturn.push(new Banner("narrow", "wise-pinnacle-back-to-back-boat-seat-3060", "Save $76.89 on select colors. Reg Price $388.94", ""));
 // arrReturn.push(new Banner("narrow", "wise-pinnacle-jump-seat-3061", "Save $21.01 on select colors. Reg Price $155.75", ""));

//Navigloo shelter covers prop - 9/11/18
//arrReturn.push(new Banner("wide", "navigloo-boat-shelters", "Save 10% on Navigloo boat covers:  NAVIGLOO10<br> [exp 10/31]", ""));
//arrReturn.push(new Banner("wide", "navigloo/", "Save 10% on Navigloo boat covers:  NAVIGLOO10<br> [exp 10/31]", ""));
//arrReturn.push(new Banner("wide", "q=navigloo", "Save 10% on Navigloo boat covers: <br>  NAVIGLOO10 [exp 10/31]", ""));
//arrReturn.push(new Banner("narrow", "navigloo-boat-cover-", "Save 10% on Navigloo boat covers: <br>  NAVIGLOO10 [exp 10/31]", ""));

 
 // return the array.
  return arrReturn;
}

/**
* Static function that will build the array of banners and then evaluate against
* the url of the page.
*/
Banner.checkForBanners = function() {

  // build the array.
  var arrBanners = this.buildArray();

  // get the page url.
  var pageUrl = window.location.href;

  // cycle through the array looking for a match.
  $.each(arrBanners, function(index, obj) {

    // see if the url fragement is in the page url.
    if (pageUrl.indexOf(obj.urlFragment) > -1) {

      // set the html based on the object properties.
      setHtml(obj);

    } // end if
    else {

      // check if this the banner is based on the feature section.
      if ((obj.which === "narrow-feature") || (obj.which === "wide-feature")) {

        // for the html of the feature section. will be looking in different
        // sections depending on which selected.
        var featureSection = "";

        // check if this is a search by feature.
        if (obj.which === "narrow-feature") {

          // get the text from the feature section.
          featureSection = $(".ProductWarrantyContainer").html();

        } // end if
        else if (obj.which === "wide-feature") {

          // get the text from the feature section.
          featureSection = $(".leftBox").html();

        } // end else if.

        // look for text in string.
        if ((featureSection !=null) && (featureSection.indexOf(obj.urlFragment) > -1)) {

          // set the HTML for the banner.
          setHtml(obj);
        } // end if (featureSection.indexOf(obj.urlFragment) > -1)
      } // end if ((obj.which === "narrow-feature") || (obj.which === "wide-feature"))
    } // end else
  }); // end each
} // end checkForBanners

/**
* Helper function that will evaluate the object to determine where to set the
* html for the banner. Builds the html using a different helper function.
* @param obj object with the banner information.
*/
var setHtml = function(obj) {

  // determine where and how to set the html for the banner.
  switch (obj.which) {
    // narrow banner.
    case "narrow":
    case "narrow-feature":
      console.log("printing HTML...");
      $('div.ProductThumb').prepend(buildHtml(obj));
      break;
    // wide banner.
    case "wide":
    case "wide-feature":
      $('.CategoryDesc').append(buildHtml(obj));
      break;
  } // end switch.
} // end setHtml

/**
* Helper function to build the html to display the banner.
* @param obj object with the banner information.
*/
var buildHtml = function(obj) {

  // string to return.
  var strReturn = "";

  // determine which html to build based on object property.
  switch (obj.which) {
    // narrow banner.
    case "narrow":
    case "narrow-feature":
      strReturn = '<div class="saleBannerNarrow">' + obj.headline + '</div>';
     //   '</div><div class="saleExplanationNarrow">' + obj.explanation + '</div>';
      break;
    // wide banner.
    case "wide":
    case "wide-feature":
      strReturn = '<div class="saleBannerWide">' + obj.headline +
        '<span class="saleExplanation">' + obj.explanation + '</span></div>';
      break;
  } // end switch.

  // return the html string.
  return strReturn;
} // end buildHtml
