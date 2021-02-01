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
  let genres = books.reduce((topGenres,{genre}) => {
    topGenres[genre] === undefined ? topGenres[genre] = 1 : topGenres[genre] +=1;
    
    return topGenres;
  },[]); 
  console.log(genres);

  // i dont understand why sort function is never entered
 return genres.sort((genreA, genreB) => genreA - genreB);
  

 
}

// helper function to sort items
function


function getMostPopularBooks(books) {}

function getMostPopularAuthors(books, authors) {}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
