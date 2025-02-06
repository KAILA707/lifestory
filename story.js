// script.js
const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  const readMoreLink = box.querySelector('.read-more-link');
  const readLessLink = box.querySelector('.read-less-link');
  const expandedText = box.querySelector('.expanded-text');
  const shortText = box.querySelector('p:not(.expanded-text)');

  readMoreLink.addEventListener('click', () => {
    expandedText.style.display = 'block';
    shortText.style.display = 'none';
    readMoreLink.style.display = 'none';
    readLessLink.style.display = 'inline';
  });

  readLessLink.addEventListener('click', () => {
    expandedText.style.display = 'none';
    shortText.style.display = 'block';
    readMoreLink.style.display = 'inline';
    readLessLink.style.display = 'none';
  });
});