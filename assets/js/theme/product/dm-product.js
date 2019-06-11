export default function () {
     // Load the Shopper Approved script after making a call to Shopper Approved JSON file to get productID
    var sa_products_count = 10;
    var sa_date_format = 'F j, Y';
    var sa_product = product_code;

    function saLoadScript(src) {
        var js = window.document.createElement("script");
        js.src = src;
        js.type = "text/javascript";
        document.getElementsByTagName("head")[0].appendChild(js);
    }
   // $.getJSON('https://www.savvyboater.com/content/ShopperApproved/shopper-approved.json', function (results) {
   //     if (results[productTitle] && results[productTitle].productMPN) {
    //        sa_product = String(results[productTitle].productMPN);
    //        console.log('Shopper Approved productMPN = ' + sa_product);
    //    } else {
    //        console.log('Shopper Approved productMPN not available');
    //        sa_product = product_code;
    //    }
    saLoadScript('//www.shopperapproved.com/product/20710/'+sa_product+'.js');
   // });
    
    
    $(function(){
        $('.form-label:contains("None")').parent().hide();
    }); 
}
