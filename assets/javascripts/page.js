'use strict';

window.onload = function() {
  // -- Global Environment
  var mediasmart = {
    el: {
      header: document.querySelectorAll('body > header')[0]
    },

    fn: {
      scroll: function() {
        var scroll = document.body.scrollTop;
        var header = mediasmart.el.header;
        header.setAttribute('class', scroll > header.offsetHeight ? 'scroll' : '');
      }
    }
  };

  // -- Decorators
  mediasmart.fn.scroll();

  // -- Listeners
  window.addEventListener('scroll', mediasmart.fn.scroll, false);
}
