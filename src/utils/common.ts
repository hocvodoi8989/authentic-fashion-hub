export const convertVnd = (price: number) => {
  return new Intl.NumberFormat("en-VN").format(price);
};
