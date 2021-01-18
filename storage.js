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
            console.log('You enter');
            images.forEach(img => {
                if(img[word] !== undefined && img[word].length > 0 ) {
                    console.log('You enter second if');
                    img[word].forEach( url => {
                        if(url === imgURL) {
                            console.log('You final if');
                            found = true;
                        }
                    });
                }
            }); 
        }
        return found;
    }

    // static displayImages() {
    //     const Images = Store.getImages();
    //     console.log('djkfja;d');

    //     books.forEach( (book) => {
    //         console.log(book);
    //         const ui = new UI;
    //         // Add book to UI
    //         ui.addBooktoList(book);
    //     });


    // }

    static addImage(word, imgURL) {
        const images = Store.getImages();
        if(images === undefined || images.length == 0) {
            let newWord = {};
            newWord[word] = [imgURL];
            images.push(newWord);

        }else {
            let found = false; 
            images.forEach(img => {
                if(img[word] !== undefined && img[word].length > 0 ) {
                    img[word].push(imgURL);
                    found = true;
                }
            });
            if(!found) {
                let newWord = {};
                newWord[word] = [imgURL];
                images.push(newWord);
            }
        }
        localStorage.setItem('images', JSON.stringify(images));
    }

    static removeImage(word, imgURL) {
        const images = Store.getImages();
        images.forEach(img => {
            if(img[word] !== undefined && img[word].length > 0 ) {
                img[word].forEach( (url, index) => {
                    if(url === imgURL) {
                        img[word].splice(index, 1);
                    }
                });
            }
        });
        localStorage.setItem('images', JSON.stringify(images));
    }
}