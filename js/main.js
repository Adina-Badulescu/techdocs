const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')


var executed = {
  'aboutStatus': false,
  'contactStatus': false
};






about.addEventListener('click', function () {

  if (executed.aboutStatus === false) {
    if (window.innerWidth > 701) {

      executed.aboutStatus = true;
      const aboutBox = new WinBox({
        title: 'About Me',
        //modal: true,
        width: '400px',
        height: '400px',
        top: 50,
        right: 50,
        bottom: 50,
        left: 40,
        mount: aboutContent,
        onfocus: function () {
          this.setBackground('#00aa00')
        },
        onblur: function () {
          this.setBackground('#777')
        },
        onclose: function () {
          executed.aboutStatus = false;
        }
      })
    }

    if (window.innerWidth > 490 && window.innerWidth <= 700) {
      console.log("into 700");
      executed.aboutStatus = true;
      const aboutBox = new WinBox({
        title: 'About Me',
        //modal: true,
        width: '400px',
        height: '400px',
        top: 50,
        right: 50,
        bottom: 50,
        left: 20,
        mount: aboutContent,
        onfocus: function () {
          this.setBackground('#00aa00')
        },
        onblur: function () {
          this.setBackground('#777')
        },
        onclose: function () {
          executed.aboutStatus = false;
        }
      })
    }

    490
    if (window.innerWidth <= 490) {
      console.log("into <= 490");
      executed.aboutStatus = true;
      const aboutBox = new WinBox({
        title: 'About Me',
        //modal: true,
        width: '400px',
        height: '400px',
        top: 50,
        right: 50,
        bottom: 50,
        left: 0,
        mount: aboutContent,
        onfocus: function () {
          this.setBackground('#00aa00')
        },
        onblur: function () {
          this.setBackground('#777')
        },
        onclose: function () {
          executed.aboutStatus = false;
        }
      })
    }


  }
  else { return null; }

})

contact.addEventListener('click', () => {

  if (executed.contactStatus === false) {


    if (window.innerWidth > 701) {

      executed.contactStatus = true;
      new WinBox({
        title: '',
        //modal: true,
        width: '400px',
        height: '400px',
        top: 150,
        right: 50,
        bottom: 50,
        left: 40,
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
    }

    if (window.innerWidth > 490 && window.innerWidth <= 700) {

      executed.contactStatus = true;
      new WinBox({
        title: '',
        //modal: true,
        width: '400px',
        height: '400px',
        top: 150,
        right: 50,
        bottom: 50,
        left: 20,
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
    }


    if (window.innerWidth <= 490) {

      executed.contactStatus = true;
      new WinBox({
        title: '',
        //modal: true,
        width: '300px',
        height: '300px',
        top: 150,
        right: 50,
        bottom: 50,
        left: 20,
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
    }
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
      a >= b.length || setTimeout(e, 50)
    };
    e()
  });
  return this
};
$(".terminal").typewriter();


