import PostRequest from './request.js';
import RenderFn from './render.js';

class Blog extends RenderFn {
    constructor(posts, selector, count, iterator) {
        super();
        this.selector = selector;
        this.count = count;
        this.posts = this.sortElems(posts);
        this.iterator = iterator;
    }

    avg = (item) => {
        let summary = item.reduce((sum, elem) => {
            return sum + elem
        });
        let average = Math.round((summary / item.length) / 100);
        return average;
    }

    sortElems(elems) {
        elems.sort((a, b) => {
            return this.avg(b.Rating) - this.avg(a.Rating)
        });
        return elems;
    }

    render() {
        let blogItemsLimited = this.posts.slice(0, this.count);

        let blogBlock = super.addWrapper('div', 'blog__items items row', 'data-id=' + this.iterator);
        blogItemsLimited.forEach((element, i) => {
            const countImgae = i + 1;
            const joinedTopics = element.Topics.join(' ');
            const descriptionText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel odio vel felis placerat pharetra ut vitae felis.';

            let blogWrapper = super.addWrapper('div', 'items__subject subject col-8 col-lg-4', 'tabindex=0');
            let blogImageContainer = super.addWrapper('div', 'subject__image-container w-100');
            let blogImage = super.addImage('img', 'subject__image', 'assets/img/blog-image0' + countImgae + '.png');
            let blogTags = super.addElement('div', 'subject__topic', joinedTopics);
            let blogTextContainer = super.addWrapper('div', 'subject__info-block');
            let blogText = super.addElement('p', 'subject__title', element.Title);
            let blogTime = super.addElement('div', 'subject__date', '15 Jan, 2015', 'datetime=2015-01-15');
            let blogRating = super.addElement('div', 'subject__rating', 'Рейтинг: ' + this.avg(element.Rating));
            let blogDescription = super.addElement('p', 'subject__description', descriptionText);
            let blogButton = super.addElement('button', 'subject__button button button_medium', 'Buy');

            blogImageContainer.append(blogImage, blogTags);
            blogTextContainer.append(blogText, blogTime, blogRating, blogDescription, blogButton);
            blogWrapper.append(blogImageContainer, blogTextContainer);
            blogBlock.append(blogWrapper);
        });
        super.render(this.selector, blogBlock);
    }
}

let blogRequest = new PostRequest().connection('https://my-json-server.typicode.com/MukhinMikhail/EPM-FE2019/posts');
blogRequest.then(items => new Blog(items, '.blog__container', 3, 1).render());