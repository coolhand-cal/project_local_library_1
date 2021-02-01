function findAccountById(accounts, id) {

  return accounts.find((account) => {
    const accountID = account.id;
    return id === accountID;
  });
  
}

function sortAccountsByLastName(accounts) {
 return accounts.sort((thisAcct, nextAcct) => {
const thisName = thisAcct.name.last;
const nextName = nextAcct.name.last;

    return thisName.toLowerCase() > nextName.toLowerCase() ? 1: -1
 });

}


function numberOfBorrows({id}, books) {
  
   return books.reduce((numBorrows, {borrows}) => {

    const borrowers = borrows.map((obj) => obj.id);
    borrowers.includes(id) ? numBorrows += 1 : ""; 
  
  return numBorrows; 


},0 );

  
}

function getBooksPossessedByAccount({id}, books, authors) {
// goal: should return all of the books taken out by an account with the author embedded
const userID = id;



//step 1 find all books that the user has borrowed
const bookPool = books.filter((book) => {
 
  const borrowers = book.borrows.map((obj) =>{
    //checks to see which books have not been returned
    if(!obj.returned) return obj.id;
  });
  //returns books that user is still in posession of
  return borrowers.includes(id)

});

// step 2 replace the author id with an object containing the authors first and last name

//for each book look at the authorid 
const result = bookPool.map((book) => {
  // take this books author id and find the author that matches it
  BookAuthor = authors.find((author) => author.id === book.authorId);


  book[`author`] = BookAuthor;
  
  return(book);
});

return (result);
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
