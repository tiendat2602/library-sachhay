import { createStore, applyMiddleware } from 'redux';
import { BooksReducer } from './BooksReducer';
import { asyncActions } from './AsyncMiddleware';

export const BooksDataStore = createStore(BooksReducer,applyMiddleware(asyncActions));