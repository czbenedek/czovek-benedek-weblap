button.addEventListener('mouseenter', () => {
    button.style.backgroundImage = `url(${hoverImage})`;
  });

  // Remove the background on mouse leave
  button.addEventListener('mouseleave', () => {
    button.style.backgroundImage = '';
  });