/* funcionalidad de menu toggle (quedo pendiente hacerle una mejor animacion)*/
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.querySelector('.nav__menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
});

/*los proyectos renderizados y cargados desde json*/
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
    /*Falta por hacer el javascript de mi formulario*/ 
};
