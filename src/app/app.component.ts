import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyBWyVCs6gvxniDgIIDudpyESubItMA7RSE",
      authDomain: "ocr-exercise-blog.firebaseapp.com",
      databaseURL: "https://ocr-exercise-blog.firebaseio.com",
      projectId: "ocr-exercise-blog",
      storageBucket: "ocr-exercise-blog.appspot.com",
      messagingSenderId: "7186272545",
      appId: "1:7186272545:web:78e08b393c2a8a7df8ee60"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
