
document.getElementById("convertBtn").addEventListener("click", function() { 
const robuxAmount = document.getElementById("robuxAmount").value; 
const exchangeRate = 160; // Rp 16,000 / 100 robux = Rp 160 per robux 
const rupiahAmount = robuxAmount * exchangeRate; 
const formattedRupiah = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(rupiahAmount); 
//const formattedRupiah = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(rupiahAmount); 
//document.getElementById("result").textContent = `${robuxAmount} Robux = ${formattedRupiah}`; 
document.getElementById("result").textContent = `${formattedRupiah}`; 
}); 
                                            
