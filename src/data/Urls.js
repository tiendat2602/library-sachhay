import { dataTypes } from './Types';

//const protocol = "http";
//const hostname = "localhost";
//const port = 3500;

export const RestUrls = {
	[dataTypes.CATEGORIES]: `/api/categories`,
	[dataTypes.BOOKS]: `/api/books`
}

export const GraphQlUrl = `/graphql`;
export const authUrl = `/login`;