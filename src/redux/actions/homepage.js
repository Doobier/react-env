export const INCREMENT = 'home/INCREMENT';
export const DECREMENT = 'home/DECREMENT';

export function increment() {
  return {
    type: INCREMENT,
  }
}
export function decrement() {
  return {
    type: DECREMENT,
  }
}