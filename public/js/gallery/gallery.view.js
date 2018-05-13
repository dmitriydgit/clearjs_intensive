export default class GalleryView {        
    constructor(utils) {
        this.DOMElements = {
					resultBlock:document.querySelector('#result'),
					formForAdding: document.querySelector("#form-add-new"),
					addNewImgBtn: document.querySelector("#add-new-img"),
					addImgBtn: document.querySelector("#add-img"),
					editBtn: document.querySelector("#edit-img"),
					newName: document.querySelector("#new-name"),
					newUrl: document.querySelector("#new-url"),
					newDescription: document.querySelector("#new-descr"),
				};  
				this.utils = utils;   
			 	this.readyDataForGallery = [];
			 	this.visibleData = [];
        
		}
		
		init(data){
			this.initListeners();
			this.refreshGallery(data);
		}

		initListeners(){
			this.DOMElements.addNewImgBtn.addEventListener("click", this.showFormForAdding.bind(this));
			
		}
		showFormForAdding(event){
			if(event.target.id == "add-new-img"){
				this.clearFormForAdd();
				this.utils.showEl(this.DOMElements.formForAdding);
				this.utils.hideEl(this.DOMElements.editBtn);
			}
		};
		clearFormForAdd(){
			this.DOMElements.newName.value = "";
			this.DOMElements.newUrl.value = "";
			this.DOMElements.newDescription.value = "";
		}
		fillFormForEdit(data){
			let response = data;
			this.DOMElements.newName.value = response.name;
			this.DOMElements.newUrl.value = response.url;
			this.DOMElements.newDescription.value = response.description;
		};
		
		hideFormForAdding(){
			this.utils.hideEl(this.DOMElements.formForAdding)
		}
		
		toggleAddEditBtn(){
			this.utils.showEl(this.DOMElements.formForAdding);
			this.utils.hideEl(this.DOMElements.addImgBtn);
		}

		refreshGallery(data){
			this.prepareData(data);
			this.biuldGallery(this.visibleData);
		};

		prepareData (data) {
			this.visibleData = [];
			this.readyDataForGallery = [];
			data.forEach(element => {
				if(!element.name){return false}
				else{this.readyDataForGallery.push(element) }
			});
			
			this.readyDataForGallery.map((item, index) => {
			                 
				return {
									url: this.urlFomat(item.url),
									name: this.nameFormat(item.name),
									description: item.description,
									itemID: item.id
									}
			});
			this.visibleData.push.apply(this.visibleData,	this.readyDataForGallery);
		};

		biuldGallery (visibleData){  
			this.DOMElements.resultBlock.innerHTML = "";
			for (let i = 0; i < visibleData.length; i++) {    
					this.DOMElements.resultBlock.innerHTML += this.createGalleryItem(visibleData[i]); 
			}
		};
		createGalleryItem (item) {
			return 	`<div class="col-md-4 gallery-card" id = ${item.id}>
					<div class="card mb-4 box-shadow gallery-item" >
							<img src="${item.url}" alt="${item.name}" class="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" data-holder-rendered="true" style="height: 225px; width: 100%; display: block;">
							<div class="card-body">
									<div class="card-text mb-4">${item.name}</div>
									<div class="card-text mb-4">${this.descrFormat(item.description)}</div>
									<div name = "edit-img" class="btn btn-warning edit"  title = "Редактировать данное изображение">Редактировать</div>
									<div  name = "delete-img" class = "btn btn-danger remove"  title = "Удалить данное изображение"> Удалить </div>
									<div class="btn-group">
									</div>
							</div>
							
					</div>
				</div>`;
		};

		createItemForAdd(){
			let item = {
				"url" : this.urlFomat(this.DOMElements.newUrl.value),
				"name": this.nameFormat(this.DOMElements.newName.value),
				"description": this.DOMElements.newDescription.value,
			}
			return item;
		}

		nameFormat (name){
			return  name ? name[0].toUpperCase() + name.substring(1).toLowerCase() : "Lohn Doh";
		};
		urlFomat  (url){
				return  (url.indexOf("https://")) === -1 ? `https://${url}` :  url; 
		};
		descrFormat(d){
			if (!d) {
				return "";
			} else {return  d}
		}

}

