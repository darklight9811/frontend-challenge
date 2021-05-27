// Utils
import Service from "../../utils/service";

// Store
import { store, ModelsInterface } from "..";

@Service.store(store, "module.{{ name }}")
class {{ name }}ServiceClass extends Service<ModelsInterface, "module.{{ name }}"> {

}

const {{ name }}Service = new {{ name }}ServiceClass();
export default {{ name }}Service;