export const removeCommission = (amount: number, commission: number) => {
  return amount * (1 - commission / 100);
};
