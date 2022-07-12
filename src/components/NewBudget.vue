<script setup>
import { ref } from 'vue'
import CustomForm from './CustomForm.vue'
const budget = ref('0')
</script>
<template>
	<div class="wrapper shadow">
		<custom-form :budget="budget" />
	</div>
</template>
<style scoped>
.shadow {
	box-shadow: 0px 9px 10px -8px rgba(233, 230, 235, 0.51);
}
.wrapper {
	width: 90%;
	max-width: 80rem;
	margin: auto;
	background-color: white;
	padding: 4rem;
	border-radius: 2rem;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: space-between;
	transform: translateY(-2rem);
}
</style>
