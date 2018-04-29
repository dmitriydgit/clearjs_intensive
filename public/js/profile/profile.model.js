export default class ProfileModel {
    constructor() {
			this.url = "http://localhost:3000/profile"
    }

		getProfileData(){
			return fetch(this.url).then(responce => responce.json())
        .then(data => {
					console.log("ProfileData is loaded");
					return data;
        }) 
		}

}
