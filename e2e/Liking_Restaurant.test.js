const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/like-resto');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');
  I.amOnPage('/');
  I.seeElement('.content__restaurant-title');
  const firstRestaurantName = await I.grabTextFrom('.content__restaurant-title');
  I.click(firstRestaurantName);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/like-resto');
  I.seeElement('.card');
  const likedRestaurantName = await I.grabTextFrom('.content__restaurant-title');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('removing one favorite restaurant', async ({ I }) => {
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');
  I.amOnPage('/');
  I.seeElement('.content__restaurant-title');
  const firstRestaurantName = await I.grabTextFrom('.content__restaurant-title');
  I.click(firstRestaurantName);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/like-resto');
  I.seeElement('.card');
  const likedRestaurantName = await I.grabTextFrom('.content__restaurant-title');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);
  I.amOnPage('/#/like-resto');
  I.seeElement('.content__restaurant-title');
  const firstFavoriteRestaurantName = await I.grabTextFrom('.content__restaurant-title');
  I.click(firstFavoriteRestaurantName);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/like-resto');
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');
});