// Load and display reviews from JSON file
async function loadReviews() {
    try {
        // Try multiple path variations to ensure it works
        let response;
        try {
            response = await fetch('./data/reviews.json');
        } catch (e) {
            response = await fetch('data/reviews.json');
        }
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const reviews = await response.json();
        
        const reviewsScroll = document.querySelector('.reviews-scroll');
        if (!reviewsScroll) {
            console.error('Reviews scroll container not found');
            return;
        }
        
        if (!reviews || reviews.length === 0) {
            reviewsScroll.innerHTML = '<p style="text-align: center; padding: 40px; color: var(--text-color);">No reviews available at this time.</p>';
            return;
        }
        
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
        // Show error message with more details
        const reviewsScroll = document.querySelector('.reviews-scroll');
        if (reviewsScroll) {
            reviewsScroll.innerHTML = '<p style="text-align: center; padding: 40px; color: var(--text-color);">Unable to load reviews. Please check the console for details.</p>';
        }
    }
}

// Load reviews when page loads
document.addEventListener('DOMContentLoaded', loadReviews);

