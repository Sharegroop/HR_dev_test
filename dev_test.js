let transactions = [
	{
		order: 1,
		amountAuthorized: 1000,
		amountCaptured: 0,
		amount: 333
	},
	{
		order: 1,
		amountAuthorized: 333,
		amountCaptured: 0,
		amount: 333
	},
	{
		order: 1,
		amountAuthorized: 334,
		amountCaptured: 0,
		amount: 334
	},
	{
		order: 2,
		amountAuthorized: 1000,
		amountCaptured: 0,
		amount: 333
	},
	{
		order: 2,
		amountAuthorized: 333,
		amountCaptured: 0,
		amount: 333
	},
	{
		order: 3,
		amountAuthorized: 333,
		amountCaptured: 0,
		amount: 333
	},
	{
		order: 3,
		amountAuthorized: 333,
		amountCaptured: 0,
		amount: 333
	},
	{
		order: 3,
		amountAuthorized: 333,
		amountCaptured: 0,
		amount: 333
	},
	{
		order: 3,
		amountAuthorized: 333,
		amountCaptured: 0,
		amount: 333
	},
]

let orders = [
	{
		id: 1,
		amount: 1000
	},
	{
		id: 2,
		amount: 1000
	},
	{
		id: 3,
		amount: 1000
	}
]

async function capture(transaction, amount) {
	if (amount > 0 && amount <= transaction.amountAuthorized && !transaction.amountCaptured)
		transaction.amountCaptured = amount;
	return transaction;
}

function orderValid(order) {
	order.amountCaptured = transactions
		.filter(transaction => transaction.order === order.id)
		.reduce((acc, t) => acc + (t.amountCaptured || 0), 0)
	return order.amountCaptured === order.amount;
}

function allOrdersValid() {
	return orders.every(orderValid)
}

async function validateOrder(order) {
	return order;
}

Promise.all(orders.map(order => validateOrder(order)))
.then((orders) => {
	console.log('order 1:', orderValid(orders[0]))
	console.log('order 2:', orderValid(orders[1]))
	console.log('order 3:', orderValid(orders[2]))

	if (allOrdersValid()) {
		console.log('well done !');
	} else {
		console.log('try again !')
	}
})
