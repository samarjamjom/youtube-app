import { Component, Input, OnInit } from '@angular/core';
import{ SearchService } from '../../../shared/services/search.service';
import { Video } from '../../../shared/models/search.interface';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.css']
})
export class SearchContainerComponent implements OnInit {

  videos : Video[] = [];
  loading = true;
  constructor( private searchService:SearchService) { }

  ngOnInit(): void {
  }

  handleSearch(inputVal:string){
    this.loading = true;
    this.searchService.getVideos(inputVal).subscribe(
      (items: any) => {
        this.videos = items.map(item => {
          return {
            title: item.snippet.title,
            videoId: item.id.videoId,
            videoUrl: `https://www.youtube.com/watch?v=${item.id.videoId}`,
            channelId: item.snippet.channelId,
            channelUrl: `https://www.youtube.com/channel/${item.snippet.channelId}`,
            channelTitle: item.snippet.channelTitle,
            description: item.snippet.description,
            publishedAt: new Date(item.snippet.publishedAt),
            thumbnail: item.snippet.thumbnails.high.url
          };
        });
        console.log(typeof(this.videos))
        this.loading = false;
      }
    )
  }

}
