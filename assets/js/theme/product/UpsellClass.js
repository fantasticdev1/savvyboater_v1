/**
* UpsellClass.js
* Created 2017-12-13 by PKT-JW.
* The purpose of this class is to replace the pricing code on the product
* page that was not working correctly. Previously, the code went into multiple
* branches of logic that were not properly handling every user action. This code
* attempts to unify the pricing code so that every change starts the pricing
* process from the base price each time.
*
* IMPORTANT: In order for the pricing to work, the HTML element must use the
* following format: <the product> (+ <amount>). Spaces are important.
*/

/**
* The properties for the class are taken from the legacy code. Some may no
* longer be needed. The code written by PKT-JW primarily uses .currPrice and
* .originalAvailability.
*/
function Upsell() {

  // create the properties that were in the legacy code. Adding them here
  // like this so that we can see what was used.
  this.url = "";
  this.productTitle = "";
  this.originalAvailability = "";
  this.sa_product = "";
  this.originalPrice = parseFloat("0.00");
  this.currentPrice = parseFloat("0.00");
  this.item = [];
  this.itemPrice = parseFloat("0.00");
  this.lastItem = ['', ''];
  this.lastItemPrice = 0;
  this.lastManualPrice = 0;
  this.newPrice = 0;
  this.interval = "";
  this.cycles = 0;
  this.currPrice = parseFloat("0.00");
  this.comNotClicked = 0;

}

