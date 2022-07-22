<script setup>
import { useVuelidate } from '@vuelidate/core'
import { helpers, required } from '@vuelidate/validators'
import { computed, reactive } from 'vue'

const emits = defineEmits(['saveDataForm'])
const state = reactive({
	name: '',
	expense: 0,
	category: ''
})
const rules = computed(() => {
	return {
		name: { required },
		expense: {
			required,
			mustNotBeZero: helpers.withMessage(
				'must not be Zero',
				value => value > 0
			),
			mustBePositiveNumber: helpers.withMessage(
				'must be positive number',
				value => value > 0
			)
		},
		category: { required }
	}
})

const v$ = useVuelidate(rules, state)

const handleSubmit = async () => {
	const isValid = await v$.value.$validate()
	if (!isValid) {
		return
	}
	emits('saveDataForm', state)
}
</script>
<template>
	<form class="form text-shadow" @submit.prevent="handleSubmit">
		<legend class="legend">Edit your new Expense</legend>
		<div class="field">
			<label class="label" for="name" title="give your expense a name"
				>Name</label
			>
			<input
				id="name"
				v-model="state.name"
				class="input"
				type="text"
				placeholder="Name"
			/>
			<span v-if="v$.name.$error">{{ v$.name.$errors[0].$message }}</span>
		</div>
		<div class="field">
			<label class="label" for="expense" title="give your expense"
				>Expense</label
			>
			<input
				id="expense"
				v-model="state.expense"
				class="input"
				type="number"
				placeholder="Expense"
			/>
			<span v-if="v$.expense.$error">{{ v$.expense.$errors[0].$message }}</span>
		</div>
		<div class="field">
			<label class="label" for="category" title="give your expense a category"
				>Category</label
			>
			<select id="category" v-model="state.category" class="input">
				<option disabled value="">-------Select-------</option>
				<option>saving</option>
				<option>food</option>
				<option>home</option>
				<option>treat yourself</option>
				<option>health</option>
				<option>subscriptions</option>
				<option>other expense</option>
			</select>
			<span v-if="v$.category.$error">{{
				v$.category.$errors[0].$message
			}}</span>
		</div>
		<input type="submit" class="submit" value="Hecho" />
	</form>
</template>
<style scoped>
.form {
	max-width: 40rem;
	width: 95%;
	margin: auto;
	--color: #9032dd;
	color: var(--color);
}
.text-shadow {
	text-shadow: 0 0 5px rgb(121, 119, 119);
}
.legend {
	font-size: 2.5rem;
	text-align: center;
	text-transform: uppercase;
	margin-bottom: 4rem;
	padding-top: 2.4em;
	font-weight: 900;
}
@media screen and(min-width:576px) {
	.legend {
		font-size: 3rem;
	}
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
	width: 100%;
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
	color: var(--color);
	transition: background-color 300ms ease, color 300ms ease;
}
.field > span {
	font-size: 1.4rem;
	color: red;
	text-align: right;
	padding-top: 0.4em;
	padding-right: 1em;
}
form > input:hover {
	cursor: pointer;
	background-color: var(--color);
	color: white;
}
</style>
