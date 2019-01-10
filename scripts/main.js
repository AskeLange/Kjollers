

// Imports
import '../style/base.scss';

// Aliases
const $ = jQuery;

// On load
$(e => {

  // Fields
  let views_inner = document.getElementById ('views-inner');
  let views = document.getElementsByClassName ('view');
  let cur = 0, canScroll = true;

  // On body scroll
  window.onwheel = window.onmousewheel = document.onmousewheel = window.ontouchmove = (e) => {
    e.preventDefault ();
    
    if (canScroll) {
      
      // Changes current n' does the scroll
      if (e.deltaY > 0 && cur < views.length-1) cur ++;
      if (e.deltaY < 0 && cur > 0) cur --;
      views_inner.style.top = -(views[cur].offsetTop) + 'px';
      
      // Controls classess
      $('.infocus').removeClass('infocus');
      views[cur].classList.add ('infocus');

      // Sets canScroll
      canScroll = false;
      setTimeout (() => {
        canScroll = true;
      }, 1000);

    }

  };

});
