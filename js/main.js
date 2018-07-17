const shtml = document.querySelectorAll("#place")
const refreshBtn = document.querySelector(".refreshBtn")
const newPriceBtn = document.querySelector(".newPriceBtn")

class BitCoin {
    constructor() {
        this.getPrices()
    }
    setPrices(nums) {
        // for (let i = 0; i < nums.length; i++) {
        //     shtml[i + 1].textContent = this.prices[nums[i]].rate.toFixed(2)
        nums.forEach((num, index) => {
            shtml[index + 1].textContent = this.prices[num].rate.toFixed(2)
        })
    }

    getPrices() {
        $.ajax({
            url: "https://bitpay.com/api/rates",
            dataType: "json",
            success: data => {
                console.log(data)
                this.prices = data
                this.setPrices([0, 2, 3, 4, 5, 6])
            },
            error: error => {
                console.log("There was an error")
            }
        })

    }
    refresh() {
        this.getPrices()
    }
}
const bit = new BitCoin()

refreshBtn.addEventListener("click", e => {
    BitCoin.refresh()
})

newPriceBtn.addEventListener("click", e => {
    console.log("it works")
}
)
