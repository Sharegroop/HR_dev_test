// eslint-disable-next-line no-unused-vars
import transactions from "./transactions";

// eslint-disable-next-line no-unused-vars
async function capture(transaction, amount) {
  if (
    amount > 0 &&
    amount <= transaction.amountAuthorized &&
    !transaction.amountCaptured
  )
    transaction.amountCaptured = amount;
  return transaction;
}

async function validateOrder(order) {
  // TODO

  return order;
}

export { validateOrder };
