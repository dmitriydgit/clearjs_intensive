export default class GalleryController { 
	constructor(model, view, observer, utils) {
		this.model = model;
		this.view = view;
		this.observer = observer;	
		this.utils = utils;
		this.init();
    }        
		
		init(){
			console.log("gallery inited")
				this.model.getData().then((data) => {
					this.view.init(data);
					console.log("gallery-data: ", data)
				}); 	
				this.initListeners()
		}
		
		initListeners() {
			this.view.DOMElements.addImgBtn.addEventListener("click", this.addImage.bind(this));
			this.view.DOMElements.editBtn.addEventListener("click", this.editCard.bind(this));
			this.view.DOMElements.resultBlock.addEventListener("click", this.showFormForEditing.bind(this));
			this.view.DOMElements.resultBlock.addEventListener("click", this.deleteImage.bind(this)); 
		
		}

		addImage (event){
			if(event.target.id == "add-img" ){
				let item = this.view.createItemForAdd();
				this.model.saveData(item)
				.then(data => this.view.refreshGallery(data)) 
				this.view.hideFormForAdding();
			}
		};

		showFormForEditing(event){  //
			if(event.target.classList.contains("edit")){
					scroll(0,0);
					this.view.toggleAddEditBtn();
					let itemId = event.target.closest(".gallery-card").id;
					this.model.getItem(itemId)
					.then(data => {
						this.view.fillFormForEdit(data);
						this.objectFromresponse = data;
					})
					.catch(function(error) {
						console.log(error);
					});
				};
		};

		
		editCard(event){
			if(event.target.id == "edit-img" ){
				let item = this.view.createItemForAdd();
				let id =	this.objectFromresponse.id;						
				
				this.model.editGallery(id , item)
				.then(data => this.view.refreshGallery(data)) 
				this.view.hideFormForAdding();
			}	
		};
	
		deleteImage(event){
			if(event.target.classList.contains("remove")){
				let id = event.target.closest(".gallery-card").id;
				this.model.removeItem(id)
				.then(data => this.view.refreshGallery(data)) 
			}
		};
		
	
    
}

