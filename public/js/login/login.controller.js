export default class LoginController { 
	constructor(model, view, utils) {
		this.loginModel = model;
		this.loginView = view;
		this.utils = utils;
		this.init();
		//this.url = "http://localhost:3000/login/"
	}    

	init() {
		//this.loginView.hideButtons();
		this.fillStartPageUserData();
		this.bindEvents();

	}

	fillStartPageUserData (){
		let checkBoxStatus = this.loginModel.getCheckboxStatus();
		if (checkBoxStatus == true){
			this.loginModel.getData().then(data => {
				this.loginView.DOMElements.checkBoxRemememberMe.checked = true;	
				this.loginView.DOMElements.email.value = data.login;    
				this.loginView.DOMElements.password.value = data.password;
			})
		} else {
			this.loginView.DOMElements.checkBoxRemememberMe.checked = false;	
			this.loginView.DOMElements.email.value = "";
			this.loginView.DOMElements.password.value = "";
		}
	};
		
	bindEvents() {
		//this.loginView.DOMElements.enterBtn.addEventListener("click", this.initValidation.bind(this));
		this.loginView.DOMElements.submitBtn.addEventListener("click", this.initValidation.bind(this));
		this.loginView.DOMElements.exitBtn.addEventListener("click", this.initLogOut.bind(this));
	}

	initValidation(event){
		event.preventDefault();
		if(event.target.id == 'submitBtn'){
			this.loginView.hideAlertMsgs();
			let credentials = this.loginView.getLogAndPass();
			let validResult = this.loginModel.checkFields (credentials.login, credentials.password);
			if(validResult == true){
				this.loginModel.logAndPassValidation(credentials)
				.then(data => {
					if (data.status) {
						this.getAndSetCheckboxStatus();
						this.utils.navigateTo("mainPage");
						this.loginView.showButtons();
						this.loginView.hideEnterBtn();
					} else {
							this.loginView.showErrorMsg("1")
						}
					});
				} else {
				this.loginView.showErrorMsg(validResult)
			}
		}
	}
	
	initLogOut(){
		this.loginModel.logOut();
		this.loginView.hideButtons();
		this.loginView.showEnterBtn();
		this.utils.navigateTo("");
		this.getAndSetCheckboxStatus();
	}
	getAndSetCheckboxStatus(){
		if(this.loginView.DOMElements.checkBoxRemememberMe.checked == true){
			this.loginModel.setCheckboxStatus('true');
		} else {
			this.loginModel.setCheckboxStatus('false');
		}
	}
}
