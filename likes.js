const ui = new UI();
ui.displayLikes(Store.getImages());

// UI variables
const mainContent = document.getElementById('main-content');

// Init EventListners
loadEventListners();

function loadEventListners(){
    // Add Audio Player
    mainContent.addEventListener('click', addAudioPlayer);
    // Add BookMark Icon 
    mainContent.addEventListener('click', addBookMark)
    // Heart Save Button
    mainContent.addEventListener('click', clickHeart);
};

function addAudioPlayer(e) {
    if(e.target.classList.contains('fa-volume-up')) {
        e.target.nextElementSibling.play();
    }
}

function addBookMark(e) {
    if(e.target.classList.contains('fa-book')) {
        e.target.parentElement.nextElementSibling.classList.toggle('hidden');
    }
}

function clickHeart(e) {
    if(e.target.classList.contains('heart')) {
        if(e.target.classList.contains('save')){
            console.log(e.target);
            e.target.classList.remove('save');
            const word = e.target.parentElement.parentElement.parentElement.parentElement.firstElementChild.textContent;
            const imgURL = e.target.parentElement.parentElement.firstElementChild.src;
            Store.removeImage(word, imgURL);
        }else {
            e.target.classList.add('save'); 
            console.log('e:', e.target.parentElement.parentElement.firstElementChild.src);
            const word = e.target.parentElement.parentElement.parentElement.parentElement.firstElementChild.textContent;
            const imgURL = e.target.parentElement.parentElement.firstElementChild.src;
            Store.addImage(word, imgURL);
        }
    }
}