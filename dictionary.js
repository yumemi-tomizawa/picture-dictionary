// https://dictionaryapi.dev/
// https://api.dictionaryapi.dev/api/v2/entries/en/<word>

class Dictionary {
    async getDefinition(word) {
        let res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        res = await res.json(); 
        return res;
    }
}
