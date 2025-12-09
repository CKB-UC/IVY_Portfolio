// Data
const skills = [
    { name: "Adobe InDesign", icon: "indesign" },
    { name: "Adobe Illustrator", icon: "illustrator" },
    { name: "Adobe Photoshop", icon: "photoshop" },
    { name: "WordsFlow Pro", icon: "workflow" },
    { name: "Microsoft Word", icon: "word" },
    { name: "Microsoft Excel", icon: "excel" },
    { name: "Microsoft PowerPoint", icon: "powerpoint" }
];

const experiences = [
    {
        title: "Graphic Designer",
        company: "Modon, Abu Dhabi",
        period: "2025 - Present",
        description: "Shaping and maintaining the visual identity of the organization, ensuring all documents, reports, proposals, and presentations consistently reflect Modon's brand image."
    },
    {
        title: "Senior Graphic Designer",
        company: "AECOM Middle East, Abu Dhabi",
        period: "2022 - 2025",
        description: "Collaborated with project leads, developed illustrations and design ideas for templates, finalized reports and proposals, and provided workflow solutions."
    },
    {
        title: "Team Leader - Proposals",
        company: "GHD Global Pty Ltd, Abu Dhabi",
        period: "2016 - 2022",
        description: "Led proposal team, streamlined processes, trained coordinators in automation tools, and ensured high-quality document production."
    },
    {
        title: "Senior Proposals Designer",
        company: "Kier Dubai & Abu Dhabi",
        period: "2013 - 2016",
        description: "Designed and produced proposals for major construction projects across the UAE."
    }
];

// Company projects 
const companyProjects = [
    { 
        name: "Prince Mohammed Bin Salman Royal Reserve", 
        client: "AECOM", 
        year: "2024", 
        type: "Project",
        thumbnail: "images/company/PMBSRR cover.jpg", // Main thumbnail
        images: [
            "images/company/PMBSRR cover.jpg"
        ]
    },
    { 
        name: "Jeddah Historic Core", 
        client: "AECOM", 
        year: "2024", 
        type: "Project",
        thumbnail: "images/company/JHC Cover.jpg",
        images: [
            "images/company/JHC Cover.jpg"
        ]
    },
    { 
        name: "Umm Suqeim Island CMP", 
        client: "AECOM", 
        year: "2024", 
        type: "Project",
        thumbnail: "images/company/USI cover.jpg",
        images: [
            "images/company/USI cover.jpg"
        ]
    },
    { 
        name: "Dubai Hills MP", 
        client: "AECOM", 
        year: "2024", 
        type: "Project",
        thumbnail: "images/company/dubai-hills-cover.jpg",
        images: [
            "images/company/dubai-hills-1.jpg",
            "images/company/dubai-hills-2.jpg",
            "images/company/dubai-hills-3.jpg"
        ]
    },
    { 
        name: "NEOM Wind Garden", 
        client: "AECOM", 
        year: "2023", 
        type: "Tender",
        thumbnail: "images/company/neom-wind-cover.jpg",
        images: [
            "images/company/neom-wind-1.jpg",
            "images/company/neom-wind-2.jpg"
        ]
    },
    { 
        name: "NEOM Landscapes of The Line", 
        client: "AECOM", 
        year: "2023", 
        type: "Tender",
        thumbnail: "images/company/neom-line-cover.jpg",
        images: [
            "images/company/neom-line-1.jpg",
            "images/company/neom-line-2.jpg"
        ]
    },
    { 
        name: "Yas Island Development Plan", 
        client: "AECOM", 
        year: "2023", 
        type: "Tender",
        thumbnail: "images/company/yas-island-cover.jpg",
        images: [
            "images/company/yas-island-1.jpg",
            "images/company/yas-island-2.jpg"
        ]
    },
    { 
        name: "Client Housing Guidelines", 
        client: "AECOM", 
        year: "2022", 
        type: "Project",
        thumbnail: "images/company/housing-cover.jpg",
        images: [
            "images/company/housing-1.jpg",
            "images/company/housing-2.jpg"
        ]
    }
];

// UPDATED: Personal projects with actual image paths
const personalProjects = [
    { 
        name: "S&A Serge Logo", 
        year: "2024",
        thumbnail: "images/personal/serge-logo-cover.jpg",
        images: [
            "images/personal/serge-logo-1.jpg",
            "images/personal/serge-logo-2.jpg"
        ]
    },
    { 
        name: "Danzek Properties Logo & Marketing", 
        year: "2023",
        thumbnail: "images/personal/danzek-cover.jpg",
        images: [
            "images/personal/danzek-1.jpg",
            "images/personal/danzek-2.jpg"
        ]
    },
    { 
        name: "Civil & Civic Logo & Profile", 
        year: "2023",
        thumbnail: "images/personal/civil-civic-cover.jpg",
        images: [
            "images/personal/civil-civic-1.jpg",
            "images/personal/civil-civic-2.jpg"
        ]
    },
    { 
        name: "Baey Bread & Homeshare Logo", 
        year: "2018",
        thumbnail: "images/personal/baey-bread-cover.jpg",
        images: [
            "images/personal/baey-bread-1.jpg"
        ]
    },
    { 
        name: "MiKonbini Logo & Marketing", 
        year: "2018",
        thumbnail: "images/personal/mikonbini-cover.jpg",
        images: [
            "images/personal/mikonbini-1.jpg",
            "images/personal/mikonbini-2.jpg"
        ]
    }
];

// State
let currentProject = null;
let currentImage = null;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderSkills();
    renderExperiences();
    renderProjects();
    initializeNavigation();
    initializeMobileMenu();
    initializeScrollEffects();
});

