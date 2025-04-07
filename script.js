const apiList = [
    {
      name: 'GitHub REST API',
      description: 'Access GitHub repositories, issues, pull requests, and more.',
      url: 'https://docs.github.com/en/rest',
      category: 'Developer Tools',
    },
    {
      name: 'Recipe Puppy API',
      description: 'Find recipes by ingredients.',
      url: 'http://www.recipepuppy.com/about/api/',
      category: 'Food',
    },
    {
      name: 'OpenAI API',
      description: 'Access powerful language models for natural language processing.',
      url: 'https://platform.openai.com/docs/api-reference',
      category: 'AI',
    },
    // Add the rest of the 15 APIs here...
  ];
  
  const searchInput = document.getElementById('searchInput');
  const categorySelect = document.getElementById('categorySelect');
  const apiCards = document.getElementById('apiCards');
  const noResults = document.getElementById('noResults');
  
  // Fill category dropdown
  const categories = ['All', ...new Set(apiList.map(api => api.category))];
  categories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    categorySelect.appendChild(option);
  });
  
  function renderCards() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categorySelect.value;
  
    const filtered = apiList.filter(api =>
      (selectedCategory === 'All' || api.category === selectedCategory) &&
      (
        api.name.toLowerCase().includes(searchTerm) ||
        api.description.toLowerCase().includes(searchTerm) ||
        api.category.toLowerCase().includes(searchTerm)
      )
    );
  
    apiCards.innerHTML = '';
    noResults.style.display = filtered.length ? 'none' : 'block';
  
    filtered.forEach(api => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h2>${api.name}</h2>
        <p>${api.description}</p>
        <span class="category">${api.category}</span><br/>
        <a href="${api.url}" target="_blank">Learn more</a>
      `;
      apiCards.appendChild(card);
    });
  }
  
  searchInput.addEventListener('input', renderCards);
  categorySelect.addEventListener('change', renderCards);
  
  renderCards();