export default	class LoginView {
	constructor (){
		this.DOMElements = {
			submitBtn : document.querySelector("#submitBtn"),
			//enterBtn : document.querySelector("#enterBtn"),
			exitBtn : document.querySelector("#exitBtn"),
			email : document.querySelector("#inputEmail"),
			password : document.querySelector("#inputPassword"),
			checkBoxRemememberMe : document.querySelector("#inputRemember"),
			
			loginBtn : document.querySelector("#loginBtn"),
			mainPageBtn : document.querySelector("#mainPageBtn"),
			profileBtn : document.querySelector("#profileBtn"),
			galleryBtn : document.querySelector("#galleryBtn"),
			contactsBtn : document.querySelector("#contactsBtn"),
			

			showUserDataBtn : document.querySelector("#showUserDataBtn"),
			showGalleryBtn : document.querySelector("#showGalleryBtn"),


			alertMsg : document.querySelector("#alert-message"), 
			notFilledEmailMsg : document.querySelector("#notFilledEmailMsg"),
			notFilledPassMsg : document.querySelector("#notFilledPassMsg"),
			wrongEmailMsg : document.querySelector("#wrongEmailMsg"),
			wrongPassMsg : document.querySelector("#wrongPassMsg")
		}
	};
	
	getLogAndPass(){
		let credentials = {
			"login" : this.DOMElements.email.value,
			"password" : this.DOMElements.password.value
		}
		return credentials;
	};
	
	showErrorMsg(msgCode){
		switch(msgCode){
			case '1':
			this.showHide({"show" : [this.DOMElements.alertMsg]});
			break;
		
			case '2':
			this.showHide({"show" : [this.DOMElements.notFilledEmailMsg]})
			break;
			
			case '3':
			this.showHide({"show" : [this.DOMElements.notFilledPassMsg]})
			break;

			case '4':
			this.showHide({"show" : [this.DOMElements.wrongEmailMsg]})
			break;

			case '5':
			this.showHide({"show" : [this.DOMElements.wrongPassMsg]})
			break;
		}
	}

	hideAlertMsgs(){
		this.showHide({"hide" : [this.DOMElements.alertMsg,
			this.DOMElements.notFilledEmailMsg, 
			this.DOMElements.notFilledPassMsg,
			this.DOMElements.wrongEmailMsg,
			this.DOMElements.wrongPassMsg]});
	};
	
	
	showAlertMsg(){
		this.showHide({"show" : [this.DOMElements.alertMsg]})
	}
	showNotFilledEmailMsg(){
		this.showHide({"show" : [this.DOMElements.notFilledEmailMsg]})
	}
	showNotFilledPasswordMsg(){
		this.showHide({"show" : [this.DOMElements.notFilledPassMsg]})
	}
	showBadLoginMsg(){
		this.showHide({"show" : [this.DOMElements.wrongEmailMsg]})
	};
	
	showBadPasswordMsg(){
		this.showHide({"show" : [this.DOMElements.wrongPassMsg]})
	};
	/*
	mainPageBtn : document.querySelectorAll("#mainPage"),
			profileBtn : document.querySelectorAll("#profileBtn"),
			galleryBtn : document.querySelectorAll("#galleryBtn"),
			contactsBtn : document.querySelectorAll("#contactsBtn"),
	*/
	showButtons(){
		this.showEls([this.DOMElements.mainPageBtn,
		this.DOMElements.profileBtn,
		this.DOMElements.galleryBtn,
		this.DOMElements.contactsBtn,
		this.DOMElements.exitBtn])
	}
	
	hideButtons(){
		this.hideEls([this.DOMElements.mainPageBtn,
			this.DOMElements.profileBtn,
			this.DOMElements.galleryBtn,
			this.DOMElements.contactsBtn,
			this.DOMElements.exitBtn])
			
		}
	hideEnterBtn(){
		this.hideEls([this.DOMElements.loginBtn]);
	}
	showEnterBtn(){
		this.showEls([this.DOMElements.loginBtn]);
	}
	showHide(object){    
		for(var key in object) { 
			var key = key;
			var value = object[key]; 
			value.forEach(DOMElem => {
				DOMElem.classList.remove("show" , "hide");
				DOMElem.classList.add(key);
			})
		}
	};

	showEls(arr){
		arr.forEach(DOMElem => {
				DOMElem.classList.remove("hide");
		})
	}
	hideEls(arr){
		arr.forEach(DOMElem => {
				DOMElem.classList.add("hide");
		})
	}


}