/**
* Adds upsell items to the cart based on the checkboxes checked on the
* pricing page.
* @param arrChecked Checkbox labels of those items that are checked.
* @returns array of urls to access via AJAX.
*/
function buildUpsellUrls(arrChecked) {

  // array to return.
  var product = [];

  // cycle through the array.
  for (var i = 0; i < arrChecked.length; i ++) {

    // look for these items to add them to the cart.
    switch (arrChecked[i].trim()) {
      case '4 SS Fender Holders  14.25in':
          product.push('/cart.php?action=add&product_id=58907');
          break;
      case '4 SS Fender Holders  12in':
          product.push('/cart.php?action=add&product_id=58905');
          break;
      case '2 SS Fender Holders  12in':
          product.push('/cart.php?action=add&product_id=58904');
          break;
      case '4 SS Fender Holders  7in':
          product.push('/cart.php?action=add&product_id=58902');
          break;
      case '4 SS Fender Holders  9in':
          product.push('/cart.php?action=add&product_id=58901');
          break;
      case 'Vented Support Pole':
          product.push('/cart.php?action=add&product_id=56266');
          break;
      case 'Snap Patch for Support Pole':
          product.push('/cart.php?action=add&product_id=58252');
          break;
      case 'Add Padded Backrest':
          product.push('/cart.php?action=add&product_id=56342');
          break;
      case 'Add Pair of Arm Rest Covers':
          product.push('/cart.php?action=add&product_id=56343');
          break;
      case 'Add Back Rest Cushion':
          product.push('/cart.php?action=add&product_id=56344');
          break;
      case 'Arm Rest Covers & Cushion':
          product.push('/cart.php?action=add&product_id=56343');
          product.push('/cart.php?action=add&product_id=56344');
          break;
      case 'Add 9" Adjustable Rod Holder':
          product.push('/cart.php?action=add&product_id=56345');
          break;
      case 'Add Shallow Water Stand':
          product.push('/cart.php?action=add&product_id=50888');
          break;
      case 'Add 115V Thermostat':
          product.push('/cart.php?action=add&product_id=58967');
          break;
      case 'Add 115V Timer':
          product.push('/cart.php?action=add&product_id=50887&variation_id=&currency_id=&attribute%5B25398%5D=1114&qty%5B%5D=1&w=getProductAttributeDetails');
          break;
      case 'Add 230V Thermostat':
          product.push('/cart.php?action=add&product_id=58035');
          break;
      case 'Add 230V Timer':
          product.push('/cart.php?action=add&product_id=50887&variation_id=&currency_id=&attribute%5B25398%5D=1115&qty%5B%5D=1&w=getProductAttributeDetails');
          break;
      case 'Add a Dock Mount for P500':
          product.push('/cart.php?action=add&product_id=58030');
          break;
      case 'Add a Dock Mount':
          product.push('/cart.php?action=add&product_id=58031');
          break;
      case 'Support Pole - Snap End':
          product.push('/cart.php?action=add&product_id=58115');
          product.push('/cart.php?action=add&product_id=59607');
          break;
      case 'Support Pole - Vent II':
          product.push('/cart.php?action=add&product_id=58114');
          break;
      case 'Pontoon Mooring Kit':
          product.push('/cart.php?action=add&product_id=58117');
          break;
      case 'Support System':
          product.push('/cart.php?action=add&product_id=58060');
          break;
      case 'Rope Ratchet':
          product.push('/cart.php?action=add&product_id=58058');
          break;
      case 'Reinforcement/Repair Kit':
          product.push('/cart.php?action=add&product_id=58059');
          break;
      case 'Storage Boot for ST50':
          product.push('/cart.php?action=add&product_id=59695');
          break;
      case 'Storage Boot for ST57':
          product.push('/cart.php?action=add&product_id=59696');
          break;
      case 'Storage Boot for ST63':
          product.push('/cart.php?action=add&product_id=59697');
          break;
      case 'Storage Boot for ST69':
          product.push('/cart.php?action=add&product_id=59698');
          break;
      case 'Storage Boot for ST75':
          product.push('/cart.php?action=add&product_id=59699');
          break;
      case 'Storage Boot for ST81':
          product.push('/cart.php?action=add&product_id=59700');
          break;
      case 'Storage Boot for ST87':
          product.push('/cart.php?action=add&product_id=59701');
          break;
      case 'Storage Boot for ST93':
          product.push('/cart.php?action=add&product_id=59702');
          break;
      case 'Support Pole & Snap Patch':
          product.push('/cart.php?action=add&product_id=56277');
          break;
      case 'Tie-down Straps':
          product.push('/cart.php?action=add&product_id=57660');
          break;
      case 'Quick Cinch':
          product.push('/cart.php?action=add&product_id=58061');
          break;
      case 'Quick Cinch Pocket':
          product.push('/cart.php?action=add&product_id=58062');
          break;
      case 'Support Pole - Vent':
          product.push('/cart.php?action=add&product_id=58116');
          break;
      case 'Tie-down strap set of 12':
          product.push('/cart.php?action=add&product_id=57660');
          break;
      case 'Brace kit - 30" - nylon':
          product.push('/cart.php?action=add&product_id=57937');
          break;
      case 'Brace kit - 30" - stainless steel':
          product.push('/cart.php?action=add&product_id=57938');
          break;
      case 'Aluminum Brace Kit - 33in':
          product.push('/cart.php?action=add&product_id=57939');
          break;
      case 'Aluminum Brace Kit - 48in':
          product.push('/cart.php?action=add&product_id=57944');
          break;
      case 'Aluminum Brace Kit - 48"':
          product.push('/cart.php?action=add&product_id=57944');
          break;
      case 'Single Brace Kit':
          product.push('/cart.php?action=add&product_id=57941');
          break;
      case 'Double Brace Kit':
          product.push('/cart.php?action=add&product_id=57942');
          break;
      case 'Single Pair - SS Fittings':
          product.push('/cart.php?action=add&product_id=58248');
          break;
      case 'Double Pair - SS Fittings':
          product.push('/cart.php?action=add&product_id=58247');
          break;
      case 'Adj Brace Kit - 22-44" alum':
          product.push('/cart.php?action=add&product_id=57943');
          break;
      case 'Fixed Brace Kit - 48" alum':
          product.push('/cart.php?action=add&product_id=57944');
          break;
      case 'Stainless Steel Brace Kit - 48"':
          product.push('/cart.php?action=add&product_id=58090');
          break;
      case 'Rush production: 3 bus. days':
          product.push('/cart.php?action=add&product_id=57659');
          break;
      case 'Rush production:: 3 bus. days':
          product.push('/cart.php?action=add&product_id=58245');
          break;
      case '18in Slide Track Kit':  //Carver slide track
          product.push('/cart.php?action=add&product_id=58097');
          break;
      case '24in Slide Track Kit':
          product.push('/cart.php?action=add&product_id=58110');
          break;
      case '36in Slide Track Kit':
          product.push('/cart.php?action=add&product_id=58111');
          break;
      case '48in Slide Track Kit':
          product.push('/cart.php?action=add&product_id=58112');
          break;
      case '60in Slide Track Kit':
          product.push('/cart.php?action=add&product_id=58113');
          break;
      case '12" Slide Track Kit':  //WL deck mounts
          product.push('/cart.php?action=add&product_id=58098');
          break;
      case '24" Slide Track Kit':
          product.push('/cart.php?action=add&product_id=58099');
          break;
      case '36" Slide Track Kit':
          product.push('/cart.php?action=add&product_id=58100');
          break;
      case '48" Slide Track Kit':
          product.push('/cart.php?action=add&product_id=58101');
          break;
      case '60" Slide Track Kit':
          product.push('/cart.php?action=add&product_id=58102');
          break;
      case '72" Slide Track Kit':
          product.push('/cart.php?action=add&product_id=58103');
          break;
      //Taylor Made fender upsells
      case 'Fender Lines':
          product.push('/cart.php?action=add&product_id=50057&attribute%5B19640%5D=414');
          break;
      case 'Fender Straps':
          product.push('/cart.php?action=add&product_id=58962');
          break;
      case 'Fender Brackets':
          product.push('/cart.php?action=add&product_id=58959');
          break;
      case 'Lock & Peg - 1/4"':
          product.push('/cart.php?action=add&product_id=58961');
          break;
      case 'Lock & Peg - SS 1/2"':
          product.push('/cart.php?action=add&product_id=58951');
          break;
      case 'Fender Clips: Lifeline':
          product.push('/cart.php?action=add&product_id=58964');
          break;
      case 'Fender Clip - 7/8" Rails':
          product.push('/cart.php?action=add&product_id=58960');
          break;
      case 'Fender Hanger: Rail - Small':
          product.push('/cart.php?action=add&product_id=58956');
          break;
      case 'Fender Hanger: Line':
          product.push('/cart.php?action=add&product_id=58954');
          break;
      case 'Fender Hanger: Rail - Large':
          product.push('/cart.php?action=add&product_id=58957');
          break;
      case 'Fender Hanger: Vertical Rail':
          product.push('/cart.php?action=add&product_id=58963');
          break;
      case 'Fender Hanger: Racheting':
          product.push('/cart.php?action=add&product_id=58955');
          break;
      case 'Fender Hanger: Quick Knot':
          product.push('/cart.php?action=add&product_id=58958');
          break;
      case 'Tidy-Ups Fender Adjuster Kit':
          product.push('/cart.php?action=add&product_id=58966');
          break;
      case 'Line Holders - 1.25" Rail':
          product.push('/cart.php?action=add&product_id=58952');
          break;
      case 'Line Holders - 2" Rail':
          product.push('/cart.php?action=add&product_id=58953');
          break;
      case 'Fender Holders: 7"-9"':
          product.push('/cart.php?action=add&product_id=50058');
          break;
      case 'Fender Holders: 9"-11"':
          product.push('/cart.php?action=add&product_id=50059');
          break;
      case 'Fender Adjuster':
          product.push('/cart.php?action=add&product_id=50062');
          break;
      case 'Fender Hanger Locks':
          product.push('/cart.php?action=add&product_id=50052');
          break;
      //For de-icers
      case 'Thermostat': //Kasco
          product.push('/cart.php?action=add&product_id=58036');
          break;
      case 'Dock Mount': //Kasco
          product.push('/cart.php?action=add&product_id=58042');
          break;
      case 'Float Mount': //Kasco
          product.push('/cart.php?action=add&product_id=58045');
          break;
      case 'Zinc': //Kasco FREE
          product.push('/cart.php?action=add&product_id=58050');
          break;
      case 'Thermostat - 115V':
          product.push('/cart.php?action=add&product_id=58967');
          break;
      case 'Timer - 115V':
          product.push('/cart.php?action=add&product_id=58053');
          break;
      case 'Thermostat - 230V':
          product.push('/cart.php?action=add&product_id=58035');
          break;
      case 'Thermostat - 25F On/35F Off':
          product.push('/cart.php?action=add&product_id=59836');
          break;
      case 'Thermostat - 30F On/40F Off':
          product.push('/cart.php?action=add&product_id=59837');
          break;
      case 'Float for 1/2 to 1 HP':
          product.push('/cart.php?action=add&product_id=59839');
          break;
      case 'Float for 2 HP':
          product.push('/cart.php?action=add&product_id=59840');
          break;
      case 'Zinc Anode':
          product.push('/cart.php?action=add&product_id=59838');
          break;
      case 'Timer - 230V':
          product.push('/cart.php?action=add&product_id=58054');
          break;
      case 'Dock Mount for P500':
          product.push('/cart.php?action=add&product_id=58030');
          break;
      case 'Dock Mount for P750|P1000':
          product.push('/cart.php?action=add&product_id=58031');
          break;
      case 'Aluminum Anode':
          product.push('/cart.php?action=add&product_id=58057');
          break;
       case 'Screen Kit':
          product.push('/cart.php?action=add&product_id=58056');
          break;
       case 'Shallow Water Stand':
          product.push('/cart.php?action=add&product_id=58055');
          break;
       case 'Armrest': //for Bentley single seats
          product.push('/cart.php?action=add&product_id=59330');
          break;
       case 'Headrest': //for Bentley single seats
          product.push('/cart.php?action=add&product_id=59331');
          break;
       case 'Heated Seat': //for Bentley single seats
          product.push('/cart.php?action=add&product_id=59332');
          break;
       case 'Swivel': //for Bentley seats
          product.push('/cart.php?action=add&product_id=59333');
          break;
       case 'Chassis Boot': //for Bentley seats
          product.push('/cart.php?action=add&product_id=59334');
          break;
       case 'Adjustable Headrest': //for Bentley Elite seats
          product.push('/cart.php?action=add&product_id=59323');
          break;
       case 'Seaboard Upgrade': //for Bentley Elite seats
          product.push('/cart.php?action=add&product_id=59324');
          break;
       case 'Weather Cover': //for Bentley Elite seats
          product.push('/cart.php?action=add&product_id=59329');
          break;
       case 'Stationary Pedestal 24"': //for Bentley Elite seats
          product.push('/cart.php?action=add&product_id=59328');
          break;
       case 'Adjustable Pedestal 24-32"': //for Bentley Elite seats
          product.push('/cart.php?action=add&product_id=59327');
          break;
       case 'Slideout Footrest for Adjustable Pedestal': //for Bentley Elite seats
          product.push('/cart.php?action=add&product_id=59326');
          break;
       case 'Slideout Footrest for Stationary Pedestal': //for Bentley Elite seats
          product.push('/cart.php?action=add&product_id=59325');
          break;
    } // end switch.
  } // end for loop.

  // return the array.
  return product;
}

