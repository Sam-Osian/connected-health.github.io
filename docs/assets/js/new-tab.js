// Ensure all links open in a new tab
// Adds target _blank and rel noopener to every anchor on page load

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href]').forEach(function (link) {
    if (link.getAttribute('target') !== '_blank') {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });
});

