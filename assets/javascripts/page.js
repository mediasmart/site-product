'use strict';

window.onload = function() {
  // -- Global Environment
  var mediasmart = {
    el: {
      header: document.querySelectorAll('body > header')[0]
    }
  };

  // -- Listeners
  window.addEventListener('scroll', function (event) {
    var scroll = document.body.scrollTop;
    var header = mediasmart.el.header;
    header.setAttribute('class', scroll > header.offsetHeight ? 'scroll' : '');
  }, false)
}
