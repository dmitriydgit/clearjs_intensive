export default class MainModel {
    constructor() {
			this.getUrl = 'http://localhost:3000/posts';
    }

		getData() {
			return fetch(this.getUrl).then(responce => responce.json())
			.then(data => {
					console.log("Gallery is loaded");
					this.usersListData = data;
					return data;
			})         
	}
}
