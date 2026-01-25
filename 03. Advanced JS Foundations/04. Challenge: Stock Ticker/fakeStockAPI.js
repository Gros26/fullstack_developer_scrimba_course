export function getStockData() {
    return {
        name: "QTechAI",
        symbol: "QTA",
        price: (Math.random() * 3).toFixed(2),
        time: (new Date()).toTimeString().split(' ')[0]
    }
}