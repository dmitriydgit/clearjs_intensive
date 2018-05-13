export default class GalleryModel {
    constructor() {
        this.getUrl = 'http://localhost:3000/gallery';
    }

    getData() {
        return fetch(this.getUrl).then(responce => responce.json())
        .then(data => {
            console.log("Gallery is loaded");
            this.usersListData = data;
            return data;
        })         
		}
		getItem(itemId){
			let url = `http://localhost:3000/gallery/${itemId}`;
			return fetch(url).then(response => response.json())
		}
		saveData(data) {
			let url = "http://localhost:3000/gallery";
			let params = {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(data)
			};

				return fetch(url , params).then(response => response.json())
		};

		editGallery(id , item){
			let url = `http://localhost:3000/gallery/${id}`;
			let params = {
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json'},
						body: JSON.stringify(item)
			};
			return fetch(url , params).then(response => response.json())
		 
	 };

	 removeItem(id){
		let url = `http://localhost:3000/gallery/${id}`;
		let params = {
			method: 'DELETE',
			headers: {'Content-Type': 'application/json'}
		};
		return fetch(url , params).then(response => response.json())
	 }
}
