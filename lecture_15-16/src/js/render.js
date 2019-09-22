class RenderFn {
    addWrapper(tag, selector, attr) {
        let wrapper = document.createElement(tag);
        wrapper.className = selector;
        if (attr) {
            this.insertAttribute(attr, wrapper);
        }
        return wrapper;
    }

    addElement(tag, selector, text, attr) {
        let elementContainer = document.createElement(tag);
        elementContainer.className = selector;
        elementContainer.textContent = text;
        if (attr) {
            this.insertAttribute(attr, elementContainer);
        }
        return elementContainer;
    }

    addImage(tag, selector, source) {
        let imageContainer = document.createElement(tag);
        imageContainer.className = selector;
        imageContainer.src = source;
        return imageContainer;
    }

    insertAttribute(attr, container) {
        let splittedAttr = attr.split('=');
        container.setAttribute(splittedAttr[0], splittedAttr[1]);
    };

    render(selector, items) {
        let container = document.querySelector(selector);
        container.append(items);
    }
}

export default RenderFn;