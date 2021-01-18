// Local Storage Class
class Store {
    static getImages() {
        let images;
        if(localStorage.getItem('images') === null) {
            images = [];
        }else {
            images = JSON.parse(localStorage.getItem('images'));
        }
        return images;
    }

    static findImage(word, imgURL) {
        let found = false;
        const images = Store.getImages();
        if(images !== undefined || images.length > 0) {
            images.forEach(img => {
                if(img['imgURL'] !== undefined && img['imgURL'].length > 0 ) {
                    img['imgURL'].forEach( url => {
                        if(url === imgURL) {
                            found = true;
                        }
                    });
                }
            }); 
        }
        return found;
    }

    static addImage(word, imgURL, audioURL, wordDef) {
        const images = Store.getImages();
        if(images === undefined || images.length == 0) {
            let newWord = {};
            newWord = {
                'word' : word, 
                'imgURL' : [imgURL],
                'audio' : audioURL,
                'def' : wordDef
            }
            images.push(newWord);

        }else {
            let found = false; 
            images.forEach(img => {
                if(img['word'] === word && img['imgURL'].length > 0 ) {
                    img['imgURL'].push(imgURL);
                    found = true;
                }
            });
            if(!found) {
                let newWord = {};
                newWord = {
                    'word' : word, 
                    'imgURL' : [imgURL],
                    'audio' : audioURL,
                    'def' : wordDef
                }
                images.push(newWord);
            }
        }
        localStorage.setItem('images', JSON.stringify(images));
    }

    static removeImage(word, imgURL) {
        const images = Store.getImages();
        images.forEach((img, i) => {
            if(img['imgURL'] !== undefined && img['imgURL'].length > 0 ) {
                img['imgURL'].forEach( (url, index) => {
                    if(url === imgURL) {
                        img['imgURL'].splice(index, 1);
                        if(img['imgURL'].length === 0 ) {
                            images.splice(i, 1); 
                        }
                    }
                });
            }
        });
        localStorage.setItem('images', JSON.stringify(images));
    }
}