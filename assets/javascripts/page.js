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
        var parameters = {};
        for (var child of event.target.children) {
          if (child.type && child.type !== 'submit') parameters[child.name] = child.value;
        }
        console.log('formSubmit', parameters);
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
  console.log('🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖');
  console.log('If you are reading this maybe you wanna join us: http://bit.ly/2a95N0d');
  console.log('🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖');
}
