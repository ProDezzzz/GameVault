<script>
// Exchange rate: 100 Robux = Rp 20,000
    const exchangeRate = 20000 / 100;

    // Function to convert Robux to IDR
    function convertToIDR() {
        // Get the Robux input value from an input field with the id 'robux'
    }
    // Get the Robux input value from an input field with the id 'robux'
    const robux = document.getElementById('robux').value;

    // Validate the input to ensure it's a valid number
    if (robux && robux > 0) {
        // Convert Robux to IDR
    }
        // Convert Robux to IDR
    const idr = robux * exchangeRate;

    // Display the Robux and IDR values in elements with ids 'robuxAmount' and 'idrAmount'
    document.getElementById('robuxAmount').textContent = robux;
    document.getElementById('idrAmount').textContent = idr.toFixed(2);
    } else {
        // If no valid input is provided, display an error message in the result section
        document.getElementById('result').innerHTML = "<p>Please enter a valid number of Robux.</p>"};
    }
}
</script>;
