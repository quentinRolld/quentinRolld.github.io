document.addEventListener("DOMContentLoaded", function() {
    const profileContainer = document.querySelector('.profile, .avatar');

    if (profileContainer) {
        profileContainer.addEventListener('mousemove', (e) => {
            const rect = profileContainer.getBoundingClientRect();
            // On calcule le centre de l'élément
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            // On calcule la distance de la souris par rapport au centre
            // Le '20' détermine l'intensité du décalage (plus c'est haut, plus ça bouge)
            const mouseX = (e.clientX - centerX) / 20;
            const mouseY = (e.clientY - centerY) / 20;

            // On met à jour les variables CSS
            profileContainer.style.setProperty('--mouse-x', mouseX + 'px');
            profileContainer.style.setProperty('--mouse-y', mouseY + 'px');
        });

        // Quand la souris quitte la zone, on remet tout au centre proprement
        profileContainer.addEventListener('mouseleave', () => {
             profileContainer.style.setProperty('--mouse-x', '0px');
             profileContainer.style.setProperty('--mouse-y', '0px');
        });
    }
});