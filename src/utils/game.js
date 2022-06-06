const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

const getRandomInt = () => Math.floor(Math.random() * 14);

export const dealCard = () => cards[getRandomInt()];
