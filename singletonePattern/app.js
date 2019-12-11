const singleton = (function () {
    let instance;

    function createInstance() {
        return new Object({name: 'Brad'});
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();

const instanceA = singleton.getInstance();
const instanceB = singleton.getInstance();

console.log(instanceA === instanceB);
//console.log(instanceA);
