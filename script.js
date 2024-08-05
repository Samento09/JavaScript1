let library = [];

library.push({ title: "The Great Gatsby", author: "F. Scott Fitzgerald", yearPublished: 1925, available: true });
library.push({ title: "To Kill a Mockingbird", author: "Harper Lee", yearPublished: 1960, available: true });
library.push({ title: "1984", author: "George Orwell", yearPublished: 1949, available: false });
library.push({ title: "Pride and Prejudice", author: "Jane Austen", yearPublished: 1813, available: true });

library[2].available = true;

library.splice(3, 1);

const isinLibrary = library.some(book => book.title === "The Great Gatsby");
console.log(isInLibrary); // true

let firstavailableIndex = library.findIndex(book => book.available === true);
if (firstavailableIndex !== -1) {
    library[firstAvailableIndex].available = false;
    let borrowedBook = library.splice(firstAvailableIndex, 1)[0];
    console.log(borrowedBook);
}

library.unshift({ title: "The Catcher in the Rye", author: "J.D. Salinger", yearPublished: 1951, available: true });

let booktitles = library.map(book => book.title).join(', ');
console.log(booktitles); // "The Catcher in the Rye, To Kill a Mockingbird, 1984"

let newarrivals = library.slice(-2);
console.log(newarrivals);
// [
//   { title: "To Kill a Mockingbird", author: "Harper Lee", yearPublished: 1960, available: false },
//   { title: "1984", author: "George Orwell", yearPublished: 1949, available: true }
// ]

// Step 1: Create the library array
let library = [];

// Step 2: Add books to the library
library.push({ title: "The Great Gatsby", author: "F. Scott Fitzgerald", yearPublished: 1925, available: true });
library.push({ title: "To Kill a Mockingbird", author: "Harper Lee", yearPublished: 1960, available: true });
library.push({ title: "1984", author: "George Orwell", yearPublished: 1949, available: false });
library.push({ title: "Pride and Prejudice", author: "Jane Austen", yearPublished: 1813, available: true });

// Step 3: Update the availability of "1984"
library[2].available = true;

// Step 4: Remove "Pride and Prejudice"
library.splice(3, 1);

// Step 5: Check if "The Great Gatsby" is in the library
const isInLibrary = library.some(book => book.title === "The Great Gatsby");
console.log(isInLibrary); // true

// Step 6: Borrow the first available book
let firstAvailableIndex = library.findIndex(book => book.available === true);
if (firstAvailableIndex !== -1) {
    library[firstAvailableIndex].available = false;
    let borrowedBook = library.splice(firstAvailableIndex, 1)[0];
    console.log(borrowedBook);
    // { title: "The Great Gatsby", author: "F. Scott Fitzgerald", yearPublished: 1925, available: false }
}

// Step 7: Add a new book to the start of the library
library.unshift({ title: "The Catcher in the Rye", author: "J.D. Salinger", yearPublished: 1951, available: true });

// Step 8: Get a list of all book titles
let bookTitles = library.map(book => book.title).join(', ');
console.log(bookTitles); // "The Catcher in the Rye, To Kill a Mockingbird, 1984"

// Step 9: Create a new library section with the last two books
let newArrivals = library.slice(-2);
console.log(newArrivals);
   // [
   //   { title: "To Kill a Mockingbird", author: "Harper Lee", yearPublished: 1960, available: false },
   //   { title: "1984", author: "George Orwell", yearPublished: 1949, available: true }
   // ]


console.log(isInLibrary); // true
console.log(borrowedBook);
// { title: "The Great Gatsby", author: "F. Scott Fitzgerald", yearPublished: 1925, available: false }
console.log(bookTitles);
// "The Catcher in the Rye, To Kill a Mockingbird, 1984"
console.log(newArrivals);
// [
//   { title: "To Kill a Mockingbird", author: "Harper Lee", yearPublished: 1960, available: false },
//   { title: "1984", author: "George Orwell", yearPublished: 1949, available: true }
// ]