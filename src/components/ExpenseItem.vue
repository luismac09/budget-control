<script setup>
import { setCurrency } from '../helpers'
const props = defineProps({
	dataForm: {
		type: Array,
		required: true
	}
})
</script>
<template>
	<li v-for="item in props.dataForm" :key="item.id" class="item">
		<div class="item-content">
			<div class="item-description">
				<p class="item-category">{{ item.category }}</p>
				<p class="item-name">{{ item.name }}</p>
			</div>
			<div>
				<p class="item-expense">{{ setCurrency(item.expense) }}</p>
			</div>
		</div>
	</li>
</template>
<style scoped>
p {
	position: relative;
	margin: 1rem 2rem 0 2rem;
}
.item {
	width: 100%;
	display: flex;
	font-size: 1.5rem;
	border-radius: 1em;
	box-shadow: 2px 2px 10px rgb(124, 123, 123);
	padding: 1em 0;
}
.item-content {
	width: inherit;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: rgb(124, 124, 124);
}
.item-category {
	font-size: 1.8rem;
}
.item-name {
	font-size: 2.8rem;
	text-transform: capitalize;
	font-weight: 700;
}
.item-expense {
	font-size: 3rem;
	color: rgb(138, 80, 138);
	font-weight: 900;
}
</style>