/**
* Static function.
* Handles the upsell additions based on the checked items on the product page.
* Accesses URLs in array to add items.
*/
Upsell.upsellLibrary = function() {

  // get the array of checked items.
  var arrChecked = getCheckedItems();

  // array of products that need to be added.
  var product = buildUpsellUrls(arrChecked);

  // cycle through product array and add products to cart.
  for (var i = 0; i < product.length; i++) {
      $.ajax({type: 'GET', async: false, url: product[i]});
  }

  // After adding the Add-on to the cart, un-check the input, so when the form
  // is submitted, the base product will be added without the Add-on
  $('.productOptionViewProductPickList li input:checked').attr('checked', false);
}

/**
* Static function.
* Handles the addition of free items based on the url of the product. Accesses
* URL to add item to cart using the handleNewFreeItem function in the
* etc-onload.js file.
*/
Upsell.freeItems = function() {

  // PKT: Changed this section 2017-08-23 by PKT-JW.
  // If we're on a Carver boat cover page, add the free tie-down and storage bag to the cart.
  if ((window.location.href.indexOf('carver-custom-boat-cover') > -1) ||
    (window.location.href.indexOf('carver-semi-custom-boat-cover') > -1) ||
    (window.location.href.indexOf('carver-specialty-boat-cover') > -1) ||
    (window.location.href.indexOf('carver-universal-boat-cover') > -1)) {

      // PKT: Added 2017-08-25 by PKT-JW
      // PKT: we need to record this free item to a cookie so
      // PKT: that we can remove it in the cart if the user
      // PKT: removes the main item.
      handleNewFreeItem(getItemUrl(), "57657",
        "carver-free-accessory-tie-down-kit-and-storage-bag-61001");

      // add the new free item.
      $.ajax({type: 'GET', async: false, url: '/cart.php?action=add&product_id=57657'});
  }

  // If we're on a Westland semi-custom boat cover page, add the vented support pole to the cart.
//Per Carie @Westland, the support pole comes with the cover and is included under the boat cover part number. No need to add this as an independent item to cart. -Emily
// if (window.location.href.indexOf('westland-semi-custom-boat-cover') > -1) {

    // PKT: Added 2017-08-25 by PKT-JW
    // PKT: we need to record this free item to a cookie so
    // PKT: that we can remove it in the cart if the user
    // PKT: removes the main item.
 //   handleNewFreeItem(getItemUrl(), "58623", "snap-patch-for-snap-pole");

    // add the new free item.
 //   $.ajax({type: 'GET', async: false, url: '/cart.php?action=add&product_id=58623'});
 // }

  // If we're on a Carver Support Pole Snap page, add the snap to the cart.
  if (window.location.href.indexOf('carver-snap-end-support-pole') > -1) {

    handleNewFreeItem(getItemUrl(), "59607", "carver-snap-for-support-pole-snap-style");

    // add the new free item.
    $.ajax({type: 'GET', async: false, url: '/cart.php?action=add&product_id=59607'});
  }
}

