// Packages
import { init, RematchDispatch, RematchRootState } from "@rematch/core";

// Models
import BooksModel from "./books/model";
import AuthModel from "./auth/model";

// -------------------------------------------------
// Models
// -------------------------------------------------

const models = {
	"auth": AuthModel,
	"resource.books": BooksModel,
};

// -------------------------------------------------
// Store
// -------------------------------------------------

export const store = init({
	models
});

export type ModelsInterface = typeof models;
export type StoreInterface = typeof store;
export type DispatchInterface = RematchDispatch<typeof models>;
export type StateInterface = RematchRootState<typeof models>;
