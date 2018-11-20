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
    var labels = 'ABCDEFGHIJK';

var infoWin = new google.maps.InfoWindow();
    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    var markers = locations.map(function (location, i) {
        var marker = new google.maps.Marker({
            position: location,
            animation: google.maps.Animation.DROP,

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
//adds user pins to map with posts
var a = {lat: 25.76, lng: -80.19, info: '<a href="https://pocs-92a3c.firebaseapp.com/post/-LSqPd2utEKwvTVBzf5y">View Post</a>'};
var b = {lat: 40.70, lng: -74.00, info: '<a href="https://pocs-92a3c.firebaseapp.com/post/-LSqPfS9ZuSuCFSzVTea">View Post</a>'};
var c = {lat: 34.05, lng: -118.2, info: '<a href="https://pocs-92a3c.firebaseapp.com/post/-LSqPiBZYiCfiSxmAphN">View Post</a>'};
var d = {lat: 42.36, lng: -71.06, info: '<a href="https://pocs-92a3c.firebaseapp.com/post/-LSqPlqICNL57Vy41vUq">View Post</a>'};
var e = {lat: 29.76, lng: -95.37, info: '<a href="https://pocs-92a3c.firebaseapp.com/post/-LSqPoJ525He84P-Dqy8">View Post</a>'};
var f = {lat: 47.61, lng: -122.3, info: '<a href="https://pocs-92a3c.firebaseapp.com/post/-LSqPrFkc1EzIqpMHbhJ">View Post</a>'};
var g = {lat: 29.621121, lng: -82.384297, info: '<a href="https://pocs-92a3c.firebaseapp.com/post/-LSqRW3r8kUyF4TZ0Y9e">View Post</a>'};
var h = {lat: 29.673993, lng: -82.302031, info: '<a href="https://pocs-92a3c.firebaseapp.com/post/-LSqRRshiH_5MWgPArJX">View Post</a>'};
var i = {lat: 29.649549, lng: -82.348479, info: '<a href="https://pocs-92a3c.firebaseapp.com/post/-LSqRUBarU7pQ2J8Hj_m">View Post</a>'};
var j = {lat: 29.649551, lng: -82.323930, info: '<a href="https://pocs-92a3c.firebaseapp.com/post/-LSqRP3_D12_xMH1xIhq">View Post</a>'};
var k = {lat: 29.637226, lng: -82.339052, info: '<a href="https://pocs-92a3c.firebaseapp.com/post/-LSqRMEf367ytVx6F2Tk">View Post</a>'};


var locations = [
    a,b,c,d,e,f,g,h,i,j,k
]
