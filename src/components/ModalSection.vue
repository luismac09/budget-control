<script setup>
import closeIcon from '@/assets/images/icon/close.svg'
import { ref } from 'vue'
import ModalForm from './ModalForm.vue'

const props = defineProps({
	isModalOpen: {
		type: Boolean,
		required: true
	},
	isAnimated: {
		type: Boolean,
		required: true
	}
})

const emits = defineEmits(['setIsModalOpen', 'setIsAnimated'])

const isModalOpen = ref(props.isModalOpen)
const isAnimated = ref(props.isAnimated)
const closeModal = () => {
	isAnimated.value = false
	emits('setIsAnimated', isAnimated)
	setTimeout(() => {
		isModalOpen.value = false
		emits('setIsModalOpen', isModalOpen)
	}, 500)
}
const saveExpense = expense => {
	console.log(expense)
}
</script>
<template>
	<div class="modal">
		<div class="icon-close">
			<img
				:src="closeIcon"
				alt="close icon"
				title="close"
				class="close-icon"
				width="20"
				height="20"
				@click="closeModal"
			/>
		</div>
		<modal-form
			class="modal-form"
			:class="{ animate: props.isAnimated }"
			@save-expense="saveExpense"
		/>
	</div>
</template>
<style scoped>
.modal {
	position: absolute;
	background-color: rgb(0 0 0/0.92);
	color: white;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
}
.icon-close {
	position: absolute;
	top: 1em;
	right: 2em;
}
.modal-form {
	transition: all 300ms ease-in;
	opacity: 0;
}
.animate {
	position: relative;
	opacity: 1;
}
div > img:hover {
	cursor: pointer;
}
</style>
