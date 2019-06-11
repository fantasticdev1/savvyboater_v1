/**
* tooltips.js
*
* Re-written 2017-08-30 by PKT-JW.
* Updated 2017-10-19 by PKT-JW to create functions for the dw_tooltips library.
* The purpose of this file is to create added labels to the product options,
* add-ons, upgrades, and other sections as well as to create tooltips using
* the qtip v.3.0.3 javascript library. Changes can be made to the first two functions
* below where you would specify which labels (dataAddedLabels) and which
* tooltips (dataToolTips) to set. Formatting is uniform based on the functions
* below. The jquery.qtip.min.css file sets the css for the tips. More information
* about qtip: http://qtip2.com/ The backup of the previous tooltips.js file is
* available in the js directory.
*/

/**
* Adds additional labels to the product page based on the URL of the page,
* the location of the element. The class of the new label can be used to
* create a tooltip since the building of the labels occurs before the building
* of the tooltips.
* @author PKT-JW
*/
function dataAddedLabels() {

  // array to return.
  var arrAddedLabels = [];

  // create the labels.
  // buildAddedLabelObj(urlIncludes, addBefore, theLabel, theClass)
  arrAddedLabels.push(buildAddedLabelObj(
    '-tower-bimini-top-', 0, 'Brace Kit', 'brace_kit'));
  arrAddedLabels.push(buildAddedLabelObj(
    'westland-bimini-top', 0, 'Brace Kit', 'brace_kit'));
  arrAddedLabels.push(buildAddedLabelObj(
    'westland-bimini-top', 4, 'Slide Track Kit', 'slide_track_kit'));
  arrAddedLabels.push(buildAddedLabelObj(
    'carver-bimini-top', 0, 'Brace Kit', 'brace_kit'));
  arrAddedLabels.push(buildAddedLabelObj(
    'carver-bimini-top', 4, 'Slide Track Kit', 'slide_track_kit'));

  // return the array.
  return arrAddedLabels;
}

