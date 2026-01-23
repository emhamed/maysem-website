// Reviews data - embedded directly to avoid fetch/CORS issues
const reviewsData = [
    {
        "rating": 5,
        "text": "I've been attending the clinic for Lemon Bottle injections with Dr Maysem, and I've seen a huge difference already. From start to finish, the treatment has been exceptional — pre-treatment, during, and aftercare have all been handled with the highest level of professionalism and care. Dr Maysem has always given me clear, honest advice, including small but effective changes I could make to my diet and lifestyle. These changes have worked really well alongside the Lemon Bottle injections, and I've noticed my weight going down at a healthy, reasonable pace. I'm genuinely so happy with my results and feel well looked after every step of the way. Dr Maysem is incredibly knowledgeable, gentle, and truly cares about both your health and your comfort, which makes such a difference.",
        "author": "Sanjida Akther",
        "date": "a month ago"
    },
    {
        "rating": 5,
        "text": "I've visited Maysem twice now and I honestly couldn't be happier with my results. She is incredibly knowledgeable, gentle and genuinely cares about your skin and your comfort. I've done skin booster, filler, botox and microneedling with her, and every treatment has been amazing! Super natural, glowing results without looking overdone. She takes the time to explain everything and makes you feel relaxed. My skin looks smoother, more hydrated and lifted, and I trust her completely. I 100% recommend Maysem if you want beautiful, natural results and a practitioner who truly knows what she's doing.",
        "author": "Marcia Lombardi",
        "date": "2 months ago"
    },
    {
        "rating": 5,
        "text": "I had such a fantastic experience with Maysem at Aesthetic Pharmacist. From the moment I arrived, she made me feel so comfortable and at ease with her warm and professional approach. Maysem is incredibly knowledgeable and took the time to explain everything clearly, answering all my questions with patience and care. Her attention to detail is outstanding, and it's clear she genuinely cares about achieving the best results for her clients. I left feeling confident, reassured, and very well looked after. If there are any issues, she will always answer questions at the end of the phone or welcome her patients to come back & see her. I highly recommend Maysem to anyone considering aesthetic treatments—she is truly exceptional, kind & caring, professional & just brilliant at what she does.",
        "author": "Fatimaezzahra Bouraouda",
        "date": "3 months ago"
    },
    {
        "rating": 5,
        "text": "I recently had a microneedling with exosomes treatment on my face with Maysem and honestly I was a bit scared at first but it went amazing!! Maysem is not only very pretty but also incredibly kind, gentle, patient, intelligent and professional. She really takes her time to make sure you feel comfortable and to explain everything in detail. I truly admire her confidence and passion for what she does you can clearly feel that she genuinely cares about her clients. Yes it was a bit painful but totally worth it and for someone who is very scared of blood and needle I did well and she was very kind and patient! The whole experience went so smoothly and I absolutely loved it. I 100% recommend her and will definitely be coming back.",
        "author": "Noomane Mrf",
        "date": "2 months ago"
    },
    {
        "rating": 5,
        "text": "I highly recommend Maysem's services based on her vast experience and honest approach. The treatments that I've had done by Maysem were performed with deft and skill. I appreciate her honesty when it came to what treatments are best for my needs and my desired results, as well as her professionalism and deep knowledge on the treatments she offers. She is very personable and empathetic, particularly when I was undergoing treatments. I am very satisfied with her services, and will definitely come back to her in the future.",
        "author": "Baneen Salem",
        "date": "3 months ago"
    },
    {
        "rating": 5,
        "text": "Maisam made me feel incredibly comfortable throughout the whole process and talked me through everything. I had polynucleotides under my eyes and my cheeks, and chin/jaw augmentation to try and hide my double chin. Maisam understood my skin immediately and covered all my concerns, great work. I'm so pleased with the results, thank you so much!!",
        "author": "Kate Loader",
        "date": "3 months ago"
    },
    {
        "rating": 5,
        "text": "I had the absolute pleasure of being treated by Maysem and can't recommend her enough! I came in for a polynucleotide under eye treatment, skin booster, and microneedling, and she made the whole experience exceptional. She explained everything clearly, made sure I was comfortable, and handled each step with such care and precision. My skin is already glowing, smoother, and more hydrated. Beyond the amazing results, Maysem's warm and professional approach made it feel like a self-care treat. If you're thinking of improving your skin, go see her I'll definitely be back!",
        "author": "ATHMAN RAGAD",
        "date": "5 months ago"
    },
    {
        "rating": 5,
        "text": "I had a 5 star experience with Dr. Maysem. I had Botox injections in my trapezius muscles which have been tense and painful for a long time and were giving me strong headaches. She made me feel comfortable since the moment I stepped in the clinic. She was so able with the injections that I didn't feel any pain at all! This is a practitioner I would definitely trust to perform more treatments in the future.",
        "author": "V U",
        "date": "3 months ago"
    },
    {
        "rating": 5,
        "text": "I recently had Profhilo and Microneedling treatments with Maysam and I couldn't be happier with the experience. She was very professional, gentle, and attentive throughout the whole process, making me feel completely comfortable. To my surprise, the next day I had no redness or irritation at all, and my skin already looked refreshed and glowing. I highly recommend Maysam for anyone considering these treatments her skill and care truly show in the results!!",
        "author": "Rafaella Erotokritou",
        "date": "4 months ago"
    },
    {
        "rating": 5,
        "text": "I recently had a session with Maysem, and I couldn't be happier with my experience! Initially, I was quite nervous about the idea of getting injectables, particularly with something as unique as salmon sperm combined with Botox. However, Maysem's warm and professional demeanor immediately put me at ease. From the moment I walked in, she took the time to explain the procedure in detail, addressing all my concerns and ensuring I felt comfortable every step of the way. Her gentle approach and reassuring words made all the difference, allowing me to relax and trust her expertise. The results have been fantastic! I noticed a significant improvement in my skin's texture and appearance, and I couldn't be more thrilled. If you're considering any treatments, I highly recommend Maysem for her skill and ability to create a calming atmosphere.",
        "author": "Gallal Muflahi",
        "date": "6 months ago"
    },
    {
        "rating": 5,
        "text": "I had an amazing experience with Dr. Maysem for my Botox treatment! She was incredibly professional, explained everything clearly, and made me feel completely at ease. The results were subtle yet effective — just what I wanted. I feel so much more confident now. Highly recommend her to anyone considering Botox!",
        "author": "Tabassum Bashir",
        "date": "6 months ago"
    },
    {
        "rating": 5,
        "text": "I had an excellent experience at Maysem London. I had wrinkle removal surgery here last month, and I was extremely satisfied with the entire process and the results. The location is also very convenient, easy to find and accessible by public transport. The clinic is clean and bright, with a warm and inviting retro-style decor that makes you feel relaxed as soon as you walk in. The service was impeccable—from consultation to the procedure, every staff member was highly professional and patient, answering all my questions in detail. I had wrinkle removal injections, and the results were natural and noticeable. They even kindly gave me a free touch-up to ensure the best results. Overall, from the environment and service to the results, it deserves a five-star recommendation. Highly recommended!",
        "author": "Shawn Huang",
        "date": "a day ago"
    },
    {
        "rating": 5,
        "text": "I had lip and chin fillers, botox, salmon DNA skin booster with Maysem, and she made the whole experience so comfortable. She's gentle, sweet, and really professional, explaining everything and answering all my questions. I loved that she gave clear aftercare instructions and even checked in on my healing progress. The results look amazing, and after our consultation, she understood exactly what I wanted and delivered it perfectly.",
        "author": "marilena_p",
        "date": "5 months ago"
    },
    {
        "rating": 5,
        "text": "Incredibly smooth service, exceptionally kind, honest and considerate practitioner and nurse. This is someone who will speak to you sincerely and not guide or support you with treatments or aesthetics if she truly doesn't see your need for it. Highly recommend!!",
        "author": "Zara Sadia",
        "date": "2 weeks ago"
    },
    {
        "rating": 5,
        "text": "So sweet and kind!! Made me feel comfortable and safe, I genuinely would not trust anyone w my face but dr maysem is very good at what she does and I was so happy with the results!!",
        "author": "Lily",
        "date": "2 weeks ago"
    }
];

