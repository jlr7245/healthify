
/* shoutout to http://callmenick.com/post/simple-responsive-tabs-javascript-css for the tutorial that lead me to this solution */

(() => {
  const tabs = () => {
    const theElement = document.getElementById('tabs');
    const tabNav = Array.from(theElement.getElementsByClassName('tablink'));
    const tabCont = Array.from(theElement.getElementsByClassName('tabcont'));
    let activeIndex = 0;
    let initCalled = false;
    
    const init = () => {
      if (!initCalled) {
        initCalled = true;
        tabNav.forEach((nav) => {
          nav.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('click', tabNav.indexOf(nav));
            goToTab(tabNav.indexOf(nav));
          });
        });
      }
    };
    
    const goToTab = (index) => {
      if (index !== activeIndex && index >= 0 && index <= tabNav.length) {
        tabNav[activeIndex].classList.remove('actv');
        tabNav[index].classList.add('actv');
        tabCont[activeIndex].classList.remove('actv');
        tabCont[index].classList.add('actv');
        activeIndex = index;
      }
    };
    
    return {
      init,
      goToTab
    };
  };
  window.tabs = tabs;
})();

const dashTabs = tabs();
dashTabs.init();