/**
* Adds tooltips before elements on a page. Looks for class of element and adds
* the text or html specified.
* @author PKT-JW
*/
function dataToolTips() {

  // array to return.
  var arrToolTips = [];

  // create the tool tips.
  // buildToolTipObj(urlIncludes, theElement, theTip, isBefore)
//Carver bimini product pages:
  arrToolTips.push(buildToolTipObj(
    'carver-bimini-top-', 'find.Boot.colon', 'Add a heavy-duty storage boot to protect and secure your Carver bimini top when it\'s not open or in use.', false));
  arrToolTips.push(buildToolTipObj(
    'carver-bimini-top-', '.brace_kit','Brace kits hold bimini top up and out of the when folded. Includes two aluminum brace tubes, fittings, and mounting hardware.\<br\>\<br\>\<img src=\"https://www.savvyboater.com/product_images/uploaded_images/bimini-top-brace-kit-280px.jpg\"\>', true));
  arrToolTips.push(buildToolTipObj(
    'carver-bimini-top-', '.slide_track_kit', 'Designed to slide a retracted Carver brand bimini top out of the way and into its storage position. Easy to mount on top or side.\<br\>\<br\>\<img src=\"https://www.savvyboater.com/product_images/uploaded_images/bimini-top-slide-track-illustration.jpg\"\>', true));
  arrToolTips.push(buildToolTipObj(
    'carver-bimini-top-', 'find.Upgrades.colon', 'Durable stainless steel fittings with a sleek aesthetic. All necessary hardware included.', false));
  arrToolTips.push(buildToolTipObj(
    'carver-bimini-top-', 'find.Frame.colon', 'Replace your bimini\'s existing aluminum frame and nylon fittings with sleek stainless steel ones. All necessary hardware included.', false));
  arrToolTips.push(buildToolTipObj(
    'bimini-top-', 'find.Mounting width.colon','The distance (width) between the mounting points for the bimini top.\<br\>\<br\>\<img src=\"https://www.savvyboater.com/product_images/uploaded_images/bimini-top-width-200x148.jpg\"\>', true));

  arrToolTips.push(buildToolTipObj(
    'powerhouse-', 'find.Cord Length.colon', 'Maintains your motor\'s efficiency and performance. Available in 25\', 50\', 100\', 150\' and 200\' cord lengths.', false));
  arrToolTips.push(buildToolTipObj('kasco-', 'find.Select Cord Length', 'Maintains your motor\'s efficiency and performance. Available in 25\', 50\' and 100\' cord lengths.', false));
  arrToolTips.push(buildToolTipObj('taylor-', 'find.Cord Length', 'Maintains your motor\'s efficiency and performance. Available in 50\' and 100\' (except 2HP) cord lengths.', false));

  arrToolTips.push(buildToolTipObj(
    'carver-bimini-top-', 'find.Kit.colon', 'Choose material for your mounting kit', false));
  arrToolTips.push(buildToolTipObj(
    '-tower-bimini-top-', '.brace_kit', 'Brace kits hold bimini top up and out of the when folded. Includes two aluminum brace tubes, fittings, and mounting hardware.\<br\>\<br\>\<img src=\"https://www.savvyboater.com/product_images/uploaded_images/bimini-top-brace-kit-280px.jpg\"\>', true));
  arrToolTips.push(buildToolTipObj(
    '-pontoon-bimini-top-', 'find.Options.colon', 'A small cut-out centered on the rear bow allows mounting a running light. Zippered sleeves allow removal of the canvas for maintenance without disassembling the frame.', false));
  arrToolTips.push(buildToolTipObj('-pontoon-bimini-top-', 'find.Add-ons.colon', 'Brace kits hold bimini top up and out of the when folded. Includes two aluminum brace tubes, fittings, and mounting hardware.\<br\>\<br\>\<img src=\"https://www.savvyboater.com/product_images/uploaded_images/bimini-top-brace-kit-280px.jpg\"\>', false));

//Westland bimini product pages:
  arrToolTips.push(buildToolTipObj('-st50-xs', 'find.Upgrades.colon', 'Add a heavy-duty storage boot to protect and secure your Westland bimini top when it\'s not open or in use. OR<br> Add durable stainless steel fittings with a sleek aesthetic. All necessary hardware included.', false));
  arrToolTips.push(buildToolTipObj(
    'westland-bimini-top', '.brace_kit', 'Brace kits hold bimini top up and out of the when folded. Includes two aluminum brace tubes, fittings, and mounting hardware.\<br\>\<br\>\<img src=\"https://www.savvyboater.com/product_images/uploaded_images/bimini-top-brace-kit-280px.jpg\"\>', true));
  arrToolTips.push(buildToolTipObj(
    'westland-bimini-top', '.slide_track_kit', 'Slide tracks mount to the gunwale of your boat and allow your bimini top to slide into a more convenient, horizontal storage position. Bimini top slide track kits come with two tracks and all the necessary mounting hardware.\<br\>\<br\>\<img src=\"https://www.savvyboater.com/product_images/uploaded_images/bimini-top-slide-track-illustration.jpg\"\>', true));
  arrToolTips.push(buildToolTipObj('westland-bimini-top-', 'find.Upgrades.colon', 'Durable stainless steel fittings with a sleek aesthetic. All necessary hardware included.', false));


  // DEMO FOR BOAT COVER PAGE - Tooltip for just the input checkbox, no label.
  // arrToolTips.push(buildToolTipObj('-custom-boat-cover-', 'find.Pontoon Mooring Kit', 'this is a test', true, true));
//cover product pages:
  arrToolTips.push(buildToolTipObj('-boat-cover-', 'find.Pontoon Mooring Kit', 'Adds breathability for the health of your boat. Includes 3 Vented Support Poles and 2 Sand Bag Kits.\<br\>\<br\>\<img src=\"https://cdn3.bigcommerce.com/s-uprkx/products/58118/images/282872/pontoon_mooring_kit__71522.1491500666.1280.1280.jpg?c=2\"\>', true, true));
  arrToolTips.push(buildToolTipObj('-boat-cover-', 'find.Support Pole - Snap End', 'This lightweight, telescoping pole supports your boat cover so water will run off and not pool, preventing dry rot and mildew. Includes a self-adhesive snap.\<br\>\<br\>\<img src=\"https://cdn3.bigcommerce.com/s-uprkx/products/48950/images/185426/carver-support-pole-60000__48932.1421441331.1280.1280.jpg?c=2\"\>', true, true));
  arrToolTips.push(buildToolTipObj('-boat-cover-', 'find.Support Pole - Vent II', 'This support pole prevents water from pooling on your boat cover and provides an air-vent to reduce moisture, heat and mildew under the cover.\<br\>\<br\>\<img src=\https://cdn3.bigcommerce.com/s-uprkx/products/48952/images/185432/carver-support-pole-vented__36622.1421441337.1280.1280.jpg?c=2\"\>', true, true));
  arrToolTips.push(buildToolTipObj('-boat-cover-', 'find.Support System', 'Eliminates virtually all possible areas that could collect water and allow it to pool, causing damage to the cover. Simple installation.\<br\>\<br\>\<img src=\https://cdn3.bigcommerce.com/s-uprkx/products/48949/images/185424/carver-support-system__89226.1421441327.1280.1280.jpg?c=2\"\>', true, true));
  arrToolTips.push(buildToolTipObj('-boat-cover-', 'find.Rope Rachet', 'Allows you to tighten your cover to proper tension, then releases with a convenient thumb lever. Accommodates 1/4" rope.\<br\>\<br\>\<img src=\"https://cdn3.bigcommerce.com/s-uprkx/products/48954/images/185438/carver-rope-ratchet__45251.1421441342.1280.1280.jpg?c=2\"\>', true, true));
  arrToolTips.push(buildToolTipObj('-boat-cover-', 'find.Reinforcement/Repair Kit', 'Kit includes one yard self adhesive material. Use it to add extra padding to stress points from windshields, trolling motors, etc. or to patch wear areas and tears that may develop over time.\<br\>\<br\>\<img src=\"https://cdn3.bigcommerce.com/s-uprkx/products/48955/images/185439/carver-cover-repair-kit__62577.1421441344.1280.1280.jpg?c=2\"\>', true, true));
  arrToolTips.push(buildToolTipObj('-boat-cover-', 'find.Rush production', 'Rush production does not include shipping time. Please allow for usual delivery time in addition to the 3 production days.', true, true));

//Westland cover upsells
  arrToolTips.push(buildToolTipObj('-boat-cover-', 'find.Support Pole & Snap Patch', 'Supports cover to prevent water pooling. No cutting or sewing required. Includes self-adhesive snap patch.\<br\>\<br\>\<img src=\"https://cdn3.bigcommerce.com/s-uprkx/products/40427/images/257438/westland-snap-patch__25486.1421906376.1280.1280.jpg?c=2\"\>', true, true));
  arrToolTips.push(buildToolTipObj('-boat-cover-', 'find.Snap Patch for Support Pole', 'This Westland self-adhesive snap patch is equipped with a female snap that is designed to snap to the top of the male snap on the Snap-style adjustable support pole.\<br\>\<br\>\<img src=\"https://cdn3.bigcommerce.com/s-uprkx/products/48962/images/257444/westland-snap-patch-only__48163.1421906379.1280.1280.jpg?c=2\"\>', true, true));
  arrToolTips.push(buildToolTipObj('-boat-cover-', 'find.Tie-down Straps', 'Twelve straps made of durable black webbing and tough black nylon buckles easily adjust to keep your cover secure to your trailer or lift.\<br\>\<br\>\<img src=\"https://cdn3.bigcommerce.com/s-uprkx/products/40434/images/257446/westland-tie-down-straps__49796.1421906380.1280.1280.jpg?c=2\"\>', true, true));
  arrToolTips.push(buildToolTipObj('-boat-cover-', 'find.Quick Cinch', 'A knot-free, quick and easy way to draw your boat cover rope as tight as possible. Thumb lever releases your rope quickly and easily.\<br\>\<br\>\<img src=\"https://cdn3.bigcommerce.com/s-uprkx/products/40429/images/257442/westland-quick-cinch__23496.1421906378.1280.1280.jpg?c=2\"\>', true, true));
  arrToolTips.push(buildToolTipObj('-boat-cover-', 'find.Quick Cinch Pocket', 'This padded cover is 12" long and completely encloses the 1/4" Rope Cincher (Quick Cinch sold separately) to protect your boat from surface scratches.\<br\>\<br\>\<img src=\"https://cdn3.bigcommerce.com/s-uprkx/products/40430/images/257443/westland-quick-cinch-cover__24445.1421906378.1280.1280.jpg?c=2\"\>', true, true));
  arrToolTips.push(buildToolTipObj('-boat-cover-', 'find.Support Pole - Vent', 'Supports your cover to keep water from pooling outside and also provides ventilation to prevent moisture and mildew from forming on the inside.\<br\>\<br\>\<img src=\"https://cdn3.bigcommerce.com/s-uprkx/products/56266/images/272509/westland-vented-pole__90179.1442453283.1280.1280.jpg?c=2\"\>', true, true));

  arrToolTips.push(buildToolTipObj('-bimini-top-', 'find.Rush production', 'Rush production does not include shipping time. Please allow for usual delivery time in addition to the 3 production days.', true, true));

//Taylor Made fenders upsells
  arrToolTips.push(buildToolTipObj('taylor-made-', 'find.Fender Lines', 'Provides an adjustable and secure tie\-off for your boat fenders. Package includes (2) 6\' fender loc lines, 3/8\" in diameter.\<br\>\<br\>\<img src=\"https://cdn3.bigcommerce.com/s-uprkx/products/50057/images/126146/taylor-fender-loc-lines__94345.1420741699.1280.1280.jpg?c=2\"\>', true, true));
  arrToolTips.push(buildToolTipObj('taylor-made-', 'find.Fender Straps', 'A quick and easy way to adjust the height of your fenders\! Made from 3/4\" Polyester webbing with UV protection and Marine grade Hook and Loop fasteners. Sold in pairs.\<br\>\<br\>\<img src=\"https://cdn3.bigcommerce.com/s-uprkx/products/58962/images/286657/TM-hook-loop-fender-strap-1094__26405.1505761828.1280.1280.jpg?c=2\"\>', true, true));
  arrToolTips.push(buildToolTipObj('taylor-made-', 'find.Lock & Peg - 1/4', 'Makes hanging fenders fast and easy, for rope sizes up to 1/4\".\<br\>\<br\>\<img src=\"https://cdn3.bigcommerce.com/s-uprkx/products/58961/images/286659/TM-SS-fender-lock-1010__28459.1505761913.1280.1280.jpg?c=2\"\>', true, true));
  arrToolTips.push(buildToolTipObj('taylor-made-', 'find.Lock & Peg - SS', 'Provides secure and reliable mounting and allows the use of up to 1/2\" diameter rope.\<br\>\<br\>\<img src=\"https://cdn3.bigcommerce.com/s-uprkx/products/58951/images/286669/ssfenderlock-1001__54714.1505762096.1280.1280.jpg?c=2\"\>', true, true));
  arrToolTips.push(buildToolTipObj('taylor-made-', 'find.Fender Brackets', 'A quick and easy fender height adjustment. Mount securely to 7/8\" \- 1\" railings or up to 1/4\" lifelines.\<br\>\<br\>\<img src=\"https://cdn3.bigcommerce.com/s-uprkx/products/58959/images/286661/TM-rail-lifeline-fender-bracket-1097__40553.1505761969.1280.1280.jpg?c=2\"\>', true, true));
  arrToolTips.push(buildToolTipObj('taylor-made-', 'find.Fender Clips: Lifeline', 'Use for hanging fenders, holding power cords. Brackets mount securely to your 3/16\" to 1/4\" lifelines. Sold in pairs.\<br\>\<br\>\<img src=\"https://cdn3.bigcommerce.com/s-uprkx/products/58964/images/286655/TM-lifeline-fender-clip-1096__44768.1505761775.1280.1280.jpg?c=2\"\>', true, true));
  arrToolTips.push(buildToolTipObj('taylor-made-', 'find.Fender Clip - 7/8', 'Use for hanging fenders, holding power cords. Clips that mount securely to your 7/8\" railings. Sold in pairs.\<br\>\<br\>\<img src=\"https://cdn3.bigcommerce.com/s-uprkx/products/58960/images/286660/TM-rail-mount-fender-line-clip-1093__93008.1505761932.1280.1280.jpg?c=2\"\>', true, true));
  arrToolTips.push(buildToolTipObj('taylor-made-', 'find.Fender Hanger: Line', 'Keep loose lines and power cords neatly in place. Durable PVC mounting band snaps over any rail, lifeline or stanchion. Snap the bottom section around your coil of rope or cord to secure. Measures 9 1/2\" in length.\<br\>\<br\>\<img src=\"https://cdn3.bigcommerce.com/s-uprkx/products/58954/images/286666/TM-line-hanger-1006__00238.1505762048.1280.1280.jpg?c=2\"\>', true, true));
  arrToolTips.push(buildToolTipObj('taylor-made-', 'find.Fender Hanger: Rail - Small', 'Makes it easy to adjust fender heights and locks in place with a jam cleat - no knots. Uses 1/4\" to 1/2\" line. Fits up to 1\" rails.\<br\>\<br\>\<img src=\"https://cdn3.bigcommerce.com/s-uprkx/products/58956/images/286664/TM-rail-fender-hanger-1108__33923.1505762017.1280.1280.jpg?c=2\"\>', true, true));
  arrToolTips.push(buildToolTipObj('taylor-made-', 'find.Fender Hanger: Rail - Large', 'Makes it easy to adjust fender heights and locks in place with a jam cleat - no knots. Uses 1/4\" to 1/2\" line. Fits up to 1.25\" rails.\<br\>\<br\>\<img src=\"https://cdn3.bigcommerce.com/s-uprkx/products/58956/images/286664/TM-rail-fender-hanger-1108__33923.1505762017.1280.1280.jpg?c=2\"\>', true, true));
  arrToolTips.push(buildToolTipObj('taylor-made-', 'find.Fender Hanger: Vertical Rail', 'Attaches to rails 7/8\" to 1\" in diameter with 2 screws and then grips the fender rope with its heavy duty teeth making rafting and docking easier than ever. Accepts rope size up to 5/8\".\<br\>\<br\>\<img src=\"https://cdn3.bigcommerce.com/s-uprkx/products/58963/images/286656/TM-vertical-rail-fender-hanger-1099__67669.1505761805.1280.1280.jpg?c=2\"\>', true, true));
  arrToolTips.push(buildToolTipObj('taylor-made-', 'find.Fender Hanger: Racheting', 'Allows you to adjust your fender height from 6\" to 24\".\<br\>\<br\>\<img src=\"https://cdn3.bigcommerce.com/s-uprkx/products/58955/images/286665/TM-racheting-fender-hanger-1089__85227.1505762032.1280.1280.jpg?c=2\"\>', true, true));
  arrToolTips.push(buildToolTipObj('taylor-made-', 'find.Fender Hanger: Quick Knot', 'Allows the quick placement of fenders anywhere there is something to tie off to, without having to tie a knot. Perfect for 1/4\" rope.\<br\>\<br\>\<img src=\"https://cdn3.bigcommerce.com/s-uprkx/products/58958/images/286662/TM-quick-knot-fender-hanger-1098__79564.1505761986.1280.1280.jpg?c=2\"\>', true, true));
  arrToolTips.push(buildToolTipObj('taylor-made-', 'find.Tidy-Ups', 'Kits include (1) Tidy-Ups Fender Adjuster and (6) feet of 3/8\" solid braid polypropylene rope.\<br\>\<br\>\<img src=\"https://cdn3.bigcommerce.com/s-uprkx/products/50056/images/126144/taylor-tidy-ups-kit-2__12894.1420741696.1280.1280.jpg?c=2\"\>', true, true));
  arrToolTips.push(buildToolTipObj('taylor-made-', 'find.Line Holders - 1.25', 'UV resistant vinyl strap securely holds rope, cords, etc. Fits 1\" - 1 1/4\" rails.\<br\>\<br\>\<img src=\"https://cdn3.bigcommerce.com/s-uprkx/products/58953/images/286667/TM-tidy-ups-line-holders-1101__37970.1505762065.1280.1280.jpg?c=2\"\>', true, true));
  arrToolTips.push(buildToolTipObj('taylor-made-', 'find.Line Holders - 2', 'UV resistant vinyl strap securely holds rope, cords, etc. Fits 1 1/2\" - 2\" rails.\<br\>\<br\>\<img src=\"https://cdn3.bigcommerce.com/s-uprkx/products/58953/images/286667/TM-tidy-ups-line-holders-1101__37970.1505762065.1280.1280.jpg?c=2\"\>', true, true));
  arrToolTips.push(buildToolTipObj('taylor-made-', 'find.Fender Holders: 7"-9"', 'Holds any boat fender 7\" to 9\" in diameter. Includes set of 2 holders and mounting hardware.\<br\>\<br\>\<img src=\"https://cdn3.bigcommerce.com/s-uprkx/products/50059/images/126148/taylor-fender-holder-3__55896.1420741704.1280.1280.jpg?c=2\"\>', true, true));
  arrToolTips.push(buildToolTipObj('taylor-made-', 'find.Fender Holders: 9"-11"', 'Holds any boat fender 9\" to 11\" in diameter. Includes set of 2 holders and mounting hardware.\<br\>\<br\>\<img src=\"https://cdn3.bigcommerce.com/s-uprkx/products/50059/images/126148/taylor-fender-holder-3__55896.1420741704.1280.1280.jpg?c=2\"\>', true, true));
  arrToolTips.push(buildToolTipObj('taylor-made-', 'find.Fender Adjuster', 'Designed to fit 1\" square tube pontoon rails. Allows height adjustment for fender lines up to 3/8\". Set of 4 adjusters.\<br\>\<br\>\<img src=\"https://cdn3.bigcommerce.com/s-uprkx/products/50062/images/126151/taylor-fender-adjuster-pontoon__09451.1420741713.1280.1280.jpg?c=2\"\>', true, true));
  arrToolTips.push(buildToolTipObj('taylor-made-', 'find.Fender Hanger Locks', 'Hang your center tube style boat fenders with ease. Fits 3/8\" diameter rope. Set of 3 hanger locks.\<br\>\<br\>\<img src=\"https://cdn3.bigcommerce.com/s-uprkx/products/50052/images/126130/taylor-big-b-fender-hanger-1__61994.1420741675.1280.1280.jpg?c=2\"\>', true, true));

//for De-icers
  arrToolTips.push(buildToolTipObj('kasco-', 'find.Zinc', 'Fall Special: Free with any Kasco de-icer! Protects de-icer motor from erosion and corrosion.\<br\>\<br\>\<img src=\"https://cdn3.bigcommerce.com/s-uprkx/products/50863/images/272791/kasco-deicer-zinc__12111.1443724047.1280.1280.jpg?c=2\"\>', true, true));
  arrToolTips.push(buildToolTipObj('kasco-', 'find.Thermostat', 'Saves energy and extends the life of your de-icer. Allows you to set desired on-off temperatures.\<br\>\<br\>\<img src=\"https://cdn3.bigcommerce.com/s-uprkx/products/50867/images/283777/Kasco-Marine-C-10-Control-Panel-Web__80765.1498670574.1280.1280.jpg?c=2\"\>', true, true));
  arrToolTips.push(buildToolTipObj('kasco-', 'find.Dock Mount', 'Allows adjustable angles and 360 degree positioning. Mounts your Kasco De-icer to any dock or piling.\<br\>\<br\>\<img src=\"https://cdn3.bigcommerce.com/s-uprkx/products/50869/images/283778/Kasco-Marine-Universal-Dock-Mount__43897.1498670648.1280.1280.jpg?c=2\"\>', true, true));
  arrToolTips.push(buildToolTipObj('kasco-', 'find.Float Mount', 'Mounts your Kasco De-icer to the bottom of any float. Automatically adjusts to varying water levels.\<br\>\<br\>\<img src=\"https://cdn3.bigcommerce.com/s-uprkx/products/50870/images/272800/kasco-deicer-float-mount__51010.1443724058.1280.1280.jpg?c=2\"\>', true, true));

  arrToolTips.push(buildToolTipObj('taylor-', 'find.Zinc', 'Protects de-icer motor from erosion and corrosion.\<br\>\<br\>\<img src=\"https://cdn3.bigcommerce.com/s-uprkx/products/59838/images/288871/41896P_Zinc_Anode__09710.1545162879.1280.1280.jpg\"\>', true, true));
  arrToolTips.push(buildToolTipObj('taylor-', 'find.Thermostat', 'Saves energy and extends the life of your de-icer. Allows you to set desired on-off temperatures.\<br\>\<br\>\<img src=\"https://cdn3.bigcommerce.com/s-uprkx/products/59836/images/288873/6215_Thermostat__24568.1545162911.1280.1280.jpg\"\>', true, true));
  arrToolTips.push(buildToolTipObj('taylor-', 'find.Float', 'Designed to be an attachment to help the de-icer float and shoot water out of the top. It keeps the deicer “lifted” at the surface and allows for water to be dispersed at the surface of the water line. \<br\>\<br\>\<img src=\"https://cdn3.bigcommerce.com/s-uprkx/products/59840/images/288869/6226_PolyPro_Float__48676.1545162848.1280.1280.jpg\"\>', true, true));

  arrToolTips.push(buildToolTipObj('powerhouse-', 'find.Zinc', 'Protects de-icer motor from erosion and corrosion. Fits all Power House Ice Eater models\<br\>\<br\>\<img src=\"https://cdn3.bigcommerce.com/s-uprkx/products/50879/images/272833/powerhouse-ice-eater-zinc__86678.1443724441.1280.1280.jpg?c=2\"\>', true, true));
  arrToolTips.push(buildToolTipObj('powerhouse-', 'find.Thermostat', 'Saves energy and extends the life of your de-icer. Allows you to set desired on-off settings per day.\<br\>\<br\>\<img src=\"https://cdn3.bigcommerce.com/s-uprkx/products/50885/images/272843/powerhouse-ice-eater-thermostat__07115.1443724455.1280.1280.jpg?c=2\"\>', true, true));
  arrToolTips.push(buildToolTipObj('powerhouse-', 'find.Dock Mount', 'Allows full 360 degree positioning. Mounts your Power House Ice-Eater to any dock or piling.\<br\>\<br\>\<img src=\"https://cdn3.bigcommerce.com/s-uprkx/products/58029/images/282302/powerhouse-ice-eater-dock-mount__59328.1476980430.1280.1280.jpg?c=2\"\>', true, true));
  arrToolTips.push(buildToolTipObj('powerhouse-', 'find.Timer', 'Saves energy and extends the life of your de-icer. Allows you to set desired on-off settings per day.\<br\>\<br\>\<img src=\"https://cdn3.bigcommerce.com/s-uprkx/products/50887/images/272845/powerhouse-ice-eater-timer__28837.1443724457.1280.1280.jpg?c=2\"\>', true, true));
  arrToolTips.push(buildToolTipObj('powerhouse-', 'find.Screen Kit', 'Protects motor and propeller from harmful debris. Fits both intake and output openings.\<br\>\<br\>\<img src=\"https://cdn3.bigcommerce.com/s-uprkx/products/50880/images/272834/powerhouse-ice-eater-screen-kit__02554.1443724443.1280.1280.jpg?c=2\"\>', true, true));
  arrToolTips.push(buildToolTipObj('powerhouse-', 'find.Shallow Water Stand', 'Ideal for duck hunting and fishing. Mounts your ice-eater in shallow water. Fits both P750 and P1000 Ice Eater models.\<br\>\<br\>\<img src=\"https://cdn3.bigcommerce.com/s-uprkx/products/50888/images/272859/mallard-view-ice-eater-stand-only__28337.1444319985.1280.1280.jpg?c=2\"\>', true, true));
  // return the array
  return arrToolTips;
}

