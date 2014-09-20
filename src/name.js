(function ($, undefined) {
  'use strict';

  // Collection method.
  $.fn.extend({
    <%= camelname %>: function (options) {

      var defaults = {};
      var settings = $.extend(defaults, options);

      return this.each(function () {

      });
    }
  });

  // Static method.
  $.extend({
    <%= camelname %>: function (options) {

      var defaults = {};
      var settings = $.extend(defaults, options);

    }
  });

}(jQuery));