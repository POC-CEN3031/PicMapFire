/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';
import { MaterialUtils } from './Utils';

/**
 * Handles the Home and Feed UI.
 */
export default class Map {
    /**
     * Initializes the Friendly Pix feeds.
     * @constructor
     */
    constructor(firebaseHelper) {
        this.firebaseHelper = firebaseHelper;

        // List of all posts on the page.
        this.posts = [];
        // Map of posts that can be displayed.
        this.newPosts = {};

        // Firebase SDK.
        this.auth = firebase.auth();

        // // Pointers to DOM elements.
        // this.pageFeed = $('#page-feed');
        // this.feedImageContainer = $('.fp-image-container', this.pageFeed);
        // this.noPostsMessage = $('.fp-no-posts', this.pageFeed);
        // this.nextPageButton = $('.fp-next-page-button button');
        // this.newPostsButton = $('.fp-new-posts-button button');

        // // Event bindings.
        // this.newPostsButton.click(() => this.showNewPosts());
        initMap();
        const googleMapsClient = require('@google/maps').createClient({
            key: 'AIzaSyDX4CQXYTt_oUiaWlOhgwMZEpbMReiaa4M'
        });
    }



};
var map;
function initMap() {
    var UF = { lat: 29.643439, lng: -82.356024 };
    var map = new google.maps.Map(document.getElementById('map'), {
        center: UF,
        zoom: 3,
    });
    
    // var marker = new google.maps.Marker({
    //     position: UF,
    //     map: map
    // });

    // Create an array of alphabetical characters used to label the markers.
    var labels = 'AB';

var infoWin = new google.maps.InfoWindow();
    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    var markers = locations.map(function (location, i) {
        var marker = new google.maps.Marker({
            position: location
        });
        google.maps.event.addListener(marker, 'click', function (evt) {
            infoWin.setContent(location.info);
            infoWin.open(map, marker);
        })
        return marker;
    });

    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers,
        { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}

var a = {lat: 25.76, lng: -80.19, info: '<a href="https://pocs-92a3c.firebaseapp.com/post/-LSlne6dNqKLm5y6oUO3">View Post</a>' };
var b = {lat: 40.70, lng: -74.00, info:"https://pocs-92a3c.firebaseapp.com/post/-LSlne6dNqKLm5y6oUO3" };
// var c = {lat: 34.05, lng: 118.2, info: };
// var d = {lat: 42.36, lng: 71.06, info: };
// var e = {lat: 29.76, lng: 95.37, info: };
// var f = {lat: 47.61, lng: 122.3, info: };
// var g = {lat: 33.75, lng: 84.39, info: };
// var h = {lat: 41.88, lng: 87.63, info: };
// var i = {lat: 28.54, lng: 81.38, info: };
// var j = {lat: 32.77, lng: 96.79, info: };

var locations = [
    a,b
    //,c,d,e,f,g,h,i,j
]

