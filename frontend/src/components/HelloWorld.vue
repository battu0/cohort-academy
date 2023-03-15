<script setup>
import { storeToRefs } from "pinia";
import { useCounterStore } from "../stores/counter";

const store = useCounterStore();

const { count } = storeToRefs(store);
const { INCREMENT, DECREMENT } = store;

defineProps({
	msg: {
		type: String,
		required: true,
	},
});
</script>

<template lang="pug">
.hello
  p {{ msg }}
  .counter {{ count }}
  button.INCREMENT(@click="INCREMENT") Increment
  button.DECREMENT(@click="DECREMENT") Decrement
</template>

<style scoped></style>
