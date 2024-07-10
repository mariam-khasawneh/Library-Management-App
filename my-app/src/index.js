import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function Link() {}
function Header() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <p to="/">Library</p>
      </div>
      <ul className="navbar-links">
        <li>
          <p to="/home">Home</p>
        </li>
        <li>
          <p to="/books">Books</p>
        </li>
        <li>
          <p to="/authors">Authors</p>
        </li>
        <li>
          <p to="/about">About</p>
        </li>
        <li>
          <p to="/contact">Contact</p>
        </li>
      </ul>
    </nav>
  );
}

function Main() {
  const [booksList, setCount] = useState({
    books: [
      {
        id: 1,
        title: "مقدمة ابن خلدون",
        author: "ابن خلدون",
        isbn: "1289499030",
      },
      {
        id: 2,
        title: "الحاوي في الطب",
        author: "ابو بكر الرازي",
        isbn: "893847239479",
      },
      {
        id: 3,
        title: "مقدمة ابن خلدون",
        author: "ابن خلدون",
        isbn: "1289499030",
      },
      {
        id: 4,
        title: "الحاوي في الطب",
        author: "ابو بكر الرازي",
        isbn: "893847239479",
      },
      {
        id: 5,
        title: "مقدمة ابن خلدون",
        author: "ابن خلدون",
        isbn: "1289499030",
      },
      {
        id: 6,
        title: "الحاوي في الطب",
        author: "ابو بكر الرازي",
        isbn: "893847239479",
      },
      {
        id: 7,
        title: "مقدمة ابن خلدون",
        author: "ابن خلدون",
        isbn: "1289499030",
      },
      {
        id: 8,
        title: "الحاوي في الطب",
        author: "ابو بكر الرازي",
        isbn: "893847239479",
      },
    ],
  });

  return (
    <div className="Books">
      <h1>Our Books</h1>
      <div className="book-list">
        {booksList.books.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            isbn={book.isbn}
          />
        ))}
      </div>
    </div>
  );
}

function BookCard({ title, author, isbn, count }) {
  return (
    <div className="book-card">
      <h2>{title}</h2>
      <p>
        <strong>Author:</strong> {author}
      </p>
      <p>
        <strong>ISBN:</strong> {isbn}
      </p>
    </div>
  );
}

function Footer() {
  return <h1>Footer</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
