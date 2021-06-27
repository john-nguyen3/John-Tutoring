/* Template Name: Leaping - Creative Multipurpose Template
   Author: Shreethemes-studio
   E-mail: support@shreethemes.in
   Version: 1.3.0
   Created: May 2020
   File Description: Main JS file of the template
*/

/****************************/
/*         INDEX            */
/*===========================
 *     01.  Loader          *
 *     02.  Menu            *
 *     03.  Sticky Menu     *
 *     03.  Back to top     *
 ===========================*/

 
 window.onload = function loader() {
    // Preloader
    setTimeout(() => {
        document.getElementById('preloader').style.visibility = 'hidden';
        document.getElementById('preloader').style.opacity = '0';
    }, 350);

    // Menus
    activateMenu();
}

//Menu
// Toggle menu
function toggleMenu() {
    document.getElementById('isToggle').classList.toggle('open');
    var isOpen = document.getElementById('navigation')
    if (isOpen.style.display === "block") {
        isOpen.style.display = "none";
    } else {
        isOpen.style.display = "block";
    }
};

//Menu Active
function getClosest(elem, selector) {

    // Element.matches() polyfill
    if (!Element.prototype.matches) {
        Element.prototype.matches =
            Element.prototype.matchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.oMatchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            function (s) {
                var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                    i = matches.length;
                while (--i >= 0 && matches.item(i) !== this) { }
                return i > -1;
            };
    }

    // Get the closest matching element
    for (; elem && elem !== document; elem = elem.parentNode) {
        if (elem.matches(selector)) return elem;
    }
    return null;

};

function activateMenu() {
    var menuItems = document.getElementsByClassName("sub-menu-item");
    if (menuItems) {

        var matchingMenuItem = null;
        for (var idx = 0; idx < menuItems.length; idx++) {
            if (menuItems[idx].href === window.location.href) {
                matchingMenuItem = menuItems[idx];
            }
        }

        if (matchingMenuItem) {
            matchingMenuItem.classList.add('active');
            var immediateParent = getClosest(matchingMenuItem, 'li');
            if (immediateParent) {
                immediateParent.classList.add('active');
            }

            var parent = getClosest(matchingMenuItem, '.parent-menu-item');
            if (parent) {
                parent.classList.add('active');
                var parentMenuitem = parent.querySelector('.menu-item');
                if (parentMenuitem) {
                    parentMenuitem.classList.add('active');
                }
                var parentOfParent = getClosest(parent, '.parent-parent-menu-item');
                if (parentOfParent) {
                    parentOfParent.classList.add('active');
                }
            } else {
                var parentOfParent = getClosest(matchingMenuItem, '.parent-parent-menu-item');
                if (parentOfParent) {
                    parentOfParent.classList.add('active');
                }
            }
        }
    }
}

// Clickable Menu
if(document.getElementById("navigation")){
    var elements = document.getElementById("navigation").getElementsByTagName("a");
    for(var i = 0, len = elements.length; i < len; i++) {
        elements[i].onclick = function (elem) {
            if(elem.target.getAttribute("href") === "javascript:void(0)") {
                var submenu = elem.target.nextElementSibling.nextElementSibling;
                submenu.classList.toggle('open');
            }
        }
    }
}

// Menu sticky
function windowScroll() {
    const navbar = document.getElementById("topnav");
    if(navbar!=null){
        if (
            document.body.scrollTop >= 50 ||
            document.documentElement.scrollTop >= 50
        ) {
            navbar.classList.add("nav-sticky");
        } else {
            navbar.classList.remove("nav-sticky");
        }
    }
}

window.addEventListener('scroll', (ev) => {
    ev.preventDefault();
    windowScroll();
})

// back-to-top
var mybutton = document.getElementById("back-to-top");
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if(mybutton!=null){
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


//Feather icon
feather.replace();

// dd-menu
var ddmenu = document.getElementsByClassName("dd-menu");
for(var i = 0, len = ddmenu.length; i < len; i++) {
    ddmenu[i].onclick = function (elem) {
        elem.stopPropagation();
    }
}

//Tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

//small menu
try {
    var spy = new Gumshoe('#navmenu-nav a');
}catch(err) {
    
}

// ! function($) {
//     "use strict"; 
//     // Loader 
//     $(window).on('load', function() {
//         $('#status').fadeOut();
//         $('#preloader').delay(350).fadeOut('slow');
//         $('body').delay(350).css({
//             'overflow': 'visible'
//         });
//     }); 
    
//     // Menu
//     $('.navbar-toggle').on('click', function (event) {
//         $(this).toggleClass('open');
//         $('#navigation').slideToggle(400);
//     });
    
//     $('.navigation-menu>li').slice(-1).addClass('last-elements');
    
//     $('.menu-arrow,.submenu-arrow').on('click', function (e) {
//         if ($(window).width() < 992) {
//             e.preventDefault();
//             $(this).parent('li').toggleClass('open').find('.submenu:first').toggleClass('open');
//         }
//     });
    
//     $(".navigation-menu a").each(function () {
//         if (this.href == window.location.href) {
//             $(this).parent().addClass("active"); 
//             $(this).parent().parent().parent().addClass("active"); 
//             $(this).parent().parent().parent().parent().parent().addClass("active"); 
//         }
//     });

//     // Clickable Menu
//     $(".has-submenu a").click(function() {
//         if(window.innerWidth < 992){
//             if($(this).parent().hasClass('open')){
//                 $(this).siblings('.submenu').removeClass('open');
//                 $(this).parent().removeClass('open');
//             } else {
//                 $(this).siblings('.submenu').addClass('open');
//                 $(this).parent().addClass('open');
//             }
//         }
//     });

//     $('.mouse-down').on('click', function(event) {
//         var $anchor = $(this);
//         $('html, body').stop().animate({
//             scrollTop: $($anchor.attr('href')).offset().top - 0
//         }, 500, 'easeInOutExpo');
//         event.preventDefault();
//     });

//     //Sticky
//     $(window).scroll(function() {
//         var scroll = $(window).scrollTop();

//         if (scroll >= 50) {
//             $(".sticky").addClass("nav-sticky");
//         } else {
//             $(".sticky").removeClass("nav-sticky");
//         }
//     });

//     // Back to top
//     $(window).scroll(function(){
//         if ($(this).scrollTop() > 100) {
//             $('.back-to-top').fadeIn();
//         } else {
//             $('.back-to-top').fadeOut();
//         }
//     }); 
//     $('.back-to-top').click(function(){
//         $("html, body").animate({ scrollTop: 0 }, 1000);
//         return false;
//     }); 

//     //Tooltip
//     $(function () {
//         $('[data-toggle="tooltip"]').tooltip()
//     });
    
//     //Popover
//     $(function () {
//         $('[data-toggle="popover"]').popover()
//     });
    
//     //Feather icon
//     feather.replace()
// }(jQuery)