/**
* Runs a number of functions on page start up.
*/
Upsell.prototype.startUpRoutine = function() {

  // convert radio buttons to checks.
  this.radioToChecks();

  // change the label for boat covers.
  this.addOnsToUpgrades('boat-cover');

  // add the initial price to the hidden input.
  this.setInitialCurrentPrice();

  // add the price changes to the select elements.
  this.addPriceCheckToSelects();

  // add the price changes to the checkboxes.
  this.addPriceCheckToCheckboxes();

  // add the price changes to the radios.
  this.addPriceCheckToRadios();

  // add labels and buttons for user experience.
  this.addUxItems();

  // handle rush shipping checkbox.
  this.handleRushCheck();
}

/**
* Taken from the legacy code. Checks and unchecks hidden input when the rush
* production checkbox is checked.
*/
Upsell.prototype.handleRushCheck = function() {

  // set the checkbox element.
  var theCheck = $('.productAttributeRow span:contains("Rush production:")');

  // console.log("handleRushCheck theCheck...");
  // console.log(theCheck);

  theCheck.parent('label').parent().find('input').on('change', function() {
      if($(this).is(':checked')){

          //console.log("checking input...");
          //console.log($('.productAttributeRow span:contains("Yes")').parent('label').find('input'));

          // check the hidden element.
          $('.productAttributeRow span:contains("Yes")').parent('label').parent().find('input.form-checkbox').prop('checked', true);
      }
      else {

        // uncheck the hidden element.
        $('.productAttributeRow span:contains("Yes")').parent('label').parent().find('input.form-checkbox').prop('checked', false);
      }
    });
}

