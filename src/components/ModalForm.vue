<script setup>
import closeIcon from '@/assets/images/icon/close.svg'
import { ref } from 'vue'

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
		<form class="form text-shadow" :class="{ animate: props.isAnimated }">
			<legend class="legend">Edit your new Expense</legend>
			<div class="field">
				<label class="label" for="name" title="give your expense a name"
					>Name</label
				>
				<input id="name" class="input" type="text" placeholder="Name" />
			</div>
			<div class="field">
				<label class="label" for="expense" title="give your expense"
					>Expense</label
				>
				<input id="expense" class="input" type="number" placeholder="Expense" />
			</div>
			<div class="field">
				<label class="label" for="category" title="give your expense a category"
					>Category</label
				>
				<select id="category" class="input">
					<option value="">---Select---</option>
					<option value="">Saving</option>
					<option value="">Food</option>
					<option value="">Home</option>
					<option value="">For treat yourself</option>
					<option value="">Health</option>
					<option value="">Subscriptions</option>
					<option value="">Other Expenses</option>
				</select>
			</div>
			<input type="submit" class="submit" value="Hecho" />
		</form>
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
.form {
	max-width: 80rem;
	width: 40rem;
	margin: auto;
	transition: all 300ms ease-in;
	opacity: 0;
}
.text-shadow {
	color: #125ed8;
	text-shadow: 0 0 5px rgb(121, 119, 119);
}
.legend {
	font-size: 3rem;
	text-align: center;
	text-transform: uppercase;
	margin-bottom: 4rem;
	padding-top: 1em;
}
.field {
	display: grid;
	margin-bottom: 2.2em;
}
.label {
	font-size: 2.5rem;
	text-align: center;
	margin-bottom: 0.2em;
}
.input {
	height: 40px;
	text-align: center;
	border-radius: 12px;
	border: none;
	font-size: 1.9rem;
}
.submit {
	display: block;
	margin: auto;
	padding: 0.6em 4em;
	border: none;
	border-radius: 1em;
	font-size: 1.9rem;
	font-weight: 900;
	text-transform: uppercase;
	color: #333;
	transition: background-color 300ms ease, color 300ms ease;
}

.animate {
	position: relative;
	opacity: 1;
}
.close {
	opacity: 0;
}
div > img:hover {
	cursor: pointer;
}
form > input:hover {
	cursor: pointer;
	background-color: #125ed8;
	color: white;
}
</style>
