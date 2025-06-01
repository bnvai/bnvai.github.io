function sortPubs(criteria) {
  const container = document.getElementById('pub-list');
  const items = Array.from(container.getElementsByClassName('pub-wrapper'));

  items.sort((a, b) => {
    let valA = parseInt(a.dataset[criteria]) || 0;
    let valB = parseInt(b.dataset[criteria]) || 0;
    return valB - valA; // Sắp xếp giảm dần
  });

  items.forEach((item) => container.appendChild(item));
}

document.addEventListener('DOMContentLoaded', function () {
  document
    .getElementById('sort-citedby')
    .addEventListener('click', function () {
      sortPubs('cited_by');
    });
  document.getElementById('sort-year').addEventListener('click', function () {
    sortPubs('year');
  });
});
