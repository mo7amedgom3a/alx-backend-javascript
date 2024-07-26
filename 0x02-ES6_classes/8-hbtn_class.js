export default class HolbertonClass {
    constructor(size, location) {
        this._size = size;
        this._location = location;
    }
    // use the Symbol.toPrimitive to override the default behavior of the object to be converted to a primitive value
    [Symbol.toPrimitive](hint) {
        if (hint === 'number') {
            return this._size;
        }
        if (hint === 'string') {
            return this._location;
        }
        return null;
    }
}
