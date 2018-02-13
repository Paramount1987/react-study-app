export default store => next => action => {
    console.log('---', 'beofre store', store.getState());
    console.log('---', 'dispatching', action);
    next(action);
    console.log('---', 'after store', store.getState());
}