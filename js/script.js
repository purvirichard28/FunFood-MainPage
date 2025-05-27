// Recipe data storage
let recipes = [
    {
        id: 1,
        name: "Classic Chocolate Chip Cookies",
        cookTime: 25,
        difficulty: "Easy",
        category: "Dessert",
        description: "Soft, chewy chocolate chip cookies that are perfect for any occasion. A family favorite recipe passed down through generations.",
        ingredients: [
            "2 cups all-purpose flour",
            "1 tsp baking soda",
            "1 tsp salt",
            "1 cup butter, softened",
            "3/4 cup granulated sugar",
            "3/4 cup brown sugar",
            "2 large eggs",
            "2 tsp vanilla extract",
            "2 cups chocolate chips"
        ],
        instructions: "1. Preheat oven to 375°F (190°C). 2. In a bowl, whisk together flour, baking soda, and salt. 3. In a large bowl, cream together butter and both sugars until light and fluffy. 4. Beat in eggs one at a time, then vanilla. 5. Gradually mix in the flour mixture. 6. Fold in chocolate chips. 7. Drop rounded tablespoons of dough onto ungreased baking sheets. 8. Bake for 9-11 minutes until golden brown. 9. Cool on baking sheet for 5 minutes before transferring to wire rack.",
        tags: ["dessert", "cookies", "chocolate", "easy", "baking"],
        author: "Sarah Johnson",
        icon: "🍪"
    },
    {
        id: 2,
        name: "Mediterranean Quinoa Salad",
        cookTime: 15,
        difficulty: "Easy",
        category: "Lunch",
        description: "A fresh and healthy quinoa salad packed with Mediterranean flavors. Perfect for meal prep or a light lunch that's both nutritious and delicious.",
        ingredients: [
            "1 cup quinoa",
            "2 cups water",
            "1 large cucumber, diced",
            "2 medium tomatoes, diced",
            "1/2 red onion, finely chopped",
            "1/4 cup extra virgin olive oil",
            "2 tbsp fresh lemon juice",
            "1/2 cup crumbled feta cheese",
            "1/4 cup fresh parsley, chopped",
            "Salt and pepper to taste"
        ],
        instructions: "1. Rinse quinoa under cold water. 2. In a saucepan, bring water to boil, add quinoa, reduce heat and simmer covered for 15 minutes. 3. Let quinoa cool completely. 4. Dice cucumber, tomatoes, and red onion. 5. In a small bowl, whisk together olive oil and lemon juice. 6. In a large bowl, combine cooled quinoa, diced vegetables, and parsley. 7. Pour dressing over salad and toss. 8. Add feta cheese and gently mix. 9. Season with salt and pepper. 10. Chill for at least 30 minutes before serving.",
        tags: ["healthy", "vegetarian", "mediterranean", "quinoa", "salad"],
        author: "Mike Chen",
        icon: "🥗"
    },
    {
        id: 3,
        name: "Creamy Mushroom Risotto",
        cookTime: 35,
        difficulty: "Medium",
        category: "Dinner",
        description: "Rich and creamy risotto with earthy mushrooms. A comforting Italian classic that's perfect for a cozy dinner and sure to impress guests.",
        ingredients: [
            "1 cup arborio rice",
            "4 cups warm chicken broth",
            "1 lb mixed mushrooms, sliced",
            "1 medium onion, finely chopped",
            "2 cloves garlic, minced",
            "1/2 cup dry white wine",
            "1/2 cup freshly grated parmesan cheese",
            "2 tbsp butter",
            "2 tbsp olive oil",
            "Fresh thyme sprigs",
            "Salt and pepper to taste"
        ],
        instructions: "1. Heat olive oil in a large pan and sauté mushrooms until golden. Set aside. 2. In the same pan, sauté onion until translucent, add garlic. 3. Add rice and stir for 2 minutes until lightly toasted. 4. Pour in wine and stir until absorbed. 5. Add warm broth one ladle at a time, stirring constantly until absorbed before adding more. 6. Continue for 18-20 minutes until rice is creamy. 7. Fold in sautéed mushrooms, butter, and parmesan. 8. Season with salt, pepper, and fresh thyme. 9. Serve immediately while hot and creamy.",
        tags: ["italian", "creamy", "mushrooms", "comfort-food", "dinner"],
        author: "Isabella Romano",
        icon: "🍄"
    },
    {
        id: 4,
        name: "Fluffy Pancakes",
        cookTime: 20,
        difficulty: "Easy",
        category: "Breakfast",
        description: "Light and fluffy pancakes that are perfect for weekend mornings. Serve with maple syrup and fresh berries for the ultimate breakfast treat.",
        ingredients: [
            "2 cups all-purpose flour",
            "2 tbsp granulated sugar",
            "2 tsp baking powder",
            "1 tsp salt",
            "2 large eggs",
            "1 3/4 cups milk",
            "1/4 cup melted butter",
            "1 tsp vanilla extract",
            "Butter for cooking",
            "Maple syrup for serving"
        ],
        instructions: "1. In a large bowl, whisk together flour, sugar, baking powder, and salt. 2. In another bowl, beat eggs and whisk in milk, melted butter, and vanilla. 3. Pour wet ingredients into dry ingredients and stir just until combined (don't overmix - lumps are okay). 4. Heat a griddle or large skillet over medium heat and lightly butter. 5. Pour 1/4 cup batter for each pancake. 6. Cook until bubbles form on surface and edges look set, about 2-3 minutes. 7. Flip and cook until golden brown, 1-2 minutes more. 8. Serve immediately with butter and maple syrup.",
        tags: ["breakfast", "fluffy", "easy", "weekend", "family-friendly"],
        author: "Tom Williams",
        icon: "🥞"
    }
];

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    displayRecipes(recipes);
    initializeEventListeners();
});

