<script setup>
import { ref } from 'vue'
import BudgetForm from './BudgetForm.vue'
import BudgetPanel from './BudgetPanel.vue'

const emits = defineEmits(['setIsValid'])
const budget = ref(0)
const setBudget = data => (budget.value = data.value)

const isValid = ref(false)
const setIsValid = data => {
	isValid.value = data.value
	emits('setIsValid', isValid)
}
</script>
<template>
	<div class="wrapper shadow">
		<budget-panel v-if="isValid" :budget="budget" />
		<budget-form
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
