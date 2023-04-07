export const addCommission = (amount: number, commission: number) => {
  return amount / (1 - commission / 100);
};