/**
* Takes the array created above and then adds the labels on the page.
* @author PKT-JW
*/
function createAddedLabels() {

  // build the added labels.
  var arrAddedLabels = dataAddedLabels();

  // cycle through array of added labels.
  $.each(arrAddedLabels, function(index, obj) {

    // look for the matching url.
    if (window.location.href.indexOf(obj.urlIncludes) > -1) {
console.log('sdf');
      // check that the location to add before is the first one.
      // the locations of 0 and 4 came from the legacy document but the
      // prepending works differently here.
      // 0 = top of ul.
      // 4 = additional processing occurs. only has slide track kit completed here.
      if (obj.addBefore == 0) {

        // prepend to unordered list.
        $(".productAttributeValue .productOptionViewProductPickList ul")
          .prepend(buildAddedLabelHtml(obj.theLabel, obj.theClass));
      }
      else if (obj.addBefore == 4) {

        // cycle through list items.
        $(".productAttributeValue .productOptionViewProductPickList ul li").each(function(index) {

          // check if the list item has the term 'slide track kit' in it.
          if (this.innerHTML.indexOf("Slide Track Kit") > -1) {

            // prepend the label.
            $(this).prepend(buildAddedLabelHtml(obj.theLabel, obj.theClass));

            // exit out of the each loop.
            return false;
          }
        }); // end each li
      } // end else if.
    } // end if window.location
  }); // end $.each arrAddedLabels
} // end createAddedLabels()

