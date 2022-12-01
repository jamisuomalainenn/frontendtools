import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CinemaService } from '../services/cinema.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {

  cinemaData$: Observable<any>;
  panelOpenState = false;


  constructor(private cinemaService: CinemaService) {

    //this.cinemaData$ = this.cinemaService.getTestData();
    this.cinemaData$ = this.cinemaService.getData();
  }

  ngOnInit(): void {

  }

}
