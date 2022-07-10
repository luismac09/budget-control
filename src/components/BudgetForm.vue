<template>
	<form class="form">
		<div class="field">
			<label class="label">Add Budget</label>
			<input class="input" type="text" placeholder="Add your budget" />
		</div>
		<input class="submit" type="submit" value="Add" />
	</form>
</template>
<style scoped>
.form {
	width: 95%;
	margin: auto;
	padding: 5rem 0;
	text-align: center;
}
.field {
	margin-bottom: 2rem;
}
.label {
	display: block;
	font-size: 2.8rem;
	margin-bottom: 2rem;
	text-align: center;
}
.input {
	width: 100%;
	background-color: rgb(214, 208, 208);
	border-radius: 1.2rem;
	height: 45px;
	border: none;
	font-size: 1.6rem;
	padding-left: 1rem;
}
.submit {
	background-color: rgba(105, 35, 163, 0.51);
	border: none;
	height: 40px;
	padding: 0 6rem;
	color: white;
	font-size: 1.9rem;
	text-transform: uppercase;
	font-weight: 900;
	border-radius: 2rem;
	transition: background-color 300ms ease;
}
form > input:hover {
	cursor: pointer;
	background-color: rgba(195, 137, 241, 0.51);
}
div > input:focus {
	outline: none;
	border: none;
}
</style>
