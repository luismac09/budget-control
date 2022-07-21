<script setup>
import ExpenseItem from './ExpenseItem.vue'
const props = defineProps({
	dataForm: {
		type: Array,
		required: true
	}
})
</script>
<template>
	<section v-if="props.dataForm.length" class="wrapper">
		<h3 class="title">Your Expenses</h3>
		<ul class="list">
			<expense-item :data-form="props.dataForm" />
		</ul>
	</section>
	<div v-else class="no-expense">No Expenses</div>
</template>
<style scoped>
.wrapper {
	width: 90%;
	max-width: 80rem;
	padding: 1em;
	margin: auto;
	background-color: white;
	border-radius: 2rem;
	box-shadow: 0px 9px 10px -8px rgb(233 230 235 / 51%);
}
.title {
	text-transform: uppercase;
	font-size: 1.5rem;
	text-align: center;
	margin-bottom: 2em;
}
.list {
	width: 95%;
	margin: auto;
	list-style: none;
	padding-left: 0;
}
</style>
