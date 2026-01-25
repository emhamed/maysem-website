// Treatment Descriptions Handler
const treatmentsData = {
    "anti-wrinkle": {
        "ONE AREA": {
            "description": "One-area injectable treatment targets a specific facial muscle group to reduce dynamic lines and improve skin smoothness with controlled, natural results."
        },
        "TWO AREAS": {
            "description": "A focused injectable procedure treating two designated facial areas to temporarily relax targeted muscles and soften expression lines. Common combinations include crows feet, forehead lines, and frown lines."
        },
        "THREE AREAS": {
            "description": "A comprehensive anti-wrinkle treatment targeting three facial areas simultaneously for a more complete rejuvenation. This treatment addresses multiple areas of concern to create a harmonious, natural-looking result."
        },
        "JAWLINE SLIMMING (masseter)": {
            "description": "Jawline slimming treatment uses anti-wrinkle injections to relax the masseter muscles, creating a more refined and contoured jawline. Ideal for those seeking a softer, more feminine facial shape."
        },
        "NOSE SLIMMING WITH BOTOX": {
            "description": "Non-surgical nose slimming using anti-wrinkle injections to relax specific nasal muscles, creating the appearance of a narrower, more refined nose without surgery."
        },
        "HYPERHIDROSIS (excessive sweating)": {
            "description": "Treatment for excessive sweating (hyperhidrosis) using anti-wrinkle injections to block nerve signals that trigger sweat production. Effective for underarms, palms, and feet."
        },
        "DIMPLE CHIN": {
            "description": "Anti-wrinkle injections to create or enhance a dimple in the chin, adding a subtle, attractive feature to your facial appearance."
        },
        "CHEMICAL BROW LIFT": {
            "description": "A non-surgical brow lift using anti-wrinkle injections to lift and shape the eyebrows, creating a more open and youthful eye area."
        },
        "LIP FLIP": {
            "description": "A subtle treatment that uses anti-wrinkle injections to gently flip the upper lip outward, creating the appearance of fuller lips without fillers."
        },
        "PERIORAL LINES": {
            "description": "Treatment for fine lines around the mouth (smoker's lines) using anti-wrinkle injections to smooth and soften the appearance of perioral wrinkles."
        },
        "DOWNTURNED SMILE": {
            "description": "Anti-wrinkle injections to lift the corners of the mouth, correcting a downturned smile and creating a more positive, youthful expression."
        },
        "GUMMY SMILE": {
            "description": "Treatment to reduce excessive gum visibility when smiling by relaxing the upper lip muscles, creating a more balanced and aesthetically pleasing smile."
        },
        "BUNNY LINES": {
            "description": "Treatment for bunny lines (wrinkles on the sides of the nose) using anti-wrinkle injections to smooth these fine lines and create a more refined appearance."
        },
        "NON-SURGICAL NECK LIFT": {
            "description": "A comprehensive non-surgical treatment combining various techniques to lift, tighten, and rejuvenate the neck area. This treatment addresses sagging skin, horizontal lines, and loss of definition for a more youthful neck appearance."
        }
    },
    "dermal-fillers": {
        "LIPS": {
            "description": "Lip augmentation using dermal fillers to enhance volume, shape, and definition. Available in 0.5ml for subtle enhancement or 1ml for more noticeable volume. Creates natural-looking, plump lips with improved symmetry."
        },
        "CHEEK AUGMENTATION": {
            "description": "Cheek enhancement using dermal fillers to restore volume, lift sagging skin, and create more defined cheekbones. Available in 1ml or 2ml depending on desired results. Provides a natural, youthful lift to the mid-face."
        },
        "JAWLINE": {
            "description": "Jawline contouring and definition using dermal fillers to create a sharper, more defined jawline. Available in 1ml or 2ml. Enhances facial structure and creates a more sculpted appearance."
        },
        "TEAR TROUGH": {
            "description": "Under-eye filler treatment to reduce dark circles, hollows, and fine lines. This delicate procedure restores volume to the tear trough area, creating a refreshed, well-rested appearance."
        },
        "NONSURGICAL RHINOPLASTY": {
            "description": "Non-surgical nose reshaping using dermal fillers to smooth bumps, lift the tip, or straighten the bridge. A non-invasive alternative to surgical rhinoplasty with immediate results and minimal downtime."
        },
        "TEMPLE FILLER": {
            "description": "Temple filler treatment restores volume to the temple area, addressing hollowing and creating a more youthful, balanced facial contour. This treatment can help lift the brow area and improve overall facial harmony."
        },
        "NASOLABIAL LINES": {
            "description": "Treatment for nasolabial folds (lines running from the nose to the corners of the mouth) using dermal fillers to restore volume and smooth these prominent facial lines for a more youthful appearance."
        },
        "MARIONETTE LINES": {
            "description": "Treatment for marionette lines (lines extending downward from the corners of the mouth) using dermal fillers to restore volume and lift the lower face, creating a more positive and youthful expression."
        },
        "ORAL LINES": {
            "description": "Treatment for oral lines (fine lines around the mouth area) using dermal fillers to smooth and soften these lines, creating a more refined and youthful appearance around the mouth."
        },
        "DISSOLVING FILLER": {
            "description": "Treatment to dissolve unwanted or misplaced dermal fillers using hyaluronidase. This procedure can correct asymmetry, overfilling, or complications, restoring natural facial contours."
        },
        "BELOTERO NECK REJUVENATION/NECK LINES TREATMENT": {
            "description": "Advanced Belotero treatment to soften visible neck lines and enhance skin elasticity. This treatment addresses horizontal neck lines (necklace lines) for a smoother, more youthful neck appearance."
        }
    },
    "skin-boosters": {
        "SEVENTY HYAL SKIN BOOSTER": {
            "description": "Seventy Hyal is a premium hyaluronic acid skin booster that deeply hydrates and plumps the skin. It improves skin texture, elasticity, and radiance by delivering high-quality hyaluronic acid directly into the dermis."
        },
        "PROFHILO": {
            "description": "Profhilo is an innovative skin booster treatment that uses high-concentration hyaluronic acid to improve skin quality, hydration, and elasticity. Known for its bio-remodeling properties, it stimulates collagen and elastin production for naturally glowing skin."
        },
        "LENISNA": {
            "description": "Lenisna is a polynucleotide-based skin booster that promotes skin regeneration and repair. It improves skin texture, reduces fine lines, and enhances overall skin quality through advanced regenerative technology."
        },
        "JUVELOOK": {
            "description": "Juvelook is a polynucleotide skin booster that stimulates collagen production and improves skin elasticity. It provides deep hydration and helps reduce the appearance of fine lines and wrinkles for a more youthful complexion."
        },
        "SCULPTRA": {
            "description": "Sculptra is a biostimulator that works gradually to stimulate your body's own collagen production. It provides natural-looking volume restoration and skin tightening effects that can last up to two years."
        },
        "PRP": {
            "description": "Platelet-Rich Plasma (PRP) therapy uses your own blood's growth factors to stimulate collagen production and skin regeneration. This natural treatment improves skin texture, tone, and overall quality with minimal risk."
        },
        "SALMON DNA": {
            "description": "Salmon DNA (Polynucleotides) is an advanced regenerative treatment that promotes skin repair and rejuvenation. It improves skin elasticity, reduces fine lines, and enhances overall skin quality through natural DNA-based technology."
        },
        "SKIN BOOSTER LIP HYDRATION": {
            "description": "Specialized skin booster treatment for lip hydration and enhancement. This treatment improves lip texture, adds subtle volume, and provides long-lasting hydration for soft, plump, and healthy-looking lips."
        },
        "NCTF": {
            "description": "NCTF (New Cellular Treatment Factor) is an advanced mesotherapy treatment containing a complex blend of vitamins, amino acids, coenzymes, and hyaluronic acid. This treatment deeply hydrates the skin, improves elasticity, reduces fine lines, and promotes overall skin rejuvenation for a radiant, youthful complexion."
        },
        "JALUPRO": {
            "description": "Jalupro is an innovative skin rejuvenation treatment containing amino acids, peptides, and hyaluronic acid. This mesotherapy solution stimulates collagen and elastin production, improves skin texture and firmness, and provides deep hydration for a more youthful and revitalized appearance."
        }
    },
    "advanced-treatments": {
        "MICRONEEDLING WITH EXOSOMES": {
            "description": "Microneedling with exosomes is an advanced skin rejuvenation treatment that combines micro-injuries with exosome therapy. This powerful combination supports collagen production, improves skin texture, reduces fine lines and scars, and enhances overall skin vitality and radiance."
        },
        "MICRONEEDLING WITH EXOSOMES FOR HAIR": {
            "description": "Microneedling with exosomes for hair is a specialized treatment that combines microneedling with exosome therapy to stimulate hair growth, improve scalp health, and enhance hair density. This treatment promotes follicle regeneration and strengthens existing hair."
        },
        "CHEMICAL PEELS": {
            "description": "Chemical peels use acid solutions to exfoliate and rejuvenate the skin. They improve skin texture, reduce fine lines, fade hyperpigmentation, and treat acne. Available in various strengths to suit different skin types and concerns."
        }
    },
    "fat-dissolving": {
        "LEMON BOTTLE FAT DISSOLVING FACE/DOUBLE CHIN": {
            "description": "Lemon Bottle fat dissolving treatment helps break down unwanted fat in the face and under the chin, enhancing natural facial contours. This innovative formula targets stubborn fat deposits for a more defined jawline and facial structure."
        },
        "AQUALYX FAT DISSOLVING": {
            "description": "Aqualyx is a fat-dissolving injectable treatment that breaks down fat cells in targeted areas. It's effective for reducing localized fat deposits in the face, creating a more contoured and defined appearance."
        },
        "AQUALYX FAT DISSOLVING FOR BODY": {
            "description": "Aqualyx body treatment targets stubborn fat deposits in various body areas. Available for 1 or 2 areas, this treatment helps reduce localized fat for a more sculpted body contour without surgery."
        },
        "LEMON BOTTLE FAT DISSOLVING FOR BODY": {
            "description": "Lemon Bottle fat dissolving for body areas targets stubborn fat deposits to create a more contoured physique. Available for 1 or 2 areas, this treatment helps reduce localized fat without invasive procedures."
        }
    },
    "vitamin-injections": {
        "B12 INJECTIONS": {
            "description": "Vitamin B12 injections provide a direct boost of this essential vitamin, which supports energy production, red blood cell formation, and nervous system health. Ideal for those with B12 deficiency or seeking an energy boost."
        },
        "BIOTIN INJECTIONS": {
            "description": "Biotin (Vitamin B7) injections support healthy hair, skin, and nails. This treatment promotes hair growth, strengthens nails, and improves skin health by delivering biotin directly into the bloodstream for maximum absorption."
        }
    }
};

