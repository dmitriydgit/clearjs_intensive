export default class ContactsController { 
	constructor(model, view, utils) {
			this.model = model;
			this.view = view;
			this.utils = utils;
			this.init();
			
	}
	 	
	init(){
		console.log("contacts inited");
		this.view.init();
		this.initListeners();
		this.model.getData().then((data) => {
				this.view.buildWall(data);
		}); 	
	 }
	 
	 initListeners(){
		this.view.DOMElements.sendInfoBTN.addEventListener("click" , this.sendInfo.bind(this))
	}

	sendInfo(){
		let obj = {
			name : this.view.DOMElements.name.value,
			email : this.view.DOMElements.email.value,
			phone : this.view.DOMElements.phone.value,
			msg : this.view.DOMElements.msg.value,
			date: moment()
		}
		console.log(obj);
		this.model.saveMsg(obj);
	}

}

