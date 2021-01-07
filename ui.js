class UI {
    constructor() {
        this.pictureGrid = document.getElementById('picture-container');
    }

    displayPicture(pictures) {
        if(pictures.totalHits > 0) {
            pictures.hits.forEach((pic, index)=> {
                console.log('pic:', pic);
                this.pictureGrid.innerHTML += `
                    <div id="pic-${index}" class="picture">
                        <img src="${pic.previewURL}">
                    </div>
                `;
            })
        }else {
            // No picture to display
            this.pictureGrid.innerHTML = `<h1>Sorry... No picture was found</h1>`
        }
    }
}