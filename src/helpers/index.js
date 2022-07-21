export const randomizeId = () =>
	Math.random().toString(36).substring(2) + Date.now().toString(36)

export const setCurrency = coin =>
	coin.toLocaleString('en-US', { style: 'currency', currency: 'USD' })

export const formatDate = date => {
	const newDate = new Date(date)
	return newDate.toLocaleDateString('en-US', {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: '2-digit'
	})
}
