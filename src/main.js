import { fetchImages } from './js/pixabay-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import "./styles.css";

const form = document.querySelector('#search-form');
const input = document.querySelector('#search-input');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = input.value.trim();
    if (!query) {
        iziToast.warning({
            title: 'Warning',
            message: 'Please enter a search query',
        });
        return;
    }
    fetchImages(query);
    input.value = '';
});
    // webpack.config.js
    module.exports = {
     module: {
      rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
          },
      ],
      },
    };
