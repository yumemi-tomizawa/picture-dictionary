class Picture {
    constructor() {
        // This is Pixabay API
        this.api = '19800860-fd81fde52b5686725fdcf6309';
        // Flickr's API
    }
    async getDefAndPicture(keyword) {
        // Open Source Dictionary API => [ https://dictionaryapi.dev/ ] 
        let def = fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`).then(res => res.json());
        let pic = fetch(`https://pixabay.com/api/?key=${this.api}&q=${keyword}&image_type=photo`).then(res => res.json());
        var res
        try {
            res = await Promise.all([def, pic]);
        }catch(err) {
            console.log(err);
        }
        return res;
    }

}