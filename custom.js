const animation = lottie.loadAnimation({
    container: document.getElementById('animationContainer'), // The container where the animation will be rendered
    renderer: 'svg', // Can be 'svg', 'canvas', or 'html'
    loop: true, // Set to true if you want the animation to loop
    autoplay: true, // Set to true to start playing the animation automatically
    path: 'portfoliocharacter.json' // Path to your animation JSON file
  });