class Picture {
    constructor() {
        // This is Pixabay API
        this.api = '19800860-fd81fde52b5686725fdcf6309';
        // Flickr's API
    }
    async getPicture(keyword) {
         let res = await fetch(`https://pixabay.com/api/?key=${this.api}&q=${keyword}&image_type=photo`);
         res = await res.json();
         return res;
    }

}