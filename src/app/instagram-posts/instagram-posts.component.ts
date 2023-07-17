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
}