/**
* Taken from legacy code. Adds additional UI elements to page.
*/
Upsell.prototype.addUxItems = function() {

  // Add message above boat info text box.
  if($('.productAttributeRow:contains("Your Boat Info")').length){
    $('.productAttributeRow:contains("Your Boat Info")').find('.form-input').attr('placeholder', 'Please Enter Your Boat Make, Model, and Year');
  }

  // Add a "shop all" button to PowerTech product pages
  if(~document.location.href.indexOf("/powertech-")){
      $('.productView-image').prepend('<div class="goToAllDeIcers"><a href="https://www.savvyboater.com/contact-us-boat-propellers/" target="blank">Help me choose a PowerTech prop!</a>&nbsp;<a href="/powertech-boat-propellers/">PowerTech Propellers Finder</a></div>');
  }

  // hide the double colon expedited label.
  if($('.productAttributeRow:contains("Expedited::")').length){
      $('.productAttributeRow:contains("Expedited::")').hide();
  }
}

/**
* Adds a change event to the dropdowns. All dropdowns appeared to have the
* .validation CSS class so that is how they were identified.
*/
Upsell.prototype.addPriceCheckToSelects = function() {

  // can't use this so have to create object and set this.
  var upsellObj = this;

  // Event listener on inputs will run function to check if a price change is needed
  $('.validation').change(function() {

    // use the upsellSelectChangePrice method within this class.
    // upsellObj.upsellSelectChangePrice(this);
    upsellObj.updatePriceLabel();
  });
};

