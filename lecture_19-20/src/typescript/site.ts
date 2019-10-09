import {BlogRenderer} from './siteblocks/blog'

var newBlog = new BlogRenderer(['https://my-json-server.typicode.com/MukhinMikhail/EPM-FE2019/posts', '.blog__container', 3, 1]);
newBlog.render();