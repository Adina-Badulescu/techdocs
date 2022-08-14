const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')
// import wb from './winbox.bundle'

export var executed = {  
  'aboutStatus': false,
  'contactStatus': false
};






about.addEventListener('click', function () {

  if (executedAbout === false) {
    executedAbout = true;
    const aboutBox = new WinBox({
      title: 'About Me',
      //modal: true,
      width: '400px',
      height: '400px',
      top: 50,
      right: 50,
      bottom: 50,
      left: 50,
      mount: aboutContent,
      onfocus: function () {
        this.setBackground('#00aa00')
      },
      onblur: function () {
        this.setBackground('#777')
      },
    })
  }
  else { return null; }

})

contact.addEventListener('click', () => {
  if (executedContact === false) {
    executedContact = true;
    const contactBox = new WinBox({
      title: 'Contact Me',
      background: '#00aa00',
      width: '400px',
      height: '400px',
      top: 150,
      right: 50,
      bottom: 50,
      left: 250,
      mount: contactContent,
      onfocus: function () {
        this.setBackground('#00aa00')
      },
      onblur: function () {
        this.setBackground('#777')
      },      
      onclose: function () {
        executed.contactStatus = false;
      }
    })
  } else { return null; }

})


// Typewriter.js
// https://github.com/ronv/Typewriter.js

$.fn.typewriter = function () {
  this.each(function () {
    var c = $(this),
      b = c.html(),
      a = 0,
      d = 0;
    c.html("");
    var e = function () {
      if ("<" == b.substring(a, a + 1)) {
        var f = new RegExp(/<span class="instant"/),
          g = new RegExp(/<span class="clear"/);
        if (b.substring(a, b.length).match(f)) a += b.substring(a, b.length).indexOf("</span>") + 7;
        else if (b.substring(a, b.length).match(g)) d = a, a += b.substring(a, b.length).indexOf("</span>") + 7;
        else
          for (;
            ">" != b.substring(a, a + 1);) a++
      }
      c.html(b.substring(d, a++) + (a & 1 ? "_" : ""));
      a >= b.length || setTimeout(e, 70 + 100 *
        Math.random())
    };
    e()
  });
  return this
};
$(".terminal").typewriter();

