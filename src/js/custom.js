import { globalAgent } from "http";

function barOnMouseOver(bar, h2) {
  h2.addEventListener("mouseover", function() {
    bar.classList.add("is-large");
  });
  h2.addEventListener("mouseout", function() {
    bar.classList.remove("is-large");
  });
}

function blurOnMouseOver(over, other1, other2,other3) {
  over.addEventListener("mouseover", function() {
    other1.classList.add("is-not-blur");
    other2.classList.add("is-not-blur");
    other3.classList.add('is-not-blur');
  });
  over.addEventListener("mouseout", function() {
    other1.classList.remove("is-not-blur");
    other2.classList.remove("is-not-blur");
    other3.classList.remove('is-not-blur');
  });
}

function soundOver(buttonMenu){
  buttonMenu.addEventListener('mouseenter', function(){
    SoundMenu.play();
  })
  buttonMenu.addEventListener('mouseleave', function(){
    SoundMenu.pause();
    SoundMenu.currentTime = 0;
  })
}


let topbar = document.getElementById("top__bar");
let h2top = document.getElementById("h2__top");
let rightbar = document.getElementById("right__bar");
let h2right = document.getElementById("h2__right");
let leftbar = document.getElementById("left__bar");
let h2left = document.getElementById("h2__left");
let h1home = document.getElementById("h1home");
let logo = document.querySelector(".logo");
let aboutdiv = document.getElementById("aboutdiv");
let cvbar = document.getElementById("cv__bar");
let cv = document.getElementById("cv");
let contactdiv = document.getElementById("contactdiv");
let nightmode = document.getElementById("nightmode");
let logobg = document.getElementById("logo-bg");
let topmenu = document.getElementById("top__menu");
let rightmenu = document.getElementById("right__menu");
let leftmenu = document.getElementById("left__menu");
let reseau = document.getElementById("reseau");
let maincontent = document.getElementById("main__content");
let projetdiv = document.getElementById("projetdiv");
let projet1 = document.getElementById("projet1");
let projet2 = document.getElementById("projet2");
let projet3 = document.getElementById("projet3");
let projet4= document.getElementById("projet4");
var ladate = new Date();
var time = ladate.getHours();
var gram = document.getElementById("gram");
var easter = document.getElementById("easter");
var old = document.getElementById("old");
var blackscreen = document.getElementById("blackscreen");
var feeddiv = document.getElementById("feeddiv");
let feedbar = document.getElementById("feed__bar");
let feedlien = document.getElementById("feedlien");
var hairfaxdiv = document.getElementById("hairfaxdiv");
let hairfaxbar = document.getElementById("hairfax__bar");
let hairfaxlien = document.getElementById("hairfaxlien");
var kapdiv = document.getElementById("kapdiv");
let kapbar = document.getElementById("kap__bar");
let kaplien = document.getElementById("kaplien");
let geekdiv = document.getElementById("geekdiv");
let geekbar = document.getElementById("geek__bar");
let geeklien = document.getElementById("geeklien");
let sound = document.getElementById('Sound');
let soundButton = document.getElementById('soundButton');
let SoundMenu = document.getElementById('SoundMenu');
let fog = document.getElementById('fog');