// Initialize event listeners
function initializeEventListeners() {
    // Search on Enter key press
    document.getElementById('searchInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchRecipes();
        }
    });

    // Real-time search as user types (optional)
    document.getElementById('searchInput').addEventListener('input', function() {
        const searchTerm = this.value.trim();
        if (searchTerm.length === 0) {
            displayRecipes(recipes);
        }
    });

    // Add newsletter form submission handler
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // Here you would typically send this to your backend
            // For now, we'll just show a success message
            showNotification('Thanks for subscribing! 📧');
            this.reset();
        });
    }
}

// Display recipes in the grid
function displayRecipes(recipesToShow) {
    const grid = document.getElementById('recipeGrid');
    grid.innerHTML = '';

    if (recipesToShow.length === 0) {
        grid.innerHTML = '<p style="text-align: center; color: #666; font-size: 1.2rem; grid-column: 1 / -1;">No recipes found. Try a different search term.</p>';
        return;
    }

    recipesToShow.forEach((recipe, index) => {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';
        recipeCard.style.animationDelay = `${index * 0.1}s`;
        
        recipeCard.innerHTML = `
            <div class="recipe-image">
                ${recipe.icon}
            </div>
            <div class="recipe-content">
                <h3 class="recipe-title">${recipe.name}</h3>
                <div class="recipe-meta">
                    <span>⏱️ ${recipe.cookTime} min</span>
                    <span>📊 ${recipe.difficulty}</span>
                    <span>👤 ${recipe.author}</span>
                </div>
                <p class="recipe-description">${recipe.description}</p>
                <div class="recipe-tags">
                    ${recipe.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        
        // Add click event to show recipe details
        recipeCard.addEventListener('click', () => showRecipeDetails(recipe));
        
        grid.appendChild(recipeCard);
    });
}

// Toggle add recipe form visibility
function toggleAddRecipeForm() {
    const form = document.getElementById('addRecipeForm');
    const isVisible = form.style.display !== 'none' && form.style.display !== '';
    
    if (isVisible) {
        form.style.display = 'none';
        // Clear form when hiding
        document.querySelector('#addRecipeForm form').reset();
    } else {
        form.style.display = 'block';
        // Scroll to form when showing
        form.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add new recipe
function addRecipe(event) {
    event.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('recipeName').value.trim(),
        cookTime: parseInt(document.getElementById('cookTime').value),
        difficulty: document.getElementById('difficulty').value,
        category: document.getElementById('category').value,
        description: document.getElementById('description').value.trim(),
        ingredients: document.getElementById('ingredients').value
            .split('\n')
            .map(ingredient => ingredient.trim())
            .filter(ingredient => ingredient.length > 0),
        instructions: document.getElementById('instructions').value.trim(),
        tags: document.getElementById('tags').value
            .split(',')
            .map(tag => tag.trim().toLowerCase())
            .filter(tag => tag.length > 0)
    };

    // Validate required fields
    if (!formData.name || !formData.cookTime || !formData.difficulty || 
        !formData.category || !formData.description || 
        formData.ingredients.length === 0 || !formData.instructions) {
        alert('Please fill in all required fields.');
        return;
    }

    // Create new recipe object
    const newRecipe = {
        id: Date.now(), // Use timestamp as unique ID
        ...formData,
        author: "You",
        icon: getRandomIcon()
    };

    // Add to beginning of recipes array
    recipes.unshift(newRecipe);
    
    // Update display
    displayRecipes(recipes);
    
    // Hide form and reset
    toggleAddRecipeForm();
    
    // Show success message
    showNotification('Recipe added successfully! 🎉');
    
    // Scroll to top to see new recipe
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Get random icon for new recipes
function getRandomIcon() {
    const icons = ['🍳', '🥘', '🍲', '🥗', '🍝', '🥙', '🌮', '🍕', '🥧', '🧁', '🍰', '🥪', '🍜', '🍛'];
    return icons[Math.floor(Math.random() * icons.length)];
}

// Search recipes functionality
function searchRecipes() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    
    if (!searchTerm) {
        displayRecipes(recipes);
        return;
    }

    const filteredRecipes = recipes.filter(recipe => 
        recipe.name.toLowerCase().includes(searchTerm) ||
        recipe.description.toLowerCase().includes(searchTerm) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
        recipe.category.toLowerCase().includes(searchTerm) ||
        recipe.author.toLowerCase().includes(searchTerm) ||
        recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm))
    );

    displayRecipes(filteredRecipes);
    
    // Show search results count
    if (filteredRecipes.length > 0) {
        showNotification(`Found ${filteredRecipes.length} recipe${filteredRecipes.length === 1 ? '' : 's'} matching "${searchTerm}"`);
    }
}

// Show recipe details in modal
function showRecipeDetails(recipe) {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    
    // Create modal content
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    
    modalContent.innerHTML = `
        <button class="modal-close" onclick="closeModal(this)">&times;</button>
        
        <div class="modal-header">
            <div class="modal-icon">${recipe.icon}</div>
            <h2>${recipe.name}</h2>
            <div class="modal-meta">
                <span>⏱️ ${recipe.cookTime} min</span>
                <span>📊 ${recipe.difficulty}</span>
                <span>👤 ${recipe.author}</span>
                <span>🍽️ ${recipe.category}</span>
            </div>
        </div>
        
        <div class="modal-section">
            <p style="color: #666; margin-bottom: 2rem; font-style: italic;">${recipe.description}</p>
        </div>
        
        <div class="modal-section">
            <h3>Ingredients:</h3>
            <ul class="ingredients-list">
                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
        </div>
        
        <div class="modal-section">
            <h3>Instructions:</h3>
            <p class="instructions-text">${recipe.instructions}</p>
        </div>
        
        <div class="modal-section">
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                ${recipe.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;

    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    // Close modal when clicking outside content
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal(modal.querySelector('.modal-close'));
        }
    });

    // Close modal with Escape key
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            closeModal(modal.querySelector('.modal-close'));
            document.removeEventListener('keydown', handleEscape);
        }
    };
    document.addEventListener('keydown', handleEscape);

    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

