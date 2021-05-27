// Interfaces
import DynamicTypeInterface from "./dynamicType";

export default interface ResourceServiceInterface {
	name: string;

	// Data
	types : () => Record<string, string | (string | DynamicTypeInterface)[] | DynamicTypeInterface>;
	buildRules: () => Record<string, DynamicTypeInterface>;

	// CRUD methods
	index	: (page: number) 							=> Promise<Record<string, any>>;
	get		: (id: string) 								=> Promise<any>;
	create	: (fields: Record<string, any>) 			=> Promise<Record<string, any>>;
	update	: (id: string, fields: Record<string, any>) => Promise<Record<string, any>>;
	delete	: (id: string) 								=> Promise<void>;
}