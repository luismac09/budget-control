<script setup>
import { ref } from 'vue'
import { setCurrency } from '../helpers'
const props = defineProps({
	budget: {
		type: Number,
		required: true
	}
})
const total = ref(props.budget)
</script>
<template>
	<h3 class="title">Your Budget</h3>
	<div class="wrapper">
		<div class="graph">
			<p>Graph here</p>
		</div>
		<div class="content">
			<p class="total">
				Total: <span class="total-quantity">{{ setCurrency(total) }}</span>
			</p>
			<p class="available">
				Available:
				<span class="available-quantity">{{ setCurrency(0) }}</span>
			</p>
			<p class="expense">
				Expense: <span class="expense-quantity">{{ setCurrency(0) }}</span>
			</p>
		</div>
	</div>
</template>
<style scoped>
.title {
	font-size: 1.5rem;
	color: rgb(38, 34, 43);
	text-transform: uppercase;
}
.wrapper {
	display: flex;
	width: 90%;
	margin: auto;
	justify-content: space-between;
	align-items: center;
}
.graph {
	flex-basis: 65%;
	text-align: center;
}
.content {
	flex-basis: 35%;
}
.total,
.available,
.expense {
	color: rgb(147, 105, 189);
	font-size: 2rem;
	font-weight: 700;
}
.total-quantity,
.available-quantity,
.expense-quantity {
	color: rgb(68, 66, 66);
	font-weight: 400;
}
</style>
