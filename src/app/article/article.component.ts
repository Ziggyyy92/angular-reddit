import { Component, 
  OnInit, 
  HostBinding, 
  Input // dodato je ovo
 }from '@angular/core';
import { Article } from './article.model';

@Component({
selector: 'app-article',
templateUrl: './article.component.html',
styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

@HostBinding('attr.class') cssClass = 'row';
@Input() article: Article;

constructor() {
this.article = new Article(
'IT255 - Veb sistemi 1',
'http://www.metropolitan.ac.rs',
10);
}

voteUp() {
this.article.voteUp();
return false;
}

voteDown() {
this.article.voteDown();
return false;
}

ngOnInit() {
}

}