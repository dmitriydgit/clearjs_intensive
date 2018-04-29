export default class ProfileController { 
	constructor(model, view, utils) {
			this.model = model;
			this.view = view;
			this.utils = utils;
			this.init();
			
	}
   
		init(){
		console.log("profile inited");
        this.model.getProfileData().then((data) => {
            //this.initListeners()
            this.view.init(data);
            //this.isLastPage();
        }); 	
	}
    
}

