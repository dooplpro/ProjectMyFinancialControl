import { create } from 'zustand'

type StoreType = {}

const store = create<StoreType>(() => ({}))

export default store
