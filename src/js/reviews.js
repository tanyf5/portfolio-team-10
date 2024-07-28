async function fetchReviews() {
    const reviewsContainer = document.getElementById('reviews');
    try {
        const response = await fetch('/api/reviews');
        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }
        const reviews = await response.json();
        displayReviews(reviews);
    } catch (error) {
        console.error('Error fetching reviews:', error);
        showError();
    }
}


function displayReviews(reviews) {
    const reviewsContainer = document.getElementById('reviews');
    reviewsContainer.innerHTML = ''; 
    if (reviews.length === 0) {
        reviewsContainer.innerHTML = '<p>No reviews found.</p>';
        return;
    }
    reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.className = 'review';
        reviewElement.innerHTML = `
            ${user.photo}</s
            <h3>${user.name}</h3>
            <p>${review.content}</p>
        `;
        reviewsContainer.appendChild(reviewElement);
    });
}


function showError() {
    const reviewsContainer = document.getElementById('reviews');
    reviewsContainer.innerHTML = '<p>Unable to load reviews. Please try again later.</p>';
}

function initializeReviews() {
    fetchReviews();
}

export { initializeReviews };