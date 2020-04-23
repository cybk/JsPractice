function calculateBill() {
    // This is function body
    console.log('Calculate bill is running');
    const total = 100 * 1.13;

    return Math.round(total);
}

const total = calculateBill();

console.log(`Total: $${total}`);