// Initialize click handlers for all treatments
function initializeTreatmentClicks() {
    // Handle treatment options in grid
    document.querySelectorAll('.treatment-option').forEach(option => {
        option.addEventListener('click', function() {
            const treatmentName = this.querySelector('h4')?.textContent.trim();
            if (treatmentName) {
                showTreatmentDescription(treatmentName);
            }
        });
    });

    // Handle area options
    document.querySelectorAll('.area-option').forEach(option => {
        option.addEventListener('click', function() {
            const treatmentName = this.querySelector('h4')?.textContent.trim();
            if (treatmentName) {
                showTreatmentDescription(treatmentName);
            }
        });
    });

    // Handle filler options
    document.querySelectorAll('.filler-option').forEach(option => {
        option.addEventListener('click', function() {
            const treatmentName = this.querySelector('h4')?.textContent.trim();
            if (treatmentName) {
                showTreatmentDescription(treatmentName);
            }
        });
    });

    // Handle treatment detail cards (make all clickable for modal with full description)
    document.querySelectorAll('.treatment-detail-card').forEach(card => {
        card.addEventListener('click', function() {
            const treatmentName = this.querySelector('h4')?.textContent.trim();
            if (treatmentName) {
                showTreatmentDescription(treatmentName);
            }
        });
    });
}

