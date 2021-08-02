import { Injectable } from '@angular/core';
import { Book } from '../model/entity';

@Injectable({
    providedIn: 'root'
})
export class storeService {
    
  
    getbooks(){
        return this.allbooks;
    }
    grtbookbyid(ID:number)
    {
        return this.allbooks.find(book=>book.bookID===ID)
    }
    updateEvent(event:any)
    {
        
      let index=this.allbooks.findIndex(x=>x.bookID=event.id)
      this.allbooks[index]=event
    }
    addbook(event:any)
    {
        let last:number = this.allbooks.length;
        event.id=last+1,
        this.allbooks.push(event)
    }
    


 allbooks:Book[]=[
        
    { bookID: 1, title: 'Goodnight Moon', author: 'Margaret Wise Brown', publicationYear: 1953 },
    { bookID: 2, title: 'Green Eggs and Ham', author: 'Dr. Seuss', publicationYear: 1960 },
    { bookID: 3, title: 'Where the Wild Things Are', author: 'Maurice Sendak', publicationYear: 1963 },
    { bookID: 4, title: 'The Hobbit', author: 'J. R. R. Tolkien', publicationYear: 1937 },
    { bookID: 5, title: 'Curious George', author: 'H. A. Rey', publicationYear: 1941 },
    { bookID: 6, title: 'Alice\'s Adventures in Wonderland', author: 'Lewis Carroll', publicationYear: 1865 },
  
]


mostpopularbook:Book=this.allbooks[0];


setMostpopularbook(popularbook:Book)
{
    this.mostpopularbook=popularbook;
}
}