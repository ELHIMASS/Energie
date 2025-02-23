document.addEventListener("DOMContentLoaded", function() {
    // Charger les services depuis le fichier JSON
    fetch("data/services.json")
        .then(response => response.json())
        .then(data => {
            let servicesDiv = document.getElementById("services");
            data.forEach(service => {
                let serviceHTML = `
                    <div class="col-md-4">
                        <div class="service-card">
                            <h3>${service.titre}</h3>
                            <p>${service.description}</p>
                            <img src="${service.image}" alt="${service.titre}">
                        </div>
                    </div>`;
                servicesDiv.innerHTML += serviceHTML;
            });
        });

    // Charger les témoignages
    fetch("data/testimonials.json")
        .then(response => response.json())
        .then(data => {
            let testimonialsDiv = document.getElementById("testimonials");
            data.forEach(t => {
                let testimonialHTML = `
                    <div class="col-md-6">
                        <div class="testimonial-card">
                            <p>"${t.commentaire}"</p>
                            <strong>- ${t.nom}</strong>
                        </div>
                    </div>`;
                testimonialsDiv.innerHTML += testimonialHTML;
            });
        });
});

function toggleMenu() {
    let navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}
