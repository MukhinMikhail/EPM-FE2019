import {IRenderableInterface} from '../interfaces/Connection'
abstract class AbstractRenderer implements IRenderableInterface{
    tag: string;
    selector: string;
    attr: string;
    text: string;
    source: string;
    container: string;
    items: any;

    addWrapper(tag, selector, attr?): any {
        const wrapper = document.createElement(tag);
        wrapper.className = selector;
        if (attr) {
            this.insertAttribute(attr, wrapper);
        }
        return wrapper;
    }

    addElement(tag, selector, text, attr?): any {
        const elementContainer = document.createElement(tag);
        elementContainer.className = selector;
        elementContainer.textContent = text;
        if (attr) {
            this.insertAttribute(attr, elementContainer);
        }
        return elementContainer;
    }

    addImage(tag, selector, source): any {
        const imageContainer = document.createElement(tag);
        imageContainer.className = selector;
        imageContainer.src = source;
        return imageContainer;
    }

    insertAttribute(attr, container): void {
        const splittedAttr = attr.split('=');
        container.setAttribute(splittedAttr[0], splittedAttr[1]);
    };

    render(selector, items): void {
        const container = document.querySelector(selector);
        container.append(items);
    }
}

export default AbstractRenderer;