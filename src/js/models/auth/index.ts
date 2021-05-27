// Store
import { store, ModelsInterface } from "..";

// Utils
import Service from "../../utils/service";

@Service.store(store, "auth")
class AuthServiceClass extends Service <ModelsInterface, "auth"> {
	
}

const authService = new AuthServiceClass();
export default authService;