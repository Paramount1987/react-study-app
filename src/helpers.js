import Immutable   from 'immutable';

export function arrToMap(arr, DataRecord = Immutable.Map) {
    return arr.reduce((acc, item) =>
        acc.set(item.id, DataRecord(item))
    , Immutable.OrderedMap({}))
}

export function mapToArr(map) {
    return map.toArray();
    //return Object.keys(obj).map(id => obj[id]);
}