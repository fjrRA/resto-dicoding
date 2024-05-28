import RestaurantSource from '../../data/restaurant-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div id="hero" class="hero">
    <div class="hero__title">
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
        repellendus.
      </h1>
      <!-- <a href="#main-content">Lihat Restoran</a> -->
    </div>
  </div>

    <h1 class="section__title">List Restaurant</h1>
    <div id="content" class="card__list"></div>
    `;
  },

  async afterRender() {
    const resto = await RestaurantSource.restaurantLists();
    console.log(resto);
    const restaurantsContainer = document.querySelector('#content');
    resto.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default Home;