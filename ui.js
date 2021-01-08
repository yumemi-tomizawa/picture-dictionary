class UI {
    constructor() {
        this.pictureGrid = document.getElementById('picture-container');
    }

    displayDefinition(def) {
        const whatFK = def;
        console.log('whatFK:', whatFK.title)
        if(def.title === undefined) {
             console.log('Enter if:', def)
             const word = def[0].word;
             const definition = def[0].meanings[0].definitions[0].definition;
             const audioURL = def[0].phonetics[0].audio
             searchWord.textContent = word;
            // Display Icons 
            document.querySelectorAll(".hidden").forEach(h => {
                h.classList.remove('hidden');
            });
             wordDef.textContent = definition;
             const audioTag = document.createElement('audio');
             audioTag.id = 'audio';
             audioTag.src = audioURL;
             audioIcon.appendChild(audioTag);
        }else if(def.title === "No Definitions Found") {
            throw "No Definitions Found";
        }
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