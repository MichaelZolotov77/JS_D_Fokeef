'use strict';

class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }
  static createTodays() {
    return new this('Some article', new Date());
  }
}

console.log(Article.createTodays());
