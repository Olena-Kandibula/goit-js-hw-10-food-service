const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  }; 

  const bodyEl = document.body;
  const switchEl = document.querySelector('#theme-switch-toggle');
  const switchToggleEl = document.querySelector('.theme-switch-toggle');   
  
  document.addEventListener("DOMContentLoaded", onLoadTheme);
  document.addEventListener("DOMContentLoaded", onMoveSwitch);
  switchEl.addEventListener('change', onChangeTheme);
  
  
  let messegeCurrentTheme = localStorage.getItem('theme');
  
  function onLoadTheme() {      

    if(!messegeCurrentTheme) {               
      document.body.classList.add(Theme.LIGHT);        
      onChangeMessegeCurrentTheme ()          
    
    } else {            
      document.body.classList.add(messegeCurrentTheme);          
    } 
  } 
  
  function onChangeTheme(evt) {   
    bodyEl.classList.toggle(Theme.DARK);
    bodyEl.classList.toggle(Theme.LIGHT);    
    onChangeMessegeCurrentTheme ()
    onRemoveStaticClass()         
  }  

  function onChangeMessegeCurrentTheme () {
    messegeCurrentTheme = document.body.className;
    localStorage.setItem('theme', messegeCurrentTheme);
  }

  function onMoveSwitch() {
    if(messegeCurrentTheme === Theme.DARK){
      switchEl.checked = true;
      document.querySelector(".theme-switch__marker")
      .classList.add('ststic-toggle');
    } else {
      onRemoveStaticClass()
    }
  }

  function onRemoveStaticClass () {
    document.querySelector(".theme-switch__marker")
      .classList.remove('ststic-toggle');
  }