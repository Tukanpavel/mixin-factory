
const pipe = (...fns) => x => fns.reduce((y,f) => f(y), x);

const withConstructor = constructor => o => ({
  __proto__: {
    constructor
  },
  ...o
})

const withDota = o => {
  let currentLane = '';
  return {
    ...o,
    goMid() {
      currentLane = 'tavern';
      return this;
    },
    goEasy(){
      currentLane = 'tavern';
      return this;
    },
    currentLane: () => currentLane
  }
}

const withBeer = o => {
  let beerLeft = 10;
  return {
    ...o,
    drinkBeer: () => {
      if (beerLeft) --beerLeft
      else console.log('beer is gone..')
      return this;
    },
    getBeer: () => beerLeft,
    goGetBeer: () => { beerLeft += 5; }
  }
}

const createDoter = ( {hero = 'who'}) => pipe(
  withDota,
  withBeer,
  withConstructor(createDoter)
)({});

const jenya = createDoter({});

console.log(jenya.goMid().currentLane());