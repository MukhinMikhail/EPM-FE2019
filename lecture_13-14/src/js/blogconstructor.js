function avg(item) {
    let summary = item.reduce(function(sum, elem) {
        return ((sum + elem));
    });
    let average = Math.round((summary / item.length) / 100);
    return average;
};

function connectionRequest(url) {
    let xhr = new XMLHttpRequest();
    xhr.open('get', url, true)
    xhr.send();
    xhr.onreadystatechange = function(e) {
        if (xhr.readyState === 4) {
            if (xhr.status != 200) {
                console.log(xhr.status + ': ' + xhr.statusText);
            } else {
                let parsedData = JSON.parse(xhr.response)
                let post = new CreatePosts(parsedData);
                post.render(3, 1)
            }
        }
    }
}

function CreatePosts(data) {
    this.data = data;

    data.sort(function(a, b) {
        return avg(b.Rating) - avg(a.Rating);
    });
}

function RenderFn() {
    this.render;
}

Object.setPrototypeOf(CreatePosts.prototype, RenderFn.prototype)

CreatePosts.prototype.render = function(numberOfItems, iterator) {
    let counter = 0;
    document.querySelector('.container.blog__container.container-fluid').insertAdjacentHTML('beforeend', '<div class="blog__items items row" data-id = "' + iterator + '"></div>');

    //Генерация объектов в html
    this.data.forEach(function(item, index) {
        if (counter < numberOfItems) {
            let topicElements = item.Topics.join(' ');
            let container = document.querySelector('.blog__items[data-id="' + iterator + '"]');
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
            textBlock[index].querySelector('.subject__description').insertAdjacentHTML('beforebegin', '<div class="subject__rating">Рейтинг:' + avg(item.Rating) + ' x </div>')
            counter += 1;
        }
    });
}
connectionRequest('https://my-json-server.typicode.com/MukhinMikhail/EPM-FE2019/posts');