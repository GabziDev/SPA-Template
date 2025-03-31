import View from "../view.js";

export default class extends View {
    constructor() {
        super();
        this.setTitle("Test Page");
    }

    async render() {
        return `
            <h1>Test page</h1>
            <p>
                <a link-direction="/">Retour à l'accueil</a>.
            </p>
        `;
    }
}
