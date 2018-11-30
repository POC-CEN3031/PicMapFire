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
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 29.643439, lng:  -82.356024 },
    zoom: 2
  });
}
