import { getStockData } from "./fakeStockAPI.js";

const stockDisplayName = document.getElementById("name")
const stockDisplaySymbol = document.getElementById("symbol")
const stockDisplayPrice = document.getElementById("price")
const stockDisplayTime = document.getElementById("time")
let oldPrice = 0
let newPrice
let toAdd

renderStockTicker(getStockData())

setInterval(function() {
    const freshData = getStockData()
    renderStockTicker(freshData)
}, 1500)
 

function renderStockTicker(stockData) {
    const {name, symbol, price, time} = stockData
    newPrice = price
    stockDisplayName.textContent = `Name: ${name}`
    stockDisplaySymbol.textContent = `Symbol: ${symbol}`
    toAdd = oldPrice > newPrice ? "📉" : oldPrice < newPrice ? "📈" : "▶️"
    stockDisplayPrice.textContent = `Price: ${price} ${toAdd}`
    stockDisplayTime.textContent = `Time: ${time}`
    oldPrice = newPrice
}