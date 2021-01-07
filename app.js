
// https://dictionaryapi.dev/

const picture = new Picture();
const ui = new UI();

const searchIcon = document.getElementById('search-icon');
const searchBox = document.getElementById('search-box');

searchIcon.addEventListener('click', (e) => {
    // console.log(searchBox.value);
    let keyword = searchBox.value;
    if(keyword !== ''){
        keyword = checkSpace(keyword);
        picture.getPicture(keyword)
            .then(res => {
                // console.log(res);
                ui.displayPicture(res);
            })
    }else {
        console.log("You need a word");
    }
});

function checkSpace(keyword) {
    keyword = keyword.trim();
    // Check if there is space in the keyword
    if(/\s/g.test(keyword)) {
        return newKeyword = keyword.replace(/\s/g, '+');
    }
    return keyword;
}
    