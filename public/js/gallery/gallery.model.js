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

}
