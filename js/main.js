document.addEventListener('DOMContentLoaded',function(){
  var navToggle=document.getElementById('nav-toggle');
  var navList=document.getElementById('nav-list');
  if(navToggle){
    navToggle.addEventListener('click',function(){
      var expanded=this.getAttribute('aria-expanded')==='true';
      this.setAttribute('aria-expanded',String(!expanded));
      navList.classList.toggle('open');
    });
    // Close the menu after tapping a link (single-page nav)
    navList.addEventListener('click',function(e){
      if(e.target.tagName==='A'){
        navList.classList.remove('open');
        navToggle.setAttribute('aria-expanded','false');
      }
    });
  }
  // Accordion
  var accToggles=document.querySelectorAll('.accordion-toggle');
  accToggles.forEach(function(btn){
    btn.addEventListener('click',function(){
      var panel=this.nextElementSibling;
      var open = panel.style.display==='block';
      document.querySelectorAll('.accordion-panel').forEach(function(p){p.style.display='none'});
      panel.style.display = open ? 'none' : 'block';
    });
  });
});
