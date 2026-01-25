import { getStockData } from "./fakeStockAPI.js";

const stockDisplayName = document.getElementById("name")
const stockDisplaySymbol = document.getElementById("symbol")
const stockDisplayPrice = document.getElementById("price")
const stockDisplayTime = document.getElementById("time")
let oldPrice = 0
let newPrice
let toAdd

renderStockTicker(getStockData())

function getFreshStockData() {
    const freshData = getStockData()
    renderStockTicker(freshData)
}
 

function renderStockTicker(stockData) {
    newPrice = stockData.price
    stockDisplayName.textContent = `Name: ${stockData.name}`
    stockDisplaySymbol.textContent = `Symbol: ${stockData.symbol}`
    toAdd = oldPrice > newPrice ? "📉" : oldPrice < newPrice ? "📈" : "▶️"
    stockDisplayPrice.textContent = `Price: ${stockData.price} ${toAdd}`
    stockDisplayTime.textContent = `Time: ${stockData.time}`
    oldPrice = newPrice
    setTimeout(getFreshStockData, 1500)
}