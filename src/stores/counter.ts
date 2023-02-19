import { defineStore, acceptHMRUpdate } from 'pinia'

export const useCounter = defineStore('counter', {
	state: () => ({
		counter: 0,
		property: 123,
		stuff: 'test',
		whatever: {
			test: 1
		}
	}),
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useCounter, import.meta))
}
