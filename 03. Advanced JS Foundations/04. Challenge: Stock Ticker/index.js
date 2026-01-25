import { getStockData } from "./fakeStockAPI.js";

const stockDisplayName = document.getElementById("name")
const stockDisplaySymbol = document.getElementById("symbol")
const stockDisplayPrice = document.getElementById("price")
const stockDisplayTime = document.getElementById("time")


renderStockTicker(getStockData())

function getFreshStockData() {
    const freshData = getStockData()
    renderStockTicker(freshData)
}


function renderStockTicker(stockData) {
    stockDisplayName.textContent = `Name: ${stockData.name}`
    stockDisplaySymbol.textContent = `Symbol: ${stockData.symbol}`
    stockDisplayPrice.textContent = `Price: ${stockData.price}`
    stockDisplayTime.textContent = `Time: ${stockData.time}`

    setTimeout(getFreshStockData, 1500)
}