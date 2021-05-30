export default interface ModelInterface {
	// identifiers
	kind: string;
	id: string;
	etag: string;

	// info
	volumeInfo: {
		title: string;
		subtitle?: string;
		authors: string[];
		publishedDate: string;
		description?: string;
		pageCount?: number;

		industryIdentifiers: { type: string, identifier: string }[];

		readingModes: {
			text: boolean;
			image: boolean;
		}

		printType: "BOOK";

		categories: string[];
		maturityRating: "NOT_MATURE" | "MATURE";
		allowAnonLogging: boolean;

		imageLinks: {
			smallThumbnail: string;
			thumbnail: string;
		}

		language: string;

		previewLink: string;
		infoLink: string;
		canonicalVolumeLink: string;
	}

	saleInfo: {
		country: "BR" | string;
		saleability: "NOT_FOR_SALE" | "FOR_SALE";
		isEbook: boolean;
	}

	searchInfo: {
		textSnippet: string;
	}

	// links
	selfLink: string;
}