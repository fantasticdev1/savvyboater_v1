export default function () {
    $(document).on('click',".accordionHeader",function() {
            if($(this).hasClass('collapsable')) {
               $(this).removeClass('collapsable');
               $(this).next('.accordionContent').slideUp().removeClass('accordionOpen');
            } else {
               $(this).next('.accordionContent').slideDown().addClass('accordionOpen');
               $(this).addClass('collapsable');
            }
    });
    
           
    $(".MyAccountLinks").hover(function(e){
            $(this).addClass("showMenu");
        }, function(){      
            $(this).removeClass("showMenu");
    }); 
    
    $(function(){  
        var topLevelHeight;
        $('.navPages-list > .navPages-item > .navPages-action').click(function(){
            topLevelHeight = $('.topLevelSubmenu').height();
        }); 
        $('.topLevelSubmenu > li > .navPages-action').click(function(){
            var minHeight;
            var bottomLevelHeight = $(this).next().height();
            console.log('toplevel:' + topLevelHeight);
            console.log('bottomlevel:' + bottomLevelHeight);
            if(topLevelHeight > bottomLevelHeight) {
               minHeight = topLevelHeight;
            } else {
               minHeight = bottomLevelHeight;
            }
            $(this).next().css('min-height', minHeight);
            $(this).parent().parent().css('min-height', minHeight);
        }); 
    }); 
    
    // Make click menu work on hover instead  
    $(function(){  
        var clickCounter = 0;
        $(".navPages-list > .navPages-item").hover(function(){
            if($('> .navPages-action', this).hasClass('has-subMenu')) {
                if(!$('.navPages-container').hasClass('is-open')) {
                    $('> .navPages-action.has-subMenu', this).click();
                }
            }
            }, function(){        
            if($('> .navPages-action', this).hasClass('has-subMenu')) {
                if(!$('.navPages-container').hasClass('is-open')) {    
                    $('body').click();
                    clickCounter = 0;
                }
            }
        }); 
    });  
    $(function(){  
        var clickCounter = 0;
        $(".navPage-subMenu-item-child").hover(function(){
            if($('> .navPages-action', this).hasClass('has-subMenu')) {
                if(!$('.navPages-container').hasClass('is-open')) {
                    $('> .navPages-action.has-subMenu', this).click();
                }
            }
            }, function(){    
            if($('> .navPages-action', this).hasClass('has-subMenu')) {
                if(!$('.navPages-container').hasClass('is-open')) {    
                    //$('body').click();
                    clickCounter = 0;
                }
            }
        });
        $(".topLevelSubmenu > .navPage-subMenu-item-child > .navPages-action.has-subMenu").click(function(e) {
            console.log(clickCounter);
            if(!$('.navPages-container').hasClass('is-open')) {
                e.preventDefault();
                clickCounter++;
                if(clickCounter > 1) {
                    window.location.href = $(this).attr('href');           
                }
            }
        });  
    });  
    // End hover menu
}
