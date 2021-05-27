// Store
import { store, ModelsInterface } from "..";

// Utils
import Service from "../../utils/service";

// Services
import recommended from "../../services/books/recommended.json";

// Interfaces
import BookInterface from "./interface";

@Service.store(store, "resource.books")
class BookServiceClass extends Service <ModelsInterface, "resource.books"> {

	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	public resourceUrl = "/volumes";

	// request
	public query = "subject";
	public page = 1;

	// -------------------------------------------------
	// Methods
	// -------------------------------------------------

	public index = async (query = "subject", page: number = 1, perpage = 10) => {
		const [,dispatch] = this.model;

		// update data
		this.page = page;
		this.query = query;

		const response = await this.client.get(`${this.resourceUrl}`, { params: {page: this.page, perpage, q: this.query} });
		
		dispatch.setList(response.data.items);
		dispatch.setItems(response.data.items);

		return response.data.data;
	}

	public loadPage = async () => {
		this.index(this.query, this.page ++);
	}

	/**
	 * TODO Implement a recommended back-end
	 * @returns {BookInterface}
	 */
	public getRecommended () {
		return recommended as BookInterface[];
	}
}

const bookService = new BookServiceClass();
export default bookService;