/**
* Takes the array created above and then adds the tooltips to the page.
* @author PKT-JW
*/
function createToolTips() {

  // get the array of tooltips to add if element exists on page.
  var arrToolTips = dataToolTips();

  // cycle through array of tooltips.
  $.each(arrToolTips, function(index, obj) {

    // look for the matching url.
    if (window.location.href.indexOf(obj.urlIncludes) > -1) {

      // check if this is an exception.
      if (obj.theElement.indexOf("find.") > -1) {

          // the element does not have a class so we have to look for the
          // html within the element.

          // what we will be looking for.
          var theSearchString = "";

          // split the input string.
          var arrString = obj.theElement.split(".");

          // we want the second element.
          theSearchString = arrString[1];

          // check to see if there is punctuation.
          if (arrString.length == 3) {
            switch (arrString[2]) {
              case "colon":
                  // append to the string.
                  theSearchString += ":";
                break;
            }
          }

          // search for a span with the string.
          var spanSearchResult = $("span:contains(" + theSearchString + ")");

          // decide where to display the img.
          if (obj.isBefore) {
            $(spanSearchResult).before(buildToolTipHtml(obj));
          }
          else {
            $(spanSearchResult).after(buildToolTipHtml(obj));
          }
      }
      else {
        // add the html before the element specified.
        if (obj.isBefore) {
          $(obj.theElement).before(buildToolTipHtml(obj));
        }
        else {
          $(obj.theElement).after(buildToolTipHtml(obj));
        }
      }

    }
  }); // end $.each(arrToolTips)

  // Grab all elements with the class "help_div"
  // make them qtip objects.
  $('.help_div').each(function() { // Notice the .each() loop, discussed below
      $(this).qtip({
          content: {
              text: $(this).next('div') // Use the "div" element next to this for the content
          },
          style: {
            classes: 'qtip-dark'
          }
      });
  });
}

