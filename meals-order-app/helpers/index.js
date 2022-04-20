export const formatMoney = (amount) => {
  return amount.toLocaleString("es-ES", {
    style: "currency",
    currency: "EUR",
  });
};
