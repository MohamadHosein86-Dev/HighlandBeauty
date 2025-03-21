export const formatCurrencyToToman = (value: number) => {
    return new Intl.NumberFormat('fa-IR').format(value) + ' تومان';
}