/**
* Creates the HTML for the label. Taken from legacy tooltips.js file.
* @param {string} theLabel The label to display.
* @param {string} theClass The class to set in the span.
* @author PKT-JW
*/
function buildAddedLabelHtml(theLabel, theClass) {

  // build the string and return it.
  return "<span style='font-weight:bold;' class='" + theClass + "'> " + theLabel + "</span>";
}


/**
* Creates an object for the additional labels that will be added to the array.
* @param {string} urlIncludes the snippet of the url to look for.
* @param {int} addBefore based on legacy document. Only used as 0 = add to beginning of ul, 4 = additional processing.
* @param {string} theLabel the label to display.
* @param {string} theClass to set in the label. Allows tooltip to be added.
* @author PKT-JW
*/
function buildAddedLabelObj(urlIncludes, addBefore, theLabel, theClass) {

  // create the object.
  var objAddedLabel = {};

  // set the properties of the object.
  objAddedLabel.urlIncludes = urlIncludes;
  objAddedLabel.addBefore = addBefore;
  objAddedLabel.theLabel = theLabel;
  objAddedLabel.theClass = theClass;

  // return the object.
  return objAddedLabel;
}

/**
* Creates an object for the tooltips that will be added to the array.
* @param {string} urlIncludes the snippet of the url to look for.
* @param {int} theElement based on legacy document. Only used as 0 = add to beginning of ul, 4 = additional processing.
* @param {string} theTip the label to display.
* @param {bool} isBefore true = display before element, false = display after.
* @param {bool} noLabel this is just the checkbox input so need to adjust left margin to consider checkbox. default is false.
* @author PKT-JW
*/
function buildToolTipObj(urlIncludes, theElement, theTip, isBefore, noLabel = false) {

  // object to add to array.
  var objToolTip = {};

  // set the object values.
  objToolTip.urlIncludes = urlIncludes;
  objToolTip.theElement = theElement;
  objToolTip.theTip = theTip;
  objToolTip.isBefore = isBefore;
  objToolTip.noLabel = noLabel;

  // return the object.
  return objToolTip;
}

