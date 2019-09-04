function СreateArray(length) {
    //Функция, возвращающая рандомное значение
    let random = function(count) {
        return Math.round(Math.random() * count)
    };

    let extremumRandom = function(min, max) {
        return Math.random() * (max - min) + min;
    };

    //Функция, вызов который возвращает массив рейтинга из случайных чисел 
    let rating = function(count, max) {
        return Array(count).fill().map(function() {
            return random(max)
        });
    };

    //Вычисление среднего арифметического для рейтинга
    let avgRating = function(item) {
        let summaryRating = item.reduce(function(sum, elem) {
            return ((sum + elem));
        });
        let averageRating = Math.round((summaryRating / item.length) / 100);
        return averageRating;
    };

    //Функция, возвращающая случайный набор топиков
    let topic = function(minRandomValue, maxRandomValue) {
            let tags = ['Topic1', 'Topic2', 'Topic3', 'Topic4', 'Topic5', 'Topic6', 'Topic7', 'Topic8', 'Topic9', 'Topic10', 'Topic11', 'Topic12', 'Topic13', 'Topic14', 'Topic15', 'Topic16', 'Topic17', 'Topic18', 'Topic19', 'Topic20'];
            let slicedTags = [];

            tags.forEach(function(item, index, array) {
                let mainValue = random(array.length - 1);
                let tempValue = random(array.length - 1);
                let templateArray = array[mainValue];
                array[mainValue] = array[tempValue];
                array[tempValue] = templateArray;
            });

            slicedTags = tags.slice(0, extremumRandom(minRandomValue, maxRandomValue));
            return slicedTags;
        }
        //создание свойства article, которое возвращает массив, заполенный объектами. 
    this.article = new Array(length).fill(null).map(function(current, index) {
            let elems = Object.assign({}, current);
            let count = index + 1;

            elems.id = count;
            elems.Title = 'Title ' + count;
            elems.Rating = rating(10, 1000);
            elems.Topics = topic(1, 20);
            elems.ratingAverage = avgRating(elems.Rating);
            return elems;
        })
        .sort(function(a, b) {
            return avgRating(b.Rating) - avgRating(a.Rating);
        });
}
//Неследуем свойство render конструктором СreateArray
СreateArray.prototype.render = function(numberOfItems, iterator) {
    let counter = 0;
    let container = document.createElement('div');

    container.className = 'blog__items items row';
    document.querySelector('.container.blog__container.container-fluid').insertAdjacentHTML('beforeend', '<div class="blog__items items row" data-id = "' + iterator + '"></div>');

    //Генерация объектов в html
    this.article.forEach(function(item, index) {
        if (counter < numberOfItems) {
            let topicElements = item.Topics.join(' ');
            let container = document.querySelector('.blog__items[data-id="' + iterator + '"]');
            container.style.padding = '20px 0';
            document.querySelector('.blog .blog__items[data-id="1"]').style.padding = '0 0 20px';
            container.insertAdjacentHTML('beforeend',
                '<div class="items__subject subject col-8 col-lg-4" tabindex="0">' +
                '<div class="subject__image-container w-100">' +
                '<img class="subject__image" src="assets/img/blog-image0' + (counter + 1) + '.png" alt="blog-image0' + (counter + 1) + '">' +
                '</div>' +
                '<div class="subject__info-block">' +
                '<time class="subject__date" datetime="2015-01-15">15 Jan, 2015</time>' +
                '<p class="subject__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel odio vel felis placerat pharetra ut vitae felis. </p>' +
                '<button class="subject__button button button_medium">READ MORE</button>' +
                '</div>' +
                '</div>');
            let imageBlock = container.querySelectorAll('.subject__image-container');
            let textBlock = container.querySelectorAll('.subject__info-block');

            textBlock[index].insertAdjacentHTML('afterbegin', '<p class="subject__title">' + item.Title + '</p>');
            imageBlock[index].insertAdjacentHTML('beforeend', '<div class="subject__topic">' + topicElements + '</div>');
            textBlock[index].querySelector('.subject__description').insertAdjacentHTML('beforebegin', '<div class="subject__rating">Рейтинг:' + item.ratingAverage + ' x </div>')
            counter += 1;
        }
    });
}

//Cоздиние экземпляров конструктора
let blogFirst = new СreateArray(30);
let blogSecond = new СreateArray(30);

//Вызов наследуемой функции
blogFirst.render(3, 1);
blogSecond.render(3, 2);