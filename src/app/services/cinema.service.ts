import { getLocaleDateFormat } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs';
//import { parseString } from 'xml2js';
import { parseString } from 'xml2js';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {



  url: string = 'https://www.finnkino.fi/xml/News/';

  testData =
    [{ 'Title': 'Ensi-PalmSprings', 'PublishDate': '2020-11-24T00:00:00', 'HTMLLead': '', 'ImageURL': 'http://media.finnkino.fi/1012/news/6124/PalmSprings_550.jpg' },
    { 'Title': 'Ensi-ilta: Karjamäenjoulu', 'PublishDate': '2020-11-24T00:00:00', 'HTMLLead': '', 'ImageURL': 'http://media.finnkino.fi/1012/news/6123/JulPaKutoppen_550.jpg' }];

  //newsTestData = this.testData;
  //httpClient: any;

  constructor(private httpClient: HttpClient) {
    this.url = "https://www.finnkino.fi/xml/News/";
  }

  getData(): Observable<any> {
    // pipe kokoaa operaattorit yhteen (map, filter, etc)
    // map operaattori, tyypin muuttamiseen (esim. response => json-tyyppiseksi)
    // filter operaattori, suodatus annetun ehdon mukaan
    return this.httpClient.get(this.url, { responseType: 'text' })
      .pipe(map(response => {
        console.log('getXMLData... ' + response);
        let newsData: any;
        parseString(response, {
          trim: true,
          explicitArray: false,
          mergeAttrs: true
        }, function (err: any, result: any) {
          console.log("ei toimi prkl")
          newsData = result.News.NewsArticle;

        })
        // tässä muunnetaan xml-data json muotoon
        return newsData;
      }));
  }

  getTestData(): Observable<any> {
    //let testData = [];
    return of(this.testData);
  }

}
