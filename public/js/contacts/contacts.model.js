export default class ContactsModel {
    constructor() {
			this.url = "http://localhost:3000/wall"
    }

		getData(){
			return fetch(this.url).then(responce => responce.json())
        .then(data => {
					return data;
        }) 
		}

		saveMsg(obj){
			console.log(obj);
			let url = this.url;
			let params = {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(obj)
	};

		return fetch(url , params).then(response => response.json())

		}

}
