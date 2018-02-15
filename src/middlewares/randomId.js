export default store => next => action => {
    if(!action.generateId) return next(action);
    next({
        ...action,
        id: (Date.now() + Math.random()).toString()
    })
}