var fakecharge = document.getElementById('fake-charge')
var elem = document.getElementById("myBar"); 
    var width = 1;
    var id = setInterval(frame, 20);
    function frame() {
        if (width >= 100) {
          fakecharge.classList.add('is-hidden');
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }

// var isPlaying = false;
// sound.volume = 0.5;
// // SoundMenu.volume = 0.0;
// soundButton.addEventListener('click', function(){
//   if (isPlaying) {
//     sound.pause();
//     isPlaying = false;
//     soundButton.classList.remove('is-on');
//     fog.classList.remove('is-up');
//     // SoundMenu.volume = 0.0;
//   } else {
//     sound.play();
//     isPlaying = true;
//     soundButton.classList.add('is-on');
//     fog.classList.add('is-up');
//     // SoundMenu.volume = 0.005;
//   }
// });

// soundOver(h2top);
// soundOver(h2left);
// soundOver(h2right);




if (time >= 19 || time <= 7) {
  nightmode.classList.toggle("is-night");
  logobg.classList.toggle("is-night");
  topmenu.classList.toggle("is-night");
  rightmenu.classList.toggle("is-night");
  leftmenu.classList.toggle("is-night");
  reseau.classList.toggle("is-night");
  maincontent.classList.toggle("is-night");
}

blurOnMouseOver(projet1,projet2,projet3,projet4);
blurOnMouseOver(projet2,projet1,projet3,projet4);
blurOnMouseOver(projet3,projet2,projet1,projet4);
blurOnMouseOver(projet4,projet2,projet1,projet3);

nightmode.addEventListener("click", function() {
  blackscreen.classList.toggle("is-moved");
  setTimeout(function() {
    nightmode.classList.toggle("is-night");
    logobg.classList.toggle("is-night");
    topmenu.classList.toggle("is-night");
    rightmenu.classList.toggle("is-night");
    leftmenu.classList.toggle("is-night");
    reseau.classList.toggle("is-night");
    maincontent.classList.toggle("is-night");
  }, 525);
});

h2top.addEventListener("click", function() {
  aboutdiv.classList.remove("is-visible");
  h1home.classList.add("is-hidden");
  contactdiv.classList.remove("is-visible");
  feeddiv.classList.remove("is-visible");
  hairfaxdiv.classList.remove("is-visible");
  kapdiv.classList.remove("is-visible");
  geekdiv.classList.remove('is-visible');
  setTimeout(function() {
    projetdiv.classList.add("is-visible");
  }, 800);
});

logo.addEventListener("click", function() {
  aboutdiv.classList.remove("is-visible");
  contactdiv.classList.remove("is-visible");
  projetdiv.classList.remove("is-visible");
  feeddiv.classList.remove("is-visible");
  hairfaxdiv.classList.remove("is-visible");
  kapdiv.classList.remove("is-visible");
  geekdiv.classList.remove('is-visible');
  setTimeout(function() {
    h1home.classList.remove("is-hidden");
  }, 800);
});

h2left.addEventListener("click", function() {
  h1home.classList.add("is-hidden");
  contactdiv.classList.remove("is-visible");
  projetdiv.classList.remove("is-visible");
  feeddiv.classList.remove("is-visible");
  hairfaxdiv.classList.remove("is-visible");
  kapdiv.classList.remove("is-visible");
  geekdiv.classList.remove('is-visible');
  setTimeout(function() {
    aboutdiv.classList.add("is-visible");
  }, 800);
});

h2right.addEventListener("click", function() {
  h1home.classList.add("is-hidden");
  aboutdiv.classList.remove("is-visible");
  projetdiv.classList.remove("is-visible");
  feeddiv.classList.remove("is-visible");
  hairfaxdiv.classList.remove("is-visible");
  kapdiv.classList.remove("is-visible");
  geekdiv.classList.remove('is-visible');
  setTimeout(function() {
    contactdiv.classList.add("is-visible");
  }, 800);
});

projet1.addEventListener("click", function() {
  h1home.classList.add("is-hidden");
  aboutdiv.classList.remove("is-visible");
  projetdiv.classList.remove("is-visible");
  contactdiv.classList.remove("is-visible");
  hairfaxdiv.classList.remove("is-visible");
  kapdiv.classList.remove("is-visible");
  geekdiv.classList.remove('is-visible');
  setTimeout(function() {
    feeddiv.classList.add("is-visible");
  }, 800);
});

projet2.addEventListener("click", function() {
  h1home.classList.add("is-hidden");
  aboutdiv.classList.remove("is-visible");
  projetdiv.classList.remove("is-visible");
  contactdiv.classList.remove("is-visible");
  feeddiv.classList.remove("is-visible");
  kapdiv.classList.remove("is-visible");
  geekdiv.classList.remove('is-visible');
  setTimeout(function() {
    hairfaxdiv.classList.add("is-visible");
  }, 800);
});

projet3.addEventListener("click", function() {
  h1home.classList.add("is-hidden");
  aboutdiv.classList.remove("is-visible");
  projetdiv.classList.remove("is-visible");
  contactdiv.classList.remove("is-visible");
  feeddiv.classList.remove("is-visible");
  hairfaxdiv.classList.remove("is-visible");
  geekdiv.classList.remove('is-visible');
  setTimeout(function() {
    kapdiv.classList.add("is-visible");
  }, 800);
});

projet4.addEventListener("click", function() {
  h1home.classList.add("is-hidden");
  aboutdiv.classList.remove("is-visible");
  projetdiv.classList.remove("is-visible");
  contactdiv.classList.remove("is-visible");
  hairfaxdiv.classList.remove("is-visible");
  kapdiv.classList.remove("is-visible");
  feeddiv.classList.remove("is-visible");
  setTimeout(function() {
    geekdiv.classList.add('is-visible');
  }, 800);
});

barOnMouseOver(topbar, h2top);
barOnMouseOver(rightbar, h2right);
barOnMouseOver(leftbar, h2left);
// barOnMouseOver(cvbar, cv);
// barOnMouseOver(feedbar, feedlien);
// barOnMouseOver(hairfaxbar, hairfaxlien);
// barOnMouseOver(kapbar, kaplien);
// barOnMouseOver(geekbar, geeklien);

setTimeout(function() {
  easter.classList.add("is-easter");
  old.classList.add("is-easter");
}, 3000);

easter.addEventListener("click", function(e) {
  e.preventDefault();
  var randNb = Math.floor(Math.random() * (1 + 26));
  var tabcss = [
    "_1977",
    "aden",
    "brannan",
    "brooklyn",
    "clarendon",
    "earlybird",
    "gingham",
    "hudson",
    "inkwell",
    "kelvin",
    "lark",
    "lofi",
    "maven",
    "mayfair",
    "moon",
    "nashville",
    "perpetua",
    "reyes",
    "rise",
    "slumber",
    "stinson",
    "toaster",
    "valencia",
    "walden",
    "willow",
    "xpro2"
  ];
  gram.className = tabcss[randNb];
});

old.addEventListener('click', function(){
  document.body.classList.toggle('lcd');
});

let cursor = {
  delay: 8,
  _x: 0,
  _y: 0,
  endX: (window.innerWidth / 2),
  endY: (window.innerHeight / 2),
  cursorVisible: true,
  cursorEnlarged: false,
  $dot: document.querySelector('.cursor-dot'),
  $outline: document.querySelector('.cursor-dot-outline'),
  
  init: function() {
      // Set up element sizes
      this.dotSize = this.$dot.offsetWidth;
      this.outlineSize = this.$outline.offsetWidth;
      
      this.setupEventListeners();
      this.animateDotOutline();
  },
  
  setupEventListeners: function() {
      let self = this;
      
      // Anchor hovering
      let buttonTab = [h2left,h2right,h2top];
      buttonTab.forEach(function(el) {
          el.addEventListener('mouseenter', function() {
              self.cursorEnlarged = true;
              self.toggleCursorSize();
          });
          el.addEventListener('mouseout', function() {
              self.cursorEnlarged = false;
              self.toggleCursorSize();
          });
      });

      document.querySelectorAll('a').forEach(function(el) {
        el.addEventListener('mouseenter', function() {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
        });
        el.addEventListener('mouseout', function() {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
        });
    });

      logo.addEventListener('mouseenter', function() {
          self.cursorEnlarged = true;
          self.toggleCursorSize();
      });
      logo.addEventListener('mouseout', function() {
          self.cursorEnlarged = false;
          self.toggleCursorSize();
      });

      
      // Click events
      document.addEventListener('mousedown', function() {
          self.cursorEnlarged = true;
          self.toggleCursorSize();
      });
      document.addEventListener('mouseup', function() {
          self.cursorEnlarged = false;
          self.toggleCursorSize();
      });

      document.addEventListener('mousemove', function(e) {
          // Show the cursor
          self.cursorVisible = true;
          self.toggleCursorVisibility();

          // Position the dot
          self.endX = e.pageX;
          self.endY = e.pageY;
          self.$dot.style.top = self.endY + 'px';
          self.$dot.style.left = self.endX + 'px';
      });
      
      // Hide/show cursor
      document.addEventListener('mouseenter', function(e) {
          self.cursorVisible = true;
          self.toggleCursorVisibility();
          self.$dot.style.opacity = 1;
          self.$outline.style.opacity = 1;
      });
      
      document.addEventListener('mouseleave', function(e) {
          self.cursorVisible = true;
          self.toggleCursorVisibility();
          self.$dot.style.opacity = 0;
          self.$outline.style.opacity = 0;
      });
  },
  
  animateDotOutline: function() {
      let self = this;
      
      self._x += (self.endX - self._x) / self.delay;
      self._y += (self.endY - self._y) / self.delay;
      self.$outline.style.top = self._y + 'px';
      self.$outline.style.left = self._x + 'px';
      
      requestAnimationFrame(this.animateDotOutline.bind(self));
  },
  
  toggleCursorSize: function() {
      let self = this;
      
      if (self.cursorEnlarged) {
          self.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
          self.$outline.style.transform = 'translate(-50%, -50%) scale(3)';
      } else {
          self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
          self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
      }
  },
  
  toggleCursorVisibility: function() {
      let self = this;
      
      if (self.cursorVisible) {
          self.$dot.style.opacity = 1;
          self.$outline.style.opacity = 1;
      } else {
          self.$dot.style.opacity = 0;
          self.$outline.style.opacity = 0;
      }
  }
};

if(screen.width >= 900){
  cursor.init();
}

