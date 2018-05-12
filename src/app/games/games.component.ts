import { Component, OnInit } from '@angular/core';
import { GamesService } from './games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

	showGame : any;
	key : string = 'title';
	reverse : boolean = false;
	sort(key) {
		this.key = key;
		this.reverse = !this.reverse;
	}
	p: number = 1;

  constructor(private gameService :  GamesService) { }

  ngOnInit() {
  }

  showGames(): any {
  	this.gameService.callGame()
  		.subscribe(response => {
  			this.showGame = response;
  		});
  }

}
