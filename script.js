// Nested menu behavior with accessibility considerations
document.addEventListener('DOMContentLoaded', () => {
  // Ensure all topics start hidden
  document.querySelectorAll('.topics').forEach(list => list.classList.remove('open'));

  // Bind click + keyboard handlers to subject cards
  document.querySelectorAll('.subject').forEach(card => {
    const targetId = card.getAttribute('data-target');
    const targetList = document.getElementById(targetId);

    const toggle = () => {
      const isOpen = targetList.classList.contains('open');
      // close all
      document.querySelectorAll('.topics').forEach(list => list.classList.remove('open'));
      document.querySelectorAll('.subject').forEach(s => s.setAttribute('aria-expanded', 'false'));

      // open this one if it was closed
      if (!isOpen) {
        targetList.classList.add('open');
        card.setAttribute('aria-expanded', 'true');
      }
    };

    card.addEventListener('click', toggle);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    });
  });
});
