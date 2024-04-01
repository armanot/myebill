
function calculateElectricityBill(kWh) {
    let bill = 0;

    // For the first 200 kWh
    if (kWh <= 200) {
        bill += kWh * 0.21;
    } else {
        bill += 200 * 0.21;
        kWh -= 200;

        // For the next 100 kWh (201-300 kWh)
        if (kWh <= 100) {
            bill += kWh * 0.33;
        } else {
            bill += 100 * 0.33;
            kWh -= 100;

            // For the next 300 kWh (301-600 kWh)
            bill += kWh * 0.51;
        }
    }

    return bill;
}

function calculateBill() {
    const kWhInput = document.getElementById("kWhInput").value;
    const kWh = parseFloat(kWhInput);

    if (isNaN(kWh)) {
        document.getElementById("result").textContent = "Please enter a valid number.";
        return;
    }

    const billAmount = calculateElectricityBill(kWh);
    document.getElementById("result").textContent = "Your electricity bill is: $" + billAmount.toFixed(2);
}