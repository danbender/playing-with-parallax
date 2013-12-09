win = $(window);

function set3D() {
  var shadow = $('.shadow')

  var windowHeight = win.height();

  shadow.each(function() {
    var self = $(this),
    scrollHeight = win.scrollTop(),
    elementPosition = self.position(),
    shadowType = self.data('shadow') + 'Shadow',
    shadowOffset = (elementPosition.top + self.height() / 2 - scrollHeight) / windowHeight * -100 + 50;

    if (shadowType === 'textShadow') {
      self.css(shadowType, '0 ' + shadowOffset / 3 + 'px 10px rgba(0,0,0,0.15)');
    }
    else {
      self.css(shadowType, '0 ' + shadowOffset / 3 + 'px 20px -5px rgba(0,0,0,0.15)');
    };
  });
};

win.on('load scroll resize', function() {
  set3D();
});