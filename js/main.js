/* Menu toggle functionality */
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.querySelector('.nav__menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
});

/* Projects loading from JSON */
async function loadProjects() {
    const gridContainer = document.getElementById('projects-grid');
    
    try {
        const response = await fetch('js/projects.json');
        const projectsData = await response.json();
        
        let allCardsHTML = '';
        
        projectsData.forEach(project => {
            const cardHTML = `
                <article class="project-card">
                    <img src="${project.image}" alt="${project.name}" class="project-card__img">
                    <div class="project-card__content">
                        <h3 class="project-card__title">${project.name}</h3>
                        <p class="project-card__description">${project.description}</p>
                    </div>
                </article>
            `;
            allCardsHTML += cardHTML;
        });
        
        gridContainer.innerHTML = allCardsHTML;
        
    } catch (error) {
        console.error('Error al cargar proyectos:', error);
        gridContainer.innerHTML = '<p>Error al cargar los proyectos.</p>';
    }
}

loadProjects();

/* Form validation */
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('user-name');
const emailInput = document.getElementById('user-email');
const messageInput = document.getElementById('user-message');

const errorName = document.getElementById('error-name');
const errorEmail = document.getElementById('error-email');
const errorMessage = document.getElementById('error-message');

const successMessage = document.getElementById('success-message');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    
    errorName.textContent = '';
    errorEmail.textContent = '';
    errorMessage.textContent = '';
    successMessage.style.display = 'none';
    
    let isValid = true;
    
    if (name === '') {
        errorName.textContent = 'El nombre es requerido';
        isValid = false;
    }
    
    if (email === '') {
        errorEmail.textContent = 'El email es requerido';
        isValid = false;
    } else if (!email.includes('@') || !email.includes('.')) {
        errorEmail.textContent = 'Email no válido';
        isValid = false;
    }
    
    if (message === '') {
        errorMessage.textContent = 'El mensaje es requerido';
        isValid = false;
    } else if (message.length < 10) {
        errorMessage.textContent = 'El mensaje debe tener al menos 10 caracteres';
        isValid = false;
    }
    
    if (isValid) {
        successMessage.style.display = 'block';
    }
});
