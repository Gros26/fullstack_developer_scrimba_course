function getImagePromise(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const img = new Image()
            img.src = url
            img.alt = 'scenic img'
            img.addEventListener('load', () => resolve(img))
            img.addEventListener('error', () => reject(new Error(`Failed to load image: ${url}`)))
        }, 500)
    })
}

const images = [
    'https://scrimba.com/links/advancedjs-resources-images-scenic1',
    'https://scrimba.com/links/advancedjs-resources-images-scenic2',
    'https://scrimba.com/links/advancedjs-resources-images-scenic3'
]

async function preLoadImages(imagsUrlsArr) {
    const imageContainer = document.getElementById('image-container')
    const uploadContainer = document.getElementById('upload-container')
    const promises = []
    try {
        imagsUrlsArr.forEach(element => {
            promises.push(getImagePromise(element))
        });
        const result = await Promise.all(promises)
        console.log('All images load successfully')
        uploadContainer.style.display = 'none'
        console.log(result)
        result.forEach((img) => imageContainer.appendChild(img))

    } catch (error) {
        console.log(error)
    }
}

document.getElementById('submit-imgs').addEventListener('click', () => preLoadImages(images))
