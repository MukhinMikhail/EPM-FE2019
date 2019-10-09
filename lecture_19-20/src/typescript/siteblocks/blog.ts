import { IBlogPostData } from '../helpers/interfaces/BlogDataPost';
import AbstractRenderer from '../helpers/render/abstractRender';

export class BlogRenderer extends AbstractRenderer implements IBlogPostData {
    constructor(public BlogPostData: [string, string, number, number]) {
        super();
    }

    private calculateAverage(item: any): number {
        let summary = item.reduce((sum, elem) => {
            return sum + elem
        });
        let average = Math.round((summary / item.length) / 100);
        return average;
    }

    private sortElems(elems: any): any {
        elems.sort((a: any, b: any): any => {
            return this.calculateAverage(b.Rating) - this.calculateAverage(a.Rating)
        });
        return elems;
    }

    private connection(url: string): any {
        return fetch(url)
            .then(response => response.json())
            .catch(err => console.error('Fetch error: ', err))
    }

    render(): void {
        const url: string = this.BlogPostData[0];
        const container: string = this.BlogPostData[1];
        const count: number = this.BlogPostData[2];
        const iterator: number = this.BlogPostData[3];
        this.connection(url).then(items => {
            const posts = this.sortElems(items);
            let blogItemsLimited = posts.slice(0, count);
            let blogBlock = super.addWrapper('div', 'blog__items items row', 'data-id=' + iterator);
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
                let blogRating = super.addElement('div', 'subject__rating', 'Рейтинг: ' + this.calculateAverage(element.Rating));
                let blogDescription = super.addElement('p', 'subject__description', descriptionText);
                let blogButton = super.addElement('button', 'subject__button button button_medium', 'Buy');

                blogImageContainer.append(blogImage, blogTags);
                blogTextContainer.append(blogText, blogTime, blogRating, blogDescription, blogButton);
                blogWrapper.append(blogImageContainer, blogTextContainer);
                blogBlock.append(blogWrapper);
            });
            super.render(container, blogBlock);
        });
    }

    

}

