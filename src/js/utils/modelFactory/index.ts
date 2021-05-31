// Packages
import { createModel } from "@rematch/core";

// Interfaces
import ModelFactoryConfig from "./interface";

export default function modelFactory<ResourceInterface = Record<string, unknown>> (config: ModelFactoryConfig = {}) {

	return createModel()({
		// -------------------------------------------------
		// State
		// -------------------------------------------------

		state: {
			list: {
				data: [] as ResourceInterface[],
				page: 1,
				perpage: 25,
				items: 0,
			},
			data: undefined as ResourceInterface | undefined,
			loading: false,
			...(config.state || {}),
		},
		
		// -------------------------------------------------
		// Reducers
		// -------------------------------------------------

		reducers: {
			setData: (state, data: ResourceInterface | undefined) => {
				return {
					...state,
					data,
				};
			},
			clearData: (state) => {
				return {
					...state,
					data: undefined,
				}
			},
			setPage: (state, page: number) => {
				return {
					...state,
					list: {
						...state.list,
						page,
					}
				}
			},
			setPerpage: (state, perpage: number) => {
				return {
					...state,
					list: {
						...state.list,
						perpage,
					}
				}
			},
			setItems: (state, items: number) => {
				return {
					...state,
					list: {
						...state.list,
						items,
					}
				}
			},
			setList: (state, list: ResourceInterface[]) => {
				return {
					...state,
					list: {
						...state.list,
						data: list,
					}
				}
			},
			setLoading: (state, loading: boolean) => {
				return {
					...state,
					loading
				}
			},
			...(config.reducers || {}),
		}
	});
}