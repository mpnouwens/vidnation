import { createModel, Reducer } from '@rematch/core'
import { RootModel } from './models'

export const search = createModel<RootModel>()({
    state: {},
    reducers: {
        searchText(state, searchText: string) {
            return {
                state,
                searchText
            }
        }
    },
    effects: (dispatch) => ({
        // handle state changes with impure functions.
        // use async/await for async actions
        async searchAsync(payload: string, state) {
            console.log('This is current root state', payload);
            console.log('This is current root state', state);
            await new Promise(resolve => setTimeout(resolve, 1000))
            dispatch.search.searchText(payload)
        },
    })
})
