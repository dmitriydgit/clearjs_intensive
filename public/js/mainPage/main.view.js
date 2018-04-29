export default class MainView {        
    constructor() {
        this.DOMElements = {
					resultBlock : document.querySelector("#result-main")
        };     
				this.readyData = [];
		}
		
		init(data){
			this.refreshPosts(data);
		}

		refreshPosts(data){
			this.readyData = data;
			this.biuldView(this.readyData);
		};
		
	
		biuldView (readyData){  
			this.DOMElements.resultBlock.innerHTML = "";
			for (let i = 0; i < readyData.length; i++) {    
					this.DOMElements.resultBlock.innerHTML += this.createPost(readyData[i]); 
			}
		};

		createPost (item) {
			let imgs = ``;
			item.images.forEach(element => {
				imgs += 
					`<img style="display: inline-block;  margin: 10px; vertical-align: bottom;" data-width="640" data-height="640" data-action="zoom" src="${element}">
				`
		});

			return 	`<li class="rv b agz">
			<img class="bos vb yb aff"  src= ${item.url}>
			<div class="rw">
				<div class="bpd">
					<div class="bpb">
						<small class="acx axc">${item.date}</small>
						<h6>${item.name}</h6>
					</div>
					<p>${item.text}</p>
					<div class="boy" data-grid="images">${imgs}</div>
					</div>
				</div>
			</div>
		</li>`
		};
}

