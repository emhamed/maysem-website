// Load and display reviews from JSON file
async function loadReviews() {
    try {
        const response = await fetch('data/reviews.json');
        const reviews = await response.json();
        
        const reviewsScroll = document.querySelector('.reviews-scroll');
        if (!reviewsScroll) return;
        
        reviewsScroll.innerHTML = '';
        
        reviews.forEach(review => {
            const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
            const reviewCard = document.createElement('div');
            reviewCard.className = 'review-card';
            reviewCard.innerHTML = `
                <div class="review-header">
                    <div class="review-stars">${stars}</div>
                    <div class="review-rating">${review.rating}.0</div>
                </div>
                <p class="review-text">"${review.text}"</p>
                <p class="review-author">- ${review.author}</p>
            `;
            reviewsScroll.appendChild(reviewCard);
        });
    } catch (error) {
        console.error('Error loading reviews:', error);
        // If reviews.json doesn't exist or has errors, show message
        const reviewsScroll = document.querySelector('.reviews-scroll');
        if (reviewsScroll) {
            reviewsScroll.innerHTML = '<p style="text-align: center; padding: 40px; color: var(--text-color);">Reviews will be displayed here. Please add reviews to data/reviews.json</p>';
        }
    }
}

// Load reviews when page loads
document.addEventListener('DOMContentLoaded', loadReviews);

