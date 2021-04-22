import React from 'react';
import BookList from '../containers/BookList';
import BookForm from '../containers/BookForm';
import Navigation from './navigation';
import './App.css';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const App = () => (
  <div>
    <Navigation />
    <BookList categories={categories} />
    <BookForm categories={categories} />
  </div>
);

export default App;
