// Animate button click
document.querySelector('.hero button').addEventListener('click', () => {
  alert('Welcome to the Project Management Tool!');
});

// Hover animations for features
const features = document.querySelectorAll('.feature');
features.forEach(feature => {
  feature.addEventListener('mouseover', () => {
    feature.style.transform = 'scale(1.05)';
    feature.style.transition = 'transform 0.3s ease';
  });
  feature.addEventListener('mouseout', () => {
    feature.style.transform = 'scale(1)';
  });
});
