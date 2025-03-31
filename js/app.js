import Index from './views/Index.js';
import Test from './views/Test.js';

const routes = [
    { path: "/", view: Index },
    { path: "/test", view: Test }
];

async function router() {
    let foundRoute = null;

    routes.forEach(route => {
        if (location.pathname === route.path) {
            foundRoute = route;
        }
    });

    if (foundRoute) {
        document.title = foundRoute.view.title || "Titre";
        app.innerHTML = await new foundRoute.view().render();
    } else {
        history.replaceState("", "", "/");
        router();
    }
};

// Navigation
window.addEventListener("click", e => { // Ajoute un event click a tout les elements
    if (e.target.matches("[link-direction]")) { // Si l'element contient link-direction (ex : <a link-direction="/test"> ou <button link-direction="/test">)
        e.preventDefault();
        history.pushState("", "", e.target.getAttribute("link-direction")); // modifier l'history avec la value de link-direction
        router();
    }
});

window.addEventListener("popstate", router);
window.addEventListener("DOMContentLoaded", router);