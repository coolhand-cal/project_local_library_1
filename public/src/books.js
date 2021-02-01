function findAuthorById(authors, id) {
 // 1) should return the author object when given a particular ID

 return authors.find((author) => author.id == id);
}

function findBookById(books, id) {
  //should return the book object when given a particular ID:
  return books.find((book) => book.id == id);
}

function partitionBooksByBorrowedStatus(books) {
  // should return an array with two arrays: borrowed books and returned books
 
  
  return books.reduce((bookStatus, book) => {
    // name partitions
    const borrowd = bookStatus[0];
    const returned = bookStatus[1];

    // check if this book is borrowed or not
    isOut = book.borrows.some((rental) => !rental.returned);

    //place book into proper partition
    isOut ? borrowd.push(book) : returned.push(book)
    
    return bookStatus; 
  },[[],[]]); 
}

function getBorrowersForBook({borrows}, accounts) {
 
  //1) should return an array for a book of all borrowers with their information and return status

  //find id of everyone who borrowed the book
  const borrowers = borrows.map((rental) => rental.id);


  // map those ids to account info
 return result = accounts.reduce((accountPool,account)=> {
  
      if (borrowers.includes(account.id) && accountPool.length < 10) {
        // add return status to account info
        WasReturned(borrows,account);
        accountPool.push(account);
}          

return accountPool;
  },[]); 
}

// helper function adds return status to account info
function WasReturned(rentals,account){
  const thisRental = rentals.find((record) => record.id === account.id);
  account[`returned`] = thisRental.returned;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
