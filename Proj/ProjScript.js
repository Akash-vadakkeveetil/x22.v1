const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

let selectedCategory = 'all';

// 🔍 Filter when typing
searchInput.addEventListener('keyup', () => filterProjects());

// 🎯 Filter when clicking category buttons
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    selectedCategory = button.dataset.category;
    filterProjects();
  });
});

function filterProjects() {
  const searchTerm = searchInput.value.toLowerCase();

  projectCards.forEach(card => {
    const title = card.dataset.title.toLowerCase();
    const category = card.dataset.category;

    const matchesSearch = title.includes(searchTerm);
    const matchesCategory = selectedCategory === 'all' || selectedCategory === category;

    if (matchesSearch && matchesCategory) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
