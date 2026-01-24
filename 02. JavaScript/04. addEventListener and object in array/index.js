let data = [
    {
        player: "Jane",
        score: 52
    },
    {
        player: "Mark",
        score: 41
    }
]


let janeScore = document.getElementById("btn-jane-score")

janeScore.addEventListener("click", function () {
    console.log(data[0].score)
})