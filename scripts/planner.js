
const backToTopButton = document.getElementById('back-to-top');


window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

backToTopButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});

document.getElementById('planner-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const mealTime = document.getElementById('meal-time').value;
    const mealType = document.getElementById('meal-type').value;

    let suggestions = [];

    if (mealTime === 'breakfast' && mealType === 'veg') {
        suggestions = ['Vegetable Omelette', 'Smoothie Bowl', 'Avocado Toast'];
    } else if (mealTime === 'breakfast' && mealType === 'non-veg') {
        suggestions = ['Bacon and Eggs', 'Breakfast Burrito', 'Smoked Salmon Bagel'];
    } else if (mealTime === 'lunch' && mealType === 'veg') {
        suggestions = ['Quinoa Salad', 'Vegetable Stir Fry', 'Caprese Sandwich'];
    } else if (mealTime === 'lunch' && mealType === 'non-veg') {
        suggestions = ['Chicken Caesar Salad', 'Tuna Wrap', 'Grilled Chicken Sandwich'];
    } else if (mealTime === 'dinner' && mealType === 'veg') {
        suggestions = ['Stuffed Bell Peppers', 'Pasta Primavera', 'Vegetable Curry'];
    } else if (mealTime === 'dinner' && mealType === 'non-veg') {
        suggestions = ['Grilled Salmon', 'Chicken Alfredo', 'Steak with Vegetables'];
    } else if (mealTime === 'snacks' && mealType === 'veg') {
        suggestions = ['Hummus and Veggies', 'Fruit Salad', 'Yogurt Parfait'];
    } else if (mealTime === 'snacks' && mealType === 'non-veg') {
        suggestions = ['Chicken Skewers', 'Shrimp Cocktail', 'Beef Jerky'];
    }

    const suggestionsBody = document.getElementById('suggestions-body');
    suggestionsBody.innerHTML = '';

    suggestions.forEach(suggestion => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${mealTime.charAt(0).toUpperCase() + mealTime.slice(1)}</td>
                         <td>${mealType.charAt(0).toUpperCase() + mealType.slice(1).replace('-', ' ')}</td>
                         <td>${suggestion}</td>`;
        suggestionsBody.appendChild(row);
    });

    document.getElementById('suggestions').style.display = 'block';
});

document.getElementById('clear-button').addEventListener('click', function() {

    document.getElementById('planner-form').reset();
    
   
    document.getElementById('suggestions').style.display = 'none';
   
    document.getElementById('suggestions-body').innerHTML = '';
});