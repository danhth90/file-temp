function ShowMenuLeft(value) {


    if (value == '') {
        var menuBuuton = document.getElementById("MenuButton");
        menuBuuton.setAttribute("onclick", "ShowMenuLeft('none'); return;");
        menuBuuton.setAttribute("class", "menuiconitem btn-show");
        //document.getElementById('contentBox').className = 'contentBox-show';
        //document.getElementById('sideNavBox').className = 'sideNavBox-show';
        document.getElementById("s4-leftpanel").setAttribute("style", "left:0px");
        document.getElementsByClassName("s4-ca")[0].setAttribute("style", "margin-left:200px");
        //        //close all menu 2        
        //        accordion_head.each(function(){
        //            if($(this).hasClass('active'))
        //            {
        //                $(this).next().stop(true, true).slideToggle('normal');
        //				$(this).removeClass('active').addClass('deactive');
        //            }
        //        });          
    }
    else {
        var menuBuuton = document.getElementById("MenuButton");
        menuBuuton.setAttribute("onclick", "ShowMenuLeft(''); return;");
        menuBuuton.setAttribute("class", "menuiconitem btn-hidden");
        //PhienBanFull('hienvalue', 'an');
        //document.getElementById('contentBox').className = 'contentBox-hidden';
        //document.getElementById('sideNavBox').className = 'sideNavBox-hidden';
        document.getElementById("s4-leftpanel").setAttribute("style", "left:-200px");
        document.getElementsByClassName("s4-ca")[0].setAttribute("style", "margin-left:00px")

        //        //open all menu 2        
        //        accordion_head.each(function(){
        //            if($(this).hasClass('deactive'))
        //            {
        //                $(this).next().stop(true, true).slideToggle('normal');
        //				$(this).removeClass('deactive').addClass('active');
        //            }
        //        });        
    }
    
}