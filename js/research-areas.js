// Research Areas Data
const researchData = {
    flexible: {
        title: 'Flexible Materials',
        color: 'color-purple',
        description: 'Advanced hydrogel materials with tunable mechanical and chemical properties designed for therapeutic applications and enhanced wound healing.',
        features: [
            'Methacrylated gelatin with customizable crosslinking for precise mechanical property control',
            'Hydrogel-loaded drug delivery systems enabling controlled and sustained release',
            'Biocompatible and biodegradable materials for safe tissue integration',
            'Enhanced wound healing through optimized moisture balance and therapeutic agent delivery',
            'Tunable swelling properties for different wound types and stages'
        ]
    },
    diagnostic: {
        title: 'Point-of-Care Diagnostic',
        color: 'color-green',
        description: 'Real-time, non-invasive monitoring systems for assessing wound status through advanced fluorescence-based sensing technologies.',
        features: [
            'pH-sensitive fluorophore microparticles for accurate wound environment detection',
            'Calcium alginate hydrogel matrix providing biocompatible sensor platform',
            'Fluorescence detection system for visual pH status indication',
            'Discrimination capability between acidic (infected) and alkaline (healing) wounds',
            'Rapid response time for immediate clinical decision-making'
        ]
    },
    wearable: {
        title: 'Wearable Devices',
        color: 'color-yellow',
        description: 'Seamless integration of flexible electronics with everyday textiles for continuous, comfortable health monitoring.',
        features: [
            'Field-effect transistor (FTE) sensors on daily cloth substrates',
            'Silver fabric electrodes for enhanced electrical conductivity and comfort',
            'Levitating microneedles (LevMN) for minimally invasive biofluid sampling',
            'Bacterial infection detection through biochemical sensing',
            'Machine washable and durable construction for long-term use'
        ]
    },
    smart: {
        title: 'Smart Patches',
        color: 'color-pink',
        description: 'Next-generation wireless wound monitoring patches integrating advanced biosensing with modern communication technologies.',
        features: [
            'WINDOW (Wireless INtegrated Device for wOund Monitoring) system architecture',
            'NFC module enabling seamless smartphone connectivity and data transfer',
            'Biosensing module with interdigitated electrodes for electrochemical detection',
            'DNA-based hydrogel sensors on silicone micropillars for enhanced sensitivity',
            'Real-time data analytics and cloud-based health monitoring dashboard'
        ]
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initResearchAreas();
});

function initResearchAreas() {
    const researchItems = document.querySelectorAll('.research-item');
    const modal = document.getElementById('researchModal');
    const closeBtn = document.getElementById('closeModal');

    // Add click event to research items
    researchItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const researchType = this.getAttribute('data-research');
            openModal(researchType);
        });
    });

    // Close button
    closeBtn.addEventListener('click', closeModal);

    // Close on outside click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

function openModal(type) {
    const data = researchData[type];
    const modalBody = document.getElementById('modalBody');
    const modal = document.getElementById('researchModal');
    
    // Build features HTML
    let featuresHTML = data.features.map(feature => 
        `<li class="feature-item ${data.color}">${feature}</li>`
    ).join('');
    
    // Set modal content
    modalBody.innerHTML = `
        <h2 class="modal-title ${data.color}">${data.title}</h2>
        <p class="modal-description">${data.description}</p>
        <h3 class="features-title">Key Features & Technologies</h3>
        <ul class="feature-list">${featuresHTML}</ul>
    `;
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('researchModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}