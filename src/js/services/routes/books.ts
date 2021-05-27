// Packages
import { route } from "@acai/router";

// Wraps
import Dashbar from "../../wrap/Dashbar";

route.options({ middleware: [ "guest" ], wrap: Dashbar }, () => {
	route("/", "Home");
	route("/libraries", "Home");
	route("/profile ", "Home");
});
 