/**
* Adds a change event to the upsell checkboxes. All appeared to have the
* .customCheckBox CSS class so that is how they were identified.
*/
Upsell.prototype.addPriceCheckToCheckboxes = function() {

  // can't use this so have to create object and set this.
  var upsellObj = this;

  // Event listener on inputs will run function to check if a price change is needed
  $('.customCheckBox').change(function() {

    // use the upsellTallyPrice method within this class.
    upsellObj.updatePriceLabel();

    // update the shipping label if the checkbox is regards to rush shipping.
    upsellObj.updateShippingLabel(this);
  });
}

/**
* Adds a change event to the upsell radio buttons. Looks for all radio buttons
* on the page.
*/
Upsell.prototype.addPriceCheckToRadios = function() {
  // can't use this so have to create object and set this.
  var upsellObj = this;

  // Event listener on inputs will run function to check if a price change is needed
  $('form input[type=radio]').change(function() {

    // use the upsellTallyPrice method within this class.
    upsellObj.updatePriceLabel();
  });
}

/**
* Taken from legacy code but added replaceRadioWithCheck function.
* Converts the radio buttons from BigCommerce to checkboxes.
*/
Upsell.prototype.radioToChecks = function() {

  // check to see if there is a picklist on the page
  // indicated by the class usage.
  if ($(".productOptionViewProductPickList").length > 0) {

    // remove the first list item.
    $('.productOptionViewProductPickList').find('ul li:first-child').remove();

    // use the utility function to replace the radios with the checkboxes.
    replaceRadioWithCheck(".productOptionViewProductPickList", "customCheckBox");

    // find all inputs within .productAttributeValue to add the custom checkbox class.
    $(".productAttributeValue").find("input").addClass('customCheckBox');

    // remove the first list item in the radio list.
    $('.productOptionViewRadio').find('ul li:first-child').remove();

    // use the utility function to replace the radios with the checkboxes.
    replaceRadioWithCheck(".productOptionViewRadio", "customCheckBox");
  } // end if ($(".productOptionViewProductPickList").length > 0)
};

/**
* Taken from legacy code. Changes text with Add-ons to Upgrades.
*/
Upsell.prototype.addOnsToUpgrades = function(partialUrl) {

  // look for the part of the url.
  if (this.url.indexOf(partialUrl)) {

    // match so cycle through looking for Add-ons label.
    $("span.name").each(function() {

      // set the text from the span.
      var spanTxt = $(this).text();

      // look for add-ons text.
      if(spanTxt.trim() == "Add-ons:") {

        // change to upgrades.
        $(this).html("Upgrades:");
      }
    }); // end $("span:.name").each
  } // end if (window.location.href.indexOf(partialUrl))
}; // end addOnsToUpgrades

/**
* Based on legacy code. Changes shipping text if rush production is selected.
* Legacy code stated that this is for westland rush shipping only.
*/
Upsell.prototype.updateShippingLabel = function(theElem) {

  // get the checkbox label. assumes that there is one.
  var chktempValue = $(theElem).parent().find('span:first').text();

  //console.log("chktempValue: " + chktempValue);

  // see if this is a rush shipping box.
  if (chktempValue.indexOf("Rush production:: 3 bus. days") > -1) {

    //console.log("found rush...");

    // see if it is checked.
    if (theElem.checked) {

      //console.log("theElem is checked...");

      $('.productView-info-name:contains("Availability:")').next().text('Leaves warehouse in 3 bus. days, subject to availability');

    }
    else {

      //console.log("theElem not checked...");

      $('.productView-info-name:contains("Availability:")').next().text(this.originalAvailability);
    }
  }
}

/**
* Puts current price in the hidden input with the xtraPriceFun class.
*/
Upsell.prototype.setInitialCurrentPrice = function() {

  // set the value of the hidden input.
  $(".xtraPriceFun").val(this.currPrice);
};

