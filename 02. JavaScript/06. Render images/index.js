// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

function renderImgs(images) {
    const container = document.getElementById("container")
    images.forEach(element => {
        container.innerHTML += `<img class="team-img" src="${element}">`
    });
}

renderImgs(imgs)

