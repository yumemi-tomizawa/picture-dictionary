// Initialize Objects
const picture = new Picture();
const ui = new UI();

// UI variables
const searchIcon = document.getElementById('search-icon');
const searchBox = document.getElementById('search-box');
const searchWord = document.getElementById('search-word');
const audioIcon = document.getElementById('audio-icon');
const bookIcon = document.getElementById('book-icon');
const wordDef = document.getElementById('word-def');
const mainContent = document.getElementById('main-content');

// Init EventListners
loadEventListners();

function loadEventListners(){
    // Search Bar  
    searchIcon.addEventListener('click', searchPicture);
    // Add Audio Player
    audioIcon.addEventListener('click', addAudioPlayer);
    // Add BookMark Icon 
    bookIcon.addEventListener('click', addBookMark);
    // Heart Save Button
    mainContent.addEventListener('click', clickHeart);
};

function searchPicture() {
    let keyword = searchBox.value;
    if(keyword !== ''){
        keyword = checkSpace(keyword);
        // Fetch data concurrently
        picture.getDefAndPicture(keyword)
           .then(res => {
               resData = res[0];
                console.log('resData:', resData)
                console.log('res:', res);
                try {
                    const def = res[0];
                    ui.displayDefinition(def);
                    const pictures = res[1];
                    ui.displayPicture(pictures);
                    mainContent.classList.remove('hidden');
                }catch(err) {
                    mainContent.classList.add('hidden');
                    const errMsg = document.createElement('h1');
                    errMsg.textContent = err;
                    errMsg.id = 'err';
                    errMsg.textContent = err;
                    document.querySelector('.container').appendChild(errMsg);
                    searchBox.value = '';
                    setTimeout(()=>{
                        document.getElementById('err').remove();
                    },3000);
                }
            })
    }else {
        // Will Add Alert
        console.log("You need a word");
    } 
}

function checkSpace(keyword) {
    keyword = keyword.trim();
    // Check if there is space in the keyword
    if(/\s/g.test(keyword)) {
        return newKeyword = keyword.replace(/\s/g, '+');
    }
    return keyword;
}

function addAudioPlayer() {
    if(document.getElementById('audio') !== null) {
        document.getElementById('audio').play(); 
    }
}

function addBookMark() {
    // Fancy way of toggling 
    wordDef.classList.toggle('hidden');
    // Tidious way of toggling
    // if(e.target.classList.contains('hidden')) {
    //     e.target.remove('hidden');
    // }else {
    //     e.target.classList.add('hidden');
    // }
}

function clickHeart(e) {
    if(e.target.classList.contains('heart')) {
        if(e.target.classList.contains('save')){
            e.target.classList.remove('save');
        }else {
            e.target.classList.add('save'); 
        }
    }
}