/**
* Updates the price label based on the tally of upsells in both the checkboxes
* and in the dropdowns. Waits one second for the update to prevent Big BigCommerce
* scripts from overwriting.
*/
Upsell.prototype.updatePriceLabel = function() {

  // float that will be used to set price.
  var upsellTotal = parseFloat("0.00");

  // set the original price from the currentPrice property. set to 0 if
  // does not exist.
  var originalPrice = parseFloat(this.currPrice) || 0;
  
  // add the three tallies.
  upsellTotal = parseFloat(this.upsellTallyChecks() +
    this.upsellTallyDropdowns(originalPrice)) +
    this.upsellTallyRadios(originalPrice) || 0;

  // add the upsellTotal to the current total.
  var finalTotal = parseFloat("0.00");

  // add the original price and the upsell total.
  finalTotal = originalPrice + upsellTotal;

  // have to use a setTimeout to set the price after a second in order to
  // not have it overwritten by BigCommerce scripts.
  window.setTimeout(function(){
    // set the label.
    $(".VariationProductPrice").html('$' + finalTotal.toFixed(2));
  }, 1000);
};

/**
* Adds the upsell amounts for the checkboxes.
* @returns total amount as a float.
*/
Upsell.prototype.upsellTallyChecks = function() {

  // for the total.
  var upsellTotal = parseFloat("0.00");

  // cycle through all checkboxes.
  $(".customCheckBox:checkbox").each(function() {

    // see if it is checked.
    if (this.checked) {

      // get the checkbox label. assumes that there is one.
      var chktempValue = $(this).next().find('span:first').text();

      // get the price from the label if there is one.
      var fltPrice = extractPriceFromString(chktempValue);

      // add to total.
      upsellTotal += fltPrice;
        console.log(fltPrice);
    }
  }); // end $(".customCheckBox").each

  // some upgrades apparently do not fit the criteria above.
  // e.g. Item #: PFS4893UBL
  $(".validation:checkbox").each(function() {

    // see if it is checked.
    if (this.checked) {
      // get the checkbox label. assumes that there is one.
      var chktempValue = $(this).parent().find('span:first').text();

      // get the price from the label if there is one.
      var fltPrice = extractPriceFromString(chktempValue);

      // add to total.
      upsellTotal += fltPrice;
    }
  });

  // return the total.
  return upsellTotal;

} // end Upsell.prototype.upsellTallyPrice

/**
* Adds the upsell amounts for the dropdowns.
* @returns total amount as a float.
*/
Upsell.prototype.upsellTallyDropdowns = function(originalPrice) {

  // for the total.
  var upsellTotal = parseFloat("0.00");

  // cycle through all checkboxes.
  $("select.customDropDown").each(function() {

    // get all of the selected options.
    // console.log($(this).children(':selected').text());
    var selectTempValue = $(this).children(':selected').text();

    // get the price for this upsell from the select option.
    var fltPrice = parseFloat(0.00);

    // check to see if this is a percentage.
    if (selectTempValue.indexOf('%') == -1) {

      // assume the value is an amount to add.
      fltPrice = extractPriceFromString(selectTempValue);

      // add to total.
      upsellTotal += fltPrice;
    }
    else {

      // assume the value is a percentage.
      fltPrice = extractPercentageFromString(selectTempValue);

      // multiply percentage with total.
      upsellTotal = originalPrice * fltPrice;
    }
  });

  // return the total.
  return upsellTotal;
};

Upsell.prototype.upsellTallyRadios = function(originalPrice) {

  // for the total.
  var upsellTotal = parseFloat("0.00");

  // cycle through all radios.
  $("form input[type=radio]").each(function() {

    // get the price for this upsell from the select option.
    var fltPrice = parseFloat(0.00);

    // look for checked.
    if ($(this).is(":checked")) {

      // get span text following input.
      var spanTxt = $(this).parent().find("span").text();

      // check to see if this is a percentage.
      if (spanTxt.indexOf('%') == -1) {

        // assume the value is an amount to add.
        fltPrice = extractPriceFromString(spanTxt);

        // add to total.
        upsellTotal += fltPrice;
      }
      else {

        // assume the value is a percentage.
        fltPrice = extractPercentageFromString(spanTxt);

        // multiply percentage with total.
        upsellTotal = originalPrice * fltPrice;
      }
    }
  });

  // return the total.
  return upsellTotal;
};

