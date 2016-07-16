'use strict';

window.onload = function() {
  // -- Global Environment
  var mediasmart = {
    el: {
      header: document.querySelectorAll('body > header')[0],
      menu: document.querySelectorAll('body > header > nav > a:not(.button)')
    },

    fn: {
      scroll: function() {
        var scroll = document.body.scrollTop;
        document.body.setAttribute('class', scroll > mediasmart.el.header.offsetHeight ? 'scroll' : '');
      },

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
      }
    },
  };

  // -- Decorators
  mediasmart.fn.scroll();
  mediasmart.fn.activeMenu();

  // -- Listeners
  window.addEventListener('scroll', mediasmart.fn.scroll, false);
}
