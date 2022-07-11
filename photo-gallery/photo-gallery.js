// get the ids & describes of photos from the API async fetch("http api adress")
async function getPhotosDes() {
    let response = await fetch("photos.json")
    let photos = await response.json()
    return photos
}

// get the images as html adress 
function getPhotosHtml(photos) {
    let myPhotosHtml = photos.map(photo => {
        return `<img class="my-photo" src="https://picsum.photos/id/${photo.id}/100/100" alt="${photo.title}"/>`
    }).join('')
    
    return `<div class="my-photos">${myPhotosHtml}</div>`   
}

getPhotosDes().then(photos => {    
    // display photo gallery
    document.body.innerHTML = `<div class="my-gallery">
        <img style="display: none;" class="my-photo" id="my-selected-photo" src="https://picsum.photos/id/1/200/200" />
        ${getPhotosHtml(photos)}
    </div>`    
    
    let myPhotoImgs = Array.from(document.getElementsByClassName("my-photo"))
    myPhotoImgs.forEach(photoImg => {
        photoImg.addEventListener("click", event => {
            // console.log(photoImg.src)
            let selectedPhotoSrc = photoImg.src.substr(0, photoImg.src.length - 7)
            // alt
            let selectedPhoto = document.getElementById("my-selected-photo")
            // src
            selectedPhoto.src = selectedPhotoSrc
            // display the photos like picked up  
            selectedPhoto.style.display = "inline"
        })
    })
})