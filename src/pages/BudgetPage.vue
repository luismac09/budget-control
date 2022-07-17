<script setup>
import addIcon from '@/assets/images/icon/add.svg'
import { ref } from 'vue'
import BudgetHead from '../components/BudgetHead.vue'
import ModalSection from '../components/ModalSection.vue'
import NewBudget from '../components/NewBudget.vue'
const isValid = ref(false)
const isModalOpen = ref(false)
const isAnimated = ref(false)
const setIsValid = data => (isValid.value = data.value)
const setIsModalOpen = data => (isModalOpen.value = data.value)
const setIsAnimated = data => (isAnimated.value = data.value)
const handleModal = () => {
	isModalOpen.value = true
	setTimeout(() => {
		isAnimated.value = true
	}, 500)
}
</script>
<template>
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
		@set-is-modal-open="setIsModalOpen($event)"
		@set-is-animated="setIsAnimated($event)"
	/>
</template>
<style scoped>
.new-expense {
	position: absolute;
	bottom: 3em;
	right: 3em;
}
div > img:hover {
	cursor: pointer;
	opacity: 70%;
}
</style>
