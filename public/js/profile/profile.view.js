export default class ProfileView {        
    constructor() {
        this.DOMElements = {
					firstName : document.querySelector("#firstName"),
					lastName : document.querySelector("#lastName"),
					userName : document.querySelector("#username"),
					email : document.querySelector("#emailProfile"),
					address : document.querySelector("#addressProfile"),
					address2 : document.querySelector("#address2Profile"),
					country : document.querySelector("#countryProfile"),
					state : document.querySelector("#stateProfile"),	
					zip : document.querySelector("#zip")
        };     
        this.readyData;
    }

		init(data){
			this.readyData = data[0];
			this.buildView(this.readyData);
		}

		buildView(data){
			console.log(this.DOMElements);
			console.log(data);
			this.DOMElements.firstName.value = data.name;
			this.DOMElements.lastName.value = data.lastName;
			this.DOMElements.userName.value = data.userName;
			this.DOMElements.email.value = data.email;
			this.DOMElements.address.value = data.adress;
			this.DOMElements.address2.value = data.adress2;
			this.DOMElements.country.value = data.country;
			this.DOMElements.state.value = data.state;	
			this.DOMElements.zip.value = data.zip;
		}
    
}

