export default class MainController { 
    constructor(model, view, utils) {
        this.model = model;
        this.view = view;
        this.utils = utils;
    }        

	
	init(){
		console.log("main inited")
        // this.model.getUserList().then((data) => {
        //     this.initListeners()
        //     this.view.buildUsersList(this.getNextPage());
        //     this.isLastPage();
        // }); 	
	}
    
}

