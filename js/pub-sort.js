document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('pub-list');
  const sortCitedByBtn = document.getElementById('sort-citedby');
  const sortYearBtn = document.getElementById('sort-year');

  function sortPubs(criteria) {
    if (!container) return;

    const items = Array.from(container.getElementsByClassName('pub-component'));
    items.sort((a, b) => {
      const valA = parseInt(a.dataset[criteria]) || 0;
      const valB = parseInt(b.dataset[criteria]) || 0;
      return valB - valA; // sort giảm dần
    });

    items.forEach((item) => container.appendChild(item));
  }

  if (sortCitedByBtn) {
    sortCitedByBtn.addEventListener('click', function (e) {
      e.preventDefault();
      sortPubs('cited_by');
    });
  }

  if (sortYearBtn) {
    sortYearBtn.addEventListener('click', function (e) {
      e.preventDefault();
      sortPubs('year');
    });
  }
});
