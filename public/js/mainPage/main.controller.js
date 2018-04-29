export default class MainController { 
    constructor(model, view, utils) {
        this.model = model;
        this.view = view;
				this.utils = utils;
				this.init();
    }        

	
	init(){
		console.log("main inited")
		
		this.model.getData().then((data) => {
			this.view.init(data);
			console.log("main-data: ", data)
		}); 	
	}
    
}