/**
* Creates the HTML for the tooltip. Taken from legacy tooltips.js file.
* @param {object} obj the object created with tooltip information.
* @author PKT-JW
*/
function buildToolTipHtml(obj) {

  // build the html string and return.
  if (obj.isBefore) {

    // check if this not a label and therefore just right before the checkbox.
    if (obj.noLabel) {

      // display before the element.
      return "<div class='help_div' style='position: absolute; margin-left: -33px;'>" +
        "<img src='/product_images/uploaded_images/help.gif'  alt='upgrades'/></div><div class='hidden' style='display: none'>" +
        obj.theTip + "</div>";
    }
    else {

      // in front of label so don't have to worry about the checkbox.

      // display before the element.
      return "<div class='help_div' style='position: absolute; margin-left: -18px;'>" +
        "<img src='/product_images/uploaded_images/help.gif'  alt='upgrades'/></div><div class='hidden' style='display: none'>" +
        obj.theTip + "</div>";
    }

  }
  else {

    // display after the span in the label.
    return "<div class='help_div' style='position: absolute; margin-left: 102px; margin-top: -14px'>" +
      "<img src='/product_images/uploaded_images/help.gif'  alt='upgrades'/></div><div class='hidden' style='display: none'>" +
      obj.theTip + "</div>";
  }
}

