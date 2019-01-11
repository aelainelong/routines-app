import * as data from './data.json';

const user = data.user.name;
// const settings = data.user.settings;
const routines = data.user.routines;
const products = data.user.products;

const client = {
  user: user,
  routines: routines,
  products: products,

  // Routine methods

  getRoutinesByTime: (timePhase) => {
    return routines.filter(routine => routine.time_phase === timePhase);
  },

  getRoutinesByTag: (tag) => {
    return routines.filter(routine => routine.tags.indexOf(tag) !== -1);
  },

  // Product methods

  getProductsByRoutine: (routineID) => {
    const routine = routines.filter(routine => routine.id === routineID);
    const productsByRoutine = routine.steps.map(step => step.products);
    return productsByRoutine;
  },

  getProductsByTag: (tag) => {
    return products.filter(product => product.tags.indexOf(tag) !== -1);
  },

  getProductsByBrand: (brand) => {
    return products.filter(product => product.brand === brand);
  }
}

export default client;
