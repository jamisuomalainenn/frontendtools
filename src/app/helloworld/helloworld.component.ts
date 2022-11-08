import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helloworld',
  templateUrl: './helloworld.component.html',
  styleUrls: ['./helloworld.component.css']
})
export class HelloworldComponent implements OnInit {
  name = 'tortaina';
  title = 'Harjoittelua';
  itemImageUrl = 'https://ih1.redbubble.net/image.2930675915.4854/st,small,507x507-pad,600x600,f8f8f8.jpg';



  changeImg() {
    console.log('Buttonia painettu! :)');
    console.log(this.first_name);

    if (this.itemImageUrl == 'https://ih1.redbubble.net/image.2930675915.4854/st,small,507x507-pad,600x600,f8f8f8.jpg') {
      this.itemImageUrl = 'https://eumer.fi/pictures/thumbs900/100256315ba3e01e9f.webp';
    }
    else {
      this.itemImageUrl = 'https://ih1.redbubble.net/image.2930675915.4854/st,small,507x507-pad,600x600,f8f8f8.jpg';
    }
  }

  first_name = ''

  onButtonClicked() {
    this.first_name = 'Charlie'
  }




  constructor() { }

  ngOnInit(): void {
  }

}
