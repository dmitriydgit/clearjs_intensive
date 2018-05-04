export default class MainModel {
    constructor() {
			this.getUrl = 'http://localhost:3000/posts';
			this.avatarsUrl = 'http://localhost:3000/avatars'; 
			this.profileUrl = 'http://localhost:3000/profile'; 
    }

		getData() {
			return fetch(this.getUrl).then(responce => responce.json())
			.then(data => {
					console.log("Gallery is loaded");
					this.usersListData = data;
					return data;
			})         
	}

	getAvatars(){
		return fetch(this.avatarsUrl).then(responce => responce.json())
	}

	getProfileData(){
		return fetch(this.profileUrl).then(responce => responce.json())
	}

	savePost(postData){
		let url = "http://localhost:3000/posts";
		let params = {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(postData)
		};
		return fetch(url , params).then(responce => responce.json())
			.then(data => {
					console.log("saved post" , data)
					return data;
			})   
	}
}
