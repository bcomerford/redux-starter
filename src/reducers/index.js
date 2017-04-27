import { combineReducers } from 'redux';
import books from './BooksReducer';
import activeBook from './BookActiveReducer';

const rootReducer = combineReducers({
  books,
  activeBook
});
  
export default rootReducer;