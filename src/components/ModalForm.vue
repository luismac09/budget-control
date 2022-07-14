<script setup>
import closeIcon from '@/assets/images/icon/close.svg'
import { ref } from 'vue'

const props = defineProps({
	isModalOpen: {
		type: Boolean,
		required: true
	}
})

const emits = defineEmits(['setIsModalOpen'])
const isModalOpen = ref(props.isModalOpen)
const closeModal = () => {
	isModalOpen.value = false
	emits('setIsModalOpen', isModalOpen)
}
</script>
<template>
	<div class="modal">
		<div class="close-modal">
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
		<p>MODAL FORM</p>
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
.close-modal {
	position: absolute;
	top: 1em;
	right: 2em;
}
div > img:hover {
	cursor: pointer;
}
</style>
