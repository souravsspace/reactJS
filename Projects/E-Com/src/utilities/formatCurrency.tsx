
const FORMATE_CURRENCY = new Intl.NumberFormat(undefined, {
  style: 'currency',
  currency: 'USD',
});

 const formatCurrency = (amount: number) => {
  return FORMATE_CURRENCY.format(amount);
}

export default formatCurrency;
