document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('pub-list');
  console.log('Container:', container);

  const sortCitedByBtn = document.getElementById('sort-citedby');
  const sortYearBtn = document.getElementById('sort-year');
  console.log('sortCitedByBtn:', sortCitedByBtn);
  console.log('sortYearBtn:', sortYearBtn);

  function sortPubs(criteria) {
    if (!container) {
      console.warn('Container not found!');
      return;
    }

    const items = Array.from(container.getElementsByClassName('pub-component'));
    console.log(`Sorting by: ${criteria}, Found items:`, items.length);

    items.forEach((item, idx) => {
      console.log(`Item ${idx} - dataset.${criteria}:`, item.dataset[criteria]);
    });

    items.sort((a, b) => {
      const valA = parseInt(a.dataset[criteria]) || 0;
      const valB = parseInt(b.dataset[criteria]) || 0;
      console.log(`Compare: ${valB} vs ${valA}`);
      return valB - valA; // sort giảm dần
    });

    items.forEach((item) => container.appendChild(item));
  }

  if (sortCitedByBtn) {
    sortCitedByBtn.addEventListener('click', function (e) {
      e.preventDefault();
      console.log('Sort by Cited By clicked');
      sortPubs('citedBy');
    });
  }

  if (sortYearBtn) {
    sortYearBtn.addEventListener('click', function (e) {
      e.preventDefault();
      console.log('Sort by Year clicked');
      sortPubs('year');
    });
  }
});