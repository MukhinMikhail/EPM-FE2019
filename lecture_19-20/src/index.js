import "./scss/style.scss";
import "./typescript/site";
import "./assets/FontAwesome/all.scss";

function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('./assets/img', true, /\.(png|jpe?g|svg)$/));
const fonts = importAll(require.context('./assets/FontAwesome/webfonts', true, /\.(ttf|woff)$/));