import View from "../view.js";

export default class extends View {
    constructor() {
        super();
        this.setTitle("Titre");
    }

    async render() {
        return `
            <h1>Accueil page</h1>
            <p>
                <button link-direction="/test2">Page de test</button>
            </p>
        `;
    }
}
