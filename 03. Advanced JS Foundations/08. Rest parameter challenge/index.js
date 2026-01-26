let htmlTemplate = ""

function getLabelsHtml(text, sender, ...labels) {
/*
Challenge:
2. Update the HTML template where you 
   see **NAME**.
3. Return HTML template for each label.
*/

// `<div class="label-card">
//     <p>Dear **NAME** </p>
//     <p>${text}</p>
//     <p>Best wishes,</p>
//     <p>${sender}</p>
// </div>`
    labels.forEach(element => {
        htmlTemplate +=`<div class="label-card">
                            <p>Dear ${element.name} </p>
                            <p>${text}</p>
                            <p>Best wishes,</p>
                            <p>${sender}</p>
                        </div>`
    });

    return htmlTemplate
}

const text = 'Thank you for all your hard work throughout the year! 🙏🎁'
const sender = 'Tom'

document.getElementById('labels-container').innerHTML = getLabelsHtml(
    text, 
    sender, 
    {name: 'Sally'}, 
    {name: 'Mike'}, 
    {name: 'Rob'}, 
    {name: 'Harriet'},
    {name: "Gros"},
    {name: "GG"}
) 