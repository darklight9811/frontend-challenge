// Packages
import * as faker from "faker";
import { createModel } from "@rematch/core";

const AuthModel = createModel()({

	// -------------------------------------------------
	// State
	// -------------------------------------------------

	state: {
		user: faker.name.findName(),
	},
});

export default AuthModel;