// Load and display reviews
function loadReviews() {
    const reviewsScroll = document.querySelector('.reviews-scroll');
    if (!reviewsScroll) {
        console.error('Reviews scroll container not found');
        return;
    }
    
    if (!reviewsData || reviewsData.length === 0) {
        reviewsScroll.innerHTML = '<p style="text-align: center; padding: 40px; color: var(--text-color);">No reviews available at this time.</p>';
        return;
    }
    
    reviewsScroll.innerHTML = '';
    
    reviewsData.forEach(review => {
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
}

// Auto-scroll reviews horizontally
function startAutoScroll() {
    const reviewsScrollContainer = document.querySelector('.reviews-scroll-container');
    const reviewsScroll = document.querySelector('.reviews-scroll');
    
    if (!reviewsScrollContainer || !reviewsScroll) return;
    
    let scrollSpeed = 0.3; // pixels per frame - slower speed
    let isScrolling = true;
    let animationFrameId;
    
    function scroll() {
        if (isScrolling) {
            const maxScroll = reviewsScroll.scrollWidth - reviewsScrollContainer.clientWidth;
            const currentScroll = reviewsScrollContainer.scrollLeft;
            
            if (currentScroll >= maxScroll) {
                // Reset to beginning when reaching the end
                reviewsScrollContainer.scrollLeft = 0;
            } else {
                reviewsScrollContainer.scrollLeft += scrollSpeed;
            }
        }
        animationFrameId = requestAnimationFrame(scroll);
    }
    
    // Pause scrolling on hover
    reviewsScrollContainer.addEventListener('mouseenter', () => {
        isScrolling = false;
    });
    
    reviewsScrollContainer.addEventListener('mouseleave', () => {
        isScrolling = true;
    });
    
    // Pause scrolling on touch (mobile)
    reviewsScrollContainer.addEventListener('touchstart', () => {
        isScrolling = false;
    });
    
    reviewsScrollContainer.addEventListener('touchend', () => {
        // Resume after a delay
        setTimeout(() => {
            isScrolling = true;
        }, 2000);
    });
    
    // Start scrolling
    scroll();
}

// Load reviews when page loads
document.addEventListener('DOMContentLoaded', () => {
    loadReviews();
    // Start auto-scroll after reviews are loaded
    setTimeout(startAutoScroll, 500);
});
