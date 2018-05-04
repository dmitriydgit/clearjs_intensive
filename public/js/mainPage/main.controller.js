export default class MainController { 
    constructor(model, view, utils) {
        this.model = model;
        this.view = view;
				this.utils = utils;
				this.init();
				this.usersAvatars = {};
				
    }        

	
	init(){
		console.log("main inited")
		
		this.model.getProfileData().then(data => {
			this.view.profileData = data[0];
		}); 	
		this.model.getData().then((data) => {
			this.view.init(data);
			console.log("main-posts: ", data)
		}); 
		this.model.getAvatars()
		.then(data => {
			this.usersAvatars = data;
		}); 
		this.bindEvents();
	}

	bindEvents(){
		this.view.DOMElements.addPostBtn.addEventListener("click" , this.addPost.bind(this))
		
	}
	
	addPost (){
		let authorNewPost = 	this.view.DOMElements.authorNewPost.value;
		let textNewPost = this.view.DOMElements.textNewPost.value;
		let newDate = moment();
		let avatar = this.chooseAvatar(this.view.DOMElements.authorNewPost.value , this.usersAvatars);
		let re = /\s+/;
		
		let newImage = this.view.DOMElements.newImage.value.split(re);;
		//let nameList = names.split(re);

		
		
		let postData = {
			"name" : authorNewPost,
			"date" : newDate,
			"url" : avatar,
			"text": textNewPost, 
			"images" : newImage
		}
		console.log("postData", postData)
		this.model.savePost(postData)
	};

	chooseAvatar(value , obj){
		console.log("userAvetars", obj)
		for(let key in obj){
			if (key == value){
				return obj[key];
			}
		}


		// if(value == "Johny"){return "img/avatar-dhg.png"}
		// if(value == "Garry"){return "img/avatar-fat.jpg"}
		// if(value == "Jacob Thornton"){return "img/avatar-mdo.png"}
		// if(value == "Carlos"){return "img/scull.jpg"}
	};

	// {
	// 		"Johny" : "img/avatar-dhg.png",
	// 	"Garry" : "img/avatar-fat.jpg",
	// 	"Jacob Thornton" : "img/avatar-mdo.png",
	// 	"Carlos" : "img/scull.jpg"
	// }


}

