// Wait for AOS library to load
if (typeof window !== 'undefined') {
  const initAOS = () => {
    const script = document.querySelector('script[src*="aos.js"]');
    
    if (window.AOS) {
      console.log('AOS loaded, initializing...');
      AOS.init({
        duration: 800,
        once: false,
        offset: 100,
        easing: 'ease-in-out',
        disable: false,
      });
      console.log('AOS initialized');
    } else {
      console.log('Waiting for AOS to load...');
      setTimeout(initAOS, 100);
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAOS);
  } else {
    initAOS();
  }

  // Refresh AOS periodically
  let refreshTimeout;
  const observeDOM = () => {
    if (typeof AOS !== 'undefined') {
      clearTimeout(refreshTimeout);
      refreshTimeout = setTimeout(() => {
        AOS.refresh();
        console.log('AOS refreshed');
      }, 500);
    }
  };

  // Monitor DOM changes
  const observer = new MutationObserver(observeDOM);
  observer.observe(document.body, { childList: true, subtree: true });
}
