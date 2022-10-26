import { LitElement, html } from 'lit-element';

class PersonaSidebar extends LitElement {
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
			<aside>
				<section>				
					<div class="mt-5">
						<button @click="${this.newPerson}" class="w-100 btn bg-success" style="font-size: 50px"><strong>+</strong></button>
					<div>				
				</section>
			</aside>
		`;
	}
    
    newPerson(e) {
        console.log("newPerson en persona-sidebar");
        console.log("Se va a crear una nueva persona");
      
        this.dispatchEvent(new CustomEvent("new-person", {})); 
    }    
}  
customElements.define('persona-sidebar', PersonaSidebar)