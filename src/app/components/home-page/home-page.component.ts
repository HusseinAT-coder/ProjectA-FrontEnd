import { Component } from '@angular/core';
import { Consts } from '../../../app/shared/consts.const';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  projectName = Consts.PROJECTNAME

  articles = [
    {
      Id: 1,
      Url: 'https://thumbs.dreamstime.com/z/olive-tree-branch-11541034.jpg',
      content: 'This is example content #1'
    },
    {
      Id: 2,
      Url: 'https://thumbs.dreamstime.com/z/olive-tree-branch-11541034.jpg',
      content: 'This is example content #2'
    }
  ]

}
