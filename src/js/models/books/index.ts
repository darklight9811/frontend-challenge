// Packages
import * as faker from "faker";

// Store
import { store, ModelsInterface } from "..";

// Utils
import Service from "../../utils/service";

// Services
import recommended from "../../services/books/recommended.json";
import recommendedPosts from "../../services/posts/recommended.json";

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
		const [store] = this.store;

		// update data
		this.page = page;
		this.query = query;

		const response = await this.client.get(`${this.resourceUrl}`, { params: {projection: "lite", langRestrict: store.auth.language, page: this.page, maxResults: perpage, q: this.query} });
		
		dispatch.setList(response.data.items);
		dispatch.setItems(response.data.items);

		return response.data.data;
	}

	public loadPage = async () => {
		this.index(this.query, this.page ++);
	}

	// TODO Implement a recommended back-end
	public getRecommended () {
		return recommended as BookInterface[];
	}

	// TODO Implement posts back-end
	public getPosts () {
		return recommendedPosts;
	}

	public getReadInformation (bookId: string, userId: string) {
		const totalChapters = faker.datatype.number(20) + 5;

		return {
			id: faker.datatype.uuid(),
			bookId,
			userId,
			totalChapters: totalChapters,
			currentChapter: faker.datatype.number(totalChapters) + 4,
		}
	}
}

const bookService = new BookServiceClass();
export default bookService;