// Packages
import { route } from "@acai/router";

// Wraps
import Dashbar from "../wrap/Dashbar";

route.options({ middleware: [ "guest" ], wrap: Dashbar }, () => {
	route("/", "Home");
	route("/home", "Home");
	route("/lib", "Home");
	route("/profile ", "Home");
	route("/books/:id", "View");
});
 