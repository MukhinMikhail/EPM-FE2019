let articles = [];
let articlesLenght = 30;
let tags = ['Topic1', 'Topic2', 'Topic3', 'Topic4', 'Topic5', 'Topic6', 'Topic7', 'Topic8', 'Topic9', 'Topic10', 'Topic11', 'Topic12', 'Topic13', 'Topic14', 'Topic15', 'Topic16', 'Topic17', 'Topic18', 'Topic19', 'Topic20'];

//Переназначение и заполнение пустого массива articles данными 
(function createArray(length) {
    articles = Array(length).fill().map(function (current, index) {
        let elems = Object.assign({}, current);
        let count = index + 1;

        elems.Id = count;
        elems.Title = 'Title ' + count;
        elems.Rating = randomizeRating(10, 1000);
        elems.Topics = randomizeTopic(tags);
        return elems;
    });
})(articlesLenght);

//Функция, возвращающая рандомное значение
function random(count) {
    return Math.round(Math.random() * count);
}

function randomWithRange(min, max) {
    return min + Math.random() * (max - min);
}

//Функция, вызов который возвращает массив рейтинга из случайных чисел 
function randomizeRating(count, max) {
    return Array(count).fill().map(function () {
        return random(max);
    });
}

//Функия, рандомизирующая количество и набор топиков
function randomizeTopic(topics) {
    let slicedTags = [];

    topics.forEach(function (item, index, array) {
        let mainValue = random(array.length - 1);
        let tempValue = random(array.length - 1);
        let templateArray = array[mainValue];
        array[mainValue] = array[tempValue];
        array[tempValue] = templateArray;
    });
    slicedTags = topics.slice(0, randomWithRange(1, 21));
    return slicedTags;
}

//Функция, высчитывающая среднее значение рейтинга
function setAverageRating(item) {
    let summaryRating = item.reduce(function (sum, elem) {
        return ((sum + elem));
    });
    let averageRating = Math.round((summaryRating / item.length) / 100);
    return averageRating;
}

//Соритровка рейтинга по убыванию
articles.sort(function (a, b) {
    return setAverageRating(b.Rating) - setAverageRating(a.Rating);
});

//Переменный ограничители для выводи элементов в блок
let numberOfItems = 3;
let counter = 0;

// Функция вывода элемента в блок
articles.forEach(function (item, index) {
    if (counter < numberOfItems) {
        var topicElements = item.Topics.join(' ');
        document.querySelectorAll('.blog .subject__title')[index].textContent = item.Title;
        let topic = document.createElement('div');
        topic.className = 'subject__topic';
        topic.innerHTML = topicElements;
        document.querySelectorAll('.blog .subject__image-container')[index].append(topic);
        let rating = document.createElement('div');
        rating.className = 'subject__rating';
        rating.innerHTML= 'Рейтинг: ' + setAverageRating(item.Rating)+ ' x ';
        document.querySelectorAll('.blog .subject__date')[index].after(rating);
        counter += 1;
    }
});


