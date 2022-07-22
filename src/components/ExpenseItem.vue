<script setup>
import food from '@/assets/images/icon/food.svg'
import health from '@/assets/images/icon/health.svg'
import home from '@/assets/images/icon/home.svg'
import otherExpense from '@/assets/images/icon/other-expense.svg'
import saving from '@/assets/images/icon/saving.svg'
import subscriptions from '@/assets/images/icon/subscriptions.svg'
import treatYourself from '@/assets/images/icon/treat-yourself.svg'
import { ref } from 'vue'
import { formatDate, setCurrency } from '../helpers'

const props = defineProps({
	dataForm: {
		type: Array,
		required: true
	}
})
const iconUrl = ref({
	food,
	health,
	home,
	saving,
	subscriptions,
	'treat yourself': treatYourself,
	'other expense': otherExpense
})
</script>
<template>
	<li v-for="item in props.dataForm" :key="item.id" class="item">
		<img
			:src="iconUrl[item.category]"
			alt="expense icon"
			widht="60"
			height="60"
			class="item-icon"
		/>
		<div class="item-content">
			<div class="item-description">
				<p class="item-date">{{ formatDate(item.date) }}</p>
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
	margin: 1rem 2rem 0 2rem;
}
.item {
	width: 100%;
	position: relative;
	display: flex;
	align-items: center;
	font-size: 1.5rem;
	border-radius: 1em;
	box-shadow: 2px 2px 10px rgb(124, 123, 123);
	padding: 1em 0;
	margin-bottom: 1.5em;
}
.item-icon {
	margin-top: 0.5em;
	margin-left: 1em;
}
.item-content {
	width: inherit;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: rgb(124, 124, 124);
}
.item-date {
	position: absolute;
	left: 0.5em;
	top: 0;
	margin: 0;
	font-size: 1.3rem;
	padding-left: 1em;
	color: rgb(187, 129, 187);
	font-weight: 900;
	text-decoration: underline solid rgb(138, 80, 138);
	text-underline-offset: 0.2em;
}
.item-category {
	font-size: 1.8rem;
	text-transform: capitalize;
}
.item-name {
	font-size: 2.8rem;
	text-transform: capitalize;
	font-weight: 700;
	margin-top: 0;
}
.item-expense {
	font-size: 3rem;
	color: rgb(138, 80, 138);
	font-weight: 900;
}
</style>
