'use strict';

window.onload = function() {
  // -- Global Environment
  var mediasmart = {
    el: {
      header: document.querySelectorAll('body > header')[0],
      menu: document.querySelectorAll('body > header > nav > a:not(.button)')
    },

    fn: {
      activeMenu: function() {
        var menu = mediasmart.el.menu;
        var currentUrl = window.location.pathname;
        for (var i = 0; i < menu.length; i++) {
          var link = menu[i];
          if (currentUrl.indexOf(link.getAttribute('href')) > -1) {
            link.classList.add('active');
            break;
          }
        }
      },

      formSubmit: function(event) {
        event.preventDefault();
        event.stopPropagation();
        var formData = new FormData(event.target);
        var http = new XMLHttpRequest();
        http.open('POST', 'http://api.mediasmart.io/site/form', true);
        http.onreadystatechange = function() {
          if(http.readyState == 4 && http.status == 200) {
            alert('Thanks for you message, we will answer you soon.');
          }
        }
        http.send(formData);
      },

      scroll: function() {
        var scroll = document.body.scrollTop;
        document.body.setAttribute('class', scroll > mediasmart.el.header.offsetHeight ? 'scroll' : '');
      },

      submenuClick: function() {
        for (var link of document.querySelectorAll('body > header > nav > a > ul > li')) {
          link.addEventListener('click', function(event) {
            event.preventDefault();
            window.location = event.target.getAttribute('href');
          }, false)
        }
      }
    },
  };

  // -- Decorators
  mediasmart.fn.scroll();
  mediasmart.fn.activeMenu();
  mediasmart.fn.submenuClick();

  // -- Listeners
  window.addEventListener('scroll', mediasmart.fn.scroll, false);
  window.addEventListener('submit', mediasmart.fn.formSubmit, false);

  // -- Hi developers
  console.log('🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖');
  console.log(' If you are reading this maybe you wanna join us: http://bit.ly/2bINUr0');
  console.log('🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖');
}
