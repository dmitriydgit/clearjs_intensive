export default class ProfileController { 
	constructor(model, view, utils) {
			this.model = model;
			this.view = view;
			this.utils = utils;
			
	}
   
	
	init(){
		console.log("profile inited");
		
        // this.model.getUserList().then((data) => {
        //     this.initListeners()
        //     this.view.buildUsersList(this.getNextPage());
        //     this.isLastPage();
        // }); 	
	}
    
}

