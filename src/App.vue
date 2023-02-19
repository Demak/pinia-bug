<template>
	<p>The counter is at {{ counter }}</p>
	<button @click="counter++">Increment</button>
	<button @click="counter--">Decrement</button>
	<button @click="counter = 0">Reset</button>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import { mapWritableState } from 'pinia';
import { useCounter, } from "./stores/counter";

export default defineComponent({
	name: 'test',
	computed: {
		...mapWritableState(useCounter, ['counter'])
	},
	created(){
		console.log(this.stuff);
		this.stuff = 'stuff';
	}
});
</script>