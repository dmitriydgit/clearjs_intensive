export default class GalleryView {        
    constructor() {
        this.DOMElements = {
					resultBlock:document.querySelector('#result'),
        };     
			 this.readyDataForGallery = [];
			 this.visibleData = [];
        
		}
		
		init(data){
			this.refreshGallery(data);
		}

		refreshGallery(data){
			this.prepareData(data);
			this.biuldGallery(this.visibleData);
		};
		
		prepareData (data) {
			this.readyDataForGallery = data.map((item, index) => {                 
				return {
									url: this.urlFomat(item.url),
									name: this.nameFormat(item.name),
									itemID: item.id
									}
			});
			this.visibleData = [];
			this.visibleData.push.apply(this.visibleData,	this.readyDataForGallery);
		};

		biuldGallery (visibleData){  
			this.DOMElements.resultBlock.innerHTML = "";
			for (let i = 0; i < visibleData.length; i++) {    
					this.DOMElements.resultBlock.innerHTML += this.createGalleryItem(visibleData[i]); 
			}
		};
		createGalleryItem (item) {
			return 	`<div class="col-md-4 gallery-card" id = ${item.itemID}>
					<div class="card mb-4 box-shadow gallery-item" >
							<img src="${item.url}" alt="${item.name}" class="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" data-holder-rendered="true" style="height: 225px; width: 100%; display: block;">
							<div class="card-body">
									<div class="card-text mb-4">${item.name}</div>
									<div class="btn-group">
										<button type="button" class="btn btn-outline-secondary">View</button>
										<button type="button" class="btn btn-outline-secondary edit">Edit</button>
									</div>
									<div  name = "delete-img" class = "btn btn-danger"  title = "Удалить данное изображение"> Удалить </div>
							</div>
							
					</div>
				</div>`;
		};
		nameFormat (name){
			return  name ? name[0].toUpperCase() + name.substring(1).toLowerCase() : "Lohn Doh";
		};
		urlFomat  (url){
				return  (url.indexOf("https://")) === -1 ? `https://${url}` :  url; 
		};


}

