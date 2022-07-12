<script setup>
import { ref } from 'vue'
import CustomForm from './CustomForm.vue'
const budget = ref(0)
const setBudget = data => (budget.value = data.value)

const isValid = ref(false)
const setIsValid = data => (isValid.value = data.value)
</script>
<template>
	<div class="wrapper shadow">
		<h3 v-if="isValid">Your budget</h3>
		<custom-form
			v-else
			:budget="budget"
			@set-budget="setBudget($event)"
			@set-is-valid="setIsValid($event)"
		/>
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
