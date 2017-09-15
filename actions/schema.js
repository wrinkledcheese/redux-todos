import { Schema, arrayOf } from 'nromalizr';

export const todo = new Schema( 'todos' );
export const arrayOfTodos = arrayOf( todo );