export const randomizeId = () =>
	Math.random().toString(36).substring(2) + Date.now().toString(36)

export const setCurrency = coin =>
	coin.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
