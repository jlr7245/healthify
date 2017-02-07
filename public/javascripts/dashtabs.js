
/* shoutout to http://callmenick.com/post/simple-responsive-tabs-javascript-css for the tutorial that lead me to this solution */

(() => {
  const tabs = (element, navClass, contClass) => {
    const theElement = document.getElementById(element);
    const tabNav = Array.from(theElement.getElementsByClassName(navClass));
    const tabCont = Array.from(theElement.getElementsByClassName(contClass));
    let activeIndex = 0;
    let initCalled = false;
    
    const init = () => {
      if (!initCalled) {
        initCalled = true;
        tabNav.forEach((nav) => {
          nav.addEventListener('click', (e) => {
            e.preventDefault();
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

const dashTabs = tabs('tabs', 'tablink', 'tabcont');
dashTabs.init();

const nuTabs = tabs('nutabs', 'nulink', 'nucontent');
nuTabs.init();