// Close modal function
function closeModal(closeButton) {
    const modal = closeButton.closest('.modal-overlay');
    if (modal) {
        modal.remove();
        document.body.style.overflow = 'auto';
    }
}

// Show notification function
function showNotification(message) {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4caf50;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 10000;
        font-weight: 500;
        max-width: 300px;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// Clear search function
function clearSearch() {
    document.getElementById('searchInput').value = '';
    displayRecipes(recipes);
}

// Filter recipes by category
function filterByCategory(category) {
    const filteredRecipes = recipes.filter(recipe => 
        recipe.category.toLowerCase() === category.toLowerCase()
    );
    displayRecipes(filteredRecipes);
    showNotification(`Showing ${category} recipes`);
}

// Filter recipes by difficulty
function filterByDifficulty(difficulty) {
    const filteredRecipes = recipes.filter(recipe => 
        recipe.difficulty.toLowerCase() === difficulty.toLowerCase()
    );
    displayRecipes(filteredRecipes);
    showNotification(`Showing ${difficulty} recipes`);
}

// Sort recipes function
function sortRecipes(sortBy) {
    let sortedRecipes = [...recipes];
    
    switch(sortBy) {
        case 'name':
            sortedRecipes.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'cookTime':
            sortedRecipes.sort((a, b) => a.cookTime - b.cookTime);
            break;
        case 'difficulty':
            const difficultyOrder = { 'Easy': 1, 'Medium': 2, 'Hard': 3 };
            sortedRecipes.sort((a, b) => difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]);
            break;
        case 'newest':
            sortedRecipes.sort((a, b) => b.id - a.id);
            break;
        default:
            break;
    }
    
    displayRecipes(sortedRecipes);
}

// Export recipes as JSON (for backup/sharing)
function exportRecipes() {
    const dataStr = JSON.stringify(recipes, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = 'recipe_haven_backup.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showNotification('Recipes exported successfully!');
}

// Utility function to get recipe by ID
function getRecipeById(id) {
    return recipes.find(recipe => recipe.id === id);
}

// Utility function to delete recipe
function deleteRecipe(id) {
    const recipeIndex = recipes.findIndex(recipe => recipe.id === id);
    if (recipeIndex > -1) {
        const recipeName = recipes[recipeIndex].name;
        recipes.splice(recipeIndex, 1);
        displayRecipes(recipes);
        showNotification(`"${recipeName}" deleted successfully`);
    }
}

// Add recipe to favorites (using local storage alternative - session storage)
function toggleFavorite(recipeId) {
    // Since we can't use localStorage in this environment,
    // we'll use a simple array to track favorites for the session
    if (!window.favoriteRecipes) {
        window.favoriteRecipes = [];
    }
    
    const index = window.favoriteRecipes.indexOf(recipeId);
    if (index > -1) {
        window.favoriteRecipes.splice(index, 1);
        showNotification('Removed from favorites');
    } else {
        window.favoriteRecipes.push(recipeId);
        showNotification('Added to favorites');
    }
}
