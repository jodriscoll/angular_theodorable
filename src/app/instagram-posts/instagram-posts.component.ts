import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-instagram-posts',
  templateUrl: './instagram-posts.component.html',
  styleUrls: ['./instagram-posts.component.scss']
})
export class InstagramPostsComponent implements OnInit {
  posts: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchInstagramPosts();
  }

  fetchInstagramPosts() {
    const accessToken = '';
    const endpoint = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url&access_token=${accessToken}`;

    this.http.get(endpoint).subscribe((response: any) => {
      this.posts = response.data;
    });
  }
}
