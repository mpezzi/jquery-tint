/*
 * jQuery Tint Plugin by M. Pezzi
 * http://thespiral.ca/jquery/tint/demo/
 * Version: 0.1-alpha (03/13/11)
 * Dual licensed under the MIT and GPL licences:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Requires: jQuery v1.4.2 or later
 */

;(function($){
  
  $.fn.tint = function(settings, callback) {
    return this.each(function(){
      var self = $(this), o = $.extend({}, $.fn.tint.defaults, settings || {});
      
      self.css('backgroundColor', o.backgroundColor);
      
      $(o.find, self).each(function(){
        var width   = $(this).width(),
            height  = $(this).height(),
            offset  = $(this).offset(),
            tint    = $(this).data('tint:overlay') || $('<div class="tint" />').appendTo(self);

        tint.css({
          position: 'absolute',
          top: offset.top + 'px',
          left: offset.left + 'px',
          width: width,
          height: height,
          zIndex: o.zIndex,
          opacity: o.opacity,
          backgroundColor: o.backgroundTintColor
        });
        
        $(this).data('tint:overlay', tint);
      });
      
      return self;
    });
  };
  
  $.fn.tint.defaults = {
    find: 'img',
    backgroundColor: '#000',
    backgroundTintColor: '#000',
    opacity: 0.2,
    zIndex: 1000,
    speed: 1000
  };
  
})(jQuery);
