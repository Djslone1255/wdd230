const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

function displayList(item) {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = item;
        console.log(item);
        deleteButton.textContent = 'X';
        li.append(deleteButton);
        list.append(li);
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            deleteChapter(li.textContent);
            input.focus();
        });
        input.focus();
        input.value = '';
};

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length -1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}

button.addEventListener('click', function() {
    if(document.getElementById("list").getElementsByTagName("li").length < 10) {
        if(input.value != '') {
            let text = input.value;
            displayList(text);
            chaptersArray.push(text);
            setChapterList();
            input.value = '';
            input.focus();
        }
        else {
            return input.focus();
        }
    }
    else {
        return input.focus();
    }
});

