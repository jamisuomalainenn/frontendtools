import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeCinema'
})
export class PipeCinemaPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) {
      return items;
    }

    console.log('taulukon 1. objekti merkkijonona: ' + JSON.stringify(items[0]));
    console.log('hakusana: ' + searchText);
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      //return it.toLocaleLowerCase().includes(searchText);
      return it.Title.toLocaleLowerCase().includes(searchText);
      //return (it.Title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) || it.PublishDate.includes);
    });

  }
}