/**
* DEPRECATED. Tallied totals.
*/
Upsell.prototype.upsellSelectChangePrice = function(theElem) {
  // will be checking if this is rush shipping.
  var rush = false;

  // determine if this is a customCheckBox set on page load with this class.
  if($(theElem).hasClass("customCheckBox")){

    // see if it is checked.
    if($(theElem).is(":checked")){

      // get the parent of the element.
      var subParent = jQuery(theElem).parent();

      // add a customselectedValue class to the parent of the parent.
      $(subParent).parent().addClass("customselectedValue");
    }
      else{
          var subParent = jQuery(this).parent();
          if(jQuery(subParent).parent().hasClass("customselectedValue")){
              jQuery(subParent).parent().removeClass("customselectedValue");
              var comNotClicked = 0;
          }
          else{
              var comNotClicked = 1;
          }
      }
     clearInterval(interval);
  }
};

/****** HELPER FUNCTIONS **********/

/**
* Retrieves all of the checked items from the upsells.
* @returns array of checked items.
*/
function getCheckedItems() {

  // array to return.
  var arrReturn = [];

  // get all of the custom checkboxes.
  $('.customCheckBox').each(function(index) {

    // see if it is checked.
    if (this.checked) {

      // get the text for the checkbox.
      var chktempValue = $(this).parent().find('.form-label span:first').text();

      // split the text from the amount to add.
      var itemParts = chktempValue.split(' (+ ');

      // add the text part of the item to the array.
      arrReturn.push(itemParts[0]);
    }
  });

  // return the array.
  return arrReturn;
}

/**
* Takes a radio button and changes it to a checkbox.
* @param cssClassOfList css class of element where unordered list is.
* @param cssClassOfBox css class that needs to be added to checkbox.
*/
function replaceRadioWithCheck(cssClassOfList, cssClassOfBox) {

  // cycle through all list items within the unordered list with the css class.
  $(cssClassOfList + ' ul li').each(function(){

    // find the radio button and make it a checkbox.
    $(this).find(':radio').prop('type','checkbox');

    // add the css class to the checkbox element.
    $(this).find(':checkbox').addClass(cssClassOfBox);
  });
}

/**
* Legacy code: remove non-numeric characters and convert to floats for addition.
*/
function cleanPrice(input) {
    return Math.round(parseFloat(input.replace(/\$|\)|,/g, '')) * 100) / 100;
}

/**
* Displays the price in the specified input element.
* @param input element where to display the price.
*/
function displayPrice(input) {
    $('.PriceRow .Label').text('Our Price:');
    $('em.ProductPrice').text('$' + input.toFixed(2));
}

/**
* Takes string and extracts the price. Assumes the format:
* <label text> (+ <price>)
* @param strLabel label text.
* @returns price as a float.
*/
function extractPriceFromString(strLabel) {

  // float value to return.
  var floatReturn = parseFloat("0.00");

  // look for the plus sign in the string.
  if (strLabel.indexOf(' (+ ') > -1) {

    // array of split value.
    var arrStrLabel = strLabel.split(' (+ ');

    // get just the price from the second element in the array.
    var strPrice = arrStrLabel[1].replace(")", "").replace("$", "");

    // cast the price as a float.
    floatReturn = parseFloat(strPrice);
  }

  // return the value.
  return floatReturn;
}

/**
* Takes string and extracts the percentage. Assumes the format:
* <label text> (+ <percentage>%) - <label text>
* @param strLabel label text.
* @returns price as a float.
*/
function extractPercentageFromString(strLabel) {

  // float value to return.
  var floatReturn = parseFloat("0.00");

  // look for the plus sign in the string.
  if (strLabel.indexOf(' (+ ') > -1) {

    // array of split value.
    var arrStrLabel = strLabel.split(' (+ ');

    var arrStrLabel2;

    // If third element contains
    if (arrStrLabel[1].indexOf(' - ') > -1) {
      var arrStrLabel3 = arrStrLabel[1].split(' - ');
      arrStrLabel2 = arrStrLabel3[0];
    } else {
      arrStrLabel2 = arrStrLabel[1];
    }

    // get just the price from the second element in the array.
    var strPrice = arrStrLabel2.replace(")", "").replace("$", "").replace("%","");
    console.log(strPrice, '%');

    // convert to a decimal.
    strPrice = strPrice / 100;

    // cast the price as a float.
    floatReturn = parseFloat(strPrice);
  }

  // return the value.
  return floatReturn;
}

$('.customCheckBox').attr('required', false);