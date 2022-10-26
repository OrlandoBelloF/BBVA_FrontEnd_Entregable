import { LitElement, html } from 'lit-element';  
class PersonaForm extends LitElement {
	static get properties() {
		person: {type: Object}
		return {			
		};
	}

	constructor() {
		super();
		this.person = {};
	}

	render() {
		return html`	
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
			<div>
				<form>
					<div class="form-group">
						<label>Nombre Completo</label>
						<input type="text" id="personFormName" class="form-control" placeholder="Nombre Completo" @input="${this.updateName}"/>
					<div>
					<div class="form-group">
						<label>Perfil</label>
						<textarea class="form-control" placeholder="Perfil" rows="5" @input="${this.updateProfile}"></textarea>
					<div>
					<div class="form-group">
						<label>Años en la empresa</label>
						<input type="text" class="form-control" placeholder="Años en la empresa" @input="${this.updateYearsInCompany}"/>
					<div>
					<button @click="${this.goBack}" class="btn btn-primary"><strong>Atrás</strong></button>
					<button class="btn btn-success" @click="${this.storePerson}"><strong>Guardar</strong></button>
				</form>
			</div>
		`;
	}
	
	goBack(e) {
		console.log("goBack");	  
		e.preventDefault();	
		this.dispatchEvent(new CustomEvent("persona-form-close",{}));	
	}

	updateName(e) {
		console.log("updateName");
		console.log("Actualizando la propiedad name con el valor " + e.target.value);
		this.person.name = e.target.value;
	}

	updateProfile(e) {
		console.log("updateProfile");
		console.log("Actualizando la propiedad profile con el valor " + e.target.value);
		this.person.profile = e.target.value;
	}

	updateYearsInCompany(e) {
		console.log("updateYearsInCompany");
		console.log("Actualizando la propiedad yearsInCompany con el valor " + e.target.value);
		this.person.yearsInCompany = e.target.value;
	}

	storePerson(e) {
		console.log("storePerson");
		e.preventDefault();
		
		this.person.photo = {
			"src": "./img/persona.jpg",
			"alt": "Persona"
		};
			
		console.log("La propiedad name vale " + this.person.name);
		console.log("La propiedad profile vale " + this.person.profile);
		console.log("La propiedad yearsInCompany vale " + this.person.yearsInCompany);	
			
		this.dispatchEvent(new CustomEvent("persona-form-store",{
			detail: {
				person:  {
						name: this.person.name,
						profile: this.person.profile,
						yearsInCompany: this.person.yearsInCompany,
						photo: this.person.photo
					}
				}
			})
		);
	}
}  
customElements.define('persona-form', PersonaForm) 