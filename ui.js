class UI {
    constructor() {
        this.pictureGrid = document.querySelector('.picture-container');
        this.mainContent = document.getElementById('main-content');
    }

    displayDefinition(def) {
        if(def.title === undefined) {
             const word = def[0].word;
             const definition = def[0].meanings[0].definitions[0].definition;
             const audioURL = def[0].phonetics[0].audio;
             searchWord.textContent = word;
            // Display Icons 
            document.querySelectorAll(".hidden").forEach(h => {
                h.classList.remove('hidden');
            });
             wordDef.textContent = definition;
             if(document.getElementById('audio') !== null) {
                const audioTag = document.getElementById('audio');
                audioTag.src = audioURL;
             }else {
                const audioTag = document.createElement('audio'); 
                audioTag.id = 'audio';
                audioTag.src = audioURL;
                audioIcon.appendChild(audioTag);
             }
        }else if(def.title === "No Definitions Found") {
            throw "Sorry... No Definitions Found";
        }
    }

    displayPicture(pictures) {
        if(pictures.totalHits > 0) {
            let output = '';
            const word = searchWord.textContent;
            pictures.hits.forEach((pic, index)=> {
                if(Store.findImage(word, pic.previewURL) === true){
                    output += `
                        <div id="pic-${index}" class="picture">
                            <img src="${pic.previewURL}">
                            <div class="heart-box">
                                <div class="heart save"></div>
                            </div>
                        </div>
                    `;
                }else{
                    output += `
                        <div id="pic-${index}" class="picture">
                            <img src="${pic.previewURL}">
                            <div class="heart-box">
                                <div class="heart"></div>
                            </div>
                        </div>
                    `;
                }
            })
            this.pictureGrid.innerHTML = output;
        }else {
            // No picture to display
            this.pictureGrid.innerHTML = `<h1>Sorry... No picture was found</h1>`
        }
    }

    displayLikes(images) {
        images.forEach(img => {
           const word = img['word']; 
           const audioURL = img['audio'];
           const def = img['def'];
           let output = '';
           output = `
                <div class="search-result" class="text-left">
                    <h3 class="search-word">${word}</h3>
                    <div class="audio-icon">
                        <i class="fas fa-volume-up"></i>
                        <audio class="audio" src="${audioURL}"></audio>
                    </div>
                    <div class="book-icon"><i class="fas fa-book "></i></div>
                    <p class="word-def hidden">${def}</p>
                </div>
                <hr>
                <br/>
           `;
           let pictures = '';
           img['imgURL'].forEach((imgURL, index) => {
                pictures += `
                    <div id="pic-${index}" class="picture">
                        <img src="${imgURL}">
                        <div class="heart-box">
                            <div class="heart save"></div>
                        </div>
                    </div>
                `; 
            });
            const wrapper = document.createElement('div');
            wrapper.innerHTML = output;
            const pictureContainer = document.createElement('div');
            pictureContainer.classList.add('picture-container');
            pictureContainer.innerHTML = pictures;
            wrapper.appendChild(pictureContainer);
            this.mainContent.appendChild(wrapper);
            // this.mainContent.appendChild(pictureContainer);
        });
    }
}


