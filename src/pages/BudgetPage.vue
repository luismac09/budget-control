<script setup>
import addIcon from '@/assets/images/icon/add.svg'
import { reactive, ref } from 'vue'
import BudgetHead from '../components/BudgetHead.vue'
import ExpenseList from '../components/ExpenseList.vue'
import ModalSection from '../components/ModalSection.vue'
import NewBudget from '../components/NewBudget.vue'
const isValid = ref(false)
const isModalOpen = ref(false)
const isAnimated = ref(false)
const state = reactive({ dataForm: [] })
const setIsValid = data => (isValid.value = data.value)
const setIsModalOpen = data => (isModalOpen.value = data.value)
const setIsAnimated = data => (isAnimated.value = data.value)
const setState = data => (state.dataForm = data)

const handleModal = () => {
	isModalOpen.value = true
	setTimeout(() => {
		isAnimated.value = true
	}, 500)
}
</script>
<template>
	<div :class="{ fixed: isModalOpen }">
		<budget-head />
		<new-budget @set-is-valid="setIsValid($event)" />
		<div v-if="isValid" class="new-expense">
			<img
				:src="addIcon"
				alt="add-icon"
				title="add new expense"
				width="50"
				height="50"
				@click="handleModal"
			/>
		</div>
		<modal-section
			v-if="isModalOpen"
			:is-modal-open="isModalOpen"
			:is-animated="isAnimated"
			:data-form="state.dataForm"
			@set-is-modal-open="setIsModalOpen($event)"
			@set-is-animated="setIsAnimated($event)"
			@set-state="setState($event)"
		/>
		<expense-list v-if="isValid" :data-form="state.dataForm" />
	</div>
</template>
<style scoped>
.new-expense {
	position: fixed;
	bottom: 2em;
	right: 3em;
	z-index: 1;
}
.no-expense {
	font-size: 2rem;
	text-transform: uppercase;
	color: white;
	text-align: center;
	font-weight: 800;
}
.fixed {
	overflow: hidden;
	height: 100vh;
}
div > img:hover {
	cursor: pointer;
	opacity: 70%;
}
</style>
