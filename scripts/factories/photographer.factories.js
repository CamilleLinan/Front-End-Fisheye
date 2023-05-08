// Créer un article contenant les informations de chaque photographe
function photographerFactory(data) {
    const { id, name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = 
        `<article 
            class="photographe_article" 
            tabindex="0" 
            aria-label="Résumé du photographe ${name}; Ville: ${city}, ${country}; Slogan: ${tagline}; Tarif : ${price} euros par jour"
        >
            <a 
                href="./photographer.html?id=${id}" 
                tabindex="0" class="photographe_article_link" 
                title="Page du photographe ${name}" 
                aria-label="Visiter la page du photographe ${name}"
            >
                <img 
                    src="${picture}" 
                    alt="${name}" 
                    aria-label="Photo de profil de ${name}" 
                    class="photographe_article_img"
                />
                <h2 
                    class="photographe_article_name" 
                    aria-label="Nom du photographe : ${name}"
                >
                    ${name}
                </h2>
            </a>
            <p 
                class="photographe_article_infos photographe_article_city" 
                aria-label="Ville de ${name} : ${city}, ${country}"
            >
                ${city}, ${country}
            </p>
            <p 
                class="photographe_article_infos photographe_article_tagline" 
                aria-label="Slogan de ${name} : ${tagline}" 
            >
                ${tagline}
            </p>
            <p 
                class="photographe_article_infos photographe_article_price" 
                aria-label="Prix par jour de ${name} : ${price} euros par jour" 
            >
                ${price}€/jour
            </p>
        </article>`

        const section = document.createElement('section');
        section.innerHTML = article;
        return section.firstElementChild;
    }

    return { name, picture, getUserCardDOM }
}