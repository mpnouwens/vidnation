import { Models } from '@rematch/core'
import { search } from './search'

export interface RootModel extends Models<RootModel> {
    search: typeof search
}

export const models: RootModel = { search }