// Find treatment description in data
function findTreatmentDescription(treatmentName) {
    // Search through all categories
    for (const category in treatmentsData) {
        if (treatmentsData[category][treatmentName]) {
            return treatmentsData[category][treatmentName].description;
        }
    }
    return null;
}

// Show treatment description in modal
function showTreatmentDescription(treatmentName) {
    const description = findTreatmentDescription(treatmentName);
    
    if (!description) {
        // If no description found, don't show modal
        return;
    }

    // Create or get modal
    let modal = document.getElementById('treatment-modal');
    if (!modal) {
        modal = createModal();
    }

    // Update modal content
    const modalTitle = modal.querySelector('.modal-title');
    const modalDescription = modal.querySelector('.modal-description');
    
    modalTitle.textContent = treatmentName;
    modalDescription.textContent = description;

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Create modal structure
function createModal() {
    const modal = document.createElement('div');
    modal.id = 'treatment-modal';
    modal.className = 'treatment-modal';
    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <button class="modal-close" aria-label="Close">&times;</button>
            <h3 class="modal-title"></h3>
            <p class="modal-description"></p>
            <a href="https://wa.me/447502200543" class="btn-whatsapp modal-cta" target="_blank">Book Consultation or Treatment</a>
        </div>
    `;
    document.body.appendChild(modal);

    // Close modal handlers
    const closeBtn = modal.querySelector('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');
    
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    return modal;
}

// Close modal
function closeModal() {
    const modal = document.getElementById('treatment-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initializeTreatmentClicks();
    startTreatmentsSlideshow();
});

function startTreatmentsSlideshow() {
    const slides = Array.from(document.querySelectorAll('.treatment-slide'));
    if (!slides.length) return;

    let currentIndex = slides.findIndex(slide => slide.classList.contains('is-active'));
    if (currentIndex === -1) {
        currentIndex = 0;
        slides[0].classList.add('is-active');
    }

    const showSlide = (index) => {
        // Remove active class from all slides first
        slides.forEach(slide => slide.classList.remove('is-active'));
        
        // Add active class to current slide after a brief delay for smooth transition
        setTimeout(() => {
            slides[index].classList.add('is-active');
        }, 50);
    };

    // Change slide every 5 seconds (5000ms) to allow fade transition to complete
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }, 5000);
}

