// Ensure external links open in a new tab
// Adds target="_blank" and rel="noopener noreferrer" to outbound links on page load

document.addEventListener('DOMContentLoaded', () => {
  const currentHost = window.location.hostname;

  document.querySelectorAll('a[href]').forEach(link => {
    // Only treat links with a hostname and to a different host as external
    if (link.hostname && link.hostname !== currentHost) {
      if (link.getAttribute('target') !== '_blank') {
        link.setAttribute('target', '_blank');
      }
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });
});

