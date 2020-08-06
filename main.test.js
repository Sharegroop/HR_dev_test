import { validateOrder } from "./main";
import transactions from "./transactions";

const computeAmountCaptured = (transactions, order) =>
  transactions
    .filter(t => t.order === order.id)
    .reduce((acc, t) => acc + t.amountCaptured, 0);

it("validate order 1", () => {
  const order = {
    id: 1,
    amount: 1000
  };
  validateOrder(order);
  const amountCaptured = computeAmountCaptured(transactions, order);
  expect(amountCaptured).toBe(order.amount);
});

it("validate order 2", () => {
  const order = {
    id: 2,
    amount: 1000
  };
  validateOrder(order);
  const amountCaptured = computeAmountCaptured(transactions, order);
  expect(amountCaptured).toBe(order.amount);
});

it("validate order 3", () => {
  const order = {
    id: 3,
    amount: 1000
  };
  validateOrder(order);
  const amountCaptured = computeAmountCaptured(transactions, order);
  expect(amountCaptured).toBe(order.amount);
});