/**
* Added 2017-10-19 by PKT-JW
* This function replaces the previously used qTip tooltips library with
* dw tooltips. http://www.dyn-web.com/code/tooltips/
* Uses the same data as the qTips methods created above.
* @author PKT-JW
*/
function createDwToolTips() {

  // get the array of tooltips to add if element exists on page.
  var arrToolTips = dataToolTips();

  // dw tooltips uses an object to handle tips.
  var objTips = {};

  // create a counter for the class name.
  var i = 0;

  // create the counter string that will be used in the object.
  var counter = "";

  // cycle through array of tooltips.
  $.each(arrToolTips, function(index, obj) {

    // look for the matching url.
    if (window.location.href.indexOf(obj.urlIncludes) > -1) {

      // create the counter string.
      counter = "L" + i;

      // build the object property.
      objTips[counter] = obj.theTip;

      // increment counter here.
      i++;

      // check if this is a search within the span.
      if (obj.theElement.indexOf("find.") > -1) {

          // the element does not have a class so we have to look for the
          // html within the element.

          // what we will be looking for.
          var theSearchString = "";

          // split the input string.
          var arrString = obj.theElement.split(".");

          // we want the second element.
          theSearchString = arrString[1];

          // check to see if there is punctuation.
          if (arrString.length == 3) {
            switch (arrString[2]) {
              case "colon":
                  // append to the string.
                  theSearchString += ":";
                break;
            }
          }

          // search for a span with the string.
          var spanSearchResult = $("span:contains(" + theSearchString + ")");

          // add the classes.
          $(spanSearchResult).addClass('showTip ' + counter);

      } // end if (obj.theElement.indexOf("find.") > -1)
      else {

        // add the tooltip to the element.
        $(obj.theElement).addClass('showTip ' + counter);

      } // end else
    } // end if (window.location.href.indexOf(obj.urlIncludes) > -1)
  }); // end $.each(arrToolTips)

  // create the tooltips using the dw_tooltips library.
  dw_Tooltip.defaultProps = {
    //activateOnClick: true,
    supportTouch: true,
    showCloseBox: true,
    jumpAbove: false
  }

  // set the tooltips object with the one built with this method.
  dw_Tooltip.content_vars = objTips;
}

/**
* Creates the added labels and tooltips once the document is ready.
* @author PKT-JW
*/
$(document).ready(function() {

  // build the added labels.
  createAddedLabels();

  // create the tool tips with question mark icon
  //createToolTips();

  //tooltip populates when hovering over text
  createDwToolTips();
});
