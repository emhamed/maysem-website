// Treatment Descriptions Handler
let treatmentsData = {};

// Load treatment descriptions
async function loadTreatmentDescriptions() {
    try {
        const response = await fetch('data/treatments.json');
        treatmentsData = await response.json();
        initializeTreatmentClicks();
    } catch (error) {
        console.error('Error loading treatment descriptions:', error);
    }
}

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
document.addEventListener('DOMContentLoaded', loadTreatmentDescriptions);

