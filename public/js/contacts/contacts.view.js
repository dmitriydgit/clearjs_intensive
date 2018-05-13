export default class ContactsView {        
    constructor() {
        this.DOMElements = {
					googleMap : document.querySelector("#googleMap"),
					name : document.querySelector("#contactsName"),
					email : document.querySelector("#contactsEmail"),
					phone : document.querySelector("#contactsTel"),
					msg : document.querySelector("#contactsMessage"),
					sendInfoBTN : document.querySelector("#sendInfoBTN"),
					wall : document.querySelector("#wall"),
					// lastName : document.querySelector("#lastName"),
					// address : document.querySelector("#addressProfile"),
					// address2 : document.querySelector("#address2Profile"),
					// country : document.querySelector("#countryProfile"),
					// state : document.querySelector("#stateProfile"),	
					// zip : document.querySelector("#zip")
        };     
        
    }

		init(){
			this.buildGoogleMap();
			
		}
		

		buildGoogleMap(){
			var mapCanvas = this.DOMElements.googleMap;
  		var mapOptions = {
    		center: new google.maps.LatLng(43.6, -79.3), zoom: 8
  		};
  		var map = new google.maps.Map(mapCanvas, mapOptions);
		}

		buildWall(data){
			let wallData = data;
			console.log(wallData);
			for (let i = wallData.length -1; i >= 0; i--) {    
				this.DOMElements.wall.innerHTML += this.createWallItem(wallData[i]); 
		}
			//this.DOMElements.wall.innerHTML += data;
		}

		createWallItem(item){
			return 	`<div class="col-md-12" id = ${item.id}>

								<div class="wall-item">
									<div class ="col-md-4">
										<div class="text-left"><b>User</b>: ${item.name}</div>
										<div class="text-left"><b>Email</b>: ${item.email}</div>
										<div class="text-left"><b>Phone</b>: ${item.phone}</div>
										<div class="text-left"><b>Date</b>: ${item.date}</div>
									</div>
									<div class="text-left col-md-8"> <strong>${item.msg}</strong></div>
								</div>
								<hr class="mb-4">
							</div>`;
		}
    
}

