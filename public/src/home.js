const { reduce } = require("../../test/fixtures/books.fixture");

function totalBooksCount(books) {
// 1) should return the total number of books in the array
//2) should return zero if the array is empty
return books.length;

}

function totalAccountsCount(accounts) {
  // should return the total number of accounts in the array
  // should return zero if the array is empty
  return accounts.length;
}

function booksBorrowedCount(books) {
  // 1) should return the total number of books that are currently borrowed
  return books.reduce((count,{borrows}) => {
    const returnStatus = borrows.map((rental) => rental.returned);
    returnStatus.includes(false) ? count +=1 : "";
    return count;
  },0) 
}

function getMostCommonGenres(books) {
  //  1) should return an ordered list of most common genres
  //2) should limit the list to the top five

  //get a list of all generes and how many times it occured
  const genres = books.reduce((topGenres,{genre}) => {
    
      //IF THERE Is one with the genre add to it
      if (topGenres.some((thisgenre) => {
        if (thisgenre.name === genre) {
          thisgenre.count += 1;
          return true;
        }
  })) {
    
      } 
        //else create it and set count to 1
      else {
        newgenre = {};
        newgenre[`name`] = genre;
        newgenre[`count`] = 1
        topGenres.push(newgenre);
      }
    
    return topGenres;
  },[]); 


  return cutToFive(genres.sort((genreA, genreB) => genreB.count - genreA.count));


  
}


// helper function to cut items
function cutToFive(items){
 while (items.length >5) {
   items.pop();
 }
 return items;
}


function getMostPopularBooks(books) {

    //get an array of each book and how many times it was rented
  const result = books.map((book) => {
    const item = {};
    item[`name`] = book.title; 
    item[`count`] = book.borrows.length;
    return item;
  });

  return cutToFive(result.sort((bookA, bookB) => bookB.count - bookA.count));

}



function findAndAdd(authorPool, whichAuthor, howMany){
  authorPool.map((author) => {
    if (author.id === whichAuthor) author.count +=howMany;
    return author;
  });
}

function getMostPopularAuthors(books, authors) {

// take authors and ma each one to an author object
const authorPool = authors.map((author) => {
  author[`name`] = `${author.name.first} ${author.name.last}`;
  author[`count`] = 0;
  return author;
});

// go through books and add each one to authorpool count
  const topList = books.reduce((topAuthors,book) => {
 
    
    whichAuthor = book.authorId;
    findAndAdd(topAuthors, whichAuthor,book.borrows.length);
    return topAuthors;

   
    
},authorPool);

result = topList.map((author) => {
  delete author.id;
  return author;
});


return cutToFive(topList.sort((authorA, authorB) => authorB.count - authorA.count));

}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
