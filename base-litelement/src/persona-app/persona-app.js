import { LitElement, html } from 'lit-element';
import '../persona-header/persona-header.js';
import '../persona-main/persona-main.js';
import '../persona-footer/persona-footer';

class PersonaApp extends LitElement {

    static get properties() {
        return {
        };
    }

    constructor() {
        super();
    }

    render() {
        return html`
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
        <persona-header></persona-header>
        <div class="row">
            <persona-sidebar @new-person="${this.newPerson}" class="col-2"></persona-sidebar>
            <persona-main class="col-10"></persona-main>
        </div>			
        <persona-footer></persona-footer>
        `;
    }

    newPerson(e) {
        console.log("newPerson en PersonaApp");	
        this.shadowRoot.querySelector("persona-main").showPersonForm = true;
    }
}

customElements.define('persona-app', PersonaApp)