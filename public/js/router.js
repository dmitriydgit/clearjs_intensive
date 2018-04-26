import Utils from './utils.js';
import Observer from './gallery/observer.js';

import	MainModel from	'./mainPage/main.model.js';
import	MainView from	'./mainPage/main.view.js';
import	MainController from	'./mainPage/main.controller.js';

import ProfileController from './profile/profile.controller.js';
import ProfileModel from './profile/profile.model.js';
import ProfileView from './profile/profile.view.js';


import GalleryController from './gallery/gallery.controller.js';
import GalleryModel from './gallery/gallery.model.js';
import GalleryView from './gallery/gallery.view.js';



import LoginController from './login/login.controller.js';
import LoginModel from './login/login.model.js';
import LoginView from './login/login.view.js';

let mainPage = document.querySelector("#main-view");
let profile = document.querySelector("#profile-view");
let gallery = document.querySelector("#gallery-view");
let mainPageBtn = document.querySelector("#mainPageBtn");
let profileBtn = document.querySelector("#profileBtn");
let galleryBtn = document.querySelector("#galleryBtn");
//let login = document.querySelector("#login-view");
//let contact = document.querySelector("#contact-view");



let activatedRoutes = {};

let routeConfig = {
    "mainPage" : {
        show : () => {
						Utils.showView([mainPage]);
            Utils.hideView([profile, gallery]);
						Utils.activateBtn([mainPageBtn]);
						Utils.disactivateBtn([profileBtn, galleryBtn]);
        },
        init : () => {
            let model = new MainModel;
            let view = new MainView;
						let utils = new Utils;
            let mainConteroller = new MainController(model, view, utils);
						mainConteroller.init();
        }
    },
    "profile" : {
        show : () => {
            Utils.showView([profile]);
            Utils.hideView([mainPage, gallery]);
						Utils.activateBtn([profileBtn]);
						Utils.disactivateBtn([mainPageBtn, galleryBtn]);
            console.log("Contacts route is loaded")
        },
        init : () => {
            let model = new ProfileModel;
            let view = new ProfileView;
						let utils = new Utils;
            new ProfileController(model, view, utils)
        }
    },
    "gallery" : {
        show : () => {
            Utils.showView([gallery]);
            Utils.hideView([mainPage, profile]);
						Utils.activateBtn([galleryBtn]);
						Utils.disactivateBtn([mainPageBtn, profileBtn]);
            console.log("Main route is loaded")
        },
        init : () => {
            let observer = new Observer;
            let model = new GalleryModel;
            let view = new GalleryView;
            new GalleryController(model, view, observer, new Utils)
        }
    }
}

function activateRoute(routeName){
    if (activatedRoutes[routeName]) {
        activatedRoutes[routeName]();
    } else {
        let route = routeConfig[routeName];
        if (route) {
            route.init();
            route.show();
            activatedRoutes[routeName] = route.show;
        }
    } 
}

export function updateRoute() {
    let routeName = document.location.hash.replace(/^#/, '');
    if(routeName && !Utils.isLoggedIn()) {
        Utils.navigateTo(""); 
    } else {
        activateRoute(routeName);
    }
    
}
