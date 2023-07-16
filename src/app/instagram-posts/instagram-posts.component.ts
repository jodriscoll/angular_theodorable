import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-instagram-posts',
  templateUrl: './instagram-posts.component.html',
  styleUrls: ['./instagram-posts.component.scss']
})
export class InstagramPostsComponent implements OnInit {
  // Create an empty array for the Instagram posts.
  posts: any[] = [];

  constructor(private http: HttpClient) { }

  // On initialization, execute the function.
  ngOnInit() {
    this.fetchInstagramPosts();
  }

  // Fetches posts from Instagram.
  fetchInstagramPosts() {
    // Unique access token generated.
    const accessToken = process.env['ACCESS_TOKEN'];
    // Instagram Graph API endpoint.
    const endpoint = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url&access_token=${accessToken}`;

    // Take the response data (in an array) and pass it into the empty posts array above.
    this.http.get(endpoint).subscribe((response: any) => {
      // For each response, create a post.
      this.posts = response.data;
    });
  }

  generateFacebookSDKScript() {
    // Read more: https://developers.facebook.com/docs/javascript/quickstart/#advancedsetup
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '231370242989436',
        xfbml      : true,
        version    : 'v17.0'
      });
      FB.AppEvents.logPageView();
    };

    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }
}
