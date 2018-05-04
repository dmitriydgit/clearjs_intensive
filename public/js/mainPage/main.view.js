export default class MainView {        
    constructor() {
        this.DOMElements = {
					resultBlock : document.querySelector("#result-main"),
					addNewPostInput : document.querySelector("#addNewPostInput"),
					addNewForm : document.querySelector("#form-add-new"),
					addPostBtn : document.querySelector("#addPostnBtn"),
					//nameNewPost : document.querySelector("#new-name"),
					authorNewPost : document.querySelector("#new-post-author"),
					textNewPost : document.querySelector("#new-text"),
					newImage : document.querySelector("#new-image"),
					emptyspace : document.querySelector("body"),
					wentToLink : document.querySelector("#wentTo"),
					friendsWithLink : document.querySelector("#friendsWith"),
					workedAtLink : document.querySelector("#workedAt"),
					livesInLink : document.querySelector("#livesIn"),
					fromLink : document.querySelector("#from"),
					//friendsWithLink : document.querySelector("#friendsWith"),

				}; 
				this.utils = utils;    
				this.readyData = [];
				this.profileData = {};
		}
		
		init(data){
			this.initListeners();
			this.refreshPosts(data);
			this.fillAbout(this.profileData);
		}

		initListeners(){
			this.DOMElements.addNewPostInput.addEventListener("click" , this.showFormForAdding.bind(this))
			window.addEventListener("click" , this.hideFormForAdding.bind(this))
		}

		showFormForAdding(event){
			if(event.target.id == "addNewPostInput"){
				//this.clearFormForAdd();
				this.utils.showEl(this.DOMElements.addNewForm);
			}
		};
		hideFormForAdding(event){
			if(event.target.id == "emptyspace"){
				this.clearFormForAdd();
				this.utils.hideEl(this.DOMElements.addNewForm);
			}
		};
		clearFormForAdd(){
			this.DOMElements.authorNewPost.value = "";
			this.DOMElements.textNewPost.value = "";
			this.DOMElements.newImage.value = "";
		}

		refreshPosts(data){
			this.readyData = data;
			this.biuldView(this.readyData);
		};
		
	
		biuldView (readyData){  
			this.DOMElements.resultBlock.innerHTML = "";
			for (let i = readyData.length - 1; i > 0; i--) {    
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
					<p class="text-left">${item.text}</p>
					<div class="boy" data-grid="images">${imgs}</div>
					</div>
				</div>
			</div>
		</li>`
		};

		fillAbout(obj){
			this.DOMElements.wentToLink.innerHTML = obj.wentTo;
			this.DOMElements.friendsWithLink.innerHTML = obj.friends;
			this.DOMElements.workedAtLink.innerHTML = obj.workPlace;
			this.DOMElements.livesInLink.innerHTML = obj.country;
			this.DOMElements.fromLink.innerHTML = obj.state;
		}

/*
{
      "name": "Dave",
      "lastName": "Gamache",
      "userName": "Reachy",
      "email": "dave.gamache@gmail.com",
      "adress": "First ave, bld 12, app 3",
      "adress2": "hostel",state
      "workPlace": "Github",
      "country": "Canada",
      "": "Toronto",
      "zip": "223322",
      "friends": "Obama"
    }
*/
}