// Render Functions
function renderSkills() {
    const container = document.getElementById('skills-container');
    
    const iconLabels = {
        indesign: 'Id',
        illustrator: 'Ai',
        photoshop: 'Ps',
        workflow: 'Wf',
        word: 'W',
        excel: 'X',
        powerpoint: 'P'
    };
    
    skills.forEach(skill => {
        const div = document.createElement('div');
        div.className = 'skill-icon-container';
        div.innerHTML = `
            <div class="skill-icon-adobe">
                <span class="skill-icon-text">${iconLabels[skill.icon]}</span>
            </div>
            <span class="skill-tooltip">${skill.name}</span>
        `;
        container.appendChild(div);
    });
}

function renderExperiences() {
    const container = document.getElementById('experience-container');
    experiences.forEach(exp => {
        const div = document.createElement('div');
        div.className = 'border-l-4 border-black pl-8 pb-8';
        div.innerHTML = `
            <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                    <h3 class="text-2xl font-bold">${exp.title}</h3>
                    <p class="text-lg text-gray-600">${exp.company}</p>
                </div>
                <span class="text-sm text-gray-500 mt-2 md:mt-0 tracking-wider">${exp.period}</span>
            </div>
            <p class="text-gray-700">${exp.description}</p>
        `;
        container.appendChild(div);
    });
}

function renderProjects() {
    renderCompanyProjects();
    renderPersonalProjects();
}

function renderCompanyProjects() {
    const container = document.getElementById('company-projects');
    companyProjects.forEach((project, index) => {
        const card = createProjectCard(project, index, 'company');
        container.appendChild(card);
    });
}

function renderPersonalProjects() {
    const container = document.getElementById('personal-projects');
    personalProjects.forEach((project, index) => {
        const card = createProjectCard(project, index, 'personal');
        container.appendChild(card);
    });
}

// UPDATED: Create project card with actual images
function createProjectCard(project, index, type) {
    const div = document.createElement('div');
    div.className = 'project-card';
    div.onclick = () => openProjectModal(project);
    
    // Use thumbnail or first image as preview
    const previewImage = project.thumbnail || project.images[0];
    
    div.innerHTML = `
        <div class="project-image">
            <img src="${previewImage}" alt="${project.name}" class="w-full h-full object-cover" 
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div style="display:none;" class="w-full h-full flex items-center justify-center">
                <span class="text-gray-400 text-sm">Image not found</span>
            </div>
            <div class="project-overlay">
                <svg class="zoom-icon text-white w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
                </svg>
            </div>
        </div>
        <div class="project-info">
            <h4 class="font-bold mb-2">${project.name}</h4>
            ${project.client ? `
                <div class="flex justify-between text-sm text-gray-600">
                    <span>${project.client}</span>
                    <span>${project.year}</span>
                </div>
                <span class="inline-block mt-2 text-xs border border-black px-2 py-1">
                    ${project.type}
                </span>
            ` : `
                <span class="text-sm text-gray-600">${project.year}</span>
            `}
        </div>
    `;
    
    return div;
}

// UPDATED: Modal with actual images
function openProjectModal(project) {
    currentProject = project;
    const modal = document.getElementById('project-modal');
    const title = document.getElementById('modal-project-title');
    const info = document.getElementById('modal-project-info');
    const grid = document.getElementById('modal-images-grid');
    
    title.textContent = project.name;
    
    if (project.client) {
        info.textContent = `${project.client} • ${project.year}`;
    } else {
        info.textContent = project.year;
    }
    
    // Clear and populate images
    grid.innerHTML = '';
    project.images.forEach((imagePath, index) => {
        const imageDiv = document.createElement('div');
        imageDiv.className = 'gallery-thumbnail';
        imageDiv.onclick = () => openImageModal(imagePath);
        imageDiv.innerHTML = `
            <img src="${imagePath}" alt="${project.name} ${index + 1}" class="w-full h-full object-cover"
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div style="display:none;" class="w-full h-full flex items-center justify-center">
                <span class="text-gray-400 text-sm">Image ${index + 1}</span>
            </div>
        `;
        grid.appendChild(imageDiv);
    });
    
    modal.classList.remove('hidden');
    modal.classList.add('flex', 'modal-enter');
    document.body.classList.add('modal-open');
}

function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.classList.remove('modal-open');
    currentProject = null;
}

// UPDATED: Full size image modal
function openImageModal(imagePath) {
    currentImage = imagePath;
    const modal = document.getElementById('image-modal');
    const container = document.getElementById('image-view-container');
    
    container.innerHTML = `
        <img src="${imagePath}" alt="Full size view" class="max-w-full max-h-full object-contain"
             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div style="display:none;" class="text-center p-8">
            <p class="text-gray-400 text-lg">Image could not be loaded</p>
        </div>
    `;
    
    modal.classList.remove('hidden');
    modal.classList.add('flex', 'modal-enter');
}

function closeImageModal() {
    const modal = document.getElementById('image-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    currentImage = null;
}

// Navigation Functions
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        closeMobileMenu();
    }
}

function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        const sections = ['home', 'about', 'experience', 'work', 'contact'];
        let current = '';
        
        sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom >= 100) {
                    current = sectionId;
                }
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === current) {
                link.classList.add('active');
            }
        });
    });
}

function initializeMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    });
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    
    mobileMenu.classList.add('hidden');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
}

function initializeScrollEffects() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Close modals when clicking outside
document.getElementById('project-modal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeProjectModal();
    }
});

document.getElementById('image-modal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeImageModal();
    }
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if (currentImage) {
            closeImageModal();
        } else if (currentProject) {
            closeProjectModal();
        }
    }
});