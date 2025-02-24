document.addEventListener("DOMContentLoaded", function() {
    // Charger les services
    fetch("data/services.json")
        .then(response => response.json())
        .then(data => {
            let servicesGrid = document.getElementById("services-grid");
            data.forEach(service => {
                let serviceHTML = `
                    <div class="service-card">
                        <img src="${service.image}" alt="${service.titre}" width="100%">
                        <h3>${service.titre}</h3>
                        <p>${service.description}</p>
                    </div>`;
                servicesGrid.innerHTML += serviceHTML;
            });
        });

    // Charger les témoignages
    fetch("data/testimonials.json")
        .then(response => response.json())
        .then(data => {
            let testimonialsGrid = document.getElementById("testimonials-grid");
            data.forEach(t => {
                let testimonialHTML = `
                    <div class="testimonial-card">
                        <p>"${t.commentaire}"</p>
                        <strong>- ${t.nom}</strong>
                    </div>`;
                testimonialsGrid.innerHTML += testimonialHTML;
            });
        });
});

function toggleMenu() {
    let navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}

